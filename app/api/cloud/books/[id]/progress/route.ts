import { db, guard, json, limitedBytes, snapshot, validId } from '@/lib/cloud';
import { validProgress } from '@/lib/progress';
export async function GET(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const {id} = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  const current = await snapshot(id); return current ? json(current) : json({error:'未找到书籍'},404);
}
export async function PUT(request: Request, context: { params: Promise<{id:string}> }) {
  const denied = guard(request); if (denied) return denied;
  const {id} = await context.params; if (!validId(id)) return json({error:'无效书籍编号'},400);
  let input;
  try { input = JSON.parse(new TextDecoder().decode(await limitedBytes(request,256*1024))); } catch { return json({error:'进度数据无效或过大'},400); }
  if (!validProgress(input)) return json({error:'进度数据无效'},400);
  const current = await snapshot(id); if (!current) return json({error:'未找到书籍'},404);
  if (current.operation === input.operation) return json(current);
  const updated = await db().prepare('UPDATE progress SET revision=revision+1,payload=?,operation=?,updated_at=? WHERE id=? AND revision=? RETURNING revision,payload,operation').bind(JSON.stringify(input.payload), input.operation, Date.now(), id, input.revision).first<{revision:number;payload:string;operation:string}>();
  return updated ? json({...updated,payload:JSON.parse(updated.payload)}) : json(await snapshot(id),409);
}
