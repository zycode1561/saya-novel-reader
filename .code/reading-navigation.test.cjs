const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync('public/reader/reader.js', 'utf8');
const jsx = (type, props) => ({ type, props });
const context = vm.createContext({ import_jsx_runtime: { jsx, jsxs: jsx }, ShelfBookCover: 'Cover', Icon: 'Icon', displayBookName: s => s });
vm.runInContext(source.slice(source.indexOf('\tfunction resumePosition('), source.indexOf('\tfunction positionShelfMenu(')), context);
const position = context.resumePosition;
assert.equal(position(null, null), '打开后恢复上次阅读位置');
assert.equal(position({chapterIndex: 0, updatedAt: 2}, null, 0), '第 1 章 · 已读 0%');
assert.equal(position({chapterIndex: 2, updatedAt: 1}, {chapterIndex: 8, updatedAt: 2}, 20), '第 9 章');
assert.equal(position({chapterIndex: 2, updatedAt: 3}, {chapterIndex: 8, updatedAt: 2}, 20), '第 3 章 · 已读 20%');
assert.equal(position({chapterIndex: -1}, {chapterIndex: null}), '打开后恢复上次阅读位置');
let opened = 0;
const card = context.ContinueReadingCard({id:'test',name:'很长的书名'.repeat(15),format:'TXT',position:'第 3 章',disabled:false,opening:false,onOpen:()=>opened++});
assert.equal(card.type, 'button');
assert.equal(card.props.type, 'button');
card.props.onClick(); assert.equal(opened,1);
function nodes(node) { return !node || typeof node !== 'object' ? [] : [node, ...[node.props?.children].flat(Infinity).flatMap(nodes)]; }
assert.equal(nodes(card).filter(n=>n.type==='button').length,1, 'resume card must not contain nested buttons');
const file = ts.createSourceFile('reader.js', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let navigation;
function visit(node) {
 if (ts.isObjectLiteralExpression(node) && node.properties.some(p=>p.name?.getText(file)==='className' && p.initializer?.text==='dnr-toolbar')) navigation=node.getText(file);
 ts.forEachChild(node,visit);
}
visit(file); assert.ok(navigation);
for (const [view, readingContext, expected] of [
 ['library',false,['书架','在线搜书','阅读设置']],
 ['online',false,['书架','在线搜书','阅读设置']],
 ['reader',true,['书架','目录','书内搜索','阅读设置']],
 ['toc',true,['书架','目录','书内搜索','阅读设置']],
 ['search',true,['书架','目录','书内搜索','阅读设置']]
]) {
 let next;
 const nav = vm.runInNewContext('('+navigation+')', {import_jsx_runtime:{jsx,jsxs:jsx}, SlidingSelection:'Selection',Icon:'Icon',view,readingContext,book:readingContext?{}:null,supportsOnline:true,cloudHosted:true,window:{},setView:v=>next=v});
 const buttons=nav.children.filter(n=>n?.type==='button');
 assert.deepEqual(Array.from(buttons,b=>b.props['aria-label']), expected);
 buttons[0].props.onClick(); assert.equal(next,'library', 'book shelf button must always return to shelf');
}
console.log('PASS: resume progress precedence, missing data, full-card activation and contextual navigation.');
let backExpression;
function findBack(node) {
 if (ts.isObjectLiteralExpression(node) && node.properties.some(p=>p.name?.getText(file)==='className' && p.initializer?.text==='dnr-reader-back')) backExpression=node.parent.parent.getText(file);
 ts.forEachChild(node,findBack);
}
findBack(file); assert.ok(backExpression);
for(const showReader of [false,true]) for(const toolsVisible of [false,true]) {
 let destination;
 const result=vm.runInNewContext(backExpression,{showReader,toolsVisible,import_jsx_runtime:{jsx,jsxs:jsx},Icon:'Icon',setView:v=>destination=v});
 assert.equal(Boolean(result),showReader);
 if(result){assert.equal(result.props["aria-hidden"],!toolsVisible);assert.equal(result.props.tabIndex,toolsVisible?0:-1);}
 if(result){assert.equal(result.props['aria-label'],'返回书架');result.props.onClick();assert.equal(destination,'library');}
}
console.log('PASS: upper-left back button follows reader/tool visibility and returns to shelf.');
// Regression: controls stay outside the text viewport, now in overlay layers.
let backContainer;
function findBackContainer(node) {
 if (ts.isObjectLiteralExpression(node) && node.properties.some(p=>p.name?.getText(file)==='className' && p.initializer?.text==='dnr-reader-back')) {
  for(let parent=node.parent;parent;parent=parent.parent) {
   if(ts.isObjectLiteralExpression(parent) && parent.properties.some(p=>p.name?.getText(file)==='className')) {backContainer=parent;break;}
  }
 }
 ts.forEachChild(node,findBackContainer);
}
findBackContainer(file);
assert.ok(backContainer.properties.some(p=>p.name?.getText(file)==='className' && p.initializer.getText(file).includes('dnr-shell')));
const css=fs.readFileSync('public/reader/reader-ui.css','utf8');
assert.match(css,/\.dnr-shell > \.dnr-reader-back \{ position: static; order: 0; flex: 0 0 auto;/);
console.log('PASS: return action remains outside the reading viewport.');

// Visibility alone must not invalidate either pagination engine's text anchor.
for(const key of ['const key = [', 'const restoreKey = [']) {
 const start=source.indexOf(key, source.indexOf('function useReaderPresentation'));
 assert.ok(start>0);
 const expression=source.slice(start,source.indexOf('].join(":")',start));
 assert.ok(!expression.includes('panel.toolsVisible'));
 assert.ok(expression.includes('clientHeight'));
 assert.ok(expression.includes('settings.fontSize'));
}
console.log('PASS: tool toggles preserve the return row and do not invalidate pagination anchors.');

for (const control of ['dnr-reader-back','dnr-top-dock','dnr-reading-footer']) {
 assert.ok(css.includes('.dnr-shell:not(.is-panel-view) > .'+control+' { position: absolute;'));
}
assert.ok(css.includes('.dnr-shell:not(.is-panel-view) .dnr-reading-grid.has-toc { grid-template-columns: 1fr; }'));
assert.ok(css.includes('.dnr-shell.is-immersive:not(.is-panel-view) :is(.dnr-reader-back, .dnr-top-dock, .dnr-toc--embedded, .dnr-reading-footer) { visibility: hidden; pointer-events: none; }'));
console.log('PASS: all reading tools use overlays, preserve the text rectangle and disappear in immersive mode.');
const viewStart=source.indexOf('const setView = (0, import_react.useCallback)((next) => {');
assert.ok(viewStart>0);
const viewCallback=source.slice(viewStart,source.indexOf('}, [updatePanel]);',viewStart)+'}, [updatePanel]);'.length).replace('const setView =','globalThis.changeView =');
const actions=[];
const navigationContext=vm.createContext({import_react:{useCallback:fn=>fn},readerBodyRef:{current:{capturePosition:()=>actions.push('capture')}},updatePanel:p=>actions.push({...p}),setViewState:v=>actions.push(v)});
vm.runInContext(viewCallback,navigationContext);
navigationContext.changeView('reader');
assert.deepEqual(actions,['capture',{toolsVisible:false,immersive:true},'reader']);
actions.length=0;navigationContext.changeView('library');assert.deepEqual(actions,['capture','library']);
console.log('PASS: entering the reader dismisses transient tools without altering pinned preferences.');
