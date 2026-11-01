const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const source=fs.readFileSync('public/reader/reader.js','utf8');
const jsx=(type,props)=>({type,props});
let books=[], recents=[], saved={};
const ctx=vm.createContext({import_jsx_runtime:{jsx,jsxs:jsx,Fragment:'Fragment'},import_react:{useRef:()=>({current:null}),useState:init=>[typeof init==='function'?init():init,()=>{}],useEffect:()=>{},useLayoutEffect:()=>{}},
 Icon:'Icon',read:()=>books, useReader:()=>({recents}),useUploads:()=>({running:false}),readingTimes:()=>({}),bindings:()=>({}),loadProgress:()=>saved,sortCloudBooks:b=>[...b],cloudHosted:true,
 UploadStatus:'UploadStatus',BookCover:'BookCover',ContinueReadingCard:'ContinueReadingCard',ShelfBookCover:'Cover',displayBookName:s=>s,formatBytes:n=>n+' B',bookFormat:()=> 'TXT',bookDate:()=>'',positionShelfMenu:()=>{},toggleShelfMenu:()=>{},format:()=> 'TXT',progress:b=>b.progressPercent??null,source:()=> '本地导入'
});
vm.runInContext(source.slice(source.indexOf('\tfunction resumePosition('),source.indexOf('\tfunction ContinueReadingCard(')),ctx);
vm.runInContext(source.slice(source.indexOf('\tconst shelfQueries ='),source.indexOf('//#region src/client/cloud/CloudLibrary.tsx')),ctx);
vm.runInContext(source.slice(source.indexOf('\tfunction CloudLibrary('),source.indexOf('//#region Site motion')),ctx);
const filter=ctx.filterShelfBooks;
const samples=[{id:'1',name:'三体 第一部',filename:'Three Body.TXT'},{id:'2',name:'长安夜雨',filename:'night.epub'},{id:'3',name:'ＡＢＣ [上下册]'}];
assert.equal(filter(samples,'  '),samples);
assert.deepEqual(Array.from(filter(samples,'三体 部'),x=>x.id),['1']);
assert.deepEqual(Array.from(filter(samples,'BODY txt'),x=>x.id),['1']);
assert.deepEqual(Array.from(filter(samples,'abc ['),x=>x.id),['3']);
assert.equal(filter(samples,'.*').length,0);
assert.equal(filter(samples,'不存在').length,0);
const label=ctx.shelfReadingLabel;
assert.equal(label({},null,null,0),'尚未阅读');
assert.equal(label({},null,null,2),'已开始阅读');
assert.equal(label({chapter_index:8,progress_updated_at:20},{progressPercent:30},{chapterIndex:2,updatedAt:10},20),'读至第 9 章');
assert.equal(label({chapter_index:8,progress_updated_at:20},{progressPercent:30},{chapterIndex:2,updatedAt:30},30),'已读 30% · 读至第 3 章');
assert.equal(label({}, {progressPercent:0},{chapterIndex:0,updatedAt:1},1),'已读 0% · 读至第 1 章');
function nodes(node){return !node||typeof node!=='object'?[]:[node,...[node.props?.children].flat(Infinity).flatMap(nodes)];}
function query(value){vm.runInContext('shelfQueries.cloud='+JSON.stringify(value),ctx);}
books=[{id:'a',name:'三体',filename:'three.txt',size:10,created_at:1,last_read_at:3,chapter_index:7,progress_updated_at:3},{id:'b',name:'长安夜雨',filename:'night.txt',size:20,created_at:2}];
query('三体');
let tree=nodes(ctx.CloudLibrary({mode:'cloud'}));
assert.equal(tree.filter(n=>n.type==='article').length,1);
assert.equal(tree.find(n=>n.props.className==='dnr-shelf-reading-label').props.children,'读至第 8 章');
const bookButton=tree.find(n=>n.props.className==='dnr-cloud-book-open');
const info=bookButton.props.children;
const progressIndex=info.findIndex(n=>n.props?.className==='dnr-shelf-reading-label');
const badgeIndex=info.findIndex(n=>n.type===ctx.ShelfStorageBadges);
assert.ok(badgeIndex>=0);assert.equal(progressIndex,badgeIndex+1,'reading progress follows badges inside the book information grid');
assert.ok(!tree.find(n=>n.props.className==='dnr-cloud-book-meta').props.children.some(n=>n.props?.className==='dnr-shelf-reading-label'));

assert.equal(tree.filter(n=>n.type==='ContinueReadingCard').length,0);
assert.ok(tree.some(n=>n.props.role==='status'&&n.props.children==='找到 1 本 · 云端书架'));
query('找不到');tree=nodes(ctx.CloudLibrary({mode:'cloud'}));assert.equal(tree.filter(n=>n.type==='article').length,0);assert.ok(tree.some(n=>n.type===ctx.ShelfNoResults));assert.ok(!tree.some(n=>n.props.className==='dnr-cloud-empty'));
query('');tree=nodes(ctx.CloudLibrary({mode:'cloud'}));assert.equal(tree.filter(n=>n.type==='article').length,2);assert.equal(tree.filter(n=>n.type==='ContinueReadingCard').length,1);
recents=[{id:'local',name:'本机的书',openedAt:1,progressPercent:25}];
tree=nodes(ctx.LocalShelf({query:'没有',onClear:()=>{}}));assert.equal(tree.filter(n=>n.type==='article').length,0);assert.ok(tree.some(n=>n.type===ctx.ShelfNoResults));assert.ok(!tree.some(n=>n.props.className==='dnr-cloud-empty'));
let changed;tree=nodes(ctx.ShelfSearch({query:'关键字',mode:'cloud',onChange:v=>changed=v}));
tree.find(n=>n.type==='button').props.onClick();assert.equal(changed,'');
let stopped=false;tree.find(n=>n.type==='input').props.onKeyDown({key:'Escape',stopPropagation(){stopped=true;}});assert.equal(stopped,true);
console.log('PASS: title/file/multiword/Unicode filtering, literal queries, progress freshness, rendered cloud/local results, empty state and clearing.');

// Shelf header and results share one scrollport; each tab retains its own offset.
let refIndex=0,layoutEffects=[];const refs=[];
ctx.import_react.useRef=value=>refs[refIndex++]??(refs[refIndex-1]={current:value});
ctx.import_react.useLayoutEffect=callback=>layoutEffects.push(callback);
ctx.animateReaderSurface=()=>{};
ctx.getComputedStyle=()=>({marginBottom:'12px'});
const tabs={offsetTop:110,offsetHeight:38};
const viewport={scrollTop:0,querySelector:selector=>selector==='.dnr-library-tabs'?tabs:null};
const toolbar={type:'toolbar-marker',props:{}};
function renderShelf(mode){refIndex=0;layoutEffects=[];const root=ctx.CloudLibrary({mode,toolbar});root.props.ref.current=viewport;for(const effect of layoutEffects)effect();return root;}
let root=renderShelf('cloud');
assert.equal(root.props.children[0].props.className,'dnr-shelf-toolbar');
assert.equal(root.props.children[0].props.children,toolbar);
viewport.scrollTop=360;root.props.onScroll();
root=renderShelf('local');assert.equal(viewport.scrollTop,0);
viewport.scrollTop=180;root.props.onScroll();
root=renderShelf('cloud');assert.equal(viewport.scrollTop,360);
viewport.scrollTop=900;
nodes(root).find(n=>n.type===ctx.ShelfSearch).props.onChange('三体');
assert.equal(viewport.scrollTop,160,'filtering returns to the results without showing the full header');
assert.ok(nodes(root).filter(n=>n.props.className==='dnr-shelf-content').every(n=>!n.props.onScroll));
const css=require('postcss').parse(fs.readFileSync('public/reader/reader-ui.css','utf8'));
function cssValue(selector,prop){let value;css.walkRules(rule=>{if(rule.selector===selector)rule.walkDecls(prop,decl=>value=decl.value)});return value;}
assert.equal(cssValue('.dnr-cloud-library','overflow'),'auto');
assert.equal(cssValue('.dnr-cloud-library','display'),'block');
assert.equal(cssValue('.dnr-cloud-library > .dnr-shelf-content','overflow'),'visible');
assert.equal(cssValue('.dnr-cloud-library > .dnr-shelf-search-bar','position'),'sticky');
assert.equal(cssValue('.dnr-cloud-library > .dnr-shelf-search-bar','top'),'0');
console.log('PASS: scrolling toolbar placement, one shelf scrollport, per-tab restoration, filtering at the search row and sticky-search styles.');

// The rounded field is backed by a full-width opaque rectangle, with no outward painting.
const backing=nodes(root).find(n=>n.props.className==='dnr-shelf-search-bar');
assert.equal(backing.props.children.type,ctx.ShelfSearch);
const bar='.dnr-cloud-library > .dnr-shelf-search-bar';
assert.equal(cssValue(bar,'background'),'var(--dnr-bg)');
assert.equal(cssValue(bar,'border-radius'),'0');
assert.equal(cssValue(bar,'box-shadow'),'none');
assert.equal(cssValue(bar,'margin'),'0 calc(-1 * var(--dnr-shelf-inline)) 8px');
assert.equal(cssValue(bar,'padding'),'8px var(--dnr-shelf-inline) 10px');
assert.equal(cssValue('.dnr-shelf-search-bar > .dnr-shelf-search','box-shadow'),'none');
assert.equal(cssValue('.dnr-shelf-search-bar > .dnr-shelf-search','margin'),'0');
console.log('PASS: opaque full-width sticky backing, inset rounded search field and no shadow overlap with tabs.');
