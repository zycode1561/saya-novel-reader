import { db, guard, json } from '@/lib/cloud';
export async function GET(request: Request) { const denied = guard(request); if (denied) return denied; return json((await db().prepare('SELECT id,name,filename,size,created_at FROM books ORDER BY created_at DESC').all()).results); }
