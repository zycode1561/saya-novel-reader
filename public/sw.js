const CACHE = 'saya-reader-v5-recent-reading';
const ASSETS = ['/reader/index.html','/reader/reader.js'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('saya-reader-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== 'GET' || url.pathname.startsWith('/api/')) return;
  if (ASSETS.includes(url.pathname)) event.respondWith(fetch(event.request).then(response => {
    if (response.ok && !response.redirected) { const copy=response.clone(); event.waitUntil(caches.open(CACHE).then(cache=>cache.put(url.pathname,copy))); }
    return response;
  }).catch(()=>caches.match(url.pathname)));
  else if (event.request.mode === 'navigate' && url.pathname === '/') event.respondWith(fetch(event.request).catch(()=>caches.match('/reader/index.html')));
});
