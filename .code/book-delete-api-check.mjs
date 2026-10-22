import assert from 'node:assert/strict'
import { createHash, randomUUID } from 'node:crypto'
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:5173'
const headers = { origin, 'x-reader-request': '1' }
const bytes = Buffer.from(`第一章 删除验收\n仅用于本地接口验证的临时书籍。${randomUUID()}`)
const id = createHash('sha256').update(bytes).digest('hex')
const url = `${origin}/api/cloud/books/${id}`
const before = await (await fetch(`${origin}/api/cloud/books`)).json()
try {
  let response = await fetch(url, { method: 'PUT', headers: { ...headers, 'x-book-filename': encodeURIComponent('详情删除验收.txt'), 'x-book-name': encodeURIComponent('详情删除验收') }, body: bytes })
  assert.equal(response.status, 200, await response.clone().text())
  const payload = { position: { bookId: `cloud-${id}`, chapterIndex: 0, paragraphIndex: 0, scrollOffset: 0, updatedAt: Date.now(), readingSeconds: 1 }, bookmarks: [] }
  response = await fetch(`${url}/progress`, { method: 'PUT', headers: { ...headers, 'content-type': 'application/json' }, body: JSON.stringify({ revision: 0, operation: randomUUID(), payload }) })
  assert.equal(response.status, 200, await response.clone().text())
  response = await fetch(url, { method: 'DELETE', headers: { ...headers, origin: 'https://untrusted.invalid' } })
  assert.equal(response.status, 403)
  assert.equal((await fetch(`${url}/file`)).status, 200)
  response = await fetch(url, { method: 'DELETE', headers })
  assert.equal(response.status, 200, await response.clone().text())
  assert.equal((await fetch(`${url}/file`)).status, 404)
  assert.equal((await fetch(`${url}/progress`)).status, 404)
  assert.equal((await fetch(url, { method: 'DELETE', headers })).status, 200)
  const after = await (await fetch(`${origin}/api/cloud/books`)).json()
  assert.equal(after.some(book => book.id === id), false)
  assert.deepEqual(after.map(book => book.id).sort(), before.map(book => book.id).sort())
  console.log('PASS: local fixture upload, saved progress, origin protection, file/progress deletion, idempotent retry, existing books preserved.')
} finally {
  await fetch(url, { method: 'DELETE', headers })
}
