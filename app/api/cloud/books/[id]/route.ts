import { bucket, db, guard, json, validId } from '@/lib/cloud';
export async function PUT(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const { id } = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  try {
    const filename = decodeURIComponent(request.headers.get('x-book-filename') ?? '');
    const name = decodeURIComponent(request.headers.get('x-book-name') ?? filename);
    if (!/\.(txt|md|markdown|epub)$/i.test(filename) || filename.length > 255 || !name || name.length > 255 || /[\r\n\x00]/.test(filename)) return json({error:'不支持的文件名'},400);
    const size = Number(request.headers.get('content-length'));
    if (!Number.isSafeInteger(size) || size <= 0 || size > 50 * 1024 * 1024 || !request.body) return json({error:'文件为空、过大或缺少长度'},400);
    // R2 verifies the SHA-256 while streaming; do not buffer a 50MB book in the Worker.
    await bucket().put(`books/${id}`, request.body, {sha256:id,httpMetadata:{contentType:'application/octet-stream'}});
    await db().batch([
      db().prepare('INSERT OR IGNORE INTO books (id,name,filename,size,created_at) VALUES (?,?,?,?,?)').bind(id,name,filename,size,Date.now()),
      db().prepare('INSERT OR IGNORE INTO progress (id,revision,updated_at) VALUES (?,0,0)').bind(id),
    ]);
    return json(await db().prepare('SELECT * FROM books WHERE id=?').bind(id).first());
  } catch(e) { return json({error:(e as Error).message},400); }
}
