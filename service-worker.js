const timestamp = 1634398381513;
const build = [
  "/WokaMeeting/internal/start-b78071d6.js",
  "/WokaMeeting/internal/assets/start-61d1577b.css",
  "/WokaMeeting/internal/layout.svelte-c5b5367b.js",
  "/WokaMeeting/internal/error.svelte-c116663f.js",
  "/WokaMeeting/internal/pages/index.svelte-e37edbf3.js",
  "/WokaMeeting/internal/assets/pages/index.svelte-bccd3b37.css",
  "/WokaMeeting/internal/pages/join.svelte-f1929707.js",
  "/WokaMeeting/internal/chunks/vendor-5dfe71dc.js",
  "/WokaMeeting/internal/chunks/preload-helper-257aa4c1.js",
  "/WokaMeeting/internal/chunks/Gallery-df3fa11a.js",
  "/WokaMeeting/internal/assets/Gallery-59c7a0ee.css",
  "/WokaMeeting/internal/chunks/peerjs.min-13412648.js"
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
