import { z } from 'zod';
import { guard, json, limitedBytes } from '@/lib/cloud';
import { service, openReading, pack, commitImport, testRule, type Reading, type StoredResult } from '@/lib/online/service';
import { record, saveRecord, removeRecord, pruneRecords } from '@/lib/online/state';
import type { OnlineReadingReference } from '@/lib/online-runtime/runtime.mjs';
const raw=z.record(z.string(),z.unknown()),format=z.enum(['any-reader','sonovel']);
async function body(request:Request) {return JSON.parse(new TextDecoder().decode(await limitedBytes(request,2*1024*1024+16384)));}
async function handle(request:Request):Promise<Response> {
  const denied=await guard(request);if(denied)return json({error:{code:'FORBIDDEN',message:'请求来源不匹配。'}},403);
  const url=new URL(request.url),parts=url.pathname.slice('/api/online/'.length).split('/').map(decodeURIComponent),method=request.method;
  try {
    const {rules,engine,unpack}=await service();
    const signal=AbortSignal.any([request.signal,AbortSignal.timeout(25000)]);
    try {
      if(parts[0]==='search'&&parts.length===1&&method==='GET') {
        const query=z.string().trim().min(1).max(100).parse(url.searchParams.get('q'));
        await pruneRecords();
        const found=await engine.search(query,signal);
        const results=await Promise.all(found.resolved.map(async result=>{
          result.keyword=query;const id=await saveRecord('result',pack(result),15*60_000);return {...result.public,id};
        }));return json({query,results,failedSources:found.failedSources,searchedSources:found.searchedSources});
      }
      if(parts[0]==='readings') {
        if(parts.length===1&&method==='POST') {
          const input=z.union([z.object({resultId:z.string().uuid()}),z.object({reference:z.object({sourceId:z.string().max(240),bookUrl:z.string().url().max(8192),bookName:z.string().min(1).max(500),keyword:z.string().min(1).max(100)})})]).parse(await body(request));
          const result='resultId'in input?unpack(await record<StoredResult>('result',input.resultId)):await engine.resumeReading(input.reference as OnlineReadingReference,signal);
          return json(await openReading(engine,result,signal));
        }
        const id=z.string().uuid().parse(parts[1]);
        if(parts.length===2&&method==='DELETE'){await removeRecord('reading',id);return json({ok:true});}
        if(parts.length===4&&parts[2]==='chapters'&&method==='GET') {
          const index=z.coerce.number().int().nonnegative().parse(parts[3]);
          const saved=await record<Reading>('reading',id,true),link=saved.links[index];
          if(!link)return json({error:{code:'CHAPTER_NOT_FOUND',message:'未找到该章节。'}},404);
          return json({index,...await engine.readChapter(unpack(saved.result),link,signal)});
        }
      }
      if(parts[0]==='rules') {
        if(parts.length===1) {
          if(method==='GET')return json(rules.list());
          if(method==='POST'){const v=z.object({raw,format,enabled:z.boolean().default(true),id:z.string().max(240).optional()}).parse(await body(request));return json(await rules.save(v.raw,v.format,v.enabled,v.id));}
        }
        if(parts[1]==='export'&&parts.length===2&&method==='GET'){const id=url.searchParams.get('id');return json(id?rules.get(id).raw:rules.list().filter(r=>r.kind==='custom').map(r=>r.raw));}
        if(parts[1]==='import'&&parts.length===2&&method==='POST') {
          const v=z.union([z.object({text:z.string()}),z.object({token:z.string().uuid(),updateIds:z.array(z.string().max(240)).max(200).default([])})]).parse(await body(request));
          if('text'in v){const preview=rules.preview(v.text);const token=await saveRecord('import',preview,15*60_000);return json({...preview,token});}
          const result=await commitImport(rules,v.token,v.updateIds);await removeRecord('import',v.token);return json(result);
        }
        if(parts[1]==='test'&&parts.length===2&&method==='POST') {
          const v=z.object({raw,format,stage:z.enum(['search','toc','content']),keyword:z.string().max(100).optional(),handle:z.string().uuid().optional()}).parse(await body(request));return json(await testRule(engine,v,signal));
        }
        if(parts.length===2&&parts[1]) {
          if(method==='GET')return json(rules.get(parts[1]));
          if(method==='DELETE'){await rules.remove(parts[1]);return json({ok:true});}
          if(method==='PUT'){const v=z.object({enabled:z.boolean()}).parse(await body(request));return json(await rules.setEnabled(parts[1],v.enabled));}
        }
      }
      return json({error:{code:'NOT_FOUND',message:'未找到在线阅读接口。'}},404);
    } finally {await engine.dispose();rules.dispose();}
  }catch(error) {
    const e=error as Error&{code?:string};return json({error:{code:e.code??'REQUEST_FAILED',message:e.message??'在线阅读请求失败。'}},e.code==='READING_EXPIRED'||e.code==='RESULT_EXPIRED'?404:error instanceof z.ZodError?400:502);
  }
}
export const GET=handle,POST=handle,PUT=handle,DELETE=handle;
