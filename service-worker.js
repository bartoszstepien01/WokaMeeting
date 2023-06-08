const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.ead4d979.js",
  s + "/_app/immutable/assets/0.96710f24.css",
  s + "/_app/immutable/nodes/0.93c62b8b.js",
  s + "/_app/immutable/nodes/1.90d011d5.js",
  s + "/_app/immutable/nodes/2.64f479e6.js",
  s + "/_app/immutable/nodes/3.238390f2.js",
  s + "/_app/immutable/assets/JoinPopup.c6583623.css",
  s + "/_app/immutable/chunks/JoinPopup.de206de2.js",
  s + "/_app/immutable/chunks/index.5227cc00.js",
  s + "/_app/immutable/chunks/index.fda93153.js",
  s + "/_app/immutable/chunks/paths.905c24af.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/singletons.28bb2361.js",
  s + "/_app/immutable/entry/start.419a2b75.js",
  s + "/_app/immutable/chunks/Host.322d19b7.js",
  s + "/_app/immutable/chunks/Peer.90f8caac.js"
], m = [
  s + "/favicon.png",
  s + "/manifest.json"
], o = "1686257945743", c = self, p = `cache${o}`, h = r.concat(m), u = new Set(h);
c.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(p).then((e) => e.addAll(h)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function d(t) {
  const e = await caches.open(`offline${o}`);
  try {
    const a = await fetch(t);
    return e.put(t, a.clone()), a;
  } catch (a) {
    const n = await e.match(t);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const e = new URL(t.request.url), a = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && u.has(e.pathname), l = t.request.cache === "only-if-cached" && !i;
  a && !n && !l && t.respondWith(
    (async () => i && await caches.match(t.request) || d(t.request))()
  );
});
