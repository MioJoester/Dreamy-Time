// Filename: sw.js
const CACHE_NAME = 'streamcore-v6';
const ASSETS_TO_CACHE = [
  
  './aasset/moons.png',  // Match your actual icon path
       // Adjust names as needed
];

// Install event - caches important files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch((err) => console.log('Cache failed:', err))
  );
});

// Fetch event - serves cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
  );
});
