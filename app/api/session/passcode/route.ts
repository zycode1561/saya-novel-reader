import { guard, json, limitedBytes } from "@/lib/cloud";
import {
  changePasscode,
  clearLoginFailures,
  currentSessionToken,
  loginBlocked,
  recordLoginFailure,
  sessionCookie,
} from "@/lib/session";

const MIN_LENGTH = 8;
const MAX_LENGTH = 128;

export async function PUT(request: Request): Promise<Response> {
  const denied = await guard(request);
  if (denied) return denied;

  let input: unknown;
  try {
    input = JSON.parse(new TextDecoder().decode(await limitedBytes(request, 4096)));
  } catch {
    return json({ error: "请求内容无效" }, 400);
  }

  const body = input as {
    currentPasscode?: unknown;
    newPasscode?: unknown;
  } | null;
  const current =
    typeof body?.currentPasscode === "string" ? body.currentPasscode : "";
  const next = typeof body?.newPasscode === "string" ? body.newPasscode : "";

  if (next.length < MIN_LENGTH || next.length > MAX_LENGTH) {
    return json({ error: `新口令需要 ${MIN_LENGTH}–${MAX_LENGTH} 个字符` }, 400);
  }
  if (next !== next.trim()) {
    return json({ error: "新口令不能以空格开头或结尾" }, 400);
  }
  if (next === current) {
    return json({ error: "新口令不能与当前口令相同" }, 400);
  }
  if (!current) {
    return json({ error: "请输入当前口令" }, 400);
  }
  if (await loginBlocked(request)) {
    return json({ error: "尝试次数过多，请 10 分钟后再试" }, 429);
  }

  let changed = false;
  try {
    changed = await changePasscode(current, next);
  } catch (error) {
    console.error("[passcode] change failed", error);
    return json({ error: "修改失败，请稍后重试" }, 500);
  }
  if (!changed) {
    await recordLoginFailure(request);
    return json({ error: "当前口令不正确" }, 400);
  }

  await clearLoginFailures(request);
  const token = await currentSessionToken();
  const secure = new URL(request.url).protocol === "https:";

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "set-cookie": sessionCookie(token, secure),
    },
  });
}
