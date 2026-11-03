import { db, guard, json, limitedBytes, validId } from '@/lib/cloud';
import { getObject, putObject } from '@/lib/storage';
const contextId = async (context: { params: Promise<{ id: string }> }) => (await context.params).id;
export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const denied = await guard(request); if (denied) return denied;
  const id = await contextId(context); if (!validId(id)) return json({error:'无效书籍编号'},400);
  const exists = await db().prepare('SELECT id FROM books WHERE id=?').bind(id).first();
  const cover = exists ? await getObject(`covers/${id}`) : null;
  if (!cover) return new Response(null,{status:404,headers:{'cache-control':'private, no-store'}});
  return new Response(cover.body,{headers:{'content-type':'image/jpeg','cache-control':'private, no-cache','x-content-type-options':'nosniff'}});
}
export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const denied = await guard(request); if (denied) return denied;
  const id = await contextId(context); if (!validId(id)) return json({error:'无效书籍编号'},400);
  if (!await db().prepare('SELECT id FROM books WHERE id=?').bind(id).first()) return json({error:'未找到书籍'},404);
  if (request.headers.get('content-type') !== 'image/jpeg') return json({error:'仅接受 JPEG 缩略图'},415);
  try {
    const bytes = await limitedBytes(request,256 * 1024);
    if (bytes.length < 4 || bytes[0] !== 255 || bytes[1] !== 216 || bytes[2] !== 255 || bytes.at(-2) !== 255 || bytes.at(-1) !== 217) return json({error:'无效封面'},400);
    await putObject(`covers/${id}`,bytes,{httpMetadata:{contentType:'image/jpeg'}});
    return json({saved:true});
  } catch { return json({error:'封面过大或保存失败'},400); }
}
