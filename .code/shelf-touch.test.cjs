const assert=require('node:assert/strict'),fs=require('node:fs'),postcss=require('postcss');
const css=postcss.parse(fs.readFileSync('public/reader/reader-ui.css','utf8'));
const rules=[];css.walkRules(rule=>rules.push(rule));
function value(selector,prop){let result;for(const rule of rules)if(rule.selector.split(',').map(s=>s.trim()).includes(selector))rule.walkDecls(prop,decl=>result=decl.value);return result;}
// Both shelf views must keep the independent title, regardless of image load/failure.
for(const rule of rules){if(rule.selector.includes('h3'))rule.walkDecls('display',decl=>assert.notEqual(decl.value,'none','book title must never be hidden'));}
assert.equal(value('.dnr-cloud-books .dnr-cloud-book-open > h3','display'),'block');
assert.equal(value('.dnr-cloud-books .dnr-cloud-book-open > h3','height'),'auto');
assert.equal(value('.dnr-cloud-books .dnr-cloud-book-open > h3','overflow'),'visible');
const list='.dnr-cloud-library[data-shelf-layout="list"] .dnr-cloud-book-open';
assert.equal(value(list,'display'),'grid');
assert.equal(value(list+' > h3','display'),'block');
assert.notEqual(value(list+' > .dnr-cloud-cover','position'),'absolute','pressed transform must not re-anchor an absolute cover');
for(const target of ['.dnr-cloud-book-open','.dnr-resume-card']){
 assert.equal(value('.dnr-shell .dnr-cloud-library '+target,'transform'),'none');
 assert.equal(value('.dnr-shell .dnr-cloud-library '+target+':active:not(:disabled)','transform'),'none');
}
const touchRule=rules.find(rule=>rule.selector==='.dnr-cloud-book-open:hover .dnr-cloud-cover'&&rule.parent.type==='atrule'&&rule.parent.params.includes('pointer:coarse'));
assert.ok(touchRule);assert.ok(touchRule.nodes.some(decl=>decl.prop==='transform'&&decl.value==='none'));
console.log('PASS: independent visible titles, full long names, normal-flow list covers, stable pressed targets and coarse-pointer hover reset.');
