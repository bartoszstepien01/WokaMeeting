function p(){}function me(e,t){for(const n in t)e[n]=t[n];return e}function te(e){return e()}function ne(){return Object.create(null)}function z(e){e.forEach(te)}function ie(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function Xe(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function de(e){return Object.keys(e).length===0}function Ye(e,t,n,i){if(e){const l=re(e,t,n,i);return e[0](l)}}function re(e,t,n,i){return e[1]&&i?me(n.ctx.slice(),e[1](i(t))):n.ctx}function Pe(e,t,n,i){if(e[2]&&i){const l=e[2](i(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const f=[],r=Math.max(t.dirty.length,l.length);for(let s=0;s<r;s+=1)f[s]=t.dirty[s]|l[s];return f}return t.dirty|l}return t.dirty}function Ie(e,t,n,i,l,f){if(l){const r=re(t,n,i,f);e.p(r,l)}}function Ge(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function ae(e){return e==null?"":e}function Je(e){return e&&ie(e.destroy)?e.destroy:p}let M=!1;function ye(){M=!0}function ge(){M=!1}function pe(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function ve(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const a=[];for(let c=0;c<t.length;c++){const m=t[c];m.claim_order!==void 0&&a.push(m)}t=a}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let a=0;a<t.length;a++){const c=t[a].claim_order,m=(l>0&&t[n[l]].claim_order<=c?l+1:pe(1,l,u=>t[n[u]].claim_order,c))-1;i[a]=n[m]+1;const o=m+1;n[o]=a,l=Math.max(o,l)}const f=[],r=[];let s=t.length-1;for(let a=n[l]+1;a!=0;a=i[a-1]){for(f.push(t[a-1]);s>=a;s--)r.push(t[s]);s--}for(;s>=0;s--)r.push(t[s]);f.reverse(),r.sort((a,c)=>a.claim_order-c.claim_order);for(let a=0,c=0;a<r.length;a++){for(;c<f.length&&r[a].claim_order>=f[c].claim_order;)c++;const m=c<f.length?f[c]:null;e.insertBefore(r[a],m)}}function F(e,t){if(M){for(ve(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function S(e,t,n){M&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function Ke(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function be(e){return document.createElement(e)}function v(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function Qe(){return R(" ")}function ce(){return R("")}function Ue(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Ze(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function We(e){return e===""?null:+e}function b(e){return Array.from(e.childNodes)}function we(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function fe(e,t,n,i,l=!1){we(e);const f=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const a=n(s);return a===void 0?e.splice(r,1):e[r]=a,l||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const a=n(s);return a===void 0?e.splice(r,1):e[r]=a,l?a===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function oe(e,t,n,i){return fe(e,l=>l.nodeName===t,l=>{const f=[];for(let r=0;r<l.attributes.length;r++){const s=l.attributes[r];n[s.name]||f.push(s.name)}f.forEach(r=>l.removeAttribute(r))},()=>i(t))}function xe(e,t,n){return oe(e,t,n,be)}function C(e,t,n){return oe(e,t,n,v)}function Ce(e,t){return fe(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(t),!0)}function $e(e){return Ce(e," ")}function et(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function tt(e,t){e.value=t==null?"":t}function nt(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}function Ee(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}function it(e,t=document.body){return Array.from(t.querySelectorAll(e))}let L;function A(e){L=e}function O(){if(!L)throw new Error("Function called outside component initialization");return L}function lt(e){O().$$.on_mount.push(e)}function rt(e){O().$$.after_update.push(e)}function at(){const e=O();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const l=Ee(t,n);i.slice().forEach(f=>{f.call(e,l)})}}}function ct(e,t){O().$$.context.set(e,t)}function ft(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const k=[],se=[],q=[],X=[],ze=Promise.resolve();let Y=!1;function Se(){Y||(Y=!0,ze.then(ue))}function P(e){q.push(e)}function ot(e){X.push(e)}let I=!1;const G=new Set;function ue(){if(!I){I=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];A(t),ke(t.$$)}for(A(null),k.length=0;se.length;)se.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];G.has(t)||(G.add(t),t())}q.length=0}while(k.length);for(;X.length;)X.pop()();Y=!1,I=!1,G.clear()}}function ke(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const V=new Set;let w;function st(){w={r:0,c:[],p:w}}function ut(){w.r||z(w.c),w=w.p}function Ne(e,t){e&&e.i&&(V.delete(e),e.i(t))}function _t(e,t,n,i){if(e&&e.o){if(V.has(e))return;V.add(e),w.c.push(()=>{V.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function ht(e,t){const n={},i={},l={$$scope:1};let f=e.length;for(;f--;){const r=e[f],s=t[f];if(s){for(const a in r)a in s||(i[a]=1);for(const a in s)l[a]||(n[a]=s[a],l[a]=1);e[f]=s}else for(const a in r)l[a]=1}for(const r in i)r in n||(n[r]=void 0);return n}function mt(e){return typeof e=="object"&&e!==null?e:{}}function dt(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function yt(e){e&&e.c()}function gt(e,t){e&&e.l(t)}function Me(e,t,n,i){const{fragment:l,on_mount:f,on_destroy:r,after_update:s}=e.$$;l&&l.m(t,n),i||P(()=>{const a=f.map(te).filter(ie);r?r.push(...a):z(a),e.$$.on_mount=[]}),s.forEach(P)}function Le(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(k.push(e),Se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,i,l,f,r,s=[-1]){const a=L;A(e);const c=e.$$={fragment:null,ctx:null,props:f,update:p,not_equal:l,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ne(),dirty:s,skip_bound:!1,root:t.target||a.$$.root};r&&r(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(o,u,...d)=>{const y=d.length?d[0]:u;return c.ctx&&l(c.ctx[o],c.ctx[o]=y)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](y),m&&Ae(e,o)),u}):[],c.update(),m=!0,z(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){ye();const o=b(t.target);c.fragment&&c.fragment.l(o),o.forEach(g)}else c.fragment&&c.fragment.c();t.intro&&Ne(e.$$.fragment),Me(e,t.target,t.anchor,t.customElement),ge(),ue()}A(a)}class qe{$destroy(){Le(this,1),this.$destroy=p}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const E=[];function pt(e,t=p){let n;const i=new Set;function l(s){if(le(e,s)&&(e=s,n)){const a=!E.length;for(const c of i)c[1](),E.push(c,e);if(a){for(let c=0;c<E.length;c+=2)E[c][0](E[c+1]);E.length=0}}}function f(s){l(s(e))}function r(s,a=p){const c=[s,a];return i.add(c),i.size===1&&(n=t(l)||p),s(e),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:l,update:f,subscribe:r}}function vt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function bt(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function _e(e,t,n,i={}){if(e<0||t<0)throw new Error("Container must have a non-negative area");if(n<1||!Number.isInteger(n))throw new Error("Number of shapes to place must be a positive integer");const l=i.aspectRatio||1;if(isNaN(l))throw new Error("Aspect ratio must be a number");let f={area:0,cols:0,rows:0,width:0,height:0};const r=n,s=-1;for(let a=r;a>0;a+=s){const c=Math.ceil(n/a),m=e/(a*l),o=t/c;let u,d;m<=o?(u=e/a,d=u/l):(d=t/c,u=d*l);const y=u*d;y>f.area&&(f={area:y,width:u,height:d,rows:c,cols:a})}return f}function Ve(e,t,n){return _e(e,t,n)}function je(e,t,n,i,l){return _e(e,t,n,{aspectRatio:i/l})}var wt={largestRect:je,largestSquare:Ve};const j=parseFloat;function B(e,t=";"){let n;if(Array.isArray(e))n=e.filter(i=>i);else{n=[];for(const i in e)e[i]&&n.push(`${i}:${e[i]}`)}return n.join(t)}function Be(e,t,n,i){let l,f;const r="1em";let s,a,c,m="-.125em";const o="visible";return i&&(c="center",f="1.25em"),n&&(l=n),t&&(t=="lg"?(a="1.33333em",s=".75em",m="-.225em"):t=="xs"?a=".75em":t=="sm"?a=".875em":a=t.replace("x","em")),B([B({float:l,width:f,height:r,"line-height":s,"font-size":a,"text-align":c,"vertical-align":m,"transform-origin":"center",overflow:o}),e])}function De(e,t,n,i,l,f=1,r="",s=""){let a=1,c=1;return l&&(l=="horizontal"?a=-1:l=="vertical"?c=-1:a=c=-1),B([`translate(${j(t)*f}${r},${j(n)*f}${r})`,`scale(${a*j(e)},${c*j(e)})`,i&&`rotate(${i}${s})`]," ")}function he(e){let t,n,i,l,f,r,s;function a(o,u){return typeof o[7][4]=="string"?Te:He}let c=a(e),m=c(e);return{c(){t=v("svg"),n=v("g"),i=v("g"),m.c(),this.h()},l(o){t=C(o,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var u=b(t);n=C(u,"g",{transform:!0,"transform-origin":!0});var d=b(n);i=C(d,"g",{transform:!0});var y=b(i);m.l(y),y.forEach(g),d.forEach(g),u.forEach(g),this.h()},h(){h(i,"transform",e[10]),h(n,"transform",l=`translate(${e[7][0]/2} ${e[7][1]/2})`),h(n,"transform-origin",f=`${e[7][0]/4} 0`),h(t,"id",e[0]),h(t,"class",r=""+(ae(e[8])+" svelte-1lmliyu")),h(t,"style",e[9]),h(t,"viewBox",s=`0 0 ${e[7][0]} ${e[7][1]}`),h(t,"aria-hidden","true"),h(t,"role","img"),h(t,"xmlns","http://www.w3.org/2000/svg")},m(o,u){S(o,t,u),F(t,n),F(n,i),m.m(i,null)},p(o,u){c===(c=a(o))&&m?m.p(o,u):(m.d(1),m=c(o),m&&(m.c(),m.m(i,null))),u&1024&&h(i,"transform",o[10]),u&128&&l!==(l=`translate(${o[7][0]/2} ${o[7][1]/2})`)&&h(n,"transform",l),u&128&&f!==(f=`${o[7][0]/4} 0`)&&h(n,"transform-origin",f),u&1&&h(t,"id",o[0]),u&256&&r!==(r=""+(ae(o[8])+" svelte-1lmliyu"))&&h(t,"class",r),u&512&&h(t,"style",o[9]),u&128&&s!==(s=`0 0 ${o[7][0]} ${o[7][1]}`)&&h(t,"viewBox",s)},d(o){o&&g(t),m.d()}}}function He(e){let t,n,i,l,f,r,s,a,c,m;return{c(){t=v("path"),r=v("path"),this.h()},l(o){t=C(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(t).forEach(g),r=C(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(r).forEach(g),this.h()},h(){h(t,"d",n=e[7][4][0]),h(t,"fill",i=e[3]||e[1]||"currentColor"),h(t,"fill-opacity",l=e[6]!=!1?e[4]:e[5]),h(t,"transform",f=`translate(${e[7][0]/-2} ${e[7][1]/-2})`),h(r,"d",s=e[7][4][1]),h(r,"fill",a=e[2]||e[1]||"currentColor"),h(r,"fill-opacity",c=e[6]!=!1?e[5]:e[4]),h(r,"transform",m=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(o,u){S(o,t,u),S(o,r,u)},p(o,u){u&128&&n!==(n=o[7][4][0])&&h(t,"d",n),u&10&&i!==(i=o[3]||o[1]||"currentColor")&&h(t,"fill",i),u&112&&l!==(l=o[6]!=!1?o[4]:o[5])&&h(t,"fill-opacity",l),u&128&&f!==(f=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&h(t,"transform",f),u&128&&s!==(s=o[7][4][1])&&h(r,"d",s),u&6&&a!==(a=o[2]||o[1]||"currentColor")&&h(r,"fill",a),u&112&&c!==(c=o[6]!=!1?o[5]:o[4])&&h(r,"fill-opacity",c),u&128&&m!==(m=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&h(r,"transform",m)},d(o){o&&g(t),o&&g(r)}}}function Te(e){let t,n,i,l;return{c(){t=v("path"),this.h()},l(f){t=C(f,"path",{d:!0,fill:!0,transform:!0}),b(t).forEach(g),this.h()},h(){h(t,"d",n=e[7][4]),h(t,"fill",i=e[1]||e[2]||"currentColor"),h(t,"transform",l=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(f,r){S(f,t,r)},p(f,r){r&128&&n!==(n=f[7][4])&&h(t,"d",n),r&6&&i!==(i=f[1]||f[2]||"currentColor")&&h(t,"fill",i),r&128&&l!==(l=`translate(${f[7][0]/-2} ${f[7][1]/-2})`)&&h(t,"transform",l)},d(f){f&&g(t)}}}function Fe(e){let t,n=e[7][4]&&he(e);return{c(){n&&n.c(),t=ce()},l(i){n&&n.l(i),t=ce()},m(i,l){n&&n.m(i,l),S(i,t,l)},p(i,[l]){i[7][4]?n?n.p(i,l):(n=he(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:p,o:p,d(i){n&&n.d(i),i&&g(t)}}}function Re(e,t,n){let{class:i=""}=t,{id:l=""}=t,{style:f=""}=t,{icon:r}=t,{size:s=""}=t,{color:a=""}=t,{fw:c=!1}=t,{pull:m=""}=t,{scale:o=1}=t,{translateX:u=0}=t,{translateY:d=0}=t,{rotate:y=""}=t,{flip:D=!1}=t,{spin:H=!1}=t,{pulse:T=!1}=t,{primaryColor:J=""}=t,{secondaryColor:K=""}=t,{primaryOpacity:Q=1}=t,{secondaryOpacity:U=.4}=t,{swapOpacity:Z=!1}=t,W,x,$,ee;return e.$$set=_=>{"class"in _&&n(11,i=_.class),"id"in _&&n(0,l=_.id),"style"in _&&n(12,f=_.style),"icon"in _&&n(13,r=_.icon),"size"in _&&n(14,s=_.size),"color"in _&&n(1,a=_.color),"fw"in _&&n(15,c=_.fw),"pull"in _&&n(16,m=_.pull),"scale"in _&&n(17,o=_.scale),"translateX"in _&&n(18,u=_.translateX),"translateY"in _&&n(19,d=_.translateY),"rotate"in _&&n(20,y=_.rotate),"flip"in _&&n(21,D=_.flip),"spin"in _&&n(22,H=_.spin),"pulse"in _&&n(23,T=_.pulse),"primaryColor"in _&&n(2,J=_.primaryColor),"secondaryColor"in _&&n(3,K=_.secondaryColor),"primaryOpacity"in _&&n(4,Q=_.primaryOpacity),"secondaryOpacity"in _&&n(5,U=_.secondaryOpacity),"swapOpacity"in _&&n(6,Z=_.swapOpacity)},e.$$.update=()=>{e.$$.dirty&8192&&n(7,W=r&&r.icon||[0,0,"",[],""]),e.$$.dirty&12584960&&n(8,x=B([i,"fa",H&&"spin",T&&"pulse"]," ")),e.$$.dirty&118784&&n(9,$=Be(f,s,m,c)),e.$$.dirty&4063232&&n(10,ee=De(o,u,d,y,D,512))},[l,a,J,K,Q,U,Z,W,x,$,ee,i,f,r,s,c,m,o,u,d,y,D,H,T]}class Ct extends qe{constructor(t){super();Oe(this,t,Re,Fe,le,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Et={prefix:"fas",iconName:"comment",icon:[512,512,[],"f075","M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"]},zt={prefix:"fas",iconName:"desktop",icon:[576,512,[],"f108","M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"]},St={prefix:"fas",iconName:"microphone",icon:[352,512,[],"f130","M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"]},kt={prefix:"fas",iconName:"microphone-slash",icon:[640,512,[],"f131","M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"]},Nt={prefix:"fas",iconName:"share-alt",icon:[448,512,[],"f1e0","M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"]},Mt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},Lt={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"]},At={prefix:"fas",iconName:"video",icon:[576,512,[],"f03d","M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"]},Ot={prefix:"fas",iconName:"video-slash",icon:[640,512,[],"f4e2","M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"]};export{At as $,lt as A,me as B,pt as C,Ye as D,Ie as E,Ge as F,Pe as G,F as H,p as I,Xe as J,ft as K,ot as L,it as M,se as N,dt as O,nt as P,Je as Q,Ue as R,qe as S,ie as T,z as U,Ct as V,Ot as W,kt as X,wt as Y,We as Z,Ke as _,b as a,St as a0,zt as a1,Et as a2,Lt as a3,at as a4,Nt as a5,Mt as a6,tt as a7,Ze as a8,vt as a9,bt as aa,h as b,xe as c,g as d,be as e,S as f,Ce as g,et as h,Oe as i,yt as j,Qe as k,ce as l,gt as m,$e as n,Me as o,ht as p,mt as q,st as r,le as s,R as t,_t as u,Le as v,ut as w,Ne as x,ct as y,rt as z};
