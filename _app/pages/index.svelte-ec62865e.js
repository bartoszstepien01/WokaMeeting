import{b as y,_ as $}from"../chunks/paths-16c013c9.js";import{S as E,i as I,s as R,j as q,m as P,o as S,x as m,u as g,v as x,e as v,t as G,k as L,l as b,J as N,c as k,a as A,g as C,d as f,n as D,b as d,H as _,f as w,w as H,A as K,r as M}from"../chunks/vendor-07f555be.js";import{G as T}from"../chunks/Gallery-3b700d69.js";function j(p){let n,a;return n=new T({props:{streams:p[0]}}),{c(){q(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,o){S(n,t,o),a=!0},p(t,o){const i={};o&1&&(i.streams=t[0]),n.$set(i)},i(t){a||(m(n.$$.fragment,t),a=!0)},o(t){g(n.$$.fragment,t),a=!1},d(t){x(n,t)}}}function z(p){let n,a,t,o,i,c,u,r=p[0].length!==0&&j(p);return{c(){n=v("link"),a=v("link"),t=v("script"),o=G("let parcelRequire;"),i=L(),r&&r.c(),c=b(),this.h()},l(s){const e=N('[data-svelte="svelte-tu3wcf"]',document.head);n=k(e,"LINK",{rel:!0,href:!0}),a=k(e,"LINK",{rel:!0,href:!0}),t=k(e,"SCRIPT",{});var l=A(t);o=C(l,"let parcelRequire;"),l.forEach(f),e.forEach(f),i=D(s),r&&r.l(s),c=b(),this.h()},h(){d(n,"rel","icon"),d(n,"href",""+(y+"/favicon.png")),d(a,"rel","manifest"),d(a,"href",""+(y+"/manifest.json")),document.title="Home"},m(s,e){_(document.head,n),_(document.head,a),_(document.head,t),_(t,o),w(s,i,e),r&&r.m(s,e),w(s,c,e),u=!0},p(s,[e]){s[0].length!==0?r?(r.p(s,e),e&1&&m(r,1)):(r=j(s),r.c(),m(r,1),r.m(c.parentNode,c)):r&&(M(),g(r,1,1,()=>{r=null}),H())},i(s){u||(m(r),u=!0)},o(s){g(r),u=!1},d(s){f(n),f(a),f(t),s&&f(i),r&&r.d(s),s&&f(c)}}}function J(p,n,a){let t=[],o=[];return K(async()=>{const c=(await $(()=>import("../chunks/peerjs.min-90eb8cad.js").then(function(e){return e.p}),["chunks/peerjs.min-90eb8cad.js","chunks/vendor-07f555be.js"])).default;let u=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});a(0,t=[u]);let r=[],s=new c(void 0,{config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]}});s.on("open",e=>{console.log(e),o=[e]}),s.on("call",e=>{o=[...o,e.peer],e.answer(u),e.on("stream",l=>{t.map(h=>h.id).includes(l.id)||a(0,t=[...t,l])})}),s.on("connection",e=>{e.on("open",()=>{r.forEach(l=>{l.send({type:"connect",data:{peerId:e.peer}})}),r.push(e)}),e.on("close",()=>{r=r.filter(l=>l!=e),a(0,t=t.filter((l,h)=>o[h]!=e.peer)),o=o.filter(l=>l!=e.peer),r.forEach(l=>{l.send({type:"disconnect",data:{peerId:e.peer}})})}),window.onunload=window.onbeforeunload=()=>{e.close()}})}),[t]}class B extends E{constructor(n){super();I(this,n,J,z,R,{})}}export{B as default};
