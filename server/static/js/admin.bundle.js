/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var vn=Object.create;var Xe=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var hn=Object.getOwnPropertyNames;var gn=Object.getPrototypeOf,yn=Object.prototype.hasOwnProperty;var ve=(b,T)=>()=>{try{return T||b((T={exports:{}}).exports,T),T.exports}catch(g){throw T=0,g}};var bn=(b,T,g,f)=>{if(T&&typeof T=="object"||typeof T=="function")for(let A of hn(T))!yn.call(b,A)&&A!==g&&Xe(b,A,{get:()=>T[A],enumerable:!(f=fn(T,A))||f.enumerable});return b};var fe=(b,T,g)=>(g=b!=null?vn(gn(b)):{},bn(T||!b||!b.__esModule?Xe(g,"default",{value:b,enumerable:!0}):g,b));var Ze=ve(()=>{(function(){"use strict";var b=4,T=2500,g=3e3,f=Object.create(null);function A(){return Date.now()}function j(L,$){return($?"ok:":"err:")+L}function B(L,$){return"var("+L+", "+$+")"}function x(L){return L?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function u(L){for(var $=Array.prototype.slice.call(L.children);$.length>b;){var F=$.shift();F&&F.parentNode&&F.parentNode.removeChild(F)}}function N(L,$){L.remaining=$,L.startedAt=A(),L.timer=setTimeout(function(){S(L)},$)}function M(L){L.timer&&(clearTimeout(L.timer),L.timer=null,L.remaining=Math.max(600,L.remaining-(A()-L.startedAt)))}function C(L){L.timer||!L.el.parentNode||N(L,L.remaining)}function S(L){clearTimeout(L.timer),L.timer=null,L.key&&f[L.key]===L&&delete f[L.key];var $=L.el;!$||!$.parentNode||($.style.opacity="0",$.style.transform="translateX(8px)",setTimeout(function(){$.parentNode&&$.parentNode.removeChild($)},180))}function P(L,$){var F=document.getElementById("toast-container");if(F){$=$!==!1;var H=j(String(L),$),I=f[H];if(I&&I.el.parentNode&&A()-I.startedAt<T){I.count+=1,I.countEl&&(I.countEl.textContent="\xD7"+I.count,I.countEl.hidden=!1),M(I),C(I);return}var y=$?B("--color-ink-success","#639922"):B("--color-ink-error","#e24b4a"),p=B("--color-surface","#ffffff"),d=B("--color-text-primary","#1a1a1a"),s=B("--color-border-soft","rgba(0,0,0,.12)"),n=document.createElement("div");n.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+p,"color:"+d,"border:1px solid "+s,"border-left:3px solid "+y,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var o=document.createElement("span");o.style.cssText="display:inline-flex;color:"+y+";flex:0 0 auto",o.innerHTML=x($);var r=document.createElement("span");r.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",r.textContent=L;var c=document.createElement("span");c.hidden=!0,c.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",n.appendChild(o),n.appendChild(r),n.appendChild(c),F.appendChild(n),u(F),requestAnimationFrame(function(){n.style.opacity="1",n.style.transform="translateX(0)"});var a={key:H,el:n,countEl:c,count:1,timer:null,remaining:g,startedAt:A()};f[H]=a,N(a,g),n.addEventListener("mouseenter",function(){M(a)}),n.addEventListener("mouseleave",function(){C(a)}),n.addEventListener("focusin",function(){M(a)}),n.addEventListener("focusout",function(){C(a)})}}window.showToast=P})()});var et=ve(()=>{(function(){"use strict";var b="admin-details-open-state";function T(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function g(I){try{localStorage.setItem(b,JSON.stringify(I))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(I){return I==null?"":String(I).replace(/[&<>"']/g,function(y){return f[y]})}function j(){var I=document.querySelector("script[nonce]");return I&&I.nonce||""}function B(I,y){var p=j();return"<style"+(I?' id="'+A(I)+'"':"")+(p?' nonce="'+A(p)+'"':"")+">"+(y||"")+"</style>"}var x='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',u=[],N=null;function M(I){if(!I)return!1;for(var y=I,p=null;y&&y!==document.documentElement;p=y,y=y.parentElement)if(y.style&&y.style.display==="none"||y.tagName==="DETAILS"&&!y.open&&!(p&&p.tagName==="SUMMARY"))return!1;return!!(I.offsetParent||I.getClientRects().length)}function C(){var I=document.hidden;u.forEach(function(y){var p=typeof y.el=="function"?y.el():y.el,d=!I&&M(p);if(d&&!y.timer){if(y.immediate!==!1)try{y.tick()}catch{}y.timer=setInterval(y.tick,y.intervalMs)}else!d&&y.timer&&(clearInterval(y.timer),y.timer=0)})}function S(I){var y={el:I.el,intervalMs:I.intervalMs,tick:I.tick,immediate:I.immediate,timer:0};return u.push(y),N||(N=new MutationObserver(function(){C()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",C),document.addEventListener("visibilitychange",C),document.addEventListener("admin-panel-rendered",C)),C(),function(){y.timer&&clearInterval(y.timer);var d=u.indexOf(y);d!==-1&&u.splice(d,1)}}function P(I){let y=document.createElement("textarea");y.value=I,y.setAttribute("readonly",""),y.style.position="fixed",y.style.opacity="0",document.body.appendChild(y),y.select();let p=!1;try{p=!!document.execCommand("copy")}catch{p=!1}return document.body.removeChild(y),p}function L(I,y){let p=n=>window.ServerI18n?window.ServerI18n.t(n):n,d=n=>(window.showToast&&window.showToast(n?y||p("sohCopied"):p("sohCopyFailed"),n),n);if(!I)return Promise.resolve(d(!1));let s=navigator.clipboard;return s&&typeof s.writeText=="function"?s.writeText(I).then(()=>d(!0),()=>d(P(I))):Promise.resolve(d(P(I)))}let $=/^[=+\-@\t\r\n]/;function F(I){let y=I==null?"":String(I);return typeof I=="string"&&$.test(y)?"'"+y:y}function H(I){let y=F(I);return/[",\r\n]/.test(y)?'"'+y.replace(/"/g,'""')+'"':y}window.AdminUtils={csvCell:H,csvSafeText:F,copyText:L,DETAILS_STATE_KEY:b,loadDetailsState:T,saveDetailsState:g,escapeHtml:A,cspNonce:j,styleTag:B,closeIcon:x,pollWhileVisible:S}})()});var tt=ve(()=>{(function(){"use strict";function b(T,g,f,A){let j=T.querySelector("[data-route-breadcrumb]");if(!j)return;let B=Array.from(T.querySelectorAll(".admin-dash-nav-row[data-route]")),x=B.find(F=>F.dataset.route===g)||B.find(F=>F.dataset.route===f);if(!x){j.replaceChildren(),j.hidden=!0;return}let u="",N=x.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){u=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let C=(x.querySelector("[data-i18n]")||x.querySelector("span:nth-child(2)")||x).textContent.trim(),S=A?T.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=S?(S.querySelector(".admin-tabs-btn-label")||S).textContent.trim():"",L=[u===C?"":u,C,P].filter(Boolean),$=document.createDocumentFragment();L.forEach((F,H)=>{if(H){let p=document.createElement("span");p.className="admin-dash-breadcrumb-sep",p.setAttribute("aria-hidden","true"),p.textContent="\u203A",$.appendChild(p)}let I=document.createElement("span"),y=H===L.length-1;I.className="admin-dash-breadcrumb-item"+(y?" is-current":""),y&&I.setAttribute("aria-current","page"),I.textContent=F,$.appendChild(I)}),j.replaceChildren($),j.hidden=L.length===0}window.AdminBreadcrumb={render:b}})()});var nt=ve(()=>{(function(b){"use strict";let T={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(S){return Array.isArray(S.sections)?S.sections:S.section?[S.section]:[]}function f(S){return!!T[S]}function A(S){return T[S]||null}let j={moderation:{filters:"blacklist",fingerprints:"bans"}};function B(S,P){let L=T[S];if(!L||!P)return null;let $=L.tabs.find(F=>F.folds&&F.folds[P]);return $?{tab:$.slug,section:$.folds[P]}:null}function x(S,P){let L=T[S];if(!L)return null;let $=y=>L.tabs.some(p=>p.slug===y),F=B(S,P);if(F)return F.tab;let H=j[S]?.[P];if(H&&$(H))return H;if(P&&$(P))return P;let I=b.AdminRouter?.tabMemory?.get?.(S);return I&&$(I)?I:L.defaultTab}function u(S,P,L){let $=T[S];if(!$)return null;let F=document.createElement("div");return F.className="admin-tabs-strip",F.dataset.nav=S,F.setAttribute("role","tablist"),F.setAttribute("aria-label",S+" tabs"),$.tabs.forEach(H=>{let I=document.createElement("button");I.type="button",I.className="admin-tabs-btn"+(H.slug===P?" is-active":""),I.dataset.nav=S,I.dataset.tab=H.slug,I.setAttribute("role","tab"),I.setAttribute("aria-selected",H.slug===P?"true":"false");let y=document.createElement("span");y.className="admin-tabs-btn-label",y.textContent=H.labelKey?ServerI18n.t(H.labelKey):H.label,I.appendChild(y);let p=document.createElement("span");p.className="admin-tabs-btn-count",p.dataset.tabCount=H.slug,p.textContent=N[S]&&N[S][H.slug]?N[S][H.slug]:"",I.appendChild(p),I.addEventListener("click",()=>{typeof L?.onSelect=="function"&&L.onSelect(H.slug)}),F.appendChild(I)}),F}let N={};function M(S,P,L){if(!T[S])return;N[S]=N[S]||{},N[S][P]=L==null?"":String(L);let $=document.querySelector('.admin-tabs-strip[data-nav="'+S+'"] [data-tab-count="'+P+'"]');$&&($.textContent=N[S][P])}function C(S,P,L){let $=T[S];!$||!L||$.tabs.forEach(F=>{let H=F.slug===P,I=new Map;g(F).forEach(y=>{let p=L.querySelector("#"+y);if(!p)return;p.style.display=H?"":"none";let d=I.get(p.parentElement);H&&F.folds&&d&&d.nextElementSibling!==p&&d.after(p),I.set(p.parentElement,p)})})}b.AdminTabs={hasTabsFor:f,getConfig:A,foldFor:B,resolveActiveTab:x,renderTabStrip:u,applyTabSectionVisibility:C,setTabCount:M}})(window)});var at=ve(()=>{(function(b,T){"use strict";let g="data-quick-action-host",f="admin-quick-action-bar";function A(N){if(N?.host instanceof HTMLElement)return N.host;let M=T.querySelector(".admin-dash-main");if(!M)return T.body;let C=M.querySelector(`[${g}]`);if(!C){C=T.createElement("div"),C.setAttribute(g,"");let S=M.querySelector(".admin-dash-topbar"),L=M.querySelector("[data-admin-tabs-host]")||S;L&&L.parentNode?L.insertAdjacentElement("afterend",C):M.prepend(C)}return C}function j(N,M){typeof b.showToast=="function"&&b.showToast(N,M!==!1)}function B({label:N,undoLabel:M,onUndo:C,windowMs:S}){let P=A(),L=P.querySelector("."+f);L&&L.remove();let $=T.createElement("div");$.className=f,$.setAttribute("role","status"),$.setAttribute("aria-live","polite");let F=T.createElement("span");F.className=f+"-text",F.textContent="\u2713 "+N,$.appendChild(F);let H=T.createElement("button");H.type="button",H.className=f+"-undo",H.textContent="\u21B6 "+(M||ServerI18n.t("qaUndoLabel")),$.appendChild(H);let I=()=>{$.classList.add("is-leaving"),setTimeout(()=>$.remove(),200)},y=setTimeout(I,S||5e3);return H.addEventListener("click",async()=>{clearTimeout(y),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await C(),j(ServerI18n.t("qaUndone"),!0)}catch(p){j(ServerI18n.t("qaUndoFailed",{msg:p?.message||String(p)}),!1)}finally{I()}}),P.appendChild($),requestAnimationFrame(()=>$.classList.add("is-entering")),$}function x(N){if(!N||typeof N!="object")return;let M=N.label||ServerI18n.t("qaDone");N.toast!==!1&&j(M,!0),N.undo&&typeof N.undo.run=="function"&&B({label:M,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function u(){T.querySelectorAll("."+f).forEach(N=>N.remove())}b.AdminQuickAction={fire:x,dismissAll:u}})(window,document)});var it=ve(()=>{(function(){"use strict";let b="admin-hud-modal-root",T=null,g=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function A(){let u=document.getElementById(b);return u?Array.prototype.slice.call(u.querySelectorAll(f)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function j(u){let N=document.getElementById(b);if(N&&N.remove(),T&&(T(u),T=null),document.removeEventListener("keydown",B),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function B(u){if(u.key==="Escape"){u.preventDefault(),j(!1);return}if(u.key==="Tab"){let N=A();if(!N.length){u.preventDefault();return}let M=N[0],C=N[N.length-1],S=document.activeElement;u.shiftKey?(S===M||!N.includes(S))&&(u.preventDefault(),C.focus()):(S===C||!N.includes(S))&&(u.preventDefault(),M.focus())}}function x(u){return new Promise(N=>{T&&j(!1),T=N,g=document.activeElement;let{icon:M="\u26A0",title:C=ServerI18n.t("hudConfirmTitle"),subtitle:S="",severity:P="warn",body:L="",titleText:$,bodyText:F,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:I=ServerI18n.t("cancel"),width:y=480}=u||{},p=document.createElement("div");p.id=b,p.className=`admin-hud-modal admin-hud-modal--${P}`,p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-hud-modal-title");let d=S?`<div class="admin-hud-modal__subtitle">${S}</div>`:"",s=typeof L=="string"?L:"",n=typeof L!="string"&&L&&L.nodeType;if(p.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${y}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${M}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${C}</div>
              ${d}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${s}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${I}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,$!=null){let r=p.querySelector(".admin-hud-modal__title");r&&(r.textContent=String($))}if(F!=null){let r=p.querySelector("[data-modal-body]");r&&(r.textContent=String(F))}if(n){let r=p.querySelector("[data-modal-body]");r.innerHTML="",r.appendChild(L)}p.addEventListener("click",function(r){let c=r.target.closest("[data-modal-action]");c&&(r.stopPropagation(),j(c.dataset.modalAction==="confirm"))}),document.body.appendChild(p),document.addEventListener("keydown",B);let o=P==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{p.querySelector(`.admin-hud-modal__btn--${o}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:x}})()});var st=ve(()=>{(function(){"use strict";var b=8,T=30;function g(P,L){return window.ServerI18n?window.ServerI18n.t(P,L):P}function f(P,L){return P?P.length>L?P.slice(0,L)+"\u2026":P:""}function A(P){return g(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function j(P,L){return P==="keyword"?f(L,T):L.slice(0,b)}async function B(P,L,$){if(!L)return{ok:!1,error:"empty-value"};try{var F={type:P==="keyword"?"keyword":"fingerprint",value:L};$&&(F.reason=$);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(I){return{ok:!1,error:I&&I.message||"network"}}}async function x(P,L,$){if(!P)return{ok:!1,error:"empty-fingerprint"};var F=parseInt(L||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:F,reason:$||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(I){return{ok:!1,error:I&&I.message||"network"}}}async function u(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var L=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return L.ok?{ok:!0}:{ok:!1,error:"HTTP "+L.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}function N(P,L){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",A(P)).replace("{display}",j(P,L)),confirmLabel:g("lfBlockTitle")}):(window.showToast&&window.showToast(g("blockFailed"),!1),Promise.resolve(!1))}function M(P,L,$){window.showToast&&window.showToast(P?g(L,$||{}):g("blockFailed"),!!P)}async function C(P,L){if(!P||(L=L||{},!L.skipConfirm&&!await N("keyword",P)))return!1;var $=await B("keyword",P);return M($.ok,"blockFallback",{label:A("keyword"),display:j("keyword",P)}),$.ok}async function S(P,L){if(!P||(L=L||{},!L.skipConfirm&&!await N("fingerprint",P)))return!1;var $=await B("fingerprint",P,L.reason);return M($.ok,"blockFallback",{label:A("fingerprint"),display:j("fingerprint",P)}),$.ok}window.AdminModeration={callBlock:B,banFingerprint:x,recall:u,blockKeyword:C,blockFingerprint:S}})()});var ot=ve(()=>{(function(){"use strict";function T(x){let u=document.createElement("div");return u.className="admin-skel-slow",u.hidden=!0,u.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",x.appendChild(u),setTimeout(function(){u.isConnected&&(u.hidden=!1)},3e3),x}function g(x,u){let N=document.createElement("div");if(N.className="admin-skel "+(x||""),u)for(let M in u)N.style[M]=u[M];return N}function f({rows:x=8}={}){let u=document.createElement("div");u.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(M=>{N.appendChild(g("admin-skel-bar",{width:M+"px",height:"10px"}))}),u.appendChild(N);for(let M=0;M<x;M++){let C=document.createElement("div");C.className="admin-skel-list__row",C.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let S=document.createElement("div");S.className="admin-skel-list__col",S.appendChild(g("admin-skel-bar",{width:50+M*13%40+"%",height:"10px"})),S.appendChild(g("admin-skel-bar",{width:30+M*7%30+"%",height:"8px"})),C.appendChild(S),C.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),u.appendChild(C)}return T(u)}function A({cols:x=4}={}){let u=document.createElement("div");u.className="admin-skel-stats",u.style.gridTemplateColumns=`repeat(${x}, 1fr)`;for(let N=0;N<x;N++){let M=document.createElement("div");M.className="admin-skel-card admin-skel-tile",M.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),M.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),M.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),M.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),u.appendChild(M)}return T(u)}function j(){let x=document.createElement("div");x.className="admin-skel-card admin-skel-chart";let u=document.createElement("div");u.className="admin-skel-chart__head",u.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",u.appendChild(N),u.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),x.appendChild(u);let M=document.createElement("div");M.className="admin-skel-chart__body";let C=document.createElement("div");C.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>C.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),M.appendChild(C);let S=document.createElement("div");return S.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(L=>S.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:L+"%"}))),M.appendChild(S),x.appendChild(M),T(x)}function B(x,u){let N={listRows:f,statsTiles:A,chart:j}[x];return N?N(u||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:A,chart:j,html:B}})()});var rt=ve(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},T={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function g(A){let{icon:j="\xB7",title:B="",desc:x="",accent:u=b.cyan,ctaAccent:N,actionLabel:M,action:C,extra:S}=A||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",u),N&&P.style.setProperty("--admin-empty-cta",N);let L=document.createElement("div");if(L.className="admin-empty__icon",L.textContent=j,P.appendChild(L),B){let $=document.createElement("div");$.className="admin-empty__title",$.textContent=B,P.appendChild($)}if(x){let $=document.createElement("div");$.className="admin-empty__desc",$.textContent=x,P.appendChild($)}if(M){let $=document.createElement("button");$.type="button",$.className="admin-empty__btn",$.textContent=M,typeof C=="function"&&$.addEventListener("click",C),P.appendChild($)}if(S){let $=document.createElement("div");$.className="admin-empty__extra",typeof S=="string"?$.innerHTML=S:$.appendChild(S),P.appendChild($)}return P}function f(A){let j=T[A];if(!j)return g({title:ServerI18n.t("emptyNoData"),desc:""});let B=Object.assign({},j,{title:j.titleKey?ServerI18n.t(j.titleKey):j.title,desc:j.descKey?ServerI18n.t(j.descKey):j.desc,actionLabel:j.actionLabelKey?ServerI18n.t(j.actionLabelKey):j.actionLabel});return g(B)}window.AdminEmpty={render:f,renderCustom:g,PRESETS:T}})()});var dt=ve(()=>{(function(){"use strict";var b=8;function T(B){return B?String(B).slice(0,b):""}function g(B){if(!B||typeof B!="object")return{nickname:"",fp:"",ip:""};var x=B.fingerprint||B.fp||B.hash||"",u=B.clientIp||B.client_ip||B.ip||"",N=B.nickname||B.nick||"";return{nickname:String(N||""),fp:String(x||""),ip:String(u||"")}}function f(B){if(!B||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var x=new TextEncoder().encode(String(B));return window.crypto.subtle.digest("SHA-256",x).then(function(u){var N=Array.from(new Uint8Array(u));return N.map(function(M){return M.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function A(B){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var x=document.getElementById("sec-fingerprints");if(x&&!x.open&&(x.open=!0),x)try{x.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(B).then(function(u){if(u)var N=0,M=setInterval(function(){N+=1;var C=document.querySelector('[data-fp-hash="'+u+'"]');if(C){clearInterval(M),C.classList.add("admin-identity-flash"),setTimeout(function(){C.classList.remove("admin-identity-flash")},2e3);try{C.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(M)},250)})}function j(B){B=B||{};var x=B.nickname||"",u=B.fp||"",N=B.ip||"",M=!!B.compact,C=typeof B.onNicknameClick=="function"?B.onNicknameClick:null,S=typeof B.onFpClick=="function"?B.onFpClick:A,P=document.createElement("span");P.className="admin-identity-row";var L;if(C?(L=document.createElement("button"),L.type="button",L.className="admin-identity-nick is-clickable",L.addEventListener("click",function(p){p.stopPropagation(),C(x)})):(L=document.createElement("span"),L.className="admin-identity-nick"),x)L.textContent="@"+x;else{var $="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var F=ServerI18n.t("anonymousPlaceholder");F&&F!=="anonymousPlaceholder"&&($=F)}}catch{}L.textContent="@"+$,L.classList.add("is-guest")}if(x&&(L.title=x),P.appendChild(L),u){var H;if(S?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(p){p.stopPropagation(),S(u)})):(H=document.createElement("span"),H.className="admin-identity-fp"),u==="new"){var I=document.createElement("span");I.className="admin-identity-dot",H.appendChild(I),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+T(u);H.title=u,P.appendChild(H)}if(N&&!M){var y=document.createElement("span");y.className="admin-identity-ip",y.textContent=N,y.title=N,P.appendChild(y)}return P}window.AdminIdentity={render:j,parse:g,focusFingerprint:A,hashFp:f,FP_DISPLAY_LEN:b}})()});var lt=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function T(o,r){return window.csrfFetch(o,r)}function g(o,r){return window.showToast(o,r)}let f="default",A=[],j={};function B(){let o=document.getElementById("themesList");o&&window.AdminSkeletons&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function x(){B();try{let o=await T("/admin/themes");if(!o.ok)return;let r=await o.json();f=r.active||"default",A=r.themes||[],j=r.overrides||{},P(A,f),F()}catch(o){console.warn("[Themes] Failed to fetch themes:",o)}}var u="\u5C0F\u660E",N="\u8B1B\u5F97\u597D\uFF01+1";function M(o,r){var c=String(o||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(c)?c:r}function C(o){var r=o.styles||{},c=["color:"+M(r.color,"#ffffff")];if(r.textStroke){var a=Math.max(0,Math.min(6,Number(r.strokeWidth)||0));c.push("-webkit-text-stroke:"+a+"px "+M(r.strokeColor,"#000000")),c.push("paint-order:stroke fill")}if(r.textShadow){var t=Math.max(0,Math.min(40,Number(r.shadowBlur)||0));c.push("text-shadow:0 0 "+t+"px "+M(r.color,"#ffffff"))}var v=o.font&&o.font.family;return v&&/^[\w\s-]{1,40}$/.test(v)&&c.push("font-family:'"+v+"', var(--font-sans)"),o.font&&Number(o.font.weight)&&c.push("font-weight:"+Math.max(100,Math.min(900,Number(o.font.weight)))),c.join(";")}function S(o){var r=o.bg&&o.bg.gradient;return r&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(r).trim())?"background:"+String(r).trim():""}function P(o,r){let c=document.getElementById("themesList");if(c){if(c.innerHTML="",o.length===0){c.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}o.forEach(a=>{let t=a.name===r,v=b(ServerI18n.t("theme_"+a.name)!=="theme_"+a.name?ServerI18n.t("theme_"+a.name):a.label||a.name),h=document.createElement("div");h.className=`theme-pack-card${t?" is-active":""}`,h.innerHTML=`
        <div class="theme-pack-name">${v}</div>
        <div class="theme-pack-sample" style="${b(S(a))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b(C(a))}">
            <span class="theme-pack-sample-nick">${b(u)}</span>
            ${b(N)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${a.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(a.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(a.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,c.appendChild(h)}),c.querySelectorAll(".theme-delete-btn").forEach(a=>{a.addEventListener("click",async()=>{let t=a.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let h=await T("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!h.ok)throw new Error("HTTP "+h.status);g(ServerI18n.t("themeDeleted"),!0),x()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),c.querySelectorAll(".theme-activate-btn").forEach(a=>{a.addEventListener("click",async()=>{let t=a.dataset.theme;try{let v=await T("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(v.ok)g(ServerI18n.t("themeActivated"),!0),f=t,P(o,t),F();else{let h=await v.json().catch(()=>({}));g(h.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function L(){return A.find(o=>o.name===f)||null}function $(o,r){let c=j[f]||{};if(c[o])return c[o];let a=r&&r.styles||{};return o==="stroke"?a.textStroke?Number(a.strokeWidth)>=3?"thick":"thin":"none":a.textShadow?Number(a.shadowBlur)>=10?"strong":"soft":"none"}function F(){let o=document.getElementById("themeDetail"),r=document.getElementById("themeDetailLabel");if(!o||!r)return;let c=L();if(!c)return;let a=ServerI18n.t("theme_"+c.name)!=="theme_"+c.name?ServerI18n.t("theme_"+c.name):c.label||c.name;r.textContent=ServerI18n.t("themeDetailGroup",{name:a}),["stroke","shadow"].forEach(v=>{let h=$(v,c);o.querySelectorAll(`[data-theme-seg="${v}"] [data-theme-opt]`).forEach(e=>{let i=e.getAttribute("data-theme-opt")===h;e.classList.toggle("is-active",i),e.setAttribute("aria-pressed",i?"true":"false")})});let t=o.querySelector('[data-theme-ov="color"]');if(t){let v=M((c.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(v)?v:"#ffffff"}I(c),y(c)}var H=null;async function I(o){let r=document.getElementById("themeOvFont");if(!r)return;if(!H)try{let t=await fetch("/fonts",{credentials:"same-origin"});H=t.ok?(await t.json()).fonts||[]:[]}catch{H=[]}let a=(j[f]||{}).font_family||"";r.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+H.map(t=>{let v=String(t.name||t);return`<option value="${b(v)}"${v===a?" selected":""}>${b(v)}</option>`}).join("")}function y(o){let r=document.querySelector("[data-theme-preview-line]");r&&r.setAttribute("style",C(o))}async function p(o){try{let r=await T("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!r.ok)throw new Error("HTTP "+r.status);g(ServerI18n.t("themeDetailSaved"),!0),await x()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function d(){let o=document.getElementById("themeDetail");o&&(o.addEventListener("click",r=>{let c=r.target.closest("[data-theme-opt]");if(!c)return;let a=c.closest("[data-theme-seg]");a&&p({[a.getAttribute("data-theme-seg")]:c.getAttribute("data-theme-opt")})}),o.addEventListener("change",r=>{let c=r.target.closest("[data-theme-ov]");c&&p({[c.getAttribute("data-theme-ov")]:c.value})}))}function s(){let o=document.getElementById("themeNewBtn");o&&o.addEventListener("click",async()=>{let r=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!r||!r.trim()))try{let c=await T("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:r.trim(),base:f})});if(!c.ok)throw new Error("HTTP "+c.status);g(ServerI18n.t("themeCreated"),!0),x()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function n(){x(),d(),s();let o=document.getElementById("themeReloadBtn");o&&o.addEventListener("click",async()=>{try{(await T("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),x()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:n}})()});var ct=ve(()=>{(function(){"use strict";function b(_,D){return window.csrfFetch(_,D)}function T(_,D){return window.showToast(_,D)}var g=window.ServerI18n;function f(_,D){return window.AdminUtils.styleTag(_,D)}let A=null;function j(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(D=>!D.hasAttribute("disabled")&&D.getAttribute("aria-hidden")!=="true"):[]}function B(_){let D=document.getElementById("effectEditModal");if(!D||D.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),x();return}if(_.key!=="Tab")return;let R=j();if(R.length===0){_.preventDefault();return}let K=R[0],E=R[R.length-1],O=document.activeElement;_.shiftKey&&O===K?(_.preventDefault(),E.focus()):!_.shiftKey&&O===E&&(_.preventDefault(),K.focus())}function x(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",B),A&&(A.focus(),A=null))}let u={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!u[_]}};let N=new Map,M=new Map;function C(_){if(!_||!_.styleId||!_.keyframes)return;let D="dme-user-"+_.styleId;if(document.getElementById(D))return;let R=document.createElement("style");R.id=D,R.textContent=_.keyframes,document.head.appendChild(R)}async function S(_){if(N.has(_))return N.get(_);if(M.has(_))return M.get(_);let D=(async()=>{try{let R=await b(`/admin/effects/${encodeURIComponent(_)}/content`);if(!R.ok)throw new Error("content fetch failed");let K=await R.json(),E=K&&K.content||"";if(!E)throw new Error("empty content");let O=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:{}})});if(!O.ok)throw new Error("preview failed");let U=await O.json();if(!U||!U.animation)throw new Error("no animation");return C(U),N.set(_,U),U}catch{return N.set(_,"failed"),null}finally{M.delete(_)}})();return M.set(_,D),D}function P(_,D){let R=_.querySelector(".effect-demo-text");if(!R)return;R.style.animation=D.animation||"",D.animationComposition&&(R.style.animationComposition=D.animationComposition),R.style.animationPlayState="paused";let K=$();K&&K.observe(_)}let L=null;function $(){return L||(typeof IntersectionObserver>"u"?null:(L=new IntersectionObserver(_=>{_.forEach(D=>{let R=D.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=D.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),L))}let F=null;function H(_){let D=document.getElementById("effectPreviewParams");if(!D)return{};let R;try{let E=_.split(`
`),O=!1,U=0,J=null,te=0,Z={};for(let z of E){let Q=z.trimStart(),W=z.length-Q.length;if(Q.startsWith("params:")){O=!0,U=W;continue}if(!O||Q===""||Q.startsWith("#"))continue;if(W<=U&&!Q.startsWith("params:")){O=!1;continue}let V=Q.match(/^([a-zA-Z0-9_]+):\s*$/);if(V&&W===U+2){J=V[1],te=W,Z[J]={};continue}if(J&&W>te){let ee=Q.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ee){let ne=ee[1],se=ee[2].trim();if((se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),ne!=="options"){let oe=Number(se);Z[J][ne]=isNaN(oe)?se:oe}}if(Q.startsWith("- value:")){Z[J].options||(Z[J].options=[]);let ne=Q.match(/^- value:\s*(.+)$/);if(ne){let se=ne[1].trim();(se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),Z[J].options.push({value:se,label:se})}}if(Q.startsWith("label:")&&Z[J].options&&Z[J].options.length>0){let ne=Q.match(/^label:\s*(.+)$/);if(ne){let se=ne[1].trim();(se.startsWith('"')&&se.endsWith('"')||se.startsWith("'")&&se.endsWith("'"))&&(se=se.slice(1,-1)),Z[J].options[Z[J].options.length-1].label=se}}}}R=Z}catch{R={}}D.innerHTML="";let K={};for(let[E,O]of Object.entries(R||{})){let U=O.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let te=document.createElement("label");if(te.className="font-mono",te.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",te.textContent=`${E} (${U})`,J.appendChild(te),U==="select"&&Array.isArray(O.options)){let Z=document.createElement("select");Z.className="admin-ui-select",Z.style.cssText="font-size:13px;padding:4px 8px",Z.dataset.paramKey=E;for(let z of O.options){let Q=document.createElement("option");Q.value=z.value,Q.textContent=z.label||z.value,z.value===String(O.default)&&(Q.selected=!0),Z.appendChild(Q)}K[E]=String(O.default||O.options[0]&&O.options[0].value||""),Z.addEventListener("change",()=>{p()}),J.appendChild(Z)}else{let Z=O.min!=null?O.min:0,z=O.max!=null?O.max:10,Q=O.step!=null?O.step:U==="int"?1:.1,W=O.default!=null?O.default:Z,V=document.createElement("div");V.className="flex items-center gap-2";let ee=document.createElement("input");ee.type="range",ee.min=Z,ee.max=z,ee.step=Q,ee.value=W,ee.dataset.paramKey=E,ee.className="flex-1",ee.style.accentColor="var(--color-primary)";let ne=document.createElement("span");ne.className="font-mono",ne.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",ne.textContent=String(W),ee.addEventListener("input",()=>{ne.textContent=ee.value,p()}),V.appendChild(ee),V.appendChild(ne),J.appendChild(V),K[E]=W}D.appendChild(J)}return K}function I(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let D={};return _.querySelectorAll("[data-param-key]").forEach(R=>{D[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),D}async function y(){let _=document.getElementById("effectEditModalTextarea"),D=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),K=document.getElementById("effectPreviewError");if(!_||!D||!R)return;let E=_.value;if(!E||E===g.t("effectLoadContent")||E===g.t("effectsNetworkError"))return;let O=I();K?.classList.add("hidden");try{let U=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:E,params:O})}),J=await U.json().catch(()=>({}));U.ok?(R.textContent=J.keyframes||"",D.style.animation=J.animation||"none",D.style.animationComposition=J.animationComposition||""):(D.style.animation="none",R.textContent="",K&&(K.textContent=J.error||g.t("previewFailed"),K.classList.remove("hidden")))}catch{D.style.animation="none",R.textContent="",K&&(K.textContent=g.t("effectsNetworkError"),K.classList.remove("hidden"))}}function p(){clearTimeout(F),F=setTimeout(()=>y(),500)}async function d(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${g.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${g.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${g.t("previewText")}</span>
                </div>
                ${f("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${g.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${g.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",x),document.getElementById("effectEditModalCancel").addEventListener("click",x),document.getElementById("effectEditModal").addEventListener("click",E=>{E.target===E.currentTarget&&x()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let E=document.getElementById("effectEditModalTextarea");E&&(H(E.value),p())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{y()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let E=document.getElementById("effectEditModal"),O=document.getElementById("effectEditModalTextarea"),U=document.getElementById("effectEditModalSave"),J=E?.dataset.effectName;if(!(!J||!O)){U.disabled=!0;try{let te=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:O.value})}),Z=await te.json().catch(()=>({}));te.ok?(T(Z.message||g.t("effectSaveFallback"),!0),x(),await o()):T(Z.error||g.t("saveFailed"),!1)}catch{T(g.t("effectsNetworkError"),!1)}finally{U.disabled=!1}}})),await o(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let E=document.getElementById("effectReloadBtn");E&&(E.disabled=!0);try{let O=await b("/admin/effects/reload",{method:"POST"}),U=await O.json().catch(()=>({}));O.ok?(T(U.message||g.t("effectsReloadFallback")),await o()):T(U.error||g.t("reloadFailed"),!1)}catch{T(g.t("effectsNetworkError"),!1)}finally{E&&(E.disabled=!1)}});async function _(E){if(!E)return;let O=new FormData;O.append("effectfile",E);try{let U=await b("/admin/effects/upload",{method:"POST",body:O}),J=await U.json().catch(()=>({}));U.ok?(T(J.message||g.t("effectUploadFallback")),await o()):T(J.error||g.t("uploadFailed"),!1)}catch{T(g.t("effectsNetworkError"),!1)}}let D=document.getElementById("effectUploadInput"),R=D&&!D.dataset.uploadWired;R&&(D.dataset.uploadWired="1"),(R?D:null)?.addEventListener("change",async E=>{await _(E.target.files?.[0]),E.target.value=""});let K=document.getElementById("sec-effects-mgmt");if(K){let E=0,O=Z=>{Z.preventDefault(),E++,K.classList.add("is-drag")},U=Z=>{Z.preventDefault()},J=Z=>{Z.preventDefault(),E=Math.max(0,E-1),E===0&&K.classList.remove("is-drag")},te=async Z=>{Z.preventDefault(),E=0,K.classList.remove("is-drag");let z=Z.dataTransfer?.files?.[0];if(z){if(!/\.(dme|dme\.zip)$/i.test(z.name)){T(g.t("fxToastBadExt"),!1);return}await _(z)}};K.addEventListener("dragenter",O),K.addEventListener("dragover",U),K.addEventListener("dragleave",J),K.addEventListener("drop",te)}}function s(_){let D=(_||"").toLowerCase();return D.startsWith("glow")||D.includes("neon")?"GLOW":D.startsWith("shake")?"SHAKE":D.startsWith("wave")||D.startsWith("spin")||D.startsWith("bounce")||D.startsWith("zoom")||D.startsWith("fire")||D.includes("motion")?"MOTION":D.startsWith("rainbow")||D.startsWith("blink")||D.includes("color")?"COLOR":D.startsWith("type")||D.includes("text")?"TEXT":"MISC"}let n={all:[],filter:"ALL",selected:null};async function o(){let _=document.getElementById("effectsList");if(_)try{let D=await b("/admin/effects");if(!D.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let R=await D.json();n.all=R.effects||[],r(),a()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function r(){let _=document.getElementById("effectsFilterRow");if(!_)return;let D={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};n.all.forEach(U=>{D[s(U.name)]+=1});let R=n.all.length,K=[["ALL",g.t("fxChipAll"),R],["GLOW",g.t("fxCatGlow"),D.GLOW],["MOTION",g.t("fxCatMotion"),D.MOTION],["COLOR",g.t("fxCatColor"),D.COLOR],["SHAKE",g.t("fxCatShake"),D.SHAKE],["TEXT",g.t("fxCatText"),D.TEXT]];D.MISC>0&&K.push(["MISC",g.t("fxCatMisc"),D.MISC]);let E=K.map(([U,J,te])=>`<span class="hud-filter-chip ${n.filter===U?"is-active":""}" data-effect-filter="${U}">${J} ${te}</span>`).join(""),O=_.querySelector("[data-toolbar-spacer]");O?(_.querySelectorAll("[data-effect-filter]").forEach(U=>U.remove()),O.insertAdjacentHTML("beforebegin",E)):_.innerHTML=E,_.querySelectorAll("[data-effect-filter]").forEach(U=>{U.addEventListener("click",()=>{n.filter=U.dataset.effectFilter,r(),a()})})}function c(_){let D=(U,J)=>{let te=document.querySelector(U);te&&(te.textContent=J==null?"\u2014":String(J))},R=_.length,K=_.filter(U=>U.enabled!==!1).length,E=new Set(_.map(U=>s(U.name))),O=_.filter(U=>!u[U.name]).length;D("[data-eflib-total]",R),D("[data-eflib-active]",K),D("[data-eflib-cats]",E.size),D("[data-eflib-user]",O)}function a(){let _=document.getElementById("effectsList");if(!_)return;let D=n.all;c(D);let R=n.filter==="ALL"?D:D.filter(K=>s(K.name)===n.filter);if(!R.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(D.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}L&&L.disconnect(),_.innerHTML="",R.forEach(K=>{let E=s(K.name),O=E==="GLOW"?"is-glow":E==="COLOR"?"is-color":E==="TEXT"?"is-text":"",U=u[K.name]||"",J=!!U,te=document.createElement("div");te.className="hud-effect-card"+(n.selected===K.name?" is-selected":""),te.dataset.effectName=K.name,te.title=[K.description,`file: ${K.filename}`].filter(Boolean).join(`
`);var Z="effect_"+K.name;let z=g.t(Z)!==Z?g.t(Z):K.label||K.name,Q=J?"built-in":"user",W=U?`animation:${U};animation-play-state:paused;`:"";if(te.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(g.t("fxCat"+E.charAt(0)+E.slice(1).toLowerCase())||E)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${O}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(z)}</div>
          <div class="hud-effect-card-meta">${t(Q)} \xB7 ${t(K.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,_.appendChild(te),U){let ne=$();ne&&ne.observe(te)}else{let ne=N.get(K.name);ne&&ne!=="failed"?(C(ne),P(te,ne)):ne!=="failed"&&S(K.name).then(se=>{if(!se)return;let oe=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(K.name)}"]`);oe&&P(oe,se)})}te.addEventListener("click",ne=>{ne.target.closest("[data-role]")||m(K)});let V=te.querySelector('[data-role="edit"]'),ee=te.querySelector('[data-role="delete"]');V.addEventListener("click",async()=>{let ne=document.getElementById("effectEditModal"),se=document.getElementById("effectEditModalTitle"),oe=document.getElementById("effectEditModalFile"),de=document.getElementById("effectEditModalTextarea"),Ie=document.getElementById("effectEditModalSave");if(!ne)return;A=document.activeElement instanceof HTMLElement?document.activeElement:null,se.textContent=K.label||K.name,oe.textContent=K.filename,de.value=g.t("effectLoadContent"),de.disabled=!0,Ie.disabled=!0,ne.dataset.effectName=K.name,ne.classList.remove("hidden"),ne.classList.add("flex"),ne.addEventListener("keydown",B),de.focus();let ke=document.getElementById("effectPreviewText"),xe=document.getElementById("effectPreviewStyle"),ie=document.getElementById("effectPreviewError"),ae=document.getElementById("effectPreviewParams");ke&&(ke.style.animation="none"),xe&&(xe.textContent=""),ie&&ie.classList.add("hidden"),ae&&(ae.innerHTML="");try{let re=await b(`/admin/effects/${encodeURIComponent(K.name)}/content`),le=await re.json().catch(()=>({}));re.ok?(de.value=le.content||"",de.disabled=!1,Ie.disabled=!1,de.focus(),H(de.value),y()):(de.value=le.error||g.t("effectLoadContentFailed"),T(le.error||g.t("effectLoadContentFailed"),!1))}catch{de.value=g.t("effectsNetworkError"),T(g.t("effectsNetworkError"),!1)}}),ee.addEventListener("click",async()=>{let ne=K.label||K.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${ne}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let oe=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K.name})}),de=await oe.json().catch(()=>({}));oe.ok?(T(de.message||g.t("effectDeleteFallback"),!0),await o()):T(de.error||g.t("deleteFailed"),!1)}catch{T(g.t("effectsNetworkError"),!1)}})})}function t(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v(_){let D={name:"",label:"",description:"",params:[]};if(!_)return D;let R=_.split(`
`),K="top",E=null;for(let O of R){let U=O.replace(/\r$/,""),J=U.trimStart();if(!J||J.startsWith("#"))continue;let te=U.length-J.length;if(te===0){if(K="top",E&&(D.params.push(E),E=null),J==="params:"){K="params";continue}let Z=J.match(/^([a-z_]+):\s*(.+)$/);Z&&(Z[1]==="name"?D.name=Z[2].trim():Z[1]==="label"?D.label=Z[2].trim():Z[1]==="description"&&(D.description=Z[2].trim()));continue}if(!(K!=="params"&&K!=="param-fields"&&K!=="options")){if(te===2&&(K==="params"||K==="param-fields"||K==="options")){E&&(D.params.push(E),E=null);let Z=J.match(/^(\w+):$/);Z&&(E={key:Z[1]},K="param-fields");continue}if(te===4&&K==="param-fields"&&E){let Z=J.match(/^(\w+):\s*(.*)$/);if(Z){let z=Z[1],Q=Z[2].trim();z==="label"?E.label=Q:z==="type"?E.type=Q:z==="default"?E.default=Q:z==="min"?E.min=parseFloat(Q):z==="max"?E.max=parseFloat(Q):z==="step"?E.step=parseFloat(Q):z==="options"&&(E.options=[],K="options")}continue}if(K==="options"&&E&&te>=6){let Z=J.match(/^-\s*value:\s*(.+)$/);Z&&(E.options||(E.options=[]),E.options.push({value:Z[1].trim(),label:Z[1].trim()}));let z=J.match(/^label:\s*(.+)$/);z&&E.options&&E.options.length>0&&(E.options[E.options.length-1].label=z[1].trim())}}}return E&&D.params.push(E),D}function h(_,D){let R=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),K=R?R[1]:"",E=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),O=E?E[1].trim():"";for(let U of D.params){let J=U.default!==void 0?U.default:"",te=new RegExp(`\\{${U.key}\\}`,"g");K=K.replace(te,J),O=O.replace(te,J)}return{keyframes:K,animation:O}}function e(_,D){if(_==="COLOR"){let R=D.find(K=>K.key==="duration");if(R&&R.default){let K=parseFloat(R.default);if(K<.25)return"crimson";if(K<.33)return"amber"}}if(_==="MOTION"){let R=D.find(K=>K.key==="height");if(R&&R.default){let K=parseFloat(R.default);if(K>30)return"crimson";if(K>24)return"amber"}}return"lime"}function i(_,D){return _==="COLOR"?D==="crimson"?g.t("fxHintFlashBlock"):D==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):D==="crimson"?g.t("fxHintAmpBlock"):D==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function l(_,D){let R=v(D),{keyframes:K,animation:E}=h(D,R),O=s(_.name),U=R.params.filter(de=>de.type!=="select"),J=R.params.filter(de=>de.type==="select"),te=e(O,R.params),Z=te==="crimson"?"BLOCK":te==="amber"?"WARN":"OK",z=i(O,te),Q="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),W=K&&E?f(Q,K):"",V=E?`animation:${E};animation-play-state:running;`:"",ee=U.map(de=>{let Ie=parseFloat(de.default)||0,ke=de.min??0,xe=de.max??100,ie=Math.max(0,Math.min(100,(Ie-ke)/(xe-ke)*100)),ae=(de.label||"").match(/\(([^)]+)\)$/),re=ae?ae[1]:"",le=de.label||de.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(le)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Ie}<span style="color:var(--color-text-muted);margin-left:2px">${t(re)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${ie}%"></div>
          <div class="fx-slider-knob" style="left:${ie}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${ke}${t(re)}</span><span>${xe}${t(re)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,ne=J.map(de=>{let Ie=de.options||[],ke=String(de.default||""),xe=Ie.map(ie=>`<span class="fx-radio-btn${ie.value===ke||ie.label===ke?" is-active":""}">${t(ie.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(de.label||de.key)}</div>
        <div class="fx-radio-group">${xe||"<span>\u2014</span>"}</div>
      </div>`}).join(""),se=["dark","light","photo"].map(de=>{let Ie=de==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${de}">
        <span class="fx-preview-bg-label">${de.toUpperCase()}</span>
        <span class="fx-preview-text" style="${V}color:${Ie}">ABC</span>
      </div>`}).join(""),oe=`${W}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ee}</div>
      </div>`;return ne&&(oe+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${ne}</div>
      </div>`),oe+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${se}</div>
      </div>
      <div class="fx-warn-box${te!=="lime"?" is-"+te:""}">
        <span class="fx-warn-chip${te!=="lime"?" is-"+te:""}">${Z}</span>
        <span class="fx-warn-text">${t(z)}</span>
      </div>
    </div>`,oe}async function m(_){n.selected=_.name;let D=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),K=document.getElementById("effectsInspectorKicker"),E=document.getElementById("effectsInspectorBody");if(D){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=_.label||_.name),K&&(K.textContent="LOADING"),E&&(E.className="hud-inspector-body",E.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(O=>{O.classList.toggle("is-selected",O.dataset.effectName===_.name)});try{let O=await b(`/admin/effects/${encodeURIComponent(_.name)}/content`),U=await O.json().catch(()=>({}));if(O.ok){let J=U.content||"";E&&(E.className="hud-inspector-body has-param-panel",E.innerHTML=l(_,J)),K&&(K.textContent=s(_.name))}else E&&(E.className="hud-inspector-body",E.textContent="# "+(U.error||g.t("effectLoadContentFailed"))),K&&(K.textContent="ERROR")}catch{E&&(E.className="hud-inspector-body",E.textContent="# "+g.t("effectsNetworkError")),K&&(K.textContent="NETWORK")}}}function w(){let _=document.getElementById("effectsInspectorReload"),D=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!n.selected){T(g.t("fxSelectFirst"),!1);return}let R=n.all.find(K=>K.name===n.selected);R&&await m(R)}),D?.addEventListener("click",()=>{if(!n.selected){T(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(n.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",w())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:d}})()});var ut=ve(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(T,g){b[T]||(b[T]=[]),b[T].push(g)},off:function(T,g){b[T]=(b[T]||[]).filter(function(f){return f!==g})},emit:function(T,g){(b[T]||[]).forEach(function(f){f(g)})}}})()});var mt=ve(()=>{(function(){"use strict";let b="sec-events",T="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[y]})},A={events:[],filterSev:"all",filterCat:"all",timer:0};function j(I){let y=(I.source||I.kind||"").toLowerCase(),p=(I.action||"").toLowerCase();return y.includes("plugin")||p.includes("plugin")?"plugin":y.includes("webhook")||p.includes("webhook")?"webhook":y.includes("rate")||p.includes("rate")||p.includes("limit")?"rate":y.includes("filter")||p.includes("filter")?"filter":y.includes("overlay")||p.includes("overlay")||y==="broadcast"?"overlay":y.includes("backup")||p.includes("backup")?"backup":y.includes("msg")||y==="messaging"?"msg":y.includes("ws")||y==="websocket"?"ws":"system"}let B=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,x=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function u(I){let y=(I.action||I.kind||"").toLowerCase();return I.severity?I.severity:B.test(y)?"error":x.test(y)?"warn":"info"}function N(I){let y=I.source||"system",p=I.action||I.kind||"";return p?`${y.toUpperCase()}_${p.toUpperCase()}`:y.toUpperCase()}function M(I){if(!I)return"\u2014";let y=new Date(I*1e3),p=d=>String(d).padStart(2,"0");return`${p(y.getHours())}:${p(y.getMinutes())}:${p(y.getSeconds())}`}function C(I){if(I.message)return I.message;let y=I.meta||{},p=[];if(y.from&&y.to)p.push(`${y.from} \u2192 ${y.to}`);else if(y.text_preview)p.push(`"${y.text_preview.slice(0,60)}"`);else if(Object.keys(y).length){let d=Object.keys(y).slice(0,3);for(let s of d)p.push(`${s}=${JSON.stringify(y[s]).slice(0,30)}`)}return p.length?p.join(" \xB7 "):`${I.source||"system"}.${I.action||I.kind||"?"}`}function S(){return`
      <div id="${b}" class="admin-ev-v4 hud-page-stack lg:col-span-2" style="display:none">
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
      </div>`}function P(){let I=document.querySelector("[data-ev-rows]");if(!I)return;let y=A.events,p=y.filter(n=>!(A.filterSev!=="all"&&u(n)!==A.filterSev||A.filterCat!=="all"&&j(n)!==A.filterCat));p.length===0?(I.innerHTML="",window.AdminEmpty?I.appendChild(window.AdminEmpty.render("events")):I.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):I.innerHTML=p.map(n=>{let o=u(n);return`
          <div class="admin-ev-v4__row" data-sev="${o}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(M(n.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${o}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${o}">${f(N(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(n.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(C(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let d={all:y.length,info:0,warn:0,error:0};for(let n of y)d[u(n)]+=1;Object.keys(d).forEach(n=>{let o=document.querySelector(`[data-ev-cnt="${n}"]`);o&&(o.textContent=String(d[n]))});let s=document.querySelector("[data-ev-total]");s&&(s.textContent=`${p.length} / ${y.length}`)}async function L(){try{let I=await fetch(T,{credentials:"same-origin"});if(!I.ok)return;let y=await I.json();A.events=Array.isArray(y.events)?y.events:[],P()}catch{}}function $(){let I=document.getElementById(b);I&&I.addEventListener("click",y=>{let p=y.target.closest("[data-ev-sev]");if(p){I.querySelectorAll("[data-ev-sev]").forEach(n=>n.classList.toggle("is-active",n===p)),A.filterSev=p.dataset.evSev,P();return}let d=y.target.closest("[data-ev-cat]");if(d){I.querySelectorAll("[data-ev-cat]").forEach(n=>n.classList.toggle("is-active",n===d)),A.filterCat=d.dataset.evCat,P();return}let s=y.target.closest("[data-ev-action]");if(s){if(s.dataset.evAction==="refresh")L();else if(s.dataset.evAction==="export"){let n=new Blob([JSON.stringify(A.events,null,2)],{type:"application/json"}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(o),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function F(){let I=document.querySelector(".admin-dash-grid"),y=document.getElementById(b);if(!y)return;let d=(I?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";y.style.display=d?"":"none",d?(L(),A.timer||(A.timer=setInterval(L,15e3))):A.timer&&(clearInterval(A.timer),A.timer=0)}function H(){let I=document.getElementById("settings-grid");!I||document.getElementById(b)||(I.insertAdjacentHTML("beforeend",S()),$(),F())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&H(),F()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",F),document.addEventListener("admin-panel-rendered",()=>{H(),F()}),H()})})()});var pt=ve(()=>{(function(){"use strict";let b="sec-modqueue",T="/admin/modqueue/list",A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},j={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},B={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},x={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function u(p){let d=0,s=String(p||"");for(let n=0;n<s.length;n++)d=d*31+s.charCodeAt(n)&65535;return d%360}function N(p){if(!p.created_at_ms)return null;let d=(Date.now()-p.created_at_ms)/1e3,s=Math.max(0,j.autoRejectSec-d);return Math.ceil(s)}function M(p,d){let s=(p.severity||"low").toLowerCase(),n=B[s]||B.low,o=u(p.fp),r=String(p.fp||"\u2014").slice(0,8),c=p.nick||p.nickname||ServerI18n.t("audienceAnonymous"),a=(c||"?").slice(0,2).toUpperCase(),t=d==="pending"?N(p):null,v=d==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${A(p.id||"")}">${A(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${A(p.id||"")}">${A(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${A(p.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",h=d==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${A(ServerI18n.t("modqueueStampApproved"))} \xB7 ${A(p.resolved_by||"admin")} \xB7 ${A(p.resolved_ago||"")}
        </div>`:d==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${p.auto_rejected?`${A(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${A(ServerI18n.t("modqueueAutoRejectTimeout",{n:j.autoRejectSec}))}`:`${A(ServerI18n.t("modqueueStampRejected"))} \xB7 ${A(p.resolved_by||"admin")} \xB7 ${A(p.resolved_ago||"")}`}
        </div>`:"",e=d==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${A(p.id||"")}" data-mq-sev="${A(s)}" style="--mq-sev:${n}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${o})">${A(a)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${A(c)}</div>
            <div class="admin-mq-card__fp">fp:${A(r)}</div>
          </div>
          <div class="admin-mq-card__time">${A(p.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${A(p.content||p.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${n}">${A(ServerI18n.t(x[s]||x.low))}</span>
          <span class="admin-mq-card__rule">${A(ServerI18n.t("modqueueRuleLabel"))}: ${A(p.rule||p.matched_rule||"?")}</span>
          ${e}
        </div>
        ${v}
        ${h}
      </div>`}function C(p,d,s){p&&(p.innerHTML=d.map(n=>M(n,s)).join(""))}function S(){let p=document.getElementById(b);if(!p)return;p.querySelectorAll("[data-mq-bulk]").forEach(s=>{s.disabled=!0}),p.querySelector(".admin-mq__body").hidden=!0;let d=p.querySelector("[data-mq-empty]");d&&window.AdminEmpty&&(d.hidden=!1,d.innerHTML="",d.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let p=document.getElementById(b);if(!p)return;if(j.pending.length+j.approved.length+j.rejected.length===0){S();return}p.querySelector(".admin-mq__body").hidden=!1;let s=p.querySelector("[data-mq-empty]");s&&(s.hidden=!0),C(p.querySelector("[data-mq-col-pending]"),j.pending,"pending"),C(p.querySelector("[data-mq-col-approved]"),j.approved,"approved"),C(p.querySelector("[data-mq-col-rejected]"),j.rejected,"rejected");let n=(a,t)=>{p.querySelectorAll(a).forEach(v=>{v.textContent=String(t)})};n("[data-mq-cnt-pending]",j.pending.length),n("[data-mq-cnt-approved]",j.approved.length),n("[data-mq-cnt-rejected]",j.rejected.length);let o=j.pending.length===0;p.querySelectorAll("[data-mq-bulk]").forEach(a=>{a.disabled=o});let r=j.pending[j.pending.length-1],c=p.querySelector("[data-mq-oldest]");if(c){let a=r?N(r):null;c.textContent=a!=null?`oldest: ${a}s`:""}n("[data-mq-throughput]",j.stats.throughput.toFixed?j.stats.throughput.toFixed(1):j.stats.throughput),n("[data-mq-avg-review]",j.stats.avg_review_sec.toFixed?j.stats.avg_review_sec.toFixed(1):j.stats.avg_review_sec),n("[data-mq-auto-rate]",Math.round(j.stats.auto_reject_pct||0)+"%")}async function L(){try{let p=await fetch(T,{credentials:"same-origin"});if(!p.ok){j.pending=[],j.approved=[],j.rejected=[],P();return}let d=await p.json();j.pending=Array.isArray(d.pending)?d.pending:[],j.approved=Array.isArray(d.approved)?d.approved:[],j.rejected=Array.isArray(d.rejected)?d.rejected:[],j.stats=d.stats||j.stats,typeof d.auto_reject_sec=="number"&&(j.autoRejectSec=d.auto_reject_sec),P()}catch{}}async function $(p,d,s){if(window.csrfFetch)try{let n=await window.csrfFetch("/admin/modqueue/"+d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,...s||{}})});if(n.ok)window.showToast&&window.showToast(d==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),L();else{let o=await n.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:o.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function F(){return`
      <div id="${b}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${A(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${A(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${A(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${A(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${A(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function H(){let p=document.getElementById(b);p&&p.addEventListener("click",async d=>{let s=d.target.closest("[data-mq-action]");if(s){let o=s.dataset.mqId,r=s.dataset.mqAction;(r==="approve"||r==="reject")&&$(o,r);return}let n=d.target.closest("[data-mq-bulk]");if(n){let o=n.dataset.mqBulk,r=o==="approve-low";if(!await window.HudConfirm?.open({icon:r?"\u2713":"\u2298",title:r?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:r?"warn":"danger",body:r?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:r?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let a=o.startsWith("approve")?"approve":"reject",t=o.endsWith("low")?"low":"high";$(null,"bulk",{action:a,severity:t})}})}function I(){let p=document.querySelector(".admin-dash-grid"),d=document.getElementById(b);if(!d)return;let s=(location.hash||"").replace("#/","").split("/"),n=p?.dataset.activeRoute||s[0]||"",o=p?.dataset.activeLeaf||s[1]||"",r=n==="modqueue"||n==="moderation"&&(o==="queue"||o===""||o==="moderation");d.style.display=r?"":"none",r?(j.timer||(L(),j.timer=setInterval(L,4e3)),j.countdownTimer||(j.countdownTimer=setInterval(P,1e3))):(j.timer&&(clearInterval(j.timer),j.timer=0),j.countdownTimer&&(clearInterval(j.countdownTimer),j.countdownTimer=0))}function y(){let p=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!p||document.getElementById(b)||(p.insertAdjacentHTML("beforeend",F()),H(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&y(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{y(),I()}),y()})})()});var vt=ve(()=>{(function(){"use strict";let b="sec-modbans-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},A={fingerprint:"FP",ip:"IP",nick:"NICK"},j={rows:[],refreshTimer:0};async function B(){try{let F=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!F.ok)return;let H=await F.json();j.rows=Array.isArray(H.bans)?H.bans:[],N()}catch{}}function x(F){if(!F||F<=0)return"\u2014";let H=Math.floor(F/86400),I=Math.floor(F%86400/3600),y=Math.floor(F%3600/60);return H>0?`${H}d ${I}h`:I>0?`${I}h ${y}m`:`${y}m`}function u(F){let H=F.target_kind;return H==="fingerprint"?`fp:${(F.target||"").slice(0,8)}`:H==="nick"?`@${F.target}`:F.target||"\u2014"}function N(){let F=document.querySelector("[data-modbans-list]");if(!F)return;let H=j.rows||[],I=document.querySelector("[data-modbans-count]");if(I&&(I.textContent=String(H.length)),H.length===0){F.innerHTML="";let y=window.AdminEmpty.render("blacklist");y.dataset.emptyKind="modbans",F.appendChild(y);return}F.innerHTML=H.map(function(y){let p=y.status==="expired",d=y.status==="permanent",s="admin-modbans-chip is-"+y.status,n=d?ServerI18n.t("modbansPermanent"):p?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:x(y.remaining_s)}),o=encodeURIComponent(y.target_kind)+"|"+encodeURIComponent(y.target);return`
        <div class="admin-modbans-row ${p?"is-expired":""}">
          <span class="admin-modbans-target">${T(u(y))}</span>
          <span class="admin-modbans-kind">${T(A[y.target_kind]||y.target_kind)}</span>
          <span class="admin-modbans-reason">${T(y.reason||"\u2014")}</span>
          <span class="${s}">
            ${y.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${T(n)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${o}"
            ${p?"disabled":""}
            title="${p?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${p?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function M(F){let H=F||{},I=H.kind||"ban",y=window.HudConfirm,p=!H.target,d=H.target_kind||"fingerprint",s=H.target||"";return new Promise(function(n){if(!y){n(!1);return}let o=86400,r=!1,c=12,a="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${T(f[d]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${T(A[d]||"?")} ${T((I||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${T(s?u({target_kind:d,target:s}):"\u2014")}</div>
          </div>
        </div>
        ${p?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(Z){return`<button type="button" class="admin-modbans-modal-preset${Z===d?" is-active":""}"
                data-modbans-target-kind="${Z}">${T(f[Z])} ${T(A[Z])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(Z){return`<button type="button" class="${"admin-modbans-modal-preset"+(Z.defaultPick?" is-active":"")+(Z.permanent?" is-permanent":"")}" data-modbans-duration="${Z.val}">${Z.labelKey?ServerI18n.t(Z.labelKey):Z.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let v=t.querySelector("[data-modbans-custom-row]"),h=t.querySelector("[data-modbans-custom-input]"),e=t.querySelector("[data-modbans-custom-seconds]"),i=t.querySelector("[data-modbans-when]"),l=t.querySelector("[data-modbans-custom]"),m=t.querySelector("[data-modbans-target]"),w=t.querySelector("[data-modbans-target-icon]"),k=t.querySelector("[data-modbans-target-label]"),_=t.querySelector("[data-modbans-target-val]"),D=function(){w.textContent=f[d]||"?",k.textContent=`${A[d]||"?"} ${(I||"ban").toUpperCase()}`,_.textContent=s?u({target_kind:d,target:s}):"\u2014"},R=function(){return Math.max(1,parseInt(h.value,10)||1)*(a==="day"?86400:3600)},K=function(){if(o===0){i.textContent=ServerI18n.t("modbansWhenPermanent"),i.classList.remove("is-custom");return}let Z=new Date(Date.now()+o*1e3),z=W=>String(W).padStart(2,"0"),Q=`${Z.getFullYear()}-${z(Z.getMonth()+1)}-${z(Z.getDate())} ${z(Z.getHours())}:${z(Z.getMinutes())}`;r?(i.textContent=ServerI18n.t("modbansWhenCustom",{n:c,unit:ServerI18n.t(a==="day"?"modbansDay":"modbansHour"),stamp:Q}),i.classList.add("is-custom")):(i.textContent=ServerI18n.t("modbansWhenPreset",{dur:x(o),stamp:Q}),i.classList.remove("is-custom"))},E=function(){let Z=R();e.textContent=`= ${Z.toLocaleString()}s`,r&&(c=Math.max(1,parseInt(h.value,10)||1),o=Z,K())},O=t.querySelector("[data-modbans-presets]"),U=function(){r=!0,v.hidden=!1,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(Z){Z.classList.toggle("is-active",Z===l)}),E()},J=function(Z){r=!1,v.hidden=!0,O.querySelectorAll(".admin-modbans-modal-preset").forEach(function(z){z.classList.toggle("is-active",z===Z)})};D(),K(),E(),t.addEventListener("click",function(Z){let z=Z.target.closest("[data-modbans-target-kind]");if(z){d=z.dataset.modbansTargetKind,z.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(V){V.classList.toggle("is-active",V===z)}),D();return}if(Z.target.closest("[data-modbans-custom]")){U();return}let Q=Z.target.closest("[data-modbans-custom-unit]");if(Q){a=Q.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(V){V.classList.toggle("is-active",V===Q)}),E();return}let W=Z.target.closest("[data-modbans-duration]");W&&(o=parseInt(W.dataset.modbansDuration,10)||0,J(W),K())}),h.addEventListener("input",E),m&&m.addEventListener("input",function(){s=m.value.trim(),D()});let te=t.querySelector("[data-modbans-reason]");y.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(Z){if(!Z){n(!1);return}if(!s){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),n(!1);return}o===0?y.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${T(u({target_kind:d,target:s}))}</b>`})}).then(function(z){if(!z){n(!1);return}C(d,s,o,te.value.trim(),I).then(n)}):C(d,s,o,te.value.trim(),I).then(n)})})}async function C(F,H,I,y,p){try{let d=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:F,target:H,duration_s:I,reason:y||"",kind:p||"ban"})});if(!d.ok)throw new Error(`HTTP ${d.status}`);return window.showToast&&window.showToast(I===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:x(I)}),!0),B(),!0}catch(d){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:d.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function S(F){let H=(F||"").split("|");if(H.length!==2)return;let I=decodeURIComponent(H[0]),y=decodeURIComponent(H[1]);try{let p=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:y})});if(!p.ok)throw new Error(`HTTP ${p.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),B()}catch(p){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:p.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
      <div id="${b}" class="admin-modbans-page hud-page-stack lg:col-span-2">
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
      </div>`}function L(){let F=document.getElementById(b);if(!F||F.dataset.modbansBound==="1")return;F.dataset.modbansBound="1",F.addEventListener("click",function(I){if(I.target.closest("[data-modbans-add]")){M({kind:"ban"});return}let y=I.target.closest("[data-modbans-unban]");y&&!y.disabled&&S(y.dataset.modbansUnban)});let H=F.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function $(){let F=document.getElementById("settings-grid");!F||document.getElementById(b)||(F.insertAdjacentHTML("beforeend",P()),L(),B(),j.refreshTimer||(j.refreshTimer=setInterval(B,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&$()}),window.ModBans={openPicker:M,refreshList:B,formatTarget:u,formatRemaining:x}})()});var ft=ve(()=>{(function(){"use strict";let b="admin-mobile-nav-root",T=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},A=!1,j=0;function B(){return`
      <nav id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${g.map(L=>`
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
      </nav>`}function x(){let L=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",$=f[L]||L;return T.some(F=>F.id===$)?$:g.some(F=>F.route===$)?"more":""}function u(){let L=document.getElementById(b);if(!L)return;let $=x();L.querySelectorAll("[data-mn-tab]").forEach(F=>{F.classList.toggle("is-active",F.dataset.mnTab===$),F.dataset.mnTab!=="more"&&F.setAttribute("aria-current",F.dataset.mnTab===$?"page":"false")})}function N(L){let $=document.getElementById(b);if(!$)return;A=L,$.dataset.overflow=L?"open":"closed",$.querySelector("[data-mn-overflow]").hidden=!L,$.querySelector("[data-mn-backdrop]").hidden=!L;let F=$.querySelector("[data-mn-tab='more']");F?.classList.toggle("is-active",L),F?.setAttribute("aria-expanded",L?"true":"false")}function M(L){if(L.target.closest("[data-mn-backdrop]")){N(!1);return}if(L.target.closest("[data-mn-logout]")){N(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let $=L.target.closest("[data-mn-tab]");if($){if($.dataset.mnTab==="more"){N(!A);return}N(!1),$.dataset.mnRoute&&(location.hash="#/"+$.dataset.mnRoute);return}let F=L.target.closest("[data-mn-route]");F&&F.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+F.dataset.mnRoute)}async function C(){try{let L=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!L.ok)return;let $=await L.json(),F=Array.isArray($.pending)?$.pending.length:0;j=F;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(F),H.hidden=!(F>0)}catch{}}function S(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let L=0;function $(){let F=document.activeElement,H=F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(L),L=requestAnimationFrame($)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(L),L=requestAnimationFrame(()=>setTimeout($,50))})}function P(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",B()),document.addEventListener("click",M),window.addEventListener("hashchange",()=>{N(!1),u()}),u(),C(),setInterval(C,8e3),S())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var ht=ve(()=>{(function(){"use strict";var b="admin-session-expired-root",T=!1,g=null;function f(u,N){try{var M=window.ServerI18n&&ServerI18n.t(u);return M&&M!==u?M:N}catch{return N}}function A(){var u=document.getElementById(b);if(u&&u.remove(),document.body.classList.remove("is-session-expired"),T=!1,g&&g.focus)try{g.focus()}catch{}g=null}function j(u){if(u.key==="Tab"){var N=document.getElementById(b);if(N){var M=N.querySelectorAll("input, button");if(M.length){var C=M[0],S=M[M.length-1];u.shiftKey&&document.activeElement===C?(u.preventDefault(),S.focus()):!u.shiftKey&&document.activeElement===S&&(u.preventDefault(),C.focus())}}}}function B(){if(!(T||document.getElementById(b))){T=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var u=document.createElement("div");u.id=b,u.className="admin-sx",u.setAttribute("role","alertdialog"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-labelledby","admin-sx-title"),u.setAttribute("aria-describedby","admin-sx-body"),u.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(u),document.addEventListener("keydown",j,!0);var N=u.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),u.querySelector("[data-sx-form]").addEventListener("submit",function(M){M.preventDefault(),x(u,N)})}}function x(u,N){var M=u.querySelector("[data-sx-error]"),C=u.querySelector(".admin-sx__submit");M.hidden=!0,C.disabled=!0;var S=new URLSearchParams;S.set("password",N.value),u.querySelector("#admin-sx-remember").checked&&S.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:S.toString()}).then(function(L){return L.json().then(function($){return{status:L.status,data:$}},function(){return{status:L.status,data:{}}})}).then(function(L){if(C.disabled=!1,L.status===200&&L.data&&L.data.ok){var $=document.querySelector('meta[name="csrf-token"]');$&&L.data.csrf_token&&($.content=L.data.csrf_token),document.removeEventListener("keydown",j,!0),A(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}L.status===429?M.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):M.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),M.hidden=!1,N.select()}).catch(function(){C.disabled=!1,M.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),M.hidden=!1})}window.AdminSessionExpired={open:B,close:A,isOpen:function(){return T}}})()});var gt=ve(()=>{(function(){"use strict";let b="admin-reconnect-banner",A=0,j=0,B="ok",x=0,u=5e3,N=!1,M=0;function C(s){if(B!==s){if(B=s,s==="ok"||s==="dismissed"){P(),s==="ok"&&(A=0,j=0,u=5e3);return}S()}}function S(){let s=document.getElementById(b);s||(s=document.createElement("div"),s.id=b,s.className="admin-rcb",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),document.body.insertBefore(s,document.body.firstChild)),s.dataset.state=B;let n=B==="exhausted",o=n?"admin-rcb--crimson":"admin-rcb--amber";s.className=`admin-rcb ${o}`,s.innerHTML=n?$():L(),s.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),s.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>C("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",n),M||(M=setInterval(F,250))}function P(){let s=document.getElementById(b);s&&s.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),M&&(clearInterval(M),M=0)}function L(){let s=Math.max(0,(x-Date.now())/1e3),n=u/1e3,o=Math.min(100,(n-s)/n*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:j})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${o}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function $(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function F(){if(B!=="reconnecting")return;let s=document.getElementById(b);if(!s)return;let n=Math.max(0,(x-Date.now())/1e3),o=u/1e3,r=Math.min(100,(o-n)/o*100),c=s.querySelector(".admin-rcb__progress-fill");c&&(c.style.width=r+"%")}function H(){j=0,A=0,u=5e3,C("reconnecting"),I()}async function I(){try{let s=await fetch("/admin/bootstrap",{credentials:"same-origin"});s.ok?y():s.status===401||s.status===403?C("ok"):p()}catch{p()}}function y(){C("ok")}function p(){if(A+=1,j+=1,j>=10){C("exhausted");return}A>=3&&(u=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,j-1))),x=Date.now()+u,C("reconnecting"),setTimeout(I,u))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let s=window.csrfFetch,n=window.fetch;window.__adminRawFetch=n,document.addEventListener("admin:session-restored",()=>{N=!1,y()});async function o(r){try{let c=await r;return c&&c.ok?B!=="ok"&&B!=="dismissed"&&y():c&&c.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):c&&c.status>=500&&p(),c}catch(c){throw p(),c}}typeof s=="function"&&(window.csrfFetch=function(){return o(s.apply(this,arguments))}),window.fetch=function(r,c){let a=typeof r=="string"?r:r&&r.url||"",t=n.call(this,r,c);return a.startsWith("/admin/")||a.indexOf("//")===-1&&a.startsWith("admin/")?o(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var yt=ve(()=>{(function(){"use strict";let b="admin-help-drawer-root",T={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function A(L){return L==null?"":String(L).replace(/[&<>"']/g,function($){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[$]})}function j(){let L=(location.hash||"").replace("#/","").split("/")[0]||"";return T[L]?L:"_default"}function B(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function x(){let L=T[j()],$=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",F=L.titleKey?ServerI18n.t(L.titleKey):L.title,H=L.tipKeys.map(d=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${A(typeof d=="string"?ServerI18n.t(d):d.literal)}</span>
      </div>`).join(""),I=L.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${A(ServerI18n.t(L.fieldTipKey))}</span>
      </div>`:"",y=g.map(d=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${A(d.term)}</div>
        <div class="admin-help__glossary-def">${A(ServerI18n.t(d.defKey))}</div>
      </div>`).join(""),p=f.map(d=>`
      <a class="admin-help__resource" href="${A(d.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${A(d.label)}</span>
        <span class="admin-help__resource-url">${A(d.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${A(F)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${I}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${A(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${y}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${p}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${$?"v"+A($):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function u(){let L=document.getElementById(b);L||(document.body.insertAdjacentHTML("beforeend",B()),L=document.getElementById(b),L.addEventListener("click",$=>{if($.target.closest("[data-help-close]")){N();return}$.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),L.querySelector("[data-help-body]").innerHTML=x(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",C)}function N(){let L=document.getElementById(b);L&&L.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",C)}function M(){document.getElementById(b)?N():u()}function C(L){L.key==="Escape"&&(L.preventDefault(),N())}function S(L){let $=L.target;$&&($.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable)||L.key==="F1"&&(L.preventDefault(),M())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",S)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:u,close:N,toggle:M}})()});var bt=ve(()=>{(function(){"use strict";var b="admin-shortcuts-root",T=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(p,d){try{var s=window.ServerI18n&&ServerI18n.t(p);return s&&s!==p?s:d}catch{return d}}function f(p,d){window.showToast&&window.showToast(p,d!==!1)}function A(p,d){return(window.csrfFetch||window.fetch)(p,d||{})}function j(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function B(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function x(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function u(){var p="idle";try{var d=await fetch("/admin/poll/status",{credentials:"same-origin"});d.ok&&(p=(await d.json()).state||"idle")}catch{}if(p==="idle"){location.hash="#/polls",f(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var s=p==="active";try{var n=await A(s?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!n.ok)throw new Error("HTTP "+n.status);f(g(s?"ksToastPollEnded":"ksToastPollStarted",s?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(p){return T?p.metaKey:p.ctrlKey}var M=T?"\u2318":"Ctrl",C=[{group:"global",keys:[M,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(p){return N(p)&&(p.key==="k"||p.key==="K")},run:j},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(p){return p.key==="?"&&!N(p)&&!p.altKey||p.key==="/"&&N(p)},run:function(){H()}},{group:"global",keys:[M,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(p){return N(p)&&p.shiftKey&&(p.key==="d"||p.key==="D")},run:B},{group:"global",keys:[M,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(p){return N(p)&&p.shiftKey&&p.key==="Backspace"},run:x},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(p){return!N(p)&&"jkJK".indexOf(p.key)>=0},run:function(p){window.AdminLiveFeed.moveFocus(p.key==="j"||p.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(p){return!N(p)&&(p.key==="b"||p.key==="B")},run:function(p){window.AdminLiveFeed.blockFocused(p.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(p){return!N(p)&&p.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(p){return!N(p)&&(p.key==="p"||p.key==="P")},run:u}];function S(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})}function P(p){return C.filter(function(d){return d.group===p}).map(function(d){var s=d.keys.map(function(n){return n==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+S(n)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+S(g(d.labelKey,d.fallback))+'</span><span class="admin-ks__keys">'+s+"</span></div>"}).join("")}function L(){var p=document.getElementById(b);p&&p.remove(),document.removeEventListener("keydown",$,!0)}function $(p){(p.key==="Escape"||p.key==="?")&&(p.preventDefault(),L())}function F(){if(!document.getElementById(b)){var p=document.createElement("div");p.id=b,p.className="admin-ks",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-ks-title"),p.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+S(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+S(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+S(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+S(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+S(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(p),p.addEventListener("click",function(s){s.target.closest("[data-ks-close]")&&L()}),document.addEventListener("keydown",$,!0);var d=p.querySelector(".admin-ks__close");d&&setTimeout(function(){try{d.focus()}catch{}},30)}}function H(){document.getElementById(b)?L():F()}function I(p){if(!p)return!1;if(p.isContentEditable)return!0;var d=(p.tagName||"").toLowerCase();return d==="input"||d==="textarea"||d==="select"}function y(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(p){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var d=I(document.activeElement),s=0;s<C.length;s++){var n=C[s];if(n.group==="feed"){if(d||!y())continue}else if(d&&!N(p))continue;if(n.match(p)){p.preventDefault(),n.run(p);return}}}),window.AdminShortcuts={open:F,close:L,toggle:H,list:function(){return C.slice()}}})()});var wt=ve(()=>{(function(){"use strict";let b="theme-mode",T="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let S=localStorage.getItem(T);(S==="light"||S==="dark"||S==="auto")&&(localStorage.setItem(b,S),localStorage.removeItem(T))}catch{}})();function A(){try{let C=localStorage.getItem(b);if(C==="light"||C==="dark"||C==="auto")return C}catch{}return"auto"}function j(C){try{localStorage.setItem(b,C)}catch{}}function B(C){let S=document.documentElement;C==="auto"?S.removeAttribute("data-theme"):S.setAttribute("data-theme",C),u(C)}function x(C){return C==="light"||C==="dark"?C:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function u(C){let S=document.getElementById(g);if(!S)return;let P=x(C);S.dataset.mode=C,S.dataset.effective=P,S.textContent=C==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",S.title=C==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):C==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let C=A(),S=C==="auto"?"light":C==="light"?"dark":"auto";j(S),B(S)}function M(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let C=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,S=document.getElementById(g);if(S){C&&S.classList.contains("admin-theme-toggle--floating")&&C.parentNode&&!C.parentNode.contains(S)&&(S.classList.remove("admin-theme-toggle--floating"),C.parentNode.insertBefore(S,C));return}let P=document.createElement("button");P.id=g,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",N),C&&C.parentNode?C.parentNode.insertBefore(P,C):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),u(A())}if(B(A()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{A()==="auto"&&u("auto")})}catch{}window.addEventListener("storage",C=>{C.key===b&&B(A())}),window.AdminThemeSwitcher={getMode:A,setMode:function(C){C!=="auto"&&C!=="light"&&C!=="dark"||(j(C),B(C),u(C),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:C}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{M(),new MutationObserver(M).observe(document.body,{childList:!0,subtree:!0})}):(M(),new MutationObserver(M).observe(document.body,{childList:!0,subtree:!0}))})()});var St=ve(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},T=[];window.DanmuStore={get:function(g){return b[g]},set:function(g,f){b[g]=f,T.forEach(function(A){A(g,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,f)},subscribe:function(g){T.push(g)},getAll:function(){return Object.assign({},b)}}})()});var kt=ve(()=>{(function(){"use strict";let g=0;function f(){return window.__adminCtx||{}}function A(){let u=f();return typeof u.getSettings=="function"?u.getSettings()||{}:{}}function j(){let u=A();if(u&&typeof u.OpsContact<"u"){let N=u.OpsContact;if(Array.isArray(N))return N[3]||N[0]||null;if(typeof N=="string")return N}return null}function B(){let u=f().appContainer||document.getElementById("app-container");if(!u)return;let N=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";u.innerHTML=`
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
    `;let M=u.querySelector("[data-login-reveal]");M&&M.addEventListener("click",()=>{let L=document.getElementById("password");if(!L)return;let $=L.type==="text";L.type=$?"password":"text",M.textContent=ServerI18n.t($?"adminLoginReveal":"adminLoginHide");try{L.focus()}catch{}});let C=document.getElementById("loginForm"),S=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(C){try{let L=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(L)&&L>0){g=L;let $=Math.max(0,5-g);if(P&&g>0&&$>0){P.hidden=!1;let F=document.getElementById("password");F&&F.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:$})}}}catch{}C.addEventListener("submit",async L=>{if(L.preventDefault(),!S)return;let $=new URLSearchParams;$.set("password",S.value),document.getElementById("admin-login-remember")?.checked&&$.set("remember","1");try{let F=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:$.toString(),redirect:"manual"});if(F.status===429){let H=F.headers.get("Retry-After"),I=parseInt(H,10),y=Number.isFinite(I)&&I>0?I:300;x(y);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(F){console.error("Login submit failed:",F),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function x(u){let N=document.getElementById("adminLoginCard");if(!N)return;let M=j(),C=M?`<a class="admin-lockout-contact" href="${M}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";N.classList.add("admin-lockout-card"),N.innerHTML=`
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
        ${C}
      </div>
    `;let S=document.getElementById("lockoutCountdown"),P=u,L=F=>{let H=Math.floor(F/60),I=F%60;return`${String(H).padStart(2,"0")}:${String(I).padStart(2,"0")}`};S&&(S.textContent=L(P));let $=setInterval(()=>{P-=1,S&&(S.textContent=L(Math.max(0,P))),P<=0&&(clearInterval($),g=0,B(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:B,renderLockout:x}})()});var It=ve(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function T(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}async function g(){try{let e=b();await e.prime();let i=e.get("history_stats"),[l,m,w]=await Promise.all([i?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!m.ok)return;let k=i||(l&&l.ok?await l.json():null);if(!k)return;let _=(await m.json()).distribution||[],D=k.stats&&k.stats.total||0,R=_.reduce((Z,z)=>z.count>(Z?.count||-1)?z:Z,null),K=R?R.count:0,E=R?(R.hour||"").slice(-5):"\u2014",O=document.querySelector('[data-kpi="messages"]');O&&(O.querySelector("[data-kpi-value]").textContent=D.toLocaleString());let U=document.querySelector('[data-kpi="peak"]');U&&(U.querySelector("[data-kpi-value]").textContent=K.toLocaleString());let J=document.querySelector('[data-kpi="unique-fp"]');if(J){let Z=new Set;(k.records||[]).forEach(z=>{let Q=z.fingerprint||z.fp||z.user_fingerprint;Q&&Z.add(Q)}),J.querySelector("[data-kpi-value]").textContent=Z.size.toLocaleString()}let te=document.querySelector('[data-kpi="session"]');if(te){let Z=w&&w.ok?await w.json():null,z=Z&&Z.status==="live",Q=te.querySelector("[data-kpi-value]");if(z&&Z.started_at){let W=Math.max(0,Math.floor(Date.now()/1e3-Z.started_at)),V=Math.floor(W/3600),ee=Math.floor(W%3600/60);Q.textContent=V>0?`${V}:${String(ee).padStart(2,"0")}:${String(W%60).padStart(2,"0")}`:`${ee}:${String(W%60).padStart(2,"0")}`}else Q.textContent="\u2014"}}catch{}}function f(e,i){let l=document.querySelector(e);if(l){if(typeof i!="number"||i<=0){l.hidden=!0;return}l.hidden=!1,l.textContent=i>999?"999+":String(i)}}async function A(){try{let e=b();await e.prime();let i=e.get("blacklist"),l=e.get("widgets"),m=e.get("history_stats"),w=e.get("effects"),k=e.get("themes");f("[data-count-blacklist]",Array.isArray(i)?i.length:0),f("[data-count-widgets]",Array.isArray(l?.widgets)?l.widgets.length:0),f("[data-count-messages]",m?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(w?.effects)?w.effects.length:0),f("[data-count-themes]",Array.isArray(k?.themes)?k.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let D=await _.json();f("[data-count-plugins]",Array.isArray(D?.plugins)?D.plugins.length:0)}}catch{}}catch{}}async function j(){A(),B(),v()}async function B(){let e=document.querySelector("[data-dash-poll-body]"),i=document.querySelector("[data-dash-poll-timer]");if(e)try{let l=b();await l.prime();let w=l.get("metrics");if(!w){let K=await fetch("/admin/metrics",{credentials:"same-origin"});if(!K.ok)return;w=await K.json()}let k=w.poll_state;if(!k||!k.active||!Array.isArray(k.options)||k.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,i&&(i.textContent="");return}let _=k.options.reduce((K,E)=>K+(E.votes||0),0),D=["A","B","C","D","E","F"],R=0;if(k.options.forEach((K,E)=>{(K.votes||0)>(k.options[R].votes||0)&&(R=E)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${T(k.question||ServerI18n.t("dashPollRunning"))}</div>`+k.options.map((K,E)=>{let O=_?Math.round(K.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${E===R&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${D[E]||String(E+1)}</span>
                <span class="label">${T(K.label||"")}</span>
                <span class="pct">${O}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:K.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${O}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,i){let K=k.remaining_seconds;i.textContent=typeof K=="number"&&K>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(K/60),ss:String(K%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function x(e){let i=e.visible!==!1,l=e.config&&e.config.title||e.type||"widget",m=(e.type||"widget").toUpperCase(),w=(e.position||"\u2014").toUpperCase(),k=i?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=e.created_at&&i?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,D=_!=null?(()=>{let R=Math.floor(_/86400),K=Math.floor(_%86400/3600),E=Math.floor(_%3600/60),O=_%60;return R>0?`UPTIME \xB7 ${R}d ${String(K).padStart(2,"0")}h`:K>0?`UPTIME \xB7 ${K}:${String(E).padStart(2,"0")}:${String(O).padStart(2,"0")}`:`UPTIME \xB7 ${E}:${String(O).padStart(2,"0")}`})():`STATUS \xB7 ${i?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${T(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${k}"></span>
          <span class="kind">${T(m)}</span>
          <span class="cat">${T(w)}</span>
        </div>
        <div class="title">${T(l)}</div>
        <div class="uptime">${D}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${i?" is-active":""}" data-widget-action="toggle" data-running="${i?"1":"0"}">${i?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function u(e,i){try{let l=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!i}})});if(!l.ok)throw new Error("HTTP "+l.status);M()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function N(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",i=>{let l=i.target.closest(".admin-dash-widget-tile");if(!l)return;let m=i.target.dataset.widgetAction,w=l.dataset.widgetId;if(!(!m||!w)){if(m==="toggle")u(w,i.target.dataset.running==="1");else if(m==="config"){let k=document.querySelector('[data-route="widgets"]');k&&k.click()}}}))}async function M(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let i=b();await i.prime();let l=i.get("widgets");if(!l){let w=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!w.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}l=await w.json()}let m=(l.widgets||l.items||[]).slice(0,4);if(m.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+m.map(x).join("")+"</div>",N(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let C=null,S=null,P=null;function L(e){let i=Math.max(0,Math.floor(Date.now()/1e3-e)),l=Math.floor(i/3600),m=Math.floor(i%3600/60),w=i%60;return l>0?`${l}:${String(m).padStart(2,"0")}:${String(w).padStart(2,"0")}`:`${String(m).padStart(2,"0")}:${String(w).padStart(2,"0")}`}function $(e){let i=document.getElementById("admin-session-banner"),l=document.getElementById("sec-live-feed");if(l&&l.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),i&&i.classList.toggle("is-hero",!(e&&e.status==="live")),!i)return;if(C=e,!(e&&e.status==="live"))i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let w=e.started_at||Date.now()/1e3;i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${T(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${e.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,F(w)}i.dataset.bound||(i.dataset.bound="1",i.addEventListener("click",I))}function F(e){P&&clearInterval(P);let i=()=>{let l=document.querySelector("[data-sess-timer]");l&&(l.textContent=L(e))};i(),P=setInterval(i,1e3)}function H(){P&&(clearInterval(P),P=null)}async function I(e){let i=e.target.closest("[data-sess-action]");if(!i)return;let l=i.dataset.sessAction;if(l==="open"){let m=document.querySelector("[data-sess-name]"),w=(m?m.value:"").trim();if(!w){m&&m.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}i.disabled=!0;try{let k=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w})}),_=await k.json();if(!k.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:w}),!0),$(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{i.disabled=!1}}else if(l==="close"){let m=i.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",w=(D,R)=>`<option value="${D}"${D===m?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${w("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${w("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${w("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;i.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==m)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let D=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await D.json();if(!D.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),$({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{i.disabled=!1}}}async function y(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let i=await e.json();$(i)}catch{}}function p(){y(),S&&clearInterval(S),S=setInterval(y,1e4)}function d(){S&&(clearInterval(S),S=null),H()}let s=null,n=null,o=0;function r(){let e=document.querySelector("[data-cockpit-overlay]"),i=window.AdminOverlayControl,l=n;if(!e||!i||!l)return;e.classList.toggle("is-on",l.live);let m=(_,D)=>{_.textContent!==D&&(_.textContent=D)},w=e.querySelector("[data-cockpit-status]");w&&m(w,i.statusText(l.live,l.count));let k=e.querySelector('[data-cockpit-action="toggle"]');k&&(k.dataset.i18n=i.toggleKey(l.live),m(k,ServerI18n.t(k.dataset.i18n)),k.dataset.next=l.live?"standby":"live")}async function c(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let i=o,l=null,m=null;try{let _=await fetch("/overlay_status",{credentials:"same-origin"});_.ok&&(l=(await _.json()).overlay_count||0)}catch{}try{let _=await fetch("/admin/broadcast/status",{credentials:"same-origin"});_.ok&&(m=(await _.json()).mode==="live")}catch{}let w=n;if(!w&&m===null)return;n={live:m!==null&&i===o?m:w?w.live:m,count:l!==null?l:w?w.count:0},r()}document.addEventListener("admin-overlay-state",e=>{let i=e&&e.detail||{};o+=1,n={live:!!i.live,count:typeof i.count=="number"?i.count:n?n.count:0},r()}),document.addEventListener("admin-route-applied",e=>{let i=e&&e.detail&&e.detail.route;i!=="live"&&i!=="dashboard"||(r(),c())});function a(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async m=>{let w=m.target.closest("[data-cockpit-action]");if(!w)return;let k=w.dataset.cockpitAction;if(k==="clear"){window.AdminOverlayControl?.clearScreen();return}k==="toggle"&&(await window.AdminOverlayControl?.setDisplay(w.dataset.next==="live"),c())});let i=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');i&&i.addEventListener("click",t);let l=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');l&&l.addEventListener("click",()=>{location.hash="#/polls"})}async function t(){let e;try{let m=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!m.ok)throw new Error("HTTP "+m.status);e=await m.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let i=document.createElement("div");i.className="admin-soh-qr",i.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:i,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(e.url)}function v(){a(),c(),s&&clearInterval(s),s=setInterval(c,5e3)}function h(){s&&(clearInterval(s),s=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:j,refreshSidebarBadges:A,populatePoll:B,populateWidgets:M,refreshSessionBanner:y,startSessionPolling:p,stopSessionPolling:d,refreshCockpitOverlay:c,renderCockpitOverlay:r,startCockpitPolling:v,stopCockpitPolling:h}})()});var Tt=ve(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",T=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(G){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[G]})},A={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},j=[14,20,32,44,64],B=window.DANMU_CONFIG?.defaultColorPalette||[],x=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function u(q,G){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(q,G);if(Y&&Y!==q)return Y}return q}let N={};function M(q){if(N[q]!=null)return N[q];let G=A[q];return G?G.step:1}function C(q,G){N[q]=Number(G)||M(q)}let S={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},P=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],L=["Color","FontFamily","Layout"];function $(q){return L.indexOf(q)!==-1}function F(q){let G=S.options&&S.options[q],Y=G&&G[1];return Array.isArray(Y)?Y.slice():[]}function H(q){return q==="Color"?B.map(G=>G.replace(/^#/,"").toUpperCase()):q==="Layout"?x.map(G=>G.value):q==="FontFamily"?(S.fonts&&S.fonts.length?S.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function I(q,G){return q==="Color"?String(G||"").replace(/^#/,"").toUpperCase():String(G||"")}function y(){return`
      <div id="${b}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${f(u("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${f(u("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${u("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${f(u("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlMaxTracks"))}
                <span class="sub">${f(u("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlAvoidOverlap"))}
                <span class="sub">${f(u("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${f(u("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${f(u("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlSafeArea"))}
                <span class="sub">${f(u("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${f(u("dlStrokeMode"))}
                <span class="sub">${f(u("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${f(u("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${f(u("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${f(u("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${f(u("dlDimPollVotes"))}
                <span class="sub">${f(u("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${f(u("dlPollVoteOpacity"))}
                <span class="sub">${f(u("dlPollVoteOpacityHint"))}</span>
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
          <div class="admin-ui-group-label">${f(u("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${f(u("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall" data-vi-row style="display:none;flex-wrap:wrap">
              <label class="lbl" for="viewer-images-hosts">${f(u("viHosts"))}</label>
              <span class="val" style="flex:1 1 240px;min-width:0">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off" style="resize:vertical;min-height:64px"
                  placeholder="${f(u("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row" data-vi-row style="display:none;flex-wrap:wrap" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${f(u("viExtensions"))}</span>
              <span class="val" id="viewer-images-extensions" style="flex-wrap:wrap;gap:12px">
                ${P.map(q=>`
                <label style="display:inline-flex;align-items:center;gap:6px;min-height:44px">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${q.value}" />
                  <span>${q.label}</span>
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
              <span>${f(u("displayColParam"))}</span>
              <span data-dsp-only="values">${f(u("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${f(u("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(u("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${f(u("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${f(u("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${f(u("displayPreviewSample2"))}</span>
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
                <span>${f(u("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${f(u("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${f(u("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${f(u("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${f(u("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span data-i18n="displayAdminControlledTitle">${f(u("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${f(u("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${f(u("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${f(u("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${f(u("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${f(u("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${f(u("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${f(u("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${f(u("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6"
                   data-i18n="displayAdminControlledNote">${f(u("displayAdminControlledNote"))}</div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(u("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let p=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>d(q),noRange:!0}];function d(q){let G=x.find(Y=>Y.value===q);return G?u(G.labelKey):q||"\u2014"}function s(q,G){let Y=G[0]!==!1,X=G[3],ce=A[q.key];if(q.key==="Opacity"||q.key==="Speed"){let ue=ce,me=X!=null?Number(X):ue.min,be=isFinite(me)?me:ue.min,we=(be-ue.min)/Math.max(1e-6,ue.max-ue.min)*100;return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            min="${ue.min}" max="${ue.max}" step="${M(q.key)}" value="${f(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${we.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${we.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}"
              min="${ue.min}" max="${ue.max}" step="${M(q.key)}" value="${f(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ue.min}${ue.unit}</span><span>${ue.max}${ue.unit}</span>
            </div>
          </div>
        </div>`}if(q.key==="FontSize"){let ue=Number(X);return`
        <div class="admin-dsp2-chiprow">
          ${j.map(me=>`<button type="button" class="admin-dsp2-fchip ${ue===me?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${me}">${me}</button>`).join("")}
        </div>`}if(q.key==="Color"){let ue="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${t().map(me=>{let be=me.slice(1),we=me.toUpperCase()===ue;return`<button type="button" class="admin-dsp2-swatch ${we?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${me}" aria-label="${me}" aria-pressed="${we}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(u("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ue)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ue=(S.fonts&&S.fonts.length?S.fonts:["NotoSansTC","Inter"]).map(Te=>{let Ae=typeof Te=="string"?Te:Te.name||Te.family||"",Be=typeof Te=="string"?Te:Te.label||Te.name||Te.family||"";return{value:Ae,label:Be}}).filter(Te=>Te.value),me=String(X||""),be=!!S.allowlistEdit.FontFamily,we=be?S.allowlistEdit.FontFamily:new Set(F("FontFamily").map(Te=>I("FontFamily",Te))),ye=!be&&we.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ue.map(Te=>{let Ae=Te.value===me,Be=be?we.has(Te.value):ye||we.has(Te.value),Ue=["admin-dsp2-tchip",Ae?"is-active":"",be?"is-editing":"",Be?"":"is-blocked"].filter(Boolean).join(" "),We=be?`data-allow-key="FontFamily" data-allow-value="${f(Te.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(Te.value)}"`;return`<button type="button" class="${Ue}" ${We}
              aria-pressed="${Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Be?"\u2713 ":""}</span>`:""}${f(Te.label)}
            </button>`}).join("")}
        </div>
        ${n(q)}
      `}if(q.key==="Layout"){let ue=String(X||"scroll"),me=!!S.allowlistEdit.Layout,be=me?S.allowlistEdit.Layout:new Set(F("Layout").map(ye=>I("Layout",ye))),we=!me&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${x.map(ye=>{let Te=ye.value===ue,Ae=me?be.has(ye.value):we||be.has(ye.value),Be=["admin-dsp2-tile",Te?"is-active":"",me?"is-editing":"",Ae?"":"is-blocked"].filter(Boolean).join(" "),Ue=me?`data-allow-key="Layout" data-allow-value="${ye.value}"`:`data-chip-key="Layout" data-chip-value="${ye.value}"`;return`<button type="button" class="${Be}" ${Ue}
              aria-pressed="${Ae?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${ye.icon}</span>
              <span class="admin-dsp2-tile-label">${u(ye.labelKey)}</span>
              ${me?`<span class="admin-dsp2-allow-mark">${Ae?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${n(q)}
      `}return""}function n(q){if(!$(q.key))return"";let G=!!S.allowlistEdit[q.key],Y=F(q.key),X=H(q.key).length||0,ce=Y.length>0?u("displayAllowSummaryPartial",{n:Y.length,total:X,label:o(q.key)}):u("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${f(ce)}</span>
        ${G?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${f(u("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${f(u("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${f(u("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${f(u("displayEditAllowlistTitle"))}">[${f(u("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function o(q){return u(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function r(q,G){if(q.noRange||!(G[0]!==!1))return"";let X=A[q.key],ce=G[1]!=null?G[1]:X.min,ue=G[2]!=null?G[2]:X.max,me=M(q.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(u("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${me}" value="${f(String(ce))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(u("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${me}" value="${f(String(ue))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(me))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function c(q,G){let Y=G[0]!==!1,X=G[3],ce=q.fmt?q.fmt(X):X!=null?String(X):"\u2014",ue=q.key==="Layout";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${ue?"is-last":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(u(q.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${f(ce)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(u("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${f(u(Y?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${s(q,G)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${r(q,G)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}"
            data-toggle-key="${q.key}" aria-pressed="${Y?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(u(Y?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(Y?u("displayToggleHintOn"):q.noRange?u("displayToggleHintOffPick"):u("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function a(){let q=document.getElementById("dsp2-rows");if(q){if(!S.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(u("loading"))}`;return}q.innerHTML=p.map(G=>c(G,S.options[G.key]||[!1,"","",""])).join(""),i(),w(),k()}}function t(){let q=F("Color");return[...new Set((q.length?q:B).map(G=>"#"+String(G).replace(/^#/,"").toUpperCase()).filter(G=>/^#[0-9A-F]{6}$/.test(G)))]}function v(q){let G=q.slice(1).match(/.{2}/g).map(Y=>{let X=parseInt(Y,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return G[0]*.2126+G[1]*.7152+G[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function h(q,G="error"){S.paletteNotice={message:q,type:G};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=q,Y.classList.toggle("is-error",G==="error"))}function e(q,G=!0){let Y=document.querySelector("[data-admin-color-palette]"),X=Y?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(q)||(S.palettePreview=q.toUpperCase(),X.style.color=q,Y.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(ce=>{let ue=ce.dataset.palettePreview===q.toUpperCase();ce.setAttribute("aria-pressed",String(ue)),ce.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ue)}),G&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(ce=>ce.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function i(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!S.options)return;let G=t(),Y=(S.options.ViewerColorPicker||[!0])[0]!==!1,X=S.paletteBusy?"disabled":"",ce=S.palettePreview||G[0],ue=f(S.paletteDraft),me=S.paletteNotice;q.setAttribute("aria-busy",String(S.paletteBusy)),q.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${f(u("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${f(u("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${f(u("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${G.length}</strong><span>${f(u("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${G.map((be,we)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${v(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${f(u("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===ce}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(we+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${G.length<=1?"disabled":X}
                aria-label="${f(u("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(u("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(u("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(S.paletteDraft)?ue:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ue}"
                ${S.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${G.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${f(u("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(u(G.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${me?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${me?f(me.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(u("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(u("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${ce}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(u("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(u("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(u("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(u("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,e(ce,!1)}async function l(q,G){if(S.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");S.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=u("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ue=>{ue.disabled=!0});let X=await R("Color",q);S.paletteBusy=!1,S.paletteNotice={type:X?"success":"error",message:u(X?"viewerPaletteSaved":"updateFailed")},X&&G&&(S.palettePreview=G),i(),(G&&X?Y.querySelector(`[data-palette-preview="${G}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function m(q,G){let Y=S.options&&S.options[q];return Y&&Y[3]!=null?Y[3]:G}function w(){let q=document.querySelector("[data-preview-stage]"),G=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),ce=document.querySelector("[data-preview-foot-r]");if(!q||!G||!Y||!S.options)return;let ue=Number(m("FontSize",32)),me=Number(m("Opacity",92)),be=Number(m("Speed",1)),we="#"+String(m("Color","7DD3FC")).replace(/^#/,""),ye=String(m("FontFamily","NotoSansTC")),Te=String(m("Layout","scroll")),Ae=Math.min(ue,36),Be=Math.max(0,Math.min(100,me))/100;G.style.fontSize=Ae+"px",G.style.color=we,G.style.opacity=Be.toFixed(2),G.style.fontFamily=ye+", system-ui, sans-serif",G.style.textShadow=`0 0 14px ${we}66`,Y.style.fontSize=(Ae*.78).toFixed(0)+"px",Y.style.opacity=(Be*.9).toFixed(2),Y.style.fontFamily=ye+", system-ui, sans-serif",q.dataset.layout=Te,X&&(X.textContent=`${d(Te)} \xB7 ${ue}px \xB7 ${(+be).toFixed(1)}\xD7`),ce&&(ce.textContent=u("displayOpacitySuffix",{n:Math.round(me)}))}function k(){let q=document.querySelector("[data-summary-list]"),G=document.querySelector("[data-summary-count]");if(!q||!S.options)return;let Y=p.filter(X=>(S.options[X.key]||[])[0]).length;G&&(G.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),q.innerHTML=p.map(X=>{let ce=!!(S.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${ce?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(u(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(u(ce?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function _(q,G){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!G})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray(S.options[q])||(S.options[q]=[!1,"","",""]),S.options[q][0]=!!G,a(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=q==="ViewerColorPicker"?u("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${X} ${u("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(u("updateFailed"),!1),await E(),a()}}async function D(q,G,Y){try{let X=Y;if(q==="Color"){let ue=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ue)){window.showToast&&window.showToast(u("colorFormatError"),!1);return}X=ue.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){X=q==="Speed"?parseFloat(X):parseInt(X,10);let ue=A[q];if(Number.isNaN(X)||ue&&(X<ue.min||X>ue.max)){window.showToast&&window.showToast(`${q} ${ue.min}\u2013${ue.max}`,!1);return}}let ce=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:X,index:G})});if(!ce.ok)throw new Error("update "+ce.status);Array.isArray(S.options[q])||(S.options[q]=[!1,"","",""]),S.options[q][G]=X,K(q),w(),k()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(u("updateFailed"),!1)}}async function R(q,G){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:G})});if(!Y.ok)throw new Error("allowlist "+Y.status);let X=await Y.json().catch(()=>({}));X&&Array.isArray(X.option)?S.options[q]=X.option:Array.isArray(S.options[q])&&(S.options[q][1]=G.slice()),K(q),w(),k();let ce=H(q).length||0,ue=q==="Color"?u("settingsUpdated"):G.length>0?u("displayAllowlistToastPartial",{key:q,n:G.length,total:ce}):u("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ue,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),q!=="Color"&&window.showToast&&window.showToast(u("updateFailed"),!1),!1}}function K(q){let G=document.querySelector(`[data-row-key="${q}"]`);if(!G||!S.options)return;let Y=p.find(me=>me.key===q);if(!Y)return;let X=S.options[q]||[!1,"","",""],ce=X[3],ue=G.querySelector("[data-value-badge]");if(ue&&(ue.textContent=Y.fmt?Y.fmt(ce):ce!=null?String(ce):"\u2014"),$(q)){let me=G.querySelector("[data-picker-host]");me&&(me.innerHTML=s(Y,X));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&G.querySelectorAll(`[data-chip-key="${q}"]`).forEach(me=>{let be=me.getAttribute("data-chip-value"),we=q==="Color"?String(ce||"").replace(/^#/,"").toUpperCase():String(ce??"");me.classList.toggle("is-active",String(be)===we)}),q==="Opacity"||q==="Speed"){let me=A[q],be=Number(ce??me.min),we=(be-me.min)/Math.max(1e-6,me.max-me.min)*100,ye=G.querySelector(".admin-dsp2-slider-fill"),Te=G.querySelector(".admin-dsp2-slider-thumb");ye&&(ye.style.width=we.toFixed(2)+"%"),Te&&(Te.style.left=`calc(${we.toFixed(2)}% - 8px)`);let Ae=G.querySelector(".admin-dsp2-range");Ae&&document.activeElement!==Ae&&(Ae.value=String(be));let Be=G.querySelector(".admin-dsp2-num");Be&&document.activeElement!==Be&&(Be.value=String(be))}}async function E(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);S.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),S.options=S.options||{}}}async function O(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let G=await q.json();S.fonts=Array.isArray(G)?G:G.fonts||[]}catch{S.fonts=["NotoSansTC","Inter"]}}async function U(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let G=await q.json();S.viewerCount=G.ws_clients??0}catch{}}function J(){te(),U(),S.metricsTimer=setInterval(U,5e3)}function te(){S.metricsTimer&&(clearInterval(S.metricsTimer),S.metricsTimer=null)}function Z(){if(!S.options){window.showToast&&window.showToast(u("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:S.options},G=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(G),X=document.createElement("a");X.href=Y,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Y),window.showToast&&window.showToast(u("displayExportDone"),!0)}async function z(){if(!S.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let G of p){let Y=S.options[G.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:G.key,enabled:!!Y[0]})})}await U(),window.showToast&&window.showToast(u("displayBroadcastDone")+` ${S.viewerCount} ${u("displayViewersReceivedSuffix")}`,!0)}catch(G){console.warn("[admin-display] deploy failed:",G),window.showToast&&window.showToast(u("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function Q(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:u("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:u("displayRevertConfirm"),confirmLabel:u("displayDeployRevert")}))try{for(let[Y,X]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!X[0]})});for(let ce=1;ce<=3;ce++)ce<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||X[ce]===""||X[ce]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:X[ce],index:ce})})}await E(),a(),window.showToast&&window.showToast(u("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(u("updateFailed"),!1)}}function W(){let q=document.getElementById(b);q&&(q.addEventListener("click",G=>{let Y=G.target.closest("[data-palette-preview]");if(Y){e(Y.dataset.palettePreview);return}let X=G.target.closest("[data-palette-remove]");if(X){let we=t();if(we.length>1){let ye=we.filter(Te=>Te!==X.dataset.paletteRemove);l(ye,ye.includes(S.palettePreview)?S.palettePreview:ye[0])}return}if(G.target.closest("[data-palette-add]")){let we=q.querySelector("[data-palette-hex]"),ye=String(we.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(ye)){S.paletteInvalid=!0,we.setAttribute("aria-invalid","true"),h(u("colorFormatError"));return}let Te=t();if(Te.includes("#"+ye)){h(u("viewerPaletteDuplicate"));return}Te.length<64&&l([...Te,"#"+ye],"#"+ye);return}let ce=G.target.closest("[data-toggle-key]");if(ce){let we=ce.getAttribute("data-toggle-key"),ye=!!(S.options[we]||[])[0];_(we,!ye);return}let ue=G.target.closest("[data-allow-action]");if(ue){let we=ue.getAttribute("data-allow-action"),ye=ue.getAttribute("data-allow-key");if(!ye)return;if(we==="edit"){let Te=F(ye).map(Ae=>I(ye,Ae));Te.length?S.allowlistEdit[ye]=new Set(Te):S.allowlistEdit[ye]=new Set(H(ye)),K(ye);return}if(we==="cancel"){delete S.allowlistEdit[ye],K(ye);return}if(we==="clear"){S.allowlistEdit[ye]=new Set,R(ye,[]),delete S.allowlistEdit[ye];return}if(we==="apply"){let Te=S.allowlistEdit[ye]||new Set,Ae=H(ye),Be=Array.from(Te),Ue=Ae.length>0&&Be.length===Ae.length&&Ae.every(We=>Te.has(We));R(ye,Ue?[]:Be),delete S.allowlistEdit[ye];return}}let me=G.target.closest("[data-allow-key][data-allow-value]");if(me){let we=me.getAttribute("data-allow-key"),ye=me.getAttribute("data-allow-value"),Te=S.allowlistEdit[we];if(Te){let Ae=I(we,ye);Te.has(Ae)?Te.delete(Ae):Te.add(Ae),K(we)}return}let be=G.target.closest("[data-chip-key]");if(be){let we=be.getAttribute("data-chip-key"),ye=be.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${we}"]`).forEach(Te=>Te.classList.remove("is-active")),be.classList.add("is-active"),D(we,3,ye);return}if(G.target&&G.target.id==="dsp2-revert"){Q();return}if(G.target&&G.target.id==="dsp2-export"){Z();return}}),q.addEventListener("keydown",G=>{G.key==="Enter"&&G.target.matches("[data-palette-hex]")&&!G.isComposing&&(G.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",G=>{let Y=G.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,_("ViewerColorPicker",Y.checked);return}let X=Y.getAttribute("data-num-key");if(!X)return;let ce=Y.getAttribute("data-num-index");if(ce==="step"){C(X,Y.value),K(X);return}let ue=parseInt(ce,10);if(Number.isNaN(ue))return;let me=Y.value;X==="Color"&&(me=String(me).replace(/^#/,"").toUpperCase()),D(X,ue,me)}),q.addEventListener("input",G=>{let Y=G.target;if(Y){if(Y.matches("[data-palette-picker]")){S.paletteDraft=Y.value.toUpperCase(),S.paletteInvalid=!1;let X=q.querySelector("[data-palette-hex]");X.value=S.paletteDraft,X.removeAttribute("aria-invalid"),h("","success"),e(S.paletteDraft);return}if(Y.matches("[data-palette-hex]")){S.paletteDraft=Y.value,S.paletteInvalid=!1;let X=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),h("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(q.querySelector("[data-palette-picker]").value="#"+X,e("#"+X));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key"),ce=A[X],ue=Number(Y.value),me=(ue-ce.min)/Math.max(1e-6,ce.max-ce.min)*100,be=Y.closest("[data-row-key]");if(be){let we=be.querySelector(".admin-dsp2-slider-fill"),ye=be.querySelector(".admin-dsp2-slider-thumb");we&&(we.style.width=me.toFixed(2)+"%"),ye&&(ye.style.left=`calc(${me.toFixed(2)}% - 8px)`);let Te=be.querySelector(".admin-dsp2-num");Te&&(Te.value=String(ue))}Array.isArray(S.options[X])&&(S.options[X][3]=ue),w();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let X=Y.getAttribute("data-num-key"),ce=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(ce)||!Array.isArray(S.options[X]))return;let ue=Y.value;Y.type==="number"&&(ue=Number(ue)),S.options[X][ce]=ue,w()}}}),q.addEventListener("change",G=>{let Y=G.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let X=Y.getAttribute("data-range-key");D(X,3,Y.value)}}),q.addEventListener("click",G=>{let Y=G.target.closest("[data-dl-step]");if(Y){let ce=Y.closest("[data-dl-stepper]");if(!ce)return;let ue=ce.getAttribute("data-dl-stepper"),be=Number(he[ue]??0)+Number(Y.getAttribute("data-dl-step"));Le(ue,be);return}let X=G.target.closest("[data-dl-opt]");if(X){let ce=X.closest("[data-dl-seg]");if(!ce)return;let ue=ce.getAttribute("data-dl-seg"),me=X.getAttribute("data-dl-opt");Le(ue,["safe_area","poll_vote_opacity"].indexOf(ue)!==-1?Number(me):me)}}),q.addEventListener("change",G=>{let Y=G.target.closest("[data-dl-toggle]");if(Y){Le(Y.getAttribute("data-dl-toggle"),Y.checked);return}let X=G.target.closest("[data-dl-range]");X&&Le(X.getAttribute("data-dl-range"),Number(X.value))}),q.addEventListener("input",G=>{let Y=G.target.closest("[data-dl-range]");if(!Y)return;let X=Y.getAttribute("data-dl-range"),ce=q.querySelector(`[data-dl-value="${X}"]`);ce&&(ce.textContent=Y.value+"%")}),q.addEventListener("change",G=>{if(G.target.closest("[data-vi-toggle]")){le({enabled:G.target.checked});return}if(G.target.closest("[data-vi-ext]")){let Y=Array.from(q.querySelectorAll("[data-vi-ext]")).filter(X=>X.checked).map(X=>X.getAttribute("data-vi-ext"));le({extensions:Y});return}if(G.target.id==="viewer-images-hosts"){let Y=G.target.value.split(/[\s,]+/).filter(Boolean);le({hosts:Y})}}))}let V=null,ee=null,ne={},se=0,oe="",de=q=>(q&&q.hosts||[]).join(`
`);function Ie(){return Object.assign({},V||{},ee||{},ne)}function ke(){let q=document.getElementById(b);if(!q||!V)return;let G=Ie(),Y=q.querySelector("[data-vi-toggle]");Y&&(Y.checked=!!G.enabled),xe(q,!!G.enabled);let X=q.querySelector("#viewer-images-hosts"),ce=ee&&"hosts"in ee||"hosts"in ne;X&&!ce&&document.activeElement!==X&&X.value===oe&&(X.value=de(V),oe=X.value);let ue=G.extensions||[];q.querySelectorAll("[data-vi-ext]").forEach(me=>{me.checked=ue.indexOf(me.getAttribute("data-vi-ext"))!==-1})}function xe(q,G){q.querySelectorAll("[data-vi-row]").forEach(Y=>{Y.style.display=G?"":"none"})}async function ie(q){try{let G=await q(),Y=null;try{Y=await G.json()}catch{Y=null}return{ok:!!(G.ok&&Y),body:Y}}catch(G){return console.warn("[admin-display] viewer-images request failed:",G),{ok:!1,body:null}}}async function ae(){let q=se,G=await ie(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),Y=!ee&&!Object.keys(ne).length;G.ok&&Y&&q===se&&(V=G.body,ke())}function re(q){let G=q&&q.code;return G==="invalid_host"?u("viErrInvalidHost",{host:String(q.detail||"")}):G==="too_many_hosts"?u("viErrTooManyHosts",{max:q.max}):u("updateFailed")}function le(q){se+=1;let G=document.getElementById("viewer-images-hosts");if("hosts"in q&&G&&(oe=G.value),"enabled"in q){let Y=document.getElementById(b);Y&&xe(Y,!!q.enabled)}Object.assign(ne,q),ee||Se()}async function Se(){if(ee||!Object.keys(ne).length)return;let q=ne;ne={},ee=q;let G=await ie(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}));if(ee=null,G.ok){V=G.body,ke(),Se();return}let Y=ne;ne={},window.showToast&&window.showToast(re(G.body),!1),("hosts"in q||"hosts"in Y)&&(oe=null),ke(),ae()}let he={};function Ee(){let q=document.getElementById(b);q&&Object.entries(he).forEach(([G,Y])=>{let X=q.querySelector(`[data-dl-value="${G}"]`);X&&(X.textContent=G==="max_tracks"?Number(Y)===0?u("dlMaxTracksAuto"):String(Y):String(Y)+"%");let ce=q.querySelector(`[data-dl-range="${G}"]`);ce&&document.activeElement!==ce&&(ce.value=String(Y));let ue=q.querySelector(`[data-dl-toggle="${G}"]`);ue&&(ue.checked=!!Y);let me=q.querySelector(`[data-dl-seg="${G}"]`);me&&me.querySelectorAll("[data-dl-opt]").forEach(be=>{let we=be.getAttribute("data-dl-opt")===String(Y);be.classList.toggle("is-active",we),be.setAttribute("aria-pressed",we?"true":"false")})})}async function De(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;he=await q.json(),Ee()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function Le(q,G){let Y=he[q];he[q]=G,Ee();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:G})});if(!X.ok)throw new Error("display-layer "+X.status);he=await X.json(),Ee()}catch(X){he[q]=Y,Ee(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(u("updateFailed"),!1)}}function ge(){T.forEach(q=>{let G=document.getElementById(q);G&&G.setAttribute("data-admin-ui-replaced","1")})}let pe=null;function _e(q,G){return q==="overlay"||G==="overlay"||q==="display"||G==="display"}function $e(q,G){return q==="viewer-config"||q==="viewer"||G==="viewer-config"||G==="viewer"}function Fe(q,G){if(!$e(q,G))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let X=ue=>Y.tabs.some(me=>me.slug===ue),ce=X(G)?G:null;if(!ce&&window.AdminTabs.resolveActiveTab){let ue=window.AdminTabs.resolveActiveTab("viewer",null);X(ue)&&(ce=ue)}ce&&(document.body.dataset.viewerConfigTab=ce)}let Ne=!1,He=!1;async function Oe(){let q=document.getElementById("sec-viewer-config-limits");if(!q||Ne)return;Ne=!0;let G=(Y,X)=>{let ce=q.querySelector(Y);ce&&(ce.textContent=X==null?"\u2014":String(X))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let X=await Y.json(),ce=X.rate_limits&&X.rate_limits.fire||{},ue=X.rate_limits&&X.rate_limits.totals||{},me=X.rate_limit_config&&X.rate_limit_config.fire||{},be=Math.max(1,(X.server_time||0)-(X.server_started_at||0));G("[data-vc-rate-fp]",me.limit||"\u2014"),G("[data-vc-rate-global]","\u2014"),G("[data-vc-rate-burst]","\u2014"),G("[data-vc-rate-cooldown]",me.window||"\u2014"),G("[data-vc-msg-len]",100),G("[data-vc-nick-len]","\u2014"),G("[data-vc-dedup]","\u2014");let we=(ce.hits||0)/be;G("[data-vc-avg-rate]",we.toFixed(2)+"/s"),G("[data-vc-throttled]",ce.violations||0),G("[data-vc-blocked]",ue.locked_sources||0),G("[data-vc-deduped]",0)}catch{}finally{Ne=!1}}let qe=null;function Re(q){let G=window.ServerI18n&&window.ServerI18n.currentLang;if(!G||G===qe)return;let Y=qe===null;if(qe=G,Y)return;let X=q.querySelector("[data-dsp-fold]"),ce=!!(X&&X.open),ue=document.createElement("div");ue.innerHTML=y(),q.replaceChildren(...ue.firstElementChild.childNodes);let me=q.querySelector("[data-dsp-fold]");me&&(me.open=ce),a(),Ee(),oe="",ke()}function Me(){let q=document.querySelector(".admin-dash-grid"),G=document.getElementById(b);if(!q||!G)return;Re(G);let Y=q.dataset.activeRoute||"live",X=q.dataset.activeLeaf||Y;Fe(Y,X);let ce=document.body.dataset.viewerConfigTab||"defaults",ue=$e(Y,X),me=_e(Y,X),be=ue||me,we=G.querySelector("[data-dsp-fold]");we&&G.dataset.dspMode!==(me?"values":"audience")&&(we.open=!me),G.dataset.dspMode=me?"values":"audience",G.style.display=be?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(Te=>{let Ae=document.getElementById(Te);Ae&&(Ae.style.display=ue?"":"none")});let ye=document.getElementById("sec-viewer-config-info");ye&&(ye.style.display=ue?"":"none"),ue?He||(He=!0,Oe()):He=!1,_e(Y,X)?S.metricsTimer||J():te(),pe=Y}function Ge(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let G=document.createElement("div");G.id="sec-viewer-config-info",G.className="lg:col-span-2",G.innerHTML='<div class="admin-vc-info-banner">'+u("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:u("displayFieldNicknameLabel"),desc:u("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:u("displayFieldMessageLabel"),desc:u("displayFieldMessageDesc"),on:!0,pinned:!0},{k:u("displayFieldColorLabel"),desc:u("displayFieldColorDesc"),on:!0},{k:u("displayFieldFontLabel"),desc:u("displayFieldFontDesc"),on:!0},{k:u("displayFieldSizeLabel"),desc:u("displayFieldSizeDesc"),on:!0},{k:u("displayFieldOpacityLabel"),desc:u("displayFieldOpacityDesc"),on:!0},{k:u("displayFieldSpeedLabel"),desc:u("displayFieldSpeedDesc"),on:!0},{k:u("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:u("displayFieldEffectLabel"),desc:u("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let ce=document.createElement("div");ce.className="admin-vc-col-panel";let ue=document.createElement("div");ue.className="admin-vc-fields-head";let me=Y.filter(function(Pe){return Pe.on}).length,be=Y.length-me;ue.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(u("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+f(u("displayFieldsShownHidden",{shown:me,hidden:be}))+"</span>",ce.appendChild(ue);let we=document.createElement("div");we.className="admin-vc-fields-list",Y.forEach(function(Pe){let ze=document.createElement("div");ze.className="admin-vc-field-row"+(Pe.blocked?" is-blocked":"");let Ye=document.createElement("span");Ye.className="admin-vc-field-dot"+(Pe.on?" is-on":""),ze.appendChild(Ye);let Qe=document.createElement("div");var Je="";Pe.pinned&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(u("displayFieldBadgeRequired"))+"</span>"),Pe.blocked&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(u("displayFieldBadgeBlocked"))+"</span>"),Qe.innerHTML='<div class="admin-vc-field-label">'+f(Pe.k)+Je+'</div><div class="admin-vc-field-desc">'+f(Pe.desc)+"</div>",ze.appendChild(Qe);let Ke=document.createElement("button");if(Ke.type="button",Ke.className="admin-vc-toggle "+(Pe.on?"is-on":"is-off"),Ke.textContent=Pe.on?u("displayToggleShow"):u("displayToggleHide"),Pe.blocked||Pe.pinned)Ke.disabled=!0,Ke.className+=" disabled";else{var Ve=Pe.on;Ke.addEventListener("click",function(){Ve=!Ve,Ke.className="admin-vc-toggle "+(Ve?"is-on":"is-off"),Ke.textContent=u(Ve?"displayToggleShow":"displayToggleHide"),Ye.className="admin-vc-field-dot"+(Ve?" is-on":"")})}ze.appendChild(Ke),we.appendChild(ze)}),ce.appendChild(we);let ye=document.createElement("div");ye.className="admin-vc-col-panel";var Ae=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(Pe,ze){return'<span class="admin-vc-swatch-dot" style="background:'+Pe+";border:"+(ze===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");ye.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(u("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(u("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(u("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Ae+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(u("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(u("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(u("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(u("displayFieldsTip"))+"</div>",X.appendChild(ce),X.appendChild(ye);function Be(Pe,ze,Ye,Qe,Je,Ke){let Ve=Ke?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+Pe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ve+'">'+Ye+'<span class="admin-vc-limit-row__unit">'+(Qe||"")+"</span></div>"+(Je?'<div class="admin-vc-limit-row__hint">'+Je+"</div>":"")+"</div>"}let Ue=document.createElement("div");Ue.id="sec-viewer-config-limits",Ue.className="admin-vc-limits-grid lg:col-span-2",Ue.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(u("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(u("displayEditLink"))+"</a></div>"+Be(f(u("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(u("displayRateFpUnit")),f(u("displayRateFpHint")))+Be(f(u("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(u("displayRateGlobalHint")))+Be(f(u("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(u("displayRateBurstUnit")),f(u("displayRateBurstHint")))+Be(f(u("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(u("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(u("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(u("displayContentLimitsTitle"))+"</span></div>"+Be(f(u("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(u("displayMsgLenUnit")),f(u("displayMsgLenHint")))+Be(f(u("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(u("displayNickLenUnit")),f(u("displayNickLenHint")))+Be(f(u("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(u("displayDedupHint")))+Be(f(u("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(u("displayProfanityDefaultValue"))+"</span>","",f(u("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(u("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(u("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(u("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(u("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(u("displayAuditLogLink"))+"</a></div>";let We=document.getElementById("sec-viewer-theme");We&&We.parentNode===q?(q.insertBefore(G,We),q.insertBefore(Ue,We),q.insertBefore(X,We)):(q.appendChild(G),q.appendChild(Ue),q.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Me()}async function Ce(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(b)){ge();return}q.insertAdjacentHTML("beforeend",y()),W(),ge(),Me(),S.options||await Promise.all([E(),O()]),De(),ae(),a()}function je(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?Ce():ge(),Me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Me),document.addEventListener("admin-route-applied",Me),document.addEventListener("admin-panel-rendered",()=>{Ce(),ge(),Ge(),Me()}),Ce(),Ge()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je()})()});var _t=ve(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let z=document.querySelector('meta[name="csrf-token"]');return z&&z.content||""}let T=window.DANMU_CONFIG||{},g=T.session||{logged_in:!1},f=T.settingRanges||{};function A(z,Q={}){let W={credentials:"same-origin",...Q},V=new Headers(Q.headers||{});return V.set("X-CSRF-Token",b()),W.headers=V,fetch(z,W)}window.csrfFetch=A;let j=5e3,B={at:0,data:null,promise:null};function x(){return B.data&&Date.now()-B.at<j}function u(){return x()?Promise.resolve(B.data):(B.promise||(B.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(z=>z.ok?z.json():null).then(z=>(z&&(B.data=z,B.at=Date.now()),B.promise=null,z)).catch(()=>(B.promise=null,null))),B.promise)}function N(z){if(!x())return null;let Q=B.data[z];return Q&&typeof Q=="object"&&"_error"in Q?null:Q}window.__danmuAdminBootstrap={prime:u,get:N},u();let M={},C=null,S=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let L=Object.create(null);Object.assign(L,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let $={_key:z=>"admin:tab:"+z,get(z){try{return sessionStorage.getItem(this._key(z))||null}catch{return null}},set(z,Q){try{Q?sessionStorage.setItem(this._key(z),Q):sessionStorage.removeItem(this._key(z))}catch{}}};function F(z){let Q=(z||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!Q)return null;let W=Q[1],V=Q[2]||null,ee=null;if(!V){let de=P[W];typeof de=="string"?W=de:de&&typeof de=="object"&&(W=de.nav||W,ee=de.tab||null)}let ne=L[W],se=W,oe=null;if(typeof ne=="string"?se=ne:ne&&typeof ne=="object"&&(se=ne.nav||W,oe=ne.tab||null),Q[1]!==se&&(F._warned||(F._warned=new Set),!F._warned.has(Q[1]))){F._warned.add(Q[1]);try{console.info("[admin] legacy route #/"+Q[1]+" \u2192 #/"+se+(V||oe||ee?"/"+(V||oe||ee):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:se,tab:V||oe||ee,raw:W}}function H(z,Q){return Q?"#/"+z+"/"+Q:"#/"+z}let I={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function y(z,Q,W){if(W=W||z,!K[z]){let oe=P[z];if(typeof oe=="string")z=oe;else if(oe&&typeof oe=="object")oe.nav&&(z=oe.nav),!Q&&oe.tab&&(Q=oe.tab);else{let de=L[z];typeof de=="string"?z=de:de&&typeof de=="object"&&(de.nav&&(z=de.nav),!Q&&de.tab&&(Q=de.tab))}}if(z==="system"&&Q&&I[Q]){let oe=I[Q];z=oe.nav,Q=oe.tab||null,W=z}let V=K[z]?z:"live",ee=window.AdminTabs,ne=ee?.hasTabsFor?.(V)?ee.resolveActiveTab(V,Q):null,se=ne?ee.foldFor(V,Q):null;return{route:V,tab:ne,rawName:W,fold:se?Q:null,foldSection:se?se.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:L,tabMemory:$,parseHash:F,buildHash:H,resolve(z){let Q=F(z);return Q?y(Q.nav,Q.tab,z.match(/^#\/([\w-]+)/)[1]):null}});var p=window.AdminUtils.loadDetailsState,d=window.AdminUtils.saveDetailsState,s=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:u,bootstrapSection:N};async function n(){try{M=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&R()}catch(z){console.error("Get settings failed:",z),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function o(z){return/^#[0-9A-Fa-f]{6}$/.test(z)}function r(z){return o(z)?z:/^[0-9A-Fa-f]{6}$/.test(z)?"#"+z:(z.startsWith("#")||(z="#"+z),o(z)?z:"#38bdf8")}function c(z,Q){if(f[z]){let W=parseInt(Q);if(isNaN(W)||W<f[z].min||W>f[z].max)return showToast(ServerI18n.t("settingRangeError",{key:z,min:f[z].min,max:f[z].max}),!1),!1}return!0}function a(z,Q,W){if(!W||!Array.isArray(M[z]))return;let V=M[z][Q];z==="Color"&&typeof V=="string"&&(V=r(`#${V}`)),V!=null&&(W.value=String(V))}let t={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-widgets"]}};function v(){Object.values(t).forEach(z=>{let Q=document.getElementById(z.containerId);Q&&z.orderedIds.forEach(W=>{let V=document.getElementById(W);V&&V.parentElement!==Q&&Q.appendChild(V)})})}function h(){C&&(C.disconnect(),C=null),v(),C=new MutationObserver(()=>{v()}),C.observe(l,{childList:!0,subtree:!0})}async function e(z,Q,W,V=null){try{if(z==="Color"){if(!o(Q)){showToast(ServerI18n.t("colorFormatError"),!1),a(z,W,V);return}Q=Q.replace("#","")}else if((z==="Speed"||z==="Opacity"||z==="FontSize")&&!c(z,Q)){a(z,W,V);return}(await A("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:z,value:Q,index:W})})).ok?(Array.isArray(M[z])||(M[z]=[!1,"","",""]),M[z][W]=Q,showToast(`${z} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await n())}catch(ee){console.error("Error:",ee),showToast(`Update Error: ${ee.message}`,!1),await n()}}async function i(z,Q){try{let W=await A("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:z,enabled:Q})}),V=await W.json().catch(()=>({}));if(W.ok)Array.isArray(M[z])||(M[z]=[!1,"","",""]),M[z][0]=Q,showToast(`${z} ${ServerI18n.t("settingsUpdated")}`),R();else{let ee=document.getElementById(`toggle-${z}`);ee&&(ee.checked=!Q),showToast(V.error||ServerI18n.t("updateFailed"),!1)}}catch(W){console.error("Error:",W);let V=document.getElementById(`toggle-${z}`);V&&(V.checked=!Q),showToast(`Update Error: ${W.message}`,!1)}}let l=document.getElementById("app-container"),m=document.getElementById("toast-container"),w=(z,Q=500)=>"requestIdleCallback"in window?window.requestIdleCallback(z,{timeout:Q}):setTimeout(z,Q);async function k(){let z=parseInt(document.getElementById("historyHours")?.value||"24");try{let[Q,W]=await Promise.all([fetch(`/admin/stats/hourly?hours=${z}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${z}&limit=10`,{credentials:"same-origin"})]);if(!Q.ok||!W.ok)return;let V=await Q.json(),ee=await W.json(),ne=document.getElementById("statsDashboard");if(!ne)return;let se=V.distribution||[],oe=ee.topTexts||[],de=Math.max(1,...se.map(ae=>ae.count)),Ie=se.reduce((ae,re)=>ae+(re.count||0),0),ke=se.filter(ae=>ae.count>0).length,xe=se.map(ae=>`<div class="chart-bar" style="height: ${Math.round(ae.count/de*100)}%" title="${s(ae.hour)}: ${ae.count}"><span class="chart-label">${s(ae.hour.slice(-5,-3))}</span></div>`).join(""),ie=oe.map((ae,re)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${re+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${s(ae.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ae.count}</td></tr>`).join("");ne.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Ie}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${ke}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${z}h window</span>
            </div>
            <div class="stats-chart">${xe||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${oe.length?`<table class="w-full text-xs"><tbody>${ie}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(Q){console.error("Load stats error:",Q)}}window._loadStats=k,window.csrfFetch=A,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=l,window.__adminCtx.getSettings=()=>M;function _(){l&&(l.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function D(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():_()}function R(){let z=p(),Q=(ke,xe=!1)=>z[ke]!==void 0?z[ke]:xe,W=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ke=>Array.isArray(M[ke])&&M[ke][0]===!0).length,V=M.Layout&&M.Layout[3]?s(String(M.Layout[3]).replace(/_/g," ")):"scroll",ee=M.FontFamily&&M.FontFamily[3]?s(String(M.FontFamily[3])):"NotoSansTC",ne=ke=>ke.map(xe=>`<span style="height:${xe*10}%;opacity:${.3+xe*.08}"></span>`).join(""),se=V&&V!=="off",oe=window.location.port||(window.location.protocol==="https:"?"443":"80");l.innerHTML=`
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
                                         aria-label="${s(ServerI18n.t("adminSearchHint"))}"
                                         title="${s(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${s(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${s(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${se?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${s(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${s(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${s(se?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let de=document.getElementById("settings-grid"),Ie=M.Effects?M.Effects[0]!==!1:!0;de.insertAdjacentHTML("beforeend",`
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
      </div>`),de.insertAdjacentHTML("beforeend",`
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
    `),de.insertAdjacentHTML("beforeend",`
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
            <span class="lbl">${s(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${s(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${s(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${s(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${s(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${s(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${s(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${s(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),w(te),de.insertAdjacentHTML("beforeend",`
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
    `),O(),h(),w(Z),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),E(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let xe=document.querySelector("[data-telem-bars]");if(!xe)return;let ie=document.querySelector("[data-telem-status]"),ae={cpu:100,mem:100,ws:100,rate:50};function re(he,Ee,De,Le,ge){let pe=xe.querySelector(`[data-telem-fill="${he}"]`),_e=xe.querySelector(`[data-telem-value="${he}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,Ee))+"%",pe.classList.toggle("is-warn",!Le)),_e&&(_e.textContent=De);let $e=xe.querySelector(`[data-telem-row="${he}"]`);$e&&ge&&$e.setAttribute("title",ge)}function le(he,Ee){if(!Ee||Ee<=0)return Math.round(he)+" MB used";if(Ee>=1024){let De=(he/1024).toFixed(1),Le=(Ee/1024).toFixed(1);return`${De} / ${Le} GB used`}return`${Math.round(he)} / ${Math.round(Ee)} MB used`}async function Se(){try{let he=await fetch("/admin/metrics",{credentials:"same-origin"});if(!he.ok)return;let Ee=await he.json(),De=Ee.cpu_series||[],Le=Ee.mem_series||[],ge=Ee.mem_mb_series||[],pe=Ee.ws_series||[],_e=Ee.rate_series||[],$e=Me=>Me.length?Me[Me.length-1]:0,Fe=Number($e(De)||0),Ne=Number($e(Le)||0),He=Number($e(ge)||0),Oe=Number(Ee.mem_total_mb||0),qe=Number($e(pe)||Ee.ws_clients||0),Re=Number($e(_e)||0)/60;if(re("cpu",Fe,`${Fe.toFixed(0)}%`,Fe<90),re("mem",Ne,`${Ne.toFixed(0)}%`,Ne<90,le(He,Oe)),re("ws",qe/ae.ws*100,String(qe),qe<100),re("rate",Re/ae.rate*100,`${Re.toFixed(1)}/s`,Re<40),ie){let Me=Fe>=90||Ne>=90||Re>=40;ie.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",ie.classList.toggle("is-warn",Me)}}catch{}}setTimeout(Se,4e3),setInterval(Se,5e3)})()}let K={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=K;function E(){let z=document.querySelector(".admin-dash-grid");if(!z)return;let Q="dashboard",W=null;function V(ge){return t.moderation.orderedIds.indexOf(ge)!==-1?"moderation-grid":t.assets.orderedIds.indexOf(ge)!==-1?"assets-grid":"settings-grid"}function ee(){let ge=z.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),pe=z.querySelector("[data-route-note]"),_e=z.querySelector("[data-route-action]"),$e=_e?Array.prototype.slice.call(_e.children):[],Fe=Ce=>Ce.querySelector(".admin-ui-page-actions")||$e.find(je=>je._adminHomeHead===Ce)||null,Ne=(Ce,je)=>{_e&&($e.forEach(q=>{q!==Ce&&(q._adminHomeHead?q._adminHomeHead.appendChild(q):q.remove())}),Ce&&Ce.parentNode!==_e&&(Ce._adminHomeHead=je,_e.appendChild(Ce)))};if(!ge){Ne(null,null);return}let He=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(Q)),Oe=Array.prototype.slice.call(z.querySelectorAll(".admin-ui-page-head"));Oe.forEach(Ce=>Ce.classList.remove("is-merged-into-topbar"));let qe=(K[Q]?.title||"").trim().replace(/\s+/g," "),Re=null,Me=null,Ge=null;if(Oe.forEach(Ce=>{let je=Ce.querySelector(".admin-ui-page-title"),q=je&&je.textContent.trim().replace(/\s+/g," ");if(q&&(He||q===ge||q===qe)){if(Ce.offsetParent!==null){Re===null&&(Re=Ce.querySelector(".admin-ui-page-note")?.innerHTML||"");let Y=Fe(Ce);Y&&!Me&&(Me=Y,Ge=Ce)}Ce.classList.add("is-merged-into-topbar")}}),Ne(Me,Ge),pe){let Ce=Re||"";pe.innerHTML!==Ce&&(pe.innerHTML=Ce),pe.toggleAttribute("hidden",!Re)}}function ne(){let ge=K[Q],pe=new Set((ge.sections||[]).map(V)),_e=$e=>Array.from($e.children).some(Fe=>getComputedStyle(Fe).display!=="none");z.querySelectorAll(".admin-route-sections").forEach($e=>{if(!pe.has($e.id)){$e.style.display="none";return}$e.style.display="",$e.style.display=_e($e)?"":"none"})}let se=()=>{let ge=K[Q],pe=new Set(ge.sections);z.querySelectorAll('[id^="sec-"]').forEach(_e=>{_e.id&&(_e.style.display=pe.has(_e.id)?"":"none")}),W&&window.AdminTabs?.hasTabsFor?.(Q)&&window.AdminTabs.applyTabSectionVisibility(Q,W,z),ne(),ee()},oe=null,de=null;function Ie(){let ge=de&&document.getElementById(de);!ge||!ge.getClientRects().length||(de=null,ge.tagName==="DETAILS"&&(ge.open=!0),ge.scrollIntoView({block:"start"}))}let ke=(ge,pe,_e)=>{let $e=y(ge,pe,_e);_e=$e.rawName,Q=$e.route,z.dataset.activeRoute=Q;let Fe=$e.tab,Ne=$e.fold?H(Q,$e.fold):_e&&_e!==Q?"#/"+_e:H(Q,Fe);if(window.location.hash!==Ne){try{history.replaceState(null,"",Ne)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let He=K[Q],Oe=Array.from(z.querySelectorAll(".admin-dash-nav-row[data-route]")),qe=_e!==Q?Oe.find(X=>X.dataset.route===_e):null;Oe.forEach(X=>{let ce=qe?X===qe:X.dataset.route===Q;X.classList.toggle("is-active",ce),X.setAttribute("aria-selected",ce?"true":"false")});let Re=z.querySelector("[data-route-kicker]"),Me=z.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(X){return X},Ce="adminRouteTitle_"+Q,je="adminRouteKicker_"+Q,q=Ge(Ce),G=Ge(je);Re&&(Re.textContent=G!==je?G:He.kicker),Me&&(Me.textContent=q!==Ce?q:He.title);let Y=Q==="dashboard"||Q==="live";z.querySelectorAll('[data-route-view="dashboard"]').forEach(X=>{X.style.display=Y?"":"none"}),Y?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),W=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(Q,Fe),z.dataset.activeLeaf=Fe||Q,se(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Q,leaf:Fe}})),ne(),ee(),ie(Q,Fe),xe(_e,Q,Fe),$e.fold!==oe&&(oe=$e.fold,de=$e.foldSection),Ie();try{history.replaceState(null,"",Ne)}catch{}};function xe(ge,pe,_e){window.AdminBreadcrumb?.render(z,ge,pe,_e)}function ie(ge,pe){let _e=z.querySelector("[data-admin-tabs-host]");if(!_e){let $e=z.querySelector(".admin-dash-topbar");if(!$e)return;_e=document.createElement("div"),_e.dataset.adminTabsHost="",$e.insertAdjacentElement("afterend",_e)}if(_e.innerHTML="",window.AdminTabs?.hasTabsFor?.(ge)&&pe){_e.hidden=!1;let $e=window.AdminTabs.renderTabStrip(ge,pe,{onSelect:Fe=>ke(ge,Fe)});$e&&_e.appendChild($e),_e.classList.remove("admin-tabs-host--accordion");return}_e.classList.remove("admin-tabs-host--accordion"),_e.hidden=!0}S&&window.removeEventListener("hashchange",S),S=()=>{let ge=F(window.location.hash),pe=(window.location.hash||"").match(/^#\/([\w-]+)/),_e=pe?pe[1]:null;ge&&ke(ge.nav,ge.tab,_e||ge.raw)},window.addEventListener("hashchange",S),z.querySelectorAll("[data-route]").forEach(ge=>{ge.addEventListener("click",pe=>{pe.preventDefault(),ke(ge.dataset.route)})});let ae=F(window.location.hash),re=(window.location.hash||"").match(/^#\/([\w-]+)/),le=re?re[1]:ae?.raw||ae?.nav||"live";ke(ae?.nav||"live",ae?.tab||null,le),window._adminNavigateTo=()=>ke(Q,oe||W);let Se=!1,he=0,Ee=0;function De(){if(Se)return;Se=!0;let ge=()=>{Se&&(Se=!1,he&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(he),clearTimeout(Ee),he=0,Ee=0,se(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Q,leaf:W}})),Ie())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(he=requestAnimationFrame(ge),Ee=setTimeout(ge,100)):Ee=setTimeout(ge,0)}let Le=z.querySelector(".admin-dash-main");Le&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{De()}).observe(Le,{childList:!0,subtree:!0}),De())}function O(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let z=document.querySelector("[data-open-help]");z&&z.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let Q=document.querySelector("[data-open-palette]");if(Q){let V=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};Q.addEventListener("click",V),Q.addEventListener("keydown",ee=>{(ee.key==="Enter"||ee.key===" ")&&(ee.preventDefault(),V())})}let W=document.getElementById("logoutButton");W&&W.addEventListener("click",async()=>{try{let V=await A("/logout",{method:"POST"});V.redirected&&(window.location.href=V.url),showToast(ServerI18n.t("logoutSuccess"))}catch(V){console.error("Logout Failed:",V),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(V=>{V.name&&V.addEventListener("change",async function(){let ee=this.name,ne=this.checked;await i(ee,ne)})}),document.querySelectorAll("details[id^='sec-']").forEach(V=>{V.addEventListener("toggle",()=>{let ee=p();ee[V.id]=V.open,d(ee)})}),document.querySelectorAll(".setting-input").forEach(V=>{V.addEventListener("change",async function(){let ee=this.dataset.key,ne=parseInt(this.dataset.index),se=this.value;this.type==="number"&&(se=parseInt(se)),await e(ee,se,ne,this)})})}function U(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}R()}else D()}async function J(){await n(),U(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function te(){window.AdminThemes&&window.AdminThemes.init()}function Z(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{C&&(C.disconnect(),C=null)}),J()})});var Et=ve(()=>{(function(){"use strict";var b=null;async function T(){var u=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),M=Array.from(N).map(function(P){return P.value.trim()}).filter(Boolean);if(!u){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(M.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var C=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:u,options:M})}),S=await C.json();if(!C.ok){window.showToast(S.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),B(S),A()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var u=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await u.json();if(!u.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),B(N),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var u=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await u.json();if(!u.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),B(N),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function A(){b&&(clearInterval(b),b=null);var u=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var M=await N.json();B(M),M.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};u(),b=setInterval(u,2e3)}function j(){var u=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
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
      </div>`});return u.dataset.emptyKind="poll",u}function B(u){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!u||u.state==="idle"){N.appendChild(j());return}var M=u.total_votes||0,C=Math.max(1,...u.options.map(function(I){return I.count})),S=document.createElement("div");S.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var L=document.createElement("span");L.className="admin-poll-status-dot"+(u.state==="active"?" is-active":" is-ended"),P.appendChild(L);var $=document.createElement("span");$.className="admin-poll-status-question",$.textContent=u.question||"",P.appendChild($);var F=document.createElement("span");F.className="admin-poll-status-state",F.textContent=u.state,P.appendChild(F),S.appendChild(P),u.options.forEach(function(I){var y=document.createElement("div");y.className="admin-poll-status-row";var p=document.createElement("div");p.className="admin-poll-status-label";var d=document.createElement("span"),s=document.createElement("b");s.textContent=I.key+".",d.appendChild(s),d.appendChild(document.createTextNode(" "+I.text));var n=document.createElement("span");n.textContent=I.count+" ("+I.percentage+"%)",p.appendChild(d),p.appendChild(n);var o=document.createElement("div");o.className="admin-poll-status-bar";var r=document.createElement("div");r.className="admin-poll-status-bar-fill",r.style.width=I.count/C*100+"%",o.appendChild(r),y.appendChild(p),y.appendChild(o),S.appendChild(y)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",M),S.appendChild(H),N.appendChild(S)}}function x(){var u=document.getElementById("sec-polls");if(u&&u.dataset.pollLegacyBound!=="1"){u.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",T);var M=document.getElementById("pollEndBtn");M&&M.addEventListener("click",g);var C=document.getElementById("pollResetBtn");C&&C.addEventListener("click",f);var S=document.getElementById("pollAddOptionBtn");S&&S.addEventListener("click",function(){var $=document.getElementById("pollOptionsContainer");if($){var F=$.querySelectorAll(".poll-option-input").length;if(F>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+F)+". Option "+(F+1),H.maxLength=100,$.appendChild(H)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var $=document.getElementById("pollOptionsContainer");if($){var F=$.querySelectorAll(".poll-option-input");if(F.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}F[F.length-1].remove()}});var L=u;L&&(L.addEventListener("toggle",function(){L.open&&A()}),A()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){x()}),document.addEventListener("DOMContentLoaded",function(){x()}),window.addEventListener("hashchange",function(){var u=window.location.hash||"";u.indexOf("/polls")!==-1&&x()})})()});var $t=ve(()=>{(function(){"use strict";async function b(){try{let A=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!A.ok){let N=await A.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",N.error||A.statusText),!1);return}let j=await A.json(),B=document.getElementById("blacklistKeywords");B.innerHTML="";let x=document.getElementById("modBlacklistCount");x&&(x.textContent=`${j.length} words`);let u=document.querySelector('[data-mod-stat="banned"]');u&&(u.textContent=j.length),j.length===0?B.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:j.forEach(N=>{let M=document.createElement("div");M.className="hud-banned-row";let C=document.createElement("span");C.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",C.textContent="\u2298";let S=document.createElement("span");S.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",S.textContent=N;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",N),M.appendChild(C),M.appendChild(S),M.appendChild(P),B.appendChild(M)})}catch(A){console.error("Fetch blacklist error:",A),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function T(){let A=document.getElementById("newKeywordInput"),j=A.value.trim();if(!j){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let B=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})}),x=await B.json();B.ok?(A.value="",b(),window.AdminQuickAction?window.AdminQuickAction.fire({label:x.message||ServerI18n.t("histToastBlacklisted",{keyword:j}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:j})})).ok)throw new Error("remove failed");b()}}}):showToast(x.message||"Keyword added.",!0)):showToast(x.error||"Failed to add keyword.",!1)}catch(B){console.error("Add keyword error:",B),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",A),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let B=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:A})}),x=await B.json();B.ok?(showToast(x.message||"Keyword removed.",!0),b()):showToast(x.error||"Failed to remove keyword.",!1)}catch(B){console.error("Remove keyword error:",B),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let A=document.getElementById("addKeywordBtn");A&&A.addEventListener("click",T);let j=document.getElementById("newKeywordInput");j&&j.addEventListener("keypress",function(x){(x.key==="Enter"||x.keyCode===13)&&(x.preventDefault(),T())});let B=document.getElementById("blacklistKeywords");B&&B.addEventListener("click",function(x){let u=x.target.closest(".removeKeywordBtn");if(u){let N=u.dataset.keyword;N&&g(N)}})}document.addEventListener("admin-panel-rendered",function(){b(),f()}),window.AdminHistory={fetchBlacklist:b}})()});var xt=ve(()=>{(function(){"use strict";var b="sec-timeline-export",T="danmu.adminHistoryExports.v1",g=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},A=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],j=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],B={range:"24h",filters:Object.assign({},f),format:"JSON"};function x(){return document.getElementById(b)}function u(){try{return JSON.parse(localStorage.getItem(T)||"[]")}catch{return[]}}function N(m){try{localStorage.setItem(T,JSON.stringify(m.slice(0,g)))}catch{}}function M(m){var w=u();w.unshift(m),N(w)}function C(m){return m?m<1024?m+" B":m<1024*1024?(m/1024).toFixed(1)+" KB":(m/1024/1024).toFixed(1)+" MB":"0 B"}function S(m){try{var w=new Date(m),k=new Date,_=w.toDateString()===k.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")});var D=new Date(k);return D.setDate(k.getDate()-1),w.toDateString()===D.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")}):w.getMonth()+1+"-"+String(w.getDate()).padStart(2,"0")+" "+String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")}catch{return m||""}}function P(m){if(m==="1h")return 1;if(m==="24h")return 24;if(m==="7d")return 168;if(m==="today"){var w=new Date,k=new Date(w.getFullYear(),w.getMonth(),w.getDate());return Math.max(1,Math.ceil((w-k)/36e5))}return m==="yest"?48:m==="live"?6:24}function L(m){return m.filter(function(w){return!(!B.filters.rawText&&!w.is_poll&&!w.muted&&!w.banned||!B.filters.polls&&w.is_poll||!B.filters.masked&&(w.muted||w.banned))}).map(function(w){if(!B.filters.metadata){var k=Object.assign({},w);return delete k.clientIp,delete k.fingerprint,k}return w})}function $(m){var w=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],k=window.AdminUtils.csvCell,_=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},D=m.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",_(R),R.delivery_reason||""].map(k).join(",")});return[w.join(","),D.join(`\r
`)].filter(Boolean).join(`\r
`)}function F(m){return m.map(function(w,k){var _=new Date(w.timestamp||Date.now()),D=H(_),R=H(new Date(_.getTime()+3e3)),K=(w.nickname?"["+w.nickname+"] ":"")+(w.text||"");return k+1+`
`+D+" --> "+R+`
`+K+`
`}).join(`
`)}function H(m){var w=function(k,_){return String(k).padStart(_||2,"0")};return w(m.getHours())+":"+w(m.getMinutes())+":"+w(m.getSeconds())+","+w(m.getMilliseconds(),3)}function I(m,w){var k=URL.createObjectURL(m),_=document.createElement("a");_.href=k,_.download=w,_.click(),URL.revokeObjectURL(k)}function y(){var m=P(B.range),w=document.getElementById("histv2-go");w&&(w.disabled=!0,w.dataset.busy="1"),fetch("/admin/history?hours="+m+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var _=k&&k.records||[],D=L(_);if(D.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),K,E;if(B.format==="JSON"){var O=JSON.stringify(D,null,2);E=new Blob([O],{type:"application/json"}),K="danmu-history-"+R+".json"}else B.format==="CSV"?(E=new Blob(["\uFEFF"+$(D)],{type:"text/csv;charset=utf-8;"}),K="danmu-history-"+R+".csv"):(E=new Blob([F(D)],{type:"application/x-subrip;charset=utf-8;"}),K="danmu-history-"+R+".srt");I(E,K),M({name:K,fmt:B.format,size:E.size,when:new Date().toISOString(),count:D.length}),d(),p(D.length,E.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:D.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){w&&(w.disabled=!1,delete w.dataset.busy)})}function p(m,w){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:m||"\u2014",size:w?C(w):"\u2014 MB"}))}function d(){var m=document.getElementById("histv2-recent-list");if(m){var w=u();if(w.length===0){m.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}m.innerHTML=w.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+s(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+s(S(k.when))+" \xB7 "+C(k.size)+"</div></div></div>"}).join("")}}function s(m){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(m):m==null?"":String(m).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})}function n(){return A.map(function(m){var w=B.range===m.k;return'<button type="button" class="histv2-chip'+(w?" is-active":"")+'" data-histv2-range="'+m.k+'">'+s(ServerI18n.t(m.labelKey))+(m.k==="live"?" \xB7 "+o():"")+"</button>"}).join("")}function o(){var m=new Date;return String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function r(){var m=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return m.map(function(w){var k=!!B.filters[w.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+w.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+s(ServerI18n.t(w.labelKey))+"</span></button>"}).join("")}function c(){return j.map(function(m){var w=B.format===m.k;return'<button type="button" class="histv2-fmt'+(w?" is-selected":"")+'" data-histv2-fmt="'+m.k+'">'+(w?'<span class="histv2-fmt-check">\u2713</span>':"")+(m.badge?'<span class="histv2-fmt-badge">'+s(m.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+m.k+'</div><div class="histv2-fmt-desc">'+s(m.desc)+"</div></button>"}).join("")}function a(){var m=x();m&&(m.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+r()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+c()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",m.addEventListener("click",t),d(),i())}function t(m){var w=m.target.closest("[data-histv2-range]");if(w){B.range=w.dataset.histv2Range,v(),i();return}var k=m.target.closest("[data-histv2-toggle]");if(k){var _=k.dataset.histv2Toggle;B.filters[_]=!B.filters[_],h(),i();return}var D=m.target.closest("[data-histv2-fmt]");if(D){B.format=D.dataset.histv2Fmt,e(),i();return}var R=m.target.closest("#histv2-go");if(R&&!R.dataset.busy){y();return}}function v(){var m=document.getElementById("histv2-chips");m&&(m.innerHTML=n())}function h(){var m=document.getElementById("histv2-toggles");m&&(m.innerHTML=r())}function e(){var m=document.getElementById("histv2-formats");m&&(m.innerHTML=c())}function i(){i._t&&clearTimeout(i._t),i._t=setTimeout(function(){var m=P(B.range);fetch("/admin/history?hours="+m+"&limit=10000",{credentials:"same-origin"}).then(function(w){return w.ok?w.json():null}).then(function(w){if(!w)return p(0,0);var k=L(w&&w.records||[]),_=B.format==="JSON"?220:B.format==="CSV"?110:80;p(k.length,k.length*_)}).catch(function(){p(0,0)})},250)}function l(){var m=x(),w=document.getElementById("admin-backup-v2-page");if(!m){var k=document.getElementById("settings-grid");if(!k)return;m=document.createElement("div"),m.id=b,m.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(m),a()}w&&w.parentElement&&m.previousElementSibling!==w&&w.parentElement.insertBefore(m,w.nextSibling)}document.addEventListener("admin-panel-rendered",l),document.addEventListener("admin-route-applied",l),window.AdminHistoryV2={refresh:i,state:B}})()});var Lt=ve(()=>{(function(){"use strict";let b="admin-replay-bar";function T(){let f=document.getElementById(b);return f||(document.body?(f=document.createElement("div"),f.id=b,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function g(f){let A=T();A&&(A.hidden=!f)}window.AdminReplayBar={ensure:T,setActive:g},document.addEventListener("admin-panel-rendered",T)})()});var At=ve(()=>{(function(){"use strict";let b=null;function T(S){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),L=document.getElementById("replayResumeBtn"),$=document.getElementById("replayStopBtn"),F=document.getElementById("replayProgress"),H=(p,d)=>{p&&p.classList.toggle("hidden",!d)},I=S==="playing",y=S==="paused";H(P,I),H(L,y),H($,I||y),H(F,I||y),!I&&!y&&F&&(F.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(I||y)}function g(){b&&clearInterval(b),b=setInterval(async()=>{try{let S=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!S.ok)return;let P=await S.json(),L=document.getElementById("replayProgress");L&&(L.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),T(P.state),P.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),T("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),T("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function j(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),T("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let B=null,x=null,u=0,N=null;function M(){[["replayPauseBtn",f],["replayResumeBtn",A],["replayStopBtn",j]].forEach(function([P,L]){let $=document.getElementById(P);$&&!$.dataset.replayCtrlsBound&&($.addEventListener("click",L),$.dataset.replayCtrlsBound="1")})}async function C(){try{let S=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!S.ok)return;let P=await S.json();(P.state==="playing"||P.state==="paused")&&(T(P.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){T("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){M(),C()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(M,800)})})()});var Ct=ve(()=>{(function(){"use strict";let b="sec-ratelimit",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
      <div id="${b}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
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
          ${g.map(B=>`
            <div class="admin-ratelimit-row" data-rl-key="${B.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${T(ServerI18n.t(B.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${B.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${B.defLimit}" data-rl-limit="${B.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${B.key}">
                    <option value="10"${B.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${B.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${B.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${B.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${B.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${B.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${B.defLockout}" data-rl-lockout="${B.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${B.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${B.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${B.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${B.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${B.key}">
                  effective_rate = ${B.defLimit} / ${B.defWindow}s = ${(B.defLimit/B.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(B.defLimit*1.5)}${B.key==="login"?" \xB7 lock = "+B.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${B.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${B.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function A(B){let x=B.querySelector("#rlEnvExport");setTimeout(async()=>{try{let d=window.AdminBootstrap;d&&typeof d.primeBootstrap=="function"&&await d.primeBootstrap();let s=d&&d.bootstrapSection?d.bootstrapSection("history_stats"):null,n=d&&d.bootstrapSection?d.bootstrapSection("blacklist"):null,o=d&&d.bootstrapSection?d.bootstrapSection("metrics"):null,r=[];r.push(s?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),r.push(n?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),r.push(o?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[c,a,t]=await Promise.all(r),v=s||(c&&c.ok?await c.json():null);if(v){let w=v.stats&&v.stats.last_24h||0,k=v.stats&&v.stats.total||0,_=B.querySelector("[data-rl-sum-hits]"),D=B.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=w.toLocaleString()),D&&(D.textContent=ServerI18n.t("ratelimitSumTotal",{n:k.toLocaleString()}))}let h=n||(a&&a.ok?await a.json():null);if(h){let w=Array.isArray(h)?h:h.entries||h.keywords||[],k=B.querySelector("[data-rl-sum-black]");k&&(k.textContent=w.length?ServerI18n.t("ratelimitCountUnit",{n:w.length}):"0")}let e=B.querySelector("[data-rl-sum-viol]"),i=B.querySelector("[data-rl-sum-viol-rate]"),l=B.querySelector("[data-rl-sum-locked]"),m=o||(t&&t.ok?await t.json():null);if(m){let w=m&&m.rate_limits;if(w&&w.totals){let k=w.totals.hits||0,_=w.totals.violations||0,D=w.totals.locked_sources||0;if(e&&(e.textContent=_.toLocaleString()),i){let R=k+_;i.textContent=R>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/R*100).toFixed(1)}):"\u2014"}l&&(l.textContent=ServerI18n.t("ratelimitLockedSources",{n:D.toLocaleString()})),g.forEach(({key:R})=>{let K=w[R],E=B.querySelector(`[data-rl-current="${R}"]`);if(E&&K){let O=(K.hits||0).toLocaleString(),U=(K.violations||0).toLocaleString();E.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:O,viol:U})}}),N(w)}else e&&(e.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),l&&(l.textContent="\u2014")}else e&&(e.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),l&&(l.textContent="\u2014");u(m&&m.recent_violations)}catch{}},4500);function u(d){let s=B.querySelector("[data-rl-vbody]"),n=B.querySelector("[data-rl-vcount]");if(!s)return;let o=Array.isArray(d)?d:[];if(n&&(n.textContent=ServerI18n.t("ratelimitViolationsCount",{n:o.length})),o.length===0){s.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let r=a=>{let t=new Date(a*1e3),v=h=>String(h).padStart(2,"0");return`${v(t.getHours())}:${v(t.getMinutes())}:${v(t.getSeconds())}`},c=a=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[a]||"var(--color-text-muted)";s.innerHTML=o.slice(0,30).map(a=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${r(a.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${c(a.scope)}">${(a.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${T(a.ip||"")}</span>
        </div>
      `).join("")}function N(d){d&&g.forEach(({key:s})=>{let n=d[s],o=B.querySelector(`[data-rl-suggest="${s}"]`);if(!o)return;let r=n&&n.suggestion;if(!r){o.hidden=!0;return}let c=o.querySelector("[data-rl-suggest-detail]");c&&(c.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(r.p95_per_second||0).toFixed(2),limit:n.limit||"\u2014",window:n.window||"\u2014",suggLimit:r.suggested_limit,suggWindow:r.suggested_window}));let a=o.querySelector("[data-rl-apply]");a&&(a.dataset.rlSuggestLimit=String(r.suggested_limit),a.dataset.rlSuggestWindow=String(r.suggested_window)),o.hidden=!1})}async function M(){try{let d=await fetch("/admin/metrics",{credentials:"same-origin"});if(!d.ok)return;let s=await d.json(),n=s&&s.rate_limits;if(!n)return;g.forEach(({key:o})=>{let r=n[o],c=B.querySelector(`[data-rl-current="${o}"]`);if(c&&r){let a=(r.hits||0).toLocaleString(),t=(r.violations||0).toLocaleString();c.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:a,viol:t})}}),N(n)}catch{}}B.addEventListener("click",async d=>{let s=d.target.closest("[data-rl-action]");if(!s)return;let n=s.dataset.rlAction;if(n==="save"){let o=s.dataset.rlSave,r=B.querySelector(`[data-rl-limit="${o}"]`),c=B.querySelector(`[data-rl-window="${o}"]`);if(!r||!c)return;let a=parseInt(r.value,10),t=parseInt(c.value,10);if(!Number.isFinite(a)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let v=s.textContent;s.disabled=!0,s.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let h=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:o,limit:a,window:t})});if(h.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:o.toUpperCase(),limit:a,window:t}),!0),M();else{let e=await h.json().catch(()=>({})),i=e&&e.error||`HTTP ${h.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:i}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{s.disabled=!1,s.textContent=v}return}if(n==="apply-suggest"){let o=s.dataset.rlApply,r=parseInt(s.dataset.rlSuggestLimit,10),c=parseInt(s.dataset.rlSuggestWindow,10);if(!o||!Number.isFinite(r)||!Number.isFinite(c))return;let a=s.textContent;s.disabled=!0,s.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:o,limit:r,window:c})});if(t.ok){let v=B.querySelector(`[data-rl-limit="${o}"]`),h=B.querySelector(`[data-rl-window="${o}"]`);v&&(v.value=r),h&&(h.value=c),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:o.toUpperCase(),limit:r,window:c}),!0),M(),C()}else{let v=await t.json().catch(()=>({})),h=v&&v.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:h}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{s.disabled=!1,s.textContent=a}return}if(n==="export"){let o=[];B.querySelectorAll("[data-rl-limit]").forEach(r=>{let c=r.dataset.rlLimit.toUpperCase();o.push(`${c}_RATE_LIMIT=${r.value}`)}),B.querySelectorAll("[data-rl-window]").forEach(r=>{let c=r.dataset.rlWindow.toUpperCase();o.push(`${c}_RATE_WINDOW=${r.value}`)}),x.textContent=o.join(`
`),x.hidden=!1;try{navigator.clipboard?.writeText(o.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else n==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([r,[c,a]])=>{let t=B.querySelector(`[data-rl-limit="${r}"]`),v=B.querySelector(`[data-rl-window="${r}"]`);t&&(t.value=c),v&&(v.value=a)}),x.hidden=!0,C())});function C(){g.forEach(({key:d})=>{let s=B.querySelector(`[data-rl-limit="${d}"]`),n=B.querySelector(`[data-rl-window="${d}"]`),o=B.querySelector(`[data-rl-lockout="${d}"]`),r=B.querySelector(`[data-rl-effective="${d}"]`);if(!s||!n||!r)return;let c=parseInt(s.value,10)||0,a=parseInt(n.value,10)||1,t=(c/a).toFixed(2),v=Math.round(c*1.5),h=`effective_rate = ${c} / ${a}s = ${t} req/s \xB7 burst = ${v}`;if(d==="login"&&o){let e=parseInt(o.value,10)||0;h+=` \xB7 lock = ${e}s`}r.textContent=h})}B.addEventListener("input",d=>{let s=d.target;!s||!s.dataset.rlLimit&&!s.dataset.rlLockout||C()}),B.addEventListener("change",d=>{let s=d.target;!s||!s.dataset.rlWindow||C()}),C();function S(d,s){if(!d||!Array.isArray(s))return;let n=96,o=24,r=s.length?s:new Array(24).fill(0),c=Math.max(1,...r),a=n/Math.max(1,r.length-1),t=r.map((h,e)=>`${(e*a).toFixed(1)},${(o-2-h/c*(o-4)).toFixed(1)}`).join(" "),v=d.querySelector("polyline");v&&v.setAttribute("points",t)}g.forEach(({key:d})=>{let s=B.querySelector(`[data-rl-spark="${d}"]`);s&&S(s,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,L={allowlist:[],denylist:[]},$={input:B.querySelector("[data-rl-ip-input]"),select:B.querySelector("[data-rl-ip-select]"),addBtn:B.querySelector("[data-rl-ip-add]"),summary:B.querySelector("[data-rl-ip-summary]"),error:B.querySelector("[data-rl-ip-error]"),allowCount:B.querySelector("[data-rl-ip-allow-count]"),denyCount:B.querySelector("[data-rl-ip-deny-count]"),allowBody:B.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:B.querySelector('[data-rl-ip-body="denylist"]')};function F(d){if($.error){if(!d){$.error.hidden=!0,$.error.textContent="";return}$.error.hidden=!1,$.error.textContent=d}}function H(d){let s=d==="allowlist"?$.allowBody:$.denyBody,n=d==="allowlist"?$.allowCount:$.denyCount;if(!s||!n)return;let o=Array.isArray(L[d])?L[d]:[];if(n.textContent=String(o.length),o.length===0){let r=ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");s.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:r})}</div>`;return}s.innerHTML=o.map(r=>{let c=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:T(r)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${T(r)}">
          <span class="admin-ratelimit-ip-chip-cidr">${T(r)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${T(r)}" data-rl-ip-remove-kind="${d}" title="${c}" aria-label="${c}">\xD7</button>
        </div>
      `}).join("")}function I(){if(H("allowlist"),H("denylist"),$.summary){let d=(L.allowlist||[]).length,s=(L.denylist||[]).length;$.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:d,deny:s})}}async function y(){try{let d=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!d.ok){$.summary&&($.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:d.status}));return}let s=await d.json();s&&typeof s=="object"&&(L={allowlist:Array.isArray(s.allowlist)?s.allowlist:[],denylist:Array.isArray(s.denylist)?s.denylist:[]},I())}catch{$.summary&&($.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function p(d,{toastLabel:s}={}){try{let n=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(n.ok){let c=await n.json();return L={allowlist:Array.isArray(c.allowlist)?c.allowlist:[],denylist:Array.isArray(c.denylist)?c.denylist:[]},I(),F(""),s&&typeof showToast=="function"&&showToast(s,!0),!0}let o=await n.json().catch(()=>({})),r=o&&o.error||`HTTP ${n.status}`;return F(r),!1}catch{return F(ServerI18n.t("ratelimitNetworkError")),!1}}$.addBtn&&$.addBtn.addEventListener("click",async()=>{if(!$.input||!$.select)return;let d=($.input.value||"").trim();if(!d){F(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(d)){F(ServerI18n.t("ratelimitIpFormatError"));return}let s=$.select.value==="denylist"?"denylist":"allowlist",n=Array.from(new Set([...L[s]||[],d]));await p({[s]:n},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(s==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:d})})&&($.input.value="")}),$.input&&($.input.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),$.addBtn&&$.addBtn.click())}),$.input.addEventListener("input",()=>{$.error&&!$.error.hidden&&F("")})),B.addEventListener("click",async d=>{let s=d.target.closest("[data-rl-ip-remove]");if(!s)return;let n=s.dataset.rlIpRemove,o=s.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",r=(L[o]||[]).filter(c=>c!==n);await p({[o]:r},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:n})})}),y(),setTimeout(async()=>{try{let d=await fetch("/admin/metrics",{credentials:"same-origin"});if(!d.ok)return;let s=await d.json(),n=s&&s.rate_limits;if(!n)return;g.forEach(({key:o})=>{let r=n[o]&&(n[o].bucket_history||n[o].history);if(Array.isArray(r)&&r.length){let c=B.querySelector(`[data-rl-spark="${o}"]`);c&&S(c,r.slice(-24))}})}catch{}},5500)}function j(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(b))return;B.insertAdjacentHTML("beforeend",f());let x=document.getElementById(b);x&&A(x)}document.addEventListener("admin-panel-rendered",j),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),j()})})()});var Bt=ve(()=>{(function(){"use strict";let b="sec-viewer-theme",T="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
      <div id="${b}" class="admin-vt-page hud-page-stack lg:col-span-2">
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
      </div>`}let A=/^#[0-9a-f]{6}$/i,j=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function B(M){return String(M??"").replace(/[&<>"']/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[C])}function x(M){let C={};return!M||typeof M!="object"||(["bg","primary","hero"].forEach(S=>{typeof M[S]=="string"&&A.test(M[S])&&(C[S]=M[S])}),(M.mode==="dark"||M.mode==="light")&&(C.mode=M.mode),typeof M.font=="string"&&/^[\w .-]{1,64}$/.test(M.font)&&(C.font=M.font),(M.logo===null||typeof M.logo=="string"&&j.test(M.logo))&&(C.logo=M.logo)),C}function u(M){let C={...g[0],logo:null};try{let e=localStorage.getItem(T);e&&(C={...C,...x(JSON.parse(e))})}catch{}let S="default";function P(){try{localStorage.setItem(T,JSON.stringify(C))}catch{}}function L(e){let i=/^#?([0-9a-f]{6})$/i.exec(e);if(!i)return[0,0,0];let l=parseInt(i[1],16);return[l>>16&255,l>>8&255,l&255]}function $([e,i,l]){let m=[e,i,l].map(w=>(w/=255,w<=.03928?w/12.92:Math.pow((w+.055)/1.055,2.4)));return .2126*m[0]+.7152*m[1]+.0722*m[2]}function F(e,i){let l=$(L(e)),m=$(L(i)),[w,k]=l>m?[l,m]:[m,l];return(w+.05)/(k+.05)}function H(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function I(){let e=M.querySelector("[data-vt-presets]");e.innerHTML="",g.forEach(i=>{let l=document.createElement("button");l.type="button",l.className="admin-vt-preset"+(S===i.id?" is-active":""),l.innerHTML=`
          <div class="swatch" style="background:${i.bg}">
            <span style="background:${i.primary}"></span>
            <span style="background:${i.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(i.nameKey)}</div>
          <div class="mode">${ServerI18n.t(i.mode==="dark"?"lbDark":"lbLight")}</div>
        `,l.addEventListener("click",()=>{C={...C,...i},S=i.id,P(),h()}),e.appendChild(l)})}function y(){M.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",C.mode===e.dataset.vtModeBtn)})}function p(){let e=M.querySelector("[data-vt-colors]"),i=C.mode==="dark"?"#F8FAFC":"#0F172A",l=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:i,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=l.map(m=>{let w=F(C[m.key],m.vs),k=H(w),_=B(C[m.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${m.label}</span>
                <span class="grade ${k.cls}">${k.label} \xB7 ${w.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${m.key}" />
                <input type="text" value="${_}" data-vt-hex="${m.key}" spellcheck="false" />
                <span class="vs">vs ${m.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function d(){let e=M.querySelector("[data-vt-logo-preview]"),i=M.querySelector(".hint-empty"),l=M.querySelector("[data-vt-logo-actions]");C.logo?(e.src=C.logo,e.hidden=!1,i.style.display="none",l.hidden=!1):(e.hidden=!0,i.style.display="",l.hidden=!0)}function s(){let e=M.querySelector("[data-vt-font]");e.value=C.font;let i=M.querySelector("[data-vt-font-specimen]");i.style.fontFamily=C.font}function n(){let e=C.mode==="dark"?"#F8FAFC":"#0F172A",i=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:F(e,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:F(C.primary,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:F(C.hero,C.bg)}];M.querySelector("[data-vt-contrast]").innerHTML=i.map(l=>{let m=H(l.ratio);return`<span class="vt-contrast-chip ${m.cls}">${l.lbl} \xB7 ${m.label} ${l.ratio.toFixed(1)}</span>`}).join("")}function o(){let e=M.querySelector("[data-vt-stage]"),i=C.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",C.bg),e.style.setProperty("--vt-primary",C.primary),e.style.setProperty("--vt-hero",C.hero),e.style.setProperty("--vt-fg",i),e.style.fontFamily=C.font;let l=M.querySelector("[data-vt-preview-logo]");if(C.logo){let m=document.createElement("img");m.src=C.logo,m.style.maxHeight="40px",l.replaceChildren(m)}else l.textContent="Danmu Fire"}let r="auto",c="auto";function a(){M.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===r)}),M.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===c)})}async function t(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let i=await e.json(),l=i&&i.ViewerThemeMode&&i.ViewerThemeMode[1],m=i&&i.ViewerLangMode&&i.ViewerLangMode[1];typeof l=="string"&&(r=l),typeof m=="string"&&(c=m),a()}catch{}}async function v(e,i){if(window.csrfFetch)try{let l=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:i,index:1})});if(!l.ok)throw new Error(l.status);window.showToast&&window.showToast(`${e} = ${i}`,!0)}catch(l){console.warn("[admin-viewer-theme] force-mode update failed:",l),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function h(){I(),y(),p(),d(),s(),n(),o(),a()}M.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let i=e.target.dataset.vtColor;A.test(e.target.value)&&(C[i]=e.target.value,S="custom",P(),h())}else if(e.target.matches("[data-vt-hex]")){let i=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(C[i]=e.target.value,S="custom",P(),h())}else e.target.matches("[data-vt-font]")&&(C.font=e.target.value,P(),h())}),M.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let i=e.target.files&&e.target.files[0];if(!i)return;if(i.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let l=new FileReader;l.onload=()=>{C.logo=String(l.result||""),P(),h()},l.readAsDataURL(i)}}),M.addEventListener("click",e=>{let i=e.target.closest("[data-vt-mode-btn]");if(i){C.mode=i.dataset.vtModeBtn,S="custom",P(),h();return}let l=e.target.closest("[data-vt-theme-btn]");if(l){r=l.dataset.vtThemeBtn,a(),v("ViewerThemeMode",r);return}let m=e.target.closest("[data-vt-lang-btn]");if(m){c=m.dataset.vtLangBtn,a(),v("ViewerLangMode",c);return}if(e.target.closest("[data-vt-logo-remove]")){C.logo=null,P(),h();return}let k=e.target.closest("[data-vt-device-btn]");if(k){M.querySelectorAll("[data-vt-device-btn]").forEach(D=>D.classList.toggle("is-active",D===k)),M.querySelector("[data-vt-frame]").dataset.device=k.dataset.vtDeviceBtn;return}let _=e.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(C={...g[0],logo:null},S="default",P(),h())}),h(),t()}document.addEventListener("click",function(M){let C=M.target.closest("[data-vt-jump]");if(!C)return;let S=C.dataset.vtJump;if(S){M.preventDefault();try{location.hash="#/"+S}catch{}}});function N(){let M=document.getElementById("settings-grid");if(!M||document.getElementById(b))return;M.insertAdjacentHTML("beforeend",f());let C=document.getElementById(b);C&&u(C)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Ft=ve(()=>{(function(){"use strict";let b="sec-system-overview";function T(){return`
      <div id="${b}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(x=>`
            <div class="admin-soh-kpi" data-m="${x.id}">
              <div class="admin-soh-kpi__label">${x.label}</div>
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
      </div>`}function g(x){let u=Math.floor(x/86400),N=Math.floor(x%86400/3600),M=Math.floor(x%3600/60);return u>0?`${u}d ${String(N).padStart(2,"0")}h ${String(M).padStart(2,"0")}m`:N>0?`${N}h ${String(M).padStart(2,"0")}m`:`${M}m ${String(x%60).padStart(2,"0")}s`}function f(x,u,N){let M=document.querySelector(`[data-m="${x}"]`);if(!M)return;let C=M.querySelector("[data-m-v]");C&&(C.textContent=u);let S=M.querySelector("[data-m-sub]");S&&(S.textContent=N||"")}function A(x){let u=document.querySelector("[data-soh-banner-dot]"),N=document.querySelector("[data-soh-banner-title]"),M=document.querySelector("[data-soh-chip]"),S=!(x.queue_size!=null&&x.queue_capacity!=null&&x.queue_size>=x.queue_capacity);M&&M.classList.toggle("is-warn",!S),u&&u.classList.toggle("is-warn",!S),N&&(N.textContent=S?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function j(){(async()=>{try{let N=await window.csrfFetch("/admin/metrics");if(!N.ok)return;let M=await N.json(),C=I=>Array.isArray(I)&&I.length?I[I.length-1]:null,S=M.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-M.server_started_at)):0;f("uptime",S>0?g(S):"\u2014","");let P=null;try{let I=await fetch("/admin/audience/stats",{credentials:"same-origin"});I.ok&&(P=(await I.json()).total_live)}catch{}let L=M.ws_clients??0;f("conn",String(L+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:L}):ServerI18n.t("sohConnBreakdown",{overlays:L,viewers:P}));let $=C(M.mem_series||[]),F=M.mem_total_mb?(M.mem_total_mb/1024).toFixed(0):null;f("ram",$!=null?`${Number($).toFixed(0)}%`:"\u2014",F?ServerI18n.t("sohMemorySub",{total:F}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${H}`,ServerI18n.t("sohVersionSub")),A(M)}catch{}})();let x=document.getElementById(b);if(!x)return;let u=()=>{let N=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";x.querySelectorAll("[data-soh-mode]").forEach(M=>{let C=M.dataset.sohMode===N;M.classList.toggle("is-active",C),M.setAttribute("aria-pressed",C?"true":"false")})};u(),document.addEventListener("admin:theme-mode",u),x.addEventListener("click",function(N){let M=N.target.closest("[data-soh-mode]");if(M){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(M.dataset.sohMode),u();return}let C=N.target.closest("[data-soh-action]");if(!(!C||C.disabled)){if(C.dataset.sohAction==="copy-url"){let S=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(S);return}if(C.dataset.sohAction==="show-qr"){let S=x.querySelector("[data-soh-qr]");if(!S)return;if(!S.hidden){S.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{S.innerHTML=P.svg,S.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function B(){let x=document.getElementById("settings-grid");!x||document.getElementById(b)||(x.insertAdjacentHTML("beforeend",T()),document.getElementById(b)&&j())}document.addEventListener("admin-panel-rendered",B),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),B()})})()});var Dt=ve(()=>{(function(){"use strict";let b="sec-polls",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(B){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[B]})};function g(){return`
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
  `}function f(){let j=document.getElementById("sec-polls");if(!j)return;let B=j.querySelector("[data-poll-queue]"),x=j.querySelector("[data-poll-editor]"),u=j.querySelector("[data-poll-view-builder]"),N=j.querySelector("[data-poll-view-live]"),M=j.querySelector("[data-poll-view-results]"),C="danmu.adminPollQueue.v2";function S(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function L(W){return{id:P(),label:""}}function $(){return{id:S(),text:"",timer:90,image_url:"",server_q_id:"",options:[L("A"),L("B")]}}let F=null,H="builder",I=null,y=0,p={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},d=null,s=[];try{let W=localStorage.getItem(C);if(W){let V=JSON.parse(W);Array.isArray(V)?s=V:V&&Array.isArray(V.queue)&&(s=V.queue)}}catch{}(!Array.isArray(s)||s.length===0)&&(s=[$()]),s.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let n=s[0].id,o="manual",r=null,c=null,a={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(C,JSON.stringify({queue:s,activeId:n,mode:o}))}catch{}}function v(W){return s.find(V=>V.id===W)}function h(W,V){let ee=v(W);ee&&Object.assign(ee,V)}function e(W,V,ee){let ne=W.slice(),[se]=ne.splice(V,1);return ne.splice(ee,0,se),ne}function i(){B.innerHTML="",s.forEach((W,V)=>{let ee=document.createElement("div");ee.className="admin-poll-qrow",W.id===n&&ee.classList.add("is-active");let ne=a.active&&a.currentIndex===V;ne&&ee.classList.add("is-running"),ee.dataset.qid=W.id,ee.draggable=!0;let se=!!W.image_url;ee.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${V+1}</span>
            <div class="info">
              <div class="text">${T(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${se?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${ne?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===n?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,B.appendChild(ee)})}function l(){let W=v(n)||s[0];if(!W){x.innerHTML="";return}let V=s.indexOf(W);x.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${V+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:V+1})}</span>
            </div>
            <span class="progress">Q${V+1} / ${s.length}</span>
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
            ${W.options.map((ee,ne)=>`
              <div class="admin-poll-opt" data-oid="${ee.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+ne)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ee.id}" value="${T(ee.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+ne)})}" maxlength="100" />
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
        `}function m(){F&&F.active?H="live":I?H="results":H="builder",j.dataset.pollView=H,u.hidden=H!=="builder",N.hidden=H!=="live",M.hidden=H!=="results",i(),l(),J(),H==="live"?R():H==="results"&&E(),H==="live"?w():k()}function w(){d||(d=setInterval(()=>{H!=="live"||!F||!F.active||K()},1e3))}function k(){d&&(clearInterval(d),d=null)}function _(W,V){if(!W||!W.time_limit_seconds)return null;if(!V)return W.time_limit_seconds;let ee=Date.now()/1e3-V;return Math.max(0,Math.round(W.time_limit_seconds-ee))}function D(W){if(W==null)return"\u221E";let V=String(Math.floor(W/60)).padStart(2,"0"),ee=String(W%60).padStart(2,"0");return`${V}:${ee}`}function R(){if(!F||!F.questions||F.questions.length===0){N.innerHTML="";return}let W=F.current_index>=0?F.current_index:0,V=F.questions.length,ee=F.questions[W],ne=_(ee,F.started_at),se=ee.time_limit_seconds||0,oe=se>0&&ne!=null?Math.max(0,Math.min(1,ne/se)):1,de=se>0&&ne!=null&&ne<=Math.max(5,se*.15),Ie=ee.options.reduce((he,Ee)=>he+(Ee.count||0),0),ke=[...ee.options].sort((he,Ee)=>(Ee.count||0)-(he.count||0)),xe=ke[0]?ke[0].count:0,ie=F.questions[W+1],ae=110,re=ae/2-6,le=2*Math.PI*re,Se=le*oe;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${T((F.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:V})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${ae} ${ae}" width="56" height="56">
                      <circle cx="${ae/2}" cy="${ae/2}" r="${re}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${ae/2}" cy="${ae/2}" r="${re}" fill="none"
                        stroke="${de?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${Se} ${le}" stroke-linecap="round"
                        transform="rotate(-90 ${ae/2} ${ae/2})"
                        style="filter: drop-shadow(0 0 4px ${de?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${de?"is-low":""}" data-live-mmss>${ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(ne)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${T(ee.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${ke.map(he=>{let Ee=Ie>0?he.count/Ie*100:0,De=(he.count||0)>0&&he.count===xe;return`
                    <div class="admin-polls-live-bar ${De?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${T(he.key)}</span>
                        <span class="lbl">${T(he.text||"")}</span>
                        ${De?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${Ee.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:he.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${Ee.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Ie}</strong>`})}</span>
                ${ie?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${T(ie.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${W>=V-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${W+1}/${V}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${F.questions.map((he,Ee)=>{let De=Ee<W?"done":Ee===W?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${De}">
                        <span class="idx">${De==="done"?"\u2713":Ee+1}</span>
                        <span class="t">${T(he.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${De==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(he=>`
                    <label class="admin-polls-live-toggle ${p[he.k]?"is-on":""}" data-live-toggle="${he.k}">
                      <span class="lbl">${he.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function K(){if(!F||!F.active)return;let W=F.current_index>=0?F.current_index:0,V=F.questions[W];if(!V)return;let ee=_(V,F.started_at),ne=V.time_limit_seconds||0,se=N.querySelector("[data-live-mmss]"),oe=N.querySelector("[data-live-ring]");if(se&&(se.textContent=ee==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(ee),se.classList.toggle("is-low",ne>0&&ee!=null&&ee<=Math.max(5,ne*.15))),oe&&ne>0&&ee!=null){let de=+oe.getAttribute("r"),Ie=2*Math.PI*de,ke=Math.max(0,Math.min(1,ee/ne));oe.setAttribute("stroke-dasharray",`${Ie*ke} ${Ie}`);let xe=ee<=Math.max(5,ne*.15);oe.setAttribute("stroke",xe?"var(--hud-crimson)":"var(--color-primary)"),oe.style.filter=`drop-shadow(0 0 4px ${xe?"var(--hud-crimson)":"var(--color-primary)"})`}p.autoAdvance&&ne>0&&ee===0&&(W>=F.questions.length-1?z():Z())}function E(){let W=I;if(!W||!W.questions||W.questions.length===0){M.innerHTML="";return}let V=W.questions.length,ee=Math.max(0,Math.min(y,V-1)),ne=W.questions[ee],se=ne.options.reduce((le,Se)=>le+(Se.count||0),0),oe=[...ne.options].sort((le,Se)=>(Se.count||0)-(le.count||0)),de=oe[0]||{key:"-",text:"\u2014",count:0},Ie=oe[1],ke=se>0?de.count/se*100:0,xe=Ie?Math.max(0,de.count-Ie.count):de.count,ie=W.started_at||0,ae=W.ended_at||Date.now()/1e3,re=Math.max(0,Math.round(ae-ie));M.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${V>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((le,Se)=>`
                    <button type="button" role="tab" class="${Se===ee?"is-active":""}" data-results-tab="${Se}">
                      Q${Se+1}<span class="t">${T((le.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ee+1}/${V} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:D(re),n:se})}</span>
                </div>
                <div class="text">${T(ne.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${T(de.key)}</div>
                <div class="info">
                  <div class="lbl">${T(de.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:de.count})} \xB7 ${ke.toFixed(1)}% ${Ie?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:xe}):""}</div>
                </div>
                <div class="pct">${ke.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:se})}</span>
                </div>
                ${oe.map((le,Se)=>{let he=se>0?le.count/se*100:0;return`
                    <div class="admin-polls-results-bar ${Se===0&&le.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${Se+1}</span>
                        <span class="tag">${T(le.key)}</span>
                        <span class="lbl">${T(le.text||"")}</span>
                        <span class="pct">${he.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:le.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${he.toFixed(1)}%"></div></div>
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
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:ne.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${ne.time_limit_seconds?D(ne.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${D(re)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let le=Math.max(1,...oe.map(Se=>Se.count));return oe.map(Se=>`<div class="bar" style="height:${Math.max(6,Se.count/le*100)}%"></div>`).join("")})()}
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
        `}function O(W){let V=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((ee,ne)=>{let se=ee.options.reduce((oe,de)=>oe+(de.count||0),0);ee.options.forEach(oe=>{let de=se>0?(oe.count/se*100).toFixed(1):"0";V.push([ne+1,ee.text,oe.key,oe.text,oe.count,de])})}),V.map(ee=>ee.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function U(W,V,ee){let ne=new Blob([ee],{type:V}),se=document.createElement("a");se.href=URL.createObjectURL(ne),se.download=W,document.body.appendChild(se),se.click(),setTimeout(()=>{URL.revokeObjectURL(se.href),se.remove()},0)}j.addEventListener("click",W=>{let V=W.target.closest("[data-live-action]");if(V){let oe=V.dataset.liveAction;oe==="advance"?Z():oe==="end"?z():oe==="pause"&&(p.autoAdvance=!1,R());return}let ee=W.target.closest("[data-live-toggle]");if(ee){let oe=ee.dataset.liveToggle;oe in p&&(p[oe]=!p[oe],ee.classList.toggle("is-on",p[oe]));return}let ne=W.target.closest("[data-results-tab]");if(ne){y=+ne.dataset.resultsTab||0,E();return}let se=W.target.closest("[data-results-action]");if(se){let oe=se.dataset.resultsAction,de=I;if(!de)return;if(oe==="copy"){let Ie=de.questions.map((ke,xe)=>{let ie=ke.options.reduce((re,le)=>re+(le.count||0),0),ae=ke.options.map(re=>{let le=ie>0?(re.count/ie*100).toFixed(1):"0.0";return`  ${re.key}. ${re.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:re.count})} (${le}%)`});return`Q${xe+1}: ${ke.text}
${ae.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Ie)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else oe==="csv"?U(`poll_${(de.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",O(de)):oe==="json"?U(`poll_${(de.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(de,null,2)):oe==="reset"&&(I=null,y=0,m());return}}),B.addEventListener("dragstart",W=>{let V=W.target.closest(".admin-poll-qrow");V&&(r=V.dataset.qid,V.classList.add("is-dragging"))}),B.addEventListener("dragend",W=>{let V=W.target.closest(".admin-poll-qrow");V&&V.classList.remove("is-dragging"),r=null,B.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over"))}),B.addEventListener("dragover",W=>{W.preventDefault();let V=W.target.closest(".admin-poll-qrow");!V||!r||V.dataset.qid===r||(B.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),V.classList.add("is-drag-over"))}),B.addEventListener("drop",W=>{W.preventDefault();let V=W.target.closest(".admin-poll-qrow");if(!V||!r)return;let ee=s.findIndex(se=>se.id===r),ne=s.findIndex(se=>se.id===V.dataset.qid);ee<0||ne<0||ee===ne||(s=e(s,ee,ne),t(),m())}),B.addEventListener("click",W=>{let V=W.target.closest(".admin-poll-qrow");V&&(n=V.dataset.qid,t(),m())}),x.addEventListener("input",W=>{let V=v(n);if(V){if(W.target.matches("[data-ed-text]")){V.text=W.target.value,t(),i();return}if(W.target.matches("[data-ed-opt-text]")){let ee=W.target.dataset.edOptText,ne=V.options.find(se=>se.id===ee);ne&&(ne.label=W.target.value,t(),i())}}}),x.addEventListener("change",W=>{let V=v(n);V&&W.target.matches("[data-ed-timer]")&&(V.timer=+W.target.value,t(),i())}),x.addEventListener("click",async W=>{let V=v(n);if(!V)return;let ee=W.target.closest("[data-ed-opt-remove]");if(ee){let se=ee.dataset.edOptRemove;V.options.length>2&&(V.options=V.options.filter(oe=>oe.id!==se),t(),l(),i());return}if(W.target.closest("[data-ed-opt-add]")){V.options.length<6&&(V.options.push(L()),t(),l(),i());return}let ne=W.target.closest("[data-ed-action]");if(ne)if(ne.dataset.edAction==="remove-q"){if(s.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let oe=s.findIndex(de=>de.id===n);s=s.filter(de=>de.id!==n),n=s[Math.min(oe,s.length-1)].id,t(),m()}}else if(ne.dataset.edAction==="upload-q-image"){let se=x.querySelector("[data-ed-q-image-input]");se&&se.click()}else ne.dataset.edAction==="remove-q-image"&&(V.image_url="",t(),l(),i())}),x.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let V=W.target.files&&W.target.files[0];if(!V)return;let ee=v(n);if(!ee)return;if(!a.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!ee.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(V.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let ne=new FormData;ne.append("file",V);try{let se=await csrfFetch(`/admin/poll/${encodeURIComponent(a.pollId)}/upload-image/${encodeURIComponent(ee.server_q_id)}`,{method:"POST",body:ne}),oe=await se.json().catch(()=>({}));if(!se.ok)throw new Error(oe.error||"upload failed");ee.image_url=oe.image_url,t(),l(),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(se){showToast&&showToast(String(se.message||se),!1)}finally{W.target.value=""}}),x.addEventListener("dragstart",W=>{let V=W.target.closest(".admin-poll-opt");V&&(c=V.dataset.oid,V.classList.add("is-dragging"))}),x.addEventListener("dragend",W=>{x.querySelectorAll(".is-dragging, .is-drag-over").forEach(V=>V.classList.remove("is-dragging","is-drag-over")),c=null}),x.addEventListener("dragover",W=>{let V=W.target.closest(".admin-poll-opt");!V||!c||V.dataset.oid===c||(W.preventDefault(),x.querySelectorAll(".is-drag-over").forEach(ee=>ee.classList.remove("is-drag-over")),V.classList.add("is-drag-over"))}),x.addEventListener("drop",W=>{W.preventDefault();let V=W.target.closest(".admin-poll-opt"),ee=v(n);if(!V||!c||!ee)return;let ne=ee.options.findIndex(oe=>oe.id===c),se=ee.options.findIndex(oe=>oe.id===V.dataset.oid);ne<0||se<0||ne===se||(ee.options=e(ee.options,ne,se),t(),l())}),j.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let oe=$();s.push(oe),n=oe.id,t(),m();return}let ee=W.target.closest("[data-poll-template]");if(ee){let oe=$(),de=ee.dataset.pollTemplate,Ie=["A","B","C","D","E"],ke=xe=>xe.map((ie,ae)=>{let re=L(Ie[ae]);return re.text=ie,re});de==="yesno"?(oe.text="",oe.options=ke([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):de==="stars"?(oe.timer=60,oe.options=ke(["1","2","3","4","5"])):de==="four"&&(oe.options=ke(["","","",""])),s.push(oe),n=oe.id,t(),m();return}let ne=W.target.closest("[data-poll-mode]");ne&&(o=ne.dataset.pollMode,j.querySelectorAll("[data-poll-mode]").forEach(oe=>oe.classList.toggle("is-active",oe===ne)),t());let se=W.target.closest("[data-poll-session-action]");if(se){let oe=se.dataset.pollSessionAction;oe==="start"?te():oe==="advance"?Z():oe==="end"&&z()}});function J(){let W=j.querySelector("[data-poll-session]");if(!W)return;let V=W.querySelector("[data-poll-session-status]"),ee=W.querySelector("[data-poll-session-action='start']"),ne=W.querySelector("[data-poll-session-action='advance']"),se=W.querySelector("[data-poll-session-action='end']");if(!a.pollId||!a.active){V.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ee.hidden=!1,ne.hidden=!0,se.hidden=!0;return}let oe=s.length,de=a.currentIndex+1,Ie=a.currentIndex>=oe-1;V.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${de} / ${oe}</span>`,ee.hidden=!0,ne.hidden=Ie,se.hidden=!1}async function te(){try{let W=s.map((de,Ie)=>{let ke=(de.text||"").trim(),xe=de.options.map(ie=>(ie.label||"").trim()).filter(Boolean);if(!ke)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Ie+1}));if(xe.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Ie+1}));return{text:ke,options:xe,time_limit_seconds:de.timer&&de.timer>0?de.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let V=(()=>{let de=s.map(Ie=>Number(Ie.timer)||0).filter(Ie=>Ie>0);return de.length?Math.round(de.reduce((Ie,ke)=>Ie+ke,0)/de.length):null})(),ee=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:o||"manual",default_duration_s:V})}),ne=await ee.json().catch(()=>({}));if(!ee.ok)throw new Error(ne.error||ServerI18n.t("pollBuilderErrCreateFailed"));a.pollId=ne.poll_id,(ne.questions||[]).forEach((de,Ie)=>{s[Ie]&&(s[Ie].server_q_id=de.id)}),t();let se=await csrfFetch("/admin/poll/start",{method:"POST"}),oe=await se.json().catch(()=>({}));if(!se.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrStartFailed"));a.active=!0,a.currentIndex=oe.current_index??0,F=oe,I=null,m(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),Q()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function Z(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),V=await W.json().catch(()=>({}));if(!W.ok)throw new Error(V.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));a.currentIndex=V.current_index,a.active=!!V.active,F=V,m(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:a.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function z(){try{let W=F,V=await csrfFetch("/admin/poll/end",{method:"POST"});if(!V.ok){let ee=await V.json().catch(()=>({}));throw new Error(ee.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(I={...W,ended_at:Date.now()/1e3},y=W.current_index>=0?W.current_index:0),a.active=!1,a.pollId="",a.currentIndex=-1,F=null,a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),m(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function Q(){a.statusTimer&&clearInterval(a.statusTimer),a.statusTimer=setInterval(async()=>{if(a.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let V=await W.json();if(V.poll_id!==a.pollId)return;a.active=!!V.active,a.currentIndex=V.current_index??-1;let ee=!!(F&&F.active);F=V,V.active||(clearInterval(a.statusTimer),a.statusTimer=null,ee&&V.questions&&!I&&(I={...V,ended_at:Date.now()/1e3},y=V.current_index>=0?V.current_index:0),F=null),H==="live"?R():m()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{a.statusTimer&&(clearInterval(a.statusTimer),a.statusTimer=null),k()}),m()}function A(){let j=document.getElementById("settings-grid");!j||document.getElementById(b)||(j.insertAdjacentHTML("beforeend",g()),document.getElementById(b)&&f())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var Mt=ve(()=>{(function(){"use strict";let f="sec-live-feed",A={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},j=[],B=[],x=!1,u="",N="all",M=0,C=0,S=null,P=null,L=null;function $(ie){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ie):String(ie??"").replace(/[&<>"']/g,function(ae){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ae]})}function F(ie,ae){return ie?ie.length>ae?ie.slice(0,ae)+"\u2026":ie:""}function H(ie){let ae=new Date(ie),re=le=>String(le).padStart(2,"0");return`${re(ae.getHours())}:${re(ae.getMinutes())}:${re(ae.getSeconds())}`}function I(ie){if(!u)return!0;let ae=u.toLowerCase(),re=ie.data;return re.text&&re.text.toLowerCase().includes(ae)||re.nickname&&re.nickname.toLowerCase().includes(ae)||re.fingerprint&&re.fingerprint.toLowerCase().includes(ae)||re.layout&&re.layout.toLowerCase().includes(ae)}function y(ie){return N==="muted"?!!ie.muted:!0}function p(){N="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ie=>ie.classList.toggle("is-active",ie.dataset.tab==="all"))}function d(){u="",L&&(L.value=""),p()}function s(ie,ae){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let le;return ie==="paused"?le=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ae||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ie==="no-result"?le=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ae||ServerI18n.t("lfNoMatchDesc")}):le=window.AdminEmpty.render("messages"),le.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),le.setAttribute("data-empty-kind","live-feed"),le}let re=document.createElement("div");return re.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",re.setAttribute("data-empty-kind","live-feed"),re.innerHTML=`<div class="admin-proto-placeholder-title">${$(ie)}</div><div class="admin-proto-placeholder-body">${$(ae||"")}</div>`,re}function n(ie){let ae=ie.data,re=document.createElement("div");re.className="admin-live-feed-row"+(ie.muted?" is-muted":""),re.dataset.id=ie.id,re.tabIndex=-1;let le=document.createElement("span");if(le.className="admin-live-feed-time",le.textContent=H(ie.ts),re.appendChild(le),(ae.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ae.layout,re.appendChild(pe)}let he=A[ae.integration];if(he){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=he,re.appendChild(pe)}let Ee=document.createElement("span");Ee.className="admin-live-feed-text",Ee.textContent=F(ae.text||"",80),Ee.title=ae.text||"",re.appendChild(Ee);let De=document.createElement("span");De.className="admin-live-feed-identity",window.AdminIdentity&&De.appendChild(AdminIdentity.render({nickname:ae.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!L||(L.value=pe,L.dispatchEvent(new Event("input",{bubbles:!0})),L.focus())}})),re.appendChild(De);let Le=document.createElement("span");if(Le.className="admin-live-feed-actions is-hover-reveal",ae.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",_e=>{_e.stopPropagation(),r(ie)}),Le.appendChild(pe)}let ge=document.createElement("button");if(ge.type="button",ge.className="admin-ui-chip is-danger admin-live-feed-action",ge.textContent=ServerI18n.t("blockKeywordBtn"),ge.title=ServerI18n.t("blockKeywordTitle"),ge.addEventListener("click",pe=>{pe.stopPropagation(),c("keyword",ae.text,ie.id)}),Le.appendChild(ge),ae.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",ae.fingerprint),pe.addEventListener("click",_e=>{_e.stopPropagation(),c("fingerprint",ae.fingerprint,ie.id)}),Le.appendChild(pe)}return re.appendChild(Le),re.classList.add("is-clickable"),re.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||o(ie)}),re.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),o(ie))}),re}function o(ie){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ie)}async function r(ie){let ae=ie&&ie.data&&ie.data.message_id;if(!ae)return;let re=await window.AdminModeration.recall(ae);if(!re.ok){console.error("[LiveFeed] Recall failed:",re.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ie.recalled=!0;let le=a(ie.id);le&&le.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function c(ie,ae,re){if(!(!ae||!await(ie==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ae))){if(re){let he=j.find(Ee=>Ee.id===re);he&&(he.muted=!0)}else j.forEach(he=>{ie==="keyword"&&he.data.text===ae&&(he.muted=!0),ie==="fingerprint"&&he.data.fingerprint===ae&&(he.muted=!0)});h()}}function a(ie){if(!S||!ie)return null;let ae=S.children;for(let re=0;re<ae.length;re++)if(ae[re].dataset&&ae[re].dataset.id===ie)return ae[re];return null}function t(){let ie=document.activeElement,ae=ie&&ie.closest?ie.closest(".admin-live-feed-row"):null;return ae?ae.dataset.id:null}function v(ie){if(!ie)return;let ae=a(ie);ae&&document.activeElement!==ae&&ae.focus({preventScroll:!0})}function h(){if(!S)return;let ie=t(),ae=document.createDocumentFragment(),re=j.filter(le=>I(le)&&y(le));for(let le=re.length-1;le>=0;le--)ae.appendChild(n(re[le]));if(S.textContent="",ae.childNodes.length===0){let le=x?s("paused"):j.length===0?s("empty"):s("no-result");S.appendChild(le)}else S.appendChild(ae);l(),v(ie)}function e(ie){if(!S||!I(ie)||!y(ie))return null;let ae=S.querySelector("[data-empty-kind='live-feed']");ae&&ae.remove();let re=S.scrollTop<=8,le=n(ie);if(re)S.insertBefore(le,S.firstChild);else{let Se=S.scrollHeight;S.insertBefore(le,S.firstChild),S.scrollTop+=S.scrollHeight-Se,C+=1}return le}function i(){let ie=j.length-200;if(ie<=0)return;j.splice(0,ie).forEach(re=>{let le=a(re.id);le&&le.remove()})}function l(){_(),D(),w()}function m(ie){let ae={ts:Date.now(),data:ie,id:ie&&ie.message_id?"m"+ie.message_id:"e"+ ++M};if(ie&&ie.status==="blocked"&&(ae.muted=!0),x){B.push(ae),D(),w();return}j.push(ae),e(ae),i(),l()}function w(){let ie=document.querySelector("[data-lf-jump]"),ae=document.querySelector("[data-lf-jump-n]");if(!ie||!ae)return;let re=B.length,le=re>0?re:C;le>0?(ie.hidden=!1,ae.textContent=String(le)):ie.hidden=!0}function k(){x&&R(),C=0,S&&(S.scrollTop=0),w()}function _(){let ie=document.querySelector("[data-lf-state]");ie&&(ie.className=x?"ui-status is-warning":"ui-status is-success",ie.textContent=x?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function D(){let ie=document.getElementById(f)||document,ae=(re,le)=>{let Se=ie.querySelector(re);Se&&(Se.textContent=String(le))};ae("[data-cnt-all]",j.length),ae("[data-cnt-mut]",j.filter(re=>re.muted).length)}function R(){if(x=!x,S&&S.setAttribute("aria-live",x?"off":"polite"),P&&(P.textContent=x?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),P.classList.toggle("is-primary",x),P.classList.toggle("is-ghost",!x)),x)D(),w();else{for(let ie of B)j.push(ie);B=[],j.length>200&&j.splice(0,j.length-200),C=0,h()}}function K(){let ie=document.getElementById("settings-grid");if(!ie)return!1;let ae=`
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
              placeholder="${$(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${$(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${$(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return ie.insertAdjacentHTML("beforeend",ae),!0}let E=!1,O=null,U=0,J=1500,te=!1;async function Z(){if(!te){te=!0;try{let ie=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(U),{credentials:"same-origin"});if(!ie.ok)return;let ae=await ie.json();if(Array.isArray(ae.entries)){for(let re of ae.entries)if(!(!re||!re.data)){if(typeof re.seq=="number"){if(re.seq<=U)continue;U=re.seq}m(re.data)}}typeof ae.next_since=="number"&&ae.next_since>U&&(U=ae.next_since)}catch{}finally{te=!1}}}let z=5e3,Q=null,W=!1;async function V(){if(!(W||document.hidden)){W=!0;try{let ie=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ie.ok)return;let ae=await ie.json(),re=Array.isArray(ae.pending)?ae.pending.length:0,le=document.getElementById(f);if(!le)return;let Se=le.querySelector("[data-cnt-q]");Se&&(Se.textContent=String(re));let he=le.querySelector("[data-lf-pending-link]");he&&he.classList.toggle("has-pending",re>0)}catch{}finally{W=!1}}}function ee(){E||(E=!0,Z(),O=setInterval(Z,J),V(),Q=setInterval(V,z),window.addEventListener("beforeunload",()=>{Q&&(clearInterval(Q),Q=null),O&&(clearInterval(O),O=null)}))}function ne(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&K()&&(se(),h())}function se(){S=document.getElementById("liveFeedList"),P=document.getElementById("liveFeedPauseBtn"),L=document.getElementById("liveFeedSearch");let ie=document.getElementById("liveFeedClearBtn"),ae=document.querySelectorAll(".admin-live-feed-tab");P&&P.addEventListener("click",R),ie&&ie.addEventListener("click",()=>{j=[],B=[],C=0,h()});let re=document.querySelector("[data-lf-jump-btn]");if(re&&re.addEventListener("click",k),S&&S.addEventListener("scroll",()=>{S.scrollTop<=8&&C>0&&(C=0,w())},{passive:!0}),ae.forEach(le=>{le.addEventListener("click",()=>{ae.forEach(Se=>Se.classList.remove("is-active")),le.classList.add("is-active"),N=le.dataset.tab||"all",h()})}),L){let le=null;L.addEventListener("input",()=>{clearTimeout(le),le=setTimeout(()=>{u=L.value.trim(),h()},200)})}ee()}function oe(ie){if(!("ontouchstart"in window))return;let ae=0,re=0,le=0,Se=null,he=null,Ee=!1;function De(Le){if(Le.querySelector(".admin-live-feed-row__swipe-actions"))return;let ge=Le.dataset.id,pe=j.find(Fe=>Fe.id===ge),_e=!!(pe&&pe.data&&pe.data.message_id),$e=document.createElement("div");$e.className="admin-live-feed-row__swipe-actions",$e.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${_e?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,$e.addEventListener("click",function(Fe){let Ne=Fe.target.closest("[data-swipe-act]");if(!Ne||Ne.disabled)return;let He=Le.dataset.id,Oe=j.find(Re=>Re.id===He);if(!Oe||!Oe.data)return;let qe=Ne.dataset.swipeAct;qe==="ban"?Oe.data.fingerprint&&c("fingerprint",Oe.data.fingerprint,He):qe==="recall"&&r(Oe),Le.classList.remove("is-swiped")}),Le.appendChild($e)}ie.addEventListener("touchstart",function(Le){let ge=Le.target.closest(".admin-live-feed-row");ge&&(Le.target.closest(".admin-live-feed-row__swipe-actions")||(Se=ge,Ee=!1,ae=Le.touches[0].clientX,re=Le.touches[0].clientY,le=0))},{passive:!0}),ie.addEventListener("touchmove",function(Le){if(!Se||Ee)return;let ge=Le.touches[0],pe=ge.clientX-ae,_e=ge.clientY-re;if(Math.abs(_e)>Math.abs(pe)&&Math.abs(_e)>12){Ee=!0;return}if(le=pe,pe<-10){De(Se),he=Se,Se.classList.add("is-swiping");let $e=Math.max(-180,pe);Se.style.transform=`translateX(${$e}px)`}else pe>10&&Se.classList.contains("is-swiped")&&(Se.style.transform="")},{passive:!0}),ie.addEventListener("touchend",function(){Se&&(Se.classList.remove("is-swiping"),Se.style.transform="",le<=-60?Se.classList.add("is-swiped"):Se.classList.remove("is-swiped"),Se=null,he=null,le=0)},{passive:!0})}function de(){return S?Array.from(S.querySelectorAll(".admin-live-feed-row")):[]}function Ie(){let ie=de(),ae=document.activeElement;for(let re of ie)if(re===ae||re.contains(ae))return re;return null}function ke(ie){let ae=de();if(!ae.length)return!1;let re=Ie(),le=re?ae.indexOf(re)+ie:ie>0?0:ae.length-1;return le=Math.max(0,Math.min(ae.length-1,le)),ae[le].focus(),ae[le].scrollIntoView({block:"nearest"}),!0}function xe(ie){let ae=Ie();if(!ae)return!1;let re=j.find(Se=>Se.id===ae.dataset.id);if(!re)return!1;let le=ie==="keyword"?re.data.text:re.data.fingerprint;return le?(c(ie,le,re.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return j.slice()},isVisible:function(){return!!(S&&S.offsetParent!==null)},isPaused:function(){return x},moveFocus:ke,blockFocused:xe,togglePause:function(){R()}},document.addEventListener("admin-panel-rendered",ne),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ne):ne()})()});var Nt=ve(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function f(h,e=!1){var i=b();return i[h]!==void 0?i[h]:e}function A(h){var e=b();e[h.id]=h.open,T(e)}let j=!1;new MutationObserver(()=>{let h=document.getElementById("settings-grid");if(h&&!(document.getElementById("sec-plugins")||j)){j=!0;try{x(h)}finally{j=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function x(h){let e=`
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
      `;h.insertAdjacentHTML("beforeend",e);let i=document.querySelector("[data-console-filters]");i&&i.addEventListener("click",l=>{let m=l.target.closest("[data-console-filter]");m&&(i.querySelectorAll("[data-console-filter]").forEach(w=>w.classList.toggle("is-active",w===m)),M=m.dataset.consoleFilter,$())}),document.getElementById("pluginsReloadBtn").addEventListener("click",v),I(),H()}let u=0,N=0,M="all",C=[],S=80;function P(h){let e=(h||"INFO").toUpperCase();return e==="ERROR"?"is-error":e==="WARN"?"is-warn":e==="DEBUG"?"is-debug":"is-info"}function L(h){let e=new Date(h*1e3),i=l=>String(l).padStart(2,"0");return`${i(e.getHours())}:${i(e.getMinutes())}:${i(e.getSeconds())}`}function $(){let h=document.getElementById("pluginsConsoleBody");if(!h)return;let e=M==="all"?C:C.filter(i=>(i.level||"INFO").toUpperCase()===M);if(e.length===0){let i=M==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${M} lines yet \xB7 waiting\u2026`;h.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${i}</span>
          </div>`;return}h.innerHTML=e.map(i=>{let l=L(i.ts),m=(i.msg||"").replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),w=(i.plugin||"\u2014").replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),k=(i.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${l}</span>
          <span class="lv ${P(i.level)}">${k}</span>
          <span class="plg">${w}</span>
          <span class="msg">${m}</span>
        </div>`}).join("")}async function F(){try{let h=await fetch(`/admin/plugins/console?since=${u}`,{credentials:"same-origin"});if(!h.ok)return;let e=await h.json();if(!Array.isArray(e.events)||e.events.length===0)return;for(C.unshift(...e.events);C.length>S;)C.pop();u=e.latest_seq||u,$()}catch{}}function H(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:F}))}async function I(){let h=document.getElementById("pluginsList");if(h)try{let e=await csrfFetch("/admin/plugins/list");if(!e.ok)throw new Error(`HTTP ${e.status}`);let i=await e.json(),l=i.plugins||[];if(y(i.upload_allowed!==!1),l.length===0){h.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",p([]);return}h.innerHTML=l.map(d).join(""),a(h),p(l)}catch(e){console.error("Failed to load plugins:",e),h.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function y(h){let e=document.getElementById("pluginsUploadBtn");e&&(e.disabled=!h,e.toggleAttribute("data-upload-disabled",!h),e.textContent=ServerI18n.t(h?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),h?e.removeAttribute("title"):e.title="ALLOW_PLUGIN_UPLOAD")}function p(h){let e=h.length,i=h.filter(_=>_.enabled).length,l=e-i,m=h.map(_=>_.priority).filter(_=>typeof _=="number"),w=m.length?Math.round(m.reduce((_,D)=>_+D,0)/m.length):null,k=(_,D)=>{document.querySelectorAll(`[data-plugins-stat="${_}"]`).forEach(R=>{R.textContent=D})};k("loaded",e),k("running",i),k("paused",l),k("priority",w??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(_=>{_.textContent=e})}function d(h){let{name:e,version:i,description:l,priority:m,enabled:w,is_user:k,file:_}=h,D=`plugin-toggle-${e}`,R=o(m),K=c(m),E=n(h),O=k&&_?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(_)}"
            data-plugin-name="${g(e)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(e)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(e)}">
          <span class="admin-plugins-dot ${w?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(e)}</div>
            ${l?`<div class="desc">${g(l)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${i?"v"+g(i):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${R}">${m??"\u2014"}${K?" \xB7 "+K:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${r(E)}">${E}</span>
          <div class="admin-plugins-toggle-cell">
            ${O}
            <label class="admin-plugins-switch" for="${D}">
              <input type="checkbox" id="${D}" role="switch"
                aria-checked="${!!w}" aria-label="Toggle plugin ${g(e)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(e)}"
                ${w?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function s(h,e){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:h}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:e}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let l=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e})}),m=await l.json().catch(()=>({}));if(!l.ok){showToast(m.error||ServerI18n.t("pluginsToastRemoveFailed",{status:l.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:h}),!0),await I()}catch(l){showToast(ServerI18n.t("pluginsToastNetError",{msg:l.message||""}),!1)}}function n(h){let e=h.file||h.path||h.source||"";if(typeof e=="string"){if(e.endsWith(".py"))return"PY";if(e.endsWith(".js"))return"JS"}return(h.language||"PY").toUpperCase()}function o(h){return h==null?"is-muted":h<=10?"is-danger":h<=50?"is-warn":"is-cyan"}function r(h){return h==="JS"?"is-cyan":h==="PY"?"is-warn":"is-muted"}function c(h){return h==null?"":h<=10?"CRITICAL":h<=50?"HIGH":"NORMAL"}function a(h){h.querySelectorAll(".plugin-toggle").forEach(e=>{e.addEventListener("change",async function(){let i=this.dataset.pluginName,l=this.checked;await t(i,l,this)})}),h.querySelectorAll(".plugin-uninstall").forEach(e=>{e.addEventListener("click",function(){s(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function t(h,e,i){let l=e?"/admin/plugins/enable":"/admin/plugins/disable";try{let m=await csrfFetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h})});if(!m.ok){let w=await m.json().catch(()=>({}));throw new Error(w.error||`HTTP ${m.status}`)}showToast(e?ServerI18n.t("pluginEnabled").replace("{name}",h):ServerI18n.t("pluginDisabled").replace("{name}",h),!0)}catch(m){console.error(`Failed to ${e?"enable":"disable"} plugin:`,m),showToast(m.message||ServerI18n.t("operationFailed"),!1),i&&(i.checked=!e)}}async function v(){let h=document.getElementById("pluginsReloadBtn");h&&(h.disabled=!0);try{let e=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!e.ok){let i=await e.json().catch(()=>({}));throw new Error(i.error||`HTTP ${e.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await I()}catch(e){console.error("Failed to reload plugins:",e),showToast(e.message||ServerI18n.t("reloadFailed"),!1)}finally{h&&(h.disabled=!1)}}})})()});var Pt=ve(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},T={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,f=null;function A(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",n=>{(n.target.matches("[data-pu-close]")||n.target===g)&&s()}),g)}function j(n){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((r,c)=>{let a=c+1,t=a<n,h=t?"is-done":a===n?"is-active":"";return(c>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${h}">
          <span class="circle">${t?"\u2713":a}</span>
          <span class="label">${r}</span>
        </div>`}).join("")}function B(n,o){f.step=n;let r=g.querySelector("[data-pu-steps]");r&&(r.innerHTML=j(n));let c=g.querySelector("[data-pu-body]");c&&(c.innerHTML=o)}function x(n){let o=n==="error-type"?ServerI18n.t("pluginsUploadErrorType"):n==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):n==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):n==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),r=(n||"").startsWith("error")?"\u2715":n==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(n||"").startsWith("error")?"is-error":n==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${r}</div>
          <div class="admin-pu-dropzone-msg">${b(o)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function u(){let n=g.querySelector("[data-pu-dropzone]"),o=g.querySelector("[data-pu-file]"),r=g.querySelector("[data-pu-browse]");r&&r.addEventListener("click",()=>o&&o.click()),o&&o.addEventListener("change",()=>{o.files&&o.files[0]&&N(o.files[0])}),n&&(n.addEventListener("click",()=>o&&o.click()),n.addEventListener("dragover",c=>{c.preventDefault(),n.classList.add("is-over")}),n.addEventListener("dragleave",()=>n.classList.remove("is-over")),n.addEventListener("drop",c=>{c.preventDefault(),n.classList.remove("is-over");let a=c.dataTransfer&&c.dataTransfer.files;if(!(!a||a.length===0)){if(a.length>1){B(1,x("error-multi")),u();return}N(a[0])}}))}function N(n){if(!n.name.match(/\.py$/i)){B(1,x("error-type")),u();return}if(n.size>256*1024){B(1,x("error-size")),u();return}f.file=n,B(2,M(n.name)),C(n)}function M(n){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(n)}</div>
      </div>`}async function C(n){try{let o=new FormData;o.append("file",n);let r=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:o}),c=await r.json().catch(()=>({}));if(!r.ok&&!c.validation){window.showToast?.(c.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:r.status}),!1),B(1,x()),u();return}f.manifest=c.manifest||{},f.validation=c.validation||{},f.filename=c.filename||n.name,S(f)}catch(o){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:o.message||""}),!1),B(1,x()),u()}}function S(n){let o=n.manifest||{},r=n.validation||{},c="";if(!r.syntax_ok)c=P(r.syntax_err,n);else if(Object.keys(o).length===0)c=L(n);else{let a=(r.deps||[]).some(t=>t.status==="missing");c=H(o,r,n,a)}B(2,`<div class="admin-pu-step2">${c}</div>`),I()}function P(n,o){let r=n&&n.line?n.line:"?",c=n&&n.msg?n.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${r}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${o.filename}
${c}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function L(n){return`
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
      </footer>`}function $(n){return n==null?"is-muted":n<=10?"is-danger":n<=50?"is-warn":"is-cyan"}function F(n){if(n==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let o=$(n),r=n<=10?"CRITICAL":n<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${o}">${n} \xB7 ${r}</span>`}function H(n,o,r,c){let a=n.name||r.filename.replace(/\.(py|js)$/i,""),t=n.version?`v${b(n.version)}`:"\u2014",v=n.author?`@${b(n.author.replace(/^@/,""))}`:"\u2014",h=n.description||ServerI18n.t("pluginsUploadNoDescription"),e="PY",i="is-warn",l=Array.isArray(n.permissions)?n.permissions:[],m=Object.keys(T).map(R=>{let K=l.includes(R);return`
        <div class="admin-pu-perm-row ${K?"is-req":"is-not"}">
          <span class="dot">${K?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(R)}</span>
          <span class="label">${b(ServerI18n.t(T[R]))}</span>
        </div>`}).join(""),w=o.deps||[],k=w.map(R=>{let K=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",E=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${K}">
          <span class="dot">${E}</span>
          <span class="name">${b(R.name)}</span>
          <span class="note">${b(R.note||"")}</span>
        </div>`}).join(""),_=o.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(a)}</span>`})}
      </div>`:"",D=w.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(a)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${v}</span>
          <span class="admin-ui-pill admin-pu-pill ${i}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(h)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${F(n.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${m}</div>
        </section>
        ${D}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${c?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${c?"disabled":""} data-pu-confirm>${c?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function I(){let n=g.querySelector("[data-pu-back]");n&&n.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,B(1,x()),u()});let o=g.querySelector("[data-pu-confirm]");o&&o.addEventListener("click",()=>y());let r=g.querySelector("[data-pu-no-manifest-ack]");r&&o&&r.addEventListener("change",()=>{o.disabled=!r.checked})}function y(){let n=f.manifest||{},o=n.name||(f.filename||"").replace(/\.(py|js)$/i,""),r=n.version?`v${b(n.version)}`:"\u2014",c=Array.isArray(n.permissions)?n.permissions:[],a=c.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:c.map(h=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(h)}</span></div>`).join("");B(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${r}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${a}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${b(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:n.priority!=null?n.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=g.querySelector("[data-pu-install]");t&&t.addEventListener("click",p);let v=g.querySelector("[data-pu-back]");v&&v.addEventListener("click",()=>S(f))}async function p(){B(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let n=new FormData;n.append("file",f.file);let o=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:n}),r=await o.json().catch(()=>({}));if(!o.ok){window.showToast?.(r.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:o.status}),!1),S(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:r.name||f.filename}),!0),s();let c=document.getElementById("pluginsReloadBtn");c&&c.click()}catch(n){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:n.message||""}),!1),S(f)}}function d(){A(),f={step:1,file:null,manifest:null,validation:null,filename:null},B(1,x()),u(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function s(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:d,close:s},document.addEventListener("click",n=>{let o=n.target.closest("#pluginsUploadBtn");o&&!o.disabled&&(n.preventDefault(),d())})})()});var Rt=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let T="sec-webhooks",g=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function A(a,t){return a?a.length>t?a.slice(0,t)+"\u2026":a:""}function j(a){if(!a)return"\u2014";try{let t=new Date(a),v=Math.max(0,(Date.now()-t.getTime())/1e3);return v<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(v)}):v<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(v/60)}):v<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(v/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(v/86400)})}catch{return"\u2014"}}function B(a){if(!a)return"\u2014";try{return new URL(a).hostname}catch{return A(a,30)}}function x(a){return a==="active"?"is-success":a==="degraded"?"is-warn":"is-muted"}let u={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function N(){let a=document.getElementById("settings-grid");!a||document.getElementById(T)||(a.insertAdjacentHTML("beforeend",`
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
    `),M())}function M(){let a=document.getElementById(T);if(!a)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async v=>{v.preventDefault();let h=document.getElementById("wh-url").value.trim();if(!h)return;let e=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(w=>w.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let i=document.getElementById("wh-format").value,l=document.getElementById("wh-secret").value.trim(),m={url:h,events:e,format:i};l&&(m.secret=l);try{let w=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),k=await w.json();w.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),F(),t.hidden=!0,await C()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(w){console.error("Webhook register error:",w),showToast(ServerI18n.t("registrationFailed"),!1)}}),a.addEventListener("click",v=>{if(v.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(v.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let i=v.target.closest("[data-wh-log-filter]");if(i){u.deliveryFilter=i.dataset.whLogFilter,a.querySelectorAll("[data-wh-log-filter]").forEach(K=>{K.classList.toggle("is-active",K.dataset.whLogFilter===u.deliveryFilter)}),d();return}let l=v.target.closest("[data-wh-action='test']");if(l){v.stopPropagation(),o(l.dataset.whHookId);return}let m=v.target.closest("[data-wh-action='settings']");if(m){v.stopPropagation(),s(m.dataset.whHookId);return}if(v.target.closest("[data-wh-action='close-detail']")){u.selectedHookId=null,n(),y();return}let k=v.target.closest("[data-wh-action='detail-ping']");if(k){o(k.dataset.whHookId);return}let _=v.target.closest("[data-wh-action='detail-toggle']");if(_){r(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let D=v.target.closest("[data-wh-action='detail-delete']");if(D){c(D.dataset.whHookId);return}let R=v.target.closest("[data-wh-hook-row]");if(R&&!v.target.closest("button")){s(R.dataset.whHookId);return}}),u.stopPoll||(u.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(T)},intervalMs:g,tick:C}))}async function C(){await L(),await Promise.all([S(),P()]),H(),y(),d(),n()}async function S(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();u.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{u.hooks=[]}}async function P(){try{let a=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!a.ok)return;let t=await a.json();u.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],u.stats=t.stats||null}catch{}}async function L(){if(!u.eventCatalogLoaded)try{let a=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(a.ok){let t=await a.json(),v=Array.isArray(t.events)?t.events:[];v.length&&(u.eventCatalog=v)}}catch{}finally{u.eventCatalogLoaded=!0,F()}}function $(a){let t=a&&a.slug?String(a.slug):"";if(a&&a.labelKey){let l=ServerI18n.t(a.labelKey);return{slug:t,label:l?l+" \xB7 "+t:t,title:l}}let v=a&&a.zh?String(a.zh):"",h=a&&a.en?String(a.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",i=(a&&a[e]?String(a[e]):"")||h||v;return{slug:t,label:i?i+" \xB7 "+t:t,title:v&&h?v+" \xB7 "+h:v||h}}function F(){let a=document.querySelector("[data-wh-register-events]");a&&(a.innerHTML=u.eventCatalog.map(function(t){let v=$(t);if(!v.slug)return"";let h=v.slug==="on_danmu"?" checked":"";return'<label title="'+b(v.title)+'"><input type="checkbox" name="wh-event" value="'+b(v.slug)+'"'+h+" /> "+b(v.label)+"</label>"}).join(""))}function H(){let a=document.querySelector("[data-wh-stats]");if(!a)return;let t=u.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};a.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:I()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function I(){return u.hooks.length&&u.hooks[0].retry_count||3}function y(){let a=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(a){if(t&&(t.textContent=String(u.hooks.length)),u.hooks.length===0){a.innerHTML="";let v=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let h=document.getElementById("wh-register-form");h&&(h.hidden=!1),document.getElementById("wh-url")?.focus()}});v.dataset.emptyKind="webhooks",a.appendChild(v);return}a.innerHTML=u.hooks.map(p).join("")}}function p(a){let t=b(a.id||""),v=Number(a.success_count)||0,h=Number(a.fail_count)||0,e=v+h,i=e>0?Math.round(v/e*1e3)/10:100,l=a.enabled!==!1,m=Number(a.last_status)||null,w=l?m&&m>=400||a.last_error?"degraded":"active":"paused",k=w==="active"?"var(--hud-lime)":w==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=w==="active"?"ACTIVE":w==="degraded"?"DEGRADED":"PAUSED",D=u.selectedHookId===a.id?" is-selected":"",R=x(w),K=(a.events||[]).map(function(O){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(O)+"</span>"}).join(""),E=a.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(A(a.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${D}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${l?"0 0 6px "+k:"none"}"></span>
          <span class="name">${b(B(a.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${_}</span>
          <span class="last">last \xB7 ${b(j(a.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(a.url)}</div>
        <div class="admin-wh-card-events">${K}</div>
        ${E}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${i}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${i}%</span>
          </div>
          <span class="counter ok">\u2713 ${v.toLocaleString()}</span>
          <span class="counter ${h>0?"fail":"fail-zero"}">\u2717 ${h}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function d(){let a=document.getElementById("wh-log-list");if(!a)return;let t=u.deliveries.filter(function(v){return u.deliveryFilter==="all"?!0:u.deliveryFilter==="failed"?!v.ok:u.deliveryFilter==="2xx"?v.code&&v.code>=200&&v.code<300:u.deliveryFilter==="5xx"?v.code&&v.code>=500:!0});if(t.length===0){a.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}a.innerHTML=t.map(function(v){let h=v.ts?new Date(v.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=v.code?String(v.code):"\u2014",i=v.ok?"var(--hud-lime)":"var(--hud-crimson)",l=v.duration_ms?v.duration_ms>=1e3?(v.duration_ms/1e3).toFixed(1)+"s":v.duration_ms+"ms":"\u2014",m=v.ok?"var(--color-text-strong)":"var(--hud-amber)",w=b(B(v.hook_url||"")),k=(v.retries||0)===0?"\u2014":"\xD7"+v.retries,_=(v.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${v.dropped?" is-dropped":""}">
          <span class="time">${b(h)}</span>
          <span class="code" style="color:${i};border-color:${i}55;background:${i}15;">${e}</span>
          <span class="dur" style="color:${m}">${b(l)}</span>
          <span class="ep">${w}</span>
          <span class="evt">${b(v.event||"")}</span>
          <span class="retry" style="color:${_}">${k}</span>
        </div>`}).join("")}function s(a){u.selectedHookId=a,y(),n()}function n(){let a=document.querySelector("[data-wh-detail]");if(!a)return;let t=u.hooks.find(function(w){return w.id===u.selectedHookId});if(!t){a.hidden=!0,a.innerHTML="";return}a.hidden=!1;let v=t.enabled!==!1,h=Number(t.last_status)||null,e=v?h&&h>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",i=new Set(t.events||[]),l=u.eventCatalog.map(function(w){let k=$(w),_=i.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+b(k.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+b(k.label)+"</span></label>"}).join(""),m={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};a.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+b(B(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+l+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(m,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(t.id)+'" data-wh-next-enabled="'+(v?"0":"1")+'">'+(v?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function o(a){if(a)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),v=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(v.error||ServerI18n.t("testFailed"),!1),setTimeout(C,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function r(a,t){if(a)try{let v=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a,enabled:t})}),h=await v.json();if(!v.ok){showToast(h.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=u.hooks.find(function(i){return i.id===a});e&&(e.enabled=h.enabled),showToast(h.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),y(),n()}catch(v){console.error("Webhook toggle error:",v),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function c(a){if(!(!a||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let v=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:a})}),h=await v.json();v.ok?(showToast(ServerI18n.t("webhookDeleted")),u.selectedHookId===a&&(u.selectedHookId=null),C()):showToast(h.error||ServerI18n.t("deleteFailed"),!1)}catch(v){console.error("Webhook delete error:",v),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(T)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Ot=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let T="sec-sounds",g=null,f=[],A=[];async function j(){try{let d=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!d.ok)throw new Error(await d.text());let s=await d.json();f=s.sounds||[],A=s.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(d){console.error("Failed to fetch sounds:",d),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],A=[]}}async function B(){return j()}async function x(d,s){let n=new FormData;n.append("file",d),n.append("name",s);let o=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:n}),r=await o.json();if(!o.ok)throw new Error(r.error||"Upload failed");return r}async function u(d){let s=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),n=await s.json();if(!s.ok)throw new Error(n.error||"Delete failed");return n}async function N(d){let s=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),n=await s.json();if(!s.ok)throw new Error(n.error||"Failed to add rule");return n}async function M(d){let s=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:d})}),n=await s.json();if(!s.ok)throw new Error(n.error||"Failed to delete rule");return n}function C(){let d=document.getElementById("soundsList");if(d){if(f.length===0){d.innerHTML="";var s=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});s.dataset.emptyKind="sounds",s.style.gridColumn="1 / -1",d.appendChild(s);return}d.innerHTML=f.map(function(o){var r=b(o.name),c=Math.round((o.volume!=null?o.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(o.name)+'"><div class="name" title="'+r+'">'+r+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(o.name)+'" min="0" max="100" step="1" value="'+c+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(o.name)+'" style="min-width:32px;text-align:right">'+c+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(o.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(o.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),d.querySelectorAll(".sound-play-btn").forEach(function(o){o.addEventListener("click",function(){var r=o.dataset.name,c=f.find(function(a){return a.name===r});c&&(g&&(g.pause(),g=null),g=new Audio(c.url),g.volume=.5,g.play().catch(function(a){console.warn("Audio preview failed:",a)}))})}),d.querySelectorAll(".sound-delete-btn").forEach(function(o){o.addEventListener("click",async function(){var r=o.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await u(r),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",r),!0),await j(),C(),P()}catch(a){window.showToast(a.message,!1)}})});var n={};d.querySelectorAll(".sound-volume-slider").forEach(function(o){var r=o.dataset.name,c=d.querySelector('.sound-volume-label[data-name="'+CSS.escape(r)+'"]');o.addEventListener("input",function(){c&&(c.textContent=o.value+"%"),clearTimeout(n[r]),n[r]=setTimeout(function(){S(r,Number(o.value)/100)},300)}),o.addEventListener("change",function(){clearTimeout(n[r]),S(r,Number(o.value)/100)})})}}async function S(d,s){try{var n=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(d)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:s})}),o=await n.json();if(!n.ok){window.showToast(o.error||"Volume update failed",!1);return}var r=f.find(function(c){return c.name===d});r&&(r.volume=s),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(s*100)}),!0)}catch(c){console.warn("[admin-sounds] volume save failed:",c),window.showToast("Network error",!1)}}function P(){let d=document.getElementById("ruleSoundName");if(!d)return;let s=d.value;if(d.innerHTML="",f.length===0){let n=document.createElement("option");n.value="",n.textContent=ServerI18n.t("noSoundsAvailable"),n.disabled=!0,d.appendChild(n);return}f.forEach(n=>{let o=document.createElement("option");o.value=n.name,o.textContent=n.name,d.appendChild(o)}),s&&[...d.options].some(n=>n.value===s)&&(d.value=s)}function L(){let d=document.getElementById("rulesList");if(d){if(A.length===0){d.innerHTML="";var s=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});s.dataset.emptyKind="sound-rules",d.appendChild(s);return}d.innerHTML=A.map(function(n){var o=n.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):n.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",n.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",n.trigger_value),r=Math.round((n.volume!=null?n.volume:1)*100),c=ServerI18n.t("soundDetailLine").replace("{sound}",n.sound_name).replace("{vol}",r).replace("{cd}",n.cooldown!=null?n.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(n.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(o)+'</div><div class="admin-sounds-rule-detail">'+b(c)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(n.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),d.querySelectorAll(".sound-rule-del-btn").forEach(function(n){n.addEventListener("click",async function(){try{await M(n.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await B(),L()}catch(o){window.showToast(o.message,!1)}})})}}function $(){let d=document.getElementById("soundUploadBtn");d&&d.addEventListener("click",async()=>{let s=document.getElementById("soundFileInput"),n=document.getElementById("soundNameInput"),o=s.files[0];if(!o){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let r=n.value.trim();if(!r){window.showToast(ServerI18n.t("enterSoundName"),!1);return}d.disabled=!0,d.textContent=ServerI18n.t("uploadingStatus");try{await x(o,r),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",r),!0),s.value="",n.value="",await j(),C(),P()}catch(c){window.showToast(c.message,!1)}finally{d.disabled=!1,d.textContent=ServerI18n.t("soundsUploadIdle")}})}function F(){let d=document.getElementById("addRuleBtn");d&&d.addEventListener("click",async()=>{let s=document.getElementById("ruleTriggerType").value,n=document.getElementById("ruleTriggerValue").value.trim(),o=document.getElementById("ruleSoundName").value,r=document.getElementById("ruleVolume"),c=document.getElementById("ruleCooldown");if(s!=="all"&&!n){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!o){window.showToast(ServerI18n.t("selectSound"),!1);return}let a=parseInt(r.value,10)/100,t=parseInt(c.value,10)||0,v={trigger_type:s,trigger_value:s==="all"?"":n,sound_name:o,volume:Math.max(0,Math.min(1,a)),cooldown:Math.max(0,t)};d.disabled=!0;try{await N(v),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await B(),L()}catch(h){window.showToast(h.message,!1)}finally{d.disabled=!1}})}function H(){let d=document.getElementById("ruleTriggerType"),s=document.getElementById("ruleTriggerValue");if(!d||!s)return;function n(){d.value==="all"?(s.disabled=!0,s.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),s.value=""):d.value==="keyword"?(s.disabled=!1,s.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):d.value==="effect"&&(s.disabled=!1,s.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}d.addEventListener("change",n),n()}function I(){let d=document.getElementById("ruleVolume"),s=document.getElementById("ruleVolumeLabel");!d||!s||d.addEventListener("input",()=>{s.textContent=d.value+"%"})}function y(){return`
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
                  <input type="text" id="soundNameInput" placeholder="${b(ServerI18n.t("soundNamePlaceholder"))}" maxlength="100" class="admin-ui-input" />
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
                    <option value="keyword">${b(ServerI18n.t("triggerTypeKeyword"))}</option>
                    <option value="effect">${b(ServerI18n.t("triggerTypeEffect"))}</option>
                    <option value="all">${b(ServerI18n.t("triggerTypeAll"))}</option>
                  </select>
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerValue")}</span>
                  <input type="text" id="ruleTriggerValue" placeholder="${b(ServerI18n.t("triggerValueKeywordPlaceholder"))}" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field admin-sounds-form-full">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlSound")}</span>
                  <select id="ruleSoundName" class="admin-ui-select">
                    <option value="" disabled>${b(ServerI18n.t("soundLoading"))}</option>
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
    `}async function p(){let d=document.getElementById("settings-grid");if(d){if(d.insertAdjacentHTML("beforeend",y()),window.AdminSkeletons){let s=document.getElementById("soundsList");s&&(s.innerHTML="",s.appendChild(window.AdminSkeletons.listRows({rows:3})));let n=document.getElementById("rulesList");n&&(n.innerHTML="",n.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([j(),B()]),C(),P(),L(),$(),F(),H(),I()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let d=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(T)&&!d&&(d=!0,p().finally(()=>{d=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&(d=!0,p().finally(()=>{d=!1}))})})()});var qt=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let T=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",f="sec-emojis",A=[];function j(){return`
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
              <input id="emojiFileInput" type="file" accept="${g}" />
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
    `}function B(I){let y=":"+I.name+":",p=Number(I.used)||0,d=p>0?ServerI18n.t("emojisUsedCount",{n:p}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(I.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(I.url)+'" alt="'+N(y)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(y)+'</div><div class="admin-em-v4__tile-meta">'+b(d)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(y)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(I.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function x(I){let y=document.querySelector("[data-em-quota-label]"),p=document.querySelector("[data-em-quota-fill]");if(!y||!p)return;let d=I.length,s=100;y.textContent=ServerI18n.t("emojisQuotaUsed",{n:d,max:s}),p.style.width=Math.min(100,d/s*100)+"%"}function u(I){let y=document.querySelector("[data-em-preview-body]");if(!y)return;if(!I||I.length===0){y.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let d=I.slice(0,3).map(s=>`<span class="admin-em-v4__preview-pair"><code>:${b(s.name)}:</code> \u2192 <img src="${N(s.url)}" alt=":${N(s.name)}:" /></span>`);y.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:d.join(" \xB7 ")})}function N(I){return b(I)}function M(I){var y=document.getElementById("emojiGrid"),p=document.getElementById("emojiCount");y&&(!I||I.length===0?(window.AdminEmpty?(y.innerHTML="",y.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var d=document.getElementById("emojiFileInput");d&&d.click()}}))):y.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",p&&(p.textContent="0")):(y.innerHTML=I.map(B).join(""),p&&(p.textContent=String(I.length))),x(A),u(A))}function C(){var I=document.getElementById("emojiGrid");if(I)if(window.AdminSkeletons){I.innerHTML="";for(var y=0;y<8;y++){var p=document.createElement("div");p.className="admin-em-v4__tile admin-em-v4__tile--skel";var d=document.createElement("div");d.className="admin-em-v4__tile-thumb";var s=document.createElement("div");s.className="admin-skel",s.style.width="100%",s.style.height="100%",d.appendChild(s),p.appendChild(d);var n=document.createElement("div");n.className="admin-skel admin-skel-bar",n.style.width="60%",n.style.height="8px",n.style.margin="6px auto",p.appendChild(n),I.appendChild(p)}}else I.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function S(){try{var I=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var y=await I.json();A=y.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",A.length||""),P()}catch(d){console.error("[admin-emojis] fetch failed:",d);var p=document.getElementById("emojiGrid");p&&(p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var I=document.getElementById("emojiSearchInput"),y=(I&&I.value||"").trim().toLowerCase(),p=y?A.filter(function(d){return(d.name||"").toLowerCase().includes(y)}):A;M(p)}async function L(){var I=document.getElementById("emojiNameInput"),y=document.getElementById("emojiFileInput"),p=document.getElementById("emojiUploadBtn");if(!(!I||!y||!p)){var d=I.value.trim(),s=y.files&&y.files[0];if(!d){showToast(ServerI18n.t("emojiNameRequired"),!1),I.focus();return}if(!T.test(d)){showToast(ServerI18n.t("emojiNameInvalid"),!1),I.focus();return}if(!s){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var n=s.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(n)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}p.disabled=!0,p.textContent=ServerI18n.t("uploadingStatus");try{var o=new FormData;o.append("name",d),o.append("emojifile",s);var r=await csrfFetch("/admin/emojis/upload",{method:"POST",body:o}),c=await r.json();r.ok?(showToast(c.message||ServerI18n.t("emojiUploadFallback")),I.value="",y.value="",await S()):showToast(c.error||ServerI18n.t("uploadFailed"),!1)}catch(a){console.error("[admin-emojis] upload error:",a),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{p.disabled=!1,p.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function $(I){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",I),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var p=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}),d=await p.json();p.ok?(showToast(d.message||ServerI18n.t("emojiDeleteFallback")),await S()):showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(s){console.error("[admin-emojis] delete error:",s),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function F(I){try{await navigator.clipboard.writeText(I),showToast(ServerI18n.t("copiedLabel").replace("{label}",I))}catch{var y=document.createElement("textarea");y.value=I,y.style.position="fixed",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),showToast(ServerI18n.t("copiedLabel").replace("{label}",I))}}function H(){var I=document.getElementById("settings-grid");if(I){I.insertAdjacentHTML("beforeend",j());var y=document.getElementById("emojiUploadBtn");y&&y.addEventListener("click",L);var p=document.getElementById("emojiNameInput");p&&p.addEventListener("keydown",function(r){r.key==="Enter"&&(r.preventDefault(),L())});var d=document.getElementById("emojiSearchInput");d&&d.addEventListener("input",P);var s=document.getElementById("emojiGrid");s&&s.addEventListener("click",function(r){var c=r.target.closest(".emoji-copy-btn");if(c){F(c.dataset.label);return}var a=r.target.closest(".emoji-delete-btn");a&&$(a.dataset.name)});var n=document.querySelector("[data-em-dropzone]"),o=document.getElementById("emojiFileInput");n&&o&&(["dragenter","dragover"].forEach(function(r){n.addEventListener(r,function(c){c.preventDefault(),n.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(r){n.addEventListener(r,function(c){c.preventDefault(),n.classList.remove("is-dragover")})}),n.addEventListener("drop",function(r){var c=r.dataTransfer&&r.dataTransfer.files&&r.dataTransfer.files[0];if(c){var a=new DataTransfer;a.items.add(c),o.files=a.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var v=c.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=v.slice(0,32),t.focus()}n.classList.add("is-dropping"),setTimeout(function(){n.classList.remove("is-dropping")},1200)}})),C(),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var I=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&H()});I.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&H()}})})()});var Ht=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,T="sec-stickers",g=["png","gif","webp"],f=".gif,.png,.webp",A="__all__",j=[],B=[],x=A;function u(d){return b(d)}function N(){var d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,s=d?`
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
            ${d?`<div class="admin-ui-card">${s}</div>`:""}

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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):b(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function M(d){return d===A?j.length:j.filter(function(s){return s.pack_id===d}).length}function C(){var d=document.getElementById("stickerPackList");if(d){var s='<button type="button" class="admin-stickers-pack'+(x===A?" is-active":"")+'" data-pack="'+A+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+M(A)+"</span></button>";B.forEach(function(n){var o=n.enabled?"is-success":"is-muted",r="admin-stickers-pack"+(n.id===x?" is-active":""),c=n.id==="default",a=c?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+u(n.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+u(n.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+u(n.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+u(n.id)+'" title="'+(n.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(n.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+u(n.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";s+='<div class="'+r+'" data-pack="'+u(n.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+u(n.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+o+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(n.name)+'</span><span class="admin-stickers-pack-count">'+M(n.id)+"</span></button>"+a+"</div>"}),d.innerHTML=s}}function S(d){var s=":"+d.name+":";return'<div class="admin-stickers-tile"><img src="'+u(d.url)+'" alt="'+u(s)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+u(s)+'">'+b(s)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+u(s)+'" title="'+u(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+u(d.name)+'" title="'+u(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var d=document.getElementById("stickerGrid"),s=document.getElementById("stickerCount");if(d){var n=document.getElementById("stickerSearchInput"),o=(n&&n.value||"").trim().toLowerCase(),r=j.filter(function(a){return!(x!==A&&a.pack_id!==x||o&&!(a.name||"").toLowerCase().includes(o))});if(r.length===0){d.innerHTML="";var c=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});c.dataset.emptyKind="stickers",c.style.gridColumn="1 / -1",d.appendChild(c),s&&(s.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}d.innerHTML=r.map(S).join(""),s&&(s.textContent=ServerI18n.t("stickersItemCount",{n:r.length}))}}async function L(){var d=document.getElementById("stickerGrid");if(d)try{var[s,n]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!s.ok)throw new Error("HTTP "+s.status);j=(await s.json()).stickers||[],B=n.ok?(await n.json()).packs||[]:[],x!==A&&!B.some(function(o){return o.id===x})&&(x=A),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",B.length?ServerI18n.t("tabCountPacks",{n:B.length}):""),C(),P()}catch(o){console.error("[admin-stickers] fetch failed:",o),d.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function $(d,s){if(d==="select"){x=s,C(),P();return}if(d==="rename"){var n=B.find(function(w){return w.id===s}),o=prompt(ServerI18n.t("stickersPackNamePrompt"),n?n.name:"");if(!o)return;try{var r=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o})}),c=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await L()):window.showToast(c.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(d==="toggle"){try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s)+"/toggle",{method:"POST"});a.ok&&await L()}catch{}return}if(d==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s),{method:"DELETE"}),v=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),x===s&&(x=A),await L()):window.showToast(v.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(d==="up"||d==="down"){var h=B.slice().sort(function(w,k){return(w.order||0)-(k.order||0)}),e=h.findIndex(function(w){return w.id===s});if(e<0)return;var i=d==="up"?e-1:e+1;if(i<0||i>=h.length)return;var l=h[e],m=h[i];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(l.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:m.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(m.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:l.order||0})})]),await L()}catch{}}}async function F(){var d=prompt(ServerI18n.t("stickersNewPackPrompt"));if(d)try{var s=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),n=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),x=n.pack&&n.pack.id?n.pack.id:x,await L()):window.showToast(n.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var d=document.getElementById("stickerFileInput"),s=document.getElementById("stickerUploadBtn");if(!(!d||!s)){var n=d.files&&d.files[0];if(!n){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var o=n.name.split(".").pop().toLowerCase();if(g.indexOf(o)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}s.disabled=!0;var r=s.textContent;s.textContent=ServerI18n.t("uploadingStatus");try{var c=new FormData;c.append("file",n),x&&x!==A&&c.append("pack_id",x);var a=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:c}),t=await a.json();a.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),d.value="",await L()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(v){console.error("[admin-stickers] upload error:",v),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{s.disabled=!1,s.textContent=r}}}async function I(d){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",d),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var n=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(d),{method:"DELETE"}),o=await n.json();n.ok?(window.showToast(o.message||ServerI18n.t("stickerDeleteFallback")),await L()):window.showToast(o.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-stickers] delete error:",r),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function y(d){try{await navigator.clipboard.writeText(d),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",d))}catch{var s=document.createElement("textarea");s.value=d,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",d))}}function p(){var d=document.getElementById("settings-grid");if(d){d.insertAdjacentHTML("beforeend",N());var s=document.getElementById("stickerUploadBtn");s&&s.addEventListener("click",H);var n=document.getElementById("stickerPackAddBtn");n&&n.addEventListener("click",F);var o=document.getElementById("stickerSearchInput");o&&o.addEventListener("input",P);var r=document.getElementById("stickerPackList");r&&r.addEventListener("click",function(a){var t=a.target.closest("[data-pack-action]");if(!t){var v=a.target.closest("[data-pack]");v&&$("select",v.dataset.pack);return}var h=t.dataset.packAction,e=t.dataset.packId;h==="select"&&!e&&(e=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),$(h,e)});var c=document.getElementById("stickerGrid");c&&c.addEventListener("click",function(a){var t=a.target.closest(".sticker-copy-btn");if(t){y(t.dataset.label);return}var v=a.target.closest(".sticker-delete-btn");v&&I(v.dataset.name)}),L()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(T)&&p()});d.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&p()}})})()});var jt=ve(()=>{(function(){"use strict";let b="sec-extensions-overview",T=window.AdminUtils.escapeHtml,g=15e3,f=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],A={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},j=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function B(y){let p=y&&!y.stale?y.report:null;if(!p&&y&&y.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!p)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(p.state==="error"){let d=j.includes(p.error)?p.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+d)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:p.sent||0,held:p.held||0,blocked:p.blocked||0,skipped:p.late_skipped||0})}}function x(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(u).join("")}
        </div>
      </div>`}function u(y){let p=y.status==="ready",d="is-cold",s=p?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,n=p&&y.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${y.install.steps.map(r=>{if(r.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${T(ServerI18n.t(r.labelKey))} \u2193</a></li>`;let c=r.showOrigin?` <code class="admin-ext-step-code">${T(window.location.origin)}</code>`:"";return`<li>${T(ServerI18n.t(r.labelKey))}${c}</li>`}).join("")}
          </ol>
        </div>`:"",o=y.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${y.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${d}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${y.color}">${y.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${T(y.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${T(y.version)}</span></div>
          </div>
          ${s}
        </div>
        <p class="admin-ext-desc">${T(ServerI18n.t(y.descKey))}</p>
        ${y.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${T(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${n}
        ${o}
      </article>`}async function N(){try{let y=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!y.ok)return;A.fireToken=await y.json(),$()}catch{}}async function M(){try{let y=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!y.ok)return;let p=await y.json();A.sources=Array.isArray(p.sources)?p.sources:[],F()}catch{}}async function C(){try{let y=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!y.ok)return;A.slidoStatus=await y.json(),H()}catch{}}function S(){M(),C()}async function P(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let d=await p.json();A.fireToken={enabled:d.enabled,prefix:d.prefix,has_token:!0,rotated_at:d.rotated_at},A.plainToken=d.token,$(),window.AdminUtils.copyText(d.token,ServerI18n.t("extToastTokenGenerated"))}catch(p){console.warn("[ext] regen failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function L(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);A.fireToken=await p.json(),A.plainToken=null,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(p){console.warn("[ext] revoke failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function $(){let y=document.querySelector("[data-fire-token-display]"),p=document.querySelector('[data-fire-token-action="copy"]'),d=document.querySelector('[data-fire-token-action="regen"]'),s=document.querySelector('[data-fire-token-action="revoke"]');if(!y)return;let n=A.fireToken;A.plainToken?(y.textContent=A.plainToken,y.classList.add("is-plain")):n&&n.has_token?(y.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:n.prefix||""}),y.classList.remove("is-plain")):(y.textContent=ServerI18n.t("extTokenNotSetHint"),y.classList.remove("is-plain")),p&&(p.disabled=!A.plainToken),d&&(d.textContent=n&&n.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),s&&(s.disabled=!(n&&n.has_token))}function F(){let y=new Set(A.sources.map(p=>p.source));document.querySelectorAll(".admin-ext-card").forEach(p=>{let d=f.find(o=>o.id===p.dataset.ext);if(!d)return;let s=p.querySelector("[data-ext-dot]");if(!s)return;let n=d.sourceMatch&&y.has(d.sourceMatch);s.classList.toggle("is-live",!!n),s.classList.toggle("is-cold",!n)})}function H(){let y=document.querySelector("[data-slido-status]");if(!y)return;let p=B(A.slidoStatus);y.textContent=p.text,y.classList.toggle("is-live",p.tone==="is-live"),y.classList.toggle("is-error",p.tone==="is-error");let d=A.slidoStatus&&A.slidoStatus.extension,s=y.closest(".admin-ext-card"),n=s&&s.querySelector("[data-ext-download-step]"),o=s&&s.querySelector("[data-ext-download]"),r=s&&s.querySelector("[data-ext-version]");d&&d.download_url&&d.version?(o&&o.setAttribute("href",d.download_url),n&&(n.hidden=!1),r&&(r.textContent="v"+d.version)):n&&(n.hidden=!0)}function I(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(b))return;y.insertAdjacentHTML("beforeend",x());let p=document.getElementById(b);p&&p.addEventListener("click",d=>{let s=d.target.closest("[data-fire-token-action]");if(!s)return;let n=s.dataset.fireTokenAction;n==="regen"?P():n==="revoke"?L():n==="copy"&&A.plainToken&&window.AdminUtils.copyText(A.plainToken,ServerI18n.t("firetokenToastCopied"))}),N(),A.stopPoll||(A.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:g,tick:S}))}window.AdminExtensions={slidoStatusView:B},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&I()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&I()})})()});var Ut=ve(()=>{(function(){"use strict";let b="sec-firetoken-overview",T=window.AdminUtils.escapeHtml,g=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function A(){return`
      <div id="${b}" class="admin-ft-page hud-page-stack lg:col-span-2">
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
    `}async function j(){await Promise.all([B(),x(),u()])}async function B(){try{let y=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!y.ok)return;f.token=await y.json(),P()}catch{}}async function x(){try{let y=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!y.ok)return;let p=await y.json();f.usage24h=Array.isArray(p.usage_24h)?p.usage_24h:[],f.ips=Array.isArray(p.ips)?p.ips:[],$(),F(),L()}catch{}}async function u(){try{let y=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!y.ok)return;let p=await y.json();f.audit=Array.isArray(p.events)?p.events:[],H()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let d=await p.json();f.token={enabled:d.enabled,prefix:d.prefix,has_token:!0,rotated_at:d.rotated_at,created_at:d.created_at||d.rotated_at},f.plainToken=d.token,P(),window.AdminUtils.copyText(d.token,ServerI18n.t("firetokenToastGenerated")),u()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function M(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);f.token=await p.json(),f.plainToken=null,P(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),u()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function C(y){if(!y)return"\u2014";let p=Date.now()/1e3-y;return p<60?ServerI18n.t("firetokenJustNow"):p<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(p/60)}):p<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(p/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(p/86400)})}function S(y){if(!y)return"\u2014";try{return new Date(y*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function P(){let y=f.token,p=document.querySelector("[data-ft-token-display]"),d=document.querySelector("[data-ft-status]"),s=document.querySelector('[data-ft-action="copy"]'),n=document.querySelector('[data-ft-action="regen"]'),o=document.querySelector('[data-ft-action="revoke"]'),r=document.querySelector('[data-ft-stat="created"]'),c=document.querySelector('[data-ft-stat="rotated"]'),a=document.getElementById("adminFtCurl");if(p&&(f.plainToken?(p.textContent=f.plainToken,p.classList.add("is-plain")):y&&y.has_token?(p.textContent=(y.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",p.classList.remove("is-plain")):(p.textContent=ServerI18n.t("firetokenNotSetHint"),p.classList.remove("is-plain")),d&&(y&&y.enabled&&y.has_token?(d.textContent=ServerI18n.t("firetokenStatusHealthy"),d.className="admin-ft-status is-good"):y&&y.has_token?(d.textContent=ServerI18n.t("firetokenStatusDisabled"),d.className="admin-ft-status is-warn"):(d.textContent=ServerI18n.t("firetokenStatusUnset"),d.className="admin-ft-status is-muted")),s&&(s.disabled=!f.plainToken),o&&(o.disabled=!(y&&y.has_token)),n&&(n.textContent=y&&y.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),r&&(r.textContent=y?S(y.created_at):"\u2014"),c&&(c.textContent=y?C(y.rotated_at):"\u2014"),a)){let t=f.plainToken?f.plainToken:y&&y.prefix?y.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";a.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${t}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function L(){let y=f.usage24h.map(r=>Number(r)||0),p=y.reduce((r,c)=>r+c,0),d=y.length?Math.max(...y):0,s=document.querySelector('[data-ft-stat="hits"]'),n=document.querySelector('[data-ft-stat="peak"]'),o=document.querySelector("[data-ft-peak-meta]");s&&(s.textContent=p.toLocaleString()),n&&(n.textContent=d.toLocaleString()),o&&(o.textContent=ServerI18n.t("firetokenPeakMeta",{peak:d.toLocaleString()}))}function $(){let y=document.getElementById("adminFtChart24h");if(!y)return;let p=f.usage24h.map(o=>Number(o)||0);if(!p.length){y.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let d=Math.max(...p),s=12e3,n=d>0?Math.min(100,s/Math.max(d,s)*100):100;y.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${p.map((o,r)=>{let c=d>0?Math.max(2,o/d*100):2;return`<div class="bar ${d>0&&o===d?"is-peak":""}" style="height:${c}%" title="${r.toString().padStart(2,"0")}:00 \u2014 ${o}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(o=>`<span>${String(o).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function F(){let y=document.getElementById("adminFtIps"),p=document.querySelector("[data-ft-ip-count]");if(!y)return;let d=f.ips||[];if(p&&(p.textContent=d.length?`${d.length} IP`:"\u2014"),!d.length){y.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let s=d[0]?.ip;y.innerHTML=d.map((n,o)=>{let r=o===0,c=n.source==="web"&&(n.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${r?"is-top":""}">
          <span class="ip">${T(n.ip||"?")}</span>
          ${r?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${c?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${T(n.source||"\u2014")}</span>
          <span class="cnt">${n.count||0} hits</span>
          <span class="when">${C(n.last_seen)}</span>
        </div>`}).join("")}function H(){let y=document.getElementById("adminFtAudit");if(!y)return;let p=f.audit||[];if(!p.length){y.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let d={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},s={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};y.innerHTML=p.map(n=>{let o=s[n.kind]||"is-info",r=d[n.kind]||n.kind,c=n.meta||{},a=c.prefix?` \xB7 prefix=${T(c.prefix)}`:c.enabled!=null?` \xB7 enabled=${c.enabled}`:"";return`
        <div class="admin-ft-audit-row ${o}">
          <span class="ts">${S(n.ts)}</span>
          <span class="kind">${T(r)}</span>
          <span class="detail">${a}</span>
        </div>`}).join("")}function I(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(b))return;y.insertAdjacentHTML("beforeend",A());let p=document.getElementById(b);p&&p.addEventListener("click",d=>{let s=d.target.closest("[data-ft-action]");if(!s)return;let n=s.dataset.ftAction;n==="regen"?N():n==="revoke"?M():n==="copy"&&f.plainToken&&window.AdminUtils.copyText(f.plainToken,ServerI18n.t("firetokenToastCopied"))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:g,tick:j}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&I()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&I()})})()});var Kt=ve(()=>{(function(){"use strict";let b="sec-about-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[y]})},g="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",A=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],j=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],B="danmu.about.lastUpdateCheck",x={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function u(){return`
      <div id="${b}" class="admin-about-page hud-page-stack lg:col-span-2">
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
                <div class="admin-about-version-name">${g}</div>
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
            ${A.slice(0,4).map(I=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${T(I.v)}</span>
                  ${I.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${T(I.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${I.notes.slice(0,3).map(y=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${T(y.t)}">${T(y.t.toUpperCase())}</span>
                      <span class="msg">${T(y.l)}</span>
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
              ${j.slice(0,6).map(I=>`
                <div class="admin-about-oss-row">
                  <span class="n">${T(I.n)}</span>
                  <span class="v">${T(I.v)}</span>
                  <span class="l">${T(I.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(I){if(!I||I<0)return"\u2014";let y=Math.floor(I/86400),p=Math.floor(I%86400/3600),d=Math.floor(I%3600/60);return y>0?`${y}d ${p}h`:p>0?`${p}h ${d}m`:`${d}m`}function M(){let I=document.querySelector("[data-about-tag]"),y=document.querySelector("[data-about-build]"),p=document.querySelector("[data-about-uptime]"),d=document.querySelector("[data-about-update]"),s=document.querySelector("[data-about-checked]"),n=document.querySelector("[data-about-env]"),o=document.querySelector("[data-about-ws-path]");if(I&&(I.textContent=`v${x.appVersion}`),y){let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";y.textContent=`BUILD \xB7 ${r} \xB7 stable channel`,n&&(n.textContent=r)}if(p){let r=x.serverStartedAt?x.serverTime-x.serverStartedAt:0;p.textContent=N(r)}if(d&&(x.isLatest===!0?d.textContent=ServerI18n.t("aboutIsLatestYes"):x.isLatest===!1?d.textContent=ServerI18n.t("aboutHasNewVersion",{v:x.latestVersion||""}):d.textContent="\u2014",d.style.color=x.isLatest===!0?"var(--hud-lime)":x.isLatest===!1?"var(--hud-amber)":""),s&&(s.textContent=x.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:C(x.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),o){let r=window.DANMU_CONFIG||{};o.textContent=r.wsPath||"/ws"}}function C(I){let y=Number(I)||0;if(!y)return"\u2014";let p=String(y).length>12?y:y*1e3,d=(Date.now()-p)/1e3;return d<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(d)}):d<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(d/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(d/86400)})}function S(I,y){let p=o=>String(o||"").replace(/^v/i,"").split("-")[0].split(".").map(function(r){return parseInt(r,10)||0}),d=p(I),s=p(y),n=Math.max(d.length,s.length);for(let o=0;o<n;o++){let r=d[o]||0,c=s[o]||0;if(r>c)return!0;if(r<c)return!1}return!1}async function P({silent:I}={}){I||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let y=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!y.ok)throw new Error("HTTP "+y.status);let d=((await y.json()).tag_name||"").replace(/^v/i,"");x.latestVersion=d,x.lastCheckedAt=Date.now(),x.isLatest=!S(d,x.appVersion);try{localStorage.setItem(B,JSON.stringify({ts:x.lastCheckedAt,latest:d,isLatest:x.isLatest}))}catch{}M(),I||window.showToast&&window.showToast(x.isLatest?ServerI18n.t("aboutToastLatest",{v:x.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:d}),!0)}catch(y){I||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:y.message||""}),!1)}}function L(){try{let I=localStorage.getItem(B);if(!I)return;let y=JSON.parse(I);x.latestVersion=y.latest,x.lastCheckedAt=Number(y.ts)||0,x.isLatest=!!y.isLatest}catch{}}async function $(){try{let I=await fetch("/admin/metrics",{credentials:"same-origin"});if(!I.ok)return;let y=await I.json();x.serverStartedAt=Number(y.server_started_at)||0,x.serverTime=Number(y.server_time)||Date.now()/1e3,M()}catch{}}function F(){let I=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",y=x.serverStartedAt?x.serverTime-x.serverStartedAt:0,p=(navigator.userAgent||"").slice(0,200),d=[`${g} v${x.appVersion}`,`Channel: ${I}`,`Uptime: ${N(y)}`,`User-Agent: ${p}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(d).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let I=document.getElementById("settings-grid");if(!I||document.getElementById(b))return;I.insertAdjacentHTML("beforeend",u()),x.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",L(),M();let y=document.getElementById(b);y&&y.addEventListener("click",function(p){let d=p.target.closest("[data-about-action]");if(!d)return;let s=d.dataset.aboutAction;s==="copy"?F():s==="check-update"?P({silent:!1}):s==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():s==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),$(),setInterval($,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&H()})})()});var Wt=ve(()=>{(function(){"use strict";let b="admin-setup-wizard-root",T="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(v){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[v]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],A=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function j(t){return t?t.label?t.label:t.labelKey?ServerI18n.t(t.labelKey):t.name||t.id||"\u2014":"\u2014"}function B(t){return t?t.descriptionKey?ServerI18n.t(t.descriptionKey):t.description||"":""}let x={open:!1,step:0,themes:A.slice(),activeTheme:A[0].name,selectedTheme:A[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function u(){x.publicUrl=window.location.origin+"/"}function N(){let t=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";t==="setup"&&!x.open?M():t!=="setup"&&x.open&&C({silent:!0})}function M(){x.open=!0,x.step=0,u(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",S()),d()),n(),$(),P()}function C(t){let v=t&&t.silent;x.open=!1,document.body.dataset.setupWizardOpen="";let h=document.getElementById(b);if(h&&h.remove(),!v&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function S(){return`
      <div id="${b}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
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
            ${f.map(function(t,v){return`
                <div class="admin-setup-step" data-step-index="${v}">
                  <span class="bullet">${v+1}</span>
                  <span class="lbl">${g(ServerI18n.t(t.labelKey))}</span>
                </div>
                ${v<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function P(){let t=document.getElementById(b);if(!t)return;t.querySelectorAll(".admin-setup-step").forEach(function(w,k){w.classList.toggle("is-done",k<x.step),w.classList.toggle("is-active",k===x.step)}),t.querySelectorAll(".admin-setup-step-sep").forEach(function(w,k){w.classList.toggle("is-done",k<x.step)});let v=t.querySelector("[data-setup-meta]");v&&(v.textContent=ServerI18n.t("setupWizardStepMeta",{current:x.step+1,total:f.length}));let h=t.querySelector('[data-setup-action="prev"]');h&&(h.disabled=x.step===0);let e=t.querySelector('[data-setup-action="next"]');if(e){let w=f[x.step].id;e.textContent=ServerI18n.t("setupWizardNext")}let i=t.querySelector("[data-setup-foot]");i&&(i.hidden=f[x.step].id==="done");let l=t.querySelector("[data-setup-content]");if(!l)return;let m=f[x.step].id;m==="server"?l.innerHTML=L():m==="moderation"?l.innerHTML=F():m==="theme"?l.innerHTML=y():l.innerHTML=p(),s(m)}function L(){let t=x.readiness,v=t?Number(t.overlay_count)||0:null,h=v!==null&&v>0,i=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:x.publicUrl},{ok:h,unknown:v===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:h?ServerI18n.t("setupWizardReadyDisplayOk",{n:v}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(x.activeTheme||x.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:j(x.themes.filter(function(l){return(l.name||l.id)===(x.selectedTheme||x.activeTheme)})[0]||x.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(l){let m=l.unknown?"is-unknown":l.ok?"is-done":"is-pending",w=l.unknown?"?":l.ok?"\u2713":"!",k='<span class="admin-setup-ready-title">'+g(l.title)+'</span><span class="admin-setup-ready-value">'+g(l.value||"")+"</span>",_=l.goto?'<a class="admin-setup-ready-go" href="'+l.goto+'" data-setup-goto="'+l.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+m+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+w+"</span>"+k+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${i}</div>
      </div>`}async function $(){try{let t=await fetch("/overlay_status",{credentials:"same-origin"});if(!t.ok)throw new Error("HTTP "+t.status);let v=await t.json();x.readiness={overlay_count:Number(v.overlay_count)||0,mode:v.mode||""}}catch{x.readiness=null}x.open&&f[x.step].id==="server"&&P()}function F(){let t=x.moderationRules.map(function(v){return`
        <a class="admin-setup-mod-row" href="#/${v.route}" data-setup-goto="#/${v.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${g(ServerI18n.t(v.labelKey))}</span>
            <span class="admin-setup-mod-desc">${g(ServerI18n.t(v.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${g(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${t}</div>
      </div>`}let H=["default","neon","retro","cinema"];function I(){let t={};return(x.themes||[]).forEach(function(v){t[v.name||v.id]=v}),H.map(function(v){let h=A.filter(function(i){return i.name===v})[0],e=t[v];return h?{name:v,label:e&&e.label,labelKey:h.labelKey,descriptionKey:h.descriptionKey,colors:h.colors}:e}).filter(Boolean)}function y(){let t=I();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${t.map(function(v){let h=v.name||v.id||"",e=(x.selectedTheme||x.activeTheme)===h,i=(v.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${e?" is-selected":""}" data-setup-theme="${g(h)}">
                ${e?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${i.map(function(l,m){let w=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(l)};font-size:${10+m*2}px;text-shadow:0 0 6px ${g(l)}66;">${w[m]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(j(v))}</div>
                <div class="admin-setup-theme-sub">${g(B(v))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function p(){let t=(function(){for(let v=0;v<x.themes.length;v+=1){let h=x.themes[v];if((h.name||h.id)===(x.selectedTheme||x.activeTheme))return j(h)}return x.selectedTheme||x.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(x.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(t)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${g(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${g(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function d(){let t=document.getElementById(b);t&&t.addEventListener("click",function(v){if(v.target===t){C();return}let h=v.target.closest("[data-setup-action]");if(h){if(h.dataset.setupAction==="close"){C();return}if(h.dataset.setupAction==="prev"&&x.step>0){x.step-=1,P();return}h.dataset.setupAction==="next"&&r()}})}function s(t){let v=document.getElementById(b);if(v){if(t==="moderation"||t==="done"||t==="server"){if(v.querySelectorAll("[data-setup-goto]").forEach(function(h){h.addEventListener("click",function(){C();let e=h.dataset.setupGoto;e&&(window.location.hash=e)})}),t==="done"){let h=v.querySelector("[data-setup-complete-cta]");h&&h.addEventListener("click",c)}return}if(t==="theme"){v.querySelectorAll("[data-setup-theme]").forEach(function(h){h.addEventListener("click",function(){x.selectedTheme=h.dataset.setupTheme||x.selectedTheme,P()})});return}}}async function n(){try{let t=await fetch("/admin/themes",{credentials:"same-origin"});if(!t.ok)return;let v=await t.json(),h=Array.isArray(v.themes)?v.themes:[];if(!h.length)return;x.themes=h.map(function(e){return{name:e.name||e.id||"",label:e.label||e.display_name||e.name||"",description:e.description||"",colors:e.preview_colors||e.colors||e.palette||A[0].colors}}),x.activeTheme=v.active||x.themes[0]&&x.themes[0].name||x.activeTheme,x.selectedTheme||(x.selectedTheme=x.activeTheme),x.open&&f[x.step].id==="theme"&&P()}catch{}}async function o(){if(!x.selectedTheme||x.selectedTheme===x.activeTheme)return!0;try{let t=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:x.selectedTheme})});if(!t.ok)throw new Error("HTTP "+t.status);return x.activeTheme=x.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function r(){if(!(f[x.step].id==="theme"&&!await o())){if(x.step<f.length-1){x.step+=1,P();return}c()}}function c(){try{localStorage.setItem(T,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),C()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}M()},close:function(){C()},isCompleted:function(){try{return!!localStorage.getItem(T)}catch{return!1}},__setCapabilityForTest:function(){}};function a(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&a()})})()});var Gt=ve(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})},g={poll:null,refreshTimer:0};function f(){return`
      <div id="${b}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-pdd-title>${ServerI18n.t("adminRouteTitle_poll-deepdive")}</h2>
          <!-- \u8FD4\u56DE\u9023\u7D50\u5728\u5361\u7247\u9801\u9996\uFF08\u2039 \u6295\u7968\uFF0C\u8A2D\u8A08\u7A3F 08 \xB7 P1\uFF09\u2014\u2014\u9019\u88E1\u518D\u653E\u4E00\u500B
               \u300C\u2190 \u56DE\u6295\u7968\u5217\u8868\u300D\u662F\u540C\u4E00\u4EF6\u4E8B\u8AAA\u5169\u6B21\u3002 -->
          <p class="admin-ui-page-note" data-pdd-note>${ServerI18n.t("pollDeepdivePageNote")}</p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">${ServerI18n.t("pollDeepdiveLoadingText")}</div>
        </div>
      </div>`}function A($){if($.innerHTML="",!window.AdminEmpty){$.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let F=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});F.classList.add("lg:col-span-2"),F.dataset.emptyKind="poll-deepdive",$.appendChild(F)}let j=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function B($){return $?new Date($*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function x($){if(!$||$.length<2)return"";let F=Math.max.apply(null,$.map(function(d){return d.n}).concat([1])),H=100,I=32,y=H/($.length-1),p=$.map(function(d,s){let n=(s*y).toFixed(2),o=(I-d.n/F*(I-2)-1).toFixed(2);return n+","+o});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+I+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+p.join(" ")+'" /></svg>'}function u($){let F=$.state||($.active?"active":"ended"),H=$.question||"\u2014",I=Array.isArray($.options)?$.options:[],y=function(h){return Number(h.votes!=null?h.votes:h.count)||0},p=I.reduce(function(h,e){return h+y(e)},0),d=F==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:B($.ended_at)}),s=(function(){let h=Number($.started_at)||0;if(!h)return"\u2014";let e=F==="active"?Date.now()/1e3:Number($.ended_at)||h,i=Math.max(0,Math.floor(e-h));return Math.floor(i/60)+":"+String(i%60).padStart(2,"0")})(),n=Number(window._lastOverlayCount)||0,o=n>0?Math.round(p/n*100)+"%":"\u2014",r=n>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:p,audience:n}):ServerI18n.t("pollDeepdiveParticipationUnknown"),c=(function(){let h=Array.isArray($.questions)?$.questions:[],e=0;for(let i of h)e+=Number(i.duplicate_attempts)||0;return h.length||(e=Number($.duplicate_attempts)||0),e})(),a=I.map(function(h,e){let i=y(h),l=p>0?i/p*100:0,m=j[e%j.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${T(h.label||h.text||h.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${i} \xB7 ${l.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${l.toFixed(2)}%;background:${m}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray($.vote_timeline)?$.vote_timeline:[],v=t.length>=2?x(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${T(H)}</div>
          <div class="admin-pdd-state">${T(d)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${p}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${o}</div><div class="sub">${T(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${T(s)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${c}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${I.length?a:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${v}</div>
        </article>
      </div>`}function N(){let $=document.querySelector("[data-pdd-grid]");if($){if(!g.poll||!g.poll.poll_id){A($);return}$.innerHTML=u(g.poll)}}async function M(){try{let $=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!$.ok)return;let F=await $.json();g.poll=F,N()}catch{}}function C(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let $=[["option_label","votes","percentage"]],F=g.poll.options.reduce(function(d,s){return d+(Number(s.votes!=null?s.votes:s.count)||0)},0);g.poll.options.forEach(function(d,s){let n=Number(d.votes!=null?d.votes:d.count)||0,o=F>0?(n/F*100).toFixed(2):"0.00";$.push([d.label||"option_"+(s+1),n,o])});let H=$.map(function(d){return d.map(window.AdminUtils.csvCell).join(",")}).join(`
`),I=new Blob([H],{type:"text/csv;charset=utf-8"}),y=URL.createObjectURL(I),p=document.createElement("a");p.href=y,p.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(y)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function S(){try{let $=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(M(),g.refreshTimer||(g.refreshTimer=setInterval(M,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function L(){let $=document.getElementById("settings-grid");if(!$||document.getElementById(b))return;$.insertAdjacentHTML("beforeend",f());let F=document.getElementById(b);F&&F.addEventListener("click",function(H){let I=H.target.closest("[data-pdd-action]");I&&(I.dataset.pddAction==="export-csv"?C():I.dataset.pddAction==="push"&&S())}),M(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&L()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&L()})})()});var zt=ve(()=>{(function(){"use strict";let b="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},A=null;function j(o){let r=o.detail&&o.detail.entry;r&&(f.open||(A=document.activeElement),f.entry=r,B(),r.data&&r.data.fingerprint&&M(r.data.fingerprint),C(r))}function B(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",S()),P()),L();let o=document.querySelector("#"+b+" .admin-msgd-v4__close")||document.querySelector("#"+b+" button");if(o)try{o.focus({preventScroll:!0})}catch{}}function x(){f.open=!1,document.body.dataset.messageDrawerOpen="";let o=document.getElementById(b);if(o&&o.remove(),A&&typeof A.focus=="function"&&document.contains(A))try{A.focus({preventScroll:!0})}catch{}A=null}function u(o){if(!f.open)return;if(o.key==="Escape"){x();return}let r=document.activeElement,c=r?(r.tagName||"").toLowerCase():"";if(!(r&&(r.isContentEditable||c==="input"||c==="textarea"||c==="select"))){if(o.key==="ArrowLeft"||o.key==="k"){N(-1),o.preventDefault();return}if(o.key==="ArrowRight"||o.key==="j"){N(1),o.preventDefault();return}}}function N(o){if(!f.entry)return;let r=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(r=window.AdminLiveFeed.getEntries()),!r.length)return;let c=r.findIndex(function(v){return v.id===f.entry.id});if(c<0)return;let a=c+-o;if(a<0||a>=r.length){window.showToast&&window.showToast(o<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=r[a];f.entry=t,f.fingerprintRecord=null,C(t),L(),t.data&&t.data.fingerprint&&M(t.data.fingerprint)}async function M(o){try{let r=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!r.ok)return;let c=await r.json(),t=(Array.isArray(c.records)?c.records:[]).find(function(v){return v.fingerprint===o});f.fingerprintRecord=t||null,L()}catch{}}function C(o){let r=o.data&&o.data.fingerprint;if(!r){f.sameFpEntries=[];return}let c=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(c=window.AdminLiveFeed.getEntries()),f.sameFpEntries=c.filter(function(a){return(a.data&&a.data.fingerprint||a.fingerprint||"")===r}).slice(0,8)}function S(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let o=document.getElementById(b);o&&o.addEventListener("click",function(r){let c=r.target.closest("[data-msgd-action]");if(!c)return;r.stopPropagation();let a=c.dataset.msgdAction;a==="close"?x():a==="ban-fp"?y():a==="ban-fp-quick"?I():a==="recall-msg"?d():a==="blacklist-kw"?s():a==="reply"?n():a==="prev"?N(-1):a==="next"&&N(1)})}function L(){let o=document.getElementById(b);if(!o)return;let r=o.querySelector("[data-msgd-body]");r&&(r.innerHTML=$())}function $(){let o=f.entry;if(!o)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let r=o.data||{},c=r.fingerprint||"\u2014",a=c==="\u2014"?"\u2014":c.slice(0,8),t=c==="\u2014"?"\u2014":c.slice(0,12),v=o.ts?F(o.ts):"\u2014",h=r.nickname||ServerI18n.t("msgDrawerAnonymous"),e=f.fingerprintRecord||{},i=Number(e.message_count)||0,l=Number(e.violation_count)||0,m=f.sameFpEntries||[],w=m.length?Math.round(m.reduce((_,D)=>_+((D.data||D).text||"").length,0)/m.length):(r.text||"").length,k=0;for(let _=0;_<c.length;_++)k=k*31+c.charCodeAt(_)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${g((h||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(h)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(v)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(r.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${i||m.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${w}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${l>0?"warn":"good"}">${l}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(r.ip||"\u2014")}<br/>
          UA \xB7 ${g(r.user_agent||r.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${c==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${r.message_id?"":"disabled"}>${g(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function F(o){try{let r=new Date(o),c=String(r.getHours()).padStart(2,"0"),a=String(r.getMinutes()).padStart(2,"0"),t=String(r.getSeconds()).padStart(2,"0");return c+":"+a+":"+t}catch{return"\u2014"}}function H(o){let r;if(typeof o=="number")r=o*1e3;else if(typeof o=="string")r=new Date(o).getTime();else return"\u2014";if(!r)return"\u2014";let c=(Date.now()-r)/1e3;return c<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(c)}):c<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(c/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(c/86400)})}async function I(o,r,c){let a=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!a)return;let t=parseInt(r||0,10)||0,v=t>0?await window.AdminModeration.banFingerprint(a,t,o):await window.AdminModeration.callBlock("fingerprint",a,o);if(!v.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:v.error||""}),!1);return}let h=c||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:a.slice(0,8),label:h}),!0),x()}async function y(){let o=f.entry&&f.entry.data||{},r=o.fingerprint||"\u2014";if(r==="\u2014")return;let c=r.slice(0,12),a=o.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let k=0;k<r.length;k++)t=t*31+r.charCodeAt(k)&65535;t=t%360;let v=document.createElement("div");v.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${g((a||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(a)}</div>
          <div class="fp">fp:${g(c)}</div>
          <div class="ip">IP \xB7 ${g(o.ip||"\u2014")} \xB7 ${g(o.user_agent||o.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let h=k=>{v.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),k.classList.add("is-active")};if(v.addEventListener("click",k=>{let _=k.target.closest("[data-ban-duration]");_&&h(_)}),v.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let _=k.target.closest("[data-ban-duration]");_&&(k.preventDefault(),h(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:v,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let i=(v.querySelector("[data-ban-reason]")||{}).value||"",l=v.querySelector(".admin-bancfm-dchip.is-active"),m=l&&parseInt(l.dataset.banDuration||"0",10)||0,w=l?l.textContent.trim():ServerI18n.t("msgDrawerPermanent");return I(i.trim(),m,w)}function p(){}async function d(){let o=f.entry,r=o&&o.data&&o.data.message_id;if(!r)return;if(!(await window.AdminModeration.recall(r)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),x()}async function s(){let o=f.entry&&f.entry.data&&f.entry.data.text;if(!o)return;await window.AdminModeration.blockKeyword(o)&&x()}async function n(){let o=document.querySelector("[data-msgd-reply]"),r=o?o.value.trim():"";if(r)try{let c=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r})});if(!c.ok)throw new Error("HTTP "+c.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),o&&(o.value="")}catch(c){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:c.message||""}),!1)}}window.AdminMessageDrawer={open:function(o){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:o}}))},close:x},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",j),document.addEventListener("keydown",u))})})()});var Vt=ve(()=>{(function(){"use strict";let b="danmu.notifications.read",T="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={items:[],refreshTimer:0};function A(a){try{let t=localStorage.getItem(a);if(!t)return new Set;let v=JSON.parse(t);return new Set(Array.isArray(v)?v:[])}catch{return new Set}}function j(a,t){try{localStorage.setItem(a,JSON.stringify(Array.from(t)))}catch{}}function B(a){let t=A(b);t.add(a),j(b,t)}async function x(){let a=[u().catch(function(){return[]}),N().catch(function(){return[]}),M().catch(function(){return[]}),C().catch(function(){return[]})],v=(await Promise.all(a)).flat();v.sort(function(h,e){return(e.ts||0)-(h.ts||0)}),f.items=v,F(),y()&&H()}async function u(){let a=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(h,e){let i=(Number(h.ts)||0)*1e3,l="tok-"+(h.ts||e)+"-"+(h.kind||"x"),m=h.kind||"?",w="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(m==="rotated")w="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(m==="revoked")w="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(m==="toggled"){let _=h.meta&&h.meta.enabled;w=_?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:l,sev:w,src:"Fire Token",ts:i,title:k,desc:ServerI18n.t("notifDescEventType",{kind:m})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function N(){let a=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(h,e){let i=(Number(h.ts)||0)*1e3,l="flt-"+(h.ts||e)+"-"+(h.action||"x")+"-"+e,m=h.action||"match";return{id:l,sev:m==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:m}),desc:ServerI18n.t("notifDescFilterHit",{rule:h.rule_id||"?",text:(h.text||"").slice(0,60)}),raw:h}})}async function M(){let a=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json();return(Array.isArray(t.events)?t.events:[]).map(function(h,e){let i=(Number(h.ts)||0)*1e3,l=String(h.kind||"?");return{id:"wh-"+(h.ts||e)+"-"+l+"-"+e,sev:l==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:l}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:h.actor||"system"})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function C(){let a=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!a.ok)return[];let t=await a.json(),v=Array.isArray(t.events)?t.events:[],h=new Set(["auth","broadcast","system","session","sessions"]);return v.filter(function(e){return h.has(String(e.source||""))}).map(function(e,i){let l=(Number(e.ts)||0)*1e3,m=String(e.kind||"?");return{id:"sys-"+(e.ts||i)+"-"+(e.source||"x")+"-"+m+"-"+i,sev:m==="login_failed"?"warn":"info",src:"System",ts:l,title:ServerI18n.t("notifTitleSystemEvent",{kind:m}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let S="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function L(a){let t=P[a];return t?ServerI18n.t(t.key):a}function $(){let a=A(b),t=A(T);return f.items.filter(v=>!a.has(v.id)&&!t.has(v.id))}function F(){let a=document.querySelector("[data-notif-badge]");if(!a)return;let t=$().length;a.textContent=t>99?"99+":String(t),a.hidden=t===0}function H(){let a=document.getElementById(S);if(!a)return;let t=$().slice(0,20),v=t.length?t.map(h=>{let e=P[h.src];return'<li class="admin-notif__item" data-sev="'+g(h.sev)+'"><div class="admin-notif__text">'+g(h.title)+'</div><div class="admin-notif__meta">'+g(L(h.src))+" \xB7 "+g(I(h.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+g(e.hash)+'" data-notif-id="'+g(h.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";a.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+v+"</ul>"}function I(a){if(!a)return"\u2014";let t=(Date.now()-a)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function y(){let a=document.getElementById(S);return!!a&&!a.hidden}function p(){let a=document.getElementById(S);a&&(H(),a.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(x,3e4)))}function d(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&p()}function s(){let a=document.getElementById(S);a&&(a.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function n(){y()?s():p()}function o(){let a=document.querySelector(".admin-dash-topbar-actions");if(!a||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',a.insertBefore(t,a.firstChild),!document.getElementById(S)){let v=document.createElement("div");v.id=S,v.className="admin-notif",v.setAttribute("role","dialog"),v.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),v.hidden=!0,document.body.appendChild(v)}F(),d()}function r(){document.addEventListener("click",a=>{if(a.target.closest("#admin-notif-bell")){a.preventDefault(),n();return}let t=a.target.closest("[data-notif-go]");if(t){B(t.dataset.notifId),s(),location.hash=t.dataset.notifGo,F();return}if(a.target.closest("[data-notif-readall]")){$().forEach(v=>B(v.id)),H(),F();return}y()&&!a.target.closest("#"+S)&&s()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&y()&&s()}),window.addEventListener("hashchange",d),d()}function c(){o(),x()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(o).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),r(),c()})})()});var Jt=ve(()=>{(function(){"use strict";let b="sec-audit-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function A(){return`
      <div id="${b}" class="admin-audit-page hud-page-stack lg:col-span-2">
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
      </div>`}function j(n){if(!n)return"\u2014";try{let o=new Date(Number(n)*1e3),r=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0"),a=String(o.getSeconds()).padStart(2,"0");return`${r}:${c}:${a}`}catch{return"\u2014"}}function B(n){let o=String(n.action||n.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(o)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(o)?"warn":"info"}function x(n){return n==="danger"?"var(--hud-crimson, #f87171)":n==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function u(n){return f.filterActor==="all"||String(n.actor||"").toLowerCase()===f.filterActor}function N(n){return f.filterSeverity==="all"||B(n)===f.filterSeverity}function M(){return f.events.filter(function(n){return u(n)&&N(n)})}function C(n){let o=n&&n.meta&&typeof n.meta=="object"?n.meta:{};return o.target||o.keyword||o.fp||o.fingerprint||o.name||o.mode||o.session||o.hook_id||n.target||""}function S(n,o){let r=n!=null,c=o!=null;if(!r&&!c)return"";let a=r?T(JSON.stringify(n)):"",t=c?T(JSON.stringify(o)):"";return r?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${a}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function P(n){let o=n&&n.meta&&typeof n.meta=="object"?n.meta:{},r=[];n.detail&&r.push(`<span>${T(String(n.detail))}</span>`);let c=S(n.before,n.after);c&&r.push(c);let a=Object.assign({},o);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(v){delete a[v]}),Object.keys(a).length&&r.push(`<code class="admin-ui-code admin-audit-meta-extra">${T(JSON.stringify(a))}</code>`),!r.length){let v=g[n.source]&&g[n.source].label||n.source||"system";r.push(`<span>${T(String(v))}</span>`)}return r.join(" ")}function L(n){return n==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":n==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function $(){let n=document.querySelector("[data-audit-rows]");if(!n)return;let o=M();if(!o.length){n.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}n.innerHTML=o.map(function(r){let c=B(r),a=x(c),t=String(r.actor||"system"),v=C(r);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${c}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${T(j(r.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${a};box-shadow:0 0 6px ${a}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${L(t)}">${T(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${T(String(r.action||r.kind||"\u2014"))}</span>
              ${v?`<span class="admin-ui-target admin-audit-target">\u2192 ${T(String(v))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(r)}</div>
          </div>
        </div>`}).join("")}function F(){let n=document.querySelector("[data-audit-summary]");if(!n)return;let o=M().length,r=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,c=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();n.textContent=ServerI18n.t("auditSummaryLine",{n:o,actor:r,sev:c})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditSeverityFilter===f.filterSeverity)})}async function I(){try{let n=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!n.ok)return;let o=await n.json(),r=Array.isArray(o.events)?o.events.slice():[];r.sort(function(c,a){return Number(a.ts||0)-Number(c.ts||0)}),f.events=r,H(),$(),F()}catch{}}function y(){let n=M();if(!n.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let o=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),r=URL.createObjectURL(o),c=document.createElement("a");c.href=r,c.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(r)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:n.length}),!0)}function p(){let n=document.getElementById(b);n&&n.addEventListener("click",function(o){let r=o.target.closest("[data-audit-actor-filter]");if(r){f.filterActor=r.dataset.auditActorFilter||"all",H(),$(),F();return}let c=o.target.closest("[data-audit-severity-filter]");if(c){let a=c.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===a?"all":a,H(),$(),F();return}if(o.target.closest("[data-audit-export]")){y();return}o.target.closest("[data-audit-refresh]")&&I()})}function d(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(I(),f.refreshTimer||(f.refreshTimer=setInterval(I,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function s(){let n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",A()),p(),I(),d(),window.addEventListener("hashchange",d))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&s()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&s()})})()});var Yt=ve(()=>{(function(){"use strict";let b="sec-audience-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,A={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function j(i){if(!i)return g[0];let l=0;for(let m=0;m<i.length;m++)l=l*31+i.charCodeAt(m)>>>0;return g[l%g.length]}function B(i){if(!i)return"\u2014";let l=typeof i=="number"?i*1e3:new Date(i).getTime();if(!l)return"\u2014";let m=Math.max(0,(Date.now()-l)/1e3);return m<60?Math.floor(m)+"s":m<3600?Math.floor(m/60)+"m":m<86400?Math.floor(m/3600)+"h":Math.floor(m/86400)+"d"}function x(i){return i==="blocked"||i==="high"?"is-danger":i==="mid"?"is-warn":"is-success"}function u(){return`
      <div id="${b}" class="admin-audience-page hud-page-stack lg:col-span-2">
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
      </div>`}function N(){let i=A.search.trim().toLowerCase(),l=A.records.slice();return i&&(l=l.filter(function(m){return String(m.nickname||"").toLowerCase().indexOf(i)!==-1||String(m.hash||"").toLowerCase().indexOf(i)!==-1})),l.sort(function(m,w){return A.sort==="last_seen"?(Number(w.last_seen)||0)-(Number(m.last_seen)||0):(Number(w.msgs)||0)-(Number(m.msgs)||0)}),A.filter==="all"?l:A.filter==="flagged"?l.filter(function(m){return m.state==="flagged"||m.state==="blocked"}):A.filter==="extension"?l.filter(function(m){return m.fingerprint&&(m.fingerprint.indexOf("slido")===0||m.fingerprint.indexOf("ext_")===0)}):l}function M(){let i=document.querySelector("[data-aud-stats]");if(!i)return;let l=A.records,m=l.length,w=l.filter(function(R){return R.state==="flagged"}).length,k=l.filter(function(R){return R.state==="blocked"}).length,_=l.reduce(function(R,K){return R+(Number(K.msgs)||0)},0),D=l.filter(function(R){let K=R.last_seen;if(!K)return!1;let E=typeof K=="number"?K*1e3:new Date(K).getTime();return(Date.now()-E)/1e3<300}).length;i.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${m}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${D}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${w}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function C(){let i=document.querySelector("[data-aud-filters]");if(!i)return;let l=A.records.length,m=A.records.filter(function(w){return w.state==="flagged"||w.state==="blocked"}).length;i.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:l})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:m})}</button>`}let S="__anon__";function P(i){let l=(i.nickname||"").trim();return!l||l==="\u533F\u540D"}function L(i){let l=i.hash||i.fingerprint||"";return l?l.length>9?l.slice(0,4)+"\u2026"+l.slice(-4):l:"\u2014"}function $(){let i=[],l=[];return N().forEach(function(m){P(m)?l.push(m):i.push(m)}),l.length&&i.push({_anonGroup:!0,_count:l.length,fingerprint:S,msgs:l.reduce(function(m,w){return m+(Number(w.msgs)||0)},0),blocked:l.reduce(function(m,w){return m+(Number(w.blocked)||0)},0),last_seen:Math.max.apply(null,l.map(function(m){return m.last_seen||0})),state:l.some(function(m){return m.state==="blocked"})?"blocked":"active"}),i}function F(){let i=document.querySelector("[data-aud-list]"),l=document.querySelector("[data-aud-summary]");if(!i)return;let m=$(),w=Math.min(m.length,A.shown);if(l&&(l.textContent=ServerI18n.t("audienceShownOfTotal",{n:w,total:m.length})),m.length===0){i.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",i.appendChild(R);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=m.slice(0,w).map(function(R){let K=R.fingerprint||"\u2014",E=R.state==="blocked",O=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),U=R._anonGroup?"?":O.slice(0,1),J=j(K);return`
        <div class="admin-aud-row${A.selectedFp===K?" is-selected":""}" data-aud-row data-aud-fp="${T(K)}">
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
          <span class="col col-seen">${T(B(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${T(K)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),D=m.length>w?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";i.innerHTML=k+_+D}function H(i){return i&&A.records.find(function(l){return l.fingerprint===i})||null}function I(i){if(!i)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let l=[],m=Number(i.msgs)||0,w=i.fingerprint||"";i.state==="blocked"&&l.push(ServerI18n.t("audienceRuleBlocked")),i.state==="flagged"&&l.push(ServerI18n.t("audienceRuleFlagged")),m>=25?l.push(ServerI18n.t("audienceRuleMsgOver",{n:m})):m>=15&&l.push(ServerI18n.t("audienceRuleMsgNear",{n:m}));let k=A.records.filter(function(K){return K.ip&&i.ip&&K.ip===i.ip}).length;k>=3&&l.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(w.indexOf("slido")===0||w.indexOf("ext_")===0)&&l.push(ServerI18n.t("audienceRuleBridge")),(i.nickname==="\u533F\u540D"||!i.nickname)&&l.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",D="var(--hud-lime)",R="NORMAL";return i.state==="blocked"?(_="blocked",D="var(--hud-crimson)",R="BLOCKED"):i.state==="flagged"||m>=25?(_="high",D="var(--hud-crimson)",R="HIGH RISK"):(m>=15||k>=3)&&(_="mid",D="var(--hud-amber)",R="MID"),{level:_,color:D,label:R,rules:l}}async function y(i){A.detailLoading=!0;try{let l=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!l.ok){A.detailMessages=[];return}let m=await l.json(),w=Array.isArray(m.records)?m.records:[],k=Date.now()-300*1e3;A.detailMessages=w.filter(function(_){return(_.fingerprint||"")!==i?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=k}).slice(0,8)}catch{A.detailMessages=[]}finally{A.detailLoading=!1}}function p(){let i=document.querySelector("[data-aud-detail]");if(!i)return;let l=A.selectedFp;if(!l){i.hidden=!0,i.innerHTML="";return}let m=H(l);if(!m){A.selectedFp=null,i.hidden=!0;return}i.hidden=!1;let w=I(m);i.dataset.riskLevel=w.level;let k=j(l),_=!m.nickname||m.nickname==="\u533F\u540D",D=_?ServerI18n.t("audienceAnonymous"):m.nickname,R=_?"?":D.slice(0,1),K="fp:"+(l||"").slice(0,8),E=w.rules.length?w.rules.map(function(U){return"<li>"+T(U)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",O="";A.detailLoading?O='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":A.detailMessages.length===0?O='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":O=A.detailMessages.map(function(U){let J=U.muted?"MASKED":U.banned?"BLOCKED":"SHOWN",te=U.muted?"var(--hud-amber)":U.banned?"var(--hud-crimson)":"var(--hud-lime)",Z=U.timestamp?new Date(U.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+T(Z)+'</span><span class="m">'+T(U.text||"")+'</span><span class="s" style="color:'+te+'">'+J+"</span></div>"}).join(""),i.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+x(w.level)+'">'+T(w.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+T(R)+'</span><div><div class="nick">'+T(D)+'</div><div class="fp">'+T(K)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+w.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:w.rules.length})+"</div><ul>"+E+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+O+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+T(l)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+T(l)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(m.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+T(l)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+T(l)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+T(l)+'" data-aud-flagged="'+(m.is_flagged?"true":"false")+'">'+(m.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+T(l)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function d(i){A.selectedFp=i,A.detailMessages=[],p(),y(i).then(p)}async function s(){try{let i=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!i.ok)return;let l=await i.json();A.records=Array.isArray(l.entries)?l.entries:[],A.serverStats=l&&l.stats||null,M(),C(),F(),A.selectedFp&&p()}catch{}}async function n(i,l,m){if(i)try{let w=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,flagged:!!l,note:m||""})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(l?ServerI18n.t("audienceToastFlagged",{fp:i.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:i.slice(0,8)}),!0),s()}catch(w){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:w.message||""}),!1)}}async function o(i,l){if(!i||i==="\u2014")return;let m=l??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:i.slice(0,8)}),"")||"");if(m!==null)try{let w=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,reason:m})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:i.slice(0,8)}),!0),s()}catch(w){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:w.message||""}),!1)}}async function r(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+T(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let m=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i})});if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),s()}catch(m){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:m.message||""}),!1)}}async function c(i){if(!(!i||i==="\u2014"))try{let l=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:i,action:"mask",priority:0,enabled:!0})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:i.slice(0,8)}),!0),s()}catch(l){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:l.message||""}),!1)}}async function a(i){if(!(!i||i==="\u2014"))try{let l=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!l.ok)throw new Error("HTTP "+l.status);let m=await l.json(),k=(Array.isArray(m.rules)?m.rules:[]).filter(function(D){return D&&D.type==="fingerprint"&&D.pattern===i});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let D of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D.rule_id||D.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:i.slice(0,8)}),!0),s()}catch(l){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:l.message||""}),!1)}}async function t(i){if(!(!i||i==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+T(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let m=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:i})});if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:i.slice(0,8)}),!0),s()}catch(m){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:m.message||""}),!1)}}function v(){let i=document.getElementById(b);i&&(i.addEventListener("input",function(l){let m=l.target.closest("[data-aud-search]");m&&(A.search=m.value||"",A.shown=f,F())}),i.addEventListener("change",function(l){let m=l.target.closest("[data-aud-sort]");m&&(A.sort=m.value,F())}),i.addEventListener("click",function(l){let m=l.target.closest("[data-aud-filter]");if(m){A.filter=m.dataset.audFilter,A.shown=f,C(),F();return}let w=l.target.closest("[data-aud-action='ban']");if(w){l.stopPropagation(),t(w.dataset.audFp);return}if(l.target.closest("[data-aud-action='refresh']")){s();return}if(l.target.closest("[data-aud-action='more']")){A.shown+=f,F();return}if(l.target.closest("[data-aud-action='close-detail']")){A.selectedFp=null,p();return}let R=l.target.closest("[data-aud-action='detail-ban']");if(R){t(R.dataset.audFp);return}let K=l.target.closest("[data-aud-action='detail-mask']");if(K){c(K.dataset.audFp);return}let E=l.target.closest("[data-aud-action='detail-safe']");if(E){a(E.dataset.audFp);return}let O=l.target.closest("[data-aud-action='flag']");if(O){l.stopPropagation(),n(O.dataset.audFp,O.dataset.audFlagged!=="true");return}let U=l.target.closest("[data-aud-action='kick']");if(U){l.stopPropagation(),o(U.dataset.audFp);return}let J=l.target.closest("[data-aud-action='unkick']");if(J){l.stopPropagation(),r(J.dataset.audFp);return}let te=l.target.closest("[data-aud-row]");if(!(te&&te.dataset.audFp===S)&&te&&!l.target.closest("button")){d(te.dataset.audFp);return}}))}function h(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(s(),A.refreshTimer||(A.refreshTimer=setInterval(s,15e3))):A.refreshTimer&&(clearInterval(A.refreshTimer),A.refreshTimer=0)}function e(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",u()),v(),s(),h(),window.addEventListener("hashchange",h))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&e()})})()});var Qt=ve(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],T={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,f=0,A=0,j=null;function B(){if(j)return j;let C=document.createElement("div");return C.className="admin-konami-hud",C.setAttribute("aria-hidden","true"),C.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(C),j=C,C}function x(){if(f===0){j&&j.classList.remove("is-on");return}let C=B();C.classList.add("is-on");let S=C.querySelector(".admin-konami-hud-keys");S&&(S.innerHTML=b.map((L,$)=>`<span class="admin-konami-hud-key ${$<f?"is-filled":""}">${T[L]}</span>`).join(""));let P=C.querySelector(".admin-konami-hud-progress");if(P){let L=Math.round(f/b.length*100);P.style.width=L+"%"}}function u(C){f=0,A&&(clearTimeout(A),A=0),C||x()}function N(){A&&clearTimeout(A),A=setTimeout(()=>u(),g)}async function M(){try{let C=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(C){console.warn("[konami] trigger failed:",C&&C.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",C=>{let S=C.target;if(S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable))return;let P=b[f];if(!(C.key===P||P==="b"&&C.key.toLowerCase()==="b"||P==="a"&&C.key.toLowerCase()==="a")){f=C.key===b[0]?1:0,x(),f>0?N():A&&(clearTimeout(A),A=0);return}if(f++,x(),f>=b.length){u(!0),M();return}N()}),window.AdminKonami={trigger:M}})()});var Xt=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function T(c){return c==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:c==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:c==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,a=c?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${c?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${a}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${c?`
            <div class="admin-ui-card admin-fonts-upload-card" id="adminFontDropWrap" style="margin-top:12px">
              <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("fontsUploadCustomLabel")}</div>
              <div
                id="adminFontDrop"
                class="admin-fonts-drop"
                role="button"
                tabindex="0"
                aria-label="${b(ServerI18n.t("uploadFont"))}"
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
    `}var f=null,A=[];function j(c,a){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((c||[]).some(e=>e.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var h=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:a?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});h.dataset.emptyKind="fonts",t.appendChild(h)}function B(c,a){let t=c.weight||"\u2014",v=c.sizeLabel||"\u2014",h=c.foundry||(c.type==="system"?"System":c.type==="default"?"Google / Noto":"Uploaded"),e=c.format||"\u2014",i=c.status||c.type,l=`font-family: "${b(c.name)}", sans-serif;`,m=T(i),w=[];if(a){if(i!=="default"&&w.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(c.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),i!=="default"){let k=i==="enabled"||i==="system",_=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");w.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(c.name)}" data-enabled="${k?"true":"false"}">${_}</button>`)}c.type==="uploaded"&&(w.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(c.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),w.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(c.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(c.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${l}" class="truncate">${b(c.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(w.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${w.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(h)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(v)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(e)}</span><div style="text-align:right">${m}</div></div>`}let x=null,u={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if(x)return x;try{let c=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return c.ok?(x=(await c.json()).presets||{},x):{}}catch{return{}}}function M(c){return!c||!Number.isFinite(c)?"\u2014":c<1024?c+" B":c<1024*1024?(c/1024).toFixed(1)+" KB":(c/(1024*1024)).toFixed(2)+" MB"}async function C(c){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let a=await N();if(!Object.keys(a).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),v="",h=document.createElement("div");h.className="admin-font-subset-modal-body";let e=()=>{let m=Object.keys(a).map(k=>{let _=u[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},D=_.labelKey?ServerI18n.t(_.labelKey):_.label,R=t.has(k);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(D)}</span>
            <span class="admin-font-subset-chip-range">${b(a[k])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");h.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(c)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${m}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(v)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,h.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",_=>{_.preventDefault();let D=k.dataset.subsetPreset;t.has(D)?t.delete(D):t.add(D),e()})});let w=h.querySelector("[data-subset-custom]");w&&w.addEventListener("input",()=>{v=w.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:h,width:540}))return;let l=[];if(t.forEach(m=>{a[m]&&l.push(a[m])}),v.trim()&&l.push(v.trim()),!l.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await S(c,l.join(","))}async function S(c,a){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:c}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(c)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:a})}),v=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(v.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let h=v.saved_bytes||0,e=Math.round((v.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:c,before:M(v.original_size),after:M(v.new_size),pct:e}),!0),$()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(c){try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:c})});if(!a.ok)throw new Error("HTTP "+a.status);f=c,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:c}),!0),$()}catch(a){console.error("[admin-fonts] set default failed:",a),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function L(c,a){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(c)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!a})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(a?"fontsToggleOffToast":"fontsToggleOnToast",{name:c}),!0),$()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function $(){var c=document.getElementById("adminFontList");if(!c)return;let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var v=await t.json(),h=v.fonts||[];if(A=h,window.AdminTabs?.setTabCount?.("assets","fonts",h.length||""),j(h,a),h.length===0){c.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,p(h);return}c.innerHTML=h.map(e=>B(e,a)).join(""),p(h),d()}catch(e){console.error("[admin-fonts] fetch failed:",e),c.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,j([],a)}}async function F(c){try{let a=await c.slice(0,4).arrayBuffer(),t=new Uint8Array(a);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function H(c,a){let t=document.getElementById("adminFontDropStatus");if(t){if(!c){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=c,t.classList.toggle("is-good",a==="good"),t.classList.toggle("is-bad",a==="bad")}}function I(c){let a=document.getElementById("adminFontUploadError");if(!a)return;if(!c){a.hidden=!0,a.innerHTML="";return}a.hidden=!1,a.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(c)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=a.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let v=document.getElementById("adminFontFileInput");v&&v.click()})}async function y(c){if(!c)return;I("");let a=c.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(a)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),I(ServerI18n.t("fontsExtNotSupportedFull"));return}if(c.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),I(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await F(c);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),I(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:t,size:(c.size/1024).toFixed(1)}),"good");try{var v=new FormData;v.append("fontfile",c);var h=await window.csrfFetch("/admin/upload_font",{method:"POST",body:v}),e=await h.json();h.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:c.name}),"good"),I(""),await $()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),H(e.error||ServerI18n.t("uploadFailed"),"bad"),I(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(i){console.error("[admin-fonts] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),I(ServerI18n.t("fontsNetworkDisconnected"))}}function p(c){let a=document.getElementById("fontsTotalSize");a&&(a.textContent=ServerI18n.t("fontsTotalCount",{n:c.length}))}function d(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(c=>{c.addEventListener("click",a=>{if(a.target.closest(".admin-font-delete-btn"))return;let t=c.dataset.font,v=document.getElementById("fontsPreviewFamily"),h=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),i=document.getElementById("fontsPreviewCJK");v&&(v.textContent=t);let l=`"${t}", sans-serif`;h&&(h.style.fontFamily=l),e&&(e.style.fontFamily=l),i&&(i.style.fontFamily=l)})})}async function s(){var c=document.getElementById("adminFontFileInput");if(c){var a=c.files&&c.files[0];if(!a){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await y(a),c.value=""}}function n(){let c=document.getElementById("adminFontDrop"),a=document.getElementById("adminFontFileInput");!c||!a||(c.addEventListener("click",t=>{t.target!==a&&a.click()}),c.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),a.click())}),["dragenter","dragover"].forEach(t=>{c.addEventListener(t,v=>{v.preventDefault(),v.stopPropagation(),c.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{c.addEventListener(t,v=>{v.preventDefault(),v.stopPropagation(),c.classList.remove("is-drag")})}),c.addEventListener("drop",async t=>{let v=t.dataTransfer&&t.dataTransfer.files;v&&v[0]&&await y(v[0])}))}async function o(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(c),{method:"DELETE"}),v=await t.json();t.ok?(window.showToast(v.message||ServerI18n.t("fontDeleteFallback")),await $()):window.showToast(v.error||ServerI18n.t("deleteFailed"),!1)}catch(h){console.error("[admin-fonts] delete error:",h),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function r(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",g());var a=document.getElementById("adminFontFileInput");a&&a.addEventListener("change",s),n();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(v){var h=v.target.closest(".admin-font-delete-btn");if(h){v.stopPropagation(),o(h.dataset.name);return}var e=v.target.closest(".admin-font-default-btn");if(e){v.stopPropagation(),P(e.dataset.name);return}var i=v.target.closest(".admin-font-toggle-btn");if(i){v.stopPropagation();let m=i.dataset.enabled==="true";L(i.dataset.name,m);return}var l=v.target.closest(".admin-font-subset-btn");l&&(v.stopPropagation(),C(l.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(v=>v.ok?v.json():null).then(v=>{v&&Array.isArray(v.FontFamily)&&(f=v.FontFamily[3]||null)}).catch(()=>{}).finally($)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&r()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&r()}})})()});var Zt=ve(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let T="sec-scheduler",g=5e3,f=null,A=null;function j(r,c,a,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${r}">
        <input type="text" placeholder="${u(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${u(c)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${u(a||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function B(r){var c=r==="active"?"is-success":r==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+c+'" title="'+u(r)+'"></span>'}function x(r){let c=r.state==="paused",a=r.repeat_count===void 0?"\u2014":r.repeat_count===-1?"\u221E":String(r.repeat_count),t=r.repeat_count>0&&typeof r.remaining=="number"?String(r.repeat_count-r.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${u(r.id)}">
        ${B(r.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(r.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${r.messages?r.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${r.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(t)}</span>
        <span class="admin-scheduler-job-val">${b(a)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${c?"is-active":"is-warn"}"
            data-job-id="${u(r.id)}" data-action="${c?"resume":"pause"}">
            ${b(ServerI18n.t(c?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${u(r.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function u(r){return b(r)}function N(){let r=document.querySelectorAll("#schedulerMessages [data-msg-index]"),c=[];return r.forEach(function(a){let t=a.querySelector(".scheduler-msg-text").value.trim(),v=a.querySelector(".scheduler-msg-color").value,h=parseInt(a.querySelector(".scheduler-msg-size").value,10)||48;t&&c.push({text:t,color:v,size:h})}),c}function M(r,c,a){let t=document.getElementById("schedulerMessages");if(!t)return;let v=t.children.length;t.insertAdjacentHTML("beforeend",j(v,r||"",c||"#ffffff",a||48))}function C(r){let c=r.closest("[data-msg-index]");c&&c.remove();let a=document.getElementById("schedulerMessages");a&&a.querySelectorAll("[data-msg-index]").forEach(function(t,v){t.dataset.msgIndex=v})}async function S(){let r=N();if(r.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let c=parseInt(document.getElementById("schedulerInterval").value,10);if(!c||c<1||c>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let a=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(a)||a<-1||a>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let v=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:r,interval_sec:c,repeat_count:a})}),h=await v.json();v.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await p()):showToast(h.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(v){console.error("Scheduler create error:",v),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function P(r){return"msg"}function L(r){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[r]||"\u25C8"}function $(r){return r.next_run_at?new Date(r.next_run_at*1e3).getHours():new Date().getHours()}function F(r){if(r.next_run_at){let c=new Date(r.next_run_at*1e3);return String(c.getHours()).padStart(2,"0")+":"+String(c.getMinutes()).padStart(2,"0")}return"--:--"}function H(r){let c=r.id||"job",a=Array.isArray(r.messages)?r.messages.length:null;return"Job #"+c+(a!=null?" \xB7 "+a+" messages":"")}function I(r){let c=document.querySelector("[data-sch-timeline]");if(!c)return;let a=[],t=new Date().getHours();for(let h=0;h<24;h++){let e=h>=Math.max(0,t-1)&&h<=Math.min(23,t+2);a.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(h).padStart(2,"0")+"</div>")}let v=(r||[]).map(function(h){let e=P(h),i=L(e),l=h.state!=="paused";return'<div class="admin-sch-timeline-row'+(l?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(F(h))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+i+'</span><span class="admin-sch-evt-desc">'+b(H(h))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(l?" is-on":"")+'">'+ServerI18n.t(l?"uiOn":"uiOff")+"</span></div></div>"}).join("");c.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+a.join("")+"</div></div>"+(v||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function y(r){let c=document.querySelector("[data-sch-calendar]");if(!c)return;let a=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,v=(t.getDay()+6)%7,h=new Date(t);h.setDate(t.getDate()-v);let e=a.map(function(l,m){let w=new Date(h);return w.setDate(h.getDate()+m),'<div class="admin-sch-calendar-day-head'+(m===v?" is-today":"")+'">'+b(l)+'<span class="date">'+w.getDate()+"</span></div>"}).join(""),i=[0,1,2,3,4,5,6].map(function(l){return'<div class="admin-sch-calendar-cell">'+(l===v?(r||[]).slice(0,5).map(function(w){let k=P(w),_=L(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+b(F(w))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");c.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+i+"</div>"}async function p(){let r=document.getElementById("schedulerJobsList"),c=document.getElementById("schedulerJobsCount");if(r)try{let a=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!a.ok){r.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",c&&(c.textContent="\u2014");return}let t=await a.json();if(!Array.isArray(t.jobs)){r.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",c&&(c.textContent="\u2014");return}c&&(c.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),I(t.jobs),y(t.jobs);let v=document.querySelector("[data-sch-meta]");if(v){let h=new Date().toISOString().slice(0,10);v.textContent=ServerI18n.t("schTodayMeta",{date:h,n:t.jobs.length})}if(t.jobs.length===0){r.innerHTML="";let h=window.AdminEmpty.render("scheduler");h.dataset.emptyKind="scheduler",r.appendChild(h);return}r.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(x).join("")}catch(a){console.error("Scheduler fetch error:",a),r.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function d(r,c){try{let a=await csrfFetch("/admin/scheduler/"+encodeURIComponent(c),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:r})}),t=await a.json();a.ok?(showToast(c==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await p()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(a){console.error("Scheduler toggle error:",a),showToast(ServerI18n.t("actionFailed"),!1)}}async function s(r){try{let c=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:r})}),a=await c.json();c.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await p()):showToast(a.error||ServerI18n.t("cancelFailed"),!1)}catch(c){console.error("Scheduler cancel error:",c),showToast(ServerI18n.t("cancelFailed"),!1)}}function n(){let r=document.getElementById("settings-grid");if(!r)return;r.insertAdjacentHTML("beforeend",`
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
              <button type="button" id="schedulerAddMsg" class="admin-ui-action admin-sch-add-msg">+ ${b(ServerI18n.t("addMessageBtn"))}</button>
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
                <button type="button" id="schedulerCreateBtn" class="admin-ui-action is-primary admin-sch-create-btn">${b(ServerI18n.t("createBtn"))}</button>
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
            ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):b(ServerI18n.t("loadingJobs"))}
          </div>
        </div>
        </div>
      </details>
    `);let c=document.querySelectorAll("[data-sch-view]");c.forEach(e=>{e.addEventListener("click",()=>{let i=e.dataset.schView;c.forEach(w=>{w.classList.toggle("is-active",w===e),w.setAttribute("aria-selected",w===e?"true":"false")});let l=document.querySelector("[data-sch-timeline]"),m=document.querySelector("[data-sch-calendar]");l&&(l.hidden=i!=="timeline"),m&&(m.hidden=i!=="calendar")})}),M("","#ffffff",48);let a=document.getElementById("schedulerMessages");a&&a.addEventListener("click",function(e){let i=e.target.closest(".scheduler-remove-msg");i&&C(i)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){M("","#ffffff",48)});let v=document.getElementById("schedulerCreateBtn");v&&v.addEventListener("click",S);let h=document.getElementById("schedulerJobsList");h&&h.addEventListener("click",function(e){let i=e.target.closest(".scheduler-job-toggle");if(i){d(i.dataset.jobId,i.dataset.action);return}let l=e.target.closest(".scheduler-job-cancel");l&&s(l.dataset.jobId)}),f&&(clearInterval(f),f=null),A||(A=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(T)},intervalMs:g,tick:p}),window.addEventListener("beforeunload",function(){A&&(A(),A=null)}))}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let r=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(T)&&!r){r=!0;try{n()}finally{r=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(T)&&n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var en=ve(()=>{(function(){"use strict";let b="admin-security-v2-page";var T=window.AdminUtils.escapeHtml;let g=null,f=!1,A=!1,j=0;function B(){let e=i=>ServerI18n.t(i);return`
        <div id="${b}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${e("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${e("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${e("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2PwRowLabel")}
              <span class="sub">${e("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${e("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${e("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${e("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${e("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${e("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${e("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${e("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${e("security2CardWsTokenTitle")}" placeholder="${e("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${e("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${e("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${e("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${e("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${e("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${e("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${e("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${e("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${e("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${e("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${e("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${e("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${e("security2WsAuthMigrationPrepare")}</li>
            <li>${e("security2WsAuthMigrationDesktop")}</li>
            <li>${e("security2WsAuthMigrationEnable")}</li>
            <li>${e("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${e("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${e("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${e("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${e("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${e("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${e("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${e("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${e("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2StatusLabel")}
              <span class="sub">${e("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${e("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2RevokeApiTokensTitle")}
              <span class="sub">${e("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${e("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2RevokeFireTokenTitle")}
              <span class="sub">${e("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${e("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${e("security2ResetWsTokenTitle")}
              <span class="sub">${e("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${e("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function x(e){if(!e)return 0;let i=0;e.length>=8&&i++,e.length>=12&&i++;let l=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return l>=2&&i++,l>=3&&i++,Math.min(4,i)}function u(e){let i=document.getElementById("sec2-pw-meter"),l=document.getElementById("sec2-pw-label");if(!i||!l)return;let m=x(e),w=[0,25,50,75,100],k=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];i.style.width=w[m]+"%",i.className=k[m],l.textContent=_[m]}async function N(e){e.preventDefault();let i=document.getElementById("sec2-pw-current").value,l=document.getElementById("sec2-pw-new").value,m=document.getElementById("sec2-pw-confirm").value;if(!i||!l||!m){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(l.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(l!==m){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let w=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:i,new_password:l,confirm_password:m})}),k=await w.json().catch(()=>({}));w.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),u(""),k.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(k.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(w){console.error("Password change error:",w),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function M(){let e=++j,i=document.getElementById("sec2-wsa-status");A=!0,C(!0),i.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let l=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!l.ok)throw new Error(l.status);let m=await l.json();if(e!==j)return!1;g={require_token:!!m.require_token,token:m.token||""},document.getElementById("sec2-wsa-toggle").checked=!!m.require_token,document.getElementById("sec2-wsa-token").value=m.token||"",i.textContent=m.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(m.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,L();let w=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=w?new Date(parseInt(w,10)).toLocaleString():"\u2014",!0}catch{return e!==j||(g=null,C(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===j&&(A=!1,C(f||!g),f||L())}}function C(e){["toggle","token","save","rotate","copy","reveal"].forEach(i=>{document.getElementById("sec2-wsa-"+i).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function S(){return f||A||!g?!1:(f=!0,++j,C(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,C(A||!g),g&&!A){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),L()}}function L(){if(f||A||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function $(e){return String(e||"").split(/\n+/).map(i=>i.trim()).filter(Boolean)}function F(e){return String(e||"").split(",").map(i=>i.trim().toUpperCase()).filter(Boolean)}function H(e,i){let l=document.getElementById(e);l&&(l.textContent=i==null||i===""?"\u2014":String(i))}async function I(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),i=await e.json().catch(()=>({}));if(!e.ok)throw new Error(i.error||e.status);let l=i.ip_allowlist||{},m=i.cors||{},w=i.tls||{},k=!!l.enabled,_=Array.isArray(l.entries)?l.entries:[],D=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),K=document.getElementById("sec2-ip-toggle"),E=document.getElementById("sec2-ip-entries");D&&(D.classList.toggle("is-lime",k),D.classList.toggle("is-amber",!k)),R&&(R.textContent=k?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(k?"is-active":"is-warn")),K&&(K.checked=k),E&&(E.value=_.join(`
`)),H("sec2-ip-current",l.current_ip||"\u2014"),H("sec2-ip-status-line",k?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let O=Array.isArray(m.origins)?m.origins:["*"],U=Array.isArray(m.methods)?m.methods:[],J=document.getElementById("sec2-cors-origins"),te=document.getElementById("sec2-cors-credentials"),Z=document.getElementById("sec2-cors-methods"),z=document.getElementById("sec2-cors-cred-dot");J&&(J.value=O.join(`
`)),te&&(te.checked=!!m.supports_credentials),Z&&(Z.value=U.join(", ")),z&&(z.classList.toggle("is-lime",!m.supports_credentials),z.classList.toggle("is-amber",!!m.supports_credentials)),H("sec2-cors-origins-line",O.join(", ")),H("sec2-cors-credentials-line",m.supports_credentials?"true":"false"),H("sec2-cors-methods-line",U.join(", "));let Q=w.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:w.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",Q)}catch(e){console.error("Security settings load error:",e);let i=document.getElementById("sec2-ip-status-chip");i&&(i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function y(e){let i={};if(e==="ip")i.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:$(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let l=$(document.getElementById("sec2-cors-origins")?.value||"");i.cors={origins:l.length?l:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:F(document.getElementById("sec2-cors-methods")?.value||"")}}try{let l=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),m=await l.json().catch(()=>({}));if(!l.ok){window.showToast&&showToast(m.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await I()}catch(l){console.error("Security settings save error:",l),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function p(){if(f||A||!g)return;let e=document.getElementById("sec2-wsa-toggle").checked,i=document.getElementById("sec2-wsa-token").value.trim();if(e&&!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(S())try{let l=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:i})}),m=await l.json().catch(()=>({}));l.ok?await M()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(m.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function d(){if(!(f||A||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&S())try{let i=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),l=await i.json().catch(()=>({}));if(i.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await M()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(l.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function s(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function n(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let i=e.type==="text",l=document.getElementById("sec2-wsa-reveal");l.setAttribute("aria-pressed",String(i)),l.textContent=ServerI18n.t(i?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),l.setAttribute("aria-label",l.textContent)}async function o(e){if(e==="reset-ws"&&(f||A||!g))return;let i={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:m=>ServerI18n.t("security2ToastApiTokensRevoked",{n:m.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!i||!await window.HudConfirm?.open({icon:"\u26A0",title:i.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:i.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:i.severity||"warn",body:i.confirm,confirmLabel:i.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!S()))try{let m=await window.csrfFetch(i.url,{method:"POST"}),w=await m.json().catch(()=>({}));if(!m.ok){window.showToast&&showToast(w.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await M())return}window.showToast&&showToast(i.ok(w),!0)}catch(m){console.error("Security danger action error:",m),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&P()}}function r(){let e=document.getElementById("sec2-session-self-line");if(e){let m=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),w=navigator.platform||navigator.userAgentData?.platform||"",k=m?m[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:k,platform:w})}let i=document.getElementById("sec2-tls-dot"),l=document.getElementById("sec2-tls-status");if(i&&l){let m=location.protocol==="https:";i.classList.add(m?"is-lime":"is-crimson"),l.textContent=m?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function c(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",N);let i=document.getElementById("sec2-pw-new");i&&i.addEventListener("input",l=>u(l.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",p),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",d),document.getElementById("sec2-wsa-copy")?.addEventListener("click",s),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",n),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",L),document.getElementById("sec2-wsa-token")?.addEventListener("input",L),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>y("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>y("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(l=>{l.addEventListener("click",()=>{let m=document.querySelector(`[data-sec-disclosure="${l.dataset.secDisclose}"]`);m&&(m.hidden=!m.hidden,l.setAttribute("aria-expanded",m.hidden?"false":"true"),m.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(l=>{l.dataset.secBound!=="1"&&(l.dataset.secBound="1",l.addEventListener("click",()=>o(l.dataset.secDanger)))}),r(),M(),I()}function a(){}function t(){let e=document.querySelector(".admin-dash-grid"),i=document.getElementById(b);if(!e||!i)return;let l=e.dataset.activeRoute||"live",m=e.dataset.activeLeaf||l;i.style.display=l==="system"&&m==="security"?"":"none"}function v(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",B()),c(),t())}function h(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function i(){let m=document.querySelector(".admin-dash-grid");!m||e||(e=new MutationObserver(t),e.observe(m,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?v():void 0,i(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{v(),i(),t()}),i(),v()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var tn=ve(()=>{(function(){"use strict";let b="admin-backup-v2-page";var T=window.AdminUtils.escapeHtml;function g(){let a=t=>ServerI18n.t(t);return`
      <div id="${b}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${a("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${a("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${a("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${a("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${a("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${a("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${a("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecSettingsSnap")}
              <span class="sub">${a("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${a("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${a("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${a("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${a("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${a("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecRestoreSettings")}
              <span class="sub">${a("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${a("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${a("backupApplyDisabledTitle")}">${a("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecRestoreFull")}
              <span class="sub">${a("backupFullPackRestoreNote")}</span>
              <span class="sub">${a("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${a("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${a("backupApplyDisabledTitle")}">${a("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecRestoreAssets")}
              <span class="sub">${a("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${a("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${a("backupApplyDisabledTitle")}">${a("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${a("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecClearHistory")}
              <span class="sub">${a("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${a("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${a("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${a("backupSecFactoryReset")}
              <span class="sub">${a("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${a("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function f(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let t=await a.json(),v=["password","token","secret","hash"],h={};Object.keys(t||{}).forEach(w=>{v.some(k=>w.toLowerCase().includes(k))||(h[w]=t[w])});let e=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:h},null,2)],{type:"application/json"}),i=URL.createObjectURL(e),l=new Date().toISOString().replace(/[:.]/g,"-"),m=document.createElement("a");m.href=i,m.download="danmu-settings-"+l+".json",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(a){console.error("Settings snapshot error:",a),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let A=null;function j(){A=null;let a=document.getElementById("bk2-settings-apply");a&&(a.disabled=!0,a.title=ServerI18n.t("backupApplyDisabledTitle"))}async function B(){let a=document.getElementById("bk2-settings-upload"),t=document.getElementById("bk2-settings-diff"),v=document.getElementById("bk2-settings-apply"),h=a&&a.files&&a.files[0];if(!h){j(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let e=await h.text(),i=JSON.parse(e),l=i.settings||i;if(!l||typeof l!="object"||Array.isArray(l))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let m=await fetch("/get_settings",{credentials:"same-origin"}),w=m.ok?await m.json():{},k=[];new Set([...Object.keys(w),...Object.keys(l)]).forEach(D=>{let R=JSON.stringify(w[D]),K=JSON.stringify(l[D]);R!==K&&(R===void 0?k.push("+ "+D+": "+K):K===void 0?k.push("- "+D+": "+R):k.push("~ "+D+": "+R+" \u2192 "+K))}),t.textContent=k.length?k.join(`
`):ServerI18n.t("backupNoDiff"),t.hidden=!1,A=l,v&&(v.disabled=!1,v.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:k.length}),!0)}catch(e){console.error("Dry-run error:",e),j(),t.textContent=ServerI18n.t("backupParseFailedDetail",{msg:e&&e.message?e.message:String(e)}),t.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function x(){let a=document.getElementById("bk2-settings-diff"),t=document.getElementById("bk2-settings-apply");if(!A){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let h=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:A})}),e=await h.json().catch(()=>({}));if(!h.ok){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(e.details||e,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(e.applied||[]).length+" settings"),A=null,t&&(t.disabled=!0,t.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(h){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:h&&h.message?h.message:String(h)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function u(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let a=document.getElementById("bk2-factory-confirm"),t=document.getElementById("bk2-factory-reset");!a||!t||(a.addEventListener("input",()=>{let v=a.value.trim()==="reset";t.classList.toggle("is-ready",v),t.disabled=!v}),t.addEventListener("click",M))}async function M(){let a=document.getElementById("bk2-factory-confirm"),t=document.getElementById("bk2-factory-reset");if((a?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{t&&(t.disabled=!0);let h=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),e=await h.json().catch(()=>({}));if(!h.ok||!e.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),t&&(t.disabled=!1);return}a&&(a.value=""),t&&(t.classList.remove("is-ready"),t.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),L()}catch{t&&(t.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function C(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",B),document.getElementById("bk2-settings-apply")?.addEventListener("click",x),document.getElementById("bk2-clear-history")?.addEventListener("click",u),document.getElementById("bk2-pack-export")?.addEventListener("click",$),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",p),document.getElementById("bk2-pack-apply")?.addEventListener("click",d),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",s),document.getElementById("bk2-assets-apply")?.addEventListener("click",n),N(),L(),F()}let S=null,P=null;async function L(){let a=document.getElementById("bk2-pack-summary");if(a)try{let t=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!t.ok){a.textContent=ServerI18n.t("backupPreviewUnavailable");return}let v=await t.json(),h=(v.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:v.file_count||0,mb:h})}catch{a.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function $(){let a=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(a?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function F(){let a=document.getElementById("bk2-assets-summary");if(a)try{let t=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!t.ok){a.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let v=await t.json(),h=(v.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:v.file_count||0,mb:h})}catch{a.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let I={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials"};function y(a){return(a||[]).map(t=>{let v=t&&I[t.code];return"  "+t.path+" \u2014 "+(v?ServerI18n.t(v):t.reason)})}async function p(){let t=document.getElementById("bk2-pack-upload")?.files?.[0];if(!t){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(t.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let v=new FormData;v.append("file",t);let h=document.getElementById("bk2-pack-diff"),e=document.getElementById("bk2-pack-apply");try{let i=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:v}),l=await i.json().catch(()=>({}));if(!i.ok||!l.ok){h&&(h.hidden=!1,h.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(l.errors||l,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),e&&(e.disabled=!0),S=null;return}if(h){h.hidden=!1;let m=[],w=l.manifest||{};m.push("manifest version: "+(w.version||"?")),m.push("generated_at: "+(w.generated_at?new Date(w.generated_at*1e3).toISOString():"\u2014")),l.credentials==="omitted"&&m.push(ServerI18n.t("backupCredentialsKept")),m.push(""),m.push("Will write "+(l.members?.length||0)+" files:"),(l.members||[]).forEach(k=>{m.push("  "+k.label+"/"+k.path.split("/").slice(1).join("/")+" ("+(k.size||0)+" B)")}),l.skipped?.length&&(m.push(""),m.push("Skipped "+l.skipped.length+" entries:"),m.push(...y(l.skipped))),h.textContent=m.join(`
`)}S=t,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:l.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:i.message||""}),!1)}}async function d(){if(!S){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let t=new FormData;t.append("file",S);try{let h=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:t})).json().catch(()=>({})),e=document.getElementById("bk2-pack-diff");if(e){e.hidden=!1;let i=[];h.ok?(i.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),i.push(""),i.push("Applied "+(h.applied||0)+" files"),h.skipped?.length&&(i.push("Skipped "+h.skipped.length+" entries:"),i.push(...y(h.skipped)))):(i.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),i.push(JSON.stringify(h.errors||h,null,2))),e.textContent=i.join(`
`)}if(h.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:h.applied}),!0),S=null;let i=document.getElementById("bk2-pack-apply");i&&(i.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(v){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:v.message||""}),!1)}}async function s(){let t=document.getElementById("bk2-assets-upload")?.files?.[0];if(!t){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(t.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let v=new FormData;v.append("file",t);let h=document.getElementById("bk2-assets-diff"),e=document.getElementById("bk2-assets-apply");try{let i=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:v}),l=await i.json().catch(()=>({}));if(!i.ok||!l.ok){h&&(h.hidden=!1,h.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(l.errors||l,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),e&&(e.disabled=!0),P=null;return}if(h){h.hidden=!1;let m=[],w=l.manifest||{};m.push("manifest version: "+(w.version||"?")),m.push("generated_at: "+(w.generated_at?new Date(w.generated_at*1e3).toISOString():"\u2014")),m.push(""),m.push("Will write "+(l.members?.length||0)+" asset files:"),(l.members||[]).forEach(k=>{m.push("  "+k.path+" ("+(k.size||0)+" B)")}),l.skipped?.length&&(m.push(""),m.push("Skipped "+l.skipped.length+" entries:"),l.skipped.forEach(k=>m.push("  "+k.path+" \u2014 "+k.reason))),h.textContent=m.join(`
`)}P=t,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:l.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:i.message||""}),!1)}}async function n(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let t=new FormData;t.append("file",P);try{let h=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:t})).json().catch(()=>({})),e=document.getElementById("bk2-assets-diff");if(e){e.hidden=!1;let i=[];h.ok?(i.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),i.push(""),i.push("Applied "+(h.applied||0)+" files"),h.skipped?.length&&i.push("Skipped "+h.skipped.length+" (see above)")):(i.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),i.push(JSON.stringify(h.errors||h,null,2))),e.textContent=i.join(`
`)}if(h.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:h.applied}),!0),P=null;let i=document.getElementById("bk2-assets-apply");i&&(i.disabled=!0),F()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(v){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:v.message||""}),!1)}}function o(){let a=document.querySelector(".admin-dash-grid"),t=document.getElementById(b);if(!a||!t)return;let v=a.dataset.activeLeaf||"dashboard";t.style.display=v==="backup"?"":"none"}function r(){let a=document.getElementById("settings-grid");!a||document.getElementById(b)||(a.insertAdjacentHTML("beforeend",g()),C(),o())}function c(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&r(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{r(),o()}),r()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var nn=ve(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",T="/admin/broadcast/status",g="/admin/broadcast/toggle",f={mode:"live"},A=null,j=0,B=!1;async function x(){try{let a=await fetch(T,{credentials:"same-origin"});if(!a.ok)return!1;let t=await a.json();if(t&&(t.mode==="live"||t.mode==="standby"))return A=t.session||null,f=t,!0}catch{}return!1}async function u(){try{let a=await fetch("/overlay_status",{credentials:"same-origin"});a.ok&&(j=(await a.json()).overlay_count||0,B=!0)}catch{}}async function N(){await Promise.all([x(),u()]),M()}function M(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:f.mode==="live",count:B?j:void 0}}))}async function C(a){try{let t=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:a})});if(!t.ok){let v=await t.json().catch(()=>({}));throw new Error(v&&v.error?v.error:`HTTP ${t.status}`)}return f=await t.json(),M(),!0}catch(t){return console.warn("[admin-broadcast] toggle failed:",t),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:t&&t.message||""}),!1),!1}}function S(a,t){return ServerI18n.t(a?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:t})}function P(a){return a?"broadcastBigPause":"broadcastBigResume"}async function L(a){let t=await C(a?"live":"standby");return t&&window.showToast&&window.showToast(ServerI18n.t(a?"broadcastToastResumed":"broadcastToastPaused"),!0),p(),t}async function $(){return await x(),u().then(M),L(f.mode!=="live")}async function F(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let t=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});t.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:t.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:L,toggleDisplay:$,clearScreen:F,statusText:S,toggleKey:P};function H(){let a=t=>ServerI18n.t(t);return`
      <div id="${b}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${P(!1)}">${a(P(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${a("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${a("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let I=0,y=0;function p(){let a=document.getElementById(b);if(!a)return;let t=f.mode==="live",v=t?"live":"standby",h=(_,D)=>{_&&_.textContent!==D&&(_.textContent=D)};a.dataset.bcState=v;let e=a.querySelector("[data-bc-statedot]");e&&(e.dataset.state=v);let i=a.querySelector("[data-bc-statelabel]");i&&(h(i,S(t,j)),i.dataset.state=v);let l=a.querySelector("[data-bc-big]");l&&(l.dataset.i18n=P(t),h(l,ServerI18n.t(l.dataset.i18n)));let m=A||{},w=!!(m.id||m.name),k=a.querySelector("[data-bc-session-ctx]");k&&(k.hidden=!w),w&&h(a.querySelector("[data-bc-session-id]"),String(m.name||m.id))}function d(){let a=document.getElementById(b);a&&(a.querySelector("[data-bc-big]")?.addEventListener("click",()=>L(f.mode!=="live")),a.querySelector("[data-bc-clear]")?.addEventListener("click",F))}function s(){I||(N().then(p),p(),I=setInterval(()=>{N().then(p)},5e3),y=setInterval(p,1e3))}function n(){I&&(clearInterval(I),I=0),y&&(clearInterval(y),y=0)}function o(){let a=document.querySelector(".admin-dash-grid"),t=document.getElementById(b);if(!a||!t)return;let v=a.dataset.activeLeaf||"dashboard",h=v==="overlay"||v==="broadcast";t.style.display=h?"":"none",h?s():n()}function r(){let a=document.getElementById("settings-grid");!a||document.getElementById(b)||(a.insertAdjacentHTML("afterbegin",H()),d(),o())}function c(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&r(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{r(),o()}),r()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var an=ve(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],A=["block","replace","allow","review"],j={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function B(E){var O=b();return O[E]!==void 0?O[E]:!1}function x(E,O){if(typeof ServerI18n<"u"&&ServerI18n.t){let U=ServerI18n.t(E);if(U&&U!==E)return U}return O||E}let u={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},N={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function M(){return`
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${x("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${x("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${x("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${x("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${x("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${x("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${x("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let C="all";function S(E){let O=u[E.type]||"is-default",U=N[E.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},te=ServerI18n.t(J[E.type]||"ulWord"),Z=E.pattern;if(E.type==="replace"&&E.replacement!==void 0&&(Z=`${E.pattern}  \u2192  ${E.replacement}`),E.type==="rate_limit"){let W=E.max_count||5,V=E.window_sec||60;Z=`${E.pattern}  \xB7  ${W}/${V}s`}let z=E.enabled?"":"opacity:0.45;",Q=j[E.action]?ServerI18n.t(j[E.action]):E.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${z}" data-rule-id="${g(E.id)}" data-rule-type="${g(E.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(Z)}</span>
        <span class="hud-pill ${O}">${te}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${U};color:#000;font-weight:700;width:fit-content">${g(Q)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(E.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(E.enabled?x("enabled","Enabled"):x("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(E.id)}" ${E.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${E.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(E.id)}" title="${x("deleteRule","Delete")}" aria-label="${x("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function P(E){let O={all:E.length,keyword:0,regex:0,replace:0,rate_limit:0};E.forEach(J=>{O[J.type]!=null&&O[J.type]++}),Object.keys(O).forEach(J=>{let te=document.querySelector(`[data-filter-count="${J}"]`);te&&(te.textContent=O[J])});let U=document.querySelector('[data-mod-stat="rules"]');U&&(U.textContent=O.all)}async function L(){let E=document.querySelector('[data-mod-stat="blacklist"]');if(E)try{let O=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!O.ok)return;let U=await O.json(),J=Array.isArray(U)?U:U.keywords||[];E.textContent=String(J.length)}catch{}}async function $(){try{let E=await csrfFetch("/admin/filters/list");if(!E.ok)throw new Error("HTTP "+E.status);return(await E.json()).rules||[]}catch(E){return console.error("Failed to fetch filter rules:",E),showToast(x("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function F(){let E=document.getElementById("filterRulesList");if(!E)return;E.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${x("loading","Loading...")}</div>`;let O=await $();if(P(O),L(),O.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),E.innerHTML="",E.appendChild(J)}else E.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${x("noFilterRules","No filter rules configured.")}</div>`;return}let U=C==="all"?O:O.filter(J=>J.type===C);E.innerHTML=U.map(S).join("")}async function H(){let E=document.getElementById("filterType"),O=document.getElementById("filterAction"),U=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),te=document.getElementById("filterPriority"),Z=document.getElementById("filterMaxCount"),z=document.getElementById("filterWindowSec"),Q=E.value,W=(U.value||"").trim();if(!W){showToast(x("patternRequired","Pattern is required"),!1),U.focus();return}let V={type:Q,pattern:W,action:O.value,priority:parseInt(te.value,10)||0};Q==="replace"&&(V.replacement=J.value||""),Q==="rate_limit"&&(V.max_count=parseInt(Z.value,10)||5,V.window_sec=parseFloat(z.value)||60);try{let ee=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)}),ne=await ee.json();if(!ee.ok){showToast(ne.error||x("addRuleFailed","Failed to add rule"),!1);return}showToast(x("ruleAdded","Rule added"),!0),U.value="",J.value="",await F()}catch(ee){console.error("Add filter rule error:",ee),showToast(x("addRuleFailed","Failed to add rule"),!1)}}async function I(E){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:x("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let U=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:E})}),J=await U.json();if(!U.ok){showToast(J.error||x("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(x("ruleDeleted","Rule deleted"),!0),await F()}catch(U){console.error("Delete filter rule error:",U),showToast(x("deleteRuleFailed","Failed to delete rule"),!1)}}async function y(E,O){try{let U=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:E,updates:{enabled:O}})}),J=await U.json();if(!U.ok){showToast(J.error||x("updateRuleFailed","Failed to update rule"),!1),await F();return}}catch(U){console.error("Toggle filter rule error:",U),showToast(x("updateRuleFailed","Failed to update rule"),!1),await F()}}async function p(){let E=document.getElementById("filterTestText"),O=document.getElementById("filterTestResult"),U=document.getElementById("filterType"),J=document.getElementById("filterAction"),te=document.getElementById("filterPattern"),Z=document.getElementById("filterReplacement"),z=document.getElementById("filterMaxCount"),Q=document.getElementById("filterWindowSec"),W=(E.value||"").trim();if(!W){showToast(x("sampleTextRequired","Enter sample text to test"),!1),E.focus();return}let V=(te.value||"").trim();if(!V){showToast(x("patternRequired","Pattern is required"),!1),te.focus();return}let ee=U.value,ne={type:ee,pattern:V,action:J.value};ee==="replace"&&(ne.replacement=Z.value||""),ee==="rate_limit"&&(ne.max_count=parseInt(z.value,10)||5,ne.window_sec=parseFloat(Q.value)||60),O.innerHTML=`<span style="color:var(--color-text-muted)">${x("testing","Testing...")}</span>`;try{let se=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:ne,text:W})}),oe=await se.json();if(!se.ok){O.innerHTML=`<span style="color: var(--color-ink-error)">${g(oe.error||"Test failed")}</span>`;return}let de="";oe.action==="block"?de=`<span style="color: var(--color-ink-error);font-weight:600">${x("blocked","BLOCKED")}</span>`:oe.action==="replace"?de=`<span style="color: var(--color-ink-warning);font-weight:600">${x("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(oe.text)}</span>`:oe.action==="allow"?de=`<span style="color: var(--color-ink-success);font-weight:600">${x("allowed","ALLOWED")}</span>`:oe.action==="review"?de=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:de=`<span style="color:var(--color-text-muted)">${x("noMatch","No match (pass)")}</span>`,oe.reason&&(de+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(oe.reason)}</span>`),O.innerHTML=de}catch(se){console.error("Test filter rule error:",se),O.innerHTML=`<span style="color: var(--color-ink-error)">${x("testError","Test error")}</span>`}}function d(){let E=document.getElementById("filterType"),O=document.getElementById("filterReplacementRow"),U=document.getElementById("filterRateLimitRow");if(!E)return;let J=E.value;O&&(O.style.display=J==="replace"?"":"none"),U&&(U.style.display=J==="rate_limit"?"grid":"none")}function s(){let E=document.getElementById("filterTypeChips");E&&E.addEventListener("click",O=>{let U=O.target.closest(".hud-filter-chip");U&&(C=U.dataset.filterScope||"all",E.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===C)}),F())})}let n=6,o=[],r=!1,c=0,a=0;function t(E){let O=new Date(E*1e3),U=J=>String(J).padStart(2,"0");return`${U(O.getHours())}:${U(O.getMinutes())}:${U(O.getSeconds())}`}function v(E){let O=(E||"").toUpperCase();return O==="BLOCK"?"var(--hud-crimson)":O==="MASK"||O==="REPLACE"?"var(--hud-amber)":O==="REVIEW"?"var(--color-primary)":O==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function h(){let E=document.getElementById("filterLiveLog");if(E){if(o.length===0){E.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}E.innerHTML=o.map(O=>{let U=t(O.ts),J=(O.action||"").toUpperCase(),te=v(J),Z=(O.text_excerpt||"").replace(/[<>&"]/g,V=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[V]),z=(O.pattern||"").replace(/[<>&"]/g,V=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[V]),Q=(O.source||"").slice(0,16),W=Q?`\xB7 ${Q}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${U}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${te}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${Z}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${z} ${W}</span></span>
      </div>`}).join("")}}async function e(){try{let E=await fetch(`/admin/filters/events?since=${a}`,{credentials:"same-origin"});if(!E.ok)return;let O=await E.json();if(O.counts_24h){let U=(J,te)=>{let Z=document.querySelector(`[data-mod-stat="${J}"]`);Z&&(Z.textContent=te!=null?String(te):"\u2014")};U("masked",O.counts_24h.MASK||0),U("blocked",O.counts_24h.BLOCK||0)}if(!Array.isArray(O.events)||O.events.length===0)return;for(o.unshift(...O.events);o.length>n;)o.pop();a=O.latest_seq||a,document.getElementById("filterLiveLog")&&h()}catch{}}function i(){r||(r=!0,e(),c=setInterval(e,4e3))}let l=Object.create(null),m="[QUICK]";function w(E,O){return E.find(U=>(U.name||"").startsWith(m+" "+O))}async function k(){let E=await $().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(O=>{let U=O.dataset.fltLabel,J=w(E,U),te=!!J&&J.enabled!==!1;O.classList.toggle("is-active",te),J?l[O.dataset.fltQuickId]=J.id||J.rule_id:delete l[O.dataset.fltQuickId]})}async function _(E){let O=E.dataset.fltQuickId,U=E.dataset.fltPattern,J=E.dataset.fltAction,te=E.dataset.fltLabel,Z=l[O];if(Z)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:Z})})).ok?(delete l[O],E.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:te}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${m} ${te}`,pattern:U,action:J,enabled:!0,priority:50})});if(z.ok){let Q=await z.json().catch(()=>({}));Q.rule_id&&(l[O]=Q.rule_id),E.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:te}),!0)}else{let Q=await z.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:Q.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function D(){let E=document.querySelector("[data-flt-quick]");E&&(E.addEventListener("click",O=>{let U=O.target.closest(".admin-flt-v4__qchip");U&&_(U)}),k())}function R(){let E=document.getElementById("settings-grid");if(!E)return;E.insertAdjacentHTML("beforeend",M()),s(),D();let O=document.getElementById("filterType");O&&O.addEventListener("change",d);let U=document.getElementById("filterAddBtn");U&&U.addEventListener("click",H);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",p);let te=document.getElementById("filterTestText");te&&te.addEventListener("keydown",Q=>{Q.key==="Enter"&&(Q.preventDefault(),p())});let Z=document.getElementById("filterPattern");Z&&Z.addEventListener("keydown",Q=>{Q.key==="Enter"&&(Q.preventDefault(),H())});let z=document.getElementById("filterRulesList");z&&(z.addEventListener("change",Q=>{let W=Q.target.closest(".filter-toggle-cb");if(!W)return;y(W.dataset.ruleId,W.checked);let V=W.closest(".hud-rule-row"),ee=V?.querySelector(".admin-filter-toggle-dot");ee&&(ee.classList.toggle("is-on",W.checked),ee.classList.toggle("is-off",!W.checked)),V&&(V.style.opacity=W.checked?"":"0.45")}),z.addEventListener("click",Q=>{let W=Q.target.closest(".filter-delete-btn");W&&I(W.dataset.ruleId)})),F(),i(),h()}function K(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&R()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K()})()});var sn=ve(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,T=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,f=1e4,A=null;function j($){var F=b();return F[$]!==void 0?F[$]:!1}function B(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${g(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${g(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${g(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${g(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${g(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function x($){var F=ServerI18n.t("fingerprintState_"+$),H="";return $==="blocked"?H=" is-crimson":$==="flagged"?H=" is-amber":$==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+g(F)+"</span>"}function u($){if(!$)return"\u2014";try{var F=new Date($*1e3);return F.toLocaleTimeString()}catch{return String($)}}function N($){var F=document.getElementById("adminFingerprintTableWrap");if(F){if(!$||$.length===0){F.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",F.appendChild(H);return}var I='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",y=$.map(function(p){var d=p.blocked|0,s=p.hash||"",n=s.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(s)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(s)+'">fp:'+g(n)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(p.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(p.ua||"")+'">'+g(p.ua||"\u2014")+'</span><span class="admin-fp-num">'+(p.msgs|0)+'</span><span class="admin-fp-num">'+(p.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(d>0?"is-crimson":"is-mute")+'">'+d+"</span><span>"+x(p.state||"active")+'</span><span class="admin-fp-ts">'+g(u(p.last_seen))+"</span></div>"}).join("");F.innerHTML=I+y}}async function M(){var $=document.getElementById("adminFingerprintCount");try{var F=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!F.ok)throw new Error("HTTP "+F.status);var H=await F.json(),I=H.records||[];if(N(I),$){var y=H.count||I.length,p=H.flagged!=null?H.flagged:I.filter(function(s){return s.state==="flagged"||s.state==="blocked"}).length;$.textContent=ServerI18n.t("fpCountSummary",{unique:y,flagged:p})}}catch(s){console.error("[admin-fingerprints] fetch failed:",s);var d=document.getElementById("adminFingerprintTableWrap");d&&(d.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function C(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var F=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(F.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await M();else{var H=await F.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(I){console.error("[admin-fingerprints] reset error:",I),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function S(){P(),A=setInterval(function(){var $=document.getElementById("sec-fingerprints");$&&$.offsetParent!==null&&M()},f)}function P(){A&&(clearInterval(A),A=null)}function L(){var $=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if($){$.insertAdjacentHTML("beforeend",B());var F=document.getElementById("adminFingerprintRefreshBtn");F&&F.addEventListener("click",M);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",C),M(),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var $=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&L()});$.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var F=document.getElementById("moderation-grid")||document.getElementById("settings-grid");F&&!document.getElementById("sec-fingerprints")&&L()}})})()});var on=ve(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let T=(t,v)=>{let h=window.ServerI18n?.t?.(t);return h&&h!==t?h:v||t},g=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||g)){g=!0;try{A(t)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function A(t){let v=document.createElement("div");v.id="sec-widgets",v.className="admin-widgets-page hud-page-stack lg:col-span-2";let h=location.origin+"/overlay";v.dataset.tpl="B",v.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(T("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${b(T("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${b(T("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${b(T("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${b(T("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${b(T("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${b(T("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(T("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${b(T("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(T("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${b(T("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${b(h)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(T("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(T("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(v);let e=document.getElementById("widget-add"),i=v.querySelector("[data-ow-addmenu]");e.addEventListener("click",l=>{l.stopPropagation(),i.hidden=!i.hidden}),i.addEventListener("click",l=>{let m=l.target.closest("[data-ow-add]")?.dataset.owAdd;m&&(i.hidden=!0,x(m))}),document.addEventListener("click",l=>{!i.hidden&&!l.target.closest(".admin-ui-page-actions")&&(i.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",C),v.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let l=v.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(l).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),B()}async function j(t,v="GET",h=null){let e={method:v,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(h){let l=document.querySelector('meta[name="csrf-token"]');l&&(e.headers["X-CSRF-Token"]=l.content),e.body=JSON.stringify(h)}return(await fetch("/admin/widgets/"+t,e)).json()}async function B(){try{let t=await j("list");P(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function x(t){let v={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await j("create","POST",{type:t,config:v[t]||{}}),B()}catch(h){console.error("[admin-widgets] Create failed:",h)}}async function u(t){let v=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:v,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await j("delete","POST",{id:t}),B()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function N(t,v){try{await j("update","POST",{id:t,config:v}),B()}catch(h){console.error("[admin-widgets] Update failed:",h)}}async function M(t,v,h){try{await j("score","POST",{id:t,team_index:v,delta:h}),B()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function C(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await j("clear","POST",{}),B()}catch(h){console.error("[admin-widgets] Clear failed:",h)}}let S=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(t){let v=document.getElementById("widgets-list");if(v){if(v.innerHTML="",s(t),t.length===0){let h=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});h.dataset.emptyKind="widgets",v.appendChild(h);return}t.forEach(h=>{v.appendChild(I(h))})}}let L={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function $(t){return T("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function F(t){let v=t.config||{},h="";t.type==="scoreboard"?h=(v.teams||[]).map(i=>`${i.name} ${i.score}`).join(" \xB7 "):t.type==="ticker"?(h=(v.messages||[])[0]||"",h&&(h=`\u300C${h}\u300D`)):t.type==="label"&&(h=v.text?`\u300C${v.text}\u300D`:"");let e=$(t.position);return h?`${h} \xB7 ${e}`:e}function H(t){return t==="scoreboard"?T("widgetScoreboard"):t==="ticker"?T("widgetTicker"):t==="label"?T("widgetLabel"):t}function I(t){let v=document.createElement("div");v.className="admin-widget-card",t.visible!==!1&&v.classList.add("is-on");let h=document.createElement("button");h.type="button",h.className="admin-widget-summary",h.setAttribute("aria-expanded","false"),h.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b(L[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(H(t.type))+'</span><span class="admin-widget-summary-text">'+b(F(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+b(T("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',v.appendChild(h);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,h.addEventListener("click",()=>{e.hidden=!e.hidden,h.setAttribute("aria-expanded",e.hidden?"false":"true"),v.classList.toggle("is-open",!e.hidden)});let i=a(T("widgetPosition"),S,t.position,k=>N(t.id,{position:k}));e.appendChild(i),t.type==="scoreboard"?n(e,t):t.type==="ticker"?o(e,t):t.type==="label"&&r(e,t);let l=document.createElement("div");l.className="admin-widget-card-actions";let m=document.createElement("button");m.type="button",m.className="admin-ui-action admin-widget-card-action",m.textContent=t.visible?T("widgetHide"):T("widgetShow"),m.addEventListener("click",()=>N(t.id,{visible:!t.visible})),l.appendChild(m);let w=document.createElement("button");return w.type="button",w.className="admin-ui-action is-danger admin-widget-card-action",w.textContent=T("remove"),w.addEventListener("click",()=>u(t.id)),l.appendChild(w),e.appendChild(l),v.appendChild(e),v}let y={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function p(t,v){let h="top-left",e=1/0;for(let[i,[l,m]]of Object.entries(y)){let w=t-l/2,k=v-m/2,_=w*w+k*k;_<e&&(e=_,h=i)}return h}function d(t){let v=t.config||{};return t.type==="scoreboard"?(v.teams||[]).map(h=>`${h.name} ${h.score}`).join("  ")||T("widgetScoreboard"):t.type==="ticker"?(v.messages||[])[0]||T("widgetTicker"):t.type==="label"?v.text||T("widgetLabel"):t.type}function s(t){let v=document.querySelector("[data-ow-stage]");if(v){if(v.innerHTML="",!t.length){v.innerHTML='<span class="admin-ow-stage-empty">'+b(T("widgetsStageEmpty"))+"</span>";return}t.forEach(h=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(h.position||"top-left"),h.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=h.id,e.draggable=!0,e.textContent=d(h),e.title=H(h.type),e.addEventListener("dragend",i=>{let l=v.getBoundingClientRect();if(!l.width||!l.height)return;let m=(i.clientX-l.left)/l.width,w=(i.clientY-l.top)/l.height;if(m<0||m>1||w<0||w>1)return;let k=p(m,w);k!==h.position&&N(h.id,{position:k})}),v.appendChild(e)})}}function n(t,v){let h=v.config||{},e=c(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",h.title||"",i=>N(v.id,{title:i}));t.appendChild(e),(h.teams||[]).forEach((i,l)=>{let m=document.createElement("div");m.className="admin-widget-team";let w=document.createElement("input");w.type="color",w.value=i.color||"#38bdf8",w.className="admin-widget-team-color",w.addEventListener("change",()=>{let K=[...h.teams];K[l]={...K[l],color:w.value},N(v.id,{teams:K})}),m.appendChild(w);let k=document.createElement("input");k.type="text",k.value=i.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let K=[...h.teams];K[l]={...K[l],name:k.value},N(v.id,{teams:K})}),m.appendChild(k);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=i.score,m.appendChild(_);let D=document.createElement("button");D.type="button",D.className="admin-widget-step",D.textContent="\u2212",D.addEventListener("click",()=>M(v.id,l,-1)),m.appendChild(D);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>M(v.id,l,1)),m.appendChild(R),t.appendChild(m)})}function o(t,v){let h=v.config||{},e=document.createElement("div");e.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(i);let l=document.createElement("input");l.type="range",l.min="10",l.max="200",l.value=h.speed||60,l.style.flex="1",l.addEventListener("change",()=>{N(v.id,{speed:parseInt(l.value)})}),e.appendChild(l);let m=document.createElement("span");m.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",m.textContent=l.value,l.addEventListener("input",()=>{m.textContent=l.value}),e.appendChild(m),t.appendChild(e);let w=document.createElement("div");w.className="admin-widget-row",w.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",w.appendChild(k);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(h.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let D=_.value.split(`
`).filter(R=>R.trim());N(v.id,{messages:D})}),w.appendChild(_),t.appendChild(w)}function r(t,v){let h=v.config||{};t.appendChild(c(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",h.text||"",e=>N(v.id,{text:e}))),t.appendChild(c(window.ServerI18n?.t?.("size")||"SIZE",String(h.fontSize||24),e=>N(v.id,{fontSize:parseInt(e)||24}),"number"))}function c(t,v,h,e="text"){let i=document.createElement("div");i.className="admin-widget-row";let l=document.createElement("span");l.className="lbl",l.textContent=t,i.appendChild(l);let m=document.createElement("input");return m.type=e,m.value=v,m.className="admin-widget-input",m.addEventListener("change",()=>h(m.value)),i.appendChild(m),i}function a(t,v,h,e){let i=document.createElement("div");i.className="admin-widget-row";let l=document.createElement("span");l.className="lbl",l.textContent=t,i.appendChild(l);let m=document.createElement("select");return m.className="admin-widget-select",v.forEach(w=>{let k=document.createElement("option");k.value=w,k.textContent=w,w===h&&(k.selected=!0),m.appendChild(k)}),m.addEventListener("change",()=>e(m.value)),i.appendChild(m),i}})})()});var rn=ve(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","notifications","audience","overlay","about"];function T(){let E=window.ADMIN_ROUTES||{},O={};return b.forEach(U=>{let J=E[U];J&&J.title&&(O[U]={title:J.title,kicker:J.kicker||U.toUpperCase()})}),O}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function A(){let E=document.querySelector('meta[name="csrf-token"]');return E&&E.content||""}function j(E,O){if(typeof window.csrfFetch=="function")return window.csrfFetch(E,O);let U=Object.assign({credentials:"same-origin"},O||{}),J=new Headers(O&&O.headers||{});return J.set("X-CSRF-Token",A()),U.headers=J,fetch(E,U)}function B(E,O){typeof window.showToast=="function"&&window.showToast(E,O!==!1)}let x=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>j("/effects/reload",{method:"POST"}).then(E=>B(E.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),E.ok)).catch(()=>B(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>j("/admin/poll/reset",{method:"POST"}).then(E=>B(E.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),E.ok)).catch(()=>B(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return j("/admin/history/clear",{method:"POST"}).then(O=>B(O.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),O.ok)).catch(()=>B(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],u=null,N=null,M=null,C="",S=[],P=[],L=0,$=null,F=null,H=null,I=15e3;function y(E){return String(E??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O])}function p(E,O){if(!O)return 0;let U=String(E||"").toLowerCase(),J=O.toLowerCase(),te=0,Z=0,z=0,Q=0;for(;te<U.length&&Z<J.length;)U[te]===J[Z]?(Z++,Q++,z+=2+Q):Q=0,te++;return Z<J.length?-1:(U.startsWith(J)&&(z+=10),z)}function d(){let E=document.createElement("div");E.className="admin-cmdk",E.setAttribute("hidden",""),E.setAttribute("aria-hidden","true"),E.innerHTML=`
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
    `,document.body.appendChild(E),u=E,N=E.querySelector(".admin-cmdk-input"),M=E.querySelector(".admin-cmdk-list"),E.addEventListener("click",O=>{O.target.matches("[data-cmdk-close]")&&R()}),N.addEventListener("input",O=>{C=O.target.value,w()}),N.addEventListener("keydown",s),M.addEventListener("click",O=>{let U=O.target.closest("[data-cmdk-idx]");U&&(L=parseInt(U.dataset.cmdkIdx,10)||0,o())})}function s(E){if(E.key==="Escape"){E.preventDefault(),R();return}if(E.key==="ArrowDown"){E.preventDefault(),n(1);return}if(E.key==="ArrowUp"){E.preventDefault(),n(-1);return}if(E.key==="Enter"){E.preventDefault(),o();return}}function n(E){if(!S.length)return;L=(L+E+S.length)%S.length,_();let O=M.querySelector(`[data-cmdk-idx="${L}"]`);O&&O.scrollIntoView({block:"nearest"})}function o(){let E=S[L];if(E){if(E.type==="route")window.location.hash="#/"+E.route,R();else if(E.type==="setting")E.tab&&(document.body.dataset.viewerConfigTab=E.tab),window.location.hash="#/"+E.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let O=document.getElementById(E.section);O&&(O.scrollIntoView({behavior:"smooth",block:"start"}),O.tagName==="DETAILS"&&!O.open&&(O.open=!0))},80),R();else if(E.type==="message")window.location.hash="#/messages",R();else if(E.type==="user")window.location.hash="#/system",setTimeout(()=>{let O=document.getElementById("sec-fingerprints");O&&O.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if(E.type==="theme")j("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:E.id})}).then(O=>{O.ok?(B(ServerI18n.t("cmdkThemeApplied",{name:E.label}),!0),H=null):B(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>B(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R();else if(E.type==="action"){try{let O=E.action&&E.action();O&&typeof O.then=="function"&&O.catch(()=>{})}catch{}R()}}}let r={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function c(E){return Object.entries(T()).map(([O,U])=>{let J=Math.max(p(U.title,E),p(O,E)),te=r[O];return{type:"route",route:O,label:U.title,sub:te?ServerI18n.t(te):"",icon:"\u25C7",score:J}}).filter(O=>O.score>=0)}function a(E){let O=T()[E];if(!O)return"";let U="adminRouteTitle_"+E,J=ServerI18n.t(U);return J!==U?J:O.title}function t(E){return g.map(O=>{let U=O.labelKey?ServerI18n.t(O.labelKey):O.label;return{type:"setting",route:O.route,tab:O.tab,section:O.section,label:a(O.route.split("/")[0])?`${a(O.route.split("/")[0])} \u203A ${U}`:U,sub:"",icon:"\u2699",score:p(U,E)}}).filter(O=>O.score>=0)}function v(E){return $?($.records||[]).map(U=>{let J=U.text||U.message||"",te=U.nickname||U.user||"guest",Z=(U.timestamp||"").slice(11,19)||"\u2014",z=(U.fingerprint||U.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${te}`,sub:z?`${Z} \xB7 fp:${z}`:Z,icon:"\u{1F4AC}",score:Math.max(p(J,E),p(te,E))}}).filter(U=>U.score>=0):[]}function h(E){if(!H)return[];let O=H.records||[],U=H.active||"";return O.map(J=>{let te=J.label||J.display_name||J.name||"",Z=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),z=J.name===U;return{type:"theme",id:J.name,label:z?ServerI18n.t("cmdkThemeActive",{name:te}):te,sub:Z,icon:"\u{1F3A8}",score:Math.max(p(te,E),p(J.name||"",E),p(Z,E))}}).filter(J=>J.score>=0)}function e(E){return x.map(O=>{let U=ServerI18n.t(O.labelKey),J=O.subKey?ServerI18n.t(O.subKey):O.sub;return{type:"action",id:O.id,label:U,sub:J,icon:"\u26A1",action:O.action,score:Math.max(p(U,E),p(O.id,E),p(J,E))}}).filter(O=>O.score>=0)}function i(E){return F?(F.records||[]).map(U=>{let J=U.fingerprint||U.fp||U.id||"",te=U.ip||U.last_ip||"",Z=U.nickname||"";return{type:"user",label:Z?`@${Z}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${te||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(p(J,E),p(te,E),p(Z,E))}}).filter(U=>U.score>=0):[]}async function l(){let E=Date.now(),O=[];(!$||E-$.at>I)&&O.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{$={at:E,records:U&&U.records||[]}}).catch(()=>{$={at:E,records:[]}})),(!F||E-F.at>I)&&O.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{F={at:E,records:U&&U.records||[]}}).catch(()=>{F={at:E,records:[]}})),(!H||E-H.at>I)&&O.push(fetch("/admin/themes",{credentials:"same-origin"}).then(U=>U.ok?U.json():null).then(U=>{H={at:E,records:U&&U.themes||[],active:U&&U.active||""}}).catch(()=>{H={at:E,records:[],active:""}})),O.length&&await Promise.all(O)}let m={actions:5,pages:5,messages:4};async function w(){await l();let E=C.trim(),O={action:e(E),route:c(E),setting:t(E),theme:h(E),message:v(E),user:i(E)};S=[],P=[],f.forEach(U=>{let J=U.types.reduce((te,Z)=>te.concat(O[Z]||[]),[]).sort((te,Z)=>Z.score-te.score).slice(0,m[U.id]||5);J.length&&(P.push({id:U.id,labelKey:U.labelKey,from:S.length,count:J.length}),S=S.concat(J))}),L=0,_()}function k(E){return E.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[E.type]||"\xB7"}function _(){if(!S.length){M.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let E=[];P.forEach(O=>{E.push(`<li class="admin-cmdk-group" role="presentation">${y(ServerI18n.t(O.labelKey))}</li>`);for(let U=O.from;U<O.from+O.count;U++){let J=S[U],te=U===L;E.push(`
        <li class="admin-cmdk-row ${te?"is-active":""}"
            data-cmdk-idx="${U}" role="option" aria-selected="${te}">
          <span class="admin-cmdk-icon" aria-hidden="true">${y(k(J))}</span>
          <span class="admin-cmdk-label">${y(J.label)}</span>
          <span class="admin-cmdk-sub">${y(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${te?"\u21B5":""}</span>
        </li>`)}}),M.innerHTML=E.join("")}function D(){u||d(),u.removeAttribute("hidden"),u.setAttribute("aria-hidden","false"),u.classList.add("is-open"),C="",N.value="",w(),setTimeout(()=>N.focus(),20)}function R(){u&&(u.setAttribute("hidden",""),u.setAttribute("aria-hidden","true"),u.classList.remove("is-open"))}function K(){return!!(u&&!u.hasAttribute("hidden"))}window.AdminCommandPalette={open:D,close:R,isOpen:K,toggle:()=>K()?R():D()}})()});var dn=ve(()=>{(function(){"use strict";let b="sec-sessions-overview";var T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(d){if(d=Number(d)||0,d<=0)return"\u2014";var s=Math.floor(d/3600),n=Math.floor(d%3600/60),o=d%60;return s>0?s+"h "+n+"m":n>0?n+"m":o+"s"}function A(d){if(!d)return"\u2014";try{var s=typeof d=="number"?new Date(d<1e12?d*1e3:d):new Date(d);return s.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(d)}}function j(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function B(){return'<div class="admin-sessions-th"><span>'+T(ServerI18n.t("sessionsColSession"))+"</span><span>"+T(ServerI18n.t("sessionsColMessages"))+"</span><span>"+T(ServerI18n.t("sessionsColViewers"))+"</span><span>"+T(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function x(d){return d.name||ServerI18n.t("sessionsFallbackName",{id:(d.id||"").slice(0,12)})}function u(){var d=document.getElementById("admin-sessions-table-body");if(d){if(g.loading){window.AdminSkeletons?(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:5}))):d.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){d.innerHTML="";var s=window.AdminEmpty.render("sessions");s.dataset.emptyKind="sessions",d.appendChild(s);return}var n=g.sessions.map(function(o){var r=T(o.id||"");return'<div class="admin-sessions-tr'+(o.is_live?" is-live":"")+'" data-session-id="'+r+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(o.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+T(x(o))+'<span class="admin-sessions-td-sub">'+T(A(o.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(o.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(o.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+T(f(o.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+r+'">'+T(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");d.innerHTML=B()+n}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function M(){var d=document.querySelector("[data-sessions-export]");if(d){if(!g.exportId){d.hidden=!0,d.innerHTML="";return}var s=g.sessions.find(function(o){return o.id===g.exportId});if(!s){g.exportId=null,d.hidden=!0,d.innerHTML="";return}var n=N.map(function(o){return'<button type="button" class="admin-sx-export__seg'+(o.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+o.id+'" aria-pressed="'+(o.id===g.exportFormat?"true":"false")+'">'+T(ServerI18n.t(o.labelKey))+"</button>"}).join("");d.hidden=!1,d.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+T(ServerI18n.t("sessionsExportTitle",{name:x(s)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+T(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+n+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+T(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+T(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+T(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+T(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function C(){if(g.exportId){var d="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),s=document.createElement("a");s.href=d,s.rel="noopener",document.body.appendChild(s),s.click(),s.remove()}}async function S(){var d=g.exportId;if(d)try{var s=await fetch("/admin/sessions/"+encodeURIComponent(d)+"/export?format=json",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);var n=await s.json(),o=(n.records||[]).slice(0,500);if(!o.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var r=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:o,speedMultiplier:1})});if(r.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!r.ok)throw new Error("HTTP "+r.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){u(),M()}async function L(){g.loading=!0,u();try{var[d,s]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),n=[],o=[];if(d.ok){var r=await d.json();n=Array.isArray(r.sessions)?r.sessions:[],n.forEach(function(i){i._explicit=!0})}if(s.ok){var c=await s.json();o=Array.isArray(c.sessions)?c.sessions:[]}var a=n.slice(),t=new Set(n.map(function(i){return i.id}));o.forEach(function(i){t.has(i.id)||a.push(i)}),a.sort(function(i,l){var m=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0),w=typeof l.started_at=="number"?l.started_at:Date.parse(l.started_at||0);return w-m});try{var v=await fetch("/admin/session/current",{credentials:"same-origin"});if(v.ok){var h=await v.json();if(h.status==="live"){var e=Object.assign({},h,{id:h.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});a.unshift(e)}}}catch{}g.sessions=a,g.total=a.length}catch(i){console.error("[admin-sessions] fetch error:",i),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:i.message||""}),!1)}finally{g.loading=!1,P()}}function $(d){d&&(window.location.hash="#/session-detail?id="+encodeURIComponent(d))}function F(d){g.exportId=d,M();var s=document.querySelector("[data-sessions-export]");s&&s.scrollIntoView({block:"nearest"})}function H(){var d=document.getElementById(b);d&&(d.addEventListener("click",function(s){var n=s.target.closest("[data-sessions-export-open]");if(n){s.stopPropagation(),F(n.dataset.sessionsExportOpen);return}if(s.target.closest("[data-sessions-export-close]")){g.exportId=null,M();return}var o=s.target.closest("[data-sessions-export-fmt]");if(o){g.exportFormat=o.dataset.sessionsExportFmt,M();return}if(s.target.closest("[data-sessions-replay]")){S();return}if(s.target.closest("[data-sessions-download]")){C();return}var r=s.target.closest(".admin-sessions-tr");r&&$(r.dataset.sessionId||null)}),d.addEventListener("change",function(s){var n=s.target.closest("[data-sessions-export-pii]");n&&(g.exportPii=!!n.checked)}),d.addEventListener("keydown",function(s){if(!(s.key!=="Enter"&&s.key!==" ")){var n=s.target.closest(".admin-sessions-tr");n&&(s.preventDefault(),$(n.dataset.sessionId||null))}}))}function I(){var d=document.querySelector(".admin-dash-grid"),s=document.getElementById(b);if(!(!d||!s)){var n=d.dataset.activeLeaf||"dashboard";s.style.display=n==="sessions"?"":"none"}}function y(){var d=document.getElementById("settings-grid");!d||document.getElementById(b)||(d.insertAdjacentHTML("beforeend",j()),H(),L(),I())}function p(){if(window.DANMU_CONFIG?.session?.logged_in){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&y(),I()});d.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",function(){y(),I()}),y()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var ln=ve(()=>{(function(){"use strict";let b="sec-session-detail-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,A={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function j(){let k=window.location.hash||"",_=k.indexOf("?");if(_===-1)return null;let D=k.slice(_+1);return new URLSearchParams(D).get("id")||null}function B(k){if(!k)return"\u2014";try{let _=new Date(k);if(isNaN(_.getTime()))return String(k);let D=R=>String(R).padStart(2,"0");return`${_.getFullYear()}-${D(_.getMonth()+1)}-${D(_.getDate())} ${D(_.getHours())}:${D(_.getMinutes())}:${D(_.getSeconds())}`}catch{return String(k)}}function x(k){if(!k||k<0)return"\u2014";let _=Math.round(Number(k)),D=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60;return D>0?`${D}h ${R}m ${K}s`:R>0?`${R}m ${K}s`:`${K}s`}function u(k,_){if(!k||!_)return"";try{let D=Math.max(0,Math.round((new Date(k)-new Date(_))/1e3)),R=Math.floor(D/60),K=D%60;return`+${String(R).padStart(2,"0")}:${String(K).padStart(2,"0")}`}catch{return""}}function N(k){let _=Number(k);return isNaN(_)?"\u2014":_.toLocaleString()}function M(k){if(!k)return"#64748b";let _=0;for(let R=0;R<k.length;R++)_=_*31+k.charCodeAt(R)>>>0;return`hsl(${_%360}, 60%, 60%)`}function C(){return`
      <div id="${b}" class="admin-sd-page hud-page-stack lg:col-span-2">
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
    `}async function S(k){if(!k){I(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let D=await _.json();g.session=D.session||null,g.records=D.records||[],g.density=D.density||[],H(!1),y(),P()}catch(_){H(!1),I(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(g.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let _=await k.json();g.annotations=Array.isArray(_.annotations)?_.annotations:[],r()}catch{}}function L(){let k=g.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let _=k.started_at||k.start_time,D=k.ended_at||k.end_time;if(_&&D)try{return Math.max(0,new Date(D)-new Date(_))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function $(k){let _=Date.parse(k||0);if(Number.isNaN(_))return"\u2014";let D=new Date(_),R=K=>String(K).padStart(2,"0");return`${R(D.getHours())}:${R(D.getMinutes())}:${R(D.getSeconds())}`}function F(k){let _=Math.floor(k/1e3),D=Math.floor(_/3600),R=Math.floor(_%3600/60),K=_%60,E=O=>String(O).padStart(2,"0");return D>0?`${E(D)}:${E(R)}:${E(K)}`:`${E(R)}:${E(K)}`}function H(k){g.loading=k;let _=document.querySelector("[data-sd-loading]"),D=document.querySelector("[data-sd-error]");_&&(_.hidden=!k),D&&k&&(D.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let K=R.querySelector("[data-sd-timeline-skel]");k?(R.hidden=!1,K||(K=window.AdminSkeletons.chart(),K.setAttribute("data-sd-timeline-skel","1"),R.appendChild(K))):K&&K.remove()}}function I(k){g.error=k;let _=document.querySelector("[data-sd-error]"),D=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),D&&(D.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let K=document.querySelector(`[${R}]`);K&&(K.hidden=!0)})}function y(){p(),d(),s(),o(),r();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function p(){let k=g.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let D=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),K=document.querySelector("[data-sd-meta-duration]"),E=document.querySelector("[data-sd-title]"),O=k&&(k.session_id||k.id)||g.sessionId||"\u2014";D&&(D.textContent=O),R&&(R.textContent=B(k&&(k.started_at||k.start_time))),K&&(K.textContent=x(k&&(k.duration_s||k.duration))),E&&(E.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(O).slice(-8)}))}function d(){let k=g.session;if(!k)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let D=function(O,U,J){let te=document.querySelector(`[data-sd-stat="${O}"]`);te&&(te.textContent=U);let Z=document.querySelector(`[data-sd-stat-sub="${O}"]`);Z&&(Z.textContent=J||"")};D("msg_count",N(k.msg_count)),D("viewer_count",N(k.viewer_count));let R=Array.isArray(g.density)?g.density:[];if(R.length){let O=0,U=0;R.forEach(function(Z,z){Z>O&&(O=Z,U=z)});let J=Date.parse(k.started_at||k.start_time||0),te="";if(!Number.isNaN(J)){let Z=new Date(J+U*6e4),z=Q=>String(Q).padStart(2,"0");te=`${z(Z.getHours())}:${z(Z.getMinutes())}`}D("peak",N(O),te)}else D("peak","\u2014","");let K=Number(k.blocked_count)||0;D("blocked",N(K));let E=document.querySelector("[data-sd-blocked-btn]");E&&(E.textContent=ServerI18n.t("sessionDetailStatBlocked")+(K?" "+K:""),E.disabled=K===0)}function s(){let k=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),D=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!k||!_||!D)return;let K=g.density;if(!K||K.length===0){k.hidden=!0;return}k.hidden=!1;let E=Math.max(1,...K),O=0;K.forEach(function(Q,W){Q>K[O]&&(O=W)});let U=K.map(function(Q,W){let V=Math.max(2,Math.round(Q/E*100));return`<div class="admin-sd-bar${W===O?" is-peak":""}" style="height:${V}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:Q,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:Q})}"></div>`}).join("");_.innerHTML=U;let J=g.session,te=B(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",Z=B(J&&(J.ended_at||J.end_time)).slice(11,16)||"",z=K.length>2?`+${Math.round(K.length/2)}min`:"";D.innerHTML=`
      <span class="admin-sd-axis-label">${T(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${T(z)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${T(Z)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:K[O],minute:O}))}function n(){let k=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(_){let D=(_.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!D?!1:k?String(_.text||"").toLowerCase().indexOf(k)!==-1||String(_.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function o(){let k=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!k||!_)return;if(!g.records.length){k.hidden=!0;return}k.hidden=!1;let D=n().slice(0,300);if(!D.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+T(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=D.map(function(R){let K=(R.status||"shown")==="blocked",E=M(R.fingerprint||R.fp||""),O=$(R.timestamp||R.created_at),U=String(R.nickname||"").trim();return`
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
        </div>`}).join("")}function r(){let k=g.annotations||[],_=L(),D=document.querySelector("[data-sd-ann-count]");D&&(D.textContent=k.length?`${k.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let K=document.querySelector("[data-sd-ann-layer]");K&&(!_||k.length===0?K.innerHTML="":K.innerHTML=k.map(function(U){let J=A[U.label]||A.note,te=Math.min(100,Math.max(0,U.ts_ms/_*100)),Z=U.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${Z?" is-active":""}"
              data-sd-ann-marker="${T(U.id)}"
              style="left:${te.toFixed(2)}%;--ann-color:${J.color}"
              title="${T(J.label)} \xB7 ${F(U.ts_ms)}"
              aria-label="${T(J.label)} at ${F(U.ts_ms)}: ${T(U.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${Z?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${T((U.note||"").slice(0,40))}${(U.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let E=document.querySelector("[data-sd-ann-legend]");E&&(E.innerHTML=Object.keys(A).map(function(U){let J=A[U],te=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${te}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let O=document.querySelector("[data-sd-ann-list]");if(O){if(k.length===0){O.innerHTML="";let U=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});U.dataset.emptyKind="session-annotations",O.appendChild(U);return}O.innerHTML=k.map(function(U){let J=A[U.label]||A.note,te=U.id===g.activeAnnId,z=(U.note||"").length>80?(U.note||"").slice(0,80)+"\u2026":U.note||"";return`
        <div class="admin-sd-ann-row${te?" is-active":""}" data-sd-ann-row="${T(U.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${F(U.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${T(z)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${T(U.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function c(k){if(!g.sessionId)return;let _=window.HudConfirm;if(!_){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:F(k)}),"");J!=null&&J.trim()&&a(k,"note",J.trim());return}let R="highlight",K="",E=document.createElement("div");E.className="admin-sd-ann-modal-body",E.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${F(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(A).map(function(J){let te=A[J];return`
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
      </div>`,E.addEventListener("click",function(J){let te=J.target.closest("[data-ann-label]");te&&(R=te.dataset.annLabel,E.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(Z){Z.classList.toggle("is-active",Z===te)}))});let O=E.querySelector("[data-ann-modal-note]"),U=E.querySelector("[data-ann-modal-counter]");O.addEventListener("input",function(){K=O.value,U.textContent=`${K.length} / 280`}),setTimeout(function(){O&&O.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:E,width:460}).then(function(J){J&&a(k,R,O.value.trim())})}async function a(k,_,D){if(g.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(k)),label:_||"note",note:D||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let K=await R.json();K.annotation&&(g.annotations.push(K.annotation),g.annotations.sort(function(E,O){return E.ts_ms-O.ts_ms}),g.activeAnnId=K.annotation.id,r(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(k){if(k)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);g.annotations=g.annotations.filter(function(D){return D.id!==k}),g.activeAnnId===k&&(g.activeAnnId=null),r(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function v(k){let _=document.querySelector("[data-sd-timeline-inner]"),D=document.querySelector("[data-sd-ann-hover]");if(!_||!D)return;let R=_.getBoundingClientRect();if(!R.width)return;let K=k.clientX-R.left,E=Math.min(1,Math.max(0,K/R.width)),O=L();if(!O){D.hidden=!0;return}let U=Math.round(E*O);g.hoverTsMs=U,D.hidden=!1,D.style.left=`${(E*100).toFixed(2)}%`,D.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:F(U)})}function h(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),g.hoverTsMs=null}function e(k){if(k.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let D=_.getBoundingClientRect();if(!D.width)return;let R=k.clientX-D.left,K=Math.min(1,Math.max(0,R/D.width)),E=L();E&&c(Math.round(K*E))}async function i(){if(g.sessionId)try{let k=g.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function l(k,_){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")g.sessionId&&S(g.sessionId);else if(k==="export"){if(!g.sessionId)return;let D=document.createElement("a");D.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",D.rel="noopener",document.body.appendChild(D),D.click(),D.remove()}else if(k==="replay")i();else if(k==="add-annotation"){let D=L(),R=g.hoverTsMs!=null?g.hoverTsMs:Math.round(D/2);c(R)}}function m(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=j();if(!_){g.sessionId=null,I(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=_,S(_)}function w(){let k=document.getElementById("settings-grid");if(!k)return;let _=document.getElementById(b);_||(k.insertAdjacentHTML("beforeend",C()),_=document.getElementById(b),r()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(D){let R=D.target.closest("[data-sd-ann-del]");if(R){D.stopPropagation(),t(R.dataset.sdAnnDel);return}let K=D.target.closest("[data-sd-ann-marker]");if(K){D.stopPropagation(),g.activeAnnId=K.dataset.sdAnnMarker,r();let te=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);te&&te.scrollIntoView&&te.scrollIntoView({block:"nearest",behavior:"smooth"});return}let E=D.target.closest("[data-sd-ann-row]");if(E){g.activeAnnId=E.dataset.sdAnnRow,r();return}if(D.target.closest("[data-sd-timeline-inner]")){e(D);return}let U=D.target.closest("[data-sd-action]");if(U){D.preventDefault(),l(U.dataset.sdAction,U);return}let J=D.target.closest("[data-sd-filter]");J&&(g.msgFilter=J.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(te){te.classList.toggle("is-active",te===J)}),o())}),_.addEventListener("input",function(D){let R=D.target.closest("[data-sd-search]");R&&(g.msgQuery=R.value||"",o())}),_.addEventListener("mousemove",function(D){D.target.closest("[data-sd-timeline-inner]")&&v(D)}),_.addEventListener("mouseleave",function(D){D.target.closest&&D.target.closest("[data-sd-timeline-inner]")&&h()},!0)),g.sessionId=j(),g.sessionId?S(g.sessionId):I(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",m))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&_.indexOf("/session-detail")!==-1&&w(),window.addEventListener("admin-route-changed",function(D){(D&&D.detail&&D.detail.route)==="session-detail"&&w()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&w()})})})()});var cn=ve(()=>{(function(){"use strict";let b="sec-search-overview";var T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},A=0;function j(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+T(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+T(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+T(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+T(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+T(ServerI18n.t("searchWhoAria"))+'"><option value="">'+T(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+T(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+T(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function B(n){if(!n)return 200;for(var o=0,r=0;r<Math.min(n.length,6);r++)o=o*31+n.charCodeAt(r)&65535;return o%360}function x(n,o){if(!o||!n)return T(n||"");var r=T(n),c=T(o);try{var a=new RegExp("("+c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return r.replace(a,'<mark class="admin-search-hit">$1</mark>')}catch{return r}}function u(n){if(!n)return"\u2014";try{var o=new Date(n);return o.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return n}}function N(){var n=f.results;return f.blockedOnly&&(n=n.filter(function(o){return(o.status||"shown")==="blocked"})),f.who&&(n=n.filter(function(o){return(o.nickname||"")===f.who})),n}function M(){var n=document.getElementById("admin-search-count");if(n){if(!f.searched||!f.query.trim()){n.textContent="";return}n.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function C(){var n=document.querySelector("[data-search-who]");if(n){var o=[];f.results.forEach(function(c){var a=(c.nickname||"").trim();a&&o.indexOf(a)===-1&&o.push(a)}),o.sort();var r=f.who;n.innerHTML='<option value="">'+T(ServerI18n.t("searchWhoAnyone"))+"</option>"+o.map(function(c){return'<option value="'+T(c)+'"'+(c===r?" selected":"")+">"+T(c)+"</option>"}).join("")}}function S(){var n=document.getElementById("admin-search-results"),o=document.getElementById("admin-search-empty-state"),r=document.getElementById("admin-search-export-btn");if(n){n.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var c=function(e){o&&(o.style.display="block",o.textContent=e),r&&(r.hidden=!0)};if(f.loading)return c(ServerI18n.t("searchSearching"));if(!f.searched)return c(ServerI18n.t("searchPromptStart"));var a=N();if(a.length===0)return c(ServerI18n.t("searchNoMatch"));o&&(o.style.display="none"),r&&(r.hidden=!1);var t=Math.min(a.length,f.shown),v=document.createDocumentFragment();if(a.slice(0,t).forEach(function(e){var i=document.createElement("div");i.className="admin-search-row",i.innerHTML='<span class="admin-search-row__ts">'+T(u(e.timestamp))+'</span><span class="admin-search-row__text">'+x(e.text||"",f.query)+'</span><span class="admin-search-row__nick">'+T((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+T(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+T(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",v.appendChild(i)}),n.appendChild(v),a.length>t){var h=document.createElement("button");h.type="button",h.className="admin-search-more",h.dataset.searchMore="1",h.textContent=ServerI18n.t("searchMoreLeft",{n:a.length-t}),n.appendChild(h)}}}function P(){M(),C(),S()}async function L(){var n=f.query.trim();if(!n){f.loading=!1,f.searched=!1,f.results=[],f.total=0,P();return}f.loading=!0,P();try{var o="/admin/search?q="+encodeURIComponent(n);if(f.scope==="session"){var r=await F();r&&(o+="&since="+encodeURIComponent(r))}var c=Date.now(),a=await fetch(o,{credentials:"same-origin"}),t=Date.now()-c;if(!a.ok)throw new Error("HTTP "+a.status);var v=await a.json();f.results=Array.isArray(v.results)?v.results:[],f.total=typeof v.total=="number"?v.total:f.results.length,f.shown=g}catch(h){console.error("[admin-search] fetch error:",h),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:h.message||""}),!1)}finally{f.loading=!1,f.searched=!0,P()}}var $=null;async function F(){if($!==null)return $;try{var n=await fetch("/admin/session/current",{credentials:"same-origin"});if(n.ok){var o=await n.json();if(o.status==="live"&&o.started_at)return $=new Date(o.started_at*1e3).toISOString(),$}}catch{}return $="",""}function H(){clearTimeout(A),A=setTimeout(L,300)}function I(){if(f.results.length){var n=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(a){var t=[a.nickname||"",a.fingerprint||"",a.timestamp||"",a.status||"",a.text||"",a.delivery_reason||""].map(function(v){return'"'+window.AdminUtils.csvSafeText(v).replace(/"/g,'""')+'"'});n.push(t.join(","))});var o=new Blob(["\uFEFF"+n.join(`
`)],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(o),c=document.createElement("a");c.href=r,c.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(r)}}function y(){var n=document.getElementById(b);if(n){var o=document.getElementById("admin-search-input");o&&(o.addEventListener("input",function(){f.query=o.value,H()}),o.addEventListener("keydown",function(c){c.key==="Enter"&&(clearTimeout(A),f.query=o.value,L())})),n.addEventListener("click",function(c){var a=c.target.closest("[data-search-scope]");if(a){f.scope=a.dataset.searchScope,n.querySelectorAll("[data-search-scope]").forEach(function(v){v.classList.toggle("is-active",v===a)}),f.query.trim()&&H();return}var t=c.target.closest("[data-search-blocked]");if(t){f.blockedOnly=!f.blockedOnly,t.classList.toggle("is-active",f.blockedOnly),f.shown=g,P();return}if(c.target.closest("[data-search-more]")){f.shown+=g,S();return}}),n.addEventListener("change",function(c){var a=c.target.closest("[data-search-who]");a&&(f.who=a.value||"",f.shown=g,P())});var r=document.getElementById("admin-search-export-btn");r&&r.addEventListener("click",I)}}function p(){var n=document.querySelector(".admin-dash-grid"),o=document.getElementById(b);if(!(!n||!o)){var r=n.dataset.activeLeaf||"dashboard";o.style.display=r==="search"?"":"none"}}function d(){var n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",j()),y(),p())}function s(){if(window.DANMU_CONFIG?.session?.logged_in){var n=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&d(),p()});n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",function(){d(),p()}),d()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var un=ve(()=>{(function(){"use strict";let b="sec-api-tokens-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],A={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function j(e){if(!e)return"\u2014";try{let i=new Date(e);if(isNaN(i.getTime()))return String(e);let l=m=>String(m).padStart(2,"0");return`${i.getFullYear()}-${l(i.getMonth()+1)}-${l(i.getDate())}`}catch{return String(e)}}function B(e){if(!e)return null;try{let i=new Date(e);if(isNaN(i.getTime()))return null;let l=m=>String(m).padStart(2,"0");return`${i.getFullYear()}-${l(i.getMonth()+1)}-${l(i.getDate())} ${l(i.getHours())}:${l(i.getMinutes())}`}catch{return null}}function x(e){let i=Number(e);return isNaN(i)?"0":i.toLocaleString()}function u(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let i=new Date(e.expires_at).getTime(),l=Date.now();if(i<l)return"expired";if(i-l<168*3600*1e3)return"expiring"}catch{}return"active"}function N(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function M(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(i){let l="admin-ui-pill admin-at-scope-badge";return i==="admin:*"?l+=" is-danger":i.startsWith("fire:")?l+=" is-warn":i.startsWith("read:stats")?l+=" is-cyan":l+=" is-success",`<span class="${l}">${T(i)}</span>`}).join(" ")}function C(e){let i="admin-ui-dot admin-at-dot";return e==="active"?i+=" is-success":e==="expiring"?i+=" is-warn":e==="expired"?i+=" is-danger":i+=" is-muted",`<span class="${i}" aria-hidden="true"></span>`}function S(){let e=g.map(function(l){let m=l.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${l.badge==="red"?"danger":l.badge==="amber"?"warn":l.badge==="green"?"success":l.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${l.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${l.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${T(l.id)}"
          >
          <span class="${k}">${T(l.badgeTxt)}</span>
          <span class="admin-at-scope-label">${T(ServerI18n.t(l.labelKey))}</span>
          ${m}
        </label>
      `}).join(""),i=f.map(function(l){let m=l.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${l.days!==null?String(l.days):"null"}" ${m} class="sr-only">
          <span>${T(ServerI18n.t(l.labelKey))}</span>
        </label>
      `}).join("");return`
      <details id="${b}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
                    ${e}
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
    `}async function P(){H(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let i=await e.json();A.tokens=i.tokens||i||[],y()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function L(e){A.creating=!0,I(!0),o();try{let i=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!i.ok){let w=await i.json().catch(()=>({}));throw new Error(w.error||w.message||`HTTP ${i.status}`)}let l=await i.json(),m=l.token||l.raw_token||l.access_token||null;A.newTokenRaw=m,p(m),s(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(i){n(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:i.message||""}),!1)}finally{A.creating=!1,I(!1)}}async function $(e,i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${T(i||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let m=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!m.ok){let w=await m.json().catch(()=>({}));throw new Error(w.error||w.message||`HTTP ${m.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(m){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:m.message||""}),!1)}}async function F(e,i){try{let l=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:i})});if(!l.ok){let m=await l.json().catch(()=>({}));throw new Error(m.error||m.message||`HTTP ${l.status}`)}window.showToast&&window.showToast(i?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(l){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:l.message||""}),!1)}}function H(e){let i=document.querySelector("[data-at-list-loading]");i&&(i.hidden=!e)}function I(e){let i=document.getElementById("adminAtSubmitBtn");i&&(i.disabled=e,i.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function y(){let e=A.tokens,i=document.querySelector("[data-at-empty]"),l=document.querySelector("[data-at-table-wrap]"),m=document.querySelector("[data-at-tbody]");if(!(!i||!l||!m)){if(!e||e.length===0){if(!i.firstElementChild&&window.AdminEmpty){let w=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});w.dataset.emptyKind="api-tokens",i.appendChild(w)}i.hidden=!1,l.hidden=!0;return}i.hidden=!0,l.hidden=!1,m.innerHTML=e.map(function(w){let k=u(w),_=C(k),D=w.scopes||w.scope||[],R=Array.isArray(D)?D:String(D).split(",").map(te=>te.trim()).filter(Boolean),E=N(w.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",O=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",U=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=w.last_used_at?`${B(w.last_used_at)||j(w.last_used_at)}<br><span class="admin-at-ip">${T(w.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${T(w.id||w.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${T(w.label||w.name||"\u2014")}</span>
            ${E}${O}${U}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${T(w.prefix||w.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${M(R)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${x(w.usage_count||w.use_count)}</td>
          <td class="admin-at-td-created">${j(w.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${T(w.id||w.token_id||"")}"
              data-token-enabled="${w.enabled===!1?"0":"1"}"
              title="${w.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${w.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${T(w.id||w.token_id||"")}"
              data-token-label="${T(w.label||w.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function p(e){let i=document.getElementById("adminAtSuccessBanner"),l=document.getElementById("adminAtTokenDisplay"),m=document.getElementById("adminAtCreateForm");i&&(i.hidden=!1),l&&e&&(l.value=e),m&&(m.style.opacity="0.5"),i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}function d(){let e=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),i&&(i.style.opacity=""),A.newTokenRaw=null}function s(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(m){m.classList.remove("is-active")});let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){i.checked=!0;let m=i.closest(".admin-at-expiry-btn");m&&m.classList.add("is-active")}let l=document.getElementById("adminAtAdminWarn");l&&(l.hidden=!0),o()}function n(e){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!1,i.textContent=e)}function o(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function r(){let e=document.getElementById("adminAtLabel"),i=e?e.value.trim():"",l=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){l.push(_.value)});let m=document.querySelector("input[name='adminAtExpiry']:checked"),w=m?m.value:"90",k=w==="null"?null:parseInt(w,10);return{label:i,scopes:l,expiry_days:k}}function c(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function a(e){if(e.preventDefault(),A.creating)return;o();let i=r(),l=c(i);if(l){n(l);return}L(i)}function t(){let e=A.newTokenRaw;if(!e)return;let i=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let l=document.getElementById("adminAtTokenDisplay");l&&(l.select(),document.execCommand("copy")),i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function v(){let e=document.getElementById(b);if(!e)return;e.addEventListener("click",function(w){let k=w.target.closest("[data-at-action]");if(k){let D=k.dataset.atAction;if(D==="revoke"){let R=k.dataset.tokenId,K=k.dataset.tokenLabel;$(R,K)}else if(D==="toggle"){let R=k.dataset.tokenId,K=k.dataset.tokenEnabled==="1";F(R,!K)}else D==="copy-token"&&t();return}let _=w.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(D){D.classList.remove("is-active")}),_.classList.add("is-active"))});let i=document.getElementById("adminAtScope_admin__");i&&i.addEventListener("change",function(){let w=document.getElementById("adminAtAdminWarn");w&&(w.hidden=!i.checked)});let l=document.getElementById("adminAtCreateForm");l&&l.addEventListener("submit",a);let m=document.querySelector("input[name='adminAtExpiry'][value='90']");if(m){let w=m.closest(".admin-at-expiry-btn");w&&w.classList.add("is-active")}}function h(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",S()),v(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&h()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&h()})})()});var mn=ve(()=>{(function(){"use strict";let b="sec-wcag-overview",T=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})};function g(s){let n=s.replace(/^#/,""),o=n.length===3?n.split("").map(function(r){return r+r}).join(""):n;return[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]}function f(s){return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)}function A(s){let n=g(s);return .2126*f(n[0])+.7152*f(n[1])+.0722*f(n[2])}function j(s,n){let o=A(s),r=A(n),c=Math.max(o,r),a=Math.min(o,r);return(c+.05)/(a+.05)}function B(s){return s>=7?"AAA":s>=4.5?"AA":s>=3?"AA-large":"fail"}function x(s,n){let o=A(n),r=[],c=g(s);for(let a=.05;a<=.6&&r.length<3;a+=.05){let v="#"+c.map(function(e){return Math.min(1,e+a)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),h=j(v,n);h>=4.5&&r.push({hex:v,ratio:h})}return r}let u=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},M="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",C={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function S(){let s=u.filter(function(r){return B(j(r.fg,r.bg))!=="fail"}).length,n=u.length-s,o=Math.round(s/u.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",s,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",n,ServerI18n.t("wcagStatFailLabel"))}
              ${P("PAIRS",u.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",o+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:o})}">
                <div class="admin-wcag-meter-fill" style="width:${o}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${M}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${u.map(function(r,c){return L(r,c)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${$()}
          </div>
        </div>
      </div>`}function P(s,n,o){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${T(String(n))}</span>
        <span class="hud-stat-tile-label">${T(o)}</span>
      </div>`}function L(s,n){let o=j(s.fg,s.bg),r=B(o),c=C[r],a=ServerI18n.t(s.nameKey),t=c.labelKey?ServerI18n.t(c.labelKey):c.label,v=r==="fail"?ServerI18n.t("wcagWarnFail"):r==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${M}"
        data-wcag-pair-idx="${n}" role="button" tabindex="0"
        aria-label="${T(ServerI18n.t("wcagPairAriaLabel",{name:a,ratio:o.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${T(a)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${T(s.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${T(s.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${T(s.fg)}">${T(s.fg)} / ${T(s.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${o.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${c.mod}">${t}</span>
        ${v?`<span class="admin-wcag-warn">\u26A0 ${v}</span>`:""}
      </div>`}function $(){let s=j(N.fg,N.bg),n=B(s),o=C[n],r=o.labelKey?ServerI18n.t(o.labelKey):o.label,c=x(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${F(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${F(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${T(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${T(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${T(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${T(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${s.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${o.mod}">${r}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),s>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),s>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),s>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),s>=4.5)}
      </div>

      ${c.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${c.map(function(a){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${T(a.hex)}"
                title="${T(ServerI18n.t("wcagSuggApplyTitle",{ratio:a.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${T(N.bg)};color:${T(a.hex)}">${T(a.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${a.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function F(s,n,o){let r="wcag-tester-"+o;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${r}">${T(s)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${T(n)}"></span>
          <input type="text" id="${r}" class="admin-ui-input" data-wcag-tester-${o}
            aria-label="${T(ServerI18n.t("wcagHexAria",{label:s}))}"
            value="${T(n)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(s,n){return`<div class="admin-wcag-level ${n?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${n?"\u2713":"\u2717"}</span>
      <span>${T(s)}</span>
    </div>`}function I(){let s=document.getElementById(b);s&&(s.addEventListener("click",function(n){let o=n.target.closest("[data-wcag-pair-idx]");if(o){y(o);return}let r=n.target.closest("[data-wcag-sugg]");r&&(N.fg=r.dataset.wcagSugg,p())}),s.addEventListener("keydown",function(n){if(n.key!=="Enter"&&n.key!==" "&&n.key!=="Spacebar")return;let o=n.target.closest("[data-wcag-pair-idx]");o&&(n.preventDefault(),y(o))}),s.addEventListener("input",function(n){let o=n.target.closest("[data-wcag-tester-fg]"),r=n.target.closest("[data-wcag-tester-bg]");o&&/^#[0-9A-Fa-f]{6}$/.test(o.value)&&(N.fg=o.value.toUpperCase(),p()),r&&/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(N.bg=r.value.toUpperCase(),p())}))}function y(s){let n=u[parseInt(s.dataset.wcagPairIdx,10)];n&&(N.fg=n.fg,N.bg=n.bg,p())}function p(){let s=document.querySelector("[data-wcag-tester]");s&&(s.innerHTML=$())}function d(){let s=document.getElementById("settings-grid");!s||document.getElementById(b)||(s.insertAdjacentHTML("beforeend",S()),I())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&d()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&d()})})()});var pn=ve(()=>{(function(){"use strict";let b="danmu.onboarding.done",T="admin-onboarding-root",j=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],B=0,x=!1;window.AdminOnboarding={start:S,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let u=new Set(["live","dashboard"]);function N(){if(x||window.AdminOnboarding.isDone()||!u.has(M()))return;let s=()=>!!document.querySelector(".admin-session-banner-live");s()||setTimeout(()=>{x||window.AdminOnboarding.isDone()||s()||u.has(M())&&S()},1200)}function M(){let s=document.querySelector(".admin-dash-grid");return s&&s.dataset.activeRoute||"live"}function C(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&S()}function S(){x||(x=!0,B=0,H())}function P(s){if(!x)return;x=!1,document.body.removeEventListener("click",$),document.removeEventListener("keydown",F),window.removeEventListener("resize",I);let n=document.getElementById(T);if(n&&n.remove(),s)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function L(){B<j.length-1?(B++,I()):P(!0)}function $(s){let n=s.target.closest("[data-ob-action]");n&&(s.stopPropagation(),n.dataset.obAction==="next"?L():n.dataset.obAction==="skip"&&P(!1))}function F(s){x&&s.key==="Escape"&&(s.preventDefault(),P(!1))}function H(){let s=document.getElementById(T);s&&s.remove();let n=document.createElement("div");n.id=T,n.className="admin-ob-root",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","false"),n.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(n),document.body.addEventListener("click",$),document.addEventListener("keydown",F),window.addEventListener("resize",I),I()}function I(){let s=document.getElementById(T);if(!s)return;let n=j[B],o=j.length,r=p(n.target),c=window.innerWidth,a=window.innerHeight,t="";r?t='<div class="admin-ob-spot" style="left:'+(r.left-8)+"px;top:"+(r.top-8)+"px;width:"+(r.width+16)+"px;height:"+(r.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let v=(c-360)/2,h=a/2-110,e="none";if(r){let w=r.left+r.width/2;n.side==="top"?(v=w-360/2,h=r.top-16,e="bottom"):n.side==="right"?(v=r.right+16+8,h=r.top,e="left"):(v=w-360/2,h=r.bottom+16+8,e="top"),v=Math.max(16,Math.min(c-360-16,v))}let i=j.map(function(w,k){return'<span class="admin-ob-progress-item'+(k===B?" is-current":"")+'">'+(k+1)+" "+d(ServerI18n.t(w.labelKey))+"</span>"+(k<o-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");s.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+v+"px;top:"+h+'px"><div class="admin-ob-count">'+(B+1)+" / "+o+'</div><div class="admin-ob-title">'+d(ServerI18n.t(n.titleKey))+'</div><div class="admin-ob-body">'+d(ServerI18n.t(n.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+d(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+d(ServerI18n.t(B===o-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+i+"</div></div>";let l=s.querySelector(".admin-ob-bubble");if(!l||!r)return;let m=l.offsetHeight;if(n.side==="top")l.style.top=Math.max(16,r.top-16-8-m)+"px";else if(h+m>a-16){let w=r.top-16-8-m;w>=16?(l.style.top=w+"px",l.setAttribute("data-arrow","bottom")):(l.style.top=Math.max(16,a-m-16)+"px",l.setAttribute("data-arrow","none"))}y(l,r)}function y(s,n){let o=s.getAttribute("data-arrow");if(o==="none")return;let r=s.getBoundingClientRect(),c=o==="top"||o==="bottom",a=c?n.left+n.width/2-r.left:n.top+n.height/2-r.top,t=c?r.width:r.height,v=Math.max(16,Math.min(t-32,a-8));s.style.setProperty("--ob-arrow",v+"px")}function p(s){if(!s)return null;let n=document.querySelector(s);if(!n)return null;let o=n.getBoundingClientRect();return o.width<8||o.height<8||o.bottom<0||o.top>window.innerHeight?null:o}function d(s){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(s):s==null?"":String(s).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",C),C(),window.addEventListener("hashchange",function(){u.has(M())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var wn=ve(()=>{var Yi=fe(Ze()),Qi=fe(et()),Xi=fe(tt()),Zi=fe(nt()),es=fe(at()),ts=fe(it()),ns=fe(st()),as=fe(ot()),is=fe(rt()),ss=fe(dt()),os=fe(lt()),rs=fe(ct()),ds=fe(ut()),ls=fe(mt()),cs=fe(pt()),us=fe(vt()),ms=fe(ft()),ps=fe(ht()),vs=fe(gt()),fs=fe(yt()),hs=fe(bt()),gs=fe(wt()),ys=fe(St()),bs=fe(kt()),ws=fe(It()),Ss=fe(Tt()),ks=fe(_t()),Is=fe(Et()),Ts=fe($t()),_s=fe(xt()),Es=fe(Lt()),$s=fe(At()),xs=fe(Ct()),Ls=fe(Bt()),As=fe(Ft()),Cs=fe(Dt()),Bs=fe(Mt()),Fs=fe(Nt()),Ds=fe(Pt()),Ms=fe(Rt()),Ns=fe(Ot()),Ps=fe(qt()),Rs=fe(Ht()),Os=fe(jt()),qs=fe(Ut()),Hs=fe(Kt()),js=fe(Wt()),Us=fe(Gt()),Ks=fe(zt()),Ws=fe(Vt()),Gs=fe(Jt()),zs=fe(Yt()),Vs=fe(Qt()),Js=fe(Xt()),Ys=fe(Zt()),Qs=fe(en()),Xs=fe(tn()),Zs=fe(nn()),eo=fe(an()),to=fe(sn()),no=fe(on()),ao=fe(rn()),io=fe(dn()),so=fe(ln()),oo=fe(cn()),ro=fe(un()),lo=fe(mn()),co=fe(pn())});wn();})();
