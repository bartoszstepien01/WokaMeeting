import{_ as g}from"../chunks/preload-helper-549b4fe8.js";import{S as y,i as $,s as b,j,m as k,o as w,x as u,u as _,v as P,e as R,t as q,k as E,l as p,J as G,c as J,a as S,g as x,d as c,n as A,H as d,f as h,w as C,A as D,r as I}from"../chunks/vendor-07f555be.js";import{G as L}from"../chunks/Gallery-4bcb3b09.js";function v(i){let s,r;return s=new L({props:{streams:i[0]}}),{c(){j(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,n){w(s,t,n),r=!0},p(t,n){const o={};n&1&&(o.streams=t[0]),s.$set(o)},i(t){r||(u(s.$$.fragment,t),r=!0)},o(t){_(s.$$.fragment,t),r=!1},d(t){P(s,t)}}}function M(i){let s,r,t,n,o,e=i[0].length!==0&&v(i);return{c(){s=R("script"),r=q("let parcelRequire;"),t=E(),e&&e.c(),n=p(),this.h()},l(a){const l=G('[data-svelte="svelte-8i7r37"]',document.head);s=J(l,"SCRIPT",{});var m=S(s);r=x(m,"let parcelRequire;"),m.forEach(c),l.forEach(c),t=A(a),e&&e.l(a),n=p(),this.h()},h(){document.title="Join"},m(a,l){d(document.head,s),d(s,r),h(a,t,l),e&&e.m(a,l),h(a,n,l),o=!0},p(a,[l]){a[0].length!==0?e?(e.p(a,l),l&1&&u(e,1)):(e=v(a),e.c(),u(e,1),e.m(n.parentNode,n)):e&&(I(),_(e,1,1,()=>{e=null}),C())},i(a){o||(u(e),o=!0)},o(a){_(e),o=!1},d(a){c(s),a&&c(t),e&&e.d(a),a&&c(n)}}}function T(i,s,r){let t=[];return D(async()=>{const o=(await g(()=>import("../chunks/peerjs.min-90eb8cad.js").then(function(f){return f.p}),["chunks/peerjs.min-90eb8cad.js","chunks/vendor-07f555be.js"])).default;let e=new o,a=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});r(0,t=[a]);let l=new URL(window.location.href);e.call(l.searchParams.get("room"),a).on("stream",f=>{r(0,t=[...t,f])})}),[t]}class O extends y{constructor(s){super();$(this,s,T,M,b,{})}}export{O as default};
