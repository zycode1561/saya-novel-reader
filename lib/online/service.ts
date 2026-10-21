import { OnlineSourceEngine, RuleStore, compileRule, type RuleState, type OnlineReadingReference, type RuleImportPreview, type RuleTestRequest, type RuleTestResponse } from '../online-runtime/runtime.mjs';
import { db } from '../cloud';
import { cloudTransport } from './transport';
import { record, saveRecord } from './state';
import type { ChapterLink, ResolvedOnlineResult } from '../online-runtime/runtime.mjs';
export type StoredResult=Omit<ResolvedOnlineResult,'source'>&{sourceId:string;revision?:string};
export interface Reading { result:StoredResult; links:ChapterLink[] }
export function pack(result:ResolvedOnlineResult):StoredResult {const {source,...rest}=result;return {...rest,sourceId:source.id,revision:source.revision};}
// Six parallel sources and an eight-second per-source search budget let all
// eleven bundled sources start within the aggregate deadline, without exceeding
// the Worker connection budget. Chapter reads retain their longer timeout.
export const CLOUD_ENGINE_CONFIG = {searchConcurrency:6,chapterConcurrency:2,requestTimeoutMs:12000,searchTimeoutMs:22000,searchSourceTimeoutMs:8000,maxRetries:1,minRequestIntervalMs:100,maxRequestIntervalMs:300,maxSearchResults:100};
export async function service() {
  const row=await db().prepare('SELECT payload,revision FROM online_rules WHERE id=?').bind('owner').first<{payload:string;revision:number}>();
  let revision=row?.revision??0;
  const initial:RuleState=row?JSON.parse(row.payload):{custom:[],builtinEnabled:{}};
  const rules=new RuleStore({get:()=>initial,set:async value=>{
    const result=await db().prepare('INSERT INTO online_rules(id,payload,revision) VALUES(?,?,1) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload,revision=online_rules.revision+1 WHERE online_rules.revision=?')
      .bind('owner',JSON.stringify(value),revision).run();
    if(result.meta.changes!==1)throw new Error('书源已在其他页面修改，请刷新后重试。');revision++;
  }});
  const engine=new OnlineSourceEngine(CLOUD_ENGINE_CONFIG,cloudTransport);
  engine.setSources(rules.sources());
  const unpack=(saved:StoredResult):ResolvedOnlineResult=>{
    const source=engine.sources.find(s=>s.id===saved.sourceId&&s.revision===saved.revision);
    if(!source)throw Object.assign(new Error('书源已修改或停用，请重新搜索。'),{code:'READING_EXPIRED'});
    const {sourceId:_,revision:__,...rest}=saved;return {...rest,source};
  };
  return {rules,engine,unpack};
}
export async function openReading(engine:OnlineSourceEngine,result:ResolvedOnlineResult,signal:AbortSignal) {
  const links=await engine.previewToc(result,signal);
  const id=await saveRecord('reading',{result:pack(result),links} satisfies Reading);
  const reference:OnlineReadingReference={sourceId:result.source.id,bookUrl:result.bookUrl,bookName:result.public.bookName,keyword:result.keyword??result.public.bookName};
  return {id,reference,sourceName:result.source.name,chapters:links.map(l=>({title:l.title}))};
}
export async function commitImport(rules:RuleStore,token:string,updateIds:string[]) {
  const saved=await record<RuleImportPreview>('import',token);
  const current=rules.preview(JSON.stringify(saved.items.map(i=>i.raw)));
  return rules.commit(current.token,updateIds);
}
export async function testRule(engine:OnlineSourceEngine,input:RuleTestRequest,signal:AbortSignal):Promise<RuleTestResponse> {
  const fingerprint=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify([input.format,input.raw])));
  const hash=Array.from(new Uint8Array(fingerprint),x=>x.toString(16).padStart(2,'0')).join('');
  const source=compileRule(input.raw,input.format,`test:${hash}`);
  const response:RuleTestResponse={stage:input.stage,requests:[],items:[],paragraphs:[],diagnostics:[]};
  try {
    if(input.stage==='search') {
      if(!input.keyword?.trim())throw new Error('请输入测试关键词。');
      const results=await engine.previewSearch(source,input.keyword.trim(),signal,response.requests);
      response.items=await Promise.all(results.slice(0,100).map(async result=>({handle:await saveRecord('test',{hash,kind:'book',result:pack(result)},15*60_000),title:result.public.bookName,author:result.public.author,url:result.bookUrl})));
    } else {
      const saved=await record<{hash:string;kind:string;result?:StoredResult;link?:ChapterLink}>('test',input.handle??'');
      if(saved.hash!==hash)throw new Error('规则已修改，请重新测试搜索。');
      if(input.stage==='toc'&&saved.kind==='book'&&saved.result) {
        const links=await engine.previewToc({...saved.result,source},signal,response.requests);
        response.items=await Promise.all(links.slice(0,100).map(async link=>({handle:await saveRecord('test',{hash,kind:'chapter',link},15*60_000),title:link.title,url:link.url})));
      } else if(input.stage==='content'&&saved.kind==='chapter'&&saved.link) {
        response.paragraphs=(await engine.previewContent(source,saved.link,signal,response.requests)).paragraphs;
      } else throw new Error('请选择上一步的测试结果。');
    }
  }catch(error){if(signal.aborted)throw error;response.diagnostics=[{field:input.stage,message:error instanceof Error?error.message:String(error)}];}
  return response;
}
