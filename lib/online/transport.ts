import type { SourceRule } from '../online-runtime/runtime.mjs';
const dnsCache = new Map<string,{expires:number,pending:Promise<void>}>();
export function privateAddress(raw:string): boolean {
  const ip=raw.toLowerCase().replace(/^\[|\]$/g,'');
  if(ip.includes(':')) {
    if(/^::ffff:/i.test(ip)) {
      const tail=ip.slice(7); if(tail.includes('.')) return privateAddress(tail);
      const parts=tail.split(':'); if(parts.length!==2)return true;
      const [a,b]=parts.map(x=>parseInt(x,16));return privateAddress(`${a>>8}.${a&255}.${b>>8}.${b&255}`);
    }
    return ip==='::'||ip==='::1'||/^(f[cd]|fe[89ab]|ff)/.test(ip);
  }
  const p=ip.split('.').map(Number),[a,b,c]=p;
  return p.length!==4||p.some(x=>!Number.isInteger(x)||x<0||x>255)||a===0||a===10||a===127||a>=224||
    (a===100&&b>=64&&b<=127)||(a===169&&b===254)||(a===172&&b>=16&&b<=31)||
    (a===192&&(b===168||(b===0&&(c===0||c===2))))||(a===198&&(b===18||b===19||(b===51&&c===100)))||(a===203&&b===0&&c===113);
}
async function publicDns(host:string) {
  const cached=dnsCache.get(host);if(cached&&cached.expires>Date.now())return cached.pending;
  const pending=(async()=>{
    const answers=await Promise.all(['A','AAAA'].map(async type=>{
      const res=await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(host)}&type=${type}`,{headers:{accept:'application/dns-json'},signal:AbortSignal.timeout(5000)});
      if(!res.ok)throw new Error('书源域名查询失败。');
      const data=await res.json() as {Answer?:{type:number;data:string}[]};
      return (data.Answer??[]).filter(a=>a.type===1||a.type===28).map(a=>a.data);
    }));
    const ips=answers.flat();if(!ips.length||ips.some(privateAddress))throw new Error('已阻止书源访问本机或私有网络。');
  })();
  if(dnsCache.size>256)dnsCache.clear();dnsCache.set(host,{expires:Date.now()+60_000,pending});
  try{await pending}catch(error){dnsCache.delete(host);throw error}
}
export async function validateCloudUrl(source:SourceRule,raw:string):Promise<URL> {
  const u=new URL(raw),host=u.hostname.toLowerCase();
  if(!['http:','https:'].includes(u.protocol)||u.username||u.password||!source.allowedHosts.has(host))throw new Error('书源 URL 或跳转主机未获授权。');
  if(u.port&&!['80','443'].includes(u.port))throw new Error('书源仅支持标准 HTTP/HTTPS 端口。');
  if(host==='localhost'||/\.(local|internal|localhost)$/.test(host)||host.includes(':')||/^\d+\./.test(host))throw new Error('书源必须使用公开域名。');
  await publicDns(host);return u;
}
export const cloudTransport={validateUrl:validateCloudUrl,fetch:(url:URL,init:RequestInit)=>fetch(url,init)};
