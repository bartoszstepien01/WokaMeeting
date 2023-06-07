const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.d1b8cdcf.js",
  s + "/_app/immutable/assets/0.96710f24.css",
  s + "/_app/immutable/nodes/0.edf5da86.js",
  s + "/_app/immutable/nodes/1.4236e989.js",
  s + "/_app/immutable/nodes/2.9088ae69.js",
  s + "/_app/immutable/nodes/3.286d63da.js",
  s + "/_app/immutable/assets/JoinPopup.c6583623.css",
  s + "/_app/immutable/chunks/JoinPopup.de206de2.js",
  s + "/_app/immutable/chunks/index.5227cc00.js",
  s + "/_app/immutable/chunks/index.fda93153.js",
  s + "/_app/immutable/chunks/paths.b796383f.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/singletons.2461180b.js",
  s + "/_app/immutable/entry/start.e68da973.js",
  s + "/_app/immutable/chunks/Host.b11e34c8.js",
  s + "/_app/immutable/chunks/Peer.cd9d1252.js"
], m = [
  s + "/favicon.png",
  s + "/manifest.json"
], o = "1686176952894", c = self, p = `cache${o}`, h = r.concat(m), u = new Set(h);
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
