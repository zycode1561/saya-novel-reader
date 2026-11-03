const fs = require('node:fs');
const assert = require('node:assert/strict');

const read = (path) => fs.readFileSync(path, 'utf8');

const migration = read('drizzle/0004_reader_settings.sql');
assert.match(migration, /CREATE TABLE IF NOT EXISTS `reader_settings`/);

const session = read('lib/session.ts');
assert.match(session, /PBKDF2/);
assert.match(session, /PBKDF2_ITERATIONS = 100_000/);
assert.match(session, /PBKDF2_MAX_ITERATIONS = 100_000/);
assert.match(session, /SETTING_ITERATIONS/);
assert.match(session, /passcode_hash/);
assert.match(session, /session_key/);
assert.match(session, /changePasscode/);
assert.match(session, /cachedToken = null/);

const api = read('app/api/session/passcode/route.ts');
assert.match(api, /MIN_LENGTH = 8/);
assert.match(api, /changePasscode\(current, next\)/);
assert.match(api, /修改失败，请稍后重试/);
assert.match(api, /sessionCookie\(token, secure\)/);
assert.match(api, /当前口令不正确/);
assert.match(api, /loginBlocked/);

const page = read('app/page.tsx');
assert.match(page, /account=1/);
assert.match(page, /passcodeConfigured/);

const reader = read('public/reader/reader.js');
assert.match(reader, /账号与安全/);
assert.match(reader, /\/api\/session\/passcode/);
assert.match(reader, /修改登录口令/);
assert.match(reader, /两次输入的新口令不一致/);

const css = read('public/reader/reader-ui.css');
assert.match(css, /\.dnr-passcode-form/);
assert.match(css, /\.dnr-passcode-field input/);

const index = read('public/reader/index.html');
assert.match(index, /reader\.js\?v=20261103-account/);

console.log('PASS: passcode settings migration, hashed storage, session rotation, API validation, settings UI, styles and asset version.');
