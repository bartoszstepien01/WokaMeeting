import{_ as le}from"../chunks/preload-helper.41c905a7.js";import{S as x,i as ee,s as se,y as G,z as T,A,g as M,d as V,B as H,o as te,k as P,q as z,a as j,l as q,m as N,r as B,h as _,c as D,n as b,J as W,b as C,G as g,u as ae,K as ne,L as oe,f as F,w as ie,M as fe,N as me,v as X}from"../chunks/index.5227cc00.js";import{b as Y}from"../chunks/paths.36076f58.js";import{P as ce,N as ue,C as he,M as de,J as pe,G as _e,S as ge}from"../chunks/JoinPopup.de206de2.js";function be(l){let r,t,e,a,m,n,f,o,d,v,R,p,k,$;return{c(){r=P("div"),t=P("div"),e=P("h1"),a=z("Scan QR code"),m=j(),n=P("img"),o=j(),d=P("div"),v=P("h1"),R=z("Enter URL"),p=j(),k=P("p"),$=z(l[1]),this.h()},l(E){r=q(E,"DIV",{class:!0});var h=N(r);t=q(h,"DIV",{class:!0});var S=N(t);e=q(S,"H1",{class:!0});var u=N(e);a=B(u,"Scan QR code"),u.forEach(_),m=D(S),n=q(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(_),o=D(h),d=q(h,"DIV",{class:!0});var c=N(d);v=q(c,"H1",{class:!0});var s=N(v);R=B(s,"Enter URL"),s.forEach(_),p=D(c),k=q(c,"P",{class:!0});var i=N(k);$=B(i,l[1]),i.forEach(_),c.forEach(_),h.forEach(_),this.h()},h(){b(e,"class","text-white text-xl"),b(n,"class","p-2"),W(n.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+l[1]+"&format=svg&color=ffffff&bgcolor=1f2937")||b(n,"src",f),b(n,"alt",l[1]),b(t,"class","flex flex-col gap-2"),b(v,"class","text-white text-xl"),b(k,"class","bg-gray-700 rounded-md text-white px-2 py-1"),b(d,"class","flex flex-col gap-2"),b(r,"class","flex flex-col h-auto flex-1 gap-9 mt-2")},m(E,h){C(E,r,h),g(r,t),g(t,e),g(e,a),g(t,m),g(t,n),g(r,o),g(r,d),g(d,v),g(v,R),g(d,p),g(d,k),g(k,$)},p(E,h){h&2&&!W(n.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+E[1]+"&format=svg&color=ffffff&bgcolor=1f2937")&&b(n,"src",f),h&2&&b(n,"alt",E[1]),h&2&&ae($,E[1])},d(E){E&&_(r)}}}function ve(l){let r,t;return r=new ce({props:{title:"Share",visible:l[0],$$slots:{default:[be]},$$scope:{ctx:l}}}),r.$on("close",l[4]),{c(){G(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,a){A(r,e,a),t=!0},p(e,[a]){const m={};a&1&&(m.visible=e[0]),a&34&&(m.$$scope={dirty:a,ctx:e}),r.$set(m)},i(e){t||(M(r.$$.fragment,e),t=!0)},o(e){V(r.$$.fragment,e),t=!1},d(e){H(r,e)}}}function we(l,r,t){let e,{visible:a}=r,{id:m}=r,n="";te(()=>{let o=new URL(window.location.href);t(3,n=o.origin+o.pathname+"join?room=")});function f(o){ne.call(this,l,o)}return l.$$set=o=>{"visible"in o&&t(0,a=o.visible),"id"in o&&t(2,m=o.id)},l.$$.update=()=>{l.$$.dirty&12&&t(1,e=n+m)},[a,e,m,n,f]}class $e extends x{constructor(r){super(),ee(this,r,we,ve,se,{visible:0,id:2})}}function Z(l){let r,t,e;function a(n){l[10](n)}let m={};return l[9]!==void 0&&(m.promise=l[9]),r=new pe({props:m}),ie.push(()=>fe(r,"promise",a)),{c(){G(r.$$.fragment)},l(n){T(r.$$.fragment,n)},m(n,f){A(r,n,f),e=!0},p(n,f){const o={};!t&&f&512&&(t=!0,o.promise=n[9],me(()=>t=!1)),r.$set(o)},i(n){e||(M(r.$$.fragment,n),e=!0)},o(n){V(r.$$.fragment,n),e=!1},d(n){H(r,n)}}}function y(l){let r,t;return r=new _e({props:{streams:l[1],sidePanelVisible:l[4]||l[5]||l[6]}}),{c(){G(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,a){A(r,e,a),t=!0},p(e,a){const m={};a&2&&(m.streams=e[1]),a&112&&(m.sidePanelVisible=e[4]||e[5]||e[6]),r.$set(m)},i(e){t||(M(r.$$.fragment,e),t=!0)},o(e){V(r.$$.fragment,e),t=!1},d(e){H(r,e)}}}function Ee(l){let r,t,e,a,m,n,f,o,d,v,R,p,k,$,E,h,S,u=l[7]==null&&Z(l);o=new ue({props:{time:l[2]}}),o.$on("videoswitch",l[11]),o.$on("muteswitch",l[12]),o.$on("sourceswitch",l[13]),o.$on("chatswitch",l[14]),o.$on("membersswitch",l[15]),o.$on("shareswitch",l[16]);let c=l[1].length!==0&&y(l);return p=new he({props:{visible:l[4],messages:l[3]}}),p.$on("close",l[17]),p.$on("messagesend",l[18]),$=new de({props:{visible:l[5],users:l[1]}}),$.$on("close",l[19]),h=new $e({props:{visible:l[6],id:l[8]}}),h.$on("close",l[20]),{c(){r=P("link"),t=P("link"),e=P("script"),a=z("let parcelRequire;"),m=j(),u&&u.c(),n=j(),f=P("div"),G(o.$$.fragment),d=j(),c&&c.c(),R=j(),G(p.$$.fragment),k=j(),G($.$$.fragment),E=j(),G(h.$$.fragment),this.h()},l(s){const i=oe("svelte-dvkar3",document.head);r=q(i,"LINK",{rel:!0,href:!0}),t=q(i,"LINK",{rel:!0,href:!0}),e=q(i,"SCRIPT",{});var J=N(e);a=B(J,"let parcelRequire;"),J.forEach(_),i.forEach(_),m=D(s),u&&u.l(s),n=D(s),f=q(s,"DIV",{class:!0});var L=N(f);T(o.$$.fragment,L),d=D(L),c&&c.l(L),L.forEach(_),R=D(s),T(p.$$.fragment,s),k=D(s),T($.$$.fragment,s),E=D(s),T(h.$$.fragment,s),this.h()},h(){b(r,"rel","icon"),b(r,"href",Y+"/favicon.png"),b(t,"rel","manifest"),b(t,"href",Y+"/manifest.json"),document.title="WokaMeeting",b(f,"class",v=(l[4]||l[5]||l[6]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center")},m(s,i){g(document.head,r),g(document.head,t),g(document.head,e),g(e,a),C(s,m,i),u&&u.m(s,i),C(s,n,i),C(s,f,i),A(o,f,null),g(f,d),c&&c.m(f,null),C(s,R,i),A(p,s,i),C(s,k,i),A($,s,i),C(s,E,i),A(h,s,i),S=!0},p(s,[i]){s[7]==null?u?(u.p(s,i),i&128&&M(u,1)):(u=Z(s),u.c(),M(u,1),u.m(n.parentNode,n)):u&&(X(),V(u,1,1,()=>{u=null}),F());const J={};i&4&&(J.time=s[2]),o.$set(J),s[1].length!==0?c?(c.p(s,i),i&2&&M(c,1)):(c=y(s),c.c(),M(c,1),c.m(f,null)):c&&(X(),V(c,1,1,()=>{c=null}),F()),(!S||i&112&&v!==(v=(s[4]||s[5]||s[6]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center"))&&b(f,"class",v);const L={};i&16&&(L.visible=s[4]),i&8&&(L.messages=s[3]),p.$set(L);const w={};i&32&&(w.visible=s[5]),i&2&&(w.users=s[1]),$.$set(w);const U={};i&64&&(U.visible=s[6]),i&256&&(U.id=s[8]),h.$set(U)},i(s){S||(M(u),M(o.$$.fragment,s),M(c),M(p.$$.fragment,s),M($.$$.fragment,s),M(h.$$.fragment,s),S=!0)},o(s){V(u),V(o.$$.fragment,s),V(c),V(p.$$.fragment,s),V($.$$.fragment,s),V(h.$$.fragment,s),S=!1},d(s){_(r),_(t),_(e),s&&_(m),u&&u.d(s),s&&_(n),s&&_(f),H(o),c&&c.d(),s&&_(R),H(p,s),s&&_(k),H($,s),s&&_(E),H(h,s)}}}function ke(l,r,t){let e,a=[],m=0,n=[],f=!1,o=!1,d=!1,v,R="",p;te(async()=>{const U=(await le(()=>import("../chunks/Host.0111f10a.js"),["../chunks/Host.0111f10a.js","../chunks/public.c29bcb9f.js"],import.meta.url)).default;let K=await p;t(7,v=K.username);let O=K.stream;t(0,e=new U(v,O)),e.toggleMedia(K.video,K.audio),e.on("peer",I=>{a.map(Q=>Q.stream.id).includes(I.stream.id)||t(1,a=[...a,I])}),e.on("open",I=>{t(1,a=[{id:I,username:v,stream:O,video:K.video,audio:K.audio}]),t(8,R=I),setInterval(()=>t(2,m++,m),1e3)}),e.on("disconnect",I=>{t(1,a=a.filter(Q=>Q.id!=I))}),e.on("message",I=>{t(3,n=[...n,I])}),e.on("toggle",I=>{let Q=a.find(re=>re.id==I.id);Q.video=I.video,Q.audio=I.audio,t(1,a)})});function k(w){p=w,t(9,p)}return[e,a,m,n,f,o,d,v,R,p,k,()=>{a[0].stream.getVideoTracks().forEach(w=>w.enabled=!w.enabled),t(1,a[0].video=!a[0].video,a),e.toggleMedia(!e.videoEnabled)},()=>{a[0].stream.getAudioTracks().forEach(w=>w.enabled=!w.enabled),t(1,a[0].audio=!a[0].audio,a),e.toggleMedia(void 0,!e.audioEnabled)},async w=>{let U=w.detail.source==ge.Screen?await navigator.mediaDevices.getDisplayMedia({video:!0}):await navigator.mediaDevices.getUserMedia({video:!0});e.replaceStream(U)},()=>{t(4,f=!f),t(5,o=!1),t(6,d=!1)},()=>{t(5,o=!o),t(4,f=!1),t(6,d=!1)},()=>{t(6,d=!d),t(4,f=!1),t(5,o=!1)},()=>t(4,f=!1),w=>e.send(w.detail.message),()=>t(5,o=!1),()=>t(6,d=!1)]}class Ve extends x{constructor(r){super(),ee(this,r,ke,Ee,se,{})}}export{Ve as component};