import { env } from 'cloudflare:workers';

// Self-hosted sign-in: the reader can run on Cloudflare Workers without the
// Sites platform's injected identity headers. A single owner passcode is
// exchanged for an HMAC-signed, HttpOnly cookie.
const COOKIE_NAME = 'saya_reader_session';
const SESSION_MESSAGE = 'saya-reader-session-v1';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

const encoder = new TextEncoder();
let cachedToken: { passcode: string; token: Promise<string> } | null = null;

const LOGIN_LIMIT = 10;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

function loginKey(request: Request): string {
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-real-ip') ??
    'local';
  return `passcode:${ip}`;
}

export async function loginBlocked(request: Request): Promise<boolean> {
  const store = env.DB;
  if (!store) return false;
  try {
    const now = Date.now();
    await store
      .prepare('DELETE FROM reader_login_attempts WHERE expires_at < ?')
      .bind(now)
      .run();
    const row = await store
      .prepare('SELECT count, expires_at FROM reader_login_attempts WHERE key = ?')
      .bind(loginKey(request))
      .first<{ count: number; expires_at: number }>();
    return Boolean(row && row.expires_at > now && row.count >= LOGIN_LIMIT);
  } catch {
    return false;
  }
}

export async function recordLoginFailure(request: Request): Promise<void> {
  const store = env.DB;
  if (!store) return;
  const now = Date.now();
  try {
    await store
      .prepare(
        `INSERT INTO reader_login_attempts (key, count, expires_at)
         VALUES (?, 1, ?)
         ON CONFLICT(key) DO UPDATE SET
           count = CASE WHEN expires_at > ? THEN count + 1 ELSE 1 END,
           expires_at = ?`,
      )
      .bind(loginKey(request), now + LOGIN_WINDOW_MS, now, now + LOGIN_WINDOW_MS)
      .run();
  } catch {
    // Rate limiting is best effort; a missing table must not block sign-in.
  }
}

export async function clearLoginFailures(request: Request): Promise<void> {
  const store = env.DB;
  if (!store) return;
  try {
    await store
      .prepare('DELETE FROM reader_login_attempts WHERE key = ?')
      .bind(loginKey(request))
      .run();
  } catch {
    // Ignore cleanup failures.
  }
}

export function readerPasscode(): string {
  const value = (env as unknown as { READER_PASSCODE?: string }).READER_PASSCODE;
  return typeof value === 'string' ? value.trim() : '';
}

export async function sessionToken(passcode: string): Promise<string> {
  if (!passcode) return '';
  if (cachedToken?.passcode !== passcode) {
    cachedToken = { passcode, token: signSession(passcode) };
  }
  return cachedToken.token;
}

async function signSession(passcode: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passcode),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(SESSION_MESSAGE));
  return toHex(new Uint8Array(signature));
}

export function passcodeMatches(input: string): boolean {
  const expected = readerPasscode();
  return expected.length > 0 && safeEqual(input.trim(), expected);
}

export async function isAuthorized(headers: Headers): Promise<boolean> {
  const passcode = readerPasscode();

  if (!passcode) {
    // Deployed on ChatGPT Sites (or the local dev server), where the platform
    // authenticates every request and injects the identity headers.
    return Boolean(headers.get('oai-authenticated-user-email'));
  }

  // Self-hosted: only the signed session cookie is trusted. Request headers can
  // be spoofed by any client, so they must not bypass the passcode.
  const provided = readCookie(headers.get('cookie'), COOKIE_NAME);
  if (!provided) return false;
  return safeEqual(provided, await sessionToken(passcode));
}

export function sessionCookie(token: string, secure: boolean): string {
  return `${COOKIE_NAME}=${token}; Path=/; Max-Age=${SESSION_MAX_AGE}; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`;
}

export function clearedSessionCookie(secure: boolean): string {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`;
}

function readCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index === -1) continue;
    if (part.slice(0, index).trim() !== name) continue;
    return part.slice(index + 1).trim();
  }
  return null;
}

function toHex(bytes: Uint8Array): string {
  let result = '';
  for (const byte of bytes) result += byte.toString(16).padStart(2, '0');
  return result;
}

function safeEqual(left: string, right: string): boolean {
  const a = encoder.encode(left);
  const b = encoder.encode(right);
  let diff = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    diff |= (a[index] ?? 0) ^ (b[index] ?? 0);
  }
  return diff === 0;
}
