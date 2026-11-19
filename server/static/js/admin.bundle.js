/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var yn=Object.create;var at=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var ye=(h,f)=>()=>{try{return f||h((f={exports:{}}).exports,f),f.exports}catch(c){throw f=0,c}};var _n=(h,f,c,x)=>{if(f&&typeof f=="object"||typeof f=="function")for(let F of kn(f))!Tn.call(h,F)&&F!==c&&at(h,F,{get:()=>f[F],enumerable:!(x=Sn(f,F))||x.enumerable});return h};var Se=(h,f,c)=>(c=h!=null?yn(In(h)):{},_n(f||!h||!h.__esModule?at(c,"default",{value:h,enumerable:!0}):c,h));var it=ye(()=>{(function(){"use strict";var h=4,f=2500,c=3e3,x=Object.create(null);function F(){return Date.now()}function A(T,L){return(L?"ok:":"err:")+T}function G(T,L){return"var("+T+", "+L+")"}function R(T){return T?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function P(T){for(var L=Array.prototype.slice.call(T.children);L.length>h;){var I=L.shift();I&&I.parentNode&&I.parentNode.removeChild(I)}}function M(T,L){T.remaining=L,T.startedAt=F(),T.timer=setTimeout(function(){w(T)},L)}function D(T){T.timer&&(clearTimeout(T.timer),T.timer=null,T.remaining=Math.max(600,T.remaining-(F()-T.startedAt)))}function C(T){T.timer||!T.el.parentNode||M(T,T.remaining)}function w(T){clearTimeout(T.timer),T.timer=null,T.key&&x[T.key]===T&&delete x[T.key];var L=T.el;!L||!L.parentNode||(L.style.opacity="0",L.style.transform="translateX(8px)",setTimeout(function(){L.parentNode&&L.parentNode.removeChild(L)},180))}function N(T,L){var I=document.getElementById("toast-container");if(I){L=L!==!1;var K=A(String(T),L),_=x[K];if(_&&_.el.parentNode&&F()-_.startedAt<f){_.count+=1,_.countEl&&(_.countEl.textContent="\xD7"+_.count,_.countEl.hidden=!1),D(_),C(_);return}var g=L?G("--color-ink-success","#639922"):G("--color-ink-error","#e24b4a"),d=G("--color-surface","#ffffff"),l=G("--color-text-primary","#1a1a1a"),r=G("--color-border-soft","rgba(0,0,0,.12)"),e=document.createElement("div");e.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+d,"color:"+l,"border:1px solid "+r,"border-left:3px solid "+g,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var p=document.createElement("span");p.style.cssText="display:inline-flex;color:"+g+";flex:0 0 auto",p.innerHTML=R(L);var m=document.createElement("span");m.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",m.textContent=T;var b=document.createElement("span");b.hidden=!0,b.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",e.appendChild(p),e.appendChild(m),e.appendChild(b),I.appendChild(e),P(I),requestAnimationFrame(function(){e.style.opacity="1",e.style.transform="translateX(0)"});var v={key:K,el:e,countEl:b,count:1,timer:null,remaining:c,startedAt:F()};x[K]=v,M(v,c),e.addEventListener("mouseenter",function(){D(v)}),e.addEventListener("mouseleave",function(){C(v)}),e.addEventListener("focusin",function(){D(v)}),e.addEventListener("focusout",function(){C(v)})}}window.showToast=N})()});var st=ye(()=>{(function(){"use strict";var h="admin-details-open-state";function f(){try{return JSON.parse(localStorage.getItem(h))||{}}catch{return{}}}function c(_){try{localStorage.setItem(h,JSON.stringify(_))}catch{}}var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function F(_){return _==null?"":String(_).replace(/[&<>"']/g,function(g){return x[g]})}function A(){var _=document.querySelector("script[nonce]");return _&&_.nonce||""}function G(_,g){var d=A();return"<style"+(_?' id="'+F(_)+'"':"")+(d?' nonce="'+F(d)+'"':"")+">"+(g||"")+"</style>"}var R='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',P=[],M=null;function D(_){if(!_)return!1;for(var g=_,d=null;g&&g!==document.documentElement;d=g,g=g.parentElement)if(g.style&&g.style.display==="none"||g.tagName==="DETAILS"&&!g.open&&!(d&&d.tagName==="SUMMARY"))return!1;return!!(_.offsetParent||_.getClientRects().length)}function C(){var _=document.hidden;P.forEach(function(g){var d=typeof g.el=="function"?g.el():g.el,l=!_&&D(d);if(l&&!g.timer){if(g.immediate!==!1)try{g.tick()}catch{}g.timer=setInterval(g.tick,g.intervalMs)}else!l&&g.timer&&(clearInterval(g.timer),g.timer=0)})}function w(_){var g={el:_.el,intervalMs:_.intervalMs,tick:_.tick,immediate:_.immediate,timer:0};return P.push(g),M||(M=new MutationObserver(function(){C()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",C),document.addEventListener("visibilitychange",C),document.addEventListener("admin-panel-rendered",C)),C(),function(){g.timer&&clearInterval(g.timer);var l=P.indexOf(g);l!==-1&&P.splice(l,1)}}function N(_){let g=document.createElement("textarea");g.value=_,g.setAttribute("readonly",""),g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select();let d=!1;try{d=!!document.execCommand("copy")}catch{d=!1}return document.body.removeChild(g),d}function T(_,g){let d=e=>window.ServerI18n?window.ServerI18n.t(e):e,l=e=>(window.showToast&&window.showToast(e?g||d("sohCopied"):d("sohCopyFailed"),e),e);if(!_)return Promise.resolve(l(!1));let r=navigator.clipboard;return r&&typeof r.writeText=="function"?r.writeText(_).then(()=>l(!0),()=>l(N(_))):Promise.resolve(l(N(_)))}let L=/^[=+\-@\t\r\n]/;function I(_){let g=_==null?"":String(_);return typeof _=="string"&&L.test(g)?"'"+g:g}function K(_){let g=I(_);return/[",\r\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}window.AdminUtils={csvCell:K,csvSafeText:I,copyText:T,DETAILS_STATE_KEY:h,loadDetailsState:f,saveDetailsState:c,escapeHtml:F,cspNonce:A,styleTag:G,closeIcon:R,pollWhileVisible:w}})()});var ot=ye(()=>{(function(){"use strict";function h(f,c,x,F){let A=f.querySelector("[data-route-breadcrumb]");if(!A)return;let G=Array.from(f.querySelectorAll(".admin-dash-nav-row[data-route]")),R=G.find(I=>I.dataset.route===c)||G.find(I=>I.dataset.route===x);if(!R){A.replaceChildren(),A.hidden=!0;return}let P="",M=R.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){P=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let C=(R.querySelector("[data-i18n]")||R.querySelector("span:nth-child(2)")||R).textContent.trim(),w=F?f.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=w?(w.querySelector(".admin-tabs-btn-label")||w).textContent.trim():"",T=[P===C?"":P,C,N].filter(Boolean),L=document.createDocumentFragment();T.forEach((I,K)=>{if(K){let d=document.createElement("span");d.className="admin-dash-breadcrumb-sep",d.setAttribute("aria-hidden","true"),d.textContent="\u203A",L.appendChild(d)}let _=document.createElement("span"),g=K===T.length-1;_.className="admin-dash-breadcrumb-item"+(g?" is-current":""),g&&_.setAttribute("aria-current","page"),_.textContent=I,L.appendChild(_)}),A.replaceChildren(L),A.hidden=T.length===0}window.AdminBreadcrumb={render:h}})()});var rt=ye(()=>{(function(h){"use strict";let f={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function c(N){return Array.isArray(N.sections)?N.sections:N.section?[N.section]:[]}function x(N){return!!f[N]}function F(N){return f[N]||null}let A={moderation:{filters:"blacklist",fingerprints:"bans"}},G={viewer:{themes:"sec-themes",defaults:"sec-viewer-config-defaults",fields:"sec-viewer-config-defaults",page:"sec-viewer-theme",limits:"sec-viewer-config-limits"}};function R(N,T){if(!T)return null;let L=G[N]&&G[N][T];if(L)return{tab:null,section:L};let I=f[N];if(!I)return null;let K=I.tabs.find(_=>_.folds&&_.folds[T]);return K?{tab:K.slug,section:K.folds[T]}:null}function P(N,T){let L=f[N];if(!L)return null;let I=d=>L.tabs.some(l=>l.slug===d),K=R(N,T);if(K)return K.tab;let _=A[N]?.[T];if(_&&I(_))return _;if(T&&I(T))return T;let g=h.AdminRouter?.tabMemory?.get?.(N);return g&&I(g)?g:L.defaultTab}function M(N,T,L){let I=f[N];if(!I)return null;let K=document.createElement("div");return K.className="admin-tabs-strip",K.dataset.nav=N,K.setAttribute("role","tablist"),K.setAttribute("aria-label",N+" tabs"),I.tabs.forEach(_=>{let g=document.createElement("button");g.type="button",g.className="admin-tabs-btn"+(_.slug===T?" is-active":""),g.dataset.nav=N,g.dataset.tab=_.slug,g.setAttribute("role","tab"),g.setAttribute("aria-selected",_.slug===T?"true":"false");let d=document.createElement("span");d.className="admin-tabs-btn-label",d.textContent=_.labelKey?ServerI18n.t(_.labelKey):_.label,g.appendChild(d);let l=document.createElement("span");l.className="admin-tabs-btn-count",l.dataset.tabCount=_.slug,l.textContent=D[N]&&D[N][_.slug]?D[N][_.slug]:"",g.appendChild(l),g.addEventListener("click",()=>{typeof L?.onSelect=="function"&&L.onSelect(_.slug)}),K.appendChild(g)}),K}let D={};function C(N,T,L){if(!f[N])return;D[N]=D[N]||{},D[N][T]=L==null?"":String(L);let I=document.querySelector('.admin-tabs-strip[data-nav="'+N+'"] [data-tab-count="'+T+'"]');I&&(I.textContent=D[N][T])}function w(N,T,L){let I=f[N];!I||!L||I.tabs.forEach(K=>{let _=K.slug===T,g=new Map;c(K).forEach(d=>{let l=L.querySelector("#"+d);if(!l)return;l.style.display=_?"":"none";let r=g.get(l.parentElement);_&&K.folds&&r&&r.nextElementSibling!==l&&r.after(l),g.set(l.parentElement,l)})})}h.AdminTabs={hasTabsFor:x,getConfig:F,foldFor:R,resolveActiveTab:P,renderTabStrip:M,applyTabSectionVisibility:w,setTabCount:C}})(window)});var lt=ye(()=>{(function(h,f){"use strict";let c="data-quick-action-host",x="admin-quick-action-bar";function F(M){if(M?.host instanceof HTMLElement)return M.host;let D=f.querySelector(".admin-dash-main");if(!D)return f.body;let C=D.querySelector(`[${c}]`);if(!C){C=f.createElement("div"),C.setAttribute(c,"");let w=D.querySelector(".admin-dash-topbar"),T=D.querySelector("[data-admin-tabs-host]")||w;T&&T.parentNode?T.insertAdjacentElement("afterend",C):D.prepend(C)}return C}function A(M,D){typeof h.showToast=="function"&&h.showToast(M,D!==!1)}function G({label:M,undoLabel:D,onUndo:C,windowMs:w}){let N=F(),T=N.querySelector("."+x);T&&T.remove();let L=f.createElement("div");L.className=x,L.setAttribute("role","status"),L.setAttribute("aria-live","polite");let I=f.createElement("span");I.className=x+"-text",I.textContent="\u2713 "+M,L.appendChild(I);let K=f.createElement("button");K.type="button",K.className=x+"-undo",K.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),L.appendChild(K);let _=()=>{L.classList.add("is-leaving"),setTimeout(()=>L.remove(),200)},g=setTimeout(_,w||5e3);return K.addEventListener("click",async()=>{clearTimeout(g),K.disabled=!0,K.textContent=ServerI18n.t("qaUndoing");try{await C(),A(ServerI18n.t("qaUndone"),!0)}catch(d){A(ServerI18n.t("qaUndoFailed",{msg:d?.message||String(d)}),!1)}finally{_()}}),N.appendChild(L),requestAnimationFrame(()=>L.classList.add("is-entering")),L}function R(M){if(!M||typeof M!="object")return;let D=M.label||ServerI18n.t("qaDone");M.toast!==!1&&A(D,!0),M.undo&&typeof M.undo.run=="function"&&G({label:D,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function P(){f.querySelectorAll("."+x).forEach(M=>M.remove())}h.AdminQuickAction={fire:R,dismissAll:P}})(window,document)});var dt=ye(()=>{(function(){"use strict";let h="admin-hud-modal-root",f=null,c=null,x='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function F(){let P=document.getElementById(h);return P?Array.prototype.slice.call(P.querySelectorAll(x)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function A(P){let M=document.getElementById(h);if(M&&M.remove(),f&&(f(P),f=null),document.removeEventListener("keydown",G),c&&typeof c.focus=="function")try{c.focus()}catch{}c=null}function G(P){if(P.key==="Escape"){P.preventDefault(),A(!1);return}if(P.key==="Tab"){let M=F();if(!M.length){P.preventDefault();return}let D=M[0],C=M[M.length-1],w=document.activeElement;P.shiftKey?(w===D||!M.includes(w))&&(P.preventDefault(),C.focus()):(w===C||!M.includes(w))&&(P.preventDefault(),D.focus())}}function R(P){return new Promise(M=>{f&&A(!1),f=M,c=document.activeElement;let{icon:D="\u26A0",title:C=ServerI18n.t("hudConfirmTitle"),subtitle:w="",severity:N="warn",body:T="",titleText:L,bodyText:I,confirmLabel:K=ServerI18n.t("hudConfirmLabel"),cancelLabel:_=ServerI18n.t("cancel"),width:g=480}=P||{},d=document.createElement("div");d.id=h,d.className=`admin-hud-modal admin-hud-modal--${N}`,d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),d.setAttribute("aria-labelledby","admin-hud-modal-title");let l=w?`<div class="admin-hud-modal__subtitle">${w}</div>`:"",r=typeof T=="string"?T:"",e=typeof T!="string"&&T&&T.nodeType;if(d.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${g}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${C}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${r}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${_}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${K}</button>
          </div>
        </div>`,L!=null){let m=d.querySelector(".admin-hud-modal__title");m&&(m.textContent=String(L))}if(I!=null){let m=d.querySelector("[data-modal-body]");m&&(m.textContent=String(I))}if(e){let m=d.querySelector("[data-modal-body]");m.innerHTML="",m.appendChild(T)}d.addEventListener("click",function(m){let b=m.target.closest("[data-modal-action]");b&&(m.stopPropagation(),A(b.dataset.modalAction==="confirm"))}),document.body.appendChild(d),document.addEventListener("keydown",G);let p=N==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{d.querySelector(`.admin-hud-modal__btn--${p}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:R}})()});var ct=ye(()=>{(function(){"use strict";var h=8,f=30;function c(N,T){return window.ServerI18n?window.ServerI18n.t(N,T):N}function x(N,T){return N?N.length>T?N.slice(0,T)+"\u2026":N:""}function F(N){return c(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function A(N,T){return N==="keyword"?x(T,f):T.slice(0,h)}async function G(N,T,L){if(!T)return{ok:!1,error:"empty-value"};try{var I={type:N==="keyword"?"keyword":"fingerprint",value:T};L&&(I.reason=L);var K=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});return K.ok?{ok:!0}:{ok:!1,error:"HTTP "+K.status}}catch(_){return{ok:!1,error:_&&_.message||"network"}}}async function R(N,T,L){if(!N)return{ok:!1,error:"empty-fingerprint"};var I=parseInt(T||0,10)||0;try{var K=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:I,reason:L||"",kind:"ban"})});return K.ok?{ok:!0}:{ok:!1,error:"HTTP "+K.status}}catch(_){return{ok:!1,error:_&&_.message||"network"}}}async function P(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var T=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return T.ok?{ok:!0}:{ok:!1,error:"HTTP "+T.status}}catch(L){return{ok:!1,error:L&&L.message||"network"}}}function M(N,T){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:c("lfBlockTitle"),subtitle:c("cfmSubBlockFuture"),severity:"danger",bodyText:c("blockConfirm").replace("{label}",F(N)).replace("{display}",A(N,T)),confirmLabel:c("lfBlockTitle")}):(window.showToast&&window.showToast(c("blockFailed"),!1),Promise.resolve(!1))}function D(N,T,L){window.showToast&&window.showToast(N?c(T,L||{}):c("blockFailed"),!!N)}async function C(N,T){if(!N||(T=T||{},!T.skipConfirm&&!await M("keyword",N)))return!1;var L=await G("keyword",N);return D(L.ok,"blockFallback",{label:F("keyword"),display:A("keyword",N)}),L.ok}async function w(N,T){if(!N||(T=T||{},!T.skipConfirm&&!await M("fingerprint",N)))return!1;var L=await G("fingerprint",N,T.reason);return D(L.ok,"blockFallback",{label:F("fingerprint"),display:A("fingerprint",N)}),L.ok}window.AdminModeration={callBlock:G,banFingerprint:R,recall:P,blockKeyword:C,blockFingerprint:w}})()});var ut=ye(()=>{(function(){"use strict";function f(R){let P=document.createElement("div");return P.className="admin-skel-slow",P.hidden=!0,P.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",R.appendChild(P),setTimeout(function(){P.isConnected&&(P.hidden=!1)},3e3),R}function c(R,P){let M=document.createElement("div");if(M.className="admin-skel "+(R||""),P)for(let D in P)M.style[D]=P[D];return M}function x({rows:R=8}={}){let P=document.createElement("div");P.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{M.appendChild(c("admin-skel-bar",{width:D+"px",height:"10px"}))}),P.appendChild(M);for(let D=0;D<R;D++){let C=document.createElement("div");C.className="admin-skel-list__row",C.appendChild(c("admin-skel-circle",{width:"24px",height:"24px"}));let w=document.createElement("div");w.className="admin-skel-list__col",w.appendChild(c("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),w.appendChild(c("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),C.appendChild(w),C.appendChild(c("admin-skel-bar",{width:"60px",height:"10px"})),P.appendChild(C)}return f(P)}function F({cols:R=4}={}){let P=document.createElement("div");P.className="admin-skel-stats",P.style.gridTemplateColumns=`repeat(${R}, 1fr)`;for(let M=0;M<R;M++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(c("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(c("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(c("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(c("admin-skel-bar",{width:"90px",height:"8px"})),P.appendChild(D)}return f(P)}function A(){let R=document.createElement("div");R.className="admin-skel-card admin-skel-chart";let P=document.createElement("div");P.className="admin-skel-chart__head",P.appendChild(c("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",P.appendChild(M),P.appendChild(c("admin-skel-bar",{width:"80px",height:"10px"})),R.appendChild(P);let D=document.createElement("div");D.className="admin-skel-chart__body";let C=document.createElement("div");C.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>C.appendChild(c("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(C);let w=document.createElement("div");return w.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(T=>w.appendChild(c("admin-skel-bar admin-skel-chart__bar",{height:T+"%"}))),D.appendChild(w),R.appendChild(D),f(R)}function G(R,P){let M={listRows:x,statsTiles:F,chart:A}[R];return M?M(P||{}).outerHTML:""}window.AdminSkeletons={listRows:x,statsTiles:F,chart:A,html:G}})()});var mt=ye(()=>{(function(){"use strict";let h={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},f={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:h.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:h.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:h.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:h.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:h.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:h.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:h.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:h.cyan}};function c(F){let{icon:A="\xB7",title:G="",desc:R="",accent:P=h.cyan,ctaAccent:M,actionLabel:D,action:C,extra:w}=F||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",P),M&&N.style.setProperty("--admin-empty-cta",M);let T=document.createElement("div");if(T.className="admin-empty__icon",T.textContent=A,N.appendChild(T),G){let L=document.createElement("div");L.className="admin-empty__title",L.textContent=G,N.appendChild(L)}if(R){let L=document.createElement("div");L.className="admin-empty__desc",L.textContent=R,N.appendChild(L)}if(D){let L=document.createElement("button");L.type="button",L.className="admin-empty__btn",L.textContent=D,typeof C=="function"&&L.addEventListener("click",C),N.appendChild(L)}if(w){let L=document.createElement("div");L.className="admin-empty__extra",typeof w=="string"?L.innerHTML=w:L.appendChild(w),N.appendChild(L)}return N}function x(F){let A=f[F];if(!A)return c({title:ServerI18n.t("emptyNoData"),desc:""});let G=Object.assign({},A,{title:A.titleKey?ServerI18n.t(A.titleKey):A.title,desc:A.descKey?ServerI18n.t(A.descKey):A.desc,actionLabel:A.actionLabelKey?ServerI18n.t(A.actionLabelKey):A.actionLabel});return c(G)}window.AdminEmpty={render:x,renderCustom:c,PRESETS:f}})()});var pt=ye(()=>{(function(){"use strict";var h=8;function f(G){return G?String(G).slice(0,h):""}function c(G){if(!G||typeof G!="object")return{nickname:"",fp:"",ip:""};var R=G.fingerprint||G.fp||G.hash||"",P=G.clientIp||G.client_ip||G.ip||"",M=G.nickname||G.nick||"";return{nickname:String(M||""),fp:String(R||""),ip:String(P||"")}}function x(G){if(!G||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var R=new TextEncoder().encode(String(G));return window.crypto.subtle.digest("SHA-256",R).then(function(P){var M=Array.from(new Uint8Array(P));return M.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function F(G){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var R=document.getElementById("sec-fingerprints");if(R&&!R.open&&(R.open=!0),R)try{R.scrollIntoView({behavior:"smooth",block:"start"})}catch{}x(G).then(function(P){if(P)var M=0,D=setInterval(function(){M+=1;var C=document.querySelector('[data-fp-hash="'+P+'"]');if(C){clearInterval(D),C.classList.add("admin-identity-flash"),setTimeout(function(){C.classList.remove("admin-identity-flash")},2e3);try{C.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(D)},250)})}function A(G){G=G||{};var R=G.nickname||"",P=G.fp||"",M=G.ip||"",D=!!G.compact,C=typeof G.onNicknameClick=="function"?G.onNicknameClick:null,w=typeof G.onFpClick=="function"?G.onFpClick:F,N=document.createElement("span");N.className="admin-identity-row";var T;if(C?(T=document.createElement("button"),T.type="button",T.className="admin-identity-nick is-clickable",T.addEventListener("click",function(d){d.stopPropagation(),C(R)})):(T=document.createElement("span"),T.className="admin-identity-nick"),R)T.textContent="@"+R;else{var L="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var I=ServerI18n.t("anonymousPlaceholder");I&&I!=="anonymousPlaceholder"&&(L=I)}}catch{}T.textContent="@"+L,T.classList.add("is-guest")}if(R&&(T.title=R),N.appendChild(T),P){var K;if(w?(K=document.createElement("button"),K.type="button",K.className="admin-identity-fp is-clickable",K.addEventListener("click",function(d){d.stopPropagation(),w(P)})):(K=document.createElement("span"),K.className="admin-identity-fp"),P==="new"){var _=document.createElement("span");_.className="admin-identity-dot",K.appendChild(_),K.appendChild(document.createTextNode("fp:new"))}else K.textContent="fp:"+f(P);K.title=P,N.appendChild(K)}if(M&&!D){var g=document.createElement("span");g.className="admin-identity-ip",g.textContent=M,g.title=M,N.appendChild(g)}return N}window.AdminIdentity={render:A,parse:c,focusFingerprint:F,hashFp:x,FP_DISPLAY_LEN:h}})()});var ft=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(a,i){return window.csrfFetch(a,i)}function c(a,i){return window.showToast(a,i)}let x="default",F=[],A={},G=null,R=!1,P="sec-themes";function M(){let a=i=>h(ServerI18n.t(i));return`
      <div id="${P}" class="admin-style-themes lg:col-span-2">
        <div class="admin-style-themes-head">
          <span class="admin-ui-group-label" data-i18n="styleThemePacks">${a("styleThemePacks")}</span>
          <span class="admin-style-themes-actions">
            <button type="button" class="admin-ui-action" id="themeNewBtn">${a("themesNewBtn")}</button>
            <button type="button" id="themeReloadBtn" class="admin-ui-action admin-theme-reload-action">${a("themesReloadBtn")}</button>
          </span>
        </div>
        <div id="themesList">
          <span class="theme-pack-muted" style="padding:14px">${a("themesLoading")}</span>
        </div>
        <!-- \u300C<\u4E3B\u984C> \xB7 \u7D30\u90E8\u8A2D\u5B9A\u300D\uFF08\u8A2D\u8A08\u7A3F 08 \xB7 T1\uFF09\u3002\u4E3B\u984C\u6A94\u672C\u8EAB\u662F repo \u88E1\u7684
             YAML\uFF0C\u6539\u5B83\u7B49\u65BC\u6539\u7A0B\u5F0F\u78BC\uFF1B\u9019\u88E1\u8ABF\u7684\u503C\u5B58\u6210\u4E00\u5C64\u8986\u5BEB\uFF0C\u758A\u5728 YAML \u4E4B\u4E0A\u3002
             \u63CF\u908A\u8207\u9670\u5F71\u662F\u6A23\u5F0F\u8868\u7684\u5169\u5217\uFF0C\u9019\u88E1\u5269\u4E0B\u5C11\u7528\u7684\u5B57\u578B\u8207\u9810\u8A2D\u984F\u8272\u3002 -->
        <details class="admin-dsp2-fold admin-style-themes-detail" data-theme-detail-fold>
          <summary id="themeDetailLabel">\u2014</summary>
          <div class="admin-ui-group" id="themeDetail" data-theme-detail>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvFont">${a("themeDetailFont")}</label>
              <span class="val">
                <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvColor">${a("themeDetailColor")}
                <span class="sub">${a("themeDetailColorHint")}</span>
              </label>
              <span class="val">
                <input type="color" class="admin-ui-input" data-theme-ov="color" id="themeOvColor" />
                <button type="button" class="admin-ui-action" data-theme-ov-clear="color" hidden>${a("themeDetailFontInherit")}</button>
              </span>
            </div>
          </div>
          <div class="theme-pack-sample" id="themeDetailPreview">
            <span class="theme-pack-sample-label">${a("themesSampleLabel")}</span>
            <span class="theme-pack-sample-line" data-theme-preview-line>
              <span class="theme-pack-sample-nick">${h(L)}</span>${h(I)}
            </span>
          </div>
        </details>
      </div>`}function D(){if(document.getElementById(P))return!1;let a=document.getElementById("settings-grid");return a?(a.insertAdjacentHTML("beforeend",M()),!0):!1}function C(){document.dispatchEvent(new CustomEvent("admin-themes-changed",{detail:{active:x}}))}function w(){let a=document.getElementById("themesList");a&&window.AdminSkeletons&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function N(a){a&&R||w();try{let i=await f("/admin/themes");if(!i.ok)return!1;let y=await i.json();return x=y.active||"default",F=y.themes||[],A=y.overrides||{},G=y.style_defaults||null,R=!0,r(F,x),m(),C(),!0}catch(i){return console.warn("[Themes] Failed to fetch themes:",i),!1}}async function T(a){let i;try{i=await f("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})}catch{return{ok:!1,error:""}}return i.ok?(x=a,await N(!0)||(G=null,r(F,a),m(),C()),{ok:!0,error:""}):{ok:!1,error:(await i.json().catch(()=>({}))).error||""}}var L="\u5C0F\u660E",I="\u8B1B\u5F97\u597D\uFF01+1";function K(a,i){var y=String(a||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(y)?y:i}function _(a){var i=String(a||"").trim(),y=i.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);return y&&(i="#"+y[1]+y[1]+y[2]+y[2]+y[3]+y[3]),/^[0-9a-fA-F]{6}$/.test(i)&&(i="#"+i),/^#[0-9a-fA-F]{6}$/.test(i)?i.toLowerCase():null}function g(a){var i=A[a.name]||{},y=G&&G.Color&&G.Color.global;return _(i.color)||_(y)||"#ffffff"}function d(a){var i=a.styles||{},y=g(a),k=["color:"+y];if(i.textStroke){var S=Math.max(0,Math.min(6,Number(i.strokeWidth)||0));k.push("-webkit-text-stroke:"+S+"px "+K(i.strokeColor,"#000000")),k.push("paint-order:stroke fill")}if(i.textShadow){var B=Math.max(0,Math.min(40,Number(i.shadowBlur)||0));k.push("text-shadow:0 0 "+B+"px "+y)}var j=(A[a.name]||{}).font_family||G&&G.FontFamily&&G.FontFamily.global;return j&&/^[\w\s-]{1,40}$/.test(j)&&k.push("font-family:'"+j+"', var(--font-sans)"),a.font&&Number(a.font.weight)&&k.push("font-weight:"+Math.max(100,Math.min(900,Number(a.font.weight)))),k.join(";")}function l(a){var i=a.bg&&a.bg.gradient;return i&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(i).trim())?"background:"+String(i).trim():""}function r(a,i){let y=document.getElementById("themesList");if(y){if(y.innerHTML="",a.length===0){y.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}a.forEach(k=>{let S=k.name===i,B=h(ServerI18n.t("theme_"+k.name)!=="theme_"+k.name?ServerI18n.t("theme_"+k.name):k.label||k.name),j=document.createElement("div");j.className=`theme-pack-card${S?" is-active":""}`,j.innerHTML=`
        <div class="theme-pack-name">${B}</div>
        <div class="theme-pack-sample" style="${h(l(k))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${h(d(k))}">
            <span class="theme-pack-sample-nick">${h(L)}</span>
            ${h(I)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${k.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${h(k.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${S?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${h(k.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,y.appendChild(j)}),y.querySelectorAll(".theme-delete-btn").forEach(k=>{k.addEventListener("click",async()=>{let S=k.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let j=await f("/admin/themes/"+encodeURIComponent(S),{method:"DELETE"});if(!j.ok)throw new Error("HTTP "+j.status);c(ServerI18n.t("themeDeleted"),!0),N()}catch{c(ServerI18n.t("themesDeleteFailed"),!1)}})}),y.querySelectorAll(".theme-activate-btn").forEach(k=>{k.addEventListener("click",async()=>{let S=await T(k.dataset.theme);S.ok?c(ServerI18n.t("themeActivated"),!0):c(S.error||ServerI18n.t("setThemeFailed"),!1)})})}}function e(){return F.find(a=>a.name===x)||null}function p(a,i){let y=A[x]||{};if(y[a])return y[a];let k=i&&i.styles||{};return a==="stroke"?k.textStroke?Number(k.strokeWidth)>=3?"thick":"thin":"none":k.textShadow?Number(k.shadowBlur)>=10?"strong":"soft":"none"}function m(){let a=document.getElementById("themeDetail"),i=document.getElementById("themeDetailLabel");if(!a||!i)return;let y=e();if(!y)return;let k=ServerI18n.t("theme_"+y.name)!=="theme_"+y.name?ServerI18n.t("theme_"+y.name):y.label||y.name;i.textContent=ServerI18n.t("themeDetailGroup",{name:k});let S=A[x]||{},B=a.querySelector('[data-theme-ov="color"]');B&&(B.value=_(S.color)||g(y));let j=a.querySelector('[data-theme-ov-clear="color"]');j&&(j.hidden=!S.color),v(y),o(y)}var b=null;async function v(a){let i=document.getElementById("themeOvFont");if(!i)return;if(!b)try{let S=await fetch("/fonts",{credentials:"same-origin"});b=S.ok?(await S.json()).fonts||[]:[]}catch{b=[]}let k=(A[x]||{}).font_family||"";i.innerHTML=`<option value="">${h(ServerI18n.t("themeDetailFontInherit"))}</option>`+b.map(S=>{let B=String(S.name||S);return`<option value="${h(B)}"${B===k?" selected":""}>${h(B)}</option>`}).join("")}function o(a){let i=document.querySelector("[data-theme-preview-line]");i&&i.setAttribute("style",d(a))}async function s(a){try{let i=await f("/admin/themes/"+encodeURIComponent(x)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error("HTTP "+i.status);c(ServerI18n.t("themeDetailSaved"),!0),await N(!0)}catch{c(ServerI18n.t("themeDetailSaveFailed"),!1)}}function u(){let a=document.getElementById("themeDetail");a&&(a.addEventListener("change",i=>{let y=i.target.closest("[data-theme-ov]");y&&s({[y.getAttribute("data-theme-ov")]:y.value})}),a.addEventListener("click",i=>{let y=i.target.closest("[data-theme-ov-clear]");y&&s({[y.getAttribute("data-theme-ov-clear")]:""})}))}function t(){let a=document.getElementById("themeNewBtn");a&&a.addEventListener("click",async()=>{let i=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!i||!i.trim()))try{let y=await f("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:i.trim(),base:x})});if(!y.ok)throw new Error("HTTP "+y.status);c(ServerI18n.t("themeCreated"),!0),N()}catch{c(ServerI18n.t("themesNewFailed"),!1)}})}function n(){let a=D();if(N(),!a)return;u(),t();let i=document.getElementById("themeReloadBtn");i&&i.addEventListener("click",async()=>{try{(await f("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(c(ServerI18n.t("themesReloaded")),N()):c(ServerI18n.t("themesReloadFailed"),!1)}catch{c(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:n,segOf(a){let i=e();return R&&i?p(a,i):null},activeStyles(){let a=e();return a&&a.styles||{}},styleDefaults(){return G},activate:T,refresh(){return N(!0)},setSeg(a,i){return a!=="stroke"&&a!=="shadow"?Promise.resolve():s({[a]:i})}}})()});var vt=ye(()=>{(function(){"use strict";function h(S,B){return window.csrfFetch(S,B)}function f(S,B){return window.showToast(S,B)}var c=window.ServerI18n;function x(S,B){return window.AdminUtils.styleTag(S,B)}let F=null;function A(){let S=document.getElementById("effectEditModal");return S?Array.from(S.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")&&B.getAttribute("aria-hidden")!=="true"):[]}function G(S){let B=document.getElementById("effectEditModal");if(!B||B.classList.contains("hidden"))return;if(S.key==="Escape"){S.preventDefault(),R();return}if(S.key!=="Tab")return;let j=A();if(j.length===0){S.preventDefault();return}let J=j[0],E=j[j.length-1],O=document.activeElement;S.shiftKey&&O===J?(S.preventDefault(),E.focus()):!S.shiftKey&&O===E&&(S.preventDefault(),J.focus())}function R(){let S=document.getElementById("effectEditModal");S&&(S.classList.add("hidden"),S.classList.remove("flex"),S.removeEventListener("keydown",G),F&&(F.focus(),F=null))}let P={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(S){return!!P[S]}};let M=new Map,D=new Map;function C(S){if(!S||!S.styleId||!S.keyframes)return;let B="dme-user-"+S.styleId;if(document.getElementById(B))return;let j=document.createElement("style");j.id=B,j.textContent=S.keyframes,document.head.appendChild(j)}async function w(S){if(M.has(S))return M.get(S);if(D.has(S))return D.get(S);let B=(async()=>{try{let j=await h(`/admin/effects/${encodeURIComponent(S)}/content`);if(!j.ok)throw new Error("content fetch failed");let J=await j.json(),E=J&&J.content||"";if(!E)throw new Error("empty content");let O=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:{}})});if(!O.ok)throw new Error("preview failed");let $=await O.json();if(!$||!$.animation)throw new Error("no animation");return C($),M.set(S,$),$}catch{return M.set(S,"failed"),null}finally{D.delete(S)}})();return D.set(S,B),B}function N(S,B){let j=S.querySelector(".effect-demo-text");if(!j)return;j.style.animation=B.animation||"",B.animationComposition&&(j.style.animationComposition=B.animationComposition),j.style.animationPlayState="paused";let J=L();J&&J.observe(S)}let T=null;function L(){return T||(typeof IntersectionObserver>"u"?null:(T=new IntersectionObserver(S=>{S.forEach(B=>{let j=B.target.querySelector(".effect-demo-text");j&&(j.style.animationPlayState=B.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),T))}let I=null;function K(S){let B=document.getElementById("effectPreviewParams");if(!B)return{};let j;try{let E=S.split(`
`),O=!1,$=0,q=null,Y=0,V={};for(let U of E){let ee=U.trimStart(),W=U.length-ee.length;if(ee.startsWith("params:")){O=!0,$=W;continue}if(!O||ee===""||ee.startsWith("#"))continue;if(W<=$&&!ee.startsWith("params:")){O=!1;continue}let Q=ee.match(/^([a-zA-Z0-9_]+):\s*$/);if(Q&&W===$+2){q=Q[1],Y=W,V[q]={};continue}if(q&&W>Y){let te=ee.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let ie=te[1],le=te[2].trim();if((le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),ie!=="options"){let ue=Number(le);V[q][ie]=isNaN(ue)?le:ue}}if(ee.startsWith("- value:")){V[q].options||(V[q].options=[]);let ie=ee.match(/^- value:\s*(.+)$/);if(ie){let le=ie[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),V[q].options.push({value:le,label:le})}}if(ee.startsWith("label:")&&V[q].options&&V[q].options.length>0){let ie=ee.match(/^label:\s*(.+)$/);if(ie){let le=ie[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),V[q].options[V[q].options.length-1].label=le}}}}j=V}catch{j={}}B.innerHTML="";let J={};for(let[E,O]of Object.entries(j||{})){let $=O.type||"float",q=document.createElement("div");q.className="flex flex-col gap-0.5";let Y=document.createElement("label");if(Y.className="font-mono",Y.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",Y.textContent=`${E} (${$})`,q.appendChild(Y),$==="select"&&Array.isArray(O.options)){let V=document.createElement("select");V.className="admin-ui-select",V.style.cssText="font-size:13px;padding:4px 8px",V.dataset.paramKey=E;for(let U of O.options){let ee=document.createElement("option");ee.value=U.value,ee.textContent=U.label||U.value,U.value===String(O.default)&&(ee.selected=!0),V.appendChild(ee)}J[E]=String(O.default||O.options[0]&&O.options[0].value||""),V.addEventListener("change",()=>{d()}),q.appendChild(V)}else{let V=O.min!=null?O.min:0,U=O.max!=null?O.max:10,ee=O.step!=null?O.step:$==="int"?1:.1,W=O.default!=null?O.default:V,Q=document.createElement("div");Q.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=V,te.max=U,te.step=ee,te.value=W,te.dataset.paramKey=E,te.className="flex-1",te.style.accentColor="var(--color-primary)";let ie=document.createElement("span");ie.className="font-mono",ie.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",ie.textContent=String(W),te.addEventListener("input",()=>{ie.textContent=te.value,d()}),Q.appendChild(te),Q.appendChild(ie),q.appendChild(Q),J[E]=W}B.appendChild(q)}return J}function _(){let S=document.getElementById("effectPreviewParams");if(!S)return{};let B={};return S.querySelectorAll("[data-param-key]").forEach(j=>{B[j.dataset.paramKey]=j.type==="range"?Number(j.value):j.value}),B}async function g(){let S=document.getElementById("effectEditModalTextarea"),B=document.getElementById("effectPreviewText"),j=document.getElementById("effectPreviewStyle"),J=document.getElementById("effectPreviewError");if(!S||!B||!j)return;let E=S.value;if(!E||E===c.t("effectLoadContent")||E===c.t("effectsNetworkError"))return;let O=_();J?.classList.add("hidden");try{let $=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:O})}),q=await $.json().catch(()=>({}));$.ok?(j.textContent=q.keyframes||"",B.style.animation=q.animation||"none",B.style.animationComposition=q.animationComposition||""):(B.style.animation="none",j.textContent="",J&&(J.textContent=q.error||c.t("previewFailed"),J.classList.remove("hidden")))}catch{B.style.animation="none",j.textContent="",J&&(J.textContent=c.t("effectsNetworkError"),J.classList.remove("hidden"))}}function d(){clearTimeout(I),I=setTimeout(()=>g(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${c.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${c.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${c.t("previewText")}</span>
                </div>
                ${x("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${c.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${c.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",R),document.getElementById("effectEditModalCancel").addEventListener("click",R),document.getElementById("effectEditModal").addEventListener("click",E=>{E.target===E.currentTarget&&R()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let E=document.getElementById("effectEditModalTextarea");E&&(K(E.value),d())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{g()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let E=document.getElementById("effectEditModal"),O=document.getElementById("effectEditModalTextarea"),$=document.getElementById("effectEditModalSave"),q=E?.dataset.effectName;if(!(!q||!O)){$.disabled=!0;try{let Y=await h("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:q,content:O.value})}),V=await Y.json().catch(()=>({}));Y.ok?(f(V.message||c.t("effectSaveFallback"),!0),R(),await p()):f(V.error||c.t("saveFailed"),!1)}catch{f(c.t("effectsNetworkError"),!1)}finally{$.disabled=!1}}})),await p(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let E=document.getElementById("effectReloadBtn");E&&(E.disabled=!0);try{let O=await h("/admin/effects/reload",{method:"POST"}),$=await O.json().catch(()=>({}));O.ok?(f($.message||c.t("effectsReloadFallback")),await p()):f($.error||c.t("reloadFailed"),!1)}catch{f(c.t("effectsNetworkError"),!1)}finally{E&&(E.disabled=!1)}});async function S(E){if(!E)return;let O=new FormData;O.append("effectfile",E);try{let $=await h("/admin/effects/upload",{method:"POST",body:O}),q=await $.json().catch(()=>({}));$.ok?(f(q.message||c.t("effectUploadFallback")),await p()):f(q.error||c.t("uploadFailed"),!1)}catch{f(c.t("effectsNetworkError"),!1)}}let B=document.getElementById("effectUploadInput"),j=B&&!B.dataset.uploadWired;j&&(B.dataset.uploadWired="1"),(j?B:null)?.addEventListener("change",async E=>{await S(E.target.files?.[0]),E.target.value=""});let J=document.getElementById("sec-effects-mgmt");if(J){let E=0,O=V=>{V.preventDefault(),E++,J.classList.add("is-drag")},$=V=>{V.preventDefault()},q=V=>{V.preventDefault(),E=Math.max(0,E-1),E===0&&J.classList.remove("is-drag")},Y=async V=>{V.preventDefault(),E=0,J.classList.remove("is-drag");let U=V.dataTransfer?.files?.[0];if(U){if(!/\.(dme|dme\.zip)$/i.test(U.name)){f(c.t("fxToastBadExt"),!1);return}await S(U)}};J.addEventListener("dragenter",O),J.addEventListener("dragover",$),J.addEventListener("dragleave",q),J.addEventListener("drop",Y)}}function r(S){let B=(S||"").toLowerCase();return B.startsWith("glow")||B.includes("neon")?"GLOW":B.startsWith("shake")?"SHAKE":B.startsWith("wave")||B.startsWith("spin")||B.startsWith("bounce")||B.startsWith("zoom")||B.startsWith("fire")||B.includes("motion")?"MOTION":B.startsWith("rainbow")||B.startsWith("blink")||B.includes("color")?"COLOR":B.startsWith("type")||B.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function p(){let S=document.getElementById("effectsList");if(S)try{let B=await h("/admin/effects");if(!B.ok){S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+c.t("effectsLoadFailed")+"</span>";return}let j=await B.json();e.all=j.effects||[],m(),v()}catch{S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+c.t("effectsNetworkError")+"</span>"}}function m(){let S=document.getElementById("effectsFilterRow");if(!S)return;let B={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach($=>{B[r($.name)]+=1});let j=e.all.length,J=[["ALL",c.t("fxChipAll"),j],["GLOW",c.t("fxCatGlow"),B.GLOW],["MOTION",c.t("fxCatMotion"),B.MOTION],["COLOR",c.t("fxCatColor"),B.COLOR],["SHAKE",c.t("fxCatShake"),B.SHAKE],["TEXT",c.t("fxCatText"),B.TEXT]];B.MISC>0&&J.push(["MISC",c.t("fxCatMisc"),B.MISC]);let E=J.map(([$,q,Y])=>`<span class="hud-filter-chip ${e.filter===$?"is-active":""}" data-effect-filter="${$}">${q} ${Y}</span>`).join(""),O=S.querySelector("[data-toolbar-spacer]");O?(S.querySelectorAll("[data-effect-filter]").forEach($=>$.remove()),O.insertAdjacentHTML("beforebegin",E)):S.innerHTML=E,S.querySelectorAll("[data-effect-filter]").forEach($=>{$.addEventListener("click",()=>{e.filter=$.dataset.effectFilter,m(),v()})})}function b(S){let B=($,q)=>{let Y=document.querySelector($);Y&&(Y.textContent=q==null?"\u2014":String(q))},j=S.length,J=S.filter($=>$.enabled!==!1).length,E=new Set(S.map($=>r($.name))),O=S.filter($=>!P[$.name]).length;B("[data-eflib-total]",j),B("[data-eflib-active]",J),B("[data-eflib-cats]",E.size),B("[data-eflib-user]",O)}function v(){let S=document.getElementById("effectsList");if(!S)return;let B=e.all;b(B);let j=e.filter==="ALL"?B:B.filter(J=>r(J.name)===e.filter);if(!j.length){S.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(B.length?c.t("fxNoFilterMatch"):c.t("noEffectsLoaded"))+"</span>";return}T&&T.disconnect(),S.innerHTML="",j.forEach(J=>{let E=r(J.name),O=E==="GLOW"?"is-glow":E==="COLOR"?"is-color":E==="TEXT"?"is-text":"",$=P[J.name]||"",q=!!$,Y=document.createElement("div");Y.className="hud-effect-card"+(e.selected===J.name?" is-selected":""),Y.dataset.effectName=J.name,Y.title=[J.description,`file: ${J.filename}`].filter(Boolean).join(`
`);var V="effect_"+J.name;let U=c.t(V)!==V?c.t(V):J.label||J.name,ee=q?"built-in":"user",W=$?`animation:${$};animation-play-state:paused;`:"";if(Y.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${o(c.t("fxCat"+E.charAt(0)+E.slice(1).toLowerCase())||E)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${O}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${o(U)}</div>
          <div class="hud-effect-card-meta">${o(ee)} \xB7 ${o(J.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${c.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${c.t("lbDelete")}</button>
        </div>
      `,S.appendChild(Y),$){let ie=L();ie&&ie.observe(Y)}else{let ie=M.get(J.name);ie&&ie!=="failed"?(C(ie),N(Y,ie)):ie!=="failed"&&w(J.name).then(le=>{if(!le)return;let ue=S.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(J.name)}"]`);ue&&N(ue,le)})}Y.addEventListener("click",ie=>{ie.target.closest("[data-role]")||i(J)});let Q=Y.querySelector('[data-role="edit"]'),te=Y.querySelector('[data-role="delete"]');Q.addEventListener("click",async()=>{let ie=document.getElementById("effectEditModal"),le=document.getElementById("effectEditModalTitle"),ue=document.getElementById("effectEditModalFile"),me=document.getElementById("effectEditModalTextarea"),Ie=document.getElementById("effectEditModalSave");if(!ie)return;F=document.activeElement instanceof HTMLElement?document.activeElement:null,le.textContent=J.label||J.name,ue.textContent=J.filename,me.value=c.t("effectLoadContent"),me.disabled=!0,Ie.disabled=!0,ie.dataset.effectName=J.name,ie.classList.remove("hidden"),ie.classList.add("flex"),ie.addEventListener("keydown",G),me.focus();let Ee=document.getElementById("effectPreviewText"),Le=document.getElementById("effectPreviewStyle"),re=document.getElementById("effectPreviewError"),oe=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),Le&&(Le.textContent=""),re&&re.classList.add("hidden"),oe&&(oe.innerHTML="");try{let ce=await h(`/admin/effects/${encodeURIComponent(J.name)}/content`),z=await ce.json().catch(()=>({}));ce.ok?(me.value=z.content||"",me.disabled=!1,Ie.disabled=!1,me.focus(),K(me.value),g()):(me.value=z.error||c.t("effectLoadContentFailed"),f(z.error||c.t("effectLoadContentFailed"),!1))}catch{me.value=c.t("effectsNetworkError"),f(c.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let ie=J.label||J.name;if(await window.HudConfirm?.open({icon:"\u2297",title:c.t("fxDeleteTitle"),subtitle:c.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${c.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${ie}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${c.t("fxDeleteWarn")}
                </div>`,confirmLabel:c.t("fxDeleteConfirm"),cancelLabel:c.t("cancel"),width:400}))try{let ue=await h("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J.name})}),me=await ue.json().catch(()=>({}));ue.ok?(f(me.message||c.t("effectDeleteFallback"),!0),await p()):f(me.error||c.t("deleteFailed"),!1)}catch{f(c.t("effectsNetworkError"),!1)}})})}function o(S){return String(S??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(S){let B={name:"",label:"",description:"",params:[]};if(!S)return B;let j=S.split(`
`),J="top",E=null;for(let O of j){let $=O.replace(/\r$/,""),q=$.trimStart();if(!q||q.startsWith("#"))continue;let Y=$.length-q.length;if(Y===0){if(J="top",E&&(B.params.push(E),E=null),q==="params:"){J="params";continue}let V=q.match(/^([a-z_]+):\s*(.+)$/);V&&(V[1]==="name"?B.name=V[2].trim():V[1]==="label"?B.label=V[2].trim():V[1]==="description"&&(B.description=V[2].trim()));continue}if(!(J!=="params"&&J!=="param-fields"&&J!=="options")){if(Y===2&&(J==="params"||J==="param-fields"||J==="options")){E&&(B.params.push(E),E=null);let V=q.match(/^(\w+):$/);V&&(E={key:V[1]},J="param-fields");continue}if(Y===4&&J==="param-fields"&&E){let V=q.match(/^(\w+):\s*(.*)$/);if(V){let U=V[1],ee=V[2].trim();U==="label"?E.label=ee:U==="type"?E.type=ee:U==="default"?E.default=ee:U==="min"?E.min=parseFloat(ee):U==="max"?E.max=parseFloat(ee):U==="step"?E.step=parseFloat(ee):U==="options"&&(E.options=[],J="options")}continue}if(J==="options"&&E&&Y>=6){let V=q.match(/^-\s*value:\s*(.+)$/);V&&(E.options||(E.options=[]),E.options.push({value:V[1].trim(),label:V[1].trim()}));let U=q.match(/^label:\s*(.+)$/);U&&E.options&&E.options.length>0&&(E.options[E.options.length-1].label=U[1].trim())}}}return E&&B.params.push(E),B}function u(S,B){let j=S.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),J=j?j[1]:"",E=S.match(/^animation:\s*["']?(.+?)["']?\s*$/m),O=E?E[1].trim():"";for(let $ of B.params){let q=$.default!==void 0?$.default:"",Y=new RegExp(`\\{${$.key}\\}`,"g");J=J.replace(Y,q),O=O.replace(Y,q)}return{keyframes:J,animation:O}}function t(S,B){if(S==="COLOR"){let j=B.find(J=>J.key==="duration");if(j&&j.default){let J=parseFloat(j.default);if(J<.25)return"crimson";if(J<.33)return"amber"}}if(S==="MOTION"){let j=B.find(J=>J.key==="height");if(j&&j.default){let J=parseFloat(j.default);if(J>30)return"crimson";if(J>24)return"amber"}}return"lime"}function n(S,B){return S==="COLOR"?B==="crimson"?c.t("fxHintFlashBlock"):B==="amber"?c.t("fxHintFlashWarn"):c.t("fxHintFlashOk"):B==="crimson"?c.t("fxHintAmpBlock"):B==="amber"?c.t("fxHintAmpWarn"):c.t("fxHintAmpOk")}function a(S,B){let j=s(B),{keyframes:J,animation:E}=u(B,j),O=r(S.name),$=j.params.filter(me=>me.type!=="select"),q=j.params.filter(me=>me.type==="select"),Y=t(O,j.params),V=Y==="crimson"?"BLOCK":Y==="amber"?"WARN":"OK",U=n(O,Y),ee="fx-anim-"+S.name.replace(/[^a-z0-9]/gi,"-"),W=J&&E?x(ee,J):"",Q=E?`animation:${E};animation-play-state:running;`:"",te=$.map(me=>{let Ie=parseFloat(me.default)||0,Ee=me.min??0,Le=me.max??100,re=Math.max(0,Math.min(100,(Ie-Ee)/(Le-Ee)*100)),oe=(me.label||"").match(/\(([^)]+)\)$/),ce=oe?oe[1]:"",z=me.label||me.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${o(z)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Ie}<span style="color:var(--color-text-muted);margin-left:2px">${o(ce)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${re}%"></div>
          <div class="fx-slider-knob" style="left:${re}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ee}${o(ce)}</span><span>${Le}${o(ce)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${c.t("fxNoNumericParams")}</span>`,ie=q.map(me=>{let Ie=me.options||[],Ee=String(me.default||""),Le=Ie.map(re=>`<span class="fx-radio-btn${re.value===Ee||re.label===Ee?" is-active":""}">${o(re.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${o(me.label||me.key)}</div>
        <div class="fx-radio-group">${Le||"<span>\u2014</span>"}</div>
      </div>`}).join(""),le=["dark","light","photo"].map(me=>{let Ie=me==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${me}">
        <span class="fx-preview-bg-label">${me.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Q}color:${Ie}">ABC</span>
      </div>`}).join(""),ue=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${c.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${te}</div>
      </div>`;return ie&&(ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${c.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${ie}</div>
      </div>`),ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${c.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${le}</div>
      </div>
      <div class="fx-warn-box${Y!=="lime"?" is-"+Y:""}">
        <span class="fx-warn-chip${Y!=="lime"?" is-"+Y:""}">${V}</span>
        <span class="fx-warn-text">${o(U)}</span>
      </div>
    </div>`,ue}async function i(S){e.selected=S.name;let B=document.getElementById("effectsInspector"),j=document.getElementById("effectsInspectorTitle"),J=document.getElementById("effectsInspectorKicker"),E=document.getElementById("effectsInspectorBody");if(B){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),j&&(j.textContent=S.label||S.name),J&&(J.textContent="LOADING"),E&&(E.className="hud-inspector-body",E.textContent="# "+c.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(O=>{O.classList.toggle("is-selected",O.dataset.effectName===S.name)});try{let O=await h(`/admin/effects/${encodeURIComponent(S.name)}/content`),$=await O.json().catch(()=>({}));if(O.ok){let q=$.content||"";E&&(E.className="hud-inspector-body has-param-panel",E.innerHTML=a(S,q)),J&&(J.textContent=r(S.name))}else E&&(E.className="hud-inspector-body",E.textContent="# "+($.error||c.t("effectLoadContentFailed"))),J&&(J.textContent="ERROR")}catch{E&&(E.className="hud-inspector-body",E.textContent="# "+c.t("effectsNetworkError")),J&&(J.textContent="NETWORK")}}}function y(){let S=document.getElementById("effectsInspectorReload"),B=document.getElementById("effectsInspectorEdit");S?.addEventListener("click",async()=>{if(!e.selected){f(c.t("fxSelectFirst"),!1);return}let j=e.all.find(J=>J.name===e.selected);j&&await i(j)}),B?.addEventListener("click",()=>{if(!e.selected){f(c.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",y())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var ht=ye(()=>{(function(){"use strict";var h={};window.DanmuEvents={on:function(f,c){h[f]||(h[f]=[]),h[f].push(c)},off:function(f,c){h[f]=(h[f]||[]).filter(function(x){return x!==c})},emit:function(f,c){(h[f]||[]).forEach(function(x){x(c)})}}})()});var gt=ye(()=>{(function(){"use strict";let h="sec-events",f="/admin/audit?limit=200",x=window.AdminUtils&&window.AdminUtils.escapeHtml||function(_){return String(_).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},F={events:[],filterSev:"all",filterCat:"all",timer:0};function A(_){let g=(_.source||_.kind||"").toLowerCase(),d=(_.action||"").toLowerCase();return g.includes("plugin")||d.includes("plugin")?"plugin":g.includes("webhook")||d.includes("webhook")?"webhook":g.includes("rate")||d.includes("rate")||d.includes("limit")?"rate":g.includes("filter")||d.includes("filter")?"filter":g.includes("overlay")||d.includes("overlay")||g==="broadcast"?"overlay":g.includes("backup")||d.includes("backup")?"backup":g.includes("msg")||g==="messaging"?"msg":g.includes("ws")||g==="websocket"?"ws":"system"}let G=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,R=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function P(_){let g=(_.action||_.kind||"").toLowerCase();return _.severity?_.severity:G.test(g)?"error":R.test(g)?"warn":"info"}function M(_){let g=_.source||"system",d=_.action||_.kind||"";return d?`${g.toUpperCase()}_${d.toUpperCase()}`:g.toUpperCase()}function D(_){if(!_)return"\u2014";let g=new Date(_*1e3),d=l=>String(l).padStart(2,"0");return`${d(g.getHours())}:${d(g.getMinutes())}:${d(g.getSeconds())}`}function C(_){if(_.message)return _.message;let g=_.meta||{},d=[];if(g.from&&g.to)d.push(`${g.from} \u2192 ${g.to}`);else if(g.text_preview)d.push(`"${g.text_preview.slice(0,60)}"`);else if(Object.keys(g).length){let l=Object.keys(g).slice(0,3);for(let r of l)d.push(`${r}=${JSON.stringify(g[r]).slice(0,30)}`)}return d.length?d.join(" \xB7 "):`${_.source||"system"}.${_.action||_.kind||"?"}`}function w(){return`
      <div id="${h}" class="admin-ev-v4 hud-page-stack lg:col-span-2" style="display:none">
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
      </div>`}function N(){let _=document.querySelector("[data-ev-rows]");if(!_)return;let g=F.events,d=g.filter(e=>!(F.filterSev!=="all"&&P(e)!==F.filterSev||F.filterCat!=="all"&&A(e)!==F.filterCat));d.length===0?(_.innerHTML="",window.AdminEmpty?_.appendChild(window.AdminEmpty.render("events")):_.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):_.innerHTML=d.map(e=>{let p=P(e);return`
          <div class="admin-ev-v4__row" data-sev="${p}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${x(D(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${p}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${p}">${x(M(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${x(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${x(C(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:g.length,info:0,warn:0,error:0};for(let e of g)l[P(e)]+=1;Object.keys(l).forEach(e=>{let p=document.querySelector(`[data-ev-cnt="${e}"]`);p&&(p.textContent=String(l[e]))});let r=document.querySelector("[data-ev-total]");r&&(r.textContent=`${d.length} / ${g.length}`)}async function T(){try{let _=await fetch(f,{credentials:"same-origin"});if(!_.ok)return;let g=await _.json();F.events=Array.isArray(g.events)?g.events:[],N()}catch{}}function L(){let _=document.getElementById(h);_&&_.addEventListener("click",g=>{let d=g.target.closest("[data-ev-sev]");if(d){_.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===d)),F.filterSev=d.dataset.evSev,N();return}let l=g.target.closest("[data-ev-cat]");if(l){_.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===l)),F.filterCat=l.dataset.evCat,N();return}let r=g.target.closest("[data-ev-action]");if(r){if(r.dataset.evAction==="refresh")T();else if(r.dataset.evAction==="export"){let e=new Blob([JSON.stringify(F.events,null,2)],{type:"application/json"}),p=URL.createObjectURL(e),m=document.createElement("a");m.href=p,m.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(p),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function I(){let _=document.querySelector(".admin-dash-grid"),g=document.getElementById(h);if(!g)return;let l=(_?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";g.style.display=l?"":"none",l?(T(),F.timer||(F.timer=setInterval(T,15e3))):F.timer&&(clearInterval(F.timer),F.timer=0)}function K(){let _=document.getElementById("settings-grid");!_||document.getElementById(h)||(_.insertAdjacentHTML("beforeend",w()),L(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&K(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{K(),I()}),K()})})()});var bt=ye(()=>{(function(){"use strict";let h="sec-modqueue",f="/admin/modqueue/list",F=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},A={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},G={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},R={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function P(d){let l=0,r=String(d||"");for(let e=0;e<r.length;e++)l=l*31+r.charCodeAt(e)&65535;return l%360}function M(d){if(!d.created_at_ms)return null;let l=(Date.now()-d.created_at_ms)/1e3,r=Math.max(0,A.autoRejectSec-l);return Math.ceil(r)}function D(d,l){let r=(d.severity||"low").toLowerCase(),e=G[r]||G.low,p=P(d.fp),m=String(d.fp||"\u2014").slice(0,8),b=d.nick||d.nickname||ServerI18n.t("audienceAnonymous"),v=(b||"?").slice(0,2).toUpperCase(),o=l==="pending"?M(d):null,s=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${F(d.id||"")}">${F(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${F(d.id||"")}">${F(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${F(d.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",u=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${F(ServerI18n.t("modqueueStampApproved"))} \xB7 ${F(d.resolved_by||"admin")} \xB7 ${F(d.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${d.auto_rejected?`${F(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${F(ServerI18n.t("modqueueAutoRejectTimeout",{n:A.autoRejectSec}))}`:`${F(ServerI18n.t("modqueueStampRejected"))} \xB7 ${F(d.resolved_by||"admin")} \xB7 ${F(d.resolved_ago||"")}`}
        </div>`:"",t=l==="pending"&&o!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${o}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${F(d.id||"")}" data-mq-sev="${F(r)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${p})">${F(v)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${F(b)}</div>
            <div class="admin-mq-card__fp">fp:${F(m)}</div>
          </div>
          <div class="admin-mq-card__time">${F(d.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${F(d.content||d.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${F(ServerI18n.t(R[r]||R.low))}</span>
          <span class="admin-mq-card__rule">${F(ServerI18n.t("modqueueRuleLabel"))}: ${F(d.rule||d.matched_rule||"?")}</span>
          ${t}
        </div>
        ${s}
        ${u}
      </div>`}function C(d,l,r){d&&(d.innerHTML=l.map(e=>D(e,r)).join(""))}function w(){let d=document.getElementById(h);if(!d)return;d.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=!0}),d.querySelector(".admin-mq__body").hidden=!0;let l=d.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let d=document.getElementById(h);if(!d)return;if(A.pending.length+A.approved.length+A.rejected.length===0){w();return}d.querySelector(".admin-mq__body").hidden=!1;let r=d.querySelector("[data-mq-empty]");r&&(r.hidden=!0),C(d.querySelector("[data-mq-col-pending]"),A.pending,"pending"),C(d.querySelector("[data-mq-col-approved]"),A.approved,"approved"),C(d.querySelector("[data-mq-col-rejected]"),A.rejected,"rejected");let e=(v,o)=>{d.querySelectorAll(v).forEach(s=>{s.textContent=String(o)})};e("[data-mq-cnt-pending]",A.pending.length),e("[data-mq-cnt-approved]",A.approved.length),e("[data-mq-cnt-rejected]",A.rejected.length);let p=A.pending.length===0;d.querySelectorAll("[data-mq-bulk]").forEach(v=>{v.disabled=p});let m=A.pending[A.pending.length-1],b=d.querySelector("[data-mq-oldest]");if(b){let v=m?M(m):null;b.textContent=v!=null?`oldest: ${v}s`:""}e("[data-mq-throughput]",A.stats.throughput.toFixed?A.stats.throughput.toFixed(1):A.stats.throughput),e("[data-mq-avg-review]",A.stats.avg_review_sec.toFixed?A.stats.avg_review_sec.toFixed(1):A.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(A.stats.auto_reject_pct||0)+"%")}async function T(){try{let d=await fetch(f,{credentials:"same-origin"});if(!d.ok){A.pending=[],A.approved=[],A.rejected=[],N();return}let l=await d.json();A.pending=Array.isArray(l.pending)?l.pending:[],A.approved=Array.isArray(l.approved)?l.approved:[],A.rejected=Array.isArray(l.rejected)?l.rejected:[],A.stats=l.stats||A.stats,typeof l.auto_reject_sec=="number"&&(A.autoRejectSec=l.auto_reject_sec),N()}catch{}}async function L(d,l,r){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:d,...r||{}})});if(e.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),T();else{let p=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:p.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function I(){return`
      <div id="${h}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${F(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${F(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${F(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${F(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${F(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function K(){let d=document.getElementById(h);d&&d.addEventListener("click",async l=>{let r=l.target.closest("[data-mq-action]");if(r){let p=r.dataset.mqId,m=r.dataset.mqAction;(m==="approve"||m==="reject")&&L(p,m);return}let e=l.target.closest("[data-mq-bulk]");if(e){let p=e.dataset.mqBulk,m=p==="approve-low";if(!await window.HudConfirm?.open({icon:m?"\u2713":"\u2298",title:m?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:m?"warn":"danger",body:m?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:m?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let v=p.startsWith("approve")?"approve":"reject",o=p.endsWith("low")?"low":"high";L(null,"bulk",{action:v,severity:o})}})}function _(){let d=document.querySelector(".admin-dash-grid"),l=document.getElementById(h);if(!l)return;let r=(location.hash||"").replace("#/","").split("/"),e=d?.dataset.activeRoute||r[0]||"",p=d?.dataset.activeLeaf||r[1]||"",m=e==="modqueue"||e==="moderation"&&(p==="queue"||p===""||p==="moderation");l.style.display=m?"":"none",m?(A.timer||(T(),A.timer=setInterval(T,4e3)),A.countdownTimer||(A.countdownTimer=setInterval(N,1e3))):(A.timer&&(clearInterval(A.timer),A.timer=0),A.countdownTimer&&(clearInterval(A.countdownTimer),A.countdownTimer=0))}function g(){let d=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!d||document.getElementById(h)||(d.insertAdjacentHTML("beforeend",I()),K(),_())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(h)&&g(),_()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",_),document.addEventListener("admin-panel-rendered",()=>{g(),_()}),g()})})()});var wt=ye(()=>{(function(){"use strict";let h="sec-modbans-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(K){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[K]})},c=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],x={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},F={fingerprint:"FP",ip:"IP",nick:"NICK"},A={rows:[],refreshTimer:0};async function G(){try{let I=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!I.ok)return;let K=await I.json();A.rows=Array.isArray(K.bans)?K.bans:[],M()}catch{}}function R(I){if(!I||I<=0)return"\u2014";let K=Math.floor(I/86400),_=Math.floor(I%86400/3600),g=Math.floor(I%3600/60);return K>0?`${K}d ${_}h`:_>0?`${_}h ${g}m`:`${g}m`}function P(I){let K=I.target_kind;return K==="fingerprint"?`fp:${(I.target||"").slice(0,8)}`:K==="nick"?`@${I.target}`:I.target||"\u2014"}function M(){let I=document.querySelector("[data-modbans-list]");if(!I)return;let K=A.rows||[],_=document.querySelector("[data-modbans-count]");if(_&&(_.textContent=String(K.length)),K.length===0){I.innerHTML="";let g=window.AdminEmpty.render("blacklist");g.dataset.emptyKind="modbans",I.appendChild(g);return}I.innerHTML=K.map(function(g){let d=g.status==="expired",l=g.status==="permanent",r="admin-modbans-chip is-"+g.status,e=l?ServerI18n.t("modbansPermanent"):d?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:R(g.remaining_s)}),p=encodeURIComponent(g.target_kind)+"|"+encodeURIComponent(g.target);return`
        <div class="admin-modbans-row ${d?"is-expired":""}">
          <span class="admin-modbans-target">${f(P(g))}</span>
          <span class="admin-modbans-kind">${f(F[g.target_kind]||g.target_kind)}</span>
          <span class="admin-modbans-reason">${f(g.reason||"\u2014")}</span>
          <span class="${r}">
            ${g.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${f(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${p}"
            ${d?"disabled":""}
            title="${d?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${d?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(I){let K=I||{},_=K.kind||"ban",g=window.HudConfirm,d=!K.target,l=K.target_kind||"fingerprint",r=K.target||"";return new Promise(function(e){if(!g){e(!1);return}let p=86400,m=!1,b=12,v="hour",o=document.createElement("div");o.className="admin-modbans-modal-body",o.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${f(x[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${f(F[l]||"?")} ${f((_||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${f(r?P({target_kind:l,target:r}):"\u2014")}</div>
          </div>
        </div>
        ${d?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(V){return`<button type="button" class="admin-modbans-modal-preset${V===l?" is-active":""}"
                data-modbans-target-kind="${V}">${f(x[V])} ${f(F[V])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${c.map(function(V){return`<button type="button" class="${"admin-modbans-modal-preset"+(V.defaultPick?" is-active":"")+(V.permanent?" is-permanent":"")}" data-modbans-duration="${V.val}">${V.labelKey?ServerI18n.t(V.labelKey):V.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let s=o.querySelector("[data-modbans-custom-row]"),u=o.querySelector("[data-modbans-custom-input]"),t=o.querySelector("[data-modbans-custom-seconds]"),n=o.querySelector("[data-modbans-when]"),a=o.querySelector("[data-modbans-custom]"),i=o.querySelector("[data-modbans-target]"),y=o.querySelector("[data-modbans-target-icon]"),k=o.querySelector("[data-modbans-target-label]"),S=o.querySelector("[data-modbans-target-val]"),B=function(){y.textContent=x[l]||"?",k.textContent=`${F[l]||"?"} ${(_||"ban").toUpperCase()}`,S.textContent=r?P({target_kind:l,target:r}):"\u2014"},j=function(){return Math.max(1,parseInt(u.value,10)||1)*(v==="day"?86400:3600)},J=function(){if(p===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let V=new Date(Date.now()+p*1e3),U=W=>String(W).padStart(2,"0"),ee=`${V.getFullYear()}-${U(V.getMonth()+1)}-${U(V.getDate())} ${U(V.getHours())}:${U(V.getMinutes())}`;m?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:b,unit:ServerI18n.t(v==="day"?"modbansDay":"modbansHour"),stamp:ee}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:R(p),stamp:ee}),n.classList.remove("is-custom"))},E=function(){let V=j();t.textContent=`= ${V.toLocaleString()}s`,m&&(b=Math.max(1,parseInt(u.value,10)||1),p=V,J())},O=o.querySelector("[data-modbans-presets]"),$=function(){m=!0,s.hidden=!1,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===a)}),E()},q=function(V){m=!1,s.hidden=!0,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(U){U.classList.toggle("is-active",U===V)})};B(),J(),E(),o.addEventListener("click",function(V){let U=V.target.closest("[data-modbans-target-kind]");if(U){l=U.dataset.modbansTargetKind,U.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Q){Q.classList.toggle("is-active",Q===U)}),B();return}if(V.target.closest("[data-modbans-custom]")){$();return}let ee=V.target.closest("[data-modbans-custom-unit]");if(ee){v=ee.dataset.modbansCustomUnit||"hour",o.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Q){Q.classList.toggle("is-active",Q===ee)}),E();return}let W=V.target.closest("[data-modbans-duration]");W&&(p=parseInt(W.dataset.modbansDuration,10)||0,q(W),J())}),u.addEventListener("input",E),i&&i.addEventListener("input",function(){r=i.value.trim(),B()});let Y=o.querySelector("[data-modbans-reason]");g.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:o,width:480}).then(function(V){if(!V){e(!1);return}if(!r){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}p===0?g.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${f(P({target_kind:l,target:r}))}</b>`})}).then(function(U){if(!U){e(!1);return}C(l,r,p,Y.value.trim(),_).then(e)}):C(l,r,p,Y.value.trim(),_).then(e)})})}async function C(I,K,_,g,d){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:K,duration_s:_,reason:g||"",kind:d||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast(_===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:R(_)}),!0),G(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function w(I){let K=(I||"").split("|");if(K.length!==2)return;let _=decodeURIComponent(K[0]),g=decodeURIComponent(K[1]);try{let d=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:_,target:g})});if(!d.ok)throw new Error(`HTTP ${d.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),G()}catch(d){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:d.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
      <div id="${h}" class="admin-modbans-page hud-page-stack lg:col-span-2">
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
      </div>`}function T(){let I=document.getElementById(h);if(!I||I.dataset.modbansBound==="1")return;I.dataset.modbansBound="1",I.addEventListener("click",function(_){if(_.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let g=_.target.closest("[data-modbans-unban]");g&&!g.disabled&&w(g.dataset.modbansUnban)});let K=I.querySelector("[data-modbans-list]");K&&window.AdminSkeletons&&!K.children.length&&K.appendChild(window.AdminSkeletons.listRows({rows:4}))}function L(){let I=document.getElementById("settings-grid");!I||document.getElementById(h)||(I.insertAdjacentHTML("beforeend",N()),T(),G(),A.refreshTimer||(A.refreshTimer=setInterval(G,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&L()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&L()}),window.ModBans={openPicker:D,refreshList:G,formatTarget:P,formatRemaining:R}})()});var yt=ye(()=>{(function(){"use strict";let h="admin-mobile-nav-root",f=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],c=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],x={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",themes:"viewer",appearance:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},F=!1,A=0;function G(){return`
      <nav id="${h}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${c.map(T=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${T.route}">
              <span class="admin-mobile-nav__o-icon">${T.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${T.labelKey?ServerI18n.t(T.labelKey):T.label}</span>
                <span class="admin-mobile-nav__o-desc">${T.descKey?ServerI18n.t(T.descKey):T.desc||""}</span>
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
          ${f.map(T=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${T.id}" data-mn-route="${T.route||""}" ${T.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${T.icon}</span>
              <span class="admin-mobile-nav__label">${T.labelKey?ServerI18n.t(T.labelKey):T.label}</span>
              ${T.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${T.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function R(){let T=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",L=x[T]||T;return f.some(I=>I.id===L)?L:c.some(I=>I.route===L)?"more":""}function P(){let T=document.getElementById(h);if(!T)return;let L=R();T.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===L),I.dataset.mnTab!=="more"&&I.setAttribute("aria-current",I.dataset.mnTab===L?"page":"false")})}function M(T){let L=document.getElementById(h);if(!L)return;F=T,L.dataset.overflow=T?"open":"closed",L.querySelector("[data-mn-overflow]").hidden=!T,L.querySelector("[data-mn-backdrop]").hidden=!T;let I=L.querySelector("[data-mn-tab='more']");I?.classList.toggle("is-active",T),I?.setAttribute("aria-expanded",T?"true":"false")}function D(T){if(T.target.closest("[data-mn-backdrop]")){M(!1);return}if(T.target.closest("[data-mn-logout]")){M(!1);let K=document.getElementById("logoutButton");K&&K.click();return}let L=T.target.closest("[data-mn-tab]");if(L){if(L.dataset.mnTab==="more"){M(!F);return}M(!1),L.dataset.mnRoute&&(location.hash="#/"+L.dataset.mnRoute);return}let I=T.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+I.dataset.mnRoute)}async function C(){try{let T=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!T.ok)return;let L=await T.json(),I=Array.isArray(L.pending)?L.pending.length:0;A=I;let K=document.querySelector("[data-mn-badge='pending']");if(!K)return;K.textContent=String(I),K.hidden=!(I>0)}catch{}}function w(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let T=0;function L(){let I=document.activeElement,K=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!K)}document.addEventListener("focusin",()=>{cancelAnimationFrame(T),T=requestAnimationFrame(L)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(T),T=requestAnimationFrame(()=>setTimeout(L,50))})}function N(){document.getElementById(h)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",G()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{M(!1),P()}),P(),C(),setInterval(C,8e3),w())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var St=ye(()=>{(function(){"use strict";var h="admin-session-expired-root",f=!1,c=null;function x(P,M){try{var D=window.ServerI18n&&ServerI18n.t(P);return D&&D!==P?D:M}catch{return M}}function F(){var P=document.getElementById(h);if(P&&P.remove(),document.body.classList.remove("is-session-expired"),f=!1,c&&c.focus)try{c.focus()}catch{}c=null}function A(P){if(P.key==="Tab"){var M=document.getElementById(h);if(M){var D=M.querySelectorAll("input, button");if(D.length){var C=D[0],w=D[D.length-1];P.shiftKey&&document.activeElement===C?(P.preventDefault(),w.focus()):!P.shiftKey&&document.activeElement===w&&(P.preventDefault(),C.focus())}}}}function G(){if(!(f||document.getElementById(h))){f=!0,c=document.activeElement,document.body.classList.add("is-session-expired");var P=document.createElement("div");P.id=h,P.className="admin-sx",P.setAttribute("role","alertdialog"),P.setAttribute("aria-modal","true"),P.setAttribute("aria-labelledby","admin-sx-title"),P.setAttribute("aria-describedby","admin-sx-body"),P.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+x("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+x("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+x("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+x("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+x("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+x("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(P),document.addEventListener("keydown",A,!0);var M=P.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),P.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),R(P,M)})}}function R(P,M){var D=P.querySelector("[data-sx-error]"),C=P.querySelector(".admin-sx__submit");D.hidden=!0,C.disabled=!0;var w=new URLSearchParams;w.set("password",M.value),P.querySelector("#admin-sx-remember").checked&&w.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:w.toString()}).then(function(T){return T.json().then(function(L){return{status:T.status,data:L}},function(){return{status:T.status,data:{}}})}).then(function(T){if(C.disabled=!1,T.status===200&&T.data&&T.data.ok){var L=document.querySelector('meta[name="csrf-token"]');L&&T.data.csrf_token&&(L.content=T.data.csrf_token),document.removeEventListener("keydown",A,!0),F(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(x("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}T.status===429?D.textContent=x("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=x("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,M.select()}).catch(function(){C.disabled=!1,D.textContent=x("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:G,close:F,isOpen:function(){return f}}})()});var kt=ye(()=>{(function(){"use strict";let h="admin-reconnect-banner",F=0,A=0,G="ok",R=0,P=5e3,M=!1,D=0;function C(r){if(G!==r){if(G=r,r==="ok"||r==="dismissed"){N(),r==="ok"&&(F=0,A=0,P=5e3);return}w()}}function w(){let r=document.getElementById(h);r||(r=document.createElement("div"),r.id=h,r.className="admin-rcb",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.insertBefore(r,document.body.firstChild)),r.dataset.state=G;let e=G==="exhausted",p=e?"admin-rcb--crimson":"admin-rcb--amber";r.className=`admin-rcb ${p}`,r.innerHTML=e?L():T(),r.querySelector("[data-rcb-action='retry']")?.addEventListener("click",K),r.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>C("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),D||(D=setInterval(I,250))}function N(){let r=document.getElementById(h);r&&r.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function T(){let r=Math.max(0,(R-Date.now())/1e3),e=P/1e3,p=Math.min(100,(e-r)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:A})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${p}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function L(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){if(G!=="reconnecting")return;let r=document.getElementById(h);if(!r)return;let e=Math.max(0,(R-Date.now())/1e3),p=P/1e3,m=Math.min(100,(p-e)/p*100),b=r.querySelector(".admin-rcb__progress-fill");b&&(b.style.width=m+"%")}function K(){A=0,F=0,P=5e3,C("reconnecting"),_()}async function _(){try{let r=await fetch("/admin/bootstrap",{credentials:"same-origin"});r.ok?g():r.status===401||r.status===403?C("ok"):d()}catch{d()}}function g(){C("ok")}function d(){if(F+=1,A+=1,A>=10){C("exhausted");return}F>=3&&(P=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,A-1))),R=Date.now()+P,C("reconnecting"),setTimeout(_,P))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let r=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{M=!1,g()});async function p(m){try{let b=await m;return b&&b.ok?G!=="ok"&&G!=="dismissed"&&g():b&&b.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):b&&b.status>=500&&d(),b}catch(b){throw d(),b}}typeof r=="function"&&(window.csrfFetch=function(){return p(r.apply(this,arguments))}),window.fetch=function(m,b){let v=typeof m=="string"?m:m&&m.url||"",o=e.call(this,m,b);return v.startsWith("/admin/")||v.indexOf("//")===-1&&v.startsWith("admin/")?p(o):o}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var It=ye(()=>{(function(){"use strict";let h="admin-help-drawer-root",f={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},c=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],x=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function F(T){return T==null?"":String(T).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})}function A(){let T=(location.hash||"").replace("#/","").split("/")[0]||"";return f[T]?T:"_default"}function G(){return`
      <div id="${h}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function R(){let T=f[A()],L=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",I=T.titleKey?ServerI18n.t(T.titleKey):T.title,K=T.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${F(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),_=T.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${F(ServerI18n.t(T.fieldTipKey))}</span>
      </div>`:"",g=c.map(l=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${F(l.term)}</div>
        <div class="admin-help__glossary-def">${F(ServerI18n.t(l.defKey))}</div>
      </div>`).join(""),d=x.map(l=>`
      <a class="admin-help__resource" href="${F(l.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${F(l.label)}</span>
        <span class="admin-help__resource-url">${F(l.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${F(I)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${K}</div>
          ${_}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${F(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${g}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${d}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${L?"v"+F(L):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function P(){let T=document.getElementById(h);T||(document.body.insertAdjacentHTML("beforeend",G()),T=document.getElementById(h),T.addEventListener("click",L=>{if(L.target.closest("[data-help-close]")){M();return}L.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),T.querySelector("[data-help-body]").innerHTML=R(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",C)}function M(){let T=document.getElementById(h);T&&T.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",C)}function D(){document.getElementById(h)?M():P()}function C(T){T.key==="Escape"&&(T.preventDefault(),M())}function w(T){let L=T.target;L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable)||T.key==="F1"&&(T.preventDefault(),D())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",w)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:P,close:M,toggle:D}})()});var Tt=ye(()=>{(function(){"use strict";var h="admin-shortcuts-root",f=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function c(d,l){try{var r=window.ServerI18n&&ServerI18n.t(d);return r&&r!==d?r:l}catch{return l}}function x(d,l){window.showToast&&window.showToast(d,l!==!1)}function F(d,l){return(window.csrfFetch||window.fetch)(d,l||{})}function A(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function G(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function R(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function P(){var d="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(d=(await l.json()).state||"idle")}catch{}if(d==="idle"){location.hash="#/polls",x(c("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var r=d==="active";try{var e=await F(r?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);x(c(r?"ksToastPollEnded":"ksToastPollStarted",r?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{x(c("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(d){return f?d.metaKey:d.ctrlKey}var D=f?"\u2318":"Ctrl",C=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(d){return M(d)&&(d.key==="k"||d.key==="K")},run:A},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(d){return d.key==="?"&&!M(d)&&!d.altKey||d.key==="/"&&M(d)},run:function(){K()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(d){return M(d)&&d.shiftKey&&(d.key==="d"||d.key==="D")},run:G},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(d){return M(d)&&d.shiftKey&&d.key==="Backspace"},run:R},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(d){return!M(d)&&"jkJK".indexOf(d.key)>=0},run:function(d){window.AdminLiveFeed.moveFocus(d.key==="j"||d.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(d){return!M(d)&&(d.key==="b"||d.key==="B")},run:function(d){window.AdminLiveFeed.blockFocused(d.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(d){return!M(d)&&d.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(d){return!M(d)&&(d.key==="p"||d.key==="P")},run:P}];function w(d){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(d):d==null?"":String(d).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function N(d){return C.filter(function(l){return l.group===d}).map(function(l){var r=l.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+w(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+w(c(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+r+"</span></div>"}).join("")}function T(){var d=document.getElementById(h);d&&d.remove(),document.removeEventListener("keydown",L,!0)}function L(d){(d.key==="Escape"||d.key==="?")&&(d.preventDefault(),T())}function I(){if(!document.getElementById(h)){var d=document.createElement("div");d.id=h,d.className="admin-ks",d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),d.setAttribute("aria-labelledby","admin-ks-title"),d.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+w(c("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+w(c("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+w(c("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+w(c("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+w(c("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(d),d.addEventListener("click",function(r){r.target.closest("[data-ks-close]")&&T()}),document.addEventListener("keydown",L,!0);var l=d.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function K(){document.getElementById(h)?T():I()}function _(d){if(!d)return!1;if(d.isContentEditable)return!0;var l=(d.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function g(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(d){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=_(document.activeElement),r=0;r<C.length;r++){var e=C[r];if(e.group==="feed"){if(l||!g())continue}else if(l&&!M(d))continue;if(e.match(d)){d.preventDefault(),e.run(d);return}}}),window.AdminShortcuts={open:I,close:T,toggle:K,list:function(){return C.slice()}}})()});var _t=ye(()=>{(function(){"use strict";let h="theme-mode",f="admin-theme-mode",c="admin-theme-toggle";(function(){try{if(localStorage.getItem(h)!=null)return;let w=localStorage.getItem(f);(w==="light"||w==="dark"||w==="auto")&&(localStorage.setItem(h,w),localStorage.removeItem(f))}catch{}})();function F(){try{let C=localStorage.getItem(h);if(C==="light"||C==="dark"||C==="auto")return C}catch{}return"auto"}function A(C){try{localStorage.setItem(h,C)}catch{}}function G(C){let w=document.documentElement;C==="auto"?w.removeAttribute("data-theme"):w.setAttribute("data-theme",C),P(C)}function R(C){return C==="light"||C==="dark"?C:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function P(C){let w=document.getElementById(c);if(!w)return;let N=R(C);w.dataset.mode=C,w.dataset.effective=N,w.textContent=C==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",w.title=C==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):C==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let C=F(),w=C==="auto"?"light":C==="light"?"dark":"auto";A(w),G(w)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let C=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,w=document.getElementById(c);if(w){C&&w.classList.contains("admin-theme-toggle--floating")&&C.parentNode&&!C.parentNode.contains(w)&&(w.classList.remove("admin-theme-toggle--floating"),C.parentNode.insertBefore(w,C));return}let N=document.createElement("button");N.id=c,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",M),C&&C.parentNode?C.parentNode.insertBefore(N,C):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),P(F())}if(G(F()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{F()==="auto"&&P("auto")})}catch{}window.addEventListener("storage",C=>{C.key===h&&G(F())}),window.AdminThemeSwitcher={getMode:F,setMode:function(C){C!=="auto"&&C!=="light"&&C!=="dark"||(A(C),G(C),P(C),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:C}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var Et=ye(()=>{(function(){"use strict";var h={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},f=[];window.DanmuStore={get:function(c){return h[c]},set:function(c,x){h[c]=x,f.forEach(function(F){F(c,x)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+c,x)},subscribe:function(c){f.push(c)},getAll:function(){return Object.assign({},h)}}})()});var $t=ye(()=>{(function(){"use strict";let h=window.DANMU_CONFIG||{},f=Number(h.loginLimit)>0?Number(h.loginLimit):5,c=Number(h.loginWindow)>0?Number(h.loginWindow):300,x=0;function F(){return window.__adminCtx||{}}function A(){let M=F();return typeof M.getSettings=="function"?M.getSettings()||{}:{}}function G(){let M=A();if(M&&typeof M.OpsContact<"u"){let D=M.OpsContact;if(Array.isArray(D))return D[3]||D[0]||null;if(typeof D=="string")return D}return null}function R(){let M=F().appContainer||document.getElementById("app-container");if(!M)return;let D=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";M.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${D?` \xB7 v${D}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let C=M.querySelector("[data-login-reveal]");C&&C.addEventListener("click",()=>{let L=document.getElementById("password");if(!L)return;let I=L.type==="text";L.type=I?"password":"text",C.textContent=ServerI18n.t(I?"adminLoginReveal":"adminLoginHide");try{L.focus()}catch{}});let w=document.getElementById("loginForm"),N=document.getElementById("password"),T=document.getElementById("loginAttemptsHint");if(w){try{let L=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(L)&&L>0){x=L;let I=Math.max(0,f-x);if(T&&x>0&&I>0){T.hidden=!1;let K=document.getElementById("password");K&&K.classList.add("is-error"),T.textContent=ServerI18n.t("loginAttemptsRemaining",{n:I,min:Math.max(1,Math.ceil(c/60))})}}}catch{}w.addEventListener("submit",async L=>{if(L.preventDefault(),!N)return;let I=new URLSearchParams;I.set("password",N.value),document.getElementById("admin-login-remember")?.checked&&I.set("remember","1");try{let K=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I.toString(),redirect:"manual"});if(K.status===429){let _=K.headers.get("Retry-After"),g=parseInt(_,10),d=Number.isFinite(g)&&g>0?g:c;P(d);return}x+=1;try{sessionStorage.setItem("admin_login_attempts",String(x))}catch{}window.location.reload()}catch(K){console.error("Login submit failed:",K),T&&(T.hidden=!1,T.textContent=ServerI18n.t("networkError"))}})}}function P(M){let D=document.getElementById("adminLoginCard");if(!D)return;let C=G(),w=C?`<a class="admin-lockout-contact" href="${C}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";D.classList.add("admin-lockout-card"),D.innerHTML=`
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
        ${w}
      </div>
    `;let N=document.getElementById("lockoutCountdown"),T=M,L=K=>{let _=Math.floor(K/60),g=K%60;return`${String(_).padStart(2,"0")}:${String(g).padStart(2,"0")}`};N&&(N.textContent=L(T));let I=setInterval(()=>{T-=1,N&&(N.textContent=L(Math.max(0,T))),T<=0&&(clearInterval(I),x=0,R(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:R,renderLockout:P}})()});var xt=ye(()=>{(function(){"use strict";function h(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function f(E){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(E):String(E??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O])}async function c(){try{let E=h();await E.prime();let O=E.get("history_stats"),$=G(),[q,Y,V]=await Promise.all([O?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!Y.ok)return;let U=O||(q&&q.ok?await q.json():null);if(!U)return;let W=((await Y.json()).distribution||[]).reduce((me,Ie)=>Ie.count>(me?.count||-1)?Ie:me,null),Q=W?W.count:0,te=W?(W.hour||"").slice(-5):"\u2014",ie=document.querySelector('[data-kpi="peak"]');ie&&(ie.querySelector("[data-kpi-value]").textContent=Q.toLocaleString());let le=document.querySelector('[data-kpi="unique-fp"]');if(le){let me=new Set;(U.records||[]).forEach(Ie=>{let Ee=Ie.fingerprint||Ie.fp||Ie.user_fingerprint;Ee&&me.add(Ee)}),le.querySelector("[data-kpi-value]").textContent=me.size.toLocaleString()}let ue=V&&V.ok?await V.json():null;R($)&&M(ue)}catch{}}let x=null,F=null,A=0;function G(){return++A}function R(E){return E===A}function P(){let E=document.querySelector('[data-kpi="session"] [data-kpi-value]');if(!E)return;let O=x?l(x):"\u2014";E.textContent!==O&&(E.textContent=O)}function M(E){let O=!!(E&&E.status==="live"&&E.started_at),$=document.querySelector('[data-kpi="messages"] [data-kpi-value]');if($){let q=O&&typeof E.message_count=="number"?E.message_count.toLocaleString():"\u2014";$.textContent!==q&&($.textContent=q)}x=O?E.started_at:null,P(),O&&!F?F=setInterval(P,1e3):!O&&F&&(clearInterval(F),F=null)}function D(E,O){let $=document.querySelector(E);if($){if(typeof O!="number"||O<=0){$.hidden=!0;return}$.hidden=!1,$.textContent=O>999?"999+":String(O)}}async function C(){try{let E=h();await E.prime();let O=E.get("blacklist"),$=E.get("widgets"),q=E.get("history_stats"),Y=E.get("effects");D("[data-count-blacklist]",Array.isArray(O)?O.length:0),D("[data-count-widgets]",Array.isArray($?.widgets)?$.widgets.length:0),D("[data-count-messages]",q?.stats?.last_24h||0),D("[data-count-effects]",Array.isArray(Y?.effects)?Y.effects.length:0);try{let V=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(V.ok){let U=await V.json();D("[data-count-plugins]",Array.isArray(U?.plugins)?U.plugins.length:0)}}catch{}}catch{}}async function w(){C(),N(),j()}async function N(){let E=document.querySelector("[data-dash-poll-body]"),O=document.querySelector("[data-dash-poll-timer]");if(E)try{let $=h();await $.prime();let Y=$.get("metrics");if(!Y){let Q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Q.ok)return;Y=await Q.json()}let V=Y.poll_state;if(!V||!V.active||!Array.isArray(V.options)||V.options.length===0){E.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,O&&(O.textContent="");return}let U=V.options.reduce((Q,te)=>Q+(te.votes||0),0),ee=["A","B","C","D","E","F"],W=0;if(V.options.forEach((Q,te)=>{(Q.votes||0)>(V.options[W].votes||0)&&(W=te)}),E.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${f(V.question||ServerI18n.t("dashPollRunning"))}</div>`+V.options.map((Q,te)=>{let ie=U?Math.round(Q.votes/U*100):0;return`
            <div class="admin-dash-poll-opt ${te===W&&U>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${ee[te]||String(te+1)}</span>
                <span class="label">${f(Q.label||"")}</span>
                <span class="pct">${ie}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:Q.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${ie}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:U})}</div>`,O){let Q=V.remaining_seconds;O.textContent=typeof Q=="number"&&Q>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(Q/60),ss:String(Q%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function T(E){let O=E.visible!==!1,$=E.config&&E.config.title||E.type||"widget",q=(E.type||"widget").toUpperCase(),Y=(E.position||"\u2014").toUpperCase(),V=O?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",U=E.created_at&&O?Math.max(0,Math.floor(Date.now()/1e3-E.created_at)):null,ee=U!=null?(()=>{let W=Math.floor(U/86400),Q=Math.floor(U%86400/3600),te=Math.floor(U%3600/60),ie=U%60;return W>0?`UPTIME \xB7 ${W}d ${String(Q).padStart(2,"0")}h`:Q>0?`UPTIME \xB7 ${Q}:${String(te).padStart(2,"0")}:${String(ie).padStart(2,"0")}`:`UPTIME \xB7 ${te}:${String(ie).padStart(2,"0")}`})():`STATUS \xB7 ${O?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${f(E.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${V}"></span>
          <span class="kind">${f(q)}</span>
          <span class="cat">${f(Y)}</span>
        </div>
        <div class="title">${f($)}</div>
        <div class="uptime">${ee}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${O?" is-active":""}" data-widget-action="toggle" data-running="${O?"1":"0"}">${O?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function L(E,O){try{let $=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:E,config:{visible:!O}})});if(!$.ok)throw new Error("HTTP "+$.status);K()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function I(E){E.dataset.bound!=="1"&&(E.dataset.bound="1",E.addEventListener("click",O=>{let $=O.target.closest(".admin-dash-widget-tile");if(!$)return;let q=O.target.dataset.widgetAction,Y=$.dataset.widgetId;if(!(!q||!Y)){if(q==="toggle")L(Y,O.target.dataset.running==="1");else if(q==="config"){let V=document.querySelector('[data-route="widgets"]');V&&V.click()}}}))}async function K(){let E=document.querySelector("[data-dash-widgets]");if(E)try{let O=h();await O.prime();let $=O.get("widgets");if(!$){let Y=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!Y.ok){E.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}$=await Y.json()}let q=($.widgets||$.items||[]).slice(0,4);if(q.length===0){E.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}E.innerHTML='<div class="admin-dash-widget-grid">'+q.map(T).join("")+"</div>",I(E)}catch{E.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let _=null,g=null,d=null;function l(E){let O=Math.max(0,Math.floor(Date.now()/1e3-E)),$=Math.floor(O/3600),q=Math.floor(O%3600/60),Y=O%60;return $>0?`${$}:${String(q).padStart(2,"0")}:${String(Y).padStart(2,"0")}`:`${String(q).padStart(2,"0")}:${String(Y).padStart(2,"0")}`}function r(E){let O=document.getElementById("admin-session-banner"),$=document.getElementById("sec-live-feed");if($&&$.classList.toggle("is-idle-collapsed",!(E&&E.status==="live")),O&&O.classList.toggle("is-hero",!(E&&E.status==="live")),!O)return;if(_=E,!(E&&E.status==="live"))O.hidden=!1,O.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let Y=E.started_at||Date.now()/1e3;O.hidden=!1,O.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${f(E.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${E.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,e(Y)}O.dataset.bound||(O.dataset.bound="1",O.addEventListener("click",m))}function e(E){d&&clearInterval(d);let O=()=>{let $=document.querySelector("[data-sess-timer]");$&&($.textContent=l(E))};O(),d=setInterval(O,1e3)}function p(){d&&(clearInterval(d),d=null)}async function m(E){let O=E.target.closest("[data-sess-action]");if(!O)return;let $=O.dataset.sessAction;if($==="open"){let q=document.querySelector("[data-sess-name]"),Y=(q?q.value:"").trim();if(!Y){q&&q.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}O.disabled=!0;try{let V=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})}),U=await V.json();if(!V.ok){window.showToast&&window.showToast(U.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:Y}),!0),G(),r(U.session),M(Object.assign({message_count:0},U.session))}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{O.disabled=!1}}else if($==="close"){let q=O.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",Y=(ee,W)=>`<option value="${ee}"${ee===q?" selected":""}>${W}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${Y("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${Y("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${Y("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;O.disabled=!0;let U=document.getElementById("sessCloseBehavior")?.value;if(U&&U!==q)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:U})})}catch{}try{let ee=await window.csrfFetch("/admin/session/close",{method:"POST"}),W=await ee.json();if(!ee.ok){window.showToast&&window.showToast(W.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),p(),G(),r({status:"idle",viewer_end_behavior:W.archived&&W.archived.viewer_end_behavior||"continue"}),M(null)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{O.disabled=!1}}}async function b(){try{let E=G(),O=await fetch("/admin/session/current",{credentials:"same-origin"});if(!O.ok)return;let $=await O.json();if(!R(E))return;r($),M($)}catch{}}function v(){b(),g&&clearInterval(g),g=setInterval(b,1e4)}function o(){g&&(clearInterval(g),g=null),p()}let s=null,u=null,t=0;function n(){let E=document.querySelector("[data-overlay-pill]"),O=u;if(!E||!O)return;E.classList.toggle("is-on",!!O.live),E.classList.toggle("is-off",!O.live);let $=E.querySelector("[data-overlay-pill-state]");if($){let q=O.live?"statusOn":"statePaused",Y=ServerI18n.t(q);$.dataset.i18n=q,$.textContent!==Y&&($.textContent=Y)}}async function a(){if(!document.querySelector("[data-overlay-pill]"))return;let E=t;try{let O=await fetch("/admin/broadcast/status",{credentials:"same-origin"});if(!O.ok)return;let $=(await O.json()).mode==="live";if(E!==t)return;u={live:$,count:u?u.count:0},n()}catch{}}function i(){n();let E=document.querySelector("[data-cockpit-overlay]"),O=window.AdminOverlayControl,$=u;if(!E||!O||!$)return;E.classList.toggle("is-on",$.live);let q=(U,ee)=>{U.textContent!==ee&&(U.textContent=ee)},Y=E.querySelector("[data-cockpit-status]");Y&&q(Y,O.statusText($.live,$.count));let V=E.querySelector('[data-cockpit-action="toggle"]');V&&(V.dataset.i18n=O.toggleKey($.live),q(V,ServerI18n.t(V.dataset.i18n)),V.dataset.next=$.live?"standby":"live")}async function y(){let E=document.querySelector("[data-cockpit-overlay]");if(!E||E.offsetParent===null)return;let O=t,$=null,q=null;try{let U=await fetch("/overlay_status",{credentials:"same-origin"});U.ok&&($=(await U.json()).overlay_count||0)}catch{}try{let U=await fetch("/admin/broadcast/status",{credentials:"same-origin"});U.ok&&(q=(await U.json()).mode==="live")}catch{}let Y=u;if(!Y&&q===null)return;u={live:q!==null&&O===t?q:Y?Y.live:q,count:$!==null?$:Y?Y.count:0},i()}document.addEventListener("admin-overlay-state",E=>{let O=E&&E.detail||{};t+=1,u={live:!!O.live,count:typeof O.count=="number"?O.count:u?u.count:0},i()});let k=null;document.addEventListener("admin-route-applied",E=>{let O=E&&E.detail&&E.detail.route,$=O!==k;if(k=O,O!=="live"&&O!=="dashboard"){$&&O!=="overlay"&&a();return}i(),$&&y()});function S(){let E=document.querySelector("[data-cockpit-overlay]");if(!E||E.dataset.bound)return;E.dataset.bound="1",E.addEventListener("click",async q=>{let Y=q.target.closest("[data-cockpit-action]");if(!Y)return;let V=Y.dataset.cockpitAction;if(V==="clear"){window.AdminOverlayControl?.clearScreen();return}V==="toggle"&&(await window.AdminOverlayControl?.setDisplay(Y.dataset.next==="live"),y())});let O=E.parentElement&&E.parentElement.querySelector('[data-cockpit-action="idle-qr"]');O&&O.addEventListener("click",B);let $=E.parentElement&&E.parentElement.querySelector('[data-cockpit-action="poll"]');$&&$.addEventListener("click",()=>{location.hash="#/polls"})}async function B(){let E;try{let Y=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!Y.ok)throw new Error("HTTP "+Y.status);E=await Y.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let O=document.createElement("div"),$=document.createElement("div");if($.className="admin-soh-qr",$.innerHTML=E.svg,O.appendChild($),E.source==="unavailable"){let Y=document.createElement("p");Y.className="admin-soh-urlwarn",Y.textContent=E.blocked_host?ServerI18n.t("joinUrlNotTrusted",{host:E.blocked_host}):ServerI18n.t("joinUrlLocalOnly"),O.appendChild(Y)}await window.HudConfirm?.open({icon:"\u25A6",titleText:E.url,body:O,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(E.url)}function j(){S(),y(),s&&clearInterval(s),s=setInterval(y,5e3)}function J(){s&&(clearInterval(s),s=null)}window.AdminDashboard={refreshKpi:c,refreshSummary:w,refreshSidebarBadges:C,populatePoll:N,populateWidgets:K,refreshSessionBanner:b,startSessionPolling:v,stopSessionPolling:o,refreshCockpitOverlay:y,renderCockpitOverlay:i,startCockpitPolling:j,stopCockpitPolling:J}})()});var Lt=ye(()=>{(function(){"use strict";let h="sec-viewer-config-defaults",f="sec-overlay-layout",c="sec-viewer-config-limits",x=["sec-themes",h,"sec-viewer-theme",c],F=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(X){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[X]})},G=window.DANMU_CONFIG?.settingRanges||{},R=Object.fromEntries(Object.entries({Opacity:{min:20,max:100,step:1,unit:"%"},FontSize:{min:16,max:64,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}}).map(([H,X])=>{let Z=G[H]||{};return[H,{...X,min:Number.isFinite(Number(Z.min))?Number(Z.min):X.min,max:Number.isFinite(Number(Z.max))?Number(Z.max):X.max}]})),P=[14,20,32,44,64],M=window.DANMU_CONFIG?.defaultColorPalette||[],D=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}],C={stroke:[{value:"none",labelKey:"themeStrokeNone"},{value:"thin",labelKey:"themeStrokeThin"},{value:"thick",labelKey:"themeStrokeThick"}],shadow:[{value:"none",labelKey:"themeShadowNone"},{value:"soft",labelKey:"themeShadowSoft"},{value:"strong",labelKey:"themeShadowStrong"}]};function w(H,X){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Z=window.ServerI18n.t(H,X);if(Z&&Z!==H)return Z}return H}let N={};function T(H){if(N[H]!=null)return N[H];let X=R[H];return X?X.step:1}function L(H,X){N[H]=Number(X)||T(H)}let I={options:null,fonts:[],allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},K=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],_=["Color","FontFamily","Layout"];function g(H){return _.indexOf(H)!==-1}function d(H){let X=I.options&&I.options[H],Z=X&&X[1];return Array.isArray(Z)?Z.slice():[]}function l(H){return H==="Color"?M.map(X=>X.replace(/^#/,"").toUpperCase()):H==="Layout"?D.map(X=>X.value):H==="FontFamily"?(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(Z=>typeof Z=="string"?Z:Z.name||Z.family||"").filter(Boolean):[]}function r(H,X){return H==="Color"?String(X||"").replace(/^#/,"").toUpperCase():String(X||"")}function e(){return`
      <div id="${h}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-dsp2-grid">
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head" aria-hidden="true">
              <span>${A(w("displayColParam"))}</span>
              <span>${A(w("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right">${A(w("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):A(w("loading"))}
            </div>
          </div>

          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${A(w("mlLivePreview"))}</span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${A(w("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${A(w("displayPreviewSample2"))}</span>
                </div>
              </div>
              <div class="admin-dsp2-preview-foot">
                <span data-preview-foot-l>\u2014</span>
                <span data-preview-foot-r>\u2014</span>
              </div>
            </div>
            <!-- \u6BCF\u4E00\u6B21\u8B8A\u66F4\u90FD\u76F4\u63A5\u5B58\uFF0C\u6C92\u6709\u300C\u5957\u7528\u300D\u9215\uFF1B\u9019\u88E1\u53EA\u5269\u9084\u539F\u8207\u532F\u51FA\u3002 -->
            <div class="admin-dsp2-actions">
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert">
                \u21BA ${A(w("displayDeployRevert"))}
              </button>
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export">
                \u2197 ${A(w("displayExportJson"))}
              </button>
            </div>
          </div>
        </div>

        <!-- \u89C0\u773E\u5916\u90E8\u5716\u7247\uFF085.8.0\uFF09\u3002\u9810\u8A2D\u95DC\u9589\uFF1B\u5224\u65B7\u5728\u4F3A\u670D\u5668\uFF08/fire\uFF09\uFF0C\u9019\u88E1\u53EA\u8B80\u5BEB
             /admin/viewer-images\u3002\u95DC\u9589\u6642\u7DB2\u7AD9\u8207\u683C\u5F0F\u5169\u5217\u6536\u8D77\u4F86\u3002 -->
        <div id="viewer-images-group">
          <div class="admin-ui-group-label">${A(w("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${A(w("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall admin-vi-row" data-vi-row style="display:none">
              <label class="lbl" for="viewer-images-hosts">${A(w("viHosts"))}</label>
              <span class="val admin-vi-hosts">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off"
                  placeholder="${A(w("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row admin-vi-row" data-vi-row style="display:none" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${A(w("viExtensions"))}</span>
              <span class="val admin-vi-exts" id="viewer-images-extensions">
                ${K.map(H=>`
                <label class="admin-vi-ext">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${H.value}" />
                  <span>${H.label}</span>
                </label>`).join("")}
              </span>
            </div>
          </div>
        </div>
      </div>`}function p(){return`
      <details id="${f}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
        <summary class="admin-ui-page-title">${A(w("overlayLayoutFoldTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
          <div class="admin-ui-group-label">${A(w("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlMaxTracks"))}
                <span class="sub">${A(w("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlAvoidOverlap"))}
                <span class="sub">${A(w("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${A(w("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002 -->
          <div class="admin-ui-group-label">${A(w("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlSafeArea"))}
                <span class="sub">${A(w("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(w("dlStrokeMode"))}
                <span class="sub">${A(w("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${A(w("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${A(w("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${A(w("dlStrokeNever"))}</button>
              </span>
            </div>
            <!-- 2026-09-08\uFF1A\u6253\u5B57\u6295\u7968\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\uFF0C
                 \u800C\u662F\u8ABF\u6697\u3002\u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${A(w("dlDimPollVotes"))}
                <span class="sub">${A(w("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${A(w("dlPollVoteOpacity"))}
                <span class="sub">${A(w("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>
      </details>`}let m=[{key:"Opacity",labelKey:"displayLabelOpacity",kind:"slider",fmt:H=>`${Math.round(H)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",kind:"size",fmt:H=>`${H}px`},{key:"Speed",labelKey:"displayLabelSpeed",kind:"slider",fmt:H=>`${(+H).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",kind:"color",fmt:H=>`#${String(H||"").replace(/^#/,"").toUpperCase()||"\u2014"}`},{key:"FontFamily",labelKey:"displayLabelFontFamily",kind:"pick",fmt:H=>H||"\u2014"},{key:"Layout",labelKey:"displayLabelLayout",kind:"pick",fmt:H=>b(H)},{key:"Effects",labelKey:"displayLabelEffect",kind:"effects",fixed:!0},{key:"stroke",labelKey:"themeDetailStroke",kind:"theme",fixed:!0},{key:"shadow",labelKey:"themeDetailShadow",kind:"theme",fixed:!0}];function b(H){let X=D.find(Z=>Z.value===H);return X?w(X.labelKey):H||"\u2014"}function v(H){let X=window.AdminThemes;return X&&typeof X.segOf=="function"?X.segOf(H):null}function o(H){let X=I.options||{};if(H.kind==="theme")return!1;if(H.kind==="effects")return!X.Effects||X.Effects[0]!==!1;let Z=X[H.key];return!!(Z&&Z[0]!==!1)}function s(H){let X=window.AdminThemes,Z=X&&typeof X.styleDefaults=="function"?X.styleDefaults():null;return Z&&Z[H]||null}function u(H){let X=s(H);return X&&X.source==="theme"?X.value:(I.options&&I.options[H]||[])[3]}function t(H){if(H.key!=="Color"&&H.key!=="FontFamily")return"";let X=s(H.key);return X?X.source==="theme"?`<span class="admin-ui-chip" data-source-chip="theme">${A(w("styleFromTheme"))}</span>`:X.rejected?`<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${A(String(X.theme_value||""))}">${A(w("styleThemeValueUnused"))}</span>`:"":""}function n(H){let X=o(H),Z=a(H);return(Z?`<div class="admin-dsp2-value-badge ${X?"is-on":""}" data-value-badge>${A(Z)}</div>`:"")+t(H)}function a(H){if(H.key==="Color"||H.key==="FontFamily")return H.fmt(u(H.key));if(H.kind==="theme"){let se=v(H.key),fe=C[H.key].find(ve=>ve.value===se);return fe?w(fe.labelKey):"\u2014"}if(H.kind==="effects")return"";let Z=(I.options&&I.options[H.key]||[])[3];return H.fmt?H.fmt(Z):Z!=null?String(Z):"\u2014"}function i(H,X){let Z=X[3],se=R[H.key],fe=o(H);if(H.kind==="slider"){let ve=se,ge=Z!=null?Number(Z):ve.min,be=isFinite(ge)?ge:ve.min,Ce=(be-ve.min)/Math.max(1e-6,ve.max-ve.min)*100,_e=A(w(H.labelKey));return`
        <div class="admin-dsp2-track" data-track="${H.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${H.key}" data-num-index="3"
            aria-label="${_e}"
            min="${ve.min}" max="${ve.max}" step="${T(H.key)}" value="${A(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Ce.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Ce.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${H.key}" aria-label="${_e}"
              min="${ve.min}" max="${ve.max}" step="${T(H.key)}" value="${A(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(H.kind==="size"){let ve=Number(Z);return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${P.map(ge=>{let be=ve===ge;return`<button type="button" class="admin-dsp2-fchip ${be?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ge}" aria-pressed="${be}">${ge}</button>`}).join("")}
        </div>`}if(H.kind==="color"){let ve="#"+String(Z||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${E().map(ge=>{let be=ge.slice(1),Ce=ge.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Ce?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ge}" aria-label="${ge}" aria-pressed="${Ce}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${A(w("specificColor"))}">
            <span class="sr-only">${A(w("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${A(ve)}" />
          </label>
        </div>
      `}if(H.key==="FontFamily"){let ve=(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(we=>{let Be=typeof we=="string"?we:we.name||we.family||"",Ne=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Be,label:Ne}}).filter(we=>we.value),ge=String(Z||""),be=fe&&!!I.allowlistEdit.FontFamily,Ce=be?I.allowlistEdit.FontFamily:new Set(d("FontFamily").map(we=>r("FontFamily",we))),_e=!be&&Ce.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map(we=>{let Be=we.value===ge,Ne=be?Ce.has(we.value):_e||Ce.has(we.value),Re=["admin-dsp2-tchip",Be?"is-active":"",be?"is-editing":"",fe&&!Ne?"is-blocked":""].filter(Boolean).join(" "),ze=be?`data-allow-key="FontFamily" data-allow-value="${A(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${A(we.value)}"`;return`<button type="button" class="${Re}" ${ze}
              aria-pressed="${be?Ne?"true":"false":Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ne?"\u2713 ":""}</span>`:""}${A(we.label)}
            </button>`}).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${A(w("adminRouteTitle_fonts"))} \u203A</a>
        </div>
        ${y(H)}
      `}if(H.key==="Layout"){let ve=String(Z||"scroll"),ge=fe&&!!I.allowlistEdit.Layout,be=ge?I.allowlistEdit.Layout:new Set(d("Layout").map(_e=>r("Layout",_e))),Ce=!ge&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${D.map(_e=>{let we=_e.value===ve,Be=ge?be.has(_e.value):Ce||be.has(_e.value),Ne=["admin-dsp2-tile",we?"is-active":"",ge?"is-editing":"",fe&&!Be?"is-blocked":""].filter(Boolean).join(" "),Re=ge?`data-allow-key="Layout" data-allow-value="${_e.value}"`:`data-chip-key="Layout" data-chip-value="${_e.value}"`;return`<button type="button" class="${Ne}" ${Re}
              aria-pressed="${ge?Be?"true":"false":we?"true":"false"}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${_e.icon}</span>
              <span class="admin-dsp2-tile-label">${w(_e.labelKey)}</span>
              ${ge?`<span class="admin-dsp2-allow-mark">${Be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${y(H)}
      `}if(H.kind==="effects")return`<a class="admin-dsp2-link" href="#/effects">${A(w("adminNavEffects"))} \u203A</a>`;if(H.kind==="theme"){let ve=v(H.key);return`
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${H.key}" role="group"
              aria-label="${A(w(H.labelKey))}">
          ${C[H.key].map(ge=>{let be=ge.value===ve;return`<button type="button" data-theme-opt="${ge.value}" class="${be?"is-active":""}"
              aria-pressed="${be?"true":"false"}">${A(w(ge.labelKey))}</button>`}).join("")}
        </span>`}return""}function y(H){if(!g(H.key)||!o(H))return"";let X=!!I.allowlistEdit[H.key],Z=d(H.key),se=l(H.key).length||0,fe=Z.length>0?w("displayAllowSummaryPartial",{n:Z.length,total:se,label:k(H.key)}):w("displayAllowSummaryAll",{total:se});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${H.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${H.key}">${A(fe)}</span>
        ${X?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${H.key}">${A(w("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${H.key}">${A(w("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${H.key}">${A(w("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${H.key}">${A(w("displayEditAllowlistTitle"))}</button>
        `}
      </div>`}function k(H){return w(H==="Color"?"displayLabelColor":H==="FontFamily"?"displayLabelFontFamily":H==="Layout"?"displayLabelLayout":"displayLabelOption")}function S(H,X){if(H.kind!=="slider"&&H.kind!=="size"||!o(H))return"";let Z=R[H.key],se=X[1]!=null?X[1]:Z.min,fe=X[2]!=null?X[2]:Z.max,ve=T(H.key),ge=(be,Ce,_e,we)=>`
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${A(w(be))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="${Ce}" ${we}
              value="${A(String(_e))}" />
            ${Z.unit?`<span>${Z.unit}</span>`:""}
          </span>
        </label>`;return`
      <div class="admin-dsp2-band">
        ${ge("displayMinAudience",1,se,`min="${Z.min}" max="${Z.max}" step="${ve}"`)}
        ${ge("displayMaxAudience",2,fe,`min="${Z.min}" max="${Z.max}" step="${ve}"`)}
        ${ge("mlStep","step",ve,'min="0.1" step="0.1"')}
      </div>`}function B(H){let X=o(H),Z=A(w(H.labelKey)+" \xB7 "+w("displayColAudience")),se=A(w(X?"displayCustomizable":"displayLocked")),fe=H.fixed?`disabled aria-disabled="true" data-fixed-toggle="${H.key}"`:`data-toggle-key="${H.key}"`;return`
      <button type="button" class="admin-dsp2-pill ${X?"is-on":""}" ${fe}
        aria-pressed="${X?"true":"false"}" aria-label="${Z}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${se}</span>
      </button>`}function j(H){let X=I.options&&I.options[H.key]||[!1,"","",""],Z=o(H),se=H.kind==="color"&&Z?'<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>':"";return`
      <div class="admin-dsp2-row ${Z?"is-on":"is-off"} ${H.fixed?"is-fixed":""}" data-row-key="${H.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${A(w(H.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${n(H)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${i(H,X)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${S(H,X)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${B(H)}</div>
      </div>${se}`}function J(){let H=document.getElementById("dsp2-rows");if(H){if(!I.options){H.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):A(w("loading"))}`;return}H.innerHTML=m.map(j).join(""),Y(),ee()}}function E(){let H=d("Color");return[...new Set((H.length?H:M).map(X=>"#"+String(X).replace(/^#/,"").toUpperCase()).filter(X=>/^#[0-9A-F]{6}$/.test(X)))]}function O(H){let X=H.slice(1).match(/.{2}/g).map(Z=>{let se=parseInt(Z,16)/255;return se<=.04045?se/12.92:((se+.055)/1.055)**2.4});return X[0]*.2126+X[1]*.7152+X[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function $(H,X="error"){I.paletteNotice={message:H,type:X};let Z=document.querySelector("[data-palette-feedback]");Z&&(Z.textContent=H,Z.classList.toggle("is-error",X==="error"))}function q(H,X=!0){let Z=document.querySelector("[data-admin-color-palette]"),se=Z?.querySelector("[data-palette-preview-text]");!se||!/^#[0-9A-F]{6}$/i.test(H)||(I.palettePreview=H.toUpperCase(),se.style.color=H,Z.querySelector("[data-palette-preview-code]").textContent=H.toUpperCase(),Z.querySelectorAll("[data-palette-preview]").forEach(fe=>{let ve=fe.dataset.palettePreview===H.toUpperCase();fe.setAttribute("aria-pressed",String(ve)),fe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),X&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(se.getAnimations().forEach(fe=>fe.cancel()),se.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function Y(){let H=document.querySelector("[data-admin-color-palette]");if(!H||!I.options)return;let X=E(),Z=(I.options.ViewerColorPicker||[!0])[0]!==!1,se=I.paletteBusy?"disabled":"",fe=I.palettePreview||X[0],ve=A(I.paletteDraft),ge=I.paletteNotice;H.setAttribute("aria-busy",String(I.paletteBusy)),H.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${A(w("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${A(w("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${A(w("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${X.length}</strong><span>${A(w("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${X.map((be,Ce)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${O(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${A(w("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===fe}" ${se}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Ce+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${X.length<=1?"disabled":se}
                aria-label="${A(w("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${A(w("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${A(w("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(I.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${se} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${I.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${se} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${X.length>=64?"disabled":se}>
                <span aria-hidden="true">\uFF0B</span> ${A(w("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${A(w(X.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${ge?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${ge?A(ge.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${A(w("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${A(w("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${fe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${A(w("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${A(w("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${A(w("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Z?"checked":""} ${se} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${A(w("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,q(fe,!1)}async function V(H,X){if(I.paletteBusy)return;let Z=document.querySelector("[data-admin-color-palette]");I.paletteBusy=!0,Z.setAttribute("aria-busy","true"),Z.querySelector("[data-palette-sync-status]").textContent=w("viewerPaletteSaving"),Z.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let se=await le("Color",H);I.paletteBusy=!1,I.paletteNotice={type:se?"success":"error",message:w(se?"viewerPaletteSaved":"updateFailed")},se&&X&&(I.palettePreview=X),Y(),(X&&se?Z.querySelector(`[data-palette-preview="${X}"]`):Z.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function U(H,X){let Z=I.options&&I.options[H];return Z&&Z[3]!=null?Z[3]:X}function ee(){let H=document.querySelector("[data-preview-stage]"),X=document.querySelector("[data-preview-pill='1']"),Z=document.querySelector("[data-preview-pill='2']"),se=document.querySelector("[data-preview-foot-l]"),fe=document.querySelector("[data-preview-foot-r]");if(!H||!X||!Z||!I.options)return;let ve=Number(U("FontSize",32)),ge=Number(U("Opacity",92)),be=Number(U("Speed",1)),Ce="#"+String(u("Color")||U("Color","7DD3FC")).replace(/^#/,""),_e=String(u("FontFamily")||U("FontFamily","NotoSansTC")),we=String(U("Layout","scroll")),Be=Math.min(ve,36),Ne=Math.max(0,Math.min(100,ge))/100,Re=window.AdminThemes&&window.AdminThemes.activeStyles&&window.AdminThemes.activeStyles()||{},ze=Re.textStroke?Math.max(0,Math.min(6,Number(Re.strokeWidth)||0)):0,et=/^#[0-9a-fA-F]{3,8}$/.test(String(Re.strokeColor||""))?Re.strokeColor:"#000000",nt=Re.textShadow?Math.max(0,Math.min(40,Number(Re.shadowBlur)||0)):0;X.style.fontSize=Be+"px",X.style.color=Ce,X.style.opacity=Ne.toFixed(2),X.style.fontFamily=_e+", system-ui, sans-serif",X.style.webkitTextStroke=ze?`${ze}px ${et}`:"",X.style.paintOrder=ze?"stroke fill":"",X.style.textShadow=nt?`0 0 ${nt}px ${Ce}`:"none",Z.style.fontSize=(Be*.78).toFixed(0)+"px",Z.style.opacity=(Ne*.9).toFixed(2),Z.style.fontFamily=_e+", system-ui, sans-serif",H.dataset.layout=we,se&&(se.textContent=`${b(we)} \xB7 ${ve}px \xB7 ${(+be).toFixed(1)}\xD7`),fe&&(fe.textContent=w("displayOpacitySuffix",{n:Math.round(ge)}))}let W=["Color","ViewerColorPicker","FontFamily"];function Q(H){W.includes(H)&&window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh()}async function te(H,X){try{let Z=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:H,enabled:!!X})});if(!Z.ok)throw new Error("toggle "+Z.status);Array.isArray(I.options[H])||(I.options[H]=[!1,"","",""]),I.options[H][0]=!!X,X||delete I.allowlistEdit[H],J(),Q(H),H==="ViewerColorPicker"?document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0}):document.querySelector(`[data-toggle-key="${H}"]`)?.focus({preventScroll:!0});let se=m.find(ve=>ve.key===H),fe=H==="ViewerColorPicker"?w("viewerPaletteAllowPicker"):se?w(se.labelKey):H;window.showToast&&window.showToast(`${fe} ${w("settingsUpdated")}`,!0)}catch(Z){console.warn("[admin-display] toggle failed:",Z),window.showToast&&window.showToast(w("updateFailed"),!1),await me(),J()}}async function ie(H,X,Z){try{let se=Z;if(H==="Color"){let ve=String(se).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(w("colorFormatError"),!1);return}se=ve.toUpperCase()}else if(H==="Opacity"||H==="FontSize"||H==="Speed"){se=H==="Speed"?parseFloat(se):parseInt(se,10);let ve=R[H];if(Number.isNaN(se)||ve&&(se<ve.min||se>ve.max)){window.showToast&&window.showToast(`${H} ${ve.min}\u2013${ve.max}`,!1);return}}let fe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:H,value:se,index:X})});if(!fe.ok)throw new Error("update "+fe.status);Array.isArray(I.options[H])||(I.options[H]=[!1,"","",""]),I.options[H][X]=se,ue(H),ee(),Q(H)}catch(se){console.warn("[admin-display] update failed:",se),window.showToast&&window.showToast(w("updateFailed"),!1)}}async function le(H,X){try{let Z=await window.csrfFetch(`/admin/options/${encodeURIComponent(H)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:X})});if(!Z.ok)throw new Error("allowlist "+Z.status);let se=await Z.json().catch(()=>({}));se&&Array.isArray(se.option)?I.options[H]=se.option:Array.isArray(I.options[H])&&(I.options[H][1]=X.slice()),ue(H),ee(),Q(H);let fe=l(H).length||0,ve=H==="Color"?w("settingsUpdated"):X.length>0?w("displayAllowlistToastPartial",{key:H,n:X.length,total:fe}):w("displayAllowlistToastAll",{key:H});return H!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(Z){return console.warn("[admin-display] allowlist failed:",Z),H!=="Color"&&window.showToast&&window.showToast(w("updateFailed"),!1),!1}}function ue(H){let X=document.querySelector(`#${h} [data-row-key="${H}"]`);if(!X||!I.options)return;let Z=m.find(ge=>ge.key===H);if(!Z)return;let se=I.options[H]||[!1,"","",""],fe=se[3],ve=X.querySelector("[data-row-badges]");if(ve&&(ve.innerHTML=n(Z)),g(H)||Z.kind==="theme"){let ge=X.querySelector("[data-picker-host]");ge&&(ge.innerHTML=i(Z,se));return}if(H==="FontSize"){X.querySelectorAll(`[data-chip-key="${H}"]`).forEach(be=>{let Ce=String(be.getAttribute("data-chip-value"))===String(fe??"");be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")});let ge=X.querySelector("[data-band-host]");ge&&!ge.contains(document.activeElement)&&(ge.innerHTML=S(Z,se))}if(Z.kind==="slider"){let ge=R[H],be=Number(fe??ge.min),Ce=(be-ge.min)/Math.max(1e-6,ge.max-ge.min)*100,_e=X.querySelector(".admin-dsp2-slider-fill"),we=X.querySelector(".admin-dsp2-slider-thumb");_e&&(_e.style.width=Ce.toFixed(2)+"%"),we&&(we.style.left=`calc(${Ce.toFixed(2)}% - 8px)`);let Be=X.querySelector(".admin-dsp2-range");Be&&document.activeElement!==Be&&(Be.value=String(be));let Ne=X.querySelector(".admin-dsp2-num");Ne&&document.activeElement!==Ne&&(Ne.value=String(be));let Re=X.querySelector("[data-band-host]");Re&&!Re.contains(document.activeElement)&&(Re.innerHTML=S(Z,se))}}async function me(){try{let H=await fetch("/get_settings",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);I.options=await H.json()}catch(H){console.warn("[admin-display] /get_settings failed:",H),I.options=I.options||{}}}async function Ie(){try{let H=await fetch("/fonts",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);let X=await H.json();I.fonts=Array.isArray(X)?X:X.fonts||[]}catch{I.fonts=["NotoSansTC","Inter"]}}function Ee(){if(!I.options){window.showToast&&window.showToast(w("loading"),!1);return}let H={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:I.options},X=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Z=URL.createObjectURL(X),se=document.createElement("a");se.href=Z,se.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(Z),window.showToast&&window.showToast(w("displayExportDone"),!0)}let Le=["Opacity","FontSize","Speed","Color","FontFamily","Layout"],re=["Color","FontFamily","Layout"];function oe(){let H=window.DANMU_CONFIG?.settingDefaults||{},X=window.DANMU_CONFIG?.settingRanges||{},Z=[];for(let se of Le){let fe=H[se];if(!Array.isArray(fe)||fe.length<4)return null;if(Z.push({url:"/admin/Set",body:{key:se,enabled:!!fe[0]}}),re.includes(se)){if(fe[3]!==""&&fe[3]!=null){let ve=se==="Color"?String(fe[3]).replace(/^#/,"").toUpperCase():fe[3];Z.push({url:"/admin/update",body:{type:se,value:ve,index:3}})}}else{let ve=X[se];if(!ve)return null;let ge=be=>Math.min(ve.max,Math.max(ve.min,Number(be)));Z.push({url:"/admin/update",body:{type:se,value:ve.min,index:1}}),Z.push({url:"/admin/update",body:{type:se,value:ve.max,index:2}}),Z.push({url:"/admin/update",body:{type:se,value:ge(fe[3]),index:3}})}}return Z}async function ce(){if(!await window.HudConfirm?.open({icon:"\u21A9",title:w("displayRevertConfirmTitle"),subtitle:w("cfmSubRevertDefaults"),severity:"danger",body:w("displayRevertConfirm"),confirmLabel:w("displayDeployRevert")}))return;let X=!1;try{let Z=oe();if(!Z)throw new Error("server defaults unavailable");for(let se of Z){let fe=await window.csrfFetch(se.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(se.body)});if(!fe||!fe.ok)throw new Error(`${se.url} ${fe?fe.status:"?"}`)}}catch(Z){X=!0,console.warn("[admin-display] revert failed:",Z)}await me(),J(),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh(),window.showToast&&window.showToast(w(X?"updateFailed":"displayRevertDone"),!X)}function z(H){H.addEventListener("click",X=>{let Z=X.target.closest("[data-palette-preview]");if(Z){q(Z.dataset.palettePreview);return}let se=X.target.closest("[data-palette-remove]");if(se){let _e=E();if(_e.length>1){let we=_e.filter(Be=>Be!==se.dataset.paletteRemove);V(we,we.includes(I.palettePreview)?I.palettePreview:we[0])}return}if(X.target.closest("[data-palette-add]")){let _e=H.querySelector("[data-palette-hex]"),we=String(_e.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){I.paletteInvalid=!0,_e.setAttribute("aria-invalid","true"),$(w("colorFormatError"));return}let Be=E();if(Be.includes("#"+we)){$(w("viewerPaletteDuplicate"));return}Be.length<64&&V([...Be,"#"+we],"#"+we);return}let fe=X.target.closest("[data-toggle-key]");if(fe){let _e=fe.getAttribute("data-toggle-key"),we=!!(I.options[_e]||[])[0];te(_e,!we);return}let ve=X.target.closest("[data-theme-opt]");if(ve){let _e=ve.closest("[data-theme-seg]");_e&&window.AdminThemes&&window.AdminThemes.setSeg&&window.AdminThemes.setSeg(_e.getAttribute("data-theme-seg"),ve.getAttribute("data-theme-opt"));return}let ge=X.target.closest("[data-allow-action]");if(ge){let _e=ge.getAttribute("data-allow-action"),we=ge.getAttribute("data-allow-key");if(!we)return;if(_e==="edit"){let Be=d(we).map(Ne=>r(we,Ne));I.allowlistEdit[we]=new Set(Be.length?Be:l(we)),ue(we);return}if(_e==="cancel"){delete I.allowlistEdit[we],ue(we);return}if(_e==="clear"){delete I.allowlistEdit[we],le(we,[]);return}if(_e==="apply"){let Be=I.allowlistEdit[we]||new Set,Ne=l(we),Re=Array.from(Be),ze=Ne.length>0&&Re.length===Ne.length&&Ne.every(et=>Be.has(et));delete I.allowlistEdit[we],le(we,ze?[]:Re);return}}let be=X.target.closest("[data-allow-key][data-allow-value]");if(be){let _e=be.getAttribute("data-allow-key"),we=I.allowlistEdit[_e];if(we){let Be=r(_e,be.getAttribute("data-allow-value"));we.has(Be)?we.delete(Be):we.add(Be),ue(_e)}return}let Ce=X.target.closest("[data-chip-key]");if(Ce){let _e=Ce.getAttribute("data-chip-key"),we=Ce.getAttribute("data-chip-value");H.querySelectorAll(`[data-chip-key="${_e}"]`).forEach(Be=>Be.classList.remove("is-active")),Ce.classList.add("is-active"),ie(_e,3,we);return}if(X.target.closest("#dsp2-revert")){ce();return}if(X.target.closest("#dsp2-export")){Ee();return}}),H.addEventListener("keydown",X=>{X.key==="Enter"&&X.target.matches("[data-palette-hex]")&&!X.isComposing&&(X.preventDefault(),H.querySelector("[data-palette-add]")?.click())}),H.addEventListener("change",X=>{let Z=X.target;if(!Z)return;if(Z.matches("[data-viewer-color-picker]")){Z.disabled=!0,te("ViewerColorPicker",Z.checked);return}if(Z.closest("[data-vi-toggle]")){Oe({enabled:Z.checked});return}if(Z.closest("[data-vi-ext]")){let be=Array.from(H.querySelectorAll("[data-vi-ext]")).filter(Ce=>Ce.checked).map(Ce=>Ce.getAttribute("data-vi-ext"));Oe({extensions:be});return}if(Z.id==="viewer-images-hosts"){Oe({hosts:Z.value.split(/[\s,]+/).filter(Boolean)});return}if(Z.classList&&Z.classList.contains("admin-dsp2-range")){ie(Z.getAttribute("data-range-key"),3,Z.value);return}let se=Z.getAttribute("data-num-key");if(!se)return;let fe=Z.getAttribute("data-num-index");if(fe==="step"){L(se,Z.value);let be=Z.closest("[data-row-key]"),Ce=m.find(we=>we.key===se),_e=be&&be.querySelector("[data-band-host]");_e&&Ce&&(_e.innerHTML=S(Ce,I.options[se]||[])),ue(se);return}let ve=parseInt(fe,10);if(Number.isNaN(ve))return;let ge=Z.value;se==="Color"&&(ge=String(ge).replace(/^#/,"").toUpperCase()),ie(se,ve,ge)}),H.addEventListener("input",X=>{let Z=X.target;if(Z){if(Z.matches("[data-palette-picker]")){I.paletteDraft=Z.value.toUpperCase(),I.paletteInvalid=!1;let se=H.querySelector("[data-palette-hex]");se.value=I.paletteDraft,se.removeAttribute("aria-invalid"),$("","success"),q(I.paletteDraft);return}if(Z.matches("[data-palette-hex]")){I.paletteDraft=Z.value,I.paletteInvalid=!1;let se=Z.value.replace(/^#/,"");Z.removeAttribute("aria-invalid"),$("","success"),/^[0-9a-fA-F]{6}$/.test(se)&&(H.querySelector("[data-palette-picker]").value="#"+se,q("#"+se));return}if(Z.classList&&Z.classList.contains("admin-dsp2-range")){let se=Z.getAttribute("data-range-key"),fe=R[se],ve=Number(Z.value),ge=(ve-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,be=Z.closest("[data-row-key]");if(be){let Ce=be.querySelector(".admin-dsp2-slider-fill"),_e=be.querySelector(".admin-dsp2-slider-thumb");Ce&&(Ce.style.width=ge.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(ve))}Array.isArray(I.options[se])&&(I.options[se][3]=ve),ee();return}if(Z.classList&&Z.classList.contains("admin-dsp2-num")){let se=Z.getAttribute("data-num-key"),fe=parseInt(Z.getAttribute("data-num-index"),10);if(Number.isNaN(fe)||!Array.isArray(I.options[se]))return;I.options[se][fe]=Z.type==="number"?Number(Z.value):Z.value,ee()}}})}function ne(H){H.addEventListener("click",X=>{let Z=X.target.closest("[data-dl-step]");if(Z){let fe=Z.closest("[data-dl-stepper]");if(!fe)return;let ve=fe.getAttribute("data-dl-stepper"),ge=Number(Me[ve]??0);De(ve,ge+Number(Z.getAttribute("data-dl-step")));return}let se=X.target.closest("[data-dl-opt]");if(se){let fe=se.closest("[data-dl-seg]");if(!fe)return;let ve=fe.getAttribute("data-dl-seg"),ge=se.getAttribute("data-dl-opt");De(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(ge):ge)}}),H.addEventListener("change",X=>{let Z=X.target.closest("[data-dl-toggle]");if(Z){De(Z.getAttribute("data-dl-toggle"),Z.checked);return}let se=X.target.closest("[data-dl-range]");se&&De(se.getAttribute("data-dl-range"),Number(se.value))}),H.addEventListener("input",X=>{let Z=X.target.closest("[data-dl-range]");if(!Z)return;let se=Z.getAttribute("data-dl-range"),fe=H.querySelector(`[data-dl-value="${se}"]`);fe&&(fe.textContent=Z.value+"%")})}let ae=null,de=null,he={},ke=0,$e="",pe=H=>(H&&H.hosts||[]).join(`
`);function xe(){return Object.assign({},ae||{},de||{},he)}function Te(){let H=document.getElementById(h);if(!H||!ae)return;let X=xe(),Z=H.querySelector("[data-vi-toggle]");Z&&(Z.checked=!!X.enabled),Ae(H,!!X.enabled);let se=H.querySelector("#viewer-images-hosts"),fe=de&&"hosts"in de||"hosts"in he;se&&!fe&&document.activeElement!==se&&se.value===$e&&(se.value=pe(ae),$e=se.value);let ve=X.extensions||[];H.querySelectorAll("[data-vi-ext]").forEach(ge=>{ge.checked=ve.indexOf(ge.getAttribute("data-vi-ext"))!==-1})}function Ae(H,X){H.querySelectorAll("[data-vi-row]").forEach(Z=>{Z.style.display=X?"":"none"})}async function Fe(H){try{let X=await H(),Z=null;try{Z=await X.json()}catch{Z=null}return{ok:!!(X.ok&&Z),body:Z}}catch(X){return console.warn("[admin-display] viewer-images request failed:",X),{ok:!1,body:null}}}async function Pe(){let H=ke,X=await Fe(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),Z=!de&&!Object.keys(he).length;X.ok&&Z&&H===ke&&(ae=X.body,Te())}function qe(H){let X=H&&H.code;return X==="invalid_host"?w("viErrInvalidHost",{host:String(H.detail||"")}):X==="too_many_hosts"?w("viErrTooManyHosts",{max:H.max}):w("updateFailed")}function Oe(H){ke+=1;let X=document.getElementById("viewer-images-hosts");if("hosts"in H&&X&&($e=X.value),"enabled"in H){let Z=document.getElementById(h);Z&&Ae(Z,!!H.enabled)}Object.assign(he,H),de||je()}async function je(){if(de||!Object.keys(he).length)return;let H=he;he={},de=H;let X=await Fe(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}));if(de=null,X.ok){ae=X.body,Te(),je();return}let Z=he;he={},window.showToast&&window.showToast(qe(X.body),!1),("hosts"in H||"hosts"in Z)&&($e=null),Te(),Pe()}let Me={};function We(){let H=document.getElementById(f);H&&Object.entries(Me).forEach(([X,Z])=>{let se=H.querySelector(`[data-dl-value="${X}"]`);se&&(se.textContent=X==="max_tracks"?Number(Z)===0?w("dlMaxTracksAuto"):String(Z):String(Z)+"%");let fe=H.querySelector(`[data-dl-range="${X}"]`);fe&&document.activeElement!==fe&&(fe.value=String(Z));let ve=H.querySelector(`[data-dl-toggle="${X}"]`);ve&&(ve.checked=!!Z);let ge=H.querySelector(`[data-dl-seg="${X}"]`);ge&&ge.querySelectorAll("[data-dl-opt]").forEach(be=>{let Ce=be.getAttribute("data-dl-opt")===String(Z);be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")})})}async function Ge(){try{let H=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!H.ok)return;Me=await H.json(),We()}catch(H){console.warn("[admin-display] display-layer fetch failed:",H)}}async function De(H,X){let Z=Me[H];Me[H]=X,We();try{let se=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[H]:X})});if(!se.ok)throw new Error("display-layer "+se.status);Me=await se.json(),We()}catch(se){Me[H]=Z,We(),console.warn("[admin-display] display-layer update failed:",se),window.showToast&&window.showToast(w("updateFailed"),!1)}}let Ke=!1;async function Ue(){let H=document.getElementById("sec-viewer-config-limits");if(!H||Ke)return;Ke=!0;let X=(Z,se)=>{let fe=H.querySelector(Z);fe&&(fe.textContent=se==null?"\u2014":String(se))};try{let Z=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Z.ok)return;let se=await Z.json(),fe=se.rate_limits&&se.rate_limits.fire||{},ve=se.rate_limits&&se.rate_limits.totals||{},ge=Math.max(1,(se.server_time||0)-(se.server_started_at||0));X("[data-vc-msg-len]",100),X("[data-vc-nick-len]","\u2014"),X("[data-vc-dedup]","\u2014");let be=(fe.hits||0)/ge;X("[data-vc-avg-rate]",be.toFixed(2)+"/s"),X("[data-vc-throttled]",fe.violations||0),X("[data-vc-blocked]",ve.locked_sources||0),X("[data-vc-deduped]",0)}catch{}finally{Ke=!1}}function Je(){F.forEach(H=>{let X=document.getElementById(H);X&&X.setAttribute("data-admin-ui-replaced","1")})}function Ve(){let H=document.querySelector(".admin-dash-grid");return!!H&&H.dataset.activeRoute==="viewer"}function He(){let H=null;x.forEach(X=>{let Z=document.getElementById(X);Z&&(H&&H.parentElement===Z.parentElement&&H.nextElementSibling!==Z&&H.after(Z),H=Z)})}let Ye=null;function bn(){let H=window.ServerI18n&&window.ServerI18n.currentLang;if(!H||H===Ye)return;let X=Ye===null;if(Ye=H,X)return;let Z=document.createElement("div"),se=document.getElementById(h);se&&(Z.innerHTML=e(),se.replaceChildren(...Z.firstElementChild.childNodes),J(),$e="",Te());let fe=document.getElementById(f);if(fe){let ve=fe.open;Z.innerHTML=p(),fe.replaceChildren(...Z.firstElementChild.childNodes),fe.open=ve,We()}}let Xe=!1;function Qe(){if(bn(),!Ve()){Xe=!1;return}He(),!Xe&&(Xe=!0,Ue(),I.options&&me().then(J),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh())}function wn(){if(document.getElementById(c))return;let H=document.getElementById("settings-grid");if(!H)return;function X(se,fe,ve,ge,be,Ce){let _e=Ce?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+se+'</div></div><div class="admin-vc-limit-row__value" style="color:'+_e+'">'+ve+'<span class="admin-vc-limit-row__unit">'+(ge||"")+"</span></div>"+(be?'<div class="admin-vc-limit-row__hint">'+be+"</div>":"")+"</div>"}let Z=document.createElement("details");Z.id=c,Z.className="admin-dsp2-fold lg:col-span-2",Z.innerHTML='<summary class="admin-ui-page-title">'+A(w("displayContentLimitsTitle"))+'</summary><div class="admin-vc-limits-grid"><div class="admin-vc-limit-card">'+X(A(w("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",A(w("displayMsgLenUnit")),A(w("displayMsgLenHint")))+X(A(w("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",A(w("displayNickLenUnit")),A(w("displayNickLenHint")))+X(A(w("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",A(w("displayDedupHint")))+X(A(w("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+A(w("displayProfanityDefaultValue"))+"</span>","",A(w("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+A(w("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(w("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+A(w("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(w("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+A(w("displayAuditLogLink"))+"</a></div></div>",H.appendChild(Z),He()}async function Ze(){let H=document.getElementById("settings-grid");if(!H)return;let X=!1;document.getElementById(h)||(H.insertAdjacentHTML("beforeend",e()),z(document.getElementById(h)),X=!0),document.getElementById(f)||(H.insertAdjacentHTML("beforeend",p()),ne(document.getElementById(f)),X=!0),Je(),wn(),Qe(),X&&(I.options||await Promise.all([me(),Ie()]),Ge(),Pe(),J())}function tt(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&(!document.getElementById(h)||!document.getElementById(f))?Ze():Je(),Qe()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Qe),document.addEventListener("admin-route-applied",Qe),document.addEventListener("admin-panel-rendered",Ze),document.addEventListener("admin-themes-changed",()=>{ue("stroke"),ue("shadow"),ue("Color"),ue("FontFamily"),ee()}),Ze()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt()})()});var At=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function h(){let U=document.querySelector('meta[name="csrf-token"]');return U&&U.content||""}let f=window.DANMU_CONFIG||{},c=f.session||{logged_in:!1},x=f.settingRanges||{};function F(U,ee={}){let W={credentials:"same-origin",...ee},Q=new Headers(ee.headers||{});return Q.set("X-CSRF-Token",h()),W.headers=Q,fetch(U,W)}window.csrfFetch=F;let A=5e3,G={at:0,data:null,promise:null};function R(){return G.data&&Date.now()-G.at<A}function P(){return R()?Promise.resolve(G.data):(G.promise||(G.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>(U&&(G.data=U,G.at=Date.now()),G.promise=null,U)).catch(()=>(G.promise=null,null))),G.promise)}function M(U){if(!R())return null;let ee=G.data[U];return ee&&typeof ee=="object"&&"_error"in ee?null:ee}window.__danmuAdminBootstrap={prime:P,get:M},P();let D={},C=null,w=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let T=Object.create(null);Object.assign(T,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"viewer",tab:"themes"},themes:{nav:"viewer",tab:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let L={_key:U=>"admin:tab:"+U,get(U){try{return sessionStorage.getItem(this._key(U))||null}catch{return null}},set(U,ee){try{ee?sessionStorage.setItem(this._key(U),ee):sessionStorage.removeItem(this._key(U))}catch{}}};function I(U){let ee=(U||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!ee)return null;let W=ee[1],Q=ee[2]||null,te=null;if(!Q){let me=N[W];typeof me=="string"?W=me:me&&typeof me=="object"&&(W=me.nav||W,te=me.tab||null)}let ie=T[W],le=W,ue=null;if(typeof ie=="string"?le=ie:ie&&typeof ie=="object"&&(le=ie.nav||W,ue=ie.tab||null),ee[1]!==le&&(I._warned||(I._warned=new Set),!I._warned.has(ee[1]))){I._warned.add(ee[1]);try{console.info("[admin] legacy route #/"+ee[1]+" \u2192 #/"+le+(Q||ue||te?"/"+(Q||ue||te):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:le,tab:Q||ue||te,raw:W}}function K(U,ee){return ee?"#/"+U+"/"+ee:"#/"+U}let _={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function g(U,ee,W){if(W=W||U,!J[U]){let ue=N[U];if(typeof ue=="string")U=ue;else if(ue&&typeof ue=="object")ue.nav&&(U=ue.nav),!ee&&ue.tab&&(ee=ue.tab);else{let me=T[U];typeof me=="string"?U=me:me&&typeof me=="object"&&(me.nav&&(U=me.nav),!ee&&me.tab&&(ee=me.tab))}}if(U==="system"&&ee&&_[ee]){let ue=_[ee];U=ue.nav,ee=ue.tab||null,W=U}let Q=J[U]?U:"live",te=window.AdminTabs,ie=te?.hasTabsFor?.(Q)?te.resolveActiveTab(Q,ee):null,le=te?.foldFor?te.foldFor(Q,ee):null;return{route:Q,tab:ie,rawName:W,fold:le?ee:null,foldSection:le?le.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:T,tabMemory:L,parseHash:I,buildHash:K,resolve(U){let ee=I(U);return ee?g(ee.nav,ee.tab,U.match(/^#\/([\w-]+)/)[1]):null}});var d=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,r=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:P,bootstrapSection:M};async function e(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),c.logged_in&&j()}catch(U){console.error("Get settings failed:",U),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function p(U){return/^#[0-9A-Fa-f]{6}$/.test(U)}function m(U){return p(U)?U:/^[0-9A-Fa-f]{6}$/.test(U)?"#"+U:(U.startsWith("#")||(U="#"+U),p(U)?U:"#38bdf8")}function b(U,ee){if(x[U]){let W=parseInt(ee);if(isNaN(W)||W<x[U].min||W>x[U].max)return showToast(ServerI18n.t("settingRangeError",{key:U,min:x[U].min,max:x[U].max}),!1),!1}return!0}function v(U,ee,W){if(!W||!Array.isArray(D[U]))return;let Q=D[U][ee];U==="Color"&&typeof Q=="string"&&(Q=m(`#${Q}`)),Q!=null&&(W.value=String(Q))}let o={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-widgets"]}};function s(){Object.values(o).forEach(U=>{let ee=document.getElementById(U.containerId);ee&&U.orderedIds.forEach(W=>{let Q=document.getElementById(W);Q&&Q.parentElement!==ee&&ee.appendChild(Q)})})}function u(){C&&(C.disconnect(),C=null),s(),C=new MutationObserver(()=>{s()}),C.observe(a,{childList:!0,subtree:!0})}async function t(U,ee,W,Q=null){try{if(U==="Color"){if(!p(ee)){showToast(ServerI18n.t("colorFormatError"),!1),v(U,W,Q);return}ee=ee.replace("#","")}else if((U==="Speed"||U==="Opacity"||U==="FontSize")&&!b(U,ee)){v(U,W,Q);return}(await F("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:U,value:ee,index:W})})).ok?(Array.isArray(D[U])||(D[U]=[!1,"","",""]),D[U][W]=ee,showToast(`${U} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await e())}catch(te){console.error("Error:",te),showToast(`Update Error: ${te.message}`,!1),await e()}}async function n(U,ee){try{let W=await F("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:U,enabled:ee})}),Q=await W.json().catch(()=>({}));if(W.ok)Array.isArray(D[U])||(D[U]=[!1,"","",""]),D[U][0]=ee,showToast(`${U} ${ServerI18n.t("settingsUpdated")}`),j();else{let te=document.getElementById(`toggle-${U}`);te&&(te.checked=!ee),showToast(Q.error||ServerI18n.t("updateFailed"),!1)}}catch(W){console.error("Error:",W);let Q=document.getElementById(`toggle-${U}`);Q&&(Q.checked=!ee),showToast(`Update Error: ${W.message}`,!1)}}let a=document.getElementById("app-container"),i=document.getElementById("toast-container"),y=(U,ee=500)=>"requestIdleCallback"in window?window.requestIdleCallback(U,{timeout:ee}):setTimeout(U,ee);async function k(){let U=parseInt(document.getElementById("historyHours")?.value||"24");try{let[ee,W]=await Promise.all([fetch(`/admin/stats/hourly?hours=${U}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${U}&limit=10`,{credentials:"same-origin"})]);if(!ee.ok||!W.ok)return;let Q=await ee.json(),te=await W.json(),ie=document.getElementById("statsDashboard");if(!ie)return;let le=Q.distribution||[],ue=te.topTexts||[],me=Math.max(1,...le.map(oe=>oe.count)),Ie=le.reduce((oe,ce)=>oe+(ce.count||0),0),Ee=le.filter(oe=>oe.count>0).length,Le=le.map(oe=>`<div class="chart-bar" style="height: ${Math.round(oe.count/me*100)}%" title="${r(oe.hour)}: ${oe.count}"><span class="chart-label">${r(oe.hour.slice(-5,-3))}</span></div>`).join(""),re=ue.map((oe,ce)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ce+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${r(oe.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${oe.count}</td></tr>`).join("");ie.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Ie}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${Ee}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${U}h window</span>
            </div>
            <div class="stats-chart">${Le||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${ue.length?`<table class="w-full text-xs"><tbody>${re}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(ee){console.error("Load stats error:",ee)}}window._loadStats=k,window.csrfFetch=F,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>D;function S(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function B(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():S()}function j(){let U=d(),ee=(Ee,Le=!1)=>U[Ee]!==void 0?U[Ee]:Le,W=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Ee=>Array.isArray(D[Ee])&&D[Ee][0]===!0).length,Q=D.Layout&&D.Layout[3]?r(String(D.Layout[3]).replace(/_/g," ")):"scroll",te=D.FontFamily&&D.FontFamily[3]?r(String(D.FontFamily[3])):"NotoSansTC",ie=Ee=>Ee.map(Le=>`<span style="height:${Le*10}%;opacity:${.3+Le*.08}"></span>`).join(""),le=Q&&Q!=="off",ue=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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

                                <!-- \u5916\u89C0\u8207\u7D20\u6750\uFF1A\u5148\u662F\u89C0\u773E\u770B\u5230\u7684\u8868\u9762\uFF0C\u518D\u662F\u53EF\u4E0A\u50B3\u7684\u7D20\u6750\u5EAB\u3002
                                     2026-11-14 \u5F48\u5E55\u6A23\u5F0F\u5408\u4E00\uFF1A\u300C\u89C0\u773E\u9801\u300D\u8207\u300C\u4E3B\u984C\u300D\u5169\u5217\u4F75\u6210
                                     \u300C\u5F48\u5E55\u6A23\u5F0F\u300D\u4E00\u5217\uFF08slug \u6CBF\u7528 viewer\uFF09\uFF0C#/themes \u843D\u5728\u90A3\u4E00\u9801
                                     \u7684\u4E3B\u984C\u5340\u584A\u3002\u986F\u793A\u5C64\u9801\u6536\u5408\u5340\u7684\u5916\u89C0\u63A7\u5236\u4E5F\u642C\u904E\u53BB\u4E86\u3002 -->
                                <div class="admin-dash-nav-label" data-i18n="adminNavGroupAppearance">\u5916\u89C0\u8207\u7D20\u6750</div>
                                <button type="button" class="admin-dash-nav-row" data-route="viewer" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25D0</span>
                                    <span data-i18n="adminNavViewer">\u5F48\u5E55\u6A23\u5F0F</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="effects" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u2726</span>
                                    <span data-i18n="adminNavEffects">\u52D5\u756B\u6548\u679C</span>
                                    <span class="admin-dash-nav-badge" data-count-effects>\u2014</span>
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
                                         aria-label="${r(ServerI18n.t("adminSearchHint"))}"
                                         title="${r(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${r(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${r(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${le?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${r(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay" data-overlay-pill>
                                        <span class="dot"></span>
                                        ${r(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 <span data-overlay-pill-state>${r(le?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}</span>
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
                `;let me=document.getElementById("settings-grid"),Ie=D.Effects?D.Effects[0]!==!1:!0;me.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${Ie}">${Ie?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${Ie}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${Ie?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),me.insertAdjacentHTML("beforeend",`
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
    `),y(Y),O(),u(),y(V),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),E(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Le=document.querySelector("[data-telem-bars]");if(!Le)return;let re=document.querySelector("[data-telem-status]"),oe={cpu:100,mem:100,ws:100,rate:50};function ce(ae,de,he,ke,$e){let pe=Le.querySelector(`[data-telem-fill="${ae}"]`),xe=Le.querySelector(`[data-telem-value="${ae}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,de))+"%",pe.classList.toggle("is-warn",!ke)),xe&&(xe.textContent=he);let Te=Le.querySelector(`[data-telem-row="${ae}"]`);Te&&$e&&Te.setAttribute("title",$e)}function z(ae,de){if(!de||de<=0)return Math.round(ae)+" MB used";if(de>=1024){let he=(ae/1024).toFixed(1),ke=(de/1024).toFixed(1);return`${he} / ${ke} GB used`}return`${Math.round(ae)} / ${Math.round(de)} MB used`}async function ne(){try{let ae=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ae.ok)return;let de=await ae.json(),he=de.cpu_series||[],ke=de.mem_series||[],$e=de.mem_mb_series||[],pe=de.ws_series||[],xe=de.rate_series||[],Te=Me=>Me.length?Me[Me.length-1]:0,Ae=Number(Te(he)||0),Fe=Number(Te(ke)||0),Pe=Number(Te($e)||0),qe=Number(de.mem_total_mb||0),Oe=Number(Te(pe)||de.ws_clients||0),je=Number(Te(xe)||0)/60;if(ce("cpu",Ae,`${Ae.toFixed(0)}%`,Ae<90),ce("mem",Fe,`${Fe.toFixed(0)}%`,Fe<90,z(Pe,qe)),ce("ws",Oe/oe.ws*100,String(Oe),Oe<100),ce("rate",je/oe.rate*100,`${je.toFixed(1)}/s`,je<40),re){let Me=Ae>=90||Fe>=90||je>=40;re.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",re.classList.toggle("is-warn",Me)}}catch{}}setTimeout(ne,4e3),setInterval(ne,5e3)})()}let J={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u5F48\u5E55\u6A23\u5F0F",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-themes","sec-viewer-config-defaults","sec-viewer-theme","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-overlay-layout"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=J;function E(){let U=document.querySelector(".admin-dash-grid");if(!U)return;let ee="dashboard",W=null;function Q(pe){return o.moderation.orderedIds.indexOf(pe)!==-1?"moderation-grid":o.assets.orderedIds.indexOf(pe)!==-1?"assets-grid":"settings-grid"}function te(){let pe=U.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),xe=U.querySelector("[data-route-note]"),Te=U.querySelector("[data-route-action]"),Ae=Te?Array.prototype.slice.call(Te.children):[],Fe=De=>De.querySelector(".admin-ui-page-actions")||Ae.find(Ke=>Ke._adminHomeHead===De)||null,Pe=(De,Ke)=>{Te&&(Ae.forEach(Ue=>{Ue!==De&&(Ue._adminHomeHead?Ue._adminHomeHead.appendChild(Ue):Ue.remove())}),De&&De.parentNode!==Te&&(De._adminHomeHead=Ke,Te.appendChild(De)))};if(!pe){Pe(null,null);return}let qe=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(ee)),Oe=Array.prototype.slice.call(U.querySelectorAll(".admin-ui-page-head"));Oe.forEach(De=>De.classList.remove("is-merged-into-topbar"));let je=(J[ee]?.title||"").trim().replace(/\s+/g," "),Me=null,We=null,Ge=null;if(Oe.forEach(De=>{let Ke=De.querySelector(".admin-ui-page-title"),Ue=Ke&&Ke.textContent.trim().replace(/\s+/g," ");if(Ue&&(qe||Ue===pe||Ue===je)){if(De.offsetParent!==null){Me===null&&(Me=De.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ve=Fe(De);Ve&&!We&&(We=Ve,Ge=De)}De.classList.add("is-merged-into-topbar")}}),Pe(We,Ge),xe){let De=Me||"";xe.innerHTML!==De&&(xe.innerHTML=De),xe.toggleAttribute("hidden",!Me)}}function ie(){let pe=J[ee],xe=new Set((pe.sections||[]).map(Q)),Te=Ae=>Array.from(Ae.children).some(Fe=>getComputedStyle(Fe).display!=="none");U.querySelectorAll(".admin-route-sections").forEach(Ae=>{if(!xe.has(Ae.id)){Ae.style.display="none";return}Ae.style.display="",Ae.style.display=Te(Ae)?"":"none"})}let le=()=>{let pe=J[ee],xe=new Set(pe.sections);U.querySelectorAll('[id^="sec-"]').forEach(Te=>{Te.id&&(Te.style.display=xe.has(Te.id)?"":"none")}),W&&window.AdminTabs?.hasTabsFor?.(ee)&&window.AdminTabs.applyTabSectionVisibility(ee,W,U),ie(),te()},ue=null,me=null;function Ie(){let pe=me&&document.getElementById(me);!pe||!pe.getClientRects().length||(me=null,pe.tagName==="DETAILS"&&(pe.open=!0),pe.scrollIntoView({block:"start"}))}function Ee(pe){let xe=window.location.hash||"",Te=xe.indexOf("?");if(Te===-1)return"";let Ae=I(xe);if(!Ae)return"";let Fe=xe.match(/^#\/([\w-]+)/),Pe=g(Ae.nav,Ae.tab,Fe&&Fe[1]||Ae.raw);return Pe.route===pe.route&&(Pe.tab||null)===(pe.tab||null)&&(Pe.fold||null)===(pe.fold||null)?xe.slice(Te):""}let Le=(pe,xe,Te)=>{let Ae=g(pe,xe,Te);Te=Ae.rawName,ee=Ae.route,U.dataset.activeRoute=ee;let Fe=Ae.tab,Pe=(Ae.fold?K(ee,Ae.fold):Te&&Te!==ee?"#/"+Te:K(ee,Fe))+Ee(Ae);if(window.location.hash!==Pe){try{history.replaceState(null,"",Pe)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let qe=J[ee],Oe=Array.from(U.querySelectorAll(".admin-dash-nav-row[data-route]")),je=Te!==ee?Oe.find(He=>He.dataset.route===Te):null;Oe.forEach(He=>{let Ye=je?He===je:He.dataset.route===ee;He.classList.toggle("is-active",Ye),He.setAttribute("aria-selected",Ye?"true":"false")});let Me=U.querySelector("[data-route-kicker]"),We=U.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(He){return He},De="adminRouteTitle_"+ee,Ke="adminRouteKicker_"+ee,Ue=Ge(De),Je=Ge(Ke);Me&&(Me.textContent=Je!==Ke?Je:qe.kicker),We&&(We.textContent=Ue!==De?Ue:qe.title);let Ve=ee==="dashboard"||ee==="live";U.querySelectorAll('[data-route-view="dashboard"]').forEach(He=>{He.style.display=Ve?"":"none"}),Ve?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),W=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(ee,Fe),U.dataset.activeLeaf=Fe||ee,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:Fe}})),ie(),te(),oe(ee,Fe),re(Te,ee,Fe),Ae.fold!==ue&&(ue=Ae.fold,me=Ae.foldSection),Ie();try{history.replaceState(null,"",Pe)}catch{}};function re(pe,xe,Te){window.AdminBreadcrumb?.render(U,pe,xe,Te)}function oe(pe,xe){let Te=U.querySelector("[data-admin-tabs-host]");if(!Te){let Ae=U.querySelector(".admin-dash-topbar");if(!Ae)return;Te=document.createElement("div"),Te.dataset.adminTabsHost="",Ae.insertAdjacentElement("afterend",Te)}if(Te.innerHTML="",window.AdminTabs?.hasTabsFor?.(pe)&&xe){Te.hidden=!1;let Ae=window.AdminTabs.renderTabStrip(pe,xe,{onSelect:Fe=>Le(pe,Fe)});Ae&&Te.appendChild(Ae),Te.classList.remove("admin-tabs-host--accordion");return}Te.classList.remove("admin-tabs-host--accordion"),Te.hidden=!0}w&&window.removeEventListener("hashchange",w),w=()=>{let pe=I(window.location.hash),xe=(window.location.hash||"").match(/^#\/([\w-]+)/),Te=xe?xe[1]:null;pe&&Le(pe.nav,pe.tab,Te||pe.raw)},window.addEventListener("hashchange",w),U.querySelectorAll("[data-route]").forEach(pe=>{pe.addEventListener("click",xe=>{xe.preventDefault(),Le(pe.dataset.route)})});let ce=I(window.location.hash),z=(window.location.hash||"").match(/^#\/([\w-]+)/),ne=z?z[1]:ce?.raw||ce?.nav||"live";Le(ce?.nav||"live",ce?.tab||null,ne),window._adminNavigateTo=()=>Le(ee,ue||W);let ae=!1,de=0,he=0;function ke(){if(ae)return;ae=!0;let pe=()=>{ae&&(ae=!1,de&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(de),clearTimeout(he),de=0,he=0,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:W}})),Ie())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(de=requestAnimationFrame(pe),he=setTimeout(pe,100)):he=setTimeout(pe,0)}let $e=U.querySelector(".admin-dash-main");$e&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{ke()}).observe($e,{childList:!0,subtree:!0}),ke())}function O(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let U=document.querySelector("[data-open-help]");U&&U.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let ee=document.querySelector("[data-open-palette]");if(ee){let Q=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};ee.addEventListener("click",Q),ee.addEventListener("keydown",te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),Q())})}let W=document.getElementById("logoutButton");W&&W.addEventListener("click",async()=>{try{let Q=await F("/logout",{method:"POST"});Q.redirected&&(window.location.href=Q.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Q){console.error("Logout Failed:",Q),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Q=>{Q.name&&Q.addEventListener("change",async function(){let te=this.name,ie=this.checked;await n(te,ie)})}),document.querySelectorAll("details[id^='sec-']").forEach(Q=>{Q.addEventListener("toggle",()=>{let te=d();te[Q.id]=Q.open,l(te)})}),document.querySelectorAll(".setting-input").forEach(Q=>{Q.addEventListener("change",async function(){let te=this.dataset.key,ie=parseInt(this.dataset.index),le=this.value;this.type==="number"&&(le=parseInt(le)),await t(te,le,ie,this)})})}function $(){if(c.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}j()}else B()}async function q(){await e(),$(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function Y(){window.AdminThemes&&window.AdminThemes.init()}function V(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{C&&(C.disconnect(),C=null)}),q()})});var Ct=ye(()=>{(function(){"use strict";var h=null;async function f(){var P=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),D=Array.from(M).map(function(N){return N.value.trim()}).filter(Boolean);if(!P){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var C=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:P,options:D})}),w=await C.json();if(!C.ok){window.showToast(w.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),G(w),F()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function c(){try{var P=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await P.json();if(!P.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),G(M),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function x(){try{var P=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await P.json();if(!P.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),G(M),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function F(){h&&(clearInterval(h),h=null);var P=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var D=await M.json();G(D),D.state!=="active"&&h&&(clearInterval(h),h=null)}}catch{}};P(),h=setInterval(P,2e3)}function A(){var P=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return P.dataset.emptyKind="poll",P}function G(P){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!P||P.state==="idle"){M.appendChild(A());return}var D=P.total_votes||0,C=Math.max(1,...P.options.map(function(_){return _.count})),w=document.createElement("div");w.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var T=document.createElement("span");T.className="admin-poll-status-dot"+(P.state==="active"?" is-active":" is-ended"),N.appendChild(T);var L=document.createElement("span");L.className="admin-poll-status-question",L.textContent=P.question||"",N.appendChild(L);var I=document.createElement("span");I.className="admin-poll-status-state",I.textContent=P.state,N.appendChild(I),w.appendChild(N),P.options.forEach(function(_){var g=document.createElement("div");g.className="admin-poll-status-row";var d=document.createElement("div");d.className="admin-poll-status-label";var l=document.createElement("span"),r=document.createElement("b");r.textContent=_.key+".",l.appendChild(r),l.appendChild(document.createTextNode(" "+_.text));var e=document.createElement("span");e.textContent=_.count+" ("+_.percentage+"%)",d.appendChild(l),d.appendChild(e);var p=document.createElement("div");p.className="admin-poll-status-bar";var m=document.createElement("div");m.className="admin-poll-status-bar-fill",m.style.width=_.count/C*100+"%",p.appendChild(m),g.appendChild(d),g.appendChild(p),w.appendChild(g)});var K=document.createElement("div");K.className="admin-poll-status-footer",K.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),w.appendChild(K),M.appendChild(w)}}function R(){var P=document.getElementById("sec-polls");if(P&&P.dataset.pollLegacyBound!=="1"){P.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",f);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",c);var C=document.getElementById("pollResetBtn");C&&C.addEventListener("click",x);var w=document.getElementById("pollAddOptionBtn");w&&w.addEventListener("click",function(){var L=document.getElementById("pollOptionsContainer");if(L){var I=L.querySelectorAll(".poll-option-input").length;if(I>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var K=document.createElement("input");K.type="text",K.className="poll-option-input admin-ui-input",K.placeholder=String.fromCharCode(65+I)+". Option "+(I+1),K.maxLength=100,L.appendChild(K)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var L=document.getElementById("pollOptionsContainer");if(L){var I=L.querySelectorAll(".poll-option-input");if(I.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}I[I.length-1].remove()}});var T=P;T&&(T.addEventListener("toggle",function(){T.open&&F()}),F()),window.addEventListener("beforeunload",function(){h&&(clearInterval(h),h=null)})}}document.addEventListener("admin-panel-rendered",function(){R()}),document.addEventListener("DOMContentLoaded",function(){R()}),window.addEventListener("hashchange",function(){var P=window.location.hash||"";P.indexOf("/polls")!==-1&&R()})})()});var Bt=ye(()=>{(function(){"use strict";var h="sec-timeline-export",f="danmu.adminHistoryExports.v1",c=10,x={rawText:!0,polls:!0,masked:!1,metadata:!0},F=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],A=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],G={range:"24h",filters:Object.assign({},x),format:"JSON"};function R(){return document.getElementById(h)}function P(){try{return JSON.parse(localStorage.getItem(f)||"[]")}catch{return[]}}function M(i){try{localStorage.setItem(f,JSON.stringify(i.slice(0,c)))}catch{}}function D(i){var y=P();y.unshift(i),M(y)}function C(i){return i?i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/1024/1024).toFixed(1)+" MB":"0 B"}function w(i){try{var y=new Date(i),k=new Date,S=y.toDateString()===k.toDateString();if(S)return ServerI18n.t("historyV2TodayAt",{time:String(y.getHours()).padStart(2,"0")+":"+String(y.getMinutes()).padStart(2,"0")});var B=new Date(k);return B.setDate(k.getDate()-1),y.toDateString()===B.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(y.getHours()).padStart(2,"0")+":"+String(y.getMinutes()).padStart(2,"0")}):y.getMonth()+1+"-"+String(y.getDate()).padStart(2,"0")+" "+String(y.getHours()).padStart(2,"0")+":"+String(y.getMinutes()).padStart(2,"0")}catch{return i||""}}function N(i){if(i==="1h")return 1;if(i==="24h")return 24;if(i==="7d")return 168;if(i==="today"){var y=new Date,k=new Date(y.getFullYear(),y.getMonth(),y.getDate());return Math.max(1,Math.ceil((y-k)/36e5))}return i==="yest"?48:i==="live"?6:24}function T(i){return i.filter(function(y){return!(!G.filters.rawText&&!y.is_poll&&!y.muted&&!y.banned||!G.filters.polls&&y.is_poll||!G.filters.masked&&(y.muted||y.banned))}).map(function(y){if(!G.filters.metadata){var k=Object.assign({},y);return delete k.clientIp,delete k.fingerprint,k}return y})}function L(i){var y=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],k=window.AdminUtils.csvCell,S=function(j){return j.status?j.status:j.banned?"banned":j.muted?"muted":j.is_poll?"poll":"ok"},B=i.map(function(j){return[j.timestamp||"",j.nickname||"",j.text||"",j.color?"#"+j.color:"",j.size!=null?j.size:"",j.speed!=null?j.speed:"",j.opacity!=null?j.opacity:"",j.isImage?"true":"false",j.fontInfo&&j.fontInfo.name||"",j.clientIp||"",j.fingerprint||"",S(j),j.delivery_reason||""].map(k).join(",")});return[y.join(","),B.join(`\r
`)].filter(Boolean).join(`\r
`)}function I(i){return i.map(function(y,k){var S=new Date(y.timestamp||Date.now()),B=K(S),j=K(new Date(S.getTime()+3e3)),J=(y.nickname?"["+y.nickname+"] ":"")+(y.text||"");return k+1+`
`+B+" --> "+j+`
`+J+`
`}).join(`
`)}function K(i){var y=function(k,S){return String(k).padStart(S||2,"0")};return y(i.getHours())+":"+y(i.getMinutes())+":"+y(i.getSeconds())+","+y(i.getMilliseconds(),3)}function _(i,y){var k=URL.createObjectURL(i),S=document.createElement("a");S.href=k,S.download=y,S.click(),URL.revokeObjectURL(k)}function g(){var i=N(G.range),y=document.getElementById("histv2-go");y&&(y.disabled=!0,y.dataset.busy="1"),fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var S=k&&k.records||[],B=T(S);if(B.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var j=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),J,E;if(G.format==="JSON"){var O=JSON.stringify(B,null,2);E=new Blob([O],{type:"application/json"}),J="danmu-history-"+j+".json"}else G.format==="CSV"?(E=new Blob(["\uFEFF"+L(B)],{type:"text/csv;charset=utf-8;"}),J="danmu-history-"+j+".csv"):(E=new Blob([I(B)],{type:"application/x-subrip;charset=utf-8;"}),J="danmu-history-"+j+".srt");_(E,J),D({name:J,fmt:G.format,size:E.size,when:new Date().toISOString(),count:B.length}),l(),d(B.length,E.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:B.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){y&&(y.disabled=!1,delete y.dataset.busy)})}function d(i,y){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:i||"\u2014",size:y?C(y):"\u2014 MB"}))}function l(){var i=document.getElementById("histv2-recent-list");if(i){var y=P();if(y.length===0){i.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}i.innerHTML=y.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+r(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+r(w(k.when))+" \xB7 "+C(k.size)+"</div></div></div>"}).join("")}}function r(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[y]})}function e(){return F.map(function(i){var y=G.range===i.k;return'<button type="button" class="histv2-chip'+(y?" is-active":"")+'" data-histv2-range="'+i.k+'">'+r(ServerI18n.t(i.labelKey))+(i.k==="live"?" \xB7 "+p():"")+"</button>"}).join("")}function p(){var i=new Date;return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function m(){var i=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return i.map(function(y){var k=!!G.filters[y.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+y.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+r(ServerI18n.t(y.labelKey))+"</span></button>"}).join("")}function b(){return A.map(function(i){var y=G.format===i.k;return'<button type="button" class="histv2-fmt'+(y?" is-selected":"")+'" data-histv2-fmt="'+i.k+'">'+(y?'<span class="histv2-fmt-check">\u2713</span>':"")+(i.badge?'<span class="histv2-fmt-badge">'+r(i.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+i.k+'</div><div class="histv2-fmt-desc">'+r(i.desc)+"</div></button>"}).join("")}function v(){var i=R();i&&(i.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+m()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+b()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",i.addEventListener("click",o),l(),n())}function o(i){var y=i.target.closest("[data-histv2-range]");if(y){G.range=y.dataset.histv2Range,s(),n();return}var k=i.target.closest("[data-histv2-toggle]");if(k){var S=k.dataset.histv2Toggle;G.filters[S]=!G.filters[S],u(),n();return}var B=i.target.closest("[data-histv2-fmt]");if(B){G.format=B.dataset.histv2Fmt,t(),n();return}var j=i.target.closest("#histv2-go");if(j&&!j.dataset.busy){g();return}}function s(){var i=document.getElementById("histv2-chips");i&&(i.innerHTML=e())}function u(){var i=document.getElementById("histv2-toggles");i&&(i.innerHTML=m())}function t(){var i=document.getElementById("histv2-formats");i&&(i.innerHTML=b())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var i=N(G.range);fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(y){return y.ok?y.json():null}).then(function(y){if(!y)return d(0,0);var k=T(y&&y.records||[]),S=G.format==="JSON"?220:G.format==="CSV"?110:80;d(k.length,k.length*S)}).catch(function(){d(0,0)})},250)}function a(){var i=R(),y=document.getElementById("admin-backup-v2-page");if(!i){var k=document.getElementById("settings-grid");if(!k)return;i=document.createElement("div"),i.id=h,i.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(i),v()}y&&y.parentElement&&i.previousElementSibling!==y&&y.parentElement.insertBefore(i,y.nextSibling)}document.addEventListener("admin-panel-rendered",a),document.addEventListener("admin-route-applied",a),window.AdminHistoryV2={refresh:n,state:G}})()});var Ft=ye(()=>{(function(){"use strict";let h="admin-replay-bar";function f(){let x=document.getElementById(h);return x||(document.body?(x=document.createElement("div"),x.id=h,x.className="admin-replay-bar",x.hidden=!0,x.setAttribute("role","status"),x.setAttribute("aria-live","polite"),x.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(x,document.body.firstChild),x):null)}function c(x){let F=f();F&&(F.hidden=!x)}window.AdminReplayBar={ensure:f,setActive:c},document.addEventListener("admin-panel-rendered",f)})()});var Dt=ye(()=>{(function(){"use strict";let h=null;function f(w){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),T=document.getElementById("replayResumeBtn"),L=document.getElementById("replayStopBtn"),I=document.getElementById("replayProgress"),K=(d,l)=>{d&&d.classList.toggle("hidden",!l)},_=w==="playing",g=w==="paused";K(N,_),K(T,g),K(L,_||g),K(I,_||g),!_&&!g&&I&&(I.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(_||g)}function c(){h&&clearInterval(h),h=setInterval(async()=>{try{let w=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!w.ok)return;let N=await w.json(),T=document.getElementById("replayProgress");T&&(T.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),f(N.state),N.state==="stopped"&&(clearInterval(h),h=null)}catch{}},500)}async function x(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),f("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function F(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),f("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),f("stopped"),h&&(clearInterval(h),h=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let G=null,R=null,P=0,M=null;function D(){[["replayPauseBtn",x],["replayResumeBtn",F],["replayStopBtn",A]].forEach(function([N,T]){let L=document.getElementById(N);L&&!L.dataset.replayCtrlsBound&&(L.addEventListener("click",T),L.dataset.replayCtrlsBound="1")})}async function C(){try{let w=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!w.ok)return;let N=await w.json();(N.state==="playing"||N.state==="paused")&&(f(N.state),c())}catch{}}window.AdminReplayControls={notifyStarted:function(){f("playing"),c()}},document.addEventListener("admin-panel-rendered",function(){D(),C()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var Mt=ye(()=>{(function(){"use strict";let h="sec-ratelimit",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(w){return String(w).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},c=(w,N)=>ServerI18n.t(w,N),x=(w,N)=>{typeof showToast=="function"&&showToast(w,N)},F={viewer:{targets:["fire","fire_fingerprint","fire_global"],unitKey:"rlMaxMessages"},other:{targets:["api","admin","login","fire_admin"],unitKey:"rlMaxRequests"}},A={fire:"rlTargetViewer",fire_fingerprint:"rlTargetDevice",fire_global:"rlTargetRoom",api:"ratelimitScopeApiDesc",admin:"ratelimitScopeAdminDesc",login:"ratelimitScopeLoginDesc",fire_admin:"rlTargetTokenLane"},G=[10,30,60,300,3600];function R(w){return w>=3600&&w%3600===0?c("rlHours",{n:w/3600}):w>60&&w%60===0?c("rlMinutes",{n:w/60}):c("rlSeconds",{n:w})}function P(w){let N=F[w];return`
            <div class="admin-ratelimit-form" data-rl-form="${w}">
              <div class="admin-ratelimit-row-body admin-ratelimit-row-body--form">
                <label class="admin-ratelimit-field">
                  <span>${c("rlTargetLabel")}</span>
                  <select data-rl-target>
                    ${N.targets.map(T=>`<option value="${T}">${f(c(A[T]))}</option>`).join("")}
                  </select>
                </label>
                <label class="admin-ratelimit-field">
                  <span>${c(N.unitKey)}</span>
                  <input type="number" step="1" inputmode="numeric" data-rl-limit />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${c("rlPer")}</span>
                  <select data-rl-window>
                    ${G.map(T=>`<option value="${T}">${f(R(T))}</option>`).join("")}
                  </select>
                </label>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save">${c("ratelimitSaveBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-usage">
                <svg class="admin-ratelimit-sparkline" data-rl-spark viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-bar-text" data-rl-current>\u2014</span>
                <div class="admin-ratelimit-bar" data-rl-bar-wrap hidden>
                  <div class="admin-ratelimit-bar-fill is-blocked" data-rl-bar></div>
                </div>
              </div>
            </div>`}function M(){return`
      <div id="${h}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-rows">
          <div class="admin-ratelimit-row" data-rl-pace>
            ${P("viewer")}
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${c("ratelimitCooldownLabel")}</span>
                <input type="number" min="0" max="10" step="0.5" inputmode="decimal" data-rl-cooldown />
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-cooldown">${c("ratelimitSaveBtn")}</button>
              </div>
            </div>
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${c("ratelimitOnscreenMaxLabel")}</span>
                <input type="number" min="0" max="200" step="1" inputmode="numeric" data-rl-onscreen-max />
              </label>
              <label class="admin-ratelimit-field">
                <span>${c("ratelimitOnscreenModeLabel")}</span>
                <select data-rl-onscreen-mode>
                  <option value="drop">${c("ratelimitOnscreenModeDrop")}</option>
                  <option value="queue">${c("ratelimitOnscreenModeQueue")}</option>
                </select>
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-onscreen">${c("ratelimitSaveBtn")}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="hud-stats-strip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value" data-rl-sum-hits>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-hits-delta>${c("ratelimitCalculatingLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-amber" data-rl-sum-viol>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-viol-rate>${c("ratelimitBlockRateLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-crimson" data-rl-sum-locked>\u2014</span>
            <span class="hud-stat-tile-label">${c("ratelimitLoginLabel")} \xB7 ${c("ratelimitLockedHint")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-cyan" data-rl-sum-black>\u2014</span>
            <span class="hud-stat-tile-label">${c("ratelimitBlacklistHint")}</span>
          </div>
        </div>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="other">
          <summary class="admin-ui-page-title">${c("rlFoldOther")}</summary>
          <div class="admin-ratelimit-row">
            ${P("other")}
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="ip">
          <summary class="admin-ui-page-title">
            <span>${c("rlFoldIp")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-ip-summary></span>
          </summary>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-ip-form">
              <input type="text" data-rl-ip-input placeholder="${c("ratelimitIpInputPlaceholder")}" maxlength="43" autocomplete="off" spellcheck="false" />
              <select data-rl-ip-select aria-label="${c("ratelimitIpSelectAriaLabel")}">
                <option value="allowlist">${c("ratelimitAllowlistOption")}</option>
                <option value="denylist">${c("ratelimitDenylistOption")}</option>
              </select>
              <button type="button" class="admin-ui-action is-primary" data-rl-ip-add>${c("ratelimitIpAddBtn")}</button>
            </div>
            <div class="admin-ratelimit-ip-error" data-rl-ip-error hidden></div>
            <div class="admin-ratelimit-ip-lists">
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="allowlist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${c("ratelimitAllowlistOption")}</span>
                  <span class="cnt" data-rl-ip-allow-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="allowlist">
                  <div class="admin-ratelimit-vfeed-empty">${c("ratelimitNoEntriesYet",{list:c("ratelimitAllowlistName")})}</div>
                </div>
              </div>
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="denylist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${c("ratelimitDenylistOption")}</span>
                  <span class="cnt" data-rl-ip-deny-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="denylist">
                  <div class="admin-ratelimit-vfeed-empty">${c("ratelimitNoEntriesYet",{list:c("ratelimitDenylistName")})}</div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="blocked">
          <summary class="admin-ui-page-title">
            <span>${c("rlFoldBlocked")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-vcount></span>
          </summary>
          <div class="admin-ratelimit-suggestions" data-rl-suggestions></div>
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>${c("uiColTime")}</span><span>${c("rlTargetLabel")}</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">${c("ratelimitNoViolationsYet")}</div>
              </div>
            </div>
          </div>
        </details>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-ui-action admin-rl-footer-action" data-rl-action="reset">${c("ratelimitResetBtn")}</button>
        </div>
      </div>`}function D(w){let N={},T={},L=!1,I=0,K=Array.from(w.querySelectorAll("[data-rl-form]")),_=$=>({target:$.querySelector("[data-rl-target]"),limit:$.querySelector("[data-rl-limit]"),window:$.querySelector("[data-rl-window]"),current:$.querySelector("[data-rl-current]"),barWrap:$.querySelector("[data-rl-bar-wrap]"),bar:$.querySelector("[data-rl-bar]"),spark:$.querySelector("[data-rl-spark]")}),g=$=>c(A[$]||$);function d($){let q=_($);q.window.disabled=q.limit.value.trim()!==""&&Number(q.limit.value)===0}function l($){let q=_($),Y=N[q.target.value];if(Y){if(q.limit.min=Y.min,q.limit.max=Y.max,q.limit.value=Y.limit,q.window.querySelectorAll("option[data-rl-custom]").forEach(V=>V.remove()),!q.window.querySelector(`option[value="${Y.window}"]`)){let V=document.createElement("option");V.value=String(Y.window),V.textContent=R(Y.window),V.dataset.rlCustom="1",q.window.appendChild(V)}q.window.value=String(Y.window),d($)}}function r($){let q=_($),Y=T[q.target.value],V=Y&&Y.hits||0,U=Y&&Y.violations||0;q.current.textContent=Y?c("ratelimitHitsViolations",{hits:V.toLocaleString(),viol:U.toLocaleString()}):"\u2014",q.barWrap.hidden=V+U===0,q.bar.style.width=V+U===0?"0":(U/(V+U)*100).toFixed(1)+"%",e(q.spark,Y&&(Y.bucket_history||Y.history))}function e($,q){if(!$)return;let Y=96,V=24,U=Array.isArray(q)&&q.length?q.slice(-24):new Array(24).fill(0),ee=Math.max(1,...U),W=Y/Math.max(1,U.length-1),Q=U.map((ie,le)=>`${(le*W).toFixed(1)},${(V-2-ie/ee*(V-4)).toFixed(1)}`).join(" "),te=$.querySelector("polyline");te&&te.setAttribute("points",Q)}async function p(){let $=I;try{let q=await fetch("/admin/ratelimit/config",{credentials:"same-origin"});if(!q.ok)return;let Y=await q.json();if($!==I){await p();return}N=Y&&Y.scopes||{},K.forEach(l)}catch{}}let m=!1;async function b(){if(m)return;m=!0;let $=null;try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});ee.ok&&($=await ee.json())}catch{}finally{m=!1}let q=$&&$.rate_limits;if(T=q||{},K.forEach(r),!$)return;s(),o($.recent_violations);let Y=w.querySelector("[data-rl-sum-viol]"),V=w.querySelector("[data-rl-sum-viol-rate]"),U=w.querySelector("[data-rl-sum-locked]");if(q&&q.totals){let ee=q.totals.hits||0,W=q.totals.violations||0;Y&&(Y.textContent=W.toLocaleString()),V&&(V.textContent=ee+W>0?c("ratelimitBlockRateValue",{rate:(W/(ee+W)*100).toFixed(1)}):"\u2014"),U&&(U.textContent=c("ratelimitLockedSources",{n:(q.totals.locked_sources||0).toLocaleString()}))}else Y&&(Y.textContent="\u2014"),V&&(V.textContent="\u2014"),U&&(U.textContent="\u2014")}async function v(){try{let $=window.AdminBootstrap;$&&typeof $.primeBootstrap=="function"&&await $.primeBootstrap();let q=$&&$.bootstrapSection?$.bootstrapSection("history_stats"):null,Y=$&&$.bootstrapSection?$.bootstrapSection("blacklist"):null,[V,U]=await Promise.all([q?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"}),Y?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})]),ee=q||(V&&V.ok?await V.json():null);if(ee){let Q=w.querySelector("[data-rl-sum-hits]"),te=w.querySelector("[data-rl-sum-hits-delta]");Q&&(Q.textContent=(ee.stats&&ee.stats.last_24h||0).toLocaleString()),te&&(te.textContent=c("ratelimitSumTotal",{n:(ee.stats&&ee.stats.total||0).toLocaleString()}))}let W=Y||(U&&U.ok?await U.json():null);if(W){let Q=Array.isArray(W)?W:W.entries||W.keywords||[],te=w.querySelector("[data-rl-sum-black]");te&&(te.textContent=Q.length?c("ratelimitCountUnit",{n:Q.length}):"0")}}catch{}}function o($){let q=w.querySelector("[data-rl-vbody]"),Y=w.querySelector("[data-rl-vcount]");if(!q)return;let V=Array.isArray($)?$:[];if(Y&&(Y.textContent=V.length?String(V.length):""),V.length===0){q.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${c("ratelimitNoViolationsYet")}</div>`;return}let U=W=>String(W).padStart(2,"0"),ee=W=>{let Q=new Date(W*1e3);return`${U(Q.getHours())}:${U(Q.getMinutes())}:${U(Q.getSeconds())}`};q.innerHTML=V.slice(0,30).map(W=>`
        <div class="admin-ratelimit-vfeed-row">
          <span class="admin-ratelimit-vfeed-time">${ee(W.ts)}</span>
          <span class="admin-ratelimit-vfeed-scope">${f(g(W.scope||""))}</span>
          <span class="admin-ratelimit-vfeed-ip">${f(W.ip||"")}</span>
        </div>
      `).join("")}function s(){let $=w.querySelector("[data-rl-suggestions]");if($&&($.innerHTML=Object.keys(A).map(q=>{let Y=T[q],V=Y&&Y.suggestion;if(!V)return"";let U=c("ratelimitSuggestDetail",{p95:Number(V.p95_per_second||0).toFixed(2),limit:Y.limit||"\u2014",window:Y.window||"\u2014",suggLimit:V.suggested_limit,suggWindow:V.suggested_window});return`
          <div class="admin-ratelimit-suggest" data-rl-suggest="${q}">
            <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
            <span class="admin-ratelimit-suggest-body">
              <span class="admin-ratelimit-suggest-title">${f(g(q))}</span>
              <span class="admin-ratelimit-suggest-detail">${f(U)}</span>
            </span>
            <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${q}" data-rl-suggest-limit="${Number(V.suggested_limit)}" data-rl-suggest-window="${Number(V.suggested_window)}">${c("ratelimitApplySuggestBtn")}</button>
          </div>`}).join(""),$.children.length&&!L)){L=!0;let q=$.closest("details");q&&(q.open=!0)}}async function u($,q,Y,V){$.disabled=!0;try{let U=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:q,limit:Y,window:V})});if(U.ok){let W=await U.json();return I+=1,N[q]=Object.assign({},N[q],{limit:W.limit,window:W.window,saved:!0}),W.persisted===!1?x(c("rlNotPersisted"),!1):x(c("ratelimitPaceSavedToast"),!0),!0}let ee=await U.clone().json().catch(()=>({}));x(c("ratelimitApplyFailedToast",{msg:ee&&ee.error||`HTTP ${U.status}`}),!1)}catch{x(c("ratelimitApplyFailedToast",{msg:c("ratelimitNetworkError")}),!1)}finally{$.disabled=!1}return!1}let t={cooldown:w.querySelector("[data-rl-cooldown]"),max:w.querySelector("[data-rl-onscreen-max]"),mode:w.querySelector("[data-rl-onscreen-mode]")};async function n(){try{let $=await fetch("/get_settings",{credentials:"same-origin"});if($.ok){let q=(await $.json()).ViewerFireCooldownSec;t.cooldown&&Array.isArray(q)&&(t.cooldown.value=q[1])}}catch{}try{let $=await fetch("/admin/api/onscreen-limits",{credentials:"same-origin"});if($.ok){let q=await $.json();t.max&&(t.max.value=q.max_onscreen_danmu),t.mode&&(t.mode.value=q.overflow_mode),a()}}catch{}}function a(){!t.max||!t.mode||(t.mode.disabled=Number(t.max.value)===0)}t.max&&t.max.addEventListener("input",a);async function i($,q,Y){$.disabled=!0;try{let V=await window.csrfFetch(q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)});if(V.ok)x(c("ratelimitPaceSavedToast"),!0);else{let U=await V.clone().json().catch(()=>({}));x(c("ratelimitApplyFailedToast",{msg:U&&U.error||`HTTP ${V.status}`}),!1)}}catch{x(c("ratelimitApplyFailedToast",{msg:c("ratelimitNetworkError")}),!1)}finally{$.disabled=!1}}w.addEventListener("click",async $=>{let q=$.target.closest("[data-rl-action]");if(!q)return;let Y=q.dataset.rlAction;if(Y==="save"){let V=q.closest("[data-rl-form]"),U=_(V),ee=U.limit.value.trim(),W=Number(ee),Q=parseInt(U.window.value,10);if(ee===""||!Number.isInteger(W)||W<0||!Number.isFinite(Q)){x(c("ratelimitInvalidInputToast"),!1);return}let te=N[U.target.value];if(te&&(W<te.min||W>te.max)){x(c("rlOutOfRange",{min:te.min,max:te.max}),!1);return}await u(q,U.target.value,W,Q)&&(l(V),b());return}if(Y==="apply-suggest"){let V=q.dataset.rlApply,U=parseInt(q.dataset.rlSuggestLimit,10),ee=parseInt(q.dataset.rlSuggestWindow,10);if(!V||!Number.isFinite(U)||!Number.isFinite(ee))return;let W=N[V];if(W&&(U<W.min||U>W.max)){x(c("rlOutOfRange",{min:W.min,max:W.max}),!1);return}await u(q,V,U,ee)&&(K.forEach(Q=>{_(Q).target.value===V&&l(Q)}),b());return}if(Y==="save-cooldown"){let V=parseFloat(t.cooldown&&t.cooldown.value);if(!Number.isFinite(V)||V<0||V>10){x(c("ratelimitInvalidInputToast"),!1);return}await i(q,"/admin/update",{type:"ViewerFireCooldownSec",value:V,index:1});return}if(Y==="save-onscreen"){let V=t.max?t.max.value.trim():"",U=Number(V);if(V===""||!Number.isInteger(U)||U<0||U>200){x(c("ratelimitInvalidInputToast"),!1);return}await i(q,"/admin/api/onscreen-limits",{max_onscreen_danmu:U,overflow_mode:t.mode&&t.mode.value==="queue"?"queue":"drop"});return}if(Y==="reset"){q.disabled=!0;try{let V=await window.csrfFetch("/admin/ratelimit/reset",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(V.ok){let U=await V.json();I+=1,N=U&&U.scopes||N,K.forEach(l),b(),U&&U.persisted===!1?x(c("rlNotPersisted"),!1):x(c("ratelimitResetDoneToast"),!0)}else x(c("ratelimitApplyFailedToast",{msg:`HTTP ${V.status}`}),!1)}catch{x(c("ratelimitApplyFailedToast",{msg:c("ratelimitNetworkError")}),!1)}finally{q.disabled=!1}}}),w.addEventListener("change",$=>{let q=$.target.closest&&$.target.closest("[data-rl-form]");!q||!$.target.matches("[data-rl-target]")||(l(q),r(q),b())}),w.addEventListener("input",$=>{let q=$.target.closest&&$.target.closest("[data-rl-form]");q&&$.target.matches("[data-rl-limit]")&&d(q)});let y=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,k={allowlist:[],denylist:[]},S={input:w.querySelector("[data-rl-ip-input]"),select:w.querySelector("[data-rl-ip-select]"),addBtn:w.querySelector("[data-rl-ip-add]"),summary:w.querySelector("[data-rl-ip-summary]"),error:w.querySelector("[data-rl-ip-error]"),allowCount:w.querySelector("[data-rl-ip-allow-count]"),denyCount:w.querySelector("[data-rl-ip-deny-count]"),allowBody:w.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:w.querySelector('[data-rl-ip-body="denylist"]')};function B($){if(S.error){if(!$){S.error.hidden=!0,S.error.textContent="";return}S.error.hidden=!1,S.error.textContent=$}}function j($){let q=$==="allowlist"?S.allowBody:S.denyBody,Y=$==="allowlist"?S.allowCount:S.denyCount;if(!q||!Y)return;let V=Array.isArray(k[$])?k[$]:[];if(Y.textContent=String(V.length),V.length===0){let U=ServerI18n.t($==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");q.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:U})}</div>`;return}q.innerHTML=V.map(U=>{let ee=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:f(U)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${f(U)}">
          <span class="admin-ratelimit-ip-chip-cidr">${f(U)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${f(U)}" data-rl-ip-remove-kind="${$}" title="${ee}" aria-label="${ee}">\xD7</button>
        </div>
      `}).join("")}function J(){if(j("allowlist"),j("denylist"),S.summary){let $=(k.allowlist||[]).length,q=(k.denylist||[]).length;S.summary.textContent=ServerI18n.t("ratelimitIpCounts",{allow:$,deny:q})}}async function E(){try{let $=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!$.ok){S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitLoadFailedStatus",{status:$.status}));return}let q=await $.json();q&&typeof q=="object"&&(k={allowlist:Array.isArray(q.allowlist)?q.allowlist:[],denylist:Array.isArray(q.denylist)?q.denylist:[]},J())}catch{S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitNetworkError"))}}async function O($,{toastLabel:q}={}){try{let Y=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(Y.ok){let ee=await Y.json();return k={allowlist:Array.isArray(ee.allowlist)?ee.allowlist:[],denylist:Array.isArray(ee.denylist)?ee.denylist:[]},J(),B(""),q&&typeof showToast=="function"&&showToast(q,!0),!0}let V=await Y.json().catch(()=>({})),U=V&&V.error||`HTTP ${Y.status}`;return B(U),!1}catch{return B(ServerI18n.t("ratelimitNetworkError")),!1}}S.addBtn&&S.addBtn.addEventListener("click",async()=>{if(!S.input||!S.select)return;let $=(S.input.value||"").trim();if(!$){B(ServerI18n.t("ratelimitIpRequiredError"));return}if(!y.test($)){B(ServerI18n.t("ratelimitIpFormatError"));return}let q=S.select.value==="denylist"?"denylist":"allowlist",Y=Array.from(new Set([...k[q]||[],$]));await O({[q]:Y},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(q==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:$})})&&(S.input.value="")}),S.input&&(S.input.addEventListener("keydown",$=>{$.key==="Enter"&&($.preventDefault(),S.addBtn&&S.addBtn.click())}),S.input.addEventListener("input",()=>{S.error&&!S.error.hidden&&B("")})),w.addEventListener("click",async $=>{let q=$.target.closest("[data-rl-ip-remove]");if(!q)return;let Y=q.dataset.rlIpRemove,V=q.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",U=(k[V]||[]).filter(ee=>ee!==Y);await O({[V]:U},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(V==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:Y})})}),E(),p(),n(),b(),v()}function C(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(h))return;w.insertAdjacentHTML("beforeend",M());let N=document.getElementById(h);N&&D(N)}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var Nt=ye(()=>{(function(){"use strict";let h="sec-viewer-theme",f="danmu.viewerTheme.v1",c=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function x(){return`
      <!-- 2026-11-14 \u5F48\u5E55\u6A23\u5F0F\u5408\u4E00\uFF1A\u89C0\u773E\u9801\u5916\u89C0\u8B8A\u6210\u5F48\u5E55\u6A23\u5F0F\u9801\u88E1\u9810\u8A2D\u6536\u5408\u7684\u4E00\u584A
           \uFF08\u5C11\u7528\uFF1B#/viewer/page \u6703\u5C55\u958B\u5B83\uFF09\u3002summary \u5C31\u662F\u6A19\u984C\u3002 -->
      <details id="${h}" class="admin-vt-page admin-dsp2-fold lg:col-span-2">
        <summary class="admin-ui-page-title">${ServerI18n.t("viewerThemePageTitle")}</summary>
        <div class="hud-page-stack">
        <p class="admin-ui-page-note">${ServerI18n.t("viewerThemePageNote")}</p>

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
                <!-- 2026-11-14\uFF1A\u300C\u4E3B\u984C\u300D\u300C\u986F\u793A\u8A2D\u5B9A\u300D\u5169\u5217\u9000\u5834\u2014\u2014\u5B83\u5011\u73FE\u5728\u5C31\u5728\u540C\u4E00\u9801\u4E0A\u3002 -->
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
        </div>
      </details>`}let F=/^#[0-9a-f]{6}$/i,A=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function G(D){return String(D??"").replace(/[&<>"']/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[C])}function R(D){let C={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(w=>{typeof D[w]=="string"&&F.test(D[w])&&(C[w]=D[w])}),(D.mode==="dark"||D.mode==="light")&&(C.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(C.font=D.font),(D.logo===null||typeof D.logo=="string"&&A.test(D.logo))&&(C.logo=D.logo)),C}function P(D){let C={...c[0],logo:null};try{let t=localStorage.getItem(f);t&&(C={...C,...R(JSON.parse(t))})}catch{}let w="default";function N(){try{localStorage.setItem(f,JSON.stringify(C))}catch{}}function T(t){let n=/^#?([0-9a-f]{6})$/i.exec(t);if(!n)return[0,0,0];let a=parseInt(n[1],16);return[a>>16&255,a>>8&255,a&255]}function L([t,n,a]){let i=[t,n,a].map(y=>(y/=255,y<=.03928?y/12.92:Math.pow((y+.055)/1.055,2.4)));return .2126*i[0]+.7152*i[1]+.0722*i[2]}function I(t,n){let a=L(T(t)),i=L(T(n)),[y,k]=a>i?[a,i]:[i,a];return(y+.05)/(k+.05)}function K(t){return t>=7?{label:"AAA",cls:"is-good"}:t>=4.5?{label:"AA",cls:"is-ok"}:t>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function _(){let t=D.querySelector("[data-vt-presets]");t.innerHTML="",c.forEach(n=>{let a=document.createElement("button");a.type="button",a.className="admin-vt-preset"+(w===n.id?" is-active":""),a.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,a.addEventListener("click",()=>{C={...C,...n},w=n.id,N(),u()}),t.appendChild(a)})}function g(){D.querySelectorAll("[data-vt-mode-btn]").forEach(t=>{t.classList.toggle("is-active",C.mode===t.dataset.vtModeBtn)})}function d(){let t=D.querySelector("[data-vt-colors]"),n=C.mode==="dark"?"#F8FAFC":"#0F172A",a=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];t.innerHTML=a.map(i=>{let y=I(C[i.key],i.vs),k=K(y),S=G(C[i.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${S}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${i.label}</span>
                <span class="grade ${k.cls}">${k.label} \xB7 ${y.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${S}" data-vt-color="${i.key}" />
                <input type="text" value="${S}" data-vt-hex="${i.key}" spellcheck="false" />
                <span class="vs">vs ${i.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let t=D.querySelector("[data-vt-logo-preview]"),n=D.querySelector(".hint-empty"),a=D.querySelector("[data-vt-logo-actions]");C.logo?(t.src=C.logo,t.hidden=!1,n.style.display="none",a.hidden=!1):(t.hidden=!0,n.style.display="",a.hidden=!0)}function r(){let t=D.querySelector("[data-vt-font]");t.value=C.font;let n=D.querySelector("[data-vt-font-specimen]");n.style.fontFamily=C.font}function e(){let t=C.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(t,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(C.primary,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(C.hero,C.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=n.map(a=>{let i=K(a.ratio);return`<span class="vt-contrast-chip ${i.cls}">${a.lbl} \xB7 ${i.label} ${a.ratio.toFixed(1)}</span>`}).join("")}function p(){let t=D.querySelector("[data-vt-stage]"),n=C.mode==="dark"?"#F8FAFC":"#0F172A";t.style.setProperty("--vt-bg",C.bg),t.style.setProperty("--vt-primary",C.primary),t.style.setProperty("--vt-hero",C.hero),t.style.setProperty("--vt-fg",n),t.style.fontFamily=C.font;let a=D.querySelector("[data-vt-preview-logo]");if(C.logo){let i=document.createElement("img");i.src=C.logo,i.style.maxHeight="40px",a.replaceChildren(i)}else a.textContent="Danmu Fire"}let m="auto",b="auto";function v(){D.querySelectorAll("[data-vt-theme-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtThemeBtn===m)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtLangBtn===b)})}async function o(){try{let t=await fetch("/get_settings",{credentials:"same-origin"});if(!t.ok)return;let n=await t.json(),a=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],i=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof a=="string"&&(m=a),typeof i=="string"&&(b=i),v()}catch{}}async function s(t,n){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,value:n,index:1})});if(!a.ok)throw new Error(a.status);window.showToast&&window.showToast(`${t} = ${n}`,!0)}catch(a){console.warn("[admin-viewer-theme] force-mode update failed:",a),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:t}),!1)}}function u(){_(),g(),d(),l(),r(),e(),p(),v()}D.addEventListener("input",t=>{if(t.target.matches("[data-vt-color]")){let n=t.target.dataset.vtColor;F.test(t.target.value)&&(C[n]=t.target.value,w="custom",N(),u())}else if(t.target.matches("[data-vt-hex]")){let n=t.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(t.target.value)&&(C[n]=t.target.value,w="custom",N(),u())}else t.target.matches("[data-vt-font]")&&(C.font=t.target.value,N(),u())}),D.addEventListener("change",t=>{if(t.target.matches("[data-vt-logo-input]")){let n=t.target.files&&t.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let a=new FileReader;a.onload=()=>{C.logo=String(a.result||""),N(),u()},a.readAsDataURL(n)}}),D.addEventListener("click",t=>{let n=t.target.closest("[data-vt-mode-btn]");if(n){C.mode=n.dataset.vtModeBtn,w="custom",N(),u();return}let a=t.target.closest("[data-vt-theme-btn]");if(a){m=a.dataset.vtThemeBtn,v(),s("ViewerThemeMode",m);return}let i=t.target.closest("[data-vt-lang-btn]");if(i){b=i.dataset.vtLangBtn,v(),s("ViewerLangMode",b);return}if(t.target.closest("[data-vt-logo-remove]")){C.logo=null,N(),u();return}let k=t.target.closest("[data-vt-device-btn]");if(k){D.querySelectorAll("[data-vt-device-btn]").forEach(B=>B.classList.toggle("is-active",B===k)),D.querySelector("[data-vt-frame]").dataset.device=k.dataset.vtDeviceBtn;return}let S=t.target.closest("[data-vt-action]");S&&S.dataset.vtAction==="reset"&&(C={...c[0],logo:null},w="default",N(),u())}),u(),o()}document.addEventListener("click",function(D){let C=D.target.closest("[data-vt-jump]");if(!C)return;let w=C.dataset.vtJump;if(w){D.preventDefault();try{location.hash="#/"+w}catch{}}});function M(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(h))return;D.insertAdjacentHTML("beforeend",x());let C=document.getElementById(h);C&&P(C)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Pt=ye(()=>{(function(){"use strict";let h="sec-system-overview";function f(){return`
      <div id="${h}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(M=>`
            <div class="admin-soh-kpi" data-m="${M.id}">
              <div class="admin-soh-kpi__label">${M.label}</div>
              <div class="admin-soh-kpi__value" data-m-v>\u2014</div>
              <div class="admin-soh-kpi__sub" data-m-sub></div>
            </div>`).join("")}
        </div>

        <div class="admin-ui-group">
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohPublicUrlLabel")}</span>
            <span class="val admin-soh-urlrow">
              <code id="sysoPublicUrl">${location.origin}</code>
              <span class="admin-soh-urlwarn" data-soh-urlwarn hidden>${ServerI18n.t("joinUrlLocalOnly")}</span>
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
      </div>`}function c(M){let D=Math.floor(M/86400),C=Math.floor(M%86400/3600),w=Math.floor(M%3600/60);return D>0?`${D}d ${String(C).padStart(2,"0")}h ${String(w).padStart(2,"0")}m`:C>0?`${C}h ${String(w).padStart(2,"0")}m`:`${w}m ${String(M%60).padStart(2,"0")}s`}function x(M,D,C){let w=document.querySelector(`[data-m="${M}"]`);if(!w)return;let N=w.querySelector("[data-m-v]");N&&(N.textContent=D);let T=w.querySelector("[data-m-sub]");T&&(T.textContent=C||"")}function F(M){let D=document.querySelector("[data-soh-banner-dot]"),C=document.querySelector("[data-soh-banner-title]"),w=document.querySelector("[data-soh-chip]"),T=!(M.queue_size!=null&&M.queue_capacity!=null&&M.queue_size>=M.queue_capacity);w&&w.classList.toggle("is-warn",!T),D&&D.classList.toggle("is-warn",!T),C&&(C.textContent=T?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function A(){(async()=>{try{let C=await window.csrfFetch("/admin/metrics");if(!C.ok)return;let w=await C.json(),N=d=>Array.isArray(d)&&d.length?d[d.length-1]:null,T=w.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-w.server_started_at)):0;x("uptime",T>0?c(T):"\u2014","");let L=null;try{let d=await fetch("/admin/audience/stats",{credentials:"same-origin"});d.ok&&(L=(await d.json()).total_live)}catch{}let I=w.ws_clients??0;x("conn",String(I+(L||0)),L==null?ServerI18n.t("sohConnOverlaysOnly",{n:I}):ServerI18n.t("sohConnBreakdown",{overlays:I,viewers:L}));let K=N(w.mem_series||[]),_=w.mem_total_mb?(w.mem_total_mb/1024).toFixed(0):null;x("ram",K!=null?`${Number(K).toFixed(0)}%`:"\u2014",_?ServerI18n.t("sohMemorySub",{total:_}):"");let g=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";x("ver",`v${g}`,ServerI18n.t("sohVersionSub")),F(w)}catch{}})();let M=document.getElementById(h);if(!M)return;let D=()=>{let C=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";M.querySelectorAll("[data-soh-mode]").forEach(w=>{let N=w.dataset.sohMode===C;w.classList.toggle("is-active",N),w.setAttribute("aria-pressed",N?"true":"false")})};D(),document.addEventListener("admin:theme-mode",D),M.addEventListener("click",function(C){let w=C.target.closest("[data-soh-mode]");if(w){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(w.dataset.sohMode),D();return}let N=C.target.closest("[data-soh-action]");if(!(!N||N.disabled)){if(N.dataset.sohAction==="copy-url"){let T=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(T);return}if(N.dataset.sohAction==="show-qr"){let T=M.querySelector("[data-soh-qr]");if(!T)return;if(!T.hidden){T.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(L=>L.ok?L.json():Promise.reject(L)).then(L=>{G(M,L),T.innerHTML=L.svg,T.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}}),R(M)}function G(M,D){let C=M.querySelector("#sysoPublicUrl"),w=M.querySelector("[data-soh-urlwarn]");C&&D&&D.url&&(C.textContent=D.url),w&&(w.hidden=!(D&&D.source==="unavailable"),w.textContent=D&&D.blocked_host?ServerI18n.t("joinUrlNotTrusted",{host:D.blocked_host}):ServerI18n.t("joinUrlLocalOnly"))}function R(M){fetch("/admin/qr/public",{credentials:"same-origin"}).then(D=>D.ok?D.json():null).then(D=>{D&&G(M,D)}).catch(()=>{})}function P(){let M=document.getElementById("settings-grid");!M||document.getElementById(h)||(M.insertAdjacentHTML("beforeend",f()),document.getElementById(h)&&A())}document.addEventListener("admin-panel-rendered",P),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),P()})})()});var Rt=ye(()=>{(function(){"use strict";let h="sec-polls",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(G){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[G]})};function c(){return`
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
  `}function x(){let A=document.getElementById("sec-polls");if(!A)return;let G=A.querySelector("[data-poll-queue]"),R=A.querySelector("[data-poll-editor]"),P=A.querySelector("[data-poll-view-builder]"),M=A.querySelector("[data-poll-view-live]"),D=A.querySelector("[data-poll-view-results]"),C="danmu.adminPollQueue.v2";function w(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function T(W){return{id:N(),label:""}}function L(){return{id:w(),text:"",timer:90,image_url:"",server_q_id:"",options:[T("A"),T("B")]}}let I=null,K="builder",_=null,g=0,d={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,r=[];try{let W=localStorage.getItem(C);if(W){let Q=JSON.parse(W);Array.isArray(Q)?r=Q:Q&&Array.isArray(Q.queue)&&(r=Q.queue)}}catch{}(!Array.isArray(r)||r.length===0)&&(r=[L()]),r.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let e=r[0].id,p="manual",m=null,b=null,v={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function o(){try{localStorage.setItem(C,JSON.stringify({queue:r,activeId:e,mode:p}))}catch{}}function s(W){return r.find(Q=>Q.id===W)}function u(W,Q){let te=s(W);te&&Object.assign(te,Q)}function t(W,Q,te){let ie=W.slice(),[le]=ie.splice(Q,1);return ie.splice(te,0,le),ie}function n(){G.innerHTML="",r.forEach((W,Q)=>{let te=document.createElement("div");te.className="admin-poll-qrow",W.id===e&&te.classList.add("is-active");let ie=v.active&&v.currentIndex===Q;ie&&te.classList.add("is-running"),te.dataset.qid=W.id,te.draggable=!0;let le=!!W.image_url;te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Q+1}</span>
            <div class="info">
              <div class="text">${f(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${le?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${ie?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,G.appendChild(te)})}function a(){let W=s(e)||r[0];if(!W){R.innerHTML="";return}let Q=r.indexOf(W);R.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Q+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Q+1})}</span>
            </div>
            <span class="progress">Q${Q+1} / ${r.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${f(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${f(W.image_url)}" alt="" />
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
            ${W.options.map((te,ie)=>`
              <div class="admin-poll-opt" data-oid="${te.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+ie)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${te.id}" value="${f(te.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+ie)})}" maxlength="100" />
                ${W.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${te.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
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
        `}function i(){I&&I.active?K="live":_?K="results":K="builder",A.dataset.pollView=K,P.hidden=K!=="builder",M.hidden=K!=="live",D.hidden=K!=="results",n(),a(),q(),K==="live"?j():K==="results"&&E(),K==="live"?y():k()}function y(){l||(l=setInterval(()=>{K!=="live"||!I||!I.active||J()},1e3))}function k(){l&&(clearInterval(l),l=null)}function S(W,Q){if(!W||!W.time_limit_seconds)return null;if(!Q)return W.time_limit_seconds;let te=Date.now()/1e3-Q;return Math.max(0,Math.round(W.time_limit_seconds-te))}function B(W){if(W==null)return"\u221E";let Q=String(Math.floor(W/60)).padStart(2,"0"),te=String(W%60).padStart(2,"0");return`${Q}:${te}`}function j(){if(!I||!I.questions||I.questions.length===0){M.innerHTML="";return}let W=I.current_index>=0?I.current_index:0,Q=I.questions.length,te=I.questions[W],ie=S(te,I.started_at),le=te.time_limit_seconds||0,ue=le>0&&ie!=null?Math.max(0,Math.min(1,ie/le)):1,me=le>0&&ie!=null&&ie<=Math.max(5,le*.15),Ie=te.options.reduce((ae,de)=>ae+(de.count||0),0),Ee=[...te.options].sort((ae,de)=>(de.count||0)-(ae.count||0)),Le=Ee[0]?Ee[0].count:0,re=I.questions[W+1],oe=110,ce=oe/2-6,z=2*Math.PI*ce,ne=z*ue;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${f((I.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:Q})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${oe} ${oe}" width="56" height="56">
                      <circle cx="${oe/2}" cy="${oe/2}" r="${ce}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${oe/2}" cy="${oe/2}" r="${ce}" fill="none"
                        stroke="${me?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ne} ${z}" stroke-linecap="round"
                        transform="rotate(-90 ${oe/2} ${oe/2})"
                        style="filter: drop-shadow(0 0 4px ${me?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${me?"is-low":""}" data-live-mmss>${ie==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(ie)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${f(te.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(ae=>{let de=Ie>0?ae.count/Ie*100:0,he=(ae.count||0)>0&&ae.count===Le;return`
                    <div class="admin-polls-live-bar ${he?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${f(ae.key)}</span>
                        <span class="lbl">${f(ae.text||"")}</span>
                        ${he?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${de.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ae.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${de.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Ie}</strong>`})}</span>
                ${re?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${f(re.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${W>=Q-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${W+1}/${Q}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${I.questions.map((ae,de)=>{let he=de<W?"done":de===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${he}">
                        <span class="idx">${he==="done"?"\u2713":de+1}</span>
                        <span class="t">${f(ae.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${he==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(ae=>`
                    <label class="admin-polls-live-toggle ${d[ae.k]?"is-on":""}" data-live-toggle="${ae.k}">
                      <span class="lbl">${ae.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function J(){if(!I||!I.active)return;let W=I.current_index>=0?I.current_index:0,Q=I.questions[W];if(!Q)return;let te=S(Q,I.started_at),ie=Q.time_limit_seconds||0,le=M.querySelector("[data-live-mmss]"),ue=M.querySelector("[data-live-ring]");if(le&&(le.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(te),le.classList.toggle("is-low",ie>0&&te!=null&&te<=Math.max(5,ie*.15))),ue&&ie>0&&te!=null){let me=+ue.getAttribute("r"),Ie=2*Math.PI*me,Ee=Math.max(0,Math.min(1,te/ie));ue.setAttribute("stroke-dasharray",`${Ie*Ee} ${Ie}`);let Le=te<=Math.max(5,ie*.15);ue.setAttribute("stroke",Le?"var(--hud-crimson)":"var(--color-primary)"),ue.style.filter=`drop-shadow(0 0 4px ${Le?"var(--hud-crimson)":"var(--color-primary)"})`}d.autoAdvance&&ie>0&&te===0&&(W>=I.questions.length-1?U():V())}function E(){let W=_;if(!W||!W.questions||W.questions.length===0){D.innerHTML="";return}let Q=W.questions.length,te=Math.max(0,Math.min(g,Q-1)),ie=W.questions[te],le=ie.options.reduce((z,ne)=>z+(ne.count||0),0),ue=[...ie.options].sort((z,ne)=>(ne.count||0)-(z.count||0)),me=ue[0]||{key:"-",text:"\u2014",count:0},Ie=ue[1],Ee=le>0?me.count/le*100:0,Le=Ie?Math.max(0,me.count-Ie.count):me.count,re=W.started_at||0,oe=W.ended_at||Date.now()/1e3,ce=Math.max(0,Math.round(oe-re));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Q>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((z,ne)=>`
                    <button type="button" role="tab" class="${ne===te?"is-active":""}" data-results-tab="${ne}">
                      Q${ne+1}<span class="t">${f((z.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${te+1}/${Q} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:B(ce),n:le})}</span>
                </div>
                <div class="text">${f(ie.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${f(me.key)}</div>
                <div class="info">
                  <div class="lbl">${f(me.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} \xB7 ${Ee.toFixed(1)}% ${Ie?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Le}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:le})}</span>
                </div>
                ${ue.map((z,ne)=>{let ae=le>0?z.count/le*100:0;return`
                    <div class="admin-polls-results-bar ${ne===0&&z.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ne+1}</span>
                        <span class="tag">${f(z.key)}</span>
                        <span class="lbl">${f(z.text||"")}</span>
                        <span class="pct">${ae.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:z.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ae.toFixed(1)}%"></div></div>
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
                  <span class="big">${le}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,le?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:ie.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${ie.time_limit_seconds?B(ie.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${B(ce)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let z=Math.max(1,...ue.map(ne=>ne.count));return ue.map(ne=>`<div class="bar" style="height:${Math.max(6,ne.count/z*100)}%"></div>`).join("")})()}
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
        `}function O(W){let Q=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((te,ie)=>{let le=te.options.reduce((ue,me)=>ue+(me.count||0),0);te.options.forEach(ue=>{let me=le>0?(ue.count/le*100).toFixed(1):"0";Q.push([ie+1,te.text,ue.key,ue.text,ue.count,me])})}),Q.map(te=>te.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function $(W,Q,te){let ie=new Blob([te],{type:Q}),le=document.createElement("a");le.href=URL.createObjectURL(ie),le.download=W,document.body.appendChild(le),le.click(),setTimeout(()=>{URL.revokeObjectURL(le.href),le.remove()},0)}A.addEventListener("click",W=>{let Q=W.target.closest("[data-live-action]");if(Q){let ue=Q.dataset.liveAction;ue==="advance"?V():ue==="end"?U():ue==="pause"&&(d.autoAdvance=!1,j());return}let te=W.target.closest("[data-live-toggle]");if(te){let ue=te.dataset.liveToggle;ue in d&&(d[ue]=!d[ue],te.classList.toggle("is-on",d[ue]));return}let ie=W.target.closest("[data-results-tab]");if(ie){g=+ie.dataset.resultsTab||0,E();return}let le=W.target.closest("[data-results-action]");if(le){let ue=le.dataset.resultsAction,me=_;if(!me)return;if(ue==="copy"){let Ie=me.questions.map((Ee,Le)=>{let re=Ee.options.reduce((ce,z)=>ce+(z.count||0),0),oe=Ee.options.map(ce=>{let z=re>0?(ce.count/re*100).toFixed(1):"0.0";return`  ${ce.key}. ${ce.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} (${z}%)`});return`Q${Le+1}: ${Ee.text}
${oe.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Ie)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ue==="csv"?$(`poll_${(me.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",O(me)):ue==="json"?$(`poll_${(me.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(me,null,2)):ue==="reset"&&(_=null,g=0,i());return}}),G.addEventListener("dragstart",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&(m=Q.dataset.qid,Q.classList.add("is-dragging"))}),G.addEventListener("dragend",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&Q.classList.remove("is-dragging"),m=null,G.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),G.addEventListener("dragover",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-qrow");!Q||!m||Q.dataset.qid===m||(G.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),G.addEventListener("drop",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-qrow");if(!Q||!m)return;let te=r.findIndex(le=>le.id===m),ie=r.findIndex(le=>le.id===Q.dataset.qid);te<0||ie<0||te===ie||(r=t(r,te,ie),o(),i())}),G.addEventListener("click",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&(e=Q.dataset.qid,o(),i())}),R.addEventListener("input",W=>{let Q=s(e);if(Q){if(W.target.matches("[data-ed-text]")){Q.text=W.target.value,o(),n();return}if(W.target.matches("[data-ed-opt-text]")){let te=W.target.dataset.edOptText,ie=Q.options.find(le=>le.id===te);ie&&(ie.label=W.target.value,o(),n())}}}),R.addEventListener("change",W=>{let Q=s(e);Q&&W.target.matches("[data-ed-timer]")&&(Q.timer=+W.target.value,o(),n())}),R.addEventListener("click",async W=>{let Q=s(e);if(!Q)return;let te=W.target.closest("[data-ed-opt-remove]");if(te){let le=te.dataset.edOptRemove;Q.options.length>2&&(Q.options=Q.options.filter(ue=>ue.id!==le),o(),a(),n());return}if(W.target.closest("[data-ed-opt-add]")){Q.options.length<6&&(Q.options.push(T()),o(),a(),n());return}let ie=W.target.closest("[data-ed-action]");if(ie)if(ie.dataset.edAction==="remove-q"){if(r.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=r.findIndex(me=>me.id===e);r=r.filter(me=>me.id!==e),e=r[Math.min(ue,r.length-1)].id,o(),i()}}else if(ie.dataset.edAction==="upload-q-image"){let le=R.querySelector("[data-ed-q-image-input]");le&&le.click()}else ie.dataset.edAction==="remove-q-image"&&(Q.image_url="",o(),a(),n())}),R.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let Q=W.target.files&&W.target.files[0];if(!Q)return;let te=s(e);if(!te)return;if(!v.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(Q.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let ie=new FormData;ie.append("file",Q);try{let le=await csrfFetch(`/admin/poll/${encodeURIComponent(v.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:ie}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||"upload failed");te.image_url=ue.image_url,o(),a(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(le){showToast&&showToast(String(le.message||le),!1)}finally{W.target.value=""}}),R.addEventListener("dragstart",W=>{let Q=W.target.closest(".admin-poll-opt");Q&&(b=Q.dataset.oid,Q.classList.add("is-dragging"))}),R.addEventListener("dragend",W=>{R.querySelectorAll(".is-dragging, .is-drag-over").forEach(Q=>Q.classList.remove("is-dragging","is-drag-over")),b=null}),R.addEventListener("dragover",W=>{let Q=W.target.closest(".admin-poll-opt");!Q||!b||Q.dataset.oid===b||(W.preventDefault(),R.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),R.addEventListener("drop",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-opt"),te=s(e);if(!Q||!b||!te)return;let ie=te.options.findIndex(ue=>ue.id===b),le=te.options.findIndex(ue=>ue.id===Q.dataset.oid);ie<0||le<0||ie===le||(te.options=t(te.options,ie,le),o(),a())}),A.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let ue=L();r.push(ue),e=ue.id,o(),i();return}let te=W.target.closest("[data-poll-template]");if(te){let ue=L(),me=te.dataset.pollTemplate,Ie=["A","B","C","D","E"],Ee=Le=>Le.map((re,oe)=>{let ce=T(Ie[oe]);return ce.label=re,ce});me==="yesno"?(ue.text="",ue.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):me==="stars"?(ue.timer=60,ue.options=Ee(["1","2","3","4","5"])):me==="four"&&(ue.options=Ee(["","","",""])),r.push(ue),e=ue.id,o(),i();return}let ie=W.target.closest("[data-poll-mode]");ie&&(p=ie.dataset.pollMode,A.querySelectorAll("[data-poll-mode]").forEach(ue=>ue.classList.toggle("is-active",ue===ie)),o());let le=W.target.closest("[data-poll-session-action]");if(le){let ue=le.dataset.pollSessionAction;ue==="start"?Y():ue==="advance"?V():ue==="end"&&U()}});function q(){let W=A.querySelector("[data-poll-session]");if(!W)return;let Q=W.querySelector("[data-poll-session-status]"),te=W.querySelector("[data-poll-session-action='start']"),ie=W.querySelector("[data-poll-session-action='advance']"),le=W.querySelector("[data-poll-session-action='end']");if(!v.pollId||!v.active){Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,ie.hidden=!0,le.hidden=!0;return}let ue=r.length,me=v.currentIndex+1,Ie=v.currentIndex>=ue-1;Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${me} / ${ue}</span>`,te.hidden=!0,ie.hidden=Ie,le.hidden=!1}async function Y(){try{let W=r.map((me,Ie)=>{let Ee=(me.text||"").trim(),Le=me.options.map(re=>(re.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Ie+1}));if(Le.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Ie+1}));return{text:Ee,options:Le,time_limit_seconds:me.timer&&me.timer>0?me.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Q=(()=>{let me=r.map(Ie=>Number(Ie.timer)||0).filter(Ie=>Ie>0);return me.length?Math.round(me.reduce((Ie,Ee)=>Ie+Ee,0)/me.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:p||"manual",default_duration_s:Q})}),ie=await te.json().catch(()=>({}));if(!te.ok)throw new Error(ie.error||ServerI18n.t("pollBuilderErrCreateFailed"));v.pollId=ie.poll_id,(ie.questions||[]).forEach((me,Ie)=>{r[Ie]&&(r[Ie].server_q_id=me.id)}),o();let le=await csrfFetch("/admin/poll/start",{method:"POST"}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||ServerI18n.t("pollBuilderErrStartFailed"));v.active=!0,v.currentIndex=ue.current_index??0,I=ue,_=null,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ee()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),Q=await W.json().catch(()=>({}));if(!W.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));v.currentIndex=Q.current_index,v.active=!!Q.active,I=Q,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:v.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function U(){try{let W=I,Q=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Q.ok){let te=await Q.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(_={...W,ended_at:Date.now()/1e3},g=W.current_index>=0?W.current_index:0),v.active=!1,v.pollId="",v.currentIndex=-1,I=null,v.statusTimer&&(clearInterval(v.statusTimer),v.statusTimer=null),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ee(){v.statusTimer&&clearInterval(v.statusTimer),v.statusTimer=setInterval(async()=>{if(v.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let Q=await W.json();if(Q.poll_id!==v.pollId)return;v.active=!!Q.active,v.currentIndex=Q.current_index??-1;let te=!!(I&&I.active);I=Q,Q.active||(clearInterval(v.statusTimer),v.statusTimer=null,te&&Q.questions&&!_&&(_={...Q,ended_at:Date.now()/1e3},g=Q.current_index>=0?Q.current_index:0),I=null),K==="live"?j():i()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{v.statusTimer&&(clearInterval(v.statusTimer),v.statusTimer=null),k()}),i()}function F(){let A=document.getElementById("settings-grid");!A||document.getElementById(h)||(A.insertAdjacentHTML("beforeend",c()),document.getElementById(h)&&x())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var Ot=ye(()=>{(function(){"use strict";let x="sec-live-feed",F={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},A=[],G=[],R=!1,P="",M="all",D=0,C=0,w=null,N=null,T=null;function L(re){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(re):String(re??"").replace(/[&<>"']/g,function(oe){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[oe]})}function I(re,oe){return re?re.length>oe?re.slice(0,oe)+"\u2026":re:""}function K(re){let oe=new Date(re),ce=z=>String(z).padStart(2,"0");return`${ce(oe.getHours())}:${ce(oe.getMinutes())}:${ce(oe.getSeconds())}`}function _(re){if(!P)return!0;let oe=P.toLowerCase(),ce=re.data;return ce.text&&ce.text.toLowerCase().includes(oe)||ce.nickname&&ce.nickname.toLowerCase().includes(oe)||ce.fingerprint&&ce.fingerprint.toLowerCase().includes(oe)||ce.layout&&ce.layout.toLowerCase().includes(oe)}function g(re){return M==="muted"?!!re.muted:!0}function d(){M="all",document.querySelectorAll(".admin-live-feed-tab").forEach(re=>re.classList.toggle("is-active",re.dataset.tab==="all"))}function l(){P="",T&&(T.value=""),d()}function r(re,oe){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let z;return re==="paused"?z=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:oe||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):re==="no-result"?z=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:oe||ServerI18n.t("lfNoMatchDesc")}):z=window.AdminEmpty.render("messages"),z.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),z.setAttribute("data-empty-kind","live-feed"),z}let ce=document.createElement("div");return ce.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",ce.setAttribute("data-empty-kind","live-feed"),ce.innerHTML=`<div class="admin-proto-placeholder-title">${L(re)}</div><div class="admin-proto-placeholder-body">${L(oe||"")}</div>`,ce}function e(re){let oe=re.data,ce=document.createElement("div");ce.className="admin-live-feed-row"+(re.muted?" is-muted":""),ce.dataset.id=re.id,ce.tabIndex=-1;let z=document.createElement("span");if(z.className="admin-live-feed-time",z.textContent=K(re.ts),ce.appendChild(z),(oe.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=oe.layout,ce.appendChild(pe)}let ae=F[oe.integration];if(ae){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ae,ce.appendChild(pe)}let de=document.createElement("span");de.className="admin-live-feed-text",de.textContent=I(oe.text||"",80),de.title=oe.text||"",ce.appendChild(de);let he=document.createElement("span");he.className="admin-live-feed-identity",window.AdminIdentity&&he.appendChild(AdminIdentity.render({nickname:oe.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!T||(T.value=pe,T.dispatchEvent(new Event("input",{bubbles:!0})),T.focus())}})),ce.appendChild(he);let ke=document.createElement("span");if(ke.className="admin-live-feed-actions is-hover-reveal",oe.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",xe=>{xe.stopPropagation(),m(re)}),ke.appendChild(pe)}let $e=document.createElement("button");if($e.type="button",$e.className="admin-ui-chip is-danger admin-live-feed-action",$e.textContent=ServerI18n.t("blockKeywordBtn"),$e.title=ServerI18n.t("blockKeywordTitle"),$e.addEventListener("click",pe=>{pe.stopPropagation(),b("keyword",oe.text,re.id)}),ke.appendChild($e),oe.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",oe.fingerprint),pe.addEventListener("click",xe=>{xe.stopPropagation(),b("fingerprint",oe.fingerprint,re.id)}),ke.appendChild(pe)}return ce.appendChild(ke),ce.classList.add("is-clickable"),ce.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||p(re)}),ce.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),p(re))}),ce}function p(re){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(re)}async function m(re){let oe=re&&re.data&&re.data.message_id;if(!oe)return;let ce=await window.AdminModeration.recall(oe);if(!ce.ok){console.error("[LiveFeed] Recall failed:",ce.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}re.recalled=!0;let z=v(re.id);z&&z.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function b(re,oe,ce){if(!(!oe||!await(re==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,oe))){if(ce){let ae=A.find(de=>de.id===ce);ae&&(ae.muted=!0)}else A.forEach(ae=>{re==="keyword"&&ae.data.text===oe&&(ae.muted=!0),re==="fingerprint"&&ae.data.fingerprint===oe&&(ae.muted=!0)});u()}}function v(re){if(!w||!re)return null;let oe=w.children;for(let ce=0;ce<oe.length;ce++)if(oe[ce].dataset&&oe[ce].dataset.id===re)return oe[ce];return null}function o(){let re=document.activeElement,oe=re&&re.closest?re.closest(".admin-live-feed-row"):null;return oe?oe.dataset.id:null}function s(re){if(!re)return;let oe=v(re);oe&&document.activeElement!==oe&&oe.focus({preventScroll:!0})}function u(){if(!w)return;let re=o(),oe=document.createDocumentFragment(),ce=A.filter(z=>_(z)&&g(z));for(let z=ce.length-1;z>=0;z--)oe.appendChild(e(ce[z]));if(w.textContent="",oe.childNodes.length===0){let z=R?r("paused"):A.length===0?r("empty"):r("no-result");w.appendChild(z)}else w.appendChild(oe);a(),s(re)}function t(re){if(!w||!_(re)||!g(re))return null;let oe=w.querySelector("[data-empty-kind='live-feed']");oe&&oe.remove();let ce=w.scrollTop<=8,z=e(re);if(ce)w.insertBefore(z,w.firstChild);else{let ne=w.scrollHeight;w.insertBefore(z,w.firstChild),w.scrollTop+=w.scrollHeight-ne,C+=1}return z}function n(){let re=A.length-200;if(re<=0)return;A.splice(0,re).forEach(ce=>{let z=v(ce.id);z&&z.remove()})}function a(){S(),B(),y()}function i(re,oe){let ce={ts:typeof oe=="number"&&oe>0?oe*1e3:Date.now(),data:re,id:re&&re.message_id?"m"+re.message_id:"e"+ ++D};if(re&&re.status==="blocked"&&(ce.muted=!0),R){G.push(ce),B(),y();return}A.push(ce),t(ce),n(),a()}function y(){let re=document.querySelector("[data-lf-jump]"),oe=document.querySelector("[data-lf-jump-n]");if(!re||!oe)return;let ce=G.length,z=ce>0?ce:C;z>0?(re.hidden=!1,oe.textContent=String(z)):re.hidden=!0}function k(){R&&j(),C=0,w&&(w.scrollTop=0),y()}function S(){let re=document.querySelector("[data-lf-state]");re&&(re.className=R?"ui-status is-warning":"ui-status is-success",re.textContent=R?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function B(){let re=document.getElementById(x)||document,oe=(ce,z)=>{let ne=re.querySelector(ce);ne&&(ne.textContent=String(z))};oe("[data-cnt-all]",A.length),oe("[data-cnt-mut]",A.filter(ce=>ce.muted).length)}function j(){if(R=!R,w&&w.setAttribute("aria-live",R?"off":"polite"),N&&(N.textContent=R?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),N.classList.toggle("is-primary",R),N.classList.toggle("is-ghost",!R)),R)B(),y();else{for(let re of G)A.push(re);G=[],A.length>200&&A.splice(0,A.length-200),C=0,u()}}function J(){let re=document.getElementById("settings-grid");if(!re)return!1;let oe=`
      <div id="${x}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
              placeholder="${L(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${L(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${L(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return re.insertAdjacentHTML("beforeend",oe),!0}let E=!1,O=null,$=0,q=1500,Y=!1;async function V(){if(!Y){Y=!0;try{let re=await fetch("/admin/live-feed/recent?since="+encodeURIComponent($),{credentials:"same-origin"});if(!re.ok)return;let oe=await re.json();if(Array.isArray(oe.entries)){for(let ce of oe.entries)if(!(!ce||!ce.data)){if(typeof ce.seq=="number"){if(ce.seq<=$)continue;$=ce.seq}i(ce.data,ce.ts)}}typeof oe.next_since=="number"&&oe.next_since>$&&($=oe.next_since)}catch{}finally{Y=!1}}}let U=5e3,ee=null,W=!1;async function Q(){if(!(W||document.hidden)){W=!0;try{let re=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!re.ok)return;let oe=await re.json(),ce=Array.isArray(oe.pending)?oe.pending.length:0,z=document.getElementById(x);if(!z)return;let ne=z.querySelector("[data-cnt-q]");ne&&(ne.textContent=String(ce));let ae=z.querySelector("[data-lf-pending-link]");ae&&ae.classList.toggle("has-pending",ce>0)}catch{}finally{W=!1}}}function te(){E||(E=!0,V(),O=setInterval(V,q),Q(),ee=setInterval(Q,U),window.addEventListener("beforeunload",()=>{ee&&(clearInterval(ee),ee=null),O&&(clearInterval(O),O=null)}))}function ie(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(x)&&J()&&(le(),u())}function le(){w=document.getElementById("liveFeedList"),N=document.getElementById("liveFeedPauseBtn"),T=document.getElementById("liveFeedSearch");let re=document.getElementById("liveFeedClearBtn"),oe=document.querySelectorAll(".admin-live-feed-tab");N&&N.addEventListener("click",j),re&&re.addEventListener("click",()=>{A=[],G=[],C=0,u()});let ce=document.querySelector("[data-lf-jump-btn]");if(ce&&ce.addEventListener("click",k),w&&w.addEventListener("scroll",()=>{w.scrollTop<=8&&C>0&&(C=0,y())},{passive:!0}),oe.forEach(z=>{z.addEventListener("click",()=>{oe.forEach(ne=>ne.classList.remove("is-active")),z.classList.add("is-active"),M=z.dataset.tab||"all",u()})}),T){let z=null;T.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(()=>{P=T.value.trim(),u()},200)})}te()}function ue(re){if(!("ontouchstart"in window))return;let oe=0,ce=0,z=0,ne=null,ae=null,de=!1;function he(ke){if(ke.querySelector(".admin-live-feed-row__swipe-actions"))return;let $e=ke.dataset.id,pe=A.find(Ae=>Ae.id===$e),xe=!!(pe&&pe.data&&pe.data.message_id),Te=document.createElement("div");Te.className="admin-live-feed-row__swipe-actions",Te.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${xe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,Te.addEventListener("click",function(Ae){let Fe=Ae.target.closest("[data-swipe-act]");if(!Fe||Fe.disabled)return;let Pe=ke.dataset.id,qe=A.find(je=>je.id===Pe);if(!qe||!qe.data)return;let Oe=Fe.dataset.swipeAct;Oe==="ban"?qe.data.fingerprint&&b("fingerprint",qe.data.fingerprint,Pe):Oe==="recall"&&m(qe),ke.classList.remove("is-swiped")}),ke.appendChild(Te)}re.addEventListener("touchstart",function(ke){let $e=ke.target.closest(".admin-live-feed-row");$e&&(ke.target.closest(".admin-live-feed-row__swipe-actions")||(ne=$e,de=!1,oe=ke.touches[0].clientX,ce=ke.touches[0].clientY,z=0))},{passive:!0}),re.addEventListener("touchmove",function(ke){if(!ne||de)return;let $e=ke.touches[0],pe=$e.clientX-oe,xe=$e.clientY-ce;if(Math.abs(xe)>Math.abs(pe)&&Math.abs(xe)>12){de=!0;return}if(z=pe,pe<-10){he(ne),ae=ne,ne.classList.add("is-swiping");let Te=Math.max(-180,pe);ne.style.transform=`translateX(${Te}px)`}else pe>10&&ne.classList.contains("is-swiped")&&(ne.style.transform="")},{passive:!0}),re.addEventListener("touchend",function(){ne&&(ne.classList.remove("is-swiping"),ne.style.transform="",z<=-60?ne.classList.add("is-swiped"):ne.classList.remove("is-swiped"),ne=null,ae=null,z=0)},{passive:!0})}function me(){return w?Array.from(w.querySelectorAll(".admin-live-feed-row")):[]}function Ie(){let re=me(),oe=document.activeElement;for(let ce of re)if(ce===oe||ce.contains(oe))return ce;return null}function Ee(re){let oe=me();if(!oe.length)return!1;let ce=Ie(),z=ce?oe.indexOf(ce)+re:re>0?0:oe.length-1;return z=Math.max(0,Math.min(oe.length-1,z)),oe[z].focus(),oe[z].scrollIntoView({block:"nearest"}),!0}function Le(re){let oe=Ie();if(!oe)return!1;let ce=A.find(ne=>ne.id===oe.dataset.id);if(!ce)return!1;let z=re==="keyword"?ce.data.text:ce.data.fingerprint;return z?(b(re,z,ce.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return A.slice()},isVisible:function(){return!!(w&&w.offsetParent!==null)},isPaused:function(){return R},moveFocus:Ee,blockFocused:Le,togglePause:function(){j()}},document.addEventListener("admin-panel-rendered",ie),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie()})()});var qt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.loadDetailsState,f=window.AdminUtils.saveDetailsState,c=window.AdminUtils.escapeHtml;function x(u,t=!1){var n=h();return n[u]!==void 0?n[u]:t}function F(u){var t=h();t[u.id]=u.open,f(t)}let A=!1;new MutationObserver(()=>{let u=document.getElementById("settings-grid");if(u&&!(document.getElementById("sec-plugins")||A)){A=!0;try{R(u)}finally{A=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function R(u){let t=`
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
      `;u.insertAdjacentHTML("beforeend",t);let n=document.querySelector("[data-console-filters]");n&&n.addEventListener("click",a=>{let i=a.target.closest("[data-console-filter]");i&&(n.querySelectorAll("[data-console-filter]").forEach(y=>y.classList.toggle("is-active",y===i)),D=i.dataset.consoleFilter,L())}),document.getElementById("pluginsReloadBtn").addEventListener("click",s),_(),K()}let P=0,M=0,D="all",C=[],w=80;function N(u){let t=(u||"INFO").toUpperCase();return t==="ERROR"?"is-error":t==="WARN"?"is-warn":t==="DEBUG"?"is-debug":"is-info"}function T(u){let t=new Date(u*1e3),n=a=>String(a).padStart(2,"0");return`${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`}function L(){let u=document.getElementById("pluginsConsoleBody");if(!u)return;let t=D==="all"?C:C.filter(n=>(n.level||"INFO").toUpperCase()===D);if(t.length===0){let n=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;u.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${n}</span>
          </div>`;return}u.innerHTML=t.map(n=>{let a=T(n.ts),i=(n.msg||"").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),y=(n.plugin||"\u2014").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),k=(n.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${a}</span>
          <span class="lv ${N(n.level)}">${k}</span>
          <span class="plg">${y}</span>
          <span class="msg">${i}</span>
        </div>`}).join("")}async function I(){try{let u=await fetch(`/admin/plugins/console?since=${P}`,{credentials:"same-origin"});if(!u.ok)return;let t=await u.json();if(!Array.isArray(t.events)||t.events.length===0)return;for(C.unshift(...t.events);C.length>w;)C.pop();P=t.latest_seq||P,L()}catch{}}function K(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:I}))}async function _(){let u=document.getElementById("pluginsList");if(u)try{let t=await csrfFetch("/admin/plugins/list");if(!t.ok)throw new Error(`HTTP ${t.status}`);let n=await t.json(),a=n.plugins||[];if(g(n.upload_allowed!==!1),a.length===0){u.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",d([]);return}u.innerHTML=a.map(l).join(""),v(u),d(a)}catch(t){console.error("Failed to load plugins:",t),u.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function g(u){let t=document.getElementById("pluginsUploadBtn");t&&(t.disabled=!u,t.toggleAttribute("data-upload-disabled",!u),t.textContent=ServerI18n.t(u?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),u?t.removeAttribute("title"):t.title="ALLOW_PLUGIN_UPLOAD")}function d(u){let t=u.length,n=u.filter(S=>S.enabled).length,a=t-n,i=u.map(S=>S.priority).filter(S=>typeof S=="number"),y=i.length?Math.round(i.reduce((S,B)=>S+B,0)/i.length):null,k=(S,B)=>{document.querySelectorAll(`[data-plugins-stat="${S}"]`).forEach(j=>{j.textContent=B})};k("loaded",t),k("running",n),k("paused",a),k("priority",y??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(S=>{S.textContent=t})}function l(u){let{name:t,version:n,description:a,priority:i,enabled:y,is_user:k,file:S}=u,B=`plugin-toggle-${t}`,j=p(i),J=b(i),E=e(u),O=k&&S?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${c(S)}"
            data-plugin-name="${c(t)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${c(t)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${c(t)}">
          <span class="admin-plugins-dot ${y?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${c(t)}</div>
            ${a?`<div class="desc">${c(a)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${n?"v"+c(n):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${j}">${i??"\u2014"}${J?" \xB7 "+J:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${m(E)}">${E}</span>
          <div class="admin-plugins-toggle-cell">
            ${O}
            <label class="admin-plugins-switch" for="${B}">
              <input type="checkbox" id="${B}" role="switch"
                aria-checked="${!!y}" aria-label="Toggle plugin ${c(t)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${c(t)}"
                ${y?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function r(u,t){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:u}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:t}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let a=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:t})}),i=await a.json().catch(()=>({}));if(!a.ok){showToast(i.error||ServerI18n.t("pluginsToastRemoveFailed",{status:a.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:u}),!0),await _()}catch(a){showToast(ServerI18n.t("pluginsToastNetError",{msg:a.message||""}),!1)}}function e(u){let t=u.file||u.path||u.source||"";if(typeof t=="string"){if(t.endsWith(".py"))return"PY";if(t.endsWith(".js"))return"JS"}return(u.language||"PY").toUpperCase()}function p(u){return u==null?"is-muted":u<=10?"is-danger":u<=50?"is-warn":"is-cyan"}function m(u){return u==="JS"?"is-cyan":u==="PY"?"is-warn":"is-muted"}function b(u){return u==null?"":u<=10?"CRITICAL":u<=50?"HIGH":"NORMAL"}function v(u){u.querySelectorAll(".plugin-toggle").forEach(t=>{t.addEventListener("change",async function(){let n=this.dataset.pluginName,a=this.checked;await o(n,a,this)})}),u.querySelectorAll(".plugin-uninstall").forEach(t=>{t.addEventListener("click",function(){r(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function o(u,t,n){let a=t?"/admin/plugins/enable":"/admin/plugins/disable";try{let i=await csrfFetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u})});if(!i.ok){let y=await i.json().catch(()=>({}));throw new Error(y.error||`HTTP ${i.status}`)}showToast(t?ServerI18n.t("pluginEnabled").replace("{name}",u):ServerI18n.t("pluginDisabled").replace("{name}",u),!0)}catch(i){console.error(`Failed to ${t?"enable":"disable"} plugin:`,i),showToast(i.message||ServerI18n.t("operationFailed"),!1),n&&(n.checked=!t)}}async function s(){let u=document.getElementById("pluginsReloadBtn");u&&(u.disabled=!0);try{let t=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!t.ok){let n=await t.json().catch(()=>({}));throw new Error(n.error||`HTTP ${t.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await _()}catch(t){console.error("Failed to reload plugins:",t),showToast(t.message||ServerI18n.t("reloadFailed"),!1)}finally{u&&(u.disabled=!1)}}})})()});var Ht=ye(()=>{(function(){"use strict";let h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},f={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},c=null,x=null;function F(){return c||(c=document.createElement("div"),c.className="admin-pu-backdrop",c.hidden=!0,c.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(c),c.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===c)&&r()}),c)}function A(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((m,b)=>{let v=b+1,o=v<e,u=o?"is-done":v===e?"is-active":"";return(b>0?`<span class="admin-pu-step-line ${o?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${u}">
          <span class="circle">${o?"\u2713":v}</span>
          <span class="label">${m}</span>
        </div>`}).join("")}function G(e,p){x.step=e;let m=c.querySelector("[data-pu-steps]");m&&(m.innerHTML=A(e));let b=c.querySelector("[data-pu-body]");b&&(b.innerHTML=p)}function R(e){let p=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),m=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${m}</div>
          <div class="admin-pu-dropzone-msg">${h(p)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function P(){let e=c.querySelector("[data-pu-dropzone]"),p=c.querySelector("[data-pu-file]"),m=c.querySelector("[data-pu-browse]");m&&m.addEventListener("click",()=>p&&p.click()),p&&p.addEventListener("change",()=>{p.files&&p.files[0]&&M(p.files[0])}),e&&(e.addEventListener("click",()=>p&&p.click()),e.addEventListener("dragover",b=>{b.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",b=>{b.preventDefault(),e.classList.remove("is-over");let v=b.dataTransfer&&b.dataTransfer.files;if(!(!v||v.length===0)){if(v.length>1){G(1,R("error-multi")),P();return}M(v[0])}}))}function M(e){if(!e.name.match(/\.py$/i)){G(1,R("error-type")),P();return}if(e.size>256*1024){G(1,R("error-size")),P();return}x.file=e,G(2,D(e.name)),C(e)}function D(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${h(e)}</div>
      </div>`}async function C(e){try{let p=new FormData;p.append("file",e);let m=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:p}),b=await m.json().catch(()=>({}));if(!m.ok&&!b.validation){window.showToast?.(b.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:m.status}),!1),G(1,R()),P();return}x.manifest=b.manifest||{},x.validation=b.validation||{},x.filename=b.filename||e.name,w(x)}catch(p){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:p.message||""}),!1),G(1,R()),P()}}function w(e){let p=e.manifest||{},m=e.validation||{},b="";if(!m.syntax_ok)b=N(m.syntax_err,e);else if(Object.keys(p).length===0)b=T(e);else{let v=(m.deps||[]).some(o=>o.status==="missing");b=K(p,m,e,v)}G(2,`<div class="admin-pu-step2">${b}</div>`),_()}function N(e,p){let m=e&&e.line?e.line:"?",b=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${m}</span>
        </div>
        <pre class="admin-pu-syntax-body">${h(`>>> ${p.filename}
${b}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function T(e){return`
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
      </footer>`}function L(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function I(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let p=L(e),m=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${p}">${e} \xB7 ${m}</span>`}function K(e,p,m,b){let v=e.name||m.filename.replace(/\.(py|js)$/i,""),o=e.version?`v${h(e.version)}`:"\u2014",s=e.author?`@${h(e.author.replace(/^@/,""))}`:"\u2014",u=e.description||ServerI18n.t("pluginsUploadNoDescription"),t="PY",n="is-warn",a=Array.isArray(e.permissions)?e.permissions:[],i=Object.keys(f).map(j=>{let J=a.includes(j);return`
        <div class="admin-pu-perm-row ${J?"is-req":"is-not"}">
          <span class="dot">${J?"\u25CF":"\u25CB"}</span>
          <span class="key">${h(j)}</span>
          <span class="label">${h(ServerI18n.t(f[j]))}</span>
        </div>`}).join(""),y=p.deps||[],k=y.map(j=>{let J=j.status==="ok"?"is-ok":j.status==="warn"?"is-warn":"is-err",E=j.status==="ok"?"\u2713":j.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${J}">
          <span class="dot">${E}</span>
          <span class="name">${h(j.name)}</span>
          <span class="note">${h(j.note||"")}</span>
        </div>`}).join(""),S=p.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${h(v)}</span>`})}
      </div>`:"",B=y.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${S}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${h(v)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${o}</span>
          <span class="author">${s}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${t}</span>
        </div>
        <div class="admin-pu-manifest-desc">${h(u)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${I(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${i}</div>
        </section>
        ${B}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${b?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${b?"disabled":""} data-pu-confirm>${b?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function _(){let e=c.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{x.file=null,x.manifest=null,x.validation=null,G(1,R()),P()});let p=c.querySelector("[data-pu-confirm]");p&&p.addEventListener("click",()=>g());let m=c.querySelector("[data-pu-no-manifest-ack]");m&&p&&m.addEventListener("change",()=>{p.disabled=!m.checked})}function g(){let e=x.manifest||{},p=e.name||(x.filename||"").replace(/\.(py|js)$/i,""),m=e.version?`v${h(e.version)}`:"\u2014",b=Array.isArray(e.permissions)?e.permissions:[],v=b.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:b.map(u=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${h(u)}</span></div>`).join("");G(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${h(p)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${m}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${v}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${h(x.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let o=c.querySelector("[data-pu-install]");o&&o.addEventListener("click",d);let s=c.querySelector("[data-pu-back]");s&&s.addEventListener("click",()=>w(x))}async function d(){G(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",x.file);let p=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),m=await p.json().catch(()=>({}));if(!p.ok){window.showToast?.(m.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:p.status}),!1),w(x);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:m.name||x.filename}),!0),r();let b=document.getElementById("pluginsReloadBtn");b&&b.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),w(x)}}function l(){F(),x={step:1,file:null,manifest:null,validation:null,filename:null},G(1,R()),P(),c.hidden=!1,document.body.classList.add("admin-pu-open")}function r(){c&&(c.hidden=!0,document.body.classList.remove("admin-pu-open"),x=null)}window.AdminPluginUpload={open:l,close:r},document.addEventListener("click",e=>{let p=e.target.closest("#pluginsUploadBtn");p&&!p.disabled&&(e.preventDefault(),l())})})()});var jt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-webhooks",c=12e3,x=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function F(v,o){return v?v.length>o?v.slice(0,o)+"\u2026":v:""}function A(v){if(!v)return"\u2014";try{let o=new Date(v),s=Math.max(0,(Date.now()-o.getTime())/1e3);return s<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(s)}):s<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(s/60)}):s<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(s/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(s/86400)})}catch{return"\u2014"}}function G(v){if(!v)return"\u2014";try{return new URL(v).hostname}catch{return F(v,30)}}function R(v){return v==="active"?"is-success":v==="degraded"?"is-warn":"is-muted"}let P={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:x,eventCatalogLoaded:!1};function M(){let v=document.getElementById("settings-grid");!v||document.getElementById(f)||(v.insertAdjacentHTML("beforeend",`
      <details id="${f}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
    `),D())}function D(){let v=document.getElementById(f);if(!v)return;let o=document.getElementById("wh-register-form");o&&o.addEventListener("submit",async s=>{s.preventDefault();let u=document.getElementById("wh-url").value.trim();if(!u)return;let t=Array.from(o.querySelectorAll('input[name="wh-event"]:checked')).map(y=>y.value);if(t.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,a=document.getElementById("wh-secret").value.trim(),i={url:u,events:t,format:n};a&&(i.secret=a);try{let y=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),k=await y.json();y.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),o.reset(),I(),o.hidden=!0,await C()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(y){console.error("Webhook register error:",y),showToast(ServerI18n.t("registrationFailed"),!1)}}),v.addEventListener("click",s=>{if(s.target.closest("[data-wh-action='show-add']")){o&&(o.hidden=!1);return}if(s.target.closest("[data-wh-action='hide-add']")){o&&(o.hidden=!0);return}let n=s.target.closest("[data-wh-log-filter]");if(n){P.deliveryFilter=n.dataset.whLogFilter,v.querySelectorAll("[data-wh-log-filter]").forEach(J=>{J.classList.toggle("is-active",J.dataset.whLogFilter===P.deliveryFilter)}),l();return}let a=s.target.closest("[data-wh-action='test']");if(a){s.stopPropagation(),p(a.dataset.whHookId);return}let i=s.target.closest("[data-wh-action='settings']");if(i){s.stopPropagation(),r(i.dataset.whHookId);return}if(s.target.closest("[data-wh-action='close-detail']")){P.selectedHookId=null,e(),g();return}let k=s.target.closest("[data-wh-action='detail-ping']");if(k){p(k.dataset.whHookId);return}let S=s.target.closest("[data-wh-action='detail-toggle']");if(S){m(S.dataset.whHookId,S.dataset.whNextEnabled==="1");return}let B=s.target.closest("[data-wh-action='detail-delete']");if(B){b(B.dataset.whHookId);return}let j=s.target.closest("[data-wh-hook-row]");if(j&&!s.target.closest("button")){r(j.dataset.whHookId);return}}),P.stopPoll||(P.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(f)},intervalMs:c,tick:C}))}async function C(){await T(),await Promise.all([w(),N()]),K(),g(),l(),e()}async function w(){try{let o=await(await csrfFetch("/admin/webhooks/list")).json();P.hooks=Array.isArray(o.webhooks)?o.webhooks:[]}catch{P.hooks=[]}}async function N(){try{let v=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!v.ok)return;let o=await v.json();P.deliveries=Array.isArray(o.deliveries)?o.deliveries:[],P.stats=o.stats||null}catch{}}async function T(){if(!P.eventCatalogLoaded)try{let v=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(v.ok){let o=await v.json(),s=Array.isArray(o.events)?o.events:[];s.length&&(P.eventCatalog=s)}}catch{}finally{P.eventCatalogLoaded=!0,I()}}function L(v){let o=v&&v.slug?String(v.slug):"";if(v&&v.labelKey){let a=ServerI18n.t(v.labelKey);return{slug:o,label:a?a+" \xB7 "+o:o,title:a}}let s=v&&v.zh?String(v.zh):"",u=v&&v.en?String(v.en):"",t=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(v&&v[t]?String(v[t]):"")||u||s;return{slug:o,label:n?n+" \xB7 "+o:o,title:s&&u?s+" \xB7 "+u:s||u}}function I(){let v=document.querySelector("[data-wh-register-events]");v&&(v.innerHTML=P.eventCatalog.map(function(o){let s=L(o);if(!s.slug)return"";let u=s.slug==="on_danmu"?" checked":"";return'<label title="'+h(s.title)+'"><input type="checkbox" name="wh-event" value="'+h(s.slug)+'"'+u+" /> "+h(s.label)+"</label>"}).join(""))}function K(){let v=document.querySelector("[data-wh-stats]");if(!v)return;let o=P.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};v.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${o.endpoints_enabled} / ${o.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${o.deliveries_24h.toLocaleString?o.deliveries_24h.toLocaleString():o.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${o.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${o.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:_()})}</div>
        <div class="v" style="color:${o.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${o.dropped_24h}</div>
      </div>`}function _(){return P.hooks.length&&P.hooks[0].retry_count||3}function g(){let v=document.getElementById("wh-list"),o=document.querySelector("[data-wh-count]");if(v){if(o&&(o.textContent=String(P.hooks.length)),P.hooks.length===0){v.innerHTML="";let s=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let u=document.getElementById("wh-register-form");u&&(u.hidden=!1),document.getElementById("wh-url")?.focus()}});s.dataset.emptyKind="webhooks",v.appendChild(s);return}v.innerHTML=P.hooks.map(d).join("")}}function d(v){let o=h(v.id||""),s=Number(v.success_count)||0,u=Number(v.fail_count)||0,t=s+u,n=t>0?Math.round(s/t*1e3)/10:100,a=v.enabled!==!1,i=Number(v.last_status)||null,y=a?i&&i>=400||v.last_error?"degraded":"active":"paused",k=y==="active"?"var(--hud-lime)":y==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",S=y==="active"?"ACTIVE":y==="degraded"?"DEGRADED":"PAUSED",B=P.selectedHookId===v.id?" is-selected":"",j=R(y),J=(v.events||[]).map(function(O){return'<span class="admin-ui-pill admin-wh-evt-chip">'+h(O)+"</span>"}).join(""),E=v.last_error?'<div class="admin-wh-card-warn">\u26A0 '+h(F(v.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${B}" data-wh-hook-row data-wh-hook-id="${o}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${a?"0 0 6px "+k:"none"}"></span>
          <span class="name">${h(G(v.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${j}">${S}</span>
          <span class="last">last \xB7 ${h(A(v.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${h(v.url)}</div>
        <div class="admin-wh-card-events">${J}</div>
        ${E}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${s.toLocaleString()}</span>
          <span class="counter ${u>0?"fail":"fail-zero"}">\u2717 ${u}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${o}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${o}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let v=document.getElementById("wh-log-list");if(!v)return;let o=P.deliveries.filter(function(s){return P.deliveryFilter==="all"?!0:P.deliveryFilter==="failed"?!s.ok:P.deliveryFilter==="2xx"?s.code&&s.code>=200&&s.code<300:P.deliveryFilter==="5xx"?s.code&&s.code>=500:!0});if(o.length===0){v.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}v.innerHTML=o.map(function(s){let u=s.ts?new Date(s.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",t=s.code?String(s.code):"\u2014",n=s.ok?"var(--hud-lime)":"var(--hud-crimson)",a=s.duration_ms?s.duration_ms>=1e3?(s.duration_ms/1e3).toFixed(1)+"s":s.duration_ms+"ms":"\u2014",i=s.ok?"var(--color-text-strong)":"var(--hud-amber)",y=h(G(s.hook_url||"")),k=(s.retries||0)===0?"\u2014":"\xD7"+s.retries,S=(s.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${s.dropped?" is-dropped":""}">
          <span class="time">${h(u)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${t}</span>
          <span class="dur" style="color:${i}">${h(a)}</span>
          <span class="ep">${y}</span>
          <span class="evt">${h(s.event||"")}</span>
          <span class="retry" style="color:${S}">${k}</span>
        </div>`}).join("")}function r(v){P.selectedHookId=v,g(),e()}function e(){let v=document.querySelector("[data-wh-detail]");if(!v)return;let o=P.hooks.find(function(y){return y.id===P.selectedHookId});if(!o){v.hidden=!0,v.innerHTML="";return}v.hidden=!1;let s=o.enabled!==!1,u=Number(o.last_status)||null,t=s?u&&u>=400||o.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(o.events||[]),a=P.eventCatalog.map(function(y){let k=L(y),S=n.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(S?"is-active is-on":"")+'" title="'+h(k.title)+'"><span aria-hidden="true">'+(S?"\u2713":"\u25CB")+"</span><span>"+h(k.label)+"</span></label>"}).join(""),i={event:o.events&&o.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:o.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};v.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+t+";box-shadow:0 0 6px "+t+'"></span><span class="name">'+h(G(o.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+a+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(o.retry_count!=null?o.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(o.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+h(JSON.stringify(i,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+h(o.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+h(o.id)+'" data-wh-next-enabled="'+(s?"0":"1")+'">'+(s?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+h(o.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function p(v){if(v)try{let o=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v})}),s=await o.json();o.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(s.error||ServerI18n.t("testFailed"),!1),setTimeout(C,1500)}catch(o){console.error("Webhook test error:",o),showToast(ServerI18n.t("testFailed"),!1)}}async function m(v,o){if(v)try{let s=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v,enabled:o})}),u=await s.json();if(!s.ok){showToast(u.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let t=P.hooks.find(function(n){return n.id===v});t&&(t.enabled=u.enabled),showToast(u.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),K(),g(),e()}catch(s){console.error("Webhook toggle error:",s),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function b(v){if(!(!v||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let s=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v})}),u=await s.json();s.ok?(showToast(ServerI18n.t("webhookDeleted")),P.selectedHookId===v&&(P.selectedHookId=null),C()):showToast(u.error||ServerI18n.t("deleteFailed"),!1)}catch(s){console.error("Webhook delete error:",s),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Ut=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-sounds",c=null,x=[],F=[];async function A(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let r=await l.json();x=r.sounds||[],F=r.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",x.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),x=[],F=[]}}async function G(){return A()}async function R(l,r){let e=new FormData;e.append("file",l),e.append("name",r);let p=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),m=await p.json();if(!p.ok)throw new Error(m.error||"Upload failed");return m}async function P(l){let r=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Delete failed");return e}async function M(l){let r=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to add rule");return e}async function D(l){let r=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to delete rule");return e}function C(){let l=document.getElementById("soundsList");if(l){if(x.length===0){l.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});r.dataset.emptyKind="sounds",r.style.gridColumn="1 / -1",l.appendChild(r);return}l.innerHTML=x.map(function(p){var m=h(p.name),b=Math.round((p.volume!=null?p.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+h(p.name)+'"><div class="name" title="'+m+'">'+m+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+h(p.name)+'" min="0" max="100" step="1" value="'+b+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+h(p.name)+'" style="min-width:32px;text-align:right">'+b+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+h(p.name)+'">'+h(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+h(p.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(p){p.addEventListener("click",function(){var m=p.dataset.name,b=x.find(function(v){return v.name===m});b&&(c&&(c.pause(),c=null),c=new Audio(b.url),c.volume=.5,c.play().catch(function(v){console.warn("Audio preview failed:",v)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(p){p.addEventListener("click",async function(){var m=p.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",m),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await P(m),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",m),!0),await A(),C(),N()}catch(v){window.showToast(v.message,!1)}})});var e={};l.querySelectorAll(".sound-volume-slider").forEach(function(p){var m=p.dataset.name,b=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(m)+'"]');p.addEventListener("input",function(){b&&(b.textContent=p.value+"%"),clearTimeout(e[m]),e[m]=setTimeout(function(){w(m,Number(p.value)/100)},300)}),p.addEventListener("change",function(){clearTimeout(e[m]),w(m,Number(p.value)/100)})})}}async function w(l,r){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:r})}),p=await e.json();if(!e.ok){window.showToast(p.error||"Volume update failed",!1);return}var m=x.find(function(b){return b.name===l});m&&(m.volume=r),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(r*100)}),!0)}catch(b){console.warn("[admin-sounds] volume save failed:",b),window.showToast("Network error",!1)}}function N(){let l=document.getElementById("ruleSoundName");if(!l)return;let r=l.value;if(l.innerHTML="",x.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,l.appendChild(e);return}x.forEach(e=>{let p=document.createElement("option");p.value=e.name,p.textContent=e.name,l.appendChild(p)}),r&&[...l.options].some(e=>e.value===r)&&(l.value=r)}function T(){let l=document.getElementById("rulesList");if(l){if(F.length===0){l.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});r.dataset.emptyKind="sound-rules",l.appendChild(r);return}l.innerHTML=F.map(function(e){var p=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),m=Math.round((e.volume!=null?e.volume:1)*100),b=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",m).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+h(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+h(p)+'</div><div class="admin-sounds-rule-detail">'+h(b)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+h(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await D(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await G(),T()}catch(p){window.showToast(p.message,!1)}})})}}function L(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let r=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),p=r.files[0];if(!p){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let m=e.value.trim();if(!m){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await R(p,m),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",m),!0),r.value="",e.value="",await A(),C(),N()}catch(b){window.showToast(b.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function I(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let r=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),p=document.getElementById("ruleSoundName").value,m=document.getElementById("ruleVolume"),b=document.getElementById("ruleCooldown");if(r!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!p){window.showToast(ServerI18n.t("selectSound"),!1);return}let v=parseInt(m.value,10)/100,o=parseInt(b.value,10)||0,s={trigger_type:r,trigger_value:r==="all"?"":e,sound_name:p,volume:Math.max(0,Math.min(1,v)),cooldown:Math.max(0,o)};l.disabled=!0;try{await M(s),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await G(),T()}catch(u){window.showToast(u.message,!1)}finally{l.disabled=!1}})}function K(){let l=document.getElementById("ruleTriggerType"),r=document.getElementById("ruleTriggerValue");if(!l||!r)return;function e(){l.value==="all"?(r.disabled=!0,r.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),r.value=""):l.value==="keyword"?(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",e),e()}function _(){let l=document.getElementById("ruleVolume"),r=document.getElementById("ruleVolumeLabel");!l||!r||l.addEventListener("input",()=>{r.textContent=l.value+"%"})}function g(){return`
      <div id="${f}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
                  <input type="text" id="soundNameInput" placeholder="${h(ServerI18n.t("soundNamePlaceholder"))}" maxlength="100" class="admin-ui-input" />
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
                    <option value="keyword">${h(ServerI18n.t("triggerTypeKeyword"))}</option>
                    <option value="effect">${h(ServerI18n.t("triggerTypeEffect"))}</option>
                    <option value="all">${h(ServerI18n.t("triggerTypeAll"))}</option>
                  </select>
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerValue")}</span>
                  <input type="text" id="ruleTriggerValue" placeholder="${h(ServerI18n.t("triggerValueKeywordPlaceholder"))}" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field admin-sounds-form-full">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlSound")}</span>
                  <select id="ruleSoundName" class="admin-ui-select">
                    <option value="" disabled>${h(ServerI18n.t("soundLoading"))}</option>
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
    `}async function d(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",g()),window.AdminSkeletons){let r=document.getElementById("soundsList");r&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([A(),G()]),C(),N(),T(),L(),I(),K(),_()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&!l&&(l=!0,d().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&(l=!0,d().finally(()=>{l=!1}))})})()});var Kt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f=/^[a-zA-Z0-9_]{1,32}$/,c=".png,.gif,.webp",x="sec-emojis",F=[];function A(){return`
      <div id="${x}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
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
              <input id="emojiFileInput" type="file" accept="${c}" />
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
    `}function G(_){let g=":"+_.name+":",d=Number(_.used)||0,l=d>0?ServerI18n.t("emojisUsedCount",{n:d}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(_.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(_.url)+'" alt="'+M(g)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+h(g)+'</div><div class="admin-em-v4__tile-meta">'+h(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(g)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(_.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function R(_){let g=document.querySelector("[data-em-quota-label]"),d=document.querySelector("[data-em-quota-fill]");if(!g||!d)return;let l=_.length,r=100;g.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:r}),d.style.width=Math.min(100,l/r*100)+"%"}function P(_){let g=document.querySelector("[data-em-preview-body]");if(!g)return;if(!_||_.length===0){g.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=_.slice(0,3).map(r=>`<span class="admin-em-v4__preview-pair"><code>:${h(r.name)}:</code> \u2192 <img src="${M(r.url)}" alt=":${M(r.name)}:" /></span>`);g.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function M(_){return h(_)}function D(_){var g=document.getElementById("emojiGrid"),d=document.getElementById("emojiCount");g&&(!_||_.length===0?(window.AdminEmpty?(g.innerHTML="",g.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):g.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("noEmojisUploaded"))+"</div>",d&&(d.textContent="0")):(g.innerHTML=_.map(G).join(""),d&&(d.textContent=String(_.length))),R(F),P(F))}function C(){var _=document.getElementById("emojiGrid");if(_)if(window.AdminSkeletons){_.innerHTML="";for(var g=0;g<8;g++){var d=document.createElement("div");d.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var r=document.createElement("div");r.className="admin-skel",r.style.width="100%",r.style.height="100%",l.appendChild(r),d.appendChild(l);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",d.appendChild(e),_.appendChild(d)}}else _.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadingEmojis"))+"</div>"}async function w(){try{var _=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!_.ok)throw new Error("HTTP "+_.status);var g=await _.json();F=g.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",F.length||""),N()}catch(l){console.error("[admin-emojis] fetch failed:",l);var d=document.getElementById("emojiGrid");d&&(d.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var _=document.getElementById("emojiSearchInput"),g=(_&&_.value||"").trim().toLowerCase(),d=g?F.filter(function(l){return(l.name||"").toLowerCase().includes(g)}):F;D(d)}async function T(){var _=document.getElementById("emojiNameInput"),g=document.getElementById("emojiFileInput"),d=document.getElementById("emojiUploadBtn");if(!(!_||!g||!d)){var l=_.value.trim(),r=g.files&&g.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),_.focus();return}if(!f.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),_.focus();return}if(!r){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=r.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}d.disabled=!0,d.textContent=ServerI18n.t("uploadingStatus");try{var p=new FormData;p.append("name",l),p.append("emojifile",r);var m=await csrfFetch("/admin/emojis/upload",{method:"POST",body:p}),b=await m.json();m.ok?(showToast(b.message||ServerI18n.t("emojiUploadFallback")),_.value="",g.value="",await w()):showToast(b.error||ServerI18n.t("uploadFailed"),!1)}catch(v){console.error("[admin-emojis] upload error:",v),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{d.disabled=!1,d.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function L(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",_),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var d=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_})}),l=await d.json();d.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await w()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-emojis] delete error:",r),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function I(_){try{await navigator.clipboard.writeText(_),showToast(ServerI18n.t("copiedLabel").replace("{label}",_))}catch{var g=document.createElement("textarea");g.value=_,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),showToast(ServerI18n.t("copiedLabel").replace("{label}",_))}}function K(){var _=document.getElementById("settings-grid");if(_){_.insertAdjacentHTML("beforeend",A());var g=document.getElementById("emojiUploadBtn");g&&g.addEventListener("click",T);var d=document.getElementById("emojiNameInput");d&&d.addEventListener("keydown",function(m){m.key==="Enter"&&(m.preventDefault(),T())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",N);var r=document.getElementById("emojiGrid");r&&r.addEventListener("click",function(m){var b=m.target.closest(".emoji-copy-btn");if(b){I(b.dataset.label);return}var v=m.target.closest(".emoji-delete-btn");v&&L(v.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),p=document.getElementById("emojiFileInput");e&&p&&(["dragenter","dragover"].forEach(function(m){e.addEventListener(m,function(b){b.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(m){e.addEventListener(m,function(b){b.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(m){var b=m.dataTransfer&&m.dataTransfer.files&&m.dataTransfer.files[0];if(b){var v=new DataTransfer;v.items.add(b),p.files=v.files;var o=document.getElementById("emojiNameInput");if(o&&!o.value){var s=b.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");o.value=s.slice(0,32),o.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),C(),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var _=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(x)&&K()});_.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(x)&&K()}})})()});var Wt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml,f="sec-stickers",c=["png","gif","webp"],x=".gif,.png,.webp",F="__all__",A=[],G=[],R=F;function P(l){return h(l)}function M(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=l?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${x}"
                class="admin-ui-input"
              />
            </label>
            <button id="stickerUploadBtn" type="button" class="admin-ui-action is-primary admin-sticker-action">${ServerI18n.t("stickersUploadBtn")}</button>
          </div>`:"";return`
      <div id="${f}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${l?`<div class="admin-ui-card">${r}</div>`:""}

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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):h(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(l){return l===F?A.length:A.filter(function(r){return r.pack_id===l}).length}function C(){var l=document.getElementById("stickerPackList");if(l){var r='<button type="button" class="admin-stickers-pack'+(R===F?" is-active":"")+'" data-pack="'+F+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(F)+"</span></button>";G.forEach(function(e){var p=e.enabled?"is-success":"is-muted",m="admin-stickers-pack"+(e.id===R?" is-active":""),b=e.id==="default",v=b?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+P(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+P(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+P(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+P(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+P(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";r+='<div class="'+m+'" data-pack="'+P(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+P(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+p+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+h(e.name)+'</span><span class="admin-stickers-pack-count">'+D(e.id)+"</span></button>"+v+"</div>"}),l.innerHTML=r}}function w(l){var r=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+P(l.url)+'" alt="'+P(r)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+P(r)+'">'+h(r)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+P(r)+'" title="'+P(ServerI18n.t("copyToClipboard"))+'">'+h(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+P(l.name)+'" title="'+P(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var l=document.getElementById("stickerGrid"),r=document.getElementById("stickerCount");if(l){var e=document.getElementById("stickerSearchInput"),p=(e&&e.value||"").trim().toLowerCase(),m=A.filter(function(v){return!(R!==F&&v.pack_id!==R||p&&!(v.name||"").toLowerCase().includes(p))});if(m.length===0){l.innerHTML="";var b=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});b.dataset.emptyKind="stickers",b.style.gridColumn="1 / -1",l.appendChild(b),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=m.map(w).join(""),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:m.length}))}}async function T(){var l=document.getElementById("stickerGrid");if(l)try{var[r,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!r.ok)throw new Error("HTTP "+r.status);A=(await r.json()).stickers||[],G=e.ok?(await e.json()).packs||[]:[],R!==F&&!G.some(function(p){return p.id===R})&&(R=F),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",G.length?ServerI18n.t("tabCountPacks",{n:G.length}):""),C(),N()}catch(p){console.error("[admin-stickers] fetch failed:",p),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function L(l,r){if(l==="select"){R=r,C(),N();return}if(l==="rename"){var e=G.find(function(y){return y.id===r}),p=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!p)return;try{var m=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p})}),b=await m.json();m.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await T()):window.showToast(b.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var v=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/toggle",{method:"POST"});v.ok&&await T()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r),{method:"DELETE"}),s=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),R===r&&(R=F),await T()):window.showToast(s.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var u=G.slice().sort(function(y,k){return(y.order||0)-(k.order||0)}),t=u.findIndex(function(y){return y.id===r});if(t<0)return;var n=l==="up"?t-1:t+1;if(n<0||n>=u.length)return;var a=u[t],i=u[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:a.order||0})})]),await T()}catch{}}}async function I(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var r=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),R=e.pack&&e.pack.id?e.pack.id:R,await T()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function K(){var l=document.getElementById("stickerFileInput"),r=document.getElementById("stickerUploadBtn");if(!(!l||!r)){var e=l.files&&l.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var p=e.name.split(".").pop().toLowerCase();if(c.indexOf(p)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}r.disabled=!0;var m=r.textContent;r.textContent=ServerI18n.t("uploadingStatus");try{var b=new FormData;b.append("file",e),R&&R!==F&&b.append("pack_id",R);var v=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:b}),o=await v.json();v.ok?(window.showToast(o.message||ServerI18n.t("stickerUploadFallback")),l.value="",await T()):window.showToast(o.error||ServerI18n.t("uploadFailed"),!1)}catch(s){console.error("[admin-stickers] upload error:",s),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{r.disabled=!1,r.textContent=m}}}async function _(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),p=await e.json();e.ok?(window.showToast(p.message||ServerI18n.t("stickerDeleteFallback")),await T()):window.showToast(p.error||ServerI18n.t("deleteFailed"),!1)}catch(m){console.error("[admin-stickers] delete error:",m),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function g(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var r=document.createElement("textarea");r.value=l,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function d(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",M());var r=document.getElementById("stickerUploadBtn");r&&r.addEventListener("click",K);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",I);var p=document.getElementById("stickerSearchInput");p&&p.addEventListener("input",N);var m=document.getElementById("stickerPackList");m&&m.addEventListener("click",function(v){var o=v.target.closest("[data-pack-action]");if(!o){var s=v.target.closest("[data-pack]");s&&L("select",s.dataset.pack);return}var u=o.dataset.packAction,t=o.dataset.packId;u==="select"&&!t&&(t=o.closest("[data-pack]")&&o.closest("[data-pack]").dataset.pack),L(u,t)});var b=document.getElementById("stickerGrid");b&&b.addEventListener("click",function(v){var o=v.target.closest(".sticker-copy-btn");if(o){g(o.dataset.label);return}var s=v.target.closest(".sticker-delete-btn");s&&_(s.dataset.name)}),T()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&d()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&d()}})})()});var Gt=ye(()=>{(function(){"use strict";let h="sec-extensions-overview",f=window.AdminUtils.escapeHtml,c=15e3,x=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],F={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},A=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function G(g){let d=g&&!g.stale?g.report:null;if(!d&&g&&g.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!d)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(d.state==="error"){let l=A.includes(d.error)?d.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:d.sent||0,held:d.held||0,blocked:d.blocked||0,skipped:d.late_skipped||0})}}function R(){return`
      <div id="${h}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${x.map(P).join("")}
        </div>
      </div>`}function P(g){let d=g.status==="ready",l="is-cold",r=d?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,e=d&&g.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${g.install.steps.map(m=>{if(m.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${f(ServerI18n.t(m.labelKey))} \u2193</a></li>`;let b=m.showOrigin?` <code class="admin-ext-step-code">${f(window.location.origin)}</code>`:"";return`<li>${f(ServerI18n.t(m.labelKey))}${b}</li>`}).join("")}
          </ol>
        </div>`:"",p=g.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${g.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${l}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${g.color}">${g.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${f(g.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${f(g.version)}</span></div>
          </div>
          ${r}
        </div>
        <p class="admin-ext-desc">${f(ServerI18n.t(g.descKey))}</p>
        ${g.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${f(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${e}
        ${p}
      </article>`}async function M(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;F.fireToken=await g.json(),L()}catch{}}async function D(){try{let g=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!g.ok)return;let d=await g.json();F.sources=Array.isArray(d.sources)?d.sources:[],I()}catch{}}async function C(){try{let g=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!g.ok)return;F.slidoStatus=await g.json(),K()}catch{}}function w(){D(),C()}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);let l=await d.json();F.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},F.plainToken=l.token,L(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(d){console.warn("[ext] regen failed:",d),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function T(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);F.fireToken=await d.json(),F.plainToken=null,L(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(d){console.warn("[ext] revoke failed:",d),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function L(){let g=document.querySelector("[data-fire-token-display]"),d=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),r=document.querySelector('[data-fire-token-action="revoke"]');if(!g)return;let e=F.fireToken;F.plainToken?(g.textContent=F.plainToken,g.classList.add("is-plain")):e&&e.has_token?(g.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:e.prefix||""}),g.classList.remove("is-plain")):(g.textContent=ServerI18n.t("extTokenNotSetHint"),g.classList.remove("is-plain")),d&&(d.disabled=!F.plainToken),l&&(l.textContent=e&&e.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),r&&(r.disabled=!(e&&e.has_token))}function I(){let g=new Set(F.sources.map(d=>d.source));document.querySelectorAll(".admin-ext-card").forEach(d=>{let l=x.find(p=>p.id===d.dataset.ext);if(!l)return;let r=d.querySelector("[data-ext-dot]");if(!r)return;let e=l.sourceMatch&&g.has(l.sourceMatch);r.classList.toggle("is-live",!!e),r.classList.toggle("is-cold",!e)})}function K(){let g=document.querySelector("[data-slido-status]");if(!g)return;let d=G(F.slidoStatus);g.textContent=d.text,g.classList.toggle("is-live",d.tone==="is-live"),g.classList.toggle("is-error",d.tone==="is-error");let l=F.slidoStatus&&F.slidoStatus.extension,r=g.closest(".admin-ext-card"),e=r&&r.querySelector("[data-ext-download-step]"),p=r&&r.querySelector("[data-ext-download]"),m=r&&r.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(p&&p.setAttribute("href",l.download_url),e&&(e.hidden=!1),m&&(m.textContent="v"+l.version)):e&&(e.hidden=!0)}function _(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",R());let d=document.getElementById(h);d&&d.addEventListener("click",l=>{let r=l.target.closest("[data-fire-token-action]");if(!r)return;let e=r.dataset.fireTokenAction;e==="regen"?N():e==="revoke"?T():e==="copy"&&F.plainToken&&window.AdminUtils.copyText(F.plainToken,ServerI18n.t("firetokenToastCopied"))}),M(),F.stopPoll||(F.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:c,tick:w}))}window.AdminExtensions={slidoStatusView:G},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&_()})})()});var Vt=ye(()=>{(function(){"use strict";let h="sec-firetoken-overview",f=window.AdminUtils.escapeHtml,c=15e3,x={token:null,plainToken:null,usage24h:[],ceilingPerMin:0,ips:[],audit:[],pollTimer:0};function F(){return`
      <div id="${h}" class="admin-ft-page hud-page-stack lg:col-span-2">
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
                  <div class="meta">${ServerI18n.t("firetokenCardMeta")}<span data-ft-ceiling></span></div>
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
    `}async function A(){await Promise.all([G(),R(),P()])}async function G(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;x.token=await g.json(),N()}catch{}}async function R(){try{let g=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!g.ok)return;let d=await g.json();x.usage24h=Array.isArray(d.usage_24h)?d.usage_24h:[],x.ceilingPerMin=Number(d.ceiling_per_min)||0;let l=document.querySelector("[data-ft-ceiling]");l&&(l.textContent=x.ceilingPerMin>0?" \xB7 "+ServerI18n.t("firetokenCeilingPerMin",{n:x.ceilingPerMin}):""),x.ips=Array.isArray(d.ips)?d.ips:[],L(),I(),T()}catch{}}async function P(){try{let g=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!g.ok)return;let d=await g.json();x.audit=Array.isArray(d.events)?d.events:[],K()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);let l=await d.json();x.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},x.plainToken=l.token,N(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),P()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let d=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!d.ok)throw new Error("HTTP "+d.status);x.token=await d.json(),x.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),P()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function C(g){if(!g)return"\u2014";let d=Date.now()/1e3-g;return d<60?ServerI18n.t("firetokenJustNow"):d<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(d/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(d/86400)})}function w(g){if(!g)return"\u2014";try{return new Date(g*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let g=x.token,d=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),r=document.querySelector('[data-ft-action="copy"]'),e=document.querySelector('[data-ft-action="regen"]'),p=document.querySelector('[data-ft-action="revoke"]'),m=document.querySelector('[data-ft-stat="created"]'),b=document.querySelector('[data-ft-stat="rotated"]'),v=document.getElementById("adminFtCurl");if(d&&(x.plainToken?(d.textContent=x.plainToken,d.classList.add("is-plain")):g&&g.has_token?(d.textContent=(g.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",d.classList.remove("is-plain")):(d.textContent=ServerI18n.t("firetokenNotSetHint"),d.classList.remove("is-plain")),l&&(g&&g.enabled&&g.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):g&&g.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),r&&(r.disabled=!x.plainToken),p&&(p.disabled=!(g&&g.has_token)),e&&(e.textContent=g&&g.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),m&&(m.textContent=g?w(g.created_at):"\u2014"),b&&(b.textContent=g?C(g.rotated_at):"\u2014"),v)){let o=x.plainToken?x.plainToken:g&&g.prefix?g.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";v.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${o}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function T(){let g=x.usage24h.map(m=>Number(m)||0),d=g.reduce((m,b)=>m+b,0),l=g.length?Math.max(...g):0,r=document.querySelector('[data-ft-stat="hits"]'),e=document.querySelector('[data-ft-stat="peak"]'),p=document.querySelector("[data-ft-peak-meta]");r&&(r.textContent=d.toLocaleString()),e&&(e.textContent=l.toLocaleString()),p&&(p.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function L(){let g=document.getElementById("adminFtChart24h");if(!g)return;let d=x.usage24h.map(p=>Number(p)||0);if(!d.length){g.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...d),r=(x.ceilingPerMin||0)*60,e=l>0?Math.min(100,r/Math.max(l,r)*100):100;g.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${d.map((p,m)=>{let b=l>0?Math.max(2,p/l*100):2;return`<div class="bar ${l>0&&p===l?"is-peak":""}" style="height:${b}%" title="${m.toString().padStart(2,"0")}:00 \u2014 ${p}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(p=>`<span>${String(p).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function I(){let g=document.getElementById("adminFtIps"),d=document.querySelector("[data-ft-ip-count]");if(!g)return;let l=x.ips||[];if(d&&(d.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let r=l[0]?.ip;g.innerHTML=l.map((e,p)=>{let m=p===0,b=e.source==="web"&&(e.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${m?"is-top":""}">
          <span class="ip">${f(e.ip||"?")}</span>
          ${m?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${b?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${f(e.source||"\u2014")}</span>
          <span class="cnt">${e.count||0} hits</span>
          <span class="when">${C(e.last_seen)}</span>
        </div>`}).join("")}function K(){let g=document.getElementById("adminFtAudit");if(!g)return;let d=x.audit||[];if(!d.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},r={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};g.innerHTML=d.map(e=>{let p=r[e.kind]||"is-info",m=l[e.kind]||e.kind,b=e.meta||{},v=b.prefix?` \xB7 prefix=${f(b.prefix)}`:b.enabled!=null?` \xB7 enabled=${b.enabled}`:"";return`
        <div class="admin-ft-audit-row ${p}">
          <span class="ts">${w(e.ts)}</span>
          <span class="kind">${f(m)}</span>
          <span class="detail">${v}</span>
        </div>`}).join("")}function _(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",F());let d=document.getElementById(h);d&&d.addEventListener("click",l=>{let r=l.target.closest("[data-ft-action]");if(!r)return;let e=r.dataset.ftAction;e==="regen"?M():e==="revoke"?D():e==="copy"&&x.plainToken&&window.AdminUtils.copyText(x.plainToken,ServerI18n.t("firetokenToastCopied"))}),x.stopPoll||(x.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(h),intervalMs:c,tick:A}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&_()})})()});var zt=ye(()=>{(function(){"use strict";let h="sec-about-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(_){return String(_).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},c="Danmu Fire",x="https://github.com/guan4tou2/danmu-desktop",F=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],A=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],G="danmu.about.lastUpdateCheck",R={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function P(){return`
      <div id="${h}" class="admin-about-page hud-page-stack lg:col-span-2">
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
                <div class="admin-about-version-name">${c}</div>
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${f(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${x}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${F.slice(0,4).map(_=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${f(_.v)}</span>
                  ${_.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${f(_.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${_.notes.slice(0,3).map(g=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${f(g.t)}">${f(g.t.toUpperCase())}</span>
                      <span class="msg">${f(g.l)}</span>
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
              ${A.slice(0,6).map(_=>`
                <div class="admin-about-oss-row">
                  <span class="n">${f(_.n)}</span>
                  <span class="v">${f(_.v)}</span>
                  <span class="l">${f(_.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M(_){if(!_||_<0)return"\u2014";let g=Math.floor(_/86400),d=Math.floor(_%86400/3600),l=Math.floor(_%3600/60);return g>0?`${g}d ${d}h`:d>0?`${d}h ${l}m`:`${l}m`}function D(){let _=document.querySelector("[data-about-tag]"),g=document.querySelector("[data-about-build]"),d=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),r=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),p=document.querySelector("[data-about-ws-path]");if(_&&(_.textContent=`v${R.appVersion}`),g){let m=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";g.textContent=`BUILD \xB7 ${m} \xB7 stable channel`,e&&(e.textContent=m)}if(d){let m=R.serverStartedAt?R.serverTime-R.serverStartedAt:0;d.textContent=M(m)}if(l&&(R.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):R.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:R.latestVersion||""}):l.textContent="\u2014",l.style.color=R.isLatest===!0?"var(--hud-lime)":R.isLatest===!1?"var(--hud-amber)":""),r&&(r.textContent=R.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:C(R.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),p){let m=window.DANMU_CONFIG||{};p.textContent=m.wsPath||"/ws"}}function C(_){let g=Number(_)||0;if(!g)return"\u2014";let d=String(g).length>12?g:g*1e3,l=(Date.now()-d)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function w(_,g){let d=p=>String(p||"").replace(/^v/i,"").split("-")[0].split(".").map(function(m){return parseInt(m,10)||0}),l=d(_),r=d(g),e=Math.max(l.length,r.length);for(let p=0;p<e;p++){let m=l[p]||0,b=r[p]||0;if(m>b)return!0;if(m<b)return!1}return!1}async function N({silent:_}={}){_||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let g=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!g.ok)throw new Error("HTTP "+g.status);let l=((await g.json()).tag_name||"").replace(/^v/i,"");R.latestVersion=l,R.lastCheckedAt=Date.now(),R.isLatest=!w(l,R.appVersion);try{localStorage.setItem(G,JSON.stringify({ts:R.lastCheckedAt,latest:l,isLatest:R.isLatest}))}catch{}D(),_||window.showToast&&window.showToast(R.isLatest?ServerI18n.t("aboutToastLatest",{v:R.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(g){_||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:g.message||""}),!1)}}function T(){try{let _=localStorage.getItem(G);if(!_)return;let g=JSON.parse(_);R.latestVersion=g.latest,R.lastCheckedAt=Number(g.ts)||0,R.isLatest=!!g.isLatest}catch{}}async function L(){try{let _=await fetch("/admin/metrics",{credentials:"same-origin"});if(!_.ok)return;let g=await _.json();R.serverStartedAt=Number(g.server_started_at)||0,R.serverTime=Number(g.server_time)||Date.now()/1e3,D()}catch{}}function I(){let _=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",g=R.serverStartedAt?R.serverTime-R.serverStartedAt:0,d=(navigator.userAgent||"").slice(0,200),l=[`${c} v${R.appVersion}`,`Channel: ${_}`,`Uptime: ${M(g)}`,`User-Agent: ${d}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function K(){let _=document.getElementById("settings-grid");if(!_||document.getElementById(h))return;_.insertAdjacentHTML("beforeend",P()),R.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",T(),D();let g=document.getElementById(h);g&&g.addEventListener("click",function(d){let l=d.target.closest("[data-about-action]");if(!l)return;let r=l.dataset.aboutAction;r==="copy"?I():r==="check-update"?N({silent:!1}):r==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():r==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),L(),setInterval(L,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&K()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&K()})})()});var Jt=ye(()=>{(function(){"use strict";let h="admin-setup-wizard-root",f="danmu.setupWizard.completed",c=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},x=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],F=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function A(o){return o?o.label?o.label:o.labelKey?ServerI18n.t(o.labelKey):o.name||o.id||"\u2014":"\u2014"}function G(o){return o?o.descriptionKey?ServerI18n.t(o.descriptionKey):o.description||"":""}let R={open:!1,step:0,themes:F.slice(),activeTheme:F[0].name,selectedTheme:F[0].name,publicUrl:"",publicUrlWarning:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function P(){R.publicUrl||(R.publicUrl=window.location.origin+"/"),fetch("/admin/qr/public",{credentials:"same-origin"}).then(o=>o.ok?o.json():null).then(o=>{if(!o||!o.url)return;let s=o.url+"/",u="";o.source==="unavailable"&&(u=o.blocked_host?ServerI18n.t("joinUrlNotTrusted",{host:o.blocked_host}):ServerI18n.t("joinUrlLocalOnly")),!(s===R.publicUrl&&u===R.publicUrlWarning)&&(R.publicUrl=s,R.publicUrlWarning=u,R.open&&N())}).catch(()=>{})}function M(){let o=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";o==="setup"&&!R.open?D():o!=="setup"&&R.open&&C({silent:!0})}function D(){R.open=!0,R.step=0,P(),document.body.dataset.setupWizardOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",w()),l()),e(),L(),N()}function C(o){let s=o&&o.silent;R.open=!1,document.body.dataset.setupWizardOpen="";let u=document.getElementById(h);if(u&&u.remove(),!s&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function w(){return`
      <div id="${h}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
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
            ${x.map(function(o,s){return`
                <div class="admin-setup-step" data-step-index="${s}">
                  <span class="bullet">${s+1}</span>
                  <span class="lbl">${c(ServerI18n.t(o.labelKey))}</span>
                </div>
                ${s<x.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:x.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function N(){let o=document.getElementById(h);if(!o)return;o.querySelectorAll(".admin-setup-step").forEach(function(y,k){y.classList.toggle("is-done",k<R.step),y.classList.toggle("is-active",k===R.step)}),o.querySelectorAll(".admin-setup-step-sep").forEach(function(y,k){y.classList.toggle("is-done",k<R.step)});let s=o.querySelector("[data-setup-meta]");s&&(s.textContent=ServerI18n.t("setupWizardStepMeta",{current:R.step+1,total:x.length}));let u=o.querySelector('[data-setup-action="prev"]');u&&(u.disabled=R.step===0);let t=o.querySelector('[data-setup-action="next"]');if(t){let y=x[R.step].id;t.textContent=ServerI18n.t("setupWizardNext")}let n=o.querySelector("[data-setup-foot]");n&&(n.hidden=x[R.step].id==="done");let a=o.querySelector("[data-setup-content]");if(!a)return;let i=x[R.step].id;i==="server"?a.innerHTML=T():i==="moderation"?a.innerHTML=I():i==="theme"?a.innerHTML=g():a.innerHTML=d(),r(i)}function T(){let o=R.readiness,s=o?Number(o.overlay_count)||0:null,u=s!==null&&s>0,n=[{ok:!R.publicUrlWarning,title:ServerI18n.t("setupWizardReadyServer"),value:R.publicUrlWarning||R.publicUrl},{ok:u,unknown:s===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:u?ServerI18n.t("setupWizardReadyDisplayOk",{n:s}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(R.activeTheme||R.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:A(R.themes.filter(function(a){return(a.name||a.id)===(R.selectedTheme||R.activeTheme)})[0]||R.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(a){let i=a.unknown?"is-unknown":a.ok?"is-done":"is-pending",y=a.unknown?"?":a.ok?"\u2713":"!",k='<span class="admin-setup-ready-title">'+c(a.title)+'</span><span class="admin-setup-ready-value">'+c(a.value||"")+"</span>",S=a.goto?'<a class="admin-setup-ready-go" href="'+a.goto+'" data-setup-goto="'+a.goto+'">'+c(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+i+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+y+"</span>"+k+S+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${c(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${c(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${n}</div>
      </div>`}async function L(){try{let o=await fetch("/overlay_status",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);let s=await o.json();R.readiness={overlay_count:Number(s.overlay_count)||0,mode:s.mode||""}}catch{R.readiness=null}R.open&&x[R.step].id==="server"&&N()}function I(){let o=R.moderationRules.map(function(s){return`
        <a class="admin-setup-mod-row" href="#/${s.route}" data-setup-goto="#/${s.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${c(ServerI18n.t(s.labelKey))}</span>
            <span class="admin-setup-mod-desc">${c(ServerI18n.t(s.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${c(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${c(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${c(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${o}</div>
      </div>`}let K=["default","neon","retro","cinema"];function _(){let o={};return(R.themes||[]).forEach(function(s){o[s.name||s.id]=s}),K.map(function(s){let u=F.filter(function(n){return n.name===s})[0],t=o[s];return u?{name:s,label:t&&t.label,labelKey:u.labelKey,descriptionKey:u.descriptionKey,colors:u.colors}:t}).filter(Boolean)}function g(){let o=_();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${o.map(function(s){let u=s.name||s.id||"",t=(R.selectedTheme||R.activeTheme)===u,n=(s.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${t?" is-selected":""}" data-setup-theme="${c(u)}">
                ${t?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${n.map(function(a,i){let y=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${c(a)};font-size:${10+i*2}px;text-shadow:0 0 6px ${c(a)}66;">${y[i]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${c(A(s))}</div>
                <div class="admin-setup-theme-sub">${c(G(s))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function d(){let o=(function(){for(let s=0;s<R.themes.length;s+=1){let u=R.themes[s];if((u.name||u.id)===(R.selectedTheme||R.activeTheme))return A(u)}return R.selectedTheme||R.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${c(R.publicUrlWarning||R.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${c(o)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${c(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${c(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function l(){let o=document.getElementById(h);o&&o.addEventListener("click",function(s){if(s.target===o){C();return}let u=s.target.closest("[data-setup-action]");if(u){if(u.dataset.setupAction==="close"){C();return}if(u.dataset.setupAction==="prev"&&R.step>0){R.step-=1,N();return}u.dataset.setupAction==="next"&&m()}})}function r(o){let s=document.getElementById(h);if(s){if(o==="moderation"||o==="done"||o==="server"){if(s.querySelectorAll("[data-setup-goto]").forEach(function(u){u.addEventListener("click",function(){C();let t=u.dataset.setupGoto;t&&(window.location.hash=t)})}),o==="done"){let u=s.querySelector("[data-setup-complete-cta]");u&&u.addEventListener("click",b)}return}if(o==="theme"){s.querySelectorAll("[data-setup-theme]").forEach(function(u){u.addEventListener("click",function(){R.selectedTheme=u.dataset.setupTheme||R.selectedTheme,N()})});return}}}async function e(){try{let o=await fetch("/admin/themes",{credentials:"same-origin"});if(!o.ok)return;let s=await o.json(),u=Array.isArray(s.themes)?s.themes:[];if(!u.length)return;R.themes=u.map(function(t){return{name:t.name||t.id||"",label:t.label||t.display_name||t.name||"",description:t.description||"",colors:t.preview_colors||t.colors||t.palette||F[0].colors}}),R.activeTheme=s.active||R.themes[0]&&R.themes[0].name||R.activeTheme,R.selectedTheme||(R.selectedTheme=R.activeTheme),R.open&&x[R.step].id==="theme"&&N()}catch{}}async function p(){if(!R.selectedTheme||R.selectedTheme===R.activeTheme)return!0;try{let o=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R.selectedTheme})});if(!o.ok)throw new Error("HTTP "+o.status);return R.activeTheme=R.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function m(){if(!(x[R.step].id==="theme"&&!await p())){if(R.step<x.length-1){R.step+=1,N();return}b()}}function b(){try{localStorage.setItem(f,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),C()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){C()},isCompleted:function(){try{return!!localStorage.getItem(f)}catch{return!1}},__setCapabilityForTest:function(){}};function v(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&v()})})()});var Yt=ye(()=>{(function(){"use strict";let h="sec-poll-deepdive-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(L){return String(L).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},c={poll:null,refreshTimer:0};function x(){return`
      <div id="${h}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-pdd-title>${ServerI18n.t("adminRouteTitle_poll-deepdive")}</h2>
          <!-- \u8FD4\u56DE\u9023\u7D50\u5728\u5361\u7247\u9801\u9996\uFF08\u2039 \u6295\u7968\uFF0C\u8A2D\u8A08\u7A3F 08 \xB7 P1\uFF09\u2014\u2014\u9019\u88E1\u518D\u653E\u4E00\u500B
               \u300C\u2190 \u56DE\u6295\u7968\u5217\u8868\u300D\u662F\u540C\u4E00\u4EF6\u4E8B\u8AAA\u5169\u6B21\u3002 -->
          <p class="admin-ui-page-note" data-pdd-note>${ServerI18n.t("pollDeepdivePageNote")}</p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">${ServerI18n.t("pollDeepdiveLoadingText")}</div>
        </div>
      </div>`}function F(L){if(L.innerHTML="",!window.AdminEmpty){L.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let I=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});I.classList.add("lg:col-span-2"),I.dataset.emptyKind="poll-deepdive",L.appendChild(I)}let A=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function G(L){return L?new Date(L*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function R(L){if(!L||L.length<2)return"";let I=Math.max.apply(null,L.map(function(l){return l.n}).concat([1])),K=100,_=32,g=K/(L.length-1),d=L.map(function(l,r){let e=(r*g).toFixed(2),p=(_-l.n/I*(_-2)-1).toFixed(2);return e+","+p});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+K+" "+_+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+d.join(" ")+'" /></svg>'}function P(L){let I=L.state||(L.active?"active":"ended"),K=L.question||"\u2014",_=Array.isArray(L.options)?L.options:[],g=function(u){return Number(u.votes!=null?u.votes:u.count)||0},d=_.reduce(function(u,t){return u+g(t)},0),l=I==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:G(L.ended_at)}),r=(function(){let u=Number(L.started_at)||0;if(!u)return"\u2014";let t=I==="active"?Date.now()/1e3:Number(L.ended_at)||u,n=Math.max(0,Math.floor(t-u));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,p=e>0?Math.round(d/e*100)+"%":"\u2014",m=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:d,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),b=(function(){let u=Array.isArray(L.questions)?L.questions:[],t=0;for(let n of u)t+=Number(n.duplicate_attempts)||0;return u.length||(t=Number(L.duplicate_attempts)||0),t})(),v=_.map(function(u,t){let n=g(u),a=d>0?n/d*100:0,i=A[t%A.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${f(u.label||u.text||u.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:t+1}))}</span>
            <span class="votes">${n} \xB7 ${a.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${a.toFixed(2)}%;background:${i}"></div>
          </div>
        </div>`}).join(""),o=Array.isArray(L.vote_timeline)?L.vote_timeline:[],s=o.length>=2?R(o):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${f(K)}</div>
          <div class="admin-pdd-state">${f(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${d}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${p}</div><div class="sub">${f(m)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${f(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${b}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${_.length?v:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${s}</div>
        </article>
      </div>`}function M(){let L=document.querySelector("[data-pdd-grid]");if(L){if(!c.poll||!c.poll.poll_id){F(L);return}L.innerHTML=P(c.poll)}}async function D(){try{let L=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!L.ok)return;let I=await L.json();c.poll=I,M()}catch{}}function C(){if(!c.poll||!Array.isArray(c.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let L=[["option_label","votes","percentage"]],I=c.poll.options.reduce(function(l,r){return l+(Number(r.votes!=null?r.votes:r.count)||0)},0);c.poll.options.forEach(function(l,r){let e=Number(l.votes!=null?l.votes:l.count)||0,p=I>0?(e/I*100).toFixed(2):"0.00";L.push([l.label||"option_"+(r+1),e,p])});let K=L.map(function(l){return l.map(window.AdminUtils.csvCell).join(",")}).join(`
`),_=new Blob([K],{type:"text/csv;charset=utf-8"}),g=URL.createObjectURL(_),d=document.createElement("a");d.href=g,d.download="poll-"+(c.poll.poll_id||"current")+".csv",document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(function(){URL.revokeObjectURL(g)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function w(){try{let L=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!L.ok)throw new Error("HTTP "+L.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),c.refreshTimer||(c.refreshTimer=setInterval(D,5e3))):c.refreshTimer&&(clearInterval(c.refreshTimer),c.refreshTimer=0)}function T(){let L=document.getElementById("settings-grid");if(!L||document.getElementById(h))return;L.insertAdjacentHTML("beforeend",x());let I=document.getElementById(h);I&&I.addEventListener("click",function(K){let _=K.target.closest("[data-pdd-action]");_&&(_.dataset.pddAction==="export-csv"?C():_.dataset.pddAction==="push"&&w())}),D(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&T()})})()});var Qt=ye(()=>{(function(){"use strict";let h="admin-message-drawer-root",c=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})},x={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},F=null;function A(p){let m=p.detail&&p.detail.entry;m&&(x.open||(F=document.activeElement),x.entry=m,G(),m.data&&m.data.fingerprint&&D(m.data.fingerprint),C(m))}function G(){x.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",w()),N()),T();let p=document.querySelector("#"+h+" .admin-msgd-v4__close")||document.querySelector("#"+h+" button");if(p)try{p.focus({preventScroll:!0})}catch{}}function R(){x.open=!1,document.body.dataset.messageDrawerOpen="";let p=document.getElementById(h);if(p&&p.remove(),F&&typeof F.focus=="function"&&document.contains(F))try{F.focus({preventScroll:!0})}catch{}F=null}function P(p){if(!x.open)return;if(p.key==="Escape"){R();return}let m=document.activeElement,b=m?(m.tagName||"").toLowerCase():"";if(!(m&&(m.isContentEditable||b==="input"||b==="textarea"||b==="select"))){if(p.key==="ArrowLeft"||p.key==="k"){M(-1),p.preventDefault();return}if(p.key==="ArrowRight"||p.key==="j"){M(1),p.preventDefault();return}}}function M(p){if(!x.entry)return;let m=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(m=window.AdminLiveFeed.getEntries()),!m.length)return;let b=m.findIndex(function(s){return s.id===x.entry.id});if(b<0)return;let v=b+-p;if(v<0||v>=m.length){window.showToast&&window.showToast(p<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let o=m[v];x.entry=o,x.fingerprintRecord=null,C(o),T(),o.data&&o.data.fingerprint&&D(o.data.fingerprint)}async function D(p){try{let m=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!m.ok)return;let b=await m.json(),o=(Array.isArray(b.records)?b.records:[]).find(function(s){return s.fingerprint===p});x.fingerprintRecord=o||null,T()}catch{}}function C(p){let m=p.data&&p.data.fingerprint;if(!m){x.sameFpEntries=[];return}let b=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(b=window.AdminLiveFeed.getEntries()),x.sameFpEntries=b.filter(function(v){return(v.data&&v.data.fingerprint||v.fingerprint||"")===m}).slice(0,8)}function w(){return`
      <div id="${h}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let p=document.getElementById(h);p&&p.addEventListener("click",function(m){let b=m.target.closest("[data-msgd-action]");if(!b)return;m.stopPropagation();let v=b.dataset.msgdAction;v==="close"?R():v==="ban-fp"?g():v==="ban-fp-quick"?_():v==="recall-msg"?l():v==="blacklist-kw"?r():v==="reply"?e():v==="prev"?M(-1):v==="next"&&M(1)})}function T(){let p=document.getElementById(h);if(!p)return;let m=p.querySelector("[data-msgd-body]");m&&(m.innerHTML=L())}function L(){let p=x.entry;if(!p)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let m=p.data||{},b=m.fingerprint||"\u2014",v=b==="\u2014"?"\u2014":b.slice(0,8),o=b==="\u2014"?"\u2014":b.slice(0,12),s=p.ts?I(p.ts):"\u2014",u=m.nickname||ServerI18n.t("msgDrawerAnonymous"),t=x.fingerprintRecord||{},n=Number(t.message_count)||0,a=Number(t.violation_count)||0,i=x.sameFpEntries||[],y=i.length?Math.round(i.reduce((S,B)=>S+((B.data||B).text||"").length,0)/i.length):(m.text||"").length,k=0;for(let S=0;S<b.length;S++)k=k*31+b.charCodeAt(S)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${c((u||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${c(u)}</div>
          <div class="admin-msgd-v4__fp">fp:${c(o)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${c(s)}</span>
      </div>

      <div class="admin-msgd-v4__body">${c(m.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${n||i.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${y}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${a>0?"warn":"good"}">${a}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${c(m.ip||"\u2014")}<br/>
          UA \xB7 ${c(m.user_agent||m.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${b==="\u2014"?"disabled":""}>${c(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${m.message_id?"":"disabled"}>${c(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function I(p){try{let m=new Date(p),b=String(m.getHours()).padStart(2,"0"),v=String(m.getMinutes()).padStart(2,"0"),o=String(m.getSeconds()).padStart(2,"0");return b+":"+v+":"+o}catch{return"\u2014"}}function K(p){let m;if(typeof p=="number")m=p*1e3;else if(typeof p=="string")m=new Date(p).getTime();else return"\u2014";if(!m)return"\u2014";let b=(Date.now()-m)/1e3;return b<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(b)}):b<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(b/60)}):b<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(b/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(b/86400)})}async function _(p,m,b){let v=x.entry&&x.entry.data&&x.entry.data.fingerprint;if(!v)return;let o=parseInt(m||0,10)||0,s=o>0?await window.AdminModeration.banFingerprint(v,o,p):await window.AdminModeration.callBlock("fingerprint",v,p);if(!s.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:s.error||""}),!1);return}let u=b||(o>0?ServerI18n.t("msgDrawerSecondsLabel",{n:o}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:v.slice(0,8),label:u}),!0),R()}async function g(){let p=x.entry&&x.entry.data||{},m=p.fingerprint||"\u2014";if(m==="\u2014")return;let b=m.slice(0,12),v=p.nickname||ServerI18n.t("msgDrawerAnonymous"),o=0;for(let k=0;k<m.length;k++)o=o*31+m.charCodeAt(k)&65535;o=o%360;let s=document.createElement("div");s.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${o})">${c((v||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${c(v)}</div>
          <div class="fp">fp:${c(b)}</div>
          <div class="ip">IP \xB7 ${c(p.ip||"\u2014")} \xB7 ${c(p.user_agent||p.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let u=k=>{s.querySelectorAll(".admin-bancfm-dchip").forEach(S=>S.classList.remove("is-active")),k.classList.add("is-active")};if(s.addEventListener("click",k=>{let S=k.target.closest("[data-ban-duration]");S&&u(S)}),s.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let S=k.target.closest("[data-ban-duration]");S&&(k.preventDefault(),u(S))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:s,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(s.querySelector("[data-ban-reason]")||{}).value||"",a=s.querySelector(".admin-bancfm-dchip.is-active"),i=a&&parseInt(a.dataset.banDuration||"0",10)||0,y=a?a.textContent.trim():ServerI18n.t("msgDrawerPermanent");return _(n.trim(),i,y)}function d(){}async function l(){let p=x.entry,m=p&&p.data&&p.data.message_id;if(!m)return;if(!(await window.AdminModeration.recall(m)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),R()}async function r(){let p=x.entry&&x.entry.data&&x.entry.data.text;if(!p)return;await window.AdminModeration.blockKeyword(p)&&R()}async function e(){let p=document.querySelector("[data-msgd-reply]"),m=p?p.value.trim():"";if(m)try{let b=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:m})});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),p&&(p.value="")}catch(b){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:b.message||""}),!1)}}window.AdminMessageDrawer={open:function(p){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:p}}))},close:R},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",A),document.addEventListener("keydown",P))})})()});var Xt=ye(()=>{(function(){"use strict";let h="danmu.notifications.read",f="danmu.notifications.archived",c=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},x={items:[],refreshTimer:0};function F(s){try{let u=localStorage.getItem(s);if(!u)return new Set;let t=JSON.parse(u);return new Set(Array.isArray(t)?t:[])}catch{return new Set}}function A(s,u){try{localStorage.setItem(s,JSON.stringify(Array.from(u)))}catch{}}function G(s){let u=F(h);u.add(s),A(h,u)}async function R(){let s=[P().catch(function(){return[]}),C().catch(function(){return[]}),w().catch(function(){return[]}),N().catch(function(){return[]})],t=(await Promise.all(s)).flat();t.sort(function(n,a){return(a.ts||0)-(n.ts||0)}),x.items=t,_(),l()&&g()}async function P(){let s=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!s.ok)return[];let u=await s.json();return(Array.isArray(u.events)?u.events:[]).map(function(n,a){let i=(Number(n.ts)||0)*1e3,y="tok-"+(n.ts||a)+"-"+(n.kind||"x"),k=n.kind||"?",S="info",B=ServerI18n.t("notifTitleFireTokenEvent");if(k==="rotated")S="info",B=ServerI18n.t("notifTitleFireTokenRotated");else if(k==="revoked")S="warn",B=ServerI18n.t("notifTitleFireTokenRevoked");else if(k==="toggled"){let j=n.meta&&n.meta.enabled;S=j?"good":"warn",B=ServerI18n.t("notifTitleFireTokenToggled",{state:j?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:y,sev:S,src:"Fire Token",ts:i,title:B,desc:ServerI18n.t("notifDescEventType",{kind:k})+(n.meta?" \xB7 "+JSON.stringify(n.meta):""),raw:n}})}function M(s){let u=typeof s=="string"?s:JSON.stringify(s||""),t=5381;for(let n=0;n<u.length;n++)t=(t<<5)+t+u.charCodeAt(n)>>>0;return t.toString(36)}function D(s,u,t){return s+(u.id?String(u.id):t)}async function C(){let s=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!s.ok)return[];let u=await s.json();return(Array.isArray(u.events)?u.events:[]).map(function(n,a){let i=(Number(n.ts)||0)*1e3,y="flt-"+(n.ts||0)+"-"+(n.seq!=null?"s"+n.seq:(n.action||"x")+"-"+M([n.rule_id,n.text_excerpt])),k=n.action||"match";return{id:y,sev:k==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:k}),desc:ServerI18n.t("notifDescFilterHit",{rule:n.rule_id||"?",text:(n.text_excerpt||"").slice(0,60)}),raw:n}})}async function w(){let s=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!s.ok)return[];let u=await s.json();return(Array.isArray(u.events)?u.events:[]).map(function(n,a){let i=(Number(n.ts)||0)*1e3,y=String(n.kind||"?");return{id:D("wh-",n,(n.ts||0)+"-"+y+"-"+M([n.actor,n.meta])),sev:y==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:y}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:n.actor||"system"})+(n.meta?" \xB7 "+JSON.stringify(n.meta):""),raw:n}})}async function N(){let s=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!s.ok)return[];let u=await s.json(),t=Array.isArray(u.events)?u.events:[],n=new Set(["auth","broadcast","system","session","sessions"]);return t.filter(function(a){return n.has(String(a.source||""))?!(String(a.source)==="auth"&&(a.kind==="login"||a.kind==="logout")):!1}).map(function(a){let i=(Number(a.ts)||0)*1e3,y=String(a.kind||"?");return{id:D("sys-",a,(a.ts||0)+"-"+(a.source||"x")+"-"+y+"-"+M([a.actor,a.meta])),sev:y==="login_failed"?"warn":"info",src:"System",ts:i,title:ServerI18n.t("notifTitleSystemEvent",{kind:y}),desc:ServerI18n.t("notifDescSystemEvent",{source:a.source||"?",actor:a.actor||"system"}),raw:a}})}let T="admin-notif-panel",L={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function I(s){let u=L[s];return u?ServerI18n.t(u.key):s}function K(){let s=F(h),u=F(f);return x.items.filter(t=>!s.has(t.id)&&!u.has(t.id))}function _(){let s=document.querySelector("[data-notif-badge]");if(!s)return;let u=K().length;s.textContent=u>99?"99+":String(u),s.hidden=u===0}function g(){let s=document.getElementById(T);if(!s)return;let u=K().slice(0,20),t=u.length?u.map(n=>{let a=L[n.src];return'<li class="admin-notif__item" data-sev="'+c(n.sev)+'"><div class="admin-notif__text">'+c(n.title)+'</div><div class="admin-notif__meta">'+c(I(n.src))+" \xB7 "+c(d(n.ts))+"</div>"+(a?'<button type="button" class="admin-notif__action" data-notif-go="'+c(a.hash)+'" data-notif-id="'+c(n.id)+'">'+c(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+c(ServerI18n.t("notifEmpty"))+"</li>";s.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+c(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+c(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+t+"</ul>"}function d(s){if(!s)return"\u2014";let u=(Date.now()-s)/1e3;return u<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(u)}):u<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(u/60)}):u<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(u/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(u/86400)})}function l(){let s=document.getElementById(T);return!!s&&!s.hidden}function r(){let s=document.getElementById(T);s&&(g(),s.hidden=!1,x.refreshTimer||(x.refreshTimer=setInterval(R,3e4)))}function e(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&r()}function p(){let s=document.getElementById(T);s&&(s.hidden=!0),x.refreshTimer&&(clearInterval(x.refreshTimer),x.refreshTimer=0)}function m(){l()?p():r()}function b(){let s=document.querySelector(".admin-dash-topbar-actions");if(!s||document.getElementById("admin-notif-bell"))return;let u=document.createElement("button");if(u.id="admin-notif-bell",u.type="button",u.className="admin-dash-search is-icon-only admin-notif-bell",u.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),u.title=ServerI18n.t("adminRouteTitle_notifications"),u.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',s.insertBefore(u,s.firstChild),!document.getElementById(T)){let t=document.createElement("div");t.id=T,t.className="admin-notif",t.setAttribute("role","dialog"),t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.hidden=!0,document.body.appendChild(t)}_(),e()}function v(){document.addEventListener("click",s=>{if(s.target.closest("#admin-notif-bell")){s.preventDefault(),m();return}let u=s.target.closest("[data-notif-go]");if(u){G(u.dataset.notifId),p(),location.hash=u.dataset.notifGo,_();return}if(s.target.closest("[data-notif-readall]")){K().forEach(t=>G(t.id)),g(),_();return}l()&&!s.target.closest("#"+T)&&p()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l()&&p()}),window.addEventListener("hashchange",e),e()}function o(){b(),R()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(b).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),v(),o()})})()});var Zt=ye(()=>{(function(){"use strict";let h="sec-audit-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},c={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},x={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function F(){return`
      <div id="${h}" class="admin-audit-page hud-page-stack lg:col-span-2">
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
      </div>`}function A(e){if(!e)return"\u2014";try{let p=new Date(Number(e)*1e3),m=String(p.getHours()).padStart(2,"0"),b=String(p.getMinutes()).padStart(2,"0"),v=String(p.getSeconds()).padStart(2,"0");return`${m}:${b}:${v}`}catch{return"\u2014"}}function G(e){let p=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(p)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(p)?"warn":"info"}function R(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function P(e){return x.filterActor==="all"||String(e.actor||"").toLowerCase()===x.filterActor}function M(e){return x.filterSeverity==="all"||G(e)===x.filterSeverity}function D(){return x.events.filter(function(e){return P(e)&&M(e)})}function C(e){let p=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return p.target||p.keyword||p.fp||p.fingerprint||p.name||p.mode||p.session||p.hook_id||e.target||""}function w(e,p){let m=e!=null,b=p!=null;if(!m&&!b)return"";let v=m?f(JSON.stringify(e)):"",o=b?f(JSON.stringify(p)):"";return m?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${v}</span> \u2192 <span class="admin-audit-diff-a">${o}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${o}</span></span>`}function N(e){let p=e&&e.meta&&typeof e.meta=="object"?e.meta:{},m=[];e.detail&&m.push(`<span>${f(String(e.detail))}</span>`);let b=w(e.before,e.after);b&&m.push(b);let v=Object.assign({},p);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(s){delete v[s]}),Object.keys(v).length&&m.push(`<code class="admin-ui-code admin-audit-meta-extra">${f(JSON.stringify(v))}</code>`),!m.length){let s=c[e.source]&&c[e.source].label||e.source||"system";m.push(`<span>${f(String(s))}</span>`)}return m.join(" ")}function T(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function L(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let p=D();if(!p.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=p.map(function(m){let b=G(m),v=R(b),o=String(m.actor||"system"),s=C(m);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${b}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${f(A(m.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${v};box-shadow:0 0 6px ${v}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${T(o)}">${f(o)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${f(String(m.action||m.kind||"\u2014"))}</span>
              ${s?`<span class="admin-ui-target admin-audit-target">\u2192 ${f(String(s))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(m)}</div>
          </div>
        </div>`}).join("")}function I(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let p=D().length,m=x.filterActor==="all"?ServerI18n.t("auditAllRoles"):x.filterActor,b=x.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):x.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:p,actor:m,sev:b})}function K(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===x.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===x.filterSeverity)})}async function _(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let p=await e.json(),m=Array.isArray(p.events)?p.events.slice():[];m.sort(function(b,v){return Number(v.ts||0)-Number(b.ts||0)}),x.events=m,K(),L(),I()}catch{}}function g(){let e=D();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let p=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),m=URL.createObjectURL(p),b=document.createElement("a");b.href=m,b.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(b),b.click(),document.body.removeChild(b),setTimeout(function(){URL.revokeObjectURL(m)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function d(){let e=document.getElementById(h);e&&e.addEventListener("click",function(p){let m=p.target.closest("[data-audit-actor-filter]");if(m){x.filterActor=m.dataset.auditActorFilter||"all",K(),L(),I();return}let b=p.target.closest("[data-audit-severity-filter]");if(b){let v=b.dataset.auditSeverityFilter||"all";x.filterSeverity=x.filterSeverity===v?"all":v,K(),L(),I();return}if(p.target.closest("[data-audit-export]")){g();return}p.target.closest("[data-audit-refresh]")&&_()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(_(),x.refreshTimer||(x.refreshTimer=setInterval(_,3e4))):x.refreshTimer&&(clearInterval(x.refreshTimer),x.refreshTimer=0)}function r(){let e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",F()),d(),_(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&r()})})()});var en=ye(()=>{(function(){"use strict";let h="sec-audience-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},c=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],x=20,F={records:[],filter:"all",shown:x,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function A(n){if(!n)return c[0];let a=0;for(let i=0;i<n.length;i++)a=a*31+n.charCodeAt(i)>>>0;return c[a%c.length]}function G(n){if(!n)return"\u2014";let a=typeof n=="number"?n*1e3:new Date(n).getTime();if(!a)return"\u2014";let i=Math.max(0,(Date.now()-a)/1e3);return i<60?Math.floor(i)+"s":i<3600?Math.floor(i/60)+"m":i<86400?Math.floor(i/3600)+"h":Math.floor(i/86400)+"d"}function R(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function P(){return`
      <div id="${h}" class="admin-audience-page hud-page-stack lg:col-span-2">
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
      </div>`}function M(){let n=F.search.trim().toLowerCase(),a=F.records.slice();return n&&(a=a.filter(function(i){return String(i.nickname||"").toLowerCase().indexOf(n)!==-1||String(i.hash||"").toLowerCase().indexOf(n)!==-1})),a.sort(function(i,y){return F.sort==="last_seen"?(Number(y.last_seen)||0)-(Number(i.last_seen)||0):(Number(y.msgs)||0)-(Number(i.msgs)||0)}),F.filter==="all"?a:F.filter==="flagged"?a.filter(function(i){return i.state==="flagged"||i.state==="blocked"}):F.filter==="extension"?a.filter(function(i){return i.fingerprint&&(i.fingerprint.indexOf("slido")===0||i.fingerprint.indexOf("ext_")===0)}):a}function D(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let a=F.records,i=a.length,y=a.filter(function(j){return j.state==="flagged"}).length,k=a.filter(function(j){return j.state==="blocked"}).length,S=a.reduce(function(j,J){return j+(Number(J.msgs)||0)},0),B=a.filter(function(j){let J=j.last_seen;if(!J)return!1;let E=typeof J=="number"?J*1e3:new Date(J).getTime();return(Date.now()-E)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${i}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${B}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${y}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function C(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let a=F.records.length,i=F.records.filter(function(y){return y.state==="flagged"||y.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${F.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:a})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${F.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:i})}</button>`}let w="__anon__";function N(n){let a=(n.nickname||"").trim();return!a||a==="\u533F\u540D"}function T(n){let a=n.hash||n.fingerprint||"";return a?a.length>9?a.slice(0,4)+"\u2026"+a.slice(-4):a:"\u2014"}function L(){let n=[],a=[];return M().forEach(function(i){N(i)?a.push(i):n.push(i)}),a.length&&n.push({_anonGroup:!0,_count:a.length,fingerprint:w,msgs:a.reduce(function(i,y){return i+(Number(y.msgs)||0)},0),blocked:a.reduce(function(i,y){return i+(Number(y.blocked)||0)},0),last_seen:Math.max.apply(null,a.map(function(i){return i.last_seen||0})),state:a.some(function(i){return i.state==="blocked"})?"blocked":"active"}),n}function I(){let n=document.querySelector("[data-aud-list]"),a=document.querySelector("[data-aud-summary]");if(!n)return;let i=L(),y=Math.min(i.length,F.shown);if(a&&(a.textContent=ServerI18n.t("audienceShownOfTotal",{n:y,total:i.length})),i.length===0){n.innerHTML="";let j=window.AdminEmpty.render("audience");j.dataset.emptyKind="audience",n.appendChild(j);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,S=i.slice(0,y).map(function(j){let J=j.fingerprint||"\u2014",E=j.state==="blocked",O=j._anonGroup?ServerI18n.t("audienceAnonymous"):(j.nickname||"").trim(),$=j._anonGroup?"?":O.slice(0,1),q=A(J);return`
        <div class="admin-aud-row${F.selectedFp===J?" is-selected":""}" data-aud-row data-aud-fp="${f(J)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${q}">${f($)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${f(O)}</span>
            ${j._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:j._count})}</span>`:""}
            ${E&&!j._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${j._anonGroup?"\u2014":f(T(j))}</span>
          <span class="col col-msgs">${Number(j.msgs)||0}</span>
          <span class="col col-blocked">${Number(j.blocked)||0}</span>
          <span class="col col-seen">${f(G(j.last_seen))}</span>
          <span class="col col-actions">
            ${j._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${f(J)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),B=i.length>y?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=k+S+B}function K(n){return n&&F.records.find(function(a){return a.fingerprint===n})||null}function _(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let a=[],i=Number(n.msgs)||0,y=n.fingerprint||"";n.state==="blocked"&&a.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&a.push(ServerI18n.t("audienceRuleFlagged")),i>=25?a.push(ServerI18n.t("audienceRuleMsgOver",{n:i})):i>=15&&a.push(ServerI18n.t("audienceRuleMsgNear",{n:i}));let k=F.records.filter(function(J){return J.ip&&n.ip&&J.ip===n.ip}).length;k>=3&&a.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(y.indexOf("slido")===0||y.indexOf("ext_")===0)&&a.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&a.push(ServerI18n.t("audienceRuleNoNick"));let S="normal",B="var(--hud-lime)",j="NORMAL";return n.state==="blocked"?(S="blocked",B="var(--hud-crimson)",j="BLOCKED"):n.state==="flagged"||i>=25?(S="high",B="var(--hud-crimson)",j="HIGH RISK"):(i>=15||k>=3)&&(S="mid",B="var(--hud-amber)",j="MID"),{level:S,color:B,label:j,rules:a}}async function g(n){F.detailLoading=!0;try{let a=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!a.ok){F.detailMessages=[];return}let i=await a.json(),y=Array.isArray(i.records)?i.records:[],k=Date.now()-300*1e3;F.detailMessages=y.filter(function(S){return(S.fingerprint||"")!==n?!1:(S.timestamp?new Date(S.timestamp).getTime():0)>=k}).slice(0,8)}catch{F.detailMessages=[]}finally{F.detailLoading=!1}}function d(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let a=F.selectedFp;if(!a){n.hidden=!0,n.innerHTML="";return}let i=K(a);if(!i){F.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let y=_(i);n.dataset.riskLevel=y.level;let k=A(a),S=!i.nickname||i.nickname==="\u533F\u540D",B=S?ServerI18n.t("audienceAnonymous"):i.nickname,j=S?"?":B.slice(0,1),J="fp:"+(a||"").slice(0,8),E=y.rules.length?y.rules.map(function($){return"<li>"+f($)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",O="";F.detailLoading?O='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":F.detailMessages.length===0?O='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":O=F.detailMessages.map(function($){let q=$.muted?"MASKED":$.banned?"BLOCKED":"SHOWN",Y=$.muted?"var(--hud-amber)":$.banned?"var(--hud-crimson)":"var(--hud-lime)",V=$.timestamp?new Date($.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+f(V)+'</span><span class="m">'+f($.text||"")+'</span><span class="s" style="color:'+Y+'">'+q+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+R(y.level)+'">'+f(y.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+f(j)+'</span><div><div class="nick">'+f(B)+'</div><div class="fp">'+f(J)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+y.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:y.rules.length})+"</div><ul>"+E+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+O+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(i.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+f(a)+'" data-aud-flagged="'+(i.is_flagged?"true":"false")+'">'+(i.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(n){F.selectedFp=n,F.detailMessages=[],d(),g(n).then(d)}async function r(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let a=await n.json();F.records=Array.isArray(a.entries)?a.entries:[],F.serverStats=a&&a.stats||null,D(),C(),I(),F.selectedFp&&d()}catch{}}async function e(n,a,i){if(n)try{let y=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!a,note:i||""})});if(!y.ok)throw new Error("HTTP "+y.status);window.showToast&&window.showToast(a?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),r()}catch(y){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:y.message||""}),!1)}}async function p(n,a){if(!n||n==="\u2014")return;let i=a??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(i!==null)try{let y=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:i})});if(!y.ok)throw new Error("HTTP "+y.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),r()}catch(y){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:y.message||""}),!1)}}async function m(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+f(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let i=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),r()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:i.message||""}),!1)}}async function b(n){if(!(!n||n==="\u2014"))try{let a=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"block",priority:0,enabled:!0})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),r()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:a.message||""}),!1)}}async function v(n){if(!(!n||n==="\u2014"))try{let a=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);let i=await a.json(),k=(Array.isArray(i.rules)?i.rules:[]).filter(function(B){return B&&B.type==="fingerprint"&&B.pattern===n});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let S=0;for(let B of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B.rule_id||B.id})}).catch(function(){return{ok:!1}})).ok&&(S+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:S,fp:n.slice(0,8)}),!0),r()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:a.message||""}),!1)}}async function o(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+f(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let i=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),r()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:i.message||""}),!1)}}function s(){let n=document.getElementById(h);n&&(n.addEventListener("input",function(a){let i=a.target.closest("[data-aud-search]");i&&(F.search=i.value||"",F.shown=x,I())}),n.addEventListener("change",function(a){let i=a.target.closest("[data-aud-sort]");i&&(F.sort=i.value,I())}),n.addEventListener("click",function(a){let i=a.target.closest("[data-aud-filter]");if(i){F.filter=i.dataset.audFilter,F.shown=x,C(),I();return}let y=a.target.closest("[data-aud-action='ban']");if(y){a.stopPropagation(),o(y.dataset.audFp);return}if(a.target.closest("[data-aud-action='refresh']")){r();return}if(a.target.closest("[data-aud-action='more']")){F.shown+=x,I();return}if(a.target.closest("[data-aud-action='close-detail']")){F.selectedFp=null,d();return}let j=a.target.closest("[data-aud-action='detail-ban']");if(j){o(j.dataset.audFp);return}let J=a.target.closest("[data-aud-action='detail-mask']");if(J){b(J.dataset.audFp);return}let E=a.target.closest("[data-aud-action='detail-safe']");if(E){v(E.dataset.audFp);return}let O=a.target.closest("[data-aud-action='flag']");if(O){a.stopPropagation(),e(O.dataset.audFp,O.dataset.audFlagged!=="true");return}let $=a.target.closest("[data-aud-action='kick']");if($){a.stopPropagation(),p($.dataset.audFp);return}let q=a.target.closest("[data-aud-action='unkick']");if(q){a.stopPropagation(),m(q.dataset.audFp);return}let Y=a.target.closest("[data-aud-row]");if(!(Y&&Y.dataset.audFp===w)&&Y&&!a.target.closest("button")){l(Y.dataset.audFp);return}}))}function u(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(r(),F.refreshTimer||(F.refreshTimer=setInterval(r,15e3))):F.refreshTimer&&(clearInterval(F.refreshTimer),F.refreshTimer=0)}function t(){let n=document.getElementById("settings-grid");!n||document.getElementById(h)||(n.insertAdjacentHTML("beforeend",P()),s(),r(),u(),window.addEventListener("hashchange",u))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&t()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&t()})})()});var tn=ye(()=>{(function(){"use strict";let h=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],f={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},c=2500,x=0,F=0,A=null;function G(){if(A)return A;let C=document.createElement("div");return C.className="admin-konami-hud",C.setAttribute("aria-hidden","true"),C.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(C),A=C,C}function R(){if(x===0){A&&A.classList.remove("is-on");return}let C=G();C.classList.add("is-on");let w=C.querySelector(".admin-konami-hud-keys");w&&(w.innerHTML=h.map((T,L)=>`<span class="admin-konami-hud-key ${L<x?"is-filled":""}">${f[T]}</span>`).join(""));let N=C.querySelector(".admin-konami-hud-progress");if(N){let T=Math.round(x/h.length*100);N.style.width=T+"%"}}function P(C){x=0,F&&(clearTimeout(F),F=0),C||R()}function M(){F&&clearTimeout(F),F=setTimeout(()=>P(),c)}async function D(){try{let C=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(C){console.warn("[konami] trigger failed:",C&&C.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",C=>{let w=C.target;if(w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable))return;let N=h[x];if(!(C.key===N||N==="b"&&C.key.toLowerCase()==="b"||N==="a"&&C.key.toLowerCase()==="a")){x=C.key===h[0]?1:0,R(),x>0?M():F&&(clearTimeout(F),F=0);return}if(x++,R(),x>=h.length){P(!0),D();return}M()}),window.AdminKonami={trigger:D}})()});var nn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(b){return b==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:b==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:b==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function c(){let b=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,v=b?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${b?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${h(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${v}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${b?`
            <div class="admin-ui-card admin-fonts-upload-card" id="adminFontDropWrap" style="margin-top:12px">
              <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("fontsUploadCustomLabel")}</div>
              <div
                id="adminFontDrop"
                class="admin-fonts-drop"
                role="button"
                tabindex="0"
                aria-label="${h(ServerI18n.t("uploadFont"))}"
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
    `}var x=null,F=[];function A(b,v){var o=document.getElementById("adminFontEmptyStateHost");if(!o)return;if((b||[]).some(t=>t.type==="uploaded")){o.innerHTML="";return}o.innerHTML="";var u=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:v?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var t=document.getElementById("adminFontFileInput");t&&t.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});u.dataset.emptyKind="fonts",o.appendChild(u)}function G(b,v){let o=b.weight||"\u2014",s=b.sizeLabel||"\u2014",u=b.foundry||(b.type==="system"?"System":b.type==="default"?"Google / Noto":"Uploaded"),t=b.format||"\u2014",n=b.status||b.type,a=`font-family: "${h(b.name)}", sans-serif;`,i=f(n),y=[];if(v){if(n!=="default"&&y.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${h(b.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let k=n==="enabled"||n==="system",S=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");y.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${h(b.name)}" data-enabled="${k?"true":"false"}">${S}</button>`)}b.type==="uploaded"&&(y.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${h(b.name)}" title="${h(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),y.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${h(b.name)}">${h(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${h(b.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${a}" class="truncate">${h(b.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(y.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${y.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${h(u)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${h(o)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(s)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${h(t)}</span><div style="text-align:right">${i}</div></div>`}let R=null,P={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(R)return R;try{let b=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return b.ok?(R=(await b.json()).presets||{},R):{}}catch{return{}}}function D(b){return!b||!Number.isFinite(b)?"\u2014":b<1024?b+" B":b<1024*1024?(b/1024).toFixed(1)+" KB":(b/(1024*1024)).toFixed(2)+" MB"}async function C(b){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let v=await M();if(!Object.keys(v).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let o=new Set(["cjk_common","latin"]),s="",u=document.createElement("div");u.className="admin-font-subset-modal-body";let t=()=>{let i=Object.keys(v).map(k=>{let S=P[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},B=S.labelKey?ServerI18n.t(S.labelKey):S.label,j=o.has(k);return`
          <label class="admin-font-subset-chip${j?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${j?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${h(B)}</span>
            <span class="admin-font-subset-chip-range">${h(v[k])}</span>
            <span class="admin-font-subset-chip-meta">${S.glyphs} glyphs \xB7 ${S.estSize}</span>
          </label>`}).join("");u.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${h(b)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${i}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${h(s)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,u.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",S=>{S.preventDefault();let B=k.dataset.subsetPreset;o.has(B)?o.delete(B):o.add(B),t()})});let y=u.querySelector("[data-subset-custom]");y&&y.addEventListener("input",()=>{s=y.value})};if(t(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:u,width:540}))return;let a=[];if(o.forEach(i=>{v[i]&&a.push(v[i])}),s.trim()&&a.push(s.trim()),!a.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await w(b,a.join(","))}async function w(b,v){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:b}),!0);let o=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(b)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:v})}),s=await o.json().catch(()=>({}));if(o.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!o.ok){window.showToast?.(s.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:o.status}),!1);return}let u=s.saved_bytes||0,t=Math.round((s.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:b,before:D(s.original_size),after:D(s.new_size),pct:t}),!0),L()}catch(o){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:o.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(b){try{let v=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:b})});if(!v.ok)throw new Error("HTTP "+v.status);x=b,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:b}),!0),L()}catch(v){console.error("[admin-fonts] set default failed:",v),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function T(b,v){try{let o=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(b)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!v})});if(!o.ok)throw new Error("HTTP "+o.status);window.showToast(ServerI18n.t(v?"fontsToggleOffToast":"fontsToggleOnToast",{name:b}),!0),L()}catch(o){console.error("[admin-fonts] toggle failed:",o),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function L(){var b=document.getElementById("adminFontList");if(!b)return;let v=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var o=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!o.ok)throw new Error("HTTP "+o.status);var s=await o.json(),u=s.fonts||[];if(F=u,window.AdminTabs?.setTabCount?.("assets","fonts",u.length||""),A(u,v),u.length===0){b.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,d(u);return}b.innerHTML=u.map(t=>G(t,v)).join(""),d(u),l()}catch(t){console.error("[admin-fonts] fetch failed:",t),b.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,A([],v)}}async function I(b){try{let v=await b.slice(0,4).arrayBuffer(),o=new Uint8Array(v);return o[0]===0&&o[1]===1&&o[2]===0&&o[3]===0?"TTF":o[0]===79&&o[1]===84&&o[2]===84&&o[3]===79?"OTF":o[0]===119&&o[1]===79&&o[2]===70&&o[3]===50?"WOFF2":o[0]===116&&o[1]===114&&o[2]===117&&o[3]===101?"TTF":o[0]===116&&o[1]===116&&o[2]===99&&o[3]===102?"TTC":null}catch{return null}}function K(b,v){let o=document.getElementById("adminFontDropStatus");if(o){if(!b){o.textContent="",o.hidden=!0,o.classList.remove("is-good","is-bad");return}o.hidden=!1,o.textContent=b,o.classList.toggle("is-good",v==="good"),o.classList.toggle("is-bad",v==="bad")}}function _(b){let v=document.getElementById("adminFontUploadError");if(!v)return;if(!b){v.hidden=!0,v.innerHTML="";return}v.hidden=!1,v.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${h(b)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let o=v.querySelector("[data-font-error-retry]");o&&o.addEventListener("click",function(){let s=document.getElementById("adminFontFileInput");s&&s.click()})}async function g(b){if(!b)return;_("");let v=b.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(v)){window.showToast(ServerI18n.t("invalidFileType"),!1),K(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),_(ServerI18n.t("fontsExtNotSupportedFull"));return}if(b.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),K(ServerI18n.t("fontsFileTooLarge"),"bad"),_(ServerI18n.t("fontsFileTooLargeFull"));return}let o=await I(b);if(!o){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),K(ServerI18n.t("fontsMagicInvalid"),"bad"),_(ServerI18n.t("fontsMagicValidationFailed"));return}K(ServerI18n.t("fontsUploadValidated",{magic:o,size:(b.size/1024).toFixed(1)}),"good");try{var s=new FormData;s.append("fontfile",b);var u=await window.csrfFetch("/admin/upload_font",{method:"POST",body:s}),t=await u.json();u.ok?(window.showToast(t.message||ServerI18n.t("fontUploadFallback")),K(ServerI18n.t("fontsUploadedStatus",{filename:b.name}),"good"),_(""),await L()):(window.showToast(t.error||ServerI18n.t("uploadFailed"),!1),K(t.error||ServerI18n.t("uploadFailed"),"bad"),_(t.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),K(ServerI18n.t("fontsNetworkErrorShort"),"bad"),_(ServerI18n.t("fontsNetworkDisconnected"))}}function d(b){let v=document.getElementById("fontsTotalSize");v&&(v.textContent=ServerI18n.t("fontsTotalCount",{n:b.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(b=>{b.addEventListener("click",v=>{if(v.target.closest(".admin-font-delete-btn"))return;let o=b.dataset.font,s=document.getElementById("fontsPreviewFamily"),u=document.getElementById("fontsPreviewHeadline"),t=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");s&&(s.textContent=o);let a=`"${o}", sans-serif`;u&&(u.style.fontFamily=a),t&&(t.style.fontFamily=a),n&&(n.style.fontFamily=a)})})}async function r(){var b=document.getElementById("adminFontFileInput");if(b){var v=b.files&&b.files[0];if(!v){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await g(v),b.value=""}}function e(){let b=document.getElementById("adminFontDrop"),v=document.getElementById("adminFontFileInput");!b||!v||(b.addEventListener("click",o=>{o.target!==v&&v.click()}),b.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),v.click())}),["dragenter","dragover"].forEach(o=>{b.addEventListener(o,s=>{s.preventDefault(),s.stopPropagation(),b.classList.add("is-drag")})}),["dragleave","drop"].forEach(o=>{b.addEventListener(o,s=>{s.preventDefault(),s.stopPropagation(),b.classList.remove("is-drag")})}),b.addEventListener("drop",async o=>{let s=o.dataTransfer&&o.dataTransfer.files;s&&s[0]&&await g(s[0])}))}async function p(b){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",b),confirmLabel:ServerI18n.t("deleteBtn")}))try{var o=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(b),{method:"DELETE"}),s=await o.json();o.ok?(window.showToast(s.message||ServerI18n.t("fontDeleteFallback")),await L()):window.showToast(s.error||ServerI18n.t("deleteFailed"),!1)}catch(u){console.error("[admin-fonts] delete error:",u),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function m(){var b=document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",c());var v=document.getElementById("adminFontFileInput");v&&v.addEventListener("change",r),e();var o=document.getElementById("adminFontList");o&&o.addEventListener("click",function(s){var u=s.target.closest(".admin-font-delete-btn");if(u){s.stopPropagation(),p(u.dataset.name);return}var t=s.target.closest(".admin-font-default-btn");if(t){s.stopPropagation(),N(t.dataset.name);return}var n=s.target.closest(".admin-font-toggle-btn");if(n){s.stopPropagation();let i=n.dataset.enabled==="true";T(n.dataset.name,i);return}var a=s.target.closest(".admin-font-subset-btn");a&&(s.stopPropagation(),C(a.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(s=>s.ok?s.json():null).then(s=>{s&&Array.isArray(s.FontFamily)&&(x=s.FontFamily[3]||null)}).catch(()=>{}).finally(L)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()}})})()});var an=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-scheduler",c=5e3,x=null,F=null;function A(m,b,v,o){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${m}">
        <input type="text" placeholder="${P(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${P(b)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${P(v||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${o||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function G(m){var b=m==="active"?"is-success":m==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+b+'" title="'+P(m)+'"></span>'}function R(m){let b=m.state==="paused",v=m.repeat_count===void 0?"\u2014":m.repeat_count===-1?"\u221E":String(m.repeat_count),o=m.repeat_count>0&&typeof m.remaining=="number"?String(m.repeat_count-m.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${P(m.id)}">
        ${G(m.state)}
        <div>
          <div class="admin-scheduler-job-title">#${h(m.id)}</div>
          <div class="admin-scheduler-job-meta">${h(ServerI18n.t("schedulerMessages"))} ${m.messages?m.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${m.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${h(o)}</span>
        <span class="admin-scheduler-job-val">${h(v)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${b?"is-active":"is-warn"}"
            data-job-id="${P(m.id)}" data-action="${b?"resume":"pause"}">
            ${h(ServerI18n.t(b?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${P(m.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function P(m){return h(m)}function M(){let m=document.querySelectorAll("#schedulerMessages [data-msg-index]"),b=[];return m.forEach(function(v){let o=v.querySelector(".scheduler-msg-text").value.trim(),s=v.querySelector(".scheduler-msg-color").value,u=parseInt(v.querySelector(".scheduler-msg-size").value,10)||48;o&&b.push({text:o,color:s,size:u})}),b}function D(m,b,v){let o=document.getElementById("schedulerMessages");if(!o)return;let s=o.children.length;o.insertAdjacentHTML("beforeend",A(s,m||"",b||"#ffffff",v||48))}function C(m){let b=m.closest("[data-msg-index]");b&&b.remove();let v=document.getElementById("schedulerMessages");v&&v.querySelectorAll("[data-msg-index]").forEach(function(o,s){o.dataset.msgIndex=s})}async function w(){let m=M();if(m.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let b=parseInt(document.getElementById("schedulerInterval").value,10);if(!b||b<1||b>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let v=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(v)||v<-1||v>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let o=document.getElementById("schedulerCreateBtn");o&&(o.disabled=!0);try{let s=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:m,interval_sec:b,repeat_count:v})}),u=await s.json();s.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await d()):showToast(u.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(s){console.error("Scheduler create error:",s),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{o&&(o.disabled=!1)}}function N(m){return"msg"}function T(m){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[m]||"\u25C8"}function L(m){return m.next_run_at?new Date(m.next_run_at*1e3).getHours():new Date().getHours()}function I(m){if(m.next_run_at){let b=new Date(m.next_run_at*1e3);return String(b.getHours()).padStart(2,"0")+":"+String(b.getMinutes()).padStart(2,"0")}return"--:--"}function K(m){let b=m.id||"job",v=Array.isArray(m.messages)?m.messages.length:null;return"Job #"+b+(v!=null?" \xB7 "+v+" messages":"")}function _(m){let b=document.querySelector("[data-sch-timeline]");if(!b)return;let v=[],o=new Date().getHours();for(let u=0;u<24;u++){let t=u>=Math.max(0,o-1)&&u<=Math.min(23,o+2);v.push('<div class="admin-sch-timeline-hour'+(t?" is-peak":"")+'">'+String(u).padStart(2,"0")+"</div>")}let s=(m||[]).map(function(u){let t=N(u),n=T(t),a=u.state!=="paused";return'<div class="admin-sch-timeline-row'+(a?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+h(I(u))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+t+'">'+n+'</span><span class="admin-sch-evt-desc">'+h(K(u))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(a?" is-on":"")+'">'+ServerI18n.t(a?"uiOn":"uiOff")+"</span></div></div>"}).join("");b.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+v.join("")+"</div></div>"+(s||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+h(ServerI18n.t("noActiveJobs"))+"</div>"))}function g(m){let b=document.querySelector("[data-sch-calendar]");if(!b)return;let v=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],o=new Date,s=(o.getDay()+6)%7,u=new Date(o);u.setDate(o.getDate()-s);let t=v.map(function(a,i){let y=new Date(u);return y.setDate(u.getDate()+i),'<div class="admin-sch-calendar-day-head'+(i===s?" is-today":"")+'">'+h(a)+'<span class="date">'+y.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(a){return'<div class="admin-sch-calendar-cell">'+(a===s?(m||[]).slice(0,5).map(function(y){let k=N(y),S=T(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+h(I(y))+" "+S+"</span>"}).join(""):"")+"</div>"}).join("");b.innerHTML='<div class="admin-sch-calendar-head">'+t+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function d(){let m=document.getElementById("schedulerJobsList"),b=document.getElementById("schedulerJobsCount");if(m)try{let v=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!v.ok){m.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",b&&(b.textContent="\u2014");return}let o=await v.json();if(!Array.isArray(o.jobs)){m.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",b&&(b.textContent="\u2014");return}b&&(b.textContent=ServerI18n.t("schItemCount",{n:o.jobs.length})),_(o.jobs),g(o.jobs);let s=document.querySelector("[data-sch-meta]");if(s){let u=new Date().toISOString().slice(0,10);s.textContent=ServerI18n.t("schTodayMeta",{date:u,n:o.jobs.length})}if(o.jobs.length===0){m.innerHTML="";let u=window.AdminEmpty.render("scheduler");u.dataset.emptyKind="scheduler",m.appendChild(u);return}m.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+h(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+h(ServerI18n.t("schColInterval"))+"</span><span>"+h(ServerI18n.t("schColSent"))+"</span><span>"+h(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+o.jobs.map(R).join("")}catch(v){console.error("Scheduler fetch error:",v),m.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(m,b){try{let v=await csrfFetch("/admin/scheduler/"+encodeURIComponent(b),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),o=await v.json();v.ok?(showToast(b==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await d()):showToast(o.error||ServerI18n.t("actionFailed"),!1)}catch(v){console.error("Scheduler toggle error:",v),showToast(ServerI18n.t("actionFailed"),!1)}}async function r(m){try{let b=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),v=await b.json();b.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await d()):showToast(v.error||ServerI18n.t("cancelFailed"),!1)}catch(b){console.error("Scheduler cancel error:",b),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let m=document.getElementById("settings-grid");if(!m)return;m.insertAdjacentHTML("beforeend",`
      <details id="${f}" class="admin-dsp2-fold lg:col-span-2">
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
              <button type="button" id="schedulerAddMsg" class="admin-ui-action admin-sch-add-msg">+ ${h(ServerI18n.t("addMessageBtn"))}</button>
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
                <button type="button" id="schedulerCreateBtn" class="admin-ui-action is-primary admin-sch-create-btn">${h(ServerI18n.t("createBtn"))}</button>
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
            ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(ServerI18n.t("loadingJobs"))}
          </div>
        </div>
        </div>
      </details>
    `);let b=document.querySelectorAll("[data-sch-view]");b.forEach(t=>{t.addEventListener("click",()=>{let n=t.dataset.schView;b.forEach(y=>{y.classList.toggle("is-active",y===t),y.setAttribute("aria-selected",y===t?"true":"false")});let a=document.querySelector("[data-sch-timeline]"),i=document.querySelector("[data-sch-calendar]");a&&(a.hidden=n!=="timeline"),i&&(i.hidden=n!=="calendar")})}),D("","#ffffff",48);let v=document.getElementById("schedulerMessages");v&&v.addEventListener("click",function(t){let n=t.target.closest(".scheduler-remove-msg");n&&C(n)});let o=document.getElementById("schedulerAddMsg");o&&o.addEventListener("click",function(){D("","#ffffff",48)});let s=document.getElementById("schedulerCreateBtn");s&&s.addEventListener("click",w);let u=document.getElementById("schedulerJobsList");u&&u.addEventListener("click",function(t){let n=t.target.closest(".scheduler-job-toggle");if(n){l(n.dataset.jobId,n.dataset.action);return}let a=t.target.closest(".scheduler-job-cancel");a&&r(a.dataset.jobId)}),x&&(clearInterval(x),x=null),F||(F=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(f)},intervalMs:c,tick:d}),window.addEventListener("beforeunload",function(){F&&(F(),F=null)}))}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let m=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(f)&&!m){m=!0;try{e()}finally{m=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var sn=ye(()=>{(function(){"use strict";let h="admin-security-v2-page";var f=window.AdminUtils.escapeHtml;let c=null,x=!1,F=!1,A=0;function G(){let t=n=>ServerI18n.t(n);return`
        <div id="${h}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${t("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${t("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${t("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2PwRowLabel")}
              <span class="sub">${t("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${t("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${t("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${t("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${t("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${t("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${t("security2CardWsTokenTitle")}" placeholder="${t("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${t("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${t("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${t("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${t("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${t("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${t("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${t("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${t("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${t("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${t("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${t("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${t("security2WsAuthMigrationPrepare")}</li>
            <li>${t("security2WsAuthMigrationDesktop")}</li>
            <li>${t("security2WsAuthMigrationEnable")}</li>
            <li>${t("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${t("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${t("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${t("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${t("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${t("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2StatusLabel")}
              <span class="sub">${t("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${t("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2RevokeApiTokensTitle")}
              <span class="sub">${t("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${t("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2RevokeFireTokenTitle")}
              <span class="sub">${t("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${t("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2ResetWsTokenTitle")}
              <span class="sub">${t("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${t("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function R(t){if(!t)return 0;let n=0;t.length>=8&&n++,t.length>=12&&n++;let a=(/[a-z]/.test(t)?1:0)+(/[A-Z]/.test(t)?1:0)+(/\d/.test(t)?1:0)+(/[^\w]/.test(t)?1:0);return a>=2&&n++,a>=3&&n++,Math.min(4,n)}function P(t){let n=document.getElementById("sec2-pw-meter"),a=document.getElementById("sec2-pw-label");if(!n||!a)return;let i=R(t),y=[0,25,50,75,100],k=["","is-bad","is-warn","is-warn","is-good"],S=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=y[i]+"%",n.className=k[i],a.textContent=S[i]}async function M(t){t.preventDefault();let n=document.getElementById("sec2-pw-current").value,a=document.getElementById("sec2-pw-new").value,i=document.getElementById("sec2-pw-confirm").value;if(!n||!a||!i){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(a.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(a!==i){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let y=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:a,confirm_password:i})}),k=await y.json().catch(()=>({}));y.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),P(""),k.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(k.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(y){console.error("Password change error:",y),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let t=++A,n=document.getElementById("sec2-wsa-status");F=!0,C(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let a=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let i=await a.json();if(t!==A)return!1;c={require_token:!!i.require_token,token:i.token||""},document.getElementById("sec2-wsa-toggle").checked=!!i.require_token,document.getElementById("sec2-wsa-token").value=i.token||"",n.textContent=i.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(i.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,T();let y=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=y?new Date(parseInt(y,10)).toLocaleString():"\u2014",!0}catch{return t!==A||(c=null,C(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{t===A&&(F=!1,C(x||!c),x||T())}}function C(t){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=t}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",t)}function w(){return x||F||!c?!1:(x=!0,++A,C(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(x=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,C(F||!c),c&&!F){let t=document.getElementById("sec2-wsa-status");t.textContent=ServerI18n.t(c.require_token?"security2StatusEnabled":"security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(c.require_token?"is-active":""),T()}}function T(){if(x||F||!c)return;document.getElementById("sec2-wsa-disabled-warning").hidden=c.require_token;let t=document.getElementById("sec2-wsa-toggle").checked!==c.require_token||document.getElementById("sec2-wsa-token").value.trim()!==c.token;document.getElementById("sec2-wsa-draft-hint").hidden=!t}function L(t){return String(t||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function I(t){return String(t||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function K(t,n){let a=document.getElementById(t);a&&(a.textContent=n==null||n===""?"\u2014":String(n))}async function _(){try{let t=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(n.error||t.status);let a=n.ip_allowlist||{},i=n.cors||{},y=n.tls||{},k=!!a.enabled,S=Array.isArray(a.entries)?a.entries:[],B=document.getElementById("sec2-ip-dot"),j=document.getElementById("sec2-ip-status-chip"),J=document.getElementById("sec2-ip-toggle"),E=document.getElementById("sec2-ip-entries");B&&(B.classList.toggle("is-lime",k),B.classList.toggle("is-amber",!k)),j&&(j.textContent=k?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),j.className="admin-ui-chip admin-sec-status-chip "+(k?"is-active":"is-warn")),J&&(J.checked=k),E&&(E.value=S.join(`
`)),K("sec2-ip-current",a.current_ip||"\u2014"),K("sec2-ip-status-line",k?ServerI18n.t("security2IpStatusEnabled",{n:S.length}):ServerI18n.t("security2IpStatusDisabled"));let O=Array.isArray(i.origins)?i.origins:["*"],$=Array.isArray(i.methods)?i.methods:[],q=document.getElementById("sec2-cors-origins"),Y=document.getElementById("sec2-cors-credentials"),V=document.getElementById("sec2-cors-methods"),U=document.getElementById("sec2-cors-cred-dot");q&&(q.value=O.join(`
`)),Y&&(Y.checked=!!i.supports_credentials),V&&(V.value=$.join(", ")),U&&(U.classList.toggle("is-lime",!i.supports_credentials),U.classList.toggle("is-amber",!!i.supports_credentials)),K("sec2-cors-origins-line",O.join(", ")),K("sec2-cors-credentials-line",i.supports_credentials?"true":"false"),K("sec2-cors-methods-line",$.join(", "));let ee=y.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:y.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");K("sec2-hsts-status",ee)}catch(t){console.error("Security settings load error:",t);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function g(t){let n={};if(t==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:L(document.getElementById("sec2-ip-entries")?.value||"")};else if(t==="cors"){let a=L(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:a.length?a:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:I(document.getElementById("sec2-cors-methods")?.value||"")}}try{let a=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),i=await a.json().catch(()=>({}));if(!a.ok){window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await _()}catch(a){console.error("Security settings save error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function d(){if(x||F||!c)return;let t=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(t&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(w())try{let a=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:t,token:n})}),i=await a.json().catch(()=>({}));a.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function l(){if(!(x||F||!c||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&w())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),a=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(a.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function r(){let t=document.getElementById("sec2-wsa-token").value;if(!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function e(){let t=document.getElementById("sec2-wsa-token");t.type=t.type==="password"?"text":"password";let n=t.type==="text",a=document.getElementById("sec2-wsa-reveal");a.setAttribute("aria-pressed",String(n)),a.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),a.setAttribute("aria-label",a.textContent)}async function p(t){if(t==="reset-ws"&&(x||F||!c))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:i=>ServerI18n.t("security2ToastApiTokensRevoked",{n:i.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[t];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(t==="reset-ws"&&!w()))try{let i=await window.csrfFetch(n.url,{method:"POST"}),y=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(y.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(t==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(n.ok(y),!0)}catch(i){console.error("Security danger action error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{t==="reset-ws"&&N()}}function m(){let t=document.getElementById("sec2-session-self-line");if(t){let i=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),y=navigator.platform||navigator.userAgentData?.platform||"",k=i?i[0].split("/")[0]:"Browser";t.textContent=ServerI18n.t("security2SessionSelfLine",{browser:k,platform:y})}let n=document.getElementById("sec2-tls-dot"),a=document.getElementById("sec2-tls-status");if(n&&a){let i=location.protocol==="https:";n.classList.add(i?"is-lime":"is-crimson"),a.textContent=i?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function b(){let t=document.getElementById("sec2-pw-form");t&&t.addEventListener("submit",M);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",a=>P(a.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",d),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",r),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",e),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",T),document.getElementById("sec2-wsa-token")?.addEventListener("input",T),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>g("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>g("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(a=>{a.addEventListener("click",()=>{let i=document.querySelector(`[data-sec-disclosure="${a.dataset.secDisclose}"]`);i&&(i.hidden=!i.hidden,a.setAttribute("aria-expanded",i.hidden?"false":"true"),i.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(a=>{a.dataset.secBound!=="1"&&(a.dataset.secBound="1",a.addEventListener("click",()=>p(a.dataset.secDanger)))}),m(),D(),_()}function v(){}function o(){let t=document.querySelector(".admin-dash-grid"),n=document.getElementById(h);if(!t||!n)return;let a=t.dataset.activeRoute||"live",i=t.dataset.activeLeaf||a;n.style.display=a==="system"&&i==="security"?"":"none"}function s(){let t=document.getElementById("settings-grid");!t||document.getElementById(h)||(t.insertAdjacentHTML("beforeend",G()),b(),o())}function u(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let t=null;function n(){let i=document.querySelector(".admin-dash-grid");!i||t||(t=new MutationObserver(o),t.observe(i,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)?s():void 0,n(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{s(),n(),o()}),n(),s()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u()})()});var on=ye(()=>{(function(){"use strict";let h="admin-backup-v2-page";var f=window.AdminUtils.escapeHtml;function c(){let s=u=>ServerI18n.t(u);return`
      <div id="${h}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${s("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${s("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${s("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${s("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${s("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${s("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${s("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecSettingsSnap")}
              <span class="sub">${s("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${s("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${s("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${s("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${s("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${s("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreSettings")}
              <span class="sub">${s("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreFull")}
              <span class="sub">${s("backupFullPackRestoreNote")}</span>
              <span class="sub">${s("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecRestoreAssets")}
              <span class="sub">${s("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${s("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${s("backupApplyDisabledTitle")}">${s("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${s("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecClearHistory")}
              <span class="sub">${s("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${s("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${s("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("backupSecFactoryReset")}
              <span class="sub">${s("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${s("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function x(){try{let s=await fetch("/get_settings",{credentials:"same-origin"});if(!s.ok)throw new Error(s.status);let u=await s.json(),t=["password","token","secret","hash"],n={};Object.keys(u||{}).forEach(S=>{t.some(B=>S.toLowerCase().includes(B))||(n[S]=u[S])});let a=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:n},null,2)],{type:"application/json"}),i=URL.createObjectURL(a),y=new Date().toISOString().replace(/[:.]/g,"-"),k=document.createElement("a");k.href=i,k.download="danmu-settings-"+y+".json",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(s){console.error("Settings snapshot error:",s),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let F=null;function A(){F=null;let s=document.getElementById("bk2-settings-apply");s&&(s.disabled=!0,s.title=ServerI18n.t("backupApplyDisabledTitle"))}async function G(){let s=document.getElementById("bk2-settings-upload"),u=document.getElementById("bk2-settings-diff"),t=document.getElementById("bk2-settings-apply"),n=s&&s.files&&s.files[0];if(!n){A(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let a=await n.text(),i=JSON.parse(a),y=i.settings||i;if(!y||typeof y!="object"||Array.isArray(y))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let k=await fetch("/get_settings",{credentials:"same-origin"}),S=k.ok?await k.json():{},B=[];new Set([...Object.keys(S),...Object.keys(y)]).forEach(J=>{let E=JSON.stringify(S[J]),O=JSON.stringify(y[J]);E!==O&&(E===void 0?B.push("+ "+J+": "+O):O===void 0?B.push("- "+J+": "+E):B.push("~ "+J+": "+E+" \u2192 "+O))}),u.textContent=B.length?B.join(`
`):ServerI18n.t("backupNoDiff"),u.hidden=!1,F=y,t&&(t.disabled=!1,t.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:B.length}),!0)}catch(a){console.error("Dry-run error:",a),A(),u.textContent=ServerI18n.t("backupParseFailedDetail",{msg:a&&a.message?a.message:String(a)}),u.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function R(){let s=document.getElementById("bk2-settings-diff"),u=document.getElementById("bk2-settings-apply");if(!F){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let n=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:F})}),a=await n.json().catch(()=>({}));if(!n.ok){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(a.details||a,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(a.applied||[]).length+" settings"),F=null,u&&(u.disabled=!0,u.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(n){s&&(s.hidden=!1,s.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:n&&n.message?n.message:String(n)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function P(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let s=document.getElementById("bk2-factory-confirm"),u=document.getElementById("bk2-factory-reset");!s||!u||(s.addEventListener("input",()=>{let t=s.value.trim()==="reset";u.classList.toggle("is-ready",t),u.disabled=!t}),u.addEventListener("click",D))}async function D(){let s=document.getElementById("bk2-factory-confirm"),u=document.getElementById("bk2-factory-reset");if((s?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{u&&(u.disabled=!0);let n=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),a=await n.json().catch(()=>({}));if(!n.ok||!a.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),u&&(u.disabled=!1);return}s&&(s.value=""),u&&(u.classList.remove("is-ready"),u.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),T()}catch{u&&(u.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function C(){document.getElementById("bk2-settings-download")?.addEventListener("click",x),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",G),document.getElementById("bk2-settings-apply")?.addEventListener("click",R),document.getElementById("bk2-clear-history")?.addEventListener("click",P),document.getElementById("bk2-pack-export")?.addEventListener("click",L),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",r),document.getElementById("bk2-pack-apply")?.addEventListener("click",e),document.getElementById("bk2-assets-export")?.addEventListener("click",K),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",m),M(),T(),I()}let w=null,N=null;async function T(){let s=document.getElementById("bk2-pack-summary");if(s)try{let u=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!u.ok){s.textContent=ServerI18n.t("backupPreviewUnavailable");return}let t=await u.json(),n=(t.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:t.file_count||0,mb:n})}catch{s.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function L(){let s=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(s?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function I(){let s=document.getElementById("bk2-assets-summary");if(s)try{let u=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!u.ok){s.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let t=await u.json(),n=(t.total_bytes/(1024*1024)).toFixed(2);s.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:t.file_count||0,mb:n})}catch{s.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function K(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let _={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},g={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function d(s){return!s||!s.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(s.map(u=>{let t=u&&g[u.code];return"  "+u.path+" \u2014 "+(t?ServerI18n.t(t):u.reason)}))}function l(s){return(s||[]).map(u=>{let t=u&&_[u.code];return"  "+u.path+" \u2014 "+(t?ServerI18n.t(t):u.reason)})}async function r(){let u=document.getElementById("bk2-pack-upload")?.files?.[0];if(!u){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(u.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let t=new FormData;t.append("file",u);let n=document.getElementById("bk2-pack-diff"),a=document.getElementById("bk2-pack-apply");try{let i=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:t}),y=await i.json().catch(()=>({}));if(!i.ok||!y.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(y.errors||y,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),a&&(a.disabled=!0),w=null;return}if(n){n.hidden=!1;let k=[],S=y.manifest||{};k.push("manifest version: "+(S.version||"?")),k.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),y.credentials==="omitted"&&k.push(ServerI18n.t("backupCredentialsKept")),k.push(""),k.push("Will write "+(y.members?.length||0)+" files:"),(y.members||[]).forEach(B=>{k.push("  "+B.label+"/"+B.path.split("/").slice(1).join("/")+" ("+(B.size||0)+" B)")}),y.skipped?.length&&(k.push(""),k.push("Skipped "+y.skipped.length+" entries:"),k.push(...l(y.skipped))),k.push(...d(y.merged)),n.textContent=k.join(`
`)}w=u,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:y.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:i.message||""}),!1)}}async function e(){if(!w){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let u=new FormData;u.append("file",w);try{let n=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:u})).json().catch(()=>({})),a=document.getElementById("bk2-pack-diff");if(a){a.hidden=!1;let i=[];n.ok?(i.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),i.push(""),i.push("Applied "+(n.applied||0)+" files"),n.restart_required&&i.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),n.skipped?.length&&(i.push("Skipped "+n.skipped.length+" entries:"),i.push(...l(n.skipped))),i.push(...d(n.merged))):(i.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),n.restart_required&&i.push(ServerI18n.t("backupRestartRequired")),i.push(JSON.stringify(n.errors||n,null,2))),a.textContent=i.join(`
`)}if(n.ok){let i=n.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(i,{n:n.applied}),!0),w=null;let y=document.getElementById("bk2-pack-apply");y&&(y.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(t){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:t.message||""}),!1)}}async function p(){let u=document.getElementById("bk2-assets-upload")?.files?.[0];if(!u){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(u.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let t=new FormData;t.append("file",u);let n=document.getElementById("bk2-assets-diff"),a=document.getElementById("bk2-assets-apply");try{let i=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:t}),y=await i.json().catch(()=>({}));if(!i.ok||!y.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(y.errors||y,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),a&&(a.disabled=!0),N=null;return}if(n){n.hidden=!1;let k=[],S=y.manifest||{};k.push("manifest version: "+(S.version||"?")),k.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),k.push(""),k.push("Will write "+(y.members?.length||0)+" asset files:"),(y.members||[]).forEach(B=>{k.push("  "+B.path+" ("+(B.size||0)+" B)")}),y.skipped?.length&&(k.push(""),k.push("Skipped "+y.skipped.length+" entries:"),y.skipped.forEach(B=>k.push("  "+B.path+" \u2014 "+B.reason))),n.textContent=k.join(`
`)}N=u,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:y.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:i.message||""}),!1)}}async function m(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let u=new FormData;u.append("file",N);try{let n=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:u})).json().catch(()=>({})),a=document.getElementById("bk2-assets-diff");if(a){a.hidden=!1;let i=[];n.ok?(i.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),i.push(""),i.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&i.push("Skipped "+n.skipped.length+" (see above)")):(i.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),i.push(JSON.stringify(n.errors||n,null,2))),a.textContent=i.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:n.applied}),!0),N=null;let i=document.getElementById("bk2-assets-apply");i&&(i.disabled=!0),I()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(t){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:t.message||""}),!1)}}function b(){let s=document.querySelector(".admin-dash-grid"),u=document.getElementById(h);if(!s||!u)return;let t=s.dataset.activeLeaf||"dashboard";u.style.display=t==="backup"?"":"none"}function v(){let s=document.getElementById("settings-grid");!s||document.getElementById(h)||(s.insertAdjacentHTML("beforeend",c()),C(),b())}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&v(),b()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",b),document.addEventListener("admin-panel-rendered",()=>{v(),b()}),v()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var rn=ye(()=>{(function(){"use strict";let h="admin-broadcast-v2-page",f="/admin/broadcast/status",c="/admin/broadcast/toggle",x={mode:"live"},F=null,A=0,G=!1;async function R(){try{let v=await fetch(f,{credentials:"same-origin"});if(!v.ok)return!1;let o=await v.json();if(o&&(o.mode==="live"||o.mode==="standby"))return F=o.session||null,x=o,!0}catch{}return!1}async function P(){try{let v=await fetch("/overlay_status",{credentials:"same-origin"});v.ok&&(A=(await v.json()).overlay_count||0,G=!0)}catch{}}async function M(){await Promise.all([R(),P()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:x.mode==="live",count:G?A:void 0}}))}async function C(v){try{let o=await window.csrfFetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:v})});if(!o.ok){let s=await o.json().catch(()=>({}));throw new Error(s&&s.error?s.error:`HTTP ${o.status}`)}return x=await o.json(),D(),!0}catch(o){return console.warn("[admin-broadcast] toggle failed:",o),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:o&&o.message||""}),!1),!1}}function w(v,o){return ServerI18n.t(v?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:o})}function N(v){return v?"broadcastBigPause":"broadcastBigResume"}async function T(v){let o=await C(v?"live":"standby");return o&&window.showToast&&window.showToast(ServerI18n.t(v?"broadcastToastResumed":"broadcastToastPaused"),!0),d(),o}async function L(){return await R(),P().then(D),T(x.mode!=="live")}async function I(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let o=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});o.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:o.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:T,toggleDisplay:L,clearScreen:I,statusText:w,toggleKey:N};function K(){let v=o=>ServerI18n.t(o);return`
      <div id="${h}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${N(!1)}">${v(N(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${v("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${v("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let _=0,g=0;function d(){let v=document.getElementById(h);if(!v)return;let o=x.mode==="live",s=o?"live":"standby",u=(S,B)=>{S&&S.textContent!==B&&(S.textContent=B)};v.dataset.bcState=s;let t=v.querySelector("[data-bc-statedot]");t&&(t.dataset.state=s);let n=v.querySelector("[data-bc-statelabel]");n&&(u(n,w(o,A)),n.dataset.state=s);let a=v.querySelector("[data-bc-big]");a&&(a.dataset.i18n=N(o),u(a,ServerI18n.t(a.dataset.i18n)));let i=F||{},y=!!(i.id||i.name),k=v.querySelector("[data-bc-session-ctx]");k&&(k.hidden=!y),y&&u(v.querySelector("[data-bc-session-id]"),String(i.name||i.id))}function l(){let v=document.getElementById(h);v&&(v.querySelector("[data-bc-big]")?.addEventListener("click",()=>T(x.mode!=="live")),v.querySelector("[data-bc-clear]")?.addEventListener("click",I))}function r(){_||(M().then(d),d(),_=setInterval(()=>{M().then(d)},5e3),g=setInterval(d,1e3))}function e(){_&&(clearInterval(_),_=0),g&&(clearInterval(g),g=0)}function p(){let v=document.querySelector(".admin-dash-grid"),o=document.getElementById(h);if(!v||!o)return;let s=v.dataset.activeLeaf||"dashboard",u=s==="overlay"||s==="broadcast";o.style.display=u?"":"none",u?r():e()}function m(){let v=document.getElementById("settings-grid");!v||document.getElementById(h)||(v.insertAdjacentHTML("afterbegin",K()),l(),p())}function b(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&m(),p()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",()=>{m(),p()}),m()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})()});var ln=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(z,ne){return window.ServerI18n?window.ServerI18n.t(z,ne):z}let c=["keyword","regex","rate_limit","fingerprint"],x={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},F=["block","replace","allow","review"],A={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},G={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},R={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},P=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function M(z){switch(z.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:z.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:z.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:z.action||"block"}}}function D(z,ne){return z==="keyword"?ne==="block"?"word":"keyword":z==="regex"?ne==="replace"?"replace":"regex":z}function C(z){return z==="permanent"||z==="session"?{lifetime:z}:z==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(z,10)}}function w(z){let ne=new Date(z*1e3),ae=ke=>String(ke).padStart(2,"0"),de=`${ae(ne.getHours())}:${ae(ne.getMinutes())}`,he=new Date;return ne.toDateString()===he.toDateString()?de:`${ne.getMonth()+1}/${ne.getDate()} ${de}`}function N(z){return z.lifetime==="session"?f("blkLifeSession"):z.lifetime==="timed"&&z.expires_at?f("blkLifeUntil",{time:w(z.expires_at)}):f("msgDrawerPermanent")}function T(z){return z.type==="rate_limit"?f("blkRateSummary",{n:z.max_count||5,s:z.window_sec||60}):z.type==="replace"?`${z.pattern}  \u2192  ${z.replacement||""}`:z.pattern}let L=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function I(z,ne){return ne.find(ae=>ae.type==="regex"&&ae.pattern===z.pattern&&ae.action===z.action)}let K=[],_="all",g=null,d=!1,l=new Set,r=0,e=0,p=!0;function m(z,ne,ae){return z.map(de=>`<option value="${h(de)}"${de===ae?" selected":""}>${h(ne(de))}</option>`).join("")}function b(){return`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(f("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${h(f("modAddWordPlaceholder"))}" aria-label="${h(f("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${h(f("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${h(f("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${h(f("blkMatchLabel"))}">
              ${m(c,z=>f(x[z]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${h(f("blkActionLabel"))}">
              ${m(F,z=>f(A[z]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${h(f("blkLifetimeLabel"))}">
              ${P.map(z=>`<option value="${z.value}">${h(f(z.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${h(f("fltColReplacement"))}" aria-label="${h(f("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${h(f("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${h(f("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${L.map(z=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${z.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${h(f(z.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(c).map(z=>`
              <button type="button" class="seg-item${z==="all"?" is-active":""}" data-scope="${z}">
                ${h(f(z==="all"?"fltChipAll":x[z]))}
                <span class="admin-block-scope-count" data-scope-count="${z}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${h(f("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${h(f("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${h(f("uiColPriority"))} \xB7 ${h(f("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${h(f("sampleText"))}" aria-label="${h(f("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${h(f("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${h(f("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`}function v(z){let ne=M(z),ae=h(z.id);return`
      <div class="hud-rule-row admin-block-row${z.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${h(z.type)}"
        style="${z.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${h(T(z))}</span>
        <span class="admin-block-row__meta">
          <span>${h(f(x[ne.match]))}</span>
          <span class="admin-block-row__action" data-action="${h(ne.action)}">${h(f(A[ne.action]||"fltActBlock"))}</span>
          <span>${h(N(z))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${h(z.enabled?f("enabled"):f("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${z.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${z.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${h(f("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${h(f("deleteRule"))}" aria-label="${h(f("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function o(){let z=document.getElementById("blockRuleList");if(!z)return;let ne={all:K.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};K.forEach(ke=>{ne[M(ke).match]+=1}),Object.keys(ne).forEach(ke=>{let $e=document.querySelector(`[data-scope-count="${ke}"]`);$e&&($e.textContent=String(ne[ke]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",K.length||"");let ae=K.filter(ke=>ke.lifetime==="session").length,de=document.getElementById("blockRuleClearSession");de&&(de.hidden=ae===0);let he=_==="all"?K:K.filter(ke=>M(ke).match===_);z.innerHTML=he.map(v).join(""),s(he.length===0),u()}function s(z){let ne=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!ne||!ae)&&(ne.hidden=z,ae.hidden=!z,ae.innerHTML="",!!z))if(window.AdminEmpty){let de=window.AdminEmpty.renderCustom({icon:"\u2298",title:f("blkEmpty"),accent:"var(--color-ink-error)"});de.dataset.emptyKind="filters",ae.appendChild(de)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${h(f("blkEmpty"))}</div>`}function u(){L.forEach(z=>{let ne=document.querySelector(`[data-flt-quick-id="${z.id}"]`);if(!ne)return;let ae=I(z,K),de=!!ae&&ae.enabled!==!1;ne.classList.toggle("is-active",de),ne.setAttribute("aria-pressed",de?"true":"false")})}let t=0;async function n(){let z=++t;try{let ne=await window.csrfFetch("/admin/filters/list");if(!ne.ok)throw new Error("HTTP "+ne.status);let ae=await ne.json();if(z!==t)return;K=Array.isArray(ae.rules)?ae.rules:[],p=ae.session_live!==!1}catch(ne){if(z!==t)return;console.error("Failed to fetch block rules:",ne),window.showToast(f("fetchFiltersFailed"),!1)}o(),a()}function a(){let z=i("blockRuleLifetime");if(!z)return;let ne=z.querySelector('option[value="session"]'),ae=p||!!(g&&g.lifetime==="session");ne&&(ne.hidden=!ae,ne.disabled=!ae),!ae&&z.value==="session"&&(z.value="permanent")}function i(z){return document.getElementById(z)}function y(){let z=i("blockRuleMatch").value,ne=i("blockRuleAction"),ae=G[z];Array.from(ne.options).forEach(de=>{de.disabled=ae.indexOf(de.value)===-1}),ae.indexOf(ne.value)===-1&&(ne.value=ae[0]),ne.disabled=ae.length===1,i("blockRuleInput").placeholder=f(R[z]),i("blockRuleReplacement").hidden=ne.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(de=>{de.hidden=z!=="rate_limit"})}function k(){let z=i("blockRuleMatch").value,ne=i("blockRuleAction").value,ae=i("blockRuleInput").value||"",de={type:D(z,ne),pattern:z==="regex"?ae:ae.trim(),action:ne,priority:parseInt(i("blockRulePriority").value,10)||0};return g&&g.type===de.type&&(de.type==="fingerprint"||de.type==="rate_limit")&&(de.action=g.action||ne),de.type==="replace"&&(de.replacement=i("blockRuleReplacement").value||""),de.type==="rate_limit"&&(de.max_count=parseInt(i("blockRuleMaxCount").value,10)||5,de.window_sec=parseFloat(i("blockRuleWindowSec").value)||60),Object.assign(de,C(i("blockRuleLifetime").value))}function S(z,ne){let ae=z&&z.code;return f(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":ne)}function B(){r+=1,g=null,i("blockRuleInput").value="",i("blockRuleReplacement").value="",i("blockRuleMatch").value="keyword",i("blockRuleAction").value="block";let z=i("blockRuleLifetime"),ne=z.querySelector('option[value="keep"]');ne&&ne.remove(),z.value="permanent",i("blockRulePriority").value="0",i("blockRuleSubmit").textContent=f("modAddWordBtn"),i("blockRuleCancel").hidden=!0,y(),a()}function j(z){r+=1,g=z;let ne=M(z);i("blockRuleMatch").value=ne.match,y(),i("blockRuleAction").value=ne.action,i("blockRuleInput").value=z.pattern||"",i("blockRuleReplacement").value=z.replacement||"",i("blockRuleMaxCount").value=String(z.max_count||5),i("blockRuleWindowSec").value=String(z.window_sec||60),i("blockRulePriority").value=String(z.priority||0);let ae=i("blockRuleLifetime"),de=ae.querySelector('option[value="keep"]');if(de&&de.remove(),z.lifetime==="timed"&&z.expires_at){let he=document.createElement("option");he.value="keep",he.textContent=N(z),ae.insertBefore(he,ae.firstChild),ae.value="keep"}else ae.value=z.lifetime==="session"?"session":"permanent";y(),a(),i("blockRuleSubmit").textContent=f("blkSave"),i("blockRuleCancel").hidden=!1,i("blockRuleInput").focus()}async function J(){if(d)return;let z=k();if(!z.pattern&&z.type!=="rate_limit"){window.showToast(f("patternRequired"),!1),i("blockRuleInput").focus();return}let ne=g,ae=r,de=()=>ae===r,he=ne?"/admin/filters/update":"/admin/filters/add",ke=ne?{rule_id:ne.id,updates:z}:z,$e=i("blockRuleSubmit"),pe=++e;d=!0,ne&&l.add(ne.id),$e&&($e.disabled=!0);try{let xe=await window.csrfFetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)}),Te=await xe.json().catch(()=>({}));if(ne&&xe.status===404){de()&&B(),await n(),window.showToast(f("blkErrGone"),!1);return}if(!xe.ok){window.showToast(S(Te,ne?"updateRuleFailed":"addRuleFailed"),!1);return}de()&&B(),await n(),ne?window.showToast(f("blkUpdated"),!0):window.AdminQuickAction&&Te.rule_id?window.AdminQuickAction.fire({label:f("blkAdded",{pattern:z.pattern||T(z)}),undo:{label:f("histUndo"),run:async()=>{if(!await E(Te.rule_id))throw new Error("remove failed")}}}):window.showToast(f("ruleAdded"),!0)}catch(xe){console.error("Save block rule error:",xe),window.showToast(f(ne?"updateRuleFailed":"addRuleFailed"),!1)}finally{ne&&l.delete(ne.id),pe===e&&(d=!1),$e&&($e.disabled=!1)}}async function E(z){let ne=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:z})});return ne.ok&&await n(),ne.ok}async function O(z){let ne=K.find(de=>de.id===z);if(await window.HudConfirm?.open({icon:"\u2298",title:f("filtersDeleteTitle"),severity:"danger",bodyText:ne?T(ne):"",confirmLabel:f("filtersDeleteConfirm")}))try{await E(z)?(g&&g.id===z&&B(),window.showToast(f("ruleDeleted"),!0)):window.showToast(f("deleteRuleFailed"),!1)}catch(de){console.error("Delete block rule error:",de),window.showToast(f("deleteRuleFailed"),!1)}}let $={};async function q(z,ne){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:z,updates:{enabled:ne}})}),de=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(S(de,"updateRuleFailed"),!1),!1;let he=K.find(ke=>ke.id===z);return he&&(he.enabled=ne),u(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(f("updateRuleFailed"),!1),!1}}function Y(z,ne){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ke=>ke.dataset.ruleId===z);if(!ae)return;let de=ae.querySelector(".filter-toggle-cb");de&&(de.checked=ne);let he=ae.querySelector(".admin-filter-toggle-dot");he&&(he.classList.toggle("is-on",ne),he.classList.toggle("is-off",!ne)),ae.classList.toggle("is-off",!ne),ae.style.opacity=ne?"":"0.45"}async function V(z,ne){let ae=$[z]||($[z]={want:ne,busy:!1});if(ae.want=ne,ae.busy)return null;ae.busy=!0;try{let de;do if(de=ae.want,!await q(z,de))return await n(),!1;while(ae.want!==de);return Y(z,de),!0}finally{delete $[z]}}async function U(){let z=K.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:f("blkClearSessionTitle"),severity:"danger",bodyText:f("blkClearSessionBody",{n:z}),confirmLabel:f("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),de=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(f("blkClearedSession",{n:de.removed||0}),!0),await n()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(f("deleteRuleFailed"),!1)}}async function ee(z){let ne=L.find(he=>he.id===z);if(!ne)return;let ae=f(ne.key),de=I(ne,K);if(de&&de.enabled===!1){await V(de.id,!0)&&(window.showToast(f("filtersToastEnabled",{label:ae}),!0),await n());return}if(de){let he=await E(de.id).catch(()=>!1);window.showToast(he?f("filtersToastDisabled",{label:ae}):f("filtersToastDisableFailed"),he);return}try{let he=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:ne.pattern,action:ne.action,priority:50,lifetime:p?"session":"permanent"})});if(!he.ok){let ke=await he.json().catch(()=>({}));window.showToast(f("filtersToastEnableFailed",{msg:S(ke,"addRuleFailed")}),!1);return}window.showToast(f("filtersToastEnabled",{label:ae}),!0),await n()}catch{window.showToast(f("filtersToastEnableFailed",{msg:""}),!1)}}async function W(){let z=i("filterTestText"),ne=i("filterTestResult"),ae=(z.value||"").trim();if(!ae){window.showToast(f("sampleTextRequired"),!1),z.focus();return}let de=k();if(!de.pattern&&de.type!=="rate_limit"){window.showToast(f("patternRequired"),!1),i("blockRuleInput").focus();return}ne.textContent=f("testing");try{let he=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:de,text:ae})}),ke=await he.json().catch(()=>({}));if(!he.ok){ne.textContent=S(ke,"testError");return}let $e={block:f("blocked"),replace:f("replaced"),allow:f("allowed"),review:f("fltActReview")}[ke.action]||f("noMatch");ne.dataset.verdict=ke.action||"pass",ne.textContent=ke.action==="replace"?`${$e} \u2192 ${ke.text||""}`:$e}catch(he){console.error("Test block rule error:",he),ne.textContent=f("testError")}}let Q=6,te=[],ie=0,le=null;function ue(z){let ne=new Date(z*1e3),ae=de=>String(de).padStart(2,"0");return`${ae(ne.getHours())}:${ae(ne.getMinutes())}:${ae(ne.getSeconds())}`}let me={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function Ie(){let z=i("filterLiveLog");if(z){if(te.length===0){z.innerHTML=`<div class="admin-block-empty">${h(f("fltNoEvents"))}</div>`;return}z.innerHTML=te.map(ne=>{let ae=String(ne.action||"").toUpperCase(),de=me[ae]?f(me[ae]):ae,he=String(ne.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${h(ae)}">
        <span class="admin-filter-log-row__time">${h(ue(ne.ts))}</span>
        <span class="admin-filter-log-row__action">${h(de)}</span>
        <span class="admin-filter-log-row__text">\u300C${h(ne.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${h(f("blkLogRule",{pattern:ne.pattern||""}))}${he?" \xB7 "+h(he):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let z=await fetch(`/admin/filters/events?since=${ie}`,{credentials:"same-origin"});if(!z.ok)return;let ne=await z.json();if(!Array.isArray(ne.events)||ne.events.length===0)return;for(te.unshift(...ne.events);te.length>Q;)te.pop();ie=ne.latest_seq||ie,Ie()}catch{}}function Le(z){i("blockRuleMatch").addEventListener("change",y),i("blockRuleAction").addEventListener("change",y),i("blockRuleSubmit").addEventListener("click",J),i("blockRuleCancel").addEventListener("click",B),i("blockRuleInput").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),J())}),i("filterTestBtn").addEventListener("click",W),i("filterTestText").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),W())}),i("blockRuleClearSession").addEventListener("click",U),z.querySelector("[data-flt-quick]").addEventListener("click",de=>{let he=de.target.closest("[data-flt-quick-id]");he&&ee(he.dataset.fltQuickId)});let ne=i("blockRuleScope");ne.addEventListener("click",de=>{let he=de.target.closest("[data-scope]");he&&(_=he.dataset.scope,ne.querySelectorAll("[data-scope]").forEach(ke=>ke.classList.toggle("is-active",ke===he)),o())});let ae=i("blockRuleList");ae.addEventListener("change",de=>{let he=de.target.closest(".filter-toggle-cb");if(!he)return;V(he.dataset.ruleId,he.checked);let ke=he.closest(".admin-block-row"),$e=ke?.querySelector(".admin-filter-toggle-dot");$e&&($e.classList.toggle("is-on",he.checked),$e.classList.toggle("is-off",!he.checked)),ke&&(ke.style.opacity=he.checked?"":"0.45")}),ae.addEventListener("click",de=>{let he=de.target.closest(".filter-delete-btn");if(he)return O(he.dataset.ruleId);let ke=de.target.closest(".block-rule-edit");if(ke){let $e=K.find(pe=>pe.id===ke.dataset.ruleId);$e&&!l.has($e.id)&&j($e)}}),le&&le(),le=window.AdminUtils.pollWhileVisible({el:()=>i("filterLiveLog"),intervalMs:4e3,tick:Ee})}function re(){let z=document.getElementById("settings-grid");if(!z)return;g=null,_="all",d=!1,e+=1,r+=1,z.insertAdjacentHTML("beforeend",b());let ne=document.getElementById("sec-blacklist");Le(ne),y(),Ie(),n()}let oe=!1;document.addEventListener("admin-route-applied",z=>{let ne=!!(z.detail&&z.detail.route==="moderation"&&z.detail.leaf==="blacklist");ne&&!oe&&document.getElementById("blockRuleList")&&n(),oe=ne});function ce(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let z=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{z()&&re()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()&&re()}window.AdminBlockRules={viewOf:M,typeFor:D,lifetimePayload:C,ACTIONS_FOR_MATCH:G,QUICK:L,refresh:n},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce()})()});var dn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.loadDetailsState,f=window.AdminUtils.saveDetailsState,c=window.AdminUtils.escapeHtml,x=1e4,F=null;function A(L){var I=h();return I[L]!==void 0?I[L]:!1}function G(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${c(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${c(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${c(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${c(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${c(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function R(L){var I=ServerI18n.t("fingerprintState_"+L),K="";return L==="blocked"?K=" is-crimson":L==="flagged"?K=" is-amber":L==="active"?K=" is-cyan":K=" is-mute",'<span class="admin-fp-state'+K+'">'+c(I)+"</span>"}function P(L){if(!L)return"\u2014";try{var I=new Date(L*1e3);return I.toLocaleTimeString()}catch{return String(L)}}function M(L){var I=document.getElementById("adminFingerprintTableWrap");if(I){if(!L||L.length===0){I.innerHTML="";var K=window.AdminEmpty.render("audience");K.dataset.emptyKind="fingerprints",I.appendChild(K);return}var _='<div class="admin-fp-row admin-fp-row--head"><span>'+c(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+c(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+c(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+c(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+c(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+c(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+c(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+c(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",g=L.map(function(d){var l=d.blocked|0,r=d.hash||"",e=r.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+c(r)+'"><span class="admin-fp-hash admin-identity-fp" title="'+c(r)+'">fp:'+c(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+c(d.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+c(d.ua||"")+'">'+c(d.ua||"\u2014")+'</span><span class="admin-fp-num">'+(d.msgs|0)+'</span><span class="admin-fp-num">'+(d.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+R(d.state||"active")+'</span><span class="admin-fp-ts">'+c(P(d.last_seen))+"</span></div>"}).join("");I.innerHTML=_+g}}async function D(){var L=document.getElementById("adminFingerprintCount");try{var I=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var K=await I.json(),_=K.records||[];if(M(_),L){var g=K.count||_.length,d=K.flagged!=null?K.flagged:_.filter(function(r){return r.state==="flagged"||r.state==="blocked"}).length;L.textContent=ServerI18n.t("fpCountSummary",{unique:g,flagged:d})}}catch(r){console.error("[admin-fingerprints] fetch failed:",r);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+c(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function C(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var I=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(I.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var K=await I.json().catch(function(){return{}});window.showToast(K.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(_){console.error("[admin-fingerprints] reset error:",_),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function w(){N(),F=setInterval(function(){var L=document.getElementById("sec-fingerprints");L&&L.offsetParent!==null&&D()},x)}function N(){F&&(clearInterval(F),F=null)}function T(){var L=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(L){L.insertAdjacentHTML("beforeend",G());var I=document.getElementById("adminFingerprintRefreshBtn");I&&I.addEventListener("click",D);var K=document.getElementById("adminFingerprintResetBtn");K&&K.addEventListener("click",C),D(),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var L=new MutationObserver(function(){var K=document.getElementById("moderation-grid")||document.getElementById("settings-grid");K&&!document.getElementById("sec-fingerprints")&&T()});L.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");I&&!document.getElementById("sec-fingerprints")&&T()}})})()});var cn=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.escapeHtml;let f=(o,s)=>{let u=window.ServerI18n?.t?.(o);return u&&u!==o?u:s||o},c=!1;new MutationObserver(()=>{let o=document.getElementById("settings-grid");if(o&&!(document.getElementById("sec-widgets")||c)){c=!0;try{F(o)}finally{c=!1}}}).observe(document.body,{childList:!0,subtree:!0});function F(o){let s=document.createElement("div");s.id="sec-widgets",s.className="admin-widgets-page hud-page-stack lg:col-span-2";let u=location.origin+"/overlay";s.dataset.tpl="B",s.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(f("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${h(f("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${h(f("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${h(f("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${h(f("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${h(f("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${h(f("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${h(f("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${h(f("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${h(f("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${h(f("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${h(u)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${h(f("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${h(f("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,o.appendChild(s);let t=document.getElementById("widget-add"),n=s.querySelector("[data-ow-addmenu]");t.addEventListener("click",a=>{a.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",a=>{let i=a.target.closest("[data-ow-add]")?.dataset.owAdd;i&&(n.hidden=!0,R(i))}),document.addEventListener("click",a=>{!n.hidden&&!a.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",C),s.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let a=s.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(a).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),G()}async function A(o,s="GET",u=null){let t={method:s,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(u){let a=document.querySelector('meta[name="csrf-token"]');a&&(t.headers["X-CSRF-Token"]=a.content),t.body=JSON.stringify(u)}return(await fetch("/admin/widgets/"+o,t)).json()}async function G(){try{let o=await A("list");N(o.widgets||[])}catch(o){console.error("[admin-widgets] Load failed:",o)}}async function R(o){let s={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await A("create","POST",{type:o,config:s[o]||{}}),G()}catch(u){console.error("[admin-widgets] Create failed:",u)}}async function P(o){let s=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:s,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await A("delete","POST",{id:o}),G()}catch(t){console.error("[admin-widgets] Delete failed:",t)}}async function M(o,s){try{await A("update","POST",{id:o,config:s}),G()}catch(u){console.error("[admin-widgets] Update failed:",u)}}async function D(o,s,u){try{await A("score","POST",{id:o,team_index:s,delta:u}),G()}catch(t){console.error("[admin-widgets] Score update failed:",t)}}async function C(){let o=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:o,confirmLabel:ServerI18n.t("clearAll")}))try{await A("clear","POST",{}),G()}catch(u){console.error("[admin-widgets] Clear failed:",u)}}let w=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(o){let s=document.getElementById("widgets-list");if(s){if(s.innerHTML="",r(o),o.length===0){let u=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});u.dataset.emptyKind="widgets",s.appendChild(u);return}o.forEach(u=>{s.appendChild(_(u))})}}let T={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function L(o){return f("widgetPos_"+String(o||"top-left").replace("-","_"),o||"")}function I(o){let s=o.config||{},u="";o.type==="scoreboard"?u=(s.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):o.type==="ticker"?(u=(s.messages||[])[0]||"",u&&(u=`\u300C${u}\u300D`)):o.type==="label"&&(u=s.text?`\u300C${s.text}\u300D`:"");let t=L(o.position);return u?`${u} \xB7 ${t}`:t}function K(o){return o==="scoreboard"?f("widgetScoreboard"):o==="ticker"?f("widgetTicker"):o==="label"?f("widgetLabel"):o}function _(o){let s=document.createElement("div");s.className="admin-widget-card",o.visible!==!1&&s.classList.add("is-on");let u=document.createElement("button");u.type="button",u.className="admin-widget-summary",u.setAttribute("aria-expanded","false"),u.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+h(T[o.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+h(K(o.type))+'</span><span class="admin-widget-summary-text">'+h(I(o))+"</span>"+(o.visible===!1?'<span class="admin-widget-summary-off">'+h(f("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',s.appendChild(u);let t=document.createElement("div");t.className="admin-widget-card-body",t.hidden=!0,u.addEventListener("click",()=>{t.hidden=!t.hidden,u.setAttribute("aria-expanded",t.hidden?"false":"true"),s.classList.toggle("is-open",!t.hidden)});let n=v(f("widgetPosition"),w,o.position,k=>M(o.id,{position:k}));t.appendChild(n),o.type==="scoreboard"?e(t,o):o.type==="ticker"?p(t,o):o.type==="label"&&m(t,o);let a=document.createElement("div");a.className="admin-widget-card-actions";let i=document.createElement("button");i.type="button",i.className="admin-ui-action admin-widget-card-action",i.textContent=o.visible?f("widgetHide"):f("widgetShow"),i.addEventListener("click",()=>M(o.id,{visible:!o.visible})),a.appendChild(i);let y=document.createElement("button");return y.type="button",y.className="admin-ui-action is-danger admin-widget-card-action",y.textContent=f("remove"),y.addEventListener("click",()=>P(o.id)),a.appendChild(y),t.appendChild(a),s.appendChild(t),s}let g={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function d(o,s){let u="top-left",t=1/0;for(let[n,[a,i]]of Object.entries(g)){let y=o-a/2,k=s-i/2,S=y*y+k*k;S<t&&(t=S,u=n)}return u}function l(o){let s=o.config||{};return o.type==="scoreboard"?(s.teams||[]).map(u=>`${u.name} ${u.score}`).join("  ")||f("widgetScoreboard"):o.type==="ticker"?(s.messages||[])[0]||f("widgetTicker"):o.type==="label"?s.text||f("widgetLabel"):o.type}function r(o){let s=document.querySelector("[data-ow-stage]");if(s){if(s.innerHTML="",!o.length){s.innerHTML='<span class="admin-ow-stage-empty">'+h(f("widgetsStageEmpty"))+"</span>";return}o.forEach(u=>{let t=document.createElement("div");t.className="admin-ow-box is-"+(u.position||"top-left"),u.visible===!1&&t.classList.add("is-off"),t.dataset.owBox=u.id,t.draggable=!0,t.textContent=l(u),t.title=K(u.type),t.addEventListener("dragend",n=>{let a=s.getBoundingClientRect();if(!a.width||!a.height)return;let i=(n.clientX-a.left)/a.width,y=(n.clientY-a.top)/a.height;if(i<0||i>1||y<0||y>1)return;let k=d(i,y);k!==u.position&&M(u.id,{position:k})}),s.appendChild(t)})}}function e(o,s){let u=s.config||{},t=b(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",u.title||"",n=>M(s.id,{title:n}));o.appendChild(t),(u.teams||[]).forEach((n,a)=>{let i=document.createElement("div");i.className="admin-widget-team";let y=document.createElement("input");y.type="color",y.value=n.color||"#38bdf8",y.className="admin-widget-team-color",y.addEventListener("change",()=>{let J=[...u.teams];J[a]={...J[a],color:y.value},M(s.id,{teams:J})}),i.appendChild(y);let k=document.createElement("input");k.type="text",k.value=n.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let J=[...u.teams];J[a]={...J[a],name:k.value},M(s.id,{teams:J})}),i.appendChild(k);let S=document.createElement("span");S.className="admin-widget-team-score",S.textContent=n.score,i.appendChild(S);let B=document.createElement("button");B.type="button",B.className="admin-widget-step",B.textContent="\u2212",B.addEventListener("click",()=>D(s.id,a,-1)),i.appendChild(B);let j=document.createElement("button");j.type="button",j.className="admin-widget-step",j.textContent="+",j.addEventListener("click",()=>D(s.id,a,1)),i.appendChild(j),o.appendChild(i)})}function p(o,s){let u=s.config||{},t=document.createElement("div");t.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",t.appendChild(n);let a=document.createElement("input");a.type="range",a.min="10",a.max="200",a.value=u.speed||60,a.style.flex="1",a.addEventListener("change",()=>{M(s.id,{speed:parseInt(a.value)})}),t.appendChild(a);let i=document.createElement("span");i.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",i.textContent=a.value,a.addEventListener("input",()=>{i.textContent=a.value}),t.appendChild(i),o.appendChild(t);let y=document.createElement("div");y.className="admin-widget-row",y.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",y.appendChild(k);let S=document.createElement("textarea");S.className="admin-widget-textarea",S.value=(u.messages||[]).join(`
`),S.rows=3,S.placeholder=ServerI18n.t("widgetTickerPlaceholder"),S.addEventListener("change",()=>{let B=S.value.split(`
`).filter(j=>j.trim());M(s.id,{messages:B})}),y.appendChild(S),o.appendChild(y)}function m(o,s){let u=s.config||{};o.appendChild(b(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",u.text||"",t=>M(s.id,{text:t}))),o.appendChild(b(window.ServerI18n?.t?.("size")||"SIZE",String(u.fontSize||24),t=>M(s.id,{fontSize:parseInt(t)||24}),"number"))}function b(o,s,u,t="text"){let n=document.createElement("div");n.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=o,n.appendChild(a);let i=document.createElement("input");return i.type=t,i.value=s,i.className="admin-widget-input",i.addEventListener("change",()=>u(i.value)),n.appendChild(i),n}function v(o,s,u,t){let n=document.createElement("div");n.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=o,n.appendChild(a);let i=document.createElement("select");return i.className="admin-widget-select",s.forEach(y=>{let k=document.createElement("option");k.value=y,k.textContent=y,y===u&&(k.selected=!0),i.appendChild(k)}),i.addEventListener("change",()=>t(i.value)),n.appendChild(i),n}})})()});var un=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let h=["live","polls","moderation","viewer","widgets","effects","assets","system","history","notifications","audience","overlay","about"];function f(){let E=window.ADMIN_ROUTES||{},O={};return h.forEach($=>{let q=E[$];q&&q.title&&(O[$]={title:q.title,kicker:q.kicker||$.toUpperCase()})}),O}let c=[{labelKey:"styleThemePacks",route:"viewer/themes",section:"sec-themes"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer/defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerTheme",route:"viewer/page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerLimits",route:"viewer/limits",section:"sec-viewer-config-limits"},{labelKey:"overlayLayoutFoldTitle",route:"overlay",section:"sec-overlay-layout"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],x=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function F(){let E=document.querySelector('meta[name="csrf-token"]');return E&&E.content||""}function A(E,O){if(typeof window.csrfFetch=="function")return window.csrfFetch(E,O);let $=Object.assign({credentials:"same-origin"},O||{}),q=new Headers(O&&O.headers||{});return q.set("X-CSRF-Token",F()),$.headers=q,fetch(E,$)}function G(E,O){typeof window.showToast=="function"&&window.showToast(E,O!==!1)}let R=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>A("/effects/reload",{method:"POST"}).then(E=>G(E.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),E.ok)).catch(()=>G(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>A("/admin/poll/reset",{method:"POST"}).then(E=>G(E.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),E.ok)).catch(()=>G(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return A("/admin/history/clear",{method:"POST"}).then(O=>G(O.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),O.ok)).catch(()=>G(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],P=null,M=null,D=null,C="",w=[],N=[],T=0,L=null,I=null,K=null,_=15e3;function g(E){return String(E??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O])}function d(E,O){if(!O)return 0;let $=String(E||"").toLowerCase(),q=O.toLowerCase(),Y=0,V=0,U=0,ee=0;for(;Y<$.length&&V<q.length;)$[Y]===q[V]?(V++,ee++,U+=2+ee):ee=0,Y++;return V<q.length?-1:($.startsWith(q)&&(U+=10),U)}function l(){let E=document.createElement("div");E.className="admin-cmdk",E.setAttribute("hidden",""),E.setAttribute("aria-hidden","true"),E.innerHTML=`
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
    `,document.body.appendChild(E),P=E,M=E.querySelector(".admin-cmdk-input"),D=E.querySelector(".admin-cmdk-list"),E.addEventListener("click",O=>{O.target.matches("[data-cmdk-close]")&&j()}),M.addEventListener("input",O=>{C=O.target.value,y()}),M.addEventListener("keydown",r),D.addEventListener("click",O=>{let $=O.target.closest("[data-cmdk-idx]");$&&(T=parseInt($.dataset.cmdkIdx,10)||0,p())})}function r(E){if(E.key==="Escape"){E.preventDefault(),j();return}if(E.key==="ArrowDown"){E.preventDefault(),e(1);return}if(E.key==="ArrowUp"){E.preventDefault(),e(-1);return}if(E.key==="Enter"){E.preventDefault(),p();return}}function e(E){if(!w.length)return;T=(T+E+w.length)%w.length,S();let O=D.querySelector(`[data-cmdk-idx="${T}"]`);O&&O.scrollIntoView({block:"nearest"})}function p(){let E=w[T];if(E){if(E.type==="route")window.location.hash="#/"+E.route,j();else if(E.type==="setting")window.location.hash="#/"+E.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let O=document.getElementById(E.section);O&&(O.scrollIntoView({behavior:"smooth",block:"start"}),O.tagName==="DETAILS"&&!O.open&&(O.open=!0))},80),j();else if(E.type==="message")window.location.hash="#/messages",j();else if(E.type==="user")window.location.hash="#/system",setTimeout(()=>{let O=document.getElementById("sec-fingerprints");O&&O.scrollIntoView({behavior:"smooth",block:"start"})},80),j();else if(E.type==="theme"){let O=window.AdminThemes;(O&&O.activate?O.activate(E.id):Promise.resolve({ok:!1})).then($=>{$.ok?(G(ServerI18n.t("cmdkThemeApplied",{name:E.label}),!0),K=null):G(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>G(ServerI18n.t("cmdkThemeApplyFailed"),!1)),j()}else if(E.type==="action"){try{let O=E.action&&E.action();O&&typeof O.then=="function"&&O.catch(()=>{})}catch{}j()}}}let m={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function b(E){return Object.entries(f()).map(([O,$])=>{let q=Math.max(d($.title,E),d(O,E)),Y=m[O];return{type:"route",route:O,label:$.title,sub:Y?ServerI18n.t(Y):"",icon:"\u25C7",score:q}}).filter(O=>O.score>=0)}function v(E){let O=f()[E];if(!O)return"";let $="adminRouteTitle_"+E,q=ServerI18n.t($);return q!==$?q:O.title}function o(E){return c.map(O=>{let $=O.labelKey?ServerI18n.t(O.labelKey):O.label;return{type:"setting",route:O.route,tab:O.tab,section:O.section,label:v(O.route.split("/")[0])?`${v(O.route.split("/")[0])} \u203A ${$}`:$,sub:"",icon:"\u2699",score:d($,E)}}).filter(O=>O.score>=0)}function s(E){return L?(L.records||[]).map($=>{let q=$.text||$.message||"",Y=$.nickname||$.user||"guest",V=($.timestamp||"").slice(11,19)||"\u2014",U=($.fingerprint||$.fp||"").slice(0,8);return{type:"message",label:`${q}  \xB7  @${Y}`,sub:U?`${V} \xB7 fp:${U}`:V,icon:"\u{1F4AC}",score:Math.max(d(q,E),d(Y,E))}}).filter($=>$.score>=0):[]}function u(E){if(!K)return[];let O=K.records||[],$=K.active||"";return O.map(q=>{let Y=q.label||q.display_name||q.name||"",V=q.description||ServerI18n.t("cmdkThemeDefaultDesc"),U=q.name===$;return{type:"theme",id:q.name,label:U?ServerI18n.t("cmdkThemeActive",{name:Y}):Y,sub:V,icon:"\u{1F3A8}",score:Math.max(d(Y,E),d(q.name||"",E),d(V,E))}}).filter(q=>q.score>=0)}function t(E){return R.map(O=>{let $=ServerI18n.t(O.labelKey),q=O.subKey?ServerI18n.t(O.subKey):O.sub;return{type:"action",id:O.id,label:$,sub:q,icon:"\u26A1",action:O.action,score:Math.max(d($,E),d(O.id,E),d(q,E))}}).filter(O=>O.score>=0)}function n(E){return I?(I.records||[]).map($=>{let q=$.fingerprint||$.fp||$.id||"",Y=$.ip||$.last_ip||"",V=$.nickname||"";return{type:"user",label:V?`@${V}  \xB7  ${q.slice(0,12)}\u2026`:`${q.slice(0,12)}\u2026`,sub:`user \xB7 ${Y||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(d(q,E),d(Y,E),d(V,E))}}).filter($=>$.score>=0):[]}async function a(){let E=Date.now(),O=[];(!L||E-L.at>_)&&O.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then($=>$.ok?$.json():null).then($=>{L={at:E,records:$&&$.records||[]}}).catch(()=>{L={at:E,records:[]}})),(!I||E-I.at>_)&&O.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then($=>$.ok?$.json():null).then($=>{I={at:E,records:$&&$.records||[]}}).catch(()=>{I={at:E,records:[]}})),(!K||E-K.at>_)&&O.push(fetch("/admin/themes",{credentials:"same-origin"}).then($=>$.ok?$.json():null).then($=>{K={at:E,records:$&&$.themes||[],active:$&&$.active||""}}).catch(()=>{K={at:E,records:[],active:""}})),O.length&&await Promise.all(O)}let i={actions:5,pages:5,messages:4};async function y(){await a();let E=C.trim(),O={action:t(E),route:b(E),setting:o(E),theme:u(E),message:s(E),user:n(E)};w=[],N=[],x.forEach($=>{let q=$.types.reduce((Y,V)=>Y.concat(O[V]||[]),[]).sort((Y,V)=>V.score-Y.score).slice(0,i[$.id]||5);q.length&&(N.push({id:$.id,labelKey:$.labelKey,from:w.length,count:q.length}),w=w.concat(q))}),T=0,S()}function k(E){return E.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[E.type]||"\xB7"}function S(){if(!w.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let E=[];N.forEach(O=>{E.push(`<li class="admin-cmdk-group" role="presentation">${g(ServerI18n.t(O.labelKey))}</li>`);for(let $=O.from;$<O.from+O.count;$++){let q=w[$],Y=$===T;E.push(`
        <li class="admin-cmdk-row ${Y?"is-active":""}"
            data-cmdk-idx="${$}" role="option" aria-selected="${Y}">
          <span class="admin-cmdk-icon" aria-hidden="true">${g(k(q))}</span>
          <span class="admin-cmdk-label">${g(q.label)}</span>
          <span class="admin-cmdk-sub">${g(q.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${Y?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=E.join("")}function B(){P||l(),P.removeAttribute("hidden"),P.setAttribute("aria-hidden","false"),P.classList.add("is-open"),C="",M.value="",y(),setTimeout(()=>M.focus(),20)}function j(){P&&(P.setAttribute("hidden",""),P.setAttribute("aria-hidden","true"),P.classList.remove("is-open"))}function J(){return!!(P&&!P.hasAttribute("hidden"))}window.AdminCommandPalette={open:B,close:j,isOpen:J,toggle:()=>J()?j():B()}})()});var mn=ye(()=>{(function(){"use strict";let h="sec-sessions-overview";var f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},c={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function x(l){if(l=Number(l)||0,l<=0)return"\u2014";var r=Math.floor(l/3600),e=Math.floor(l%3600/60),p=l%60;return r>0?r+"h "+e+"m":e>0?e+"m":p+"s"}function F(l){if(!l)return"\u2014";try{var r=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return r.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function A(){return'<div id="'+h+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function G(){return'<div class="admin-sessions-th"><span>'+f(ServerI18n.t("sessionsColSession"))+"</span><span>"+f(ServerI18n.t("sessionsColMessages"))+"</span><span>"+f(ServerI18n.t("sessionsColViewers"))+"</span><span>"+f(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function R(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function P(){var l=document.getElementById("admin-sessions-table-body");if(l){if(c.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!c.sessions.length){l.innerHTML="";var r=window.AdminEmpty.render("sessions");r.dataset.emptyKind="sessions",l.appendChild(r);return}var e=c.sessions.map(function(p){var m=f(p.id||"");return'<div class="admin-sessions-tr'+(p.is_live?" is-live":"")+'" data-session-id="'+m+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(p.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+f(R(p))+'<span class="admin-sessions-td-sub">'+f(F(p.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(p.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(p.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+f(x(p.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+m+'">'+f(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=G()+e}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!c.exportId){l.hidden=!0,l.innerHTML="";return}var r=c.sessions.find(function(p){return p.id===c.exportId});if(!r){c.exportId=null,l.hidden=!0,l.innerHTML="";return}var e=M.map(function(p){return'<button type="button" class="admin-sx-export__seg'+(p.id===c.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+p.id+'" aria-pressed="'+(p.id===c.exportFormat?"true":"false")+'">'+f(ServerI18n.t(p.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+f(ServerI18n.t("sessionsExportTitle",{name:R(r)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+f(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(c.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+f(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+f(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+f(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+f(ServerI18n.t("sessionsDownloadBtn",{fmt:c.exportFormat.toUpperCase()}))+"</button></div>"}}function C(){if(c.exportId){var l="/admin/sessions/"+encodeURIComponent(c.exportId)+"/export?format="+encodeURIComponent(c.exportFormat)+"&include_pii="+(c.exportPii?"1":"0"),r=document.createElement("a");r.href=l,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove()}}async function w(){var l=c.exportId;if(l)try{var r=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);var e=await r.json(),p=(e.records||[]).slice(0,500);if(!p.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var m=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:p,speedMultiplier:1})});if(m.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){P(),D()}async function T(){c.loading=!0,P();try{var[l,r]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],p=[];if(l.ok){var m=await l.json();e=Array.isArray(m.sessions)?m.sessions:[],e.forEach(function(n){n._explicit=!0})}if(r.ok){var b=await r.json();p=Array.isArray(b.sessions)?b.sessions:[]}var v=e.slice(),o=new Set(e.map(function(n){return n.id}));p.forEach(function(n){o.has(n.id)||v.push(n)}),v.sort(function(n,a){var i=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),y=typeof a.started_at=="number"?a.started_at:Date.parse(a.started_at||0);return y-i});try{var s=await fetch("/admin/session/current",{credentials:"same-origin"});if(s.ok){var u=await s.json();if(u.status==="live"){var t=Object.assign({},u,{id:u.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});v.unshift(t)}}}catch{}c.sessions=v,c.total=v.length}catch(n){console.error("[admin-sessions] fetch error:",n),c.sessions=[],c.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{c.loading=!1,N()}}function L(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function I(l){c.exportId=l,D();var r=document.querySelector("[data-sessions-export]");r&&r.scrollIntoView({block:"nearest"})}function K(){var l=document.getElementById(h);l&&(l.addEventListener("click",function(r){var e=r.target.closest("[data-sessions-export-open]");if(e){r.stopPropagation(),I(e.dataset.sessionsExportOpen);return}if(r.target.closest("[data-sessions-export-close]")){c.exportId=null,D();return}var p=r.target.closest("[data-sessions-export-fmt]");if(p){c.exportFormat=p.dataset.sessionsExportFmt,D();return}if(r.target.closest("[data-sessions-replay]")){w();return}if(r.target.closest("[data-sessions-download]")){C();return}var m=r.target.closest(".admin-sessions-tr");m&&L(m.dataset.sessionId||null)}),l.addEventListener("change",function(r){var e=r.target.closest("[data-sessions-export-pii]");e&&(c.exportPii=!!e.checked)}),l.addEventListener("keydown",function(r){if(!(r.key!=="Enter"&&r.key!==" ")){var e=r.target.closest(".admin-sessions-tr");e&&(r.preventDefault(),L(e.dataset.sessionId||null))}}))}function _(){var l=document.querySelector(".admin-dash-grid"),r=document.getElementById(h);if(!(!l||!r)){var e=l.dataset.activeLeaf||"dashboard";r.style.display=e==="sessions"?"":"none"}}function g(){var l=document.getElementById("settings-grid");!l||document.getElementById(h)||(l.insertAdjacentHTML("beforeend",A()),K(),T(),_())}function d(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&g(),_()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",_),document.addEventListener("admin-panel-rendered",function(){g(),_()}),g()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var pn=ye(()=>{(function(){"use strict";let h="sec-session-detail-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},c={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},x=!1,F={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function A(){let k=window.location.hash||"",S=k.indexOf("?");if(S===-1)return null;let B=k.slice(S+1);return new URLSearchParams(B).get("id")||null}function G(k){if(!k)return"\u2014";try{let S=new Date(k);if(isNaN(S.getTime()))return String(k);let B=j=>String(j).padStart(2,"0");return`${S.getFullYear()}-${B(S.getMonth()+1)}-${B(S.getDate())} ${B(S.getHours())}:${B(S.getMinutes())}:${B(S.getSeconds())}`}catch{return String(k)}}function R(k){if(!k||k<0)return"\u2014";let S=Math.round(Number(k)),B=Math.floor(S/3600),j=Math.floor(S%3600/60),J=S%60;return B>0?`${B}h ${j}m ${J}s`:j>0?`${j}m ${J}s`:`${J}s`}function P(k,S){if(!k||!S)return"";try{let B=Math.max(0,Math.round((new Date(k)-new Date(S))/1e3)),j=Math.floor(B/60),J=B%60;return`+${String(j).padStart(2,"0")}:${String(J).padStart(2,"0")}`}catch{return""}}function M(k){let S=Number(k);return isNaN(S)?"\u2014":S.toLocaleString()}function D(k){if(!k)return"#64748b";let S=0;for(let j=0;j<k.length;j++)S=S*31+k.charCodeAt(j)>>>0;return`hsl(${S%360}, 60%, 60%)`}function C(){return`
      <div id="${h}" class="admin-sd-page hud-page-stack lg:col-span-2">
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
    `}async function w(k){if(!k){_(ServerI18n.t("sessionDetailErrMissingId"));return}K(!0);try{let S=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(S.status===404&&(S=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!S.ok)throw new Error(`HTTP ${S.status}`);let B=await S.json();c.session=B.session||null,c.records=B.records||[],c.density=B.density||[],K(!1),g(),N()}catch(S){K(!1),_(ServerI18n.t("sessionDetailErrLoadFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(c.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(c.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let S=await k.json();c.annotations=Array.isArray(S.annotations)?S.annotations:[],m()}catch{}}function T(){let k=c.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let S=k.started_at||k.start_time,B=k.ended_at||k.end_time;if(S&&B)try{return Math.max(0,new Date(B)-new Date(S))}catch{return 0}return c.density&&c.density.length?c.density.length*60*1e3:0}function L(k){let S=Date.parse(k||0);if(Number.isNaN(S))return"\u2014";let B=new Date(S),j=J=>String(J).padStart(2,"0");return`${j(B.getHours())}:${j(B.getMinutes())}:${j(B.getSeconds())}`}function I(k){let S=Math.floor(k/1e3),B=Math.floor(S/3600),j=Math.floor(S%3600/60),J=S%60,E=O=>String(O).padStart(2,"0");return B>0?`${E(B)}:${E(j)}:${E(J)}`:`${E(j)}:${E(J)}`}function K(k){c.loading=k;let S=document.querySelector("[data-sd-loading]"),B=document.querySelector("[data-sd-error]");S&&(S.hidden=!k),B&&k&&(B.hidden=!0);let j=document.querySelector("[data-sd-timeline-wrap]");if(j&&window.AdminSkeletons){let J=j.querySelector("[data-sd-timeline-skel]");k?(j.hidden=!1,J||(J=window.AdminSkeletons.chart(),J.setAttribute("data-sd-timeline-skel","1"),j.appendChild(J))):J&&J.remove()}}function _(k){c.error=k;let S=document.querySelector("[data-sd-error]"),B=document.querySelector("[data-sd-error-msg]");S&&(S.hidden=!1),B&&(B.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(j){let J=document.querySelector(`[${j}]`);J&&(J.hidden=!0)})}function g(){d(),l(),r(),p(),m();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function d(){let k=c.session,S=document.querySelector("[data-sd-session-header]");if(!S)return;S.hidden=!1;let B=document.querySelector("[data-sd-session-id]"),j=document.querySelector("[data-sd-meta-start]"),J=document.querySelector("[data-sd-meta-duration]"),E=document.querySelector("[data-sd-title]"),O=k&&(k.session_id||k.id)||c.sessionId||"\u2014";B&&(B.textContent=O),j&&(j.textContent=G(k&&(k.started_at||k.start_time))),J&&(J.textContent=R(k&&(k.duration_s||k.duration))),E&&(E.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(O).slice(-8)}))}function l(){let k=c.session;if(!k)return;let S=document.querySelector("[data-sd-kpis]");S&&(S.hidden=!1);let B=function(O,$,q){let Y=document.querySelector(`[data-sd-stat="${O}"]`);Y&&(Y.textContent=$);let V=document.querySelector(`[data-sd-stat-sub="${O}"]`);V&&(V.textContent=q||"")};B("msg_count",M(k.msg_count)),B("viewer_count",M(k.viewer_count));let j=Array.isArray(c.density)?c.density:[];if(j.length){let O=0,$=0;j.forEach(function(V,U){V>O&&(O=V,$=U)});let q=Date.parse(k.started_at||k.start_time||0),Y="";if(!Number.isNaN(q)){let V=new Date(q+$*6e4),U=ee=>String(ee).padStart(2,"0");Y=`${U(V.getHours())}:${U(V.getMinutes())}`}B("peak",M(O),Y)}else B("peak","\u2014","");let J=Number(k.blocked_count)||0;B("blocked",M(J));let E=document.querySelector("[data-sd-blocked-btn]");E&&(E.textContent=ServerI18n.t("sessionDetailStatBlocked")+(J?" "+J:""),E.disabled=J===0)}function r(){let k=document.querySelector("[data-sd-timeline-wrap]"),S=document.querySelector("[data-sd-timeline]"),B=document.querySelector("[data-sd-timeline-axis]"),j=document.querySelector("[data-sd-peak-label]");if(!k||!S||!B)return;let J=c.density;if(!J||J.length===0){k.hidden=!0;return}k.hidden=!1;let E=Math.max(1,...J),O=0;J.forEach(function(ee,W){ee>J[O]&&(O=W)});let $=J.map(function(ee,W){let Q=Math.max(2,Math.round(ee/E*100));return`<div class="admin-sd-bar${W===O?" is-peak":""}" style="height:${Q}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ee,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ee})}"></div>`}).join("");S.innerHTML=$;let q=c.session,Y=G(q&&(q.started_at||q.start_time)).slice(11,16)||"00:00",V=G(q&&(q.ended_at||q.end_time)).slice(11,16)||"",U=J.length>2?`+${Math.round(J.length/2)}min`:"";B.innerHTML=`
      <span class="admin-sd-axis-label">${f(Y)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${f(U)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${f(V)}</span>
    `,j&&(j.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:J[O],minute:O}))}function e(){let k=(c.msgQuery||"").trim().toLowerCase();return c.records.filter(function(S){let B=(S.status||"shown")==="blocked";return c.msgFilter==="blocked"&&!B?!1:k?String(S.text||"").toLowerCase().indexOf(k)!==-1||String(S.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function p(){let k=document.querySelector("[data-sd-msgs-wrap]"),S=document.querySelector("[data-sd-msgs-list]");if(!k||!S)return;if(!c.records.length){k.hidden=!0;return}k.hidden=!1;let B=e().slice(0,300);if(!B.length){S.innerHTML='<div class="admin-sd-msgs-empty">'+f(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}S.innerHTML=B.map(function(j){let J=(j.status||"shown")==="blocked",E=D(j.fingerprint||j.fp||""),O=L(j.timestamp||j.created_at),$=String(j.nickname||"").trim();return`
        <div class="admin-sd-msg-row${J?" is-blocked":""}">
          <span class="admin-sd-msg-time">${f(O)}</span>
          <span class="admin-sd-msg-dot" style="background:${E}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${f(j.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${f(ServerI18n.t("deliveryStatus_"+(j.status||"shown")))}
            ${j.delivery_reason?`<span class="admin-sd-msg-rule">${f(ServerI18n.t("deliveryReason_"+j.delivery_reason))}</span>`:""}
            ${J&&j.blockedBy?`<span class="admin-sd-msg-rule">${f(ServerI18n.t("sessionDetailBlockedBy",{rule:j.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${f($||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function m(){let k=c.annotations||[],S=T(),B=document.querySelector("[data-sd-ann-count]");B&&(B.textContent=k.length?`${k.length} ANNOTATIONS`:"");let j=document.querySelector("[data-sd-ann-head]");j&&(j.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let J=document.querySelector("[data-sd-ann-layer]");J&&(!S||k.length===0?J.innerHTML="":J.innerHTML=k.map(function($){let q=F[$.label]||F.note,Y=Math.min(100,Math.max(0,$.ts_ms/S*100)),V=$.id===c.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${q.shape}${V?" is-active":""}"
              data-sd-ann-marker="${f($.id)}"
              style="left:${Y.toFixed(2)}%;--ann-color:${q.color}"
              title="${f(q.label)} \xB7 ${I($.ts_ms)}"
              aria-label="${f(q.label)} at ${I($.ts_ms)}: ${f($.note||"")}">
              ${q.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${V?`<span class="admin-sd-ann-tip"><span style="color:${q.color}">${q.icon}</span> ${f(($.note||"").slice(0,40))}${($.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let E=document.querySelector("[data-sd-ann-legend]");E&&(E.innerHTML=Object.keys(F).map(function($){let q=F[$],Y=q.shape==="square"?"2px":q.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${q.color};border-radius:${Y}"></span>
          <span class="admin-sd-ann-legend-label">${q.label}</span>
        </span>`}).join(""));let O=document.querySelector("[data-sd-ann-list]");if(O){if(k.length===0){O.innerHTML="";let $=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});$.dataset.emptyKind="session-annotations",O.appendChild($);return}O.innerHTML=k.map(function($){let q=F[$.label]||F.note,Y=$.id===c.activeAnnId,U=($.note||"").length>80?($.note||"").slice(0,80)+"\u2026":$.note||"";return`
        <div class="admin-sd-ann-row${Y?" is-active":""}" data-sd-ann-row="${f($.id)}">
          <span class="admin-sd-ann-ts" style="color:${q.color}">${I($.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${q.color}">${q.icon} ${q.label}</span>
          <span class="admin-sd-ann-note">${f(U)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${f($.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function b(k){if(!c.sessionId)return;let S=window.HudConfirm;if(!S){let q=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:I(k)}),"");q!=null&&q.trim()&&v(k,"note",q.trim());return}let j="highlight",J="",E=document.createElement("div");E.className="admin-sd-ann-modal-body",E.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${I(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(F).map(function(q){let Y=F[q];return`
              <button type="button" class="admin-sd-ann-modal-lbl${q==="highlight"?" is-active":""}"
                data-ann-label="${q}" style="--ann-color:${Y.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${Y.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${Y.label}</span>
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
      </div>`,E.addEventListener("click",function(q){let Y=q.target.closest("[data-ann-label]");Y&&(j=Y.dataset.annLabel,E.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(V){V.classList.toggle("is-active",V===Y)}))});let O=E.querySelector("[data-ann-modal-note]"),$=E.querySelector("[data-ann-modal-counter]");O.addEventListener("input",function(){J=O.value,$.textContent=`${J.length} / 280`}),setTimeout(function(){O&&O.focus()},50),S.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:E,width:460}).then(function(q){q&&v(k,j,O.value.trim())})}async function v(k,S,B){if(c.sessionId)try{let j=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:c.sessionId,ts_ms:Math.max(0,Math.round(k)),label:S||"note",note:B||""})});if(!j.ok)throw new Error(`HTTP ${j.status}`);let J=await j.json();J.annotation&&(c.annotations.push(J.annotation),c.annotations.sort(function(E,O){return E.ts_ms-O.ts_ms}),c.activeAnnId=J.annotation.id,m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(j){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:j.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function o(k){if(k)try{let S=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!S.ok)throw new Error(`HTTP ${S.status}`);c.annotations=c.annotations.filter(function(B){return B.id!==k}),c.activeAnnId===k&&(c.activeAnnId=null),m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(S){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function s(k){let S=document.querySelector("[data-sd-timeline-inner]"),B=document.querySelector("[data-sd-ann-hover]");if(!S||!B)return;let j=S.getBoundingClientRect();if(!j.width)return;let J=k.clientX-j.left,E=Math.min(1,Math.max(0,J/j.width)),O=T();if(!O){B.hidden=!0;return}let $=Math.round(E*O);c.hoverTsMs=$,B.hidden=!1,B.style.left=`${(E*100).toFixed(2)}%`,B.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:I($)})}function u(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),c.hoverTsMs=null}function t(k){if(k.target.closest("[data-sd-ann-marker]"))return;let S=document.querySelector("[data-sd-timeline-inner]");if(!S)return;let B=S.getBoundingClientRect();if(!B.width)return;let j=k.clientX-B.left,J=Math.min(1,Math.max(0,j/B.width)),E=T();E&&b(Math.round(J*E))}async function n(){if(c.sessionId)try{let k=c.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let S=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(S.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function a(k,S){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")c.sessionId&&w(c.sessionId);else if(k==="export"){if(!c.sessionId)return;let B=document.createElement("a");B.href="/admin/sessions/"+encodeURIComponent(c.sessionId)+"/export?format=csv",B.rel="noopener",document.body.appendChild(B),B.click(),B.remove()}else if(k==="replay")n();else if(k==="add-annotation"){let B=T(),j=c.hoverTsMs!=null?c.hoverTsMs:Math.round(B/2);b(j)}}function i(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let S=A();if(!S){c.sessionId=null,_(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}c.sessionId=S,w(S)}function y(){let k=document.getElementById("settings-grid");if(!k)return;let S=document.getElementById(h);S||(k.insertAdjacentHTML("beforeend",C()),S=document.getElementById(h),m()),S&&S.dataset.sdBound!=="1"&&(S.dataset.sdBound="1",S.addEventListener("click",function(B){let j=B.target.closest("[data-sd-ann-del]");if(j){B.stopPropagation(),o(j.dataset.sdAnnDel);return}let J=B.target.closest("[data-sd-ann-marker]");if(J){B.stopPropagation(),c.activeAnnId=J.dataset.sdAnnMarker,m();let Y=document.querySelector(`[data-sd-ann-row="${c.activeAnnId}"]`);Y&&Y.scrollIntoView&&Y.scrollIntoView({block:"nearest",behavior:"smooth"});return}let E=B.target.closest("[data-sd-ann-row]");if(E){c.activeAnnId=E.dataset.sdAnnRow,m();return}if(B.target.closest("[data-sd-timeline-inner]")){t(B);return}let $=B.target.closest("[data-sd-action]");if($){B.preventDefault(),a($.dataset.sdAction,$);return}let q=B.target.closest("[data-sd-filter]");q&&(c.msgFilter=q.dataset.sdFilter,S.querySelectorAll("[data-sd-filter]").forEach(function(Y){Y.classList.toggle("is-active",Y===q)}),p())}),S.addEventListener("input",function(B){let j=B.target.closest("[data-sd-search]");j&&(c.msgQuery=j.value||"",p())}),S.addEventListener("mousemove",function(B){B.target.closest("[data-sd-timeline-inner]")&&s(B)}),S.addEventListener("mouseleave",function(B){B.target.closest&&B.target.closest("[data-sd-timeline-inner]")&&u()},!0)),c.sessionId=A(),c.sessionId?w(c.sessionId):_(ServerI18n.t("sessionDetailErrNoSessionSelected")),x||(x=!0,window.addEventListener("hashchange",i))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&y()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let S=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(h)&&S.indexOf("/session-detail")!==-1&&y(),window.addEventListener("admin-route-changed",function(B){(B&&B.detail&&B.detail.route)==="session-detail"&&y()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&y()})})})()});var fn=ye(()=>{(function(){"use strict";let h="sec-search-overview";var f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},c=20,x={query:"",scope:"session",blockedOnly:!1,who:"",shown:c,results:[],total:0,loading:!1,searched:!1},F=0;function A(){return'<div id="'+h+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+f(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+f(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+f(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+f(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+f(ServerI18n.t("searchWhoAria"))+'"><option value="">'+f(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+f(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+f(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function G(e){if(!e)return 200;for(var p=0,m=0;m<Math.min(e.length,6);m++)p=p*31+e.charCodeAt(m)&65535;return p%360}function R(e,p){if(!p||!e)return f(e||"");var m=f(e),b=f(p);try{var v=new RegExp("("+b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return m.replace(v,'<mark class="admin-search-hit">$1</mark>')}catch{return m}}function P(e){if(!e)return"\u2014";try{var p=new Date(e);return p.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function M(){var e=x.results;return x.blockedOnly&&(e=e.filter(function(p){return(p.status||"shown")==="blocked"})),x.who&&(e=e.filter(function(p){return(p.nickname||"")===x.who})),e}function D(){var e=document.getElementById("admin-search-count");if(e){if(!x.searched||!x.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function C(){var e=document.querySelector("[data-search-who]");if(e){var p=[];x.results.forEach(function(b){var v=(b.nickname||"").trim();v&&p.indexOf(v)===-1&&p.push(v)}),p.sort();var m=x.who;e.innerHTML='<option value="">'+f(ServerI18n.t("searchWhoAnyone"))+"</option>"+p.map(function(b){return'<option value="'+f(b)+'"'+(b===m?" selected":"")+">"+f(b)+"</option>"}).join("")}}function w(){var e=document.getElementById("admin-search-results"),p=document.getElementById("admin-search-empty-state"),m=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(t){t.remove()});var b=function(t){p&&(p.style.display="block",p.textContent=t),m&&(m.hidden=!0)};if(x.loading)return b(ServerI18n.t("searchSearching"));if(!x.searched)return b(ServerI18n.t("searchPromptStart"));var v=M();if(v.length===0)return b(ServerI18n.t("searchNoMatch"));p&&(p.style.display="none"),m&&(m.hidden=!1);var o=Math.min(v.length,x.shown),s=document.createDocumentFragment();if(v.slice(0,o).forEach(function(t){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+f(P(t.timestamp))+'</span><span class="admin-search-row__text">'+R(t.text||"",x.query)+'</span><span class="admin-search-row__nick">'+f((t.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+f(ServerI18n.t("deliveryStatus_"+(t.status||"shown")))+(t.delivery_reason?"<br>"+f(ServerI18n.t("deliveryReason_"+t.delivery_reason)):"")+"</span></span>",s.appendChild(n)}),e.appendChild(s),v.length>o){var u=document.createElement("button");u.type="button",u.className="admin-search-more",u.dataset.searchMore="1",u.textContent=ServerI18n.t("searchMoreLeft",{n:v.length-o}),e.appendChild(u)}}}function N(){D(),C(),w()}async function T(){var e=x.query.trim();if(!e){x.loading=!1,x.searched=!1,x.results=[],x.total=0,N();return}x.loading=!0,N();try{var p="/admin/search?q="+encodeURIComponent(e);if(x.scope==="session"){var m=await I();m&&(p+="&since="+encodeURIComponent(m))}var b=Date.now(),v=await fetch(p,{credentials:"same-origin"}),o=Date.now()-b;if(!v.ok)throw new Error("HTTP "+v.status);var s=await v.json();x.results=Array.isArray(s.results)?s.results:[],x.total=typeof s.total=="number"?s.total:x.results.length,x.shown=c}catch(u){console.error("[admin-search] fetch error:",u),x.results=[],x.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:u.message||""}),!1)}finally{x.loading=!1,x.searched=!0,N()}}var L=null;async function I(){if(L!==null)return L;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var p=await e.json();if(p.status==="live"&&p.started_at)return L=new Date(p.started_at*1e3).toISOString(),L}}catch{}return L="",""}function K(){clearTimeout(F),F=setTimeout(T,300)}function _(){if(x.results.length){var e=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];x.results.forEach(function(v){var o=[v.nickname||"",v.fingerprint||"",v.timestamp||"",v.status||"",v.text||"",v.delivery_reason||""].map(function(s){return'"'+window.AdminUtils.csvSafeText(s).replace(/"/g,'""')+'"'});e.push(o.join(","))});var p=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(p),b=document.createElement("a");b.href=m,b.download="danmu-search-"+(x.query||"export")+".csv",document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(m)}}function g(){var e=document.getElementById(h);if(e){var p=document.getElementById("admin-search-input");p&&(p.addEventListener("input",function(){x.query=p.value,K()}),p.addEventListener("keydown",function(b){b.key==="Enter"&&(clearTimeout(F),x.query=p.value,T())})),e.addEventListener("click",function(b){var v=b.target.closest("[data-search-scope]");if(v){x.scope=v.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(s){s.classList.toggle("is-active",s===v)}),x.query.trim()&&K();return}var o=b.target.closest("[data-search-blocked]");if(o){x.blockedOnly=!x.blockedOnly,o.classList.toggle("is-active",x.blockedOnly),x.shown=c,N();return}if(b.target.closest("[data-search-more]")){x.shown+=c,w();return}}),e.addEventListener("change",function(b){var v=b.target.closest("[data-search-who]");v&&(x.who=v.value||"",x.shown=c,N())});var m=document.getElementById("admin-search-export-btn");m&&m.addEventListener("click",_)}}function d(){var e=document.querySelector(".admin-dash-grid"),p=document.getElementById(h);if(!(!e||!p)){var m=e.dataset.activeLeaf||"dashboard";p.style.display=m==="search"?"":"none"}}function l(){var e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",A()),g(),d())}function r(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&l(),d()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",d),document.addEventListener("admin-panel-rendered",function(){l(),d()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var vn=ye(()=>{(function(){"use strict";let h="sec-api-tokens-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},c=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],x=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],F={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function A(t){if(!t)return"\u2014";try{let n=new Date(t);if(isNaN(n.getTime()))return String(t);let a=i=>String(i).padStart(2,"0");return`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())}`}catch{return String(t)}}function G(t){if(!t)return null;try{let n=new Date(t);if(isNaN(n.getTime()))return null;let a=i=>String(i).padStart(2,"0");return`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())} ${a(n.getHours())}:${a(n.getMinutes())}`}catch{return null}}function R(t){let n=Number(t);return isNaN(n)?"0":n.toLocaleString()}function P(t){if(!t||t.enabled===!1)return"inactive";if(!t.expires_at)return"active";try{let n=new Date(t.expires_at).getTime(),a=Date.now();if(n<a)return"expired";if(n-a<168*3600*1e3)return"expiring"}catch{}return"active"}function M(t){if(!t)return 1/0;try{return Math.floor((Date.now()-new Date(t).getTime())/864e5)}catch{return 1/0}}function D(t){return!t||!t.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':t.map(function(n){let a="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?a+=" is-danger":n.startsWith("fire:")?a+=" is-warn":n.startsWith("read:stats")?a+=" is-cyan":a+=" is-success",`<span class="${a}">${f(n)}</span>`}).join(" ")}function C(t){let n="admin-ui-dot admin-at-dot";return t==="active"?n+=" is-success":t==="expiring"?n+=" is-warn":t==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function w(){let t=c.map(function(a){let i=a.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${a.badge==="red"?"danger":a.badge==="amber"?"warn":a.badge==="green"?"success":a.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${f(a.id)}"
          >
          <span class="${k}">${f(a.badgeTxt)}</span>
          <span class="admin-at-scope-label">${f(ServerI18n.t(a.labelKey))}</span>
          ${i}
        </label>
      `}).join(""),n=x.map(function(a){let i=a.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${a.days!==null?String(a.days):"null"}" ${i} class="sr-only">
          <span>${f(ServerI18n.t(a.labelKey))}</span>
        </label>
      `}).join("");return`
      <details id="${h}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
                    ${t}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${n}
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
    `}async function N(){K(!0);try{let t=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let n=await t.json();F.tokens=n.tokens||n||[],g()}catch(t){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{K(!1)}}async function T(t){F.creating=!0,_(!0),p();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok){let y=await n.json().catch(()=>({}));throw new Error(y.error||y.message||`HTTP ${n.status}`)}let a=await n.json(),i=a.token||a.raw_token||a.access_token||null;F.newTokenRaw=i,d(i),r(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{F.creating=!1,_(!1)}}async function L(t,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${f(n||t)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let i=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"DELETE"});if(!i.ok){let y=await i.json().catch(()=>({}));throw new Error(y.error||y.message||`HTTP ${i.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:i.message||""}),!1)}}async function I(t,n){try{let a=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!a.ok){let i=await a.json().catch(()=>({}));throw new Error(i.error||i.message||`HTTP ${a.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:a.message||""}),!1)}}function K(t){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!t)}function _(t){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=t,n.textContent=t?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function g(){let t=F.tokens,n=document.querySelector("[data-at-empty]"),a=document.querySelector("[data-at-table-wrap]"),i=document.querySelector("[data-at-tbody]");if(!(!n||!a||!i)){if(!t||t.length===0){if(!n.firstElementChild&&window.AdminEmpty){let y=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});y.dataset.emptyKind="api-tokens",n.appendChild(y)}n.hidden=!1,a.hidden=!0;return}n.hidden=!0,a.hidden=!1,i.innerHTML=t.map(function(y){let k=P(y),S=C(k),B=y.scopes||y.scope||[],j=Array.isArray(B)?B:String(B).split(",").map(Y=>Y.trim()).filter(Boolean),E=M(y.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",O=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",$=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",q=y.last_used_at?`${G(y.last_used_at)||A(y.last_used_at)}<br><span class="admin-at-ip">${f(y.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${f(y.id||y.token_id||"")}">
          <td class="admin-at-td-label">
            ${S}
            <span class="admin-at-label-text">${f(y.label||y.name||"\u2014")}</span>
            ${E}${O}${$}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${f(y.prefix||y.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(j)}</div>
          </td>
          <td class="admin-at-td-used">${q}</td>
          <td class="admin-at-td-usage">${R(y.usage_count||y.use_count)}</td>
          <td class="admin-at-td-created">${A(y.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${f(y.id||y.token_id||"")}"
              data-token-enabled="${y.enabled===!1?"0":"1"}"
              title="${y.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${y.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${f(y.id||y.token_id||"")}"
              data-token-label="${f(y.label||y.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function d(t){let n=document.getElementById("adminAtSuccessBanner"),a=document.getElementById("adminAtTokenDisplay"),i=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),a&&t&&(a.value=t),i&&(i.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let t=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");t&&(t.hidden=!0),n&&(n.style.opacity=""),F.newTokenRaw=null}function r(){let t=document.getElementById("adminAtCreateForm");t&&t.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(i){i.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let i=n.closest(".admin-at-expiry-btn");i&&i.classList.add("is-active")}let a=document.getElementById("adminAtAdminWarn");a&&(a.hidden=!0),p()}function e(t){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=t)}function p(){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!0,t.textContent="")}function m(){let t=document.getElementById("adminAtLabel"),n=t?t.value.trim():"",a=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(S){a.push(S.value)});let i=document.querySelector("input[name='adminAtExpiry']:checked"),y=i?i.value:"90",k=y==="null"?null:parseInt(y,10);return{label:n,scopes:a,expiry_days:k}}function b(t){return t.label?t.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!t.scopes||t.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function v(t){if(t.preventDefault(),F.creating)return;p();let n=m(),a=b(n);if(a){e(a);return}T(n)}function o(){let t=F.newTokenRaw;if(!t)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let a=document.getElementById("adminAtTokenDisplay");a&&(a.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function s(){let t=document.getElementById(h);if(!t)return;t.addEventListener("click",function(y){let k=y.target.closest("[data-at-action]");if(k){let B=k.dataset.atAction;if(B==="revoke"){let j=k.dataset.tokenId,J=k.dataset.tokenLabel;L(j,J)}else if(B==="toggle"){let j=k.dataset.tokenId,J=k.dataset.tokenEnabled==="1";I(j,!J)}else B==="copy-token"&&o();return}let S=y.target.closest(".admin-at-expiry-btn");S&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(B){B.classList.remove("is-active")}),S.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let y=document.getElementById("adminAtAdminWarn");y&&(y.hidden=!n.checked)});let a=document.getElementById("adminAtCreateForm");a&&a.addEventListener("submit",v);let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){let y=i.closest(".admin-at-expiry-btn");y&&y.classList.add("is-active")}}function u(){let t=document.getElementById("settings-grid");!t||document.getElementById(h)||(t.insertAdjacentHTML("beforeend",w()),s(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&u()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&u()})})()});var hn=ye(()=>{(function(){"use strict";let h="sec-wcag-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function c(r){let e=r.replace(/^#/,""),p=e.length===3?e.split("").map(function(m){return m+m}).join(""):e;return[parseInt(p.slice(0,2),16)/255,parseInt(p.slice(2,4),16)/255,parseInt(p.slice(4,6),16)/255]}function x(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function F(r){let e=c(r);return .2126*x(e[0])+.7152*x(e[1])+.0722*x(e[2])}function A(r,e){let p=F(r),m=F(e),b=Math.max(p,m),v=Math.min(p,m);return(b+.05)/(v+.05)}function G(r){return r>=7?"AAA":r>=4.5?"AA":r>=3?"AA-large":"fail"}function R(r,e){let p=F(e),m=[],b=c(r);for(let v=.05;v<=.6&&m.length<3;v+=.05){let s="#"+b.map(function(t){return Math.min(1,t+v)}).map(function(t){return Math.round(t*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),u=A(s,e);u>=4.5&&m.push({hex:s,ratio:u})}return m}let P=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",C={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function w(){let r=P.filter(function(m){return G(A(m.fg,m.bg))!=="fail"}).length,e=P.length-r,p=Math.round(r/P.length*100);return`
      <div id="${h}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${N("PASS AA+",r,ServerI18n.t("wcagStatPassLabel"))}
              ${N("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${N("PAIRS",P.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",p+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:p})}">
                <div class="admin-wcag-meter-fill" style="width:${p}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${P.map(function(m,b){return T(m,b)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${L()}
          </div>
        </div>
      </div>`}function N(r,e,p){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${f(String(e))}</span>
        <span class="hud-stat-tile-label">${f(p)}</span>
      </div>`}function T(r,e){let p=A(r.fg,r.bg),m=G(p),b=C[m],v=ServerI18n.t(r.nameKey),o=b.labelKey?ServerI18n.t(b.labelKey):b.label,s=m==="fail"?ServerI18n.t("wcagWarnFail"):m==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${f(ServerI18n.t("wcagPairAriaLabel",{name:v,ratio:p.toFixed(2),level:o.slice(2)}))}">
        <span class="admin-wcag-pair-name">${f(v)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${f(r.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${f(r.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${f(r.fg)}">${f(r.fg)} / ${f(r.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${p.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${b.mod}">${o}</span>
        ${s?`<span class="admin-wcag-warn">\u26A0 ${s}</span>`:""}
      </div>`}function L(){let r=A(M.fg,M.bg),e=G(r),p=C[e],m=p.labelKey?ServerI18n.t(p.labelKey):p.label,b=R(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${I(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${I(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${f(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${f(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${f(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${f(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${r.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${p.mod}">${m}</span>
      </div>

      <div class="admin-wcag-levels">
        ${K(ServerI18n.t("wcagCheckAANormal"),r>=4.5)}
        ${K(ServerI18n.t("wcagCheckAALarge"),r>=3)}
        ${K(ServerI18n.t("wcagCheckAAANormal"),r>=7)}
        ${K(ServerI18n.t("wcagCheckAAALarge"),r>=4.5)}
      </div>

      ${b.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${b.map(function(v){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${f(v.hex)}"
                title="${f(ServerI18n.t("wcagSuggApplyTitle",{ratio:v.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${f(M.bg)};color:${f(v.hex)}">${f(v.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${v.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function I(r,e,p){let m="wcag-tester-"+p;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${m}">${f(r)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${f(e)}"></span>
          <input type="text" id="${m}" class="admin-ui-input" data-wcag-tester-${p}
            aria-label="${f(ServerI18n.t("wcagHexAria",{label:r}))}"
            value="${f(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function K(r,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${f(r)}</span>
    </div>`}function _(){let r=document.getElementById(h);r&&(r.addEventListener("click",function(e){let p=e.target.closest("[data-wcag-pair-idx]");if(p){g(p);return}let m=e.target.closest("[data-wcag-sugg]");m&&(M.fg=m.dataset.wcagSugg,d())}),r.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let p=e.target.closest("[data-wcag-pair-idx]");p&&(e.preventDefault(),g(p))}),r.addEventListener("input",function(e){let p=e.target.closest("[data-wcag-tester-fg]"),m=e.target.closest("[data-wcag-tester-bg]");p&&/^#[0-9A-Fa-f]{6}$/.test(p.value)&&(M.fg=p.value.toUpperCase(),d()),m&&/^#[0-9A-Fa-f]{6}$/.test(m.value)&&(M.bg=m.value.toUpperCase(),d())}))}function g(r){let e=P[parseInt(r.dataset.wcagPairIdx,10)];e&&(M.fg=e.fg,M.bg=e.bg,d())}function d(){let r=document.querySelector("[data-wcag-tester]");r&&(r.innerHTML=L())}function l(){let r=document.getElementById("settings-grid");!r||document.getElementById(h)||(r.insertAdjacentHTML("beforeend",w()),_())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&l()})})()});var gn=ye(()=>{(function(){"use strict";let h="danmu.onboarding.done",f="admin-onboarding-root",A=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],G=0,R=!1;window.AdminOnboarding={start:w,isDone:function(){try{return!!localStorage.getItem(h)}catch{return!1}},reset:function(){try{localStorage.removeItem(h)}catch{}}};let P=new Set(["live","dashboard"]);function M(){if(R||window.AdminOnboarding.isDone()||!P.has(D()))return;let r=()=>!!document.querySelector(".admin-session-banner-live");r()||setTimeout(()=>{R||window.AdminOnboarding.isDone()||r()||P.has(D())&&w()},1200)}function D(){let r=document.querySelector(".admin-dash-grid");return r&&r.dataset.activeRoute||"live"}function C(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&w()}function w(){R||(R=!0,G=0,K())}function N(r){if(!R)return;R=!1,document.body.removeEventListener("click",L),document.removeEventListener("keydown",I),window.removeEventListener("resize",_);let e=document.getElementById(f);if(e&&e.remove(),r)try{localStorage.setItem(h,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function T(){G<A.length-1?(G++,_()):N(!0)}function L(r){let e=r.target.closest("[data-ob-action]");e&&(r.stopPropagation(),e.dataset.obAction==="next"?T():e.dataset.obAction==="skip"&&N(!1))}function I(r){R&&r.key==="Escape"&&(r.preventDefault(),N(!1))}function K(){let r=document.getElementById(f);r&&r.remove();let e=document.createElement("div");e.id=f,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",L),document.addEventListener("keydown",I),window.addEventListener("resize",_),_()}function _(){let r=document.getElementById(f);if(!r)return;let e=A[G],p=A.length,m=d(e.target),b=window.innerWidth,v=window.innerHeight,o="";m?o='<div class="admin-ob-spot" style="left:'+(m.left-8)+"px;top:"+(m.top-8)+"px;width:"+(m.width+16)+"px;height:"+(m.height+16)+'px;"></div>':o='<div class="admin-ob-scrim"></div>';let s=(b-360)/2,u=v/2-110,t="none";if(m){let y=m.left+m.width/2;e.side==="top"?(s=y-360/2,u=m.top-16,t="bottom"):e.side==="right"?(s=m.right+16+8,u=m.top,t="left"):(s=y-360/2,u=m.bottom+16+8,t="top"),s=Math.max(16,Math.min(b-360-16,s))}let n=A.map(function(y,k){return'<span class="admin-ob-progress-item'+(k===G?" is-current":"")+'">'+(k+1)+" "+l(ServerI18n.t(y.labelKey))+"</span>"+(k<p-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");r.innerHTML=o+'<div class="admin-ob-bubble" data-arrow="'+t+'" style="left:'+s+"px;top:"+u+'px"><div class="admin-ob-count">'+(G+1)+" / "+p+'</div><div class="admin-ob-title">'+l(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(G===p-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let a=r.querySelector(".admin-ob-bubble");if(!a||!m)return;let i=a.offsetHeight;if(e.side==="top")a.style.top=Math.max(16,m.top-16-8-i)+"px";else if(u+i>v-16){let y=m.top-16-8-i;y>=16?(a.style.top=y+"px",a.setAttribute("data-arrow","bottom")):(a.style.top=Math.max(16,v-i-16)+"px",a.setAttribute("data-arrow","none"))}g(a,m)}function g(r,e){let p=r.getAttribute("data-arrow");if(p==="none")return;let m=r.getBoundingClientRect(),b=p==="top"||p==="bottom",v=b?e.left+e.width/2-m.left:e.top+e.height/2-m.top,o=b?m.width:m.height,s=Math.max(16,Math.min(o-32,v-8));r.style.setProperty("--ob-arrow",s+"px")}function d(r){if(!r)return null;let e=document.querySelector(r);if(!e)return null;let p=e.getBoundingClientRect();return p.width<8||p.height<8||p.bottom<0||p.top>window.innerHeight?null:p}function l(r){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(r):r==null?"":String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",C),C(),window.addEventListener("hashchange",function(){P.has(D())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var En=ye(()=>{var es=Se(it()),ts=Se(st()),ns=Se(ot()),as=Se(rt()),is=Se(lt()),ss=Se(dt()),os=Se(ct()),rs=Se(ut()),ls=Se(mt()),ds=Se(pt()),cs=Se(ft()),us=Se(vt()),ms=Se(ht()),ps=Se(gt()),fs=Se(bt()),vs=Se(wt()),hs=Se(yt()),gs=Se(St()),bs=Se(kt()),ws=Se(It()),ys=Se(Tt()),Ss=Se(_t()),ks=Se(Et()),Is=Se($t()),Ts=Se(xt()),_s=Se(Lt()),Es=Se(At()),$s=Se(Ct()),xs=Se(Bt()),Ls=Se(Ft()),As=Se(Dt()),Cs=Se(Mt()),Bs=Se(Nt()),Fs=Se(Pt()),Ds=Se(Rt()),Ms=Se(Ot()),Ns=Se(qt()),Ps=Se(Ht()),Rs=Se(jt()),Os=Se(Ut()),qs=Se(Kt()),Hs=Se(Wt()),js=Se(Gt()),Us=Se(Vt()),Ks=Se(zt()),Ws=Se(Jt()),Gs=Se(Yt()),Vs=Se(Qt()),zs=Se(Xt()),Js=Se(Zt()),Ys=Se(en()),Qs=Se(tn()),Xs=Se(nn()),Zs=Se(an()),eo=Se(sn()),to=Se(on()),no=Se(rn()),ao=Se(ln()),io=Se(dn()),so=Se(cn()),oo=Se(un()),ro=Se(mn()),lo=Se(pn()),co=Se(fn()),uo=Se(vn()),mo=Se(hn()),po=Se(gn())});En();})();
