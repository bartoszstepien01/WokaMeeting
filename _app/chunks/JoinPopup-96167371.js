import{S as ae,i as se,s as ie,j as W,m as z,o as L,I as C,x as N,u as U,v as q,e as $,k as P,t as A,c as E,a as T,d as m,n as S,g as G,b,P as he,f as y,H as d,Q as lt,R as J,T as nt,h as te,r as fe,w as ue,U as _e,V as x,W as be,X as ke,K as we,A as Ve,Y as at,Z as st,l as F,_ as oe,$ as Ne,a0 as Pe,a1 as it,a2 as rt,a3 as ot,a4 as $e,a5 as ct,a6 as ft,D as ut,E as dt,F as ht,G as _t,J as me,a7 as pe,a8 as Se,a9 as ge,aa as Ce,ab as Me,ac as ve,ad as Ue}from"./vendor-657f76b4.js";function ye(s){let t,l;return t=new x({props:{icon:be,color:"#b91c1c",scale:1.5}}),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){L(t,e,n),l=!0},p:C,i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function Be(s){let t,l;return t=new x({props:{icon:ke,color:"#b91c1c",scale:1.5}}),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){L(t,e,n),l=!0},p:C,i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function mt(s){let t,l,e,n,i,a,o,r=s[2].username+"",_,h,c,u,k,f,v,g=!s[2].video&&ye(),p=!s[2].audio&&Be();return{c(){t=$("div"),l=$("video"),e=$("track"),a=P(),o=$("p"),_=A(r),h=P(),c=$("div"),g&&g.c(),u=P(),p&&p.c(),this.h()},l(w){t=E(w,"DIV",{class:!0,style:!0});var I=T(t);l=E(I,"VIDEO",{class:!0});var Q=T(l);e=E(Q,"TRACK",{kind:!0}),Q.forEach(m),a=S(I),o=E(I,"P",{class:!0});var j=T(o);_=G(j,r),j.forEach(m),h=S(I),c=E(I,"DIV",{class:!0});var H=T(c);g&&g.l(H),u=S(H),p&&p.l(H),H.forEach(m),I.forEach(m),this.h()},h(){b(e,"kind","captions"),l.autoplay=!0,l.muted=s[3],b(l,"class",n=""+((s[2].video?"":"hidden")+" w-full h-full rounded-xl")),b(o,"class","text-white absolute bottom-5 left-5 text-xl bg-gray-700 bg-opacity-70 px-2 py-1 rounded-md"),b(c,"class","absolute bottom-5 right-5 flex mx-2 my-1 gap-5"),b(t,"class","video-container bg-gray-700 rounded-xl relative svelte-5ldje3"),he(t,"--width",s[0]+"px"),he(t,"--height",s[1]+"px")},m(w,I){y(w,t,I),d(t,l),d(l,e),d(t,a),d(t,o),d(o,_),d(t,h),d(t,c),g&&g.m(c,null),d(c,u),p&&p.m(c,null),k=!0,f||(v=[lt(i=pt.call(null,l,s[2].stream)),J(t,"dblclick",s[4])],f=!0)},p(w,[I]){(!k||I&8)&&(l.muted=w[3]),(!k||I&4&&n!==(n=""+((w[2].video?"":"hidden")+" w-full h-full rounded-xl")))&&b(l,"class",n),i&&nt(i.update)&&I&4&&i.update.call(null,w[2].stream),(!k||I&4)&&r!==(r=w[2].username+"")&&te(_,r),w[2].video?g&&(fe(),U(g,1,1,()=>{g=null}),ue()):g?(g.p(w,I),I&4&&N(g,1)):(g=ye(),g.c(),N(g,1),g.m(c,u)),w[2].audio?p&&(fe(),U(p,1,1,()=>{p=null}),ue()):p?(p.p(w,I),I&4&&N(p,1)):(p=Be(),p.c(),N(p,1),p.m(c,null)),(!k||I&1)&&he(t,"--width",w[0]+"px"),(!k||I&2)&&he(t,"--height",w[1]+"px")},i(w){k||(N(g),N(p),k=!0)},o(w){U(g),U(p),k=!1},d(w){w&&m(t),g&&g.d(),p&&p.d(),f=!1,_e(v)}}}function pt(s,t){return s.srcObject=t,{destroy(){}}}function gt(s,t,l){let{width:e}=t,{height:n}=t,{stream:i}=t,{muted:a=!1}=t;function o(r){we.call(this,s,r)}return s.$$set=r=>{"width"in r&&l(0,e=r.width),"height"in r&&l(1,n=r.height),"stream"in r&&l(2,i=r.stream),"muted"in r&&l(3,a=r.muted)},[e,n,i,a,o]}class je extends ae{constructor(t){super();se(this,t,gt,mt,ie,{width:0,height:1,stream:2,muted:3})}}function Re(s,t,l){const e=s.slice();return e[8]=t[l],e[10]=l,e}function vt(s){let t,l;return t=new je({props:{width:s[2],height:s[3],stream:s[0][s[1]],muted:s[1]==0}}),t.$on("dblclick",s[7]),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){L(t,e,n),l=!0},p(e,n){const i={};n&4&&(i.width=e[2]),n&8&&(i.height=e[3]),n&3&&(i.stream=e[0][e[1]]),n&2&&(i.muted=e[1]==0),t.$set(i)},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function bt(s){let t,l,e=s[0],n=[];for(let a=0;a<e.length;a+=1)n[a]=He(Re(s,e,a));const i=a=>U(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();t=F()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);t=F()},m(a,o){for(let r=0;r<n.length;r+=1)n[r].m(a,o);y(a,t,o),l=!0},p(a,o){if(o&15){e=a[0];let r;for(r=0;r<e.length;r+=1){const _=Re(a,e,r);n[r]?(n[r].p(_,o),N(n[r],1)):(n[r]=He(_),n[r].c(),N(n[r],1),n[r].m(t.parentNode,t))}for(fe(),r=e.length;r<n.length;r+=1)i(r);ue()}},i(a){if(!l){for(let o=0;o<e.length;o+=1)N(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)U(n[o]);l=!1},d(a){oe(n,a),a&&m(t)}}}function He(s){let t,l;function e(){return s[6](s[10])}return t=new je({props:{width:s[2],height:s[3],stream:s[8],muted:s[10]==0}}),t.$on("dblclick",e),{c(){W(t.$$.fragment)},l(n){z(t.$$.fragment,n)},m(n,i){L(t,n,i),l=!0},p(n,i){s=n;const a={};i&4&&(a.width=s[2]),i&8&&(a.height=s[3]),i&1&&(a.stream=s[8]),t.$set(a)},i(n){l||(N(t.$$.fragment,n),l=!0)},o(n){U(t.$$.fragment,n),l=!1},d(n){q(t,n)}}}function kt(s){let t,l,e,n,i,a;const o=[bt,vt],r=[];function _(h,c){return h[1]==null?0:1}return l=_(s),e=r[l]=o[l](s),{c(){t=$("div"),e.c(),this.h()},l(h){t=E(h,"DIV",{id:!0,class:!0});var c=T(t);e.l(c),c.forEach(m),this.h()},h(){b(t,"id","gallery"),b(t,"class","flex justify-center items-center flex-wrap flex-1 px-8 py-8 gap-4")},m(h,c){y(h,t,c),r[l].m(t,null),n=!0,i||(a=J(window,"resize",s[4]),i=!0)},p(h,[c]){let u=l;l=_(h),l===u?r[l].p(h,c):(fe(),U(r[u],1,1,()=>{r[u]=null}),ue(),e=r[l],e?e.p(h,c):(e=r[l]=o[l](h),e.c()),N(e,1),e.m(t,null))},i(h){n||(N(e),n=!0)},o(h){U(e),n=!1},d(h){h&&m(t),r[l].d(),i=!1,a()}}}function wt(s,t,l){let{sidePanelVisible:e=!1}=t,{streams:n=[]}=t,i,a,o;function r(){const c=[16,9],u=i==null?n.length:1,{width:k,height:f}=at.largestRect(document.body.clientWidth-64-16*(u-1)-document.body.clientWidth*.25*st(e),document.body.clientHeight-64-64-16*(u-1),u,...c);l(2,a=k),l(3,o=f)}Ve(r);const _=c=>l(1,i=c),h=()=>l(1,i=void 0);return s.$$set=c=>{"sidePanelVisible"in c&&l(5,e=c.sidePanelVisible),"streams"in c&&l(0,n=c.streams)},s.$$.update=()=>{s.$$.dirty&35&&r()},[n,i,a,o,r,e,_,h]}class Gt extends ae{constructor(t){super();se(this,t,wt,kt,ie,{sidePanelVisible:5,streams:0})}}function Ae(s){let t,l,e,n,i,a,o;return n=new x({props:{icon:ct,color:"#ffffff",scale:1.2}}),{c(){t=$("div"),l=P(),e=$("button"),W(n.$$.fragment),this.h()},l(r){t=E(r,"DIV",{class:!0}),T(t).forEach(m),l=S(r),e=E(r,"BUTTON",{});var _=T(e);z(n.$$.fragment,_),_.forEach(m),this.h()},h(){b(t,"class","border border-gray-500")},m(r,_){y(r,t,_),y(r,l,_),y(r,e,_),L(n,e,null),i=!0,a||(o=J(e,"click",s[12]),a=!0)},p:C,i(r){i||(N(n.$$.fragment,r),i=!0)},o(r){U(n.$$.fragment,r),i=!1},d(r){r&&m(t),r&&m(l),r&&m(e),q(n),a=!1,o()}}}function $t(s){let t,l,e=s[5](s[0])+"",n,i,a,o,r,_,h,c,u,k,f,v,g,p,w,I,Q,j,H,ee,Y,X,re;r=new x({props:{icon:s[2]?Ne:be,color:"#ffffff",scale:1.3}}),c=new x({props:{icon:s[3]?Pe:ke,color:"#ffffff",scale:1.3}}),f=new x({props:{icon:it,color:s[4]==le.Camera?"#ffffff":"#34d399",scale:1.3}}),I=new x({props:{icon:rt,color:"#ffffff",scale:1.3}}),H=new x({props:{icon:ot,color:"#ffffff",scale:1.3}});let M=!s[1]&&Ae(s);return{c(){t=$("div"),l=$("p"),n=A(e),i=P(),a=$("div"),o=$("button"),W(r.$$.fragment),_=P(),h=$("button"),W(c.$$.fragment),u=P(),k=$("button"),W(f.$$.fragment),v=P(),g=$("div"),p=P(),w=$("button"),W(I.$$.fragment),Q=P(),j=$("button"),W(H.$$.fragment),ee=P(),M&&M.c(),this.h()},l(V){t=E(V,"DIV",{class:!0});var O=T(t);l=E(O,"P",{class:!0});var B=T(l);n=G(B,e),B.forEach(m),i=S(O),a=E(O,"DIV",{class:!0});var D=T(a);o=E(D,"BUTTON",{});var R=T(o);z(r.$$.fragment,R),R.forEach(m),_=S(D),h=E(D,"BUTTON",{});var Z=T(h);z(c.$$.fragment,Z),Z.forEach(m),u=S(D),k=E(D,"BUTTON",{class:!0});var ce=T(k);z(f.$$.fragment,ce),ce.forEach(m),v=S(D),g=E(D,"DIV",{class:!0}),T(g).forEach(m),p=S(D),w=E(D,"BUTTON",{});var K=T(w);z(I.$$.fragment,K),K.forEach(m),Q=S(D),j=E(D,"BUTTON",{});var ne=T(j);z(H.$$.fragment,ne),ne.forEach(m),ee=S(D),M&&M.l(D),D.forEach(m),O.forEach(m),this.h()},h(){b(l,"class","text-white"),b(k,"class","hidden sm:block"),b(g,"class","border border-gray-500"),b(a,"class","flex ml-auto gap-5"),b(t,"class","flex w-full bg-gray-700 h-16 px-8 items-center")},m(V,O){y(V,t,O),d(t,l),d(l,n),d(t,i),d(t,a),d(a,o),L(r,o,null),d(a,_),d(a,h),L(c,h,null),d(a,u),d(a,k),L(f,k,null),d(a,v),d(a,g),d(a,p),d(a,w),L(I,w,null),d(a,Q),d(a,j),L(H,j,null),d(a,ee),M&&M.m(a,null),Y=!0,X||(re=[J(o,"click",s[7]),J(h,"click",s[8]),J(k,"click",s[9]),J(w,"click",s[10]),J(j,"click",s[11])],X=!0)},p(V,[O]){(!Y||O&1)&&e!==(e=V[5](V[0])+"")&&te(n,e);const B={};O&4&&(B.icon=V[2]?Ne:be),r.$set(B);const D={};O&8&&(D.icon=V[3]?Pe:ke),c.$set(D);const R={};O&16&&(R.color=V[4]==le.Camera?"#ffffff":"#34d399"),f.$set(R),V[1]?M&&(fe(),U(M,1,1,()=>{M=null}),ue()):M?(M.p(V,O),O&2&&N(M,1)):(M=Ae(V),M.c(),N(M,1),M.m(a,null))},i(V){Y||(N(r.$$.fragment,V),N(c.$$.fragment,V),N(f.$$.fragment,V),N(I.$$.fragment,V),N(H.$$.fragment,V),N(M),Y=!0)},o(V){U(r.$$.fragment,V),U(c.$$.fragment,V),U(f.$$.fragment,V),U(I.$$.fragment,V),U(H.$$.fragment,V),U(M),Y=!1},d(V){V&&m(t),q(r),q(c),q(f),q(I),q(H),M&&M.d(),X=!1,_e(re)}}}var le;(function(s){s[s.Camera=0]="Camera",s[s.Screen=1]="Screen"})(le||(le={}));function Et(s,t,l){let e=!0,n=!0,i=le.Camera,{time:a=0}=t,{peer:o=!1}=t;const r=(p,w)=>String(p).padStart(w,"0"),_=p=>(~~(p/60)>=60?`${r(~~(p/3600),2)}:`:"")+`${r(~~(p/60)%60,2)}:${r(p%60,2)}`,h=$e(),c=()=>{l(2,e=!e),h("videoswitch")},u=()=>{l(3,n=!n),h("muteswitch")},k=()=>{l(4,i=i==le.Camera?le.Screen:le.Camera),h("sourceswitch",{source:i})},f=()=>h("chatswitch"),v=()=>h("membersswitch"),g=()=>h("shareswitch");return s.$$set=p=>{"time"in p&&l(0,a=p.time),"peer"in p&&l(1,o=p.peer)},[a,o,e,n,i,_,h,c,u,k,f,v,g]}class Jt extends ae{constructor(t){super();se(this,t,Et,$t,ie,{time:0,peer:1})}}function It(s){let t,l,e,n,i,a,o,r,_,h,c,u;o=new x({props:{icon:ft,color:"#ffffff",scale:1.3}});const k=s[4].default,f=ut(k,s,s[3],null);return{c(){t=$("div"),l=$("div"),e=$("h1"),n=A(s[0]),i=P(),a=$("button"),W(o.$$.fragment),r=P(),f&&f.c(),this.h()},l(v){t=E(v,"DIV",{class:!0});var g=T(t);l=E(g,"DIV",{class:!0});var p=T(l);e=E(p,"H1",{class:!0});var w=T(e);n=G(w,s[0]),w.forEach(m),i=S(p),a=E(p,"BUTTON",{class:!0});var I=T(a);z(o.$$.fragment,I),I.forEach(m),p.forEach(m),r=S(g),f&&f.l(g),g.forEach(m),this.h()},h(){b(e,"class","text-3xl text-white font-semibold"),b(a,"class","block md:hidden ml-auto"),b(l,"class","flex mb-3"),b(t,"class",_=""+((s[1]?"flex":"hidden")+" flex-col w-full md:w-[25vw] h-screen bg-gray-800 border-l-0 md:border-l-2 border-gray-700 px-4 pt-3 pb-8"))},m(v,g){y(v,t,g),d(t,l),d(l,e),d(e,n),d(l,i),d(l,a),L(o,a,null),d(t,r),f&&f.m(t,null),h=!0,c||(u=J(a,"click",s[5]),c=!0)},p(v,[g]){(!h||g&1)&&te(n,v[0]),f&&f.p&&(!h||g&8)&&dt(f,k,v,v[3],h?_t(k,v[3],g,null):ht(v[3]),null),(!h||g&2&&_!==(_=""+((v[1]?"flex":"hidden")+" flex-col w-full md:w-[25vw] h-screen bg-gray-800 border-l-0 md:border-l-2 border-gray-700 px-4 pt-3 pb-8")))&&b(t,"class",_)},i(v){h||(N(o.$$.fragment,v),N(f,v),h=!0)},o(v){U(o.$$.fragment,v),U(f,v),h=!1},d(v){v&&m(t),q(o),f&&f.d(v),c=!1,u()}}}function Tt(s,t,l){let{$$slots:e={},$$scope:n}=t,{title:i}=t,{visible:a}=t;const o=$e(),r=()=>o("close");return s.$$set=_=>{"title"in _&&l(0,i=_.title),"visible"in _&&l(1,a=_.visible),"$$scope"in _&&l(3,n=_.$$scope)},[i,a,o,n,e,r]}class Ge extends ae{constructor(t){super();se(this,t,Tt,It,ie,{title:0,visible:1})}}function Je(s,t,l){const e=s.slice();return e[1]=t[l],e}function Fe(s,t,l){const e=s.slice();return e[10]=t[l],e}function We(s){let t,l,e=s[10].message+"",n,i,a;return{c(){t=$("div"),l=$("p"),n=A(e),i=P(),this.h()},l(o){t=E(o,"DIV",{class:!0});var r=T(t);l=E(r,"P",{});var _=T(l);n=G(_,e),_.forEach(m),i=S(r),r.forEach(m),this.h()},h(){b(t,"class",a="flex items-center bg-gray-600 text-white rounded-b-md "+(s[1][0].me?"rounded-tl-md":"rounded-tr-md")+" flex-1 px-2 py-2")},m(o,r){y(o,t,r),d(t,l),d(l,n),d(t,i)},p(o,r){r&4&&e!==(e=o[10].message+"")&&te(n,e),r&4&&a!==(a="flex items-center bg-gray-600 text-white rounded-b-md "+(o[1][0].me?"rounded-tl-md":"rounded-tr-md")+" flex-1 px-2 py-2")&&b(t,"class",a)},d(o){o&&m(t)}}}function ze(s){let t,l,e,n,i,a,o,r=s[1][0].author+"",_,h,c,u,k=s[1],f=[];for(let v=0;v<k.length;v+=1)f[v]=We(Fe(s,k,v));return{c(){t=$("div"),l=$("img"),i=P(),a=$("div"),o=$("p"),_=A(r),h=P();for(let v=0;v<f.length;v+=1)f[v].c();c=P(),this.h()},l(v){t=E(v,"DIV",{class:!0});var g=T(t);l=E(g,"IMG",{src:!0,alt:!0,class:!0}),i=S(g),a=E(g,"DIV",{class:!0});var p=T(a);o=E(p,"P",{class:!0});var w=T(o);_=G(w,r),w.forEach(m),h=S(p);for(let I=0;I<f.length;I+=1)f[I].l(p);p.forEach(m),c=S(g),g.forEach(m),this.h()},h(){me(l.src,e="https://avatars.dicebear.com/api/initials/"+s[1][0].author+".svg")||b(l,"src",e),b(l,"alt",n=s[1][0].author),b(l,"class","rounded-md w-12 h-12 mt-auto"),b(o,"class","text-gray-400 text-xs"),b(a,"class","flex flex-col flex-1 gap-1"),b(t,"class",u="flex gap-2 "+(s[1][0].me?"flex-row-reverse":"flex-row"))},m(v,g){y(v,t,g),d(t,l),d(t,i),d(t,a),d(a,o),d(o,_),d(a,h);for(let p=0;p<f.length;p+=1)f[p].m(a,null);d(t,c)},p(v,g){if(g&4&&!me(l.src,e="https://avatars.dicebear.com/api/initials/"+v[1][0].author+".svg")&&b(l,"src",e),g&4&&n!==(n=v[1][0].author)&&b(l,"alt",n),g&4&&r!==(r=v[1][0].author+"")&&te(_,r),g&4){k=v[1];let p;for(p=0;p<k.length;p+=1){const w=Fe(v,k,p);f[p]?f[p].p(w,g):(f[p]=We(w),f[p].c(),f[p].m(a,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=k.length}g&4&&u!==(u="flex gap-2 "+(v[1][0].me?"flex-row-reverse":"flex-row"))&&b(t,"class",u)},d(v){v&&m(t),oe(f,v)}}}function Dt(s){let t,l,e,n,i,a,o,r,_,h=s[2],c=[];for(let u=0;u<h.length;u+=1)c[u]=ze(Je(s,h,u));return{c(){t=$("div");for(let u=0;u<c.length;u+=1)c[u].c();l=P(),e=$("form"),n=$("input"),i=P(),a=$("button"),o=A("Send"),this.h()},l(u){t=E(u,"DIV",{class:!0});var k=T(t);for(let g=0;g<c.length;g+=1)c[g].l(k);k.forEach(m),l=S(u),e=E(u,"FORM",{class:!0});var f=T(e);n=E(f,"INPUT",{type:!0,class:!0,placeholder:!0}),i=S(f),a=E(f,"BUTTON",{class:!0});var v=T(a);o=G(v,"Send"),v.forEach(m),f.forEach(m),this.h()},h(){b(t,"class","flex flex-col h-auto flex-1 gap-6"),b(n,"type","text"),b(n,"class","w-full bg-gray-700 text-white focus:outline-none h-9 px-4 rounded-md"),b(n,"placeholder","Aa"),b(a,"class","text-white bg-blue-600 px-4 rounded-md"),b(e,"class","flex gap-2")},m(u,k){y(u,t,k);for(let f=0;f<c.length;f+=1)c[f].m(t,null);y(u,l,k),y(u,e,k),d(e,n),pe(n,s[3]),d(e,i),d(e,a),d(a,o),r||(_=[J(n,"input",s[5]),J(e,"submit",Se(s[6]))],r=!0)},p(u,k){if(k&4){h=u[2];let f;for(f=0;f<h.length;f+=1){const v=Je(u,h,f);c[f]?c[f].p(v,k):(c[f]=ze(v),c[f].c(),c[f].m(t,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=h.length}k&8&&n.value!==u[3]&&pe(n,u[3])},d(u){u&&m(t),oe(c,u),u&&m(l),u&&m(e),r=!1,_e(_)}}}function Ot(s){let t,l;return t=new Ge({props:{title:"Chat",visible:s[0],$$slots:{default:[Dt]},$$scope:{ctx:s}}}),t.$on("close",s[7]),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){L(t,e,n),l=!0},p(e,[n]){const i={};n&1&&(i.visible=e[0]),n&8204&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function Vt(s,t,l){const e=$e();let{visible:n=!1}=t,{messages:i=[]}=t,a="",o=[];function r(){a=this.value,l(3,a)}const _=()=>{e("messagesend",{message:a}),l(3,a="")};function h(c){we.call(this,s,c)}return s.$$set=c=>{"visible"in c&&l(0,n=c.visible),"messages"in c&&l(1,i=c.messages)},s.$$.update=()=>{if(s.$$.dirty&6){let c=[];l(2,o=[]),i.forEach(u=>{if(c.length==0||c[c.length-1]!=u.id){c.push(u.id),o.push([u]);return}o[o.length-1].push(u)}),l(2,o=[...o])}},[n,i,o,a,e,r,_,h]}class Ft extends ae{constructor(t){super();se(this,t,Vt,Ot,ie,{visible:0,messages:1})}}function Le(s,t,l){const e=s.slice();return e[3]=t[l],e}function qe(s){let t,l,e,n,i,a,o=s[3].username+"",r,_;return{c(){t=$("div"),l=$("img"),i=P(),a=$("p"),r=A(o),_=P(),this.h()},l(h){t=E(h,"DIV",{class:!0});var c=T(t);l=E(c,"IMG",{src:!0,alt:!0,class:!0}),i=S(c),a=E(c,"P",{class:!0});var u=T(a);r=G(u,o),u.forEach(m),_=S(c),c.forEach(m),this.h()},h(){me(l.src,e="https://avatars.dicebear.com/api/initials/"+s[3].username+".svg")||b(l,"src",e),b(l,"alt",n=s[3].username),b(l,"class","rounded-md w-12 h-12 mt-auto"),b(a,"class","text-white"),b(t,"class","flex gap-2 flex-row items-center")},m(h,c){y(h,t,c),d(t,l),d(t,i),d(t,a),d(a,r),d(t,_)},p(h,c){c&2&&!me(l.src,e="https://avatars.dicebear.com/api/initials/"+h[3].username+".svg")&&b(l,"src",e),c&2&&n!==(n=h[3].username)&&b(l,"alt",n),c&2&&o!==(o=h[3].username+"")&&te(r,o)},d(h){h&&m(t)}}}function Nt(s){let t,l=s[1],e=[];for(let n=0;n<l.length;n+=1)e[n]=qe(Le(s,l,n));return{c(){t=$("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=E(n,"DIV",{class:!0});var i=T(t);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(m),this.h()},h(){b(t,"class","flex flex-col h-auto flex-1 gap-4 mt-2")},m(n,i){y(n,t,i);for(let a=0;a<e.length;a+=1)e[a].m(t,null)},p(n,i){if(i&2){l=n[1];let a;for(a=0;a<l.length;a+=1){const o=Le(n,l,a);e[a]?e[a].p(o,i):(e[a]=qe(o),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(n){n&&m(t),oe(e,n)}}}function Pt(s){let t,l;return t=new Ge({props:{title:"Participants",visible:s[0],$$slots:{default:[Nt]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){W(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){L(t,e,n),l=!0},p(e,[n]){const i={};n&1&&(i.visible=e[0]),n&66&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function St(s,t,l){let{visible:e}=t,{users:n}=t;function i(a){we.call(this,s,a)}return s.$$set=a=>{"visible"in a&&l(0,e=a.visible),"users"in a&&l(1,n=a.users)},[e,n,i]}class Wt extends ae{constructor(t){super();se(this,t,St,Pt,ie,{visible:0,users:1})}}function Ke(s,t,l){const e=s.slice();return e[11]=t[l],e}function Qe(s,t,l){const e=s.slice();return e[11]=t[l],e}function Xe(s){let t,l,e={ctx:s,current:null,token:null,hasCatch:!1,pending:Ut,then:Mt,catch:Ct,value:10};return ge(l=s[1],e),{c(){t=F(),e.block.c()},l(n){t=F(),e.block.l(n)},m(n,i){y(n,t,i),e.block.m(n,e.anchor=i),e.mount=()=>t.parentNode,e.anchor=t},p(n,i){s=n,e.ctx=s,i&2&&l!==(l=s[1])&&ge(l,e)||Ce(e,s,i)},d(n){n&&m(t),e.block.d(n),e.token=null,e=null}}}function Ct(s){return{c:C,l:C,m:C,p:C,d:C}}function Mt(s){let t,l=s[10],e=[];for(let n=0;n<l.length;n+=1)e[n]=Ze(Qe(s,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=F()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=F()},m(n,i){for(let a=0;a<e.length;a+=1)e[a].m(n,i);y(n,t,i)},p(n,i){if(i&2){l=n[10];let a;for(a=0;a<l.length;a+=1){const o=Qe(n,l,a);e[a]?e[a].p(o,i):(e[a]=Ze(o),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(n){oe(e,n),n&&m(t)}}}function Ye(s){let t,l=s[11].label+"",e,n;return{c(){t=$("option"),e=A(l),this.h()},l(i){t=E(i,"OPTION",{});var a=T(t);e=G(a,l),a.forEach(m),this.h()},h(){t.__value=n=s[11].deviceId,t.value=t.__value},m(i,a){y(i,t,a),d(t,e)},p(i,a){a&2&&l!==(l=i[11].label+"")&&te(e,l),a&2&&n!==(n=i[11].deviceId)&&(t.__value=n,t.value=t.__value)},d(i){i&&m(t)}}}function Ze(s){let t,l=s[11].kind=="videoinput"&&Ye(s);return{c(){l&&l.c(),t=F()},l(e){l&&l.l(e),t=F()},m(e,n){l&&l.m(e,n),y(e,t,n)},p(e,n){e[11].kind=="videoinput"?l?l.p(e,n):(l=Ye(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&m(t)}}}function Ut(s){return{c:C,l:C,m:C,p:C,d:C}}function xe(s){let t,l,e={ctx:s,current:null,token:null,hasCatch:!1,pending:jt,then:Bt,catch:yt,value:10};return ge(l=s[1],e),{c(){t=F(),e.block.c()},l(n){t=F(),e.block.l(n)},m(n,i){y(n,t,i),e.block.m(n,e.anchor=i),e.mount=()=>t.parentNode,e.anchor=t},p(n,i){s=n,e.ctx=s,i&2&&l!==(l=s[1])&&ge(l,e)||Ce(e,s,i)},d(n){n&&m(t),e.block.d(n),e.token=null,e=null}}}function yt(s){return{c:C,l:C,m:C,p:C,d:C}}function Bt(s){let t,l=s[10],e=[];for(let n=0;n<l.length;n+=1)e[n]=tt(Ke(s,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=F()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=F()},m(n,i){for(let a=0;a<e.length;a+=1)e[a].m(n,i);y(n,t,i)},p(n,i){if(i&2){l=n[10];let a;for(a=0;a<l.length;a+=1){const o=Ke(n,l,a);e[a]?e[a].p(o,i):(e[a]=tt(o),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(n){oe(e,n),n&&m(t)}}}function et(s){let t,l=s[11].label+"",e,n;return{c(){t=$("option"),e=A(l),this.h()},l(i){t=E(i,"OPTION",{});var a=T(t);e=G(a,l),a.forEach(m),this.h()},h(){t.__value=n=s[11].deviceId,t.value=t.__value},m(i,a){y(i,t,a),d(t,e)},p(i,a){a&2&&l!==(l=i[11].label+"")&&te(e,l),a&2&&n!==(n=i[11].deviceId)&&(t.__value=n,t.value=t.__value)},d(i){i&&m(t)}}}function tt(s){let t,l=s[11].kind=="audioinput"&&et(s);return{c(){l&&l.c(),t=F()},l(e){l&&l.l(e),t=F()},m(e,n){l&&l.m(e,n),y(e,t,n)},p(e,n){e[11].kind=="audioinput"?l?l.p(e,n):(l=et(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&m(t)}}}function jt(s){return{c:C,l:C,m:C,p:C,d:C}}function Rt(s){let t,l,e,n,i,a,o,r,_,h,c,u,k,f,v,g,p,w,I,Q,j,H,ee,Y,X,re,M,V,O=s[1]&&Xe(s),B=s[1]&&xe(s);return{c(){t=$("div"),l=$("div"),e=$("h1"),n=A("Meeting"),i=P(),a=$("hr"),o=P(),r=$("form"),_=$("input"),h=P(),c=$("select"),u=$("option"),k=A("Select video input..."),f=$("option"),v=A("Disabled"),O&&O.c(),p=P(),w=$("select"),I=$("option"),Q=A("Select audio input..."),j=$("option"),H=A("Disabled"),B&&B.c(),Y=P(),X=$("button"),re=A("Join"),this.h()},l(D){t=E(D,"DIV",{class:!0});var R=T(t);l=E(R,"DIV",{class:!0});var Z=T(l);e=E(Z,"H1",{class:!0});var ce=T(e);n=G(ce,"Meeting"),ce.forEach(m),i=S(Z),a=E(Z,"HR",{}),o=S(Z),r=E(Z,"FORM",{class:!0});var K=T(r);_=E(K,"INPUT",{type:!0,class:!0,placeholder:!0}),h=S(K),c=E(K,"SELECT",{class:!0});var ne=T(c);u=E(ne,"OPTION",{});var Ee=T(u);k=G(Ee,"Select video input..."),Ee.forEach(m),f=E(ne,"OPTION",{});var Ie=T(f);v=G(Ie,"Disabled"),Ie.forEach(m),O&&O.l(ne),ne.forEach(m),p=S(K),w=E(K,"SELECT",{class:!0});var de=T(w);I=E(de,"OPTION",{});var Te=T(I);Q=G(Te,"Select audio input..."),Te.forEach(m),j=E(de,"OPTION",{});var De=T(j);H=G(De,"Disabled"),De.forEach(m),B&&B.l(de),de.forEach(m),Y=S(K),X=E(K,"BUTTON",{class:!0});var Oe=T(X);re=G(Oe,"Join"),Oe.forEach(m),K.forEach(m),Z.forEach(m),R.forEach(m),this.h()},h(){b(e,"class","text-4xl font-bold mb-2"),b(_,"type","text"),b(_,"class","bg-gray-100 rounded-md focus:outline-none p-2 w-full"),b(_,"placeholder","Enter your username..."),_.autofocus=!0,u.disabled=!0,u.hidden=!0,u.selected=!0,u.__value=void 0,u.value=u.__value,f.__value="",f.value=f.__value,b(c,"class",g="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none "+(s[3]==null?"text-gray-400":"")),s[3]===void 0&&Me(()=>s[7].call(c)),I.disabled=!0,I.hidden=!0,I.selected=!0,I.__value=void 0,I.value=I.__value,j.__value="",j.value=j.__value,b(w,"class",ee="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none "+(s[4]==null?"text-gray-400":"")),s[4]===void 0&&Me(()=>s[8].call(w)),b(X,"class","bg-green-500 focus:outline-none text-white rounded-md w-full py-1"),b(r,"class","flex flex-col gap-2 mt-2"),b(l,"class","bg-white rounded-xl text-black px-5 py-4"),b(t,"class","flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 justify-center items-center")},m(D,R){y(D,t,R),d(t,l),d(l,e),d(e,n),d(l,i),d(l,a),d(l,o),d(l,r),d(r,_),pe(_,s[2]),d(r,h),d(r,c),d(c,u),d(u,k),d(c,f),d(f,v),O&&O.m(c,null),ve(c,s[3]),d(r,p),d(r,w),d(w,I),d(I,Q),d(w,j),d(j,H),B&&B.m(w,null),ve(w,s[4]),d(r,Y),d(r,X),d(X,re),_.focus(),M||(V=[J(_,"input",s[6]),J(c,"change",s[7]),J(w,"change",s[8]),J(r,"submit",Se(s[9]))],M=!0)},p(D,[R]){R&4&&_.value!==D[2]&&pe(_,D[2]),D[1]?O?O.p(D,R):(O=Xe(D),O.c(),O.m(c,null)):O&&(O.d(1),O=null),R&10&&g!==(g="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none "+(D[3]==null?"text-gray-400":""))&&b(c,"class",g),R&10&&ve(c,D[3]),D[1]?B?B.p(D,R):(B=xe(D),B.c(),B.m(w,null)):B&&(B.d(1),B=null),R&18&&ee!==(ee="bg-gray-100 rounded-md focus:outline-none p-2 w-full appearance-none "+(D[4]==null?"text-gray-400":""))&&b(w,"class",ee),R&18&&ve(w,D[4])},i:C,o:C,d(D){D&&m(t),O&&O.d(),B&&B.d(),M=!1,_e(V)}}}function Ht(s,t,l){let e,n,i,a,o;const r=new Promise(k=>{l(0,e=k)});Ve(()=>{l(1,n=navigator.mediaDevices.enumerateDevices())});function _(){i=this.value,l(2,i)}function h(){a=Ue(this),l(3,a),l(1,n)}function c(){o=Ue(this),l(4,o),l(1,n)}return[e,n,i,a,o,r,_,h,c,async()=>{if(a==null||o==null)return;let k=await navigator.mediaDevices.getUserMedia({video:a==""?!0:{deviceId:a},audio:o==""?!0:{deviceId:o}});a==""&&k.getVideoTracks().forEach(f=>f.enabled=!1),o==""&&k.getAudioTracks().forEach(f=>f.enabled=!1),e({username:i,stream:k,video:a!="",audio:o!=""})}]}class zt extends ae{constructor(t){super();se(this,t,Ht,Rt,ie,{promise:5})}get promise(){return this.$$.ctx[5]}}export{Ft as C,Gt as G,zt as J,Wt as M,Jt as N,Ge as P,le as S};
