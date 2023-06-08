const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.b50149ed.js",
  s + "/_app/immutable/assets/0.96710f24.css",
  s + "/_app/immutable/nodes/0.93c62b8b.js",
  s + "/_app/immutable/nodes/1.dc26046e.js",
  s + "/_app/immutable/nodes/2.172231a0.js",
  s + "/_app/immutable/nodes/3.010fa33f.js",
  s + "/_app/immutable/assets/JoinPopup.c6583623.css",
  s + "/_app/immutable/chunks/JoinPopup.de206de2.js",
  s + "/_app/immutable/chunks/index.5227cc00.js",
  s + "/_app/immutable/chunks/paths.53541d98.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/public.c29bcb9f.js",
  s + "/_app/immutable/chunks/singletons.ef46c57b.js",
  s + "/_app/immutable/entry/start.9406768f.js",
  s + "/_app/immutable/chunks/Host.0111f10a.js",
  s + "/_app/immutable/chunks/Peer.2320ed2a.js"
], u = [
  s + "/favicon.png",
  s + "/manifest.json"
], o = "1686258759735", c = self, p = `cache${o}`, h = r.concat(u), m = new Set(h);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(h)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function d(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const n = await t.match(e);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && m.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
