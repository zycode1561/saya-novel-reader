import { bucket, db, guard, json, validId } from '@/lib/cloud';
export async function GET(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const {id} = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  const row = await db().prepare('SELECT filename FROM books WHERE id=?').bind(id).first<{filename:string}>();
  const file = row ? await bucket().get(`books/${id}`) : null;
  if (!file || !row) return json({error:'未找到书籍'},404);
  return new Response(file.body, {headers:{'content-type':'application/octet-stream','content-length':String(file.size),'content-disposition':`attachment; filename*=UTF-8''${encodeURIComponent(row.filename)}`,'cache-control':'private, no-store','x-content-type-options':'nosniff'}});
}
