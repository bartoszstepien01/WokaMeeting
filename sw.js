if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let r={};const a=e=>i(e,u),o={module:{uri:u},exports:r,require:a};s[u]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/0.96710f24.css",revision:null},{url:"_app/immutable/assets/JoinPopup.c6583623.css",revision:null},{url:"_app/immutable/chunks/Host.b11e34c8.js",revision:null},{url:"_app/immutable/chunks/index.5227cc00.js",revision:null},{url:"_app/immutable/chunks/index.fda93153.js",revision:null},{url:"_app/immutable/chunks/JoinPopup.de206de2.js",revision:null},{url:"_app/immutable/chunks/paths.c23ad93a.js",revision:null},{url:"_app/immutable/chunks/Peer.cd9d1252.js",revision:null},{url:"_app/immutable/chunks/preload-helper.41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons.92f98157.js",revision:null},{url:"_app/immutable/entry/app.a70d04c5.js",revision:null},{url:"_app/immutable/entry/start.d40100af.js",revision:null},{url:"_app/immutable/nodes/0.edf5da86.js",revision:null},{url:"_app/immutable/nodes/1.ffc7e3e3.js",revision:null},{url:"_app/immutable/nodes/2.7a782958.js",revision:null},{url:"_app/immutable/nodes/3.8dd5fcf0.js",revision:null},{url:"favicon.png",revision:"3bb38c0f5fc261fa01fbecfa6fb3c871"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"a4a753d714513ef6e3d3b7ac97aea82a"},{url:"manifest.webmanifest",revision:"79d5f9895aa1212b425a6303d84b8c1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/WokaMeeting/")))}));
