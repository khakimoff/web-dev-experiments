
const CACHE_NAME: string = 'my-cache-v1';
const urlsToCache: string[] = [
    '/src',
    '/src/styles.css',
];

type EventType = {
    event: void
}
// TODO: set type safe type
self.addEventListener('install', (event: any) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// TODO: set type safe type
self.addEventListener('fetch', (event: any) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});