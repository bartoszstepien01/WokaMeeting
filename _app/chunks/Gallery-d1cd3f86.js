import{S as p,i as b,s as k,e as _,c as g,a as w,d,b as f,K as h,f as j,H as O,L as H,M as R,I as V,j as S,m as z,o as A,x as v,u as y,v as K,N as L,r as M,w as W,O as q,A as B,P as N,Q as P}from"./vendor-07f555be.js";function Q(a){let e,s,n,u,r,l;return{c(){e=_("div"),s=_("video"),n=_("track"),this.h()},l(o){e=g(o,"DIV",{class:!0,style:!0});var t=w(e);s=g(t,"VIDEO",{class:!0});var c=w(s);n=g(c,"TRACK",{kind:!0}),c.forEach(d),t.forEach(d),this.h()},h(){f(n,"kind","captions"),s.autoplay=!0,s.muted=a[3],f(s,"class","svelte-15rcoig"),f(e,"class","video-container svelte-15rcoig"),h(e,"--width",a[0]+"px"),h(e,"--height",a[1]+"px")},m(o,t){j(o,e,t),O(e,s),O(s,n),r||(l=H(u=T.call(null,s,a[2])),r=!0)},p(o,[t]){t&8&&(s.muted=o[3]),u&&R(u.update)&&t&4&&u.update.call(null,o[2]),t&1&&h(e,"--width",o[0]+"px"),t&2&&h(e,"--height",o[1]+"px")},i:V,o:V,d(o){o&&d(e),r=!1,l()}}}function T(a,e){return a.srcObject=e,{destroy(){}}}function F(a,e,s){let{width:n}=e,{height:u}=e,{stream:r}=e,{muted:l=!1}=e;return a.$$set=o=>{"width"in o&&s(0,n=o.width),"height"in o&&s(1,u=o.height),"stream"in o&&s(2,r=o.stream),"muted"in o&&s(3,l=o.muted)},[n,u,r,l]}class J extends p{constructor(e){super();b(this,e,F,Q,k,{width:0,height:1,stream:2,muted:3})}}function C(a,e,s){const n=a.slice();return n[7]=e[s],n[9]=s,n}function E(a){let e,s;return e=new J({props:{width:a[2],height:a[3],stream:a[7],muted:a[9]==0}}),{c(){S(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,u){A(e,n,u),s=!0},p(n,u){const r={};u&4&&(r.width=n[2]),u&8&&(r.height=n[3]),u&1&&(r.stream=n[7]),e.$set(r)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){K(e,n)}}}function U(a){let e,s,n,u,r=a[0],l=[];for(let t=0;t<r.length;t+=1)l[t]=E(C(a,r,t));const o=t=>y(l[t],1,1,()=>{l[t]=null});return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=g(t,"DIV",{id:!0,style:!0,class:!0});var c=w(e);for(let i=0;i<l.length;i+=1)l[i].l(c);c.forEach(d),this.h()},h(){f(e,"id","gallery"),h(e,"--width",a[2]+"px"),h(e,"--cols",a[4]),f(e,"class","svelte-11z11r8")},m(t,c){j(t,e,c);for(let i=0;i<l.length;i+=1)l[i].m(e,null);a[6](e),s=!0,n||(u=L(window,"resize",a[5]),n=!0)},p(t,[c]){if(c&13){r=t[0];let i;for(i=0;i<r.length;i+=1){const m=C(t,r,i);l[i]?(l[i].p(m,c),v(l[i],1)):(l[i]=E(m),l[i].c(),v(l[i],1),l[i].m(e,null))}for(M(),i=r.length;i<l.length;i+=1)o(i);W()}(!s||c&4)&&h(e,"--width",t[2]+"px"),(!s||c&16)&&h(e,"--cols",t[4])},i(t){if(!s){for(let c=0;c<r.length;c+=1)v(l[c]);s=!0}},o(t){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)y(l[c]);s=!1},d(t){t&&d(e),q(l,t),a[6](null),n=!1,u()}}}function X(a,e,s){let{streams:n}=e,u,r,l,o;function t(){const i=[16,9],m=n.length,{width:I,height:D,cols:G}=N.largestRect(document.body.clientWidth,document.body.clientHeight,m,...i);s(2,r=I),s(3,l=D),s(4,o=G)}B(t);function c(i){P[i?"unshift":"push"](()=>{u=i,s(1,u)})}return a.$$set=i=>{"streams"in i&&s(0,n=i.streams)},a.$$.update=()=>{a.$$.dirty&1&&t()},[n,u,r,l,o,t,c]}class Z extends p{constructor(e){super();b(this,e,X,U,k,{streams:0})}}export{Z as G};
