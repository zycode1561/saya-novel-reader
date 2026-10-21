import { db, guard, json, limitedBytes, validId } from '@/lib/cloud';
import { READ_MARK_QUERY } from '@/lib/library-order';
export async function PUT(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const {id} = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  let at: unknown;
  try { at = JSON.parse(new TextDecoder().decode(await limitedBytes(request,1024))).at; }
  catch { return json({error:'阅读时间无效'},400); }
  const now = Date.now();
  if (!Number.isSafeInteger(at) || (at as number) <= 0 || (at as number) > now + 5 * 60 * 1000) return json({error:'阅读时间无效'},400);
  const row = await db().prepare(READ_MARK_QUERY).bind(Math.min(at as number,now),id).first<{last_read_at:number}>();
  return row ? json(row) : json({error:'未找到书籍'},404);
}
