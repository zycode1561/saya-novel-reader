// Isolated visual QA: serves the real reader with fictional, memory-only books.
// No production requests or credentials. Run: node .code/ui-preview.mjs
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public');
const names = ['山海之间', '长安夜雨', '春日来信', '沿着河流回家', '星辰与远方', '一间只在雨天营业的书店', '人间草木', '漫长的旅途'];
const books = names.map((name, i) => ({ id: String(i + 1).padStart(64, '0'), name, filename: name + '.txt', format: 'TXT', size: 26800 + i * 3290, created_at: 1792800000000 - i * 100000, last_read_at: i === 0 ? 1792880000000 : 0 }));
const progress = new Map();
const content = Array.from({ length: 8 }, (_, c) => `第${c + 1}章 ${['山中来信', '渡口', '远行', '雨后'][c % 4]}\n\n` + Array.from({ length: 12 }, (_, p) => `山风从窗外经过，书页轻轻翻动。远处的河流绕过村庄，向着更开阔的地方流去。${p === 0 ? '她把那封来信放在桌上，决定等雨停了就出发。' : '午后的光落在木桌上，街巷渐渐安静下来。那些未曾说出口的话，此刻都变成了纸上的墨迹。'}`).join('\n\n')).join('\n\n');
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const send = (data, type = 'application/json', status = 200) => { res.writeHead(status, { 'content-type': type, 'cache-control': 'no-store' }); res.end(typeof data === 'string' ? data : JSON.stringify(data)); };
  if (url.pathname === '/api/cloud/books') return send(books);
  const api = url.pathname.match(/^\/api\/cloud\/books\/([^/]+)\/(file|progress|read)$/);
  if (api) {
    if (api[2] === 'file') return send(content, 'text/plain; charset=utf-8');
    if (api[2] === 'read') return send({ last_read_at: Date.now() });
    if (req.method === 'PUT') { let body = ''; for await (const part of req) body += part; const data = JSON.parse(body); progress.set(api[1], { ...data, revision: data.revision + 1 }); }
    return send(progress.get(api[1]) || { revision: 0, payload: null, operation: null });
  }
  if (url.pathname.startsWith('/api/')) return send([]);
  if (url.pathname === '/qa/mobile') return send('<!doctype html><html><meta name="viewport" content="width=device-width,initial-scale=1"><title>阅读器 · 390px 验证</title><body style="margin:0;background:#d9d8d3;display:grid;place-items:center;min-height:100vh"><iframe title="手机阅读器" src="/reader/index.html" style="border:0;width:390px;height:844px;max-width:100vw"></iframe></body></html>', 'text/html; charset=utf-8');
  try {
    const file = path.resolve(root, '.' + (url.pathname === '/' ? '/reader/index.html' : url.pathname));
    if (!file.startsWith(root + path.sep)) return send('Not found', 'text/plain', 404);
    const data = await readFile(file);
    const type = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' }[path.extname(file)] || 'application/octet-stream';
    res.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' }); res.end(data);
  } catch { send('Not found', 'text/plain', 404); }
});
server.listen(4317, '127.0.0.1', () => console.log('Local UI preview: http://127.0.0.1:4317'));
