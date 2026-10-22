import { DatabaseSync } from 'node:sqlite'
import { afterEach, beforeEach, expect, it, vi } from '../../codex-novel-reader/node_modules/vitest/dist/index.js'
import { env } from './cloudflare-env'
import { DELETE } from '../app/api/cloud/books/[id]/route'
import { GET as file } from '../app/api/cloud/books/[id]/file/route'
import { GET as progress, PUT as saveProgress } from '../app/api/cloud/books/[id]/progress/route'

const id = 'a'.repeat(64), other = 'b'.repeat(64), origin = 'https://library.example'
let sql: DatabaseSync, failBatch = false, failFile = false
const objects = new Map<string, Uint8Array>()
const bytes = new TextEncoder().encode('第一章 春日\n这是删除验收用的测试书籍。')
const context = (value = id) => ({ params: Promise.resolve({ id: value }) })
const request = (headers: Record<string, string> = { 'x-reader-request': '1', origin }) => new Request(`${origin}/api/cloud/books/${id}`, { method: 'DELETE', headers })
const row = (table: string, value = id) => sql.prepare(`SELECT * FROM ${table} WHERE id=?`).get(value)
beforeEach(() => {
  failBatch = false; failFile = false; objects.clear()
  sql = new DatabaseSync(':memory:')
  sql.exec('PRAGMA foreign_keys=ON; CREATE TABLE books(id TEXT PRIMARY KEY,name TEXT,filename TEXT,size INTEGER,created_at INTEGER,last_read_at INTEGER); CREATE TABLE progress(id TEXT PRIMARY KEY REFERENCES books(id),revision INTEGER,payload TEXT,operation TEXT,updated_at INTEGER)')
  for (const value of [id, other]) {
    sql.prepare('INSERT INTO books VALUES(?,?,?,?,?,?)').run(value, '验收书籍', '验收书籍.txt', bytes.length, 123, 456)
    sql.prepare('INSERT INTO progress VALUES(?,?,?,?,?)').run(value, 3, '{"bookmarks":[]}', 'saved-operation', 456)
    objects.set(`books/${value}`, bytes.slice())
  }
  env.DB = {
    prepare(query: string) {
      let args: unknown[] = []
      return {
        bind(...values: unknown[]) { args = values; return this },
        async first() { return sql.prepare(query).get(...args as never[]) ?? null },
        run() { return sql.prepare(query).run(...args as never[]) },
      }
    },
    async batch(statements: Array<{ run(): unknown }>) {
      sql.exec('BEGIN')
      try {
        const results = statements.map((statement, index) => { const result = statement.run(); if (failBatch && index === 0) throw new Error('D1 unavailable'); return result })
        sql.exec('COMMIT'); return results
      } catch (error) { sql.exec('ROLLBACK'); throw error }
    },
  }
  env.BUCKET = {
    async get(key: string) {
      const value = objects.get(key); if (!value) return null
      const response = new Response(value.slice())
      return { body: response.body!, get bodyUsed() { return response.bodyUsed }, size: value.length, httpMetadata: { contentType: 'application/octet-stream' }, customMetadata: {} }
    },
    async delete(key: string) { if (failFile) throw new Error('R2 unavailable'); objects.delete(key) },
    async put(key: string, value: ReadableStream) { objects.set(key, new Uint8Array(await new Response(value).arrayBuffer())) },
  }
})
afterEach(() => { sql.close(); vi.restoreAllMocks() })

it('deletes the selected cloud file and progress transactionally while retaining the other book', async () => {
  expect((await DELETE(request(), context())).status).toBe(200)
  expect(row('books')).toBeUndefined(); expect(row('progress')).toBeUndefined()
  expect(objects.has(`books/${id}`)).toBe(false)
  expect(row('books', other)).toBeDefined(); expect(row('progress', other)).toBeDefined()
  expect(objects.has(`books/${other}`)).toBe(true)
  expect((await file(new Request(`${origin}/api/cloud/books/${id}/file`), context())).status).toBe(404)
  expect((await progress(new Request(`${origin}/api/cloud/books/${id}/progress`), context())).status).toBe(404)
})
it('handles retries and an already deleted book without affecting other records', async () => {
  await DELETE(request(), context())
  expect((await DELETE(request(), context())).status).toBe(200)
  expect((await DELETE(request(), context('c'.repeat(64)))).status).toBe(200)
  expect(row('books', other)).toBeDefined()
})
it('rejects invalid IDs and untrusted writes before deleting anything', async () => {
  expect((await DELETE(request({ origin, 'x-reader-request': '0' }), context())).status).toBe(403)
  expect((await DELETE(request({ origin: 'https://untrusted.example', 'x-reader-request': '1' }), context())).status).toBe(403)
  expect((await DELETE(request(), context('../books'))).status).toBe(400)
  expect(row('books')).toBeDefined(); expect(row('progress')).toBeDefined(); expect(objects.get(`books/${id}`)).toEqual(bytes)
})
it('preserves the book and progress when the file store fails', async () => {
  failFile = true
  expect((await DELETE(request(), context())).status).toBe(503)
  expect(row('books')).toBeDefined(); expect(row('progress')).toBeDefined(); expect(objects.get(`books/${id}`)).toEqual(bytes)
})
it('rolls back metadata and restores the streamed file when the database batch fails', async () => {
  failBatch = true
  expect((await DELETE(request(), context())).status).toBe(503)
  expect(row('books')).toBeDefined(); expect(row('progress')).toMatchObject({ revision: 3, operation: 'saved-operation' })
  expect(objects.get(`books/${id}`)).toEqual(bytes)
  failBatch = false
  expect((await DELETE(request(), context())).status).toBe(200)
})
it('does not recreate deleted progress when a stale client tries to sync', async () => {
  await DELETE(request(), context())
  const body = { revision: 3, operation: crypto.randomUUID(), payload: { position: { bookId: `cloud-${id}`, chapterIndex: 0, paragraphIndex: 0, scrollOffset: 0, updatedAt: Date.now(), readingSeconds: 1 }, bookmarks: [] } }
  const response = await saveProgress(new Request(`${origin}/api/cloud/books/${id}/progress`, { method: 'PUT', headers: { origin, 'x-reader-request': '1', 'content-type': 'application/json' }, body: JSON.stringify(body) }), context())
  expect(response.status).toBe(404); expect(row('progress')).toBeUndefined()
})
