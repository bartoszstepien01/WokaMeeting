import{b as F,_ as le}from"../chunks/paths-16c013c9.js";import{S as W,i as X,s as Y,j as U,m as C,o as J,x as R,u as V,v as T,A as Z,e as M,t as Q,k as L,c as P,a as H,g as z,d as _,n as D,b as g,J as y,f as A,H as b,h as ae,K as ne,L as oe,M as ie,w as x,N as fe,O as ce,r as ee}from"../chunks/vendor-657f76b4.js";import{P as ue,N as me,C as he,M as de,J as pe,G as _e,S as ge}from"../chunks/JoinPopup-96167371.js";function be(l){let r,t,e,a,c,n,f,o,d,v,I,p,k,$;return{c(){r=M("div"),t=M("div"),e=M("h1"),a=Q("Scan QR code"),c=L(),n=M("img"),o=L(),d=M("div"),v=M("h1"),I=Q("Enter URL"),p=L(),k=M("p"),$=Q(l[1]),this.h()},l(E){r=P(E,"DIV",{class:!0});var h=H(r);t=P(h,"DIV",{class:!0});var S=H(t);e=P(S,"H1",{class:!0});var m=H(e);a=z(m,"Scan QR code"),m.forEach(_),c=D(S),n=P(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(_),o=D(h),d=P(h,"DIV",{class:!0});var u=H(d);v=P(u,"H1",{class:!0});var s=H(v);I=z(s,"Enter URL"),s.forEach(_),p=D(u),k=P(u,"P",{class:!0});var i=H(k);$=z(i,l[1]),i.forEach(_),u.forEach(_),h.forEach(_),this.h()},h(){g(e,"class","text-white text-xl"),g(n,"class","p-2"),y(n.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+l[1]+"&format=svg&color=ffffff&bgcolor=1f2937")||g(n,"src",f),g(n,"alt",l[1]),g(t,"class","flex flex-col gap-2"),g(v,"class","text-white text-xl"),g(k,"class","bg-gray-700 rounded-md text-white px-2 py-1"),g(d,"class","flex flex-col gap-2"),g(r,"class","flex flex-col h-auto flex-1 gap-9 mt-2")},m(E,h){A(E,r,h),b(r,t),b(t,e),b(e,a),b(t,c),b(t,n),b(r,o),b(r,d),b(d,v),b(v,I),b(d,p),b(d,k),b(k,$)},p(E,h){h&2&&!y(n.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+E[1]+"&format=svg&color=ffffff&bgcolor=1f2937")&&g(n,"src",f),h&2&&g(n,"alt",E[1]),h&2&&ae($,E[1])},d(E){E&&_(r)}}}function ve(l){let r,t;return r=new ue({props:{title:"Share",visible:l[0],$$slots:{default:[be]},$$scope:{ctx:l}}}),r.$on("close",l[4]),{c(){U(r.$$.fragment)},l(e){C(r.$$.fragment,e)},m(e,a){J(r,e,a),t=!0},p(e,[a]){const c={};a&1&&(c.visible=e[0]),a&34&&(c.$$scope={dirty:a,ctx:e}),r.$set(c)},i(e){t||(R(r.$$.fragment,e),t=!0)},o(e){V(r.$$.fragment,e),t=!1},d(e){T(r,e)}}}function we(l,r,t){let e,{visible:a}=r,{id:c}=r,n="";Z(()=>{let o=new URL(window.location.href);t(3,n=o.origin+o.pathname+"join?room=")});function f(o){ne.call(this,l,o)}return l.$$set=o=>{"visible"in o&&t(0,a=o.visible),"id"in o&&t(2,c=o.id)},l.$$.update=()=>{l.$$.dirty&12&&t(1,e=n+c)},[a,e,c,n,f]}class $e extends W{constructor(r){super();X(this,r,we,ve,Y,{visible:0,id:2})}}function se(l){let r,t,e;function a(n){l[10](n)}let c={};return l[9]!==void 0&&(c.promise=l[9]),r=new pe({props:c}),fe.push(()=>ce(r,"promise",a)),{c(){U(r.$$.fragment)},l(n){C(r.$$.fragment,n)},m(n,f){J(r,n,f),e=!0},p(n,f){const o={};!t&&f&512&&(t=!0,o.promise=n[9],oe(()=>t=!1)),r.$set(o)},i(n){e||(R(r.$$.fragment,n),e=!0)},o(n){V(r.$$.fragment,n),e=!1},d(n){T(r,n)}}}function te(l){let r,t;return r=new _e({props:{streams:l[1],sidePanelVisible:l[4]||l[5]||l[6]}}),{c(){U(r.$$.fragment)},l(e){C(r.$$.fragment,e)},m(e,a){J(r,e,a),t=!0},p(e,a){const c={};a&2&&(c.streams=e[1]),a&112&&(c.sidePanelVisible=e[4]||e[5]||e[6]),r.$set(c)},i(e){t||(R(r.$$.fragment,e),t=!0)},o(e){V(r.$$.fragment,e),t=!1},d(e){T(r,e)}}}function Ee(l){let r,t,e,a,c,n,f,o,d,v,I,p,k,$,E,h,S,m=l[7]==null&&se(l);o=new me({props:{time:l[2]}}),o.$on("videoswitch",l[11]),o.$on("muteswitch",l[12]),o.$on("sourceswitch",l[13]),o.$on("chatswitch",l[14]),o.$on("membersswitch",l[15]),o.$on("shareswitch",l[16]);let u=l[1].length!==0&&te(l);return p=new he({props:{visible:l[4],messages:l[3]}}),p.$on("close",l[17]),p.$on("messagesend",l[18]),$=new de({props:{visible:l[5],users:l[1]}}),$.$on("close",l[19]),h=new $e({props:{visible:l[6],id:l[8]}}),h.$on("close",l[20]),{c(){r=M("link"),t=M("link"),e=M("script"),a=Q("let parcelRequire;"),c=L(),m&&m.c(),n=L(),f=M("div"),U(o.$$.fragment),d=L(),u&&u.c(),I=L(),U(p.$$.fragment),k=L(),U($.$$.fragment),E=L(),U(h.$$.fragment),this.h()},l(s){const i=ie('[data-svelte="svelte-tu3wcf"]',document.head);r=P(i,"LINK",{rel:!0,href:!0}),t=P(i,"LINK",{rel:!0,href:!0}),e=P(i,"SCRIPT",{});var G=H(e);a=z(G,"let parcelRequire;"),G.forEach(_),i.forEach(_),c=D(s),m&&m.l(s),n=D(s),f=P(s,"DIV",{class:!0});var q=H(f);C(o.$$.fragment,q),d=D(q),u&&u.l(q),q.forEach(_),I=D(s),C(p.$$.fragment,s),k=D(s),C($.$$.fragment,s),E=D(s),C(h.$$.fragment,s),this.h()},h(){g(r,"rel","icon"),g(r,"href",""+(F+"/favicon.png")),g(t,"rel","manifest"),g(t,"href",""+(F+"/manifest.json")),document.title="Home",g(f,"class",v=""+((l[4]||l[5]||l[6]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center"))},m(s,i){b(document.head,r),b(document.head,t),b(document.head,e),b(e,a),A(s,c,i),m&&m.m(s,i),A(s,n,i),A(s,f,i),J(o,f,null),b(f,d),u&&u.m(f,null),A(s,I,i),J(p,s,i),A(s,k,i),J($,s,i),A(s,E,i),J(h,s,i),S=!0},p(s,[i]){s[7]==null?m?(m.p(s,i),i&128&&R(m,1)):(m=se(s),m.c(),R(m,1),m.m(n.parentNode,n)):m&&(ee(),V(m,1,1,()=>{m=null}),x());const G={};i&4&&(G.time=s[2]),o.$set(G),s[1].length!==0?u?(u.p(s,i),i&2&&R(u,1)):(u=te(s),u.c(),R(u,1),u.m(f,null)):u&&(ee(),V(u,1,1,()=>{u=null}),x()),(!S||i&112&&v!==(v=""+((s[4]||s[5]||s[6]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center")))&&g(f,"class",v);const q={};i&16&&(q.visible=s[4]),i&8&&(q.messages=s[3]),p.$set(q);const w={};i&32&&(w.visible=s[5]),i&2&&(w.users=s[1]),$.$set(w);const N={};i&64&&(N.visible=s[6]),i&256&&(N.id=s[8]),h.$set(N)},i(s){S||(R(m),R(o.$$.fragment,s),R(u),R(p.$$.fragment,s),R($.$$.fragment,s),R(h.$$.fragment,s),S=!0)},o(s){V(m),V(o.$$.fragment,s),V(u),V(p.$$.fragment,s),V($.$$.fragment,s),V(h.$$.fragment,s),S=!1},d(s){_(r),_(t),_(e),s&&_(c),m&&m.d(s),s&&_(n),s&&_(f),T(o),u&&u.d(),s&&_(I),T(p,s),s&&_(k),T($,s),s&&_(E),T(h,s)}}}function ke(l,r,t){let e,a=[],c=0,n=[],f=!1,o=!1,d=!1,v,I="",p;Z(async()=>{const N=(await le(()=>import("../chunks/Host-bf5b7bd4.js"),["chunks/Host-bf5b7bd4.js","chunks/index-c6cf7118.js","chunks/vendor-657f76b4.js","assets/vendor-b8c56e4e.css"])).default;let K=await p;t(7,v=K.username);let B=K.stream;t(0,e=new N(v,B)),e.toggleMedia(K.video,K.audio),e.on("peer",j=>{a.map(O=>O.stream.id).includes(j.stream.id)||t(1,a=[...a,j])}),e.on("open",j=>{t(1,a=[{id:j,username:v,stream:B,video:K.video,audio:K.audio}]),t(8,I=j),setInterval(()=>t(2,c++,c),1e3)}),e.on("disconnect",j=>{t(1,a=a.filter(O=>O.id!=j))}),e.on("message",j=>{t(3,n=[...n,j])}),e.on("toggle",j=>{let O=a.find(re=>re.id==j.id);O.video=j.video,O.audio=j.audio,t(1,a)})});function k(w){p=w,t(9,p)}return[e,a,c,n,f,o,d,v,I,p,k,()=>{a[0].stream.getVideoTracks().forEach(w=>w.enabled=!w.enabled),t(1,a[0].video=!a[0].video,a),e.toggleMedia(!e.videoEnabled)},()=>{a[0].stream.getAudioTracks().forEach(w=>w.enabled=!w.enabled),t(1,a[0].audio=!a[0].audio,a),e.toggleMedia(void 0,!e.audioEnabled)},async w=>{let N=w.detail.source==ge.Screen?await navigator.mediaDevices.getDisplayMedia({video:!0}):await navigator.mediaDevices.getUserMedia({video:!0});e.replaceStream(N)},()=>{t(4,f=!f),t(5,o=!1),t(6,d=!1)},()=>{t(5,o=!o),t(4,f=!1),t(6,d=!1)},()=>{t(6,d=!d),t(4,f=!1),t(5,o=!1)},()=>t(4,f=!1),w=>e.send(w.detail.message),()=>t(5,o=!1),()=>t(6,d=!1)]}class Se extends W{constructor(r){super();X(this,r,ke,Ee,Y,{})}}export{Se as default};
