import { db } from '../cloud';
import { deleteObject, getObject, putObject } from '../storage';
export async function saveRecord(kind: string, value: unknown, ttl = 30 * 60_000): Promise<string> {
  const id = crypto.randomUUID();
  await putObject(`online/${kind}/${id}`, new TextEncoder().encode(JSON.stringify(value)), { httpMetadata: { contentType: 'application/json' } });
  try { await db().prepare('INSERT INTO online_records(id,kind,expires_at) VALUES(?,?,?)').bind(id,kind,Date.now()+ttl).run(); }
  catch(error) { await deleteObject(`online/${kind}/${id}`); throw error; }
  return id;
}
export async function removeRecord(kind: string, id: string) {
  await db().prepare('DELETE FROM online_records WHERE id=? AND kind=?').bind(id,kind).run();
  await deleteObject(`online/${kind}/${id}`);
}
export async function record<T>(kind: string, id: string, renew = false): Promise<T> {
  if (!/^[\da-f-]{36}$/i.test(id)) throw new Error('无效的在线记录编号。');
  const row = await db().prepare('SELECT expires_at FROM online_records WHERE id=? AND kind=?').bind(id,kind).first<{expires_at:number}>();
  if (!row || row.expires_at < Date.now()) {
    if(row) await removeRecord(kind,id);
    throw Object.assign(new Error('在线记录已过期，请重新搜索或连接。'),{code:kind==='reading'?'READING_EXPIRED':'RESULT_EXPIRED'});
  }
  const obj = await getObject(`online/${kind}/${id}`);
  if (!obj) throw Object.assign(new Error('在线记录已过期，请重新连接。'),{code:kind==='reading'?'READING_EXPIRED':'RESULT_EXPIRED'});
  if(renew) await db().prepare('UPDATE online_records SET expires_at=? WHERE id=? AND kind=?').bind(Date.now()+30*60_000,id,kind).run();
  return JSON.parse(await new Response(obj.body).text()) as T;
}
export async function pruneRecords() {
  const rows=await db().prepare('SELECT id,kind FROM online_records WHERE expires_at<? LIMIT 20').bind(Date.now()).all<{id:string;kind:string}>();
  await Promise.all(rows.results.map(row=>removeRecord(row.kind,row.id)));
}
