import{b as y,_ as R}from"../chunks/paths-16c013c9.js";import{S as q,i as E,s as L,j as S,m as x,o as C,x as h,u as w,v as G,e as b,t as J,k as N,l as j,J as T,c as v,a as A,g as D,d,n as K,b as g,H as k,f as $,w as M,A as U,r as z}from"../chunks/vendor-07f555be.js";import{G as H}from"../chunks/Gallery-d1cd3f86.js";function P(p){let r,s;return r=new H({props:{streams:p[0]}}),{c(){S(r.$$.fragment)},l(e){x(r.$$.fragment,e)},m(e,a){C(r,e,a),s=!0},p(e,a){const u={};a&1&&(u.streams=e[0]),r.$set(u)},i(e){s||(h(r.$$.fragment,e),s=!0)},o(e){w(r.$$.fragment,e),s=!1},d(e){G(r,e)}}}function O(p){let r,s,e,a,u,m,f,t=p[0].length!==0&&P(p);return{c(){r=b("link"),s=b("link"),e=b("script"),a=J("let parcelRequire;"),u=N(),t&&t.c(),m=j(),this.h()},l(n){const o=T('[data-svelte="svelte-uncxtc"]',document.head);r=v(o,"LINK",{rel:!0,href:!0}),s=v(o,"LINK",{rel:!0,href:!0}),e=v(o,"SCRIPT",{});var _=A(e);a=D(_,"let parcelRequire;"),_.forEach(d),o.forEach(d),u=K(n),t&&t.l(n),m=j(),this.h()},h(){g(r,"rel","icon"),g(r,"href",""+(y+"/favicon.png")),g(s,"rel","manifest"),g(s,"href",""+(y+"/manifest.json")),document.title="Join"},m(n,o){k(document.head,r),k(document.head,s),k(document.head,e),k(e,a),$(n,u,o),t&&t.m(n,o),$(n,m,o),f=!0},p(n,[o]){n[0].length!==0?t?(t.p(n,o),o&1&&h(t,1)):(t=P(n),t.c(),h(t,1),t.m(m.parentNode,m)):t&&(z(),w(t,1,1,()=>{t=null}),M())},i(n){f||(h(t),f=!0)},o(n){w(t),f=!1},d(n){d(r),d(s),d(e),n&&d(u),t&&t.d(n),n&&d(m)}}}function V(p,r,s){let e=[],a=[];return U(async()=>{const m=(await R(()=>import("../chunks/peerjs.min-90eb8cad.js").then(function(c){return c.p}),["chunks/peerjs.min-90eb8cad.js","chunks/vendor-07f555be.js"])).default;let f=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});s(0,e=[f]);let t=new URL(window.location.href),n=new m(void 0,{config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]}}),o=c=>{let l=n.call(c,f);return a=[...a,l.peer],l.on("stream",i=>{e.map(I=>I.id).includes(i.id)||s(0,e=[...e,i])}),l},_=c=>{s(0,e=e.filter((l,i)=>a[i]!=c)),a=a.filter(l=>l!=c)};n.on("open",c=>{a=[c],o(t.searchParams.get("room"));let l=n.connect(t.searchParams.get("room"));l.on("data",i=>{switch(i.type){case"connect":o(i.data.peerId);break;case"disconnect":_(i.data.peerId);break}}),l.on("close",()=>{_(l.peer)}),window.onunload=window.onbeforeunload=()=>{l.close()}}),n.on("call",c=>{a=[...a,c.peer],c.answer(f),c.on("stream",l=>{e.map(i=>i.id).includes(l.id)||s(0,e=[...e,l])})}),n.on("connection",c=>c.close())}),[e]}class W extends q{constructor(r){super();E(this,r,V,O,L,{})}}export{W as default};
