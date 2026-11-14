/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var pn=Object.create;var Xe=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var fn=Object.getOwnPropertyNames;var hn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var ge=(g,h)=>()=>{try{return h||g((h={exports:{}}).exports,h),h.exports}catch(y){throw h=0,y}};var bn=(g,h,y,f)=>{if(h&&typeof h=="object"||typeof h=="function")for(let A of fn(h))!gn.call(g,A)&&A!==y&&Xe(g,A,{get:()=>h[A],enumerable:!(f=vn(h,A))||f.enumerable});return g};var be=(g,h,y)=>(y=g!=null?pn(hn(g)):{},bn(h||!g||!g.__esModule?Xe(y,"default",{value:g,enumerable:!0}):y,g));var Ze=ge(()=>{(function(){"use strict";var g=4,h=2500,y=3e3,f=Object.create(null);function A(){return Date.now()}function U(E,S){return(S?"ok:":"err:")+E}function F(E,S){return"var("+E+", "+S+")"}function C(E){return E?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(E){for(var S=Array.prototype.slice.call(E.children);S.length>g;){var L=S.shift();L&&L.parentNode&&L.parentNode.removeChild(L)}}function M(E,S){E.remaining=S,E.startedAt=A(),E.timer=setTimeout(function(){k(E)},S)}function D(E){E.timer&&(clearTimeout(E.timer),E.timer=null,E.remaining=Math.max(600,E.remaining-(A()-E.startedAt)))}function x(E){E.timer||!E.el.parentNode||M(E,E.remaining)}function k(E){clearTimeout(E.timer),E.timer=null,E.key&&f[E.key]===E&&delete f[E.key];var S=E.el;!S||!S.parentNode||(S.style.opacity="0",S.style.transform="translateX(8px)",setTimeout(function(){S.parentNode&&S.parentNode.removeChild(S)},180))}function N(E,S){var L=document.getElementById("toast-container");if(L){S=S!==!1;var P=U(String(E),S),$=f[P];if($&&$.el.parentNode&&A()-$.startedAt<h){$.count+=1,$.countEl&&($.countEl.textContent="\xD7"+$.count,$.countEl.hidden=!1),D($),x($);return}var w=S?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),v=F("--color-surface","#ffffff"),c=F("--color-text-primary","#1a1a1a"),s=F("--color-border-soft","rgba(0,0,0,.12)"),e=document.createElement("div");e.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+v,"color:"+c,"border:1px solid "+s,"border-left:3px solid "+w,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var l=document.createElement("span");l.style.cssText="display:inline-flex;color:"+w+";flex:0 0 auto",l.innerHTML=C(S);var a=document.createElement("span");a.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",a.textContent=E;var d=document.createElement("span");d.hidden=!0,d.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",e.appendChild(l),e.appendChild(a),e.appendChild(d),L.appendChild(e),m(L),requestAnimationFrame(function(){e.style.opacity="1",e.style.transform="translateX(0)"});var o={key:P,el:e,countEl:d,count:1,timer:null,remaining:y,startedAt:A()};f[P]=o,M(o,y),e.addEventListener("mouseenter",function(){D(o)}),e.addEventListener("mouseleave",function(){x(o)}),e.addEventListener("focusin",function(){D(o)}),e.addEventListener("focusout",function(){x(o)})}}window.showToast=N})()});var et=ge(()=>{(function(){"use strict";var g="admin-details-open-state";function h(){try{return JSON.parse(localStorage.getItem(g))||{}}catch{return{}}}function y(S){try{localStorage.setItem(g,JSON.stringify(S))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(S){return S==null?"":String(S).replace(/[&<>"']/g,function(L){return f[L]})}function U(){var S=document.querySelector("script[nonce]");return S&&S.nonce||""}function F(S,L){var P=U();return"<style"+(S?' id="'+A(S)+'"':"")+(P?' nonce="'+A(P)+'"':"")+">"+(L||"")+"</style>"}var C='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],M=null;function D(S){if(!S)return!1;for(var L=S,P=null;L&&L!==document.documentElement;P=L,L=L.parentElement)if(L.style&&L.style.display==="none"||L.tagName==="DETAILS"&&!L.open&&!(P&&P.tagName==="SUMMARY"))return!1;return!!(S.offsetParent||S.getClientRects().length)}function x(){var S=document.hidden;m.forEach(function(L){var P=typeof L.el=="function"?L.el():L.el,$=!S&&D(P);if($&&!L.timer){if(L.immediate!==!1)try{L.tick()}catch{}L.timer=setInterval(L.tick,L.intervalMs)}else!$&&L.timer&&(clearInterval(L.timer),L.timer=0)})}function k(S){var L={el:S.el,intervalMs:S.intervalMs,tick:S.tick,immediate:S.immediate,timer:0};return m.push(L),M||(M=new MutationObserver(function(){x()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",x),document.addEventListener("visibilitychange",x),document.addEventListener("admin-panel-rendered",x)),x(),function(){L.timer&&clearInterval(L.timer);var $=m.indexOf(L);$!==-1&&m.splice($,1)}}function N(S){let L=document.createElement("textarea");L.value=S,L.setAttribute("readonly",""),L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();let P=!1;try{P=!!document.execCommand("copy")}catch{P=!1}return document.body.removeChild(L),P}function E(S,L){let P=v=>window.ServerI18n?window.ServerI18n.t(v):v,$=v=>(window.showToast&&window.showToast(v?L||P("sohCopied"):P("sohCopyFailed"),v),v);if(!S)return Promise.resolve($(!1));let w=navigator.clipboard;return w&&typeof w.writeText=="function"?w.writeText(S).then(()=>$(!0),()=>$(N(S))):Promise.resolve($(N(S)))}window.AdminUtils={copyText:E,DETAILS_STATE_KEY:g,loadDetailsState:h,saveDetailsState:y,escapeHtml:A,cspNonce:U,styleTag:F,closeIcon:C,pollWhileVisible:k}})()});var tt=ge(()=>{(function(){"use strict";function g(h,y,f,A){let U=h.querySelector("[data-route-breadcrumb]");if(!U)return;let F=Array.from(h.querySelectorAll(".admin-dash-nav-row[data-route]")),C=F.find(L=>L.dataset.route===y)||F.find(L=>L.dataset.route===f);if(!C){U.replaceChildren(),U.hidden=!0;return}let m="",M=C.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){m=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let x=(C.querySelector("[data-i18n]")||C.querySelector("span:nth-child(2)")||C).textContent.trim(),k=A?h.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=k?(k.querySelector(".admin-tabs-btn-label")||k).textContent.trim():"",E=[m===x?"":m,x,N].filter(Boolean),S=document.createDocumentFragment();E.forEach((L,P)=>{if(P){let v=document.createElement("span");v.className="admin-dash-breadcrumb-sep",v.setAttribute("aria-hidden","true"),v.textContent="\u203A",S.appendChild(v)}let $=document.createElement("span"),w=P===E.length-1;$.className="admin-dash-breadcrumb-item"+(w?" is-current":""),w&&$.setAttribute("aria-current","page"),$.textContent=L,S.appendChild($)}),U.replaceChildren(S),U.hidden=E.length===0}window.AdminBreadcrumb={render:g}})()});var nt=ge(()=>{(function(g){"use strict";let h={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function y(k){return Array.isArray(k.sections)?k.sections:k.section?[k.section]:[]}function f(k){return!!h[k]}function A(k){return h[k]||null}let U={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(k,N){let E=h[k];if(!E||!N)return null;let S=E.tabs.find(L=>L.folds&&L.folds[N]);return S?{tab:S.slug,section:S.folds[N]}:null}function C(k,N){let E=h[k];if(!E)return null;let S=w=>E.tabs.some(v=>v.slug===w),L=F(k,N);if(L)return L.tab;let P=U[k]?.[N];if(P&&S(P))return P;if(N&&S(N))return N;let $=g.AdminRouter?.tabMemory?.get?.(k);return $&&S($)?$:E.defaultTab}function m(k,N,E){let S=h[k];if(!S)return null;let L=document.createElement("div");return L.className="admin-tabs-strip",L.dataset.nav=k,L.setAttribute("role","tablist"),L.setAttribute("aria-label",k+" tabs"),S.tabs.forEach(P=>{let $=document.createElement("button");$.type="button",$.className="admin-tabs-btn"+(P.slug===N?" is-active":""),$.dataset.nav=k,$.dataset.tab=P.slug,$.setAttribute("role","tab"),$.setAttribute("aria-selected",P.slug===N?"true":"false");let w=document.createElement("span");w.className="admin-tabs-btn-label",w.textContent=P.labelKey?ServerI18n.t(P.labelKey):P.label,$.appendChild(w);let v=document.createElement("span");v.className="admin-tabs-btn-count",v.dataset.tabCount=P.slug,v.textContent=M[k]&&M[k][P.slug]?M[k][P.slug]:"",$.appendChild(v),$.addEventListener("click",()=>{typeof E?.onSelect=="function"&&E.onSelect(P.slug)}),L.appendChild($)}),L}let M={};function D(k,N,E){if(!h[k])return;M[k]=M[k]||{},M[k][N]=E==null?"":String(E);let S=document.querySelector('.admin-tabs-strip[data-nav="'+k+'"] [data-tab-count="'+N+'"]');S&&(S.textContent=M[k][N])}function x(k,N,E){let S=h[k];!S||!E||S.tabs.forEach(L=>{let P=L.slug===N,$=new Map;y(L).forEach(w=>{let v=E.querySelector("#"+w);if(!v)return;v.style.display=P?"":"none";let c=$.get(v.parentElement);P&&L.folds&&c&&c.nextElementSibling!==v&&c.after(v),$.set(v.parentElement,v)})})}g.AdminTabs={hasTabsFor:f,getConfig:A,foldFor:F,resolveActiveTab:C,renderTabStrip:m,applyTabSectionVisibility:x,setTabCount:D}})(window)});var at=ge(()=>{(function(g,h){"use strict";let y="data-quick-action-host",f="admin-quick-action-bar";function A(M){if(M?.host instanceof HTMLElement)return M.host;let D=h.querySelector(".admin-dash-main");if(!D)return h.body;let x=D.querySelector(`[${y}]`);if(!x){x=h.createElement("div"),x.setAttribute(y,"");let k=D.querySelector(".admin-dash-topbar"),E=D.querySelector("[data-admin-tabs-host]")||k;E&&E.parentNode?E.insertAdjacentElement("afterend",x):D.prepend(x)}return x}function U(M,D){typeof g.showToast=="function"&&g.showToast(M,D!==!1)}function F({label:M,undoLabel:D,onUndo:x,windowMs:k}){let N=A(),E=N.querySelector("."+f);E&&E.remove();let S=h.createElement("div");S.className=f,S.setAttribute("role","status"),S.setAttribute("aria-live","polite");let L=h.createElement("span");L.className=f+"-text",L.textContent="\u2713 "+M,S.appendChild(L);let P=h.createElement("button");P.type="button",P.className=f+"-undo",P.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),S.appendChild(P);let $=()=>{S.classList.add("is-leaving"),setTimeout(()=>S.remove(),200)},w=setTimeout($,k||5e3);return P.addEventListener("click",async()=>{clearTimeout(w),P.disabled=!0,P.textContent=ServerI18n.t("qaUndoing");try{await x(),U(ServerI18n.t("qaUndone"),!0)}catch(v){U(ServerI18n.t("qaUndoFailed",{msg:v?.message||String(v)}),!1)}finally{$()}}),N.appendChild(S),requestAnimationFrame(()=>S.classList.add("is-entering")),S}function C(M){if(!M||typeof M!="object")return;let D=M.label||ServerI18n.t("qaDone");M.toast!==!1&&U(D,!0),M.undo&&typeof M.undo.run=="function"&&F({label:D,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function m(){h.querySelectorAll("."+f).forEach(M=>M.remove())}g.AdminQuickAction={fire:C,dismissAll:m}})(window,document)});var it=ge(()=>{(function(){"use strict";let g="admin-hud-modal-root",h=null,y=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function A(){let m=document.getElementById(g);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function U(m){let M=document.getElementById(g);if(M&&M.remove(),h&&(h(m),h=null),document.removeEventListener("keydown",F),y&&typeof y.focus=="function")try{y.focus()}catch{}y=null}function F(m){if(m.key==="Escape"){m.preventDefault(),U(!1);return}if(m.key==="Tab"){let M=A();if(!M.length){m.preventDefault();return}let D=M[0],x=M[M.length-1],k=document.activeElement;m.shiftKey?(k===D||!M.includes(k))&&(m.preventDefault(),x.focus()):(k===x||!M.includes(k))&&(m.preventDefault(),D.focus())}}function C(m){return new Promise(M=>{h&&U(!1),h=M,y=document.activeElement;let{icon:D="\u26A0",title:x=ServerI18n.t("hudConfirmTitle"),subtitle:k="",severity:N="warn",body:E="",titleText:S,bodyText:L,confirmLabel:P=ServerI18n.t("hudConfirmLabel"),cancelLabel:$=ServerI18n.t("cancel"),width:w=480}=m||{},v=document.createElement("div");v.id=g,v.className=`admin-hud-modal admin-hud-modal--${N}`,v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-hud-modal-title");let c=k?`<div class="admin-hud-modal__subtitle">${k}</div>`:"",s=typeof E=="string"?E:"",e=typeof E!="string"&&E&&E.nodeType;if(v.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${w}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${x}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${s}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${$}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${P}</button>
          </div>
        </div>`,S!=null){let a=v.querySelector(".admin-hud-modal__title");a&&(a.textContent=String(S))}if(L!=null){let a=v.querySelector("[data-modal-body]");a&&(a.textContent=String(L))}if(e){let a=v.querySelector("[data-modal-body]");a.innerHTML="",a.appendChild(E)}v.addEventListener("click",function(a){let d=a.target.closest("[data-modal-action]");d&&(a.stopPropagation(),U(d.dataset.modalAction==="confirm"))}),document.body.appendChild(v),document.addEventListener("keydown",F);let l=N==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{v.querySelector(`.admin-hud-modal__btn--${l}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:C}})()});var st=ge(()=>{(function(){"use strict";var g=8,h=30;function y(N,E){return window.ServerI18n?window.ServerI18n.t(N,E):N}function f(N,E){return N?N.length>E?N.slice(0,E)+"\u2026":N:""}function A(N){return y(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function U(N,E){return N==="keyword"?f(E,h):E.slice(0,g)}async function F(N,E,S){if(!E)return{ok:!1,error:"empty-value"};try{var L={type:N==="keyword"?"keyword":"fingerprint",value:E};S&&(L.reason=S);var P=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});return P.ok?{ok:!0}:{ok:!1,error:"HTTP "+P.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}async function C(N,E,S){if(!N)return{ok:!1,error:"empty-fingerprint"};var L=parseInt(E||0,10)||0;try{var P=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:L,reason:S||"",kind:"ban"})});return P.ok?{ok:!0}:{ok:!1,error:"HTTP "+P.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}async function m(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var E=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return E.ok?{ok:!0}:{ok:!1,error:"HTTP "+E.status}}catch(S){return{ok:!1,error:S&&S.message||"network"}}}function M(N,E){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:y("lfBlockTitle"),subtitle:y("cfmSubBlockFuture"),severity:"danger",bodyText:y("blockConfirm").replace("{label}",A(N)).replace("{display}",U(N,E)),confirmLabel:y("lfBlockTitle")}):(window.showToast&&window.showToast(y("blockFailed"),!1),Promise.resolve(!1))}function D(N,E,S){window.showToast&&window.showToast(N?y(E,S||{}):y("blockFailed"),!!N)}async function x(N,E){if(!N||(E=E||{},!E.skipConfirm&&!await M("keyword",N)))return!1;var S=await F("keyword",N);return D(S.ok,"blockFallback",{label:A("keyword"),display:U("keyword",N)}),S.ok}async function k(N,E){if(!N||(E=E||{},!E.skipConfirm&&!await M("fingerprint",N)))return!1;var S=await F("fingerprint",N,E.reason);return D(S.ok,"blockFallback",{label:A("fingerprint"),display:U("fingerprint",N)}),S.ok}window.AdminModeration={callBlock:F,banFingerprint:C,recall:m,blockKeyword:x,blockFingerprint:k}})()});var ot=ge(()=>{(function(){"use strict";function h(C){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",C.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),C}function y(C,m){let M=document.createElement("div");if(M.className="admin-skel "+(C||""),m)for(let D in m)M.style[D]=m[D];return M}function f({rows:C=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{M.appendChild(y("admin-skel-bar",{width:D+"px",height:"10px"}))}),m.appendChild(M);for(let D=0;D<C;D++){let x=document.createElement("div");x.className="admin-skel-list__row",x.appendChild(y("admin-skel-circle",{width:"24px",height:"24px"}));let k=document.createElement("div");k.className="admin-skel-list__col",k.appendChild(y("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),k.appendChild(y("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),x.appendChild(k),x.appendChild(y("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(x)}return h(m)}function A({cols:C=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${C}, 1fr)`;for(let M=0;M<C;M++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(y("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(y("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(y("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(y("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(D)}return h(m)}function U(){let C=document.createElement("div");C.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(y("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",m.appendChild(M),m.appendChild(y("admin-skel-bar",{width:"80px",height:"10px"})),C.appendChild(m);let D=document.createElement("div");D.className="admin-skel-chart__body";let x=document.createElement("div");x.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>x.appendChild(y("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(x);let k=document.createElement("div");return k.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(E=>k.appendChild(y("admin-skel-bar admin-skel-chart__bar",{height:E+"%"}))),D.appendChild(k),C.appendChild(D),h(C)}function F(C,m){let M={listRows:f,statsTiles:A,chart:U}[C];return M?M(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:A,chart:U,html:F}})()});var rt=ge(()=>{(function(){"use strict";let g={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},h={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:g.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:g.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:g.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:g.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:g.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:g.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:g.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:g.cyan}};function y(A){let{icon:U="\xB7",title:F="",desc:C="",accent:m=g.cyan,ctaAccent:M,actionLabel:D,action:x,extra:k}=A||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",m),M&&N.style.setProperty("--admin-empty-cta",M);let E=document.createElement("div");if(E.className="admin-empty__icon",E.textContent=U,N.appendChild(E),F){let S=document.createElement("div");S.className="admin-empty__title",S.textContent=F,N.appendChild(S)}if(C){let S=document.createElement("div");S.className="admin-empty__desc",S.textContent=C,N.appendChild(S)}if(D){let S=document.createElement("button");S.type="button",S.className="admin-empty__btn",S.textContent=D,typeof x=="function"&&S.addEventListener("click",x),N.appendChild(S)}if(k){let S=document.createElement("div");S.className="admin-empty__extra",typeof k=="string"?S.innerHTML=k:S.appendChild(k),N.appendChild(S)}return N}function f(A){let U=h[A];if(!U)return y({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},U,{title:U.titleKey?ServerI18n.t(U.titleKey):U.title,desc:U.descKey?ServerI18n.t(U.descKey):U.desc,actionLabel:U.actionLabelKey?ServerI18n.t(U.actionLabelKey):U.actionLabel});return y(F)}window.AdminEmpty={render:f,renderCustom:y,PRESETS:h}})()});var dt=ge(()=>{(function(){"use strict";var g=8;function h(F){return F?String(F).slice(0,g):""}function y(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var C=F.fingerprint||F.fp||F.hash||"",m=F.clientIp||F.client_ip||F.ip||"",M=F.nickname||F.nick||"";return{nickname:String(M||""),fp:String(C||""),ip:String(m||"")}}function f(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var C=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",C).then(function(m){var M=Array.from(new Uint8Array(m));return M.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function A(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var C=document.getElementById("sec-fingerprints");if(C&&!C.open&&(C.open=!0),C)try{C.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(F).then(function(m){if(m)var M=0,D=setInterval(function(){M+=1;var x=document.querySelector('[data-fp-hash="'+m+'"]');if(x){clearInterval(D),x.classList.add("admin-identity-flash"),setTimeout(function(){x.classList.remove("admin-identity-flash")},2e3);try{x.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(D)},250)})}function U(F){F=F||{};var C=F.nickname||"",m=F.fp||"",M=F.ip||"",D=!!F.compact,x=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,k=typeof F.onFpClick=="function"?F.onFpClick:A,N=document.createElement("span");N.className="admin-identity-row";var E;if(x?(E=document.createElement("button"),E.type="button",E.className="admin-identity-nick is-clickable",E.addEventListener("click",function(v){v.stopPropagation(),x(C)})):(E=document.createElement("span"),E.className="admin-identity-nick"),C)E.textContent="@"+C;else{var S="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var L=ServerI18n.t("anonymousPlaceholder");L&&L!=="anonymousPlaceholder"&&(S=L)}}catch{}E.textContent="@"+S,E.classList.add("is-guest")}if(C&&(E.title=C),N.appendChild(E),m){var P;if(k?(P=document.createElement("button"),P.type="button",P.className="admin-identity-fp is-clickable",P.addEventListener("click",function(v){v.stopPropagation(),k(m)})):(P=document.createElement("span"),P.className="admin-identity-fp"),m==="new"){var $=document.createElement("span");$.className="admin-identity-dot",P.appendChild($),P.appendChild(document.createTextNode("fp:new"))}else P.textContent="fp:"+h(m);P.title=m,N.appendChild(P)}if(M&&!D){var w=document.createElement("span");w.className="admin-identity-ip",w.textContent=M,w.title=M,N.appendChild(w)}return N}window.AdminIdentity={render:U,parse:y,focusFingerprint:A,hashFp:f,FP_DISPLAY_LEN:g}})()});var lt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(l,a){return window.csrfFetch(l,a)}function y(l,a){return window.showToast(l,a)}let f="default",A=[],U={};function F(){let l=document.getElementById("themesList");l&&window.AdminSkeletons&&(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function C(){F();try{let l=await h("/admin/themes");if(!l.ok)return;let a=await l.json();f=a.active||"default",A=a.themes||[],U=a.overrides||{},N(A,f),L()}catch(l){console.warn("[Themes] Failed to fetch themes:",l)}}var m="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function D(l,a){var d=String(l||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(d)?d:a}function x(l){var a=l.styles||{},d=["color:"+D(a.color,"#ffffff")];if(a.textStroke){var o=Math.max(0,Math.min(6,Number(a.strokeWidth)||0));d.push("-webkit-text-stroke:"+o+"px "+D(a.strokeColor,"#000000")),d.push("paint-order:stroke fill")}if(a.textShadow){var t=Math.max(0,Math.min(40,Number(a.shadowBlur)||0));d.push("text-shadow:0 0 "+t+"px "+D(a.color,"#ffffff"))}var u=l.font&&l.font.family;return u&&/^[\w\s-]{1,40}$/.test(u)&&d.push("font-family:'"+u+"', var(--font-sans)"),l.font&&Number(l.font.weight)&&d.push("font-weight:"+Math.max(100,Math.min(900,Number(l.font.weight)))),d.join(";")}function k(l){var a=l.bg&&l.bg.gradient;return a&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(a).trim())?"background:"+String(a).trim():""}function N(l,a){let d=document.getElementById("themesList");if(d){if(d.innerHTML="",l.length===0){d.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}l.forEach(o=>{let t=o.name===a,u=g(ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name),b=document.createElement("div");b.className=`theme-pack-card${t?" is-active":""}`,b.innerHTML=`
        <div class="theme-pack-name">${u}</div>
        <div class="theme-pack-sample" style="${g(k(o))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${g(x(o))}">
            <span class="theme-pack-sample-nick">${g(m)}</span>
            ${g(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${o.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${g(o.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${g(o.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,d.appendChild(b)}),d.querySelectorAll(".theme-delete-btn").forEach(o=>{o.addEventListener("click",async()=>{let t=o.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let b=await h("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!b.ok)throw new Error("HTTP "+b.status);y(ServerI18n.t("themeDeleted"),!0),C()}catch{y(ServerI18n.t("themesDeleteFailed"),!1)}})}),d.querySelectorAll(".theme-activate-btn").forEach(o=>{o.addEventListener("click",async()=>{let t=o.dataset.theme;try{let u=await h("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(u.ok)y(ServerI18n.t("themeActivated"),!0),f=t,N(l,t),L();else{let b=await u.json().catch(()=>({}));y(b.error||ServerI18n.t("setThemeFailed"),!1)}}catch{y(ServerI18n.t("setThemeFailed"),!1)}})})}}function E(){return A.find(l=>l.name===f)||null}function S(l,a){let d=U[f]||{};if(d[l])return d[l];let o=a&&a.styles||{};return l==="stroke"?o.textStroke?Number(o.strokeWidth)>=3?"thick":"thin":"none":o.textShadow?Number(o.shadowBlur)>=10?"strong":"soft":"none"}function L(){let l=document.getElementById("themeDetail"),a=document.getElementById("themeDetailLabel");if(!l||!a)return;let d=E();if(!d)return;let o=ServerI18n.t("theme_"+d.name)!=="theme_"+d.name?ServerI18n.t("theme_"+d.name):d.label||d.name;a.textContent=ServerI18n.t("themeDetailGroup",{name:o}),["stroke","shadow"].forEach(u=>{let b=S(u,d);l.querySelectorAll(`[data-theme-seg="${u}"] [data-theme-opt]`).forEach(n=>{let i=n.getAttribute("data-theme-opt")===b;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",i?"true":"false")})});let t=l.querySelector('[data-theme-ov="color"]');if(t){let u=D((d.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(u)?u:"#ffffff"}$(d),w(d)}var P=null;async function $(l){let a=document.getElementById("themeOvFont");if(!a)return;if(!P)try{let t=await fetch("/fonts",{credentials:"same-origin"});P=t.ok?(await t.json()).fonts||[]:[]}catch{P=[]}let o=(U[f]||{}).font_family||"";a.innerHTML=`<option value="">${g(ServerI18n.t("themeDetailFontInherit"))}</option>`+P.map(t=>{let u=String(t.name||t);return`<option value="${g(u)}"${u===o?" selected":""}>${g(u)}</option>`}).join("")}function w(l){let a=document.querySelector("[data-theme-preview-line]");a&&a.setAttribute("style",x(l))}async function v(l){try{let a=await h("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!a.ok)throw new Error("HTTP "+a.status);y(ServerI18n.t("themeDetailSaved"),!0),await C()}catch{y(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let l=document.getElementById("themeDetail");l&&(l.addEventListener("click",a=>{let d=a.target.closest("[data-theme-opt]");if(!d)return;let o=d.closest("[data-theme-seg]");o&&v({[o.getAttribute("data-theme-seg")]:d.getAttribute("data-theme-opt")})}),l.addEventListener("change",a=>{let d=a.target.closest("[data-theme-ov]");d&&v({[d.getAttribute("data-theme-ov")]:d.value})}))}function s(){let l=document.getElementById("themeNewBtn");l&&l.addEventListener("click",async()=>{let a=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!a||!a.trim()))try{let d=await h("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:a.trim(),base:f})});if(!d.ok)throw new Error("HTTP "+d.status);y(ServerI18n.t("themeCreated"),!0),C()}catch{y(ServerI18n.t("themesNewFailed"),!1)}})}function e(){C(),c(),s();let l=document.getElementById("themeReloadBtn");l&&l.addEventListener("click",async()=>{try{(await h("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(y(ServerI18n.t("themesReloaded")),C()):y(ServerI18n.t("themesReloadFailed"),!1)}catch{y(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:e}})()});var ct=ge(()=>{(function(){"use strict";function g(_,B){return window.csrfFetch(_,B)}function h(_,B){return window.showToast(_,B)}var y=window.ServerI18n;function f(_,B){return window.AdminUtils.styleTag(_,B)}let A=null;function U(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")&&B.getAttribute("aria-hidden")!=="true"):[]}function F(_){let B=document.getElementById("effectEditModal");if(!B||B.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),C();return}if(_.key!=="Tab")return;let R=U();if(R.length===0){_.preventDefault();return}let j=R[0],O=R[R.length-1],W=document.activeElement;_.shiftKey&&W===j?(_.preventDefault(),O.focus()):!_.shiftKey&&W===O&&(_.preventDefault(),j.focus())}function C(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",F),A&&(A.focus(),A=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!m[_]}};let M=new Map,D=new Map;function x(_){if(!_||!_.styleId||!_.keyframes)return;let B="dme-user-"+_.styleId;if(document.getElementById(B))return;let R=document.createElement("style");R.id=B,R.textContent=_.keyframes,document.head.appendChild(R)}async function k(_){if(M.has(_))return M.get(_);if(D.has(_))return D.get(_);let B=(async()=>{try{let R=await g(`/admin/effects/${encodeURIComponent(_)}/content`);if(!R.ok)throw new Error("content fetch failed");let j=await R.json(),O=j&&j.content||"";if(!O)throw new Error("empty content");let W=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:O,params:{}})});if(!W.ok)throw new Error("preview failed");let G=await W.json();if(!G||!G.animation)throw new Error("no animation");return x(G),M.set(_,G),G}catch{return M.set(_,"failed"),null}finally{D.delete(_)}})();return D.set(_,B),B}function N(_,B){let R=_.querySelector(".effect-demo-text");if(!R)return;R.style.animation=B.animation||"",B.animationComposition&&(R.style.animationComposition=B.animationComposition),R.style.animationPlayState="paused";let j=S();j&&j.observe(_)}let E=null;function S(){return E||(typeof IntersectionObserver>"u"?null:(E=new IntersectionObserver(_=>{_.forEach(B=>{let R=B.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=B.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),E))}let L=null;function P(_){let B=document.getElementById("effectPreviewParams");if(!B)return{};let R;try{let O=_.split(`
`),W=!1,G=0,Z=null,le=0,ne={};for(let J of O){let ee=J.trimStart(),K=J.length-ee.length;if(ee.startsWith("params:")){W=!0,G=K;continue}if(!W||ee===""||ee.startsWith("#"))continue;if(K<=G&&!ee.startsWith("params:")){W=!1;continue}let Y=ee.match(/^([a-zA-Z0-9_]+):\s*$/);if(Y&&K===G+2){Z=Y[1],le=K,ne[Z]={};continue}if(Z&&K>le){let te=ee.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let se=te[1],de=te[2].trim();if((de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),se!=="options"){let ce=Number(de);ne[Z][se]=isNaN(ce)?de:ce}}if(ee.startsWith("- value:")){ne[Z].options||(ne[Z].options=[]);let se=ee.match(/^- value:\s*(.+)$/);if(se){let de=se[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),ne[Z].options.push({value:de,label:de})}}if(ee.startsWith("label:")&&ne[Z].options&&ne[Z].options.length>0){let se=ee.match(/^label:\s*(.+)$/);if(se){let de=se[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),ne[Z].options[ne[Z].options.length-1].label=de}}}}R=ne}catch{R={}}B.innerHTML="";let j={};for(let[O,W]of Object.entries(R||{})){let G=W.type||"float",Z=document.createElement("div");Z.className="flex flex-col gap-0.5";let le=document.createElement("label");if(le.className="font-mono",le.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",le.textContent=`${O} (${G})`,Z.appendChild(le),G==="select"&&Array.isArray(W.options)){let ne=document.createElement("select");ne.className="admin-ui-select",ne.style.cssText="font-size:13px;padding:4px 8px",ne.dataset.paramKey=O;for(let J of W.options){let ee=document.createElement("option");ee.value=J.value,ee.textContent=J.label||J.value,J.value===String(W.default)&&(ee.selected=!0),ne.appendChild(ee)}j[O]=String(W.default||W.options[0]&&W.options[0].value||""),ne.addEventListener("change",()=>{v()}),Z.appendChild(ne)}else{let ne=W.min!=null?W.min:0,J=W.max!=null?W.max:10,ee=W.step!=null?W.step:G==="int"?1:.1,K=W.default!=null?W.default:ne,Y=document.createElement("div");Y.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=ne,te.max=J,te.step=ee,te.value=K,te.dataset.paramKey=O,te.className="flex-1",te.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(K),te.addEventListener("input",()=>{se.textContent=te.value,v()}),Y.appendChild(te),Y.appendChild(se),Z.appendChild(Y),j[O]=K}B.appendChild(Z)}return j}function $(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let B={};return _.querySelectorAll("[data-param-key]").forEach(R=>{B[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),B}async function w(){let _=document.getElementById("effectEditModalTextarea"),B=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),j=document.getElementById("effectPreviewError");if(!_||!B||!R)return;let O=_.value;if(!O||O===y.t("effectLoadContent")||O===y.t("effectsNetworkError"))return;let W=$();j?.classList.add("hidden");try{let G=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:O,params:W})}),Z=await G.json().catch(()=>({}));G.ok?(R.textContent=Z.keyframes||"",B.style.animation=Z.animation||"none",B.style.animationComposition=Z.animationComposition||""):(B.style.animation="none",R.textContent="",j&&(j.textContent=Z.error||y.t("previewFailed"),j.classList.remove("hidden")))}catch{B.style.animation="none",R.textContent="",j&&(j.textContent=y.t("effectsNetworkError"),j.classList.remove("hidden"))}}function v(){clearTimeout(L),L=setTimeout(()=>w(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${y.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${y.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${y.t("previewText")}</span>
                </div>
                ${f("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${y.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${y.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",C),document.getElementById("effectEditModalCancel").addEventListener("click",C),document.getElementById("effectEditModal").addEventListener("click",O=>{O.target===O.currentTarget&&C()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let O=document.getElementById("effectEditModalTextarea");O&&(P(O.value),v())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{w()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let O=document.getElementById("effectEditModal"),W=document.getElementById("effectEditModalTextarea"),G=document.getElementById("effectEditModalSave"),Z=O?.dataset.effectName;if(!(!Z||!W)){G.disabled=!0;try{let le=await g("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z,content:W.value})}),ne=await le.json().catch(()=>({}));le.ok?(h(ne.message||y.t("effectSaveFallback"),!0),C(),await l()):h(ne.error||y.t("saveFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}finally{G.disabled=!1}}})),await l(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let O=document.getElementById("effectReloadBtn");O&&(O.disabled=!0);try{let W=await g("/admin/effects/reload",{method:"POST"}),G=await W.json().catch(()=>({}));W.ok?(h(G.message||y.t("effectsReloadFallback")),await l()):h(G.error||y.t("reloadFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}finally{O&&(O.disabled=!1)}});async function _(O){if(!O)return;let W=new FormData;W.append("effectfile",O);try{let G=await g("/admin/effects/upload",{method:"POST",body:W}),Z=await G.json().catch(()=>({}));G.ok?(h(Z.message||y.t("effectUploadFallback")),await l()):h(Z.error||y.t("uploadFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}}let B=document.getElementById("effectUploadInput"),R=B&&!B.dataset.uploadWired;R&&(B.dataset.uploadWired="1"),(R?B:null)?.addEventListener("change",async O=>{await _(O.target.files?.[0]),O.target.value=""});let j=document.getElementById("sec-effects-mgmt");if(j){let O=0,W=ne=>{ne.preventDefault(),O++,j.classList.add("is-drag")},G=ne=>{ne.preventDefault()},Z=ne=>{ne.preventDefault(),O=Math.max(0,O-1),O===0&&j.classList.remove("is-drag")},le=async ne=>{ne.preventDefault(),O=0,j.classList.remove("is-drag");let J=ne.dataTransfer?.files?.[0];if(J){if(!/\.(dme|dme\.zip)$/i.test(J.name)){h(y.t("fxToastBadExt"),!1);return}await _(J)}};j.addEventListener("dragenter",W),j.addEventListener("dragover",G),j.addEventListener("dragleave",Z),j.addEventListener("drop",le)}}function s(_){let B=(_||"").toLowerCase();return B.startsWith("glow")||B.includes("neon")?"GLOW":B.startsWith("shake")?"SHAKE":B.startsWith("wave")||B.startsWith("spin")||B.startsWith("bounce")||B.startsWith("zoom")||B.startsWith("fire")||B.includes("motion")?"MOTION":B.startsWith("rainbow")||B.startsWith("blink")||B.includes("color")?"COLOR":B.startsWith("type")||B.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function l(){let _=document.getElementById("effectsList");if(_)try{let B=await g("/admin/effects");if(!B.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsLoadFailed")+"</span>";return}let R=await B.json();e.all=R.effects||[],a(),o()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsNetworkError")+"</span>"}}function a(){let _=document.getElementById("effectsFilterRow");if(!_)return;let B={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(G=>{B[s(G.name)]+=1});let R=e.all.length,j=[["ALL",y.t("fxChipAll"),R],["GLOW",y.t("fxCatGlow"),B.GLOW],["MOTION",y.t("fxCatMotion"),B.MOTION],["COLOR",y.t("fxCatColor"),B.COLOR],["SHAKE",y.t("fxCatShake"),B.SHAKE],["TEXT",y.t("fxCatText"),B.TEXT]];B.MISC>0&&j.push(["MISC",y.t("fxCatMisc"),B.MISC]);let O=j.map(([G,Z,le])=>`<span class="hud-filter-chip ${e.filter===G?"is-active":""}" data-effect-filter="${G}">${Z} ${le}</span>`).join(""),W=_.querySelector("[data-toolbar-spacer]");W?(_.querySelectorAll("[data-effect-filter]").forEach(G=>G.remove()),W.insertAdjacentHTML("beforebegin",O)):_.innerHTML=O,_.querySelectorAll("[data-effect-filter]").forEach(G=>{G.addEventListener("click",()=>{e.filter=G.dataset.effectFilter,a(),o()})})}function d(_){let B=(G,Z)=>{let le=document.querySelector(G);le&&(le.textContent=Z==null?"\u2014":String(Z))},R=_.length,j=_.filter(G=>G.enabled!==!1).length,O=new Set(_.map(G=>s(G.name))),W=_.filter(G=>!m[G.name]).length;B("[data-eflib-total]",R),B("[data-eflib-active]",j),B("[data-eflib-cats]",O.size),B("[data-eflib-user]",W)}function o(){let _=document.getElementById("effectsList");if(!_)return;let B=e.all;d(B);let R=e.filter==="ALL"?B:B.filter(j=>s(j.name)===e.filter);if(!R.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(B.length?y.t("fxNoFilterMatch"):y.t("noEffectsLoaded"))+"</span>";return}E&&E.disconnect(),_.innerHTML="",R.forEach(j=>{let O=s(j.name),W=O==="GLOW"?"is-glow":O==="COLOR"?"is-color":O==="TEXT"?"is-text":"",G=m[j.name]||"",Z=!!G,le=document.createElement("div");le.className="hud-effect-card"+(e.selected===j.name?" is-selected":""),le.dataset.effectName=j.name,le.title=[j.description,`file: ${j.filename}`].filter(Boolean).join(`
`);var ne="effect_"+j.name;let J=y.t(ne)!==ne?y.t(ne):j.label||j.name,ee=Z?"built-in":"user",K=G?`animation:${G};animation-play-state:paused;`:"";if(le.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(y.t("fxCat"+O.charAt(0)+O.slice(1).toLowerCase())||O)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${W}"><span class="effect-demo-text" style="${K}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(J)}</div>
          <div class="hud-effect-card-meta">${t(ee)} \xB7 ${t(j.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${y.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${y.t("lbDelete")}</button>
        </div>
      `,_.appendChild(le),G){let se=S();se&&se.observe(le)}else{let se=M.get(j.name);se&&se!=="failed"?(x(se),N(le,se)):se!=="failed"&&k(j.name).then(de=>{if(!de)return;let ce=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(j.name)}"]`);ce&&N(ce,de)})}le.addEventListener("click",se=>{se.target.closest("[data-role]")||p(j)});let Y=le.querySelector('[data-role="edit"]'),te=le.querySelector('[data-role="delete"]');Y.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),de=document.getElementById("effectEditModalTitle"),ce=document.getElementById("effectEditModalFile"),ue=document.getElementById("effectEditModalTextarea"),Ee=document.getElementById("effectEditModalSave");if(!se)return;A=document.activeElement instanceof HTMLElement?document.activeElement:null,de.textContent=j.label||j.name,ce.textContent=j.filename,ue.value=y.t("effectLoadContent"),ue.disabled=!0,Ee.disabled=!0,se.dataset.effectName=j.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",F),ue.focus();let ke=document.getElementById("effectPreviewText"),Ae=document.getElementById("effectPreviewStyle"),re=document.getElementById("effectPreviewError"),ie=document.getElementById("effectPreviewParams");ke&&(ke.style.animation="none"),Ae&&(Ae.textContent=""),re&&re.classList.add("hidden"),ie&&(ie.innerHTML="");try{let H=await g(`/admin/effects/${encodeURIComponent(j.name)}/content`),V=await H.json().catch(()=>({}));H.ok?(ue.value=V.content||"",ue.disabled=!1,Ee.disabled=!1,ue.focus(),P(ue.value),w()):(ue.value=V.error||y.t("effectLoadContentFailed"),h(V.error||y.t("effectLoadContentFailed"),!1))}catch{ue.value=y.t("effectsNetworkError"),h(y.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let se=j.label||j.name;if(await window.HudConfirm?.open({icon:"\u2297",title:y.t("fxDeleteTitle"),subtitle:y.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${y.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${y.t("fxDeleteWarn")}
                </div>`,confirmLabel:y.t("fxDeleteConfirm"),cancelLabel:y.t("cancel"),width:400}))try{let ce=await g("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j.name})}),ue=await ce.json().catch(()=>({}));ce.ok?(h(ue.message||y.t("effectDeleteFallback"),!0),await l()):h(ue.error||y.t("deleteFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}})})}function t(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(_){let B={name:"",label:"",description:"",params:[]};if(!_)return B;let R=_.split(`
`),j="top",O=null;for(let W of R){let G=W.replace(/\r$/,""),Z=G.trimStart();if(!Z||Z.startsWith("#"))continue;let le=G.length-Z.length;if(le===0){if(j="top",O&&(B.params.push(O),O=null),Z==="params:"){j="params";continue}let ne=Z.match(/^([a-z_]+):\s*(.+)$/);ne&&(ne[1]==="name"?B.name=ne[2].trim():ne[1]==="label"?B.label=ne[2].trim():ne[1]==="description"&&(B.description=ne[2].trim()));continue}if(!(j!=="params"&&j!=="param-fields"&&j!=="options")){if(le===2&&(j==="params"||j==="param-fields"||j==="options")){O&&(B.params.push(O),O=null);let ne=Z.match(/^(\w+):$/);ne&&(O={key:ne[1]},j="param-fields");continue}if(le===4&&j==="param-fields"&&O){let ne=Z.match(/^(\w+):\s*(.*)$/);if(ne){let J=ne[1],ee=ne[2].trim();J==="label"?O.label=ee:J==="type"?O.type=ee:J==="default"?O.default=ee:J==="min"?O.min=parseFloat(ee):J==="max"?O.max=parseFloat(ee):J==="step"?O.step=parseFloat(ee):J==="options"&&(O.options=[],j="options")}continue}if(j==="options"&&O&&le>=6){let ne=Z.match(/^-\s*value:\s*(.+)$/);ne&&(O.options||(O.options=[]),O.options.push({value:ne[1].trim(),label:ne[1].trim()}));let J=Z.match(/^label:\s*(.+)$/);J&&O.options&&O.options.length>0&&(O.options[O.options.length-1].label=J[1].trim())}}}return O&&B.params.push(O),B}function b(_,B){let R=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),j=R?R[1]:"",O=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),W=O?O[1].trim():"";for(let G of B.params){let Z=G.default!==void 0?G.default:"",le=new RegExp(`\\{${G.key}\\}`,"g");j=j.replace(le,Z),W=W.replace(le,Z)}return{keyframes:j,animation:W}}function n(_,B){if(_==="COLOR"){let R=B.find(j=>j.key==="duration");if(R&&R.default){let j=parseFloat(R.default);if(j<.25)return"crimson";if(j<.33)return"amber"}}if(_==="MOTION"){let R=B.find(j=>j.key==="height");if(R&&R.default){let j=parseFloat(R.default);if(j>30)return"crimson";if(j>24)return"amber"}}return"lime"}function i(_,B){return _==="COLOR"?B==="crimson"?y.t("fxHintFlashBlock"):B==="amber"?y.t("fxHintFlashWarn"):y.t("fxHintFlashOk"):B==="crimson"?y.t("fxHintAmpBlock"):B==="amber"?y.t("fxHintAmpWarn"):y.t("fxHintAmpOk")}function r(_,B){let R=u(B),{keyframes:j,animation:O}=b(B,R),W=s(_.name),G=R.params.filter(ue=>ue.type!=="select"),Z=R.params.filter(ue=>ue.type==="select"),le=n(W,R.params),ne=le==="crimson"?"BLOCK":le==="amber"?"WARN":"OK",J=i(W,le),ee="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),K=j&&O?f(ee,j):"",Y=O?`animation:${O};animation-play-state:running;`:"",te=G.map(ue=>{let Ee=parseFloat(ue.default)||0,ke=ue.min??0,Ae=ue.max??100,re=Math.max(0,Math.min(100,(Ee-ke)/(Ae-ke)*100)),ie=(ue.label||"").match(/\(([^)]+)\)$/),H=ie?ie[1]:"",V=ue.label||ue.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(V)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Ee}<span style="color:var(--color-text-muted);margin-left:2px">${t(H)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${re}%"></div>
          <div class="fx-slider-knob" style="left:${re}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${ke}${t(H)}</span><span>${Ae}${t(H)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${y.t("fxNoNumericParams")}</span>`,se=Z.map(ue=>{let Ee=ue.options||[],ke=String(ue.default||""),Ae=Ee.map(re=>`<span class="fx-radio-btn${re.value===ke||re.label===ke?" is-active":""}">${t(re.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(ue.label||ue.key)}</div>
        <div class="fx-radio-group">${Ae||"<span>\u2014</span>"}</div>
      </div>`}).join(""),de=["dark","light","photo"].map(ue=>{let Ee=ue==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ue}">
        <span class="fx-preview-bg-label">${ue.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Y}color:${Ee}">ABC</span>
      </div>`}).join(""),ce=`${K}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${y.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${te}</div>
      </div>`;return se&&(ce+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),ce+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${de}</div>
      </div>
      <div class="fx-warn-box${le!=="lime"?" is-"+le:""}">
        <span class="fx-warn-chip${le!=="lime"?" is-"+le:""}">${ne}</span>
        <span class="fx-warn-text">${t(J)}</span>
      </div>
    </div>`,ce}async function p(_){e.selected=_.name;let B=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),j=document.getElementById("effectsInspectorKicker"),O=document.getElementById("effectsInspectorBody");if(B){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=_.label||_.name),j&&(j.textContent="LOADING"),O&&(O.className="hud-inspector-body",O.textContent="# "+y.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(W=>{W.classList.toggle("is-selected",W.dataset.effectName===_.name)});try{let W=await g(`/admin/effects/${encodeURIComponent(_.name)}/content`),G=await W.json().catch(()=>({}));if(W.ok){let Z=G.content||"";O&&(O.className="hud-inspector-body has-param-panel",O.innerHTML=r(_,Z)),j&&(j.textContent=s(_.name))}else O&&(O.className="hud-inspector-body",O.textContent="# "+(G.error||y.t("effectLoadContentFailed"))),j&&(j.textContent="ERROR")}catch{O&&(O.className="hud-inspector-body",O.textContent="# "+y.t("effectsNetworkError")),j&&(j.textContent="NETWORK")}}}function T(){let _=document.getElementById("effectsInspectorReload"),B=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!e.selected){h(y.t("fxSelectFirst"),!1);return}let R=e.all.find(j=>j.name===e.selected);R&&await p(R)}),B?.addEventListener("click",()=>{if(!e.selected){h(y.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",T())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var ut=ge(()=>{(function(){"use strict";var g={};window.DanmuEvents={on:function(h,y){g[h]||(g[h]=[]),g[h].push(y)},off:function(h,y){g[h]=(g[h]||[]).filter(function(f){return f!==y})},emit:function(h,y){(g[h]||[]).forEach(function(f){f(y)})}}})()});var mt=ge(()=>{(function(){"use strict";let g="sec-events",h="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},A={events:[],filterSev:"all",filterCat:"all",timer:0};function U($){let w=($.source||$.kind||"").toLowerCase(),v=($.action||"").toLowerCase();return w.includes("plugin")||v.includes("plugin")?"plugin":w.includes("webhook")||v.includes("webhook")?"webhook":w.includes("rate")||v.includes("rate")||v.includes("limit")?"rate":w.includes("filter")||v.includes("filter")?"filter":w.includes("overlay")||v.includes("overlay")||w==="broadcast"?"overlay":w.includes("backup")||v.includes("backup")?"backup":w.includes("msg")||w==="messaging"?"msg":w.includes("ws")||w==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,C=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m($){let w=($.action||$.kind||"").toLowerCase();return $.severity?$.severity:F.test(w)?"error":C.test(w)?"warn":"info"}function M($){let w=$.source||"system",v=$.action||$.kind||"";return v?`${w.toUpperCase()}_${v.toUpperCase()}`:w.toUpperCase()}function D($){if(!$)return"\u2014";let w=new Date($*1e3),v=c=>String(c).padStart(2,"0");return`${v(w.getHours())}:${v(w.getMinutes())}:${v(w.getSeconds())}`}function x($){if($.message)return $.message;let w=$.meta||{},v=[];if(w.from&&w.to)v.push(`${w.from} \u2192 ${w.to}`);else if(w.text_preview)v.push(`"${w.text_preview.slice(0,60)}"`);else if(Object.keys(w).length){let c=Object.keys(w).slice(0,3);for(let s of c)v.push(`${s}=${JSON.stringify(w[s]).slice(0,30)}`)}return v.length?v.join(" \xB7 "):`${$.source||"system"}.${$.action||$.kind||"?"}`}function k(){return`
      <div id="${g}" class="admin-ev-v4 hud-page-stack lg:col-span-2" style="display:none">
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
      </div>`}function N(){let $=document.querySelector("[data-ev-rows]");if(!$)return;let w=A.events,v=w.filter(e=>!(A.filterSev!=="all"&&m(e)!==A.filterSev||A.filterCat!=="all"&&U(e)!==A.filterCat));v.length===0?($.innerHTML="",window.AdminEmpty?$.appendChild(window.AdminEmpty.render("events")):$.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):$.innerHTML=v.map(e=>{let l=m(e);return`
          <div class="admin-ev-v4__row" data-sev="${l}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(D(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${l}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${l}">${f(M(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(x(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:w.length,info:0,warn:0,error:0};for(let e of w)c[m(e)]+=1;Object.keys(c).forEach(e=>{let l=document.querySelector(`[data-ev-cnt="${e}"]`);l&&(l.textContent=String(c[e]))});let s=document.querySelector("[data-ev-total]");s&&(s.textContent=`${v.length} / ${w.length}`)}async function E(){try{let $=await fetch(h,{credentials:"same-origin"});if(!$.ok)return;let w=await $.json();A.events=Array.isArray(w.events)?w.events:[],N()}catch{}}function S(){let $=document.getElementById(g);$&&$.addEventListener("click",w=>{let v=w.target.closest("[data-ev-sev]");if(v){$.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===v)),A.filterSev=v.dataset.evSev,N();return}let c=w.target.closest("[data-ev-cat]");if(c){$.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===c)),A.filterCat=c.dataset.evCat,N();return}let s=w.target.closest("[data-ev-action]");if(s){if(s.dataset.evAction==="refresh")E();else if(s.dataset.evAction==="export"){let e=new Blob([JSON.stringify(A.events,null,2)],{type:"application/json"}),l=URL.createObjectURL(e),a=document.createElement("a");a.href=l,a.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(l),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function L(){let $=document.querySelector(".admin-dash-grid"),w=document.getElementById(g);if(!w)return;let c=($?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";w.style.display=c?"":"none",c?(E(),A.timer||(A.timer=setInterval(E,15e3))):A.timer&&(clearInterval(A.timer),A.timer=0)}function P(){let $=document.getElementById("settings-grid");!$||document.getElementById(g)||($.insertAdjacentHTML("beforeend",k()),S(),L())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&P(),L()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",L),document.addEventListener("admin-panel-rendered",()=>{P(),L()}),P()})})()});var pt=ge(()=>{(function(){"use strict";let g="sec-modqueue",h="/admin/modqueue/list",A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(v){return String(v).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},U={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},C={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(v){let c=0,s=String(v||"");for(let e=0;e<s.length;e++)c=c*31+s.charCodeAt(e)&65535;return c%360}function M(v){if(!v.created_at_ms)return null;let c=(Date.now()-v.created_at_ms)/1e3,s=Math.max(0,U.autoRejectSec-c);return Math.ceil(s)}function D(v,c){let s=(v.severity||"low").toLowerCase(),e=F[s]||F.low,l=m(v.fp),a=String(v.fp||"\u2014").slice(0,8),d=v.nick||v.nickname||ServerI18n.t("audienceAnonymous"),o=(d||"?").slice(0,2).toUpperCase(),t=c==="pending"?M(v):null,u=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${A(v.id||"")}">${A(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${A(v.id||"")}">${A(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${A(v.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",b=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${A(ServerI18n.t("modqueueStampApproved"))} \xB7 ${A(v.resolved_by||"admin")} \xB7 ${A(v.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${v.auto_rejected?`${A(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${A(ServerI18n.t("modqueueAutoRejectTimeout",{n:U.autoRejectSec}))}`:`${A(ServerI18n.t("modqueueStampRejected"))} \xB7 ${A(v.resolved_by||"admin")} \xB7 ${A(v.resolved_ago||"")}`}
        </div>`:"",n=c==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${A(v.id||"")}" data-mq-sev="${A(s)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${l})">${A(o)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${A(d)}</div>
            <div class="admin-mq-card__fp">fp:${A(a)}</div>
          </div>
          <div class="admin-mq-card__time">${A(v.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${A(v.content||v.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${A(ServerI18n.t(C[s]||C.low))}</span>
          <span class="admin-mq-card__rule">${A(ServerI18n.t("modqueueRuleLabel"))}: ${A(v.rule||v.matched_rule||"?")}</span>
          ${n}
        </div>
        ${u}
        ${b}
      </div>`}function x(v,c,s){v&&(v.innerHTML=c.map(e=>D(e,s)).join(""))}function k(){let v=document.getElementById(g);if(!v)return;v.querySelectorAll("[data-mq-bulk]").forEach(s=>{s.disabled=!0}),v.querySelector(".admin-mq__body").hidden=!0;let c=v.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let v=document.getElementById(g);if(!v)return;if(U.pending.length+U.approved.length+U.rejected.length===0){k();return}v.querySelector(".admin-mq__body").hidden=!1;let s=v.querySelector("[data-mq-empty]");s&&(s.hidden=!0),x(v.querySelector("[data-mq-col-pending]"),U.pending,"pending"),x(v.querySelector("[data-mq-col-approved]"),U.approved,"approved"),x(v.querySelector("[data-mq-col-rejected]"),U.rejected,"rejected");let e=(o,t)=>{v.querySelectorAll(o).forEach(u=>{u.textContent=String(t)})};e("[data-mq-cnt-pending]",U.pending.length),e("[data-mq-cnt-approved]",U.approved.length),e("[data-mq-cnt-rejected]",U.rejected.length);let l=U.pending.length===0;v.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=l});let a=U.pending[U.pending.length-1],d=v.querySelector("[data-mq-oldest]");if(d){let o=a?M(a):null;d.textContent=o!=null?`oldest: ${o}s`:""}e("[data-mq-throughput]",U.stats.throughput.toFixed?U.stats.throughput.toFixed(1):U.stats.throughput),e("[data-mq-avg-review]",U.stats.avg_review_sec.toFixed?U.stats.avg_review_sec.toFixed(1):U.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(U.stats.auto_reject_pct||0)+"%")}async function E(){try{let v=await fetch(h,{credentials:"same-origin"});if(!v.ok){U.pending=[],U.approved=[],U.rejected=[],N();return}let c=await v.json();U.pending=Array.isArray(c.pending)?c.pending:[],U.approved=Array.isArray(c.approved)?c.approved:[],U.rejected=Array.isArray(c.rejected)?c.rejected:[],U.stats=c.stats||U.stats,typeof c.auto_reject_sec=="number"&&(U.autoRejectSec=c.auto_reject_sec),N()}catch{}}async function S(v,c,s){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:v,...s||{}})});if(e.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),E();else{let l=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:l.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function L(){return`
      <div id="${g}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function P(){let v=document.getElementById(g);v&&v.addEventListener("click",async c=>{let s=c.target.closest("[data-mq-action]");if(s){let l=s.dataset.mqId,a=s.dataset.mqAction;(a==="approve"||a==="reject")&&S(l,a);return}let e=c.target.closest("[data-mq-bulk]");if(e){let l=e.dataset.mqBulk,a=l==="approve-low";if(!await window.HudConfirm?.open({icon:a?"\u2713":"\u2298",title:a?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:a?"warn":"danger",body:a?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:a?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let o=l.startsWith("approve")?"approve":"reject",t=l.endsWith("low")?"low":"high";S(null,"bulk",{action:o,severity:t})}})}function $(){let v=document.querySelector(".admin-dash-grid"),c=document.getElementById(g);if(!c)return;let s=(location.hash||"").replace("#/","").split("/"),e=v?.dataset.activeRoute||s[0]||"",l=v?.dataset.activeLeaf||s[1]||"",a=e==="modqueue"||e==="moderation"&&(l==="queue"||l===""||l==="moderation");c.style.display=a?"":"none",a?(U.timer||(E(),U.timer=setInterval(E,4e3)),U.countdownTimer||(U.countdownTimer=setInterval(N,1e3))):(U.timer&&(clearInterval(U.timer),U.timer=0),U.countdownTimer&&(clearInterval(U.countdownTimer),U.countdownTimer=0))}function w(){let v=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!v||document.getElementById(g)||(v.insertAdjacentHTML("beforeend",L()),P(),$())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(g)&&w(),$()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",$),document.addEventListener("admin-panel-rendered",()=>{w(),$()}),w()})})()});var vt=ge(()=>{(function(){"use strict";let g="sec-modbans-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(L){return String(L).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},y=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},A={fingerprint:"FP",ip:"IP",nick:"NICK"},U={rows:[],refreshTimer:0};async function F(){try{let L=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!L.ok)return;let P=await L.json();U.rows=Array.isArray(P.bans)?P.bans:[],M()}catch{}}function C(L){if(!L||L<=0)return"\u2014";let P=Math.floor(L/86400),$=Math.floor(L%86400/3600),w=Math.floor(L%3600/60);return P>0?`${P}d ${$}h`:$>0?`${$}h ${w}m`:`${w}m`}function m(L){let P=L.target_kind;return P==="fingerprint"?`fp:${(L.target||"").slice(0,8)}`:P==="nick"?`@${L.target}`:L.target||"\u2014"}function M(){let L=document.querySelector("[data-modbans-list]");if(!L)return;let P=U.rows||[],$=document.querySelector("[data-modbans-count]");if($&&($.textContent=String(P.length)),P.length===0){L.innerHTML="";let w=window.AdminEmpty.render("blacklist");w.dataset.emptyKind="modbans",L.appendChild(w);return}L.innerHTML=P.map(function(w){let v=w.status==="expired",c=w.status==="permanent",s="admin-modbans-chip is-"+w.status,e=c?ServerI18n.t("modbansPermanent"):v?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:C(w.remaining_s)}),l=encodeURIComponent(w.target_kind)+"|"+encodeURIComponent(w.target);return`
        <div class="admin-modbans-row ${v?"is-expired":""}">
          <span class="admin-modbans-target">${h(m(w))}</span>
          <span class="admin-modbans-kind">${h(A[w.target_kind]||w.target_kind)}</span>
          <span class="admin-modbans-reason">${h(w.reason||"\u2014")}</span>
          <span class="${s}">
            ${w.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${h(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${l}"
            ${v?"disabled":""}
            title="${v?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${v?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(L){let P=L||{},$=P.kind||"ban",w=window.HudConfirm,v=!P.target,c=P.target_kind||"fingerprint",s=P.target||"";return new Promise(function(e){if(!w){e(!1);return}let l=86400,a=!1,d=12,o="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${h(f[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${h(A[c]||"?")} ${h(($||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${h(s?m({target_kind:c,target:s}):"\u2014")}</div>
          </div>
        </div>
        ${v?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(ne){return`<button type="button" class="admin-modbans-modal-preset${ne===c?" is-active":""}"
                data-modbans-target-kind="${ne}">${h(f[ne])} ${h(A[ne])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${y.map(function(ne){return`<button type="button" class="${"admin-modbans-modal-preset"+(ne.defaultPick?" is-active":"")+(ne.permanent?" is-permanent":"")}" data-modbans-duration="${ne.val}">${ne.labelKey?ServerI18n.t(ne.labelKey):ne.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let u=t.querySelector("[data-modbans-custom-row]"),b=t.querySelector("[data-modbans-custom-input]"),n=t.querySelector("[data-modbans-custom-seconds]"),i=t.querySelector("[data-modbans-when]"),r=t.querySelector("[data-modbans-custom]"),p=t.querySelector("[data-modbans-target]"),T=t.querySelector("[data-modbans-target-icon]"),I=t.querySelector("[data-modbans-target-label]"),_=t.querySelector("[data-modbans-target-val]"),B=function(){T.textContent=f[c]||"?",I.textContent=`${A[c]||"?"} ${($||"ban").toUpperCase()}`,_.textContent=s?m({target_kind:c,target:s}):"\u2014"},R=function(){return Math.max(1,parseInt(b.value,10)||1)*(o==="day"?86400:3600)},j=function(){if(l===0){i.textContent=ServerI18n.t("modbansWhenPermanent"),i.classList.remove("is-custom");return}let ne=new Date(Date.now()+l*1e3),J=K=>String(K).padStart(2,"0"),ee=`${ne.getFullYear()}-${J(ne.getMonth()+1)}-${J(ne.getDate())} ${J(ne.getHours())}:${J(ne.getMinutes())}`;a?(i.textContent=ServerI18n.t("modbansWhenCustom",{n:d,unit:ServerI18n.t(o==="day"?"modbansDay":"modbansHour"),stamp:ee}),i.classList.add("is-custom")):(i.textContent=ServerI18n.t("modbansWhenPreset",{dur:C(l),stamp:ee}),i.classList.remove("is-custom"))},O=function(){let ne=R();n.textContent=`= ${ne.toLocaleString()}s`,a&&(d=Math.max(1,parseInt(b.value,10)||1),l=ne,j())},W=t.querySelector("[data-modbans-presets]"),G=function(){a=!0,u.hidden=!1,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(ne){ne.classList.toggle("is-active",ne===r)}),O()},Z=function(ne){a=!1,u.hidden=!0,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===ne)})};B(),j(),O(),t.addEventListener("click",function(ne){let J=ne.target.closest("[data-modbans-target-kind]");if(J){c=J.dataset.modbansTargetKind,J.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Y){Y.classList.toggle("is-active",Y===J)}),B();return}if(ne.target.closest("[data-modbans-custom]")){G();return}let ee=ne.target.closest("[data-modbans-custom-unit]");if(ee){o=ee.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Y){Y.classList.toggle("is-active",Y===ee)}),O();return}let K=ne.target.closest("[data-modbans-duration]");K&&(l=parseInt(K.dataset.modbansDuration,10)||0,Z(K),j())}),b.addEventListener("input",O),p&&p.addEventListener("input",function(){s=p.value.trim(),B()});let le=t.querySelector("[data-modbans-reason]");w.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(ne){if(!ne){e(!1);return}if(!s){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}l===0?w.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${h(m({target_kind:c,target:s}))}</b>`})}).then(function(J){if(!J){e(!1);return}x(c,s,l,le.value.trim(),$).then(e)}):x(c,s,l,le.value.trim(),$).then(e)})})}async function x(L,P,$,w,v){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:L,target:P,duration_s:$,reason:w||"",kind:v||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast($===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:C($)}),!0),F(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function k(L){let P=(L||"").split("|");if(P.length!==2)return;let $=decodeURIComponent(P[0]),w=decodeURIComponent(P[1]);try{let v=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:$,target:w})});if(!v.ok)throw new Error(`HTTP ${v.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(v){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:v.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
      <div id="${g}" class="admin-modbans-page hud-page-stack lg:col-span-2">
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
      </div>`}function E(){let L=document.getElementById(g);if(!L||L.dataset.modbansBound==="1")return;L.dataset.modbansBound="1",L.addEventListener("click",function($){if($.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let w=$.target.closest("[data-modbans-unban]");w&&!w.disabled&&k(w.dataset.modbansUnban)});let P=L.querySelector("[data-modbans-list]");P&&window.AdminSkeletons&&!P.children.length&&P.appendChild(window.AdminSkeletons.listRows({rows:4}))}function S(){let L=document.getElementById("settings-grid");!L||document.getElementById(g)||(L.insertAdjacentHTML("beforeend",N()),E(),F(),U.refreshTimer||(U.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&S()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:m,formatRemaining:C}})()});var ft=ge(()=>{(function(){"use strict";let g="admin-mobile-nav-root",h=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],y=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},A=!1,U=0;function F(){return`
      <nav id="${g}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${y.map(E=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${E.route}">
              <span class="admin-mobile-nav__o-icon">${E.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${E.labelKey?ServerI18n.t(E.labelKey):E.label}</span>
                <span class="admin-mobile-nav__o-desc">${E.descKey?ServerI18n.t(E.descKey):E.desc||""}</span>
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
          ${h.map(E=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${E.id}" data-mn-route="${E.route||""}" ${E.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${E.icon}</span>
              <span class="admin-mobile-nav__label">${E.labelKey?ServerI18n.t(E.labelKey):E.label}</span>
              ${E.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${E.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function C(){let E=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",S=f[E]||E;return h.some(L=>L.id===S)?S:y.some(L=>L.route===S)?"more":""}function m(){let E=document.getElementById(g);if(!E)return;let S=C();E.querySelectorAll("[data-mn-tab]").forEach(L=>{L.classList.toggle("is-active",L.dataset.mnTab===S),L.dataset.mnTab!=="more"&&L.setAttribute("aria-current",L.dataset.mnTab===S?"page":"false")})}function M(E){let S=document.getElementById(g);if(!S)return;A=E,S.dataset.overflow=E?"open":"closed",S.querySelector("[data-mn-overflow]").hidden=!E,S.querySelector("[data-mn-backdrop]").hidden=!E;let L=S.querySelector("[data-mn-tab='more']");L?.classList.toggle("is-active",E),L?.setAttribute("aria-expanded",E?"true":"false")}function D(E){if(E.target.closest("[data-mn-backdrop]")){M(!1);return}if(E.target.closest("[data-mn-logout]")){M(!1);let P=document.getElementById("logoutButton");P&&P.click();return}let S=E.target.closest("[data-mn-tab]");if(S){if(S.dataset.mnTab==="more"){M(!A);return}M(!1),S.dataset.mnRoute&&(location.hash="#/"+S.dataset.mnRoute);return}let L=E.target.closest("[data-mn-route]");L&&L.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+L.dataset.mnRoute)}async function x(){try{let E=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!E.ok)return;let S=await E.json(),L=Array.isArray(S.pending)?S.pending.length:0;U=L;let P=document.querySelector("[data-mn-badge='pending']");if(!P)return;P.textContent=String(L),P.hidden=!(L>0)}catch{}}function k(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let E=0;function S(){let L=document.activeElement,P=L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!P)}document.addEventListener("focusin",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(S)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(()=>setTimeout(S,50))})}function N(){document.getElementById(g)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{M(!1),m()}),m(),x(),setInterval(x,8e3),k())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var ht=ge(()=>{(function(){"use strict";var g="admin-session-expired-root",h=!1,y=null;function f(m,M){try{var D=window.ServerI18n&&ServerI18n.t(m);return D&&D!==m?D:M}catch{return M}}function A(){var m=document.getElementById(g);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),h=!1,y&&y.focus)try{y.focus()}catch{}y=null}function U(m){if(m.key==="Tab"){var M=document.getElementById(g);if(M){var D=M.querySelectorAll("input, button");if(D.length){var x=D[0],k=D[D.length-1];m.shiftKey&&document.activeElement===x?(m.preventDefault(),k.focus()):!m.shiftKey&&document.activeElement===k&&(m.preventDefault(),x.focus())}}}}function F(){if(!(h||document.getElementById(g))){h=!0,y=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=g,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",U,!0);var M=m.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),C(m,M)})}}function C(m,M){var D=m.querySelector("[data-sx-error]"),x=m.querySelector(".admin-sx__submit");D.hidden=!0,x.disabled=!0;var k=new URLSearchParams;k.set("password",M.value),m.querySelector("#admin-sx-remember").checked&&k.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:k.toString()}).then(function(E){return E.json().then(function(S){return{status:E.status,data:S}},function(){return{status:E.status,data:{}}})}).then(function(E){if(x.disabled=!1,E.status===200&&E.data&&E.data.ok){var S=document.querySelector('meta[name="csrf-token"]');S&&E.data.csrf_token&&(S.content=E.data.csrf_token),document.removeEventListener("keydown",U,!0),A(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}E.status===429?D.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,M.select()}).catch(function(){x.disabled=!1,D.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:A,isOpen:function(){return h}}})()});var gt=ge(()=>{(function(){"use strict";let g="admin-reconnect-banner",A=0,U=0,F="ok",C=0,m=5e3,M=!1,D=0;function x(s){if(F!==s){if(F=s,s==="ok"||s==="dismissed"){N(),s==="ok"&&(A=0,U=0,m=5e3);return}k()}}function k(){let s=document.getElementById(g);s||(s=document.createElement("div"),s.id=g,s.className="admin-rcb",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),document.body.insertBefore(s,document.body.firstChild)),s.dataset.state=F;let e=F==="exhausted",l=e?"admin-rcb--crimson":"admin-rcb--amber";s.className=`admin-rcb ${l}`,s.innerHTML=e?S():E(),s.querySelector("[data-rcb-action='retry']")?.addEventListener("click",P),s.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>x("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),D||(D=setInterval(L,250))}function N(){let s=document.getElementById(g);s&&s.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function E(){let s=Math.max(0,(C-Date.now())/1e3),e=m/1e3,l=Math.min(100,(e-s)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:U})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${l}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function S(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function L(){if(F!=="reconnecting")return;let s=document.getElementById(g);if(!s)return;let e=Math.max(0,(C-Date.now())/1e3),l=m/1e3,a=Math.min(100,(l-e)/l*100),d=s.querySelector(".admin-rcb__progress-fill");d&&(d.style.width=a+"%")}function P(){U=0,A=0,m=5e3,x("reconnecting"),$()}async function $(){try{let s=await fetch("/admin/bootstrap",{credentials:"same-origin"});s.ok?w():s.status===401||s.status===403?x("ok"):v()}catch{v()}}function w(){x("ok")}function v(){if(A+=1,U+=1,U>=10){x("exhausted");return}A>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,U-1))),C=Date.now()+m,x("reconnecting"),setTimeout($,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let s=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{M=!1,w()});async function l(a){try{let d=await a;return d&&d.ok?F!=="ok"&&F!=="dismissed"&&w():d&&d.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):d&&d.status>=500&&v(),d}catch(d){throw v(),d}}typeof s=="function"&&(window.csrfFetch=function(){return l(s.apply(this,arguments))}),window.fetch=function(a,d){let o=typeof a=="string"?a:a&&a.url||"",t=e.call(this,a,d);return o.startsWith("/admin/")||o.indexOf("//")===-1&&o.startsWith("admin/")?l(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var bt=ge(()=>{(function(){"use strict";let g="admin-help-drawer-root",h={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},y=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function A(E){return E==null?"":String(E).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})}function U(){let E=(location.hash||"").replace("#/","").split("/")[0]||"";return h[E]?E:"_default"}function F(){return`
      <div id="${g}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function C(){let E=h[U()],S=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",L=E.titleKey?ServerI18n.t(E.titleKey):E.title,P=E.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${A(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),$=E.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${A(ServerI18n.t(E.fieldTipKey))}</span>
      </div>`:"",w=y.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${A(c.term)}</div>
        <div class="admin-help__glossary-def">${A(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),v=f.map(c=>`
      <a class="admin-help__resource" href="${A(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${A(c.label)}</span>
        <span class="admin-help__resource-url">${A(c.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${A(L)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${P}</div>
          ${$}
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
          <div class="admin-help__glossary">${w}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${v}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${S?"v"+A(S):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let E=document.getElementById(g);E||(document.body.insertAdjacentHTML("beforeend",F()),E=document.getElementById(g),E.addEventListener("click",S=>{if(S.target.closest("[data-help-close]")){M();return}S.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),E.querySelector("[data-help-body]").innerHTML=C(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",x)}function M(){let E=document.getElementById(g);E&&E.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",x)}function D(){document.getElementById(g)?M():m()}function x(E){E.key==="Escape"&&(E.preventDefault(),M())}function k(E){let S=E.target;S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable)||E.key==="F1"&&(E.preventDefault(),D())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",k)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:m,close:M,toggle:D}})()});var yt=ge(()=>{(function(){"use strict";var g="admin-shortcuts-root",h=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function y(v,c){try{var s=window.ServerI18n&&ServerI18n.t(v);return s&&s!==v?s:c}catch{return c}}function f(v,c){window.showToast&&window.showToast(v,c!==!1)}function A(v,c){return(window.csrfFetch||window.fetch)(v,c||{})}function U(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function C(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function m(){var v="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(v=(await c.json()).state||"idle")}catch{}if(v==="idle"){location.hash="#/polls",f(y("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var s=v==="active";try{var e=await A(s?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);f(y(s?"ksToastPollEnded":"ksToastPollStarted",s?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(y("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(v){return h?v.metaKey:v.ctrlKey}var D=h?"\u2318":"Ctrl",x=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(v){return M(v)&&(v.key==="k"||v.key==="K")},run:U},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(v){return v.key==="?"&&!M(v)&&!v.altKey||v.key==="/"&&M(v)},run:function(){P()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(v){return M(v)&&v.shiftKey&&(v.key==="d"||v.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(v){return M(v)&&v.shiftKey&&v.key==="Backspace"},run:C},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(v){return!M(v)&&"jkJK".indexOf(v.key)>=0},run:function(v){window.AdminLiveFeed.moveFocus(v.key==="j"||v.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(v){return!M(v)&&(v.key==="b"||v.key==="B")},run:function(v){window.AdminLiveFeed.blockFocused(v.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(v){return!M(v)&&v.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(v){return!M(v)&&(v.key==="p"||v.key==="P")},run:m}];function k(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function N(v){return x.filter(function(c){return c.group===v}).map(function(c){var s=c.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+k(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+k(y(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+s+"</span></div>"}).join("")}function E(){var v=document.getElementById(g);v&&v.remove(),document.removeEventListener("keydown",S,!0)}function S(v){(v.key==="Escape"||v.key==="?")&&(v.preventDefault(),E())}function L(){if(!document.getElementById(g)){var v=document.createElement("div");v.id=g,v.className="admin-ks",v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-ks-title"),v.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+k(y("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+k(y("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+k(y("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+k(y("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+k(y("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(v),v.addEventListener("click",function(s){s.target.closest("[data-ks-close]")&&E()}),document.addEventListener("keydown",S,!0);var c=v.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function P(){document.getElementById(g)?E():L()}function $(v){if(!v)return!1;if(v.isContentEditable)return!0;var c=(v.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function w(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(v){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=$(document.activeElement),s=0;s<x.length;s++){var e=x[s];if(e.group==="feed"){if(c||!w())continue}else if(c&&!M(v))continue;if(e.match(v)){v.preventDefault(),e.run(v);return}}}),window.AdminShortcuts={open:L,close:E,toggle:P,list:function(){return x.slice()}}})()});var wt=ge(()=>{(function(){"use strict";let g="theme-mode",h="admin-theme-mode",y="admin-theme-toggle";(function(){try{if(localStorage.getItem(g)!=null)return;let k=localStorage.getItem(h);(k==="light"||k==="dark"||k==="auto")&&(localStorage.setItem(g,k),localStorage.removeItem(h))}catch{}})();function A(){try{let x=localStorage.getItem(g);if(x==="light"||x==="dark"||x==="auto")return x}catch{}return"auto"}function U(x){try{localStorage.setItem(g,x)}catch{}}function F(x){let k=document.documentElement;x==="auto"?k.removeAttribute("data-theme"):k.setAttribute("data-theme",x),m(x)}function C(x){return x==="light"||x==="dark"?x:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(x){let k=document.getElementById(y);if(!k)return;let N=C(x);k.dataset.mode=x,k.dataset.effective=N,k.textContent=x==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",k.title=x==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):x==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let x=A(),k=x==="auto"?"light":x==="light"?"dark":"auto";U(k),F(k)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let x=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,k=document.getElementById(y);if(k){x&&k.classList.contains("admin-theme-toggle--floating")&&x.parentNode&&!x.parentNode.contains(k)&&(k.classList.remove("admin-theme-toggle--floating"),x.parentNode.insertBefore(k,x));return}let N=document.createElement("button");N.id=y,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",M),x&&x.parentNode?x.parentNode.insertBefore(N,x):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),m(A())}if(F(A()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{A()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",x=>{x.key===g&&F(A())}),window.AdminThemeSwitcher={getMode:A,setMode:function(x){x!=="auto"&&x!=="light"&&x!=="dark"||(U(x),F(x),m(x),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:x}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var St=ge(()=>{(function(){"use strict";var g={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},h=[];window.DanmuStore={get:function(y){return g[y]},set:function(y,f){g[y]=f,h.forEach(function(A){A(y,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+y,f)},subscribe:function(y){h.push(y)},getAll:function(){return Object.assign({},g)}}})()});var kt=ge(()=>{(function(){"use strict";let y=0;function f(){return window.__adminCtx||{}}function A(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function U(){let m=A();if(m&&typeof m.OpsContact<"u"){let M=m.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function F(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${M?` \xB7 v${M}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let D=m.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let E=document.getElementById("password");if(!E)return;let S=E.type==="text";E.type=S?"password":"text",D.textContent=ServerI18n.t(S?"adminLoginReveal":"adminLoginHide");try{E.focus()}catch{}});let x=document.getElementById("loginForm"),k=document.getElementById("password"),N=document.getElementById("loginAttemptsHint");if(x){try{let E=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(E)&&E>0){y=E;let S=Math.max(0,5-y);if(N&&y>0&&S>0){N.hidden=!1;let L=document.getElementById("password");L&&L.classList.add("is-error"),N.textContent=ServerI18n.t("loginAttemptsRemaining",{n:S})}}}catch{}x.addEventListener("submit",async E=>{if(E.preventDefault(),!k)return;let S=new URLSearchParams;S.set("password",k.value),document.getElementById("admin-login-remember")?.checked&&S.set("remember","1");try{let L=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:S.toString(),redirect:"manual"});if(L.status===429){let P=L.headers.get("Retry-After"),$=parseInt(P,10),w=Number.isFinite($)&&$>0?$:300;C(w);return}y+=1;try{sessionStorage.setItem("admin_login_attempts",String(y))}catch{}window.location.reload()}catch(L){console.error("Login submit failed:",L),N&&(N.hidden=!1,N.textContent=ServerI18n.t("networkError"))}})}}function C(m){let M=document.getElementById("adminLoginCard");if(!M)return;let D=U(),x=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
        ${x}
      </div>
    `;let k=document.getElementById("lockoutCountdown"),N=m,E=L=>{let P=Math.floor(L/60),$=L%60;return`${String(P).padStart(2,"0")}:${String($).padStart(2,"0")}`};k&&(k.textContent=E(N));let S=setInterval(()=>{N-=1,k&&(k.textContent=E(Math.max(0,N))),N<=0&&(clearInterval(S),y=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:C}})()});var It=ge(()=>{(function(){"use strict";function g(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function h(n){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(n):String(n??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}async function y(){try{let n=g();await n.prime();let i=n.get("history_stats"),[r,p,T]=await Promise.all([i?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!p.ok)return;let I=i||(r&&r.ok?await r.json():null);if(!I)return;let _=(await p.json()).distribution||[],B=I.stats&&I.stats.total||0,R=_.reduce((ne,J)=>J.count>(ne?.count||-1)?J:ne,null),j=R?R.count:0,O=R?(R.hour||"").slice(-5):"\u2014",W=document.querySelector('[data-kpi="messages"]');W&&(W.querySelector("[data-kpi-value]").textContent=B.toLocaleString());let G=document.querySelector('[data-kpi="peak"]');G&&(G.querySelector("[data-kpi-value]").textContent=j.toLocaleString());let Z=document.querySelector('[data-kpi="unique-fp"]');if(Z){let ne=new Set;(I.records||[]).forEach(J=>{let ee=J.fingerprint||J.fp||J.user_fingerprint;ee&&ne.add(ee)}),Z.querySelector("[data-kpi-value]").textContent=ne.size.toLocaleString()}let le=document.querySelector('[data-kpi="session"]');if(le){let ne=T&&T.ok?await T.json():null,J=ne&&ne.status==="live",ee=le.querySelector("[data-kpi-value]");if(J&&ne.started_at){let K=Math.max(0,Math.floor(Date.now()/1e3-ne.started_at)),Y=Math.floor(K/3600),te=Math.floor(K%3600/60);ee.textContent=Y>0?`${Y}:${String(te).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`:`${te}:${String(K%60).padStart(2,"0")}`}else ee.textContent="\u2014"}}catch{}}function f(n,i){let r=document.querySelector(n);if(r){if(typeof i!="number"||i<=0){r.hidden=!0;return}r.hidden=!1,r.textContent=i>999?"999+":String(i)}}async function A(){try{let n=g();await n.prime();let i=n.get("blacklist"),r=n.get("widgets"),p=n.get("history_stats"),T=n.get("effects"),I=n.get("themes");f("[data-count-blacklist]",Array.isArray(i)?i.length:0),f("[data-count-widgets]",Array.isArray(r?.widgets)?r.widgets.length:0),f("[data-count-messages]",p?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(T?.effects)?T.effects.length:0),f("[data-count-themes]",Array.isArray(I?.themes)?I.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let B=await _.json();f("[data-count-plugins]",Array.isArray(B?.plugins)?B.plugins.length:0)}}catch{}}catch{}}async function U(){A(),F(),u()}async function F(){let n=document.querySelector("[data-dash-poll-body]"),i=document.querySelector("[data-dash-poll-timer]");if(n)try{let r=g();await r.prime();let T=r.get("metrics");if(!T){let j=await fetch("/admin/metrics",{credentials:"same-origin"});if(!j.ok)return;T=await j.json()}let I=T.poll_state;if(!I||!I.active||!Array.isArray(I.options)||I.options.length===0){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,i&&(i.textContent="");return}let _=I.options.reduce((j,O)=>j+(O.votes||0),0),B=["A","B","C","D","E","F"],R=0;if(I.options.forEach((j,O)=>{(j.votes||0)>(I.options[R].votes||0)&&(R=O)}),n.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${h(I.question||ServerI18n.t("dashPollRunning"))}</div>`+I.options.map((j,O)=>{let W=_?Math.round(j.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${O===R&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${B[O]||String(O+1)}</span>
                <span class="label">${h(j.label||"")}</span>
                <span class="pct">${W}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:j.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${W}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,i){let j=I.remaining_seconds;i.textContent=typeof j=="number"&&j>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(j/60),ss:String(j%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function C(n){let i=n.visible!==!1,r=n.config&&n.config.title||n.type||"widget",p=(n.type||"widget").toUpperCase(),T=(n.position||"\u2014").toUpperCase(),I=i?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=n.created_at&&i?Math.max(0,Math.floor(Date.now()/1e3-n.created_at)):null,B=_!=null?(()=>{let R=Math.floor(_/86400),j=Math.floor(_%86400/3600),O=Math.floor(_%3600/60),W=_%60;return R>0?`UPTIME \xB7 ${R}d ${String(j).padStart(2,"0")}h`:j>0?`UPTIME \xB7 ${j}:${String(O).padStart(2,"0")}:${String(W).padStart(2,"0")}`:`UPTIME \xB7 ${O}:${String(W).padStart(2,"0")}`})():`STATUS \xB7 ${i?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${h(n.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${I}"></span>
          <span class="kind">${h(p)}</span>
          <span class="cat">${h(T)}</span>
        </div>
        <div class="title">${h(r)}</div>
        <div class="uptime">${B}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${i?" is-active":""}" data-widget-action="toggle" data-running="${i?"1":"0"}">${i?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(n,i){try{let r=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:n,config:{visible:!i}})});if(!r.ok)throw new Error("HTTP "+r.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(n){n.dataset.bound!=="1"&&(n.dataset.bound="1",n.addEventListener("click",i=>{let r=i.target.closest(".admin-dash-widget-tile");if(!r)return;let p=i.target.dataset.widgetAction,T=r.dataset.widgetId;if(!(!p||!T)){if(p==="toggle")m(T,i.target.dataset.running==="1");else if(p==="config"){let I=document.querySelector('[data-route="widgets"]');I&&I.click()}}}))}async function D(){let n=document.querySelector("[data-dash-widgets]");if(n)try{let i=g();await i.prime();let r=i.get("widgets");if(!r){let T=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!T.ok){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}r=await T.json()}let p=(r.widgets||r.items||[]).slice(0,4);if(p.length===0){n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}n.innerHTML='<div class="admin-dash-widget-grid">'+p.map(C).join("")+"</div>",M(n)}catch{n.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let x=null,k=null,N=null;function E(n){let i=Math.max(0,Math.floor(Date.now()/1e3-n)),r=Math.floor(i/3600),p=Math.floor(i%3600/60),T=i%60;return r>0?`${r}:${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`:`${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`}function S(n){let i=document.getElementById("admin-session-banner"),r=document.getElementById("sec-live-feed");if(r&&r.classList.toggle("is-idle-collapsed",!(n&&n.status==="live")),i&&i.classList.toggle("is-hero",!(n&&n.status==="live")),!i)return;if(x=n,!(n&&n.status==="live"))i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let T=n.started_at||Date.now()/1e3;i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${h(n.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${n.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,L(T)}i.dataset.bound||(i.dataset.bound="1",i.addEventListener("click",$))}function L(n){N&&clearInterval(N);let i=()=>{let r=document.querySelector("[data-sess-timer]");r&&(r.textContent=E(n))};i(),N=setInterval(i,1e3)}function P(){N&&(clearInterval(N),N=null)}async function $(n){let i=n.target.closest("[data-sess-action]");if(!i)return;let r=i.dataset.sessAction;if(r==="open"){let p=document.querySelector("[data-sess-name]"),T=(p?p.value:"").trim();if(!T){p&&p.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}i.disabled=!0;try{let I=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),_=await I.json();if(!I.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:T}),!0),S(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{i.disabled=!1}}else if(r==="close"){let p=i.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",T=(B,R)=>`<option value="${B}"${B===p?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${T("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${T("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${T("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;i.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==p)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let B=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await B.json();if(!B.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),P(),S({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{i.disabled=!1}}}async function w(){try{let n=await fetch("/admin/session/current",{credentials:"same-origin"});if(!n.ok)return;let i=await n.json();S(i)}catch{}}function v(){w(),k&&clearInterval(k),k=setInterval(w,1e4)}function c(){k&&(clearInterval(k),k=null),P()}let s=null,e=null,l=0;function a(){let n=document.querySelector("[data-cockpit-overlay]"),i=window.AdminOverlayControl,r=e;if(!n||!i||!r)return;n.classList.toggle("is-on",r.live);let p=(_,B)=>{_.textContent!==B&&(_.textContent=B)},T=n.querySelector("[data-cockpit-status]");T&&p(T,i.statusText(r.live,r.count));let I=n.querySelector('[data-cockpit-action="toggle"]');I&&(I.dataset.i18n=i.toggleKey(r.live),p(I,ServerI18n.t(I.dataset.i18n)),I.dataset.next=r.live?"standby":"live")}async function d(){let n=document.querySelector("[data-cockpit-overlay]");if(!n||n.offsetParent===null)return;let i=l,r=null,p=null;try{let _=await fetch("/overlay_status",{credentials:"same-origin"});_.ok&&(r=(await _.json()).overlay_count||0)}catch{}try{let _=await fetch("/admin/broadcast/status",{credentials:"same-origin"});_.ok&&(p=(await _.json()).mode==="live")}catch{}let T=e;if(!T&&p===null)return;e={live:p!==null&&i===l?p:T?T.live:p,count:r!==null?r:T?T.count:0},a()}document.addEventListener("admin-overlay-state",n=>{let i=n&&n.detail||{};l+=1,e={live:!!i.live,count:typeof i.count=="number"?i.count:e?e.count:0},a()}),document.addEventListener("admin-route-applied",n=>{let i=n&&n.detail&&n.detail.route;i!=="live"&&i!=="dashboard"||(a(),d())});function o(){let n=document.querySelector("[data-cockpit-overlay]");if(!n||n.dataset.bound)return;n.dataset.bound="1",n.addEventListener("click",async p=>{let T=p.target.closest("[data-cockpit-action]");if(!T)return;let I=T.dataset.cockpitAction;if(I==="clear"){window.AdminOverlayControl?.clearScreen();return}I==="toggle"&&(await window.AdminOverlayControl?.setDisplay(T.dataset.next==="live"),d())});let i=n.parentElement&&n.parentElement.querySelector('[data-cockpit-action="idle-qr"]');i&&i.addEventListener("click",t);let r=n.parentElement&&n.parentElement.querySelector('[data-cockpit-action="poll"]');r&&r.addEventListener("click",()=>{location.hash="#/polls"})}async function t(){let n;try{let p=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!p.ok)throw new Error("HTTP "+p.status);n=await p.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let i=document.createElement("div");i.className="admin-soh-qr",i.innerHTML=n.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:n.url,body:i,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(n.url)}function u(){o(),d(),s&&clearInterval(s),s=setInterval(d,5e3)}function b(){s&&(clearInterval(s),s=null)}window.AdminDashboard={refreshKpi:y,refreshSummary:U,refreshSidebarBadges:A,populatePoll:F,populateWidgets:D,refreshSessionBanner:w,startSessionPolling:v,stopSessionPolling:c,refreshCockpitOverlay:d,renderCockpitOverlay:a,startCockpitPolling:u,stopCockpitPolling:b}})()});var Tt=ge(()=>{(function(){"use strict";let g="sec-viewer-config-defaults",h=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(z){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[z]})},A={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},U=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],C=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(q,z){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Q=window.ServerI18n.t(q,z);if(Q&&Q!==q)return Q}return q}let M={};function D(q){if(M[q]!=null)return M[q];let z=A[q];return z?z.step:1}function x(q,z){M[q]=Number(z)||D(q)}let k={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},N=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],E=["Color","FontFamily","Layout"];function S(q){return E.indexOf(q)!==-1}function L(q){let z=k.options&&k.options[q],Q=z&&z[1];return Array.isArray(Q)?Q.slice():[]}function P(q){return q==="Color"?F.map(z=>z.replace(/^#/,"").toUpperCase()):q==="Layout"?C.map(z=>z.value):q==="FontFamily"?(k.fonts&&k.fonts.length?k.fonts:["NotoSansTC","Inter"]).map(Q=>typeof Q=="string"?Q:Q.name||Q.family||"").filter(Boolean):[]}function $(q,z){return q==="Color"?String(z||"").replace(/^#/,"").toUpperCase():String(z||"")}function w(){return`
      <div id="${g}" class="lg:col-span-2" data-tpl="C">
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
                ${N.map(q=>`
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
      </div>`}let v=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>c(q),noRange:!0}];function c(q){let z=C.find(Q=>Q.value===q);return z?m(z.labelKey):q||"\u2014"}function s(q,z){let Q=z[0]!==!1,X=z[3],pe=A[q.key];if(q.key==="Opacity"||q.key==="Speed"){let ve=pe,fe=X!=null?Number(X):ve.min,Ie=isFinite(fe)?fe:ve.min,Te=(Ie-ve.min)/Math.max(1e-6,ve.max-ve.min)*100;return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            min="${ve.min}" max="${ve.max}" step="${D(q.key)}" value="${f(String(Ie))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Te.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Te.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}"
              min="${ve.min}" max="${ve.max}" step="${D(q.key)}" value="${f(String(Ie))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(q.key==="FontSize"){let ve=Number(X);return`
        <div class="admin-dsp2-chiprow">
          ${U.map(fe=>`<button type="button" class="admin-dsp2-fchip ${ve===fe?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${fe}">${fe}</button>`).join("")}
        </div>`}if(q.key==="Color"){let ve="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${t().map(fe=>{let Ie=fe.slice(1),Te=fe.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Te?"is-active":""}"
              data-chip-key="Color" data-chip-value="${Ie}"
              style="background:${fe}" aria-label="${fe}" aria-pressed="${Te}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(ve)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ve=(k.fonts&&k.fonts.length?k.fonts:["NotoSansTC","Inter"]).map($e=>{let Ce=typeof $e=="string"?$e:$e.name||$e.family||"",Fe=typeof $e=="string"?$e:$e.label||$e.name||$e.family||"";return{value:Ce,label:Fe}}).filter($e=>$e.value),fe=String(X||""),Ie=!!k.allowlistEdit.FontFamily,Te=Ie?k.allowlistEdit.FontFamily:new Set(L("FontFamily").map($e=>$("FontFamily",$e))),we=!Ie&&Te.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map($e=>{let Ce=$e.value===fe,Fe=Ie?Te.has($e.value):we||Te.has($e.value),Ue=["admin-dsp2-tchip",Ce?"is-active":"",Ie?"is-editing":"",Fe?"":"is-blocked"].filter(Boolean).join(" "),We=Ie?`data-allow-key="FontFamily" data-allow-value="${f($e.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f($e.value)}"`;return`<button type="button" class="${Ue}" ${We}
              aria-pressed="${Fe?"true":"false"}">
              ${Ie?`<span class="admin-dsp2-allow-mark">${Fe?"\u2713 ":""}</span>`:""}${f($e.label)}
            </button>`}).join("")}
        </div>
        ${e(q)}
      `}if(q.key==="Layout"){let ve=String(X||"scroll"),fe=!!k.allowlistEdit.Layout,Ie=fe?k.allowlistEdit.Layout:new Set(L("Layout").map(we=>$("Layout",we))),Te=!fe&&Ie.size===0;return`
        <div class="admin-dsp2-tiles">
          ${C.map(we=>{let $e=we.value===ve,Ce=fe?Ie.has(we.value):Te||Ie.has(we.value),Fe=["admin-dsp2-tile",$e?"is-active":"",fe?"is-editing":"",Ce?"":"is-blocked"].filter(Boolean).join(" "),Ue=fe?`data-allow-key="Layout" data-allow-value="${we.value}"`:`data-chip-key="Layout" data-chip-value="${we.value}"`;return`<button type="button" class="${Fe}" ${Ue}
              aria-pressed="${Ce?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${we.icon}</span>
              <span class="admin-dsp2-tile-label">${m(we.labelKey)}</span>
              ${fe?`<span class="admin-dsp2-allow-mark">${Ce?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${e(q)}
      `}return""}function e(q){if(!S(q.key))return"";let z=!!k.allowlistEdit[q.key],Q=L(q.key),X=P(q.key).length||0,pe=Q.length>0?m("displayAllowSummaryPartial",{n:Q.length,total:X,label:l(q.key)}):m("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${f(pe)}</span>
        ${z?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function l(q){return m(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function a(q,z){if(q.noRange||!(z[0]!==!1))return"";let X=A[q.key],pe=z[1]!=null?z[1]:X.min,ve=z[2]!=null?z[2]:X.max,fe=D(q.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${fe}" value="${f(String(pe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${fe}" value="${f(String(ve))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(fe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function d(q,z){let Q=z[0]!==!1,X=z[3],pe=q.fmt?q.fmt(X):X!=null?String(X):"\u2014",ve=q.key==="Layout";return`
      <div class="admin-dsp2-row ${Q?"is-on":"is-off"} ${ve?"is-last":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(m(q.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Q?"is-on":""}" data-value-badge>${f(pe)}</div>
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
            ${f(m(Q?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${s(q,z)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${a(q,z)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Q?"is-on":""}"
            data-toggle-key="${q.key}" aria-pressed="${Q?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(m(Q?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(Q?m("displayToggleHintOn"):q.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function o(){let q=document.getElementById("dsp2-rows");if(q){if(!k.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}q.innerHTML=v.map(z=>d(z,k.options[z.key]||[!1,"","",""])).join(""),i(),T(),I()}}function t(){let q=L("Color");return[...new Set((q.length?q:F).map(z=>"#"+String(z).replace(/^#/,"").toUpperCase()).filter(z=>/^#[0-9A-F]{6}$/.test(z)))]}function u(q){let z=q.slice(1).match(/.{2}/g).map(Q=>{let X=parseInt(Q,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return z[0]*.2126+z[1]*.7152+z[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function b(q,z="error"){k.paletteNotice={message:q,type:z};let Q=document.querySelector("[data-palette-feedback]");Q&&(Q.textContent=q,Q.classList.toggle("is-error",z==="error"))}function n(q,z=!0){let Q=document.querySelector("[data-admin-color-palette]"),X=Q?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(q)||(k.palettePreview=q.toUpperCase(),X.style.color=q,Q.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Q.querySelectorAll("[data-palette-preview]").forEach(pe=>{let ve=pe.dataset.palettePreview===q.toUpperCase();pe.setAttribute("aria-pressed",String(ve)),pe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),z&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(pe=>pe.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function i(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!k.options)return;let z=t(),Q=(k.options.ViewerColorPicker||[!0])[0]!==!1,X=k.paletteBusy?"disabled":"",pe=k.palettePreview||z[0],ve=f(k.paletteDraft),fe=k.paletteNotice;q.setAttribute("aria-busy",String(k.paletteBusy)),q.innerHTML=`
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
        <span class="admin-color-palette-count"><strong data-palette-count>${z.length}</strong><span>${f(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${z.map((Ie,Te)=>`<div class="admin-color-palette-chip" style="--palette-color:${Ie};--palette-ink:${u(Ie)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${Ie}"
                aria-label="${f(m("viewerPalettePreviewColor",{color:Ie}))}" aria-pressed="${Ie===pe}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Te+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${Ie}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${Ie}" ${z.length<=1?"disabled":X}
                aria-label="${f(m("viewerPaletteRemove",{color:Ie}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(k.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${k.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${z.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${f(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(m(z.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${fe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${fe?f(fe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${pe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Q?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,n(pe,!1)}async function r(q,z){if(k.paletteBusy)return;let Q=document.querySelector("[data-admin-color-palette]");k.paletteBusy=!0,Q.setAttribute("aria-busy","true"),Q.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Q.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let X=await R("Color",q);k.paletteBusy=!1,k.paletteNotice={type:X?"success":"error",message:m(X?"viewerPaletteSaved":"updateFailed")},X&&z&&(k.palettePreview=z),i(),(z&&X?Q.querySelector(`[data-palette-preview="${z}"]`):Q.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function p(q,z){let Q=k.options&&k.options[q];return Q&&Q[3]!=null?Q[3]:z}function T(){let q=document.querySelector("[data-preview-stage]"),z=document.querySelector("[data-preview-pill='1']"),Q=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),pe=document.querySelector("[data-preview-foot-r]");if(!q||!z||!Q||!k.options)return;let ve=Number(p("FontSize",32)),fe=Number(p("Opacity",92)),Ie=Number(p("Speed",1)),Te="#"+String(p("Color","7DD3FC")).replace(/^#/,""),we=String(p("FontFamily","NotoSansTC")),$e=String(p("Layout","scroll")),Ce=Math.min(ve,36),Fe=Math.max(0,Math.min(100,fe))/100;z.style.fontSize=Ce+"px",z.style.color=Te,z.style.opacity=Fe.toFixed(2),z.style.fontFamily=we+", system-ui, sans-serif",z.style.textShadow=`0 0 14px ${Te}66`,Q.style.fontSize=(Ce*.78).toFixed(0)+"px",Q.style.opacity=(Fe*.9).toFixed(2),Q.style.fontFamily=we+", system-ui, sans-serif",q.dataset.layout=$e,X&&(X.textContent=`${c($e)} \xB7 ${ve}px \xB7 ${(+Ie).toFixed(1)}\xD7`),pe&&(pe.textContent=m("displayOpacitySuffix",{n:Math.round(fe)}))}function I(){let q=document.querySelector("[data-summary-list]"),z=document.querySelector("[data-summary-count]");if(!q||!k.options)return;let Q=v.filter(X=>(k.options[X.key]||[])[0]).length;z&&(z.textContent=`AUDIENCE \xB7 ${Q}/6 OPEN`),q.innerHTML=v.map(X=>{let pe=!!(k.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${pe?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(pe?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function _(q,z){try{let Q=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!z})});if(!Q.ok)throw new Error("toggle "+Q.status);Array.isArray(k.options[q])||(k.options[q]=[!1,"","",""]),k.options[q][0]=!!z,o(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=q==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${X} ${m("settingsUpdated")}`,!0)}catch(Q){console.warn("[admin-display] toggle failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1),await O(),o()}}async function B(q,z,Q){try{let X=Q;if(q==="Color"){let ve=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}X=ve.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){X=q==="Speed"?parseFloat(X):parseInt(X,10);let ve=A[q];if(Number.isNaN(X)||ve&&(X<ve.min||X>ve.max)){window.showToast&&window.showToast(`${q} ${ve.min}\u2013${ve.max}`,!1);return}}let pe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:X,index:z})});if(!pe.ok)throw new Error("update "+pe.status);Array.isArray(k.options[q])||(k.options[q]=[!1,"","",""]),k.options[q][z]=X,j(q),T(),I()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function R(q,z){try{let Q=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:z})});if(!Q.ok)throw new Error("allowlist "+Q.status);let X=await Q.json().catch(()=>({}));X&&Array.isArray(X.option)?k.options[q]=X.option:Array.isArray(k.options[q])&&(k.options[q][1]=z.slice()),j(q),T(),I();let pe=P(q).length||0,ve=q==="Color"?m("settingsUpdated"):z.length>0?m("displayAllowlistToastPartial",{key:q,n:z.length,total:pe}):m("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(Q){return console.warn("[admin-display] allowlist failed:",Q),q!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function j(q){let z=document.querySelector(`[data-row-key="${q}"]`);if(!z||!k.options)return;let Q=v.find(fe=>fe.key===q);if(!Q)return;let X=k.options[q]||[!1,"","",""],pe=X[3],ve=z.querySelector("[data-value-badge]");if(ve&&(ve.textContent=Q.fmt?Q.fmt(pe):pe!=null?String(pe):"\u2014"),S(q)){let fe=z.querySelector("[data-picker-host]");fe&&(fe.innerHTML=s(Q,X));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&z.querySelectorAll(`[data-chip-key="${q}"]`).forEach(fe=>{let Ie=fe.getAttribute("data-chip-value"),Te=q==="Color"?String(pe||"").replace(/^#/,"").toUpperCase():String(pe??"");fe.classList.toggle("is-active",String(Ie)===Te)}),q==="Opacity"||q==="Speed"){let fe=A[q],Ie=Number(pe??fe.min),Te=(Ie-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,we=z.querySelector(".admin-dsp2-slider-fill"),$e=z.querySelector(".admin-dsp2-slider-thumb");we&&(we.style.width=Te.toFixed(2)+"%"),$e&&($e.style.left=`calc(${Te.toFixed(2)}% - 8px)`);let Ce=z.querySelector(".admin-dsp2-range");Ce&&document.activeElement!==Ce&&(Ce.value=String(Ie));let Fe=z.querySelector(".admin-dsp2-num");Fe&&document.activeElement!==Fe&&(Fe.value=String(Ie))}}async function O(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);k.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),k.options=k.options||{}}}async function W(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let z=await q.json();k.fonts=Array.isArray(z)?z:z.fonts||[]}catch{k.fonts=["NotoSansTC","Inter"]}}async function G(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let z=await q.json();k.viewerCount=z.ws_clients??0}catch{}}function Z(){le(),G(),k.metricsTimer=setInterval(G,5e3)}function le(){k.metricsTimer&&(clearInterval(k.metricsTimer),k.metricsTimer=null)}function ne(){if(!k.options){window.showToast&&window.showToast(m("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:k.options},z=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Q=URL.createObjectURL(z),X=document.createElement("a");X.href=Q,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Q),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function J(){if(!k.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let z of v){let Q=k.options[z.key];Array.isArray(Q)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:z.key,enabled:!!Q[0]})})}await G(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${k.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(z){console.warn("[admin-display] deploy failed:",z),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function ee(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Q,X]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Q,enabled:!!X[0]})});for(let pe=1;pe<=3;pe++)pe<3&&(Q==="Color"||Q==="FontFamily"||Q==="Layout")||X[pe]===""||X[pe]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Q,value:X[pe],index:pe})})}await O(),o(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Q){console.warn("[admin-display] revert failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1)}}function K(){let q=document.getElementById(g);q&&(q.addEventListener("click",z=>{let Q=z.target.closest("[data-palette-preview]");if(Q){n(Q.dataset.palettePreview);return}let X=z.target.closest("[data-palette-remove]");if(X){let Te=t();if(Te.length>1){let we=Te.filter($e=>$e!==X.dataset.paletteRemove);r(we,we.includes(k.palettePreview)?k.palettePreview:we[0])}return}if(z.target.closest("[data-palette-add]")){let Te=q.querySelector("[data-palette-hex]"),we=String(Te.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){k.paletteInvalid=!0,Te.setAttribute("aria-invalid","true"),b(m("colorFormatError"));return}let $e=t();if($e.includes("#"+we)){b(m("viewerPaletteDuplicate"));return}$e.length<64&&r([...$e,"#"+we],"#"+we);return}let pe=z.target.closest("[data-toggle-key]");if(pe){let Te=pe.getAttribute("data-toggle-key"),we=!!(k.options[Te]||[])[0];_(Te,!we);return}let ve=z.target.closest("[data-allow-action]");if(ve){let Te=ve.getAttribute("data-allow-action"),we=ve.getAttribute("data-allow-key");if(!we)return;if(Te==="edit"){let $e=L(we).map(Ce=>$(we,Ce));$e.length?k.allowlistEdit[we]=new Set($e):k.allowlistEdit[we]=new Set(P(we)),j(we);return}if(Te==="cancel"){delete k.allowlistEdit[we],j(we);return}if(Te==="clear"){k.allowlistEdit[we]=new Set,R(we,[]),delete k.allowlistEdit[we];return}if(Te==="apply"){let $e=k.allowlistEdit[we]||new Set,Ce=P(we),Fe=Array.from($e),Ue=Ce.length>0&&Fe.length===Ce.length&&Ce.every(We=>$e.has(We));R(we,Ue?[]:Fe),delete k.allowlistEdit[we];return}}let fe=z.target.closest("[data-allow-key][data-allow-value]");if(fe){let Te=fe.getAttribute("data-allow-key"),we=fe.getAttribute("data-allow-value"),$e=k.allowlistEdit[Te];if($e){let Ce=$(Te,we);$e.has(Ce)?$e.delete(Ce):$e.add(Ce),j(Te)}return}let Ie=z.target.closest("[data-chip-key]");if(Ie){let Te=Ie.getAttribute("data-chip-key"),we=Ie.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${Te}"]`).forEach($e=>$e.classList.remove("is-active")),Ie.classList.add("is-active"),B(Te,3,we);return}if(z.target&&z.target.id==="dsp2-revert"){ee();return}if(z.target&&z.target.id==="dsp2-export"){ne();return}}),q.addEventListener("keydown",z=>{z.key==="Enter"&&z.target.matches("[data-palette-hex]")&&!z.isComposing&&(z.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",z=>{let Q=z.target;if(!Q)return;if(Q.matches("[data-viewer-color-picker]")){Q.disabled=!0,_("ViewerColorPicker",Q.checked);return}let X=Q.getAttribute("data-num-key");if(!X)return;let pe=Q.getAttribute("data-num-index");if(pe==="step"){x(X,Q.value),j(X);return}let ve=parseInt(pe,10);if(Number.isNaN(ve))return;let fe=Q.value;X==="Color"&&(fe=String(fe).replace(/^#/,"").toUpperCase()),B(X,ve,fe)}),q.addEventListener("input",z=>{let Q=z.target;if(Q){if(Q.matches("[data-palette-picker]")){k.paletteDraft=Q.value.toUpperCase(),k.paletteInvalid=!1;let X=q.querySelector("[data-palette-hex]");X.value=k.paletteDraft,X.removeAttribute("aria-invalid"),b("","success"),n(k.paletteDraft);return}if(Q.matches("[data-palette-hex]")){k.paletteDraft=Q.value,k.paletteInvalid=!1;let X=Q.value.replace(/^#/,"");Q.removeAttribute("aria-invalid"),b("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(q.querySelector("[data-palette-picker]").value="#"+X,n("#"+X));return}if(Q.classList&&Q.classList.contains("admin-dsp2-range")){let X=Q.getAttribute("data-range-key"),pe=A[X],ve=Number(Q.value),fe=(ve-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,Ie=Q.closest("[data-row-key]");if(Ie){let Te=Ie.querySelector(".admin-dsp2-slider-fill"),we=Ie.querySelector(".admin-dsp2-slider-thumb");Te&&(Te.style.width=fe.toFixed(2)+"%"),we&&(we.style.left=`calc(${fe.toFixed(2)}% - 8px)`);let $e=Ie.querySelector(".admin-dsp2-num");$e&&($e.value=String(ve))}Array.isArray(k.options[X])&&(k.options[X][3]=ve),T();return}if(Q.classList&&Q.classList.contains("admin-dsp2-num")){let X=Q.getAttribute("data-num-key"),pe=parseInt(Q.getAttribute("data-num-index"),10);if(Number.isNaN(pe)||!Array.isArray(k.options[X]))return;let ve=Q.value;Q.type==="number"&&(ve=Number(ve)),k.options[X][pe]=ve,T()}}}),q.addEventListener("change",z=>{let Q=z.target;if(Q&&Q.classList&&Q.classList.contains("admin-dsp2-range")){let X=Q.getAttribute("data-range-key");B(X,3,Q.value)}}),q.addEventListener("click",z=>{let Q=z.target.closest("[data-dl-step]");if(Q){let pe=Q.closest("[data-dl-stepper]");if(!pe)return;let ve=pe.getAttribute("data-dl-stepper"),Ie=Number(oe[ve]??0)+Number(Q.getAttribute("data-dl-step"));Le(ve,Ie);return}let X=z.target.closest("[data-dl-opt]");if(X){let pe=X.closest("[data-dl-seg]");if(!pe)return;let ve=pe.getAttribute("data-dl-seg"),fe=X.getAttribute("data-dl-opt");Le(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(fe):fe)}}),q.addEventListener("change",z=>{let Q=z.target.closest("[data-dl-toggle]");if(Q){Le(Q.getAttribute("data-dl-toggle"),Q.checked);return}let X=z.target.closest("[data-dl-range]");X&&Le(X.getAttribute("data-dl-range"),Number(X.value))}),q.addEventListener("input",z=>{let Q=z.target.closest("[data-dl-range]");if(!Q)return;let X=Q.getAttribute("data-dl-range"),pe=q.querySelector(`[data-dl-value="${X}"]`);pe&&(pe.textContent=Q.value+"%")}),q.addEventListener("change",z=>{if(z.target.closest("[data-vi-toggle]")){V({enabled:z.target.checked});return}if(z.target.closest("[data-vi-ext]")){let Q=Array.from(q.querySelectorAll("[data-vi-ext]")).filter(X=>X.checked).map(X=>X.getAttribute("data-vi-ext"));V({extensions:Q});return}if(z.target.id==="viewer-images-hosts"){let Q=z.target.value.split(/[\s,]+/).filter(Boolean);V({hosts:Q})}}))}let Y=null,te=null,se={},de=0,ce="",ue=q=>(q&&q.hosts||[]).join(`
`);function Ee(){return Object.assign({},Y||{},te||{},se)}function ke(){let q=document.getElementById(g);if(!q||!Y)return;let z=Ee(),Q=q.querySelector("[data-vi-toggle]");Q&&(Q.checked=!!z.enabled),Ae(q,!!z.enabled);let X=q.querySelector("#viewer-images-hosts"),pe=te&&"hosts"in te||"hosts"in se;X&&!pe&&document.activeElement!==X&&X.value===ce&&(X.value=ue(Y),ce=X.value);let ve=z.extensions||[];q.querySelectorAll("[data-vi-ext]").forEach(fe=>{fe.checked=ve.indexOf(fe.getAttribute("data-vi-ext"))!==-1})}function Ae(q,z){q.querySelectorAll("[data-vi-row]").forEach(Q=>{Q.style.display=z?"":"none"})}async function re(q){try{let z=await q(),Q=null;try{Q=await z.json()}catch{Q=null}return{ok:!!(z.ok&&Q),body:Q}}catch(z){return console.warn("[admin-display] viewer-images request failed:",z),{ok:!1,body:null}}}async function ie(){let q=de,z=await re(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),Q=!te&&!Object.keys(se).length;z.ok&&Q&&q===de&&(Y=z.body,ke())}function H(q){let z=q&&q.code;return z==="invalid_host"?m("viErrInvalidHost",{host:String(q.detail||"")}):z==="too_many_hosts"?m("viErrTooManyHosts",{max:q.max}):m("updateFailed")}function V(q){de+=1;let z=document.getElementById("viewer-images-hosts");if("hosts"in q&&z&&(ce=z.value),"enabled"in q){let Q=document.getElementById(g);Q&&Ae(Q,!!q.enabled)}Object.assign(se,q),te||ae()}async function ae(){if(te||!Object.keys(se).length)return;let q=se;se={},te=q;let z=await re(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}));if(te=null,z.ok){Y=z.body,ke(),ae();return}let Q=se;se={},window.showToast&&window.showToast(H(z.body),!1),("hosts"in q||"hosts"in Q)&&(ce=null),ke(),ie()}let oe={};function me(){let q=document.getElementById(g);q&&Object.entries(oe).forEach(([z,Q])=>{let X=q.querySelector(`[data-dl-value="${z}"]`);X&&(X.textContent=z==="max_tracks"?Number(Q)===0?m("dlMaxTracksAuto"):String(Q):String(Q)+"%");let pe=q.querySelector(`[data-dl-range="${z}"]`);pe&&document.activeElement!==pe&&(pe.value=String(Q));let ve=q.querySelector(`[data-dl-toggle="${z}"]`);ve&&(ve.checked=!!Q);let fe=q.querySelector(`[data-dl-seg="${z}"]`);fe&&fe.querySelectorAll("[data-dl-opt]").forEach(Ie=>{let Te=Ie.getAttribute("data-dl-opt")===String(Q);Ie.classList.toggle("is-active",Te),Ie.setAttribute("aria-pressed",Te?"true":"false")})})}async function Se(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;oe=await q.json(),me()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function Le(q,z){let Q=oe[q];oe[q]=z,me();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:z})});if(!X.ok)throw new Error("display-layer "+X.status);oe=await X.json(),me()}catch(X){oe[q]=Q,me(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ye(){h.forEach(q=>{let z=document.getElementById(q);z&&z.setAttribute("data-admin-ui-replaced","1")})}let he=null;function _e(q,z){return q==="overlay"||z==="overlay"||q==="display"||z==="display"}function xe(q,z){return q==="viewer-config"||q==="viewer"||z==="viewer-config"||z==="viewer"}function De(q,z){if(!xe(q,z))return;let Q=window.AdminTabs?.getConfig?.("viewer");if(!Q)return;let X=ve=>Q.tabs.some(fe=>fe.slug===ve),pe=X(z)?z:null;if(!pe&&window.AdminTabs.resolveActiveTab){let ve=window.AdminTabs.resolveActiveTab("viewer",null);X(ve)&&(pe=ve)}pe&&(document.body.dataset.viewerConfigTab=pe)}let Ne=!1,He=!1;async function Oe(){let q=document.getElementById("sec-viewer-config-limits");if(!q||Ne)return;Ne=!0;let z=(Q,X)=>{let pe=q.querySelector(Q);pe&&(pe.textContent=X==null?"\u2014":String(X))};try{let Q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Q.ok)return;let X=await Q.json(),pe=X.rate_limits&&X.rate_limits.fire||{},ve=X.rate_limits&&X.rate_limits.totals||{},fe=X.rate_limit_config&&X.rate_limit_config.fire||{},Ie=Math.max(1,(X.server_time||0)-(X.server_started_at||0));z("[data-vc-rate-fp]",fe.limit||"\u2014"),z("[data-vc-rate-global]","\u2014"),z("[data-vc-rate-burst]","\u2014"),z("[data-vc-rate-cooldown]",fe.window||"\u2014"),z("[data-vc-msg-len]",100),z("[data-vc-nick-len]","\u2014"),z("[data-vc-dedup]","\u2014");let Te=(pe.hits||0)/Ie;z("[data-vc-avg-rate]",Te.toFixed(2)+"/s"),z("[data-vc-throttled]",pe.violations||0),z("[data-vc-blocked]",ve.locked_sources||0),z("[data-vc-deduped]",0)}catch{}finally{Ne=!1}}let qe=null;function Re(q){let z=window.ServerI18n&&window.ServerI18n.currentLang;if(!z||z===qe)return;let Q=qe===null;if(qe=z,Q)return;let X=q.querySelector("[data-dsp-fold]"),pe=!!(X&&X.open),ve=document.createElement("div");ve.innerHTML=w(),q.replaceChildren(...ve.firstElementChild.childNodes);let fe=q.querySelector("[data-dsp-fold]");fe&&(fe.open=pe),o(),me(),ce="",ke()}function Me(){let q=document.querySelector(".admin-dash-grid"),z=document.getElementById(g);if(!q||!z)return;Re(z);let Q=q.dataset.activeRoute||"live",X=q.dataset.activeLeaf||Q;De(Q,X);let pe=document.body.dataset.viewerConfigTab||"defaults",ve=xe(Q,X),fe=_e(Q,X),Ie=ve||fe,Te=z.querySelector("[data-dsp-fold]");Te&&z.dataset.dspMode!==(fe?"values":"audience")&&(Te.open=!fe),z.dataset.dspMode=fe?"values":"audience",z.style.display=Ie?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach($e=>{let Ce=document.getElementById($e);Ce&&(Ce.style.display=ve?"":"none")});let we=document.getElementById("sec-viewer-config-info");we&&(we.style.display=ve?"":"none"),ve?He||(He=!0,Oe()):He=!1,_e(Q,X)?k.metricsTimer||Z():le(),he=Q}function Ge(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let z=document.createElement("div");z.id="sec-viewer-config-info",z.className="lg:col-span-2",z.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Q=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let pe=document.createElement("div");pe.className="admin-vc-col-panel";let ve=document.createElement("div");ve.className="admin-vc-fields-head";let fe=Q.filter(function(Pe){return Pe.on}).length,Ie=Q.length-fe;ve.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:Q.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:fe,hidden:Ie}))+"</span>",pe.appendChild(ve);let Te=document.createElement("div");Te.className="admin-vc-fields-list",Q.forEach(function(Pe){let ze=document.createElement("div");ze.className="admin-vc-field-row"+(Pe.blocked?" is-blocked":"");let Ye=document.createElement("span");Ye.className="admin-vc-field-dot"+(Pe.on?" is-on":""),ze.appendChild(Ye);let Qe=document.createElement("div");var Je="";Pe.pinned&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),Pe.blocked&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),Qe.innerHTML='<div class="admin-vc-field-label">'+f(Pe.k)+Je+'</div><div class="admin-vc-field-desc">'+f(Pe.desc)+"</div>",ze.appendChild(Qe);let Ke=document.createElement("button");if(Ke.type="button",Ke.className="admin-vc-toggle "+(Pe.on?"is-on":"is-off"),Ke.textContent=Pe.on?m("displayToggleShow"):m("displayToggleHide"),Pe.blocked||Pe.pinned)Ke.disabled=!0,Ke.className+=" disabled";else{var Ve=Pe.on;Ke.addEventListener("click",function(){Ve=!Ve,Ke.className="admin-vc-toggle "+(Ve?"is-on":"is-off"),Ke.textContent=m(Ve?"displayToggleShow":"displayToggleHide"),Ye.className="admin-vc-field-dot"+(Ve?" is-on":"")})}ze.appendChild(Ke),Te.appendChild(ze)}),pe.appendChild(Te);let we=document.createElement("div");we.className="admin-vc-col-panel";var Ce=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(Pe,ze){return'<span class="admin-vc-swatch-dot" style="background:'+Pe+";border:"+(ze===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");we.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Ce+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",X.appendChild(pe),X.appendChild(we);function Fe(Pe,ze,Ye,Qe,Je,Ke){let Ve=Ke?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+Pe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ve+'">'+Ye+'<span class="admin-vc-limit-row__unit">'+(Qe||"")+"</span></div>"+(Je?'<div class="admin-vc-limit-row__hint">'+Je+"</div>":"")+"</div>"}let Ue=document.createElement("div");Ue.id="sec-viewer-config-limits",Ue.className="admin-vc-limits-grid lg:col-span-2",Ue.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+Fe(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+Fe(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+Fe(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+Fe(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+Fe(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+Fe(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+Fe(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+Fe(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let We=document.getElementById("sec-viewer-theme");We&&We.parentNode===q?(q.insertBefore(z,We),q.insertBefore(Ue,We),q.insertBefore(X,We)):(q.appendChild(z),q.appendChild(Ue),q.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Me()}async function Be(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(g)){ye();return}q.insertAdjacentHTML("beforeend",w()),K(),ye(),Me(),k.options||await Promise.all([O(),W()]),Se(),ie(),o()}function je(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)?Be():ye(),Me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Me),document.addEventListener("admin-route-applied",Me),document.addEventListener("admin-panel-rendered",()=>{Be(),ye(),Ge(),Me()}),Be(),Ge()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je()})()});var _t=ge(()=>{document.addEventListener("DOMContentLoaded",()=>{function g(){let J=document.querySelector('meta[name="csrf-token"]');return J&&J.content||""}let h=window.DANMU_CONFIG||{},y=h.session||{logged_in:!1},f=h.settingRanges||{};function A(J,ee={}){let K={credentials:"same-origin",...ee},Y=new Headers(ee.headers||{});return Y.set("X-CSRF-Token",g()),K.headers=Y,fetch(J,K)}window.csrfFetch=A;let U=5e3,F={at:0,data:null,promise:null};function C(){return F.data&&Date.now()-F.at<U}function m(){return C()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(J=>J.ok?J.json():null).then(J=>(J&&(F.data=J,F.at=Date.now()),F.promise=null,J)).catch(()=>(F.promise=null,null))),F.promise)}function M(J){if(!C())return null;let ee=F.data[J];return ee&&typeof ee=="object"&&"_error"in ee?null:ee}window.__danmuAdminBootstrap={prime:m,get:M},m();let D={},x=null,k=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let E=Object.create(null);Object.assign(E,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let S={_key:J=>"admin:tab:"+J,get(J){try{return sessionStorage.getItem(this._key(J))||null}catch{return null}},set(J,ee){try{ee?sessionStorage.setItem(this._key(J),ee):sessionStorage.removeItem(this._key(J))}catch{}}};function L(J){let ee=(J||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!ee)return null;let K=ee[1],Y=ee[2]||null,te=null;if(!Y){let ue=N[K];typeof ue=="string"?K=ue:ue&&typeof ue=="object"&&(K=ue.nav||K,te=ue.tab||null)}let se=E[K],de=K,ce=null;if(typeof se=="string"?de=se:se&&typeof se=="object"&&(de=se.nav||K,ce=se.tab||null),ee[1]!==de&&(L._warned||(L._warned=new Set),!L._warned.has(ee[1]))){L._warned.add(ee[1]);try{console.info("[admin] legacy route #/"+ee[1]+" \u2192 #/"+de+(Y||ce||te?"/"+(Y||ce||te):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:de,tab:Y||ce||te,raw:K}}function P(J,ee){return ee?"#/"+J+"/"+ee:"#/"+J}let $={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function w(J,ee,K){if(K=K||J,!j[J]){let ce=N[J];if(typeof ce=="string")J=ce;else if(ce&&typeof ce=="object")ce.nav&&(J=ce.nav),!ee&&ce.tab&&(ee=ce.tab);else{let ue=E[J];typeof ue=="string"?J=ue:ue&&typeof ue=="object"&&(ue.nav&&(J=ue.nav),!ee&&ue.tab&&(ee=ue.tab))}}if(J==="system"&&ee&&$[ee]){let ce=$[ee];J=ce.nav,ee=ce.tab||null,K=J}let Y=j[J]?J:"live",te=window.AdminTabs,se=te?.hasTabsFor?.(Y)?te.resolveActiveTab(Y,ee):null,de=se?te.foldFor(Y,ee):null;return{route:Y,tab:se,rawName:K,fold:de?ee:null,foldSection:de?de.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:E,tabMemory:S,parseHash:L,buildHash:P,resolve(J){let ee=L(J);return ee?w(ee.nav,ee.tab,J.match(/^#\/([\w-]+)/)[1]):null}});var v=window.AdminUtils.loadDetailsState,c=window.AdminUtils.saveDetailsState,s=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:M};async function e(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),y.logged_in&&R()}catch(J){console.error("Get settings failed:",J),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function l(J){return/^#[0-9A-Fa-f]{6}$/.test(J)}function a(J){return l(J)?J:/^[0-9A-Fa-f]{6}$/.test(J)?"#"+J:(J.startsWith("#")||(J="#"+J),l(J)?J:"#38bdf8")}function d(J,ee){if(f[J]){let K=parseInt(ee);if(isNaN(K)||K<f[J].min||K>f[J].max)return showToast(ServerI18n.t("settingRangeError",{key:J,min:f[J].min,max:f[J].max}),!1),!1}return!0}function o(J,ee,K){if(!K||!Array.isArray(D[J]))return;let Y=D[J][ee];J==="Color"&&typeof Y=="string"&&(Y=a(`#${Y}`)),Y!=null&&(K.value=String(Y))}let t={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-widgets"]}};function u(){Object.values(t).forEach(J=>{let ee=document.getElementById(J.containerId);ee&&J.orderedIds.forEach(K=>{let Y=document.getElementById(K);Y&&Y.parentElement!==ee&&ee.appendChild(Y)})})}function b(){x&&(x.disconnect(),x=null),u(),x=new MutationObserver(()=>{u()}),x.observe(r,{childList:!0,subtree:!0})}async function n(J,ee,K,Y=null){try{if(J==="Color"){if(!l(ee)){showToast(ServerI18n.t("colorFormatError"),!1),o(J,K,Y);return}ee=ee.replace("#","")}else if((J==="Speed"||J==="Opacity"||J==="FontSize")&&!d(J,ee)){o(J,K,Y);return}(await A("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:J,value:ee,index:K})})).ok?(Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][K]=ee,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await e())}catch(te){console.error("Error:",te),showToast(`Update Error: ${te.message}`,!1),await e()}}async function i(J,ee){try{let K=await A("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J,enabled:ee})}),Y=await K.json().catch(()=>({}));if(K.ok)Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][0]=ee,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`),R();else{let te=document.getElementById(`toggle-${J}`);te&&(te.checked=!ee),showToast(Y.error||ServerI18n.t("updateFailed"),!1)}}catch(K){console.error("Error:",K);let Y=document.getElementById(`toggle-${J}`);Y&&(Y.checked=!ee),showToast(`Update Error: ${K.message}`,!1)}}let r=document.getElementById("app-container"),p=document.getElementById("toast-container"),T=(J,ee=500)=>"requestIdleCallback"in window?window.requestIdleCallback(J,{timeout:ee}):setTimeout(J,ee);async function I(){let J=parseInt(document.getElementById("historyHours")?.value||"24");try{let[ee,K]=await Promise.all([fetch(`/admin/stats/hourly?hours=${J}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${J}&limit=10`,{credentials:"same-origin"})]);if(!ee.ok||!K.ok)return;let Y=await ee.json(),te=await K.json(),se=document.getElementById("statsDashboard");if(!se)return;let de=Y.distribution||[],ce=te.topTexts||[],ue=Math.max(1,...de.map(ie=>ie.count)),Ee=de.reduce((ie,H)=>ie+(H.count||0),0),ke=de.filter(ie=>ie.count>0).length,Ae=de.map(ie=>`<div class="chart-bar" style="height: ${Math.round(ie.count/ue*100)}%" title="${s(ie.hour)}: ${ie.count}"><span class="chart-label">${s(ie.hour.slice(-5,-3))}</span></div>`).join(""),re=ce.map((ie,H)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${H+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${s(ie.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ie.count}</td></tr>`).join("");se.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Ee}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${ke}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${J}h window</span>
            </div>
            <div class="stats-chart">${Ae||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${ce.length?`<table class="w-full text-xs"><tbody>${re}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(ee){console.error("Load stats error:",ee)}}window._loadStats=I,window.csrfFetch=A,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=r,window.__adminCtx.getSettings=()=>D;function _(){r&&(r.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function B(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():_()}function R(){let J=v(),ee=(ke,Ae=!1)=>J[ke]!==void 0?J[ke]:Ae,K=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ke=>Array.isArray(D[ke])&&D[ke][0]===!0).length,Y=D.Layout&&D.Layout[3]?s(String(D.Layout[3]).replace(/_/g," ")):"scroll",te=D.FontFamily&&D.FontFamily[3]?s(String(D.FontFamily[3])):"NotoSansTC",se=ke=>ke.map(Ae=>`<span style="height:${Ae*10}%;opacity:${.3+Ae*.08}"></span>`).join(""),de=Y&&Y!=="off",ce=window.location.port||(window.location.protocol==="https:"?"443":"80");r.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${de?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${s(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${s(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${s(de?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let ue=document.getElementById("settings-grid"),Ee=D.Effects?D.Effects[0]!==!1:!0;ue.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${Ee}">${Ee?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${Ee}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${Ee?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),ue.insertAdjacentHTML("beforeend",`
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
    `),ue.insertAdjacentHTML("beforeend",`
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
    `),T(le),W(),b(),T(ne),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),O(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Ae=document.querySelector("[data-telem-bars]");if(!Ae)return;let re=document.querySelector("[data-telem-status]"),ie={cpu:100,mem:100,ws:100,rate:50};function H(oe,me,Se,Le,ye){let he=Ae.querySelector(`[data-telem-fill="${oe}"]`),_e=Ae.querySelector(`[data-telem-value="${oe}"]`);he&&(he.style.width=Math.max(0,Math.min(100,me))+"%",he.classList.toggle("is-warn",!Le)),_e&&(_e.textContent=Se);let xe=Ae.querySelector(`[data-telem-row="${oe}"]`);xe&&ye&&xe.setAttribute("title",ye)}function V(oe,me){if(!me||me<=0)return Math.round(oe)+" MB used";if(me>=1024){let Se=(oe/1024).toFixed(1),Le=(me/1024).toFixed(1);return`${Se} / ${Le} GB used`}return`${Math.round(oe)} / ${Math.round(me)} MB used`}async function ae(){try{let oe=await fetch("/admin/metrics",{credentials:"same-origin"});if(!oe.ok)return;let me=await oe.json(),Se=me.cpu_series||[],Le=me.mem_series||[],ye=me.mem_mb_series||[],he=me.ws_series||[],_e=me.rate_series||[],xe=Me=>Me.length?Me[Me.length-1]:0,De=Number(xe(Se)||0),Ne=Number(xe(Le)||0),He=Number(xe(ye)||0),Oe=Number(me.mem_total_mb||0),qe=Number(xe(he)||me.ws_clients||0),Re=Number(xe(_e)||0)/60;if(H("cpu",De,`${De.toFixed(0)}%`,De<90),H("mem",Ne,`${Ne.toFixed(0)}%`,Ne<90,V(He,Oe)),H("ws",qe/ie.ws*100,String(qe),qe<100),H("rate",Re/ie.rate*100,`${Re.toFixed(1)}/s`,Re<40),re){let Me=De>=90||Ne>=90||Re>=40;re.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",re.classList.toggle("is-warn",Me)}}catch{}}setTimeout(ae,4e3),setInterval(ae,5e3)})()}let j={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=j;function O(){let J=document.querySelector(".admin-dash-grid");if(!J)return;let ee="dashboard",K=null;function Y(ye){return t.moderation.orderedIds.indexOf(ye)!==-1?"moderation-grid":t.assets.orderedIds.indexOf(ye)!==-1?"assets-grid":"settings-grid"}function te(){let ye=J.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),he=J.querySelector("[data-route-note]"),_e=J.querySelector("[data-route-action]"),xe=_e?Array.prototype.slice.call(_e.children):[],De=Be=>Be.querySelector(".admin-ui-page-actions")||xe.find(je=>je._adminHomeHead===Be)||null,Ne=(Be,je)=>{_e&&(xe.forEach(q=>{q!==Be&&(q._adminHomeHead?q._adminHomeHead.appendChild(q):q.remove())}),Be&&Be.parentNode!==_e&&(Be._adminHomeHead=je,_e.appendChild(Be)))};if(!ye){Ne(null,null);return}let He=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(ee)),Oe=Array.prototype.slice.call(J.querySelectorAll(".admin-ui-page-head"));Oe.forEach(Be=>Be.classList.remove("is-merged-into-topbar"));let qe=(j[ee]?.title||"").trim().replace(/\s+/g," "),Re=null,Me=null,Ge=null;if(Oe.forEach(Be=>{let je=Be.querySelector(".admin-ui-page-title"),q=je&&je.textContent.trim().replace(/\s+/g," ");if(q&&(He||q===ye||q===qe)){if(Be.offsetParent!==null){Re===null&&(Re=Be.querySelector(".admin-ui-page-note")?.innerHTML||"");let Q=De(Be);Q&&!Me&&(Me=Q,Ge=Be)}Be.classList.add("is-merged-into-topbar")}}),Ne(Me,Ge),he){let Be=Re||"";he.innerHTML!==Be&&(he.innerHTML=Be),he.toggleAttribute("hidden",!Re)}}function se(){let ye=j[ee],he=new Set((ye.sections||[]).map(Y)),_e=xe=>Array.from(xe.children).some(De=>getComputedStyle(De).display!=="none");J.querySelectorAll(".admin-route-sections").forEach(xe=>{if(!he.has(xe.id)){xe.style.display="none";return}xe.style.display="",xe.style.display=_e(xe)?"":"none"})}let de=()=>{let ye=j[ee],he=new Set(ye.sections);J.querySelectorAll('[id^="sec-"]').forEach(_e=>{_e.id&&(_e.style.display=he.has(_e.id)?"":"none")}),K&&window.AdminTabs?.hasTabsFor?.(ee)&&window.AdminTabs.applyTabSectionVisibility(ee,K,J),se(),te()},ce=null,ue=null;function Ee(){let ye=ue&&document.getElementById(ue);!ye||!ye.getClientRects().length||(ue=null,ye.tagName==="DETAILS"&&(ye.open=!0),ye.scrollIntoView({block:"start"}))}let ke=(ye,he,_e)=>{let xe=w(ye,he,_e);_e=xe.rawName,ee=xe.route,J.dataset.activeRoute=ee;let De=xe.tab,Ne=xe.fold?P(ee,xe.fold):_e&&_e!==ee?"#/"+_e:P(ee,De);if(window.location.hash!==Ne){try{history.replaceState(null,"",Ne)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let He=j[ee],Oe=Array.from(J.querySelectorAll(".admin-dash-nav-row[data-route]")),qe=_e!==ee?Oe.find(X=>X.dataset.route===_e):null;Oe.forEach(X=>{let pe=qe?X===qe:X.dataset.route===ee;X.classList.toggle("is-active",pe),X.setAttribute("aria-selected",pe?"true":"false")});let Re=J.querySelector("[data-route-kicker]"),Me=J.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(X){return X},Be="adminRouteTitle_"+ee,je="adminRouteKicker_"+ee,q=Ge(Be),z=Ge(je);Re&&(Re.textContent=z!==je?z:He.kicker),Me&&(Me.textContent=q!==Be?q:He.title);let Q=ee==="dashboard"||ee==="live";J.querySelectorAll('[data-route-view="dashboard"]').forEach(X=>{X.style.display=Q?"":"none"}),Q?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),K=De,De&&window.AdminRouter?.tabMemory?.set?.(ee,De),J.dataset.activeLeaf=De||ee,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:De}})),se(),te(),re(ee,De),Ae(_e,ee,De),xe.fold!==ce&&(ce=xe.fold,ue=xe.foldSection),Ee();try{history.replaceState(null,"",Ne)}catch{}};function Ae(ye,he,_e){window.AdminBreadcrumb?.render(J,ye,he,_e)}function re(ye,he){let _e=J.querySelector("[data-admin-tabs-host]");if(!_e){let xe=J.querySelector(".admin-dash-topbar");if(!xe)return;_e=document.createElement("div"),_e.dataset.adminTabsHost="",xe.insertAdjacentElement("afterend",_e)}if(_e.innerHTML="",window.AdminTabs?.hasTabsFor?.(ye)&&he){_e.hidden=!1;let xe=window.AdminTabs.renderTabStrip(ye,he,{onSelect:De=>ke(ye,De)});xe&&_e.appendChild(xe),_e.classList.remove("admin-tabs-host--accordion");return}_e.classList.remove("admin-tabs-host--accordion"),_e.hidden=!0}k&&window.removeEventListener("hashchange",k),k=()=>{let ye=L(window.location.hash),he=(window.location.hash||"").match(/^#\/([\w-]+)/),_e=he?he[1]:null;ye&&ke(ye.nav,ye.tab,_e||ye.raw)},window.addEventListener("hashchange",k),J.querySelectorAll("[data-route]").forEach(ye=>{ye.addEventListener("click",he=>{he.preventDefault(),ke(ye.dataset.route)})});let ie=L(window.location.hash),H=(window.location.hash||"").match(/^#\/([\w-]+)/),V=H?H[1]:ie?.raw||ie?.nav||"live";ke(ie?.nav||"live",ie?.tab||null,V),window._adminNavigateTo=()=>ke(ee,ce||K);let ae=!1,oe=0,me=0;function Se(){if(ae)return;ae=!0;let ye=()=>{ae&&(ae=!1,oe&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(oe),clearTimeout(me),oe=0,me=0,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:K}})),Ee())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(oe=requestAnimationFrame(ye),me=setTimeout(ye,100)):me=setTimeout(ye,0)}let Le=J.querySelector(".admin-dash-main");Le&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{Se()}).observe(Le,{childList:!0,subtree:!0}),Se())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let J=document.querySelector("[data-open-help]");J&&J.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let ee=document.querySelector("[data-open-palette]");if(ee){let Y=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};ee.addEventListener("click",Y),ee.addEventListener("keydown",te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),Y())})}let K=document.getElementById("logoutButton");K&&K.addEventListener("click",async()=>{try{let Y=await A("/logout",{method:"POST"});Y.redirected&&(window.location.href=Y.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Y){console.error("Logout Failed:",Y),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Y=>{Y.name&&Y.addEventListener("change",async function(){let te=this.name,se=this.checked;await i(te,se)})}),document.querySelectorAll("details[id^='sec-']").forEach(Y=>{Y.addEventListener("toggle",()=>{let te=v();te[Y.id]=Y.open,c(te)})}),document.querySelectorAll(".setting-input").forEach(Y=>{Y.addEventListener("change",async function(){let te=this.dataset.key,se=parseInt(this.dataset.index),de=this.value;this.type==="number"&&(de=parseInt(de)),await n(te,de,se,this)})})}function G(){if(y.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}R()}else B()}async function Z(){await e(),G(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function le(){window.AdminThemes&&window.AdminThemes.init()}function ne(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{x&&(x.disconnect(),x=null)}),Z()})});var Et=ge(()=>{(function(){"use strict";var g=null;async function h(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),D=Array.from(M).map(function(N){return N.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var x=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:D})}),k=await x.json();if(!x.ok){window.showToast(k.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(k),A()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function y(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(M),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(M),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function A(){g&&(clearInterval(g),g=null);var m=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var D=await M.json();F(D),D.state!=="active"&&g&&(clearInterval(g),g=null)}}catch{}};m(),g=setInterval(m,2e3)}function U(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function F(m){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!m||m.state==="idle"){M.appendChild(U());return}var D=m.total_votes||0,x=Math.max(1,...m.options.map(function($){return $.count})),k=document.createElement("div");k.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var E=document.createElement("span");E.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),N.appendChild(E);var S=document.createElement("span");S.className="admin-poll-status-question",S.textContent=m.question||"",N.appendChild(S);var L=document.createElement("span");L.className="admin-poll-status-state",L.textContent=m.state,N.appendChild(L),k.appendChild(N),m.options.forEach(function($){var w=document.createElement("div");w.className="admin-poll-status-row";var v=document.createElement("div");v.className="admin-poll-status-label";var c=document.createElement("span"),s=document.createElement("b");s.textContent=$.key+".",c.appendChild(s),c.appendChild(document.createTextNode(" "+$.text));var e=document.createElement("span");e.textContent=$.count+" ("+$.percentage+"%)",v.appendChild(c),v.appendChild(e);var l=document.createElement("div");l.className="admin-poll-status-bar";var a=document.createElement("div");a.className="admin-poll-status-bar-fill",a.style.width=$.count/x*100+"%",l.appendChild(a),w.appendChild(v),w.appendChild(l),k.appendChild(w)});var P=document.createElement("div");P.className="admin-poll-status-footer",P.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),k.appendChild(P),M.appendChild(k)}}function C(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",h);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",y);var x=document.getElementById("pollResetBtn");x&&x.addEventListener("click",f);var k=document.getElementById("pollAddOptionBtn");k&&k.addEventListener("click",function(){var S=document.getElementById("pollOptionsContainer");if(S){var L=S.querySelectorAll(".poll-option-input").length;if(L>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var P=document.createElement("input");P.type="text",P.className="poll-option-input admin-ui-input",P.placeholder=String.fromCharCode(65+L)+". Option "+(L+1),P.maxLength=100,S.appendChild(P)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var S=document.getElementById("pollOptionsContainer");if(S){var L=S.querySelectorAll(".poll-option-input");if(L.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}L[L.length-1].remove()}});var E=m;E&&(E.addEventListener("toggle",function(){E.open&&A()}),A()),window.addEventListener("beforeunload",function(){g&&(clearInterval(g),g=null)})}}document.addEventListener("admin-panel-rendered",function(){C()}),document.addEventListener("DOMContentLoaded",function(){C()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&C()})})()});var $t=ge(()=>{(function(){"use strict";var g="sec-timeline-export",h="danmu.adminHistoryExports.v1",y=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},A=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],U=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},f),format:"JSON"};function C(){return document.getElementById(g)}function m(){try{return JSON.parse(localStorage.getItem(h)||"[]")}catch{return[]}}function M(p){try{localStorage.setItem(h,JSON.stringify(p.slice(0,y)))}catch{}}function D(p){var T=m();T.unshift(p),M(T)}function x(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function k(p){try{var T=new Date(p),I=new Date,_=T.toDateString()===I.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")});var B=new Date(I);return B.setDate(I.getDate()-1),T.toDateString()===B.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}):T.getMonth()+1+"-"+String(T.getDate()).padStart(2,"0")+" "+String(T.getHours()).padStart(2,"0")+":"+String(T.getMinutes()).padStart(2,"0")}catch{return p||""}}function N(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var T=new Date,I=new Date(T.getFullYear(),T.getMonth(),T.getDate());return Math.max(1,Math.ceil((T-I)/36e5))}return p==="yest"?48:p==="live"?6:24}function E(p){return p.filter(function(T){return!(!F.filters.rawText&&!T.is_poll&&!T.muted&&!T.banned||!F.filters.polls&&T.is_poll||!F.filters.masked&&(T.muted||T.banned))}).map(function(T){if(!F.filters.metadata){var I=Object.assign({},T);return delete I.clientIp,delete I.fingerprint,I}return T})}function S(p){var T=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],I=function(R){var j=R==null?"":String(R);return j.indexOf(",")>=0||j.indexOf('"')>=0||j.indexOf(`
`)>=0?'"'+j.replace(/"/g,'""')+'"':j},_=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},B=p.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",_(R),R.delivery_reason||""].map(I).join(",")});return[T.join(","),B.join(`\r
`)].filter(Boolean).join(`\r
`)}function L(p){return p.map(function(T,I){var _=new Date(T.timestamp||Date.now()),B=P(_),R=P(new Date(_.getTime()+3e3)),j=(T.nickname?"["+T.nickname+"] ":"")+(T.text||"");return I+1+`
`+B+" --> "+R+`
`+j+`
`}).join(`
`)}function P(p){var T=function(I,_){return String(I).padStart(_||2,"0")};return T(p.getHours())+":"+T(p.getMinutes())+":"+T(p.getSeconds())+","+T(p.getMilliseconds(),3)}function $(p,T){var I=URL.createObjectURL(p),_=document.createElement("a");_.href=I,_.download=T,_.click(),URL.revokeObjectURL(I)}function w(){var p=N(F.range),T=document.getElementById("histv2-go");T&&(T.disabled=!0,T.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(I){if(!I.ok)throw new Error("http "+I.status);return I.json()}).then(function(I){var _=I&&I.records||[],B=E(_);if(B.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),j,O;if(F.format==="JSON"){var W=JSON.stringify(B,null,2);O=new Blob([W],{type:"application/json"}),j="danmu-history-"+R+".json"}else F.format==="CSV"?(O=new Blob(["\uFEFF"+S(B)],{type:"text/csv;charset=utf-8;"}),j="danmu-history-"+R+".csv"):(O=new Blob([L(B)],{type:"application/x-subrip;charset=utf-8;"}),j="danmu-history-"+R+".srt");$(O,j),D({name:j,fmt:F.format,size:O.size,when:new Date().toISOString(),count:B.length}),c(),v(B.length,O.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:B.length}),!0)}).catch(function(I){console.error("[history-v2] export failed",I),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:I.message||I}),!1)}).finally(function(){T&&(T.disabled=!1,delete T.dataset.busy)})}function v(p,T){var I=document.getElementById("histv2-estimate");I&&(I.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:T?x(T):"\u2014 MB"}))}function c(){var p=document.getElementById("histv2-recent-list");if(p){var T=m();if(T.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=T.map(function(I){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+I.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+s(I.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+s(k(I.when))+" \xB7 "+x(I.size)+"</div></div></div>"}).join("")}}function s(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})}function e(){return A.map(function(p){var T=F.range===p.k;return'<button type="button" class="histv2-chip'+(T?" is-active":"")+'" data-histv2-range="'+p.k+'">'+s(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+l():"")+"</button>"}).join("")}function l(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function a(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function(T){var I=!!F.filters[T.k];return'<button type="button" class="histv2-toggle'+(I?" is-on":"")+'" data-histv2-toggle="'+T.k+'"><span class="histv2-toggle-mark">'+(I?"\u2713":"\u25CB")+"</span><span>"+s(ServerI18n.t(T.labelKey))+"</span></button>"}).join("")}function d(){return U.map(function(p){var T=F.format===p.k;return'<button type="button" class="histv2-fmt'+(T?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+(T?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+s(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+s(p.desc)+"</div></button>"}).join("")}function o(){var p=C();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+a()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+d()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",t),c(),i())}function t(p){var T=p.target.closest("[data-histv2-range]");if(T){F.range=T.dataset.histv2Range,u(),i();return}var I=p.target.closest("[data-histv2-toggle]");if(I){var _=I.dataset.histv2Toggle;F.filters[_]=!F.filters[_],b(),i();return}var B=p.target.closest("[data-histv2-fmt]");if(B){F.format=B.dataset.histv2Fmt,n(),i();return}var R=p.target.closest("#histv2-go");if(R&&!R.dataset.busy){w();return}}function u(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=e())}function b(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=a())}function n(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=d())}function i(){i._t&&clearTimeout(i._t),i._t=setTimeout(function(){var p=N(F.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(T){return T.ok?T.json():null}).then(function(T){if(!T)return v(0,0);var I=E(T&&T.records||[]),_=F.format==="JSON"?220:F.format==="CSV"?110:80;v(I.length,I.length*_)}).catch(function(){v(0,0)})},250)}function r(){var p=C(),T=document.getElementById("admin-backup-v2-page");if(!p){var I=document.getElementById("settings-grid");if(!I)return;p=document.createElement("div"),p.id=g,p.className="admin-ui-card lg:col-span-2 history-v2-section",I.appendChild(p),o()}T&&T.parentElement&&p.previousElementSibling!==T&&T.parentElement.insertBefore(p,T.nextSibling)}document.addEventListener("admin-panel-rendered",r),document.addEventListener("admin-route-applied",r),window.AdminHistoryV2={refresh:i,state:F}})()});var Lt=ge(()=>{(function(){"use strict";let g="admin-replay-bar";function h(){let f=document.getElementById(g);return f||(document.body?(f=document.createElement("div"),f.id=g,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function y(f){let A=h();A&&(A.hidden=!f)}window.AdminReplayBar={ensure:h,setActive:y},document.addEventListener("admin-panel-rendered",h)})()});var xt=ge(()=>{(function(){"use strict";let g=null;function h(k){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),E=document.getElementById("replayResumeBtn"),S=document.getElementById("replayStopBtn"),L=document.getElementById("replayProgress"),P=(v,c)=>{v&&v.classList.toggle("hidden",!c)},$=k==="playing",w=k==="paused";P(N,$),P(E,w),P(S,$||w),P(L,$||w),!$&&!w&&L&&(L.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive($||w)}function y(){g&&clearInterval(g),g=setInterval(async()=>{try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let N=await k.json(),E=document.getElementById("replayProgress");E&&(E.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),h(N.state),N.state==="stopped"&&(clearInterval(g),g=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),h("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),h("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function U(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),h("stopped"),g&&(clearInterval(g),g=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,C=null,m=0,M=null;function D(){[["replayPauseBtn",f],["replayResumeBtn",A],["replayStopBtn",U]].forEach(function([N,E]){let S=document.getElementById(N);S&&!S.dataset.replayCtrlsBound&&(S.addEventListener("click",E),S.dataset.replayCtrlsBound="1")})}async function x(){try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let N=await k.json();(N.state==="playing"||N.state==="paused")&&(h(N.state),y())}catch{}}window.AdminReplayControls={notifyStarted:function(){h("playing"),y()}},document.addEventListener("admin-panel-rendered",function(){D(),x()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var At=ge(()=>{(function(){"use strict";let g="sec-ratelimit",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},y=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
      <div id="${g}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
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
          ${y.map(F=>`
            <div class="admin-ratelimit-row" data-rl-key="${F.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${h(ServerI18n.t(F.labelKey))}</span>
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
      </div>`}function A(F){let C=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let s=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,e=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,l=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,a=[];a.push(s?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),a.push(e?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),a.push(l?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[d,o,t]=await Promise.all(a),u=s||(d&&d.ok?await d.json():null);if(u){let T=u.stats&&u.stats.last_24h||0,I=u.stats&&u.stats.total||0,_=F.querySelector("[data-rl-sum-hits]"),B=F.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=T.toLocaleString()),B&&(B.textContent=ServerI18n.t("ratelimitSumTotal",{n:I.toLocaleString()}))}let b=e||(o&&o.ok?await o.json():null);if(b){let T=Array.isArray(b)?b:b.entries||b.keywords||[],I=F.querySelector("[data-rl-sum-black]");I&&(I.textContent=T.length?ServerI18n.t("ratelimitCountUnit",{n:T.length}):"0")}let n=F.querySelector("[data-rl-sum-viol]"),i=F.querySelector("[data-rl-sum-viol-rate]"),r=F.querySelector("[data-rl-sum-locked]"),p=l||(t&&t.ok?await t.json():null);if(p){let T=p&&p.rate_limits;if(T&&T.totals){let I=T.totals.hits||0,_=T.totals.violations||0,B=T.totals.locked_sources||0;if(n&&(n.textContent=_.toLocaleString()),i){let R=I+_;i.textContent=R>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/R*100).toFixed(1)}):"\u2014"}r&&(r.textContent=ServerI18n.t("ratelimitLockedSources",{n:B.toLocaleString()})),y.forEach(({key:R})=>{let j=T[R],O=F.querySelector(`[data-rl-current="${R}"]`);if(O&&j){let W=(j.hits||0).toLocaleString(),G=(j.violations||0).toLocaleString();O.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:W,viol:G})}}),M(T)}else n&&(n.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),r&&(r.textContent="\u2014")}else n&&(n.textContent="\u2014"),i&&(i.textContent=ServerI18n.t("ratelimitCountPendingBackend")),r&&(r.textContent="\u2014");m(p&&p.recent_violations)}catch{}},4500);function m(c){let s=F.querySelector("[data-rl-vbody]"),e=F.querySelector("[data-rl-vcount]");if(!s)return;let l=Array.isArray(c)?c:[];if(e&&(e.textContent=ServerI18n.t("ratelimitViolationsCount",{n:l.length})),l.length===0){s.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let a=o=>{let t=new Date(o*1e3),u=b=>String(b).padStart(2,"0");return`${u(t.getHours())}:${u(t.getMinutes())}:${u(t.getSeconds())}`},d=o=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[o]||"var(--color-text-muted)";s.innerHTML=l.slice(0,30).map(o=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${a(o.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${d(o.scope)}">${(o.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(o.ip||"")}</span>
        </div>
      `).join("")}function M(c){c&&y.forEach(({key:s})=>{let e=c[s],l=F.querySelector(`[data-rl-suggest="${s}"]`);if(!l)return;let a=e&&e.suggestion;if(!a){l.hidden=!0;return}let d=l.querySelector("[data-rl-suggest-detail]");d&&(d.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(a.p95_per_second||0).toFixed(2),limit:e.limit||"\u2014",window:e.window||"\u2014",suggLimit:a.suggested_limit,suggWindow:a.suggested_window}));let o=l.querySelector("[data-rl-apply]");o&&(o.dataset.rlSuggestLimit=String(a.suggested_limit),o.dataset.rlSuggestWindow=String(a.suggested_window)),l.hidden=!1})}async function D(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let s=await c.json(),e=s&&s.rate_limits;if(!e)return;y.forEach(({key:l})=>{let a=e[l],d=F.querySelector(`[data-rl-current="${l}"]`);if(d&&a){let o=(a.hits||0).toLocaleString(),t=(a.violations||0).toLocaleString();d.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:o,viol:t})}}),M(e)}catch{}}F.addEventListener("click",async c=>{let s=c.target.closest("[data-rl-action]");if(!s)return;let e=s.dataset.rlAction;if(e==="save"){let l=s.dataset.rlSave,a=F.querySelector(`[data-rl-limit="${l}"]`),d=F.querySelector(`[data-rl-window="${l}"]`);if(!a||!d)return;let o=parseInt(a.value,10),t=parseInt(d.value,10);if(!Number.isFinite(o)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let u=s.textContent;s.disabled=!0,s.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let b=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:l,limit:o,window:t})});if(b.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:l.toUpperCase(),limit:o,window:t}),!0),D();else{let n=await b.json().catch(()=>({})),i=n&&n.error||`HTTP ${b.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:i}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{s.disabled=!1,s.textContent=u}return}if(e==="apply-suggest"){let l=s.dataset.rlApply,a=parseInt(s.dataset.rlSuggestLimit,10),d=parseInt(s.dataset.rlSuggestWindow,10);if(!l||!Number.isFinite(a)||!Number.isFinite(d))return;let o=s.textContent;s.disabled=!0,s.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:l,limit:a,window:d})});if(t.ok){let u=F.querySelector(`[data-rl-limit="${l}"]`),b=F.querySelector(`[data-rl-window="${l}"]`);u&&(u.value=a),b&&(b.value=d),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:l.toUpperCase(),limit:a,window:d}),!0),D(),x()}else{let u=await t.json().catch(()=>({})),b=u&&u.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:b}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{s.disabled=!1,s.textContent=o}return}if(e==="export"){let l=[];F.querySelectorAll("[data-rl-limit]").forEach(a=>{let d=a.dataset.rlLimit.toUpperCase();l.push(`${d}_RATE_LIMIT=${a.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(a=>{let d=a.dataset.rlWindow.toUpperCase();l.push(`${d}_RATE_WINDOW=${a.value}`)}),C.textContent=l.join(`
`),C.hidden=!1;try{navigator.clipboard?.writeText(l.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else e==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([a,[d,o]])=>{let t=F.querySelector(`[data-rl-limit="${a}"]`),u=F.querySelector(`[data-rl-window="${a}"]`);t&&(t.value=d),u&&(u.value=o)}),C.hidden=!0,x())});function x(){y.forEach(({key:c})=>{let s=F.querySelector(`[data-rl-limit="${c}"]`),e=F.querySelector(`[data-rl-window="${c}"]`),l=F.querySelector(`[data-rl-lockout="${c}"]`),a=F.querySelector(`[data-rl-effective="${c}"]`);if(!s||!e||!a)return;let d=parseInt(s.value,10)||0,o=parseInt(e.value,10)||1,t=(d/o).toFixed(2),u=Math.round(d*1.5),b=`effective_rate = ${d} / ${o}s = ${t} req/s \xB7 burst = ${u}`;if(c==="login"&&l){let n=parseInt(l.value,10)||0;b+=` \xB7 lock = ${n}s`}a.textContent=b})}F.addEventListener("input",c=>{let s=c.target;!s||!s.dataset.rlLimit&&!s.dataset.rlLockout||x()}),F.addEventListener("change",c=>{let s=c.target;!s||!s.dataset.rlWindow||x()}),x();function k(c,s){if(!c||!Array.isArray(s))return;let e=96,l=24,a=s.length?s:new Array(24).fill(0),d=Math.max(1,...a),o=e/Math.max(1,a.length-1),t=a.map((b,n)=>`${(n*o).toFixed(1)},${(l-2-b/d*(l-4)).toFixed(1)}`).join(" "),u=c.querySelector("polyline");u&&u.setAttribute("points",t)}y.forEach(({key:c})=>{let s=F.querySelector(`[data-rl-spark="${c}"]`);s&&k(s,new Array(24).fill(0))});let N=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,E={allowlist:[],denylist:[]},S={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function L(c){if(S.error){if(!c){S.error.hidden=!0,S.error.textContent="";return}S.error.hidden=!1,S.error.textContent=c}}function P(c){let s=c==="allowlist"?S.allowBody:S.denyBody,e=c==="allowlist"?S.allowCount:S.denyCount;if(!s||!e)return;let l=Array.isArray(E[c])?E[c]:[];if(e.textContent=String(l.length),l.length===0){let a=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");s.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:a})}</div>`;return}s.innerHTML=l.map(a=>{let d=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:h(a)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${h(a)}">
          <span class="admin-ratelimit-ip-chip-cidr">${h(a)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${h(a)}" data-rl-ip-remove-kind="${c}" title="${d}" aria-label="${d}">\xD7</button>
        </div>
      `}).join("")}function $(){if(P("allowlist"),P("denylist"),S.summary){let c=(E.allowlist||[]).length,s=(E.denylist||[]).length;S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:s})}}async function w(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let s=await c.json();s&&typeof s=="object"&&(E={allowlist:Array.isArray(s.allowlist)?s.allowlist:[],denylist:Array.isArray(s.denylist)?s.denylist:[]},$())}catch{S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function v(c,{toastLabel:s}={}){try{let e=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(e.ok){let d=await e.json();return E={allowlist:Array.isArray(d.allowlist)?d.allowlist:[],denylist:Array.isArray(d.denylist)?d.denylist:[]},$(),L(""),s&&typeof showToast=="function"&&showToast(s,!0),!0}let l=await e.json().catch(()=>({})),a=l&&l.error||`HTTP ${e.status}`;return L(a),!1}catch{return L(ServerI18n.t("ratelimitNetworkError")),!1}}S.addBtn&&S.addBtn.addEventListener("click",async()=>{if(!S.input||!S.select)return;let c=(S.input.value||"").trim();if(!c){L(ServerI18n.t("ratelimitIpRequiredError"));return}if(!N.test(c)){L(ServerI18n.t("ratelimitIpFormatError"));return}let s=S.select.value==="denylist"?"denylist":"allowlist",e=Array.from(new Set([...E[s]||[],c]));await v({[s]:e},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(s==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(S.input.value="")}),S.input&&(S.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),S.addBtn&&S.addBtn.click())}),S.input.addEventListener("input",()=>{S.error&&!S.error.hidden&&L("")})),F.addEventListener("click",async c=>{let s=c.target.closest("[data-rl-ip-remove]");if(!s)return;let e=s.dataset.rlIpRemove,l=s.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",a=(E[l]||[]).filter(d=>d!==e);await v({[l]:a},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(l==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:e})})}),w(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let s=await c.json(),e=s&&s.rate_limits;if(!e)return;y.forEach(({key:l})=>{let a=e[l]&&(e[l].bucket_history||e[l].history);if(Array.isArray(a)&&a.length){let d=F.querySelector(`[data-rl-spark="${l}"]`);d&&k(d,a.slice(-24))}})}catch{}},5500)}function U(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(g))return;F.insertAdjacentHTML("beforeend",f());let C=document.getElementById(g);C&&A(C)}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var Ct=ge(()=>{(function(){"use strict";let g="sec-viewer-theme",h="danmu.viewerTheme.v1",y=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
      <div id="${g}" class="admin-vt-page hud-page-stack lg:col-span-2">
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
      </div>`}let A=/^#[0-9a-f]{6}$/i,U=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[x])}function C(D){let x={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(k=>{typeof D[k]=="string"&&A.test(D[k])&&(x[k]=D[k])}),(D.mode==="dark"||D.mode==="light")&&(x.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(x.font=D.font),(D.logo===null||typeof D.logo=="string"&&U.test(D.logo))&&(x.logo=D.logo)),x}function m(D){let x={...y[0],logo:null};try{let n=localStorage.getItem(h);n&&(x={...x,...C(JSON.parse(n))})}catch{}let k="default";function N(){try{localStorage.setItem(h,JSON.stringify(x))}catch{}}function E(n){let i=/^#?([0-9a-f]{6})$/i.exec(n);if(!i)return[0,0,0];let r=parseInt(i[1],16);return[r>>16&255,r>>8&255,r&255]}function S([n,i,r]){let p=[n,i,r].map(T=>(T/=255,T<=.03928?T/12.92:Math.pow((T+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function L(n,i){let r=S(E(n)),p=S(E(i)),[T,I]=r>p?[r,p]:[p,r];return(T+.05)/(I+.05)}function P(n){return n>=7?{label:"AAA",cls:"is-good"}:n>=4.5?{label:"AA",cls:"is-ok"}:n>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function $(){let n=D.querySelector("[data-vt-presets]");n.innerHTML="",y.forEach(i=>{let r=document.createElement("button");r.type="button",r.className="admin-vt-preset"+(k===i.id?" is-active":""),r.innerHTML=`
          <div class="swatch" style="background:${i.bg}">
            <span style="background:${i.primary}"></span>
            <span style="background:${i.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(i.nameKey)}</div>
          <div class="mode">${ServerI18n.t(i.mode==="dark"?"lbDark":"lbLight")}</div>
        `,r.addEventListener("click",()=>{x={...x,...i},k=i.id,N(),b()}),n.appendChild(r)})}function w(){D.querySelectorAll("[data-vt-mode-btn]").forEach(n=>{n.classList.toggle("is-active",x.mode===n.dataset.vtModeBtn)})}function v(){let n=D.querySelector("[data-vt-colors]"),i=x.mode==="dark"?"#F8FAFC":"#0F172A",r=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:i,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];n.innerHTML=r.map(p=>{let T=L(x[p.key],p.vs),I=P(T),_=F(x[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${I.cls}">${I.label} \xB7 ${T.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${p.key}" />
                <input type="text" value="${_}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let n=D.querySelector("[data-vt-logo-preview]"),i=D.querySelector(".hint-empty"),r=D.querySelector("[data-vt-logo-actions]");x.logo?(n.src=x.logo,n.hidden=!1,i.style.display="none",r.hidden=!1):(n.hidden=!0,i.style.display="",r.hidden=!0)}function s(){let n=D.querySelector("[data-vt-font]");n.value=x.font;let i=D.querySelector("[data-vt-font-specimen]");i.style.fontFamily=x.font}function e(){let n=x.mode==="dark"?"#F8FAFC":"#0F172A",i=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(n,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(x.primary,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(x.hero,x.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=i.map(r=>{let p=P(r.ratio);return`<span class="vt-contrast-chip ${p.cls}">${r.lbl} \xB7 ${p.label} ${r.ratio.toFixed(1)}</span>`}).join("")}function l(){let n=D.querySelector("[data-vt-stage]"),i=x.mode==="dark"?"#F8FAFC":"#0F172A";n.style.setProperty("--vt-bg",x.bg),n.style.setProperty("--vt-primary",x.primary),n.style.setProperty("--vt-hero",x.hero),n.style.setProperty("--vt-fg",i),n.style.fontFamily=x.font;let r=D.querySelector("[data-vt-preview-logo]");if(x.logo){let p=document.createElement("img");p.src=x.logo,p.style.maxHeight="40px",r.replaceChildren(p)}else r.textContent="Danmu Fire"}let a="auto",d="auto";function o(){D.querySelectorAll("[data-vt-theme-btn]").forEach(n=>{n.classList.toggle("is-active",n.dataset.vtThemeBtn===a)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(n=>{n.classList.toggle("is-active",n.dataset.vtLangBtn===d)})}async function t(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)return;let i=await n.json(),r=i&&i.ViewerThemeMode&&i.ViewerThemeMode[1],p=i&&i.ViewerLangMode&&i.ViewerLangMode[1];typeof r=="string"&&(a=r),typeof p=="string"&&(d=p),o()}catch{}}async function u(n,i){if(window.csrfFetch)try{let r=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:n,value:i,index:1})});if(!r.ok)throw new Error(r.status);window.showToast&&window.showToast(`${n} = ${i}`,!0)}catch(r){console.warn("[admin-viewer-theme] force-mode update failed:",r),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:n}),!1)}}function b(){$(),w(),v(),c(),s(),e(),l(),o()}D.addEventListener("input",n=>{if(n.target.matches("[data-vt-color]")){let i=n.target.dataset.vtColor;A.test(n.target.value)&&(x[i]=n.target.value,k="custom",N(),b())}else if(n.target.matches("[data-vt-hex]")){let i=n.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(n.target.value)&&(x[i]=n.target.value,k="custom",N(),b())}else n.target.matches("[data-vt-font]")&&(x.font=n.target.value,N(),b())}),D.addEventListener("change",n=>{if(n.target.matches("[data-vt-logo-input]")){let i=n.target.files&&n.target.files[0];if(!i)return;if(i.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let r=new FileReader;r.onload=()=>{x.logo=String(r.result||""),N(),b()},r.readAsDataURL(i)}}),D.addEventListener("click",n=>{let i=n.target.closest("[data-vt-mode-btn]");if(i){x.mode=i.dataset.vtModeBtn,k="custom",N(),b();return}let r=n.target.closest("[data-vt-theme-btn]");if(r){a=r.dataset.vtThemeBtn,o(),u("ViewerThemeMode",a);return}let p=n.target.closest("[data-vt-lang-btn]");if(p){d=p.dataset.vtLangBtn,o(),u("ViewerLangMode",d);return}if(n.target.closest("[data-vt-logo-remove]")){x.logo=null,N(),b();return}let I=n.target.closest("[data-vt-device-btn]");if(I){D.querySelectorAll("[data-vt-device-btn]").forEach(B=>B.classList.toggle("is-active",B===I)),D.querySelector("[data-vt-frame]").dataset.device=I.dataset.vtDeviceBtn;return}let _=n.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(x={...y[0],logo:null},k="default",N(),b())}),b(),t()}document.addEventListener("click",function(D){let x=D.target.closest("[data-vt-jump]");if(!x)return;let k=x.dataset.vtJump;if(k){D.preventDefault();try{location.hash="#/"+k}catch{}}});function M(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(g))return;D.insertAdjacentHTML("beforeend",f());let x=document.getElementById(g);x&&m(x)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Bt=ge(()=>{(function(){"use strict";let g="sec-system-overview";function h(){return`
      <div id="${g}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(C=>`
            <div class="admin-soh-kpi" data-m="${C.id}">
              <div class="admin-soh-kpi__label">${C.label}</div>
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
      </div>`}function y(C){let m=Math.floor(C/86400),M=Math.floor(C%86400/3600),D=Math.floor(C%3600/60);return m>0?`${m}d ${String(M).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:M>0?`${M}h ${String(D).padStart(2,"0")}m`:`${D}m ${String(C%60).padStart(2,"0")}s`}function f(C,m,M){let D=document.querySelector(`[data-m="${C}"]`);if(!D)return;let x=D.querySelector("[data-m-v]");x&&(x.textContent=m);let k=D.querySelector("[data-m-sub]");k&&(k.textContent=M||"")}function A(C){let m=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),k=!(C.queue_size!=null&&C.queue_capacity!=null&&C.queue_size>=C.queue_capacity);D&&D.classList.toggle("is-warn",!k),m&&m.classList.toggle("is-warn",!k),M&&(M.textContent=k?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function U(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let D=await M.json(),x=$=>Array.isArray($)&&$.length?$[$.length-1]:null,k=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;f("uptime",k>0?y(k):"\u2014","");let N=null;try{let $=await fetch("/admin/audience/stats",{credentials:"same-origin"});$.ok&&(N=(await $.json()).total_live)}catch{}let E=D.ws_clients??0;f("conn",String(E+(N||0)),N==null?ServerI18n.t("sohConnOverlaysOnly",{n:E}):ServerI18n.t("sohConnBreakdown",{overlays:E,viewers:N}));let S=x(D.mem_series||[]),L=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;f("ram",S!=null?`${Number(S).toFixed(0)}%`:"\u2014",L?ServerI18n.t("sohMemorySub",{total:L}):"");let P=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${P}`,ServerI18n.t("sohVersionSub")),A(D)}catch{}})();let C=document.getElementById(g);if(!C)return;let m=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";C.querySelectorAll("[data-soh-mode]").forEach(D=>{let x=D.dataset.sohMode===M;D.classList.toggle("is-active",x),D.setAttribute("aria-pressed",x?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),C.addEventListener("click",function(M){let D=M.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),m();return}let x=M.target.closest("[data-soh-action]");if(!(!x||x.disabled)){if(x.dataset.sohAction==="copy-url"){let k=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(k);return}if(x.dataset.sohAction==="show-qr"){let k=C.querySelector("[data-soh-qr]");if(!k)return;if(!k.hidden){k.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(N=>N.ok?N.json():Promise.reject(N)).then(N=>{k.innerHTML=N.svg,k.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let C=document.getElementById("settings-grid");!C||document.getElementById(g)||(C.insertAdjacentHTML("beforeend",h()),document.getElementById(g)&&U())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var Ft=ge(()=>{(function(){"use strict";let g="sec-polls",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(U){return String(U).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function y(){return`
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
  `}function f(){let U=document.getElementById("sec-polls");if(!U)return;let F=U.querySelector("[data-poll-queue]"),C=U.querySelector("[data-poll-editor]"),m=U.querySelector("[data-poll-view-builder]"),M=U.querySelector("[data-poll-view-live]"),D=U.querySelector("[data-poll-view-results]"),x="danmu.adminPollQueue.v2";function k(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function E(K){return{id:N(),label:""}}function S(){return{id:k(),text:"",timer:90,image_url:"",server_q_id:"",options:[E("A"),E("B")]}}let L=null,P="builder",$=null,w=0,v={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,s=[];try{let K=localStorage.getItem(x);if(K){let Y=JSON.parse(K);Array.isArray(Y)?s=Y:Y&&Array.isArray(Y.queue)&&(s=Y.queue)}}catch{}(!Array.isArray(s)||s.length===0)&&(s=[S()]),s.forEach(K=>{typeof K.image_url!="string"&&(K.image_url=""),typeof K.server_q_id!="string"&&(K.server_q_id="")});let e=s[0].id,l="manual",a=null,d=null,o={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(x,JSON.stringify({queue:s,activeId:e,mode:l}))}catch{}}function u(K){return s.find(Y=>Y.id===K)}function b(K,Y){let te=u(K);te&&Object.assign(te,Y)}function n(K,Y,te){let se=K.slice(),[de]=se.splice(Y,1);return se.splice(te,0,de),se}function i(){F.innerHTML="",s.forEach((K,Y)=>{let te=document.createElement("div");te.className="admin-poll-qrow",K.id===e&&te.classList.add("is-active");let se=o.active&&o.currentIndex===Y;se&&te.classList.add("is-running"),te.dataset.qid=K.id,te.draggable=!0;let de=!!K.image_url;te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Y+1}</span>
            <div class="info">
              <div class="text">${h(K.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:K.options.length})} \xB7 ${K.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):K.timer+"s"} \xB7 ${de?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":K.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(te)})}function r(){let K=u(e)||s[0];if(!K){C.innerHTML="";return}let Y=s.indexOf(K);C.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Y+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Y+1})}</span>
            </div>
            <span class="progress">Q${Y+1} / ${s.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${h(K.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${K.image_url?`
              <img class="admin-poll-q-image-thumb" src="${h(K.image_url)}" alt="" />
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
            ${K.options.map((te,se)=>`
              <div class="admin-poll-opt" data-oid="${te.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+se)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${te.id}" value="${h(te.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+se)})}" maxlength="100" />
                ${K.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${te.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
              </div>
            `).join("")}
            ${K.options.length<6?`<button type="button" class="admin-poll-opt-add" data-ed-opt-add>${ServerI18n.t("pollBuilderAddOptionBtn",{n:K.options.length})}</button>`:""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>${ServerI18n.t("pollBuilderTimeLimitLabel")}</span>
              <select data-ed-timer>
                <option value="30"${K.timer===30?" selected":""}>30s</option>
                <option value="90"${K.timer===90?" selected":""}>90s</option>
                <option value="180"${K.timer===180?" selected":""}>${ServerI18n.t("pollBuilderTimer3Min")}</option>
                <option value="300"${K.timer===300?" selected":""}>${ServerI18n.t("pollBuilderTimer5Min")}</option>
                <option value="0"${K.timer===0?" selected":""}>${ServerI18n.t("pollBuilderNoTimeLimit")}</option>
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
        `}function p(){L&&L.active?P="live":$?P="results":P="builder",U.dataset.pollView=P,m.hidden=P!=="builder",M.hidden=P!=="live",D.hidden=P!=="results",i(),r(),Z(),P==="live"?R():P==="results"&&O(),P==="live"?T():I()}function T(){c||(c=setInterval(()=>{P!=="live"||!L||!L.active||j()},1e3))}function I(){c&&(clearInterval(c),c=null)}function _(K,Y){if(!K||!K.time_limit_seconds)return null;if(!Y)return K.time_limit_seconds;let te=Date.now()/1e3-Y;return Math.max(0,Math.round(K.time_limit_seconds-te))}function B(K){if(K==null)return"\u221E";let Y=String(Math.floor(K/60)).padStart(2,"0"),te=String(K%60).padStart(2,"0");return`${Y}:${te}`}function R(){if(!L||!L.questions||L.questions.length===0){M.innerHTML="";return}let K=L.current_index>=0?L.current_index:0,Y=L.questions.length,te=L.questions[K],se=_(te,L.started_at),de=te.time_limit_seconds||0,ce=de>0&&se!=null?Math.max(0,Math.min(1,se/de)):1,ue=de>0&&se!=null&&se<=Math.max(5,de*.15),Ee=te.options.reduce((oe,me)=>oe+(me.count||0),0),ke=[...te.options].sort((oe,me)=>(me.count||0)-(oe.count||0)),Ae=ke[0]?ke[0].count:0,re=L.questions[K+1],ie=110,H=ie/2-6,V=2*Math.PI*H,ae=V*ce;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${h((L.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${K+1}</strong>`,total:Y})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${ie} ${ie}" width="56" height="56">
                      <circle cx="${ie/2}" cy="${ie/2}" r="${H}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${ie/2}" cy="${ie/2}" r="${H}" fill="none"
                        stroke="${ue?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ae} ${V}" stroke-linecap="round"
                        transform="rotate(-90 ${ie/2} ${ie/2})"
                        style="filter: drop-shadow(0 0 4px ${ue?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ue?"is-low":""}" data-live-mmss>${se==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(se)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:K+1})}</div>
                <div class="text">${h(te.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${ke.map(oe=>{let me=Ee>0?oe.count/Ee*100:0,Se=(oe.count||0)>0&&oe.count===Ae;return`
                    <div class="admin-polls-live-bar ${Se?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${h(oe.key)}</span>
                        <span class="lbl">${h(oe.text||"")}</span>
                        ${Se?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${me.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:oe.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${me.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Ee}</strong>`})}</span>
                ${re?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${h(re.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${K>=Y-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${K+1}/${Y}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${L.questions.map((oe,me)=>{let Se=me<K?"done":me===K?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${Se}">
                        <span class="idx">${Se==="done"?"\u2713":me+1}</span>
                        <span class="t">${h(oe.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${Se==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(oe=>`
                    <label class="admin-polls-live-toggle ${v[oe.k]?"is-on":""}" data-live-toggle="${oe.k}">
                      <span class="lbl">${oe.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function j(){if(!L||!L.active)return;let K=L.current_index>=0?L.current_index:0,Y=L.questions[K];if(!Y)return;let te=_(Y,L.started_at),se=Y.time_limit_seconds||0,de=M.querySelector("[data-live-mmss]"),ce=M.querySelector("[data-live-ring]");if(de&&(de.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(te),de.classList.toggle("is-low",se>0&&te!=null&&te<=Math.max(5,se*.15))),ce&&se>0&&te!=null){let ue=+ce.getAttribute("r"),Ee=2*Math.PI*ue,ke=Math.max(0,Math.min(1,te/se));ce.setAttribute("stroke-dasharray",`${Ee*ke} ${Ee}`);let Ae=te<=Math.max(5,se*.15);ce.setAttribute("stroke",Ae?"var(--hud-crimson)":"var(--color-primary)"),ce.style.filter=`drop-shadow(0 0 4px ${Ae?"var(--hud-crimson)":"var(--color-primary)"})`}v.autoAdvance&&se>0&&te===0&&(K>=L.questions.length-1?J():ne())}function O(){let K=$;if(!K||!K.questions||K.questions.length===0){D.innerHTML="";return}let Y=K.questions.length,te=Math.max(0,Math.min(w,Y-1)),se=K.questions[te],de=se.options.reduce((V,ae)=>V+(ae.count||0),0),ce=[...se.options].sort((V,ae)=>(ae.count||0)-(V.count||0)),ue=ce[0]||{key:"-",text:"\u2014",count:0},Ee=ce[1],ke=de>0?ue.count/de*100:0,Ae=Ee?Math.max(0,ue.count-Ee.count):ue.count,re=K.started_at||0,ie=K.ended_at||Date.now()/1e3,H=Math.max(0,Math.round(ie-re));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Y>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${K.questions.map((V,ae)=>`
                    <button type="button" role="tab" class="${ae===te?"is-active":""}" data-results-tab="${ae}">
                      Q${ae+1}<span class="t">${h((V.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${te+1}/${Y} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:B(H),n:de})}</span>
                </div>
                <div class="text">${h(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${h(ue.key)}</div>
                <div class="info">
                  <div class="lbl">${h(ue.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})} \xB7 ${ke.toFixed(1)}% ${Ee?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Ae}):""}</div>
                </div>
                <div class="pct">${ke.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:de})}</span>
                </div>
                ${ce.map((V,ae)=>{let oe=de>0?V.count/de*100:0;return`
                    <div class="admin-polls-results-bar ${ae===0&&V.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ae+1}</span>
                        <span class="tag">${h(V.key)}</span>
                        <span class="lbl">${h(V.text||"")}</span>
                        <span class="pct">${oe.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:V.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${oe.toFixed(1)}%"></div></div>
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
                  <span class="big">${de}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,de?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:se.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${se.time_limit_seconds?B(se.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${K.started_at?new Date(K.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${K.ended_at?new Date(K.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${B(H)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let V=Math.max(1,...ce.map(ae=>ae.count));return ce.map(ae=>`<div class="bar" style="height:${Math.max(6,ae.count/V*100)}%"></div>`).join("")})()}
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
        `}function W(K){let Y=[["question_index","question","option_key","option_text","count","percentage"]];return K.questions.forEach((te,se)=>{let de=te.options.reduce((ce,ue)=>ce+(ue.count||0),0);te.options.forEach(ce=>{let ue=de>0?(ce.count/de*100).toFixed(1):"0";Y.push([se+1,te.text,ce.key,ce.text,ce.count,ue])})}),Y.map(te=>te.map(se=>{let de=String(se??"");return/[",\n]/.test(de)?`"${de.replace(/"/g,'""')}"`:de}).join(",")).join(`
`)}function G(K,Y,te){let se=new Blob([te],{type:Y}),de=document.createElement("a");de.href=URL.createObjectURL(se),de.download=K,document.body.appendChild(de),de.click(),setTimeout(()=>{URL.revokeObjectURL(de.href),de.remove()},0)}U.addEventListener("click",K=>{let Y=K.target.closest("[data-live-action]");if(Y){let ce=Y.dataset.liveAction;ce==="advance"?ne():ce==="end"?J():ce==="pause"&&(v.autoAdvance=!1,R());return}let te=K.target.closest("[data-live-toggle]");if(te){let ce=te.dataset.liveToggle;ce in v&&(v[ce]=!v[ce],te.classList.toggle("is-on",v[ce]));return}let se=K.target.closest("[data-results-tab]");if(se){w=+se.dataset.resultsTab||0,O();return}let de=K.target.closest("[data-results-action]");if(de){let ce=de.dataset.resultsAction,ue=$;if(!ue)return;if(ce==="copy"){let Ee=ue.questions.map((ke,Ae)=>{let re=ke.options.reduce((H,V)=>H+(V.count||0),0),ie=ke.options.map(H=>{let V=re>0?(H.count/re*100).toFixed(1):"0.0";return`  ${H.key}. ${H.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:H.count})} (${V}%)`});return`Q${Ae+1}: ${ke.text}
${ie.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Ee)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ce==="csv"?G(`poll_${(ue.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",W(ue)):ce==="json"?G(`poll_${(ue.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ue,null,2)):ce==="reset"&&($=null,w=0,p());return}}),F.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(a=Y.dataset.qid,Y.classList.add("is-dragging"))}),F.addEventListener("dragend",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&Y.classList.remove("is-dragging"),a=null,F.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),F.addEventListener("dragover",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");!Y||!a||Y.dataset.qid===a||(F.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),F.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");if(!Y||!a)return;let te=s.findIndex(de=>de.id===a),se=s.findIndex(de=>de.id===Y.dataset.qid);te<0||se<0||te===se||(s=n(s,te,se),t(),p())}),F.addEventListener("click",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(e=Y.dataset.qid,t(),p())}),C.addEventListener("input",K=>{let Y=u(e);if(Y){if(K.target.matches("[data-ed-text]")){Y.text=K.target.value,t(),i();return}if(K.target.matches("[data-ed-opt-text]")){let te=K.target.dataset.edOptText,se=Y.options.find(de=>de.id===te);se&&(se.label=K.target.value,t(),i())}}}),C.addEventListener("change",K=>{let Y=u(e);Y&&K.target.matches("[data-ed-timer]")&&(Y.timer=+K.target.value,t(),i())}),C.addEventListener("click",async K=>{let Y=u(e);if(!Y)return;let te=K.target.closest("[data-ed-opt-remove]");if(te){let de=te.dataset.edOptRemove;Y.options.length>2&&(Y.options=Y.options.filter(ce=>ce.id!==de),t(),r(),i());return}if(K.target.closest("[data-ed-opt-add]")){Y.options.length<6&&(Y.options.push(E()),t(),r(),i());return}let se=K.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(s.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ce=s.findIndex(ue=>ue.id===e);s=s.filter(ue=>ue.id!==e),e=s[Math.min(ce,s.length-1)].id,t(),p()}}else if(se.dataset.edAction==="upload-q-image"){let de=C.querySelector("[data-ed-q-image-input]");de&&de.click()}else se.dataset.edAction==="remove-q-image"&&(Y.image_url="",t(),r(),i())}),C.addEventListener("change",async K=>{if(!K.target.matches("[data-ed-q-image-input]"))return;let Y=K.target.files&&K.target.files[0];if(!Y)return;let te=u(e);if(!te)return;if(!o.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),K.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),K.target.value="";return}if(Y.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),K.target.value="";return}let se=new FormData;se.append("file",Y);try{let de=await csrfFetch(`/admin/poll/${encodeURIComponent(o.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:se}),ce=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ce.error||"upload failed");te.image_url=ce.image_url,t(),r(),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(de){showToast&&showToast(String(de.message||de),!1)}finally{K.target.value=""}}),C.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-opt");Y&&(d=Y.dataset.oid,Y.classList.add("is-dragging"))}),C.addEventListener("dragend",K=>{C.querySelectorAll(".is-dragging, .is-drag-over").forEach(Y=>Y.classList.remove("is-dragging","is-drag-over")),d=null}),C.addEventListener("dragover",K=>{let Y=K.target.closest(".admin-poll-opt");!Y||!d||Y.dataset.oid===d||(K.preventDefault(),C.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),C.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-opt"),te=u(e);if(!Y||!d||!te)return;let se=te.options.findIndex(ce=>ce.id===d),de=te.options.findIndex(ce=>ce.id===Y.dataset.oid);se<0||de<0||se===de||(te.options=n(te.options,se,de),t(),r())}),U.addEventListener("click",K=>{if(K.target.closest("[data-poll-action='add']")){let ce=S();s.push(ce),e=ce.id,t(),p();return}let te=K.target.closest("[data-poll-template]");if(te){let ce=S(),ue=te.dataset.pollTemplate,Ee=["A","B","C","D","E"],ke=Ae=>Ae.map((re,ie)=>{let H=E(Ee[ie]);return H.text=re,H});ue==="yesno"?(ce.text="",ce.options=ke([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ue==="stars"?(ce.timer=60,ce.options=ke(["1","2","3","4","5"])):ue==="four"&&(ce.options=ke(["","","",""])),s.push(ce),e=ce.id,t(),p();return}let se=K.target.closest("[data-poll-mode]");se&&(l=se.dataset.pollMode,U.querySelectorAll("[data-poll-mode]").forEach(ce=>ce.classList.toggle("is-active",ce===se)),t());let de=K.target.closest("[data-poll-session-action]");if(de){let ce=de.dataset.pollSessionAction;ce==="start"?le():ce==="advance"?ne():ce==="end"&&J()}});function Z(){let K=U.querySelector("[data-poll-session]");if(!K)return;let Y=K.querySelector("[data-poll-session-status]"),te=K.querySelector("[data-poll-session-action='start']"),se=K.querySelector("[data-poll-session-action='advance']"),de=K.querySelector("[data-poll-session-action='end']");if(!o.pollId||!o.active){Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,se.hidden=!0,de.hidden=!0;return}let ce=s.length,ue=o.currentIndex+1,Ee=o.currentIndex>=ce-1;Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ue} / ${ce}</span>`,te.hidden=!0,se.hidden=Ee,de.hidden=!1}async function le(){try{let K=s.map((ue,Ee)=>{let ke=(ue.text||"").trim(),Ae=ue.options.map(re=>(re.label||"").trim()).filter(Boolean);if(!ke)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Ee+1}));if(Ae.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Ee+1}));return{text:ke,options:Ae,time_limit_seconds:ue.timer&&ue.timer>0?ue.timer:null}});if(!K.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Y=(()=>{let ue=s.map(Ee=>Number(Ee.timer)||0).filter(Ee=>Ee>0);return ue.length?Math.round(ue.reduce((Ee,ke)=>Ee+ke,0)/ue.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:K,mode:l||"manual",default_duration_s:Y})}),se=await te.json().catch(()=>({}));if(!te.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));o.pollId=se.poll_id,(se.questions||[]).forEach((ue,Ee)=>{s[Ee]&&(s[Ee].server_q_id=ue.id)}),t();let de=await csrfFetch("/admin/poll/start",{method:"POST"}),ce=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ce.error||ServerI18n.t("pollBuilderErrStartFailed"));o.active=!0,o.currentIndex=ce.current_index??0,L=ce,$=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ee()}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function ne(){try{let K=await csrfFetch("/admin/poll/advance",{method:"POST"}),Y=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Y.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));o.currentIndex=Y.current_index,o.active=!!Y.active,L=Y,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:o.currentIndex+1}),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function J(){try{let K=L,Y=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Y.ok){let te=await Y.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}K&&K.questions&&($={...K,ended_at:Date.now()/1e3},w=K.current_index>=0?K.current_index:0),o.active=!1,o.pollId="",o.currentIndex=-1,L=null,o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}function ee(){o.statusTimer&&clearInterval(o.statusTimer),o.statusTimer=setInterval(async()=>{if(o.pollId)try{let K=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!K.ok)return;let Y=await K.json();if(Y.poll_id!==o.pollId)return;o.active=!!Y.active,o.currentIndex=Y.current_index??-1;let te=!!(L&&L.active);L=Y,Y.active||(clearInterval(o.statusTimer),o.statusTimer=null,te&&Y.questions&&!$&&($={...Y,ended_at:Date.now()/1e3},w=Y.current_index>=0?Y.current_index:0),L=null),P==="live"?R():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),I()}),p()}function A(){let U=document.getElementById("settings-grid");!U||document.getElementById(g)||(U.insertAdjacentHTML("beforeend",y()),document.getElementById(g)&&f())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var Dt=ge(()=>{(function(){"use strict";let f="sec-live-feed",A={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},U=[],F=[],C=!1,m="",M="all",D=0,x=0,k=null,N=null,E=null;function S(re){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(re):String(re??"").replace(/[&<>"']/g,function(ie){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ie]})}function L(re,ie){return re?re.length>ie?re.slice(0,ie)+"\u2026":re:""}function P(re){let ie=new Date(re),H=V=>String(V).padStart(2,"0");return`${H(ie.getHours())}:${H(ie.getMinutes())}:${H(ie.getSeconds())}`}function $(re){if(!m)return!0;let ie=m.toLowerCase(),H=re.data;return H.text&&H.text.toLowerCase().includes(ie)||H.nickname&&H.nickname.toLowerCase().includes(ie)||H.fingerprint&&H.fingerprint.toLowerCase().includes(ie)||H.layout&&H.layout.toLowerCase().includes(ie)}function w(re){return M==="muted"?!!re.muted:!0}function v(){M="all",document.querySelectorAll(".admin-live-feed-tab").forEach(re=>re.classList.toggle("is-active",re.dataset.tab==="all"))}function c(){m="",E&&(E.value=""),v()}function s(re,ie){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let V;return re==="paused"?V=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ie||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):re==="no-result"?V=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ie||ServerI18n.t("lfNoMatchDesc")}):V=window.AdminEmpty.render("messages"),V.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),V.setAttribute("data-empty-kind","live-feed"),V}let H=document.createElement("div");return H.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",H.setAttribute("data-empty-kind","live-feed"),H.innerHTML=`<div class="admin-proto-placeholder-title">${S(re)}</div><div class="admin-proto-placeholder-body">${S(ie||"")}</div>`,H}function e(re){let ie=re.data,H=document.createElement("div");H.className="admin-live-feed-row"+(re.muted?" is-muted":""),H.dataset.id=re.id,H.tabIndex=-1;let V=document.createElement("span");if(V.className="admin-live-feed-time",V.textContent=P(re.ts),H.appendChild(V),(ie.layout||"scroll").toLowerCase()!=="scroll"){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=ie.layout,H.appendChild(he)}let oe=A[ie.integration];if(oe){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=oe,H.appendChild(he)}let me=document.createElement("span");me.className="admin-live-feed-text",me.textContent=L(ie.text||"",80),me.title=ie.text||"",H.appendChild(me);let Se=document.createElement("span");Se.className="admin-live-feed-identity",window.AdminIdentity&&Se.appendChild(AdminIdentity.render({nickname:ie.nickname||"",fp:"",onNicknameClick:function(he){!he||!E||(E.value=he,E.dispatchEvent(new Event("input",{bubbles:!0})),E.focus())}})),H.appendChild(Se);let Le=document.createElement("span");if(Le.className="admin-live-feed-actions is-hover-reveal",ie.message_id){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip admin-live-feed-action",he.textContent=ServerI18n.t("lfRecallBtn"),he.title=ServerI18n.t("lfRecallTitle"),he.addEventListener("click",_e=>{_e.stopPropagation(),a(re)}),Le.appendChild(he)}let ye=document.createElement("button");if(ye.type="button",ye.className="admin-ui-chip is-danger admin-live-feed-action",ye.textContent=ServerI18n.t("blockKeywordBtn"),ye.title=ServerI18n.t("blockKeywordTitle"),ye.addEventListener("click",he=>{he.stopPropagation(),d("keyword",ie.text,re.id)}),Le.appendChild(ye),ie.fingerprint){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip is-warn admin-live-feed-action",he.textContent=ServerI18n.t("blockFpBtn"),he.title=ServerI18n.t("blockFpTitle").replace("{fp}",ie.fingerprint),he.addEventListener("click",_e=>{_e.stopPropagation(),d("fingerprint",ie.fingerprint,re.id)}),Le.appendChild(he)}return H.appendChild(Le),H.classList.add("is-clickable"),H.addEventListener("click",he=>{he.target.closest(".admin-live-feed-actions")||l(re)}),H.addEventListener("keydown",he=>{he.key!=="Enter"||he.target.closest("button")||(he.preventDefault(),l(re))}),H}function l(re){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(re)}async function a(re){let ie=re&&re.data&&re.data.message_id;if(!ie)return;let H=await window.AdminModeration.recall(ie);if(!H.ok){console.error("[LiveFeed] Recall failed:",H.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}re.recalled=!0;let V=o(re.id);V&&V.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function d(re,ie,H){if(!(!ie||!await(re==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ie))){if(H){let oe=U.find(me=>me.id===H);oe&&(oe.muted=!0)}else U.forEach(oe=>{re==="keyword"&&oe.data.text===ie&&(oe.muted=!0),re==="fingerprint"&&oe.data.fingerprint===ie&&(oe.muted=!0)});b()}}function o(re){if(!k||!re)return null;let ie=k.children;for(let H=0;H<ie.length;H++)if(ie[H].dataset&&ie[H].dataset.id===re)return ie[H];return null}function t(){let re=document.activeElement,ie=re&&re.closest?re.closest(".admin-live-feed-row"):null;return ie?ie.dataset.id:null}function u(re){if(!re)return;let ie=o(re);ie&&document.activeElement!==ie&&ie.focus({preventScroll:!0})}function b(){if(!k)return;let re=t(),ie=document.createDocumentFragment(),H=U.filter(V=>$(V)&&w(V));for(let V=H.length-1;V>=0;V--)ie.appendChild(e(H[V]));if(k.textContent="",ie.childNodes.length===0){let V=C?s("paused"):U.length===0?s("empty"):s("no-result");k.appendChild(V)}else k.appendChild(ie);r(),u(re)}function n(re){if(!k||!$(re)||!w(re))return null;let ie=k.querySelector("[data-empty-kind='live-feed']");ie&&ie.remove();let H=k.scrollTop<=8,V=e(re);if(H)k.insertBefore(V,k.firstChild);else{let ae=k.scrollHeight;k.insertBefore(V,k.firstChild),k.scrollTop+=k.scrollHeight-ae,x+=1}return V}function i(){let re=U.length-200;if(re<=0)return;U.splice(0,re).forEach(H=>{let V=o(H.id);V&&V.remove()})}function r(){_(),B(),T()}function p(re){let ie={ts:Date.now(),data:re,id:re&&re.message_id?"m"+re.message_id:"e"+ ++D};if(re&&re.status==="blocked"&&(ie.muted=!0),C){F.push(ie),B(),T();return}U.push(ie),n(ie),i(),r()}function T(){let re=document.querySelector("[data-lf-jump]"),ie=document.querySelector("[data-lf-jump-n]");if(!re||!ie)return;let H=F.length,V=H>0?H:x;V>0?(re.hidden=!1,ie.textContent=String(V)):re.hidden=!0}function I(){C&&R(),x=0,k&&(k.scrollTop=0),T()}function _(){let re=document.querySelector("[data-lf-state]");re&&(re.className=C?"ui-status is-warning":"ui-status is-success",re.textContent=C?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function B(){let re=document.getElementById(f)||document,ie=(H,V)=>{let ae=re.querySelector(H);ae&&(ae.textContent=String(V))};ie("[data-cnt-all]",U.length),ie("[data-cnt-mut]",U.filter(H=>H.muted).length)}function R(){if(C=!C,k&&k.setAttribute("aria-live",C?"off":"polite"),N&&(N.textContent=C?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),N.classList.toggle("is-primary",C),N.classList.toggle("is-ghost",!C)),C)B(),T();else{for(let re of F)U.push(re);F=[],U.length>200&&U.splice(0,U.length-200),x=0,b()}}function j(){let re=document.getElementById("settings-grid");if(!re)return!1;let ie=`
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
              placeholder="${S(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${S(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${S(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return re.insertAdjacentHTML("beforeend",ie),!0}let O=!1,W=null,G=0,Z=1500,le=!1;async function ne(){if(!le){le=!0;try{let re=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(G),{credentials:"same-origin"});if(!re.ok)return;let ie=await re.json();if(Array.isArray(ie.entries)){for(let H of ie.entries)if(!(!H||!H.data)){if(typeof H.seq=="number"){if(H.seq<=G)continue;G=H.seq}p(H.data)}}typeof ie.next_since=="number"&&ie.next_since>G&&(G=ie.next_since)}catch{}finally{le=!1}}}let J=5e3,ee=null,K=!1;async function Y(){if(!(K||document.hidden)){K=!0;try{let re=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!re.ok)return;let ie=await re.json(),H=Array.isArray(ie.pending)?ie.pending.length:0,V=document.getElementById(f);if(!V)return;let ae=V.querySelector("[data-cnt-q]");ae&&(ae.textContent=String(H));let oe=V.querySelector("[data-lf-pending-link]");oe&&oe.classList.toggle("has-pending",H>0)}catch{}finally{K=!1}}}function te(){O||(O=!0,ne(),W=setInterval(ne,Z),Y(),ee=setInterval(Y,J),window.addEventListener("beforeunload",()=>{ee&&(clearInterval(ee),ee=null),W&&(clearInterval(W),W=null)}))}function se(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&j()&&(de(),b())}function de(){k=document.getElementById("liveFeedList"),N=document.getElementById("liveFeedPauseBtn"),E=document.getElementById("liveFeedSearch");let re=document.getElementById("liveFeedClearBtn"),ie=document.querySelectorAll(".admin-live-feed-tab");N&&N.addEventListener("click",R),re&&re.addEventListener("click",()=>{U=[],F=[],x=0,b()});let H=document.querySelector("[data-lf-jump-btn]");if(H&&H.addEventListener("click",I),k&&k.addEventListener("scroll",()=>{k.scrollTop<=8&&x>0&&(x=0,T())},{passive:!0}),ie.forEach(V=>{V.addEventListener("click",()=>{ie.forEach(ae=>ae.classList.remove("is-active")),V.classList.add("is-active"),M=V.dataset.tab||"all",b()})}),E){let V=null;E.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{m=E.value.trim(),b()},200)})}te()}function ce(re){if(!("ontouchstart"in window))return;let ie=0,H=0,V=0,ae=null,oe=null,me=!1;function Se(Le){if(Le.querySelector(".admin-live-feed-row__swipe-actions"))return;let ye=Le.dataset.id,he=U.find(De=>De.id===ye),_e=!!(he&&he.data&&he.data.message_id),xe=document.createElement("div");xe.className="admin-live-feed-row__swipe-actions",xe.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${_e?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,xe.addEventListener("click",function(De){let Ne=De.target.closest("[data-swipe-act]");if(!Ne||Ne.disabled)return;let He=Le.dataset.id,Oe=U.find(Re=>Re.id===He);if(!Oe||!Oe.data)return;let qe=Ne.dataset.swipeAct;qe==="ban"?Oe.data.fingerprint&&d("fingerprint",Oe.data.fingerprint,He):qe==="recall"&&a(Oe),Le.classList.remove("is-swiped")}),Le.appendChild(xe)}re.addEventListener("touchstart",function(Le){let ye=Le.target.closest(".admin-live-feed-row");ye&&(Le.target.closest(".admin-live-feed-row__swipe-actions")||(ae=ye,me=!1,ie=Le.touches[0].clientX,H=Le.touches[0].clientY,V=0))},{passive:!0}),re.addEventListener("touchmove",function(Le){if(!ae||me)return;let ye=Le.touches[0],he=ye.clientX-ie,_e=ye.clientY-H;if(Math.abs(_e)>Math.abs(he)&&Math.abs(_e)>12){me=!0;return}if(V=he,he<-10){Se(ae),oe=ae,ae.classList.add("is-swiping");let xe=Math.max(-180,he);ae.style.transform=`translateX(${xe}px)`}else he>10&&ae.classList.contains("is-swiped")&&(ae.style.transform="")},{passive:!0}),re.addEventListener("touchend",function(){ae&&(ae.classList.remove("is-swiping"),ae.style.transform="",V<=-60?ae.classList.add("is-swiped"):ae.classList.remove("is-swiped"),ae=null,oe=null,V=0)},{passive:!0})}function ue(){return k?Array.from(k.querySelectorAll(".admin-live-feed-row")):[]}function Ee(){let re=ue(),ie=document.activeElement;for(let H of re)if(H===ie||H.contains(ie))return H;return null}function ke(re){let ie=ue();if(!ie.length)return!1;let H=Ee(),V=H?ie.indexOf(H)+re:re>0?0:ie.length-1;return V=Math.max(0,Math.min(ie.length-1,V)),ie[V].focus(),ie[V].scrollIntoView({block:"nearest"}),!0}function Ae(re){let ie=Ee();if(!ie)return!1;let H=U.find(ae=>ae.id===ie.dataset.id);if(!H)return!1;let V=re==="keyword"?H.data.text:H.data.fingerprint;return V?(d(re,V,H.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return U.slice()},isVisible:function(){return!!(k&&k.offsetParent!==null)},isPaused:function(){return C},moveFocus:ke,blockFocused:Ae,togglePause:function(){R()}},document.addEventListener("admin-panel-rendered",se),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se()})()});var Mt=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml;function f(u,b=!1){var n=g();return n[u]!==void 0?n[u]:b}function A(u){var b=g();b[u.id]=u.open,h(b)}let U=!1;new MutationObserver(()=>{let u=document.getElementById("settings-grid");if(u&&!(document.getElementById("sec-plugins")||U)){U=!0;try{C(u)}finally{U=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function C(u){let b=`
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
      `;u.insertAdjacentHTML("beforeend",b);let n=document.querySelector("[data-console-filters]");n&&n.addEventListener("click",i=>{let r=i.target.closest("[data-console-filter]");r&&(n.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===r)),D=r.dataset.consoleFilter,S())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),$(),P()}let m=0,M=0,D="all",x=[],k=80;function N(u){let b=(u||"INFO").toUpperCase();return b==="ERROR"?"is-error":b==="WARN"?"is-warn":b==="DEBUG"?"is-debug":"is-info"}function E(u){let b=new Date(u*1e3),n=i=>String(i).padStart(2,"0");return`${n(b.getHours())}:${n(b.getMinutes())}:${n(b.getSeconds())}`}function S(){let u=document.getElementById("pluginsConsoleBody");if(!u)return;let b=D==="all"?x:x.filter(n=>(n.level||"INFO").toUpperCase()===D);if(b.length===0){let n=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;u.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${n}</span>
          </div>`;return}u.innerHTML=b.map(n=>{let i=E(n.ts),r=(n.msg||"").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),p=(n.plugin||"\u2014").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),T=(n.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${i}</span>
          <span class="lv ${N(n.level)}">${T}</span>
          <span class="plg">${p}</span>
          <span class="msg">${r}</span>
        </div>`}).join("")}async function L(){try{let u=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!u.ok)return;let b=await u.json();if(!Array.isArray(b.events)||b.events.length===0)return;for(x.unshift(...b.events);x.length>k;)x.pop();m=b.latest_seq||m,S()}catch{}}function P(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:L}))}async function $(){let u=document.getElementById("pluginsList");if(u)try{let b=await csrfFetch("/admin/plugins/list");if(!b.ok)throw new Error(`HTTP ${b.status}`);let i=(await b.json()).plugins||[];if(i.length===0){u.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",w([]);return}u.innerHTML=i.map(v).join(""),d(u),w(i)}catch(b){console.error("Failed to load plugins:",b),u.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function w(u){let b=u.length,n=u.filter(I=>I.enabled).length,i=b-n,r=u.map(I=>I.priority).filter(I=>typeof I=="number"),p=r.length?Math.round(r.reduce((I,_)=>I+_,0)/r.length):null,T=(I,_)=>{document.querySelectorAll(`[data-plugins-stat="${I}"]`).forEach(B=>{B.textContent=_})};T("loaded",b),T("running",n),T("paused",i),T("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(I=>{I.textContent=b})}function v(u){let{name:b,version:n,description:i,priority:r,enabled:p,is_user:T,file:I}=u,_=`plugin-toggle-${b}`,B=e(r),R=a(r),j=s(u),O=T&&I?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${y(I)}"
            data-plugin-name="${y(b)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${y(b)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${y(b)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${y(b)}</div>
            ${i?`<div class="desc">${y(i)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${n?"v"+y(n):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${B}">${r??"\u2014"}${R?" \xB7 "+R:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${l(j)}">${j}</span>
          <div class="admin-plugins-toggle-cell">
            ${O}
            <label class="admin-plugins-switch" for="${_}">
              <input type="checkbox" id="${_}" role="switch"
                aria-checked="${!!p}" aria-label="Toggle plugin ${y(b)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${y(b)}"
                ${p?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(u,b){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:u}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:b}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let i=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:b})}),r=await i.json().catch(()=>({}));if(!i.ok){showToast(r.error||ServerI18n.t("pluginsToastRemoveFailed",{status:i.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:u}),!0),await $()}catch(i){showToast(ServerI18n.t("pluginsToastNetError",{msg:i.message||""}),!1)}}function s(u){let b=u.file||u.path||u.source||"";if(typeof b=="string"){if(b.endsWith(".py"))return"PY";if(b.endsWith(".js"))return"JS"}return(u.language||"PY").toUpperCase()}function e(u){return u==null?"is-muted":u<=10?"is-danger":u<=50?"is-warn":"is-cyan"}function l(u){return u==="JS"?"is-cyan":u==="PY"?"is-warn":"is-muted"}function a(u){return u==null?"":u<=10?"CRITICAL":u<=50?"HIGH":"NORMAL"}function d(u){u.querySelectorAll(".plugin-toggle").forEach(b=>{b.addEventListener("change",async function(){let n=this.dataset.pluginName,i=this.checked;await o(n,i,this)})}),u.querySelectorAll(".plugin-uninstall").forEach(b=>{b.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function o(u,b,n){let i=b?"/admin/plugins/enable":"/admin/plugins/disable";try{let r=await csrfFetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u})});if(!r.ok){let p=await r.json().catch(()=>({}));throw new Error(p.error||`HTTP ${r.status}`)}showToast(b?ServerI18n.t("pluginEnabled").replace("{name}",u):ServerI18n.t("pluginDisabled").replace("{name}",u),!0)}catch(r){console.error(`Failed to ${b?"enable":"disable"} plugin:`,r),showToast(r.message||ServerI18n.t("operationFailed"),!1),n&&(n.checked=!b)}}async function t(){let u=document.getElementById("pluginsReloadBtn");u&&(u.disabled=!0);try{let b=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!b.ok){let n=await b.json().catch(()=>({}));throw new Error(n.error||`HTTP ${b.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await $()}catch(b){console.error("Failed to reload plugins:",b),showToast(b.message||ServerI18n.t("reloadFailed"),!1)}finally{u&&(u.disabled=!1)}}})})()});var Nt=ge(()=>{(function(){"use strict";let g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},h={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},y=null,f=null;function A(){return y||(y=document.createElement("div"),y.className="admin-pu-backdrop",y.hidden=!0,y.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(y),y.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===y)&&s()}),y)}function U(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((a,d)=>{let o=d+1,t=o<e,b=t?"is-done":o===e?"is-active":"";return(d>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${b}">
          <span class="circle">${t?"\u2713":o}</span>
          <span class="label">${a}</span>
        </div>`}).join("")}function F(e,l){f.step=e;let a=y.querySelector("[data-pu-steps]");a&&(a.innerHTML=U(e));let d=y.querySelector("[data-pu-body]");d&&(d.innerHTML=l)}function C(e){let l=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),a=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${a}</div>
          <div class="admin-pu-dropzone-msg">${g(l)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let e=y.querySelector("[data-pu-dropzone]"),l=y.querySelector("[data-pu-file]"),a=y.querySelector("[data-pu-browse]");a&&a.addEventListener("click",()=>l&&l.click()),l&&l.addEventListener("change",()=>{l.files&&l.files[0]&&M(l.files[0])}),e&&(e.addEventListener("click",()=>l&&l.click()),e.addEventListener("dragover",d=>{d.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",d=>{d.preventDefault(),e.classList.remove("is-over");let o=d.dataTransfer&&d.dataTransfer.files;if(!(!o||o.length===0)){if(o.length>1){F(1,C("error-multi")),m();return}M(o[0])}}))}function M(e){if(!e.name.match(/\.py$/i)){F(1,C("error-type")),m();return}if(e.size>256*1024){F(1,C("error-size")),m();return}f.file=e,F(2,D(e.name)),x(e)}function D(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${g(e)}</div>
      </div>`}async function x(e){try{let l=new FormData;l.append("file",e);let a=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:l}),d=await a.json().catch(()=>({}));if(!a.ok&&!d.validation){window.showToast?.(d.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:a.status}),!1),F(1,C()),m();return}f.manifest=d.manifest||{},f.validation=d.validation||{},f.filename=d.filename||e.name,k(f)}catch(l){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:l.message||""}),!1),F(1,C()),m()}}function k(e){let l=e.manifest||{},a=e.validation||{},d="";if(!a.syntax_ok)d=N(a.syntax_err,e);else if(Object.keys(l).length===0)d=E(e);else{let o=(a.deps||[]).some(t=>t.status==="missing");d=P(l,a,e,o)}F(2,`<div class="admin-pu-step2">${d}</div>`),$()}function N(e,l){let a=e&&e.line?e.line:"?",d=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${a}</span>
        </div>
        <pre class="admin-pu-syntax-body">${g(`>>> ${l.filename}
${d}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function E(e){return`
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
      </footer>`}function S(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function L(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let l=S(e),a=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${l}">${e} \xB7 ${a}</span>`}function P(e,l,a,d){let o=e.name||a.filename.replace(/\.(py|js)$/i,""),t=e.version?`v${g(e.version)}`:"\u2014",u=e.author?`@${g(e.author.replace(/^@/,""))}`:"\u2014",b=e.description||ServerI18n.t("pluginsUploadNoDescription"),n="PY",i="is-warn",r=Array.isArray(e.permissions)?e.permissions:[],p=Object.keys(h).map(R=>{let j=r.includes(R);return`
        <div class="admin-pu-perm-row ${j?"is-req":"is-not"}">
          <span class="dot">${j?"\u25CF":"\u25CB"}</span>
          <span class="key">${g(R)}</span>
          <span class="label">${g(ServerI18n.t(h[R]))}</span>
        </div>`}).join(""),T=l.deps||[],I=T.map(R=>{let j=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",O=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${j}">
          <span class="dot">${O}</span>
          <span class="name">${g(R.name)}</span>
          <span class="note">${g(R.note||"")}</span>
        </div>`}).join(""),_=l.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${g(o)}</span>`})}
      </div>`:"",B=T.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${I}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${g(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${u}</span>
          <span class="admin-ui-pill admin-pu-pill ${i}" style="margin-left:auto">${n}</span>
        </div>
        <div class="admin-pu-manifest-desc">${g(b)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${L(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${p}</div>
        </section>
        ${B}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${d?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${d?"disabled":""} data-pu-confirm>${d?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function $(){let e=y.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,F(1,C()),m()});let l=y.querySelector("[data-pu-confirm]");l&&l.addEventListener("click",()=>w());let a=y.querySelector("[data-pu-no-manifest-ack]");a&&l&&a.addEventListener("change",()=>{l.disabled=!a.checked})}function w(){let e=f.manifest||{},l=e.name||(f.filename||"").replace(/\.(py|js)$/i,""),a=e.version?`v${g(e.version)}`:"\u2014",d=Array.isArray(e.permissions)?e.permissions:[],o=d.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:d.map(b=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${g(b)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${g(l)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${a}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${o}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${g(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=y.querySelector("[data-pu-install]");t&&t.addEventListener("click",v);let u=y.querySelector("[data-pu-back]");u&&u.addEventListener("click",()=>k(f))}async function v(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",f.file);let l=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),a=await l.json().catch(()=>({}));if(!l.ok){window.showToast?.(a.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:l.status}),!1),k(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:a.name||f.filename}),!0),s();let d=document.getElementById("pluginsReloadBtn");d&&d.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),k(f)}}function c(){A(),f={step:1,file:null,manifest:null,validation:null,filename:null},F(1,C()),m(),y.hidden=!1,document.body.classList.add("admin-pu-open")}function s(){y&&(y.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:c,close:s},document.addEventListener("click",e=>{e.target.closest("#pluginsUploadBtn")&&(e.preventDefault(),c())})})()});var Pt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-webhooks",y=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function A(o,t){return o?o.length>t?o.slice(0,t)+"\u2026":o:""}function U(o){if(!o)return"\u2014";try{let t=new Date(o),u=Math.max(0,(Date.now()-t.getTime())/1e3);return u<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(u)}):u<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(u/60)}):u<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(u/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(u/86400)})}catch{return"\u2014"}}function F(o){if(!o)return"\u2014";try{return new URL(o).hostname}catch{return A(o,30)}}function C(o){return o==="active"?"is-success":o==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function M(){let o=document.getElementById("settings-grid");!o||document.getElementById(h)||(o.insertAdjacentHTML("beforeend",`
      <details id="${h}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
    `),D())}function D(){let o=document.getElementById(h);if(!o)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async u=>{u.preventDefault();let b=document.getElementById("wh-url").value.trim();if(!b)return;let n=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(T=>T.value);if(n.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let i=document.getElementById("wh-format").value,r=document.getElementById("wh-secret").value.trim(),p={url:b,events:n,format:i};r&&(p.secret=r);try{let T=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),I=await T.json();T.ok&&I.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),L(),t.hidden=!0,await x()):showToast(I.error||ServerI18n.t("registrationFailed"),!1)}catch(T){console.error("Webhook register error:",T),showToast(ServerI18n.t("registrationFailed"),!1)}}),o.addEventListener("click",u=>{if(u.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(u.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let i=u.target.closest("[data-wh-log-filter]");if(i){m.deliveryFilter=i.dataset.whLogFilter,o.querySelectorAll("[data-wh-log-filter]").forEach(j=>{j.classList.toggle("is-active",j.dataset.whLogFilter===m.deliveryFilter)}),c();return}let r=u.target.closest("[data-wh-action='test']");if(r){u.stopPropagation(),l(r.dataset.whHookId);return}let p=u.target.closest("[data-wh-action='settings']");if(p){u.stopPropagation(),s(p.dataset.whHookId);return}if(u.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,e(),w();return}let I=u.target.closest("[data-wh-action='detail-ping']");if(I){l(I.dataset.whHookId);return}let _=u.target.closest("[data-wh-action='detail-toggle']");if(_){a(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let B=u.target.closest("[data-wh-action='detail-delete']");if(B){d(B.dataset.whHookId);return}let R=u.target.closest("[data-wh-hook-row]");if(R&&!u.target.closest("button")){s(R.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:y,tick:x}))}async function x(){await E(),await Promise.all([k(),N()]),P(),w(),c(),e()}async function k(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{m.hooks=[]}}async function N(){try{let o=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!o.ok)return;let t=await o.json();m.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],m.stats=t.stats||null}catch{}}async function E(){if(!m.eventCatalogLoaded)try{let o=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(o.ok){let t=await o.json(),u=Array.isArray(t.events)?t.events:[];u.length&&(m.eventCatalog=u)}}catch{}finally{m.eventCatalogLoaded=!0,L()}}function S(o){let t=o&&o.slug?String(o.slug):"";if(o&&o.labelKey){let r=ServerI18n.t(o.labelKey);return{slug:t,label:r?r+" \xB7 "+t:t,title:r}}let u=o&&o.zh?String(o.zh):"",b=o&&o.en?String(o.en):"",n=window.ServerI18n&&ServerI18n.currentLang||"zh",i=(o&&o[n]?String(o[n]):"")||b||u;return{slug:t,label:i?i+" \xB7 "+t:t,title:u&&b?u+" \xB7 "+b:u||b}}function L(){let o=document.querySelector("[data-wh-register-events]");o&&(o.innerHTML=m.eventCatalog.map(function(t){let u=S(t);if(!u.slug)return"";let b=u.slug==="on_danmu"?" checked":"";return'<label title="'+g(u.title)+'"><input type="checkbox" name="wh-event" value="'+g(u.slug)+'"'+b+" /> "+g(u.label)+"</label>"}).join(""))}function P(){let o=document.querySelector("[data-wh-stats]");if(!o)return;let t=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};o.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:$()})}</div>
        <div class="v" style="color:${t.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${t.dropped_24h}</div>
      </div>`}function $(){return m.hooks.length&&m.hooks[0].retry_count||3}function w(){let o=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(o){if(t&&(t.textContent=String(m.hooks.length)),m.hooks.length===0){o.innerHTML="";let u=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let b=document.getElementById("wh-register-form");b&&(b.hidden=!1),document.getElementById("wh-url")?.focus()}});u.dataset.emptyKind="webhooks",o.appendChild(u);return}o.innerHTML=m.hooks.map(v).join("")}}function v(o){let t=g(o.id||""),u=Number(o.success_count)||0,b=Number(o.fail_count)||0,n=u+b,i=n>0?Math.round(u/n*1e3)/10:100,r=o.enabled!==!1,p=Number(o.last_status)||null,T=r?p&&p>=400||o.last_error?"degraded":"active":"paused",I=T==="active"?"var(--hud-lime)":T==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=T==="active"?"ACTIVE":T==="degraded"?"DEGRADED":"PAUSED",B=m.selectedHookId===o.id?" is-selected":"",R=C(T),j=(o.events||[]).map(function(W){return'<span class="admin-ui-pill admin-wh-evt-chip">'+g(W)+"</span>"}).join(""),O=o.last_error?'<div class="admin-wh-card-warn">\u26A0 '+g(A(o.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${B}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${I};box-shadow:${r?"0 0 6px "+I:"none"}"></span>
          <span class="name">${g(F(o.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${_}</span>
          <span class="last">last \xB7 ${g(U(o.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${g(o.url)}</div>
        <div class="admin-wh-card-events">${j}</div>
        ${O}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${i}%;background:${I}"></div></div>
            <span class="pct" style="color:${I}">${i}%</span>
          </div>
          <span class="counter ok">\u2713 ${u.toLocaleString()}</span>
          <span class="counter ${b>0?"fail":"fail-zero"}">\u2717 ${b}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let o=document.getElementById("wh-log-list");if(!o)return;let t=m.deliveries.filter(function(u){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!u.ok:m.deliveryFilter==="2xx"?u.code&&u.code>=200&&u.code<300:m.deliveryFilter==="5xx"?u.code&&u.code>=500:!0});if(t.length===0){o.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}o.innerHTML=t.map(function(u){let b=u.ts?new Date(u.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",n=u.code?String(u.code):"\u2014",i=u.ok?"var(--hud-lime)":"var(--hud-crimson)",r=u.duration_ms?u.duration_ms>=1e3?(u.duration_ms/1e3).toFixed(1)+"s":u.duration_ms+"ms":"\u2014",p=u.ok?"var(--color-text-strong)":"var(--hud-amber)",T=g(F(u.hook_url||"")),I=(u.retries||0)===0?"\u2014":"\xD7"+u.retries,_=(u.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${u.dropped?" is-dropped":""}">
          <span class="time">${g(b)}</span>
          <span class="code" style="color:${i};border-color:${i}55;background:${i}15;">${n}</span>
          <span class="dur" style="color:${p}">${g(r)}</span>
          <span class="ep">${T}</span>
          <span class="evt">${g(u.event||"")}</span>
          <span class="retry" style="color:${_}">${I}</span>
        </div>`}).join("")}function s(o){m.selectedHookId=o,w(),e()}function e(){let o=document.querySelector("[data-wh-detail]");if(!o)return;let t=m.hooks.find(function(T){return T.id===m.selectedHookId});if(!t){o.hidden=!0,o.innerHTML="";return}o.hidden=!1;let u=t.enabled!==!1,b=Number(t.last_status)||null,n=u?b&&b>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",i=new Set(t.events||[]),r=m.eventCatalog.map(function(T){let I=S(T),_=i.has(I.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+g(I.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+g(I.label)+"</span></label>"}).join(""),p={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};o.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+n+";box-shadow:0 0 6px "+n+'"></span><span class="name">'+g(F(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+r+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+g(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+g(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+g(t.id)+'" data-wh-next-enabled="'+(u?"0":"1")+'">'+(u?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+g(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function l(o){if(o)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),u=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(u.error||ServerI18n.t("testFailed"),!1),setTimeout(x,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function a(o,t){if(o)try{let u=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o,enabled:t})}),b=await u.json();if(!u.ok){showToast(b.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let n=m.hooks.find(function(i){return i.id===o});n&&(n.enabled=b.enabled),showToast(b.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),P(),w(),e()}catch(u){console.error("Webhook toggle error:",u),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function d(o){if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let u=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),b=await u.json();u.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===o&&(m.selectedHookId=null),x()):showToast(b.error||ServerI18n.t("deleteFailed"),!1)}catch(u){console.error("Webhook delete error:",u),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Rt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-sounds",y=null,f=[],A=[];async function U(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let s=await c.json();f=s.sounds||[],A=s.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],A=[]}}async function F(){return U()}async function C(c,s){let e=new FormData;e.append("file",c),e.append("name",s);let l=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),a=await l.json();if(!l.ok)throw new Error(a.error||"Upload failed");return a}async function m(c){let s=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),e=await s.json();if(!s.ok)throw new Error(e.error||"Delete failed");return e}async function M(c){let s=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),e=await s.json();if(!s.ok)throw new Error(e.error||"Failed to add rule");return e}async function D(c){let s=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),e=await s.json();if(!s.ok)throw new Error(e.error||"Failed to delete rule");return e}function x(){let c=document.getElementById("soundsList");if(c){if(f.length===0){c.innerHTML="";var s=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});s.dataset.emptyKind="sounds",s.style.gridColumn="1 / -1",c.appendChild(s);return}c.innerHTML=f.map(function(l){var a=g(l.name),d=Math.round((l.volume!=null?l.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+g(l.name)+'"><div class="name" title="'+a+'">'+a+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+g(l.name)+'" min="0" max="100" step="1" value="'+d+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+g(l.name)+'" style="min-width:32px;text-align:right">'+d+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+g(l.name)+'">'+g(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+g(l.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(l){l.addEventListener("click",function(){var a=l.dataset.name,d=f.find(function(o){return o.name===a});d&&(y&&(y.pause(),y=null),y=new Audio(d.url),y.volume=.5,y.play().catch(function(o){console.warn("Audio preview failed:",o)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(l){l.addEventListener("click",async function(){var a=l.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",a),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(a),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",a),!0),await U(),x(),N()}catch(o){window.showToast(o.message,!1)}})});var e={};c.querySelectorAll(".sound-volume-slider").forEach(function(l){var a=l.dataset.name,d=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(a)+'"]');l.addEventListener("input",function(){d&&(d.textContent=l.value+"%"),clearTimeout(e[a]),e[a]=setTimeout(function(){k(a,Number(l.value)/100)},300)}),l.addEventListener("change",function(){clearTimeout(e[a]),k(a,Number(l.value)/100)})})}}async function k(c,s){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:s})}),l=await e.json();if(!e.ok){window.showToast(l.error||"Volume update failed",!1);return}var a=f.find(function(d){return d.name===c});a&&(a.volume=s),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(s*100)}),!0)}catch(d){console.warn("[admin-sounds] volume save failed:",d),window.showToast("Network error",!1)}}function N(){let c=document.getElementById("ruleSoundName");if(!c)return;let s=c.value;if(c.innerHTML="",f.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,c.appendChild(e);return}f.forEach(e=>{let l=document.createElement("option");l.value=e.name,l.textContent=e.name,c.appendChild(l)}),s&&[...c.options].some(e=>e.value===s)&&(c.value=s)}function E(){let c=document.getElementById("rulesList");if(c){if(A.length===0){c.innerHTML="";var s=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});s.dataset.emptyKind="sound-rules",c.appendChild(s);return}c.innerHTML=A.map(function(e){var l=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),a=Math.round((e.volume!=null?e.volume:1)*100),d=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",a).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+g(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+g(l)+'</div><div class="admin-sounds-rule-detail">'+g(d)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+g(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await D(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),E()}catch(l){window.showToast(l.message,!1)}})})}}function S(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let s=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),l=s.files[0];if(!l){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let a=e.value.trim();if(!a){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await C(l,a),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",a),!0),s.value="",e.value="",await U(),x(),N()}catch(d){window.showToast(d.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function L(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let s=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),l=document.getElementById("ruleSoundName").value,a=document.getElementById("ruleVolume"),d=document.getElementById("ruleCooldown");if(s!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!l){window.showToast(ServerI18n.t("selectSound"),!1);return}let o=parseInt(a.value,10)/100,t=parseInt(d.value,10)||0,u={trigger_type:s,trigger_value:s==="all"?"":e,sound_name:l,volume:Math.max(0,Math.min(1,o)),cooldown:Math.max(0,t)};c.disabled=!0;try{await M(u),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),E()}catch(b){window.showToast(b.message,!1)}finally{c.disabled=!1}})}function P(){let c=document.getElementById("ruleTriggerType"),s=document.getElementById("ruleTriggerValue");if(!c||!s)return;function e(){c.value==="all"?(s.disabled=!0,s.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),s.value=""):c.value==="keyword"?(s.disabled=!1,s.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(s.disabled=!1,s.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",e),e()}function $(){let c=document.getElementById("ruleVolume"),s=document.getElementById("ruleVolumeLabel");!c||!s||c.addEventListener("input",()=>{s.textContent=c.value+"%"})}function w(){return`
      <div id="${h}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
                  <input type="text" id="soundNameInput" placeholder="${g(ServerI18n.t("soundNamePlaceholder"))}" maxlength="100" class="admin-ui-input" />
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
                    <option value="keyword">${g(ServerI18n.t("triggerTypeKeyword"))}</option>
                    <option value="effect">${g(ServerI18n.t("triggerTypeEffect"))}</option>
                    <option value="all">${g(ServerI18n.t("triggerTypeAll"))}</option>
                  </select>
                </label>
                <label class="admin-webhooks-field">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlTriggerValue")}</span>
                  <input type="text" id="ruleTriggerValue" placeholder="${g(ServerI18n.t("triggerValueKeywordPlaceholder"))}" class="admin-ui-input" />
                </label>
                <label class="admin-webhooks-field admin-sounds-form-full">
                  <span class="admin-ui-monolabel">${ServerI18n.t("mlSound")}</span>
                  <select id="ruleSoundName" class="admin-ui-select">
                    <option value="" disabled>${g(ServerI18n.t("soundLoading"))}</option>
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
    `}async function v(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",w()),window.AdminSkeletons){let s=document.getElementById("soundsList");s&&(s.innerHTML="",s.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([U(),F()]),x(),N(),E(),S(),L(),P(),$()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&!c&&(c=!0,v().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&(c=!0,v().finally(()=>{c=!1}))})})()});var Ot=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h=/^[a-zA-Z0-9_]{1,32}$/,y=".png,.gif,.webp",f="sec-emojis",A=[];function U(){return`
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
              <input id="emojiFileInput" type="file" accept="${y}" />
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
    `}function F($){let w=":"+$.name+":",v=Number($.used)||0,c=v>0?ServerI18n.t("emojisUsedCount",{n:v}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M($.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M($.url)+'" alt="'+M(w)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+g(w)+'</div><div class="admin-em-v4__tile-meta">'+g(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(w)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M($.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function C($){let w=document.querySelector("[data-em-quota-label]"),v=document.querySelector("[data-em-quota-fill]");if(!w||!v)return;let c=$.length,s=100;w.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:s}),v.style.width=Math.min(100,c/s*100)+"%"}function m($){let w=document.querySelector("[data-em-preview-body]");if(!w)return;if(!$||$.length===0){w.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=$.slice(0,3).map(s=>`<span class="admin-em-v4__preview-pair"><code>:${g(s.name)}:</code> \u2192 <img src="${M(s.url)}" alt=":${M(s.name)}:" /></span>`);w.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function M($){return g($)}function D($){var w=document.getElementById("emojiGrid"),v=document.getElementById("emojiCount");w&&(!$||$.length===0?(window.AdminEmpty?(w.innerHTML="",w.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):w.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("noEmojisUploaded"))+"</div>",v&&(v.textContent="0")):(w.innerHTML=$.map(F).join(""),v&&(v.textContent=String($.length))),C(A),m(A))}function x(){var $=document.getElementById("emojiGrid");if($)if(window.AdminSkeletons){$.innerHTML="";for(var w=0;w<8;w++){var v=document.createElement("div");v.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var s=document.createElement("div");s.className="admin-skel",s.style.width="100%",s.style.height="100%",c.appendChild(s),v.appendChild(c);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",v.appendChild(e),$.appendChild(v)}}else $.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadingEmojis"))+"</div>"}async function k(){try{var $=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!$.ok)throw new Error("HTTP "+$.status);var w=await $.json();A=w.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",A.length||""),N()}catch(c){console.error("[admin-emojis] fetch failed:",c);var v=document.getElementById("emojiGrid");v&&(v.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var $=document.getElementById("emojiSearchInput"),w=($&&$.value||"").trim().toLowerCase(),v=w?A.filter(function(c){return(c.name||"").toLowerCase().includes(w)}):A;D(v)}async function E(){var $=document.getElementById("emojiNameInput"),w=document.getElementById("emojiFileInput"),v=document.getElementById("emojiUploadBtn");if(!(!$||!w||!v)){var c=$.value.trim(),s=w.files&&w.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),$.focus();return}if(!h.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),$.focus();return}if(!s){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=s.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}v.disabled=!0,v.textContent=ServerI18n.t("uploadingStatus");try{var l=new FormData;l.append("name",c),l.append("emojifile",s);var a=await csrfFetch("/admin/emojis/upload",{method:"POST",body:l}),d=await a.json();a.ok?(showToast(d.message||ServerI18n.t("emojiUploadFallback")),$.value="",w.value="",await k()):showToast(d.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-emojis] upload error:",o),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{v.disabled=!1,v.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function S($){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",$),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var v=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$})}),c=await v.json();v.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await k()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(s){console.error("[admin-emojis] delete error:",s),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function L($){try{await navigator.clipboard.writeText($),showToast(ServerI18n.t("copiedLabel").replace("{label}",$))}catch{var w=document.createElement("textarea");w.value=$,w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),showToast(ServerI18n.t("copiedLabel").replace("{label}",$))}}function P(){var $=document.getElementById("settings-grid");if($){$.insertAdjacentHTML("beforeend",U());var w=document.getElementById("emojiUploadBtn");w&&w.addEventListener("click",E);var v=document.getElementById("emojiNameInput");v&&v.addEventListener("keydown",function(a){a.key==="Enter"&&(a.preventDefault(),E())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",N);var s=document.getElementById("emojiGrid");s&&s.addEventListener("click",function(a){var d=a.target.closest(".emoji-copy-btn");if(d){L(d.dataset.label);return}var o=a.target.closest(".emoji-delete-btn");o&&S(o.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),l=document.getElementById("emojiFileInput");e&&l&&(["dragenter","dragover"].forEach(function(a){e.addEventListener(a,function(d){d.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(a){e.addEventListener(a,function(d){d.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(a){var d=a.dataTransfer&&a.dataTransfer.files&&a.dataTransfer.files[0];if(d){var o=new DataTransfer;o.items.add(d),l.files=o.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var u=d.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=u.slice(0,32),t.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),x(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var $=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&P()});$.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&P()}})})()});var qt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml,h="sec-stickers",y=["png","gif","webp"],f=".gif,.png,.webp",A="__all__",U=[],F=[],C=A;function m(c){return g(c)}function M(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,s=c?`
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
      <div id="${h}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${c?`<div class="admin-ui-card">${s}</div>`:""}

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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):g(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(c){return c===A?U.length:U.filter(function(s){return s.pack_id===c}).length}function x(){var c=document.getElementById("stickerPackList");if(c){var s='<button type="button" class="admin-stickers-pack'+(C===A?" is-active":"")+'" data-pack="'+A+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(A)+"</span></button>";F.forEach(function(e){var l=e.enabled?"is-success":"is-muted",a="admin-stickers-pack"+(e.id===C?" is-active":""),d=e.id==="default",o=d?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";s+='<div class="'+a+'" data-pack="'+m(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+l+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+g(e.name)+'</span><span class="admin-stickers-pack-count">'+D(e.id)+"</span></button>"+o+"</div>"}),c.innerHTML=s}}function k(c){var s=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(s)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(s)+'">'+g(s)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(s)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+g(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var c=document.getElementById("stickerGrid"),s=document.getElementById("stickerCount");if(c){var e=document.getElementById("stickerSearchInput"),l=(e&&e.value||"").trim().toLowerCase(),a=U.filter(function(o){return!(C!==A&&o.pack_id!==C||l&&!(o.name||"").toLowerCase().includes(l))});if(a.length===0){c.innerHTML="";var d=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});d.dataset.emptyKind="stickers",d.style.gridColumn="1 / -1",c.appendChild(d),s&&(s.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=a.map(k).join(""),s&&(s.textContent=ServerI18n.t("stickersItemCount",{n:a.length}))}}async function E(){var c=document.getElementById("stickerGrid");if(c)try{var[s,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!s.ok)throw new Error("HTTP "+s.status);U=(await s.json()).stickers||[],F=e.ok?(await e.json()).packs||[]:[],C!==A&&!F.some(function(l){return l.id===C})&&(C=A),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),x(),N()}catch(l){console.error("[admin-stickers] fetch failed:",l),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function S(c,s){if(c==="select"){C=s,x(),N();return}if(c==="rename"){var e=F.find(function(T){return T.id===s}),l=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!l)return;try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),d=await a.json();a.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await E()):window.showToast(d.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s)+"/toggle",{method:"POST"});o.ok&&await E()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s),{method:"DELETE"}),u=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),C===s&&(C=A),await E()):window.showToast(u.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var b=F.slice().sort(function(T,I){return(T.order||0)-(I.order||0)}),n=b.findIndex(function(T){return T.id===s});if(n<0)return;var i=c==="up"?n-1:n+1;if(i<0||i>=b.length)return;var r=b[n],p=b[i];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:r.order||0})})]),await E()}catch{}}}async function L(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var s=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),e=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),C=e.pack&&e.pack.id?e.pack.id:C,await E()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function P(){var c=document.getElementById("stickerFileInput"),s=document.getElementById("stickerUploadBtn");if(!(!c||!s)){var e=c.files&&c.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var l=e.name.split(".").pop().toLowerCase();if(y.indexOf(l)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}s.disabled=!0;var a=s.textContent;s.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("file",e),C&&C!==A&&d.append("pack_id",C);var o=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:d}),t=await o.json();o.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),c.value="",await E()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(u){console.error("[admin-stickers] upload error:",u),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{s.disabled=!1,s.textContent=a}}}async function $(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),l=await e.json();e.ok?(window.showToast(l.message||ServerI18n.t("stickerDeleteFallback")),await E()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(a){console.error("[admin-stickers] delete error:",a),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function w(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var s=document.createElement("textarea");s.value=c,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function v(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",M());var s=document.getElementById("stickerUploadBtn");s&&s.addEventListener("click",P);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",L);var l=document.getElementById("stickerSearchInput");l&&l.addEventListener("input",N);var a=document.getElementById("stickerPackList");a&&a.addEventListener("click",function(o){var t=o.target.closest("[data-pack-action]");if(!t){var u=o.target.closest("[data-pack]");u&&S("select",u.dataset.pack);return}var b=t.dataset.packAction,n=t.dataset.packId;b==="select"&&!n&&(n=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),S(b,n)});var d=document.getElementById("stickerGrid");d&&d.addEventListener("click",function(o){var t=o.target.closest(".sticker-copy-btn");if(t){w(t.dataset.label);return}var u=o.target.closest(".sticker-delete-btn");u&&$(u.dataset.name)}),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&v()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&v()}})})()});var Ht=ge(()=>{(function(){"use strict";let g="sec-extensions-overview",h=window.AdminUtils.escapeHtml,y=15e3,f=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],A={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},U=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function F(w){let v=w&&!w.stale?w.report:null;if(!v&&w&&w.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!v)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(v.state==="error"){let c=U.includes(v.error)?v.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+c)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:v.sent||0,held:v.held||0,blocked:v.blocked||0,skipped:v.late_skipped||0})}}function C(){return`
      <div id="${g}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(m).join("")}
        </div>
      </div>`}function m(w){let v=w.status==="ready",c="is-cold",s=v?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,e=v&&w.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${w.install.steps.map(a=>{if(a.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${h(ServerI18n.t(a.labelKey))} \u2193</a></li>`;let d=a.showOrigin?` <code class="admin-ext-step-code">${h(window.location.origin)}</code>`:"";return`<li>${h(ServerI18n.t(a.labelKey))}${d}</li>`}).join("")}
          </ol>
        </div>`:"",l=w.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${w.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${c}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${w.color}">${w.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${h(w.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${h(w.version)}</span></div>
          </div>
          ${s}
        </div>
        <p class="admin-ext-desc">${h(ServerI18n.t(w.descKey))}</p>
        ${w.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${h(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${e}
        ${l}
      </article>`}async function M(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;A.fireToken=await w.json(),S()}catch{}}async function D(){try{let w=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();A.sources=Array.isArray(v.sources)?v.sources:[],L()}catch{}}async function x(){try{let w=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!w.ok)return;A.slidoStatus=await w.json(),P()}catch{}}function k(){D(),x()}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);let c=await v.json();A.fireToken={enabled:c.enabled,prefix:c.prefix,has_token:!0,rotated_at:c.rotated_at},A.plainToken=c.token,S(),window.AdminUtils.copyText(c.token,ServerI18n.t("extToastTokenGenerated"))}catch(v){console.warn("[ext] regen failed:",v),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function E(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);A.fireToken=await v.json(),A.plainToken=null,S(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(v){console.warn("[ext] revoke failed:",v),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(){let w=document.querySelector("[data-fire-token-display]"),v=document.querySelector('[data-fire-token-action="copy"]'),c=document.querySelector('[data-fire-token-action="regen"]'),s=document.querySelector('[data-fire-token-action="revoke"]');if(!w)return;let e=A.fireToken;A.plainToken?(w.textContent=A.plainToken,w.classList.add("is-plain")):e&&e.has_token?(w.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:e.prefix||""}),w.classList.remove("is-plain")):(w.textContent=ServerI18n.t("extTokenNotSetHint"),w.classList.remove("is-plain")),v&&(v.disabled=!A.plainToken),c&&(c.textContent=e&&e.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),s&&(s.disabled=!(e&&e.has_token))}function L(){let w=new Set(A.sources.map(v=>v.source));document.querySelectorAll(".admin-ext-card").forEach(v=>{let c=f.find(l=>l.id===v.dataset.ext);if(!c)return;let s=v.querySelector("[data-ext-dot]");if(!s)return;let e=c.sourceMatch&&w.has(c.sourceMatch);s.classList.toggle("is-live",!!e),s.classList.toggle("is-cold",!e)})}function P(){let w=document.querySelector("[data-slido-status]");if(!w)return;let v=F(A.slidoStatus);w.textContent=v.text,w.classList.toggle("is-live",v.tone==="is-live"),w.classList.toggle("is-error",v.tone==="is-error");let c=A.slidoStatus&&A.slidoStatus.extension,s=w.closest(".admin-ext-card"),e=s&&s.querySelector("[data-ext-download-step]"),l=s&&s.querySelector("[data-ext-download]"),a=s&&s.querySelector("[data-ext-version]");c&&c.download_url&&c.version?(l&&l.setAttribute("href",c.download_url),e&&(e.hidden=!1),a&&(a.textContent="v"+c.version)):e&&(e.hidden=!0)}function $(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(g))return;w.insertAdjacentHTML("beforeend",C());let v=document.getElementById(g);v&&v.addEventListener("click",c=>{let s=c.target.closest("[data-fire-token-action]");if(!s)return;let e=s.dataset.fireTokenAction;e==="regen"?N():e==="revoke"?E():e==="copy"&&A.plainToken&&window.AdminUtils.copyText(A.plainToken,ServerI18n.t("firetokenToastCopied"))}),M(),A.stopPoll||(A.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(g)},intervalMs:y,tick:k}))}window.AdminExtensions={slidoStatusView:F},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&$()})})()});var jt=ge(()=>{(function(){"use strict";let g="sec-firetoken-overview",h=window.AdminUtils.escapeHtml,y=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function A(){return`
      <div id="${g}" class="admin-ft-page hud-page-stack lg:col-span-2">
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
    `}async function U(){await Promise.all([F(),C(),m()])}async function F(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;f.token=await w.json(),N()}catch{}}async function C(){try{let w=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();f.usage24h=Array.isArray(v.usage_24h)?v.usage_24h:[],f.ips=Array.isArray(v.ips)?v.ips:[],S(),L(),E()}catch{}}async function m(){try{let w=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();f.audit=Array.isArray(v.events)?v.events:[],P()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);let c=await v.json();f.token={enabled:c.enabled,prefix:c.prefix,has_token:!0,rotated_at:c.rotated_at,created_at:c.created_at||c.rotated_at},f.plainToken=c.token,N(),window.AdminUtils.copyText(c.token,ServerI18n.t("firetokenToastGenerated")),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);f.token=await v.json(),f.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function x(w){if(!w)return"\u2014";let v=Date.now()/1e3-w;return v<60?ServerI18n.t("firetokenJustNow"):v<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(v/60)}):v<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(v/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(v/86400)})}function k(w){if(!w)return"\u2014";try{return new Date(w*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let w=f.token,v=document.querySelector("[data-ft-token-display]"),c=document.querySelector("[data-ft-status]"),s=document.querySelector('[data-ft-action="copy"]'),e=document.querySelector('[data-ft-action="regen"]'),l=document.querySelector('[data-ft-action="revoke"]'),a=document.querySelector('[data-ft-stat="created"]'),d=document.querySelector('[data-ft-stat="rotated"]'),o=document.getElementById("adminFtCurl");if(v&&(f.plainToken?(v.textContent=f.plainToken,v.classList.add("is-plain")):w&&w.has_token?(v.textContent=(w.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",v.classList.remove("is-plain")):(v.textContent=ServerI18n.t("firetokenNotSetHint"),v.classList.remove("is-plain")),c&&(w&&w.enabled&&w.has_token?(c.textContent=ServerI18n.t("firetokenStatusHealthy"),c.className="admin-ft-status is-good"):w&&w.has_token?(c.textContent=ServerI18n.t("firetokenStatusDisabled"),c.className="admin-ft-status is-warn"):(c.textContent=ServerI18n.t("firetokenStatusUnset"),c.className="admin-ft-status is-muted")),s&&(s.disabled=!f.plainToken),l&&(l.disabled=!(w&&w.has_token)),e&&(e.textContent=w&&w.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),a&&(a.textContent=w?k(w.created_at):"\u2014"),d&&(d.textContent=w?x(w.rotated_at):"\u2014"),o)){let t=f.plainToken?f.plainToken:w&&w.prefix?w.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";o.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${t}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function E(){let w=f.usage24h.map(a=>Number(a)||0),v=w.reduce((a,d)=>a+d,0),c=w.length?Math.max(...w):0,s=document.querySelector('[data-ft-stat="hits"]'),e=document.querySelector('[data-ft-stat="peak"]'),l=document.querySelector("[data-ft-peak-meta]");s&&(s.textContent=v.toLocaleString()),e&&(e.textContent=c.toLocaleString()),l&&(l.textContent=ServerI18n.t("firetokenPeakMeta",{peak:c.toLocaleString()}))}function S(){let w=document.getElementById("adminFtChart24h");if(!w)return;let v=f.usage24h.map(l=>Number(l)||0);if(!v.length){w.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let c=Math.max(...v),s=12e3,e=c>0?Math.min(100,s/Math.max(c,s)*100):100;w.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${v.map((l,a)=>{let d=c>0?Math.max(2,l/c*100):2;return`<div class="bar ${c>0&&l===c?"is-peak":""}" style="height:${d}%" title="${a.toString().padStart(2,"0")}:00 \u2014 ${l}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(l=>`<span>${String(l).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function L(){let w=document.getElementById("adminFtIps"),v=document.querySelector("[data-ft-ip-count]");if(!w)return;let c=f.ips||[];if(v&&(v.textContent=c.length?`${c.length} IP`:"\u2014"),!c.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let s=c[0]?.ip;w.innerHTML=c.map((e,l)=>{let a=l===0,d=e.source==="web"&&(e.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${a?"is-top":""}">
          <span class="ip">${h(e.ip||"?")}</span>
          ${a?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${d?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${h(e.source||"\u2014")}</span>
          <span class="cnt">${e.count||0} hits</span>
          <span class="when">${x(e.last_seen)}</span>
        </div>`}).join("")}function P(){let w=document.getElementById("adminFtAudit");if(!w)return;let v=f.audit||[];if(!v.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let c={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},s={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};w.innerHTML=v.map(e=>{let l=s[e.kind]||"is-info",a=c[e.kind]||e.kind,d=e.meta||{},o=d.prefix?` \xB7 prefix=${h(d.prefix)}`:d.enabled!=null?` \xB7 enabled=${d.enabled}`:"";return`
        <div class="admin-ft-audit-row ${l}">
          <span class="ts">${k(e.ts)}</span>
          <span class="kind">${h(a)}</span>
          <span class="detail">${o}</span>
        </div>`}).join("")}function $(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(g))return;w.insertAdjacentHTML("beforeend",A());let v=document.getElementById(g);v&&v.addEventListener("click",c=>{let s=c.target.closest("[data-ft-action]");if(!s)return;let e=s.dataset.ftAction;e==="regen"?M():e==="revoke"?D():e==="copy"&&f.plainToken&&window.AdminUtils.copyText(f.plainToken,ServerI18n.t("firetokenToastCopied"))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(g),intervalMs:y,tick:U}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&$()})})()});var Ut=ge(()=>{(function(){"use strict";let g="sec-about-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},y="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",A=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],U=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",C={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
      <div id="${g}" class="admin-about-page hud-page-stack lg:col-span-2">
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
                <div class="admin-about-version-name">${y}</div>
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${h(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${f}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${A.slice(0,4).map($=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${h($.v)}</span>
                  ${$.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${h($.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${$.notes.slice(0,3).map(w=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${h(w.t)}">${h(w.t.toUpperCase())}</span>
                      <span class="msg">${h(w.l)}</span>
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
              ${U.slice(0,6).map($=>`
                <div class="admin-about-oss-row">
                  <span class="n">${h($.n)}</span>
                  <span class="v">${h($.v)}</span>
                  <span class="l">${h($.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M($){if(!$||$<0)return"\u2014";let w=Math.floor($/86400),v=Math.floor($%86400/3600),c=Math.floor($%3600/60);return w>0?`${w}d ${v}h`:v>0?`${v}h ${c}m`:`${c}m`}function D(){let $=document.querySelector("[data-about-tag]"),w=document.querySelector("[data-about-build]"),v=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),s=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),l=document.querySelector("[data-about-ws-path]");if($&&($.textContent=`v${C.appVersion}`),w){let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";w.textContent=`BUILD \xB7 ${a} \xB7 stable channel`,e&&(e.textContent=a)}if(v){let a=C.serverStartedAt?C.serverTime-C.serverStartedAt:0;v.textContent=M(a)}if(c&&(C.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):C.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:C.latestVersion||""}):c.textContent="\u2014",c.style.color=C.isLatest===!0?"var(--hud-lime)":C.isLatest===!1?"var(--hud-amber)":""),s&&(s.textContent=C.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:x(C.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),l){let a=window.DANMU_CONFIG||{};l.textContent=a.wsPath||"/ws"}}function x($){let w=Number($)||0;if(!w)return"\u2014";let v=String(w).length>12?w:w*1e3,c=(Date.now()-v)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function k($,w){let v=l=>String(l||"").replace(/^v/i,"").split("-")[0].split(".").map(function(a){return parseInt(a,10)||0}),c=v($),s=v(w),e=Math.max(c.length,s.length);for(let l=0;l<e;l++){let a=c[l]||0,d=s[l]||0;if(a>d)return!0;if(a<d)return!1}return!1}async function N({silent:$}={}){$||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let w=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!w.ok)throw new Error("HTTP "+w.status);let c=((await w.json()).tag_name||"").replace(/^v/i,"");C.latestVersion=c,C.lastCheckedAt=Date.now(),C.isLatest=!k(c,C.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:C.lastCheckedAt,latest:c,isLatest:C.isLatest}))}catch{}D(),$||window.showToast&&window.showToast(C.isLatest?ServerI18n.t("aboutToastLatest",{v:C.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(w){$||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:w.message||""}),!1)}}function E(){try{let $=localStorage.getItem(F);if(!$)return;let w=JSON.parse($);C.latestVersion=w.latest,C.lastCheckedAt=Number(w.ts)||0,C.isLatest=!!w.isLatest}catch{}}async function S(){try{let $=await fetch("/admin/metrics",{credentials:"same-origin"});if(!$.ok)return;let w=await $.json();C.serverStartedAt=Number(w.server_started_at)||0,C.serverTime=Number(w.server_time)||Date.now()/1e3,D()}catch{}}function L(){let $=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",w=C.serverStartedAt?C.serverTime-C.serverStartedAt:0,v=(navigator.userAgent||"").slice(0,200),c=[`${y} v${C.appVersion}`,`Channel: ${$}`,`Uptime: ${M(w)}`,`User-Agent: ${v}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function P(){let $=document.getElementById("settings-grid");if(!$||document.getElementById(g))return;$.insertAdjacentHTML("beforeend",m()),C.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",E(),D();let w=document.getElementById(g);w&&w.addEventListener("click",function(v){let c=v.target.closest("[data-about-action]");if(!c)return;let s=c.dataset.aboutAction;s==="copy"?L():s==="check-update"?N({silent:!1}):s==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():s==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),S(),setInterval(S,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&P()})})()});var Kt=ge(()=>{(function(){"use strict";let g="admin-setup-wizard-root",h="danmu.setupWizard.completed",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],A=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function U(t){return t?t.label?t.label:t.labelKey?ServerI18n.t(t.labelKey):t.name||t.id||"\u2014":"\u2014"}function F(t){return t?t.descriptionKey?ServerI18n.t(t.descriptionKey):t.description||"":""}let C={open:!1,step:0,themes:A.slice(),activeTheme:A[0].name,selectedTheme:A[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){C.publicUrl=window.location.origin+"/"}function M(){let t=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";t==="setup"&&!C.open?D():t!=="setup"&&C.open&&x({silent:!0})}function D(){C.open=!0,C.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",k()),c()),e(),S(),N()}function x(t){let u=t&&t.silent;C.open=!1,document.body.dataset.setupWizardOpen="";let b=document.getElementById(g);if(b&&b.remove(),!u&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function k(){return`
      <div id="${g}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
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
            ${f.map(function(t,u){return`
                <div class="admin-setup-step" data-step-index="${u}">
                  <span class="bullet">${u+1}</span>
                  <span class="lbl">${y(ServerI18n.t(t.labelKey))}</span>
                </div>
                ${u<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function N(){let t=document.getElementById(g);if(!t)return;t.querySelectorAll(".admin-setup-step").forEach(function(T,I){T.classList.toggle("is-done",I<C.step),T.classList.toggle("is-active",I===C.step)}),t.querySelectorAll(".admin-setup-step-sep").forEach(function(T,I){T.classList.toggle("is-done",I<C.step)});let u=t.querySelector("[data-setup-meta]");u&&(u.textContent=ServerI18n.t("setupWizardStepMeta",{current:C.step+1,total:f.length}));let b=t.querySelector('[data-setup-action="prev"]');b&&(b.disabled=C.step===0);let n=t.querySelector('[data-setup-action="next"]');if(n){let T=f[C.step].id;n.textContent=ServerI18n.t("setupWizardNext")}let i=t.querySelector("[data-setup-foot]");i&&(i.hidden=f[C.step].id==="done");let r=t.querySelector("[data-setup-content]");if(!r)return;let p=f[C.step].id;p==="server"?r.innerHTML=E():p==="moderation"?r.innerHTML=L():p==="theme"?r.innerHTML=w():r.innerHTML=v(),s(p)}function E(){let t=C.readiness,u=t?Number(t.overlay_count)||0:null,b=u!==null&&u>0,i=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:C.publicUrl},{ok:b,unknown:u===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:b?ServerI18n.t("setupWizardReadyDisplayOk",{n:u}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(C.activeTheme||C.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:U(C.themes.filter(function(r){return(r.name||r.id)===(C.selectedTheme||C.activeTheme)})[0]||C.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(r){let p=r.unknown?"is-unknown":r.ok?"is-done":"is-pending",T=r.unknown?"?":r.ok?"\u2713":"!",I='<span class="admin-setup-ready-title">'+y(r.title)+'</span><span class="admin-setup-ready-value">'+y(r.value||"")+"</span>",_=r.goto?'<a class="admin-setup-ready-go" href="'+r.goto+'" data-setup-goto="'+r.goto+'">'+y(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+p+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+T+"</span>"+I+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${y(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${y(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${i}</div>
      </div>`}async function S(){try{let t=await fetch("/overlay_status",{credentials:"same-origin"});if(!t.ok)throw new Error("HTTP "+t.status);let u=await t.json();C.readiness={overlay_count:Number(u.overlay_count)||0,mode:u.mode||""}}catch{C.readiness=null}C.open&&f[C.step].id==="server"&&N()}function L(){let t=C.moderationRules.map(function(u){return`
        <a class="admin-setup-mod-row" href="#/${u.route}" data-setup-goto="#/${u.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${y(ServerI18n.t(u.labelKey))}</span>
            <span class="admin-setup-mod-desc">${y(ServerI18n.t(u.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${y(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${y(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${y(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${t}</div>
      </div>`}let P=["default","neon","retro","cinema"];function $(){let t={};return(C.themes||[]).forEach(function(u){t[u.name||u.id]=u}),P.map(function(u){let b=A.filter(function(i){return i.name===u})[0],n=t[u];return b?{name:u,label:n&&n.label,labelKey:b.labelKey,descriptionKey:b.descriptionKey,colors:b.colors}:n}).filter(Boolean)}function w(){let t=$();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${t.map(function(u){let b=u.name||u.id||"",n=(C.selectedTheme||C.activeTheme)===b,i=(u.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${n?" is-selected":""}" data-setup-theme="${y(b)}">
                ${n?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${i.map(function(r,p){let T=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${y(r)};font-size:${10+p*2}px;text-shadow:0 0 6px ${y(r)}66;">${T[p]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${y(U(u))}</div>
                <div class="admin-setup-theme-sub">${y(F(u))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function v(){let t=(function(){for(let u=0;u<C.themes.length;u+=1){let b=C.themes[u];if((b.name||b.id)===(C.selectedTheme||C.activeTheme))return U(b)}return C.selectedTheme||C.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${y(C.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${y(t)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${y(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${y(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function c(){let t=document.getElementById(g);t&&t.addEventListener("click",function(u){if(u.target===t){x();return}let b=u.target.closest("[data-setup-action]");if(b){if(b.dataset.setupAction==="close"){x();return}if(b.dataset.setupAction==="prev"&&C.step>0){C.step-=1,N();return}b.dataset.setupAction==="next"&&a()}})}function s(t){let u=document.getElementById(g);if(u){if(t==="moderation"||t==="done"||t==="server"){if(u.querySelectorAll("[data-setup-goto]").forEach(function(b){b.addEventListener("click",function(){x();let n=b.dataset.setupGoto;n&&(window.location.hash=n)})}),t==="done"){let b=u.querySelector("[data-setup-complete-cta]");b&&b.addEventListener("click",d)}return}if(t==="theme"){u.querySelectorAll("[data-setup-theme]").forEach(function(b){b.addEventListener("click",function(){C.selectedTheme=b.dataset.setupTheme||C.selectedTheme,N()})});return}}}async function e(){try{let t=await fetch("/admin/themes",{credentials:"same-origin"});if(!t.ok)return;let u=await t.json(),b=Array.isArray(u.themes)?u.themes:[];if(!b.length)return;C.themes=b.map(function(n){return{name:n.name||n.id||"",label:n.label||n.display_name||n.name||"",description:n.description||"",colors:n.preview_colors||n.colors||n.palette||A[0].colors}}),C.activeTheme=u.active||C.themes[0]&&C.themes[0].name||C.activeTheme,C.selectedTheme||(C.selectedTheme=C.activeTheme),C.open&&f[C.step].id==="theme"&&N()}catch{}}async function l(){if(!C.selectedTheme||C.selectedTheme===C.activeTheme)return!0;try{let t=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C.selectedTheme})});if(!t.ok)throw new Error("HTTP "+t.status);return C.activeTheme=C.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function a(){if(!(f[C.step].id==="theme"&&!await l())){if(C.step<f.length-1){C.step+=1,N();return}d()}}function d(){try{localStorage.setItem(h,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),x()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){x()},isCompleted:function(){try{return!!localStorage.getItem(h)}catch{return!1}},__setCapabilityForTest:function(){}};function o(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&o()})})()});var Wt=ge(()=>{(function(){"use strict";let g="sec-poll-deepdive-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(S){return String(S).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})},y={poll:null,refreshTimer:0};function f(){return`
      <div id="${g}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-pdd-title>${ServerI18n.t("adminRouteTitle_poll-deepdive")}</h2>
          <!-- \u8FD4\u56DE\u9023\u7D50\u5728\u5361\u7247\u9801\u9996\uFF08\u2039 \u6295\u7968\uFF0C\u8A2D\u8A08\u7A3F 08 \xB7 P1\uFF09\u2014\u2014\u9019\u88E1\u518D\u653E\u4E00\u500B
               \u300C\u2190 \u56DE\u6295\u7968\u5217\u8868\u300D\u662F\u540C\u4E00\u4EF6\u4E8B\u8AAA\u5169\u6B21\u3002 -->
          <p class="admin-ui-page-note" data-pdd-note>${ServerI18n.t("pollDeepdivePageNote")}</p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">${ServerI18n.t("pollDeepdiveLoadingText")}</div>
        </div>
      </div>`}function A(S){if(S.innerHTML="",!window.AdminEmpty){S.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let L=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});L.classList.add("lg:col-span-2"),L.dataset.emptyKind="poll-deepdive",S.appendChild(L)}let U=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(S){return S?new Date(S*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function C(S){if(!S||S.length<2)return"";let L=Math.max.apply(null,S.map(function(c){return c.n}).concat([1])),P=100,$=32,w=P/(S.length-1),v=S.map(function(c,s){let e=(s*w).toFixed(2),l=($-c.n/L*($-2)-1).toFixed(2);return e+","+l});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+P+" "+$+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+v.join(" ")+'" /></svg>'}function m(S){let L=S.state||(S.active?"active":"ended"),P=S.question||"\u2014",$=Array.isArray(S.options)?S.options:[],w=function(b){return Number(b.votes!=null?b.votes:b.count)||0},v=$.reduce(function(b,n){return b+w(n)},0),c=L==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(S.ended_at)}),s=(function(){let b=Number(S.started_at)||0;if(!b)return"\u2014";let n=L==="active"?Date.now()/1e3:Number(S.ended_at)||b,i=Math.max(0,Math.floor(n-b));return Math.floor(i/60)+":"+String(i%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,l=e>0?Math.round(v/e*100)+"%":"\u2014",a=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:v,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),d=(function(){let b=Array.isArray(S.questions)?S.questions:[],n=0;for(let i of b)n+=Number(i.duplicate_attempts)||0;return b.length||(n=Number(S.duplicate_attempts)||0),n})(),o=$.map(function(b,n){let i=w(b),r=v>0?i/v*100:0,p=U[n%U.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${h(b.label||b.text||b.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:n+1}))}</span>
            <span class="votes">${i} \xB7 ${r.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${r.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(S.vote_timeline)?S.vote_timeline:[],u=t.length>=2?C(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${h(P)}</div>
          <div class="admin-pdd-state">${h(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${v}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${l}</div><div class="sub">${h(a)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${h(s)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${d}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${$.length?o:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${u}</div>
        </article>
      </div>`}function M(){let S=document.querySelector("[data-pdd-grid]");if(S){if(!y.poll||!y.poll.poll_id){A(S);return}S.innerHTML=m(y.poll)}}async function D(){try{let S=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!S.ok)return;let L=await S.json();y.poll=L,M()}catch{}}function x(){if(!y.poll||!Array.isArray(y.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let S=[["option_label","votes","percentage"]],L=y.poll.options.reduce(function(c,s){return c+(Number(s.votes!=null?s.votes:s.count)||0)},0);y.poll.options.forEach(function(c,s){let e=Number(c.votes!=null?c.votes:c.count)||0,l=L>0?(e/L*100).toFixed(2):"0.00";S.push([c.label||"option_"+(s+1),e,l])});let P=S.map(function(c){return c.map(function(s){let e=String(s);return e.includes(",")||e.includes('"')?'"'+e.replace(/"/g,'""')+'"':e}).join(",")}).join(`
`),$=new Blob([P],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL($),v=document.createElement("a");v.href=w,v.download="poll-"+(y.poll.poll_id||"current")+".csv",document.body.appendChild(v),v.click(),document.body.removeChild(v),setTimeout(function(){URL.revokeObjectURL(w)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function k(){try{let S=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),y.refreshTimer||(y.refreshTimer=setInterval(D,5e3))):y.refreshTimer&&(clearInterval(y.refreshTimer),y.refreshTimer=0)}function E(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(g))return;S.insertAdjacentHTML("beforeend",f());let L=document.getElementById(g);L&&L.addEventListener("click",function(P){let $=P.target.closest("[data-pdd-action]");$&&($.dataset.pddAction==="export-csv"?x():$.dataset.pddAction==="push"&&k())}),D(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&E()})})()});var Gt=ge(()=>{(function(){"use strict";let g="admin-message-drawer-root",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},A=null;function U(l){let a=l.detail&&l.detail.entry;a&&(f.open||(A=document.activeElement),f.entry=a,F(),a.data&&a.data.fingerprint&&D(a.data.fingerprint),x(a))}function F(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",k()),N()),E();let l=document.querySelector("#"+g+" .admin-msgd-v4__close")||document.querySelector("#"+g+" button");if(l)try{l.focus({preventScroll:!0})}catch{}}function C(){f.open=!1,document.body.dataset.messageDrawerOpen="";let l=document.getElementById(g);if(l&&l.remove(),A&&typeof A.focus=="function"&&document.contains(A))try{A.focus({preventScroll:!0})}catch{}A=null}function m(l){if(!f.open)return;if(l.key==="Escape"){C();return}let a=document.activeElement,d=a?(a.tagName||"").toLowerCase():"";if(!(a&&(a.isContentEditable||d==="input"||d==="textarea"||d==="select"))){if(l.key==="ArrowLeft"||l.key==="k"){M(-1),l.preventDefault();return}if(l.key==="ArrowRight"||l.key==="j"){M(1),l.preventDefault();return}}}function M(l){if(!f.entry)return;let a=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(a=window.AdminLiveFeed.getEntries()),!a.length)return;let d=a.findIndex(function(u){return u.id===f.entry.id});if(d<0)return;let o=d+-l;if(o<0||o>=a.length){window.showToast&&window.showToast(l<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=a[o];f.entry=t,f.fingerprintRecord=null,x(t),E(),t.data&&t.data.fingerprint&&D(t.data.fingerprint)}async function D(l){try{let a=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!a.ok)return;let d=await a.json(),t=(Array.isArray(d.records)?d.records:[]).find(function(u){return u.fingerprint===l});f.fingerprintRecord=t||null,E()}catch{}}function x(l){let a=l.data&&l.data.fingerprint;if(!a){f.sameFpEntries=[];return}let d=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(d=window.AdminLiveFeed.getEntries()),f.sameFpEntries=d.filter(function(o){return(o.data&&o.data.fingerprint||o.fingerprint||"")===a}).slice(0,8)}function k(){return`
      <div id="${g}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let l=document.getElementById(g);l&&l.addEventListener("click",function(a){let d=a.target.closest("[data-msgd-action]");if(!d)return;a.stopPropagation();let o=d.dataset.msgdAction;o==="close"?C():o==="ban-fp"?w():o==="ban-fp-quick"?$():o==="recall-msg"?c():o==="blacklist-kw"?s():o==="reply"?e():o==="prev"?M(-1):o==="next"&&M(1)})}function E(){let l=document.getElementById(g);if(!l)return;let a=l.querySelector("[data-msgd-body]");a&&(a.innerHTML=S())}function S(){let l=f.entry;if(!l)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let a=l.data||{},d=a.fingerprint||"\u2014",o=d==="\u2014"?"\u2014":d.slice(0,8),t=d==="\u2014"?"\u2014":d.slice(0,12),u=l.ts?L(l.ts):"\u2014",b=a.nickname||ServerI18n.t("msgDrawerAnonymous"),n=f.fingerprintRecord||{},i=Number(n.message_count)||0,r=Number(n.violation_count)||0,p=f.sameFpEntries||[],T=p.length?Math.round(p.reduce((_,B)=>_+((B.data||B).text||"").length,0)/p.length):(a.text||"").length,I=0;for(let _=0;_<d.length;_++)I=I*31+d.charCodeAt(_)&65535;return I=I%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${I})">${y((b||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${y(b)}</div>
          <div class="admin-msgd-v4__fp">fp:${y(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${y(u)}</span>
      </div>

      <div class="admin-msgd-v4__body">${y(a.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${i||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${T}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${r>0?"warn":"good"}">${r}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${y(a.ip||"\u2014")}<br/>
          UA \xB7 ${y(a.user_agent||a.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${d==="\u2014"?"disabled":""}>${y(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${a.message_id?"":"disabled"}>${y(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function L(l){try{let a=new Date(l),d=String(a.getHours()).padStart(2,"0"),o=String(a.getMinutes()).padStart(2,"0"),t=String(a.getSeconds()).padStart(2,"0");return d+":"+o+":"+t}catch{return"\u2014"}}function P(l){let a;if(typeof l=="number")a=l*1e3;else if(typeof l=="string")a=new Date(l).getTime();else return"\u2014";if(!a)return"\u2014";let d=(Date.now()-a)/1e3;return d<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(d)}):d<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(d/60)}):d<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(d/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(d/86400)})}async function $(l,a,d){let o=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!o)return;let t=parseInt(a||0,10)||0,u=t>0?await window.AdminModeration.banFingerprint(o,t,l):await window.AdminModeration.callBlock("fingerprint",o,l);if(!u.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:u.error||""}),!1);return}let b=d||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:o.slice(0,8),label:b}),!0),C()}async function w(){let l=f.entry&&f.entry.data||{},a=l.fingerprint||"\u2014";if(a==="\u2014")return;let d=a.slice(0,12),o=l.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let I=0;I<a.length;I++)t=t*31+a.charCodeAt(I)&65535;t=t%360;let u=document.createElement("div");u.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${y((o||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${y(o)}</div>
          <div class="fp">fp:${y(d)}</div>
          <div class="ip">IP \xB7 ${y(l.ip||"\u2014")} \xB7 ${y(l.user_agent||l.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let b=I=>{u.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),I.classList.add("is-active")};if(u.addEventListener("click",I=>{let _=I.target.closest("[data-ban-duration]");_&&b(_)}),u.addEventListener("keydown",I=>{if(I.key!=="Enter"&&I.key!==" ")return;let _=I.target.closest("[data-ban-duration]");_&&(I.preventDefault(),b(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:u,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let i=(u.querySelector("[data-ban-reason]")||{}).value||"",r=u.querySelector(".admin-bancfm-dchip.is-active"),p=r&&parseInt(r.dataset.banDuration||"0",10)||0,T=r?r.textContent.trim():ServerI18n.t("msgDrawerPermanent");return $(i.trim(),p,T)}function v(){}async function c(){let l=f.entry,a=l&&l.data&&l.data.message_id;if(!a)return;if(!(await window.AdminModeration.recall(a)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),C()}async function s(){let l=f.entry&&f.entry.data&&f.entry.data.text;if(!l)return;await window.AdminModeration.blockKeyword(l)&&C()}async function e(){let l=document.querySelector("[data-msgd-reply]"),a=l?l.value.trim():"";if(a)try{let d=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:a})});if(!d.ok)throw new Error("HTTP "+d.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),l&&(l.value="")}catch(d){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:d.message||""}),!1)}}window.AdminMessageDrawer={open:function(l){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:l}}))},close:C},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",U),document.addEventListener("keydown",m))})})()});var zt=ge(()=>{(function(){"use strict";let g="danmu.notifications.read",h="danmu.notifications.archived",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={items:[],refreshTimer:0};function A(o){try{let t=localStorage.getItem(o);if(!t)return new Set;let u=JSON.parse(t);return new Set(Array.isArray(u)?u:[])}catch{return new Set}}function U(o,t){try{localStorage.setItem(o,JSON.stringify(Array.from(t)))}catch{}}function F(o){let t=A(g);t.add(o),U(g,t)}async function C(){let o=[m().catch(function(){return[]}),M().catch(function(){return[]}),D().catch(function(){return[]}),x().catch(function(){return[]})],u=(await Promise.all(o)).flat();u.sort(function(b,n){return(n.ts||0)-(b.ts||0)}),f.items=u,L(),w()&&P()}async function m(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(b,n){let i=(Number(b.ts)||0)*1e3,r="tok-"+(b.ts||n)+"-"+(b.kind||"x"),p=b.kind||"?",T="info",I=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")T="info",I=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")T="warn",I=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let _=b.meta&&b.meta.enabled;T=_?"good":"warn",I=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:r,sev:T,src:"Fire Token",ts:i,title:I,desc:ServerI18n.t("notifDescEventType",{kind:p})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function M(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(b,n){let i=(Number(b.ts)||0)*1e3,r="flt-"+(b.ts||n)+"-"+(b.action||"x")+"-"+n,p=b.action||"match";return{id:r,sev:p==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:b.rule_id||"?",text:(b.text_excerpt||"").slice(0,60)}),raw:b}})}async function D(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json();return(Array.isArray(t.events)?t.events:[]).map(function(b,n){let i=(Number(b.ts)||0)*1e3,r=String(b.kind||"?");return{id:"wh-"+(b.ts||n)+"-"+r+"-"+n,sev:r==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:r}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:b.actor||"system"})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function x(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let t=await o.json(),u=Array.isArray(t.events)?t.events:[],b=new Set(["auth","broadcast","system","session","sessions"]);return u.filter(function(n){return b.has(String(n.source||""))}).map(function(n,i){let r=(Number(n.ts)||0)*1e3,p=String(n.kind||"?");return{id:"sys-"+(n.ts||i)+"-"+(n.source||"x")+"-"+p+"-"+i,sev:p==="login_failed"?"warn":"info",src:"System",ts:r,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:n.source||"?",actor:n.actor||"system"}),raw:n}})}let k="admin-notif-panel",N={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function E(o){let t=N[o];return t?ServerI18n.t(t.key):o}function S(){let o=A(g),t=A(h);return f.items.filter(u=>!o.has(u.id)&&!t.has(u.id))}function L(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let t=S().length;o.textContent=t>99?"99+":String(t),o.hidden=t===0}function P(){let o=document.getElementById(k);if(!o)return;let t=S().slice(0,20),u=t.length?t.map(b=>{let n=N[b.src];return'<li class="admin-notif__item" data-sev="'+y(b.sev)+'"><div class="admin-notif__text">'+y(b.title)+'</div><div class="admin-notif__meta">'+y(E(b.src))+" \xB7 "+y($(b.ts))+"</div>"+(n?'<button type="button" class="admin-notif__action" data-notif-go="'+y(n.hash)+'" data-notif-id="'+y(b.id)+'">'+y(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+y(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+y(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+y(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+u+"</ul>"}function $(o){if(!o)return"\u2014";let t=(Date.now()-o)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function w(){let o=document.getElementById(k);return!!o&&!o.hidden}function v(){let o=document.getElementById(k);o&&(P(),o.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(C,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&v()}function s(){let o=document.getElementById(k);o&&(o.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function e(){w()?s():v()}function l(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(t,o.firstChild),!document.getElementById(k)){let u=document.createElement("div");u.id=k,u.className="admin-notif",u.setAttribute("role","dialog"),u.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),u.hidden=!0,document.body.appendChild(u)}L(),c()}function a(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),e();return}let t=o.target.closest("[data-notif-go]");if(t){F(t.dataset.notifId),s(),location.hash=t.dataset.notifGo,L();return}if(o.target.closest("[data-notif-readall]")){S().forEach(u=>F(u.id)),P(),L();return}w()&&!o.target.closest("#"+k)&&s()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&w()&&s()}),window.addEventListener("hashchange",c),c()}function d(){l(),C()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(l).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),a(),d()})})()});var Vt=ge(()=>{(function(){"use strict";let g="sec-audit-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},y={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function A(){return`
      <div id="${g}" class="admin-audit-page hud-page-stack lg:col-span-2">
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
      </div>`}function U(e){if(!e)return"\u2014";try{let l=new Date(Number(e)*1e3),a=String(l.getHours()).padStart(2,"0"),d=String(l.getMinutes()).padStart(2,"0"),o=String(l.getSeconds()).padStart(2,"0");return`${a}:${d}:${o}`}catch{return"\u2014"}}function F(e){let l=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(l)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(l)?"warn":"info"}function C(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(e){return f.filterActor==="all"||String(e.actor||"").toLowerCase()===f.filterActor}function M(e){return f.filterSeverity==="all"||F(e)===f.filterSeverity}function D(){return f.events.filter(function(e){return m(e)&&M(e)})}function x(e){let l=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return l.target||l.keyword||l.fp||l.fingerprint||l.name||l.mode||l.session||l.hook_id||e.target||""}function k(e,l){let a=e!=null,d=l!=null;if(!a&&!d)return"";let o=a?h(JSON.stringify(e)):"",t=d?h(JSON.stringify(l)):"";return a?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${o}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function N(e){let l=e&&e.meta&&typeof e.meta=="object"?e.meta:{},a=[];e.detail&&a.push(`<span>${h(String(e.detail))}</span>`);let d=k(e.before,e.after);d&&a.push(d);let o=Object.assign({},l);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(u){delete o[u]}),Object.keys(o).length&&a.push(`<code class="admin-ui-code admin-audit-meta-extra">${h(JSON.stringify(o))}</code>`),!a.length){let u=y[e.source]&&y[e.source].label||e.source||"system";a.push(`<span>${h(String(u))}</span>`)}return a.join(" ")}function E(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function S(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let l=D();if(!l.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=l.map(function(a){let d=F(a),o=C(d),t=String(a.actor||"system"),u=x(a);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${d}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${h(U(a.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${o};box-shadow:0 0 6px ${o}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${E(t)}">${h(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${h(String(a.action||a.kind||"\u2014"))}</span>
              ${u?`<span class="admin-ui-target admin-audit-target">\u2192 ${h(String(u))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(a)}</div>
          </div>
        </div>`}).join("")}function L(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let l=D().length,a=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,d=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:l,actor:a,sev:d})}function P(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===f.filterSeverity)})}async function $(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let l=await e.json(),a=Array.isArray(l.events)?l.events.slice():[];a.sort(function(d,o){return Number(o.ts||0)-Number(d.ts||0)}),f.events=a,P(),S(),L()}catch{}}function w(){let e=D();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let l=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),a=URL.createObjectURL(l),d=document.createElement("a");d.href=a,d.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(function(){URL.revokeObjectURL(a)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function v(){let e=document.getElementById(g);e&&e.addEventListener("click",function(l){let a=l.target.closest("[data-audit-actor-filter]");if(a){f.filterActor=a.dataset.auditActorFilter||"all",P(),S(),L();return}let d=l.target.closest("[data-audit-severity-filter]");if(d){let o=d.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===o?"all":o,P(),S(),L();return}if(l.target.closest("[data-audit-export]")){w();return}l.target.closest("[data-audit-refresh]")&&$()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?($(),f.refreshTimer||(f.refreshTimer=setInterval($,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function s(){let e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",A()),v(),$(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&s()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&s()})})()});var Jt=ge(()=>{(function(){"use strict";let g="sec-audience-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},y=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,A={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function U(i){if(!i)return y[0];let r=0;for(let p=0;p<i.length;p++)r=r*31+i.charCodeAt(p)>>>0;return y[r%y.length]}function F(i){if(!i)return"\u2014";let r=typeof i=="number"?i*1e3:new Date(i).getTime();if(!r)return"\u2014";let p=Math.max(0,(Date.now()-r)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function C(i){return i==="blocked"||i==="high"?"is-danger":i==="mid"?"is-warn":"is-success"}function m(){return`
      <div id="${g}" class="admin-audience-page hud-page-stack lg:col-span-2">
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
      </div>`}function M(){let i=A.search.trim().toLowerCase(),r=A.records.slice();return i&&(r=r.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(i)!==-1||String(p.hash||"").toLowerCase().indexOf(i)!==-1})),r.sort(function(p,T){return A.sort==="last_seen"?(Number(T.last_seen)||0)-(Number(p.last_seen)||0):(Number(T.msgs)||0)-(Number(p.msgs)||0)}),A.filter==="all"?r:A.filter==="flagged"?r.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):A.filter==="extension"?r.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):r}function D(){let i=document.querySelector("[data-aud-stats]");if(!i)return;let r=A.records,p=r.length,T=r.filter(function(R){return R.state==="flagged"}).length,I=r.filter(function(R){return R.state==="blocked"}).length,_=r.reduce(function(R,j){return R+(Number(j.msgs)||0)},0),B=r.filter(function(R){let j=R.last_seen;if(!j)return!1;let O=typeof j=="number"?j*1e3:new Date(j).getTime();return(Date.now()-O)/1e3<300}).length;i.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${B}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${T}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${I}</div></div>`}function x(){let i=document.querySelector("[data-aud-filters]");if(!i)return;let r=A.records.length,p=A.records.filter(function(T){return T.state==="flagged"||T.state==="blocked"}).length;i.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:r})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let k="__anon__";function N(i){let r=(i.nickname||"").trim();return!r||r==="\u533F\u540D"}function E(i){let r=i.hash||i.fingerprint||"";return r?r.length>9?r.slice(0,4)+"\u2026"+r.slice(-4):r:"\u2014"}function S(){let i=[],r=[];return M().forEach(function(p){N(p)?r.push(p):i.push(p)}),r.length&&i.push({_anonGroup:!0,_count:r.length,fingerprint:k,msgs:r.reduce(function(p,T){return p+(Number(T.msgs)||0)},0),blocked:r.reduce(function(p,T){return p+(Number(T.blocked)||0)},0),last_seen:Math.max.apply(null,r.map(function(p){return p.last_seen||0})),state:r.some(function(p){return p.state==="blocked"})?"blocked":"active"}),i}function L(){let i=document.querySelector("[data-aud-list]"),r=document.querySelector("[data-aud-summary]");if(!i)return;let p=S(),T=Math.min(p.length,A.shown);if(r&&(r.textContent=ServerI18n.t("audienceShownOfTotal",{n:T,total:p.length})),p.length===0){i.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",i.appendChild(R);return}let I=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=p.slice(0,T).map(function(R){let j=R.fingerprint||"\u2014",O=R.state==="blocked",W=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),G=R._anonGroup?"?":W.slice(0,1),Z=U(j);return`
        <div class="admin-aud-row${A.selectedFp===j?" is-selected":""}" data-aud-row data-aud-fp="${h(j)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Z}">${h(G)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${h(W)}</span>
            ${R._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:R._count})}</span>`:""}
            ${O&&!R._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${R._anonGroup?"\u2014":h(E(R))}</span>
          <span class="col col-msgs">${Number(R.msgs)||0}</span>
          <span class="col col-blocked">${Number(R.blocked)||0}</span>
          <span class="col col-seen">${h(F(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${h(j)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),B=p.length>T?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";i.innerHTML=I+_+B}function P(i){return i&&A.records.find(function(r){return r.fingerprint===i})||null}function $(i){if(!i)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let r=[],p=Number(i.msgs)||0,T=i.fingerprint||"";i.state==="blocked"&&r.push(ServerI18n.t("audienceRuleBlocked")),i.state==="flagged"&&r.push(ServerI18n.t("audienceRuleFlagged")),p>=25?r.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&r.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let I=A.records.filter(function(j){return j.ip&&i.ip&&j.ip===i.ip}).length;I>=3&&r.push(ServerI18n.t("audienceRuleSameIp",{n:I})),(T.indexOf("slido")===0||T.indexOf("ext_")===0)&&r.push(ServerI18n.t("audienceRuleBridge")),(i.nickname==="\u533F\u540D"||!i.nickname)&&r.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",B="var(--hud-lime)",R="NORMAL";return i.state==="blocked"?(_="blocked",B="var(--hud-crimson)",R="BLOCKED"):i.state==="flagged"||p>=25?(_="high",B="var(--hud-crimson)",R="HIGH RISK"):(p>=15||I>=3)&&(_="mid",B="var(--hud-amber)",R="MID"),{level:_,color:B,label:R,rules:r}}async function w(i){A.detailLoading=!0;try{let r=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!r.ok){A.detailMessages=[];return}let p=await r.json(),T=Array.isArray(p.records)?p.records:[],I=Date.now()-300*1e3;A.detailMessages=T.filter(function(_){return(_.fingerprint||"")!==i?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=I}).slice(0,8)}catch{A.detailMessages=[]}finally{A.detailLoading=!1}}function v(){let i=document.querySelector("[data-aud-detail]");if(!i)return;let r=A.selectedFp;if(!r){i.hidden=!0,i.innerHTML="";return}let p=P(r);if(!p){A.selectedFp=null,i.hidden=!0;return}i.hidden=!1;let T=$(p);i.dataset.riskLevel=T.level;let I=U(r),_=!p.nickname||p.nickname==="\u533F\u540D",B=_?ServerI18n.t("audienceAnonymous"):p.nickname,R=_?"?":B.slice(0,1),j="fp:"+(r||"").slice(0,8),O=T.rules.length?T.rules.map(function(G){return"<li>"+h(G)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",W="";A.detailLoading?W='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":A.detailMessages.length===0?W='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":W=A.detailMessages.map(function(G){let Z=G.muted?"MASKED":G.banned?"BLOCKED":"SHOWN",le=G.muted?"var(--hud-amber)":G.banned?"var(--hud-crimson)":"var(--hud-lime)",ne=G.timestamp?new Date(G.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+h(ne)+'</span><span class="m">'+h(G.text||"")+'</span><span class="s" style="color:'+le+'">'+Z+"</span></div>"}).join(""),i.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+C(T.level)+'">'+h(T.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+I+'">'+h(R)+'</span><div><div class="nick">'+h(B)+'</div><div class="fp">'+h(j)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+T.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:T.rules.length})+"</div><ul>"+O+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+W+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+h(r)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+h(r)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+h(r)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+h(r)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+h(r)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+h(r)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(i){A.selectedFp=i,A.detailMessages=[],v(),w(i).then(v)}async function s(){try{let i=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!i.ok)return;let r=await i.json();A.records=Array.isArray(r.entries)?r.entries:[],A.serverStats=r&&r.stats||null,D(),x(),L(),A.selectedFp&&v()}catch{}}async function e(i,r,p){if(i)try{let T=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,flagged:!!r,note:p||""})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(r?ServerI18n.t("audienceToastFlagged",{fp:i.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:i.slice(0,8)}),!0),s()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:T.message||""}),!1)}}async function l(i,r){if(!i||i==="\u2014")return;let p=r??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:i.slice(0,8)}),"")||"");if(p!==null)try{let T=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i,reason:p})});if(!T.ok)throw new Error("HTTP "+T.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:i.slice(0,8)}),!0),s()}catch(T){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:T.message||""}),!1)}}async function a(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:i})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),s()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function d(i){if(!(!i||i==="\u2014"))try{let r=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:i,action:"mask",priority:0,enabled:!0})});if(!r.ok)throw new Error("HTTP "+r.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:i.slice(0,8)}),!0),s()}catch(r){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:r.message||""}),!1)}}async function o(i){if(!(!i||i==="\u2014"))try{let r=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);let p=await r.json(),I=(Array.isArray(p.rules)?p.rules:[]).filter(function(B){return B&&B.type==="fingerprint"&&B.pattern===i});if(I.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let B of I)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B.rule_id||B.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:i.slice(0,8)}),!0),s()}catch(r){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:r.message||""}),!1)}}async function t(i){if(!(!i||i==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(i.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:i})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:i.slice(0,8)}),!0),s()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function u(){let i=document.getElementById(g);i&&(i.addEventListener("input",function(r){let p=r.target.closest("[data-aud-search]");p&&(A.search=p.value||"",A.shown=f,L())}),i.addEventListener("change",function(r){let p=r.target.closest("[data-aud-sort]");p&&(A.sort=p.value,L())}),i.addEventListener("click",function(r){let p=r.target.closest("[data-aud-filter]");if(p){A.filter=p.dataset.audFilter,A.shown=f,x(),L();return}let T=r.target.closest("[data-aud-action='ban']");if(T){r.stopPropagation(),t(T.dataset.audFp);return}if(r.target.closest("[data-aud-action='refresh']")){s();return}if(r.target.closest("[data-aud-action='more']")){A.shown+=f,L();return}if(r.target.closest("[data-aud-action='close-detail']")){A.selectedFp=null,v();return}let R=r.target.closest("[data-aud-action='detail-ban']");if(R){t(R.dataset.audFp);return}let j=r.target.closest("[data-aud-action='detail-mask']");if(j){d(j.dataset.audFp);return}let O=r.target.closest("[data-aud-action='detail-safe']");if(O){o(O.dataset.audFp);return}let W=r.target.closest("[data-aud-action='flag']");if(W){r.stopPropagation(),e(W.dataset.audFp,W.dataset.audFlagged!=="true");return}let G=r.target.closest("[data-aud-action='kick']");if(G){r.stopPropagation(),l(G.dataset.audFp);return}let Z=r.target.closest("[data-aud-action='unkick']");if(Z){r.stopPropagation(),a(Z.dataset.audFp);return}let le=r.target.closest("[data-aud-row]");if(!(le&&le.dataset.audFp===k)&&le&&!r.target.closest("button")){c(le.dataset.audFp);return}}))}function b(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(s(),A.refreshTimer||(A.refreshTimer=setInterval(s,15e3))):A.refreshTimer&&(clearInterval(A.refreshTimer),A.refreshTimer=0)}function n(){let i=document.getElementById("settings-grid");!i||document.getElementById(g)||(i.insertAdjacentHTML("beforeend",m()),u(),s(),b(),window.addEventListener("hashchange",b))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&n()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&n()})})()});var Yt=ge(()=>{(function(){"use strict";let g=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],h={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},y=2500,f=0,A=0,U=null;function F(){if(U)return U;let x=document.createElement("div");return x.className="admin-konami-hud",x.setAttribute("aria-hidden","true"),x.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(x),U=x,x}function C(){if(f===0){U&&U.classList.remove("is-on");return}let x=F();x.classList.add("is-on");let k=x.querySelector(".admin-konami-hud-keys");k&&(k.innerHTML=g.map((E,S)=>`<span class="admin-konami-hud-key ${S<f?"is-filled":""}">${h[E]}</span>`).join(""));let N=x.querySelector(".admin-konami-hud-progress");if(N){let E=Math.round(f/g.length*100);N.style.width=E+"%"}}function m(x){f=0,A&&(clearTimeout(A),A=0),x||C()}function M(){A&&clearTimeout(A),A=setTimeout(()=>m(),y)}async function D(){try{let x=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(x){console.warn("[konami] trigger failed:",x&&x.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",x=>{let k=x.target;if(k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable))return;let N=g[f];if(!(x.key===N||N==="b"&&x.key.toLowerCase()==="b"||N==="a"&&x.key.toLowerCase()==="a")){f=x.key===g[0]?1:0,C(),f>0?M():A&&(clearTimeout(A),A=0);return}if(f++,C(),f>=g.length){m(!0),D();return}M()}),window.AdminKonami={trigger:D}})()});var Qt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(d){return d==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:d==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:d==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function y(){let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=d?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${d?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${g(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${o}`:""}
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
                aria-label="${g(ServerI18n.t("uploadFont"))}"
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
    `}var f=null,A=[];function U(d,o){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((d||[]).some(n=>n.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var b=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:o?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var n=document.getElementById("adminFontFileInput");n&&n.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});b.dataset.emptyKind="fonts",t.appendChild(b)}function F(d,o){let t=d.weight||"\u2014",u=d.sizeLabel||"\u2014",b=d.foundry||(d.type==="system"?"System":d.type==="default"?"Google / Noto":"Uploaded"),n=d.format||"\u2014",i=d.status||d.type,r=`font-family: "${g(d.name)}", sans-serif;`,p=h(i),T=[];if(o){if(i!=="default"&&T.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${g(d.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),i!=="default"){let I=i==="enabled"||i==="system",_=I?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");T.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${g(d.name)}" data-enabled="${I?"true":"false"}">${_}</button>`)}d.type==="uploaded"&&(T.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${g(d.name)}" title="${g(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),T.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${g(d.name)}">${g(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${g(d.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${r}" class="truncate">${g(d.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(T.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${T.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${g(b)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${g(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${g(u)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${g(n)}</span><div style="text-align:right">${p}</div></div>`}let C=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(C)return C;try{let d=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return d.ok?(C=(await d.json()).presets||{},C):{}}catch{return{}}}function D(d){return!d||!Number.isFinite(d)?"\u2014":d<1024?d+" B":d<1024*1024?(d/1024).toFixed(1)+" KB":(d/(1024*1024)).toFixed(2)+" MB"}async function x(d){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let o=await M();if(!Object.keys(o).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),u="",b=document.createElement("div");b.className="admin-font-subset-modal-body";let n=()=>{let p=Object.keys(o).map(I=>{let _=m[I]||{label:I,glyphs:"\u2014",estSize:"\u2014"},B=_.labelKey?ServerI18n.t(_.labelKey):_.label,R=t.has(I);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${I}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${g(B)}</span>
            <span class="admin-font-subset-chip-range">${g(o[I])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");b.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${g(d)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${p}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${g(u)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,b.querySelectorAll("[data-subset-preset]").forEach(I=>{I.addEventListener("click",_=>{_.preventDefault();let B=I.dataset.subsetPreset;t.has(B)?t.delete(B):t.add(B),n()})});let T=b.querySelector("[data-subset-custom]");T&&T.addEventListener("input",()=>{u=T.value})};if(n(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:b,width:540}))return;let r=[];if(t.forEach(p=>{o[p]&&r.push(o[p])}),u.trim()&&r.push(u.trim()),!r.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await k(d,r.join(","))}async function k(d,o){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:d}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(d)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:o})}),u=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(u.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let b=u.saved_bytes||0,n=Math.round((u.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:d,before:D(u.original_size),after:D(u.new_size),pct:n}),!0),S()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(d){try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:d})});if(!o.ok)throw new Error("HTTP "+o.status);f=d,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:d}),!0),S()}catch(o){console.error("[admin-fonts] set default failed:",o),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function E(d,o){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(d)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!o})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(o?"fontsToggleOffToast":"fontsToggleOnToast",{name:d}),!0),S()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function S(){var d=document.getElementById("adminFontList");if(!d)return;let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var u=await t.json(),b=u.fonts||[];if(A=b,window.AdminTabs?.setTabCount?.("assets","fonts",b.length||""),U(b,o),b.length===0){d.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,v(b);return}d.innerHTML=b.map(n=>F(n,o)).join(""),v(b),c()}catch(n){console.error("[admin-fonts] fetch failed:",n),d.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,U([],o)}}async function L(d){try{let o=await d.slice(0,4).arrayBuffer(),t=new Uint8Array(o);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function P(d,o){let t=document.getElementById("adminFontDropStatus");if(t){if(!d){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=d,t.classList.toggle("is-good",o==="good"),t.classList.toggle("is-bad",o==="bad")}}function $(d){let o=document.getElementById("adminFontUploadError");if(!o)return;if(!d){o.hidden=!0,o.innerHTML="";return}o.hidden=!1,o.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${g(d)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=o.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let u=document.getElementById("adminFontFileInput");u&&u.click()})}async function w(d){if(!d)return;$("");let o=d.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(o)){window.showToast(ServerI18n.t("invalidFileType"),!1),P(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),$(ServerI18n.t("fontsExtNotSupportedFull"));return}if(d.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),P(ServerI18n.t("fontsFileTooLarge"),"bad"),$(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await L(d);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),P(ServerI18n.t("fontsMagicInvalid"),"bad"),$(ServerI18n.t("fontsMagicValidationFailed"));return}P(ServerI18n.t("fontsUploadValidated",{magic:t,size:(d.size/1024).toFixed(1)}),"good");try{var u=new FormData;u.append("fontfile",d);var b=await window.csrfFetch("/admin/upload_font",{method:"POST",body:u}),n=await b.json();b.ok?(window.showToast(n.message||ServerI18n.t("fontUploadFallback")),P(ServerI18n.t("fontsUploadedStatus",{filename:d.name}),"good"),$(""),await S()):(window.showToast(n.error||ServerI18n.t("uploadFailed"),!1),P(n.error||ServerI18n.t("uploadFailed"),"bad"),$(n.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(i){console.error("[admin-fonts] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1),P(ServerI18n.t("fontsNetworkErrorShort"),"bad"),$(ServerI18n.t("fontsNetworkDisconnected"))}}function v(d){let o=document.getElementById("fontsTotalSize");o&&(o.textContent=ServerI18n.t("fontsTotalCount",{n:d.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(d=>{d.addEventListener("click",o=>{if(o.target.closest(".admin-font-delete-btn"))return;let t=d.dataset.font,u=document.getElementById("fontsPreviewFamily"),b=document.getElementById("fontsPreviewHeadline"),n=document.getElementById("fontsPreviewLatin"),i=document.getElementById("fontsPreviewCJK");u&&(u.textContent=t);let r=`"${t}", sans-serif`;b&&(b.style.fontFamily=r),n&&(n.style.fontFamily=r),i&&(i.style.fontFamily=r)})})}async function s(){var d=document.getElementById("adminFontFileInput");if(d){var o=d.files&&d.files[0];if(!o){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await w(o),d.value=""}}function e(){let d=document.getElementById("adminFontDrop"),o=document.getElementById("adminFontFileInput");!d||!o||(d.addEventListener("click",t=>{t.target!==o&&o.click()}),d.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),o.click())}),["dragenter","dragover"].forEach(t=>{d.addEventListener(t,u=>{u.preventDefault(),u.stopPropagation(),d.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{d.addEventListener(t,u=>{u.preventDefault(),u.stopPropagation(),d.classList.remove("is-drag")})}),d.addEventListener("drop",async t=>{let u=t.dataTransfer&&t.dataTransfer.files;u&&u[0]&&await w(u[0])}))}async function l(d){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",d),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(d),{method:"DELETE"}),u=await t.json();t.ok?(window.showToast(u.message||ServerI18n.t("fontDeleteFallback")),await S()):window.showToast(u.error||ServerI18n.t("deleteFailed"),!1)}catch(b){console.error("[admin-fonts] delete error:",b),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function a(){var d=document.getElementById("settings-grid");if(d){d.insertAdjacentHTML("beforeend",y());var o=document.getElementById("adminFontFileInput");o&&o.addEventListener("change",s),e();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(u){var b=u.target.closest(".admin-font-delete-btn");if(b){u.stopPropagation(),l(b.dataset.name);return}var n=u.target.closest(".admin-font-default-btn");if(n){u.stopPropagation(),N(n.dataset.name);return}var i=u.target.closest(".admin-font-toggle-btn");if(i){u.stopPropagation();let p=i.dataset.enabled==="true";E(i.dataset.name,p);return}var r=u.target.closest(".admin-font-subset-btn");r&&(u.stopPropagation(),x(r.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(u=>u.ok?u.json():null).then(u=>{u&&Array.isArray(u.FontFamily)&&(f=u.FontFamily[3]||null)}).catch(()=>{}).finally(S)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var d=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()});d.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()}})})()});var Xt=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-scheduler",y=5e3,f=null,A=null;function U(a,d,o,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${a}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(d)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(o||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(a){var d=a==="active"?"is-success":a==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+d+'" title="'+m(a)+'"></span>'}function C(a){let d=a.state==="paused",o=a.repeat_count===void 0?"\u2014":a.repeat_count===-1?"\u221E":String(a.repeat_count),t=a.repeat_count>0&&typeof a.remaining=="number"?String(a.repeat_count-a.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(a.id)}">
        ${F(a.state)}
        <div>
          <div class="admin-scheduler-job-title">#${g(a.id)}</div>
          <div class="admin-scheduler-job-meta">${g(ServerI18n.t("schedulerMessages"))} ${a.messages?a.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${a.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${g(t)}</span>
        <span class="admin-scheduler-job-val">${g(o)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${d?"is-active":"is-warn"}"
            data-job-id="${m(a.id)}" data-action="${d?"resume":"pause"}">
            ${g(ServerI18n.t(d?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(a.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(a){return g(a)}function M(){let a=document.querySelectorAll("#schedulerMessages [data-msg-index]"),d=[];return a.forEach(function(o){let t=o.querySelector(".scheduler-msg-text").value.trim(),u=o.querySelector(".scheduler-msg-color").value,b=parseInt(o.querySelector(".scheduler-msg-size").value,10)||48;t&&d.push({text:t,color:u,size:b})}),d}function D(a,d,o){let t=document.getElementById("schedulerMessages");if(!t)return;let u=t.children.length;t.insertAdjacentHTML("beforeend",U(u,a||"",d||"#ffffff",o||48))}function x(a){let d=a.closest("[data-msg-index]");d&&d.remove();let o=document.getElementById("schedulerMessages");o&&o.querySelectorAll("[data-msg-index]").forEach(function(t,u){t.dataset.msgIndex=u})}async function k(){let a=M();if(a.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let d=parseInt(document.getElementById("schedulerInterval").value,10);if(!d||d<1||d>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let o=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(o)||o<-1||o>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let u=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:a,interval_sec:d,repeat_count:o})}),b=await u.json();u.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await v()):showToast(b.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(u){console.error("Scheduler create error:",u),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function N(a){return"msg"}function E(a){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[a]||"\u25C8"}function S(a){return a.next_run_at?new Date(a.next_run_at*1e3).getHours():new Date().getHours()}function L(a){if(a.next_run_at){let d=new Date(a.next_run_at*1e3);return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}return"--:--"}function P(a){let d=a.id||"job",o=Array.isArray(a.messages)?a.messages.length:null;return"Job #"+d+(o!=null?" \xB7 "+o+" messages":"")}function $(a){let d=document.querySelector("[data-sch-timeline]");if(!d)return;let o=[],t=new Date().getHours();for(let b=0;b<24;b++){let n=b>=Math.max(0,t-1)&&b<=Math.min(23,t+2);o.push('<div class="admin-sch-timeline-hour'+(n?" is-peak":"")+'">'+String(b).padStart(2,"0")+"</div>")}let u=(a||[]).map(function(b){let n=N(b),i=E(n),r=b.state!=="paused";return'<div class="admin-sch-timeline-row'+(r?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+g(L(b))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+n+'">'+i+'</span><span class="admin-sch-evt-desc">'+g(P(b))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(r?" is-on":"")+'">'+ServerI18n.t(r?"uiOn":"uiOff")+"</span></div></div>"}).join("");d.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+o.join("")+"</div></div>"+(u||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+g(ServerI18n.t("noActiveJobs"))+"</div>"))}function w(a){let d=document.querySelector("[data-sch-calendar]");if(!d)return;let o=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,u=(t.getDay()+6)%7,b=new Date(t);b.setDate(t.getDate()-u);let n=o.map(function(r,p){let T=new Date(b);return T.setDate(b.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===u?" is-today":"")+'">'+g(r)+'<span class="date">'+T.getDate()+"</span></div>"}).join(""),i=[0,1,2,3,4,5,6].map(function(r){return'<div class="admin-sch-calendar-cell">'+(r===u?(a||[]).slice(0,5).map(function(T){let I=N(T),_=E(I);return'<span class="admin-sch-cal-chip is-'+I+'">'+g(L(T))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");d.innerHTML='<div class="admin-sch-calendar-head">'+n+'</div><div class="admin-sch-calendar-body">'+i+"</div>"}async function v(){let a=document.getElementById("schedulerJobsList"),d=document.getElementById("schedulerJobsCount");if(a)try{let o=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!o.ok){a.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",d&&(d.textContent="\u2014");return}let t=await o.json();if(!Array.isArray(t.jobs)){a.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",d&&(d.textContent="\u2014");return}d&&(d.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),$(t.jobs),w(t.jobs);let u=document.querySelector("[data-sch-meta]");if(u){let b=new Date().toISOString().slice(0,10);u.textContent=ServerI18n.t("schTodayMeta",{date:b,n:t.jobs.length})}if(t.jobs.length===0){a.innerHTML="";let b=window.AdminEmpty.render("scheduler");b.dataset.emptyKind="scheduler",a.appendChild(b);return}a.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+g(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+g(ServerI18n.t("schColInterval"))+"</span><span>"+g(ServerI18n.t("schColSent"))+"</span><span>"+g(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(C).join("")}catch(o){console.error("Scheduler fetch error:",o),a.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(a,d){try{let o=await csrfFetch("/admin/scheduler/"+encodeURIComponent(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),t=await o.json();o.ok?(showToast(d==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await v()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(o){console.error("Scheduler toggle error:",o),showToast(ServerI18n.t("actionFailed"),!1)}}async function s(a){try{let d=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),o=await d.json();d.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await v()):showToast(o.error||ServerI18n.t("cancelFailed"),!1)}catch(d){console.error("Scheduler cancel error:",d),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let a=document.getElementById("settings-grid");if(!a)return;a.insertAdjacentHTML("beforeend",`
      <details id="${h}" class="admin-dsp2-fold lg:col-span-2">
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
              <button type="button" id="schedulerAddMsg" class="admin-ui-action admin-sch-add-msg">+ ${g(ServerI18n.t("addMessageBtn"))}</button>
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
                <button type="button" id="schedulerCreateBtn" class="admin-ui-action is-primary admin-sch-create-btn">${g(ServerI18n.t("createBtn"))}</button>
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
            ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):g(ServerI18n.t("loadingJobs"))}
          </div>
        </div>
        </div>
      </details>
    `);let d=document.querySelectorAll("[data-sch-view]");d.forEach(n=>{n.addEventListener("click",()=>{let i=n.dataset.schView;d.forEach(T=>{T.classList.toggle("is-active",T===n),T.setAttribute("aria-selected",T===n?"true":"false")});let r=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");r&&(r.hidden=i!=="timeline"),p&&(p.hidden=i!=="calendar")})}),D("","#ffffff",48);let o=document.getElementById("schedulerMessages");o&&o.addEventListener("click",function(n){let i=n.target.closest(".scheduler-remove-msg");i&&x(i)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){D("","#ffffff",48)});let u=document.getElementById("schedulerCreateBtn");u&&u.addEventListener("click",k);let b=document.getElementById("schedulerJobsList");b&&b.addEventListener("click",function(n){let i=n.target.closest(".scheduler-job-toggle");if(i){c(i.dataset.jobId,i.dataset.action);return}let r=n.target.closest(".scheduler-job-cancel");r&&s(r.dataset.jobId)}),f&&(clearInterval(f),f=null),A||(A=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:y,tick:v}),window.addEventListener("beforeunload",function(){A&&(A(),A=null)}))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(h)&&!a){a=!0;try{e()}finally{a=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var Zt=ge(()=>{(function(){"use strict";let g="admin-security-v2-page";var h=window.AdminUtils.escapeHtml;let y=null,f=!1,A=!1,U=0;function F(){let n=i=>ServerI18n.t(i);return`
        <div id="${g}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${n("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${n("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${n("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2PwRowLabel")}
              <span class="sub">${n("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${n("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${n("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${n("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${n("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${n("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${n("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${n("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${n("security2CardWsTokenTitle")}" placeholder="${n("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${n("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${n("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${n("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${n("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${n("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${n("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${n("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${n("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${n("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${n("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${n("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${n("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${n("security2WsAuthMigrationPrepare")}</li>
            <li>${n("security2WsAuthMigrationDesktop")}</li>
            <li>${n("security2WsAuthMigrationEnable")}</li>
            <li>${n("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${n("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${n("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${n("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${n("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${n("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${n("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${n("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${n("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2StatusLabel")}
              <span class="sub">${n("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${n("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2RevokeApiTokensTitle")}
              <span class="sub">${n("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${n("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2RevokeFireTokenTitle")}
              <span class="sub">${n("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${n("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${n("security2ResetWsTokenTitle")}
              <span class="sub">${n("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${n("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function C(n){if(!n)return 0;let i=0;n.length>=8&&i++,n.length>=12&&i++;let r=(/[a-z]/.test(n)?1:0)+(/[A-Z]/.test(n)?1:0)+(/\d/.test(n)?1:0)+(/[^\w]/.test(n)?1:0);return r>=2&&i++,r>=3&&i++,Math.min(4,i)}function m(n){let i=document.getElementById("sec2-pw-meter"),r=document.getElementById("sec2-pw-label");if(!i||!r)return;let p=C(n),T=[0,25,50,75,100],I=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];i.style.width=T[p]+"%",i.className=I[p],r.textContent=_[p]}async function M(n){n.preventDefault();let i=document.getElementById("sec2-pw-current").value,r=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!i||!r||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(r.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(r!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let T=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:i,new_password:r,confirm_password:p})}),I=await T.json().catch(()=>({}));T.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),I.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(I.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(T){console.error("Password change error:",T),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let n=++U,i=document.getElementById("sec2-wsa-status");A=!0,x(!0),i.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let r=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!r.ok)throw new Error(r.status);let p=await r.json();if(n!==U)return!1;y={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",i.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,E();let T=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=T?new Date(parseInt(T,10)).toLocaleString():"\u2014",!0}catch{return n!==U||(y=null,x(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{n===U&&(A=!1,x(f||!y),f||E())}}function x(n){["toggle","token","save","rotate","copy","reveal"].forEach(i=>{document.getElementById("sec2-wsa-"+i).disabled=n}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",n)}function k(){return f||A||!y?!1:(f=!0,++U,x(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,x(A||!y),y&&!A){let n=document.getElementById("sec2-wsa-status");n.textContent=ServerI18n.t(y.require_token?"security2StatusEnabled":"security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(y.require_token?"is-active":""),E()}}function E(){if(f||A||!y)return;document.getElementById("sec2-wsa-disabled-warning").hidden=y.require_token;let n=document.getElementById("sec2-wsa-toggle").checked!==y.require_token||document.getElementById("sec2-wsa-token").value.trim()!==y.token;document.getElementById("sec2-wsa-draft-hint").hidden=!n}function S(n){return String(n||"").split(/\n+/).map(i=>i.trim()).filter(Boolean)}function L(n){return String(n||"").split(",").map(i=>i.trim().toUpperCase()).filter(Boolean)}function P(n,i){let r=document.getElementById(n);r&&(r.textContent=i==null||i===""?"\u2014":String(i))}async function $(){try{let n=await fetch("/admin/security/settings",{credentials:"same-origin"}),i=await n.json().catch(()=>({}));if(!n.ok)throw new Error(i.error||n.status);let r=i.ip_allowlist||{},p=i.cors||{},T=i.tls||{},I=!!r.enabled,_=Array.isArray(r.entries)?r.entries:[],B=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),j=document.getElementById("sec2-ip-toggle"),O=document.getElementById("sec2-ip-entries");B&&(B.classList.toggle("is-lime",I),B.classList.toggle("is-amber",!I)),R&&(R.textContent=I?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(I?"is-active":"is-warn")),j&&(j.checked=I),O&&(O.value=_.join(`
`)),P("sec2-ip-current",r.current_ip||"\u2014"),P("sec2-ip-status-line",I?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let W=Array.isArray(p.origins)?p.origins:["*"],G=Array.isArray(p.methods)?p.methods:[],Z=document.getElementById("sec2-cors-origins"),le=document.getElementById("sec2-cors-credentials"),ne=document.getElementById("sec2-cors-methods"),J=document.getElementById("sec2-cors-cred-dot");Z&&(Z.value=W.join(`
`)),le&&(le.checked=!!p.supports_credentials),ne&&(ne.value=G.join(", ")),J&&(J.classList.toggle("is-lime",!p.supports_credentials),J.classList.toggle("is-amber",!!p.supports_credentials)),P("sec2-cors-origins-line",W.join(", ")),P("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),P("sec2-cors-methods-line",G.join(", "));let ee=T.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:T.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");P("sec2-hsts-status",ee)}catch(n){console.error("Security settings load error:",n);let i=document.getElementById("sec2-ip-status-chip");i&&(i.textContent=ServerI18n.t("security2LoadFailed"),i.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function w(n){let i={};if(n==="ip")i.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:S(document.getElementById("sec2-ip-entries")?.value||"")};else if(n==="cors"){let r=S(document.getElementById("sec2-cors-origins")?.value||"");i.cors={origins:r.length?r:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:L(document.getElementById("sec2-cors-methods")?.value||"")}}try{let r=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),p=await r.json().catch(()=>({}));if(!r.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await $()}catch(r){console.error("Security settings save error:",r),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function v(){if(f||A||!y)return;let n=document.getElementById("sec2-wsa-toggle").checked,i=document.getElementById("sec2-wsa-token").value.trim();if(n&&!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(k())try{let r=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:n,token:i})}),p=await r.json().catch(()=>({}));r.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function c(){if(!(f||A||!y||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&k())try{let i=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),r=await i.json().catch(()=>({}));if(i.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(r.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function s(){let n=document.getElementById("sec2-wsa-token").value;if(!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function e(){let n=document.getElementById("sec2-wsa-token");n.type=n.type==="password"?"text":"password";let i=n.type==="text",r=document.getElementById("sec2-wsa-reveal");r.setAttribute("aria-pressed",String(i)),r.textContent=ServerI18n.t(i?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),r.setAttribute("aria-label",r.textContent)}async function l(n){if(n==="reset-ws"&&(f||A||!y))return;let i={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[n];if(!(!i||!await window.HudConfirm?.open({icon:"\u26A0",title:i.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:i.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:i.severity||"warn",body:i.confirm,confirmLabel:i.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(n==="reset-ws"&&!k()))try{let p=await window.csrfFetch(i.url,{method:"POST"}),T=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast(T.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(n==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(i.ok(T),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{n==="reset-ws"&&N()}}function a(){let n=document.getElementById("sec2-session-self-line");if(n){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),T=navigator.platform||navigator.userAgentData?.platform||"",I=p?p[0].split("/")[0]:"Browser";n.textContent=ServerI18n.t("security2SessionSelfLine",{browser:I,platform:T})}let i=document.getElementById("sec2-tls-dot"),r=document.getElementById("sec2-tls-status");if(i&&r){let p=location.protocol==="https:";i.classList.add(p?"is-lime":"is-crimson"),r.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function d(){let n=document.getElementById("sec2-pw-form");n&&n.addEventListener("submit",M);let i=document.getElementById("sec2-pw-new");i&&i.addEventListener("input",r=>m(r.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",v),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",s),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",e),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",E),document.getElementById("sec2-wsa-token")?.addEventListener("input",E),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>w("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>w("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(r=>{r.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${r.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,r.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(r=>{r.dataset.secBound!=="1"&&(r.dataset.secBound="1",r.addEventListener("click",()=>l(r.dataset.secDanger)))}),a(),D(),$()}function o(){}function t(){let n=document.querySelector(".admin-dash-grid"),i=document.getElementById(g);if(!n||!i)return;let r=n.dataset.activeRoute||"live",p=n.dataset.activeLeaf||r;i.style.display=r==="system"&&p==="security"?"":"none"}function u(){let n=document.getElementById("settings-grid");!n||document.getElementById(g)||(n.insertAdjacentHTML("beforeend",F()),d(),t())}function b(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=null;function i(){let p=document.querySelector(".admin-dash-grid");!p||n||(n=new MutationObserver(t),n.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)?u():void 0,i(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{u(),i(),t()}),i(),u()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})()});var en=ge(()=>{(function(){"use strict";let g="admin-backup-v2-page";var h=window.AdminUtils.escapeHtml;function y(){let a=d=>ServerI18n.t(d);return`
      <div id="${g}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}async function f(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let d=await a.json(),o=["password","token","secret","hash"],t={};Object.keys(d||{}).forEach(r=>{o.some(p=>r.toLowerCase().includes(p))||(t[r]=d[r])});let u=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),b=URL.createObjectURL(u),n=new Date().toISOString().replace(/[:.]/g,"-"),i=document.createElement("a");i.href=b,i.download="danmu-settings-"+n+".json",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(b),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(a){console.error("Settings snapshot error:",a),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let A=null;function U(){A=null;let a=document.getElementById("bk2-settings-apply");a&&(a.disabled=!0,a.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let a=document.getElementById("bk2-settings-upload"),d=document.getElementById("bk2-settings-diff"),o=document.getElementById("bk2-settings-apply"),t=a&&a.files&&a.files[0];if(!t){U(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let u=await t.text(),b=JSON.parse(u),n=b.settings||b;if(!n||typeof n!="object"||Array.isArray(n))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let i=await fetch("/get_settings",{credentials:"same-origin"}),r=i.ok?await i.json():{},p=[];new Set([...Object.keys(r),...Object.keys(n)]).forEach(I=>{let _=JSON.stringify(r[I]),B=JSON.stringify(n[I]);_!==B&&(_===void 0?p.push("+ "+I+": "+B):B===void 0?p.push("- "+I+": "+_):p.push("~ "+I+": "+_+" \u2192 "+B))}),d.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),d.hidden=!1,A=n,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(u){console.error("Dry-run error:",u),U(),d.textContent=ServerI18n.t("backupParseFailedDetail",{msg:u&&u.message?u.message:String(u)}),d.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function C(){let a=document.getElementById("bk2-settings-diff"),d=document.getElementById("bk2-settings-apply");if(!A){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:A})}),u=await t.json().catch(()=>({}));if(!t.ok){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(u.details||u,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(u.applied||[]).length+" settings"),A=null,d&&(d.disabled=!0,d.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let a=document.getElementById("bk2-factory-confirm"),d=document.getElementById("bk2-factory-reset");!a||!d||(a.addEventListener("input",()=>{let o=a.value.trim()==="reset";d.classList.toggle("is-ready",o),d.disabled=!o}),d.addEventListener("click",D))}async function D(){let a=document.getElementById("bk2-factory-confirm"),d=document.getElementById("bk2-factory-reset");if((a?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{d&&(d.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),u=await t.json().catch(()=>({}));if(!t.ok||!u.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),d&&(d.disabled=!1);return}a&&(a.value=""),d&&(d.classList.remove("is-ready"),d.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),E()}catch{d&&(d.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function x(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",C),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",S),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",$),document.getElementById("bk2-pack-apply")?.addEventListener("click",w),document.getElementById("bk2-assets-export")?.addEventListener("click",P),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",v),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),M(),E(),L()}let k=null,N=null;async function E(){let a=document.getElementById("bk2-pack-summary");if(a)try{let d=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!d.ok){a.textContent=ServerI18n.t("backupPreviewUnavailable");return}let o=await d.json(),t=(o.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:t})}catch{a.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function S(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function L(){let a=document.getElementById("bk2-assets-summary");if(a)try{let d=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!d.ok){a.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let o=await d.json(),t=(o.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:t})}catch{a.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function P(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function $(){let d=document.getElementById("bk2-pack-upload")?.files?.[0];if(!d){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(d.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let o=new FormData;o.append("file",d);let t=document.getElementById("bk2-pack-diff"),u=document.getElementById("bk2-pack-apply");try{let b=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:o}),n=await b.json().catch(()=>({}));if(!b.ok||!n.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(n.errors||n,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),u&&(u.disabled=!0),k=null;return}if(t){t.hidden=!1;let i=[],r=n.manifest||{};i.push("manifest version: "+(r.version||"?")),i.push("generated_at: "+(r.generated_at?new Date(r.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(n.members?.length||0)+" files:"),(n.members||[]).forEach(p=>{i.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),n.skipped?.length&&(i.push(""),i.push("Skipped "+n.skipped.length+" entries:"),n.skipped.forEach(p=>i.push("  "+p.path+" \u2014 "+p.reason))),t.textContent=i.join(`
`)}k=d,u&&(u.disabled=!1,u.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:n.members?.length||0}),!0)}catch(b){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:b.message||""}),!1)}}async function w(){if(!k){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let d=new FormData;d.append("file",k);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:d})).json().catch(()=>({})),u=document.getElementById("bk2-pack-diff");if(u){u.hidden=!1;let b=[];t.ok?(b.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),b.push(""),b.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&b.push("Skipped "+t.skipped.length+" (see above)")):(b.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),b.push(JSON.stringify(t.errors||t,null,2))),u.textContent=b.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),k=null;let b=document.getElementById("bk2-pack-apply");b&&(b.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:o.message||""}),!1)}}async function v(){let d=document.getElementById("bk2-assets-upload")?.files?.[0];if(!d){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(d.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let o=new FormData;o.append("file",d);let t=document.getElementById("bk2-assets-diff"),u=document.getElementById("bk2-assets-apply");try{let b=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:o}),n=await b.json().catch(()=>({}));if(!b.ok||!n.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(n.errors||n,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),u&&(u.disabled=!0),N=null;return}if(t){t.hidden=!1;let i=[],r=n.manifest||{};i.push("manifest version: "+(r.version||"?")),i.push("generated_at: "+(r.generated_at?new Date(r.generated_at*1e3).toISOString():"\u2014")),i.push(""),i.push("Will write "+(n.members?.length||0)+" asset files:"),(n.members||[]).forEach(p=>{i.push("  "+p.path+" ("+(p.size||0)+" B)")}),n.skipped?.length&&(i.push(""),i.push("Skipped "+n.skipped.length+" entries:"),n.skipped.forEach(p=>i.push("  "+p.path+" \u2014 "+p.reason))),t.textContent=i.join(`
`)}N=d,u&&(u.disabled=!1,u.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:n.members?.length||0}),!0)}catch(b){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:b.message||""}),!1)}}async function c(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let d=new FormData;d.append("file",N);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:d})).json().catch(()=>({})),u=document.getElementById("bk2-assets-diff");if(u){u.hidden=!1;let b=[];t.ok?(b.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),b.push(""),b.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&b.push("Skipped "+t.skipped.length+" (see above)")):(b.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),b.push(JSON.stringify(t.errors||t,null,2))),u.textContent=b.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),N=null;let b=document.getElementById("bk2-assets-apply");b&&(b.disabled=!0),L()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:o.message||""}),!1)}}function s(){let a=document.querySelector(".admin-dash-grid"),d=document.getElementById(g);if(!a||!d)return;let o=a.dataset.activeLeaf||"dashboard";d.style.display=o==="backup"?"":"none"}function e(){let a=document.getElementById("settings-grid");!a||document.getElementById(g)||(a.insertAdjacentHTML("beforeend",y()),x(),s())}function l(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&e(),s()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",s),document.addEventListener("admin-panel-rendered",()=>{e(),s()}),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var tn=ge(()=>{(function(){"use strict";let g="admin-broadcast-v2-page",h="/admin/broadcast/status",y="/admin/broadcast/toggle",f={mode:"live"},A=null,U=0,F=!1;async function C(){try{let o=await fetch(h,{credentials:"same-origin"});if(!o.ok)return!1;let t=await o.json();if(t&&(t.mode==="live"||t.mode==="standby"))return A=t.session||null,f=t,!0}catch{}return!1}async function m(){try{let o=await fetch("/overlay_status",{credentials:"same-origin"});o.ok&&(U=(await o.json()).overlay_count||0,F=!0)}catch{}}async function M(){await Promise.all([C(),m()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:f.mode==="live",count:F?U:void 0}}))}async function x(o){try{let t=await window.csrfFetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:o})});if(!t.ok){let u=await t.json().catch(()=>({}));throw new Error(u&&u.error?u.error:`HTTP ${t.status}`)}return f=await t.json(),D(),!0}catch(t){return console.warn("[admin-broadcast] toggle failed:",t),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:t&&t.message||""}),!1),!1}}function k(o,t){return ServerI18n.t(o?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:t})}function N(o){return o?"broadcastBigPause":"broadcastBigResume"}async function E(o){let t=await x(o?"live":"standby");return t&&window.showToast&&window.showToast(ServerI18n.t(o?"broadcastToastResumed":"broadcastToastPaused"),!0),v(),t}async function S(){return await C(),m().then(D),E(f.mode!=="live")}async function L(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let t=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});t.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:t.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:E,toggleDisplay:S,clearScreen:L,statusText:k,toggleKey:N};function P(){let o=t=>ServerI18n.t(t);return`
      <div id="${g}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${N(!1)}">${o(N(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${o("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${o("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let $=0,w=0;function v(){let o=document.getElementById(g);if(!o)return;let t=f.mode==="live",u=t?"live":"standby",b=(_,B)=>{_&&_.textContent!==B&&(_.textContent=B)};o.dataset.bcState=u;let n=o.querySelector("[data-bc-statedot]");n&&(n.dataset.state=u);let i=o.querySelector("[data-bc-statelabel]");i&&(b(i,k(t,U)),i.dataset.state=u);let r=o.querySelector("[data-bc-big]");r&&(r.dataset.i18n=N(t),b(r,ServerI18n.t(r.dataset.i18n)));let p=A||{},T=!!(p.id||p.name),I=o.querySelector("[data-bc-session-ctx]");I&&(I.hidden=!T),T&&b(o.querySelector("[data-bc-session-id]"),String(p.name||p.id))}function c(){let o=document.getElementById(g);o&&(o.querySelector("[data-bc-big]")?.addEventListener("click",()=>E(f.mode!=="live")),o.querySelector("[data-bc-clear]")?.addEventListener("click",L))}function s(){$||(M().then(v),v(),$=setInterval(()=>{M().then(v)},5e3),w=setInterval(v,1e3))}function e(){$&&(clearInterval($),$=0),w&&(clearInterval(w),w=0)}function l(){let o=document.querySelector(".admin-dash-grid"),t=document.getElementById(g);if(!o||!t)return;let u=o.dataset.activeLeaf||"dashboard",b=u==="overlay"||u==="broadcast";t.style.display=b?"":"none",b?s():e()}function a(){let o=document.getElementById("settings-grid");!o||document.getElementById(g)||(o.insertAdjacentHTML("afterbegin",P()),c(),l())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&a(),l()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",l),document.addEventListener("admin-panel-rendered",()=>{a(),l()}),a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var nn=ge(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(H,V){return window.ServerI18n?window.ServerI18n.t(H,V):H}let y=["keyword","regex","rate_limit","fingerprint"],f={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},A=["block","replace","allow","review"],U={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},F={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},C={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},m=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function M(H){switch(H.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:H.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:H.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:H.action||"block"}}}function D(H,V){return H==="keyword"?V==="block"?"word":"keyword":H==="regex"?V==="replace"?"replace":"regex":H}function x(H){return H==="permanent"||H==="session"?{lifetime:H}:H==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(H,10)}}function k(H){let V=new Date(H*1e3),ae=Se=>String(Se).padStart(2,"0"),oe=`${ae(V.getHours())}:${ae(V.getMinutes())}`,me=new Date;return V.toDateString()===me.toDateString()?oe:`${V.getMonth()+1}/${V.getDate()} ${oe}`}function N(H){return H.lifetime==="session"?h("blkLifeSession"):H.lifetime==="timed"&&H.expires_at?h("blkLifeUntil",{time:k(H.expires_at)}):h("msgDrawerPermanent")}function E(H){return H.type==="rate_limit"?h("blkRateSummary",{n:H.max_count||5,s:H.window_sec||60}):H.type==="replace"?`${H.pattern}  \u2192  ${H.replacement||""}`:H.pattern}let S=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function L(H,V){return V.find(ae=>ae.type==="regex"&&ae.pattern===H.pattern&&ae.action===H.action)}let P=[],$="all",w=null,v=!1,c=new Set,s=0,e=0,l=!0;function a(H,V,ae){return H.map(oe=>`<option value="${g(oe)}"${oe===ae?" selected":""}>${g(V(oe))}</option>`).join("")}function d(){return`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${g(h("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${g(h("modAddWordPlaceholder"))}" aria-label="${g(h("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${g(h("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${g(h("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${g(h("blkMatchLabel"))}">
              ${a(y,H=>h(f[H]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${g(h("blkActionLabel"))}">
              ${a(A,H=>h(U[H]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${g(h("blkLifetimeLabel"))}">
              ${m.map(H=>`<option value="${H.value}">${g(h(H.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${g(h("fltColReplacement"))}" aria-label="${g(h("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${g(h("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${g(h("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${S.map(H=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${H.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${g(h(H.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(y).map(H=>`
              <button type="button" class="seg-item${H==="all"?" is-active":""}" data-scope="${H}">
                ${g(h(H==="all"?"fltChipAll":f[H]))}
                <span class="admin-block-scope-count" data-scope-count="${H}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${g(h("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${g(h("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${g(h("uiColPriority"))} \xB7 ${g(h("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${g(h("sampleText"))}" aria-label="${g(h("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${g(h("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${g(h("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`}function o(H){let V=M(H),ae=g(H.id);return`
      <div class="hud-rule-row admin-block-row${H.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${g(H.type)}"
        style="${H.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${g(E(H))}</span>
        <span class="admin-block-row__meta">
          <span>${g(h(f[V.match]))}</span>
          <span class="admin-block-row__action" data-action="${g(V.action)}">${g(h(U[V.action]||"fltActBlock"))}</span>
          <span>${g(N(H))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${g(H.enabled?h("enabled"):h("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${H.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${H.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${g(h("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${g(h("deleteRule"))}" aria-label="${g(h("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function t(){let H=document.getElementById("blockRuleList");if(!H)return;let V={all:P.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};P.forEach(Se=>{V[M(Se).match]+=1}),Object.keys(V).forEach(Se=>{let Le=document.querySelector(`[data-scope-count="${Se}"]`);Le&&(Le.textContent=String(V[Se]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",P.length||"");let ae=P.filter(Se=>Se.lifetime==="session").length,oe=document.getElementById("blockRuleClearSession");oe&&(oe.hidden=ae===0);let me=$==="all"?P:P.filter(Se=>M(Se).match===$);H.innerHTML=me.map(o).join(""),u(me.length===0),b()}function u(H){let V=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!V||!ae)&&(V.hidden=H,ae.hidden=!H,ae.innerHTML="",!!H))if(window.AdminEmpty){let oe=window.AdminEmpty.renderCustom({icon:"\u2298",title:h("blkEmpty"),accent:"var(--color-ink-error)"});oe.dataset.emptyKind="filters",ae.appendChild(oe)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${g(h("blkEmpty"))}</div>`}function b(){S.forEach(H=>{let V=document.querySelector(`[data-flt-quick-id="${H.id}"]`);if(!V)return;let ae=L(H,P),oe=!!ae&&ae.enabled!==!1;V.classList.toggle("is-active",oe),V.setAttribute("aria-pressed",oe?"true":"false")})}async function n(){try{let H=await window.csrfFetch("/admin/filters/list");if(!H.ok)throw new Error("HTTP "+H.status);let V=await H.json();P=Array.isArray(V.rules)?V.rules:[],l=V.session_live!==!1}catch(H){console.error("Failed to fetch block rules:",H),window.showToast(h("fetchFiltersFailed"),!1)}t(),i()}function i(){let H=r("blockRuleLifetime");if(!H)return;let V=H.querySelector('option[value="session"]'),ae=l||!!(w&&w.lifetime==="session");V&&(V.hidden=!ae,V.disabled=!ae),!ae&&H.value==="session"&&(H.value="permanent")}function r(H){return document.getElementById(H)}function p(){let H=r("blockRuleMatch").value,V=r("blockRuleAction"),ae=F[H];Array.from(V.options).forEach(oe=>{oe.disabled=ae.indexOf(oe.value)===-1}),ae.indexOf(V.value)===-1&&(V.value=ae[0]),V.disabled=ae.length===1,r("blockRuleInput").placeholder=h(C[H]),r("blockRuleReplacement").hidden=V.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(oe=>{oe.hidden=H!=="rate_limit"})}function T(){let H=r("blockRuleMatch").value,V=r("blockRuleAction").value,ae=r("blockRuleInput").value||"",oe={type:D(H,V),pattern:H==="regex"?ae:ae.trim(),action:V,priority:parseInt(r("blockRulePriority").value,10)||0};return w&&w.type===oe.type&&(oe.type==="fingerprint"||oe.type==="rate_limit")&&(oe.action=w.action||V),oe.type==="replace"&&(oe.replacement=r("blockRuleReplacement").value||""),oe.type==="rate_limit"&&(oe.max_count=parseInt(r("blockRuleMaxCount").value,10)||5,oe.window_sec=parseFloat(r("blockRuleWindowSec").value)||60),Object.assign(oe,x(r("blockRuleLifetime").value))}function I(H,V){let ae=H&&H.code;return h(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":V)}function _(){s+=1,w=null,r("blockRuleInput").value="",r("blockRuleReplacement").value="",r("blockRuleMatch").value="keyword",r("blockRuleAction").value="block";let H=r("blockRuleLifetime"),V=H.querySelector('option[value="keep"]');V&&V.remove(),H.value="permanent",r("blockRulePriority").value="0",r("blockRuleSubmit").textContent=h("modAddWordBtn"),r("blockRuleCancel").hidden=!0,p(),i()}function B(H){s+=1,w=H;let V=M(H);r("blockRuleMatch").value=V.match,p(),r("blockRuleAction").value=V.action,r("blockRuleInput").value=H.pattern||"",r("blockRuleReplacement").value=H.replacement||"",r("blockRuleMaxCount").value=String(H.max_count||5),r("blockRuleWindowSec").value=String(H.window_sec||60),r("blockRulePriority").value=String(H.priority||0);let ae=r("blockRuleLifetime"),oe=ae.querySelector('option[value="keep"]');if(oe&&oe.remove(),H.lifetime==="timed"&&H.expires_at){let me=document.createElement("option");me.value="keep",me.textContent=N(H),ae.insertBefore(me,ae.firstChild),ae.value="keep"}else ae.value=H.lifetime==="session"?"session":"permanent";p(),i(),r("blockRuleSubmit").textContent=h("blkSave"),r("blockRuleCancel").hidden=!1,r("blockRuleInput").focus()}async function R(){if(v)return;let H=T();if(!H.pattern&&H.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),r("blockRuleInput").focus();return}let V=w,ae=s,oe=()=>ae===s,me=V?"/admin/filters/update":"/admin/filters/add",Se=V?{rule_id:V.id,updates:H}:H,Le=r("blockRuleSubmit"),ye=++e;v=!0,V&&c.add(V.id),Le&&(Le.disabled=!0);try{let he=await window.csrfFetch(me,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Se)}),_e=await he.json().catch(()=>({}));if(V&&he.status===404){oe()&&_(),await n(),window.showToast(h("blkErrGone"),!1);return}if(!he.ok){window.showToast(I(_e,V?"updateRuleFailed":"addRuleFailed"),!1);return}oe()&&_(),await n(),V?window.showToast(h("blkUpdated"),!0):window.AdminQuickAction&&_e.rule_id?window.AdminQuickAction.fire({label:h("blkAdded",{pattern:H.pattern||E(H)}),undo:{label:h("histUndo"),run:async()=>{if(!await j(_e.rule_id))throw new Error("remove failed")}}}):window.showToast(h("ruleAdded"),!0)}catch(he){console.error("Save block rule error:",he),window.showToast(h(V?"updateRuleFailed":"addRuleFailed"),!1)}finally{V&&c.delete(V.id),ye===e&&(v=!1),Le&&(Le.disabled=!1)}}async function j(H){let V=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:H})});return V.ok&&await n(),V.ok}async function O(H){let V=P.find(oe=>oe.id===H);if(await window.HudConfirm?.open({icon:"\u2298",title:h("filtersDeleteTitle"),severity:"danger",bodyText:V?E(V):"",confirmLabel:h("filtersDeleteConfirm")}))try{await j(H)?(w&&w.id===H&&_(),window.showToast(h("ruleDeleted"),!0)):window.showToast(h("deleteRuleFailed"),!1)}catch(oe){console.error("Delete block rule error:",oe),window.showToast(h("deleteRuleFailed"),!1)}}let W={};async function G(H,V){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:H,updates:{enabled:V}})}),oe=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(I(oe,"updateRuleFailed"),!1),!1;let me=P.find(Se=>Se.id===H);return me&&(me.enabled=V),b(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(h("updateRuleFailed"),!1),!1}}function Z(H,V){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(Se=>Se.dataset.ruleId===H);if(!ae)return;let oe=ae.querySelector(".filter-toggle-cb");oe&&(oe.checked=V);let me=ae.querySelector(".admin-filter-toggle-dot");me&&(me.classList.toggle("is-on",V),me.classList.toggle("is-off",!V)),ae.classList.toggle("is-off",!V),ae.style.opacity=V?"":"0.45"}async function le(H,V){let ae=W[H]||(W[H]={want:V,busy:!1});if(ae.want=V,ae.busy)return null;ae.busy=!0;try{let oe;do if(oe=ae.want,!await G(H,oe))return await n(),!1;while(ae.want!==oe);return Z(H,oe),!0}finally{delete W[H]}}async function ne(){let H=P.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:h("blkClearSessionTitle"),severity:"danger",bodyText:h("blkClearSessionBody",{n:H}),confirmLabel:h("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),oe=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(h("blkClearedSession",{n:oe.removed||0}),!0),await n()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(h("deleteRuleFailed"),!1)}}async function J(H){let V=S.find(me=>me.id===H);if(!V)return;let ae=h(V.key),oe=L(V,P);if(oe&&oe.enabled===!1){await le(oe.id,!0)&&(window.showToast(h("filtersToastEnabled",{label:ae}),!0),await n());return}if(oe){let me=await j(oe.id).catch(()=>!1);window.showToast(me?h("filtersToastDisabled",{label:ae}):h("filtersToastDisableFailed"),me);return}try{let me=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:V.pattern,action:V.action,priority:50,lifetime:l?"session":"permanent"})});if(!me.ok){let Se=await me.json().catch(()=>({}));window.showToast(h("filtersToastEnableFailed",{msg:I(Se,"addRuleFailed")}),!1);return}window.showToast(h("filtersToastEnabled",{label:ae}),!0),await n()}catch{window.showToast(h("filtersToastEnableFailed",{msg:""}),!1)}}async function ee(){let H=r("filterTestText"),V=r("filterTestResult"),ae=(H.value||"").trim();if(!ae){window.showToast(h("sampleTextRequired"),!1),H.focus();return}let oe=T();if(!oe.pattern&&oe.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),r("blockRuleInput").focus();return}V.textContent=h("testing");try{let me=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:oe,text:ae})}),Se=await me.json().catch(()=>({}));if(!me.ok){V.textContent=I(Se,"testError");return}let Le={block:h("blocked"),replace:h("replaced"),allow:h("allowed"),review:h("fltActReview")}[Se.action]||h("noMatch");V.dataset.verdict=Se.action||"pass",V.textContent=Se.action==="replace"?`${Le} \u2192 ${Se.text||""}`:Le}catch(me){console.error("Test block rule error:",me),V.textContent=h("testError")}}let K=6,Y=[],te=0,se=null;function de(H){let V=new Date(H*1e3),ae=oe=>String(oe).padStart(2,"0");return`${ae(V.getHours())}:${ae(V.getMinutes())}:${ae(V.getSeconds())}`}let ce={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function ue(){let H=r("filterLiveLog");if(H){if(Y.length===0){H.innerHTML=`<div class="admin-block-empty">${g(h("fltNoEvents"))}</div>`;return}H.innerHTML=Y.map(V=>{let ae=String(V.action||"").toUpperCase(),oe=ce[ae]?h(ce[ae]):ae,me=String(V.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${g(ae)}">
        <span class="admin-filter-log-row__time">${g(de(V.ts))}</span>
        <span class="admin-filter-log-row__action">${g(oe)}</span>
        <span class="admin-filter-log-row__text">\u300C${g(V.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${g(h("blkLogRule",{pattern:V.pattern||""}))}${me?" \xB7 "+g(me):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let H=await fetch(`/admin/filters/events?since=${te}`,{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();if(!Array.isArray(V.events)||V.events.length===0)return;for(Y.unshift(...V.events);Y.length>K;)Y.pop();te=V.latest_seq||te,ue()}catch{}}function ke(H){r("blockRuleMatch").addEventListener("change",p),r("blockRuleAction").addEventListener("change",p),r("blockRuleSubmit").addEventListener("click",R),r("blockRuleCancel").addEventListener("click",_),r("blockRuleInput").addEventListener("keydown",oe=>{oe.key==="Enter"&&!oe.isComposing&&(oe.preventDefault(),R())}),r("filterTestBtn").addEventListener("click",ee),r("filterTestText").addEventListener("keydown",oe=>{oe.key==="Enter"&&!oe.isComposing&&(oe.preventDefault(),ee())}),r("blockRuleClearSession").addEventListener("click",ne),H.querySelector("[data-flt-quick]").addEventListener("click",oe=>{let me=oe.target.closest("[data-flt-quick-id]");me&&J(me.dataset.fltQuickId)});let V=r("blockRuleScope");V.addEventListener("click",oe=>{let me=oe.target.closest("[data-scope]");me&&($=me.dataset.scope,V.querySelectorAll("[data-scope]").forEach(Se=>Se.classList.toggle("is-active",Se===me)),t())});let ae=r("blockRuleList");ae.addEventListener("change",oe=>{let me=oe.target.closest(".filter-toggle-cb");if(!me)return;le(me.dataset.ruleId,me.checked);let Se=me.closest(".admin-block-row"),Le=Se?.querySelector(".admin-filter-toggle-dot");Le&&(Le.classList.toggle("is-on",me.checked),Le.classList.toggle("is-off",!me.checked)),Se&&(Se.style.opacity=me.checked?"":"0.45")}),ae.addEventListener("click",oe=>{let me=oe.target.closest(".filter-delete-btn");if(me)return O(me.dataset.ruleId);let Se=oe.target.closest(".block-rule-edit");if(Se){let Le=P.find(ye=>ye.id===Se.dataset.ruleId);Le&&!c.has(Le.id)&&B(Le)}}),se&&se(),se=window.AdminUtils.pollWhileVisible({el:()=>r("filterLiveLog"),intervalMs:4e3,tick:Ee})}function Ae(){let H=document.getElementById("settings-grid");if(!H)return;w=null,$="all",v=!1,e+=1,s+=1,H.insertAdjacentHTML("beforeend",d());let V=document.getElementById("sec-blacklist");ke(V),p(),ue(),n()}let re=!1;document.addEventListener("admin-route-applied",H=>{let V=!!(H.detail&&H.detail.route==="moderation"&&H.detail.leaf==="blacklist");V&&!re&&document.getElementById("blockRuleList")&&n(),re=V});function ie(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let H=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{H()&&Ae()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),H()&&Ae()}window.AdminBlockRules={viewOf:M,typeFor:D,lifetimePayload:x,ACTIONS_FOR_MATCH:F,QUICK:S,refresh:n},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie()})()});var an=ge(()=>{(function(){"use strict";var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml,f=1e4,A=null;function U(S){var L=g();return L[S]!==void 0?L[S]:!1}function F(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${y(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${y(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${y(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function C(S){var L=ServerI18n.t("fingerprintState_"+S),P="";return S==="blocked"?P=" is-crimson":S==="flagged"?P=" is-amber":S==="active"?P=" is-cyan":P=" is-mute",'<span class="admin-fp-state'+P+'">'+y(L)+"</span>"}function m(S){if(!S)return"\u2014";try{var L=new Date(S*1e3);return L.toLocaleTimeString()}catch{return String(S)}}function M(S){var L=document.getElementById("adminFingerprintTableWrap");if(L){if(!S||S.length===0){L.innerHTML="";var P=window.AdminEmpty.render("audience");P.dataset.emptyKind="fingerprints",L.appendChild(P);return}var $='<div class="admin-fp-row admin-fp-row--head"><span>'+y(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",w=S.map(function(v){var c=v.blocked|0,s=v.hash||"",e=s.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+y(s)+'"><span class="admin-fp-hash admin-identity-fp" title="'+y(s)+'">fp:'+y(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+y(v.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+y(v.ua||"")+'">'+y(v.ua||"\u2014")+'</span><span class="admin-fp-num">'+(v.msgs|0)+'</span><span class="admin-fp-num">'+(v.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+C(v.state||"active")+'</span><span class="admin-fp-ts">'+y(m(v.last_seen))+"</span></div>"}).join("");L.innerHTML=$+w}}async function D(){var S=document.getElementById("adminFingerprintCount");try{var L=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!L.ok)throw new Error("HTTP "+L.status);var P=await L.json(),$=P.records||[];if(M($),S){var w=P.count||$.length,v=P.flagged!=null?P.flagged:$.filter(function(s){return s.state==="flagged"||s.state==="blocked"}).length;S.textContent=ServerI18n.t("fpCountSummary",{unique:w,flagged:v})}}catch(s){console.error("[admin-fingerprints] fetch failed:",s);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+y(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function x(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var L=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(L.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var P=await L.json().catch(function(){return{}});window.showToast(P.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch($){console.error("[admin-fingerprints] reset error:",$),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function k(){N(),A=setInterval(function(){var S=document.getElementById("sec-fingerprints");S&&S.offsetParent!==null&&D()},f)}function N(){A&&(clearInterval(A),A=null)}function E(){var S=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(S){S.insertAdjacentHTML("beforeend",F());var L=document.getElementById("adminFingerprintRefreshBtn");L&&L.addEventListener("click",D);var P=document.getElementById("adminFingerprintResetBtn");P&&P.addEventListener("click",x),D(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var S=new MutationObserver(function(){var P=document.getElementById("moderation-grid")||document.getElementById("settings-grid");P&&!document.getElementById("sec-fingerprints")&&E()});S.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var L=document.getElementById("moderation-grid")||document.getElementById("settings-grid");L&&!document.getElementById("sec-fingerprints")&&E()}})})()});var sn=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.escapeHtml;let h=(t,u)=>{let b=window.ServerI18n?.t?.(t);return b&&b!==t?b:u||t},y=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||y)){y=!0;try{A(t)}finally{y=!1}}}).observe(document.body,{childList:!0,subtree:!0});function A(t){let u=document.createElement("div");u.id="sec-widgets",u.className="admin-widgets-page hud-page-stack lg:col-span-2";let b=location.origin+"/overlay";u.dataset.tpl="B",u.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${g(h("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${g(h("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${g(h("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${g(h("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${g(h("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${g(h("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${g(h("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${g(h("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${g(h("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${g(h("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${g(h("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${g(b)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${g(h("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${g(h("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(u);let n=document.getElementById("widget-add"),i=u.querySelector("[data-ow-addmenu]");n.addEventListener("click",r=>{r.stopPropagation(),i.hidden=!i.hidden}),i.addEventListener("click",r=>{let p=r.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(i.hidden=!0,C(p))}),document.addEventListener("click",r=>{!i.hidden&&!r.target.closest(".admin-ui-page-actions")&&(i.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",x),u.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let r=u.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(r).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function U(t,u="GET",b=null){let n={method:u,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(b){let r=document.querySelector('meta[name="csrf-token"]');r&&(n.headers["X-CSRF-Token"]=r.content),n.body=JSON.stringify(b)}return(await fetch("/admin/widgets/"+t,n)).json()}async function F(){try{let t=await U("list");N(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function C(t){let u={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await U("create","POST",{type:t,config:u[t]||{}}),F()}catch(b){console.error("[admin-widgets] Create failed:",b)}}async function m(t){let u=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:u,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await U("delete","POST",{id:t}),F()}catch(n){console.error("[admin-widgets] Delete failed:",n)}}async function M(t,u){try{await U("update","POST",{id:t,config:u}),F()}catch(b){console.error("[admin-widgets] Update failed:",b)}}async function D(t,u,b){try{await U("score","POST",{id:t,team_index:u,delta:b}),F()}catch(n){console.error("[admin-widgets] Score update failed:",n)}}async function x(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await U("clear","POST",{}),F()}catch(b){console.error("[admin-widgets] Clear failed:",b)}}let k=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(t){let u=document.getElementById("widgets-list");if(u){if(u.innerHTML="",s(t),t.length===0){let b=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});b.dataset.emptyKind="widgets",u.appendChild(b);return}t.forEach(b=>{u.appendChild($(b))})}}let E={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function S(t){return h("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function L(t){let u=t.config||{},b="";t.type==="scoreboard"?b=(u.teams||[]).map(i=>`${i.name} ${i.score}`).join(" \xB7 "):t.type==="ticker"?(b=(u.messages||[])[0]||"",b&&(b=`\u300C${b}\u300D`)):t.type==="label"&&(b=u.text?`\u300C${u.text}\u300D`:"");let n=S(t.position);return b?`${b} \xB7 ${n}`:n}function P(t){return t==="scoreboard"?h("widgetScoreboard"):t==="ticker"?h("widgetTicker"):t==="label"?h("widgetLabel"):t}function $(t){let u=document.createElement("div");u.className="admin-widget-card",t.visible!==!1&&u.classList.add("is-on");let b=document.createElement("button");b.type="button",b.className="admin-widget-summary",b.setAttribute("aria-expanded","false"),b.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+g(E[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+g(P(t.type))+'</span><span class="admin-widget-summary-text">'+g(L(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+g(h("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',u.appendChild(b);let n=document.createElement("div");n.className="admin-widget-card-body",n.hidden=!0,b.addEventListener("click",()=>{n.hidden=!n.hidden,b.setAttribute("aria-expanded",n.hidden?"false":"true"),u.classList.toggle("is-open",!n.hidden)});let i=o(h("widgetPosition"),k,t.position,I=>M(t.id,{position:I}));n.appendChild(i),t.type==="scoreboard"?e(n,t):t.type==="ticker"?l(n,t):t.type==="label"&&a(n,t);let r=document.createElement("div");r.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=t.visible?h("widgetHide"):h("widgetShow"),p.addEventListener("click",()=>M(t.id,{visible:!t.visible})),r.appendChild(p);let T=document.createElement("button");return T.type="button",T.className="admin-ui-action is-danger admin-widget-card-action",T.textContent=h("remove"),T.addEventListener("click",()=>m(t.id)),r.appendChild(T),n.appendChild(r),u.appendChild(n),u}let w={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function v(t,u){let b="top-left",n=1/0;for(let[i,[r,p]]of Object.entries(w)){let T=t-r/2,I=u-p/2,_=T*T+I*I;_<n&&(n=_,b=i)}return b}function c(t){let u=t.config||{};return t.type==="scoreboard"?(u.teams||[]).map(b=>`${b.name} ${b.score}`).join("  ")||h("widgetScoreboard"):t.type==="ticker"?(u.messages||[])[0]||h("widgetTicker"):t.type==="label"?u.text||h("widgetLabel"):t.type}function s(t){let u=document.querySelector("[data-ow-stage]");if(u){if(u.innerHTML="",!t.length){u.innerHTML='<span class="admin-ow-stage-empty">'+g(h("widgetsStageEmpty"))+"</span>";return}t.forEach(b=>{let n=document.createElement("div");n.className="admin-ow-box is-"+(b.position||"top-left"),b.visible===!1&&n.classList.add("is-off"),n.dataset.owBox=b.id,n.draggable=!0,n.textContent=c(b),n.title=P(b.type),n.addEventListener("dragend",i=>{let r=u.getBoundingClientRect();if(!r.width||!r.height)return;let p=(i.clientX-r.left)/r.width,T=(i.clientY-r.top)/r.height;if(p<0||p>1||T<0||T>1)return;let I=v(p,T);I!==b.position&&M(b.id,{position:I})}),u.appendChild(n)})}}function e(t,u){let b=u.config||{},n=d(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",b.title||"",i=>M(u.id,{title:i}));t.appendChild(n),(b.teams||[]).forEach((i,r)=>{let p=document.createElement("div");p.className="admin-widget-team";let T=document.createElement("input");T.type="color",T.value=i.color||"#38bdf8",T.className="admin-widget-team-color",T.addEventListener("change",()=>{let j=[...b.teams];j[r]={...j[r],color:T.value},M(u.id,{teams:j})}),p.appendChild(T);let I=document.createElement("input");I.type="text",I.value=i.name,I.className="admin-widget-input",I.addEventListener("change",()=>{let j=[...b.teams];j[r]={...j[r],name:I.value},M(u.id,{teams:j})}),p.appendChild(I);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=i.score,p.appendChild(_);let B=document.createElement("button");B.type="button",B.className="admin-widget-step",B.textContent="\u2212",B.addEventListener("click",()=>D(u.id,r,-1)),p.appendChild(B);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>D(u.id,r,1)),p.appendChild(R),t.appendChild(p)})}function l(t,u){let b=u.config||{},n=document.createElement("div");n.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=window.ServerI18n?.t?.("speed")||"SPEED",n.appendChild(i);let r=document.createElement("input");r.type="range",r.min="10",r.max="200",r.value=b.speed||60,r.style.flex="1",r.addEventListener("change",()=>{M(u.id,{speed:parseInt(r.value)})}),n.appendChild(r);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=r.value,r.addEventListener("input",()=>{p.textContent=r.value}),n.appendChild(p),t.appendChild(n);let T=document.createElement("div");T.className="admin-widget-row",T.style.alignItems="flex-start";let I=document.createElement("span");I.className="lbl",I.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",T.appendChild(I);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(b.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let B=_.value.split(`
`).filter(R=>R.trim());M(u.id,{messages:B})}),T.appendChild(_),t.appendChild(T)}function a(t,u){let b=u.config||{};t.appendChild(d(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",b.text||"",n=>M(u.id,{text:n}))),t.appendChild(d(window.ServerI18n?.t?.("size")||"SIZE",String(b.fontSize||24),n=>M(u.id,{fontSize:parseInt(n)||24}),"number"))}function d(t,u,b,n="text"){let i=document.createElement("div");i.className="admin-widget-row";let r=document.createElement("span");r.className="lbl",r.textContent=t,i.appendChild(r);let p=document.createElement("input");return p.type=n,p.value=u,p.className="admin-widget-input",p.addEventListener("change",()=>b(p.value)),i.appendChild(p),i}function o(t,u,b,n){let i=document.createElement("div");i.className="admin-widget-row";let r=document.createElement("span");r.className="lbl",r.textContent=t,i.appendChild(r);let p=document.createElement("select");return p.className="admin-widget-select",u.forEach(T=>{let I=document.createElement("option");I.value=T,I.textContent=T,T===b&&(I.selected=!0),p.appendChild(I)}),p.addEventListener("change",()=>n(p.value)),i.appendChild(p),i}})})()});var on=ge(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let g=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","notifications","audience","overlay","about"];function h(){let O=window.ADMIN_ROUTES||{},W={};return g.forEach(G=>{let Z=O[G];Z&&Z.title&&(W[G]={title:Z.title,kicker:Z.kicker||G.toUpperCase()})}),W}let y=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function A(){let O=document.querySelector('meta[name="csrf-token"]');return O&&O.content||""}function U(O,W){if(typeof window.csrfFetch=="function")return window.csrfFetch(O,W);let G=Object.assign({credentials:"same-origin"},W||{}),Z=new Headers(W&&W.headers||{});return Z.set("X-CSRF-Token",A()),G.headers=Z,fetch(O,G)}function F(O,W){typeof window.showToast=="function"&&window.showToast(O,W!==!1)}let C=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>U("/effects/reload",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>U("/admin/poll/reset",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return U("/admin/history/clear",{method:"POST"}).then(W=>F(W.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),W.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,M=null,D=null,x="",k=[],N=[],E=0,S=null,L=null,P=null,$=15e3;function w(O){return String(O??"").replace(/[&<>"']/g,W=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[W])}function v(O,W){if(!W)return 0;let G=String(O||"").toLowerCase(),Z=W.toLowerCase(),le=0,ne=0,J=0,ee=0;for(;le<G.length&&ne<Z.length;)G[le]===Z[ne]?(ne++,ee++,J+=2+ee):ee=0,le++;return ne<Z.length?-1:(G.startsWith(Z)&&(J+=10),J)}function c(){let O=document.createElement("div");O.className="admin-cmdk",O.setAttribute("hidden",""),O.setAttribute("aria-hidden","true"),O.innerHTML=`
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
    `,document.body.appendChild(O),m=O,M=O.querySelector(".admin-cmdk-input"),D=O.querySelector(".admin-cmdk-list"),O.addEventListener("click",W=>{W.target.matches("[data-cmdk-close]")&&R()}),M.addEventListener("input",W=>{x=W.target.value,T()}),M.addEventListener("keydown",s),D.addEventListener("click",W=>{let G=W.target.closest("[data-cmdk-idx]");G&&(E=parseInt(G.dataset.cmdkIdx,10)||0,l())})}function s(O){if(O.key==="Escape"){O.preventDefault(),R();return}if(O.key==="ArrowDown"){O.preventDefault(),e(1);return}if(O.key==="ArrowUp"){O.preventDefault(),e(-1);return}if(O.key==="Enter"){O.preventDefault(),l();return}}function e(O){if(!k.length)return;E=(E+O+k.length)%k.length,_();let W=D.querySelector(`[data-cmdk-idx="${E}"]`);W&&W.scrollIntoView({block:"nearest"})}function l(){let O=k[E];if(O){if(O.type==="route")window.location.hash="#/"+O.route,R();else if(O.type==="setting")O.tab&&(document.body.dataset.viewerConfigTab=O.tab),window.location.hash="#/"+O.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let W=document.getElementById(O.section);W&&(W.scrollIntoView({behavior:"smooth",block:"start"}),W.tagName==="DETAILS"&&!W.open&&(W.open=!0))},80),R();else if(O.type==="message")window.location.hash="#/messages",R();else if(O.type==="user")window.location.hash="#/system",setTimeout(()=>{let W=document.getElementById("sec-fingerprints");W&&W.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if(O.type==="theme")U("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O.id})}).then(W=>{W.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:O.label}),!0),P=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R();else if(O.type==="action"){try{let W=O.action&&O.action();W&&typeof W.then=="function"&&W.catch(()=>{})}catch{}R()}}}let a={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function d(O){return Object.entries(h()).map(([W,G])=>{let Z=Math.max(v(G.title,O),v(W,O)),le=a[W];return{type:"route",route:W,label:G.title,sub:le?ServerI18n.t(le):"",icon:"\u25C7",score:Z}}).filter(W=>W.score>=0)}function o(O){let W=h()[O];if(!W)return"";let G="adminRouteTitle_"+O,Z=ServerI18n.t(G);return Z!==G?Z:W.title}function t(O){return y.map(W=>{let G=W.labelKey?ServerI18n.t(W.labelKey):W.label;return{type:"setting",route:W.route,tab:W.tab,section:W.section,label:o(W.route.split("/")[0])?`${o(W.route.split("/")[0])} \u203A ${G}`:G,sub:"",icon:"\u2699",score:v(G,O)}}).filter(W=>W.score>=0)}function u(O){return S?(S.records||[]).map(G=>{let Z=G.text||G.message||"",le=G.nickname||G.user||"guest",ne=(G.timestamp||"").slice(11,19)||"\u2014",J=(G.fingerprint||G.fp||"").slice(0,8);return{type:"message",label:`${Z}  \xB7  @${le}`,sub:J?`${ne} \xB7 fp:${J}`:ne,icon:"\u{1F4AC}",score:Math.max(v(Z,O),v(le,O))}}).filter(G=>G.score>=0):[]}function b(O){if(!P)return[];let W=P.records||[],G=P.active||"";return W.map(Z=>{let le=Z.label||Z.display_name||Z.name||"",ne=Z.description||ServerI18n.t("cmdkThemeDefaultDesc"),J=Z.name===G;return{type:"theme",id:Z.name,label:J?ServerI18n.t("cmdkThemeActive",{name:le}):le,sub:ne,icon:"\u{1F3A8}",score:Math.max(v(le,O),v(Z.name||"",O),v(ne,O))}}).filter(Z=>Z.score>=0)}function n(O){return C.map(W=>{let G=ServerI18n.t(W.labelKey),Z=W.subKey?ServerI18n.t(W.subKey):W.sub;return{type:"action",id:W.id,label:G,sub:Z,icon:"\u26A1",action:W.action,score:Math.max(v(G,O),v(W.id,O),v(Z,O))}}).filter(W=>W.score>=0)}function i(O){return L?(L.records||[]).map(G=>{let Z=G.fingerprint||G.fp||G.id||"",le=G.ip||G.last_ip||"",ne=G.nickname||"";return{type:"user",label:ne?`@${ne}  \xB7  ${Z.slice(0,12)}\u2026`:`${Z.slice(0,12)}\u2026`,sub:`user \xB7 ${le||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(v(Z,O),v(le,O),v(ne,O))}}).filter(G=>G.score>=0):[]}async function r(){let O=Date.now(),W=[];(!S||O-S.at>$)&&W.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{S={at:O,records:G&&G.records||[]}}).catch(()=>{S={at:O,records:[]}})),(!L||O-L.at>$)&&W.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{L={at:O,records:G&&G.records||[]}}).catch(()=>{L={at:O,records:[]}})),(!P||O-P.at>$)&&W.push(fetch("/admin/themes",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{P={at:O,records:G&&G.themes||[],active:G&&G.active||""}}).catch(()=>{P={at:O,records:[],active:""}})),W.length&&await Promise.all(W)}let p={actions:5,pages:5,messages:4};async function T(){await r();let O=x.trim(),W={action:n(O),route:d(O),setting:t(O),theme:b(O),message:u(O),user:i(O)};k=[],N=[],f.forEach(G=>{let Z=G.types.reduce((le,ne)=>le.concat(W[ne]||[]),[]).sort((le,ne)=>ne.score-le.score).slice(0,p[G.id]||5);Z.length&&(N.push({id:G.id,labelKey:G.labelKey,from:k.length,count:Z.length}),k=k.concat(Z))}),E=0,_()}function I(O){return O.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[O.type]||"\xB7"}function _(){if(!k.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let O=[];N.forEach(W=>{O.push(`<li class="admin-cmdk-group" role="presentation">${w(ServerI18n.t(W.labelKey))}</li>`);for(let G=W.from;G<W.from+W.count;G++){let Z=k[G],le=G===E;O.push(`
        <li class="admin-cmdk-row ${le?"is-active":""}"
            data-cmdk-idx="${G}" role="option" aria-selected="${le}">
          <span class="admin-cmdk-icon" aria-hidden="true">${w(I(Z))}</span>
          <span class="admin-cmdk-label">${w(Z.label)}</span>
          <span class="admin-cmdk-sub">${w(Z.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${le?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=O.join("")}function B(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),x="",M.value="",T(),setTimeout(()=>M.focus(),20)}function R(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function j(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:B,close:R,isOpen:j,toggle:()=>j()?R():B()}})()});var rn=ge(()=>{(function(){"use strict";let g="sec-sessions-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},y={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(c){if(c=Number(c)||0,c<=0)return"\u2014";var s=Math.floor(c/3600),e=Math.floor(c%3600/60),l=c%60;return s>0?s+"h "+e+"m":e>0?e+"m":l+"s"}function A(c){if(!c)return"\u2014";try{var s=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return s.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function U(){return'<div id="'+g+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+h(ServerI18n.t("sessionsColSession"))+"</span><span>"+h(ServerI18n.t("sessionsColMessages"))+"</span><span>"+h(ServerI18n.t("sessionsColViewers"))+"</span><span>"+h(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function C(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(y.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!y.sessions.length){c.innerHTML="";var s=window.AdminEmpty.render("sessions");s.dataset.emptyKind="sessions",c.appendChild(s);return}var e=y.sessions.map(function(l){var a=h(l.id||"");return'<div class="admin-sessions-tr'+(l.is_live?" is-live":"")+'" data-session-id="'+a+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(l.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+h(C(l))+'<span class="admin-sessions-td-sub">'+h(A(l.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(l.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(l.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+h(f(l.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+a+'">'+h(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=F()+e}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var c=document.querySelector("[data-sessions-export]");if(c){if(!y.exportId){c.hidden=!0,c.innerHTML="";return}var s=y.sessions.find(function(l){return l.id===y.exportId});if(!s){y.exportId=null,c.hidden=!0,c.innerHTML="";return}var e=M.map(function(l){return'<button type="button" class="admin-sx-export__seg'+(l.id===y.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+l.id+'" aria-pressed="'+(l.id===y.exportFormat?"true":"false")+'">'+h(ServerI18n.t(l.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+h(ServerI18n.t("sessionsExportTitle",{name:C(s)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+h(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(y.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+h(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+h(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+h(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+h(ServerI18n.t("sessionsDownloadBtn",{fmt:y.exportFormat.toUpperCase()}))+"</button></div>"}}function x(){if(y.exportId){var c="/admin/sessions/"+encodeURIComponent(y.exportId)+"/export?format="+encodeURIComponent(y.exportFormat)+"&include_pii="+(y.exportPii?"1":"0"),s=document.createElement("a");s.href=c,s.rel="noopener",document.body.appendChild(s),s.click(),s.remove()}}async function k(){var c=y.exportId;if(c)try{var s=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);var e=await s.json(),l=(e.records||[]).slice(0,500);if(!l.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var a=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:l,speedMultiplier:1})});if(a.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){m(),D()}async function E(){y.loading=!0,m();try{var[c,s]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],l=[];if(c.ok){var a=await c.json();e=Array.isArray(a.sessions)?a.sessions:[],e.forEach(function(i){i._explicit=!0})}if(s.ok){var d=await s.json();l=Array.isArray(d.sessions)?d.sessions:[]}var o=e.slice(),t=new Set(e.map(function(i){return i.id}));l.forEach(function(i){t.has(i.id)||o.push(i)}),o.sort(function(i,r){var p=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0),T=typeof r.started_at=="number"?r.started_at:Date.parse(r.started_at||0);return T-p});try{var u=await fetch("/admin/session/current",{credentials:"same-origin"});if(u.ok){var b=await u.json();if(b.status==="live"){var n=Object.assign({},b,{id:b.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});o.unshift(n)}}}catch{}y.sessions=o,y.total=o.length}catch(i){console.error("[admin-sessions] fetch error:",i),y.sessions=[],y.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:i.message||""}),!1)}finally{y.loading=!1,N()}}function S(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function L(c){y.exportId=c,D();var s=document.querySelector("[data-sessions-export]");s&&s.scrollIntoView({block:"nearest"})}function P(){var c=document.getElementById(g);c&&(c.addEventListener("click",function(s){var e=s.target.closest("[data-sessions-export-open]");if(e){s.stopPropagation(),L(e.dataset.sessionsExportOpen);return}if(s.target.closest("[data-sessions-export-close]")){y.exportId=null,D();return}var l=s.target.closest("[data-sessions-export-fmt]");if(l){y.exportFormat=l.dataset.sessionsExportFmt,D();return}if(s.target.closest("[data-sessions-replay]")){k();return}if(s.target.closest("[data-sessions-download]")){x();return}var a=s.target.closest(".admin-sessions-tr");a&&S(a.dataset.sessionId||null)}),c.addEventListener("change",function(s){var e=s.target.closest("[data-sessions-export-pii]");e&&(y.exportPii=!!e.checked)}),c.addEventListener("keydown",function(s){if(!(s.key!=="Enter"&&s.key!==" ")){var e=s.target.closest(".admin-sessions-tr");e&&(s.preventDefault(),S(e.dataset.sessionId||null))}}))}function $(){var c=document.querySelector(".admin-dash-grid"),s=document.getElementById(g);if(!(!c||!s)){var e=c.dataset.activeLeaf||"dashboard";s.style.display=e==="sessions"?"":"none"}}function w(){var c=document.getElementById("settings-grid");!c||document.getElementById(g)||(c.insertAdjacentHTML("beforeend",U()),P(),E(),$())}function v(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&w(),$()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",$),document.addEventListener("admin-panel-rendered",function(){w(),$()}),w()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var dn=ge(()=>{(function(){"use strict";let g="sec-session-detail-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},y={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,A={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function U(){let I=window.location.hash||"",_=I.indexOf("?");if(_===-1)return null;let B=I.slice(_+1);return new URLSearchParams(B).get("id")||null}function F(I){if(!I)return"\u2014";try{let _=new Date(I);if(isNaN(_.getTime()))return String(I);let B=R=>String(R).padStart(2,"0");return`${_.getFullYear()}-${B(_.getMonth()+1)}-${B(_.getDate())} ${B(_.getHours())}:${B(_.getMinutes())}:${B(_.getSeconds())}`}catch{return String(I)}}function C(I){if(!I||I<0)return"\u2014";let _=Math.round(Number(I)),B=Math.floor(_/3600),R=Math.floor(_%3600/60),j=_%60;return B>0?`${B}h ${R}m ${j}s`:R>0?`${R}m ${j}s`:`${j}s`}function m(I,_){if(!I||!_)return"";try{let B=Math.max(0,Math.round((new Date(I)-new Date(_))/1e3)),R=Math.floor(B/60),j=B%60;return`+${String(R).padStart(2,"0")}:${String(j).padStart(2,"0")}`}catch{return""}}function M(I){let _=Number(I);return isNaN(_)?"\u2014":_.toLocaleString()}function D(I){if(!I)return"#64748b";let _=0;for(let R=0;R<I.length;R++)_=_*31+I.charCodeAt(R)>>>0;return`hsl(${_%360}, 60%, 60%)`}function x(){return`
      <div id="${g}" class="admin-sd-page hud-page-stack lg:col-span-2">
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
    `}async function k(I){if(!I){$(ServerI18n.t("sessionDetailErrMissingId"));return}P(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(I)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(I)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let B=await _.json();y.session=B.session||null,y.records=B.records||[],y.density=B.density||[],P(!1),w(),N()}catch(_){P(!1),$(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(y.sessionId)try{let I=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(y.sessionId)}`,{credentials:"same-origin"});if(!I.ok)return;let _=await I.json();y.annotations=Array.isArray(_.annotations)?_.annotations:[],a()}catch{}}function E(){let I=y.session;if(!I)return 0;if(I.duration_s)return Math.round(I.duration_s*1e3);if(I.duration)return Math.round(I.duration*1e3);let _=I.started_at||I.start_time,B=I.ended_at||I.end_time;if(_&&B)try{return Math.max(0,new Date(B)-new Date(_))}catch{return 0}return y.density&&y.density.length?y.density.length*60*1e3:0}function S(I){let _=Date.parse(I||0);if(Number.isNaN(_))return"\u2014";let B=new Date(_),R=j=>String(j).padStart(2,"0");return`${R(B.getHours())}:${R(B.getMinutes())}:${R(B.getSeconds())}`}function L(I){let _=Math.floor(I/1e3),B=Math.floor(_/3600),R=Math.floor(_%3600/60),j=_%60,O=W=>String(W).padStart(2,"0");return B>0?`${O(B)}:${O(R)}:${O(j)}`:`${O(R)}:${O(j)}`}function P(I){y.loading=I;let _=document.querySelector("[data-sd-loading]"),B=document.querySelector("[data-sd-error]");_&&(_.hidden=!I),B&&I&&(B.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let j=R.querySelector("[data-sd-timeline-skel]");I?(R.hidden=!1,j||(j=window.AdminSkeletons.chart(),j.setAttribute("data-sd-timeline-skel","1"),R.appendChild(j))):j&&j.remove()}}function $(I){y.error=I;let _=document.querySelector("[data-sd-error]"),B=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),B&&(B.textContent=I),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let j=document.querySelector(`[${R}]`);j&&(j.hidden=!0)})}function w(){v(),c(),s(),l(),a();let I=document.querySelector("[data-sd-error]");I&&(I.hidden=!0)}function v(){let I=y.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let B=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),j=document.querySelector("[data-sd-meta-duration]"),O=document.querySelector("[data-sd-title]"),W=I&&(I.session_id||I.id)||y.sessionId||"\u2014";B&&(B.textContent=W),R&&(R.textContent=F(I&&(I.started_at||I.start_time))),j&&(j.textContent=C(I&&(I.duration_s||I.duration))),O&&(O.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(W).slice(-8)}))}function c(){let I=y.session;if(!I)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let B=function(W,G,Z){let le=document.querySelector(`[data-sd-stat="${W}"]`);le&&(le.textContent=G);let ne=document.querySelector(`[data-sd-stat-sub="${W}"]`);ne&&(ne.textContent=Z||"")};B("msg_count",M(I.msg_count)),B("viewer_count",M(I.viewer_count));let R=Array.isArray(y.density)?y.density:[];if(R.length){let W=0,G=0;R.forEach(function(ne,J){ne>W&&(W=ne,G=J)});let Z=Date.parse(I.started_at||I.start_time||0),le="";if(!Number.isNaN(Z)){let ne=new Date(Z+G*6e4),J=ee=>String(ee).padStart(2,"0");le=`${J(ne.getHours())}:${J(ne.getMinutes())}`}B("peak",M(W),le)}else B("peak","\u2014","");let j=Number(I.blocked_count)||0;B("blocked",M(j));let O=document.querySelector("[data-sd-blocked-btn]");O&&(O.textContent=ServerI18n.t("sessionDetailStatBlocked")+(j?" "+j:""),O.disabled=j===0)}function s(){let I=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),B=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!I||!_||!B)return;let j=y.density;if(!j||j.length===0){I.hidden=!0;return}I.hidden=!1;let O=Math.max(1,...j),W=0;j.forEach(function(ee,K){ee>j[W]&&(W=K)});let G=j.map(function(ee,K){let Y=Math.max(2,Math.round(ee/O*100));return`<div class="admin-sd-bar${K===W?" is-peak":""}" style="height:${Y}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ee,minute:K+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ee})}"></div>`}).join("");_.innerHTML=G;let Z=y.session,le=F(Z&&(Z.started_at||Z.start_time)).slice(11,16)||"00:00",ne=F(Z&&(Z.ended_at||Z.end_time)).slice(11,16)||"",J=j.length>2?`+${Math.round(j.length/2)}min`:"";B.innerHTML=`
      <span class="admin-sd-axis-label">${h(le)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${h(J)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${h(ne)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:j[W],minute:W}))}function e(){let I=(y.msgQuery||"").trim().toLowerCase();return y.records.filter(function(_){let B=(_.status||"shown")==="blocked";return y.msgFilter==="blocked"&&!B?!1:I?String(_.text||"").toLowerCase().indexOf(I)!==-1||String(_.nickname||"").toLowerCase().indexOf(I)!==-1:!0})}function l(){let I=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!I||!_)return;if(!y.records.length){I.hidden=!0;return}I.hidden=!1;let B=e().slice(0,300);if(!B.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+h(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=B.map(function(R){let j=(R.status||"shown")==="blocked",O=D(R.fingerprint||R.fp||""),W=S(R.timestamp||R.created_at),G=String(R.nickname||"").trim();return`
        <div class="admin-sd-msg-row${j?" is-blocked":""}">
          <span class="admin-sd-msg-time">${h(W)}</span>
          <span class="admin-sd-msg-dot" style="background:${O}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${h(R.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${h(ServerI18n.t("deliveryStatus_"+(R.status||"shown")))}
            ${R.delivery_reason?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("deliveryReason_"+R.delivery_reason))}</span>`:""}
            ${j&&R.blockedBy?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("sessionDetailBlockedBy",{rule:R.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${h(G||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function a(){let I=y.annotations||[],_=E(),B=document.querySelector("[data-sd-ann-count]");B&&(B.textContent=I.length?`${I.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=I.length?`ANNOTATIONS \xB7 ${I.length}`:"ANNOTATIONS");let j=document.querySelector("[data-sd-ann-layer]");j&&(!_||I.length===0?j.innerHTML="":j.innerHTML=I.map(function(G){let Z=A[G.label]||A.note,le=Math.min(100,Math.max(0,G.ts_ms/_*100)),ne=G.id===y.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Z.shape}${ne?" is-active":""}"
              data-sd-ann-marker="${h(G.id)}"
              style="left:${le.toFixed(2)}%;--ann-color:${Z.color}"
              title="${h(Z.label)} \xB7 ${L(G.ts_ms)}"
              aria-label="${h(Z.label)} at ${L(G.ts_ms)}: ${h(G.note||"")}">
              ${Z.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${ne?`<span class="admin-sd-ann-tip"><span style="color:${Z.color}">${Z.icon}</span> ${h((G.note||"").slice(0,40))}${(G.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let O=document.querySelector("[data-sd-ann-legend]");O&&(O.innerHTML=Object.keys(A).map(function(G){let Z=A[G],le=Z.shape==="square"?"2px":Z.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Z.color};border-radius:${le}"></span>
          <span class="admin-sd-ann-legend-label">${Z.label}</span>
        </span>`}).join(""));let W=document.querySelector("[data-sd-ann-list]");if(W){if(I.length===0){W.innerHTML="";let G=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});G.dataset.emptyKind="session-annotations",W.appendChild(G);return}W.innerHTML=I.map(function(G){let Z=A[G.label]||A.note,le=G.id===y.activeAnnId,J=(G.note||"").length>80?(G.note||"").slice(0,80)+"\u2026":G.note||"";return`
        <div class="admin-sd-ann-row${le?" is-active":""}" data-sd-ann-row="${h(G.id)}">
          <span class="admin-sd-ann-ts" style="color:${Z.color}">${L(G.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Z.color}">${Z.icon} ${Z.label}</span>
          <span class="admin-sd-ann-note">${h(J)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${h(G.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function d(I){if(!y.sessionId)return;let _=window.HudConfirm;if(!_){let Z=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:L(I)}),"");Z!=null&&Z.trim()&&o(I,"note",Z.trim());return}let R="highlight",j="",O=document.createElement("div");O.className="admin-sd-ann-modal-body",O.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${L(I)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(A).map(function(Z){let le=A[Z];return`
              <button type="button" class="admin-sd-ann-modal-lbl${Z==="highlight"?" is-active":""}"
                data-ann-label="${Z}" style="--ann-color:${le.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${le.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${le.label}</span>
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
      </div>`,O.addEventListener("click",function(Z){let le=Z.target.closest("[data-ann-label]");le&&(R=le.dataset.annLabel,O.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(ne){ne.classList.toggle("is-active",ne===le)}))});let W=O.querySelector("[data-ann-modal-note]"),G=O.querySelector("[data-ann-modal-counter]");W.addEventListener("input",function(){j=W.value,G.textContent=`${j.length} / 280`}),setTimeout(function(){W&&W.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:O,width:460}).then(function(Z){Z&&o(I,R,W.value.trim())})}async function o(I,_,B){if(y.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:y.sessionId,ts_ms:Math.max(0,Math.round(I)),label:_||"note",note:B||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let j=await R.json();j.annotation&&(y.annotations.push(j.annotation),y.annotations.sort(function(O,W){return O.ts_ms-W.ts_ms}),y.activeAnnId=j.annotation.id,a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(I){if(I)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(I)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);y.annotations=y.annotations.filter(function(B){return B.id!==I}),y.activeAnnId===I&&(y.activeAnnId=null),a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function u(I){let _=document.querySelector("[data-sd-timeline-inner]"),B=document.querySelector("[data-sd-ann-hover]");if(!_||!B)return;let R=_.getBoundingClientRect();if(!R.width)return;let j=I.clientX-R.left,O=Math.min(1,Math.max(0,j/R.width)),W=E();if(!W){B.hidden=!0;return}let G=Math.round(O*W);y.hoverTsMs=G,B.hidden=!1,B.style.left=`${(O*100).toFixed(2)}%`,B.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:L(G)})}function b(){let I=document.querySelector("[data-sd-ann-hover]");I&&(I.hidden=!0),y.hoverTsMs=null}function n(I){if(I.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let B=_.getBoundingClientRect();if(!B.width)return;let R=I.clientX-B.left,j=Math.min(1,Math.max(0,R/B.width)),O=E();O&&d(Math.round(j*O))}async function i(){if(y.sessionId)try{let I=y.records.slice(0,500);if(!I.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:I,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function r(I,_){if(I==="back")window.location.hash="#/history/sessions";else if(I==="retry")y.sessionId&&k(y.sessionId);else if(I==="export"){if(!y.sessionId)return;let B=document.createElement("a");B.href="/admin/sessions/"+encodeURIComponent(y.sessionId)+"/export?format=csv",B.rel="noopener",document.body.appendChild(B),B.click(),B.remove()}else if(I==="replay")i();else if(I==="add-annotation"){let B=E(),R=y.hoverTsMs!=null?y.hoverTsMs:Math.round(B/2);d(R)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=U();if(!_){y.sessionId=null,$(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}y.sessionId=_,k(_)}function T(){let I=document.getElementById("settings-grid");if(!I)return;let _=document.getElementById(g);_||(I.insertAdjacentHTML("beforeend",x()),_=document.getElementById(g),a()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(B){let R=B.target.closest("[data-sd-ann-del]");if(R){B.stopPropagation(),t(R.dataset.sdAnnDel);return}let j=B.target.closest("[data-sd-ann-marker]");if(j){B.stopPropagation(),y.activeAnnId=j.dataset.sdAnnMarker,a();let le=document.querySelector(`[data-sd-ann-row="${y.activeAnnId}"]`);le&&le.scrollIntoView&&le.scrollIntoView({block:"nearest",behavior:"smooth"});return}let O=B.target.closest("[data-sd-ann-row]");if(O){y.activeAnnId=O.dataset.sdAnnRow,a();return}if(B.target.closest("[data-sd-timeline-inner]")){n(B);return}let G=B.target.closest("[data-sd-action]");if(G){B.preventDefault(),r(G.dataset.sdAction,G);return}let Z=B.target.closest("[data-sd-filter]");Z&&(y.msgFilter=Z.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(le){le.classList.toggle("is-active",le===Z)}),l())}),_.addEventListener("input",function(B){let R=B.target.closest("[data-sd-search]");R&&(y.msgQuery=R.value||"",l())}),_.addEventListener("mousemove",function(B){B.target.closest("[data-sd-timeline-inner]")&&u(B)}),_.addEventListener("mouseleave",function(B){B.target.closest&&B.target.closest("[data-sd-timeline-inner]")&&b()},!0)),y.sessionId=U(),y.sessionId?k(y.sessionId):$(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(g)&&_.indexOf("/session-detail")!==-1&&T(),window.addEventListener("admin-route-changed",function(B){(B&&B.detail&&B.detail.route)==="session-detail"&&T()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&T()})})})()});var ln=ge(()=>{(function(){"use strict";let g="sec-search-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},y=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:y,results:[],total:0,loading:!1,searched:!1},A=0;function U(){return'<div id="'+g+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+h(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+h(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+h(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+h(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+h(ServerI18n.t("searchWhoAria"))+'"><option value="">'+h(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+h(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+h(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(e){if(!e)return 200;for(var l=0,a=0;a<Math.min(e.length,6);a++)l=l*31+e.charCodeAt(a)&65535;return l%360}function C(e,l){if(!l||!e)return h(e||"");var a=h(e),d=h(l);try{var o=new RegExp("("+d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return a.replace(o,'<mark class="admin-search-hit">$1</mark>')}catch{return a}}function m(e){if(!e)return"\u2014";try{var l=new Date(e);return l.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function M(){var e=f.results;return f.blockedOnly&&(e=e.filter(function(l){return(l.status||"shown")==="blocked"})),f.who&&(e=e.filter(function(l){return(l.nickname||"")===f.who})),e}function D(){var e=document.getElementById("admin-search-count");if(e){if(!f.searched||!f.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function x(){var e=document.querySelector("[data-search-who]");if(e){var l=[];f.results.forEach(function(d){var o=(d.nickname||"").trim();o&&l.indexOf(o)===-1&&l.push(o)}),l.sort();var a=f.who;e.innerHTML='<option value="">'+h(ServerI18n.t("searchWhoAnyone"))+"</option>"+l.map(function(d){return'<option value="'+h(d)+'"'+(d===a?" selected":"")+">"+h(d)+"</option>"}).join("")}}function k(){var e=document.getElementById("admin-search-results"),l=document.getElementById("admin-search-empty-state"),a=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(n){n.remove()});var d=function(n){l&&(l.style.display="block",l.textContent=n),a&&(a.hidden=!0)};if(f.loading)return d(ServerI18n.t("searchSearching"));if(!f.searched)return d(ServerI18n.t("searchPromptStart"));var o=M();if(o.length===0)return d(ServerI18n.t("searchNoMatch"));l&&(l.style.display="none"),a&&(a.hidden=!1);var t=Math.min(o.length,f.shown),u=document.createDocumentFragment();if(o.slice(0,t).forEach(function(n){var i=document.createElement("div");i.className="admin-search-row",i.innerHTML='<span class="admin-search-row__ts">'+h(m(n.timestamp))+'</span><span class="admin-search-row__text">'+C(n.text||"",f.query)+'</span><span class="admin-search-row__nick">'+h((n.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+h(ServerI18n.t("deliveryStatus_"+(n.status||"shown")))+(n.delivery_reason?"<br>"+h(ServerI18n.t("deliveryReason_"+n.delivery_reason)):"")+"</span></span>",u.appendChild(i)}),e.appendChild(u),o.length>t){var b=document.createElement("button");b.type="button",b.className="admin-search-more",b.dataset.searchMore="1",b.textContent=ServerI18n.t("searchMoreLeft",{n:o.length-t}),e.appendChild(b)}}}function N(){D(),x(),k()}async function E(){var e=f.query.trim();if(!e){f.loading=!1,f.searched=!1,f.results=[],f.total=0,N();return}f.loading=!0,N();try{var l="/admin/search?q="+encodeURIComponent(e);if(f.scope==="session"){var a=await L();a&&(l+="&since="+encodeURIComponent(a))}var d=Date.now(),o=await fetch(l,{credentials:"same-origin"}),t=Date.now()-d;if(!o.ok)throw new Error("HTTP "+o.status);var u=await o.json();f.results=Array.isArray(u.results)?u.results:[],f.total=typeof u.total=="number"?u.total:f.results.length,f.shown=y}catch(b){console.error("[admin-search] fetch error:",b),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:b.message||""}),!1)}finally{f.loading=!1,f.searched=!0,N()}}var S=null;async function L(){if(S!==null)return S;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var l=await e.json();if(l.status==="live"&&l.started_at)return S=new Date(l.started_at*1e3).toISOString(),S}}catch{}return S="",""}function P(){clearTimeout(A),A=setTimeout(E,300)}function $(){if(f.results.length){var e=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(o){var t=[o.nickname||"",o.fingerprint||"",o.timestamp||"",o.status||"",o.text||"",o.delivery_reason||""].map(function(u){return'"'+String(u).replace(/"/g,'""')+'"'});e.push(t.join(","))});var l=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),a=URL.createObjectURL(l),d=document.createElement("a");d.href=a,d.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(a)}}function w(){var e=document.getElementById(g);if(e){var l=document.getElementById("admin-search-input");l&&(l.addEventListener("input",function(){f.query=l.value,P()}),l.addEventListener("keydown",function(d){d.key==="Enter"&&(clearTimeout(A),f.query=l.value,E())})),e.addEventListener("click",function(d){var o=d.target.closest("[data-search-scope]");if(o){f.scope=o.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(u){u.classList.toggle("is-active",u===o)}),f.query.trim()&&P();return}var t=d.target.closest("[data-search-blocked]");if(t){f.blockedOnly=!f.blockedOnly,t.classList.toggle("is-active",f.blockedOnly),f.shown=y,N();return}if(d.target.closest("[data-search-more]")){f.shown+=y,k();return}}),e.addEventListener("change",function(d){var o=d.target.closest("[data-search-who]");o&&(f.who=o.value||"",f.shown=y,N())});var a=document.getElementById("admin-search-export-btn");a&&a.addEventListener("click",$)}}function v(){var e=document.querySelector(".admin-dash-grid"),l=document.getElementById(g);if(!(!e||!l)){var a=e.dataset.activeLeaf||"dashboard";l.style.display=a==="search"?"":"none"}}function c(){var e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",U()),w(),v())}function s(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&c(),v()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",v),document.addEventListener("admin-panel-rendered",function(){c(),v()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var cn=ge(()=>{(function(){"use strict";let g="sec-api-tokens-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},y=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],A={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function U(n){if(!n)return"\u2014";try{let i=new Date(n);if(isNaN(i.getTime()))return String(n);let r=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${r(i.getMonth()+1)}-${r(i.getDate())}`}catch{return String(n)}}function F(n){if(!n)return null;try{let i=new Date(n);if(isNaN(i.getTime()))return null;let r=p=>String(p).padStart(2,"0");return`${i.getFullYear()}-${r(i.getMonth()+1)}-${r(i.getDate())} ${r(i.getHours())}:${r(i.getMinutes())}`}catch{return null}}function C(n){let i=Number(n);return isNaN(i)?"0":i.toLocaleString()}function m(n){if(!n||n.enabled===!1)return"inactive";if(!n.expires_at)return"active";try{let i=new Date(n.expires_at).getTime(),r=Date.now();if(i<r)return"expired";if(i-r<168*3600*1e3)return"expiring"}catch{}return"active"}function M(n){if(!n)return 1/0;try{return Math.floor((Date.now()-new Date(n).getTime())/864e5)}catch{return 1/0}}function D(n){return!n||!n.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':n.map(function(i){let r="admin-ui-pill admin-at-scope-badge";return i==="admin:*"?r+=" is-danger":i.startsWith("fire:")?r+=" is-warn":i.startsWith("read:stats")?r+=" is-cyan":r+=" is-success",`<span class="${r}">${h(i)}</span>`}).join(" ")}function x(n){let i="admin-ui-dot admin-at-dot";return n==="active"?i+=" is-success":n==="expiring"?i+=" is-warn":n==="expired"?i+=" is-danger":i+=" is-muted",`<span class="${i}" aria-hidden="true"></span>`}function k(){let n=y.map(function(r){let p=r.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",I=`admin-ui-pill admin-at-scope-badge is-${r.badge==="red"?"danger":r.badge==="amber"?"warn":r.badge==="green"?"success":r.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${r.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${r.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${h(r.id)}"
          >
          <span class="${I}">${h(r.badgeTxt)}</span>
          <span class="admin-at-scope-label">${h(ServerI18n.t(r.labelKey))}</span>
          ${p}
        </label>
      `}).join(""),i=f.map(function(r){let p=r.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${r.days!==null?String(r.days):"null"}" ${p} class="sr-only">
          <span>${h(ServerI18n.t(r.labelKey))}</span>
        </label>
      `}).join("");return`
      <details id="${g}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
                    ${n}
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
    `}async function N(){P(!0);try{let n=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let i=await n.json();A.tokens=i.tokens||i||[],w()}catch(n){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{P(!1)}}async function E(n){A.creating=!0,$(!0),l();try{let i=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let T=await i.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${i.status}`)}let r=await i.json(),p=r.token||r.raw_token||r.access_token||null;A.newTokenRaw=p,v(p),s(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(i){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:i.message||""}),!1)}finally{A.creating=!1,$(!1)}}async function S(n,i){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${h(i||n)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(n)}`,{method:"DELETE"});if(!p.ok){let T=await p.json().catch(()=>({}));throw new Error(T.error||T.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function L(n,i){try{let r=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(n)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:i})});if(!r.ok){let p=await r.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${r.status}`)}window.showToast&&window.showToast(i?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(r){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:r.message||""}),!1)}}function P(n){let i=document.querySelector("[data-at-list-loading]");i&&(i.hidden=!n)}function $(n){let i=document.getElementById("adminAtSubmitBtn");i&&(i.disabled=n,i.textContent=n?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function w(){let n=A.tokens,i=document.querySelector("[data-at-empty]"),r=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!i||!r||!p)){if(!n||n.length===0){if(!i.firstElementChild&&window.AdminEmpty){let T=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});T.dataset.emptyKind="api-tokens",i.appendChild(T)}i.hidden=!1,r.hidden=!0;return}i.hidden=!0,r.hidden=!1,p.innerHTML=n.map(function(T){let I=m(T),_=x(I),B=T.scopes||T.scope||[],R=Array.isArray(B)?B:String(B).split(",").map(le=>le.trim()).filter(Boolean),O=M(T.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",W=I==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",G=I==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Z=T.last_used_at?`${F(T.last_used_at)||U(T.last_used_at)}<br><span class="admin-at-ip">${h(T.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${h(T.id||T.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${h(T.label||T.name||"\u2014")}</span>
            ${O}${W}${G}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${h(T.prefix||T.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(R)}</div>
          </td>
          <td class="admin-at-td-used">${Z}</td>
          <td class="admin-at-td-usage">${C(T.usage_count||T.use_count)}</td>
          <td class="admin-at-td-created">${U(T.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${h(T.id||T.token_id||"")}"
              data-token-enabled="${T.enabled===!1?"0":"1"}"
              title="${T.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${T.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${h(T.id||T.token_id||"")}"
              data-token-label="${h(T.label||T.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function v(n){let i=document.getElementById("adminAtSuccessBanner"),r=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");i&&(i.hidden=!1),r&&n&&(r.value=n),p&&(p.style.opacity="0.5"),i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let n=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtCreateForm");n&&(n.hidden=!0),i&&(i.style.opacity=""),A.newTokenRaw=null}function s(){let n=document.getElementById("adminAtCreateForm");n&&n.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){i.checked=!0;let p=i.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let r=document.getElementById("adminAtAdminWarn");r&&(r.hidden=!0),l()}function e(n){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!1,i.textContent=n)}function l(){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!0,n.textContent="")}function a(){let n=document.getElementById("adminAtLabel"),i=n?n.value.trim():"",r=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){r.push(_.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),T=p?p.value:"90",I=T==="null"?null:parseInt(T,10);return{label:i,scopes:r,expiry_days:I}}function d(n){return n.label?n.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!n.scopes||n.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function o(n){if(n.preventDefault(),A.creating)return;l();let i=a(),r=d(i);if(r){e(r);return}E(i)}function t(){let n=A.newTokenRaw;if(!n)return;let i=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(n).then(function(){i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let r=document.getElementById("adminAtTokenDisplay");r&&(r.select(),document.execCommand("copy")),i&&(i.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){i.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function u(){let n=document.getElementById(g);if(!n)return;n.addEventListener("click",function(T){let I=T.target.closest("[data-at-action]");if(I){let B=I.dataset.atAction;if(B==="revoke"){let R=I.dataset.tokenId,j=I.dataset.tokenLabel;S(R,j)}else if(B==="toggle"){let R=I.dataset.tokenId,j=I.dataset.tokenEnabled==="1";L(R,!j)}else B==="copy-token"&&t();return}let _=T.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(B){B.classList.remove("is-active")}),_.classList.add("is-active"))});let i=document.getElementById("adminAtScope_admin__");i&&i.addEventListener("change",function(){let T=document.getElementById("adminAtAdminWarn");T&&(T.hidden=!i.checked)});let r=document.getElementById("adminAtCreateForm");r&&r.addEventListener("submit",o);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let T=p.closest(".admin-at-expiry-btn");T&&T.classList.add("is-active")}}function b(){let n=document.getElementById("settings-grid");!n||document.getElementById(g)||(n.insertAdjacentHTML("beforeend",k()),u(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&b()})})()});var un=ge(()=>{(function(){"use strict";let g="sec-wcag-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function y(s){let e=s.replace(/^#/,""),l=e.length===3?e.split("").map(function(a){return a+a}).join(""):e;return[parseInt(l.slice(0,2),16)/255,parseInt(l.slice(2,4),16)/255,parseInt(l.slice(4,6),16)/255]}function f(s){return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)}function A(s){let e=y(s);return .2126*f(e[0])+.7152*f(e[1])+.0722*f(e[2])}function U(s,e){let l=A(s),a=A(e),d=Math.max(l,a),o=Math.min(l,a);return(d+.05)/(o+.05)}function F(s){return s>=7?"AAA":s>=4.5?"AA":s>=3?"AA-large":"fail"}function C(s,e){let l=A(e),a=[],d=y(s);for(let o=.05;o<=.6&&a.length<3;o+=.05){let u="#"+d.map(function(n){return Math.min(1,n+o)}).map(function(n){return Math.round(n*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),b=U(u,e);b>=4.5&&a.push({hex:u,ratio:b})}return a}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",x={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function k(){let s=m.filter(function(a){return F(U(a.fg,a.bg))!=="fail"}).length,e=m.length-s,l=Math.round(s/m.length*100);return`
      <div id="${g}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${N("PASS AA+",s,ServerI18n.t("wcagStatPassLabel"))}
              ${N("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${N("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",l+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:l})}">
                <div class="admin-wcag-meter-fill" style="width:${l}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(a,d){return E(a,d)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${S()}
          </div>
        </div>
      </div>`}function N(s,e,l){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${h(String(e))}</span>
        <span class="hud-stat-tile-label">${h(l)}</span>
      </div>`}function E(s,e){let l=U(s.fg,s.bg),a=F(l),d=x[a],o=ServerI18n.t(s.nameKey),t=d.labelKey?ServerI18n.t(d.labelKey):d.label,u=a==="fail"?ServerI18n.t("wcagWarnFail"):a==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${h(ServerI18n.t("wcagPairAriaLabel",{name:o,ratio:l.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${h(o)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${h(s.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${h(s.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${h(s.fg)}">${h(s.fg)} / ${h(s.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${l.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${t}</span>
        ${u?`<span class="admin-wcag-warn">\u26A0 ${u}</span>`:""}
      </div>`}function S(){let s=U(M.fg,M.bg),e=F(s),l=x[e],a=l.labelKey?ServerI18n.t(l.labelKey):l.label,d=C(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${L(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${L(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${h(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${h(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${h(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${h(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${s.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${l.mod}">${a}</span>
      </div>

      <div class="admin-wcag-levels">
        ${P(ServerI18n.t("wcagCheckAANormal"),s>=4.5)}
        ${P(ServerI18n.t("wcagCheckAALarge"),s>=3)}
        ${P(ServerI18n.t("wcagCheckAAANormal"),s>=7)}
        ${P(ServerI18n.t("wcagCheckAAALarge"),s>=4.5)}
      </div>

      ${d.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${d.map(function(o){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${h(o.hex)}"
                title="${h(ServerI18n.t("wcagSuggApplyTitle",{ratio:o.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${h(M.bg)};color:${h(o.hex)}">${h(o.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${o.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function L(s,e,l){let a="wcag-tester-"+l;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${a}">${h(s)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${h(e)}"></span>
          <input type="text" id="${a}" class="admin-ui-input" data-wcag-tester-${l}
            aria-label="${h(ServerI18n.t("wcagHexAria",{label:s}))}"
            value="${h(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function P(s,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${h(s)}</span>
    </div>`}function $(){let s=document.getElementById(g);s&&(s.addEventListener("click",function(e){let l=e.target.closest("[data-wcag-pair-idx]");if(l){w(l);return}let a=e.target.closest("[data-wcag-sugg]");a&&(M.fg=a.dataset.wcagSugg,v())}),s.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let l=e.target.closest("[data-wcag-pair-idx]");l&&(e.preventDefault(),w(l))}),s.addEventListener("input",function(e){let l=e.target.closest("[data-wcag-tester-fg]"),a=e.target.closest("[data-wcag-tester-bg]");l&&/^#[0-9A-Fa-f]{6}$/.test(l.value)&&(M.fg=l.value.toUpperCase(),v()),a&&/^#[0-9A-Fa-f]{6}$/.test(a.value)&&(M.bg=a.value.toUpperCase(),v())}))}function w(s){let e=m[parseInt(s.dataset.wcagPairIdx,10)];e&&(M.fg=e.fg,M.bg=e.bg,v())}function v(){let s=document.querySelector("[data-wcag-tester]");s&&(s.innerHTML=S())}function c(){let s=document.getElementById("settings-grid");!s||document.getElementById(g)||(s.insertAdjacentHTML("beforeend",k()),$())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&c()})})()});var mn=ge(()=>{(function(){"use strict";let g="danmu.onboarding.done",h="admin-onboarding-root",U=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,C=!1;window.AdminOnboarding={start:k,isDone:function(){try{return!!localStorage.getItem(g)}catch{return!1}},reset:function(){try{localStorage.removeItem(g)}catch{}}};let m=new Set(["live","dashboard"]);function M(){if(C||window.AdminOnboarding.isDone()||!m.has(D()))return;let s=()=>!!document.querySelector(".admin-session-banner-live");s()||setTimeout(()=>{C||window.AdminOnboarding.isDone()||s()||m.has(D())&&k()},1200)}function D(){let s=document.querySelector(".admin-dash-grid");return s&&s.dataset.activeRoute||"live"}function x(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&k()}function k(){C||(C=!0,F=0,P())}function N(s){if(!C)return;C=!1,document.body.removeEventListener("click",S),document.removeEventListener("keydown",L),window.removeEventListener("resize",$);let e=document.getElementById(h);if(e&&e.remove(),s)try{localStorage.setItem(g,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function E(){F<U.length-1?(F++,$()):N(!0)}function S(s){let e=s.target.closest("[data-ob-action]");e&&(s.stopPropagation(),e.dataset.obAction==="next"?E():e.dataset.obAction==="skip"&&N(!1))}function L(s){C&&s.key==="Escape"&&(s.preventDefault(),N(!1))}function P(){let s=document.getElementById(h);s&&s.remove();let e=document.createElement("div");e.id=h,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",S),document.addEventListener("keydown",L),window.addEventListener("resize",$),$()}function $(){let s=document.getElementById(h);if(!s)return;let e=U[F],l=U.length,a=v(e.target),d=window.innerWidth,o=window.innerHeight,t="";a?t='<div class="admin-ob-spot" style="left:'+(a.left-8)+"px;top:"+(a.top-8)+"px;width:"+(a.width+16)+"px;height:"+(a.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let u=(d-360)/2,b=o/2-110,n="none";if(a){let T=a.left+a.width/2;e.side==="top"?(u=T-360/2,b=a.top-16,n="bottom"):e.side==="right"?(u=a.right+16+8,b=a.top,n="left"):(u=T-360/2,b=a.bottom+16+8,n="top"),u=Math.max(16,Math.min(d-360-16,u))}let i=U.map(function(T,I){return'<span class="admin-ob-progress-item'+(I===F?" is-current":"")+'">'+(I+1)+" "+c(ServerI18n.t(T.labelKey))+"</span>"+(I<l-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");s.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+n+'" style="left:'+u+"px;top:"+b+'px"><div class="admin-ob-count">'+(F+1)+" / "+l+'</div><div class="admin-ob-title">'+c(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(F===l-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+i+"</div></div>";let r=s.querySelector(".admin-ob-bubble");if(!r||!a)return;let p=r.offsetHeight;if(e.side==="top")r.style.top=Math.max(16,a.top-16-8-p)+"px";else if(b+p>o-16){let T=a.top-16-8-p;T>=16?(r.style.top=T+"px",r.setAttribute("data-arrow","bottom")):(r.style.top=Math.max(16,o-p-16)+"px",r.setAttribute("data-arrow","none"))}w(r,a)}function w(s,e){let l=s.getAttribute("data-arrow");if(l==="none")return;let a=s.getBoundingClientRect(),d=l==="top"||l==="bottom",o=d?e.left+e.width/2-a.left:e.top+e.height/2-a.top,t=d?a.width:a.height,u=Math.max(16,Math.min(t-32,o-8));s.style.setProperty("--ob-arrow",u+"px")}function v(s){if(!s)return null;let e=document.querySelector(s);if(!e)return null;let l=e.getBoundingClientRect();return l.width<8||l.height<8||l.bottom<0||l.top>window.innerHeight?null:l}function c(s){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(s):s==null?"":String(s).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",x),x(),window.addEventListener("hashchange",function(){m.has(D())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var yn=ge(()=>{var zi=be(Ze()),Vi=be(et()),Ji=be(tt()),Yi=be(nt()),Qi=be(at()),Xi=be(it()),Zi=be(st()),es=be(ot()),ts=be(rt()),ns=be(dt()),as=be(lt()),is=be(ct()),ss=be(ut()),os=be(mt()),rs=be(pt()),ds=be(vt()),ls=be(ft()),cs=be(ht()),us=be(gt()),ms=be(bt()),ps=be(yt()),vs=be(wt()),fs=be(St()),hs=be(kt()),gs=be(It()),bs=be(Tt()),ys=be(_t()),ws=be(Et()),Ss=be($t()),ks=be(Lt()),Is=be(xt()),Ts=be(At()),_s=be(Ct()),Es=be(Bt()),$s=be(Ft()),Ls=be(Dt()),xs=be(Mt()),As=be(Nt()),Cs=be(Pt()),Bs=be(Rt()),Fs=be(Ot()),Ds=be(qt()),Ms=be(Ht()),Ns=be(jt()),Ps=be(Ut()),Rs=be(Kt()),Os=be(Wt()),qs=be(Gt()),Hs=be(zt()),js=be(Vt()),Us=be(Jt()),Ks=be(Yt()),Ws=be(Qt()),Gs=be(Xt()),zs=be(Zt()),Vs=be(en()),Js=be(tn()),Ys=be(nn()),Qs=be(an()),Xs=be(sn()),Zs=be(on()),eo=be(rn()),to=be(dn()),no=be(ln()),ao=be(cn()),io=be(un()),so=be(mn())});yn();})();
