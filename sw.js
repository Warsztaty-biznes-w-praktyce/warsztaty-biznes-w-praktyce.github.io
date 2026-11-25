/* Plik generowany przez skrypty/build.py – nie edytuj. Wersja 2.5.1 (2026-11-25). Aplikacja działa bez internetu;
   przy sieci najpierw pobiera świeżą stronę (nowa wersja po odświeżeniu). Zapytań do serwera prowadzącego nie dotyka. */
var C='warsztat-2.5.1', PLIKI=["./", "index.html", "manifest.webmanifest", "ikona-192.png", "ikona-512.png", "apple-touch-icon.png"];
self.addEventListener('install',function(e){ e.waitUntil(caches.open(C).then(function(c){ return c.addAll(PLIKI); })); self.skipWaiting(); });
self.addEventListener('activate',function(e){ e.waitUntil(caches.keys().then(function(k){ return Promise.all(k.filter(function(n){ return n!==C; }).map(function(n){ return caches.delete(n); })); }).then(function(){ return self.clients.claim(); })); });
self.addEventListener('fetch',function(e){ var u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==location.origin) return;
  e.respondWith(fetch(e.request).then(function(r){ var k=r.clone(); caches.open(C).then(function(c){ c.put(e.request,k); }); return r; })
    .catch(function(){ return caches.match(e.request,{ignoreSearch:true}).then(function(r){ return r||caches.match('index.html'); }); })); });
