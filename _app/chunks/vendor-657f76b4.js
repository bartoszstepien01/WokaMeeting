function p(){}function me(e,t){for(const n in t)e[n]=t[n];return e}function ye(e){return e&&typeof e=="object"&&typeof e.then=="function"}function ne(e){return e()}function le(){return Object.create(null)}function z(e){e.forEach(ne)}function re(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function Ge(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function ge(e){return Object.keys(e).length===0}function Je(e,t,n,l){if(e){const r=ae(e,t,n,l);return e[0](r)}}function ae(e,t,n,l){return e[1]&&l?me(n.ctx.slice(),e[1](l(t))):n.ctx}function Ke(e,t,n,l){if(e[2]&&l){const r=e[2](l(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const c=[],i=Math.max(t.dirty.length,r.length);for(let f=0;f<i;f+=1)c[f]=t.dirty[f]|r[f];return c}return t.dirty|r}return t.dirty}function Qe(e,t,n,l,r,c){if(r){const i=ae(t,n,l,c);e.p(i,r)}}function Ue(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function ce(e){return e==null?"":e}function Ze(e){return e&&re(e.destroy)?e.destroy:p}let A=!1;function pe(){A=!0}function be(){A=!1}function ve(e,t,n,l){for(;e<t;){const r=e+(t-e>>1);n(r)<=l?e=r+1:t=r}return e}function we(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const a=[];for(let s=0;s<t.length;s++){const h=t[s];h.claim_order!==void 0&&a.push(h)}t=a}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let r=0;for(let a=0;a<t.length;a++){const s=t[a].claim_order,h=(r>0&&t[n[r]].claim_order<=s?r+1:ve(1,r,u=>t[n[u]].claim_order,s))-1;l[a]=n[h]+1;const o=h+1;n[o]=a,r=Math.max(o,r)}const c=[],i=[];let f=t.length-1;for(let a=n[r]+1;a!=0;a=l[a-1]){for(c.push(t[a-1]);f>=a;f--)i.push(t[f]);f--}for(;f>=0;f--)i.push(t[f]);c.reverse(),i.sort((a,s)=>a.claim_order-s.claim_order);for(let a=0,s=0;a<i.length;a++){for(;s<c.length&&i[a].claim_order>=c[s].claim_order;)s++;const h=s<c.length?c[s]:null;e.insertBefore(i[a],h)}}function F(e,t){if(A){for(we(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function S(e,t,n){A&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function xe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Ce(e){return document.createElement(e)}function v(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function We(){return R(" ")}function se(){return R("")}function $e(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function et(e){return function(t){return t.preventDefault(),e.call(this,t)}}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function tt(e){return e===""?null:+e}function w(e){return Array.from(e.childNodes)}function ke(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function oe(e,t,n,l,r=!1){ke(e);const c=(()=>{for(let i=e.claim_info.last_index;i<e.length;i++){const f=e[i];if(t(f)){const a=n(f);return a===void 0?e.splice(i,1):e[i]=a,r||(e.claim_info.last_index=i),f}}for(let i=e.claim_info.last_index-1;i>=0;i--){const f=e[i];if(t(f)){const a=n(f);return a===void 0?e.splice(i,1):e[i]=a,r?a===void 0&&e.claim_info.last_index--:e.claim_info.last_index=i,f}}return l()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function fe(e,t,n,l){return oe(e,r=>r.nodeName===t,r=>{const c=[];for(let i=0;i<r.attributes.length;i++){const f=r.attributes[i];n[f.name]||c.push(f.name)}c.forEach(i=>r.removeAttribute(i))},()=>l(t))}function nt(e,t,n){return fe(e,t,n,Ce)}function k(e,t,n){return fe(e,t,n,v)}function Ee(e,t){return oe(e,n=>n.nodeType===3,n=>{const l=""+t;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>R(t),!0)}function lt(e){return Ee(e," ")}function rt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function it(e,t){e.value=t==null?"":t}function at(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}function ct(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t){l.selected=!0;return}}e.selectedIndex=-1}function st(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function ze(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}function ot(e,t=document.body){return Array.from(t.querySelectorAll(e))}let O;function b(e){O=e}function N(){if(!O)throw new Error("Function called outside component initialization");return O}function ft(e){N().$$.on_mount.push(e)}function ut(e){N().$$.after_update.push(e)}function _t(){const e=N();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const r=ze(t,n);l.slice().forEach(c=>{c.call(e,r)})}}}function ht(e,t){N().$$.context.set(e,t)}function dt(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const M=[],ue=[],q=[],X=[],Se=Promise.resolve();let Y=!1;function Ne(){Y||(Y=!0,Se.then(J))}function P(e){q.push(e)}function mt(e){X.push(e)}let I=!1;const G=new Set;function J(){if(!I){I=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];b(t),Me(t.$$)}for(b(null),M.length=0;ue.length;)ue.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];G.has(t)||(G.add(t),t())}q.length=0}while(M.length);for(;X.length;)X.pop()();Y=!1,I=!1,G.clear()}}function Me(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const j=new Set;let C;function Le(){C={r:0,c:[],p:C}}function Ae(){C.r||z(C.c),C=C.p}function _e(e,t){e&&e.i&&(j.delete(e),e.i(t))}function Oe(e,t,n,l){if(e&&e.o){if(j.has(e))return;j.add(e),C.c.push(()=>{j.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function yt(e,t){const n=t.token={};function l(r,c,i,f){if(t.token!==n)return;t.resolved=f;let a=t.ctx;i!==void 0&&(a=a.slice(),a[i]=f);const s=r&&(t.current=r)(a);let h=!1;t.block&&(t.blocks?t.blocks.forEach((o,u)=>{u!==c&&o&&(Le(),Oe(o,1,1,()=>{t.blocks[u]===o&&(t.blocks[u]=null)}),Ae())}):t.block.d(1),s.c(),_e(s,1),s.m(t.mount(),t.anchor),h=!0),t.block=s,t.blocks&&(t.blocks[c]=s),h&&J()}if(ye(e)){const r=N();if(e.then(c=>{b(r),l(t.then,1,t.value,c),b(null)},c=>{if(b(r),l(t.catch,2,t.error,c),b(null),!t.hasCatch)throw c}),t.current!==t.pending)return l(t.pending,0),!0}else{if(t.current!==t.then)return l(t.then,1,t.value,e),!0;t.resolved=e}}function gt(e,t,n){const l=t.slice(),{resolved:r}=e;e.current===e.then&&(l[e.value]=r),e.current===e.catch&&(l[e.error]=r),e.block.p(l,n)}function pt(e,t){const n={},l={},r={$$scope:1};let c=e.length;for(;c--;){const i=e[c],f=t[c];if(f){for(const a in i)a in f||(l[a]=1);for(const a in f)r[a]||(n[a]=f[a],r[a]=1);e[c]=f}else for(const a in i)r[a]=1}for(const i in l)i in n||(n[i]=void 0);return n}function bt(e){return typeof e=="object"&&e!==null?e:{}}function vt(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function wt(e){e&&e.c()}function Ct(e,t){e&&e.l(t)}function qe(e,t,n,l){const{fragment:r,on_mount:c,on_destroy:i,after_update:f}=e.$$;r&&r.m(t,n),l||P(()=>{const a=c.map(ne).filter(re);i?i.push(...a):z(a),e.$$.on_mount=[]}),f.forEach(P)}function je(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,l,r,c,i,f=[-1]){const a=O;b(e);const s=e.$$={fragment:null,ctx:null,props:c,update:p,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:le(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};i&&i(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(o,u,...m)=>{const y=m.length?m[0]:u;return s.ctx&&r(s.ctx[o],s.ctx[o]=y)&&(!s.skip_bound&&s.bound[o]&&s.bound[o](y),h&&Ve(e,o)),u}):[],s.update(),h=!0,z(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){pe();const o=w(t.target);s.fragment&&s.fragment.l(o),o.forEach(g)}else s.fragment&&s.fragment.c();t.intro&&_e(e.$$.fragment),qe(e,t.target,t.anchor,t.customElement),be(),J()}b(a)}class De{$destroy(){je(this,1),this.$destroy=p}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const E=[];function kt(e,t=p){let n;const l=new Set;function r(f){if(ie(e,f)&&(e=f,n)){const a=!E.length;for(const s of l)s[1](),E.push(s,e);if(a){for(let s=0;s<E.length;s+=2)E[s][0](E[s+1]);E.length=0}}}function c(f){r(f(e))}function i(f,a=p){const s=[f,a];return l.add(s),l.size===1&&(n=t(r)||p),f(e),()=>{l.delete(s),l.size===0&&(n(),n=null)}}return{set:r,update:c,subscribe:i}}function Et(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zt(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function he(e,t,n,l={}){if(e<0||t<0)throw new Error("Container must have a non-negative area");if(n<1||!Number.isInteger(n))throw new Error("Number of shapes to place must be a positive integer");const r=l.aspectRatio||1;if(isNaN(r))throw new Error("Aspect ratio must be a number");let c={area:0,cols:0,rows:0,width:0,height:0};const i=n,f=-1;for(let a=i;a>0;a+=f){const s=Math.ceil(n/a),h=e/(a*r),o=t/s;let u,m;h<=o?(u=e/a,m=u/r):(m=t/s,u=m*r);const y=u*m;y>c.area&&(c={area:y,width:u,height:m,rows:s,cols:a})}return c}function He(e,t,n){return he(e,t,n)}function Te(e,t,n,l,r){return he(e,t,n,{aspectRatio:l/r})}var St={largestRect:Te,largestSquare:He};const V=parseFloat;function B(e,t=";"){let n;if(Array.isArray(e))n=e.filter(l=>l);else{n=[];for(const l in e)e[l]&&n.push(`${l}:${e[l]}`)}return n.join(t)}function Fe(e,t,n,l){let r,c;const i="1em";let f,a,s,h="-.125em";const o="visible";return l&&(s="center",c="1.25em"),n&&(r=n),t&&(t=="lg"?(a="1.33333em",f=".75em",h="-.225em"):t=="xs"?a=".75em":t=="sm"?a=".875em":a=t.replace("x","em")),B([B({float:r,width:c,height:i,"line-height":f,"font-size":a,"text-align":s,"vertical-align":h,"transform-origin":"center",overflow:o}),e])}function Re(e,t,n,l,r,c=1,i="",f=""){let a=1,s=1;return r&&(r=="horizontal"?a=-1:r=="vertical"?s=-1:a=s=-1),B([`translate(${V(t)*c}${i},${V(n)*c}${i})`,`scale(${a*V(e)},${s*V(e)})`,l&&`rotate(${l}${f})`]," ")}function de(e){let t,n,l,r,c,i,f;function a(o,u){return typeof o[7][4]=="string"?Ye:Xe}let s=a(e),h=s(e);return{c(){t=v("svg"),n=v("g"),l=v("g"),h.c(),this.h()},l(o){t=k(o,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var u=w(t);n=k(u,"g",{transform:!0,"transform-origin":!0});var m=w(n);l=k(m,"g",{transform:!0});var y=w(l);h.l(y),y.forEach(g),m.forEach(g),u.forEach(g),this.h()},h(){d(l,"transform",e[10]),d(n,"transform",r=`translate(${e[7][0]/2} ${e[7][1]/2})`),d(n,"transform-origin",c=`${e[7][0]/4} 0`),d(t,"id",e[0]),d(t,"class",i=""+(ce(e[8])+" svelte-1lmliyu")),d(t,"style",e[9]),d(t,"viewBox",f=`0 0 ${e[7][0]} ${e[7][1]}`),d(t,"aria-hidden","true"),d(t,"role","img"),d(t,"xmlns","http://www.w3.org/2000/svg")},m(o,u){S(o,t,u),F(t,n),F(n,l),h.m(l,null)},p(o,u){s===(s=a(o))&&h?h.p(o,u):(h.d(1),h=s(o),h&&(h.c(),h.m(l,null))),u&1024&&d(l,"transform",o[10]),u&128&&r!==(r=`translate(${o[7][0]/2} ${o[7][1]/2})`)&&d(n,"transform",r),u&128&&c!==(c=`${o[7][0]/4} 0`)&&d(n,"transform-origin",c),u&1&&d(t,"id",o[0]),u&256&&i!==(i=""+(ce(o[8])+" svelte-1lmliyu"))&&d(t,"class",i),u&512&&d(t,"style",o[9]),u&128&&f!==(f=`0 0 ${o[7][0]} ${o[7][1]}`)&&d(t,"viewBox",f)},d(o){o&&g(t),h.d()}}}function Xe(e){let t,n,l,r,c,i,f,a,s,h;return{c(){t=v("path"),i=v("path"),this.h()},l(o){t=k(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(t).forEach(g),i=k(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(i).forEach(g),this.h()},h(){d(t,"d",n=e[7][4][0]),d(t,"fill",l=e[3]||e[1]||"currentColor"),d(t,"fill-opacity",r=e[6]!=!1?e[4]:e[5]),d(t,"transform",c=`translate(${e[7][0]/-2} ${e[7][1]/-2})`),d(i,"d",f=e[7][4][1]),d(i,"fill",a=e[2]||e[1]||"currentColor"),d(i,"fill-opacity",s=e[6]!=!1?e[5]:e[4]),d(i,"transform",h=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(o,u){S(o,t,u),S(o,i,u)},p(o,u){u&128&&n!==(n=o[7][4][0])&&d(t,"d",n),u&10&&l!==(l=o[3]||o[1]||"currentColor")&&d(t,"fill",l),u&112&&r!==(r=o[6]!=!1?o[4]:o[5])&&d(t,"fill-opacity",r),u&128&&c!==(c=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&d(t,"transform",c),u&128&&f!==(f=o[7][4][1])&&d(i,"d",f),u&6&&a!==(a=o[2]||o[1]||"currentColor")&&d(i,"fill",a),u&112&&s!==(s=o[6]!=!1?o[5]:o[4])&&d(i,"fill-opacity",s),u&128&&h!==(h=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&d(i,"transform",h)},d(o){o&&g(t),o&&g(i)}}}function Ye(e){let t,n,l,r;return{c(){t=v("path"),this.h()},l(c){t=k(c,"path",{d:!0,fill:!0,transform:!0}),w(t).forEach(g),this.h()},h(){d(t,"d",n=e[7][4]),d(t,"fill",l=e[1]||e[2]||"currentColor"),d(t,"transform",r=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(c,i){S(c,t,i)},p(c,i){i&128&&n!==(n=c[7][4])&&d(t,"d",n),i&6&&l!==(l=c[1]||c[2]||"currentColor")&&d(t,"fill",l),i&128&&r!==(r=`translate(${c[7][0]/-2} ${c[7][1]/-2})`)&&d(t,"transform",r)},d(c){c&&g(t)}}}function Pe(e){let t,n=e[7][4]&&de(e);return{c(){n&&n.c(),t=se()},l(l){n&&n.l(l),t=se()},m(l,r){n&&n.m(l,r),S(l,t,r)},p(l,[r]){l[7][4]?n?n.p(l,r):(n=de(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:p,o:p,d(l){n&&n.d(l),l&&g(t)}}}function Ie(e,t,n){let{class:l=""}=t,{id:r=""}=t,{style:c=""}=t,{icon:i}=t,{size:f=""}=t,{color:a=""}=t,{fw:s=!1}=t,{pull:h=""}=t,{scale:o=1}=t,{translateX:u=0}=t,{translateY:m=0}=t,{rotate:y=""}=t,{flip:D=!1}=t,{spin:H=!1}=t,{pulse:T=!1}=t,{primaryColor:K=""}=t,{secondaryColor:Q=""}=t,{primaryOpacity:U=1}=t,{secondaryOpacity:Z=.4}=t,{swapOpacity:x=!1}=t,W,$,ee,te;return e.$$set=_=>{"class"in _&&n(11,l=_.class),"id"in _&&n(0,r=_.id),"style"in _&&n(12,c=_.style),"icon"in _&&n(13,i=_.icon),"size"in _&&n(14,f=_.size),"color"in _&&n(1,a=_.color),"fw"in _&&n(15,s=_.fw),"pull"in _&&n(16,h=_.pull),"scale"in _&&n(17,o=_.scale),"translateX"in _&&n(18,u=_.translateX),"translateY"in _&&n(19,m=_.translateY),"rotate"in _&&n(20,y=_.rotate),"flip"in _&&n(21,D=_.flip),"spin"in _&&n(22,H=_.spin),"pulse"in _&&n(23,T=_.pulse),"primaryColor"in _&&n(2,K=_.primaryColor),"secondaryColor"in _&&n(3,Q=_.secondaryColor),"primaryOpacity"in _&&n(4,U=_.primaryOpacity),"secondaryOpacity"in _&&n(5,Z=_.secondaryOpacity),"swapOpacity"in _&&n(6,x=_.swapOpacity)},e.$$.update=()=>{e.$$.dirty&8192&&n(7,W=i&&i.icon||[0,0,"",[],""]),e.$$.dirty&12584960&&n(8,$=B([l,"fa",H&&"spin",T&&"pulse"]," ")),e.$$.dirty&118784&&n(9,ee=Fe(c,f,h,s)),e.$$.dirty&4063232&&n(10,te=Re(o,u,m,y,D,512))},[r,a,K,Q,U,Z,x,W,$,ee,te,l,c,i,f,s,h,o,u,m,y,D,H,T]}class Nt extends De{constructor(t){super();Be(this,t,Ie,Pe,ie,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Mt={prefix:"fas",iconName:"comment",icon:[512,512,[],"f075","M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"]},Lt={prefix:"fas",iconName:"desktop",icon:[576,512,[],"f108","M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"]},At={prefix:"fas",iconName:"microphone",icon:[352,512,[],"f130","M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"]},Ot={prefix:"fas",iconName:"microphone-slash",icon:[640,512,[],"f131","M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"]},qt={prefix:"fas",iconName:"share-alt",icon:[448,512,[],"f1e0","M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"]},jt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},Vt={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"]},Bt={prefix:"fas",iconName:"video",icon:[576,512,[],"f03d","M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"]},Dt={prefix:"fas",iconName:"video-slash",icon:[640,512,[],"f4e2","M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"]};export{Bt as $,ft as A,me as B,kt as C,Je as D,Qe as E,Ue as F,Ke as G,F as H,p as I,Ge as J,dt as K,mt as L,ot as M,ue as N,vt as O,at as P,Ze as Q,$e as R,De as S,re as T,z as U,Nt as V,Dt as W,Ot as X,St as Y,tt as Z,xe as _,w as a,At as a0,Lt as a1,Mt as a2,Vt as a3,_t as a4,qt as a5,jt as a6,it as a7,et as a8,yt as a9,gt as aa,P as ab,ct as ac,st as ad,Et as ae,zt as af,d as b,nt as c,g as d,Ce as e,S as f,Ee as g,rt as h,Be as i,wt as j,We as k,se as l,Ct as m,lt as n,qe as o,pt as p,bt as q,Le as r,ie as s,R as t,Oe as u,je as v,Ae as w,_e as x,ht as y,ut as z};
