import{b as G,_ as K}from"../chunks/paths-16c013c9.js";import{S as O,i as U,s as z,j as C,m as P,o as R,x as E,u as y,v as q,e as S,t as J,k as M,J as B,c as V,a as L,g as F,d as w,n as N,b as T,H as $,f as A,w as Q,A as W,r as X}from"../chunks/vendor-4dd1f186.js";import{N as Y,C as Z,G as x,S as ee}from"../chunks/Chat-82a128d8.js";function H(c){let l,a;return l=new x({props:{streams:c[0],sidePanelVisible:c[6]}}),{c(){C(l.$$.fragment)},l(e){P(l.$$.fragment,e)},m(e,m){R(l,e,m),a=!0},p(e,m){const f={};m&1&&(f.streams=e[0]),m&64&&(f.sidePanelVisible=e[6]),l.$set(f)},i(e){a||(E(l.$$.fragment,e),a=!0)},o(e){y(l.$$.fragment,e),a=!1},d(e){q(l,e)}}}function se(c){let l,a,e,m,f,i,r,_,g,p,h,b;r=new Y({props:{time:c[2]}}),r.$on("videoswitch",c[8]),r.$on("muteswitch",c[9]),r.$on("sourceswitch",c[10]),r.$on("chatswitch",c[11]);let n=c[0].length!==0&&H(c);return h=new Z({props:{visible:c[6],messages:c[5]}}),h.$on("close",c[12]),h.$on("messagesend",c[13]),{c(){l=S("link"),a=S("link"),e=S("script"),m=J("let parcelRequire;"),f=M(),i=S("div"),C(r.$$.fragment),_=M(),n&&n.c(),p=M(),C(h.$$.fragment),this.h()},l(t){const u=B('[data-svelte="svelte-tu3wcf"]',document.head);l=V(u,"LINK",{rel:!0,href:!0}),a=V(u,"LINK",{rel:!0,href:!0}),e=V(u,"SCRIPT",{});var k=L(e);m=F(k,"let parcelRequire;"),k.forEach(w),u.forEach(w),f=N(t),i=V(t,"DIV",{class:!0});var o=L(i);P(r.$$.fragment,o),_=N(o),n&&n.l(o),o.forEach(w),p=N(t),P(h.$$.fragment,t),this.h()},h(){T(l,"rel","icon"),T(l,"href",""+(G+"/favicon.png")),T(a,"rel","manifest"),T(a,"href",""+(G+"/manifest.json")),document.title="Home",T(i,"class",g=""+((c[6]?"hidden":"flex")+" md:flex flex-col h-screen w-screen items-center"))},m(t,u){$(document.head,l),$(document.head,a),$(document.head,e),$(e,m),A(t,f,u),A(t,i,u),R(r,i,null),$(i,_),n&&n.m(i,null),A(t,p,u),R(h,t,u),b=!0},p(t,[u]){const k={};u&4&&(k.time=t[2]),r.$set(k),t[0].length!==0?n?(n.p(t,u),u&1&&E(n,1)):(n=H(t),n.c(),E(n,1),n.m(i,null)):n&&(X(),y(n,1,1,()=>{n=null}),Q()),(!b||u&64&&g!==(g=""+((t[6]?"hidden":"flex")+" md:flex flex-col h-screen w-screen items-center")))&&T(i,"class",g);const o={};u&64&&(o.visible=t[6]),u&32&&(o.messages=t[5]),h.$set(o)},i(t){b||(E(r.$$.fragment,t),E(n),E(h.$$.fragment,t),b=!0)},o(t){y(r.$$.fragment,t),y(n),y(h.$$.fragment,t),b=!1},d(t){w(l),w(a),w(e),t&&w(f),t&&w(i),q(r),n&&n.d(),t&&w(p),q(h,t)}}}function te(c,l,a){let e=[],m=[],f=0,i=[],r=[],_=[],g=!1,p="";return W(async()=>{const I=(await K(()=>import("../chunks/peerjs.min-140f3233.js").then(function(s){return s.p}),["chunks/peerjs.min-140f3233.js","chunks/vendor-4dd1f186.js","assets/vendor-b8c56e4e.css"])).default;a(7,p="DeathGuard12");let j=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});a(0,e=[{username:p,stream:j}]);let v=new I(void 0,{config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]}});v.on("open",s=>{console.log(s),a(1,m=[s]),setInterval(()=>a(2,f++,f),1e3)}),v.on("call",s=>{a(1,m=[...m,s.peer]),a(3,i=[...i,s]),s.answer(j),s.on("stream",d=>{e.map(D=>D.stream.id).includes(d.id)||a(0,e=[...e,{username:s.metadata.username,stream:d}])})}),v.on("connection",s=>{s.on("open",()=>{r.forEach(d=>{d.send({type:"connect",data:{peerId:s.peer,username:s.metadata.username}})}),s.send({type:"username",data:{username:p}}),r.push(s)}),s.on("close",()=>{a(4,r=r.filter(d=>d!=s)),a(0,e=e.filter((d,D)=>m[D]!=s.peer)),a(1,m=m.filter(d=>d!=s.peer)),a(3,i=i.filter(d=>d.peer!=s.peer)),r.forEach(d=>{d.send({type:"disconnect",data:{peerId:s.peer}})})}),s.on("data",d=>{switch(d.type){case"message":a(5,_=[..._,{author:e[r.indexOf(s)].username,message:d.data.message,id:s.peer,me:!1}]);break}}),window.onunload=window.onbeforeunload=()=>{s.close()}})}),[e,m,f,i,r,_,g,p,()=>e[0].stream.getVideoTracks().forEach(o=>o.enabled=!o.enabled),()=>e[0].stream.getAudioTracks().forEach(o=>o.enabled=!o.enabled),async o=>{let j=(o.detail.source==ee.Screen?await navigator.mediaDevices.getDisplayMedia({video:!0}):await navigator.mediaDevices.getUserMedia({video:!0})).getVideoTracks()[0];e[0].stream.getVideoTracks().forEach(v=>{v.stop(),e[0].stream.removeTrack(v)}),e[0].stream.addTrack(j),i.forEach(v=>v.peerConnection.getSenders().filter(s=>s.track.kind=="video").forEach(s=>s.replaceTrack(j)))},()=>a(6,g=!g),()=>a(6,g=!1),o=>{r.forEach(I=>{I.send({type:"message",data:{message:o.detail.message}})}),a(5,_=[..._,{author:p,message:o.detail.message,id:m[0],me:!0}])}]}class oe extends O{constructor(l){super();U(this,l,te,se,z,{})}}export{oe as default};