import { env } from 'cloudflare:workers';

// Self-hosted sign-in: the reader can run on Cloudflare Workers without the
// Sites platform's injected identity headers. A single owner passcode is
// exchanged for an HMAC-signed, HttpOnly cookie. The passcode itself is stored
// in D1 as a salted PBKDF2 hash; the HMAC key lives in a separate row so the
// passcode never has to be kept in plaintext.
const COOKIE_NAME = 'saya_reader_session';
const SESSION_MESSAGE = 'saya-reader-session-v1';
const PBKDF2_ITERATIONS = 120_000;
const SETTING_SALT = 'passcode_salt';
const SETTING_HASH = 'passcode_hash';
const SETTING_SESSION_KEY = 'session_key';

export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

const LOGIN_LIMIT = 10;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

const encoder = new TextEncoder();
let cachedToken: { key: string; token: Promise<string> } | null = null;

type Config = { salt?: string; hash?: string; sessionKey?: string };

export function readerPasscode(): string {
  const value = (env as unknown as { READER_PASSCODE?: string }).READER_PASSCODE;
  return typeof value === 'string' ? value.trim() : '';
}

export async function readConfig(): Promise<Config> {
  const store = env.DB;
  if (!store) return {};
  try {
    const rows = await store
      .prepare('SELECT key, value FROM reader_settings WHERE key IN (?, ?, ?)')
      .bind(SETTING_SALT, SETTING_HASH, SETTING_SESSION_KEY)
      .all<{ key: string; value: string }>();
    const values = new Map((rows.results ?? []).map((row) => [row.key, row.value]));
    return {
      salt: values.get(SETTING_SALT),
      hash: values.get(SETTING_HASH),
      sessionKey: values.get(SETTING_SESSION_KEY),
    };
  } catch {
    // Older databases may not have the settings table yet.
    return {};
  }
}

export async function passcodeConfigured(): Promise<boolean> {
  const config = await readConfig();
  return Boolean(config.hash && config.salt) || readerPasscode().length > 0;
}

export async function passcodeMatches(input: string): Promise<boolean> {
  const value = input.trim();
  if (!value) return false;

  const config = await readConfig();
  if (config.salt && config.hash) {
    return safeEqual(await deriveHash(value, config.salt), config.hash);
  }

  const fallback = readerPasscode();
  return fallback.length > 0 && safeEqual(value, fallback);
}

export async function currentSessionToken(): Promise<string> {
  const config = await readConfig();
  const key = config.sessionKey || readerPasscode();
  if (!key) return '';
  if (cachedToken?.key !== key) {
    cachedToken = { key, token: signSession(key) };
  }
  return cachedToken.token;
}

export async function changePasscode(
  current: string,
  next: string,
): Promise<boolean> {
  if (!(await passcodeMatches(current))) return false;

  const store = env.DB;
  if (!store) return false;

  const salt = randomHex(16);
  const hash = await deriveHash(next, salt);
  const sessionKey = randomHex(32);
  const now = Date.now();

  await store.batch([
    upsertSetting(store, SETTING_SALT, salt),
    upsertSetting(store, SETTING_HASH, hash),
    upsertSetting(store, SETTING_SESSION_KEY, sessionKey),
    store
      .prepare('DELETE FROM reader_login_attempts WHERE key LIKE ?')
      .bind('passcode:%'),
  ]);

  cachedToken = null;
  return true;
}

function upsertSetting(
  store: D1Database,
  key: string,
  value: string,
): D1PreparedStatement {
  return store
    .prepare(
      `INSERT INTO reader_settings (key, value, updated_at) VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET
         value = excluded.value,
         updated_at = excluded.updated_at`,
    )
    .bind(key, value, Date.now());
}

async function deriveHash(passcode: string, salt: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passcode),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: hexToBytes(salt),
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    key,
    256,
  );
  return toHex(new Uint8Array(bits));
}

async function signSession(secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(SESSION_MESSAGE));
  return toHex(new Uint8Array(signature));
}

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

export async function isAuthorized(headers: Headers): Promise<boolean> {
  const configured = await passcodeConfigured();

  if (!configured) {
    // Deployed on ChatGPT Sites (or the local dev server), where the platform
    // authenticates every request and injects the identity headers.
    return Boolean(headers.get('oai-authenticated-user-email'));
  }

  // Self-hosted: only the signed session cookie is trusted. Request headers can
  // be spoofed by any client, so they must not bypass the passcode.
  const provided = readCookie(headers.get('cookie'), COOKIE_NAME);
  if (!provided) return false;
  return safeEqual(provided, await currentSessionToken());
}

function randomHex(bytes: number): string {
  return toHex(crypto.getRandomValues(new Uint8Array(bytes)));
}

function hexToBytes(value: string): Uint8Array<ArrayBuffer> {
  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
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
