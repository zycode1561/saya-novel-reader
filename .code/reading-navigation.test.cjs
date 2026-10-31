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
 assert.equal(Boolean(result),showReader && toolsVisible);
 if(result){assert.equal(result.props['aria-label'],'返回书架');result.props.onClick();assert.equal(destination,'library');}
}
console.log('PASS: upper-left back button follows reader/tool visibility and returns to shelf.');
