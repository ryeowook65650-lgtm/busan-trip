const CACHE_NAME = 'busan-trip-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.png'
];

// 安裝 Service Worker：快取基本檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 攔截網路請求：有快取就用快取，沒快取就上網抓
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取裡有，直接回傳 (離線可用)
        if (response) {
          return response;
        }
        // 如果沒有，就上網抓
        return fetch(event.request);
      })
  );
});

// 更新 Service Worker 時清除舊快取
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
