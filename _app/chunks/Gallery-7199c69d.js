import{S as y,i as b,s as k,e as m,c as _,a as w,d as h,b as d,K as g,f as j,H as O,L as D,M as H,I as V,j as R,m as S,o as A,x as v,u as p,v as G,N as K,r as L,w as M,O as W,A as q,P as z,Q as B}from"./vendor-07f555be.js";function N(i){let e,n,l,u,c,s;return{c(){e=m("div"),n=m("video"),l=m("track"),this.h()},l(r){e=_(r,"DIV",{class:!0,style:!0});var t=w(e);n=_(t,"VIDEO",{class:!0});var o=w(n);l=_(o,"TRACK",{kind:!0}),o.forEach(h),t.forEach(h),this.h()},h(){d(l,"kind","captions"),n.autoplay=!0,n.muted=i[3],d(n,"class","w-full h-full rounded-xl"),d(e,"class","video-container bg-gray-700 rounded-xl svelte-5ldje3"),g(e,"--width",i[0]+"px"),g(e,"--height",i[1]+"px")},m(r,t){j(r,e,t),O(e,n),O(n,l),c||(s=D(u=P.call(null,n,i[2])),c=!0)},p(r,[t]){t&8&&(n.muted=r[3]),u&&H(u.update)&&t&4&&u.update.call(null,r[2]),t&1&&g(e,"--width",r[0]+"px"),t&2&&g(e,"--height",r[1]+"px")},i:V,o:V,d(r){r&&h(e),c=!1,s()}}}function P(i,e){return i.srcObject=e,{destroy(){}}}function Q(i,e,n){let{width:l}=e,{height:u}=e,{stream:c}=e,{muted:s=!1}=e;return i.$$set=r=>{"width"in r&&n(0,l=r.width),"height"in r&&n(1,u=r.height),"stream"in r&&n(2,c=r.stream),"muted"in r&&n(3,s=r.muted)},[l,u,c,s]}class T extends y{constructor(e){super();b(this,e,Q,N,k,{width:0,height:1,stream:2,muted:3})}}function E(i,e,n){const l=i.slice();return l[6]=e[n],l[8]=n,l}function I(i){let e,n;return e=new T({props:{width:i[2],height:i[3],stream:i[6],muted:i[8]==0}}),{c(){R(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,u){A(e,l,u),n=!0},p(l,u){const c={};u&4&&(c.width=l[2]),u&8&&(c.height=l[3]),u&1&&(c.stream=l[6]),e.$set(c)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){p(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function x(i){let e,n,l,u,c=i[0],s=[];for(let t=0;t<c.length;t+=1)s[t]=I(E(i,c,t));const r=t=>p(s[t],1,1,()=>{s[t]=null});return{c(){e=m("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=_(t,"DIV",{id:!0,class:!0});var o=w(e);for(let a=0;a<s.length;a+=1)s[a].l(o);o.forEach(h),this.h()},h(){d(e,"id","gallery"),d(e,"class","flex justify-center items-center flex-wrap w-full h-full px-8 py-8 gap-4")},m(t,o){j(t,e,o);for(let a=0;a<s.length;a+=1)s[a].m(e,null);i[5](e),n=!0,l||(u=K(window,"resize",i[4]),l=!0)},p(t,[o]){if(o&13){c=t[0];let a;for(a=0;a<c.length;a+=1){const f=E(t,c,a);s[a]?(s[a].p(f,o),v(s[a],1)):(s[a]=I(f),s[a].c(),v(s[a],1),s[a].m(e,null))}for(L(),a=c.length;a<s.length;a+=1)r(a);M()}},i(t){if(!n){for(let o=0;o<c.length;o+=1)v(s[o]);n=!0}},o(t){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)p(s[o]);n=!1},d(t){t&&h(e),W(s,t),i[5](null),l=!1,u()}}}function F(i,e,n){let{streams:l}=e,u,c,s;function r(){const o=[16,9],a=l.length,{width:f,height:C,cols:J}=z.largestRect(document.body.clientWidth-64-16*(a-1),document.body.clientHeight-64-64-16*(a-1),a,...o);n(2,c=f),n(3,s=C)}q(r);function t(o){B[o?"unshift":"push"](()=>{u=o,n(1,u)})}return i.$$set=o=>{"streams"in o&&n(0,l=o.streams)},i.$$.update=()=>{i.$$.dirty&1&&r()},[l,u,c,s,r,t]}class X extends y{constructor(e){super();b(this,e,F,x,k,{streams:0})}}export{X as G};
