import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
const origin=process.env.TEST_ORIGIN||'http://127.0.0.1:4193'
const run=Date.now()
const headers={'x-reader-request':'1',origin,'content-type':'application/json'}
const getCatalog=async()=>{const response=await fetch(origin+'/api/cloud/books');assert.equal(response.status,200);return response.json()}
async function upload(name) {
  const bytes=Buffer.from(`第一章 ${name}\n\n这是一份上传或阅读排序的独立验收样本。${run}\n\n第二章 远行\n\n打开书籍后，它应当排在书库前面。`)
  const id=createHash('sha256').update(bytes).digest('hex')
  const response=await fetch(`${origin}/api/cloud/books/${id}`,{method:'PUT',headers:{...headers,'content-type':'application/octet-stream','x-book-name':encodeURIComponent(name),'x-book-filename':encodeURIComponent(name+'.txt')},body:bytes})
  assert.equal(response.status,200,await response.clone().text());return await response.json()
}
const a=await upload('先上传的故事'),b=await upload('后上传的故事')
let rows=await getCatalog();assert(rows.findIndex(x=>x.id===b.id)<rows.findIndex(x=>x.id===a.id))
const snapshot=await(await fetch(`${origin}/api/cloud/books/${a.id}/progress`)).json()
const mark=async(id,at,extra={})=>fetch(`${origin}/api/cloud/books/${id}/read`,{method:'PUT',headers:{...headers,...extra},body:JSON.stringify({at})})
const at=Date.now()
let response=await mark(a.id,at);assert.equal(response.status,200);assert.equal((await response.json()).last_read_at,at)
rows=await getCatalog();assert.equal(rows[0].id,a.id)
assert.deepEqual(await(await fetch(`${origin}/api/cloud/books/${a.id}/progress`)).json(),snapshot)
response=await mark(a.id,at-10000);assert.equal(response.status,200);assert.equal((await response.json()).last_read_at,at)
response=await mark(b.id,Date.now());assert.equal(response.status,200)
rows=await getCatalog();assert.equal(rows[0].id,b.id)
await new Promise(resolve=>setTimeout(resolve,20))
const c=await upload('刚上传尚未阅读')
rows=await getCatalog();assert.equal(rows[0].id,c.id);assert.equal(rows.find(x=>x.id===c.id).last_read_at,0)
await new Promise(resolve=>setTimeout(resolve,20))
response=await mark(a.id,Date.now());assert.equal(response.status,200)
rows=await getCatalog();assert.equal(rows[0].id,a.id);assert.equal(rows[1].id,c.id)
response=await mark(a.id,Date.now()+10*60*1000);assert.equal(response.status,400)
response=await mark('f'.repeat(64),Date.now());assert.equal(response.status,404)
response=await mark(a.id,Date.now(),{origin:'https://untrusted.invalid'});assert.equal(response.status,403)
console.log('PASS: new upload leads; later reading leads again; cross-device catalog; older offline event does not overwrite; reading leaves progress/bookmarks unchanged; input and origin checks.')
