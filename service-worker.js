
    self.addEventListener('install', (e) => {
      e.waitUntil(caches.open('titan-store').then((cache) => cache.addAll(['./index.html', './contact.html'])));
    });
    self.addEventListener('fetch', (e) => {
      e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
    });
    