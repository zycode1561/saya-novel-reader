import { env } from 'cloudflare:workers';
// This is a single-owner PRIVATE Site. Sites dispatch authenticates every request,
// including the local bridge's server-only OAI-Sites-Authorization token.
// Do not broaden the Site audience without adding per-user library namespaces.
export function db() { if (!env.DB) throw new Error('数据库尚未配置'); return env.DB; }
export function bucket() { if (!env.BUCKET) throw new Error('文件存储尚未配置'); return env.BUCKET; }
export function json(value: unknown, status = 200) { return Response.json(value, { status, headers: { 'cache-control': 'no-store' } }); }
export function guard(request: Request): Response | null {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json({ error: '请求来源不匹配' }, 403);
  if (!['GET', 'HEAD'].includes(request.method) && request.headers.get('x-reader-request') !== '1') return json({ error: '无效请求' }, 403);
  return null;
}
export function validId(id: string) { return /^[a-f0-9]{64}$/.test(id); }
export async function snapshot(id: string) {
  const row = await db().prepare('SELECT revision, payload, operation FROM progress WHERE id = ?').bind(id).first<{revision: number; payload: string | null; operation: string | null}>();
  return row ? { ...row, payload: row.payload ? JSON.parse(row.payload) : null } : null;
}
export async function limitedBytes(request: Request, max: number): Promise<Uint8Array> {
  if (Number(request.headers.get('content-length')) > max) throw new Error('文件超过大小限制');
  const reader = request.body?.getReader(); if (!reader) throw new Error('请求内容为空');
  const chunks: Uint8Array[] = []; let size = 0;
  for (;;) { const r = await reader.read(); if (r.done) break; size += r.value.length; if (size > max) { await reader.cancel(); throw new Error('文件超过大小限制'); } chunks.push(r.value); }
  const result = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { result.set(chunk, offset); offset += chunk.length; } return result;
}
