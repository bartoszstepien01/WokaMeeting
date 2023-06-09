const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.65dc8e00.js",
  e + "/_app/immutable/assets/0.96710f24.css",
  e + "/_app/immutable/nodes/0.93c62b8b.js",
  e + "/_app/immutable/nodes/1.e434b7e9.js",
  e + "/_app/immutable/nodes/2.3ea59a02.js",
  e + "/_app/immutable/nodes/3.bc8342d9.js",
  e + "/_app/immutable/assets/JoinPopup.c6583623.css",
  e + "/_app/immutable/chunks/JoinPopup.de206de2.js",
  e + "/_app/immutable/chunks/index.5227cc00.js",
  e + "/_app/immutable/chunks/paths.635d698a.js",
  e + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  e + "/_app/immutable/chunks/public.c29bcb9f.js",
  e + "/_app/immutable/chunks/singletons.e08de900.js",
  e + "/_app/immutable/entry/start.de689f4e.js",
  e + "/_app/immutable/chunks/Host.0111f10a.js",
  e + "/_app/immutable/chunks/Peer.2320ed2a.js"
], u = [
  e + "/favicon.png",
  e + "/manifest.json"
], o = "1686345185352", c = self, p = `cache${o}`, h = r.concat(u), m = new Set(h);
c.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((t) => t.addAll(h)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function d(s) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(s);
    return t.put(s, a.clone()), a;
  } catch (a) {
    const n = await t.match(s);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && m.has(t.pathname), l = s.request.cache === "only-if-cached" && !i;
  a && !n && !l && s.respondWith(
    (async () => i && await caches.match(s.request) || d(s.request))()
  );
});
