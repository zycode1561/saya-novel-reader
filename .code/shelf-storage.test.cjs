const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict');
const source = fs.readFileSync('public/reader/reader.js', 'utf8');
const context = vm.createContext({});
vm.runInContext(source.slice(source.indexOf('\tfunction shelfStorageLabels('), source.indexOf('\tfunction ShelfStorageBadges(')), context);
const labels = (...args) => Array.from(context.shelfStorageLabels(...args));
const local = { id: 'local-a', format: 'txt' }, remote = { id: 'a' }, catalog = [remote];
const cached = { books: ['local-a', 'cloud-a'], originals: ['cloud-a'] };
assert.deepEqual(labels(local, false, [], {}, cached), ['仅本机', '本机可离线']);
assert.deepEqual(labels(local, false, catalog, { 'local-a': 'a' }, cached), ['已存云端', '本机可离线']);
assert.deepEqual(labels(remote, true, catalog, {}, cached), ['已存云端', '本机可离线']);
// History or parsed body alone cannot make the cloud download route available offline.
assert.deepEqual(labels(remote, true, catalog, {}, { books: ['cloud-a'], originals: [] }), ['已存云端', '需联网下载']);
assert.deepEqual(labels(local, false, [], {}, { books: [], originals: [] }), ['仅本机', '本机正文缺失']);
assert.deepEqual(labels({ id: 'cloud-a', format: 'txt' }, false, [], {}, cached), ['云端状态待确认', '本机可离线']);
assert.deepEqual(labels({ id: 'online', format: 'online' }, false, [], {}, cached), ['在线书源', '需联网阅读']);
assert.deepEqual(labels({ ...local, onlineReading: {} }, false, catalog, { 'local-a': 'a' }, cached), ['已存云端', '需联网阅读']);
assert.deepEqual(labels(local, false, [], {}, null), ['仅本机', '检查本机缓存…']);
assert.deepEqual(labels(local, false, [], {}, { failed: true }), ['仅本机', '离线状态未确认']);
// Matching titles do not establish a cloud binding.
assert.equal(labels(local, false, [{ id: 'different', name: 'same' }], {}, cached)[0], '仅本机');
console.log('PASS: local-only, linked cloud, actual offline files, evicted cache, online-only, unknown storage and no title-based guesses.');
