import { bucket, db, guard, json, validId } from '@/lib/cloud';
export async function DELETE(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const { id } = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  try {
    const row = await db().prepare('SELECT id FROM books WHERE id=?').bind(id).first();
    if (!row) return json({deleted:true});
    const key = `books/${id}`;
    // Keep a streaming backup until the transactional metadata deletion succeeds.
    // A failed D1 batch can restore the file without buffering a large book.
    const backup = await bucket().get(key);
    try {
      await bucket().delete(key);
      await db().batch([
        db().prepare('DELETE FROM progress WHERE id=?').bind(id),
        db().prepare('DELETE FROM books WHERE id=?').bind(id),
      ]);
    } catch (error) {
      if (backup) await bucket().put(key, backup.body, {httpMetadata:backup.httpMetadata,customMetadata:backup.customMetadata});
      throw error;
    } finally {
      if (backup && !backup.bodyUsed) await backup.body.cancel().catch(() => {});
    }
    return json({deleted:true});
  } catch { return json({error:'删除失败，请稍后重试。'},503); }
}
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
