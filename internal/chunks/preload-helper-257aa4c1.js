const a="modulepreload",i={},u="/WokaMeeting/internal/",f=function(s,r){return!r||r.length===0?s():Promise.all(r.map(e=>{if(e=`${u}${e}`,e in i)return;i[e]=!0;const n=e.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":a,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((l,c)=>{t.addEventListener("load",l),t.addEventListener("error",c)})})).then(()=>s())};export{f as _};
