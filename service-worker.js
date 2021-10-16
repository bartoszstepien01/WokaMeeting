const timestamp = 1634399299376;
const build = [
  "/WokaMeeting/_app/start-f1a284b3.js",
  "/WokaMeeting/_app/assets/start-61d1577b.css",
  "/WokaMeeting/_app/layout.svelte-c5b5367b.js",
  "/WokaMeeting/_app/error.svelte-c116663f.js",
  "/WokaMeeting/_app/pages/index.svelte-c27c7042.js",
  "/WokaMeeting/_app/assets/pages/join.svelte-8a68f74c.css",
  "/WokaMeeting/_app/pages/join.svelte-9e885049.js",
  "/WokaMeeting/_app/chunks/vendor-5dfe71dc.js",
  "/WokaMeeting/_app/chunks/preload-helper-549b4fe8.js",
  "/WokaMeeting/_app/chunks/Gallery-df3fa11a.js",
  "/WokaMeeting/_app/assets/Gallery-59c7a0ee.css",
  "/WokaMeeting/_app/chunks/peerjs.min-13412648.js"
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
