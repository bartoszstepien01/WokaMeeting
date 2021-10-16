const timestamp = 1634403031054;
const build = [
  "/WokaMeeting/_app/start-970ce47f.js",
  "/WokaMeeting/_app/assets/start-61d1577b.css",
  "/WokaMeeting/_app/layout.svelte-0c4fd34c.js",
  "/WokaMeeting/_app/error.svelte-196278ae.js",
  "/WokaMeeting/_app/pages/index.svelte-889d6104.js",
  "/WokaMeeting/_app/assets/pages/index.svelte-bccd3b37.css",
  "/WokaMeeting/_app/pages/join.svelte-7551aa0c.js",
  "/WokaMeeting/_app/chunks/vendor-07f555be.js",
  "/WokaMeeting/_app/chunks/preload-helper-549b4fe8.js",
  "/WokaMeeting/_app/chunks/Gallery-4bcb3b09.js",
  "/WokaMeeting/_app/assets/Gallery-59c7a0ee.css",
  "/WokaMeeting/_app/chunks/peerjs.min-90eb8cad.js"
];
const files = [
  "/WokaMeeting/favicon.png",
  "/WokaMeeting/manifest.json"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
