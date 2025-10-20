const CACHE_NAME = "justiserv-cache-v1";
const urlsToCache = [
  "/justiserv/",
  "/justiserv/index.html",
  "/justiserv/servicios.html",
  "/justiserv/seguimiento.html",
  "/justiserv/cotiza.html",
  "/justiserv/contacto.html",
  "/justiserv/assets/css/styles.css",
  "/justiserv/assets/js/main.js",
  "/justiserv/assets/img/justiserv-logo.png"
];

// Instalar
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activar
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))
    )
  );
});

// Interceptar peticiones
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
