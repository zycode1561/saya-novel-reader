import assert from 'node:assert/strict'
import { createHash,randomUUID } from 'node:crypto'
const origin=process.env.TEST_ORIGIN || 'http://127.0.0.1:5173'
const bytes=Buffer.from('第一章 春日\n\n这是一份自动化同步验收样本。\n\n第二章 旅途\n\n另一台设备可以继续阅读。')
const id=createHash('sha256').update(bytes).digest('hex')
const headers={'x-reader-request':'1','origin':origin}
const url=`${origin}/api/cloud/books/${id}`
let response=await fetch(url,{method:'PUT',headers:{...headers,'x-book-filename':encodeURIComponent('同步验收.txt'),'x-book-name':encodeURIComponent('同步验收'),'content-type':'application/octet-stream'},body:bytes})
assert.equal(response.status,200,await response.clone().text())
response=await fetch(url+'/file');assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),bytes)
response=await fetch(url,{method:'PUT',headers:{...headers,'x-book-filename':'test.txt','x-book-name':'test'},body:Buffer.from('wrong bytes')});assert.equal(response.status,400)
let snapshot=await (await fetch(url+'/progress')).json()
const position={bookId:'test-device-a',chapterIndex:1,paragraphIndex:3,scrollOffset:0,updatedAt:Date.now(),readingSeconds:15}
const operation=randomUUID()
const payload={position,bookmarks:[]}
const write=(revision,op,data=payload,extra={})=>fetch(url+'/progress',{method:'PUT',headers:{...headers,'content-type':'application/json',...extra},body:JSON.stringify({revision,operation:op,payload:data})})
response=await write(snapshot.revision,operation);assert.equal(response.status,200);const updated=await response.json();assert.equal(updated.revision,snapshot.revision+1)
response=await write(snapshot.revision,operation);assert.equal(response.status,200);assert.equal((await response.json()).revision,updated.revision)
response=await write(snapshot.revision,randomUUID());assert.equal(response.status,409);assert.equal((await response.json()).revision,updated.revision)
response=await write(updated.revision,randomUUID(),{position:{...position,paragraphIndex:-1},bookmarks:[]});assert.equal(response.status,400)
response=await write(updated.revision,randomUUID(),payload,{origin:'https://untrusted.invalid'});assert.equal(response.status,403)
const catalog=await (await fetch(origin+'/api/cloud/books')).json();assert.equal(catalog.filter(b=>b.id===id).length,1)
console.log('PASS: file round-trip, SHA-256 verification, deduplication, progress CAS, lost-ack retry, validation, origin protection.')
