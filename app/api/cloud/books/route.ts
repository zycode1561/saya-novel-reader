import { db, guard, json } from '@/lib/cloud';
import { CATALOG_QUERY } from '@/lib/library-order';
export async function GET(request: Request) {
  const denied = guard(request); if (denied) return denied;
  return json((await db().prepare(CATALOG_QUERY).all()).results);
}
