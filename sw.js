if(!self.define){let e,i={};const s=(s,l)=>(s=new URL(s+".js",l).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(l,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const a=e=>s(e,u),o={module:{uri:u},exports:r,require:a};i[u]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/0.96710f24.css",revision:null},{url:"_app/immutable/assets/JoinPopup.c6583623.css",revision:null},{url:"_app/immutable/chunks/Host.0111f10a.js",revision:null},{url:"_app/immutable/chunks/index.5227cc00.js",revision:null},{url:"_app/immutable/chunks/JoinPopup.de206de2.js",revision:null},{url:"_app/immutable/chunks/paths.faee5d72.js",revision:null},{url:"_app/immutable/chunks/Peer.2320ed2a.js",revision:null},{url:"_app/immutable/chunks/preload-helper.41c905a7.js",revision:null},{url:"_app/immutable/chunks/public.c29bcb9f.js",revision:null},{url:"_app/immutable/chunks/singletons.7f939d13.js",revision:null},{url:"_app/immutable/entry/app.4abae16b.js",revision:null},{url:"_app/immutable/entry/start.a93d6e59.js",revision:null},{url:"_app/immutable/nodes/0.93c62b8b.js",revision:null},{url:"_app/immutable/nodes/1.bf049c04.js",revision:null},{url:"_app/immutable/nodes/2.6b84c87f.js",revision:null},{url:"_app/immutable/nodes/3.44a1d616.js",revision:null},{url:"favicon.png",revision:"3bb38c0f5fc261fa01fbecfa6fb3c871"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"1a428ac83088be392c98a1f45a9e7011"},{url:"/WokaMeeting/",revision:"a9092459593373be701ad8f1e20d3bef"},{url:"join",revision:"a7d59bbe98f2c2f6910ccdbe72c7f867"},{url:"manifest.webmanifest",revision:"79d5f9895aa1212b425a6303d84b8c1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/WokaMeeting/")))}));
