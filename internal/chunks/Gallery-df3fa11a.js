import{S as y,i as b,s as k,e as m,c as g,a as p,d,b as f,K as u,f as j,H as O,L as H,M as R,I as V,j as S,m as A,o as K,x as v,u as w,v as L,N as M,r as W,w as q,O as z,A as B,P as N,Q as P}from"./vendor-5dfe71dc.js";function Q(a){let e,n,l,c,o,s;return{c(){e=m("div"),n=m("video"),l=m("track"),this.h()},l(h){e=g(h,"DIV",{class:!0,style:!0});var t=p(e);n=g(t,"VIDEO",{class:!0});var r=p(n);l=g(r,"TRACK",{kind:!0}),r.forEach(d),t.forEach(d),this.h()},h(){f(l,"kind","captions"),n.autoplay=!0,n.muted=!0,f(n,"class","svelte-eaaobw"),f(e,"class","video-container svelte-eaaobw"),u(e,"--width",a[0]+"px"),u(e,"--height",a[1]+"px")},m(h,t){j(h,e,t),O(e,n),O(n,l),o||(s=H(c=T.call(null,n,a[2])),o=!0)},p(h,[t]){c&&R(c.update)&&t&4&&c.update.call(null,h[2]),t&1&&u(e,"--width",h[0]+"px"),t&2&&u(e,"--height",h[1]+"px")},i:V,o:V,d(h){h&&d(e),o=!1,s()}}}function T(a,e){return a.srcObject=e,{destroy(){}}}function F(a,e,n){let{width:l}=e,{height:c}=e,{stream:o}=e;return a.$$set=s=>{"width"in s&&n(0,l=s.width),"height"in s&&n(1,c=s.height),"stream"in s&&n(2,o=s.stream)},[l,c,o]}class J extends y{constructor(e){super();b(this,e,F,Q,k,{width:0,height:1,stream:2})}}function C(a,e,n){const l=a.slice();return l[7]=e[n],l}function E(a){let e,n;return e=new J({props:{width:a[2],height:a[3],stream:a[7]}}),{c(){S(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){K(e,l,c),n=!0},p(l,c){const o={};c&4&&(o.width=l[2]),c&8&&(o.height=l[3]),c&1&&(o.stream=l[7]),e.$set(o)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function U(a){let e,n,l,c,o=a[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=E(C(a,o,t));const h=t=>w(s[t],1,1,()=>{s[t]=null});return{c(){e=m("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=g(t,"DIV",{id:!0,style:!0,class:!0});var r=p(e);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(d),this.h()},h(){f(e,"id","gallery"),u(e,"--width",a[2]+"px"),u(e,"--cols",a[4]),f(e,"class","svelte-1ntiwlc")},m(t,r){j(t,e,r);for(let i=0;i<s.length;i+=1)s[i].m(e,null);a[6](e),n=!0,l||(c=M(window,"resize",a[5]),l=!0)},p(t,[r]){if(r&13){o=t[0];let i;for(i=0;i<o.length;i+=1){const _=C(t,o,i);s[i]?(s[i].p(_,r),v(s[i],1)):(s[i]=E(_),s[i].c(),v(s[i],1),s[i].m(e,null))}for(W(),i=o.length;i<s.length;i+=1)h(i);q()}(!n||r&4)&&u(e,"--width",t[2]+"px"),(!n||r&16)&&u(e,"--cols",t[4])},i(t){if(!n){for(let r=0;r<o.length;r+=1)v(s[r]);n=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)w(s[r]);n=!1},d(t){t&&d(e),z(s,t),a[6](null),l=!1,c()}}}function X(a,e,n){let{streams:l}=e,c,o,s,h;function t(){const i=[16,9],_=l.length,{width:I,height:D,cols:G}=N.largestRect(document.body.clientWidth,document.body.clientHeight,_,...i);n(2,o=I),n(3,s=D),n(4,h=G)}B(t);function r(i){P[i?"unshift":"push"](()=>{c=i,n(1,c)})}return a.$$set=i=>{"streams"in i&&n(0,l=i.streams)},a.$$.update=()=>{a.$$.dirty&1&&t()},[l,c,o,s,h,t,r]}class Z extends y{constructor(e){super();b(this,e,X,U,k,{streams:0})}}export{Z as G};
