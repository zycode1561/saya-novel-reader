import { DatabaseSync } from 'node:sqlite';
import { beforeEach, afterEach, expect, it, vi } from '../../codex-novel-reader/node_modules/vitest/dist/index.js';
import { env } from './cloudflare-env';
import { GET, POST, PUT, DELETE } from '../app/api/online/[...path]/route';
import { privateAddress } from '../lib/online/transport';
let sql:DatabaseSync;
const objects=new Map<string,string>();
const origin='https://library.example';
const rule={id:'fixture',name:'测试书源',host:'https://reader-fixture.example',contentType:1,enableSearch:true,
 searchUrl:'/search?q=$keyword',searchList:'.book',searchName:'a@text',searchAuthor:'.author@text',searchResult:'a@href',
 chapterUrl:'$result',chapterList:'.chapters a',chapterName:'@text',chapterResult:'@href',contentUrl:'$result',contentItems:'#content@html'};
async function call(path:string,method='GET',value?:unknown,headers:Record<string,string>={}){
 const fn=method==='GET'?GET:method==='POST'?POST:method==='PUT'?PUT:DELETE;
 const r=await fn(new Request(origin+'/api/online/'+path,{method,headers:{'x-reader-request':'1','content-type':'application/json',origin,...headers},...(value===undefined?{}:{body:JSON.stringify(value)})}));
 return {status:r.status,data:await r.json() as any};
}
beforeEach(()=>{
 sql=new DatabaseSync(':memory:');objects.clear();sql.exec('CREATE TABLE online_rules(id TEXT PRIMARY KEY,payload TEXT,revision INTEGER);CREATE TABLE online_records(id TEXT PRIMARY KEY,kind TEXT,expires_at INTEGER)');
 env.DB={prepare:(query:string)=>{let args:unknown[]=[];return {bind(...values:unknown[]){args=values;return this},async first(){return sql.prepare(query).get(...args as never[])??null},async all(){return {results:sql.prepare(query).all(...args as never[])}},async run(){return {meta:sql.prepare(query).run(...args as never[])}}}}};
 env.BUCKET={async put(key:string,value:string){objects.set(key,value)},async get(key:string){const value=objects.get(key);return value===undefined?null:{json:async()=>JSON.parse(value)}},async delete(key:string){objects.delete(key)}};
 vi.stubGlobal('fetch',vi.fn(async(input:URL|string)=>{
  const u=new URL(String(input));if(u.hostname==='cloudflare-dns.com')return Response.json({Answer:[{type:1,data:'93.184.216.34'}]});
  if(u.hostname!=='reader-fixture.example')return new Response('unavailable',{status:503});
  if(u.pathname==='/search')return new Response('<div class="book"><a href="/book/1">验证小说</a><span class="author">测试作者</span></div>');
  if(u.pathname==='/book/1')return new Response('<div class="chapters"><a href="/chapter/1">第一章 春日</a><a href="/chapter/2">第二章 旅途</a></div>');
  return new Response('<h1>第一章 春日</h1><div id="content"><p>这是正文。</p><p>下一段故事。</p></div>');
 }));
});
afterEach(()=>{sql.close();vi.unstubAllGlobals()});
async function setup(){
 const list=await call('rules');for(const item of list.data)await call('rules/'+item.id,'PUT',{enabled:false});
 const saved=await call('rules','POST',{raw:rule,format:'any-reader',enabled:true});expect(saved.status).toBe(200);
 return saved.data.id;
}
it('persists rules, search results and reading sessions across separate requests',async()=>{
 await setup();const search=await call('search?q='+encodeURIComponent('验证'));
 expect(search.status).toBe(200);expect(search.data.searchedSources).toBe(1);expect(search.data.results[0].bookName).toBe('验证小说');
 const opened=await call('readings','POST',{resultId:search.data.results[0].id});expect(opened.status).toBe(200);expect(opened.data.chapters).toHaveLength(2);
 const chapter=await call(`readings/${opened.data.id}/chapters/0`);expect(chapter.status).toBe(200);expect(chapter.data.paragraphs).toContain('这是正文。');
 const resumed=await call('readings','POST',{reference:opened.data.reference});expect(resumed.status).toBe(200);
 await call('readings/'+opened.data.id,'DELETE');expect((await call(`readings/${opened.data.id}/chapters/0`)).data.error.code).toBe('READING_EXPIRED');
});
it('invalidates sessions after source changes and expires cached search results',async()=>{
 const id=await setup();const search=await call('search?q=x');const open=await call('readings','POST',{resultId:search.data.results[0].id});
 await call('rules/'+encodeURIComponent(id),'PUT',{enabled:false});expect((await call(`readings/${open.data.id}/chapters/0`)).data.error.code).toBe('READING_EXPIRED');
 sql.prepare('UPDATE online_records SET expires_at=0 WHERE kind=?').run('result');expect((await call('readings','POST',{resultId:search.data.results[0].id})).status).toBe(404);
});
it('keeps import previews and staged source tests usable across requests',async()=>{
 const preview=await call('rules/import','POST',{text:JSON.stringify(rule)});expect(preview.status).toBe(200);
 const committed=await call('rules/import','POST',{token:preview.data.token,updateIds:[]});expect(committed.data.imported).toBe(1);
 const search=await call('rules/test','POST',{raw:rule,format:'any-reader',stage:'search',keyword:'验证'});expect(search.data.items).toHaveLength(1);
 const toc=await call('rules/test','POST',{raw:rule,format:'any-reader',stage:'toc',handle:search.data.items[0].handle});expect(toc.data.items).toHaveLength(2);
 const text=await call('rules/test','POST',{raw:rule,format:'any-reader',stage:'content',handle:toc.data.items[0].handle});expect(text.data.paragraphs).toContain('这是正文。');
});
it('rejects untrusted writes, malformed input and private DNS results',async()=>{
 expect((await call('rules','POST',{}, {origin:'https://untrusted.example'})).status).toBe(403);
 expect((await call('readings','POST',{reference:{sourceId:'fake',bookUrl:'file:///etc/passwd'}})).status).toBe(400);
 await setup();vi.stubGlobal('fetch',vi.fn(async()=>Response.json({Answer:[{type:1,data:'127.0.0.1'}]})));
 // A new hostname avoids a previously checked public DNS cache entry.
 await call('rules','POST',{raw:{...rule,id:'private',host:'https://private-fixture.example'},format:'any-reader',enabled:true});
 const found=await call('search?q=x');expect(found.data.results).toEqual([]);expect(found.data.failedSources).toBe(1);
 expect(vi.mocked(fetch).mock.calls.some((c:unknown[])=>String(c[0]).includes('https://private-fixture.example/'))).toBe(false);
 for(const ip of ['127.0.0.1','10.0.0.1','169.254.169.254','198.18.0.1','::1','fc00::1','::ffff:7f00:1'])expect(privateAddress(ip)).toBe(true);
 expect(privateAddress('93.184.216.34')).toBe(false);
});
