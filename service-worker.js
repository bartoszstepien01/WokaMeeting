const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.7401470d.js",
  s + "/_app/immutable/assets/0.96710f24.css",
  s + "/_app/immutable/nodes/0.93c62b8b.js",
  s + "/_app/immutable/nodes/1.ab091c1c.js",
  s + "/_app/immutable/nodes/2.41859fbf.js",
  s + "/_app/immutable/nodes/3.d20d4eac.js",
  s + "/_app/immutable/assets/JoinPopup.c6583623.css",
  s + "/_app/immutable/chunks/JoinPopup.de206de2.js",
  s + "/_app/immutable/chunks/index.5227cc00.js",
  s + "/_app/immutable/chunks/paths.36076f58.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/public.c29bcb9f.js",
  s + "/_app/immutable/chunks/singletons.b13957c5.js",
  s + "/_app/immutable/entry/start.3ca49207.js",
  s + "/_app/immutable/chunks/Host.0111f10a.js",
  s + "/_app/immutable/chunks/Peer.2320ed2a.js"
], u = [
  s + "/favicon.png",
  s + "/manifest.json"
], o = "1686259210578", c = self, p = `cache${o}`, h = r.concat(u), m = new Set(h);
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
  const e = new URL(t.request.url), a = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && m.has(e.pathname), l = t.request.cache === "only-if-cached" && !i;
  a && !n && !l && t.respondWith(
    (async () => i && await caches.match(t.request) || d(t.request))()
  );
});
