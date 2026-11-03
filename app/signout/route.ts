import { clearedSessionCookie } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<Response> {
  const secure = new URL(request.url).protocol === "https:";
  return new Response(null, {
    status: 303,
    headers: {
      location: "/unlock",
      "cache-control": "no-store",
      "set-cookie": clearedSessionCookie(secure),
    },
  });
}
