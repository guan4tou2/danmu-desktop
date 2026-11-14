/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var pn=Object.create;var Xe=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var fn=Object.getOwnPropertyNames;var hn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var ge=(b,g)=>()=>{try{return g||b((g={exports:{}}).exports,g),g.exports}catch(y){throw g=0,y}};var bn=(b,g,y,h)=>{if(g&&typeof g=="object"||typeof g=="function")for(let A of fn(g))!gn.call(b,A)&&A!==y&&Xe(b,A,{get:()=>g[A],enumerable:!(h=vn(g,A))||h.enumerable});return b};var be=(b,g,y)=>(y=b!=null?pn(hn(b)):{},bn(g||!b||!b.__esModule?Xe(y,"default",{value:b,enumerable:!0}):y,b));var Ze=ge(()=>{(function(){"use strict";var b=4,g=2500,y=3e3,h=Object.create(null);function A(){return Date.now()}function U($,E){return(E?"ok:":"err:")+$}function F($,E){return"var("+$+", "+E+")"}function C($){return $?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function p($){for(var E=Array.prototype.slice.call($.children);E.length>b;){var B=E.shift();B&&B.parentNode&&B.parentNode.removeChild(B)}}function M($,E){$.remaining=E,$.startedAt=A(),$.timer=setTimeout(function(){T($)},E)}function D($){$.timer&&(clearTimeout($.timer),$.timer=null,$.remaining=Math.max(600,$.remaining-(A()-$.startedAt)))}function x($){$.timer||!$.el.parentNode||M($,$.remaining)}function T($){clearTimeout($.timer),$.timer=null,$.key&&h[$.key]===$&&delete h[$.key];var E=$.el;!E||!E.parentNode||(E.style.opacity="0",E.style.transform="translateX(8px)",setTimeout(function(){E.parentNode&&E.parentNode.removeChild(E)},180))}function N($,E){var B=document.getElementById("toast-container");if(B){E=E!==!1;var O=U(String($),E),_=h[O];if(_&&_.el.parentNode&&A()-_.startedAt<g){_.count+=1,_.countEl&&(_.countEl.textContent="\xD7"+_.count,_.countEl.hidden=!1),D(_),x(_);return}var w=E?F("--color-ink-success","#639922"):F("--color-ink-error","#e24b4a"),v=F("--color-surface","#ffffff"),l=F("--color-text-primary","#1a1a1a"),i=F("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+v,"color:"+l,"border:1px solid "+i,"border-left:3px solid "+w,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+w+";flex:0 0 auto",d.innerHTML=C(E);var r=document.createElement("span");r.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",r.textContent=$;var m=document.createElement("span");m.hidden=!0,m.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(d),t.appendChild(r),t.appendChild(m),B.appendChild(t),p(B),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var o={key:O,el:t,countEl:m,count:1,timer:null,remaining:y,startedAt:A()};h[O]=o,M(o,y),t.addEventListener("mouseenter",function(){D(o)}),t.addEventListener("mouseleave",function(){x(o)}),t.addEventListener("focusin",function(){D(o)}),t.addEventListener("focusout",function(){x(o)})}}window.showToast=N})()});var et=ge(()=>{(function(){"use strict";var b="admin-details-open-state";function g(){try{return JSON.parse(localStorage.getItem(b))||{}}catch{return{}}}function y(_){try{localStorage.setItem(b,JSON.stringify(_))}catch{}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(_){return _==null?"":String(_).replace(/[&<>"']/g,function(w){return h[w]})}function U(){var _=document.querySelector("script[nonce]");return _&&_.nonce||""}function F(_,w){var v=U();return"<style"+(_?' id="'+A(_)+'"':"")+(v?' nonce="'+A(v)+'"':"")+">"+(w||"")+"</style>"}var C='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',p=[],M=null;function D(_){if(!_)return!1;for(var w=_,v=null;w&&w!==document.documentElement;v=w,w=w.parentElement)if(w.style&&w.style.display==="none"||w.tagName==="DETAILS"&&!w.open&&!(v&&v.tagName==="SUMMARY"))return!1;return!!(_.offsetParent||_.getClientRects().length)}function x(){var _=document.hidden;p.forEach(function(w){var v=typeof w.el=="function"?w.el():w.el,l=!_&&D(v);if(l&&!w.timer){if(w.immediate!==!1)try{w.tick()}catch{}w.timer=setInterval(w.tick,w.intervalMs)}else!l&&w.timer&&(clearInterval(w.timer),w.timer=0)})}function T(_){var w={el:_.el,intervalMs:_.intervalMs,tick:_.tick,immediate:_.immediate,timer:0};return p.push(w),M||(M=new MutationObserver(function(){x()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",x),document.addEventListener("visibilitychange",x),document.addEventListener("admin-panel-rendered",x)),x(),function(){w.timer&&clearInterval(w.timer);var l=p.indexOf(w);l!==-1&&p.splice(l,1)}}function N(_){let w=document.createElement("textarea");w.value=_,w.setAttribute("readonly",""),w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select();let v=!1;try{v=!!document.execCommand("copy")}catch{v=!1}return document.body.removeChild(w),v}function $(_,w){let v=t=>window.ServerI18n?window.ServerI18n.t(t):t,l=t=>(window.showToast&&window.showToast(t?w||v("sohCopied"):v("sohCopyFailed"),t),t);if(!_)return Promise.resolve(l(!1));let i=navigator.clipboard;return i&&typeof i.writeText=="function"?i.writeText(_).then(()=>l(!0),()=>l(N(_))):Promise.resolve(l(N(_)))}let E=/^[=+\-@\t\r\n]/;function B(_){let w=_==null?"":String(_);return typeof _=="string"&&E.test(w)?"'"+w:w}function O(_){let w=B(_);return/[",\r\n]/.test(w)?'"'+w.replace(/"/g,'""')+'"':w}window.AdminUtils={csvCell:O,csvSafeText:B,copyText:$,DETAILS_STATE_KEY:b,loadDetailsState:g,saveDetailsState:y,escapeHtml:A,cspNonce:U,styleTag:F,closeIcon:C,pollWhileVisible:T}})()});var tt=ge(()=>{(function(){"use strict";function b(g,y,h,A){let U=g.querySelector("[data-route-breadcrumb]");if(!U)return;let F=Array.from(g.querySelectorAll(".admin-dash-nav-row[data-route]")),C=F.find(B=>B.dataset.route===y)||F.find(B=>B.dataset.route===h);if(!C){U.replaceChildren(),U.hidden=!0;return}let p="",M=C.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){p=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let x=(C.querySelector("[data-i18n]")||C.querySelector("span:nth-child(2)")||C).textContent.trim(),T=A?g.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=T?(T.querySelector(".admin-tabs-btn-label")||T).textContent.trim():"",$=[p===x?"":p,x,N].filter(Boolean),E=document.createDocumentFragment();$.forEach((B,O)=>{if(O){let v=document.createElement("span");v.className="admin-dash-breadcrumb-sep",v.setAttribute("aria-hidden","true"),v.textContent="\u203A",E.appendChild(v)}let _=document.createElement("span"),w=O===$.length-1;_.className="admin-dash-breadcrumb-item"+(w?" is-current":""),w&&_.setAttribute("aria-current","page"),_.textContent=B,E.appendChild(_)}),U.replaceChildren(E),U.hidden=$.length===0}window.AdminBreadcrumb={render:b}})()});var nt=ge(()=>{(function(b){"use strict";let g={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function y(T){return Array.isArray(T.sections)?T.sections:T.section?[T.section]:[]}function h(T){return!!g[T]}function A(T){return g[T]||null}let U={moderation:{filters:"blacklist",fingerprints:"bans"}};function F(T,N){let $=g[T];if(!$||!N)return null;let E=$.tabs.find(B=>B.folds&&B.folds[N]);return E?{tab:E.slug,section:E.folds[N]}:null}function C(T,N){let $=g[T];if(!$)return null;let E=w=>$.tabs.some(v=>v.slug===w),B=F(T,N);if(B)return B.tab;let O=U[T]?.[N];if(O&&E(O))return O;if(N&&E(N))return N;let _=b.AdminRouter?.tabMemory?.get?.(T);return _&&E(_)?_:$.defaultTab}function p(T,N,$){let E=g[T];if(!E)return null;let B=document.createElement("div");return B.className="admin-tabs-strip",B.dataset.nav=T,B.setAttribute("role","tablist"),B.setAttribute("aria-label",T+" tabs"),E.tabs.forEach(O=>{let _=document.createElement("button");_.type="button",_.className="admin-tabs-btn"+(O.slug===N?" is-active":""),_.dataset.nav=T,_.dataset.tab=O.slug,_.setAttribute("role","tab"),_.setAttribute("aria-selected",O.slug===N?"true":"false");let w=document.createElement("span");w.className="admin-tabs-btn-label",w.textContent=O.labelKey?ServerI18n.t(O.labelKey):O.label,_.appendChild(w);let v=document.createElement("span");v.className="admin-tabs-btn-count",v.dataset.tabCount=O.slug,v.textContent=M[T]&&M[T][O.slug]?M[T][O.slug]:"",_.appendChild(v),_.addEventListener("click",()=>{typeof $?.onSelect=="function"&&$.onSelect(O.slug)}),B.appendChild(_)}),B}let M={};function D(T,N,$){if(!g[T])return;M[T]=M[T]||{},M[T][N]=$==null?"":String($);let E=document.querySelector('.admin-tabs-strip[data-nav="'+T+'"] [data-tab-count="'+N+'"]');E&&(E.textContent=M[T][N])}function x(T,N,$){let E=g[T];!E||!$||E.tabs.forEach(B=>{let O=B.slug===N,_=new Map;y(B).forEach(w=>{let v=$.querySelector("#"+w);if(!v)return;v.style.display=O?"":"none";let l=_.get(v.parentElement);O&&B.folds&&l&&l.nextElementSibling!==v&&l.after(v),_.set(v.parentElement,v)})})}b.AdminTabs={hasTabsFor:h,getConfig:A,foldFor:F,resolveActiveTab:C,renderTabStrip:p,applyTabSectionVisibility:x,setTabCount:D}})(window)});var at=ge(()=>{(function(b,g){"use strict";let y="data-quick-action-host",h="admin-quick-action-bar";function A(M){if(M?.host instanceof HTMLElement)return M.host;let D=g.querySelector(".admin-dash-main");if(!D)return g.body;let x=D.querySelector(`[${y}]`);if(!x){x=g.createElement("div"),x.setAttribute(y,"");let T=D.querySelector(".admin-dash-topbar"),$=D.querySelector("[data-admin-tabs-host]")||T;$&&$.parentNode?$.insertAdjacentElement("afterend",x):D.prepend(x)}return x}function U(M,D){typeof b.showToast=="function"&&b.showToast(M,D!==!1)}function F({label:M,undoLabel:D,onUndo:x,windowMs:T}){let N=A(),$=N.querySelector("."+h);$&&$.remove();let E=g.createElement("div");E.className=h,E.setAttribute("role","status"),E.setAttribute("aria-live","polite");let B=g.createElement("span");B.className=h+"-text",B.textContent="\u2713 "+M,E.appendChild(B);let O=g.createElement("button");O.type="button",O.className=h+"-undo",O.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),E.appendChild(O);let _=()=>{E.classList.add("is-leaving"),setTimeout(()=>E.remove(),200)},w=setTimeout(_,T||5e3);return O.addEventListener("click",async()=>{clearTimeout(w),O.disabled=!0,O.textContent=ServerI18n.t("qaUndoing");try{await x(),U(ServerI18n.t("qaUndone"),!0)}catch(v){U(ServerI18n.t("qaUndoFailed",{msg:v?.message||String(v)}),!1)}finally{_()}}),N.appendChild(E),requestAnimationFrame(()=>E.classList.add("is-entering")),E}function C(M){if(!M||typeof M!="object")return;let D=M.label||ServerI18n.t("qaDone");M.toast!==!1&&U(D,!0),M.undo&&typeof M.undo.run=="function"&&F({label:D,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function p(){g.querySelectorAll("."+h).forEach(M=>M.remove())}b.AdminQuickAction={fire:C,dismissAll:p}})(window,document)});var it=ge(()=>{(function(){"use strict";let b="admin-hud-modal-root",g=null,y=null,h='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function A(){let p=document.getElementById(b);return p?Array.prototype.slice.call(p.querySelectorAll(h)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function U(p){let M=document.getElementById(b);if(M&&M.remove(),g&&(g(p),g=null),document.removeEventListener("keydown",F),y&&typeof y.focus=="function")try{y.focus()}catch{}y=null}function F(p){if(p.key==="Escape"){p.preventDefault(),U(!1);return}if(p.key==="Tab"){let M=A();if(!M.length){p.preventDefault();return}let D=M[0],x=M[M.length-1],T=document.activeElement;p.shiftKey?(T===D||!M.includes(T))&&(p.preventDefault(),x.focus()):(T===x||!M.includes(T))&&(p.preventDefault(),D.focus())}}function C(p){return new Promise(M=>{g&&U(!1),g=M,y=document.activeElement;let{icon:D="\u26A0",title:x=ServerI18n.t("hudConfirmTitle"),subtitle:T="",severity:N="warn",body:$="",titleText:E,bodyText:B,confirmLabel:O=ServerI18n.t("hudConfirmLabel"),cancelLabel:_=ServerI18n.t("cancel"),width:w=480}=p||{},v=document.createElement("div");v.id=b,v.className=`admin-hud-modal admin-hud-modal--${N}`,v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-hud-modal-title");let l=T?`<div class="admin-hud-modal__subtitle">${T}</div>`:"",i=typeof $=="string"?$:"",t=typeof $!="string"&&$&&$.nodeType;if(v.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${w}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${x}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${i}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${_}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${O}</button>
          </div>
        </div>`,E!=null){let r=v.querySelector(".admin-hud-modal__title");r&&(r.textContent=String(E))}if(B!=null){let r=v.querySelector("[data-modal-body]");r&&(r.textContent=String(B))}if(t){let r=v.querySelector("[data-modal-body]");r.innerHTML="",r.appendChild($)}v.addEventListener("click",function(r){let m=r.target.closest("[data-modal-action]");m&&(r.stopPropagation(),U(m.dataset.modalAction==="confirm"))}),document.body.appendChild(v),document.addEventListener("keydown",F);let d=N==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{v.querySelector(`.admin-hud-modal__btn--${d}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:C}})()});var st=ge(()=>{(function(){"use strict";var b=8,g=30;function y(N,$){return window.ServerI18n?window.ServerI18n.t(N,$):N}function h(N,$){return N?N.length>$?N.slice(0,$)+"\u2026":N:""}function A(N){return y(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function U(N,$){return N==="keyword"?h($,g):$.slice(0,b)}async function F(N,$,E){if(!$)return{ok:!1,error:"empty-value"};try{var B={type:N==="keyword"?"keyword":"fingerprint",value:$};E&&(B.reason=E);var O=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)});return O.ok?{ok:!0}:{ok:!1,error:"HTTP "+O.status}}catch(_){return{ok:!1,error:_&&_.message||"network"}}}async function C(N,$,E){if(!N)return{ok:!1,error:"empty-fingerprint"};var B=parseInt($||0,10)||0;try{var O=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:B,reason:E||"",kind:"ban"})});return O.ok?{ok:!0}:{ok:!1,error:"HTTP "+O.status}}catch(_){return{ok:!1,error:_&&_.message||"network"}}}async function p(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var $=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return $.ok?{ok:!0}:{ok:!1,error:"HTTP "+$.status}}catch(E){return{ok:!1,error:E&&E.message||"network"}}}function M(N,$){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:y("lfBlockTitle"),subtitle:y("cfmSubBlockFuture"),severity:"danger",bodyText:y("blockConfirm").replace("{label}",A(N)).replace("{display}",U(N,$)),confirmLabel:y("lfBlockTitle")}):(window.showToast&&window.showToast(y("blockFailed"),!1),Promise.resolve(!1))}function D(N,$,E){window.showToast&&window.showToast(N?y($,E||{}):y("blockFailed"),!!N)}async function x(N,$){if(!N||($=$||{},!$.skipConfirm&&!await M("keyword",N)))return!1;var E=await F("keyword",N);return D(E.ok,"blockFallback",{label:A("keyword"),display:U("keyword",N)}),E.ok}async function T(N,$){if(!N||($=$||{},!$.skipConfirm&&!await M("fingerprint",N)))return!1;var E=await F("fingerprint",N,$.reason);return D(E.ok,"blockFallback",{label:A("fingerprint"),display:U("fingerprint",N)}),E.ok}window.AdminModeration={callBlock:F,banFingerprint:C,recall:p,blockKeyword:x,blockFingerprint:T}})()});var ot=ge(()=>{(function(){"use strict";function g(C){let p=document.createElement("div");return p.className="admin-skel-slow",p.hidden=!0,p.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",C.appendChild(p),setTimeout(function(){p.isConnected&&(p.hidden=!1)},3e3),C}function y(C,p){let M=document.createElement("div");if(M.className="admin-skel "+(C||""),p)for(let D in p)M.style[D]=p[D];return M}function h({rows:C=8}={}){let p=document.createElement("div");p.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{M.appendChild(y("admin-skel-bar",{width:D+"px",height:"10px"}))}),p.appendChild(M);for(let D=0;D<C;D++){let x=document.createElement("div");x.className="admin-skel-list__row",x.appendChild(y("admin-skel-circle",{width:"24px",height:"24px"}));let T=document.createElement("div");T.className="admin-skel-list__col",T.appendChild(y("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),T.appendChild(y("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),x.appendChild(T),x.appendChild(y("admin-skel-bar",{width:"60px",height:"10px"})),p.appendChild(x)}return g(p)}function A({cols:C=4}={}){let p=document.createElement("div");p.className="admin-skel-stats",p.style.gridTemplateColumns=`repeat(${C}, 1fr)`;for(let M=0;M<C;M++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(y("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(y("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(y("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(y("admin-skel-bar",{width:"90px",height:"8px"})),p.appendChild(D)}return g(p)}function U(){let C=document.createElement("div");C.className="admin-skel-card admin-skel-chart";let p=document.createElement("div");p.className="admin-skel-chart__head",p.appendChild(y("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",p.appendChild(M),p.appendChild(y("admin-skel-bar",{width:"80px",height:"10px"})),C.appendChild(p);let D=document.createElement("div");D.className="admin-skel-chart__body";let x=document.createElement("div");x.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>x.appendChild(y("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(x);let T=document.createElement("div");return T.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach($=>T.appendChild(y("admin-skel-bar admin-skel-chart__bar",{height:$+"%"}))),D.appendChild(T),C.appendChild(D),g(C)}function F(C,p){let M={listRows:h,statsTiles:A,chart:U}[C];return M?M(p||{}).outerHTML:""}window.AdminSkeletons={listRows:h,statsTiles:A,chart:U,html:F}})()});var rt=ge(()=>{(function(){"use strict";let b={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},g={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:b.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:b.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:b.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:b.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:b.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:b.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:b.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:b.cyan}};function y(A){let{icon:U="\xB7",title:F="",desc:C="",accent:p=b.cyan,ctaAccent:M,actionLabel:D,action:x,extra:T}=A||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",p),M&&N.style.setProperty("--admin-empty-cta",M);let $=document.createElement("div");if($.className="admin-empty__icon",$.textContent=U,N.appendChild($),F){let E=document.createElement("div");E.className="admin-empty__title",E.textContent=F,N.appendChild(E)}if(C){let E=document.createElement("div");E.className="admin-empty__desc",E.textContent=C,N.appendChild(E)}if(D){let E=document.createElement("button");E.type="button",E.className="admin-empty__btn",E.textContent=D,typeof x=="function"&&E.addEventListener("click",x),N.appendChild(E)}if(T){let E=document.createElement("div");E.className="admin-empty__extra",typeof T=="string"?E.innerHTML=T:E.appendChild(T),N.appendChild(E)}return N}function h(A){let U=g[A];if(!U)return y({title:ServerI18n.t("emptyNoData"),desc:""});let F=Object.assign({},U,{title:U.titleKey?ServerI18n.t(U.titleKey):U.title,desc:U.descKey?ServerI18n.t(U.descKey):U.desc,actionLabel:U.actionLabelKey?ServerI18n.t(U.actionLabelKey):U.actionLabel});return y(F)}window.AdminEmpty={render:h,renderCustom:y,PRESETS:g}})()});var dt=ge(()=>{(function(){"use strict";var b=8;function g(F){return F?String(F).slice(0,b):""}function y(F){if(!F||typeof F!="object")return{nickname:"",fp:"",ip:""};var C=F.fingerprint||F.fp||F.hash||"",p=F.clientIp||F.client_ip||F.ip||"",M=F.nickname||F.nick||"";return{nickname:String(M||""),fp:String(C||""),ip:String(p||"")}}function h(F){if(!F||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var C=new TextEncoder().encode(String(F));return window.crypto.subtle.digest("SHA-256",C).then(function(p){var M=Array.from(new Uint8Array(p));return M.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function A(F){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var C=document.getElementById("sec-fingerprints");if(C&&!C.open&&(C.open=!0),C)try{C.scrollIntoView({behavior:"smooth",block:"start"})}catch{}h(F).then(function(p){if(p)var M=0,D=setInterval(function(){M+=1;var x=document.querySelector('[data-fp-hash="'+p+'"]');if(x){clearInterval(D),x.classList.add("admin-identity-flash"),setTimeout(function(){x.classList.remove("admin-identity-flash")},2e3);try{x.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(D)},250)})}function U(F){F=F||{};var C=F.nickname||"",p=F.fp||"",M=F.ip||"",D=!!F.compact,x=typeof F.onNicknameClick=="function"?F.onNicknameClick:null,T=typeof F.onFpClick=="function"?F.onFpClick:A,N=document.createElement("span");N.className="admin-identity-row";var $;if(x?($=document.createElement("button"),$.type="button",$.className="admin-identity-nick is-clickable",$.addEventListener("click",function(v){v.stopPropagation(),x(C)})):($=document.createElement("span"),$.className="admin-identity-nick"),C)$.textContent="@"+C;else{var E="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var B=ServerI18n.t("anonymousPlaceholder");B&&B!=="anonymousPlaceholder"&&(E=B)}}catch{}$.textContent="@"+E,$.classList.add("is-guest")}if(C&&($.title=C),N.appendChild($),p){var O;if(T?(O=document.createElement("button"),O.type="button",O.className="admin-identity-fp is-clickable",O.addEventListener("click",function(v){v.stopPropagation(),T(p)})):(O=document.createElement("span"),O.className="admin-identity-fp"),p==="new"){var _=document.createElement("span");_.className="admin-identity-dot",O.appendChild(_),O.appendChild(document.createTextNode("fp:new"))}else O.textContent="fp:"+g(p);O.title=p,N.appendChild(O)}if(M&&!D){var w=document.createElement("span");w.className="admin-identity-ip",w.textContent=M,w.title=M,N.appendChild(w)}return N}window.AdminIdentity={render:U,parse:y,focusFingerprint:A,hashFp:h,FP_DISPLAY_LEN:b}})()});var lt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function g(d,r){return window.csrfFetch(d,r)}function y(d,r){return window.showToast(d,r)}let h="default",A=[],U={};function F(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function C(){F();try{let d=await g("/admin/themes");if(!d.ok)return;let r=await d.json();h=r.active||"default",A=r.themes||[],U=r.overrides||{},N(A,h),B()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var p="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function D(d,r){var m=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(m)?m:r}function x(d){var r=d.styles||{},m=["color:"+D(r.color,"#ffffff")];if(r.textStroke){var o=Math.max(0,Math.min(6,Number(r.strokeWidth)||0));m.push("-webkit-text-stroke:"+o+"px "+D(r.strokeColor,"#000000")),m.push("paint-order:stroke fill")}if(r.textShadow){var a=Math.max(0,Math.min(40,Number(r.shadowBlur)||0));m.push("text-shadow:0 0 "+a+"px "+D(r.color,"#ffffff"))}var c=d.font&&d.font.family;return c&&/^[\w\s-]{1,40}$/.test(c)&&m.push("font-family:'"+c+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&m.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),m.join(";")}function T(d){var r=d.bg&&d.bg.gradient;return r&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(r).trim())?"background:"+String(r).trim():""}function N(d,r){let m=document.getElementById("themesList");if(m){if(m.innerHTML="",d.length===0){m.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(o=>{let a=o.name===r,c=b(ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name),f=document.createElement("div");f.className=`theme-pack-card${a?" is-active":""}`,f.innerHTML=`
        <div class="theme-pack-name">${c}</div>
        <div class="theme-pack-sample" style="${b(T(o))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${b(x(o))}">
            <span class="theme-pack-sample-nick">${b(p)}</span>
            ${b(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${o.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${b(o.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${a?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${b(o.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,m.appendChild(f)}),m.querySelectorAll(".theme-delete-btn").forEach(o=>{o.addEventListener("click",async()=>{let a=o.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let f=await g("/admin/themes/"+encodeURIComponent(a),{method:"DELETE"});if(!f.ok)throw new Error("HTTP "+f.status);y(ServerI18n.t("themeDeleted"),!0),C()}catch{y(ServerI18n.t("themesDeleteFailed"),!1)}})}),m.querySelectorAll(".theme-activate-btn").forEach(o=>{o.addEventListener("click",async()=>{let a=o.dataset.theme;try{let c=await g("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})});if(c.ok)y(ServerI18n.t("themeActivated"),!0),h=a,N(d,a),B();else{let f=await c.json().catch(()=>({}));y(f.error||ServerI18n.t("setThemeFailed"),!1)}}catch{y(ServerI18n.t("setThemeFailed"),!1)}})})}}function $(){return A.find(d=>d.name===h)||null}function E(d,r){let m=U[h]||{};if(m[d])return m[d];let o=r&&r.styles||{};return d==="stroke"?o.textStroke?Number(o.strokeWidth)>=3?"thick":"thin":"none":o.textShadow?Number(o.shadowBlur)>=10?"strong":"soft":"none"}function B(){let d=document.getElementById("themeDetail"),r=document.getElementById("themeDetailLabel");if(!d||!r)return;let m=$();if(!m)return;let o=ServerI18n.t("theme_"+m.name)!=="theme_"+m.name?ServerI18n.t("theme_"+m.name):m.label||m.name;r.textContent=ServerI18n.t("themeDetailGroup",{name:o}),["stroke","shadow"].forEach(c=>{let f=E(c,m);d.querySelectorAll(`[data-theme-seg="${c}"] [data-theme-opt]`).forEach(e=>{let n=e.getAttribute("data-theme-opt")===f;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",n?"true":"false")})});let a=d.querySelector('[data-theme-ov="color"]');if(a){let c=D((m.styles||{}).color,"#ffffff");a.value=/^#[0-9a-fA-F]{6}$/.test(c)?c:"#ffffff"}_(m),w(m)}var O=null;async function _(d){let r=document.getElementById("themeOvFont");if(!r)return;if(!O)try{let a=await fetch("/fonts",{credentials:"same-origin"});O=a.ok?(await a.json()).fonts||[]:[]}catch{O=[]}let o=(U[h]||{}).font_family||"";r.innerHTML=`<option value="">${b(ServerI18n.t("themeDetailFontInherit"))}</option>`+O.map(a=>{let c=String(a.name||a);return`<option value="${b(c)}"${c===o?" selected":""}>${b(c)}</option>`}).join("")}function w(d){let r=document.querySelector("[data-theme-preview-line]");r&&r.setAttribute("style",x(d))}async function v(d){try{let r=await g("/admin/themes/"+encodeURIComponent(h)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!r.ok)throw new Error("HTTP "+r.status);y(ServerI18n.t("themeDetailSaved"),!0),await C()}catch{y(ServerI18n.t("themeDetailSaveFailed"),!1)}}function l(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",r=>{let m=r.target.closest("[data-theme-opt]");if(!m)return;let o=m.closest("[data-theme-seg]");o&&v({[o.getAttribute("data-theme-seg")]:m.getAttribute("data-theme-opt")})}),d.addEventListener("change",r=>{let m=r.target.closest("[data-theme-ov]");m&&v({[m.getAttribute("data-theme-ov")]:m.value})}))}function i(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let r=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!r||!r.trim()))try{let m=await g("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:r.trim(),base:h})});if(!m.ok)throw new Error("HTTP "+m.status);y(ServerI18n.t("themeCreated"),!0),C()}catch{y(ServerI18n.t("themesNewFailed"),!1)}})}function t(){C(),l(),i();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await g("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(y(ServerI18n.t("themesReloaded")),C()):y(ServerI18n.t("themesReloadFailed"),!1)}catch{y(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t}})()});var ct=ge(()=>{(function(){"use strict";function b(I,L){return window.csrfFetch(I,L)}function g(I,L){return window.showToast(I,L)}var y=window.ServerI18n;function h(I,L){return window.AdminUtils.styleTag(I,L)}let A=null;function U(){let I=document.getElementById("effectEditModal");return I?Array.from(I.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(L=>!L.hasAttribute("disabled")&&L.getAttribute("aria-hidden")!=="true"):[]}function F(I){let L=document.getElementById("effectEditModal");if(!L||L.classList.contains("hidden"))return;if(I.key==="Escape"){I.preventDefault(),C();return}if(I.key!=="Tab")return;let P=U();if(P.length===0){I.preventDefault();return}let j=P[0],R=P[P.length-1],W=document.activeElement;I.shiftKey&&W===j?(I.preventDefault(),R.focus()):!I.shiftKey&&W===R&&(I.preventDefault(),j.focus())}function C(){let I=document.getElementById("effectEditModal");I&&(I.classList.add("hidden"),I.classList.remove("flex"),I.removeEventListener("keydown",F),A&&(A.focus(),A=null))}let p={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(I){return!!p[I]}};let M=new Map,D=new Map;function x(I){if(!I||!I.styleId||!I.keyframes)return;let L="dme-user-"+I.styleId;if(document.getElementById(L))return;let P=document.createElement("style");P.id=L,P.textContent=I.keyframes,document.head.appendChild(P)}async function T(I){if(M.has(I))return M.get(I);if(D.has(I))return D.get(I);let L=(async()=>{try{let P=await b(`/admin/effects/${encodeURIComponent(I)}/content`);if(!P.ok)throw new Error("content fetch failed");let j=await P.json(),R=j&&j.content||"";if(!R)throw new Error("empty content");let W=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:R,params:{}})});if(!W.ok)throw new Error("preview failed");let G=await W.json();if(!G||!G.animation)throw new Error("no animation");return x(G),M.set(I,G),G}catch{return M.set(I,"failed"),null}finally{D.delete(I)}})();return D.set(I,L),L}function N(I,L){let P=I.querySelector(".effect-demo-text");if(!P)return;P.style.animation=L.animation||"",L.animationComposition&&(P.style.animationComposition=L.animationComposition),P.style.animationPlayState="paused";let j=E();j&&j.observe(I)}let $=null;function E(){return $||(typeof IntersectionObserver>"u"?null:($=new IntersectionObserver(I=>{I.forEach(L=>{let P=L.target.querySelector(".effect-demo-text");P&&(P.style.animationPlayState=L.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),$))}let B=null;function O(I){let L=document.getElementById("effectPreviewParams");if(!L)return{};let P;try{let R=I.split(`
`),W=!1,G=0,Z=null,de=0,ne={};for(let J of R){let ee=J.trimStart(),K=J.length-ee.length;if(ee.startsWith("params:")){W=!0,G=K;continue}if(!W||ee===""||ee.startsWith("#"))continue;if(K<=G&&!ee.startsWith("params:")){W=!1;continue}let Y=ee.match(/^([a-zA-Z0-9_]+):\s*$/);if(Y&&K===G+2){Z=Y[1],de=K,ne[Z]={};continue}if(Z&&K>de){let te=ee.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(te){let oe=te[1],le=te[2].trim();if((le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),oe!=="options"){let ce=Number(le);ne[Z][oe]=isNaN(ce)?le:ce}}if(ee.startsWith("- value:")){ne[Z].options||(ne[Z].options=[]);let oe=ee.match(/^- value:\s*(.+)$/);if(oe){let le=oe[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),ne[Z].options.push({value:le,label:le})}}if(ee.startsWith("label:")&&ne[Z].options&&ne[Z].options.length>0){let oe=ee.match(/^label:\s*(.+)$/);if(oe){let le=oe[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),ne[Z].options[ne[Z].options.length-1].label=le}}}}P=ne}catch{P={}}L.innerHTML="";let j={};for(let[R,W]of Object.entries(P||{})){let G=W.type||"float",Z=document.createElement("div");Z.className="flex flex-col gap-0.5";let de=document.createElement("label");if(de.className="font-mono",de.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",de.textContent=`${R} (${G})`,Z.appendChild(de),G==="select"&&Array.isArray(W.options)){let ne=document.createElement("select");ne.className="admin-ui-select",ne.style.cssText="font-size:13px;padding:4px 8px",ne.dataset.paramKey=R;for(let J of W.options){let ee=document.createElement("option");ee.value=J.value,ee.textContent=J.label||J.value,J.value===String(W.default)&&(ee.selected=!0),ne.appendChild(ee)}j[R]=String(W.default||W.options[0]&&W.options[0].value||""),ne.addEventListener("change",()=>{v()}),Z.appendChild(ne)}else{let ne=W.min!=null?W.min:0,J=W.max!=null?W.max:10,ee=W.step!=null?W.step:G==="int"?1:.1,K=W.default!=null?W.default:ne,Y=document.createElement("div");Y.className="flex items-center gap-2";let te=document.createElement("input");te.type="range",te.min=ne,te.max=J,te.step=ee,te.value=K,te.dataset.paramKey=R,te.className="flex-1",te.style.accentColor="var(--color-primary)";let oe=document.createElement("span");oe.className="font-mono",oe.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",oe.textContent=String(K),te.addEventListener("input",()=>{oe.textContent=te.value,v()}),Y.appendChild(te),Y.appendChild(oe),Z.appendChild(Y),j[R]=K}L.appendChild(Z)}return j}function _(){let I=document.getElementById("effectPreviewParams");if(!I)return{};let L={};return I.querySelectorAll("[data-param-key]").forEach(P=>{L[P.dataset.paramKey]=P.type==="range"?Number(P.value):P.value}),L}async function w(){let I=document.getElementById("effectEditModalTextarea"),L=document.getElementById("effectPreviewText"),P=document.getElementById("effectPreviewStyle"),j=document.getElementById("effectPreviewError");if(!I||!L||!P)return;let R=I.value;if(!R||R===y.t("effectLoadContent")||R===y.t("effectsNetworkError"))return;let W=_();j?.classList.add("hidden");try{let G=await b("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:R,params:W})}),Z=await G.json().catch(()=>({}));G.ok?(P.textContent=Z.keyframes||"",L.style.animation=Z.animation||"none",L.style.animationComposition=Z.animationComposition||""):(L.style.animation="none",P.textContent="",j&&(j.textContent=Z.error||y.t("previewFailed"),j.classList.remove("hidden")))}catch{L.style.animation="none",P.textContent="",j&&(j.textContent=y.t("effectsNetworkError"),j.classList.remove("hidden"))}}function v(){clearTimeout(B),B=setTimeout(()=>w(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                ${h("effectPreviewStyle","")}
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",C),document.getElementById("effectEditModalCancel").addEventListener("click",C),document.getElementById("effectEditModal").addEventListener("click",R=>{R.target===R.currentTarget&&C()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let R=document.getElementById("effectEditModalTextarea");R&&(O(R.value),v())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{w()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let R=document.getElementById("effectEditModal"),W=document.getElementById("effectEditModalTextarea"),G=document.getElementById("effectEditModalSave"),Z=R?.dataset.effectName;if(!(!Z||!W)){G.disabled=!0;try{let de=await b("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z,content:W.value})}),ne=await de.json().catch(()=>({}));de.ok?(g(ne.message||y.t("effectSaveFallback"),!0),C(),await d()):g(ne.error||y.t("saveFailed"),!1)}catch{g(y.t("effectsNetworkError"),!1)}finally{G.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let R=document.getElementById("effectReloadBtn");R&&(R.disabled=!0);try{let W=await b("/admin/effects/reload",{method:"POST"}),G=await W.json().catch(()=>({}));W.ok?(g(G.message||y.t("effectsReloadFallback")),await d()):g(G.error||y.t("reloadFailed"),!1)}catch{g(y.t("effectsNetworkError"),!1)}finally{R&&(R.disabled=!1)}});async function I(R){if(!R)return;let W=new FormData;W.append("effectfile",R);try{let G=await b("/admin/effects/upload",{method:"POST",body:W}),Z=await G.json().catch(()=>({}));G.ok?(g(Z.message||y.t("effectUploadFallback")),await d()):g(Z.error||y.t("uploadFailed"),!1)}catch{g(y.t("effectsNetworkError"),!1)}}let L=document.getElementById("effectUploadInput"),P=L&&!L.dataset.uploadWired;P&&(L.dataset.uploadWired="1"),(P?L:null)?.addEventListener("change",async R=>{await I(R.target.files?.[0]),R.target.value=""});let j=document.getElementById("sec-effects-mgmt");if(j){let R=0,W=ne=>{ne.preventDefault(),R++,j.classList.add("is-drag")},G=ne=>{ne.preventDefault()},Z=ne=>{ne.preventDefault(),R=Math.max(0,R-1),R===0&&j.classList.remove("is-drag")},de=async ne=>{ne.preventDefault(),R=0,j.classList.remove("is-drag");let J=ne.dataTransfer?.files?.[0];if(J){if(!/\.(dme|dme\.zip)$/i.test(J.name)){g(y.t("fxToastBadExt"),!1);return}await I(J)}};j.addEventListener("dragenter",W),j.addEventListener("dragover",G),j.addEventListener("dragleave",Z),j.addEventListener("drop",de)}}function i(I){let L=(I||"").toLowerCase();return L.startsWith("glow")||L.includes("neon")?"GLOW":L.startsWith("shake")?"SHAKE":L.startsWith("wave")||L.startsWith("spin")||L.startsWith("bounce")||L.startsWith("zoom")||L.startsWith("fire")||L.includes("motion")?"MOTION":L.startsWith("rainbow")||L.startsWith("blink")||L.includes("color")?"COLOR":L.startsWith("type")||L.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function d(){let I=document.getElementById("effectsList");if(I)try{let L=await b("/admin/effects");if(!L.ok){I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsLoadFailed")+"</span>";return}let P=await L.json();t.all=P.effects||[],r(),o()}catch{I.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+y.t("effectsNetworkError")+"</span>"}}function r(){let I=document.getElementById("effectsFilterRow");if(!I)return;let L={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(G=>{L[i(G.name)]+=1});let P=t.all.length,j=[["ALL",y.t("fxChipAll"),P],["GLOW",y.t("fxCatGlow"),L.GLOW],["MOTION",y.t("fxCatMotion"),L.MOTION],["COLOR",y.t("fxCatColor"),L.COLOR],["SHAKE",y.t("fxCatShake"),L.SHAKE],["TEXT",y.t("fxCatText"),L.TEXT]];L.MISC>0&&j.push(["MISC",y.t("fxCatMisc"),L.MISC]);let R=j.map(([G,Z,de])=>`<span class="hud-filter-chip ${t.filter===G?"is-active":""}" data-effect-filter="${G}">${Z} ${de}</span>`).join(""),W=I.querySelector("[data-toolbar-spacer]");W?(I.querySelectorAll("[data-effect-filter]").forEach(G=>G.remove()),W.insertAdjacentHTML("beforebegin",R)):I.innerHTML=R,I.querySelectorAll("[data-effect-filter]").forEach(G=>{G.addEventListener("click",()=>{t.filter=G.dataset.effectFilter,r(),o()})})}function m(I){let L=(G,Z)=>{let de=document.querySelector(G);de&&(de.textContent=Z==null?"\u2014":String(Z))},P=I.length,j=I.filter(G=>G.enabled!==!1).length,R=new Set(I.map(G=>i(G.name))),W=I.filter(G=>!p[G.name]).length;L("[data-eflib-total]",P),L("[data-eflib-active]",j),L("[data-eflib-cats]",R.size),L("[data-eflib-user]",W)}function o(){let I=document.getElementById("effectsList");if(!I)return;let L=t.all;m(L);let P=t.filter==="ALL"?L:L.filter(j=>i(j.name)===t.filter);if(!P.length){I.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(L.length?y.t("fxNoFilterMatch"):y.t("noEffectsLoaded"))+"</span>";return}$&&$.disconnect(),I.innerHTML="",P.forEach(j=>{let R=i(j.name),W=R==="GLOW"?"is-glow":R==="COLOR"?"is-color":R==="TEXT"?"is-text":"",G=p[j.name]||"",Z=!!G,de=document.createElement("div");de.className="hud-effect-card"+(t.selected===j.name?" is-selected":""),de.dataset.effectName=j.name,de.title=[j.description,`file: ${j.filename}`].filter(Boolean).join(`
`);var ne="effect_"+j.name;let J=y.t(ne)!==ne?y.t(ne):j.label||j.name,ee=Z?"built-in":"user",K=G?`animation:${G};animation-play-state:paused;`:"";if(de.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${a(y.t("fxCat"+R.charAt(0)+R.slice(1).toLowerCase())||R)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${W}"><span class="effect-demo-text" style="${K}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${a(J)}</div>
          <div class="hud-effect-card-meta">${a(ee)} \xB7 ${a(j.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${y.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${y.t("lbDelete")}</button>
        </div>
      `,I.appendChild(de),G){let oe=E();oe&&oe.observe(de)}else{let oe=M.get(j.name);oe&&oe!=="failed"?(x(oe),N(de,oe)):oe!=="failed"&&T(j.name).then(le=>{if(!le)return;let ce=I.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(j.name)}"]`);ce&&N(ce,le)})}de.addEventListener("click",oe=>{oe.target.closest("[data-role]")||u(j)});let Y=de.querySelector('[data-role="edit"]'),te=de.querySelector('[data-role="delete"]');Y.addEventListener("click",async()=>{let oe=document.getElementById("effectEditModal"),le=document.getElementById("effectEditModalTitle"),ce=document.getElementById("effectEditModalFile"),ue=document.getElementById("effectEditModalTextarea"),Ee=document.getElementById("effectEditModalSave");if(!oe)return;A=document.activeElement instanceof HTMLElement?document.activeElement:null,le.textContent=j.label||j.name,ce.textContent=j.filename,ue.value=y.t("effectLoadContent"),ue.disabled=!0,Ee.disabled=!0,oe.dataset.effectName=j.name,oe.classList.remove("hidden"),oe.classList.add("flex"),oe.addEventListener("keydown",F),ue.focus();let ke=document.getElementById("effectPreviewText"),Ae=document.getElementById("effectPreviewStyle"),re=document.getElementById("effectPreviewError"),ie=document.getElementById("effectPreviewParams");ke&&(ke.style.animation="none"),Ae&&(Ae.textContent=""),re&&re.classList.add("hidden"),ie&&(ie.innerHTML="");try{let H=await b(`/admin/effects/${encodeURIComponent(j.name)}/content`),V=await H.json().catch(()=>({}));H.ok?(ue.value=V.content||"",ue.disabled=!1,Ee.disabled=!1,ue.focus(),O(ue.value),w()):(ue.value=V.error||y.t("effectLoadContentFailed"),g(V.error||y.t("effectLoadContentFailed"),!1))}catch{ue.value=y.t("effectsNetworkError"),g(y.t("effectsNetworkError"),!1)}}),te.addEventListener("click",async()=>{let oe=j.label||j.name;if(await window.HudConfirm?.open({icon:"\u2297",title:y.t("fxDeleteTitle"),subtitle:y.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${y.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${oe}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${y.t("fxDeleteWarn")}
                </div>`,confirmLabel:y.t("fxDeleteConfirm"),cancelLabel:y.t("cancel"),width:400}))try{let ce=await b("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j.name})}),ue=await ce.json().catch(()=>({}));ce.ok?(g(ue.message||y.t("effectDeleteFallback"),!0),await d()):g(ue.error||y.t("deleteFailed"),!1)}catch{g(y.t("effectsNetworkError"),!1)}})})}function a(I){return String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(I){let L={name:"",label:"",description:"",params:[]};if(!I)return L;let P=I.split(`
`),j="top",R=null;for(let W of P){let G=W.replace(/\r$/,""),Z=G.trimStart();if(!Z||Z.startsWith("#"))continue;let de=G.length-Z.length;if(de===0){if(j="top",R&&(L.params.push(R),R=null),Z==="params:"){j="params";continue}let ne=Z.match(/^([a-z_]+):\s*(.+)$/);ne&&(ne[1]==="name"?L.name=ne[2].trim():ne[1]==="label"?L.label=ne[2].trim():ne[1]==="description"&&(L.description=ne[2].trim()));continue}if(!(j!=="params"&&j!=="param-fields"&&j!=="options")){if(de===2&&(j==="params"||j==="param-fields"||j==="options")){R&&(L.params.push(R),R=null);let ne=Z.match(/^(\w+):$/);ne&&(R={key:ne[1]},j="param-fields");continue}if(de===4&&j==="param-fields"&&R){let ne=Z.match(/^(\w+):\s*(.*)$/);if(ne){let J=ne[1],ee=ne[2].trim();J==="label"?R.label=ee:J==="type"?R.type=ee:J==="default"?R.default=ee:J==="min"?R.min=parseFloat(ee):J==="max"?R.max=parseFloat(ee):J==="step"?R.step=parseFloat(ee):J==="options"&&(R.options=[],j="options")}continue}if(j==="options"&&R&&de>=6){let ne=Z.match(/^-\s*value:\s*(.+)$/);ne&&(R.options||(R.options=[]),R.options.push({value:ne[1].trim(),label:ne[1].trim()}));let J=Z.match(/^label:\s*(.+)$/);J&&R.options&&R.options.length>0&&(R.options[R.options.length-1].label=J[1].trim())}}}return R&&L.params.push(R),L}function f(I,L){let P=I.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),j=P?P[1]:"",R=I.match(/^animation:\s*["']?(.+?)["']?\s*$/m),W=R?R[1].trim():"";for(let G of L.params){let Z=G.default!==void 0?G.default:"",de=new RegExp(`\\{${G.key}\\}`,"g");j=j.replace(de,Z),W=W.replace(de,Z)}return{keyframes:j,animation:W}}function e(I,L){if(I==="COLOR"){let P=L.find(j=>j.key==="duration");if(P&&P.default){let j=parseFloat(P.default);if(j<.25)return"crimson";if(j<.33)return"amber"}}if(I==="MOTION"){let P=L.find(j=>j.key==="height");if(P&&P.default){let j=parseFloat(P.default);if(j>30)return"crimson";if(j>24)return"amber"}}return"lime"}function n(I,L){return I==="COLOR"?L==="crimson"?y.t("fxHintFlashBlock"):L==="amber"?y.t("fxHintFlashWarn"):y.t("fxHintFlashOk"):L==="crimson"?y.t("fxHintAmpBlock"):L==="amber"?y.t("fxHintAmpWarn"):y.t("fxHintAmpOk")}function s(I,L){let P=c(L),{keyframes:j,animation:R}=f(L,P),W=i(I.name),G=P.params.filter(ue=>ue.type!=="select"),Z=P.params.filter(ue=>ue.type==="select"),de=e(W,P.params),ne=de==="crimson"?"BLOCK":de==="amber"?"WARN":"OK",J=n(W,de),ee="fx-anim-"+I.name.replace(/[^a-z0-9]/gi,"-"),K=j&&R?h(ee,j):"",Y=R?`animation:${R};animation-play-state:running;`:"",te=G.map(ue=>{let Ee=parseFloat(ue.default)||0,ke=ue.min??0,Ae=ue.max??100,re=Math.max(0,Math.min(100,(Ee-ke)/(Ae-ke)*100)),ie=(ue.label||"").match(/\(([^)]+)\)$/),H=ie?ie[1]:"",V=ue.label||ue.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${a(V)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Ee}<span style="color:var(--color-text-muted);margin-left:2px">${a(H)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${re}%"></div>
          <div class="fx-slider-knob" style="left:${re}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${ke}${a(H)}</span><span>${Ae}${a(H)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${y.t("fxNoNumericParams")}</span>`,oe=Z.map(ue=>{let Ee=ue.options||[],ke=String(ue.default||""),Ae=Ee.map(re=>`<span class="fx-radio-btn${re.value===ke||re.label===ke?" is-active":""}">${a(re.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${a(ue.label||ue.key)}</div>
        <div class="fx-radio-group">${Ae||"<span>\u2014</span>"}</div>
      </div>`}).join(""),le=["dark","light","photo"].map(ue=>{let Ee=ue==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ue}">
        <span class="fx-preview-bg-label">${ue.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Y}color:${Ee}">ABC</span>
      </div>`}).join(""),ce=`${K}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${y.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${te}</div>
      </div>`;return oe&&(ce+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${oe}</div>
      </div>`),ce+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${y.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${le}</div>
      </div>
      <div class="fx-warn-box${de!=="lime"?" is-"+de:""}">
        <span class="fx-warn-chip${de!=="lime"?" is-"+de:""}">${ne}</span>
        <span class="fx-warn-text">${a(J)}</span>
      </div>
    </div>`,ce}async function u(I){t.selected=I.name;let L=document.getElementById("effectsInspector"),P=document.getElementById("effectsInspectorTitle"),j=document.getElementById("effectsInspectorKicker"),R=document.getElementById("effectsInspectorBody");if(L){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),P&&(P.textContent=I.label||I.name),j&&(j.textContent="LOADING"),R&&(R.className="hud-inspector-body",R.textContent="# "+y.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(W=>{W.classList.toggle("is-selected",W.dataset.effectName===I.name)});try{let W=await b(`/admin/effects/${encodeURIComponent(I.name)}/content`),G=await W.json().catch(()=>({}));if(W.ok){let Z=G.content||"";R&&(R.className="hud-inspector-body has-param-panel",R.innerHTML=s(I,Z)),j&&(j.textContent=i(I.name))}else R&&(R.className="hud-inspector-body",R.textContent="# "+(G.error||y.t("effectLoadContentFailed"))),j&&(j.textContent="ERROR")}catch{R&&(R.className="hud-inspector-body",R.textContent="# "+y.t("effectsNetworkError")),j&&(j.textContent="NETWORK")}}}function S(){let I=document.getElementById("effectsInspectorReload"),L=document.getElementById("effectsInspectorEdit");I?.addEventListener("click",async()=>{if(!t.selected){g(y.t("fxSelectFirst"),!1);return}let P=t.all.find(j=>j.name===t.selected);P&&await u(P)}),L?.addEventListener("click",()=>{if(!t.selected){g(y.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",S())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var ut=ge(()=>{(function(){"use strict";var b={};window.DanmuEvents={on:function(g,y){b[g]||(b[g]=[]),b[g].push(y)},off:function(g,y){b[g]=(b[g]||[]).filter(function(h){return h!==y})},emit:function(g,y){(b[g]||[]).forEach(function(h){h(y)})}}})()});var mt=ge(()=>{(function(){"use strict";let b="sec-events",g="/admin/audit?limit=200",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(_){return String(_).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},A={events:[],filterSev:"all",filterCat:"all",timer:0};function U(_){let w=(_.source||_.kind||"").toLowerCase(),v=(_.action||"").toLowerCase();return w.includes("plugin")||v.includes("plugin")?"plugin":w.includes("webhook")||v.includes("webhook")?"webhook":w.includes("rate")||v.includes("rate")||v.includes("limit")?"rate":w.includes("filter")||v.includes("filter")?"filter":w.includes("overlay")||v.includes("overlay")||w==="broadcast"?"overlay":w.includes("backup")||v.includes("backup")?"backup":w.includes("msg")||w==="messaging"?"msg":w.includes("ws")||w==="websocket"?"ws":"system"}let F=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,C=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function p(_){let w=(_.action||_.kind||"").toLowerCase();return _.severity?_.severity:F.test(w)?"error":C.test(w)?"warn":"info"}function M(_){let w=_.source||"system",v=_.action||_.kind||"";return v?`${w.toUpperCase()}_${v.toUpperCase()}`:w.toUpperCase()}function D(_){if(!_)return"\u2014";let w=new Date(_*1e3),v=l=>String(l).padStart(2,"0");return`${v(w.getHours())}:${v(w.getMinutes())}:${v(w.getSeconds())}`}function x(_){if(_.message)return _.message;let w=_.meta||{},v=[];if(w.from&&w.to)v.push(`${w.from} \u2192 ${w.to}`);else if(w.text_preview)v.push(`"${w.text_preview.slice(0,60)}"`);else if(Object.keys(w).length){let l=Object.keys(w).slice(0,3);for(let i of l)v.push(`${i}=${JSON.stringify(w[i]).slice(0,30)}`)}return v.length?v.join(" \xB7 "):`${_.source||"system"}.${_.action||_.kind||"?"}`}function T(){return`
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
      </div>`}function N(){let _=document.querySelector("[data-ev-rows]");if(!_)return;let w=A.events,v=w.filter(t=>!(A.filterSev!=="all"&&p(t)!==A.filterSev||A.filterCat!=="all"&&U(t)!==A.filterCat));v.length===0?(_.innerHTML="",window.AdminEmpty?_.appendChild(window.AdminEmpty.render("events")):_.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):_.innerHTML=v.map(t=>{let d=p(t);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${h(D(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${h(M(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${h(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${h(x(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:w.length,info:0,warn:0,error:0};for(let t of w)l[p(t)]+=1;Object.keys(l).forEach(t=>{let d=document.querySelector(`[data-ev-cnt="${t}"]`);d&&(d.textContent=String(l[t]))});let i=document.querySelector("[data-ev-total]");i&&(i.textContent=`${v.length} / ${w.length}`)}async function $(){try{let _=await fetch(g,{credentials:"same-origin"});if(!_.ok)return;let w=await _.json();A.events=Array.isArray(w.events)?w.events:[],N()}catch{}}function E(){let _=document.getElementById(b);_&&_.addEventListener("click",w=>{let v=w.target.closest("[data-ev-sev]");if(v){_.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===v)),A.filterSev=v.dataset.evSev,N();return}let l=w.target.closest("[data-ev-cat]");if(l){_.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===l)),A.filterCat=l.dataset.evCat,N();return}let i=w.target.closest("[data-ev-action]");if(i){if(i.dataset.evAction==="refresh")$();else if(i.dataset.evAction==="export"){let t=new Blob([JSON.stringify(A.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(t),r=document.createElement("a");r.href=d,r.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function B(){let _=document.querySelector(".admin-dash-grid"),w=document.getElementById(b);if(!w)return;let l=(_?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";w.style.display=l?"":"none",l?($(),A.timer||(A.timer=setInterval($,15e3))):A.timer&&(clearInterval(A.timer),A.timer=0)}function O(){let _=document.getElementById("settings-grid");!_||document.getElementById(b)||(_.insertAdjacentHTML("beforeend",T()),E(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&O(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{O(),B()}),O()})})()});var pt=ge(()=>{(function(){"use strict";let b="sec-modqueue",g="/admin/modqueue/list",A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(v){return String(v).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},U={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},F={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},C={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function p(v){let l=0,i=String(v||"");for(let t=0;t<i.length;t++)l=l*31+i.charCodeAt(t)&65535;return l%360}function M(v){if(!v.created_at_ms)return null;let l=(Date.now()-v.created_at_ms)/1e3,i=Math.max(0,U.autoRejectSec-l);return Math.ceil(i)}function D(v,l){let i=(v.severity||"low").toLowerCase(),t=F[i]||F.low,d=p(v.fp),r=String(v.fp||"\u2014").slice(0,8),m=v.nick||v.nickname||ServerI18n.t("audienceAnonymous"),o=(m||"?").slice(0,2).toUpperCase(),a=l==="pending"?M(v):null,c=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${A(v.id||"")}">${A(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${A(v.id||"")}">${A(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${A(v.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",f=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${A(ServerI18n.t("modqueueStampApproved"))} \xB7 ${A(v.resolved_by||"admin")} \xB7 ${A(v.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${v.auto_rejected?`${A(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${A(ServerI18n.t("modqueueAutoRejectTimeout",{n:U.autoRejectSec}))}`:`${A(ServerI18n.t("modqueueStampRejected"))} \xB7 ${A(v.resolved_by||"admin")} \xB7 ${A(v.resolved_ago||"")}`}
        </div>`:"",e=l==="pending"&&a!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${a}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${A(v.id||"")}" data-mq-sev="${A(i)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${A(o)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${A(m)}</div>
            <div class="admin-mq-card__fp">fp:${A(r)}</div>
          </div>
          <div class="admin-mq-card__time">${A(v.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${A(v.content||v.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${A(ServerI18n.t(C[i]||C.low))}</span>
          <span class="admin-mq-card__rule">${A(ServerI18n.t("modqueueRuleLabel"))}: ${A(v.rule||v.matched_rule||"?")}</span>
          ${e}
        </div>
        ${c}
        ${f}
      </div>`}function x(v,l,i){v&&(v.innerHTML=l.map(t=>D(t,i)).join(""))}function T(){let v=document.getElementById(b);if(!v)return;v.querySelectorAll("[data-mq-bulk]").forEach(i=>{i.disabled=!0}),v.querySelector(".admin-mq__body").hidden=!0;let l=v.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let v=document.getElementById(b);if(!v)return;if(U.pending.length+U.approved.length+U.rejected.length===0){T();return}v.querySelector(".admin-mq__body").hidden=!1;let i=v.querySelector("[data-mq-empty]");i&&(i.hidden=!0),x(v.querySelector("[data-mq-col-pending]"),U.pending,"pending"),x(v.querySelector("[data-mq-col-approved]"),U.approved,"approved"),x(v.querySelector("[data-mq-col-rejected]"),U.rejected,"rejected");let t=(o,a)=>{v.querySelectorAll(o).forEach(c=>{c.textContent=String(a)})};t("[data-mq-cnt-pending]",U.pending.length),t("[data-mq-cnt-approved]",U.approved.length),t("[data-mq-cnt-rejected]",U.rejected.length);let d=U.pending.length===0;v.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=d});let r=U.pending[U.pending.length-1],m=v.querySelector("[data-mq-oldest]");if(m){let o=r?M(r):null;m.textContent=o!=null?`oldest: ${o}s`:""}t("[data-mq-throughput]",U.stats.throughput.toFixed?U.stats.throughput.toFixed(1):U.stats.throughput),t("[data-mq-avg-review]",U.stats.avg_review_sec.toFixed?U.stats.avg_review_sec.toFixed(1):U.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round(U.stats.auto_reject_pct||0)+"%")}async function $(){try{let v=await fetch(g,{credentials:"same-origin"});if(!v.ok){U.pending=[],U.approved=[],U.rejected=[],N();return}let l=await v.json();U.pending=Array.isArray(l.pending)?l.pending:[],U.approved=Array.isArray(l.approved)?l.approved:[],U.rejected=Array.isArray(l.rejected)?l.rejected:[],U.stats=l.stats||U.stats,typeof l.auto_reject_sec=="number"&&(U.autoRejectSec=l.auto_reject_sec),N()}catch{}}async function E(v,l,i){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:v,...i||{}})});if(t.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),$();else{let d=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function B(){return`
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
      </div>`}function O(){let v=document.getElementById(b);v&&v.addEventListener("click",async l=>{let i=l.target.closest("[data-mq-action]");if(i){let d=i.dataset.mqId,r=i.dataset.mqAction;(r==="approve"||r==="reject")&&E(d,r);return}let t=l.target.closest("[data-mq-bulk]");if(t){let d=t.dataset.mqBulk,r=d==="approve-low";if(!await window.HudConfirm?.open({icon:r?"\u2713":"\u2298",title:r?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:r?"warn":"danger",body:r?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:r?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let o=d.startsWith("approve")?"approve":"reject",a=d.endsWith("low")?"low":"high";E(null,"bulk",{action:o,severity:a})}})}function _(){let v=document.querySelector(".admin-dash-grid"),l=document.getElementById(b);if(!l)return;let i=(location.hash||"").replace("#/","").split("/"),t=v?.dataset.activeRoute||i[0]||"",d=v?.dataset.activeLeaf||i[1]||"",r=t==="modqueue"||t==="moderation"&&(d==="queue"||d===""||d==="moderation");l.style.display=r?"":"none",r?(U.timer||($(),U.timer=setInterval($,4e3)),U.countdownTimer||(U.countdownTimer=setInterval(N,1e3))):(U.timer&&(clearInterval(U.timer),U.timer=0),U.countdownTimer&&(clearInterval(U.countdownTimer),U.countdownTimer=0))}function w(){let v=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!v||document.getElementById(b)||(v.insertAdjacentHTML("beforeend",B()),O(),_())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(b)&&w(),_()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",_),document.addEventListener("admin-panel-rendered",()=>{w(),_()}),w()})})()});var vt=ge(()=>{(function(){"use strict";let b="sec-modbans-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(O){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[O]})},y=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],h={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},A={fingerprint:"FP",ip:"IP",nick:"NICK"},U={rows:[],refreshTimer:0};async function F(){try{let B=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!B.ok)return;let O=await B.json();U.rows=Array.isArray(O.bans)?O.bans:[],M()}catch{}}function C(B){if(!B||B<=0)return"\u2014";let O=Math.floor(B/86400),_=Math.floor(B%86400/3600),w=Math.floor(B%3600/60);return O>0?`${O}d ${_}h`:_>0?`${_}h ${w}m`:`${w}m`}function p(B){let O=B.target_kind;return O==="fingerprint"?`fp:${(B.target||"").slice(0,8)}`:O==="nick"?`@${B.target}`:B.target||"\u2014"}function M(){let B=document.querySelector("[data-modbans-list]");if(!B)return;let O=U.rows||[],_=document.querySelector("[data-modbans-count]");if(_&&(_.textContent=String(O.length)),O.length===0){B.innerHTML="";let w=window.AdminEmpty.render("blacklist");w.dataset.emptyKind="modbans",B.appendChild(w);return}B.innerHTML=O.map(function(w){let v=w.status==="expired",l=w.status==="permanent",i="admin-modbans-chip is-"+w.status,t=l?ServerI18n.t("modbansPermanent"):v?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:C(w.remaining_s)}),d=encodeURIComponent(w.target_kind)+"|"+encodeURIComponent(w.target);return`
        <div class="admin-modbans-row ${v?"is-expired":""}">
          <span class="admin-modbans-target">${g(p(w))}</span>
          <span class="admin-modbans-kind">${g(A[w.target_kind]||w.target_kind)}</span>
          <span class="admin-modbans-reason">${g(w.reason||"\u2014")}</span>
          <span class="${i}">
            ${w.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${g(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${v?"disabled":""}
            title="${v?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${v?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(B){let O=B||{},_=O.kind||"ban",w=window.HudConfirm,v=!O.target,l=O.target_kind||"fingerprint",i=O.target||"";return new Promise(function(t){if(!w){t(!1);return}let d=86400,r=!1,m=12,o="hour",a=document.createElement("div");a.className="admin-modbans-modal-body",a.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${g(h[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${g(A[l]||"?")} ${g((_||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${g(i?p({target_kind:l,target:i}):"\u2014")}</div>
          </div>
        </div>
        ${v?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(ne){return`<button type="button" class="admin-modbans-modal-preset${ne===l?" is-active":""}"
                data-modbans-target-kind="${ne}">${g(h[ne])} ${g(A[ne])}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let c=a.querySelector("[data-modbans-custom-row]"),f=a.querySelector("[data-modbans-custom-input]"),e=a.querySelector("[data-modbans-custom-seconds]"),n=a.querySelector("[data-modbans-when]"),s=a.querySelector("[data-modbans-custom]"),u=a.querySelector("[data-modbans-target]"),S=a.querySelector("[data-modbans-target-icon]"),k=a.querySelector("[data-modbans-target-label]"),I=a.querySelector("[data-modbans-target-val]"),L=function(){S.textContent=h[l]||"?",k.textContent=`${A[l]||"?"} ${(_||"ban").toUpperCase()}`,I.textContent=i?p({target_kind:l,target:i}):"\u2014"},P=function(){return Math.max(1,parseInt(f.value,10)||1)*(o==="day"?86400:3600)},j=function(){if(d===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let ne=new Date(Date.now()+d*1e3),J=K=>String(K).padStart(2,"0"),ee=`${ne.getFullYear()}-${J(ne.getMonth()+1)}-${J(ne.getDate())} ${J(ne.getHours())}:${J(ne.getMinutes())}`;r?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:m,unit:ServerI18n.t(o==="day"?"modbansDay":"modbansHour"),stamp:ee}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:C(d),stamp:ee}),n.classList.remove("is-custom"))},R=function(){let ne=P();e.textContent=`= ${ne.toLocaleString()}s`,r&&(m=Math.max(1,parseInt(f.value,10)||1),d=ne,j())},W=a.querySelector("[data-modbans-presets]"),G=function(){r=!0,c.hidden=!1,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(ne){ne.classList.toggle("is-active",ne===s)}),R()},Z=function(ne){r=!1,c.hidden=!0,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===ne)})};L(),j(),R(),a.addEventListener("click",function(ne){let J=ne.target.closest("[data-modbans-target-kind]");if(J){l=J.dataset.modbansTargetKind,J.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Y){Y.classList.toggle("is-active",Y===J)}),L();return}if(ne.target.closest("[data-modbans-custom]")){G();return}let ee=ne.target.closest("[data-modbans-custom-unit]");if(ee){o=ee.dataset.modbansCustomUnit||"hour",a.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Y){Y.classList.toggle("is-active",Y===ee)}),R();return}let K=ne.target.closest("[data-modbans-duration]");K&&(d=parseInt(K.dataset.modbansDuration,10)||0,Z(K),j())}),f.addEventListener("input",R),u&&u.addEventListener("input",function(){i=u.value.trim(),L()});let de=a.querySelector("[data-modbans-reason]");w.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:a,width:480}).then(function(ne){if(!ne){t(!1);return}if(!i){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}d===0?w.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${g(p({target_kind:l,target:i}))}</b>`})}).then(function(J){if(!J){t(!1);return}x(l,i,d,de.value.trim(),_).then(t)}):x(l,i,d,de.value.trim(),_).then(t)})})}async function x(B,O,_,w,v){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:O,duration_s:_,reason:w||"",kind:v||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast(_===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:C(_)}),!0),F(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function T(B){let O=(B||"").split("|");if(O.length!==2)return;let _=decodeURIComponent(O[0]),w=decodeURIComponent(O[1]);try{let v=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:_,target:w})});if(!v.ok)throw new Error(`HTTP ${v.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),F()}catch(v){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:v.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
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
      </div>`}function $(){let B=document.getElementById(b);if(!B||B.dataset.modbansBound==="1")return;B.dataset.modbansBound="1",B.addEventListener("click",function(_){if(_.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let w=_.target.closest("[data-modbans-unban]");w&&!w.disabled&&T(w.dataset.modbansUnban)});let O=B.querySelector("[data-modbans-list]");O&&window.AdminSkeletons&&!O.children.length&&O.appendChild(window.AdminSkeletons.listRows({rows:4}))}function E(){let B=document.getElementById("settings-grid");!B||document.getElementById(b)||(B.insertAdjacentHTML("beforeend",N()),$(),F(),U.refreshTimer||(U.refreshTimer=setInterval(F,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&E()}),window.ModBans={openPicker:D,refreshList:F,formatTarget:p,formatRemaining:C}})()});var ft=ge(()=>{(function(){"use strict";let b="admin-mobile-nav-root",g=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],y=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],h={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},A=!1,U=0;function F(){return`
      <nav id="${b}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${y.map($=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${$.route}">
              <span class="admin-mobile-nav__o-icon">${$.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${$.labelKey?ServerI18n.t($.labelKey):$.label}</span>
                <span class="admin-mobile-nav__o-desc">${$.descKey?ServerI18n.t($.descKey):$.desc||""}</span>
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
          ${g.map($=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${$.id}" data-mn-route="${$.route||""}" ${$.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${$.icon}</span>
              <span class="admin-mobile-nav__label">${$.labelKey?ServerI18n.t($.labelKey):$.label}</span>
              ${$.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${$.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function C(){let $=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",E=h[$]||$;return g.some(B=>B.id===E)?E:y.some(B=>B.route===E)?"more":""}function p(){let $=document.getElementById(b);if(!$)return;let E=C();$.querySelectorAll("[data-mn-tab]").forEach(B=>{B.classList.toggle("is-active",B.dataset.mnTab===E),B.dataset.mnTab!=="more"&&B.setAttribute("aria-current",B.dataset.mnTab===E?"page":"false")})}function M($){let E=document.getElementById(b);if(!E)return;A=$,E.dataset.overflow=$?"open":"closed",E.querySelector("[data-mn-overflow]").hidden=!$,E.querySelector("[data-mn-backdrop]").hidden=!$;let B=E.querySelector("[data-mn-tab='more']");B?.classList.toggle("is-active",$),B?.setAttribute("aria-expanded",$?"true":"false")}function D($){if($.target.closest("[data-mn-backdrop]")){M(!1);return}if($.target.closest("[data-mn-logout]")){M(!1);let O=document.getElementById("logoutButton");O&&O.click();return}let E=$.target.closest("[data-mn-tab]");if(E){if(E.dataset.mnTab==="more"){M(!A);return}M(!1),E.dataset.mnRoute&&(location.hash="#/"+E.dataset.mnRoute);return}let B=$.target.closest("[data-mn-route]");B&&B.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+B.dataset.mnRoute)}async function x(){try{let $=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!$.ok)return;let E=await $.json(),B=Array.isArray(E.pending)?E.pending.length:0;U=B;let O=document.querySelector("[data-mn-badge='pending']");if(!O)return;O.textContent=String(B),O.hidden=!(B>0)}catch{}}function T(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let $=0;function E(){let B=document.activeElement,O=B&&(B.tagName==="INPUT"||B.tagName==="TEXTAREA"||B.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!O)}document.addEventListener("focusin",()=>{cancelAnimationFrame($),$=requestAnimationFrame(E)}),document.addEventListener("focusout",()=>{cancelAnimationFrame($),$=requestAnimationFrame(()=>setTimeout(E,50))})}function N(){document.getElementById(b)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",F()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{M(!1),p()}),p(),x(),setInterval(x,8e3),T())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var ht=ge(()=>{(function(){"use strict";var b="admin-session-expired-root",g=!1,y=null;function h(p,M){try{var D=window.ServerI18n&&ServerI18n.t(p);return D&&D!==p?D:M}catch{return M}}function A(){var p=document.getElementById(b);if(p&&p.remove(),document.body.classList.remove("is-session-expired"),g=!1,y&&y.focus)try{y.focus()}catch{}y=null}function U(p){if(p.key==="Tab"){var M=document.getElementById(b);if(M){var D=M.querySelectorAll("input, button");if(D.length){var x=D[0],T=D[D.length-1];p.shiftKey&&document.activeElement===x?(p.preventDefault(),T.focus()):!p.shiftKey&&document.activeElement===T&&(p.preventDefault(),x.focus())}}}}function F(){if(!(g||document.getElementById(b))){g=!0,y=document.activeElement,document.body.classList.add("is-session-expired");var p=document.createElement("div");p.id=b,p.className="admin-sx",p.setAttribute("role","alertdialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","admin-sx-title"),p.setAttribute("aria-describedby","admin-sx-body"),p.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+h("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+h("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+h("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+h("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+h("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+h("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(p),document.addEventListener("keydown",U,!0);var M=p.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),p.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),C(p,M)})}}function C(p,M){var D=p.querySelector("[data-sx-error]"),x=p.querySelector(".admin-sx__submit");D.hidden=!0,x.disabled=!0;var T=new URLSearchParams;T.set("password",M.value),p.querySelector("#admin-sx-remember").checked&&T.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:T.toString()}).then(function($){return $.json().then(function(E){return{status:$.status,data:E}},function(){return{status:$.status,data:{}}})}).then(function($){if(x.disabled=!1,$.status===200&&$.data&&$.data.ok){var E=document.querySelector('meta[name="csrf-token"]');E&&$.data.csrf_token&&(E.content=$.data.csrf_token),document.removeEventListener("keydown",U,!0),A(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(h("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}$.status===429?D.textContent=h("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=h("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,M.select()}).catch(function(){x.disabled=!1,D.textContent=h("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:F,close:A,isOpen:function(){return g}}})()});var gt=ge(()=>{(function(){"use strict";let b="admin-reconnect-banner",A=0,U=0,F="ok",C=0,p=5e3,M=!1,D=0;function x(i){if(F!==i){if(F=i,i==="ok"||i==="dismissed"){N(),i==="ok"&&(A=0,U=0,p=5e3);return}T()}}function T(){let i=document.getElementById(b);i||(i=document.createElement("div"),i.id=b,i.className="admin-rcb",i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),document.body.insertBefore(i,document.body.firstChild)),i.dataset.state=F;let t=F==="exhausted",d=t?"admin-rcb--crimson":"admin-rcb--amber";i.className=`admin-rcb ${d}`,i.innerHTML=t?E():$(),i.querySelector("[data-rcb-action='retry']")?.addEventListener("click",O),i.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>x("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),D||(D=setInterval(B,250))}function N(){let i=document.getElementById(b);i&&i.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function $(){let i=Math.max(0,(C-Date.now())/1e3),t=p/1e3,d=Math.min(100,(t-i)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:U})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${d}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function E(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function B(){if(F!=="reconnecting")return;let i=document.getElementById(b);if(!i)return;let t=Math.max(0,(C-Date.now())/1e3),d=p/1e3,r=Math.min(100,(d-t)/d*100),m=i.querySelector(".admin-rcb__progress-fill");m&&(m.style.width=r+"%")}function O(){U=0,A=0,p=5e3,x("reconnecting"),_()}async function _(){try{let i=await fetch("/admin/bootstrap",{credentials:"same-origin"});i.ok?w():i.status===401||i.status===403?x("ok"):v()}catch{v()}}function w(){x("ok")}function v(){if(A+=1,U+=1,U>=10){x("exhausted");return}A>=3&&(p=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,U-1))),C=Date.now()+p,x("reconnecting"),setTimeout(_,p))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let i=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{M=!1,w()});async function d(r){try{let m=await r;return m&&m.ok?F!=="ok"&&F!=="dismissed"&&w():m&&m.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):m&&m.status>=500&&v(),m}catch(m){throw v(),m}}typeof i=="function"&&(window.csrfFetch=function(){return d(i.apply(this,arguments))}),window.fetch=function(r,m){let o=typeof r=="string"?r:r&&r.url||"",a=t.call(this,r,m);return o.startsWith("/admin/")||o.indexOf("//")===-1&&o.startsWith("admin/")?d(a):a}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var bt=ge(()=>{(function(){"use strict";let b="admin-help-drawer-root",g={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},y=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],h=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function A($){return $==null?"":String($).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})}function U(){let $=(location.hash||"").replace("#/","").split("/")[0]||"";return g[$]?$:"_default"}function F(){return`
      <div id="${b}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function C(){let $=g[U()],E=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",B=$.titleKey?ServerI18n.t($.titleKey):$.title,O=$.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${A(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),_=$.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${A(ServerI18n.t($.fieldTipKey))}</span>
      </div>`:"",w=y.map(l=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${A(l.term)}</div>
        <div class="admin-help__glossary-def">${A(ServerI18n.t(l.defKey))}</div>
      </div>`).join(""),v=h.map(l=>`
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
            <span class="admin-help__route-title">${A(B)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${O}</div>
          ${_}
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
        Danmu Fire ${E?"v"+A(E):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function p(){let $=document.getElementById(b);$||(document.body.insertAdjacentHTML("beforeend",F()),$=document.getElementById(b),$.addEventListener("click",E=>{if(E.target.closest("[data-help-close]")){M();return}E.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),$.querySelector("[data-help-body]").innerHTML=C(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",x)}function M(){let $=document.getElementById(b);$&&$.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",x)}function D(){document.getElementById(b)?M():p()}function x($){$.key==="Escape"&&($.preventDefault(),M())}function T($){let E=$.target;E&&(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable)||$.key==="F1"&&($.preventDefault(),D())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",T)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:p,close:M,toggle:D}})()});var yt=ge(()=>{(function(){"use strict";var b="admin-shortcuts-root",g=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function y(v,l){try{var i=window.ServerI18n&&ServerI18n.t(v);return i&&i!==v?i:l}catch{return l}}function h(v,l){window.showToast&&window.showToast(v,l!==!1)}function A(v,l){return(window.csrfFetch||window.fetch)(v,l||{})}function U(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function F(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function C(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function p(){var v="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(v=(await l.json()).state||"idle")}catch{}if(v==="idle"){location.hash="#/polls",h(y("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var i=v==="active";try{var t=await A(i?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);h(y(i?"ksToastPollEnded":"ksToastPollStarted",i?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{h(y("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(v){return g?v.metaKey:v.ctrlKey}var D=g?"\u2318":"Ctrl",x=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(v){return M(v)&&(v.key==="k"||v.key==="K")},run:U},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(v){return v.key==="?"&&!M(v)&&!v.altKey||v.key==="/"&&M(v)},run:function(){O()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(v){return M(v)&&v.shiftKey&&(v.key==="d"||v.key==="D")},run:F},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(v){return M(v)&&v.shiftKey&&v.key==="Backspace"},run:C},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(v){return!M(v)&&"jkJK".indexOf(v.key)>=0},run:function(v){window.AdminLiveFeed.moveFocus(v.key==="j"||v.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(v){return!M(v)&&(v.key==="b"||v.key==="B")},run:function(v){window.AdminLiveFeed.blockFocused(v.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(v){return!M(v)&&v.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(v){return!M(v)&&(v.key==="p"||v.key==="P")},run:p}];function T(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function N(v){return x.filter(function(l){return l.group===v}).map(function(l){var i=l.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+T(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+T(y(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+i+"</span></div>"}).join("")}function $(){var v=document.getElementById(b);v&&v.remove(),document.removeEventListener("keydown",E,!0)}function E(v){(v.key==="Escape"||v.key==="?")&&(v.preventDefault(),$())}function B(){if(!document.getElementById(b)){var v=document.createElement("div");v.id=b,v.className="admin-ks",v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-ks-title"),v.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+T(y("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+T(y("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+T(y("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+T(y("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+T(y("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(v),v.addEventListener("click",function(i){i.target.closest("[data-ks-close]")&&$()}),document.addEventListener("keydown",E,!0);var l=v.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function O(){document.getElementById(b)?$():B()}function _(v){if(!v)return!1;if(v.isContentEditable)return!0;var l=(v.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function w(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(v){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=_(document.activeElement),i=0;i<x.length;i++){var t=x[i];if(t.group==="feed"){if(l||!w())continue}else if(l&&!M(v))continue;if(t.match(v)){v.preventDefault(),t.run(v);return}}}),window.AdminShortcuts={open:B,close:$,toggle:O,list:function(){return x.slice()}}})()});var wt=ge(()=>{(function(){"use strict";let b="theme-mode",g="admin-theme-mode",y="admin-theme-toggle";(function(){try{if(localStorage.getItem(b)!=null)return;let T=localStorage.getItem(g);(T==="light"||T==="dark"||T==="auto")&&(localStorage.setItem(b,T),localStorage.removeItem(g))}catch{}})();function A(){try{let x=localStorage.getItem(b);if(x==="light"||x==="dark"||x==="auto")return x}catch{}return"auto"}function U(x){try{localStorage.setItem(b,x)}catch{}}function F(x){let T=document.documentElement;x==="auto"?T.removeAttribute("data-theme"):T.setAttribute("data-theme",x),p(x)}function C(x){return x==="light"||x==="dark"?x:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function p(x){let T=document.getElementById(y);if(!T)return;let N=C(x);T.dataset.mode=x,T.dataset.effective=N,T.textContent=x==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",T.title=x==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):x==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let x=A(),T=x==="auto"?"light":x==="light"?"dark":"auto";U(T),F(T)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let x=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,T=document.getElementById(y);if(T){x&&T.classList.contains("admin-theme-toggle--floating")&&x.parentNode&&!x.parentNode.contains(T)&&(T.classList.remove("admin-theme-toggle--floating"),x.parentNode.insertBefore(T,x));return}let N=document.createElement("button");N.id=y,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",M),x&&x.parentNode?x.parentNode.insertBefore(N,x):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),p(A())}if(F(A()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{A()==="auto"&&p("auto")})}catch{}window.addEventListener("storage",x=>{x.key===b&&F(A())}),window.AdminThemeSwitcher={getMode:A,setMode:function(x){x!=="auto"&&x!=="light"&&x!=="dark"||(U(x),F(x),p(x),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:x}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var St=ge(()=>{(function(){"use strict";var b={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},g=[];window.DanmuStore={get:function(y){return b[y]},set:function(y,h){b[y]=h,g.forEach(function(A){A(y,h)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+y,h)},subscribe:function(y){g.push(y)},getAll:function(){return Object.assign({},b)}}})()});var kt=ge(()=>{(function(){"use strict";let y=0;function h(){return window.__adminCtx||{}}function A(){let p=h();return typeof p.getSettings=="function"?p.getSettings()||{}:{}}function U(){let p=A();if(p&&typeof p.OpsContact<"u"){let M=p.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function F(){let p=h().appContainer||document.getElementById("app-container");if(!p)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";p.innerHTML=`
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
    `;let D=p.querySelector("[data-login-reveal]");D&&D.addEventListener("click",()=>{let $=document.getElementById("password");if(!$)return;let E=$.type==="text";$.type=E?"password":"text",D.textContent=ServerI18n.t(E?"adminLoginReveal":"adminLoginHide");try{$.focus()}catch{}});let x=document.getElementById("loginForm"),T=document.getElementById("password"),N=document.getElementById("loginAttemptsHint");if(x){try{let $=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite($)&&$>0){y=$;let E=Math.max(0,5-y);if(N&&y>0&&E>0){N.hidden=!1;let B=document.getElementById("password");B&&B.classList.add("is-error"),N.textContent=ServerI18n.t("loginAttemptsRemaining",{n:E})}}}catch{}x.addEventListener("submit",async $=>{if($.preventDefault(),!T)return;let E=new URLSearchParams;E.set("password",T.value),document.getElementById("admin-login-remember")?.checked&&E.set("remember","1");try{let B=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:E.toString(),redirect:"manual"});if(B.status===429){let O=B.headers.get("Retry-After"),_=parseInt(O,10),w=Number.isFinite(_)&&_>0?_:300;C(w);return}y+=1;try{sessionStorage.setItem("admin_login_attempts",String(y))}catch{}window.location.reload()}catch(B){console.error("Login submit failed:",B),N&&(N.hidden=!1,N.textContent=ServerI18n.t("networkError"))}})}}function C(p){let M=document.getElementById("adminLoginCard");if(!M)return;let D=U(),x=D?`<a class="admin-lockout-contact" href="${D}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
    `;let T=document.getElementById("lockoutCountdown"),N=p,$=B=>{let O=Math.floor(B/60),_=B%60;return`${String(O).padStart(2,"0")}:${String(_).padStart(2,"0")}`};T&&(T.textContent=$(N));let E=setInterval(()=>{N-=1,T&&(T.textContent=$(Math.max(0,N))),N<=0&&(clearInterval(E),y=0,F(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:F,renderLockout:C}})()});var It=ge(()=>{(function(){"use strict";function b(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function g(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function y(){try{let e=b();await e.prime();let n=e.get("history_stats"),[s,u,S]=await Promise.all([n?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!u.ok)return;let k=n||(s&&s.ok?await s.json():null);if(!k)return;let I=(await u.json()).distribution||[],L=k.stats&&k.stats.total||0,P=I.reduce((ne,J)=>J.count>(ne?.count||-1)?J:ne,null),j=P?P.count:0,R=P?(P.hour||"").slice(-5):"\u2014",W=document.querySelector('[data-kpi="messages"]');W&&(W.querySelector("[data-kpi-value]").textContent=L.toLocaleString());let G=document.querySelector('[data-kpi="peak"]');G&&(G.querySelector("[data-kpi-value]").textContent=j.toLocaleString());let Z=document.querySelector('[data-kpi="unique-fp"]');if(Z){let ne=new Set;(k.records||[]).forEach(J=>{let ee=J.fingerprint||J.fp||J.user_fingerprint;ee&&ne.add(ee)}),Z.querySelector("[data-kpi-value]").textContent=ne.size.toLocaleString()}let de=document.querySelector('[data-kpi="session"]');if(de){let ne=S&&S.ok?await S.json():null,J=ne&&ne.status==="live",ee=de.querySelector("[data-kpi-value]");if(J&&ne.started_at){let K=Math.max(0,Math.floor(Date.now()/1e3-ne.started_at)),Y=Math.floor(K/3600),te=Math.floor(K%3600/60);ee.textContent=Y>0?`${Y}:${String(te).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`:`${te}:${String(K%60).padStart(2,"0")}`}else ee.textContent="\u2014"}}catch{}}function h(e,n){let s=document.querySelector(e);if(s){if(typeof n!="number"||n<=0){s.hidden=!0;return}s.hidden=!1,s.textContent=n>999?"999+":String(n)}}async function A(){try{let e=b();await e.prime();let n=e.get("blacklist"),s=e.get("widgets"),u=e.get("history_stats"),S=e.get("effects"),k=e.get("themes");h("[data-count-blacklist]",Array.isArray(n)?n.length:0),h("[data-count-widgets]",Array.isArray(s?.widgets)?s.widgets.length:0),h("[data-count-messages]",u?.stats?.last_24h||0),h("[data-count-effects]",Array.isArray(S?.effects)?S.effects.length:0),h("[data-count-themes]",Array.isArray(k?.themes)?k.themes.length:0);try{let I=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(I.ok){let L=await I.json();h("[data-count-plugins]",Array.isArray(L?.plugins)?L.plugins.length:0)}}catch{}}catch{}}async function U(){A(),F(),c()}async function F(){let e=document.querySelector("[data-dash-poll-body]"),n=document.querySelector("[data-dash-poll-timer]");if(e)try{let s=b();await s.prime();let S=s.get("metrics");if(!S){let j=await fetch("/admin/metrics",{credentials:"same-origin"});if(!j.ok)return;S=await j.json()}let k=S.poll_state;if(!k||!k.active||!Array.isArray(k.options)||k.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,n&&(n.textContent="");return}let I=k.options.reduce((j,R)=>j+(R.votes||0),0),L=["A","B","C","D","E","F"],P=0;if(k.options.forEach((j,R)=>{(j.votes||0)>(k.options[P].votes||0)&&(P=R)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${g(k.question||ServerI18n.t("dashPollRunning"))}</div>`+k.options.map((j,R)=>{let W=I?Math.round(j.votes/I*100):0;return`
            <div class="admin-dash-poll-opt ${R===P&&I>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${L[R]||String(R+1)}</span>
                <span class="label">${g(j.label||"")}</span>
                <span class="pct">${W}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:j.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${W}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:I})}</div>`,n){let j=k.remaining_seconds;n.textContent=typeof j=="number"&&j>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(j/60),ss:String(j%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function C(e){let n=e.visible!==!1,s=e.config&&e.config.title||e.type||"widget",u=(e.type||"widget").toUpperCase(),S=(e.position||"\u2014").toUpperCase(),k=n?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",I=e.created_at&&n?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,L=I!=null?(()=>{let P=Math.floor(I/86400),j=Math.floor(I%86400/3600),R=Math.floor(I%3600/60),W=I%60;return P>0?`UPTIME \xB7 ${P}d ${String(j).padStart(2,"0")}h`:j>0?`UPTIME \xB7 ${j}:${String(R).padStart(2,"0")}:${String(W).padStart(2,"0")}`:`UPTIME \xB7 ${R}:${String(W).padStart(2,"0")}`})():`STATUS \xB7 ${n?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${g(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${k}"></span>
          <span class="kind">${g(u)}</span>
          <span class="cat">${g(S)}</span>
        </div>
        <div class="title">${g(s)}</div>
        <div class="uptime">${L}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${n?" is-active":""}" data-widget-action="toggle" data-running="${n?"1":"0"}">${n?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function p(e,n){try{let s=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!n}})});if(!s.ok)throw new Error("HTTP "+s.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",n=>{let s=n.target.closest(".admin-dash-widget-tile");if(!s)return;let u=n.target.dataset.widgetAction,S=s.dataset.widgetId;if(!(!u||!S)){if(u==="toggle")p(S,n.target.dataset.running==="1");else if(u==="config"){let k=document.querySelector('[data-route="widgets"]');k&&k.click()}}}))}async function D(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let n=b();await n.prime();let s=n.get("widgets");if(!s){let S=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!S.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}s=await S.json()}let u=(s.widgets||s.items||[]).slice(0,4);if(u.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+u.map(C).join("")+"</div>",M(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let x=null,T=null,N=null;function $(e){let n=Math.max(0,Math.floor(Date.now()/1e3-e)),s=Math.floor(n/3600),u=Math.floor(n%3600/60),S=n%60;return s>0?`${s}:${String(u).padStart(2,"0")}:${String(S).padStart(2,"0")}`:`${String(u).padStart(2,"0")}:${String(S).padStart(2,"0")}`}function E(e){let n=document.getElementById("admin-session-banner"),s=document.getElementById("sec-live-feed");if(s&&s.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),n&&n.classList.toggle("is-hero",!(e&&e.status==="live")),!n)return;if(x=e,!(e&&e.status==="live"))n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let S=e.started_at||Date.now()/1e3;n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${g(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,B(S)}n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",_))}function B(e){N&&clearInterval(N);let n=()=>{let s=document.querySelector("[data-sess-timer]");s&&(s.textContent=$(e))};n(),N=setInterval(n,1e3)}function O(){N&&(clearInterval(N),N=null)}async function _(e){let n=e.target.closest("[data-sess-action]");if(!n)return;let s=n.dataset.sessAction;if(s==="open"){let u=document.querySelector("[data-sess-name]"),S=(u?u.value:"").trim();if(!S){u&&u.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}n.disabled=!0;try{let k=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S})}),I=await k.json();if(!k.ok){window.showToast&&window.showToast(I.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:S}),!0),E(I.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{n.disabled=!1}}else if(s==="close"){let u=n.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",S=(L,P)=>`<option value="${L}"${L===u?" selected":""}>${P}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${S("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${S("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${S("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;n.disabled=!0;let I=document.getElementById("sessCloseBehavior")?.value;if(I&&I!==u)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:I})})}catch{}try{let L=await window.csrfFetch("/admin/session/close",{method:"POST"}),P=await L.json();if(!L.ok){window.showToast&&window.showToast(P.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),O(),E({status:"idle",viewer_end_behavior:P.archived&&P.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{n.disabled=!1}}}async function w(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json();E(n)}catch{}}function v(){w(),T&&clearInterval(T),T=setInterval(w,1e4)}function l(){T&&(clearInterval(T),T=null),O()}let i=null,t=null,d=0;function r(){let e=document.querySelector("[data-cockpit-overlay]"),n=window.AdminOverlayControl,s=t;if(!e||!n||!s)return;e.classList.toggle("is-on",s.live);let u=(I,L)=>{I.textContent!==L&&(I.textContent=L)},S=e.querySelector("[data-cockpit-status]");S&&u(S,n.statusText(s.live,s.count));let k=e.querySelector('[data-cockpit-action="toggle"]');k&&(k.dataset.i18n=n.toggleKey(s.live),u(k,ServerI18n.t(k.dataset.i18n)),k.dataset.next=s.live?"standby":"live")}async function m(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let n=d,s=null,u=null;try{let I=await fetch("/overlay_status",{credentials:"same-origin"});I.ok&&(s=(await I.json()).overlay_count||0)}catch{}try{let I=await fetch("/admin/broadcast/status",{credentials:"same-origin"});I.ok&&(u=(await I.json()).mode==="live")}catch{}let S=t;if(!S&&u===null)return;t={live:u!==null&&n===d?u:S?S.live:u,count:s!==null?s:S?S.count:0},r()}document.addEventListener("admin-overlay-state",e=>{let n=e&&e.detail||{};d+=1,t={live:!!n.live,count:typeof n.count=="number"?n.count:t?t.count:0},r()}),document.addEventListener("admin-route-applied",e=>{let n=e&&e.detail&&e.detail.route;n!=="live"&&n!=="dashboard"||(r(),m())});function o(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async u=>{let S=u.target.closest("[data-cockpit-action]");if(!S)return;let k=S.dataset.cockpitAction;if(k==="clear"){window.AdminOverlayControl?.clearScreen();return}k==="toggle"&&(await window.AdminOverlayControl?.setDisplay(S.dataset.next==="live"),m())});let n=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');n&&n.addEventListener("click",a);let s=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');s&&s.addEventListener("click",()=>{location.hash="#/polls"})}async function a(){let e;try{let u=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);e=await u.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let n=document.createElement("div");n.className="admin-soh-qr",n.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:n,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(e.url)}function c(){o(),m(),i&&clearInterval(i),i=setInterval(m,5e3)}function f(){i&&(clearInterval(i),i=null)}window.AdminDashboard={refreshKpi:y,refreshSummary:U,refreshSidebarBadges:A,populatePoll:F,populateWidgets:D,refreshSessionBanner:w,startSessionPolling:v,stopSessionPolling:l,refreshCockpitOverlay:m,renderCockpitOverlay:r,startCockpitPolling:c,stopCockpitPolling:f}})()});var Tt=ge(()=>{(function(){"use strict";let b="sec-viewer-config-defaults",g=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(z){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[z]})},A={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},U=[14,20,32,44,64],F=window.DANMU_CONFIG?.defaultColorPalette||[],C=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function p(q,z){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Q=window.ServerI18n.t(q,z);if(Q&&Q!==q)return Q}return q}let M={};function D(q){if(M[q]!=null)return M[q];let z=A[q];return z?z.step:1}function x(q,z){M[q]=Number(z)||D(q)}let T={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},N=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],$=["Color","FontFamily","Layout"];function E(q){return $.indexOf(q)!==-1}function B(q){let z=T.options&&T.options[q],Q=z&&z[1];return Array.isArray(Q)?Q.slice():[]}function O(q){return q==="Color"?F.map(z=>z.replace(/^#/,"").toUpperCase()):q==="Layout"?C.map(z=>z.value):q==="FontFamily"?(T.fonts&&T.fonts.length?T.fonts:["NotoSansTC","Inter"]).map(Q=>typeof Q=="string"?Q:Q.name||Q.family||"").filter(Boolean):[]}function _(q,z){return q==="Color"?String(z||"").replace(/^#/,"").toUpperCase():String(z||"")}function w(){return`
      <div id="${b}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${h(p("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${h(p("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${p("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${h(p("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlMaxTracks"))}
                <span class="sub">${h(p("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlAvoidOverlap"))}
                <span class="sub">${h(p("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${h(p("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${h(p("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlSafeArea"))}
                <span class="sub">${h(p("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(p("dlStrokeMode"))}
                <span class="sub">${h(p("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${h(p("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${h(p("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${h(p("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${h(p("dlDimPollVotes"))}
                <span class="sub">${h(p("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${h(p("dlPollVoteOpacity"))}
                <span class="sub">${h(p("dlPollVoteOpacityHint"))}</span>
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
          <div class="admin-ui-group-label">${h(p("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${h(p("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall" data-vi-row style="display:none;flex-wrap:wrap">
              <label class="lbl" for="viewer-images-hosts">${h(p("viHosts"))}</label>
              <span class="val" style="flex:1 1 240px;min-width:0">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off" style="resize:vertical;min-height:64px"
                  placeholder="${h(p("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row" data-vi-row style="display:none;flex-wrap:wrap" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${h(p("viExtensions"))}</span>
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
              <span>${h(p("displayColParam"))}</span>
              <span data-dsp-only="values">${h(p("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${h(p("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(p("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${h(p("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${h(p("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${h(p("displayPreviewSample2"))}</span>
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
                <span>${h(p("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${h(p("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${h(p("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${h(p("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${h(p("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span data-i18n="displayAdminControlledTitle">${h(p("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${h(p("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${h(p("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${h(p("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${h(p("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${h(p("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${h(p("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${h(p("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${h(p("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6"
                   data-i18n="displayAdminControlledNote">${h(p("displayAdminControlledNote"))}</div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${h(p("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let v=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>l(q),noRange:!0}];function l(q){let z=C.find(Q=>Q.value===q);return z?p(z.labelKey):q||"\u2014"}function i(q,z){let Q=z[0]!==!1,X=z[3],pe=A[q.key];if(q.key==="Opacity"||q.key==="Speed"){let ve=pe,fe=X!=null?Number(X):ve.min,Ie=isFinite(fe)?fe:ve.min,Te=(Ie-ve.min)/Math.max(1e-6,ve.max-ve.min)*100;return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            min="${ve.min}" max="${ve.max}" step="${D(q.key)}" value="${h(String(Ie))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Te.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Te.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}"
              min="${ve.min}" max="${ve.max}" step="${D(q.key)}" value="${h(String(Ie))}" />
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
          ${a().map(fe=>{let Ie=fe.slice(1),Te=fe.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Te?"is-active":""}"
              data-chip-key="Color" data-chip-value="${Ie}"
              style="background:${fe}" aria-label="${fe}" aria-pressed="${Te}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${h(p("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${h(ve)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ve=(T.fonts&&T.fonts.length?T.fonts:["NotoSansTC","Inter"]).map($e=>{let Ce=typeof $e=="string"?$e:$e.name||$e.family||"",Fe=typeof $e=="string"?$e:$e.label||$e.name||$e.family||"";return{value:Ce,label:Fe}}).filter($e=>$e.value),fe=String(X||""),Ie=!!T.allowlistEdit.FontFamily,Te=Ie?T.allowlistEdit.FontFamily:new Set(B("FontFamily").map($e=>_("FontFamily",$e))),we=!Ie&&Te.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map($e=>{let Ce=$e.value===fe,Fe=Ie?Te.has($e.value):we||Te.has($e.value),Ue=["admin-dsp2-tchip",Ce?"is-active":"",Ie?"is-editing":"",Fe?"":"is-blocked"].filter(Boolean).join(" "),We=Ie?`data-allow-key="FontFamily" data-allow-value="${h($e.value)}"`:`data-chip-key="FontFamily" data-chip-value="${h($e.value)}"`;return`<button type="button" class="${Ue}" ${We}
              aria-pressed="${Fe?"true":"false"}">
              ${Ie?`<span class="admin-dsp2-allow-mark">${Fe?"\u2713 ":""}</span>`:""}${h($e.label)}
            </button>`}).join("")}
        </div>
        ${t(q)}
      `}if(q.key==="Layout"){let ve=String(X||"scroll"),fe=!!T.allowlistEdit.Layout,Ie=fe?T.allowlistEdit.Layout:new Set(B("Layout").map(we=>_("Layout",we))),Te=!fe&&Ie.size===0;return`
        <div class="admin-dsp2-tiles">
          ${C.map(we=>{let $e=we.value===ve,Ce=fe?Ie.has(we.value):Te||Ie.has(we.value),Fe=["admin-dsp2-tile",$e?"is-active":"",fe?"is-editing":"",Ce?"":"is-blocked"].filter(Boolean).join(" "),Ue=fe?`data-allow-key="Layout" data-allow-value="${we.value}"`:`data-chip-key="Layout" data-chip-value="${we.value}"`;return`<button type="button" class="${Fe}" ${Ue}
              aria-pressed="${Ce?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${we.icon}</span>
              <span class="admin-dsp2-tile-label">${p(we.labelKey)}</span>
              ${fe?`<span class="admin-dsp2-allow-mark">${Ce?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${t(q)}
      `}return""}function t(q){if(!E(q.key))return"";let z=!!T.allowlistEdit[q.key],Q=B(q.key),X=O(q.key).length||0,pe=Q.length>0?p("displayAllowSummaryPartial",{n:Q.length,total:X,label:d(q.key)}):p("displayAllowSummaryAll",{total:X});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${h(pe)}</span>
        ${z?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${h(p("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${h(p("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${h(p("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${h(p("displayEditAllowlistTitle"))}">[${h(p("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function d(q){return p(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function r(q,z){if(q.noRange||!(z[0]!==!1))return"";let X=A[q.key],pe=z[1]!=null?z[1]:X.min,ve=z[2]!=null?z[2]:X.max,fe=D(q.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(p("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="1"
              min="${X.min}" max="${X.max}" step="${fe}" value="${h(String(pe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(p("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="2"
              min="${X.min}" max="${X.max}" step="${fe}" value="${h(String(ve))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="step"
              min="0.1" step="0.1" value="${h(String(fe))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </div>
        </div>
      </div>`}function m(q,z){let Q=z[0]!==!1,X=z[3],pe=q.fmt?q.fmt(X):X!=null?String(X):"\u2014",ve=q.key==="Layout";return`
      <div class="admin-dsp2-row ${Q?"is-on":"is-off"} ${ve?"is-last":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${h(p(q.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Q?"is-on":""}" data-value-badge>${h(pe)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(p("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(p(Q?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${i(q,z)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${r(q,z)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Q?"is-on":""}"
            data-toggle-key="${q.key}" aria-pressed="${Q?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${h(p(Q?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${h(Q?p("displayToggleHintOn"):q.noRange?p("displayToggleHintOffPick"):p("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function o(){let q=document.getElementById("dsp2-rows");if(q){if(!T.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(p("loading"))}`;return}q.innerHTML=v.map(z=>m(z,T.options[z.key]||[!1,"","",""])).join(""),n(),S(),k()}}function a(){let q=B("Color");return[...new Set((q.length?q:F).map(z=>"#"+String(z).replace(/^#/,"").toUpperCase()).filter(z=>/^#[0-9A-F]{6}$/.test(z)))]}function c(q){let z=q.slice(1).match(/.{2}/g).map(Q=>{let X=parseInt(Q,16)/255;return X<=.04045?X/12.92:((X+.055)/1.055)**2.4});return z[0]*.2126+z[1]*.7152+z[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function f(q,z="error"){T.paletteNotice={message:q,type:z};let Q=document.querySelector("[data-palette-feedback]");Q&&(Q.textContent=q,Q.classList.toggle("is-error",z==="error"))}function e(q,z=!0){let Q=document.querySelector("[data-admin-color-palette]"),X=Q?.querySelector("[data-palette-preview-text]");!X||!/^#[0-9A-F]{6}$/i.test(q)||(T.palettePreview=q.toUpperCase(),X.style.color=q,Q.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Q.querySelectorAll("[data-palette-preview]").forEach(pe=>{let ve=pe.dataset.palettePreview===q.toUpperCase();pe.setAttribute("aria-pressed",String(ve)),pe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),z&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(X.getAnimations().forEach(pe=>pe.cancel()),X.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function n(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!T.options)return;let z=a(),Q=(T.options.ViewerColorPicker||[!0])[0]!==!1,X=T.paletteBusy?"disabled":"",pe=T.palettePreview||z[0],ve=h(T.paletteDraft),fe=T.paletteNotice;q.setAttribute("aria-busy",String(T.paletteBusy)),q.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${h(p("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${h(p("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${h(p("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${z.length}</strong><span>${h(p("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${z.map((Ie,Te)=>`<div class="admin-color-palette-chip" style="--palette-color:${Ie};--palette-ink:${c(Ie)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${Ie}"
                aria-label="${h(p("viewerPalettePreviewColor",{color:Ie}))}" aria-pressed="${Ie===pe}" ${X}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Te+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${Ie}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${Ie}" ${z.length<=1?"disabled":X}
                aria-label="${h(p("viewerPaletteRemove",{color:Ie}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${h(p("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${h(p("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(T.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${X} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${T.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${X} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${z.length>=64?"disabled":X}>
                <span aria-hidden="true">\uFF0B</span> ${h(p("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${h(p(z.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${fe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${fe?h(fe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${h(p("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${h(p("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${pe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${h(p("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${h(p("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${h(p("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Q?"checked":""} ${X} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${h(p("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,e(pe,!1)}async function s(q,z){if(T.paletteBusy)return;let Q=document.querySelector("[data-admin-color-palette]");T.paletteBusy=!0,Q.setAttribute("aria-busy","true"),Q.querySelector("[data-palette-sync-status]").textContent=p("viewerPaletteSaving"),Q.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let X=await P("Color",q);T.paletteBusy=!1,T.paletteNotice={type:X?"success":"error",message:p(X?"viewerPaletteSaved":"updateFailed")},X&&z&&(T.palettePreview=z),n(),(z&&X?Q.querySelector(`[data-palette-preview="${z}"]`):Q.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(q,z){let Q=T.options&&T.options[q];return Q&&Q[3]!=null?Q[3]:z}function S(){let q=document.querySelector("[data-preview-stage]"),z=document.querySelector("[data-preview-pill='1']"),Q=document.querySelector("[data-preview-pill='2']"),X=document.querySelector("[data-preview-foot-l]"),pe=document.querySelector("[data-preview-foot-r]");if(!q||!z||!Q||!T.options)return;let ve=Number(u("FontSize",32)),fe=Number(u("Opacity",92)),Ie=Number(u("Speed",1)),Te="#"+String(u("Color","7DD3FC")).replace(/^#/,""),we=String(u("FontFamily","NotoSansTC")),$e=String(u("Layout","scroll")),Ce=Math.min(ve,36),Fe=Math.max(0,Math.min(100,fe))/100;z.style.fontSize=Ce+"px",z.style.color=Te,z.style.opacity=Fe.toFixed(2),z.style.fontFamily=we+", system-ui, sans-serif",z.style.textShadow=`0 0 14px ${Te}66`,Q.style.fontSize=(Ce*.78).toFixed(0)+"px",Q.style.opacity=(Fe*.9).toFixed(2),Q.style.fontFamily=we+", system-ui, sans-serif",q.dataset.layout=$e,X&&(X.textContent=`${l($e)} \xB7 ${ve}px \xB7 ${(+Ie).toFixed(1)}\xD7`),pe&&(pe.textContent=p("displayOpacitySuffix",{n:Math.round(fe)}))}function k(){let q=document.querySelector("[data-summary-list]"),z=document.querySelector("[data-summary-count]");if(!q||!T.options)return;let Q=v.filter(X=>(T.options[X.key]||[])[0]).length;z&&(z.textContent=`AUDIENCE \xB7 ${Q}/6 OPEN`),q.innerHTML=v.map(X=>{let pe=!!(T.options[X.key]||[])[0];return`<div class="admin-dsp2-srow ${pe?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${h(p(X.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${h(p(pe?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function I(q,z){try{let Q=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!z})});if(!Q.ok)throw new Error("toggle "+Q.status);Array.isArray(T.options[q])||(T.options[q]=[!1,"","",""]),T.options[q][0]=!!z,o(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let X=q==="ViewerColorPicker"?p("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${X} ${p("settingsUpdated")}`,!0)}catch(Q){console.warn("[admin-display] toggle failed:",Q),window.showToast&&window.showToast(p("updateFailed"),!1),await R(),o()}}async function L(q,z,Q){try{let X=Q;if(q==="Color"){let ve=String(X).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(p("colorFormatError"),!1);return}X=ve.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){X=q==="Speed"?parseFloat(X):parseInt(X,10);let ve=A[q];if(Number.isNaN(X)||ve&&(X<ve.min||X>ve.max)){window.showToast&&window.showToast(`${q} ${ve.min}\u2013${ve.max}`,!1);return}}let pe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:X,index:z})});if(!pe.ok)throw new Error("update "+pe.status);Array.isArray(T.options[q])||(T.options[q]=[!1,"","",""]),T.options[q][z]=X,j(q),S(),k()}catch(X){console.warn("[admin-display] update failed:",X),window.showToast&&window.showToast(p("updateFailed"),!1)}}async function P(q,z){try{let Q=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:z})});if(!Q.ok)throw new Error("allowlist "+Q.status);let X=await Q.json().catch(()=>({}));X&&Array.isArray(X.option)?T.options[q]=X.option:Array.isArray(T.options[q])&&(T.options[q][1]=z.slice()),j(q),S(),k();let pe=O(q).length||0,ve=q==="Color"?p("settingsUpdated"):z.length>0?p("displayAllowlistToastPartial",{key:q,n:z.length,total:pe}):p("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(Q){return console.warn("[admin-display] allowlist failed:",Q),q!=="Color"&&window.showToast&&window.showToast(p("updateFailed"),!1),!1}}function j(q){let z=document.querySelector(`[data-row-key="${q}"]`);if(!z||!T.options)return;let Q=v.find(fe=>fe.key===q);if(!Q)return;let X=T.options[q]||[!1,"","",""],pe=X[3],ve=z.querySelector("[data-value-badge]");if(ve&&(ve.textContent=Q.fmt?Q.fmt(pe):pe!=null?String(pe):"\u2014"),E(q)){let fe=z.querySelector("[data-picker-host]");fe&&(fe.innerHTML=i(Q,X));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&z.querySelectorAll(`[data-chip-key="${q}"]`).forEach(fe=>{let Ie=fe.getAttribute("data-chip-value"),Te=q==="Color"?String(pe||"").replace(/^#/,"").toUpperCase():String(pe??"");fe.classList.toggle("is-active",String(Ie)===Te)}),q==="Opacity"||q==="Speed"){let fe=A[q],Ie=Number(pe??fe.min),Te=(Ie-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,we=z.querySelector(".admin-dsp2-slider-fill"),$e=z.querySelector(".admin-dsp2-slider-thumb");we&&(we.style.width=Te.toFixed(2)+"%"),$e&&($e.style.left=`calc(${Te.toFixed(2)}% - 8px)`);let Ce=z.querySelector(".admin-dsp2-range");Ce&&document.activeElement!==Ce&&(Ce.value=String(Ie));let Fe=z.querySelector(".admin-dsp2-num");Fe&&document.activeElement!==Fe&&(Fe.value=String(Ie))}}async function R(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);T.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),T.options=T.options||{}}}async function W(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let z=await q.json();T.fonts=Array.isArray(z)?z:z.fonts||[]}catch{T.fonts=["NotoSansTC","Inter"]}}async function G(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let z=await q.json();T.viewerCount=z.ws_clients??0}catch{}}function Z(){de(),G(),T.metricsTimer=setInterval(G,5e3)}function de(){T.metricsTimer&&(clearInterval(T.metricsTimer),T.metricsTimer=null)}function ne(){if(!T.options){window.showToast&&window.showToast(p("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:T.options},z=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Q=URL.createObjectURL(z),X=document.createElement("a");X.href=Q,X.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Q),window.showToast&&window.showToast(p("displayExportDone"),!0)}async function J(){if(!T.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let z of v){let Q=T.options[z.key];Array.isArray(Q)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:z.key,enabled:!!Q[0]})})}await G(),window.showToast&&window.showToast(p("displayBroadcastDone")+` ${T.viewerCount} ${p("displayViewersReceivedSuffix")}`,!0)}catch(z){console.warn("[admin-display] deploy failed:",z),window.showToast&&window.showToast(p("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function ee(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:p("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:p("displayRevertConfirm"),confirmLabel:p("displayDeployRevert")}))try{for(let[Q,X]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Q,enabled:!!X[0]})});for(let pe=1;pe<=3;pe++)pe<3&&(Q==="Color"||Q==="FontFamily"||Q==="Layout")||X[pe]===""||X[pe]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Q,value:X[pe],index:pe})})}await R(),o(),window.showToast&&window.showToast(p("displayRevertDone"),!0)}catch(Q){console.warn("[admin-display] revert failed:",Q),window.showToast&&window.showToast(p("updateFailed"),!1)}}function K(){let q=document.getElementById(b);q&&(q.addEventListener("click",z=>{let Q=z.target.closest("[data-palette-preview]");if(Q){e(Q.dataset.palettePreview);return}let X=z.target.closest("[data-palette-remove]");if(X){let Te=a();if(Te.length>1){let we=Te.filter($e=>$e!==X.dataset.paletteRemove);s(we,we.includes(T.palettePreview)?T.palettePreview:we[0])}return}if(z.target.closest("[data-palette-add]")){let Te=q.querySelector("[data-palette-hex]"),we=String(Te.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){T.paletteInvalid=!0,Te.setAttribute("aria-invalid","true"),f(p("colorFormatError"));return}let $e=a();if($e.includes("#"+we)){f(p("viewerPaletteDuplicate"));return}$e.length<64&&s([...$e,"#"+we],"#"+we);return}let pe=z.target.closest("[data-toggle-key]");if(pe){let Te=pe.getAttribute("data-toggle-key"),we=!!(T.options[Te]||[])[0];I(Te,!we);return}let ve=z.target.closest("[data-allow-action]");if(ve){let Te=ve.getAttribute("data-allow-action"),we=ve.getAttribute("data-allow-key");if(!we)return;if(Te==="edit"){let $e=B(we).map(Ce=>_(we,Ce));$e.length?T.allowlistEdit[we]=new Set($e):T.allowlistEdit[we]=new Set(O(we)),j(we);return}if(Te==="cancel"){delete T.allowlistEdit[we],j(we);return}if(Te==="clear"){T.allowlistEdit[we]=new Set,P(we,[]),delete T.allowlistEdit[we];return}if(Te==="apply"){let $e=T.allowlistEdit[we]||new Set,Ce=O(we),Fe=Array.from($e),Ue=Ce.length>0&&Fe.length===Ce.length&&Ce.every(We=>$e.has(We));P(we,Ue?[]:Fe),delete T.allowlistEdit[we];return}}let fe=z.target.closest("[data-allow-key][data-allow-value]");if(fe){let Te=fe.getAttribute("data-allow-key"),we=fe.getAttribute("data-allow-value"),$e=T.allowlistEdit[Te];if($e){let Ce=_(Te,we);$e.has(Ce)?$e.delete(Ce):$e.add(Ce),j(Te)}return}let Ie=z.target.closest("[data-chip-key]");if(Ie){let Te=Ie.getAttribute("data-chip-key"),we=Ie.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${Te}"]`).forEach($e=>$e.classList.remove("is-active")),Ie.classList.add("is-active"),L(Te,3,we);return}if(z.target&&z.target.id==="dsp2-revert"){ee();return}if(z.target&&z.target.id==="dsp2-export"){ne();return}}),q.addEventListener("keydown",z=>{z.key==="Enter"&&z.target.matches("[data-palette-hex]")&&!z.isComposing&&(z.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",z=>{let Q=z.target;if(!Q)return;if(Q.matches("[data-viewer-color-picker]")){Q.disabled=!0,I("ViewerColorPicker",Q.checked);return}let X=Q.getAttribute("data-num-key");if(!X)return;let pe=Q.getAttribute("data-num-index");if(pe==="step"){x(X,Q.value),j(X);return}let ve=parseInt(pe,10);if(Number.isNaN(ve))return;let fe=Q.value;X==="Color"&&(fe=String(fe).replace(/^#/,"").toUpperCase()),L(X,ve,fe)}),q.addEventListener("input",z=>{let Q=z.target;if(Q){if(Q.matches("[data-palette-picker]")){T.paletteDraft=Q.value.toUpperCase(),T.paletteInvalid=!1;let X=q.querySelector("[data-palette-hex]");X.value=T.paletteDraft,X.removeAttribute("aria-invalid"),f("","success"),e(T.paletteDraft);return}if(Q.matches("[data-palette-hex]")){T.paletteDraft=Q.value,T.paletteInvalid=!1;let X=Q.value.replace(/^#/,"");Q.removeAttribute("aria-invalid"),f("","success"),/^[0-9a-fA-F]{6}$/.test(X)&&(q.querySelector("[data-palette-picker]").value="#"+X,e("#"+X));return}if(Q.classList&&Q.classList.contains("admin-dsp2-range")){let X=Q.getAttribute("data-range-key"),pe=A[X],ve=Number(Q.value),fe=(ve-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,Ie=Q.closest("[data-row-key]");if(Ie){let Te=Ie.querySelector(".admin-dsp2-slider-fill"),we=Ie.querySelector(".admin-dsp2-slider-thumb");Te&&(Te.style.width=fe.toFixed(2)+"%"),we&&(we.style.left=`calc(${fe.toFixed(2)}% - 8px)`);let $e=Ie.querySelector(".admin-dsp2-num");$e&&($e.value=String(ve))}Array.isArray(T.options[X])&&(T.options[X][3]=ve),S();return}if(Q.classList&&Q.classList.contains("admin-dsp2-num")){let X=Q.getAttribute("data-num-key"),pe=parseInt(Q.getAttribute("data-num-index"),10);if(Number.isNaN(pe)||!Array.isArray(T.options[X]))return;let ve=Q.value;Q.type==="number"&&(ve=Number(ve)),T.options[X][pe]=ve,S()}}}),q.addEventListener("change",z=>{let Q=z.target;if(Q&&Q.classList&&Q.classList.contains("admin-dsp2-range")){let X=Q.getAttribute("data-range-key");L(X,3,Q.value)}}),q.addEventListener("click",z=>{let Q=z.target.closest("[data-dl-step]");if(Q){let pe=Q.closest("[data-dl-stepper]");if(!pe)return;let ve=pe.getAttribute("data-dl-stepper"),Ie=Number(se[ve]??0)+Number(Q.getAttribute("data-dl-step"));Le(ve,Ie);return}let X=z.target.closest("[data-dl-opt]");if(X){let pe=X.closest("[data-dl-seg]");if(!pe)return;let ve=pe.getAttribute("data-dl-seg"),fe=X.getAttribute("data-dl-opt");Le(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(fe):fe)}}),q.addEventListener("change",z=>{let Q=z.target.closest("[data-dl-toggle]");if(Q){Le(Q.getAttribute("data-dl-toggle"),Q.checked);return}let X=z.target.closest("[data-dl-range]");X&&Le(X.getAttribute("data-dl-range"),Number(X.value))}),q.addEventListener("input",z=>{let Q=z.target.closest("[data-dl-range]");if(!Q)return;let X=Q.getAttribute("data-dl-range"),pe=q.querySelector(`[data-dl-value="${X}"]`);pe&&(pe.textContent=Q.value+"%")}),q.addEventListener("change",z=>{if(z.target.closest("[data-vi-toggle]")){V({enabled:z.target.checked});return}if(z.target.closest("[data-vi-ext]")){let Q=Array.from(q.querySelectorAll("[data-vi-ext]")).filter(X=>X.checked).map(X=>X.getAttribute("data-vi-ext"));V({extensions:Q});return}if(z.target.id==="viewer-images-hosts"){let Q=z.target.value.split(/[\s,]+/).filter(Boolean);V({hosts:Q})}}))}let Y=null,te=null,oe={},le=0,ce="",ue=q=>(q&&q.hosts||[]).join(`
`);function Ee(){return Object.assign({},Y||{},te||{},oe)}function ke(){let q=document.getElementById(b);if(!q||!Y)return;let z=Ee(),Q=q.querySelector("[data-vi-toggle]");Q&&(Q.checked=!!z.enabled),Ae(q,!!z.enabled);let X=q.querySelector("#viewer-images-hosts"),pe=te&&"hosts"in te||"hosts"in oe;X&&!pe&&document.activeElement!==X&&X.value===ce&&(X.value=ue(Y),ce=X.value);let ve=z.extensions||[];q.querySelectorAll("[data-vi-ext]").forEach(fe=>{fe.checked=ve.indexOf(fe.getAttribute("data-vi-ext"))!==-1})}function Ae(q,z){q.querySelectorAll("[data-vi-row]").forEach(Q=>{Q.style.display=z?"":"none"})}async function re(q){try{let z=await q(),Q=null;try{Q=await z.json()}catch{Q=null}return{ok:!!(z.ok&&Q),body:Q}}catch(z){return console.warn("[admin-display] viewer-images request failed:",z),{ok:!1,body:null}}}async function ie(){let q=le,z=await re(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),Q=!te&&!Object.keys(oe).length;z.ok&&Q&&q===le&&(Y=z.body,ke())}function H(q){let z=q&&q.code;return z==="invalid_host"?p("viErrInvalidHost",{host:String(q.detail||"")}):z==="too_many_hosts"?p("viErrTooManyHosts",{max:q.max}):p("updateFailed")}function V(q){le+=1;let z=document.getElementById("viewer-images-hosts");if("hosts"in q&&z&&(ce=z.value),"enabled"in q){let Q=document.getElementById(b);Q&&Ae(Q,!!q.enabled)}Object.assign(oe,q),te||ae()}async function ae(){if(te||!Object.keys(oe).length)return;let q=oe;oe={},te=q;let z=await re(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}));if(te=null,z.ok){Y=z.body,ke(),ae();return}let Q=oe;oe={},window.showToast&&window.showToast(H(z.body),!1),("hosts"in q||"hosts"in Q)&&(ce=null),ke(),ie()}let se={};function me(){let q=document.getElementById(b);q&&Object.entries(se).forEach(([z,Q])=>{let X=q.querySelector(`[data-dl-value="${z}"]`);X&&(X.textContent=z==="max_tracks"?Number(Q)===0?p("dlMaxTracksAuto"):String(Q):String(Q)+"%");let pe=q.querySelector(`[data-dl-range="${z}"]`);pe&&document.activeElement!==pe&&(pe.value=String(Q));let ve=q.querySelector(`[data-dl-toggle="${z}"]`);ve&&(ve.checked=!!Q);let fe=q.querySelector(`[data-dl-seg="${z}"]`);fe&&fe.querySelectorAll("[data-dl-opt]").forEach(Ie=>{let Te=Ie.getAttribute("data-dl-opt")===String(Q);Ie.classList.toggle("is-active",Te),Ie.setAttribute("aria-pressed",Te?"true":"false")})})}async function Se(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;se=await q.json(),me()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function Le(q,z){let Q=se[q];se[q]=z,me();try{let X=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:z})});if(!X.ok)throw new Error("display-layer "+X.status);se=await X.json(),me()}catch(X){se[q]=Q,me(),console.warn("[admin-display] display-layer update failed:",X),window.showToast&&window.showToast(p("updateFailed"),!1)}}function ye(){g.forEach(q=>{let z=document.getElementById(q);z&&z.setAttribute("data-admin-ui-replaced","1")})}let he=null;function _e(q,z){return q==="overlay"||z==="overlay"||q==="display"||z==="display"}function xe(q,z){return q==="viewer-config"||q==="viewer"||z==="viewer-config"||z==="viewer"}function De(q,z){if(!xe(q,z))return;let Q=window.AdminTabs?.getConfig?.("viewer");if(!Q)return;let X=ve=>Q.tabs.some(fe=>fe.slug===ve),pe=X(z)?z:null;if(!pe&&window.AdminTabs.resolveActiveTab){let ve=window.AdminTabs.resolveActiveTab("viewer",null);X(ve)&&(pe=ve)}pe&&(document.body.dataset.viewerConfigTab=pe)}let Ne=!1,He=!1;async function Oe(){let q=document.getElementById("sec-viewer-config-limits");if(!q||Ne)return;Ne=!0;let z=(Q,X)=>{let pe=q.querySelector(Q);pe&&(pe.textContent=X==null?"\u2014":String(X))};try{let Q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Q.ok)return;let X=await Q.json(),pe=X.rate_limits&&X.rate_limits.fire||{},ve=X.rate_limits&&X.rate_limits.totals||{},fe=X.rate_limit_config&&X.rate_limit_config.fire||{},Ie=Math.max(1,(X.server_time||0)-(X.server_started_at||0));z("[data-vc-rate-fp]",fe.limit||"\u2014"),z("[data-vc-rate-global]","\u2014"),z("[data-vc-rate-burst]","\u2014"),z("[data-vc-rate-cooldown]",fe.window||"\u2014"),z("[data-vc-msg-len]",100),z("[data-vc-nick-len]","\u2014"),z("[data-vc-dedup]","\u2014");let Te=(pe.hits||0)/Ie;z("[data-vc-avg-rate]",Te.toFixed(2)+"/s"),z("[data-vc-throttled]",pe.violations||0),z("[data-vc-blocked]",ve.locked_sources||0),z("[data-vc-deduped]",0)}catch{}finally{Ne=!1}}let qe=null;function Re(q){let z=window.ServerI18n&&window.ServerI18n.currentLang;if(!z||z===qe)return;let Q=qe===null;if(qe=z,Q)return;let X=q.querySelector("[data-dsp-fold]"),pe=!!(X&&X.open),ve=document.createElement("div");ve.innerHTML=w(),q.replaceChildren(...ve.firstElementChild.childNodes);let fe=q.querySelector("[data-dsp-fold]");fe&&(fe.open=pe),o(),me(),ce="",ke()}function Me(){let q=document.querySelector(".admin-dash-grid"),z=document.getElementById(b);if(!q||!z)return;Re(z);let Q=q.dataset.activeRoute||"live",X=q.dataset.activeLeaf||Q;De(Q,X);let pe=document.body.dataset.viewerConfigTab||"defaults",ve=xe(Q,X),fe=_e(Q,X),Ie=ve||fe,Te=z.querySelector("[data-dsp-fold]");Te&&z.dataset.dspMode!==(fe?"values":"audience")&&(Te.open=!fe),z.dataset.dspMode=fe?"values":"audience",z.style.display=Ie?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach($e=>{let Ce=document.getElementById($e);Ce&&(Ce.style.display=ve?"":"none")});let we=document.getElementById("sec-viewer-config-info");we&&(we.style.display=ve?"":"none"),ve?He||(He=!0,Oe()):He=!1,_e(Q,X)?T.metricsTimer||Z():de(),he=Q}function Ge(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let z=document.createElement("div");z.id="sec-viewer-config-info",z.className="lg:col-span-2",z.innerHTML='<div class="admin-vc-info-banner">'+p("displayViewerConfigInfoBanner")+"</div>";let Q=[{k:p("displayFieldNicknameLabel"),desc:p("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:p("displayFieldMessageLabel"),desc:p("displayFieldMessageDesc"),on:!0,pinned:!0},{k:p("displayFieldColorLabel"),desc:p("displayFieldColorDesc"),on:!0},{k:p("displayFieldFontLabel"),desc:p("displayFieldFontDesc"),on:!0},{k:p("displayFieldSizeLabel"),desc:p("displayFieldSizeDesc"),on:!0},{k:p("displayFieldOpacityLabel"),desc:p("displayFieldOpacityDesc"),on:!0},{k:p("displayFieldSpeedLabel"),desc:p("displayFieldSpeedDesc"),on:!0},{k:p("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:p("displayFieldEffectLabel"),desc:p("displayFieldEffectDesc"),on:!1}],X=document.createElement("div");X.id="sec-viewer-config-fields",X.className="admin-vc-fields-grid lg:col-span-2";let pe=document.createElement("div");pe.className="admin-vc-col-panel";let ve=document.createElement("div");ve.className="admin-vc-fields-head";let fe=Q.filter(function(Pe){return Pe.on}).length,Ie=Q.length-fe;ve.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+h(p("displayFieldsCountLabel",{count:Q.length}))+'</span><span class="admin-vc-fields-count">'+h(p("displayFieldsShownHidden",{shown:fe,hidden:Ie}))+"</span>",pe.appendChild(ve);let Te=document.createElement("div");Te.className="admin-vc-fields-list",Q.forEach(function(Pe){let ze=document.createElement("div");ze.className="admin-vc-field-row"+(Pe.blocked?" is-blocked":"");let Ye=document.createElement("span");Ye.className="admin-vc-field-dot"+(Pe.on?" is-on":""),ze.appendChild(Ye);let Qe=document.createElement("div");var Je="";Pe.pinned&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+h(p("displayFieldBadgeRequired"))+"</span>"),Pe.blocked&&(Je='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+h(p("displayFieldBadgeBlocked"))+"</span>"),Qe.innerHTML='<div class="admin-vc-field-label">'+h(Pe.k)+Je+'</div><div class="admin-vc-field-desc">'+h(Pe.desc)+"</div>",ze.appendChild(Qe);let Ke=document.createElement("button");if(Ke.type="button",Ke.className="admin-vc-toggle "+(Pe.on?"is-on":"is-off"),Ke.textContent=Pe.on?p("displayToggleShow"):p("displayToggleHide"),Pe.blocked||Pe.pinned)Ke.disabled=!0,Ke.className+=" disabled";else{var Ve=Pe.on;Ke.addEventListener("click",function(){Ve=!Ve,Ke.className="admin-vc-toggle "+(Ve?"is-on":"is-off"),Ke.textContent=p(Ve?"displayToggleShow":"displayToggleHide"),Ye.className="admin-vc-field-dot"+(Ve?" is-on":"")})}ze.appendChild(Ke),Te.appendChild(ze)}),pe.appendChild(Te);let we=document.createElement("div");we.className="admin-vc-col-panel";var Ce=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(Pe,ze){return'<span class="admin-vc-swatch-dot" style="background:'+Pe+";border:"+(ze===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");we.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+h(p("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+h(p("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+h(p("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Ce+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(p("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+h(p("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+h(p("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+h(p("displayFieldsTip"))+"</div>",X.appendChild(pe),X.appendChild(we);function Fe(Pe,ze,Ye,Qe,Je,Ke){let Ve=Ke?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+Pe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ve+'">'+Ye+'<span class="admin-vc-limit-row__unit">'+(Qe||"")+"</span></div>"+(Je?'<div class="admin-vc-limit-row__hint">'+Je+"</div>":"")+"</div>"}let Ue=document.createElement("div");Ue.id="sec-viewer-config-limits",Ue.className="admin-vc-limits-grid lg:col-span-2",Ue.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+h(p("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+h(p("displayEditLink"))+"</a></div>"+Fe(h(p("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",h(p("displayRateFpUnit")),h(p("displayRateFpHint")))+Fe(h(p("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",h(p("displayRateGlobalHint")))+Fe(h(p("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",h(p("displayRateBurstUnit")),h(p("displayRateBurstHint")))+Fe(h(p("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",h(p("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+h(p("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+h(p("displayContentLimitsTitle"))+"</span></div>"+Fe(h(p("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",h(p("displayMsgLenUnit")),h(p("displayMsgLenHint")))+Fe(h(p("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",h(p("displayNickLenUnit")),h(p("displayNickLenHint")))+Fe(h(p("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",h(p("displayDedupHint")))+Fe(h(p("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+h(p("displayProfanityDefaultValue"))+"</span>","",h(p("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+h(p("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(p("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+h(p("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(p("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+h(p("displayAuditLogLink"))+"</a></div>";let We=document.getElementById("sec-viewer-theme");We&&We.parentNode===q?(q.insertBefore(z,We),q.insertBefore(Ue,We),q.insertBefore(X,We)):(q.appendChild(z),q.appendChild(Ue),q.appendChild(X)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Me()}async function Be(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(b)){ye();return}q.insertAdjacentHTML("beforeend",w()),K(),ye(),Me(),T.options||await Promise.all([R(),W()]),Se(),ie(),o()}function je(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?Be():ye(),Me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Me),document.addEventListener("admin-route-applied",Me),document.addEventListener("admin-panel-rendered",()=>{Be(),ye(),Ge(),Me()}),Be(),Ge()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je()})()});var _t=ge(()=>{document.addEventListener("DOMContentLoaded",()=>{function b(){let J=document.querySelector('meta[name="csrf-token"]');return J&&J.content||""}let g=window.DANMU_CONFIG||{},y=g.session||{logged_in:!1},h=g.settingRanges||{};function A(J,ee={}){let K={credentials:"same-origin",...ee},Y=new Headers(ee.headers||{});return Y.set("X-CSRF-Token",b()),K.headers=Y,fetch(J,K)}window.csrfFetch=A;let U=5e3,F={at:0,data:null,promise:null};function C(){return F.data&&Date.now()-F.at<U}function p(){return C()?Promise.resolve(F.data):(F.promise||(F.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(J=>J.ok?J.json():null).then(J=>(J&&(F.data=J,F.at=Date.now()),F.promise=null,J)).catch(()=>(F.promise=null,null))),F.promise)}function M(J){if(!C())return null;let ee=F.data[J];return ee&&typeof ee=="object"&&"_error"in ee?null:ee}window.__danmuAdminBootstrap={prime:p,get:M},p();let D={},x=null,T=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let $=Object.create(null);Object.assign($,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let E={_key:J=>"admin:tab:"+J,get(J){try{return sessionStorage.getItem(this._key(J))||null}catch{return null}},set(J,ee){try{ee?sessionStorage.setItem(this._key(J),ee):sessionStorage.removeItem(this._key(J))}catch{}}};function B(J){let ee=(J||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!ee)return null;let K=ee[1],Y=ee[2]||null,te=null;if(!Y){let ue=N[K];typeof ue=="string"?K=ue:ue&&typeof ue=="object"&&(K=ue.nav||K,te=ue.tab||null)}let oe=$[K],le=K,ce=null;if(typeof oe=="string"?le=oe:oe&&typeof oe=="object"&&(le=oe.nav||K,ce=oe.tab||null),ee[1]!==le&&(B._warned||(B._warned=new Set),!B._warned.has(ee[1]))){B._warned.add(ee[1]);try{console.info("[admin] legacy route #/"+ee[1]+" \u2192 #/"+le+(Y||ce||te?"/"+(Y||ce||te):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:le,tab:Y||ce||te,raw:K}}function O(J,ee){return ee?"#/"+J+"/"+ee:"#/"+J}let _={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function w(J,ee,K){if(K=K||J,!j[J]){let ce=N[J];if(typeof ce=="string")J=ce;else if(ce&&typeof ce=="object")ce.nav&&(J=ce.nav),!ee&&ce.tab&&(ee=ce.tab);else{let ue=$[J];typeof ue=="string"?J=ue:ue&&typeof ue=="object"&&(ue.nav&&(J=ue.nav),!ee&&ue.tab&&(ee=ue.tab))}}if(J==="system"&&ee&&_[ee]){let ce=_[ee];J=ce.nav,ee=ce.tab||null,K=J}let Y=j[J]?J:"live",te=window.AdminTabs,oe=te?.hasTabsFor?.(Y)?te.resolveActiveTab(Y,ee):null,le=oe?te.foldFor(Y,ee):null;return{route:Y,tab:oe,rawName:K,fold:le?ee:null,foldSection:le?le.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:$,tabMemory:E,parseHash:B,buildHash:O,resolve(J){let ee=B(J);return ee?w(ee.nav,ee.tab,J.match(/^#\/([\w-]+)/)[1]):null}});var v=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,i=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:p,bootstrapSection:M};async function t(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),y.logged_in&&P()}catch(J){console.error("Get settings failed:",J),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function d(J){return/^#[0-9A-Fa-f]{6}$/.test(J)}function r(J){return d(J)?J:/^[0-9A-Fa-f]{6}$/.test(J)?"#"+J:(J.startsWith("#")||(J="#"+J),d(J)?J:"#38bdf8")}function m(J,ee){if(h[J]){let K=parseInt(ee);if(isNaN(K)||K<h[J].min||K>h[J].max)return showToast(ServerI18n.t("settingRangeError",{key:J,min:h[J].min,max:h[J].max}),!1),!1}return!0}function o(J,ee,K){if(!K||!Array.isArray(D[J]))return;let Y=D[J][ee];J==="Color"&&typeof Y=="string"&&(Y=r(`#${Y}`)),Y!=null&&(K.value=String(Y))}let a={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-widgets"]}};function c(){Object.values(a).forEach(J=>{let ee=document.getElementById(J.containerId);ee&&J.orderedIds.forEach(K=>{let Y=document.getElementById(K);Y&&Y.parentElement!==ee&&ee.appendChild(Y)})})}function f(){x&&(x.disconnect(),x=null),c(),x=new MutationObserver(()=>{c()}),x.observe(s,{childList:!0,subtree:!0})}async function e(J,ee,K,Y=null){try{if(J==="Color"){if(!d(ee)){showToast(ServerI18n.t("colorFormatError"),!1),o(J,K,Y);return}ee=ee.replace("#","")}else if((J==="Speed"||J==="Opacity"||J==="FontSize")&&!m(J,ee)){o(J,K,Y);return}(await A("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:J,value:ee,index:K})})).ok?(Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][K]=ee,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await t())}catch(te){console.error("Error:",te),showToast(`Update Error: ${te.message}`,!1),await t()}}async function n(J,ee){try{let K=await A("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J,enabled:ee})}),Y=await K.json().catch(()=>({}));if(K.ok)Array.isArray(D[J])||(D[J]=[!1,"","",""]),D[J][0]=ee,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`),P();else{let te=document.getElementById(`toggle-${J}`);te&&(te.checked=!ee),showToast(Y.error||ServerI18n.t("updateFailed"),!1)}}catch(K){console.error("Error:",K);let Y=document.getElementById(`toggle-${J}`);Y&&(Y.checked=!ee),showToast(`Update Error: ${K.message}`,!1)}}let s=document.getElementById("app-container"),u=document.getElementById("toast-container"),S=(J,ee=500)=>"requestIdleCallback"in window?window.requestIdleCallback(J,{timeout:ee}):setTimeout(J,ee);async function k(){let J=parseInt(document.getElementById("historyHours")?.value||"24");try{let[ee,K]=await Promise.all([fetch(`/admin/stats/hourly?hours=${J}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${J}&limit=10`,{credentials:"same-origin"})]);if(!ee.ok||!K.ok)return;let Y=await ee.json(),te=await K.json(),oe=document.getElementById("statsDashboard");if(!oe)return;let le=Y.distribution||[],ce=te.topTexts||[],ue=Math.max(1,...le.map(ie=>ie.count)),Ee=le.reduce((ie,H)=>ie+(H.count||0),0),ke=le.filter(ie=>ie.count>0).length,Ae=le.map(ie=>`<div class="chart-bar" style="height: ${Math.round(ie.count/ue*100)}%" title="${i(ie.hour)}: ${ie.count}"><span class="chart-label">${i(ie.hour.slice(-5,-3))}</span></div>`).join(""),re=ce.map((ie,H)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${H+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${i(ie.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ie.count}</td></tr>`).join("");oe.innerHTML=`
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
        </div>`}catch(ee){console.error("Load stats error:",ee)}}window._loadStats=k,window.csrfFetch=A,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=s,window.__adminCtx.getSettings=()=>D;function I(){s&&(s.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function L(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():I()}function P(){let J=v(),ee=(ke,Ae=!1)=>J[ke]!==void 0?J[ke]:Ae,K=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ke=>Array.isArray(D[ke])&&D[ke][0]===!0).length,Y=D.Layout&&D.Layout[3]?i(String(D.Layout[3]).replace(/_/g," ")):"scroll",te=D.FontFamily&&D.FontFamily[3]?i(String(D.FontFamily[3])):"NotoSansTC",oe=ke=>ke.map(Ae=>`<span style="height:${Ae*10}%;opacity:${.3+Ae*.08}"></span>`).join(""),le=Y&&Y!=="off",ce=window.location.port||(window.location.protocol==="https:"?"443":"80");s.innerHTML=`
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
                                         aria-label="${i(ServerI18n.t("adminSearchHint"))}"
                                         title="${i(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${i(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${i(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${le?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${i(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${i(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${i(le?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
            <span class="lbl">${i(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${i(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${i(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${i(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${i(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${i(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${i(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${i(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${i(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),S(de),W(),f(),S(ne),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),R(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Ae=document.querySelector("[data-telem-bars]");if(!Ae)return;let re=document.querySelector("[data-telem-status]"),ie={cpu:100,mem:100,ws:100,rate:50};function H(se,me,Se,Le,ye){let he=Ae.querySelector(`[data-telem-fill="${se}"]`),_e=Ae.querySelector(`[data-telem-value="${se}"]`);he&&(he.style.width=Math.max(0,Math.min(100,me))+"%",he.classList.toggle("is-warn",!Le)),_e&&(_e.textContent=Se);let xe=Ae.querySelector(`[data-telem-row="${se}"]`);xe&&ye&&xe.setAttribute("title",ye)}function V(se,me){if(!me||me<=0)return Math.round(se)+" MB used";if(me>=1024){let Se=(se/1024).toFixed(1),Le=(me/1024).toFixed(1);return`${Se} / ${Le} GB used`}return`${Math.round(se)} / ${Math.round(me)} MB used`}async function ae(){try{let se=await fetch("/admin/metrics",{credentials:"same-origin"});if(!se.ok)return;let me=await se.json(),Se=me.cpu_series||[],Le=me.mem_series||[],ye=me.mem_mb_series||[],he=me.ws_series||[],_e=me.rate_series||[],xe=Me=>Me.length?Me[Me.length-1]:0,De=Number(xe(Se)||0),Ne=Number(xe(Le)||0),He=Number(xe(ye)||0),Oe=Number(me.mem_total_mb||0),qe=Number(xe(he)||me.ws_clients||0),Re=Number(xe(_e)||0)/60;if(H("cpu",De,`${De.toFixed(0)}%`,De<90),H("mem",Ne,`${Ne.toFixed(0)}%`,Ne<90,V(He,Oe)),H("ws",qe/ie.ws*100,String(qe),qe<100),H("rate",Re/ie.rate*100,`${Re.toFixed(1)}/s`,Re<40),re){let Me=De>=90||Ne>=90||Re>=40;re.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",re.classList.toggle("is-warn",Me)}}catch{}}setTimeout(ae,4e3),setInterval(ae,5e3)})()}let j={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=j;function R(){let J=document.querySelector(".admin-dash-grid");if(!J)return;let ee="dashboard",K=null;function Y(ye){return a.moderation.orderedIds.indexOf(ye)!==-1?"moderation-grid":a.assets.orderedIds.indexOf(ye)!==-1?"assets-grid":"settings-grid"}function te(){let ye=J.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),he=J.querySelector("[data-route-note]"),_e=J.querySelector("[data-route-action]"),xe=_e?Array.prototype.slice.call(_e.children):[],De=Be=>Be.querySelector(".admin-ui-page-actions")||xe.find(je=>je._adminHomeHead===Be)||null,Ne=(Be,je)=>{_e&&(xe.forEach(q=>{q!==Be&&(q._adminHomeHead?q._adminHomeHead.appendChild(q):q.remove())}),Be&&Be.parentNode!==_e&&(Be._adminHomeHead=je,_e.appendChild(Be)))};if(!ye){Ne(null,null);return}let He=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(ee)),Oe=Array.prototype.slice.call(J.querySelectorAll(".admin-ui-page-head"));Oe.forEach(Be=>Be.classList.remove("is-merged-into-topbar"));let qe=(j[ee]?.title||"").trim().replace(/\s+/g," "),Re=null,Me=null,Ge=null;if(Oe.forEach(Be=>{let je=Be.querySelector(".admin-ui-page-title"),q=je&&je.textContent.trim().replace(/\s+/g," ");if(q&&(He||q===ye||q===qe)){if(Be.offsetParent!==null){Re===null&&(Re=Be.querySelector(".admin-ui-page-note")?.innerHTML||"");let Q=De(Be);Q&&!Me&&(Me=Q,Ge=Be)}Be.classList.add("is-merged-into-topbar")}}),Ne(Me,Ge),he){let Be=Re||"";he.innerHTML!==Be&&(he.innerHTML=Be),he.toggleAttribute("hidden",!Re)}}function oe(){let ye=j[ee],he=new Set((ye.sections||[]).map(Y)),_e=xe=>Array.from(xe.children).some(De=>getComputedStyle(De).display!=="none");J.querySelectorAll(".admin-route-sections").forEach(xe=>{if(!he.has(xe.id)){xe.style.display="none";return}xe.style.display="",xe.style.display=_e(xe)?"":"none"})}let le=()=>{let ye=j[ee],he=new Set(ye.sections);J.querySelectorAll('[id^="sec-"]').forEach(_e=>{_e.id&&(_e.style.display=he.has(_e.id)?"":"none")}),K&&window.AdminTabs?.hasTabsFor?.(ee)&&window.AdminTabs.applyTabSectionVisibility(ee,K,J),oe(),te()},ce=null,ue=null;function Ee(){let ye=ue&&document.getElementById(ue);!ye||!ye.getClientRects().length||(ue=null,ye.tagName==="DETAILS"&&(ye.open=!0),ye.scrollIntoView({block:"start"}))}let ke=(ye,he,_e)=>{let xe=w(ye,he,_e);_e=xe.rawName,ee=xe.route,J.dataset.activeRoute=ee;let De=xe.tab,Ne=xe.fold?O(ee,xe.fold):_e&&_e!==ee?"#/"+_e:O(ee,De);if(window.location.hash!==Ne){try{history.replaceState(null,"",Ne)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let He=j[ee],Oe=Array.from(J.querySelectorAll(".admin-dash-nav-row[data-route]")),qe=_e!==ee?Oe.find(X=>X.dataset.route===_e):null;Oe.forEach(X=>{let pe=qe?X===qe:X.dataset.route===ee;X.classList.toggle("is-active",pe),X.setAttribute("aria-selected",pe?"true":"false")});let Re=J.querySelector("[data-route-kicker]"),Me=J.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(X){return X},Be="adminRouteTitle_"+ee,je="adminRouteKicker_"+ee,q=Ge(Be),z=Ge(je);Re&&(Re.textContent=z!==je?z:He.kicker),Me&&(Me.textContent=q!==Be?q:He.title);let Q=ee==="dashboard"||ee==="live";J.querySelectorAll('[data-route-view="dashboard"]').forEach(X=>{X.style.display=Q?"":"none"}),Q?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),K=De,De&&window.AdminRouter?.tabMemory?.set?.(ee,De),J.dataset.activeLeaf=De||ee,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:De}})),oe(),te(),re(ee,De),Ae(_e,ee,De),xe.fold!==ce&&(ce=xe.fold,ue=xe.foldSection),Ee();try{history.replaceState(null,"",Ne)}catch{}};function Ae(ye,he,_e){window.AdminBreadcrumb?.render(J,ye,he,_e)}function re(ye,he){let _e=J.querySelector("[data-admin-tabs-host]");if(!_e){let xe=J.querySelector(".admin-dash-topbar");if(!xe)return;_e=document.createElement("div"),_e.dataset.adminTabsHost="",xe.insertAdjacentElement("afterend",_e)}if(_e.innerHTML="",window.AdminTabs?.hasTabsFor?.(ye)&&he){_e.hidden=!1;let xe=window.AdminTabs.renderTabStrip(ye,he,{onSelect:De=>ke(ye,De)});xe&&_e.appendChild(xe),_e.classList.remove("admin-tabs-host--accordion");return}_e.classList.remove("admin-tabs-host--accordion"),_e.hidden=!0}T&&window.removeEventListener("hashchange",T),T=()=>{let ye=B(window.location.hash),he=(window.location.hash||"").match(/^#\/([\w-]+)/),_e=he?he[1]:null;ye&&ke(ye.nav,ye.tab,_e||ye.raw)},window.addEventListener("hashchange",T),J.querySelectorAll("[data-route]").forEach(ye=>{ye.addEventListener("click",he=>{he.preventDefault(),ke(ye.dataset.route)})});let ie=B(window.location.hash),H=(window.location.hash||"").match(/^#\/([\w-]+)/),V=H?H[1]:ie?.raw||ie?.nav||"live";ke(ie?.nav||"live",ie?.tab||null,V),window._adminNavigateTo=()=>ke(ee,ce||K);let ae=!1,se=0,me=0;function Se(){if(ae)return;ae=!0;let ye=()=>{ae&&(ae=!1,se&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(se),clearTimeout(me),se=0,me=0,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:K}})),Ee())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(se=requestAnimationFrame(ye),me=setTimeout(ye,100)):me=setTimeout(ye,0)}let Le=J.querySelector(".admin-dash-main");Le&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{Se()}).observe(Le,{childList:!0,subtree:!0}),Se())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let J=document.querySelector("[data-open-help]");J&&J.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let ee=document.querySelector("[data-open-palette]");if(ee){let Y=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};ee.addEventListener("click",Y),ee.addEventListener("keydown",te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),Y())})}let K=document.getElementById("logoutButton");K&&K.addEventListener("click",async()=>{try{let Y=await A("/logout",{method:"POST"});Y.redirected&&(window.location.href=Y.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Y){console.error("Logout Failed:",Y),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Y=>{Y.name&&Y.addEventListener("change",async function(){let te=this.name,oe=this.checked;await n(te,oe)})}),document.querySelectorAll("details[id^='sec-']").forEach(Y=>{Y.addEventListener("toggle",()=>{let te=v();te[Y.id]=Y.open,l(te)})}),document.querySelectorAll(".setting-input").forEach(Y=>{Y.addEventListener("change",async function(){let te=this.dataset.key,oe=parseInt(this.dataset.index),le=this.value;this.type==="number"&&(le=parseInt(le)),await e(te,le,oe,this)})})}function G(){if(y.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}P()}else L()}async function Z(){await t(),G(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function de(){window.AdminThemes&&window.AdminThemes.init()}function ne(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{x&&(x.disconnect(),x=null)}),Z()})});var Et=ge(()=>{(function(){"use strict";var b=null;async function g(){var p=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),D=Array.from(M).map(function(N){return N.value.trim()}).filter(Boolean);if(!p){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var x=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:p,options:D})}),T=await x.json();if(!x.ok){window.showToast(T.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),F(T),A()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function y(){try{var p=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await p.json();if(!p.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),F(M),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function h(){try{var p=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await p.json();if(!p.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),F(M),b&&(clearInterval(b),b=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function A(){b&&(clearInterval(b),b=null);var p=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var D=await M.json();F(D),D.state!=="active"&&b&&(clearInterval(b),b=null)}}catch{}};p(),b=setInterval(p,2e3)}function U(){var p=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return p.dataset.emptyKind="poll",p}function F(p){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!p||p.state==="idle"){M.appendChild(U());return}var D=p.total_votes||0,x=Math.max(1,...p.options.map(function(_){return _.count})),T=document.createElement("div");T.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var $=document.createElement("span");$.className="admin-poll-status-dot"+(p.state==="active"?" is-active":" is-ended"),N.appendChild($);var E=document.createElement("span");E.className="admin-poll-status-question",E.textContent=p.question||"",N.appendChild(E);var B=document.createElement("span");B.className="admin-poll-status-state",B.textContent=p.state,N.appendChild(B),T.appendChild(N),p.options.forEach(function(_){var w=document.createElement("div");w.className="admin-poll-status-row";var v=document.createElement("div");v.className="admin-poll-status-label";var l=document.createElement("span"),i=document.createElement("b");i.textContent=_.key+".",l.appendChild(i),l.appendChild(document.createTextNode(" "+_.text));var t=document.createElement("span");t.textContent=_.count+" ("+_.percentage+"%)",v.appendChild(l),v.appendChild(t);var d=document.createElement("div");d.className="admin-poll-status-bar";var r=document.createElement("div");r.className="admin-poll-status-bar-fill",r.style.width=_.count/x*100+"%",d.appendChild(r),w.appendChild(v),w.appendChild(d),T.appendChild(w)});var O=document.createElement("div");O.className="admin-poll-status-footer",O.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),T.appendChild(O),M.appendChild(T)}}function C(){var p=document.getElementById("sec-polls");if(p&&p.dataset.pollLegacyBound!=="1"){p.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",g);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",y);var x=document.getElementById("pollResetBtn");x&&x.addEventListener("click",h);var T=document.getElementById("pollAddOptionBtn");T&&T.addEventListener("click",function(){var E=document.getElementById("pollOptionsContainer");if(E){var B=E.querySelectorAll(".poll-option-input").length;if(B>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var O=document.createElement("input");O.type="text",O.className="poll-option-input admin-ui-input",O.placeholder=String.fromCharCode(65+B)+". Option "+(B+1),O.maxLength=100,E.appendChild(O)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var E=document.getElementById("pollOptionsContainer");if(E){var B=E.querySelectorAll(".poll-option-input");if(B.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}B[B.length-1].remove()}});var $=p;$&&($.addEventListener("toggle",function(){$.open&&A()}),A()),window.addEventListener("beforeunload",function(){b&&(clearInterval(b),b=null)})}}document.addEventListener("admin-panel-rendered",function(){C()}),document.addEventListener("DOMContentLoaded",function(){C()}),window.addEventListener("hashchange",function(){var p=window.location.hash||"";p.indexOf("/polls")!==-1&&C()})})()});var $t=ge(()=>{(function(){"use strict";var b="sec-timeline-export",g="danmu.adminHistoryExports.v1",y=10,h={rawText:!0,polls:!0,masked:!1,metadata:!0},A=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],U=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],F={range:"24h",filters:Object.assign({},h),format:"JSON"};function C(){return document.getElementById(b)}function p(){try{return JSON.parse(localStorage.getItem(g)||"[]")}catch{return[]}}function M(u){try{localStorage.setItem(g,JSON.stringify(u.slice(0,y)))}catch{}}function D(u){var S=p();S.unshift(u),M(S)}function x(u){return u?u<1024?u+" B":u<1024*1024?(u/1024).toFixed(1)+" KB":(u/1024/1024).toFixed(1)+" MB":"0 B"}function T(u){try{var S=new Date(u),k=new Date,I=S.toDateString()===k.toDateString();if(I)return ServerI18n.t("historyV2TodayAt",{time:String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")});var L=new Date(k);return L.setDate(k.getDate()-1),S.toDateString()===L.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}):S.getMonth()+1+"-"+String(S.getDate()).padStart(2,"0")+" "+String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}catch{return u||""}}function N(u){if(u==="1h")return 1;if(u==="24h")return 24;if(u==="7d")return 168;if(u==="today"){var S=new Date,k=new Date(S.getFullYear(),S.getMonth(),S.getDate());return Math.max(1,Math.ceil((S-k)/36e5))}return u==="yest"?48:u==="live"?6:24}function $(u){return u.filter(function(S){return!(!F.filters.rawText&&!S.is_poll&&!S.muted&&!S.banned||!F.filters.polls&&S.is_poll||!F.filters.masked&&(S.muted||S.banned))}).map(function(S){if(!F.filters.metadata){var k=Object.assign({},S);return delete k.clientIp,delete k.fingerprint,k}return S})}function E(u){var S=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],k=window.AdminUtils.csvCell,I=function(P){return P.status?P.status:P.banned?"banned":P.muted?"muted":P.is_poll?"poll":"ok"},L=u.map(function(P){return[P.timestamp||"",P.nickname||"",P.text||"",P.color?"#"+P.color:"",P.size!=null?P.size:"",P.speed!=null?P.speed:"",P.opacity!=null?P.opacity:"",P.isImage?"true":"false",P.fontInfo&&P.fontInfo.name||"",P.clientIp||"",P.fingerprint||"",I(P),P.delivery_reason||""].map(k).join(",")});return[S.join(","),L.join(`\r
`)].filter(Boolean).join(`\r
`)}function B(u){return u.map(function(S,k){var I=new Date(S.timestamp||Date.now()),L=O(I),P=O(new Date(I.getTime()+3e3)),j=(S.nickname?"["+S.nickname+"] ":"")+(S.text||"");return k+1+`
`+L+" --> "+P+`
`+j+`
`}).join(`
`)}function O(u){var S=function(k,I){return String(k).padStart(I||2,"0")};return S(u.getHours())+":"+S(u.getMinutes())+":"+S(u.getSeconds())+","+S(u.getMilliseconds(),3)}function _(u,S){var k=URL.createObjectURL(u),I=document.createElement("a");I.href=k,I.download=S,I.click(),URL.revokeObjectURL(k)}function w(){var u=N(F.range),S=document.getElementById("histv2-go");S&&(S.disabled=!0,S.dataset.busy="1"),fetch("/admin/history?hours="+u+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var I=k&&k.records||[],L=$(I);if(L.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var P=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),j,R;if(F.format==="JSON"){var W=JSON.stringify(L,null,2);R=new Blob([W],{type:"application/json"}),j="danmu-history-"+P+".json"}else F.format==="CSV"?(R=new Blob(["\uFEFF"+E(L)],{type:"text/csv;charset=utf-8;"}),j="danmu-history-"+P+".csv"):(R=new Blob([B(L)],{type:"application/x-subrip;charset=utf-8;"}),j="danmu-history-"+P+".srt");_(R,j),D({name:j,fmt:F.format,size:R.size,when:new Date().toISOString(),count:L.length}),l(),v(L.length,R.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:L.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){S&&(S.disabled=!1,delete S.dataset.busy)})}function v(u,S){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:u||"\u2014",size:S?x(S):"\u2014 MB"}))}function l(){var u=document.getElementById("histv2-recent-list");if(u){var S=p();if(S.length===0){u.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}u.innerHTML=S.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+i(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+i(T(k.when))+" \xB7 "+x(k.size)+"</div></div></div>"}).join("")}}function i(u){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(u):u==null?"":String(u).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})}function t(){return A.map(function(u){var S=F.range===u.k;return'<button type="button" class="histv2-chip'+(S?" is-active":"")+'" data-histv2-range="'+u.k+'">'+i(ServerI18n.t(u.labelKey))+(u.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var u=new Date;return String(u.getHours()).padStart(2,"0")+":"+String(u.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function r(){var u=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return u.map(function(S){var k=!!F.filters[S.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+S.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+i(ServerI18n.t(S.labelKey))+"</span></button>"}).join("")}function m(){return U.map(function(u){var S=F.format===u.k;return'<button type="button" class="histv2-fmt'+(S?" is-selected":"")+'" data-histv2-fmt="'+u.k+'">'+(S?'<span class="histv2-fmt-check">\u2713</span>':"")+(u.badge?'<span class="histv2-fmt-badge">'+i(u.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+u.k+'</div><div class="histv2-fmt-desc">'+i(u.desc)+"</div></button>"}).join("")}function o(){var u=C();u&&(u.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+r()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+m()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",u.addEventListener("click",a),l(),n())}function a(u){var S=u.target.closest("[data-histv2-range]");if(S){F.range=S.dataset.histv2Range,c(),n();return}var k=u.target.closest("[data-histv2-toggle]");if(k){var I=k.dataset.histv2Toggle;F.filters[I]=!F.filters[I],f(),n();return}var L=u.target.closest("[data-histv2-fmt]");if(L){F.format=L.dataset.histv2Fmt,e(),n();return}var P=u.target.closest("#histv2-go");if(P&&!P.dataset.busy){w();return}}function c(){var u=document.getElementById("histv2-chips");u&&(u.innerHTML=t())}function f(){var u=document.getElementById("histv2-toggles");u&&(u.innerHTML=r())}function e(){var u=document.getElementById("histv2-formats");u&&(u.innerHTML=m())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var u=N(F.range);fetch("/admin/history?hours="+u+"&limit=10000",{credentials:"same-origin"}).then(function(S){return S.ok?S.json():null}).then(function(S){if(!S)return v(0,0);var k=$(S&&S.records||[]),I=F.format==="JSON"?220:F.format==="CSV"?110:80;v(k.length,k.length*I)}).catch(function(){v(0,0)})},250)}function s(){var u=C(),S=document.getElementById("admin-backup-v2-page");if(!u){var k=document.getElementById("settings-grid");if(!k)return;u=document.createElement("div"),u.id=b,u.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(u),o()}S&&S.parentElement&&u.previousElementSibling!==S&&S.parentElement.insertBefore(u,S.nextSibling)}document.addEventListener("admin-panel-rendered",s),document.addEventListener("admin-route-applied",s),window.AdminHistoryV2={refresh:n,state:F}})()});var Lt=ge(()=>{(function(){"use strict";let b="admin-replay-bar";function g(){let h=document.getElementById(b);return h||(document.body?(h=document.createElement("div"),h.id=b,h.className="admin-replay-bar",h.hidden=!0,h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(h,document.body.firstChild),h):null)}function y(h){let A=g();A&&(A.hidden=!h)}window.AdminReplayBar={ensure:g,setActive:y},document.addEventListener("admin-panel-rendered",g)})()});var xt=ge(()=>{(function(){"use strict";let b=null;function g(T){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),$=document.getElementById("replayResumeBtn"),E=document.getElementById("replayStopBtn"),B=document.getElementById("replayProgress"),O=(v,l)=>{v&&v.classList.toggle("hidden",!l)},_=T==="playing",w=T==="paused";O(N,_),O($,w),O(E,_||w),O(B,_||w),!_&&!w&&B&&(B.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(_||w)}function y(){b&&clearInterval(b),b=setInterval(async()=>{try{let T=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!T.ok)return;let N=await T.json(),$=document.getElementById("replayProgress");$&&($.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),g(N.state),N.state==="stopped"&&(clearInterval(b),b=null)}catch{}},500)}async function h(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),g("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),g("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function U(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),g("stopped"),b&&(clearInterval(b),b=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let F=null,C=null,p=0,M=null;function D(){[["replayPauseBtn",h],["replayResumeBtn",A],["replayStopBtn",U]].forEach(function([N,$]){let E=document.getElementById(N);E&&!E.dataset.replayCtrlsBound&&(E.addEventListener("click",$),E.dataset.replayCtrlsBound="1")})}async function x(){try{let T=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!T.ok)return;let N=await T.json();(N.state==="playing"||N.state==="paused")&&(g(N.state),y())}catch{}}window.AdminReplayControls={notifyStarted:function(){g("playing"),y()}},document.addEventListener("admin-panel-rendered",function(){D(),x()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var At=ge(()=>{(function(){"use strict";let b="sec-ratelimit",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(F){return String(F).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},y=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function h(){return`
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
                <span class="admin-ratelimit-row-label">${g(ServerI18n.t(F.labelKey))}</span>
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
      </div>`}function A(F){let C=F.querySelector("#rlEnvExport");setTimeout(async()=>{try{let l=window.AdminBootstrap;l&&typeof l.primeBootstrap=="function"&&await l.primeBootstrap();let i=l&&l.bootstrapSection?l.bootstrapSection("history_stats"):null,t=l&&l.bootstrapSection?l.bootstrapSection("blacklist"):null,d=l&&l.bootstrapSection?l.bootstrapSection("metrics"):null,r=[];r.push(i?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),r.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),r.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[m,o,a]=await Promise.all(r),c=i||(m&&m.ok?await m.json():null);if(c){let S=c.stats&&c.stats.last_24h||0,k=c.stats&&c.stats.total||0,I=F.querySelector("[data-rl-sum-hits]"),L=F.querySelector("[data-rl-sum-hits-delta]");I&&(I.textContent=S.toLocaleString()),L&&(L.textContent=ServerI18n.t("ratelimitSumTotal",{n:k.toLocaleString()}))}let f=t||(o&&o.ok?await o.json():null);if(f){let S=Array.isArray(f)?f:f.entries||f.keywords||[],k=F.querySelector("[data-rl-sum-black]");k&&(k.textContent=S.length?ServerI18n.t("ratelimitCountUnit",{n:S.length}):"0")}let e=F.querySelector("[data-rl-sum-viol]"),n=F.querySelector("[data-rl-sum-viol-rate]"),s=F.querySelector("[data-rl-sum-locked]"),u=d||(a&&a.ok?await a.json():null);if(u){let S=u&&u.rate_limits;if(S&&S.totals){let k=S.totals.hits||0,I=S.totals.violations||0,L=S.totals.locked_sources||0;if(e&&(e.textContent=I.toLocaleString()),n){let P=k+I;n.textContent=P>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(I/P*100).toFixed(1)}):"\u2014"}s&&(s.textContent=ServerI18n.t("ratelimitLockedSources",{n:L.toLocaleString()})),y.forEach(({key:P})=>{let j=S[P],R=F.querySelector(`[data-rl-current="${P}"]`);if(R&&j){let W=(j.hits||0).toLocaleString(),G=(j.violations||0).toLocaleString();R.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:W,viol:G})}}),M(S)}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),s&&(s.textContent="\u2014")}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),s&&(s.textContent="\u2014");p(u&&u.recent_violations)}catch{}},4500);function p(l){let i=F.querySelector("[data-rl-vbody]"),t=F.querySelector("[data-rl-vcount]");if(!i)return;let d=Array.isArray(l)?l:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let r=o=>{let a=new Date(o*1e3),c=f=>String(f).padStart(2,"0");return`${c(a.getHours())}:${c(a.getMinutes())}:${c(a.getSeconds())}`},m=o=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[o]||"var(--color-text-muted)";i.innerHTML=d.slice(0,30).map(o=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${r(o.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${m(o.scope)}">${(o.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${g(o.ip||"")}</span>
        </div>
      `).join("")}function M(l){l&&y.forEach(({key:i})=>{let t=l[i],d=F.querySelector(`[data-rl-suggest="${i}"]`);if(!d)return;let r=t&&t.suggestion;if(!r){d.hidden=!0;return}let m=d.querySelector("[data-rl-suggest-detail]");m&&(m.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(r.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:r.suggested_limit,suggWindow:r.suggested_window}));let o=d.querySelector("[data-rl-apply]");o&&(o.dataset.rlSuggestLimit=String(r.suggested_limit),o.dataset.rlSuggestWindow=String(r.suggested_window)),d.hidden=!1})}async function D(){try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let i=await l.json(),t=i&&i.rate_limits;if(!t)return;y.forEach(({key:d})=>{let r=t[d],m=F.querySelector(`[data-rl-current="${d}"]`);if(m&&r){let o=(r.hits||0).toLocaleString(),a=(r.violations||0).toLocaleString();m.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:o,viol:a})}}),M(t)}catch{}}F.addEventListener("click",async l=>{let i=l.target.closest("[data-rl-action]");if(!i)return;let t=i.dataset.rlAction;if(t==="save"){let d=i.dataset.rlSave,r=F.querySelector(`[data-rl-limit="${d}"]`),m=F.querySelector(`[data-rl-window="${d}"]`);if(!r||!m)return;let o=parseInt(r.value,10),a=parseInt(m.value,10);if(!Number.isFinite(o)||!Number.isFinite(a)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let c=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let f=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:o,window:a})});if(f.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:o,window:a}),!0),D();else{let e=await f.json().catch(()=>({})),n=e&&e.error||`HTTP ${f.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:n}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=c}return}if(t==="apply-suggest"){let d=i.dataset.rlApply,r=parseInt(i.dataset.rlSuggestLimit,10),m=parseInt(i.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(r)||!Number.isFinite(m))return;let o=i.textContent;i.disabled=!0,i.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let a=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:r,window:m})});if(a.ok){let c=F.querySelector(`[data-rl-limit="${d}"]`),f=F.querySelector(`[data-rl-window="${d}"]`);c&&(c.value=r),f&&(f.value=m),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:r,window:m}),!0),D(),x()}else{let c=await a.json().catch(()=>({})),f=c&&c.error||`HTTP ${a.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:f}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{i.disabled=!1,i.textContent=o}return}if(t==="export"){let d=[];F.querySelectorAll("[data-rl-limit]").forEach(r=>{let m=r.dataset.rlLimit.toUpperCase();d.push(`${m}_RATE_LIMIT=${r.value}`)}),F.querySelectorAll("[data-rl-window]").forEach(r=>{let m=r.dataset.rlWindow.toUpperCase();d.push(`${m}_RATE_WINDOW=${r.value}`)}),C.textContent=d.join(`
`),C.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([r,[m,o]])=>{let a=F.querySelector(`[data-rl-limit="${r}"]`),c=F.querySelector(`[data-rl-window="${r}"]`);a&&(a.value=m),c&&(c.value=o)}),C.hidden=!0,x())});function x(){y.forEach(({key:l})=>{let i=F.querySelector(`[data-rl-limit="${l}"]`),t=F.querySelector(`[data-rl-window="${l}"]`),d=F.querySelector(`[data-rl-lockout="${l}"]`),r=F.querySelector(`[data-rl-effective="${l}"]`);if(!i||!t||!r)return;let m=parseInt(i.value,10)||0,o=parseInt(t.value,10)||1,a=(m/o).toFixed(2),c=Math.round(m*1.5),f=`effective_rate = ${m} / ${o}s = ${a} req/s \xB7 burst = ${c}`;if(l==="login"&&d){let e=parseInt(d.value,10)||0;f+=` \xB7 lock = ${e}s`}r.textContent=f})}F.addEventListener("input",l=>{let i=l.target;!i||!i.dataset.rlLimit&&!i.dataset.rlLockout||x()}),F.addEventListener("change",l=>{let i=l.target;!i||!i.dataset.rlWindow||x()}),x();function T(l,i){if(!l||!Array.isArray(i))return;let t=96,d=24,r=i.length?i:new Array(24).fill(0),m=Math.max(1,...r),o=t/Math.max(1,r.length-1),a=r.map((f,e)=>`${(e*o).toFixed(1)},${(d-2-f/m*(d-4)).toFixed(1)}`).join(" "),c=l.querySelector("polyline");c&&c.setAttribute("points",a)}y.forEach(({key:l})=>{let i=F.querySelector(`[data-rl-spark="${l}"]`);i&&T(i,new Array(24).fill(0))});let N=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,$={allowlist:[],denylist:[]},E={input:F.querySelector("[data-rl-ip-input]"),select:F.querySelector("[data-rl-ip-select]"),addBtn:F.querySelector("[data-rl-ip-add]"),summary:F.querySelector("[data-rl-ip-summary]"),error:F.querySelector("[data-rl-ip-error]"),allowCount:F.querySelector("[data-rl-ip-allow-count]"),denyCount:F.querySelector("[data-rl-ip-deny-count]"),allowBody:F.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:F.querySelector('[data-rl-ip-body="denylist"]')};function B(l){if(E.error){if(!l){E.error.hidden=!0,E.error.textContent="";return}E.error.hidden=!1,E.error.textContent=l}}function O(l){let i=l==="allowlist"?E.allowBody:E.denyBody,t=l==="allowlist"?E.allowCount:E.denyCount;if(!i||!t)return;let d=Array.isArray($[l])?$[l]:[];if(t.textContent=String(d.length),d.length===0){let r=ServerI18n.t(l==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");i.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:r})}</div>`;return}i.innerHTML=d.map(r=>{let m=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:g(r)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${g(r)}">
          <span class="admin-ratelimit-ip-chip-cidr">${g(r)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${g(r)}" data-rl-ip-remove-kind="${l}" title="${m}" aria-label="${m}">\xD7</button>
        </div>
      `}).join("")}function _(){if(O("allowlist"),O("denylist"),E.summary){let l=($.allowlist||[]).length,i=($.denylist||[]).length;E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:l,deny:i})}}async function w(){try{let l=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!l.ok){E.summary&&(E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:l.status}));return}let i=await l.json();i&&typeof i=="object"&&($={allowlist:Array.isArray(i.allowlist)?i.allowlist:[],denylist:Array.isArray(i.denylist)?i.denylist:[]},_())}catch{E.summary&&(E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function v(l,{toastLabel:i}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(t.ok){let m=await t.json();return $={allowlist:Array.isArray(m.allowlist)?m.allowlist:[],denylist:Array.isArray(m.denylist)?m.denylist:[]},_(),B(""),i&&typeof showToast=="function"&&showToast(i,!0),!0}let d=await t.json().catch(()=>({})),r=d&&d.error||`HTTP ${t.status}`;return B(r),!1}catch{return B(ServerI18n.t("ratelimitNetworkError")),!1}}E.addBtn&&E.addBtn.addEventListener("click",async()=>{if(!E.input||!E.select)return;let l=(E.input.value||"").trim();if(!l){B(ServerI18n.t("ratelimitIpRequiredError"));return}if(!N.test(l)){B(ServerI18n.t("ratelimitIpFormatError"));return}let i=E.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([...$[i]||[],l]));await v({[i]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(i==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:l})})&&(E.input.value="")}),E.input&&(E.input.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),E.addBtn&&E.addBtn.click())}),E.input.addEventListener("input",()=>{E.error&&!E.error.hidden&&B("")})),F.addEventListener("click",async l=>{let i=l.target.closest("[data-rl-ip-remove]");if(!i)return;let t=i.dataset.rlIpRemove,d=i.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",r=($[d]||[]).filter(m=>m!==t);await v({[d]:r},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),w(),setTimeout(async()=>{try{let l=await fetch("/admin/metrics",{credentials:"same-origin"});if(!l.ok)return;let i=await l.json(),t=i&&i.rate_limits;if(!t)return;y.forEach(({key:d})=>{let r=t[d]&&(t[d].bucket_history||t[d].history);if(Array.isArray(r)&&r.length){let m=F.querySelector(`[data-rl-spark="${d}"]`);m&&T(m,r.slice(-24))}})}catch{}},5500)}function U(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(b))return;F.insertAdjacentHTML("beforeend",h());let C=document.getElementById(b);C&&A(C)}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var Ct=ge(()=>{(function(){"use strict";let b="sec-viewer-theme",g="danmu.viewerTheme.v1",y=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function h(){return`
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
      </div>`}let A=/^#[0-9a-f]{6}$/i,U=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function F(D){return String(D??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[x])}function C(D){let x={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(T=>{typeof D[T]=="string"&&A.test(D[T])&&(x[T]=D[T])}),(D.mode==="dark"||D.mode==="light")&&(x.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(x.font=D.font),(D.logo===null||typeof D.logo=="string"&&U.test(D.logo))&&(x.logo=D.logo)),x}function p(D){let x={...y[0],logo:null};try{let e=localStorage.getItem(g);e&&(x={...x,...C(JSON.parse(e))})}catch{}let T="default";function N(){try{localStorage.setItem(g,JSON.stringify(x))}catch{}}function $(e){let n=/^#?([0-9a-f]{6})$/i.exec(e);if(!n)return[0,0,0];let s=parseInt(n[1],16);return[s>>16&255,s>>8&255,s&255]}function E([e,n,s]){let u=[e,n,s].map(S=>(S/=255,S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)));return .2126*u[0]+.7152*u[1]+.0722*u[2]}function B(e,n){let s=E($(e)),u=E($(n)),[S,k]=s>u?[s,u]:[u,s];return(S+.05)/(k+.05)}function O(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function _(){let e=D.querySelector("[data-vt-presets]");e.innerHTML="",y.forEach(n=>{let s=document.createElement("button");s.type="button",s.className="admin-vt-preset"+(T===n.id?" is-active":""),s.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,s.addEventListener("click",()=>{x={...x,...n},T=n.id,N(),f()}),e.appendChild(s)})}function w(){D.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",x.mode===e.dataset.vtModeBtn)})}function v(){let e=D.querySelector("[data-vt-colors]"),n=x.mode==="dark"?"#F8FAFC":"#0F172A",s=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:x.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=s.map(u=>{let S=B(x[u.key],u.vs),k=O(S),I=F(x[u.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${I}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${u.label}</span>
                <span class="grade ${k.cls}">${k.label} \xB7 ${S.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${I}" data-vt-color="${u.key}" />
                <input type="text" value="${I}" data-vt-hex="${u.key}" spellcheck="false" />
                <span class="vs">vs ${u.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let e=D.querySelector("[data-vt-logo-preview]"),n=D.querySelector(".hint-empty"),s=D.querySelector("[data-vt-logo-actions]");x.logo?(e.src=x.logo,e.hidden=!1,n.style.display="none",s.hidden=!1):(e.hidden=!0,n.style.display="",s.hidden=!0)}function i(){let e=D.querySelector("[data-vt-font]");e.value=x.font;let n=D.querySelector("[data-vt-font-specimen]");n.style.fontFamily=x.font}function t(){let e=x.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:B(e,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:B(x.primary,x.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:B(x.hero,x.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=n.map(s=>{let u=O(s.ratio);return`<span class="vt-contrast-chip ${u.cls}">${s.lbl} \xB7 ${u.label} ${s.ratio.toFixed(1)}</span>`}).join("")}function d(){let e=D.querySelector("[data-vt-stage]"),n=x.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",x.bg),e.style.setProperty("--vt-primary",x.primary),e.style.setProperty("--vt-hero",x.hero),e.style.setProperty("--vt-fg",n),e.style.fontFamily=x.font;let s=D.querySelector("[data-vt-preview-logo]");if(x.logo){let u=document.createElement("img");u.src=x.logo,u.style.maxHeight="40px",s.replaceChildren(u)}else s.textContent="Danmu Fire"}let r="auto",m="auto";function o(){D.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===r)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===m)})}async function a(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json(),s=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],u=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof s=="string"&&(r=s),typeof u=="string"&&(m=u),o()}catch{}}async function c(e,n){if(window.csrfFetch)try{let s=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:n,index:1})});if(!s.ok)throw new Error(s.status);window.showToast&&window.showToast(`${e} = ${n}`,!0)}catch(s){console.warn("[admin-viewer-theme] force-mode update failed:",s),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function f(){_(),w(),v(),l(),i(),t(),d(),o()}D.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let n=e.target.dataset.vtColor;A.test(e.target.value)&&(x[n]=e.target.value,T="custom",N(),f())}else if(e.target.matches("[data-vt-hex]")){let n=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(x[n]=e.target.value,T="custom",N(),f())}else e.target.matches("[data-vt-font]")&&(x.font=e.target.value,N(),f())}),D.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let n=e.target.files&&e.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let s=new FileReader;s.onload=()=>{x.logo=String(s.result||""),N(),f()},s.readAsDataURL(n)}}),D.addEventListener("click",e=>{let n=e.target.closest("[data-vt-mode-btn]");if(n){x.mode=n.dataset.vtModeBtn,T="custom",N(),f();return}let s=e.target.closest("[data-vt-theme-btn]");if(s){r=s.dataset.vtThemeBtn,o(),c("ViewerThemeMode",r);return}let u=e.target.closest("[data-vt-lang-btn]");if(u){m=u.dataset.vtLangBtn,o(),c("ViewerLangMode",m);return}if(e.target.closest("[data-vt-logo-remove]")){x.logo=null,N(),f();return}let k=e.target.closest("[data-vt-device-btn]");if(k){D.querySelectorAll("[data-vt-device-btn]").forEach(L=>L.classList.toggle("is-active",L===k)),D.querySelector("[data-vt-frame]").dataset.device=k.dataset.vtDeviceBtn;return}let I=e.target.closest("[data-vt-action]");I&&I.dataset.vtAction==="reset"&&(x={...y[0],logo:null},T="default",N(),f())}),f(),a()}document.addEventListener("click",function(D){let x=D.target.closest("[data-vt-jump]");if(!x)return;let T=x.dataset.vtJump;if(T){D.preventDefault();try{location.hash="#/"+T}catch{}}});function M(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(b))return;D.insertAdjacentHTML("beforeend",h());let x=document.getElementById(b);x&&p(x)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Bt=ge(()=>{(function(){"use strict";let b="sec-system-overview";function g(){return`
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
      </div>`}function y(C){let p=Math.floor(C/86400),M=Math.floor(C%86400/3600),D=Math.floor(C%3600/60);return p>0?`${p}d ${String(M).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:M>0?`${M}h ${String(D).padStart(2,"0")}m`:`${D}m ${String(C%60).padStart(2,"0")}s`}function h(C,p,M){let D=document.querySelector(`[data-m="${C}"]`);if(!D)return;let x=D.querySelector("[data-m-v]");x&&(x.textContent=p);let T=D.querySelector("[data-m-sub]");T&&(T.textContent=M||"")}function A(C){let p=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),T=!(C.queue_size!=null&&C.queue_capacity!=null&&C.queue_size>=C.queue_capacity);D&&D.classList.toggle("is-warn",!T),p&&p.classList.toggle("is-warn",!T),M&&(M.textContent=T?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function U(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let D=await M.json(),x=_=>Array.isArray(_)&&_.length?_[_.length-1]:null,T=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;h("uptime",T>0?y(T):"\u2014","");let N=null;try{let _=await fetch("/admin/audience/stats",{credentials:"same-origin"});_.ok&&(N=(await _.json()).total_live)}catch{}let $=D.ws_clients??0;h("conn",String($+(N||0)),N==null?ServerI18n.t("sohConnOverlaysOnly",{n:$}):ServerI18n.t("sohConnBreakdown",{overlays:$,viewers:N}));let E=x(D.mem_series||[]),B=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;h("ram",E!=null?`${Number(E).toFixed(0)}%`:"\u2014",B?ServerI18n.t("sohMemorySub",{total:B}):"");let O=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";h("ver",`v${O}`,ServerI18n.t("sohVersionSub")),A(D)}catch{}})();let C=document.getElementById(b);if(!C)return;let p=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";C.querySelectorAll("[data-soh-mode]").forEach(D=>{let x=D.dataset.sohMode===M;D.classList.toggle("is-active",x),D.setAttribute("aria-pressed",x?"true":"false")})};p(),document.addEventListener("admin:theme-mode",p),C.addEventListener("click",function(M){let D=M.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),p();return}let x=M.target.closest("[data-soh-action]");if(!(!x||x.disabled)){if(x.dataset.sohAction==="copy-url"){let T=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(T);return}if(x.dataset.sohAction==="show-qr"){let T=C.querySelector("[data-soh-qr]");if(!T)return;if(!T.hidden){T.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(N=>N.ok?N.json():Promise.reject(N)).then(N=>{T.innerHTML=N.svg,T.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function F(){let C=document.getElementById("settings-grid");!C||document.getElementById(b)||(C.insertAdjacentHTML("beforeend",g()),document.getElementById(b)&&U())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var Ft=ge(()=>{(function(){"use strict";let b="sec-polls",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(U){return String(U).replace(/[&<>"']/g,function(F){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[F]})};function y(){return`
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
  `}function h(){let U=document.getElementById("sec-polls");if(!U)return;let F=U.querySelector("[data-poll-queue]"),C=U.querySelector("[data-poll-editor]"),p=U.querySelector("[data-poll-view-builder]"),M=U.querySelector("[data-poll-view-live]"),D=U.querySelector("[data-poll-view-results]"),x="danmu.adminPollQueue.v2";function T(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function $(K){return{id:N(),label:""}}function E(){return{id:T(),text:"",timer:90,image_url:"",server_q_id:"",options:[$("A"),$("B")]}}let B=null,O="builder",_=null,w=0,v={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,i=[];try{let K=localStorage.getItem(x);if(K){let Y=JSON.parse(K);Array.isArray(Y)?i=Y:Y&&Array.isArray(Y.queue)&&(i=Y.queue)}}catch{}(!Array.isArray(i)||i.length===0)&&(i=[E()]),i.forEach(K=>{typeof K.image_url!="string"&&(K.image_url=""),typeof K.server_q_id!="string"&&(K.server_q_id="")});let t=i[0].id,d="manual",r=null,m=null,o={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function a(){try{localStorage.setItem(x,JSON.stringify({queue:i,activeId:t,mode:d}))}catch{}}function c(K){return i.find(Y=>Y.id===K)}function f(K,Y){let te=c(K);te&&Object.assign(te,Y)}function e(K,Y,te){let oe=K.slice(),[le]=oe.splice(Y,1);return oe.splice(te,0,le),oe}function n(){F.innerHTML="",i.forEach((K,Y)=>{let te=document.createElement("div");te.className="admin-poll-qrow",K.id===t&&te.classList.add("is-active");let oe=o.active&&o.currentIndex===Y;oe&&te.classList.add("is-running"),te.dataset.qid=K.id,te.draggable=!0;let le=!!K.image_url;te.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Y+1}</span>
            <div class="info">
              <div class="text">${g(K.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:K.options.length})} \xB7 ${K.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):K.timer+"s"} \xB7 ${le?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${oe?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":K.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,F.appendChild(te)})}function s(){let K=c(t)||i[0];if(!K){C.innerHTML="";return}let Y=i.indexOf(K);C.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Y+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Y+1})}</span>
            </div>
            <span class="progress">Q${Y+1} / ${i.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${g(K.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${K.image_url?`
              <img class="admin-poll-q-image-thumb" src="${g(K.image_url)}" alt="" />
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
            ${K.options.map((te,oe)=>`
              <div class="admin-poll-opt" data-oid="${te.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+oe)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${te.id}" value="${g(te.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+oe)})}" maxlength="100" />
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
        `}function u(){B&&B.active?O="live":_?O="results":O="builder",U.dataset.pollView=O,p.hidden=O!=="builder",M.hidden=O!=="live",D.hidden=O!=="results",n(),s(),Z(),O==="live"?P():O==="results"&&R(),O==="live"?S():k()}function S(){l||(l=setInterval(()=>{O!=="live"||!B||!B.active||j()},1e3))}function k(){l&&(clearInterval(l),l=null)}function I(K,Y){if(!K||!K.time_limit_seconds)return null;if(!Y)return K.time_limit_seconds;let te=Date.now()/1e3-Y;return Math.max(0,Math.round(K.time_limit_seconds-te))}function L(K){if(K==null)return"\u221E";let Y=String(Math.floor(K/60)).padStart(2,"0"),te=String(K%60).padStart(2,"0");return`${Y}:${te}`}function P(){if(!B||!B.questions||B.questions.length===0){M.innerHTML="";return}let K=B.current_index>=0?B.current_index:0,Y=B.questions.length,te=B.questions[K],oe=I(te,B.started_at),le=te.time_limit_seconds||0,ce=le>0&&oe!=null?Math.max(0,Math.min(1,oe/le)):1,ue=le>0&&oe!=null&&oe<=Math.max(5,le*.15),Ee=te.options.reduce((se,me)=>se+(me.count||0),0),ke=[...te.options].sort((se,me)=>(me.count||0)-(se.count||0)),Ae=ke[0]?ke[0].count:0,re=B.questions[K+1],ie=110,H=ie/2-6,V=2*Math.PI*H,ae=V*ce;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${g((B.poll_id||"").slice(-6))}
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
                    <div class="mmss ${ue?"is-low":""}" data-live-mmss>${oe==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(oe)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:K+1})}</div>
                <div class="text">${g(te.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${ke.map(se=>{let me=Ee>0?se.count/Ee*100:0,Se=(se.count||0)>0&&se.count===Ae;return`
                    <div class="admin-polls-live-bar ${Se?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${g(se.key)}</span>
                        <span class="lbl">${g(se.text||"")}</span>
                        ${Se?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${me.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:se.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${me.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Ee}</strong>`})}</span>
                ${re?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${g(re.text||"")}</em>`})}</span>`:""}
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
                  ${B.questions.map((se,me)=>{let Se=me<K?"done":me===K?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${Se}">
                        <span class="idx">${Se==="done"?"\u2713":me+1}</span>
                        <span class="t">${g(se.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(se=>`
                    <label class="admin-polls-live-toggle ${v[se.k]?"is-on":""}" data-live-toggle="${se.k}">
                      <span class="lbl">${se.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function j(){if(!B||!B.active)return;let K=B.current_index>=0?B.current_index:0,Y=B.questions[K];if(!Y)return;let te=I(Y,B.started_at),oe=Y.time_limit_seconds||0,le=M.querySelector("[data-live-mmss]"),ce=M.querySelector("[data-live-ring]");if(le&&(le.textContent=te==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(te),le.classList.toggle("is-low",oe>0&&te!=null&&te<=Math.max(5,oe*.15))),ce&&oe>0&&te!=null){let ue=+ce.getAttribute("r"),Ee=2*Math.PI*ue,ke=Math.max(0,Math.min(1,te/oe));ce.setAttribute("stroke-dasharray",`${Ee*ke} ${Ee}`);let Ae=te<=Math.max(5,oe*.15);ce.setAttribute("stroke",Ae?"var(--hud-crimson)":"var(--color-primary)"),ce.style.filter=`drop-shadow(0 0 4px ${Ae?"var(--hud-crimson)":"var(--color-primary)"})`}v.autoAdvance&&oe>0&&te===0&&(K>=B.questions.length-1?J():ne())}function R(){let K=_;if(!K||!K.questions||K.questions.length===0){D.innerHTML="";return}let Y=K.questions.length,te=Math.max(0,Math.min(w,Y-1)),oe=K.questions[te],le=oe.options.reduce((V,ae)=>V+(ae.count||0),0),ce=[...oe.options].sort((V,ae)=>(ae.count||0)-(V.count||0)),ue=ce[0]||{key:"-",text:"\u2014",count:0},Ee=ce[1],ke=le>0?ue.count/le*100:0,Ae=Ee?Math.max(0,ue.count-Ee.count):ue.count,re=K.started_at||0,ie=K.ended_at||Date.now()/1e3,H=Math.max(0,Math.round(ie-re));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Y>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${K.questions.map((V,ae)=>`
                    <button type="button" role="tab" class="${ae===te?"is-active":""}" data-results-tab="${ae}">
                      Q${ae+1}<span class="t">${g((V.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${te+1}/${Y} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:L(H),n:le})}</span>
                </div>
                <div class="text">${g(oe.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${g(ue.key)}</div>
                <div class="info">
                  <div class="lbl">${g(ue.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})} \xB7 ${ke.toFixed(1)}% ${Ee?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Ae}):""}</div>
                </div>
                <div class="pct">${ke.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:le})}</span>
                </div>
                ${ce.map((V,ae)=>{let se=le>0?V.count/le*100:0;return`
                    <div class="admin-polls-results-bar ${ae===0&&V.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ae+1}</span>
                        <span class="tag">${g(V.key)}</span>
                        <span class="lbl">${g(V.text||"")}</span>
                        <span class="pct">${se.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:V.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${se.toFixed(1)}%"></div></div>
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
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:oe.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${oe.time_limit_seconds?L(oe.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${K.started_at?new Date(K.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${K.ended_at?new Date(K.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${L(H)}</span></div>
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
        `}function W(K){let Y=[["question_index","question","option_key","option_text","count","percentage"]];return K.questions.forEach((te,oe)=>{let le=te.options.reduce((ce,ue)=>ce+(ue.count||0),0);te.options.forEach(ce=>{let ue=le>0?(ce.count/le*100).toFixed(1):"0";Y.push([oe+1,te.text,ce.key,ce.text,ce.count,ue])})}),Y.map(te=>te.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function G(K,Y,te){let oe=new Blob([te],{type:Y}),le=document.createElement("a");le.href=URL.createObjectURL(oe),le.download=K,document.body.appendChild(le),le.click(),setTimeout(()=>{URL.revokeObjectURL(le.href),le.remove()},0)}U.addEventListener("click",K=>{let Y=K.target.closest("[data-live-action]");if(Y){let ce=Y.dataset.liveAction;ce==="advance"?ne():ce==="end"?J():ce==="pause"&&(v.autoAdvance=!1,P());return}let te=K.target.closest("[data-live-toggle]");if(te){let ce=te.dataset.liveToggle;ce in v&&(v[ce]=!v[ce],te.classList.toggle("is-on",v[ce]));return}let oe=K.target.closest("[data-results-tab]");if(oe){w=+oe.dataset.resultsTab||0,R();return}let le=K.target.closest("[data-results-action]");if(le){let ce=le.dataset.resultsAction,ue=_;if(!ue)return;if(ce==="copy"){let Ee=ue.questions.map((ke,Ae)=>{let re=ke.options.reduce((H,V)=>H+(V.count||0),0),ie=ke.options.map(H=>{let V=re>0?(H.count/re*100).toFixed(1):"0.0";return`  ${H.key}. ${H.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:H.count})} (${V}%)`});return`Q${Ae+1}: ${ke.text}
${ie.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Ee)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ce==="csv"?G(`poll_${(ue.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",W(ue)):ce==="json"?G(`poll_${(ue.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ue,null,2)):ce==="reset"&&(_=null,w=0,u());return}}),F.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(r=Y.dataset.qid,Y.classList.add("is-dragging"))}),F.addEventListener("dragend",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&Y.classList.remove("is-dragging"),r=null,F.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over"))}),F.addEventListener("dragover",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");!Y||!r||Y.dataset.qid===r||(F.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),F.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");if(!Y||!r)return;let te=i.findIndex(le=>le.id===r),oe=i.findIndex(le=>le.id===Y.dataset.qid);te<0||oe<0||te===oe||(i=e(i,te,oe),a(),u())}),F.addEventListener("click",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(t=Y.dataset.qid,a(),u())}),C.addEventListener("input",K=>{let Y=c(t);if(Y){if(K.target.matches("[data-ed-text]")){Y.text=K.target.value,a(),n();return}if(K.target.matches("[data-ed-opt-text]")){let te=K.target.dataset.edOptText,oe=Y.options.find(le=>le.id===te);oe&&(oe.label=K.target.value,a(),n())}}}),C.addEventListener("change",K=>{let Y=c(t);Y&&K.target.matches("[data-ed-timer]")&&(Y.timer=+K.target.value,a(),n())}),C.addEventListener("click",async K=>{let Y=c(t);if(!Y)return;let te=K.target.closest("[data-ed-opt-remove]");if(te){let le=te.dataset.edOptRemove;Y.options.length>2&&(Y.options=Y.options.filter(ce=>ce.id!==le),a(),s(),n());return}if(K.target.closest("[data-ed-opt-add]")){Y.options.length<6&&(Y.options.push($()),a(),s(),n());return}let oe=K.target.closest("[data-ed-action]");if(oe)if(oe.dataset.edAction==="remove-q"){if(i.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ce=i.findIndex(ue=>ue.id===t);i=i.filter(ue=>ue.id!==t),t=i[Math.min(ce,i.length-1)].id,a(),u()}}else if(oe.dataset.edAction==="upload-q-image"){let le=C.querySelector("[data-ed-q-image-input]");le&&le.click()}else oe.dataset.edAction==="remove-q-image"&&(Y.image_url="",a(),s(),n())}),C.addEventListener("change",async K=>{if(!K.target.matches("[data-ed-q-image-input]"))return;let Y=K.target.files&&K.target.files[0];if(!Y)return;let te=c(t);if(!te)return;if(!o.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),K.target.value="";return}if(!te.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),K.target.value="";return}if(Y.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),K.target.value="";return}let oe=new FormData;oe.append("file",Y);try{let le=await csrfFetch(`/admin/poll/${encodeURIComponent(o.pollId)}/upload-image/${encodeURIComponent(te.server_q_id)}`,{method:"POST",body:oe}),ce=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ce.error||"upload failed");te.image_url=ce.image_url,a(),s(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(le){showToast&&showToast(String(le.message||le),!1)}finally{K.target.value=""}}),C.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-opt");Y&&(m=Y.dataset.oid,Y.classList.add("is-dragging"))}),C.addEventListener("dragend",K=>{C.querySelectorAll(".is-dragging, .is-drag-over").forEach(Y=>Y.classList.remove("is-dragging","is-drag-over")),m=null}),C.addEventListener("dragover",K=>{let Y=K.target.closest(".admin-poll-opt");!Y||!m||Y.dataset.oid===m||(K.preventDefault(),C.querySelectorAll(".is-drag-over").forEach(te=>te.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),C.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-opt"),te=c(t);if(!Y||!m||!te)return;let oe=te.options.findIndex(ce=>ce.id===m),le=te.options.findIndex(ce=>ce.id===Y.dataset.oid);oe<0||le<0||oe===le||(te.options=e(te.options,oe,le),a(),s())}),U.addEventListener("click",K=>{if(K.target.closest("[data-poll-action='add']")){let ce=E();i.push(ce),t=ce.id,a(),u();return}let te=K.target.closest("[data-poll-template]");if(te){let ce=E(),ue=te.dataset.pollTemplate,Ee=["A","B","C","D","E"],ke=Ae=>Ae.map((re,ie)=>{let H=$(Ee[ie]);return H.text=re,H});ue==="yesno"?(ce.text="",ce.options=ke([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ue==="stars"?(ce.timer=60,ce.options=ke(["1","2","3","4","5"])):ue==="four"&&(ce.options=ke(["","","",""])),i.push(ce),t=ce.id,a(),u();return}let oe=K.target.closest("[data-poll-mode]");oe&&(d=oe.dataset.pollMode,U.querySelectorAll("[data-poll-mode]").forEach(ce=>ce.classList.toggle("is-active",ce===oe)),a());let le=K.target.closest("[data-poll-session-action]");if(le){let ce=le.dataset.pollSessionAction;ce==="start"?de():ce==="advance"?ne():ce==="end"&&J()}});function Z(){let K=U.querySelector("[data-poll-session]");if(!K)return;let Y=K.querySelector("[data-poll-session-status]"),te=K.querySelector("[data-poll-session-action='start']"),oe=K.querySelector("[data-poll-session-action='advance']"),le=K.querySelector("[data-poll-session-action='end']");if(!o.pollId||!o.active){Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,te.hidden=!1,oe.hidden=!0,le.hidden=!0;return}let ce=i.length,ue=o.currentIndex+1,Ee=o.currentIndex>=ce-1;Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ue} / ${ce}</span>`,te.hidden=!0,oe.hidden=Ee,le.hidden=!1}async function de(){try{let K=i.map((ue,Ee)=>{let ke=(ue.text||"").trim(),Ae=ue.options.map(re=>(re.label||"").trim()).filter(Boolean);if(!ke)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Ee+1}));if(Ae.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Ee+1}));return{text:ke,options:Ae,time_limit_seconds:ue.timer&&ue.timer>0?ue.timer:null}});if(!K.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Y=(()=>{let ue=i.map(Ee=>Number(Ee.timer)||0).filter(Ee=>Ee>0);return ue.length?Math.round(ue.reduce((Ee,ke)=>Ee+ke,0)/ue.length):null})(),te=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:K,mode:d||"manual",default_duration_s:Y})}),oe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrCreateFailed"));o.pollId=oe.poll_id,(oe.questions||[]).forEach((ue,Ee)=>{i[Ee]&&(i[Ee].server_q_id=ue.id)}),a();let le=await csrfFetch("/admin/poll/start",{method:"POST"}),ce=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ce.error||ServerI18n.t("pollBuilderErrStartFailed"));o.active=!0,o.currentIndex=ce.current_index??0,B=ce,_=null,u(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ee()}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function ne(){try{let K=await csrfFetch("/admin/poll/advance",{method:"POST"}),Y=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Y.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));o.currentIndex=Y.current_index,o.active=!!Y.active,B=Y,u(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:o.currentIndex+1}),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function J(){try{let K=B,Y=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Y.ok){let te=await Y.json().catch(()=>({}));throw new Error(te.error||ServerI18n.t("pollBuilderErrEndFailed"))}K&&K.questions&&(_={...K,ended_at:Date.now()/1e3},w=K.current_index>=0?K.current_index:0),o.active=!1,o.pollId="",o.currentIndex=-1,B=null,o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),u(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}function ee(){o.statusTimer&&clearInterval(o.statusTimer),o.statusTimer=setInterval(async()=>{if(o.pollId)try{let K=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!K.ok)return;let Y=await K.json();if(Y.poll_id!==o.pollId)return;o.active=!!Y.active,o.currentIndex=Y.current_index??-1;let te=!!(B&&B.active);B=Y,Y.active||(clearInterval(o.statusTimer),o.statusTimer=null,te&&Y.questions&&!_&&(_={...Y,ended_at:Date.now()/1e3},w=Y.current_index>=0?Y.current_index:0),B=null),O==="live"?P():u()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),k()}),u()}function A(){let U=document.getElementById("settings-grid");!U||document.getElementById(b)||(U.insertAdjacentHTML("beforeend",y()),document.getElementById(b)&&h())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var Dt=ge(()=>{(function(){"use strict";let h="sec-live-feed",A={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},U=[],F=[],C=!1,p="",M="all",D=0,x=0,T=null,N=null,$=null;function E(re){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(re):String(re??"").replace(/[&<>"']/g,function(ie){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ie]})}function B(re,ie){return re?re.length>ie?re.slice(0,ie)+"\u2026":re:""}function O(re){let ie=new Date(re),H=V=>String(V).padStart(2,"0");return`${H(ie.getHours())}:${H(ie.getMinutes())}:${H(ie.getSeconds())}`}function _(re){if(!p)return!0;let ie=p.toLowerCase(),H=re.data;return H.text&&H.text.toLowerCase().includes(ie)||H.nickname&&H.nickname.toLowerCase().includes(ie)||H.fingerprint&&H.fingerprint.toLowerCase().includes(ie)||H.layout&&H.layout.toLowerCase().includes(ie)}function w(re){return M==="muted"?!!re.muted:!0}function v(){M="all",document.querySelectorAll(".admin-live-feed-tab").forEach(re=>re.classList.toggle("is-active",re.dataset.tab==="all"))}function l(){p="",$&&($.value=""),v()}function i(re,ie){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let V;return re==="paused"?V=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ie||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):re==="no-result"?V=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ie||ServerI18n.t("lfNoMatchDesc")}):V=window.AdminEmpty.render("messages"),V.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),V.setAttribute("data-empty-kind","live-feed"),V}let H=document.createElement("div");return H.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",H.setAttribute("data-empty-kind","live-feed"),H.innerHTML=`<div class="admin-proto-placeholder-title">${E(re)}</div><div class="admin-proto-placeholder-body">${E(ie||"")}</div>`,H}function t(re){let ie=re.data,H=document.createElement("div");H.className="admin-live-feed-row"+(re.muted?" is-muted":""),H.dataset.id=re.id,H.tabIndex=-1;let V=document.createElement("span");if(V.className="admin-live-feed-time",V.textContent=O(re.ts),H.appendChild(V),(ie.layout||"scroll").toLowerCase()!=="scroll"){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=ie.layout,H.appendChild(he)}let se=A[ie.integration];if(se){let he=document.createElement("span");he.className="admin-ui-chip admin-live-feed-tag",he.textContent=se,H.appendChild(he)}let me=document.createElement("span");me.className="admin-live-feed-text",me.textContent=B(ie.text||"",80),me.title=ie.text||"",H.appendChild(me);let Se=document.createElement("span");Se.className="admin-live-feed-identity",window.AdminIdentity&&Se.appendChild(AdminIdentity.render({nickname:ie.nickname||"",fp:"",onNicknameClick:function(he){!he||!$||($.value=he,$.dispatchEvent(new Event("input",{bubbles:!0})),$.focus())}})),H.appendChild(Se);let Le=document.createElement("span");if(Le.className="admin-live-feed-actions is-hover-reveal",ie.message_id){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip admin-live-feed-action",he.textContent=ServerI18n.t("lfRecallBtn"),he.title=ServerI18n.t("lfRecallTitle"),he.addEventListener("click",_e=>{_e.stopPropagation(),r(re)}),Le.appendChild(he)}let ye=document.createElement("button");if(ye.type="button",ye.className="admin-ui-chip is-danger admin-live-feed-action",ye.textContent=ServerI18n.t("blockKeywordBtn"),ye.title=ServerI18n.t("blockKeywordTitle"),ye.addEventListener("click",he=>{he.stopPropagation(),m("keyword",ie.text,re.id)}),Le.appendChild(ye),ie.fingerprint){let he=document.createElement("button");he.type="button",he.className="admin-ui-chip is-warn admin-live-feed-action",he.textContent=ServerI18n.t("blockFpBtn"),he.title=ServerI18n.t("blockFpTitle").replace("{fp}",ie.fingerprint),he.addEventListener("click",_e=>{_e.stopPropagation(),m("fingerprint",ie.fingerprint,re.id)}),Le.appendChild(he)}return H.appendChild(Le),H.classList.add("is-clickable"),H.addEventListener("click",he=>{he.target.closest(".admin-live-feed-actions")||d(re)}),H.addEventListener("keydown",he=>{he.key!=="Enter"||he.target.closest("button")||(he.preventDefault(),d(re))}),H}function d(re){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(re)}async function r(re){let ie=re&&re.data&&re.data.message_id;if(!ie)return;let H=await window.AdminModeration.recall(ie);if(!H.ok){console.error("[LiveFeed] Recall failed:",H.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}re.recalled=!0;let V=o(re.id);V&&V.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function m(re,ie,H){if(!(!ie||!await(re==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ie))){if(H){let se=U.find(me=>me.id===H);se&&(se.muted=!0)}else U.forEach(se=>{re==="keyword"&&se.data.text===ie&&(se.muted=!0),re==="fingerprint"&&se.data.fingerprint===ie&&(se.muted=!0)});f()}}function o(re){if(!T||!re)return null;let ie=T.children;for(let H=0;H<ie.length;H++)if(ie[H].dataset&&ie[H].dataset.id===re)return ie[H];return null}function a(){let re=document.activeElement,ie=re&&re.closest?re.closest(".admin-live-feed-row"):null;return ie?ie.dataset.id:null}function c(re){if(!re)return;let ie=o(re);ie&&document.activeElement!==ie&&ie.focus({preventScroll:!0})}function f(){if(!T)return;let re=a(),ie=document.createDocumentFragment(),H=U.filter(V=>_(V)&&w(V));for(let V=H.length-1;V>=0;V--)ie.appendChild(t(H[V]));if(T.textContent="",ie.childNodes.length===0){let V=C?i("paused"):U.length===0?i("empty"):i("no-result");T.appendChild(V)}else T.appendChild(ie);s(),c(re)}function e(re){if(!T||!_(re)||!w(re))return null;let ie=T.querySelector("[data-empty-kind='live-feed']");ie&&ie.remove();let H=T.scrollTop<=8,V=t(re);if(H)T.insertBefore(V,T.firstChild);else{let ae=T.scrollHeight;T.insertBefore(V,T.firstChild),T.scrollTop+=T.scrollHeight-ae,x+=1}return V}function n(){let re=U.length-200;if(re<=0)return;U.splice(0,re).forEach(H=>{let V=o(H.id);V&&V.remove()})}function s(){I(),L(),S()}function u(re){let ie={ts:Date.now(),data:re,id:re&&re.message_id?"m"+re.message_id:"e"+ ++D};if(re&&re.status==="blocked"&&(ie.muted=!0),C){F.push(ie),L(),S();return}U.push(ie),e(ie),n(),s()}function S(){let re=document.querySelector("[data-lf-jump]"),ie=document.querySelector("[data-lf-jump-n]");if(!re||!ie)return;let H=F.length,V=H>0?H:x;V>0?(re.hidden=!1,ie.textContent=String(V)):re.hidden=!0}function k(){C&&P(),x=0,T&&(T.scrollTop=0),S()}function I(){let re=document.querySelector("[data-lf-state]");re&&(re.className=C?"ui-status is-warning":"ui-status is-success",re.textContent=C?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function L(){let re=document.getElementById(h)||document,ie=(H,V)=>{let ae=re.querySelector(H);ae&&(ae.textContent=String(V))};ie("[data-cnt-all]",U.length),ie("[data-cnt-mut]",U.filter(H=>H.muted).length)}function P(){if(C=!C,T&&T.setAttribute("aria-live",C?"off":"polite"),N&&(N.textContent=C?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),N.classList.toggle("is-primary",C),N.classList.toggle("is-ghost",!C)),C)L(),S();else{for(let re of F)U.push(re);F=[],U.length>200&&U.splice(0,U.length-200),x=0,f()}}function j(){let re=document.getElementById("settings-grid");if(!re)return!1;let ie=`
      <div id="${h}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
              placeholder="${E(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${E(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${E(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return re.insertAdjacentHTML("beforeend",ie),!0}let R=!1,W=null,G=0,Z=1500,de=!1;async function ne(){if(!de){de=!0;try{let re=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(G),{credentials:"same-origin"});if(!re.ok)return;let ie=await re.json();if(Array.isArray(ie.entries)){for(let H of ie.entries)if(!(!H||!H.data)){if(typeof H.seq=="number"){if(H.seq<=G)continue;G=H.seq}u(H.data)}}typeof ie.next_since=="number"&&ie.next_since>G&&(G=ie.next_since)}catch{}finally{de=!1}}}let J=5e3,ee=null,K=!1;async function Y(){if(!(K||document.hidden)){K=!0;try{let re=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!re.ok)return;let ie=await re.json(),H=Array.isArray(ie.pending)?ie.pending.length:0,V=document.getElementById(h);if(!V)return;let ae=V.querySelector("[data-cnt-q]");ae&&(ae.textContent=String(H));let se=V.querySelector("[data-lf-pending-link]");se&&se.classList.toggle("has-pending",H>0)}catch{}finally{K=!1}}}function te(){R||(R=!0,ne(),W=setInterval(ne,Z),Y(),ee=setInterval(Y,J),window.addEventListener("beforeunload",()=>{ee&&(clearInterval(ee),ee=null),W&&(clearInterval(W),W=null)}))}function oe(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(h)&&j()&&(le(),f())}function le(){T=document.getElementById("liveFeedList"),N=document.getElementById("liveFeedPauseBtn"),$=document.getElementById("liveFeedSearch");let re=document.getElementById("liveFeedClearBtn"),ie=document.querySelectorAll(".admin-live-feed-tab");N&&N.addEventListener("click",P),re&&re.addEventListener("click",()=>{U=[],F=[],x=0,f()});let H=document.querySelector("[data-lf-jump-btn]");if(H&&H.addEventListener("click",k),T&&T.addEventListener("scroll",()=>{T.scrollTop<=8&&x>0&&(x=0,S())},{passive:!0}),ie.forEach(V=>{V.addEventListener("click",()=>{ie.forEach(ae=>ae.classList.remove("is-active")),V.classList.add("is-active"),M=V.dataset.tab||"all",f()})}),$){let V=null;$.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{p=$.value.trim(),f()},200)})}te()}function ce(re){if(!("ontouchstart"in window))return;let ie=0,H=0,V=0,ae=null,se=null,me=!1;function Se(Le){if(Le.querySelector(".admin-live-feed-row__swipe-actions"))return;let ye=Le.dataset.id,he=U.find(De=>De.id===ye),_e=!!(he&&he.data&&he.data.message_id),xe=document.createElement("div");xe.className="admin-live-feed-row__swipe-actions",xe.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${_e?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,xe.addEventListener("click",function(De){let Ne=De.target.closest("[data-swipe-act]");if(!Ne||Ne.disabled)return;let He=Le.dataset.id,Oe=U.find(Re=>Re.id===He);if(!Oe||!Oe.data)return;let qe=Ne.dataset.swipeAct;qe==="ban"?Oe.data.fingerprint&&m("fingerprint",Oe.data.fingerprint,He):qe==="recall"&&r(Oe),Le.classList.remove("is-swiped")}),Le.appendChild(xe)}re.addEventListener("touchstart",function(Le){let ye=Le.target.closest(".admin-live-feed-row");ye&&(Le.target.closest(".admin-live-feed-row__swipe-actions")||(ae=ye,me=!1,ie=Le.touches[0].clientX,H=Le.touches[0].clientY,V=0))},{passive:!0}),re.addEventListener("touchmove",function(Le){if(!ae||me)return;let ye=Le.touches[0],he=ye.clientX-ie,_e=ye.clientY-H;if(Math.abs(_e)>Math.abs(he)&&Math.abs(_e)>12){me=!0;return}if(V=he,he<-10){Se(ae),se=ae,ae.classList.add("is-swiping");let xe=Math.max(-180,he);ae.style.transform=`translateX(${xe}px)`}else he>10&&ae.classList.contains("is-swiped")&&(ae.style.transform="")},{passive:!0}),re.addEventListener("touchend",function(){ae&&(ae.classList.remove("is-swiping"),ae.style.transform="",V<=-60?ae.classList.add("is-swiped"):ae.classList.remove("is-swiped"),ae=null,se=null,V=0)},{passive:!0})}function ue(){return T?Array.from(T.querySelectorAll(".admin-live-feed-row")):[]}function Ee(){let re=ue(),ie=document.activeElement;for(let H of re)if(H===ie||H.contains(ie))return H;return null}function ke(re){let ie=ue();if(!ie.length)return!1;let H=Ee(),V=H?ie.indexOf(H)+re:re>0?0:ie.length-1;return V=Math.max(0,Math.min(ie.length-1,V)),ie[V].focus(),ie[V].scrollIntoView({block:"nearest"}),!0}function Ae(re){let ie=Ee();if(!ie)return!1;let H=U.find(ae=>ae.id===ie.dataset.id);if(!H)return!1;let V=re==="keyword"?H.data.text:H.data.fingerprint;return V?(m(re,V,H.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return U.slice()},isVisible:function(){return!!(T&&T.offsetParent!==null)},isPaused:function(){return C},moveFocus:ke,blockFocused:Ae,togglePause:function(){P()}},document.addEventListener("admin-panel-rendered",oe),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",oe):oe()})()});var Mt=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.loadDetailsState,g=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml;function h(f,e=!1){var n=b();return n[f]!==void 0?n[f]:e}function A(f){var e=b();e[f.id]=f.open,g(e)}let U=!1;new MutationObserver(()=>{let f=document.getElementById("settings-grid");if(f&&!(document.getElementById("sec-plugins")||U)){U=!0;try{C(f)}finally{U=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function C(f){let e=`
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
      `;f.insertAdjacentHTML("beforeend",e);let n=document.querySelector("[data-console-filters]");n&&n.addEventListener("click",s=>{let u=s.target.closest("[data-console-filter]");u&&(n.querySelectorAll("[data-console-filter]").forEach(S=>S.classList.toggle("is-active",S===u)),D=u.dataset.consoleFilter,E())}),document.getElementById("pluginsReloadBtn").addEventListener("click",c),_(),O()}let p=0,M=0,D="all",x=[],T=80;function N(f){let e=(f||"INFO").toUpperCase();return e==="ERROR"?"is-error":e==="WARN"?"is-warn":e==="DEBUG"?"is-debug":"is-info"}function $(f){let e=new Date(f*1e3),n=s=>String(s).padStart(2,"0");return`${n(e.getHours())}:${n(e.getMinutes())}:${n(e.getSeconds())}`}function E(){let f=document.getElementById("pluginsConsoleBody");if(!f)return;let e=D==="all"?x:x.filter(n=>(n.level||"INFO").toUpperCase()===D);if(e.length===0){let n=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;f.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${n}</span>
          </div>`;return}f.innerHTML=e.map(n=>{let s=$(n.ts),u=(n.msg||"").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),S=(n.plugin||"\u2014").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),k=(n.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${s}</span>
          <span class="lv ${N(n.level)}">${k}</span>
          <span class="plg">${S}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function B(){try{let f=await fetch(`/admin/plugins/console?since=${p}`,{credentials:"same-origin"});if(!f.ok)return;let e=await f.json();if(!Array.isArray(e.events)||e.events.length===0)return;for(x.unshift(...e.events);x.length>T;)x.pop();p=e.latest_seq||p,E()}catch{}}function O(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:B}))}async function _(){let f=document.getElementById("pluginsList");if(f)try{let e=await csrfFetch("/admin/plugins/list");if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json(),s=n.plugins||[];if(w(n.upload_allowed!==!1),s.length===0){f.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",v([]);return}f.innerHTML=s.map(l).join(""),o(f),v(s)}catch(e){console.error("Failed to load plugins:",e),f.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function w(f){let e=document.getElementById("pluginsUploadBtn");e&&(e.disabled=!f,e.toggleAttribute("data-upload-disabled",!f),e.textContent=ServerI18n.t(f?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),f?e.removeAttribute("title"):e.title="ALLOW_PLUGIN_UPLOAD")}function v(f){let e=f.length,n=f.filter(I=>I.enabled).length,s=e-n,u=f.map(I=>I.priority).filter(I=>typeof I=="number"),S=u.length?Math.round(u.reduce((I,L)=>I+L,0)/u.length):null,k=(I,L)=>{document.querySelectorAll(`[data-plugins-stat="${I}"]`).forEach(P=>{P.textContent=L})};k("loaded",e),k("running",n),k("paused",s),k("priority",S??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(I=>{I.textContent=e})}function l(f){let{name:e,version:n,description:s,priority:u,enabled:S,is_user:k,file:I}=f,L=`plugin-toggle-${e}`,P=d(u),j=m(u),R=t(f),W=k&&I?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${y(I)}"
            data-plugin-name="${y(e)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${y(e)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${y(e)}">
          <span class="admin-plugins-dot ${S?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${y(e)}</div>
            ${s?`<div class="desc">${y(s)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${n?"v"+y(n):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${P}">${u??"\u2014"}${j?" \xB7 "+j:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${r(R)}">${R}</span>
          <div class="admin-plugins-toggle-cell">
            ${W}
            <label class="admin-plugins-switch" for="${L}">
              <input type="checkbox" id="${L}" role="switch"
                aria-checked="${!!S}" aria-label="Toggle plugin ${y(e)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${y(e)}"
                ${S?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function i(f,e){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:f}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:e}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let s=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e})}),u=await s.json().catch(()=>({}));if(!s.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:s.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:f}),!0),await _()}catch(s){showToast(ServerI18n.t("pluginsToastNetError",{msg:s.message||""}),!1)}}function t(f){let e=f.file||f.path||f.source||"";if(typeof e=="string"){if(e.endsWith(".py"))return"PY";if(e.endsWith(".js"))return"JS"}return(f.language||"PY").toUpperCase()}function d(f){return f==null?"is-muted":f<=10?"is-danger":f<=50?"is-warn":"is-cyan"}function r(f){return f==="JS"?"is-cyan":f==="PY"?"is-warn":"is-muted"}function m(f){return f==null?"":f<=10?"CRITICAL":f<=50?"HIGH":"NORMAL"}function o(f){f.querySelectorAll(".plugin-toggle").forEach(e=>{e.addEventListener("change",async function(){let n=this.dataset.pluginName,s=this.checked;await a(n,s,this)})}),f.querySelectorAll(".plugin-uninstall").forEach(e=>{e.addEventListener("click",function(){i(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function a(f,e,n){let s=e?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f})});if(!u.ok){let S=await u.json().catch(()=>({}));throw new Error(S.error||`HTTP ${u.status}`)}showToast(e?ServerI18n.t("pluginEnabled").replace("{name}",f):ServerI18n.t("pluginDisabled").replace("{name}",f),!0)}catch(u){console.error(`Failed to ${e?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),n&&(n.checked=!e)}}async function c(){let f=document.getElementById("pluginsReloadBtn");f&&(f.disabled=!0);try{let e=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!e.ok){let n=await e.json().catch(()=>({}));throw new Error(n.error||`HTTP ${e.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await _()}catch(e){console.error("Failed to reload plugins:",e),showToast(e.message||ServerI18n.t("reloadFailed"),!1)}finally{f&&(f.disabled=!1)}}})})()});var Nt=ge(()=>{(function(){"use strict";let b=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},y=null,h=null;function A(){return y||(y=document.createElement("div"),y.className="admin-pu-backdrop",y.hidden=!0,y.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(y),y.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===y)&&i()}),y)}function U(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((r,m)=>{let o=m+1,a=o<t,f=a?"is-done":o===t?"is-active":"";return(m>0?`<span class="admin-pu-step-line ${a?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${f}">
          <span class="circle">${a?"\u2713":o}</span>
          <span class="label">${r}</span>
        </div>`}).join("")}function F(t,d){h.step=t;let r=y.querySelector("[data-pu-steps]");r&&(r.innerHTML=U(t));let m=y.querySelector("[data-pu-body]");m&&(m.innerHTML=d)}function C(t){let d=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),r=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${r}</div>
          <div class="admin-pu-dropzone-msg">${b(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function p(){let t=y.querySelector("[data-pu-dropzone]"),d=y.querySelector("[data-pu-file]"),r=y.querySelector("[data-pu-browse]");r&&r.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&M(d.files[0])}),t&&(t.addEventListener("click",()=>d&&d.click()),t.addEventListener("dragover",m=>{m.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",m=>{m.preventDefault(),t.classList.remove("is-over");let o=m.dataTransfer&&m.dataTransfer.files;if(!(!o||o.length===0)){if(o.length>1){F(1,C("error-multi")),p();return}M(o[0])}}))}function M(t){if(!t.name.match(/\.py$/i)){F(1,C("error-type")),p();return}if(t.size>256*1024){F(1,C("error-size")),p();return}h.file=t,F(2,D(t.name)),x(t)}function D(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${b(t)}</div>
      </div>`}async function x(t){try{let d=new FormData;d.append("file",t);let r=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),m=await r.json().catch(()=>({}));if(!r.ok&&!m.validation){window.showToast?.(m.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:r.status}),!1),F(1,C()),p();return}h.manifest=m.manifest||{},h.validation=m.validation||{},h.filename=m.filename||t.name,T(h)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),F(1,C()),p()}}function T(t){let d=t.manifest||{},r=t.validation||{},m="";if(!r.syntax_ok)m=N(r.syntax_err,t);else if(Object.keys(d).length===0)m=$(t);else{let o=(r.deps||[]).some(a=>a.status==="missing");m=O(d,r,t,o)}F(2,`<div class="admin-pu-step2">${m}</div>`),_()}function N(t,d){let r=t&&t.line?t.line:"?",m=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${r}</span>
        </div>
        <pre class="admin-pu-syntax-body">${b(`>>> ${d.filename}
${m}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function $(t){return`
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
      </footer>`}function E(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function B(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=E(t),r=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${t} \xB7 ${r}</span>`}function O(t,d,r,m){let o=t.name||r.filename.replace(/\.(py|js)$/i,""),a=t.version?`v${b(t.version)}`:"\u2014",c=t.author?`@${b(t.author.replace(/^@/,""))}`:"\u2014",f=t.description||ServerI18n.t("pluginsUploadNoDescription"),e="PY",n="is-warn",s=Array.isArray(t.permissions)?t.permissions:[],u=Object.keys(g).map(P=>{let j=s.includes(P);return`
        <div class="admin-pu-perm-row ${j?"is-req":"is-not"}">
          <span class="dot">${j?"\u25CF":"\u25CB"}</span>
          <span class="key">${b(P)}</span>
          <span class="label">${b(ServerI18n.t(g[P]))}</span>
        </div>`}).join(""),S=d.deps||[],k=S.map(P=>{let j=P.status==="ok"?"is-ok":P.status==="warn"?"is-warn":"is-err",R=P.status==="ok"?"\u2713":P.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${j}">
          <span class="dot">${R}</span>
          <span class="name">${b(P.name)}</span>
          <span class="note">${b(P.note||"")}</span>
        </div>`}).join(""),I=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${b(o)}</span>`})}
      </div>`:"",L=S.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${I}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${b(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${a}</span>
          <span class="author">${c}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${b(f)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${B(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${u}</div>
        </section>
        ${L}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${m?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${m?"disabled":""} data-pu-confirm>${m?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function _(){let t=y.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{h.file=null,h.manifest=null,h.validation=null,F(1,C()),p()});let d=y.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>w());let r=y.querySelector("[data-pu-no-manifest-ack]");r&&d&&r.addEventListener("change",()=>{d.disabled=!r.checked})}function w(){let t=h.manifest||{},d=t.name||(h.filename||"").replace(/\.(py|js)$/i,""),r=t.version?`v${b(t.version)}`:"\u2014",m=Array.isArray(t.permissions)?t.permissions:[],o=m.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:m.map(f=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${b(f)}</span></div>`).join("");F(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${b(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${r}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${o}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${b(h.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:t.priority!=null?t.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let a=y.querySelector("[data-pu-install]");a&&a.addEventListener("click",v);let c=y.querySelector("[data-pu-back]");c&&c.addEventListener("click",()=>T(h))}async function v(){F(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",h.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),r=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(r.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),T(h);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:r.name||h.filename}),!0),i();let m=document.getElementById("pluginsReloadBtn");m&&m.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),T(h)}}function l(){A(),h={step:1,file:null,manifest:null,validation:null,filename:null},F(1,C()),p(),y.hidden=!1,document.body.classList.add("admin-pu-open")}function i(){y&&(y.hidden=!0,document.body.classList.remove("admin-pu-open"),h=null)}window.AdminPluginUpload={open:l,close:i},document.addEventListener("click",t=>{let d=t.target.closest("#pluginsUploadBtn");d&&!d.disabled&&(t.preventDefault(),l())})})()});var Pt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let g="sec-webhooks",y=12e3,h=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function A(o,a){return o?o.length>a?o.slice(0,a)+"\u2026":o:""}function U(o){if(!o)return"\u2014";try{let a=new Date(o),c=Math.max(0,(Date.now()-a.getTime())/1e3);return c<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(c)}):c<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(c/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(c/86400)})}catch{return"\u2014"}}function F(o){if(!o)return"\u2014";try{return new URL(o).hostname}catch{return A(o,30)}}function C(o){return o==="active"?"is-success":o==="degraded"?"is-warn":"is-muted"}let p={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:h,eventCatalogLoaded:!1};function M(){let o=document.getElementById("settings-grid");!o||document.getElementById(g)||(o.insertAdjacentHTML("beforeend",`
      <details id="${g}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
    `),D())}function D(){let o=document.getElementById(g);if(!o)return;let a=document.getElementById("wh-register-form");a&&a.addEventListener("submit",async c=>{c.preventDefault();let f=document.getElementById("wh-url").value.trim();if(!f)return;let e=Array.from(a.querySelectorAll('input[name="wh-event"]:checked')).map(S=>S.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,s=document.getElementById("wh-secret").value.trim(),u={url:f,events:e,format:n};s&&(u.secret=s);try{let S=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),k=await S.json();S.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),a.reset(),B(),a.hidden=!0,await x()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(S){console.error("Webhook register error:",S),showToast(ServerI18n.t("registrationFailed"),!1)}}),o.addEventListener("click",c=>{if(c.target.closest("[data-wh-action='show-add']")){a&&(a.hidden=!1);return}if(c.target.closest("[data-wh-action='hide-add']")){a&&(a.hidden=!0);return}let n=c.target.closest("[data-wh-log-filter]");if(n){p.deliveryFilter=n.dataset.whLogFilter,o.querySelectorAll("[data-wh-log-filter]").forEach(j=>{j.classList.toggle("is-active",j.dataset.whLogFilter===p.deliveryFilter)}),l();return}let s=c.target.closest("[data-wh-action='test']");if(s){c.stopPropagation(),d(s.dataset.whHookId);return}let u=c.target.closest("[data-wh-action='settings']");if(u){c.stopPropagation(),i(u.dataset.whHookId);return}if(c.target.closest("[data-wh-action='close-detail']")){p.selectedHookId=null,t(),w();return}let k=c.target.closest("[data-wh-action='detail-ping']");if(k){d(k.dataset.whHookId);return}let I=c.target.closest("[data-wh-action='detail-toggle']");if(I){r(I.dataset.whHookId,I.dataset.whNextEnabled==="1");return}let L=c.target.closest("[data-wh-action='detail-delete']");if(L){m(L.dataset.whHookId);return}let P=c.target.closest("[data-wh-hook-row]");if(P&&!c.target.closest("button")){i(P.dataset.whHookId);return}}),p.stopPoll||(p.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(g)},intervalMs:y,tick:x}))}async function x(){await $(),await Promise.all([T(),N()]),O(),w(),l(),t()}async function T(){try{let a=await(await csrfFetch("/admin/webhooks/list")).json();p.hooks=Array.isArray(a.webhooks)?a.webhooks:[]}catch{p.hooks=[]}}async function N(){try{let o=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!o.ok)return;let a=await o.json();p.deliveries=Array.isArray(a.deliveries)?a.deliveries:[],p.stats=a.stats||null}catch{}}async function $(){if(!p.eventCatalogLoaded)try{let o=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(o.ok){let a=await o.json(),c=Array.isArray(a.events)?a.events:[];c.length&&(p.eventCatalog=c)}}catch{}finally{p.eventCatalogLoaded=!0,B()}}function E(o){let a=o&&o.slug?String(o.slug):"";if(o&&o.labelKey){let s=ServerI18n.t(o.labelKey);return{slug:a,label:s?s+" \xB7 "+a:a,title:s}}let c=o&&o.zh?String(o.zh):"",f=o&&o.en?String(o.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(o&&o[e]?String(o[e]):"")||f||c;return{slug:a,label:n?n+" \xB7 "+a:a,title:c&&f?c+" \xB7 "+f:c||f}}function B(){let o=document.querySelector("[data-wh-register-events]");o&&(o.innerHTML=p.eventCatalog.map(function(a){let c=E(a);if(!c.slug)return"";let f=c.slug==="on_danmu"?" checked":"";return'<label title="'+b(c.title)+'"><input type="checkbox" name="wh-event" value="'+b(c.slug)+'"'+f+" /> "+b(c.label)+"</label>"}).join(""))}function O(){let o=document.querySelector("[data-wh-stats]");if(!o)return;let a=p.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};o.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${a.endpoints_enabled} / ${a.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${a.deliveries_24h.toLocaleString?a.deliveries_24h.toLocaleString():a.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${a.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${a.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:_()})}</div>
        <div class="v" style="color:${a.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${a.dropped_24h}</div>
      </div>`}function _(){return p.hooks.length&&p.hooks[0].retry_count||3}function w(){let o=document.getElementById("wh-list"),a=document.querySelector("[data-wh-count]");if(o){if(a&&(a.textContent=String(p.hooks.length)),p.hooks.length===0){o.innerHTML="";let c=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let f=document.getElementById("wh-register-form");f&&(f.hidden=!1),document.getElementById("wh-url")?.focus()}});c.dataset.emptyKind="webhooks",o.appendChild(c);return}o.innerHTML=p.hooks.map(v).join("")}}function v(o){let a=b(o.id||""),c=Number(o.success_count)||0,f=Number(o.fail_count)||0,e=c+f,n=e>0?Math.round(c/e*1e3)/10:100,s=o.enabled!==!1,u=Number(o.last_status)||null,S=s?u&&u>=400||o.last_error?"degraded":"active":"paused",k=S==="active"?"var(--hud-lime)":S==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",I=S==="active"?"ACTIVE":S==="degraded"?"DEGRADED":"PAUSED",L=p.selectedHookId===o.id?" is-selected":"",P=C(S),j=(o.events||[]).map(function(W){return'<span class="admin-ui-pill admin-wh-evt-chip">'+b(W)+"</span>"}).join(""),R=o.last_error?'<div class="admin-wh-card-warn">\u26A0 '+b(A(o.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${L}" data-wh-hook-row data-wh-hook-id="${a}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${s?"0 0 6px "+k:"none"}"></span>
          <span class="name">${b(F(o.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${P}">${I}</span>
          <span class="last">last \xB7 ${b(U(o.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${b(o.url)}</div>
        <div class="admin-wh-card-events">${j}</div>
        ${R}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${c.toLocaleString()}</span>
          <span class="counter ${f>0?"fail":"fail-zero"}">\u2717 ${f}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${a}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${a}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let o=document.getElementById("wh-log-list");if(!o)return;let a=p.deliveries.filter(function(c){return p.deliveryFilter==="all"?!0:p.deliveryFilter==="failed"?!c.ok:p.deliveryFilter==="2xx"?c.code&&c.code>=200&&c.code<300:p.deliveryFilter==="5xx"?c.code&&c.code>=500:!0});if(a.length===0){o.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}o.innerHTML=a.map(function(c){let f=c.ts?new Date(c.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=c.code?String(c.code):"\u2014",n=c.ok?"var(--hud-lime)":"var(--hud-crimson)",s=c.duration_ms?c.duration_ms>=1e3?(c.duration_ms/1e3).toFixed(1)+"s":c.duration_ms+"ms":"\u2014",u=c.ok?"var(--color-text-strong)":"var(--hud-amber)",S=b(F(c.hook_url||"")),k=(c.retries||0)===0?"\u2014":"\xD7"+c.retries,I=(c.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${c.dropped?" is-dropped":""}">
          <span class="time">${b(f)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${e}</span>
          <span class="dur" style="color:${u}">${b(s)}</span>
          <span class="ep">${S}</span>
          <span class="evt">${b(c.event||"")}</span>
          <span class="retry" style="color:${I}">${k}</span>
        </div>`}).join("")}function i(o){p.selectedHookId=o,w(),t()}function t(){let o=document.querySelector("[data-wh-detail]");if(!o)return;let a=p.hooks.find(function(S){return S.id===p.selectedHookId});if(!a){o.hidden=!0,o.innerHTML="";return}o.hidden=!1;let c=a.enabled!==!1,f=Number(a.last_status)||null,e=c?f&&f>=400||a.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(a.events||[]),s=p.eventCatalog.map(function(S){let k=E(S),I=n.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(I?"is-active is-on":"")+'" title="'+b(k.title)+'"><span aria-hidden="true">'+(I?"\u2713":"\u25CB")+"</span><span>"+b(k.label)+"</span></label>"}).join(""),u={event:a.events&&a.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:a.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};o.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+b(F(a.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+s+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(a.retry_count!=null?a.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(a.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+b(JSON.stringify(u,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+b(a.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+b(a.id)+'" data-wh-next-enabled="'+(c?"0":"1")+'">'+(c?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+b(a.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(o){if(o)try{let a=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),c=await a.json();a.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(c.error||ServerI18n.t("testFailed"),!1),setTimeout(x,1500)}catch(a){console.error("Webhook test error:",a),showToast(ServerI18n.t("testFailed"),!1)}}async function r(o,a){if(o)try{let c=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o,enabled:a})}),f=await c.json();if(!c.ok){showToast(f.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=p.hooks.find(function(n){return n.id===o});e&&(e.enabled=f.enabled),showToast(f.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),O(),w(),t()}catch(c){console.error("Webhook toggle error:",c),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function m(o){if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let c=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),f=await c.json();c.ok?(showToast(ServerI18n.t("webhookDeleted")),p.selectedHookId===o&&(p.selectedHookId=null),x()):showToast(f.error||ServerI18n.t("deleteFailed"),!1)}catch(c){console.error("Webhook delete error:",c),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var Rt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let g="sec-sounds",y=null,h=[],A=[];async function U(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let i=await l.json();h=i.sounds||[],A=i.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",h.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),h=[],A=[]}}async function F(){return U()}async function C(l,i){let t=new FormData;t.append("file",l),t.append("name",i);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),r=await d.json();if(!d.ok)throw new Error(r.error||"Upload failed");return r}async function p(l){let i=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),t=await i.json();if(!i.ok)throw new Error(t.error||"Delete failed");return t}async function M(l){let i=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),t=await i.json();if(!i.ok)throw new Error(t.error||"Failed to add rule");return t}async function D(l){let i=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),t=await i.json();if(!i.ok)throw new Error(t.error||"Failed to delete rule");return t}function x(){let l=document.getElementById("soundsList");if(l){if(h.length===0){l.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});i.dataset.emptyKind="sounds",i.style.gridColumn="1 / -1",l.appendChild(i);return}l.innerHTML=h.map(function(d){var r=b(d.name),m=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+b(d.name)+'"><div class="name" title="'+r+'">'+r+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+b(d.name)+'" min="0" max="100" step="1" value="'+m+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+b(d.name)+'" style="min-width:32px;text-align:right">'+m+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+b(d.name)+'">'+b(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+b(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var r=d.dataset.name,m=h.find(function(o){return o.name===r});m&&(y&&(y.pause(),y=null),y=new Audio(m.url),y.volume=.5,y.play().catch(function(o){console.warn("Audio preview failed:",o)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var r=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await p(r),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",r),!0),await U(),x(),N()}catch(o){window.showToast(o.message,!1)}})});var t={};l.querySelectorAll(".sound-volume-slider").forEach(function(d){var r=d.dataset.name,m=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(r)+'"]');d.addEventListener("input",function(){m&&(m.textContent=d.value+"%"),clearTimeout(t[r]),t[r]=setTimeout(function(){T(r,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(t[r]),T(r,Number(d.value)/100)})})}}async function T(l,i){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:i})}),d=await t.json();if(!t.ok){window.showToast(d.error||"Volume update failed",!1);return}var r=h.find(function(m){return m.name===l});r&&(r.volume=i),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(i*100)}),!0)}catch(m){console.warn("[admin-sounds] volume save failed:",m),window.showToast("Network error",!1)}}function N(){let l=document.getElementById("ruleSoundName");if(!l)return;let i=l.value;if(l.innerHTML="",h.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,l.appendChild(t);return}h.forEach(t=>{let d=document.createElement("option");d.value=t.name,d.textContent=t.name,l.appendChild(d)}),i&&[...l.options].some(t=>t.value===i)&&(l.value=i)}function $(){let l=document.getElementById("rulesList");if(l){if(A.length===0){l.innerHTML="";var i=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});i.dataset.emptyKind="sound-rules",l.appendChild(i);return}l.innerHTML=A.map(function(t){var d=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),r=Math.round((t.volume!=null?t.volume:1)*100),m=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",r).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+b(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+b(d)+'</div><div class="admin-sounds-rule-detail">'+b(m)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+b(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await D(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await F(),$()}catch(d){window.showToast(d.message,!1)}})})}}function E(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let i=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),d=i.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let r=t.value.trim();if(!r){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await C(d,r),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",r),!0),i.value="",t.value="",await U(),x(),N()}catch(m){window.showToast(m.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function B(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let i=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,r=document.getElementById("ruleVolume"),m=document.getElementById("ruleCooldown");if(i!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let o=parseInt(r.value,10)/100,a=parseInt(m.value,10)||0,c={trigger_type:i,trigger_value:i==="all"?"":t,sound_name:d,volume:Math.max(0,Math.min(1,o)),cooldown:Math.max(0,a)};l.disabled=!0;try{await M(c),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await F(),$()}catch(f){window.showToast(f.message,!1)}finally{l.disabled=!1}})}function O(){let l=document.getElementById("ruleTriggerType"),i=document.getElementById("ruleTriggerValue");if(!l||!i)return;function t(){l.value==="all"?(i.disabled=!0,i.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),i.value=""):l.value==="keyword"?(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(i.disabled=!1,i.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",t),t()}function _(){let l=document.getElementById("ruleVolume"),i=document.getElementById("ruleVolumeLabel");!l||!i||l.addEventListener("input",()=>{i.textContent=l.value+"%"})}function w(){return`
      <div id="${g}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function v(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",w()),window.AdminSkeletons){let i=document.getElementById("soundsList");i&&(i.innerHTML="",i.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([U(),F()]),x(),N(),$(),E(),B(),O(),_()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&!l&&(l=!0,v().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&(l=!0,v().finally(()=>{l=!1}))})})()});var Ot=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let g=/^[a-zA-Z0-9_]{1,32}$/,y=".png,.gif,.webp",h="sec-emojis",A=[];function U(){return`
      <div id="${h}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}function F(_){let w=":"+_.name+":",v=Number(_.used)||0,l=v>0?ServerI18n.t("emojisUsedCount",{n:v}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(_.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(_.url)+'" alt="'+M(w)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+b(w)+'</div><div class="admin-em-v4__tile-meta">'+b(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(w)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(_.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function C(_){let w=document.querySelector("[data-em-quota-label]"),v=document.querySelector("[data-em-quota-fill]");if(!w||!v)return;let l=_.length,i=100;w.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:i}),v.style.width=Math.min(100,l/i*100)+"%"}function p(_){let w=document.querySelector("[data-em-preview-body]");if(!w)return;if(!_||_.length===0){w.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=_.slice(0,3).map(i=>`<span class="admin-em-v4__preview-pair"><code>:${b(i.name)}:</code> \u2192 <img src="${M(i.url)}" alt=":${M(i.name)}:" /></span>`);w.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function M(_){return b(_)}function D(_){var w=document.getElementById("emojiGrid"),v=document.getElementById("emojiCount");w&&(!_||_.length===0?(window.AdminEmpty?(w.innerHTML="",w.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):w.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("noEmojisUploaded"))+"</div>",v&&(v.textContent="0")):(w.innerHTML=_.map(F).join(""),v&&(v.textContent=String(_.length))),C(A),p(A))}function x(){var _=document.getElementById("emojiGrid");if(_)if(window.AdminSkeletons){_.innerHTML="";for(var w=0;w<8;w++){var v=document.createElement("div");v.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var i=document.createElement("div");i.className="admin-skel",i.style.width="100%",i.style.height="100%",l.appendChild(i),v.appendChild(l);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",v.appendChild(t),_.appendChild(v)}}else _.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadingEmojis"))+"</div>"}async function T(){try{var _=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!_.ok)throw new Error("HTTP "+_.status);var w=await _.json();A=w.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",A.length||""),N()}catch(l){console.error("[admin-emojis] fetch failed:",l);var v=document.getElementById("emojiGrid");v&&(v.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var _=document.getElementById("emojiSearchInput"),w=(_&&_.value||"").trim().toLowerCase(),v=w?A.filter(function(l){return(l.name||"").toLowerCase().includes(w)}):A;D(v)}async function $(){var _=document.getElementById("emojiNameInput"),w=document.getElementById("emojiFileInput"),v=document.getElementById("emojiUploadBtn");if(!(!_||!w||!v)){var l=_.value.trim(),i=w.files&&w.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),_.focus();return}if(!g.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),_.focus();return}if(!i){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=i.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}v.disabled=!0,v.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",l),d.append("emojifile",i);var r=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),m=await r.json();r.ok?(showToast(m.message||ServerI18n.t("emojiUploadFallback")),_.value="",w.value="",await T()):showToast(m.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-emojis] upload error:",o),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{v.disabled=!1,v.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function E(_){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",_),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var v=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_})}),l=await v.json();v.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await T()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(i){console.error("[admin-emojis] delete error:",i),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function B(_){try{await navigator.clipboard.writeText(_),showToast(ServerI18n.t("copiedLabel").replace("{label}",_))}catch{var w=document.createElement("textarea");w.value=_,w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),showToast(ServerI18n.t("copiedLabel").replace("{label}",_))}}function O(){var _=document.getElementById("settings-grid");if(_){_.insertAdjacentHTML("beforeend",U());var w=document.getElementById("emojiUploadBtn");w&&w.addEventListener("click",$);var v=document.getElementById("emojiNameInput");v&&v.addEventListener("keydown",function(r){r.key==="Enter"&&(r.preventDefault(),$())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",N);var i=document.getElementById("emojiGrid");i&&i.addEventListener("click",function(r){var m=r.target.closest(".emoji-copy-btn");if(m){B(m.dataset.label);return}var o=r.target.closest(".emoji-delete-btn");o&&E(o.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");t&&d&&(["dragenter","dragover"].forEach(function(r){t.addEventListener(r,function(m){m.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(r){t.addEventListener(r,function(m){m.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(r){var m=r.dataTransfer&&r.dataTransfer.files&&r.dataTransfer.files[0];if(m){var o=new DataTransfer;o.items.add(m),d.files=o.files;var a=document.getElementById("emojiNameInput");if(a&&!a.value){var c=m.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");a.value=c.slice(0,32),a.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),x(),T()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var _=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&O()});_.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&O()}})})()});var qt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml,g="sec-stickers",y=["png","gif","webp"],h=".gif,.png,.webp",A="__all__",U=[],F=[],C=A;function p(l){return b(l)}function M(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,i=l?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${h}"
                class="admin-ui-input"
              />
            </label>
            <button id="stickerUploadBtn" type="button" class="admin-ui-action is-primary admin-sticker-action">${ServerI18n.t("stickersUploadBtn")}</button>
          </div>`:"";return`
      <div id="${g}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${l?`<div class="admin-ui-card">${i}</div>`:""}

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
    `}function D(l){return l===A?U.length:U.filter(function(i){return i.pack_id===l}).length}function x(){var l=document.getElementById("stickerPackList");if(l){var i='<button type="button" class="admin-stickers-pack'+(C===A?" is-active":"")+'" data-pack="'+A+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(A)+"</span></button>";F.forEach(function(t){var d=t.enabled?"is-success":"is-muted",r="admin-stickers-pack"+(t.id===C?" is-active":""),m=t.id==="default",o=m?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+p(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+p(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";i+='<div class="'+r+'" data-pack="'+p(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+p(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+b(t.name)+'</span><span class="admin-stickers-pack-count">'+D(t.id)+"</span></button>"+o+"</div>"}),l.innerHTML=i}}function T(l){var i=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+p(l.url)+'" alt="'+p(i)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+p(i)+'">'+b(i)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+p(i)+'" title="'+p(ServerI18n.t("copyToClipboard"))+'">'+b(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+p(l.name)+'" title="'+p(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var l=document.getElementById("stickerGrid"),i=document.getElementById("stickerCount");if(l){var t=document.getElementById("stickerSearchInput"),d=(t&&t.value||"").trim().toLowerCase(),r=U.filter(function(o){return!(C!==A&&o.pack_id!==C||d&&!(o.name||"").toLowerCase().includes(d))});if(r.length===0){l.innerHTML="";var m=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});m.dataset.emptyKind="stickers",m.style.gridColumn="1 / -1",l.appendChild(m),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=r.map(T).join(""),i&&(i.textContent=ServerI18n.t("stickersItemCount",{n:r.length}))}}async function $(){var l=document.getElementById("stickerGrid");if(l)try{var[i,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!i.ok)throw new Error("HTTP "+i.status);U=(await i.json()).stickers||[],F=t.ok?(await t.json()).packs||[]:[],C!==A&&!F.some(function(d){return d.id===C})&&(C=A),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",F.length?ServerI18n.t("tabCountPacks",{n:F.length}):""),x(),N()}catch(d){console.error("[admin-stickers] fetch failed:",d),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function E(l,i){if(l==="select"){C=i,x(),N();return}if(l==="rename"){var t=F.find(function(S){return S.id===i}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!d)return;try{var r=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),m=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await $()):window.showToast(m.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i)+"/toggle",{method:"POST"});o.ok&&await $()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i),{method:"DELETE"}),c=await a.json();a.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),C===i&&(C=A),await $()):window.showToast(c.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var f=F.slice().sort(function(S,k){return(S.order||0)-(k.order||0)}),e=f.findIndex(function(S){return S.id===i});if(e<0)return;var n=l==="up"?e-1:e+1;if(n<0||n>=f.length)return;var s=f[e],u=f[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(s.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:s.order||0})})]),await $()}catch{}}}async function B(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var i=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),t=await i.json();i.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),C=t.pack&&t.pack.id?t.pack.id:C,await $()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function O(){var l=document.getElementById("stickerFileInput"),i=document.getElementById("stickerUploadBtn");if(!(!l||!i)){var t=l.files&&l.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=t.name.split(".").pop().toLowerCase();if(y.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}i.disabled=!0;var r=i.textContent;i.textContent=ServerI18n.t("uploadingStatus");try{var m=new FormData;m.append("file",t),C&&C!==A&&m.append("pack_id",C);var o=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:m}),a=await o.json();o.ok?(window.showToast(a.message||ServerI18n.t("stickerUploadFallback")),l.value="",await $()):window.showToast(a.error||ServerI18n.t("uploadFailed"),!1)}catch(c){console.error("[admin-stickers] upload error:",c),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{i.disabled=!1,i.textContent=r}}}async function _(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await $()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-stickers] delete error:",r),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function w(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var i=document.createElement("textarea");i.value=l,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function v(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",M());var i=document.getElementById("stickerUploadBtn");i&&i.addEventListener("click",O);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",B);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",N);var r=document.getElementById("stickerPackList");r&&r.addEventListener("click",function(o){var a=o.target.closest("[data-pack-action]");if(!a){var c=o.target.closest("[data-pack]");c&&E("select",c.dataset.pack);return}var f=a.dataset.packAction,e=a.dataset.packId;f==="select"&&!e&&(e=a.closest("[data-pack]")&&a.closest("[data-pack]").dataset.pack),E(f,e)});var m=document.getElementById("stickerGrid");m&&m.addEventListener("click",function(o){var a=o.target.closest(".sticker-copy-btn");if(a){w(a.dataset.label);return}var c=o.target.closest(".sticker-delete-btn");c&&_(c.dataset.name)}),$()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&v()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&v()}})})()});var Ht=ge(()=>{(function(){"use strict";let b="sec-extensions-overview",g=window.AdminUtils.escapeHtml,y=15e3,h=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],A={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},U=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function F(w){let v=w&&!w.stale?w.report:null;if(!v&&w&&w.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!v)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(v.state==="error"){let l=U.includes(v.error)?v.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:v.sent||0,held:v.held||0,blocked:v.blocked||0,skipped:v.late_skipped||0})}}function C(){return`
      <div id="${b}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${h.map(p).join("")}
        </div>
      </div>`}function p(w){let v=w.status==="ready",l="is-cold",i=v?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,t=v&&w.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${w.install.steps.map(r=>{if(r.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${g(ServerI18n.t(r.labelKey))} \u2193</a></li>`;let m=r.showOrigin?` <code class="admin-ext-step-code">${g(window.location.origin)}</code>`:"";return`<li>${g(ServerI18n.t(r.labelKey))}${m}</li>`}).join("")}
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
            <div class="name">${g(w.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${g(w.version)}</span></div>
          </div>
          ${i}
        </div>
        <p class="admin-ext-desc">${g(ServerI18n.t(w.descKey))}</p>
        ${w.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${g(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${t}
        ${d}
      </article>`}async function M(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;A.fireToken=await w.json(),E()}catch{}}async function D(){try{let w=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();A.sources=Array.isArray(v.sources)?v.sources:[],B()}catch{}}async function x(){try{let w=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!w.ok)return;A.slidoStatus=await w.json(),O()}catch{}}function T(){D(),x()}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);let l=await v.json();A.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},A.plainToken=l.token,E(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(v){console.warn("[ext] regen failed:",v),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function $(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);A.fireToken=await v.json(),A.plainToken=null,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(v){console.warn("[ext] revoke failed:",v),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function E(){let w=document.querySelector("[data-fire-token-display]"),v=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),i=document.querySelector('[data-fire-token-action="revoke"]');if(!w)return;let t=A.fireToken;A.plainToken?(w.textContent=A.plainToken,w.classList.add("is-plain")):t&&t.has_token?(w.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:t.prefix||""}),w.classList.remove("is-plain")):(w.textContent=ServerI18n.t("extTokenNotSetHint"),w.classList.remove("is-plain")),v&&(v.disabled=!A.plainToken),l&&(l.textContent=t&&t.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),i&&(i.disabled=!(t&&t.has_token))}function B(){let w=new Set(A.sources.map(v=>v.source));document.querySelectorAll(".admin-ext-card").forEach(v=>{let l=h.find(d=>d.id===v.dataset.ext);if(!l)return;let i=v.querySelector("[data-ext-dot]");if(!i)return;let t=l.sourceMatch&&w.has(l.sourceMatch);i.classList.toggle("is-live",!!t),i.classList.toggle("is-cold",!t)})}function O(){let w=document.querySelector("[data-slido-status]");if(!w)return;let v=F(A.slidoStatus);w.textContent=v.text,w.classList.toggle("is-live",v.tone==="is-live"),w.classList.toggle("is-error",v.tone==="is-error");let l=A.slidoStatus&&A.slidoStatus.extension,i=w.closest(".admin-ext-card"),t=i&&i.querySelector("[data-ext-download-step]"),d=i&&i.querySelector("[data-ext-download]"),r=i&&i.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(d&&d.setAttribute("href",l.download_url),t&&(t.hidden=!1),r&&(r.textContent="v"+l.version)):t&&(t.hidden=!0)}function _(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(b))return;w.insertAdjacentHTML("beforeend",C());let v=document.getElementById(b);v&&v.addEventListener("click",l=>{let i=l.target.closest("[data-fire-token-action]");if(!i)return;let t=i.dataset.fireTokenAction;t==="regen"?N():t==="revoke"?$():t==="copy"&&A.plainToken&&window.AdminUtils.copyText(A.plainToken,ServerI18n.t("firetokenToastCopied"))}),M(),A.stopPoll||(A.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(b)},intervalMs:y,tick:T}))}window.AdminExtensions={slidoStatusView:F},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&_()})})()});var jt=ge(()=>{(function(){"use strict";let b="sec-firetoken-overview",g=window.AdminUtils.escapeHtml,y=15e3,h={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function A(){return`
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
    `}async function U(){await Promise.all([F(),C(),p()])}async function F(){try{let w=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!w.ok)return;h.token=await w.json(),N()}catch{}}async function C(){try{let w=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();h.usage24h=Array.isArray(v.usage_24h)?v.usage_24h:[],h.ips=Array.isArray(v.ips)?v.ips:[],E(),B(),$()}catch{}}async function p(){try{let w=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!w.ok)return;let v=await w.json();h.audit=Array.isArray(v.events)?v.events:[],O()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);let l=await v.json();h.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},h.plainToken=l.token,N(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let v=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);h.token=await v.json(),h.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),p()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function x(w){if(!w)return"\u2014";let v=Date.now()/1e3-w;return v<60?ServerI18n.t("firetokenJustNow"):v<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(v/60)}):v<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(v/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(v/86400)})}function T(w){if(!w)return"\u2014";try{return new Date(w*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let w=h.token,v=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),i=document.querySelector('[data-ft-action="copy"]'),t=document.querySelector('[data-ft-action="regen"]'),d=document.querySelector('[data-ft-action="revoke"]'),r=document.querySelector('[data-ft-stat="created"]'),m=document.querySelector('[data-ft-stat="rotated"]'),o=document.getElementById("adminFtCurl");if(v&&(h.plainToken?(v.textContent=h.plainToken,v.classList.add("is-plain")):w&&w.has_token?(v.textContent=(w.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",v.classList.remove("is-plain")):(v.textContent=ServerI18n.t("firetokenNotSetHint"),v.classList.remove("is-plain")),l&&(w&&w.enabled&&w.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):w&&w.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),i&&(i.disabled=!h.plainToken),d&&(d.disabled=!(w&&w.has_token)),t&&(t.textContent=w&&w.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),r&&(r.textContent=w?T(w.created_at):"\u2014"),m&&(m.textContent=w?x(w.rotated_at):"\u2014"),o)){let a=h.plainToken?h.plainToken:w&&w.prefix?w.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";o.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${a}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function $(){let w=h.usage24h.map(r=>Number(r)||0),v=w.reduce((r,m)=>r+m,0),l=w.length?Math.max(...w):0,i=document.querySelector('[data-ft-stat="hits"]'),t=document.querySelector('[data-ft-stat="peak"]'),d=document.querySelector("[data-ft-peak-meta]");i&&(i.textContent=v.toLocaleString()),t&&(t.textContent=l.toLocaleString()),d&&(d.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function E(){let w=document.getElementById("adminFtChart24h");if(!w)return;let v=h.usage24h.map(d=>Number(d)||0);if(!v.length){w.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...v),i=12e3,t=l>0?Math.min(100,i/Math.max(l,i)*100):100;w.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${v.map((d,r)=>{let m=l>0?Math.max(2,d/l*100):2;return`<div class="bar ${l>0&&d===l?"is-peak":""}" style="height:${m}%" title="${r.toString().padStart(2,"0")}:00 \u2014 ${d}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(d=>`<span>${String(d).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function B(){let w=document.getElementById("adminFtIps"),v=document.querySelector("[data-ft-ip-count]");if(!w)return;let l=h.ips||[];if(v&&(v.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let i=l[0]?.ip;w.innerHTML=l.map((t,d)=>{let r=d===0,m=t.source==="web"&&(t.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${r?"is-top":""}">
          <span class="ip">${g(t.ip||"?")}</span>
          ${r?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${m?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${g(t.source||"\u2014")}</span>
          <span class="cnt">${t.count||0} hits</span>
          <span class="when">${x(t.last_seen)}</span>
        </div>`}).join("")}function O(){let w=document.getElementById("adminFtAudit");if(!w)return;let v=h.audit||[];if(!v.length){w.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},i={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};w.innerHTML=v.map(t=>{let d=i[t.kind]||"is-info",r=l[t.kind]||t.kind,m=t.meta||{},o=m.prefix?` \xB7 prefix=${g(m.prefix)}`:m.enabled!=null?` \xB7 enabled=${m.enabled}`:"";return`
        <div class="admin-ft-audit-row ${d}">
          <span class="ts">${T(t.ts)}</span>
          <span class="kind">${g(r)}</span>
          <span class="detail">${o}</span>
        </div>`}).join("")}function _(){let w=document.getElementById("settings-grid");if(!w||document.getElementById(b))return;w.insertAdjacentHTML("beforeend",A());let v=document.getElementById(b);v&&v.addEventListener("click",l=>{let i=l.target.closest("[data-ft-action]");if(!i)return;let t=i.dataset.ftAction;t==="regen"?M():t==="revoke"?D():t==="copy"&&h.plainToken&&window.AdminUtils.copyText(h.plainToken,ServerI18n.t("firetokenToastCopied"))}),h.stopPoll||(h.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(b),intervalMs:y,tick:U}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&_()})})()});var Ut=ge(()=>{(function(){"use strict";let b="sec-about-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(_){return String(_).replace(/[&<>"']/g,function(w){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[w]})},y="Danmu Fire",h="https://github.com/guan4tou2/danmu-desktop",A=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],U=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],F="danmu.about.lastUpdateCheck",C={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function p(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${g(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${h}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${A.slice(0,4).map(_=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${g(_.v)}</span>
                  ${_.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${g(_.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${_.notes.slice(0,3).map(w=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${g(w.t)}">${g(w.t.toUpperCase())}</span>
                      <span class="msg">${g(w.l)}</span>
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
              ${U.slice(0,6).map(_=>`
                <div class="admin-about-oss-row">
                  <span class="n">${g(_.n)}</span>
                  <span class="v">${g(_.v)}</span>
                  <span class="l">${g(_.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M(_){if(!_||_<0)return"\u2014";let w=Math.floor(_/86400),v=Math.floor(_%86400/3600),l=Math.floor(_%3600/60);return w>0?`${w}d ${v}h`:v>0?`${v}h ${l}m`:`${l}m`}function D(){let _=document.querySelector("[data-about-tag]"),w=document.querySelector("[data-about-build]"),v=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),i=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if(_&&(_.textContent=`v${C.appVersion}`),w){let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";w.textContent=`BUILD \xB7 ${r} \xB7 stable channel`,t&&(t.textContent=r)}if(v){let r=C.serverStartedAt?C.serverTime-C.serverStartedAt:0;v.textContent=M(r)}if(l&&(C.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):C.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:C.latestVersion||""}):l.textContent="\u2014",l.style.color=C.isLatest===!0?"var(--hud-lime)":C.isLatest===!1?"var(--hud-amber)":""),i&&(i.textContent=C.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:x(C.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let r=window.DANMU_CONFIG||{};d.textContent=r.wsPath||"/ws"}}function x(_){let w=Number(_)||0;if(!w)return"\u2014";let v=String(w).length>12?w:w*1e3,l=(Date.now()-v)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function T(_,w){let v=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(r){return parseInt(r,10)||0}),l=v(_),i=v(w),t=Math.max(l.length,i.length);for(let d=0;d<t;d++){let r=l[d]||0,m=i[d]||0;if(r>m)return!0;if(r<m)return!1}return!1}async function N({silent:_}={}){_||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let w=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!w.ok)throw new Error("HTTP "+w.status);let l=((await w.json()).tag_name||"").replace(/^v/i,"");C.latestVersion=l,C.lastCheckedAt=Date.now(),C.isLatest=!T(l,C.appVersion);try{localStorage.setItem(F,JSON.stringify({ts:C.lastCheckedAt,latest:l,isLatest:C.isLatest}))}catch{}D(),_||window.showToast&&window.showToast(C.isLatest?ServerI18n.t("aboutToastLatest",{v:C.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(w){_||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:w.message||""}),!1)}}function $(){try{let _=localStorage.getItem(F);if(!_)return;let w=JSON.parse(_);C.latestVersion=w.latest,C.lastCheckedAt=Number(w.ts)||0,C.isLatest=!!w.isLatest}catch{}}async function E(){try{let _=await fetch("/admin/metrics",{credentials:"same-origin"});if(!_.ok)return;let w=await _.json();C.serverStartedAt=Number(w.server_started_at)||0,C.serverTime=Number(w.server_time)||Date.now()/1e3,D()}catch{}}function B(){let _=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",w=C.serverStartedAt?C.serverTime-C.serverStartedAt:0,v=(navigator.userAgent||"").slice(0,200),l=[`${y} v${C.appVersion}`,`Channel: ${_}`,`Uptime: ${M(w)}`,`User-Agent: ${v}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function O(){let _=document.getElementById("settings-grid");if(!_||document.getElementById(b))return;_.insertAdjacentHTML("beforeend",p()),C.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",$(),D();let w=document.getElementById(b);w&&w.addEventListener("click",function(v){let l=v.target.closest("[data-about-action]");if(!l)return;let i=l.dataset.aboutAction;i==="copy"?B():i==="check-update"?N({silent:!1}):i==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():i==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),E(),setInterval(E,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&O()})})()});var Kt=ge(()=>{(function(){"use strict";let b="admin-setup-wizard-root",g="danmu.setupWizard.completed",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},h=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],A=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function U(a){return a?a.label?a.label:a.labelKey?ServerI18n.t(a.labelKey):a.name||a.id||"\u2014":"\u2014"}function F(a){return a?a.descriptionKey?ServerI18n.t(a.descriptionKey):a.description||"":""}let C={open:!1,step:0,themes:A.slice(),activeTheme:A[0].name,selectedTheme:A[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function p(){C.publicUrl=window.location.origin+"/"}function M(){let a=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";a==="setup"&&!C.open?D():a!=="setup"&&C.open&&x({silent:!0})}function D(){C.open=!0,C.step=0,p(),document.body.dataset.setupWizardOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",T()),l()),t(),E(),N()}function x(a){let c=a&&a.silent;C.open=!1,document.body.dataset.setupWizardOpen="";let f=document.getElementById(b);if(f&&f.remove(),!c&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function T(){return`
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
            ${h.map(function(a,c){return`
                <div class="admin-setup-step" data-step-index="${c}">
                  <span class="bullet">${c+1}</span>
                  <span class="lbl">${y(ServerI18n.t(a.labelKey))}</span>
                </div>
                ${c<h.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:h.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function N(){let a=document.getElementById(b);if(!a)return;a.querySelectorAll(".admin-setup-step").forEach(function(S,k){S.classList.toggle("is-done",k<C.step),S.classList.toggle("is-active",k===C.step)}),a.querySelectorAll(".admin-setup-step-sep").forEach(function(S,k){S.classList.toggle("is-done",k<C.step)});let c=a.querySelector("[data-setup-meta]");c&&(c.textContent=ServerI18n.t("setupWizardStepMeta",{current:C.step+1,total:h.length}));let f=a.querySelector('[data-setup-action="prev"]');f&&(f.disabled=C.step===0);let e=a.querySelector('[data-setup-action="next"]');if(e){let S=h[C.step].id;e.textContent=ServerI18n.t("setupWizardNext")}let n=a.querySelector("[data-setup-foot]");n&&(n.hidden=h[C.step].id==="done");let s=a.querySelector("[data-setup-content]");if(!s)return;let u=h[C.step].id;u==="server"?s.innerHTML=$():u==="moderation"?s.innerHTML=B():u==="theme"?s.innerHTML=w():s.innerHTML=v(),i(u)}function $(){let a=C.readiness,c=a?Number(a.overlay_count)||0:null,f=c!==null&&c>0,n=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:C.publicUrl},{ok:f,unknown:c===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:f?ServerI18n.t("setupWizardReadyDisplayOk",{n:c}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(C.activeTheme||C.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:U(C.themes.filter(function(s){return(s.name||s.id)===(C.selectedTheme||C.activeTheme)})[0]||C.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(s){let u=s.unknown?"is-unknown":s.ok?"is-done":"is-pending",S=s.unknown?"?":s.ok?"\u2713":"!",k='<span class="admin-setup-ready-title">'+y(s.title)+'</span><span class="admin-setup-ready-value">'+y(s.value||"")+"</span>",I=s.goto?'<a class="admin-setup-ready-go" href="'+s.goto+'" data-setup-goto="'+s.goto+'">'+y(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+u+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+S+"</span>"+k+I+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${y(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${y(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${n}</div>
      </div>`}async function E(){try{let a=await fetch("/overlay_status",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);let c=await a.json();C.readiness={overlay_count:Number(c.overlay_count)||0,mode:c.mode||""}}catch{C.readiness=null}C.open&&h[C.step].id==="server"&&N()}function B(){let a=C.moderationRules.map(function(c){return`
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
        <div class="admin-setup-mod-list">${a}</div>
      </div>`}let O=["default","neon","retro","cinema"];function _(){let a={};return(C.themes||[]).forEach(function(c){a[c.name||c.id]=c}),O.map(function(c){let f=A.filter(function(n){return n.name===c})[0],e=a[c];return f?{name:c,label:e&&e.label,labelKey:f.labelKey,descriptionKey:f.descriptionKey,colors:f.colors}:e}).filter(Boolean)}function w(){let a=_();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${a.map(function(c){let f=c.name||c.id||"",e=(C.selectedTheme||C.activeTheme)===f,n=(c.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${e?" is-selected":""}" data-setup-theme="${y(f)}">
                ${e?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${n.map(function(s,u){let S=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${y(s)};font-size:${10+u*2}px;text-shadow:0 0 6px ${y(s)}66;">${S[u]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${y(U(c))}</div>
                <div class="admin-setup-theme-sub">${y(F(c))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function v(){let a=(function(){for(let c=0;c<C.themes.length;c+=1){let f=C.themes[c];if((f.name||f.id)===(C.selectedTheme||C.activeTheme))return U(f)}return C.selectedTheme||C.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${y(C.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${y(a)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${y(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${y(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function l(){let a=document.getElementById(b);a&&a.addEventListener("click",function(c){if(c.target===a){x();return}let f=c.target.closest("[data-setup-action]");if(f){if(f.dataset.setupAction==="close"){x();return}if(f.dataset.setupAction==="prev"&&C.step>0){C.step-=1,N();return}f.dataset.setupAction==="next"&&r()}})}function i(a){let c=document.getElementById(b);if(c){if(a==="moderation"||a==="done"||a==="server"){if(c.querySelectorAll("[data-setup-goto]").forEach(function(f){f.addEventListener("click",function(){x();let e=f.dataset.setupGoto;e&&(window.location.hash=e)})}),a==="done"){let f=c.querySelector("[data-setup-complete-cta]");f&&f.addEventListener("click",m)}return}if(a==="theme"){c.querySelectorAll("[data-setup-theme]").forEach(function(f){f.addEventListener("click",function(){C.selectedTheme=f.dataset.setupTheme||C.selectedTheme,N()})});return}}}async function t(){try{let a=await fetch("/admin/themes",{credentials:"same-origin"});if(!a.ok)return;let c=await a.json(),f=Array.isArray(c.themes)?c.themes:[];if(!f.length)return;C.themes=f.map(function(e){return{name:e.name||e.id||"",label:e.label||e.display_name||e.name||"",description:e.description||"",colors:e.preview_colors||e.colors||e.palette||A[0].colors}}),C.activeTheme=c.active||C.themes[0]&&C.themes[0].name||C.activeTheme,C.selectedTheme||(C.selectedTheme=C.activeTheme),C.open&&h[C.step].id==="theme"&&N()}catch{}}async function d(){if(!C.selectedTheme||C.selectedTheme===C.activeTheme)return!0;try{let a=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C.selectedTheme})});if(!a.ok)throw new Error("HTTP "+a.status);return C.activeTheme=C.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function r(){if(!(h[C.step].id==="theme"&&!await d())){if(C.step<h.length-1){C.step+=1,N();return}m()}}function m(){try{localStorage.setItem(g,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),x()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){x()},isCompleted:function(){try{return!!localStorage.getItem(g)}catch{return!1}},__setCapabilityForTest:function(){}};function o(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&o()})})()});var Wt=ge(()=>{(function(){"use strict";let b="sec-poll-deepdive-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(B){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[B]})},y={poll:null,refreshTimer:0};function h(){return`
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
      </div>`}function A(E){if(E.innerHTML="",!window.AdminEmpty){E.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let B=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});B.classList.add("lg:col-span-2"),B.dataset.emptyKind="poll-deepdive",E.appendChild(B)}let U=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function F(E){return E?new Date(E*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function C(E){if(!E||E.length<2)return"";let B=Math.max.apply(null,E.map(function(l){return l.n}).concat([1])),O=100,_=32,w=O/(E.length-1),v=E.map(function(l,i){let t=(i*w).toFixed(2),d=(_-l.n/B*(_-2)-1).toFixed(2);return t+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+O+" "+_+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+v.join(" ")+'" /></svg>'}function p(E){let B=E.state||(E.active?"active":"ended"),O=E.question||"\u2014",_=Array.isArray(E.options)?E.options:[],w=function(f){return Number(f.votes!=null?f.votes:f.count)||0},v=_.reduce(function(f,e){return f+w(e)},0),l=B==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:F(E.ended_at)}),i=(function(){let f=Number(E.started_at)||0;if(!f)return"\u2014";let e=B==="active"?Date.now()/1e3:Number(E.ended_at)||f,n=Math.max(0,Math.floor(e-f));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,d=t>0?Math.round(v/t*100)+"%":"\u2014",r=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:v,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),m=(function(){let f=Array.isArray(E.questions)?E.questions:[],e=0;for(let n of f)e+=Number(n.duplicate_attempts)||0;return f.length||(e=Number(E.duplicate_attempts)||0),e})(),o=_.map(function(f,e){let n=w(f),s=v>0?n/v*100:0,u=U[e%U.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${g(f.label||f.text||f.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${n} \xB7 ${s.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${s.toFixed(2)}%;background:${u}"></div>
          </div>
        </div>`}).join(""),a=Array.isArray(E.vote_timeline)?E.vote_timeline:[],c=a.length>=2?C(a):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${g(O)}</div>
          <div class="admin-pdd-state">${g(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${v}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${g(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${g(i)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${m}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${_.length?o:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${c}</div>
        </article>
      </div>`}function M(){let E=document.querySelector("[data-pdd-grid]");if(E){if(!y.poll||!y.poll.poll_id){A(E);return}E.innerHTML=p(y.poll)}}async function D(){try{let E=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!E.ok)return;let B=await E.json();y.poll=B,M()}catch{}}function x(){if(!y.poll||!Array.isArray(y.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let E=[["option_label","votes","percentage"]],B=y.poll.options.reduce(function(l,i){return l+(Number(i.votes!=null?i.votes:i.count)||0)},0);y.poll.options.forEach(function(l,i){let t=Number(l.votes!=null?l.votes:l.count)||0,d=B>0?(t/B*100).toFixed(2):"0.00";E.push([l.label||"option_"+(i+1),t,d])});let O=E.map(function(l){return l.map(window.AdminUtils.csvCell).join(",")}).join(`
`),_=new Blob([O],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(_),v=document.createElement("a");v.href=w,v.download="poll-"+(y.poll.poll_id||"current")+".csv",document.body.appendChild(v),v.click(),document.body.removeChild(v),setTimeout(function(){URL.revokeObjectURL(w)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function T(){try{let E=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),y.refreshTimer||(y.refreshTimer=setInterval(D,5e3))):y.refreshTimer&&(clearInterval(y.refreshTimer),y.refreshTimer=0)}function $(){let E=document.getElementById("settings-grid");if(!E||document.getElementById(b))return;E.insertAdjacentHTML("beforeend",h());let B=document.getElementById(b);B&&B.addEventListener("click",function(O){let _=O.target.closest("[data-pdd-action]");_&&(_.dataset.pddAction==="export-csv"?x():_.dataset.pddAction==="push"&&T())}),D(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&$()})})()});var Gt=ge(()=>{(function(){"use strict";let b="admin-message-drawer-root",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},h={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},A=null;function U(d){let r=d.detail&&d.detail.entry;r&&(h.open||(A=document.activeElement),h.entry=r,F(),r.data&&r.data.fingerprint&&D(r.data.fingerprint),x(r))}function F(){h.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(b)||(document.body.insertAdjacentHTML("beforeend",T()),N()),$();let d=document.querySelector("#"+b+" .admin-msgd-v4__close")||document.querySelector("#"+b+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function C(){h.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(b);if(d&&d.remove(),A&&typeof A.focus=="function"&&document.contains(A))try{A.focus({preventScroll:!0})}catch{}A=null}function p(d){if(!h.open)return;if(d.key==="Escape"){C();return}let r=document.activeElement,m=r?(r.tagName||"").toLowerCase():"";if(!(r&&(r.isContentEditable||m==="input"||m==="textarea"||m==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){M(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){M(1),d.preventDefault();return}}}function M(d){if(!h.entry)return;let r=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(r=window.AdminLiveFeed.getEntries()),!r.length)return;let m=r.findIndex(function(c){return c.id===h.entry.id});if(m<0)return;let o=m+-d;if(o<0||o>=r.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let a=r[o];h.entry=a,h.fingerprintRecord=null,x(a),$(),a.data&&a.data.fingerprint&&D(a.data.fingerprint)}async function D(d){try{let r=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!r.ok)return;let m=await r.json(),a=(Array.isArray(m.records)?m.records:[]).find(function(c){return c.fingerprint===d});h.fingerprintRecord=a||null,$()}catch{}}function x(d){let r=d.data&&d.data.fingerprint;if(!r){h.sameFpEntries=[];return}let m=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(m=window.AdminLiveFeed.getEntries()),h.sameFpEntries=m.filter(function(o){return(o.data&&o.data.fingerprint||o.fingerprint||"")===r}).slice(0,8)}function T(){return`
      <div id="${b}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let d=document.getElementById(b);d&&d.addEventListener("click",function(r){let m=r.target.closest("[data-msgd-action]");if(!m)return;r.stopPropagation();let o=m.dataset.msgdAction;o==="close"?C():o==="ban-fp"?w():o==="ban-fp-quick"?_():o==="recall-msg"?l():o==="blacklist-kw"?i():o==="reply"?t():o==="prev"?M(-1):o==="next"&&M(1)})}function $(){let d=document.getElementById(b);if(!d)return;let r=d.querySelector("[data-msgd-body]");r&&(r.innerHTML=E())}function E(){let d=h.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let r=d.data||{},m=r.fingerprint||"\u2014",o=m==="\u2014"?"\u2014":m.slice(0,8),a=m==="\u2014"?"\u2014":m.slice(0,12),c=d.ts?B(d.ts):"\u2014",f=r.nickname||ServerI18n.t("msgDrawerAnonymous"),e=h.fingerprintRecord||{},n=Number(e.message_count)||0,s=Number(e.violation_count)||0,u=h.sameFpEntries||[],S=u.length?Math.round(u.reduce((I,L)=>I+((L.data||L).text||"").length,0)/u.length):(r.text||"").length,k=0;for(let I=0;I<m.length;I++)k=k*31+m.charCodeAt(I)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${y((f||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${y(f)}</div>
          <div class="admin-msgd-v4__fp">fp:${y(a)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${y(c)}</span>
      </div>

      <div class="admin-msgd-v4__body">${y(r.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${n||u.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${S}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${s>0?"warn":"good"}">${s}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${y(r.ip||"\u2014")}<br/>
          UA \xB7 ${y(r.user_agent||r.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${m==="\u2014"?"disabled":""}>${y(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${r.message_id?"":"disabled"}>${y(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function B(d){try{let r=new Date(d),m=String(r.getHours()).padStart(2,"0"),o=String(r.getMinutes()).padStart(2,"0"),a=String(r.getSeconds()).padStart(2,"0");return m+":"+o+":"+a}catch{return"\u2014"}}function O(d){let r;if(typeof d=="number")r=d*1e3;else if(typeof d=="string")r=new Date(d).getTime();else return"\u2014";if(!r)return"\u2014";let m=(Date.now()-r)/1e3;return m<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(m)}):m<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(m/60)}):m<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(m/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(m/86400)})}async function _(d,r,m){let o=h.entry&&h.entry.data&&h.entry.data.fingerprint;if(!o)return;let a=parseInt(r||0,10)||0,c=a>0?await window.AdminModeration.banFingerprint(o,a,d):await window.AdminModeration.callBlock("fingerprint",o,d);if(!c.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:c.error||""}),!1);return}let f=m||(a>0?ServerI18n.t("msgDrawerSecondsLabel",{n:a}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:o.slice(0,8),label:f}),!0),C()}async function w(){let d=h.entry&&h.entry.data||{},r=d.fingerprint||"\u2014";if(r==="\u2014")return;let m=r.slice(0,12),o=d.nickname||ServerI18n.t("msgDrawerAnonymous"),a=0;for(let k=0;k<r.length;k++)a=a*31+r.charCodeAt(k)&65535;a=a%360;let c=document.createElement("div");c.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${a})">${y((o||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${y(o)}</div>
          <div class="fp">fp:${y(m)}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let f=k=>{c.querySelectorAll(".admin-bancfm-dchip").forEach(I=>I.classList.remove("is-active")),k.classList.add("is-active")};if(c.addEventListener("click",k=>{let I=k.target.closest("[data-ban-duration]");I&&f(I)}),c.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let I=k.target.closest("[data-ban-duration]");I&&(k.preventDefault(),f(I))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:c,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(c.querySelector("[data-ban-reason]")||{}).value||"",s=c.querySelector(".admin-bancfm-dchip.is-active"),u=s&&parseInt(s.dataset.banDuration||"0",10)||0,S=s?s.textContent.trim():ServerI18n.t("msgDrawerPermanent");return _(n.trim(),u,S)}function v(){}async function l(){let d=h.entry,r=d&&d.data&&d.data.message_id;if(!r)return;if(!(await window.AdminModeration.recall(r)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),C()}async function i(){let d=h.entry&&h.entry.data&&h.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&C()}async function t(){let d=document.querySelector("[data-msgd-reply]"),r=d?d.value.trim():"";if(r)try{let m=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r})});if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(m){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:m.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:C},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",U),document.addEventListener("keydown",p))})})()});var zt=ge(()=>{(function(){"use strict";let b="danmu.notifications.read",g="danmu.notifications.archived",y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},h={items:[],refreshTimer:0};function A(o){try{let a=localStorage.getItem(o);if(!a)return new Set;let c=JSON.parse(a);return new Set(Array.isArray(c)?c:[])}catch{return new Set}}function U(o,a){try{localStorage.setItem(o,JSON.stringify(Array.from(a)))}catch{}}function F(o){let a=A(b);a.add(o),U(b,a)}async function C(){let o=[p().catch(function(){return[]}),M().catch(function(){return[]}),D().catch(function(){return[]}),x().catch(function(){return[]})],c=(await Promise.all(o)).flat();c.sort(function(f,e){return(e.ts||0)-(f.ts||0)}),h.items=c,B(),w()&&O()}async function p(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let a=await o.json();return(Array.isArray(a.events)?a.events:[]).map(function(f,e){let n=(Number(f.ts)||0)*1e3,s="tok-"+(f.ts||e)+"-"+(f.kind||"x"),u=f.kind||"?",S="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(u==="rotated")S="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(u==="revoked")S="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(u==="toggled"){let I=f.meta&&f.meta.enabled;S=I?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:I?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:s,sev:S,src:"Fire Token",ts:n,title:k,desc:ServerI18n.t("notifDescEventType",{kind:u})+(f.meta?" \xB7 "+JSON.stringify(f.meta):""),raw:f}})}async function M(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let a=await o.json();return(Array.isArray(a.events)?a.events:[]).map(function(f,e){let n=(Number(f.ts)||0)*1e3,s="flt-"+(f.ts||e)+"-"+(f.action||"x")+"-"+e,u=f.action||"match";return{id:s,sev:u==="drop"?"warn":"info",src:"Moderation",ts:n,title:ServerI18n.t("notifTitleFilterHit",{action:u}),desc:ServerI18n.t("notifDescFilterHit",{rule:f.rule_id||"?",text:(f.text_excerpt||"").slice(0,60)}),raw:f}})}async function D(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let a=await o.json();return(Array.isArray(a.events)?a.events:[]).map(function(f,e){let n=(Number(f.ts)||0)*1e3,s=String(f.kind||"?");return{id:"wh-"+(f.ts||e)+"-"+s+"-"+e,sev:s==="unregister"?"warn":"info",src:"Webhooks",ts:n,title:ServerI18n.t("notifTitleWebhookEvent",{kind:s}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:f.actor||"system"})+(f.meta?" \xB7 "+JSON.stringify(f.meta):""),raw:f}})}async function x(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let a=await o.json(),c=Array.isArray(a.events)?a.events:[],f=new Set(["auth","broadcast","system","session","sessions"]);return c.filter(function(e){return f.has(String(e.source||""))}).map(function(e,n){let s=(Number(e.ts)||0)*1e3,u=String(e.kind||"?");return{id:"sys-"+(e.ts||n)+"-"+(e.source||"x")+"-"+u+"-"+n,sev:u==="login_failed"?"warn":"info",src:"System",ts:s,title:ServerI18n.t("notifTitleSystemEvent",{kind:u}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let T="admin-notif-panel",N={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function $(o){let a=N[o];return a?ServerI18n.t(a.key):o}function E(){let o=A(b),a=A(g);return h.items.filter(c=>!o.has(c.id)&&!a.has(c.id))}function B(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let a=E().length;o.textContent=a>99?"99+":String(a),o.hidden=a===0}function O(){let o=document.getElementById(T);if(!o)return;let a=E().slice(0,20),c=a.length?a.map(f=>{let e=N[f.src];return'<li class="admin-notif__item" data-sev="'+y(f.sev)+'"><div class="admin-notif__text">'+y(f.title)+'</div><div class="admin-notif__meta">'+y($(f.src))+" \xB7 "+y(_(f.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+y(e.hash)+'" data-notif-id="'+y(f.id)+'">'+y(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+y(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+y(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+y(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+c+"</ul>"}function _(o){if(!o)return"\u2014";let a=(Date.now()-o)/1e3;return a<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(a)}):a<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(a/60)}):a<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(a/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(a/86400)})}function w(){let o=document.getElementById(T);return!!o&&!o.hidden}function v(){let o=document.getElementById(T);o&&(O(),o.hidden=!1,h.refreshTimer||(h.refreshTimer=setInterval(C,3e4)))}function l(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&v()}function i(){let o=document.getElementById(T);o&&(o.hidden=!0),h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function t(){w()?i():v()}function d(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let a=document.createElement("button");if(a.id="admin-notif-bell",a.type="button",a.className="admin-dash-search is-icon-only admin-notif-bell",a.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),a.title=ServerI18n.t("adminRouteTitle_notifications"),a.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(a,o.firstChild),!document.getElementById(T)){let c=document.createElement("div");c.id=T,c.className="admin-notif",c.setAttribute("role","dialog"),c.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),c.hidden=!0,document.body.appendChild(c)}B(),l()}function r(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),t();return}let a=o.target.closest("[data-notif-go]");if(a){F(a.dataset.notifId),i(),location.hash=a.dataset.notifGo,B();return}if(o.target.closest("[data-notif-readall]")){E().forEach(c=>F(c.id)),O(),B();return}w()&&!o.target.closest("#"+T)&&i()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&w()&&i()}),window.addEventListener("hashchange",l),l()}function m(){d(),C()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),r(),m()})})()});var Vt=ge(()=>{(function(){"use strict";let b="sec-audit-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},y={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},h={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function A(){return`
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
      </div>`}function U(t){if(!t)return"\u2014";try{let d=new Date(Number(t)*1e3),r=String(d.getHours()).padStart(2,"0"),m=String(d.getMinutes()).padStart(2,"0"),o=String(d.getSeconds()).padStart(2,"0");return`${r}:${m}:${o}`}catch{return"\u2014"}}function F(t){let d=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function C(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function p(t){return h.filterActor==="all"||String(t.actor||"").toLowerCase()===h.filterActor}function M(t){return h.filterSeverity==="all"||F(t)===h.filterSeverity}function D(){return h.events.filter(function(t){return p(t)&&M(t)})}function x(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||t.target||""}function T(t,d){let r=t!=null,m=d!=null;if(!r&&!m)return"";let o=r?g(JSON.stringify(t)):"",a=m?g(JSON.stringify(d)):"";return r?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${o}</span> \u2192 <span class="admin-audit-diff-a">${a}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${a}</span></span>`}function N(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{},r=[];t.detail&&r.push(`<span>${g(String(t.detail))}</span>`);let m=T(t.before,t.after);m&&r.push(m);let o=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(c){delete o[c]}),Object.keys(o).length&&r.push(`<code class="admin-ui-code admin-audit-meta-extra">${g(JSON.stringify(o))}</code>`),!r.length){let c=y[t.source]&&y[t.source].label||t.source||"system";r.push(`<span>${g(String(c))}</span>`)}return r.join(" ")}function $(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function E(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let d=D();if(!d.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=d.map(function(r){let m=F(r),o=C(m),a=String(r.actor||"system"),c=x(r);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${m}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${g(U(r.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${o};box-shadow:0 0 6px ${o}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${$(a)}">${g(a)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${g(String(r.action||r.kind||"\u2014"))}</span>
              ${c?`<span class="admin-ui-target admin-audit-target">\u2192 ${g(String(c))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(r)}</div>
          </div>
        </div>`}).join("")}function B(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let d=D().length,r=h.filterActor==="all"?ServerI18n.t("auditAllRoles"):h.filterActor,m=h.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):h.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:r,sev:m})}function O(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===h.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===h.filterSeverity)})}async function _(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let d=await t.json(),r=Array.isArray(d.events)?d.events.slice():[];r.sort(function(m,o){return Number(o.ts||0)-Number(m.ts||0)}),h.events=r,O(),E(),B()}catch{}}function w(){let t=D();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),r=URL.createObjectURL(d),m=document.createElement("a");m.href=r,m.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(m),m.click(),document.body.removeChild(m),setTimeout(function(){URL.revokeObjectURL(r)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function v(){let t=document.getElementById(b);t&&t.addEventListener("click",function(d){let r=d.target.closest("[data-audit-actor-filter]");if(r){h.filterActor=r.dataset.auditActorFilter||"all",O(),E(),B();return}let m=d.target.closest("[data-audit-severity-filter]");if(m){let o=m.dataset.auditSeverityFilter||"all";h.filterSeverity=h.filterSeverity===o?"all":o,O(),E(),B();return}if(d.target.closest("[data-audit-export]")){w();return}d.target.closest("[data-audit-refresh]")&&_()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(_(),h.refreshTimer||(h.refreshTimer=setInterval(_,3e4))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function i(){let t=document.getElementById("settings-grid");!t||document.getElementById(b)||(t.insertAdjacentHTML("beforeend",A()),v(),_(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&i()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&i()})})()});var Jt=ge(()=>{(function(){"use strict";let b="sec-audience-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},y=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],h=20,A={records:[],filter:"all",shown:h,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function U(n){if(!n)return y[0];let s=0;for(let u=0;u<n.length;u++)s=s*31+n.charCodeAt(u)>>>0;return y[s%y.length]}function F(n){if(!n)return"\u2014";let s=typeof n=="number"?n*1e3:new Date(n).getTime();if(!s)return"\u2014";let u=Math.max(0,(Date.now()-s)/1e3);return u<60?Math.floor(u)+"s":u<3600?Math.floor(u/60)+"m":u<86400?Math.floor(u/3600)+"h":Math.floor(u/86400)+"d"}function C(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function p(){return`
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
      </div>`}function M(){let n=A.search.trim().toLowerCase(),s=A.records.slice();return n&&(s=s.filter(function(u){return String(u.nickname||"").toLowerCase().indexOf(n)!==-1||String(u.hash||"").toLowerCase().indexOf(n)!==-1})),s.sort(function(u,S){return A.sort==="last_seen"?(Number(S.last_seen)||0)-(Number(u.last_seen)||0):(Number(S.msgs)||0)-(Number(u.msgs)||0)}),A.filter==="all"?s:A.filter==="flagged"?s.filter(function(u){return u.state==="flagged"||u.state==="blocked"}):A.filter==="extension"?s.filter(function(u){return u.fingerprint&&(u.fingerprint.indexOf("slido")===0||u.fingerprint.indexOf("ext_")===0)}):s}function D(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let s=A.records,u=s.length,S=s.filter(function(P){return P.state==="flagged"}).length,k=s.filter(function(P){return P.state==="blocked"}).length,I=s.reduce(function(P,j){return P+(Number(j.msgs)||0)},0),L=s.filter(function(P){let j=P.last_seen;if(!j)return!1;let R=typeof j=="number"?j*1e3:new Date(j).getTime();return(Date.now()-R)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${u}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${L}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${I}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function x(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let s=A.records.length,u=A.records.filter(function(S){return S.state==="flagged"||S.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:s})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:u})}</button>`}let T="__anon__";function N(n){let s=(n.nickname||"").trim();return!s||s==="\u533F\u540D"}function $(n){let s=n.hash||n.fingerprint||"";return s?s.length>9?s.slice(0,4)+"\u2026"+s.slice(-4):s:"\u2014"}function E(){let n=[],s=[];return M().forEach(function(u){N(u)?s.push(u):n.push(u)}),s.length&&n.push({_anonGroup:!0,_count:s.length,fingerprint:T,msgs:s.reduce(function(u,S){return u+(Number(S.msgs)||0)},0),blocked:s.reduce(function(u,S){return u+(Number(S.blocked)||0)},0),last_seen:Math.max.apply(null,s.map(function(u){return u.last_seen||0})),state:s.some(function(u){return u.state==="blocked"})?"blocked":"active"}),n}function B(){let n=document.querySelector("[data-aud-list]"),s=document.querySelector("[data-aud-summary]");if(!n)return;let u=E(),S=Math.min(u.length,A.shown);if(s&&(s.textContent=ServerI18n.t("audienceShownOfTotal",{n:S,total:u.length})),u.length===0){n.innerHTML="";let P=window.AdminEmpty.render("audience");P.dataset.emptyKind="audience",n.appendChild(P);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,I=u.slice(0,S).map(function(P){let j=P.fingerprint||"\u2014",R=P.state==="blocked",W=P._anonGroup?ServerI18n.t("audienceAnonymous"):(P.nickname||"").trim(),G=P._anonGroup?"?":W.slice(0,1),Z=U(j);return`
        <div class="admin-aud-row${A.selectedFp===j?" is-selected":""}" data-aud-row data-aud-fp="${g(j)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${Z}">${g(G)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${g(W)}</span>
            ${P._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:P._count})}</span>`:""}
            ${R&&!P._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${P._anonGroup?"\u2014":g($(P))}</span>
          <span class="col col-msgs">${Number(P.msgs)||0}</span>
          <span class="col col-blocked">${Number(P.blocked)||0}</span>
          <span class="col col-seen">${g(F(P.last_seen))}</span>
          <span class="col col-actions">
            ${P._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${g(j)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),L=u.length>S?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=k+I+L}function O(n){return n&&A.records.find(function(s){return s.fingerprint===n})||null}function _(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let s=[],u=Number(n.msgs)||0,S=n.fingerprint||"";n.state==="blocked"&&s.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&s.push(ServerI18n.t("audienceRuleFlagged")),u>=25?s.push(ServerI18n.t("audienceRuleMsgOver",{n:u})):u>=15&&s.push(ServerI18n.t("audienceRuleMsgNear",{n:u}));let k=A.records.filter(function(j){return j.ip&&n.ip&&j.ip===n.ip}).length;k>=3&&s.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(S.indexOf("slido")===0||S.indexOf("ext_")===0)&&s.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&s.push(ServerI18n.t("audienceRuleNoNick"));let I="normal",L="var(--hud-lime)",P="NORMAL";return n.state==="blocked"?(I="blocked",L="var(--hud-crimson)",P="BLOCKED"):n.state==="flagged"||u>=25?(I="high",L="var(--hud-crimson)",P="HIGH RISK"):(u>=15||k>=3)&&(I="mid",L="var(--hud-amber)",P="MID"),{level:I,color:L,label:P,rules:s}}async function w(n){A.detailLoading=!0;try{let s=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!s.ok){A.detailMessages=[];return}let u=await s.json(),S=Array.isArray(u.records)?u.records:[],k=Date.now()-300*1e3;A.detailMessages=S.filter(function(I){return(I.fingerprint||"")!==n?!1:(I.timestamp?new Date(I.timestamp).getTime():0)>=k}).slice(0,8)}catch{A.detailMessages=[]}finally{A.detailLoading=!1}}function v(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let s=A.selectedFp;if(!s){n.hidden=!0,n.innerHTML="";return}let u=O(s);if(!u){A.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let S=_(u);n.dataset.riskLevel=S.level;let k=U(s),I=!u.nickname||u.nickname==="\u533F\u540D",L=I?ServerI18n.t("audienceAnonymous"):u.nickname,P=I?"?":L.slice(0,1),j="fp:"+(s||"").slice(0,8),R=S.rules.length?S.rules.map(function(G){return"<li>"+g(G)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",W="";A.detailLoading?W='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":A.detailMessages.length===0?W='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":W=A.detailMessages.map(function(G){let Z=G.muted?"MASKED":G.banned?"BLOCKED":"SHOWN",de=G.muted?"var(--hud-amber)":G.banned?"var(--hud-crimson)":"var(--hud-lime)",ne=G.timestamp?new Date(G.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+g(ne)+'</span><span class="m">'+g(G.text||"")+'</span><span class="s" style="color:'+de+'">'+Z+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+C(S.level)+'">'+g(S.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+g(P)+'</span><div><div class="nick">'+g(L)+'</div><div class="fp">'+g(j)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+S.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:S.rules.length})+"</div><ul>"+R+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+W+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+g(s)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+g(s)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(u.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+g(s)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+g(s)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+g(s)+'" data-aud-flagged="'+(u.is_flagged?"true":"false")+'">'+(u.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+g(s)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(n){A.selectedFp=n,A.detailMessages=[],v(),w(n).then(v)}async function i(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let s=await n.json();A.records=Array.isArray(s.entries)?s.entries:[],A.serverStats=s&&s.stats||null,D(),x(),B(),A.selectedFp&&v()}catch{}}async function t(n,s,u){if(n)try{let S=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!s,note:u||""})});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(s?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),i()}catch(S){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:S.message||""}),!1)}}async function d(n,s){if(!n||n==="\u2014")return;let u=s??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(u!==null)try{let S=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:u})});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),i()}catch(S){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:S.message||""}),!1)}}async function r(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+g(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let u=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:u.message||""}),!1)}}async function m(n){if(!(!n||n==="\u2014"))try{let s=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"mask",priority:0,enabled:!0})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),i()}catch(s){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:s.message||""}),!1)}}async function o(n){if(!(!n||n==="\u2014"))try{let s=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);let u=await s.json(),k=(Array.isArray(u.rules)?u.rules:[]).filter(function(L){return L&&L.type==="fingerprint"&&L.pattern===n});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let I=0;for(let L of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:L.rule_id||L.id})}).catch(function(){return{ok:!1}})).ok&&(I+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:I,fp:n.slice(0,8)}),!0),i()}catch(s){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:s.message||""}),!1)}}async function a(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+g(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let u=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),i()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:u.message||""}),!1)}}function c(){let n=document.getElementById(b);n&&(n.addEventListener("input",function(s){let u=s.target.closest("[data-aud-search]");u&&(A.search=u.value||"",A.shown=h,B())}),n.addEventListener("change",function(s){let u=s.target.closest("[data-aud-sort]");u&&(A.sort=u.value,B())}),n.addEventListener("click",function(s){let u=s.target.closest("[data-aud-filter]");if(u){A.filter=u.dataset.audFilter,A.shown=h,x(),B();return}let S=s.target.closest("[data-aud-action='ban']");if(S){s.stopPropagation(),a(S.dataset.audFp);return}if(s.target.closest("[data-aud-action='refresh']")){i();return}if(s.target.closest("[data-aud-action='more']")){A.shown+=h,B();return}if(s.target.closest("[data-aud-action='close-detail']")){A.selectedFp=null,v();return}let P=s.target.closest("[data-aud-action='detail-ban']");if(P){a(P.dataset.audFp);return}let j=s.target.closest("[data-aud-action='detail-mask']");if(j){m(j.dataset.audFp);return}let R=s.target.closest("[data-aud-action='detail-safe']");if(R){o(R.dataset.audFp);return}let W=s.target.closest("[data-aud-action='flag']");if(W){s.stopPropagation(),t(W.dataset.audFp,W.dataset.audFlagged!=="true");return}let G=s.target.closest("[data-aud-action='kick']");if(G){s.stopPropagation(),d(G.dataset.audFp);return}let Z=s.target.closest("[data-aud-action='unkick']");if(Z){s.stopPropagation(),r(Z.dataset.audFp);return}let de=s.target.closest("[data-aud-row]");if(!(de&&de.dataset.audFp===T)&&de&&!s.target.closest("button")){l(de.dataset.audFp);return}}))}function f(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(i(),A.refreshTimer||(A.refreshTimer=setInterval(i,15e3))):A.refreshTimer&&(clearInterval(A.refreshTimer),A.refreshTimer=0)}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(b)||(n.insertAdjacentHTML("beforeend",p()),c(),i(),f(),window.addEventListener("hashchange",f))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&e()})})()});var Yt=ge(()=>{(function(){"use strict";let b=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],g={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},y=2500,h=0,A=0,U=null;function F(){if(U)return U;let x=document.createElement("div");return x.className="admin-konami-hud",x.setAttribute("aria-hidden","true"),x.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(x),U=x,x}function C(){if(h===0){U&&U.classList.remove("is-on");return}let x=F();x.classList.add("is-on");let T=x.querySelector(".admin-konami-hud-keys");T&&(T.innerHTML=b.map(($,E)=>`<span class="admin-konami-hud-key ${E<h?"is-filled":""}">${g[$]}</span>`).join(""));let N=x.querySelector(".admin-konami-hud-progress");if(N){let $=Math.round(h/b.length*100);N.style.width=$+"%"}}function p(x){h=0,A&&(clearTimeout(A),A=0),x||C()}function M(){A&&clearTimeout(A),A=setTimeout(()=>p(),y)}async function D(){try{let x=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(x){console.warn("[konami] trigger failed:",x&&x.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",x=>{let T=x.target;if(T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable))return;let N=b[h];if(!(x.key===N||N==="b"&&x.key.toLowerCase()==="b"||N==="a"&&x.key.toLowerCase()==="a")){h=x.key===b[0]?1:0,C(),h>0?M():A&&(clearTimeout(A),A=0);return}if(h++,C(),h>=b.length){p(!0),D();return}M()}),window.AdminKonami={trigger:D}})()});var Qt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function g(m){return m==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:m==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:m==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function y(){let m=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=m?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${m?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${b(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${o}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${m?`
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
    `}var h=null,A=[];function U(m,o){var a=document.getElementById("adminFontEmptyStateHost");if(!a)return;if((m||[]).some(e=>e.type==="uploaded")){a.innerHTML="";return}a.innerHTML="";var f=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:o?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});f.dataset.emptyKind="fonts",a.appendChild(f)}function F(m,o){let a=m.weight||"\u2014",c=m.sizeLabel||"\u2014",f=m.foundry||(m.type==="system"?"System":m.type==="default"?"Google / Noto":"Uploaded"),e=m.format||"\u2014",n=m.status||m.type,s=`font-family: "${b(m.name)}", sans-serif;`,u=g(n),S=[];if(o){if(n!=="default"&&S.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${b(m.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let k=n==="enabled"||n==="system",I=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");S.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${b(m.name)}" data-enabled="${k?"true":"false"}">${I}</button>`)}m.type==="uploaded"&&(S.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${b(m.name)}" title="${b(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),S.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${b(m.name)}">${b(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${b(m.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${s}" class="truncate">${b(m.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(S.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${S.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${b(f)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${b(a)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${b(c)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${b(e)}</span><div style="text-align:right">${u}</div></div>`}let C=null,p={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(C)return C;try{let m=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return m.ok?(C=(await m.json()).presets||{},C):{}}catch{return{}}}function D(m){return!m||!Number.isFinite(m)?"\u2014":m<1024?m+" B":m<1024*1024?(m/1024).toFixed(1)+" KB":(m/(1024*1024)).toFixed(2)+" MB"}async function x(m){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let o=await M();if(!Object.keys(o).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let a=new Set(["cjk_common","latin"]),c="",f=document.createElement("div");f.className="admin-font-subset-modal-body";let e=()=>{let u=Object.keys(o).map(k=>{let I=p[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},L=I.labelKey?ServerI18n.t(I.labelKey):I.label,P=a.has(k);return`
          <label class="admin-font-subset-chip${P?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${P?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${b(L)}</span>
            <span class="admin-font-subset-chip-range">${b(o[k])}</span>
            <span class="admin-font-subset-chip-meta">${I.glyphs} glyphs \xB7 ${I.estSize}</span>
          </label>`}).join("");f.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${b(m)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${u}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${b(c)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,f.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",I=>{I.preventDefault();let L=k.dataset.subsetPreset;a.has(L)?a.delete(L):a.add(L),e()})});let S=f.querySelector("[data-subset-custom]");S&&S.addEventListener("input",()=>{c=S.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:f,width:540}))return;let s=[];if(a.forEach(u=>{o[u]&&s.push(o[u])}),c.trim()&&s.push(c.trim()),!s.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await T(m,s.join(","))}async function T(m,o){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:m}),!0);let a=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(m)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:o})}),c=await a.json().catch(()=>({}));if(a.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!a.ok){window.showToast?.(c.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:a.status}),!1);return}let f=c.saved_bytes||0,e=Math.round((c.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:m,before:D(c.original_size),after:D(c.new_size),pct:e}),!0),E()}catch(a){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:a.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(m){try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:m})});if(!o.ok)throw new Error("HTTP "+o.status);h=m,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:m}),!0),E()}catch(o){console.error("[admin-fonts] set default failed:",o),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function $(m,o){try{let a=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(m)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!o})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast(ServerI18n.t(o?"fontsToggleOffToast":"fontsToggleOnToast",{name:m}),!0),E()}catch(a){console.error("[admin-fonts] toggle failed:",a),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function E(){var m=document.getElementById("adminFontList");if(!m)return;let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var a=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!a.ok)throw new Error("HTTP "+a.status);var c=await a.json(),f=c.fonts||[];if(A=f,window.AdminTabs?.setTabCount?.("assets","fonts",f.length||""),U(f,o),f.length===0){m.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,v(f);return}m.innerHTML=f.map(e=>F(e,o)).join(""),v(f),l()}catch(e){console.error("[admin-fonts] fetch failed:",e),m.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,U([],o)}}async function B(m){try{let o=await m.slice(0,4).arrayBuffer(),a=new Uint8Array(o);return a[0]===0&&a[1]===1&&a[2]===0&&a[3]===0?"TTF":a[0]===79&&a[1]===84&&a[2]===84&&a[3]===79?"OTF":a[0]===119&&a[1]===79&&a[2]===70&&a[3]===50?"WOFF2":a[0]===116&&a[1]===114&&a[2]===117&&a[3]===101?"TTF":a[0]===116&&a[1]===116&&a[2]===99&&a[3]===102?"TTC":null}catch{return null}}function O(m,o){let a=document.getElementById("adminFontDropStatus");if(a){if(!m){a.textContent="",a.hidden=!0,a.classList.remove("is-good","is-bad");return}a.hidden=!1,a.textContent=m,a.classList.toggle("is-good",o==="good"),a.classList.toggle("is-bad",o==="bad")}}function _(m){let o=document.getElementById("adminFontUploadError");if(!o)return;if(!m){o.hidden=!0,o.innerHTML="";return}o.hidden=!1,o.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${b(m)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let a=o.querySelector("[data-font-error-retry]");a&&a.addEventListener("click",function(){let c=document.getElementById("adminFontFileInput");c&&c.click()})}async function w(m){if(!m)return;_("");let o=m.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(o)){window.showToast(ServerI18n.t("invalidFileType"),!1),O(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),_(ServerI18n.t("fontsExtNotSupportedFull"));return}if(m.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),O(ServerI18n.t("fontsFileTooLarge"),"bad"),_(ServerI18n.t("fontsFileTooLargeFull"));return}let a=await B(m);if(!a){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),O(ServerI18n.t("fontsMagicInvalid"),"bad"),_(ServerI18n.t("fontsMagicValidationFailed"));return}O(ServerI18n.t("fontsUploadValidated",{magic:a,size:(m.size/1024).toFixed(1)}),"good");try{var c=new FormData;c.append("fontfile",m);var f=await window.csrfFetch("/admin/upload_font",{method:"POST",body:c}),e=await f.json();f.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),O(ServerI18n.t("fontsUploadedStatus",{filename:m.name}),"good"),_(""),await E()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),O(e.error||ServerI18n.t("uploadFailed"),"bad"),_(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),O(ServerI18n.t("fontsNetworkErrorShort"),"bad"),_(ServerI18n.t("fontsNetworkDisconnected"))}}function v(m){let o=document.getElementById("fontsTotalSize");o&&(o.textContent=ServerI18n.t("fontsTotalCount",{n:m.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(m=>{m.addEventListener("click",o=>{if(o.target.closest(".admin-font-delete-btn"))return;let a=m.dataset.font,c=document.getElementById("fontsPreviewFamily"),f=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");c&&(c.textContent=a);let s=`"${a}", sans-serif`;f&&(f.style.fontFamily=s),e&&(e.style.fontFamily=s),n&&(n.style.fontFamily=s)})})}async function i(){var m=document.getElementById("adminFontFileInput");if(m){var o=m.files&&m.files[0];if(!o){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await w(o),m.value=""}}function t(){let m=document.getElementById("adminFontDrop"),o=document.getElementById("adminFontFileInput");!m||!o||(m.addEventListener("click",a=>{a.target!==o&&o.click()}),m.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),o.click())}),["dragenter","dragover"].forEach(a=>{m.addEventListener(a,c=>{c.preventDefault(),c.stopPropagation(),m.classList.add("is-drag")})}),["dragleave","drop"].forEach(a=>{m.addEventListener(a,c=>{c.preventDefault(),c.stopPropagation(),m.classList.remove("is-drag")})}),m.addEventListener("drop",async a=>{let c=a.dataTransfer&&a.dataTransfer.files;c&&c[0]&&await w(c[0])}))}async function d(m){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",m),confirmLabel:ServerI18n.t("deleteBtn")}))try{var a=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(m),{method:"DELETE"}),c=await a.json();a.ok?(window.showToast(c.message||ServerI18n.t("fontDeleteFallback")),await E()):window.showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(f){console.error("[admin-fonts] delete error:",f),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function r(){var m=document.getElementById("settings-grid");if(m){m.insertAdjacentHTML("beforeend",y());var o=document.getElementById("adminFontFileInput");o&&o.addEventListener("change",i),t();var a=document.getElementById("adminFontList");a&&a.addEventListener("click",function(c){var f=c.target.closest(".admin-font-delete-btn");if(f){c.stopPropagation(),d(f.dataset.name);return}var e=c.target.closest(".admin-font-default-btn");if(e){c.stopPropagation(),N(e.dataset.name);return}var n=c.target.closest(".admin-font-toggle-btn");if(n){c.stopPropagation();let u=n.dataset.enabled==="true";$(n.dataset.name,u);return}var s=c.target.closest(".admin-font-subset-btn");s&&(c.stopPropagation(),x(s.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(c=>c.ok?c.json():null).then(c=>{c&&Array.isArray(c.FontFamily)&&(h=c.FontFamily[3]||null)}).catch(()=>{}).finally(E)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var m=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&r()});m.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&r()}})})()});var Xt=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;let g="sec-scheduler",y=5e3,h=null,A=null;function U(r,m,o,a){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${r}">
        <input type="text" placeholder="${p(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${p(m)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${p(o||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${a||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function F(r){var m=r==="active"?"is-success":r==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+m+'" title="'+p(r)+'"></span>'}function C(r){let m=r.state==="paused",o=r.repeat_count===void 0?"\u2014":r.repeat_count===-1?"\u221E":String(r.repeat_count),a=r.repeat_count>0&&typeof r.remaining=="number"?String(r.repeat_count-r.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${p(r.id)}">
        ${F(r.state)}
        <div>
          <div class="admin-scheduler-job-title">#${b(r.id)}</div>
          <div class="admin-scheduler-job-meta">${b(ServerI18n.t("schedulerMessages"))} ${r.messages?r.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${r.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${b(a)}</span>
        <span class="admin-scheduler-job-val">${b(o)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${m?"is-active":"is-warn"}"
            data-job-id="${p(r.id)}" data-action="${m?"resume":"pause"}">
            ${b(ServerI18n.t(m?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${p(r.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function p(r){return b(r)}function M(){let r=document.querySelectorAll("#schedulerMessages [data-msg-index]"),m=[];return r.forEach(function(o){let a=o.querySelector(".scheduler-msg-text").value.trim(),c=o.querySelector(".scheduler-msg-color").value,f=parseInt(o.querySelector(".scheduler-msg-size").value,10)||48;a&&m.push({text:a,color:c,size:f})}),m}function D(r,m,o){let a=document.getElementById("schedulerMessages");if(!a)return;let c=a.children.length;a.insertAdjacentHTML("beforeend",U(c,r||"",m||"#ffffff",o||48))}function x(r){let m=r.closest("[data-msg-index]");m&&m.remove();let o=document.getElementById("schedulerMessages");o&&o.querySelectorAll("[data-msg-index]").forEach(function(a,c){a.dataset.msgIndex=c})}async function T(){let r=M();if(r.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let m=parseInt(document.getElementById("schedulerInterval").value,10);if(!m||m<1||m>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let o=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(o)||o<-1||o>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let a=document.getElementById("schedulerCreateBtn");a&&(a.disabled=!0);try{let c=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:r,interval_sec:m,repeat_count:o})}),f=await c.json();c.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await v()):showToast(f.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(c){console.error("Scheduler create error:",c),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{a&&(a.disabled=!1)}}function N(r){return"msg"}function $(r){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[r]||"\u25C8"}function E(r){return r.next_run_at?new Date(r.next_run_at*1e3).getHours():new Date().getHours()}function B(r){if(r.next_run_at){let m=new Date(r.next_run_at*1e3);return String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0")}return"--:--"}function O(r){let m=r.id||"job",o=Array.isArray(r.messages)?r.messages.length:null;return"Job #"+m+(o!=null?" \xB7 "+o+" messages":"")}function _(r){let m=document.querySelector("[data-sch-timeline]");if(!m)return;let o=[],a=new Date().getHours();for(let f=0;f<24;f++){let e=f>=Math.max(0,a-1)&&f<=Math.min(23,a+2);o.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(f).padStart(2,"0")+"</div>")}let c=(r||[]).map(function(f){let e=N(f),n=$(e),s=f.state!=="paused";return'<div class="admin-sch-timeline-row'+(s?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+b(B(f))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+n+'</span><span class="admin-sch-evt-desc">'+b(O(f))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(s?" is-on":"")+'">'+ServerI18n.t(s?"uiOn":"uiOff")+"</span></div></div>"}).join("");m.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+o.join("")+"</div></div>"+(c||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+b(ServerI18n.t("noActiveJobs"))+"</div>"))}function w(r){let m=document.querySelector("[data-sch-calendar]");if(!m)return;let o=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],a=new Date,c=(a.getDay()+6)%7,f=new Date(a);f.setDate(a.getDate()-c);let e=o.map(function(s,u){let S=new Date(f);return S.setDate(f.getDate()+u),'<div class="admin-sch-calendar-day-head'+(u===c?" is-today":"")+'">'+b(s)+'<span class="date">'+S.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(s){return'<div class="admin-sch-calendar-cell">'+(s===c?(r||[]).slice(0,5).map(function(S){let k=N(S),I=$(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+b(B(S))+" "+I+"</span>"}).join(""):"")+"</div>"}).join("");m.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function v(){let r=document.getElementById("schedulerJobsList"),m=document.getElementById("schedulerJobsCount");if(r)try{let o=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!o.ok){r.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",m&&(m.textContent="\u2014");return}let a=await o.json();if(!Array.isArray(a.jobs)){r.innerHTML='<div class="admin-emojis-empty">'+b(ServerI18n.t("loadJobsFailed"))+"</div>",m&&(m.textContent="\u2014");return}m&&(m.textContent=ServerI18n.t("schItemCount",{n:a.jobs.length})),_(a.jobs),w(a.jobs);let c=document.querySelector("[data-sch-meta]");if(c){let f=new Date().toISOString().slice(0,10);c.textContent=ServerI18n.t("schTodayMeta",{date:f,n:a.jobs.length})}if(a.jobs.length===0){r.innerHTML="";let f=window.AdminEmpty.render("scheduler");f.dataset.emptyKind="scheduler",r.appendChild(f);return}r.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+b(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+b(ServerI18n.t("schColInterval"))+"</span><span>"+b(ServerI18n.t("schColSent"))+"</span><span>"+b(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+a.jobs.map(C).join("")}catch(o){console.error("Scheduler fetch error:",o),r.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+b(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(r,m){try{let o=await csrfFetch("/admin/scheduler/"+encodeURIComponent(m),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:r})}),a=await o.json();o.ok?(showToast(m==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await v()):showToast(a.error||ServerI18n.t("actionFailed"),!1)}catch(o){console.error("Scheduler toggle error:",o),showToast(ServerI18n.t("actionFailed"),!1)}}async function i(r){try{let m=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:r})}),o=await m.json();m.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await v()):showToast(o.error||ServerI18n.t("cancelFailed"),!1)}catch(m){console.error("Scheduler cancel error:",m),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let r=document.getElementById("settings-grid");if(!r)return;r.insertAdjacentHTML("beforeend",`
      <details id="${g}" class="admin-dsp2-fold lg:col-span-2">
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
    `);let m=document.querySelectorAll("[data-sch-view]");m.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.schView;m.forEach(S=>{S.classList.toggle("is-active",S===e),S.setAttribute("aria-selected",S===e?"true":"false")});let s=document.querySelector("[data-sch-timeline]"),u=document.querySelector("[data-sch-calendar]");s&&(s.hidden=n!=="timeline"),u&&(u.hidden=n!=="calendar")})}),D("","#ffffff",48);let o=document.getElementById("schedulerMessages");o&&o.addEventListener("click",function(e){let n=e.target.closest(".scheduler-remove-msg");n&&x(n)});let a=document.getElementById("schedulerAddMsg");a&&a.addEventListener("click",function(){D("","#ffffff",48)});let c=document.getElementById("schedulerCreateBtn");c&&c.addEventListener("click",T);let f=document.getElementById("schedulerJobsList");f&&f.addEventListener("click",function(e){let n=e.target.closest(".scheduler-job-toggle");if(n){l(n.dataset.jobId,n.dataset.action);return}let s=e.target.closest(".scheduler-job-cancel");s&&i(s.dataset.jobId)}),h&&(clearInterval(h),h=null),A||(A=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(g)},intervalMs:y,tick:v}),window.addEventListener("beforeunload",function(){A&&(A(),A=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let r=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(g)&&!r){r=!0;try{t()}finally{r=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Zt=ge(()=>{(function(){"use strict";let b="admin-security-v2-page";var g=window.AdminUtils.escapeHtml;let y=null,h=!1,A=!1,U=0;function F(){let e=n=>ServerI18n.t(n);return`
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
      </div>`}function C(e){if(!e)return 0;let n=0;e.length>=8&&n++,e.length>=12&&n++;let s=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return s>=2&&n++,s>=3&&n++,Math.min(4,n)}function p(e){let n=document.getElementById("sec2-pw-meter"),s=document.getElementById("sec2-pw-label");if(!n||!s)return;let u=C(e),S=[0,25,50,75,100],k=["","is-bad","is-warn","is-warn","is-good"],I=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=S[u]+"%",n.className=k[u],s.textContent=I[u]}async function M(e){e.preventDefault();let n=document.getElementById("sec2-pw-current").value,s=document.getElementById("sec2-pw-new").value,u=document.getElementById("sec2-pw-confirm").value;if(!n||!s||!u){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(s.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(s!==u){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let S=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:s,confirm_password:u})}),k=await S.json().catch(()=>({}));S.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),p(""),k.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(k.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(S){console.error("Password change error:",S),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let e=++U,n=document.getElementById("sec2-wsa-status");A=!0,x(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let s=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!s.ok)throw new Error(s.status);let u=await s.json();if(e!==U)return!1;y={require_token:!!u.require_token,token:u.token||""},document.getElementById("sec2-wsa-toggle").checked=!!u.require_token,document.getElementById("sec2-wsa-token").value=u.token||"",n.textContent=u.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(u.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,$();let S=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=S?new Date(parseInt(S,10)).toLocaleString():"\u2014",!0}catch{return e!==U||(y=null,x(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===U&&(A=!1,x(h||!y),h||$())}}function x(e){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function T(){return h||A||!y?!1:(h=!0,++U,x(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(h=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,x(A||!y),y&&!A){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(y.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(y.require_token?"is-active":""),$()}}function $(){if(h||A||!y)return;document.getElementById("sec2-wsa-disabled-warning").hidden=y.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==y.require_token||document.getElementById("sec2-wsa-token").value.trim()!==y.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function E(e){return String(e||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function B(e){return String(e||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function O(e,n){let s=document.getElementById(e);s&&(s.textContent=n==null||n===""?"\u2014":String(n))}async function _(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||e.status);let s=n.ip_allowlist||{},u=n.cors||{},S=n.tls||{},k=!!s.enabled,I=Array.isArray(s.entries)?s.entries:[],L=document.getElementById("sec2-ip-dot"),P=document.getElementById("sec2-ip-status-chip"),j=document.getElementById("sec2-ip-toggle"),R=document.getElementById("sec2-ip-entries");L&&(L.classList.toggle("is-lime",k),L.classList.toggle("is-amber",!k)),P&&(P.textContent=k?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),P.className="admin-ui-chip admin-sec-status-chip "+(k?"is-active":"is-warn")),j&&(j.checked=k),R&&(R.value=I.join(`
`)),O("sec2-ip-current",s.current_ip||"\u2014"),O("sec2-ip-status-line",k?ServerI18n.t("security2IpStatusEnabled",{n:I.length}):ServerI18n.t("security2IpStatusDisabled"));let W=Array.isArray(u.origins)?u.origins:["*"],G=Array.isArray(u.methods)?u.methods:[],Z=document.getElementById("sec2-cors-origins"),de=document.getElementById("sec2-cors-credentials"),ne=document.getElementById("sec2-cors-methods"),J=document.getElementById("sec2-cors-cred-dot");Z&&(Z.value=W.join(`
`)),de&&(de.checked=!!u.supports_credentials),ne&&(ne.value=G.join(", ")),J&&(J.classList.toggle("is-lime",!u.supports_credentials),J.classList.toggle("is-amber",!!u.supports_credentials)),O("sec2-cors-origins-line",W.join(", ")),O("sec2-cors-credentials-line",u.supports_credentials?"true":"false"),O("sec2-cors-methods-line",G.join(", "));let ee=S.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:S.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");O("sec2-hsts-status",ee)}catch(e){console.error("Security settings load error:",e);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function w(e){let n={};if(e==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:E(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let s=E(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:s.length?s:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:B(document.getElementById("sec2-cors-methods")?.value||"")}}try{let s=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),u=await s.json().catch(()=>({}));if(!s.ok){window.showToast&&showToast(u.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await _()}catch(s){console.error("Security settings save error:",s),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function v(){if(h||A||!y)return;let e=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(e&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(T())try{let s=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:n})}),u=await s.json().catch(()=>({}));s.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(u.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function l(){if(!(h||A||!y||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&T())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),s=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(s.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function i(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let n=e.type==="text",s=document.getElementById("sec2-wsa-reveal");s.setAttribute("aria-pressed",String(n)),s.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),s.setAttribute("aria-label",s.textContent)}async function d(e){if(e==="reset-ws"&&(h||A||!y))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:u=>ServerI18n.t("security2ToastApiTokensRevoked",{n:u.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!T()))try{let u=await window.csrfFetch(n.url,{method:"POST"}),S=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(S.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(n.ok(S),!0)}catch(u){console.error("Security danger action error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&N()}}function r(){let e=document.getElementById("sec2-session-self-line");if(e){let u=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),S=navigator.platform||navigator.userAgentData?.platform||"",k=u?u[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:k,platform:S})}let n=document.getElementById("sec2-tls-dot"),s=document.getElementById("sec2-tls-status");if(n&&s){let u=location.protocol==="https:";n.classList.add(u?"is-lime":"is-crimson"),s.textContent=u?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function m(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",M);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",s=>p(s.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",v),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",i),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",$),document.getElementById("sec2-wsa-token")?.addEventListener("input",$),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>w("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>w("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(s=>{s.addEventListener("click",()=>{let u=document.querySelector(`[data-sec-disclosure="${s.dataset.secDisclose}"]`);u&&(u.hidden=!u.hidden,s.setAttribute("aria-expanded",u.hidden?"false":"true"),u.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(s=>{s.dataset.secBound!=="1"&&(s.dataset.secBound="1",s.addEventListener("click",()=>d(s.dataset.secDanger)))}),r(),D(),_()}function o(){}function a(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(b);if(!e||!n)return;let s=e.dataset.activeRoute||"live",u=e.dataset.activeLeaf||s;n.style.display=s==="system"&&u==="security"?"":"none"}function c(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",F()),m(),a())}function f(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function n(){let u=document.querySelector(".admin-dash-grid");!u||e||(e=new MutationObserver(a),e.observe(u,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)?c():void 0,n(),a()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",a),document.addEventListener("admin-panel-rendered",()=>{c(),n(),a()}),n(),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var en=ge(()=>{(function(){"use strict";let b="admin-backup-v2-page";var g=window.AdminUtils.escapeHtml;function y(){let c=f=>ServerI18n.t(f);return`
      <div id="${b}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${c("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${c("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${c("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${c("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${c("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${c("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${c("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecSettingsSnap")}
              <span class="sub">${c("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${c("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${c("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${c("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${c("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${c("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecRestoreSettings")}
              <span class="sub">${c("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${c("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${c("backupApplyDisabledTitle")}">${c("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecRestoreFull")}
              <span class="sub">${c("backupFullPackRestoreNote")}</span>
              <span class="sub">${c("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${c("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${c("backupApplyDisabledTitle")}">${c("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecRestoreAssets")}
              <span class="sub">${c("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${c("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${c("backupApplyDisabledTitle")}">${c("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${c("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecClearHistory")}
              <span class="sub">${c("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${c("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${c("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${c("backupSecFactoryReset")}
              <span class="sub">${c("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${c("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function h(){try{let c=await fetch("/get_settings",{credentials:"same-origin"});if(!c.ok)throw new Error(c.status);let f=await c.json(),e=["password","token","secret","hash"],n={};Object.keys(f||{}).forEach(I=>{e.some(L=>I.toLowerCase().includes(L))||(n[I]=f[I])});let s=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:n},null,2)],{type:"application/json"}),u=URL.createObjectURL(s),S=new Date().toISOString().replace(/[:.]/g,"-"),k=document.createElement("a");k.href=u,k.download="danmu-settings-"+S+".json",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(u),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(c){console.error("Settings snapshot error:",c),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let A=null;function U(){A=null;let c=document.getElementById("bk2-settings-apply");c&&(c.disabled=!0,c.title=ServerI18n.t("backupApplyDisabledTitle"))}async function F(){let c=document.getElementById("bk2-settings-upload"),f=document.getElementById("bk2-settings-diff"),e=document.getElementById("bk2-settings-apply"),n=c&&c.files&&c.files[0];if(!n){U(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let s=await n.text(),u=JSON.parse(s),S=u.settings||u;if(!S||typeof S!="object"||Array.isArray(S))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let k=await fetch("/get_settings",{credentials:"same-origin"}),I=k.ok?await k.json():{},L=[];new Set([...Object.keys(I),...Object.keys(S)]).forEach(j=>{let R=JSON.stringify(I[j]),W=JSON.stringify(S[j]);R!==W&&(R===void 0?L.push("+ "+j+": "+W):W===void 0?L.push("- "+j+": "+R):L.push("~ "+j+": "+R+" \u2192 "+W))}),f.textContent=L.length?L.join(`
`):ServerI18n.t("backupNoDiff"),f.hidden=!1,A=S,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:L.length}),!0)}catch(s){console.error("Dry-run error:",s),U(),f.textContent=ServerI18n.t("backupParseFailedDetail",{msg:s&&s.message?s.message:String(s)}),f.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function C(){let c=document.getElementById("bk2-settings-diff"),f=document.getElementById("bk2-settings-apply");if(!A){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let n=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:A})}),s=await n.json().catch(()=>({}));if(!n.ok){c&&(c.hidden=!1,c.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(s.details||s,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}c&&(c.hidden=!1,c.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(s.applied||[]).length+" settings"),A=null,f&&(f.disabled=!0,f.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(n){c&&(c.hidden=!1,c.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:n&&n.message?n.message:String(n)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function p(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let c=document.getElementById("bk2-factory-confirm"),f=document.getElementById("bk2-factory-reset");!c||!f||(c.addEventListener("input",()=>{let e=c.value.trim()==="reset";f.classList.toggle("is-ready",e),f.disabled=!e}),f.addEventListener("click",D))}async function D(){let c=document.getElementById("bk2-factory-confirm"),f=document.getElementById("bk2-factory-reset");if((c?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{f&&(f.disabled=!0);let n=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),s=await n.json().catch(()=>({}));if(!n.ok||!s.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),f&&(f.disabled=!1);return}c&&(c.value=""),f&&(f.classList.remove("is-ready"),f.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),$()}catch{f&&(f.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function x(){document.getElementById("bk2-settings-download")?.addEventListener("click",h),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",F),document.getElementById("bk2-settings-apply")?.addEventListener("click",C),document.getElementById("bk2-clear-history")?.addEventListener("click",p),document.getElementById("bk2-pack-export")?.addEventListener("click",E),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",i),document.getElementById("bk2-pack-apply")?.addEventListener("click",t),document.getElementById("bk2-assets-export")?.addEventListener("click",O),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",d),document.getElementById("bk2-assets-apply")?.addEventListener("click",r),M(),$(),B()}let T=null,N=null;async function $(){let c=document.getElementById("bk2-pack-summary");if(c)try{let f=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!f.ok){c.textContent=ServerI18n.t("backupPreviewUnavailable");return}let e=await f.json(),n=(e.total_bytes/(1024*1024)).toFixed(2);c.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:n})}catch{c.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function E(){let c=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(c?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function B(){let c=document.getElementById("bk2-assets-summary");if(c)try{let f=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!f.ok){c.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let e=await f.json(),n=(e.total_bytes/(1024*1024)).toFixed(2);c.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:n})}catch{c.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function O(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let _={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},w={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function v(c){return!c||!c.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(c.map(f=>{let e=f&&w[f.code];return"  "+f.path+" \u2014 "+(e?ServerI18n.t(e):f.reason)}))}function l(c){return(c||[]).map(f=>{let e=f&&_[f.code];return"  "+f.path+" \u2014 "+(e?ServerI18n.t(e):f.reason)})}async function i(){let f=document.getElementById("bk2-pack-upload")?.files?.[0];if(!f){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(f.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let e=new FormData;e.append("file",f);let n=document.getElementById("bk2-pack-diff"),s=document.getElementById("bk2-pack-apply");try{let u=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:e}),S=await u.json().catch(()=>({}));if(!u.ok||!S.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(S.errors||S,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),s&&(s.disabled=!0),T=null;return}if(n){n.hidden=!1;let k=[],I=S.manifest||{};k.push("manifest version: "+(I.version||"?")),k.push("generated_at: "+(I.generated_at?new Date(I.generated_at*1e3).toISOString():"\u2014")),S.credentials==="omitted"&&k.push(ServerI18n.t("backupCredentialsKept")),k.push(""),k.push("Will write "+(S.members?.length||0)+" files:"),(S.members||[]).forEach(L=>{k.push("  "+L.label+"/"+L.path.split("/").slice(1).join("/")+" ("+(L.size||0)+" B)")}),S.skipped?.length&&(k.push(""),k.push("Skipped "+S.skipped.length+" entries:"),k.push(...l(S.skipped))),k.push(...v(S.merged)),n.textContent=k.join(`
`)}T=f,s&&(s.disabled=!1,s.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:S.members?.length||0}),!0)}catch(u){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:u.message||""}),!1)}}async function t(){if(!T){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let f=new FormData;f.append("file",T);try{let n=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:f})).json().catch(()=>({})),s=document.getElementById("bk2-pack-diff");if(s){s.hidden=!1;let u=[];n.ok?(u.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),u.push(""),u.push("Applied "+(n.applied||0)+" files"),n.restart_required&&u.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),n.skipped?.length&&(u.push("Skipped "+n.skipped.length+" entries:"),u.push(...l(n.skipped))),u.push(...v(n.merged))):(u.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),n.restart_required&&u.push(ServerI18n.t("backupRestartRequired")),u.push(JSON.stringify(n.errors||n,null,2))),s.textContent=u.join(`
`)}if(n.ok){let u=n.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(u,{n:n.applied}),!0),T=null;let S=document.getElementById("bk2-pack-apply");S&&(S.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:e.message||""}),!1)}}async function d(){let f=document.getElementById("bk2-assets-upload")?.files?.[0];if(!f){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(f.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let e=new FormData;e.append("file",f);let n=document.getElementById("bk2-assets-diff"),s=document.getElementById("bk2-assets-apply");try{let u=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:e}),S=await u.json().catch(()=>({}));if(!u.ok||!S.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(S.errors||S,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),s&&(s.disabled=!0),N=null;return}if(n){n.hidden=!1;let k=[],I=S.manifest||{};k.push("manifest version: "+(I.version||"?")),k.push("generated_at: "+(I.generated_at?new Date(I.generated_at*1e3).toISOString():"\u2014")),k.push(""),k.push("Will write "+(S.members?.length||0)+" asset files:"),(S.members||[]).forEach(L=>{k.push("  "+L.path+" ("+(L.size||0)+" B)")}),S.skipped?.length&&(k.push(""),k.push("Skipped "+S.skipped.length+" entries:"),S.skipped.forEach(L=>k.push("  "+L.path+" \u2014 "+L.reason))),n.textContent=k.join(`
`)}N=f,s&&(s.disabled=!1,s.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:S.members?.length||0}),!0)}catch(u){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:u.message||""}),!1)}}async function r(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let f=new FormData;f.append("file",N);try{let n=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:f})).json().catch(()=>({})),s=document.getElementById("bk2-assets-diff");if(s){s.hidden=!1;let u=[];n.ok?(u.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),u.push(""),u.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&u.push("Skipped "+n.skipped.length+" (see above)")):(u.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),u.push(JSON.stringify(n.errors||n,null,2))),s.textContent=u.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:n.applied}),!0),N=null;let u=document.getElementById("bk2-assets-apply");u&&(u.disabled=!0),B()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:e.message||""}),!1)}}function m(){let c=document.querySelector(".admin-dash-grid"),f=document.getElementById(b);if(!c||!f)return;let e=c.dataset.activeLeaf||"dashboard";f.style.display=e==="backup"?"":"none"}function o(){let c=document.getElementById("settings-grid");!c||document.getElementById(b)||(c.insertAdjacentHTML("beforeend",y()),x(),m())}function a(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&o(),m()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",m),document.addEventListener("admin-panel-rendered",()=>{o(),m()}),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a()})()});var tn=ge(()=>{(function(){"use strict";let b="admin-broadcast-v2-page",g="/admin/broadcast/status",y="/admin/broadcast/toggle",h={mode:"live"},A=null,U=0,F=!1;async function C(){try{let o=await fetch(g,{credentials:"same-origin"});if(!o.ok)return!1;let a=await o.json();if(a&&(a.mode==="live"||a.mode==="standby"))return A=a.session||null,h=a,!0}catch{}return!1}async function p(){try{let o=await fetch("/overlay_status",{credentials:"same-origin"});o.ok&&(U=(await o.json()).overlay_count||0,F=!0)}catch{}}async function M(){await Promise.all([C(),p()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:h.mode==="live",count:F?U:void 0}}))}async function x(o){try{let a=await window.csrfFetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:o})});if(!a.ok){let c=await a.json().catch(()=>({}));throw new Error(c&&c.error?c.error:`HTTP ${a.status}`)}return h=await a.json(),D(),!0}catch(a){return console.warn("[admin-broadcast] toggle failed:",a),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:a&&a.message||""}),!1),!1}}function T(o,a){return ServerI18n.t(o?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:a})}function N(o){return o?"broadcastBigPause":"broadcastBigResume"}async function $(o){let a=await x(o?"live":"standby");return a&&window.showToast&&window.showToast(ServerI18n.t(o?"broadcastToastResumed":"broadcastToastPaused"),!0),v(),a}async function E(){return await C(),p().then(D),$(h.mode!=="live")}async function B(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let a=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});a.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:a.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:$,toggleDisplay:E,clearScreen:B,statusText:T,toggleKey:N};function O(){let o=a=>ServerI18n.t(a);return`
      <div id="${b}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
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
      </div>`}let _=0,w=0;function v(){let o=document.getElementById(b);if(!o)return;let a=h.mode==="live",c=a?"live":"standby",f=(I,L)=>{I&&I.textContent!==L&&(I.textContent=L)};o.dataset.bcState=c;let e=o.querySelector("[data-bc-statedot]");e&&(e.dataset.state=c);let n=o.querySelector("[data-bc-statelabel]");n&&(f(n,T(a,U)),n.dataset.state=c);let s=o.querySelector("[data-bc-big]");s&&(s.dataset.i18n=N(a),f(s,ServerI18n.t(s.dataset.i18n)));let u=A||{},S=!!(u.id||u.name),k=o.querySelector("[data-bc-session-ctx]");k&&(k.hidden=!S),S&&f(o.querySelector("[data-bc-session-id]"),String(u.name||u.id))}function l(){let o=document.getElementById(b);o&&(o.querySelector("[data-bc-big]")?.addEventListener("click",()=>$(h.mode!=="live")),o.querySelector("[data-bc-clear]")?.addEventListener("click",B))}function i(){_||(M().then(v),v(),_=setInterval(()=>{M().then(v)},5e3),w=setInterval(v,1e3))}function t(){_&&(clearInterval(_),_=0),w&&(clearInterval(w),w=0)}function d(){let o=document.querySelector(".admin-dash-grid"),a=document.getElementById(b);if(!o||!a)return;let c=o.dataset.activeLeaf||"dashboard",f=c==="overlay"||c==="broadcast";a.style.display=f?"":"none",f?i():t()}function r(){let o=document.getElementById("settings-grid");!o||document.getElementById(b)||(o.insertAdjacentHTML("afterbegin",O()),l(),d())}function m(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(b)&&r(),d()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",d),document.addEventListener("admin-panel-rendered",()=>{r(),d()}),r()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var nn=ge(()=>{(function(){"use strict";var b=window.AdminUtils.escapeHtml;function g(H,V){return window.ServerI18n?window.ServerI18n.t(H,V):H}let y=["keyword","regex","rate_limit","fingerprint"],h={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},A=["block","replace","allow","review"],U={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},F={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},C={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},p=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function M(H){switch(H.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:H.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:H.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:H.action||"block"}}}function D(H,V){return H==="keyword"?V==="block"?"word":"keyword":H==="regex"?V==="replace"?"replace":"regex":H}function x(H){return H==="permanent"||H==="session"?{lifetime:H}:H==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(H,10)}}function T(H){let V=new Date(H*1e3),ae=Se=>String(Se).padStart(2,"0"),se=`${ae(V.getHours())}:${ae(V.getMinutes())}`,me=new Date;return V.toDateString()===me.toDateString()?se:`${V.getMonth()+1}/${V.getDate()} ${se}`}function N(H){return H.lifetime==="session"?g("blkLifeSession"):H.lifetime==="timed"&&H.expires_at?g("blkLifeUntil",{time:T(H.expires_at)}):g("msgDrawerPermanent")}function $(H){return H.type==="rate_limit"?g("blkRateSummary",{n:H.max_count||5,s:H.window_sec||60}):H.type==="replace"?`${H.pattern}  \u2192  ${H.replacement||""}`:H.pattern}let E=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function B(H,V){return V.find(ae=>ae.type==="regex"&&ae.pattern===H.pattern&&ae.action===H.action)}let O=[],_="all",w=null,v=!1,l=new Set,i=0,t=0,d=!0;function r(H,V,ae){return H.map(se=>`<option value="${b(se)}"${se===ae?" selected":""}>${b(V(se))}</option>`).join("")}function m(){return`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(g("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${b(g("modAddWordPlaceholder"))}" aria-label="${b(g("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${b(g("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${b(g("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${b(g("blkMatchLabel"))}">
              ${r(y,H=>g(h[H]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${b(g("blkActionLabel"))}">
              ${r(A,H=>g(U[H]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${b(g("blkLifetimeLabel"))}">
              ${p.map(H=>`<option value="${H.value}">${b(g(H.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${b(g("fltColReplacement"))}" aria-label="${b(g("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${b(g("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${b(g("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${E.map(H=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${H.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${b(g(H.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(y).map(H=>`
              <button type="button" class="seg-item${H==="all"?" is-active":""}" data-scope="${H}">
                ${b(g(H==="all"?"fltChipAll":h[H]))}
                <span class="admin-block-scope-count" data-scope-count="${H}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${b(g("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${b(g("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${b(g("uiColPriority"))} \xB7 ${b(g("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${b(g("sampleText"))}" aria-label="${b(g("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${b(g("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${b(g("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`}function o(H){let V=M(H),ae=b(H.id);return`
      <div class="hud-rule-row admin-block-row${H.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${b(H.type)}"
        style="${H.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${b($(H))}</span>
        <span class="admin-block-row__meta">
          <span>${b(g(h[V.match]))}</span>
          <span class="admin-block-row__action" data-action="${b(V.action)}">${b(g(U[V.action]||"fltActBlock"))}</span>
          <span>${b(N(H))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${b(H.enabled?g("enabled"):g("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${H.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${H.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${b(g("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${b(g("deleteRule"))}" aria-label="${b(g("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function a(){let H=document.getElementById("blockRuleList");if(!H)return;let V={all:O.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};O.forEach(Se=>{V[M(Se).match]+=1}),Object.keys(V).forEach(Se=>{let Le=document.querySelector(`[data-scope-count="${Se}"]`);Le&&(Le.textContent=String(V[Se]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",O.length||"");let ae=O.filter(Se=>Se.lifetime==="session").length,se=document.getElementById("blockRuleClearSession");se&&(se.hidden=ae===0);let me=_==="all"?O:O.filter(Se=>M(Se).match===_);H.innerHTML=me.map(o).join(""),c(me.length===0),f()}function c(H){let V=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!V||!ae)&&(V.hidden=H,ae.hidden=!H,ae.innerHTML="",!!H))if(window.AdminEmpty){let se=window.AdminEmpty.renderCustom({icon:"\u2298",title:g("blkEmpty"),accent:"var(--color-ink-error)"});se.dataset.emptyKind="filters",ae.appendChild(se)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${b(g("blkEmpty"))}</div>`}function f(){E.forEach(H=>{let V=document.querySelector(`[data-flt-quick-id="${H.id}"]`);if(!V)return;let ae=B(H,O),se=!!ae&&ae.enabled!==!1;V.classList.toggle("is-active",se),V.setAttribute("aria-pressed",se?"true":"false")})}async function e(){try{let H=await window.csrfFetch("/admin/filters/list");if(!H.ok)throw new Error("HTTP "+H.status);let V=await H.json();O=Array.isArray(V.rules)?V.rules:[],d=V.session_live!==!1}catch(H){console.error("Failed to fetch block rules:",H),window.showToast(g("fetchFiltersFailed"),!1)}a(),n()}function n(){let H=s("blockRuleLifetime");if(!H)return;let V=H.querySelector('option[value="session"]'),ae=d||!!(w&&w.lifetime==="session");V&&(V.hidden=!ae,V.disabled=!ae),!ae&&H.value==="session"&&(H.value="permanent")}function s(H){return document.getElementById(H)}function u(){let H=s("blockRuleMatch").value,V=s("blockRuleAction"),ae=F[H];Array.from(V.options).forEach(se=>{se.disabled=ae.indexOf(se.value)===-1}),ae.indexOf(V.value)===-1&&(V.value=ae[0]),V.disabled=ae.length===1,s("blockRuleInput").placeholder=g(C[H]),s("blockRuleReplacement").hidden=V.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(se=>{se.hidden=H!=="rate_limit"})}function S(){let H=s("blockRuleMatch").value,V=s("blockRuleAction").value,ae=s("blockRuleInput").value||"",se={type:D(H,V),pattern:H==="regex"?ae:ae.trim(),action:V,priority:parseInt(s("blockRulePriority").value,10)||0};return w&&w.type===se.type&&(se.type==="fingerprint"||se.type==="rate_limit")&&(se.action=w.action||V),se.type==="replace"&&(se.replacement=s("blockRuleReplacement").value||""),se.type==="rate_limit"&&(se.max_count=parseInt(s("blockRuleMaxCount").value,10)||5,se.window_sec=parseFloat(s("blockRuleWindowSec").value)||60),Object.assign(se,x(s("blockRuleLifetime").value))}function k(H,V){let ae=H&&H.code;return g(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":V)}function I(){i+=1,w=null,s("blockRuleInput").value="",s("blockRuleReplacement").value="",s("blockRuleMatch").value="keyword",s("blockRuleAction").value="block";let H=s("blockRuleLifetime"),V=H.querySelector('option[value="keep"]');V&&V.remove(),H.value="permanent",s("blockRulePriority").value="0",s("blockRuleSubmit").textContent=g("modAddWordBtn"),s("blockRuleCancel").hidden=!0,u(),n()}function L(H){i+=1,w=H;let V=M(H);s("blockRuleMatch").value=V.match,u(),s("blockRuleAction").value=V.action,s("blockRuleInput").value=H.pattern||"",s("blockRuleReplacement").value=H.replacement||"",s("blockRuleMaxCount").value=String(H.max_count||5),s("blockRuleWindowSec").value=String(H.window_sec||60),s("blockRulePriority").value=String(H.priority||0);let ae=s("blockRuleLifetime"),se=ae.querySelector('option[value="keep"]');if(se&&se.remove(),H.lifetime==="timed"&&H.expires_at){let me=document.createElement("option");me.value="keep",me.textContent=N(H),ae.insertBefore(me,ae.firstChild),ae.value="keep"}else ae.value=H.lifetime==="session"?"session":"permanent";u(),n(),s("blockRuleSubmit").textContent=g("blkSave"),s("blockRuleCancel").hidden=!1,s("blockRuleInput").focus()}async function P(){if(v)return;let H=S();if(!H.pattern&&H.type!=="rate_limit"){window.showToast(g("patternRequired"),!1),s("blockRuleInput").focus();return}let V=w,ae=i,se=()=>ae===i,me=V?"/admin/filters/update":"/admin/filters/add",Se=V?{rule_id:V.id,updates:H}:H,Le=s("blockRuleSubmit"),ye=++t;v=!0,V&&l.add(V.id),Le&&(Le.disabled=!0);try{let he=await window.csrfFetch(me,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Se)}),_e=await he.json().catch(()=>({}));if(V&&he.status===404){se()&&I(),await e(),window.showToast(g("blkErrGone"),!1);return}if(!he.ok){window.showToast(k(_e,V?"updateRuleFailed":"addRuleFailed"),!1);return}se()&&I(),await e(),V?window.showToast(g("blkUpdated"),!0):window.AdminQuickAction&&_e.rule_id?window.AdminQuickAction.fire({label:g("blkAdded",{pattern:H.pattern||$(H)}),undo:{label:g("histUndo"),run:async()=>{if(!await j(_e.rule_id))throw new Error("remove failed")}}}):window.showToast(g("ruleAdded"),!0)}catch(he){console.error("Save block rule error:",he),window.showToast(g(V?"updateRuleFailed":"addRuleFailed"),!1)}finally{V&&l.delete(V.id),ye===t&&(v=!1),Le&&(Le.disabled=!1)}}async function j(H){let V=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:H})});return V.ok&&await e(),V.ok}async function R(H){let V=O.find(se=>se.id===H);if(await window.HudConfirm?.open({icon:"\u2298",title:g("filtersDeleteTitle"),severity:"danger",bodyText:V?$(V):"",confirmLabel:g("filtersDeleteConfirm")}))try{await j(H)?(w&&w.id===H&&I(),window.showToast(g("ruleDeleted"),!0)):window.showToast(g("deleteRuleFailed"),!1)}catch(se){console.error("Delete block rule error:",se),window.showToast(g("deleteRuleFailed"),!1)}}let W={};async function G(H,V){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:H,updates:{enabled:V}})}),se=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(k(se,"updateRuleFailed"),!1),!1;let me=O.find(Se=>Se.id===H);return me&&(me.enabled=V),f(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(g("updateRuleFailed"),!1),!1}}function Z(H,V){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(Se=>Se.dataset.ruleId===H);if(!ae)return;let se=ae.querySelector(".filter-toggle-cb");se&&(se.checked=V);let me=ae.querySelector(".admin-filter-toggle-dot");me&&(me.classList.toggle("is-on",V),me.classList.toggle("is-off",!V)),ae.classList.toggle("is-off",!V),ae.style.opacity=V?"":"0.45"}async function de(H,V){let ae=W[H]||(W[H]={want:V,busy:!1});if(ae.want=V,ae.busy)return null;ae.busy=!0;try{let se;do if(se=ae.want,!await G(H,se))return await e(),!1;while(ae.want!==se);return Z(H,se),!0}finally{delete W[H]}}async function ne(){let H=O.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:g("blkClearSessionTitle"),severity:"danger",bodyText:g("blkClearSessionBody",{n:H}),confirmLabel:g("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),se=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(g("blkClearedSession",{n:se.removed||0}),!0),await e()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(g("deleteRuleFailed"),!1)}}async function J(H){let V=E.find(me=>me.id===H);if(!V)return;let ae=g(V.key),se=B(V,O);if(se&&se.enabled===!1){await de(se.id,!0)&&(window.showToast(g("filtersToastEnabled",{label:ae}),!0),await e());return}if(se){let me=await j(se.id).catch(()=>!1);window.showToast(me?g("filtersToastDisabled",{label:ae}):g("filtersToastDisableFailed"),me);return}try{let me=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:V.pattern,action:V.action,priority:50,lifetime:d?"session":"permanent"})});if(!me.ok){let Se=await me.json().catch(()=>({}));window.showToast(g("filtersToastEnableFailed",{msg:k(Se,"addRuleFailed")}),!1);return}window.showToast(g("filtersToastEnabled",{label:ae}),!0),await e()}catch{window.showToast(g("filtersToastEnableFailed",{msg:""}),!1)}}async function ee(){let H=s("filterTestText"),V=s("filterTestResult"),ae=(H.value||"").trim();if(!ae){window.showToast(g("sampleTextRequired"),!1),H.focus();return}let se=S();if(!se.pattern&&se.type!=="rate_limit"){window.showToast(g("patternRequired"),!1),s("blockRuleInput").focus();return}V.textContent=g("testing");try{let me=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:ae})}),Se=await me.json().catch(()=>({}));if(!me.ok){V.textContent=k(Se,"testError");return}let Le={block:g("blocked"),replace:g("replaced"),allow:g("allowed"),review:g("fltActReview")}[Se.action]||g("noMatch");V.dataset.verdict=Se.action||"pass",V.textContent=Se.action==="replace"?`${Le} \u2192 ${Se.text||""}`:Le}catch(me){console.error("Test block rule error:",me),V.textContent=g("testError")}}let K=6,Y=[],te=0,oe=null;function le(H){let V=new Date(H*1e3),ae=se=>String(se).padStart(2,"0");return`${ae(V.getHours())}:${ae(V.getMinutes())}:${ae(V.getSeconds())}`}let ce={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function ue(){let H=s("filterLiveLog");if(H){if(Y.length===0){H.innerHTML=`<div class="admin-block-empty">${b(g("fltNoEvents"))}</div>`;return}H.innerHTML=Y.map(V=>{let ae=String(V.action||"").toUpperCase(),se=ce[ae]?g(ce[ae]):ae,me=String(V.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${b(ae)}">
        <span class="admin-filter-log-row__time">${b(le(V.ts))}</span>
        <span class="admin-filter-log-row__action">${b(se)}</span>
        <span class="admin-filter-log-row__text">\u300C${b(V.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${b(g("blkLogRule",{pattern:V.pattern||""}))}${me?" \xB7 "+b(me):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let H=await fetch(`/admin/filters/events?since=${te}`,{credentials:"same-origin"});if(!H.ok)return;let V=await H.json();if(!Array.isArray(V.events)||V.events.length===0)return;for(Y.unshift(...V.events);Y.length>K;)Y.pop();te=V.latest_seq||te,ue()}catch{}}function ke(H){s("blockRuleMatch").addEventListener("change",u),s("blockRuleAction").addEventListener("change",u),s("blockRuleSubmit").addEventListener("click",P),s("blockRuleCancel").addEventListener("click",I),s("blockRuleInput").addEventListener("keydown",se=>{se.key==="Enter"&&!se.isComposing&&(se.preventDefault(),P())}),s("filterTestBtn").addEventListener("click",ee),s("filterTestText").addEventListener("keydown",se=>{se.key==="Enter"&&!se.isComposing&&(se.preventDefault(),ee())}),s("blockRuleClearSession").addEventListener("click",ne),H.querySelector("[data-flt-quick]").addEventListener("click",se=>{let me=se.target.closest("[data-flt-quick-id]");me&&J(me.dataset.fltQuickId)});let V=s("blockRuleScope");V.addEventListener("click",se=>{let me=se.target.closest("[data-scope]");me&&(_=me.dataset.scope,V.querySelectorAll("[data-scope]").forEach(Se=>Se.classList.toggle("is-active",Se===me)),a())});let ae=s("blockRuleList");ae.addEventListener("change",se=>{let me=se.target.closest(".filter-toggle-cb");if(!me)return;de(me.dataset.ruleId,me.checked);let Se=me.closest(".admin-block-row"),Le=Se?.querySelector(".admin-filter-toggle-dot");Le&&(Le.classList.toggle("is-on",me.checked),Le.classList.toggle("is-off",!me.checked)),Se&&(Se.style.opacity=me.checked?"":"0.45")}),ae.addEventListener("click",se=>{let me=se.target.closest(".filter-delete-btn");if(me)return R(me.dataset.ruleId);let Se=se.target.closest(".block-rule-edit");if(Se){let Le=O.find(ye=>ye.id===Se.dataset.ruleId);Le&&!l.has(Le.id)&&L(Le)}}),oe&&oe(),oe=window.AdminUtils.pollWhileVisible({el:()=>s("filterLiveLog"),intervalMs:4e3,tick:Ee})}function Ae(){let H=document.getElementById("settings-grid");if(!H)return;w=null,_="all",v=!1,t+=1,i+=1,H.insertAdjacentHTML("beforeend",m());let V=document.getElementById("sec-blacklist");ke(V),u(),ue(),e()}let re=!1;document.addEventListener("admin-route-applied",H=>{let V=!!(H.detail&&H.detail.route==="moderation"&&H.detail.leaf==="blacklist");V&&!re&&document.getElementById("blockRuleList")&&e(),re=V});function ie(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let H=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{H()&&Ae()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),H()&&Ae()}window.AdminBlockRules={viewOf:M,typeFor:D,lifetimePayload:x,ACTIONS_FOR_MATCH:F,QUICK:E,refresh:e},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie()})()});var an=ge(()=>{(function(){"use strict";var b=window.AdminUtils.loadDetailsState,g=window.AdminUtils.saveDetailsState,y=window.AdminUtils.escapeHtml,h=1e4,A=null;function U(E){var B=b();return B[E]!==void 0?B[E]:!1}function F(){return`
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
    `}function C(E){var B=ServerI18n.t("fingerprintState_"+E),O="";return E==="blocked"?O=" is-crimson":E==="flagged"?O=" is-amber":E==="active"?O=" is-cyan":O=" is-mute",'<span class="admin-fp-state'+O+'">'+y(B)+"</span>"}function p(E){if(!E)return"\u2014";try{var B=new Date(E*1e3);return B.toLocaleTimeString()}catch{return String(E)}}function M(E){var B=document.getElementById("adminFingerprintTableWrap");if(B){if(!E||E.length===0){B.innerHTML="";var O=window.AdminEmpty.render("audience");O.dataset.emptyKind="fingerprints",B.appendChild(O);return}var _='<div class="admin-fp-row admin-fp-row--head"><span>'+y(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+y(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+y(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",w=E.map(function(v){var l=v.blocked|0,i=v.hash||"",t=i.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+y(i)+'"><span class="admin-fp-hash admin-identity-fp" title="'+y(i)+'">fp:'+y(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+y(v.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+y(v.ua||"")+'">'+y(v.ua||"\u2014")+'</span><span class="admin-fp-num">'+(v.msgs|0)+'</span><span class="admin-fp-num">'+(v.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+C(v.state||"active")+'</span><span class="admin-fp-ts">'+y(p(v.last_seen))+"</span></div>"}).join("");B.innerHTML=_+w}}async function D(){var E=document.getElementById("adminFingerprintCount");try{var B=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var O=await B.json(),_=O.records||[];if(M(_),E){var w=O.count||_.length,v=O.flagged!=null?O.flagged:_.filter(function(i){return i.state==="flagged"||i.state==="blocked"}).length;E.textContent=ServerI18n.t("fpCountSummary",{unique:w,flagged:v})}}catch(i){console.error("[admin-fingerprints] fetch failed:",i);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+y(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function x(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var B=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(B.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var O=await B.json().catch(function(){return{}});window.showToast(O.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(_){console.error("[admin-fingerprints] reset error:",_),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function T(){N(),A=setInterval(function(){var E=document.getElementById("sec-fingerprints");E&&E.offsetParent!==null&&D()},h)}function N(){A&&(clearInterval(A),A=null)}function $(){var E=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(E){E.insertAdjacentHTML("beforeend",F());var B=document.getElementById("adminFingerprintRefreshBtn");B&&B.addEventListener("click",D);var O=document.getElementById("adminFingerprintResetBtn");O&&O.addEventListener("click",x),D(),T()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var E=new MutationObserver(function(){var O=document.getElementById("moderation-grid")||document.getElementById("settings-grid");O&&!document.getElementById("sec-fingerprints")&&$()});E.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var B=document.getElementById("moderation-grid")||document.getElementById("settings-grid");B&&!document.getElementById("sec-fingerprints")&&$()}})})()});var sn=ge(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var b=window.AdminUtils.escapeHtml;let g=(a,c)=>{let f=window.ServerI18n?.t?.(a);return f&&f!==a?f:c||a},y=!1;new MutationObserver(()=>{let a=document.getElementById("settings-grid");if(a&&!(document.getElementById("sec-widgets")||y)){y=!0;try{A(a)}finally{y=!1}}}).observe(document.body,{childList:!0,subtree:!0});function A(a){let c=document.createElement("div");c.id="sec-widgets",c.className="admin-widgets-page hud-page-stack lg:col-span-2";let f=location.origin+"/overlay";c.dataset.tpl="B",c.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${b(g("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${b(g("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${b(g("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${b(g("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${b(g("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${b(g("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${b(g("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(g("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${b(g("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${b(g("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${b(g("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${b(f)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${b(g("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${b(g("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,a.appendChild(c);let e=document.getElementById("widget-add"),n=c.querySelector("[data-ow-addmenu]");e.addEventListener("click",s=>{s.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",s=>{let u=s.target.closest("[data-ow-add]")?.dataset.owAdd;u&&(n.hidden=!0,C(u))}),document.addEventListener("click",s=>{!n.hidden&&!s.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",x),c.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let s=c.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(s).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),F()}async function U(a,c="GET",f=null){let e={method:c,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(f){let s=document.querySelector('meta[name="csrf-token"]');s&&(e.headers["X-CSRF-Token"]=s.content),e.body=JSON.stringify(f)}return(await fetch("/admin/widgets/"+a,e)).json()}async function F(){try{let a=await U("list");N(a.widgets||[])}catch(a){console.error("[admin-widgets] Load failed:",a)}}async function C(a){let c={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await U("create","POST",{type:a,config:c[a]||{}}),F()}catch(f){console.error("[admin-widgets] Create failed:",f)}}async function p(a){let c=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:c,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await U("delete","POST",{id:a}),F()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function M(a,c){try{await U("update","POST",{id:a,config:c}),F()}catch(f){console.error("[admin-widgets] Update failed:",f)}}async function D(a,c,f){try{await U("score","POST",{id:a,team_index:c,delta:f}),F()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function x(){let a=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:a,confirmLabel:ServerI18n.t("clearAll")}))try{await U("clear","POST",{}),F()}catch(f){console.error("[admin-widgets] Clear failed:",f)}}let T=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(a){let c=document.getElementById("widgets-list");if(c){if(c.innerHTML="",i(a),a.length===0){let f=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});f.dataset.emptyKind="widgets",c.appendChild(f);return}a.forEach(f=>{c.appendChild(_(f))})}}let $={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function E(a){return g("widgetPos_"+String(a||"top-left").replace("-","_"),a||"")}function B(a){let c=a.config||{},f="";a.type==="scoreboard"?f=(c.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):a.type==="ticker"?(f=(c.messages||[])[0]||"",f&&(f=`\u300C${f}\u300D`)):a.type==="label"&&(f=c.text?`\u300C${c.text}\u300D`:"");let e=E(a.position);return f?`${f} \xB7 ${e}`:e}function O(a){return a==="scoreboard"?g("widgetScoreboard"):a==="ticker"?g("widgetTicker"):a==="label"?g("widgetLabel"):a}function _(a){let c=document.createElement("div");c.className="admin-widget-card",a.visible!==!1&&c.classList.add("is-on");let f=document.createElement("button");f.type="button",f.className="admin-widget-summary",f.setAttribute("aria-expanded","false"),f.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+b($[a.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+b(O(a.type))+'</span><span class="admin-widget-summary-text">'+b(B(a))+"</span>"+(a.visible===!1?'<span class="admin-widget-summary-off">'+b(g("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',c.appendChild(f);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,f.addEventListener("click",()=>{e.hidden=!e.hidden,f.setAttribute("aria-expanded",e.hidden?"false":"true"),c.classList.toggle("is-open",!e.hidden)});let n=o(g("widgetPosition"),T,a.position,k=>M(a.id,{position:k}));e.appendChild(n),a.type==="scoreboard"?t(e,a):a.type==="ticker"?d(e,a):a.type==="label"&&r(e,a);let s=document.createElement("div");s.className="admin-widget-card-actions";let u=document.createElement("button");u.type="button",u.className="admin-ui-action admin-widget-card-action",u.textContent=a.visible?g("widgetHide"):g("widgetShow"),u.addEventListener("click",()=>M(a.id,{visible:!a.visible})),s.appendChild(u);let S=document.createElement("button");return S.type="button",S.className="admin-ui-action is-danger admin-widget-card-action",S.textContent=g("remove"),S.addEventListener("click",()=>p(a.id)),s.appendChild(S),e.appendChild(s),c.appendChild(e),c}let w={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function v(a,c){let f="top-left",e=1/0;for(let[n,[s,u]]of Object.entries(w)){let S=a-s/2,k=c-u/2,I=S*S+k*k;I<e&&(e=I,f=n)}return f}function l(a){let c=a.config||{};return a.type==="scoreboard"?(c.teams||[]).map(f=>`${f.name} ${f.score}`).join("  ")||g("widgetScoreboard"):a.type==="ticker"?(c.messages||[])[0]||g("widgetTicker"):a.type==="label"?c.text||g("widgetLabel"):a.type}function i(a){let c=document.querySelector("[data-ow-stage]");if(c){if(c.innerHTML="",!a.length){c.innerHTML='<span class="admin-ow-stage-empty">'+b(g("widgetsStageEmpty"))+"</span>";return}a.forEach(f=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(f.position||"top-left"),f.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=f.id,e.draggable=!0,e.textContent=l(f),e.title=O(f.type),e.addEventListener("dragend",n=>{let s=c.getBoundingClientRect();if(!s.width||!s.height)return;let u=(n.clientX-s.left)/s.width,S=(n.clientY-s.top)/s.height;if(u<0||u>1||S<0||S>1)return;let k=v(u,S);k!==f.position&&M(f.id,{position:k})}),c.appendChild(e)})}}function t(a,c){let f=c.config||{},e=m(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",f.title||"",n=>M(c.id,{title:n}));a.appendChild(e),(f.teams||[]).forEach((n,s)=>{let u=document.createElement("div");u.className="admin-widget-team";let S=document.createElement("input");S.type="color",S.value=n.color||"#38bdf8",S.className="admin-widget-team-color",S.addEventListener("change",()=>{let j=[...f.teams];j[s]={...j[s],color:S.value},M(c.id,{teams:j})}),u.appendChild(S);let k=document.createElement("input");k.type="text",k.value=n.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let j=[...f.teams];j[s]={...j[s],name:k.value},M(c.id,{teams:j})}),u.appendChild(k);let I=document.createElement("span");I.className="admin-widget-team-score",I.textContent=n.score,u.appendChild(I);let L=document.createElement("button");L.type="button",L.className="admin-widget-step",L.textContent="\u2212",L.addEventListener("click",()=>D(c.id,s,-1)),u.appendChild(L);let P=document.createElement("button");P.type="button",P.className="admin-widget-step",P.textContent="+",P.addEventListener("click",()=>D(c.id,s,1)),u.appendChild(P),a.appendChild(u)})}function d(a,c){let f=c.config||{},e=document.createElement("div");e.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(n);let s=document.createElement("input");s.type="range",s.min="10",s.max="200",s.value=f.speed||60,s.style.flex="1",s.addEventListener("change",()=>{M(c.id,{speed:parseInt(s.value)})}),e.appendChild(s);let u=document.createElement("span");u.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",u.textContent=s.value,s.addEventListener("input",()=>{u.textContent=s.value}),e.appendChild(u),a.appendChild(e);let S=document.createElement("div");S.className="admin-widget-row",S.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",S.appendChild(k);let I=document.createElement("textarea");I.className="admin-widget-textarea",I.value=(f.messages||[]).join(`
`),I.rows=3,I.placeholder=ServerI18n.t("widgetTickerPlaceholder"),I.addEventListener("change",()=>{let L=I.value.split(`
`).filter(P=>P.trim());M(c.id,{messages:L})}),S.appendChild(I),a.appendChild(S)}function r(a,c){let f=c.config||{};a.appendChild(m(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",f.text||"",e=>M(c.id,{text:e}))),a.appendChild(m(window.ServerI18n?.t?.("size")||"SIZE",String(f.fontSize||24),e=>M(c.id,{fontSize:parseInt(e)||24}),"number"))}function m(a,c,f,e="text"){let n=document.createElement("div");n.className="admin-widget-row";let s=document.createElement("span");s.className="lbl",s.textContent=a,n.appendChild(s);let u=document.createElement("input");return u.type=e,u.value=c,u.className="admin-widget-input",u.addEventListener("change",()=>f(u.value)),n.appendChild(u),n}function o(a,c,f,e){let n=document.createElement("div");n.className="admin-widget-row";let s=document.createElement("span");s.className="lbl",s.textContent=a,n.appendChild(s);let u=document.createElement("select");return u.className="admin-widget-select",c.forEach(S=>{let k=document.createElement("option");k.value=S,k.textContent=S,S===f&&(k.selected=!0),u.appendChild(k)}),u.addEventListener("change",()=>e(u.value)),n.appendChild(u),n}})})()});var on=ge(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let b=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","notifications","audience","overlay","about"];function g(){let R=window.ADMIN_ROUTES||{},W={};return b.forEach(G=>{let Z=R[G];Z&&Z.title&&(W[G]={title:Z.title,kicker:Z.kicker||G.toUpperCase()})}),W}let y=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],h=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function A(){let R=document.querySelector('meta[name="csrf-token"]');return R&&R.content||""}function U(R,W){if(typeof window.csrfFetch=="function")return window.csrfFetch(R,W);let G=Object.assign({credentials:"same-origin"},W||{}),Z=new Headers(W&&W.headers||{});return Z.set("X-CSRF-Token",A()),G.headers=Z,fetch(R,G)}function F(R,W){typeof window.showToast=="function"&&window.showToast(R,W!==!1)}let C=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>U("/effects/reload",{method:"POST"}).then(R=>F(R.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),R.ok)).catch(()=>F(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>U("/admin/poll/reset",{method:"POST"}).then(R=>F(R.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),R.ok)).catch(()=>F(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return U("/admin/history/clear",{method:"POST"}).then(W=>F(W.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),W.ok)).catch(()=>F(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],p=null,M=null,D=null,x="",T=[],N=[],$=0,E=null,B=null,O=null,_=15e3;function w(R){return String(R??"").replace(/[&<>"']/g,W=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[W])}function v(R,W){if(!W)return 0;let G=String(R||"").toLowerCase(),Z=W.toLowerCase(),de=0,ne=0,J=0,ee=0;for(;de<G.length&&ne<Z.length;)G[de]===Z[ne]?(ne++,ee++,J+=2+ee):ee=0,de++;return ne<Z.length?-1:(G.startsWith(Z)&&(J+=10),J)}function l(){let R=document.createElement("div");R.className="admin-cmdk",R.setAttribute("hidden",""),R.setAttribute("aria-hidden","true"),R.innerHTML=`
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
    `,document.body.appendChild(R),p=R,M=R.querySelector(".admin-cmdk-input"),D=R.querySelector(".admin-cmdk-list"),R.addEventListener("click",W=>{W.target.matches("[data-cmdk-close]")&&P()}),M.addEventListener("input",W=>{x=W.target.value,S()}),M.addEventListener("keydown",i),D.addEventListener("click",W=>{let G=W.target.closest("[data-cmdk-idx]");G&&($=parseInt(G.dataset.cmdkIdx,10)||0,d())})}function i(R){if(R.key==="Escape"){R.preventDefault(),P();return}if(R.key==="ArrowDown"){R.preventDefault(),t(1);return}if(R.key==="ArrowUp"){R.preventDefault(),t(-1);return}if(R.key==="Enter"){R.preventDefault(),d();return}}function t(R){if(!T.length)return;$=($+R+T.length)%T.length,I();let W=D.querySelector(`[data-cmdk-idx="${$}"]`);W&&W.scrollIntoView({block:"nearest"})}function d(){let R=T[$];if(R){if(R.type==="route")window.location.hash="#/"+R.route,P();else if(R.type==="setting")R.tab&&(document.body.dataset.viewerConfigTab=R.tab),window.location.hash="#/"+R.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let W=document.getElementById(R.section);W&&(W.scrollIntoView({behavior:"smooth",block:"start"}),W.tagName==="DETAILS"&&!W.open&&(W.open=!0))},80),P();else if(R.type==="message")window.location.hash="#/messages",P();else if(R.type==="user")window.location.hash="#/system",setTimeout(()=>{let W=document.getElementById("sec-fingerprints");W&&W.scrollIntoView({behavior:"smooth",block:"start"})},80),P();else if(R.type==="theme")U("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R.id})}).then(W=>{W.ok?(F(ServerI18n.t("cmdkThemeApplied",{name:R.label}),!0),O=null):F(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>F(ServerI18n.t("cmdkThemeApplyFailed"),!1)),P();else if(R.type==="action"){try{let W=R.action&&R.action();W&&typeof W.then=="function"&&W.catch(()=>{})}catch{}P()}}}let r={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function m(R){return Object.entries(g()).map(([W,G])=>{let Z=Math.max(v(G.title,R),v(W,R)),de=r[W];return{type:"route",route:W,label:G.title,sub:de?ServerI18n.t(de):"",icon:"\u25C7",score:Z}}).filter(W=>W.score>=0)}function o(R){let W=g()[R];if(!W)return"";let G="adminRouteTitle_"+R,Z=ServerI18n.t(G);return Z!==G?Z:W.title}function a(R){return y.map(W=>{let G=W.labelKey?ServerI18n.t(W.labelKey):W.label;return{type:"setting",route:W.route,tab:W.tab,section:W.section,label:o(W.route.split("/")[0])?`${o(W.route.split("/")[0])} \u203A ${G}`:G,sub:"",icon:"\u2699",score:v(G,R)}}).filter(W=>W.score>=0)}function c(R){return E?(E.records||[]).map(G=>{let Z=G.text||G.message||"",de=G.nickname||G.user||"guest",ne=(G.timestamp||"").slice(11,19)||"\u2014",J=(G.fingerprint||G.fp||"").slice(0,8);return{type:"message",label:`${Z}  \xB7  @${de}`,sub:J?`${ne} \xB7 fp:${J}`:ne,icon:"\u{1F4AC}",score:Math.max(v(Z,R),v(de,R))}}).filter(G=>G.score>=0):[]}function f(R){if(!O)return[];let W=O.records||[],G=O.active||"";return W.map(Z=>{let de=Z.label||Z.display_name||Z.name||"",ne=Z.description||ServerI18n.t("cmdkThemeDefaultDesc"),J=Z.name===G;return{type:"theme",id:Z.name,label:J?ServerI18n.t("cmdkThemeActive",{name:de}):de,sub:ne,icon:"\u{1F3A8}",score:Math.max(v(de,R),v(Z.name||"",R),v(ne,R))}}).filter(Z=>Z.score>=0)}function e(R){return C.map(W=>{let G=ServerI18n.t(W.labelKey),Z=W.subKey?ServerI18n.t(W.subKey):W.sub;return{type:"action",id:W.id,label:G,sub:Z,icon:"\u26A1",action:W.action,score:Math.max(v(G,R),v(W.id,R),v(Z,R))}}).filter(W=>W.score>=0)}function n(R){return B?(B.records||[]).map(G=>{let Z=G.fingerprint||G.fp||G.id||"",de=G.ip||G.last_ip||"",ne=G.nickname||"";return{type:"user",label:ne?`@${ne}  \xB7  ${Z.slice(0,12)}\u2026`:`${Z.slice(0,12)}\u2026`,sub:`user \xB7 ${de||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(v(Z,R),v(de,R),v(ne,R))}}).filter(G=>G.score>=0):[]}async function s(){let R=Date.now(),W=[];(!E||R-E.at>_)&&W.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{E={at:R,records:G&&G.records||[]}}).catch(()=>{E={at:R,records:[]}})),(!B||R-B.at>_)&&W.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{B={at:R,records:G&&G.records||[]}}).catch(()=>{B={at:R,records:[]}})),(!O||R-O.at>_)&&W.push(fetch("/admin/themes",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{O={at:R,records:G&&G.themes||[],active:G&&G.active||""}}).catch(()=>{O={at:R,records:[],active:""}})),W.length&&await Promise.all(W)}let u={actions:5,pages:5,messages:4};async function S(){await s();let R=x.trim(),W={action:e(R),route:m(R),setting:a(R),theme:f(R),message:c(R),user:n(R)};T=[],N=[],h.forEach(G=>{let Z=G.types.reduce((de,ne)=>de.concat(W[ne]||[]),[]).sort((de,ne)=>ne.score-de.score).slice(0,u[G.id]||5);Z.length&&(N.push({id:G.id,labelKey:G.labelKey,from:T.length,count:Z.length}),T=T.concat(Z))}),$=0,I()}function k(R){return R.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[R.type]||"\xB7"}function I(){if(!T.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let R=[];N.forEach(W=>{R.push(`<li class="admin-cmdk-group" role="presentation">${w(ServerI18n.t(W.labelKey))}</li>`);for(let G=W.from;G<W.from+W.count;G++){let Z=T[G],de=G===$;R.push(`
        <li class="admin-cmdk-row ${de?"is-active":""}"
            data-cmdk-idx="${G}" role="option" aria-selected="${de}">
          <span class="admin-cmdk-icon" aria-hidden="true">${w(k(Z))}</span>
          <span class="admin-cmdk-label">${w(Z.label)}</span>
          <span class="admin-cmdk-sub">${w(Z.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${de?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=R.join("")}function L(){p||l(),p.removeAttribute("hidden"),p.setAttribute("aria-hidden","false"),p.classList.add("is-open"),x="",M.value="",S(),setTimeout(()=>M.focus(),20)}function P(){p&&(p.setAttribute("hidden",""),p.setAttribute("aria-hidden","true"),p.classList.remove("is-open"))}function j(){return!!(p&&!p.hasAttribute("hidden"))}window.AdminCommandPalette={open:L,close:P,isOpen:j,toggle:()=>j()?P():L()}})()});var rn=ge(()=>{(function(){"use strict";let b="sec-sessions-overview";var g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},y={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function h(l){if(l=Number(l)||0,l<=0)return"\u2014";var i=Math.floor(l/3600),t=Math.floor(l%3600/60),d=l%60;return i>0?i+"h "+t+"m":t>0?t+"m":d+"s"}function A(l){if(!l)return"\u2014";try{var i=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return i.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function U(){return'<div id="'+b+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function F(){return'<div class="admin-sessions-th"><span>'+g(ServerI18n.t("sessionsColSession"))+"</span><span>"+g(ServerI18n.t("sessionsColMessages"))+"</span><span>"+g(ServerI18n.t("sessionsColViewers"))+"</span><span>"+g(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function C(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function p(){var l=document.getElementById("admin-sessions-table-body");if(l){if(y.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!y.sessions.length){l.innerHTML="";var i=window.AdminEmpty.render("sessions");i.dataset.emptyKind="sessions",l.appendChild(i);return}var t=y.sessions.map(function(d){var r=g(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+r+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+g(C(d))+'<span class="admin-sessions-td-sub">'+g(A(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+g(h(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+r+'">'+g(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=F()+t}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!y.exportId){l.hidden=!0,l.innerHTML="";return}var i=y.sessions.find(function(d){return d.id===y.exportId});if(!i){y.exportId=null,l.hidden=!0,l.innerHTML="";return}var t=M.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===y.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===y.exportFormat?"true":"false")+'">'+g(ServerI18n.t(d.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+g(ServerI18n.t("sessionsExportTitle",{name:C(i)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+g(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(y.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+g(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+g(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+g(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+g(ServerI18n.t("sessionsDownloadBtn",{fmt:y.exportFormat.toUpperCase()}))+"</button></div>"}}function x(){if(y.exportId){var l="/admin/sessions/"+encodeURIComponent(y.exportId)+"/export?format="+encodeURIComponent(y.exportFormat)+"&include_pii="+(y.exportPii?"1":"0"),i=document.createElement("a");i.href=l,i.rel="noopener",document.body.appendChild(i),i.click(),i.remove()}}async function T(){var l=y.exportId;if(l)try{var i=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);var t=await i.json(),d=(t.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var r=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(r.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!r.ok)throw new Error("HTTP "+r.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){p(),D()}async function $(){y.loading=!0,p();try{var[l,i]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],d=[];if(l.ok){var r=await l.json();t=Array.isArray(r.sessions)?r.sessions:[],t.forEach(function(n){n._explicit=!0})}if(i.ok){var m=await i.json();d=Array.isArray(m.sessions)?m.sessions:[]}var o=t.slice(),a=new Set(t.map(function(n){return n.id}));d.forEach(function(n){a.has(n.id)||o.push(n)}),o.sort(function(n,s){var u=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),S=typeof s.started_at=="number"?s.started_at:Date.parse(s.started_at||0);return S-u});try{var c=await fetch("/admin/session/current",{credentials:"same-origin"});if(c.ok){var f=await c.json();if(f.status==="live"){var e=Object.assign({},f,{id:f.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});o.unshift(e)}}}catch{}y.sessions=o,y.total=o.length}catch(n){console.error("[admin-sessions] fetch error:",n),y.sessions=[],y.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{y.loading=!1,N()}}function E(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function B(l){y.exportId=l,D();var i=document.querySelector("[data-sessions-export]");i&&i.scrollIntoView({block:"nearest"})}function O(){var l=document.getElementById(b);l&&(l.addEventListener("click",function(i){var t=i.target.closest("[data-sessions-export-open]");if(t){i.stopPropagation(),B(t.dataset.sessionsExportOpen);return}if(i.target.closest("[data-sessions-export-close]")){y.exportId=null,D();return}var d=i.target.closest("[data-sessions-export-fmt]");if(d){y.exportFormat=d.dataset.sessionsExportFmt,D();return}if(i.target.closest("[data-sessions-replay]")){T();return}if(i.target.closest("[data-sessions-download]")){x();return}var r=i.target.closest(".admin-sessions-tr");r&&E(r.dataset.sessionId||null)}),l.addEventListener("change",function(i){var t=i.target.closest("[data-sessions-export-pii]");t&&(y.exportPii=!!t.checked)}),l.addEventListener("keydown",function(i){if(!(i.key!=="Enter"&&i.key!==" ")){var t=i.target.closest(".admin-sessions-tr");t&&(i.preventDefault(),E(t.dataset.sessionId||null))}}))}function _(){var l=document.querySelector(".admin-dash-grid"),i=document.getElementById(b);if(!(!l||!i)){var t=l.dataset.activeLeaf||"dashboard";i.style.display=t==="sessions"?"":"none"}}function w(){var l=document.getElementById("settings-grid");!l||document.getElementById(b)||(l.insertAdjacentHTML("beforeend",U()),O(),$(),_())}function v(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&w(),_()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",_),document.addEventListener("admin-panel-rendered",function(){w(),_()}),w()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var dn=ge(()=>{(function(){"use strict";let b="sec-session-detail-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},y={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},h=!1,A={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function U(){let k=window.location.hash||"",I=k.indexOf("?");if(I===-1)return null;let L=k.slice(I+1);return new URLSearchParams(L).get("id")||null}function F(k){if(!k)return"\u2014";try{let I=new Date(k);if(isNaN(I.getTime()))return String(k);let L=P=>String(P).padStart(2,"0");return`${I.getFullYear()}-${L(I.getMonth()+1)}-${L(I.getDate())} ${L(I.getHours())}:${L(I.getMinutes())}:${L(I.getSeconds())}`}catch{return String(k)}}function C(k){if(!k||k<0)return"\u2014";let I=Math.round(Number(k)),L=Math.floor(I/3600),P=Math.floor(I%3600/60),j=I%60;return L>0?`${L}h ${P}m ${j}s`:P>0?`${P}m ${j}s`:`${j}s`}function p(k,I){if(!k||!I)return"";try{let L=Math.max(0,Math.round((new Date(k)-new Date(I))/1e3)),P=Math.floor(L/60),j=L%60;return`+${String(P).padStart(2,"0")}:${String(j).padStart(2,"0")}`}catch{return""}}function M(k){let I=Number(k);return isNaN(I)?"\u2014":I.toLocaleString()}function D(k){if(!k)return"#64748b";let I=0;for(let P=0;P<k.length;P++)I=I*31+k.charCodeAt(P)>>>0;return`hsl(${I%360}, 60%, 60%)`}function x(){return`
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
    `}async function T(k){if(!k){_(ServerI18n.t("sessionDetailErrMissingId"));return}O(!0);try{let I=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(I.status===404&&(I=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!I.ok)throw new Error(`HTTP ${I.status}`);let L=await I.json();y.session=L.session||null,y.records=L.records||[],y.density=L.density||[],O(!1),w(),N()}catch(I){O(!1),_(ServerI18n.t("sessionDetailErrLoadFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(y.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(y.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let I=await k.json();y.annotations=Array.isArray(I.annotations)?I.annotations:[],r()}catch{}}function $(){let k=y.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let I=k.started_at||k.start_time,L=k.ended_at||k.end_time;if(I&&L)try{return Math.max(0,new Date(L)-new Date(I))}catch{return 0}return y.density&&y.density.length?y.density.length*60*1e3:0}function E(k){let I=Date.parse(k||0);if(Number.isNaN(I))return"\u2014";let L=new Date(I),P=j=>String(j).padStart(2,"0");return`${P(L.getHours())}:${P(L.getMinutes())}:${P(L.getSeconds())}`}function B(k){let I=Math.floor(k/1e3),L=Math.floor(I/3600),P=Math.floor(I%3600/60),j=I%60,R=W=>String(W).padStart(2,"0");return L>0?`${R(L)}:${R(P)}:${R(j)}`:`${R(P)}:${R(j)}`}function O(k){y.loading=k;let I=document.querySelector("[data-sd-loading]"),L=document.querySelector("[data-sd-error]");I&&(I.hidden=!k),L&&k&&(L.hidden=!0);let P=document.querySelector("[data-sd-timeline-wrap]");if(P&&window.AdminSkeletons){let j=P.querySelector("[data-sd-timeline-skel]");k?(P.hidden=!1,j||(j=window.AdminSkeletons.chart(),j.setAttribute("data-sd-timeline-skel","1"),P.appendChild(j))):j&&j.remove()}}function _(k){y.error=k;let I=document.querySelector("[data-sd-error]"),L=document.querySelector("[data-sd-error-msg]");I&&(I.hidden=!1),L&&(L.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(P){let j=document.querySelector(`[${P}]`);j&&(j.hidden=!0)})}function w(){v(),l(),i(),d(),r();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function v(){let k=y.session,I=document.querySelector("[data-sd-session-header]");if(!I)return;I.hidden=!1;let L=document.querySelector("[data-sd-session-id]"),P=document.querySelector("[data-sd-meta-start]"),j=document.querySelector("[data-sd-meta-duration]"),R=document.querySelector("[data-sd-title]"),W=k&&(k.session_id||k.id)||y.sessionId||"\u2014";L&&(L.textContent=W),P&&(P.textContent=F(k&&(k.started_at||k.start_time))),j&&(j.textContent=C(k&&(k.duration_s||k.duration))),R&&(R.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(W).slice(-8)}))}function l(){let k=y.session;if(!k)return;let I=document.querySelector("[data-sd-kpis]");I&&(I.hidden=!1);let L=function(W,G,Z){let de=document.querySelector(`[data-sd-stat="${W}"]`);de&&(de.textContent=G);let ne=document.querySelector(`[data-sd-stat-sub="${W}"]`);ne&&(ne.textContent=Z||"")};L("msg_count",M(k.msg_count)),L("viewer_count",M(k.viewer_count));let P=Array.isArray(y.density)?y.density:[];if(P.length){let W=0,G=0;P.forEach(function(ne,J){ne>W&&(W=ne,G=J)});let Z=Date.parse(k.started_at||k.start_time||0),de="";if(!Number.isNaN(Z)){let ne=new Date(Z+G*6e4),J=ee=>String(ee).padStart(2,"0");de=`${J(ne.getHours())}:${J(ne.getMinutes())}`}L("peak",M(W),de)}else L("peak","\u2014","");let j=Number(k.blocked_count)||0;L("blocked",M(j));let R=document.querySelector("[data-sd-blocked-btn]");R&&(R.textContent=ServerI18n.t("sessionDetailStatBlocked")+(j?" "+j:""),R.disabled=j===0)}function i(){let k=document.querySelector("[data-sd-timeline-wrap]"),I=document.querySelector("[data-sd-timeline]"),L=document.querySelector("[data-sd-timeline-axis]"),P=document.querySelector("[data-sd-peak-label]");if(!k||!I||!L)return;let j=y.density;if(!j||j.length===0){k.hidden=!0;return}k.hidden=!1;let R=Math.max(1,...j),W=0;j.forEach(function(ee,K){ee>j[W]&&(W=K)});let G=j.map(function(ee,K){let Y=Math.max(2,Math.round(ee/R*100));return`<div class="admin-sd-bar${K===W?" is-peak":""}" style="height:${Y}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ee,minute:K+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ee})}"></div>`}).join("");I.innerHTML=G;let Z=y.session,de=F(Z&&(Z.started_at||Z.start_time)).slice(11,16)||"00:00",ne=F(Z&&(Z.ended_at||Z.end_time)).slice(11,16)||"",J=j.length>2?`+${Math.round(j.length/2)}min`:"";L.innerHTML=`
      <span class="admin-sd-axis-label">${g(de)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${g(J)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${g(ne)}</span>
    `,P&&(P.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:j[W],minute:W}))}function t(){let k=(y.msgQuery||"").trim().toLowerCase();return y.records.filter(function(I){let L=(I.status||"shown")==="blocked";return y.msgFilter==="blocked"&&!L?!1:k?String(I.text||"").toLowerCase().indexOf(k)!==-1||String(I.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function d(){let k=document.querySelector("[data-sd-msgs-wrap]"),I=document.querySelector("[data-sd-msgs-list]");if(!k||!I)return;if(!y.records.length){k.hidden=!0;return}k.hidden=!1;let L=t().slice(0,300);if(!L.length){I.innerHTML='<div class="admin-sd-msgs-empty">'+g(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}I.innerHTML=L.map(function(P){let j=(P.status||"shown")==="blocked",R=D(P.fingerprint||P.fp||""),W=E(P.timestamp||P.created_at),G=String(P.nickname||"").trim();return`
        <div class="admin-sd-msg-row${j?" is-blocked":""}">
          <span class="admin-sd-msg-time">${g(W)}</span>
          <span class="admin-sd-msg-dot" style="background:${R}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${g(P.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${g(ServerI18n.t("deliveryStatus_"+(P.status||"shown")))}
            ${P.delivery_reason?`<span class="admin-sd-msg-rule">${g(ServerI18n.t("deliveryReason_"+P.delivery_reason))}</span>`:""}
            ${j&&P.blockedBy?`<span class="admin-sd-msg-rule">${g(ServerI18n.t("sessionDetailBlockedBy",{rule:P.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${g(G||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function r(){let k=y.annotations||[],I=$(),L=document.querySelector("[data-sd-ann-count]");L&&(L.textContent=k.length?`${k.length} ANNOTATIONS`:"");let P=document.querySelector("[data-sd-ann-head]");P&&(P.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let j=document.querySelector("[data-sd-ann-layer]");j&&(!I||k.length===0?j.innerHTML="":j.innerHTML=k.map(function(G){let Z=A[G.label]||A.note,de=Math.min(100,Math.max(0,G.ts_ms/I*100)),ne=G.id===y.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${Z.shape}${ne?" is-active":""}"
              data-sd-ann-marker="${g(G.id)}"
              style="left:${de.toFixed(2)}%;--ann-color:${Z.color}"
              title="${g(Z.label)} \xB7 ${B(G.ts_ms)}"
              aria-label="${g(Z.label)} at ${B(G.ts_ms)}: ${g(G.note||"")}">
              ${Z.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${ne?`<span class="admin-sd-ann-tip"><span style="color:${Z.color}">${Z.icon}</span> ${g((G.note||"").slice(0,40))}${(G.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let R=document.querySelector("[data-sd-ann-legend]");R&&(R.innerHTML=Object.keys(A).map(function(G){let Z=A[G],de=Z.shape==="square"?"2px":Z.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${Z.color};border-radius:${de}"></span>
          <span class="admin-sd-ann-legend-label">${Z.label}</span>
        </span>`}).join(""));let W=document.querySelector("[data-sd-ann-list]");if(W){if(k.length===0){W.innerHTML="";let G=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});G.dataset.emptyKind="session-annotations",W.appendChild(G);return}W.innerHTML=k.map(function(G){let Z=A[G.label]||A.note,de=G.id===y.activeAnnId,J=(G.note||"").length>80?(G.note||"").slice(0,80)+"\u2026":G.note||"";return`
        <div class="admin-sd-ann-row${de?" is-active":""}" data-sd-ann-row="${g(G.id)}">
          <span class="admin-sd-ann-ts" style="color:${Z.color}">${B(G.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${Z.color}">${Z.icon} ${Z.label}</span>
          <span class="admin-sd-ann-note">${g(J)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${g(G.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function m(k){if(!y.sessionId)return;let I=window.HudConfirm;if(!I){let Z=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:B(k)}),"");Z!=null&&Z.trim()&&o(k,"note",Z.trim());return}let P="highlight",j="",R=document.createElement("div");R.className="admin-sd-ann-modal-body",R.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${B(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(A).map(function(Z){let de=A[Z];return`
              <button type="button" class="admin-sd-ann-modal-lbl${Z==="highlight"?" is-active":""}"
                data-ann-label="${Z}" style="--ann-color:${de.color}">
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
      </div>`,R.addEventListener("click",function(Z){let de=Z.target.closest("[data-ann-label]");de&&(P=de.dataset.annLabel,R.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(ne){ne.classList.toggle("is-active",ne===de)}))});let W=R.querySelector("[data-ann-modal-note]"),G=R.querySelector("[data-ann-modal-counter]");W.addEventListener("input",function(){j=W.value,G.textContent=`${j.length} / 280`}),setTimeout(function(){W&&W.focus()},50),I.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:R,width:460}).then(function(Z){Z&&o(k,P,W.value.trim())})}async function o(k,I,L){if(y.sessionId)try{let P=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:y.sessionId,ts_ms:Math.max(0,Math.round(k)),label:I||"note",note:L||""})});if(!P.ok)throw new Error(`HTTP ${P.status}`);let j=await P.json();j.annotation&&(y.annotations.push(j.annotation),y.annotations.sort(function(R,W){return R.ts_ms-W.ts_ms}),y.activeAnnId=j.annotation.id,r(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(P){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:P.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function a(k){if(k)try{let I=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!I.ok)throw new Error(`HTTP ${I.status}`);y.annotations=y.annotations.filter(function(L){return L.id!==k}),y.activeAnnId===k&&(y.activeAnnId=null),r(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(I){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:I.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function c(k){let I=document.querySelector("[data-sd-timeline-inner]"),L=document.querySelector("[data-sd-ann-hover]");if(!I||!L)return;let P=I.getBoundingClientRect();if(!P.width)return;let j=k.clientX-P.left,R=Math.min(1,Math.max(0,j/P.width)),W=$();if(!W){L.hidden=!0;return}let G=Math.round(R*W);y.hoverTsMs=G,L.hidden=!1,L.style.left=`${(R*100).toFixed(2)}%`,L.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:B(G)})}function f(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),y.hoverTsMs=null}function e(k){if(k.target.closest("[data-sd-ann-marker]"))return;let I=document.querySelector("[data-sd-timeline-inner]");if(!I)return;let L=I.getBoundingClientRect();if(!L.width)return;let P=k.clientX-L.left,j=Math.min(1,Math.max(0,P/L.width)),R=$();R&&m(Math.round(j*R))}async function n(){if(y.sessionId)try{let k=y.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let I=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(I.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!I.ok)throw new Error("HTTP "+I.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function s(k,I){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")y.sessionId&&T(y.sessionId);else if(k==="export"){if(!y.sessionId)return;let L=document.createElement("a");L.href="/admin/sessions/"+encodeURIComponent(y.sessionId)+"/export?format=csv",L.rel="noopener",document.body.appendChild(L),L.click(),L.remove()}else if(k==="replay")n();else if(k==="add-annotation"){let L=$(),P=y.hoverTsMs!=null?y.hoverTsMs:Math.round(L/2);m(P)}}function u(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let I=U();if(!I){y.sessionId=null,_(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}y.sessionId=I,T(I)}function S(){let k=document.getElementById("settings-grid");if(!k)return;let I=document.getElementById(b);I||(k.insertAdjacentHTML("beforeend",x()),I=document.getElementById(b),r()),I&&I.dataset.sdBound!=="1"&&(I.dataset.sdBound="1",I.addEventListener("click",function(L){let P=L.target.closest("[data-sd-ann-del]");if(P){L.stopPropagation(),a(P.dataset.sdAnnDel);return}let j=L.target.closest("[data-sd-ann-marker]");if(j){L.stopPropagation(),y.activeAnnId=j.dataset.sdAnnMarker,r();let de=document.querySelector(`[data-sd-ann-row="${y.activeAnnId}"]`);de&&de.scrollIntoView&&de.scrollIntoView({block:"nearest",behavior:"smooth"});return}let R=L.target.closest("[data-sd-ann-row]");if(R){y.activeAnnId=R.dataset.sdAnnRow,r();return}if(L.target.closest("[data-sd-timeline-inner]")){e(L);return}let G=L.target.closest("[data-sd-action]");if(G){L.preventDefault(),s(G.dataset.sdAction,G);return}let Z=L.target.closest("[data-sd-filter]");Z&&(y.msgFilter=Z.dataset.sdFilter,I.querySelectorAll("[data-sd-filter]").forEach(function(de){de.classList.toggle("is-active",de===Z)}),d())}),I.addEventListener("input",function(L){let P=L.target.closest("[data-sd-search]");P&&(y.msgQuery=P.value||"",d())}),I.addEventListener("mousemove",function(L){L.target.closest("[data-sd-timeline-inner]")&&c(L)}),I.addEventListener("mouseleave",function(L){L.target.closest&&L.target.closest("[data-sd-timeline-inner]")&&f()},!0)),y.sessionId=U(),y.sessionId?T(y.sessionId):_(ServerI18n.t("sessionDetailErrNoSessionSelected")),h||(h=!0,window.addEventListener("hashchange",u))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let I=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(b)&&I.indexOf("/session-detail")!==-1&&S(),window.addEventListener("admin-route-changed",function(L){(L&&L.detail&&L.detail.route)==="session-detail"&&S()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&S()})})})()});var ln=ge(()=>{(function(){"use strict";let b="sec-search-overview";var g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},y=20,h={query:"",scope:"session",blockedOnly:!1,who:"",shown:y,results:[],total:0,loading:!1,searched:!1},A=0;function U(){return'<div id="'+b+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+g(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+g(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+g(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+g(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+g(ServerI18n.t("searchWhoAria"))+'"><option value="">'+g(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+g(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+g(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function F(t){if(!t)return 200;for(var d=0,r=0;r<Math.min(t.length,6);r++)d=d*31+t.charCodeAt(r)&65535;return d%360}function C(t,d){if(!d||!t)return g(t||"");var r=g(t),m=g(d);try{var o=new RegExp("("+m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return r.replace(o,'<mark class="admin-search-hit">$1</mark>')}catch{return r}}function p(t){if(!t)return"\u2014";try{var d=new Date(t);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function M(){var t=h.results;return h.blockedOnly&&(t=t.filter(function(d){return(d.status||"shown")==="blocked"})),h.who&&(t=t.filter(function(d){return(d.nickname||"")===h.who})),t}function D(){var t=document.getElementById("admin-search-count");if(t){if(!h.searched||!h.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function x(){var t=document.querySelector("[data-search-who]");if(t){var d=[];h.results.forEach(function(m){var o=(m.nickname||"").trim();o&&d.indexOf(o)===-1&&d.push(o)}),d.sort();var r=h.who;t.innerHTML='<option value="">'+g(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(m){return'<option value="'+g(m)+'"'+(m===r?" selected":"")+">"+g(m)+"</option>"}).join("")}}function T(){var t=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),r=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var m=function(e){d&&(d.style.display="block",d.textContent=e),r&&(r.hidden=!0)};if(h.loading)return m(ServerI18n.t("searchSearching"));if(!h.searched)return m(ServerI18n.t("searchPromptStart"));var o=M();if(o.length===0)return m(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),r&&(r.hidden=!1);var a=Math.min(o.length,h.shown),c=document.createDocumentFragment();if(o.slice(0,a).forEach(function(e){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+g(p(e.timestamp))+'</span><span class="admin-search-row__text">'+C(e.text||"",h.query)+'</span><span class="admin-search-row__nick">'+g((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+g(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+g(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",c.appendChild(n)}),t.appendChild(c),o.length>a){var f=document.createElement("button");f.type="button",f.className="admin-search-more",f.dataset.searchMore="1",f.textContent=ServerI18n.t("searchMoreLeft",{n:o.length-a}),t.appendChild(f)}}}function N(){D(),x(),T()}async function $(){var t=h.query.trim();if(!t){h.loading=!1,h.searched=!1,h.results=[],h.total=0,N();return}h.loading=!0,N();try{var d="/admin/search?q="+encodeURIComponent(t);if(h.scope==="session"){var r=await B();r&&(d+="&since="+encodeURIComponent(r))}var m=Date.now(),o=await fetch(d,{credentials:"same-origin"}),a=Date.now()-m;if(!o.ok)throw new Error("HTTP "+o.status);var c=await o.json();h.results=Array.isArray(c.results)?c.results:[],h.total=typeof c.total=="number"?c.total:h.results.length,h.shown=y}catch(f){console.error("[admin-search] fetch error:",f),h.results=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:f.message||""}),!1)}finally{h.loading=!1,h.searched=!0,N()}}var E=null;async function B(){if(E!==null)return E;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var d=await t.json();if(d.status==="live"&&d.started_at)return E=new Date(d.started_at*1e3).toISOString(),E}}catch{}return E="",""}function O(){clearTimeout(A),A=setTimeout($,300)}function _(){if(h.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];h.results.forEach(function(o){var a=[o.nickname||"",o.fingerprint||"",o.timestamp||"",o.status||"",o.text||"",o.delivery_reason||""].map(function(c){return'"'+window.AdminUtils.csvSafeText(c).replace(/"/g,'""')+'"'});t.push(a.join(","))});var d=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(d),m=document.createElement("a");m.href=r,m.download="danmu-search-"+(h.query||"export")+".csv",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(r)}}function w(){var t=document.getElementById(b);if(t){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){h.query=d.value,O()}),d.addEventListener("keydown",function(m){m.key==="Enter"&&(clearTimeout(A),h.query=d.value,$())})),t.addEventListener("click",function(m){var o=m.target.closest("[data-search-scope]");if(o){h.scope=o.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(c){c.classList.toggle("is-active",c===o)}),h.query.trim()&&O();return}var a=m.target.closest("[data-search-blocked]");if(a){h.blockedOnly=!h.blockedOnly,a.classList.toggle("is-active",h.blockedOnly),h.shown=y,N();return}if(m.target.closest("[data-search-more]")){h.shown+=y,T();return}}),t.addEventListener("change",function(m){var o=m.target.closest("[data-search-who]");o&&(h.who=o.value||"",h.shown=y,N())});var r=document.getElementById("admin-search-export-btn");r&&r.addEventListener("click",_)}}function v(){var t=document.querySelector(".admin-dash-grid"),d=document.getElementById(b);if(!(!t||!d)){var r=t.dataset.activeLeaf||"dashboard";d.style.display=r==="search"?"":"none"}}function l(){var t=document.getElementById("settings-grid");!t||document.getElementById(b)||(t.insertAdjacentHTML("beforeend",U()),w(),v())}function i(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&l(),v()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",v),document.addEventListener("admin-panel-rendered",function(){l(),v()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})()});var cn=ge(()=>{(function(){"use strict";let b="sec-api-tokens-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},y=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],h=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],A={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function U(e){if(!e)return"\u2014";try{let n=new Date(e);if(isNaN(n.getTime()))return String(e);let s=u=>String(u).padStart(2,"0");return`${n.getFullYear()}-${s(n.getMonth()+1)}-${s(n.getDate())}`}catch{return String(e)}}function F(e){if(!e)return null;try{let n=new Date(e);if(isNaN(n.getTime()))return null;let s=u=>String(u).padStart(2,"0");return`${n.getFullYear()}-${s(n.getMonth()+1)}-${s(n.getDate())} ${s(n.getHours())}:${s(n.getMinutes())}`}catch{return null}}function C(e){let n=Number(e);return isNaN(n)?"0":n.toLocaleString()}function p(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let n=new Date(e.expires_at).getTime(),s=Date.now();if(n<s)return"expired";if(n-s<168*3600*1e3)return"expiring"}catch{}return"active"}function M(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function D(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(n){let s="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?s+=" is-danger":n.startsWith("fire:")?s+=" is-warn":n.startsWith("read:stats")?s+=" is-cyan":s+=" is-success",`<span class="${s}">${g(n)}</span>`}).join(" ")}function x(e){let n="admin-ui-dot admin-at-dot";return e==="active"?n+=" is-success":e==="expiring"?n+=" is-warn":e==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function T(){let e=y.map(function(s){let u=s.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${s.badge==="red"?"danger":s.badge==="amber"?"warn":s.badge==="green"?"success":s.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${s.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${s.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${g(s.id)}"
          >
          <span class="${k}">${g(s.badgeTxt)}</span>
          <span class="admin-at-scope-label">${g(ServerI18n.t(s.labelKey))}</span>
          ${u}
        </label>
      `}).join(""),n=h.map(function(s){let u=s.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${s.days!==null?String(s.days):"null"}" ${u} class="sr-only">
          <span>${g(ServerI18n.t(s.labelKey))}</span>
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
    `}async function N(){O(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json();A.tokens=n.tokens||n||[],w()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{O(!1)}}async function $(e){A.creating=!0,_(!0),d();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok){let S=await n.json().catch(()=>({}));throw new Error(S.error||S.message||`HTTP ${n.status}`)}let s=await n.json(),u=s.token||s.raw_token||s.access_token||null;A.newTokenRaw=u,v(u),i(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{A.creating=!1,_(!1)}}async function E(e,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${g(n||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!u.ok){let S=await u.json().catch(()=>({}));throw new Error(S.error||S.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:u.message||""}),!1)}}async function B(e,n){try{let s=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!s.ok){let u=await s.json().catch(()=>({}));throw new Error(u.error||u.message||`HTTP ${s.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(s){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:s.message||""}),!1)}}function O(e){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!e)}function _(e){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=e,n.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function w(){let e=A.tokens,n=document.querySelector("[data-at-empty]"),s=document.querySelector("[data-at-table-wrap]"),u=document.querySelector("[data-at-tbody]");if(!(!n||!s||!u)){if(!e||e.length===0){if(!n.firstElementChild&&window.AdminEmpty){let S=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});S.dataset.emptyKind="api-tokens",n.appendChild(S)}n.hidden=!1,s.hidden=!0;return}n.hidden=!0,s.hidden=!1,u.innerHTML=e.map(function(S){let k=p(S),I=x(k),L=S.scopes||S.scope||[],P=Array.isArray(L)?L:String(L).split(",").map(de=>de.trim()).filter(Boolean),R=M(S.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",W=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",G=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",Z=S.last_used_at?`${F(S.last_used_at)||U(S.last_used_at)}<br><span class="admin-at-ip">${g(S.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${g(S.id||S.token_id||"")}">
          <td class="admin-at-td-label">
            ${I}
            <span class="admin-at-label-text">${g(S.label||S.name||"\u2014")}</span>
            ${R}${W}${G}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${g(S.prefix||S.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(P)}</div>
          </td>
          <td class="admin-at-td-used">${Z}</td>
          <td class="admin-at-td-usage">${C(S.usage_count||S.use_count)}</td>
          <td class="admin-at-td-created">${U(S.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${g(S.id||S.token_id||"")}"
              data-token-enabled="${S.enabled===!1?"0":"1"}"
              title="${S.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${S.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${g(S.id||S.token_id||"")}"
              data-token-label="${g(S.label||S.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function v(e){let n=document.getElementById("adminAtSuccessBanner"),s=document.getElementById("adminAtTokenDisplay"),u=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),s&&e&&(s.value=e),u&&(u.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let e=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),n&&(n.style.opacity=""),A.newTokenRaw=null}function i(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(u){u.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let u=n.closest(".admin-at-expiry-btn");u&&u.classList.add("is-active")}let s=document.getElementById("adminAtAdminWarn");s&&(s.hidden=!0),d()}function t(e){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=e)}function d(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function r(){let e=document.getElementById("adminAtLabel"),n=e?e.value.trim():"",s=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(I){s.push(I.value)});let u=document.querySelector("input[name='adminAtExpiry']:checked"),S=u?u.value:"90",k=S==="null"?null:parseInt(S,10);return{label:n,scopes:s,expiry_days:k}}function m(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function o(e){if(e.preventDefault(),A.creating)return;d();let n=r(),s=m(n);if(s){t(s);return}$(n)}function a(){let e=A.newTokenRaw;if(!e)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let s=document.getElementById("adminAtTokenDisplay");s&&(s.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function c(){let e=document.getElementById(b);if(!e)return;e.addEventListener("click",function(S){let k=S.target.closest("[data-at-action]");if(k){let L=k.dataset.atAction;if(L==="revoke"){let P=k.dataset.tokenId,j=k.dataset.tokenLabel;E(P,j)}else if(L==="toggle"){let P=k.dataset.tokenId,j=k.dataset.tokenEnabled==="1";B(P,!j)}else L==="copy-token"&&a();return}let I=S.target.closest(".admin-at-expiry-btn");I&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(L){L.classList.remove("is-active")}),I.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let S=document.getElementById("adminAtAdminWarn");S&&(S.hidden=!n.checked)});let s=document.getElementById("adminAtCreateForm");s&&s.addEventListener("submit",o);let u=document.querySelector("input[name='adminAtExpiry'][value='90']");if(u){let S=u.closest(".admin-at-expiry-btn");S&&S.classList.add("is-active")}}function f(){let e=document.getElementById("settings-grid");!e||document.getElementById(b)||(e.insertAdjacentHTML("beforeend",T()),c(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&f()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&f()})})()});var un=ge(()=>{(function(){"use strict";let b="sec-wcag-overview",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function y(i){let t=i.replace(/^#/,""),d=t.length===3?t.split("").map(function(r){return r+r}).join(""):t;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function h(i){return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)}function A(i){let t=y(i);return .2126*h(t[0])+.7152*h(t[1])+.0722*h(t[2])}function U(i,t){let d=A(i),r=A(t),m=Math.max(d,r),o=Math.min(d,r);return(m+.05)/(o+.05)}function F(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA-large":"fail"}function C(i,t){let d=A(t),r=[],m=y(i);for(let o=.05;o<=.6&&r.length<3;o+=.05){let c="#"+m.map(function(e){return Math.min(1,e+o)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),f=U(c,t);f>=4.5&&r.push({hex:c,ratio:f})}return r}let p=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",x={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function T(){let i=p.filter(function(r){return F(U(r.fg,r.bg))!=="fail"}).length,t=p.length-i,d=Math.round(i/p.length*100);return`
      <div id="${b}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${N("PASS AA+",i,ServerI18n.t("wcagStatPassLabel"))}
              ${N("BELOW AA",t,ServerI18n.t("wcagStatFailLabel"))}
              ${N("PAIRS",p.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",d+"%",ServerI18n.t("wcagStatRateLabel"))}
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
              ${p.map(function(r,m){return $(r,m)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${E()}
          </div>
        </div>
      </div>`}function N(i,t,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${g(String(t))}</span>
        <span class="hud-stat-tile-label">${g(d)}</span>
      </div>`}function $(i,t){let d=U(i.fg,i.bg),r=F(d),m=x[r],o=ServerI18n.t(i.nameKey),a=m.labelKey?ServerI18n.t(m.labelKey):m.label,c=r==="fail"?ServerI18n.t("wcagWarnFail"):r==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${g(ServerI18n.t("wcagPairAriaLabel",{name:o,ratio:d.toFixed(2),level:a.slice(2)}))}">
        <span class="admin-wcag-pair-name">${g(o)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${g(i.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${g(i.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${g(i.fg)}">${g(i.fg)} / ${g(i.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${m.mod}">${a}</span>
        ${c?`<span class="admin-wcag-warn">\u26A0 ${c}</span>`:""}
      </div>`}function E(){let i=U(M.fg,M.bg),t=F(i),d=x[t],r=d.labelKey?ServerI18n.t(d.labelKey):d.label,m=C(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${B(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${B(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${g(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${g(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${g(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${g(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${i.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${r}</span>
      </div>

      <div class="admin-wcag-levels">
        ${O(ServerI18n.t("wcagCheckAANormal"),i>=4.5)}
        ${O(ServerI18n.t("wcagCheckAALarge"),i>=3)}
        ${O(ServerI18n.t("wcagCheckAAANormal"),i>=7)}
        ${O(ServerI18n.t("wcagCheckAAALarge"),i>=4.5)}
      </div>

      ${m.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${m.map(function(o){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${g(o.hex)}"
                title="${g(ServerI18n.t("wcagSuggApplyTitle",{ratio:o.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${g(M.bg)};color:${g(o.hex)}">${g(o.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${o.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function B(i,t,d){let r="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${r}">${g(i)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${g(t)}"></span>
          <input type="text" id="${r}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${g(ServerI18n.t("wcagHexAria",{label:i}))}"
            value="${g(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function O(i,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${g(i)}</span>
    </div>`}function _(){let i=document.getElementById(b);i&&(i.addEventListener("click",function(t){let d=t.target.closest("[data-wcag-pair-idx]");if(d){w(d);return}let r=t.target.closest("[data-wcag-sugg]");r&&(M.fg=r.dataset.wcagSugg,v())}),i.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let d=t.target.closest("[data-wcag-pair-idx]");d&&(t.preventDefault(),w(d))}),i.addEventListener("input",function(t){let d=t.target.closest("[data-wcag-tester-fg]"),r=t.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(M.fg=d.value.toUpperCase(),v()),r&&/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(M.bg=r.value.toUpperCase(),v())}))}function w(i){let t=p[parseInt(i.dataset.wcagPairIdx,10)];t&&(M.fg=t.fg,M.bg=t.bg,v())}function v(){let i=document.querySelector("[data-wcag-tester]");i&&(i.innerHTML=E())}function l(){let i=document.getElementById("settings-grid");!i||document.getElementById(b)||(i.insertAdjacentHTML("beforeend",T()),_())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(b)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(b)&&l()})})()});var mn=ge(()=>{(function(){"use strict";let b="danmu.onboarding.done",g="admin-onboarding-root",U=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],F=0,C=!1;window.AdminOnboarding={start:T,isDone:function(){try{return!!localStorage.getItem(b)}catch{return!1}},reset:function(){try{localStorage.removeItem(b)}catch{}}};let p=new Set(["live","dashboard"]);function M(){if(C||window.AdminOnboarding.isDone()||!p.has(D()))return;let i=()=>!!document.querySelector(".admin-session-banner-live");i()||setTimeout(()=>{C||window.AdminOnboarding.isDone()||i()||p.has(D())&&T()},1200)}function D(){let i=document.querySelector(".admin-dash-grid");return i&&i.dataset.activeRoute||"live"}function x(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&T()}function T(){C||(C=!0,F=0,O())}function N(i){if(!C)return;C=!1,document.body.removeEventListener("click",E),document.removeEventListener("keydown",B),window.removeEventListener("resize",_);let t=document.getElementById(g);if(t&&t.remove(),i)try{localStorage.setItem(b,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function $(){F<U.length-1?(F++,_()):N(!0)}function E(i){let t=i.target.closest("[data-ob-action]");t&&(i.stopPropagation(),t.dataset.obAction==="next"?$():t.dataset.obAction==="skip"&&N(!1))}function B(i){C&&i.key==="Escape"&&(i.preventDefault(),N(!1))}function O(){let i=document.getElementById(g);i&&i.remove();let t=document.createElement("div");t.id=g,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",E),document.addEventListener("keydown",B),window.addEventListener("resize",_),_()}function _(){let i=document.getElementById(g);if(!i)return;let t=U[F],d=U.length,r=v(t.target),m=window.innerWidth,o=window.innerHeight,a="";r?a='<div class="admin-ob-spot" style="left:'+(r.left-8)+"px;top:"+(r.top-8)+"px;width:"+(r.width+16)+"px;height:"+(r.height+16)+'px;"></div>':a='<div class="admin-ob-scrim"></div>';let c=(m-360)/2,f=o/2-110,e="none";if(r){let S=r.left+r.width/2;t.side==="top"?(c=S-360/2,f=r.top-16,e="bottom"):t.side==="right"?(c=r.right+16+8,f=r.top,e="left"):(c=S-360/2,f=r.bottom+16+8,e="top"),c=Math.max(16,Math.min(m-360-16,c))}let n=U.map(function(S,k){return'<span class="admin-ob-progress-item'+(k===F?" is-current":"")+'">'+(k+1)+" "+l(ServerI18n.t(S.labelKey))+"</span>"+(k<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");i.innerHTML=a+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+c+"px;top:"+f+'px"><div class="admin-ob-count">'+(F+1)+" / "+d+'</div><div class="admin-ob-title">'+l(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(F===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let s=i.querySelector(".admin-ob-bubble");if(!s||!r)return;let u=s.offsetHeight;if(t.side==="top")s.style.top=Math.max(16,r.top-16-8-u)+"px";else if(f+u>o-16){let S=r.top-16-8-u;S>=16?(s.style.top=S+"px",s.setAttribute("data-arrow","bottom")):(s.style.top=Math.max(16,o-u-16)+"px",s.setAttribute("data-arrow","none"))}w(s,r)}function w(i,t){let d=i.getAttribute("data-arrow");if(d==="none")return;let r=i.getBoundingClientRect(),m=d==="top"||d==="bottom",o=m?t.left+t.width/2-r.left:t.top+t.height/2-r.top,a=m?r.width:r.height,c=Math.max(16,Math.min(a-32,o-8));i.style.setProperty("--ob-arrow",c+"px")}function v(i){if(!i)return null;let t=document.querySelector(i);if(!t)return null;let d=t.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function l(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",x),x(),window.addEventListener("hashchange",function(){p.has(D())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var yn=ge(()=>{var zi=be(Ze()),Vi=be(et()),Ji=be(tt()),Yi=be(nt()),Qi=be(at()),Xi=be(it()),Zi=be(st()),es=be(ot()),ts=be(rt()),ns=be(dt()),as=be(lt()),is=be(ct()),ss=be(ut()),os=be(mt()),rs=be(pt()),ds=be(vt()),ls=be(ft()),cs=be(ht()),us=be(gt()),ms=be(bt()),ps=be(yt()),vs=be(wt()),fs=be(St()),hs=be(kt()),gs=be(It()),bs=be(Tt()),ys=be(_t()),ws=be(Et()),Ss=be($t()),ks=be(Lt()),Is=be(xt()),Ts=be(At()),_s=be(Ct()),Es=be(Bt()),$s=be(Ft()),Ls=be(Dt()),xs=be(Mt()),As=be(Nt()),Cs=be(Pt()),Bs=be(Rt()),Fs=be(Ot()),Ds=be(qt()),Ms=be(Ht()),Ns=be(jt()),Ps=be(Ut()),Rs=be(Kt()),Os=be(Wt()),qs=be(Gt()),Hs=be(zt()),js=be(Vt()),Us=be(Jt()),Ks=be(Yt()),Ws=be(Qt()),Gs=be(Xt()),zs=be(Zt()),Vs=be(en()),Js=be(tn()),Ys=be(nn()),Qs=be(an()),Xs=be(sn()),Zs=be(on()),eo=be(rn()),to=be(dn()),no=be(ln()),ao=be(cn()),io=be(un()),so=be(mn())});yn();})();
