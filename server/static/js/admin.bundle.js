/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var sn=Object.create;var Ue=Object.defineProperty;var on=Object.getOwnPropertyDescriptor;var rn=Object.getOwnPropertyNames;var dn=Object.getPrototypeOf,ln=Object.prototype.hasOwnProperty;var he=(y,T)=>()=>{try{return T||y((T={exports:{}}).exports,T),T.exports}catch(h){throw T=0,h}};var cn=(y,T,h,f)=>{if(T&&typeof T=="object"||typeof T=="function")for(let C of rn(T))!ln.call(y,C)&&C!==h&&Ue(y,C,{get:()=>T[C],enumerable:!(f=on(T,C))||f.enumerable});return y};var ge=(y,T,h)=>(h=y!=null?sn(dn(y)):{},cn(T||!y||!y.__esModule?Ue(h,"default",{value:y,enumerable:!0}):h,y));var Ke=he(()=>{(function(){"use strict";var y=4,T=2500,h=3e3,f=Object.create(null);function C(){return Date.now()}function j(L,b){return(b?"ok:":"err:")+L}function F(L,b){return"var("+L+", "+b+")"}function $(L){return L?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(L){for(var b=Array.prototype.slice.call(L.children);b.length>y;){var x=b.shift();x&&x.parentNode&&x.parentNode.removeChild(x)}}function N(L,b){L.remaining=b,L.startedAt=C(),L.timer=setTimeout(function(){w(L)},b)}function D(L){L.timer&&(clearTimeout(L.timer),L.timer=null,L.remaining=Math.max(600,L.remaining-(C()-L.startedAt)))}function B(L){L.timer||!L.el.parentNode||N(L,L.remaining)}function w(L){clearTimeout(L.timer),L.timer=null,L.key&&f[L.key]===L&&delete f[L.key];var b=L.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function P(L,b){var x=document.getElementById("toast-container");if(x){b=b!==!1;var q=j(String(L),b),A=f[q];if(A&&A.el.parentNode&&C()-A.startedAt<T){A.count+=1,A.countEl&&(A.countEl.textContent="\xD7"+A.count,A.countEl.hidden=!1),D(A),B(A);return}var S=b?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),p=F("--color-surface","#ffffff"),l=F("--color-text-primary","#1a1a1a"),o=F("--color-border-soft","rgba(0,0,0,.12)"),e=document.createElement("div");e.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+p,"color:"+l,"border:1px solid "+o,"border-left:3px solid "+S,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var r=document.createElement("span");r.style.cssText="display:inline-flex;color:"+S+";flex:0 0 auto",r.innerHTML=$(b);var n=document.createElement("span");n.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",n.textContent=L;var d=document.createElement("span");d.hidden=!0,d.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",e.appendChild(r),e.appendChild(n),e.appendChild(d),x.appendChild(e),m(x),requestAnimationFrame(function(){e.style.opacity="1",e.style.transform="translateX(0)"});var s={key:q,el:e,countEl:d,count:1,timer:null,remaining:h,startedAt:C()};f[q]=s,N(s,h),e.addEventListener("mouseenter",function(){D(s)}),e.addEventListener("mouseleave",function(){B(s)}),e.addEventListener("focusin",function(){D(s)}),e.addEventListener("focusout",function(){B(s)})}}window.showToast=P})()});var We=he(()=>{(function(){"use strict";var y="admin-details-open-state";function T(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function h(b){try{localStorage.setItem(y,JSON.stringify(b))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function C(b){return b==null?"":String(b).replace(/[&<>"']/g,function(x){return f[x]})}function j(){var b=document.querySelector("script[nonce]");return b&&b.nonce||""}function F(b,x){var q=j();return"<style"+(b?' id="'+C(b)+'"':"")+(q?' nonce="'+C(q)+'"':"")+">"+(x||"")+"</style>"}var $='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],N=null;function D(b){if(!b)return!1;for(var x=b,q=null;x&&x!==document.documentElement;q=x,x=x.parentElement)if(x.style&&x.style.display==="none"||x.tagName==="DETAILS"&&!x.open&&!(q&&q.tagName==="SUMMARY"))return!1;return!!(b.offsetParent||b.getClientRects().length)}function B(){var b=document.hidden;m.forEach(function(x){var q=typeof x.el=="function"?x.el():x.el,A=!b&&D(q);if(A&&!x.timer){if(x.immediate!==!1)try{x.tick()}catch{}x.timer=setInterval(x.tick,x.intervalMs)}else!A&&x.timer&&(clearInterval(x.timer),x.timer=0)})}function w(b){var x={el:b.el,intervalMs:b.intervalMs,tick:b.tick,immediate:b.immediate,timer:0};return m.push(x),N||(N=new MutationObserver(function(){B()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",B),document.addEventListener("visibilitychange",B),document.addEventListener("admin-panel-rendered",B)),B(),function(){x.timer&&clearInterval(x.timer);var A=m.indexOf(x);A!==-1&&m.splice(A,1)}}function P(b){let x=document.createElement("textarea");x.value=b,x.setAttribute("readonly",""),x.style.position="fixed",x.style.opacity="0",document.body.appendChild(x),x.select();let q=!1;try{q=!!document.execCommand("copy")}catch{q=!1}return document.body.removeChild(x),q}function L(b,x){let q=p=>window.ServerI18n?window.ServerI18n.t(p):p,A=p=>(window.showToast&&window.showToast(p?x||q("sohCopied"):q("sohCopyFailed"),p),p);if(!b)return Promise.resolve(A(!1));let S=navigator.clipboard;return S&&typeof S.writeText=="function"?S.writeText(b).then(()=>A(!0),()=>A(P(b))):Promise.resolve(A(P(b)))}window.AdminUtils={copyText:L,DETAILS_STATE_KEY:y,loadDetailsState:T,saveDetailsState:h,escapeHtml:C,cspNonce:j,styleTag:F,closeIcon:$,pollWhileVisible:w}})()});var Ge=he(()=>{(function(){"use strict";function y(T,h,f,C){let j=T.querySelector("[data-route-breadcrumb]");if(!j)return;let F=Array.from(T.querySelectorAll(".admin-dash-nav-row[data-route]")),$=F.find(x=>x.dataset.route===h)||F.find(x=>x.dataset.route===f);if(!$){j.replaceChildren(),j.hidden=!0;return}let m="",N=$.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){m=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let B=($.querySelector("[data-i18n]")||$.querySelector("span:nth-child(2)")||$).textContent.trim(),w=C?T.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=w?(w.querySelector(".admin-tabs-btn-label")||w).textContent.trim():"",L=[m===B?"":m,B,P].filter(Boolean),b=document.createDocumentFragment();L.forEach((x,q)=>{if(q){let p=document.createElement("span");p.className="admin-dash-breadcrumb-sep",p.setAttribute("aria-hidden","true"),p.textContent="\u203A",b.appendChild(p)}let A=document.createElement("span"),S=q===L.length-1;A.className="admin-dash-breadcrumb-item"+(S?" is-current":""),S&&A.setAttribute("aria-current","page"),A.textContent=x,b.appendChild(A)}),j.replaceChildren(b),j.hidden=L.length===0}window.AdminBreadcrumb={render:y}})()});var ze=he(()=>{(function(y){"use strict";let T={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function h(w){return Array.isArray(w.sections)?w.sections:w.section?[w.section]:[]}function f(w){return!!T[w]}function C(w){return T[w]||null}let j={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(w,P){let L=T[w];if(!L||!P)return null;let b=L.tabs.find(x=>x.folds&&x.folds[P]);return b?{tab:b.slug,section:b.folds[P]}:null}function $(w,P){let L=T[w];if(!L)return null;let b=S=>L.tabs.some(p=>p.slug===S),x=F(w,P);if(x)return x.tab;let q=j[w]?.[P];if(q&&b(q))return q;if(P&&b(P))return P;let A=y.AdminRouter?.tabMemory?.get?.(w);return A&&b(A)?A:L.defaultTab}function m(w,P,L){let b=T[w];if(!b)return null;let x=document.createElement("div");return x.className="admin-tabs-strip",x.dataset.nav=w,x.setAttribute("role","tablist"),x.setAttribute("aria-label",w+" tabs"),b.tabs.forEach(q=>{let A=document.createElement("button");A.type="button",A.className="admin-tabs-btn"+(q.slug===P?" is-active":""),A.dataset.nav=w,A.dataset.tab=q.slug,A.setAttribute("role","tab"),A.setAttribute("aria-selected",q.slug===P?"true":"false");let S=document.createElement("span");S.className="admin-tabs-btn-label",S.textContent=q.labelKey?ServerI18n.t(q.labelKey):q.label,A.appendChild(S);let p=document.createElement("span");p.className="admin-tabs-btn-count",p.dataset.tabCount=q.slug,p.textContent=N[w]&&N[w][q.slug]?N[w][q.slug]:"",A.appendChild(p),A.addEventListener("click",()=>{typeof L?.onSelect=="function"&&L.onSelect(q.slug)}),x.appendChild(A)}),x}let N={};function D(w,P,L){if(!T[w])return;N[w]=N[w]||{},N[w][P]=L==null?"":String(L);let b=document.querySelector('.admin-tabs-strip[data-nav="'+w+'"] [data-tab-count="'+P+'"]');b&&(b.textContent=N[w][P])}function B(w,P,L){let b=T[w];!b||!L||b.tabs.forEach(x=>{let q=x.slug===P,A=new Map;h(x).forEach(S=>{let p=L.querySelector("#"+S);if(!p)return;p.style.display=q?"":"none";let l=A.get(p.parentElement);q&&x.folds&&l&&l.nextElementSibling!==p&&l.after(p),A.set(p.parentElement,p)})})}y.AdminTabs={hasTabsFor:f,getConfig:C,foldFor:F,resolveActiveTab:$,renderTabStrip:m,applyTabSectionVisibility:B,setTabCount:D}})(window)});var Ve=he(()=>{(function(y,T){"use strict";let h="data-quick-action-host",f="admin-quick-action-bar";function C(N){if(N?.host instanceof HTMLElement)return N.host;let D=T.querySelector(".admin-dash-main");if(!D)return T.body;let B=D.querySelector(`[${h}]`);if(!B){B=T.createElement("div"),B.setAttribute(h,"");let w=D.querySelector(".admin-dash-topbar"),L=D.querySelector("[data-admin-tabs-host]")||w;L&&L.parentNode?L.insertAdjacentElement("afterend",B):D.prepend(B)}return B}function j(N,D){typeof y.showToast=="function"&&y.showToast(N,D!==!1)}function F({label:N,undoLabel:D,onUndo:B,windowMs:w}){let P=C(),L=P.querySelector("."+f);L&&L.remove();let b=T.createElement("div");b.className=f,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let x=T.createElement("span");x.className=f+"-text",x.textContent="\u2713 "+N,b.appendChild(x);let q=T.createElement("button");q.type="button",q.className=f+"-undo",q.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),b.appendChild(q);let A=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},S=setTimeout(A,w||5e3);return q.addEventListener("click",async()=>{clearTimeout(S),q.disabled=!0,q.textContent=ServerI18n.t("qaUndoing");try{await B(),j(ServerI18n.t("qaUndone"),!0)}catch(p){j(ServerI18n.t("qaUndoFailed",{msg:p?.message||String(p)}),!1)}finally{A()}}),P.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function $(N){if(!N||typeof N!="object")return;let D=N.label||ServerI18n.t("qaDone");N.toast!==!1&&j(D,!0),N.undo&&typeof N.undo.run=="function"&&F({label:D,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function m(){T.querySelectorAll("."+f).forEach(N=>N.remove())}y.AdminQuickAction={fire:$,dismissAll:m}})(window,document)});var Je=he(()=>{(function(){"use strict";let y="admin-hud-modal-root",T=null,h=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function C(){let m=document.getElementById(y);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function j(m){let N=document.getElementById(y);if(N&&N.remove(),T&&(T(m),T=null),document.removeEventListener("keydown",F),h&&typeof h.focus=="function")try{h.focus()}catch{}h=null}function F(m){if(m.key==="Escape"){m.preventDefault(),j(!1);return}if(m.key==="Tab"){let N=C();if(!N.length){m.preventDefault();return}let D=N[0],B=N[N.length-1],w=document.activeElement;m.shiftKey?(w===D||!N.includes(w))&&(m.preventDefault(),B.focus()):(w===B||!N.includes(w))&&(m.preventDefault(),D.focus())}}function $(m){return new Promise(N=>{T&&j(!1),T=N,h=document.activeElement;let{icon:D="\u26A0",title:B=ServerI18n.t("hudConfirmTitle"),subtitle:w="",severity:P="warn",body:L="",titleText:b,bodyText:x,confirmLabel:q=ServerI18n.t("hudConfirmLabel"),cancelLabel:A=ServerI18n.t("cancel"),width:S=480}=m||{},p=document.createElement("div");p.id=y,p.className=`admin-hud-modal admin-hud-modal--${P}`,p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-hud-modal-title");let l=w?`<div class="admin-hud-modal__subtitle">${w}</div>`:"",o=typeof L=="string"?L:"",e=typeof L!="string"&&L&&L.nodeType;if(p.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${S}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${B}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${A}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${q}</button>
          </div>
        </div>`,b!=null){let n=p.querySelector(".admin-hud-modal__title");n&&(n.textContent=String(b))}if(x!=null){let n=p.querySelector("[data-modal-body]");n&&(n.textContent=String(x))}if(e){let n=p.querySelector("[data-modal-body]");n.innerHTML="",n.appendChild(L)}p.addEventListener("click",function(n){let d=n.target.closest("[data-modal-action]");d&&(n.stopPropagation(),j(d.dataset.modalAction==="confirm"))}),document.body.appendChild(p),document.addEventListener("keydown",F);let r=P==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{p.querySelector(`.admin-hud-modal__btn--${r}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:$}})()});var Ye=he(()=>{(function(){"use strict";var y=8,T=30;function h(P,L){return window.ServerI18n?window.ServerI18n.t(P,L):P}function f(P,L){return P?P.length>L?P.slice(0,L)+"\u2026":P:""}function C(P){return h(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function j(P,L){return P==="keyword"?f(L,T):L.slice(0,y)}async function F(P,L,b){if(!L)return{ok:!1,error:"empty-value"};try{var x={type:P==="keyword"?"keyword":"fingerprint",value:L};b&&(x.reason=b);var q=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});return q.ok?{ok:!0}:{ok:!1,error:"HTTP "+q.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function $(P,L,b){if(!P)return{ok:!1,error:"empty-fingerprint"};var x=parseInt(L||0,10)||0;try{var q=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:x,reason:b||"",kind:"ban"})});return q.ok?{ok:!0}:{ok:!1,error:"HTTP "+q.status}}catch(A){return{ok:!1,error:A&&A.message||"network"}}}async function m(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var L=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return L.ok?{ok:!0}:{ok:!1,error:"HTTP "+L.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function N(P,L){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:h("lfBlockTitle"),subtitle:h("cfmSubBlockFuture"),severity:"danger",bodyText:h("blockConfirm").replace("{label}",C(P)).replace("{display}",j(P,L)),confirmLabel:h("lfBlockTitle")}):(window.showToast&&window.showToast(h("blockFailed"),!1),Promise.resolve(!1))}function D(P,L,b){window.showToast&&window.showToast(P?h(L,b||{}):h("blockFailed"),!!P)}async function B(P,L){if(!P||(L=L||{},!L.skipConfirm&&!await N("keyword",P)))return!1;var b=await F("keyword",P);return D(b.ok,"blockFallback",{label:C("keyword"),display:j("keyword",P)}),b.ok}async function w(P,L){if(!P||(L=L||{},!L.skipConfirm&&!await N("fingerprint",P)))return!1;var b=await F("fingerprint",P,L.reason);return D(b.ok,"blockFallback",{label:C("fingerprint"),display:j("fingerprint",P)}),b.ok}window.AdminModeration={callBlock:F,banFingerprint:$,recall:m,blockKeyword:B,blockFingerprint:w}})()});var Qe=he(()=>{(function(){"use strict";function T($){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",$.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),$}function h($,m){let N=document.createElement("div");if(N.className="admin-skel "+($||""),m)for(let D in m)N.style[D]=m[D];return N}function f({rows:$=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{N.appendChild(h("admin-skel-bar",{width:D+"px",height:"10px"}))}),m.appendChild(N);for(let D=0;D<$;D++){let B=document.createElement("div");B.className="admin-skel-list__row",B.appendChild(h("admin-skel-circle",{width:"24px",height:"24px"}));let w=document.createElement("div");w.className="admin-skel-list__col",w.appendChild(h("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),w.appendChild(h("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),B.appendChild(w),B.appendChild(h("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(B)}return T(m)}function C({cols:$=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${$}, 1fr)`;for(let N=0;N<$;N++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(h("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(h("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(h("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(h("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(D)}return T(m)}function j(){let $=document.createElement("div");$.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(h("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",m.appendChild(N),m.appendChild(h("admin-skel-bar",{width:"80px",height:"10px"})),$.appendChild(m);let D=document.createElement("div");D.className="admin-skel-chart__body";let B=document.createElement("div");B.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>B.appendChild(h("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(B);let w=document.createElement("div");return w.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(L=>w.appendChild(h("admin-skel-bar admin-skel-chart__bar",{height:L+"%"}))),D.appendChild(w),$.appendChild(D),T($)}function F($,m){let N={listRows:f,statsTiles:C,chart:j}[$];return N?N(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:C,chart:j,html:F}})()});var Xe=he(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},T={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function h(C){let{icon:j="\xB7",title:F="",desc:$="",accent:m=y.cyan,ctaAccent:N,actionLabel:D,action:B,extra:w}=C||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),N&&P.style.setProperty("--admin-empty-cta",N);let L=document.createElement("div");if(L.className="admin-empty__icon",L.textContent=j,P.appendChild(L),F){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=F,P.appendChild(b)}if($){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=$,P.appendChild(b)}if(D){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=D,typeof B=="function"&&b.addEventListener("click",B),P.appendChild(b)}if(w){let b=document.createElement("div");b.className="admin-empty__extra",typeof w=="string"?b.innerHTML=w:b.appendChild(w),P.appendChild(b)}return P}function f(C){let j=T[C];if(!j)return h({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},j,{title:j.titleKey?ServerI18n.t(j.titleKey):j.title,desc:j.descKey?ServerI18n.t(j.descKey):j.desc,actionLabel:j.actionLabelKey?ServerI18n.t(j.actionLabelKey):j.actionLabel});return h(F)}window.AdminEmpty={render:f,renderCustom:h,PRESETS:T}})()});var Ze=he(()=>{(function(){"use strict";var y=8;function T(F){return F?String(F).slice(0,y):""}function h(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var $=F.fingerprint||F.fp||F.hash||"",m=F.clientIp||F.client_ip||F.ip||"",N=F.nickname||F.nick||"";return{nickname:String(N||""),fp:String($||""),ip:String(m||"")}}function f(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var $=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",$).then(function(m){var N=Array.from(new Uint8Array(m));return N.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function C(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var $=document.getElementById("sec-fingerprints");if($&&!$.open&&($.open=!0),$)try{$.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(F).then(function(m){if(m)var N=0,D=setInterval(function(){N+=1;var B=document.querySelector('[data-fp-hash="'+m+'"]');if(B){clearInterval(D),B.classList.add("admin-identity-flash"),setTimeout(function(){B.classList.remove("admin-identity-flash")},2e3);try{B.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(D)},250)})}function j(F){F=F||{};var $=F.nickname||"",m=F.fp||"",N=F.ip||"",D=!!F.compact,B=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,w=typeof F.onFpClick=="function"?F.onFpClick:C,P=document.createElement("span");P.className="admin-identity-row";var L;if(B?(L=document.createElement("button"),L.type="button",L.className="admin-identity-nick is-clickable",L.addEventListener("click",function(p){p.stopPropagation(),B($)})):(L=document.createElement("span"),L.className="admin-identity-nick"),$)L.textContent="@"+$;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var x=ServerI18n.t("anonymousPlaceholder");x&&x!=="anonymousPlaceholder"&&(b=x)}}catch{}L.textContent="@"+b,L.classList.add("is-guest")}if($&&(L.title=$),P.appendChild(L),m){var q;if(w?(q=document.createElement("button"),q.type="button",q.className="admin-identity-fp is-clickable",q.addEventListener("click",function(p){p.stopPropagation(),w(m)})):(q=document.createElement("span"),q.className="admin-identity-fp"),m==="new"){var A=document.createElement("span");A.className="admin-identity-dot",q.appendChild(A),q.appendChild(document.createTextNode("fp:new"))}else q.textContent="fp:"+T(m);q.title=m,P.appendChild(q)}if(N&&!D){var S=document.createElement("span");S.className="admin-identity-ip",S.textContent=N,S.title=N,P.appendChild(S)}return P}window.AdminIdentity={render:j,parse:h,focusFingerprint:C,hashFp:f,FP_DISPLAY_LEN:y}})()});var et=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function T(r,n){return window.csrfFetch(r,n)}function h(r,n){return window.showToast(r,n)}let f="default",C=[],j={};function F(){let r=document.getElementById("themesList");r&&window.AdminSkeletons&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function $(){F();try{let r=await T("/admin/themes");if(!r.ok)return;let n=await r.json();f=n.active||"default",C=n.themes||[],j=n.overrides||{},P(C,f),x()}catch(r){console.warn("[Themes] Failed to fetch themes:",r)}}var m="\u5C0F\u660E",N="\u8B1B\u5F97\u597D\uFF01+1";function D(r,n){var d=String(r||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(d)?d:n}function B(r){var n=r.styles||{},d=["color:"+D(n.color,"#ffffff")];if(n.textStroke){var s=Math.max(0,Math.min(6,Number(n.strokeWidth)||0));d.push("-webkit-text-stroke:"+s+"px "+D(n.strokeColor,"#000000")),d.push("paint-order:stroke fill")}if(n.textShadow){var t=Math.max(0,Math.min(40,Number(n.shadowBlur)||0));d.push("text-shadow:0 0 "+t+"px "+D(n.color,"#ffffff"))}var c=r.font&&r.font.family;return c&&/^[\w\s-]{1,40}$/.test(c)&&d.push("font-family:'"+c+"', var(--font-sans)"),r.font&&Number(r.font.weight)&&d.push("font-weight:"+Math.max(100,Math.min(900,Number(r.font.weight)))),d.join(";")}function w(r){var n=r.bg&&r.bg.gradient;return n&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(n).trim())?"background:"+String(n).trim():""}function P(r,n){let d=document.getElementById("themesList");if(d){if(d.innerHTML="",r.length===0){d.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}r.forEach(s=>{let t=s.name===n,c=y(ServerI18n.t("theme_"+s.name)!=="theme_"+s.name?ServerI18n.t("theme_"+s.name):s.label||s.name),g=document.createElement("div");g.className=`theme-pack-card${t?" is-active":""}`,g.innerHTML=`
        <div class="theme-pack-name">${c}</div>
        <div class="theme-pack-sample" style="${y(w(s))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(B(s))}">
            <span class="theme-pack-sample-nick">${y(m)}</span>
            ${y(N)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${s.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(s.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(s.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,d.appendChild(g)}),d.querySelectorAll(".theme-delete-btn").forEach(s=>{s.addEventListener("click",async()=>{let t=s.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let g=await T("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!g.ok)throw new Error("HTTP "+g.status);h(ServerI18n.t("themeDeleted"),!0),$()}catch{h(ServerI18n.t("themesDeleteFailed"),!1)}})}),d.querySelectorAll(".theme-activate-btn").forEach(s=>{s.addEventListener("click",async()=>{let t=s.dataset.theme;try{let c=await T("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(c.ok)h(ServerI18n.t("themeActivated"),!0),f=t,P(r,t),x();else{let g=await c.json().catch(()=>({}));h(g.error||ServerI18n.t("setThemeFailed"),!1)}}catch{h(ServerI18n.t("setThemeFailed"),!1)}})})}}function L(){return C.find(r=>r.name===f)||null}function b(r,n){let d=j[f]||{};if(d[r])return d[r];let s=n&&n.styles||{};return r==="stroke"?s.textStroke?Number(s.strokeWidth)>=3?"thick":"thin":"none":s.textShadow?Number(s.shadowBlur)>=10?"strong":"soft":"none"}function x(){let r=document.getElementById("themeDetail"),n=document.getElementById("themeDetailLabel");if(!r||!n)return;let d=L();if(!d)return;let s=ServerI18n.t("theme_"+d.name)!=="theme_"+d.name?ServerI18n.t("theme_"+d.name):d.label||d.name;n.textContent=ServerI18n.t("themeDetailGroup",{name:s}),["stroke","shadow"].forEach(c=>{let g=b(c,d);r.querySelectorAll(`[data-theme-seg="${c}"] [data-theme-opt]`).forEach(a=>{let i=a.getAttribute("data-theme-opt")===g;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",i?"true":"false")})});let t=r.querySelector('[data-theme-ov="color"]');if(t){let c=D((d.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(c)?c:"#ffffff"}A(d),S(d)}var q=null;async function A(r){let n=document.getElementById("themeOvFont");if(!n)return;if(!q)try{let t=await fetch("/fonts",{credentials:"same-origin"});q=t.ok?(await t.json()).fonts||[]:[]}catch{q=[]}let s=(j[f]||{}).font_family||"";n.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+q.map(t=>{let c=String(t.name||t);return`<option value="${y(c)}"${c===s?" selected":""}>${y(c)}</option>`}).join("")}function S(r){let n=document.querySelector("[data-theme-preview-line]");n&&n.setAttribute("style",B(r))}async function p(r){try{let n=await T("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!n.ok)throw new Error("HTTP "+n.status);h(ServerI18n.t("themeDetailSaved"),!0),await $()}catch{h(ServerI18n.t("themeDetailSaveFailed"),!1)}}function l(){let r=document.getElementById("themeDetail");r&&(r.addEventListener("click",n=>{let d=n.target.closest("[data-theme-opt]");if(!d)return;let s=d.closest("[data-theme-seg]");s&&p({[s.getAttribute("data-theme-seg")]:d.getAttribute("data-theme-opt")})}),r.addEventListener("change",n=>{let d=n.target.closest("[data-theme-ov]");d&&p({[d.getAttribute("data-theme-ov")]:d.value})}))}function o(){let r=document.getElementById("themeNewBtn");r&&r.addEventListener("click",async()=>{let n=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!n||!n.trim()))try{let d=await T("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:n.trim(),base:f})});if(!d.ok)throw new Error("HTTP "+d.status);h(ServerI18n.t("themeCreated"),!0),$()}catch{h(ServerI18n.t("themesNewFailed"),!1)}})}function e(){$(),l(),o();let r=document.getElementById("themeReloadBtn");r&&r.addEventListener("click",async()=>{try{(await T("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(h(ServerI18n.t("themesReloaded")),$()):h(ServerI18n.t("themesReloadFailed"),!1)}catch{h(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:e}})()});var tt=he(()=>{(function(){"use strict";function y(_,M){return window.csrfFetch(_,M)}function T(_,M){return window.showToast(_,M)}var h=window.ServerI18n;function f(_,M){return window.AdminUtils.styleTag(_,M)}let C=null;function j(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(M=>!M.hasAttribute("disabled")&&M.getAttribute("aria-hidden")!=="true"):[]}function F(_){let M=document.getElementById("effectEditModal");if(!M||M.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),$();return}if(_.key!=="Tab")return;let R=j();if(R.length===0){_.preventDefault();return}let K=R[0],E=R[R.length-1],O=document.activeElement;_.shiftKey&&O===K?(_.preventDefault(),E.focus()):!_.shiftKey&&O===E&&(_.preventDefault(),K.focus())}function $(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",F),C&&(C.focus(),C=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!m[_]}};let N=new Map,D=new Map;function B(_){if(!_||!_.styleId||!_.keyframes)return;let M="dme-user-"+_.styleId;if(document.getElementById(M))return;let R=document.createElement("style");R.id=M,R.textContent=_.keyframes,document.head.appendChild(R)}async function w(_){if(N.has(_))return N.get(_);if(D.has(_))return D.get(_);let M=(async()=>{try{let R=await y(`/admin/effects/${encodeURIComponent(_)}/content`);if(!R.ok)throw new Error("content fetch failed");let K=await R.json(),E=K&&K.content||"";if(!E)throw new Error("empty content");let O=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:{}})});if(!O.ok)throw new Error("preview failed");let U=await O.json();if(!U||!U.animation)throw new Error("no animation");return B(U),N.set(_,U),U}catch{return N.set(_,"failed"),null}finally{D.delete(_)}})();return D.set(_,M),M}function P(_,M){let R=_.querySelector(".effect-demo-text");if(!R)return;R.style.animation=M.animation||"",M.animationComposition&&(R.style.animationComposition=M.animationComposition),R.style.animationPlayState="paused";let K=b();K&&K.observe(_)}let L=null;function b(){return L||(typeof IntersectionObserver>"u"?null:(L=new IntersectionObserver(_=>{_.forEach(M=>{let R=M.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=M.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),L))}let x=null;function q(_){let M=document.getElementById("effectPreviewParams");if(!M)return{};let R;try{let E=_.split(`
`),O=!1,U=0,J=null,te=0,Z={};for(let G of E){let Q=G.trimStart(),W=G.length-Q.length;if(Q.startsWith("params:")){O=!0,U=W;continue}if(!O||Q===""||Q.startsWith("#"))continue;if(W<=U&&!Q.startsWith("params:")){O=!1;continue}let z=Q.match(/^([a-zA-Z0-9_]+):\s*$/);if(z&&W===U+2){J=z[1],te=W,Z[J]={};continue}if(J&&W>te){let ee=Q.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ee){let ae=ee[1],se=ee[2].trim();if((se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),ae!=="options"){let de=Number(se);Z[J][ae]=isNaN(de)?se:de}}if(Q.startsWith("- value:")){Z[J].options||(Z[J].options=[]);let ae=Q.match(/^- value:\s*(.+)$/);if(ae){let se=ae[1].trim();(se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),Z[J].options.push({value:se,label:se})}}if(Q.startsWith("label:")&&Z[J].options&&Z[J].options.length>0){let ae=Q.match(/^label:\s*(.+)$/);if(ae){let se=ae[1].trim();(se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),Z[J].options[Z[J].options.length-1].label=se}}}}R=Z}catch{R={}}M.innerHTML="";let K={};for(let[E,O]of Object.entries(R||{})){let U=O.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let te=document.createElement("label");if(te.className="font-mono",te.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",te.textContent=`${E} (${U})`,J.appendChild(te),U==="select"&&Array.isArray(O.options)){let Z=document.createElement("select");Z.className="admin-ui-select",Z.style.cssText="font-size:13px;padding:4px 8px",Z.dataset.paramKey=E;for(let G of O.options){let Q=document.createElement("option");Q.value=G.value,Q.textContent=G.label||G.value,G.value===String(O.default)&&(Q.selected=!0),Z.appendChild(Q)}K[E]=String(O.default||O.options[0]&&O.options[0].value||""),Z.addEventListener("change",()=>{p()}),J.appendChild(Z)}else{let Z=O.min!=null?O.min:0,G=O.max!=null?O.max:10,Q=O.step!=null?O.step:U==="int"?1:.1,W=O.default!=null?O.default:Z,z=document.createElement("div");z.className="flex items-center gap-2";let ee=document.createElement("input");ee.type="range",ee.min=Z,ee.max=G,ee.step=Q,ee.value=W,ee.dataset.paramKey=E,ee.className="flex-1",ee.style.accentColor="var(--color-primary)";let ae=document.createElement("span");ae.className="font-mono",ae.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",ae.textContent=String(W),ee.addEventListener("input",()=>{ae.textContent=ee.value,p()}),z.appendChild(ee),z.appendChild(ae),J.appendChild(z),K[E]=W}M.appendChild(J)}return K}function A(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let M={};return _.querySelectorAll("[data-param-key]").forEach(R=>{M[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),M}async function S(){let _=document.getElementById("effectEditModalTextarea"),M=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),K=document.getElementById("effectPreviewError");if(!_||!M||!R)return;let E=_.value;if(!E||E===h.t("effectLoadContent")||E===h.t("effectsNetworkError"))return;let O=A();K?.classList.add("hidden");try{let U=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:O})}),J=await U.json().catch(()=>({}));U.ok?(R.textContent=J.keyframes||"",M.style.animation=J.animation||"none",M.style.animationComposition=J.animationComposition||""):(M.style.animation="none",R.textContent="",K&&(K.textContent=J.error||h.t("previewFailed"),K.classList.remove("hidden")))}catch{M.style.animation="none",R.textContent="",K&&(K.textContent=h.t("effectsNetworkError"),K.classList.remove("hidden"))}}function p(){clearTimeout(x),x=setTimeout(()=>S(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
        <div id="effectEditModal" role="dialog" aria-modal="true" aria-labelledby="effectEditModalTitle" aria-describedby="effectEditModalFile" class="hidden fixed inset-0 z-[9999] items-center justify-content-center" style="background:rgba(0,0,0,0.72);">
          <div class="rounded-2xl w-full max-w-[1100px] mx-4 shadow-2xl flex flex-col max-h-[88vh] overflow-hidden" style="background:var(--color-bg-deep);border:1px solid var(--admin-line)">
            <div class="flex items-center justify-between px-5 py-4 shrink-0" style="border-bottom:1px solid var(--admin-line)">
              <div>
                <p id="effectEditModalTitle" class="font-bold text-sm m-0" style="color:var(--color-text-strong)"></p>
                <p id="effectEditModalFile" class="font-mono mt-0.5 m-0" style="font-size:0.7rem;color:var(--color-text-muted)"></p>
              </div>
              <button id="effectEditModalClose" title="Close" aria-label="Close" class="bg-transparent border-none cursor-pointer p-1 rounded flex items-center leading-none transition-colors" style="color:var(--color-text-muted)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div class="flex-1 overflow-hidden flex min-h-0">
              <div class="flex-1 overflow-hidden px-5 py-4 min-h-0 flex flex-col">
                <textarea id="effectEditModalTextarea"
                  class="w-full flex-1 min-h-[300px] text-xs font-mono rounded-lg p-3 resize-none outline-none block"
                  style="background:var(--color-bg-elevated);color:var(--color-text-secondary);border:1px solid var(--admin-line)"
                  spellcheck="false"></textarea>
              </div>
              <div id="effectPreviewPane" class="w-[360px] shrink-0 px-4 py-4 flex flex-col gap-3 overflow-y-auto" style="border-left:1px solid var(--admin-line)">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${h.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${h.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${h.t("previewText")}</span>
                </div>
                ${f("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${h.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${h.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",$),document.getElementById("effectEditModalCancel").addEventListener("click",$),document.getElementById("effectEditModal").addEventListener("click",E=>{E.target===E.currentTarget&&$()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let E=document.getElementById("effectEditModalTextarea");E&&(q(E.value),p())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{S()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let E=document.getElementById("effectEditModal"),O=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),J=E?.dataset.effectName;if(!(!J||!O)){U.disabled=!0;try{let te=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:O.value})}),Z=await te.json().catch(()=>({}));te.ok?(T(Z.message||h.t("effectSaveFallback"),!0),$(),await r()):T(Z.error||h.t("saveFailed"),!1)}catch{T(h.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await r(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let E=document.getElementById("effectReloadBtn");E&&(E.disabled=!0);try{let O=await y("/admin/effects/reload",{method:"POST"}),U=await O.json().catch(()=>({}));O.ok?(T(U.message||h.t("effectsReloadFallback")),await r()):T(U.error||h.t("reloadFailed"),!1)}catch{T(h.t("effectsNetworkError"),!1)}finally{E&&(E.disabled=!1)}});async function _(E){if(!E)return;let O=new FormData;O.append("effectfile",E);try{let U=await y("/admin/effects/upload",{method:"POST",body:O}),J=await U.json().catch(()=>({}));U.ok?(T(J.message||h.t("effectUploadFallback")),await r()):T(J.error||h.t("uploadFailed"),!1)}catch{T(h.t("effectsNetworkError"),!1)}}let M=document.getElementById("effectUploadInput"),R=M&&!M.dataset.uploadWired;R&&(M.dataset.uploadWired="1"),(R?M:null)?.addEventListener("change",async E=>{await _(E.target.files?.[0]),E.target.value=""});let K=document.getElementById("sec-effects-mgmt");if(K){let E=0,O=Z=>{Z.preventDefault(),E++,K.classList.add("is-drag")},U=Z=>{Z.preventDefault()},J=Z=>{Z.preventDefault(),E=Math.max(0,E-1),E===0&&K.classList.remove("is-drag")},te=async Z=>{Z.preventDefault(),E=0,K.classList.remove("is-drag");let G=Z.dataTransfer?.files?.[0];if(G){if(!/\.(dme|dme\.zip)$/i.test(G.name)){T(h.t("fxToastBadExt"),!1);return}await _(G)}};K.addEventListener("dragenter",O),K.addEventListener("dragover",U),K.addEventListener("dragleave",J),K.addEventListener("drop",te)}}function o(_){let M=(_||"").toLowerCase();return M.startsWith("glow")||M.includes("neon")?"GLOW":M.startsWith("shake")?"SHAKE":M.startsWith("wave")||M.startsWith("spin")||M.startsWith("bounce")||M.startsWith("zoom")||M.startsWith("fire")||M.includes("motion")?"MOTION":M.startsWith("rainbow")||M.startsWith("blink")||M.includes("color")?"COLOR":M.startsWith("type")||M.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function r(){let _=document.getElementById("effectsList");if(_)try{let M=await y("/admin/effects");if(!M.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsLoadFailed")+"</span>";return}let R=await M.json();e.all=R.effects||[],n(),s()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+h.t("effectsNetworkError")+"</span>"}}function n(){let _=document.getElementById("effectsFilterRow");if(!_)return;let M={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(U=>{M[o(U.name)]+=1});let R=e.all.length,K=[["ALL",h.t("fxChipAll"),R],["GLOW",h.t("fxCatGlow"),M.GLOW],["MOTION",h.t("fxCatMotion"),M.MOTION],["COLOR",h.t("fxCatColor"),M.COLOR],["SHAKE",h.t("fxCatShake"),M.SHAKE],["TEXT",h.t("fxCatText"),M.TEXT]];M.MISC>0&&K.push(["MISC",h.t("fxCatMisc"),M.MISC]);let E=K.map(([U,J,te])=>`<span class="hud-filter-chip ${e.filter===U?"is-active":""}" data-effect-filter="${U}">${J} ${te}</span>`).join(""),O=_.querySelector("[data-toolbar-spacer]");O?(_.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),O.insertAdjacentHTML("beforebegin",E)):_.innerHTML=E,_.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{e.filter=U.dataset.effectFilter,n(),s()})})}function d(_){let M=(U,J)=>{let te=document.querySelector(U);te&&(te.textContent=J==null?"\u2014":String(J))},R=_.length,K=_.filter(U=>U.enabled!==!1).length,E=new Set(_.map(U=>o(U.name))),O=_.filter(U=>!m[U.name]).length;M("[data-eflib-total]",R),M("[data-eflib-active]",K),M("[data-eflib-cats]",E.size),M("[data-eflib-user]",O)}function s(){let _=document.getElementById("effectsList");if(!_)return;let M=e.all;d(M);let R=e.filter==="ALL"?M:M.filter(K=>o(K.name)===e.filter);if(!R.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(M.length?h.t("fxNoFilterMatch"):h.t("noEffectsLoaded"))+"</span>";return}L&&L.disconnect(),_.innerHTML="",R.forEach(K=>{let E=o(K.name),O=E==="GLOW"?"is-glow":E==="COLOR"?"is-color":E==="TEXT"?"is-text":"",U=m[K.name]||"",J=!!U,te=document.createElement("div");te.className="hud-effect-card"+(e.selected===K.name?" is-selected":""),te.dataset.effectName=K.name,te.title=[K.description,`file: ${K.filename}`].filter(Boolean).join(`
`);var Z="effect_"+K.name;let G=h.t(Z)!==Z?h.t(Z):K.label||K.name,Q=J?"built-in":"user",W=U?`animation:${U};animation-play-state:paused;`:"";if(te.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(h.t("fxCat"+E.charAt(0)+E.slice(1).toLowerCase())||E)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${O}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(G)}</div>
          <div class="hud-effect-card-meta">${t(Q)} \xB7 ${t(K.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${h.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${h.t("lbDelete")}</button>
        </div>
      `,_.appendChild(te),U){let ae=b();ae&&ae.observe(te)}else{let ae=N.get(K.name);ae&&ae!=="failed"?(B(ae),P(te,ae)):ae!=="failed"&&w(K.name).then(se=>{if(!se)return;let de=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(K.name)}"]`);de&&P(de,se)})}te.addEventListener("click",ae=>{ae.target.closest("[data-role]")||v(K)});let z=te.querySelector('[data-role="edit"]'),ee=te.querySelector('[data-role="delete"]');z.addEventListener("click",async()=>{let ae=document.getElementById("effectEditModal"),se=document.getElementById("effectEditModalTitle"),de=document.getElementById("effectEditModalFile"),oe=document.getElementById("effectEditModalTextarea"),be=document.getElementById("effectEditModalSave");if(!ae)return;C=document.activeElement instanceof HTMLElement?document.activeElement:null,se.textContent=K.label||K.name,de.textContent=K.filename,oe.value=h.t("effectLoadContent"),oe.disabled=!0,be.disabled=!0,ae.dataset.effectName=K.name,ae.classList.remove("hidden"),ae.classList.add("flex"),ae.addEventListener("keydown",F),oe.focus();let Te=document.getElementById("effectPreviewText"),xe=document.getElementById("effectPreviewStyle"),ie=document.getElementById("effectPreviewError"),ne=document.getElementById("effectPreviewParams");Te&&(Te.style.animation="none"),xe&&(xe.textContent=""),ie&&ie.classList.add("hidden"),ne&&(ne.innerHTML="");try{let re=await y(`/admin/effects/${encodeURIComponent(K.name)}/content`),ue=await re.json().catch(()=>({}));re.ok?(oe.value=ue.content||"",oe.disabled=!1,be.disabled=!1,oe.focus(),q(oe.value),S()):(oe.value=ue.error||h.t("effectLoadContentFailed"),T(ue.error||h.t("effectLoadContentFailed"),!1))}catch{oe.value=h.t("effectsNetworkError"),T(h.t("effectsNetworkError"),!1)}}),ee.addEventListener("click",async()=>{let ae=K.label||K.name;if(await window.HudConfirm?.open({icon:"\u2297",title:h.t("fxDeleteTitle"),subtitle:h.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${h.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${ae}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${h.t("fxDeleteWarn")}
                </div>`,confirmLabel:h.t("fxDeleteConfirm"),cancelLabel:h.t("cancel"),width:400}))try{let de=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K.name})}),oe=await de.json().catch(()=>({}));de.ok?(T(oe.message||h.t("effectDeleteFallback"),!0),await r()):T(oe.error||h.t("deleteFailed"),!1)}catch{T(h.t("effectsNetworkError"),!1)}})})}function t(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(_){let M={name:"",label:"",description:"",params:[]};if(!_)return M;let R=_.split(`
`),K="top",E=null;for(let O of R){let U=O.replace(/\r$/,""),J=U.trimStart();if(!J||J.startsWith("#"))continue;let te=U.length-J.length;if(te===0){if(K="top",E&&(M.params.push(E),E=null),J==="params:"){K="params";continue}let Z=J.match(/^([a-z_]+):\s*(.+)$/);Z&&(Z[1]==="name"?M.name=Z[2].trim():Z[1]==="label"?M.label=Z[2].trim():Z[1]==="description"&&(M.description=Z[2].trim()));continue}if(!(K!=="params"&&K!=="param-fields"&&K!=="options")){if(te===2&&(K==="params"||K==="param-fields"||K==="options")){E&&(M.params.push(E),E=null);let Z=J.match(/^(\w+):$/);Z&&(E={key:Z[1]},K="param-fields");continue}if(te===4&&K==="param-fields"&&E){let Z=J.match(/^(\w+):\s*(.*)$/);if(Z){let G=Z[1],Q=Z[2].trim();G==="label"?E.label=Q:G==="type"?E.type=Q:G==="default"?E.default=Q:G==="min"?E.min=parseFloat(Q):G==="max"?E.max=parseFloat(Q):G==="step"?E.step=parseFloat(Q):G==="options"&&(E.options=[],K="options")}continue}if(K==="options"&&E&&te>=6){let Z=J.match(/^-\s*value:\s*(.+)$/);Z&&(E.options||(E.options=[]),E.options.push({value:Z[1].trim(),label:Z[1].trim()}));let G=J.match(/^label:\s*(.+)$/);G&&E.options&&E.options.length>0&&(E.options[E.options.length-1].label=G[1].trim())}}}return E&&M.params.push(E),M}function g(_,M){let R=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),K=R?R[1]:"",E=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),O=E?E[1].trim():"";for(let U of M.params){let J=U.default!==void 0?U.default:"",te=new RegExp(`\\{${U.key}\\}`,"g");K=K.replace(te,J),O=O.replace(te,J)}return{keyframes:K,animation:O}}function a(_,M){if(_==="COLOR"){let R=M.find(K=>K.key==="duration");if(R&&R.default){let K=parseFloat(R.default);if(K<.25)return"crimson";if(K<.33)return"amber"}}if(_==="MOTION"){let R=M.find(K=>K.key==="height");if(R&&R.default){let K=parseFloat(R.default);if(K>30)return"crimson";if(K>24)return"amber"}}return"lime"}function i(_,M){return _==="COLOR"?M==="crimson"?h.t("fxHintFlashBlock"):M==="amber"?h.t("fxHintFlashWarn"):h.t("fxHintFlashOk"):M==="crimson"?h.t("fxHintAmpBlock"):M==="amber"?h.t("fxHintAmpWarn"):h.t("fxHintAmpOk")}function u(_,M){let R=c(M),{keyframes:K,animation:E}=g(M,R),O=o(_.name),U=R.params.filter(oe=>oe.type!=="select"),J=R.params.filter(oe=>oe.type==="select"),te=a(O,R.params),Z=te==="crimson"?"BLOCK":te==="amber"?"WARN":"OK",G=i(O,te),Q="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),W=K&&E?f(Q,K):"",z=E?`animation:${E};animation-play-state:running;`:"",ee=U.map(oe=>{let be=parseFloat(oe.default)||0,Te=oe.min??0,xe=oe.max??100,ie=Math.max(0,Math.min(100,(be-Te)/(xe-Te)*100)),ne=(oe.label||"").match(/\(([^)]+)\)$/),re=ne?ne[1]:"",ue=oe.label||oe.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(ue)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${be}<span style="color:var(--color-text-muted);margin-left:2px">${t(re)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${ie}%"></div>
          <div class="fx-slider-knob" style="left:${ie}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Te}${t(re)}</span><span>${xe}${t(re)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${h.t("fxNoNumericParams")}</span>`,ae=J.map(oe=>{let be=oe.options||[],Te=String(oe.default||""),xe=be.map(ie=>`<span class="fx-radio-btn${ie.value===Te||ie.label===Te?" is-active":""}">${t(ie.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(oe.label||oe.key)}</div>
        <div class="fx-radio-group">${xe||"<span>\u2014</span>"}</div>
      </div>`}).join(""),se=["dark","light","photo"].map(oe=>{let be=oe==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${oe}">
        <span class="fx-preview-bg-label">${oe.toUpperCase()}</span>
        <span class="fx-preview-text" style="${z}color:${be}">ABC</span>
      </div>`}).join(""),de=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${h.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ee}</div>
      </div>`;return ae&&(de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${ae}</div>
      </div>`),de+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${h.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${se}</div>
      </div>
      <div class="fx-warn-box${te!=="lime"?" is-"+te:""}">
        <span class="fx-warn-chip${te!=="lime"?" is-"+te:""}">${Z}</span>
        <span class="fx-warn-text">${t(G)}</span>
      </div>
    </div>`,de}async function v(_){e.selected=_.name;let M=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),K=document.getElementById("effectsInspectorKicker"),E=document.getElementById("effectsInspectorBody");if(M){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=_.label||_.name),K&&(K.textContent="LOADING"),E&&(E.className="hud-inspector-body",E.textContent="# "+h.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(O=>{O.classList.toggle("is-selected",O.dataset.effectName===_.name)});try{let O=await y(`/admin/effects/${encodeURIComponent(_.name)}/content`),U=await O.json().catch(()=>({}));if(O.ok){let J=U.content||"";E&&(E.className="hud-inspector-body has-param-panel",E.innerHTML=u(_,J)),K&&(K.textContent=o(_.name))}else E&&(E.className="hud-inspector-body",E.textContent="# "+(U.error||h.t("effectLoadContentFailed"))),K&&(K.textContent="ERROR")}catch{E&&(E.className="hud-inspector-body",E.textContent="# "+h.t("effectsNetworkError")),K&&(K.textContent="NETWORK")}}}function k(){let _=document.getElementById("effectsInspectorReload"),M=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!e.selected){T(h.t("fxSelectFirst"),!1);return}let R=e.all.find(K=>K.name===e.selected);R&&await v(R)}),M?.addEventListener("click",()=>{if(!e.selected){T(h.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",k())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var nt=he(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(T,h){y[T]||(y[T]=[]),y[T].push(h)},off:function(T,h){y[T]=(y[T]||[]).filter(function(f){return f!==h})},emit:function(T,h){(y[T]||[]).forEach(function(f){f(h)})}}})()});var at=he(()=>{(function(){"use strict";let y="sec-events",T="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},C={events:[],filterSev:"all",filterCat:"all",timer:0};function j(A){let S=(A.source||A.kind||"").toLowerCase(),p=(A.action||"").toLowerCase();return S.includes("plugin")||p.includes("plugin")?"plugin":S.includes("webhook")||p.includes("webhook")?"webhook":S.includes("rate")||p.includes("rate")||p.includes("limit")?"rate":S.includes("filter")||p.includes("filter")?"filter":S.includes("overlay")||p.includes("overlay")||S==="broadcast"?"overlay":S.includes("backup")||p.includes("backup")?"backup":S.includes("msg")||S==="messaging"?"msg":S.includes("ws")||S==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,$=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(A){let S=(A.action||A.kind||"").toLowerCase();return A.severity?A.severity:F.test(S)?"error":$.test(S)?"warn":"info"}function N(A){let S=A.source||"system",p=A.action||A.kind||"";return p?`${S.toUpperCase()}_${p.toUpperCase()}`:S.toUpperCase()}function D(A){if(!A)return"\u2014";let S=new Date(A*1e3),p=l=>String(l).padStart(2,"0");return`${p(S.getHours())}:${p(S.getMinutes())}:${p(S.getSeconds())}`}function B(A){if(A.message)return A.message;let S=A.meta||{},p=[];if(S.from&&S.to)p.push(`${S.from} \u2192 ${S.to}`);else if(S.text_preview)p.push(`"${S.text_preview.slice(0,60)}"`);else if(Object.keys(S).length){let l=Object.keys(S).slice(0,3);for(let o of l)p.push(`${o}=${JSON.stringify(S[o]).slice(0,30)}`)}return p.length?p.join(" \xB7 "):`${A.source||"system"}.${A.action||A.kind||"?"}`}function w(){return`
      <div id="${y}" class="admin-ev-v4 hud-page-stack lg:col-span-2" style="display:none">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("evPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("evPageNote")}</p>
        </div>

        <!-- vs audit explainer -->
        <div class="admin-ev-v4__explain">
          ${ServerI18n.t("evInfoLine",{link:`<a href="#/audit">${ServerI18n.t("evAuditLinkText")}</a>`})}
        </div>

        <!-- v5 Batch 12-4 (2026-05-19): added category chip row + LIVE
             pulse indicator per batch12-system.jsx SystemEventsPage. -->
        <div class="admin-ui-toolbar admin-ev-v4__filterbar">
          <div class="admin-ui-chip-group admin-ev-v4__sev-chips" role="tablist">
            <button type="button" class="admin-ui-chip admin-ev-v4__sev-chip is-active" data-ev-sev="all">${ServerI18n.t("evChipAll")} <span class="admin-ev-v4__sev-count" data-ev-cnt="all">0</span></button>
            <button type="button" class="admin-ui-chip admin-ev-v4__sev-chip" data-ev-sev="info">${ServerI18n.t("uiLevelInfo")} <span class="admin-ev-v4__sev-count" data-ev-cnt="info">0</span></button>
            <button type="button" class="admin-ui-chip admin-ev-v4__sev-chip" data-severity="warn" data-ev-sev="warn">${ServerI18n.t("uiLevelWarn")} <span class="admin-ev-v4__sev-count" data-ev-cnt="warn">0</span></button>
            <button type="button" class="admin-ui-chip admin-ev-v4__sev-chip" data-severity="danger" data-ev-sev="error">${ServerI18n.t("uiLevelError")} <span class="admin-ev-v4__sev-count" data-ev-cnt="error">0</span></button>
          </div>
          <div class="admin-ui-chip-group admin-ev-v4__cat-chips" role="tablist" aria-label="Category filter">
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip is-active" data-ev-cat="all">${ServerI18n.t("evChipAll")}</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="ws">ws</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="msg">msg</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="plugin">plugin</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="webhook">webhook</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="rate">rate</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="system">system</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="filter">filter</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="overlay">desktop</button>
            <button type="button" class="admin-ui-chip admin-ev-v4__cat-chip" data-ev-cat="backup">backup</button>
          </div>
          <span class="admin-ui-spacer admin-ev-v4__spacer"></span>
          <span class="admin-ui-dot is-success admin-ev-v4__live-dot"></span>
          <span class="admin-ui-summary admin-ev-v4__live-label">${ServerI18n.t("uiLive")}</span>
          <span class="admin-ui-summary admin-ev-v4__count" data-ev-total>0</span>
          <button type="button" class="admin-ui-action admin-ev-v4__refresh" data-ev-action="refresh">${ServerI18n.t("evRefreshBtn")}</button>
          <button type="button" class="admin-ui-action admin-ev-v4__refresh" data-ev-action="export">${ServerI18n.t("evExportBtn")}</button>
        </div>

        <!-- Events table -->
        <div class="admin-ev-v4__card">
          <div class="admin-ev-v4__row admin-ev-v4__row--head">
            <span>${ServerI18n.t("uiColTime")}</span>
            <span>${ServerI18n.t("uiColSeverity")}</span>
            <span>${ServerI18n.t("ulType")}</span>
            <span>${ServerI18n.t("uiColActor")}</span>
            <span>${ServerI18n.t("uiColMessage")}</span>
            <span></span>
          </div>
          <div class="admin-ev-v4__rows" data-ev-rows>
            <div class="admin-ev-v4__empty">${ServerI18n.t("evLoading")}</div>
          </div>
        </div>
      </div>`}function P(){let A=document.querySelector("[data-ev-rows]");if(!A)return;let S=C.events,p=S.filter(e=>!(C.filterSev!=="all"&&m(e)!==C.filterSev||C.filterCat!=="all"&&j(e)!==C.filterCat));p.length===0?(A.innerHTML="",window.AdminEmpty?A.appendChild(window.AdminEmpty.render("events")):A.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):A.innerHTML=p.map(e=>{let r=m(e);return`
          <div class="admin-ev-v4__row" data-sev="${r}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(D(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${r}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${r}">${f(N(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(B(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:S.length,info:0,warn:0,error:0};for(let e of S)l[m(e)]+=1;Object.keys(l).forEach(e=>{let r=document.querySelector(`[data-ev-cnt="${e}"]`);r&&(r.textContent=String(l[e]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${p.length} / ${S.length}`)}async function L(){try{let A=await fetch(T,{credentials:"same-origin"});if(!A.ok)return;let S=await A.json();C.events=Array.isArray(S.events)?S.events:[],P()}catch{}}function b(){let A=document.getElementById(y);A&&A.addEventListener("click",S=>{let p=S.target.closest("[data-ev-sev]");if(p){A.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===p)),C.filterSev=p.dataset.evSev,P();return}let l=S.target.closest("[data-ev-cat]");if(l){A.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===l)),C.filterCat=l.dataset.evCat,P();return}let o=S.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")L();else if(o.dataset.evAction==="export"){let e=new Blob([JSON.stringify(C.events,null,2)],{type:"application/json"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function x(){let A=document.querySelector(".admin-dash-grid"),S=document.getElementById(y);if(!S)return;let l=(A?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";S.style.display=l?"":"none",l?(L(),C.timer||(C.timer=setInterval(L,15e3))):C.timer&&(clearInterval(C.timer),C.timer=0)}function q(){let A=document.getElementById("settings-grid");!A||document.getElementById(y)||(A.insertAdjacentHTML("beforeend",w()),b(),x())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&q(),x()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",x),document.addEventListener("admin-panel-rendered",()=>{q(),x()}),q()})})()});var it=he(()=>{(function(){"use strict";let y="sec-modqueue",T="/admin/modqueue/list",C=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},j={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},$={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(p){let l=0,o=String(p||"");for(let e=0;e<o.length;e++)l=l*31+o.charCodeAt(e)&65535;return l%360}function N(p){if(!p.created_at_ms)return null;let l=(Date.now()-p.created_at_ms)/1e3,o=Math.max(0,j.autoRejectSec-l);return Math.ceil(o)}function D(p,l){let o=(p.severity||"low").toLowerCase(),e=F[o]||F.low,r=m(p.fp),n=String(p.fp||"\u2014").slice(0,8),d=p.nick||p.nickname||ServerI18n.t("audienceAnonymous"),s=(d||"?").slice(0,2).toUpperCase(),t=l==="pending"?N(p):null,c=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${C(p.id||"")}">${C(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${C(p.id||"")}">${C(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${C(p.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",g=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${C(ServerI18n.t("modqueueStampApproved"))} \xB7 ${C(p.resolved_by||"admin")} \xB7 ${C(p.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${p.auto_rejected?`${C(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${C(ServerI18n.t("modqueueAutoRejectTimeout",{n:j.autoRejectSec}))}`:`${C(ServerI18n.t("modqueueStampRejected"))} \xB7 ${C(p.resolved_by||"admin")} \xB7 ${C(p.resolved_ago||"")}`}
        </div>`:"",a=l==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${C(p.id||"")}" data-mq-sev="${C(o)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${r})">${C(s)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${C(d)}</div>
            <div class="admin-mq-card__fp">fp:${C(n)}</div>
          </div>
          <div class="admin-mq-card__time">${C(p.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${C(p.content||p.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${C(ServerI18n.t($[o]||$.low))}</span>
          <span class="admin-mq-card__rule">${C(ServerI18n.t("modqueueRuleLabel"))}: ${C(p.rule||p.matched_rule||"?")}</span>
          ${a}
        </div>
        ${c}
        ${g}
      </div>`}function B(p,l,o){p&&(p.innerHTML=l.map(e=>D(e,o)).join(""))}function w(){let p=document.getElementById(y);if(!p)return;p.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),p.querySelector(".admin-mq__body").hidden=!0;let l=p.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let p=document.getElementById(y);if(!p)return;if(j.pending.length+j.approved.length+j.rejected.length===0){w();return}p.querySelector(".admin-mq__body").hidden=!1;let o=p.querySelector("[data-mq-empty]");o&&(o.hidden=!0),B(p.querySelector("[data-mq-col-pending]"),j.pending,"pending"),B(p.querySelector("[data-mq-col-approved]"),j.approved,"approved"),B(p.querySelector("[data-mq-col-rejected]"),j.rejected,"rejected");let e=(s,t)=>{p.querySelectorAll(s).forEach(c=>{c.textContent=String(t)})};e("[data-mq-cnt-pending]",j.pending.length),e("[data-mq-cnt-approved]",j.approved.length),e("[data-mq-cnt-rejected]",j.rejected.length);let r=j.pending.length===0;p.querySelectorAll("[data-mq-bulk]").forEach(s=>{s.disabled=r});let n=j.pending[j.pending.length-1],d=p.querySelector("[data-mq-oldest]");if(d){let s=n?N(n):null;d.textContent=s!=null?`oldest: ${s}s`:""}e("[data-mq-throughput]",j.stats.throughput.toFixed?j.stats.throughput.toFixed(1):j.stats.throughput),e("[data-mq-avg-review]",j.stats.avg_review_sec.toFixed?j.stats.avg_review_sec.toFixed(1):j.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(j.stats.auto_reject_pct||0)+"%")}async function L(){try{let p=await fetch(T,{credentials:"same-origin"});if(!p.ok){j.pending=[],j.approved=[],j.rejected=[],P();return}let l=await p.json();j.pending=Array.isArray(l.pending)?l.pending:[],j.approved=Array.isArray(l.approved)?l.approved:[],j.rejected=Array.isArray(l.rejected)?l.rejected:[],j.stats=l.stats||j.stats,typeof l.auto_reject_sec=="number"&&(j.autoRejectSec=l.auto_reject_sec),P()}catch{}}async function b(p,l,o){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,...o||{}})});if(e.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),L();else{let r=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:r.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function x(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${C(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${C(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${C(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${C(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${C(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
          <div class="admin-mq__autoreject">
            <span class="admin-mq__autoreject-label">${ServerI18n.t("mqStateAutoReject")}</span>
            <span class="admin-mq__autoreject-val" data-mq-autoreject>30s</span>
          </div>
        </div>

        <!-- Integration hint -->
        <div class="admin-mq__hint">
          ${ServerI18n.t("modqueueHintLine")}
        </div>

        <!-- Swimlane body -->
        <div class="admin-mq__body">
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--pending">
              <span class="admin-mq__col-dot" style="background:var(--color-warning, #fbbf24)"></span>
              <span class="admin-mq__col-title">${ServerI18n.t("mqStatePending")}</span>
              <span class="admin-mq__col-count" data-mq-cnt-pending>0</span>
              <span class="admin-mq__col-badge" data-mq-oldest></span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-pending></div>
          </div>
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--approved">
              <span class="admin-mq__col-dot" style="background:var(--color-success, #86efac)"></span>
              <span class="admin-mq__col-title">${ServerI18n.t("mqStateApproved")}</span>
              <span class="admin-mq__col-count" data-mq-cnt-approved>0</span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-approved></div>
          </div>
          <div class="admin-mq__col">
            <div class="admin-mq__col-head admin-mq__col-head--rejected">
              <span class="admin-mq__col-dot" style="background:var(--color-danger, #ff4d4f)"></span>
              <span class="admin-mq__col-title">${ServerI18n.t("mqStateRejected")}</span>
              <span class="admin-mq__col-count" data-mq-cnt-rejected>0</span>
            </div>
            <div class="admin-mq__col-cards" data-mq-col-rejected></div>
          </div>
        </div>

        <!-- Empty state mount (toggled when total === 0) -->
        <div class="admin-mq__empty" data-mq-empty hidden></div>

        <!-- Footer: throughput stats -->
        <div class="admin-mq__footer">
          <span>${ServerI18n.t("mqStatThroughput")} \xB7 <span data-mq-throughput>0</span> decisions/min</span>
          <span>${ServerI18n.t("mqStatAvgReview")} \xB7 <span data-mq-avg-review>0</span>s</span>
          <span>${ServerI18n.t("mqStatAutoRejectRate")} \xB7 <span data-mq-auto-rate>0%</span></span>
          <span class="admin-mq__spacer"></span>
          <span class="admin-mq__health">\u25CF ${ServerI18n.t("mqQueueHealthy")}</span>
        </div>
      </div>`}function q(){let p=document.getElementById(y);p&&p.addEventListener("click",async l=>{let o=l.target.closest("[data-mq-action]");if(o){let r=o.dataset.mqId,n=o.dataset.mqAction;(n==="approve"||n==="reject")&&b(r,n);return}let e=l.target.closest("[data-mq-bulk]");if(e){let r=e.dataset.mqBulk,n=r==="approve-low";if(!await window.HudConfirm?.open({icon:n?"\u2713":"\u2298",title:n?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:n?"warn":"danger",body:n?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:n?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let s=r.startsWith("approve")?"approve":"reject",t=r.endsWith("low")?"low":"high";b(null,"bulk",{action:s,severity:t})}})}function A(){let p=document.querySelector(".admin-dash-grid"),l=document.getElementById(y);if(!l)return;let o=(location.hash||"").replace("#/","").split("/"),e=p?.dataset.activeRoute||o[0]||"",r=p?.dataset.activeLeaf||o[1]||"",n=e==="modqueue"||e==="moderation"&&(r==="queue"||r===""||r==="moderation");l.style.display=n?"":"none",n?(j.timer||(L(),j.timer=setInterval(L,4e3)),j.countdownTimer||(j.countdownTimer=setInterval(P,1e3))):(j.timer&&(clearInterval(j.timer),j.timer=0),j.countdownTimer&&(clearInterval(j.countdownTimer),j.countdownTimer=0))}function S(){let p=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!p||document.getElementById(y)||(p.insertAdjacentHTML("beforeend",x()),q(),A())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&S(),A()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",()=>{S(),A()}),S()})})()});var st=he(()=>{(function(){"use strict";let y="sec-modbans-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(x){return String(x).replace(/[&<>"']/g,function(q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[q]})},h=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},C={fingerprint:"FP",ip:"IP",nick:"NICK"},j={rows:[],refreshTimer:0};async function F(){try{let x=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!x.ok)return;let q=await x.json();j.rows=Array.isArray(q.bans)?q.bans:[],N()}catch{}}function $(x){if(!x||x<=0)return"\u2014";let q=Math.floor(x/86400),A=Math.floor(x%86400/3600),S=Math.floor(x%3600/60);return q>0?`${q}d ${A}h`:A>0?`${A}h ${S}m`:`${S}m`}function m(x){let q=x.target_kind;return q==="fingerprint"?`fp:${(x.target||"").slice(0,8)}`:q==="nick"?`@${x.target}`:x.target||"\u2014"}function N(){let x=document.querySelector("[data-modbans-list]");if(!x)return;let q=j.rows||[],A=document.querySelector("[data-modbans-count]");if(A&&(A.textContent=String(q.length)),q.length===0){x.innerHTML="";let S=window.AdminEmpty.render("blacklist");S.dataset.emptyKind="modbans",x.appendChild(S);return}x.innerHTML=q.map(function(S){let p=S.status==="expired",l=S.status==="permanent",o="admin-modbans-chip is-"+S.status,e=l?ServerI18n.t("modbansPermanent"):p?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:$(S.remaining_s)}),r=encodeURIComponent(S.target_kind)+"|"+encodeURIComponent(S.target);return`
        <div class="admin-modbans-row ${p?"is-expired":""}">
          <span class="admin-modbans-target">${T(m(S))}</span>
          <span class="admin-modbans-kind">${T(C[S.target_kind]||S.target_kind)}</span>
          <span class="admin-modbans-reason">${T(S.reason||"\u2014")}</span>
          <span class="${o}">
            ${S.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${T(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${r}"
            ${p?"disabled":""}
            title="${p?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${p?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(x){let q=x||{},A=q.kind||"ban",S=window.HudConfirm,p=!q.target,l=q.target_kind||"fingerprint",o=q.target||"";return new Promise(function(e){if(!S){e(!1);return}let r=86400,n=!1,d=12,s="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${T(f[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${T(C[l]||"?")} ${T((A||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${T(o?m({target_kind:l,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${p?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(Z){return`<button type="button" class="admin-modbans-modal-preset${Z===l?" is-active":""}"
                data-modbans-target-kind="${Z}">${T(f[Z])} ${T(C[Z])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${h.map(function(Z){return`<button type="button" class="${"admin-modbans-modal-preset"+(Z.defaultPick?" is-active":"")+(Z.permanent?" is-permanent":"")}" data-modbans-duration="${Z.val}">${Z.labelKey?ServerI18n.t(Z.labelKey):Z.label}</button>`}).join("")}
            <button type="button" class="admin-modbans-modal-preset is-custom" data-modbans-custom>${ServerI18n.t("modbansCustom")}</button>
          </div>
          <!-- Custom duration input row \u2014 brief 0518-v2 #2 decision B.
               Hidden until \u81EA\u8A02 chip is selected. -->
          <div class="admin-modbans-modal-custom-row" data-modbans-custom-row hidden>
            <span class="admin-modbans-modal-custom-label">${ServerI18n.t("modbansCustom")}</span>
            <input type="number" min="1" max="999" class="admin-modbans-modal-custom-input"
              data-modbans-custom-input value="12" />
            <div class="admin-modbans-modal-custom-units" data-modbans-custom-units>
              <button type="button" class="admin-modbans-modal-custom-unit is-active" data-modbans-custom-unit="hour">${ServerI18n.t("modbansHour")}</button>
              <button type="button" class="admin-modbans-modal-custom-unit" data-modbans-custom-unit="day">${ServerI18n.t("modbansDay")}</button>
            </div>
            <span class="admin-modbans-modal-custom-spacer"></span>
            <span class="admin-modbans-modal-custom-seconds" data-modbans-custom-seconds>= 43,200s</span>
          </div>
          <div class="admin-modbans-modal-when" data-modbans-when></div>
        </div>
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansReasonLabel")}</div>
          <input type="text" class="admin-modbans-modal-reason" data-modbans-reason
            placeholder="${ServerI18n.t("modbansReasonPlaceholder")}" maxlength="200" />
        </div>
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let c=t.querySelector("[data-modbans-custom-row]"),g=t.querySelector("[data-modbans-custom-input]"),a=t.querySelector("[data-modbans-custom-seconds]"),i=t.querySelector("[data-modbans-when]"),u=t.querySelector("[data-modbans-custom]"),v=t.querySelector("[data-modbans-target]"),k=t.querySelector("[data-modbans-target-icon]"),I=t.querySelector("[data-modbans-target-label]"),_=t.querySelector("[data-modbans-target-val]"),M=function(){k.textContent=f[l]||"?",I.textContent=`${C[l]||"?"} ${(A||"ban").toUpperCase()}`,_.textContent=o?m({target_kind:l,target:o}):"\u2014"},R=function(){return Math.max(1,parseInt(g.value,10)||1)*(s==="day"?86400:3600)},K=function(){if(r===0){i.textContent=ServerI18n.t("modbansWhenPermanent"),i.classList.remove("is-custom");return}let Z=new Date(Date.now()+r*1e3),G=W=>String(W).padStart(2,"0"),Q=`${Z.getFullYear()}-${G(Z.getMonth()+1)}-${G(Z.getDate())} ${G(Z.getHours())}:${G(Z.getMinutes())}`;n?(i.textContent=ServerI18n.t("modbansWhenCustom",{n:d,unit:ServerI18n.t(s==="day"?"modbansDay":"modbansHour"),stamp:Q}),i.classList.add("is-custom")):(i.textContent=ServerI18n.t("modbansWhenPreset",{dur:$(r),stamp:Q}),i.classList.remove("is-custom"))},E=function(){let Z=R();a.textContent=`= ${Z.toLocaleString()}s`,n&&(d=Math.max(1,parseInt(g.value,10)||1),r=Z,K())},O=t.querySelector("[data-modbans-presets]"),U=function(){n=!0,c.hidden=!1,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(Z){Z.classList.toggle("is-active",Z===u)}),E()},J=function(Z){n=!1,c.hidden=!0,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(G){G.classList.toggle("is-active",G===Z)})};M(),K(),E(),t.addEventListener("click",function(Z){let G=Z.target.closest("[data-modbans-target-kind]");if(G){l=G.dataset.modbansTargetKind,G.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(z){z.classList.toggle("is-active",z===G)}),M();return}if(Z.target.closest("[data-modbans-custom]")){U();return}let Q=Z.target.closest("[data-modbans-custom-unit]");if(Q){s=Q.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(z){z.classList.toggle("is-active",z===Q)}),E();return}let W=Z.target.closest("[data-modbans-duration]");W&&(r=parseInt(W.dataset.modbansDuration,10)||0,J(W),K())}),g.addEventListener("input",E),v&&v.addEventListener("input",function(){o=v.value.trim(),M()});let te=t.querySelector("[data-modbans-reason]");S.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(Z){if(!Z){e(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}r===0?S.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${T(m({target_kind:l,target:o}))}</b>`})}).then(function(G){if(!G){e(!1);return}B(l,o,r,te.value.trim(),A).then(e)}):B(l,o,r,te.value.trim(),A).then(e)})})}async function B(x,q,A,S,p){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:x,target:q,duration_s:A,reason:S||"",kind:p||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast(A===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:$(A)}),!0),F(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function w(x){let q=(x||"").split("|");if(q.length!==2)return;let A=decodeURIComponent(q[0]),S=decodeURIComponent(q[1]);try{let p=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:A,target:S})});if(!p.ok)throw new Error(`HTTP ${p.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(p){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:p.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
      <div id="${y}" class="admin-modbans-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("modbansPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("modbansPageNote")}</p>
        </div>
        <div class="admin-ui-toolbar">
          <span class="admin-ui-monolabel">${ServerI18n.t("modbansCountLabel",{n:"<span data-modbans-count>0</span>"})}</span>
          <span class="admin-ui-spacer"></span>
          <button type="button" class="admin-ui-action is-primary" data-modbans-add>${ServerI18n.t("modbansAdd")}</button>
        </div>
        <div class="admin-ui-card admin-modbans-card">
          <div class="admin-modbans-header">
            <span class="admin-ui-monolabel">${ServerI18n.t("mlTarget")}</span>
            <span class="admin-ui-monolabel">${ServerI18n.t("mlKind")}</span>
            <span class="admin-ui-monolabel">${ServerI18n.t("mlReason")}</span>
            <span class="admin-ui-monolabel">${ServerI18n.t("mlStatus")}</span>
            <span></span>
          </div>
          <div class="admin-modbans-list" data-modbans-list>
            <!-- skeleton injected by _bind() on first paint; see polestar
                 polish pass (2026-05-18) \u2014 replaces the "\u8F09\u5165\u4E2D\u2026" flash
                 with a structural preview matching the row layout. -->
          </div>
        </div>
      </div>`}function L(){let x=document.getElementById(y);if(!x||x.dataset.modbansBound==="1")return;x.dataset.modbansBound="1",x.addEventListener("click",function(A){if(A.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let S=A.target.closest("[data-modbans-unban]");S&&!S.disabled&&w(S.dataset.modbansUnban)});let q=x.querySelector("[data-modbans-list]");q&&window.AdminSkeletons&&!q.children.length&&q.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let x=document.getElementById("settings-grid");!x||document.getElementById(y)||(x.insertAdjacentHTML("beforeend",P()),L(),F(),j.refreshTimer||(j.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:m,formatRemaining:$}})()});var ot=he(()=>{(function(){"use strict";let y="admin-mobile-nav-root",T=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],h=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},C=!1,j=0;function F(){return`
      <nav id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${h.map(L=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${L.route}">
              <span class="admin-mobile-nav__o-icon">${L.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${L.labelKey?ServerI18n.t(L.labelKey):L.label}</span>
                <span class="admin-mobile-nav__o-desc">${L.descKey?ServerI18n.t(L.descKey):L.desc||""}</span>
              </span>
              <span class="admin-mobile-nav__o-chev">\u203A</span>
            </button>`).join("")}
          <!-- 2026-08-19\uFF1A\u767B\u51FA\u4F9D\u8A2D\u8A08\u7A3F 03 \u79FB\u5230\u5074\u6B04\u5DE6\u4E0B\u5E33\u865F\u5217\uFF0C\u4F46\u624B\u6A5F\u7684\u5074\u6B04
               \u6574\u500B display:none\uFF08\u6539\u7528\u5E95\u90E8\u5C0E\u89BD\uFF09\uFF0C\u767B\u51FA\u56E0\u6B64\u8B8A\u6210\u6478\u4E0D\u5230\u3002
               \u6536\u5728\u300C\u66F4\u591A\u300D\u62BD\u5C5C\u6700\u5E95\u2014\u2014\u4F4E\u983B\u52D5\u4F5C\u672C\u4F86\u5C31\u8A72\u5728\u9019\u4E00\u5C64\u3002 -->
          <button type="button" class="admin-mobile-nav__o-row admin-mobile-nav__o-logout" data-mn-logout>
            <span class="admin-mobile-nav__o-icon">\u23FB</span>
            <span class="admin-mobile-nav__o-txt">
              <span class="admin-mobile-nav__o-label">${ServerI18n.t("logout")}</span>
            </span>
          </button>
        </div>
        <div class="admin-mobile-nav__bar">
          ${T.map(L=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${L.id}" data-mn-route="${L.route||""}" ${L.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${L.icon}</span>
              <span class="admin-mobile-nav__label">${L.labelKey?ServerI18n.t(L.labelKey):L.label}</span>
              ${L.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${L.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function $(){let L=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=f[L]||L;return T.some(x=>x.id===b)?b:h.some(x=>x.route===b)?"more":""}function m(){let L=document.getElementById(y);if(!L)return;let b=$();L.querySelectorAll("[data-mn-tab]").forEach(x=>{x.classList.toggle("is-active",x.dataset.mnTab===b),x.dataset.mnTab!=="more"&&x.setAttribute("aria-current",x.dataset.mnTab===b?"page":"false")})}function N(L){let b=document.getElementById(y);if(!b)return;C=L,b.dataset.overflow=L?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!L,b.querySelector("[data-mn-backdrop]").hidden=!L;let x=b.querySelector("[data-mn-tab='more']");x?.classList.toggle("is-active",L),x?.setAttribute("aria-expanded",L?"true":"false")}function D(L){if(L.target.closest("[data-mn-backdrop]")){N(!1);return}if(L.target.closest("[data-mn-logout]")){N(!1);let q=document.getElementById("logoutButton");q&&q.click();return}let b=L.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){N(!C);return}N(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let x=L.target.closest("[data-mn-route]");x&&x.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+x.dataset.mnRoute)}async function B(){try{let L=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!L.ok)return;let b=await L.json(),x=Array.isArray(b.pending)?b.pending.length:0;j=x;let q=document.querySelector("[data-mn-badge='pending']");if(!q)return;q.textContent=String(x),q.hidden=!(x>0)}catch{}}function w(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let L=0;function b(){let x=document.activeElement,q=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!q)}document.addEventListener("focusin",()=>{cancelAnimationFrame(L),L=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(L),L=requestAnimationFrame(()=>setTimeout(b,50))})}function P(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{N(!1),m()}),m(),B(),setInterval(B,8e3),w())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var rt=he(()=>{(function(){"use strict";var y="admin-session-expired-root",T=!1,h=null;function f(m,N){try{var D=window.ServerI18n&&ServerI18n.t(m);return D&&D!==m?D:N}catch{return N}}function C(){var m=document.getElementById(y);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),T=!1,h&&h.focus)try{h.focus()}catch{}h=null}function j(m){if(m.key==="Tab"){var N=document.getElementById(y);if(N){var D=N.querySelectorAll("input, button");if(D.length){var B=D[0],w=D[D.length-1];m.shiftKey&&document.activeElement===B?(m.preventDefault(),w.focus()):!m.shiftKey&&document.activeElement===w&&(m.preventDefault(),B.focus())}}}}function F(){if(!(T||document.getElementById(y))){T=!0,h=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=y,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",j,!0);var N=m.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),$(m,N)})}}function $(m,N){var D=m.querySelector("[data-sx-error]"),B=m.querySelector(".admin-sx__submit");D.hidden=!0,B.disabled=!0;var w=new URLSearchParams;w.set("password",N.value),m.querySelector("#admin-sx-remember").checked&&w.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:w.toString()}).then(function(L){return L.json().then(function(b){return{status:L.status,data:b}},function(){return{status:L.status,data:{}}})}).then(function(L){if(B.disabled=!1,L.status===200&&L.data&&L.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&L.data.csrf_token&&(b.content=L.data.csrf_token),document.removeEventListener("keydown",j,!0),C(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}L.status===429?D.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,N.select()}).catch(function(){B.disabled=!1,D.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:C,isOpen:function(){return T}}})()});var dt=he(()=>{(function(){"use strict";let y="admin-reconnect-banner",C=0,j=0,F="ok",$=0,m=5e3,N=!1,D=0;function B(o){if(F!==o){if(F=o,o==="ok"||o==="dismissed"){P(),o==="ok"&&(C=0,j=0,m=5e3);return}w()}}function w(){let o=document.getElementById(y);o||(o=document.createElement("div"),o.id=y,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=F;let e=F==="exhausted",r=e?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${r}`,o.innerHTML=e?b():L(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",q),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>B("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),D||(D=setInterval(x,250))}function P(){let o=document.getElementById(y);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function L(){let o=Math.max(0,($-Date.now())/1e3),e=m/1e3,r=Math.min(100,(e-o)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:j})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${r}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function b(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function x(){if(F!=="reconnecting")return;let o=document.getElementById(y);if(!o)return;let e=Math.max(0,($-Date.now())/1e3),r=m/1e3,n=Math.min(100,(r-e)/r*100),d=o.querySelector(".admin-rcb__progress-fill");d&&(d.style.width=n+"%")}function q(){j=0,C=0,m=5e3,B("reconnecting"),A()}async function A(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?S():o.status===401||o.status===403?B("ok"):p()}catch{p()}}function S(){B("ok")}function p(){if(C+=1,j+=1,j>=10){B("exhausted");return}C>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,j-1))),$=Date.now()+m,B("reconnecting"),setTimeout(A,m))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{N=!1,S()});async function r(n){try{let d=await n;return d&&d.ok?F!=="ok"&&F!=="dismissed"&&S():d&&d.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):d&&d.status>=500&&p(),d}catch(d){throw p(),d}}typeof o=="function"&&(window.csrfFetch=function(){return r(o.apply(this,arguments))}),window.fetch=function(n,d){let s=typeof n=="string"?n:n&&n.url||"",t=e.call(this,n,d);return s.startsWith("/admin/")||s.indexOf("//")===-1&&s.startsWith("admin/")?r(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var lt=he(()=>{(function(){"use strict";let y="admin-help-drawer-root",T={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},h=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function C(L){return L==null?"":String(L).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function j(){let L=(location.hash||"").replace("#/","").split("/")[0]||"";return T[L]?L:"_default"}function F(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function $(){let L=T[j()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",x=L.titleKey?ServerI18n.t(L.titleKey):L.title,q=L.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${C(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),A=L.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${C(ServerI18n.t(L.fieldTipKey))}</span>
      </div>`:"",S=h.map(l=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${C(l.term)}</div>
        <div class="admin-help__glossary-def">${C(ServerI18n.t(l.defKey))}</div>
      </div>`).join(""),p=f.map(l=>`
      <a class="admin-help__resource" href="${C(l.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${C(l.label)}</span>
        <span class="admin-help__resource-url">${C(l.url.replace(/^https?:\/\//,""))}</span>
        <span class="admin-help__resource-arrow">\u2197</span>
      </a>`).join("");return`
      <header class="admin-help__head">
        <span class="admin-help__title" id="admin-help-title">${ServerI18n.t("helpDrawerTitle")}</span>
        <kbd class="admin-help__kbd admin-help__head-kbd">F1</kbd>
        <span class="admin-help__spacer"></span>
        <button type="button" class="admin-help__close" data-help-close aria-label="Close">${window.AdminUtils.closeIcon}</button>
      </header>
      <div class="admin-help__body">

        <section class="admin-help__section">
          <div class="admin-help__route-head">
            <span class="admin-help__route-dot"></span>
            <span class="admin-help__route-title">${C(x)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${q}</div>
          ${A}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${C(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${S}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${p}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+C(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let L=document.getElementById(y);L||(document.body.insertAdjacentHTML("beforeend",F()),L=document.getElementById(y),L.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){N();return}b.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),L.querySelector("[data-help-body]").innerHTML=$(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",B)}function N(){let L=document.getElementById(y);L&&L.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",B)}function D(){document.getElementById(y)?N():m()}function B(L){L.key==="Escape"&&(L.preventDefault(),N())}function w(L){let b=L.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||L.key==="F1"&&(L.preventDefault(),D())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",w)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:N,toggle:D}})()});var ct=he(()=>{(function(){"use strict";var y="admin-shortcuts-root",T=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function h(p,l){try{var o=window.ServerI18n&&ServerI18n.t(p);return o&&o!==p?o:l}catch{return l}}function f(p,l){window.showToast&&window.showToast(p,l!==!1)}function C(p,l){return(window.csrfFetch||window.fetch)(p,l||{})}function j(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function $(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function m(){var p="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(p=(await l.json()).state||"idle")}catch{}if(p==="idle"){location.hash="#/polls",f(h("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=p==="active";try{var e=await C(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);f(h(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(h("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(p){return T?p.metaKey:p.ctrlKey}var D=T?"\u2318":"Ctrl",B=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(p){return N(p)&&(p.key==="k"||p.key==="K")},run:j},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(p){return p.key==="?"&&!N(p)&&!p.altKey||p.key==="/"&&N(p)},run:function(){q()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(p){return N(p)&&p.shiftKey&&(p.key==="d"||p.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(p){return N(p)&&p.shiftKey&&p.key==="Backspace"},run:$},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(p){return!N(p)&&"jkJK".indexOf(p.key)>=0},run:function(p){window.AdminLiveFeed.moveFocus(p.key==="j"||p.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(p){return!N(p)&&(p.key==="b"||p.key==="B")},run:function(p){window.AdminLiveFeed.blockFocused(p.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(p){return!N(p)&&p.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(p){return!N(p)&&(p.key==="p"||p.key==="P")},run:m}];function w(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function P(p){return B.filter(function(l){return l.group===p}).map(function(l){var o=l.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+w(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+w(h(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function L(){var p=document.getElementById(y);p&&p.remove(),document.removeEventListener("keydown",b,!0)}function b(p){(p.key==="Escape"||p.key==="?")&&(p.preventDefault(),L())}function x(){if(!document.getElementById(y)){var p=document.createElement("div");p.id=y,p.className="admin-ks",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-ks-title"),p.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+w(h("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+w(h("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+w(h("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+w(h("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+w(h("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(p),p.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&L()}),document.addEventListener("keydown",b,!0);var l=p.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function q(){document.getElementById(y)?L():x()}function A(p){if(!p)return!1;if(p.isContentEditable)return!0;var l=(p.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function S(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(p){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=A(document.activeElement),o=0;o<B.length;o++){var e=B[o];if(e.group==="feed"){if(l||!S())continue}else if(l&&!N(p))continue;if(e.match(p)){p.preventDefault(),e.run(p);return}}}),window.AdminShortcuts={open:x,close:L,toggle:q,list:function(){return B.slice()}}})()});var ut=he(()=>{(function(){"use strict";let y="theme-mode",T="admin-theme-mode",h="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let w=localStorage.getItem(T);(w==="light"||w==="dark"||w==="auto")&&(localStorage.setItem(y,w),localStorage.removeItem(T))}catch{}})();function C(){try{let B=localStorage.getItem(y);if(B==="light"||B==="dark"||B==="auto")return B}catch{}return"auto"}function j(B){try{localStorage.setItem(y,B)}catch{}}function F(B){let w=document.documentElement;B==="auto"?w.removeAttribute("data-theme"):w.setAttribute("data-theme",B),m(B)}function $(B){return B==="light"||B==="dark"?B:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(B){let w=document.getElementById(h);if(!w)return;let P=$(B);w.dataset.mode=B,w.dataset.effective=P,w.textContent=B==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",w.title=B==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):B==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let B=C(),w=B==="auto"?"light":B==="light"?"dark":"auto";j(w),F(w)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let B=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,w=document.getElementById(h);if(w){B&&w.classList.contains("admin-theme-toggle--floating")&&B.parentNode&&!B.parentNode.contains(w)&&(w.classList.remove("admin-theme-toggle--floating"),B.parentNode.insertBefore(w,B));return}let P=document.createElement("button");P.id=h,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",N),B&&B.parentNode?B.parentNode.insertBefore(P,B):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(C())}if(F(C()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{C()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",B=>{B.key===y&&F(C())}),window.AdminThemeSwitcher={getMode:C,setMode:function(B){B!=="auto"&&B!=="light"&&B!=="dark"||(j(B),F(B),m(B),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:B}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var mt=he(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},T=[];window.DanmuStore={get:function(h){return y[h]},set:function(h,f){y[h]=f,T.forEach(function(C){C(h,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+h,f)},subscribe:function(h){T.push(h)},getAll:function(){return Object.assign({},y)}}})()});var pt=he(()=>{(function(){"use strict";let h=0;function f(){return window.__adminCtx||{}}function C(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function j(){let m=C();if(m&&typeof m.OpsContact<"u"){let N=m.OpsContact;if(Array.isArray(N))return N[3]||N[0]||null;if(typeof N=="string")return N}return null}function F(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let N=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
      <div class="admin-login-shell">
        <div class="admin-login-card" id="adminLoginCard">
          <img class="admin-login-icon" src="/static/icon.png" alt="" width="64" height="64" />
          <div class="admin-login-hero">
            <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
                 alt="Danmu Fire" width="540" height="96" />
            <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
                 alt="" aria-hidden="true" width="540" height="96" />
            <p class="admin-login-subtitle" data-i18n="adminLoginSubtitle">${ServerI18n.t("adminLoginSubtitle")}</p>
          </div>
          <form id="loginForm" class="admin-login-form" action="/login" method="post" autocomplete="off">
            <div class="admin-login-field">
              <label class="admin-login-label" for="password" data-i18n="adminLoginPasswordLabel">${ServerI18n.t("adminLoginPasswordLabel")}</label>
              <div class="admin-login-inputwrap">
                <input class="admin-login-input" type="password" id="password" name="password" autocomplete="current-password" required />
                <button type="button" class="admin-login-reveal" data-login-reveal
                        data-i18n="adminLoginReveal">${ServerI18n.t("adminLoginReveal")}</button>
              </div>
            </div>
            <label class="admin-login-remember" for="admin-login-remember">
              <input type="checkbox" id="admin-login-remember" name="remember" value="1" />
              <span data-i18n="adminLoginRemember">${ServerI18n.t("adminLoginRemember")}</span>
            </label>
            <p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">${ServerI18n.t("adminLoginRememberNote")}</p>
            <div class="admin-login-attempts" id="loginAttemptsHint" hidden></div>
            <button class="admin-login-submit" type="submit" data-i18n="adminLoginSignIn">${ServerI18n.t("adminLoginSignIn")}</button>
          </form>
          <div class="admin-login-chiprow">
            <!-- \u8A2D\u8A08\u7A3F 03\u300C\u539F\u5247 4\u300D\uFF1A\u72C0\u614B\uFF1D\u8272\u9EDE\uFF0B\u6587\u5B57\u3002\u9EDE\u7531 .ui-status::before
                 \u756B\uFF0C\u4E0D\u518D\u81EA\u5DF1\u585E\u4E00\u9846 aria-hidden \u7684 span\u3002 -->
            <span class="ui-status is-success">
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${N?` \xB7 v${N}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let D=m.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let L=document.getElementById("password");if(!L)return;let b=L.type==="text";L.type=b?"password":"text",D.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{L.focus()}catch{}});let B=document.getElementById("loginForm"),w=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(B){try{let L=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(L)&&L>0){h=L;let b=Math.max(0,5-h);if(P&&h>0&&b>0){P.hidden=!1;let x=document.getElementById("password");x&&x.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}B.addEventListener("submit",async L=>{if(L.preventDefault(),!w)return;let b=new URLSearchParams;b.set("password",w.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let x=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(x.status===429){let q=x.headers.get("Retry-After"),A=parseInt(q,10),S=Number.isFinite(A)&&A>0?A:300;$(S);return}h+=1;try{sessionStorage.setItem("admin_login_attempts",String(h))}catch{}window.location.reload()}catch(x){console.error("Login submit failed:",x),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function $(m){let N=document.getElementById("adminLoginCard");if(!N)return;let D=j(),B=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";N.classList.add("admin-lockout-card"),N.innerHTML=`
      <div class="admin-login-hero">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <p class="admin-lockout-title">${ServerI18n.t("lockoutTitle")}</p>
      </div>
      <div class="admin-lockout-body" role="alert" aria-live="assertive">
        <div class="admin-lockout-countdown" aria-live="polite">
          <span class="admin-lockout-countdown-value" id="lockoutCountdown">--:--</span>
          <span class="admin-lockout-countdown-unit">${ServerI18n.t("lockoutRemaining")}</span>
        </div>
        <div class="admin-lockout-meta">${ServerI18n.t("lockoutReason")}</div>
        ${B}
      </div>
    `;let w=document.getElementById("lockoutCountdown"),P=m,L=x=>{let q=Math.floor(x/60),A=x%60;return`${String(q).padStart(2,"0")}:${String(A).padStart(2,"0")}`};w&&(w.textContent=L(P));let b=setInterval(()=>{P-=1,w&&(w.textContent=L(Math.max(0,P))),P<=0&&(clearInterval(b),h=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:$}})()});var vt=he(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function T(a){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(a):String(a??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}async function h(){try{let a=y();await a.prime();let i=a.get("history_stats"),[u,v,k]=await Promise.all([i?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!v.ok)return;let I=i||(u&&u.ok?await u.json():null);if(!I)return;let _=(await v.json()).distribution||[],M=I.stats&&I.stats.total||0,R=_.reduce((Z,G)=>G.count>(Z?.count||-1)?G:Z,null),K=R?R.count:0,E=R?(R.hour||"").slice(-5):"\u2014",O=document.querySelector('[data-kpi="messages"]');O&&(O.querySelector("[data-kpi-value]").textContent=M.toLocaleString());let U=document.querySelector('[data-kpi="peak"]');U&&(U.querySelector("[data-kpi-value]").textContent=K.toLocaleString());let J=document.querySelector('[data-kpi="unique-fp"]');if(J){let Z=new Set;(I.records||[]).forEach(G=>{let Q=G.fingerprint||G.fp||G.user_fingerprint;Q&&Z.add(Q)}),J.querySelector("[data-kpi-value]").textContent=Z.size.toLocaleString()}let te=document.querySelector('[data-kpi="session"]');if(te){let Z=k&&k.ok?await k.json():null,G=Z&&Z.status==="live",Q=te.querySelector("[data-kpi-value]");if(G&&Z.started_at){let W=Math.max(0,Math.floor(Date.now()/1e3-Z.started_at)),z=Math.floor(W/3600),ee=Math.floor(W%3600/60);Q.textContent=z>0?`${z}:${String(ee).padStart(2,"0")}:${String(W%60).padStart(2,"0")}`:`${ee}:${String(W%60).padStart(2,"0")}`}else Q.textContent="\u2014"}}catch{}}function f(a,i){let u=document.querySelector(a);if(u){if(typeof i!="number"||i<=0){u.hidden=!0;return}u.hidden=!1,u.textContent=i>999?"999+":String(i)}}async function C(){try{let a=y();await a.prime();let i=a.get("blacklist"),u=a.get("widgets"),v=a.get("history_stats"),k=a.get("effects"),I=a.get("themes");f("[data-count-blacklist]",Array.isArray(i)?i.length:0),f("[data-count-widgets]",Array.isArray(u?.widgets)?u.widgets.length:0),f("[data-count-messages]",v?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(k?.effects)?k.effects.length:0),f("[data-count-themes]",Array.isArray(I?.themes)?I.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let M=await _.json();f("[data-count-plugins]",Array.isArray(M?.plugins)?M.plugins.length:0)}}catch{}}catch{}}async function j(){C(),F(),c()}async function F(){let a=document.querySelector("[data-dash-poll-body]"),i=document.querySelector("[data-dash-poll-timer]");if(a)try{let u=y();await u.prime();let k=u.get("metrics");if(!k){let K=await fetch("/admin/metrics",{credentials:"same-origin"});if(!K.ok)return;k=await K.json()}let I=k.poll_state;if(!I||!I.active||!Array.isArray(I.options)||I.options.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,i&&(i.textContent="");return}let _=I.options.reduce((K,E)=>K+(E.votes||0),0),M=["A","B","C","D","E","F"],R=0;if(I.options.forEach((K,E)=>{(K.votes||0)>(I.options[R].votes||0)&&(R=E)}),a.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${T(I.question||ServerI18n.t("dashPollRunning"))}</div>`+I.options.map((K,E)=>{let O=_?Math.round(K.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${E===R&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${M[E]||String(E+1)}</span>
                <span class="label">${T(K.label||"")}</span>
                <span class="pct">${O}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:K.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${O}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,i){let K=I.remaining_seconds;i.textContent=typeof K=="number"&&K>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(K/60),ss:String(K%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function $(a){let i=a.visible!==!1,u=a.config&&a.config.title||a.type||"widget",v=(a.type||"widget").toUpperCase(),k=(a.position||"\u2014").toUpperCase(),I=i?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=a.created_at&&i?Math.max(0,Math.floor(Date.now()/1e3-a.created_at)):null,M=_!=null?(()=>{let R=Math.floor(_/86400),K=Math.floor(_%86400/3600),E=Math.floor(_%3600/60),O=_%60;return R>0?`UPTIME \xB7 ${R}d ${String(K).padStart(2,"0")}h`:K>0?`UPTIME \xB7 ${K}:${String(E).padStart(2,"0")}:${String(O).padStart(2,"0")}`:`UPTIME \xB7 ${E}:${String(O).padStart(2,"0")}`})():`STATUS \xB7 ${i?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${T(a.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${I}"></span>
          <span class="kind">${T(v)}</span>
          <span class="cat">${T(k)}</span>
        </div>
        <div class="title">${T(u)}</div>
        <div class="uptime">${M}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${i?" is-active":""}" data-widget-action="toggle" data-running="${i?"1":"0"}">${i?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(a,i){try{let u=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:a,config:{visible:!i}})});if(!u.ok)throw new Error("HTTP "+u.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function N(a){a.dataset.bound!=="1"&&(a.dataset.bound="1",a.addEventListener("click",i=>{let u=i.target.closest(".admin-dash-widget-tile");if(!u)return;let v=i.target.dataset.widgetAction,k=u.dataset.widgetId;if(!(!v||!k)){if(v==="toggle")m(k,i.target.dataset.running==="1");else if(v==="config"){let I=document.querySelector('[data-route="widgets"]');I&&I.click()}}}))}async function D(){let a=document.querySelector("[data-dash-widgets]");if(a)try{let i=y();await i.prime();let u=i.get("widgets");if(!u){let k=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!k.ok){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}u=await k.json()}let v=(u.widgets||u.items||[]).slice(0,4);if(v.length===0){a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}a.innerHTML='<div class="admin-dash-widget-grid">'+v.map($).join("")+"</div>",N(a)}catch{a.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let B=null,w=null,P=null;function L(a){let i=Math.max(0,Math.floor(Date.now()/1e3-a)),u=Math.floor(i/3600),v=Math.floor(i%3600/60),k=i%60;return u>0?`${u}:${String(v).padStart(2,"0")}:${String(k).padStart(2,"0")}`:`${String(v).padStart(2,"0")}:${String(k).padStart(2,"0")}`}function b(a){let i=document.getElementById("admin-session-banner"),u=document.getElementById("sec-live-feed");if(u&&u.classList.toggle("is-idle-collapsed",!(a&&a.status==="live")),i&&i.classList.toggle("is-hero",!(a&&a.status==="live")),!i)return;if(B=a,!(a&&a.status==="live"))i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let k=a.started_at||Date.now()/1e3;i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${T(a.name||ServerI18n.t("dashSessFallbackName"))}</span>
            <span class="admin-session-live-timer" data-sess-timer></span>
          </div>
          <!-- 2026-07-30\uFF1A\u62C6\u6389\u9019\u88E1\u7684\u300C\u23F8 \u66AB\u505C\u986F\u793A\u300D\u2014\u2014\u5B83\u662F\u540C\u4E00\u500B
               broadcast standby \u958B\u95DC\u7684\u7B2C\u4E09\u500B\u5165\u53E3\uFF08overlay \u4E3B\u6309\u9215\u3001
               \u5DF2\u780D\u7684 overlay \u6B21\u8981\u9215\u4E4B\u5916\u53C8\u4E00\u9846\uFF09\u3002\u4E00\u529F\u80FD\u4E00\u6247\u9580\uFF1A
               \u986F\u793A\u63A7\u5236\u4F4F\u5728 #/overlay\uFF0C\u9019\u88E1\u53EA\u7559\u5834\u6B21\u751F\u547D\u9031\u671F\uFF0B\u6377\u5F91\u3002 -->
          <!-- 2026-07-30 \u5834\u4E2D\u5BE9\u67E5\uFF1A\u300C\u7D50\u675F\u5F8C viewer\u300D\u4E0B\u62C9\u5F9E\u6A6B\u5E45\u79FB\u51FA\u2014\u2014\u5B83\u662F
               \u5834\u6B21\u8A2D\u5B9A\u3001\u5834\u4E2D\u6BCF\u4E00\u79D2\u90FD\u5728\u65C1\u908A\u7B49\u65BC\u5E72\u64FE\u3002\u6539\u5728\u300C\u7D50\u675F\u5834\u6B21\u300D\u78BA\u8A8D
               \u5F48\u7A97\u88E1\u4E00\u6B21\u8A2D\u5B9A\uFF08\u898B close handler\uFF09\u3002data-current-behavior
               \u66AB\u5B58\u76EE\u524D\u503C\u4F9B\u5F48\u7A97\u9810\u9078\u3002 -->
          <div class="admin-session-live-actions" data-current-behavior="${a.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,x(k)}i.dataset.bound||(i.dataset.bound="1",i.addEventListener("click",A))}function x(a){P&&clearInterval(P);let i=()=>{let u=document.querySelector("[data-sess-timer]");u&&(u.textContent=L(a))};i(),P=setInterval(i,1e3)}function q(){P&&(clearInterval(P),P=null)}async function A(a){let i=a.target.closest("[data-sess-action]");if(!i)return;let u=i.dataset.sessAction;if(u==="open"){let v=document.querySelector("[data-sess-name]"),k=(v?v.value:"").trim();if(!k){v&&v.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}i.disabled=!0;try{let I=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k})}),_=await I.json();if(!I.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:k}),!0),b(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{i.disabled=!1}}else if(u==="close"){let v=i.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",k=(M,R)=>`<option value="${M}"${M===v?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${k("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${k("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${k("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;i.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==v)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let M=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await M.json();if(!M.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),q(),b({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{i.disabled=!1}}}async function S(){try{let a=await fetch("/admin/session/current",{credentials:"same-origin"});if(!a.ok)return;let i=await a.json();b(i)}catch{}}function p(){S(),w&&clearInterval(w),w=setInterval(S,1e4)}function l(){w&&(clearInterval(w),w=null),q()}let o=null,e=null,r=0;function n(){let a=document.querySelector("[data-cockpit-overlay]"),i=window.AdminOverlayControl,u=e;if(!a||!i||!u)return;a.classList.toggle("is-on",u.live);let v=(_,M)=>{_.textContent!==M&&(_.textContent=M)},k=a.querySelector("[data-cockpit-status]");k&&v(k,i.statusText(u.live,u.count));let I=a.querySelector('[data-cockpit-action="toggle"]');I&&(I.dataset.i18n=i.toggleKey(u.live),v(I,ServerI18n.t(I.dataset.i18n)),I.dataset.next=u.live?"standby":"live")}async function d(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.offsetParent===null)return;let i=r,u=null,v=null;try{let _=await fetch("/overlay_status",{credentials:"same-origin"});_.ok&&(u=(await _.json()).overlay_count||0)}catch{}try{let _=await fetch("/admin/broadcast/status",{credentials:"same-origin"});_.ok&&(v=(await _.json()).mode==="live")}catch{}let k=e;if(!k&&v===null)return;e={live:v!==null&&i===r?v:k?k.live:v,count:u!==null?u:k?k.count:0},n()}document.addEventListener("admin-overlay-state",a=>{let i=a&&a.detail||{};r+=1,e={live:!!i.live,count:typeof i.count=="number"?i.count:e?e.count:0},n()}),document.addEventListener("admin-route-applied",a=>{let i=a&&a.detail&&a.detail.route;i!=="live"&&i!=="dashboard"||(n(),d())});function s(){let a=document.querySelector("[data-cockpit-overlay]");if(!a||a.dataset.bound)return;a.dataset.bound="1",a.addEventListener("click",async v=>{let k=v.target.closest("[data-cockpit-action]");if(!k)return;let I=k.dataset.cockpitAction;if(I==="clear"){window.AdminOverlayControl?.clearScreen();return}I==="toggle"&&(await window.AdminOverlayControl?.setDisplay(k.dataset.next==="live"),d())});let i=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="idle-qr"]');i&&i.addEventListener("click",t);let u=a.parentElement&&a.parentElement.querySelector('[data-cockpit-action="poll"]');u&&u.addEventListener("click",()=>{location.hash="#/polls"})}async function t(){let a;try{let v=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!v.ok)throw new Error("HTTP "+v.status);a=await v.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let i=document.createElement("div");i.className="admin-soh-qr",i.innerHTML=a.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:a.url,body:i,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(a.url)}function c(){s(),d(),o&&clearInterval(o),o=setInterval(d,5e3)}function g(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:h,refreshSummary:j,refreshSidebarBadges:C,populatePoll:F,populateWidgets:D,refreshSessionBanner:S,startSessionPolling:p,stopSessionPolling:l,refreshCockpitOverlay:d,renderCockpitOverlay:n,startCockpitPolling:c,stopCockpitPolling:g}})()});var ft=he(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",T=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},C={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},j=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],$=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(H,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(H,V);if(Y&&Y!==H)return Y}return H}let N={};function D(H){if(N[H]!=null)return N[H];let V=C[H];return V?V.step:1}function B(H,V){N[H]=Number(V)||D(H)}let w={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},P=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],L=["Color","FontFamily","Layout"];function b(H){return L.indexOf(H)!==-1}function x(H){let V=w.options&&w.options[H],Y=V&&V[1];return Array.isArray(Y)?Y.slice():[]}function q(H){return H==="Color"?F.map(V=>V.replace(/^#/,"").toUpperCase()):H==="Layout"?$.map(V=>V.value):H==="FontFamily"?(w.fonts&&w.fonts.length?w.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function A(H,V){return H==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function S(){return`
      <div id="${y}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${f(m("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${f(m("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${m("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${f(m("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlMaxTracks"))}
                <span class="sub">${f(m("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlAvoidOverlap"))}
                <span class="sub">${f(m("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${f(m("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${f(m("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlSafeArea"))}
                <span class="sub">${f(m("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(m("dlStrokeMode"))}
                <span class="sub">${f(m("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${f(m("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${f(m("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${f(m("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${f(m("dlDimPollVotes"))}
                <span class="sub">${f(m("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${f(m("dlPollVoteOpacity"))}
                <span class="sub">${f(m("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>

        <!-- 2026-11-14\uFF1A\u89C0\u773E\u5916\u90E8\u5716\u7247\u3002\u9810\u8A2D\u95DC\u9589\uFF1B\u5224\u65B7\u5728\u4F3A\u670D\u5668\uFF08/fire\uFF09\uFF0C
             \u9019\u88E1\u53EA\u8B80\u5BEB /admin/viewer-images\u3002\u95DC\u9589\u6642\u7DB2\u7AD9\u8207\u683C\u5F0F\u5169\u5217\u6536\u8D77\u4F86\u3002 -->
        <div data-dsp-only="audience" id="viewer-images-group">
          <div class="admin-ui-group-label">${f(m("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${f(m("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall" data-vi-row style="display:none;flex-wrap:wrap">
              <label class="lbl" for="viewer-images-hosts">${f(m("viHosts"))}</label>
              <span class="val" style="flex:1 1 240px;min-width:0">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off" style="resize:vertical;min-height:64px"
                  placeholder="${f(m("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row" data-vi-row style="display:none;flex-wrap:wrap" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${f(m("viExtensions"))}</span>
              <span class="val" id="viewer-images-extensions" style="flex-wrap:wrap;gap:12px">
                ${P.map(H=>`
                <label style="display:inline-flex;align-items:center;gap:6px;min-height:44px">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${H.value}" />
                  <span>${H.label}</span>
                </label>`).join("")}
              </span>
            </div>
          </div>
        </div>

        <div class="admin-color-palette" data-dsp-only="audience" data-admin-color-palette></div>

        <div class="admin-dsp2-grid">
          <!-- Left \xB7 row list -->
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head">
              <span>${f(m("displayColParam"))}</span>
              <span data-dsp-only="values">${f(m("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${f(m("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${f(m("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${f(m("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${f(m("displayPreviewSample2"))}</span>
                </div>
              </div>
              <div class="admin-dsp2-preview-foot">
                <span data-preview-foot-l>\u2014</span>
                <span data-preview-foot-r>\u2014</span>
              </div>
            </div>

            <!-- AutoSyncCard \u2014 prototype admin-display-settings.jsx:379+ replaces
                 the legacy DeployCard. Display Settings uses implicit deploy:
                 every postUpdate() ships immediately, no apply button. This
                 card is just the status indicator + revert + export JSON. -->
            <div class="admin-dsp2-card admin-dsp2-autosync" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(m("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${f(m("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${f(m("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${f(m("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${f(m("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span data-i18n="displayAdminControlledTitle">${f(m("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${f(m("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${f(m("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${f(m("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${f(m("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${f(m("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${f(m("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${f(m("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${f(m("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6"
                   data-i18n="displayAdminControlledNote">${f(m("displayAdminControlledNote"))}</div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(m("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let p=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:H=>`${Math.round(H)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:H=>`${H}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:H=>`${(+H).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:H=>`#${String(H||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:H=>H||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:H=>l(H),noRange:!0}];function l(H){let V=$.find(Y=>Y.value===H);return V?m(V.labelKey):H||"\u2014"}function o(H,V){let Y=V[0]!==!1,X=V[3],le=C[H.key];if(H.key==="Opacity"||H.key==="Speed"){let ce=le,me=X!=null?Number(X):ce.min,pe=isFinite(me)?me:ce.min,ye=(pe-ce.min)/Math.max(1e-6,ce.max-ce.min)*100;return`
        <div class="admin-dsp2-track" data-track="${H.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${H.key}" data-num-index="3"
            min="${ce.min}" max="${ce.max}" step="${D(H.key)}" value="${f(String(pe))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${ye.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${ye.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${H.key}"
              min="${ce.min}" max="${ce.max}" step="${D(H.key)}" value="${f(String(pe))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ce.min}${ce.unit}</span><span>${ce.max}${ce.unit}</span>
            </div>
          </div>
        </div>`}if(H.key==="FontSize"){let ce=Number(X);return`
        <div class="admin-dsp2-chiprow">
          ${j.map(me=>`<button type="button" class="admin-dsp2-fchip ${ce===me?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${me}">${me}</button>`).join("")}
        </div>`}if(H.key==="Color"){let ce="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${t().map(me=>{let pe=me.slice(1),ye=me.toUpperCase()===ce;return`<button type="button" class="admin-dsp2-swatch ${ye?"is-active":""}"
              data-chip-key="Color" data-chip-value="${pe}"
              style="background:${me}" aria-label="${me}" aria-pressed="${ye}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ce)}" />
          </label>
        </div>
      `}if(H.key==="FontFamily"){let ce=(w.fonts&&w.fonts.length?w.fonts:["NotoSansTC","Inter"]).map(ke=>{let Ae=typeof ke=="string"?ke:ke.name||ke.family||"",Le=typeof ke=="string"?ke:ke.label||ke.name||ke.family||"";return{value:Ae,label:Le}}).filter(ke=>ke.value),me=String(X||""),pe=!!w.allowlistEdit.FontFamily,ye=pe?w.allowlistEdit.FontFamily:new Set(x("FontFamily").map(ke=>A("FontFamily",ke))),fe=!pe&&ye.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ce.map(ke=>{let Ae=ke.value===me,Le=pe?ye.has(ke.value):fe||ye.has(ke.value),Me=["admin-dsp2-tchip",Ae?"is-active":"",pe?"is-editing":"",Le?"":"is-blocked"].filter(Boolean).join(" "),Pe=pe?`data-allow-key="FontFamily" data-allow-value="${f(ke.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(ke.value)}"`;return`<button type="button" class="${Me}" ${Pe}
              aria-pressed="${Le?"true":"false"}">
              ${pe?`<span class="admin-dsp2-allow-mark">${Le?"\u2713 ":""}</span>`:""}${f(ke.label)}
            </button>`}).join("")}
        </div>
        ${e(H)}
      `}if(H.key==="Layout"){let ce=String(X||"scroll"),me=!!w.allowlistEdit.Layout,pe=me?w.allowlistEdit.Layout:new Set(x("Layout").map(fe=>A("Layout",fe))),ye=!me&&pe.size===0;return`
        <div class="admin-dsp2-tiles">
          ${$.map(fe=>{let ke=fe.value===ce,Ae=me?pe.has(fe.value):ye||pe.has(fe.value),Le=["admin-dsp2-tile",ke?"is-active":"",me?"is-editing":"",Ae?"":"is-blocked"].filter(Boolean).join(" "),Me=me?`data-allow-key="Layout" data-allow-value="${fe.value}"`:`data-chip-key="Layout" data-chip-value="${fe.value}"`;return`<button type="button" class="${Le}" ${Me}
              aria-pressed="${Ae?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${fe.icon}</span>
              <span class="admin-dsp2-tile-label">${m(fe.labelKey)}</span>
              ${me?`<span class="admin-dsp2-allow-mark">${Ae?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${e(H)}
      `}return""}function e(H){if(!b(H.key))return"";let V=!!w.allowlistEdit[H.key],Y=x(H.key),X=q(H.key).length||0,le=Y.length>0?m("displayAllowSummaryPartial",{n:Y.length,total:X,label:r(H.key)}):m("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${H.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${H.key}">${f(le)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${H.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${H.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${H.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${H.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function r(H){return m(H==="Color"?"displayLabelColor":H==="FontFamily"?"displayLabelFontFamily":H==="Layout"?"displayLabelLayout":"displayLabelOption")}function n(H,V){if(H.noRange||!(V[0]!==!1))return"";let X=C[H.key],le=V[1]!=null?V[1]:X.min,ce=V[2]!=null?V[2]:X.max,me=D(H.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${me}" value="${f(String(le))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${me}" value="${f(String(ce))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(me))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function d(H,V){let Y=V[0]!==!1,X=V[3],le=H.fmt?H.fmt(X):X!=null?String(X):"\u2014",ce=H.key==="Layout";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${ce?"is-last":""}" data-row-key="${H.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(m(H.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${f(le)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(m("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(m(Y?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${o(H,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${n(H,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}"
            data-toggle-key="${H.key}" aria-pressed="${Y?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(m(Y?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(Y?m("displayToggleHintOn"):H.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function s(){let H=document.getElementById("dsp2-rows");if(H){if(!w.options){H.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}H.innerHTML=p.map(V=>d(V,w.options[V.key]||[!1,"","",""])).join(""),i(),k(),I()}}function t(){let H=x("Color");return[...new Set((H.length?H:F).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function c(H){let V=H.slice(1).match(/.{2}/g).map(Y=>{let X=parseInt(Y,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function g(H,V="error"){w.paletteNotice={message:H,type:V};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=H,Y.classList.toggle("is-error",V==="error"))}function a(H,V=!0){let Y=document.querySelector("[data-admin-color-palette]"),X=Y?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(H)||(w.palettePreview=H.toUpperCase(),X.style.color=H,Y.querySelector("[data-palette-preview-code]").textContent=H.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(le=>{let ce=le.dataset.palettePreview===H.toUpperCase();le.setAttribute("aria-pressed",String(ce)),le.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ce)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(le=>le.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function i(){let H=document.querySelector("[data-admin-color-palette]");if(!H||!w.options)return;let V=t(),Y=(w.options.ViewerColorPicker||[!0])[0]!==!1,X=w.paletteBusy?"disabled":"",le=w.palettePreview||V[0],ce=f(w.paletteDraft),me=w.paletteNotice;H.setAttribute("aria-busy",String(w.paletteBusy)),H.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${f(m("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${f(m("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${f(m("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${V.length}</strong><span>${f(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${V.map((pe,ye)=>`<div class="admin-color-palette-chip" style="--palette-color:${pe};--palette-ink:${c(pe)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${pe}"
                aria-label="${f(m("viewerPalettePreviewColor",{color:pe}))}" aria-pressed="${pe===le}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(ye+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${pe}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${pe}" ${V.length<=1?"disabled":X}
                aria-label="${f(m("viewerPaletteRemove",{color:pe}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(w.paletteDraft)?ce:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ce}"
                ${w.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${f(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(m(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${me?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${me?f(me.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${le}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,a(le,!1)}async function u(H,V){if(w.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");w.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ce=>{ce.disabled=!0});let X=await R("Color",H);w.paletteBusy=!1,w.paletteNotice={type:X?"success":"error",message:m(X?"viewerPaletteSaved":"updateFailed")},X&&V&&(w.palettePreview=V),i(),(V&&X?Y.querySelector(`[data-palette-preview="${V}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function v(H,V){let Y=w.options&&w.options[H];return Y&&Y[3]!=null?Y[3]:V}function k(){let H=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),le=document.querySelector("[data-preview-foot-r]");if(!H||!V||!Y||!w.options)return;let ce=Number(v("FontSize",32)),me=Number(v("Opacity",92)),pe=Number(v("Speed",1)),ye="#"+String(v("Color","7DD3FC")).replace(/^#/,""),fe=String(v("FontFamily","NotoSansTC")),ke=String(v("Layout","scroll")),Ae=Math.min(ce,36),Le=Math.max(0,Math.min(100,me))/100;V.style.fontSize=Ae+"px",V.style.color=ye,V.style.opacity=Le.toFixed(2),V.style.fontFamily=fe+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${ye}66`,Y.style.fontSize=(Ae*.78).toFixed(0)+"px",Y.style.opacity=(Le*.9).toFixed(2),Y.style.fontFamily=fe+", system-ui, sans-serif",H.dataset.layout=ke,X&&(X.textContent=`${l(ke)} \xB7 ${ce}px \xB7 ${(+pe).toFixed(1)}\xD7`),le&&(le.textContent=m("displayOpacitySuffix",{n:Math.round(me)}))}function I(){let H=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!H||!w.options)return;let Y=p.filter(X=>(w.options[X.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),H.innerHTML=p.map(X=>{let le=!!(w.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${le?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(le?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function _(H,V){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:H,enabled:!!V})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray(w.options[H])||(w.options[H]=[!1,"","",""]),w.options[H][0]=!!V,s(),H==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=H==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):H;window.showToast&&window.showToast(`${X} ${m("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1),await E(),s()}}async function M(H,V,Y){try{let X=Y;if(H==="Color"){let ce=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ce)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}X=ce.toUpperCase()}else if(H==="Opacity"||H==="FontSize"||H==="Speed"){X=H==="Speed"?parseFloat(X):parseInt(X,10);let ce=C[H];if(Number.isNaN(X)||ce&&(X<ce.min||X>ce.max)){window.showToast&&window.showToast(`${H} ${ce.min}\u2013${ce.max}`,!1);return}}let le=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:H,value:X,index:V})});if(!le.ok)throw new Error("update "+le.status);Array.isArray(w.options[H])||(w.options[H]=[!1,"","",""]),w.options[H][V]=X,K(H),k(),I()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function R(H,V){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(H)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!Y.ok)throw new Error("allowlist "+Y.status);let X=await Y.json().catch(()=>({}));X&&Array.isArray(X.option)?w.options[H]=X.option:Array.isArray(w.options[H])&&(w.options[H][1]=V.slice()),K(H),k(),I();let le=q(H).length||0,ce=H==="Color"?m("settingsUpdated"):V.length>0?m("displayAllowlistToastPartial",{key:H,n:V.length,total:le}):m("displayAllowlistToastAll",{key:H});return H!=="Color"&&window.showToast&&window.showToast(ce,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),H!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function K(H){let V=document.querySelector(`[data-row-key="${H}"]`);if(!V||!w.options)return;let Y=p.find(me=>me.key===H);if(!Y)return;let X=w.options[H]||[!1,"","",""],le=X[3],ce=V.querySelector("[data-value-badge]");if(ce&&(ce.textContent=Y.fmt?Y.fmt(le):le!=null?String(le):"\u2014"),b(H)){let me=V.querySelector("[data-picker-host]");me&&(me.innerHTML=o(Y,X));return}if((H==="FontSize"||H==="Color"||H==="FontFamily"||H==="Layout")&&V.querySelectorAll(`[data-chip-key="${H}"]`).forEach(me=>{let pe=me.getAttribute("data-chip-value"),ye=H==="Color"?String(le||"").replace(/^#/,"").toUpperCase():String(le??"");me.classList.toggle("is-active",String(pe)===ye)}),H==="Opacity"||H==="Speed"){let me=C[H],pe=Number(le??me.min),ye=(pe-me.min)/Math.max(1e-6,me.max-me.min)*100,fe=V.querySelector(".admin-dsp2-slider-fill"),ke=V.querySelector(".admin-dsp2-slider-thumb");fe&&(fe.style.width=ye.toFixed(2)+"%"),ke&&(ke.style.left=`calc(${ye.toFixed(2)}% - 8px)`);let Ae=V.querySelector(".admin-dsp2-range");Ae&&document.activeElement!==Ae&&(Ae.value=String(pe));let Le=V.querySelector(".admin-dsp2-num");Le&&document.activeElement!==Le&&(Le.value=String(pe))}}async function E(){try{let H=await fetch("/get_settings",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);w.options=await H.json()}catch(H){console.warn("[admin-display] /get_settings failed:",H),w.options=w.options||{}}}async function O(){try{let H=await fetch("/fonts",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);let V=await H.json();w.fonts=Array.isArray(V)?V:V.fonts||[]}catch{w.fonts=["NotoSansTC","Inter"]}}async function U(){try{let H=await fetch("/admin/metrics",{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();w.viewerCount=V.ws_clients??0}catch{}}function J(){te(),U(),w.metricsTimer=setInterval(U,5e3)}function te(){w.metricsTimer&&(clearInterval(w.metricsTimer),w.metricsTimer=null)}function Z(){if(!w.options){window.showToast&&window.showToast(m("loading"),!1);return}let H={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:w.options},V=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Y=URL.createObjectURL(V),X=document.createElement("a");X.href=Y,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Y),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function G(){if(!w.options)return;let H=document.getElementById("dsp2-deploy");H&&(H.disabled=!0,H.classList.add("is-pending"));try{for(let V of p){let Y=w.options[V.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!Y[0]})})}await U(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${w.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{H&&(H.disabled=!1,H.classList.remove("is-pending"))}}async function Q(){let H={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Y,X]of Object.entries(H)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!X[0]})});for(let le=1;le<=3;le++)le<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||X[le]===""||X[le]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:X[le],index:le})})}await E(),s(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1)}}function W(){let H=document.getElementById(y);H&&(H.addEventListener("click",V=>{let Y=V.target.closest("[data-palette-preview]");if(Y){a(Y.dataset.palettePreview);return}let X=V.target.closest("[data-palette-remove]");if(X){let ye=t();if(ye.length>1){let fe=ye.filter(ke=>ke!==X.dataset.paletteRemove);u(fe,fe.includes(w.palettePreview)?w.palettePreview:fe[0])}return}if(V.target.closest("[data-palette-add]")){let ye=H.querySelector("[data-palette-hex]"),fe=String(ye.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(fe)){w.paletteInvalid=!0,ye.setAttribute("aria-invalid","true"),g(m("colorFormatError"));return}let ke=t();if(ke.includes("#"+fe)){g(m("viewerPaletteDuplicate"));return}ke.length<64&&u([...ke,"#"+fe],"#"+fe);return}let le=V.target.closest("[data-toggle-key]");if(le){let ye=le.getAttribute("data-toggle-key"),fe=!!(w.options[ye]||[])[0];_(ye,!fe);return}let ce=V.target.closest("[data-allow-action]");if(ce){let ye=ce.getAttribute("data-allow-action"),fe=ce.getAttribute("data-allow-key");if(!fe)return;if(ye==="edit"){let ke=x(fe).map(Ae=>A(fe,Ae));ke.length?w.allowlistEdit[fe]=new Set(ke):w.allowlistEdit[fe]=new Set(q(fe)),K(fe);return}if(ye==="cancel"){delete w.allowlistEdit[fe],K(fe);return}if(ye==="clear"){w.allowlistEdit[fe]=new Set,R(fe,[]),delete w.allowlistEdit[fe];return}if(ye==="apply"){let ke=w.allowlistEdit[fe]||new Set,Ae=q(fe),Le=Array.from(ke),Me=Ae.length>0&&Le.length===Ae.length&&Ae.every(Pe=>ke.has(Pe));R(fe,Me?[]:Le),delete w.allowlistEdit[fe];return}}let me=V.target.closest("[data-allow-key][data-allow-value]");if(me){let ye=me.getAttribute("data-allow-key"),fe=me.getAttribute("data-allow-value"),ke=w.allowlistEdit[ye];if(ke){let Ae=A(ye,fe);ke.has(Ae)?ke.delete(Ae):ke.add(Ae),K(ye)}return}let pe=V.target.closest("[data-chip-key]");if(pe){let ye=pe.getAttribute("data-chip-key"),fe=pe.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${ye}"]`).forEach(ke=>ke.classList.remove("is-active")),pe.classList.add("is-active"),M(ye,3,fe);return}if(V.target&&V.target.id==="dsp2-revert"){Q();return}if(V.target&&V.target.id==="dsp2-export"){Z();return}}),H.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),H.querySelector("[data-palette-add]")?.click())}),H.addEventListener("change",V=>{let Y=V.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,_("ViewerColorPicker",Y.checked);return}let X=Y.getAttribute("data-num-key");if(!X)return;let le=Y.getAttribute("data-num-index");if(le==="step"){B(X,Y.value),K(X);return}let ce=parseInt(le,10);if(Number.isNaN(ce))return;let me=Y.value;X==="Color"&&(me=String(me).replace(/^#/,"").toUpperCase()),M(X,ce,me)}),H.addEventListener("input",V=>{let Y=V.target;if(Y){if(Y.matches("[data-palette-picker]")){w.paletteDraft=Y.value.toUpperCase(),w.paletteInvalid=!1;let X=H.querySelector("[data-palette-hex]");X.value=w.paletteDraft,X.removeAttribute("aria-invalid"),g("","success"),a(w.paletteDraft);return}if(Y.matches("[data-palette-hex]")){w.paletteDraft=Y.value,w.paletteInvalid=!1;let X=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),g("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(H.querySelector("[data-palette-picker]").value="#"+X,a("#"+X));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key"),le=C[X],ce=Number(Y.value),me=(ce-le.min)/Math.max(1e-6,le.max-le.min)*100,pe=Y.closest("[data-row-key]");if(pe){let ye=pe.querySelector(".admin-dsp2-slider-fill"),fe=pe.querySelector(".admin-dsp2-slider-thumb");ye&&(ye.style.width=me.toFixed(2)+"%"),fe&&(fe.style.left=`calc(${me.toFixed(2)}% - 8px)`);let ke=pe.querySelector(".admin-dsp2-num");ke&&(ke.value=String(ce))}Array.isArray(w.options[X])&&(w.options[X][3]=ce),k();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let X=Y.getAttribute("data-num-key"),le=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(le)||!Array.isArray(w.options[X]))return;let ce=Y.value;Y.type==="number"&&(ce=Number(ce)),w.options[X][le]=ce,k()}}}),H.addEventListener("change",V=>{let Y=V.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key");M(X,3,Y.value)}}),H.addEventListener("click",V=>{let Y=V.target.closest("[data-dl-step]");if(Y){let le=Y.closest("[data-dl-stepper]");if(!le)return;let ce=le.getAttribute("data-dl-stepper"),pe=Number(oe[ce]??0)+Number(Y.getAttribute("data-dl-step"));xe(ce,pe);return}let X=V.target.closest("[data-dl-opt]");if(X){let le=X.closest("[data-dl-seg]");if(!le)return;let ce=le.getAttribute("data-dl-seg"),me=X.getAttribute("data-dl-opt");xe(ce,["safe_area","poll_vote_opacity"].indexOf(ce)!==-1?Number(me):me)}}),H.addEventListener("change",V=>{let Y=V.target.closest("[data-dl-toggle]");if(Y){xe(Y.getAttribute("data-dl-toggle"),Y.checked);return}let X=V.target.closest("[data-dl-range]");X&&xe(X.getAttribute("data-dl-range"),Number(X.value))}),H.addEventListener("input",V=>{let Y=V.target.closest("[data-dl-range]");if(!Y)return;let X=Y.getAttribute("data-dl-range"),le=H.querySelector(`[data-dl-value="${X}"]`);le&&(le.textContent=Y.value+"%")}),H.addEventListener("change",V=>{if(V.target.closest("[data-vi-toggle]")){de({enabled:V.target.checked});return}if(V.target.closest("[data-vi-ext]")){let Y=Array.from(H.querySelectorAll("[data-vi-ext]")).filter(X=>X.checked).map(X=>X.getAttribute("data-vi-ext"));de({extensions:Y});return}if(V.target.id==="viewer-images-hosts"){let Y=V.target.value.split(/[\s,]+/).filter(Boolean);de({hosts:Y})}}))}let z=null;function ee(){let H=document.getElementById(y);if(!H||!z)return;let V=H.querySelector("[data-vi-toggle]");V&&(V.checked=!!z.enabled),H.querySelectorAll("[data-vi-row]").forEach(le=>{le.style.display=z.enabled?"":"none"});let Y=H.querySelector("#viewer-images-hosts");Y&&document.activeElement!==Y&&(Y.value=(z.hosts||[]).join(`
`));let X=z.extensions||[];H.querySelectorAll("[data-vi-ext]").forEach(le=>{le.checked=X.indexOf(le.getAttribute("data-vi-ext"))!==-1})}async function ae(){try{let H=await fetch("/admin/viewer-images",{credentials:"same-origin"});if(!H.ok)return;z=await H.json(),ee()}catch(H){console.warn("[admin-display] viewer-images fetch failed:",H)}}function se(H){let V=H&&H.code;return V==="invalid_host"?m("viErrInvalidHost",{host:String(H.detail||"")}):V==="too_many_hosts"?m("viErrTooManyHosts",{max:H.max}):m("updateFailed")}async function de(H){try{let V=await window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}),Y=null;try{Y=await V.json()}catch{Y=null}if(!V.ok){window.showToast&&window.showToast(se(Y),!1),"hosts"in H||ee();return}z=Y;let X=document.getElementById("viewer-images-hosts");X&&"hosts"in H&&(X.value=(z.hosts||[]).join(`
`)),ee()}catch(V){ee(),console.warn("[admin-display] viewer-images update failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}}let oe={};function be(){let H=document.getElementById(y);H&&Object.entries(oe).forEach(([V,Y])=>{let X=H.querySelector(`[data-dl-value="${V}"]`);X&&(X.textContent=V==="max_tracks"?Number(Y)===0?m("dlMaxTracksAuto"):String(Y):String(Y)+"%");let le=H.querySelector(`[data-dl-range="${V}"]`);le&&document.activeElement!==le&&(le.value=String(Y));let ce=H.querySelector(`[data-dl-toggle="${V}"]`);ce&&(ce.checked=!!Y);let me=H.querySelector(`[data-dl-seg="${V}"]`);me&&me.querySelectorAll("[data-dl-opt]").forEach(pe=>{let ye=pe.getAttribute("data-dl-opt")===String(Y);pe.classList.toggle("is-active",ye),pe.setAttribute("aria-pressed",ye?"true":"false")})})}async function Te(){try{let H=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!H.ok)return;oe=await H.json(),be()}catch(H){console.warn("[admin-display] display-layer fetch failed:",H)}}async function xe(H,V){let Y=oe[H];oe[H]=V,be();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[H]:V})});if(!X.ok)throw new Error("display-layer "+X.status);oe=await X.json(),be()}catch(X){oe[H]=Y,be(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ie(){T.forEach(H=>{let V=document.getElementById(H);V&&V.setAttribute("data-admin-ui-replaced","1")})}let ne=null;function re(H,V){return H==="overlay"||V==="overlay"||H==="display"||V==="display"}function ue(H,V){return H==="viewer-config"||H==="viewer"||V==="viewer-config"||V==="viewer"}function Ie(H,V){if(!ue(H,V))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let X=ce=>Y.tabs.some(me=>me.slug===ce),le=X(V)?V:null;if(!le&&window.AdminTabs.resolveActiveTab){let ce=window.AdminTabs.resolveActiveTab("viewer",null);X(ce)&&(le=ce)}le&&(document.body.dataset.viewerConfigTab=le)}let Se=!1,Ee=!1;async function Fe(){let H=document.getElementById("sec-viewer-config-limits");if(!H||Se)return;Se=!0;let V=(Y,X)=>{let le=H.querySelector(Y);le&&(le.textContent=X==null?"\u2014":String(X))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let X=await Y.json(),le=X.rate_limits&&X.rate_limits.fire||{},ce=X.rate_limits&&X.rate_limits.totals||{},me=X.rate_limit_config&&X.rate_limit_config.fire||{},pe=Math.max(1,(X.server_time||0)-(X.server_started_at||0));V("[data-vc-rate-fp]",me.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",me.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let ye=(le.hits||0)/pe;V("[data-vc-avg-rate]",ye.toFixed(2)+"/s"),V("[data-vc-throttled]",le.violations||0),V("[data-vc-blocked]",ce.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{Se=!1}}let Ce=null;function we(H){let V=window.ServerI18n&&window.ServerI18n.currentLang;if(!V||V===Ce)return;let Y=Ce===null;if(Ce=V,Y)return;let X=H.querySelector("[data-dsp-fold]"),le=!!(X&&X.open),ce=document.createElement("div");ce.innerHTML=S(),H.replaceChildren(...ce.firstElementChild.childNodes);let me=H.querySelector("[data-dsp-fold]");me&&(me.open=le),s(),be(),ee()}function ve(){let H=document.querySelector(".admin-dash-grid"),V=document.getElementById(y);if(!H||!V)return;we(V);let Y=H.dataset.activeRoute||"live",X=H.dataset.activeLeaf||Y;Ie(Y,X);let le=document.body.dataset.viewerConfigTab||"defaults",ce=ue(Y,X),me=re(Y,X),pe=ce||me,ye=V.querySelector("[data-dsp-fold]");ye&&V.dataset.dspMode!==(me?"values":"audience")&&(ye.open=!me),V.dataset.dspMode=me?"values":"audience",V.style.display=pe?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(ke=>{let Ae=document.getElementById(ke);Ae&&(Ae.style.display=ce?"":"none")});let fe=document.getElementById("sec-viewer-config-info");fe&&(fe.style.display=ce?"":"none"),ce?Ee||(Ee=!0,Fe()):Ee=!1,re(Y,X)?w.metricsTimer||J():te(),ne=Y}function _e(){if(document.getElementById("sec-viewer-config-info"))return;let H=document.getElementById("settings-grid");if(!H)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let le=document.createElement("div");le.className="admin-vc-col-panel";let ce=document.createElement("div");ce.className="admin-vc-fields-head";let me=Y.filter(function(De){return De.on}).length,pe=Y.length-me;ce.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:me,hidden:pe}))+"</span>",le.appendChild(ce);let ye=document.createElement("div");ye.className="admin-vc-fields-list",Y.forEach(function(De){let Re=document.createElement("div");Re.className="admin-vc-field-row"+(De.blocked?" is-blocked":"");let He=document.createElement("span");He.className="admin-vc-field-dot"+(De.on?" is-on":""),Re.appendChild(He);let je=document.createElement("div");var qe="";De.pinned&&(qe='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),De.blocked&&(qe='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),je.innerHTML='<div class="admin-vc-field-label">'+f(De.k)+qe+'</div><div class="admin-vc-field-desc">'+f(De.desc)+"</div>",Re.appendChild(je);let Ne=document.createElement("button");if(Ne.type="button",Ne.className="admin-vc-toggle "+(De.on?"is-on":"is-off"),Ne.textContent=De.on?m("displayToggleShow"):m("displayToggleHide"),De.blocked||De.pinned)Ne.disabled=!0,Ne.className+=" disabled";else{var Oe=De.on;Ne.addEventListener("click",function(){Oe=!Oe,Ne.className="admin-vc-toggle "+(Oe?"is-on":"is-off"),Ne.textContent=m(Oe?"displayToggleShow":"displayToggleHide"),He.className="admin-vc-field-dot"+(Oe?" is-on":"")})}Re.appendChild(Ne),ye.appendChild(Re)}),le.appendChild(ye);let fe=document.createElement("div");fe.className="admin-vc-col-panel";var Ae=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(De,Re){return'<span class="admin-vc-swatch-dot" style="background:'+De+";border:"+(Re===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");fe.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Ae+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",X.appendChild(le),X.appendChild(fe);function Le(De,Re,He,je,qe,Ne){let Oe=Ne?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+De+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Oe+'">'+He+'<span class="admin-vc-limit-row__unit">'+(je||"")+"</span></div>"+(qe?'<div class="admin-vc-limit-row__hint">'+qe+"</div>":"")+"</div>"}let Me=document.createElement("div");Me.id="sec-viewer-config-limits",Me.className="admin-vc-limits-grid lg:col-span-2",Me.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+Le(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+Le(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+Le(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+Le(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+Le(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+Le(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+Le(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+Le(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let Pe=document.getElementById("sec-viewer-theme");Pe&&Pe.parentNode===H?(H.insertBefore(V,Pe),H.insertBefore(Me,Pe),H.insertBefore(X,Pe)):(H.appendChild(V),H.appendChild(Me),H.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),ve()}async function $e(){let H=document.getElementById("settings-grid");if(!H||document.getElementById(y)){ie();return}H.insertAdjacentHTML("beforeend",S()),W(),ie(),ve(),w.options||await Promise.all([E(),O()]),Te(),ae(),s()}function Be(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?$e():ie(),ve()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",ve),document.addEventListener("admin-route-applied",ve),document.addEventListener("admin-panel-rendered",()=>{$e(),ie(),_e(),ve()}),$e(),_e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Be):Be()})()});var ht=he(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let G=document.querySelector('meta[name="csrf-token"]');return G&&G.content||""}let T=window.DANMU_CONFIG||{},h=T.session||{logged_in:!1},f=T.settingRanges||{};function C(G,Q={}){let W={credentials:"same-origin",...Q},z=new Headers(Q.headers||{});return z.set("X-CSRF-Token",y()),W.headers=z,fetch(G,W)}window.csrfFetch=C;let j=5e3,F={at:0,data:null,promise:null};function $(){return F.data&&Date.now()-F.at<j}function m(){return $()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>(G&&(F.data=G,F.at=Date.now()),F.promise=null,G)).catch(()=>(F.promise=null,null))),F.promise)}function N(G){if(!$())return null;let Q=F.data[G];return Q&&typeof Q=="object"&&"_error"in Q?null:Q}window.__danmuAdminBootstrap={prime:m,get:N},m();let D={},B=null,w=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let L=Object.create(null);Object.assign(L,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let b={_key:G=>"admin:tab:"+G,get(G){try{return sessionStorage.getItem(this._key(G))||null}catch{return null}},set(G,Q){try{Q?sessionStorage.setItem(this._key(G),Q):sessionStorage.removeItem(this._key(G))}catch{}}};function x(G){let Q=(G||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!Q)return null;let W=Q[1],z=Q[2]||null,ee=null;if(!z){let oe=P[W];typeof oe=="string"?W=oe:oe&&typeof oe=="object"&&(W=oe.nav||W,ee=oe.tab||null)}let ae=L[W],se=W,de=null;if(typeof ae=="string"?se=ae:ae&&typeof ae=="object"&&(se=ae.nav||W,de=ae.tab||null),Q[1]!==se&&(x._warned||(x._warned=new Set),!x._warned.has(Q[1]))){x._warned.add(Q[1]);try{console.info("[admin] legacy route #/"+Q[1]+" \u2192 #/"+se+(z||de||ee?"/"+(z||de||ee):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:se,tab:z||de||ee,raw:W}}function q(G,Q){return Q?"#/"+G+"/"+Q:"#/"+G}let A={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function S(G,Q,W){if(W=W||G,!K[G]){let de=P[G];if(typeof de=="string")G=de;else if(de&&typeof de=="object")de.nav&&(G=de.nav),!Q&&de.tab&&(Q=de.tab);else{let oe=L[G];typeof oe=="string"?G=oe:oe&&typeof oe=="object"&&(oe.nav&&(G=oe.nav),!Q&&oe.tab&&(Q=oe.tab))}}if(G==="system"&&Q&&A[Q]){let de=A[Q];G=de.nav,Q=de.tab||null,W=G}let z=K[G]?G:"live",ee=window.AdminTabs,ae=ee?.hasTabsFor?.(z)?ee.resolveActiveTab(z,Q):null,se=ae?ee.foldFor(z,Q):null;return{route:z,tab:ae,rawName:W,fold:se?Q:null,foldSection:se?se.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:L,tabMemory:b,parseHash:x,buildHash:q,resolve(G){let Q=x(G);return Q?S(Q.nav,Q.tab,G.match(/^#\/([\w-]+)/)[1]):null}});var p=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,o=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:N};async function e(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),h.logged_in&&R()}catch(G){console.error("Get settings failed:",G),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function r(G){return/^#[0-9A-Fa-f]{6}$/.test(G)}function n(G){return r(G)?G:/^[0-9A-Fa-f]{6}$/.test(G)?"#"+G:(G.startsWith("#")||(G="#"+G),r(G)?G:"#38bdf8")}function d(G,Q){if(f[G]){let W=parseInt(Q);if(isNaN(W)||W<f[G].min||W>f[G].max)return showToast(ServerI18n.t("settingRangeError",{key:G,min:f[G].min,max:f[G].max}),!1),!1}return!0}function s(G,Q,W){if(!W||!Array.isArray(D[G]))return;let z=D[G][Q];G==="Color"&&typeof z=="string"&&(z=n(`#${z}`)),z!=null&&(W.value=String(z))}let t={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-widgets"]}};function c(){Object.values(t).forEach(G=>{let Q=document.getElementById(G.containerId);Q&&G.orderedIds.forEach(W=>{let z=document.getElementById(W);z&&z.parentElement!==Q&&Q.appendChild(z)})})}function g(){B&&(B.disconnect(),B=null),c(),B=new MutationObserver(()=>{c()}),B.observe(u,{childList:!0,subtree:!0})}async function a(G,Q,W,z=null){try{if(G==="Color"){if(!r(Q)){showToast(ServerI18n.t("colorFormatError"),!1),s(G,W,z);return}Q=Q.replace("#","")}else if((G==="Speed"||G==="Opacity"||G==="FontSize")&&!d(G,Q)){s(G,W,z);return}(await C("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:G,value:Q,index:W})})).ok?(Array.isArray(D[G])||(D[G]=[!1,"","",""]),D[G][W]=Q,showToast(`${G} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await e())}catch(ee){console.error("Error:",ee),showToast(`Update Error: ${ee.message}`,!1),await e()}}async function i(G,Q){try{let W=await C("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:G,enabled:Q})}),z=await W.json().catch(()=>({}));if(W.ok)Array.isArray(D[G])||(D[G]=[!1,"","",""]),D[G][0]=Q,showToast(`${G} ${ServerI18n.t("settingsUpdated")}`),R();else{let ee=document.getElementById(`toggle-${G}`);ee&&(ee.checked=!Q),showToast(z.error||ServerI18n.t("updateFailed"),!1)}}catch(W){console.error("Error:",W);let z=document.getElementById(`toggle-${G}`);z&&(z.checked=!Q),showToast(`Update Error: ${W.message}`,!1)}}let u=document.getElementById("app-container"),v=document.getElementById("toast-container"),k=(G,Q=500)=>"requestIdleCallback"in window?window.requestIdleCallback(G,{timeout:Q}):setTimeout(G,Q);async function I(){let G=parseInt(document.getElementById("historyHours")?.value||"24");try{let[Q,W]=await Promise.all([fetch(`/admin/stats/hourly?hours=${G}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${G}&limit=10`,{credentials:"same-origin"})]);if(!Q.ok||!W.ok)return;let z=await Q.json(),ee=await W.json(),ae=document.getElementById("statsDashboard");if(!ae)return;let se=z.distribution||[],de=ee.topTexts||[],oe=Math.max(1,...se.map(ne=>ne.count)),be=se.reduce((ne,re)=>ne+(re.count||0),0),Te=se.filter(ne=>ne.count>0).length,xe=se.map(ne=>`<div class="chart-bar" style="height: ${Math.round(ne.count/oe*100)}%" title="${o(ne.hour)}: ${ne.count}"><span class="chart-label">${o(ne.hour.slice(-5,-3))}</span></div>`).join(""),ie=de.map((ne,re)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${re+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${o(ne.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ne.count}</td></tr>`).join("");ae.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${be}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${Te}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${G}h window</span>
            </div>
            <div class="stats-chart">${xe||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${de.length?`<table class="w-full text-xs"><tbody>${ie}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(Q){console.error("Load stats error:",Q)}}window._loadStats=I,window.csrfFetch=C,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=u,window.__adminCtx.getSettings=()=>D;function _(){u&&(u.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function M(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():_()}function R(){let G=p(),Q=(Te,xe=!1)=>G[Te]!==void 0?G[Te]:xe,W=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Te=>Array.isArray(D[Te])&&D[Te][0]===!0).length,z=D.Layout&&D.Layout[3]?o(String(D.Layout[3]).replace(/_/g," ")):"scroll",ee=D.FontFamily&&D.FontFamily[3]?o(String(D.FontFamily[3])):"NotoSansTC",ae=Te=>Te.map(xe=>`<span style="height:${xe*10}%;opacity:${.3+xe*.08}"></span>`).join(""),se=z&&z!=="off",de=window.location.port||(window.location.protocol==="https:"?"443":"80");u.innerHTML=`
                    <div class="admin-dash-grid" data-active-route="dashboard">
                        <aside class="admin-dash-sidebar" aria-label="Admin navigation">
                            <!-- 2026-09-06 \u8A2D\u8A08\u7A3F 06\uFF1A\u5074\u6B04\u9802\u7AEF\uFF1D app icon 28px \uFF0B
                                 \u300CDanmu Fire\u300D15px 700\u3002\u539F\u672C\u662F 28px \u7684 Bebas \u5168\u5927\u5BEB
                                 \u9752\u8272\u5927\u6A19\uFF0B\u7B49\u5BEC\u300CADMIN \xB7 v5.4.0\u300D\u526F\u6A19\uFF0C\u5169\u884C\u52A0\u8D77\u4F86\u4F54\u6389
                                 \u5074\u6B04\u6700\u4E0A\u9762 70px\uFF0C\u537B\u53EA\u5728\u8AAA\u4E00\u4EF6\u6240\u6709\u4EBA\u90FD\u5DF2\u7D93\u77E5\u9053\u7684\u4E8B\u3002
                                 \u7248\u672C\u865F\u79FB\u5230\u300C\u7CFB\u7D71\u300D\u9801\uFF08\u8A2D\u8A08\u7A3F 08 \xB7 S1\uFF09\u3002 -->
                            <div class="admin-dash-brand">
                                <img class="admin-dash-brand-icon" src="/static/icon.png" alt="" width="28" height="28" />
                                <span class="admin-dash-brand-name">Danmu Fire</span>
                            </div>
                            <nav class="admin-dash-nav" role="tablist" aria-label="Admin pages">
                                <!-- IA v6 grouped nav (2026-07-28): 4-section structure
                                     organised on a frequency + object axis \u2014 \u5834\u4E2D (what you
                                     touch while a session runs) / \u5834\u524D (the one sit-down
                                     before it) / \u7DAD\u904B (non-realtime upkeep) / \u64F4\u5145
                                     (extensibility surfaces). Supersedes the v4 5-section
                                     abstract grouping (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408), whose
                                     "\u8A2D\u5B9A" had become a grab bag and whose "\u6574\u5408" held
                                     backup. No route slugs changed \u2014 this is grouping and
                                     labels only.

                                     Items that resolve to alias targets (themes/widgets/
                                     plugins/fonts/audit/extensions/webhooks/api-tokens/
                                     backup/ratelimit) navigate via _routeAliases;
                                     applyRoute() resolves them. The active button matches
                                     the URL's raw slug so the clicked item stays
                                     highlighted even after alias redirect. -->

                                                                <!-- IA v8 grouped nav\uFF082026-08-19\uFF0C\u8A2D\u8A08\u7A3F 07\u300CAdmin \u5404\u9801\u5957\u7528\u300D\uFF09\uFF1A
                                     3 \u5340 12 \u5217\uFF0C\u53D6\u4EE3 v7 \u7684 4 \u5340 15 \u5217\u3002\u5206\u7D44\u8EF8\u7DDA\u5F9E\u300C\u983B\u7387\xD7\u5C0D\u8C61\u300D\u6539\u6210
                                     \u300C\u6D3B\u52D5\u7576\u4E0B / \u6D3B\u52D5\u4E4B\u524D / \u8207\u6D3B\u52D5\u7121\u95DC\u300D\u2014\u2014\u4E3B\u6301\u4EBA\u554F\u7684\u662F\u300C\u73FE\u5728\u8981\u7528\u9084\u662F
                                     \u5148\u8A2D\u597D\u300D\uFF0C\u4E0D\u662F\u300C\u9019\u529F\u80FD\u5C6C\u65BC\u54EA\u4E00\u985E\u300D\u3002

                                     \u5169\u500B\u63D0\u5347\uFF1Aoverlay\uFF08\u986F\u793A\u5C64\uFF09\u8207 security\uFF08\u5B89\u5168\uFF09\u672C\u4F86\u5C31\u662F first-class
                                     route\uFF0C\u53EA\u662F\u4E0D\u5728\u5074\u6B04\uFF1B\u8A2D\u8A08\u7A3F\u628A\u5B83\u5011\u653E\u56DE\u4F86\u3002

                                     \u4E94\u500B\u964D\u7D1A\uFF1Awidgets / system / plugins / webhooks / api-tokens \u96E2\u958B\u5074\u6B04
                                     \u4F46**\u8DEF\u7531\u5168\u90E8\u4FDD\u7559**\u2014\u2014\u6DF1\u9023\u7D50\u3001\u2318K\u3001\u65E2\u6709\u66F8\u7C64\u90FD\u7167\u5E38\uFF0C\u53EA\u662F\u4E0D\u518D\u5404\u4F54\u4E00\u5217\u3002
                                     \u5B83\u5011\u7684\u5165\u53E3\u6536\u5728\u300C\u64F4\u5145\u300D\u9019\u500B hub \u9801\u3002

                                     \u547D\u540D\u53BB\u8853\u8A9E\u5316\uFF1A\u6548\u679C\u5EAB .dme \u2192 \u52D5\u756B\u6548\u679C\uFF08\u526F\u6A94\u540D\u53EA\u5728\u532F\u5165\u6642\u624D\u9700\u8981\u51FA\u73FE\uFF09\u3001
                                     \u98A8\u683C\u4E3B\u984C\u5305 \u2192 \u4E3B\u984C\u3001\u7D20\u6750\u5EAB \u2192 \u7D20\u6750\u3001Desktop \u63A7\u5236 \u2192 \u986F\u793A\u5C64\u3002 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupLive">\u6D3B\u52D5\u4E2D</div>
                                <button type="button" class="admin-dash-nav-row is-active" data-route="live" role="tab" aria-selected="true">
                                    <span class="admin-dash-nav-icon">\u25C9</span>
                                    <span data-i18n="adminNavLive">\u63A7\u5236\u53F0</span>
                                    <span class="admin-dash-nav-badge" data-count-messages hidden>\u2014</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="overlay" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25A3</span>
                                    <span data-i18n="adminNavOverlay">\u986F\u793A\u5C64</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="polls" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25C8</span>
                                    <span data-i18n="adminNavPolls">\u6295\u7968</span>
                                    <span class="admin-dash-nav-live"></span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="moderation" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u2298</span>
                                    <span data-i18n="adminNavModeration">\u5BE9\u6838</span>
                                    <span class="admin-dash-nav-badge" data-count-blacklist hidden>\u2014</span>
                                </button>

                                <!-- \u5916\u89C0\u8207\u7D20\u6750\uFF1A\u5148\u662F\u89C0\u773E\u770B\u5230\u7684\u8868\u9762\uFF0C\u518D\u662F\u53EF\u4E0A\u50B3\u7684\u7D20\u6750\u5EAB\u3002 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupAppearance">\u5916\u89C0\u8207\u7D20\u6750</div>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25D0</span>
                                    <span data-i18n="adminNavViewer">\u89C0\u773E\u9801</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="effects" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u2726</span>
                                    <span data-i18n="adminNavEffects">\u52D5\u756B\u6548\u679C</span>
                                    <span class="admin-dash-nav-badge" data-count-effects>\u2014</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="themes" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u2756</span>
                                    <span data-i18n="adminNavThemes">\u4E3B\u984C</span>
                                    <span class="admin-dash-nav-badge" data-count-themes hidden>\u2014</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="assets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25A6</span>
                                    <span data-i18n="adminNavAssets">\u7D20\u6750</span>
                                </button>
                                <!-- 2026-09-06 \u8A2D\u8A08\u7A3F 08/14\uFF1A\u5C0F\u5DE5\u5177\uFF08\u8A08\u5206\u677F\uFF0F\u8DD1\u99AC\u71C8\uFF0F\u6587\u5B57\u6A19\u7C64\uFF09
                                     \u56DE\u5230\u5074\u6B04\u3002v8 \u628A\u5B83\u964D\u7D1A\u6536\u9032\u300C\u64F4\u5145\u300Dhub\uFF0C\u4F46\u90A3\u662F\u7D66 IT \u4EBA\u54E1\u7684
                                     \u5340\u57DF\u2014\u2014\u5C0F\u5DE5\u5177\u662F\u4E3B\u6301\u4EBA\u5728\u6D3B\u52D5\u524D\u6703\u64FA\u4E00\u6B21\u7684\u6771\u897F\uFF0C\u8DDF\u4E3B\u984C\u3001\u7D20\u6750
                                     \u540C\u4E00\u985E\uFF0C\u4E0D\u8A72\u8DDF Webhook \u6DF7\u5728\u4E00\u8D77\u3002 -->
                                <button type="button" class="admin-dash-nav-row" data-route="widgets" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25A5</span>
                                    <span data-i18n="adminNavWidgets">\u5C0F\u5DE5\u5177</span>
                                </button>

                                <!-- \u7CFB\u7D71\uFF1A\u8207\u6D3B\u52D5\u7576\u4E0B\u7121\u95DC\u7684\u7DAD\u904B\u3002\u5371\u96AA\u64CD\u4F5C\u96C6\u4E2D\u5728\u5099\u4EFD\u8207\u9084\u539F\u9801\u6700\u5E95\u3002 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupSystem">\u7CFB\u7D71</div>
                                <!-- 2026-10-29\uFF1A\u9019\u500B\u7FA4\u7D44\u4EE5\u524D**\u6C92\u6709\u300C\u7CFB\u7D71\u300D\u9019\u4E00\u5217**\u3002
                                     \u5206\u7D44\u6A19\u7C64\u5BEB\u8457\u300C\u7CFB\u7D71\u300D\uFF0C\u5E95\u4E0B\u56DB\u5217\u537B\u90FD\u4E0D\u662F\u7CFB\u7D71\u9801\uFF1B
                                     \u7CFB\u7D71\u7E3D\u89BD\uFF0FWCAG\uFF0F\u95DC\u65BC\uFF0FFire Token \u53EA\u80FD\u9760 \u2318K \u6216\u76F4\u93C8
                                     \u624D\u5230\u5F97\u4E86\uFF08\u5168\u5EAB\u6C92\u6709\u4EFB\u4F55\u5074\u6B04\u5165\u53E3\uFF09\u3002\u88DC\u4E0A\u9019\u4E00\u5217\uFF0C
                                     \u5B83\u540C\u6642\u662F\u90A3\u56DB\u500B\u5206\u9801\u7684\u5BB6\u3002
                                     2026-11-14\uFF1A\u5099\u4EFD\u8207\u9084\u539F\uFF0F\u5B89\u5168\uFF0F\u64F4\u5145\u4E09\u5217\u4F75\u9032\u4F86\u2014\u2014
                                     \u5B83\u5011\u540C\u6642\u662F\u5074\u6B04\u4E00\u5217\u8207\u7CFB\u7D71\u9801\u7684\u5C0E\u5411\u5217\uFF0C\u540C\u4E00\u4EF6\u4E8B\u5169\u4E09\u500B
                                     \u5165\u53E3\u3002\u73FE\u5728\u53EA\u5F9E\u7CFB\u7D71\u9801\u7684\u5206\u9801\u5217\u9032\u53BB\u3002 -->
                                <button type="button" class="admin-dash-nav-row" data-route="system" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25EB</span>
                                    <span data-i18n="adminNavSystem">\u7CFB\u7D71</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25F7</span>
                                    <span data-i18n="adminNavHistory">\u7D00\u9304\u8207\u532F\u51FA</span>
                                </button>
</nav>
                            <!-- 2026-08-19 \u8A2D\u8A08\u7A3F 03\uFF1A\u5074\u6B04 TELEMETRY \u5340\u79FB\u9664
                                 \uFF08CPU/MEM/WS/RATE \u56DB\u689D\u5373\u6642\u9577\u689D\u662F\u7D66\u7DAD\u904B\u770B\u7684\u5100\u8868\uFF0C
                                 \u4E3B\u6301\u4EBA\u5728\u6D3B\u52D5\u4E2D\u4E0D\u6703\u770B\uFF0C\u537B\u6C38\u4E45\u4F54\u8457\u5074\u6B04\u5E95\u90E8\uFF09\u3002
                                 \u7CFB\u7D71\u5065\u5EB7\u5EA6\u6539\u5728\u300C\u7CFB\u7D71\u300D\u9801\u770B\u3002\u9019\u88E1\u63DB\u6210\u5E33\u865F\u5217\uFF0C
                                 \u767B\u51FA\u5F9E\u9802\u6B04\u642C\u4E0B\u4F86\u2014\u2014\u5B83\u662F\u4F4E\u983B\u4E14\u4E0D\u53EF\u9006\u7684\u52D5\u4F5C\uFF0C
                                 \u4E0D\u8A72\u548C\u9AD8\u983B\u63A7\u5236\u9805\u4E26\u6392\u5728\u53F3\u4E0A\u3002 -->
                            <div class="admin-dash-account">
                                <span class="admin-dash-account-avatar" aria-hidden="true">\u7BA1</span>
                                <span class="admin-dash-account-name">${ServerI18n.t("adminAccountLabel")}</span>
                                <button type="button" id="logoutButton" class="admin-dash-account-logout">${ServerI18n.t("logout")}</button>
                            </div>
                        </aside>

                        <div class="admin-dash-main">
                            <header class="admin-dash-topbar">
                                <!-- 2026-08-19 \u8A2D\u8A08\u7A3F 07\uFF1A\u9801\u9996\u6536\u6582\u6210\u300C\u6A19\u984C + \u4E00\u884C\u8AAA\u660E +
                                     \u53F3\u5074\u6700\u591A 1 \u4E3B 1 \u6B21\u52D5\u4F5C\u300D\u3002\u9EB5\u5305\u5C51\u8207 kicker \u4E00\u4F75\u79FB\u9664\u2014\u2014
                                     \u4F4D\u7F6E\u7531\u5074\u6B04\u9AD8\u4EAE\u8868\u9054\uFF0Ckicker \u7684\u82F1\u6587\u4EE3\u865F\u5C0D\u4E3B\u6301\u4EBA\u6C92\u6709\u8CC7\u8A0A\u91CF\u3002
                                     _renderBreadcrumb / kicker \u7684\u5BEB\u5165\u7AEF\u90FD\u6709 null \u9632\u8B77\uFF0C
                                     \u79FB\u6389\u7BC0\u9EDE\u4E0D\u6703\u70B8\u3002 -->
                                <div class="admin-dash-topbar-title">
                                    <h1 data-route-title>\u63A7\u5236\u53F0</h1>
                                </div>
                                <div class="admin-dash-topbar-actions">
                                    <!-- 2026-09-07 \u8A2D\u8A08\u7A3F 07/08\uFF1A\u6BCF\u4E00\u9801\u7684\u4E3B\u8981\u52D5\u4F5C\u90FD\u5728\u9801\u9996\u53F3\u5074
                                         \uFF08\u4E3B\u984C\u300C\u65B0\u4E3B\u984C\u300D\u3001\u7D20\u6750\u300C\u4E0A\u50B3\u300D\u3001\u5C0F\u5DE5\u5177\u300C\u65B0\u589E\u5C0F\u5DE5\u5177\u300D\u3001
                                         \u64F4\u5145\u300C\u65B0\u589E Webhook\u300D\uFF09\u3002\u4F46\u5340\u584A\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642
                                         \u6703\u6574\u584A\u4F75\u9032 topbar\uFF0C\u52D5\u4F5C\u653E\u5728\u88E1\u9762\u5C31\u8DDF\u8457\u6D88\u5931\u4E86\u3002\u9019\u500B\u63D2\u69FD
                                         \u63A5\u4F4F\u5B83\u5011\uFF1A_dedupSectionTitles \u6703\u628A\u88AB\u4F75\u6389\u7684\u9801\u9996\u88E1\u7684
                                         .admin-ui-page-actions \u642C\u904E\u4F86\uFF0C\u63DB\u8DEF\u7531\u6642\u518D\u642C\u56DE\u53BB\u3002 -->
                                    <div class="admin-dash-topbar-action" data-route-action></div>
                                    <!-- 2026-08-19 \u8A2D\u8A08\u7A3F 03\uFF1A\u9802\u6B04\u6536\u6582\u6210\u300C\u72C0\u614B + \u641C\u5C0B\u5716\u793A\u300D\u3002
                                         \xB7 \u2318K \u63D0\u793A\u6587\u5B57\u79FB\u9664\u3001\u53EA\u7559\u5716\u793A\u2014\u2014\u63D0\u793A\u6587\u5B57\u5C0D\u7528\u904E\u4E00\u6B21\u7684\u4EBA
                                           \u662F\u6C38\u4E45\u566A\u97F3\uFF0C\u5716\u793A\u672C\u8EAB\u5DF2\u8DB3\u5920\u3002
                                         \xB7 \u8A9E\u8A00\u9078\u55AE\u79FB\u81F3\u300C\u7CFB\u7D71\u300D\u9801\uFF08\u4F4E\u983B\u8A2D\u5B9A\uFF0C\u4E0D\u8A72\u5E38\u99D0\u9802\u6B04\uFF09\u3002
                                         \xB7 \u767B\u51FA\u79FB\u81F3\u5074\u6B04\u5DE6\u4E0B\u5E33\u865F\u5217\uFF08\u4F4E\u983B\u4E14\u4E0D\u53EF\u9006\uFF0C\u4E0D\u8A72\u8207\u9AD8\u983B
                                           \u63A7\u5236\u9805\u4E26\u6392\u5728\u53F3\u4E0A\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-palette
                                         aria-label="${o(ServerI18n.t("adminSearchHint"))}"
                                         title="${o(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${o(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${o(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${se?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${o(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${o(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${o(se?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
                                        <span class="admin-dash-broadcast-go" aria-hidden="true">\u2192</span>
                                    </button>
                                </div>
                                <!-- 2026-07-30\uFF1Anote \u5F9E\u6A19\u984C\u584A\u79FB\u51FA\u4F86\u3001\u653E\u6210 topbar \u7684
                                     \u6EFF\u5BEC\u7B2C\u4E8C\u5217\uFF08flex-basis:100% \u5F37\u5236\u63DB\u884C\uFF09\u3002\u7559\u5728\u6A19\u984C\u584A\u88E1
                                     \u6703\u628A\u584A\u6490\u5BEC\u3001\u628A\u53F3\u5074\u63A7\u5236\u9805\u64E0\u5230\u4E0B\u4E00\u884C\u3002 -->
                                <p class="admin-dash-topbar-note" data-route-note hidden></p>
                            </header>

                            <!-- Session banner \u2014 hidden until JS populates -->
                            <div id="admin-session-banner" class="admin-session-banner" data-route-view="dashboard" hidden></div>

                            <!-- KPI strip \u2014 design v4 live-console.jsx:85 spec.
                                 4 tiles: MESSAGES (cyan) / PEAK (amber) / UNIQUE FP
                                 (lime) / SESSION (text). Each tile has a 20-bar
                                 sparkline; the last bar is the current bucket
                                 rendered at full opacity, prior bars fade. Color
                                 modifier classes (is-cyan/is-amber/is-lime/is-text)
                                 colorize the value + sparkline so the strip reads
                                 as a HUD telemetry row. Sparkline contents are
                                 hydrated by admin-dashboard.js refreshKpi(). -->
                            <!-- 2026-09-06 \u8A2D\u8A08\u7A3F 06 \xB7 K1/K2\uFF1A\u63A7\u5236\u53F0\u9996\u5C4F\uFF1D\u4E09\u584A\uFF0C\u4E00\u5C4F\u770B\u5B8C\u3002
                                 \u2460 \u986F\u793A\u5C64\u958B\u95DC\u5361\uFF08\u5DE6\u534A\uFF09\u2461 \u4E00\u884C\u6578\u5B57\uFF08\u53F3\u534A\uFF09\u2462 \u5373\u6642\u8A0A\u606F\u6D41\u3002

                                 \u539F\u672C\u662F\u56DB\u5F35 KPI \u5361\uFF0C\u6BCF\u5F35\u5E36 Bebas \u5927\u6578\u5B57 \uFF0B 20 \u689D sparkline
                                 \uFF0B\u4E00\u884C delta\u3002sparkline \u5728 20 \u500B\u8CC7\u6599\u9EDE\u4E0A\u756B\u4E0D\u51FA\u8DA8\u52E2\uFF0C\u53EA\u662F
                                 \u8B93\u6BCF\u5F35\u5361\u9577\u9AD8\u5230 154px\u2014\u2014\u56DB\u5F35\u52A0\u8D77\u4F86\u5C31\u628A\u8A0A\u606F\u6D41\u63A8\u5230\u647A\u7DDA\u4E0B\u9762\uFF0C
                                 \u800C\u4E3B\u6301\u4EBA\u76E4\u4E2D\u8981\u770B\u7684\u5C31\u662F\u8A0A\u606F\u6D41\u3002\u6578\u5B57\u7E2E\u6210\u4E00\u884C\u3001\u53BB\u6389 sparkline
                                 \u4E4B\u5F8C\uFF0C\u958B\u95DC\u5361\uFF0B\u6578\u5B57\uFF0B\u8A0A\u606F\u6D41\u525B\u597D\u4E00\u5C4F\u3002 -->
                            <section class="admin-cockpit" data-route-view="dashboard">
                                <!-- \u2460 \u986F\u793A\u5C64\uFF1A\u5168\u9801\u552F\u4E00\u7684\u72C0\u614B\u986F\u793A\u8207\u4E3B\u8981\u52D5\u4F5C -->
                                <div class="admin-cockpit-card admin-cockpit-overlay" data-cockpit-overlay>
                                    <span class="admin-cockpit-overlay-icon" aria-hidden="true">\u25A3</span>
                                    <div class="admin-cockpit-overlay-body">
                                        <div class="admin-cockpit-overlay-title" data-i18n="adminNavOverlay">\u986F\u793A\u5C64</div>
                                        <div class="admin-cockpit-overlay-status" role="status" aria-live="polite">
                                            <span class="admin-cockpit-dot" data-cockpit-dot></span>
                                            <span data-cockpit-status>\u2014</span>
                                        </div>
                                    </div>
                                    <!-- \u8207\u986F\u793A\u5C64\u9801\u540C\u540D\u3001\u540C\u78BA\u8A8D\u884C\u70BA\uFF08admin-broadcast.js \u7684
                                         AdminOverlayControl\uFF09\u3002\u6E05\u7A7A\u4E0D\u53EF\u5FA9\u539F\uFF0C\u8207\u4E3B\u52D5\u4F5C\u62C9\u958B\u8DDD\u96E2\u3002 -->
                                    <div class="admin-cockpit-overlay-actions">
                                        <button type="button" class="admin-ui-action is-danger" data-cockpit-action="clear"
                                                data-i18n="broadcastClearScreenBtn">\u6E05\u7A7A\u756B\u9762</button>
                                        <button type="button" class="admin-ui-action is-primary" data-cockpit-action="toggle"
                                                data-i18n="broadcastBigPause">\u66AB\u505C\u986F\u793A</button>
                                    </div>
                                </div>

                                <!-- \u2461 \u4E00\u884C\u6578\u5B57\uFF08tabular-nums\uFF09\uFF0B\u5169\u9846\u6B21\u8981\u52D5\u4F5C -->
                                <div class="admin-cockpit-card admin-cockpit-stats">
                                    <div class="admin-cockpit-stat" data-kpi="messages">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiMsgTotal")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>\u2014</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="peak">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiPeakPerMin")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>\u2014</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="unique-fp">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiUniqueFp")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>\u2014</div>
                                    </div>
                                    <div class="admin-cockpit-stat" data-kpi="session">
                                        <div class="admin-cockpit-stat-label">${ServerI18n.t("dashKpiSessionDuration")}</div>
                                        <div class="admin-cockpit-stat-value" data-kpi-value>\u2014</div>
                                    </div>
                                    <div class="admin-cockpit-stats-actions">
                                        <button type="button" class="admin-ui-action" data-cockpit-action="idle-qr"
                                                data-i18n="adminCockpitShowQr">\u986F\u793A\u5165\u5834 QR</button>
                                        <button type="button" class="admin-ui-action" data-cockpit-action="poll"
                                                data-i18n="adminCockpitStartPoll">\u958B\u59CB\u6295\u7968\u2026</button>
                                    </div>
                                </div>
                            </section>

                            <!-- Dashboard summary grid \u2014 design v4 live-console.jsx:80
                                 12-col grid: LIVE FEED (7) + QUICK ACTIONS (3) +
                                 MY ACTIONS (2). The QUICK ACTIONS panel stacks
                                 4 sub-panels (Effects/Poll/Blacklist/Broadcast)
                                 mapped to F1\u2013F4 shortcuts in the prototype. Active
                                 poll status and quick-poll launch live INSIDE the
                                 \u2461 POLL sub-panel so polls are not a top-level card
                                 anymore \u2014 full poll editing lives on /polls.
                                 Widgets card was removed from dashboard; widget
                                 management is on /widgets. -->

                            <div id="settings-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- display setting cards -->
                            </div>
                            <div id="moderation-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- moderation sections -->
                            </div>
                            <div id="assets-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6 admin-route-sections">
                                <!-- assets sections -->
                            </div>
                            <!-- 2026-11-14\uFF1A\u539F\u672C\u9019\u88E1\u9084\u6709\u4E00\u500B\u88DD Webhook\uFF0F\u5B9A\u6642\u767C\u9001\u7684
                                 \u300C\u9032\u968E\u300D<details open> \u5BB9\u5668\uFF08summary \u662F sr-only\uFF09\u3002
                                 \u5169\u584A\u4F75\u9032\u300C\u7CFB\u7D71 \u203A \u64F4\u5145\u300D\u5F8C\u8DDF\u63D2\u4EF6\u3001API \u91D1\u9470\u540C\u4E00\u500B\u5BB9\u5668
                                 \uFF08settings-grid\uFF09\uFF0C\u756B\u9762\u9806\u5E8F\u624D\u7531 TabConfig \u4E00\u8655\u6C7A\u5B9A\u3002 -->

                            <!-- 2026-09-06 \u8A2D\u8A08\u7A3F 06\uFF1AQuick Actions F1\u2013F4 \u8207 My Actions \u6574\u5340\u79FB\u9664\u3002
                                 \u63A7\u5236\u53F0\u9996\u5C4F\u61C9\u8A72\u53EA\u6709\u4E09\u584A\u2014\u2014\u986F\u793A\u5C64\u958B\u95DC\u3001\u4E00\u884C\u6578\u5B57\u3001\u5373\u6642\u8A0A\u606F\u6D41\u3002
                                 F1\u2013F4 \u90A3\u56DB\u5F35\u5E38\u99D0\u9762\u677F\uFF08\u6548\u679C\uFF0F\u6295\u7968\uFF0F\u9ED1\u540D\u55AE\uFF0F\u5EE3\u64AD\uFF09\u662F\u300C\u56DB\u500B\u5165\u53E3\u7684
                                 \u6377\u5F91\u300D\uFF0C\u4F46\u4E3B\u6301\u4EBA\u771F\u6B63\u8981\u7528\u6642\u662F\u6709\u660E\u78BA\u76EE\u6A19\u7684\uFF0C\u2318K \u547D\u4EE4\u9762\u677F\u4E00\u6B21
                                 \u5C31\u5230\uFF08\u8A2D\u8A08\u7A3F 15 \xB7 CK1 \u660E\u8B1B\u300C\u53D6\u4EE3 F1\u2013F4\u300D\uFF09\uFF1BMy Actions \u662F\u7A3D\u6838
                                 \u7528\u7684\u56DE\u9867\uFF0C\u5BB6\u5728\u300C\u7D00\u9304\u8207\u532F\u51FA \u203A \u64CD\u4F5C\u7D00\u9304\u300D\u3002 -->
                        </div>
                    </div>
                `;let oe=document.getElementById("settings-grid"),be=D.Effects?D.Effects[0]!==!1:!0;oe.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${be}">${be?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${be}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${be?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),oe.insertAdjacentHTML("beforeend",`
      <div id="sec-effects-mgmt" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u56DB\u683C KPI \u689D\u64A4\u6389\u3002\u7A3F\u4E0A\u9801\u9996\u53EA\u7528\u4E00\u53E5
             \u300CN / M \u958B\u653E\u7D66\u89C0\u773E\u300D\u8B1B\u6E05\u695A\u540C\u4E00\u4EF6\u4E8B\u2014\u2014TOTAL/CATEGORIES \u5C0D\u4E3B\u6301\u4EBA
             \u4E0D\u69CB\u6210\u6C7A\u7B56\u8CC7\u8A0A\u3002data-eflib-* \u5951\u7D04\u4FDD\u7559\u5728\u9801\u9996\u90A3\u4E00\u53E5\u88E1\uFF0C
             admin-effects-mgmt.js \u7684\u66F4\u65B0\u7AEF\u4E0D\u5FC5\u6539\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_effects")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("fxPageNote")}</p>
          <div class="admin-ui-page-actions">
            <span class="admin-ui-summary"><span data-eflib-active>\u2014</span> / <span data-eflib-total>\u2014</span> ${ServerI18n.t("fxOpenToAudience")}</span>
            <span hidden data-eflib-cats>\u2014</span><span hidden data-eflib-user>\u2014</span>
          </div>
        </div>
        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:16px">

            <!-- TPL-B \u5DE5\u5177\u5217\uFF1A\u6FFE\u93E1 chips \uFF0B \u52D5\u4F5C\u9760\u53F3\uFF0C\u4E00\u689D\u89E3\u6C7A -->
            <!-- \u6D41\u7A0B\u6392\u5E8F\uFF082026-07-30 \u4F7F\u7528\u8005\u539F\u5247\uFF1A\u8981\u5148\u505A\u7684\u653E\u4E0A\u9762\uFF09\u2014\u2014
                 \u9AD8\u983B\u7684\u300C\u7BA1\u7406\u73FE\u6709\u6548\u679C\u300D\u7DCA\u8DDF\u5DE5\u5177\u5217\uFF1B\u4F4E\u983B\u7684\u300C\u4E0A\u50B3\u300D\u964D\u7D1A\u70BA
                 \u5DE5\u5177\u5217\u52D5\u4F5C\uFF08label \u89F8\u767C\u540C\u4E00\u500B #effectUploadInput\uFF09\uFF0C
                 \u62D6\u653E\u76EE\u6A19\u5347\u7D1A\u70BA\u6574\u500B main \u5340\uFF08handler \u5728 effects-mgmt\uFF09\u3002 -->
            <div class="hud-filter-row admin-effects-toolbar" id="effectsFilterRow">
              <span class="hud-filter-chip is-active" data-effect-filter="ALL">${ServerI18n.t("fxChipAll")} \u2014</span>
              <span class="admin-effects-toolbar__spacer" data-toolbar-spacer></span>
              <label for="effectUploadInput" class="admin-ui-action is-primary admin-effects-action admin-effects-upload-btn" title="${ServerI18n.t("fxUploadTitle")}">${ServerI18n.t("fxUploadBtn")}</label>
              <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
              <button id="effectReloadBtn" class="admin-ui-action admin-effects-action" type="button">${ServerI18n.t("reload")}</button>
            </div>
            <div id="effectsList" class="hud-effects-grid">
              <span class="text-xs" style="color:var(--admin-text-dim);grid-column:1 / -1">${ServerI18n.t("loadingEffectsAdmin")}</span>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:14px;position:sticky;top:0">
            <div class="hud-inspector" id="effectsInspector">
              <div class="hud-inspector-head">
                <span id="effectsInspectorTitle" style="font-size:13px;font-weight:600;color:var(--color-text-strong)">\u2014</span>
              </div>
              <pre class="hud-inspector-body" id="effectsInspectorBody"># ${ServerI18n.t("fxYamlIdle")}</pre>
              <div class="hud-inspector-foot">
                <button type="button" class="admin-ui-action admin-effects-inspector-action" id="effectsInspectorReload" style="flex:1" disabled>${ServerI18n.t("uiReload")}</button>
                <button type="button" class="admin-ui-action is-primary admin-effects-inspector-action" id="effectsInspectorEdit" style="flex:1" disabled>${ServerI18n.t("lbEdit")}</button>
              </div>
            </div>

            <!-- LIBRARY STATS \u5DF2\u5347\u683C\u70BA\u9801\u9802 KPI \u689D\uFF08TPL-B\uFF09\uFF0C\u6B64\u8655\u4E0D\u518D\u91CD\u8907 -->

            <!-- v5 Batch 12-5: Stacking rules info card -->
            <div class="admin-ui-group admin-eflib-card">
              <div class="admin-eflib-label">${ServerI18n.t("fxStackingRulesLabel")}</div>
              <ul class="admin-eflib-rules">
                <li>\xB7 ${ServerI18n.t("fxStackSameType")}</li>
                <li>\xB7 ${ServerI18n.t("fxStackCrossType")}</li>
                <li>\xB7 ${ServerI18n.t("fxStackViewerPick")}</li>
                <li>\xB7 ${ServerI18n.t("fxStackPriority")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    `),oe.insertAdjacentHTML("beforeend",`
      <div id="sec-themes" class="hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-i18n="styleThemePacks">${ServerI18n.t("styleThemePacks")}</h2>
          <p class="admin-ui-page-note" data-i18n="themesSectionDesc">${ServerI18n.t("themesSectionDesc")}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 T1\uFF1A\u9801\u9996\u53F3\u5074\u300C\u65B0\u4E3B\u984C\u300D\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642
               shell \u7684 [data-route-action] \u63D2\u69FD\u6703\u63A5\u4F4F\u5B83\u2014\u2014\u6240\u4EE5\u9019\u9846\u9215\u8981
               \u81EA\u5DF1\u7D81 listener\uFF08style-contract \xA75.4d\uFF09\u3002 -->
          <div class="admin-ui-page-actions">
            <button type="button" class="admin-ui-action is-primary" id="themeNewBtn">
              ${ServerI18n.t("themesNewBtn")}
            </button>
          </div>
        </div>
        <div class="admin-ui-card" style="padding:14px;margin-top:12px">
          <!-- 2026-09-07 \u8A2D\u8A08\u7A3F 08 \xB7 T1\uFF1Atoolbar \u53EA\u5269\u91CD\u65B0\u8F09\u5165\u3002
               \u300C4 \u500B\u4E3B\u984C\uFF084 \u5167\u5EFA\uFF09\u300D\u90A3\u884C\u5B57\u6578\u91CF\u8CC7\u8A0A\u5361\u7247\u81EA\u5DF1\u5C31\u770B\u5F97\u5230\uFF0C
               \u300CACTIONS\u300D\u90A3\u500B\u6B04\u4F4D\u6A19\u984C\u5247\u662F\u5728\u6A19\u4E00\u6B04\u6839\u672C\u4E0D\u5B58\u5728\u7684\u8868\u683C\u3002 -->
          <div class="theme-pack-toolbar">
            <button id="themeReloadBtn" class="admin-ui-action admin-theme-reload-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              ${ServerI18n.t("themesReloadBtn")}
            </button>
          </div>
          <div id="themesList">
            <span class="theme-pack-muted" style="padding:14px">${ServerI18n.t("themesLoading")}</span>
          </div>
        </div>

        <!-- \u300C<\u4E3B\u984C> \xB7 \u7D30\u90E8\u8A2D\u5B9A\u300D\uFF08\u8A2D\u8A08\u7A3F 08 \xB7 T1\uFF09\u3002\u4E3B\u984C\u6A94\u672C\u8EAB\u662F repo \u88E1\u7684
             YAML\uFF0C\u6539\u5B83\u7B49\u65BC\u6539\u7A0B\u5F0F\u78BC\uFF1B\u9019\u88E1\u8ABF\u7684\u503C\u5B58\u6210\u4E00\u5C64\u8986\u5BEB\uFF0C\u758A\u5728 YAML \u4E4B\u4E0A\uFF0C
             \u7531 themes.get_active() \u5408\u4F75\u5F8C\u5403\u5230\u6BCF\u4E00\u5247\u5F48\u5E55\u3002 -->
        <div class="admin-ui-group-label" id="themeDetailLabel">\u2014</div>
        <div class="admin-ui-group" id="themeDetail" data-theme-detail>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${o(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${o(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${o(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${o(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${o(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${o(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${o(ServerI18n.t("themeDetailColorHint"))}</span>
            </span>
            <span class="val">
              <input type="color" class="admin-ui-input" data-theme-ov="color" id="themeOvColor" />
            </span>
          </div>
        </div>
        <div class="theme-pack-sample" id="themeDetailPreview">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" data-theme-preview-line>
            <span class="theme-pack-sample-nick">\u5C0F\u660E</span>\u8B1B\u5F97\u597D\uFF01+1
          </span>
        </div>
      </div>
    `),k(te),oe.insertAdjacentHTML("beforeend",`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <!-- v8\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R3\uFF09\uFF1A\u4E94\u683C KPI \u689D\u64A4\u6389\u3002\u7A3F\u4E0A\u9019\u9801\u53EA\u6709
             \u300C\u8F38\u5165\u5217 \u2192 \u547D\u4E2D\u6642\u600E\u9EBC\u8655\u7406 \u2192 \u5C01\u9396\u5B57\u6E05\u55AE\u300D\u4E09\u4EF6\u4E8B\uFF1BRULES/BANNED/
             MASKED/BLOCKED/REVIEW \u4E94\u500B\u6578\u5B57\u662F\u5100\u8868\u677F\u8A9E\u8A00\uFF0C\u4E0D\u662F\u9019\u9801\u7684\u5DE5\u4F5C\u3002
             data-mod-stat \u5951\u7D04\u4FDD\u7559\u5728\u6E05\u55AE\u6A19\u984C\u7684\u8A08\u6578\u88E1\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("modBlockedWordsTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("modBlockedWordsNote")}</p>
        </div>

        <div class="admin-mod-addrow">
          <input type="text" id="newKeywordInput" placeholder="${ServerI18n.t("modAddWordPlaceholder")}"
            class="admin-ui-input admin-ui-grow">
          <button id="addKeywordBtn" type="button" class="admin-ui-action is-primary">${ServerI18n.t("modAddWordBtn")}</button>
        </div>

        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${ServerI18n.t("modOnHitLabel")}</span>
            <span class="val">
              <span class="admin-ui-seg" role="tablist" data-mod-onhit>
                <button type="button" class="seg-item is-active" data-onhit="hide">${ServerI18n.t("modOnHitHide")}</button>
                <button type="button" class="seg-item" data-onhit="mask">${ServerI18n.t("modOnHitMask")}</button>
                <button type="button" class="seg-item" data-onhit="review">${ServerI18n.t("modOnHitReview")}</button>
              </span>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("modSkipRepeatsLabel")}</span>
            <span class="val"><input type="checkbox" class="admin-ui-checkbox" data-mod-skip-repeats /></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${ServerI18n.t("modBlockedWordsTitle")} \xB7 <span id="modBlacklistCount" data-mod-stat="banned">\u2014</span></div>
        <div class="admin-ui-group">
          <div id="blacklistKeywords" class="admin-mod-wordlist">
            <!-- Keywords will be listed here -->
          </div>
        </div>

        <!-- \u7D71\u8A08\u5951\u7D04\u4FDD\u7559\uFF08admin-moderation.js \u6703\u5BEB\u5165\uFF09\uFF0C\u4E0D\u518D\u4F54\u7248\u9762 -->
        <span hidden data-mod-stat="rules">\u2014</span><span hidden data-mod-stat="masked">\u2014</span>
        <span hidden data-mod-stat="blocked">\u2014</span><span hidden data-mod-stat="review">\u2014</span>
      </div>
    `),O(),g(),k(Z),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),E(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let xe=document.querySelector("[data-telem-bars]");if(!xe)return;let ie=document.querySelector("[data-telem-status]"),ne={cpu:100,mem:100,ws:100,rate:50};function re(Se,Ee,Fe,Ce,we){let ve=xe.querySelector(`[data-telem-fill="${Se}"]`),_e=xe.querySelector(`[data-telem-value="${Se}"]`);ve&&(ve.style.width=Math.max(0,Math.min(100,Ee))+"%",ve.classList.toggle("is-warn",!Ce)),_e&&(_e.textContent=Fe);let $e=xe.querySelector(`[data-telem-row="${Se}"]`);$e&&we&&$e.setAttribute("title",we)}function ue(Se,Ee){if(!Ee||Ee<=0)return Math.round(Se)+" MB used";if(Ee>=1024){let Fe=(Se/1024).toFixed(1),Ce=(Ee/1024).toFixed(1);return`${Fe} / ${Ce} GB used`}return`${Math.round(Se)} / ${Math.round(Ee)} MB used`}async function Ie(){try{let Se=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Se.ok)return;let Ee=await Se.json(),Fe=Ee.cpu_series||[],Ce=Ee.mem_series||[],we=Ee.mem_mb_series||[],ve=Ee.ws_series||[],_e=Ee.rate_series||[],$e=ce=>ce.length?ce[ce.length-1]:0,Be=Number($e(Fe)||0),H=Number($e(Ce)||0),V=Number($e(we)||0),Y=Number(Ee.mem_total_mb||0),X=Number($e(ve)||Ee.ws_clients||0),le=Number($e(_e)||0)/60;if(re("cpu",Be,`${Be.toFixed(0)}%`,Be<90),re("mem",H,`${H.toFixed(0)}%`,H<90,ue(V,Y)),re("ws",X/ne.ws*100,String(X),X<100),re("rate",le/ne.rate*100,`${le.toFixed(1)}/s`,le<40),ie){let ce=Be>=90||H>=90||le>=40;ie.textContent=ce?"\u25CF BUSY":"\u25CF HEALTHY",ie.classList.toggle("is-warn",ce)}}catch{}}setTimeout(Ie,4e3),setInterval(Ie,5e3)})()}let K={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=K;function E(){let G=document.querySelector(".admin-dash-grid");if(!G)return;let Q="dashboard",W=null;function z(we){return t.moderation.orderedIds.indexOf(we)!==-1?"moderation-grid":t.assets.orderedIds.indexOf(we)!==-1?"assets-grid":"settings-grid"}function ee(){let we=G.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=G.querySelector("[data-route-note]"),_e=G.querySelector("[data-route-action]"),$e=_e?Array.prototype.slice.call(_e.children):[],Be=pe=>pe.querySelector(".admin-ui-page-actions")||$e.find(ye=>ye._adminHomeHead===pe)||null,H=(pe,ye)=>{_e&&($e.forEach(fe=>{fe!==pe&&(fe._adminHomeHead?fe._adminHomeHead.appendChild(fe):fe.remove())}),pe&&pe.parentNode!==_e&&(pe._adminHomeHead=ye,_e.appendChild(pe)))};if(!we){H(null,null);return}let V=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(Q)),Y=Array.prototype.slice.call(G.querySelectorAll(".admin-ui-page-head"));Y.forEach(pe=>pe.classList.remove("is-merged-into-topbar"));let X=(K[Q]?.title||"").trim().replace(/\s+/g," "),le=null,ce=null,me=null;if(Y.forEach(pe=>{let ye=pe.querySelector(".admin-ui-page-title"),fe=ye&&ye.textContent.trim().replace(/\s+/g," ");if(fe&&(V||fe===we||fe===X)){if(pe.offsetParent!==null){le===null&&(le=pe.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ae=Be(pe);Ae&&!ce&&(ce=Ae,me=pe)}pe.classList.add("is-merged-into-topbar")}}),H(ce,me),ve){let pe=le||"";ve.innerHTML!==pe&&(ve.innerHTML=pe),ve.hidden!==!le&&(ve.hidden=!le)}}function ae(){let we=K[Q],ve=new Set((we.sections||[]).map(z)),_e=$e=>Array.from($e.children).some(Be=>getComputedStyle(Be).display!=="none");G.querySelectorAll(".admin-route-sections").forEach($e=>{if(!ve.has($e.id)){$e.style.display="none";return}$e.style.display="",$e.style.display=_e($e)?"":"none"})}let se=()=>{let we=K[Q],ve=new Set(we.sections);G.querySelectorAll('[id^="sec-"]').forEach(_e=>{_e.id&&(_e.style.display=ve.has(_e.id)?"":"none")}),W&&window.AdminTabs?.hasTabsFor?.(Q)&&window.AdminTabs.applyTabSectionVisibility(Q,W,G),ae(),ee()},de=null,oe=null;function be(){let we=oe&&document.getElementById(oe);!we||!we.getClientRects().length||(oe=null,we.tagName==="DETAILS"&&(we.open=!0),we.scrollIntoView({block:"start"}))}let Te=(we,ve,_e)=>{let $e=S(we,ve,_e);_e=$e.rawName,Q=$e.route,G.dataset.activeRoute=Q;let Be=$e.tab,H=$e.fold?q(Q,$e.fold):_e&&_e!==Q?"#/"+_e:q(Q,Be);if(window.location.hash!==H){try{history.replaceState(null,"",H)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let V=K[Q],Y=Array.from(G.querySelectorAll(".admin-dash-nav-row[data-route]")),X=_e!==Q?Y.find(Le=>Le.dataset.route===_e):null;Y.forEach(Le=>{let Me=X?Le===X:Le.dataset.route===Q;Le.classList.toggle("is-active",Me),Le.setAttribute("aria-selected",Me?"true":"false")});let le=G.querySelector("[data-route-kicker]"),ce=G.querySelector("[data-route-title]");var me=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Le){return Le},pe="adminRouteTitle_"+Q,ye="adminRouteKicker_"+Q,fe=me(pe),ke=me(ye);le&&(le.textContent=ke!==ye?ke:V.kicker),ce&&(ce.textContent=fe!==pe?fe:V.title);let Ae=Q==="dashboard"||Q==="live";G.querySelectorAll('[data-route-view="dashboard"]').forEach(Le=>{Le.style.display=Ae?"":"none"}),Ae?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),W=Be,Be&&window.AdminRouter?.tabMemory?.set?.(Q,Be),G.dataset.activeLeaf=Be||Q,se(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Q,leaf:Be}})),ae(),ee(),ie(Q,Be),xe(_e,Q,Be),$e.fold!==de&&(de=$e.fold,oe=$e.foldSection),be();try{history.replaceState(null,"",H)}catch{}};function xe(we,ve,_e){window.AdminBreadcrumb?.render(G,we,ve,_e)}function ie(we,ve){let _e=G.querySelector("[data-admin-tabs-host]");if(!_e){let $e=G.querySelector(".admin-dash-topbar");if(!$e)return;_e=document.createElement("div"),_e.dataset.adminTabsHost="",$e.insertAdjacentElement("afterend",_e)}if(_e.innerHTML="",window.AdminTabs?.hasTabsFor?.(we)&&ve){_e.hidden=!1;let $e=window.AdminTabs.renderTabStrip(we,ve,{onSelect:Be=>Te(we,Be)});$e&&_e.appendChild($e),_e.classList.remove("admin-tabs-host--accordion");return}_e.classList.remove("admin-tabs-host--accordion"),_e.hidden=!0}w&&window.removeEventListener("hashchange",w),w=()=>{let we=x(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),_e=ve?ve[1]:null;we&&Te(we.nav,we.tab,_e||we.raw)},window.addEventListener("hashchange",w),G.querySelectorAll("[data-route]").forEach(we=>{we.addEventListener("click",ve=>{ve.preventDefault(),Te(we.dataset.route)})});let ne=x(window.location.hash),re=(window.location.hash||"").match(/^#\/([\w-]+)/),ue=re?re[1]:ne?.raw||ne?.nav||"live";Te(ne?.nav||"live",ne?.tab||null,ue),window._adminNavigateTo=()=>Te(Q,de||W);let Ie=!1,Se=0,Ee=0;function Fe(){if(Ie)return;Ie=!0;let we=()=>{Ie&&(Ie=!1,Se&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(Se),clearTimeout(Ee),Se=0,Ee=0,se(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Q,leaf:W}})),be())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(Se=requestAnimationFrame(we),Ee=setTimeout(we,100)):Ee=setTimeout(we,0)}let Ce=G.querySelector(".admin-dash-main");Ce&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{Fe()}).observe(Ce,{childList:!0,subtree:!0}),Fe())}function O(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let G=document.querySelector("[data-open-help]");G&&G.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let Q=document.querySelector("[data-open-palette]");if(Q){let z=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};Q.addEventListener("click",z),Q.addEventListener("keydown",ee=>{(ee.key==="Enter"||ee.key===" ")&&(ee.preventDefault(),z())})}let W=document.getElementById("logoutButton");W&&W.addEventListener("click",async()=>{try{let z=await C("/logout",{method:"POST"});z.redirected&&(window.location.href=z.url),showToast(ServerI18n.t("logoutSuccess"))}catch(z){console.error("Logout Failed:",z),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(z=>{z.name&&z.addEventListener("change",async function(){let ee=this.name,ae=this.checked;await i(ee,ae)})}),document.querySelectorAll("details[id^='sec-']").forEach(z=>{z.addEventListener("toggle",()=>{let ee=p();ee[z.id]=z.open,l(ee)})}),document.querySelectorAll(".setting-input").forEach(z=>{z.addEventListener("change",async function(){let ee=this.dataset.key,ae=parseInt(this.dataset.index),se=this.value;this.type==="number"&&(se=parseInt(se)),await a(ee,se,ae,this)})})}function U(){if(h.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}R()}else M()}async function J(){await e(),U(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function te(){window.AdminThemes&&window.AdminThemes.init()}function Z(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{B&&(B.disconnect(),B=null)}),J()})});var gt=he(()=>{(function(){"use strict";var y=null;async function T(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),D=Array.from(N).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var B=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:D})}),w=await B.json();if(!B.ok){window.showToast(w.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(w),C()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await m.json();if(!m.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await m.json();if(!m.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(N),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function C(){y&&(clearInterval(y),y=null);var m=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var D=await N.json();F(D),D.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};m(),y=setInterval(m,2e3)}function j(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
      <div class="admin-proto-poll-template-grid">
        <div class="admin-proto-poll-template-card">
          <div class="t">${ServerI18n.t("pollTplYesNo")}</div>
          <div class="d">${ServerI18n.t("pollTplYesNoDesc")}</div>
          <div class="eta">${ServerI18n.t("pollTplEta5s")}</div>
        </div>
        <div class="admin-proto-poll-template-card">
          <div class="t">${ServerI18n.t("pollTplSatisfaction")}</div>
          <div class="d">${ServerI18n.t("pollTplSatisfactionDesc")}</div>
          <div class="eta">${ServerI18n.t("pollTplEta10s")}</div>
        </div>
        <div class="admin-proto-poll-template-card">
          <div class="t">${ServerI18n.t("pollTplMulti")}</div>
          <div class="d">${ServerI18n.t("pollTplMultiDesc")}</div>
          <div class="eta">${ServerI18n.t("pollTplEta30s")}</div>
        </div>
      </div>`});return m.dataset.emptyKind="poll",m}function F(m){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!m||m.state==="idle"){N.appendChild(j());return}var D=m.total_votes||0,B=Math.max(1,...m.options.map(function(A){return A.count})),w=document.createElement("div");w.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var L=document.createElement("span");L.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(L);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=m.question||"",P.appendChild(b);var x=document.createElement("span");x.className="admin-poll-status-state",x.textContent=m.state,P.appendChild(x),w.appendChild(P),m.options.forEach(function(A){var S=document.createElement("div");S.className="admin-poll-status-row";var p=document.createElement("div");p.className="admin-poll-status-label";var l=document.createElement("span"),o=document.createElement("b");o.textContent=A.key+".",l.appendChild(o),l.appendChild(document.createTextNode(" "+A.text));var e=document.createElement("span");e.textContent=A.count+" ("+A.percentage+"%)",p.appendChild(l),p.appendChild(e);var r=document.createElement("div");r.className="admin-poll-status-bar";var n=document.createElement("div");n.className="admin-poll-status-bar-fill",n.style.width=A.count/B*100+"%",r.appendChild(n),S.appendChild(p),S.appendChild(r),w.appendChild(S)});var q=document.createElement("div");q.className="admin-poll-status-footer",q.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),w.appendChild(q),N.appendChild(w)}}function $(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",T);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",h);var B=document.getElementById("pollResetBtn");B&&B.addEventListener("click",f);var w=document.getElementById("pollAddOptionBtn");w&&w.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var x=b.querySelectorAll(".poll-option-input").length;if(x>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var q=document.createElement("input");q.type="text",q.className="poll-option-input admin-ui-input",q.placeholder=String.fromCharCode(65+x)+". Option "+(x+1),q.maxLength=100,b.appendChild(q)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var x=b.querySelectorAll(".poll-option-input");if(x.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}x[x.length-1].remove()}});var L=m;L&&(L.addEventListener("toggle",function(){L.open&&C()}),C()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){$()}),document.addEventListener("DOMContentLoaded",function(){$()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&$()})})()});var yt=he(()=>{(function(){"use strict";async function y(){try{let C=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!C.ok){let N=await C.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",N.error||C.statusText),!1);return}let j=await C.json(),F=document.getElementById("blacklistKeywords");F.innerHTML="";let $=document.getElementById("modBlacklistCount");$&&($.textContent=`${j.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=j.length),j.length===0?F.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:j.forEach(N=>{let D=document.createElement("div");D.className="hud-banned-row";let B=document.createElement("span");B.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",B.textContent="\u2298";let w=document.createElement("span");w.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",w.textContent=N;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",N),D.appendChild(B),D.appendChild(w),D.appendChild(P),F.appendChild(D)})}catch(C){console.error("Fetch blacklist error:",C),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function T(){let C=document.getElementById("newKeywordInput"),j=C.value.trim();if(!j){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let F=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})}),$=await F.json();F.ok?(C.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:$.message||ServerI18n.t("histToastBlacklisted",{keyword:j}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})})).ok)throw new Error("remove failed");y()}}}):showToast($.message||"Keyword added.",!0)):showToast($.error||"Failed to add keyword.",!1)}catch(F){console.error("Add keyword error:",F),showToast(ServerI18n.t("addKeywordError"),!1)}}async function h(C){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",C),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let F=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:C})}),$=await F.json();F.ok?(showToast($.message||"Keyword removed.",!0),y()):showToast($.error||"Failed to remove keyword.",!1)}catch(F){console.error("Remove keyword error:",F),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let C=document.getElementById("addKeywordBtn");C&&C.addEventListener("click",T);let j=document.getElementById("newKeywordInput");j&&j.addEventListener("keypress",function($){($.key==="Enter"||$.keyCode===13)&&($.preventDefault(),T())});let F=document.getElementById("blacklistKeywords");F&&F.addEventListener("click",function($){let m=$.target.closest(".removeKeywordBtn");if(m){let N=m.dataset.keyword;N&&h(N)}})}document.addEventListener("admin-panel-rendered",function(){y(),f()}),window.AdminHistory={fetchBlacklist:y}})()});var wt=he(()=>{(function(){"use strict";var y="sec-timeline-export",T="danmu.adminHistoryExports.v1",h=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},C=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],j=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},f),format:"JSON"};function $(){return document.getElementById(y)}function m(){try{return JSON.parse(localStorage.getItem(T)||"[]")}catch{return[]}}function N(v){try{localStorage.setItem(T,JSON.stringify(v.slice(0,h)))}catch{}}function D(v){var k=m();k.unshift(v),N(k)}function B(v){return v?v<1024?v+" B":v<1024*1024?(v/1024).toFixed(1)+" KB":(v/1024/1024).toFixed(1)+" MB":"0 B"}function w(v){try{var k=new Date(v),I=new Date,_=k.toDateString()===I.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")});var M=new Date(I);return M.setDate(I.getDate()-1),k.toDateString()===M.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}):k.getMonth()+1+"-"+String(k.getDate()).padStart(2,"0")+" "+String(k.getHours()).padStart(2,"0")+":"+String(k.getMinutes()).padStart(2,"0")}catch{return v||""}}function P(v){if(v==="1h")return 1;if(v==="24h")return 24;if(v==="7d")return 168;if(v==="today"){var k=new Date,I=new Date(k.getFullYear(),k.getMonth(),k.getDate());return Math.max(1,Math.ceil((k-I)/36e5))}return v==="yest"?48:v==="live"?6:24}function L(v){return v.filter(function(k){return!(!F.filters.rawText&&!k.is_poll&&!k.muted&&!k.banned||!F.filters.polls&&k.is_poll||!F.filters.masked&&(k.muted||k.banned))}).map(function(k){if(!F.filters.metadata){var I=Object.assign({},k);return delete I.clientIp,delete I.fingerprint,I}return k})}function b(v){var k=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],I=function(R){var K=R==null?"":String(R);return K.indexOf(",")>=0||K.indexOf('"')>=0||K.indexOf(`
`)>=0?'"'+K.replace(/"/g,'""')+'"':K},_=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},M=v.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",_(R),R.delivery_reason||""].map(I).join(",")});return[k.join(","),M.join(`\r
`)].filter(Boolean).join(`\r
`)}function x(v){return v.map(function(k,I){var _=new Date(k.timestamp||Date.now()),M=q(_),R=q(new Date(_.getTime()+3e3)),K=(k.nickname?"["+k.nickname+"] ":"")+(k.text||"");return I+1+`
`+M+" --> "+R+`
`+K+`
`}).join(`
`)}function q(v){var k=function(I,_){return String(I).padStart(_||2,"0")};return k(v.getHours())+":"+k(v.getMinutes())+":"+k(v.getSeconds())+","+k(v.getMilliseconds(),3)}function A(v,k){var I=URL.createObjectURL(v),_=document.createElement("a");_.href=I,_.download=k,_.click(),URL.revokeObjectURL(I)}function S(){var v=P(F.range),k=document.getElementById("histv2-go");k&&(k.disabled=!0,k.dataset.busy="1"),fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(I){if(!I.ok)throw new Error("http "+I.status);return I.json()}).then(function(I){var _=I&&I.records||[],M=L(_);if(M.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),K,E;if(F.format==="JSON"){var O=JSON.stringify(M,null,2);E=new Blob([O],{type:"application/json"}),K="danmu-history-"+R+".json"}else F.format==="CSV"?(E=new Blob(["\uFEFF"+b(M)],{type:"text/csv;charset=utf-8;"}),K="danmu-history-"+R+".csv"):(E=new Blob([x(M)],{type:"application/x-subrip;charset=utf-8;"}),K="danmu-history-"+R+".srt");A(E,K),D({name:K,fmt:F.format,size:E.size,when:new Date().toISOString(),count:M.length}),l(),p(M.length,E.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:M.length}),!0)}).catch(function(I){console.error("[history-v2] export failed",I),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:I.message||I}),!1)}).finally(function(){k&&(k.disabled=!1,delete k.dataset.busy)})}function p(v,k){var I=document.getElementById("histv2-estimate");I&&(I.textContent=ServerI18n.t("historyV2Estimate",{count:v||"\u2014",size:k?B(k):"\u2014 MB"}))}function l(){var v=document.getElementById("histv2-recent-list");if(v){var k=m();if(k.length===0){v.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}v.innerHTML=k.map(function(I){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+I.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(I.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(w(I.when))+" \xB7 "+B(I.size)+"</div></div></div>"}).join("")}}function o(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})}function e(){return C.map(function(v){var k=F.range===v.k;return'<button type="button" class="histv2-chip'+(k?" is-active":"")+'" data-histv2-range="'+v.k+'">'+o(ServerI18n.t(v.labelKey))+(v.k==="live"?" \xB7 "+r():"")+"</button>"}).join("")}function r(){var v=new Date;return String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function n(){var v=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return v.map(function(k){var I=!!F.filters[k.k];return'<button type="button" class="histv2-toggle'+(I?" is-on":"")+'" data-histv2-toggle="'+k.k+'"><span class="histv2-toggle-mark">'+(I?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(k.labelKey))+"</span></button>"}).join("")}function d(){return j.map(function(v){var k=F.format===v.k;return'<button type="button" class="histv2-fmt'+(k?" is-selected":"")+'" data-histv2-fmt="'+v.k+'">'+(k?'<span class="histv2-fmt-check">\u2713</span>':"")+(v.badge?'<span class="histv2-fmt-badge">'+o(v.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+v.k+'</div><div class="histv2-fmt-desc">'+o(v.desc)+"</div></button>"}).join("")}function s(){var v=$();v&&(v.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+d()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",v.addEventListener("click",t),l(),i())}function t(v){var k=v.target.closest("[data-histv2-range]");if(k){F.range=k.dataset.histv2Range,c(),i();return}var I=v.target.closest("[data-histv2-toggle]");if(I){var _=I.dataset.histv2Toggle;F.filters[_]=!F.filters[_],g(),i();return}var M=v.target.closest("[data-histv2-fmt]");if(M){F.format=M.dataset.histv2Fmt,a(),i();return}var R=v.target.closest("#histv2-go");if(R&&!R.dataset.busy){S();return}}function c(){var v=document.getElementById("histv2-chips");v&&(v.innerHTML=e())}function g(){var v=document.getElementById("histv2-toggles");v&&(v.innerHTML=n())}function a(){var v=document.getElementById("histv2-formats");v&&(v.innerHTML=d())}function i(){i._t&&clearTimeout(i._t),i._t=setTimeout(function(){var v=P(F.range);fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(k){return k.ok?k.json():null}).then(function(k){if(!k)return p(0,0);var I=L(k&&k.records||[]),_=F.format==="JSON"?220:F.format==="CSV"?110:80;p(I.length,I.length*_)}).catch(function(){p(0,0)})},250)}function u(){var v=$(),k=document.getElementById("admin-backup-v2-page");if(!v){var I=document.getElementById("settings-grid");if(!I)return;v=document.createElement("div"),v.id=y,v.className="admin-ui-card lg:col-span-2 history-v2-section",I.appendChild(v),s()}k&&k.parentElement&&v.previousElementSibling!==k&&k.parentElement.insertBefore(v,k.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:i,state:F}})()});var bt=he(()=>{(function(){"use strict";let y="admin-replay-bar";function T(){let f=document.getElementById(y);return f||(document.body?(f=document.createElement("div"),f.id=y,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function h(f){let C=T();C&&(C.hidden=!f)}window.AdminReplayBar={ensure:T,setActive:h},document.addEventListener("admin-panel-rendered",T)})()});var St=he(()=>{(function(){"use strict";let y=null;function T(w){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),L=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),x=document.getElementById("replayProgress"),q=(p,l)=>{p&&p.classList.toggle("hidden",!l)},A=w==="playing",S=w==="paused";q(P,A),q(L,S),q(b,A||S),q(x,A||S),!A&&!S&&x&&(x.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(A||S)}function h(){y&&clearInterval(y),y=setInterval(async()=>{try{let w=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!w.ok)return;let P=await w.json(),L=document.getElementById("replayProgress");L&&(L.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),T(P.state),P.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),T("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function C(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),T("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function j(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),T("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,$=null,m=0,N=null;function D(){[["replayPauseBtn",f],["replayResumeBtn",C],["replayStopBtn",j]].forEach(function([P,L]){let b=document.getElementById(P);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",L),b.dataset.replayCtrlsBound="1")})}async function B(){try{let w=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!w.ok)return;let P=await w.json();(P.state==="playing"||P.state==="paused")&&(T(P.state),h())}catch{}}window.AdminReplayControls={notifyStarted:function(){T("playing"),h()}},document.addEventListener("admin-panel-rendered",function(){D(),B()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var kt=he(()=>{(function(){"use strict";let y="sec-ratelimit",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function($){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[$]})},h=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
      <div id="${y}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("ratelimitPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("ratelimitPageNote")}</p>
        </div>

        <!-- D-6 \u968E\u6BB5 4 (2026-07-29): \u672C\u9801\u539F\u672C\u81EA\u88FD .admin-ratelimit-summary >
             .tile\uFF0C\u8DDF\u5BE9\u6838\u5340\u5176\u4ED6 KPI \u5E36\uFF08\u9ED1\u540D\u55AE\uFF0F\u654F\u611F\u5B57\u90FD\u7528 .hud-stat-tile\uFF09\u9577
             \u5F97\u4E0D\u4E00\u6A23\u3002\u6539\u7528\u5171\u7528\u5143\u4EF6\uFF0C\u9806\u5E36\u628A\u8A9E\u610F\u8272\u5F9E 10px \u7684 delta \u79FB\u5230 28px \u7684
             \u6578\u5B57\u4E0A \u2014\u2014 \u6DFA\u8272\u6A21\u5F0F\u4E0B hud-lime / hud-amber \u7576 10px \u5167\u6587\u53EA\u6709
             3.30 / 3.19\uFF0C\u672C\u4F86\u5C31\u904E\u4E0D\u4E86 4.5\uFF1B\u540C\u4E00\u500B\u984F\u8272\u639B\u5728\u5927\u5B57\u4E0A\u9580\u6ABB\u662F 3.0\uFF0C
             \u800C label \u6539\u7528 muted \u4E4B\u5F8C\u662F 7.58\u3002\u8CC7\u6599\u7D81\u5B9A data-rl-sum-* \u5168\u90E8\u6CBF\u7528\u3002
             BLACKLIST \u7684 is-cyan \u5C0D\u9F4A\u654F\u611F\u5B57\u9801\u540C\u540D\u6307\u6A19\u3002 -->
        <div class="hud-stats-strip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value" data-rl-sum-hits>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-hits-delta>${ServerI18n.t("ratelimitCalculatingLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-amber" data-rl-sum-viol>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-viol-rate>${ServerI18n.t("ratelimitBlockRateLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-crimson" data-rl-sum-locked>\u2014</span>
            <span class="hud-stat-tile-label">${ServerI18n.t("ratelimitLoginLabel")} \xB7 ${ServerI18n.t("ratelimitLockedHint")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-cyan" data-rl-sum-black>\u2014</span>
            <span class="hud-stat-tile-label">${ServerI18n.t("ratelimitBlacklistHint")}</span>
          </div>
        </div>
        <div class="admin-ratelimit-rows">
          ${h.map(F=>`
            <div class="admin-ratelimit-row" data-rl-key="${F.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${T(ServerI18n.t(F.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${F.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${F.defLimit}" data-rl-limit="${F.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${F.key}">
                    <option value="10"${F.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${F.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${F.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${F.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${F.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${F.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${F.defLockout}" data-rl-lockout="${F.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${F.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${F.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${F.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${F.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${F.key}">
                  effective_rate = ${F.defLimit} / ${F.defWindow}s = ${(F.defLimit/F.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(F.defLimit*1.5)}${F.key==="login"?" \xB7 lock = "+F.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${F.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${F.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="admin-ratelimit-bottom">
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">${ServerI18n.t("ratelimitViolationsTitle")}</span>
              <!-- \u8A2D\u8A08\u7A3F 14\uFF1A\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u4E0D\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u3002\u9019\u683C\u7684\u521D\u59CB\u503C\u5C31\u662F
                   \u300C\u6700\u8FD1 5 \u5206\u9418\u300D\uFF0C\u6709\u8CC7\u6599\u6642\u7531 _renderViolations \u63DB\u6210\u6B21\u6578\u3002 -->
              <span class="kicker" data-rl-vcount>${ServerI18n.t("ratelimitFiveMinWindow")}</span>
            </div>
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>${ServerI18n.t("uiColTime")}</span><span>${ServerI18n.t("lbScope")}</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>
              </div>
            </div>
          </div>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">${ServerI18n.t("ratelimitIpPolicyTitle")}</span>
              <span class="kicker" data-rl-ip-summary>${ServerI18n.t("ratelimitIpPolicyLabel")} \xB7 ${ServerI18n.t("ratelimitLoadingEllipsis")}</span>
            </div>
            <div class="admin-ratelimit-ip-form">
              <input type="text" data-rl-ip-input placeholder="${ServerI18n.t("ratelimitIpInputPlaceholder")}" maxlength="43" autocomplete="off" spellcheck="false" />
              <select data-rl-ip-select aria-label="${ServerI18n.t("ratelimitIpSelectAriaLabel")}">
                <option value="allowlist">${ServerI18n.t("ratelimitAllowlistOption")}</option>
                <option value="denylist">${ServerI18n.t("ratelimitDenylistOption")}</option>
              </select>
              <button type="button" class="admin-ui-action is-primary" data-rl-ip-add>${ServerI18n.t("ratelimitIpAddBtn")}</button>
            </div>
            <p class="admin-ratelimit-ip-help">${ServerI18n.t("ratelimitIpHelp")}</p>
            <div class="admin-ratelimit-ip-error" data-rl-ip-error hidden></div>
            <div class="admin-ratelimit-ip-lists">
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="allowlist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${ServerI18n.t("lbAllowlist")}</span>
                  <span class="cnt" data-rl-ip-allow-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="allowlist">
                  <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:ServerI18n.t("ratelimitAllowlistName")})}</div>
                </div>
              </div>
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="denylist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${ServerI18n.t("lbDenylist")}</span>
                  <span class="cnt" data-rl-ip-deny-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="denylist">
                  <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:ServerI18n.t("ratelimitDenylistName")})}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-ui-action admin-rl-footer-action" data-rl-action="reset">${ServerI18n.t("ratelimitResetBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-rl-footer-action" data-rl-action="export">${ServerI18n.t("ratelimitExportBtn")}</button>
        </div>

        <pre id="rlEnvExport" class="admin-ratelimit-export" hidden></pre>
      </div>`}function C(F){let $=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let l=window.AdminBootstrap;l&&typeof l.primeBootstrap=="function"&&await l.primeBootstrap();let o=l&&l.bootstrapSection?l.bootstrapSection("history_stats"):null,e=l&&l.bootstrapSection?l.bootstrapSection("blacklist"):null,r=l&&l.bootstrapSection?l.bootstrapSection("metrics"):null,n=[];n.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),n.push(e?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),n.push(r?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[d,s,t]=await Promise.all(n),c=o||(d&&d.ok?await d.json():null);if(c){let k=c.stats&&c.stats.last_24h||0,I=c.stats&&c.stats.total||0,_=F.querySelector("[data-rl-sum-hits]"),M=F.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=k.toLocaleString()),M&&(M.textContent=ServerI18n.t("ratelimitSumTotal",{n:I.toLocaleString()}))}let g=e||(s&&s.ok?await s.json():null);if(g){let k=Array.isArray(g)?g:g.entries||g.keywords||[],I=F.querySelector("[data-rl-sum-black]");I&&(I.textContent=k.length?ServerI18n.t("ratelimitCountUnit",{n:k.length}):"0")}let a=F.querySelector("[data-rl-sum-viol]"),i=F.querySelector("[data-rl-sum-viol-rate]"),u=F.querySelector("[data-rl-sum-locked]"),v=r||(t&&t.ok?await t.json():null);if(v){let k=v&&v.rate_limits;if(k&&k.totals){let I=k.totals.hits||0,_=k.totals.violations||0,M=k.totals.locked_sources||0;if(a&&(a.textContent=_.toLocaleString()),i){let R=I+_;i.textContent=R>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/R*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:M.toLocaleString()})),h.forEach(({key:R})=>{let K=k[R],E=F.querySelector(`[data-rl-current="${R}"]`);if(E&&K){let O=(K.hits||0).toLocaleString(),U=(K.violations||0).toLocaleString();E.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:O,viol:U})}}),N(k)}else a&&(a.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else a&&(a.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(v&&v.recent_violations)}catch{}},4500);function m(l){let o=F.querySelector("[data-rl-vbody]"),e=F.querySelector("[data-rl-vcount]");if(!o)return;let r=Array.isArray(l)?l:[];if(e&&(e.textContent=ServerI18n.t("ratelimitViolationsCount",{n:r.length})),r.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let n=s=>{let t=new Date(s*1e3),c=g=>String(g).padStart(2,"0");return`${c(t.getHours())}:${c(t.getMinutes())}:${c(t.getSeconds())}`},d=s=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[s]||"var(--color-text-muted)";o.innerHTML=r.slice(0,30).map(s=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${n(s.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${d(s.scope)}">${(s.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${T(s.ip||"")}</span>
        </div>
      `).join("")}function N(l){l&&h.forEach(({key:o})=>{let e=l[o],r=F.querySelector(`[data-rl-suggest="${o}"]`);if(!r)return;let n=e&&e.suggestion;if(!n){r.hidden=!0;return}let d=r.querySelector("[data-rl-suggest-detail]");d&&(d.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(n.p95_per_second||0).toFixed(2),limit:e.limit||"\u2014",window:e.window||"\u2014",suggLimit:n.suggested_limit,suggWindow:n.suggested_window}));let s=r.querySelector("[data-rl-apply]");s&&(s.dataset.rlSuggestLimit=String(n.suggested_limit),s.dataset.rlSuggestWindow=String(n.suggested_window)),r.hidden=!1})}async function D(){try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let o=await l.json(),e=o&&o.rate_limits;if(!e)return;h.forEach(({key:r})=>{let n=e[r],d=F.querySelector(`[data-rl-current="${r}"]`);if(d&&n){let s=(n.hits||0).toLocaleString(),t=(n.violations||0).toLocaleString();d.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:s,viol:t})}}),N(e)}catch{}}F.addEventListener("click",async l=>{let o=l.target.closest("[data-rl-action]");if(!o)return;let e=o.dataset.rlAction;if(e==="save"){let r=o.dataset.rlSave,n=F.querySelector(`[data-rl-limit="${r}"]`),d=F.querySelector(`[data-rl-window="${r}"]`);if(!n||!d)return;let s=parseInt(n.value,10),t=parseInt(d.value,10);if(!Number.isFinite(s)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let c=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let g=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:s,window:t})});if(g.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:r.toUpperCase(),limit:s,window:t}),!0),D();else{let a=await g.json().catch(()=>({})),i=a&&a.error||`HTTP ${g.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:i}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=c}return}if(e==="apply-suggest"){let r=o.dataset.rlApply,n=parseInt(o.dataset.rlSuggestLimit,10),d=parseInt(o.dataset.rlSuggestWindow,10);if(!r||!Number.isFinite(n)||!Number.isFinite(d))return;let s=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:r,limit:n,window:d})});if(t.ok){let c=F.querySelector(`[data-rl-limit="${r}"]`),g=F.querySelector(`[data-rl-window="${r}"]`);c&&(c.value=n),g&&(g.value=d),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:r.toUpperCase(),limit:n,window:d}),!0),D(),B()}else{let c=await t.json().catch(()=>({})),g=c&&c.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:g}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=s}return}if(e==="export"){let r=[];F.querySelectorAll("[data-rl-limit]").forEach(n=>{let d=n.dataset.rlLimit.toUpperCase();r.push(`${d}_RATE_LIMIT=${n.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(n=>{let d=n.dataset.rlWindow.toUpperCase();r.push(`${d}_RATE_WINDOW=${n.value}`)}),$.textContent=r.join(`
`),$.hidden=!1;try{navigator.clipboard?.writeText(r.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else e==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([n,[d,s]])=>{let t=F.querySelector(`[data-rl-limit="${n}"]`),c=F.querySelector(`[data-rl-window="${n}"]`);t&&(t.value=d),c&&(c.value=s)}),$.hidden=!0,B())});function B(){h.forEach(({key:l})=>{let o=F.querySelector(`[data-rl-limit="${l}"]`),e=F.querySelector(`[data-rl-window="${l}"]`),r=F.querySelector(`[data-rl-lockout="${l}"]`),n=F.querySelector(`[data-rl-effective="${l}"]`);if(!o||!e||!n)return;let d=parseInt(o.value,10)||0,s=parseInt(e.value,10)||1,t=(d/s).toFixed(2),c=Math.round(d*1.5),g=`effective_rate = ${d} / ${s}s = ${t} req/s \xB7 burst = ${c}`;if(l==="login"&&r){let a=parseInt(r.value,10)||0;g+=` \xB7 lock = ${a}s`}n.textContent=g})}F.addEventListener("input",l=>{let o=l.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||B()}),F.addEventListener("change",l=>{let o=l.target;!o||!o.dataset.rlWindow||B()}),B();function w(l,o){if(!l||!Array.isArray(o))return;let e=96,r=24,n=o.length?o:new Array(24).fill(0),d=Math.max(1,...n),s=e/Math.max(1,n.length-1),t=n.map((g,a)=>`${(a*s).toFixed(1)},${(r-2-g/d*(r-4)).toFixed(1)}`).join(" "),c=l.querySelector("polyline");c&&c.setAttribute("points",t)}h.forEach(({key:l})=>{let o=F.querySelector(`[data-rl-spark="${l}"]`);o&&w(o,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,L={allowlist:[],denylist:[]},b={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function x(l){if(b.error){if(!l){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=l}}function q(l){let o=l==="allowlist"?b.allowBody:b.denyBody,e=l==="allowlist"?b.allowCount:b.denyCount;if(!o||!e)return;let r=Array.isArray(L[l])?L[l]:[];if(e.textContent=String(r.length),r.length===0){let n=ServerI18n.t(l==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:n})}</div>`;return}o.innerHTML=r.map(n=>{let d=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:T(n)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${T(n)}">
          <span class="admin-ratelimit-ip-chip-cidr">${T(n)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${T(n)}" data-rl-ip-remove-kind="${l}" title="${d}" aria-label="${d}">\xD7</button>
        </div>
      `}).join("")}function A(){if(q("allowlist"),q("denylist"),b.summary){let l=(L.allowlist||[]).length,o=(L.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:l,deny:o})}}async function S(){try{let l=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!l.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:l.status}));return}let o=await l.json();o&&typeof o=="object"&&(L={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},A())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function p(l,{toastLabel:o}={}){try{let e=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(e.ok){let d=await e.json();return L={allowlist:Array.isArray(d.allowlist)?d.allowlist:[],denylist:Array.isArray(d.denylist)?d.denylist:[]},A(),x(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let r=await e.json().catch(()=>({})),n=r&&r.error||`HTTP ${e.status}`;return x(n),!1}catch{return x(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let l=(b.input.value||"").trim();if(!l){x(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(l)){x(ServerI18n.t("ratelimitIpFormatError"));return}let o=b.select.value==="denylist"?"denylist":"allowlist",e=Array.from(new Set([...L[o]||[],l]));await p({[o]:e},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:l})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&x("")})),F.addEventListener("click",async l=>{let o=l.target.closest("[data-rl-ip-remove]");if(!o)return;let e=o.dataset.rlIpRemove,r=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",n=(L[r]||[]).filter(d=>d!==e);await p({[r]:n},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:e})})}),S(),setTimeout(async()=>{try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let o=await l.json(),e=o&&o.rate_limits;if(!e)return;h.forEach(({key:r})=>{let n=e[r]&&(e[r].bucket_history||e[r].history);if(Array.isArray(n)&&n.length){let d=F.querySelector(`[data-rl-spark="${r}"]`);d&&w(d,n.slice(-24))}})}catch{}},5500)}function j(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",f());let $=document.getElementById(y);$&&C($)}document.addEventListener("admin-panel-rendered",j),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),j()})})()});var It=he(()=>{(function(){"use strict";let y="sec-viewer-theme",T="danmu.viewerTheme.v1",h=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
      <div id="${y}" class="admin-vt-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("viewerThemePageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("viewerThemePageNote")}</p>
        </div>

        <div class="admin-vt-grid">
          <div class="admin-vt-controls">
            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemePresetsTitle")}</span></div>
              <div class="admin-vt-presets" data-vt-presets></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemePreviewModeTitle")}</span><span class="kicker">${ServerI18n.t("viewerThemePreviewModeKickerNote")}</span></div>
              <div class="admin-vt-mode" data-vt-mode>
                <button type="button" data-vt-mode-btn="dark"><span class="icon">\u25D0</span><span class="lbl">${ServerI18n.t("viewerThemeModeDark")}</span><span class="sub">${ServerI18n.t("lbDark")}</span></button>
                <button type="button" data-vt-mode-btn="light"><span class="icon">\u263C</span><span class="lbl">${ServerI18n.t("viewerThemeModeLight")}</span><span class="sub">${ServerI18n.t("lbLight")}</span></button>
                <button type="button" data-vt-mode-btn="auto"><span class="icon">\u25D1</span><span class="lbl">${ServerI18n.t("viewerThemeModeAuto")}</span><span class="sub">${ServerI18n.t("lbAuto")}</span></button>
              </div>
            </div>

            <!-- 2026-05-16: VIEWER FORCE OVERRIDE \u2014 pushes to backend.
                 Audience /fire follows prefers-color-scheme + navigator.language
                 by default; admin can force theme + language from here. The
                 in-viewer toggles were removed, so this card is the only
                 way to override. -->
            <div class="admin-vt-card admin-vt-force">
              <div class="admin-vt-card-head">
                <span class="title">${ServerI18n.t("viewerThemeForceOverrideTitle")}</span>
                <span class="kicker">${ServerI18n.t("viewerThemeForceOverrideKickerNote")}</span>
              </div>
              <div class="admin-vt-force-row">
                <div class="admin-vt-force-label">
                  <span class="title">${ServerI18n.t("viewerThemeForceThemeLabel")}</span>
                  <span class="kicker">${ServerI18n.t("viewerThemeThemeModeKickerNote")}</span>
                </div>
                <div class="admin-vt-mode" data-vt-theme-force>
                  <button type="button" data-vt-theme-btn="auto"><span class="icon">\u25D1</span><span class="lbl">${ServerI18n.t("viewerThemeModeAuto")}</span><span class="sub">${ServerI18n.t("lbAuto")}</span></button>
                  <button type="button" data-vt-theme-btn="force-light"><span class="icon">\u263C</span><span class="lbl">${ServerI18n.t("viewerThemeForceLight")}</span></button>
                  <button type="button" data-vt-theme-btn="force-dark"><span class="icon">\u25D0</span><span class="lbl">${ServerI18n.t("viewerThemeForceDark")}</span></button>
                </div>
              </div>
              <div class="admin-vt-force-row">
                <div class="admin-vt-force-label">
                  <span class="title">${ServerI18n.t("viewerThemeForceLangLabel")}</span>
                  <span class="kicker">${ServerI18n.t("viewerThemeLangModeKickerNote")}</span>
                </div>
                <div class="admin-vt-mode" data-vt-lang-force>
                  <button type="button" data-vt-lang-btn="auto"><span class="icon">\u232C</span><span class="lbl">${ServerI18n.t("viewerThemeFollowBrowser")}</span><span class="sub">${ServerI18n.t("lbAuto")}</span></button>
                  <!-- D-4\uFF1A\u8A9E\u8A00\u81EA\u7A31\u540D\uFF08\u7E41\u9AD4\u4E2D\u6587\uFF0FEnglish\uFF0F\u65E5\u672C\u8A9E\uFF0F\uD55C\uAD6D\uC5B4\uFF09\u662F\u8A9E\u8A00\u9078\u64C7\u5668
                       \u6163\u4F8B\u2014\u2014\u7528\u8A72\u8A9E\u8A00\u81EA\u8EAB\u6587\u5B57\u5448\u73FE\uFF0C\u4E0D\u96A8 admin UI \u8A9E\u8A00\u7FFB\u8B6F\uFF0C\u4E0D\u642C\u3002icon
                       \u5B57\u7B26\uFF08\u4E2D/EN/\u65E5/\uD55C\uFF09\u540C\u7406\uFF0C\u7DAD\u6301\u539F\u6A23\u3002 -->
                  <button type="button" data-vt-lang-btn="force-zh"><span class="icon">\u4E2D</span><span class="lbl">\u7E41\u9AD4\u4E2D\u6587</span></button>
                  <button type="button" data-vt-lang-btn="force-en"><span class="icon">EN</span><span class="lbl">English</span></button>
                  <button type="button" data-vt-lang-btn="force-ja"><span class="icon">\u65E5</span><span class="lbl">\u65E5\u672C\u8A9E</span></button>
                  <button type="button" data-vt-lang-btn="force-ko"><span class="icon">\uD55C</span><span class="lbl">\uD55C\uAD6D\uC5B4</span></button>
                </div>
              </div>
              <div class="admin-vt-force-note">
                <p>${ServerI18n.t("viewerThemeForceBoundaryNote")}</p>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemeColorsTitle")}</span></div>
              <div class="admin-vt-color-rows" data-vt-colors></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">Logo</span><span class="kicker">${ServerI18n.t("viewerThemeLogoKickerSpec")}</span></div>
              <label class="admin-vt-logo-drop" data-vt-logo-drop>
                <span class="hint-empty">${ServerI18n.t("viewerThemeLogoDropHint")}<br><small>${ServerI18n.t("viewerThemeLogoDropHintSmall")}</small></span>
                <img class="hint-preview" hidden data-vt-logo-preview alt="logo" />
                <input type="file" accept="image/png,image/jpeg" hidden data-vt-logo-input />
              </label>
              <div class="admin-vt-logo-actions" hidden data-vt-logo-actions>
                <button type="button" data-vt-logo-remove>${ServerI18n.t("viewerThemeLogoRemove")}</button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemeFontTitle")}</span><span class="kicker">${ServerI18n.t("viewerThemeFontKickerNote")}</span></div>
              <select data-vt-font>
                <option value="Zen Kaku Gothic New">Zen Kaku \xB7 ${ServerI18n.t("viewerThemeFontDescDefault")}</option>
                <option value="Noto Sans TC">Noto Sans TC \xB7 ${ServerI18n.t("viewerThemeFontDescNotoTC")}</option>
                <option value="Chakra Petch">Chakra Petch \xB7 ${ServerI18n.t("viewerThemeFontDescChakra")}</option>
                <option value="Bebas Neue">Bebas Neue \xB7 ${ServerI18n.t("viewerThemeFontDescBebas")}</option>
                <option value="IBM Plex Mono">IBM Plex Mono \xB7 ${ServerI18n.t("viewerThemeFontDescMono")}</option>
                <option value="system-ui">System UI \xB7 ${ServerI18n.t("viewerThemeFontDescSystem")}</option>
              </select>
              <div class="admin-vt-font-specimen" data-vt-font-specimen>${ServerI18n.t("viewerThemeFontSpecimen")}</div>
            </div>

            <div class="admin-vt-persist">
              <button type="button" class="admin-ui-action admin-vt-reset" data-vt-action="reset">${ServerI18n.t("viewerThemeResetBtn")}</button>
            </div>
          </div>

          <div class="admin-vt-preview">
            <div class="admin-vt-preview-head">
              <span class="kicker">${ServerI18n.t("uiLivePreview")} \xB7 /fire</span>
              <div class="admin-vt-device" data-vt-device>
                <button type="button" data-vt-device-btn="desktop" class="is-active">${ServerI18n.t("viewerThemeDeviceDesktop")}</button>
                <button type="button" data-vt-device-btn="tablet">${ServerI18n.t("viewerThemeDeviceTablet")}</button>
                <button type="button" data-vt-device-btn="mobile">${ServerI18n.t("viewerThemeDeviceMobile")}</button>
              </div>
            </div>
            <div class="admin-vt-contrast" data-vt-contrast></div>
            <div class="admin-vt-preview-frame" data-vt-frame>
              <div class="admin-vt-preview-stage" data-vt-stage>
                <div class="hero">
                  <div class="logo" data-vt-preview-logo>Danmu Fire</div>
                  <!-- D-4 REUSED\uFF1A\u9019\u662F /fire \u9801\u9762\u7684 live \u6A19\u8A9E\u9010\u5B57\u91CD\u73FE\u65BC\u9810\u89BD\u5361\u7247\uFF0C
                       \u8A9E\u610F\u5B8C\u5168\u76F8\u540C\u2014\u2014\u76F4\u63A5\u8907\u7528\u65E2\u6709 mainSubtitle key\uFF0C\u4E0D\u53E6\u958B\u65B0 key\u3002 -->
                  <p class="subtitle">${ServerI18n.t("mainSubtitle")}</p>
                  <span class="admin-ui-chip admin-vt-preview-status"><span class="dot"></span>${ServerI18n.t("viewerThemePreviewConnected")}</span>
                </div>
                <div class="stream">
                  <span class="row"><b>@guest</b><span>${ServerI18n.t("viewerThemeDemoMsgGuest")}</span></span>
                  <span class="row"><b>@alice</b><span>${ServerI18n.t("viewerThemeDemoMsgAlice")}</span></span>
                  <span class="row self"><b>@${ServerI18n.t("viewerThemeDemoYouLabel")}</b><span>${ServerI18n.t("viewerThemeDemoMsgYou")}</span></span>
                </div>
                <div class="composer">
                  <input type="text" placeholder="${ServerI18n.t("viewerThemeComposerPlaceholder")}" disabled />
                  <button type="button">${ServerI18n.t("fireDanmu")}</button>
                </div>
              </div>
            </div>

            <div class="admin-viewer-theme-legend" data-vt-legend>
              <div class="admin-viewer-theme-legend-head">
                <span class="title">${ServerI18n.t("viewerThemeLegendTitle")}</span>
                <span class="kicker">${ServerI18n.t("viewerThemeLegendOutOfScope")} \xB7 ${ServerI18n.t("viewerThemeLegendKickerNote")}</span>
              </div>
              <div class="admin-viewer-theme-legend-rows">
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="themes">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowThemePacks")}</span>
                  <span class="v">\u2197 Theme Packs</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="display">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowDisplay")}</span>
                  <span class="v">\u2197 Display Settings</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="effects">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowEffects")}</span>
                  <span class="v">\u2197 Effects</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="ratelimit">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowModeration")}</span>
                  <span class="v">\u2197 Moderation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`}let C=/^#[0-9a-f]{6}$/i,j=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,B=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[B])}function $(D){let B={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(w=>{typeof D[w]=="string"&&C.test(D[w])&&(B[w]=D[w])}),(D.mode==="dark"||D.mode==="light")&&(B.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(B.font=D.font),(D.logo===null||typeof D.logo=="string"&&j.test(D.logo))&&(B.logo=D.logo)),B}function m(D){let B={...h[0],logo:null};try{let a=localStorage.getItem(T);a&&(B={...B,...$(JSON.parse(a))})}catch{}let w="default";function P(){try{localStorage.setItem(T,JSON.stringify(B))}catch{}}function L(a){let i=/^#?([0-9a-f]{6})$/i.exec(a);if(!i)return[0,0,0];let u=parseInt(i[1],16);return[u>>16&255,u>>8&255,u&255]}function b([a,i,u]){let v=[a,i,u].map(k=>(k/=255,k<=.03928?k/12.92:Math.pow((k+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function x(a,i){let u=b(L(a)),v=b(L(i)),[k,I]=u>v?[u,v]:[v,u];return(k+.05)/(I+.05)}function q(a){return a>=7?{label:"AAA",cls:"is-good"}:a>=4.5?{label:"AA",cls:"is-ok"}:a>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function A(){let a=D.querySelector("[data-vt-presets]");a.innerHTML="",h.forEach(i=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(w===i.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${i.bg}">
            <span style="background:${i.primary}"></span>
            <span style="background:${i.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(i.nameKey)}</div>
          <div class="mode">${ServerI18n.t(i.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{B={...B,...i},w=i.id,P(),g()}),a.appendChild(u)})}function S(){D.querySelectorAll("[data-vt-mode-btn]").forEach(a=>{a.classList.toggle("is-active",B.mode===a.dataset.vtModeBtn)})}function p(){let a=D.querySelector("[data-vt-colors]"),i=B.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:i,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:B.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:B.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];a.innerHTML=u.map(v=>{let k=x(B[v.key],v.vs),I=q(k),_=F(B[v.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${I.cls}">${I.label} \xB7 ${k.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${v.key}" />
                <input type="text" value="${_}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let a=D.querySelector("[data-vt-logo-preview]"),i=D.querySelector(".hint-empty"),u=D.querySelector("[data-vt-logo-actions]");B.logo?(a.src=B.logo,a.hidden=!1,i.style.display="none",u.hidden=!1):(a.hidden=!0,i.style.display="",u.hidden=!0)}function o(){let a=D.querySelector("[data-vt-font]");a.value=B.font;let i=D.querySelector("[data-vt-font-specimen]");i.style.fontFamily=B.font}function e(){let a=B.mode==="dark"?"#F8FAFC":"#0F172A",i=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(a,B.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(B.primary,B.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(B.hero,B.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=i.map(u=>{let v=q(u.ratio);return`<span class="vt-contrast-chip ${v.cls}">${u.lbl} \xB7 ${v.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function r(){let a=D.querySelector("[data-vt-stage]"),i=B.mode==="dark"?"#F8FAFC":"#0F172A";a.style.setProperty("--vt-bg",B.bg),a.style.setProperty("--vt-primary",B.primary),a.style.setProperty("--vt-hero",B.hero),a.style.setProperty("--vt-fg",i),a.style.fontFamily=B.font;let u=D.querySelector("[data-vt-preview-logo]");if(B.logo){let v=document.createElement("img");v.src=B.logo,v.style.maxHeight="40px",u.replaceChildren(v)}else u.textContent="Danmu Fire"}let n="auto",d="auto";function s(){D.querySelectorAll("[data-vt-theme-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtThemeBtn===n)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(a=>{a.classList.toggle("is-active",a.dataset.vtLangBtn===d)})}async function t(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)return;let i=await a.json(),u=i&&i.ViewerThemeMode&&i.ViewerThemeMode[1],v=i&&i.ViewerLangMode&&i.ViewerLangMode[1];typeof u=="string"&&(n=u),typeof v=="string"&&(d=v),s()}catch{}}async function c(a,i){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,value:i,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${a} = ${i}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:a}),!1)}}function g(){A(),S(),p(),l(),o(),e(),r(),s()}D.addEventListener("input",a=>{if(a.target.matches("[data-vt-color]")){let i=a.target.dataset.vtColor;C.test(a.target.value)&&(B[i]=a.target.value,w="custom",P(),g())}else if(a.target.matches("[data-vt-hex]")){let i=a.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(a.target.value)&&(B[i]=a.target.value,w="custom",P(),g())}else a.target.matches("[data-vt-font]")&&(B.font=a.target.value,P(),g())}),D.addEventListener("change",a=>{if(a.target.matches("[data-vt-logo-input]")){let i=a.target.files&&a.target.files[0];if(!i)return;if(i.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{B.logo=String(u.result||""),P(),g()},u.readAsDataURL(i)}}),D.addEventListener("click",a=>{let i=a.target.closest("[data-vt-mode-btn]");if(i){B.mode=i.dataset.vtModeBtn,w="custom",P(),g();return}let u=a.target.closest("[data-vt-theme-btn]");if(u){n=u.dataset.vtThemeBtn,s(),c("ViewerThemeMode",n);return}let v=a.target.closest("[data-vt-lang-btn]");if(v){d=v.dataset.vtLangBtn,s(),c("ViewerLangMode",d);return}if(a.target.closest("[data-vt-logo-remove]")){B.logo=null,P(),g();return}let I=a.target.closest("[data-vt-device-btn]");if(I){D.querySelectorAll("[data-vt-device-btn]").forEach(M=>M.classList.toggle("is-active",M===I)),D.querySelector("[data-vt-frame]").dataset.device=I.dataset.vtDeviceBtn;return}let _=a.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(B={...h[0],logo:null},w="default",P(),g())}),g(),t()}document.addEventListener("click",function(D){let B=D.target.closest("[data-vt-jump]");if(!B)return;let w=B.dataset.vtJump;if(w){D.preventDefault();try{location.hash="#/"+w}catch{}}});function N(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(y))return;D.insertAdjacentHTML("beforeend",f());let B=document.getElementById(y);B&&m(B)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Tt=he(()=>{(function(){"use strict";let y="sec-system-overview";function T(){return`
      <div id="${y}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("sohPageTitle")}</h2>
          <div class="admin-ui-page-actions">
            <span class="admin-soh-chip" data-soh-chip>
              <span class="admin-soh-chip__dot" data-soh-banner-dot></span>
              <span data-soh-banner-title>${ServerI18n.t("sohChecking")}</span>
            </span>
          </div>
        </div>

        <div class="admin-soh-kpis">
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map($=>`
            <div class="admin-soh-kpi" data-m="${$.id}">
              <div class="admin-soh-kpi__label">${$.label}</div>
              <div class="admin-soh-kpi__value" data-m-v>\u2014</div>
              <div class="admin-soh-kpi__sub" data-m-sub></div>
            </div>`).join("")}
        </div>

        <div class="admin-ui-group">
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohPublicUrlLabel")}</span>
            <span class="val admin-soh-urlrow">
              <code id="sysoPublicUrl">${location.origin}</code>
              <button type="button" class="admin-ui-action" data-soh-action="copy-url">${ServerI18n.t("copyBtn")}</button>
              <button type="button" class="admin-ui-action" data-soh-action="show-qr">QR</button>
            </span>
          </div>
          <div class="admin-soh-qr" data-soh-qr hidden></div>

          <!-- 2026-08-19 \u8A2D\u8A08\u7A3F 03\uFF1A\u8A9E\u8A00\u9078\u55AE\u7531\u9802\u6B04\u79FB\u5230\u9019\u88E1\u3002ID \u6CBF\u7528
               server-lang-select\uFF0Ci18n.js \u7684 bindLanguageSelector \u9760\u5B83\u7D81\u5B9A\u3002 -->
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohLanguageLabel")}</span>
            <span class="val">
              <select id="server-lang-select" class="admin-ui-select" aria-label="${ServerI18n.t("sohLanguageLabel")}">
                <option value="en">English</option>
                <option value="zh">\u4E2D\u6587</option>
                <option value="ja">\u65E5\u672C\u8A9E</option>
                <option value="ko">\uD55C\uAD6D\uC5B4</option>
              </select>
            </span>
          </div>

          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohAppearanceLabel")}</span>
            <span class="val admin-soh-seg" role="group" data-soh-theme>
              <button type="button" data-soh-mode="auto">${ServerI18n.t("sohAppearanceAuto")}</button>
              <button type="button" data-soh-mode="light">${ServerI18n.t("sohAppearanceLight")}</button>
              <button type="button" data-soh-mode="dark">${ServerI18n.t("sohAppearanceDark")}</button>
            </span>
          </div>
        </div>
      </div>`}function h($){let m=Math.floor($/86400),N=Math.floor($%86400/3600),D=Math.floor($%3600/60);return m>0?`${m}d ${String(N).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:N>0?`${N}h ${String(D).padStart(2,"0")}m`:`${D}m ${String($%60).padStart(2,"0")}s`}function f($,m,N){let D=document.querySelector(`[data-m="${$}"]`);if(!D)return;let B=D.querySelector("[data-m-v]");B&&(B.textContent=m);let w=D.querySelector("[data-m-sub]");w&&(w.textContent=N||"")}function C($){let m=document.querySelector("[data-soh-banner-dot]"),N=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),w=!($.queue_size!=null&&$.queue_capacity!=null&&$.queue_size>=$.queue_capacity);D&&D.classList.toggle("is-warn",!w),m&&m.classList.toggle("is-warn",!w),N&&(N.textContent=w?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function j(){(async()=>{try{let N=await window.csrfFetch("/admin/metrics");if(!N.ok)return;let D=await N.json(),B=A=>Array.isArray(A)&&A.length?A[A.length-1]:null,w=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;f("uptime",w>0?h(w):"\u2014","");let P=null;try{let A=await fetch("/admin/audience/stats",{credentials:"same-origin"});A.ok&&(P=(await A.json()).total_live)}catch{}let L=D.ws_clients??0;f("conn",String(L+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:L}):ServerI18n.t("sohConnBreakdown",{overlays:L,viewers:P}));let b=B(D.mem_series||[]),x=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;f("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",x?ServerI18n.t("sohMemorySub",{total:x}):"");let q=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${q}`,ServerI18n.t("sohVersionSub")),C(D)}catch{}})();let $=document.getElementById(y);if(!$)return;let m=()=>{let N=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";$.querySelectorAll("[data-soh-mode]").forEach(D=>{let B=D.dataset.sohMode===N;D.classList.toggle("is-active",B),D.setAttribute("aria-pressed",B?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),$.addEventListener("click",function(N){let D=N.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),m();return}let B=N.target.closest("[data-soh-action]");if(!(!B||B.disabled)){if(B.dataset.sohAction==="copy-url"){let w=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(w);return}if(B.dataset.sohAction==="show-qr"){let w=$.querySelector("[data-soh-qr]");if(!w)return;if(!w.hidden){w.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{w.innerHTML=P.svg,w.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let $=document.getElementById("settings-grid");!$||document.getElementById(y)||($.insertAdjacentHTML("beforeend",T()),document.getElementById(y)&&j())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var _t=he(()=>{(function(){"use strict";let y="sec-polls",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function h(){return`
      <div id="sec-polls" class="admin-poll-page-v5 hud-page-stack lg:col-span-2" data-tpl="C" data-poll-view="builder">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("pollBuilderPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("pollBuilderPageNote")}
            <a class="admin-poll-deeplink" href="#/poll-deepdive" title="${ServerI18n.t("pollBuilderDeepdiveTitle")}">${ServerI18n.t("pollBuilderDeepdiveLink")}</a></p>
        </div>

        <!-- BUILDER VIEW -->
        <div class="admin-poll-master-detail" data-poll-view-builder>
          <!-- LEFT \xB7 queue with real DnD -->
          <aside class="admin-poll-queue-panel">
            <!-- v8\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R2\uFF09\uFF1AQUEUE \u82F1\u6587\u5C0D\u7167\u62FF\u6389\uFF0C
                 \u300C\u984C\u76EE\u4F47\u5217\u300D\u6539\u6210\u7A3F\u4E0A\u7684\u300C\u6392\u968A\u4E2D\u7684\u984C\u76EE\u300D\u2014\u2014\u5F8C\u8005\u662F\u767D\u8A71\uFF0C
                 \u524D\u8005\u662F\u8CC7\u6599\u7D50\u69CB\u7684\u540D\u5B57\u3002 -->
            <div class="admin-ui-group-label">${ServerI18n.t("pollQueueTitle")}</div>
            <div class="admin-poll-queue" data-poll-queue></div>
            <button type="button" class="admin-poll-add-btn" data-poll-action="add">${ServerI18n.t("pollBuilderAddQuestion")}</button>

            <!-- \u5FEB\u901F\u7BC4\u672C\uFF08\u7A3F\u4E0A\u6709\u3001\u539F\u672C\u6C92\u6709\uFF09\uFF1A\u4E09\u500B\u6700\u5E38\u898B\u7684\u984C\u578B\u4E00\u9375\u958B\u597D\uFF0C
                 \u7701\u6389\u300C\u65B0\u589E \u2192 \u6253\u5B57 \u2192 \u518D\u65B0\u589E\u4E00\u500B\u9078\u9805\u300D\u7684\u4F86\u56DE\u3002 -->
            <div class="admin-poll-templates">
              <span class="tpl-label">${ServerI18n.t("pollTemplatesLabel")}</span>
              <button type="button" class="admin-ui-chip" data-poll-template="yesno">${ServerI18n.t("pollTemplateYesNo")}</button>
              <button type="button" class="admin-ui-chip" data-poll-template="stars">${ServerI18n.t("pollTemplateStars")}</button>
              <button type="button" class="admin-ui-chip" data-poll-template="four">${ServerI18n.t("pollTemplateFourImg")}</button>
            </div>

            <div class="admin-poll-mode">
              <div class="admin-ui-group-label">${ServerI18n.t("pollBuilderPlayModeLabel")}</div>
              <div class="admin-ui-seg mode-row">
                <button type="button" class="seg-item is-active" data-poll-mode="manual"
                  title="${ServerI18n.t("pollBuilderModeManualSub")}">${ServerI18n.t("pollBuilderModeManual")}</button>
                <button type="button" class="seg-item" data-poll-mode="auto"
                  title="${ServerI18n.t("pollBuilderAutoAdvanceDesc")}">${ServerI18n.t("pollBuilderModeAuto")}</button>
              </div>
            </div>

            <!-- Multi-question session controls (P0-1) -->
            <div class="admin-poll-session" data-poll-session>
              <div class="session-status" data-poll-session-status>
                <span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>
              </div>
              <div class="session-actions">
                <button type="button" class="admin-ui-action is-primary admin-poll-session-action" data-poll-session-action="start">${ServerI18n.t("pollSessionStartBtn")}</button>
                <button type="button" class="admin-ui-action admin-poll-session-action" data-poll-session-action="advance" hidden>${ServerI18n.t("pollBuilderNextQuestionBtn")}</button>
                <button type="button" class="admin-ui-action is-danger admin-poll-session-action" data-poll-session-action="end" hidden>${ServerI18n.t("pollBuilderEndSessionBtn")}</button>
              </div>
            </div>
          </aside>

          <!-- RIGHT \xB7 active question editor -->
          <main class="admin-poll-editor" data-poll-editor></main>
        </div>

        <!-- LIVE HUD VIEW (rendered by renderLive()) -->
        <div class="admin-polls-live" data-poll-view-live hidden></div>

        <!-- RESULTS VIEW (rendered by renderResults()) -->
        <div class="admin-polls-results" data-poll-view-results hidden></div>

        <!-- Legacy single-question inputs retained for admin-poll.js compatibility -->
        <div class="admin-poll-legacy" hidden>
          <input type="text" id="pollQuestion" />
          <div id="pollOptionsContainer">
            <input type="text" class="poll-option-input" />
            <input type="text" class="poll-option-input" />
          </div>
          <button id="pollAddOptionBtn"></button>
          <button id="pollRemoveOptionBtn"></button>
          <button id="pollCreateBtn"></button>
          <button id="pollEndBtn"></button>
          <button id="pollResetBtn"></button>
        </div>

        <div id="pollStatusDisplay" class="admin-poll-status"></div>
      </div>
  `}function f(){let j=document.getElementById("sec-polls");if(!j)return;let F=j.querySelector("[data-poll-queue]"),$=j.querySelector("[data-poll-editor]"),m=j.querySelector("[data-poll-view-builder]"),N=j.querySelector("[data-poll-view-live]"),D=j.querySelector("[data-poll-view-results]"),B="danmu.adminPollQueue.v2";function w(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function L(W){return{id:P(),label:""}}function b(){return{id:w(),text:"",timer:90,image_url:"",server_q_id:"",options:[L("A"),L("B")]}}let x=null,q="builder",A=null,S=0,p={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,o=[];try{let W=localStorage.getItem(B);if(W){let z=JSON.parse(W);Array.isArray(z)?o=z:z&&Array.isArray(z.queue)&&(o=z.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[b()]),o.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let e=o[0].id,r="manual",n=null,d=null,s={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(B,JSON.stringify({queue:o,activeId:e,mode:r}))}catch{}}function c(W){return o.find(z=>z.id===W)}function g(W,z){let ee=c(W);ee&&Object.assign(ee,z)}function a(W,z,ee){let ae=W.slice(),[se]=ae.splice(z,1);return ae.splice(ee,0,se),ae}function i(){F.innerHTML="",o.forEach((W,z)=>{let ee=document.createElement("div");ee.className="admin-poll-qrow",W.id===e&&ee.classList.add("is-active");let ae=s.active&&s.currentIndex===z;ae&&ee.classList.add("is-running"),ee.dataset.qid=W.id,ee.draggable=!0;let se=!!W.image_url;ee.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${z+1}</span>
            <div class="info">
              <div class="text">${T(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${se?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${ae?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(ee)})}function u(){let W=c(e)||o[0];if(!W){$.innerHTML="";return}let z=o.indexOf(W);$.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${z+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:z+1})}</span>
            </div>
            <span class="progress">Q${z+1} / ${o.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${T(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${T(W.image_url)}" alt="" />
              <button type="button" class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q-image">${ServerI18n.t("pollBuilderRemoveImage")}</button>
            `:`
              <button type="button" class="admin-ui-action admin-poll-editor-action" data-ed-action="upload-q-image">${ServerI18n.t("pollBuilderUploadImageBtn")}</button>
              <input type="file" data-ed-q-image-input accept="image/jpeg,image/png,image/webp" hidden />
            `}
          </div>

          <!-- 2026-10-29\uFF1A\u88C1\u5207\u6BD4\u4F8B\u5217\u79FB\u9664\u3002q.crop \u53EA\u5BEB\u672C\u6A5F state\u2014\u2014\u5EFA\u7ACB\u8ACB\u6C42
               \u4E0D\u9001\u3001PollQuestionSchema \u4E0D\u6536\uFF0C\u89C0\u773E\u7AEF\u5F9E\u4F86\u6C92\u6709\u8B80\u904E\u5B83\u3002 -->
          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderOptionsFieldLabel")}</div>
          <div class="admin-poll-opts" data-ed-opts>
            ${W.options.map((ee,ae)=>`
              <div class="admin-poll-opt" data-oid="${ee.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+ae)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ee.id}" value="${T(ee.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+ae)})}" maxlength="100" />
                ${W.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ee.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
              </div>
            `).join("")}
            ${W.options.length<6?`<button type="button" class="admin-poll-opt-add" data-ed-opt-add>${ServerI18n.t("pollBuilderAddOptionBtn",{n:W.options.length})}</button>`:""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>${ServerI18n.t("pollBuilderTimeLimitLabel")}</span>
              <select data-ed-timer>
                <option value="30"${W.timer===30?" selected":""}>30s</option>
                <option value="90"${W.timer===90?" selected":""}>90s</option>
                <option value="180"${W.timer===180?" selected":""}>${ServerI18n.t("pollBuilderTimer3Min")}</option>
                <option value="300"${W.timer===300?" selected":""}>${ServerI18n.t("pollBuilderTimer5Min")}</option>
                <option value="0"${W.timer===0?" selected":""}>${ServerI18n.t("pollBuilderNoTimeLimit")}</option>
              </select>
            </label>
            <!-- 2026-10-29\uFF1A\u300C\u5141\u8A31\u591A\u9078\u300D\u79FB\u9664\u3002q.multi \u53EA\u5BEB\u672C\u6A5F state\uFF0C\u5EFA\u7ACB
                 \u8ACB\u6C42\u6C92\u6709\u9019\u500B\u6B04\u4F4D\u3001PollQuestionSchema \u4E5F\u4E0D\u6536\u2014\u2014\u89C0\u773E\u7AEF\u5F9E\u982D\u5230
                 \u5C3E\u90FD\u662F\u55AE\u9078\u3002\u8981\u56DE\u4F86\u5C31\u5F97\u6574\u689D\u4E32\uFF1Aschema \u2192 poll_service \u2192
                 viewer \u6295\u7968 UI \u2192 \u8A08\u7968\u3002 -->
            <div class="foot-spacer"></div>
            <!-- 2026-07-30\uFF1A\u300CSTART Qn\u300D\u820A\u8DEF\u5F91\u79FB\u9664\u2014\u2014\u5B83\u7E5E\u904E session \u6A21\u578B\u76F4\u6253
                 \u820A\u55AE\u984C /admin/poll/create\u3001\u524D\u7AEF\u81EA\u5DF1 watchAndAdvance\uFF0C\u9023\u5716\u7247
                 \u90FD\u50B3\u4E0D\u4E86\u3002\u552F\u4E00\u7684\u958B\u59CB\u5165\u53E3\u662F\u5DE6\u6B04 START SESSION\uFF08P0-1 \u6A21\u578B\uFF09\u3002 -->
            <button type="button" class="admin-ui-action is-danger admin-poll-editor-action" data-ed-action="remove-q">${ServerI18n.t("pollBuilderDeleteThisQuestion")}</button>
          </div>
        `}function v(){x&&x.active?q="live":A?q="results":q="builder",j.dataset.pollView=q,m.hidden=q!=="builder",N.hidden=q!=="live",D.hidden=q!=="results",i(),u(),J(),q==="live"?R():q==="results"&&E(),q==="live"?k():I()}function k(){l||(l=setInterval(()=>{q!=="live"||!x||!x.active||K()},1e3))}function I(){l&&(clearInterval(l),l=null)}function _(W,z){if(!W||!W.time_limit_seconds)return null;if(!z)return W.time_limit_seconds;let ee=Date.now()/1e3-z;return Math.max(0,Math.round(W.time_limit_seconds-ee))}function M(W){if(W==null)return"\u221E";let z=String(Math.floor(W/60)).padStart(2,"0"),ee=String(W%60).padStart(2,"0");return`${z}:${ee}`}function R(){if(!x||!x.questions||x.questions.length===0){N.innerHTML="";return}let W=x.current_index>=0?x.current_index:0,z=x.questions.length,ee=x.questions[W],ae=_(ee,x.started_at),se=ee.time_limit_seconds||0,de=se>0&&ae!=null?Math.max(0,Math.min(1,ae/se)):1,oe=se>0&&ae!=null&&ae<=Math.max(5,se*.15),be=ee.options.reduce((Se,Ee)=>Se+(Ee.count||0),0),Te=[...ee.options].sort((Se,Ee)=>(Ee.count||0)-(Se.count||0)),xe=Te[0]?Te[0].count:0,ie=x.questions[W+1],ne=110,re=ne/2-6,ue=2*Math.PI*re,Ie=ue*de;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${T((x.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:z})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${ne} ${ne}" width="56" height="56">
                      <circle cx="${ne/2}" cy="${ne/2}" r="${re}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${ne/2}" cy="${ne/2}" r="${re}" fill="none"
                        stroke="${oe?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${Ie} ${ue}" stroke-linecap="round"
                        transform="rotate(-90 ${ne/2} ${ne/2})"
                        style="filter: drop-shadow(0 0 4px ${oe?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${oe?"is-low":""}" data-live-mmss>${ae==null?ServerI18n.t("pollBuilderNoTimeLimit"):M(ae)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${T(ee.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Te.map(Se=>{let Ee=be>0?Se.count/be*100:0,Fe=(Se.count||0)>0&&Se.count===xe;return`
                    <div class="admin-polls-live-bar ${Fe?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${T(Se.key)}</span>
                        <span class="lbl">${T(Se.text||"")}</span>
                        ${Fe?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${Ee.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:Se.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${Ee.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${be}</strong>`})}</span>
                ${ie?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${T(ie.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${W>=z-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${W+1}/${z}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${x.questions.map((Se,Ee)=>{let Fe=Ee<W?"done":Ee===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${Fe}">
                        <span class="idx">${Fe==="done"?"\u2713":Ee+1}</span>
                        <span class="t">${T(Se.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${Fe==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(Se=>`
                    <label class="admin-polls-live-toggle ${p[Se.k]?"is-on":""}" data-live-toggle="${Se.k}">
                      <span class="lbl">${Se.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function K(){if(!x||!x.active)return;let W=x.current_index>=0?x.current_index:0,z=x.questions[W];if(!z)return;let ee=_(z,x.started_at),ae=z.time_limit_seconds||0,se=N.querySelector("[data-live-mmss]"),de=N.querySelector("[data-live-ring]");if(se&&(se.textContent=ee==null?ServerI18n.t("pollBuilderNoTimeLimit"):M(ee),se.classList.toggle("is-low",ae>0&&ee!=null&&ee<=Math.max(5,ae*.15))),de&&ae>0&&ee!=null){let oe=+de.getAttribute("r"),be=2*Math.PI*oe,Te=Math.max(0,Math.min(1,ee/ae));de.setAttribute("stroke-dasharray",`${be*Te} ${be}`);let xe=ee<=Math.max(5,ae*.15);de.setAttribute("stroke",xe?"var(--hud-crimson)":"var(--color-primary)"),de.style.filter=`drop-shadow(0 0 4px ${xe?"var(--hud-crimson)":"var(--color-primary)"})`}p.autoAdvance&&ae>0&&ee===0&&(W>=x.questions.length-1?G():Z())}function E(){let W=A;if(!W||!W.questions||W.questions.length===0){D.innerHTML="";return}let z=W.questions.length,ee=Math.max(0,Math.min(S,z-1)),ae=W.questions[ee],se=ae.options.reduce((ue,Ie)=>ue+(Ie.count||0),0),de=[...ae.options].sort((ue,Ie)=>(Ie.count||0)-(ue.count||0)),oe=de[0]||{key:"-",text:"\u2014",count:0},be=de[1],Te=se>0?oe.count/se*100:0,xe=be?Math.max(0,oe.count-be.count):oe.count,ie=W.started_at||0,ne=W.ended_at||Date.now()/1e3,re=Math.max(0,Math.round(ne-ie));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${z>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((ue,Ie)=>`
                    <button type="button" role="tab" class="${Ie===ee?"is-active":""}" data-results-tab="${Ie}">
                      Q${Ie+1}<span class="t">${T((ue.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ee+1}/${z} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:M(re),n:se})}</span>
                </div>
                <div class="text">${T(ae.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${T(oe.key)}</div>
                <div class="info">
                  <div class="lbl">${T(oe.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:oe.count})} \xB7 ${Te.toFixed(1)}% ${be?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:xe}):""}</div>
                </div>
                <div class="pct">${Te.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:se})}</span>
                </div>
                ${de.map((ue,Ie)=>{let Se=se>0?ue.count/se*100:0;return`
                    <div class="admin-polls-results-bar ${Ie===0&&ue.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${Ie+1}</span>
                        <span class="tag">${T(ue.key)}</span>
                        <span class="lbl">${T(ue.text||"")}</span>
                        <span class="pct">${Se.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${Se.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <aside class="admin-polls-results-rail">
              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderParticipationTitle")}</span>
                </div>
                <div class="admin-polls-results-stat">
                  <span class="big">${se}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,se?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:ae.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${ae.time_limit_seconds?M(ae.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${M(re)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let ue=Math.max(1,...de.map(Ie=>Ie.count));return de.map(Ie=>`<div class="bar" style="height:${Math.max(6,Ie.count/ue*100)}%"></div>`).join("")})()}
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderActionsTitle")}</span>
                </div>
                <div class="admin-polls-results-actions">
                  <button type="button" class="admin-polls-results-btn" data-results-action="copy">${ServerI18n.t("pollBuilderCopyResultsBtn")}</button>
                  <button type="button" class="admin-polls-results-btn" data-results-action="csv">${ServerI18n.t("pollBuilderExportCsvBtn")}</button>
                  <button type="button" class="admin-polls-results-btn" data-results-action="json">${ServerI18n.t("pollBuilderExportJsonBtn")}</button>
                  <button type="button" class="admin-polls-results-btn is-primary" data-results-action="reset">${ServerI18n.t("pollBuilderNewPollBtn")}</button>
                </div>
              </div>
            </aside>
          </div>
        `}function O(W){let z=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((ee,ae)=>{let se=ee.options.reduce((de,oe)=>de+(oe.count||0),0);ee.options.forEach(de=>{let oe=se>0?(de.count/se*100).toFixed(1):"0";z.push([ae+1,ee.text,de.key,de.text,de.count,oe])})}),z.map(ee=>ee.map(ae=>{let se=String(ae??"");return/[",\n]/.test(se)?`"${se.replace(/"/g,'""')}"`:se}).join(",")).join(`
`)}function U(W,z,ee){let ae=new Blob([ee],{type:z}),se=document.createElement("a");se.href=URL.createObjectURL(ae),se.download=W,document.body.appendChild(se),se.click(),setTimeout(()=>{URL.revokeObjectURL(se.href),se.remove()},0)}j.addEventListener("click",W=>{let z=W.target.closest("[data-live-action]");if(z){let de=z.dataset.liveAction;de==="advance"?Z():de==="end"?G():de==="pause"&&(p.autoAdvance=!1,R());return}let ee=W.target.closest("[data-live-toggle]");if(ee){let de=ee.dataset.liveToggle;de in p&&(p[de]=!p[de],ee.classList.toggle("is-on",p[de]));return}let ae=W.target.closest("[data-results-tab]");if(ae){S=+ae.dataset.resultsTab||0,E();return}let se=W.target.closest("[data-results-action]");if(se){let de=se.dataset.resultsAction,oe=A;if(!oe)return;if(de==="copy"){let be=oe.questions.map((Te,xe)=>{let ie=Te.options.reduce((re,ue)=>re+(ue.count||0),0),ne=Te.options.map(re=>{let ue=ie>0?(re.count/ie*100).toFixed(1):"0.0";return`  ${re.key}. ${re.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:re.count})} (${ue}%)`});return`Q${xe+1}: ${Te.text}
${ne.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(be)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else de==="csv"?U(`poll_${(oe.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",O(oe)):de==="json"?U(`poll_${(oe.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(oe,null,2)):de==="reset"&&(A=null,S=0,v());return}}),F.addEventListener("dragstart",W=>{let z=W.target.closest(".admin-poll-qrow");z&&(n=z.dataset.qid,z.classList.add("is-dragging"))}),F.addEventListener("dragend",W=>{let z=W.target.closest(".admin-poll-qrow");z&&z.classList.remove("is-dragging"),n=null,F.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over"))}),F.addEventListener("dragover",W=>{W.preventDefault();let z=W.target.closest(".admin-poll-qrow");!z||!n||z.dataset.qid===n||(F.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),z.classList.add("is-drag-over"))}),F.addEventListener("drop",W=>{W.preventDefault();let z=W.target.closest(".admin-poll-qrow");if(!z||!n)return;let ee=o.findIndex(se=>se.id===n),ae=o.findIndex(se=>se.id===z.dataset.qid);ee<0||ae<0||ee===ae||(o=a(o,ee,ae),t(),v())}),F.addEventListener("click",W=>{let z=W.target.closest(".admin-poll-qrow");z&&(e=z.dataset.qid,t(),v())}),$.addEventListener("input",W=>{let z=c(e);if(z){if(W.target.matches("[data-ed-text]")){z.text=W.target.value,t(),i();return}if(W.target.matches("[data-ed-opt-text]")){let ee=W.target.dataset.edOptText,ae=z.options.find(se=>se.id===ee);ae&&(ae.label=W.target.value,t(),i())}}}),$.addEventListener("change",W=>{let z=c(e);z&&W.target.matches("[data-ed-timer]")&&(z.timer=+W.target.value,t(),i())}),$.addEventListener("click",async W=>{let z=c(e);if(!z)return;let ee=W.target.closest("[data-ed-opt-remove]");if(ee){let se=ee.dataset.edOptRemove;z.options.length>2&&(z.options=z.options.filter(de=>de.id!==se),t(),u(),i());return}if(W.target.closest("[data-ed-opt-add]")){z.options.length<6&&(z.options.push(L()),t(),u(),i());return}let ae=W.target.closest("[data-ed-action]");if(ae)if(ae.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let de=o.findIndex(oe=>oe.id===e);o=o.filter(oe=>oe.id!==e),e=o[Math.min(de,o.length-1)].id,t(),v()}}else if(ae.dataset.edAction==="upload-q-image"){let se=$.querySelector("[data-ed-q-image-input]");se&&se.click()}else ae.dataset.edAction==="remove-q-image"&&(z.image_url="",t(),u(),i())}),$.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let z=W.target.files&&W.target.files[0];if(!z)return;let ee=c(e);if(!ee)return;if(!s.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!ee.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(z.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let ae=new FormData;ae.append("file",z);try{let se=await csrfFetch(`/admin/poll/${encodeURIComponent(s.pollId)}/upload-image/${encodeURIComponent(ee.server_q_id)}`,{method:"POST",body:ae}),de=await se.json().catch(()=>({}));if(!se.ok)throw new Error(de.error||"upload failed");ee.image_url=de.image_url,t(),u(),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(se){showToast&&showToast(String(se.message||se),!1)}finally{W.target.value=""}}),$.addEventListener("dragstart",W=>{let z=W.target.closest(".admin-poll-opt");z&&(d=z.dataset.oid,z.classList.add("is-dragging"))}),$.addEventListener("dragend",W=>{$.querySelectorAll(".is-dragging, .is-drag-over").forEach(z=>z.classList.remove("is-dragging","is-drag-over")),d=null}),$.addEventListener("dragover",W=>{let z=W.target.closest(".admin-poll-opt");!z||!d||z.dataset.oid===d||(W.preventDefault(),$.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),z.classList.add("is-drag-over"))}),$.addEventListener("drop",W=>{W.preventDefault();let z=W.target.closest(".admin-poll-opt"),ee=c(e);if(!z||!d||!ee)return;let ae=ee.options.findIndex(de=>de.id===d),se=ee.options.findIndex(de=>de.id===z.dataset.oid);ae<0||se<0||ae===se||(ee.options=a(ee.options,ae,se),t(),u())}),j.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let de=b();o.push(de),e=de.id,t(),v();return}let ee=W.target.closest("[data-poll-template]");if(ee){let de=b(),oe=ee.dataset.pollTemplate,be=["A","B","C","D","E"],Te=xe=>xe.map((ie,ne)=>{let re=L(be[ne]);return re.text=ie,re});oe==="yesno"?(de.text="",de.options=Te([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):oe==="stars"?(de.timer=60,de.options=Te(["1","2","3","4","5"])):oe==="four"&&(de.options=Te(["","","",""])),o.push(de),e=de.id,t(),v();return}let ae=W.target.closest("[data-poll-mode]");ae&&(r=ae.dataset.pollMode,j.querySelectorAll("[data-poll-mode]").forEach(de=>de.classList.toggle("is-active",de===ae)),t());let se=W.target.closest("[data-poll-session-action]");if(se){let de=se.dataset.pollSessionAction;de==="start"?te():de==="advance"?Z():de==="end"&&G()}});function J(){let W=j.querySelector("[data-poll-session]");if(!W)return;let z=W.querySelector("[data-poll-session-status]"),ee=W.querySelector("[data-poll-session-action='start']"),ae=W.querySelector("[data-poll-session-action='advance']"),se=W.querySelector("[data-poll-session-action='end']");if(!s.pollId||!s.active){z.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ee.hidden=!1,ae.hidden=!0,se.hidden=!0;return}let de=o.length,oe=s.currentIndex+1,be=s.currentIndex>=de-1;z.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${oe} / ${de}</span>`,ee.hidden=!0,ae.hidden=be,se.hidden=!1}async function te(){try{let W=o.map((oe,be)=>{let Te=(oe.text||"").trim(),xe=oe.options.map(ie=>(ie.label||"").trim()).filter(Boolean);if(!Te)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:be+1}));if(xe.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:be+1}));return{text:Te,options:xe,time_limit_seconds:oe.timer&&oe.timer>0?oe.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let z=(()=>{let oe=o.map(be=>Number(be.timer)||0).filter(be=>be>0);return oe.length?Math.round(oe.reduce((be,Te)=>be+Te,0)/oe.length):null})(),ee=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:r||"manual",default_duration_s:z})}),ae=await ee.json().catch(()=>({}));if(!ee.ok)throw new Error(ae.error||ServerI18n.t("pollBuilderErrCreateFailed"));s.pollId=ae.poll_id,(ae.questions||[]).forEach((oe,be)=>{o[be]&&(o[be].server_q_id=oe.id)}),t();let se=await csrfFetch("/admin/poll/start",{method:"POST"}),de=await se.json().catch(()=>({}));if(!se.ok)throw new Error(de.error||ServerI18n.t("pollBuilderErrStartFailed"));s.active=!0,s.currentIndex=de.current_index??0,x=de,A=null,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),Q()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function Z(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),z=await W.json().catch(()=>({}));if(!W.ok)throw new Error(z.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));s.currentIndex=z.current_index,s.active=!!z.active,x=z,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:s.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function G(){try{let W=x,z=await csrfFetch("/admin/poll/end",{method:"POST"});if(!z.ok){let ee=await z.json().catch(()=>({}));throw new Error(ee.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(A={...W,ended_at:Date.now()/1e3},S=W.current_index>=0?W.current_index:0),s.active=!1,s.pollId="",s.currentIndex=-1,x=null,s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function Q(){s.statusTimer&&clearInterval(s.statusTimer),s.statusTimer=setInterval(async()=>{if(s.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let z=await W.json();if(z.poll_id!==s.pollId)return;s.active=!!z.active,s.currentIndex=z.current_index??-1;let ee=!!(x&&x.active);x=z,z.active||(clearInterval(s.statusTimer),s.statusTimer=null,ee&&z.questions&&!A&&(A={...z,ended_at:Date.now()/1e3},S=z.current_index>=0?z.current_index:0),x=null),q==="live"?R():v()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),I()}),v()}function C(){let j=document.getElementById("settings-grid");!j||document.getElementById(y)||(j.insertAdjacentHTML("beforeend",h()),document.getElementById(y)&&f())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var Et=he(()=>{(function(){"use strict";let f="sec-live-feed",C={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},j=[],F=[],$=!1,m="",N="all",D=0,B=0,w=null,P=null,L=null;function b(ie){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ie):String(ie??"").replace(/[&<>"']/g,function(ne){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ne]})}function x(ie,ne){return ie?ie.length>ne?ie.slice(0,ne)+"\u2026":ie:""}function q(ie){let ne=new Date(ie),re=ue=>String(ue).padStart(2,"0");return`${re(ne.getHours())}:${re(ne.getMinutes())}:${re(ne.getSeconds())}`}function A(ie){if(!m)return!0;let ne=m.toLowerCase(),re=ie.data;return re.text&&re.text.toLowerCase().includes(ne)||re.nickname&&re.nickname.toLowerCase().includes(ne)||re.fingerprint&&re.fingerprint.toLowerCase().includes(ne)||re.layout&&re.layout.toLowerCase().includes(ne)}function S(ie){return N==="muted"?!!ie.muted:!0}function p(){N="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ie=>ie.classList.toggle("is-active",ie.dataset.tab==="all"))}function l(){m="",L&&(L.value=""),p()}function o(ie,ne){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let ue;return ie==="paused"?ue=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ne||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ie==="no-result"?ue=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ne||ServerI18n.t("lfNoMatchDesc")}):ue=window.AdminEmpty.render("messages"),ue.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),ue.setAttribute("data-empty-kind","live-feed"),ue}let re=document.createElement("div");return re.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",re.setAttribute("data-empty-kind","live-feed"),re.innerHTML=`<div class="admin-proto-placeholder-title">${b(ie)}</div><div class="admin-proto-placeholder-body">${b(ne||"")}</div>`,re}function e(ie){let ne=ie.data,re=document.createElement("div");re.className="admin-live-feed-row"+(ie.muted?" is-muted":""),re.dataset.id=ie.id,re.tabIndex=-1;let ue=document.createElement("span");if(ue.className="admin-live-feed-time",ue.textContent=q(ie.ts),re.appendChild(ue),(ne.layout||"scroll").toLowerCase()!=="scroll"){let ve=document.createElement("span");ve.className="admin-ui-chip admin-live-feed-tag",ve.textContent=ne.layout,re.appendChild(ve)}let Se=C[ne.integration];if(Se){let ve=document.createElement("span");ve.className="admin-ui-chip admin-live-feed-tag",ve.textContent=Se,re.appendChild(ve)}let Ee=document.createElement("span");Ee.className="admin-live-feed-text",Ee.textContent=x(ne.text||"",80),Ee.title=ne.text||"",re.appendChild(Ee);let Fe=document.createElement("span");Fe.className="admin-live-feed-identity",window.AdminIdentity&&Fe.appendChild(AdminIdentity.render({nickname:ne.nickname||"",fp:"",onNicknameClick:function(ve){!ve||!L||(L.value=ve,L.dispatchEvent(new Event("input",{bubbles:!0})),L.focus())}})),re.appendChild(Fe);let Ce=document.createElement("span");if(Ce.className="admin-live-feed-actions is-hover-reveal",ne.message_id){let ve=document.createElement("button");ve.type="button",ve.className="admin-ui-chip admin-live-feed-action",ve.textContent=ServerI18n.t("lfRecallBtn"),ve.title=ServerI18n.t("lfRecallTitle"),ve.addEventListener("click",_e=>{_e.stopPropagation(),n(ie)}),Ce.appendChild(ve)}let we=document.createElement("button");if(we.type="button",we.className="admin-ui-chip is-danger admin-live-feed-action",we.textContent=ServerI18n.t("blockKeywordBtn"),we.title=ServerI18n.t("blockKeywordTitle"),we.addEventListener("click",ve=>{ve.stopPropagation(),d("keyword",ne.text,ie.id)}),Ce.appendChild(we),ne.fingerprint){let ve=document.createElement("button");ve.type="button",ve.className="admin-ui-chip is-warn admin-live-feed-action",ve.textContent=ServerI18n.t("blockFpBtn"),ve.title=ServerI18n.t("blockFpTitle").replace("{fp}",ne.fingerprint),ve.addEventListener("click",_e=>{_e.stopPropagation(),d("fingerprint",ne.fingerprint,ie.id)}),Ce.appendChild(ve)}return re.appendChild(Ce),re.classList.add("is-clickable"),re.addEventListener("click",ve=>{ve.target.closest(".admin-live-feed-actions")||r(ie)}),re.addEventListener("keydown",ve=>{ve.key!=="Enter"||ve.target.closest("button")||(ve.preventDefault(),r(ie))}),re}function r(ie){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ie)}async function n(ie){let ne=ie&&ie.data&&ie.data.message_id;if(!ne)return;let re=await window.AdminModeration.recall(ne);if(!re.ok){console.error("[LiveFeed] Recall failed:",re.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ie.recalled=!0;let ue=s(ie.id);ue&&ue.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function d(ie,ne,re){if(!(!ne||!await(ie==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ne))){if(re){let Se=j.find(Ee=>Ee.id===re);Se&&(Se.muted=!0)}else j.forEach(Se=>{ie==="keyword"&&Se.data.text===ne&&(Se.muted=!0),ie==="fingerprint"&&Se.data.fingerprint===ne&&(Se.muted=!0)});g()}}function s(ie){if(!w||!ie)return null;let ne=w.children;for(let re=0;re<ne.length;re++)if(ne[re].dataset&&ne[re].dataset.id===ie)return ne[re];return null}function t(){let ie=document.activeElement,ne=ie&&ie.closest?ie.closest(".admin-live-feed-row"):null;return ne?ne.dataset.id:null}function c(ie){if(!ie)return;let ne=s(ie);ne&&document.activeElement!==ne&&ne.focus({preventScroll:!0})}function g(){if(!w)return;let ie=t(),ne=document.createDocumentFragment(),re=j.filter(ue=>A(ue)&&S(ue));for(let ue=re.length-1;ue>=0;ue--)ne.appendChild(e(re[ue]));if(w.textContent="",ne.childNodes.length===0){let ue=$?o("paused"):j.length===0?o("empty"):o("no-result");w.appendChild(ue)}else w.appendChild(ne);u(),c(ie)}function a(ie){if(!w||!A(ie)||!S(ie))return null;let ne=w.querySelector("[data-empty-kind='live-feed']");ne&&ne.remove();let re=w.scrollTop<=8,ue=e(ie);if(re)w.insertBefore(ue,w.firstChild);else{let Ie=w.scrollHeight;w.insertBefore(ue,w.firstChild),w.scrollTop+=w.scrollHeight-Ie,B+=1}return ue}function i(){let ie=j.length-200;if(ie<=0)return;j.splice(0,ie).forEach(re=>{let ue=s(re.id);ue&&ue.remove()})}function u(){_(),M(),k()}function v(ie){let ne={ts:Date.now(),data:ie,id:ie&&ie.message_id?"m"+ie.message_id:"e"+ ++D};if(ie&&ie.status==="blocked"&&(ne.muted=!0),$){F.push(ne),M(),k();return}j.push(ne),a(ne),i(),u()}function k(){let ie=document.querySelector("[data-lf-jump]"),ne=document.querySelector("[data-lf-jump-n]");if(!ie||!ne)return;let re=F.length,ue=re>0?re:B;ue>0?(ie.hidden=!1,ne.textContent=String(ue)):ie.hidden=!0}function I(){$&&R(),B=0,w&&(w.scrollTop=0),k()}function _(){let ie=document.querySelector("[data-lf-state]");ie&&(ie.className=$?"ui-status is-warning":"ui-status is-success",ie.textContent=$?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function M(){let ie=document.getElementById(f)||document,ne=(re,ue)=>{let Ie=ie.querySelector(re);Ie&&(Ie.textContent=String(ue))};ne("[data-cnt-all]",j.length),ne("[data-cnt-mut]",j.filter(re=>re.muted).length)}function R(){if($=!$,w&&w.setAttribute("aria-live",$?"off":"polite"),P&&(P.textContent=$?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),P.classList.toggle("is-primary",$),P.classList.toggle("is-ghost",!$)),$)M(),k();else{for(let ie of F)j.push(ie);F=[],j.length>200&&j.splice(0,j.length-200),B=0,g()}}function K(){let ie=document.getElementById("settings-grid");if(!ie)return!1;let ne=`
      <div id="${f}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("lfPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("lfPageNote")}</p>
        </div>

        <div class="admin-lf-v4__card">
          <!-- Filter bar \u2014 design v4 chips with counts -->
          <div class="admin-lf-v4__filterbar">
            <div class="admin-lf-v4__chips" role="tablist">
              <button type="button" class="admin-lf-v4__chip is-active admin-live-feed-tab" data-tab="all" role="tab">
                ${ServerI18n.t("lfChipAll")} <span class="admin-lf-v4__count" data-cnt-all>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="muted" role="tab">
                ${ServerI18n.t("lfChipBlocked")} <span class="admin-lf-v4__count" data-cnt-mut>0</span>
              </button>
            </div>
            <!-- \u5F85\u5BE9\u4E0D\u662F\u9019\u4E32\u8A0A\u606F\u7684\u7BE9\u9078\u689D\u4EF6\uFF08\u5F85\u5BE9\u8A0A\u606F\u5C1A\u672A\u986F\u793A\uFF09\uFF0C\u662F\u901A\u5F80\u5BE9\u6838\u4F47\u5217\u7684\u5165\u53E3\u3002
                 \u653E\u5728 tablist \u5916\u9762\uFF0C\u56E0\u70BA\u5B83\u662F\u9023\u7D50\u4E0D\u662F\u5206\u9801\u3002 -->
            <a class="admin-lf-v4__chip admin-lf-v4__chip--link" href="#/moderation/queue" data-lf-pending-link>
              ${ServerI18n.t("lfChipPending")} <span class="admin-lf-v4__count" data-cnt-q>0</span>
            </a>
            <span class="admin-lf-v4__spacer"></span>
            <input id="liveFeedSearch" type="search"
              placeholder="${b(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${b(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${b(ServerI18n.t("clearBtn"))}</button>
          </div>


          <!-- Message list (relative for sticky jump pill) -->
          <div class="admin-lf-v4__streamwrap">
            <!-- role="log" \uFF0B aria-live\uFF08\u8A2D\u8A08\u7A3F 17\uFF09\uFF1A\u9019\u662F\u4E00\u4E32\u6703\u81EA\u5DF1\u9577\u51FA\u65B0
                 \u9805\u76EE\u7684\u5167\u5BB9\uFF0C\u87A2\u5E55\u95B1\u8B80\u5668\u8981\u5538\u51FA\u65B0\u5230\u7684\u8A0A\u606F\u3002\u539F\u672C\u662F role="list"
                 \u4E14\u6C92\u6709 aria-live\u2014\u2014\u65B0\u5F48\u5E55\u9032\u4F86\u5B8C\u5168\u4E0D\u6703\u88AB\u6717\u8B80\u3002
                 aria-relevant="additions" \u8B93\u5B83\u53EA\u5538\u65B0\u589E\u7684\uFF0C\u4E0D\u6703\u56E0\u70BA\u5217\u8868\u91CD\u6392
                 \u5C31\u628A\u6574\u4E32\u91CD\u5538\u4E00\u904D\u3002\u66AB\u505C\u6372\u52D5\u6642\u5207\u6210 "off"\uFF08\u898B togglePause\uFF09\u3002 -->
            <div
              id="liveFeedList"
              class="admin-live-feed-list admin-lf-v4__list"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="${ServerI18n.t("lfAriaLabel")}"
            ></div>
            <div class="admin-lf-v4__jump" data-lf-jump hidden>
              <button type="button" data-lf-jump-btn><span data-lf-jump-n>0</span> ${ServerI18n.t("lfJumpNew")}</button>
            </div>
          </div>

          <!-- \u5361\u5E95\u4E00\u884C\uFF08\u8A2D\u8A08\u7A3F 06 \xB7 \xA73\uFF09\uFF1A\u300C\u81EA\u52D5\u6372\u52D5\u4E2D \xB7 \u6ED1\u9F20\u505C\u5728\u8A0A\u606F\u4E0A\u53EF\u96B1\u85CF\u6216\u5C01\u9396\u300D\u3002
               \u539F\u672C\u9019\u88E1\u662F 0 TOTAL \xB7 0.0 MSG/S \u5169\u500B\u8A08\u6578\u5668\u2014\u2014\u5BEB\u6B7B\u7684\u5168\u5927\u5BEB\u82F1\u6587\uFF0C
               \u6C92\u9032 i18n\uFF0C\u9055\u53CD\u8A2D\u8A08\u7A3F 14 \u7684\u6587\u6848\u898F\u5247\uFF1B\u800C\u4E14\u6578\u91CF\u672C\u4F86\u5C31\u5728\u5361\u982D\u7684\u5206\u6BB5
               \u63A7\u5236\u4E0A\uFF08\u5168\u90E8 N\uFF0F\u53EF\u7591 N\uFF0F\u5DF2\u5C01\u9396 N\uFF09\uFF0C\u9019\u88E1\u662F\u7B2C\u4E8C\u6B21\u8B1B\u540C\u4E00\u4EF6\u4E8B\u3002
               \u72C0\u614B\uFF1D\u8272\u9EDE\uFF0B\u6587\u5B57\uFF08\u8A2D\u8A08\u7A3F 03\u300C\u539F\u5247 4\u300D\uFF09\uFF0C\u4E00\u9846 .ui-status \u627F\u8F09\u5169\u8005\u3002 -->
          <div class="admin-lf-v4__bottom">
            <span class="ui-status is-success" data-lf-state>${ServerI18n.t("lfAutoScrollOn")}</span>
            <span class="admin-lf-v4__hint">${ServerI18n.t("lfRowHint")}</span>
          </div>
        </div>
      </div>`;return ie.insertAdjacentHTML("beforeend",ne),!0}let E=!1,O=null,U=0,J=1500,te=!1;async function Z(){if(!te){te=!0;try{let ie=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(U),{credentials:"same-origin"});if(!ie.ok)return;let ne=await ie.json();if(Array.isArray(ne.entries)){for(let re of ne.entries)if(!(!re||!re.data)){if(typeof re.seq=="number"){if(re.seq<=U)continue;U=re.seq}v(re.data)}}typeof ne.next_since=="number"&&ne.next_since>U&&(U=ne.next_since)}catch{}finally{te=!1}}}let G=5e3,Q=null,W=!1;async function z(){if(!(W||document.hidden)){W=!0;try{let ie=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ie.ok)return;let ne=await ie.json(),re=Array.isArray(ne.pending)?ne.pending.length:0,ue=document.getElementById(f);if(!ue)return;let Ie=ue.querySelector("[data-cnt-q]");Ie&&(Ie.textContent=String(re));let Se=ue.querySelector("[data-lf-pending-link]");Se&&Se.classList.toggle("has-pending",re>0)}catch{}finally{W=!1}}}function ee(){E||(E=!0,Z(),O=setInterval(Z,J),z(),Q=setInterval(z,G),window.addEventListener("beforeunload",()=>{Q&&(clearInterval(Q),Q=null),O&&(clearInterval(O),O=null)}))}function ae(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&K()&&(se(),g())}function se(){w=document.getElementById("liveFeedList"),P=document.getElementById("liveFeedPauseBtn"),L=document.getElementById("liveFeedSearch");let ie=document.getElementById("liveFeedClearBtn"),ne=document.querySelectorAll(".admin-live-feed-tab");P&&P.addEventListener("click",R),ie&&ie.addEventListener("click",()=>{j=[],F=[],B=0,g()});let re=document.querySelector("[data-lf-jump-btn]");if(re&&re.addEventListener("click",I),w&&w.addEventListener("scroll",()=>{w.scrollTop<=8&&B>0&&(B=0,k())},{passive:!0}),ne.forEach(ue=>{ue.addEventListener("click",()=>{ne.forEach(Ie=>Ie.classList.remove("is-active")),ue.classList.add("is-active"),N=ue.dataset.tab||"all",g()})}),L){let ue=null;L.addEventListener("input",()=>{clearTimeout(ue),ue=setTimeout(()=>{m=L.value.trim(),g()},200)})}ee()}function de(ie){if(!("ontouchstart"in window))return;let ne=0,re=0,ue=0,Ie=null,Se=null,Ee=!1;function Fe(Ce){if(Ce.querySelector(".admin-live-feed-row__swipe-actions"))return;let we=Ce.dataset.id,ve=j.find(Be=>Be.id===we),_e=!!(ve&&ve.data&&ve.data.message_id),$e=document.createElement("div");$e.className="admin-live-feed-row__swipe-actions",$e.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${_e?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,$e.addEventListener("click",function(Be){let H=Be.target.closest("[data-swipe-act]");if(!H||H.disabled)return;let V=Ce.dataset.id,Y=j.find(le=>le.id===V);if(!Y||!Y.data)return;let X=H.dataset.swipeAct;X==="ban"?Y.data.fingerprint&&d("fingerprint",Y.data.fingerprint,V):X==="recall"&&n(Y),Ce.classList.remove("is-swiped")}),Ce.appendChild($e)}ie.addEventListener("touchstart",function(Ce){let we=Ce.target.closest(".admin-live-feed-row");we&&(Ce.target.closest(".admin-live-feed-row__swipe-actions")||(Ie=we,Ee=!1,ne=Ce.touches[0].clientX,re=Ce.touches[0].clientY,ue=0))},{passive:!0}),ie.addEventListener("touchmove",function(Ce){if(!Ie||Ee)return;let we=Ce.touches[0],ve=we.clientX-ne,_e=we.clientY-re;if(Math.abs(_e)>Math.abs(ve)&&Math.abs(_e)>12){Ee=!0;return}if(ue=ve,ve<-10){Fe(Ie),Se=Ie,Ie.classList.add("is-swiping");let $e=Math.max(-180,ve);Ie.style.transform=`translateX(${$e}px)`}else ve>10&&Ie.classList.contains("is-swiped")&&(Ie.style.transform="")},{passive:!0}),ie.addEventListener("touchend",function(){Ie&&(Ie.classList.remove("is-swiping"),Ie.style.transform="",ue<=-60?Ie.classList.add("is-swiped"):Ie.classList.remove("is-swiped"),Ie=null,Se=null,ue=0)},{passive:!0})}function oe(){return w?Array.from(w.querySelectorAll(".admin-live-feed-row")):[]}function be(){let ie=oe(),ne=document.activeElement;for(let re of ie)if(re===ne||re.contains(ne))return re;return null}function Te(ie){let ne=oe();if(!ne.length)return!1;let re=be(),ue=re?ne.indexOf(re)+ie:ie>0?0:ne.length-1;return ue=Math.max(0,Math.min(ne.length-1,ue)),ne[ue].focus(),ne[ue].scrollIntoView({block:"nearest"}),!0}function xe(ie){let ne=be();if(!ne)return!1;let re=j.find(Ie=>Ie.id===ne.dataset.id);if(!re)return!1;let ue=ie==="keyword"?re.data.text:re.data.fingerprint;return ue?(d(ie,ue,re.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return j.slice()},isVisible:function(){return!!(w&&w.offsetParent!==null)},isPaused:function(){return $},moveFocus:Te,blockFocused:xe,togglePause:function(){R()}},document.addEventListener("admin-panel-rendered",ae),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ae):ae()})()});var $t=he(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;function f(c,g=!1){var a=y();return a[c]!==void 0?a[c]:g}function C(c){var g=y();g[c.id]=c.open,T(g)}let j=!1;new MutationObserver(()=>{let c=document.getElementById("settings-grid");if(c&&!(document.getElementById("sec-plugins")||j)){j=!0;try{$(c)}finally{j=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function $(c){let g=`
        <details id="sec-plugins" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
          <summary class="admin-ui-page-title" data-i18n="tabExtPlugins">${ServerI18n.t("tabExtPlugins")}</summary>
          <div class="hud-page-stack">
          <div class="admin-ui-page-head">
          <p class="admin-ui-page-note">${ServerI18n.t("pluginsPageNote2")}</p>
          </div>

          <div class="admin-ui-toolbar admin-plugins-toolbar">
            <span class="admin-ui-monolabel">${ServerI18n.t("pluginsSectionLabel")} \xB7 <span data-plugins-count>0</span> ${ServerI18n.t("pluginsCountUnit")}</span>
            <span class="admin-ui-spacer"></span>
            <button id="pluginsUploadBtn" class="admin-ui-action is-primary admin-plugins-toolbar-btn" type="button">${ServerI18n.t("pluginsUploadBtnLabel")}</button>
            <button id="pluginsReloadBtn" class="admin-ui-action admin-plugins-toolbar-btn" type="button">${ServerI18n.t("reloadBtn")}</button>
          </div>

          <section class="admin-kpi-strip is-4col">
            <div class="admin-kpi-tile is-text" data-plugins-kpi="loaded">
              <div class="admin-kpi-tile-head">
                <span class="label">${ServerI18n.t("pluginsStatLoaded")}</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="loaded">\u2014</div>
              <div class="admin-kpi-tile-delta is-muted">SDK plugin slots</div>
            </div>
            <div class="admin-kpi-tile is-lime" data-plugins-kpi="running">
              <div class="admin-kpi-tile-head">
                <span class="label">${ServerI18n.t("pluginsStatRunning")}</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="running">\u2014</div>
              <div class="admin-kpi-tile-delta is-success">${ServerI18n.t("pluginsDeltaLive")}</div>
            </div>
            <div class="admin-kpi-tile is-amber" data-plugins-kpi="paused">
              <div class="admin-kpi-tile-head">
                <span class="label">${ServerI18n.t("pluginsStatPaused")}</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="paused">\u2014</div>
              <div class="admin-kpi-tile-delta is-warn">${ServerI18n.t("pluginsDeltaWaiting")}</div>
            </div>
            <div class="admin-kpi-tile is-cyan" data-plugins-kpi="priority">
              <div class="admin-kpi-tile-head">
                <span class="label">${ServerI18n.t("pluginsStatAvgPriority")}</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="priority">\u2014</div>
              <div class="admin-kpi-tile-delta is-info">${ServerI18n.t("pluginsDeltaPriorityHint")}</div>
            </div>
          </section>

          <div class="admin-plugins-card">
            <div class="admin-plugins-table">
              <div class="admin-plugins-row admin-plugins-row--head">
                <span>\u25CF</span>
                <span>${ServerI18n.t("pluginsSecDesc")}</span>
                <span>${ServerI18n.t("uiColVersion")}</span>
                <span>${ServerI18n.t("uiColPriority")}</span>
                <span>${ServerI18n.t("uiColLang")}</span>
                <span style="text-align:right">${ServerI18n.t("ulStatus")}</span>
              </div>
              <div id="pluginsList">
                <div class="admin-plugins-row admin-plugins-empty">
                  <span></span>
                  <span class="admin-plugins-loading">${ServerI18n.t("loadingPlugins")}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="admin-plugins-card admin-plugins-console-card">
            <div class="admin-plugins-console-head">
              <span class="admin-plugins-console-dot"></span>
              <span class="admin-plugins-console-title">${ServerI18n.t("pluginsConsoleTitle")}</span>
              <span class="admin-ui-monolabel" style="margin:0">stdout + stderr</span>
              <span class="admin-ui-spacer"></span>
              <span class="admin-ui-chip-group admin-plugins-console-filters" data-console-filters>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip is-active" data-console-filter="all">${ServerI18n.t("uiLevelAll")}</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="INFO">${ServerI18n.t("uiLevelInfo")}</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="WARN">${ServerI18n.t("uiLevelWarn")}</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="ERROR">${ServerI18n.t("uiLevelError")}</button>
              </span>
              <span class="admin-ui-monolabel" style="margin-left:8px">${ServerI18n.t("uiLiveTail")}</span>
            </div>
            <div class="admin-plugins-console-body" id="pluginsConsoleBody">
              <div class="admin-plugins-console-line">
                <span class="ts">\u2014</span>
                <span class="lv is-info">INFO</span>
                <span class="plg">plugin-manager</span>
                <span class="msg">Console stream becomes live when plugins emit stdout/stderr.</span>
              </div>
            </div>
          </div>
          </div>
        </details>
      `;c.insertAdjacentHTML("beforeend",g);let a=document.querySelector("[data-console-filters]");a&&a.addEventListener("click",i=>{let u=i.target.closest("[data-console-filter]");u&&(a.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===u)),D=u.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),A(),q()}let m=0,N=0,D="all",B=[],w=80;function P(c){let g=(c||"INFO").toUpperCase();return g==="ERROR"?"is-error":g==="WARN"?"is-warn":g==="DEBUG"?"is-debug":"is-info"}function L(c){let g=new Date(c*1e3),a=i=>String(i).padStart(2,"0");return`${a(g.getHours())}:${a(g.getMinutes())}:${a(g.getSeconds())}`}function b(){let c=document.getElementById("pluginsConsoleBody");if(!c)return;let g=D==="all"?B:B.filter(a=>(a.level||"INFO").toUpperCase()===D);if(g.length===0){let a=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;c.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${a}</span>
          </div>`;return}c.innerHTML=g.map(a=>{let i=L(a.ts),u=(a.msg||"").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),v=(a.plugin||"\u2014").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),k=(a.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${i}</span>
          <span class="lv ${P(a.level)}">${k}</span>
          <span class="plg">${v}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function x(){try{let c=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!c.ok)return;let g=await c.json();if(!Array.isArray(g.events)||g.events.length===0)return;for(B.unshift(...g.events);B.length>w;)B.pop();m=g.latest_seq||m,b()}catch{}}function q(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:x}))}async function A(){let c=document.getElementById("pluginsList");if(c)try{let g=await csrfFetch("/admin/plugins/list");if(!g.ok)throw new Error(`HTTP ${g.status}`);let i=(await g.json()).plugins||[];if(i.length===0){c.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",S([]);return}c.innerHTML=i.map(p).join(""),d(c),S(i)}catch(g){console.error("Failed to load plugins:",g),c.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function S(c){let g=c.length,a=c.filter(I=>I.enabled).length,i=g-a,u=c.map(I=>I.priority).filter(I=>typeof I=="number"),v=u.length?Math.round(u.reduce((I,_)=>I+_,0)/u.length):null,k=(I,_)=>{document.querySelectorAll(`[data-plugins-stat="${I}"]`).forEach(M=>{M.textContent=_})};k("loaded",g),k("running",a),k("paused",i),k("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(I=>{I.textContent=g})}function p(c){let{name:g,version:a,description:i,priority:u,enabled:v,is_user:k,file:I}=c,_=`plugin-toggle-${g}`,M=e(u),R=n(u),K=o(c),E=k&&I?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${h(I)}"
            data-plugin-name="${h(g)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${h(g)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${h(g)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${h(g)}</div>
            ${i?`<div class="desc">${h(i)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${a?"v"+h(a):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${M}">${u??"\u2014"}${R?" \xB7 "+R:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${r(K)}">${K}</span>
          <div class="admin-plugins-toggle-cell">
            ${E}
            <label class="admin-plugins-switch" for="${_}">
              <input type="checkbox" id="${_}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${h(g)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${h(g)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function l(c,g){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:c}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:g}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let i=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:g})}),u=await i.json().catch(()=>({}));if(!i.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:i.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:c}),!0),await A()}catch(i){showToast(ServerI18n.t("pluginsToastNetError",{msg:i.message||""}),!1)}}function o(c){let g=c.file||c.path||c.source||"";if(typeof g=="string"){if(g.endsWith(".py"))return"PY";if(g.endsWith(".js"))return"JS"}return(c.language||"PY").toUpperCase()}function e(c){return c==null?"is-muted":c<=10?"is-danger":c<=50?"is-warn":"is-cyan"}function r(c){return c==="JS"?"is-cyan":c==="PY"?"is-warn":"is-muted"}function n(c){return c==null?"":c<=10?"CRITICAL":c<=50?"HIGH":"NORMAL"}function d(c){c.querySelectorAll(".plugin-toggle").forEach(g=>{g.addEventListener("change",async function(){let a=this.dataset.pluginName,i=this.checked;await s(a,i,this)})}),c.querySelectorAll(".plugin-uninstall").forEach(g=>{g.addEventListener("click",function(){l(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(c,g,a){let i=g?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||`HTTP ${u.status}`)}showToast(g?ServerI18n.t("pluginEnabled").replace("{name}",c):ServerI18n.t("pluginDisabled").replace("{name}",c),!0)}catch(u){console.error(`Failed to ${g?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),a&&(a.checked=!g)}}async function t(){let c=document.getElementById("pluginsReloadBtn");c&&(c.disabled=!0);try{let g=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!g.ok){let a=await g.json().catch(()=>({}));throw new Error(a.error||`HTTP ${g.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await A()}catch(g){console.error("Failed to reload plugins:",g),showToast(g.message||ServerI18n.t("reloadFailed"),!1)}finally{c&&(c.disabled=!1)}}})})()});var xt=he(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},T={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},h=null,f=null;function C(){return h||(h=document.createElement("div"),h.className="admin-pu-backdrop",h.hidden=!0,h.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(h),h.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===h)&&o()}),h)}function j(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((n,d)=>{let s=d+1,t=s<e,g=t?"is-done":s===e?"is-active":"";return(d>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${g}">
          <span class="circle">${t?"\u2713":s}</span>
          <span class="label">${n}</span>
        </div>`}).join("")}function F(e,r){f.step=e;let n=h.querySelector("[data-pu-steps]");n&&(n.innerHTML=j(e));let d=h.querySelector("[data-pu-body]");d&&(d.innerHTML=r)}function $(e){let r=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),n=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${n}</div>
          <div class="admin-pu-dropzone-msg">${y(r)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let e=h.querySelector("[data-pu-dropzone]"),r=h.querySelector("[data-pu-file]"),n=h.querySelector("[data-pu-browse]");n&&n.addEventListener("click",()=>r&&r.click()),r&&r.addEventListener("change",()=>{r.files&&r.files[0]&&N(r.files[0])}),e&&(e.addEventListener("click",()=>r&&r.click()),e.addEventListener("dragover",d=>{d.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",d=>{d.preventDefault(),e.classList.remove("is-over");let s=d.dataTransfer&&d.dataTransfer.files;if(!(!s||s.length===0)){if(s.length>1){F(1,$("error-multi")),m();return}N(s[0])}}))}function N(e){if(!e.name.match(/\.py$/i)){F(1,$("error-type")),m();return}if(e.size>256*1024){F(1,$("error-size")),m();return}f.file=e,F(2,D(e.name)),B(e)}function D(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(e)}</div>
      </div>`}async function B(e){try{let r=new FormData;r.append("file",e);let n=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:r}),d=await n.json().catch(()=>({}));if(!n.ok&&!d.validation){window.showToast?.(d.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:n.status}),!1),F(1,$()),m();return}f.manifest=d.manifest||{},f.validation=d.validation||{},f.filename=d.filename||e.name,w(f)}catch(r){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:r.message||""}),!1),F(1,$()),m()}}function w(e){let r=e.manifest||{},n=e.validation||{},d="";if(!n.syntax_ok)d=P(n.syntax_err,e);else if(Object.keys(r).length===0)d=L(e);else{let s=(n.deps||[]).some(t=>t.status==="missing");d=q(r,n,e,s)}F(2,`<div class="admin-pu-step2">${d}</div>`),A()}function P(e,r){let n=e&&e.line?e.line:"?",d=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${n}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${r.filename}
${d}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function L(e){return`
      <div class="admin-pu-no-manifest">
        <div class="admin-pu-no-manifest-icon">\u26A0</div>
        <div class="admin-pu-no-manifest-title">${ServerI18n.t("pluginsUploadNoManifestTitle")}</div>
        <p class="admin-pu-no-manifest-body">${ServerI18n.t("pluginsUploadNoManifestBody")}</p>
        <pre class="admin-pu-manifest-example"># @name auto_moderate
# @version 1.0.0
# @author @mei
# @priority 50</pre>
        <label class="admin-pu-no-manifest-ack">
          <input type="checkbox" data-pu-no-manifest-ack />
          <span>${ServerI18n.t("pluginsUploadNoManifestAck")}</span>
        </label>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action is-warn admin-pu-btn" disabled data-pu-confirm>${ServerI18n.t("pluginsUploadContinueNoManifest")}</button>
      </footer>`}function b(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function x(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let r=b(e),n=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${r}">${e} \xB7 ${n}</span>`}function q(e,r,n,d){let s=e.name||n.filename.replace(/\.(py|js)$/i,""),t=e.version?`v${y(e.version)}`:"\u2014",c=e.author?`@${y(e.author.replace(/^@/,""))}`:"\u2014",g=e.description||ServerI18n.t("pluginsUploadNoDescription"),a="PY",i="is-warn",u=Array.isArray(e.permissions)?e.permissions:[],v=Object.keys(T).map(R=>{let K=u.includes(R);return`
        <div class="admin-pu-perm-row ${K?"is-req":"is-not"}">
          <span class="dot">${K?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(R)}</span>
          <span class="label">${y(ServerI18n.t(T[R]))}</span>
        </div>`}).join(""),k=r.deps||[],I=k.map(R=>{let K=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",E=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${K}">
          <span class="dot">${E}</span>
          <span class="name">${y(R.name)}</span>
          <span class="note">${y(R.note||"")}</span>
        </div>`}).join(""),_=r.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(s)}</span>`})}
      </div>`:"",M=k.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${I}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(s)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${c}</span>
          <span class="admin-ui-pill admin-pu-pill ${i}" style="margin-left:auto">${a}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(g)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${x(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${v}</div>
        </section>
        ${M}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${d?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${d?"disabled":""} data-pu-confirm>${d?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function A(){let e=h.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,F(1,$()),m()});let r=h.querySelector("[data-pu-confirm]");r&&r.addEventListener("click",()=>S());let n=h.querySelector("[data-pu-no-manifest-ack]");n&&r&&n.addEventListener("change",()=>{r.disabled=!n.checked})}function S(){let e=f.manifest||{},r=e.name||(f.filename||"").replace(/\.(py|js)$/i,""),n=e.version?`v${y(e.version)}`:"\u2014",d=Array.isArray(e.permissions)?e.permissions:[],s=d.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:d.map(g=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(g)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(r)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${s}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${y(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=h.querySelector("[data-pu-install]");t&&t.addEventListener("click",p);let c=h.querySelector("[data-pu-back]");c&&c.addEventListener("click",()=>w(f))}async function p(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",f.file);let r=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),n=await r.json().catch(()=>({}));if(!r.ok){window.showToast?.(n.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:r.status}),!1),w(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:n.name||f.filename}),!0),o();let d=document.getElementById("pluginsReloadBtn");d&&d.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),w(f)}}function l(){C(),f={step:1,file:null,manifest:null,validation:null,filename:null},F(1,$()),m(),h.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){h&&(h.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:l,close:o},document.addEventListener("click",e=>{e.target.closest("#pluginsUploadBtn")&&(e.preventDefault(),l())})})()});var Lt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let T="sec-webhooks",h=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function C(s,t){return s?s.length>t?s.slice(0,t)+"\u2026":s:""}function j(s){if(!s)return"\u2014";try{let t=new Date(s),c=Math.max(0,(Date.now()-t.getTime())/1e3);return c<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(c)}):c<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(c/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(c/86400)})}catch{return"\u2014"}}function F(s){if(!s)return"\u2014";try{return new URL(s).hostname}catch{return C(s,30)}}function $(s){return s==="active"?"is-success":s==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function N(){let s=document.getElementById("settings-grid");!s||document.getElementById(T)||(s.insertAdjacentHTML("beforeend",`
      <details id="${T}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
        <summary class="admin-ui-page-title" data-i18n="tabExtWebhooks">${ServerI18n.t("tabExtWebhooks")}</summary>
        <div class="admin-webhooks-page hud-page-stack">
        <div class="admin-ui-page-head">
          <p class="admin-ui-page-note">
            ${ServerI18n.t("webhooksPageNote")}
          </p>
          <!-- 2026-11-14\uFF1A\u9801\u9996\u53F3\u5074\u90A3\u9846\u300C\u65B0\u589E Webhook\u300D\u79FB\u9664\u3002\u5B83\u4EE5\u524D\u6703\u88AB\u642C\u9032\u9802\u6B04\uFF1B
               \u6536\u9032\u300C\u7CFB\u7D71 \u203A \u64F4\u5145\u300D\u7684\u6536\u5408\u5340\u584A\u5F8C\u9801\u9996\u4E0D\u518D\u88AB\u4F75\u6389\uFF0C\u5169\u9846\u540C\u4E00\u500B handler
               \u7684\u6309\u9215\u5C31\u758A\u5728\u540C\u4E00\u584A\u88E1\u2014\u2014\u7559\u7AEF\u9EDE\u5361\u6A19\u982D\u90A3\u4E00\u9846\u3002 -->
        </div>

        <div class="admin-wh-grid">
          <div class="admin-wh-main">
            <!-- 4-KPI stats strip -->
            <div class="admin-wh-stats" data-wh-stats></div>

            <!-- Endpoints list -->
            <div class="admin-ui-card admin-wh-endpoints-card">
              <div class="admin-ui-section-head admin-wh-section-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("webhooksEndpointCountLabel",{n:"<span data-wh-count>0</span>"})}</span>
                <span class="admin-ui-spacer" aria-hidden="true"></span>
                <button type="button" class="admin-ui-action is-primary admin-wh-add-btn" data-wh-action="show-add">${ServerI18n.t("webhooksAddEndpointBtn")}</button>
              </div>

              <!-- Inline add form (shown when "+ \u65B0\u589E endpoint" pressed) -->
              <form id="wh-register-form" class="admin-wh-add-form" hidden autocomplete="off">
                <div class="admin-wh-form-grid">
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">URL</span>
                    <input id="wh-url" type="url" required placeholder="https://example.com/hook" class="admin-ui-input" />
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">${ServerI18n.t("mlFormat")}</span>
                    <select id="wh-format" class="admin-ui-select">
                      <option value="json">JSON</option>
                      <option value="discord">Discord</option>
                      <option value="slack">Slack</option>
                    </select>
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">${ServerI18n.t("whSecretLabel")}</span>
                    <input id="wh-secret" type="text" placeholder="optional" class="admin-ui-input" />
                  </label>
                </div>
                <fieldset class="admin-wh-form-events">
                  <legend class="admin-ui-monolabel">${ServerI18n.t("mlEvents")}</legend>
                  <div data-wh-register-events></div>
                </fieldset>
                <div class="admin-wh-form-actions">
                  <button type="submit" class="admin-ui-action is-primary admin-wh-form-action">${ServerI18n.t("webhooksRegisterBtn")}</button>
                  <button type="button" class="admin-ui-action admin-wh-form-action" data-wh-action="hide-add">${ServerI18n.t("cancel")}</button>
                </div>
              </form>

              <div id="wh-list" class="admin-ui-list-stack admin-wh-list">
                ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):ServerI18n.t("webhooksLoadingFallback")}
              </div>
            </div>

            <!-- Delivery log table -->
            <div class="admin-ui-card admin-wh-log-card">
              <div class="admin-ui-section-head admin-wh-section-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("webhooksDeliveryLogLabel")} \xB7 ${ServerI18n.t("webhooksLogLiveLabel")}</span>
                <span class="admin-ui-spacer" aria-hidden="true"></span>
                <span class="admin-ui-chip-group admin-wh-log-filters" data-wh-log-filters>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter is-active" data-wh-log-filter="all">${ServerI18n.t("webhooksFilterAll")}</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="failed">${ServerI18n.t("webhooksFilterFailed")}</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="2xx">2xx</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="5xx">5xx</button>
                </span>
              </div>
              <div class="admin-wh-log-row admin-wh-log-row--head">
                <span>${ServerI18n.t("uiColTime")}</span><span>${ServerI18n.t("uiColCode")}</span><span>${ServerI18n.t("uiColDuration")}</span>
                <span>${ServerI18n.t("uiColEndpoint")}</span><span>${ServerI18n.t("uiColEvent")}</span><span>${ServerI18n.t("uiColRetry")}</span>
              </div>
              <div id="wh-log-list" class="admin-ui-list-stack is-tight admin-wh-log-list">
                ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):ServerI18n.t("webhooksLoadingFallback")}
              </div>
            </div>
          </div>

          <aside class="admin-wh-detail" data-wh-detail hidden>
            <!-- populated by _renderDetail() -->
          </aside>
        </div>
        </div>
      </details>
    `),D())}function D(){let s=document.getElementById(T);if(!s)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async c=>{c.preventDefault();let g=document.getElementById("wh-url").value.trim();if(!g)return;let a=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(k=>k.value);if(a.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let i=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),v={url:g,events:a,format:i};u&&(v.secret=u);try{let k=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),I=await k.json();k.ok&&I.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),x(),t.hidden=!0,await B()):showToast(I.error||ServerI18n.t("registrationFailed"),!1)}catch(k){console.error("Webhook register error:",k),showToast(ServerI18n.t("registrationFailed"),!1)}}),s.addEventListener("click",c=>{if(c.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(c.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let i=c.target.closest("[data-wh-log-filter]");if(i){m.deliveryFilter=i.dataset.whLogFilter,s.querySelectorAll("[data-wh-log-filter]").forEach(K=>{K.classList.toggle("is-active",K.dataset.whLogFilter===m.deliveryFilter)}),l();return}let u=c.target.closest("[data-wh-action='test']");if(u){c.stopPropagation(),r(u.dataset.whHookId);return}let v=c.target.closest("[data-wh-action='settings']");if(v){c.stopPropagation(),o(v.dataset.whHookId);return}if(c.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,e(),S();return}let I=c.target.closest("[data-wh-action='detail-ping']");if(I){r(I.dataset.whHookId);return}let _=c.target.closest("[data-wh-action='detail-toggle']");if(_){n(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let M=c.target.closest("[data-wh-action='detail-delete']");if(M){d(M.dataset.whHookId);return}let R=c.target.closest("[data-wh-hook-row]");if(R&&!c.target.closest("button")){o(R.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(T)},intervalMs:h,tick:B}))}async function B(){await L(),await Promise.all([w(),P()]),q(),S(),l(),e()}async function w(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let s=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!s.ok)return;let t=await s.json();m.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],m.stats=t.stats||null}catch{}}async function L(){if(!m.eventCatalogLoaded)try{let s=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(s.ok){let t=await s.json(),c=Array.isArray(t.events)?t.events:[];c.length&&(m.eventCatalog=c)}}catch{}finally{m.eventCatalogLoaded=!0,x()}}function b(s){let t=s&&s.slug?String(s.slug):"";if(s&&s.labelKey){let u=ServerI18n.t(s.labelKey);return{slug:t,label:u?u+" \xB7 "+t:t,title:u}}let c=s&&s.zh?String(s.zh):"",g=s&&s.en?String(s.en):"",a=window.ServerI18n&&ServerI18n.currentLang||"zh",i=(s&&s[a]?String(s[a]):"")||g||c;return{slug:t,label:i?i+" \xB7 "+t:t,title:c&&g?c+" \xB7 "+g:c||g}}function x(){let s=document.querySelector("[data-wh-register-events]");s&&(s.innerHTML=m.eventCatalog.map(function(t){let c=b(t);if(!c.slug)return"";let g=c.slug==="on_danmu"?" checked":"";return'<label title="'+y(c.title)+'"><input type="checkbox" name="wh-event" value="'+y(c.slug)+'"'+g+" /> "+y(c.label)+"</label>"}).join(""))}function q(){let s=document.querySelector("[data-wh-stats]");if(!s)return;let t=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};s.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${t.endpoints_enabled} / ${t.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${t.deliveries_24h.toLocaleString?t.deliveries_24h.toLocaleString():t.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${t.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${t.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:A()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function A(){return m.hooks.length&&m.hooks[0].retry_count||3}function S(){let s=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(s){if(t&&(t.textContent=String(m.hooks.length)),m.hooks.length===0){s.innerHTML="";let c=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let g=document.getElementById("wh-register-form");g&&(g.hidden=!1),document.getElementById("wh-url")?.focus()}});c.dataset.emptyKind="webhooks",s.appendChild(c);return}s.innerHTML=m.hooks.map(p).join("")}}function p(s){let t=y(s.id||""),c=Number(s.success_count)||0,g=Number(s.fail_count)||0,a=c+g,i=a>0?Math.round(c/a*1e3)/10:100,u=s.enabled!==!1,v=Number(s.last_status)||null,k=u?v&&v>=400||s.last_error?"degraded":"active":"paused",I=k==="active"?"var(--hud-lime)":k==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=k==="active"?"ACTIVE":k==="degraded"?"DEGRADED":"PAUSED",M=m.selectedHookId===s.id?" is-selected":"",R=$(k),K=(s.events||[]).map(function(O){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(O)+"</span>"}).join(""),E=s.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(C(s.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${M}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${I};box-shadow:${u?"0 0 6px "+I:"none"}"></span>
          <span class="name">${y(F(s.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${_}</span>
          <span class="last">last \xB7 ${y(j(s.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(s.url)}</div>
        <div class="admin-wh-card-events">${K}</div>
        ${E}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${i}%;background:${I}"></div></div>
            <span class="pct" style="color:${I}">${i}%</span>
          </div>
          <span class="counter ok">\u2713 ${c.toLocaleString()}</span>
          <span class="counter ${g>0?"fail":"fail-zero"}">\u2717 ${g}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let s=document.getElementById("wh-log-list");if(!s)return;let t=m.deliveries.filter(function(c){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!c.ok:m.deliveryFilter==="2xx"?c.code&&c.code>=200&&c.code<300:m.deliveryFilter==="5xx"?c.code&&c.code>=500:!0});if(t.length===0){s.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}s.innerHTML=t.map(function(c){let g=c.ts?new Date(c.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",a=c.code?String(c.code):"\u2014",i=c.ok?"var(--hud-lime)":"var(--hud-crimson)",u=c.duration_ms?c.duration_ms>=1e3?(c.duration_ms/1e3).toFixed(1)+"s":c.duration_ms+"ms":"\u2014",v=c.ok?"var(--color-text-strong)":"var(--hud-amber)",k=y(F(c.hook_url||"")),I=(c.retries||0)===0?"\u2014":"\xD7"+c.retries,_=(c.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${c.dropped?" is-dropped":""}">
          <span class="time">${y(g)}</span>
          <span class="code" style="color:${i};border-color:${i}55;background:${i}15;">${a}</span>
          <span class="dur" style="color:${v}">${y(u)}</span>
          <span class="ep">${k}</span>
          <span class="evt">${y(c.event||"")}</span>
          <span class="retry" style="color:${_}">${I}</span>
        </div>`}).join("")}function o(s){m.selectedHookId=s,S(),e()}function e(){let s=document.querySelector("[data-wh-detail]");if(!s)return;let t=m.hooks.find(function(k){return k.id===m.selectedHookId});if(!t){s.hidden=!0,s.innerHTML="";return}s.hidden=!1;let c=t.enabled!==!1,g=Number(t.last_status)||null,a=c?g&&g>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",i=new Set(t.events||[]),u=m.eventCatalog.map(function(k){let I=b(k),_=i.has(I.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+y(I.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+y(I.label)+"</span></label>"}).join(""),v={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};s.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+a+";box-shadow:0 0 6px "+a+'"></span><span class="name">'+y(F(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(v,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(t.id)+'" data-wh-next-enabled="'+(c?"0":"1")+'">'+(c?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function r(s){if(s)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),c=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(c.error||ServerI18n.t("testFailed"),!1),setTimeout(B,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function n(s,t){if(s)try{let c=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s,enabled:t})}),g=await c.json();if(!c.ok){showToast(g.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let a=m.hooks.find(function(i){return i.id===s});a&&(a.enabled=g.enabled),showToast(g.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),q(),S(),e()}catch(c){console.error("Webhook toggle error:",c),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function d(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let c=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),g=await c.json();c.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===s&&(m.selectedHookId=null),B()):showToast(g.error||ServerI18n.t("deleteFailed"),!1)}catch(c){console.error("Webhook delete error:",c),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(T)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var At=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let T="sec-sounds",h=null,f=[],C=[];async function j(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let o=await l.json();f=o.sounds||[],C=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],C=[]}}async function F(){return j()}async function $(l,o){let e=new FormData;e.append("file",l),e.append("name",o);let r=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),n=await r.json();if(!r.ok)throw new Error(n.error||"Upload failed");return n}async function m(l){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Delete failed");return e}async function N(l){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to add rule");return e}async function D(l){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to delete rule");return e}function B(){let l=document.getElementById("soundsList");if(l){if(f.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",l.appendChild(o);return}l.innerHTML=f.map(function(r){var n=y(r.name),d=Math.round((r.volume!=null?r.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(r.name)+'"><div class="name" title="'+n+'">'+n+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(r.name)+'" min="0" max="100" step="1" value="'+d+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(r.name)+'" style="min-width:32px;text-align:right">'+d+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(r.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(r.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(r){r.addEventListener("click",function(){var n=r.dataset.name,d=f.find(function(s){return s.name===n});d&&(h&&(h.pause(),h=null),h=new Audio(d.url),h.volume=.5,h.play().catch(function(s){console.warn("Audio preview failed:",s)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(r){r.addEventListener("click",async function(){var n=r.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",n),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(n),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",n),!0),await j(),B(),P()}catch(s){window.showToast(s.message,!1)}})});var e={};l.querySelectorAll(".sound-volume-slider").forEach(function(r){var n=r.dataset.name,d=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(n)+'"]');r.addEventListener("input",function(){d&&(d.textContent=r.value+"%"),clearTimeout(e[n]),e[n]=setTimeout(function(){w(n,Number(r.value)/100)},300)}),r.addEventListener("change",function(){clearTimeout(e[n]),w(n,Number(r.value)/100)})})}}async function w(l,o){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),r=await e.json();if(!e.ok){window.showToast(r.error||"Volume update failed",!1);return}var n=f.find(function(d){return d.name===l});n&&(n.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(d){console.warn("[admin-sounds] volume save failed:",d),window.showToast("Network error",!1)}}function P(){let l=document.getElementById("ruleSoundName");if(!l)return;let o=l.value;if(l.innerHTML="",f.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,l.appendChild(e);return}f.forEach(e=>{let r=document.createElement("option");r.value=e.name,r.textContent=e.name,l.appendChild(r)}),o&&[...l.options].some(e=>e.value===o)&&(l.value=o)}function L(){let l=document.getElementById("rulesList");if(l){if(C.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",l.appendChild(o);return}l.innerHTML=C.map(function(e){var r=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),n=Math.round((e.volume!=null?e.volume:1)*100),d=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",n).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(r)+'</div><div class="admin-sounds-rule-detail">'+y(d)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await D(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),L()}catch(r){window.showToast(r.message,!1)}})})}}function b(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),r=o.files[0];if(!r){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let n=e.value.trim();if(!n){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await $(r,n),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",n),!0),o.value="",e.value="",await j(),B(),P()}catch(d){window.showToast(d.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function x(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),r=document.getElementById("ruleSoundName").value,n=document.getElementById("ruleVolume"),d=document.getElementById("ruleCooldown");if(o!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!r){window.showToast(ServerI18n.t("selectSound"),!1);return}let s=parseInt(n.value,10)/100,t=parseInt(d.value,10)||0,c={trigger_type:o,trigger_value:o==="all"?"":e,sound_name:r,volume:Math.max(0,Math.min(1,s)),cooldown:Math.max(0,t)};l.disabled=!0;try{await N(c),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),L()}catch(g){window.showToast(g.message,!1)}finally{l.disabled=!1}})}function q(){let l=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!l||!o)return;function e(){l.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):l.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",e),e()}function A(){let l=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!l||!o||l.addEventListener("input",()=>{o.textContent=l.value+"%"})}function S(){return`
      <div id="${T}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("soundsPageTitle")}</h2>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("soundsPageNote")}
          </p>
        </div>

        <!-- v4 P1-3 dual-column layout (2026-05-19 retrofit) \u2014 sounds
             library left, trigger rules right. Matches admin-p1.jsx
             AdminSoundsPage spec. Falls back to single column at <960px. -->
        <div class="admin-sounds-layout">
          <!-- LEFT: Sound library (upload + list) -->
          <div class="admin-ui-card admin-sounds-col">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <span class="admin-ui-monolabel">${ServerI18n.t("sndSecLibrary")}</span>
            </div>
            <div id="soundsList" class="admin-sounds-grid"></div>

            <!-- Upload form (collapsed into library card per v4 spec) -->
            <div class="admin-sounds-upload-foot">
              <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("soundsUploadLabel")}</div>
              <div class="admin-sounds-form">
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("soundsFileHint")}</span>
                  <input type="file" id="soundFileInput" accept=".mp3,.ogg,.wav,audio/mpeg,audio/ogg,audio/wav" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlName")}</span>
                  <input type="text" id="soundNameInput" placeholder="${y(ServerI18n.t("soundNamePlaceholder"))}" maxlength="100" class="admin-ui-input" />
                </label>
                <div class="admin-sounds-form-full" style="display:flex;justify-content:flex-end">
                  <button id="soundUploadBtn" type="button" class="admin-ui-action is-primary admin-sound-action">${ServerI18n.t("soundsUploadIdle")}</button>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Trigger rules (form + list) -->
          <div class="admin-ui-card admin-sounds-col">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerRulesEventSound")}</span>
            </div>
            <div id="rulesList" class="admin-sounds-rules"></div>

            <!-- New rule form (collapsed into rules card per v4 spec) -->
            <div class="admin-sounds-rule-foot">
              <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("soundsAddRuleLabel")}</div>
              <div class="admin-sounds-form">
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerType")}</span>
                  <select id="ruleTriggerType" class="admin-ui-select">
                    <option value="keyword">${y(ServerI18n.t("triggerTypeKeyword"))}</option>
                    <option value="effect">${y(ServerI18n.t("triggerTypeEffect"))}</option>
                    <option value="all">${y(ServerI18n.t("triggerTypeAll"))}</option>
                  </select>
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerValue")}</span>
                  <input type="text" id="ruleTriggerValue" placeholder="${y(ServerI18n.t("triggerValueKeywordPlaceholder"))}" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field admin-sounds-form-full">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlSound")}</span>
                  <select id="ruleSoundName" class="admin-ui-select">
                    <option value="" disabled>${y(ServerI18n.t("soundLoading"))}</option>
                  </select>
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlVolume")} <span id="ruleVolumeLabel">80%</span></span>
                  <input type="range" id="ruleVolume" min="0" max="100" value="80" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlCooldownMs")}</span>
                  <input type="number" id="ruleCooldown" min="0" step="100" value="1000" class="admin-ui-input" />
                </label>
                <div class="admin-sounds-form-full" style="display:flex;justify-content:flex-end">
                  <button id="addRuleBtn" type="button" class="admin-ui-action is-primary admin-sound-action">${ServerI18n.t("soundsAddRuleBtn")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}async function p(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",S()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([j(),F()]),B(),P(),L(),b(),x(),q(),A()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(T)&&!l&&(l=!0,p().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&(l=!0,p().finally(()=>{l=!1}))})})()});var Ct=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let T=/^[a-zA-Z0-9_]{1,32}$/,h=".png,.gif,.webp",f="sec-emojis",C=[];function j(){return`
      <div id="${f}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("emojisPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("emojisPageNote")}</p>
        </div>

        <!-- Upload zone (dashed dropzone) -->
        <div class="admin-em-v4__upzone" data-em-dropzone>
          <div class="admin-em-v4__upicon">\u2191</div>
          <div class="admin-em-v4__upcopy">
            <div class="admin-em-v4__uptitle">${ServerI18n.t("emojisUpTitle")}</div>
            <div class="admin-em-v4__upsub">${ServerI18n.t("emojisUpSub")}</div>
            <div class="admin-em-v4__upform">
              <input id="emojiNameInput" type="text" placeholder=":name:" maxlength="32" pattern="[a-zA-Z0-9_]+" autocomplete="off" />
              <input id="emojiFileInput" type="file" accept="${h}" />
              <button id="emojiUploadBtn" type="button">${ServerI18n.t("emojisUploadBtn")}</button>
            </div>
          </div>
        </div>

        <!-- Quota + search toolbar -->
        <div class="admin-em-v4__toolbar">
          <span class="admin-em-v4__quota-label" data-em-quota-label>${ServerI18n.t("emojisQuotaUsed",{n:0,max:100})}</span>
          <div class="admin-em-v4__quota-bar"><div class="admin-em-v4__quota-fill" data-em-quota-fill style="width:0%"></div></div>
          <span class="admin-em-v4__spacer"></span>
          <input id="emojiSearchInput" type="search" placeholder="${ServerI18n.t("emojisSearchPlaceholder")}" class="admin-em-v4__search" />
          <span class="admin-em-v4__count" id="emojiCount">0</span>
        </div>

        <!-- 8-col emoji grid (initial state: skeleton, swapped by renderGrid) -->
        <div id="emojiGrid" class="admin-em-v4__grid"></div>

        <p class="admin-em-v4__footnote">${ServerI18n.t("emojisFootNote")}</p>

        <!-- Audience preview row -->
        <div class="admin-em-v4__preview" data-em-preview>
          <!-- \u8A2D\u8A08\u7A3F 14\uFF1A\u4E2D\u6587\u5DF2\u7D93\u662F\u6A19\u7C64\uFF0C\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u662F\u540C\u4E00\u4EF6\u4E8B\u8AAA\u5169\u6B21 -->
          <div class="admin-em-v4__preview-label">${ServerI18n.t("emojisPreviewLabel")}</div>
          <div class="admin-em-v4__preview-body" data-em-preview-body>
            <span class="admin-em-v4__preview-empty">${ServerI18n.t("emojisPreviewEmpty")}</span>
          </div>
        </div>
      </div>
    `}function F(A){let S=":"+A.name+":",p=Number(A.used)||0,l=p>0?ServerI18n.t("emojisUsedCount",{n:p}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(A.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(A.url)+'" alt="'+N(S)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(S)+'</div><div class="admin-em-v4__tile-meta">'+y(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(S)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(A.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function $(A){let S=document.querySelector("[data-em-quota-label]"),p=document.querySelector("[data-em-quota-fill]");if(!S||!p)return;let l=A.length,o=100;S.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:o}),p.style.width=Math.min(100,l/o*100)+"%"}function m(A){let S=document.querySelector("[data-em-preview-body]");if(!S)return;if(!A||A.length===0){S.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=A.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${y(o.name)}:</code> \u2192 <img src="${N(o.url)}" alt=":${N(o.name)}:" /></span>`);S.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function N(A){return y(A)}function D(A){var S=document.getElementById("emojiGrid"),p=document.getElementById("emojiCount");S&&(!A||A.length===0?(window.AdminEmpty?(S.innerHTML="",S.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):S.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",p&&(p.textContent="0")):(S.innerHTML=A.map(F).join(""),p&&(p.textContent=String(A.length))),$(C),m(C))}function B(){var A=document.getElementById("emojiGrid");if(A)if(window.AdminSkeletons){A.innerHTML="";for(var S=0;S<8;S++){var p=document.createElement("div");p.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",l.appendChild(o),p.appendChild(l);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",p.appendChild(e),A.appendChild(p)}}else A.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function w(){try{var A=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!A.ok)throw new Error("HTTP "+A.status);var S=await A.json();C=S.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",C.length||""),P()}catch(l){console.error("[admin-emojis] fetch failed:",l);var p=document.getElementById("emojiGrid");p&&(p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var A=document.getElementById("emojiSearchInput"),S=(A&&A.value||"").trim().toLowerCase(),p=S?C.filter(function(l){return(l.name||"").toLowerCase().includes(S)}):C;D(p)}async function L(){var A=document.getElementById("emojiNameInput"),S=document.getElementById("emojiFileInput"),p=document.getElementById("emojiUploadBtn");if(!(!A||!S||!p)){var l=A.value.trim(),o=S.files&&S.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),A.focus();return}if(!T.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),A.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}p.disabled=!0,p.textContent=ServerI18n.t("uploadingStatus");try{var r=new FormData;r.append("name",l),r.append("emojifile",o);var n=await csrfFetch("/admin/emojis/upload",{method:"POST",body:r}),d=await n.json();n.ok?(showToast(d.message||ServerI18n.t("emojiUploadFallback")),A.value="",S.value="",await w()):showToast(d.error||ServerI18n.t("uploadFailed"),!1)}catch(s){console.error("[admin-emojis] upload error:",s),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{p.disabled=!1,p.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",A),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var p=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A})}),l=await p.json();p.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await w()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function x(A){try{await navigator.clipboard.writeText(A),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}catch{var S=document.createElement("textarea");S.value=A,S.style.position="fixed",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),document.body.removeChild(S),showToast(ServerI18n.t("copiedLabel").replace("{label}",A))}}function q(){var A=document.getElementById("settings-grid");if(A){A.insertAdjacentHTML("beforeend",j());var S=document.getElementById("emojiUploadBtn");S&&S.addEventListener("click",L);var p=document.getElementById("emojiNameInput");p&&p.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),L())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",P);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(n){var d=n.target.closest(".emoji-copy-btn");if(d){x(d.dataset.label);return}var s=n.target.closest(".emoji-delete-btn");s&&b(s.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),r=document.getElementById("emojiFileInput");e&&r&&(["dragenter","dragover"].forEach(function(n){e.addEventListener(n,function(d){d.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(n){e.addEventListener(n,function(d){d.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(n){var d=n.dataTransfer&&n.dataTransfer.files&&n.dataTransfer.files[0];if(d){var s=new DataTransfer;s.items.add(d),r.files=s.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var c=d.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=c.slice(0,32),t.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),B(),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var A=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&q()});A.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&q()}})})()});var Bt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,T="sec-stickers",h=["png","gif","webp"],f=".gif,.png,.webp",C="__all__",j=[],F=[],$=C;function m(l){return y(l)}function N(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=l?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${f}"
                class="admin-ui-input"
              />
            </label>
            <button id="stickerUploadBtn" type="button" class="admin-ui-action is-primary admin-sticker-action">${ServerI18n.t("stickersUploadBtn")}</button>
          </div>`:"";return`
      <div id="${T}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("stickersPageTitle")}</h2>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("stickersPageNote")}
          </p>
        </div>

        <div class="admin-stickers-layout">
          <!-- Left sidebar: pack list -->
          <aside class="admin-ui-card admin-stickers-sidebar">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlPacks")}</span>
              <button
                id="stickerPackAddBtn"
                type="button"
                class="admin-ui-action is-primary admin-sticker-pack-add"
                style="margin-left:auto"
                title="${ServerI18n.t("stickersNewPackTitle")}"
              >${ServerI18n.t("stickersNewBtn")}</button>
            </div>
            <div id="stickerPackList" class="admin-stickers-pack-list"></div>
          </aside>

          <!-- Main: upload + grid -->
          <div class="admin-stickers-main">
            ${l?`<div class="admin-ui-card">${o}</div>`:""}

            <div class="admin-ui-card">
              <div class="admin-stickers-toolbar">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlSearch")}</span>
                <input
                  id="stickerSearchInput"
                  type="search"
                  placeholder="${ServerI18n.t("stickersSearchPlaceholder")}"
                  class="admin-ui-input"
                  style="flex:1;max-width:280px"
                />
                <span class="admin-ui-monolabel" style="margin-left:auto" id="stickerCount">\u2014</span>
              </div>
            </div>

            <div class="admin-ui-card">
              <div id="stickerGrid" class="admin-stickers-grid">
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):y(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(l){return l===C?j.length:j.filter(function(o){return o.pack_id===l}).length}function B(){var l=document.getElementById("stickerPackList");if(l){var o='<button type="button" class="admin-stickers-pack'+($===C?" is-active":"")+'" data-pack="'+C+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(C)+"</span></button>";F.forEach(function(e){var r=e.enabled?"is-success":"is-muted",n="admin-stickers-pack"+(e.id===$?" is-active":""),d=e.id==="default",s=d?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+n+'" data-pack="'+m(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+r+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(e.name)+'</span><span class="admin-stickers-pack-count">'+D(e.id)+"</span></button>"+s+"</div>"}),l.innerHTML=o}}function w(l){var o=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+m(l.url)+'" alt="'+m(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(o)+'">'+y(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(o)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(l.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var l=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(l){var e=document.getElementById("stickerSearchInput"),r=(e&&e.value||"").trim().toLowerCase(),n=j.filter(function(s){return!($!==C&&s.pack_id!==$||r&&!(s.name||"").toLowerCase().includes(r))});if(n.length===0){l.innerHTML="";var d=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});d.dataset.emptyKind="stickers",d.style.gridColumn="1 / -1",l.appendChild(d),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=n.map(w).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:n.length}))}}async function L(){var l=document.getElementById("stickerGrid");if(l)try{var[o,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);j=(await o.json()).stickers||[],F=e.ok?(await e.json()).packs||[]:[],$!==C&&!F.some(function(r){return r.id===$})&&($=C),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),B(),P()}catch(r){console.error("[admin-stickers] fetch failed:",r),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(l,o){if(l==="select"){$=o,B(),P();return}if(l==="rename"){var e=F.find(function(k){return k.id===o}),r=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!r)return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),d=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await L()):window.showToast(d.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});s.ok&&await L()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),c=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),$===o&&($=C),await L()):window.showToast(c.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var g=F.slice().sort(function(k,I){return(k.order||0)-(I.order||0)}),a=g.findIndex(function(k){return k.id===o});if(a<0)return;var i=l==="up"?a-1:a+1;if(i<0||i>=g.length)return;var u=g[a],v=g[i];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await L()}catch{}}}async function x(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),$=e.pack&&e.pack.id?e.pack.id:$,await L()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function q(){var l=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!l||!o)){var e=l.files&&l.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var r=e.name.split(".").pop().toLowerCase();if(h.indexOf(r)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var n=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("file",e),$&&$!==C&&d.append("pack_id",$);var s=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:d}),t=await s.json();s.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),l.value="",await L()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(c){console.error("[admin-stickers] upload error:",c),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=n}}}async function A(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),r=await e.json();e.ok?(window.showToast(r.message||ServerI18n.t("stickerDeleteFallback")),await L()):window.showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(n){console.error("[admin-stickers] delete error:",n),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function S(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var o=document.createElement("textarea");o.value=l,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function p(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",N());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",q);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",x);var r=document.getElementById("stickerSearchInput");r&&r.addEventListener("input",P);var n=document.getElementById("stickerPackList");n&&n.addEventListener("click",function(s){var t=s.target.closest("[data-pack-action]");if(!t){var c=s.target.closest("[data-pack]");c&&b("select",c.dataset.pack);return}var g=t.dataset.packAction,a=t.dataset.packId;g==="select"&&!a&&(a=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),b(g,a)});var d=document.getElementById("stickerGrid");d&&d.addEventListener("click",function(s){var t=s.target.closest(".sticker-copy-btn");if(t){S(t.dataset.label);return}var c=s.target.closest(".sticker-delete-btn");c&&A(c.dataset.name)}),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(T)&&p()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&p()}})})()});var Ft=he(()=>{(function(){"use strict";let y="sec-extensions-overview",T=window.AdminUtils.escapeHtml,h=15e3,f=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],C={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},j=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function F(S){let p=S&&!S.stale?S.report:null;if(!p&&S&&S.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!p)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(p.state==="error"){let l=j.includes(p.error)?p.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:p.sent||0,held:p.held||0,blocked:p.blocked||0,skipped:p.late_skipped||0})}}function $(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(m).join("")}
        </div>
      </div>`}function m(S){let p=S.status==="ready",l="is-cold",o=p?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,e=p&&S.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${S.install.steps.map(n=>{if(n.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${T(ServerI18n.t(n.labelKey))} \u2193</a></li>`;let d=n.showOrigin?` <code class="admin-ext-step-code">${T(window.location.origin)}</code>`:"";return`<li>${T(ServerI18n.t(n.labelKey))}${d}</li>`}).join("")}
          </ol>
        </div>`:"",r=S.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
          <div class="admin-ui-monolabel">
            Fire token \xB7 ${ServerI18n.t("extSecFireToken")}
            <a href="#/system/firetoken" class="admin-ext-token-deeplink">${ServerI18n.t("extTokenDeepLink")}</a>
          </div>
          <div class="admin-ext-token-row">
            <code class="admin-ext-token-code" data-fire-token-display>${ServerI18n.t("firetokenTokenUnsetPlaceholder")}</code>
            <button type="button" class="admin-ui-action admin-ext-token-action" data-fire-token-action="copy" disabled>${ServerI18n.t("extTokenCopyBtn")}</button>
            <button type="button" class="admin-ui-action admin-ext-token-action" data-fire-token-action="regen">${ServerI18n.t("firetokenGenerateBtn")}</button>
            <button type="button" class="admin-ui-action is-danger admin-ext-token-action" data-fire-token-action="revoke" disabled>${ServerI18n.t("firetokenRevokeBtn")}</button>
          </div>
          <div class="admin-ext-token-hint">
            ${ServerI18n.t("extTokenHint")}
          </div>
        </div>`:"";return`
      <article class="admin-ext-card" data-ext="${S.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${l}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${S.color}">${S.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${T(S.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${T(S.version)}</span></div>
          </div>
          ${o}
        </div>
        <p class="admin-ext-desc">${T(ServerI18n.t(S.descKey))}</p>
        ${S.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${T(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${e}
        ${r}
      </article>`}async function N(){try{let S=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!S.ok)return;C.fireToken=await S.json(),b()}catch{}}async function D(){try{let S=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!S.ok)return;let p=await S.json();C.sources=Array.isArray(p.sources)?p.sources:[],x()}catch{}}async function B(){try{let S=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!S.ok)return;C.slidoStatus=await S.json(),q()}catch{}}function w(){D(),B()}async function P(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let l=await p.json();C.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},C.plainToken=l.token,b(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(p){console.warn("[ext] regen failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);C.fireToken=await p.json(),C.plainToken=null,b(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(p){console.warn("[ext] revoke failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function b(){let S=document.querySelector("[data-fire-token-display]"),p=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),o=document.querySelector('[data-fire-token-action="revoke"]');if(!S)return;let e=C.fireToken;C.plainToken?(S.textContent=C.plainToken,S.classList.add("is-plain")):e&&e.has_token?(S.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:e.prefix||""}),S.classList.remove("is-plain")):(S.textContent=ServerI18n.t("extTokenNotSetHint"),S.classList.remove("is-plain")),p&&(p.disabled=!C.plainToken),l&&(l.textContent=e&&e.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),o&&(o.disabled=!(e&&e.has_token))}function x(){let S=new Set(C.sources.map(p=>p.source));document.querySelectorAll(".admin-ext-card").forEach(p=>{let l=f.find(r=>r.id===p.dataset.ext);if(!l)return;let o=p.querySelector("[data-ext-dot]");if(!o)return;let e=l.sourceMatch&&S.has(l.sourceMatch);o.classList.toggle("is-live",!!e),o.classList.toggle("is-cold",!e)})}function q(){let S=document.querySelector("[data-slido-status]");if(!S)return;let p=F(C.slidoStatus);S.textContent=p.text,S.classList.toggle("is-live",p.tone==="is-live"),S.classList.toggle("is-error",p.tone==="is-error");let l=C.slidoStatus&&C.slidoStatus.extension,o=S.closest(".admin-ext-card"),e=o&&o.querySelector("[data-ext-download-step]"),r=o&&o.querySelector("[data-ext-download]"),n=o&&o.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(r&&r.setAttribute("href",l.download_url),e&&(e.hidden=!1),n&&(n.textContent="v"+l.version)):e&&(e.hidden=!0)}function A(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(y))return;S.insertAdjacentHTML("beforeend",$());let p=document.getElementById(y);p&&p.addEventListener("click",l=>{let o=l.target.closest("[data-fire-token-action]");if(!o)return;let e=o.dataset.fireTokenAction;e==="regen"?P():e==="revoke"?L():e==="copy"&&C.plainToken&&window.AdminUtils.copyText(C.plainToken,ServerI18n.t("firetokenToastCopied"))}),N(),C.stopPoll||(C.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:h,tick:w}))}window.AdminExtensions={slidoStatusView:F},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&A()})})()});var Dt=he(()=>{(function(){"use strict";let y="sec-firetoken-overview",T=window.AdminUtils.escapeHtml,h=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function C(){return`
      <div id="${y}" class="admin-ft-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("firetokenPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("firetokenPageNote",{link:'<a href="#/system/api-tokens">API Tokens</a>'})}</p>
        </div>

        <div class="admin-ft-grid">
          <!-- Main column -->
          <div class="admin-ft-main">
            <!-- Token card -->
            <section class="admin-ft-token-card" id="adminFtTokenCard">
              <div class="admin-ft-token-head">
                <span class="admin-ft-token-icon">\u26BF</span>
                <div class="admin-ft-token-title">
                  <div class="name">Fire Token \xB7 ${ServerI18n.t("firetokenSharedSecretLabel")}</div>
                  <div class="meta">${ServerI18n.t("firetokenCardMeta")} \xB7 admin lane ceiling 200/min</div>
                </div>
                <span class="admin-ft-status" data-ft-status>${ServerI18n.t("firetokenStatusLoading")}</span>
              </div>

              <div class="admin-ft-token-display">
                <code class="admin-ft-token-code" data-ft-token-display>${ServerI18n.t("firetokenTokenUnsetPlaceholder")}</code>
                <button type="button" class="admin-ui-action admin-ft-action" data-ft-action="copy" disabled>${ServerI18n.t("firetokenCopyBtn")}</button>
                <button type="button" class="admin-ui-action is-warn admin-ft-action" data-ft-action="regen">${ServerI18n.t("firetokenRegenBtn")}</button>
                <button type="button" class="admin-ui-action is-danger admin-ft-action" data-ft-action="revoke" disabled>${ServerI18n.t("firetokenRevokeBtn")}</button>
              </div>

              <div class="admin-ft-token-stats">
                <div class="kv"><span class="k">${ServerI18n.t("firetokenStatCreated")}</span><span class="v" data-ft-stat="created">\u2014</span></div>
                <div class="kv"><span class="k">${ServerI18n.t("firetokenStatRotated")}</span><span class="v" data-ft-stat="rotated">\u2014</span></div>
                <div class="kv"><span class="k">${ServerI18n.t("firetokenStatHits")}</span><span class="v is-good" data-ft-stat="hits">\u2014</span></div>
                <div class="kv"><span class="k">${ServerI18n.t("firetokenStatPeak")}</span><span class="v is-cyan" data-ft-stat="peak">\u2014</span></div>
              </div>
            </section>

            <!-- 24h hourly chart -->
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-ft-meta" data-ft-peak-meta>${ServerI18n.t("firetokenPeakPlaceholder")}</span>
              </div>
              <div class="admin-ft-chart" id="adminFtChart24h">
                <div class="admin-ft-chart-empty">${ServerI18n.t("firetokenChartLoading")}</div>
              </div>
            </section>

            <!-- Audit log -->
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-ft-meta">in-memory \xB7 ${ServerI18n.t("firetokenAuditMeta")}</span>
              </div>
              <div class="admin-ft-audit" id="adminFtAudit">
                <div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>
              </div>
            </section>

            <!-- curl example -->
            <section class="admin-ft-card admin-ft-curl-card">
              <div class="admin-ft-card-head">
                <span class="admin-ft-meta">${ServerI18n.t("firetokenCurlMeta")}</span>
              </div>
              <pre class="admin-ft-curl" id="adminFtCurl"></pre>
            </section>
          </div>

          <!-- Right rail -->
          <aside class="admin-ft-rail">
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-ft-meta" data-ft-ip-count>\u2014</span>
              </div>
              <div class="admin-ft-ip-list" id="adminFtIps">
                <div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>
              </div>
            </section>

            <section class="admin-ft-card admin-ft-rotation-card">
              <div class="admin-ft-card-head">
              </div>
              <div class="admin-ft-rotation-body">
                <ul>
                  <li>${ServerI18n.t("firetokenRotationTip1")}</li>
                  <li>${ServerI18n.t("firetokenRotationTip2")}</li>
                  <li>${ServerI18n.t("firetokenRotationTip3")}</li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
      </div>
    `}async function j(){await Promise.all([F(),$(),m()])}async function F(){try{let S=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!S.ok)return;f.token=await S.json(),P()}catch{}}async function $(){try{let S=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!S.ok)return;let p=await S.json();f.usage24h=Array.isArray(p.usage_24h)?p.usage_24h:[],f.ips=Array.isArray(p.ips)?p.ips:[],b(),x(),L()}catch{}}async function m(){try{let S=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!S.ok)return;let p=await S.json();f.audit=Array.isArray(p.events)?p.events:[],q()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let l=await p.json();f.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},f.plainToken=l.token,P(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);f.token=await p.json(),f.plainToken=null,P(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function B(S){if(!S)return"\u2014";let p=Date.now()/1e3-S;return p<60?ServerI18n.t("firetokenJustNow"):p<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(p/60)}):p<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(p/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(p/86400)})}function w(S){if(!S)return"\u2014";try{return new Date(S*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function P(){let S=f.token,p=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),o=document.querySelector('[data-ft-action="copy"]'),e=document.querySelector('[data-ft-action="regen"]'),r=document.querySelector('[data-ft-action="revoke"]'),n=document.querySelector('[data-ft-stat="created"]'),d=document.querySelector('[data-ft-stat="rotated"]'),s=document.getElementById("adminFtCurl");if(p&&(f.plainToken?(p.textContent=f.plainToken,p.classList.add("is-plain")):S&&S.has_token?(p.textContent=(S.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",p.classList.remove("is-plain")):(p.textContent=ServerI18n.t("firetokenNotSetHint"),p.classList.remove("is-plain")),l&&(S&&S.enabled&&S.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):S&&S.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),o&&(o.disabled=!f.plainToken),r&&(r.disabled=!(S&&S.has_token)),e&&(e.textContent=S&&S.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),n&&(n.textContent=S?w(S.created_at):"\u2014"),d&&(d.textContent=S?B(S.rotated_at):"\u2014"),s)){let t=f.plainToken?f.plainToken:S&&S.prefix?S.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";s.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${t}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function L(){let S=f.usage24h.map(n=>Number(n)||0),p=S.reduce((n,d)=>n+d,0),l=S.length?Math.max(...S):0,o=document.querySelector('[data-ft-stat="hits"]'),e=document.querySelector('[data-ft-stat="peak"]'),r=document.querySelector("[data-ft-peak-meta]");o&&(o.textContent=p.toLocaleString()),e&&(e.textContent=l.toLocaleString()),r&&(r.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function b(){let S=document.getElementById("adminFtChart24h");if(!S)return;let p=f.usage24h.map(r=>Number(r)||0);if(!p.length){S.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...p),o=12e3,e=l>0?Math.min(100,o/Math.max(l,o)*100):100;S.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${p.map((r,n)=>{let d=l>0?Math.max(2,r/l*100):2;return`<div class="bar ${l>0&&r===l?"is-peak":""}" style="height:${d}%" title="${n.toString().padStart(2,"0")}:00 \u2014 ${r}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(r=>`<span>${String(r).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function x(){let S=document.getElementById("adminFtIps"),p=document.querySelector("[data-ft-ip-count]");if(!S)return;let l=f.ips||[];if(p&&(p.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){S.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let o=l[0]?.ip;S.innerHTML=l.map((e,r)=>{let n=r===0,d=e.source==="web"&&(e.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${n?"is-top":""}">
          <span class="ip">${T(e.ip||"?")}</span>
          ${n?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${d?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${T(e.source||"\u2014")}</span>
          <span class="cnt">${e.count||0} hits</span>
          <span class="when">${B(e.last_seen)}</span>
        </div>`}).join("")}function q(){let S=document.getElementById("adminFtAudit");if(!S)return;let p=f.audit||[];if(!p.length){S.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},o={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};S.innerHTML=p.map(e=>{let r=o[e.kind]||"is-info",n=l[e.kind]||e.kind,d=e.meta||{},s=d.prefix?` \xB7 prefix=${T(d.prefix)}`:d.enabled!=null?` \xB7 enabled=${d.enabled}`:"";return`
        <div class="admin-ft-audit-row ${r}">
          <span class="ts">${w(e.ts)}</span>
          <span class="kind">${T(n)}</span>
          <span class="detail">${s}</span>
        </div>`}).join("")}function A(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(y))return;S.insertAdjacentHTML("beforeend",C());let p=document.getElementById(y);p&&p.addEventListener("click",l=>{let o=l.target.closest("[data-ft-action]");if(!o)return;let e=o.dataset.ftAction;e==="regen"?N():e==="revoke"?D():e==="copy"&&f.plainToken&&window.AdminUtils.copyText(f.plainToken,ServerI18n.t("firetokenToastCopied"))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:h,tick:j}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&A()})})()});var Mt=he(()=>{(function(){"use strict";let y="sec-about-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},h="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",C=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],j=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",$={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
      <div id="${y}" class="admin-about-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("aboutPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("aboutPageNote")}</p>
        </div>

        <div class="admin-about-grid">
          <article class="admin-about-version-card" data-about-version style="grid-column:1 / -1">
            <div class="admin-about-version-glow" aria-hidden="true"></div>
            <div class="admin-about-version-head">
              <div class="admin-about-version-icon">\u25B2</div>
              <div class="admin-about-version-meta">
                <div class="admin-about-version-name">${h}</div>
                <div class="admin-about-version-tag" data-about-tag>v\u2014</div>
                <div class="admin-about-version-build" data-about-build>\u2014</div>
              </div>
            </div>
            <div class="admin-about-actions">
              <button type="button" class="admin-ui-action is-primary admin-about-btn" data-about-action="check-update">${ServerI18n.t("aboutBtnCheckUpdate")}</button>
              <button type="button" class="admin-ui-action admin-about-btn" data-about-action="copy">${ServerI18n.t("aboutBtnCopy")}</button>
              <button type="button" class="admin-ui-action admin-about-btn" data-about-action="setup-wizard">${ServerI18n.t("aboutBtnWizard")}</button>
              <button type="button" class="admin-ui-action admin-about-btn" data-about-action="onboarding">${ServerI18n.t("aboutBtnOnboarding")}</button>
            </div>
          </article>

          <article class="admin-about-oss" data-about-system>
            <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionServerInfo")}</div>
            <div class="admin-about-oss-list" style="margin-top:12px">
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiVersionStatus")}</span>
                <span class="v" style="grid-column: span 2" data-about-update>\u2014</span>
              </div>
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiLastCheck")}</span>
                <span class="v" style="grid-column: span 2" data-about-checked>${ServerI18n.t("aboutNeverChecked")}</span>
              </div>
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiServerUptime")}</span>
                <span class="v" style="grid-column: span 2" data-about-uptime>\u2014</span>
              </div>
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiEnvironment")}</span>
                <span class="v" style="grid-column: span 2" data-about-env>production</span>
              </div>
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiWsPath")}</span>
                <span class="v" style="grid-column: span 2" data-about-ws-path>\u2014</span>
              </div>
              <div class="admin-about-oss-row" data-about-system-row>
                <span class="n">${ServerI18n.t("uiAdminUrl")}</span>
                <span class="v" style="grid-column: span 2" data-about-admin-url>${T(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${f}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${C.slice(0,4).map(A=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${T(A.v)}</span>
                  ${A.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${T(A.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${A.notes.slice(0,3).map(S=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${T(S.t)}">${T(S.t.toUpperCase())}</span>
                      <span class="msg">${T(S.l)}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </article>

          <article class="admin-about-oss" data-about-license style="grid-column:1 / -1">
            <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionLicense")}</div>
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px">
              <span style="font-size:13px;color:var(--color-text-strong)">MIT License \xB7 \xA9 2026 Danmu Fire Contributors</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent)">GitHub \u2192</span>
            </div>
            <div class="admin-about-oss-list" style="margin-top:12px">
              ${j.slice(0,6).map(A=>`
                <div class="admin-about-oss-row">
                  <span class="n">${T(A.n)}</span>
                  <span class="v">${T(A.v)}</span>
                  <span class="l">${T(A.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(A){if(!A||A<0)return"\u2014";let S=Math.floor(A/86400),p=Math.floor(A%86400/3600),l=Math.floor(A%3600/60);return S>0?`${S}d ${p}h`:p>0?`${p}h ${l}m`:`${l}m`}function D(){let A=document.querySelector("[data-about-tag]"),S=document.querySelector("[data-about-build]"),p=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),r=document.querySelector("[data-about-ws-path]");if(A&&(A.textContent=`v${$.appVersion}`),S){let n=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";S.textContent=`BUILD \xB7 ${n} \xB7 stable channel`,e&&(e.textContent=n)}if(p){let n=$.serverStartedAt?$.serverTime-$.serverStartedAt:0;p.textContent=N(n)}if(l&&($.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):$.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:$.latestVersion||""}):l.textContent="\u2014",l.style.color=$.isLatest===!0?"var(--hud-lime)":$.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=$.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:B($.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),r){let n=window.DANMU_CONFIG||{};r.textContent=n.wsPath||"/ws"}}function B(A){let S=Number(A)||0;if(!S)return"\u2014";let p=String(S).length>12?S:S*1e3,l=(Date.now()-p)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function w(A,S){let p=r=>String(r||"").replace(/^v/i,"").split("-")[0].split(".").map(function(n){return parseInt(n,10)||0}),l=p(A),o=p(S),e=Math.max(l.length,o.length);for(let r=0;r<e;r++){let n=l[r]||0,d=o[r]||0;if(n>d)return!0;if(n<d)return!1}return!1}async function P({silent:A}={}){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let S=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!S.ok)throw new Error("HTTP "+S.status);let l=((await S.json()).tag_name||"").replace(/^v/i,"");$.latestVersion=l,$.lastCheckedAt=Date.now(),$.isLatest=!w(l,$.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:$.lastCheckedAt,latest:l,isLatest:$.isLatest}))}catch{}D(),A||window.showToast&&window.showToast($.isLatest?ServerI18n.t("aboutToastLatest",{v:$.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(S){A||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:S.message||""}),!1)}}function L(){try{let A=localStorage.getItem(F);if(!A)return;let S=JSON.parse(A);$.latestVersion=S.latest,$.lastCheckedAt=Number(S.ts)||0,$.isLatest=!!S.isLatest}catch{}}async function b(){try{let A=await fetch("/admin/metrics",{credentials:"same-origin"});if(!A.ok)return;let S=await A.json();$.serverStartedAt=Number(S.server_started_at)||0,$.serverTime=Number(S.server_time)||Date.now()/1e3,D()}catch{}}function x(){let A=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",S=$.serverStartedAt?$.serverTime-$.serverStartedAt:0,p=(navigator.userAgent||"").slice(0,200),l=[`${h} v${$.appVersion}`,`Channel: ${A}`,`Uptime: ${N(S)}`,`User-Agent: ${p}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function q(){let A=document.getElementById("settings-grid");if(!A||document.getElementById(y))return;A.insertAdjacentHTML("beforeend",m()),$.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",L(),D();let S=document.getElementById(y);S&&S.addEventListener("click",function(p){let l=p.target.closest("[data-about-action]");if(!l)return;let o=l.dataset.aboutAction;o==="copy"?x():o==="check-update"?P({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&q()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&q()})})()});var Nt=he(()=>{(function(){"use strict";let y="admin-setup-wizard-root",T="danmu.setupWizard.completed",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],C=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function j(t){return t?t.label?t.label:t.labelKey?ServerI18n.t(t.labelKey):t.name||t.id||"\u2014":"\u2014"}function F(t){return t?t.descriptionKey?ServerI18n.t(t.descriptionKey):t.description||"":""}let $={open:!1,step:0,themes:C.slice(),activeTheme:C[0].name,selectedTheme:C[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){$.publicUrl=window.location.origin+"/"}function N(){let t=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";t==="setup"&&!$.open?D():t!=="setup"&&$.open&&B({silent:!0})}function D(){$.open=!0,$.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",w()),l()),e(),b(),P()}function B(t){let c=t&&t.silent;$.open=!1,document.body.dataset.setupWizardOpen="";let g=document.getElementById(y);if(g&&g.remove(),!c&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function w(){return`
      <div id="${y}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
        <div class="admin-setup-modal">
          <header class="admin-setup-head">
            <div class="admin-setup-brand">
              <div class="admin-setup-brand-name">Danmu Fire</div>
              <!-- \u300CSETUP WIZARD \xB7 v5 YELLOW\u300D\u662F\u5167\u90E8\u7248\u672C\u4EE3\u865F\uFF0C\u5C0D\u7B2C\u4E00\u6B21
                   \u6253\u958B\u9019\u500B\u7522\u54C1\u7684\u4EBA\u6C92\u6709\u4EFB\u4F55\u610F\u7FA9\uFF08\u8A2D\u8A08\u7A3F 14\uFF09\u3002 -->
              <div class="admin-setup-brand-sub">${ServerI18n.t("setupWizardTitle")}</div>
            </div>
            <button type="button" class="admin-setup-close" data-setup-action="close" aria-label="Close wizard">${window.AdminUtils.closeIcon}</button>
          </header>

          <div class="admin-setup-stepbar" data-setup-stepbar>
            ${f.map(function(t,c){return`
                <div class="admin-setup-step" data-step-index="${c}">
                  <span class="bullet">${c+1}</span>
                  <span class="lbl">${h(ServerI18n.t(t.labelKey))}</span>
                </div>
                ${c<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:f.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function P(){let t=document.getElementById(y);if(!t)return;t.querySelectorAll(".admin-setup-step").forEach(function(k,I){k.classList.toggle("is-done",I<$.step),k.classList.toggle("is-active",I===$.step)}),t.querySelectorAll(".admin-setup-step-sep").forEach(function(k,I){k.classList.toggle("is-done",I<$.step)});let c=t.querySelector("[data-setup-meta]");c&&(c.textContent=ServerI18n.t("setupWizardStepMeta",{current:$.step+1,total:f.length}));let g=t.querySelector('[data-setup-action="prev"]');g&&(g.disabled=$.step===0);let a=t.querySelector('[data-setup-action="next"]');if(a){let k=f[$.step].id;a.textContent=ServerI18n.t("setupWizardNext")}let i=t.querySelector("[data-setup-foot]");i&&(i.hidden=f[$.step].id==="done");let u=t.querySelector("[data-setup-content]");if(!u)return;let v=f[$.step].id;v==="server"?u.innerHTML=L():v==="moderation"?u.innerHTML=x():v==="theme"?u.innerHTML=S():u.innerHTML=p(),o(v)}function L(){let t=$.readiness,c=t?Number(t.overlay_count)||0:null,g=c!==null&&c>0,i=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:$.publicUrl},{ok:g,unknown:c===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:g?ServerI18n.t("setupWizardReadyDisplayOk",{n:c}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!($.activeTheme||$.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:j($.themes.filter(function(u){return(u.name||u.id)===($.selectedTheme||$.activeTheme)})[0]||$.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let v=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",k=u.unknown?"?":u.ok?"\u2713":"!",I='<span class="admin-setup-ready-title">'+h(u.title)+'</span><span class="admin-setup-ready-value">'+h(u.value||"")+"</span>",_=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+h(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+v+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+k+"</span>"+I+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${h(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${h(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${i}</div>
      </div>`}async function b(){try{let t=await fetch("/overlay_status",{credentials:"same-origin"});if(!t.ok)throw new Error("HTTP "+t.status);let c=await t.json();$.readiness={overlay_count:Number(c.overlay_count)||0,mode:c.mode||""}}catch{$.readiness=null}$.open&&f[$.step].id==="server"&&P()}function x(){let t=$.moderationRules.map(function(c){return`
        <a class="admin-setup-mod-row" href="#/${c.route}" data-setup-goto="#/${c.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${h(ServerI18n.t(c.labelKey))}</span>
            <span class="admin-setup-mod-desc">${h(ServerI18n.t(c.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${h(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${h(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${h(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${t}</div>
      </div>`}let q=["default","neon","retro","cinema"];function A(){let t={};return($.themes||[]).forEach(function(c){t[c.name||c.id]=c}),q.map(function(c){let g=C.filter(function(i){return i.name===c})[0],a=t[c];return g?{name:c,label:a&&a.label,labelKey:g.labelKey,descriptionKey:g.descriptionKey,colors:g.colors}:a}).filter(Boolean)}function S(){let t=A();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${t.map(function(c){let g=c.name||c.id||"",a=($.selectedTheme||$.activeTheme)===g,i=(c.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${a?" is-selected":""}" data-setup-theme="${h(g)}">
                ${a?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${i.map(function(u,v){let k=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${h(u)};font-size:${10+v*2}px;text-shadow:0 0 6px ${h(u)}66;">${k[v]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${h(j(c))}</div>
                <div class="admin-setup-theme-sub">${h(F(c))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function p(){let t=(function(){for(let c=0;c<$.themes.length;c+=1){let g=$.themes[c];if((g.name||g.id)===($.selectedTheme||$.activeTheme))return j(g)}return $.selectedTheme||$.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${h($.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${h(t)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${h(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${h(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function l(){let t=document.getElementById(y);t&&t.addEventListener("click",function(c){if(c.target===t){B();return}let g=c.target.closest("[data-setup-action]");if(g){if(g.dataset.setupAction==="close"){B();return}if(g.dataset.setupAction==="prev"&&$.step>0){$.step-=1,P();return}g.dataset.setupAction==="next"&&n()}})}function o(t){let c=document.getElementById(y);if(c){if(t==="moderation"||t==="done"||t==="server"){if(c.querySelectorAll("[data-setup-goto]").forEach(function(g){g.addEventListener("click",function(){B();let a=g.dataset.setupGoto;a&&(window.location.hash=a)})}),t==="done"){let g=c.querySelector("[data-setup-complete-cta]");g&&g.addEventListener("click",d)}return}if(t==="theme"){c.querySelectorAll("[data-setup-theme]").forEach(function(g){g.addEventListener("click",function(){$.selectedTheme=g.dataset.setupTheme||$.selectedTheme,P()})});return}}}async function e(){try{let t=await fetch("/admin/themes",{credentials:"same-origin"});if(!t.ok)return;let c=await t.json(),g=Array.isArray(c.themes)?c.themes:[];if(!g.length)return;$.themes=g.map(function(a){return{name:a.name||a.id||"",label:a.label||a.display_name||a.name||"",description:a.description||"",colors:a.preview_colors||a.colors||a.palette||C[0].colors}}),$.activeTheme=c.active||$.themes[0]&&$.themes[0].name||$.activeTheme,$.selectedTheme||($.selectedTheme=$.activeTheme),$.open&&f[$.step].id==="theme"&&P()}catch{}}async function r(){if(!$.selectedTheme||$.selectedTheme===$.activeTheme)return!0;try{let t=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$.selectedTheme})});if(!t.ok)throw new Error("HTTP "+t.status);return $.activeTheme=$.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function n(){if(!(f[$.step].id==="theme"&&!await r())){if($.step<f.length-1){$.step+=1,P();return}d()}}function d(){try{localStorage.setItem(T,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),B()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){B()},isCompleted:function(){try{return!!localStorage.getItem(T)}catch{return!1}},__setCapabilityForTest:function(){}};function s(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&s()})})()});var Pt=he(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},h={poll:null,refreshTimer:0};function f(){return`
      <div id="${y}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-pdd-title>${ServerI18n.t("adminRouteTitle_poll-deepdive")}</h2>
          <!-- \u8FD4\u56DE\u9023\u7D50\u5728\u5361\u7247\u9801\u9996\uFF08\u2039 \u6295\u7968\uFF0C\u8A2D\u8A08\u7A3F 08 \xB7 P1\uFF09\u2014\u2014\u9019\u88E1\u518D\u653E\u4E00\u500B
               \u300C\u2190 \u56DE\u6295\u7968\u5217\u8868\u300D\u662F\u540C\u4E00\u4EF6\u4E8B\u8AAA\u5169\u6B21\u3002 -->
          <p class="admin-ui-page-note" data-pdd-note>${ServerI18n.t("pollDeepdivePageNote")}</p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">${ServerI18n.t("pollDeepdiveLoadingText")}</div>
        </div>
      </div>`}function C(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let x=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});x.classList.add("lg:col-span-2"),x.dataset.emptyKind="poll-deepdive",b.appendChild(x)}let j=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function $(b){if(!b||b.length<2)return"";let x=Math.max.apply(null,b.map(function(l){return l.n}).concat([1])),q=100,A=32,S=q/(b.length-1),p=b.map(function(l,o){let e=(o*S).toFixed(2),r=(A-l.n/x*(A-2)-1).toFixed(2);return e+","+r});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+q+" "+A+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+p.join(" ")+'" /></svg>'}function m(b){let x=b.state||(b.active?"active":"ended"),q=b.question||"\u2014",A=Array.isArray(b.options)?b.options:[],S=function(g){return Number(g.votes!=null?g.votes:g.count)||0},p=A.reduce(function(g,a){return g+S(a)},0),l=x==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(b.ended_at)}),o=(function(){let g=Number(b.started_at)||0;if(!g)return"\u2014";let a=x==="active"?Date.now()/1e3:Number(b.ended_at)||g,i=Math.max(0,Math.floor(a-g));return Math.floor(i/60)+":"+String(i%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,r=e>0?Math.round(p/e*100)+"%":"\u2014",n=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:p,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),d=(function(){let g=Array.isArray(b.questions)?b.questions:[],a=0;for(let i of g)a+=Number(i.duplicate_attempts)||0;return g.length||(a=Number(b.duplicate_attempts)||0),a})(),s=A.map(function(g,a){let i=S(g),u=p>0?i/p*100:0,v=j[a%j.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${T(g.label||g.text||g.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:a+1}))}</span>
            <span class="votes">${i} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${v}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(b.vote_timeline)?b.vote_timeline:[],c=t.length>=2?$(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${T(q)}</div>
          <div class="admin-pdd-state">${T(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${p}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${r}</div><div class="sub">${T(n)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${T(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${d}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${A.length?s:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${c}</div>
        </article>
      </div>`}function N(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!h.poll||!h.poll.poll_id){C(b);return}b.innerHTML=m(h.poll)}}async function D(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let x=await b.json();h.poll=x,N()}catch{}}function B(){if(!h.poll||!Array.isArray(h.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],x=h.poll.options.reduce(function(l,o){return l+(Number(o.votes!=null?o.votes:o.count)||0)},0);h.poll.options.forEach(function(l,o){let e=Number(l.votes!=null?l.votes:l.count)||0,r=x>0?(e/x*100).toFixed(2):"0.00";b.push([l.label||"option_"+(o+1),e,r])});let q=b.map(function(l){return l.map(function(o){let e=String(o);return e.includes(",")||e.includes('"')?'"'+e.replace(/"/g,'""')+'"':e}).join(",")}).join(`
`),A=new Blob([q],{type:"text/csv;charset=utf-8"}),S=URL.createObjectURL(A),p=document.createElement("a");p.href=S,p.download="poll-"+(h.poll.poll_id||"current")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(S)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function w(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),h.refreshTimer||(h.refreshTimer=setInterval(D,5e3))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function L(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",f());let x=document.getElementById(y);x&&x.addEventListener("click",function(q){let A=q.target.closest("[data-pdd-action]");A&&(A.dataset.pddAction==="export-csv"?B():A.dataset.pddAction==="push"&&w())}),D(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&L()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&L()})})()});var Rt=he(()=>{(function(){"use strict";let y="admin-message-drawer-root",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},C=null;function j(r){let n=r.detail&&r.detail.entry;n&&(f.open||(C=document.activeElement),f.entry=n,F(),n.data&&n.data.fingerprint&&D(n.data.fingerprint),B(n))}function F(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",w()),P()),L();let r=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(r)try{r.focus({preventScroll:!0})}catch{}}function $(){f.open=!1,document.body.dataset.messageDrawerOpen="";let r=document.getElementById(y);if(r&&r.remove(),C&&typeof C.focus=="function"&&document.contains(C))try{C.focus({preventScroll:!0})}catch{}C=null}function m(r){if(!f.open)return;if(r.key==="Escape"){$();return}let n=document.activeElement,d=n?(n.tagName||"").toLowerCase():"";if(!(n&&(n.isContentEditable||d==="input"||d==="textarea"||d==="select"))){if(r.key==="ArrowLeft"||r.key==="k"){N(-1),r.preventDefault();return}if(r.key==="ArrowRight"||r.key==="j"){N(1),r.preventDefault();return}}}function N(r){if(!f.entry)return;let n=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(n=window.AdminLiveFeed.getEntries()),!n.length)return;let d=n.findIndex(function(c){return c.id===f.entry.id});if(d<0)return;let s=d+-r;if(s<0||s>=n.length){window.showToast&&window.showToast(r<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=n[s];f.entry=t,f.fingerprintRecord=null,B(t),L(),t.data&&t.data.fingerprint&&D(t.data.fingerprint)}async function D(r){try{let n=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!n.ok)return;let d=await n.json(),t=(Array.isArray(d.records)?d.records:[]).find(function(c){return c.fingerprint===r});f.fingerprintRecord=t||null,L()}catch{}}function B(r){let n=r.data&&r.data.fingerprint;if(!n){f.sameFpEntries=[];return}let d=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(d=window.AdminLiveFeed.getEntries()),f.sameFpEntries=d.filter(function(s){return(s.data&&s.data.fingerprint||s.fingerprint||"")===n}).slice(0,8)}function w(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let r=document.getElementById(y);r&&r.addEventListener("click",function(n){let d=n.target.closest("[data-msgd-action]");if(!d)return;n.stopPropagation();let s=d.dataset.msgdAction;s==="close"?$():s==="ban-fp"?S():s==="ban-fp-quick"?A():s==="recall-msg"?l():s==="blacklist-kw"?o():s==="reply"?e():s==="prev"?N(-1):s==="next"&&N(1)})}function L(){let r=document.getElementById(y);if(!r)return;let n=r.querySelector("[data-msgd-body]");n&&(n.innerHTML=b())}function b(){let r=f.entry;if(!r)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let n=r.data||{},d=n.fingerprint||"\u2014",s=d==="\u2014"?"\u2014":d.slice(0,8),t=d==="\u2014"?"\u2014":d.slice(0,12),c=r.ts?x(r.ts):"\u2014",g=n.nickname||ServerI18n.t("msgDrawerAnonymous"),a=f.fingerprintRecord||{},i=Number(a.message_count)||0,u=Number(a.violation_count)||0,v=f.sameFpEntries||[],k=v.length?Math.round(v.reduce((_,M)=>_+((M.data||M).text||"").length,0)/v.length):(n.text||"").length,I=0;for(let _=0;_<d.length;_++)I=I*31+d.charCodeAt(_)&65535;return I=I%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${I})">${h((g||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${h(g)}</div>
          <div class="admin-msgd-v4__fp">fp:${h(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${h(c)}</span>
      </div>

      <div class="admin-msgd-v4__body">${h(n.text||"")}</div>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: "\u767C\u9001\u8005 \xB7 SENDER PROFILE" is the sitewide EN\xB7\u4E2D\u6587
             bilingual monolabel pattern (same family as admin-ui-monolabel,
             pattern-level decision still deferred \u2014 see TODOS.md "\u300CEN \xB7
             \u4E2D\u6587\u300D\u96D9\u8A9E monolabel \u7684 pattern \u6C7A\u7B56", precedent commit 4771242).
             .admin-msgd-v4__seclabel mirrors .admin-ui-monolabel styling
             (style.css) so it's treated the same \u2014 left untouched, as are the
             two seclabel headers below. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecSender")}</div>
        <div class="admin-msgd-v4__sender-stats">
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${i||v.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${k}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${h(n.ip||"\u2014")}<br/>
          UA \xB7 ${h(n.user_agent||n.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${d==="\u2014"?"disabled":""}>${h(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${n.message_id?"":"disabled"}>${h(ServerI18n.t("lfRecallBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-blacklist" data-msgd-action="blacklist-kw">${ServerI18n.t("msgDrawerBlacklistBtn")}</button>
        </div>
      </section>

      <section class="admin-msgd-v4__section is-grow">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecReply")}</div>
        <textarea class="admin-msgd-v4__reply" data-msgd-reply placeholder="${ServerI18n.t("msgDrawerReplyPlaceholder")}" rows="3"></textarea>
        <button type="button" class="admin-msgd-v4__replybtn" data-msgd-action="reply">${ServerI18n.t("msgDrawerSendReply")}</button>
      </section>

      <footer class="admin-msgd-v4__footer">
        <button type="button" data-msgd-action="prev">\u2190 ${ServerI18n.t("uiPrev")}</button>
        <button type="button" data-msgd-action="next">${ServerI18n.t("uiNext")} \u2192</button>
      </footer>
    `}function x(r){try{let n=new Date(r),d=String(n.getHours()).padStart(2,"0"),s=String(n.getMinutes()).padStart(2,"0"),t=String(n.getSeconds()).padStart(2,"0");return d+":"+s+":"+t}catch{return"\u2014"}}function q(r){let n;if(typeof r=="number")n=r*1e3;else if(typeof r=="string")n=new Date(r).getTime();else return"\u2014";if(!n)return"\u2014";let d=(Date.now()-n)/1e3;return d<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(d)}):d<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(d/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(d/86400)})}async function A(r,n,d){let s=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!s)return;let t=parseInt(n||0,10)||0,c=t>0?await window.AdminModeration.banFingerprint(s,t,r):await window.AdminModeration.callBlock("fingerprint",s,r);if(!c.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:c.error||""}),!1);return}let g=d||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:s.slice(0,8),label:g}),!0),$()}async function S(){let r=f.entry&&f.entry.data||{},n=r.fingerprint||"\u2014";if(n==="\u2014")return;let d=n.slice(0,12),s=r.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let I=0;I<n.length;I++)t=t*31+n.charCodeAt(I)&65535;t=t%360;let c=document.createElement("div");c.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${h((s||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${h(s)}</div>
          <div class="fp">fp:${h(d)}</div>
          <div class="ip">IP \xB7 ${h(r.ip||"\u2014")} \xB7 ${h(r.user_agent||r.ua||"\u2014")}</div>
        </div>
      </div>
      <div class="admin-bancfm-section">
        <div class="admin-bancfm-sec-label">${ServerI18n.t("msgDrawerBanDurationLabel")}</div>
        <div class="admin-bancfm-duration">
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="3600">${ServerI18n.t("msgDrawerDurationHour1")}</span>
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="86400">${ServerI18n.t("msgDrawerDurationHour24")}</span>
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="604800">${ServerI18n.t("msgDrawerDurationDay7")}</span>
          <span class="admin-bancfm-dchip is-active" role="button" tabindex="0" data-ban-duration="0">${ServerI18n.t("msgDrawerPermanent")}</span>
        </div>
      </div>
      <div class="admin-bancfm-section">
        <div class="admin-bancfm-sec-label">${ServerI18n.t("msgDrawerReasonLabel")}</div>
        <input type="text" class="admin-bancfm-reason" data-ban-reason placeholder="${ServerI18n.t("msgDrawerReasonPlaceholder")}" maxlength="200" />
      </div>
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let g=I=>{c.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),I.classList.add("is-active")};if(c.addEventListener("click",I=>{let _=I.target.closest("[data-ban-duration]");_&&g(_)}),c.addEventListener("keydown",I=>{if(I.key!=="Enter"&&I.key!==" ")return;let _=I.target.closest("[data-ban-duration]");_&&(I.preventDefault(),g(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:c,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let i=(c.querySelector("[data-ban-reason]")||{}).value||"",u=c.querySelector(".admin-bancfm-dchip.is-active"),v=u&&parseInt(u.dataset.banDuration||"0",10)||0,k=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return A(i.trim(),v,k)}function p(){}async function l(){let r=f.entry,n=r&&r.data&&r.data.message_id;if(!n)return;if(!(await window.AdminModeration.recall(n)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),$()}async function o(){let r=f.entry&&f.entry.data&&f.entry.data.text;if(!r)return;await window.AdminModeration.blockKeyword(r)&&$()}async function e(){let r=document.querySelector("[data-msgd-reply]"),n=r?r.value.trim():"";if(n)try{let d=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})});if(!d.ok)throw new Error("HTTP "+d.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),r&&(r.value="")}catch(d){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:d.message||""}),!1)}}window.AdminMessageDrawer={open:function(r){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:r}}))},close:$},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",j),document.addEventListener("keydown",m))})})()});var Ot=he(()=>{(function(){"use strict";let y="danmu.notifications.read",T="danmu.notifications.archived",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={items:[],refreshTimer:0};function C(s){try{let t=localStorage.getItem(s);if(!t)return new Set;let c=JSON.parse(t);return new Set(Array.isArray(c)?c:[])}catch{return new Set}}function j(s,t){try{localStorage.setItem(s,JSON.stringify(Array.from(t)))}catch{}}function F(s){let t=C(y);t.add(s),j(y,t)}async function $(){let s=[m().catch(function(){return[]}),N().catch(function(){return[]}),D().catch(function(){return[]}),B().catch(function(){return[]})],c=(await Promise.all(s)).flat();c.sort(function(g,a){return(a.ts||0)-(g.ts||0)}),f.items=c,x(),S()&&q()}async function m(){let s=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,u="tok-"+(g.ts||a)+"-"+(g.kind||"x"),v=g.kind||"?",k="info",I=ServerI18n.t("notifTitleFireTokenEvent");if(v==="rotated")k="info",I=ServerI18n.t("notifTitleFireTokenRotated");else if(v==="revoked")k="warn",I=ServerI18n.t("notifTitleFireTokenRevoked");else if(v==="toggled"){let _=g.meta&&g.meta.enabled;k=_?"good":"warn",I=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:k,src:"Fire Token",ts:i,title:I,desc:ServerI18n.t("notifDescEventType",{kind:v})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function N(){let s=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,u="flt-"+(g.ts||a)+"-"+(g.action||"x")+"-"+a,v=g.action||"match";return{id:u,sev:v==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:v}),desc:ServerI18n.t("notifDescFilterHit",{rule:g.rule_id||"?",text:(g.text||"").slice(0,60)}),raw:g}})}async function D(){let s=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,a){let i=(Number(g.ts)||0)*1e3,u=String(g.kind||"?");return{id:"wh-"+(g.ts||a)+"-"+u+"-"+a,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:g.actor||"system"})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function B(){let s=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json(),c=Array.isArray(t.events)?t.events:[],g=new Set(["auth","broadcast","system","session","sessions"]);return c.filter(function(a){return g.has(String(a.source||""))}).map(function(a,i){let u=(Number(a.ts)||0)*1e3,v=String(a.kind||"?");return{id:"sys-"+(a.ts||i)+"-"+(a.source||"x")+"-"+v+"-"+i,sev:v==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:v}),desc:ServerI18n.t("notifDescSystemEvent",{source:a.source||"?",actor:a.actor||"system"}),raw:a}})}let w="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function L(s){let t=P[s];return t?ServerI18n.t(t.key):s}function b(){let s=C(y),t=C(T);return f.items.filter(c=>!s.has(c.id)&&!t.has(c.id))}function x(){let s=document.querySelector("[data-notif-badge]");if(!s)return;let t=b().length;s.textContent=t>99?"99+":String(t),s.hidden=t===0}function q(){let s=document.getElementById(w);if(!s)return;let t=b().slice(0,20),c=t.length?t.map(g=>{let a=P[g.src];return'<li class="admin-notif__item" data-sev="'+h(g.sev)+'"><div class="admin-notif__text">'+h(g.title)+'</div><div class="admin-notif__meta">'+h(L(g.src))+" \xB7 "+h(A(g.ts))+"</div>"+(a?'<button type="button" class="admin-notif__action" data-notif-go="'+h(a.hash)+'" data-notif-id="'+h(g.id)+'">'+h(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+h(ServerI18n.t("notifEmpty"))+"</li>";s.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+h(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+h(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+c+"</ul>"}function A(s){if(!s)return"\u2014";let t=(Date.now()-s)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function S(){let s=document.getElementById(w);return!!s&&!s.hidden}function p(){let s=document.getElementById(w);s&&(q(),s.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval($,3e4)))}function l(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&p()}function o(){let s=document.getElementById(w);s&&(s.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function e(){S()?o():p()}function r(){let s=document.querySelector(".admin-dash-topbar-actions");if(!s||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',s.insertBefore(t,s.firstChild),!document.getElementById(w)){let c=document.createElement("div");c.id=w,c.className="admin-notif",c.setAttribute("role","dialog"),c.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),c.hidden=!0,document.body.appendChild(c)}x(),l()}function n(){document.addEventListener("click",s=>{if(s.target.closest("#admin-notif-bell")){s.preventDefault(),e();return}let t=s.target.closest("[data-notif-go]");if(t){F(t.dataset.notifId),o(),location.hash=t.dataset.notifGo,x();return}if(s.target.closest("[data-notif-readall]")){b().forEach(c=>F(c.id)),q(),x();return}S()&&!s.target.closest("#"+w)&&o()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&S()&&o()}),window.addEventListener("hashchange",l),l()}function d(){r(),$()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(r).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),n(),d()})})()});var qt=he(()=>{(function(){"use strict";let y="sec-audit-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function C(){return`
      <div id="${y}" class="admin-audit-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("auditPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("auditPageNote")}</p>
        </div>

        <div class="admin-ui-toolbar admin-audit-toolbar-v5">
          <div class="admin-ui-chip-group admin-audit-chip-group" data-audit-actor-group>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip is-active" data-audit-actor-filter="all">${ServerI18n.t("auditFilterAll")}</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-audit-actor-filter="admin">admin</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-audit-actor-filter="system">system</button>
          </div>
          <div class="admin-ui-chip-group admin-audit-chip-group" data-audit-severity-group>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="info" data-audit-severity-filter="info">${ServerI18n.t("uiLevelInfo")}</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="warn" data-audit-severity-filter="warn">${ServerI18n.t("uiLevelWarn")}</button>
            <button type="button" class="admin-ui-chip admin-audit-filter-chip" data-severity="danger" data-audit-severity-filter="danger">${ServerI18n.t("uiLevelDanger")}</button>
          </div>
          <span class="admin-ui-spacer admin-audit-toolbar-spacer"></span>
          <span class="admin-ui-summary admin-audit-summary" data-audit-summary>${ServerI18n.t("auditLoading")}</span>
          <button type="button" class="admin-ui-action admin-audit-action" data-audit-export>${ServerI18n.t("auditExportBtn")}</button>
          <button type="button" class="admin-ui-action admin-audit-action" data-audit-refresh>${ServerI18n.t("auditRefreshBtn")}</button>
        </div>

        <div class="admin-ui-scroll-list admin-ui-timeline admin-audit-timeline" data-audit-rows>
          ${Array.from({length:5}).map(function(){return`
              <div class="admin-ui-timeline-row admin-audit-timeline-row admin-audit-timeline-row--skeleton is-skeleton" aria-hidden="true">
                <div class="admin-ui-stamp admin-audit-cell-stamp">
                  <span class="admin-skel admin-skel-bar" style="width:42px;height:9px"></span>
                  <span class="admin-skel admin-skel-bar" style="width:7px;height:7px;border-radius:50%"></span>
                </div>
                <div class="admin-ui-row-body admin-audit-cell-body">
                  <div class="admin-ui-row-head admin-audit-row-head">
                    <span class="admin-skel admin-skel-bar" style="width:46px;height:10px"></span>
                    <span class="admin-skel admin-skel-bar" style="width:120px;height:10px"></span>
                    <span class="admin-skel admin-skel-bar" style="width:90px;height:10px"></span>
                  </div>
                  <span class="admin-skel admin-skel-bar" style="width:220px;height:10px"></span>
                </div>
              </div>`}).join("")}
        </div>
      </div>`}function j(e){if(!e)return"\u2014";try{let r=new Date(Number(e)*1e3),n=String(r.getHours()).padStart(2,"0"),d=String(r.getMinutes()).padStart(2,"0"),s=String(r.getSeconds()).padStart(2,"0");return`${n}:${d}:${s}`}catch{return"\u2014"}}function F(e){let r=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(r)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(r)?"warn":"info"}function $(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(e){return f.filterActor==="all"||String(e.actor||"").toLowerCase()===f.filterActor}function N(e){return f.filterSeverity==="all"||F(e)===f.filterSeverity}function D(){return f.events.filter(function(e){return m(e)&&N(e)})}function B(e){let r=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return r.target||r.keyword||r.fp||r.fingerprint||r.name||r.mode||r.session||r.hook_id||e.target||""}function w(e,r){let n=e!=null,d=r!=null;if(!n&&!d)return"";let s=n?T(JSON.stringify(e)):"",t=d?T(JSON.stringify(r)):"";return n?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${s}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function P(e){let r=e&&e.meta&&typeof e.meta=="object"?e.meta:{},n=[];e.detail&&n.push(`<span>${T(String(e.detail))}</span>`);let d=w(e.before,e.after);d&&n.push(d);let s=Object.assign({},r);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(c){delete s[c]}),Object.keys(s).length&&n.push(`<code class="admin-ui-code admin-audit-meta-extra">${T(JSON.stringify(s))}</code>`),!n.length){let c=h[e.source]&&h[e.source].label||e.source||"system";n.push(`<span>${T(String(c))}</span>`)}return n.join(" ")}function L(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let r=D();if(!r.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=r.map(function(n){let d=F(n),s=$(d),t=String(n.actor||"system"),c=B(n);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${d}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${T(j(n.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${s};box-shadow:0 0 6px ${s}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${L(t)}">${T(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${T(String(n.action||n.kind||"\u2014"))}</span>
              ${c?`<span class="admin-ui-target admin-audit-target">\u2192 ${T(String(c))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(n)}</div>
          </div>
        </div>`}).join("")}function x(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let r=D().length,n=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,d=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:r,actor:n,sev:d})}function q(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===f.filterSeverity)})}async function A(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let r=await e.json(),n=Array.isArray(r.events)?r.events.slice():[];n.sort(function(d,s){return Number(s.ts||0)-Number(d.ts||0)}),f.events=n,q(),b(),x()}catch{}}function S(){let e=D();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let r=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(r),d=document.createElement("a");d.href=n,d.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(function(){URL.revokeObjectURL(n)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function p(){let e=document.getElementById(y);e&&e.addEventListener("click",function(r){let n=r.target.closest("[data-audit-actor-filter]");if(n){f.filterActor=n.dataset.auditActorFilter||"all",q(),b(),x();return}let d=r.target.closest("[data-audit-severity-filter]");if(d){let s=d.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===s?"all":s,q(),b(),x();return}if(r.target.closest("[data-audit-export]")){S();return}r.target.closest("[data-audit-refresh]")&&A()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(A(),f.refreshTimer||(f.refreshTimer=setInterval(A,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function o(){let e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",C()),p(),A(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&o()})})()});var Ht=he(()=>{(function(){"use strict";let y="sec-audience-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},h=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,C={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function j(i){if(!i)return h[0];let u=0;for(let v=0;v<i.length;v++)u=u*31+i.charCodeAt(v)>>>0;return h[u%h.length]}function F(i){if(!i)return"\u2014";let u=typeof i=="number"?i*1e3:new Date(i).getTime();if(!u)return"\u2014";let v=Math.max(0,(Date.now()-u)/1e3);return v<60?Math.floor(v)+"s":v<3600?Math.floor(v/60)+"m":v<86400?Math.floor(v/3600)+"h":Math.floor(v/86400)+"d"}function $(i){return i==="blocked"||i==="high"?"is-danger":i==="mid"?"is-warn":"is-success"}function m(){return`
      <div id="${y}" class="admin-audience-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("audiencePageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("audiencePageNote")}</p>
        </div>

        <div class="admin-aud-grid">
          <div class="admin-aud-stats" data-aud-stats></div>

          <div class="admin-aud-main-row">
            <div class="admin-aud-table-wrap">
              <div class="admin-ui-toolbar admin-aud-toolbar">
                <!-- \u8A2D\u8A08\u7A3F 15 \xB7 AU1 \u7684\u7BE9\u9078\u5217\uFF1A\u641C\u5C0B\u6846\uFF0B\u6392\u5E8F\u3002\u7A3F\u4E0A\u9084\u6709\u4E00\u500B
                     \u300C\u9019\u5834 \xB7 37 \u4EBA\u300D\u7684\u4E0B\u62C9\uFF0C\u4F46\u9019\u4EFD\u540D\u55AE\u662F in-memory \u7684\u5373\u6642
                     \u805A\u5408\u3001\u6C92\u6709\u5834\u6B21\u7DAD\u5EA6\u2014\u2014\u8207\u5176\u505A\u4E00\u500B\u53EA\u6709\u4E00\u500B\u9078\u9805\u7684\u4E0B\u62C9\uFF0C
                     \u4E0D\u5982\u4E0D\u505A\u3002 -->
                <input type="search" class="admin-ui-input admin-aud-search" data-aud-search
                       placeholder="${ServerI18n.t("audienceSearchPlaceholder")}"
                       aria-label="${ServerI18n.t("audienceSearchPlaceholder")}" />
                <select class="admin-ui-select admin-aud-sort" data-aud-sort
                        aria-label="${ServerI18n.t("audienceSortAria")}">
                  <option value="msgs">${ServerI18n.t("audienceSortByMsgs")}</option>
                  <option value="last_seen">${ServerI18n.t("audienceSortByLastSeen")}</option>
                </select>
                <span class="admin-ui-summary admin-aud-summary" data-aud-summary>${ServerI18n.t("audienceLoading")}</span>
                <span class="admin-ui-spacer"></span>
                <span class="admin-ui-chip-group admin-aud-filters" data-aud-filters></span>
                <button type="button" class="admin-ui-action admin-aud-refresh" data-aud-action="refresh" aria-label="${ServerI18n.t("audienceRefreshAria")}">\u21BB</button>
              </div>
              <div class="admin-aud-list" data-aud-list>
                <div class="admin-aud-loading">${ServerI18n.t("audienceListLoading")}</div>
              </div>
            </div>
            <aside class="admin-aud-detail" data-aud-detail hidden>
              <!-- populated by _renderDetail() on row click -->
            </aside>
          </div>
        </div>
      </div>`}function N(){let i=C.search.trim().toLowerCase(),u=C.records.slice();return i&&(u=u.filter(function(v){return String(v.nickname||"").toLowerCase().indexOf(i)!==-1||String(v.hash||"").toLowerCase().indexOf(i)!==-1})),u.sort(function(v,k){return C.sort==="last_seen"?(Number(k.last_seen)||0)-(Number(v.last_seen)||0):(Number(k.msgs)||0)-(Number(v.msgs)||0)}),C.filter==="all"?u:C.filter==="flagged"?u.filter(function(v){return v.state==="flagged"||v.state==="blocked"}):C.filter==="extension"?u.filter(function(v){return v.fingerprint&&(v.fingerprint.indexOf("slido")===0||v.fingerprint.indexOf("ext_")===0)}):u}function D(){let i=document.querySelector("[data-aud-stats]");if(!i)return;let u=C.records,v=u.length,k=u.filter(function(R){return R.state==="flagged"}).length,I=u.filter(function(R){return R.state==="blocked"}).length,_=u.reduce(function(R,K){return R+(Number(K.msgs)||0)},0),M=u.filter(function(R){let K=R.last_seen;if(!K)return!1;let E=typeof K=="number"?K*1e3:new Date(K).getTime();return(Date.now()-E)/1e3<300}).length;i.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${M}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${k}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${I}</div></div>`}function B(){let i=document.querySelector("[data-aud-filters]");if(!i)return;let u=C.records.length,v=C.records.filter(function(k){return k.state==="flagged"||k.state==="blocked"}).length;i.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:v})}</button>`}let w="__anon__";function P(i){let u=(i.nickname||"").trim();return!u||u==="\u533F\u540D"}function L(i){let u=i.hash||i.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function b(){let i=[],u=[];return N().forEach(function(v){P(v)?u.push(v):i.push(v)}),u.length&&i.push({_anonGroup:!0,_count:u.length,fingerprint:w,msgs:u.reduce(function(v,k){return v+(Number(k.msgs)||0)},0),blocked:u.reduce(function(v,k){return v+(Number(k.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(v){return v.last_seen||0})),state:u.some(function(v){return v.state==="blocked"})?"blocked":"active"}),i}function x(){let i=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!i)return;let v=b(),k=Math.min(v.length,C.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:k,total:v.length})),v.length===0){i.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",i.appendChild(R);return}let I=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=v.slice(0,k).map(function(R){let K=R.fingerprint||"\u2014",E=R.state==="blocked",O=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),U=R._anonGroup?"?":O.slice(0,1),J=j(K);return`
        <div class="admin-aud-row${C.selectedFp===K?" is-selected":""}" data-aud-row data-aud-fp="${T(K)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${T(U)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${T(O)}</span>
            ${R._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:R._count})}</span>`:""}
            ${E&&!R._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${R._anonGroup?"\u2014":T(L(R))}</span>
          <span class="col col-msgs">${Number(R.msgs)||0}</span>
          <span class="col col-blocked">${Number(R.blocked)||0}</span>
          <span class="col col-seen">${T(F(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${T(K)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),M=v.length>k?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";i.innerHTML=I+_+M}function q(i){return i&&C.records.find(function(u){return u.fingerprint===i})||null}function A(i){if(!i)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],v=Number(i.msgs)||0,k=i.fingerprint||"";i.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),i.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),v>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:v})):v>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:v}));let I=C.records.filter(function(K){return K.ip&&i.ip&&K.ip===i.ip}).length;I>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:I})),(k.indexOf("slido")===0||k.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(i.nickname==="\u533F\u540D"||!i.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",M="var(--hud-lime)",R="NORMAL";return i.state==="blocked"?(_="blocked",M="var(--hud-crimson)",R="BLOCKED"):i.state==="flagged"||v>=25?(_="high",M="var(--hud-crimson)",R="HIGH RISK"):(v>=15||I>=3)&&(_="mid",M="var(--hud-amber)",R="MID"),{level:_,color:M,label:R,rules:u}}async function S(i){C.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){C.detailMessages=[];return}let v=await u.json(),k=Array.isArray(v.records)?v.records:[],I=Date.now()-300*1e3;C.detailMessages=k.filter(function(_){return(_.fingerprint||"")!==i?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=I}).slice(0,8)}catch{C.detailMessages=[]}finally{C.detailLoading=!1}}function p(){let i=document.querySelector("[data-aud-detail]");if(!i)return;let u=C.selectedFp;if(!u){i.hidden=!0,i.innerHTML="";return}let v=q(u);if(!v){C.selectedFp=null,i.hidden=!0;return}i.hidden=!1;let k=A(v);i.dataset.riskLevel=k.level;let I=j(u),_=!v.nickname||v.nickname==="\u533F\u540D",M=_?ServerI18n.t("audienceAnonymous"):v.nickname,R=_?"?":M.slice(0,1),K="fp:"+(u||"").slice(0,8),E=k.rules.length?k.rules.map(function(U){return"<li>"+T(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",O="";C.detailLoading?O='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":C.detailMessages.length===0?O='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":O=C.detailMessages.map(function(U){let J=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",te=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",Z=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+T(Z)+'</span><span class="m">'+T(U.text||"")+'</span><span class="s" style="color:'+te+'">'+J+"</span></div>"}).join(""),i.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+$(k.level)+'">'+T(k.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+I+'">'+T(R)+'</span><div><div class="nick">'+T(M)+'</div><div class="fp">'+T(K)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+k.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:k.rules.length})+"</div><ul>"+E+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+O+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+T(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+T(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(v.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+T(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+T(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+T(u)+'" data-aud-flagged="'+(v.is_flagged?"true":"false")+'">'+(v.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+T(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(i){C.selectedFp=i,C.detailMessages=[],p(),S(i).then(p)}async function o(){try{let i=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!i.ok)return;let u=await i.json();C.records=Array.isArray(u.entries)?u.entries:[],C.serverStats=u&&u.stats||null,D(),B(),x(),C.selectedFp&&p()}catch{}}async function e(i,u,v){if(i)try{let k=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,flagged:!!u,note:v||""})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:i.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:i.slice(0,8)}),!0),o()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:k.message||""}),!1)}}async function r(i,u){if(!i||i==="\u2014")return;let v=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:i.slice(0,8)}),"")||"");if(v!==null)try{let k=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,reason:v})});if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:i.slice(0,8)}),!0),o()}catch(k){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:k.message||""}),!1)}}async function n(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+T(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let v=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:v.message||""}),!1)}}async function d(i){if(!(!i||i==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:i,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:i.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function s(i){if(!(!i||i==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let v=await u.json(),I=(Array.isArray(v.rules)?v.rules:[]).filter(function(M){return M&&M.type==="fingerprint"&&M.pattern===i});if(I.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let M of I)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:M.rule_id||M.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:i.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function t(i){if(!(!i||i==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+T(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let v=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:i})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:i.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:v.message||""}),!1)}}function c(){let i=document.getElementById(y);i&&(i.addEventListener("input",function(u){let v=u.target.closest("[data-aud-search]");v&&(C.search=v.value||"",C.shown=f,x())}),i.addEventListener("change",function(u){let v=u.target.closest("[data-aud-sort]");v&&(C.sort=v.value,x())}),i.addEventListener("click",function(u){let v=u.target.closest("[data-aud-filter]");if(v){C.filter=v.dataset.audFilter,C.shown=f,B(),x();return}let k=u.target.closest("[data-aud-action='ban']");if(k){u.stopPropagation(),t(k.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){o();return}if(u.target.closest("[data-aud-action='more']")){C.shown+=f,x();return}if(u.target.closest("[data-aud-action='close-detail']")){C.selectedFp=null,p();return}let R=u.target.closest("[data-aud-action='detail-ban']");if(R){t(R.dataset.audFp);return}let K=u.target.closest("[data-aud-action='detail-mask']");if(K){d(K.dataset.audFp);return}let E=u.target.closest("[data-aud-action='detail-safe']");if(E){s(E.dataset.audFp);return}let O=u.target.closest("[data-aud-action='flag']");if(O){u.stopPropagation(),e(O.dataset.audFp,O.dataset.audFlagged!=="true");return}let U=u.target.closest("[data-aud-action='kick']");if(U){u.stopPropagation(),r(U.dataset.audFp);return}let J=u.target.closest("[data-aud-action='unkick']");if(J){u.stopPropagation(),n(J.dataset.audFp);return}let te=u.target.closest("[data-aud-row]");if(!(te&&te.dataset.audFp===w)&&te&&!u.target.closest("button")){l(te.dataset.audFp);return}}))}function g(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),C.refreshTimer||(C.refreshTimer=setInterval(o,15e3))):C.refreshTimer&&(clearInterval(C.refreshTimer),C.refreshTimer=0)}function a(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",m()),c(),o(),g(),window.addEventListener("hashchange",g))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&a()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&a()})})()});var jt=he(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],T={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},h=2500,f=0,C=0,j=null;function F(){if(j)return j;let B=document.createElement("div");return B.className="admin-konami-hud",B.setAttribute("aria-hidden","true"),B.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(B),j=B,B}function $(){if(f===0){j&&j.classList.remove("is-on");return}let B=F();B.classList.add("is-on");let w=B.querySelector(".admin-konami-hud-keys");w&&(w.innerHTML=y.map((L,b)=>`<span class="admin-konami-hud-key ${b<f?"is-filled":""}">${T[L]}</span>`).join(""));let P=B.querySelector(".admin-konami-hud-progress");if(P){let L=Math.round(f/y.length*100);P.style.width=L+"%"}}function m(B){f=0,C&&(clearTimeout(C),C=0),B||$()}function N(){C&&clearTimeout(C),C=setTimeout(()=>m(),h)}async function D(){try{let B=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!B.ok)throw new Error("HTTP "+B.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(B){console.warn("[konami] trigger failed:",B&&B.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",B=>{let w=B.target;if(w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable))return;let P=y[f];if(!(B.key===P||P==="b"&&B.key.toLowerCase()==="b"||P==="a"&&B.key.toLowerCase()==="a")){f=B.key===y[0]?1:0,$(),f>0?N():C&&(clearTimeout(C),C=0);return}if(f++,$(),f>=y.length){m(!0),D();return}N()}),window.AdminKonami={trigger:D}})()});var Ut=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function T(d){return d==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:d==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:d==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function h(){let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,s=d?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
      <div id="sec-fonts" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("font")}</h2>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("fontsPageNote")}
          </p>
        </div>
        <div class="hud-page-grid-2-wide">
          <!-- Left: font table -->
          <div class="hud-page-stack" style="gap:0">
            <div class="hud-table" id="fontsTable">
              <div class="hud-table-head" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;">
                <span>${ServerI18n.t("fontsColFamily")}</span>
                <span>${ServerI18n.t("fontsColFoundry")}</span>
                <span>${ServerI18n.t("fontsColWeight")}</span>
                <span>${ServerI18n.t("fontsColSize")}</span>
                <span>${ServerI18n.t("fontsColFormat")}</span>
                <span style="text-align:right">${ServerI18n.t("ulStatus")}</span>
              </div>
              <div id="adminFontList">
                <div class="hud-table-row" style="grid-template-columns: 1fr;">
                  <span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("loadingFonts")}</span>
                </div>
              </div>
              <div class="hud-table-foot" style="padding:14px 16px;display:flex;align-items:center;gap:10px;">
                ${d?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${s}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${d?`
            <div class="admin-ui-card admin-fonts-upload-card" id="adminFontDropWrap" style="margin-top:12px">
              <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("fontsUploadCustomLabel")}</div>
              <div
                id="adminFontDrop"
                class="admin-fonts-drop"
                role="button"
                tabindex="0"
                aria-label="${y(ServerI18n.t("uploadFont"))}"
              >
                <div class="admin-fonts-drop-icon">\u2B06</div>
                <div class="admin-fonts-drop-title">${ServerI18n.t("fontsDropTitle")}</div>
                <div class="admin-fonts-drop-hint">${ServerI18n.t("fontsDropHint")}</div>
                <div id="adminFontDropStatus" class="admin-fonts-drop-status" hidden></div>
              </div>
              <div id="adminFontUploadError" class="admin-font-upload-error" hidden></div>
            </div>`:""}
          </div>

          <!-- Right: preview + metadata panels -->
          <div class="hud-page-stack" style="gap:16px">
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0"><span id="fontsPreviewFamily">Noto Sans TC</span></span>
              </div>
              <div style="padding:16px;display:flex;flex-direction:column;gap:8px">
                <div id="fontsPreviewHeadline" style="font-size:34px;font-weight:700;line-height:1.2;color:var(--color-text-strong)">${ServerI18n.t("fontsPreviewHeadline")}</div>
                <div id="fontsPreviewLatin" style="font-size:20px;color:var(--color-text-muted)">${ServerI18n.t("fontsPreviewLatin")}</div>
                <div style="padding:10px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px;font-size:13px;color:var(--color-text-strong)">
                  <div id="fontsPreviewCJK">${ServerI18n.t("fontsPreviewCJK")}</div>
                  <div style="margin-top:6px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">
                    U+6C38 U+548C U+5B89 U+5EB7 \xB7 ${ServerI18n.t("fontsPreviewCJKNote")}
                  </div>
                </div>
              </div>
            </div>

            <!-- 2026-09-07 \u8A2D\u8A08\u7A3F 08 \xB7 T2\uFF1A
                 \xB7 \u5B50\u96C6\u5316\u5361\u539F\u672C\u756B\u4E00\u689D\u5BEB\u6B7B 38% \u7684\u9032\u5EA6\u689D\uFF0C\u52A0\u4E0A ORIG \xB7 N \u5B57\u578B /
                   SUBSET \xB7 ~38%\u2014\u2014\u7A0B\u5F0F\u78BC\u8A3B\u89E3\u81EA\u5DF1\u5BEB\u8457\u300Cnot real data\u300D\u3002\u800C\u4E14
                   \u5B50\u96C6\u5316\u6839\u672C\u4E0D\u662F\u81EA\u52D5\u7684\uFF1A\u5B83\u662F\u6BCF\u500B\u5B57\u578B\u5404\u81EA\u6309\u4E00\u6B21\u7684\u52D5\u4F5C
                   \uFF08POST /admin/fonts/<name>/subset\uFF09\u3002\u6539\u6210\u8B1B\u771F\u8A71\u4E26\u6307\u8DEF\u3002
                 \xB7 \u300CCDN DELIVERY \xB7 \u4EA4\u4ED8\u72C0\u614B\u300D\u6574\u5F35\u9000\u5834\uFF1AHIT RATE\uFF0FP95 TTFB\uFF0F
                   REQ/24H \u4E09\u500B id \u5F9E\u4F86\u6C92\u6709\u4EFB\u4F55\u7A0B\u5F0F\u5BEB\u904E\u503C\uFF0CEDGE \u6C38\u9060\u5370
                   \u300CLOCAL\u300D\u3002\u6C92\u6709 CDN\uFF0C\u90A3\u5F35\u5361\u662F\u5728\u5BA3\u50B3\u4E0D\u5B58\u5728\u7684\u6771\u897F\u3002 -->
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fontsSecSubsetting")}</span>
              </div>
              <div style="padding:16px">
                <div style="font-size:13px;line-height:1.7;color:var(--color-text-strong)">${ServerI18n.t("fontsSubsetHowto")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}var f=null,C=[];function j(d,s){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((d||[]).some(a=>a.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var g=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:s?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var a=document.getElementById("adminFontFileInput");a&&a.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});g.dataset.emptyKind="fonts",t.appendChild(g)}function F(d,s){let t=d.weight||"\u2014",c=d.sizeLabel||"\u2014",g=d.foundry||(d.type==="system"?"System":d.type==="default"?"Google / Noto":"Uploaded"),a=d.format||"\u2014",i=d.status||d.type,u=`font-family: "${y(d.name)}", sans-serif;`,v=T(i),k=[];if(s){if(i!=="default"&&k.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(d.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),i!=="default"){let I=i==="enabled"||i==="system",_=I?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");k.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(d.name)}" data-enabled="${I?"true":"false"}">${_}</button>`)}d.type==="uploaded"&&(k.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(d.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),k.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(d.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(d.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(d.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(k.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${k.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(g)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(c)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(a)}</span><div style="text-align:right">${v}</div></div>`}let $=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if($)return $;try{let d=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return d.ok?($=(await d.json()).presets||{},$):{}}catch{return{}}}function D(d){return!d||!Number.isFinite(d)?"\u2014":d<1024?d+" B":d<1024*1024?(d/1024).toFixed(1)+" KB":(d/(1024*1024)).toFixed(2)+" MB"}async function B(d){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let s=await N();if(!Object.keys(s).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),c="",g=document.createElement("div");g.className="admin-font-subset-modal-body";let a=()=>{let v=Object.keys(s).map(I=>{let _=m[I]||{label:I,glyphs:"\u2014",estSize:"\u2014"},M=_.labelKey?ServerI18n.t(_.labelKey):_.label,R=t.has(I);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${I}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(M)}</span>
            <span class="admin-font-subset-chip-range">${y(s[I])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");g.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(d)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${v}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(c)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,g.querySelectorAll("[data-subset-preset]").forEach(I=>{I.addEventListener("click",_=>{_.preventDefault();let M=I.dataset.subsetPreset;t.has(M)?t.delete(M):t.add(M),a()})});let k=g.querySelector("[data-subset-custom]");k&&k.addEventListener("input",()=>{c=k.value})};if(a(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:g,width:540}))return;let u=[];if(t.forEach(v=>{s[v]&&u.push(s[v])}),c.trim()&&u.push(c.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await w(d,u.join(","))}async function w(d,s){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:d}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(d)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:s})}),c=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(c.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let g=c.saved_bytes||0,a=Math.round((c.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:d,before:D(c.original_size),after:D(c.new_size),pct:a}),!0),b()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(d){try{let s=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:d})});if(!s.ok)throw new Error("HTTP "+s.status);f=d,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:d}),!0),b()}catch(s){console.error("[admin-fonts] set default failed:",s),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function L(d,s){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(d)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!s})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(s?"fontsToggleOffToast":"fontsToggleOnToast",{name:d}),!0),b()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var d=document.getElementById("adminFontList");if(!d)return;let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var c=await t.json(),g=c.fonts||[];if(C=g,window.AdminTabs?.setTabCount?.("assets","fonts",g.length||""),j(g,s),g.length===0){d.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,p(g);return}d.innerHTML=g.map(a=>F(a,s)).join(""),p(g),l()}catch(a){console.error("[admin-fonts] fetch failed:",a),d.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,j([],s)}}async function x(d){try{let s=await d.slice(0,4).arrayBuffer(),t=new Uint8Array(s);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function q(d,s){let t=document.getElementById("adminFontDropStatus");if(t){if(!d){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=d,t.classList.toggle("is-good",s==="good"),t.classList.toggle("is-bad",s==="bad")}}function A(d){let s=document.getElementById("adminFontUploadError");if(!s)return;if(!d){s.hidden=!0,s.innerHTML="";return}s.hidden=!1,s.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(d)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=s.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let c=document.getElementById("adminFontFileInput");c&&c.click()})}async function S(d){if(!d)return;A("");let s=d.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(s)){window.showToast(ServerI18n.t("invalidFileType"),!1),q(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),A(ServerI18n.t("fontsExtNotSupportedFull"));return}if(d.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),q(ServerI18n.t("fontsFileTooLarge"),"bad"),A(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await x(d);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),q(ServerI18n.t("fontsMagicInvalid"),"bad"),A(ServerI18n.t("fontsMagicValidationFailed"));return}q(ServerI18n.t("fontsUploadValidated",{magic:t,size:(d.size/1024).toFixed(1)}),"good");try{var c=new FormData;c.append("fontfile",d);var g=await window.csrfFetch("/admin/upload_font",{method:"POST",body:c}),a=await g.json();g.ok?(window.showToast(a.message||ServerI18n.t("fontUploadFallback")),q(ServerI18n.t("fontsUploadedStatus",{filename:d.name}),"good"),A(""),await b()):(window.showToast(a.error||ServerI18n.t("uploadFailed"),!1),q(a.error||ServerI18n.t("uploadFailed"),"bad"),A(a.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(i){console.error("[admin-fonts] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1),q(ServerI18n.t("fontsNetworkErrorShort"),"bad"),A(ServerI18n.t("fontsNetworkDisconnected"))}}function p(d){let s=document.getElementById("fontsTotalSize");s&&(s.textContent=ServerI18n.t("fontsTotalCount",{n:d.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(d=>{d.addEventListener("click",s=>{if(s.target.closest(".admin-font-delete-btn"))return;let t=d.dataset.font,c=document.getElementById("fontsPreviewFamily"),g=document.getElementById("fontsPreviewHeadline"),a=document.getElementById("fontsPreviewLatin"),i=document.getElementById("fontsPreviewCJK");c&&(c.textContent=t);let u=`"${t}", sans-serif`;g&&(g.style.fontFamily=u),a&&(a.style.fontFamily=u),i&&(i.style.fontFamily=u)})})}async function o(){var d=document.getElementById("adminFontFileInput");if(d){var s=d.files&&d.files[0];if(!s){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await S(s),d.value=""}}function e(){let d=document.getElementById("adminFontDrop"),s=document.getElementById("adminFontFileInput");!d||!s||(d.addEventListener("click",t=>{t.target!==s&&s.click()}),d.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),s.click())}),["dragenter","dragover"].forEach(t=>{d.addEventListener(t,c=>{c.preventDefault(),c.stopPropagation(),d.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{d.addEventListener(t,c=>{c.preventDefault(),c.stopPropagation(),d.classList.remove("is-drag")})}),d.addEventListener("drop",async t=>{let c=t.dataTransfer&&t.dataTransfer.files;c&&c[0]&&await S(c[0])}))}async function r(d){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",d),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(d),{method:"DELETE"}),c=await t.json();t.ok?(window.showToast(c.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(g){console.error("[admin-fonts] delete error:",g),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function n(){var d=document.getElementById("settings-grid");if(d){d.insertAdjacentHTML("beforeend",h());var s=document.getElementById("adminFontFileInput");s&&s.addEventListener("change",o),e();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(c){var g=c.target.closest(".admin-font-delete-btn");if(g){c.stopPropagation(),r(g.dataset.name);return}var a=c.target.closest(".admin-font-default-btn");if(a){c.stopPropagation(),P(a.dataset.name);return}var i=c.target.closest(".admin-font-toggle-btn");if(i){c.stopPropagation();let v=i.dataset.enabled==="true";L(i.dataset.name,v);return}var u=c.target.closest(".admin-font-subset-btn");u&&(c.stopPropagation(),B(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(c=>c.ok?c.json():null).then(c=>{c&&Array.isArray(c.FontFamily)&&(f=c.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()});d.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()}})})()});var Kt=he(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let T="sec-scheduler",h=5e3,f=null,C=null;function j(n,d,s,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${n}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(d)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(s||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(n){var d=n==="active"?"is-success":n==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+d+'" title="'+m(n)+'"></span>'}function $(n){let d=n.state==="paused",s=n.repeat_count===void 0?"\u2014":n.repeat_count===-1?"\u221E":String(n.repeat_count),t=n.repeat_count>0&&typeof n.remaining=="number"?String(n.repeat_count-n.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(n.id)}">
        ${F(n.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(n.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${n.messages?n.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${n.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(t)}</span>
        <span class="admin-scheduler-job-val">${y(s)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${d?"is-active":"is-warn"}"
            data-job-id="${m(n.id)}" data-action="${d?"resume":"pause"}">
            ${y(ServerI18n.t(d?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(n.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(n){return y(n)}function N(){let n=document.querySelectorAll("#schedulerMessages [data-msg-index]"),d=[];return n.forEach(function(s){let t=s.querySelector(".scheduler-msg-text").value.trim(),c=s.querySelector(".scheduler-msg-color").value,g=parseInt(s.querySelector(".scheduler-msg-size").value,10)||48;t&&d.push({text:t,color:c,size:g})}),d}function D(n,d,s){let t=document.getElementById("schedulerMessages");if(!t)return;let c=t.children.length;t.insertAdjacentHTML("beforeend",j(c,n||"",d||"#ffffff",s||48))}function B(n){let d=n.closest("[data-msg-index]");d&&d.remove();let s=document.getElementById("schedulerMessages");s&&s.querySelectorAll("[data-msg-index]").forEach(function(t,c){t.dataset.msgIndex=c})}async function w(){let n=N();if(n.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let d=parseInt(document.getElementById("schedulerInterval").value,10);if(!d||d<1||d>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let s=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(s)||s<-1||s>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let c=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,interval_sec:d,repeat_count:s})}),g=await c.json();c.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await p()):showToast(g.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(c){console.error("Scheduler create error:",c),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function P(n){return"msg"}function L(n){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[n]||"\u25C8"}function b(n){return n.next_run_at?new Date(n.next_run_at*1e3).getHours():new Date().getHours()}function x(n){if(n.next_run_at){let d=new Date(n.next_run_at*1e3);return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}return"--:--"}function q(n){let d=n.id||"job",s=Array.isArray(n.messages)?n.messages.length:null;return"Job #"+d+(s!=null?" \xB7 "+s+" messages":"")}function A(n){let d=document.querySelector("[data-sch-timeline]");if(!d)return;let s=[],t=new Date().getHours();for(let g=0;g<24;g++){let a=g>=Math.max(0,t-1)&&g<=Math.min(23,t+2);s.push('<div class="admin-sch-timeline-hour'+(a?" is-peak":"")+'">'+String(g).padStart(2,"0")+"</div>")}let c=(n||[]).map(function(g){let a=P(g),i=L(a),u=g.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(x(g))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+a+'">'+i+'</span><span class="admin-sch-evt-desc">'+y(q(g))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");d.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+s.join("")+"</div></div>"+(c||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function S(n){let d=document.querySelector("[data-sch-calendar]");if(!d)return;let s=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,c=(t.getDay()+6)%7,g=new Date(t);g.setDate(t.getDate()-c);let a=s.map(function(u,v){let k=new Date(g);return k.setDate(g.getDate()+v),'<div class="admin-sch-calendar-day-head'+(v===c?" is-today":"")+'">'+y(u)+'<span class="date">'+k.getDate()+"</span></div>"}).join(""),i=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===c?(n||[]).slice(0,5).map(function(k){let I=P(k),_=L(I);return'<span class="admin-sch-cal-chip is-'+I+'">'+y(x(k))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");d.innerHTML='<div class="admin-sch-calendar-head">'+a+'</div><div class="admin-sch-calendar-body">'+i+"</div>"}async function p(){let n=document.getElementById("schedulerJobsList"),d=document.getElementById("schedulerJobsCount");if(n)try{let s=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!s.ok){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",d&&(d.textContent="\u2014");return}let t=await s.json();if(!Array.isArray(t.jobs)){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",d&&(d.textContent="\u2014");return}d&&(d.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),A(t.jobs),S(t.jobs);let c=document.querySelector("[data-sch-meta]");if(c){let g=new Date().toISOString().slice(0,10);c.textContent=ServerI18n.t("schTodayMeta",{date:g,n:t.jobs.length})}if(t.jobs.length===0){n.innerHTML="";let g=window.AdminEmpty.render("scheduler");g.dataset.emptyKind="scheduler",n.appendChild(g);return}n.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map($).join("")}catch(s){console.error("Scheduler fetch error:",s),n.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(n,d){try{let s=await csrfFetch("/admin/scheduler/"+encodeURIComponent(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),t=await s.json();s.ok?(showToast(d==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await p()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(s){console.error("Scheduler toggle error:",s),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(n){try{let d=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),s=await d.json();d.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await p()):showToast(s.error||ServerI18n.t("cancelFailed"),!1)}catch(d){console.error("Scheduler cancel error:",d),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let n=document.getElementById("settings-grid");if(!n)return;n.insertAdjacentHTML("beforeend",`
      <details id="${T}" class="admin-dsp2-fold lg:col-span-2">
        <summary class="admin-ui-page-title" data-i18n="tabExtScheduler">${ServerI18n.t("tabExtScheduler")}</summary>
        <div class="admin-scheduler-page hud-page-stack">
        <div class="admin-ui-page-head">
          <p class="admin-ui-page-note">
            ${ServerI18n.t("schPageNote")}
          </p>
        </div>

        <!-- v4 P1-4 view toggle (2026-05-19) \u2014 24H TIMELINE / 7-DAY CALENDAR.
             Visualizes active jobs against time so conflicts and load
             spread are obvious at a glance. Falls back to job list below. -->
        <div class="admin-ui-toolbar admin-sch-toolbar">
          <div class="admin-ui-chip-group admin-sch-view-toggle" role="tablist">
            <button type="button" class="admin-ui-chip admin-sch-view-btn is-active" data-sch-view="timeline" role="tab" aria-selected="true">${ServerI18n.t("schTimeline24h")}</button>
            <button type="button" class="admin-ui-chip admin-sch-view-btn" data-sch-view="calendar" role="tab" aria-selected="false">${ServerI18n.t("schCalendar7d")}</button>
          </div>
          <span class="admin-ui-spacer"></span>
          <span class="admin-ui-summary admin-sch-meta" data-sch-meta>\u2014</span>
        </div>

        <!-- 24H TIMELINE view (rendered by renderTimeline()) -->
        <div class="admin-sch-timeline" data-sch-timeline></div>

        <!-- 7-DAY CALENDAR view (hidden until view toggles) -->
        <div class="admin-sch-calendar" data-sch-calendar hidden></div>

        <!-- Create job form -->
        <div class="admin-ui-card">
          <div class="admin-ui-monolabel" style="margin-bottom:10px">+ ${ServerI18n.t("schAddLabel")}</div>
          <div class="admin-scheduler-form-stack">
            <div>
              <div class="admin-ui-monolabel" style="margin-bottom:6px">${ServerI18n.t("schMessages")}</div>
              <div id="schedulerMessages" class="admin-scheduler-message-stack"></div>
              <button type="button" id="schedulerAddMsg" class="admin-ui-action admin-sch-add-msg">+ ${y(ServerI18n.t("addMessageBtn"))}</button>
            </div>
            <div class="admin-scheduler-config">
              <label>
                <span class="admin-ui-monolabel">${ServerI18n.t("schIntervalSec")}</span>
                <input id="schedulerInterval" type="number" value="10" min="1" max="3600" class="admin-ui-input" />
              </label>
              <label>
                <span class="admin-ui-monolabel">${ServerI18n.t("mlRepeat1")}</span>
                <input id="schedulerRepeat" type="number" value="-1" min="-1" max="10000" class="admin-ui-input" />
              </label>
              <div class="admin-scheduler-create-cell">
                <button type="button" id="schedulerCreateBtn" class="admin-ui-action is-primary admin-sch-create-btn">${y(ServerI18n.t("createBtn"))}</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Active jobs list -->
        <div class="admin-ui-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-ui-monolabel">${ServerI18n.t("schJobsRunning")}</span>
            <span class="admin-ui-monolabel" style="margin-left:auto" id="schedulerJobsCount">\u2014</span>
          </div>
          <div id="schedulerJobsList" class="admin-scheduler-jobs">
            ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):y(ServerI18n.t("loadingJobs"))}
          </div>
        </div>
        </div>
      </details>
    `);let d=document.querySelectorAll("[data-sch-view]");d.forEach(a=>{a.addEventListener("click",()=>{let i=a.dataset.schView;d.forEach(k=>{k.classList.toggle("is-active",k===a),k.setAttribute("aria-selected",k===a?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),v=document.querySelector("[data-sch-calendar]");u&&(u.hidden=i!=="timeline"),v&&(v.hidden=i!=="calendar")})}),D("","#ffffff",48);let s=document.getElementById("schedulerMessages");s&&s.addEventListener("click",function(a){let i=a.target.closest(".scheduler-remove-msg");i&&B(i)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){D("","#ffffff",48)});let c=document.getElementById("schedulerCreateBtn");c&&c.addEventListener("click",w);let g=document.getElementById("schedulerJobsList");g&&g.addEventListener("click",function(a){let i=a.target.closest(".scheduler-job-toggle");if(i){l(i.dataset.jobId,i.dataset.action);return}let u=a.target.closest(".scheduler-job-cancel");u&&o(u.dataset.jobId)}),f&&(clearInterval(f),f=null),C||(C=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(T)},intervalMs:h,tick:p}),window.addEventListener("beforeunload",function(){C&&(C(),C=null)}))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(T)&&!n){n=!0;try{e()}finally{n=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var Wt=he(()=>{(function(){"use strict";let y="admin-security-v2-page";var T=window.AdminUtils.escapeHtml;let h=null,f=!1,C=!1,j=0;function F(){let a=i=>ServerI18n.t(i);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${a("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${a("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${a("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2PwRowLabel")}
              <span class="sub">${a("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${a("security2SubmitChangePassword")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall" data-sec-disclosure="sec2-pw-form" hidden>
            <form id="sec2-pw-form" class="admin-security-form" autocomplete="off">
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlCurrent")}</span>
                <input id="sec2-pw-current" type="password" required autocomplete="current-password" class="admin-ui-input" />
              </label>
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlNew8")}</span>
                <input id="sec2-pw-new" type="password" required minlength="8" autocomplete="new-password" class="admin-ui-input" />
                <div class="admin-security-strength">
                  <div class="admin-security-strength-bar"><span id="sec2-pw-meter" style="width:0%"></span></div>
                  <span id="sec2-pw-label" class="admin-ui-monolabel">\u2014</span>
                </div>
              </label>
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlConfirm")}</span>
                <input id="sec2-pw-confirm" type="password" required autocomplete="new-password" class="admin-ui-input" />
              </label>
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${a("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${a("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${a("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${a("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${a("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${a("security2CardWsTokenTitle")}" placeholder="${a("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${a("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${a("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${a("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${a("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${a("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${a("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${a("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${a("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${a("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${a("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${a("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${a("security2WsAuthMigrationPrepare")}</li>
            <li>${a("security2WsAuthMigrationDesktop")}</li>
            <li>${a("security2WsAuthMigrationEnable")}</li>
            <li>${a("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${a("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${a("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${a("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${a("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${a("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${a("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2CorsCredentialsToggleLabel")}
              <span class="sub" id="sec2-cors-credentials-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-cors-cred-dot" class="admin-ui-dot is-lime"></span>
              <input id="sec2-cors-credentials" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">Methods<span class="sub" id="sec2-cors-methods-line">\u2014</span></span>
            <span class="val">
              <input id="sec2-cors-methods" type="text" class="admin-ui-input" spellcheck="false" placeholder="GET, POST, DELETE, PATCH, OPTIONS" />
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${a("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2StatusLabel")}
              <span class="sub">${a("security2TlsRecommendationNote")}</span>
            </span>
            <span class="val">
              <span class="admin-ui-dot" id="sec2-tls-dot"></span>
              <span id="sec2-tls-status">\u2014</span>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">HSTS Header</span>
            <span class="val" id="sec2-hsts-status">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-danger-label">${a("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2RevokeApiTokensTitle")}
              <span class="sub">${a("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${a("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2RevokeFireTokenTitle")}
              <span class="sub">${a("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${a("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("security2ResetWsTokenTitle")}
              <span class="sub">${a("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${a("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function $(a){if(!a)return 0;let i=0;a.length>=8&&i++,a.length>=12&&i++;let u=(/[a-z]/.test(a)?1:0)+(/[A-Z]/.test(a)?1:0)+(/\d/.test(a)?1:0)+(/[^\w]/.test(a)?1:0);return u>=2&&i++,u>=3&&i++,Math.min(4,i)}function m(a){let i=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!i||!u)return;let v=$(a),k=[0,25,50,75,100],I=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];i.style.width=k[v]+"%",i.className=I[v],u.textContent=_[v]}async function N(a){a.preventDefault();let i=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,v=document.getElementById("sec2-pw-confirm").value;if(!i||!u||!v){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==v){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let k=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:i,new_password:u,confirm_password:v})}),I=await k.json().catch(()=>({}));k.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),I.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(I.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(k){console.error("Password change error:",k),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let a=++j,i=document.getElementById("sec2-wsa-status");C=!0,B(!0),i.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let v=await u.json();if(a!==j)return!1;h={require_token:!!v.require_token,token:v.token||""},document.getElementById("sec2-wsa-toggle").checked=!!v.require_token,document.getElementById("sec2-wsa-token").value=v.token||"",i.textContent=v.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(v.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,L();let k=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=k?new Date(parseInt(k,10)).toLocaleString():"\u2014",!0}catch{return a!==j||(h=null,B(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{a===j&&(C=!1,B(f||!h),f||L())}}function B(a){["toggle","token","save","rotate","copy","reveal"].forEach(i=>{document.getElementById("sec2-wsa-"+i).disabled=a}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",a)}function w(){return f||C||!h?!1:(f=!0,++j,B(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,B(C||!h),h&&!C){let a=document.getElementById("sec2-wsa-status");a.textContent=ServerI18n.t(h.require_token?"security2StatusEnabled":"security2StatusDisabled"),a.className="admin-ui-chip admin-sec-status-chip "+(h.require_token?"is-active":""),L()}}function L(){if(f||C||!h)return;document.getElementById("sec2-wsa-disabled-warning").hidden=h.require_token;let a=document.getElementById("sec2-wsa-toggle").checked!==h.require_token||document.getElementById("sec2-wsa-token").value.trim()!==h.token;document.getElementById("sec2-wsa-draft-hint").hidden=!a}function b(a){return String(a||"").split(/\n+/).map(i=>i.trim()).filter(Boolean)}function x(a){return String(a||"").split(",").map(i=>i.trim().toUpperCase()).filter(Boolean)}function q(a,i){let u=document.getElementById(a);u&&(u.textContent=i==null||i===""?"\u2014":String(i))}async function A(){try{let a=await fetch("/admin/security/settings",{credentials:"same-origin"}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error(i.error||a.status);let u=i.ip_allowlist||{},v=i.cors||{},k=i.tls||{},I=!!u.enabled,_=Array.isArray(u.entries)?u.entries:[],M=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),K=document.getElementById("sec2-ip-toggle"),E=document.getElementById("sec2-ip-entries");M&&(M.classList.toggle("is-lime",I),M.classList.toggle("is-amber",!I)),R&&(R.textContent=I?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(I?"is-active":"is-warn")),K&&(K.checked=I),E&&(E.value=_.join(`
`)),q("sec2-ip-current",u.current_ip||"\u2014"),q("sec2-ip-status-line",I?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let O=Array.isArray(v.origins)?v.origins:["*"],U=Array.isArray(v.methods)?v.methods:[],J=document.getElementById("sec2-cors-origins"),te=document.getElementById("sec2-cors-credentials"),Z=document.getElementById("sec2-cors-methods"),G=document.getElementById("sec2-cors-cred-dot");J&&(J.value=O.join(`
`)),te&&(te.checked=!!v.supports_credentials),Z&&(Z.value=U.join(", ")),G&&(G.classList.toggle("is-lime",!v.supports_credentials),G.classList.toggle("is-amber",!!v.supports_credentials)),q("sec2-cors-origins-line",O.join(", ")),q("sec2-cors-credentials-line",v.supports_credentials?"true":"false"),q("sec2-cors-methods-line",U.join(", "));let Q=k.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:k.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");q("sec2-hsts-status",Q)}catch(a){console.error("Security settings load error:",a);let i=document.getElementById("sec2-ip-status-chip");i&&(i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function S(a){let i={};if(a==="ip")i.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(a==="cors"){let u=b(document.getElementById("sec2-cors-origins")?.value||"");i.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:x(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),v=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await A()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function p(){if(f||C||!h)return;let a=document.getElementById("sec2-wsa-toggle").checked,i=document.getElementById("sec2-wsa-token").value.trim();if(a&&!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(w())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:a,token:i})}),v=await u.json().catch(()=>({}));u.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function l(){if(!(f||C||!h||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&w())try{let i=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await i.json().catch(()=>({}));if(i.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function o(){let a=document.getElementById("sec2-wsa-token").value;if(!a){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(a).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function e(){let a=document.getElementById("sec2-wsa-token");a.type=a.type==="password"?"text":"password";let i=a.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(i)),u.textContent=ServerI18n.t(i?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function r(a){if(a==="reset-ws"&&(f||C||!h))return;let i={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:v=>ServerI18n.t("security2ToastApiTokensRevoked",{n:v.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[a];if(!(!i||!await window.HudConfirm?.open({icon:"\u26A0",title:i.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:i.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:i.severity||"warn",body:i.confirm,confirmLabel:i.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(a==="reset-ws"&&!w()))try{let v=await window.csrfFetch(i.url,{method:"POST"}),k=await v.json().catch(()=>({}));if(!v.ok){window.showToast&&showToast(k.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(a==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(i.ok(k),!0)}catch(v){console.error("Security danger action error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{a==="reset-ws"&&P()}}function n(){let a=document.getElementById("sec2-session-self-line");if(a){let v=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),k=navigator.platform||navigator.userAgentData?.platform||"",I=v?v[0].split("/")[0]:"Browser";a.textContent=ServerI18n.t("security2SessionSelfLine",{browser:I,platform:k})}let i=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(i&&u){let v=location.protocol==="https:";i.classList.add(v?"is-lime":"is-crimson"),u.textContent=v?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function d(){let a=document.getElementById("sec2-pw-form");a&&a.addEventListener("submit",N);let i=document.getElementById("sec2-pw-new");i&&i.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",p),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",e),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",L),document.getElementById("sec2-wsa-token")?.addEventListener("input",L),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>S("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>S("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let v=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);v&&(v.hidden=!v.hidden,u.setAttribute("aria-expanded",v.hidden?"false":"true"),v.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>r(u.dataset.secDanger)))}),n(),D(),A()}function s(){}function t(){let a=document.querySelector(".admin-dash-grid"),i=document.getElementById(y);if(!a||!i)return;let u=a.dataset.activeRoute||"live",v=a.dataset.activeLeaf||u;i.style.display=u==="system"&&v==="security"?"":"none"}function c(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",F()),d(),t())}function g(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=null;function i(){let v=document.querySelector(".admin-dash-grid");!v||a||(a=new MutationObserver(t),a.observe(v,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?c():void 0,i(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{c(),i(),t()}),i(),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g()})()});var Gt=he(()=>{(function(){"use strict";let y="admin-backup-v2-page";var T=window.AdminUtils.escapeHtml;function h(){let n=d=>ServerI18n.t(d);return`
      <div id="${y}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${n("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${n("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${n("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${n("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${n("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${n("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecSettingsSnap")}
              <span class="sub">${n("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${n("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${n("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${n("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${n("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${n("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecRestoreSettings")}
              <span class="sub">${n("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${n("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${n("backupApplyDisabledTitle")}">${n("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecRestoreFull")}
              <span class="sub">${n("backupFullPackRestoreNote")}</span>
              <span class="sub">${n("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${n("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${n("backupApplyDisabledTitle")}">${n("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecRestoreAssets")}
              <span class="sub">${n("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${n("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${n("backupApplyDisabledTitle")}">${n("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${n("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecClearHistory")}
              <span class="sub">${n("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${n("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${n("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("backupSecFactoryReset")}
              <span class="sub">${n("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${n("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function f(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)throw new Error(n.status);let d=await n.json(),s=["password","token","secret","hash"],t={};Object.keys(d||{}).forEach(u=>{s.some(v=>u.toLowerCase().includes(v))||(t[u]=d[u])});let c=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),g=URL.createObjectURL(c),a=new Date().toISOString().replace(/[:.]/g,"-"),i=document.createElement("a");i.href=g,i.download="danmu-settings-"+a+".json",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(g),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(n){console.error("Settings snapshot error:",n),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let C=null;function j(){C=null;let n=document.getElementById("bk2-settings-apply");n&&(n.disabled=!0,n.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let n=document.getElementById("bk2-settings-upload"),d=document.getElementById("bk2-settings-diff"),s=document.getElementById("bk2-settings-apply"),t=n&&n.files&&n.files[0];if(!t){j(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let c=await t.text(),g=JSON.parse(c),a=g.settings||g;if(!a||typeof a!="object"||Array.isArray(a))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let i=await fetch("/get_settings",{credentials:"same-origin"}),u=i.ok?await i.json():{},v=[];new Set([...Object.keys(u),...Object.keys(a)]).forEach(I=>{let _=JSON.stringify(u[I]),M=JSON.stringify(a[I]);_!==M&&(_===void 0?v.push("+ "+I+": "+M):M===void 0?v.push("- "+I+": "+_):v.push("~ "+I+": "+_+" \u2192 "+M))}),d.textContent=v.length?v.join(`
`):ServerI18n.t("backupNoDiff"),d.hidden=!1,C=a,s&&(s.disabled=!1,s.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:v.length}),!0)}catch(c){console.error("Dry-run error:",c),j(),d.textContent=ServerI18n.t("backupParseFailedDetail",{msg:c&&c.message?c.message:String(c)}),d.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function $(){let n=document.getElementById("bk2-settings-diff"),d=document.getElementById("bk2-settings-apply");if(!C){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:C})}),c=await t.json().catch(()=>({}));if(!t.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(c.details||c,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(c.applied||[]).length+" settings"),C=null,d&&(d.disabled=!0,d.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let n=document.getElementById("bk2-factory-confirm"),d=document.getElementById("bk2-factory-reset");!n||!d||(n.addEventListener("input",()=>{let s=n.value.trim()==="reset";d.classList.toggle("is-ready",s),d.disabled=!s}),d.addEventListener("click",D))}async function D(){let n=document.getElementById("bk2-factory-confirm"),d=document.getElementById("bk2-factory-reset");if((n?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{d&&(d.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),c=await t.json().catch(()=>({}));if(!t.ok||!c.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),d&&(d.disabled=!1);return}n&&(n.value=""),d&&(d.classList.remove("is-ready"),d.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),L()}catch{d&&(d.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function B(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",$),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",A),document.getElementById("bk2-pack-apply")?.addEventListener("click",S),document.getElementById("bk2-assets-export")?.addEventListener("click",q),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",l),N(),L(),x()}let w=null,P=null;async function L(){let n=document.getElementById("bk2-pack-summary");if(n)try{let d=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!d.ok){n.textContent=ServerI18n.t("backupPreviewUnavailable");return}let s=await d.json(),t=(s.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:t})}catch{n.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function x(){let n=document.getElementById("bk2-assets-summary");if(n)try{let d=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!d.ok){n.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let s=await d.json(),t=(s.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:t})}catch{n.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function q(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function A(){let d=document.getElementById("bk2-pack-upload")?.files?.[0];if(!d){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(d.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let s=new FormData;s.append("file",d);let t=document.getElementById("bk2-pack-diff"),c=document.getElementById("bk2-pack-apply");try{let g=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:s}),a=await g.json().catch(()=>({}));if(!g.ok||!a.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),c&&(c.disabled=!0),w=null;return}if(t){t.hidden=!1;let i=[],u=a.manifest||{};i.push("manifest version: "+(u.version||"?")),i.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(a.members?.length||0)+" files:"),(a.members||[]).forEach(v=>{i.push("  "+v.label+"/"+v.path.split("/").slice(1).join("/")+" ("+(v.size||0)+" B)")}),a.skipped?.length&&(i.push(""),i.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(v=>i.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=i.join(`
`)}w=d,c&&(c.disabled=!1,c.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:g.message||""}),!1)}}async function S(){if(!w){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let d=new FormData;d.append("file",w);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:d})).json().catch(()=>({})),c=document.getElementById("bk2-pack-diff");if(c){c.hidden=!1;let g=[];t.ok?(g.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),g.push(""),g.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&g.push("Skipped "+t.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),g.push(JSON.stringify(t.errors||t,null,2))),c.textContent=g.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),w=null;let g=document.getElementById("bk2-pack-apply");g&&(g.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:s.message||""}),!1)}}async function p(){let d=document.getElementById("bk2-assets-upload")?.files?.[0];if(!d){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(d.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let s=new FormData;s.append("file",d);let t=document.getElementById("bk2-assets-diff"),c=document.getElementById("bk2-assets-apply");try{let g=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:s}),a=await g.json().catch(()=>({}));if(!g.ok||!a.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(a.errors||a,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),c&&(c.disabled=!0),P=null;return}if(t){t.hidden=!1;let i=[],u=a.manifest||{};i.push("manifest version: "+(u.version||"?")),i.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(a.members?.length||0)+" asset files:"),(a.members||[]).forEach(v=>{i.push("  "+v.path+" ("+(v.size||0)+" B)")}),a.skipped?.length&&(i.push(""),i.push("Skipped "+a.skipped.length+" entries:"),a.skipped.forEach(v=>i.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=i.join(`
`)}P=d,c&&(c.disabled=!1,c.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:a.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:g.message||""}),!1)}}async function l(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let d=new FormData;d.append("file",P);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:d})).json().catch(()=>({})),c=document.getElementById("bk2-assets-diff");if(c){c.hidden=!1;let g=[];t.ok?(g.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),g.push(""),g.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&g.push("Skipped "+t.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),g.push(JSON.stringify(t.errors||t,null,2))),c.textContent=g.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),P=null;let g=document.getElementById("bk2-assets-apply");g&&(g.disabled=!0),x()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:s.message||""}),!1)}}function o(){let n=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!n||!d)return;let s=n.dataset.activeLeaf||"dashboard";d.style.display=s==="backup"?"":"none"}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",h()),B(),o())}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&e(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{e(),o()}),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var zt=he(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",T="/admin/broadcast/status",h="/admin/broadcast/toggle",f={mode:"live"},C=null,j=0,F=!1;async function $(){try{let s=await fetch(T,{credentials:"same-origin"});if(!s.ok)return!1;let t=await s.json();if(t&&(t.mode==="live"||t.mode==="standby"))return C=t.session||null,f=t,!0}catch{}return!1}async function m(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});s.ok&&(j=(await s.json()).overlay_count||0,F=!0)}catch{}}async function N(){await Promise.all([$(),m()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:f.mode==="live",count:F?j:void 0}}))}async function B(s){try{let t=await window.csrfFetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:s})});if(!t.ok){let c=await t.json().catch(()=>({}));throw new Error(c&&c.error?c.error:`HTTP ${t.status}`)}return f=await t.json(),D(),!0}catch(t){return console.warn("[admin-broadcast] toggle failed:",t),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:t&&t.message||""}),!1),!1}}function w(s,t){return ServerI18n.t(s?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:t})}function P(s){return s?"broadcastBigPause":"broadcastBigResume"}async function L(s){let t=await B(s?"live":"standby");return t&&window.showToast&&window.showToast(ServerI18n.t(s?"broadcastToastResumed":"broadcastToastPaused"),!0),p(),t}async function b(){return await $(),m().then(D),L(f.mode!=="live")}async function x(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let t=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});t.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:t.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:L,toggleDisplay:b,clearScreen:x,statusText:w,toggleKey:P};function q(){let s=t=>ServerI18n.t(t);return`
      <div id="${y}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${P(!1)}">${s(P(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${s("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${s("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let A=0,S=0;function p(){let s=document.getElementById(y);if(!s)return;let t=f.mode==="live",c=t?"live":"standby",g=(_,M)=>{_&&_.textContent!==M&&(_.textContent=M)};s.dataset.bcState=c;let a=s.querySelector("[data-bc-statedot]");a&&(a.dataset.state=c);let i=s.querySelector("[data-bc-statelabel]");i&&(g(i,w(t,j)),i.dataset.state=c);let u=s.querySelector("[data-bc-big]");u&&(u.dataset.i18n=P(t),g(u,ServerI18n.t(u.dataset.i18n)));let v=C||{},k=!!(v.id||v.name),I=s.querySelector("[data-bc-session-ctx]");I&&(I.hidden=!k),k&&g(s.querySelector("[data-bc-session-id]"),String(v.name||v.id))}function l(){let s=document.getElementById(y);s&&(s.querySelector("[data-bc-big]")?.addEventListener("click",()=>L(f.mode!=="live")),s.querySelector("[data-bc-clear]")?.addEventListener("click",x))}function o(){A||(N().then(p),p(),A=setInterval(()=>{N().then(p)},5e3),S=setInterval(p,1e3))}function e(){A&&(clearInterval(A),A=0),S&&(clearInterval(S),S=0)}function r(){let s=document.querySelector(".admin-dash-grid"),t=document.getElementById(y);if(!s||!t)return;let c=s.dataset.activeLeaf||"dashboard",g=c==="overlay"||c==="broadcast";t.style.display=g?"":"none",g?o():e()}function n(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("afterbegin",q()),l(),r())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&n(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{n(),r()}),n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Vt=he(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],C=["block","replace","allow","review"],j={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function F(E){var O=y();return O[E]!==void 0?O[E]:!1}function $(E,O){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t(E);if(U&&U!==E)return U}return O||E}let m={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},N={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function D(){return`
      <div id="sec-filters" class="hud-page-stack lg:col-span-2">
        <!-- v4 P2-1 chrome (added 2026-05-19) \u2014 was missing kicker/title.
             Page used to render straight into hud-stats-strip without a
             section header. -->
        <!-- \u9801\u9996\u7531\u540C\u5206\u9801\u7684 sec-blacklist \u63D0\u4F9B\uFF0C\u9019\u88E1\u4E0D\u518D\u91CD\u8907\u4E00\u4EFD -->

        <!-- v8\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R3\uFF09\uFF1A\u56DB\u683C KPI \u689D\u64A4\u6389\u3002\u9019\u500B section
             \u73FE\u5728\u8207 sec-blacklist \u540C\u5728\u300C\u5C01\u9396\u5B57\u300D\u5206\u9801\u88E1\uFF0C\u5169\u5F35 KPI \u689D\u6703\u524D\u5F8C
             \u76F8\u758A\uFF1B\u800C\u7A3F\u4E0A\u9019\u9801\u53EA\u6709\u300C\u8F38\u5165 \u2192 \u547D\u4E2D\u6642\u600E\u9EBC\u8655\u7406 \u2192 \u6E05\u55AE\u300D\u4E09\u4EF6\u4E8B\u3002
             data-mod-stat \u5951\u7D04\u4EE5\u96B1\u85CF\u7BC0\u9EDE\u4FDD\u7559\uFF0Cadmin-moderation.js \u7167\u5E38\u5BEB\u5165\u3002 -->
        <span hidden data-mod-stat="rules">\u2014</span><span hidden data-mod-stat="masked">\u2014</span>
        <span hidden data-mod-stat="blocked">\u2014</span><span hidden data-mod-stat="blacklist">\u2014</span>

        <!-- 2026-05-18 design v4 P2-1: Quick Filters bar \u2014 one-shot
             preset toggles built on top of /admin/filters backend.
             Each toggle creates / removes a regex rule. The existing
             custom rules library below is the same regex store. -->
        <div class="admin-flt-v4__explain">
          <span class="admin-flt-v4__amber-kicker">\u26A1 ${ServerI18n.t("fltTempRules")}</span>
          ${ServerI18n.t("fltTempRulesDesc")}
          <span class="admin-flt-v4__spacer"></span>
          <span class="admin-flt-v4__dim-kicker">${ServerI18n.t("fltVsBlacklist")}</span>
        </div>
        <div class="admin-flt-v4__card">
          <div class="admin-flt-v4__head">
            <span class="admin-flt-v4__kicker">${ServerI18n.t("fltQuickKickerTail")}</span>
          </div>
          <div class="admin-flt-v4__quick" data-flt-quick>
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"review"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(E=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${E.id}" data-flt-pattern="${E.pattern}" data-flt-action="${E.action}" data-flt-label="${E.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${E.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${E.id}">\u2014</span>
              </button>`).join("")}
          </div>
        </div>

        <div class="hud-page-grid-2" style="grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr)">
          <!-- LEFT: Rules library -->
          <div class="hud-inspector" style="min-height:auto">
            <div class="hud-inspector-head">
              <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${ServerI18n.t("fltRuleLib")}</span>
              <span class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltOrderMatters")}</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em">${ServerI18n.t("fltActionsHead")}</span>
            </div>
            <div class="hud-filter-row" id="filterTypeChips" style="padding:10px 14px;border-bottom:1px solid var(--hud-line-strong)">
              <span class="hud-filter-chip is-active" data-filter-scope="all">${ServerI18n.t("fltChipAll")} <span data-filter-count="all">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="keyword">${ServerI18n.t("ulWord")} <span data-filter-count="keyword">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="regex">${ServerI18n.t("ulRegex")} <span data-filter-count="regex">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="replace">${ServerI18n.t("ulReplace")} <span data-filter-count="replace">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="rate_limit">${ServerI18n.t("ulRate")} <span data-filter-count="rate_limit">0</span></span>
            </div>
            <div class="hud-table-head admin-flt-v4__grid admin-flt-v4__head-row" style="border-bottom:1px solid var(--hud-line-strong);padding:8px 14px">
              <span>${ServerI18n.t("ulPattern")}</span>
              <span>${ServerI18n.t("ulType")}</span>
              <span>${ServerI18n.t("ulAction")}</span>
              <span>P</span>
              <span>${ServerI18n.t("ulStatus")}</span>
              <span style="text-align:right"></span>
            </div>
            <div id="filterRulesList" class="hud-rules-body"></div>

            <!-- Live moderation log -->
            <div style="border-top:1px solid var(--hud-line-strong)">
              <div class="hud-inspector-head" style="border-bottom:1px solid var(--hud-line-strong)">
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${ServerI18n.t("fltLiveLog")}</span>
                <span style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.1em">${ServerI18n.t("fltAutoScroll")}</span>
              </div>
              <div class="hud-console-body" id="filterLiveLog" style="max-height:200px;padding:10px 14px;font-family:var(--font-mono);font-size:11px;line-height:1.7">
                <div style="color:var(--color-text-muted);text-align:center;padding:10px">' + ServerI18n.t("fltNoEvents") + '</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Add + Test -->
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${$("addFilterRule","Add Rule")}</span>

              </div>
              <div id="filterRuleForm" style="padding:14px;display:flex;flex-direction:column;gap:10px">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                  <div>
                    <label for="filterType" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("mlType")}</label>
                    <select id="filterType" class="admin-ui-select">
                      <option value="keyword">keyword</option>
                      <option value="regex">regex</option>
                      <option value="replace">replace</option>
                      <option value="rate_limit">rate_limit</option>
                    </select>
                  </div>
                  <div>
                    <label for="filterAction" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("mlAction")}</label>
                    <select id="filterAction" class="admin-ui-select">
                      <option value="block">${ServerI18n.t("fltActBlock")}</option>
                      <option value="replace">${ServerI18n.t("fltActReplace")}</option>
                      <option value="allow">${ServerI18n.t("fltActAllow")}</option>
                      <!-- 2026-10-29\uFF1Areview \u662F\u5F8C\u7AEF\u7B2C\u56DB\u7A2E\u52D5\u4F5C\uFF08\u9001\u9032\u5BE9\u6838\u4F47\u5217\uFF09\uFF0C
                           \u4F46\u4E0B\u62C9\u4E00\u76F4\u6C92\u6709\u5B83 \u2014\u2014 \u65BC\u662F\u4F47\u5217\u53EA\u80FD\u9760\u624B\u6539 JSON \u624D\u6703
                           \u6709\u6771\u897F\uFF0C\u800C\u5B83\u7684\u9810\u8A2D\u5206\u9801\u6C38\u9060\u662F All Clear\u3002 -->
                      <option value="review">${ServerI18n.t("fltActReview")}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="filterPattern" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("mlPattern")}</label>
                  <input type="text" id="filterPattern" placeholder="${$("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${$("filterReplacementPlaceholder","Replacement text...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterRateLimitRow" class="hidden" style="display:none;grid-template-columns:1fr 1fr;gap:8px">
                  <div>
                    <label for="filterMaxCount" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColMaxCount")}</label>
                    <input type="number" id="filterMaxCount" value="5" min="1" max="1000"
                      class="admin-ui-input" />
                  </div>
                  <div>
                    <label for="filterWindowSec" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColWindowSec")}</label>
                    <input type="number" id="filterWindowSec" value="60" min="1" max="86400"
                      class="admin-ui-input" />
                  </div>
                </div>
                <div>
                  <label for="filterPriority" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("uiColPriority")} \xB7 ${ServerI18n.t("fltPriorityTail")}</label>
                  <input type="number" id="filterPriority" value="0" min="-9999" max="9999"
                    class="admin-ui-input" />
                </div>
                <button id="filterAddBtn" type="button" class="admin-ui-action is-primary admin-filter-action" style="margin-top:4px">
                  + ${$("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${$("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${$("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${$("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let B="all";function w(E){let O=m[E.type]||"is-default",U=N[E.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},te=ServerI18n.t(J[E.type]||"ulWord"),Z=E.pattern;if(E.type==="replace"&&E.replacement!==void 0&&(Z=`${E.pattern}  \u2192  ${E.replacement}`),E.type==="rate_limit"){let W=E.max_count||5,z=E.window_sec||60;Z=`${E.pattern}  \xB7  ${W}/${z}s`}let G=E.enabled?"":"opacity:0.45;",Q=j[E.action]?ServerI18n.t(j[E.action]):E.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${G}" data-rule-id="${h(E.id)}" data-rule-type="${h(E.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${h(Z)}</span>
        <span class="hud-pill ${O}">${te}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content">${h(Q)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${h(String(E.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${h(E.enabled?$("enabled","Enabled"):$("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${h(E.id)}" ${E.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${E.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${h(E.id)}" title="${$("deleteRule","Delete")}" aria-label="${$("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function P(E){let O={all:E.length,keyword:0,regex:0,replace:0,rate_limit:0};E.forEach(J=>{O[J.type]!=null&&O[J.type]++}),Object.keys(O).forEach(J=>{let te=document.querySelector(`[data-filter-count="${J}"]`);te&&(te.textContent=O[J])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=O.all)}async function L(){let E=document.querySelector('[data-mod-stat="blacklist"]');if(E)try{let O=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!O.ok)return;let U=await O.json(),J=Array.isArray(U)?U:U.keywords||[];E.textContent=String(J.length)}catch{}}async function b(){try{let E=await csrfFetch("/admin/filters/list");if(!E.ok)throw new Error("HTTP "+E.status);return(await E.json()).rules||[]}catch(E){return console.error("Failed to fetch filter rules:",E),showToast($("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function x(){let E=document.getElementById("filterRulesList");if(!E)return;E.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${$("loading","Loading...")}</div>`;let O=await b();if(P(O),L(),O.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),E.innerHTML="",E.appendChild(J)}else E.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${$("noFilterRules","No filter rules configured.")}</div>`;return}let U=B==="all"?O:O.filter(J=>J.type===B);E.innerHTML=U.map(w).join("")}async function q(){let E=document.getElementById("filterType"),O=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),te=document.getElementById("filterPriority"),Z=document.getElementById("filterMaxCount"),G=document.getElementById("filterWindowSec"),Q=E.value,W=(U.value||"").trim();if(!W){showToast($("patternRequired","Pattern is required"),!1),U.focus();return}let z={type:Q,pattern:W,action:O.value,priority:parseInt(te.value,10)||0};Q==="replace"&&(z.replacement=J.value||""),Q==="rate_limit"&&(z.max_count=parseInt(Z.value,10)||5,z.window_sec=parseFloat(G.value)||60);try{let ee=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)}),ae=await ee.json();if(!ee.ok){showToast(ae.error||$("addRuleFailed","Failed to add rule"),!1);return}showToast($("ruleAdded","Rule added"),!0),U.value="",J.value="",await x()}catch(ee){console.error("Add filter rule error:",ee),showToast($("addRuleFailed","Failed to add rule"),!1)}}async function A(E){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:$("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:E})}),J=await U.json();if(!U.ok){showToast(J.error||$("deleteRuleFailed","Failed to delete rule"),!1);return}showToast($("ruleDeleted","Rule deleted"),!0),await x()}catch(U){console.error("Delete filter rule error:",U),showToast($("deleteRuleFailed","Failed to delete rule"),!1)}}async function S(E,O){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:E,updates:{enabled:O}})}),J=await U.json();if(!U.ok){showToast(J.error||$("updateRuleFailed","Failed to update rule"),!1),await x();return}}catch(U){console.error("Toggle filter rule error:",U),showToast($("updateRuleFailed","Failed to update rule"),!1),await x()}}async function p(){let E=document.getElementById("filterTestText"),O=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),J=document.getElementById("filterAction"),te=document.getElementById("filterPattern"),Z=document.getElementById("filterReplacement"),G=document.getElementById("filterMaxCount"),Q=document.getElementById("filterWindowSec"),W=(E.value||"").trim();if(!W){showToast($("sampleTextRequired","Enter sample text to test"),!1),E.focus();return}let z=(te.value||"").trim();if(!z){showToast($("patternRequired","Pattern is required"),!1),te.focus();return}let ee=U.value,ae={type:ee,pattern:z,action:J.value};ee==="replace"&&(ae.replacement=Z.value||""),ee==="rate_limit"&&(ae.max_count=parseInt(G.value,10)||5,ae.window_sec=parseFloat(Q.value)||60),O.innerHTML=`<span style="color:var(--color-text-muted)">${$("testing","Testing...")}</span>`;try{let se=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:ae,text:W})}),de=await se.json();if(!se.ok){O.innerHTML=`<span style="color: var(--color-ink-error)">${h(de.error||"Test failed")}</span>`;return}let oe="";de.action==="block"?oe=`<span style="color: var(--color-ink-error);font-weight:600">${$("blocked","BLOCKED")}</span>`:de.action==="replace"?oe=`<span style="color: var(--color-ink-warning);font-weight:600">${$("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${h(de.text)}</span>`:de.action==="allow"?oe=`<span style="color: var(--color-ink-success);font-weight:600">${$("allowed","ALLOWED")}</span>`:de.action==="review"?oe=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:oe=`<span style="color:var(--color-text-muted)">${$("noMatch","No match (pass)")}</span>`,de.reason&&(oe+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${h(de.reason)}</span>`),O.innerHTML=oe}catch(se){console.error("Test filter rule error:",se),O.innerHTML=`<span style="color: var(--color-ink-error)">${$("testError","Test error")}</span>`}}function l(){let E=document.getElementById("filterType"),O=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!E)return;let J=E.value;O&&(O.style.display=J==="replace"?"":"none"),U&&(U.style.display=J==="rate_limit"?"grid":"none")}function o(){let E=document.getElementById("filterTypeChips");E&&E.addEventListener("click",O=>{let U=O.target.closest(".hud-filter-chip");U&&(B=U.dataset.filterScope||"all",E.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===B)}),x())})}let e=6,r=[],n=!1,d=0,s=0;function t(E){let O=new Date(E*1e3),U=J=>String(J).padStart(2,"0");return`${U(O.getHours())}:${U(O.getMinutes())}:${U(O.getSeconds())}`}function c(E){let O=(E||"").toUpperCase();return O==="BLOCK"?"var(--hud-crimson)":O==="MASK"||O==="REPLACE"?"var(--hud-amber)":O==="REVIEW"?"var(--color-primary)":O==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function g(){let E=document.getElementById("filterLiveLog");if(E){if(r.length===0){E.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}E.innerHTML=r.map(O=>{let U=t(O.ts),J=(O.action||"").toUpperCase(),te=c(J),Z=(O.text_excerpt||"").replace(/[<>&"]/g,z=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[z]),G=(O.pattern||"").replace(/[<>&"]/g,z=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[z]),Q=(O.source||"").slice(0,16),W=Q?`\xB7 ${Q}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${te}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${Z}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${G} ${W}</span></span>
      </div>`}).join("")}}async function a(){try{let E=await fetch(`/admin/filters/events?since=${s}`,{credentials:"same-origin"});if(!E.ok)return;let O=await E.json();if(O.counts_24h){let U=(J,te)=>{let Z=document.querySelector(`[data-mod-stat="${J}"]`);Z&&(Z.textContent=te!=null?String(te):"\u2014")};U("masked",O.counts_24h.MASK||0),U("blocked",O.counts_24h.BLOCK||0)}if(!Array.isArray(O.events)||O.events.length===0)return;for(r.unshift(...O.events);r.length>e;)r.pop();s=O.latest_seq||s,document.getElementById("filterLiveLog")&&g()}catch{}}function i(){n||(n=!0,a(),d=setInterval(a,4e3))}let u=Object.create(null),v="[QUICK]";function k(E,O){return E.find(U=>(U.name||"").startsWith(v+" "+O))}async function I(){let E=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(O=>{let U=O.dataset.fltLabel,J=k(E,U),te=!!J&&J.enabled!==!1;O.classList.toggle("is-active",te),J?u[O.dataset.fltQuickId]=J.id||J.rule_id:delete u[O.dataset.fltQuickId]})}async function _(E){let O=E.dataset.fltQuickId,U=E.dataset.fltPattern,J=E.dataset.fltAction,te=E.dataset.fltLabel,Z=u[O];if(Z)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:Z})})).ok?(delete u[O],E.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:te}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let G=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${v} ${te}`,pattern:U,action:J,enabled:!0,priority:50})});if(G.ok){let Q=await G.json().catch(()=>({}));Q.rule_id&&(u[O]=Q.rule_id),E.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:te}),!0)}else{let Q=await G.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:Q.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function M(){let E=document.querySelector("[data-flt-quick]");E&&(E.addEventListener("click",O=>{let U=O.target.closest(".admin-flt-v4__qchip");U&&_(U)}),I())}function R(){let E=document.getElementById("settings-grid");if(!E)return;E.insertAdjacentHTML("beforeend",D()),o(),M();let O=document.getElementById("filterType");O&&O.addEventListener("change",l);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",q);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",p);let te=document.getElementById("filterTestText");te&&te.addEventListener("keydown",Q=>{Q.key==="Enter"&&(Q.preventDefault(),p())});let Z=document.getElementById("filterPattern");Z&&Z.addEventListener("keydown",Q=>{Q.key==="Enter"&&(Q.preventDefault(),q())});let G=document.getElementById("filterRulesList");G&&(G.addEventListener("change",Q=>{let W=Q.target.closest(".filter-toggle-cb");if(!W)return;S(W.dataset.ruleId,W.checked);let z=W.closest(".hud-rule-row"),ee=z?.querySelector(".admin-filter-toggle-dot");ee&&(ee.classList.toggle("is-on",W.checked),ee.classList.toggle("is-off",!W.checked)),z&&(z.style.opacity=W.checked?"":"0.45")}),G.addEventListener("click",Q=>{let W=Q.target.closest(".filter-delete-btn");W&&A(W.dataset.ruleId)})),x(),i(),g()}function K(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K()})()});var Jt=he(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,h=window.AdminUtils.escapeHtml,f=1e4,C=null;function j(b){var x=y();return x[b]!==void 0?x[b]:!1}function F(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${h(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${h(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${h(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${h(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function $(b){var x=ServerI18n.t("fingerprintState_"+b),q="";return b==="blocked"?q=" is-crimson":b==="flagged"?q=" is-amber":b==="active"?q=" is-cyan":q=" is-mute",'<span class="admin-fp-state'+q+'">'+h(x)+"</span>"}function m(b){if(!b)return"\u2014";try{var x=new Date(b*1e3);return x.toLocaleTimeString()}catch{return String(b)}}function N(b){var x=document.getElementById("adminFingerprintTableWrap");if(x){if(!b||b.length===0){x.innerHTML="";var q=window.AdminEmpty.render("audience");q.dataset.emptyKind="fingerprints",x.appendChild(q);return}var A='<div class="admin-fp-row admin-fp-row--head"><span>'+h(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+h(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+h(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",S=b.map(function(p){var l=p.blocked|0,o=p.hash||"",e=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+h(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+h(o)+'">fp:'+h(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+h(p.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+h(p.ua||"")+'">'+h(p.ua||"\u2014")+'</span><span class="admin-fp-num">'+(p.msgs|0)+'</span><span class="admin-fp-num">'+(p.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+$(p.state||"active")+'</span><span class="admin-fp-ts">'+h(m(p.last_seen))+"</span></div>"}).join("");x.innerHTML=A+S}}async function D(){var b=document.getElementById("adminFingerprintCount");try{var x=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!x.ok)throw new Error("HTTP "+x.status);var q=await x.json(),A=q.records||[];if(N(A),b){var S=q.count||A.length,p=q.flagged!=null?q.flagged:A.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:S,flagged:p})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+h(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function B(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var x=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(x.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var q=await x.json().catch(function(){return{}});window.showToast(q.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(A){console.error("[admin-fingerprints] reset error:",A),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function w(){P(),C=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&D()},f)}function P(){C&&(clearInterval(C),C=null)}function L(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",F());var x=document.getElementById("adminFingerprintRefreshBtn");x&&x.addEventListener("click",D);var q=document.getElementById("adminFingerprintResetBtn");q&&q.addEventListener("click",B),D(),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var q=document.getElementById("moderation-grid")||document.getElementById("settings-grid");q&&!document.getElementById("sec-fingerprints")&&L()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var x=document.getElementById("moderation-grid")||document.getElementById("settings-grid");x&&!document.getElementById("sec-fingerprints")&&L()}})})()});var Yt=he(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let T=(t,c)=>{let g=window.ServerI18n?.t?.(t);return g&&g!==t?g:c||t},h=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||h)){h=!0;try{C(t)}finally{h=!1}}}).observe(document.body,{childList:!0,subtree:!0});function C(t){let c=document.createElement("div");c.id="sec-widgets",c.className="admin-widgets-page hud-page-stack lg:col-span-2";let g=location.origin+"/overlay";c.dataset.tpl="B",c.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(T("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(T("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${y(T("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${y(T("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${y(T("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${y(T("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${y(T("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(T("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${y(T("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(T("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${y(T("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${y(g)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(T("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(T("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(c);let a=document.getElementById("widget-add"),i=c.querySelector("[data-ow-addmenu]");a.addEventListener("click",u=>{u.stopPropagation(),i.hidden=!i.hidden}),i.addEventListener("click",u=>{let v=u.target.closest("[data-ow-add]")?.dataset.owAdd;v&&(i.hidden=!0,$(v))}),document.addEventListener("click",u=>{!i.hidden&&!u.target.closest(".admin-ui-page-actions")&&(i.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",B),c.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=c.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function j(t,c="GET",g=null){let a={method:c,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(g){let u=document.querySelector('meta[name="csrf-token"]');u&&(a.headers["X-CSRF-Token"]=u.content),a.body=JSON.stringify(g)}return(await fetch("/admin/widgets/"+t,a)).json()}async function F(){try{let t=await j("list");P(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function $(t){let c={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await j("create","POST",{type:t,config:c[t]||{}}),F()}catch(g){console.error("[admin-widgets] Create failed:",g)}}async function m(t){let c=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:c,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await j("delete","POST",{id:t}),F()}catch(a){console.error("[admin-widgets] Delete failed:",a)}}async function N(t,c){try{await j("update","POST",{id:t,config:c}),F()}catch(g){console.error("[admin-widgets] Update failed:",g)}}async function D(t,c,g){try{await j("score","POST",{id:t,team_index:c,delta:g}),F()}catch(a){console.error("[admin-widgets] Score update failed:",a)}}async function B(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await j("clear","POST",{}),F()}catch(g){console.error("[admin-widgets] Clear failed:",g)}}let w=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(t){let c=document.getElementById("widgets-list");if(c){if(c.innerHTML="",o(t),t.length===0){let g=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});g.dataset.emptyKind="widgets",c.appendChild(g);return}t.forEach(g=>{c.appendChild(A(g))})}}let L={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(t){return T("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function x(t){let c=t.config||{},g="";t.type==="scoreboard"?g=(c.teams||[]).map(i=>`${i.name} ${i.score}`).join(" \xB7 "):t.type==="ticker"?(g=(c.messages||[])[0]||"",g&&(g=`\u300C${g}\u300D`)):t.type==="label"&&(g=c.text?`\u300C${c.text}\u300D`:"");let a=b(t.position);return g?`${g} \xB7 ${a}`:a}function q(t){return t==="scoreboard"?T("widgetScoreboard"):t==="ticker"?T("widgetTicker"):t==="label"?T("widgetLabel"):t}function A(t){let c=document.createElement("div");c.className="admin-widget-card",t.visible!==!1&&c.classList.add("is-on");let g=document.createElement("button");g.type="button",g.className="admin-widget-summary",g.setAttribute("aria-expanded","false"),g.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(L[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(q(t.type))+'</span><span class="admin-widget-summary-text">'+y(x(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+y(T("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',c.appendChild(g);let a=document.createElement("div");a.className="admin-widget-card-body",a.hidden=!0,g.addEventListener("click",()=>{a.hidden=!a.hidden,g.setAttribute("aria-expanded",a.hidden?"false":"true"),c.classList.toggle("is-open",!a.hidden)});let i=s(T("widgetPosition"),w,t.position,I=>N(t.id,{position:I}));a.appendChild(i),t.type==="scoreboard"?e(a,t):t.type==="ticker"?r(a,t):t.type==="label"&&n(a,t);let u=document.createElement("div");u.className="admin-widget-card-actions";let v=document.createElement("button");v.type="button",v.className="admin-ui-action admin-widget-card-action",v.textContent=t.visible?T("widgetHide"):T("widgetShow"),v.addEventListener("click",()=>N(t.id,{visible:!t.visible})),u.appendChild(v);let k=document.createElement("button");return k.type="button",k.className="admin-ui-action is-danger admin-widget-card-action",k.textContent=T("remove"),k.addEventListener("click",()=>m(t.id)),u.appendChild(k),a.appendChild(u),c.appendChild(a),c}let S={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function p(t,c){let g="top-left",a=1/0;for(let[i,[u,v]]of Object.entries(S)){let k=t-u/2,I=c-v/2,_=k*k+I*I;_<a&&(a=_,g=i)}return g}function l(t){let c=t.config||{};return t.type==="scoreboard"?(c.teams||[]).map(g=>`${g.name} ${g.score}`).join("  ")||T("widgetScoreboard"):t.type==="ticker"?(c.messages||[])[0]||T("widgetTicker"):t.type==="label"?c.text||T("widgetLabel"):t.type}function o(t){let c=document.querySelector("[data-ow-stage]");if(c){if(c.innerHTML="",!t.length){c.innerHTML='<span class="admin-ow-stage-empty">'+y(T("widgetsStageEmpty"))+"</span>";return}t.forEach(g=>{let a=document.createElement("div");a.className="admin-ow-box is-"+(g.position||"top-left"),g.visible===!1&&a.classList.add("is-off"),a.dataset.owBox=g.id,a.draggable=!0,a.textContent=l(g),a.title=q(g.type),a.addEventListener("dragend",i=>{let u=c.getBoundingClientRect();if(!u.width||!u.height)return;let v=(i.clientX-u.left)/u.width,k=(i.clientY-u.top)/u.height;if(v<0||v>1||k<0||k>1)return;let I=p(v,k);I!==g.position&&N(g.id,{position:I})}),c.appendChild(a)})}}function e(t,c){let g=c.config||{},a=d(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",g.title||"",i=>N(c.id,{title:i}));t.appendChild(a),(g.teams||[]).forEach((i,u)=>{let v=document.createElement("div");v.className="admin-widget-team";let k=document.createElement("input");k.type="color",k.value=i.color||"#38bdf8",k.className="admin-widget-team-color",k.addEventListener("change",()=>{let K=[...g.teams];K[u]={...K[u],color:k.value},N(c.id,{teams:K})}),v.appendChild(k);let I=document.createElement("input");I.type="text",I.value=i.name,I.className="admin-widget-input",I.addEventListener("change",()=>{let K=[...g.teams];K[u]={...K[u],name:I.value},N(c.id,{teams:K})}),v.appendChild(I);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=i.score,v.appendChild(_);let M=document.createElement("button");M.type="button",M.className="admin-widget-step",M.textContent="\u2212",M.addEventListener("click",()=>D(c.id,u,-1)),v.appendChild(M);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>D(c.id,u,1)),v.appendChild(R),t.appendChild(v)})}function r(t,c){let g=c.config||{},a=document.createElement("div");a.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=window.ServerI18n?.t?.("speed")||"SPEED",a.appendChild(i);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=g.speed||60,u.style.flex="1",u.addEventListener("change",()=>{N(c.id,{speed:parseInt(u.value)})}),a.appendChild(u);let v=document.createElement("span");v.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",v.textContent=u.value,u.addEventListener("input",()=>{v.textContent=u.value}),a.appendChild(v),t.appendChild(a);let k=document.createElement("div");k.className="admin-widget-row",k.style.alignItems="flex-start";let I=document.createElement("span");I.className="lbl",I.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",k.appendChild(I);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(g.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let M=_.value.split(`
`).filter(R=>R.trim());N(c.id,{messages:M})}),k.appendChild(_),t.appendChild(k)}function n(t,c){let g=c.config||{};t.appendChild(d(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",g.text||"",a=>N(c.id,{text:a}))),t.appendChild(d(window.ServerI18n?.t?.("size")||"SIZE",String(g.fontSize||24),a=>N(c.id,{fontSize:parseInt(a)||24}),"number"))}function d(t,c,g,a="text"){let i=document.createElement("div");i.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,i.appendChild(u);let v=document.createElement("input");return v.type=a,v.value=c,v.className="admin-widget-input",v.addEventListener("change",()=>g(v.value)),i.appendChild(v),i}function s(t,c,g,a){let i=document.createElement("div");i.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,i.appendChild(u);let v=document.createElement("select");return v.className="admin-widget-select",c.forEach(k=>{let I=document.createElement("option");I.value=k,I.textContent=k,k===g&&(I.selected=!0),v.appendChild(I)}),v.addEventListener("change",()=>a(v.value)),i.appendChild(v),i}})})()});var Qt=he(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","notifications","audience","overlay","about"];function T(){let E=window.ADMIN_ROUTES||{},O={};return y.forEach(U=>{let J=E[U];J&&J.title&&(O[U]={title:J.title,kicker:J.kicker||U.toUpperCase()})}),O}let h=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function C(){let E=document.querySelector('meta[name="csrf-token"]');return E&&E.content||""}function j(E,O){if(typeof window.csrfFetch=="function")return window.csrfFetch(E,O);let U=Object.assign({credentials:"same-origin"},O||{}),J=new Headers(O&&O.headers||{});return J.set("X-CSRF-Token",C()),U.headers=J,fetch(E,U)}function F(E,O){typeof window.showToast=="function"&&window.showToast(E,O!==!1)}let $=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>j("/effects/reload",{method:"POST"}).then(E=>F(E.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),E.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>j("/admin/poll/reset",{method:"POST"}).then(E=>F(E.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),E.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return j("/admin/history/clear",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,N=null,D=null,B="",w=[],P=[],L=0,b=null,x=null,q=null,A=15e3;function S(E){return String(E??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O])}function p(E,O){if(!O)return 0;let U=String(E||"").toLowerCase(),J=O.toLowerCase(),te=0,Z=0,G=0,Q=0;for(;te<U.length&&Z<J.length;)U[te]===J[Z]?(Z++,Q++,G+=2+Q):Q=0,te++;return Z<J.length?-1:(U.startsWith(J)&&(G+=10),G)}function l(){let E=document.createElement("div");E.className="admin-cmdk",E.setAttribute("hidden",""),E.setAttribute("aria-hidden","true"),E.innerHTML=`
      <div class="admin-cmdk-backdrop" data-cmdk-close></div>
      <div class="admin-cmdk-panel" role="dialog" aria-modal="true" aria-label="Command palette">
        <div class="admin-cmdk-search">
          <span class="admin-cmdk-search-icon" aria-hidden="true">\u2315</span>
          <input type="text" class="admin-cmdk-input" placeholder="${ServerI18n.t("cmdkSearchPlaceholder")}" autocomplete="off" spellcheck="false" />
          <span class="admin-cmdk-prompt">\u2318K</span>
        </div>
        <ul class="admin-cmdk-list" role="listbox"></ul>
        <div class="admin-cmdk-foot">
          <span><kbd>\u2191\u2193</kbd> ${ServerI18n.t("cmdkFootSelect")}</span>
          <span><kbd>\u21B5</kbd> ${ServerI18n.t("cmdkFootRun")}</span>
          <span><kbd>\u2318K</kbd> ${ServerI18n.t("cmdkFootToggle")}</span>
        </div>
      </div>
    `,document.body.appendChild(E),m=E,N=E.querySelector(".admin-cmdk-input"),D=E.querySelector(".admin-cmdk-list"),E.addEventListener("click",O=>{O.target.matches("[data-cmdk-close]")&&R()}),N.addEventListener("input",O=>{B=O.target.value,k()}),N.addEventListener("keydown",o),D.addEventListener("click",O=>{let U=O.target.closest("[data-cmdk-idx]");U&&(L=parseInt(U.dataset.cmdkIdx,10)||0,r())})}function o(E){if(E.key==="Escape"){E.preventDefault(),R();return}if(E.key==="ArrowDown"){E.preventDefault(),e(1);return}if(E.key==="ArrowUp"){E.preventDefault(),e(-1);return}if(E.key==="Enter"){E.preventDefault(),r();return}}function e(E){if(!w.length)return;L=(L+E+w.length)%w.length,_();let O=D.querySelector(`[data-cmdk-idx="${L}"]`);O&&O.scrollIntoView({block:"nearest"})}function r(){let E=w[L];if(E){if(E.type==="route")window.location.hash="#/"+E.route,R();else if(E.type==="setting")E.tab&&(document.body.dataset.viewerConfigTab=E.tab),window.location.hash="#/"+E.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let O=document.getElementById(E.section);O&&(O.scrollIntoView({behavior:"smooth",block:"start"}),O.tagName==="DETAILS"&&!O.open&&(O.open=!0))},80),R();else if(E.type==="message")window.location.hash="#/messages",R();else if(E.type==="user")window.location.hash="#/system",setTimeout(()=>{let O=document.getElementById("sec-fingerprints");O&&O.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if(E.type==="theme")j("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:E.id})}).then(O=>{O.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:E.label}),!0),q=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R();else if(E.type==="action"){try{let O=E.action&&E.action();O&&typeof O.then=="function"&&O.catch(()=>{})}catch{}R()}}}let n={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function d(E){return Object.entries(T()).map(([O,U])=>{let J=Math.max(p(U.title,E),p(O,E)),te=n[O];return{type:"route",route:O,label:U.title,sub:te?ServerI18n.t(te):"",icon:"\u25C7",score:J}}).filter(O=>O.score>=0)}function s(E){let O=T()[E];if(!O)return"";let U="adminRouteTitle_"+E,J=ServerI18n.t(U);return J!==U?J:O.title}function t(E){return h.map(O=>{let U=O.labelKey?ServerI18n.t(O.labelKey):O.label;return{type:"setting",route:O.route,tab:O.tab,section:O.section,label:s(O.route.split("/")[0])?`${s(O.route.split("/")[0])} \u203A ${U}`:U,sub:"",icon:"\u2699",score:p(U,E)}}).filter(O=>O.score>=0)}function c(E){return b?(b.records||[]).map(U=>{let J=U.text||U.message||"",te=U.nickname||U.user||"guest",Z=(U.timestamp||"").slice(11,19)||"\u2014",G=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${te}`,sub:G?`${Z} \xB7 fp:${G}`:Z,icon:"\u{1F4AC}",score:Math.max(p(J,E),p(te,E))}}).filter(U=>U.score>=0):[]}function g(E){if(!q)return[];let O=q.records||[],U=q.active||"";return O.map(J=>{let te=J.label||J.display_name||J.name||"",Z=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),G=J.name===U;return{type:"theme",id:J.name,label:G?ServerI18n.t("cmdkThemeActive",{name:te}):te,sub:Z,icon:"\u{1F3A8}",score:Math.max(p(te,E),p(J.name||"",E),p(Z,E))}}).filter(J=>J.score>=0)}function a(E){return $.map(O=>{let U=ServerI18n.t(O.labelKey),J=O.subKey?ServerI18n.t(O.subKey):O.sub;return{type:"action",id:O.id,label:U,sub:J,icon:"\u26A1",action:O.action,score:Math.max(p(U,E),p(O.id,E),p(J,E))}}).filter(O=>O.score>=0)}function i(E){return x?(x.records||[]).map(U=>{let J=U.fingerprint||U.fp||U.id||"",te=U.ip||U.last_ip||"",Z=U.nickname||"";return{type:"user",label:Z?`@${Z}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${te||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(p(J,E),p(te,E),p(Z,E))}}).filter(U=>U.score>=0):[]}async function u(){let E=Date.now(),O=[];(!b||E-b.at>A)&&O.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{b={at:E,records:U&&U.records||[]}}).catch(()=>{b={at:E,records:[]}})),(!x||E-x.at>A)&&O.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{x={at:E,records:U&&U.records||[]}}).catch(()=>{x={at:E,records:[]}})),(!q||E-q.at>A)&&O.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{q={at:E,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{q={at:E,records:[],active:""}})),O.length&&await Promise.all(O)}let v={actions:5,pages:5,messages:4};async function k(){await u();let E=B.trim(),O={action:a(E),route:d(E),setting:t(E),theme:g(E),message:c(E),user:i(E)};w=[],P=[],f.forEach(U=>{let J=U.types.reduce((te,Z)=>te.concat(O[Z]||[]),[]).sort((te,Z)=>Z.score-te.score).slice(0,v[U.id]||5);J.length&&(P.push({id:U.id,labelKey:U.labelKey,from:w.length,count:J.length}),w=w.concat(J))}),L=0,_()}function I(E){return E.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[E.type]||"\xB7"}function _(){if(!w.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let E=[];P.forEach(O=>{E.push(`<li class="admin-cmdk-group" role="presentation">${S(ServerI18n.t(O.labelKey))}</li>`);for(let U=O.from;U<O.from+O.count;U++){let J=w[U],te=U===L;E.push(`
        <li class="admin-cmdk-row ${te?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${te}">
          <span class="admin-cmdk-icon" aria-hidden="true">${S(I(J))}</span>
          <span class="admin-cmdk-label">${S(J.label)}</span>
          <span class="admin-cmdk-sub">${S(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${te?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=E.join("")}function M(){m||l(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),B="",N.value="",k(),setTimeout(()=>N.focus(),20)}function R(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function K(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:M,close:R,isOpen:K,toggle:()=>K()?R():M()}})()});var Xt=he(()=>{(function(){"use strict";let y="sec-sessions-overview";var T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},h={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(l){if(l=Number(l)||0,l<=0)return"\u2014";var o=Math.floor(l/3600),e=Math.floor(l%3600/60),r=l%60;return o>0?o+"h "+e+"m":e>0?e+"m":r+"s"}function C(l){if(!l)return"\u2014";try{var o=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function j(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+T(ServerI18n.t("sessionsColSession"))+"</span><span>"+T(ServerI18n.t("sessionsColMessages"))+"</span><span>"+T(ServerI18n.t("sessionsColViewers"))+"</span><span>"+T(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function $(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function m(){var l=document.getElementById("admin-sessions-table-body");if(l){if(h.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!h.sessions.length){l.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",l.appendChild(o);return}var e=h.sessions.map(function(r){var n=T(r.id||"");return'<div class="admin-sessions-tr'+(r.is_live?" is-live":"")+'" data-session-id="'+n+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(r.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+T($(r))+'<span class="admin-sessions-td-sub">'+T(C(r.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(r.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(r.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+T(f(r.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+n+'">'+T(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=F()+e}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!h.exportId){l.hidden=!0,l.innerHTML="";return}var o=h.sessions.find(function(r){return r.id===h.exportId});if(!o){h.exportId=null,l.hidden=!0,l.innerHTML="";return}var e=N.map(function(r){return'<button type="button" class="admin-sx-export__seg'+(r.id===h.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+r.id+'" aria-pressed="'+(r.id===h.exportFormat?"true":"false")+'">'+T(ServerI18n.t(r.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+T(ServerI18n.t("sessionsExportTitle",{name:$(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+T(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(h.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+T(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+T(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+T(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+T(ServerI18n.t("sessionsDownloadBtn",{fmt:h.exportFormat.toUpperCase()}))+"</button></div>"}}function B(){if(h.exportId){var l="/admin/sessions/"+encodeURIComponent(h.exportId)+"/export?format="+encodeURIComponent(h.exportFormat)+"&include_pii="+(h.exportPii?"1":"0"),o=document.createElement("a");o.href=l,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function w(){var l=h.exportId;if(l)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var e=await o.json(),r=(e.records||[]).slice(0,500);if(!r.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var n=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:r,speedMultiplier:1})});if(n.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!n.ok)throw new Error("HTTP "+n.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),D()}async function L(){h.loading=!0,m();try{var[l,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],r=[];if(l.ok){var n=await l.json();e=Array.isArray(n.sessions)?n.sessions:[],e.forEach(function(i){i._explicit=!0})}if(o.ok){var d=await o.json();r=Array.isArray(d.sessions)?d.sessions:[]}var s=e.slice(),t=new Set(e.map(function(i){return i.id}));r.forEach(function(i){t.has(i.id)||s.push(i)}),s.sort(function(i,u){var v=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0),k=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return k-v});try{var c=await fetch("/admin/session/current",{credentials:"same-origin"});if(c.ok){var g=await c.json();if(g.status==="live"){var a=Object.assign({},g,{id:g.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});s.unshift(a)}}}catch{}h.sessions=s,h.total=s.length}catch(i){console.error("[admin-sessions] fetch error:",i),h.sessions=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:i.message||""}),!1)}finally{h.loading=!1,P()}}function b(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function x(l){h.exportId=l,D();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function q(){var l=document.getElementById(y);l&&(l.addEventListener("click",function(o){var e=o.target.closest("[data-sessions-export-open]");if(e){o.stopPropagation(),x(e.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){h.exportId=null,D();return}var r=o.target.closest("[data-sessions-export-fmt]");if(r){h.exportFormat=r.dataset.sessionsExportFmt,D();return}if(o.target.closest("[data-sessions-replay]")){w();return}if(o.target.closest("[data-sessions-download]")){B();return}var n=o.target.closest(".admin-sessions-tr");n&&b(n.dataset.sessionId||null)}),l.addEventListener("change",function(o){var e=o.target.closest("[data-sessions-export-pii]");e&&(h.exportPii=!!e.checked)}),l.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var e=o.target.closest(".admin-sessions-tr");e&&(o.preventDefault(),b(e.dataset.sessionId||null))}}))}function A(){var l=document.querySelector(".admin-dash-grid"),o=document.getElementById(y);if(!(!l||!o)){var e=l.dataset.activeLeaf||"dashboard";o.style.display=e==="sessions"?"":"none"}}function S(){var l=document.getElementById("settings-grid");!l||document.getElementById(y)||(l.insertAdjacentHTML("beforeend",j()),q(),L(),A())}function p(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&S(),A()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",A),document.addEventListener("admin-panel-rendered",function(){S(),A()}),S()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var Zt=he(()=>{(function(){"use strict";let y="sec-session-detail-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},h={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,C={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function j(){let I=window.location.hash||"",_=I.indexOf("?");if(_===-1)return null;let M=I.slice(_+1);return new URLSearchParams(M).get("id")||null}function F(I){if(!I)return"\u2014";try{let _=new Date(I);if(isNaN(_.getTime()))return String(I);let M=R=>String(R).padStart(2,"0");return`${_.getFullYear()}-${M(_.getMonth()+1)}-${M(_.getDate())} ${M(_.getHours())}:${M(_.getMinutes())}:${M(_.getSeconds())}`}catch{return String(I)}}function $(I){if(!I||I<0)return"\u2014";let _=Math.round(Number(I)),M=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60;return M>0?`${M}h ${R}m ${K}s`:R>0?`${R}m ${K}s`:`${K}s`}function m(I,_){if(!I||!_)return"";try{let M=Math.max(0,Math.round((new Date(I)-new Date(_))/1e3)),R=Math.floor(M/60),K=M%60;return`+${String(R).padStart(2,"0")}:${String(K).padStart(2,"0")}`}catch{return""}}function N(I){let _=Number(I);return isNaN(_)?"\u2014":_.toLocaleString()}function D(I){if(!I)return"#64748b";let _=0;for(let R=0;R<I.length;R++)_=_*31+I.charCodeAt(R)>>>0;return`hsl(${_%360}, 60%, 60%)`}function B(){return`
      <div id="${y}" class="admin-sd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-sd-title>${ServerI18n.t("sessionDetailPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("sessionDetailPageNote")}</p>
        </div>

        <div class="admin-sd-loading" data-sd-loading hidden>
          <div class="admin-sd-loading-spinner" aria-hidden="true"></div>
          <span>${ServerI18n.t("sessionDetailLoadingText")}</span>
        </div>
        <div class="admin-sd-error" data-sd-error hidden>
          <span data-sd-error-msg></span>
          <button type="button" class="admin-ui-action admin-sd-retry-action" data-sd-action="retry">${ServerI18n.t("sessionDetailRetryBtn")}</button>
        </div>

        <article class="admin-sd-card admin-sd-header" data-sd-session-header hidden>
          <a class="admin-sd-back-link" href="#/history/sessions" data-sd-action="back">\u2039 ${ServerI18n.t("adminRouteTitle_history")}</a>
          <div class="admin-sd-name" data-sd-session-id></div>
          <div class="admin-sd-time"><span data-sd-meta-start></span> \xB7 <span data-sd-meta-duration></span></div>
          <div class="admin-sd-headactions">
            <button type="button" class="admin-ui-action" data-sd-action="replay">${ServerI18n.t("sessionsReplayBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-sd-action="export">${ServerI18n.t("sessionsExportBtn")}</button>
          </div>
        </article>

        <div class="admin-sd-kpis" data-sd-kpis hidden>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatMsgCount")}</div><div class="v" data-sd-stat="msg_count">\u2014</div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatViewerCount")}</div><div class="v" data-sd-stat="viewer_count">\u2014</div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatPeak")}</div><div class="v" data-sd-stat="peak">\u2014</div><div class="sub" data-sd-stat-sub="peak"></div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatBlocked")}</div><div class="v" data-sd-stat="blocked">\u2014</div></div>
        </div>

        <div class="admin-sd-msgs-wrap" data-sd-msgs-wrap hidden>
          <div class="admin-sd-msgbar">
            <input type="search" class="admin-ui-input admin-sd-search" data-sd-search
                   placeholder="${ServerI18n.t("sessionDetailSearchPlaceholder")}"
                   aria-label="${ServerI18n.t("sessionDetailSearchPlaceholder")}" />
            <span class="admin-sd-seg" role="group">
              <button type="button" class="is-active" data-sd-filter="all">${ServerI18n.t("sessionDetailFilterAll")}</button>
              <button type="button" data-sd-filter="blocked" data-sd-blocked-btn>${ServerI18n.t("sessionDetailStatBlocked")}</button>
            </span>
          </div>
          <div class="admin-sd-msgs-list" data-sd-msgs-list></div>
        </div>

        <details class="admin-sd-timeline-wrap" data-sd-timeline-wrap hidden>
          <summary class="admin-sd-timeline-summary">${ServerI18n.t("sessionDetailSecDensity")}</summary>
          <div class="admin-sd-timeline-head">
            <span class="admin-sd-peak-marker" data-sd-peak-label></span>
            <span class="admin-sd-timeline-spacer"></span>
            <span class="admin-sd-ann-count" data-sd-ann-count></span>
            <button type="button" class="admin-sd-ann-add" data-sd-action="add-annotation">${ServerI18n.t("sessionDetailAddAnnotationBtn")}</button>
          </div>
          <div class="admin-sd-timeline-inner" data-sd-timeline-inner>
            <div class="admin-sd-timeline" data-sd-timeline></div>
            <div class="admin-sd-ann-layer" data-sd-ann-layer aria-hidden="true"></div>
            <div class="admin-sd-ann-hover" data-sd-ann-hover hidden></div>
          </div>
          <div class="admin-sd-timeline-axis" data-sd-timeline-axis></div>
          <div class="admin-sd-ann-legend" data-sd-ann-legend></div>
          <div class="admin-sd-ann-list" data-sd-ann-list></div>
        </details>
      </div>
    `}async function w(I){if(!I){A(ServerI18n.t("sessionDetailErrMissingId"));return}q(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(I)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(I)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let M=await _.json();h.session=M.session||null,h.records=M.records||[],h.density=M.density||[],q(!1),S(),P()}catch(_){q(!1),A(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(h.sessionId)try{let I=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(h.sessionId)}`,{credentials:"same-origin"});if(!I.ok)return;let _=await I.json();h.annotations=Array.isArray(_.annotations)?_.annotations:[],n()}catch{}}function L(){let I=h.session;if(!I)return 0;if(I.duration_s)return Math.round(I.duration_s*1e3);if(I.duration)return Math.round(I.duration*1e3);let _=I.started_at||I.start_time,M=I.ended_at||I.end_time;if(_&&M)try{return Math.max(0,new Date(M)-new Date(_))}catch{return 0}return h.density&&h.density.length?h.density.length*60*1e3:0}function b(I){let _=Date.parse(I||0);if(Number.isNaN(_))return"\u2014";let M=new Date(_),R=K=>String(K).padStart(2,"0");return`${R(M.getHours())}:${R(M.getMinutes())}:${R(M.getSeconds())}`}function x(I){let _=Math.floor(I/1e3),M=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60,E=O=>String(O).padStart(2,"0");return M>0?`${E(M)}:${E(R)}:${E(K)}`:`${E(R)}:${E(K)}`}function q(I){h.loading=I;let _=document.querySelector("[data-sd-loading]"),M=document.querySelector("[data-sd-error]");_&&(_.hidden=!I),M&&I&&(M.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let K=R.querySelector("[data-sd-timeline-skel]");I?(R.hidden=!1,K||(K=window.AdminSkeletons.chart(),K.setAttribute("data-sd-timeline-skel","1"),R.appendChild(K))):K&&K.remove()}}function A(I){h.error=I;let _=document.querySelector("[data-sd-error]"),M=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),M&&(M.textContent=I),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let K=document.querySelector(`[${R}]`);K&&(K.hidden=!0)})}function S(){p(),l(),o(),r(),n();let I=document.querySelector("[data-sd-error]");I&&(I.hidden=!0)}function p(){let I=h.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let M=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),K=document.querySelector("[data-sd-meta-duration]"),E=document.querySelector("[data-sd-title]"),O=I&&(I.session_id||I.id)||h.sessionId||"\u2014";M&&(M.textContent=O),R&&(R.textContent=F(I&&(I.started_at||I.start_time))),K&&(K.textContent=$(I&&(I.duration_s||I.duration))),E&&(E.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(O).slice(-8)}))}function l(){let I=h.session;if(!I)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let M=function(O,U,J){let te=document.querySelector(`[data-sd-stat="${O}"]`);te&&(te.textContent=U);let Z=document.querySelector(`[data-sd-stat-sub="${O}"]`);Z&&(Z.textContent=J||"")};M("msg_count",N(I.msg_count)),M("viewer_count",N(I.viewer_count));let R=Array.isArray(h.density)?h.density:[];if(R.length){let O=0,U=0;R.forEach(function(Z,G){Z>O&&(O=Z,U=G)});let J=Date.parse(I.started_at||I.start_time||0),te="";if(!Number.isNaN(J)){let Z=new Date(J+U*6e4),G=Q=>String(Q).padStart(2,"0");te=`${G(Z.getHours())}:${G(Z.getMinutes())}`}M("peak",N(O),te)}else M("peak","\u2014","");let K=Number(I.blocked_count)||0;M("blocked",N(K));let E=document.querySelector("[data-sd-blocked-btn]");E&&(E.textContent=ServerI18n.t("sessionDetailStatBlocked")+(K?" "+K:""),E.disabled=K===0)}function o(){let I=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),M=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!I||!_||!M)return;let K=h.density;if(!K||K.length===0){I.hidden=!0;return}I.hidden=!1;let E=Math.max(1,...K),O=0;K.forEach(function(Q,W){Q>K[O]&&(O=W)});let U=K.map(function(Q,W){let z=Math.max(2,Math.round(Q/E*100));return`<div class="admin-sd-bar${W===O?" is-peak":""}" style="height:${z}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:Q,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:Q})}"></div>`}).join("");_.innerHTML=U;let J=h.session,te=F(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",Z=F(J&&(J.ended_at||J.end_time)).slice(11,16)||"",G=K.length>2?`+${Math.round(K.length/2)}min`:"";M.innerHTML=`
      <span class="admin-sd-axis-label">${T(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${T(G)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${T(Z)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:K[O],minute:O}))}function e(){let I=(h.msgQuery||"").trim().toLowerCase();return h.records.filter(function(_){let M=(_.status||"shown")==="blocked";return h.msgFilter==="blocked"&&!M?!1:I?String(_.text||"").toLowerCase().indexOf(I)!==-1||String(_.nickname||"").toLowerCase().indexOf(I)!==-1:!0})}function r(){let I=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!I||!_)return;if(!h.records.length){I.hidden=!0;return}I.hidden=!1;let M=e().slice(0,300);if(!M.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+T(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=M.map(function(R){let K=(R.status||"shown")==="blocked",E=D(R.fingerprint||R.fp||""),O=b(R.timestamp||R.created_at),U=String(R.nickname||"").trim();return`
        <div class="admin-sd-msg-row${K?" is-blocked":""}">
          <span class="admin-sd-msg-time">${T(O)}</span>
          <span class="admin-sd-msg-dot" style="background:${E}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${T(R.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${T(ServerI18n.t("deliveryStatus_"+(R.status||"shown")))}
            ${R.delivery_reason?`<span class="admin-sd-msg-rule">${T(ServerI18n.t("deliveryReason_"+R.delivery_reason))}</span>`:""}
            ${K&&R.blockedBy?`<span class="admin-sd-msg-rule">${T(ServerI18n.t("sessionDetailBlockedBy",{rule:R.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${T(U||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function n(){let I=h.annotations||[],_=L(),M=document.querySelector("[data-sd-ann-count]");M&&(M.textContent=I.length?`${I.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=I.length?`ANNOTATIONS \xB7 ${I.length}`:"ANNOTATIONS");let K=document.querySelector("[data-sd-ann-layer]");K&&(!_||I.length===0?K.innerHTML="":K.innerHTML=I.map(function(U){let J=C[U.label]||C.note,te=Math.min(100,Math.max(0,U.ts_ms/_*100)),Z=U.id===h.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${Z?" is-active":""}"
              data-sd-ann-marker="${T(U.id)}"
              style="left:${te.toFixed(2)}%;--ann-color:${J.color}"
              title="${T(J.label)} \xB7 ${x(U.ts_ms)}"
              aria-label="${T(J.label)} at ${x(U.ts_ms)}: ${T(U.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${Z?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${T((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let E=document.querySelector("[data-sd-ann-legend]");E&&(E.innerHTML=Object.keys(C).map(function(U){let J=C[U],te=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${te}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let O=document.querySelector("[data-sd-ann-list]");if(O){if(I.length===0){O.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",O.appendChild(U);return}O.innerHTML=I.map(function(U){let J=C[U.label]||C.note,te=U.id===h.activeAnnId,G=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${te?" is-active":""}" data-sd-ann-row="${T(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${x(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${T(G)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${T(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function d(I){if(!h.sessionId)return;let _=window.HudConfirm;if(!_){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:x(I)}),"");J!=null&&J.trim()&&s(I,"note",J.trim());return}let R="highlight",K="",E=document.createElement("div");E.className="admin-sd-ann-modal-body",E.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${x(I)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(C).map(function(J){let te=C[J];return`
              <button type="button" class="admin-sd-ann-modal-lbl${J==="highlight"?" is-active":""}"
                data-ann-label="${J}" style="--ann-color:${te.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${te.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${te.label}</span>
              </button>`}).join("")}
        </div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <!-- D-4 i18n: "NOTE \xB7 \u2264 280 \u5B57" is the same deferred EN\xB7\u4E2D\u6587
             bilingual monolabel pattern \u2014 left untouched (see PLAYBACK
             note in buildSection() above). -->
        <div class="admin-ui-monolabel">${ServerI18n.t("uiNote")} \xB7 ${ServerI18n.t("sessionDetailSecNote")}</div>
        <textarea class="admin-sd-ann-modal-note" data-ann-modal-note
          placeholder="${ServerI18n.t("sessionDetailNotePlaceholder")}" maxlength="280"></textarea>
        <div class="admin-sd-ann-modal-counter" data-ann-modal-counter>0 / 280</div>
      </div>`,E.addEventListener("click",function(J){let te=J.target.closest("[data-ann-label]");te&&(R=te.dataset.annLabel,E.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(Z){Z.classList.toggle("is-active",Z===te)}))});let O=E.querySelector("[data-ann-modal-note]"),U=E.querySelector("[data-ann-modal-counter]");O.addEventListener("input",function(){K=O.value,U.textContent=`${K.length} / 280`}),setTimeout(function(){O&&O.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:E,width:460}).then(function(J){J&&s(I,R,O.value.trim())})}async function s(I,_,M){if(h.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:h.sessionId,ts_ms:Math.max(0,Math.round(I)),label:_||"note",note:M||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let K=await R.json();K.annotation&&(h.annotations.push(K.annotation),h.annotations.sort(function(E,O){return E.ts_ms-O.ts_ms}),h.activeAnnId=K.annotation.id,n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(I){if(I)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(I)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);h.annotations=h.annotations.filter(function(M){return M.id!==I}),h.activeAnnId===I&&(h.activeAnnId=null),n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function c(I){let _=document.querySelector("[data-sd-timeline-inner]"),M=document.querySelector("[data-sd-ann-hover]");if(!_||!M)return;let R=_.getBoundingClientRect();if(!R.width)return;let K=I.clientX-R.left,E=Math.min(1,Math.max(0,K/R.width)),O=L();if(!O){M.hidden=!0;return}let U=Math.round(E*O);h.hoverTsMs=U,M.hidden=!1,M.style.left=`${(E*100).toFixed(2)}%`,M.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:x(U)})}function g(){let I=document.querySelector("[data-sd-ann-hover]");I&&(I.hidden=!0),h.hoverTsMs=null}function a(I){if(I.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let M=_.getBoundingClientRect();if(!M.width)return;let R=I.clientX-M.left,K=Math.min(1,Math.max(0,R/M.width)),E=L();E&&d(Math.round(K*E))}async function i(){if(h.sessionId)try{let I=h.records.slice(0,500);if(!I.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:I,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(I,_){if(I==="back")window.location.hash="#/history/sessions";else if(I==="retry")h.sessionId&&w(h.sessionId);else if(I==="export"){if(!h.sessionId)return;let M=document.createElement("a");M.href="/admin/sessions/"+encodeURIComponent(h.sessionId)+"/export?format=csv",M.rel="noopener",document.body.appendChild(M),M.click(),M.remove()}else if(I==="replay")i();else if(I==="add-annotation"){let M=L(),R=h.hoverTsMs!=null?h.hoverTsMs:Math.round(M/2);d(R)}}function v(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=j();if(!_){h.sessionId=null,A(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}h.sessionId=_,w(_)}function k(){let I=document.getElementById("settings-grid");if(!I)return;let _=document.getElementById(y);_||(I.insertAdjacentHTML("beforeend",B()),_=document.getElementById(y),n()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(M){let R=M.target.closest("[data-sd-ann-del]");if(R){M.stopPropagation(),t(R.dataset.sdAnnDel);return}let K=M.target.closest("[data-sd-ann-marker]");if(K){M.stopPropagation(),h.activeAnnId=K.dataset.sdAnnMarker,n();let te=document.querySelector(`[data-sd-ann-row="${h.activeAnnId}"]`);te&&te.scrollIntoView&&te.scrollIntoView({block:"nearest",behavior:"smooth"});return}let E=M.target.closest("[data-sd-ann-row]");if(E){h.activeAnnId=E.dataset.sdAnnRow,n();return}if(M.target.closest("[data-sd-timeline-inner]")){a(M);return}let U=M.target.closest("[data-sd-action]");if(U){M.preventDefault(),u(U.dataset.sdAction,U);return}let J=M.target.closest("[data-sd-filter]");J&&(h.msgFilter=J.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(te){te.classList.toggle("is-active",te===J)}),r())}),_.addEventListener("input",function(M){let R=M.target.closest("[data-sd-search]");R&&(h.msgQuery=R.value||"",r())}),_.addEventListener("mousemove",function(M){M.target.closest("[data-sd-timeline-inner]")&&c(M)}),_.addEventListener("mouseleave",function(M){M.target.closest&&M.target.closest("[data-sd-timeline-inner]")&&g()},!0)),h.sessionId=j(),h.sessionId?w(h.sessionId):A(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&k()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&_.indexOf("/session-detail")!==-1&&k(),window.addEventListener("admin-route-changed",function(M){(M&&M.detail&&M.detail.route)==="session-detail"&&k()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&k()})})})()});var en=he(()=>{(function(){"use strict";let y="sec-search-overview";var T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:h,results:[],total:0,loading:!1,searched:!1},C=0;function j(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+T(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+T(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+T(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+T(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+T(ServerI18n.t("searchWhoAria"))+'"><option value="">'+T(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+T(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+T(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(e){if(!e)return 200;for(var r=0,n=0;n<Math.min(e.length,6);n++)r=r*31+e.charCodeAt(n)&65535;return r%360}function $(e,r){if(!r||!e)return T(e||"");var n=T(e),d=T(r);try{var s=new RegExp("("+d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return n.replace(s,'<mark class="admin-search-hit">$1</mark>')}catch{return n}}function m(e){if(!e)return"\u2014";try{var r=new Date(e);return r.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function N(){var e=f.results;return f.blockedOnly&&(e=e.filter(function(r){return(r.status||"shown")==="blocked"})),f.who&&(e=e.filter(function(r){return(r.nickname||"")===f.who})),e}function D(){var e=document.getElementById("admin-search-count");if(e){if(!f.searched||!f.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function B(){var e=document.querySelector("[data-search-who]");if(e){var r=[];f.results.forEach(function(d){var s=(d.nickname||"").trim();s&&r.indexOf(s)===-1&&r.push(s)}),r.sort();var n=f.who;e.innerHTML='<option value="">'+T(ServerI18n.t("searchWhoAnyone"))+"</option>"+r.map(function(d){return'<option value="'+T(d)+'"'+(d===n?" selected":"")+">"+T(d)+"</option>"}).join("")}}function w(){var e=document.getElementById("admin-search-results"),r=document.getElementById("admin-search-empty-state"),n=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(a){a.remove()});var d=function(a){r&&(r.style.display="block",r.textContent=a),n&&(n.hidden=!0)};if(f.loading)return d(ServerI18n.t("searchSearching"));if(!f.searched)return d(ServerI18n.t("searchPromptStart"));var s=N();if(s.length===0)return d(ServerI18n.t("searchNoMatch"));r&&(r.style.display="none"),n&&(n.hidden=!1);var t=Math.min(s.length,f.shown),c=document.createDocumentFragment();if(s.slice(0,t).forEach(function(a){var i=document.createElement("div");i.className="admin-search-row",i.innerHTML='<span class="admin-search-row__ts">'+T(m(a.timestamp))+'</span><span class="admin-search-row__text">'+$(a.text||"",f.query)+'</span><span class="admin-search-row__nick">'+T((a.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+T(ServerI18n.t("deliveryStatus_"+(a.status||"shown")))+(a.delivery_reason?"<br>"+T(ServerI18n.t("deliveryReason_"+a.delivery_reason)):"")+"</span></span>",c.appendChild(i)}),e.appendChild(c),s.length>t){var g=document.createElement("button");g.type="button",g.className="admin-search-more",g.dataset.searchMore="1",g.textContent=ServerI18n.t("searchMoreLeft",{n:s.length-t}),e.appendChild(g)}}}function P(){D(),B(),w()}async function L(){var e=f.query.trim();if(!e){f.loading=!1,f.searched=!1,f.results=[],f.total=0,P();return}f.loading=!0,P();try{var r="/admin/search?q="+encodeURIComponent(e);if(f.scope==="session"){var n=await x();n&&(r+="&since="+encodeURIComponent(n))}var d=Date.now(),s=await fetch(r,{credentials:"same-origin"}),t=Date.now()-d;if(!s.ok)throw new Error("HTTP "+s.status);var c=await s.json();f.results=Array.isArray(c.results)?c.results:[],f.total=typeof c.total=="number"?c.total:f.results.length,f.shown=h}catch(g){console.error("[admin-search] fetch error:",g),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:g.message||""}),!1)}finally{f.loading=!1,f.searched=!0,P()}}var b=null;async function x(){if(b!==null)return b;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var r=await e.json();if(r.status==="live"&&r.started_at)return b=new Date(r.started_at*1e3).toISOString(),b}}catch{}return b="",""}function q(){clearTimeout(C),C=setTimeout(L,300)}function A(){if(f.results.length){var e=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(s){var t=[s.nickname||"",s.fingerprint||"",s.timestamp||"",s.status||"",s.text||"",s.delivery_reason||""].map(function(c){return'"'+String(c).replace(/"/g,'""')+'"'});e.push(t.join(","))});var r=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(r),d=document.createElement("a");d.href=n,d.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(n)}}function S(){var e=document.getElementById(y);if(e){var r=document.getElementById("admin-search-input");r&&(r.addEventListener("input",function(){f.query=r.value,q()}),r.addEventListener("keydown",function(d){d.key==="Enter"&&(clearTimeout(C),f.query=r.value,L())})),e.addEventListener("click",function(d){var s=d.target.closest("[data-search-scope]");if(s){f.scope=s.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(c){c.classList.toggle("is-active",c===s)}),f.query.trim()&&q();return}var t=d.target.closest("[data-search-blocked]");if(t){f.blockedOnly=!f.blockedOnly,t.classList.toggle("is-active",f.blockedOnly),f.shown=h,P();return}if(d.target.closest("[data-search-more]")){f.shown+=h,w();return}}),e.addEventListener("change",function(d){var s=d.target.closest("[data-search-who]");s&&(f.who=s.value||"",f.shown=h,P())});var n=document.getElementById("admin-search-export-btn");n&&n.addEventListener("click",A)}}function p(){var e=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!(!e||!r)){var n=e.dataset.activeLeaf||"dashboard";r.style.display=n==="search"?"":"none"}}function l(){var e=document.getElementById("settings-grid");!e||document.getElementById(y)||(e.insertAdjacentHTML("beforeend",j()),S(),p())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&l(),p()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",function(){l(),p()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var tn=he(()=>{(function(){"use strict";let y="sec-api-tokens-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},h=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],C={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function j(a){if(!a)return"\u2014";try{let i=new Date(a);if(isNaN(i.getTime()))return String(a);let u=v=>String(v).padStart(2,"0");return`${i.getFullYear()}-${u(i.getMonth()+1)}-${u(i.getDate())}`}catch{return String(a)}}function F(a){if(!a)return null;try{let i=new Date(a);if(isNaN(i.getTime()))return null;let u=v=>String(v).padStart(2,"0");return`${i.getFullYear()}-${u(i.getMonth()+1)}-${u(i.getDate())} ${u(i.getHours())}:${u(i.getMinutes())}`}catch{return null}}function $(a){let i=Number(a);return isNaN(i)?"0":i.toLocaleString()}function m(a){if(!a||a.enabled===!1)return"inactive";if(!a.expires_at)return"active";try{let i=new Date(a.expires_at).getTime(),u=Date.now();if(i<u)return"expired";if(i-u<168*3600*1e3)return"expiring"}catch{}return"active"}function N(a){if(!a)return 1/0;try{return Math.floor((Date.now()-new Date(a).getTime())/864e5)}catch{return 1/0}}function D(a){return!a||!a.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':a.map(function(i){let u="admin-ui-pill admin-at-scope-badge";return i==="admin:*"?u+=" is-danger":i.startsWith("fire:")?u+=" is-warn":i.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${T(i)}</span>`}).join(" ")}function B(a){let i="admin-ui-dot admin-at-dot";return a==="active"?i+=" is-success":a==="expiring"?i+=" is-warn":a==="expired"?i+=" is-danger":i+=" is-muted",`<span class="${i}" aria-hidden="true"></span>`}function w(){let a=h.map(function(u){let v=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",I=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${T(u.id)}"
          >
          <span class="${I}">${T(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${T(ServerI18n.t(u.labelKey))}</span>
          ${v}
        </label>
      `}).join(""),i=f.map(function(u){let v=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${v} class="sr-only">
          <span>${T(ServerI18n.t(u.labelKey))}</span>
        </label>
      `}).join("");return`
      <details id="${y}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
        <summary class="admin-ui-page-title" data-i18n="tabExtApiKeys">${ServerI18n.t("tabExtApiKeys")}</summary>
        <div class="admin-at-page hud-page-stack">
        <!-- Page header -->
        <div class="admin-ui-page-head">
          <p class="admin-ui-page-note">${ServerI18n.t("apiTokensPageNote")}</p>
        </div>

        <div class="admin-at-grid">
          <!-- \u2500\u2500 LEFT: token list \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
          <div class="admin-at-main">
            <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("apiTokensIssuedLabel")}</div>

            <!-- list loading state -->
            <div class="admin-at-list-loading" data-at-list-loading hidden>${ServerI18n.t("apiTokensListLoading")}</div>

            <!-- empty state\uFF08\u5167\u5BB9\u7531 AdminEmpty \u65BC\u9996\u6B21\u986F\u793A\u6642\u586B\u5145\uFF09 -->
            <div data-at-empty hidden></div>

            <!-- table -->
            <div class="admin-ui-table-wrap" data-at-table-wrap hidden>
              <table class="admin-ui-table admin-at-table">
                <thead>
                  <tr>
                    <th>${ServerI18n.t("uiLabel")}</th>
                    <th>${ServerI18n.t("apiTokensThPrefixScope")}</th>
                    <th>${ServerI18n.t("apiTokensThLastUsed")}</th>
                    <th>${ServerI18n.t("apiTokensThUsage")}</th>
                    <th>${ServerI18n.t("apiTokensThCreated")}</th>
                    <th>${ServerI18n.t("apiTokensThActions")}</th>
                  </tr>
                </thead>
                <tbody data-at-tbody>
                  <!-- populated by _renderList() -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- \u2500\u2500 RIGHT: create form (380px) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
          <aside class="admin-at-rail">
            <div class="admin-at-form-card" id="adminAtFormCard">
              <div class="admin-at-form-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("apiTokensGenerateNewLabel")}</span>
              </div>

              <!-- Success banner (shown after create) -->
              <div class="admin-at-success-banner" id="adminAtSuccessBanner" hidden>
                <div class="admin-at-success-title">${ServerI18n.t("apiTokensSuccessTitle")}</div>
                <p class="admin-at-success-note">${ServerI18n.t("apiTokensSuccessNote")}</p>
                <div class="admin-at-token-display-row">
                  <input
                    type="text"
                    id="adminAtTokenDisplay"
                    class="admin-ui-input admin-at-token-raw"
                    readonly
                    aria-label="${ServerI18n.t("apiTokensRawTokenAriaLabel")}"
                  >
                  <button type="button" class="admin-ui-action admin-at-copy-btn" id="adminAtCopyBtn" data-at-action="copy-token">
                    ${ServerI18n.t("apiTokensCopyBtn")}
                  </button>
                </div>
              </div>

              <!-- Create form -->
              <form id="adminAtCreateForm" class="admin-at-form" novalidate>
                <!-- Label -->
                <div class="admin-at-field">
                  <label class="admin-ui-monolabel" for="adminAtLabel">${ServerI18n.t("uiLabel")}</label>
                  <input
                    type="text"
                    id="adminAtLabel"
                    name="label"
                    class="admin-ui-input admin-at-input"
                    placeholder="e.g. OBS Widget \xB7 ci-bot \xB7 SlideSync"
                    maxlength="80"
                    required
                    autocomplete="off"
                  >
                </div>

                <!-- Scopes -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiScopes")} \xB7 ${ServerI18n.t("apiTokensScopesLabel")}</div>
                  <div class="admin-at-scopes" id="adminAtScopes">
                    ${a}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${i}
                  </div>
                </div>

                <!-- Warning note -->
                <p class="admin-ui-notice is-warn admin-at-once-note">
                  ${ServerI18n.t("apiTokensOnceWarnNote")}
                </p>

                <!-- Form error -->
                <div class="admin-ui-notice is-danger admin-at-form-error" id="adminAtFormError" hidden></div>

                <!-- Submit -->
                <button type="submit" class="admin-ui-action is-primary is-block admin-at-submit-btn" id="adminAtSubmitBtn">
                  ${ServerI18n.t("apiTokensGenerateBtn")}
                </button>
              </form>
            </div>
          </aside>
        </div>
        </div>
      </details>
    `}async function P(){q(!0);try{let a=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.json();C.tokens=i.tokens||i||[],S()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:a.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{q(!1)}}async function L(a){C.creating=!0,A(!0),r();try{let i=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok){let k=await i.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${i.status}`)}let u=await i.json(),v=u.token||u.raw_token||u.access_token||null;C.newTokenRaw=v,p(v),o(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(i){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:i.message||""}),!1)}finally{C.creating=!1,A(!1)}}async function b(a,i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${T(i||a)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"DELETE"});if(!v.ok){let k=await v.json().catch(()=>({}));throw new Error(k.error||k.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:v.message||""}),!1)}}async function x(a,i){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(a)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:i})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(i?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function q(a){let i=document.querySelector("[data-at-list-loading]");i&&(i.hidden=!a)}function A(a){let i=document.getElementById("adminAtSubmitBtn");i&&(i.disabled=a,i.textContent=a?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function S(){let a=C.tokens,i=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),v=document.querySelector("[data-at-tbody]");if(!(!i||!u||!v)){if(!a||a.length===0){if(!i.firstElementChild&&window.AdminEmpty){let k=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});k.dataset.emptyKind="api-tokens",i.appendChild(k)}i.hidden=!1,u.hidden=!0;return}i.hidden=!0,u.hidden=!1,v.innerHTML=a.map(function(k){let I=m(k),_=B(I),M=k.scopes||k.scope||[],R=Array.isArray(M)?M:String(M).split(",").map(te=>te.trim()).filter(Boolean),E=N(k.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",O=I==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=I==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=k.last_used_at?`${F(k.last_used_at)||j(k.last_used_at)}<br><span class="admin-at-ip">${T(k.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${T(k.id||k.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${T(k.label||k.name||"\u2014")}</span>
            ${E}${O}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${T(k.prefix||k.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(R)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${$(k.usage_count||k.use_count)}</td>
          <td class="admin-at-td-created">${j(k.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${T(k.id||k.token_id||"")}"
              data-token-enabled="${k.enabled===!1?"0":"1"}"
              title="${k.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${k.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${T(k.id||k.token_id||"")}"
              data-token-label="${T(k.label||k.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function p(a){let i=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),v=document.getElementById("adminAtCreateForm");i&&(i.hidden=!1),u&&a&&(u.value=a),v&&(v.style.opacity="0.5"),i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let a=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtCreateForm");a&&(a.hidden=!0),i&&(i.style.opacity=""),C.newTokenRaw=null}function o(){let a=document.getElementById("adminAtCreateForm");a&&a.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(v){v.classList.remove("is-active")});let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){i.checked=!0;let v=i.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),r()}function e(a){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!1,i.textContent=a)}function r(){let a=document.getElementById("adminAtFormError");a&&(a.hidden=!0,a.textContent="")}function n(){let a=document.getElementById("adminAtLabel"),i=a?a.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){u.push(_.value)});let v=document.querySelector("input[name='adminAtExpiry']:checked"),k=v?v.value:"90",I=k==="null"?null:parseInt(k,10);return{label:i,scopes:u,expiry_days:I}}function d(a){return a.label?a.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!a.scopes||a.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function s(a){if(a.preventDefault(),C.creating)return;r();let i=n(),u=d(i);if(u){e(u);return}L(i)}function t(){let a=C.newTokenRaw;if(!a)return;let i=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(a).then(function(){i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function c(){let a=document.getElementById(y);if(!a)return;a.addEventListener("click",function(k){let I=k.target.closest("[data-at-action]");if(I){let M=I.dataset.atAction;if(M==="revoke"){let R=I.dataset.tokenId,K=I.dataset.tokenLabel;b(R,K)}else if(M==="toggle"){let R=I.dataset.tokenId,K=I.dataset.tokenEnabled==="1";x(R,!K)}else M==="copy-token"&&t();return}let _=k.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(M){M.classList.remove("is-active")}),_.classList.add("is-active"))});let i=document.getElementById("adminAtScope_admin__");i&&i.addEventListener("change",function(){let k=document.getElementById("adminAtAdminWarn");k&&(k.hidden=!i.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",s);let v=document.querySelector("input[name='adminAtExpiry'][value='90']");if(v){let k=v.closest(".admin-at-expiry-btn");k&&k.classList.add("is-active")}}function g(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",w()),c(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&g()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&g()})})()});var nn=he(()=>{(function(){"use strict";let y="sec-wcag-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function h(o){let e=o.replace(/^#/,""),r=e.length===3?e.split("").map(function(n){return n+n}).join(""):e;return[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}function f(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function C(o){let e=h(o);return .2126*f(e[0])+.7152*f(e[1])+.0722*f(e[2])}function j(o,e){let r=C(o),n=C(e),d=Math.max(r,n),s=Math.min(r,n);return(d+.05)/(s+.05)}function F(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function $(o,e){let r=C(e),n=[],d=h(o);for(let s=.05;s<=.6&&n.length<3;s+=.05){let c="#"+d.map(function(a){return Math.min(1,a+s)}).map(function(a){return Math.round(a*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),g=j(c,e);g>=4.5&&n.push({hex:c,ratio:g})}return n}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",B={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function w(){let o=m.filter(function(n){return F(j(n.fg,n.bg))!=="fail"}).length,e=m.length-o,r=Math.round(o/m.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",o,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${P("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",r+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:r})}">
                <div class="admin-wcag-meter-fill" style="width:${r}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(n,d){return L(n,d)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${b()}
          </div>
        </div>
      </div>`}function P(o,e,r){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${T(String(e))}</span>
        <span class="hud-stat-tile-label">${T(r)}</span>
      </div>`}function L(o,e){let r=j(o.fg,o.bg),n=F(r),d=B[n],s=ServerI18n.t(o.nameKey),t=d.labelKey?ServerI18n.t(d.labelKey):d.label,c=n==="fail"?ServerI18n.t("wcagWarnFail"):n==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${T(ServerI18n.t("wcagPairAriaLabel",{name:s,ratio:r.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${T(s)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${T(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${T(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${T(o.fg)}">${T(o.fg)} / ${T(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${r.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${t}</span>
        ${c?`<span class="admin-wcag-warn">\u26A0 ${c}</span>`:""}
      </div>`}function b(){let o=j(N.fg,N.bg),e=F(o),r=B[e],n=r.labelKey?ServerI18n.t(r.labelKey):r.label,d=$(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${x(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${x(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${T(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${T(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${T(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${T(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${r.mod}">${n}</span>
      </div>

      <div class="admin-wcag-levels">
        ${q(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${q(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${q(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${q(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${d.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${d.map(function(s){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${T(s.hex)}"
                title="${T(ServerI18n.t("wcagSuggApplyTitle",{ratio:s.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${T(N.bg)};color:${T(s.hex)}">${T(s.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${s.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function x(o,e,r){let n="wcag-tester-"+r;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${n}">${T(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${T(e)}"></span>
          <input type="text" id="${n}" class="admin-ui-input" data-wcag-tester-${r}
            aria-label="${T(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${T(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function q(o,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${T(o)}</span>
    </div>`}function A(){let o=document.getElementById(y);o&&(o.addEventListener("click",function(e){let r=e.target.closest("[data-wcag-pair-idx]");if(r){S(r);return}let n=e.target.closest("[data-wcag-sugg]");n&&(N.fg=n.dataset.wcagSugg,p())}),o.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let r=e.target.closest("[data-wcag-pair-idx]");r&&(e.preventDefault(),S(r))}),o.addEventListener("input",function(e){let r=e.target.closest("[data-wcag-tester-fg]"),n=e.target.closest("[data-wcag-tester-bg]");r&&/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(N.fg=r.value.toUpperCase(),p()),n&&/^#[0-9A-Fa-f]{6}$/.test(n.value)&&(N.bg=n.value.toUpperCase(),p())}))}function S(o){let e=m[parseInt(o.dataset.wcagPairIdx,10)];e&&(N.fg=e.fg,N.bg=e.bg,p())}function p(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=b())}function l(){let o=document.getElementById("settings-grid");!o||document.getElementById(y)||(o.insertAdjacentHTML("beforeend",w()),A())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&l()})})()});var an=he(()=>{(function(){"use strict";let y="danmu.onboarding.done",T="admin-onboarding-root",j=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,$=!1;window.AdminOnboarding={start:w,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let m=new Set(["live","dashboard"]);function N(){if($||window.AdminOnboarding.isDone()||!m.has(D()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{$||window.AdminOnboarding.isDone()||o()||m.has(D())&&w()},1200)}function D(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function B(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&w()}function w(){$||($=!0,F=0,q())}function P(o){if(!$)return;$=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",x),window.removeEventListener("resize",A);let e=document.getElementById(T);if(e&&e.remove(),o)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function L(){F<j.length-1?(F++,A()):P(!0)}function b(o){let e=o.target.closest("[data-ob-action]");e&&(o.stopPropagation(),e.dataset.obAction==="next"?L():e.dataset.obAction==="skip"&&P(!1))}function x(o){$&&o.key==="Escape"&&(o.preventDefault(),P(!1))}function q(){let o=document.getElementById(T);o&&o.remove();let e=document.createElement("div");e.id=T,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",b),document.addEventListener("keydown",x),window.addEventListener("resize",A),A()}function A(){let o=document.getElementById(T);if(!o)return;let e=j[F],r=j.length,n=p(e.target),d=window.innerWidth,s=window.innerHeight,t="";n?t='<div class="admin-ob-spot" style="left:'+(n.left-8)+"px;top:"+(n.top-8)+"px;width:"+(n.width+16)+"px;height:"+(n.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let c=(d-360)/2,g=s/2-110,a="none";if(n){let k=n.left+n.width/2;e.side==="top"?(c=k-360/2,g=n.top-16,a="bottom"):e.side==="right"?(c=n.right+16+8,g=n.top,a="left"):(c=k-360/2,g=n.bottom+16+8,a="top"),c=Math.max(16,Math.min(d-360-16,c))}let i=j.map(function(k,I){return'<span class="admin-ob-progress-item'+(I===F?" is-current":"")+'">'+(I+1)+" "+l(ServerI18n.t(k.labelKey))+"</span>"+(I<r-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+a+'" style="left:'+c+"px;top:"+g+'px"><div class="admin-ob-count">'+(F+1)+" / "+r+'</div><div class="admin-ob-title">'+l(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(F===r-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+i+"</div></div>";let u=o.querySelector(".admin-ob-bubble");if(!u||!n)return;let v=u.offsetHeight;if(e.side==="top")u.style.top=Math.max(16,n.top-16-8-v)+"px";else if(g+v>s-16){let k=n.top-16-8-v;k>=16?(u.style.top=k+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,s-v-16)+"px",u.setAttribute("data-arrow","none"))}S(u,n)}function S(o,e){let r=o.getAttribute("data-arrow");if(r==="none")return;let n=o.getBoundingClientRect(),d=r==="top"||r==="bottom",s=d?e.left+e.width/2-n.left:e.top+e.height/2-n.top,t=d?n.width:n.height,c=Math.max(16,Math.min(t-32,s-8));o.style.setProperty("--ob-arrow",c+"px")}function p(o){if(!o)return null;let e=document.querySelector(o);if(!e)return null;let r=e.getBoundingClientRect();return r.width<8||r.height<8||r.bottom<0||r.top>window.innerHeight?null:r}function l(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",B),B(),window.addEventListener("hashchange",function(){m.has(D())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var un=he(()=>{var Hi=ge(Ke()),ji=ge(We()),Ui=ge(Ge()),Ki=ge(ze()),Wi=ge(Ve()),Gi=ge(Je()),zi=ge(Ye()),Vi=ge(Qe()),Ji=ge(Xe()),Yi=ge(Ze()),Qi=ge(et()),Xi=ge(tt()),Zi=ge(nt()),es=ge(at()),ts=ge(it()),ns=ge(st()),as=ge(ot()),is=ge(rt()),ss=ge(dt()),os=ge(lt()),rs=ge(ct()),ds=ge(ut()),ls=ge(mt()),cs=ge(pt()),us=ge(vt()),ms=ge(ft()),ps=ge(ht()),vs=ge(gt()),fs=ge(yt()),hs=ge(wt()),gs=ge(bt()),ys=ge(St()),ws=ge(kt()),bs=ge(It()),Ss=ge(Tt()),ks=ge(_t()),Is=ge(Et()),Ts=ge($t()),_s=ge(xt()),Es=ge(Lt()),$s=ge(At()),xs=ge(Ct()),Ls=ge(Bt()),As=ge(Ft()),Cs=ge(Dt()),Bs=ge(Mt()),Fs=ge(Nt()),Ds=ge(Pt()),Ms=ge(Rt()),Ns=ge(Ot()),Ps=ge(qt()),Rs=ge(Ht()),Os=ge(jt()),qs=ge(Ut()),Hs=ge(Kt()),js=ge(Wt()),Us=ge(Gt()),Ks=ge(zt()),Ws=ge(Vt()),Gs=ge(Jt()),zs=ge(Yt()),Vs=ge(Qt()),Js=ge(Xt()),Ys=ge(Zt()),Qs=ge(en()),Xs=ge(tn()),Zs=ge(nn()),eo=ge(an())});un();})();
