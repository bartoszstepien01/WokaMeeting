import{b as F,_ as se}from"../chunks/paths-16c013c9.js";import{S as W,i as X,s as Y,j as C,m as H,o as N,x as T,u as L,v as A,A as Z,e as R,t as J,k as P,c as S,a as M,g as B,d as b,n as U,b as E,J as x,f as G,H as k,h as re,K as te,L as ae,w as le,r as ne}from"../chunks/vendor-ef7a3a0d.js";import{P as oe,N as ie,C as fe,M as ce,G as me,S as ue}from"../chunks/Members-dd352666.js";function he(t){let a,s,e,n,u,o,f,c,_,g,d,I,h,j;return{c(){a=R("div"),s=R("div"),e=R("h1"),n=J("Scan QR code"),u=P(),o=R("img"),c=P(),_=R("div"),g=R("h1"),d=J("Enter URL"),I=P(),h=R("p"),j=J(t[1]),this.h()},l(p){a=S(p,"DIV",{class:!0});var w=M(a);s=S(w,"DIV",{class:!0});var m=M(s);e=S(m,"H1",{class:!0});var r=M(e);n=B(r,"Scan QR code"),r.forEach(b),u=U(m),o=S(m,"IMG",{class:!0,src:!0,alt:!0}),m.forEach(b),c=U(w),_=S(w,"DIV",{class:!0});var i=M(_);g=S(i,"H1",{class:!0});var D=M(g);d=B(D,"Enter URL"),D.forEach(b),I=U(i),h=S(i,"P",{class:!0});var V=M(h);j=B(V,t[1]),V.forEach(b),i.forEach(b),w.forEach(b),this.h()},h(){E(e,"class","text-white text-xl"),E(o,"class","p-2"),x(o.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+t[1]+"&format=svg&color=ffffff&bgcolor=1f2937")||E(o,"src",f),E(o,"alt",t[1]),E(s,"class","flex flex-col gap-2"),E(g,"class","text-white text-xl"),E(h,"class","bg-gray-700 rounded-md text-white px-2 py-1"),E(_,"class","flex flex-col gap-2"),E(a,"class","flex flex-col h-auto flex-1 gap-9 mt-2")},m(p,w){G(p,a,w),k(a,s),k(s,e),k(e,n),k(s,u),k(s,o),k(a,c),k(a,_),k(_,g),k(g,d),k(_,I),k(_,h),k(h,j)},p(p,w){w&2&&!x(o.src,f="http://api.qrserver.com/v1/create-qr-code/?data="+p[1]+"&format=svg&color=ffffff&bgcolor=1f2937")&&E(o,"src",f),w&2&&E(o,"alt",p[1]),w&2&&re(j,p[1])},d(p){p&&b(a)}}}function de(t){let a,s;return a=new oe({props:{title:"Share",visible:t[0],$$slots:{default:[he]},$$scope:{ctx:t}}}),a.$on("close",t[4]),{c(){C(a.$$.fragment)},l(e){H(a.$$.fragment,e)},m(e,n){N(a,e,n),s=!0},p(e,[n]){const u={};n&1&&(u.visible=e[0]),n&34&&(u.$$scope={dirty:n,ctx:e}),a.$set(u)},i(e){s||(T(a.$$.fragment,e),s=!0)},o(e){L(a.$$.fragment,e),s=!1},d(e){A(a,e)}}}function pe(t,a,s){let e,{visible:n}=a,{id:u}=a,o="";Z(()=>{let c=new URL(window.location.href);s(3,o=c.origin+c.pathname+"join?room=")});function f(c){te.call(this,t,c)}return t.$$set=c=>{"visible"in c&&s(0,n=c.visible),"id"in c&&s(2,u=c.id)},t.$$.update=()=>{t.$$.dirty&12&&s(1,e=o+u)},[n,e,u,o,f]}class _e extends W{constructor(a){super();X(this,a,pe,de,Y,{visible:0,id:2})}}function ee(t){let a,s;return a=new me({props:{streams:t[0],sidePanelVisible:t[7]||t[8]||t[9]}}),{c(){C(a.$$.fragment)},l(e){H(a.$$.fragment,e)},m(e,n){N(a,e,n),s=!0},p(e,n){const u={};n&1&&(u.streams=e[0]),n&896&&(u.sidePanelVisible=e[7]||e[8]||e[9]),a.$set(u)},i(e){s||(T(a.$$.fragment,e),s=!0)},o(e){L(a.$$.fragment,e),s=!1},d(e){A(a,e)}}}function ge(t){let a,s,e,n,u,o,f,c,_,g,d,I,h,j,p,w;f=new ie({props:{time:t[3]}}),f.$on("videoswitch",t[11]),f.$on("muteswitch",t[12]),f.$on("sourceswitch",t[13]),f.$on("chatswitch",t[14]),f.$on("membersswitch",t[15]),f.$on("shareswitch",t[16]);let m=t[0].length!==0&&ee(t);return d=new fe({props:{visible:t[7],messages:t[6]}}),d.$on("close",t[17]),d.$on("messagesend",t[18]),h=new ce({props:{visible:t[8],users:t[0]}}),h.$on("close",t[19]),p=new _e({props:{visible:t[9],id:t[2]}}),p.$on("close",t[20]),{c(){a=R("link"),s=R("link"),e=R("script"),n=J("let parcelRequire;"),u=P(),o=R("div"),C(f.$$.fragment),c=P(),m&&m.c(),g=P(),C(d.$$.fragment),I=P(),C(h.$$.fragment),j=P(),C(p.$$.fragment),this.h()},l(r){const i=ae('[data-svelte="svelte-tu3wcf"]',document.head);a=S(i,"LINK",{rel:!0,href:!0}),s=S(i,"LINK",{rel:!0,href:!0}),e=S(i,"SCRIPT",{});var D=M(e);n=B(D,"let parcelRequire;"),D.forEach(b),i.forEach(b),u=U(r),o=S(r,"DIV",{class:!0});var V=M(o);H(f.$$.fragment,V),c=U(V),m&&m.l(V),V.forEach(b),g=U(r),H(d.$$.fragment,r),I=U(r),H(h.$$.fragment,r),j=U(r),H(p.$$.fragment,r),this.h()},h(){E(a,"rel","icon"),E(a,"href",""+(F+"/favicon.png")),E(s,"rel","manifest"),E(s,"href",""+(F+"/manifest.json")),document.title="Home",E(o,"class",_=""+((t[7]||t[8]||t[9]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center"))},m(r,i){k(document.head,a),k(document.head,s),k(document.head,e),k(e,n),G(r,u,i),G(r,o,i),N(f,o,null),k(o,c),m&&m.m(o,null),G(r,g,i),N(d,r,i),G(r,I,i),N(h,r,i),G(r,j,i),N(p,r,i),w=!0},p(r,[i]){const D={};i&8&&(D.time=r[3]),f.$set(D),r[0].length!==0?m?(m.p(r,i),i&1&&T(m,1)):(m=ee(r),m.c(),T(m,1),m.m(o,null)):m&&(ne(),L(m,1,1,()=>{m=null}),le()),(!w||i&896&&_!==(_=""+((r[7]||r[8]||r[9]?"hidden":"flex")+" md:flex flex-col h-screen w-full items-center")))&&E(o,"class",_);const V={};i&128&&(V.visible=r[7]),i&64&&(V.messages=r[6]),d.$set(V);const O={};i&256&&(O.visible=r[8]),i&1&&(O.users=r[0]),h.$set(O);const Q={};i&512&&(Q.visible=r[9]),i&4&&(Q.id=r[2]),p.$set(Q)},i(r){w||(T(f.$$.fragment,r),T(m),T(d.$$.fragment,r),T(h.$$.fragment,r),T(p.$$.fragment,r),w=!0)},o(r){L(f.$$.fragment,r),L(m),L(d.$$.fragment,r),L(h.$$.fragment,r),L(p.$$.fragment,r),w=!1},d(r){b(a),b(s),b(e),r&&b(u),r&&b(o),A(f),m&&m.d(),r&&b(g),A(d,r),r&&b(I),A(h,r),r&&b(j),A(p,r)}}}function be(t,a,s){let e=[],n=[],u="",o=0,f=[],c=[],_=[],g=!1,d=!1,I=!1,h="";return Z(async()=>{const z=(await se(()=>import("../chunks/peerjs.min-3810ccda.js").then(function(l){return l.p}),["chunks/peerjs.min-3810ccda.js","chunks/vendor-ef7a3a0d.js","assets/vendor-b8c56e4e.css"])).default;s(10,h=window.prompt("Enter username: "));let K=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});s(0,e=[{username:h,stream:K}]);let q=new z(void 0,{config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]}});q.on("open",l=>{s(1,n=[l]),s(2,u=l),setInterval(()=>s(3,o++,o),1e3)}),q.on("call",l=>{s(1,n=[...n,l.peer]),s(4,f=[...f,l]),l.answer(K),l.on("stream",v=>{e.map(y=>y.stream.id).includes(v.id)||s(0,e=[...e,{username:l.metadata.username,stream:v}])})}),q.on("connection",l=>{l.on("open",()=>{c.forEach(v=>{v.send({type:"connect",data:{peerId:l.peer,username:l.metadata.username}})}),l.send({type:"username",data:{username:h}}),c.push(l)}),l.on("close",()=>{s(5,c=c.filter(v=>v!=l)),s(0,e=e.filter((v,y)=>n[y]!=l.peer)),s(1,n=n.filter(v=>v!=l.peer)),s(4,f=f.filter(v=>v.peer!=l.peer)),c.forEach(v=>{v.send({type:"disconnect",data:{peerId:l.peer}})})}),l.on("data",v=>{switch(v.type){case"message":c.forEach(y=>{y.peer!=l.peer&&y.send({type:"message",data:{author:e[c.indexOf(l)+1].username,message:v.data.message,id:l.peer}})}),s(6,_=[..._,{author:e[c.indexOf(l)+1].username,message:v.data.message,id:l.peer,me:!1}]);break}}),window.onunload=window.onbeforeunload=()=>{l.close()}})}),[e,n,u,o,f,c,_,g,d,I,h,()=>e[0].stream.getVideoTracks().forEach($=>$.enabled=!$.enabled),()=>e[0].stream.getAudioTracks().forEach($=>$.enabled=!$.enabled),async $=>{let K=($.detail.source==ue.Screen?await navigator.mediaDevices.getDisplayMedia({video:!0}):await navigator.mediaDevices.getUserMedia({video:!0})).getVideoTracks()[0];e[0].stream.getVideoTracks().forEach(q=>{q.stop(),e[0].stream.removeTrack(q)}),e[0].stream.addTrack(K),f.forEach(q=>q.peerConnection.getSenders().filter(l=>l.track.kind=="video").forEach(l=>l.replaceTrack(K)))},()=>{s(7,g=!g),s(8,d=!1),s(9,I=!1)},()=>{s(8,d=!d),s(7,g=!1),s(9,I=!1)},()=>{s(9,I=!I),s(7,g=!1),s(8,d=!1)},()=>s(7,g=!1),$=>{c.forEach(z=>{z.send({type:"message",data:{author:h,message:$.detail.message,id:n[0]}})}),s(6,_=[..._,{author:h,message:$.detail.message,id:n[0],me:!0}])},()=>s(8,d=!1),()=>s(9,I=!1)]}class ke extends W{constructor(a){super();X(this,a,be,ge,Y,{})}}export{ke as default};