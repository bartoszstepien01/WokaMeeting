var it=Object.defineProperty,nt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var H=(i,t,e)=>t in i?it(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,k=(i,t)=>{for(var e in t||(t={}))W.call(t,e)&&H(i,e,t[e]);if(C)for(var e of C(t))Y.call(t,e)&&H(i,e,t[e]);return i},X=(i,t)=>nt(i,at(t));var F=(i,t)=>{var e={};for(var s in i)W.call(i,s)&&t.indexOf(s)<0&&(e[s]=i[s]);if(i!=null&&C)for(var s of C(i))t.indexOf(s)<0&&Y.call(i,s)&&(e[s]=i[s]);return e};import{S as ot,i as lt,s as ut,e as ct,c as ft,a as ht,d as v,b as P,f as R,t as dt,g as _t,h as pt,j as q,k as mt,l as w,m as D,n as gt,o as L,p as B,q as K,r as T,u as b,v as U,w as N,x as m,y as wt,z as bt,A as yt,B as z,C as J}from"./chunks/vendor-07f555be.js";import{_ as V,s as vt}from"./chunks/paths-16c013c9.js";function Q(i){let t,e,s;const r=[i[2]||{}];var a=i[0][1];function n(o){let l={$$slots:{default:[Et]},$$scope:{ctx:o}};for(let u=0;u<r.length;u+=1)l=z(l,r[u]);return{props:l}}return a&&(t=new a(n(i))),{c(){t&&q(t.$$.fragment),e=w()},l(o){t&&D(t.$$.fragment,o),e=w()},m(o,l){t&&L(t,o,l),R(o,e,l),s=!0},p(o,l){const u=l&4?B(r,[K(o[2]||{})]):{};if(l&521&&(u.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){T();const c=t;b(c.$$.fragment,1,0,()=>{U(c,1)}),N()}a?(t=new a(n(o)),q(t.$$.fragment),m(t.$$.fragment,1),L(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&b(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function Z(i){let t,e,s;const r=[i[3]||{}];var a=i[0][2];function n(o){let l={};for(let u=0;u<r.length;u+=1)l=z(l,r[u]);return{props:l}}return a&&(t=new a(n())),{c(){t&&q(t.$$.fragment),e=w()},l(o){t&&D(t.$$.fragment,o),e=w()},m(o,l){t&&L(t,o,l),R(o,e,l),s=!0},p(o,l){const u=l&8?B(r,[K(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){T();const c=t;b(c.$$.fragment,1,0,()=>{U(c,1)}),N()}a?(t=new a(n()),q(t.$$.fragment),m(t.$$.fragment,1),L(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&b(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function Et(i){let t,e,s=i[0][2]&&Z(i);return{c(){s&&s.c(),t=w()},l(r){s&&s.l(r),t=w()},m(r,a){s&&s.m(r,a),R(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&m(s,1)):(s=Z(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),b(s,1,1,()=>{s=null}),N())},i(r){e||(m(s),e=!0)},o(r){b(s),e=!1},d(r){s&&s.d(r),r&&v(t)}}}function kt(i){let t,e,s=i[0][1]&&Q(i);return{c(){s&&s.c(),t=w()},l(r){s&&s.l(r),t=w()},m(r,a){s&&s.m(r,a),R(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&m(s,1)):(s=Q(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),b(s,1,1,()=>{s=null}),N())},i(r){e||(m(s),e=!0)},o(r){b(s),e=!1},d(r){s&&s.d(r),r&&v(t)}}}function x(i){let t,e=i[5]&&tt(i);return{c(){t=ct("div"),e&&e.c(),this.h()},l(s){t=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=ht(t);e&&e.l(r),r.forEach(v),this.h()},h(){P(t,"id","svelte-announcer"),P(t,"aria-live","assertive"),P(t,"aria-atomic","true"),P(t,"class","svelte-9z6sc")},m(s,r){R(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&v(t),e&&e.d()}}}function tt(i){let t;return{c(){t=dt(i[6])},l(e){t=_t(e,i[6])},m(e,s){R(e,t,s)},p(e,s){s&64&&pt(t,e[6])},d(e){e&&v(t)}}}function Rt(i){let t,e,s,r;const a=[i[1]||{}];var n=i[0][0];function o(u){let c={$$slots:{default:[kt]},$$scope:{ctx:u}};for(let f=0;f<a.length;f+=1)c=z(c,a[f]);return{props:c}}n&&(t=new n(o(i)));let l=i[4]&&x(i);return{c(){t&&q(t.$$.fragment),e=mt(),l&&l.c(),s=w()},l(u){t&&D(t.$$.fragment,u),e=gt(u),l&&l.l(u),s=w()},m(u,c){t&&L(t,u,c),R(u,e,c),l&&l.m(u,c),R(u,s,c),r=!0},p(u,[c]){const f=c&2?B(a,[K(u[1]||{})]):{};if(c&525&&(f.$$scope={dirty:c,ctx:u}),n!==(n=u[0][0])){if(t){T();const h=t;b(h.$$.fragment,1,0,()=>{U(h,1)}),N()}n?(t=new n(o(u)),q(t.$$.fragment),m(t.$$.fragment,1),L(t,e.parentNode,e)):t=null}else n&&t.$set(f);u[4]?l?l.p(u,c):(l=x(u),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(u){r||(t&&m(t.$$.fragment,u),r=!0)},o(u){t&&b(t.$$.fragment,u),r=!1},d(u){t&&U(t,u),u&&v(e),l&&l.d(u),u&&v(s)}}}function $t(i,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;wt("__svelte__",s),bt(s.page.notify);let u=!1,c=!1,f=null;return yt(()=>{const h=s.page.subscribe(()=>{u&&(e(5,c=!0),e(6,f=document.title||"untitled page"))});return e(4,u=!0),h}),i.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,r=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,n=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},i.$$.update=()=>{i.$$.dirty&384&&s.page.set(r)},[a,n,o,l,u,c,f,s,r]}class St extends ot{constructor(t){super();lt(this,t,$t,Rt,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const $=[()=>V(()=>import("./pages/__layout.svelte-997fe3bf.js"),["pages/__layout.svelte-997fe3bf.js","assets/pages/__layout.svelte-5a23fd6f.css","chunks/vendor-07f555be.js"]),()=>V(()=>import("./error.svelte-196278ae.js"),["error.svelte-196278ae.js","chunks/vendor-07f555be.js"]),()=>V(()=>import("./pages/index.svelte-6d151eb1.js"),["pages/index.svelte-6d151eb1.js","chunks/paths-16c013c9.js","chunks/vendor-07f555be.js","chunks/Gallery-d1cd3f86.js","assets/Gallery-08671271.css"]),()=>V(()=>import("./pages/join.svelte-3315652e.js"),["pages/join.svelte-3315652e.js","chunks/paths-16c013c9.js","chunks/vendor-07f555be.js","chunks/Gallery-d1cd3f86.js","assets/Gallery-08671271.css"])],qt=[[/^\/$/,[$[0],$[2]],[$[1]]],[/^\/join\/?$/,[$[0],$[3]],[$[1]]]],Lt=[$[0](),$[1]()];function Ut(i){let t=i.baseURI;if(!t){const e=i.getElementsByTagName("base");t=e.length?e[0].href:i.URL}return t}function M(){return{x:pageXOffset,y:pageYOffset}}function et(i){for(;i&&i.nodeName.toUpperCase()!=="A";)i=i.parentNode;return i}function st(i){return i instanceof SVGAElement?new URL(i.href.baseVal,document.baseURI):new URL(i.href)}class At{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=X(k({},history.state||{}),{"sveltekit:scroll":M()});history.replaceState(a,document.title,window.location.href)},50)});const e=a=>{const n=et(a.target);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(st(n))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=et(a.target);if(!n||!n.href)return;const o=st(n),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const u=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||u&&u.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const c=n.hasAttribute("sveltekit:noscroll"),f=l.indexOf("#"),h=location.href.indexOf("#"),E=f>=0?l.substring(0,f):l,y=h>=0?location.href.substring(0,h):location.href;history.pushState({},"",o.href),E===y&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,c?M():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},n){const o=new URL(t,Ut(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?M():null,r,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}this.renderer.notify({path:n.path,query:n.query}),await this.renderer.update(n,r,!1,{hash:a,scroll:e,keepfocus:s})}}function rt(i){return i instanceof Error||i&&i.name&&i.message?i:new Error(JSON.stringify(i))}function jt(i){let t=5381,e=i.length;if(typeof i=="string")for(;e;)t=t*33^i.charCodeAt(--e);else for(;e;)t=t*33^i[--e];return(t>>>0).toString(36)}function Tt(i){const t=i.status&&i.status>=400&&i.status<=599&&!i.redirect;if(i.error||t){const e=i.status;if(!i.error&&t)return{status:e||500,error:new Error};const s=typeof i.error=="string"?new Error(i.error):i.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(i.redirect){if(!i.status||Math.floor(i.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof i.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(i.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return i}function Nt(i){const t=J(i);let e=!0;function s(){e=!0,t.update(n=>n)}function r(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:r,subscribe:a}}function Ot(i,t){const e=typeof i=="string"?i:i.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${jt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:n}=a,o=F(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(i,t)}class It{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Nt({}),navigating:J(null),session:J(r)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let n={},o,l;try{for(let u=0;u<s.length;u+=1){const c=u===s.length-1,f=await this._load_node({module:await s[u],page:r,stuff:n,status:c?t:void 0,error:c?e:void 0});if(a.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:r.path,query:r.query}}else f.loaded.stuff&&(n=k(k({},n),f.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(u){if(e)throw u;o=await this._load_error({status:500,error:rt(u),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s,r){const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(n.reload?location.reload():this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),r){const{hash:l,scroll:u,keepfocus:c}=r;c||document.body.focus();const f=l&&document.getElementById(l.slice(1));u?scrollTo(u.x,u.y):f?f.scrollIntoView():scrollTo(0,0)}if(await 0,dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:k({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];if(r.length===1)return{reload:!0,props:{},state:this.current};let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o.length!==1&&o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:r,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const u=s[l].loaded;a.props[`props_${l}`]=u?await u.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let u=!1;const c=()=>{this.cache.get(l)===a&&this.cache.delete(l),h(),clearTimeout(f)},f=setTimeout(c,o*1e3),h=this.stores.session.subscribe(()=>{u&&c()});u=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const u in r.params)Object.defineProperty(o,u,{get(){return n.uses.params.add(u),r.params[u]},enumerable:!0});const l=this.$session;if(s.load){const{started:u}=this,c={page:{host:r.host,params:o,get path(){return n.uses.path=!0,r.path},get query(){return n.uses.query=!0,r.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,k({},a)},fetch(h,E){const y=typeof h=="string"?h:h.url,{href:A}=new URL(y,new URL(r.path,document.baseURI));return n.uses.dependencies.push(A),u?fetch(h,E):Ot(h,E)}};e&&(c.status=t,c.error=e);const f=await s.load.call(null,c);if(!f)return;n.loaded=Tt(f),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const n=`${s}?${r}`;if(!a){const d=this.cache.get(n);if(d)return d}const[o,l,u,c]=t,f=c?c(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(f).filter(d=>this.current.page.params[d]!==f[d]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},E={host:this.host,path:e,query:r,params:f};let y=[],A={},G=!1,O=200,j;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let _;try{if(!l[d])continue;const g=await l[d](),p=this.current.branch[d];if(!p||g!==p.module||h.path&&p.uses.path||h.params.some(S=>p.uses.params.has(S))||h.query&&p.uses.query||h.session&&p.uses.session||p.uses.dependencies.some(S=>this.invalid.has(S))||G&&p.uses.stuff){_=await this._load_node({module:g,page:E,stuff:A});const S=d===l.length-1;if(_&&_.loaded){if(_.loaded.error&&(O=_.loaded.status,j=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.stuff&&(G=!0)}else if(S&&g.load)return}else _=p}catch(g){O=500,j=rt(g)}if(j){for(;d--;)if(u[d]){let g,p,I=d;for(;!(p=y[I]);)I-=1;try{if(g=await this._load_node({status:O,error:j,module:await u[d](),page:E,stuff:p.stuff}),g&&g.loaded&&g.loaded.error)continue;y=y.slice(0,I+1).concat(g);break t}catch{continue}}return await this._load_error({status:O,error:j,path:e,query:r})}else _&&_.loaded&&_.loaded.stuff&&(A=k(k({},A),_.loaded.stuff)),y.push(_)}return await this._get_navigation_result_from_branch({page:E,branch:y})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Dt({paths:i,target:t,session:e,host:s,route:r,spa:a,trailing_slash:n,hydrate:o}){const l=new It({Root:St,fallback:Lt,target:t,session:e,host:s}),u=r?new At({base:i.base,routes:qt,trailing_slash:n,renderer:l}):null;vt(i),o&&await l.start(o),u&&(a&&u.goto(location.href,{replaceState:!0},[]),u.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Dt as start};
