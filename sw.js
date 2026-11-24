const C='docscan-v160',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(new Request(u,{cache:'reload'}))))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||e.request.url.includes('downloads.js'))return;if(e.request.mode==='navigate'||e.request.destination==='document'){e.respondWith(fetch(new Request(e.request,{cache:'no-store'})).then(r=>{const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl));return r;}).catch(()=>caches.match(e.request)));return;}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
