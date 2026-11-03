import { safeRelativeReturnPath } from "../../chatgpt-auth";
import {
  clearLoginFailures,
  loginBlocked,
  passcodeMatches,
  readerPasscode,
  recordLoginFailure,
  sessionCookie,
  sessionToken,
} from "@/lib/session";

const FORM_HEADERS = { "cache-control": "no-store" } as const;

function redirectTo(location: string, cookie?: string): Response {
  const headers = new Headers(FORM_HEADERS);
  headers.set("location", location);
  if (cookie) headers.append("set-cookie", cookie);
  return new Response(null, { status: 303, headers });
}

export async function POST(request: Request): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return new Response(null, { status: 403, headers: FORM_HEADERS });
  }

  const secure = new URL(request.url).protocol === "https:";
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirectTo("/unlock?error=wrong");
  }

  const returnTo = safeRelativeReturnPath(String(form.get("return_to") ?? "/"));
  const passcode = String(form.get("passcode") ?? "");

  if (!readerPasscode()) return redirectTo("/unlock?error=unconfigured");
  if (await loginBlocked(request)) {
    return redirectTo(
      `/unlock?error=locked&return_to=${encodeURIComponent(returnTo)}`,
    );
  }
  if (!passcodeMatches(passcode)) {
    await recordLoginFailure(request);
    return redirectTo(
      `/unlock?error=wrong&return_to=${encodeURIComponent(returnTo)}`,
    );
  }

  await clearLoginFailures(request);
  const token = await sessionToken(readerPasscode());
  return redirectTo(returnTo, sessionCookie(token, secure));
}
