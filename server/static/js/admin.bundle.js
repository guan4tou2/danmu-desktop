/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var pn=Object.create;var Xe=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var fn=Object.getOwnPropertyNames;var hn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var ge=(b,h)=>()=>{try{return h||b((h={exports:{}}).exports,h),h.exports}catch(y){throw h=0,y}};var bn=(b,h,y,f)=>{if(h&&typeof h=="object"||typeof h=="function")for(let A of fn(h))!gn.call(b,A)&&A!==y&&Xe(b,A,{get:()=>h[A],enumerable:!(f=vn(h,A))||f.enumerable});return b};var be=(b,h,y)=>(y=b!=null?pn(hn(b)):{},bn(h||!b||!b.__esModule?Xe(y,"default",{value:b,enumerable:!0}):y,b));var Ze=ge(()=>{(function(){"use strict";var b=4,h=2500,y=3e3,f=Object.create(null);function A(){return Date.now()}function j(E,S){return(S?"ok:":"err:")+E}function F(E,S){return"var("+E+", "+S+")"}function C(E){return E?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(E){for(var S=Array.prototype.slice.call(E.children);S.length>b;){var L=S.shift();L&&L.parentNode&&L.parentNode.removeChild(L)}}function M(E,S){E.remaining=S,E.startedAt=A(),E.timer=setTimeout(function(){k(E)},S)}function D(E){E.timer&&(clearTimeout(E.timer),E.timer=null,E.remaining=Math.max(600,E.remaining-(A()-E.startedAt)))}function x(E){E.timer||!E.el.parentNode||M(E,E.remaining)}function k(E){clearTimeout(E.timer),E.timer=null,E.key&&f[E.key]===E&&delete f[E.key];var S=E.el;!S||!S.parentNode||(S.style.opacity="0",S.style.transform="translateX(8px)",setTimeout(function(){S.parentNode&&S.parentNode.removeChild(S)},180))}function P(E,S){var L=document.getElementById("toast-container");if(L){S=S!==!1;var R=j(String(E),S),$=f[R];if($&&$.el.parentNode&&A()-$.startedAt<h){$.count+=1,$.countEl&&($.countEl.textContent="\xD7"+$.count,$.countEl.hidden=!1),D($),x($);return}var w=S?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),p=F("--color-surface","#ffffff"),l=F("--color-text-primary","#1a1a1a"),o=F("--color-border-soft","rgba(0,0,0,.12)"),e=document.createElement("div");e.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+p,"color:"+l,"border:1px solid "+o,"border-left:3px solid "+w,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+w+";flex:0 0 auto",d.innerHTML=C(S);var a=document.createElement("span");a.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",a.textContent=E;var r=document.createElement("span");r.hidden=!0,r.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",e.appendChild(d),e.appendChild(a),e.appendChild(r),L.appendChild(e),m(L),requestAnimationFrame(function(){e.style.opacity="1",e.style.transform="translateX(0)"});var s={key:R,el:e,countEl:r,count:1,timer:null,remaining:y,startedAt:A()};f[R]=s,M(s,y),e.addEventListener("mouseenter",function(){D(s)}),e.addEventListener("mouseleave",function(){x(s)}),e.addEventListener("focusin",function(){D(s)}),e.addEventListener("focusout",function(){x(s)})}}window.showToast=P})()});var et=ge(()=>{(function(){"use strict";var b="admin-details-open-state";function h(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function y(S){try{localStorage.setItem(b,JSON.stringify(S))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(S){return S==null?"":String(S).replace(/[&<>"']/g,function(L){return f[L]})}function j(){var S=document.querySelector("script[nonce]");return S&&S.nonce||""}function F(S,L){var R=j();return"<style"+(S?' id="'+A(S)+'"':"")+(R?' nonce="'+A(R)+'"':"")+">"+(L||"")+"</style>"}var C='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],M=null;function D(S){if(!S)return!1;for(var L=S,R=null;L&&L!==document.documentElement;R=L,L=L.parentElement)if(L.style&&L.style.display==="none"||L.tagName==="DETAILS"&&!L.open&&!(R&&R.tagName==="SUMMARY"))return!1;return!!(S.offsetParent||S.getClientRects().length)}function x(){var S=document.hidden;m.forEach(function(L){var R=typeof L.el=="function"?L.el():L.el,$=!S&&D(R);if($&&!L.timer){if(L.immediate!==!1)try{L.tick()}catch{}L.timer=setInterval(L.tick,L.intervalMs)}else!$&&L.timer&&(clearInterval(L.timer),L.timer=0)})}function k(S){var L={el:S.el,intervalMs:S.intervalMs,tick:S.tick,immediate:S.immediate,timer:0};return m.push(L),M||(M=new MutationObserver(function(){x()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",x),document.addEventListener("visibilitychange",x),document.addEventListener("admin-panel-rendered",x)),x(),function(){L.timer&&clearInterval(L.timer);var $=m.indexOf(L);$!==-1&&m.splice($,1)}}function P(S){let L=document.createElement("textarea");L.value=S,L.setAttribute("readonly",""),L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();let R=!1;try{R=!!document.execCommand("copy")}catch{R=!1}return document.body.removeChild(L),R}function E(S,L){let R=p=>window.ServerI18n?window.ServerI18n.t(p):p,$=p=>(window.showToast&&window.showToast(p?L||R("sohCopied"):R("sohCopyFailed"),p),p);if(!S)return Promise.resolve($(!1));let w=navigator.clipboard;return w&&typeof w.writeText=="function"?w.writeText(S).then(()=>$(!0),()=>$(P(S))):Promise.resolve($(P(S)))}window.AdminUtils={copyText:E,DETAILS_STATE_KEY:b,loadDetailsState:h,saveDetailsState:y,escapeHtml:A,cspNonce:j,styleTag:F,closeIcon:C,pollWhileVisible:k}})()});var tt=ge(()=>{(function(){"use strict";function b(h,y,f,A){let j=h.querySelector("[data-route-breadcrumb]");if(!j)return;let F=Array.from(h.querySelectorAll(".admin-dash-nav-row[data-route]")),C=F.find(L=>L.dataset.route===y)||F.find(L=>L.dataset.route===f);if(!C){j.replaceChildren(),j.hidden=!0;return}let m="",M=C.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){m=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let x=(C.querySelector("[data-i18n]")||C.querySelector("span:nth-child(2)")||C).textContent.trim(),k=A?h.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=k?(k.querySelector(".admin-tabs-btn-label")||k).textContent.trim():"",E=[m===x?"":m,x,P].filter(Boolean),S=document.createDocumentFragment();E.forEach((L,R)=>{if(R){let p=document.createElement("span");p.className="admin-dash-breadcrumb-sep",p.setAttribute("aria-hidden","true"),p.textContent="\u203A",S.appendChild(p)}let $=document.createElement("span"),w=R===E.length-1;$.className="admin-dash-breadcrumb-item"+(w?" is-current":""),w&&$.setAttribute("aria-current","page"),$.textContent=L,S.appendChild($)}),j.replaceChildren(S),j.hidden=E.length===0}window.AdminBreadcrumb={render:b}})()});var nt=ge(()=>{(function(b){"use strict";let h={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function y(k){return Array.isArray(k.sections)?k.sections:k.section?[k.section]:[]}function f(k){return!!h[k]}function A(k){return h[k]||null}let j={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(k,P){let E=h[k];if(!E||!P)return null;let S=E.tabs.find(L=>L.folds&&L.folds[P]);return S?{tab:S.slug,section:S.folds[P]}:null}function C(k,P){let E=h[k];if(!E)return null;let S=w=>E.tabs.some(p=>p.slug===w),L=F(k,P);if(L)return L.tab;let R=j[k]?.[P];if(R&&S(R))return R;if(P&&S(P))return P;let $=b.AdminRouter?.tabMemory?.get?.(k);return $&&S($)?$:E.defaultTab}function m(k,P,E){let S=h[k];if(!S)return null;let L=document.createElement("div");return L.className="admin-tabs-strip",L.dataset.nav=k,L.setAttribute("role","tablist"),L.setAttribute("aria-label",k+" tabs"),S.tabs.forEach(R=>{let $=document.createElement("button");$.type="button",$.className="admin-tabs-btn"+(R.slug===P?" is-active":""),$.dataset.nav=k,$.dataset.tab=R.slug,$.setAttribute("role","tab"),$.setAttribute("aria-selected",R.slug===P?"true":"false");let w=document.createElement("span");w.className="admin-tabs-btn-label",w.textContent=R.labelKey?ServerI18n.t(R.labelKey):R.label,$.appendChild(w);let p=document.createElement("span");p.className="admin-tabs-btn-count",p.dataset.tabCount=R.slug,p.textContent=M[k]&&M[k][R.slug]?M[k][R.slug]:"",$.appendChild(p),$.addEventListener("click",()=>{typeof E?.onSelect=="function"&&E.onSelect(R.slug)}),L.appendChild($)}),L}let M={};function D(k,P,E){if(!h[k])return;M[k]=M[k]||{},M[k][P]=E==null?"":String(E);let S=document.querySelector('.admin-tabs-strip[data-nav="'+k+'"] [data-tab-count="'+P+'"]');S&&(S.textContent=M[k][P])}function x(k,P,E){let S=h[k];!S||!E||S.tabs.forEach(L=>{let R=L.slug===P,$=new Map;y(L).forEach(w=>{let p=E.querySelector("#"+w);if(!p)return;p.style.display=R?"":"none";let l=$.get(p.parentElement);R&&L.folds&&l&&l.nextElementSibling!==p&&l.after(p),$.set(p.parentElement,p)})})}b.AdminTabs={hasTabsFor:f,getConfig:A,foldFor:F,resolveActiveTab:C,renderTabStrip:m,applyTabSectionVisibility:x,setTabCount:D}})(window)});var at=ge(()=>{(function(b,h){"use strict";let y="data-quick-action-host",f="admin-quick-action-bar";function A(M){if(M?.host instanceof HTMLElement)return M.host;let D=h.querySelector(".admin-dash-main");if(!D)return h.body;let x=D.querySelector(`[${y}]`);if(!x){x=h.createElement("div"),x.setAttribute(y,"");let k=D.querySelector(".admin-dash-topbar"),E=D.querySelector("[data-admin-tabs-host]")||k;E&&E.parentNode?E.insertAdjacentElement("afterend",x):D.prepend(x)}return x}function j(M,D){typeof b.showToast=="function"&&b.showToast(M,D!==!1)}function F({label:M,undoLabel:D,onUndo:x,windowMs:k}){let P=A(),E=P.querySelector("."+f);E&&E.remove();let S=h.createElement("div");S.className=f,S.setAttribute("role","status"),S.setAttribute("aria-live","polite");let L=h.createElement("span");L.className=f+"-text",L.textContent="\u2713 "+M,S.appendChild(L);let R=h.createElement("button");R.type="button",R.className=f+"-undo",R.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),S.appendChild(R);let $=()=>{S.classList.add("is-leaving"),setTimeout(()=>S.remove(),200)},w=setTimeout($,k||5e3);return R.addEventListener("click",async()=>{clearTimeout(w),R.disabled=!0,R.textContent=ServerI18n.t("qaUndoing");try{await x(),j(ServerI18n.t("qaUndone"),!0)}catch(p){j(ServerI18n.t("qaUndoFailed",{msg:p?.message||String(p)}),!1)}finally{$()}}),P.appendChild(S),requestAnimationFrame(()=>S.classList.add("is-entering")),S}function C(M){if(!M||typeof M!="object")return;let D=M.label||ServerI18n.t("qaDone");M.toast!==!1&&j(D,!0),M.undo&&typeof M.undo.run=="function"&&F({label:D,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function m(){h.querySelectorAll("."+f).forEach(M=>M.remove())}b.AdminQuickAction={fire:C,dismissAll:m}})(window,document)});var it=ge(()=>{(function(){"use strict";let b="admin-hud-modal-root",h=null,y=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function A(){let m=document.getElementById(b);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function j(m){let M=document.getElementById(b);if(M&&M.remove(),h&&(h(m),h=null),document.removeEventListener("keydown",F),y&&typeof y.focus=="function")try{y.focus()}catch{}y=null}function F(m){if(m.key==="Escape"){m.preventDefault(),j(!1);return}if(m.key==="Tab"){let M=A();if(!M.length){m.preventDefault();return}let D=M[0],x=M[M.length-1],k=document.activeElement;m.shiftKey?(k===D||!M.includes(k))&&(m.preventDefault(),x.focus()):(k===x||!M.includes(k))&&(m.preventDefault(),D.focus())}}function C(m){return new Promise(M=>{h&&j(!1),h=M,y=document.activeElement;let{icon:D="\u26A0",title:x=ServerI18n.t("hudConfirmTitle"),subtitle:k="",severity:P="warn",body:E="",titleText:S,bodyText:L,confirmLabel:R=ServerI18n.t("hudConfirmLabel"),cancelLabel:$=ServerI18n.t("cancel"),width:w=480}=m||{},p=document.createElement("div");p.id=b,p.className=`admin-hud-modal admin-hud-modal--${P}`,p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-hud-modal-title");let l=k?`<div class="admin-hud-modal__subtitle">${k}</div>`:"",o=typeof E=="string"?E:"",e=typeof E!="string"&&E&&E.nodeType;if(p.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${w}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${x}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${$}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${R}</button>
          </div>
        </div>`,S!=null){let a=p.querySelector(".admin-hud-modal__title");a&&(a.textContent=String(S))}if(L!=null){let a=p.querySelector("[data-modal-body]");a&&(a.textContent=String(L))}if(e){let a=p.querySelector("[data-modal-body]");a.innerHTML="",a.appendChild(E)}p.addEventListener("click",function(a){let r=a.target.closest("[data-modal-action]");r&&(a.stopPropagation(),j(r.dataset.modalAction==="confirm"))}),document.body.appendChild(p),document.addEventListener("keydown",F);let d=P==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{p.querySelector(`.admin-hud-modal__btn--${d}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:C}})()});var st=ge(()=>{(function(){"use strict";var b=8,h=30;function y(P,E){return window.ServerI18n?window.ServerI18n.t(P,E):P}function f(P,E){return P?P.length>E?P.slice(0,E)+"\u2026":P:""}function A(P){return y(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function j(P,E){return P==="keyword"?f(E,h):E.slice(0,b)}async function F(P,E,S){if(!E)return{ok:!1,error:"empty-value"};try{var L={type:P==="keyword"?"keyword":"fingerprint",value:E};S&&(L.reason=S);var R=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});return R.ok?{ok:!0}:{ok:!1,error:"HTTP "+R.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}async function C(P,E,S){if(!P)return{ok:!1,error:"empty-fingerprint"};var L=parseInt(E||0,10)||0;try{var R=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:L,reason:S||"",kind:"ban"})});return R.ok?{ok:!0}:{ok:!1,error:"HTTP "+R.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}async function m(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var E=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return E.ok?{ok:!0}:{ok:!1,error:"HTTP "+E.status}}catch(S){return{ok:!1,error:S&&S.message||"network"}}}function M(P,E){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:y("lfBlockTitle"),subtitle:y("cfmSubBlockFuture"),severity:"danger",bodyText:y("blockConfirm").replace("{label}",A(P)).replace("{display}",j(P,E)),confirmLabel:y("lfBlockTitle")}):(window.showToast&&window.showToast(y("blockFailed"),!1),Promise.resolve(!1))}function D(P,E,S){window.showToast&&window.showToast(P?y(E,S||{}):y("blockFailed"),!!P)}async function x(P,E){if(!P||(E=E||{},!E.skipConfirm&&!await M("keyword",P)))return!1;var S=await F("keyword",P);return D(S.ok,"blockFallback",{label:A("keyword"),display:j("keyword",P)}),S.ok}async function k(P,E){if(!P||(E=E||{},!E.skipConfirm&&!await M("fingerprint",P)))return!1;var S=await F("fingerprint",P,E.reason);return D(S.ok,"blockFallback",{label:A("fingerprint"),display:j("fingerprint",P)}),S.ok}window.AdminModeration={callBlock:F,banFingerprint:C,recall:m,blockKeyword:x,blockFingerprint:k}})()});var ot=ge(()=>{(function(){"use strict";function h(C){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",C.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),C}function y(C,m){let M=document.createElement("div");if(M.className="admin-skel "+(C||""),m)for(let D in m)M.style[D]=m[D];return M}function f({rows:C=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{M.appendChild(y("admin-skel-bar",{width:D+"px",height:"10px"}))}),m.appendChild(M);for(let D=0;D<C;D++){let x=document.createElement("div");x.className="admin-skel-list__row",x.appendChild(y("admin-skel-circle",{width:"24px",height:"24px"}));let k=document.createElement("div");k.className="admin-skel-list__col",k.appendChild(y("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),k.appendChild(y("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),x.appendChild(k),x.appendChild(y("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(x)}return h(m)}function A({cols:C=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${C}, 1fr)`;for(let M=0;M<C;M++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(y("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(y("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(y("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(y("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(D)}return h(m)}function j(){let C=document.createElement("div");C.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(y("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",m.appendChild(M),m.appendChild(y("admin-skel-bar",{width:"80px",height:"10px"})),C.appendChild(m);let D=document.createElement("div");D.className="admin-skel-chart__body";let x=document.createElement("div");x.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>x.appendChild(y("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(x);let k=document.createElement("div");return k.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(E=>k.appendChild(y("admin-skel-bar admin-skel-chart__bar",{height:E+"%"}))),D.appendChild(k),C.appendChild(D),h(C)}function F(C,m){let M={listRows:f,statsTiles:A,chart:j}[C];return M?M(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:A,chart:j,html:F}})()});var rt=ge(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},h={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function y(A){let{icon:j="\xB7",title:F="",desc:C="",accent:m=b.cyan,ctaAccent:M,actionLabel:D,action:x,extra:k}=A||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),M&&P.style.setProperty("--admin-empty-cta",M);let E=document.createElement("div");if(E.className="admin-empty__icon",E.textContent=j,P.appendChild(E),F){let S=document.createElement("div");S.className="admin-empty__title",S.textContent=F,P.appendChild(S)}if(C){let S=document.createElement("div");S.className="admin-empty__desc",S.textContent=C,P.appendChild(S)}if(D){let S=document.createElement("button");S.type="button",S.className="admin-empty__btn",S.textContent=D,typeof x=="function"&&S.addEventListener("click",x),P.appendChild(S)}if(k){let S=document.createElement("div");S.className="admin-empty__extra",typeof k=="string"?S.innerHTML=k:S.appendChild(k),P.appendChild(S)}return P}function f(A){let j=h[A];if(!j)return y({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},j,{title:j.titleKey?ServerI18n.t(j.titleKey):j.title,desc:j.descKey?ServerI18n.t(j.descKey):j.desc,actionLabel:j.actionLabelKey?ServerI18n.t(j.actionLabelKey):j.actionLabel});return y(F)}window.AdminEmpty={render:f,renderCustom:y,PRESETS:h}})()});var dt=ge(()=>{(function(){"use strict";var b=8;function h(F){return F?String(F).slice(0,b):""}function y(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var C=F.fingerprint||F.fp||F.hash||"",m=F.clientIp||F.client_ip||F.ip||"",M=F.nickname||F.nick||"";return{nickname:String(M||""),fp:String(C||""),ip:String(m||"")}}function f(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var C=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",C).then(function(m){var M=Array.from(new Uint8Array(m));return M.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function A(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var C=document.getElementById("sec-fingerprints");if(C&&!C.open&&(C.open=!0),C)try{C.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(F).then(function(m){if(m)var M=0,D=setInterval(function(){M+=1;var x=document.querySelector('[data-fp-hash="'+m+'"]');if(x){clearInterval(D),x.classList.add("admin-identity-flash"),setTimeout(function(){x.classList.remove("admin-identity-flash")},2e3);try{x.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(D)},250)})}function j(F){F=F||{};var C=F.nickname||"",m=F.fp||"",M=F.ip||"",D=!!F.compact,x=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,k=typeof F.onFpClick=="function"?F.onFpClick:A,P=document.createElement("span");P.className="admin-identity-row";var E;if(x?(E=document.createElement("button"),E.type="button",E.className="admin-identity-nick is-clickable",E.addEventListener("click",function(p){p.stopPropagation(),x(C)})):(E=document.createElement("span"),E.className="admin-identity-nick"),C)E.textContent="@"+C;else{var S="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var L=ServerI18n.t("anonymousPlaceholder");L&&L!=="anonymousPlaceholder"&&(S=L)}}catch{}E.textContent="@"+S,E.classList.add("is-guest")}if(C&&(E.title=C),P.appendChild(E),m){var R;if(k?(R=document.createElement("button"),R.type="button",R.className="admin-identity-fp is-clickable",R.addEventListener("click",function(p){p.stopPropagation(),k(m)})):(R=document.createElement("span"),R.className="admin-identity-fp"),m==="new"){var $=document.createElement("span");$.className="admin-identity-dot",R.appendChild($),R.appendChild(document.createTextNode("fp:new"))}else R.textContent="fp:"+h(m);R.title=m,P.appendChild(R)}if(M&&!D){var w=document.createElement("span");w.className="admin-identity-ip",w.textContent=M,w.title=M,P.appendChild(w)}return P}window.AdminIdentity={render:j,parse:y,focusFingerprint:A,hashFp:f,FP_DISPLAY_LEN:b}})()});var lt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function h(d,a){return window.csrfFetch(d,a)}function y(d,a){return window.showToast(d,a)}let f="default",A=[],j={};function F(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function C(){F();try{let d=await h("/admin/themes");if(!d.ok)return;let a=await d.json();f=a.active||"default",A=a.themes||[],j=a.overrides||{},P(A,f),L()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var m="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function D(d,a){var r=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(r)?r:a}function x(d){var a=d.styles||{},r=["color:"+D(a.color,"#ffffff")];if(a.textStroke){var s=Math.max(0,Math.min(6,Number(a.strokeWidth)||0));r.push("-webkit-text-stroke:"+s+"px "+D(a.strokeColor,"#000000")),r.push("paint-order:stroke fill")}if(a.textShadow){var t=Math.max(0,Math.min(40,Number(a.shadowBlur)||0));r.push("text-shadow:0 0 "+t+"px "+D(a.color,"#ffffff"))}var c=d.font&&d.font.family;return c&&/^[\w\s-]{1,40}$/.test(c)&&r.push("font-family:'"+c+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&r.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),r.join(";")}function k(d){var a=d.bg&&d.bg.gradient;return a&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(a).trim())?"background:"+String(a).trim():""}function P(d,a){let r=document.getElementById("themesList");if(r){if(r.innerHTML="",d.length===0){r.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(s=>{let t=s.name===a,c=b(ServerI18n.t("theme_"+s.name)!=="theme_"+s.name?ServerI18n.t("theme_"+s.name):s.label||s.name),g=document.createElement("div");g.className=`theme-pack-card${t?" is-active":""}`,g.innerHTML=`
        <div class="theme-pack-name">${c}</div>
        <div class="theme-pack-sample" style="${b(k(s))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b(x(s))}">
            <span class="theme-pack-sample-nick">${b(m)}</span>
            ${b(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${s.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(s.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${t?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(s.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,r.appendChild(g)}),r.querySelectorAll(".theme-delete-btn").forEach(s=>{s.addEventListener("click",async()=>{let t=s.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let g=await h("/admin/themes/"+encodeURIComponent(t),{method:"DELETE"});if(!g.ok)throw new Error("HTTP "+g.status);y(ServerI18n.t("themeDeleted"),!0),C()}catch{y(ServerI18n.t("themesDeleteFailed"),!1)}})}),r.querySelectorAll(".theme-activate-btn").forEach(s=>{s.addEventListener("click",async()=>{let t=s.dataset.theme;try{let c=await h("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});if(c.ok)y(ServerI18n.t("themeActivated"),!0),f=t,P(d,t),L();else{let g=await c.json().catch(()=>({}));y(g.error||ServerI18n.t("setThemeFailed"),!1)}}catch{y(ServerI18n.t("setThemeFailed"),!1)}})})}}function E(){return A.find(d=>d.name===f)||null}function S(d,a){let r=j[f]||{};if(r[d])return r[d];let s=a&&a.styles||{};return d==="stroke"?s.textStroke?Number(s.strokeWidth)>=3?"thick":"thin":"none":s.textShadow?Number(s.shadowBlur)>=10?"strong":"soft":"none"}function L(){let d=document.getElementById("themeDetail"),a=document.getElementById("themeDetailLabel");if(!d||!a)return;let r=E();if(!r)return;let s=ServerI18n.t("theme_"+r.name)!=="theme_"+r.name?ServerI18n.t("theme_"+r.name):r.label||r.name;a.textContent=ServerI18n.t("themeDetailGroup",{name:s}),["stroke","shadow"].forEach(c=>{let g=S(c,r);d.querySelectorAll(`[data-theme-seg="${c}"] [data-theme-opt]`).forEach(i=>{let n=i.getAttribute("data-theme-opt")===g;i.classList.toggle("is-active",n),i.setAttribute("aria-pressed",n?"true":"false")})});let t=d.querySelector('[data-theme-ov="color"]');if(t){let c=D((r.styles||{}).color,"#ffffff");t.value=/^#[0-9a-fA-F]{6}$/.test(c)?c:"#ffffff"}$(r),w(r)}var R=null;async function $(d){let a=document.getElementById("themeOvFont");if(!a)return;if(!R)try{let t=await fetch("/fonts",{credentials:"same-origin"});R=t.ok?(await t.json()).fonts||[]:[]}catch{R=[]}let s=(j[f]||{}).font_family||"";a.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+R.map(t=>{let c=String(t.name||t);return`<option value="${b(c)}"${c===s?" selected":""}>${b(c)}</option>`}).join("")}function w(d){let a=document.querySelector("[data-theme-preview-line]");a&&a.setAttribute("style",x(d))}async function p(d){try{let a=await h("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!a.ok)throw new Error("HTTP "+a.status);y(ServerI18n.t("themeDetailSaved"),!0),await C()}catch{y(ServerI18n.t("themeDetailSaveFailed"),!1)}}function l(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",a=>{let r=a.target.closest("[data-theme-opt]");if(!r)return;let s=r.closest("[data-theme-seg]");s&&p({[s.getAttribute("data-theme-seg")]:r.getAttribute("data-theme-opt")})}),d.addEventListener("change",a=>{let r=a.target.closest("[data-theme-ov]");r&&p({[r.getAttribute("data-theme-ov")]:r.value})}))}function o(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let a=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!a||!a.trim()))try{let r=await h("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:a.trim(),base:f})});if(!r.ok)throw new Error("HTTP "+r.status);y(ServerI18n.t("themeCreated"),!0),C()}catch{y(ServerI18n.t("themesNewFailed"),!1)}})}function e(){C(),l(),o();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await h("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(y(ServerI18n.t("themesReloaded")),C()):y(ServerI18n.t("themesReloadFailed"),!1)}catch{y(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:e}})()});var ct=ge(()=>{(function(){"use strict";function b(_,B){return window.csrfFetch(_,B)}function h(_,B){return window.showToast(_,B)}var y=window.ServerI18n;function f(_,B){return window.AdminUtils.styleTag(_,B)}let A=null;function j(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(B=>!B.hasAttribute("disabled")&&B.getAttribute("aria-hidden")!=="true"):[]}function F(_){let B=document.getElementById("effectEditModal");if(!B||B.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),C();return}if(_.key!=="Tab")return;let N=j();if(N.length===0){_.preventDefault();return}let U=N[0],O=N[N.length-1],G=document.activeElement;_.shiftKey&&G===U?(_.preventDefault(),O.focus()):!_.shiftKey&&G===O&&(_.preventDefault(),U.focus())}function C(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",F),A&&(A.focus(),A=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!m[_]}};let M=new Map,D=new Map;function x(_){if(!_||!_.styleId||!_.keyframes)return;let B="dme-user-"+_.styleId;if(document.getElementById(B))return;let N=document.createElement("style");N.id=B,N.textContent=_.keyframes,document.head.appendChild(N)}async function k(_){if(M.has(_))return M.get(_);if(D.has(_))return D.get(_);let B=(async()=>{try{let N=await b(`/admin/effects/${encodeURIComponent(_)}/content`);if(!N.ok)throw new Error("content fetch failed");let U=await N.json(),O=U&&U.content||"";if(!O)throw new Error("empty content");let G=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:O,params:{}})});if(!G.ok)throw new Error("preview failed");let z=await G.json();if(!z||!z.animation)throw new Error("no animation");return x(z),M.set(_,z),z}catch{return M.set(_,"failed"),null}finally{D.delete(_)}})();return D.set(_,B),B}function P(_,B){let N=_.querySelector(".effect-demo-text");if(!N)return;N.style.animation=B.animation||"",B.animationComposition&&(N.style.animationComposition=B.animationComposition),N.style.animationPlayState="paused";let U=S();U&&U.observe(_)}let E=null;function S(){return E||(typeof IntersectionObserver>"u"?null:(E=new IntersectionObserver(_=>{_.forEach(B=>{let N=B.target.querySelector(".effect-demo-text");N&&(N.style.animationPlayState=B.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),E))}let L=null;function R(_){let B=document.getElementById("effectPreviewParams");if(!B)return{};let N;try{let O=_.split(`
`),G=!1,z=0,ee=null,de=0,ae={};for(let J of O){let te=J.trimStart(),K=J.length-te.length;if(te.startsWith("params:")){G=!0,z=K;continue}if(!G||te===""||te.startsWith("#"))continue;if(K<=z&&!te.startsWith("params:")){G=!1;continue}let Y=te.match(/^([a-zA-Z0-9_]+):\s*$/);if(Y&&K===z+2){ee=Y[1],de=K,ae[ee]={};continue}if(ee&&K>de){let ne=te.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let ie=ne[1],re=ne[2].trim();if((re.startsWith('"')&&re.endsWith('"')||re.startsWith("'")&&re.endsWith("'"))&&(re=re.slice(1,-1)),ie!=="options"){let le=Number(re);ae[ee][ie]=isNaN(le)?re:le}}if(te.startsWith("- value:")){ae[ee].options||(ae[ee].options=[]);let ie=te.match(/^- value:\s*(.+)$/);if(ie){let re=ie[1].trim();(re.startsWith('"')&&re.endsWith('"')||re.startsWith("'")&&re.endsWith("'"))&&(re=re.slice(1,-1)),ae[ee].options.push({value:re,label:re})}}if(te.startsWith("label:")&&ae[ee].options&&ae[ee].options.length>0){let ie=te.match(/^label:\s*(.+)$/);if(ie){let re=ie[1].trim();(re.startsWith('"')&&re.endsWith('"')||re.startsWith("'")&&re.endsWith("'"))&&(re=re.slice(1,-1)),ae[ee].options[ae[ee].options.length-1].label=re}}}}N=ae}catch{N={}}B.innerHTML="";let U={};for(let[O,G]of Object.entries(N||{})){let z=G.type||"float",ee=document.createElement("div");ee.className="flex flex-col gap-0.5";let de=document.createElement("label");if(de.className="font-mono",de.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",de.textContent=`${O} (${z})`,ee.appendChild(de),z==="select"&&Array.isArray(G.options)){let ae=document.createElement("select");ae.className="admin-ui-select",ae.style.cssText="font-size:13px;padding:4px 8px",ae.dataset.paramKey=O;for(let J of G.options){let te=document.createElement("option");te.value=J.value,te.textContent=J.label||J.value,J.value===String(G.default)&&(te.selected=!0),ae.appendChild(te)}U[O]=String(G.default||G.options[0]&&G.options[0].value||""),ae.addEventListener("change",()=>{p()}),ee.appendChild(ae)}else{let ae=G.min!=null?G.min:0,J=G.max!=null?G.max:10,te=G.step!=null?G.step:z==="int"?1:.1,K=G.default!=null?G.default:ae,Y=document.createElement("div");Y.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=ae,ne.max=J,ne.step=te,ne.value=K,ne.dataset.paramKey=O,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let ie=document.createElement("span");ie.className="font-mono",ie.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",ie.textContent=String(K),ne.addEventListener("input",()=>{ie.textContent=ne.value,p()}),Y.appendChild(ne),Y.appendChild(ie),ee.appendChild(Y),U[O]=K}B.appendChild(ee)}return U}function $(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let B={};return _.querySelectorAll("[data-param-key]").forEach(N=>{B[N.dataset.paramKey]=N.type==="range"?Number(N.value):N.value}),B}async function w(){let _=document.getElementById("effectEditModalTextarea"),B=document.getElementById("effectPreviewText"),N=document.getElementById("effectPreviewStyle"),U=document.getElementById("effectPreviewError");if(!_||!B||!N)return;let O=_.value;if(!O||O===y.t("effectLoadContent")||O===y.t("effectsNetworkError"))return;let G=$();U?.classList.add("hidden");try{let z=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:O,params:G})}),ee=await z.json().catch(()=>({}));z.ok?(N.textContent=ee.keyframes||"",B.style.animation=ee.animation||"none",B.style.animationComposition=ee.animationComposition||""):(B.style.animation="none",N.textContent="",U&&(U.textContent=ee.error||y.t("previewFailed"),U.classList.remove("hidden")))}catch{B.style.animation="none",N.textContent="",U&&(U.textContent=y.t("effectsNetworkError"),U.classList.remove("hidden"))}}function p(){clearTimeout(L),L=setTimeout(()=>w(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",C),document.getElementById("effectEditModalCancel").addEventListener("click",C),document.getElementById("effectEditModal").addEventListener("click",O=>{O.target===O.currentTarget&&C()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let O=document.getElementById("effectEditModalTextarea");O&&(R(O.value),p())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{w()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let O=document.getElementById("effectEditModal"),G=document.getElementById("effectEditModalTextarea"),z=document.getElementById("effectEditModalSave"),ee=O?.dataset.effectName;if(!(!ee||!G)){z.disabled=!0;try{let de=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:ee,content:G.value})}),ae=await de.json().catch(()=>({}));de.ok?(h(ae.message||y.t("effectSaveFallback"),!0),C(),await d()):h(ae.error||y.t("saveFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}finally{z.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let O=document.getElementById("effectReloadBtn");O&&(O.disabled=!0);try{let G=await b("/admin/effects/reload",{method:"POST"}),z=await G.json().catch(()=>({}));G.ok?(h(z.message||y.t("effectsReloadFallback")),await d()):h(z.error||y.t("reloadFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}finally{O&&(O.disabled=!1)}});async function _(O){if(!O)return;let G=new FormData;G.append("effectfile",O);try{let z=await b("/admin/effects/upload",{method:"POST",body:G}),ee=await z.json().catch(()=>({}));z.ok?(h(ee.message||y.t("effectUploadFallback")),await d()):h(ee.error||y.t("uploadFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}}let B=document.getElementById("effectUploadInput"),N=B&&!B.dataset.uploadWired;N&&(B.dataset.uploadWired="1"),(N?B:null)?.addEventListener("change",async O=>{await _(O.target.files?.[0]),O.target.value=""});let U=document.getElementById("sec-effects-mgmt");if(U){let O=0,G=ae=>{ae.preventDefault(),O++,U.classList.add("is-drag")},z=ae=>{ae.preventDefault()},ee=ae=>{ae.preventDefault(),O=Math.max(0,O-1),O===0&&U.classList.remove("is-drag")},de=async ae=>{ae.preventDefault(),O=0,U.classList.remove("is-drag");let J=ae.dataTransfer?.files?.[0];if(J){if(!/\.(dme|dme\.zip)$/i.test(J.name)){h(y.t("fxToastBadExt"),!1);return}await _(J)}};U.addEventListener("dragenter",G),U.addEventListener("dragover",z),U.addEventListener("dragleave",ee),U.addEventListener("drop",de)}}function o(_){let B=(_||"").toLowerCase();return B.startsWith("glow")||B.includes("neon")?"GLOW":B.startsWith("shake")?"SHAKE":B.startsWith("wave")||B.startsWith("spin")||B.startsWith("bounce")||B.startsWith("zoom")||B.startsWith("fire")||B.includes("motion")?"MOTION":B.startsWith("rainbow")||B.startsWith("blink")||B.includes("color")?"COLOR":B.startsWith("type")||B.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function d(){let _=document.getElementById("effectsList");if(_)try{let B=await b("/admin/effects");if(!B.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsLoadFailed")+"</span>";return}let N=await B.json();e.all=N.effects||[],a(),s()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsNetworkError")+"</span>"}}function a(){let _=document.getElementById("effectsFilterRow");if(!_)return;let B={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(z=>{B[o(z.name)]+=1});let N=e.all.length,U=[["ALL",y.t("fxChipAll"),N],["GLOW",y.t("fxCatGlow"),B.GLOW],["MOTION",y.t("fxCatMotion"),B.MOTION],["COLOR",y.t("fxCatColor"),B.COLOR],["SHAKE",y.t("fxCatShake"),B.SHAKE],["TEXT",y.t("fxCatText"),B.TEXT]];B.MISC>0&&U.push(["MISC",y.t("fxCatMisc"),B.MISC]);let O=U.map(([z,ee,de])=>`<span class="hud-filter-chip ${e.filter===z?"is-active":""}" data-effect-filter="${z}">${ee} ${de}</span>`).join(""),G=_.querySelector("[data-toolbar-spacer]");G?(_.querySelectorAll("[data-effect-filter]").forEach(z=>z.remove()),G.insertAdjacentHTML("beforebegin",O)):_.innerHTML=O,_.querySelectorAll("[data-effect-filter]").forEach(z=>{z.addEventListener("click",()=>{e.filter=z.dataset.effectFilter,a(),s()})})}function r(_){let B=(z,ee)=>{let de=document.querySelector(z);de&&(de.textContent=ee==null?"\u2014":String(ee))},N=_.length,U=_.filter(z=>z.enabled!==!1).length,O=new Set(_.map(z=>o(z.name))),G=_.filter(z=>!m[z.name]).length;B("[data-eflib-total]",N),B("[data-eflib-active]",U),B("[data-eflib-cats]",O.size),B("[data-eflib-user]",G)}function s(){let _=document.getElementById("effectsList");if(!_)return;let B=e.all;r(B);let N=e.filter==="ALL"?B:B.filter(U=>o(U.name)===e.filter);if(!N.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(B.length?y.t("fxNoFilterMatch"):y.t("noEffectsLoaded"))+"</span>";return}E&&E.disconnect(),_.innerHTML="",N.forEach(U=>{let O=o(U.name),G=O==="GLOW"?"is-glow":O==="COLOR"?"is-color":O==="TEXT"?"is-text":"",z=m[U.name]||"",ee=!!z,de=document.createElement("div");de.className="hud-effect-card"+(e.selected===U.name?" is-selected":""),de.dataset.effectName=U.name,de.title=[U.description,`file: ${U.filename}`].filter(Boolean).join(`
`);var ae="effect_"+U.name;let J=y.t(ae)!==ae?y.t(ae):U.label||U.name,te=ee?"built-in":"user",K=z?`animation:${z};animation-play-state:paused;`:"";if(de.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${t(y.t("fxCat"+O.charAt(0)+O.slice(1).toLowerCase())||O)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${G}"><span class="effect-demo-text" style="${K}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${t(J)}</div>
          <div class="hud-effect-card-meta">${t(te)} \xB7 ${t(U.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${y.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${y.t("lbDelete")}</button>
        </div>
      `,_.appendChild(de),z){let ie=S();ie&&ie.observe(de)}else{let ie=M.get(U.name);ie&&ie!=="failed"?(x(ie),P(de,ie)):ie!=="failed"&&k(U.name).then(re=>{if(!re)return;let le=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(U.name)}"]`);le&&P(le,re)})}de.addEventListener("click",ie=>{ie.target.closest("[data-role]")||v(U)});let Y=de.querySelector('[data-role="edit"]'),ne=de.querySelector('[data-role="delete"]');Y.addEventListener("click",async()=>{let ie=document.getElementById("effectEditModal"),re=document.getElementById("effectEditModalTitle"),le=document.getElementById("effectEditModalFile"),ue=document.getElementById("effectEditModalTextarea"),Te=document.getElementById("effectEditModalSave");if(!ie)return;A=document.activeElement instanceof HTMLElement?document.activeElement:null,re.textContent=U.label||U.name,le.textContent=U.filename,ue.value=y.t("effectLoadContent"),ue.disabled=!0,Te.disabled=!0,ie.dataset.effectName=U.name,ie.classList.remove("hidden"),ie.classList.add("flex"),ie.addEventListener("keydown",F),ue.focus();let Se=document.getElementById("effectPreviewText"),Le=document.getElementById("effectPreviewStyle"),se=document.getElementById("effectPreviewError"),q=document.getElementById("effectPreviewParams");Se&&(Se.style.animation="none"),Le&&(Le.textContent=""),se&&se.classList.add("hidden"),q&&(q.innerHTML="");try{let W=await b(`/admin/effects/${encodeURIComponent(U.name)}/content`),Q=await W.json().catch(()=>({}));W.ok?(ue.value=Q.content||"",ue.disabled=!1,Te.disabled=!1,ue.focus(),R(ue.value),w()):(ue.value=Q.error||y.t("effectLoadContentFailed"),h(Q.error||y.t("effectLoadContentFailed"),!1))}catch{ue.value=y.t("effectsNetworkError"),h(y.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let ie=U.label||U.name;if(await window.HudConfirm?.open({icon:"\u2297",title:y.t("fxDeleteTitle"),subtitle:y.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${y.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${ie}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${y.t("fxDeleteWarn")}
                </div>`,confirmLabel:y.t("fxDeleteConfirm"),cancelLabel:y.t("cancel"),width:400}))try{let le=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U.name})}),ue=await le.json().catch(()=>({}));le.ok?(h(ue.message||y.t("effectDeleteFallback"),!0),await d()):h(ue.error||y.t("deleteFailed"),!1)}catch{h(y.t("effectsNetworkError"),!1)}})})}function t(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(_){let B={name:"",label:"",description:"",params:[]};if(!_)return B;let N=_.split(`
`),U="top",O=null;for(let G of N){let z=G.replace(/\r$/,""),ee=z.trimStart();if(!ee||ee.startsWith("#"))continue;let de=z.length-ee.length;if(de===0){if(U="top",O&&(B.params.push(O),O=null),ee==="params:"){U="params";continue}let ae=ee.match(/^([a-z_]+):\s*(.+)$/);ae&&(ae[1]==="name"?B.name=ae[2].trim():ae[1]==="label"?B.label=ae[2].trim():ae[1]==="description"&&(B.description=ae[2].trim()));continue}if(!(U!=="params"&&U!=="param-fields"&&U!=="options")){if(de===2&&(U==="params"||U==="param-fields"||U==="options")){O&&(B.params.push(O),O=null);let ae=ee.match(/^(\w+):$/);ae&&(O={key:ae[1]},U="param-fields");continue}if(de===4&&U==="param-fields"&&O){let ae=ee.match(/^(\w+):\s*(.*)$/);if(ae){let J=ae[1],te=ae[2].trim();J==="label"?O.label=te:J==="type"?O.type=te:J==="default"?O.default=te:J==="min"?O.min=parseFloat(te):J==="max"?O.max=parseFloat(te):J==="step"?O.step=parseFloat(te):J==="options"&&(O.options=[],U="options")}continue}if(U==="options"&&O&&de>=6){let ae=ee.match(/^-\s*value:\s*(.+)$/);ae&&(O.options||(O.options=[]),O.options.push({value:ae[1].trim(),label:ae[1].trim()}));let J=ee.match(/^label:\s*(.+)$/);J&&O.options&&O.options.length>0&&(O.options[O.options.length-1].label=J[1].trim())}}}return O&&B.params.push(O),B}function g(_,B){let N=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),U=N?N[1]:"",O=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),G=O?O[1].trim():"";for(let z of B.params){let ee=z.default!==void 0?z.default:"",de=new RegExp(`\\{${z.key}\\}`,"g");U=U.replace(de,ee),G=G.replace(de,ee)}return{keyframes:U,animation:G}}function i(_,B){if(_==="COLOR"){let N=B.find(U=>U.key==="duration");if(N&&N.default){let U=parseFloat(N.default);if(U<.25)return"crimson";if(U<.33)return"amber"}}if(_==="MOTION"){let N=B.find(U=>U.key==="height");if(N&&N.default){let U=parseFloat(N.default);if(U>30)return"crimson";if(U>24)return"amber"}}return"lime"}function n(_,B){return _==="COLOR"?B==="crimson"?y.t("fxHintFlashBlock"):B==="amber"?y.t("fxHintFlashWarn"):y.t("fxHintFlashOk"):B==="crimson"?y.t("fxHintAmpBlock"):B==="amber"?y.t("fxHintAmpWarn"):y.t("fxHintAmpOk")}function u(_,B){let N=c(B),{keyframes:U,animation:O}=g(B,N),G=o(_.name),z=N.params.filter(ue=>ue.type!=="select"),ee=N.params.filter(ue=>ue.type==="select"),de=i(G,N.params),ae=de==="crimson"?"BLOCK":de==="amber"?"WARN":"OK",J=n(G,de),te="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),K=U&&O?f(te,U):"",Y=O?`animation:${O};animation-play-state:running;`:"",ne=z.map(ue=>{let Te=parseFloat(ue.default)||0,Se=ue.min??0,Le=ue.max??100,se=Math.max(0,Math.min(100,(Te-Se)/(Le-Se)*100)),q=(ue.label||"").match(/\(([^)]+)\)$/),W=q?q[1]:"",Q=ue.label||ue.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${t(Q)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Te}<span style="color:var(--color-text-muted);margin-left:2px">${t(W)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${se}%"></div>
          <div class="fx-slider-knob" style="left:${se}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Se}${t(W)}</span><span>${Le}${t(W)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${y.t("fxNoNumericParams")}</span>`,ie=ee.map(ue=>{let Te=ue.options||[],Se=String(ue.default||""),Le=Te.map(se=>`<span class="fx-radio-btn${se.value===Se||se.label===Se?" is-active":""}">${t(se.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${t(ue.label||ue.key)}</div>
        <div class="fx-radio-group">${Le||"<span>\u2014</span>"}</div>
      </div>`}).join(""),re=["dark","light","photo"].map(ue=>{let Te=ue==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ue}">
        <span class="fx-preview-bg-label">${ue.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Y}color:${Te}">ABC</span>
      </div>`}).join(""),le=`${K}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${y.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ne}</div>
      </div>`;return ie&&(le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${ie}</div>
      </div>`),le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${re}</div>
      </div>
      <div class="fx-warn-box${de!=="lime"?" is-"+de:""}">
        <span class="fx-warn-chip${de!=="lime"?" is-"+de:""}">${ae}</span>
        <span class="fx-warn-text">${t(J)}</span>
      </div>
    </div>`,le}async function v(_){e.selected=_.name;let B=document.getElementById("effectsInspector"),N=document.getElementById("effectsInspectorTitle"),U=document.getElementById("effectsInspectorKicker"),O=document.getElementById("effectsInspectorBody");if(B){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),N&&(N.textContent=_.label||_.name),U&&(U.textContent="LOADING"),O&&(O.className="hud-inspector-body",O.textContent="# "+y.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(G=>{G.classList.toggle("is-selected",G.dataset.effectName===_.name)});try{let G=await b(`/admin/effects/${encodeURIComponent(_.name)}/content`),z=await G.json().catch(()=>({}));if(G.ok){let ee=z.content||"";O&&(O.className="hud-inspector-body has-param-panel",O.innerHTML=u(_,ee)),U&&(U.textContent=o(_.name))}else O&&(O.className="hud-inspector-body",O.textContent="# "+(z.error||y.t("effectLoadContentFailed"))),U&&(U.textContent="ERROR")}catch{O&&(O.className="hud-inspector-body",O.textContent="# "+y.t("effectsNetworkError")),U&&(U.textContent="NETWORK")}}}function I(){let _=document.getElementById("effectsInspectorReload"),B=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!e.selected){h(y.t("fxSelectFirst"),!1);return}let N=e.all.find(U=>U.name===e.selected);N&&await v(N)}),B?.addEventListener("click",()=>{if(!e.selected){h(y.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",I())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var ut=ge(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(h,y){b[h]||(b[h]=[]),b[h].push(y)},off:function(h,y){b[h]=(b[h]||[]).filter(function(f){return f!==y})},emit:function(h,y){(b[h]||[]).forEach(function(f){f(y)})}}})()});var mt=ge(()=>{(function(){"use strict";let b="sec-events",h="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},A={events:[],filterSev:"all",filterCat:"all",timer:0};function j($){let w=($.source||$.kind||"").toLowerCase(),p=($.action||"").toLowerCase();return w.includes("plugin")||p.includes("plugin")?"plugin":w.includes("webhook")||p.includes("webhook")?"webhook":w.includes("rate")||p.includes("rate")||p.includes("limit")?"rate":w.includes("filter")||p.includes("filter")?"filter":w.includes("overlay")||p.includes("overlay")||w==="broadcast"?"overlay":w.includes("backup")||p.includes("backup")?"backup":w.includes("msg")||w==="messaging"?"msg":w.includes("ws")||w==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,C=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m($){let w=($.action||$.kind||"").toLowerCase();return $.severity?$.severity:F.test(w)?"error":C.test(w)?"warn":"info"}function M($){let w=$.source||"system",p=$.action||$.kind||"";return p?`${w.toUpperCase()}_${p.toUpperCase()}`:w.toUpperCase()}function D($){if(!$)return"\u2014";let w=new Date($*1e3),p=l=>String(l).padStart(2,"0");return`${p(w.getHours())}:${p(w.getMinutes())}:${p(w.getSeconds())}`}function x($){if($.message)return $.message;let w=$.meta||{},p=[];if(w.from&&w.to)p.push(`${w.from} \u2192 ${w.to}`);else if(w.text_preview)p.push(`"${w.text_preview.slice(0,60)}"`);else if(Object.keys(w).length){let l=Object.keys(w).slice(0,3);for(let o of l)p.push(`${o}=${JSON.stringify(w[o]).slice(0,30)}`)}return p.length?p.join(" \xB7 "):`${$.source||"system"}.${$.action||$.kind||"?"}`}function k(){return`
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
      </div>`}function P(){let $=document.querySelector("[data-ev-rows]");if(!$)return;let w=A.events,p=w.filter(e=>!(A.filterSev!=="all"&&m(e)!==A.filterSev||A.filterCat!=="all"&&j(e)!==A.filterCat));p.length===0?($.innerHTML="",window.AdminEmpty?$.appendChild(window.AdminEmpty.render("events")):$.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):$.innerHTML=p.map(e=>{let d=m(e);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(D(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${f(M(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(x(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:w.length,info:0,warn:0,error:0};for(let e of w)l[m(e)]+=1;Object.keys(l).forEach(e=>{let d=document.querySelector(`[data-ev-cnt="${e}"]`);d&&(d.textContent=String(l[e]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${p.length} / ${w.length}`)}async function E(){try{let $=await fetch(h,{credentials:"same-origin"});if(!$.ok)return;let w=await $.json();A.events=Array.isArray(w.events)?w.events:[],P()}catch{}}function S(){let $=document.getElementById(b);$&&$.addEventListener("click",w=>{let p=w.target.closest("[data-ev-sev]");if(p){$.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===p)),A.filterSev=p.dataset.evSev,P();return}let l=w.target.closest("[data-ev-cat]");if(l){$.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===l)),A.filterCat=l.dataset.evCat,P();return}let o=w.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")E();else if(o.dataset.evAction==="export"){let e=new Blob([JSON.stringify(A.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(e),a=document.createElement("a");a.href=d,a.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function L(){let $=document.querySelector(".admin-dash-grid"),w=document.getElementById(b);if(!w)return;let l=($?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";w.style.display=l?"":"none",l?(E(),A.timer||(A.timer=setInterval(E,15e3))):A.timer&&(clearInterval(A.timer),A.timer=0)}function R(){let $=document.getElementById("settings-grid");!$||document.getElementById(b)||($.insertAdjacentHTML("beforeend",k()),S(),L())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&R(),L()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",L),document.addEventListener("admin-panel-rendered",()=>{R(),L()}),R()})})()});var pt=ge(()=>{(function(){"use strict";let b="sec-modqueue",h="/admin/modqueue/list",A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},j={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},C={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(p){let l=0,o=String(p||"");for(let e=0;e<o.length;e++)l=l*31+o.charCodeAt(e)&65535;return l%360}function M(p){if(!p.created_at_ms)return null;let l=(Date.now()-p.created_at_ms)/1e3,o=Math.max(0,j.autoRejectSec-l);return Math.ceil(o)}function D(p,l){let o=(p.severity||"low").toLowerCase(),e=F[o]||F.low,d=m(p.fp),a=String(p.fp||"\u2014").slice(0,8),r=p.nick||p.nickname||ServerI18n.t("audienceAnonymous"),s=(r||"?").slice(0,2).toUpperCase(),t=l==="pending"?M(p):null,c=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${A(p.id||"")}">${A(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${A(p.id||"")}">${A(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${A(p.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",g=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${A(ServerI18n.t("modqueueStampApproved"))} \xB7 ${A(p.resolved_by||"admin")} \xB7 ${A(p.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${p.auto_rejected?`${A(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${A(ServerI18n.t("modqueueAutoRejectTimeout",{n:j.autoRejectSec}))}`:`${A(ServerI18n.t("modqueueStampRejected"))} \xB7 ${A(p.resolved_by||"admin")} \xB7 ${A(p.resolved_ago||"")}`}
        </div>`:"",i=l==="pending"&&t!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${t}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${A(p.id||"")}" data-mq-sev="${A(o)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${A(s)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${A(r)}</div>
            <div class="admin-mq-card__fp">fp:${A(a)}</div>
          </div>
          <div class="admin-mq-card__time">${A(p.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${A(p.content||p.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${A(ServerI18n.t(C[o]||C.low))}</span>
          <span class="admin-mq-card__rule">${A(ServerI18n.t("modqueueRuleLabel"))}: ${A(p.rule||p.matched_rule||"?")}</span>
          ${i}
        </div>
        ${c}
        ${g}
      </div>`}function x(p,l,o){p&&(p.innerHTML=l.map(e=>D(e,o)).join(""))}function k(){let p=document.getElementById(b);if(!p)return;p.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),p.querySelector(".admin-mq__body").hidden=!0;let l=p.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let p=document.getElementById(b);if(!p)return;if(j.pending.length+j.approved.length+j.rejected.length===0){k();return}p.querySelector(".admin-mq__body").hidden=!1;let o=p.querySelector("[data-mq-empty]");o&&(o.hidden=!0),x(p.querySelector("[data-mq-col-pending]"),j.pending,"pending"),x(p.querySelector("[data-mq-col-approved]"),j.approved,"approved"),x(p.querySelector("[data-mq-col-rejected]"),j.rejected,"rejected");let e=(s,t)=>{p.querySelectorAll(s).forEach(c=>{c.textContent=String(t)})};e("[data-mq-cnt-pending]",j.pending.length),e("[data-mq-cnt-approved]",j.approved.length),e("[data-mq-cnt-rejected]",j.rejected.length);let d=j.pending.length===0;p.querySelectorAll("[data-mq-bulk]").forEach(s=>{s.disabled=d});let a=j.pending[j.pending.length-1],r=p.querySelector("[data-mq-oldest]");if(r){let s=a?M(a):null;r.textContent=s!=null?`oldest: ${s}s`:""}e("[data-mq-throughput]",j.stats.throughput.toFixed?j.stats.throughput.toFixed(1):j.stats.throughput),e("[data-mq-avg-review]",j.stats.avg_review_sec.toFixed?j.stats.avg_review_sec.toFixed(1):j.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(j.stats.auto_reject_pct||0)+"%")}async function E(){try{let p=await fetch(h,{credentials:"same-origin"});if(!p.ok){j.pending=[],j.approved=[],j.rejected=[],P();return}let l=await p.json();j.pending=Array.isArray(l.pending)?l.pending:[],j.approved=Array.isArray(l.approved)?l.approved:[],j.rejected=Array.isArray(l.rejected)?l.rejected:[],j.stats=l.stats||j.stats,typeof l.auto_reject_sec=="number"&&(j.autoRejectSec=l.auto_reject_sec),P()}catch{}}async function S(p,l,o){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,...o||{}})});if(e.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),E();else{let d=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function L(){return`
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
      </div>`}function R(){let p=document.getElementById(b);p&&p.addEventListener("click",async l=>{let o=l.target.closest("[data-mq-action]");if(o){let d=o.dataset.mqId,a=o.dataset.mqAction;(a==="approve"||a==="reject")&&S(d,a);return}let e=l.target.closest("[data-mq-bulk]");if(e){let d=e.dataset.mqBulk,a=d==="approve-low";if(!await window.HudConfirm?.open({icon:a?"\u2713":"\u2298",title:a?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:a?"warn":"danger",body:a?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:a?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let s=d.startsWith("approve")?"approve":"reject",t=d.endsWith("low")?"low":"high";S(null,"bulk",{action:s,severity:t})}})}function $(){let p=document.querySelector(".admin-dash-grid"),l=document.getElementById(b);if(!l)return;let o=(location.hash||"").replace("#/","").split("/"),e=p?.dataset.activeRoute||o[0]||"",d=p?.dataset.activeLeaf||o[1]||"",a=e==="modqueue"||e==="moderation"&&(d==="queue"||d===""||d==="moderation");l.style.display=a?"":"none",a?(j.timer||(E(),j.timer=setInterval(E,4e3)),j.countdownTimer||(j.countdownTimer=setInterval(P,1e3))):(j.timer&&(clearInterval(j.timer),j.timer=0),j.countdownTimer&&(clearInterval(j.countdownTimer),j.countdownTimer=0))}function w(){let p=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!p||document.getElementById(b)||(p.insertAdjacentHTML("beforeend",L()),R(),$())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&w(),$()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",$),document.addEventListener("admin-panel-rendered",()=>{w(),$()}),w()})})()});var vt=ge(()=>{(function(){"use strict";let b="sec-modbans-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(L){return String(L).replace(/[&<>"']/g,function(R){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[R]})},y=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},A={fingerprint:"FP",ip:"IP",nick:"NICK"},j={rows:[],refreshTimer:0};async function F(){try{let L=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!L.ok)return;let R=await L.json();j.rows=Array.isArray(R.bans)?R.bans:[],M()}catch{}}function C(L){if(!L||L<=0)return"\u2014";let R=Math.floor(L/86400),$=Math.floor(L%86400/3600),w=Math.floor(L%3600/60);return R>0?`${R}d ${$}h`:$>0?`${$}h ${w}m`:`${w}m`}function m(L){let R=L.target_kind;return R==="fingerprint"?`fp:${(L.target||"").slice(0,8)}`:R==="nick"?`@${L.target}`:L.target||"\u2014"}function M(){let L=document.querySelector("[data-modbans-list]");if(!L)return;let R=j.rows||[],$=document.querySelector("[data-modbans-count]");if($&&($.textContent=String(R.length)),R.length===0){L.innerHTML="";let w=window.AdminEmpty.render("blacklist");w.dataset.emptyKind="modbans",L.appendChild(w);return}L.innerHTML=R.map(function(w){let p=w.status==="expired",l=w.status==="permanent",o="admin-modbans-chip is-"+w.status,e=l?ServerI18n.t("modbansPermanent"):p?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:C(w.remaining_s)}),d=encodeURIComponent(w.target_kind)+"|"+encodeURIComponent(w.target);return`
        <div class="admin-modbans-row ${p?"is-expired":""}">
          <span class="admin-modbans-target">${h(m(w))}</span>
          <span class="admin-modbans-kind">${h(A[w.target_kind]||w.target_kind)}</span>
          <span class="admin-modbans-reason">${h(w.reason||"\u2014")}</span>
          <span class="${o}">
            ${w.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${h(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${p?"disabled":""}
            title="${p?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${p?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(L){let R=L||{},$=R.kind||"ban",w=window.HudConfirm,p=!R.target,l=R.target_kind||"fingerprint",o=R.target||"";return new Promise(function(e){if(!w){e(!1);return}let d=86400,a=!1,r=12,s="hour",t=document.createElement("div");t.className="admin-modbans-modal-body",t.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${h(f[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${h(A[l]||"?")} ${h(($||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${h(o?m({target_kind:l,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${p?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(ae){return`<button type="button" class="admin-modbans-modal-preset${ae===l?" is-active":""}"
                data-modbans-target-kind="${ae}">${h(f[ae])} ${h(A[ae])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${y.map(function(ae){return`<button type="button" class="${"admin-modbans-modal-preset"+(ae.defaultPick?" is-active":"")+(ae.permanent?" is-permanent":"")}" data-modbans-duration="${ae.val}">${ae.labelKey?ServerI18n.t(ae.labelKey):ae.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let c=t.querySelector("[data-modbans-custom-row]"),g=t.querySelector("[data-modbans-custom-input]"),i=t.querySelector("[data-modbans-custom-seconds]"),n=t.querySelector("[data-modbans-when]"),u=t.querySelector("[data-modbans-custom]"),v=t.querySelector("[data-modbans-target]"),I=t.querySelector("[data-modbans-target-icon]"),T=t.querySelector("[data-modbans-target-label]"),_=t.querySelector("[data-modbans-target-val]"),B=function(){I.textContent=f[l]||"?",T.textContent=`${A[l]||"?"} ${($||"ban").toUpperCase()}`,_.textContent=o?m({target_kind:l,target:o}):"\u2014"},N=function(){return Math.max(1,parseInt(g.value,10)||1)*(s==="day"?86400:3600)},U=function(){if(d===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let ae=new Date(Date.now()+d*1e3),J=K=>String(K).padStart(2,"0"),te=`${ae.getFullYear()}-${J(ae.getMonth()+1)}-${J(ae.getDate())} ${J(ae.getHours())}:${J(ae.getMinutes())}`;a?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:r,unit:ServerI18n.t(s==="day"?"modbansDay":"modbansHour"),stamp:te}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:C(d),stamp:te}),n.classList.remove("is-custom"))},O=function(){let ae=N();i.textContent=`= ${ae.toLocaleString()}s`,a&&(r=Math.max(1,parseInt(g.value,10)||1),d=ae,U())},G=t.querySelector("[data-modbans-presets]"),z=function(){a=!0,c.hidden=!1,G.querySelectorAll(".admin-modbans-modal-preset").forEach(function(ae){ae.classList.toggle("is-active",ae===u)}),O()},ee=function(ae){a=!1,c.hidden=!0,G.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===ae)})};B(),U(),O(),t.addEventListener("click",function(ae){let J=ae.target.closest("[data-modbans-target-kind]");if(J){l=J.dataset.modbansTargetKind,J.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Y){Y.classList.toggle("is-active",Y===J)}),B();return}if(ae.target.closest("[data-modbans-custom]")){z();return}let te=ae.target.closest("[data-modbans-custom-unit]");if(te){s=te.dataset.modbansCustomUnit||"hour",t.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Y){Y.classList.toggle("is-active",Y===te)}),O();return}let K=ae.target.closest("[data-modbans-duration]");K&&(d=parseInt(K.dataset.modbansDuration,10)||0,ee(K),U())}),g.addEventListener("input",O),v&&v.addEventListener("input",function(){o=v.value.trim(),B()});let de=t.querySelector("[data-modbans-reason]");w.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:t,width:480}).then(function(ae){if(!ae){e(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}d===0?w.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${h(m({target_kind:l,target:o}))}</b>`})}).then(function(J){if(!J){e(!1);return}x(l,o,d,de.value.trim(),$).then(e)}):x(l,o,d,de.value.trim(),$).then(e)})})}async function x(L,R,$,w,p){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:L,target:R,duration_s:$,reason:w||"",kind:p||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast($===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:C($)}),!0),F(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function k(L){let R=(L||"").split("|");if(R.length!==2)return;let $=decodeURIComponent(R[0]),w=decodeURIComponent(R[1]);try{let p=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:$,target:w})});if(!p.ok)throw new Error(`HTTP ${p.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(p){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:p.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function E(){let L=document.getElementById(b);if(!L||L.dataset.modbansBound==="1")return;L.dataset.modbansBound="1",L.addEventListener("click",function($){if($.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let w=$.target.closest("[data-modbans-unban]");w&&!w.disabled&&k(w.dataset.modbansUnban)});let R=L.querySelector("[data-modbans-list]");R&&window.AdminSkeletons&&!R.children.length&&R.appendChild(window.AdminSkeletons.listRows({rows:4}))}function S(){let L=document.getElementById("settings-grid");!L||document.getElementById(b)||(L.insertAdjacentHTML("beforeend",P()),E(),F(),j.refreshTimer||(j.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&S()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:m,formatRemaining:C}})()});var ft=ge(()=>{(function(){"use strict";let b="admin-mobile-nav-root",h=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],y=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},A=!1,j=0;function F(){return`
      <nav id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
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
      </nav>`}function C(){let E=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",S=f[E]||E;return h.some(L=>L.id===S)?S:y.some(L=>L.route===S)?"more":""}function m(){let E=document.getElementById(b);if(!E)return;let S=C();E.querySelectorAll("[data-mn-tab]").forEach(L=>{L.classList.toggle("is-active",L.dataset.mnTab===S),L.dataset.mnTab!=="more"&&L.setAttribute("aria-current",L.dataset.mnTab===S?"page":"false")})}function M(E){let S=document.getElementById(b);if(!S)return;A=E,S.dataset.overflow=E?"open":"closed",S.querySelector("[data-mn-overflow]").hidden=!E,S.querySelector("[data-mn-backdrop]").hidden=!E;let L=S.querySelector("[data-mn-tab='more']");L?.classList.toggle("is-active",E),L?.setAttribute("aria-expanded",E?"true":"false")}function D(E){if(E.target.closest("[data-mn-backdrop]")){M(!1);return}if(E.target.closest("[data-mn-logout]")){M(!1);let R=document.getElementById("logoutButton");R&&R.click();return}let S=E.target.closest("[data-mn-tab]");if(S){if(S.dataset.mnTab==="more"){M(!A);return}M(!1),S.dataset.mnRoute&&(location.hash="#/"+S.dataset.mnRoute);return}let L=E.target.closest("[data-mn-route]");L&&L.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+L.dataset.mnRoute)}async function x(){try{let E=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!E.ok)return;let S=await E.json(),L=Array.isArray(S.pending)?S.pending.length:0;j=L;let R=document.querySelector("[data-mn-badge='pending']");if(!R)return;R.textContent=String(L),R.hidden=!(L>0)}catch{}}function k(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let E=0;function S(){let L=document.activeElement,R=L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!R)}document.addEventListener("focusin",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(S)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(()=>setTimeout(S,50))})}function P(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{M(!1),m()}),m(),x(),setInterval(x,8e3),k())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var ht=ge(()=>{(function(){"use strict";var b="admin-session-expired-root",h=!1,y=null;function f(m,M){try{var D=window.ServerI18n&&ServerI18n.t(m);return D&&D!==m?D:M}catch{return M}}function A(){var m=document.getElementById(b);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),h=!1,y&&y.focus)try{y.focus()}catch{}y=null}function j(m){if(m.key==="Tab"){var M=document.getElementById(b);if(M){var D=M.querySelectorAll("input, button");if(D.length){var x=D[0],k=D[D.length-1];m.shiftKey&&document.activeElement===x?(m.preventDefault(),k.focus()):!m.shiftKey&&document.activeElement===k&&(m.preventDefault(),x.focus())}}}}function F(){if(!(h||document.getElementById(b))){h=!0,y=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=b,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",j,!0);var M=m.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),C(m,M)})}}function C(m,M){var D=m.querySelector("[data-sx-error]"),x=m.querySelector(".admin-sx__submit");D.hidden=!0,x.disabled=!0;var k=new URLSearchParams;k.set("password",M.value),m.querySelector("#admin-sx-remember").checked&&k.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:k.toString()}).then(function(E){return E.json().then(function(S){return{status:E.status,data:S}},function(){return{status:E.status,data:{}}})}).then(function(E){if(x.disabled=!1,E.status===200&&E.data&&E.data.ok){var S=document.querySelector('meta[name="csrf-token"]');S&&E.data.csrf_token&&(S.content=E.data.csrf_token),document.removeEventListener("keydown",j,!0),A(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}E.status===429?D.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,M.select()}).catch(function(){x.disabled=!1,D.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:A,isOpen:function(){return h}}})()});var gt=ge(()=>{(function(){"use strict";let b="admin-reconnect-banner",A=0,j=0,F="ok",C=0,m=5e3,M=!1,D=0;function x(o){if(F!==o){if(F=o,o==="ok"||o==="dismissed"){P(),o==="ok"&&(A=0,j=0,m=5e3);return}k()}}function k(){let o=document.getElementById(b);o||(o=document.createElement("div"),o.id=b,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=F;let e=F==="exhausted",d=e?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${d}`,o.innerHTML=e?S():E(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",R),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>x("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),D||(D=setInterval(L,250))}function P(){let o=document.getElementById(b);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function E(){let o=Math.max(0,(C-Date.now())/1e3),e=m/1e3,d=Math.min(100,(e-o)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:j})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${d}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function S(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function L(){if(F!=="reconnecting")return;let o=document.getElementById(b);if(!o)return;let e=Math.max(0,(C-Date.now())/1e3),d=m/1e3,a=Math.min(100,(d-e)/d*100),r=o.querySelector(".admin-rcb__progress-fill");r&&(r.style.width=a+"%")}function R(){j=0,A=0,m=5e3,x("reconnecting"),$()}async function $(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?w():o.status===401||o.status===403?x("ok"):p()}catch{p()}}function w(){x("ok")}function p(){if(A+=1,j+=1,j>=10){x("exhausted");return}A>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,j-1))),C=Date.now()+m,x("reconnecting"),setTimeout($,m))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{M=!1,w()});async function d(a){try{let r=await a;return r&&r.ok?F!=="ok"&&F!=="dismissed"&&w():r&&r.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):r&&r.status>=500&&p(),r}catch(r){throw p(),r}}typeof o=="function"&&(window.csrfFetch=function(){return d(o.apply(this,arguments))}),window.fetch=function(a,r){let s=typeof a=="string"?a:a&&a.url||"",t=e.call(this,a,r);return s.startsWith("/admin/")||s.indexOf("//")===-1&&s.startsWith("admin/")?d(t):t}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var bt=ge(()=>{(function(){"use strict";let b="admin-help-drawer-root",h={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},y=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function A(E){return E==null?"":String(E).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})}function j(){let E=(location.hash||"").replace("#/","").split("/")[0]||"";return h[E]?E:"_default"}function F(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function C(){let E=h[j()],S=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",L=E.titleKey?ServerI18n.t(E.titleKey):E.title,R=E.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${A(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),$=E.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${A(ServerI18n.t(E.fieldTipKey))}</span>
      </div>`:"",w=y.map(l=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${A(l.term)}</div>
        <div class="admin-help__glossary-def">${A(ServerI18n.t(l.defKey))}</div>
      </div>`).join(""),p=f.map(l=>`
      <a class="admin-help__resource" href="${A(l.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${A(l.label)}</span>
        <span class="admin-help__resource-url">${A(l.url.replace(/^https?:\/\//,""))}</span>
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
          <div class="admin-help__tips">${R}</div>
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
          <div class="admin-help__resources">${p}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${S?"v"+A(S):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let E=document.getElementById(b);E||(document.body.insertAdjacentHTML("beforeend",F()),E=document.getElementById(b),E.addEventListener("click",S=>{if(S.target.closest("[data-help-close]")){M();return}S.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),E.querySelector("[data-help-body]").innerHTML=C(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",x)}function M(){let E=document.getElementById(b);E&&E.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",x)}function D(){document.getElementById(b)?M():m()}function x(E){E.key==="Escape"&&(E.preventDefault(),M())}function k(E){let S=E.target;S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable)||E.key==="F1"&&(E.preventDefault(),D())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",k)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:M,toggle:D}})()});var yt=ge(()=>{(function(){"use strict";var b="admin-shortcuts-root",h=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function y(p,l){try{var o=window.ServerI18n&&ServerI18n.t(p);return o&&o!==p?o:l}catch{return l}}function f(p,l){window.showToast&&window.showToast(p,l!==!1)}function A(p,l){return(window.csrfFetch||window.fetch)(p,l||{})}function j(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function C(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function m(){var p="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(p=(await l.json()).state||"idle")}catch{}if(p==="idle"){location.hash="#/polls",f(y("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=p==="active";try{var e=await A(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);f(y(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(y("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(p){return h?p.metaKey:p.ctrlKey}var D=h?"\u2318":"Ctrl",x=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(p){return M(p)&&(p.key==="k"||p.key==="K")},run:j},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(p){return p.key==="?"&&!M(p)&&!p.altKey||p.key==="/"&&M(p)},run:function(){R()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(p){return M(p)&&p.shiftKey&&(p.key==="d"||p.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(p){return M(p)&&p.shiftKey&&p.key==="Backspace"},run:C},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(p){return!M(p)&&"jkJK".indexOf(p.key)>=0},run:function(p){window.AdminLiveFeed.moveFocus(p.key==="j"||p.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(p){return!M(p)&&(p.key==="b"||p.key==="B")},run:function(p){window.AdminLiveFeed.blockFocused(p.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(p){return!M(p)&&p.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(p){return!M(p)&&(p.key==="p"||p.key==="P")},run:m}];function k(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function P(p){return x.filter(function(l){return l.group===p}).map(function(l){var o=l.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+k(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+k(y(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function E(){var p=document.getElementById(b);p&&p.remove(),document.removeEventListener("keydown",S,!0)}function S(p){(p.key==="Escape"||p.key==="?")&&(p.preventDefault(),E())}function L(){if(!document.getElementById(b)){var p=document.createElement("div");p.id=b,p.className="admin-ks",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-ks-title"),p.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+k(y("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+k(y("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+k(y("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+k(y("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+k(y("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(p),p.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&E()}),document.addEventListener("keydown",S,!0);var l=p.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function R(){document.getElementById(b)?E():L()}function $(p){if(!p)return!1;if(p.isContentEditable)return!0;var l=(p.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function w(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(p){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=$(document.activeElement),o=0;o<x.length;o++){var e=x[o];if(e.group==="feed"){if(l||!w())continue}else if(l&&!M(p))continue;if(e.match(p)){p.preventDefault(),e.run(p);return}}}),window.AdminShortcuts={open:L,close:E,toggle:R,list:function(){return x.slice()}}})()});var wt=ge(()=>{(function(){"use strict";let b="theme-mode",h="admin-theme-mode",y="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let k=localStorage.getItem(h);(k==="light"||k==="dark"||k==="auto")&&(localStorage.setItem(b,k),localStorage.removeItem(h))}catch{}})();function A(){try{let x=localStorage.getItem(b);if(x==="light"||x==="dark"||x==="auto")return x}catch{}return"auto"}function j(x){try{localStorage.setItem(b,x)}catch{}}function F(x){let k=document.documentElement;x==="auto"?k.removeAttribute("data-theme"):k.setAttribute("data-theme",x),m(x)}function C(x){return x==="light"||x==="dark"?x:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(x){let k=document.getElementById(y);if(!k)return;let P=C(x);k.dataset.mode=x,k.dataset.effective=P,k.textContent=x==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",k.title=x==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):x==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let x=A(),k=x==="auto"?"light":x==="light"?"dark":"auto";j(k),F(k)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let x=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,k=document.getElementById(y);if(k){x&&k.classList.contains("admin-theme-toggle--floating")&&x.parentNode&&!x.parentNode.contains(k)&&(k.classList.remove("admin-theme-toggle--floating"),x.parentNode.insertBefore(k,x));return}let P=document.createElement("button");P.id=y,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",M),x&&x.parentNode?x.parentNode.insertBefore(P,x):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(A())}if(F(A()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{A()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",x=>{x.key===b&&F(A())}),window.AdminThemeSwitcher={getMode:A,setMode:function(x){x!=="auto"&&x!=="light"&&x!=="dark"||(j(x),F(x),m(x),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:x}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var St=ge(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},h=[];window.DanmuStore={get:function(y){return b[y]},set:function(y,f){b[y]=f,h.forEach(function(A){A(y,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+y,f)},subscribe:function(y){h.push(y)},getAll:function(){return Object.assign({},b)}}})()});var kt=ge(()=>{(function(){"use strict";let y=0;function f(){return window.__adminCtx||{}}function A(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function j(){let m=A();if(m&&typeof m.OpsContact<"u"){let M=m.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function F(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
    `;let D=m.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let E=document.getElementById("password");if(!E)return;let S=E.type==="text";E.type=S?"password":"text",D.textContent=ServerI18n.t(S?"adminLoginReveal":"adminLoginHide");try{E.focus()}catch{}});let x=document.getElementById("loginForm"),k=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(x){try{let E=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(E)&&E>0){y=E;let S=Math.max(0,5-y);if(P&&y>0&&S>0){P.hidden=!1;let L=document.getElementById("password");L&&L.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:S})}}}catch{}x.addEventListener("submit",async E=>{if(E.preventDefault(),!k)return;let S=new URLSearchParams;S.set("password",k.value),document.getElementById("admin-login-remember")?.checked&&S.set("remember","1");try{let L=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:S.toString(),redirect:"manual"});if(L.status===429){let R=L.headers.get("Retry-After"),$=parseInt(R,10),w=Number.isFinite($)&&$>0?$:300;C(w);return}y+=1;try{sessionStorage.setItem("admin_login_attempts",String(y))}catch{}window.location.reload()}catch(L){console.error("Login submit failed:",L),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function C(m){let M=document.getElementById("adminLoginCard");if(!M)return;let D=j(),x=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
    `;let k=document.getElementById("lockoutCountdown"),P=m,E=L=>{let R=Math.floor(L/60),$=L%60;return`${String(R).padStart(2,"0")}:${String($).padStart(2,"0")}`};k&&(k.textContent=E(P));let S=setInterval(()=>{P-=1,k&&(k.textContent=E(Math.max(0,P))),P<=0&&(clearInterval(S),y=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:C}})()});var It=ge(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function h(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):String(i??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function y(){try{let i=b();await i.prime();let n=i.get("history_stats"),[u,v,I]=await Promise.all([n?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!v.ok)return;let T=n||(u&&u.ok?await u.json():null);if(!T)return;let _=(await v.json()).distribution||[],B=T.stats&&T.stats.total||0,N=_.reduce((ae,J)=>J.count>(ae?.count||-1)?J:ae,null),U=N?N.count:0,O=N?(N.hour||"").slice(-5):"\u2014",G=document.querySelector('[data-kpi="messages"]');G&&(G.querySelector("[data-kpi-value]").textContent=B.toLocaleString());let z=document.querySelector('[data-kpi="peak"]');z&&(z.querySelector("[data-kpi-value]").textContent=U.toLocaleString());let ee=document.querySelector('[data-kpi="unique-fp"]');if(ee){let ae=new Set;(T.records||[]).forEach(J=>{let te=J.fingerprint||J.fp||J.user_fingerprint;te&&ae.add(te)}),ee.querySelector("[data-kpi-value]").textContent=ae.size.toLocaleString()}let de=document.querySelector('[data-kpi="session"]');if(de){let ae=I&&I.ok?await I.json():null,J=ae&&ae.status==="live",te=de.querySelector("[data-kpi-value]");if(J&&ae.started_at){let K=Math.max(0,Math.floor(Date.now()/1e3-ae.started_at)),Y=Math.floor(K/3600),ne=Math.floor(K%3600/60);te.textContent=Y>0?`${Y}:${String(ne).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`:`${ne}:${String(K%60).padStart(2,"0")}`}else te.textContent="\u2014"}}catch{}}function f(i,n){let u=document.querySelector(i);if(u){if(typeof n!="number"||n<=0){u.hidden=!0;return}u.hidden=!1,u.textContent=n>999?"999+":String(n)}}async function A(){try{let i=b();await i.prime();let n=i.get("blacklist"),u=i.get("widgets"),v=i.get("history_stats"),I=i.get("effects"),T=i.get("themes");f("[data-count-blacklist]",Array.isArray(n)?n.length:0),f("[data-count-widgets]",Array.isArray(u?.widgets)?u.widgets.length:0),f("[data-count-messages]",v?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(I?.effects)?I.effects.length:0),f("[data-count-themes]",Array.isArray(T?.themes)?T.themes.length:0);try{let _=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(_.ok){let B=await _.json();f("[data-count-plugins]",Array.isArray(B?.plugins)?B.plugins.length:0)}}catch{}}catch{}}async function j(){A(),F(),c()}async function F(){let i=document.querySelector("[data-dash-poll-body]"),n=document.querySelector("[data-dash-poll-timer]");if(i)try{let u=b();await u.prime();let I=u.get("metrics");if(!I){let U=await fetch("/admin/metrics",{credentials:"same-origin"});if(!U.ok)return;I=await U.json()}let T=I.poll_state;if(!T||!T.active||!Array.isArray(T.options)||T.options.length===0){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,n&&(n.textContent="");return}let _=T.options.reduce((U,O)=>U+(O.votes||0),0),B=["A","B","C","D","E","F"],N=0;if(T.options.forEach((U,O)=>{(U.votes||0)>(T.options[N].votes||0)&&(N=O)}),i.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${h(T.question||ServerI18n.t("dashPollRunning"))}</div>`+T.options.map((U,O)=>{let G=_?Math.round(U.votes/_*100):0;return`
            <div class="admin-dash-poll-opt ${O===N&&_>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${B[O]||String(O+1)}</span>
                <span class="label">${h(U.label||"")}</span>
                <span class="pct">${G}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:U.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${G}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:_})}</div>`,n){let U=T.remaining_seconds;n.textContent=typeof U=="number"&&U>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(U/60),ss:String(U%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function C(i){let n=i.visible!==!1,u=i.config&&i.config.title||i.type||"widget",v=(i.type||"widget").toUpperCase(),I=(i.position||"\u2014").toUpperCase(),T=n?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",_=i.created_at&&n?Math.max(0,Math.floor(Date.now()/1e3-i.created_at)):null,B=_!=null?(()=>{let N=Math.floor(_/86400),U=Math.floor(_%86400/3600),O=Math.floor(_%3600/60),G=_%60;return N>0?`UPTIME \xB7 ${N}d ${String(U).padStart(2,"0")}h`:U>0?`UPTIME \xB7 ${U}:${String(O).padStart(2,"0")}:${String(G).padStart(2,"0")}`:`UPTIME \xB7 ${O}:${String(G).padStart(2,"0")}`})():`STATUS \xB7 ${n?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${h(i.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${T}"></span>
          <span class="kind">${h(v)}</span>
          <span class="cat">${h(I)}</span>
        </div>
        <div class="title">${h(u)}</div>
        <div class="uptime">${B}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${n?" is-active":""}" data-widget-action="toggle" data-running="${n?"1":"0"}">${n?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(i,n){try{let u=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:i,config:{visible:!n}})});if(!u.ok)throw new Error("HTTP "+u.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(i){i.dataset.bound!=="1"&&(i.dataset.bound="1",i.addEventListener("click",n=>{let u=n.target.closest(".admin-dash-widget-tile");if(!u)return;let v=n.target.dataset.widgetAction,I=u.dataset.widgetId;if(!(!v||!I)){if(v==="toggle")m(I,n.target.dataset.running==="1");else if(v==="config"){let T=document.querySelector('[data-route="widgets"]');T&&T.click()}}}))}async function D(){let i=document.querySelector("[data-dash-widgets]");if(i)try{let n=b();await n.prime();let u=n.get("widgets");if(!u){let I=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!I.ok){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}u=await I.json()}let v=(u.widgets||u.items||[]).slice(0,4);if(v.length===0){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}i.innerHTML='<div class="admin-dash-widget-grid">'+v.map(C).join("")+"</div>",M(i)}catch{i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let x=null,k=null,P=null;function E(i){let n=Math.max(0,Math.floor(Date.now()/1e3-i)),u=Math.floor(n/3600),v=Math.floor(n%3600/60),I=n%60;return u>0?`${u}:${String(v).padStart(2,"0")}:${String(I).padStart(2,"0")}`:`${String(v).padStart(2,"0")}:${String(I).padStart(2,"0")}`}function S(i){let n=document.getElementById("admin-session-banner"),u=document.getElementById("sec-live-feed");if(u&&u.classList.toggle("is-idle-collapsed",!(i&&i.status==="live")),n&&n.classList.toggle("is-hero",!(i&&i.status==="live")),!n)return;if(x=i,!(i&&i.status==="live"))n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let I=i.started_at||Date.now()/1e3;n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${h(i.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${i.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,L(I)}n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",$))}function L(i){P&&clearInterval(P);let n=()=>{let u=document.querySelector("[data-sess-timer]");u&&(u.textContent=E(i))};n(),P=setInterval(n,1e3)}function R(){P&&(clearInterval(P),P=null)}async function $(i){let n=i.target.closest("[data-sess-action]");if(!n)return;let u=n.dataset.sessAction;if(u==="open"){let v=document.querySelector("[data-sess-name]"),I=(v?v.value:"").trim();if(!I){v&&v.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}n.disabled=!0;try{let T=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}),_=await T.json();if(!T.ok){window.showToast&&window.showToast(_.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:I}),!0),S(_.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{n.disabled=!1}}else if(u==="close"){let v=n.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",I=(B,N)=>`<option value="${B}"${B===v?" selected":""}>${N}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${I("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${I("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${I("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;n.disabled=!0;let _=document.getElementById("sessCloseBehavior")?.value;if(_&&_!==v)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:_})})}catch{}try{let B=await window.csrfFetch("/admin/session/close",{method:"POST"}),N=await B.json();if(!B.ok){window.showToast&&window.showToast(N.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),R(),S({status:"idle",viewer_end_behavior:N.archived&&N.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{n.disabled=!1}}}async function w(){try{let i=await fetch("/admin/session/current",{credentials:"same-origin"});if(!i.ok)return;let n=await i.json();S(n)}catch{}}function p(){w(),k&&clearInterval(k),k=setInterval(w,1e4)}function l(){k&&(clearInterval(k),k=null),R()}let o=null,e=null,d=0;function a(){let i=document.querySelector("[data-cockpit-overlay]"),n=window.AdminOverlayControl,u=e;if(!i||!n||!u)return;i.classList.toggle("is-on",u.live);let v=(_,B)=>{_.textContent!==B&&(_.textContent=B)},I=i.querySelector("[data-cockpit-status]");I&&v(I,n.statusText(u.live,u.count));let T=i.querySelector('[data-cockpit-action="toggle"]');T&&(T.dataset.i18n=n.toggleKey(u.live),v(T,ServerI18n.t(T.dataset.i18n)),T.dataset.next=u.live?"standby":"live")}async function r(){let i=document.querySelector("[data-cockpit-overlay]");if(!i||i.offsetParent===null)return;let n=d,u=null,v=null;try{let _=await fetch("/overlay_status",{credentials:"same-origin"});_.ok&&(u=(await _.json()).overlay_count||0)}catch{}try{let _=await fetch("/admin/broadcast/status",{credentials:"same-origin"});_.ok&&(v=(await _.json()).mode==="live")}catch{}let I=e;if(!I&&v===null)return;e={live:v!==null&&n===d?v:I?I.live:v,count:u!==null?u:I?I.count:0},a()}document.addEventListener("admin-overlay-state",i=>{let n=i&&i.detail||{};d+=1,e={live:!!n.live,count:typeof n.count=="number"?n.count:e?e.count:0},a()}),document.addEventListener("admin-route-applied",i=>{let n=i&&i.detail&&i.detail.route;n!=="live"&&n!=="dashboard"||(a(),r())});function s(){let i=document.querySelector("[data-cockpit-overlay]");if(!i||i.dataset.bound)return;i.dataset.bound="1",i.addEventListener("click",async v=>{let I=v.target.closest("[data-cockpit-action]");if(!I)return;let T=I.dataset.cockpitAction;if(T==="clear"){window.AdminOverlayControl?.clearScreen();return}T==="toggle"&&(await window.AdminOverlayControl?.setDisplay(I.dataset.next==="live"),r())});let n=i.parentElement&&i.parentElement.querySelector('[data-cockpit-action="idle-qr"]');n&&n.addEventListener("click",t);let u=i.parentElement&&i.parentElement.querySelector('[data-cockpit-action="poll"]');u&&u.addEventListener("click",()=>{location.hash="#/polls"})}async function t(){let i;try{let v=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!v.ok)throw new Error("HTTP "+v.status);i=await v.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let n=document.createElement("div");n.className="admin-soh-qr",n.innerHTML=i.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:i.url,body:n,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(i.url)}function c(){s(),r(),o&&clearInterval(o),o=setInterval(r,5e3)}function g(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:y,refreshSummary:j,refreshSidebarBadges:A,populatePoll:F,populateWidgets:D,refreshSessionBanner:w,startSessionPolling:p,stopSessionPolling:l,refreshCockpitOverlay:r,renderCockpitOverlay:a,startCockpitPolling:c,stopCockpitPolling:g}})()});var Tt=ge(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",h=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(H){return String(H).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},A={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},j=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],C=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(H,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let X=window.ServerI18n.t(H,V);if(X&&X!==H)return X}return H}let M={};function D(H){if(M[H]!=null)return M[H];let V=A[H];return V?V.step:1}function x(H,V){M[H]=Number(V)||D(H)}let k={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},P=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],E=["Color","FontFamily","Layout"];function S(H){return E.indexOf(H)!==-1}function L(H){let V=k.options&&k.options[H],X=V&&V[1];return Array.isArray(X)?X.slice():[]}function R(H){return H==="Color"?F.map(V=>V.replace(/^#/,"").toUpperCase()):H==="Layout"?C.map(V=>V.value):H==="FontFamily"?(k.fonts&&k.fonts.length?k.fonts:["NotoSansTC","Inter"]).map(X=>typeof X=="string"?X:X.name||X.family||"").filter(Boolean):[]}function $(H,V){return H==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function w(){return`
      <div id="${b}" class="lg:col-span-2" data-tpl="C">
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
      </div>`}let p=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:H=>`${Math.round(H)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:H=>`${H}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:H=>`${(+H).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:H=>`#${String(H||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:H=>H||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:H=>l(H),noRange:!0}];function l(H){let V=C.find(X=>X.value===H);return V?m(V.labelKey):H||"\u2014"}function o(H,V){let X=V[0]!==!1,Z=V[3],me=A[H.key];if(H.key==="Opacity"||H.key==="Speed"){let pe=me,fe=Z!=null?Number(Z):pe.min,ke=isFinite(fe)?fe:pe.min,Ie=(ke-pe.min)/Math.max(1e-6,pe.max-pe.min)*100;return`
        <div class="admin-dsp2-track" data-track="${H.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${H.key}" data-num-index="3"
            min="${pe.min}" max="${pe.max}" step="${D(H.key)}" value="${f(String(ke))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Ie.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Ie.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${H.key}"
              min="${pe.min}" max="${pe.max}" step="${D(H.key)}" value="${f(String(ke))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${pe.min}${pe.unit}</span><span>${pe.max}${pe.unit}</span>
            </div>
          </div>
        </div>`}if(H.key==="FontSize"){let pe=Number(Z);return`
        <div class="admin-dsp2-chiprow">
          ${j.map(fe=>`<button type="button" class="admin-dsp2-fchip ${pe===fe?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${fe}">${fe}</button>`).join("")}
        </div>`}if(H.key==="Color"){let pe="#"+String(Z||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${t().map(fe=>{let ke=fe.slice(1),Ie=fe.toUpperCase()===pe;return`<button type="button" class="admin-dsp2-swatch ${Ie?"is-active":""}"
              data-chip-key="Color" data-chip-value="${ke}"
              style="background:${fe}" aria-label="${fe}" aria-pressed="${Ie}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(pe)}" />
          </label>
        </div>
      `}if(H.key==="FontFamily"){let pe=(k.fonts&&k.fonts.length?k.fonts:["NotoSansTC","Inter"]).map(_e=>{let Ce=typeof _e=="string"?_e:_e.name||_e.family||"",Fe=typeof _e=="string"?_e:_e.label||_e.name||_e.family||"";return{value:Ce,label:Fe}}).filter(_e=>_e.value),fe=String(Z||""),ke=!!k.allowlistEdit.FontFamily,Ie=ke?k.allowlistEdit.FontFamily:new Set(L("FontFamily").map(_e=>$("FontFamily",_e))),we=!ke&&Ie.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${pe.map(_e=>{let Ce=_e.value===fe,Fe=ke?Ie.has(_e.value):we||Ie.has(_e.value),Ue=["admin-dsp2-tchip",Ce?"is-active":"",ke?"is-editing":"",Fe?"":"is-blocked"].filter(Boolean).join(" "),We=ke?`data-allow-key="FontFamily" data-allow-value="${f(_e.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(_e.value)}"`;return`<button type="button" class="${Ue}" ${We}
              aria-pressed="${Fe?"true":"false"}">
              ${ke?`<span class="admin-dsp2-allow-mark">${Fe?"\u2713 ":""}</span>`:""}${f(_e.label)}
            </button>`}).join("")}
        </div>
        ${e(H)}
      `}if(H.key==="Layout"){let pe=String(Z||"scroll"),fe=!!k.allowlistEdit.Layout,ke=fe?k.allowlistEdit.Layout:new Set(L("Layout").map(we=>$("Layout",we))),Ie=!fe&&ke.size===0;return`
        <div class="admin-dsp2-tiles">
          ${C.map(we=>{let _e=we.value===pe,Ce=fe?ke.has(we.value):Ie||ke.has(we.value),Fe=["admin-dsp2-tile",_e?"is-active":"",fe?"is-editing":"",Ce?"":"is-blocked"].filter(Boolean).join(" "),Ue=fe?`data-allow-key="Layout" data-allow-value="${we.value}"`:`data-chip-key="Layout" data-chip-value="${we.value}"`;return`<button type="button" class="${Fe}" ${Ue}
              aria-pressed="${Ce?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${we.icon}</span>
              <span class="admin-dsp2-tile-label">${m(we.labelKey)}</span>
              ${fe?`<span class="admin-dsp2-allow-mark">${Ce?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${e(H)}
      `}return""}function e(H){if(!S(H.key))return"";let V=!!k.allowlistEdit[H.key],X=L(H.key),Z=R(H.key).length||0,me=X.length>0?m("displayAllowSummaryPartial",{n:X.length,total:Z,label:d(H.key)}):m("displayAllowSummaryAll",{total:Z});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${H.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${H.key}">${f(me)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${H.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${H.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${H.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${H.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function d(H){return m(H==="Color"?"displayLabelColor":H==="FontFamily"?"displayLabelFontFamily":H==="Layout"?"displayLabelLayout":"displayLabelOption")}function a(H,V){if(H.noRange||!(V[0]!==!1))return"";let Z=A[H.key],me=V[1]!=null?V[1]:Z.min,pe=V[2]!=null?V[2]:Z.max,fe=D(H.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="1"
              min="${Z.min}" max="${Z.max}" step="${fe}" value="${f(String(me))}" />
            ${Z.unit?`<span>${Z.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="2"
              min="${Z.min}" max="${Z.max}" step="${fe}" value="${f(String(pe))}" />
            ${Z.unit?`<span>${Z.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${H.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(fe))}" />
            ${Z.unit?`<span>${Z.unit}</span>`:""}
          </div>
        </div>
      </div>`}function r(H,V){let X=V[0]!==!1,Z=V[3],me=H.fmt?H.fmt(Z):Z!=null?String(Z):"\u2014",pe=H.key==="Layout";return`
      <div class="admin-dsp2-row ${X?"is-on":"is-off"} ${pe?"is-last":""}" data-row-key="${H.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(m(H.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${X?"is-on":""}" data-value-badge>${f(me)}</div>
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
            ${f(m(X?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${o(H,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${a(H,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${X?"is-on":""}"
            data-toggle-key="${H.key}" aria-pressed="${X?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(m(X?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(X?m("displayToggleHintOn"):H.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function s(){let H=document.getElementById("dsp2-rows");if(H){if(!k.options){H.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}H.innerHTML=p.map(V=>r(V,k.options[V.key]||[!1,"","",""])).join(""),n(),I(),T()}}function t(){let H=L("Color");return[...new Set((H.length?H:F).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function c(H){let V=H.slice(1).match(/.{2}/g).map(X=>{let Z=parseInt(X,16)/255;return Z<=.04045?Z/12.92:((Z+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function g(H,V="error"){k.paletteNotice={message:H,type:V};let X=document.querySelector("[data-palette-feedback]");X&&(X.textContent=H,X.classList.toggle("is-error",V==="error"))}function i(H,V=!0){let X=document.querySelector("[data-admin-color-palette]"),Z=X?.querySelector("[data-palette-preview-text]");!Z||!/^#[0-9A-F]{6}$/i.test(H)||(k.palettePreview=H.toUpperCase(),Z.style.color=H,X.querySelector("[data-palette-preview-code]").textContent=H.toUpperCase(),X.querySelectorAll("[data-palette-preview]").forEach(me=>{let pe=me.dataset.palettePreview===H.toUpperCase();me.setAttribute("aria-pressed",String(pe)),me.closest(".admin-color-palette-chip").classList.toggle("is-previewing",pe)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(Z.getAnimations().forEach(me=>me.cancel()),Z.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function n(){let H=document.querySelector("[data-admin-color-palette]");if(!H||!k.options)return;let V=t(),X=(k.options.ViewerColorPicker||[!0])[0]!==!1,Z=k.paletteBusy?"disabled":"",me=k.palettePreview||V[0],pe=f(k.paletteDraft),fe=k.paletteNotice;H.setAttribute("aria-busy",String(k.paletteBusy)),H.innerHTML=`
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
            ${V.map((ke,Ie)=>`<div class="admin-color-palette-chip" style="--palette-color:${ke};--palette-ink:${c(ke)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${ke}"
                aria-label="${f(m("viewerPalettePreviewColor",{color:ke}))}" aria-pressed="${ke===me}" ${Z}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Ie+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${ke}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${ke}" ${V.length<=1?"disabled":Z}
                aria-label="${f(m("viewerPaletteRemove",{color:ke}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(k.paletteDraft)?pe:"#38bdf8"}" data-palette-picker ${Z} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${pe}"
                ${k.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${Z} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":Z}>
                <span aria-hidden="true">\uFF0B</span> ${f(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(m(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${fe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${fe?f(fe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${me}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${X?"checked":""} ${Z} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,i(me,!1)}async function u(H,V){if(k.paletteBusy)return;let X=document.querySelector("[data-admin-color-palette]");k.paletteBusy=!0,X.setAttribute("aria-busy","true"),X.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),X.querySelectorAll("input, button").forEach(pe=>{pe.disabled=!0});let Z=await N("Color",H);k.paletteBusy=!1,k.paletteNotice={type:Z?"success":"error",message:m(Z?"viewerPaletteSaved":"updateFailed")},Z&&V&&(k.palettePreview=V),n(),(V&&Z?X.querySelector(`[data-palette-preview="${V}"]`):X.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function v(H,V){let X=k.options&&k.options[H];return X&&X[3]!=null?X[3]:V}function I(){let H=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),X=document.querySelector("[data-preview-pill='2']"),Z=document.querySelector("[data-preview-foot-l]"),me=document.querySelector("[data-preview-foot-r]");if(!H||!V||!X||!k.options)return;let pe=Number(v("FontSize",32)),fe=Number(v("Opacity",92)),ke=Number(v("Speed",1)),Ie="#"+String(v("Color","7DD3FC")).replace(/^#/,""),we=String(v("FontFamily","NotoSansTC")),_e=String(v("Layout","scroll")),Ce=Math.min(pe,36),Fe=Math.max(0,Math.min(100,fe))/100;V.style.fontSize=Ce+"px",V.style.color=Ie,V.style.opacity=Fe.toFixed(2),V.style.fontFamily=we+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${Ie}66`,X.style.fontSize=(Ce*.78).toFixed(0)+"px",X.style.opacity=(Fe*.9).toFixed(2),X.style.fontFamily=we+", system-ui, sans-serif",H.dataset.layout=_e,Z&&(Z.textContent=`${l(_e)} \xB7 ${pe}px \xB7 ${(+ke).toFixed(1)}\xD7`),me&&(me.textContent=m("displayOpacitySuffix",{n:Math.round(fe)}))}function T(){let H=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!H||!k.options)return;let X=p.filter(Z=>(k.options[Z.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${X}/6 OPEN`),H.innerHTML=p.map(Z=>{let me=!!(k.options[Z.key]||[])[0];return`<div class="admin-dsp2-srow ${me?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(Z.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(me?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function _(H,V){try{let X=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:H,enabled:!!V})});if(!X.ok)throw new Error("toggle "+X.status);Array.isArray(k.options[H])||(k.options[H]=[!1,"","",""]),k.options[H][0]=!!V,s(),H==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let Z=H==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):H;window.showToast&&window.showToast(`${Z} ${m("settingsUpdated")}`,!0)}catch(X){console.warn("[admin-display] toggle failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1),await O(),s()}}async function B(H,V,X){try{let Z=X;if(H==="Color"){let pe=String(Z).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(pe)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}Z=pe.toUpperCase()}else if(H==="Opacity"||H==="FontSize"||H==="Speed"){Z=H==="Speed"?parseFloat(Z):parseInt(Z,10);let pe=A[H];if(Number.isNaN(Z)||pe&&(Z<pe.min||Z>pe.max)){window.showToast&&window.showToast(`${H} ${pe.min}\u2013${pe.max}`,!1);return}}let me=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:H,value:Z,index:V})});if(!me.ok)throw new Error("update "+me.status);Array.isArray(k.options[H])||(k.options[H]=[!1,"","",""]),k.options[H][V]=Z,U(H),I(),T()}catch(Z){console.warn("[admin-display] update failed:",Z),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function N(H,V){try{let X=await window.csrfFetch(`/admin/options/${encodeURIComponent(H)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!X.ok)throw new Error("allowlist "+X.status);let Z=await X.json().catch(()=>({}));Z&&Array.isArray(Z.option)?k.options[H]=Z.option:Array.isArray(k.options[H])&&(k.options[H][1]=V.slice()),U(H),I(),T();let me=R(H).length||0,pe=H==="Color"?m("settingsUpdated"):V.length>0?m("displayAllowlistToastPartial",{key:H,n:V.length,total:me}):m("displayAllowlistToastAll",{key:H});return H!=="Color"&&window.showToast&&window.showToast(pe,!0),!0}catch(X){return console.warn("[admin-display] allowlist failed:",X),H!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function U(H){let V=document.querySelector(`[data-row-key="${H}"]`);if(!V||!k.options)return;let X=p.find(fe=>fe.key===H);if(!X)return;let Z=k.options[H]||[!1,"","",""],me=Z[3],pe=V.querySelector("[data-value-badge]");if(pe&&(pe.textContent=X.fmt?X.fmt(me):me!=null?String(me):"\u2014"),S(H)){let fe=V.querySelector("[data-picker-host]");fe&&(fe.innerHTML=o(X,Z));return}if((H==="FontSize"||H==="Color"||H==="FontFamily"||H==="Layout")&&V.querySelectorAll(`[data-chip-key="${H}"]`).forEach(fe=>{let ke=fe.getAttribute("data-chip-value"),Ie=H==="Color"?String(me||"").replace(/^#/,"").toUpperCase():String(me??"");fe.classList.toggle("is-active",String(ke)===Ie)}),H==="Opacity"||H==="Speed"){let fe=A[H],ke=Number(me??fe.min),Ie=(ke-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,we=V.querySelector(".admin-dsp2-slider-fill"),_e=V.querySelector(".admin-dsp2-slider-thumb");we&&(we.style.width=Ie.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${Ie.toFixed(2)}% - 8px)`);let Ce=V.querySelector(".admin-dsp2-range");Ce&&document.activeElement!==Ce&&(Ce.value=String(ke));let Fe=V.querySelector(".admin-dsp2-num");Fe&&document.activeElement!==Fe&&(Fe.value=String(ke))}}async function O(){try{let H=await fetch("/get_settings",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);k.options=await H.json()}catch(H){console.warn("[admin-display] /get_settings failed:",H),k.options=k.options||{}}}async function G(){try{let H=await fetch("/fonts",{credentials:"same-origin"});if(!H.ok)throw new Error(H.status);let V=await H.json();k.fonts=Array.isArray(V)?V:V.fonts||[]}catch{k.fonts=["NotoSansTC","Inter"]}}async function z(){try{let H=await fetch("/admin/metrics",{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();k.viewerCount=V.ws_clients??0}catch{}}function ee(){de(),z(),k.metricsTimer=setInterval(z,5e3)}function de(){k.metricsTimer&&(clearInterval(k.metricsTimer),k.metricsTimer=null)}function ae(){if(!k.options){window.showToast&&window.showToast(m("loading"),!1);return}let H={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:k.options},V=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),X=URL.createObjectURL(V),Z=document.createElement("a");Z.href=X,Z.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(X),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function J(){if(!k.options)return;let H=document.getElementById("dsp2-deploy");H&&(H.disabled=!0,H.classList.add("is-pending"));try{for(let V of p){let X=k.options[V.key];Array.isArray(X)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!X[0]})})}await z(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${k.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{H&&(H.disabled=!1,H.classList.remove("is-pending"))}}async function te(){let H={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[X,Z]of Object.entries(H)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:X,enabled:!!Z[0]})});for(let me=1;me<=3;me++)me<3&&(X==="Color"||X==="FontFamily"||X==="Layout")||Z[me]===""||Z[me]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:X,value:Z[me],index:me})})}await O(),s(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(X){console.warn("[admin-display] revert failed:",X),window.showToast&&window.showToast(m("updateFailed"),!1)}}function K(){let H=document.getElementById(b);H&&(H.addEventListener("click",V=>{let X=V.target.closest("[data-palette-preview]");if(X){i(X.dataset.palettePreview);return}let Z=V.target.closest("[data-palette-remove]");if(Z){let Ie=t();if(Ie.length>1){let we=Ie.filter(_e=>_e!==Z.dataset.paletteRemove);u(we,we.includes(k.palettePreview)?k.palettePreview:we[0])}return}if(V.target.closest("[data-palette-add]")){let Ie=H.querySelector("[data-palette-hex]"),we=String(Ie.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){k.paletteInvalid=!0,Ie.setAttribute("aria-invalid","true"),g(m("colorFormatError"));return}let _e=t();if(_e.includes("#"+we)){g(m("viewerPaletteDuplicate"));return}_e.length<64&&u([..._e,"#"+we],"#"+we);return}let me=V.target.closest("[data-toggle-key]");if(me){let Ie=me.getAttribute("data-toggle-key"),we=!!(k.options[Ie]||[])[0];_(Ie,!we);return}let pe=V.target.closest("[data-allow-action]");if(pe){let Ie=pe.getAttribute("data-allow-action"),we=pe.getAttribute("data-allow-key");if(!we)return;if(Ie==="edit"){let _e=L(we).map(Ce=>$(we,Ce));_e.length?k.allowlistEdit[we]=new Set(_e):k.allowlistEdit[we]=new Set(R(we)),U(we);return}if(Ie==="cancel"){delete k.allowlistEdit[we],U(we);return}if(Ie==="clear"){k.allowlistEdit[we]=new Set,N(we,[]),delete k.allowlistEdit[we];return}if(Ie==="apply"){let _e=k.allowlistEdit[we]||new Set,Ce=R(we),Fe=Array.from(_e),Ue=Ce.length>0&&Fe.length===Ce.length&&Ce.every(We=>_e.has(We));N(we,Ue?[]:Fe),delete k.allowlistEdit[we];return}}let fe=V.target.closest("[data-allow-key][data-allow-value]");if(fe){let Ie=fe.getAttribute("data-allow-key"),we=fe.getAttribute("data-allow-value"),_e=k.allowlistEdit[Ie];if(_e){let Ce=$(Ie,we);_e.has(Ce)?_e.delete(Ce):_e.add(Ce),U(Ie)}return}let ke=V.target.closest("[data-chip-key]");if(ke){let Ie=ke.getAttribute("data-chip-key"),we=ke.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${Ie}"]`).forEach(_e=>_e.classList.remove("is-active")),ke.classList.add("is-active"),B(Ie,3,we);return}if(V.target&&V.target.id==="dsp2-revert"){te();return}if(V.target&&V.target.id==="dsp2-export"){ae();return}}),H.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),H.querySelector("[data-palette-add]")?.click())}),H.addEventListener("change",V=>{let X=V.target;if(!X)return;if(X.matches("[data-viewer-color-picker]")){X.disabled=!0,_("ViewerColorPicker",X.checked);return}let Z=X.getAttribute("data-num-key");if(!Z)return;let me=X.getAttribute("data-num-index");if(me==="step"){x(Z,X.value),U(Z);return}let pe=parseInt(me,10);if(Number.isNaN(pe))return;let fe=X.value;Z==="Color"&&(fe=String(fe).replace(/^#/,"").toUpperCase()),B(Z,pe,fe)}),H.addEventListener("input",V=>{let X=V.target;if(X){if(X.matches("[data-palette-picker]")){k.paletteDraft=X.value.toUpperCase(),k.paletteInvalid=!1;let Z=H.querySelector("[data-palette-hex]");Z.value=k.paletteDraft,Z.removeAttribute("aria-invalid"),g("","success"),i(k.paletteDraft);return}if(X.matches("[data-palette-hex]")){k.paletteDraft=X.value,k.paletteInvalid=!1;let Z=X.value.replace(/^#/,"");X.removeAttribute("aria-invalid"),g("","success"),/^[0-9a-fA-F]{6}$/.test(Z)&&(H.querySelector("[data-palette-picker]").value="#"+Z,i("#"+Z));return}if(X.classList&&X.classList.contains("admin-dsp2-range")){let Z=X.getAttribute("data-range-key"),me=A[Z],pe=Number(X.value),fe=(pe-me.min)/Math.max(1e-6,me.max-me.min)*100,ke=X.closest("[data-row-key]");if(ke){let Ie=ke.querySelector(".admin-dsp2-slider-fill"),we=ke.querySelector(".admin-dsp2-slider-thumb");Ie&&(Ie.style.width=fe.toFixed(2)+"%"),we&&(we.style.left=`calc(${fe.toFixed(2)}% - 8px)`);let _e=ke.querySelector(".admin-dsp2-num");_e&&(_e.value=String(pe))}Array.isArray(k.options[Z])&&(k.options[Z][3]=pe),I();return}if(X.classList&&X.classList.contains("admin-dsp2-num")){let Z=X.getAttribute("data-num-key"),me=parseInt(X.getAttribute("data-num-index"),10);if(Number.isNaN(me)||!Array.isArray(k.options[Z]))return;let pe=X.value;X.type==="number"&&(pe=Number(pe)),k.options[Z][me]=pe,I()}}}),H.addEventListener("change",V=>{let X=V.target;if(X&&X.classList&&X.classList.contains("admin-dsp2-range")){let Z=X.getAttribute("data-range-key");B(Z,3,X.value)}}),H.addEventListener("click",V=>{let X=V.target.closest("[data-dl-step]");if(X){let me=X.closest("[data-dl-stepper]");if(!me)return;let pe=me.getAttribute("data-dl-stepper"),ke=Number(ce[pe]??0)+Number(X.getAttribute("data-dl-step"));Ae(pe,ke);return}let Z=V.target.closest("[data-dl-opt]");if(Z){let me=Z.closest("[data-dl-seg]");if(!me)return;let pe=me.getAttribute("data-dl-seg"),fe=Z.getAttribute("data-dl-opt");Ae(pe,["safe_area","poll_vote_opacity"].indexOf(pe)!==-1?Number(fe):fe)}}),H.addEventListener("change",V=>{let X=V.target.closest("[data-dl-toggle]");if(X){Ae(X.getAttribute("data-dl-toggle"),X.checked);return}let Z=V.target.closest("[data-dl-range]");Z&&Ae(Z.getAttribute("data-dl-range"),Number(Z.value))}),H.addEventListener("input",V=>{let X=V.target.closest("[data-dl-range]");if(!X)return;let Z=X.getAttribute("data-dl-range"),me=H.querySelector(`[data-dl-value="${Z}"]`);me&&(me.textContent=X.value+"%")}),H.addEventListener("change",V=>{if(V.target.closest("[data-vi-toggle]")){Q({enabled:V.target.checked});return}if(V.target.closest("[data-vi-ext]")){let X=Array.from(H.querySelectorAll("[data-vi-ext]")).filter(Z=>Z.checked).map(Z=>Z.getAttribute("data-vi-ext"));Q({extensions:X});return}if(V.target.id==="viewer-images-hosts"){let X=V.target.value.split(/[\s,]+/).filter(Boolean);Q({hosts:X})}}))}let Y=null,ne=null,ie={},re=0,le="",ue=H=>(H&&H.hosts||[]).join(`
`);function Te(){return Object.assign({},Y||{},ne||{},ie)}function Se(){let H=document.getElementById(b);if(!H||!Y)return;let V=Te(),X=H.querySelector("[data-vi-toggle]");X&&(X.checked=!!V.enabled),Le(H,!!V.enabled);let Z=H.querySelector("#viewer-images-hosts"),me=ne&&"hosts"in ne||"hosts"in ie;Z&&!me&&document.activeElement!==Z&&Z.value===le&&(Z.value=ue(Y),le=Z.value);let pe=V.extensions||[];H.querySelectorAll("[data-vi-ext]").forEach(fe=>{fe.checked=pe.indexOf(fe.getAttribute("data-vi-ext"))!==-1})}function Le(H,V){H.querySelectorAll("[data-vi-row]").forEach(X=>{X.style.display=V?"":"none"})}async function se(H){try{let V=await H(),X=null;try{X=await V.json()}catch{X=null}return{ok:!!(V.ok&&X),body:X}}catch(V){return console.warn("[admin-display] viewer-images request failed:",V),{ok:!1,body:null}}}async function q(){let H=re,V=await se(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),X=!ne&&!Object.keys(ie).length;V.ok&&X&&H===re&&(Y=V.body,Se())}function W(H){let V=H&&H.code;return V==="invalid_host"?m("viErrInvalidHost",{host:String(H.detail||"")}):V==="too_many_hosts"?m("viErrTooManyHosts",{max:H.max}):m("updateFailed")}function Q(H){re+=1;let V=document.getElementById("viewer-images-hosts");if("hosts"in H&&V&&(le=V.value),"enabled"in H){let X=document.getElementById(b);X&&Le(X,!!H.enabled)}Object.assign(ie,H),ne||oe()}async function oe(){if(ne||!Object.keys(ie).length)return;let H=ie;ie={},ne=H;let V=await se(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}));if(ne=null,V.ok){Y=V.body,Se(),oe();return}let X=ie;ie={},window.showToast&&window.showToast(W(V.body),!1),("hosts"in H||"hosts"in X)&&(le=null),Se(),q()}let ce={};function ve(){let H=document.getElementById(b);H&&Object.entries(ce).forEach(([V,X])=>{let Z=H.querySelector(`[data-dl-value="${V}"]`);Z&&(Z.textContent=V==="max_tracks"?Number(X)===0?m("dlMaxTracksAuto"):String(X):String(X)+"%");let me=H.querySelector(`[data-dl-range="${V}"]`);me&&document.activeElement!==me&&(me.value=String(X));let pe=H.querySelector(`[data-dl-toggle="${V}"]`);pe&&(pe.checked=!!X);let fe=H.querySelector(`[data-dl-seg="${V}"]`);fe&&fe.querySelectorAll("[data-dl-opt]").forEach(ke=>{let Ie=ke.getAttribute("data-dl-opt")===String(X);ke.classList.toggle("is-active",Ie),ke.setAttribute("aria-pressed",Ie?"true":"false")})})}async function xe(){try{let H=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!H.ok)return;ce=await H.json(),ve()}catch(H){console.warn("[admin-display] display-layer fetch failed:",H)}}async function Ae(H,V){let X=ce[H];ce[H]=V,ve();try{let Z=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[H]:V})});if(!Z.ok)throw new Error("display-layer "+Z.status);ce=await Z.json(),ve()}catch(Z){ce[H]=X,ve(),console.warn("[admin-display] display-layer update failed:",Z),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ye(){h.forEach(H=>{let V=document.getElementById(H);V&&V.setAttribute("data-admin-ui-replaced","1")})}let he=null;function Ee(H,V){return H==="overlay"||V==="overlay"||H==="display"||V==="display"}function $e(H,V){return H==="viewer-config"||H==="viewer"||V==="viewer-config"||V==="viewer"}function De(H,V){if(!$e(H,V))return;let X=window.AdminTabs?.getConfig?.("viewer");if(!X)return;let Z=pe=>X.tabs.some(fe=>fe.slug===pe),me=Z(V)?V:null;if(!me&&window.AdminTabs.resolveActiveTab){let pe=window.AdminTabs.resolveActiveTab("viewer",null);Z(pe)&&(me=pe)}me&&(document.body.dataset.viewerConfigTab=me)}let Ne=!1,He=!1;async function Oe(){let H=document.getElementById("sec-viewer-config-limits");if(!H||Ne)return;Ne=!0;let V=(X,Z)=>{let me=H.querySelector(X);me&&(me.textContent=Z==null?"\u2014":String(Z))};try{let X=await fetch("/admin/metrics",{credentials:"same-origin"});if(!X.ok)return;let Z=await X.json(),me=Z.rate_limits&&Z.rate_limits.fire||{},pe=Z.rate_limits&&Z.rate_limits.totals||{},fe=Z.rate_limit_config&&Z.rate_limit_config.fire||{},ke=Math.max(1,(Z.server_time||0)-(Z.server_started_at||0));V("[data-vc-rate-fp]",fe.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",fe.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let Ie=(me.hits||0)/ke;V("[data-vc-avg-rate]",Ie.toFixed(2)+"/s"),V("[data-vc-throttled]",me.violations||0),V("[data-vc-blocked]",pe.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{Ne=!1}}let qe=null;function Re(H){let V=window.ServerI18n&&window.ServerI18n.currentLang;if(!V||V===qe)return;let X=qe===null;if(qe=V,X)return;let Z=H.querySelector("[data-dsp-fold]"),me=!!(Z&&Z.open),pe=document.createElement("div");pe.innerHTML=w(),H.replaceChildren(...pe.firstElementChild.childNodes);let fe=H.querySelector("[data-dsp-fold]");fe&&(fe.open=me),s(),ve(),le="",Se()}function Me(){let H=document.querySelector(".admin-dash-grid"),V=document.getElementById(b);if(!H||!V)return;Re(V);let X=H.dataset.activeRoute||"live",Z=H.dataset.activeLeaf||X;De(X,Z);let me=document.body.dataset.viewerConfigTab||"defaults",pe=$e(X,Z),fe=Ee(X,Z),ke=pe||fe,Ie=V.querySelector("[data-dsp-fold]");Ie&&V.dataset.dspMode!==(fe?"values":"audience")&&(Ie.open=!fe),V.dataset.dspMode=fe?"values":"audience",V.style.display=ke?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(_e=>{let Ce=document.getElementById(_e);Ce&&(Ce.style.display=pe?"":"none")});let we=document.getElementById("sec-viewer-config-info");we&&(we.style.display=pe?"":"none"),pe?He||(He=!0,Oe()):He=!1,Ee(X,Z)?k.metricsTimer||ee():de(),he=X}function Ge(){if(document.getElementById("sec-viewer-config-info"))return;let H=document.getElementById("settings-grid");if(!H)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let X=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],Z=document.createElement("div");Z.id="sec-viewer-config-fields",Z.className="admin-vc-fields-grid lg:col-span-2";let me=document.createElement("div");me.className="admin-vc-col-panel";let pe=document.createElement("div");pe.className="admin-vc-fields-head";let fe=X.filter(function(Pe){return Pe.on}).length,ke=X.length-fe;pe.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:X.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:fe,hidden:ke}))+"</span>",me.appendChild(pe);let Ie=document.createElement("div");Ie.className="admin-vc-fields-list",X.forEach(function(Pe){let ze=document.createElement("div");ze.className="admin-vc-field-row"+(Pe.blocked?" is-blocked":"");let Ye=document.createElement("span");Ye.className="admin-vc-field-dot"+(Pe.on?" is-on":""),ze.appendChild(Ye);let Qe=document.createElement("div");var Je="";Pe.pinned&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),Pe.blocked&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),Qe.innerHTML='<div class="admin-vc-field-label">'+f(Pe.k)+Je+'</div><div class="admin-vc-field-desc">'+f(Pe.desc)+"</div>",ze.appendChild(Qe);let Ke=document.createElement("button");if(Ke.type="button",Ke.className="admin-vc-toggle "+(Pe.on?"is-on":"is-off"),Ke.textContent=Pe.on?m("displayToggleShow"):m("displayToggleHide"),Pe.blocked||Pe.pinned)Ke.disabled=!0,Ke.className+=" disabled";else{var Ve=Pe.on;Ke.addEventListener("click",function(){Ve=!Ve,Ke.className="admin-vc-toggle "+(Ve?"is-on":"is-off"),Ke.textContent=m(Ve?"displayToggleShow":"displayToggleHide"),Ye.className="admin-vc-field-dot"+(Ve?" is-on":"")})}ze.appendChild(Ke),Ie.appendChild(ze)}),me.appendChild(Ie);let we=document.createElement("div");we.className="admin-vc-col-panel";var Ce=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(Pe,ze){return'<span class="admin-vc-swatch-dot" style="background:'+Pe+";border:"+(ze===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");we.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Ce+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",Z.appendChild(me),Z.appendChild(we);function Fe(Pe,ze,Ye,Qe,Je,Ke){let Ve=Ke?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+Pe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ve+'">'+Ye+'<span class="admin-vc-limit-row__unit">'+(Qe||"")+"</span></div>"+(Je?'<div class="admin-vc-limit-row__hint">'+Je+"</div>":"")+"</div>"}let Ue=document.createElement("div");Ue.id="sec-viewer-config-limits",Ue.className="admin-vc-limits-grid lg:col-span-2",Ue.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+Fe(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+Fe(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+Fe(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+Fe(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+Fe(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+Fe(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+Fe(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+Fe(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let We=document.getElementById("sec-viewer-theme");We&&We.parentNode===H?(H.insertBefore(V,We),H.insertBefore(Ue,We),H.insertBefore(Z,We)):(H.appendChild(V),H.appendChild(Ue),H.appendChild(Z)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Me()}async function Be(){let H=document.getElementById("settings-grid");if(!H||document.getElementById(b)){ye();return}H.insertAdjacentHTML("beforeend",w()),K(),ye(),Me(),k.options||await Promise.all([O(),G()]),xe(),q(),s()}function je(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?Be():ye(),Me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Me),document.addEventListener("admin-route-applied",Me),document.addEventListener("admin-panel-rendered",()=>{Be(),ye(),Ge(),Me()}),Be(),Ge()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je()})()});var _t=ge(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let J=document.querySelector('meta[name="csrf-token"]');return J&&J.content||""}let h=window.DANMU_CONFIG||{},y=h.session||{logged_in:!1},f=h.settingRanges||{};function A(J,te={}){let K={credentials:"same-origin",...te},Y=new Headers(te.headers||{});return Y.set("X-CSRF-Token",b()),K.headers=Y,fetch(J,K)}window.csrfFetch=A;let j=5e3,F={at:0,data:null,promise:null};function C(){return F.data&&Date.now()-F.at<j}function m(){return C()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(J=>J.ok?J.json():null).then(J=>(J&&(F.data=J,F.at=Date.now()),F.promise=null,J)).catch(()=>(F.promise=null,null))),F.promise)}function M(J){if(!C())return null;let te=F.data[J];return te&&typeof te=="object"&&"_error"in te?null:te}window.__danmuAdminBootstrap={prime:m,get:M},m();let D={},x=null,k=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let E=Object.create(null);Object.assign(E,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let S={_key:J=>"admin:tab:"+J,get(J){try{return sessionStorage.getItem(this._key(J))||null}catch{return null}},set(J,te){try{te?sessionStorage.setItem(this._key(J),te):sessionStorage.removeItem(this._key(J))}catch{}}};function L(J){let te=(J||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!te)return null;let K=te[1],Y=te[2]||null,ne=null;if(!Y){let ue=P[K];typeof ue=="string"?K=ue:ue&&typeof ue=="object"&&(K=ue.nav||K,ne=ue.tab||null)}let ie=E[K],re=K,le=null;if(typeof ie=="string"?re=ie:ie&&typeof ie=="object"&&(re=ie.nav||K,le=ie.tab||null),te[1]!==re&&(L._warned||(L._warned=new Set),!L._warned.has(te[1]))){L._warned.add(te[1]);try{console.info("[admin] legacy route #/"+te[1]+" \u2192 #/"+re+(Y||le||ne?"/"+(Y||le||ne):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:re,tab:Y||le||ne,raw:K}}function R(J,te){return te?"#/"+J+"/"+te:"#/"+J}let $={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function w(J,te,K){if(K=K||J,!U[J]){let le=P[J];if(typeof le=="string")J=le;else if(le&&typeof le=="object")le.nav&&(J=le.nav),!te&&le.tab&&(te=le.tab);else{let ue=E[J];typeof ue=="string"?J=ue:ue&&typeof ue=="object"&&(ue.nav&&(J=ue.nav),!te&&ue.tab&&(te=ue.tab))}}if(J==="system"&&te&&$[te]){let le=$[te];J=le.nav,te=le.tab||null,K=J}let Y=U[J]?J:"live",ne=window.AdminTabs,ie=ne?.hasTabsFor?.(Y)?ne.resolveActiveTab(Y,te):null,re=ie?ne.foldFor(Y,te):null;return{route:Y,tab:ie,rawName:K,fold:re?te:null,foldSection:re?re.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:E,tabMemory:S,parseHash:L,buildHash:R,resolve(J){let te=L(J);return te?w(te.nav,te.tab,J.match(/^#\/([\w-]+)/)[1]):null}});var p=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,o=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:M};async function e(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),y.logged_in&&N()}catch(J){console.error("Get settings failed:",J),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function d(J){return/^#[0-9A-Fa-f]{6}$/.test(J)}function a(J){return d(J)?J:/^[0-9A-Fa-f]{6}$/.test(J)?"#"+J:(J.startsWith("#")||(J="#"+J),d(J)?J:"#38bdf8")}function r(J,te){if(f[J]){let K=parseInt(te);if(isNaN(K)||K<f[J].min||K>f[J].max)return showToast(ServerI18n.t("settingRangeError",{key:J,min:f[J].min,max:f[J].max}),!1),!1}return!0}function s(J,te,K){if(!K||!Array.isArray(D[J]))return;let Y=D[J][te];J==="Color"&&typeof Y=="string"&&(Y=a(`#${Y}`)),Y!=null&&(K.value=String(Y))}let t={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-widgets"]}};function c(){Object.values(t).forEach(J=>{let te=document.getElementById(J.containerId);te&&J.orderedIds.forEach(K=>{let Y=document.getElementById(K);Y&&Y.parentElement!==te&&te.appendChild(Y)})})}function g(){x&&(x.disconnect(),x=null),c(),x=new MutationObserver(()=>{c()}),x.observe(u,{childList:!0,subtree:!0})}async function i(J,te,K,Y=null){try{if(J==="Color"){if(!d(te)){showToast(ServerI18n.t("colorFormatError"),!1),s(J,K,Y);return}te=te.replace("#","")}else if((J==="Speed"||J==="Opacity"||J==="FontSize")&&!r(J,te)){s(J,K,Y);return}(await A("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:J,value:te,index:K})})).ok?(Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][K]=te,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await e())}catch(ne){console.error("Error:",ne),showToast(`Update Error: ${ne.message}`,!1),await e()}}async function n(J,te){try{let K=await A("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J,enabled:te})}),Y=await K.json().catch(()=>({}));if(K.ok)Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][0]=te,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`),N();else{let ne=document.getElementById(`toggle-${J}`);ne&&(ne.checked=!te),showToast(Y.error||ServerI18n.t("updateFailed"),!1)}}catch(K){console.error("Error:",K);let Y=document.getElementById(`toggle-${J}`);Y&&(Y.checked=!te),showToast(`Update Error: ${K.message}`,!1)}}let u=document.getElementById("app-container"),v=document.getElementById("toast-container"),I=(J,te=500)=>"requestIdleCallback"in window?window.requestIdleCallback(J,{timeout:te}):setTimeout(J,te);async function T(){let J=parseInt(document.getElementById("historyHours")?.value||"24");try{let[te,K]=await Promise.all([fetch(`/admin/stats/hourly?hours=${J}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${J}&limit=10`,{credentials:"same-origin"})]);if(!te.ok||!K.ok)return;let Y=await te.json(),ne=await K.json(),ie=document.getElementById("statsDashboard");if(!ie)return;let re=Y.distribution||[],le=ne.topTexts||[],ue=Math.max(1,...re.map(q=>q.count)),Te=re.reduce((q,W)=>q+(W.count||0),0),Se=re.filter(q=>q.count>0).length,Le=re.map(q=>`<div class="chart-bar" style="height: ${Math.round(q.count/ue*100)}%" title="${o(q.hour)}: ${q.count}"><span class="chart-label">${o(q.hour.slice(-5,-3))}</span></div>`).join(""),se=le.map((q,W)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${W+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${o(q.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${q.count}</td></tr>`).join("");ie.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Te}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${Se}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${J}h window</span>
            </div>
            <div class="stats-chart">${Le||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${le.length?`<table class="w-full text-xs"><tbody>${se}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(te){console.error("Load stats error:",te)}}window._loadStats=T,window.csrfFetch=A,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=u,window.__adminCtx.getSettings=()=>D;function _(){u&&(u.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function B(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():_()}function N(){let J=p(),te=(Se,Le=!1)=>J[Se]!==void 0?J[Se]:Le,K=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Se=>Array.isArray(D[Se])&&D[Se][0]===!0).length,Y=D.Layout&&D.Layout[3]?o(String(D.Layout[3]).replace(/_/g," ")):"scroll",ne=D.FontFamily&&D.FontFamily[3]?o(String(D.FontFamily[3])):"NotoSansTC",ie=Se=>Se.map(Le=>`<span style="height:${Le*10}%;opacity:${.3+Le*.08}"></span>`).join(""),re=Y&&Y!=="off",le=window.location.port||(window.location.protocol==="https:"?"443":"80");u.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${re?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${o(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${o(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${o(re?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let ue=document.getElementById("settings-grid"),Te=D.Effects?D.Effects[0]!==!1:!0;ue.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${Te}">${Te?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${Te}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${Te?"checked":""} />
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
    `),I(de),G(),g(),I(ae),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),O(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Le=document.querySelector("[data-telem-bars]");if(!Le)return;let se=document.querySelector("[data-telem-status]"),q={cpu:100,mem:100,ws:100,rate:50};function W(ce,ve,xe,Ae,ye){let he=Le.querySelector(`[data-telem-fill="${ce}"]`),Ee=Le.querySelector(`[data-telem-value="${ce}"]`);he&&(he.style.width=Math.max(0,Math.min(100,ve))+"%",he.classList.toggle("is-warn",!Ae)),Ee&&(Ee.textContent=xe);let $e=Le.querySelector(`[data-telem-row="${ce}"]`);$e&&ye&&$e.setAttribute("title",ye)}function Q(ce,ve){if(!ve||ve<=0)return Math.round(ce)+" MB used";if(ve>=1024){let xe=(ce/1024).toFixed(1),Ae=(ve/1024).toFixed(1);return`${xe} / ${Ae} GB used`}return`${Math.round(ce)} / ${Math.round(ve)} MB used`}async function oe(){try{let ce=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ce.ok)return;let ve=await ce.json(),xe=ve.cpu_series||[],Ae=ve.mem_series||[],ye=ve.mem_mb_series||[],he=ve.ws_series||[],Ee=ve.rate_series||[],$e=Me=>Me.length?Me[Me.length-1]:0,De=Number($e(xe)||0),Ne=Number($e(Ae)||0),He=Number($e(ye)||0),Oe=Number(ve.mem_total_mb||0),qe=Number($e(he)||ve.ws_clients||0),Re=Number($e(Ee)||0)/60;if(W("cpu",De,`${De.toFixed(0)}%`,De<90),W("mem",Ne,`${Ne.toFixed(0)}%`,Ne<90,Q(He,Oe)),W("ws",qe/q.ws*100,String(qe),qe<100),W("rate",Re/q.rate*100,`${Re.toFixed(1)}/s`,Re<40),se){let Me=De>=90||Ne>=90||Re>=40;se.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",se.classList.toggle("is-warn",Me)}}catch{}}setTimeout(oe,4e3),setInterval(oe,5e3)})()}let U={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=U;function O(){let J=document.querySelector(".admin-dash-grid");if(!J)return;let te="dashboard",K=null;function Y(ye){return t.moderation.orderedIds.indexOf(ye)!==-1?"moderation-grid":t.assets.orderedIds.indexOf(ye)!==-1?"assets-grid":"settings-grid"}function ne(){let ye=J.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),he=J.querySelector("[data-route-note]"),Ee=J.querySelector("[data-route-action]"),$e=Ee?Array.prototype.slice.call(Ee.children):[],De=Be=>Be.querySelector(".admin-ui-page-actions")||$e.find(je=>je._adminHomeHead===Be)||null,Ne=(Be,je)=>{Ee&&($e.forEach(H=>{H!==Be&&(H._adminHomeHead?H._adminHomeHead.appendChild(H):H.remove())}),Be&&Be.parentNode!==Ee&&(Be._adminHomeHead=je,Ee.appendChild(Be)))};if(!ye){Ne(null,null);return}let He=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(te)),Oe=Array.prototype.slice.call(J.querySelectorAll(".admin-ui-page-head"));Oe.forEach(Be=>Be.classList.remove("is-merged-into-topbar"));let qe=(U[te]?.title||"").trim().replace(/\s+/g," "),Re=null,Me=null,Ge=null;if(Oe.forEach(Be=>{let je=Be.querySelector(".admin-ui-page-title"),H=je&&je.textContent.trim().replace(/\s+/g," ");if(H&&(He||H===ye||H===qe)){if(Be.offsetParent!==null){Re===null&&(Re=Be.querySelector(".admin-ui-page-note")?.innerHTML||"");let X=De(Be);X&&!Me&&(Me=X,Ge=Be)}Be.classList.add("is-merged-into-topbar")}}),Ne(Me,Ge),he){let Be=Re||"";he.innerHTML!==Be&&(he.innerHTML=Be),he.toggleAttribute("hidden",!Re)}}function ie(){let ye=U[te],he=new Set((ye.sections||[]).map(Y)),Ee=$e=>Array.from($e.children).some(De=>getComputedStyle(De).display!=="none");J.querySelectorAll(".admin-route-sections").forEach($e=>{if(!he.has($e.id)){$e.style.display="none";return}$e.style.display="",$e.style.display=Ee($e)?"":"none"})}let re=()=>{let ye=U[te],he=new Set(ye.sections);J.querySelectorAll('[id^="sec-"]').forEach(Ee=>{Ee.id&&(Ee.style.display=he.has(Ee.id)?"":"none")}),K&&window.AdminTabs?.hasTabsFor?.(te)&&window.AdminTabs.applyTabSectionVisibility(te,K,J),ie(),ne()},le=null,ue=null;function Te(){let ye=ue&&document.getElementById(ue);!ye||!ye.getClientRects().length||(ue=null,ye.tagName==="DETAILS"&&(ye.open=!0),ye.scrollIntoView({block:"start"}))}let Se=(ye,he,Ee)=>{let $e=w(ye,he,Ee);Ee=$e.rawName,te=$e.route,J.dataset.activeRoute=te;let De=$e.tab,Ne=$e.fold?R(te,$e.fold):Ee&&Ee!==te?"#/"+Ee:R(te,De);if(window.location.hash!==Ne){try{history.replaceState(null,"",Ne)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let He=U[te],Oe=Array.from(J.querySelectorAll(".admin-dash-nav-row[data-route]")),qe=Ee!==te?Oe.find(Z=>Z.dataset.route===Ee):null;Oe.forEach(Z=>{let me=qe?Z===qe:Z.dataset.route===te;Z.classList.toggle("is-active",me),Z.setAttribute("aria-selected",me?"true":"false")});let Re=J.querySelector("[data-route-kicker]"),Me=J.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(Z){return Z},Be="adminRouteTitle_"+te,je="adminRouteKicker_"+te,H=Ge(Be),V=Ge(je);Re&&(Re.textContent=V!==je?V:He.kicker),Me&&(Me.textContent=H!==Be?H:He.title);let X=te==="dashboard"||te==="live";J.querySelectorAll('[data-route-view="dashboard"]').forEach(Z=>{Z.style.display=X?"":"none"}),X?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),K=De,De&&window.AdminRouter?.tabMemory?.set?.(te,De),J.dataset.activeLeaf=De||te,re(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:te,leaf:De}})),ie(),ne(),se(te,De),Le(Ee,te,De),$e.fold!==le&&(le=$e.fold,ue=$e.foldSection),Te();try{history.replaceState(null,"",Ne)}catch{}};function Le(ye,he,Ee){window.AdminBreadcrumb?.render(J,ye,he,Ee)}function se(ye,he){let Ee=J.querySelector("[data-admin-tabs-host]");if(!Ee){let $e=J.querySelector(".admin-dash-topbar");if(!$e)return;Ee=document.createElement("div"),Ee.dataset.adminTabsHost="",$e.insertAdjacentElement("afterend",Ee)}if(Ee.innerHTML="",window.AdminTabs?.hasTabsFor?.(ye)&&he){Ee.hidden=!1;let $e=window.AdminTabs.renderTabStrip(ye,he,{onSelect:De=>Se(ye,De)});$e&&Ee.appendChild($e),Ee.classList.remove("admin-tabs-host--accordion");return}Ee.classList.remove("admin-tabs-host--accordion"),Ee.hidden=!0}k&&window.removeEventListener("hashchange",k),k=()=>{let ye=L(window.location.hash),he=(window.location.hash||"").match(/^#\/([\w-]+)/),Ee=he?he[1]:null;ye&&Se(ye.nav,ye.tab,Ee||ye.raw)},window.addEventListener("hashchange",k),J.querySelectorAll("[data-route]").forEach(ye=>{ye.addEventListener("click",he=>{he.preventDefault(),Se(ye.dataset.route)})});let q=L(window.location.hash),W=(window.location.hash||"").match(/^#\/([\w-]+)/),Q=W?W[1]:q?.raw||q?.nav||"live";Se(q?.nav||"live",q?.tab||null,Q),window._adminNavigateTo=()=>Se(te,le||K);let oe=!1,ce=0,ve=0;function xe(){if(oe)return;oe=!0;let ye=()=>{oe&&(oe=!1,ce&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(ce),clearTimeout(ve),ce=0,ve=0,re(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:te,leaf:K}})),Te())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(ce=requestAnimationFrame(ye),ve=setTimeout(ye,100)):ve=setTimeout(ye,0)}let Ae=J.querySelector(".admin-dash-main");Ae&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{xe()}).observe(Ae,{childList:!0,subtree:!0}),xe())}function G(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let J=document.querySelector("[data-open-help]");J&&J.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let te=document.querySelector("[data-open-palette]");if(te){let Y=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};te.addEventListener("click",Y),te.addEventListener("keydown",ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Y())})}let K=document.getElementById("logoutButton");K&&K.addEventListener("click",async()=>{try{let Y=await A("/logout",{method:"POST"});Y.redirected&&(window.location.href=Y.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Y){console.error("Logout Failed:",Y),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Y=>{Y.name&&Y.addEventListener("change",async function(){let ne=this.name,ie=this.checked;await n(ne,ie)})}),document.querySelectorAll("details[id^='sec-']").forEach(Y=>{Y.addEventListener("toggle",()=>{let ne=p();ne[Y.id]=Y.open,l(ne)})}),document.querySelectorAll(".setting-input").forEach(Y=>{Y.addEventListener("change",async function(){let ne=this.dataset.key,ie=parseInt(this.dataset.index),re=this.value;this.type==="number"&&(re=parseInt(re)),await i(ne,re,ie,this)})})}function z(){if(y.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}N()}else B()}async function ee(){await e(),z(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function de(){window.AdminThemes&&window.AdminThemes.init()}function ae(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{x&&(x.disconnect(),x=null)}),ee()})});var Et=ge(()=>{(function(){"use strict";var b=null;async function h(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),D=Array.from(M).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var x=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:D})}),k=await x.json();if(!x.ok){window.showToast(k.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(k),A()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function y(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(M),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(M),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function A(){b&&(clearInterval(b),b=null);var m=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var D=await M.json();F(D),D.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};m(),b=setInterval(m,2e3)}function j(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function F(m){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!m||m.state==="idle"){M.appendChild(j());return}var D=m.total_votes||0,x=Math.max(1,...m.options.map(function($){return $.count})),k=document.createElement("div");k.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var E=document.createElement("span");E.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(E);var S=document.createElement("span");S.className="admin-poll-status-question",S.textContent=m.question||"",P.appendChild(S);var L=document.createElement("span");L.className="admin-poll-status-state",L.textContent=m.state,P.appendChild(L),k.appendChild(P),m.options.forEach(function($){var w=document.createElement("div");w.className="admin-poll-status-row";var p=document.createElement("div");p.className="admin-poll-status-label";var l=document.createElement("span"),o=document.createElement("b");o.textContent=$.key+".",l.appendChild(o),l.appendChild(document.createTextNode(" "+$.text));var e=document.createElement("span");e.textContent=$.count+" ("+$.percentage+"%)",p.appendChild(l),p.appendChild(e);var d=document.createElement("div");d.className="admin-poll-status-bar";var a=document.createElement("div");a.className="admin-poll-status-bar-fill",a.style.width=$.count/x*100+"%",d.appendChild(a),w.appendChild(p),w.appendChild(d),k.appendChild(w)});var R=document.createElement("div");R.className="admin-poll-status-footer",R.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),k.appendChild(R),M.appendChild(k)}}function C(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",h);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",y);var x=document.getElementById("pollResetBtn");x&&x.addEventListener("click",f);var k=document.getElementById("pollAddOptionBtn");k&&k.addEventListener("click",function(){var S=document.getElementById("pollOptionsContainer");if(S){var L=S.querySelectorAll(".poll-option-input").length;if(L>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var R=document.createElement("input");R.type="text",R.className="poll-option-input admin-ui-input",R.placeholder=String.fromCharCode(65+L)+". Option "+(L+1),R.maxLength=100,S.appendChild(R)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var S=document.getElementById("pollOptionsContainer");if(S){var L=S.querySelectorAll(".poll-option-input");if(L.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}L[L.length-1].remove()}});var E=m;E&&(E.addEventListener("toggle",function(){E.open&&A()}),A()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){C()}),document.addEventListener("DOMContentLoaded",function(){C()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&C()})})()});var $t=ge(()=>{(function(){"use strict";var b="sec-timeline-export",h="danmu.adminHistoryExports.v1",y=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},A=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],j=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},f),format:"JSON"};function C(){return document.getElementById(b)}function m(){try{return JSON.parse(localStorage.getItem(h)||"[]")}catch{return[]}}function M(v){try{localStorage.setItem(h,JSON.stringify(v.slice(0,y)))}catch{}}function D(v){var I=m();I.unshift(v),M(I)}function x(v){return v?v<1024?v+" B":v<1024*1024?(v/1024).toFixed(1)+" KB":(v/1024/1024).toFixed(1)+" MB":"0 B"}function k(v){try{var I=new Date(v),T=new Date,_=I.toDateString()===T.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(I.getHours()).padStart(2,"0")+":"+String(I.getMinutes()).padStart(2,"0")});var B=new Date(T);return B.setDate(T.getDate()-1),I.toDateString()===B.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(I.getHours()).padStart(2,"0")+":"+String(I.getMinutes()).padStart(2,"0")}):I.getMonth()+1+"-"+String(I.getDate()).padStart(2,"0")+" "+String(I.getHours()).padStart(2,"0")+":"+String(I.getMinutes()).padStart(2,"0")}catch{return v||""}}function P(v){if(v==="1h")return 1;if(v==="24h")return 24;if(v==="7d")return 168;if(v==="today"){var I=new Date,T=new Date(I.getFullYear(),I.getMonth(),I.getDate());return Math.max(1,Math.ceil((I-T)/36e5))}return v==="yest"?48:v==="live"?6:24}function E(v){return v.filter(function(I){return!(!F.filters.rawText&&!I.is_poll&&!I.muted&&!I.banned||!F.filters.polls&&I.is_poll||!F.filters.masked&&(I.muted||I.banned))}).map(function(I){if(!F.filters.metadata){var T=Object.assign({},I);return delete T.clientIp,delete T.fingerprint,T}return I})}function S(v){var I=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],T=function(N){var U=N==null?"":String(N);return U.indexOf(",")>=0||U.indexOf('"')>=0||U.indexOf(`
`)>=0?'"'+U.replace(/"/g,'""')+'"':U},_=function(N){return N.status?N.status:N.banned?"banned":N.muted?"muted":N.is_poll?"poll":"ok"},B=v.map(function(N){return[N.timestamp||"",N.nickname||"",N.text||"",N.color?"#"+N.color:"",N.size!=null?N.size:"",N.speed!=null?N.speed:"",N.opacity!=null?N.opacity:"",N.isImage?"true":"false",N.fontInfo&&N.fontInfo.name||"",N.clientIp||"",N.fingerprint||"",_(N),N.delivery_reason||""].map(T).join(",")});return[I.join(","),B.join(`\r
`)].filter(Boolean).join(`\r
`)}function L(v){return v.map(function(I,T){var _=new Date(I.timestamp||Date.now()),B=R(_),N=R(new Date(_.getTime()+3e3)),U=(I.nickname?"["+I.nickname+"] ":"")+(I.text||"");return T+1+`
`+B+" --> "+N+`
`+U+`
`}).join(`
`)}function R(v){var I=function(T,_){return String(T).padStart(_||2,"0")};return I(v.getHours())+":"+I(v.getMinutes())+":"+I(v.getSeconds())+","+I(v.getMilliseconds(),3)}function $(v,I){var T=URL.createObjectURL(v),_=document.createElement("a");_.href=T,_.download=I,_.click(),URL.revokeObjectURL(T)}function w(){var v=P(F.range),I=document.getElementById("histv2-go");I&&(I.disabled=!0,I.dataset.busy="1"),fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(T){if(!T.ok)throw new Error("http "+T.status);return T.json()}).then(function(T){var _=T&&T.records||[],B=E(_);if(B.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var N=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),U,O;if(F.format==="JSON"){var G=JSON.stringify(B,null,2);O=new Blob([G],{type:"application/json"}),U="danmu-history-"+N+".json"}else F.format==="CSV"?(O=new Blob(["\uFEFF"+S(B)],{type:"text/csv;charset=utf-8;"}),U="danmu-history-"+N+".csv"):(O=new Blob([L(B)],{type:"application/x-subrip;charset=utf-8;"}),U="danmu-history-"+N+".srt");$(O,U),D({name:U,fmt:F.format,size:O.size,when:new Date().toISOString(),count:B.length}),l(),p(B.length,O.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:B.length}),!0)}).catch(function(T){console.error("[history-v2] export failed",T),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:T.message||T}),!1)}).finally(function(){I&&(I.disabled=!1,delete I.dataset.busy)})}function p(v,I){var T=document.getElementById("histv2-estimate");T&&(T.textContent=ServerI18n.t("historyV2Estimate",{count:v||"\u2014",size:I?x(I):"\u2014 MB"}))}function l(){var v=document.getElementById("histv2-recent-list");if(v){var I=m();if(I.length===0){v.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}v.innerHTML=I.map(function(T){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+T.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(T.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(k(T.when))+" \xB7 "+x(T.size)+"</div></div></div>"}).join("")}}function o(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})}function e(){return A.map(function(v){var I=F.range===v.k;return'<button type="button" class="histv2-chip'+(I?" is-active":"")+'" data-histv2-range="'+v.k+'">'+o(ServerI18n.t(v.labelKey))+(v.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var v=new Date;return String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function a(){var v=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return v.map(function(I){var T=!!F.filters[I.k];return'<button type="button" class="histv2-toggle'+(T?" is-on":"")+'" data-histv2-toggle="'+I.k+'"><span class="histv2-toggle-mark">'+(T?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(I.labelKey))+"</span></button>"}).join("")}function r(){return j.map(function(v){var I=F.format===v.k;return'<button type="button" class="histv2-fmt'+(I?" is-selected":"")+'" data-histv2-fmt="'+v.k+'">'+(I?'<span class="histv2-fmt-check">\u2713</span>':"")+(v.badge?'<span class="histv2-fmt-badge">'+o(v.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+v.k+'</div><div class="histv2-fmt-desc">'+o(v.desc)+"</div></button>"}).join("")}function s(){var v=C();v&&(v.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+a()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+r()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",v.addEventListener("click",t),l(),n())}function t(v){var I=v.target.closest("[data-histv2-range]");if(I){F.range=I.dataset.histv2Range,c(),n();return}var T=v.target.closest("[data-histv2-toggle]");if(T){var _=T.dataset.histv2Toggle;F.filters[_]=!F.filters[_],g(),n();return}var B=v.target.closest("[data-histv2-fmt]");if(B){F.format=B.dataset.histv2Fmt,i(),n();return}var N=v.target.closest("#histv2-go");if(N&&!N.dataset.busy){w();return}}function c(){var v=document.getElementById("histv2-chips");v&&(v.innerHTML=e())}function g(){var v=document.getElementById("histv2-toggles");v&&(v.innerHTML=a())}function i(){var v=document.getElementById("histv2-formats");v&&(v.innerHTML=r())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var v=P(F.range);fetch("/admin/history?hours="+v+"&limit=10000",{credentials:"same-origin"}).then(function(I){return I.ok?I.json():null}).then(function(I){if(!I)return p(0,0);var T=E(I&&I.records||[]),_=F.format==="JSON"?220:F.format==="CSV"?110:80;p(T.length,T.length*_)}).catch(function(){p(0,0)})},250)}function u(){var v=C(),I=document.getElementById("admin-backup-v2-page");if(!v){var T=document.getElementById("settings-grid");if(!T)return;v=document.createElement("div"),v.id=b,v.className="admin-ui-card lg:col-span-2 history-v2-section",T.appendChild(v),s()}I&&I.parentElement&&v.previousElementSibling!==I&&I.parentElement.insertBefore(v,I.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:n,state:F}})()});var Lt=ge(()=>{(function(){"use strict";let b="admin-replay-bar";function h(){let f=document.getElementById(b);return f||(document.body?(f=document.createElement("div"),f.id=b,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function y(f){let A=h();A&&(A.hidden=!f)}window.AdminReplayBar={ensure:h,setActive:y},document.addEventListener("admin-panel-rendered",h)})()});var xt=ge(()=>{(function(){"use strict";let b=null;function h(k){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),E=document.getElementById("replayResumeBtn"),S=document.getElementById("replayStopBtn"),L=document.getElementById("replayProgress"),R=(p,l)=>{p&&p.classList.toggle("hidden",!l)},$=k==="playing",w=k==="paused";R(P,$),R(E,w),R(S,$||w),R(L,$||w),!$&&!w&&L&&(L.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive($||w)}function y(){b&&clearInterval(b),b=setInterval(async()=>{try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let P=await k.json(),E=document.getElementById("replayProgress");E&&(E.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),h(P.state),P.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),h("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),h("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function j(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),h("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,C=null,m=0,M=null;function D(){[["replayPauseBtn",f],["replayResumeBtn",A],["replayStopBtn",j]].forEach(function([P,E]){let S=document.getElementById(P);S&&!S.dataset.replayCtrlsBound&&(S.addEventListener("click",E),S.dataset.replayCtrlsBound="1")})}async function x(){try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let P=await k.json();(P.state==="playing"||P.state==="paused")&&(h(P.state),y())}catch{}}window.AdminReplayControls={notifyStarted:function(){h("playing"),y()}},document.addEventListener("admin-panel-rendered",function(){D(),x()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var At=ge(()=>{(function(){"use strict";let b="sec-ratelimit",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},y=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
      </div>`}function A(F){let C=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let l=window.AdminBootstrap;l&&typeof l.primeBootstrap=="function"&&await l.primeBootstrap();let o=l&&l.bootstrapSection?l.bootstrapSection("history_stats"):null,e=l&&l.bootstrapSection?l.bootstrapSection("blacklist"):null,d=l&&l.bootstrapSection?l.bootstrapSection("metrics"):null,a=[];a.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),a.push(e?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),a.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[r,s,t]=await Promise.all(a),c=o||(r&&r.ok?await r.json():null);if(c){let I=c.stats&&c.stats.last_24h||0,T=c.stats&&c.stats.total||0,_=F.querySelector("[data-rl-sum-hits]"),B=F.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=I.toLocaleString()),B&&(B.textContent=ServerI18n.t("ratelimitSumTotal",{n:T.toLocaleString()}))}let g=e||(s&&s.ok?await s.json():null);if(g){let I=Array.isArray(g)?g:g.entries||g.keywords||[],T=F.querySelector("[data-rl-sum-black]");T&&(T.textContent=I.length?ServerI18n.t("ratelimitCountUnit",{n:I.length}):"0")}let i=F.querySelector("[data-rl-sum-viol]"),n=F.querySelector("[data-rl-sum-viol-rate]"),u=F.querySelector("[data-rl-sum-locked]"),v=d||(t&&t.ok?await t.json():null);if(v){let I=v&&v.rate_limits;if(I&&I.totals){let T=I.totals.hits||0,_=I.totals.violations||0,B=I.totals.locked_sources||0;if(i&&(i.textContent=_.toLocaleString()),n){let N=T+_;n.textContent=N>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/N*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:B.toLocaleString()})),y.forEach(({key:N})=>{let U=I[N],O=F.querySelector(`[data-rl-current="${N}"]`);if(O&&U){let G=(U.hits||0).toLocaleString(),z=(U.violations||0).toLocaleString();O.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:G,viol:z})}}),M(I)}else i&&(i.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else i&&(i.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(v&&v.recent_violations)}catch{}},4500);function m(l){let o=F.querySelector("[data-rl-vbody]"),e=F.querySelector("[data-rl-vcount]");if(!o)return;let d=Array.isArray(l)?l:[];if(e&&(e.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let a=s=>{let t=new Date(s*1e3),c=g=>String(g).padStart(2,"0");return`${c(t.getHours())}:${c(t.getMinutes())}:${c(t.getSeconds())}`},r=s=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[s]||"var(--color-text-muted)";o.innerHTML=d.slice(0,30).map(s=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${a(s.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${r(s.scope)}">${(s.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(s.ip||"")}</span>
        </div>
      `).join("")}function M(l){l&&y.forEach(({key:o})=>{let e=l[o],d=F.querySelector(`[data-rl-suggest="${o}"]`);if(!d)return;let a=e&&e.suggestion;if(!a){d.hidden=!0;return}let r=d.querySelector("[data-rl-suggest-detail]");r&&(r.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(a.p95_per_second||0).toFixed(2),limit:e.limit||"\u2014",window:e.window||"\u2014",suggLimit:a.suggested_limit,suggWindow:a.suggested_window}));let s=d.querySelector("[data-rl-apply]");s&&(s.dataset.rlSuggestLimit=String(a.suggested_limit),s.dataset.rlSuggestWindow=String(a.suggested_window)),d.hidden=!1})}async function D(){try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let o=await l.json(),e=o&&o.rate_limits;if(!e)return;y.forEach(({key:d})=>{let a=e[d],r=F.querySelector(`[data-rl-current="${d}"]`);if(r&&a){let s=(a.hits||0).toLocaleString(),t=(a.violations||0).toLocaleString();r.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:s,viol:t})}}),M(e)}catch{}}F.addEventListener("click",async l=>{let o=l.target.closest("[data-rl-action]");if(!o)return;let e=o.dataset.rlAction;if(e==="save"){let d=o.dataset.rlSave,a=F.querySelector(`[data-rl-limit="${d}"]`),r=F.querySelector(`[data-rl-window="${d}"]`);if(!a||!r)return;let s=parseInt(a.value,10),t=parseInt(r.value,10);if(!Number.isFinite(s)||!Number.isFinite(t)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let c=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let g=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:s,window:t})});if(g.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:s,window:t}),!0),D();else{let i=await g.json().catch(()=>({})),n=i&&i.error||`HTTP ${g.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:n}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=c}return}if(e==="apply-suggest"){let d=o.dataset.rlApply,a=parseInt(o.dataset.rlSuggestLimit,10),r=parseInt(o.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(a)||!Number.isFinite(r))return;let s=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let t=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:a,window:r})});if(t.ok){let c=F.querySelector(`[data-rl-limit="${d}"]`),g=F.querySelector(`[data-rl-window="${d}"]`);c&&(c.value=a),g&&(g.value=r),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:a,window:r}),!0),D(),x()}else{let c=await t.json().catch(()=>({})),g=c&&c.error||`HTTP ${t.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:g}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=s}return}if(e==="export"){let d=[];F.querySelectorAll("[data-rl-limit]").forEach(a=>{let r=a.dataset.rlLimit.toUpperCase();d.push(`${r}_RATE_LIMIT=${a.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(a=>{let r=a.dataset.rlWindow.toUpperCase();d.push(`${r}_RATE_WINDOW=${a.value}`)}),C.textContent=d.join(`
`),C.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else e==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([a,[r,s]])=>{let t=F.querySelector(`[data-rl-limit="${a}"]`),c=F.querySelector(`[data-rl-window="${a}"]`);t&&(t.value=r),c&&(c.value=s)}),C.hidden=!0,x())});function x(){y.forEach(({key:l})=>{let o=F.querySelector(`[data-rl-limit="${l}"]`),e=F.querySelector(`[data-rl-window="${l}"]`),d=F.querySelector(`[data-rl-lockout="${l}"]`),a=F.querySelector(`[data-rl-effective="${l}"]`);if(!o||!e||!a)return;let r=parseInt(o.value,10)||0,s=parseInt(e.value,10)||1,t=(r/s).toFixed(2),c=Math.round(r*1.5),g=`effective_rate = ${r} / ${s}s = ${t} req/s \xB7 burst = ${c}`;if(l==="login"&&d){let i=parseInt(d.value,10)||0;g+=` \xB7 lock = ${i}s`}a.textContent=g})}F.addEventListener("input",l=>{let o=l.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||x()}),F.addEventListener("change",l=>{let o=l.target;!o||!o.dataset.rlWindow||x()}),x();function k(l,o){if(!l||!Array.isArray(o))return;let e=96,d=24,a=o.length?o:new Array(24).fill(0),r=Math.max(1,...a),s=e/Math.max(1,a.length-1),t=a.map((g,i)=>`${(i*s).toFixed(1)},${(d-2-g/r*(d-4)).toFixed(1)}`).join(" "),c=l.querySelector("polyline");c&&c.setAttribute("points",t)}y.forEach(({key:l})=>{let o=F.querySelector(`[data-rl-spark="${l}"]`);o&&k(o,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,E={allowlist:[],denylist:[]},S={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function L(l){if(S.error){if(!l){S.error.hidden=!0,S.error.textContent="";return}S.error.hidden=!1,S.error.textContent=l}}function R(l){let o=l==="allowlist"?S.allowBody:S.denyBody,e=l==="allowlist"?S.allowCount:S.denyCount;if(!o||!e)return;let d=Array.isArray(E[l])?E[l]:[];if(e.textContent=String(d.length),d.length===0){let a=ServerI18n.t(l==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:a})}</div>`;return}o.innerHTML=d.map(a=>{let r=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:h(a)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${h(a)}">
          <span class="admin-ratelimit-ip-chip-cidr">${h(a)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${h(a)}" data-rl-ip-remove-kind="${l}" title="${r}" aria-label="${r}">\xD7</button>
        </div>
      `}).join("")}function $(){if(R("allowlist"),R("denylist"),S.summary){let l=(E.allowlist||[]).length,o=(E.denylist||[]).length;S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:l,deny:o})}}async function w(){try{let l=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!l.ok){S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:l.status}));return}let o=await l.json();o&&typeof o=="object"&&(E={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},$())}catch{S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function p(l,{toastLabel:o}={}){try{let e=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(e.ok){let r=await e.json();return E={allowlist:Array.isArray(r.allowlist)?r.allowlist:[],denylist:Array.isArray(r.denylist)?r.denylist:[]},$(),L(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let d=await e.json().catch(()=>({})),a=d&&d.error||`HTTP ${e.status}`;return L(a),!1}catch{return L(ServerI18n.t("ratelimitNetworkError")),!1}}S.addBtn&&S.addBtn.addEventListener("click",async()=>{if(!S.input||!S.select)return;let l=(S.input.value||"").trim();if(!l){L(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(l)){L(ServerI18n.t("ratelimitIpFormatError"));return}let o=S.select.value==="denylist"?"denylist":"allowlist",e=Array.from(new Set([...E[o]||[],l]));await p({[o]:e},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:l})})&&(S.input.value="")}),S.input&&(S.input.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),S.addBtn&&S.addBtn.click())}),S.input.addEventListener("input",()=>{S.error&&!S.error.hidden&&L("")})),F.addEventListener("click",async l=>{let o=l.target.closest("[data-rl-ip-remove]");if(!o)return;let e=o.dataset.rlIpRemove,d=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",a=(E[d]||[]).filter(r=>r!==e);await p({[d]:a},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:e})})}),w(),setTimeout(async()=>{try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let o=await l.json(),e=o&&o.rate_limits;if(!e)return;y.forEach(({key:d})=>{let a=e[d]&&(e[d].bucket_history||e[d].history);if(Array.isArray(a)&&a.length){let r=F.querySelector(`[data-rl-spark="${d}"]`);r&&k(r,a.slice(-24))}})}catch{}},5500)}function j(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(b))return;F.insertAdjacentHTML("beforeend",f());let C=document.getElementById(b);C&&A(C)}document.addEventListener("admin-panel-rendered",j),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&j()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),j()})})()});var Ct=ge(()=>{(function(){"use strict";let b="sec-viewer-theme",h="danmu.viewerTheme.v1",y=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}let A=/^#[0-9a-f]{6}$/i,j=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[x])}function C(D){let x={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(k=>{typeof D[k]=="string"&&A.test(D[k])&&(x[k]=D[k])}),(D.mode==="dark"||D.mode==="light")&&(x.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(x.font=D.font),(D.logo===null||typeof D.logo=="string"&&j.test(D.logo))&&(x.logo=D.logo)),x}function m(D){let x={...y[0],logo:null};try{let i=localStorage.getItem(h);i&&(x={...x,...C(JSON.parse(i))})}catch{}let k="default";function P(){try{localStorage.setItem(h,JSON.stringify(x))}catch{}}function E(i){let n=/^#?([0-9a-f]{6})$/i.exec(i);if(!n)return[0,0,0];let u=parseInt(n[1],16);return[u>>16&255,u>>8&255,u&255]}function S([i,n,u]){let v=[i,n,u].map(I=>(I/=255,I<=.03928?I/12.92:Math.pow((I+.055)/1.055,2.4)));return .2126*v[0]+.7152*v[1]+.0722*v[2]}function L(i,n){let u=S(E(i)),v=S(E(n)),[I,T]=u>v?[u,v]:[v,u];return(I+.05)/(T+.05)}function R(i){return i>=7?{label:"AAA",cls:"is-good"}:i>=4.5?{label:"AA",cls:"is-ok"}:i>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function $(){let i=D.querySelector("[data-vt-presets]");i.innerHTML="",y.forEach(n=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(k===n.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{x={...x,...n},k=n.id,P(),g()}),i.appendChild(u)})}function w(){D.querySelectorAll("[data-vt-mode-btn]").forEach(i=>{i.classList.toggle("is-active",x.mode===i.dataset.vtModeBtn)})}function p(){let i=D.querySelector("[data-vt-colors]"),n=x.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];i.innerHTML=u.map(v=>{let I=L(x[v.key],v.vs),T=R(I),_=F(x[v.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${v.label}</span>
                <span class="grade ${T.cls}">${T.label} \xB7 ${I.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${v.key}" />
                <input type="text" value="${_}" data-vt-hex="${v.key}" spellcheck="false" />
                <span class="vs">vs ${v.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let i=D.querySelector("[data-vt-logo-preview]"),n=D.querySelector(".hint-empty"),u=D.querySelector("[data-vt-logo-actions]");x.logo?(i.src=x.logo,i.hidden=!1,n.style.display="none",u.hidden=!1):(i.hidden=!0,n.style.display="",u.hidden=!0)}function o(){let i=D.querySelector("[data-vt-font]");i.value=x.font;let n=D.querySelector("[data-vt-font-specimen]");n.style.fontFamily=x.font}function e(){let i=x.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(i,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(x.primary,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(x.hero,x.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=n.map(u=>{let v=R(u.ratio);return`<span class="vt-contrast-chip ${v.cls}">${u.lbl} \xB7 ${v.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function d(){let i=D.querySelector("[data-vt-stage]"),n=x.mode==="dark"?"#F8FAFC":"#0F172A";i.style.setProperty("--vt-bg",x.bg),i.style.setProperty("--vt-primary",x.primary),i.style.setProperty("--vt-hero",x.hero),i.style.setProperty("--vt-fg",n),i.style.fontFamily=x.font;let u=D.querySelector("[data-vt-preview-logo]");if(x.logo){let v=document.createElement("img");v.src=x.logo,v.style.maxHeight="40px",u.replaceChildren(v)}else u.textContent="Danmu Fire"}let a="auto",r="auto";function s(){D.querySelectorAll("[data-vt-theme-btn]").forEach(i=>{i.classList.toggle("is-active",i.dataset.vtThemeBtn===a)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(i=>{i.classList.toggle("is-active",i.dataset.vtLangBtn===r)})}async function t(){try{let i=await fetch("/get_settings",{credentials:"same-origin"});if(!i.ok)return;let n=await i.json(),u=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],v=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof u=="string"&&(a=u),typeof v=="string"&&(r=v),s()}catch{}}async function c(i,n){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:i,value:n,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${i} = ${n}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:i}),!1)}}function g(){$(),w(),p(),l(),o(),e(),d(),s()}D.addEventListener("input",i=>{if(i.target.matches("[data-vt-color]")){let n=i.target.dataset.vtColor;A.test(i.target.value)&&(x[n]=i.target.value,k="custom",P(),g())}else if(i.target.matches("[data-vt-hex]")){let n=i.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(i.target.value)&&(x[n]=i.target.value,k="custom",P(),g())}else i.target.matches("[data-vt-font]")&&(x.font=i.target.value,P(),g())}),D.addEventListener("change",i=>{if(i.target.matches("[data-vt-logo-input]")){let n=i.target.files&&i.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{x.logo=String(u.result||""),P(),g()},u.readAsDataURL(n)}}),D.addEventListener("click",i=>{let n=i.target.closest("[data-vt-mode-btn]");if(n){x.mode=n.dataset.vtModeBtn,k="custom",P(),g();return}let u=i.target.closest("[data-vt-theme-btn]");if(u){a=u.dataset.vtThemeBtn,s(),c("ViewerThemeMode",a);return}let v=i.target.closest("[data-vt-lang-btn]");if(v){r=v.dataset.vtLangBtn,s(),c("ViewerLangMode",r);return}if(i.target.closest("[data-vt-logo-remove]")){x.logo=null,P(),g();return}let T=i.target.closest("[data-vt-device-btn]");if(T){D.querySelectorAll("[data-vt-device-btn]").forEach(B=>B.classList.toggle("is-active",B===T)),D.querySelector("[data-vt-frame]").dataset.device=T.dataset.vtDeviceBtn;return}let _=i.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(x={...y[0],logo:null},k="default",P(),g())}),g(),t()}document.addEventListener("click",function(D){let x=D.target.closest("[data-vt-jump]");if(!x)return;let k=x.dataset.vtJump;if(k){D.preventDefault();try{location.hash="#/"+k}catch{}}});function M(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(b))return;D.insertAdjacentHTML("beforeend",f());let x=document.getElementById(b);x&&m(x)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Bt=ge(()=>{(function(){"use strict";let b="sec-system-overview";function h(){return`
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
      </div>`}function y(C){let m=Math.floor(C/86400),M=Math.floor(C%86400/3600),D=Math.floor(C%3600/60);return m>0?`${m}d ${String(M).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:M>0?`${M}h ${String(D).padStart(2,"0")}m`:`${D}m ${String(C%60).padStart(2,"0")}s`}function f(C,m,M){let D=document.querySelector(`[data-m="${C}"]`);if(!D)return;let x=D.querySelector("[data-m-v]");x&&(x.textContent=m);let k=D.querySelector("[data-m-sub]");k&&(k.textContent=M||"")}function A(C){let m=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),k=!(C.queue_size!=null&&C.queue_capacity!=null&&C.queue_size>=C.queue_capacity);D&&D.classList.toggle("is-warn",!k),m&&m.classList.toggle("is-warn",!k),M&&(M.textContent=k?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function j(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let D=await M.json(),x=$=>Array.isArray($)&&$.length?$[$.length-1]:null,k=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;f("uptime",k>0?y(k):"\u2014","");let P=null;try{let $=await fetch("/admin/audience/stats",{credentials:"same-origin"});$.ok&&(P=(await $.json()).total_live)}catch{}let E=D.ws_clients??0;f("conn",String(E+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:E}):ServerI18n.t("sohConnBreakdown",{overlays:E,viewers:P}));let S=x(D.mem_series||[]),L=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;f("ram",S!=null?`${Number(S).toFixed(0)}%`:"\u2014",L?ServerI18n.t("sohMemorySub",{total:L}):"");let R=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${R}`,ServerI18n.t("sohVersionSub")),A(D)}catch{}})();let C=document.getElementById(b);if(!C)return;let m=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";C.querySelectorAll("[data-soh-mode]").forEach(D=>{let x=D.dataset.sohMode===M;D.classList.toggle("is-active",x),D.setAttribute("aria-pressed",x?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),C.addEventListener("click",function(M){let D=M.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),m();return}let x=M.target.closest("[data-soh-action]");if(!(!x||x.disabled)){if(x.dataset.sohAction==="copy-url"){let k=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(k);return}if(x.dataset.sohAction==="show-qr"){let k=C.querySelector("[data-soh-qr]");if(!k)return;if(!k.hidden){k.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{k.innerHTML=P.svg,k.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let C=document.getElementById("settings-grid");!C||document.getElementById(b)||(C.insertAdjacentHTML("beforeend",h()),document.getElementById(b)&&j())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var Ft=ge(()=>{(function(){"use strict";let b="sec-polls",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(j){return String(j).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function y(){return`
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
  `}function f(){let j=document.getElementById("sec-polls");if(!j)return;let F=j.querySelector("[data-poll-queue]"),C=j.querySelector("[data-poll-editor]"),m=j.querySelector("[data-poll-view-builder]"),M=j.querySelector("[data-poll-view-live]"),D=j.querySelector("[data-poll-view-results]"),x="danmu.adminPollQueue.v2";function k(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function E(K){return{id:P(),label:""}}function S(){return{id:k(),text:"",timer:90,image_url:"",server_q_id:"",options:[E("A"),E("B")]}}let L=null,R="builder",$=null,w=0,p={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,o=[];try{let K=localStorage.getItem(x);if(K){let Y=JSON.parse(K);Array.isArray(Y)?o=Y:Y&&Array.isArray(Y.queue)&&(o=Y.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[S()]),o.forEach(K=>{typeof K.image_url!="string"&&(K.image_url=""),typeof K.server_q_id!="string"&&(K.server_q_id="")});let e=o[0].id,d="manual",a=null,r=null,s={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function t(){try{localStorage.setItem(x,JSON.stringify({queue:o,activeId:e,mode:d}))}catch{}}function c(K){return o.find(Y=>Y.id===K)}function g(K,Y){let ne=c(K);ne&&Object.assign(ne,Y)}function i(K,Y,ne){let ie=K.slice(),[re]=ie.splice(Y,1);return ie.splice(ne,0,re),ie}function n(){F.innerHTML="",o.forEach((K,Y)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",K.id===e&&ne.classList.add("is-active");let ie=s.active&&s.currentIndex===Y;ie&&ne.classList.add("is-running"),ne.dataset.qid=K.id,ne.draggable=!0;let re=!!K.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Y+1}</span>
            <div class="info">
              <div class="text">${h(K.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:K.options.length})} \xB7 ${K.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):K.timer+"s"} \xB7 ${re?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${ie?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":K.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(ne)})}function u(){let K=c(e)||o[0];if(!K){C.innerHTML="";return}let Y=o.indexOf(K);C.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Y+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Y+1})}</span>
            </div>
            <span class="progress">Q${Y+1} / ${o.length}</span>
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
            ${K.options.map((ne,ie)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+ie)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${h(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+ie)})}" maxlength="100" />
                ${K.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ne.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
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
        `}function v(){L&&L.active?R="live":$?R="results":R="builder",j.dataset.pollView=R,m.hidden=R!=="builder",M.hidden=R!=="live",D.hidden=R!=="results",n(),u(),ee(),R==="live"?N():R==="results"&&O(),R==="live"?I():T()}function I(){l||(l=setInterval(()=>{R!=="live"||!L||!L.active||U()},1e3))}function T(){l&&(clearInterval(l),l=null)}function _(K,Y){if(!K||!K.time_limit_seconds)return null;if(!Y)return K.time_limit_seconds;let ne=Date.now()/1e3-Y;return Math.max(0,Math.round(K.time_limit_seconds-ne))}function B(K){if(K==null)return"\u221E";let Y=String(Math.floor(K/60)).padStart(2,"0"),ne=String(K%60).padStart(2,"0");return`${Y}:${ne}`}function N(){if(!L||!L.questions||L.questions.length===0){M.innerHTML="";return}let K=L.current_index>=0?L.current_index:0,Y=L.questions.length,ne=L.questions[K],ie=_(ne,L.started_at),re=ne.time_limit_seconds||0,le=re>0&&ie!=null?Math.max(0,Math.min(1,ie/re)):1,ue=re>0&&ie!=null&&ie<=Math.max(5,re*.15),Te=ne.options.reduce((ce,ve)=>ce+(ve.count||0),0),Se=[...ne.options].sort((ce,ve)=>(ve.count||0)-(ce.count||0)),Le=Se[0]?Se[0].count:0,se=L.questions[K+1],q=110,W=q/2-6,Q=2*Math.PI*W,oe=Q*le;M.innerHTML=`
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
                    <svg viewBox="0 0 ${q} ${q}" width="56" height="56">
                      <circle cx="${q/2}" cy="${q/2}" r="${W}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${q/2}" cy="${q/2}" r="${W}" fill="none"
                        stroke="${ue?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${oe} ${Q}" stroke-linecap="round"
                        transform="rotate(-90 ${q/2} ${q/2})"
                        style="filter: drop-shadow(0 0 4px ${ue?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ue?"is-low":""}" data-live-mmss>${ie==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(ie)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:K+1})}</div>
                <div class="text">${h(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Se.map(ce=>{let ve=Te>0?ce.count/Te*100:0,xe=(ce.count||0)>0&&ce.count===Le;return`
                    <div class="admin-polls-live-bar ${xe?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${h(ce.key)}</span>
                        <span class="lbl">${h(ce.text||"")}</span>
                        ${xe?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${ve.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ve.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Te}</strong>`})}</span>
                ${se?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${h(se.text||"")}</em>`})}</span>`:""}
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
                  ${L.questions.map((ce,ve)=>{let xe=ve<K?"done":ve===K?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${xe}">
                        <span class="idx">${xe==="done"?"\u2713":ve+1}</span>
                        <span class="t">${h(ce.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${xe==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(ce=>`
                    <label class="admin-polls-live-toggle ${p[ce.k]?"is-on":""}" data-live-toggle="${ce.k}">
                      <span class="lbl">${ce.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function U(){if(!L||!L.active)return;let K=L.current_index>=0?L.current_index:0,Y=L.questions[K];if(!Y)return;let ne=_(Y,L.started_at),ie=Y.time_limit_seconds||0,re=M.querySelector("[data-live-mmss]"),le=M.querySelector("[data-live-ring]");if(re&&(re.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):B(ne),re.classList.toggle("is-low",ie>0&&ne!=null&&ne<=Math.max(5,ie*.15))),le&&ie>0&&ne!=null){let ue=+le.getAttribute("r"),Te=2*Math.PI*ue,Se=Math.max(0,Math.min(1,ne/ie));le.setAttribute("stroke-dasharray",`${Te*Se} ${Te}`);let Le=ne<=Math.max(5,ie*.15);le.setAttribute("stroke",Le?"var(--hud-crimson)":"var(--color-primary)"),le.style.filter=`drop-shadow(0 0 4px ${Le?"var(--hud-crimson)":"var(--color-primary)"})`}p.autoAdvance&&ie>0&&ne===0&&(K>=L.questions.length-1?J():ae())}function O(){let K=$;if(!K||!K.questions||K.questions.length===0){D.innerHTML="";return}let Y=K.questions.length,ne=Math.max(0,Math.min(w,Y-1)),ie=K.questions[ne],re=ie.options.reduce((Q,oe)=>Q+(oe.count||0),0),le=[...ie.options].sort((Q,oe)=>(oe.count||0)-(Q.count||0)),ue=le[0]||{key:"-",text:"\u2014",count:0},Te=le[1],Se=re>0?ue.count/re*100:0,Le=Te?Math.max(0,ue.count-Te.count):ue.count,se=K.started_at||0,q=K.ended_at||Date.now()/1e3,W=Math.max(0,Math.round(q-se));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Y>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${K.questions.map((Q,oe)=>`
                    <button type="button" role="tab" class="${oe===ne?"is-active":""}" data-results-tab="${oe}">
                      Q${oe+1}<span class="t">${h((Q.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Y} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:B(W),n:re})}</span>
                </div>
                <div class="text">${h(ie.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${h(ue.key)}</div>
                <div class="info">
                  <div class="lbl">${h(ue.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})} \xB7 ${Se.toFixed(1)}% ${Te?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Le}):""}</div>
                </div>
                <div class="pct">${Se.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:re})}</span>
                </div>
                ${le.map((Q,oe)=>{let ce=re>0?Q.count/re*100:0;return`
                    <div class="admin-polls-results-bar ${oe===0&&Q.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${oe+1}</span>
                        <span class="tag">${h(Q.key)}</span>
                        <span class="lbl">${h(Q.text||"")}</span>
                        <span class="pct">${ce.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:Q.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ce.toFixed(1)}%"></div></div>
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
                  <span class="big">${re}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,re?100:0)}%"></div>
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
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${K.started_at?new Date(K.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${K.ended_at?new Date(K.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${B(W)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let Q=Math.max(1,...le.map(oe=>oe.count));return le.map(oe=>`<div class="bar" style="height:${Math.max(6,oe.count/Q*100)}%"></div>`).join("")})()}
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
        `}function G(K){let Y=[["question_index","question","option_key","option_text","count","percentage"]];return K.questions.forEach((ne,ie)=>{let re=ne.options.reduce((le,ue)=>le+(ue.count||0),0);ne.options.forEach(le=>{let ue=re>0?(le.count/re*100).toFixed(1):"0";Y.push([ie+1,ne.text,le.key,le.text,le.count,ue])})}),Y.map(ne=>ne.map(ie=>{let re=String(ie??"");return/[",\n]/.test(re)?`"${re.replace(/"/g,'""')}"`:re}).join(",")).join(`
`)}function z(K,Y,ne){let ie=new Blob([ne],{type:Y}),re=document.createElement("a");re.href=URL.createObjectURL(ie),re.download=K,document.body.appendChild(re),re.click(),setTimeout(()=>{URL.revokeObjectURL(re.href),re.remove()},0)}j.addEventListener("click",K=>{let Y=K.target.closest("[data-live-action]");if(Y){let le=Y.dataset.liveAction;le==="advance"?ae():le==="end"?J():le==="pause"&&(p.autoAdvance=!1,N());return}let ne=K.target.closest("[data-live-toggle]");if(ne){let le=ne.dataset.liveToggle;le in p&&(p[le]=!p[le],ne.classList.toggle("is-on",p[le]));return}let ie=K.target.closest("[data-results-tab]");if(ie){w=+ie.dataset.resultsTab||0,O();return}let re=K.target.closest("[data-results-action]");if(re){let le=re.dataset.resultsAction,ue=$;if(!ue)return;if(le==="copy"){let Te=ue.questions.map((Se,Le)=>{let se=Se.options.reduce((W,Q)=>W+(Q.count||0),0),q=Se.options.map(W=>{let Q=se>0?(W.count/se*100).toFixed(1):"0.0";return`  ${W.key}. ${W.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:W.count})} (${Q}%)`});return`Q${Le+1}: ${Se.text}
${q.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Te)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else le==="csv"?z(`poll_${(ue.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",G(ue)):le==="json"?z(`poll_${(ue.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ue,null,2)):le==="reset"&&($=null,w=0,v());return}}),F.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(a=Y.dataset.qid,Y.classList.add("is-dragging"))}),F.addEventListener("dragend",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&Y.classList.remove("is-dragging"),a=null,F.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),F.addEventListener("dragover",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");!Y||!a||Y.dataset.qid===a||(F.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),F.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");if(!Y||!a)return;let ne=o.findIndex(re=>re.id===a),ie=o.findIndex(re=>re.id===Y.dataset.qid);ne<0||ie<0||ne===ie||(o=i(o,ne,ie),t(),v())}),F.addEventListener("click",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(e=Y.dataset.qid,t(),v())}),C.addEventListener("input",K=>{let Y=c(e);if(Y){if(K.target.matches("[data-ed-text]")){Y.text=K.target.value,t(),n();return}if(K.target.matches("[data-ed-opt-text]")){let ne=K.target.dataset.edOptText,ie=Y.options.find(re=>re.id===ne);ie&&(ie.label=K.target.value,t(),n())}}}),C.addEventListener("change",K=>{let Y=c(e);Y&&K.target.matches("[data-ed-timer]")&&(Y.timer=+K.target.value,t(),n())}),C.addEventListener("click",async K=>{let Y=c(e);if(!Y)return;let ne=K.target.closest("[data-ed-opt-remove]");if(ne){let re=ne.dataset.edOptRemove;Y.options.length>2&&(Y.options=Y.options.filter(le=>le.id!==re),t(),u(),n());return}if(K.target.closest("[data-ed-opt-add]")){Y.options.length<6&&(Y.options.push(E()),t(),u(),n());return}let ie=K.target.closest("[data-ed-action]");if(ie)if(ie.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let le=o.findIndex(ue=>ue.id===e);o=o.filter(ue=>ue.id!==e),e=o[Math.min(le,o.length-1)].id,t(),v()}}else if(ie.dataset.edAction==="upload-q-image"){let re=C.querySelector("[data-ed-q-image-input]");re&&re.click()}else ie.dataset.edAction==="remove-q-image"&&(Y.image_url="",t(),u(),n())}),C.addEventListener("change",async K=>{if(!K.target.matches("[data-ed-q-image-input]"))return;let Y=K.target.files&&K.target.files[0];if(!Y)return;let ne=c(e);if(!ne)return;if(!s.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),K.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),K.target.value="";return}if(Y.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),K.target.value="";return}let ie=new FormData;ie.append("file",Y);try{let re=await csrfFetch(`/admin/poll/${encodeURIComponent(s.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:ie}),le=await re.json().catch(()=>({}));if(!re.ok)throw new Error(le.error||"upload failed");ne.image_url=le.image_url,t(),u(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(re){showToast&&showToast(String(re.message||re),!1)}finally{K.target.value=""}}),C.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-opt");Y&&(r=Y.dataset.oid,Y.classList.add("is-dragging"))}),C.addEventListener("dragend",K=>{C.querySelectorAll(".is-dragging, .is-drag-over").forEach(Y=>Y.classList.remove("is-dragging","is-drag-over")),r=null}),C.addEventListener("dragover",K=>{let Y=K.target.closest(".admin-poll-opt");!Y||!r||Y.dataset.oid===r||(K.preventDefault(),C.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),C.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-opt"),ne=c(e);if(!Y||!r||!ne)return;let ie=ne.options.findIndex(le=>le.id===r),re=ne.options.findIndex(le=>le.id===Y.dataset.oid);ie<0||re<0||ie===re||(ne.options=i(ne.options,ie,re),t(),u())}),j.addEventListener("click",K=>{if(K.target.closest("[data-poll-action='add']")){let le=S();o.push(le),e=le.id,t(),v();return}let ne=K.target.closest("[data-poll-template]");if(ne){let le=S(),ue=ne.dataset.pollTemplate,Te=["A","B","C","D","E"],Se=Le=>Le.map((se,q)=>{let W=E(Te[q]);return W.text=se,W});ue==="yesno"?(le.text="",le.options=Se([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ue==="stars"?(le.timer=60,le.options=Se(["1","2","3","4","5"])):ue==="four"&&(le.options=Se(["","","",""])),o.push(le),e=le.id,t(),v();return}let ie=K.target.closest("[data-poll-mode]");ie&&(d=ie.dataset.pollMode,j.querySelectorAll("[data-poll-mode]").forEach(le=>le.classList.toggle("is-active",le===ie)),t());let re=K.target.closest("[data-poll-session-action]");if(re){let le=re.dataset.pollSessionAction;le==="start"?de():le==="advance"?ae():le==="end"&&J()}});function ee(){let K=j.querySelector("[data-poll-session]");if(!K)return;let Y=K.querySelector("[data-poll-session-status]"),ne=K.querySelector("[data-poll-session-action='start']"),ie=K.querySelector("[data-poll-session-action='advance']"),re=K.querySelector("[data-poll-session-action='end']");if(!s.pollId||!s.active){Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,ie.hidden=!0,re.hidden=!0;return}let le=o.length,ue=s.currentIndex+1,Te=s.currentIndex>=le-1;Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ue} / ${le}</span>`,ne.hidden=!0,ie.hidden=Te,re.hidden=!1}async function de(){try{let K=o.map((ue,Te)=>{let Se=(ue.text||"").trim(),Le=ue.options.map(se=>(se.label||"").trim()).filter(Boolean);if(!Se)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Te+1}));if(Le.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Te+1}));return{text:Se,options:Le,time_limit_seconds:ue.timer&&ue.timer>0?ue.timer:null}});if(!K.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Y=(()=>{let ue=o.map(Te=>Number(Te.timer)||0).filter(Te=>Te>0);return ue.length?Math.round(ue.reduce((Te,Se)=>Te+Se,0)/ue.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:K,mode:d||"manual",default_duration_s:Y})}),ie=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(ie.error||ServerI18n.t("pollBuilderErrCreateFailed"));s.pollId=ie.poll_id,(ie.questions||[]).forEach((ue,Te)=>{o[Te]&&(o[Te].server_q_id=ue.id)}),t();let re=await csrfFetch("/admin/poll/start",{method:"POST"}),le=await re.json().catch(()=>({}));if(!re.ok)throw new Error(le.error||ServerI18n.t("pollBuilderErrStartFailed"));s.active=!0,s.currentIndex=le.current_index??0,L=le,$=null,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),te()}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function ae(){try{let K=await csrfFetch("/admin/poll/advance",{method:"POST"}),Y=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Y.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));s.currentIndex=Y.current_index,s.active=!!Y.active,L=Y,v(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:s.currentIndex+1}),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function J(){try{let K=L,Y=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Y.ok){let ne=await Y.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}K&&K.questions&&($={...K,ended_at:Date.now()/1e3},w=K.current_index>=0?K.current_index:0),s.active=!1,s.pollId="",s.currentIndex=-1,L=null,s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),v(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}function te(){s.statusTimer&&clearInterval(s.statusTimer),s.statusTimer=setInterval(async()=>{if(s.pollId)try{let K=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!K.ok)return;let Y=await K.json();if(Y.poll_id!==s.pollId)return;s.active=!!Y.active,s.currentIndex=Y.current_index??-1;let ne=!!(L&&L.active);L=Y,Y.active||(clearInterval(s.statusTimer),s.statusTimer=null,ne&&Y.questions&&!$&&($={...Y,ended_at:Date.now()/1e3},w=Y.current_index>=0?Y.current_index:0),L=null),R==="live"?N():v()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{s.statusTimer&&(clearInterval(s.statusTimer),s.statusTimer=null),T()}),v()}function A(){let j=document.getElementById("settings-grid");!j||document.getElementById(b)||(j.insertAdjacentHTML("beforeend",y()),document.getElementById(b)&&f())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var Dt=ge(()=>{(function(){"use strict";let f="sec-live-feed",A={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},j=[],F=[],C=!1,m="",M="all",D=0,x=0,k=null,P=null,E=null;function S(se){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(se):String(se??"").replace(/[&<>"']/g,function(q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[q]})}function L(se,q){return se?se.length>q?se.slice(0,q)+"\u2026":se:""}function R(se){let q=new Date(se),W=Q=>String(Q).padStart(2,"0");return`${W(q.getHours())}:${W(q.getMinutes())}:${W(q.getSeconds())}`}function $(se){if(!m)return!0;let q=m.toLowerCase(),W=se.data;return W.text&&W.text.toLowerCase().includes(q)||W.nickname&&W.nickname.toLowerCase().includes(q)||W.fingerprint&&W.fingerprint.toLowerCase().includes(q)||W.layout&&W.layout.toLowerCase().includes(q)}function w(se){return M==="muted"?!!se.muted:!0}function p(){M="all",document.querySelectorAll(".admin-live-feed-tab").forEach(se=>se.classList.toggle("is-active",se.dataset.tab==="all"))}function l(){m="",E&&(E.value=""),p()}function o(se,q){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let Q;return se==="paused"?Q=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:q||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):se==="no-result"?Q=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:q||ServerI18n.t("lfNoMatchDesc")}):Q=window.AdminEmpty.render("messages"),Q.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),Q.setAttribute("data-empty-kind","live-feed"),Q}let W=document.createElement("div");return W.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",W.setAttribute("data-empty-kind","live-feed"),W.innerHTML=`<div class="admin-proto-placeholder-title">${S(se)}</div><div class="admin-proto-placeholder-body">${S(q||"")}</div>`,W}function e(se){let q=se.data,W=document.createElement("div");W.className="admin-live-feed-row"+(se.muted?" is-muted":""),W.dataset.id=se.id,W.tabIndex=-1;let Q=document.createElement("span");if(Q.className="admin-live-feed-time",Q.textContent=R(se.ts),W.appendChild(Q),(q.layout||"scroll").toLowerCase()!=="scroll"){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=q.layout,W.appendChild(he)}let ce=A[q.integration];if(ce){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=ce,W.appendChild(he)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=L(q.text||"",80),ve.title=q.text||"",W.appendChild(ve);let xe=document.createElement("span");xe.className="admin-live-feed-identity",window.AdminIdentity&&xe.appendChild(AdminIdentity.render({nickname:q.nickname||"",fp:"",onNicknameClick:function(he){!he||!E||(E.value=he,E.dispatchEvent(new Event("input",{bubbles:!0})),E.focus())}})),W.appendChild(xe);let Ae=document.createElement("span");if(Ae.className="admin-live-feed-actions is-hover-reveal",q.message_id){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip admin-live-feed-action",he.textContent=ServerI18n.t("lfRecallBtn"),he.title=ServerI18n.t("lfRecallTitle"),he.addEventListener("click",Ee=>{Ee.stopPropagation(),a(se)}),Ae.appendChild(he)}let ye=document.createElement("button");if(ye.type="button",ye.className="admin-ui-chip is-danger admin-live-feed-action",ye.textContent=ServerI18n.t("blockKeywordBtn"),ye.title=ServerI18n.t("blockKeywordTitle"),ye.addEventListener("click",he=>{he.stopPropagation(),r("keyword",q.text,se.id)}),Ae.appendChild(ye),q.fingerprint){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip is-warn admin-live-feed-action",he.textContent=ServerI18n.t("blockFpBtn"),he.title=ServerI18n.t("blockFpTitle").replace("{fp}",q.fingerprint),he.addEventListener("click",Ee=>{Ee.stopPropagation(),r("fingerprint",q.fingerprint,se.id)}),Ae.appendChild(he)}return W.appendChild(Ae),W.classList.add("is-clickable"),W.addEventListener("click",he=>{he.target.closest(".admin-live-feed-actions")||d(se)}),W.addEventListener("keydown",he=>{he.key!=="Enter"||he.target.closest("button")||(he.preventDefault(),d(se))}),W}function d(se){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(se)}async function a(se){let q=se&&se.data&&se.data.message_id;if(!q)return;let W=await window.AdminModeration.recall(q);if(!W.ok){console.error("[LiveFeed] Recall failed:",W.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}se.recalled=!0;let Q=s(se.id);Q&&Q.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function r(se,q,W){if(!(!q||!await(se==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,q))){if(W){let ce=j.find(ve=>ve.id===W);ce&&(ce.muted=!0)}else j.forEach(ce=>{se==="keyword"&&ce.data.text===q&&(ce.muted=!0),se==="fingerprint"&&ce.data.fingerprint===q&&(ce.muted=!0)});g()}}function s(se){if(!k||!se)return null;let q=k.children;for(let W=0;W<q.length;W++)if(q[W].dataset&&q[W].dataset.id===se)return q[W];return null}function t(){let se=document.activeElement,q=se&&se.closest?se.closest(".admin-live-feed-row"):null;return q?q.dataset.id:null}function c(se){if(!se)return;let q=s(se);q&&document.activeElement!==q&&q.focus({preventScroll:!0})}function g(){if(!k)return;let se=t(),q=document.createDocumentFragment(),W=j.filter(Q=>$(Q)&&w(Q));for(let Q=W.length-1;Q>=0;Q--)q.appendChild(e(W[Q]));if(k.textContent="",q.childNodes.length===0){let Q=C?o("paused"):j.length===0?o("empty"):o("no-result");k.appendChild(Q)}else k.appendChild(q);u(),c(se)}function i(se){if(!k||!$(se)||!w(se))return null;let q=k.querySelector("[data-empty-kind='live-feed']");q&&q.remove();let W=k.scrollTop<=8,Q=e(se);if(W)k.insertBefore(Q,k.firstChild);else{let oe=k.scrollHeight;k.insertBefore(Q,k.firstChild),k.scrollTop+=k.scrollHeight-oe,x+=1}return Q}function n(){let se=j.length-200;if(se<=0)return;j.splice(0,se).forEach(W=>{let Q=s(W.id);Q&&Q.remove()})}function u(){_(),B(),I()}function v(se){let q={ts:Date.now(),data:se,id:se&&se.message_id?"m"+se.message_id:"e"+ ++D};if(se&&se.status==="blocked"&&(q.muted=!0),C){F.push(q),B(),I();return}j.push(q),i(q),n(),u()}function I(){let se=document.querySelector("[data-lf-jump]"),q=document.querySelector("[data-lf-jump-n]");if(!se||!q)return;let W=F.length,Q=W>0?W:x;Q>0?(se.hidden=!1,q.textContent=String(Q)):se.hidden=!0}function T(){C&&N(),x=0,k&&(k.scrollTop=0),I()}function _(){let se=document.querySelector("[data-lf-state]");se&&(se.className=C?"ui-status is-warning":"ui-status is-success",se.textContent=C?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function B(){let se=document.getElementById(f)||document,q=(W,Q)=>{let oe=se.querySelector(W);oe&&(oe.textContent=String(Q))};q("[data-cnt-all]",j.length),q("[data-cnt-mut]",j.filter(W=>W.muted).length)}function N(){if(C=!C,k&&k.setAttribute("aria-live",C?"off":"polite"),P&&(P.textContent=C?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),P.classList.toggle("is-primary",C),P.classList.toggle("is-ghost",!C)),C)B(),I();else{for(let se of F)j.push(se);F=[],j.length>200&&j.splice(0,j.length-200),x=0,g()}}function U(){let se=document.getElementById("settings-grid");if(!se)return!1;let q=`
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
      </div>`;return se.insertAdjacentHTML("beforeend",q),!0}let O=!1,G=null,z=0,ee=1500,de=!1;async function ae(){if(!de){de=!0;try{let se=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(z),{credentials:"same-origin"});if(!se.ok)return;let q=await se.json();if(Array.isArray(q.entries)){for(let W of q.entries)if(!(!W||!W.data)){if(typeof W.seq=="number"){if(W.seq<=z)continue;z=W.seq}v(W.data)}}typeof q.next_since=="number"&&q.next_since>z&&(z=q.next_since)}catch{}finally{de=!1}}}let J=5e3,te=null,K=!1;async function Y(){if(!(K||document.hidden)){K=!0;try{let se=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!se.ok)return;let q=await se.json(),W=Array.isArray(q.pending)?q.pending.length:0,Q=document.getElementById(f);if(!Q)return;let oe=Q.querySelector("[data-cnt-q]");oe&&(oe.textContent=String(W));let ce=Q.querySelector("[data-lf-pending-link]");ce&&ce.classList.toggle("has-pending",W>0)}catch{}finally{K=!1}}}function ne(){O||(O=!0,ae(),G=setInterval(ae,ee),Y(),te=setInterval(Y,J),window.addEventListener("beforeunload",()=>{te&&(clearInterval(te),te=null),G&&(clearInterval(G),G=null)}))}function ie(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(f)&&U()&&(re(),g())}function re(){k=document.getElementById("liveFeedList"),P=document.getElementById("liveFeedPauseBtn"),E=document.getElementById("liveFeedSearch");let se=document.getElementById("liveFeedClearBtn"),q=document.querySelectorAll(".admin-live-feed-tab");P&&P.addEventListener("click",N),se&&se.addEventListener("click",()=>{j=[],F=[],x=0,g()});let W=document.querySelector("[data-lf-jump-btn]");if(W&&W.addEventListener("click",T),k&&k.addEventListener("scroll",()=>{k.scrollTop<=8&&x>0&&(x=0,I())},{passive:!0}),q.forEach(Q=>{Q.addEventListener("click",()=>{q.forEach(oe=>oe.classList.remove("is-active")),Q.classList.add("is-active"),M=Q.dataset.tab||"all",g()})}),E){let Q=null;E.addEventListener("input",()=>{clearTimeout(Q),Q=setTimeout(()=>{m=E.value.trim(),g()},200)})}ne()}function le(se){if(!("ontouchstart"in window))return;let q=0,W=0,Q=0,oe=null,ce=null,ve=!1;function xe(Ae){if(Ae.querySelector(".admin-live-feed-row__swipe-actions"))return;let ye=Ae.dataset.id,he=j.find(De=>De.id===ye),Ee=!!(he&&he.data&&he.data.message_id),$e=document.createElement("div");$e.className="admin-live-feed-row__swipe-actions",$e.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${Ee?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,$e.addEventListener("click",function(De){let Ne=De.target.closest("[data-swipe-act]");if(!Ne||Ne.disabled)return;let He=Ae.dataset.id,Oe=j.find(Re=>Re.id===He);if(!Oe||!Oe.data)return;let qe=Ne.dataset.swipeAct;qe==="ban"?Oe.data.fingerprint&&r("fingerprint",Oe.data.fingerprint,He):qe==="recall"&&a(Oe),Ae.classList.remove("is-swiped")}),Ae.appendChild($e)}se.addEventListener("touchstart",function(Ae){let ye=Ae.target.closest(".admin-live-feed-row");ye&&(Ae.target.closest(".admin-live-feed-row__swipe-actions")||(oe=ye,ve=!1,q=Ae.touches[0].clientX,W=Ae.touches[0].clientY,Q=0))},{passive:!0}),se.addEventListener("touchmove",function(Ae){if(!oe||ve)return;let ye=Ae.touches[0],he=ye.clientX-q,Ee=ye.clientY-W;if(Math.abs(Ee)>Math.abs(he)&&Math.abs(Ee)>12){ve=!0;return}if(Q=he,he<-10){xe(oe),ce=oe,oe.classList.add("is-swiping");let $e=Math.max(-180,he);oe.style.transform=`translateX(${$e}px)`}else he>10&&oe.classList.contains("is-swiped")&&(oe.style.transform="")},{passive:!0}),se.addEventListener("touchend",function(){oe&&(oe.classList.remove("is-swiping"),oe.style.transform="",Q<=-60?oe.classList.add("is-swiped"):oe.classList.remove("is-swiped"),oe=null,ce=null,Q=0)},{passive:!0})}function ue(){return k?Array.from(k.querySelectorAll(".admin-live-feed-row")):[]}function Te(){let se=ue(),q=document.activeElement;for(let W of se)if(W===q||W.contains(q))return W;return null}function Se(se){let q=ue();if(!q.length)return!1;let W=Te(),Q=W?q.indexOf(W)+se:se>0?0:q.length-1;return Q=Math.max(0,Math.min(q.length-1,Q)),q[Q].focus(),q[Q].scrollIntoView({block:"nearest"}),!0}function Le(se){let q=Te();if(!q)return!1;let W=j.find(oe=>oe.id===q.dataset.id);if(!W)return!1;let Q=se==="keyword"?W.data.text:W.data.fingerprint;return Q?(r(se,Q,W.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return j.slice()},isVisible:function(){return!!(k&&k.offsetParent!==null)},isPaused:function(){return C},moveFocus:Se,blockFocused:Le,togglePause:function(){N()}},document.addEventListener("admin-panel-rendered",ie),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie()})()});var Mt=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml;function f(c,g=!1){var i=b();return i[c]!==void 0?i[c]:g}function A(c){var g=b();g[c.id]=c.open,h(g)}let j=!1;new MutationObserver(()=>{let c=document.getElementById("settings-grid");if(c&&!(document.getElementById("sec-plugins")||j)){j=!0;try{C(c)}finally{j=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function C(c){let g=`
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
      `;c.insertAdjacentHTML("beforeend",g);let i=document.querySelector("[data-console-filters]");i&&i.addEventListener("click",n=>{let u=n.target.closest("[data-console-filter]");u&&(i.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===u)),D=u.dataset.consoleFilter,S())}),document.getElementById("pluginsReloadBtn").addEventListener("click",t),$(),R()}let m=0,M=0,D="all",x=[],k=80;function P(c){let g=(c||"INFO").toUpperCase();return g==="ERROR"?"is-error":g==="WARN"?"is-warn":g==="DEBUG"?"is-debug":"is-info"}function E(c){let g=new Date(c*1e3),i=n=>String(n).padStart(2,"0");return`${i(g.getHours())}:${i(g.getMinutes())}:${i(g.getSeconds())}`}function S(){let c=document.getElementById("pluginsConsoleBody");if(!c)return;let g=D==="all"?x:x.filter(i=>(i.level||"INFO").toUpperCase()===D);if(g.length===0){let i=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;c.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${i}</span>
          </div>`;return}c.innerHTML=g.map(i=>{let n=E(i.ts),u=(i.msg||"").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),v=(i.plugin||"\u2014").replace(/[<>&"]/g,T=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[T]),I=(i.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${n}</span>
          <span class="lv ${P(i.level)}">${I}</span>
          <span class="plg">${v}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function L(){try{let c=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!c.ok)return;let g=await c.json();if(!Array.isArray(g.events)||g.events.length===0)return;for(x.unshift(...g.events);x.length>k;)x.pop();m=g.latest_seq||m,S()}catch{}}function R(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:L}))}async function $(){let c=document.getElementById("pluginsList");if(c)try{let g=await csrfFetch("/admin/plugins/list");if(!g.ok)throw new Error(`HTTP ${g.status}`);let n=(await g.json()).plugins||[];if(n.length===0){c.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",w([]);return}c.innerHTML=n.map(p).join(""),r(c),w(n)}catch(g){console.error("Failed to load plugins:",g),c.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function w(c){let g=c.length,i=c.filter(T=>T.enabled).length,n=g-i,u=c.map(T=>T.priority).filter(T=>typeof T=="number"),v=u.length?Math.round(u.reduce((T,_)=>T+_,0)/u.length):null,I=(T,_)=>{document.querySelectorAll(`[data-plugins-stat="${T}"]`).forEach(B=>{B.textContent=_})};I("loaded",g),I("running",i),I("paused",n),I("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(T=>{T.textContent=g})}function p(c){let{name:g,version:i,description:n,priority:u,enabled:v,is_user:I,file:T}=c,_=`plugin-toggle-${g}`,B=e(u),N=a(u),U=o(c),O=I&&T?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${y(T)}"
            data-plugin-name="${y(g)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${y(g)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${y(g)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${y(g)}</div>
            ${n?`<div class="desc">${y(n)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${i?"v"+y(i):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${B}">${u??"\u2014"}${N?" \xB7 "+N:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${d(U)}">${U}</span>
          <div class="admin-plugins-toggle-cell">
            ${O}
            <label class="admin-plugins-switch" for="${_}">
              <input type="checkbox" id="${_}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${y(g)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${y(g)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function l(c,g){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:c}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:g}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let n=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:g})}),u=await n.json().catch(()=>({}));if(!n.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:n.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:c}),!0),await $()}catch(n){showToast(ServerI18n.t("pluginsToastNetError",{msg:n.message||""}),!1)}}function o(c){let g=c.file||c.path||c.source||"";if(typeof g=="string"){if(g.endsWith(".py"))return"PY";if(g.endsWith(".js"))return"JS"}return(c.language||"PY").toUpperCase()}function e(c){return c==null?"is-muted":c<=10?"is-danger":c<=50?"is-warn":"is-cyan"}function d(c){return c==="JS"?"is-cyan":c==="PY"?"is-warn":"is-muted"}function a(c){return c==null?"":c<=10?"CRITICAL":c<=50?"HIGH":"NORMAL"}function r(c){c.querySelectorAll(".plugin-toggle").forEach(g=>{g.addEventListener("change",async function(){let i=this.dataset.pluginName,n=this.checked;await s(i,n,this)})}),c.querySelectorAll(".plugin-uninstall").forEach(g=>{g.addEventListener("click",function(){l(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(c,g,i){let n=g?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||`HTTP ${u.status}`)}showToast(g?ServerI18n.t("pluginEnabled").replace("{name}",c):ServerI18n.t("pluginDisabled").replace("{name}",c),!0)}catch(u){console.error(`Failed to ${g?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),i&&(i.checked=!g)}}async function t(){let c=document.getElementById("pluginsReloadBtn");c&&(c.disabled=!0);try{let g=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!g.ok){let i=await g.json().catch(()=>({}));throw new Error(i.error||`HTTP ${g.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await $()}catch(g){console.error("Failed to reload plugins:",g),showToast(g.message||ServerI18n.t("reloadFailed"),!1)}finally{c&&(c.disabled=!1)}}})})()});var Nt=ge(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},h={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},y=null,f=null;function A(){return y||(y=document.createElement("div"),y.className="admin-pu-backdrop",y.hidden=!0,y.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(y),y.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===y)&&o()}),y)}function j(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((a,r)=>{let s=r+1,t=s<e,g=t?"is-done":s===e?"is-active":"";return(r>0?`<span class="admin-pu-step-line ${t?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${g}">
          <span class="circle">${t?"\u2713":s}</span>
          <span class="label">${a}</span>
        </div>`}).join("")}function F(e,d){f.step=e;let a=y.querySelector("[data-pu-steps]");a&&(a.innerHTML=j(e));let r=y.querySelector("[data-pu-body]");r&&(r.innerHTML=d)}function C(e){let d=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),a=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${a}</div>
          <div class="admin-pu-dropzone-msg">${b(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let e=y.querySelector("[data-pu-dropzone]"),d=y.querySelector("[data-pu-file]"),a=y.querySelector("[data-pu-browse]");a&&a.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&M(d.files[0])}),e&&(e.addEventListener("click",()=>d&&d.click()),e.addEventListener("dragover",r=>{r.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",r=>{r.preventDefault(),e.classList.remove("is-over");let s=r.dataTransfer&&r.dataTransfer.files;if(!(!s||s.length===0)){if(s.length>1){F(1,C("error-multi")),m();return}M(s[0])}}))}function M(e){if(!e.name.match(/\.py$/i)){F(1,C("error-type")),m();return}if(e.size>256*1024){F(1,C("error-size")),m();return}f.file=e,F(2,D(e.name)),x(e)}function D(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(e)}</div>
      </div>`}async function x(e){try{let d=new FormData;d.append("file",e);let a=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),r=await a.json().catch(()=>({}));if(!a.ok&&!r.validation){window.showToast?.(r.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:a.status}),!1),F(1,C()),m();return}f.manifest=r.manifest||{},f.validation=r.validation||{},f.filename=r.filename||e.name,k(f)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),F(1,C()),m()}}function k(e){let d=e.manifest||{},a=e.validation||{},r="";if(!a.syntax_ok)r=P(a.syntax_err,e);else if(Object.keys(d).length===0)r=E(e);else{let s=(a.deps||[]).some(t=>t.status==="missing");r=R(d,a,e,s)}F(2,`<div class="admin-pu-step2">${r}</div>`),$()}function P(e,d){let a=e&&e.line?e.line:"?",r=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${a}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${d.filename}
${r}`)}</pre>
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
      </footer>`}function S(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function L(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=S(e),a=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${e} \xB7 ${a}</span>`}function R(e,d,a,r){let s=e.name||a.filename.replace(/\.(py|js)$/i,""),t=e.version?`v${b(e.version)}`:"\u2014",c=e.author?`@${b(e.author.replace(/^@/,""))}`:"\u2014",g=e.description||ServerI18n.t("pluginsUploadNoDescription"),i="PY",n="is-warn",u=Array.isArray(e.permissions)?e.permissions:[],v=Object.keys(h).map(N=>{let U=u.includes(N);return`
        <div class="admin-pu-perm-row ${U?"is-req":"is-not"}">
          <span class="dot">${U?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(N)}</span>
          <span class="label">${b(ServerI18n.t(h[N]))}</span>
        </div>`}).join(""),I=d.deps||[],T=I.map(N=>{let U=N.status==="ok"?"is-ok":N.status==="warn"?"is-warn":"is-err",O=N.status==="ok"?"\u2713":N.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${U}">
          <span class="dot">${O}</span>
          <span class="name">${b(N.name)}</span>
          <span class="note">${b(N.note||"")}</span>
        </div>`}).join(""),_=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(s)}</span>`})}
      </div>`:"",B=I.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${T}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(s)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${t}</span>
          <span class="author">${c}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${i}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(g)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${L(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${v}</div>
        </section>
        ${B}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${r?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${r?"disabled":""} data-pu-confirm>${r?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function $(){let e=y.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,F(1,C()),m()});let d=y.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>w());let a=y.querySelector("[data-pu-no-manifest-ack]");a&&d&&a.addEventListener("change",()=>{d.disabled=!a.checked})}function w(){let e=f.manifest||{},d=e.name||(f.filename||"").replace(/\.(py|js)$/i,""),a=e.version?`v${b(e.version)}`:"\u2014",r=Array.isArray(e.permissions)?e.permissions:[],s=r.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:r.map(g=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(g)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${a}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${s}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${b(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let t=y.querySelector("[data-pu-install]");t&&t.addEventListener("click",p);let c=y.querySelector("[data-pu-back]");c&&c.addEventListener("click",()=>k(f))}async function p(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",f.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),a=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(a.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),k(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:a.name||f.filename}),!0),o();let r=document.getElementById("pluginsReloadBtn");r&&r.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),k(f)}}function l(){A(),f={step:1,file:null,manifest:null,validation:null,filename:null},F(1,C()),m(),y.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){y&&(y.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:l,close:o},document.addEventListener("click",e=>{e.target.closest("#pluginsUploadBtn")&&(e.preventDefault(),l())})})()});var Pt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let h="sec-webhooks",y=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function A(s,t){return s?s.length>t?s.slice(0,t)+"\u2026":s:""}function j(s){if(!s)return"\u2014";try{let t=new Date(s),c=Math.max(0,(Date.now()-t.getTime())/1e3);return c<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(c)}):c<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(c/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(c/86400)})}catch{return"\u2014"}}function F(s){if(!s)return"\u2014";try{return new URL(s).hostname}catch{return A(s,30)}}function C(s){return s==="active"?"is-success":s==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function M(){let s=document.getElementById("settings-grid");!s||document.getElementById(h)||(s.insertAdjacentHTML("beforeend",`
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
    `),D())}function D(){let s=document.getElementById(h);if(!s)return;let t=document.getElementById("wh-register-form");t&&t.addEventListener("submit",async c=>{c.preventDefault();let g=document.getElementById("wh-url").value.trim();if(!g)return;let i=Array.from(t.querySelectorAll('input[name="wh-event"]:checked')).map(I=>I.value);if(i.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),v={url:g,events:i,format:n};u&&(v.secret=u);try{let I=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),T=await I.json();I.ok&&T.hook_id?(showToast(ServerI18n.t("webhookRegistered")),t.reset(),L(),t.hidden=!0,await x()):showToast(T.error||ServerI18n.t("registrationFailed"),!1)}catch(I){console.error("Webhook register error:",I),showToast(ServerI18n.t("registrationFailed"),!1)}}),s.addEventListener("click",c=>{if(c.target.closest("[data-wh-action='show-add']")){t&&(t.hidden=!1);return}if(c.target.closest("[data-wh-action='hide-add']")){t&&(t.hidden=!0);return}let n=c.target.closest("[data-wh-log-filter]");if(n){m.deliveryFilter=n.dataset.whLogFilter,s.querySelectorAll("[data-wh-log-filter]").forEach(U=>{U.classList.toggle("is-active",U.dataset.whLogFilter===m.deliveryFilter)}),l();return}let u=c.target.closest("[data-wh-action='test']");if(u){c.stopPropagation(),d(u.dataset.whHookId);return}let v=c.target.closest("[data-wh-action='settings']");if(v){c.stopPropagation(),o(v.dataset.whHookId);return}if(c.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,e(),w();return}let T=c.target.closest("[data-wh-action='detail-ping']");if(T){d(T.dataset.whHookId);return}let _=c.target.closest("[data-wh-action='detail-toggle']");if(_){a(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let B=c.target.closest("[data-wh-action='detail-delete']");if(B){r(B.dataset.whHookId);return}let N=c.target.closest("[data-wh-hook-row]");if(N&&!c.target.closest("button")){o(N.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:y,tick:x}))}async function x(){await E(),await Promise.all([k(),P()]),R(),w(),l(),e()}async function k(){try{let t=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(t.webhooks)?t.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let s=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!s.ok)return;let t=await s.json();m.deliveries=Array.isArray(t.deliveries)?t.deliveries:[],m.stats=t.stats||null}catch{}}async function E(){if(!m.eventCatalogLoaded)try{let s=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(s.ok){let t=await s.json(),c=Array.isArray(t.events)?t.events:[];c.length&&(m.eventCatalog=c)}}catch{}finally{m.eventCatalogLoaded=!0,L()}}function S(s){let t=s&&s.slug?String(s.slug):"";if(s&&s.labelKey){let u=ServerI18n.t(s.labelKey);return{slug:t,label:u?u+" \xB7 "+t:t,title:u}}let c=s&&s.zh?String(s.zh):"",g=s&&s.en?String(s.en):"",i=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(s&&s[i]?String(s[i]):"")||g||c;return{slug:t,label:n?n+" \xB7 "+t:t,title:c&&g?c+" \xB7 "+g:c||g}}function L(){let s=document.querySelector("[data-wh-register-events]");s&&(s.innerHTML=m.eventCatalog.map(function(t){let c=S(t);if(!c.slug)return"";let g=c.slug==="on_danmu"?" checked":"";return'<label title="'+b(c.title)+'"><input type="checkbox" name="wh-event" value="'+b(c.slug)+'"'+g+" /> "+b(c.label)+"</label>"}).join(""))}function R(){let s=document.querySelector("[data-wh-stats]");if(!s)return;let t=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};s.innerHTML=`
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
      </div>`}function $(){return m.hooks.length&&m.hooks[0].retry_count||3}function w(){let s=document.getElementById("wh-list"),t=document.querySelector("[data-wh-count]");if(s){if(t&&(t.textContent=String(m.hooks.length)),m.hooks.length===0){s.innerHTML="";let c=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let g=document.getElementById("wh-register-form");g&&(g.hidden=!1),document.getElementById("wh-url")?.focus()}});c.dataset.emptyKind="webhooks",s.appendChild(c);return}s.innerHTML=m.hooks.map(p).join("")}}function p(s){let t=b(s.id||""),c=Number(s.success_count)||0,g=Number(s.fail_count)||0,i=c+g,n=i>0?Math.round(c/i*1e3)/10:100,u=s.enabled!==!1,v=Number(s.last_status)||null,I=u?v&&v>=400||s.last_error?"degraded":"active":"paused",T=I==="active"?"var(--hud-lime)":I==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=I==="active"?"ACTIVE":I==="degraded"?"DEGRADED":"PAUSED",B=m.selectedHookId===s.id?" is-selected":"",N=C(I),U=(s.events||[]).map(function(G){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(G)+"</span>"}).join(""),O=s.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(A(s.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${B}" data-wh-hook-row data-wh-hook-id="${t}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${T};box-shadow:${u?"0 0 6px "+T:"none"}"></span>
          <span class="name">${b(F(s.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${N}">${_}</span>
          <span class="last">last \xB7 ${b(j(s.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(s.url)}</div>
        <div class="admin-wh-card-events">${U}</div>
        ${O}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${T}"></div></div>
            <span class="pct" style="color:${T}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${c.toLocaleString()}</span>
          <span class="counter ${g>0?"fail":"fail-zero"}">\u2717 ${g}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${t}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let s=document.getElementById("wh-log-list");if(!s)return;let t=m.deliveries.filter(function(c){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!c.ok:m.deliveryFilter==="2xx"?c.code&&c.code>=200&&c.code<300:m.deliveryFilter==="5xx"?c.code&&c.code>=500:!0});if(t.length===0){s.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}s.innerHTML=t.map(function(c){let g=c.ts?new Date(c.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",i=c.code?String(c.code):"\u2014",n=c.ok?"var(--hud-lime)":"var(--hud-crimson)",u=c.duration_ms?c.duration_ms>=1e3?(c.duration_ms/1e3).toFixed(1)+"s":c.duration_ms+"ms":"\u2014",v=c.ok?"var(--color-text-strong)":"var(--hud-amber)",I=b(F(c.hook_url||"")),T=(c.retries||0)===0?"\u2014":"\xD7"+c.retries,_=(c.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${c.dropped?" is-dropped":""}">
          <span class="time">${b(g)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${i}</span>
          <span class="dur" style="color:${v}">${b(u)}</span>
          <span class="ep">${I}</span>
          <span class="evt">${b(c.event||"")}</span>
          <span class="retry" style="color:${_}">${T}</span>
        </div>`}).join("")}function o(s){m.selectedHookId=s,w(),e()}function e(){let s=document.querySelector("[data-wh-detail]");if(!s)return;let t=m.hooks.find(function(I){return I.id===m.selectedHookId});if(!t){s.hidden=!0,s.innerHTML="";return}s.hidden=!1;let c=t.enabled!==!1,g=Number(t.last_status)||null,i=c?g&&g>=400||t.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(t.events||[]),u=m.eventCatalog.map(function(I){let T=S(I),_=n.has(T.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+b(T.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+b(T.label)+"</span></label>"}).join(""),v={event:t.events&&t.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:t.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};s.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+i+";box-shadow:0 0 6px "+i+'"></span><span class="name">'+b(F(t.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(t.retry_count!=null?t.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(t.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(v,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(t.id)+'" data-wh-next-enabled="'+(c?"0":"1")+'">'+(c?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(t.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(s){if(s)try{let t=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),c=await t.json();t.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(c.error||ServerI18n.t("testFailed"),!1),setTimeout(x,1500)}catch(t){console.error("Webhook test error:",t),showToast(ServerI18n.t("testFailed"),!1)}}async function a(s,t){if(s)try{let c=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s,enabled:t})}),g=await c.json();if(!c.ok){showToast(g.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let i=m.hooks.find(function(n){return n.id===s});i&&(i.enabled=g.enabled),showToast(g.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),R(),w(),e()}catch(c){console.error("Webhook toggle error:",c),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function r(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let c=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:s})}),g=await c.json();c.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===s&&(m.selectedHookId=null),x()):showToast(g.error||ServerI18n.t("deleteFailed"),!1)}catch(c){console.error("Webhook delete error:",c),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Rt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let h="sec-sounds",y=null,f=[],A=[];async function j(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let o=await l.json();f=o.sounds||[],A=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],A=[]}}async function F(){return j()}async function C(l,o){let e=new FormData;e.append("file",l),e.append("name",o);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),a=await d.json();if(!d.ok)throw new Error(a.error||"Upload failed");return a}async function m(l){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Delete failed");return e}async function M(l){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to add rule");return e}async function D(l){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),e=await o.json();if(!o.ok)throw new Error(e.error||"Failed to delete rule");return e}function x(){let l=document.getElementById("soundsList");if(l){if(f.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",l.appendChild(o);return}l.innerHTML=f.map(function(d){var a=b(d.name),r=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(d.name)+'"><div class="name" title="'+a+'">'+a+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(d.name)+'" min="0" max="100" step="1" value="'+r+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(d.name)+'" style="min-width:32px;text-align:right">'+r+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(d.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var a=d.dataset.name,r=f.find(function(s){return s.name===a});r&&(y&&(y.pause(),y=null),y=new Audio(r.url),y.volume=.5,y.play().catch(function(s){console.warn("Audio preview failed:",s)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var a=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",a),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(a),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",a),!0),await j(),x(),P()}catch(s){window.showToast(s.message,!1)}})});var e={};l.querySelectorAll(".sound-volume-slider").forEach(function(d){var a=d.dataset.name,r=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(a)+'"]');d.addEventListener("input",function(){r&&(r.textContent=d.value+"%"),clearTimeout(e[a]),e[a]=setTimeout(function(){k(a,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(e[a]),k(a,Number(d.value)/100)})})}}async function k(l,o){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),d=await e.json();if(!e.ok){window.showToast(d.error||"Volume update failed",!1);return}var a=f.find(function(r){return r.name===l});a&&(a.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(r){console.warn("[admin-sounds] volume save failed:",r),window.showToast("Network error",!1)}}function P(){let l=document.getElementById("ruleSoundName");if(!l)return;let o=l.value;if(l.innerHTML="",f.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,l.appendChild(e);return}f.forEach(e=>{let d=document.createElement("option");d.value=e.name,d.textContent=e.name,l.appendChild(d)}),o&&[...l.options].some(e=>e.value===o)&&(l.value=o)}function E(){let l=document.getElementById("rulesList");if(l){if(A.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",l.appendChild(o);return}l.innerHTML=A.map(function(e){var d=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),a=Math.round((e.volume!=null?e.volume:1)*100),r=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",a).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(d)+'</div><div class="admin-sounds-rule-detail">'+b(r)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await D(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),E()}catch(d){window.showToast(d.message,!1)}})})}}function S(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),d=o.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let a=e.value.trim();if(!a){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await C(d,a),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",a),!0),o.value="",e.value="",await j(),x(),P()}catch(r){window.showToast(r.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function L(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,a=document.getElementById("ruleVolume"),r=document.getElementById("ruleCooldown");if(o!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let s=parseInt(a.value,10)/100,t=parseInt(r.value,10)||0,c={trigger_type:o,trigger_value:o==="all"?"":e,sound_name:d,volume:Math.max(0,Math.min(1,s)),cooldown:Math.max(0,t)};l.disabled=!0;try{await M(c),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),E()}catch(g){window.showToast(g.message,!1)}finally{l.disabled=!1}})}function R(){let l=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!l||!o)return;function e(){l.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):l.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",e),e()}function $(){let l=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!l||!o||l.addEventListener("input",()=>{o.textContent=l.value+"%"})}function w(){return`
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
    `}async function p(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",w()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([j(),F()]),x(),P(),E(),S(),L(),R(),$()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&!l&&(l=!0,p().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&(l=!0,p().finally(()=>{l=!1}))})})()});var Ot=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let h=/^[a-zA-Z0-9_]{1,32}$/,y=".png,.gif,.webp",f="sec-emojis",A=[];function j(){return`
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
    `}function F($){let w=":"+$.name+":",p=Number($.used)||0,l=p>0?ServerI18n.t("emojisUsedCount",{n:p}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M($.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M($.url)+'" alt="'+M(w)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(w)+'</div><div class="admin-em-v4__tile-meta">'+b(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(w)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M($.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function C($){let w=document.querySelector("[data-em-quota-label]"),p=document.querySelector("[data-em-quota-fill]");if(!w||!p)return;let l=$.length,o=100;w.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:o}),p.style.width=Math.min(100,l/o*100)+"%"}function m($){let w=document.querySelector("[data-em-preview-body]");if(!w)return;if(!$||$.length===0){w.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=$.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${b(o.name)}:</code> \u2192 <img src="${M(o.url)}" alt=":${M(o.name)}:" /></span>`);w.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function M($){return b($)}function D($){var w=document.getElementById("emojiGrid"),p=document.getElementById("emojiCount");w&&(!$||$.length===0?(window.AdminEmpty?(w.innerHTML="",w.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):w.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",p&&(p.textContent="0")):(w.innerHTML=$.map(F).join(""),p&&(p.textContent=String($.length))),C(A),m(A))}function x(){var $=document.getElementById("emojiGrid");if($)if(window.AdminSkeletons){$.innerHTML="";for(var w=0;w<8;w++){var p=document.createElement("div");p.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",l.appendChild(o),p.appendChild(l);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",p.appendChild(e),$.appendChild(p)}}else $.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function k(){try{var $=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!$.ok)throw new Error("HTTP "+$.status);var w=await $.json();A=w.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",A.length||""),P()}catch(l){console.error("[admin-emojis] fetch failed:",l);var p=document.getElementById("emojiGrid");p&&(p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var $=document.getElementById("emojiSearchInput"),w=($&&$.value||"").trim().toLowerCase(),p=w?A.filter(function(l){return(l.name||"").toLowerCase().includes(w)}):A;D(p)}async function E(){var $=document.getElementById("emojiNameInput"),w=document.getElementById("emojiFileInput"),p=document.getElementById("emojiUploadBtn");if(!(!$||!w||!p)){var l=$.value.trim(),o=w.files&&w.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),$.focus();return}if(!h.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),$.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}p.disabled=!0,p.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",l),d.append("emojifile",o);var a=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),r=await a.json();a.ok?(showToast(r.message||ServerI18n.t("emojiUploadFallback")),$.value="",w.value="",await k()):showToast(r.error||ServerI18n.t("uploadFailed"),!1)}catch(s){console.error("[admin-emojis] upload error:",s),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{p.disabled=!1,p.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function S($){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",$),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var p=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$})}),l=await p.json();p.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await k()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function L($){try{await navigator.clipboard.writeText($),showToast(ServerI18n.t("copiedLabel").replace("{label}",$))}catch{var w=document.createElement("textarea");w.value=$,w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),showToast(ServerI18n.t("copiedLabel").replace("{label}",$))}}function R(){var $=document.getElementById("settings-grid");if($){$.insertAdjacentHTML("beforeend",j());var w=document.getElementById("emojiUploadBtn");w&&w.addEventListener("click",E);var p=document.getElementById("emojiNameInput");p&&p.addEventListener("keydown",function(a){a.key==="Enter"&&(a.preventDefault(),E())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",P);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(a){var r=a.target.closest(".emoji-copy-btn");if(r){L(r.dataset.label);return}var s=a.target.closest(".emoji-delete-btn");s&&S(s.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");e&&d&&(["dragenter","dragover"].forEach(function(a){e.addEventListener(a,function(r){r.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(a){e.addEventListener(a,function(r){r.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(a){var r=a.dataTransfer&&a.dataTransfer.files&&a.dataTransfer.files[0];if(r){var s=new DataTransfer;s.items.add(r),d.files=s.files;var t=document.getElementById("emojiNameInput");if(t&&!t.value){var c=r.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");t.value=c.slice(0,32),t.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),x(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var $=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&R()});$.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&R()}})})()});var qt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,h="sec-stickers",y=["png","gif","webp"],f=".gif,.png,.webp",A="__all__",j=[],F=[],C=A;function m(l){return b(l)}function M(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=l?`
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):b(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(l){return l===A?j.length:j.filter(function(o){return o.pack_id===l}).length}function x(){var l=document.getElementById("stickerPackList");if(l){var o='<button type="button" class="admin-stickers-pack'+(C===A?" is-active":"")+'" data-pack="'+A+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(A)+"</span></button>";F.forEach(function(e){var d=e.enabled?"is-success":"is-muted",a="admin-stickers-pack"+(e.id===C?" is-active":""),r=e.id==="default",s=r?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+a+'" data-pack="'+m(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(e.name)+'</span><span class="admin-stickers-pack-count">'+D(e.id)+"</span></button>"+s+"</div>"}),l.innerHTML=o}}function k(l){var o=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+m(l.url)+'" alt="'+m(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(o)+'">'+b(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(o)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(l.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var l=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(l){var e=document.getElementById("stickerSearchInput"),d=(e&&e.value||"").trim().toLowerCase(),a=j.filter(function(s){return!(C!==A&&s.pack_id!==C||d&&!(s.name||"").toLowerCase().includes(d))});if(a.length===0){l.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});r.dataset.emptyKind="stickers",r.style.gridColumn="1 / -1",l.appendChild(r),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=a.map(k).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:a.length}))}}async function E(){var l=document.getElementById("stickerGrid");if(l)try{var[o,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);j=(await o.json()).stickers||[],F=e.ok?(await e.json()).packs||[]:[],C!==A&&!F.some(function(d){return d.id===C})&&(C=A),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),x(),P()}catch(d){console.error("[admin-stickers] fetch failed:",d),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function S(l,o){if(l==="select"){C=o,x(),P();return}if(l==="rename"){var e=F.find(function(I){return I.id===o}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!d)return;try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),r=await a.json();a.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await E()):window.showToast(r.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});s.ok&&await E()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var t=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),c=await t.json();t.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),C===o&&(C=A),await E()):window.showToast(c.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var g=F.slice().sort(function(I,T){return(I.order||0)-(T.order||0)}),i=g.findIndex(function(I){return I.id===o});if(i<0)return;var n=l==="up"?i-1:i+1;if(n<0||n>=g.length)return;var u=g[i],v=g[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:v.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(v.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await E()}catch{}}}async function L(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),C=e.pack&&e.pack.id?e.pack.id:C,await E()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function R(){var l=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!l||!o)){var e=l.files&&l.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=e.name.split(".").pop().toLowerCase();if(y.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var a=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var r=new FormData;r.append("file",e),C&&C!==A&&r.append("pack_id",C);var s=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:r}),t=await s.json();s.ok?(window.showToast(t.message||ServerI18n.t("stickerUploadFallback")),l.value="",await E()):window.showToast(t.error||ServerI18n.t("uploadFailed"),!1)}catch(c){console.error("[admin-stickers] upload error:",c),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=a}}}async function $(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),d=await e.json();e.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await E()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(a){console.error("[admin-stickers] delete error:",a),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function w(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var o=document.createElement("textarea");o.value=l,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function p(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",M());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",R);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",L);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",P);var a=document.getElementById("stickerPackList");a&&a.addEventListener("click",function(s){var t=s.target.closest("[data-pack-action]");if(!t){var c=s.target.closest("[data-pack]");c&&S("select",c.dataset.pack);return}var g=t.dataset.packAction,i=t.dataset.packId;g==="select"&&!i&&(i=t.closest("[data-pack]")&&t.closest("[data-pack]").dataset.pack),S(g,i)});var r=document.getElementById("stickerGrid");r&&r.addEventListener("click",function(s){var t=s.target.closest(".sticker-copy-btn");if(t){w(t.dataset.label);return}var c=s.target.closest(".sticker-delete-btn");c&&$(c.dataset.name)}),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&p()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&p()}})})()});var Ht=ge(()=>{(function(){"use strict";let b="sec-extensions-overview",h=window.AdminUtils.escapeHtml,y=15e3,f=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],A={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},j=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function F(w){let p=w&&!w.stale?w.report:null;if(!p&&w&&w.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!p)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(p.state==="error"){let l=j.includes(p.error)?p.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:p.sent||0,held:p.held||0,blocked:p.blocked||0,skipped:p.late_skipped||0})}}function C(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(m).join("")}
        </div>
      </div>`}function m(w){let p=w.status==="ready",l="is-cold",o=p?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,e=p&&w.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${w.install.steps.map(a=>{if(a.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${h(ServerI18n.t(a.labelKey))} \u2193</a></li>`;let r=a.showOrigin?` <code class="admin-ext-step-code">${h(window.location.origin)}</code>`:"";return`<li>${h(ServerI18n.t(a.labelKey))}${r}</li>`}).join("")}
          </ol>
        </div>`:"",d=w.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
          <span class="admin-ext-status-dot ${l}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${w.color}">${w.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${h(w.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${h(w.version)}</span></div>
          </div>
          ${o}
        </div>
        <p class="admin-ext-desc">${h(ServerI18n.t(w.descKey))}</p>
        ${w.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${h(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${e}
        ${d}
      </article>`}async function M(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;A.fireToken=await w.json(),S()}catch{}}async function D(){try{let w=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!w.ok)return;let p=await w.json();A.sources=Array.isArray(p.sources)?p.sources:[],L()}catch{}}async function x(){try{let w=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!w.ok)return;A.slidoStatus=await w.json(),R()}catch{}}function k(){D(),x()}async function P(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let l=await p.json();A.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},A.plainToken=l.token,S(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(p){console.warn("[ext] regen failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function E(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);A.fireToken=await p.json(),A.plainToken=null,S(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(p){console.warn("[ext] revoke failed:",p),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(){let w=document.querySelector("[data-fire-token-display]"),p=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),o=document.querySelector('[data-fire-token-action="revoke"]');if(!w)return;let e=A.fireToken;A.plainToken?(w.textContent=A.plainToken,w.classList.add("is-plain")):e&&e.has_token?(w.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:e.prefix||""}),w.classList.remove("is-plain")):(w.textContent=ServerI18n.t("extTokenNotSetHint"),w.classList.remove("is-plain")),p&&(p.disabled=!A.plainToken),l&&(l.textContent=e&&e.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),o&&(o.disabled=!(e&&e.has_token))}function L(){let w=new Set(A.sources.map(p=>p.source));document.querySelectorAll(".admin-ext-card").forEach(p=>{let l=f.find(d=>d.id===p.dataset.ext);if(!l)return;let o=p.querySelector("[data-ext-dot]");if(!o)return;let e=l.sourceMatch&&w.has(l.sourceMatch);o.classList.toggle("is-live",!!e),o.classList.toggle("is-cold",!e)})}function R(){let w=document.querySelector("[data-slido-status]");if(!w)return;let p=F(A.slidoStatus);w.textContent=p.text,w.classList.toggle("is-live",p.tone==="is-live"),w.classList.toggle("is-error",p.tone==="is-error");let l=A.slidoStatus&&A.slidoStatus.extension,o=w.closest(".admin-ext-card"),e=o&&o.querySelector("[data-ext-download-step]"),d=o&&o.querySelector("[data-ext-download]"),a=o&&o.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(d&&d.setAttribute("href",l.download_url),e&&(e.hidden=!1),a&&(a.textContent="v"+l.version)):e&&(e.hidden=!0)}function $(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(b))return;w.insertAdjacentHTML("beforeend",C());let p=document.getElementById(b);p&&p.addEventListener("click",l=>{let o=l.target.closest("[data-fire-token-action]");if(!o)return;let e=o.dataset.fireTokenAction;e==="regen"?P():e==="revoke"?E():e==="copy"&&A.plainToken&&window.AdminUtils.copyText(A.plainToken,ServerI18n.t("firetokenToastCopied"))}),M(),A.stopPoll||(A.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:y,tick:k}))}window.AdminExtensions={slidoStatusView:F},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&$()})})()});var jt=ge(()=>{(function(){"use strict";let b="sec-firetoken-overview",h=window.AdminUtils.escapeHtml,y=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function A(){return`
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
    `}async function j(){await Promise.all([F(),C(),m()])}async function F(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;f.token=await w.json(),P()}catch{}}async function C(){try{let w=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!w.ok)return;let p=await w.json();f.usage24h=Array.isArray(p.usage_24h)?p.usage_24h:[],f.ips=Array.isArray(p.ips)?p.ips:[],S(),L(),E()}catch{}}async function m(){try{let w=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!w.ok)return;let p=await w.json();f.audit=Array.isArray(p.events)?p.events:[],R()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);let l=await p.json();f.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},f.plainToken=l.token,P(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let p=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!p.ok)throw new Error("HTTP "+p.status);f.token=await p.json(),f.plainToken=null,P(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function x(w){if(!w)return"\u2014";let p=Date.now()/1e3-w;return p<60?ServerI18n.t("firetokenJustNow"):p<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(p/60)}):p<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(p/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(p/86400)})}function k(w){if(!w)return"\u2014";try{return new Date(w*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function P(){let w=f.token,p=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),o=document.querySelector('[data-ft-action="copy"]'),e=document.querySelector('[data-ft-action="regen"]'),d=document.querySelector('[data-ft-action="revoke"]'),a=document.querySelector('[data-ft-stat="created"]'),r=document.querySelector('[data-ft-stat="rotated"]'),s=document.getElementById("adminFtCurl");if(p&&(f.plainToken?(p.textContent=f.plainToken,p.classList.add("is-plain")):w&&w.has_token?(p.textContent=(w.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",p.classList.remove("is-plain")):(p.textContent=ServerI18n.t("firetokenNotSetHint"),p.classList.remove("is-plain")),l&&(w&&w.enabled&&w.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):w&&w.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),o&&(o.disabled=!f.plainToken),d&&(d.disabled=!(w&&w.has_token)),e&&(e.textContent=w&&w.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),a&&(a.textContent=w?k(w.created_at):"\u2014"),r&&(r.textContent=w?x(w.rotated_at):"\u2014"),s)){let t=f.plainToken?f.plainToken:w&&w.prefix?w.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";s.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${t}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function E(){let w=f.usage24h.map(a=>Number(a)||0),p=w.reduce((a,r)=>a+r,0),l=w.length?Math.max(...w):0,o=document.querySelector('[data-ft-stat="hits"]'),e=document.querySelector('[data-ft-stat="peak"]'),d=document.querySelector("[data-ft-peak-meta]");o&&(o.textContent=p.toLocaleString()),e&&(e.textContent=l.toLocaleString()),d&&(d.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function S(){let w=document.getElementById("adminFtChart24h");if(!w)return;let p=f.usage24h.map(d=>Number(d)||0);if(!p.length){w.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...p),o=12e3,e=l>0?Math.min(100,o/Math.max(l,o)*100):100;w.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${p.map((d,a)=>{let r=l>0?Math.max(2,d/l*100):2;return`<div class="bar ${l>0&&d===l?"is-peak":""}" style="height:${r}%" title="${a.toString().padStart(2,"0")}:00 \u2014 ${d}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(d=>`<span>${String(d).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function L(){let w=document.getElementById("adminFtIps"),p=document.querySelector("[data-ft-ip-count]");if(!w)return;let l=f.ips||[];if(p&&(p.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let o=l[0]?.ip;w.innerHTML=l.map((e,d)=>{let a=d===0,r=e.source==="web"&&(e.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${a?"is-top":""}">
          <span class="ip">${h(e.ip||"?")}</span>
          ${a?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${r?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${h(e.source||"\u2014")}</span>
          <span class="cnt">${e.count||0} hits</span>
          <span class="when">${x(e.last_seen)}</span>
        </div>`}).join("")}function R(){let w=document.getElementById("adminFtAudit");if(!w)return;let p=f.audit||[];if(!p.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},o={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};w.innerHTML=p.map(e=>{let d=o[e.kind]||"is-info",a=l[e.kind]||e.kind,r=e.meta||{},s=r.prefix?` \xB7 prefix=${h(r.prefix)}`:r.enabled!=null?` \xB7 enabled=${r.enabled}`:"";return`
        <div class="admin-ft-audit-row ${d}">
          <span class="ts">${k(e.ts)}</span>
          <span class="kind">${h(a)}</span>
          <span class="detail">${s}</span>
        </div>`}).join("")}function $(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(b))return;w.insertAdjacentHTML("beforeend",A());let p=document.getElementById(b);p&&p.addEventListener("click",l=>{let o=l.target.closest("[data-ft-action]");if(!o)return;let e=o.dataset.ftAction;e==="regen"?M():e==="revoke"?D():e==="copy"&&f.plainToken&&window.AdminUtils.copyText(f.plainToken,ServerI18n.t("firetokenToastCopied"))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:y,tick:j}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&$()})})()});var Ut=ge(()=>{(function(){"use strict";let b="sec-about-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},y="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",A=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],j=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",C={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
              ${j.slice(0,6).map($=>`
                <div class="admin-about-oss-row">
                  <span class="n">${h($.n)}</span>
                  <span class="v">${h($.v)}</span>
                  <span class="l">${h($.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M($){if(!$||$<0)return"\u2014";let w=Math.floor($/86400),p=Math.floor($%86400/3600),l=Math.floor($%3600/60);return w>0?`${w}d ${p}h`:p>0?`${p}h ${l}m`:`${l}m`}function D(){let $=document.querySelector("[data-about-tag]"),w=document.querySelector("[data-about-build]"),p=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if($&&($.textContent=`v${C.appVersion}`),w){let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";w.textContent=`BUILD \xB7 ${a} \xB7 stable channel`,e&&(e.textContent=a)}if(p){let a=C.serverStartedAt?C.serverTime-C.serverStartedAt:0;p.textContent=M(a)}if(l&&(C.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):C.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:C.latestVersion||""}):l.textContent="\u2014",l.style.color=C.isLatest===!0?"var(--hud-lime)":C.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=C.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:x(C.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let a=window.DANMU_CONFIG||{};d.textContent=a.wsPath||"/ws"}}function x($){let w=Number($)||0;if(!w)return"\u2014";let p=String(w).length>12?w:w*1e3,l=(Date.now()-p)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function k($,w){let p=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(a){return parseInt(a,10)||0}),l=p($),o=p(w),e=Math.max(l.length,o.length);for(let d=0;d<e;d++){let a=l[d]||0,r=o[d]||0;if(a>r)return!0;if(a<r)return!1}return!1}async function P({silent:$}={}){$||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let w=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!w.ok)throw new Error("HTTP "+w.status);let l=((await w.json()).tag_name||"").replace(/^v/i,"");C.latestVersion=l,C.lastCheckedAt=Date.now(),C.isLatest=!k(l,C.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:C.lastCheckedAt,latest:l,isLatest:C.isLatest}))}catch{}D(),$||window.showToast&&window.showToast(C.isLatest?ServerI18n.t("aboutToastLatest",{v:C.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(w){$||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:w.message||""}),!1)}}function E(){try{let $=localStorage.getItem(F);if(!$)return;let w=JSON.parse($);C.latestVersion=w.latest,C.lastCheckedAt=Number(w.ts)||0,C.isLatest=!!w.isLatest}catch{}}async function S(){try{let $=await fetch("/admin/metrics",{credentials:"same-origin"});if(!$.ok)return;let w=await $.json();C.serverStartedAt=Number(w.server_started_at)||0,C.serverTime=Number(w.server_time)||Date.now()/1e3,D()}catch{}}function L(){let $=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",w=C.serverStartedAt?C.serverTime-C.serverStartedAt:0,p=(navigator.userAgent||"").slice(0,200),l=[`${y} v${C.appVersion}`,`Channel: ${$}`,`Uptime: ${M(w)}`,`User-Agent: ${p}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function R(){let $=document.getElementById("settings-grid");if(!$||document.getElementById(b))return;$.insertAdjacentHTML("beforeend",m()),C.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",E(),D();let w=document.getElementById(b);w&&w.addEventListener("click",function(p){let l=p.target.closest("[data-about-action]");if(!l)return;let o=l.dataset.aboutAction;o==="copy"?L():o==="check-update"?P({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),S(),setInterval(S,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&R()})})()});var Kt=ge(()=>{(function(){"use strict";let b="admin-setup-wizard-root",h="danmu.setupWizard.completed",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],A=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function j(t){return t?t.label?t.label:t.labelKey?ServerI18n.t(t.labelKey):t.name||t.id||"\u2014":"\u2014"}function F(t){return t?t.descriptionKey?ServerI18n.t(t.descriptionKey):t.description||"":""}let C={open:!1,step:0,themes:A.slice(),activeTheme:A[0].name,selectedTheme:A[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){C.publicUrl=window.location.origin+"/"}function M(){let t=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";t==="setup"&&!C.open?D():t!=="setup"&&C.open&&x({silent:!0})}function D(){C.open=!0,C.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",k()),l()),e(),S(),P()}function x(t){let c=t&&t.silent;C.open=!1,document.body.dataset.setupWizardOpen="";let g=document.getElementById(b);if(g&&g.remove(),!c&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function k(){return`
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
            ${f.map(function(t,c){return`
                <div class="admin-setup-step" data-step-index="${c}">
                  <span class="bullet">${c+1}</span>
                  <span class="lbl">${y(ServerI18n.t(t.labelKey))}</span>
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
      </div>`}function P(){let t=document.getElementById(b);if(!t)return;t.querySelectorAll(".admin-setup-step").forEach(function(I,T){I.classList.toggle("is-done",T<C.step),I.classList.toggle("is-active",T===C.step)}),t.querySelectorAll(".admin-setup-step-sep").forEach(function(I,T){I.classList.toggle("is-done",T<C.step)});let c=t.querySelector("[data-setup-meta]");c&&(c.textContent=ServerI18n.t("setupWizardStepMeta",{current:C.step+1,total:f.length}));let g=t.querySelector('[data-setup-action="prev"]');g&&(g.disabled=C.step===0);let i=t.querySelector('[data-setup-action="next"]');if(i){let I=f[C.step].id;i.textContent=ServerI18n.t("setupWizardNext")}let n=t.querySelector("[data-setup-foot]");n&&(n.hidden=f[C.step].id==="done");let u=t.querySelector("[data-setup-content]");if(!u)return;let v=f[C.step].id;v==="server"?u.innerHTML=E():v==="moderation"?u.innerHTML=L():v==="theme"?u.innerHTML=w():u.innerHTML=p(),o(v)}function E(){let t=C.readiness,c=t?Number(t.overlay_count)||0:null,g=c!==null&&c>0,n=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:C.publicUrl},{ok:g,unknown:c===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:g?ServerI18n.t("setupWizardReadyDisplayOk",{n:c}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(C.activeTheme||C.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:j(C.themes.filter(function(u){return(u.name||u.id)===(C.selectedTheme||C.activeTheme)})[0]||C.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let v=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",I=u.unknown?"?":u.ok?"\u2713":"!",T='<span class="admin-setup-ready-title">'+y(u.title)+'</span><span class="admin-setup-ready-value">'+y(u.value||"")+"</span>",_=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+y(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+v+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+I+"</span>"+T+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${y(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${y(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${n}</div>
      </div>`}async function S(){try{let t=await fetch("/overlay_status",{credentials:"same-origin"});if(!t.ok)throw new Error("HTTP "+t.status);let c=await t.json();C.readiness={overlay_count:Number(c.overlay_count)||0,mode:c.mode||""}}catch{C.readiness=null}C.open&&f[C.step].id==="server"&&P()}function L(){let t=C.moderationRules.map(function(c){return`
        <a class="admin-setup-mod-row" href="#/${c.route}" data-setup-goto="#/${c.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${y(ServerI18n.t(c.labelKey))}</span>
            <span class="admin-setup-mod-desc">${y(ServerI18n.t(c.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${y(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${y(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${y(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${t}</div>
      </div>`}let R=["default","neon","retro","cinema"];function $(){let t={};return(C.themes||[]).forEach(function(c){t[c.name||c.id]=c}),R.map(function(c){let g=A.filter(function(n){return n.name===c})[0],i=t[c];return g?{name:c,label:i&&i.label,labelKey:g.labelKey,descriptionKey:g.descriptionKey,colors:g.colors}:i}).filter(Boolean)}function w(){let t=$();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${t.map(function(c){let g=c.name||c.id||"",i=(C.selectedTheme||C.activeTheme)===g,n=(c.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${i?" is-selected":""}" data-setup-theme="${y(g)}">
                ${i?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${n.map(function(u,v){let I=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${y(u)};font-size:${10+v*2}px;text-shadow:0 0 6px ${y(u)}66;">${I[v]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${y(j(c))}</div>
                <div class="admin-setup-theme-sub">${y(F(c))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function p(){let t=(function(){for(let c=0;c<C.themes.length;c+=1){let g=C.themes[c];if((g.name||g.id)===(C.selectedTheme||C.activeTheme))return j(g)}return C.selectedTheme||C.activeTheme||"\u2014"})();return`
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
      </div>`}function l(){let t=document.getElementById(b);t&&t.addEventListener("click",function(c){if(c.target===t){x();return}let g=c.target.closest("[data-setup-action]");if(g){if(g.dataset.setupAction==="close"){x();return}if(g.dataset.setupAction==="prev"&&C.step>0){C.step-=1,P();return}g.dataset.setupAction==="next"&&a()}})}function o(t){let c=document.getElementById(b);if(c){if(t==="moderation"||t==="done"||t==="server"){if(c.querySelectorAll("[data-setup-goto]").forEach(function(g){g.addEventListener("click",function(){x();let i=g.dataset.setupGoto;i&&(window.location.hash=i)})}),t==="done"){let g=c.querySelector("[data-setup-complete-cta]");g&&g.addEventListener("click",r)}return}if(t==="theme"){c.querySelectorAll("[data-setup-theme]").forEach(function(g){g.addEventListener("click",function(){C.selectedTheme=g.dataset.setupTheme||C.selectedTheme,P()})});return}}}async function e(){try{let t=await fetch("/admin/themes",{credentials:"same-origin"});if(!t.ok)return;let c=await t.json(),g=Array.isArray(c.themes)?c.themes:[];if(!g.length)return;C.themes=g.map(function(i){return{name:i.name||i.id||"",label:i.label||i.display_name||i.name||"",description:i.description||"",colors:i.preview_colors||i.colors||i.palette||A[0].colors}}),C.activeTheme=c.active||C.themes[0]&&C.themes[0].name||C.activeTheme,C.selectedTheme||(C.selectedTheme=C.activeTheme),C.open&&f[C.step].id==="theme"&&P()}catch{}}async function d(){if(!C.selectedTheme||C.selectedTheme===C.activeTheme)return!0;try{let t=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C.selectedTheme})});if(!t.ok)throw new Error("HTTP "+t.status);return C.activeTheme=C.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function a(){if(!(f[C.step].id==="theme"&&!await d())){if(C.step<f.length-1){C.step+=1,P();return}r()}}function r(){try{localStorage.setItem(h,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),x()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){x()},isCompleted:function(){try{return!!localStorage.getItem(h)}catch{return!1}},__setCapabilityForTest:function(){}};function s(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&s()})})()});var Wt=ge(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(S){return String(S).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})},y={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function A(S){if(S.innerHTML="",!window.AdminEmpty){S.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let L=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});L.classList.add("lg:col-span-2"),L.dataset.emptyKind="poll-deepdive",S.appendChild(L)}let j=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(S){return S?new Date(S*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function C(S){if(!S||S.length<2)return"";let L=Math.max.apply(null,S.map(function(l){return l.n}).concat([1])),R=100,$=32,w=R/(S.length-1),p=S.map(function(l,o){let e=(o*w).toFixed(2),d=($-l.n/L*($-2)-1).toFixed(2);return e+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+R+" "+$+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+p.join(" ")+'" /></svg>'}function m(S){let L=S.state||(S.active?"active":"ended"),R=S.question||"\u2014",$=Array.isArray(S.options)?S.options:[],w=function(g){return Number(g.votes!=null?g.votes:g.count)||0},p=$.reduce(function(g,i){return g+w(i)},0),l=L==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(S.ended_at)}),o=(function(){let g=Number(S.started_at)||0;if(!g)return"\u2014";let i=L==="active"?Date.now()/1e3:Number(S.ended_at)||g,n=Math.max(0,Math.floor(i-g));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,d=e>0?Math.round(p/e*100)+"%":"\u2014",a=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:p,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),r=(function(){let g=Array.isArray(S.questions)?S.questions:[],i=0;for(let n of g)i+=Number(n.duplicate_attempts)||0;return g.length||(i=Number(S.duplicate_attempts)||0),i})(),s=$.map(function(g,i){let n=w(g),u=p>0?n/p*100:0,v=j[i%j.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${h(g.label||g.text||g.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:i+1}))}</span>
            <span class="votes">${n} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${v}"></div>
          </div>
        </div>`}).join(""),t=Array.isArray(S.vote_timeline)?S.vote_timeline:[],c=t.length>=2?C(t):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${h(R)}</div>
          <div class="admin-pdd-state">${h(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${p}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${h(a)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${h(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${r}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${$.length?s:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${c}</div>
        </article>
      </div>`}function M(){let S=document.querySelector("[data-pdd-grid]");if(S){if(!y.poll||!y.poll.poll_id){A(S);return}S.innerHTML=m(y.poll)}}async function D(){try{let S=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!S.ok)return;let L=await S.json();y.poll=L,M()}catch{}}function x(){if(!y.poll||!Array.isArray(y.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let S=[["option_label","votes","percentage"]],L=y.poll.options.reduce(function(l,o){return l+(Number(o.votes!=null?o.votes:o.count)||0)},0);y.poll.options.forEach(function(l,o){let e=Number(l.votes!=null?l.votes:l.count)||0,d=L>0?(e/L*100).toFixed(2):"0.00";S.push([l.label||"option_"+(o+1),e,d])});let R=S.map(function(l){return l.map(function(o){let e=String(o);return e.includes(",")||e.includes('"')?'"'+e.replace(/"/g,'""')+'"':e}).join(",")}).join(`
`),$=new Blob([R],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL($),p=document.createElement("a");p.href=w,p.download="poll-"+(y.poll.poll_id||"current")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(w)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function k(){try{let S=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),y.refreshTimer||(y.refreshTimer=setInterval(D,5e3))):y.refreshTimer&&(clearInterval(y.refreshTimer),y.refreshTimer=0)}function E(){let S=document.getElementById("settings-grid");if(!S||document.getElementById(b))return;S.insertAdjacentHTML("beforeend",f());let L=document.getElementById(b);L&&L.addEventListener("click",function(R){let $=R.target.closest("[data-pdd-action]");$&&($.dataset.pddAction==="export-csv"?x():$.dataset.pddAction==="push"&&k())}),D(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&E()})})()});var Gt=ge(()=>{(function(){"use strict";let b="admin-message-drawer-root",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},A=null;function j(d){let a=d.detail&&d.detail.entry;a&&(f.open||(A=document.activeElement),f.entry=a,F(),a.data&&a.data.fingerprint&&D(a.data.fingerprint),x(a))}function F(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",k()),P()),E();let d=document.querySelector("#"+b+" .admin-msgd-v4__close")||document.querySelector("#"+b+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function C(){f.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(b);if(d&&d.remove(),A&&typeof A.focus=="function"&&document.contains(A))try{A.focus({preventScroll:!0})}catch{}A=null}function m(d){if(!f.open)return;if(d.key==="Escape"){C();return}let a=document.activeElement,r=a?(a.tagName||"").toLowerCase():"";if(!(a&&(a.isContentEditable||r==="input"||r==="textarea"||r==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){M(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){M(1),d.preventDefault();return}}}function M(d){if(!f.entry)return;let a=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(a=window.AdminLiveFeed.getEntries()),!a.length)return;let r=a.findIndex(function(c){return c.id===f.entry.id});if(r<0)return;let s=r+-d;if(s<0||s>=a.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let t=a[s];f.entry=t,f.fingerprintRecord=null,x(t),E(),t.data&&t.data.fingerprint&&D(t.data.fingerprint)}async function D(d){try{let a=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!a.ok)return;let r=await a.json(),t=(Array.isArray(r.records)?r.records:[]).find(function(c){return c.fingerprint===d});f.fingerprintRecord=t||null,E()}catch{}}function x(d){let a=d.data&&d.data.fingerprint;if(!a){f.sameFpEntries=[];return}let r=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(r=window.AdminLiveFeed.getEntries()),f.sameFpEntries=r.filter(function(s){return(s.data&&s.data.fingerprint||s.fingerprint||"")===a}).slice(0,8)}function k(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let d=document.getElementById(b);d&&d.addEventListener("click",function(a){let r=a.target.closest("[data-msgd-action]");if(!r)return;a.stopPropagation();let s=r.dataset.msgdAction;s==="close"?C():s==="ban-fp"?w():s==="ban-fp-quick"?$():s==="recall-msg"?l():s==="blacklist-kw"?o():s==="reply"?e():s==="prev"?M(-1):s==="next"&&M(1)})}function E(){let d=document.getElementById(b);if(!d)return;let a=d.querySelector("[data-msgd-body]");a&&(a.innerHTML=S())}function S(){let d=f.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let a=d.data||{},r=a.fingerprint||"\u2014",s=r==="\u2014"?"\u2014":r.slice(0,8),t=r==="\u2014"?"\u2014":r.slice(0,12),c=d.ts?L(d.ts):"\u2014",g=a.nickname||ServerI18n.t("msgDrawerAnonymous"),i=f.fingerprintRecord||{},n=Number(i.message_count)||0,u=Number(i.violation_count)||0,v=f.sameFpEntries||[],I=v.length?Math.round(v.reduce((_,B)=>_+((B.data||B).text||"").length,0)/v.length):(a.text||"").length,T=0;for(let _=0;_<r.length;_++)T=T*31+r.charCodeAt(_)&65535;return T=T%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${T})">${y((g||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${y(g)}</div>
          <div class="admin-msgd-v4__fp">fp:${y(t)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${y(c)}</span>
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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${n||v.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${I}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
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
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${r==="\u2014"?"disabled":""}>${y(ServerI18n.t("msgdBanFpBtn"))}</button>
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
    `}function L(d){try{let a=new Date(d),r=String(a.getHours()).padStart(2,"0"),s=String(a.getMinutes()).padStart(2,"0"),t=String(a.getSeconds()).padStart(2,"0");return r+":"+s+":"+t}catch{return"\u2014"}}function R(d){let a;if(typeof d=="number")a=d*1e3;else if(typeof d=="string")a=new Date(d).getTime();else return"\u2014";if(!a)return"\u2014";let r=(Date.now()-a)/1e3;return r<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(r)}):r<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(r/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(r/86400)})}async function $(d,a,r){let s=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!s)return;let t=parseInt(a||0,10)||0,c=t>0?await window.AdminModeration.banFingerprint(s,t,d):await window.AdminModeration.callBlock("fingerprint",s,d);if(!c.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:c.error||""}),!1);return}let g=r||(t>0?ServerI18n.t("msgDrawerSecondsLabel",{n:t}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:s.slice(0,8),label:g}),!0),C()}async function w(){let d=f.entry&&f.entry.data||{},a=d.fingerprint||"\u2014";if(a==="\u2014")return;let r=a.slice(0,12),s=d.nickname||ServerI18n.t("msgDrawerAnonymous"),t=0;for(let T=0;T<a.length;T++)t=t*31+a.charCodeAt(T)&65535;t=t%360;let c=document.createElement("div");c.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${t})">${y((s||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${y(s)}</div>
          <div class="fp">fp:${y(r)}</div>
          <div class="ip">IP \xB7 ${y(d.ip||"\u2014")} \xB7 ${y(d.user_agent||d.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let g=T=>{c.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),T.classList.add("is-active")};if(c.addEventListener("click",T=>{let _=T.target.closest("[data-ban-duration]");_&&g(_)}),c.addEventListener("keydown",T=>{if(T.key!=="Enter"&&T.key!==" ")return;let _=T.target.closest("[data-ban-duration]");_&&(T.preventDefault(),g(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:c,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(c.querySelector("[data-ban-reason]")||{}).value||"",u=c.querySelector(".admin-bancfm-dchip.is-active"),v=u&&parseInt(u.dataset.banDuration||"0",10)||0,I=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return $(n.trim(),v,I)}function p(){}async function l(){let d=f.entry,a=d&&d.data&&d.data.message_id;if(!a)return;if(!(await window.AdminModeration.recall(a)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),C()}async function o(){let d=f.entry&&f.entry.data&&f.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&C()}async function e(){let d=document.querySelector("[data-msgd-reply]"),a=d?d.value.trim():"";if(a)try{let r=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:a})});if(!r.ok)throw new Error("HTTP "+r.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(r){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:r.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:C},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",j),document.addEventListener("keydown",m))})})()});var zt=ge(()=>{(function(){"use strict";let b="danmu.notifications.read",h="danmu.notifications.archived",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},f={items:[],refreshTimer:0};function A(s){try{let t=localStorage.getItem(s);if(!t)return new Set;let c=JSON.parse(t);return new Set(Array.isArray(c)?c:[])}catch{return new Set}}function j(s,t){try{localStorage.setItem(s,JSON.stringify(Array.from(t)))}catch{}}function F(s){let t=A(b);t.add(s),j(b,t)}async function C(){let s=[m().catch(function(){return[]}),M().catch(function(){return[]}),D().catch(function(){return[]}),x().catch(function(){return[]})],c=(await Promise.all(s)).flat();c.sort(function(g,i){return(i.ts||0)-(g.ts||0)}),f.items=c,L(),w()&&R()}async function m(){let s=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,i){let n=(Number(g.ts)||0)*1e3,u="tok-"+(g.ts||i)+"-"+(g.kind||"x"),v=g.kind||"?",I="info",T=ServerI18n.t("notifTitleFireTokenEvent");if(v==="rotated")I="info",T=ServerI18n.t("notifTitleFireTokenRotated");else if(v==="revoked")I="warn",T=ServerI18n.t("notifTitleFireTokenRevoked");else if(v==="toggled"){let _=g.meta&&g.meta.enabled;I=_?"good":"warn",T=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:I,src:"Fire Token",ts:n,title:T,desc:ServerI18n.t("notifDescEventType",{kind:v})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function M(){let s=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,i){let n=(Number(g.ts)||0)*1e3,u="flt-"+(g.ts||i)+"-"+(g.action||"x")+"-"+i,v=g.action||"match";return{id:u,sev:v==="drop"?"warn":"info",src:"Moderation",ts:n,title:ServerI18n.t("notifTitleFilterHit",{action:v}),desc:ServerI18n.t("notifDescFilterHit",{rule:g.rule_id||"?",text:(g.text||"").slice(0,60)}),raw:g}})}async function D(){let s=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json();return(Array.isArray(t.events)?t.events:[]).map(function(g,i){let n=(Number(g.ts)||0)*1e3,u=String(g.kind||"?");return{id:"wh-"+(g.ts||i)+"-"+u+"-"+i,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:n,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:g.actor||"system"})+(g.meta?" \xB7 "+JSON.stringify(g.meta):""),raw:g}})}async function x(){let s=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!s.ok)return[];let t=await s.json(),c=Array.isArray(t.events)?t.events:[],g=new Set(["auth","broadcast","system","session","sessions"]);return c.filter(function(i){return g.has(String(i.source||""))}).map(function(i,n){let u=(Number(i.ts)||0)*1e3,v=String(i.kind||"?");return{id:"sys-"+(i.ts||n)+"-"+(i.source||"x")+"-"+v+"-"+n,sev:v==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:v}),desc:ServerI18n.t("notifDescSystemEvent",{source:i.source||"?",actor:i.actor||"system"}),raw:i}})}let k="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function E(s){let t=P[s];return t?ServerI18n.t(t.key):s}function S(){let s=A(b),t=A(h);return f.items.filter(c=>!s.has(c.id)&&!t.has(c.id))}function L(){let s=document.querySelector("[data-notif-badge]");if(!s)return;let t=S().length;s.textContent=t>99?"99+":String(t),s.hidden=t===0}function R(){let s=document.getElementById(k);if(!s)return;let t=S().slice(0,20),c=t.length?t.map(g=>{let i=P[g.src];return'<li class="admin-notif__item" data-sev="'+y(g.sev)+'"><div class="admin-notif__text">'+y(g.title)+'</div><div class="admin-notif__meta">'+y(E(g.src))+" \xB7 "+y($(g.ts))+"</div>"+(i?'<button type="button" class="admin-notif__action" data-notif-go="'+y(i.hash)+'" data-notif-id="'+y(g.id)+'">'+y(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+y(ServerI18n.t("notifEmpty"))+"</li>";s.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+y(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+y(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+c+"</ul>"}function $(s){if(!s)return"\u2014";let t=(Date.now()-s)/1e3;return t<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(t)}):t<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(t/60)}):t<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(t/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(t/86400)})}function w(){let s=document.getElementById(k);return!!s&&!s.hidden}function p(){let s=document.getElementById(k);s&&(R(),s.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(C,3e4)))}function l(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&p()}function o(){let s=document.getElementById(k);s&&(s.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function e(){w()?o():p()}function d(){let s=document.querySelector(".admin-dash-topbar-actions");if(!s||document.getElementById("admin-notif-bell"))return;let t=document.createElement("button");if(t.id="admin-notif-bell",t.type="button",t.className="admin-dash-search is-icon-only admin-notif-bell",t.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),t.title=ServerI18n.t("adminRouteTitle_notifications"),t.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',s.insertBefore(t,s.firstChild),!document.getElementById(k)){let c=document.createElement("div");c.id=k,c.className="admin-notif",c.setAttribute("role","dialog"),c.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),c.hidden=!0,document.body.appendChild(c)}L(),l()}function a(){document.addEventListener("click",s=>{if(s.target.closest("#admin-notif-bell")){s.preventDefault(),e();return}let t=s.target.closest("[data-notif-go]");if(t){F(t.dataset.notifId),o(),location.hash=t.dataset.notifGo,L();return}if(s.target.closest("[data-notif-readall]")){S().forEach(c=>F(c.id)),R(),L();return}w()&&!s.target.closest("#"+k)&&o()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&w()&&o()}),window.addEventListener("hashchange",l),l()}function r(){d(),C()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),a(),r()})})()});var Vt=ge(()=>{(function(){"use strict";let b="sec-audit-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},y={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function A(){return`
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
      </div>`}function j(e){if(!e)return"\u2014";try{let d=new Date(Number(e)*1e3),a=String(d.getHours()).padStart(2,"0"),r=String(d.getMinutes()).padStart(2,"0"),s=String(d.getSeconds()).padStart(2,"0");return`${a}:${r}:${s}`}catch{return"\u2014"}}function F(e){let d=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function C(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(e){return f.filterActor==="all"||String(e.actor||"").toLowerCase()===f.filterActor}function M(e){return f.filterSeverity==="all"||F(e)===f.filterSeverity}function D(){return f.events.filter(function(e){return m(e)&&M(e)})}function x(e){let d=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||e.target||""}function k(e,d){let a=e!=null,r=d!=null;if(!a&&!r)return"";let s=a?h(JSON.stringify(e)):"",t=r?h(JSON.stringify(d)):"";return a?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${s}</span> \u2192 <span class="admin-audit-diff-a">${t}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${t}</span></span>`}function P(e){let d=e&&e.meta&&typeof e.meta=="object"?e.meta:{},a=[];e.detail&&a.push(`<span>${h(String(e.detail))}</span>`);let r=k(e.before,e.after);r&&a.push(r);let s=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(c){delete s[c]}),Object.keys(s).length&&a.push(`<code class="admin-ui-code admin-audit-meta-extra">${h(JSON.stringify(s))}</code>`),!a.length){let c=y[e.source]&&y[e.source].label||e.source||"system";a.push(`<span>${h(String(c))}</span>`)}return a.join(" ")}function E(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function S(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let d=D();if(!d.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=d.map(function(a){let r=F(a),s=C(r),t=String(a.actor||"system"),c=x(a);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${r}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${h(j(a.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${s};box-shadow:0 0 6px ${s}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${E(t)}">${h(t)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${h(String(a.action||a.kind||"\u2014"))}</span>
              ${c?`<span class="admin-ui-target admin-audit-target">\u2192 ${h(String(c))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(a)}</div>
          </div>
        </div>`}).join("")}function L(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let d=D().length,a=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,r=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:a,sev:r})}function R(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===f.filterSeverity)})}async function $(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let d=await e.json(),a=Array.isArray(d.events)?d.events.slice():[];a.sort(function(r,s){return Number(s.ts||0)-Number(r.ts||0)}),f.events=a,R(),S(),L()}catch{}}function w(){let e=D();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),a=URL.createObjectURL(d),r=document.createElement("a");r.href=a,r.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(function(){URL.revokeObjectURL(a)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function p(){let e=document.getElementById(b);e&&e.addEventListener("click",function(d){let a=d.target.closest("[data-audit-actor-filter]");if(a){f.filterActor=a.dataset.auditActorFilter||"all",R(),S(),L();return}let r=d.target.closest("[data-audit-severity-filter]");if(r){let s=r.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===s?"all":s,R(),S(),L();return}if(d.target.closest("[data-audit-export]")){w();return}d.target.closest("[data-audit-refresh]")&&$()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?($(),f.refreshTimer||(f.refreshTimer=setInterval($,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function o(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",A()),p(),$(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&o()})})()});var Jt=ge(()=>{(function(){"use strict";let b="sec-audience-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},y=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,A={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function j(n){if(!n)return y[0];let u=0;for(let v=0;v<n.length;v++)u=u*31+n.charCodeAt(v)>>>0;return y[u%y.length]}function F(n){if(!n)return"\u2014";let u=typeof n=="number"?n*1e3:new Date(n).getTime();if(!u)return"\u2014";let v=Math.max(0,(Date.now()-u)/1e3);return v<60?Math.floor(v)+"s":v<3600?Math.floor(v/60)+"m":v<86400?Math.floor(v/3600)+"h":Math.floor(v/86400)+"d"}function C(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function M(){let n=A.search.trim().toLowerCase(),u=A.records.slice();return n&&(u=u.filter(function(v){return String(v.nickname||"").toLowerCase().indexOf(n)!==-1||String(v.hash||"").toLowerCase().indexOf(n)!==-1})),u.sort(function(v,I){return A.sort==="last_seen"?(Number(I.last_seen)||0)-(Number(v.last_seen)||0):(Number(I.msgs)||0)-(Number(v.msgs)||0)}),A.filter==="all"?u:A.filter==="flagged"?u.filter(function(v){return v.state==="flagged"||v.state==="blocked"}):A.filter==="extension"?u.filter(function(v){return v.fingerprint&&(v.fingerprint.indexOf("slido")===0||v.fingerprint.indexOf("ext_")===0)}):u}function D(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let u=A.records,v=u.length,I=u.filter(function(N){return N.state==="flagged"}).length,T=u.filter(function(N){return N.state==="blocked"}).length,_=u.reduce(function(N,U){return N+(Number(U.msgs)||0)},0),B=u.filter(function(N){let U=N.last_seen;if(!U)return!1;let O=typeof U=="number"?U*1e3:new Date(U).getTime();return(Date.now()-O)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${B}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${I}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${T}</div></div>`}function x(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let u=A.records.length,v=A.records.filter(function(I){return I.state==="flagged"||I.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:v})}</button>`}let k="__anon__";function P(n){let u=(n.nickname||"").trim();return!u||u==="\u533F\u540D"}function E(n){let u=n.hash||n.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function S(){let n=[],u=[];return M().forEach(function(v){P(v)?u.push(v):n.push(v)}),u.length&&n.push({_anonGroup:!0,_count:u.length,fingerprint:k,msgs:u.reduce(function(v,I){return v+(Number(I.msgs)||0)},0),blocked:u.reduce(function(v,I){return v+(Number(I.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(v){return v.last_seen||0})),state:u.some(function(v){return v.state==="blocked"})?"blocked":"active"}),n}function L(){let n=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!n)return;let v=S(),I=Math.min(v.length,A.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:I,total:v.length})),v.length===0){n.innerHTML="";let N=window.AdminEmpty.render("audience");N.dataset.emptyKind="audience",n.appendChild(N);return}let T=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=v.slice(0,I).map(function(N){let U=N.fingerprint||"\u2014",O=N.state==="blocked",G=N._anonGroup?ServerI18n.t("audienceAnonymous"):(N.nickname||"").trim(),z=N._anonGroup?"?":G.slice(0,1),ee=j(U);return`
        <div class="admin-aud-row${A.selectedFp===U?" is-selected":""}" data-aud-row data-aud-fp="${h(U)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${ee}">${h(z)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${h(G)}</span>
            ${N._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:N._count})}</span>`:""}
            ${O&&!N._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${N._anonGroup?"\u2014":h(E(N))}</span>
          <span class="col col-msgs">${Number(N.msgs)||0}</span>
          <span class="col col-blocked">${Number(N.blocked)||0}</span>
          <span class="col col-seen">${h(F(N.last_seen))}</span>
          <span class="col col-actions">
            ${N._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${h(U)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),B=v.length>I?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=T+_+B}function R(n){return n&&A.records.find(function(u){return u.fingerprint===n})||null}function $(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],v=Number(n.msgs)||0,I=n.fingerprint||"";n.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),v>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:v})):v>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:v}));let T=A.records.filter(function(U){return U.ip&&n.ip&&U.ip===n.ip}).length;T>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:T})),(I.indexOf("slido")===0||I.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",B="var(--hud-lime)",N="NORMAL";return n.state==="blocked"?(_="blocked",B="var(--hud-crimson)",N="BLOCKED"):n.state==="flagged"||v>=25?(_="high",B="var(--hud-crimson)",N="HIGH RISK"):(v>=15||T>=3)&&(_="mid",B="var(--hud-amber)",N="MID"),{level:_,color:B,label:N,rules:u}}async function w(n){A.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){A.detailMessages=[];return}let v=await u.json(),I=Array.isArray(v.records)?v.records:[],T=Date.now()-300*1e3;A.detailMessages=I.filter(function(_){return(_.fingerprint||"")!==n?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=T}).slice(0,8)}catch{A.detailMessages=[]}finally{A.detailLoading=!1}}function p(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let u=A.selectedFp;if(!u){n.hidden=!0,n.innerHTML="";return}let v=R(u);if(!v){A.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let I=$(v);n.dataset.riskLevel=I.level;let T=j(u),_=!v.nickname||v.nickname==="\u533F\u540D",B=_?ServerI18n.t("audienceAnonymous"):v.nickname,N=_?"?":B.slice(0,1),U="fp:"+(u||"").slice(0,8),O=I.rules.length?I.rules.map(function(z){return"<li>"+h(z)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",G="";A.detailLoading?G='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":A.detailMessages.length===0?G='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":G=A.detailMessages.map(function(z){let ee=z.muted?"MASKED":z.banned?"BLOCKED":"SHOWN",de=z.muted?"var(--hud-amber)":z.banned?"var(--hud-crimson)":"var(--hud-lime)",ae=z.timestamp?new Date(z.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+h(ae)+'</span><span class="m">'+h(z.text||"")+'</span><span class="s" style="color:'+de+'">'+ee+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+C(I.level)+'">'+h(I.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+T+'">'+h(N)+'</span><div><div class="nick">'+h(B)+'</div><div class="fp">'+h(U)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+I.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:I.rules.length})+"</div><ul>"+O+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+G+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+h(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+h(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(v.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+h(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+h(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+h(u)+'" data-aud-flagged="'+(v.is_flagged?"true":"false")+'">'+(v.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+h(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(n){A.selectedFp=n,A.detailMessages=[],p(),w(n).then(p)}async function o(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let u=await n.json();A.records=Array.isArray(u.entries)?u.entries:[],A.serverStats=u&&u.stats||null,D(),x(),L(),A.selectedFp&&p()}catch{}}async function e(n,u,v){if(n)try{let I=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!u,note:v||""})});if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),o()}catch(I){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:I.message||""}),!1)}}async function d(n,u){if(!n||n==="\u2014")return;let v=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(v!==null)try{let I=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:v})});if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),o()}catch(I){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:I.message||""}),!1)}}async function a(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let v=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:v.message||""}),!1)}}async function r(n){if(!(!n||n==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function s(n){if(!(!n||n==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let v=await u.json(),T=(Array.isArray(v.rules)?v.rules:[]).filter(function(B){return B&&B.type==="fingerprint"&&B.pattern===n});if(T.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let B of T)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:B.rule_id||B.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:n.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function t(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let v=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:v.message||""}),!1)}}function c(){let n=document.getElementById(b);n&&(n.addEventListener("input",function(u){let v=u.target.closest("[data-aud-search]");v&&(A.search=v.value||"",A.shown=f,L())}),n.addEventListener("change",function(u){let v=u.target.closest("[data-aud-sort]");v&&(A.sort=v.value,L())}),n.addEventListener("click",function(u){let v=u.target.closest("[data-aud-filter]");if(v){A.filter=v.dataset.audFilter,A.shown=f,x(),L();return}let I=u.target.closest("[data-aud-action='ban']");if(I){u.stopPropagation(),t(I.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){o();return}if(u.target.closest("[data-aud-action='more']")){A.shown+=f,L();return}if(u.target.closest("[data-aud-action='close-detail']")){A.selectedFp=null,p();return}let N=u.target.closest("[data-aud-action='detail-ban']");if(N){t(N.dataset.audFp);return}let U=u.target.closest("[data-aud-action='detail-mask']");if(U){r(U.dataset.audFp);return}let O=u.target.closest("[data-aud-action='detail-safe']");if(O){s(O.dataset.audFp);return}let G=u.target.closest("[data-aud-action='flag']");if(G){u.stopPropagation(),e(G.dataset.audFp,G.dataset.audFlagged!=="true");return}let z=u.target.closest("[data-aud-action='kick']");if(z){u.stopPropagation(),d(z.dataset.audFp);return}let ee=u.target.closest("[data-aud-action='unkick']");if(ee){u.stopPropagation(),a(ee.dataset.audFp);return}let de=u.target.closest("[data-aud-row]");if(!(de&&de.dataset.audFp===k)&&de&&!u.target.closest("button")){l(de.dataset.audFp);return}}))}function g(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),A.refreshTimer||(A.refreshTimer=setInterval(o,15e3))):A.refreshTimer&&(clearInterval(A.refreshTimer),A.refreshTimer=0)}function i(){let n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",m()),c(),o(),g(),window.addEventListener("hashchange",g))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&i()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&i()})})()});var Yt=ge(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],h={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},y=2500,f=0,A=0,j=null;function F(){if(j)return j;let x=document.createElement("div");return x.className="admin-konami-hud",x.setAttribute("aria-hidden","true"),x.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(x),j=x,x}function C(){if(f===0){j&&j.classList.remove("is-on");return}let x=F();x.classList.add("is-on");let k=x.querySelector(".admin-konami-hud-keys");k&&(k.innerHTML=b.map((E,S)=>`<span class="admin-konami-hud-key ${S<f?"is-filled":""}">${h[E]}</span>`).join(""));let P=x.querySelector(".admin-konami-hud-progress");if(P){let E=Math.round(f/b.length*100);P.style.width=E+"%"}}function m(x){f=0,A&&(clearTimeout(A),A=0),x||C()}function M(){A&&clearTimeout(A),A=setTimeout(()=>m(),y)}async function D(){try{let x=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(x){console.warn("[konami] trigger failed:",x&&x.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",x=>{let k=x.target;if(k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable))return;let P=b[f];if(!(x.key===P||P==="b"&&x.key.toLowerCase()==="b"||P==="a"&&x.key.toLowerCase()==="a")){f=x.key===b[0]?1:0,C(),f>0?M():A&&(clearTimeout(A),A=0);return}if(f++,C(),f>=b.length){m(!0),D();return}M()}),window.AdminKonami={trigger:D}})()});var Qt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function h(r){return r==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:r==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:r==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function y(){let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,s=r?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${r?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${s}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${r?`
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
    `}var f=null,A=[];function j(r,s){var t=document.getElementById("adminFontEmptyStateHost");if(!t)return;if((r||[]).some(i=>i.type==="uploaded")){t.innerHTML="";return}t.innerHTML="";var g=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:s?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var i=document.getElementById("adminFontFileInput");i&&i.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});g.dataset.emptyKind="fonts",t.appendChild(g)}function F(r,s){let t=r.weight||"\u2014",c=r.sizeLabel||"\u2014",g=r.foundry||(r.type==="system"?"System":r.type==="default"?"Google / Noto":"Uploaded"),i=r.format||"\u2014",n=r.status||r.type,u=`font-family: "${b(r.name)}", sans-serif;`,v=h(n),I=[];if(s){if(n!=="default"&&I.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(r.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let T=n==="enabled"||n==="system",_=T?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");I.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(r.name)}" data-enabled="${T?"true":"false"}">${_}</button>`)}r.type==="uploaded"&&(I.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(r.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),I.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(r.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(r.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${b(r.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(I.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${I.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(g)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(t)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(c)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(i)}</span><div style="text-align:right">${v}</div></div>`}let C=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(C)return C;try{let r=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return r.ok?(C=(await r.json()).presets||{},C):{}}catch{return{}}}function D(r){return!r||!Number.isFinite(r)?"\u2014":r<1024?r+" B":r<1024*1024?(r/1024).toFixed(1)+" KB":(r/(1024*1024)).toFixed(2)+" MB"}async function x(r){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let s=await M();if(!Object.keys(s).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let t=new Set(["cjk_common","latin"]),c="",g=document.createElement("div");g.className="admin-font-subset-modal-body";let i=()=>{let v=Object.keys(s).map(T=>{let _=m[T]||{label:T,glyphs:"\u2014",estSize:"\u2014"},B=_.labelKey?ServerI18n.t(_.labelKey):_.label,N=t.has(T);return`
          <label class="admin-font-subset-chip${N?" is-active":""}" data-subset-preset="${T}">
            <span class="admin-font-subset-chip-check">${N?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(B)}</span>
            <span class="admin-font-subset-chip-range">${b(s[T])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");g.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(r)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${v}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(c)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,g.querySelectorAll("[data-subset-preset]").forEach(T=>{T.addEventListener("click",_=>{_.preventDefault();let B=T.dataset.subsetPreset;t.has(B)?t.delete(B):t.add(B),i()})});let I=g.querySelector("[data-subset-custom]");I&&I.addEventListener("input",()=>{c=I.value})};if(i(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:g,width:540}))return;let u=[];if(t.forEach(v=>{s[v]&&u.push(s[v])}),c.trim()&&u.push(c.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await k(r,u.join(","))}async function k(r,s){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:r}),!0);let t=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(r)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:s})}),c=await t.json().catch(()=>({}));if(t.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!t.ok){window.showToast?.(c.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:t.status}),!1);return}let g=c.saved_bytes||0,i=Math.round((c.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:r,before:D(c.original_size),after:D(c.new_size),pct:i}),!0),S()}catch(t){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:t.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(r){try{let s=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:r})});if(!s.ok)throw new Error("HTTP "+s.status);f=r,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:r}),!0),S()}catch(s){console.error("[admin-fonts] set default failed:",s),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function E(r,s){try{let t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(r)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!s})});if(!t.ok)throw new Error("HTTP "+t.status);window.showToast(ServerI18n.t(s?"fontsToggleOffToast":"fontsToggleOnToast",{name:r}),!0),S()}catch(t){console.error("[admin-fonts] toggle failed:",t),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function S(){var r=document.getElementById("adminFontList");if(!r)return;let s=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var t=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!t.ok)throw new Error("HTTP "+t.status);var c=await t.json(),g=c.fonts||[];if(A=g,window.AdminTabs?.setTabCount?.("assets","fonts",g.length||""),j(g,s),g.length===0){r.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,p(g);return}r.innerHTML=g.map(i=>F(i,s)).join(""),p(g),l()}catch(i){console.error("[admin-fonts] fetch failed:",i),r.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,j([],s)}}async function L(r){try{let s=await r.slice(0,4).arrayBuffer(),t=new Uint8Array(s);return t[0]===0&&t[1]===1&&t[2]===0&&t[3]===0?"TTF":t[0]===79&&t[1]===84&&t[2]===84&&t[3]===79?"OTF":t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50?"WOFF2":t[0]===116&&t[1]===114&&t[2]===117&&t[3]===101?"TTF":t[0]===116&&t[1]===116&&t[2]===99&&t[3]===102?"TTC":null}catch{return null}}function R(r,s){let t=document.getElementById("adminFontDropStatus");if(t){if(!r){t.textContent="",t.hidden=!0,t.classList.remove("is-good","is-bad");return}t.hidden=!1,t.textContent=r,t.classList.toggle("is-good",s==="good"),t.classList.toggle("is-bad",s==="bad")}}function $(r){let s=document.getElementById("adminFontUploadError");if(!s)return;if(!r){s.hidden=!0,s.innerHTML="";return}s.hidden=!1,s.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(r)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let t=s.querySelector("[data-font-error-retry]");t&&t.addEventListener("click",function(){let c=document.getElementById("adminFontFileInput");c&&c.click()})}async function w(r){if(!r)return;$("");let s=r.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(s)){window.showToast(ServerI18n.t("invalidFileType"),!1),R(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),$(ServerI18n.t("fontsExtNotSupportedFull"));return}if(r.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),R(ServerI18n.t("fontsFileTooLarge"),"bad"),$(ServerI18n.t("fontsFileTooLargeFull"));return}let t=await L(r);if(!t){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),R(ServerI18n.t("fontsMagicInvalid"),"bad"),$(ServerI18n.t("fontsMagicValidationFailed"));return}R(ServerI18n.t("fontsUploadValidated",{magic:t,size:(r.size/1024).toFixed(1)}),"good");try{var c=new FormData;c.append("fontfile",r);var g=await window.csrfFetch("/admin/upload_font",{method:"POST",body:c}),i=await g.json();g.ok?(window.showToast(i.message||ServerI18n.t("fontUploadFallback")),R(ServerI18n.t("fontsUploadedStatus",{filename:r.name}),"good"),$(""),await S()):(window.showToast(i.error||ServerI18n.t("uploadFailed"),!1),R(i.error||ServerI18n.t("uploadFailed"),"bad"),$(i.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),R(ServerI18n.t("fontsNetworkErrorShort"),"bad"),$(ServerI18n.t("fontsNetworkDisconnected"))}}function p(r){let s=document.getElementById("fontsTotalSize");s&&(s.textContent=ServerI18n.t("fontsTotalCount",{n:r.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(r=>{r.addEventListener("click",s=>{if(s.target.closest(".admin-font-delete-btn"))return;let t=r.dataset.font,c=document.getElementById("fontsPreviewFamily"),g=document.getElementById("fontsPreviewHeadline"),i=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");c&&(c.textContent=t);let u=`"${t}", sans-serif`;g&&(g.style.fontFamily=u),i&&(i.style.fontFamily=u),n&&(n.style.fontFamily=u)})})}async function o(){var r=document.getElementById("adminFontFileInput");if(r){var s=r.files&&r.files[0];if(!s){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await w(s),r.value=""}}function e(){let r=document.getElementById("adminFontDrop"),s=document.getElementById("adminFontFileInput");!r||!s||(r.addEventListener("click",t=>{t.target!==s&&s.click()}),r.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),s.click())}),["dragenter","dragover"].forEach(t=>{r.addEventListener(t,c=>{c.preventDefault(),c.stopPropagation(),r.classList.add("is-drag")})}),["dragleave","drop"].forEach(t=>{r.addEventListener(t,c=>{c.preventDefault(),c.stopPropagation(),r.classList.remove("is-drag")})}),r.addEventListener("drop",async t=>{let c=t.dataTransfer&&t.dataTransfer.files;c&&c[0]&&await w(c[0])}))}async function d(r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("deleteBtn")}))try{var t=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(r),{method:"DELETE"}),c=await t.json();t.ok?(window.showToast(c.message||ServerI18n.t("fontDeleteFallback")),await S()):window.showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(g){console.error("[admin-fonts] delete error:",g),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function a(){var r=document.getElementById("settings-grid");if(r){r.insertAdjacentHTML("beforeend",y());var s=document.getElementById("adminFontFileInput");s&&s.addEventListener("change",o),e();var t=document.getElementById("adminFontList");t&&t.addEventListener("click",function(c){var g=c.target.closest(".admin-font-delete-btn");if(g){c.stopPropagation(),d(g.dataset.name);return}var i=c.target.closest(".admin-font-default-btn");if(i){c.stopPropagation(),P(i.dataset.name);return}var n=c.target.closest(".admin-font-toggle-btn");if(n){c.stopPropagation();let v=n.dataset.enabled==="true";E(n.dataset.name,v);return}var u=c.target.closest(".admin-font-subset-btn");u&&(c.stopPropagation(),x(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(c=>c.ok?c.json():null).then(c=>{c&&Array.isArray(c.FontFamily)&&(f=c.FontFamily[3]||null)}).catch(()=>{}).finally(S)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()});r.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()}})})()});var Xt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let h="sec-scheduler",y=5e3,f=null,A=null;function j(a,r,s,t){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${a}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(r)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(s||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${t||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(a){var r=a==="active"?"is-success":a==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+r+'" title="'+m(a)+'"></span>'}function C(a){let r=a.state==="paused",s=a.repeat_count===void 0?"\u2014":a.repeat_count===-1?"\u221E":String(a.repeat_count),t=a.repeat_count>0&&typeof a.remaining=="number"?String(a.repeat_count-a.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(a.id)}">
        ${F(a.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(a.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${a.messages?a.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${a.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(t)}</span>
        <span class="admin-scheduler-job-val">${b(s)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${r?"is-active":"is-warn"}"
            data-job-id="${m(a.id)}" data-action="${r?"resume":"pause"}">
            ${b(ServerI18n.t(r?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(a.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(a){return b(a)}function M(){let a=document.querySelectorAll("#schedulerMessages [data-msg-index]"),r=[];return a.forEach(function(s){let t=s.querySelector(".scheduler-msg-text").value.trim(),c=s.querySelector(".scheduler-msg-color").value,g=parseInt(s.querySelector(".scheduler-msg-size").value,10)||48;t&&r.push({text:t,color:c,size:g})}),r}function D(a,r,s){let t=document.getElementById("schedulerMessages");if(!t)return;let c=t.children.length;t.insertAdjacentHTML("beforeend",j(c,a||"",r||"#ffffff",s||48))}function x(a){let r=a.closest("[data-msg-index]");r&&r.remove();let s=document.getElementById("schedulerMessages");s&&s.querySelectorAll("[data-msg-index]").forEach(function(t,c){t.dataset.msgIndex=c})}async function k(){let a=M();if(a.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let r=parseInt(document.getElementById("schedulerInterval").value,10);if(!r||r<1||r>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let s=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(s)||s<-1||s>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let t=document.getElementById("schedulerCreateBtn");t&&(t.disabled=!0);try{let c=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:a,interval_sec:r,repeat_count:s})}),g=await c.json();c.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await p()):showToast(g.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(c){console.error("Scheduler create error:",c),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{t&&(t.disabled=!1)}}function P(a){return"msg"}function E(a){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[a]||"\u25C8"}function S(a){return a.next_run_at?new Date(a.next_run_at*1e3).getHours():new Date().getHours()}function L(a){if(a.next_run_at){let r=new Date(a.next_run_at*1e3);return String(r.getHours()).padStart(2,"0")+":"+String(r.getMinutes()).padStart(2,"0")}return"--:--"}function R(a){let r=a.id||"job",s=Array.isArray(a.messages)?a.messages.length:null;return"Job #"+r+(s!=null?" \xB7 "+s+" messages":"")}function $(a){let r=document.querySelector("[data-sch-timeline]");if(!r)return;let s=[],t=new Date().getHours();for(let g=0;g<24;g++){let i=g>=Math.max(0,t-1)&&g<=Math.min(23,t+2);s.push('<div class="admin-sch-timeline-hour'+(i?" is-peak":"")+'">'+String(g).padStart(2,"0")+"</div>")}let c=(a||[]).map(function(g){let i=P(g),n=E(i),u=g.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(L(g))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+i+'">'+n+'</span><span class="admin-sch-evt-desc">'+b(R(g))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");r.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+s.join("")+"</div></div>"+(c||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function w(a){let r=document.querySelector("[data-sch-calendar]");if(!r)return;let s=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],t=new Date,c=(t.getDay()+6)%7,g=new Date(t);g.setDate(t.getDate()-c);let i=s.map(function(u,v){let I=new Date(g);return I.setDate(g.getDate()+v),'<div class="admin-sch-calendar-day-head'+(v===c?" is-today":"")+'">'+b(u)+'<span class="date">'+I.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===c?(a||[]).slice(0,5).map(function(I){let T=P(I),_=E(T);return'<span class="admin-sch-cal-chip is-'+T+'">'+b(L(I))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");r.innerHTML='<div class="admin-sch-calendar-head">'+i+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function p(){let a=document.getElementById("schedulerJobsList"),r=document.getElementById("schedulerJobsCount");if(a)try{let s=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!s.ok){a.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",r&&(r.textContent="\u2014");return}let t=await s.json();if(!Array.isArray(t.jobs)){a.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",r&&(r.textContent="\u2014");return}r&&(r.textContent=ServerI18n.t("schItemCount",{n:t.jobs.length})),$(t.jobs),w(t.jobs);let c=document.querySelector("[data-sch-meta]");if(c){let g=new Date().toISOString().slice(0,10);c.textContent=ServerI18n.t("schTodayMeta",{date:g,n:t.jobs.length})}if(t.jobs.length===0){a.innerHTML="";let g=window.AdminEmpty.render("scheduler");g.dataset.emptyKind="scheduler",a.appendChild(g);return}a.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+t.jobs.map(C).join("")}catch(s){console.error("Scheduler fetch error:",s),a.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(a,r){try{let s=await csrfFetch("/admin/scheduler/"+encodeURIComponent(r),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),t=await s.json();s.ok?(showToast(r==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await p()):showToast(t.error||ServerI18n.t("actionFailed"),!1)}catch(s){console.error("Scheduler toggle error:",s),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(a){try{let r=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),s=await r.json();r.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await p()):showToast(s.error||ServerI18n.t("cancelFailed"),!1)}catch(r){console.error("Scheduler cancel error:",r),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let a=document.getElementById("settings-grid");if(!a)return;a.insertAdjacentHTML("beforeend",`
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
    `);let r=document.querySelectorAll("[data-sch-view]");r.forEach(i=>{i.addEventListener("click",()=>{let n=i.dataset.schView;r.forEach(I=>{I.classList.toggle("is-active",I===i),I.setAttribute("aria-selected",I===i?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),v=document.querySelector("[data-sch-calendar]");u&&(u.hidden=n!=="timeline"),v&&(v.hidden=n!=="calendar")})}),D("","#ffffff",48);let s=document.getElementById("schedulerMessages");s&&s.addEventListener("click",function(i){let n=i.target.closest(".scheduler-remove-msg");n&&x(n)});let t=document.getElementById("schedulerAddMsg");t&&t.addEventListener("click",function(){D("","#ffffff",48)});let c=document.getElementById("schedulerCreateBtn");c&&c.addEventListener("click",k);let g=document.getElementById("schedulerJobsList");g&&g.addEventListener("click",function(i){let n=i.target.closest(".scheduler-job-toggle");if(n){l(n.dataset.jobId,n.dataset.action);return}let u=i.target.closest(".scheduler-job-cancel");u&&o(u.dataset.jobId)}),f&&(clearInterval(f),f=null),A||(A=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:y,tick:p}),window.addEventListener("beforeunload",function(){A&&(A(),A=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(h)&&!a){a=!0;try{e()}finally{a=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Zt=ge(()=>{(function(){"use strict";let b="admin-security-v2-page";var h=window.AdminUtils.escapeHtml;let y=null,f=!1,A=!1,j=0;function F(){let i=n=>ServerI18n.t(n);return`
        <div id="${b}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${i("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${i("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${i("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2PwRowLabel")}
              <span class="sub">${i("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${i("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${i("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${i("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${i("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${i("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${i("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${i("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${i("security2CardWsTokenTitle")}" placeholder="${i("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${i("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${i("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${i("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${i("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${i("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${i("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${i("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${i("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${i("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${i("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${i("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${i("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${i("security2WsAuthMigrationPrepare")}</li>
            <li>${i("security2WsAuthMigrationDesktop")}</li>
            <li>${i("security2WsAuthMigrationEnable")}</li>
            <li>${i("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${i("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${i("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${i("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${i("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${i("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${i("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${i("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${i("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2StatusLabel")}
              <span class="sub">${i("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${i("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2RevokeApiTokensTitle")}
              <span class="sub">${i("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${i("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2RevokeFireTokenTitle")}
              <span class="sub">${i("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${i("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i("security2ResetWsTokenTitle")}
              <span class="sub">${i("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${i("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function C(i){if(!i)return 0;let n=0;i.length>=8&&n++,i.length>=12&&n++;let u=(/[a-z]/.test(i)?1:0)+(/[A-Z]/.test(i)?1:0)+(/\d/.test(i)?1:0)+(/[^\w]/.test(i)?1:0);return u>=2&&n++,u>=3&&n++,Math.min(4,n)}function m(i){let n=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!n||!u)return;let v=C(i),I=[0,25,50,75,100],T=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=I[v]+"%",n.className=T[v],u.textContent=_[v]}async function M(i){i.preventDefault();let n=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,v=document.getElementById("sec2-pw-confirm").value;if(!n||!u||!v){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==v){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let I=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:u,confirm_password:v})}),T=await I.json().catch(()=>({}));I.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),T.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(T.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(I){console.error("Password change error:",I),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let i=++j,n=document.getElementById("sec2-wsa-status");A=!0,x(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let v=await u.json();if(i!==j)return!1;y={require_token:!!v.require_token,token:v.token||""},document.getElementById("sec2-wsa-toggle").checked=!!v.require_token,document.getElementById("sec2-wsa-token").value=v.token||"",n.textContent=v.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(v.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,E();let I=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=I?new Date(parseInt(I,10)).toLocaleString():"\u2014",!0}catch{return i!==j||(y=null,x(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{i===j&&(A=!1,x(f||!y),f||E())}}function x(i){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=i}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",i)}function k(){return f||A||!y?!1:(f=!0,++j,x(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,x(A||!y),y&&!A){let i=document.getElementById("sec2-wsa-status");i.textContent=ServerI18n.t(y.require_token?"security2StatusEnabled":"security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(y.require_token?"is-active":""),E()}}function E(){if(f||A||!y)return;document.getElementById("sec2-wsa-disabled-warning").hidden=y.require_token;let i=document.getElementById("sec2-wsa-toggle").checked!==y.require_token||document.getElementById("sec2-wsa-token").value.trim()!==y.token;document.getElementById("sec2-wsa-draft-hint").hidden=!i}function S(i){return String(i||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function L(i){return String(i||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function R(i,n){let u=document.getElementById(i);u&&(u.textContent=n==null||n===""?"\u2014":String(n))}async function $(){try{let i=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await i.json().catch(()=>({}));if(!i.ok)throw new Error(n.error||i.status);let u=n.ip_allowlist||{},v=n.cors||{},I=n.tls||{},T=!!u.enabled,_=Array.isArray(u.entries)?u.entries:[],B=document.getElementById("sec2-ip-dot"),N=document.getElementById("sec2-ip-status-chip"),U=document.getElementById("sec2-ip-toggle"),O=document.getElementById("sec2-ip-entries");B&&(B.classList.toggle("is-lime",T),B.classList.toggle("is-amber",!T)),N&&(N.textContent=T?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),N.className="admin-ui-chip admin-sec-status-chip "+(T?"is-active":"is-warn")),U&&(U.checked=T),O&&(O.value=_.join(`
`)),R("sec2-ip-current",u.current_ip||"\u2014"),R("sec2-ip-status-line",T?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let G=Array.isArray(v.origins)?v.origins:["*"],z=Array.isArray(v.methods)?v.methods:[],ee=document.getElementById("sec2-cors-origins"),de=document.getElementById("sec2-cors-credentials"),ae=document.getElementById("sec2-cors-methods"),J=document.getElementById("sec2-cors-cred-dot");ee&&(ee.value=G.join(`
`)),de&&(de.checked=!!v.supports_credentials),ae&&(ae.value=z.join(", ")),J&&(J.classList.toggle("is-lime",!v.supports_credentials),J.classList.toggle("is-amber",!!v.supports_credentials)),R("sec2-cors-origins-line",G.join(", ")),R("sec2-cors-credentials-line",v.supports_credentials?"true":"false"),R("sec2-cors-methods-line",z.join(", "));let te=I.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:I.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");R("sec2-hsts-status",te)}catch(i){console.error("Security settings load error:",i);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function w(i){let n={};if(i==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:S(document.getElementById("sec2-ip-entries")?.value||"")};else if(i==="cors"){let u=S(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:L(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),v=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await $()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function p(){if(f||A||!y)return;let i=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(i&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(k())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:i,token:n})}),v=await u.json().catch(()=>({}));u.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(v.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function l(){if(!(f||A||!y||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&k())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function o(){let i=document.getElementById("sec2-wsa-token").value;if(!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function e(){let i=document.getElementById("sec2-wsa-token");i.type=i.type==="password"?"text":"password";let n=i.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(n)),u.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function d(i){if(i==="reset-ws"&&(f||A||!y))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:v=>ServerI18n.t("security2ToastApiTokensRevoked",{n:v.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[i];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(i==="reset-ws"&&!k()))try{let v=await window.csrfFetch(n.url,{method:"POST"}),I=await v.json().catch(()=>({}));if(!v.ok){window.showToast&&showToast(I.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(i==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(n.ok(I),!0)}catch(v){console.error("Security danger action error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{i==="reset-ws"&&P()}}function a(){let i=document.getElementById("sec2-session-self-line");if(i){let v=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),I=navigator.platform||navigator.userAgentData?.platform||"",T=v?v[0].split("/")[0]:"Browser";i.textContent=ServerI18n.t("security2SessionSelfLine",{browser:T,platform:I})}let n=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(n&&u){let v=location.protocol==="https:";n.classList.add(v?"is-lime":"is-crimson"),u.textContent=v?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function r(){let i=document.getElementById("sec2-pw-form");i&&i.addEventListener("submit",M);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",p),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",e),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",E),document.getElementById("sec2-wsa-token")?.addEventListener("input",E),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>w("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>w("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let v=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);v&&(v.hidden=!v.hidden,u.setAttribute("aria-expanded",v.hidden?"false":"true"),v.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>d(u.dataset.secDanger)))}),a(),D(),$()}function s(){}function t(){let i=document.querySelector(".admin-dash-grid"),n=document.getElementById(b);if(!i||!n)return;let u=i.dataset.activeRoute||"live",v=i.dataset.activeLeaf||u;n.style.display=u==="system"&&v==="security"?"":"none"}function c(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",F()),r(),t())}function g(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let i=null;function n(){let v=document.querySelector(".admin-dash-grid");!v||i||(i=new MutationObserver(t),i.observe(v,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?c():void 0,n(),t()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",t),document.addEventListener("admin-panel-rendered",()=>{c(),n(),t()}),n(),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g()})()});var en=ge(()=>{(function(){"use strict";let b="admin-backup-v2-page";var h=window.AdminUtils.escapeHtml;function y(){let a=r=>ServerI18n.t(r);return`
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
      </div>`}async function f(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let r=await a.json(),s=["password","token","secret","hash"],t={};Object.keys(r||{}).forEach(u=>{s.some(v=>u.toLowerCase().includes(v))||(t[u]=r[u])});let c=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),g=URL.createObjectURL(c),i=new Date().toISOString().replace(/[:.]/g,"-"),n=document.createElement("a");n.href=g,n.download="danmu-settings-"+i+".json",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(g),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(a){console.error("Settings snapshot error:",a),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let A=null;function j(){A=null;let a=document.getElementById("bk2-settings-apply");a&&(a.disabled=!0,a.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let a=document.getElementById("bk2-settings-upload"),r=document.getElementById("bk2-settings-diff"),s=document.getElementById("bk2-settings-apply"),t=a&&a.files&&a.files[0];if(!t){j(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let c=await t.text(),g=JSON.parse(c),i=g.settings||g;if(!i||typeof i!="object"||Array.isArray(i))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let n=await fetch("/get_settings",{credentials:"same-origin"}),u=n.ok?await n.json():{},v=[];new Set([...Object.keys(u),...Object.keys(i)]).forEach(T=>{let _=JSON.stringify(u[T]),B=JSON.stringify(i[T]);_!==B&&(_===void 0?v.push("+ "+T+": "+B):B===void 0?v.push("- "+T+": "+_):v.push("~ "+T+": "+_+" \u2192 "+B))}),r.textContent=v.length?v.join(`
`):ServerI18n.t("backupNoDiff"),r.hidden=!1,A=i,s&&(s.disabled=!1,s.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:v.length}),!0)}catch(c){console.error("Dry-run error:",c),j(),r.textContent=ServerI18n.t("backupParseFailedDetail",{msg:c&&c.message?c.message:String(c)}),r.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function C(){let a=document.getElementById("bk2-settings-diff"),r=document.getElementById("bk2-settings-apply");if(!A){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:A})}),c=await t.json().catch(()=>({}));if(!t.ok){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(c.details||c,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(c.applied||[]).length+" settings"),A=null,r&&(r.disabled=!0,r.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let a=document.getElementById("bk2-factory-confirm"),r=document.getElementById("bk2-factory-reset");!a||!r||(a.addEventListener("input",()=>{let s=a.value.trim()==="reset";r.classList.toggle("is-ready",s),r.disabled=!s}),r.addEventListener("click",D))}async function D(){let a=document.getElementById("bk2-factory-confirm"),r=document.getElementById("bk2-factory-reset");if((a?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{r&&(r.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),c=await t.json().catch(()=>({}));if(!t.ok||!c.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),r&&(r.disabled=!1);return}a&&(a.value=""),r&&(r.classList.remove("is-ready"),r.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),E()}catch{r&&(r.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function x(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",C),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",S),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",$),document.getElementById("bk2-pack-apply")?.addEventListener("click",w),document.getElementById("bk2-assets-export")?.addEventListener("click",R),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",l),M(),E(),L()}let k=null,P=null;async function E(){let a=document.getElementById("bk2-pack-summary");if(a)try{let r=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!r.ok){a.textContent=ServerI18n.t("backupPreviewUnavailable");return}let s=await r.json(),t=(s.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:t})}catch{a.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function S(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function L(){let a=document.getElementById("bk2-assets-summary");if(a)try{let r=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!r.ok){a.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let s=await r.json(),t=(s.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:s.file_count||0,mb:t})}catch{a.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function R(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function $(){let r=document.getElementById("bk2-pack-upload")?.files?.[0];if(!r){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(r.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let s=new FormData;s.append("file",r);let t=document.getElementById("bk2-pack-diff"),c=document.getElementById("bk2-pack-apply");try{let g=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:s}),i=await g.json().catch(()=>({}));if(!g.ok||!i.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(i.errors||i,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),c&&(c.disabled=!0),k=null;return}if(t){t.hidden=!1;let n=[],u=i.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(i.members?.length||0)+" files:"),(i.members||[]).forEach(v=>{n.push("  "+v.label+"/"+v.path.split("/").slice(1).join("/")+" ("+(v.size||0)+" B)")}),i.skipped?.length&&(n.push(""),n.push("Skipped "+i.skipped.length+" entries:"),i.skipped.forEach(v=>n.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=n.join(`
`)}k=r,c&&(c.disabled=!1,c.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:i.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:g.message||""}),!1)}}async function w(){if(!k){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let r=new FormData;r.append("file",k);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:r})).json().catch(()=>({})),c=document.getElementById("bk2-pack-diff");if(c){c.hidden=!1;let g=[];t.ok?(g.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),g.push(""),g.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&g.push("Skipped "+t.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),g.push(JSON.stringify(t.errors||t,null,2))),c.textContent=g.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:t.applied}),!0),k=null;let g=document.getElementById("bk2-pack-apply");g&&(g.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:s.message||""}),!1)}}async function p(){let r=document.getElementById("bk2-assets-upload")?.files?.[0];if(!r){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(r.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let s=new FormData;s.append("file",r);let t=document.getElementById("bk2-assets-diff"),c=document.getElementById("bk2-assets-apply");try{let g=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:s}),i=await g.json().catch(()=>({}));if(!g.ok||!i.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(i.errors||i,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),c&&(c.disabled=!0),P=null;return}if(t){t.hidden=!1;let n=[],u=i.manifest||{};n.push("manifest version: "+(u.version||"?")),n.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),n.push(""),n.push("Will write "+(i.members?.length||0)+" asset files:"),(i.members||[]).forEach(v=>{n.push("  "+v.path+" ("+(v.size||0)+" B)")}),i.skipped?.length&&(n.push(""),n.push("Skipped "+i.skipped.length+" entries:"),i.skipped.forEach(v=>n.push("  "+v.path+" \u2014 "+v.reason))),t.textContent=n.join(`
`)}P=r,c&&(c.disabled=!1,c.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:i.members?.length||0}),!0)}catch(g){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:g.message||""}),!1)}}async function l(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let r=new FormData;r.append("file",P);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:r})).json().catch(()=>({})),c=document.getElementById("bk2-assets-diff");if(c){c.hidden=!1;let g=[];t.ok?(g.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),g.push(""),g.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&g.push("Skipped "+t.skipped.length+" (see above)")):(g.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),g.push(JSON.stringify(t.errors||t,null,2))),c.textContent=g.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),P=null;let g=document.getElementById("bk2-assets-apply");g&&(g.disabled=!0),L()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(s){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:s.message||""}),!1)}}function o(){let a=document.querySelector(".admin-dash-grid"),r=document.getElementById(b);if(!a||!r)return;let s=a.dataset.activeLeaf||"dashboard";r.style.display=s==="backup"?"":"none"}function e(){let a=document.getElementById("settings-grid");!a||document.getElementById(b)||(a.insertAdjacentHTML("beforeend",y()),x(),o())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&e(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{e(),o()}),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var tn=ge(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",h="/admin/broadcast/status",y="/admin/broadcast/toggle",f={mode:"live"},A=null,j=0,F=!1;async function C(){try{let s=await fetch(h,{credentials:"same-origin"});if(!s.ok)return!1;let t=await s.json();if(t&&(t.mode==="live"||t.mode==="standby"))return A=t.session||null,f=t,!0}catch{}return!1}async function m(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});s.ok&&(j=(await s.json()).overlay_count||0,F=!0)}catch{}}async function M(){await Promise.all([C(),m()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:f.mode==="live",count:F?j:void 0}}))}async function x(s){try{let t=await window.csrfFetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:s})});if(!t.ok){let c=await t.json().catch(()=>({}));throw new Error(c&&c.error?c.error:`HTTP ${t.status}`)}return f=await t.json(),D(),!0}catch(t){return console.warn("[admin-broadcast] toggle failed:",t),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:t&&t.message||""}),!1),!1}}function k(s,t){return ServerI18n.t(s?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:t})}function P(s){return s?"broadcastBigPause":"broadcastBigResume"}async function E(s){let t=await x(s?"live":"standby");return t&&window.showToast&&window.showToast(ServerI18n.t(s?"broadcastToastResumed":"broadcastToastPaused"),!0),p(),t}async function S(){return await C(),m().then(D),E(f.mode!=="live")}async function L(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let t=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});t.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:t.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:E,toggleDisplay:S,clearScreen:L,statusText:k,toggleKey:P};function R(){let s=t=>ServerI18n.t(t);return`
      <div id="${b}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
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
      </div>`}let $=0,w=0;function p(){let s=document.getElementById(b);if(!s)return;let t=f.mode==="live",c=t?"live":"standby",g=(_,B)=>{_&&_.textContent!==B&&(_.textContent=B)};s.dataset.bcState=c;let i=s.querySelector("[data-bc-statedot]");i&&(i.dataset.state=c);let n=s.querySelector("[data-bc-statelabel]");n&&(g(n,k(t,j)),n.dataset.state=c);let u=s.querySelector("[data-bc-big]");u&&(u.dataset.i18n=P(t),g(u,ServerI18n.t(u.dataset.i18n)));let v=A||{},I=!!(v.id||v.name),T=s.querySelector("[data-bc-session-ctx]");T&&(T.hidden=!I),I&&g(s.querySelector("[data-bc-session-id]"),String(v.name||v.id))}function l(){let s=document.getElementById(b);s&&(s.querySelector("[data-bc-big]")?.addEventListener("click",()=>E(f.mode!=="live")),s.querySelector("[data-bc-clear]")?.addEventListener("click",L))}function o(){$||(M().then(p),p(),$=setInterval(()=>{M().then(p)},5e3),w=setInterval(p,1e3))}function e(){$&&(clearInterval($),$=0),w&&(clearInterval(w),w=0)}function d(){let s=document.querySelector(".admin-dash-grid"),t=document.getElementById(b);if(!s||!t)return;let c=s.dataset.activeLeaf||"dashboard",g=c==="overlay"||c==="broadcast";t.style.display=g?"":"none",g?o():e()}function a(){let s=document.getElementById("settings-grid");!s||document.getElementById(b)||(s.insertAdjacentHTML("afterbegin",R()),l(),d())}function r(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&a(),d()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",d),document.addEventListener("admin-panel-rendered",()=>{a(),d()}),a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var nn=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function h(q,W){return window.ServerI18n?window.ServerI18n.t(q,W):q}let y=["keyword","regex","rate_limit","fingerprint"],f={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},A=["block","replace","allow","review"],j={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},F={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},C={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},m=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function M(q){switch(q.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:q.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:q.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:q.action||"block"}}}function D(q,W){return q==="keyword"?W==="block"?"word":"keyword":q==="regex"?W==="replace"?"replace":"regex":q}function x(q){return q==="permanent"||q==="session"?{lifetime:q}:q==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(q,10)}}function k(q){let W=new Date(q*1e3),Q=ve=>String(ve).padStart(2,"0"),oe=`${Q(W.getHours())}:${Q(W.getMinutes())}`,ce=new Date;return W.toDateString()===ce.toDateString()?oe:`${W.getMonth()+1}/${W.getDate()} ${oe}`}function P(q){return q.lifetime==="session"?h("blkLifeSession"):q.lifetime==="timed"&&q.expires_at?h("blkLifeUntil",{time:k(q.expires_at)}):h("msgDrawerPermanent")}function E(q){return q.type==="rate_limit"?h("blkRateSummary",{n:q.max_count||5,s:q.window_sec||60}):q.type==="replace"?`${q.pattern}  \u2192  ${q.replacement||""}`:q.pattern}let S=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function L(q,W){return W.find(Q=>Q.type==="regex"&&Q.pattern===q.pattern&&Q.action===q.action)}let R=[],$="all",w=null,p=!1,l=null,o=0,e=!0;function d(q,W,Q){return q.map(oe=>`<option value="${b(oe)}"${oe===Q?" selected":""}>${b(W(oe))}</option>`).join("")}function a(){return`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(h("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${b(h("modAddWordPlaceholder"))}" aria-label="${b(h("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${b(h("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${b(h("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${b(h("blkMatchLabel"))}">
              ${d(y,q=>h(f[q]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${b(h("blkActionLabel"))}">
              ${d(A,q=>h(j[q]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${b(h("blkLifetimeLabel"))}">
              ${m.map(q=>`<option value="${q.value}">${b(h(q.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${b(h("fltColReplacement"))}" aria-label="${b(h("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${b(h("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${b(h("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${S.map(q=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${q.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${b(h(q.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(y).map(q=>`
              <button type="button" class="seg-item${q==="all"?" is-active":""}" data-scope="${q}">
                ${b(h(q==="all"?"fltChipAll":f[q]))}
                <span class="admin-block-scope-count" data-scope-count="${q}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${b(h("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${b(h("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${b(h("uiColPriority"))} \xB7 ${b(h("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${b(h("sampleText"))}" aria-label="${b(h("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${b(h("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${b(h("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`}function r(q){let W=M(q),Q=b(q.id);return`
      <div class="hud-rule-row admin-block-row${q.enabled?"":" is-off"}" data-rule-id="${Q}" data-rule-type="${b(q.type)}"
        style="${q.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${b(E(q))}</span>
        <span class="admin-block-row__meta">
          <span>${b(h(f[W.match]))}</span>
          <span class="admin-block-row__action" data-action="${b(W.action)}">${b(h(j[W.action]||"fltActBlock"))}</span>
          <span>${b(P(q))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${b(q.enabled?h("enabled"):h("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${Q}" ${q.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${q.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${Q}">${b(h("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${Q}" title="${b(h("deleteRule"))}" aria-label="${b(h("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function s(){let q=document.getElementById("blockRuleList");if(!q)return;let W={all:R.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};R.forEach(ve=>{W[M(ve).match]+=1}),Object.keys(W).forEach(ve=>{let xe=document.querySelector(`[data-scope-count="${ve}"]`);xe&&(xe.textContent=String(W[ve]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",R.length||"");let Q=R.filter(ve=>ve.lifetime==="session").length,oe=document.getElementById("blockRuleClearSession");oe&&(oe.hidden=Q===0);let ce=$==="all"?R:R.filter(ve=>M(ve).match===$);q.innerHTML=ce.map(r).join(""),t(ce.length===0),c()}function t(q){let W=document.querySelector("[data-block-list-group]"),Q=document.querySelector("[data-block-empty]");if(!(!W||!Q)&&(W.hidden=q,Q.hidden=!q,Q.innerHTML="",!!q))if(window.AdminEmpty){let oe=window.AdminEmpty.renderCustom({icon:"\u2298",title:h("blkEmpty"),accent:"var(--color-ink-error)"});oe.dataset.emptyKind="filters",Q.appendChild(oe)}else Q.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${b(h("blkEmpty"))}</div>`}function c(){S.forEach(q=>{let W=document.querySelector(`[data-flt-quick-id="${q.id}"]`);if(!W)return;let Q=L(q,R),oe=!!Q&&Q.enabled!==!1;W.classList.toggle("is-active",oe),W.setAttribute("aria-pressed",oe?"true":"false")})}async function g(){try{let q=await window.csrfFetch("/admin/filters/list");if(!q.ok)throw new Error("HTTP "+q.status);let W=await q.json();R=Array.isArray(W.rules)?W.rules:[],e=W.session_live!==!1}catch(q){console.error("Failed to fetch block rules:",q),window.showToast(h("fetchFiltersFailed"),!1)}s(),i()}function i(){let q=n("blockRuleLifetime");if(!q)return;let W=q.querySelector('option[value="session"]'),Q=e||!!(w&&w.lifetime==="session");W&&(W.hidden=!Q,W.disabled=!Q),!Q&&q.value==="session"&&(q.value="permanent")}function n(q){return document.getElementById(q)}function u(){let q=n("blockRuleMatch").value,W=n("blockRuleAction"),Q=F[q];Array.from(W.options).forEach(oe=>{oe.disabled=Q.indexOf(oe.value)===-1}),Q.indexOf(W.value)===-1&&(W.value=Q[0]),W.disabled=Q.length===1,n("blockRuleInput").placeholder=h(C[q]),n("blockRuleReplacement").hidden=W.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(oe=>{oe.hidden=q!=="rate_limit"})}function v(){let q=n("blockRuleMatch").value,W=n("blockRuleAction").value,Q=n("blockRuleInput").value||"",oe={type:D(q,W),pattern:q==="regex"?Q:Q.trim(),action:W,priority:parseInt(n("blockRulePriority").value,10)||0};return w&&w.type===oe.type&&(oe.type==="fingerprint"||oe.type==="rate_limit")&&(oe.action=w.action||W),oe.type==="replace"&&(oe.replacement=n("blockRuleReplacement").value||""),oe.type==="rate_limit"&&(oe.max_count=parseInt(n("blockRuleMaxCount").value,10)||5,oe.window_sec=parseFloat(n("blockRuleWindowSec").value)||60),Object.assign(oe,x(n("blockRuleLifetime").value))}function I(q,W){let Q=q&&q.code;return h(Q==="duplicate"?"blkErrDuplicate":Q==="invalid_regex"?"blkErrRegex":Q==="unsafe_regex"?"blkErrUnsafe":Q==="regex_timeout"?"blkErrTimeout":Q==="no_session"?"blkErrNoSession":Q==="save_failed"?"blkErrNotSaved":Q==="conflict"?"blkErrConflict":Q==="regex_busy"?"blkErrBusy":W)}function T(){o+=1,w=null,n("blockRuleInput").value="",n("blockRuleReplacement").value="",n("blockRuleMatch").value="keyword",n("blockRuleAction").value="block";let q=n("blockRuleLifetime"),W=q.querySelector('option[value="keep"]');W&&W.remove(),q.value="permanent",n("blockRulePriority").value="0",n("blockRuleSubmit").textContent=h("modAddWordBtn"),n("blockRuleCancel").hidden=!0,u(),i()}function _(q){o+=1,w=q;let W=M(q);n("blockRuleMatch").value=W.match,u(),n("blockRuleAction").value=W.action,n("blockRuleInput").value=q.pattern||"",n("blockRuleReplacement").value=q.replacement||"",n("blockRuleMaxCount").value=String(q.max_count||5),n("blockRuleWindowSec").value=String(q.window_sec||60),n("blockRulePriority").value=String(q.priority||0);let Q=n("blockRuleLifetime"),oe=Q.querySelector('option[value="keep"]');if(oe&&oe.remove(),q.lifetime==="timed"&&q.expires_at){let ce=document.createElement("option");ce.value="keep",ce.textContent=P(q),Q.insertBefore(ce,Q.firstChild),Q.value="keep"}else Q.value=q.lifetime==="session"?"session":"permanent";u(),i(),n("blockRuleSubmit").textContent=h("blkSave"),n("blockRuleCancel").hidden=!1,n("blockRuleInput").focus()}async function B(){if(p)return;let q=v();if(!q.pattern&&q.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),n("blockRuleInput").focus();return}let W=w,Q=o,oe=()=>Q===o,ce=W?"/admin/filters/update":"/admin/filters/add",ve=W?{rule_id:W.id,updates:q}:q,xe=n("blockRuleSubmit");p=!0,l=W?W.id:null,xe&&(xe.disabled=!0);try{let Ae=await window.csrfFetch(ce,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)}),ye=await Ae.json().catch(()=>({}));if(W&&Ae.status===404){oe()&&T(),await g(),window.showToast(h("blkErrGone"),!1);return}if(!Ae.ok){window.showToast(I(ye,W?"updateRuleFailed":"addRuleFailed"),!1);return}oe()&&T(),await g(),W?window.showToast(h("blkUpdated"),!0):window.AdminQuickAction&&ye.rule_id?window.AdminQuickAction.fire({label:h("blkAdded",{pattern:q.pattern||E(q)}),undo:{label:h("histUndo"),run:async()=>{if(!await N(ye.rule_id))throw new Error("remove failed")}}}):window.showToast(h("ruleAdded"),!0)}catch(Ae){console.error("Save block rule error:",Ae),window.showToast(h(W?"updateRuleFailed":"addRuleFailed"),!1)}finally{p=!1,l=null,xe&&(xe.disabled=!1)}}async function N(q){let W=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:q})});return W.ok&&await g(),W.ok}async function U(q){let W=R.find(oe=>oe.id===q);if(await window.HudConfirm?.open({icon:"\u2298",title:h("filtersDeleteTitle"),severity:"danger",bodyText:W?E(W):"",confirmLabel:h("filtersDeleteConfirm")}))try{await N(q)?(w&&w.id===q&&T(),window.showToast(h("ruleDeleted"),!0)):window.showToast(h("deleteRuleFailed"),!1)}catch(oe){console.error("Delete block rule error:",oe),window.showToast(h("deleteRuleFailed"),!1)}}let O={};async function G(q,W){try{let Q=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:q,updates:{enabled:W}})}),oe=await Q.json().catch(()=>({}));if(!Q.ok)return window.showToast(I(oe,"updateRuleFailed"),!1),!1;let ce=R.find(ve=>ve.id===q);return ce&&(ce.enabled=W),c(),!0}catch(Q){return console.error("Toggle block rule error:",Q),window.showToast(h("updateRuleFailed"),!1),!1}}function z(q,W){let Q=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ve=>ve.dataset.ruleId===q);if(!Q)return;let oe=Q.querySelector(".filter-toggle-cb");oe&&(oe.checked=W);let ce=Q.querySelector(".admin-filter-toggle-dot");ce&&(ce.classList.toggle("is-on",W),ce.classList.toggle("is-off",!W)),Q.classList.toggle("is-off",!W),Q.style.opacity=W?"":"0.45"}async function ee(q,W){let Q=O[q]||(O[q]={want:W,busy:!1});if(Q.want=W,Q.busy)return null;Q.busy=!0;try{let oe;do if(oe=Q.want,!await G(q,oe))return await g(),!1;while(Q.want!==oe);return z(q,oe),!0}finally{delete O[q]}}async function de(){let q=R.filter(Q=>Q.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:h("blkClearSessionTitle"),severity:"danger",bodyText:h("blkClearSessionBody",{n:q}),confirmLabel:h("blkClearSession")}))try{let Q=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),oe=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error("HTTP "+Q.status);window.showToast(h("blkClearedSession",{n:oe.removed||0}),!0),await g()}catch(Q){console.error("Clear session rules error:",Q),window.showToast(h("deleteRuleFailed"),!1)}}async function ae(q){let W=S.find(ce=>ce.id===q);if(!W)return;let Q=h(W.key),oe=L(W,R);if(oe&&oe.enabled===!1){await ee(oe.id,!0)&&(window.showToast(h("filtersToastEnabled",{label:Q}),!0),await g());return}if(oe){let ce=await N(oe.id).catch(()=>!1);window.showToast(ce?h("filtersToastDisabled",{label:Q}):h("filtersToastDisableFailed"),ce);return}try{let ce=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:W.pattern,action:W.action,priority:50,lifetime:e?"session":"permanent"})});if(!ce.ok){let ve=await ce.json().catch(()=>({}));window.showToast(h("filtersToastEnableFailed",{msg:I(ve,"addRuleFailed")}),!1);return}window.showToast(h("filtersToastEnabled",{label:Q}),!0),await g()}catch{window.showToast(h("filtersToastEnableFailed",{msg:""}),!1)}}async function J(){let q=n("filterTestText"),W=n("filterTestResult"),Q=(q.value||"").trim();if(!Q){window.showToast(h("sampleTextRequired"),!1),q.focus();return}let oe=v();if(!oe.pattern&&oe.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),n("blockRuleInput").focus();return}W.textContent=h("testing");try{let ce=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:oe,text:Q})}),ve=await ce.json().catch(()=>({}));if(!ce.ok){W.textContent=I(ve,"testError");return}let xe={block:h("blocked"),replace:h("replaced"),allow:h("allowed"),review:h("fltActReview")}[ve.action]||h("noMatch");W.dataset.verdict=ve.action||"pass",W.textContent=ve.action==="replace"?`${xe} \u2192 ${ve.text||""}`:xe}catch(ce){console.error("Test block rule error:",ce),W.textContent=h("testError")}}let te=6,K=[],Y=0,ne=null;function ie(q){let W=new Date(q*1e3),Q=oe=>String(oe).padStart(2,"0");return`${Q(W.getHours())}:${Q(W.getMinutes())}:${Q(W.getSeconds())}`}let re={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function le(){let q=n("filterLiveLog");if(q){if(K.length===0){q.innerHTML=`<div class="admin-block-empty">${b(h("fltNoEvents"))}</div>`;return}q.innerHTML=K.map(W=>{let Q=String(W.action||"").toUpperCase(),oe=re[Q]?h(re[Q]):Q,ce=String(W.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${b(Q)}">
        <span class="admin-filter-log-row__time">${b(ie(W.ts))}</span>
        <span class="admin-filter-log-row__action">${b(oe)}</span>
        <span class="admin-filter-log-row__text">\u300C${b(W.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${b(h("blkLogRule",{pattern:W.pattern||""}))}${ce?" \xB7 "+b(ce):""}</span></span>
      </div>`}).join("")}}async function ue(){try{let q=await fetch(`/admin/filters/events?since=${Y}`,{credentials:"same-origin"});if(!q.ok)return;let W=await q.json();if(!Array.isArray(W.events)||W.events.length===0)return;for(K.unshift(...W.events);K.length>te;)K.pop();Y=W.latest_seq||Y,le()}catch{}}function Te(q){n("blockRuleMatch").addEventListener("change",u),n("blockRuleAction").addEventListener("change",u),n("blockRuleSubmit").addEventListener("click",B),n("blockRuleCancel").addEventListener("click",T),n("blockRuleInput").addEventListener("keydown",oe=>{oe.key==="Enter"&&!oe.isComposing&&(oe.preventDefault(),B())}),n("filterTestBtn").addEventListener("click",J),n("filterTestText").addEventListener("keydown",oe=>{oe.key==="Enter"&&!oe.isComposing&&(oe.preventDefault(),J())}),n("blockRuleClearSession").addEventListener("click",de),q.querySelector("[data-flt-quick]").addEventListener("click",oe=>{let ce=oe.target.closest("[data-flt-quick-id]");ce&&ae(ce.dataset.fltQuickId)});let W=n("blockRuleScope");W.addEventListener("click",oe=>{let ce=oe.target.closest("[data-scope]");ce&&($=ce.dataset.scope,W.querySelectorAll("[data-scope]").forEach(ve=>ve.classList.toggle("is-active",ve===ce)),s())});let Q=n("blockRuleList");Q.addEventListener("change",oe=>{let ce=oe.target.closest(".filter-toggle-cb");if(!ce)return;ee(ce.dataset.ruleId,ce.checked);let ve=ce.closest(".admin-block-row"),xe=ve?.querySelector(".admin-filter-toggle-dot");xe&&(xe.classList.toggle("is-on",ce.checked),xe.classList.toggle("is-off",!ce.checked)),ve&&(ve.style.opacity=ce.checked?"":"0.45")}),Q.addEventListener("click",oe=>{let ce=oe.target.closest(".filter-delete-btn");if(ce)return U(ce.dataset.ruleId);let ve=oe.target.closest(".block-rule-edit");if(ve){let xe=R.find(Ae=>Ae.id===ve.dataset.ruleId);xe&&xe.id!==l&&_(xe)}}),ne&&ne(),ne=window.AdminUtils.pollWhileVisible({el:()=>n("filterLiveLog"),intervalMs:4e3,tick:ue})}function Se(){let q=document.getElementById("settings-grid");if(!q)return;w=null,$="all",p=!1,o+=1,q.insertAdjacentHTML("beforeend",a());let W=document.getElementById("sec-blacklist");Te(W),u(),le(),g()}let Le=!1;document.addEventListener("admin-route-applied",q=>{let W=!!(q.detail&&q.detail.route==="moderation"&&q.detail.leaf==="blacklist");W&&!Le&&document.getElementById("blockRuleList")&&g(),Le=W});function se(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let q=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{q()&&Se()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),q()&&Se()}window.AdminBlockRules={viewOf:M,typeFor:D,lifetimePayload:x,ACTIONS_FOR_MATCH:F,QUICK:S,refresh:g},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se()})()});var an=ge(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml,f=1e4,A=null;function j(S){var L=b();return L[S]!==void 0?L[S]:!1}function F(){return`
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
    `}function C(S){var L=ServerI18n.t("fingerprintState_"+S),R="";return S==="blocked"?R=" is-crimson":S==="flagged"?R=" is-amber":S==="active"?R=" is-cyan":R=" is-mute",'<span class="admin-fp-state'+R+'">'+y(L)+"</span>"}function m(S){if(!S)return"\u2014";try{var L=new Date(S*1e3);return L.toLocaleTimeString()}catch{return String(S)}}function M(S){var L=document.getElementById("adminFingerprintTableWrap");if(L){if(!S||S.length===0){L.innerHTML="";var R=window.AdminEmpty.render("audience");R.dataset.emptyKind="fingerprints",L.appendChild(R);return}var $='<div class="admin-fp-row admin-fp-row--head"><span>'+y(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",w=S.map(function(p){var l=p.blocked|0,o=p.hash||"",e=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+y(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+y(o)+'">fp:'+y(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+y(p.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+y(p.ua||"")+'">'+y(p.ua||"\u2014")+'</span><span class="admin-fp-num">'+(p.msgs|0)+'</span><span class="admin-fp-num">'+(p.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+C(p.state||"active")+'</span><span class="admin-fp-ts">'+y(m(p.last_seen))+"</span></div>"}).join("");L.innerHTML=$+w}}async function D(){var S=document.getElementById("adminFingerprintCount");try{var L=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!L.ok)throw new Error("HTTP "+L.status);var R=await L.json(),$=R.records||[];if(M($),S){var w=R.count||$.length,p=R.flagged!=null?R.flagged:$.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;S.textContent=ServerI18n.t("fpCountSummary",{unique:w,flagged:p})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+y(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function x(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var L=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(L.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var R=await L.json().catch(function(){return{}});window.showToast(R.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch($){console.error("[admin-fingerprints] reset error:",$),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function k(){P(),A=setInterval(function(){var S=document.getElementById("sec-fingerprints");S&&S.offsetParent!==null&&D()},f)}function P(){A&&(clearInterval(A),A=null)}function E(){var S=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(S){S.insertAdjacentHTML("beforeend",F());var L=document.getElementById("adminFingerprintRefreshBtn");L&&L.addEventListener("click",D);var R=document.getElementById("adminFingerprintResetBtn");R&&R.addEventListener("click",x),D(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var S=new MutationObserver(function(){var R=document.getElementById("moderation-grid")||document.getElementById("settings-grid");R&&!document.getElementById("sec-fingerprints")&&E()});S.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var L=document.getElementById("moderation-grid")||document.getElementById("settings-grid");L&&!document.getElementById("sec-fingerprints")&&E()}})})()});var sn=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let h=(t,c)=>{let g=window.ServerI18n?.t?.(t);return g&&g!==t?g:c||t},y=!1;new MutationObserver(()=>{let t=document.getElementById("settings-grid");if(t&&!(document.getElementById("sec-widgets")||y)){y=!0;try{A(t)}finally{y=!1}}}).observe(document.body,{childList:!0,subtree:!0});function A(t){let c=document.createElement("div");c.id="sec-widgets",c.className="admin-widgets-page hud-page-stack lg:col-span-2";let g=location.origin+"/overlay";c.dataset.tpl="B",c.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(h("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${b(h("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${b(h("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${b(h("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${b(h("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${b(h("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${b(h("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(h("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${b(h("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(h("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${b(h("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${b(g)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(h("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(h("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,t.appendChild(c);let i=document.getElementById("widget-add"),n=c.querySelector("[data-ow-addmenu]");i.addEventListener("click",u=>{u.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",u=>{let v=u.target.closest("[data-ow-add]")?.dataset.owAdd;v&&(n.hidden=!0,C(v))}),document.addEventListener("click",u=>{!n.hidden&&!u.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",x),c.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=c.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function j(t,c="GET",g=null){let i={method:c,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(g){let u=document.querySelector('meta[name="csrf-token"]');u&&(i.headers["X-CSRF-Token"]=u.content),i.body=JSON.stringify(g)}return(await fetch("/admin/widgets/"+t,i)).json()}async function F(){try{let t=await j("list");P(t.widgets||[])}catch(t){console.error("[admin-widgets] Load failed:",t)}}async function C(t){let c={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await j("create","POST",{type:t,config:c[t]||{}}),F()}catch(g){console.error("[admin-widgets] Create failed:",g)}}async function m(t){let c=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:c,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await j("delete","POST",{id:t}),F()}catch(i){console.error("[admin-widgets] Delete failed:",i)}}async function M(t,c){try{await j("update","POST",{id:t,config:c}),F()}catch(g){console.error("[admin-widgets] Update failed:",g)}}async function D(t,c,g){try{await j("score","POST",{id:t,team_index:c,delta:g}),F()}catch(i){console.error("[admin-widgets] Score update failed:",i)}}async function x(){let t=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:t,confirmLabel:ServerI18n.t("clearAll")}))try{await j("clear","POST",{}),F()}catch(g){console.error("[admin-widgets] Clear failed:",g)}}let k=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(t){let c=document.getElementById("widgets-list");if(c){if(c.innerHTML="",o(t),t.length===0){let g=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});g.dataset.emptyKind="widgets",c.appendChild(g);return}t.forEach(g=>{c.appendChild($(g))})}}let E={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function S(t){return h("widgetPos_"+String(t||"top-left").replace("-","_"),t||"")}function L(t){let c=t.config||{},g="";t.type==="scoreboard"?g=(c.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):t.type==="ticker"?(g=(c.messages||[])[0]||"",g&&(g=`\u300C${g}\u300D`)):t.type==="label"&&(g=c.text?`\u300C${c.text}\u300D`:"");let i=S(t.position);return g?`${g} \xB7 ${i}`:i}function R(t){return t==="scoreboard"?h("widgetScoreboard"):t==="ticker"?h("widgetTicker"):t==="label"?h("widgetLabel"):t}function $(t){let c=document.createElement("div");c.className="admin-widget-card",t.visible!==!1&&c.classList.add("is-on");let g=document.createElement("button");g.type="button",g.className="admin-widget-summary",g.setAttribute("aria-expanded","false"),g.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b(E[t.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(R(t.type))+'</span><span class="admin-widget-summary-text">'+b(L(t))+"</span>"+(t.visible===!1?'<span class="admin-widget-summary-off">'+b(h("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',c.appendChild(g);let i=document.createElement("div");i.className="admin-widget-card-body",i.hidden=!0,g.addEventListener("click",()=>{i.hidden=!i.hidden,g.setAttribute("aria-expanded",i.hidden?"false":"true"),c.classList.toggle("is-open",!i.hidden)});let n=s(h("widgetPosition"),k,t.position,T=>M(t.id,{position:T}));i.appendChild(n),t.type==="scoreboard"?e(i,t):t.type==="ticker"?d(i,t):t.type==="label"&&a(i,t);let u=document.createElement("div");u.className="admin-widget-card-actions";let v=document.createElement("button");v.type="button",v.className="admin-ui-action admin-widget-card-action",v.textContent=t.visible?h("widgetHide"):h("widgetShow"),v.addEventListener("click",()=>M(t.id,{visible:!t.visible})),u.appendChild(v);let I=document.createElement("button");return I.type="button",I.className="admin-ui-action is-danger admin-widget-card-action",I.textContent=h("remove"),I.addEventListener("click",()=>m(t.id)),u.appendChild(I),i.appendChild(u),c.appendChild(i),c}let w={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function p(t,c){let g="top-left",i=1/0;for(let[n,[u,v]]of Object.entries(w)){let I=t-u/2,T=c-v/2,_=I*I+T*T;_<i&&(i=_,g=n)}return g}function l(t){let c=t.config||{};return t.type==="scoreboard"?(c.teams||[]).map(g=>`${g.name} ${g.score}`).join("  ")||h("widgetScoreboard"):t.type==="ticker"?(c.messages||[])[0]||h("widgetTicker"):t.type==="label"?c.text||h("widgetLabel"):t.type}function o(t){let c=document.querySelector("[data-ow-stage]");if(c){if(c.innerHTML="",!t.length){c.innerHTML='<span class="admin-ow-stage-empty">'+b(h("widgetsStageEmpty"))+"</span>";return}t.forEach(g=>{let i=document.createElement("div");i.className="admin-ow-box is-"+(g.position||"top-left"),g.visible===!1&&i.classList.add("is-off"),i.dataset.owBox=g.id,i.draggable=!0,i.textContent=l(g),i.title=R(g.type),i.addEventListener("dragend",n=>{let u=c.getBoundingClientRect();if(!u.width||!u.height)return;let v=(n.clientX-u.left)/u.width,I=(n.clientY-u.top)/u.height;if(v<0||v>1||I<0||I>1)return;let T=p(v,I);T!==g.position&&M(g.id,{position:T})}),c.appendChild(i)})}}function e(t,c){let g=c.config||{},i=r(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",g.title||"",n=>M(c.id,{title:n}));t.appendChild(i),(g.teams||[]).forEach((n,u)=>{let v=document.createElement("div");v.className="admin-widget-team";let I=document.createElement("input");I.type="color",I.value=n.color||"#38bdf8",I.className="admin-widget-team-color",I.addEventListener("change",()=>{let U=[...g.teams];U[u]={...U[u],color:I.value},M(c.id,{teams:U})}),v.appendChild(I);let T=document.createElement("input");T.type="text",T.value=n.name,T.className="admin-widget-input",T.addEventListener("change",()=>{let U=[...g.teams];U[u]={...U[u],name:T.value},M(c.id,{teams:U})}),v.appendChild(T);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=n.score,v.appendChild(_);let B=document.createElement("button");B.type="button",B.className="admin-widget-step",B.textContent="\u2212",B.addEventListener("click",()=>D(c.id,u,-1)),v.appendChild(B);let N=document.createElement("button");N.type="button",N.className="admin-widget-step",N.textContent="+",N.addEventListener("click",()=>D(c.id,u,1)),v.appendChild(N),t.appendChild(v)})}function d(t,c){let g=c.config||{},i=document.createElement("div");i.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",i.appendChild(n);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=g.speed||60,u.style.flex="1",u.addEventListener("change",()=>{M(c.id,{speed:parseInt(u.value)})}),i.appendChild(u);let v=document.createElement("span");v.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",v.textContent=u.value,u.addEventListener("input",()=>{v.textContent=u.value}),i.appendChild(v),t.appendChild(i);let I=document.createElement("div");I.className="admin-widget-row",I.style.alignItems="flex-start";let T=document.createElement("span");T.className="lbl",T.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",I.appendChild(T);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(g.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let B=_.value.split(`
`).filter(N=>N.trim());M(c.id,{messages:B})}),I.appendChild(_),t.appendChild(I)}function a(t,c){let g=c.config||{};t.appendChild(r(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",g.text||"",i=>M(c.id,{text:i}))),t.appendChild(r(window.ServerI18n?.t?.("size")||"SIZE",String(g.fontSize||24),i=>M(c.id,{fontSize:parseInt(i)||24}),"number"))}function r(t,c,g,i="text"){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let v=document.createElement("input");return v.type=i,v.value=c,v.className="admin-widget-input",v.addEventListener("change",()=>g(v.value)),n.appendChild(v),n}function s(t,c,g,i){let n=document.createElement("div");n.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=t,n.appendChild(u);let v=document.createElement("select");return v.className="admin-widget-select",c.forEach(I=>{let T=document.createElement("option");T.value=I,T.textContent=I,I===g&&(T.selected=!0),v.appendChild(T)}),v.addEventListener("change",()=>i(v.value)),n.appendChild(v),n}})})()});var on=ge(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","notifications","audience","overlay","about"];function h(){let O=window.ADMIN_ROUTES||{},G={};return b.forEach(z=>{let ee=O[z];ee&&ee.title&&(G[z]={title:ee.title,kicker:ee.kicker||z.toUpperCase()})}),G}let y=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function A(){let O=document.querySelector('meta[name="csrf-token"]');return O&&O.content||""}function j(O,G){if(typeof window.csrfFetch=="function")return window.csrfFetch(O,G);let z=Object.assign({credentials:"same-origin"},G||{}),ee=new Headers(G&&G.headers||{});return ee.set("X-CSRF-Token",A()),z.headers=ee,fetch(O,z)}function F(O,G){typeof window.showToast=="function"&&window.showToast(O,G!==!1)}let C=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>j("/effects/reload",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>j("/admin/poll/reset",{method:"POST"}).then(O=>F(O.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),O.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return j("/admin/history/clear",{method:"POST"}).then(G=>F(G.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),G.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,M=null,D=null,x="",k=[],P=[],E=0,S=null,L=null,R=null,$=15e3;function w(O){return String(O??"").replace(/[&<>"']/g,G=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[G])}function p(O,G){if(!G)return 0;let z=String(O||"").toLowerCase(),ee=G.toLowerCase(),de=0,ae=0,J=0,te=0;for(;de<z.length&&ae<ee.length;)z[de]===ee[ae]?(ae++,te++,J+=2+te):te=0,de++;return ae<ee.length?-1:(z.startsWith(ee)&&(J+=10),J)}function l(){let O=document.createElement("div");O.className="admin-cmdk",O.setAttribute("hidden",""),O.setAttribute("aria-hidden","true"),O.innerHTML=`
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
    `,document.body.appendChild(O),m=O,M=O.querySelector(".admin-cmdk-input"),D=O.querySelector(".admin-cmdk-list"),O.addEventListener("click",G=>{G.target.matches("[data-cmdk-close]")&&N()}),M.addEventListener("input",G=>{x=G.target.value,I()}),M.addEventListener("keydown",o),D.addEventListener("click",G=>{let z=G.target.closest("[data-cmdk-idx]");z&&(E=parseInt(z.dataset.cmdkIdx,10)||0,d())})}function o(O){if(O.key==="Escape"){O.preventDefault(),N();return}if(O.key==="ArrowDown"){O.preventDefault(),e(1);return}if(O.key==="ArrowUp"){O.preventDefault(),e(-1);return}if(O.key==="Enter"){O.preventDefault(),d();return}}function e(O){if(!k.length)return;E=(E+O+k.length)%k.length,_();let G=D.querySelector(`[data-cmdk-idx="${E}"]`);G&&G.scrollIntoView({block:"nearest"})}function d(){let O=k[E];if(O){if(O.type==="route")window.location.hash="#/"+O.route,N();else if(O.type==="setting")O.tab&&(document.body.dataset.viewerConfigTab=O.tab),window.location.hash="#/"+O.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let G=document.getElementById(O.section);G&&(G.scrollIntoView({behavior:"smooth",block:"start"}),G.tagName==="DETAILS"&&!G.open&&(G.open=!0))},80),N();else if(O.type==="message")window.location.hash="#/messages",N();else if(O.type==="user")window.location.hash="#/system",setTimeout(()=>{let G=document.getElementById("sec-fingerprints");G&&G.scrollIntoView({behavior:"smooth",block:"start"})},80),N();else if(O.type==="theme")j("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O.id})}).then(G=>{G.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:O.label}),!0),R=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),N();else if(O.type==="action"){try{let G=O.action&&O.action();G&&typeof G.then=="function"&&G.catch(()=>{})}catch{}N()}}}let a={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function r(O){return Object.entries(h()).map(([G,z])=>{let ee=Math.max(p(z.title,O),p(G,O)),de=a[G];return{type:"route",route:G,label:z.title,sub:de?ServerI18n.t(de):"",icon:"\u25C7",score:ee}}).filter(G=>G.score>=0)}function s(O){let G=h()[O];if(!G)return"";let z="adminRouteTitle_"+O,ee=ServerI18n.t(z);return ee!==z?ee:G.title}function t(O){return y.map(G=>{let z=G.labelKey?ServerI18n.t(G.labelKey):G.label;return{type:"setting",route:G.route,tab:G.tab,section:G.section,label:s(G.route.split("/")[0])?`${s(G.route.split("/")[0])} \u203A ${z}`:z,sub:"",icon:"\u2699",score:p(z,O)}}).filter(G=>G.score>=0)}function c(O){return S?(S.records||[]).map(z=>{let ee=z.text||z.message||"",de=z.nickname||z.user||"guest",ae=(z.timestamp||"").slice(11,19)||"\u2014",J=(z.fingerprint||z.fp||"").slice(0,8);return{type:"message",label:`${ee}  \xB7  @${de}`,sub:J?`${ae} \xB7 fp:${J}`:ae,icon:"\u{1F4AC}",score:Math.max(p(ee,O),p(de,O))}}).filter(z=>z.score>=0):[]}function g(O){if(!R)return[];let G=R.records||[],z=R.active||"";return G.map(ee=>{let de=ee.label||ee.display_name||ee.name||"",ae=ee.description||ServerI18n.t("cmdkThemeDefaultDesc"),J=ee.name===z;return{type:"theme",id:ee.name,label:J?ServerI18n.t("cmdkThemeActive",{name:de}):de,sub:ae,icon:"\u{1F3A8}",score:Math.max(p(de,O),p(ee.name||"",O),p(ae,O))}}).filter(ee=>ee.score>=0)}function i(O){return C.map(G=>{let z=ServerI18n.t(G.labelKey),ee=G.subKey?ServerI18n.t(G.subKey):G.sub;return{type:"action",id:G.id,label:z,sub:ee,icon:"\u26A1",action:G.action,score:Math.max(p(z,O),p(G.id,O),p(ee,O))}}).filter(G=>G.score>=0)}function n(O){return L?(L.records||[]).map(z=>{let ee=z.fingerprint||z.fp||z.id||"",de=z.ip||z.last_ip||"",ae=z.nickname||"";return{type:"user",label:ae?`@${ae}  \xB7  ${ee.slice(0,12)}\u2026`:`${ee.slice(0,12)}\u2026`,sub:`user \xB7 ${de||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(p(ee,O),p(de,O),p(ae,O))}}).filter(z=>z.score>=0):[]}async function u(){let O=Date.now(),G=[];(!S||O-S.at>$)&&G.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(z=>z.ok?z.json():null).then(z=>{S={at:O,records:z&&z.records||[]}}).catch(()=>{S={at:O,records:[]}})),(!L||O-L.at>$)&&G.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(z=>z.ok?z.json():null).then(z=>{L={at:O,records:z&&z.records||[]}}).catch(()=>{L={at:O,records:[]}})),(!R||O-R.at>$)&&G.push(fetch("/admin/themes",{credentials:"same-origin"}).then(z=>z.ok?z.json():null).then(z=>{R={at:O,records:z&&z.themes||[],active:z&&z.active||""}}).catch(()=>{R={at:O,records:[],active:""}})),G.length&&await Promise.all(G)}let v={actions:5,pages:5,messages:4};async function I(){await u();let O=x.trim(),G={action:i(O),route:r(O),setting:t(O),theme:g(O),message:c(O),user:n(O)};k=[],P=[],f.forEach(z=>{let ee=z.types.reduce((de,ae)=>de.concat(G[ae]||[]),[]).sort((de,ae)=>ae.score-de.score).slice(0,v[z.id]||5);ee.length&&(P.push({id:z.id,labelKey:z.labelKey,from:k.length,count:ee.length}),k=k.concat(ee))}),E=0,_()}function T(O){return O.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[O.type]||"\xB7"}function _(){if(!k.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let O=[];P.forEach(G=>{O.push(`<li class="admin-cmdk-group" role="presentation">${w(ServerI18n.t(G.labelKey))}</li>`);for(let z=G.from;z<G.from+G.count;z++){let ee=k[z],de=z===E;O.push(`
        <li class="admin-cmdk-row ${de?"is-active":""}"
            data-cmdk-idx="${z}" role="option" aria-selected="${de}">
          <span class="admin-cmdk-icon" aria-hidden="true">${w(T(ee))}</span>
          <span class="admin-cmdk-label">${w(ee.label)}</span>
          <span class="admin-cmdk-sub">${w(ee.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${de?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=O.join("")}function B(){m||l(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),x="",M.value="",I(),setTimeout(()=>M.focus(),20)}function N(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function U(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:B,close:N,isOpen:U,toggle:()=>U()?N():B()}})()});var rn=ge(()=>{(function(){"use strict";let b="sec-sessions-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},y={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(l){if(l=Number(l)||0,l<=0)return"\u2014";var o=Math.floor(l/3600),e=Math.floor(l%3600/60),d=l%60;return o>0?o+"h "+e+"m":e>0?e+"m":d+"s"}function A(l){if(!l)return"\u2014";try{var o=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function j(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+h(ServerI18n.t("sessionsColSession"))+"</span><span>"+h(ServerI18n.t("sessionsColMessages"))+"</span><span>"+h(ServerI18n.t("sessionsColViewers"))+"</span><span>"+h(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function C(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function m(){var l=document.getElementById("admin-sessions-table-body");if(l){if(y.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!y.sessions.length){l.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",l.appendChild(o);return}var e=y.sessions.map(function(d){var a=h(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+a+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+h(C(d))+'<span class="admin-sessions-td-sub">'+h(A(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+h(f(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+a+'">'+h(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=F()+e}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!y.exportId){l.hidden=!0,l.innerHTML="";return}var o=y.sessions.find(function(d){return d.id===y.exportId});if(!o){y.exportId=null,l.hidden=!0,l.innerHTML="";return}var e=M.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===y.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===y.exportFormat?"true":"false")+'">'+h(ServerI18n.t(d.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+h(ServerI18n.t("sessionsExportTitle",{name:C(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+h(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(y.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+h(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+h(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+h(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+h(ServerI18n.t("sessionsDownloadBtn",{fmt:y.exportFormat.toUpperCase()}))+"</button></div>"}}function x(){if(y.exportId){var l="/admin/sessions/"+encodeURIComponent(y.exportId)+"/export?format="+encodeURIComponent(y.exportFormat)+"&include_pii="+(y.exportPii?"1":"0"),o=document.createElement("a");o.href=l,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function k(){var l=y.exportId;if(l)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var e=await o.json(),d=(e.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var a=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(a.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),D()}async function E(){y.loading=!0,m();try{var[l,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],d=[];if(l.ok){var a=await l.json();e=Array.isArray(a.sessions)?a.sessions:[],e.forEach(function(n){n._explicit=!0})}if(o.ok){var r=await o.json();d=Array.isArray(r.sessions)?r.sessions:[]}var s=e.slice(),t=new Set(e.map(function(n){return n.id}));d.forEach(function(n){t.has(n.id)||s.push(n)}),s.sort(function(n,u){var v=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),I=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return I-v});try{var c=await fetch("/admin/session/current",{credentials:"same-origin"});if(c.ok){var g=await c.json();if(g.status==="live"){var i=Object.assign({},g,{id:g.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});s.unshift(i)}}}catch{}y.sessions=s,y.total=s.length}catch(n){console.error("[admin-sessions] fetch error:",n),y.sessions=[],y.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{y.loading=!1,P()}}function S(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function L(l){y.exportId=l,D();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function R(){var l=document.getElementById(b);l&&(l.addEventListener("click",function(o){var e=o.target.closest("[data-sessions-export-open]");if(e){o.stopPropagation(),L(e.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){y.exportId=null,D();return}var d=o.target.closest("[data-sessions-export-fmt]");if(d){y.exportFormat=d.dataset.sessionsExportFmt,D();return}if(o.target.closest("[data-sessions-replay]")){k();return}if(o.target.closest("[data-sessions-download]")){x();return}var a=o.target.closest(".admin-sessions-tr");a&&S(a.dataset.sessionId||null)}),l.addEventListener("change",function(o){var e=o.target.closest("[data-sessions-export-pii]");e&&(y.exportPii=!!e.checked)}),l.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var e=o.target.closest(".admin-sessions-tr");e&&(o.preventDefault(),S(e.dataset.sessionId||null))}}))}function $(){var l=document.querySelector(".admin-dash-grid"),o=document.getElementById(b);if(!(!l||!o)){var e=l.dataset.activeLeaf||"dashboard";o.style.display=e==="sessions"?"":"none"}}function w(){var l=document.getElementById("settings-grid");!l||document.getElementById(b)||(l.insertAdjacentHTML("beforeend",j()),R(),E(),$())}function p(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&w(),$()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",$),document.addEventListener("admin-panel-rendered",function(){w(),$()}),w()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var dn=ge(()=>{(function(){"use strict";let b="sec-session-detail-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},y={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,A={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function j(){let T=window.location.hash||"",_=T.indexOf("?");if(_===-1)return null;let B=T.slice(_+1);return new URLSearchParams(B).get("id")||null}function F(T){if(!T)return"\u2014";try{let _=new Date(T);if(isNaN(_.getTime()))return String(T);let B=N=>String(N).padStart(2,"0");return`${_.getFullYear()}-${B(_.getMonth()+1)}-${B(_.getDate())} ${B(_.getHours())}:${B(_.getMinutes())}:${B(_.getSeconds())}`}catch{return String(T)}}function C(T){if(!T||T<0)return"\u2014";let _=Math.round(Number(T)),B=Math.floor(_/3600),N=Math.floor(_%3600/60),U=_%60;return B>0?`${B}h ${N}m ${U}s`:N>0?`${N}m ${U}s`:`${U}s`}function m(T,_){if(!T||!_)return"";try{let B=Math.max(0,Math.round((new Date(T)-new Date(_))/1e3)),N=Math.floor(B/60),U=B%60;return`+${String(N).padStart(2,"0")}:${String(U).padStart(2,"0")}`}catch{return""}}function M(T){let _=Number(T);return isNaN(_)?"\u2014":_.toLocaleString()}function D(T){if(!T)return"#64748b";let _=0;for(let N=0;N<T.length;N++)_=_*31+T.charCodeAt(N)>>>0;return`hsl(${_%360}, 60%, 60%)`}function x(){return`
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
    `}async function k(T){if(!T){$(ServerI18n.t("sessionDetailErrMissingId"));return}R(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(T)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(T)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let B=await _.json();y.session=B.session||null,y.records=B.records||[],y.density=B.density||[],R(!1),w(),P()}catch(_){R(!1),$(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(y.sessionId)try{let T=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(y.sessionId)}`,{credentials:"same-origin"});if(!T.ok)return;let _=await T.json();y.annotations=Array.isArray(_.annotations)?_.annotations:[],a()}catch{}}function E(){let T=y.session;if(!T)return 0;if(T.duration_s)return Math.round(T.duration_s*1e3);if(T.duration)return Math.round(T.duration*1e3);let _=T.started_at||T.start_time,B=T.ended_at||T.end_time;if(_&&B)try{return Math.max(0,new Date(B)-new Date(_))}catch{return 0}return y.density&&y.density.length?y.density.length*60*1e3:0}function S(T){let _=Date.parse(T||0);if(Number.isNaN(_))return"\u2014";let B=new Date(_),N=U=>String(U).padStart(2,"0");return`${N(B.getHours())}:${N(B.getMinutes())}:${N(B.getSeconds())}`}function L(T){let _=Math.floor(T/1e3),B=Math.floor(_/3600),N=Math.floor(_%3600/60),U=_%60,O=G=>String(G).padStart(2,"0");return B>0?`${O(B)}:${O(N)}:${O(U)}`:`${O(N)}:${O(U)}`}function R(T){y.loading=T;let _=document.querySelector("[data-sd-loading]"),B=document.querySelector("[data-sd-error]");_&&(_.hidden=!T),B&&T&&(B.hidden=!0);let N=document.querySelector("[data-sd-timeline-wrap]");if(N&&window.AdminSkeletons){let U=N.querySelector("[data-sd-timeline-skel]");T?(N.hidden=!1,U||(U=window.AdminSkeletons.chart(),U.setAttribute("data-sd-timeline-skel","1"),N.appendChild(U))):U&&U.remove()}}function $(T){y.error=T;let _=document.querySelector("[data-sd-error]"),B=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),B&&(B.textContent=T),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(N){let U=document.querySelector(`[${N}]`);U&&(U.hidden=!0)})}function w(){p(),l(),o(),d(),a();let T=document.querySelector("[data-sd-error]");T&&(T.hidden=!0)}function p(){let T=y.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let B=document.querySelector("[data-sd-session-id]"),N=document.querySelector("[data-sd-meta-start]"),U=document.querySelector("[data-sd-meta-duration]"),O=document.querySelector("[data-sd-title]"),G=T&&(T.session_id||T.id)||y.sessionId||"\u2014";B&&(B.textContent=G),N&&(N.textContent=F(T&&(T.started_at||T.start_time))),U&&(U.textContent=C(T&&(T.duration_s||T.duration))),O&&(O.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(G).slice(-8)}))}function l(){let T=y.session;if(!T)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let B=function(G,z,ee){let de=document.querySelector(`[data-sd-stat="${G}"]`);de&&(de.textContent=z);let ae=document.querySelector(`[data-sd-stat-sub="${G}"]`);ae&&(ae.textContent=ee||"")};B("msg_count",M(T.msg_count)),B("viewer_count",M(T.viewer_count));let N=Array.isArray(y.density)?y.density:[];if(N.length){let G=0,z=0;N.forEach(function(ae,J){ae>G&&(G=ae,z=J)});let ee=Date.parse(T.started_at||T.start_time||0),de="";if(!Number.isNaN(ee)){let ae=new Date(ee+z*6e4),J=te=>String(te).padStart(2,"0");de=`${J(ae.getHours())}:${J(ae.getMinutes())}`}B("peak",M(G),de)}else B("peak","\u2014","");let U=Number(T.blocked_count)||0;B("blocked",M(U));let O=document.querySelector("[data-sd-blocked-btn]");O&&(O.textContent=ServerI18n.t("sessionDetailStatBlocked")+(U?" "+U:""),O.disabled=U===0)}function o(){let T=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),B=document.querySelector("[data-sd-timeline-axis]"),N=document.querySelector("[data-sd-peak-label]");if(!T||!_||!B)return;let U=y.density;if(!U||U.length===0){T.hidden=!0;return}T.hidden=!1;let O=Math.max(1,...U),G=0;U.forEach(function(te,K){te>U[G]&&(G=K)});let z=U.map(function(te,K){let Y=Math.max(2,Math.round(te/O*100));return`<div class="admin-sd-bar${K===G?" is-peak":""}" style="height:${Y}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:te,minute:K+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:te})}"></div>`}).join("");_.innerHTML=z;let ee=y.session,de=F(ee&&(ee.started_at||ee.start_time)).slice(11,16)||"00:00",ae=F(ee&&(ee.ended_at||ee.end_time)).slice(11,16)||"",J=U.length>2?`+${Math.round(U.length/2)}min`:"";B.innerHTML=`
      <span class="admin-sd-axis-label">${h(de)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${h(J)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${h(ae)}</span>
    `,N&&(N.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:U[G],minute:G}))}function e(){let T=(y.msgQuery||"").trim().toLowerCase();return y.records.filter(function(_){let B=(_.status||"shown")==="blocked";return y.msgFilter==="blocked"&&!B?!1:T?String(_.text||"").toLowerCase().indexOf(T)!==-1||String(_.nickname||"").toLowerCase().indexOf(T)!==-1:!0})}function d(){let T=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!T||!_)return;if(!y.records.length){T.hidden=!0;return}T.hidden=!1;let B=e().slice(0,300);if(!B.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+h(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=B.map(function(N){let U=(N.status||"shown")==="blocked",O=D(N.fingerprint||N.fp||""),G=S(N.timestamp||N.created_at),z=String(N.nickname||"").trim();return`
        <div class="admin-sd-msg-row${U?" is-blocked":""}">
          <span class="admin-sd-msg-time">${h(G)}</span>
          <span class="admin-sd-msg-dot" style="background:${O}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${h(N.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${h(ServerI18n.t("deliveryStatus_"+(N.status||"shown")))}
            ${N.delivery_reason?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("deliveryReason_"+N.delivery_reason))}</span>`:""}
            ${U&&N.blockedBy?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("sessionDetailBlockedBy",{rule:N.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${h(z||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function a(){let T=y.annotations||[],_=E(),B=document.querySelector("[data-sd-ann-count]");B&&(B.textContent=T.length?`${T.length} ANNOTATIONS`:"");let N=document.querySelector("[data-sd-ann-head]");N&&(N.textContent=T.length?`ANNOTATIONS \xB7 ${T.length}`:"ANNOTATIONS");let U=document.querySelector("[data-sd-ann-layer]");U&&(!_||T.length===0?U.innerHTML="":U.innerHTML=T.map(function(z){let ee=A[z.label]||A.note,de=Math.min(100,Math.max(0,z.ts_ms/_*100)),ae=z.id===y.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${ee.shape}${ae?" is-active":""}"
              data-sd-ann-marker="${h(z.id)}"
              style="left:${de.toFixed(2)}%;--ann-color:${ee.color}"
              title="${h(ee.label)} \xB7 ${L(z.ts_ms)}"
              aria-label="${h(ee.label)} at ${L(z.ts_ms)}: ${h(z.note||"")}">
              ${ee.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${ae?`<span class="admin-sd-ann-tip"><span style="color:${ee.color}">${ee.icon}</span> ${h((z.note||"").slice(0,40))}${(z.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let O=document.querySelector("[data-sd-ann-legend]");O&&(O.innerHTML=Object.keys(A).map(function(z){let ee=A[z],de=ee.shape==="square"?"2px":ee.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${ee.color};border-radius:${de}"></span>
          <span class="admin-sd-ann-legend-label">${ee.label}</span>
        </span>`}).join(""));let G=document.querySelector("[data-sd-ann-list]");if(G){if(T.length===0){G.innerHTML="";let z=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});z.dataset.emptyKind="session-annotations",G.appendChild(z);return}G.innerHTML=T.map(function(z){let ee=A[z.label]||A.note,de=z.id===y.activeAnnId,J=(z.note||"").length>80?(z.note||"").slice(0,80)+"\u2026":z.note||"";return`
        <div class="admin-sd-ann-row${de?" is-active":""}" data-sd-ann-row="${h(z.id)}">
          <span class="admin-sd-ann-ts" style="color:${ee.color}">${L(z.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${ee.color}">${ee.icon} ${ee.label}</span>
          <span class="admin-sd-ann-note">${h(J)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${h(z.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function r(T){if(!y.sessionId)return;let _=window.HudConfirm;if(!_){let ee=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:L(T)}),"");ee!=null&&ee.trim()&&s(T,"note",ee.trim());return}let N="highlight",U="",O=document.createElement("div");O.className="admin-sd-ann-modal-body",O.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${L(T)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(A).map(function(ee){let de=A[ee];return`
              <button type="button" class="admin-sd-ann-modal-lbl${ee==="highlight"?" is-active":""}"
                data-ann-label="${ee}" style="--ann-color:${de.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${de.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${de.label}</span>
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
      </div>`,O.addEventListener("click",function(ee){let de=ee.target.closest("[data-ann-label]");de&&(N=de.dataset.annLabel,O.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(ae){ae.classList.toggle("is-active",ae===de)}))});let G=O.querySelector("[data-ann-modal-note]"),z=O.querySelector("[data-ann-modal-counter]");G.addEventListener("input",function(){U=G.value,z.textContent=`${U.length} / 280`}),setTimeout(function(){G&&G.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:O,width:460}).then(function(ee){ee&&s(T,N,G.value.trim())})}async function s(T,_,B){if(y.sessionId)try{let N=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:y.sessionId,ts_ms:Math.max(0,Math.round(T)),label:_||"note",note:B||""})});if(!N.ok)throw new Error(`HTTP ${N.status}`);let U=await N.json();U.annotation&&(y.annotations.push(U.annotation),y.annotations.sort(function(O,G){return O.ts_ms-G.ts_ms}),y.activeAnnId=U.annotation.id,a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(N){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:N.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function t(T){if(T)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(T)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);y.annotations=y.annotations.filter(function(B){return B.id!==T}),y.activeAnnId===T&&(y.activeAnnId=null),a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function c(T){let _=document.querySelector("[data-sd-timeline-inner]"),B=document.querySelector("[data-sd-ann-hover]");if(!_||!B)return;let N=_.getBoundingClientRect();if(!N.width)return;let U=T.clientX-N.left,O=Math.min(1,Math.max(0,U/N.width)),G=E();if(!G){B.hidden=!0;return}let z=Math.round(O*G);y.hoverTsMs=z,B.hidden=!1,B.style.left=`${(O*100).toFixed(2)}%`,B.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:L(z)})}function g(){let T=document.querySelector("[data-sd-ann-hover]");T&&(T.hidden=!0),y.hoverTsMs=null}function i(T){if(T.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let B=_.getBoundingClientRect();if(!B.width)return;let N=T.clientX-B.left,U=Math.min(1,Math.max(0,N/B.width)),O=E();O&&r(Math.round(U*O))}async function n(){if(y.sessionId)try{let T=y.records.slice(0,500);if(!T.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:T,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(T,_){if(T==="back")window.location.hash="#/history/sessions";else if(T==="retry")y.sessionId&&k(y.sessionId);else if(T==="export"){if(!y.sessionId)return;let B=document.createElement("a");B.href="/admin/sessions/"+encodeURIComponent(y.sessionId)+"/export?format=csv",B.rel="noopener",document.body.appendChild(B),B.click(),B.remove()}else if(T==="replay")n();else if(T==="add-annotation"){let B=E(),N=y.hoverTsMs!=null?y.hoverTsMs:Math.round(B/2);r(N)}}function v(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=j();if(!_){y.sessionId=null,$(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}y.sessionId=_,k(_)}function I(){let T=document.getElementById("settings-grid");if(!T)return;let _=document.getElementById(b);_||(T.insertAdjacentHTML("beforeend",x()),_=document.getElementById(b),a()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(B){let N=B.target.closest("[data-sd-ann-del]");if(N){B.stopPropagation(),t(N.dataset.sdAnnDel);return}let U=B.target.closest("[data-sd-ann-marker]");if(U){B.stopPropagation(),y.activeAnnId=U.dataset.sdAnnMarker,a();let de=document.querySelector(`[data-sd-ann-row="${y.activeAnnId}"]`);de&&de.scrollIntoView&&de.scrollIntoView({block:"nearest",behavior:"smooth"});return}let O=B.target.closest("[data-sd-ann-row]");if(O){y.activeAnnId=O.dataset.sdAnnRow,a();return}if(B.target.closest("[data-sd-timeline-inner]")){i(B);return}let z=B.target.closest("[data-sd-action]");if(z){B.preventDefault(),u(z.dataset.sdAction,z);return}let ee=B.target.closest("[data-sd-filter]");ee&&(y.msgFilter=ee.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(de){de.classList.toggle("is-active",de===ee)}),d())}),_.addEventListener("input",function(B){let N=B.target.closest("[data-sd-search]");N&&(y.msgQuery=N.value||"",d())}),_.addEventListener("mousemove",function(B){B.target.closest("[data-sd-timeline-inner]")&&c(B)}),_.addEventListener("mouseleave",function(B){B.target.closest&&B.target.closest("[data-sd-timeline-inner]")&&g()},!0)),y.sessionId=j(),y.sessionId?k(y.sessionId):$(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&I()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&_.indexOf("/session-detail")!==-1&&I(),window.addEventListener("admin-route-changed",function(B){(B&&B.detail&&B.detail.route)==="session-detail"&&I()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&I()})})})()});var ln=ge(()=>{(function(){"use strict";let b="sec-search-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},y=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:y,results:[],total:0,loading:!1,searched:!1},A=0;function j(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+h(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+h(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+h(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+h(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+h(ServerI18n.t("searchWhoAria"))+'"><option value="">'+h(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+h(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+h(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(e){if(!e)return 200;for(var d=0,a=0;a<Math.min(e.length,6);a++)d=d*31+e.charCodeAt(a)&65535;return d%360}function C(e,d){if(!d||!e)return h(e||"");var a=h(e),r=h(d);try{var s=new RegExp("("+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return a.replace(s,'<mark class="admin-search-hit">$1</mark>')}catch{return a}}function m(e){if(!e)return"\u2014";try{var d=new Date(e);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function M(){var e=f.results;return f.blockedOnly&&(e=e.filter(function(d){return(d.status||"shown")==="blocked"})),f.who&&(e=e.filter(function(d){return(d.nickname||"")===f.who})),e}function D(){var e=document.getElementById("admin-search-count");if(e){if(!f.searched||!f.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function x(){var e=document.querySelector("[data-search-who]");if(e){var d=[];f.results.forEach(function(r){var s=(r.nickname||"").trim();s&&d.indexOf(s)===-1&&d.push(s)}),d.sort();var a=f.who;e.innerHTML='<option value="">'+h(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(r){return'<option value="'+h(r)+'"'+(r===a?" selected":"")+">"+h(r)+"</option>"}).join("")}}function k(){var e=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),a=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(i){i.remove()});var r=function(i){d&&(d.style.display="block",d.textContent=i),a&&(a.hidden=!0)};if(f.loading)return r(ServerI18n.t("searchSearching"));if(!f.searched)return r(ServerI18n.t("searchPromptStart"));var s=M();if(s.length===0)return r(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),a&&(a.hidden=!1);var t=Math.min(s.length,f.shown),c=document.createDocumentFragment();if(s.slice(0,t).forEach(function(i){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+h(m(i.timestamp))+'</span><span class="admin-search-row__text">'+C(i.text||"",f.query)+'</span><span class="admin-search-row__nick">'+h((i.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+h(ServerI18n.t("deliveryStatus_"+(i.status||"shown")))+(i.delivery_reason?"<br>"+h(ServerI18n.t("deliveryReason_"+i.delivery_reason)):"")+"</span></span>",c.appendChild(n)}),e.appendChild(c),s.length>t){var g=document.createElement("button");g.type="button",g.className="admin-search-more",g.dataset.searchMore="1",g.textContent=ServerI18n.t("searchMoreLeft",{n:s.length-t}),e.appendChild(g)}}}function P(){D(),x(),k()}async function E(){var e=f.query.trim();if(!e){f.loading=!1,f.searched=!1,f.results=[],f.total=0,P();return}f.loading=!0,P();try{var d="/admin/search?q="+encodeURIComponent(e);if(f.scope==="session"){var a=await L();a&&(d+="&since="+encodeURIComponent(a))}var r=Date.now(),s=await fetch(d,{credentials:"same-origin"}),t=Date.now()-r;if(!s.ok)throw new Error("HTTP "+s.status);var c=await s.json();f.results=Array.isArray(c.results)?c.results:[],f.total=typeof c.total=="number"?c.total:f.results.length,f.shown=y}catch(g){console.error("[admin-search] fetch error:",g),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:g.message||""}),!1)}finally{f.loading=!1,f.searched=!0,P()}}var S=null;async function L(){if(S!==null)return S;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var d=await e.json();if(d.status==="live"&&d.started_at)return S=new Date(d.started_at*1e3).toISOString(),S}}catch{}return S="",""}function R(){clearTimeout(A),A=setTimeout(E,300)}function $(){if(f.results.length){var e=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(s){var t=[s.nickname||"",s.fingerprint||"",s.timestamp||"",s.status||"",s.text||"",s.delivery_reason||""].map(function(c){return'"'+String(c).replace(/"/g,'""')+'"'});e.push(t.join(","))});var d=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),a=URL.createObjectURL(d),r=document.createElement("a");r.href=a,r.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}}function w(){var e=document.getElementById(b);if(e){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){f.query=d.value,R()}),d.addEventListener("keydown",function(r){r.key==="Enter"&&(clearTimeout(A),f.query=d.value,E())})),e.addEventListener("click",function(r){var s=r.target.closest("[data-search-scope]");if(s){f.scope=s.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(c){c.classList.toggle("is-active",c===s)}),f.query.trim()&&R();return}var t=r.target.closest("[data-search-blocked]");if(t){f.blockedOnly=!f.blockedOnly,t.classList.toggle("is-active",f.blockedOnly),f.shown=y,P();return}if(r.target.closest("[data-search-more]")){f.shown+=y,k();return}}),e.addEventListener("change",function(r){var s=r.target.closest("[data-search-who]");s&&(f.who=s.value||"",f.shown=y,P())});var a=document.getElementById("admin-search-export-btn");a&&a.addEventListener("click",$)}}function p(){var e=document.querySelector(".admin-dash-grid"),d=document.getElementById(b);if(!(!e||!d)){var a=e.dataset.activeLeaf||"dashboard";d.style.display=a==="search"?"":"none"}}function l(){var e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",j()),w(),p())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&l(),p()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",function(){l(),p()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var cn=ge(()=>{(function(){"use strict";let b="sec-api-tokens-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},y=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],A={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function j(i){if(!i)return"\u2014";try{let n=new Date(i);if(isNaN(n.getTime()))return String(i);let u=v=>String(v).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())}`}catch{return String(i)}}function F(i){if(!i)return null;try{let n=new Date(i);if(isNaN(n.getTime()))return null;let u=v=>String(v).padStart(2,"0");return`${n.getFullYear()}-${u(n.getMonth()+1)}-${u(n.getDate())} ${u(n.getHours())}:${u(n.getMinutes())}`}catch{return null}}function C(i){let n=Number(i);return isNaN(n)?"0":n.toLocaleString()}function m(i){if(!i||i.enabled===!1)return"inactive";if(!i.expires_at)return"active";try{let n=new Date(i.expires_at).getTime(),u=Date.now();if(n<u)return"expired";if(n-u<168*3600*1e3)return"expiring"}catch{}return"active"}function M(i){if(!i)return 1/0;try{return Math.floor((Date.now()-new Date(i).getTime())/864e5)}catch{return 1/0}}function D(i){return!i||!i.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':i.map(function(n){let u="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?u+=" is-danger":n.startsWith("fire:")?u+=" is-warn":n.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${h(n)}</span>`}).join(" ")}function x(i){let n="admin-ui-dot admin-at-dot";return i==="active"?n+=" is-success":i==="expiring"?n+=" is-warn":i==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function k(){let i=y.map(function(u){let v=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",T=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${h(u.id)}"
          >
          <span class="${T}">${h(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${h(ServerI18n.t(u.labelKey))}</span>
          ${v}
        </label>
      `}).join(""),n=f.map(function(u){let v=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${v} class="sr-only">
          <span>${h(ServerI18n.t(u.labelKey))}</span>
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
                    ${i}
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
    `}async function P(){R(!0);try{let i=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!i.ok)throw new Error(`HTTP ${i.status}`);let n=await i.json();A.tokens=n.tokens||n||[],w()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{R(!1)}}async function E(i){A.creating=!0,$(!0),d();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!n.ok){let I=await n.json().catch(()=>({}));throw new Error(I.error||I.message||`HTTP ${n.status}`)}let u=await n.json(),v=u.token||u.raw_token||u.access_token||null;A.newTokenRaw=v,p(v),o(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{A.creating=!1,$(!1)}}async function S(i,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${h(n||i)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let v=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(i)}`,{method:"DELETE"});if(!v.ok){let I=await v.json().catch(()=>({}));throw new Error(I.error||I.message||`HTTP ${v.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(v){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:v.message||""}),!1)}}async function L(i,n){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(i)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!u.ok){let v=await u.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function R(i){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!i)}function $(i){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=i,n.textContent=i?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function w(){let i=A.tokens,n=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),v=document.querySelector("[data-at-tbody]");if(!(!n||!u||!v)){if(!i||i.length===0){if(!n.firstElementChild&&window.AdminEmpty){let I=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});I.dataset.emptyKind="api-tokens",n.appendChild(I)}n.hidden=!1,u.hidden=!0;return}n.hidden=!0,u.hidden=!1,v.innerHTML=i.map(function(I){let T=m(I),_=x(T),B=I.scopes||I.scope||[],N=Array.isArray(B)?B:String(B).split(",").map(de=>de.trim()).filter(Boolean),O=M(I.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",G=T==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",z=T==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",ee=I.last_used_at?`${F(I.last_used_at)||j(I.last_used_at)}<br><span class="admin-at-ip">${h(I.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${h(I.id||I.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${h(I.label||I.name||"\u2014")}</span>
            ${O}${G}${z}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${h(I.prefix||I.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(N)}</div>
          </td>
          <td class="admin-at-td-used">${ee}</td>
          <td class="admin-at-td-usage">${C(I.usage_count||I.use_count)}</td>
          <td class="admin-at-td-created">${j(I.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${h(I.id||I.token_id||"")}"
              data-token-enabled="${I.enabled===!1?"0":"1"}"
              title="${I.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${I.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${h(I.id||I.token_id||"")}"
              data-token-label="${h(I.label||I.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function p(i){let n=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),v=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),u&&i&&(u.value=i),v&&(v.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let i=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");i&&(i.hidden=!0),n&&(n.style.opacity=""),A.newTokenRaw=null}function o(){let i=document.getElementById("adminAtCreateForm");i&&i.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(v){v.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let v=n.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),d()}function e(i){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=i)}function d(){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!0,i.textContent="")}function a(){let i=document.getElementById("adminAtLabel"),n=i?i.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){u.push(_.value)});let v=document.querySelector("input[name='adminAtExpiry']:checked"),I=v?v.value:"90",T=I==="null"?null:parseInt(I,10);return{label:n,scopes:u,expiry_days:T}}function r(i){return i.label?i.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!i.scopes||i.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function s(i){if(i.preventDefault(),A.creating)return;d();let n=a(),u=r(n);if(u){e(u);return}E(n)}function t(){let i=A.newTokenRaw;if(!i)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(i).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function c(){let i=document.getElementById(b);if(!i)return;i.addEventListener("click",function(I){let T=I.target.closest("[data-at-action]");if(T){let B=T.dataset.atAction;if(B==="revoke"){let N=T.dataset.tokenId,U=T.dataset.tokenLabel;S(N,U)}else if(B==="toggle"){let N=T.dataset.tokenId,U=T.dataset.tokenEnabled==="1";L(N,!U)}else B==="copy-token"&&t();return}let _=I.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(B){B.classList.remove("is-active")}),_.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let I=document.getElementById("adminAtAdminWarn");I&&(I.hidden=!n.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",s);let v=document.querySelector("input[name='adminAtExpiry'][value='90']");if(v){let I=v.closest(".admin-at-expiry-btn");I&&I.classList.add("is-active")}}function g(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",k()),c(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&g()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&g()})})()});var un=ge(()=>{(function(){"use strict";let b="sec-wcag-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function y(o){let e=o.replace(/^#/,""),d=e.length===3?e.split("").map(function(a){return a+a}).join(""):e;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function f(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function A(o){let e=y(o);return .2126*f(e[0])+.7152*f(e[1])+.0722*f(e[2])}function j(o,e){let d=A(o),a=A(e),r=Math.max(d,a),s=Math.min(d,a);return(r+.05)/(s+.05)}function F(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function C(o,e){let d=A(e),a=[],r=y(o);for(let s=.05;s<=.6&&a.length<3;s+=.05){let c="#"+r.map(function(i){return Math.min(1,i+s)}).map(function(i){return Math.round(i*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),g=j(c,e);g>=4.5&&a.push({hex:c,ratio:g})}return a}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",x={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function k(){let o=m.filter(function(a){return F(j(a.fg,a.bg))!=="fail"}).length,e=m.length-o,d=Math.round(o/m.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
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
              ${P("PASS RATE",d+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:d})}">
                <div class="admin-wcag-meter-fill" style="width:${d}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(a,r){return E(a,r)}).join("")}
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
      </div>`}function P(o,e,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${h(String(e))}</span>
        <span class="hud-stat-tile-label">${h(d)}</span>
      </div>`}function E(o,e){let d=j(o.fg,o.bg),a=F(d),r=x[a],s=ServerI18n.t(o.nameKey),t=r.labelKey?ServerI18n.t(r.labelKey):r.label,c=a==="fail"?ServerI18n.t("wcagWarnFail"):a==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${h(ServerI18n.t("wcagPairAriaLabel",{name:s,ratio:d.toFixed(2),level:t.slice(2)}))}">
        <span class="admin-wcag-pair-name">${h(s)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${h(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${h(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${h(o.fg)}">${h(o.fg)} / ${h(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${r.mod}">${t}</span>
        ${c?`<span class="admin-wcag-warn">\u26A0 ${c}</span>`:""}
      </div>`}function S(){let o=j(M.fg,M.bg),e=F(o),d=x[e],a=d.labelKey?ServerI18n.t(d.labelKey):d.label,r=C(M.fg,M.bg);return`
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
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${a}</span>
      </div>

      <div class="admin-wcag-levels">
        ${R(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${R(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${R(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${R(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${r.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${r.map(function(s){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${h(s.hex)}"
                title="${h(ServerI18n.t("wcagSuggApplyTitle",{ratio:s.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${h(M.bg)};color:${h(s.hex)}">${h(s.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${s.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function L(o,e,d){let a="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${a}">${h(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${h(e)}"></span>
          <input type="text" id="${a}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${h(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${h(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function R(o,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${h(o)}</span>
    </div>`}function $(){let o=document.getElementById(b);o&&(o.addEventListener("click",function(e){let d=e.target.closest("[data-wcag-pair-idx]");if(d){w(d);return}let a=e.target.closest("[data-wcag-sugg]");a&&(M.fg=a.dataset.wcagSugg,p())}),o.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let d=e.target.closest("[data-wcag-pair-idx]");d&&(e.preventDefault(),w(d))}),o.addEventListener("input",function(e){let d=e.target.closest("[data-wcag-tester-fg]"),a=e.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(M.fg=d.value.toUpperCase(),p()),a&&/^#[0-9A-Fa-f]{6}$/.test(a.value)&&(M.bg=a.value.toUpperCase(),p())}))}function w(o){let e=m[parseInt(o.dataset.wcagPairIdx,10)];e&&(M.fg=e.fg,M.bg=e.bg,p())}function p(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=S())}function l(){let o=document.getElementById("settings-grid");!o||document.getElementById(b)||(o.insertAdjacentHTML("beforeend",k()),$())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&l()})})()});var mn=ge(()=>{(function(){"use strict";let b="danmu.onboarding.done",h="admin-onboarding-root",j=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,C=!1;window.AdminOnboarding={start:k,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let m=new Set(["live","dashboard"]);function M(){if(C||window.AdminOnboarding.isDone()||!m.has(D()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{C||window.AdminOnboarding.isDone()||o()||m.has(D())&&k()},1200)}function D(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function x(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&k()}function k(){C||(C=!0,F=0,R())}function P(o){if(!C)return;C=!1,document.body.removeEventListener("click",S),document.removeEventListener("keydown",L),window.removeEventListener("resize",$);let e=document.getElementById(h);if(e&&e.remove(),o)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function E(){F<j.length-1?(F++,$()):P(!0)}function S(o){let e=o.target.closest("[data-ob-action]");e&&(o.stopPropagation(),e.dataset.obAction==="next"?E():e.dataset.obAction==="skip"&&P(!1))}function L(o){C&&o.key==="Escape"&&(o.preventDefault(),P(!1))}function R(){let o=document.getElementById(h);o&&o.remove();let e=document.createElement("div");e.id=h,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",S),document.addEventListener("keydown",L),window.addEventListener("resize",$),$()}function $(){let o=document.getElementById(h);if(!o)return;let e=j[F],d=j.length,a=p(e.target),r=window.innerWidth,s=window.innerHeight,t="";a?t='<div class="admin-ob-spot" style="left:'+(a.left-8)+"px;top:"+(a.top-8)+"px;width:"+(a.width+16)+"px;height:"+(a.height+16)+'px;"></div>':t='<div class="admin-ob-scrim"></div>';let c=(r-360)/2,g=s/2-110,i="none";if(a){let I=a.left+a.width/2;e.side==="top"?(c=I-360/2,g=a.top-16,i="bottom"):e.side==="right"?(c=a.right+16+8,g=a.top,i="left"):(c=I-360/2,g=a.bottom+16+8,i="top"),c=Math.max(16,Math.min(r-360-16,c))}let n=j.map(function(I,T){return'<span class="admin-ob-progress-item'+(T===F?" is-current":"")+'">'+(T+1)+" "+l(ServerI18n.t(I.labelKey))+"</span>"+(T<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=t+'<div class="admin-ob-bubble" data-arrow="'+i+'" style="left:'+c+"px;top:"+g+'px"><div class="admin-ob-count">'+(F+1)+" / "+d+'</div><div class="admin-ob-title">'+l(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(F===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let u=o.querySelector(".admin-ob-bubble");if(!u||!a)return;let v=u.offsetHeight;if(e.side==="top")u.style.top=Math.max(16,a.top-16-8-v)+"px";else if(g+v>s-16){let I=a.top-16-8-v;I>=16?(u.style.top=I+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,s-v-16)+"px",u.setAttribute("data-arrow","none"))}w(u,a)}function w(o,e){let d=o.getAttribute("data-arrow");if(d==="none")return;let a=o.getBoundingClientRect(),r=d==="top"||d==="bottom",s=r?e.left+e.width/2-a.left:e.top+e.height/2-a.top,t=r?a.width:a.height,c=Math.max(16,Math.min(t-32,s-8));o.style.setProperty("--ob-arrow",c+"px")}function p(o){if(!o)return null;let e=document.querySelector(o);if(!e)return null;let d=e.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function l(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",x),x(),window.addEventListener("hashchange",function(){m.has(D())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var yn=ge(()=>{var zi=be(Ze()),Vi=be(et()),Ji=be(tt()),Yi=be(nt()),Qi=be(at()),Xi=be(it()),Zi=be(st()),es=be(ot()),ts=be(rt()),ns=be(dt()),as=be(lt()),is=be(ct()),ss=be(ut()),os=be(mt()),rs=be(pt()),ds=be(vt()),ls=be(ft()),cs=be(ht()),us=be(gt()),ms=be(bt()),ps=be(yt()),vs=be(wt()),fs=be(St()),hs=be(kt()),gs=be(It()),bs=be(Tt()),ys=be(_t()),ws=be(Et()),Ss=be($t()),ks=be(Lt()),Is=be(xt()),Ts=be(At()),_s=be(Ct()),Es=be(Bt()),$s=be(Ft()),Ls=be(Dt()),xs=be(Mt()),As=be(Nt()),Cs=be(Pt()),Bs=be(Rt()),Fs=be(Ot()),Ds=be(qt()),Ms=be(Ht()),Ns=be(jt()),Ps=be(Ut()),Rs=be(Kt()),Os=be(Wt()),qs=be(Gt()),Hs=be(zt()),js=be(Vt()),Us=be(Jt()),Ks=be(Yt()),Ws=be(Qt()),Gs=be(Xt()),zs=be(Zt()),Vs=be(en()),Js=be(tn()),Ys=be(nn()),Qs=be(an()),Xs=be(sn()),Zs=be(on()),eo=be(rn()),to=be(dn()),no=be(ln()),ao=be(cn()),io=be(un()),so=be(mn())});yn();})();
