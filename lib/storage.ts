import { db } from '@/lib/cloud';

// D1-backed object storage. Book files are gzipped once, split into fixed
// 64 KiB chunks and stored as base64 rows, so the site does not need R2.
// The layout matches the reader_objects / reader_chunks tables already used by
// the deployed library, which keeps existing uploads readable.
const CHUNK_SIZE = 64 * 1024;
const WRITE_BATCH_SIZE = 4;
const READ_PAGE_SIZE = 16;

type Bytes = Uint8Array<ArrayBufferLike>;

type HttpMetadata = { contentType?: string };

export type StoredObject = {
  body: ReadableStream<Uint8Array>;
  size: number;
  httpMetadata: HttpMetadata;
  customMetadata?: Record<string, string>;
  bodyUsed: boolean;
};

type PutOptions = {
  httpMetadata?: HttpMetadata;
  customMetadata?: Record<string, string>;
};

type ObjectRow = {
  generation: string;
  size: number;
  stored_size: number;
  metadata: string;
};

export async function getObject(key: string): Promise<StoredObject | null> {
  const row = await db()
    .prepare('SELECT generation, size, stored_size, metadata FROM reader_objects WHERE key = ?')
    .bind(key)
    .first<ObjectRow>();
  if (!row) return null;

  let metadata: {
    httpMetadata?: HttpMetadata;
    customMetadata?: Record<string, string>;
  } = {};
  try {
    metadata = JSON.parse(row.metadata) as typeof metadata;
  } catch {
    metadata = {};
  }

  let cancelled = false;
  const encoded = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (let offset = 0; ; offset += READ_PAGE_SIZE) {
          if (cancelled) return;
          const page = await db()
            .prepare(
              'SELECT data FROM reader_chunks WHERE generation = ? ORDER BY n LIMIT ? OFFSET ?',
            )
            .bind(row.generation, READ_PAGE_SIZE, offset)
            .all<{ data: string }>();
          if (!page.results.length) break;
          for (const chunk of page.results) {
            if (cancelled) return;
            controller.enqueue(base64ToBytes(chunk.data));
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
    cancel() {
      cancelled = true;
    },
  });

  return {
    body: encoded.pipeThrough(
      new DecompressionStream('gzip') as unknown as ReadableWritablePair<Bytes, Bytes>,
    ),
    size: row.size,
    httpMetadata: metadata.httpMetadata ?? {},
    customMetadata: metadata.customMetadata,
    bodyUsed: false,
  };
}

export async function putObject(
  key: string,
  body: ReadableStream<Uint8Array> | Uint8Array,
  options: PutOptions = {},
): Promise<void> {
  const store = db();
  const generation = crypto.randomUUID();
  const source =
    body instanceof Uint8Array
      ? new Blob([body as BlobPart]).stream()
      : body;

  let size = 0;
  const counted = source.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        size += chunk.byteLength;
        controller.enqueue(chunk);
      },
    }),
  );

  const reader = counted
    .pipeThrough(
      new CompressionStream('gzip') as unknown as ReadableWritablePair<Bytes, Bytes>,
    )
    .getReader();
  let carry: Bytes = new Uint8Array(0);
  let index = 0;
  let storedSize = 0;
  let batch: D1PreparedStatement[] = [];

  const flush = async () => {
    if (!batch.length) return;
    await store.batch(batch);
    batch = [];
  };

  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (value?.byteLength) {
        storedSize += value.byteLength;
        carry = carry.length ? concatBytes(carry, value) : value;
        while (carry.length >= CHUNK_SIZE) {
          const part = carry.slice(0, CHUNK_SIZE);
          carry = carry.slice(CHUNK_SIZE);
          batch.push(insertChunk(store, generation, index, part));
          index += 1;
          if (batch.length >= WRITE_BATCH_SIZE) await flush();
        }
      }
      if (done) break;
    }
    if (carry.length) {
      batch.push(insertChunk(store, generation, index, carry));
      index += 1;
    }
    await flush();

    const previous = await store
      .prepare('SELECT generation FROM reader_objects WHERE key = ?')
      .bind(key)
      .first<{ generation: string }>();

    await store
      .prepare(
        `INSERT INTO reader_objects (key, generation, size, stored_size, metadata)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(key) DO UPDATE SET
           generation = excluded.generation,
           size = excluded.size,
           stored_size = excluded.stored_size,
           metadata = excluded.metadata`,
      )
      .bind(
        key,
        generation,
        size,
        storedSize,
        JSON.stringify({
          httpMetadata: options.httpMetadata ?? {},
          customMetadata: options.customMetadata ?? {},
        }),
      )
      .run();

    if (previous?.generation && previous.generation !== generation) {
      await store
        .prepare('DELETE FROM reader_chunks WHERE generation = ?')
        .bind(previous.generation)
        .run();
    }
  } catch (error) {
    await store
      .prepare('DELETE FROM reader_chunks WHERE generation = ?')
      .bind(generation)
      .run()
      .catch(() => {});
    throw error;
  }
}

export async function deleteObject(key: string): Promise<void> {
  const store = db();
  const row = await store
    .prepare('SELECT generation FROM reader_objects WHERE key = ?')
    .bind(key)
    .first<{ generation: string }>();
  if (!row) return;
  await store.prepare('DELETE FROM reader_chunks WHERE generation = ?').bind(row.generation).run();
  await store.prepare('DELETE FROM reader_objects WHERE key = ?').bind(key).run();
}

function insertChunk(
  store: D1Database,
  generation: string,
  index: number,
  bytes: Bytes,
): D1PreparedStatement {
  return store
    .prepare(
      'INSERT INTO reader_chunks (generation, n, data, created_at) VALUES (?, ?, ?, ?)',
    )
    .bind(generation, index, bytesToBase64(bytes), Date.now());
}

function concatBytes(left: Bytes, right: Bytes): Bytes {
  const merged = new Uint8Array(left.length + right.length);
  merged.set(left, 0);
  merged.set(right, left.length);
  return merged;
}

function bytesToBase64(bytes: Bytes): string {
  let binary = '';
  const step = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += step) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + step));
  }
  return btoa(binary);
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
