function h(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function v(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(v)}function O(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return h;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(G(e,n))}function ft(t,e,n,r){if(t){const o=R(t,e,n,r);return t[0](o)}}function R(t,e,n,r){return t[1]&&r?F(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],c=Math.max(e.dirty.length,o.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|o[u];return l}return e.dirty|o}return e.dirty}function _t(t,e,n,r,o,l){if(o){const c=R(e,n,r,l);t.p(c,o)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function mt(t){return t&&O(t.destroy)?t.destroy:h}let x=!1;function J(){x=!0}function K(){x=!1}function Q(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,f=(o>0&&e[n[o]].claim_order<=s?o+1:Q(1,o,d=>e[n[d]].claim_order,s))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,o=Math.max(a,o)}const l=[],c=[];let u=e.length-1;for(let i=n[o]+1;i!=0;i=r[i-1]){for(l.push(e[i-1]);u>=i;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<c.length;i++){for(;s<l.length&&c[i].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(c[i],f)}}function V(t,e){if(x){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){x&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function gt(){return N(" ")}function bt(){return N("")}function xt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,r,o=!1){Z(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const i=n(u);return i===void 0?t.splice(c,1):t[c]=i,o||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const i=n(u);return i===void 0?t.splice(c,1):t[c]=i,o?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function W(t,e,n,r){return T(t,o=>o.nodeName===e,o=>{const l=[];for(let c=0;c<o.attributes.length;c++){const u=o.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>o.removeAttribute(c))},()=>r(e))}function $t(t,e,n){return W(t,e,n,X)}function tt(t,e){return T(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function Et(t){return tt(t," ")}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function jt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Nt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function $(t){w=t}function E(){if(!w)throw new Error("Function called outside component initialization");return w}function qt(t){E().$$.on_mount.push(t)}function kt(t){E().$$.after_update.push(t)}function At(t,e){E().$$.context.set(t,e)}function Ct(t){return E().$$.context.get(t)}const b=[],B=[],S=[],D=[],et=Promise.resolve();let q=!1;function nt(){q||(q=!0,et.then(P))}function k(t){S.push(t)}let A=!1;const C=new Set;function P(){if(!A){A=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),rt(e.$$)}for($(null),b.length=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];C.has(e)||(C.add(e),e())}S.length=0}while(b.length);for(;D.length;)D.pop()();q=!1,A=!1,C.clear()}}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;let m;function vt(){m={r:0,c:[],p:m}}function Mt(){m.r||g(m.c),m=m.p}function it(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Ot(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Rt(t,e){const n={},r={},o={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const i in c)i in u||(r[i]=1);for(const i in u)o[i]||(n[i]=u[i],o[i]=1);t[l]=u}else for(const i in c)o[i]=1}for(const c in r)c in n||(n[c]=void 0);return n}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function ot(t,e,n,r){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=t.$$;o&&o.m(e,n),r||k(()=>{const i=l.map(v).filter(O);c?c.push(...i):g(i),t.$$.on_mount=[]}),u.forEach(k)}function ct(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(b.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,r,o,l,c,u=[-1]){const i=w;$(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:o,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,d,..._)=>{const y=_.length?_[0]:d;return s.ctx&&o(s.ctx[a],s.ctx[a]=y)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](y),f&&st(t,a)),d}):[],s.update(),f=!0,g(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){J();const a=Y(e.target);s.fragment&&s.fragment.l(a),a.forEach(H)}else s.fragment&&s.fragment.c();e.intro&&it(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),K(),P()}$(i)}class zt{$destroy(){ct(this,1),this.$destroy=h}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const p=[];function Ft(t,e=h){let n;const r=new Set;function o(u){if(L(t,u)&&(t=u,n)){const i=!p.length;for(const s of r)s[1](),p.push(s,t);if(i){for(let s=0;s<p.length;s+=2)p[s][0](p[s+1]);p.length=0}}}function l(u){o(u(t))}function c(u,i=h){const s=[u,i];return r.add(s),r.size===1&&(n=e(o)||h),u(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:c}}function Lt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function It(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function z(t,e,n,r={}){if(t<0||e<0)throw new Error("Container must have a non-negative area");if(n<1||!Number.isInteger(n))throw new Error("Number of shapes to place must be a positive integer");const o=r.aspectRatio||1;if(isNaN(o))throw new Error("Aspect ratio must be a number");let l={area:0,cols:0,rows:0,width:0,height:0};const c=n,u=-1;for(let i=c;i>0;i+=u){const s=Math.ceil(n/i),f=t/(i*o),a=e/s;let d,_;f<=a?(d=t/i,_=d/o):(_=e/s,d=_*o);const y=d*_;y>l.area&&(l={area:y,width:d,height:_,rows:s,cols:i})}return l}function ut(t,e,n){return z(t,e,n)}function lt(t,e,n,r,o){return z(t,e,n,{aspectRatio:r/o})}var Gt={largestRect:lt,largestSquare:ut};export{qt as A,F as B,Ft as C,ft as D,_t as E,ht as F,dt as G,V as H,h as I,Nt as J,jt as K,mt as L,O as M,xt as N,yt as O,Gt as P,B as Q,Ct as R,zt as S,at as T,Lt as U,It as V,Y as a,wt as b,$t as c,H as d,X as e,pt as f,tt as g,St as h,Pt as i,Bt as j,gt as k,bt as l,Dt as m,Et as n,ot as o,Rt as p,Tt as q,vt as r,L as s,N as t,Ot as u,ct as v,Mt as w,it as x,At as y,kt as z};
