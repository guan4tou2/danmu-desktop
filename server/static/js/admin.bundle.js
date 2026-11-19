/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var yn=Object.create;var at=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var ye=(g,h)=>()=>{try{return h||g((h={exports:{}}).exports,h),h.exports}catch(u){throw h=0,u}};var _n=(g,h,u,$)=>{if(h&&typeof h=="object"||typeof h=="function")for(let B of kn(h))!Tn.call(g,B)&&B!==u&&at(g,B,{get:()=>h[B],enumerable:!($=Sn(h,B))||$.enumerable});return g};var Se=(g,h,u)=>(u=g!=null?yn(In(g)):{},_n(h||!g||!g.__esModule?at(u,"default",{value:g,enumerable:!0}):u,g));var it=ye(()=>{(function(){"use strict";var g=4,h=2500,u=3e3,$=Object.create(null);function B(){return Date.now()}function A(_,x){return(x?"ok:":"err:")+_}function G(_,x){return"var("+_+", "+x+")"}function O(_){return _?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function R(_){for(var x=Array.prototype.slice.call(_.children);x.length>g;){var T=x.shift();T&&T.parentNode&&T.parentNode.removeChild(T)}}function N(_,x){_.remaining=x,_.startedAt=B(),_.timer=setTimeout(function(){y(_)},x)}function D(_){_.timer&&(clearTimeout(_.timer),_.timer=null,_.remaining=Math.max(600,_.remaining-(B()-_.startedAt)))}function C(_){_.timer||!_.el.parentNode||N(_,_.remaining)}function y(_){clearTimeout(_.timer),_.timer=null,_.key&&$[_.key]===_&&delete $[_.key];var x=_.el;!x||!x.parentNode||(x.style.opacity="0",x.style.transform="translateX(8px)",setTimeout(function(){x.parentNode&&x.parentNode.removeChild(x)},180))}function M(_,x){var T=document.getElementById("toast-container");if(T){x=x!==!1;var H=A(String(_),x),E=$[H];if(E&&E.el.parentNode&&B()-E.startedAt<h){E.count+=1,E.countEl&&(E.countEl.textContent="\xD7"+E.count,E.countEl.hidden=!1),D(E),C(E);return}var b=x?G("--color-ink-success","#639922"):G("--color-ink-error","#e24b4a"),c=G("--color-surface","#ffffff"),l=G("--color-text-primary","#1a1a1a"),r=G("--color-border-soft","rgba(0,0,0,.12)"),e=document.createElement("div");e.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+c,"color:"+l,"border:1px solid "+r,"border-left:3px solid "+b,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var f=document.createElement("span");f.style.cssText="display:inline-flex;color:"+b+";flex:0 0 auto",f.innerHTML=O(x);var m=document.createElement("span");m.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",m.textContent=_;var w=document.createElement("span");w.hidden=!0,w.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",e.appendChild(f),e.appendChild(m),e.appendChild(w),T.appendChild(e),R(T),requestAnimationFrame(function(){e.style.opacity="1",e.style.transform="translateX(0)"});var v={key:H,el:e,countEl:w,count:1,timer:null,remaining:u,startedAt:B()};$[H]=v,N(v,u),e.addEventListener("mouseenter",function(){D(v)}),e.addEventListener("mouseleave",function(){C(v)}),e.addEventListener("focusin",function(){D(v)}),e.addEventListener("focusout",function(){C(v)})}}window.showToast=M})()});var st=ye(()=>{(function(){"use strict";var g="admin-details-open-state";function h(){try{return JSON.parse(localStorage.getItem(g))||{}}catch{return{}}}function u(E){try{localStorage.setItem(g,JSON.stringify(E))}catch{}}var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function B(E){return E==null?"":String(E).replace(/[&<>"']/g,function(b){return $[b]})}function A(){var E=document.querySelector("script[nonce]");return E&&E.nonce||""}function G(E,b){var c=A();return"<style"+(E?' id="'+B(E)+'"':"")+(c?' nonce="'+B(c)+'"':"")+">"+(b||"")+"</style>"}var O='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',R=[],N=null;function D(E){if(!E)return!1;for(var b=E,c=null;b&&b!==document.documentElement;c=b,b=b.parentElement)if(b.style&&b.style.display==="none"||b.tagName==="DETAILS"&&!b.open&&!(c&&c.tagName==="SUMMARY"))return!1;return!!(E.offsetParent||E.getClientRects().length)}function C(){var E=document.hidden;R.forEach(function(b){var c=typeof b.el=="function"?b.el():b.el,l=!E&&D(c);if(l&&!b.timer){if(b.immediate!==!1)try{b.tick()}catch{}b.timer=setInterval(b.tick,b.intervalMs)}else!l&&b.timer&&(clearInterval(b.timer),b.timer=0)})}function y(E){var b={el:E.el,intervalMs:E.intervalMs,tick:E.tick,immediate:E.immediate,timer:0};return R.push(b),N||(N=new MutationObserver(function(){C()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",C),document.addEventListener("visibilitychange",C),document.addEventListener("admin-panel-rendered",C)),C(),function(){b.timer&&clearInterval(b.timer);var l=R.indexOf(b);l!==-1&&R.splice(l,1)}}function M(E){let b=document.createElement("textarea");b.value=E,b.setAttribute("readonly",""),b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select();let c=!1;try{c=!!document.execCommand("copy")}catch{c=!1}return document.body.removeChild(b),c}function _(E,b){let c=e=>window.ServerI18n?window.ServerI18n.t(e):e,l=e=>(window.showToast&&window.showToast(e?b||c("sohCopied"):c("sohCopyFailed"),e),e);if(!E)return Promise.resolve(l(!1));let r=navigator.clipboard;return r&&typeof r.writeText=="function"?r.writeText(E).then(()=>l(!0),()=>l(M(E))):Promise.resolve(l(M(E)))}let x=/^[=+\-@\t\r\n]/;function T(E){let b=E==null?"":String(E);return typeof E=="string"&&x.test(b)?"'"+b:b}function H(E){let b=T(E);return/[",\r\n]/.test(b)?'"'+b.replace(/"/g,'""')+'"':b}window.AdminUtils={csvCell:H,csvSafeText:T,copyText:_,DETAILS_STATE_KEY:g,loadDetailsState:h,saveDetailsState:u,escapeHtml:B,cspNonce:A,styleTag:G,closeIcon:O,pollWhileVisible:y}})()});var ot=ye(()=>{(function(){"use strict";function g(h,u,$,B){let A=h.querySelector("[data-route-breadcrumb]");if(!A)return;let G=Array.from(h.querySelectorAll(".admin-dash-nav-row[data-route]")),O=G.find(T=>T.dataset.route===u)||G.find(T=>T.dataset.route===$);if(!O){A.replaceChildren(),A.hidden=!0;return}let R="",N=O.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){R=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let C=(O.querySelector("[data-i18n]")||O.querySelector("span:nth-child(2)")||O).textContent.trim(),y=B?h.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,M=y?(y.querySelector(".admin-tabs-btn-label")||y).textContent.trim():"",_=[R===C?"":R,C,M].filter(Boolean),x=document.createDocumentFragment();_.forEach((T,H)=>{if(H){let c=document.createElement("span");c.className="admin-dash-breadcrumb-sep",c.setAttribute("aria-hidden","true"),c.textContent="\u203A",x.appendChild(c)}let E=document.createElement("span"),b=H===_.length-1;E.className="admin-dash-breadcrumb-item"+(b?" is-current":""),b&&E.setAttribute("aria-current","page"),E.textContent=T,x.appendChild(E)}),A.replaceChildren(x),A.hidden=_.length===0}window.AdminBreadcrumb={render:g}})()});var rt=ye(()=>{(function(g){"use strict";let h={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function u(M){return Array.isArray(M.sections)?M.sections:M.section?[M.section]:[]}function $(M){return!!h[M]}function B(M){return h[M]||null}let A={moderation:{filters:"blacklist",fingerprints:"bans"}},G={viewer:{themes:"sec-themes",defaults:"sec-viewer-config-defaults",fields:"sec-viewer-config-defaults",page:"sec-viewer-theme",limits:"sec-viewer-config-limits"}};function O(M,_){if(!_)return null;let x=G[M]&&G[M][_];if(x)return{tab:null,section:x};let T=h[M];if(!T)return null;let H=T.tabs.find(E=>E.folds&&E.folds[_]);return H?{tab:H.slug,section:H.folds[_]}:null}function R(M,_){let x=h[M];if(!x)return null;let T=c=>x.tabs.some(l=>l.slug===c),H=O(M,_);if(H)return H.tab;let E=A[M]?.[_];if(E&&T(E))return E;if(_&&T(_))return _;let b=g.AdminRouter?.tabMemory?.get?.(M);return b&&T(b)?b:x.defaultTab}function N(M,_,x){let T=h[M];if(!T)return null;let H=document.createElement("div");return H.className="admin-tabs-strip",H.dataset.nav=M,H.setAttribute("role","tablist"),H.setAttribute("aria-label",M+" tabs"),T.tabs.forEach(E=>{let b=document.createElement("button");b.type="button",b.className="admin-tabs-btn"+(E.slug===_?" is-active":""),b.dataset.nav=M,b.dataset.tab=E.slug,b.setAttribute("role","tab"),b.setAttribute("aria-selected",E.slug===_?"true":"false");let c=document.createElement("span");c.className="admin-tabs-btn-label",c.textContent=E.labelKey?ServerI18n.t(E.labelKey):E.label,b.appendChild(c);let l=document.createElement("span");l.className="admin-tabs-btn-count",l.dataset.tabCount=E.slug,l.textContent=D[M]&&D[M][E.slug]?D[M][E.slug]:"",b.appendChild(l),b.addEventListener("click",()=>{typeof x?.onSelect=="function"&&x.onSelect(E.slug)}),H.appendChild(b)}),H}let D={};function C(M,_,x){if(!h[M])return;D[M]=D[M]||{},D[M][_]=x==null?"":String(x);let T=document.querySelector('.admin-tabs-strip[data-nav="'+M+'"] [data-tab-count="'+_+'"]');T&&(T.textContent=D[M][_])}function y(M,_,x){let T=h[M];!T||!x||T.tabs.forEach(H=>{let E=H.slug===_,b=new Map;u(H).forEach(c=>{let l=x.querySelector("#"+c);if(!l)return;l.style.display=E?"":"none";let r=b.get(l.parentElement);E&&H.folds&&r&&r.nextElementSibling!==l&&r.after(l),b.set(l.parentElement,l)})})}g.AdminTabs={hasTabsFor:$,getConfig:B,foldFor:O,resolveActiveTab:R,renderTabStrip:N,applyTabSectionVisibility:y,setTabCount:C}})(window)});var lt=ye(()=>{(function(g,h){"use strict";let u="data-quick-action-host",$="admin-quick-action-bar";function B(N){if(N?.host instanceof HTMLElement)return N.host;let D=h.querySelector(".admin-dash-main");if(!D)return h.body;let C=D.querySelector(`[${u}]`);if(!C){C=h.createElement("div"),C.setAttribute(u,"");let y=D.querySelector(".admin-dash-topbar"),_=D.querySelector("[data-admin-tabs-host]")||y;_&&_.parentNode?_.insertAdjacentElement("afterend",C):D.prepend(C)}return C}function A(N,D){typeof g.showToast=="function"&&g.showToast(N,D!==!1)}function G({label:N,undoLabel:D,onUndo:C,windowMs:y}){let M=B(),_=M.querySelector("."+$);_&&_.remove();let x=h.createElement("div");x.className=$,x.setAttribute("role","status"),x.setAttribute("aria-live","polite");let T=h.createElement("span");T.className=$+"-text",T.textContent="\u2713 "+N,x.appendChild(T);let H=h.createElement("button");H.type="button",H.className=$+"-undo",H.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),x.appendChild(H);let E=()=>{x.classList.add("is-leaving"),setTimeout(()=>x.remove(),200)},b=setTimeout(E,y||5e3);return H.addEventListener("click",async()=>{clearTimeout(b),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await C(),A(ServerI18n.t("qaUndone"),!0)}catch(c){A(ServerI18n.t("qaUndoFailed",{msg:c?.message||String(c)}),!1)}finally{E()}}),M.appendChild(x),requestAnimationFrame(()=>x.classList.add("is-entering")),x}function O(N){if(!N||typeof N!="object")return;let D=N.label||ServerI18n.t("qaDone");N.toast!==!1&&A(D,!0),N.undo&&typeof N.undo.run=="function"&&G({label:D,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function R(){h.querySelectorAll("."+$).forEach(N=>N.remove())}g.AdminQuickAction={fire:O,dismissAll:R}})(window,document)});var dt=ye(()=>{(function(){"use strict";let g="admin-hud-modal-root",h=null,u=null,$='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function B(){let R=document.getElementById(g);return R?Array.prototype.slice.call(R.querySelectorAll($)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function A(R){let N=document.getElementById(g);if(N&&N.remove(),h&&(h(R),h=null),document.removeEventListener("keydown",G),u&&typeof u.focus=="function")try{u.focus()}catch{}u=null}function G(R){if(R.key==="Escape"){R.preventDefault(),A(!1);return}if(R.key==="Tab"){let N=B();if(!N.length){R.preventDefault();return}let D=N[0],C=N[N.length-1],y=document.activeElement;R.shiftKey?(y===D||!N.includes(y))&&(R.preventDefault(),C.focus()):(y===C||!N.includes(y))&&(R.preventDefault(),D.focus())}}function O(R){return new Promise(N=>{h&&A(!1),h=N,u=document.activeElement;let{icon:D="\u26A0",title:C=ServerI18n.t("hudConfirmTitle"),subtitle:y="",severity:M="warn",body:_="",titleText:x,bodyText:T,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:E=ServerI18n.t("cancel"),width:b=480}=R||{},c=document.createElement("div");c.id=g,c.className=`admin-hud-modal admin-hud-modal--${M}`,c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-hud-modal-title");let l=y?`<div class="admin-hud-modal__subtitle">${y}</div>`:"",r=typeof _=="string"?_:"",e=typeof _!="string"&&_&&_.nodeType;if(c.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${b}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${C}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${r}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${E}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,x!=null){let m=c.querySelector(".admin-hud-modal__title");m&&(m.textContent=String(x))}if(T!=null){let m=c.querySelector("[data-modal-body]");m&&(m.textContent=String(T))}if(e){let m=c.querySelector("[data-modal-body]");m.innerHTML="",m.appendChild(_)}c.addEventListener("click",function(m){let w=m.target.closest("[data-modal-action]");w&&(m.stopPropagation(),A(w.dataset.modalAction==="confirm"))}),document.body.appendChild(c),document.addEventListener("keydown",G);let f=M==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{c.querySelector(`.admin-hud-modal__btn--${f}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:O}})()});var ct=ye(()=>{(function(){"use strict";var g=8,h=30;function u(M,_){return window.ServerI18n?window.ServerI18n.t(M,_):M}function $(M,_){return M?M.length>_?M.slice(0,_)+"\u2026":M:""}function B(M){return u(M==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function A(M,_){return M==="keyword"?$(_,h):_.slice(0,g)}async function G(M,_,x){if(!_)return{ok:!1,error:"empty-value"};try{var T={type:M==="keyword"?"keyword":"fingerprint",value:_};x&&(T.reason=x);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(E){return{ok:!1,error:E&&E.message||"network"}}}async function O(M,_,x){if(!M)return{ok:!1,error:"empty-fingerprint"};var T=parseInt(_||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:M,duration_s:T,reason:x||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(E){return{ok:!1,error:E&&E.message||"network"}}}async function R(M){if(!M)return{ok:!1,error:"empty-message-id"};try{var _=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:M})});return _.ok?{ok:!0}:{ok:!1,error:"HTTP "+_.status}}catch(x){return{ok:!1,error:x&&x.message||"network"}}}function N(M,_){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:u("lfBlockTitle"),subtitle:u("cfmSubBlockFuture"),severity:"danger",bodyText:u("blockConfirm").replace("{label}",B(M)).replace("{display}",A(M,_)),confirmLabel:u("lfBlockTitle")}):(window.showToast&&window.showToast(u("blockFailed"),!1),Promise.resolve(!1))}function D(M,_,x){window.showToast&&window.showToast(M?u(_,x||{}):u("blockFailed"),!!M)}async function C(M,_){if(!M||(_=_||{},!_.skipConfirm&&!await N("keyword",M)))return!1;var x=await G("keyword",M);return D(x.ok,"blockFallback",{label:B("keyword"),display:A("keyword",M)}),x.ok}async function y(M,_){if(!M||(_=_||{},!_.skipConfirm&&!await N("fingerprint",M)))return!1;var x=await G("fingerprint",M,_.reason);return D(x.ok,"blockFallback",{label:B("fingerprint"),display:A("fingerprint",M)}),x.ok}window.AdminModeration={callBlock:G,banFingerprint:O,recall:R,blockKeyword:C,blockFingerprint:y}})()});var ut=ye(()=>{(function(){"use strict";function h(O){let R=document.createElement("div");return R.className="admin-skel-slow",R.hidden=!0,R.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",O.appendChild(R),setTimeout(function(){R.isConnected&&(R.hidden=!1)},3e3),O}function u(O,R){let N=document.createElement("div");if(N.className="admin-skel "+(O||""),R)for(let D in R)N.style[D]=R[D];return N}function $({rows:O=8}={}){let R=document.createElement("div");R.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{N.appendChild(u("admin-skel-bar",{width:D+"px",height:"10px"}))}),R.appendChild(N);for(let D=0;D<O;D++){let C=document.createElement("div");C.className="admin-skel-list__row",C.appendChild(u("admin-skel-circle",{width:"24px",height:"24px"}));let y=document.createElement("div");y.className="admin-skel-list__col",y.appendChild(u("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),y.appendChild(u("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),C.appendChild(y),C.appendChild(u("admin-skel-bar",{width:"60px",height:"10px"})),R.appendChild(C)}return h(R)}function B({cols:O=4}={}){let R=document.createElement("div");R.className="admin-skel-stats",R.style.gridTemplateColumns=`repeat(${O}, 1fr)`;for(let N=0;N<O;N++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(u("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(u("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(u("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(u("admin-skel-bar",{width:"90px",height:"8px"})),R.appendChild(D)}return h(R)}function A(){let O=document.createElement("div");O.className="admin-skel-card admin-skel-chart";let R=document.createElement("div");R.className="admin-skel-chart__head",R.appendChild(u("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",R.appendChild(N),R.appendChild(u("admin-skel-bar",{width:"80px",height:"10px"})),O.appendChild(R);let D=document.createElement("div");D.className="admin-skel-chart__body";let C=document.createElement("div");C.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>C.appendChild(u("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(C);let y=document.createElement("div");return y.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(_=>y.appendChild(u("admin-skel-bar admin-skel-chart__bar",{height:_+"%"}))),D.appendChild(y),O.appendChild(D),h(O)}function G(O,R){let N={listRows:$,statsTiles:B,chart:A}[O];return N?N(R||{}).outerHTML:""}window.AdminSkeletons={listRows:$,statsTiles:B,chart:A,html:G}})()});var mt=ye(()=>{(function(){"use strict";let g={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},h={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:g.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:g.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:g.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:g.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:g.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:g.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:g.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:g.cyan}};function u(B){let{icon:A="\xB7",title:G="",desc:O="",accent:R=g.cyan,ctaAccent:N,actionLabel:D,action:C,extra:y}=B||{},M=document.createElement("div");M.className="admin-empty",M.dataset.empty="1",M.style.setProperty("--admin-empty-accent",R),N&&M.style.setProperty("--admin-empty-cta",N);let _=document.createElement("div");if(_.className="admin-empty__icon",_.textContent=A,M.appendChild(_),G){let x=document.createElement("div");x.className="admin-empty__title",x.textContent=G,M.appendChild(x)}if(O){let x=document.createElement("div");x.className="admin-empty__desc",x.textContent=O,M.appendChild(x)}if(D){let x=document.createElement("button");x.type="button",x.className="admin-empty__btn",x.textContent=D,typeof C=="function"&&x.addEventListener("click",C),M.appendChild(x)}if(y){let x=document.createElement("div");x.className="admin-empty__extra",typeof y=="string"?x.innerHTML=y:x.appendChild(y),M.appendChild(x)}return M}function $(B){let A=h[B];if(!A)return u({title:ServerI18n.t("emptyNoData"),desc:""});let G=Object.assign({},A,{title:A.titleKey?ServerI18n.t(A.titleKey):A.title,desc:A.descKey?ServerI18n.t(A.descKey):A.desc,actionLabel:A.actionLabelKey?ServerI18n.t(A.actionLabelKey):A.actionLabel});return u(G)}window.AdminEmpty={render:$,renderCustom:u,PRESETS:h}})()});var pt=ye(()=>{(function(){"use strict";var g=8;function h(G){return G?String(G).slice(0,g):""}function u(G){if(!G||typeof G!="object")return{nickname:"",fp:"",ip:""};var O=G.fingerprint||G.fp||G.hash||"",R=G.clientIp||G.client_ip||G.ip||"",N=G.nickname||G.nick||"";return{nickname:String(N||""),fp:String(O||""),ip:String(R||"")}}function $(G){if(!G||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var O=new TextEncoder().encode(String(G));return window.crypto.subtle.digest("SHA-256",O).then(function(R){var N=Array.from(new Uint8Array(R));return N.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function B(G){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var O=document.getElementById("sec-fingerprints");if(O&&!O.open&&(O.open=!0),O)try{O.scrollIntoView({behavior:"smooth",block:"start"})}catch{}$(G).then(function(R){if(R)var N=0,D=setInterval(function(){N+=1;var C=document.querySelector('[data-fp-hash="'+R+'"]');if(C){clearInterval(D),C.classList.add("admin-identity-flash"),setTimeout(function(){C.classList.remove("admin-identity-flash")},2e3);try{C.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(D)},250)})}function A(G){G=G||{};var O=G.nickname||"",R=G.fp||"",N=G.ip||"",D=!!G.compact,C=typeof G.onNicknameClick=="function"?G.onNicknameClick:null,y=typeof G.onFpClick=="function"?G.onFpClick:B,M=document.createElement("span");M.className="admin-identity-row";var _;if(C?(_=document.createElement("button"),_.type="button",_.className="admin-identity-nick is-clickable",_.addEventListener("click",function(c){c.stopPropagation(),C(O)})):(_=document.createElement("span"),_.className="admin-identity-nick"),O)_.textContent="@"+O;else{var x="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var T=ServerI18n.t("anonymousPlaceholder");T&&T!=="anonymousPlaceholder"&&(x=T)}}catch{}_.textContent="@"+x,_.classList.add("is-guest")}if(O&&(_.title=O),M.appendChild(_),R){var H;if(y?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(c){c.stopPropagation(),y(R)})):(H=document.createElement("span"),H.className="admin-identity-fp"),R==="new"){var E=document.createElement("span");E.className="admin-identity-dot",H.appendChild(E),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+h(R);H.title=R,M.appendChild(H)}if(N&&!D){var b=document.createElement("span");b.className="admin-identity-ip",b.textContent=N,b.title=N,M.appendChild(b)}return M}window.AdminIdentity={render:A,parse:u,focusFingerprint:B,hashFp:$,FP_DISPLAY_LEN:g}})()});var ft=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(a,i){return window.csrfFetch(a,i)}function u(a,i){return window.showToast(a,i)}let $="default",B=[],A={},G=null,O=!1,R="sec-themes";function N(){let a=i=>g(ServerI18n.t(i));return`
      <div id="${R}" class="admin-style-themes lg:col-span-2">
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
              <span class="theme-pack-sample-nick">${g(x)}</span>${g(T)}
            </span>
          </div>
        </details>
      </div>`}function D(){if(document.getElementById(R))return!1;let a=document.getElementById("settings-grid");return a?(a.insertAdjacentHTML("beforeend",N()),!0):!1}function C(){document.dispatchEvent(new CustomEvent("admin-themes-changed",{detail:{active:$}}))}function y(){let a=document.getElementById("themesList");a&&window.AdminSkeletons&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function M(a){a&&O||y();try{let i=await h("/admin/themes");if(!i.ok)return!1;let S=await i.json();return $=S.active||"default",B=S.themes||[],A=S.overrides||{},G=S.style_defaults||null,O=!0,r(B,$),m(),C(),!0}catch(i){return console.warn("[Themes] Failed to fetch themes:",i),!1}}async function _(a){let i;try{i=await h("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})}catch{return{ok:!1,error:""}}return i.ok?($=a,await M(!0)||(G=null,r(B,a),m(),C()),{ok:!0,error:""}):{ok:!1,error:(await i.json().catch(()=>({}))).error||""}}var x="\u5C0F\u660E",T="\u8B1B\u5F97\u597D\uFF01+1";function H(a,i){var S=String(a||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(S)?S:i}function E(a){var i=String(a||"").trim(),S=i.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);return S&&(i="#"+S[1]+S[1]+S[2]+S[2]+S[3]+S[3]),/^[0-9a-fA-F]{6}$/.test(i)&&(i="#"+i),/^#[0-9a-fA-F]{6}$/.test(i)?i.toLowerCase():null}function b(a){var i=A[a.name]||{},S=G&&G.Color&&G.Color.global;return E(i.color)||E(S)||"#ffffff"}function c(a){var i=a.styles||{},S=b(a),I=["color:"+S];if(i.textStroke){var d=Math.max(0,Math.min(6,Number(i.strokeWidth)||0));I.push("-webkit-text-stroke:"+d+"px "+H(i.strokeColor,"#000000")),I.push("paint-order:stroke fill")}if(i.textShadow){var k=Math.max(0,Math.min(40,Number(i.shadowBlur)||0));I.push("text-shadow:0 0 "+k+"px "+S)}var L=(A[a.name]||{}).font_family||G&&G.FontFamily&&G.FontFamily.global;return L&&/^[\w\s-]{1,40}$/.test(L)&&I.push("font-family:'"+L+"', var(--font-sans)"),a.font&&Number(a.font.weight)&&I.push("font-weight:"+Math.max(100,Math.min(900,Number(a.font.weight)))),I.join(";")}function l(a){var i=a.bg&&a.bg.gradient;return i&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(i).trim())?"background:"+String(i).trim():""}function r(a,i){let S=document.getElementById("themesList");if(S){if(S.innerHTML="",a.length===0){S.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}a.forEach(I=>{let d=I.name===i,k=g(ServerI18n.t("theme_"+I.name)!=="theme_"+I.name?ServerI18n.t("theme_"+I.name):I.label||I.name),L=document.createElement("div");L.className=`theme-pack-card${d?" is-active":""}`,L.innerHTML=`
        <div class="theme-pack-name">${k}</div>
        <div class="theme-pack-sample" style="${g(l(I))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${g(c(I))}">
            <span class="theme-pack-sample-nick">${g(x)}</span>
            ${g(T)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${I.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${g(I.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${d?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${g(I.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,S.appendChild(L)}),S.querySelectorAll(".theme-delete-btn").forEach(I=>{I.addEventListener("click",async()=>{let d=I.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let L=await h("/admin/themes/"+encodeURIComponent(d),{method:"DELETE"});if(!L.ok)throw new Error("HTTP "+L.status);u(ServerI18n.t("themeDeleted"),!0),M()}catch{u(ServerI18n.t("themesDeleteFailed"),!1)}})}),S.querySelectorAll(".theme-activate-btn").forEach(I=>{I.addEventListener("click",async()=>{let d=await _(I.dataset.theme);d.ok?u(ServerI18n.t("themeActivated"),!0):u(d.error||ServerI18n.t("setThemeFailed"),!1)})})}}function e(){return B.find(a=>a.name===$)||null}function f(a,i){let S=A[$]||{};if(S[a])return S[a];let I=i&&i.styles||{};return a==="stroke"?I.textStroke?Number(I.strokeWidth)>=3?"thick":"thin":"none":I.textShadow?Number(I.shadowBlur)>=10?"strong":"soft":"none"}function m(){let a=document.getElementById("themeDetail"),i=document.getElementById("themeDetailLabel");if(!a||!i)return;let S=e();if(!S)return;let I=ServerI18n.t("theme_"+S.name)!=="theme_"+S.name?ServerI18n.t("theme_"+S.name):S.label||S.name;i.textContent=ServerI18n.t("themeDetailGroup",{name:I});let d=A[$]||{},k=a.querySelector('[data-theme-ov="color"]');k&&(k.value=E(d.color)||b(S));let L=a.querySelector('[data-theme-ov-clear="color"]');L&&(L.hidden=!d.color),v(S),s(S)}var w=null;async function v(a){let i=document.getElementById("themeOvFont");if(!i)return;if(!w)try{let d=await fetch("/fonts",{credentials:"same-origin"});w=d.ok?(await d.json()).fonts||[]:[]}catch{w=[]}let I=(A[$]||{}).font_family||"";i.innerHTML=`<option value="">${g(ServerI18n.t("themeDetailFontInherit"))}</option>`+w.map(d=>{let k=String(d.name||d);return`<option value="${g(k)}"${k===I?" selected":""}>${g(k)}</option>`}).join("")}function s(a){let i=document.querySelector("[data-theme-preview-line]");i&&i.setAttribute("style",c(a))}async function o(a){try{let i=await h("/admin/themes/"+encodeURIComponent($)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error("HTTP "+i.status);u(ServerI18n.t("themeDetailSaved"),!0),await M(!0)}catch{u(ServerI18n.t("themeDetailSaveFailed"),!1)}}function p(){let a=document.getElementById("themeDetail");a&&(a.addEventListener("change",i=>{let S=i.target.closest("[data-theme-ov]");S&&o({[S.getAttribute("data-theme-ov")]:S.value})}),a.addEventListener("click",i=>{let S=i.target.closest("[data-theme-ov-clear]");S&&o({[S.getAttribute("data-theme-ov-clear")]:""})}))}function n(){let a=document.getElementById("themeNewBtn");a&&a.addEventListener("click",async()=>{let i=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!i||!i.trim()))try{let S=await h("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:i.trim(),base:$})});if(!S.ok)throw new Error("HTTP "+S.status);u(ServerI18n.t("themeCreated"),!0),M()}catch{u(ServerI18n.t("themesNewFailed"),!1)}})}function t(){let a=D();if(M(),!a)return;p(),n();let i=document.getElementById("themeReloadBtn");i&&i.addEventListener("click",async()=>{try{(await h("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(u(ServerI18n.t("themesReloaded")),M()):u(ServerI18n.t("themesReloadFailed"),!1)}catch{u(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t,segOf(a){let i=e();return O&&i?f(a,i):null},activeStyles(){let a=e();return a&&a.styles||{}},styleDefaults(){return G},activate:_,refresh(){return M(!0)},setSeg(a,i){return a!=="stroke"&&a!=="shadow"?Promise.resolve():o({[a]:i})}}})()});var vt=ye(()=>{(function(){"use strict";function g(d,k){return window.csrfFetch(d,k)}function h(d,k){return window.showToast(d,k)}var u=window.ServerI18n;function $(d,k){return window.AdminUtils.styleTag(d,k)}let B=null;function A(){let d=document.getElementById("effectEditModal");return d?Array.from(d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(k=>!k.hasAttribute("disabled")&&k.getAttribute("aria-hidden")!=="true"):[]}function G(d){let k=document.getElementById("effectEditModal");if(!k||k.classList.contains("hidden"))return;if(d.key==="Escape"){d.preventDefault(),O();return}if(d.key!=="Tab")return;let L=A();if(L.length===0){d.preventDefault();return}let j=L[0],P=L[L.length-1],V=document.activeElement;d.shiftKey&&V===j?(d.preventDefault(),P.focus()):!d.shiftKey&&V===P&&(d.preventDefault(),j.focus())}function O(){let d=document.getElementById("effectEditModal");d&&(d.classList.add("hidden"),d.classList.remove("flex"),d.removeEventListener("keydown",G),B&&(B.focus(),B=null))}let R={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(d){return!!R[d]}};let N=new Map,D=new Map;function C(d){if(!d||!d.styleId||!d.keyframes)return;let k="dme-user-"+d.styleId;if(document.getElementById(k))return;let L=document.createElement("style");L.id=k,L.textContent=d.keyframes,document.head.appendChild(L)}async function y(d){if(N.has(d))return N.get(d);if(D.has(d))return D.get(d);let k=(async()=>{try{let L=await g(`/admin/effects/${encodeURIComponent(d)}/content`);if(!L.ok)throw new Error("content fetch failed");let j=await L.json(),P=j&&j.content||"";if(!P)throw new Error("empty content");let V=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:P,params:{}})});if(!V.ok)throw new Error("preview failed");let F=await V.json();if(!F||!F.animation)throw new Error("no animation");return C(F),N.set(d,F),F}catch{return N.set(d,"failed"),null}finally{D.delete(d)}})();return D.set(d,k),k}function M(d,k){let L=d.querySelector(".effect-demo-text");if(!L)return;L.style.animation=k.animation||"",k.animationComposition&&(L.style.animationComposition=k.animationComposition),L.style.animationPlayState="paused";let j=x();j&&j.observe(d)}let _=null;function x(){return _||(typeof IntersectionObserver>"u"?null:(_=new IntersectionObserver(d=>{d.forEach(k=>{let L=k.target.querySelector(".effect-demo-text");L&&(L.style.animationPlayState=k.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),_))}let T=null;function H(d){let k=document.getElementById("effectPreviewParams");if(!k)return{};let L;try{let P=d.split(`
`),V=!1,F=0,U=null,ee=0,J={};for(let W of P){let Z=W.trimStart(),K=W.length-Z.length;if(Z.startsWith("params:")){V=!0,F=K;continue}if(!V||Z===""||Z.startsWith("#"))continue;if(K<=F&&!Z.startsWith("params:")){V=!1;continue}let Y=Z.match(/^([a-zA-Z0-9_]+):\s*$/);if(Y&&K===F+2){U=Y[1],ee=K,J[U]={};continue}if(U&&K>ee){let ne=Z.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let re=ne[1],de=ne[2].trim();if((de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),re!=="options"){let ue=Number(de);J[U][re]=isNaN(ue)?de:ue}}if(Z.startsWith("- value:")){J[U].options||(J[U].options=[]);let re=Z.match(/^- value:\s*(.+)$/);if(re){let de=re[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),J[U].options.push({value:de,label:de})}}if(Z.startsWith("label:")&&J[U].options&&J[U].options.length>0){let re=Z.match(/^label:\s*(.+)$/);if(re){let de=re[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),J[U].options[J[U].options.length-1].label=de}}}}L=J}catch{L={}}k.innerHTML="";let j={};for(let[P,V]of Object.entries(L||{})){let F=V.type||"float",U=document.createElement("div");U.className="flex flex-col gap-0.5";let ee=document.createElement("label");if(ee.className="font-mono",ee.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",ee.textContent=`${P} (${F})`,U.appendChild(ee),F==="select"&&Array.isArray(V.options)){let J=document.createElement("select");J.className="admin-ui-select",J.style.cssText="font-size:13px;padding:4px 8px",J.dataset.paramKey=P;for(let W of V.options){let Z=document.createElement("option");Z.value=W.value,Z.textContent=W.label||W.value,W.value===String(V.default)&&(Z.selected=!0),J.appendChild(Z)}j[P]=String(V.default||V.options[0]&&V.options[0].value||""),J.addEventListener("change",()=>{c()}),U.appendChild(J)}else{let J=V.min!=null?V.min:0,W=V.max!=null?V.max:10,Z=V.step!=null?V.step:F==="int"?1:.1,K=V.default!=null?V.default:J,Y=document.createElement("div");Y.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=J,ne.max=W,ne.step=Z,ne.value=K,ne.dataset.paramKey=P,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let re=document.createElement("span");re.className="font-mono",re.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",re.textContent=String(K),ne.addEventListener("input",()=>{re.textContent=ne.value,c()}),Y.appendChild(ne),Y.appendChild(re),U.appendChild(Y),j[P]=K}k.appendChild(U)}return j}function E(){let d=document.getElementById("effectPreviewParams");if(!d)return{};let k={};return d.querySelectorAll("[data-param-key]").forEach(L=>{k[L.dataset.paramKey]=L.type==="range"?Number(L.value):L.value}),k}async function b(){let d=document.getElementById("effectEditModalTextarea"),k=document.getElementById("effectPreviewText"),L=document.getElementById("effectPreviewStyle"),j=document.getElementById("effectPreviewError");if(!d||!k||!L)return;let P=d.value;if(!P||P===u.t("effectLoadContent")||P===u.t("effectsNetworkError"))return;let V=E();j?.classList.add("hidden");try{let F=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:P,params:V})}),U=await F.json().catch(()=>({}));F.ok?(L.textContent=U.keyframes||"",k.style.animation=U.animation||"none",k.style.animationComposition=U.animationComposition||""):(k.style.animation="none",L.textContent="",j&&(j.textContent=U.error||u.t("previewFailed"),j.classList.remove("hidden")))}catch{k.style.animation="none",L.textContent="",j&&(j.textContent=u.t("effectsNetworkError"),j.classList.remove("hidden"))}}function c(){clearTimeout(T),T=setTimeout(()=>b(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${u.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${u.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${u.t("previewText")}</span>
                </div>
                ${$("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${u.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${u.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",O),document.getElementById("effectEditModalCancel").addEventListener("click",O),document.getElementById("effectEditModal").addEventListener("click",P=>{P.target===P.currentTarget&&O()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let P=document.getElementById("effectEditModalTextarea");P&&(H(P.value),c())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{b()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let P=document.getElementById("effectEditModal"),V=document.getElementById("effectEditModalTextarea"),F=document.getElementById("effectEditModalSave"),U=P?.dataset.effectName;if(!(!U||!V)){F.disabled=!0;try{let ee=await g("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,content:V.value})}),J=await ee.json().catch(()=>({}));ee.ok?(h(J.message||u.t("effectSaveFallback"),!0),O(),await f()):h(J.error||u.t("saveFailed"),!1)}catch{h(u.t("effectsNetworkError"),!1)}finally{F.disabled=!1}}})),await f(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let P=document.getElementById("effectReloadBtn");P&&(P.disabled=!0);try{let V=await g("/admin/effects/reload",{method:"POST"}),F=await V.json().catch(()=>({}));V.ok?(h(F.message||u.t("effectsReloadFallback")),await f()):h(F.error||u.t("reloadFailed"),!1)}catch{h(u.t("effectsNetworkError"),!1)}finally{P&&(P.disabled=!1)}});async function d(P){if(!P)return;let V=new FormData;V.append("effectfile",P);try{let F=await g("/admin/effects/upload",{method:"POST",body:V}),U=await F.json().catch(()=>({}));F.ok?(h(U.message||u.t("effectUploadFallback")),await f()):h(U.error||u.t("uploadFailed"),!1)}catch{h(u.t("effectsNetworkError"),!1)}}let k=document.getElementById("effectUploadInput"),L=k&&!k.dataset.uploadWired;L&&(k.dataset.uploadWired="1"),(L?k:null)?.addEventListener("change",async P=>{await d(P.target.files?.[0]),P.target.value=""});let j=document.getElementById("sec-effects-mgmt");if(j){let P=0,V=J=>{J.preventDefault(),P++,j.classList.add("is-drag")},F=J=>{J.preventDefault()},U=J=>{J.preventDefault(),P=Math.max(0,P-1),P===0&&j.classList.remove("is-drag")},ee=async J=>{J.preventDefault(),P=0,j.classList.remove("is-drag");let W=J.dataTransfer?.files?.[0];if(W){if(!/\.(dme|dme\.zip)$/i.test(W.name)){h(u.t("fxToastBadExt"),!1);return}await d(W)}};j.addEventListener("dragenter",V),j.addEventListener("dragover",F),j.addEventListener("dragleave",U),j.addEventListener("drop",ee)}}function r(d){let k=(d||"").toLowerCase();return k.startsWith("glow")||k.includes("neon")?"GLOW":k.startsWith("shake")?"SHAKE":k.startsWith("wave")||k.startsWith("spin")||k.startsWith("bounce")||k.startsWith("zoom")||k.startsWith("fire")||k.includes("motion")?"MOTION":k.startsWith("rainbow")||k.startsWith("blink")||k.includes("color")?"COLOR":k.startsWith("type")||k.includes("text")?"TEXT":"MISC"}let e={all:[],filter:"ALL",selected:null};async function f(){let d=document.getElementById("effectsList");if(d)try{let k=await g("/admin/effects");if(!k.ok){d.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsLoadFailed")+"</span>";return}let L=await k.json();e.all=L.effects||[],m(),v()}catch{d.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsNetworkError")+"</span>"}}function m(){let d=document.getElementById("effectsFilterRow");if(!d)return;let k={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};e.all.forEach(F=>{k[r(F.name)]+=1});let L=e.all.length,j=[["ALL",u.t("fxChipAll"),L],["GLOW",u.t("fxCatGlow"),k.GLOW],["MOTION",u.t("fxCatMotion"),k.MOTION],["COLOR",u.t("fxCatColor"),k.COLOR],["SHAKE",u.t("fxCatShake"),k.SHAKE],["TEXT",u.t("fxCatText"),k.TEXT]];k.MISC>0&&j.push(["MISC",u.t("fxCatMisc"),k.MISC]);let P=j.map(([F,U,ee])=>`<span class="hud-filter-chip ${e.filter===F?"is-active":""}" data-effect-filter="${F}">${U} ${ee}</span>`).join(""),V=d.querySelector("[data-toolbar-spacer]");V?(d.querySelectorAll("[data-effect-filter]").forEach(F=>F.remove()),V.insertAdjacentHTML("beforebegin",P)):d.innerHTML=P,d.querySelectorAll("[data-effect-filter]").forEach(F=>{F.addEventListener("click",()=>{e.filter=F.dataset.effectFilter,m(),v()})})}function w(d){let k=(F,U)=>{let ee=document.querySelector(F);ee&&(ee.textContent=U==null?"\u2014":String(U))},L=d.length,j=d.filter(F=>F.enabled!==!1).length,P=new Set(d.map(F=>r(F.name))),V=d.filter(F=>!R[F.name]).length;k("[data-eflib-total]",L),k("[data-eflib-active]",j),k("[data-eflib-cats]",P.size),k("[data-eflib-user]",V)}function v(){let d=document.getElementById("effectsList");if(!d)return;let k=e.all;w(k);let L=e.filter==="ALL"?k:k.filter(j=>r(j.name)===e.filter);if(!L.length){d.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(k.length?u.t("fxNoFilterMatch"):u.t("noEffectsLoaded"))+"</span>";return}_&&_.disconnect(),d.innerHTML="",L.forEach(j=>{let P=r(j.name),V=P==="GLOW"?"is-glow":P==="COLOR"?"is-color":P==="TEXT"?"is-text":"",F=R[j.name]||"",U=!!F,ee=document.createElement("div");ee.className="hud-effect-card"+(e.selected===j.name?" is-selected":""),ee.dataset.effectName=j.name,ee.title=[j.description,`file: ${j.filename}`].filter(Boolean).join(`
`);var J="effect_"+j.name;let W=u.t(J)!==J?u.t(J):j.label||j.name,Z=U?"built-in":"user",K=F?`animation:${F};animation-play-state:paused;`:"";if(ee.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${s(u.t("fxCat"+P.charAt(0)+P.slice(1).toLowerCase())||P)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${V}"><span class="effect-demo-text" style="${K}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${s(W)}</div>
          <div class="hud-effect-card-meta">${s(Z)} \xB7 ${s(j.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${u.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${u.t("lbDelete")}</button>
        </div>
      `,d.appendChild(ee),F){let re=x();re&&re.observe(ee)}else{let re=N.get(j.name);re&&re!=="failed"?(C(re),M(ee,re)):re!=="failed"&&y(j.name).then(de=>{if(!de)return;let ue=d.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(j.name)}"]`);ue&&M(ue,de)})}ee.addEventListener("click",re=>{re.target.closest("[data-role]")||i(j)});let Y=ee.querySelector('[data-role="edit"]'),ne=ee.querySelector('[data-role="delete"]');Y.addEventListener("click",async()=>{let re=document.getElementById("effectEditModal"),de=document.getElementById("effectEditModalTitle"),ue=document.getElementById("effectEditModalFile"),me=document.getElementById("effectEditModalTextarea"),Te=document.getElementById("effectEditModalSave");if(!re)return;B=document.activeElement instanceof HTMLElement?document.activeElement:null,de.textContent=j.label||j.name,ue.textContent=j.filename,me.value=u.t("effectLoadContent"),me.disabled=!0,Te.disabled=!0,re.dataset.effectName=j.name,re.classList.remove("hidden"),re.classList.add("flex"),re.addEventListener("keydown",G),me.focus();let Ee=document.getElementById("effectPreviewText"),Le=document.getElementById("effectPreviewStyle"),oe=document.getElementById("effectPreviewError"),se=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),Le&&(Le.textContent=""),oe&&oe.classList.add("hidden"),se&&(se.innerHTML="");try{let ce=await g(`/admin/effects/${encodeURIComponent(j.name)}/content`),z=await ce.json().catch(()=>({}));ce.ok?(me.value=z.content||"",me.disabled=!1,Te.disabled=!1,me.focus(),H(me.value),b()):(me.value=z.error||u.t("effectLoadContentFailed"),h(z.error||u.t("effectLoadContentFailed"),!1))}catch{me.value=u.t("effectsNetworkError"),h(u.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let re=j.label||j.name;if(await window.HudConfirm?.open({icon:"\u2297",title:u.t("fxDeleteTitle"),subtitle:u.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${u.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${re}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${u.t("fxDeleteWarn")}
                </div>`,confirmLabel:u.t("fxDeleteConfirm"),cancelLabel:u.t("cancel"),width:400}))try{let ue=await g("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j.name})}),me=await ue.json().catch(()=>({}));ue.ok?(h(me.message||u.t("effectDeleteFallback"),!0),await f()):h(me.error||u.t("deleteFailed"),!1)}catch{h(u.t("effectsNetworkError"),!1)}})})}function s(d){return String(d??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(d){let k={name:"",label:"",description:"",params:[]};if(!d)return k;let L=d.split(`
`),j="top",P=null;for(let V of L){let F=V.replace(/\r$/,""),U=F.trimStart();if(!U||U.startsWith("#"))continue;let ee=F.length-U.length;if(ee===0){if(j="top",P&&(k.params.push(P),P=null),U==="params:"){j="params";continue}let J=U.match(/^([a-z_]+):\s*(.+)$/);J&&(J[1]==="name"?k.name=J[2].trim():J[1]==="label"?k.label=J[2].trim():J[1]==="description"&&(k.description=J[2].trim()));continue}if(!(j!=="params"&&j!=="param-fields"&&j!=="options")){if(ee===2&&(j==="params"||j==="param-fields"||j==="options")){P&&(k.params.push(P),P=null);let J=U.match(/^(\w+):$/);J&&(P={key:J[1]},j="param-fields");continue}if(ee===4&&j==="param-fields"&&P){let J=U.match(/^(\w+):\s*(.*)$/);if(J){let W=J[1],Z=J[2].trim();W==="label"?P.label=Z:W==="type"?P.type=Z:W==="default"?P.default=Z:W==="min"?P.min=parseFloat(Z):W==="max"?P.max=parseFloat(Z):W==="step"?P.step=parseFloat(Z):W==="options"&&(P.options=[],j="options")}continue}if(j==="options"&&P&&ee>=6){let J=U.match(/^-\s*value:\s*(.+)$/);J&&(P.options||(P.options=[]),P.options.push({value:J[1].trim(),label:J[1].trim()}));let W=U.match(/^label:\s*(.+)$/);W&&P.options&&P.options.length>0&&(P.options[P.options.length-1].label=W[1].trim())}}}return P&&k.params.push(P),k}function p(d,k){let L=d.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),j=L?L[1]:"",P=d.match(/^animation:\s*["']?(.+?)["']?\s*$/m),V=P?P[1].trim():"";for(let F of k.params){let U=F.default!==void 0?F.default:"",ee=new RegExp(`\\{${F.key}\\}`,"g");j=j.replace(ee,U),V=V.replace(ee,U)}return{keyframes:j,animation:V}}function n(d,k){if(d==="COLOR"){let L=k.find(j=>j.key==="duration");if(L&&L.default){let j=parseFloat(L.default);if(j<.25)return"crimson";if(j<.33)return"amber"}}if(d==="MOTION"){let L=k.find(j=>j.key==="height");if(L&&L.default){let j=parseFloat(L.default);if(j>30)return"crimson";if(j>24)return"amber"}}return"lime"}function t(d,k){return d==="COLOR"?k==="crimson"?u.t("fxHintFlashBlock"):k==="amber"?u.t("fxHintFlashWarn"):u.t("fxHintFlashOk"):k==="crimson"?u.t("fxHintAmpBlock"):k==="amber"?u.t("fxHintAmpWarn"):u.t("fxHintAmpOk")}function a(d,k){let L=o(k),{keyframes:j,animation:P}=p(k,L),V=r(d.name),F=L.params.filter(me=>me.type!=="select"),U=L.params.filter(me=>me.type==="select"),ee=n(V,L.params),J=ee==="crimson"?"BLOCK":ee==="amber"?"WARN":"OK",W=t(V,ee),Z="fx-anim-"+d.name.replace(/[^a-z0-9]/gi,"-"),K=j&&P?$(Z,j):"",Y=P?`animation:${P};animation-play-state:running;`:"",ne=F.map(me=>{let Te=parseFloat(me.default)||0,Ee=me.min??0,Le=me.max??100,oe=Math.max(0,Math.min(100,(Te-Ee)/(Le-Ee)*100)),se=(me.label||"").match(/\(([^)]+)\)$/),ce=se?se[1]:"",z=me.label||me.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${s(z)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Te}<span style="color:var(--color-text-muted);margin-left:2px">${s(ce)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${oe}%"></div>
          <div class="fx-slider-knob" style="left:${oe}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ee}${s(ce)}</span><span>${Le}${s(ce)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${u.t("fxNoNumericParams")}</span>`,re=U.map(me=>{let Te=me.options||[],Ee=String(me.default||""),Le=Te.map(oe=>`<span class="fx-radio-btn${oe.value===Ee||oe.label===Ee?" is-active":""}">${s(oe.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${s(me.label||me.key)}</div>
        <div class="fx-radio-group">${Le||"<span>\u2014</span>"}</div>
      </div>`}).join(""),de=["dark","light","photo"].map(me=>{let Te=me==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${me}">
        <span class="fx-preview-bg-label">${me.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Y}color:${Te}">ABC</span>
      </div>`}).join(""),ue=`${K}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${u.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ne}</div>
      </div>`;return re&&(ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${u.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${re}</div>
      </div>`),ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${u.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${de}</div>
      </div>
      <div class="fx-warn-box${ee!=="lime"?" is-"+ee:""}">
        <span class="fx-warn-chip${ee!=="lime"?" is-"+ee:""}">${J}</span>
        <span class="fx-warn-text">${s(W)}</span>
      </div>
    </div>`,ue}async function i(d){e.selected=d.name;let k=document.getElementById("effectsInspector"),L=document.getElementById("effectsInspectorTitle"),j=document.getElementById("effectsInspectorKicker"),P=document.getElementById("effectsInspectorBody");if(k){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),L&&(L.textContent=d.label||d.name),j&&(j.textContent="LOADING"),P&&(P.className="hud-inspector-body",P.textContent="# "+u.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(V=>{V.classList.toggle("is-selected",V.dataset.effectName===d.name)});try{let V=await g(`/admin/effects/${encodeURIComponent(d.name)}/content`),F=await V.json().catch(()=>({}));if(V.ok){let U=F.content||"";P&&(P.className="hud-inspector-body has-param-panel",P.innerHTML=a(d,U)),j&&(j.textContent=r(d.name))}else P&&(P.className="hud-inspector-body",P.textContent="# "+(F.error||u.t("effectLoadContentFailed"))),j&&(j.textContent="ERROR")}catch{P&&(P.className="hud-inspector-body",P.textContent="# "+u.t("effectsNetworkError")),j&&(j.textContent="NETWORK")}}}function S(){let d=document.getElementById("effectsInspectorReload"),k=document.getElementById("effectsInspectorEdit");d?.addEventListener("click",async()=>{if(!e.selected){h(u.t("fxSelectFirst"),!1);return}let L=e.all.find(j=>j.name===e.selected);L&&await i(L)}),k?.addEventListener("click",()=>{if(!e.selected){h(u.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(e.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",S())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var ht=ye(()=>{(function(){"use strict";var g={};window.DanmuEvents={on:function(h,u){g[h]||(g[h]=[]),g[h].push(u)},off:function(h,u){g[h]=(g[h]||[]).filter(function($){return $!==u})},emit:function(h,u){(g[h]||[]).forEach(function($){$(u)})}}})()});var gt=ye(()=>{(function(){"use strict";let g="sec-events",h="/admin/audit?limit=200",$=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})},B={events:[],filterSev:"all",filterCat:"all",timer:0};function A(E){let b=(E.source||E.kind||"").toLowerCase(),c=(E.action||"").toLowerCase();return b.includes("plugin")||c.includes("plugin")?"plugin":b.includes("webhook")||c.includes("webhook")?"webhook":b.includes("rate")||c.includes("rate")||c.includes("limit")?"rate":b.includes("filter")||c.includes("filter")?"filter":b.includes("overlay")||c.includes("overlay")||b==="broadcast"?"overlay":b.includes("backup")||c.includes("backup")?"backup":b.includes("msg")||b==="messaging"?"msg":b.includes("ws")||b==="websocket"?"ws":"system"}let G=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,O=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function R(E){let b=(E.action||E.kind||"").toLowerCase();return E.severity?E.severity:G.test(b)?"error":O.test(b)?"warn":"info"}function N(E){let b=E.source||"system",c=E.action||E.kind||"";return c?`${b.toUpperCase()}_${c.toUpperCase()}`:b.toUpperCase()}function D(E){if(!E)return"\u2014";let b=new Date(E*1e3),c=l=>String(l).padStart(2,"0");return`${c(b.getHours())}:${c(b.getMinutes())}:${c(b.getSeconds())}`}function C(E){if(E.message)return E.message;let b=E.meta||{},c=[];if(b.from&&b.to)c.push(`${b.from} \u2192 ${b.to}`);else if(b.text_preview)c.push(`"${b.text_preview.slice(0,60)}"`);else if(Object.keys(b).length){let l=Object.keys(b).slice(0,3);for(let r of l)c.push(`${r}=${JSON.stringify(b[r]).slice(0,30)}`)}return c.length?c.join(" \xB7 "):`${E.source||"system"}.${E.action||E.kind||"?"}`}function y(){return`
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
      </div>`}function M(){let E=document.querySelector("[data-ev-rows]");if(!E)return;let b=B.events,c=b.filter(e=>!(B.filterSev!=="all"&&R(e)!==B.filterSev||B.filterCat!=="all"&&A(e)!==B.filterCat));c.length===0?(E.innerHTML="",window.AdminEmpty?E.appendChild(window.AdminEmpty.render("events")):E.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):E.innerHTML=c.map(e=>{let f=R(e);return`
          <div class="admin-ev-v4__row" data-sev="${f}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${$(D(e.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${f}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${f}">${$(N(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${$(e.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${$(C(e))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:b.length,info:0,warn:0,error:0};for(let e of b)l[R(e)]+=1;Object.keys(l).forEach(e=>{let f=document.querySelector(`[data-ev-cnt="${e}"]`);f&&(f.textContent=String(l[e]))});let r=document.querySelector("[data-ev-total]");r&&(r.textContent=`${c.length} / ${b.length}`)}async function _(){try{let E=await fetch(h,{credentials:"same-origin"});if(!E.ok)return;let b=await E.json();B.events=Array.isArray(b.events)?b.events:[],M()}catch{}}function x(){let E=document.getElementById(g);E&&E.addEventListener("click",b=>{let c=b.target.closest("[data-ev-sev]");if(c){E.querySelectorAll("[data-ev-sev]").forEach(e=>e.classList.toggle("is-active",e===c)),B.filterSev=c.dataset.evSev,M();return}let l=b.target.closest("[data-ev-cat]");if(l){E.querySelectorAll("[data-ev-cat]").forEach(e=>e.classList.toggle("is-active",e===l)),B.filterCat=l.dataset.evCat,M();return}let r=b.target.closest("[data-ev-action]");if(r){if(r.dataset.evAction==="refresh")_();else if(r.dataset.evAction==="export"){let e=new Blob([JSON.stringify(B.events,null,2)],{type:"application/json"}),f=URL.createObjectURL(e),m=document.createElement("a");m.href=f,m.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(f),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function T(){let E=document.querySelector(".admin-dash-grid"),b=document.getElementById(g);if(!b)return;let l=(E?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";b.style.display=l?"":"none",l?(_(),B.timer||(B.timer=setInterval(_,15e3))):B.timer&&(clearInterval(B.timer),B.timer=0)}function H(){let E=document.getElementById("settings-grid");!E||document.getElementById(g)||(E.insertAdjacentHTML("beforeend",y()),x(),T())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&H(),T()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",()=>{H(),T()}),H()})})()});var bt=ye(()=>{(function(){"use strict";let g="sec-modqueue",h="/admin/modqueue/list",B=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},A={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},G={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},O={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function R(c){let l=0,r=String(c||"");for(let e=0;e<r.length;e++)l=l*31+r.charCodeAt(e)&65535;return l%360}function N(c){if(!c.created_at_ms)return null;let l=(Date.now()-c.created_at_ms)/1e3,r=Math.max(0,A.autoRejectSec-l);return Math.ceil(r)}function D(c,l){let r=(c.severity||"low").toLowerCase(),e=G[r]||G.low,f=R(c.fp),m=String(c.fp||"\u2014").slice(0,8),w=c.nick||c.nickname||ServerI18n.t("audienceAnonymous"),v=(w||"?").slice(0,2).toUpperCase(),s=l==="pending"?N(c):null,o=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${B(c.id||"")}">${B(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${B(c.id||"")}">${B(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${B(c.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",p=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${B(ServerI18n.t("modqueueStampApproved"))} \xB7 ${B(c.resolved_by||"admin")} \xB7 ${B(c.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${c.auto_rejected?`${B(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${B(ServerI18n.t("modqueueAutoRejectTimeout",{n:A.autoRejectSec}))}`:`${B(ServerI18n.t("modqueueStampRejected"))} \xB7 ${B(c.resolved_by||"admin")} \xB7 ${B(c.resolved_ago||"")}`}
        </div>`:"",n=l==="pending"&&s!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${s}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${B(c.id||"")}" data-mq-sev="${B(r)}" style="--mq-sev:${e}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${f})">${B(v)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${B(w)}</div>
            <div class="admin-mq-card__fp">fp:${B(m)}</div>
          </div>
          <div class="admin-mq-card__time">${B(c.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${B(c.content||c.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${e}">${B(ServerI18n.t(O[r]||O.low))}</span>
          <span class="admin-mq-card__rule">${B(ServerI18n.t("modqueueRuleLabel"))}: ${B(c.rule||c.matched_rule||"?")}</span>
          ${n}
        </div>
        ${o}
        ${p}
      </div>`}function C(c,l,r){c&&(c.innerHTML=l.map(e=>D(e,r)).join(""))}function y(){let c=document.getElementById(g);if(!c)return;c.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=!0}),c.querySelector(".admin-mq__body").hidden=!0;let l=c.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function M(){let c=document.getElementById(g);if(!c)return;if(A.pending.length+A.approved.length+A.rejected.length===0){y();return}c.querySelector(".admin-mq__body").hidden=!1;let r=c.querySelector("[data-mq-empty]");r&&(r.hidden=!0),C(c.querySelector("[data-mq-col-pending]"),A.pending,"pending"),C(c.querySelector("[data-mq-col-approved]"),A.approved,"approved"),C(c.querySelector("[data-mq-col-rejected]"),A.rejected,"rejected");let e=(v,s)=>{c.querySelectorAll(v).forEach(o=>{o.textContent=String(s)})};e("[data-mq-cnt-pending]",A.pending.length),e("[data-mq-cnt-approved]",A.approved.length),e("[data-mq-cnt-rejected]",A.rejected.length);let f=A.pending.length===0;c.querySelectorAll("[data-mq-bulk]").forEach(v=>{v.disabled=f});let m=A.pending[A.pending.length-1],w=c.querySelector("[data-mq-oldest]");if(w){let v=m?N(m):null;w.textContent=v!=null?`oldest: ${v}s`:""}e("[data-mq-throughput]",A.stats.throughput.toFixed?A.stats.throughput.toFixed(1):A.stats.throughput),e("[data-mq-avg-review]",A.stats.avg_review_sec.toFixed?A.stats.avg_review_sec.toFixed(1):A.stats.avg_review_sec),e("[data-mq-auto-rate]",Math.round(A.stats.auto_reject_pct||0)+"%")}async function _(){try{let c=await fetch(h,{credentials:"same-origin"});if(!c.ok){A.pending=[],A.approved=[],A.rejected=[],M();return}let l=await c.json();A.pending=Array.isArray(l.pending)?l.pending:[],A.approved=Array.isArray(l.approved)?l.approved:[],A.rejected=Array.isArray(l.rejected)?l.rejected:[],A.stats=l.stats||A.stats,typeof l.auto_reject_sec=="number"&&(A.autoRejectSec=l.auto_reject_sec),M()}catch{}}async function x(c,l,r){if(window.csrfFetch)try{let e=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,...r||{}})});if(e.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),_();else{let f=await e.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:f.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function T(){return`
      <div id="${g}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${B(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${B(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${B(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${B(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${B(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function H(){let c=document.getElementById(g);c&&c.addEventListener("click",async l=>{let r=l.target.closest("[data-mq-action]");if(r){let f=r.dataset.mqId,m=r.dataset.mqAction;(m==="approve"||m==="reject")&&x(f,m);return}let e=l.target.closest("[data-mq-bulk]");if(e){let f=e.dataset.mqBulk,m=f==="approve-low";if(!await window.HudConfirm?.open({icon:m?"\u2713":"\u2298",title:m?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:m?"warn":"danger",body:m?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:m?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let v=f.startsWith("approve")?"approve":"reject",s=f.endsWith("low")?"low":"high";x(null,"bulk",{action:v,severity:s})}})}function E(){let c=document.querySelector(".admin-dash-grid"),l=document.getElementById(g);if(!l)return;let r=(location.hash||"").replace("#/","").split("/"),e=c?.dataset.activeRoute||r[0]||"",f=c?.dataset.activeLeaf||r[1]||"",m=e==="modqueue"||e==="moderation"&&(f==="queue"||f===""||f==="moderation");l.style.display=m?"":"none",m?(A.timer||(_(),A.timer=setInterval(_,4e3)),A.countdownTimer||(A.countdownTimer=setInterval(M,1e3))):(A.timer&&(clearInterval(A.timer),A.timer=0),A.countdownTimer&&(clearInterval(A.countdownTimer),A.countdownTimer=0))}function b(){let c=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!c||document.getElementById(g)||(c.insertAdjacentHTML("beforeend",T()),H(),E())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(g)&&b(),E()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",E),document.addEventListener("admin-panel-rendered",()=>{b(),E()}),b()})})()});var wt=ye(()=>{(function(){"use strict";let g="sec-modbans-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},u=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],$={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},B={fingerprint:"FP",ip:"IP",nick:"NICK"},A={rows:[],refreshTimer:0};async function G(){try{let T=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!T.ok)return;let H=await T.json();A.rows=Array.isArray(H.bans)?H.bans:[],N()}catch{}}function O(T){if(!T||T<=0)return"\u2014";let H=Math.floor(T/86400),E=Math.floor(T%86400/3600),b=Math.floor(T%3600/60);return H>0?`${H}d ${E}h`:E>0?`${E}h ${b}m`:`${b}m`}function R(T){let H=T.target_kind;return H==="fingerprint"?`fp:${(T.target||"").slice(0,8)}`:H==="nick"?`@${T.target}`:T.target||"\u2014"}function N(){let T=document.querySelector("[data-modbans-list]");if(!T)return;let H=A.rows||[],E=document.querySelector("[data-modbans-count]");if(E&&(E.textContent=String(H.length)),H.length===0){T.innerHTML="";let b=window.AdminEmpty.render("blacklist");b.dataset.emptyKind="modbans",T.appendChild(b);return}T.innerHTML=H.map(function(b){let c=b.status==="expired",l=b.status==="permanent",r="admin-modbans-chip is-"+b.status,e=l?ServerI18n.t("modbansPermanent"):c?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:O(b.remaining_s)}),f=encodeURIComponent(b.target_kind)+"|"+encodeURIComponent(b.target);return`
        <div class="admin-modbans-row ${c?"is-expired":""}">
          <span class="admin-modbans-target">${h(R(b))}</span>
          <span class="admin-modbans-kind">${h(B[b.target_kind]||b.target_kind)}</span>
          <span class="admin-modbans-reason">${h(b.reason||"\u2014")}</span>
          <span class="${r}">
            ${b.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${h(e)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${f}"
            ${c?"disabled":""}
            title="${c?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${c?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(T){let H=T||{},E=H.kind||"ban",b=window.HudConfirm,c=!H.target,l=H.target_kind||"fingerprint",r=H.target||"";return new Promise(function(e){if(!b){e(!1);return}let f=86400,m=!1,w=12,v="hour",s=document.createElement("div");s.className="admin-modbans-modal-body",s.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${h($[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${h(B[l]||"?")} ${h((E||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${h(r?R({target_kind:l,target:r}):"\u2014")}</div>
          </div>
        </div>
        ${c?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(J){return`<button type="button" class="admin-modbans-modal-preset${J===l?" is-active":""}"
                data-modbans-target-kind="${J}">${h($[J])} ${h(B[J])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${u.map(function(J){return`<button type="button" class="${"admin-modbans-modal-preset"+(J.defaultPick?" is-active":"")+(J.permanent?" is-permanent":"")}" data-modbans-duration="${J.val}">${J.labelKey?ServerI18n.t(J.labelKey):J.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let o=s.querySelector("[data-modbans-custom-row]"),p=s.querySelector("[data-modbans-custom-input]"),n=s.querySelector("[data-modbans-custom-seconds]"),t=s.querySelector("[data-modbans-when]"),a=s.querySelector("[data-modbans-custom]"),i=s.querySelector("[data-modbans-target]"),S=s.querySelector("[data-modbans-target-icon]"),I=s.querySelector("[data-modbans-target-label]"),d=s.querySelector("[data-modbans-target-val]"),k=function(){S.textContent=$[l]||"?",I.textContent=`${B[l]||"?"} ${(E||"ban").toUpperCase()}`,d.textContent=r?R({target_kind:l,target:r}):"\u2014"},L=function(){return Math.max(1,parseInt(p.value,10)||1)*(v==="day"?86400:3600)},j=function(){if(f===0){t.textContent=ServerI18n.t("modbansWhenPermanent"),t.classList.remove("is-custom");return}let J=new Date(Date.now()+f*1e3),W=K=>String(K).padStart(2,"0"),Z=`${J.getFullYear()}-${W(J.getMonth()+1)}-${W(J.getDate())} ${W(J.getHours())}:${W(J.getMinutes())}`;m?(t.textContent=ServerI18n.t("modbansWhenCustom",{n:w,unit:ServerI18n.t(v==="day"?"modbansDay":"modbansHour"),stamp:Z}),t.classList.add("is-custom")):(t.textContent=ServerI18n.t("modbansWhenPreset",{dur:O(f),stamp:Z}),t.classList.remove("is-custom"))},P=function(){let J=L();n.textContent=`= ${J.toLocaleString()}s`,m&&(w=Math.max(1,parseInt(p.value,10)||1),f=J,j())},V=s.querySelector("[data-modbans-presets]"),F=function(){m=!0,o.hidden=!1,V.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===a)}),P()},U=function(J){m=!1,o.hidden=!0,V.querySelectorAll(".admin-modbans-modal-preset").forEach(function(W){W.classList.toggle("is-active",W===J)})};k(),j(),P(),s.addEventListener("click",function(J){let W=J.target.closest("[data-modbans-target-kind]");if(W){l=W.dataset.modbansTargetKind,W.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Y){Y.classList.toggle("is-active",Y===W)}),k();return}if(J.target.closest("[data-modbans-custom]")){F();return}let Z=J.target.closest("[data-modbans-custom-unit]");if(Z){v=Z.dataset.modbansCustomUnit||"hour",s.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Y){Y.classList.toggle("is-active",Y===Z)}),P();return}let K=J.target.closest("[data-modbans-duration]");K&&(f=parseInt(K.dataset.modbansDuration,10)||0,U(K),j())}),p.addEventListener("input",P),i&&i.addEventListener("input",function(){r=i.value.trim(),k()});let ee=s.querySelector("[data-modbans-reason]");b.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:s,width:480}).then(function(J){if(!J){e(!1);return}if(!r){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),e(!1);return}f===0?b.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${h(R({target_kind:l,target:r}))}</b>`})}).then(function(W){if(!W){e(!1);return}C(l,r,f,ee.value.trim(),E).then(e)}):C(l,r,f,ee.value.trim(),E).then(e)})})}async function C(T,H,E,b,c){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:T,target:H,duration_s:E,reason:b||"",kind:c||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast(E===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:O(E)}),!0),G(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function y(T){let H=(T||"").split("|");if(H.length!==2)return;let E=decodeURIComponent(H[0]),b=decodeURIComponent(H[1]);try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:E,target:b})});if(!c.ok)throw new Error(`HTTP ${c.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),G()}catch(c){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1)}}function M(){return`
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
      </div>`}function _(){let T=document.getElementById(g);if(!T||T.dataset.modbansBound==="1")return;T.dataset.modbansBound="1",T.addEventListener("click",function(E){if(E.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let b=E.target.closest("[data-modbans-unban]");b&&!b.disabled&&y(b.dataset.modbansUnban)});let H=T.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function x(){let T=document.getElementById("settings-grid");!T||document.getElementById(g)||(T.insertAdjacentHTML("beforeend",M()),_(),G(),A.refreshTimer||(A.refreshTimer=setInterval(G,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&x()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&x()}),window.ModBans={openPicker:D,refreshList:G,formatTarget:R,formatRemaining:O}})()});var yt=ye(()=>{(function(){"use strict";let g="admin-mobile-nav-root",h=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],u=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],$={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",themes:"viewer",appearance:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},B=!1,A=0;function G(){return`
      <nav id="${g}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${u.map(_=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${_.route}">
              <span class="admin-mobile-nav__o-icon">${_.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${_.labelKey?ServerI18n.t(_.labelKey):_.label}</span>
                <span class="admin-mobile-nav__o-desc">${_.descKey?ServerI18n.t(_.descKey):_.desc||""}</span>
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
          ${h.map(_=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${_.id}" data-mn-route="${_.route||""}" ${_.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${_.icon}</span>
              <span class="admin-mobile-nav__label">${_.labelKey?ServerI18n.t(_.labelKey):_.label}</span>
              ${_.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${_.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function O(){let _=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",x=$[_]||_;return h.some(T=>T.id===x)?x:u.some(T=>T.route===x)?"more":""}function R(){let _=document.getElementById(g);if(!_)return;let x=O();_.querySelectorAll("[data-mn-tab]").forEach(T=>{T.classList.toggle("is-active",T.dataset.mnTab===x),T.dataset.mnTab!=="more"&&T.setAttribute("aria-current",T.dataset.mnTab===x?"page":"false")})}function N(_){let x=document.getElementById(g);if(!x)return;B=_,x.dataset.overflow=_?"open":"closed",x.querySelector("[data-mn-overflow]").hidden=!_,x.querySelector("[data-mn-backdrop]").hidden=!_;let T=x.querySelector("[data-mn-tab='more']");T?.classList.toggle("is-active",_),T?.setAttribute("aria-expanded",_?"true":"false")}function D(_){if(_.target.closest("[data-mn-backdrop]")){N(!1);return}if(_.target.closest("[data-mn-logout]")){N(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let x=_.target.closest("[data-mn-tab]");if(x){if(x.dataset.mnTab==="more"){N(!B);return}N(!1),x.dataset.mnRoute&&(location.hash="#/"+x.dataset.mnRoute);return}let T=_.target.closest("[data-mn-route]");T&&T.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+T.dataset.mnRoute)}async function C(){try{let _=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!_.ok)return;let x=await _.json(),T=Array.isArray(x.pending)?x.pending.length:0;A=T;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(T),H.hidden=!(T>0)}catch{}}function y(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let _=0;function x(){let T=document.activeElement,H=T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(_),_=requestAnimationFrame(x)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(_),_=requestAnimationFrame(()=>setTimeout(x,50))})}function M(){document.getElementById(g)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",G()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{N(!1),R()}),R(),C(),setInterval(C,8e3),y())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M()})()});var St=ye(()=>{(function(){"use strict";var g="admin-session-expired-root",h=!1,u=null;function $(R,N){try{var D=window.ServerI18n&&ServerI18n.t(R);return D&&D!==R?D:N}catch{return N}}function B(){var R=document.getElementById(g);if(R&&R.remove(),document.body.classList.remove("is-session-expired"),h=!1,u&&u.focus)try{u.focus()}catch{}u=null}function A(R){if(R.key==="Tab"){var N=document.getElementById(g);if(N){var D=N.querySelectorAll("input, button");if(D.length){var C=D[0],y=D[D.length-1];R.shiftKey&&document.activeElement===C?(R.preventDefault(),y.focus()):!R.shiftKey&&document.activeElement===y&&(R.preventDefault(),C.focus())}}}}function G(){if(!(h||document.getElementById(g))){h=!0,u=document.activeElement,document.body.classList.add("is-session-expired");var R=document.createElement("div");R.id=g,R.className="admin-sx",R.setAttribute("role","alertdialog"),R.setAttribute("aria-modal","true"),R.setAttribute("aria-labelledby","admin-sx-title"),R.setAttribute("aria-describedby","admin-sx-body"),R.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+$("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+$("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+$("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+$("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+$("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+$("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(R),document.addEventListener("keydown",A,!0);var N=R.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),R.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),O(R,N)})}}function O(R,N){var D=R.querySelector("[data-sx-error]"),C=R.querySelector(".admin-sx__submit");D.hidden=!0,C.disabled=!0;var y=new URLSearchParams;y.set("password",N.value),R.querySelector("#admin-sx-remember").checked&&y.set("remember","1");var M=window.__adminRawFetch||window.fetch;M.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:y.toString()}).then(function(_){return _.json().then(function(x){return{status:_.status,data:x}},function(){return{status:_.status,data:{}}})}).then(function(_){if(C.disabled=!1,_.status===200&&_.data&&_.data.ok){var x=document.querySelector('meta[name="csrf-token"]');x&&_.data.csrf_token&&(x.content=_.data.csrf_token),document.removeEventListener("keydown",A,!0),B(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast($("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}_.status===429?D.textContent=$("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=$("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,N.select()}).catch(function(){C.disabled=!1,D.textContent=$("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:G,close:B,isOpen:function(){return h}}})()});var kt=ye(()=>{(function(){"use strict";let g="admin-reconnect-banner",B=0,A=0,G="ok",O=0,R=5e3,N=!1,D=0;function C(r){if(G!==r){if(G=r,r==="ok"||r==="dismissed"){M(),r==="ok"&&(B=0,A=0,R=5e3);return}y()}}function y(){let r=document.getElementById(g);r||(r=document.createElement("div"),r.id=g,r.className="admin-rcb",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.insertBefore(r,document.body.firstChild)),r.dataset.state=G;let e=G==="exhausted",f=e?"admin-rcb--crimson":"admin-rcb--amber";r.className=`admin-rcb ${f}`,r.innerHTML=e?x():_(),r.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),r.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>C("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",e),D||(D=setInterval(T,250))}function M(){let r=document.getElementById(g);r&&r.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function _(){let r=Math.max(0,(O-Date.now())/1e3),e=R/1e3,f=Math.min(100,(e-r)/e*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:A})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${f}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function x(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function T(){if(G!=="reconnecting")return;let r=document.getElementById(g);if(!r)return;let e=Math.max(0,(O-Date.now())/1e3),f=R/1e3,m=Math.min(100,(f-e)/f*100),w=r.querySelector(".admin-rcb__progress-fill");w&&(w.style.width=m+"%")}function H(){A=0,B=0,R=5e3,C("reconnecting"),E()}async function E(){try{let r=await fetch("/admin/bootstrap",{credentials:"same-origin"});r.ok?b():r.status===401||r.status===403?C("ok"):c()}catch{c()}}function b(){C("ok")}function c(){if(B+=1,A+=1,A>=10){C("exhausted");return}B>=3&&(R=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,A-1))),O=Date.now()+R,C("reconnecting"),setTimeout(E,R))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let r=window.csrfFetch,e=window.fetch;window.__adminRawFetch=e,document.addEventListener("admin:session-restored",()=>{N=!1,b()});async function f(m){try{let w=await m;return w&&w.ok?G!=="ok"&&G!=="dismissed"&&b():w&&w.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):w&&w.status>=500&&c(),w}catch(w){throw c(),w}}typeof r=="function"&&(window.csrfFetch=function(){return f(r.apply(this,arguments))}),window.fetch=function(m,w){let v=typeof m=="string"?m:m&&m.url||"",s=e.call(this,m,w);return v.startsWith("/admin/")||v.indexOf("//")===-1&&v.startsWith("admin/")?f(s):s}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var It=ye(()=>{(function(){"use strict";let g="admin-help-drawer-root",h={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},u=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],$=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function B(_){return _==null?"":String(_).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})}function A(){let _=(location.hash||"").replace("#/","").split("/")[0]||"";return h[_]?_:"_default"}function G(){return`
      <div id="${g}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function O(){let _=h[A()],x=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",T=_.titleKey?ServerI18n.t(_.titleKey):_.title,H=_.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${B(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),E=_.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${B(ServerI18n.t(_.fieldTipKey))}</span>
      </div>`:"",b=u.map(l=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${B(l.term)}</div>
        <div class="admin-help__glossary-def">${B(ServerI18n.t(l.defKey))}</div>
      </div>`).join(""),c=$.map(l=>`
      <a class="admin-help__resource" href="${B(l.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${B(l.label)}</span>
        <span class="admin-help__resource-url">${B(l.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${B(T)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${E}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${B(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${b}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${c}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${x?"v"+B(x):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function R(){let _=document.getElementById(g);_||(document.body.insertAdjacentHTML("beforeend",G()),_=document.getElementById(g),_.addEventListener("click",x=>{if(x.target.closest("[data-help-close]")){N();return}x.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),_.querySelector("[data-help-body]").innerHTML=O(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",C)}function N(){let _=document.getElementById(g);_&&_.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",C)}function D(){document.getElementById(g)?N():R()}function C(_){_.key==="Escape"&&(_.preventDefault(),N())}function y(_){let x=_.target;x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable)||_.key==="F1"&&(_.preventDefault(),D())}function M(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",y)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M(),window.AdminHelp={open:R,close:N,toggle:D}})()});var Tt=ye(()=>{(function(){"use strict";var g="admin-shortcuts-root",h=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function u(c,l){try{var r=window.ServerI18n&&ServerI18n.t(c);return r&&r!==c?r:l}catch{return l}}function $(c,l){window.showToast&&window.showToast(c,l!==!1)}function B(c,l){return(window.csrfFetch||window.fetch)(c,l||{})}function A(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function G(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function O(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function R(){var c="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(c=(await l.json()).state||"idle")}catch{}if(c==="idle"){location.hash="#/polls",$(u("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var r=c==="active";try{var e=await B(r?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!e.ok)throw new Error("HTTP "+e.status);$(u(r?"ksToastPollEnded":"ksToastPollStarted",r?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{$(u("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(c){return h?c.metaKey:c.ctrlKey}var D=h?"\u2318":"Ctrl",C=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(c){return N(c)&&(c.key==="k"||c.key==="K")},run:A},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(c){return c.key==="?"&&!N(c)&&!c.altKey||c.key==="/"&&N(c)},run:function(){H()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(c){return N(c)&&c.shiftKey&&(c.key==="d"||c.key==="D")},run:G},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(c){return N(c)&&c.shiftKey&&c.key==="Backspace"},run:O},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(c){return!N(c)&&"jkJK".indexOf(c.key)>=0},run:function(c){window.AdminLiveFeed.moveFocus(c.key==="j"||c.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(c){return!N(c)&&(c.key==="b"||c.key==="B")},run:function(c){window.AdminLiveFeed.blockFocused(c.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(c){return!N(c)&&c.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(c){return!N(c)&&(c.key==="p"||c.key==="P")},run:R}];function y(c){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(c):c==null?"":String(c).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function M(c){return C.filter(function(l){return l.group===c}).map(function(l){var r=l.keys.map(function(e){return e==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+y(e)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+y(u(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+r+"</span></div>"}).join("")}function _(){var c=document.getElementById(g);c&&c.remove(),document.removeEventListener("keydown",x,!0)}function x(c){(c.key==="Escape"||c.key==="?")&&(c.preventDefault(),_())}function T(){if(!document.getElementById(g)){var c=document.createElement("div");c.id=g,c.className="admin-ks",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-ks-title"),c.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+y(u("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+y(u("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+M("global")+'</div><div class="admin-ks__group-label">'+y(u("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+M("feed")+'</div><p class="admin-ks__note">'+y(u("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+y(u("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(c),c.addEventListener("click",function(r){r.target.closest("[data-ks-close]")&&_()}),document.addEventListener("keydown",x,!0);var l=c.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function H(){document.getElementById(g)?_():T()}function E(c){if(!c)return!1;if(c.isContentEditable)return!0;var l=(c.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function b(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(c){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=E(document.activeElement),r=0;r<C.length;r++){var e=C[r];if(e.group==="feed"){if(l||!b())continue}else if(l&&!N(c))continue;if(e.match(c)){c.preventDefault(),e.run(c);return}}}),window.AdminShortcuts={open:T,close:_,toggle:H,list:function(){return C.slice()}}})()});var _t=ye(()=>{(function(){"use strict";let g="theme-mode",h="admin-theme-mode",u="admin-theme-toggle";(function(){try{if(localStorage.getItem(g)!=null)return;let y=localStorage.getItem(h);(y==="light"||y==="dark"||y==="auto")&&(localStorage.setItem(g,y),localStorage.removeItem(h))}catch{}})();function B(){try{let C=localStorage.getItem(g);if(C==="light"||C==="dark"||C==="auto")return C}catch{}return"auto"}function A(C){try{localStorage.setItem(g,C)}catch{}}function G(C){let y=document.documentElement;C==="auto"?y.removeAttribute("data-theme"):y.setAttribute("data-theme",C),R(C)}function O(C){return C==="light"||C==="dark"?C:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function R(C){let y=document.getElementById(u);if(!y)return;let M=O(C);y.dataset.mode=C,y.dataset.effective=M,y.textContent=C==="auto"?"\u25D0":M==="light"?"\u2600":"\u263E",y.title=C==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:M==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):C==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let C=B(),y=C==="auto"?"light":C==="light"?"dark":"auto";A(y),G(y)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let C=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,y=document.getElementById(u);if(y){C&&y.classList.contains("admin-theme-toggle--floating")&&C.parentNode&&!C.parentNode.contains(y)&&(y.classList.remove("admin-theme-toggle--floating"),C.parentNode.insertBefore(y,C));return}let M=document.createElement("button");M.id=u,M.type="button",M.className="admin-theme-toggle",M.addEventListener("click",N),C&&C.parentNode?C.parentNode.insertBefore(M,C):(M.classList.add("admin-theme-toggle--floating"),document.body.appendChild(M)),R(B())}if(G(B()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{B()==="auto"&&R("auto")})}catch{}window.addEventListener("storage",C=>{C.key===g&&G(B())}),window.AdminThemeSwitcher={getMode:B,setMode:function(C){C!=="auto"&&C!=="light"&&C!=="dark"||(A(C),G(C),R(C),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:C}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var Et=ye(()=>{(function(){"use strict";var g={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},h=[];window.DanmuStore={get:function(u){return g[u]},set:function(u,$){g[u]=$,h.forEach(function(B){B(u,$)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+u,$)},subscribe:function(u){h.push(u)},getAll:function(){return Object.assign({},g)}}})()});var $t=ye(()=>{(function(){"use strict";let g=window.DANMU_CONFIG||{},h=Number(g.loginLimit)>0?Number(g.loginLimit):5,u=Number(g.loginWindow)>0?Number(g.loginWindow):300,$=0;function B(){return window.__adminCtx||{}}function A(){let N=B();return typeof N.getSettings=="function"?N.getSettings()||{}:{}}function G(){let N=A();if(N&&typeof N.OpsContact<"u"){let D=N.OpsContact;if(Array.isArray(D))return D[3]||D[0]||null;if(typeof D=="string")return D}return null}function O(){let N=B().appContainer||document.getElementById("app-container");if(!N)return;let D=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";N.innerHTML=`
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
    `;let C=N.querySelector("[data-login-reveal]");C&&C.addEventListener("click",()=>{let x=document.getElementById("password");if(!x)return;let T=x.type==="text";x.type=T?"password":"text",C.textContent=ServerI18n.t(T?"adminLoginReveal":"adminLoginHide");try{x.focus()}catch{}});let y=document.getElementById("loginForm"),M=document.getElementById("password"),_=document.getElementById("loginAttemptsHint");if(y){try{let x=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(x)&&x>0){$=x;let T=Math.max(0,h-$);if(_&&$>0&&T>0){_.hidden=!1;let H=document.getElementById("password");H&&H.classList.add("is-error"),_.textContent=ServerI18n.t("loginAttemptsRemaining",{n:T,min:Math.max(1,Math.ceil(u/60))})}}}catch{}y.addEventListener("submit",async x=>{if(x.preventDefault(),!M)return;let T=new URLSearchParams;T.set("password",M.value),document.getElementById("admin-login-remember")?.checked&&T.set("remember","1");try{let H=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:T.toString(),redirect:"manual"});if(H.status===429){let E=H.headers.get("Retry-After"),b=parseInt(E,10),c=Number.isFinite(b)&&b>0?b:u;R(c);return}$+=1;try{sessionStorage.setItem("admin_login_attempts",String($))}catch{}window.location.reload()}catch(H){console.error("Login submit failed:",H),_&&(_.hidden=!1,_.textContent=ServerI18n.t("networkError"))}})}}function R(N){let D=document.getElementById("adminLoginCard");if(!D)return;let C=G(),y=C?`<a class="admin-lockout-contact" href="${C}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";D.classList.add("admin-lockout-card"),D.innerHTML=`
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
        ${y}
      </div>
    `;let M=document.getElementById("lockoutCountdown"),_=N,x=H=>{let E=Math.floor(H/60),b=H%60;return`${String(E).padStart(2,"0")}:${String(b).padStart(2,"0")}`};M&&(M.textContent=x(_));let T=setInterval(()=>{_-=1,M&&(M.textContent=x(Math.max(0,_))),_<=0&&(clearInterval(T),$=0,O(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:O,renderLockout:R}})()});var xt=ye(()=>{(function(){"use strict";function g(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function h(d){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(d):String(d??"").replace(/[&<>"']/g,k=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[k])}async function u(){try{let d=g();await d.prime();let k=d.get("history_stats"),[L,j,P]=await Promise.all([k?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!j.ok)return;let V=k||(L&&L.ok?await L.json():null);if(!V)return;let U=((await j.json()).distribution||[]).reduce((K,Y)=>Y.count>(K?.count||-1)?Y:K,null),ee=U?U.count:0,J=U?(U.hour||"").slice(-5):"\u2014",W=document.querySelector('[data-kpi="peak"]');W&&(W.querySelector("[data-kpi-value]").textContent=ee.toLocaleString());let Z=document.querySelector('[data-kpi="unique-fp"]');if(Z){let K=new Set;(V.records||[]).forEach(Y=>{let ne=Y.fingerprint||Y.fp||Y.user_fingerprint;ne&&K.add(ne)}),Z.querySelector("[data-kpi-value]").textContent=K.size.toLocaleString()}G(P&&P.ok?await P.json():null)}catch{}}let $=null,B=null;function A(){let d=document.querySelector('[data-kpi="session"] [data-kpi-value]');if(!d)return;let k=$?E($):"\u2014";d.textContent!==k&&(d.textContent=k)}function G(d){let k=!!(d&&d.status==="live"&&d.started_at),L=document.querySelector('[data-kpi="messages"] [data-kpi-value]');if(L){let j=k&&typeof d.message_count=="number"?d.message_count.toLocaleString():"\u2014";L.textContent!==j&&(L.textContent=j)}$=k?d.started_at:null,A(),k&&!B?B=setInterval(A,1e3):!k&&B&&(clearInterval(B),B=null)}function O(d,k){let L=document.querySelector(d);if(L){if(typeof k!="number"||k<=0){L.hidden=!0;return}L.hidden=!1,L.textContent=k>999?"999+":String(k)}}async function R(){try{let d=g();await d.prime();let k=d.get("blacklist"),L=d.get("widgets"),j=d.get("history_stats"),P=d.get("effects");O("[data-count-blacklist]",Array.isArray(k)?k.length:0),O("[data-count-widgets]",Array.isArray(L?.widgets)?L.widgets.length:0),O("[data-count-messages]",j?.stats?.last_24h||0),O("[data-count-effects]",Array.isArray(P?.effects)?P.effects.length:0);try{let V=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(V.ok){let F=await V.json();O("[data-count-plugins]",Array.isArray(F?.plugins)?F.plugins.length:0)}}catch{}}catch{}}async function N(){R(),D(),S()}async function D(){let d=document.querySelector("[data-dash-poll-body]"),k=document.querySelector("[data-dash-poll-timer]");if(d)try{let L=g();await L.prime();let P=L.get("metrics");if(!P){let J=await fetch("/admin/metrics",{credentials:"same-origin"});if(!J.ok)return;P=await J.json()}let V=P.poll_state;if(!V||!V.active||!Array.isArray(V.options)||V.options.length===0){d.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,k&&(k.textContent="");return}let F=V.options.reduce((J,W)=>J+(W.votes||0),0),U=["A","B","C","D","E","F"],ee=0;if(V.options.forEach((J,W)=>{(J.votes||0)>(V.options[ee].votes||0)&&(ee=W)}),d.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${h(V.question||ServerI18n.t("dashPollRunning"))}</div>`+V.options.map((J,W)=>{let Z=F?Math.round(J.votes/F*100):0;return`
            <div class="admin-dash-poll-opt ${W===ee&&F>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${U[W]||String(W+1)}</span>
                <span class="label">${h(J.label||"")}</span>
                <span class="pct">${Z}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:J.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${Z}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:F})}</div>`,k){let J=V.remaining_seconds;k.textContent=typeof J=="number"&&J>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(J/60),ss:String(J%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function C(d){let k=d.visible!==!1,L=d.config&&d.config.title||d.type||"widget",j=(d.type||"widget").toUpperCase(),P=(d.position||"\u2014").toUpperCase(),V=k?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",F=d.created_at&&k?Math.max(0,Math.floor(Date.now()/1e3-d.created_at)):null,U=F!=null?(()=>{let ee=Math.floor(F/86400),J=Math.floor(F%86400/3600),W=Math.floor(F%3600/60),Z=F%60;return ee>0?`UPTIME \xB7 ${ee}d ${String(J).padStart(2,"0")}h`:J>0?`UPTIME \xB7 ${J}:${String(W).padStart(2,"0")}:${String(Z).padStart(2,"0")}`:`UPTIME \xB7 ${W}:${String(Z).padStart(2,"0")}`})():`STATUS \xB7 ${k?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${h(d.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${V}"></span>
          <span class="kind">${h(j)}</span>
          <span class="cat">${h(P)}</span>
        </div>
        <div class="title">${h(L)}</div>
        <div class="uptime">${U}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${k?" is-active":""}" data-widget-action="toggle" data-running="${k?"1":"0"}">${k?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function y(d,k){try{let L=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:d,config:{visible:!k}})});if(!L.ok)throw new Error("HTTP "+L.status);_()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(d){d.dataset.bound!=="1"&&(d.dataset.bound="1",d.addEventListener("click",k=>{let L=k.target.closest(".admin-dash-widget-tile");if(!L)return;let j=k.target.dataset.widgetAction,P=L.dataset.widgetId;if(!(!j||!P)){if(j==="toggle")y(P,k.target.dataset.running==="1");else if(j==="config"){let V=document.querySelector('[data-route="widgets"]');V&&V.click()}}}))}async function _(){let d=document.querySelector("[data-dash-widgets]");if(d)try{let k=g();await k.prime();let L=k.get("widgets");if(!L){let P=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!P.ok){d.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}L=await P.json()}let j=(L.widgets||L.items||[]).slice(0,4);if(j.length===0){d.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}d.innerHTML='<div class="admin-dash-widget-grid">'+j.map(C).join("")+"</div>",M(d)}catch{d.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let x=null,T=null,H=null;function E(d){let k=Math.max(0,Math.floor(Date.now()/1e3-d)),L=Math.floor(k/3600),j=Math.floor(k%3600/60),P=k%60;return L>0?`${L}:${String(j).padStart(2,"0")}:${String(P).padStart(2,"0")}`:`${String(j).padStart(2,"0")}:${String(P).padStart(2,"0")}`}function b(d){let k=document.getElementById("admin-session-banner"),L=document.getElementById("sec-live-feed");if(L&&L.classList.toggle("is-idle-collapsed",!(d&&d.status==="live")),k&&k.classList.toggle("is-hero",!(d&&d.status==="live")),!k)return;if(x=d,!(d&&d.status==="live"))k.hidden=!1,k.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let P=d.started_at||Date.now()/1e3;k.hidden=!1,k.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${h(d.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
          <div class="admin-session-live-actions" data-current-behavior="${d.viewer_end_behavior||"continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`,c(P)}k.dataset.bound||(k.dataset.bound="1",k.addEventListener("click",r))}function c(d){H&&clearInterval(H);let k=()=>{let L=document.querySelector("[data-sess-timer]");L&&(L.textContent=E(d))};k(),H=setInterval(k,1e3)}function l(){H&&(clearInterval(H),H=null)}async function r(d){let k=d.target.closest("[data-sess-action]");if(!k)return;let L=k.dataset.sessAction;if(L==="open"){let j=document.querySelector("[data-sess-name]"),P=(j?j.value:"").trim();if(!P){j&&j.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}k.disabled=!0;try{let V=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P})}),F=await V.json();if(!V.ok){window.showToast&&window.showToast(F.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:P}),!0),b(F.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{k.disabled=!1}}else if(L==="close"){let j=k.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",P=(U,ee)=>`<option value="${U}"${U===j?" selected":""}>${ee}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${P("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${P("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${P("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;k.disabled=!0;let F=document.getElementById("sessCloseBehavior")?.value;if(F&&F!==j)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:F})})}catch{}try{let U=await window.csrfFetch("/admin/session/close",{method:"POST"}),ee=await U.json();if(!U.ok){window.showToast&&window.showToast(ee.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),l(),b({status:"idle",viewer_end_behavior:ee.archived&&ee.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{k.disabled=!1}}}async function e(){try{let d=await fetch("/admin/session/current",{credentials:"same-origin"});if(!d.ok)return;let k=await d.json();b(k),G(k)}catch{}}function f(){e(),T&&clearInterval(T),T=setInterval(e,1e4)}function m(){T&&(clearInterval(T),T=null),l()}let w=null,v=null,s=0;function o(){let d=document.querySelector("[data-overlay-pill]"),k=v;if(!d||!k)return;d.classList.toggle("is-on",!!k.live),d.classList.toggle("is-off",!k.live);let L=d.querySelector("[data-overlay-pill-state]");if(L){let j=k.live?"statusOn":"statePaused",P=ServerI18n.t(j);L.dataset.i18n=j,L.textContent!==P&&(L.textContent=P)}}async function p(){if(!document.querySelector("[data-overlay-pill]"))return;let d=s;try{let k=await fetch("/admin/broadcast/status",{credentials:"same-origin"});if(!k.ok||d!==s)return;v={live:(await k.json()).mode==="live",count:v?v.count:0},o()}catch{}}function n(){o();let d=document.querySelector("[data-cockpit-overlay]"),k=window.AdminOverlayControl,L=v;if(!d||!k||!L)return;d.classList.toggle("is-on",L.live);let j=(F,U)=>{F.textContent!==U&&(F.textContent=U)},P=d.querySelector("[data-cockpit-status]");P&&j(P,k.statusText(L.live,L.count));let V=d.querySelector('[data-cockpit-action="toggle"]');V&&(V.dataset.i18n=k.toggleKey(L.live),j(V,ServerI18n.t(V.dataset.i18n)),V.dataset.next=L.live?"standby":"live")}async function t(){let d=document.querySelector("[data-cockpit-overlay]");if(!d||d.offsetParent===null)return;let k=s,L=null,j=null;try{let F=await fetch("/overlay_status",{credentials:"same-origin"});F.ok&&(L=(await F.json()).overlay_count||0)}catch{}try{let F=await fetch("/admin/broadcast/status",{credentials:"same-origin"});F.ok&&(j=(await F.json()).mode==="live")}catch{}let P=v;if(!P&&j===null)return;v={live:j!==null&&k===s?j:P?P.live:j,count:L!==null?L:P?P.count:0},n()}document.addEventListener("admin-overlay-state",d=>{let k=d&&d.detail||{};s+=1,v={live:!!k.live,count:typeof k.count=="number"?k.count:v?v.count:0},n()}),document.addEventListener("admin-route-applied",d=>{let k=d&&d.detail&&d.detail.route;if(k!=="live"&&k!=="dashboard"){k!=="overlay"&&p();return}n(),t()});function a(){let d=document.querySelector("[data-cockpit-overlay]");if(!d||d.dataset.bound)return;d.dataset.bound="1",d.addEventListener("click",async j=>{let P=j.target.closest("[data-cockpit-action]");if(!P)return;let V=P.dataset.cockpitAction;if(V==="clear"){window.AdminOverlayControl?.clearScreen();return}V==="toggle"&&(await window.AdminOverlayControl?.setDisplay(P.dataset.next==="live"),t())});let k=d.parentElement&&d.parentElement.querySelector('[data-cockpit-action="idle-qr"]');k&&k.addEventListener("click",i);let L=d.parentElement&&d.parentElement.querySelector('[data-cockpit-action="poll"]');L&&L.addEventListener("click",()=>{location.hash="#/polls"})}async function i(){let d;try{let j=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!j.ok)throw new Error("HTTP "+j.status);d=await j.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let k=document.createElement("div");if(k.className="admin-soh-qr",k.innerHTML=d.svg,d.source==="unavailable"){let j=document.createElement("p");j.className="admin-soh-urlwarn",j.textContent=d.blocked_host?ServerI18n.t("joinUrlNotTrusted",{host:d.blocked_host}):ServerI18n.t("joinUrlLocalOnly"),k.appendChild(j)}await window.HudConfirm?.open({icon:"\u25A6",titleText:d.url,body:k,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(d.url)}function S(){a(),t(),w&&clearInterval(w),w=setInterval(t,5e3)}function I(){w&&(clearInterval(w),w=null)}window.AdminDashboard={refreshKpi:u,refreshSummary:N,refreshSidebarBadges:R,populatePoll:D,populateWidgets:_,refreshSessionBanner:e,startSessionPolling:f,stopSessionPolling:m,refreshCockpitOverlay:t,renderCockpitOverlay:n,startCockpitPolling:S,stopCockpitPolling:I}})()});var Lt=ye(()=>{(function(){"use strict";let g="sec-viewer-config-defaults",h="sec-overlay-layout",u="sec-viewer-config-limits",$=["sec-themes",g,"sec-viewer-theme",u],B=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(Q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[Q]})},G=window.DANMU_CONFIG?.settingRanges||{},O=Object.fromEntries(Object.entries({Opacity:{min:20,max:100,step:1,unit:"%"},FontSize:{min:16,max:64,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}}).map(([q,Q])=>{let X=G[q]||{};return[q,{...Q,min:Number.isFinite(Number(X.min))?Number(X.min):Q.min,max:Number.isFinite(Number(X.max))?Number(X.max):Q.max}]})),R=[14,20,32,44,64],N=window.DANMU_CONFIG?.defaultColorPalette||[],D=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}],C={stroke:[{value:"none",labelKey:"themeStrokeNone"},{value:"thin",labelKey:"themeStrokeThin"},{value:"thick",labelKey:"themeStrokeThick"}],shadow:[{value:"none",labelKey:"themeShadowNone"},{value:"soft",labelKey:"themeShadowSoft"},{value:"strong",labelKey:"themeShadowStrong"}]};function y(q,Q){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let X=window.ServerI18n.t(q,Q);if(X&&X!==q)return X}return q}let M={};function _(q){if(M[q]!=null)return M[q];let Q=O[q];return Q?Q.step:1}function x(q,Q){M[q]=Number(Q)||_(q)}let T={options:null,fonts:[],allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},H=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],E=["Color","FontFamily","Layout"];function b(q){return E.indexOf(q)!==-1}function c(q){let Q=T.options&&T.options[q],X=Q&&Q[1];return Array.isArray(X)?X.slice():[]}function l(q){return q==="Color"?N.map(Q=>Q.replace(/^#/,"").toUpperCase()):q==="Layout"?D.map(Q=>Q.value):q==="FontFamily"?(T.fonts&&T.fonts.length?T.fonts:["NotoSansTC","Inter"]).map(X=>typeof X=="string"?X:X.name||X.family||"").filter(Boolean):[]}function r(q,Q){return q==="Color"?String(Q||"").replace(/^#/,"").toUpperCase():String(Q||"")}function e(){return`
      <div id="${g}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-dsp2-grid">
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head" aria-hidden="true">
              <span>${A(y("displayColParam"))}</span>
              <span>${A(y("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right">${A(y("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):A(y("loading"))}
            </div>
          </div>

          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${A(y("mlLivePreview"))}</span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${A(y("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${A(y("displayPreviewSample2"))}</span>
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
                \u21BA ${A(y("displayDeployRevert"))}
              </button>
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export">
                \u2197 ${A(y("displayExportJson"))}
              </button>
            </div>
          </div>
        </div>

        <!-- \u89C0\u773E\u5916\u90E8\u5716\u7247\uFF085.8.0\uFF09\u3002\u9810\u8A2D\u95DC\u9589\uFF1B\u5224\u65B7\u5728\u4F3A\u670D\u5668\uFF08/fire\uFF09\uFF0C\u9019\u88E1\u53EA\u8B80\u5BEB
             /admin/viewer-images\u3002\u95DC\u9589\u6642\u7DB2\u7AD9\u8207\u683C\u5F0F\u5169\u5217\u6536\u8D77\u4F86\u3002 -->
        <div id="viewer-images-group">
          <div class="admin-ui-group-label">${A(y("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${A(y("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall admin-vi-row" data-vi-row style="display:none">
              <label class="lbl" for="viewer-images-hosts">${A(y("viHosts"))}</label>
              <span class="val admin-vi-hosts">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off"
                  placeholder="${A(y("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row admin-vi-row" data-vi-row style="display:none" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${A(y("viExtensions"))}</span>
              <span class="val admin-vi-exts" id="viewer-images-extensions">
                ${H.map(q=>`
                <label class="admin-vi-ext">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${q.value}" />
                  <span>${q.label}</span>
                </label>`).join("")}
              </span>
            </div>
          </div>
        </div>
      </div>`}function f(){return`
      <details id="${h}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
        <summary class="admin-ui-page-title">${A(y("overlayLayoutFoldTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
          <div class="admin-ui-group-label">${A(y("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlMaxTracks"))}
                <span class="sub">${A(y("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlAvoidOverlap"))}
                <span class="sub">${A(y("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${A(y("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002 -->
          <div class="admin-ui-group-label">${A(y("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlSafeArea"))}
                <span class="sub">${A(y("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${A(y("dlStrokeMode"))}
                <span class="sub">${A(y("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${A(y("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${A(y("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${A(y("dlStrokeNever"))}</button>
              </span>
            </div>
            <!-- 2026-09-08\uFF1A\u6253\u5B57\u6295\u7968\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\uFF0C
                 \u800C\u662F\u8ABF\u6697\u3002\u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${A(y("dlDimPollVotes"))}
                <span class="sub">${A(y("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${A(y("dlPollVoteOpacity"))}
                <span class="sub">${A(y("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>
      </details>`}let m=[{key:"Opacity",labelKey:"displayLabelOpacity",kind:"slider",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",kind:"size",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",kind:"slider",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",kind:"color",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`},{key:"FontFamily",labelKey:"displayLabelFontFamily",kind:"pick",fmt:q=>q||"\u2014"},{key:"Layout",labelKey:"displayLabelLayout",kind:"pick",fmt:q=>w(q)},{key:"Effects",labelKey:"displayLabelEffect",kind:"effects",fixed:!0},{key:"stroke",labelKey:"themeDetailStroke",kind:"theme",fixed:!0},{key:"shadow",labelKey:"themeDetailShadow",kind:"theme",fixed:!0}];function w(q){let Q=D.find(X=>X.value===q);return Q?y(Q.labelKey):q||"\u2014"}function v(q){let Q=window.AdminThemes;return Q&&typeof Q.segOf=="function"?Q.segOf(q):null}function s(q){let Q=T.options||{};if(q.kind==="theme")return!1;if(q.kind==="effects")return!Q.Effects||Q.Effects[0]!==!1;let X=Q[q.key];return!!(X&&X[0]!==!1)}function o(q){let Q=window.AdminThemes,X=Q&&typeof Q.styleDefaults=="function"?Q.styleDefaults():null;return X&&X[q]||null}function p(q){let Q=o(q);return Q&&Q.source==="theme"?Q.value:(T.options&&T.options[q]||[])[3]}function n(q){if(q.key!=="Color"&&q.key!=="FontFamily")return"";let Q=o(q.key);return Q?Q.source==="theme"?`<span class="admin-ui-chip" data-source-chip="theme">${A(y("styleFromTheme"))}</span>`:Q.rejected?`<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${A(String(Q.theme_value||""))}">${A(y("styleThemeValueUnused"))}</span>`:"":""}function t(q){let Q=s(q),X=a(q);return(X?`<div class="admin-dsp2-value-badge ${Q?"is-on":""}" data-value-badge>${A(X)}</div>`:"")+n(q)}function a(q){if(q.key==="Color"||q.key==="FontFamily")return q.fmt(p(q.key));if(q.kind==="theme"){let ie=v(q.key),fe=C[q.key].find(ve=>ve.value===ie);return fe?y(fe.labelKey):"\u2014"}if(q.kind==="effects")return"";let X=(T.options&&T.options[q.key]||[])[3];return q.fmt?q.fmt(X):X!=null?String(X):"\u2014"}function i(q,Q){let X=Q[3],ie=O[q.key],fe=s(q);if(q.kind==="slider"){let ve=ie,ge=X!=null?Number(X):ve.min,be=isFinite(ge)?ge:ve.min,Ce=(be-ve.min)/Math.max(1e-6,ve.max-ve.min)*100,_e=A(y(q.labelKey));return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            aria-label="${_e}"
            min="${ve.min}" max="${ve.max}" step="${_(q.key)}" value="${A(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Ce.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Ce.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}" aria-label="${_e}"
              min="${ve.min}" max="${ve.max}" step="${_(q.key)}" value="${A(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(q.kind==="size"){let ve=Number(X);return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${R.map(ge=>{let be=ve===ge;return`<button type="button" class="admin-dsp2-fchip ${be?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ge}" aria-pressed="${be}">${ge}</button>`}).join("")}
        </div>`}if(q.kind==="color"){let ve="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${P().map(ge=>{let be=ge.slice(1),Ce=ge.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Ce?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ge}" aria-label="${ge}" aria-pressed="${Ce}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${A(y("specificColor"))}">
            <span class="sr-only">${A(y("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${A(ve)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ve=(T.fonts&&T.fonts.length?T.fonts:["NotoSansTC","Inter"]).map(we=>{let Be=typeof we=="string"?we:we.name||we.family||"",Ne=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Be,label:Ne}}).filter(we=>we.value),ge=String(X||""),be=fe&&!!T.allowlistEdit.FontFamily,Ce=be?T.allowlistEdit.FontFamily:new Set(c("FontFamily").map(we=>r("FontFamily",we))),_e=!be&&Ce.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map(we=>{let Be=we.value===ge,Ne=be?Ce.has(we.value):_e||Ce.has(we.value),Re=["admin-dsp2-tchip",Be?"is-active":"",be?"is-editing":"",fe&&!Ne?"is-blocked":""].filter(Boolean).join(" "),ze=be?`data-allow-key="FontFamily" data-allow-value="${A(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${A(we.value)}"`;return`<button type="button" class="${Re}" ${ze}
              aria-pressed="${be?Ne?"true":"false":Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ne?"\u2713 ":""}</span>`:""}${A(we.label)}
            </button>`}).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${A(y("adminRouteTitle_fonts"))} \u203A</a>
        </div>
        ${S(q)}
      `}if(q.key==="Layout"){let ve=String(X||"scroll"),ge=fe&&!!T.allowlistEdit.Layout,be=ge?T.allowlistEdit.Layout:new Set(c("Layout").map(_e=>r("Layout",_e))),Ce=!ge&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${D.map(_e=>{let we=_e.value===ve,Be=ge?be.has(_e.value):Ce||be.has(_e.value),Ne=["admin-dsp2-tile",we?"is-active":"",ge?"is-editing":"",fe&&!Be?"is-blocked":""].filter(Boolean).join(" "),Re=ge?`data-allow-key="Layout" data-allow-value="${_e.value}"`:`data-chip-key="Layout" data-chip-value="${_e.value}"`;return`<button type="button" class="${Ne}" ${Re}
              aria-pressed="${ge?Be?"true":"false":we?"true":"false"}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${_e.icon}</span>
              <span class="admin-dsp2-tile-label">${y(_e.labelKey)}</span>
              ${ge?`<span class="admin-dsp2-allow-mark">${Be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${S(q)}
      `}if(q.kind==="effects")return`<a class="admin-dsp2-link" href="#/effects">${A(y("adminNavEffects"))} \u203A</a>`;if(q.kind==="theme"){let ve=v(q.key);return`
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${q.key}" role="group"
              aria-label="${A(y(q.labelKey))}">
          ${C[q.key].map(ge=>{let be=ge.value===ve;return`<button type="button" data-theme-opt="${ge.value}" class="${be?"is-active":""}"
              aria-pressed="${be?"true":"false"}">${A(y(ge.labelKey))}</button>`}).join("")}
        </span>`}return""}function S(q){if(!b(q.key)||!s(q))return"";let Q=!!T.allowlistEdit[q.key],X=c(q.key),ie=l(q.key).length||0,fe=X.length>0?y("displayAllowSummaryPartial",{n:X.length,total:ie,label:I(q.key)}):y("displayAllowSummaryAll",{total:ie});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${A(fe)}</span>
        ${Q?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${A(y("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${A(y("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${A(y("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}">${A(y("displayEditAllowlistTitle"))}</button>
        `}
      </div>`}function I(q){return y(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function d(q,Q){if(q.kind!=="slider"&&q.kind!=="size"||!s(q))return"";let X=O[q.key],ie=Q[1]!=null?Q[1]:X.min,fe=Q[2]!=null?Q[2]:X.max,ve=_(q.key),ge=(be,Ce,_e,we)=>`
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${A(y(be))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="${Ce}" ${we}
              value="${A(String(_e))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </span>
        </label>`;return`
      <div class="admin-dsp2-band">
        ${ge("displayMinAudience",1,ie,`min="${X.min}" max="${X.max}" step="${ve}"`)}
        ${ge("displayMaxAudience",2,fe,`min="${X.min}" max="${X.max}" step="${ve}"`)}
        ${ge("mlStep","step",ve,'min="0.1" step="0.1"')}
      </div>`}function k(q){let Q=s(q),X=A(y(q.labelKey)+" \xB7 "+y("displayColAudience")),ie=A(y(Q?"displayCustomizable":"displayLocked")),fe=q.fixed?`disabled aria-disabled="true" data-fixed-toggle="${q.key}"`:`data-toggle-key="${q.key}"`;return`
      <button type="button" class="admin-dsp2-pill ${Q?"is-on":""}" ${fe}
        aria-pressed="${Q?"true":"false"}" aria-label="${X}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${ie}</span>
      </button>`}function L(q){let Q=T.options&&T.options[q.key]||[!1,"","",""],X=s(q),ie=q.kind==="color"&&X?'<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>':"";return`
      <div class="admin-dsp2-row ${X?"is-on":"is-off"} ${q.fixed?"is-fixed":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${A(y(q.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${t(q)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${i(q,Q)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${d(q,Q)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${k(q)}</div>
      </div>${ie}`}function j(){let q=document.getElementById("dsp2-rows");if(q){if(!T.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):A(y("loading"))}`;return}q.innerHTML=m.map(L).join(""),ee(),Z()}}function P(){let q=c("Color");return[...new Set((q.length?q:N).map(Q=>"#"+String(Q).replace(/^#/,"").toUpperCase()).filter(Q=>/^#[0-9A-F]{6}$/.test(Q)))]}function V(q){let Q=q.slice(1).match(/.{2}/g).map(X=>{let ie=parseInt(X,16)/255;return ie<=.04045?ie/12.92:((ie+.055)/1.055)**2.4});return Q[0]*.2126+Q[1]*.7152+Q[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function F(q,Q="error"){T.paletteNotice={message:q,type:Q};let X=document.querySelector("[data-palette-feedback]");X&&(X.textContent=q,X.classList.toggle("is-error",Q==="error"))}function U(q,Q=!0){let X=document.querySelector("[data-admin-color-palette]"),ie=X?.querySelector("[data-palette-preview-text]");!ie||!/^#[0-9A-F]{6}$/i.test(q)||(T.palettePreview=q.toUpperCase(),ie.style.color=q,X.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),X.querySelectorAll("[data-palette-preview]").forEach(fe=>{let ve=fe.dataset.palettePreview===q.toUpperCase();fe.setAttribute("aria-pressed",String(ve)),fe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),Q&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ie.getAnimations().forEach(fe=>fe.cancel()),ie.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function ee(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!T.options)return;let Q=P(),X=(T.options.ViewerColorPicker||[!0])[0]!==!1,ie=T.paletteBusy?"disabled":"",fe=T.palettePreview||Q[0],ve=A(T.paletteDraft),ge=T.paletteNotice;q.setAttribute("aria-busy",String(T.paletteBusy)),q.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${A(y("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${A(y("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${A(y("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${Q.length}</strong><span>${A(y("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${Q.map((be,Ce)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${V(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${A(y("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===fe}" ${ie}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Ce+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${Q.length<=1?"disabled":ie}
                aria-label="${A(y("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${A(y("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${A(y("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(T.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${ie} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${T.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${ie} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${Q.length>=64?"disabled":ie}>
                <span aria-hidden="true">\uFF0B</span> ${A(y("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${A(y(Q.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${ge?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${ge?A(ge.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${A(y("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${A(y("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${fe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${A(y("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${A(y("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${A(y("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${X?"checked":""} ${ie} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${A(y("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,U(fe,!1)}async function J(q,Q){if(T.paletteBusy)return;let X=document.querySelector("[data-admin-color-palette]");T.paletteBusy=!0,X.setAttribute("aria-busy","true"),X.querySelector("[data-palette-sync-status]").textContent=y("viewerPaletteSaving"),X.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let ie=await de("Color",q);T.paletteBusy=!1,T.paletteNotice={type:ie?"success":"error",message:y(ie?"viewerPaletteSaved":"updateFailed")},ie&&Q&&(T.palettePreview=Q),ee(),(Q&&ie?X.querySelector(`[data-palette-preview="${Q}"]`):X.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function W(q,Q){let X=T.options&&T.options[q];return X&&X[3]!=null?X[3]:Q}function Z(){let q=document.querySelector("[data-preview-stage]"),Q=document.querySelector("[data-preview-pill='1']"),X=document.querySelector("[data-preview-pill='2']"),ie=document.querySelector("[data-preview-foot-l]"),fe=document.querySelector("[data-preview-foot-r]");if(!q||!Q||!X||!T.options)return;let ve=Number(W("FontSize",32)),ge=Number(W("Opacity",92)),be=Number(W("Speed",1)),Ce="#"+String(p("Color")||W("Color","7DD3FC")).replace(/^#/,""),_e=String(p("FontFamily")||W("FontFamily","NotoSansTC")),we=String(W("Layout","scroll")),Be=Math.min(ve,36),Ne=Math.max(0,Math.min(100,ge))/100,Re=window.AdminThemes&&window.AdminThemes.activeStyles&&window.AdminThemes.activeStyles()||{},ze=Re.textStroke?Math.max(0,Math.min(6,Number(Re.strokeWidth)||0)):0,et=/^#[0-9a-fA-F]{3,8}$/.test(String(Re.strokeColor||""))?Re.strokeColor:"#000000",nt=Re.textShadow?Math.max(0,Math.min(40,Number(Re.shadowBlur)||0)):0;Q.style.fontSize=Be+"px",Q.style.color=Ce,Q.style.opacity=Ne.toFixed(2),Q.style.fontFamily=_e+", system-ui, sans-serif",Q.style.webkitTextStroke=ze?`${ze}px ${et}`:"",Q.style.paintOrder=ze?"stroke fill":"",Q.style.textShadow=nt?`0 0 ${nt}px ${Ce}`:"none",X.style.fontSize=(Be*.78).toFixed(0)+"px",X.style.opacity=(Ne*.9).toFixed(2),X.style.fontFamily=_e+", system-ui, sans-serif",q.dataset.layout=we,ie&&(ie.textContent=`${w(we)} \xB7 ${ve}px \xB7 ${(+be).toFixed(1)}\xD7`),fe&&(fe.textContent=y("displayOpacitySuffix",{n:Math.round(ge)}))}let K=["Color","ViewerColorPicker","FontFamily"];function Y(q){K.includes(q)&&window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh()}async function ne(q,Q){try{let X=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!Q})});if(!X.ok)throw new Error("toggle "+X.status);Array.isArray(T.options[q])||(T.options[q]=[!1,"","",""]),T.options[q][0]=!!Q,Q||delete T.allowlistEdit[q],j(),Y(q),q==="ViewerColorPicker"?document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0}):document.querySelector(`[data-toggle-key="${q}"]`)?.focus({preventScroll:!0});let ie=m.find(ve=>ve.key===q),fe=q==="ViewerColorPicker"?y("viewerPaletteAllowPicker"):ie?y(ie.labelKey):q;window.showToast&&window.showToast(`${fe} ${y("settingsUpdated")}`,!0)}catch(X){console.warn("[admin-display] toggle failed:",X),window.showToast&&window.showToast(y("updateFailed"),!1),await me(),j()}}async function re(q,Q,X){try{let ie=X;if(q==="Color"){let ve=String(ie).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(y("colorFormatError"),!1);return}ie=ve.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){ie=q==="Speed"?parseFloat(ie):parseInt(ie,10);let ve=O[q];if(Number.isNaN(ie)||ve&&(ie<ve.min||ie>ve.max)){window.showToast&&window.showToast(`${q} ${ve.min}\u2013${ve.max}`,!1);return}}let fe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:ie,index:Q})});if(!fe.ok)throw new Error("update "+fe.status);Array.isArray(T.options[q])||(T.options[q]=[!1,"","",""]),T.options[q][Q]=ie,ue(q),Z(),Y(q)}catch(ie){console.warn("[admin-display] update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}async function de(q,Q){try{let X=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:Q})});if(!X.ok)throw new Error("allowlist "+X.status);let ie=await X.json().catch(()=>({}));ie&&Array.isArray(ie.option)?T.options[q]=ie.option:Array.isArray(T.options[q])&&(T.options[q][1]=Q.slice()),ue(q),Z(),Y(q);let fe=l(q).length||0,ve=q==="Color"?y("settingsUpdated"):Q.length>0?y("displayAllowlistToastPartial",{key:q,n:Q.length,total:fe}):y("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(X){return console.warn("[admin-display] allowlist failed:",X),q!=="Color"&&window.showToast&&window.showToast(y("updateFailed"),!1),!1}}function ue(q){let Q=document.querySelector(`#${g} [data-row-key="${q}"]`);if(!Q||!T.options)return;let X=m.find(ge=>ge.key===q);if(!X)return;let ie=T.options[q]||[!1,"","",""],fe=ie[3],ve=Q.querySelector("[data-row-badges]");if(ve&&(ve.innerHTML=t(X)),b(q)||X.kind==="theme"){let ge=Q.querySelector("[data-picker-host]");ge&&(ge.innerHTML=i(X,ie));return}if(q==="FontSize"){Q.querySelectorAll(`[data-chip-key="${q}"]`).forEach(be=>{let Ce=String(be.getAttribute("data-chip-value"))===String(fe??"");be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")});let ge=Q.querySelector("[data-band-host]");ge&&!ge.contains(document.activeElement)&&(ge.innerHTML=d(X,ie))}if(X.kind==="slider"){let ge=O[q],be=Number(fe??ge.min),Ce=(be-ge.min)/Math.max(1e-6,ge.max-ge.min)*100,_e=Q.querySelector(".admin-dsp2-slider-fill"),we=Q.querySelector(".admin-dsp2-slider-thumb");_e&&(_e.style.width=Ce.toFixed(2)+"%"),we&&(we.style.left=`calc(${Ce.toFixed(2)}% - 8px)`);let Be=Q.querySelector(".admin-dsp2-range");Be&&document.activeElement!==Be&&(Be.value=String(be));let Ne=Q.querySelector(".admin-dsp2-num");Ne&&document.activeElement!==Ne&&(Ne.value=String(be));let Re=Q.querySelector("[data-band-host]");Re&&!Re.contains(document.activeElement)&&(Re.innerHTML=d(X,ie))}}async function me(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);T.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),T.options=T.options||{}}}async function Te(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let Q=await q.json();T.fonts=Array.isArray(Q)?Q:Q.fonts||[]}catch{T.fonts=["NotoSansTC","Inter"]}}function Ee(){if(!T.options){window.showToast&&window.showToast(y("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:T.options},Q=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),X=URL.createObjectURL(Q),ie=document.createElement("a");ie.href=X,ie.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(X),window.showToast&&window.showToast(y("displayExportDone"),!0)}let Le=["Opacity","FontSize","Speed","Color","FontFamily","Layout"],oe=["Color","FontFamily","Layout"];function se(){let q=window.DANMU_CONFIG?.settingDefaults||{},Q=window.DANMU_CONFIG?.settingRanges||{},X=[];for(let ie of Le){let fe=q[ie];if(!Array.isArray(fe)||fe.length<4)return null;if(X.push({url:"/admin/Set",body:{key:ie,enabled:!!fe[0]}}),oe.includes(ie)){if(fe[3]!==""&&fe[3]!=null){let ve=ie==="Color"?String(fe[3]).replace(/^#/,"").toUpperCase():fe[3];X.push({url:"/admin/update",body:{type:ie,value:ve,index:3}})}}else{let ve=Q[ie];if(!ve)return null;let ge=be=>Math.min(ve.max,Math.max(ve.min,Number(be)));X.push({url:"/admin/update",body:{type:ie,value:ve.min,index:1}}),X.push({url:"/admin/update",body:{type:ie,value:ve.max,index:2}}),X.push({url:"/admin/update",body:{type:ie,value:ge(fe[3]),index:3}})}}return X}async function ce(){if(!await window.HudConfirm?.open({icon:"\u21A9",title:y("displayRevertConfirmTitle"),subtitle:y("cfmSubRevertDefaults"),severity:"danger",body:y("displayRevertConfirm"),confirmLabel:y("displayDeployRevert")}))return;let Q=!1;try{let X=se();if(!X)throw new Error("server defaults unavailable");for(let ie of X){let fe=await window.csrfFetch(ie.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie.body)});if(!fe||!fe.ok)throw new Error(`${ie.url} ${fe?fe.status:"?"}`)}}catch(X){Q=!0,console.warn("[admin-display] revert failed:",X)}await me(),j(),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh(),window.showToast&&window.showToast(y(Q?"updateFailed":"displayRevertDone"),!Q)}function z(q){q.addEventListener("click",Q=>{let X=Q.target.closest("[data-palette-preview]");if(X){U(X.dataset.palettePreview);return}let ie=Q.target.closest("[data-palette-remove]");if(ie){let _e=P();if(_e.length>1){let we=_e.filter(Be=>Be!==ie.dataset.paletteRemove);J(we,we.includes(T.palettePreview)?T.palettePreview:we[0])}return}if(Q.target.closest("[data-palette-add]")){let _e=q.querySelector("[data-palette-hex]"),we=String(_e.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){T.paletteInvalid=!0,_e.setAttribute("aria-invalid","true"),F(y("colorFormatError"));return}let Be=P();if(Be.includes("#"+we)){F(y("viewerPaletteDuplicate"));return}Be.length<64&&J([...Be,"#"+we],"#"+we);return}let fe=Q.target.closest("[data-toggle-key]");if(fe){let _e=fe.getAttribute("data-toggle-key"),we=!!(T.options[_e]||[])[0];ne(_e,!we);return}let ve=Q.target.closest("[data-theme-opt]");if(ve){let _e=ve.closest("[data-theme-seg]");_e&&window.AdminThemes&&window.AdminThemes.setSeg&&window.AdminThemes.setSeg(_e.getAttribute("data-theme-seg"),ve.getAttribute("data-theme-opt"));return}let ge=Q.target.closest("[data-allow-action]");if(ge){let _e=ge.getAttribute("data-allow-action"),we=ge.getAttribute("data-allow-key");if(!we)return;if(_e==="edit"){let Be=c(we).map(Ne=>r(we,Ne));T.allowlistEdit[we]=new Set(Be.length?Be:l(we)),ue(we);return}if(_e==="cancel"){delete T.allowlistEdit[we],ue(we);return}if(_e==="clear"){delete T.allowlistEdit[we],de(we,[]);return}if(_e==="apply"){let Be=T.allowlistEdit[we]||new Set,Ne=l(we),Re=Array.from(Be),ze=Ne.length>0&&Re.length===Ne.length&&Ne.every(et=>Be.has(et));delete T.allowlistEdit[we],de(we,ze?[]:Re);return}}let be=Q.target.closest("[data-allow-key][data-allow-value]");if(be){let _e=be.getAttribute("data-allow-key"),we=T.allowlistEdit[_e];if(we){let Be=r(_e,be.getAttribute("data-allow-value"));we.has(Be)?we.delete(Be):we.add(Be),ue(_e)}return}let Ce=Q.target.closest("[data-chip-key]");if(Ce){let _e=Ce.getAttribute("data-chip-key"),we=Ce.getAttribute("data-chip-value");q.querySelectorAll(`[data-chip-key="${_e}"]`).forEach(Be=>Be.classList.remove("is-active")),Ce.classList.add("is-active"),re(_e,3,we);return}if(Q.target.closest("#dsp2-revert")){ce();return}if(Q.target.closest("#dsp2-export")){Ee();return}}),q.addEventListener("keydown",Q=>{Q.key==="Enter"&&Q.target.matches("[data-palette-hex]")&&!Q.isComposing&&(Q.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",Q=>{let X=Q.target;if(!X)return;if(X.matches("[data-viewer-color-picker]")){X.disabled=!0,ne("ViewerColorPicker",X.checked);return}if(X.closest("[data-vi-toggle]")){Oe({enabled:X.checked});return}if(X.closest("[data-vi-ext]")){let be=Array.from(q.querySelectorAll("[data-vi-ext]")).filter(Ce=>Ce.checked).map(Ce=>Ce.getAttribute("data-vi-ext"));Oe({extensions:be});return}if(X.id==="viewer-images-hosts"){Oe({hosts:X.value.split(/[\s,]+/).filter(Boolean)});return}if(X.classList&&X.classList.contains("admin-dsp2-range")){re(X.getAttribute("data-range-key"),3,X.value);return}let ie=X.getAttribute("data-num-key");if(!ie)return;let fe=X.getAttribute("data-num-index");if(fe==="step"){x(ie,X.value);let be=X.closest("[data-row-key]"),Ce=m.find(we=>we.key===ie),_e=be&&be.querySelector("[data-band-host]");_e&&Ce&&(_e.innerHTML=d(Ce,T.options[ie]||[])),ue(ie);return}let ve=parseInt(fe,10);if(Number.isNaN(ve))return;let ge=X.value;ie==="Color"&&(ge=String(ge).replace(/^#/,"").toUpperCase()),re(ie,ve,ge)}),q.addEventListener("input",Q=>{let X=Q.target;if(X){if(X.matches("[data-palette-picker]")){T.paletteDraft=X.value.toUpperCase(),T.paletteInvalid=!1;let ie=q.querySelector("[data-palette-hex]");ie.value=T.paletteDraft,ie.removeAttribute("aria-invalid"),F("","success"),U(T.paletteDraft);return}if(X.matches("[data-palette-hex]")){T.paletteDraft=X.value,T.paletteInvalid=!1;let ie=X.value.replace(/^#/,"");X.removeAttribute("aria-invalid"),F("","success"),/^[0-9a-fA-F]{6}$/.test(ie)&&(q.querySelector("[data-palette-picker]").value="#"+ie,U("#"+ie));return}if(X.classList&&X.classList.contains("admin-dsp2-range")){let ie=X.getAttribute("data-range-key"),fe=O[ie],ve=Number(X.value),ge=(ve-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,be=X.closest("[data-row-key]");if(be){let Ce=be.querySelector(".admin-dsp2-slider-fill"),_e=be.querySelector(".admin-dsp2-slider-thumb");Ce&&(Ce.style.width=ge.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(ve))}Array.isArray(T.options[ie])&&(T.options[ie][3]=ve),Z();return}if(X.classList&&X.classList.contains("admin-dsp2-num")){let ie=X.getAttribute("data-num-key"),fe=parseInt(X.getAttribute("data-num-index"),10);if(Number.isNaN(fe)||!Array.isArray(T.options[ie]))return;T.options[ie][fe]=X.type==="number"?Number(X.value):X.value,Z()}}})}function te(q){q.addEventListener("click",Q=>{let X=Q.target.closest("[data-dl-step]");if(X){let fe=X.closest("[data-dl-stepper]");if(!fe)return;let ve=fe.getAttribute("data-dl-stepper"),ge=Number(Me[ve]??0);De(ve,ge+Number(X.getAttribute("data-dl-step")));return}let ie=Q.target.closest("[data-dl-opt]");if(ie){let fe=ie.closest("[data-dl-seg]");if(!fe)return;let ve=fe.getAttribute("data-dl-seg"),ge=ie.getAttribute("data-dl-opt");De(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(ge):ge)}}),q.addEventListener("change",Q=>{let X=Q.target.closest("[data-dl-toggle]");if(X){De(X.getAttribute("data-dl-toggle"),X.checked);return}let ie=Q.target.closest("[data-dl-range]");ie&&De(ie.getAttribute("data-dl-range"),Number(ie.value))}),q.addEventListener("input",Q=>{let X=Q.target.closest("[data-dl-range]");if(!X)return;let ie=X.getAttribute("data-dl-range"),fe=q.querySelector(`[data-dl-value="${ie}"]`);fe&&(fe.textContent=X.value+"%")})}let ae=null,le=null,he={},ke=0,$e="",pe=q=>(q&&q.hosts||[]).join(`
`);function xe(){return Object.assign({},ae||{},le||{},he)}function Ie(){let q=document.getElementById(g);if(!q||!ae)return;let Q=xe(),X=q.querySelector("[data-vi-toggle]");X&&(X.checked=!!Q.enabled),Ae(q,!!Q.enabled);let ie=q.querySelector("#viewer-images-hosts"),fe=le&&"hosts"in le||"hosts"in he;ie&&!fe&&document.activeElement!==ie&&ie.value===$e&&(ie.value=pe(ae),$e=ie.value);let ve=Q.extensions||[];q.querySelectorAll("[data-vi-ext]").forEach(ge=>{ge.checked=ve.indexOf(ge.getAttribute("data-vi-ext"))!==-1})}function Ae(q,Q){q.querySelectorAll("[data-vi-row]").forEach(X=>{X.style.display=Q?"":"none"})}async function Fe(q){try{let Q=await q(),X=null;try{X=await Q.json()}catch{X=null}return{ok:!!(Q.ok&&X),body:X}}catch(Q){return console.warn("[admin-display] viewer-images request failed:",Q),{ok:!1,body:null}}}async function Pe(){let q=ke,Q=await Fe(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),X=!le&&!Object.keys(he).length;Q.ok&&X&&q===ke&&(ae=Q.body,Ie())}function qe(q){let Q=q&&q.code;return Q==="invalid_host"?y("viErrInvalidHost",{host:String(q.detail||"")}):Q==="too_many_hosts"?y("viErrTooManyHosts",{max:q.max}):y("updateFailed")}function Oe(q){ke+=1;let Q=document.getElementById("viewer-images-hosts");if("hosts"in q&&Q&&($e=Q.value),"enabled"in q){let X=document.getElementById(g);X&&Ae(X,!!q.enabled)}Object.assign(he,q),le||je()}async function je(){if(le||!Object.keys(he).length)return;let q=he;he={},le=q;let Q=await Fe(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}));if(le=null,Q.ok){ae=Q.body,Ie(),je();return}let X=he;he={},window.showToast&&window.showToast(qe(Q.body),!1),("hosts"in q||"hosts"in X)&&($e=null),Ie(),Pe()}let Me={};function We(){let q=document.getElementById(h);q&&Object.entries(Me).forEach(([Q,X])=>{let ie=q.querySelector(`[data-dl-value="${Q}"]`);ie&&(ie.textContent=Q==="max_tracks"?Number(X)===0?y("dlMaxTracksAuto"):String(X):String(X)+"%");let fe=q.querySelector(`[data-dl-range="${Q}"]`);fe&&document.activeElement!==fe&&(fe.value=String(X));let ve=q.querySelector(`[data-dl-toggle="${Q}"]`);ve&&(ve.checked=!!X);let ge=q.querySelector(`[data-dl-seg="${Q}"]`);ge&&ge.querySelectorAll("[data-dl-opt]").forEach(be=>{let Ce=be.getAttribute("data-dl-opt")===String(X);be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")})})}async function Ge(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;Me=await q.json(),We()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function De(q,Q){let X=Me[q];Me[q]=Q,We();try{let ie=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:Q})});if(!ie.ok)throw new Error("display-layer "+ie.status);Me=await ie.json(),We()}catch(ie){Me[q]=X,We(),console.warn("[admin-display] display-layer update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}let Ke=!1;async function Ue(){let q=document.getElementById("sec-viewer-config-limits");if(!q||Ke)return;Ke=!0;let Q=(X,ie)=>{let fe=q.querySelector(X);fe&&(fe.textContent=ie==null?"\u2014":String(ie))};try{let X=await fetch("/admin/metrics",{credentials:"same-origin"});if(!X.ok)return;let ie=await X.json(),fe=ie.rate_limits&&ie.rate_limits.fire||{},ve=ie.rate_limits&&ie.rate_limits.totals||{},ge=Math.max(1,(ie.server_time||0)-(ie.server_started_at||0));Q("[data-vc-msg-len]",100),Q("[data-vc-nick-len]","\u2014"),Q("[data-vc-dedup]","\u2014");let be=(fe.hits||0)/ge;Q("[data-vc-avg-rate]",be.toFixed(2)+"/s"),Q("[data-vc-throttled]",fe.violations||0),Q("[data-vc-blocked]",ve.locked_sources||0),Q("[data-vc-deduped]",0)}catch{}finally{Ke=!1}}function Je(){B.forEach(q=>{let Q=document.getElementById(q);Q&&Q.setAttribute("data-admin-ui-replaced","1")})}function Ve(){let q=document.querySelector(".admin-dash-grid");return!!q&&q.dataset.activeRoute==="viewer"}function He(){let q=null;$.forEach(Q=>{let X=document.getElementById(Q);X&&(q&&q.parentElement===X.parentElement&&q.nextElementSibling!==X&&q.after(X),q=X)})}let Ye=null;function bn(){let q=window.ServerI18n&&window.ServerI18n.currentLang;if(!q||q===Ye)return;let Q=Ye===null;if(Ye=q,Q)return;let X=document.createElement("div"),ie=document.getElementById(g);ie&&(X.innerHTML=e(),ie.replaceChildren(...X.firstElementChild.childNodes),j(),$e="",Ie());let fe=document.getElementById(h);if(fe){let ve=fe.open;X.innerHTML=f(),fe.replaceChildren(...X.firstElementChild.childNodes),fe.open=ve,We()}}let Xe=!1;function Qe(){if(bn(),!Ve()){Xe=!1;return}He(),!Xe&&(Xe=!0,Ue(),T.options&&me().then(j),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh())}function wn(){if(document.getElementById(u))return;let q=document.getElementById("settings-grid");if(!q)return;function Q(ie,fe,ve,ge,be,Ce){let _e=Ce?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+ie+'</div></div><div class="admin-vc-limit-row__value" style="color:'+_e+'">'+ve+'<span class="admin-vc-limit-row__unit">'+(ge||"")+"</span></div>"+(be?'<div class="admin-vc-limit-row__hint">'+be+"</div>":"")+"</div>"}let X=document.createElement("details");X.id=u,X.className="admin-dsp2-fold lg:col-span-2",X.innerHTML='<summary class="admin-ui-page-title">'+A(y("displayContentLimitsTitle"))+'</summary><div class="admin-vc-limits-grid"><div class="admin-vc-limit-card">'+Q(A(y("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",A(y("displayMsgLenUnit")),A(y("displayMsgLenHint")))+Q(A(y("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",A(y("displayNickLenUnit")),A(y("displayNickLenHint")))+Q(A(y("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",A(y("displayDedupHint")))+Q(A(y("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+A(y("displayProfanityDefaultValue"))+"</span>","",A(y("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+A(y("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(y("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+A(y("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(y("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+A(y("displayAuditLogLink"))+"</a></div></div>",q.appendChild(X),He()}async function Ze(){let q=document.getElementById("settings-grid");if(!q)return;let Q=!1;document.getElementById(g)||(q.insertAdjacentHTML("beforeend",e()),z(document.getElementById(g)),Q=!0),document.getElementById(h)||(q.insertAdjacentHTML("beforeend",f()),te(document.getElementById(h)),Q=!0),Je(),wn(),Qe(),Q&&(T.options||await Promise.all([me(),Te()]),Ge(),Pe(),j())}function tt(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&(!document.getElementById(g)||!document.getElementById(h))?Ze():Je(),Qe()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Qe),document.addEventListener("admin-route-applied",Qe),document.addEventListener("admin-panel-rendered",Ze),document.addEventListener("admin-themes-changed",()=>{ue("stroke"),ue("shadow"),ue("Color"),ue("FontFamily"),Z()}),Ze()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt()})()});var At=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function g(){let W=document.querySelector('meta[name="csrf-token"]');return W&&W.content||""}let h=window.DANMU_CONFIG||{},u=h.session||{logged_in:!1},$=h.settingRanges||{};function B(W,Z={}){let K={credentials:"same-origin",...Z},Y=new Headers(Z.headers||{});return Y.set("X-CSRF-Token",g()),K.headers=Y,fetch(W,K)}window.csrfFetch=B;let A=5e3,G={at:0,data:null,promise:null};function O(){return G.data&&Date.now()-G.at<A}function R(){return O()?Promise.resolve(G.data):(G.promise||(G.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(W=>W.ok?W.json():null).then(W=>(W&&(G.data=W,G.at=Date.now()),G.promise=null,W)).catch(()=>(G.promise=null,null))),G.promise)}function N(W){if(!O())return null;let Z=G.data[W];return Z&&typeof Z=="object"&&"_error"in Z?null:Z}window.__danmuAdminBootstrap={prime:R,get:N},R();let D={},C=null,y=null,M=Object.create(null);Object.assign(M,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let _=Object.create(null);Object.assign(_,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"viewer",tab:"themes"},themes:{nav:"viewer",tab:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let x={_key:W=>"admin:tab:"+W,get(W){try{return sessionStorage.getItem(this._key(W))||null}catch{return null}},set(W,Z){try{Z?sessionStorage.setItem(this._key(W),Z):sessionStorage.removeItem(this._key(W))}catch{}}};function T(W){let Z=(W||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!Z)return null;let K=Z[1],Y=Z[2]||null,ne=null;if(!Y){let me=M[K];typeof me=="string"?K=me:me&&typeof me=="object"&&(K=me.nav||K,ne=me.tab||null)}let re=_[K],de=K,ue=null;if(typeof re=="string"?de=re:re&&typeof re=="object"&&(de=re.nav||K,ue=re.tab||null),Z[1]!==de&&(T._warned||(T._warned=new Set),!T._warned.has(Z[1]))){T._warned.add(Z[1]);try{console.info("[admin] legacy route #/"+Z[1]+" \u2192 #/"+de+(Y||ue||ne?"/"+(Y||ue||ne):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:de,tab:Y||ue||ne,raw:K}}function H(W,Z){return Z?"#/"+W+"/"+Z:"#/"+W}let E={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function b(W,Z,K){if(K=K||W,!j[W]){let ue=M[W];if(typeof ue=="string")W=ue;else if(ue&&typeof ue=="object")ue.nav&&(W=ue.nav),!Z&&ue.tab&&(Z=ue.tab);else{let me=_[W];typeof me=="string"?W=me:me&&typeof me=="object"&&(me.nav&&(W=me.nav),!Z&&me.tab&&(Z=me.tab))}}if(W==="system"&&Z&&E[Z]){let ue=E[Z];W=ue.nav,Z=ue.tab||null,K=W}let Y=j[W]?W:"live",ne=window.AdminTabs,re=ne?.hasTabsFor?.(Y)?ne.resolveActiveTab(Y,Z):null,de=ne?.foldFor?ne.foldFor(Y,Z):null;return{route:Y,tab:re,rawName:K,fold:de?Z:null,foldSection:de?de.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:_,tabMemory:x,parseHash:T,buildHash:H,resolve(W){let Z=T(W);return Z?b(Z.nav,Z.tab,W.match(/^#\/([\w-]+)/)[1]):null}});var c=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,r=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:R,bootstrapSection:N};async function e(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),u.logged_in&&L()}catch(W){console.error("Get settings failed:",W),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function f(W){return/^#[0-9A-Fa-f]{6}$/.test(W)}function m(W){return f(W)?W:/^[0-9A-Fa-f]{6}$/.test(W)?"#"+W:(W.startsWith("#")||(W="#"+W),f(W)?W:"#38bdf8")}function w(W,Z){if($[W]){let K=parseInt(Z);if(isNaN(K)||K<$[W].min||K>$[W].max)return showToast(ServerI18n.t("settingRangeError",{key:W,min:$[W].min,max:$[W].max}),!1),!1}return!0}function v(W,Z,K){if(!K||!Array.isArray(D[W]))return;let Y=D[W][Z];W==="Color"&&typeof Y=="string"&&(Y=m(`#${Y}`)),Y!=null&&(K.value=String(Y))}let s={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-widgets"]}};function o(){Object.values(s).forEach(W=>{let Z=document.getElementById(W.containerId);Z&&W.orderedIds.forEach(K=>{let Y=document.getElementById(K);Y&&Y.parentElement!==Z&&Z.appendChild(Y)})})}function p(){C&&(C.disconnect(),C=null),o(),C=new MutationObserver(()=>{o()}),C.observe(a,{childList:!0,subtree:!0})}async function n(W,Z,K,Y=null){try{if(W==="Color"){if(!f(Z)){showToast(ServerI18n.t("colorFormatError"),!1),v(W,K,Y);return}Z=Z.replace("#","")}else if((W==="Speed"||W==="Opacity"||W==="FontSize")&&!w(W,Z)){v(W,K,Y);return}(await B("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:W,value:Z,index:K})})).ok?(Array.isArray(D[W])||(D[W]=[!1,"","",""]),D[W][K]=Z,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await e())}catch(ne){console.error("Error:",ne),showToast(`Update Error: ${ne.message}`,!1),await e()}}async function t(W,Z){try{let K=await B("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:W,enabled:Z})}),Y=await K.json().catch(()=>({}));if(K.ok)Array.isArray(D[W])||(D[W]=[!1,"","",""]),D[W][0]=Z,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`),L();else{let ne=document.getElementById(`toggle-${W}`);ne&&(ne.checked=!Z),showToast(Y.error||ServerI18n.t("updateFailed"),!1)}}catch(K){console.error("Error:",K);let Y=document.getElementById(`toggle-${W}`);Y&&(Y.checked=!Z),showToast(`Update Error: ${K.message}`,!1)}}let a=document.getElementById("app-container"),i=document.getElementById("toast-container"),S=(W,Z=500)=>"requestIdleCallback"in window?window.requestIdleCallback(W,{timeout:Z}):setTimeout(W,Z);async function I(){let W=parseInt(document.getElementById("historyHours")?.value||"24");try{let[Z,K]=await Promise.all([fetch(`/admin/stats/hourly?hours=${W}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${W}&limit=10`,{credentials:"same-origin"})]);if(!Z.ok||!K.ok)return;let Y=await Z.json(),ne=await K.json(),re=document.getElementById("statsDashboard");if(!re)return;let de=Y.distribution||[],ue=ne.topTexts||[],me=Math.max(1,...de.map(se=>se.count)),Te=de.reduce((se,ce)=>se+(ce.count||0),0),Ee=de.filter(se=>se.count>0).length,Le=de.map(se=>`<div class="chart-bar" style="height: ${Math.round(se.count/me*100)}%" title="${r(se.hour)}: ${se.count}"><span class="chart-label">${r(se.hour.slice(-5,-3))}</span></div>`).join(""),oe=ue.map((se,ce)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ce+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${r(se.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${se.count}</td></tr>`).join("");re.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Te}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${Ee}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${W}h window</span>
            </div>
            <div class="stats-chart">${Le||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${ue.length?`<table class="w-full text-xs"><tbody>${oe}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(Z){console.error("Load stats error:",Z)}}window._loadStats=I,window.csrfFetch=B,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>D;function d(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function k(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():d()}function L(){let W=c(),Z=(Ee,Le=!1)=>W[Ee]!==void 0?W[Ee]:Le,K=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Ee=>Array.isArray(D[Ee])&&D[Ee][0]===!0).length,Y=D.Layout&&D.Layout[3]?r(String(D.Layout[3]).replace(/_/g," ")):"scroll",ne=D.FontFamily&&D.FontFamily[3]?r(String(D.FontFamily[3])):"NotoSansTC",re=Ee=>Ee.map(Le=>`<span style="height:${Le*10}%;opacity:${.3+Le*.08}"></span>`).join(""),de=Y&&Y!=="off",ue=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${de?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${r(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay" data-overlay-pill>
                                        <span class="dot"></span>
                                        ${r(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 <span data-overlay-pill-state>${r(de?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}</span>
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
                `;let me=document.getElementById("settings-grid"),Te=D.Effects?D.Effects[0]!==!1:!0;me.insertAdjacentHTML("beforeend",`
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
    `),S(ee),V(),p(),S(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),P(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Le=document.querySelector("[data-telem-bars]");if(!Le)return;let oe=document.querySelector("[data-telem-status]"),se={cpu:100,mem:100,ws:100,rate:50};function ce(ae,le,he,ke,$e){let pe=Le.querySelector(`[data-telem-fill="${ae}"]`),xe=Le.querySelector(`[data-telem-value="${ae}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,le))+"%",pe.classList.toggle("is-warn",!ke)),xe&&(xe.textContent=he);let Ie=Le.querySelector(`[data-telem-row="${ae}"]`);Ie&&$e&&Ie.setAttribute("title",$e)}function z(ae,le){if(!le||le<=0)return Math.round(ae)+" MB used";if(le>=1024){let he=(ae/1024).toFixed(1),ke=(le/1024).toFixed(1);return`${he} / ${ke} GB used`}return`${Math.round(ae)} / ${Math.round(le)} MB used`}async function te(){try{let ae=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ae.ok)return;let le=await ae.json(),he=le.cpu_series||[],ke=le.mem_series||[],$e=le.mem_mb_series||[],pe=le.ws_series||[],xe=le.rate_series||[],Ie=Me=>Me.length?Me[Me.length-1]:0,Ae=Number(Ie(he)||0),Fe=Number(Ie(ke)||0),Pe=Number(Ie($e)||0),qe=Number(le.mem_total_mb||0),Oe=Number(Ie(pe)||le.ws_clients||0),je=Number(Ie(xe)||0)/60;if(ce("cpu",Ae,`${Ae.toFixed(0)}%`,Ae<90),ce("mem",Fe,`${Fe.toFixed(0)}%`,Fe<90,z(Pe,qe)),ce("ws",Oe/se.ws*100,String(Oe),Oe<100),ce("rate",je/se.rate*100,`${je.toFixed(1)}/s`,je<40),oe){let Me=Ae>=90||Fe>=90||je>=40;oe.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",oe.classList.toggle("is-warn",Me)}}catch{}}setTimeout(te,4e3),setInterval(te,5e3)})()}let j={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u5F48\u5E55\u6A23\u5F0F",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-themes","sec-viewer-config-defaults","sec-viewer-theme","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-overlay-layout"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=j;function P(){let W=document.querySelector(".admin-dash-grid");if(!W)return;let Z="dashboard",K=null;function Y(pe){return s.moderation.orderedIds.indexOf(pe)!==-1?"moderation-grid":s.assets.orderedIds.indexOf(pe)!==-1?"assets-grid":"settings-grid"}function ne(){let pe=W.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),xe=W.querySelector("[data-route-note]"),Ie=W.querySelector("[data-route-action]"),Ae=Ie?Array.prototype.slice.call(Ie.children):[],Fe=De=>De.querySelector(".admin-ui-page-actions")||Ae.find(Ke=>Ke._adminHomeHead===De)||null,Pe=(De,Ke)=>{Ie&&(Ae.forEach(Ue=>{Ue!==De&&(Ue._adminHomeHead?Ue._adminHomeHead.appendChild(Ue):Ue.remove())}),De&&De.parentNode!==Ie&&(De._adminHomeHead=Ke,Ie.appendChild(De)))};if(!pe){Pe(null,null);return}let qe=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(Z)),Oe=Array.prototype.slice.call(W.querySelectorAll(".admin-ui-page-head"));Oe.forEach(De=>De.classList.remove("is-merged-into-topbar"));let je=(j[Z]?.title||"").trim().replace(/\s+/g," "),Me=null,We=null,Ge=null;if(Oe.forEach(De=>{let Ke=De.querySelector(".admin-ui-page-title"),Ue=Ke&&Ke.textContent.trim().replace(/\s+/g," ");if(Ue&&(qe||Ue===pe||Ue===je)){if(De.offsetParent!==null){Me===null&&(Me=De.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ve=Fe(De);Ve&&!We&&(We=Ve,Ge=De)}De.classList.add("is-merged-into-topbar")}}),Pe(We,Ge),xe){let De=Me||"";xe.innerHTML!==De&&(xe.innerHTML=De),xe.toggleAttribute("hidden",!Me)}}function re(){let pe=j[Z],xe=new Set((pe.sections||[]).map(Y)),Ie=Ae=>Array.from(Ae.children).some(Fe=>getComputedStyle(Fe).display!=="none");W.querySelectorAll(".admin-route-sections").forEach(Ae=>{if(!xe.has(Ae.id)){Ae.style.display="none";return}Ae.style.display="",Ae.style.display=Ie(Ae)?"":"none"})}let de=()=>{let pe=j[Z],xe=new Set(pe.sections);W.querySelectorAll('[id^="sec-"]').forEach(Ie=>{Ie.id&&(Ie.style.display=xe.has(Ie.id)?"":"none")}),K&&window.AdminTabs?.hasTabsFor?.(Z)&&window.AdminTabs.applyTabSectionVisibility(Z,K,W),re(),ne()},ue=null,me=null;function Te(){let pe=me&&document.getElementById(me);!pe||!pe.getClientRects().length||(me=null,pe.tagName==="DETAILS"&&(pe.open=!0),pe.scrollIntoView({block:"start"}))}function Ee(pe){let xe=window.location.hash||"",Ie=xe.indexOf("?");if(Ie===-1)return"";let Ae=T(xe);if(!Ae)return"";let Fe=xe.match(/^#\/([\w-]+)/),Pe=b(Ae.nav,Ae.tab,Fe&&Fe[1]||Ae.raw);return Pe.route===pe.route&&(Pe.tab||null)===(pe.tab||null)&&(Pe.fold||null)===(pe.fold||null)?xe.slice(Ie):""}let Le=(pe,xe,Ie)=>{let Ae=b(pe,xe,Ie);Ie=Ae.rawName,Z=Ae.route,W.dataset.activeRoute=Z;let Fe=Ae.tab,Pe=(Ae.fold?H(Z,Ae.fold):Ie&&Ie!==Z?"#/"+Ie:H(Z,Fe))+Ee(Ae);if(window.location.hash!==Pe){try{history.replaceState(null,"",Pe)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let qe=j[Z],Oe=Array.from(W.querySelectorAll(".admin-dash-nav-row[data-route]")),je=Ie!==Z?Oe.find(He=>He.dataset.route===Ie):null;Oe.forEach(He=>{let Ye=je?He===je:He.dataset.route===Z;He.classList.toggle("is-active",Ye),He.setAttribute("aria-selected",Ye?"true":"false")});let Me=W.querySelector("[data-route-kicker]"),We=W.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(He){return He},De="adminRouteTitle_"+Z,Ke="adminRouteKicker_"+Z,Ue=Ge(De),Je=Ge(Ke);Me&&(Me.textContent=Je!==Ke?Je:qe.kicker),We&&(We.textContent=Ue!==De?Ue:qe.title);let Ve=Z==="dashboard"||Z==="live";W.querySelectorAll('[data-route-view="dashboard"]').forEach(He=>{He.style.display=Ve?"":"none"}),Ve?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),K=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(Z,Fe),W.dataset.activeLeaf=Fe||Z,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:Fe}})),re(),ne(),se(Z,Fe),oe(Ie,Z,Fe),Ae.fold!==ue&&(ue=Ae.fold,me=Ae.foldSection),Te();try{history.replaceState(null,"",Pe)}catch{}};function oe(pe,xe,Ie){window.AdminBreadcrumb?.render(W,pe,xe,Ie)}function se(pe,xe){let Ie=W.querySelector("[data-admin-tabs-host]");if(!Ie){let Ae=W.querySelector(".admin-dash-topbar");if(!Ae)return;Ie=document.createElement("div"),Ie.dataset.adminTabsHost="",Ae.insertAdjacentElement("afterend",Ie)}if(Ie.innerHTML="",window.AdminTabs?.hasTabsFor?.(pe)&&xe){Ie.hidden=!1;let Ae=window.AdminTabs.renderTabStrip(pe,xe,{onSelect:Fe=>Le(pe,Fe)});Ae&&Ie.appendChild(Ae),Ie.classList.remove("admin-tabs-host--accordion");return}Ie.classList.remove("admin-tabs-host--accordion"),Ie.hidden=!0}y&&window.removeEventListener("hashchange",y),y=()=>{let pe=T(window.location.hash),xe=(window.location.hash||"").match(/^#\/([\w-]+)/),Ie=xe?xe[1]:null;pe&&Le(pe.nav,pe.tab,Ie||pe.raw)},window.addEventListener("hashchange",y),W.querySelectorAll("[data-route]").forEach(pe=>{pe.addEventListener("click",xe=>{xe.preventDefault(),Le(pe.dataset.route)})});let ce=T(window.location.hash),z=(window.location.hash||"").match(/^#\/([\w-]+)/),te=z?z[1]:ce?.raw||ce?.nav||"live";Le(ce?.nav||"live",ce?.tab||null,te),window._adminNavigateTo=()=>Le(Z,ue||K);let ae=!1,le=0,he=0;function ke(){if(ae)return;ae=!0;let pe=()=>{ae&&(ae=!1,le&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(le),clearTimeout(he),le=0,he=0,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:K}})),Te())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(le=requestAnimationFrame(pe),he=setTimeout(pe,100)):he=setTimeout(pe,0)}let $e=W.querySelector(".admin-dash-main");$e&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{ke()}).observe($e,{childList:!0,subtree:!0}),ke())}function V(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let W=document.querySelector("[data-open-help]");W&&W.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let Z=document.querySelector("[data-open-palette]");if(Z){let Y=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};Z.addEventListener("click",Y),Z.addEventListener("keydown",ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Y())})}let K=document.getElementById("logoutButton");K&&K.addEventListener("click",async()=>{try{let Y=await B("/logout",{method:"POST"});Y.redirected&&(window.location.href=Y.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Y){console.error("Logout Failed:",Y),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Y=>{Y.name&&Y.addEventListener("change",async function(){let ne=this.name,re=this.checked;await t(ne,re)})}),document.querySelectorAll("details[id^='sec-']").forEach(Y=>{Y.addEventListener("toggle",()=>{let ne=c();ne[Y.id]=Y.open,l(ne)})}),document.querySelectorAll(".setting-input").forEach(Y=>{Y.addEventListener("change",async function(){let ne=this.dataset.key,re=parseInt(this.dataset.index),de=this.value;this.type==="number"&&(de=parseInt(de)),await n(ne,de,re,this)})})}function F(){if(u.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}L()}else k()}async function U(){await e(),F(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function ee(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{C&&(C.disconnect(),C=null)}),U()})});var Ct=ye(()=>{(function(){"use strict";var g=null;async function h(){var R=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),D=Array.from(N).map(function(M){return M.value.trim()}).filter(Boolean);if(!R){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var C=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:R,options:D})}),y=await C.json();if(!C.ok){window.showToast(y.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),G(y),B()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function u(){try{var R=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await R.json();if(!R.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),G(N),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function $(){try{var R=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await R.json();if(!R.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),G(N),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function B(){g&&(clearInterval(g),g=null);var R=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var D=await N.json();G(D),D.state!=="active"&&g&&(clearInterval(g),g=null)}}catch{}};R(),g=setInterval(R,2e3)}function A(){var R=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
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
      </div>`});return R.dataset.emptyKind="poll",R}function G(R){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!R||R.state==="idle"){N.appendChild(A());return}var D=R.total_votes||0,C=Math.max(1,...R.options.map(function(E){return E.count})),y=document.createElement("div");y.className="admin-poll-status-card";var M=document.createElement("div");M.className="admin-poll-status-header";var _=document.createElement("span");_.className="admin-poll-status-dot"+(R.state==="active"?" is-active":" is-ended"),M.appendChild(_);var x=document.createElement("span");x.className="admin-poll-status-question",x.textContent=R.question||"",M.appendChild(x);var T=document.createElement("span");T.className="admin-poll-status-state",T.textContent=R.state,M.appendChild(T),y.appendChild(M),R.options.forEach(function(E){var b=document.createElement("div");b.className="admin-poll-status-row";var c=document.createElement("div");c.className="admin-poll-status-label";var l=document.createElement("span"),r=document.createElement("b");r.textContent=E.key+".",l.appendChild(r),l.appendChild(document.createTextNode(" "+E.text));var e=document.createElement("span");e.textContent=E.count+" ("+E.percentage+"%)",c.appendChild(l),c.appendChild(e);var f=document.createElement("div");f.className="admin-poll-status-bar";var m=document.createElement("div");m.className="admin-poll-status-bar-fill",m.style.width=E.count/C*100+"%",f.appendChild(m),b.appendChild(c),b.appendChild(f),y.appendChild(b)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),y.appendChild(H),N.appendChild(y)}}function O(){var R=document.getElementById("sec-polls");if(R&&R.dataset.pollLegacyBound!=="1"){R.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",h);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",u);var C=document.getElementById("pollResetBtn");C&&C.addEventListener("click",$);var y=document.getElementById("pollAddOptionBtn");y&&y.addEventListener("click",function(){var x=document.getElementById("pollOptionsContainer");if(x){var T=x.querySelectorAll(".poll-option-input").length;if(T>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+T)+". Option "+(T+1),H.maxLength=100,x.appendChild(H)}});var M=document.getElementById("pollRemoveOptionBtn");M&&M.addEventListener("click",function(){var x=document.getElementById("pollOptionsContainer");if(x){var T=x.querySelectorAll(".poll-option-input");if(T.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}T[T.length-1].remove()}});var _=R;_&&(_.addEventListener("toggle",function(){_.open&&B()}),B()),window.addEventListener("beforeunload",function(){g&&(clearInterval(g),g=null)})}}document.addEventListener("admin-panel-rendered",function(){O()}),document.addEventListener("DOMContentLoaded",function(){O()}),window.addEventListener("hashchange",function(){var R=window.location.hash||"";R.indexOf("/polls")!==-1&&O()})})()});var Bt=ye(()=>{(function(){"use strict";var g="sec-timeline-export",h="danmu.adminHistoryExports.v1",u=10,$={rawText:!0,polls:!0,masked:!1,metadata:!0},B=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],A=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],G={range:"24h",filters:Object.assign({},$),format:"JSON"};function O(){return document.getElementById(g)}function R(){try{return JSON.parse(localStorage.getItem(h)||"[]")}catch{return[]}}function N(i){try{localStorage.setItem(h,JSON.stringify(i.slice(0,u)))}catch{}}function D(i){var S=R();S.unshift(i),N(S)}function C(i){return i?i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/1024/1024).toFixed(1)+" MB":"0 B"}function y(i){try{var S=new Date(i),I=new Date,d=S.toDateString()===I.toDateString();if(d)return ServerI18n.t("historyV2TodayAt",{time:String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")});var k=new Date(I);return k.setDate(I.getDate()-1),S.toDateString()===k.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}):S.getMonth()+1+"-"+String(S.getDate()).padStart(2,"0")+" "+String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}catch{return i||""}}function M(i){if(i==="1h")return 1;if(i==="24h")return 24;if(i==="7d")return 168;if(i==="today"){var S=new Date,I=new Date(S.getFullYear(),S.getMonth(),S.getDate());return Math.max(1,Math.ceil((S-I)/36e5))}return i==="yest"?48:i==="live"?6:24}function _(i){return i.filter(function(S){return!(!G.filters.rawText&&!S.is_poll&&!S.muted&&!S.banned||!G.filters.polls&&S.is_poll||!G.filters.masked&&(S.muted||S.banned))}).map(function(S){if(!G.filters.metadata){var I=Object.assign({},S);return delete I.clientIp,delete I.fingerprint,I}return S})}function x(i){var S=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],I=window.AdminUtils.csvCell,d=function(L){return L.status?L.status:L.banned?"banned":L.muted?"muted":L.is_poll?"poll":"ok"},k=i.map(function(L){return[L.timestamp||"",L.nickname||"",L.text||"",L.color?"#"+L.color:"",L.size!=null?L.size:"",L.speed!=null?L.speed:"",L.opacity!=null?L.opacity:"",L.isImage?"true":"false",L.fontInfo&&L.fontInfo.name||"",L.clientIp||"",L.fingerprint||"",d(L),L.delivery_reason||""].map(I).join(",")});return[S.join(","),k.join(`\r
`)].filter(Boolean).join(`\r
`)}function T(i){return i.map(function(S,I){var d=new Date(S.timestamp||Date.now()),k=H(d),L=H(new Date(d.getTime()+3e3)),j=(S.nickname?"["+S.nickname+"] ":"")+(S.text||"");return I+1+`
`+k+" --> "+L+`
`+j+`
`}).join(`
`)}function H(i){var S=function(I,d){return String(I).padStart(d||2,"0")};return S(i.getHours())+":"+S(i.getMinutes())+":"+S(i.getSeconds())+","+S(i.getMilliseconds(),3)}function E(i,S){var I=URL.createObjectURL(i),d=document.createElement("a");d.href=I,d.download=S,d.click(),URL.revokeObjectURL(I)}function b(){var i=M(G.range),S=document.getElementById("histv2-go");S&&(S.disabled=!0,S.dataset.busy="1"),fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(I){if(!I.ok)throw new Error("http "+I.status);return I.json()}).then(function(I){var d=I&&I.records||[],k=_(d);if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var L=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),j,P;if(G.format==="JSON"){var V=JSON.stringify(k,null,2);P=new Blob([V],{type:"application/json"}),j="danmu-history-"+L+".json"}else G.format==="CSV"?(P=new Blob(["\uFEFF"+x(k)],{type:"text/csv;charset=utf-8;"}),j="danmu-history-"+L+".csv"):(P=new Blob([T(k)],{type:"application/x-subrip;charset=utf-8;"}),j="danmu-history-"+L+".srt");E(P,j),D({name:j,fmt:G.format,size:P.size,when:new Date().toISOString(),count:k.length}),l(),c(k.length,P.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:k.length}),!0)}).catch(function(I){console.error("[history-v2] export failed",I),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:I.message||I}),!1)}).finally(function(){S&&(S.disabled=!1,delete S.dataset.busy)})}function c(i,S){var I=document.getElementById("histv2-estimate");I&&(I.textContent=ServerI18n.t("historyV2Estimate",{count:i||"\u2014",size:S?C(S):"\u2014 MB"}))}function l(){var i=document.getElementById("histv2-recent-list");if(i){var S=R();if(S.length===0){i.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}i.innerHTML=S.map(function(I){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+I.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+r(I.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+r(y(I.when))+" \xB7 "+C(I.size)+"</div></div></div>"}).join("")}}function r(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})}function e(){return B.map(function(i){var S=G.range===i.k;return'<button type="button" class="histv2-chip'+(S?" is-active":"")+'" data-histv2-range="'+i.k+'">'+r(ServerI18n.t(i.labelKey))+(i.k==="live"?" \xB7 "+f():"")+"</button>"}).join("")}function f(){var i=new Date;return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function m(){var i=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return i.map(function(S){var I=!!G.filters[S.k];return'<button type="button" class="histv2-toggle'+(I?" is-on":"")+'" data-histv2-toggle="'+S.k+'"><span class="histv2-toggle-mark">'+(I?"\u2713":"\u25CB")+"</span><span>"+r(ServerI18n.t(S.labelKey))+"</span></button>"}).join("")}function w(){return A.map(function(i){var S=G.format===i.k;return'<button type="button" class="histv2-fmt'+(S?" is-selected":"")+'" data-histv2-fmt="'+i.k+'">'+(S?'<span class="histv2-fmt-check">\u2713</span>':"")+(i.badge?'<span class="histv2-fmt-badge">'+r(i.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+i.k+'</div><div class="histv2-fmt-desc">'+r(i.desc)+"</div></button>"}).join("")}function v(){var i=O();i&&(i.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+e()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+m()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+w()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",i.addEventListener("click",s),l(),t())}function s(i){var S=i.target.closest("[data-histv2-range]");if(S){G.range=S.dataset.histv2Range,o(),t();return}var I=i.target.closest("[data-histv2-toggle]");if(I){var d=I.dataset.histv2Toggle;G.filters[d]=!G.filters[d],p(),t();return}var k=i.target.closest("[data-histv2-fmt]");if(k){G.format=k.dataset.histv2Fmt,n(),t();return}var L=i.target.closest("#histv2-go");if(L&&!L.dataset.busy){b();return}}function o(){var i=document.getElementById("histv2-chips");i&&(i.innerHTML=e())}function p(){var i=document.getElementById("histv2-toggles");i&&(i.innerHTML=m())}function n(){var i=document.getElementById("histv2-formats");i&&(i.innerHTML=w())}function t(){t._t&&clearTimeout(t._t),t._t=setTimeout(function(){var i=M(G.range);fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(S){return S.ok?S.json():null}).then(function(S){if(!S)return c(0,0);var I=_(S&&S.records||[]),d=G.format==="JSON"?220:G.format==="CSV"?110:80;c(I.length,I.length*d)}).catch(function(){c(0,0)})},250)}function a(){var i=O(),S=document.getElementById("admin-backup-v2-page");if(!i){var I=document.getElementById("settings-grid");if(!I)return;i=document.createElement("div"),i.id=g,i.className="admin-ui-card lg:col-span-2 history-v2-section",I.appendChild(i),v()}S&&S.parentElement&&i.previousElementSibling!==S&&S.parentElement.insertBefore(i,S.nextSibling)}document.addEventListener("admin-panel-rendered",a),document.addEventListener("admin-route-applied",a),window.AdminHistoryV2={refresh:t,state:G}})()});var Ft=ye(()=>{(function(){"use strict";let g="admin-replay-bar";function h(){let $=document.getElementById(g);return $||(document.body?($=document.createElement("div"),$.id=g,$.className="admin-replay-bar",$.hidden=!0,$.setAttribute("role","status"),$.setAttribute("aria-live","polite"),$.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore($,document.body.firstChild),$):null)}function u($){let B=h();B&&(B.hidden=!$)}window.AdminReplayBar={ensure:h,setActive:u},document.addEventListener("admin-panel-rendered",h)})()});var Dt=ye(()=>{(function(){"use strict";let g=null;function h(y){window.AdminReplayBar&&window.AdminReplayBar.ensure();let M=document.getElementById("replayPauseBtn"),_=document.getElementById("replayResumeBtn"),x=document.getElementById("replayStopBtn"),T=document.getElementById("replayProgress"),H=(c,l)=>{c&&c.classList.toggle("hidden",!l)},E=y==="playing",b=y==="paused";H(M,E),H(_,b),H(x,E||b),H(T,E||b),!E&&!b&&T&&(T.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(E||b)}function u(){g&&clearInterval(g),g=setInterval(async()=>{try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let M=await y.json(),_=document.getElementById("replayProgress");_&&(_.textContent=ServerI18n.t("replayingProgress").replace("{sent}",M.sent).replace("{total}",M.total)),h(M.state),M.state==="stopped"&&(clearInterval(g),g=null)}catch{}},500)}async function $(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),h("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function B(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),h("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),h("stopped"),g&&(clearInterval(g),g=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let G=null,O=null,R=0,N=null;function D(){[["replayPauseBtn",$],["replayResumeBtn",B],["replayStopBtn",A]].forEach(function([M,_]){let x=document.getElementById(M);x&&!x.dataset.replayCtrlsBound&&(x.addEventListener("click",_),x.dataset.replayCtrlsBound="1")})}async function C(){try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let M=await y.json();(M.state==="playing"||M.state==="paused")&&(h(M.state),u())}catch{}}window.AdminReplayControls={notifyStarted:function(){h("playing"),u()}},document.addEventListener("admin-panel-rendered",function(){D(),C()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var Mt=ye(()=>{(function(){"use strict";let g="sec-ratelimit",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(M){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[M]})},u=(y,M)=>ServerI18n.t(y,M),$=(y,M)=>{typeof showToast=="function"&&showToast(y,M)},B={viewer:{targets:["fire","fire_fingerprint","fire_global"],unitKey:"rlMaxMessages"},other:{targets:["api","admin","login","fire_admin"],unitKey:"rlMaxRequests"}},A={fire:"rlTargetViewer",fire_fingerprint:"rlTargetDevice",fire_global:"rlTargetRoom",api:"ratelimitScopeApiDesc",admin:"ratelimitScopeAdminDesc",login:"ratelimitScopeLoginDesc",fire_admin:"rlTargetTokenLane"},G=[10,30,60,300,3600];function O(y){return y>=3600&&y%3600===0?u("rlHours",{n:y/3600}):y>60&&y%60===0?u("rlMinutes",{n:y/60}):u("rlSeconds",{n:y})}function R(y){let M=B[y];return`
            <div class="admin-ratelimit-form" data-rl-form="${y}">
              <div class="admin-ratelimit-row-body admin-ratelimit-row-body--form">
                <label class="admin-ratelimit-field">
                  <span>${u("rlTargetLabel")}</span>
                  <select data-rl-target>
                    ${M.targets.map(_=>`<option value="${_}">${h(u(A[_]))}</option>`).join("")}
                  </select>
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u(M.unitKey)}</span>
                  <input type="number" step="1" inputmode="numeric" data-rl-limit />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u("rlPer")}</span>
                  <select data-rl-window>
                    ${G.map(_=>`<option value="${_}">${h(O(_))}</option>`).join("")}
                  </select>
                </label>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save">${u("ratelimitSaveBtn")}</button>
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
            </div>`}function N(){return`
      <div id="${g}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-rows">
          <div class="admin-ratelimit-row" data-rl-pace>
            ${R("viewer")}
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${u("ratelimitCooldownLabel")}</span>
                <input type="number" min="0" max="10" step="0.5" inputmode="decimal" data-rl-cooldown />
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-cooldown">${u("ratelimitSaveBtn")}</button>
              </div>
            </div>
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${u("ratelimitOnscreenMaxLabel")}</span>
                <input type="number" min="0" max="200" step="1" inputmode="numeric" data-rl-onscreen-max />
              </label>
              <label class="admin-ratelimit-field">
                <span>${u("ratelimitOnscreenModeLabel")}</span>
                <select data-rl-onscreen-mode>
                  <option value="drop">${u("ratelimitOnscreenModeDrop")}</option>
                  <option value="queue">${u("ratelimitOnscreenModeQueue")}</option>
                </select>
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-onscreen">${u("ratelimitSaveBtn")}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="hud-stats-strip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value" data-rl-sum-hits>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-hits-delta>${u("ratelimitCalculatingLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-amber" data-rl-sum-viol>\u2014</span>
            <span class="hud-stat-tile-label" data-rl-sum-viol-rate>${u("ratelimitBlockRateLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-crimson" data-rl-sum-locked>\u2014</span>
            <span class="hud-stat-tile-label">${u("ratelimitLoginLabel")} \xB7 ${u("ratelimitLockedHint")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-cyan" data-rl-sum-black>\u2014</span>
            <span class="hud-stat-tile-label">${u("ratelimitBlacklistHint")}</span>
          </div>
        </div>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="other">
          <summary class="admin-ui-page-title">${u("rlFoldOther")}</summary>
          <div class="admin-ratelimit-row">
            ${R("other")}
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="ip">
          <summary class="admin-ui-page-title">
            <span>${u("rlFoldIp")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-ip-summary></span>
          </summary>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-ip-form">
              <input type="text" data-rl-ip-input placeholder="${u("ratelimitIpInputPlaceholder")}" maxlength="43" autocomplete="off" spellcheck="false" />
              <select data-rl-ip-select aria-label="${u("ratelimitIpSelectAriaLabel")}">
                <option value="allowlist">${u("ratelimitAllowlistOption")}</option>
                <option value="denylist">${u("ratelimitDenylistOption")}</option>
              </select>
              <button type="button" class="admin-ui-action is-primary" data-rl-ip-add>${u("ratelimitIpAddBtn")}</button>
            </div>
            <div class="admin-ratelimit-ip-error" data-rl-ip-error hidden></div>
            <div class="admin-ratelimit-ip-lists">
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="allowlist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${u("ratelimitAllowlistOption")}</span>
                  <span class="cnt" data-rl-ip-allow-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="allowlist">
                  <div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoEntriesYet",{list:u("ratelimitAllowlistName")})}</div>
                </div>
              </div>
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="denylist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${u("ratelimitDenylistOption")}</span>
                  <span class="cnt" data-rl-ip-deny-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="denylist">
                  <div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoEntriesYet",{list:u("ratelimitDenylistName")})}</div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="blocked">
          <summary class="admin-ui-page-title">
            <span>${u("rlFoldBlocked")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-vcount></span>
          </summary>
          <div class="admin-ratelimit-suggestions" data-rl-suggestions></div>
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>${u("uiColTime")}</span><span>${u("rlTargetLabel")}</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoViolationsYet")}</div>
              </div>
            </div>
          </div>
        </details>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-ui-action admin-rl-footer-action" data-rl-action="reset">${u("ratelimitResetBtn")}</button>
        </div>
      </div>`}function D(y){let M={},_={},x=!1,T=0,H=Array.from(y.querySelectorAll("[data-rl-form]")),E=F=>({target:F.querySelector("[data-rl-target]"),limit:F.querySelector("[data-rl-limit]"),window:F.querySelector("[data-rl-window]"),current:F.querySelector("[data-rl-current]"),barWrap:F.querySelector("[data-rl-bar-wrap]"),bar:F.querySelector("[data-rl-bar]"),spark:F.querySelector("[data-rl-spark]")}),b=F=>u(A[F]||F);function c(F){let U=E(F);U.window.disabled=U.limit.value.trim()!==""&&Number(U.limit.value)===0}function l(F){let U=E(F),ee=M[U.target.value];if(ee){if(U.limit.min=ee.min,U.limit.max=ee.max,U.limit.value=ee.limit,U.window.querySelectorAll("option[data-rl-custom]").forEach(J=>J.remove()),!U.window.querySelector(`option[value="${ee.window}"]`)){let J=document.createElement("option");J.value=String(ee.window),J.textContent=O(ee.window),J.dataset.rlCustom="1",U.window.appendChild(J)}U.window.value=String(ee.window),c(F)}}function r(F){let U=E(F),ee=_[U.target.value],J=ee&&ee.hits||0,W=ee&&ee.violations||0;U.current.textContent=ee?u("ratelimitHitsViolations",{hits:J.toLocaleString(),viol:W.toLocaleString()}):"\u2014",U.barWrap.hidden=J+W===0,U.bar.style.width=J+W===0?"0":(W/(J+W)*100).toFixed(1)+"%",e(U.spark,ee&&(ee.bucket_history||ee.history))}function e(F,U){if(!F)return;let ee=96,J=24,W=Array.isArray(U)&&U.length?U.slice(-24):new Array(24).fill(0),Z=Math.max(1,...W),K=ee/Math.max(1,W.length-1),Y=W.map((re,de)=>`${(de*K).toFixed(1)},${(J-2-re/Z*(J-4)).toFixed(1)}`).join(" "),ne=F.querySelector("polyline");ne&&ne.setAttribute("points",Y)}async function f(){let F=T;try{let U=await fetch("/admin/ratelimit/config",{credentials:"same-origin"});if(!U.ok)return;let ee=await U.json();if(F!==T){await f();return}M=ee&&ee.scopes||{},H.forEach(l)}catch{}}let m=!1;async function w(){if(m)return;m=!0;let F=null;try{let Z=await fetch("/admin/metrics",{credentials:"same-origin"});Z.ok&&(F=await Z.json())}catch{}finally{m=!1}let U=F&&F.rate_limits;if(_=U||{},H.forEach(r),!F)return;o(),s(F.recent_violations);let ee=y.querySelector("[data-rl-sum-viol]"),J=y.querySelector("[data-rl-sum-viol-rate]"),W=y.querySelector("[data-rl-sum-locked]");if(U&&U.totals){let Z=U.totals.hits||0,K=U.totals.violations||0;ee&&(ee.textContent=K.toLocaleString()),J&&(J.textContent=Z+K>0?u("ratelimitBlockRateValue",{rate:(K/(Z+K)*100).toFixed(1)}):"\u2014"),W&&(W.textContent=u("ratelimitLockedSources",{n:(U.totals.locked_sources||0).toLocaleString()}))}else ee&&(ee.textContent="\u2014"),J&&(J.textContent="\u2014"),W&&(W.textContent="\u2014")}async function v(){try{let F=window.AdminBootstrap;F&&typeof F.primeBootstrap=="function"&&await F.primeBootstrap();let U=F&&F.bootstrapSection?F.bootstrapSection("history_stats"):null,ee=F&&F.bootstrapSection?F.bootstrapSection("blacklist"):null,[J,W]=await Promise.all([U?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"}),ee?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})]),Z=U||(J&&J.ok?await J.json():null);if(Z){let Y=y.querySelector("[data-rl-sum-hits]"),ne=y.querySelector("[data-rl-sum-hits-delta]");Y&&(Y.textContent=(Z.stats&&Z.stats.last_24h||0).toLocaleString()),ne&&(ne.textContent=u("ratelimitSumTotal",{n:(Z.stats&&Z.stats.total||0).toLocaleString()}))}let K=ee||(W&&W.ok?await W.json():null);if(K){let Y=Array.isArray(K)?K:K.entries||K.keywords||[],ne=y.querySelector("[data-rl-sum-black]");ne&&(ne.textContent=Y.length?u("ratelimitCountUnit",{n:Y.length}):"0")}}catch{}}function s(F){let U=y.querySelector("[data-rl-vbody]"),ee=y.querySelector("[data-rl-vcount]");if(!U)return;let J=Array.isArray(F)?F:[];if(ee&&(ee.textContent=J.length?String(J.length):""),J.length===0){U.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoViolationsYet")}</div>`;return}let W=K=>String(K).padStart(2,"0"),Z=K=>{let Y=new Date(K*1e3);return`${W(Y.getHours())}:${W(Y.getMinutes())}:${W(Y.getSeconds())}`};U.innerHTML=J.slice(0,30).map(K=>`
        <div class="admin-ratelimit-vfeed-row">
          <span class="admin-ratelimit-vfeed-time">${Z(K.ts)}</span>
          <span class="admin-ratelimit-vfeed-scope">${h(b(K.scope||""))}</span>
          <span class="admin-ratelimit-vfeed-ip">${h(K.ip||"")}</span>
        </div>
      `).join("")}function o(){let F=y.querySelector("[data-rl-suggestions]");if(F&&(F.innerHTML=Object.keys(A).map(U=>{let ee=_[U],J=ee&&ee.suggestion;if(!J)return"";let W=u("ratelimitSuggestDetail",{p95:Number(J.p95_per_second||0).toFixed(2),limit:ee.limit||"\u2014",window:ee.window||"\u2014",suggLimit:J.suggested_limit,suggWindow:J.suggested_window});return`
          <div class="admin-ratelimit-suggest" data-rl-suggest="${U}">
            <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
            <span class="admin-ratelimit-suggest-body">
              <span class="admin-ratelimit-suggest-title">${h(b(U))}</span>
              <span class="admin-ratelimit-suggest-detail">${h(W)}</span>
            </span>
            <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${U}" data-rl-suggest-limit="${Number(J.suggested_limit)}" data-rl-suggest-window="${Number(J.suggested_window)}">${u("ratelimitApplySuggestBtn")}</button>
          </div>`}).join(""),F.children.length&&!x)){x=!0;let U=F.closest("details");U&&(U.open=!0)}}async function p(F,U,ee,J){F.disabled=!0;try{let W=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:U,limit:ee,window:J})});if(W.ok){let K=await W.json();return T+=1,M[U]=Object.assign({},M[U],{limit:K.limit,window:K.window,saved:!0}),K.persisted===!1?$(u("rlNotPersisted"),!1):$(u("ratelimitPaceSavedToast"),!0),!0}let Z=await W.clone().json().catch(()=>({}));$(u("ratelimitApplyFailedToast",{msg:Z&&Z.error||`HTTP ${W.status}`}),!1)}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{F.disabled=!1}return!1}let n={cooldown:y.querySelector("[data-rl-cooldown]"),max:y.querySelector("[data-rl-onscreen-max]"),mode:y.querySelector("[data-rl-onscreen-mode]")};async function t(){try{let F=await fetch("/get_settings",{credentials:"same-origin"});if(F.ok){let U=(await F.json()).ViewerFireCooldownSec;n.cooldown&&Array.isArray(U)&&(n.cooldown.value=U[1])}}catch{}try{let F=await fetch("/admin/api/onscreen-limits",{credentials:"same-origin"});if(F.ok){let U=await F.json();n.max&&(n.max.value=U.max_onscreen_danmu),n.mode&&(n.mode.value=U.overflow_mode),a()}}catch{}}function a(){!n.max||!n.mode||(n.mode.disabled=Number(n.max.value)===0)}n.max&&n.max.addEventListener("input",a);async function i(F,U,ee){F.disabled=!0;try{let J=await window.csrfFetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)});if(J.ok)$(u("ratelimitPaceSavedToast"),!0);else{let W=await J.clone().json().catch(()=>({}));$(u("ratelimitApplyFailedToast",{msg:W&&W.error||`HTTP ${J.status}`}),!1)}}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{F.disabled=!1}}y.addEventListener("click",async F=>{let U=F.target.closest("[data-rl-action]");if(!U)return;let ee=U.dataset.rlAction;if(ee==="save"){let J=U.closest("[data-rl-form]"),W=E(J),Z=W.limit.value.trim(),K=Number(Z),Y=parseInt(W.window.value,10);if(Z===""||!Number.isInteger(K)||K<0||!Number.isFinite(Y)){$(u("ratelimitInvalidInputToast"),!1);return}let ne=M[W.target.value];if(ne&&(K<ne.min||K>ne.max)){$(u("rlOutOfRange",{min:ne.min,max:ne.max}),!1);return}await p(U,W.target.value,K,Y)&&(l(J),w());return}if(ee==="apply-suggest"){let J=U.dataset.rlApply,W=parseInt(U.dataset.rlSuggestLimit,10),Z=parseInt(U.dataset.rlSuggestWindow,10);if(!J||!Number.isFinite(W)||!Number.isFinite(Z))return;let K=M[J];if(K&&(W<K.min||W>K.max)){$(u("rlOutOfRange",{min:K.min,max:K.max}),!1);return}await p(U,J,W,Z)&&(H.forEach(Y=>{E(Y).target.value===J&&l(Y)}),w());return}if(ee==="save-cooldown"){let J=parseFloat(n.cooldown&&n.cooldown.value);if(!Number.isFinite(J)||J<0||J>10){$(u("ratelimitInvalidInputToast"),!1);return}await i(U,"/admin/update",{type:"ViewerFireCooldownSec",value:J,index:1});return}if(ee==="save-onscreen"){let J=n.max?n.max.value.trim():"",W=Number(J);if(J===""||!Number.isInteger(W)||W<0||W>200){$(u("ratelimitInvalidInputToast"),!1);return}await i(U,"/admin/api/onscreen-limits",{max_onscreen_danmu:W,overflow_mode:n.mode&&n.mode.value==="queue"?"queue":"drop"});return}if(ee==="reset"){U.disabled=!0;try{let J=await window.csrfFetch("/admin/ratelimit/reset",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(J.ok){let W=await J.json();T+=1,M=W&&W.scopes||M,H.forEach(l),w(),W&&W.persisted===!1?$(u("rlNotPersisted"),!1):$(u("ratelimitResetDoneToast"),!0)}else $(u("ratelimitApplyFailedToast",{msg:`HTTP ${J.status}`}),!1)}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{U.disabled=!1}}}),y.addEventListener("change",F=>{let U=F.target.closest&&F.target.closest("[data-rl-form]");!U||!F.target.matches("[data-rl-target]")||(l(U),r(U),w())}),y.addEventListener("input",F=>{let U=F.target.closest&&F.target.closest("[data-rl-form]");U&&F.target.matches("[data-rl-limit]")&&c(U)});let S=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,I={allowlist:[],denylist:[]},d={input:y.querySelector("[data-rl-ip-input]"),select:y.querySelector("[data-rl-ip-select]"),addBtn:y.querySelector("[data-rl-ip-add]"),summary:y.querySelector("[data-rl-ip-summary]"),error:y.querySelector("[data-rl-ip-error]"),allowCount:y.querySelector("[data-rl-ip-allow-count]"),denyCount:y.querySelector("[data-rl-ip-deny-count]"),allowBody:y.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:y.querySelector('[data-rl-ip-body="denylist"]')};function k(F){if(d.error){if(!F){d.error.hidden=!0,d.error.textContent="";return}d.error.hidden=!1,d.error.textContent=F}}function L(F){let U=F==="allowlist"?d.allowBody:d.denyBody,ee=F==="allowlist"?d.allowCount:d.denyCount;if(!U||!ee)return;let J=Array.isArray(I[F])?I[F]:[];if(ee.textContent=String(J.length),J.length===0){let W=ServerI18n.t(F==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");U.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:W})}</div>`;return}U.innerHTML=J.map(W=>{let Z=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:h(W)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${h(W)}">
          <span class="admin-ratelimit-ip-chip-cidr">${h(W)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${h(W)}" data-rl-ip-remove-kind="${F}" title="${Z}" aria-label="${Z}">\xD7</button>
        </div>
      `}).join("")}function j(){if(L("allowlist"),L("denylist"),d.summary){let F=(I.allowlist||[]).length,U=(I.denylist||[]).length;d.summary.textContent=ServerI18n.t("ratelimitIpCounts",{allow:F,deny:U})}}async function P(){try{let F=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!F.ok){d.summary&&(d.summary.textContent=ServerI18n.t("ratelimitLoadFailedStatus",{status:F.status}));return}let U=await F.json();U&&typeof U=="object"&&(I={allowlist:Array.isArray(U.allowlist)?U.allowlist:[],denylist:Array.isArray(U.denylist)?U.denylist:[]},j())}catch{d.summary&&(d.summary.textContent=ServerI18n.t("ratelimitNetworkError"))}}async function V(F,{toastLabel:U}={}){try{let ee=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(ee.ok){let Z=await ee.json();return I={allowlist:Array.isArray(Z.allowlist)?Z.allowlist:[],denylist:Array.isArray(Z.denylist)?Z.denylist:[]},j(),k(""),U&&typeof showToast=="function"&&showToast(U,!0),!0}let J=await ee.json().catch(()=>({})),W=J&&J.error||`HTTP ${ee.status}`;return k(W),!1}catch{return k(ServerI18n.t("ratelimitNetworkError")),!1}}d.addBtn&&d.addBtn.addEventListener("click",async()=>{if(!d.input||!d.select)return;let F=(d.input.value||"").trim();if(!F){k(ServerI18n.t("ratelimitIpRequiredError"));return}if(!S.test(F)){k(ServerI18n.t("ratelimitIpFormatError"));return}let U=d.select.value==="denylist"?"denylist":"allowlist",ee=Array.from(new Set([...I[U]||[],F]));await V({[U]:ee},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(U==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:F})})&&(d.input.value="")}),d.input&&(d.input.addEventListener("keydown",F=>{F.key==="Enter"&&(F.preventDefault(),d.addBtn&&d.addBtn.click())}),d.input.addEventListener("input",()=>{d.error&&!d.error.hidden&&k("")})),y.addEventListener("click",async F=>{let U=F.target.closest("[data-rl-ip-remove]");if(!U)return;let ee=U.dataset.rlIpRemove,J=U.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",W=(I[J]||[]).filter(Z=>Z!==ee);await V({[J]:W},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(J==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:ee})})}),P(),f(),t(),w(),v()}function C(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(g))return;y.insertAdjacentHTML("beforeend",N());let M=document.getElementById(g);M&&D(M)}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var Nt=ye(()=>{(function(){"use strict";let g="sec-viewer-theme",h="danmu.viewerTheme.v1",u=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function $(){return`
      <!-- 2026-11-14 \u5F48\u5E55\u6A23\u5F0F\u5408\u4E00\uFF1A\u89C0\u773E\u9801\u5916\u89C0\u8B8A\u6210\u5F48\u5E55\u6A23\u5F0F\u9801\u88E1\u9810\u8A2D\u6536\u5408\u7684\u4E00\u584A
           \uFF08\u5C11\u7528\uFF1B#/viewer/page \u6703\u5C55\u958B\u5B83\uFF09\u3002summary \u5C31\u662F\u6A19\u984C\u3002 -->
      <details id="${g}" class="admin-vt-page admin-dsp2-fold lg:col-span-2">
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
      </details>`}let B=/^#[0-9a-f]{6}$/i,A=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function G(D){return String(D??"").replace(/[&<>"']/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[C])}function O(D){let C={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(y=>{typeof D[y]=="string"&&B.test(D[y])&&(C[y]=D[y])}),(D.mode==="dark"||D.mode==="light")&&(C.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(C.font=D.font),(D.logo===null||typeof D.logo=="string"&&A.test(D.logo))&&(C.logo=D.logo)),C}function R(D){let C={...u[0],logo:null};try{let n=localStorage.getItem(h);n&&(C={...C,...O(JSON.parse(n))})}catch{}let y="default";function M(){try{localStorage.setItem(h,JSON.stringify(C))}catch{}}function _(n){let t=/^#?([0-9a-f]{6})$/i.exec(n);if(!t)return[0,0,0];let a=parseInt(t[1],16);return[a>>16&255,a>>8&255,a&255]}function x([n,t,a]){let i=[n,t,a].map(S=>(S/=255,S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)));return .2126*i[0]+.7152*i[1]+.0722*i[2]}function T(n,t){let a=x(_(n)),i=x(_(t)),[S,I]=a>i?[a,i]:[i,a];return(S+.05)/(I+.05)}function H(n){return n>=7?{label:"AAA",cls:"is-good"}:n>=4.5?{label:"AA",cls:"is-ok"}:n>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function E(){let n=D.querySelector("[data-vt-presets]");n.innerHTML="",u.forEach(t=>{let a=document.createElement("button");a.type="button",a.className="admin-vt-preset"+(y===t.id?" is-active":""),a.innerHTML=`
          <div class="swatch" style="background:${t.bg}">
            <span style="background:${t.primary}"></span>
            <span style="background:${t.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(t.nameKey)}</div>
          <div class="mode">${ServerI18n.t(t.mode==="dark"?"lbDark":"lbLight")}</div>
        `,a.addEventListener("click",()=>{C={...C,...t},y=t.id,M(),p()}),n.appendChild(a)})}function b(){D.querySelectorAll("[data-vt-mode-btn]").forEach(n=>{n.classList.toggle("is-active",C.mode===n.dataset.vtModeBtn)})}function c(){let n=D.querySelector("[data-vt-colors]"),t=C.mode==="dark"?"#F8FAFC":"#0F172A",a=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:t,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];n.innerHTML=a.map(i=>{let S=T(C[i.key],i.vs),I=H(S),d=G(C[i.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${d}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${i.label}</span>
                <span class="grade ${I.cls}">${I.label} \xB7 ${S.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${d}" data-vt-color="${i.key}" />
                <input type="text" value="${d}" data-vt-hex="${i.key}" spellcheck="false" />
                <span class="vs">vs ${i.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let n=D.querySelector("[data-vt-logo-preview]"),t=D.querySelector(".hint-empty"),a=D.querySelector("[data-vt-logo-actions]");C.logo?(n.src=C.logo,n.hidden=!1,t.style.display="none",a.hidden=!1):(n.hidden=!0,t.style.display="",a.hidden=!0)}function r(){let n=D.querySelector("[data-vt-font]");n.value=C.font;let t=D.querySelector("[data-vt-font-specimen]");t.style.fontFamily=C.font}function e(){let n=C.mode==="dark"?"#F8FAFC":"#0F172A",t=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:T(n,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:T(C.primary,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:T(C.hero,C.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=t.map(a=>{let i=H(a.ratio);return`<span class="vt-contrast-chip ${i.cls}">${a.lbl} \xB7 ${i.label} ${a.ratio.toFixed(1)}</span>`}).join("")}function f(){let n=D.querySelector("[data-vt-stage]"),t=C.mode==="dark"?"#F8FAFC":"#0F172A";n.style.setProperty("--vt-bg",C.bg),n.style.setProperty("--vt-primary",C.primary),n.style.setProperty("--vt-hero",C.hero),n.style.setProperty("--vt-fg",t),n.style.fontFamily=C.font;let a=D.querySelector("[data-vt-preview-logo]");if(C.logo){let i=document.createElement("img");i.src=C.logo,i.style.maxHeight="40px",a.replaceChildren(i)}else a.textContent="Danmu Fire"}let m="auto",w="auto";function v(){D.querySelectorAll("[data-vt-theme-btn]").forEach(n=>{n.classList.toggle("is-active",n.dataset.vtThemeBtn===m)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(n=>{n.classList.toggle("is-active",n.dataset.vtLangBtn===w)})}async function s(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)return;let t=await n.json(),a=t&&t.ViewerThemeMode&&t.ViewerThemeMode[1],i=t&&t.ViewerLangMode&&t.ViewerLangMode[1];typeof a=="string"&&(m=a),typeof i=="string"&&(w=i),v()}catch{}}async function o(n,t){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:n,value:t,index:1})});if(!a.ok)throw new Error(a.status);window.showToast&&window.showToast(`${n} = ${t}`,!0)}catch(a){console.warn("[admin-viewer-theme] force-mode update failed:",a),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:n}),!1)}}function p(){E(),b(),c(),l(),r(),e(),f(),v()}D.addEventListener("input",n=>{if(n.target.matches("[data-vt-color]")){let t=n.target.dataset.vtColor;B.test(n.target.value)&&(C[t]=n.target.value,y="custom",M(),p())}else if(n.target.matches("[data-vt-hex]")){let t=n.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(n.target.value)&&(C[t]=n.target.value,y="custom",M(),p())}else n.target.matches("[data-vt-font]")&&(C.font=n.target.value,M(),p())}),D.addEventListener("change",n=>{if(n.target.matches("[data-vt-logo-input]")){let t=n.target.files&&n.target.files[0];if(!t)return;if(t.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let a=new FileReader;a.onload=()=>{C.logo=String(a.result||""),M(),p()},a.readAsDataURL(t)}}),D.addEventListener("click",n=>{let t=n.target.closest("[data-vt-mode-btn]");if(t){C.mode=t.dataset.vtModeBtn,y="custom",M(),p();return}let a=n.target.closest("[data-vt-theme-btn]");if(a){m=a.dataset.vtThemeBtn,v(),o("ViewerThemeMode",m);return}let i=n.target.closest("[data-vt-lang-btn]");if(i){w=i.dataset.vtLangBtn,v(),o("ViewerLangMode",w);return}if(n.target.closest("[data-vt-logo-remove]")){C.logo=null,M(),p();return}let I=n.target.closest("[data-vt-device-btn]");if(I){D.querySelectorAll("[data-vt-device-btn]").forEach(k=>k.classList.toggle("is-active",k===I)),D.querySelector("[data-vt-frame]").dataset.device=I.dataset.vtDeviceBtn;return}let d=n.target.closest("[data-vt-action]");d&&d.dataset.vtAction==="reset"&&(C={...u[0],logo:null},y="default",M(),p())}),p(),s()}document.addEventListener("click",function(D){let C=D.target.closest("[data-vt-jump]");if(!C)return;let y=C.dataset.vtJump;if(y){D.preventDefault();try{location.hash="#/"+y}catch{}}});function N(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(g))return;D.insertAdjacentHTML("beforeend",$());let C=document.getElementById(g);C&&R(C)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Pt=ye(()=>{(function(){"use strict";let g="sec-system-overview";function h(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(N=>`
            <div class="admin-soh-kpi" data-m="${N.id}">
              <div class="admin-soh-kpi__label">${N.label}</div>
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
      </div>`}function u(N){let D=Math.floor(N/86400),C=Math.floor(N%86400/3600),y=Math.floor(N%3600/60);return D>0?`${D}d ${String(C).padStart(2,"0")}h ${String(y).padStart(2,"0")}m`:C>0?`${C}h ${String(y).padStart(2,"0")}m`:`${y}m ${String(N%60).padStart(2,"0")}s`}function $(N,D,C){let y=document.querySelector(`[data-m="${N}"]`);if(!y)return;let M=y.querySelector("[data-m-v]");M&&(M.textContent=D);let _=y.querySelector("[data-m-sub]");_&&(_.textContent=C||"")}function B(N){let D=document.querySelector("[data-soh-banner-dot]"),C=document.querySelector("[data-soh-banner-title]"),y=document.querySelector("[data-soh-chip]"),_=!(N.queue_size!=null&&N.queue_capacity!=null&&N.queue_size>=N.queue_capacity);y&&y.classList.toggle("is-warn",!_),D&&D.classList.toggle("is-warn",!_),C&&(C.textContent=_?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function A(){(async()=>{try{let C=await window.csrfFetch("/admin/metrics");if(!C.ok)return;let y=await C.json(),M=c=>Array.isArray(c)&&c.length?c[c.length-1]:null,_=y.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-y.server_started_at)):0;$("uptime",_>0?u(_):"\u2014","");let x=null;try{let c=await fetch("/admin/audience/stats",{credentials:"same-origin"});c.ok&&(x=(await c.json()).total_live)}catch{}let T=y.ws_clients??0;$("conn",String(T+(x||0)),x==null?ServerI18n.t("sohConnOverlaysOnly",{n:T}):ServerI18n.t("sohConnBreakdown",{overlays:T,viewers:x}));let H=M(y.mem_series||[]),E=y.mem_total_mb?(y.mem_total_mb/1024).toFixed(0):null;$("ram",H!=null?`${Number(H).toFixed(0)}%`:"\u2014",E?ServerI18n.t("sohMemorySub",{total:E}):"");let b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";$("ver",`v${b}`,ServerI18n.t("sohVersionSub")),B(y)}catch{}})();let N=document.getElementById(g);if(!N)return;let D=()=>{let C=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";N.querySelectorAll("[data-soh-mode]").forEach(y=>{let M=y.dataset.sohMode===C;y.classList.toggle("is-active",M),y.setAttribute("aria-pressed",M?"true":"false")})};D(),document.addEventListener("admin:theme-mode",D),N.addEventListener("click",function(C){let y=C.target.closest("[data-soh-mode]");if(y){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(y.dataset.sohMode),D();return}let M=C.target.closest("[data-soh-action]");if(!(!M||M.disabled)){if(M.dataset.sohAction==="copy-url"){let _=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(_);return}if(M.dataset.sohAction==="show-qr"){let _=N.querySelector("[data-soh-qr]");if(!_)return;if(!_.hidden){_.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(x=>x.ok?x.json():Promise.reject(x)).then(x=>{G(N,x),_.innerHTML=x.svg,_.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}}),O(N)}function G(N,D){let C=N.querySelector("#sysoPublicUrl"),y=N.querySelector("[data-soh-urlwarn]");C&&D&&D.url&&(C.textContent=D.url),y&&(y.hidden=!(D&&D.source==="unavailable"),y.textContent=D&&D.blocked_host?ServerI18n.t("joinUrlNotTrusted",{host:D.blocked_host}):ServerI18n.t("joinUrlLocalOnly"))}function O(N){fetch("/admin/qr/public",{credentials:"same-origin"}).then(D=>D.ok?D.json():null).then(D=>{D&&G(N,D)}).catch(()=>{})}function R(){let N=document.getElementById("settings-grid");!N||document.getElementById(g)||(N.insertAdjacentHTML("beforeend",h()),document.getElementById(g)&&A())}document.addEventListener("admin-panel-rendered",R),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var Rt=ye(()=>{(function(){"use strict";let g="sec-polls",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(G){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[G]})};function u(){return`
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
  `}function $(){let A=document.getElementById("sec-polls");if(!A)return;let G=A.querySelector("[data-poll-queue]"),O=A.querySelector("[data-poll-editor]"),R=A.querySelector("[data-poll-view-builder]"),N=A.querySelector("[data-poll-view-live]"),D=A.querySelector("[data-poll-view-results]"),C="danmu.adminPollQueue.v2";function y(){return"q_"+Math.random().toString(36).slice(2,8)}function M(){return"o_"+Math.random().toString(36).slice(2,6)}function _(K){return{id:M(),label:""}}function x(){return{id:y(),text:"",timer:90,image_url:"",server_q_id:"",options:[_("A"),_("B")]}}let T=null,H="builder",E=null,b=0,c={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,r=[];try{let K=localStorage.getItem(C);if(K){let Y=JSON.parse(K);Array.isArray(Y)?r=Y:Y&&Array.isArray(Y.queue)&&(r=Y.queue)}}catch{}(!Array.isArray(r)||r.length===0)&&(r=[x()]),r.forEach(K=>{typeof K.image_url!="string"&&(K.image_url=""),typeof K.server_q_id!="string"&&(K.server_q_id="")});let e=r[0].id,f="manual",m=null,w=null,v={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function s(){try{localStorage.setItem(C,JSON.stringify({queue:r,activeId:e,mode:f}))}catch{}}function o(K){return r.find(Y=>Y.id===K)}function p(K,Y){let ne=o(K);ne&&Object.assign(ne,Y)}function n(K,Y,ne){let re=K.slice(),[de]=re.splice(Y,1);return re.splice(ne,0,de),re}function t(){G.innerHTML="",r.forEach((K,Y)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",K.id===e&&ne.classList.add("is-active");let re=v.active&&v.currentIndex===Y;re&&ne.classList.add("is-running"),ne.dataset.qid=K.id,ne.draggable=!0;let de=!!K.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Y+1}</span>
            <div class="info">
              <div class="text">${h(K.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:K.options.length})} \xB7 ${K.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):K.timer+"s"} \xB7 ${de?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${re?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":K.id===e?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,G.appendChild(ne)})}function a(){let K=o(e)||r[0];if(!K){O.innerHTML="";return}let Y=r.indexOf(K);O.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Y+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Y+1})}</span>
            </div>
            <span class="progress">Q${Y+1} / ${r.length}</span>
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
            ${K.options.map((ne,re)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+re)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${h(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+re)})}" maxlength="100" />
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
        `}function i(){T&&T.active?H="live":E?H="results":H="builder",A.dataset.pollView=H,R.hidden=H!=="builder",N.hidden=H!=="live",D.hidden=H!=="results",t(),a(),U(),H==="live"?L():H==="results"&&P(),H==="live"?S():I()}function S(){l||(l=setInterval(()=>{H!=="live"||!T||!T.active||j()},1e3))}function I(){l&&(clearInterval(l),l=null)}function d(K,Y){if(!K||!K.time_limit_seconds)return null;if(!Y)return K.time_limit_seconds;let ne=Date.now()/1e3-Y;return Math.max(0,Math.round(K.time_limit_seconds-ne))}function k(K){if(K==null)return"\u221E";let Y=String(Math.floor(K/60)).padStart(2,"0"),ne=String(K%60).padStart(2,"0");return`${Y}:${ne}`}function L(){if(!T||!T.questions||T.questions.length===0){N.innerHTML="";return}let K=T.current_index>=0?T.current_index:0,Y=T.questions.length,ne=T.questions[K],re=d(ne,T.started_at),de=ne.time_limit_seconds||0,ue=de>0&&re!=null?Math.max(0,Math.min(1,re/de)):1,me=de>0&&re!=null&&re<=Math.max(5,de*.15),Te=ne.options.reduce((ae,le)=>ae+(le.count||0),0),Ee=[...ne.options].sort((ae,le)=>(le.count||0)-(ae.count||0)),Le=Ee[0]?Ee[0].count:0,oe=T.questions[K+1],se=110,ce=se/2-6,z=2*Math.PI*ce,te=z*ue;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${h((T.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${K+1}</strong>`,total:Y})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${se} ${se}" width="56" height="56">
                      <circle cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="${me?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${te} ${z}" stroke-linecap="round"
                        transform="rotate(-90 ${se/2} ${se/2})"
                        style="filter: drop-shadow(0 0 4px ${me?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${me?"is-low":""}" data-live-mmss>${re==null?ServerI18n.t("pollBuilderNoTimeLimit"):k(re)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:K+1})}</div>
                <div class="text">${h(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(ae=>{let le=Te>0?ae.count/Te*100:0,he=(ae.count||0)>0&&ae.count===Le;return`
                    <div class="admin-polls-live-bar ${he?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${h(ae.key)}</span>
                        <span class="lbl">${h(ae.text||"")}</span>
                        ${he?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${le.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ae.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${le.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Te}</strong>`})}</span>
                ${oe?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${h(oe.text||"")}</em>`})}</span>`:""}
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
                  ${T.questions.map((ae,le)=>{let he=le<K?"done":le===K?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${he}">
                        <span class="idx">${he==="done"?"\u2713":le+1}</span>
                        <span class="t">${h(ae.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                    <label class="admin-polls-live-toggle ${c[ae.k]?"is-on":""}" data-live-toggle="${ae.k}">
                      <span class="lbl">${ae.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function j(){if(!T||!T.active)return;let K=T.current_index>=0?T.current_index:0,Y=T.questions[K];if(!Y)return;let ne=d(Y,T.started_at),re=Y.time_limit_seconds||0,de=N.querySelector("[data-live-mmss]"),ue=N.querySelector("[data-live-ring]");if(de&&(de.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):k(ne),de.classList.toggle("is-low",re>0&&ne!=null&&ne<=Math.max(5,re*.15))),ue&&re>0&&ne!=null){let me=+ue.getAttribute("r"),Te=2*Math.PI*me,Ee=Math.max(0,Math.min(1,ne/re));ue.setAttribute("stroke-dasharray",`${Te*Ee} ${Te}`);let Le=ne<=Math.max(5,re*.15);ue.setAttribute("stroke",Le?"var(--hud-crimson)":"var(--color-primary)"),ue.style.filter=`drop-shadow(0 0 4px ${Le?"var(--hud-crimson)":"var(--color-primary)"})`}c.autoAdvance&&re>0&&ne===0&&(K>=T.questions.length-1?W():J())}function P(){let K=E;if(!K||!K.questions||K.questions.length===0){D.innerHTML="";return}let Y=K.questions.length,ne=Math.max(0,Math.min(b,Y-1)),re=K.questions[ne],de=re.options.reduce((z,te)=>z+(te.count||0),0),ue=[...re.options].sort((z,te)=>(te.count||0)-(z.count||0)),me=ue[0]||{key:"-",text:"\u2014",count:0},Te=ue[1],Ee=de>0?me.count/de*100:0,Le=Te?Math.max(0,me.count-Te.count):me.count,oe=K.started_at||0,se=K.ended_at||Date.now()/1e3,ce=Math.max(0,Math.round(se-oe));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Y>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${K.questions.map((z,te)=>`
                    <button type="button" role="tab" class="${te===ne?"is-active":""}" data-results-tab="${te}">
                      Q${te+1}<span class="t">${h((z.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Y} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:k(ce),n:de})}</span>
                </div>
                <div class="text">${h(re.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${h(me.key)}</div>
                <div class="info">
                  <div class="lbl">${h(me.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} \xB7 ${Ee.toFixed(1)}% ${Te?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Le}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:de})}</span>
                </div>
                ${ue.map((z,te)=>{let ae=de>0?z.count/de*100:0;return`
                    <div class="admin-polls-results-bar ${te===0&&z.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${te+1}</span>
                        <span class="tag">${h(z.key)}</span>
                        <span class="lbl">${h(z.text||"")}</span>
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
                  <span class="big">${de}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,de?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:re.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${re.time_limit_seconds?k(re.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${K.started_at?new Date(K.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${K.ended_at?new Date(K.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${k(ce)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let z=Math.max(1,...ue.map(te=>te.count));return ue.map(te=>`<div class="bar" style="height:${Math.max(6,te.count/z*100)}%"></div>`).join("")})()}
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
        `}function V(K){let Y=[["question_index","question","option_key","option_text","count","percentage"]];return K.questions.forEach((ne,re)=>{let de=ne.options.reduce((ue,me)=>ue+(me.count||0),0);ne.options.forEach(ue=>{let me=de>0?(ue.count/de*100).toFixed(1):"0";Y.push([re+1,ne.text,ue.key,ue.text,ue.count,me])})}),Y.map(ne=>ne.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function F(K,Y,ne){let re=new Blob([ne],{type:Y}),de=document.createElement("a");de.href=URL.createObjectURL(re),de.download=K,document.body.appendChild(de),de.click(),setTimeout(()=>{URL.revokeObjectURL(de.href),de.remove()},0)}A.addEventListener("click",K=>{let Y=K.target.closest("[data-live-action]");if(Y){let ue=Y.dataset.liveAction;ue==="advance"?J():ue==="end"?W():ue==="pause"&&(c.autoAdvance=!1,L());return}let ne=K.target.closest("[data-live-toggle]");if(ne){let ue=ne.dataset.liveToggle;ue in c&&(c[ue]=!c[ue],ne.classList.toggle("is-on",c[ue]));return}let re=K.target.closest("[data-results-tab]");if(re){b=+re.dataset.resultsTab||0,P();return}let de=K.target.closest("[data-results-action]");if(de){let ue=de.dataset.resultsAction,me=E;if(!me)return;if(ue==="copy"){let Te=me.questions.map((Ee,Le)=>{let oe=Ee.options.reduce((ce,z)=>ce+(z.count||0),0),se=Ee.options.map(ce=>{let z=oe>0?(ce.count/oe*100).toFixed(1):"0.0";return`  ${ce.key}. ${ce.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} (${z}%)`});return`Q${Le+1}: ${Ee.text}
${se.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Te)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ue==="csv"?F(`poll_${(me.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",V(me)):ue==="json"?F(`poll_${(me.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(me,null,2)):ue==="reset"&&(E=null,b=0,i());return}}),G.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(m=Y.dataset.qid,Y.classList.add("is-dragging"))}),G.addEventListener("dragend",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&Y.classList.remove("is-dragging"),m=null,G.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),G.addEventListener("dragover",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");!Y||!m||Y.dataset.qid===m||(G.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),G.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");if(!Y||!m)return;let ne=r.findIndex(de=>de.id===m),re=r.findIndex(de=>de.id===Y.dataset.qid);ne<0||re<0||ne===re||(r=n(r,ne,re),s(),i())}),G.addEventListener("click",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(e=Y.dataset.qid,s(),i())}),O.addEventListener("input",K=>{let Y=o(e);if(Y){if(K.target.matches("[data-ed-text]")){Y.text=K.target.value,s(),t();return}if(K.target.matches("[data-ed-opt-text]")){let ne=K.target.dataset.edOptText,re=Y.options.find(de=>de.id===ne);re&&(re.label=K.target.value,s(),t())}}}),O.addEventListener("change",K=>{let Y=o(e);Y&&K.target.matches("[data-ed-timer]")&&(Y.timer=+K.target.value,s(),t())}),O.addEventListener("click",async K=>{let Y=o(e);if(!Y)return;let ne=K.target.closest("[data-ed-opt-remove]");if(ne){let de=ne.dataset.edOptRemove;Y.options.length>2&&(Y.options=Y.options.filter(ue=>ue.id!==de),s(),a(),t());return}if(K.target.closest("[data-ed-opt-add]")){Y.options.length<6&&(Y.options.push(_()),s(),a(),t());return}let re=K.target.closest("[data-ed-action]");if(re)if(re.dataset.edAction==="remove-q"){if(r.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=r.findIndex(me=>me.id===e);r=r.filter(me=>me.id!==e),e=r[Math.min(ue,r.length-1)].id,s(),i()}}else if(re.dataset.edAction==="upload-q-image"){let de=O.querySelector("[data-ed-q-image-input]");de&&de.click()}else re.dataset.edAction==="remove-q-image"&&(Y.image_url="",s(),a(),t())}),O.addEventListener("change",async K=>{if(!K.target.matches("[data-ed-q-image-input]"))return;let Y=K.target.files&&K.target.files[0];if(!Y)return;let ne=o(e);if(!ne)return;if(!v.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),K.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),K.target.value="";return}if(Y.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),K.target.value="";return}let re=new FormData;re.append("file",Y);try{let de=await csrfFetch(`/admin/poll/${encodeURIComponent(v.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:re}),ue=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ue.error||"upload failed");ne.image_url=ue.image_url,s(),a(),t(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(de){showToast&&showToast(String(de.message||de),!1)}finally{K.target.value=""}}),O.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-opt");Y&&(w=Y.dataset.oid,Y.classList.add("is-dragging"))}),O.addEventListener("dragend",K=>{O.querySelectorAll(".is-dragging, .is-drag-over").forEach(Y=>Y.classList.remove("is-dragging","is-drag-over")),w=null}),O.addEventListener("dragover",K=>{let Y=K.target.closest(".admin-poll-opt");!Y||!w||Y.dataset.oid===w||(K.preventDefault(),O.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),O.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-opt"),ne=o(e);if(!Y||!w||!ne)return;let re=ne.options.findIndex(ue=>ue.id===w),de=ne.options.findIndex(ue=>ue.id===Y.dataset.oid);re<0||de<0||re===de||(ne.options=n(ne.options,re,de),s(),a())}),A.addEventListener("click",K=>{if(K.target.closest("[data-poll-action='add']")){let ue=x();r.push(ue),e=ue.id,s(),i();return}let ne=K.target.closest("[data-poll-template]");if(ne){let ue=x(),me=ne.dataset.pollTemplate,Te=["A","B","C","D","E"],Ee=Le=>Le.map((oe,se)=>{let ce=_(Te[se]);return ce.label=oe,ce});me==="yesno"?(ue.text="",ue.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):me==="stars"?(ue.timer=60,ue.options=Ee(["1","2","3","4","5"])):me==="four"&&(ue.options=Ee(["","","",""])),r.push(ue),e=ue.id,s(),i();return}let re=K.target.closest("[data-poll-mode]");re&&(f=re.dataset.pollMode,A.querySelectorAll("[data-poll-mode]").forEach(ue=>ue.classList.toggle("is-active",ue===re)),s());let de=K.target.closest("[data-poll-session-action]");if(de){let ue=de.dataset.pollSessionAction;ue==="start"?ee():ue==="advance"?J():ue==="end"&&W()}});function U(){let K=A.querySelector("[data-poll-session]");if(!K)return;let Y=K.querySelector("[data-poll-session-status]"),ne=K.querySelector("[data-poll-session-action='start']"),re=K.querySelector("[data-poll-session-action='advance']"),de=K.querySelector("[data-poll-session-action='end']");if(!v.pollId||!v.active){Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,re.hidden=!0,de.hidden=!0;return}let ue=r.length,me=v.currentIndex+1,Te=v.currentIndex>=ue-1;Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${me} / ${ue}</span>`,ne.hidden=!0,re.hidden=Te,de.hidden=!1}async function ee(){try{let K=r.map((me,Te)=>{let Ee=(me.text||"").trim(),Le=me.options.map(oe=>(oe.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Te+1}));if(Le.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Te+1}));return{text:Ee,options:Le,time_limit_seconds:me.timer&&me.timer>0?me.timer:null}});if(!K.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Y=(()=>{let me=r.map(Te=>Number(Te.timer)||0).filter(Te=>Te>0);return me.length?Math.round(me.reduce((Te,Ee)=>Te+Ee,0)/me.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:K,mode:f||"manual",default_duration_s:Y})}),re=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(re.error||ServerI18n.t("pollBuilderErrCreateFailed"));v.pollId=re.poll_id,(re.questions||[]).forEach((me,Te)=>{r[Te]&&(r[Te].server_q_id=me.id)}),s();let de=await csrfFetch("/admin/poll/start",{method:"POST"}),ue=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ue.error||ServerI18n.t("pollBuilderErrStartFailed"));v.active=!0,v.currentIndex=ue.current_index??0,T=ue,E=null,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),Z()}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function J(){try{let K=await csrfFetch("/admin/poll/advance",{method:"POST"}),Y=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Y.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));v.currentIndex=Y.current_index,v.active=!!Y.active,T=Y,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:v.currentIndex+1}),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function W(){try{let K=T,Y=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Y.ok){let ne=await Y.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}K&&K.questions&&(E={...K,ended_at:Date.now()/1e3},b=K.current_index>=0?K.current_index:0),v.active=!1,v.pollId="",v.currentIndex=-1,T=null,v.statusTimer&&(clearInterval(v.statusTimer),v.statusTimer=null),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}function Z(){v.statusTimer&&clearInterval(v.statusTimer),v.statusTimer=setInterval(async()=>{if(v.pollId)try{let K=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!K.ok)return;let Y=await K.json();if(Y.poll_id!==v.pollId)return;v.active=!!Y.active,v.currentIndex=Y.current_index??-1;let ne=!!(T&&T.active);T=Y,Y.active||(clearInterval(v.statusTimer),v.statusTimer=null,ne&&Y.questions&&!E&&(E={...Y,ended_at:Date.now()/1e3},b=Y.current_index>=0?Y.current_index:0),T=null),H==="live"?L():i()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{v.statusTimer&&(clearInterval(v.statusTimer),v.statusTimer=null),I()}),i()}function B(){let A=document.getElementById("settings-grid");!A||document.getElementById(g)||(A.insertAdjacentHTML("beforeend",u()),document.getElementById(g)&&$())}document.addEventListener("admin-panel-rendered",B),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),B()})})()});var Ot=ye(()=>{(function(){"use strict";let $="sec-live-feed",B={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},A=[],G=[],O=!1,R="",N="all",D=0,C=0,y=null,M=null,_=null;function x(oe){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(oe):String(oe??"").replace(/[&<>"']/g,function(se){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[se]})}function T(oe,se){return oe?oe.length>se?oe.slice(0,se)+"\u2026":oe:""}function H(oe){let se=new Date(oe),ce=z=>String(z).padStart(2,"0");return`${ce(se.getHours())}:${ce(se.getMinutes())}:${ce(se.getSeconds())}`}function E(oe){if(!R)return!0;let se=R.toLowerCase(),ce=oe.data;return ce.text&&ce.text.toLowerCase().includes(se)||ce.nickname&&ce.nickname.toLowerCase().includes(se)||ce.fingerprint&&ce.fingerprint.toLowerCase().includes(se)||ce.layout&&ce.layout.toLowerCase().includes(se)}function b(oe){return N==="muted"?!!oe.muted:!0}function c(){N="all",document.querySelectorAll(".admin-live-feed-tab").forEach(oe=>oe.classList.toggle("is-active",oe.dataset.tab==="all"))}function l(){R="",_&&(_.value=""),c()}function r(oe,se){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let z;return oe==="paused"?z=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:se||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):oe==="no-result"?z=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:se||ServerI18n.t("lfNoMatchDesc")}):z=window.AdminEmpty.render("messages"),z.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),z.setAttribute("data-empty-kind","live-feed"),z}let ce=document.createElement("div");return ce.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",ce.setAttribute("data-empty-kind","live-feed"),ce.innerHTML=`<div class="admin-proto-placeholder-title">${x(oe)}</div><div class="admin-proto-placeholder-body">${x(se||"")}</div>`,ce}function e(oe){let se=oe.data,ce=document.createElement("div");ce.className="admin-live-feed-row"+(oe.muted?" is-muted":""),ce.dataset.id=oe.id,ce.tabIndex=-1;let z=document.createElement("span");if(z.className="admin-live-feed-time",z.textContent=H(oe.ts),ce.appendChild(z),(se.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=se.layout,ce.appendChild(pe)}let ae=B[se.integration];if(ae){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ae,ce.appendChild(pe)}let le=document.createElement("span");le.className="admin-live-feed-text",le.textContent=T(se.text||"",80),le.title=se.text||"",ce.appendChild(le);let he=document.createElement("span");he.className="admin-live-feed-identity",window.AdminIdentity&&he.appendChild(AdminIdentity.render({nickname:se.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!_||(_.value=pe,_.dispatchEvent(new Event("input",{bubbles:!0})),_.focus())}})),ce.appendChild(he);let ke=document.createElement("span");if(ke.className="admin-live-feed-actions is-hover-reveal",se.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",xe=>{xe.stopPropagation(),m(oe)}),ke.appendChild(pe)}let $e=document.createElement("button");if($e.type="button",$e.className="admin-ui-chip is-danger admin-live-feed-action",$e.textContent=ServerI18n.t("blockKeywordBtn"),$e.title=ServerI18n.t("blockKeywordTitle"),$e.addEventListener("click",pe=>{pe.stopPropagation(),w("keyword",se.text,oe.id)}),ke.appendChild($e),se.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",se.fingerprint),pe.addEventListener("click",xe=>{xe.stopPropagation(),w("fingerprint",se.fingerprint,oe.id)}),ke.appendChild(pe)}return ce.appendChild(ke),ce.classList.add("is-clickable"),ce.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||f(oe)}),ce.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),f(oe))}),ce}function f(oe){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(oe)}async function m(oe){let se=oe&&oe.data&&oe.data.message_id;if(!se)return;let ce=await window.AdminModeration.recall(se);if(!ce.ok){console.error("[LiveFeed] Recall failed:",ce.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}oe.recalled=!0;let z=v(oe.id);z&&z.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function w(oe,se,ce){if(!(!se||!await(oe==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,se))){if(ce){let ae=A.find(le=>le.id===ce);ae&&(ae.muted=!0)}else A.forEach(ae=>{oe==="keyword"&&ae.data.text===se&&(ae.muted=!0),oe==="fingerprint"&&ae.data.fingerprint===se&&(ae.muted=!0)});p()}}function v(oe){if(!y||!oe)return null;let se=y.children;for(let ce=0;ce<se.length;ce++)if(se[ce].dataset&&se[ce].dataset.id===oe)return se[ce];return null}function s(){let oe=document.activeElement,se=oe&&oe.closest?oe.closest(".admin-live-feed-row"):null;return se?se.dataset.id:null}function o(oe){if(!oe)return;let se=v(oe);se&&document.activeElement!==se&&se.focus({preventScroll:!0})}function p(){if(!y)return;let oe=s(),se=document.createDocumentFragment(),ce=A.filter(z=>E(z)&&b(z));for(let z=ce.length-1;z>=0;z--)se.appendChild(e(ce[z]));if(y.textContent="",se.childNodes.length===0){let z=O?r("paused"):A.length===0?r("empty"):r("no-result");y.appendChild(z)}else y.appendChild(se);a(),o(oe)}function n(oe){if(!y||!E(oe)||!b(oe))return null;let se=y.querySelector("[data-empty-kind='live-feed']");se&&se.remove();let ce=y.scrollTop<=8,z=e(oe);if(ce)y.insertBefore(z,y.firstChild);else{let te=y.scrollHeight;y.insertBefore(z,y.firstChild),y.scrollTop+=y.scrollHeight-te,C+=1}return z}function t(){let oe=A.length-200;if(oe<=0)return;A.splice(0,oe).forEach(ce=>{let z=v(ce.id);z&&z.remove()})}function a(){d(),k(),S()}function i(oe,se){let ce={ts:typeof se=="number"&&se>0?se*1e3:Date.now(),data:oe,id:oe&&oe.message_id?"m"+oe.message_id:"e"+ ++D};if(oe&&oe.status==="blocked"&&(ce.muted=!0),O){G.push(ce),k(),S();return}A.push(ce),n(ce),t(),a()}function S(){let oe=document.querySelector("[data-lf-jump]"),se=document.querySelector("[data-lf-jump-n]");if(!oe||!se)return;let ce=G.length,z=ce>0?ce:C;z>0?(oe.hidden=!1,se.textContent=String(z)):oe.hidden=!0}function I(){O&&L(),C=0,y&&(y.scrollTop=0),S()}function d(){let oe=document.querySelector("[data-lf-state]");oe&&(oe.className=O?"ui-status is-warning":"ui-status is-success",oe.textContent=O?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function k(){let oe=document.getElementById($)||document,se=(ce,z)=>{let te=oe.querySelector(ce);te&&(te.textContent=String(z))};se("[data-cnt-all]",A.length),se("[data-cnt-mut]",A.filter(ce=>ce.muted).length)}function L(){if(O=!O,y&&y.setAttribute("aria-live",O?"off":"polite"),M&&(M.textContent=O?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),M.classList.toggle("is-primary",O),M.classList.toggle("is-ghost",!O)),O)k(),S();else{for(let oe of G)A.push(oe);G=[],A.length>200&&A.splice(0,A.length-200),C=0,p()}}function j(){let oe=document.getElementById("settings-grid");if(!oe)return!1;let se=`
      <div id="${$}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
              placeholder="${x(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${x(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${x(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return oe.insertAdjacentHTML("beforeend",se),!0}let P=!1,V=null,F=0,U=1500,ee=!1;async function J(){if(!ee){ee=!0;try{let oe=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(F),{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json();if(Array.isArray(se.entries)){for(let ce of se.entries)if(!(!ce||!ce.data)){if(typeof ce.seq=="number"){if(ce.seq<=F)continue;F=ce.seq}i(ce.data,ce.ts)}}typeof se.next_since=="number"&&se.next_since>F&&(F=se.next_since)}catch{}finally{ee=!1}}}let W=5e3,Z=null,K=!1;async function Y(){if(!(K||document.hidden)){K=!0;try{let oe=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json(),ce=Array.isArray(se.pending)?se.pending.length:0,z=document.getElementById($);if(!z)return;let te=z.querySelector("[data-cnt-q]");te&&(te.textContent=String(ce));let ae=z.querySelector("[data-lf-pending-link]");ae&&ae.classList.toggle("has-pending",ce>0)}catch{}finally{K=!1}}}function ne(){P||(P=!0,J(),V=setInterval(J,U),Y(),Z=setInterval(Y,W),window.addEventListener("beforeunload",()=>{Z&&(clearInterval(Z),Z=null),V&&(clearInterval(V),V=null)}))}function re(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById($)&&j()&&(de(),p())}function de(){y=document.getElementById("liveFeedList"),M=document.getElementById("liveFeedPauseBtn"),_=document.getElementById("liveFeedSearch");let oe=document.getElementById("liveFeedClearBtn"),se=document.querySelectorAll(".admin-live-feed-tab");M&&M.addEventListener("click",L),oe&&oe.addEventListener("click",()=>{A=[],G=[],C=0,p()});let ce=document.querySelector("[data-lf-jump-btn]");if(ce&&ce.addEventListener("click",I),y&&y.addEventListener("scroll",()=>{y.scrollTop<=8&&C>0&&(C=0,S())},{passive:!0}),se.forEach(z=>{z.addEventListener("click",()=>{se.forEach(te=>te.classList.remove("is-active")),z.classList.add("is-active"),N=z.dataset.tab||"all",p()})}),_){let z=null;_.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(()=>{R=_.value.trim(),p()},200)})}ne()}function ue(oe){if(!("ontouchstart"in window))return;let se=0,ce=0,z=0,te=null,ae=null,le=!1;function he(ke){if(ke.querySelector(".admin-live-feed-row__swipe-actions"))return;let $e=ke.dataset.id,pe=A.find(Ae=>Ae.id===$e),xe=!!(pe&&pe.data&&pe.data.message_id),Ie=document.createElement("div");Ie.className="admin-live-feed-row__swipe-actions",Ie.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${xe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,Ie.addEventListener("click",function(Ae){let Fe=Ae.target.closest("[data-swipe-act]");if(!Fe||Fe.disabled)return;let Pe=ke.dataset.id,qe=A.find(je=>je.id===Pe);if(!qe||!qe.data)return;let Oe=Fe.dataset.swipeAct;Oe==="ban"?qe.data.fingerprint&&w("fingerprint",qe.data.fingerprint,Pe):Oe==="recall"&&m(qe),ke.classList.remove("is-swiped")}),ke.appendChild(Ie)}oe.addEventListener("touchstart",function(ke){let $e=ke.target.closest(".admin-live-feed-row");$e&&(ke.target.closest(".admin-live-feed-row__swipe-actions")||(te=$e,le=!1,se=ke.touches[0].clientX,ce=ke.touches[0].clientY,z=0))},{passive:!0}),oe.addEventListener("touchmove",function(ke){if(!te||le)return;let $e=ke.touches[0],pe=$e.clientX-se,xe=$e.clientY-ce;if(Math.abs(xe)>Math.abs(pe)&&Math.abs(xe)>12){le=!0;return}if(z=pe,pe<-10){he(te),ae=te,te.classList.add("is-swiping");let Ie=Math.max(-180,pe);te.style.transform=`translateX(${Ie}px)`}else pe>10&&te.classList.contains("is-swiped")&&(te.style.transform="")},{passive:!0}),oe.addEventListener("touchend",function(){te&&(te.classList.remove("is-swiping"),te.style.transform="",z<=-60?te.classList.add("is-swiped"):te.classList.remove("is-swiped"),te=null,ae=null,z=0)},{passive:!0})}function me(){return y?Array.from(y.querySelectorAll(".admin-live-feed-row")):[]}function Te(){let oe=me(),se=document.activeElement;for(let ce of oe)if(ce===se||ce.contains(se))return ce;return null}function Ee(oe){let se=me();if(!se.length)return!1;let ce=Te(),z=ce?se.indexOf(ce)+oe:oe>0?0:se.length-1;return z=Math.max(0,Math.min(se.length-1,z)),se[z].focus(),se[z].scrollIntoView({block:"nearest"}),!0}function Le(oe){let se=Te();if(!se)return!1;let ce=A.find(te=>te.id===se.dataset.id);if(!ce)return!1;let z=oe==="keyword"?ce.data.text:ce.data.fingerprint;return z?(w(oe,z,ce.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return A.slice()},isVisible:function(){return!!(y&&y.offsetParent!==null)},isPaused:function(){return O},moveFocus:Ee,blockFocused:Le,togglePause:function(){L()}},document.addEventListener("admin-panel-rendered",re),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",re):re()})()});var qt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml;function $(p,n=!1){var t=g();return t[p]!==void 0?t[p]:n}function B(p){var n=g();n[p.id]=p.open,h(n)}let A=!1;new MutationObserver(()=>{let p=document.getElementById("settings-grid");if(p&&!(document.getElementById("sec-plugins")||A)){A=!0;try{O(p)}finally{A=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function O(p){let n=`
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
      `;p.insertAdjacentHTML("beforeend",n);let t=document.querySelector("[data-console-filters]");t&&t.addEventListener("click",a=>{let i=a.target.closest("[data-console-filter]");i&&(t.querySelectorAll("[data-console-filter]").forEach(S=>S.classList.toggle("is-active",S===i)),D=i.dataset.consoleFilter,x())}),document.getElementById("pluginsReloadBtn").addEventListener("click",o),E(),H()}let R=0,N=0,D="all",C=[],y=80;function M(p){let n=(p||"INFO").toUpperCase();return n==="ERROR"?"is-error":n==="WARN"?"is-warn":n==="DEBUG"?"is-debug":"is-info"}function _(p){let n=new Date(p*1e3),t=a=>String(a).padStart(2,"0");return`${t(n.getHours())}:${t(n.getMinutes())}:${t(n.getSeconds())}`}function x(){let p=document.getElementById("pluginsConsoleBody");if(!p)return;let n=D==="all"?C:C.filter(t=>(t.level||"INFO").toUpperCase()===D);if(n.length===0){let t=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;p.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${t}</span>
          </div>`;return}p.innerHTML=n.map(t=>{let a=_(t.ts),i=(t.msg||"").replace(/[<>&"]/g,d=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[d]),S=(t.plugin||"\u2014").replace(/[<>&"]/g,d=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[d]),I=(t.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${a}</span>
          <span class="lv ${M(t.level)}">${I}</span>
          <span class="plg">${S}</span>
          <span class="msg">${i}</span>
        </div>`}).join("")}async function T(){try{let p=await fetch(`/admin/plugins/console?since=${R}`,{credentials:"same-origin"});if(!p.ok)return;let n=await p.json();if(!Array.isArray(n.events)||n.events.length===0)return;for(C.unshift(...n.events);C.length>y;)C.pop();R=n.latest_seq||R,x()}catch{}}function H(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:T}))}async function E(){let p=document.getElementById("pluginsList");if(p)try{let n=await csrfFetch("/admin/plugins/list");if(!n.ok)throw new Error(`HTTP ${n.status}`);let t=await n.json(),a=t.plugins||[];if(b(t.upload_allowed!==!1),a.length===0){p.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",c([]);return}p.innerHTML=a.map(l).join(""),v(p),c(a)}catch(n){console.error("Failed to load plugins:",n),p.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function b(p){let n=document.getElementById("pluginsUploadBtn");n&&(n.disabled=!p,n.toggleAttribute("data-upload-disabled",!p),n.textContent=ServerI18n.t(p?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),p?n.removeAttribute("title"):n.title="ALLOW_PLUGIN_UPLOAD")}function c(p){let n=p.length,t=p.filter(d=>d.enabled).length,a=n-t,i=p.map(d=>d.priority).filter(d=>typeof d=="number"),S=i.length?Math.round(i.reduce((d,k)=>d+k,0)/i.length):null,I=(d,k)=>{document.querySelectorAll(`[data-plugins-stat="${d}"]`).forEach(L=>{L.textContent=k})};I("loaded",n),I("running",t),I("paused",a),I("priority",S??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(d=>{d.textContent=n})}function l(p){let{name:n,version:t,description:a,priority:i,enabled:S,is_user:I,file:d}=p,k=`plugin-toggle-${n}`,L=f(i),j=w(i),P=e(p),V=I&&d?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${u(d)}"
            data-plugin-name="${u(n)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${u(n)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${u(n)}">
          <span class="admin-plugins-dot ${S?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${u(n)}</div>
            ${a?`<div class="desc">${u(a)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${t?"v"+u(t):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${L}">${i??"\u2014"}${j?" \xB7 "+j:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${m(P)}">${P}</span>
          <div class="admin-plugins-toggle-cell">
            ${V}
            <label class="admin-plugins-switch" for="${k}">
              <input type="checkbox" id="${k}" role="switch"
                aria-checked="${!!S}" aria-label="Toggle plugin ${u(n)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${u(n)}"
                ${S?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function r(p,n){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:p}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:n}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let a=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:n})}),i=await a.json().catch(()=>({}));if(!a.ok){showToast(i.error||ServerI18n.t("pluginsToastRemoveFailed",{status:a.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:p}),!0),await E()}catch(a){showToast(ServerI18n.t("pluginsToastNetError",{msg:a.message||""}),!1)}}function e(p){let n=p.file||p.path||p.source||"";if(typeof n=="string"){if(n.endsWith(".py"))return"PY";if(n.endsWith(".js"))return"JS"}return(p.language||"PY").toUpperCase()}function f(p){return p==null?"is-muted":p<=10?"is-danger":p<=50?"is-warn":"is-cyan"}function m(p){return p==="JS"?"is-cyan":p==="PY"?"is-warn":"is-muted"}function w(p){return p==null?"":p<=10?"CRITICAL":p<=50?"HIGH":"NORMAL"}function v(p){p.querySelectorAll(".plugin-toggle").forEach(n=>{n.addEventListener("change",async function(){let t=this.dataset.pluginName,a=this.checked;await s(t,a,this)})}),p.querySelectorAll(".plugin-uninstall").forEach(n=>{n.addEventListener("click",function(){r(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(p,n,t){let a=n?"/admin/plugins/enable":"/admin/plugins/disable";try{let i=await csrfFetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p})});if(!i.ok){let S=await i.json().catch(()=>({}));throw new Error(S.error||`HTTP ${i.status}`)}showToast(n?ServerI18n.t("pluginEnabled").replace("{name}",p):ServerI18n.t("pluginDisabled").replace("{name}",p),!0)}catch(i){console.error(`Failed to ${n?"enable":"disable"} plugin:`,i),showToast(i.message||ServerI18n.t("operationFailed"),!1),t&&(t.checked=!n)}}async function o(){let p=document.getElementById("pluginsReloadBtn");p&&(p.disabled=!0);try{let n=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!n.ok){let t=await n.json().catch(()=>({}));throw new Error(t.error||`HTTP ${n.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await E()}catch(n){console.error("Failed to reload plugins:",n),showToast(n.message||ServerI18n.t("reloadFailed"),!1)}finally{p&&(p.disabled=!1)}}})})()});var Ht=ye(()=>{(function(){"use strict";let g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},h={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},u=null,$=null;function B(){return u||(u=document.createElement("div"),u.className="admin-pu-backdrop",u.hidden=!0,u.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(u),u.addEventListener("click",e=>{(e.target.matches("[data-pu-close]")||e.target===u)&&r()}),u)}function A(e){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((m,w)=>{let v=w+1,s=v<e,p=s?"is-done":v===e?"is-active":"";return(w>0?`<span class="admin-pu-step-line ${s?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${p}">
          <span class="circle">${s?"\u2713":v}</span>
          <span class="label">${m}</span>
        </div>`}).join("")}function G(e,f){$.step=e;let m=u.querySelector("[data-pu-steps]");m&&(m.innerHTML=A(e));let w=u.querySelector("[data-pu-body]");w&&(w.innerHTML=f)}function O(e){let f=e==="error-type"?ServerI18n.t("pluginsUploadErrorType"):e==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):e==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):e==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),m=(e||"").startsWith("error")?"\u2715":e==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(e||"").startsWith("error")?"is-error":e==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${m}</div>
          <div class="admin-pu-dropzone-msg">${g(f)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function R(){let e=u.querySelector("[data-pu-dropzone]"),f=u.querySelector("[data-pu-file]"),m=u.querySelector("[data-pu-browse]");m&&m.addEventListener("click",()=>f&&f.click()),f&&f.addEventListener("change",()=>{f.files&&f.files[0]&&N(f.files[0])}),e&&(e.addEventListener("click",()=>f&&f.click()),e.addEventListener("dragover",w=>{w.preventDefault(),e.classList.add("is-over")}),e.addEventListener("dragleave",()=>e.classList.remove("is-over")),e.addEventListener("drop",w=>{w.preventDefault(),e.classList.remove("is-over");let v=w.dataTransfer&&w.dataTransfer.files;if(!(!v||v.length===0)){if(v.length>1){G(1,O("error-multi")),R();return}N(v[0])}}))}function N(e){if(!e.name.match(/\.py$/i)){G(1,O("error-type")),R();return}if(e.size>256*1024){G(1,O("error-size")),R();return}$.file=e,G(2,D(e.name)),C(e)}function D(e){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${g(e)}</div>
      </div>`}async function C(e){try{let f=new FormData;f.append("file",e);let m=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:f}),w=await m.json().catch(()=>({}));if(!m.ok&&!w.validation){window.showToast?.(w.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:m.status}),!1),G(1,O()),R();return}$.manifest=w.manifest||{},$.validation=w.validation||{},$.filename=w.filename||e.name,y($)}catch(f){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:f.message||""}),!1),G(1,O()),R()}}function y(e){let f=e.manifest||{},m=e.validation||{},w="";if(!m.syntax_ok)w=M(m.syntax_err,e);else if(Object.keys(f).length===0)w=_(e);else{let v=(m.deps||[]).some(s=>s.status==="missing");w=H(f,m,e,v)}G(2,`<div class="admin-pu-step2">${w}</div>`),E()}function M(e,f){let m=e&&e.line?e.line:"?",w=e&&e.msg?e.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${m}</span>
        </div>
        <pre class="admin-pu-syntax-body">${g(`>>> ${f.filename}
${w}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function _(e){return`
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
      </footer>`}function x(e){return e==null?"is-muted":e<=10?"is-danger":e<=50?"is-warn":"is-cyan"}function T(e){if(e==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let f=x(e),m=e<=10?"CRITICAL":e<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${f}">${e} \xB7 ${m}</span>`}function H(e,f,m,w){let v=e.name||m.filename.replace(/\.(py|js)$/i,""),s=e.version?`v${g(e.version)}`:"\u2014",o=e.author?`@${g(e.author.replace(/^@/,""))}`:"\u2014",p=e.description||ServerI18n.t("pluginsUploadNoDescription"),n="PY",t="is-warn",a=Array.isArray(e.permissions)?e.permissions:[],i=Object.keys(h).map(L=>{let j=a.includes(L);return`
        <div class="admin-pu-perm-row ${j?"is-req":"is-not"}">
          <span class="dot">${j?"\u25CF":"\u25CB"}</span>
          <span class="key">${g(L)}</span>
          <span class="label">${g(ServerI18n.t(h[L]))}</span>
        </div>`}).join(""),S=f.deps||[],I=S.map(L=>{let j=L.status==="ok"?"is-ok":L.status==="warn"?"is-warn":"is-err",P=L.status==="ok"?"\u2713":L.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${j}">
          <span class="dot">${P}</span>
          <span class="name">${g(L.name)}</span>
          <span class="note">${g(L.note||"")}</span>
        </div>`}).join(""),d=f.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${g(v)}</span>`})}
      </div>`:"",k=S.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${I}</div>
      </section>`;return`
      ${d}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${g(v)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
          <span class="author">${o}</span>
          <span class="admin-ui-pill admin-pu-pill ${t}" style="margin-left:auto">${n}</span>
        </div>
        <div class="admin-pu-manifest-desc">${g(p)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${T(e.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${i}</div>
        </section>
        ${k}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${w?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${w?"disabled":""} data-pu-confirm>${w?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function E(){let e=u.querySelector("[data-pu-back]");e&&e.addEventListener("click",()=>{$.file=null,$.manifest=null,$.validation=null,G(1,O()),R()});let f=u.querySelector("[data-pu-confirm]");f&&f.addEventListener("click",()=>b());let m=u.querySelector("[data-pu-no-manifest-ack]");m&&f&&m.addEventListener("change",()=>{f.disabled=!m.checked})}function b(){let e=$.manifest||{},f=e.name||($.filename||"").replace(/\.(py|js)$/i,""),m=e.version?`v${g(e.version)}`:"\u2014",w=Array.isArray(e.permissions)?e.permissions:[],v=w.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:w.map(p=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${g(p)}</span></div>`).join("");G(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${g(f)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${m}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${v}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${g($.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:e.priority!=null?e.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let s=u.querySelector("[data-pu-install]");s&&s.addEventListener("click",c);let o=u.querySelector("[data-pu-back]");o&&o.addEventListener("click",()=>y($))}async function c(){G(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let e=new FormData;e.append("file",$.file);let f=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:e}),m=await f.json().catch(()=>({}));if(!f.ok){window.showToast?.(m.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:f.status}),!1),y($);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:m.name||$.filename}),!0),r();let w=document.getElementById("pluginsReloadBtn");w&&w.click()}catch(e){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:e.message||""}),!1),y($)}}function l(){B(),$={step:1,file:null,manifest:null,validation:null,filename:null},G(1,O()),R(),u.hidden=!1,document.body.classList.add("admin-pu-open")}function r(){u&&(u.hidden=!0,document.body.classList.remove("admin-pu-open"),$=null)}window.AdminPluginUpload={open:l,close:r},document.addEventListener("click",e=>{let f=e.target.closest("#pluginsUploadBtn");f&&!f.disabled&&(e.preventDefault(),l())})})()});var jt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-webhooks",u=12e3,$=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function B(v,s){return v?v.length>s?v.slice(0,s)+"\u2026":v:""}function A(v){if(!v)return"\u2014";try{let s=new Date(v),o=Math.max(0,(Date.now()-s.getTime())/1e3);return o<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(o)}):o<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(o/60)}):o<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(o/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(o/86400)})}catch{return"\u2014"}}function G(v){if(!v)return"\u2014";try{return new URL(v).hostname}catch{return B(v,30)}}function O(v){return v==="active"?"is-success":v==="degraded"?"is-warn":"is-muted"}let R={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:$,eventCatalogLoaded:!1};function N(){let v=document.getElementById("settings-grid");!v||document.getElementById(h)||(v.insertAdjacentHTML("beforeend",`
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
    `),D())}function D(){let v=document.getElementById(h);if(!v)return;let s=document.getElementById("wh-register-form");s&&s.addEventListener("submit",async o=>{o.preventDefault();let p=document.getElementById("wh-url").value.trim();if(!p)return;let n=Array.from(s.querySelectorAll('input[name="wh-event"]:checked')).map(S=>S.value);if(n.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let t=document.getElementById("wh-format").value,a=document.getElementById("wh-secret").value.trim(),i={url:p,events:n,format:t};a&&(i.secret=a);try{let S=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),I=await S.json();S.ok&&I.hook_id?(showToast(ServerI18n.t("webhookRegistered")),s.reset(),T(),s.hidden=!0,await C()):showToast(I.error||ServerI18n.t("registrationFailed"),!1)}catch(S){console.error("Webhook register error:",S),showToast(ServerI18n.t("registrationFailed"),!1)}}),v.addEventListener("click",o=>{if(o.target.closest("[data-wh-action='show-add']")){s&&(s.hidden=!1);return}if(o.target.closest("[data-wh-action='hide-add']")){s&&(s.hidden=!0);return}let t=o.target.closest("[data-wh-log-filter]");if(t){R.deliveryFilter=t.dataset.whLogFilter,v.querySelectorAll("[data-wh-log-filter]").forEach(j=>{j.classList.toggle("is-active",j.dataset.whLogFilter===R.deliveryFilter)}),l();return}let a=o.target.closest("[data-wh-action='test']");if(a){o.stopPropagation(),f(a.dataset.whHookId);return}let i=o.target.closest("[data-wh-action='settings']");if(i){o.stopPropagation(),r(i.dataset.whHookId);return}if(o.target.closest("[data-wh-action='close-detail']")){R.selectedHookId=null,e(),b();return}let I=o.target.closest("[data-wh-action='detail-ping']");if(I){f(I.dataset.whHookId);return}let d=o.target.closest("[data-wh-action='detail-toggle']");if(d){m(d.dataset.whHookId,d.dataset.whNextEnabled==="1");return}let k=o.target.closest("[data-wh-action='detail-delete']");if(k){w(k.dataset.whHookId);return}let L=o.target.closest("[data-wh-hook-row]");if(L&&!o.target.closest("button")){r(L.dataset.whHookId);return}}),R.stopPoll||(R.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:u,tick:C}))}async function C(){await _(),await Promise.all([y(),M()]),H(),b(),l(),e()}async function y(){try{let s=await(await csrfFetch("/admin/webhooks/list")).json();R.hooks=Array.isArray(s.webhooks)?s.webhooks:[]}catch{R.hooks=[]}}async function M(){try{let v=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!v.ok)return;let s=await v.json();R.deliveries=Array.isArray(s.deliveries)?s.deliveries:[],R.stats=s.stats||null}catch{}}async function _(){if(!R.eventCatalogLoaded)try{let v=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(v.ok){let s=await v.json(),o=Array.isArray(s.events)?s.events:[];o.length&&(R.eventCatalog=o)}}catch{}finally{R.eventCatalogLoaded=!0,T()}}function x(v){let s=v&&v.slug?String(v.slug):"";if(v&&v.labelKey){let a=ServerI18n.t(v.labelKey);return{slug:s,label:a?a+" \xB7 "+s:s,title:a}}let o=v&&v.zh?String(v.zh):"",p=v&&v.en?String(v.en):"",n=window.ServerI18n&&ServerI18n.currentLang||"zh",t=(v&&v[n]?String(v[n]):"")||p||o;return{slug:s,label:t?t+" \xB7 "+s:s,title:o&&p?o+" \xB7 "+p:o||p}}function T(){let v=document.querySelector("[data-wh-register-events]");v&&(v.innerHTML=R.eventCatalog.map(function(s){let o=x(s);if(!o.slug)return"";let p=o.slug==="on_danmu"?" checked":"";return'<label title="'+g(o.title)+'"><input type="checkbox" name="wh-event" value="'+g(o.slug)+'"'+p+" /> "+g(o.label)+"</label>"}).join(""))}function H(){let v=document.querySelector("[data-wh-stats]");if(!v)return;let s=R.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};v.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${s.endpoints_enabled} / ${s.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${s.deliveries_24h.toLocaleString?s.deliveries_24h.toLocaleString():s.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${s.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${s.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:E()})}</div>
        <div class="v" style="color:${s.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${s.dropped_24h}</div>
      </div>`}function E(){return R.hooks.length&&R.hooks[0].retry_count||3}function b(){let v=document.getElementById("wh-list"),s=document.querySelector("[data-wh-count]");if(v){if(s&&(s.textContent=String(R.hooks.length)),R.hooks.length===0){v.innerHTML="";let o=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let p=document.getElementById("wh-register-form");p&&(p.hidden=!1),document.getElementById("wh-url")?.focus()}});o.dataset.emptyKind="webhooks",v.appendChild(o);return}v.innerHTML=R.hooks.map(c).join("")}}function c(v){let s=g(v.id||""),o=Number(v.success_count)||0,p=Number(v.fail_count)||0,n=o+p,t=n>0?Math.round(o/n*1e3)/10:100,a=v.enabled!==!1,i=Number(v.last_status)||null,S=a?i&&i>=400||v.last_error?"degraded":"active":"paused",I=S==="active"?"var(--hud-lime)":S==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",d=S==="active"?"ACTIVE":S==="degraded"?"DEGRADED":"PAUSED",k=R.selectedHookId===v.id?" is-selected":"",L=O(S),j=(v.events||[]).map(function(V){return'<span class="admin-ui-pill admin-wh-evt-chip">'+g(V)+"</span>"}).join(""),P=v.last_error?'<div class="admin-wh-card-warn">\u26A0 '+g(B(v.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${k}" data-wh-hook-row data-wh-hook-id="${s}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${I};box-shadow:${a?"0 0 6px "+I:"none"}"></span>
          <span class="name">${g(G(v.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${L}">${d}</span>
          <span class="last">last \xB7 ${g(A(v.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${g(v.url)}</div>
        <div class="admin-wh-card-events">${j}</div>
        ${P}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${t}%;background:${I}"></div></div>
            <span class="pct" style="color:${I}">${t}%</span>
          </div>
          <span class="counter ok">\u2713 ${o.toLocaleString()}</span>
          <span class="counter ${p>0?"fail":"fail-zero"}">\u2717 ${p}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let v=document.getElementById("wh-log-list");if(!v)return;let s=R.deliveries.filter(function(o){return R.deliveryFilter==="all"?!0:R.deliveryFilter==="failed"?!o.ok:R.deliveryFilter==="2xx"?o.code&&o.code>=200&&o.code<300:R.deliveryFilter==="5xx"?o.code&&o.code>=500:!0});if(s.length===0){v.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}v.innerHTML=s.map(function(o){let p=o.ts?new Date(o.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",n=o.code?String(o.code):"\u2014",t=o.ok?"var(--hud-lime)":"var(--hud-crimson)",a=o.duration_ms?o.duration_ms>=1e3?(o.duration_ms/1e3).toFixed(1)+"s":o.duration_ms+"ms":"\u2014",i=o.ok?"var(--color-text-strong)":"var(--hud-amber)",S=g(G(o.hook_url||"")),I=(o.retries||0)===0?"\u2014":"\xD7"+o.retries,d=(o.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${o.dropped?" is-dropped":""}">
          <span class="time">${g(p)}</span>
          <span class="code" style="color:${t};border-color:${t}55;background:${t}15;">${n}</span>
          <span class="dur" style="color:${i}">${g(a)}</span>
          <span class="ep">${S}</span>
          <span class="evt">${g(o.event||"")}</span>
          <span class="retry" style="color:${d}">${I}</span>
        </div>`}).join("")}function r(v){R.selectedHookId=v,b(),e()}function e(){let v=document.querySelector("[data-wh-detail]");if(!v)return;let s=R.hooks.find(function(S){return S.id===R.selectedHookId});if(!s){v.hidden=!0,v.innerHTML="";return}v.hidden=!1;let o=s.enabled!==!1,p=Number(s.last_status)||null,n=o?p&&p>=400||s.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",t=new Set(s.events||[]),a=R.eventCatalog.map(function(S){let I=x(S),d=t.has(I.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(d?"is-active is-on":"")+'" title="'+g(I.title)+'"><span aria-hidden="true">'+(d?"\u2713":"\u25CB")+"</span><span>"+g(I.label)+"</span></label>"}).join(""),i={event:s.events&&s.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:s.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};v.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+n+";box-shadow:0 0 6px "+n+'"></span><span class="name">'+g(G(s.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+a+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(s.retry_count!=null?s.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(s.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+g(JSON.stringify(i,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+g(s.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+g(s.id)+'" data-wh-next-enabled="'+(o?"0":"1")+'">'+(o?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+g(s.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function f(v){if(v)try{let s=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v})}),o=await s.json();s.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(o.error||ServerI18n.t("testFailed"),!1),setTimeout(C,1500)}catch(s){console.error("Webhook test error:",s),showToast(ServerI18n.t("testFailed"),!1)}}async function m(v,s){if(v)try{let o=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v,enabled:s})}),p=await o.json();if(!o.ok){showToast(p.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let n=R.hooks.find(function(t){return t.id===v});n&&(n.enabled=p.enabled),showToast(p.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),b(),e()}catch(o){console.error("Webhook toggle error:",o),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function w(v){if(!(!v||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let o=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:v})}),p=await o.json();o.ok?(showToast(ServerI18n.t("webhookDeleted")),R.selectedHookId===v&&(R.selectedHookId=null),C()):showToast(p.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("Webhook delete error:",o),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Ut=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-sounds",u=null,$=[],B=[];async function A(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let r=await l.json();$=r.sounds||[],B=r.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",$.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),$=[],B=[]}}async function G(){return A()}async function O(l,r){let e=new FormData;e.append("file",l),e.append("name",r);let f=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:e}),m=await f.json();if(!f.ok)throw new Error(m.error||"Upload failed");return m}async function R(l){let r=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Delete failed");return e}async function N(l){let r=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to add rule");return e}async function D(l){let r=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),e=await r.json();if(!r.ok)throw new Error(e.error||"Failed to delete rule");return e}function C(){let l=document.getElementById("soundsList");if(l){if($.length===0){l.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});r.dataset.emptyKind="sounds",r.style.gridColumn="1 / -1",l.appendChild(r);return}l.innerHTML=$.map(function(f){var m=g(f.name),w=Math.round((f.volume!=null?f.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+g(f.name)+'"><div class="name" title="'+m+'">'+m+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+g(f.name)+'" min="0" max="100" step="1" value="'+w+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+g(f.name)+'" style="min-width:32px;text-align:right">'+w+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+g(f.name)+'">'+g(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+g(f.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(f){f.addEventListener("click",function(){var m=f.dataset.name,w=$.find(function(v){return v.name===m});w&&(u&&(u.pause(),u=null),u=new Audio(w.url),u.volume=.5,u.play().catch(function(v){console.warn("Audio preview failed:",v)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(f){f.addEventListener("click",async function(){var m=f.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",m),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await R(m),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",m),!0),await A(),C(),M()}catch(v){window.showToast(v.message,!1)}})});var e={};l.querySelectorAll(".sound-volume-slider").forEach(function(f){var m=f.dataset.name,w=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(m)+'"]');f.addEventListener("input",function(){w&&(w.textContent=f.value+"%"),clearTimeout(e[m]),e[m]=setTimeout(function(){y(m,Number(f.value)/100)},300)}),f.addEventListener("change",function(){clearTimeout(e[m]),y(m,Number(f.value)/100)})})}}async function y(l,r){try{var e=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:r})}),f=await e.json();if(!e.ok){window.showToast(f.error||"Volume update failed",!1);return}var m=$.find(function(w){return w.name===l});m&&(m.volume=r),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(r*100)}),!0)}catch(w){console.warn("[admin-sounds] volume save failed:",w),window.showToast("Network error",!1)}}function M(){let l=document.getElementById("ruleSoundName");if(!l)return;let r=l.value;if(l.innerHTML="",$.length===0){let e=document.createElement("option");e.value="",e.textContent=ServerI18n.t("noSoundsAvailable"),e.disabled=!0,l.appendChild(e);return}$.forEach(e=>{let f=document.createElement("option");f.value=e.name,f.textContent=e.name,l.appendChild(f)}),r&&[...l.options].some(e=>e.value===r)&&(l.value=r)}function _(){let l=document.getElementById("rulesList");if(l){if(B.length===0){l.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});r.dataset.emptyKind="sound-rules",l.appendChild(r);return}l.innerHTML=B.map(function(e){var f=e.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):e.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",e.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",e.trigger_value),m=Math.round((e.volume!=null?e.volume:1)*100),w=ServerI18n.t("soundDetailLine").replace("{sound}",e.sound_name).replace("{vol}",m).replace("{cd}",e.cooldown!=null?e.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+g(String(e.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+g(f)+'</div><div class="admin-sounds-rule-detail">'+g(w)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+g(String(e.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(e){e.addEventListener("click",async function(){try{await D(e.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await G(),_()}catch(f){window.showToast(f.message,!1)}})})}}function x(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let r=document.getElementById("soundFileInput"),e=document.getElementById("soundNameInput"),f=r.files[0];if(!f){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let m=e.value.trim();if(!m){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await O(f,m),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",m),!0),r.value="",e.value="",await A(),C(),M()}catch(w){window.showToast(w.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function T(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let r=document.getElementById("ruleTriggerType").value,e=document.getElementById("ruleTriggerValue").value.trim(),f=document.getElementById("ruleSoundName").value,m=document.getElementById("ruleVolume"),w=document.getElementById("ruleCooldown");if(r!=="all"&&!e){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!f){window.showToast(ServerI18n.t("selectSound"),!1);return}let v=parseInt(m.value,10)/100,s=parseInt(w.value,10)||0,o={trigger_type:r,trigger_value:r==="all"?"":e,sound_name:f,volume:Math.max(0,Math.min(1,v)),cooldown:Math.max(0,s)};l.disabled=!0;try{await N(o),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await G(),_()}catch(p){window.showToast(p.message,!1)}finally{l.disabled=!1}})}function H(){let l=document.getElementById("ruleTriggerType"),r=document.getElementById("ruleTriggerValue");if(!l||!r)return;function e(){l.value==="all"?(r.disabled=!0,r.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),r.value=""):l.value==="keyword"?(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",e),e()}function E(){let l=document.getElementById("ruleVolume"),r=document.getElementById("ruleVolumeLabel");!l||!r||l.addEventListener("input",()=>{r.textContent=l.value+"%"})}function b(){return`
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
    `}async function c(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",b()),window.AdminSkeletons){let r=document.getElementById("soundsList");r&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:3})));let e=document.getElementById("rulesList");e&&(e.innerHTML="",e.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([A(),G()]),C(),M(),_(),x(),T(),H(),E()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&!l&&(l=!0,c().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&(l=!0,c().finally(()=>{l=!1}))})})()});var Kt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h=/^[a-zA-Z0-9_]{1,32}$/,u=".png,.gif,.webp",$="sec-emojis",B=[];function A(){return`
      <div id="${$}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
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
              <input id="emojiFileInput" type="file" accept="${u}" />
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
    `}function G(E){let b=":"+E.name+":",c=Number(E.used)||0,l=c>0?ServerI18n.t("emojisUsedCount",{n:c}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(E.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(E.url)+'" alt="'+N(b)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+g(b)+'</div><div class="admin-em-v4__tile-meta">'+g(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(b)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(E.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function O(E){let b=document.querySelector("[data-em-quota-label]"),c=document.querySelector("[data-em-quota-fill]");if(!b||!c)return;let l=E.length,r=100;b.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:r}),c.style.width=Math.min(100,l/r*100)+"%"}function R(E){let b=document.querySelector("[data-em-preview-body]");if(!b)return;if(!E||E.length===0){b.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=E.slice(0,3).map(r=>`<span class="admin-em-v4__preview-pair"><code>:${g(r.name)}:</code> \u2192 <img src="${N(r.url)}" alt=":${N(r.name)}:" /></span>`);b.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function N(E){return g(E)}function D(E){var b=document.getElementById("emojiGrid"),c=document.getElementById("emojiCount");b&&(!E||E.length===0?(window.AdminEmpty?(b.innerHTML="",b.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):b.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("noEmojisUploaded"))+"</div>",c&&(c.textContent="0")):(b.innerHTML=E.map(G).join(""),c&&(c.textContent=String(E.length))),O(B),R(B))}function C(){var E=document.getElementById("emojiGrid");if(E)if(window.AdminSkeletons){E.innerHTML="";for(var b=0;b<8;b++){var c=document.createElement("div");c.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var r=document.createElement("div");r.className="admin-skel",r.style.width="100%",r.style.height="100%",l.appendChild(r),c.appendChild(l);var e=document.createElement("div");e.className="admin-skel admin-skel-bar",e.style.width="60%",e.style.height="8px",e.style.margin="6px auto",c.appendChild(e),E.appendChild(c)}}else E.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadingEmojis"))+"</div>"}async function y(){try{var E=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!E.ok)throw new Error("HTTP "+E.status);var b=await E.json();B=b.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",B.length||""),M()}catch(l){console.error("[admin-emojis] fetch failed:",l);var c=document.getElementById("emojiGrid");c&&(c.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function M(){var E=document.getElementById("emojiSearchInput"),b=(E&&E.value||"").trim().toLowerCase(),c=b?B.filter(function(l){return(l.name||"").toLowerCase().includes(b)}):B;D(c)}async function _(){var E=document.getElementById("emojiNameInput"),b=document.getElementById("emojiFileInput"),c=document.getElementById("emojiUploadBtn");if(!(!E||!b||!c)){var l=E.value.trim(),r=b.files&&b.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),E.focus();return}if(!h.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),E.focus();return}if(!r){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var e=r.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(e)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{var f=new FormData;f.append("name",l),f.append("emojifile",r);var m=await csrfFetch("/admin/emojis/upload",{method:"POST",body:f}),w=await m.json();m.ok?(showToast(w.message||ServerI18n.t("emojiUploadFallback")),E.value="",b.value="",await y()):showToast(w.error||ServerI18n.t("uploadFailed"),!1)}catch(v){console.error("[admin-emojis] upload error:",v),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function x(E){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",E),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var c=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:E})}),l=await c.json();c.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await y()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-emojis] delete error:",r),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function T(E){try{await navigator.clipboard.writeText(E),showToast(ServerI18n.t("copiedLabel").replace("{label}",E))}catch{var b=document.createElement("textarea");b.value=E,b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),showToast(ServerI18n.t("copiedLabel").replace("{label}",E))}}function H(){var E=document.getElementById("settings-grid");if(E){E.insertAdjacentHTML("beforeend",A());var b=document.getElementById("emojiUploadBtn");b&&b.addEventListener("click",_);var c=document.getElementById("emojiNameInput");c&&c.addEventListener("keydown",function(m){m.key==="Enter"&&(m.preventDefault(),_())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",M);var r=document.getElementById("emojiGrid");r&&r.addEventListener("click",function(m){var w=m.target.closest(".emoji-copy-btn");if(w){T(w.dataset.label);return}var v=m.target.closest(".emoji-delete-btn");v&&x(v.dataset.name)});var e=document.querySelector("[data-em-dropzone]"),f=document.getElementById("emojiFileInput");e&&f&&(["dragenter","dragover"].forEach(function(m){e.addEventListener(m,function(w){w.preventDefault(),e.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(m){e.addEventListener(m,function(w){w.preventDefault(),e.classList.remove("is-dragover")})}),e.addEventListener("drop",function(m){var w=m.dataTransfer&&m.dataTransfer.files&&m.dataTransfer.files[0];if(w){var v=new DataTransfer;v.items.add(w),f.files=v.files;var s=document.getElementById("emojiNameInput");if(s&&!s.value){var o=w.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");s.value=o.slice(0,32),s.focus()}e.classList.add("is-dropping"),setTimeout(function(){e.classList.remove("is-dropping")},1200)}})),C(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var E=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById($)&&H()});E.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById($)&&H()}})})()});var Wt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml,h="sec-stickers",u=["png","gif","webp"],$=".gif,.png,.webp",B="__all__",A=[],G=[],O=B;function R(l){return g(l)}function N(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=l?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${$}"
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):g(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(l){return l===B?A.length:A.filter(function(r){return r.pack_id===l}).length}function C(){var l=document.getElementById("stickerPackList");if(l){var r='<button type="button" class="admin-stickers-pack'+(O===B?" is-active":"")+'" data-pack="'+B+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(B)+"</span></button>";G.forEach(function(e){var f=e.enabled?"is-success":"is-muted",m="admin-stickers-pack"+(e.id===O?" is-active":""),w=e.id==="default",v=w?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+R(e.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+R(e.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+R(e.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+R(e.id)+'" title="'+(e.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(e.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+R(e.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";r+='<div class="'+m+'" data-pack="'+R(e.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+R(e.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+f+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+g(e.name)+'</span><span class="admin-stickers-pack-count">'+D(e.id)+"</span></button>"+v+"</div>"}),l.innerHTML=r}}function y(l){var r=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+R(l.url)+'" alt="'+R(r)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+R(r)+'">'+g(r)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+R(r)+'" title="'+R(ServerI18n.t("copyToClipboard"))+'">'+g(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+R(l.name)+'" title="'+R(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function M(){var l=document.getElementById("stickerGrid"),r=document.getElementById("stickerCount");if(l){var e=document.getElementById("stickerSearchInput"),f=(e&&e.value||"").trim().toLowerCase(),m=A.filter(function(v){return!(O!==B&&v.pack_id!==O||f&&!(v.name||"").toLowerCase().includes(f))});if(m.length===0){l.innerHTML="";var w=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});w.dataset.emptyKind="stickers",w.style.gridColumn="1 / -1",l.appendChild(w),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=m.map(y).join(""),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:m.length}))}}async function _(){var l=document.getElementById("stickerGrid");if(l)try{var[r,e]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!r.ok)throw new Error("HTTP "+r.status);A=(await r.json()).stickers||[],G=e.ok?(await e.json()).packs||[]:[],O!==B&&!G.some(function(f){return f.id===O})&&(O=B),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",G.length?ServerI18n.t("tabCountPacks",{n:G.length}):""),C(),M()}catch(f){console.error("[admin-stickers] fetch failed:",f),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function x(l,r){if(l==="select"){O=r,C(),M();return}if(l==="rename"){var e=G.find(function(S){return S.id===r}),f=prompt(ServerI18n.t("stickersPackNamePrompt"),e?e.name:"");if(!f)return;try{var m=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f})}),w=await m.json();m.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await _()):window.showToast(w.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var v=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/toggle",{method:"POST"});v.ok&&await _()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r),{method:"DELETE"}),o=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),O===r&&(O=B),await _()):window.showToast(o.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var p=G.slice().sort(function(S,I){return(S.order||0)-(I.order||0)}),n=p.findIndex(function(S){return S.id===r});if(n<0)return;var t=l==="up"?n-1:n+1;if(t<0||t>=p.length)return;var a=p[n],i=p[t];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:a.order||0})})]),await _()}catch{}}}async function T(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var r=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),e=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),O=e.pack&&e.pack.id?e.pack.id:O,await _()):window.showToast(e.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var l=document.getElementById("stickerFileInput"),r=document.getElementById("stickerUploadBtn");if(!(!l||!r)){var e=l.files&&l.files[0];if(!e){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var f=e.name.split(".").pop().toLowerCase();if(u.indexOf(f)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}r.disabled=!0;var m=r.textContent;r.textContent=ServerI18n.t("uploadingStatus");try{var w=new FormData;w.append("file",e),O&&O!==B&&w.append("pack_id",O);var v=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:w}),s=await v.json();v.ok?(window.showToast(s.message||ServerI18n.t("stickerUploadFallback")),l.value="",await _()):window.showToast(s.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-stickers] upload error:",o),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{r.disabled=!1,r.textContent=m}}}async function E(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var e=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),f=await e.json();e.ok?(window.showToast(f.message||ServerI18n.t("stickerDeleteFallback")),await _()):window.showToast(f.error||ServerI18n.t("deleteFailed"),!1)}catch(m){console.error("[admin-stickers] delete error:",m),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function b(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var r=document.createElement("textarea");r.value=l,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function c(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",N());var r=document.getElementById("stickerUploadBtn");r&&r.addEventListener("click",H);var e=document.getElementById("stickerPackAddBtn");e&&e.addEventListener("click",T);var f=document.getElementById("stickerSearchInput");f&&f.addEventListener("input",M);var m=document.getElementById("stickerPackList");m&&m.addEventListener("click",function(v){var s=v.target.closest("[data-pack-action]");if(!s){var o=v.target.closest("[data-pack]");o&&x("select",o.dataset.pack);return}var p=s.dataset.packAction,n=s.dataset.packId;p==="select"&&!n&&(n=s.closest("[data-pack]")&&s.closest("[data-pack]").dataset.pack),x(p,n)});var w=document.getElementById("stickerGrid");w&&w.addEventListener("click",function(v){var s=v.target.closest(".sticker-copy-btn");if(s){b(s.dataset.label);return}var o=v.target.closest(".sticker-delete-btn");o&&E(o.dataset.name)}),_()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&c()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&c()}})})()});var Gt=ye(()=>{(function(){"use strict";let g="sec-extensions-overview",h=window.AdminUtils.escapeHtml,u=15e3,$=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],B={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},A=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function G(b){let c=b&&!b.stale?b.report:null;if(!c&&b&&b.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!c)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(c.state==="error"){let l=A.includes(c.error)?c.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:c.sent||0,held:c.held||0,blocked:c.blocked||0,skipped:c.late_skipped||0})}}function O(){return`
      <div id="${g}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${$.map(R).join("")}
        </div>
      </div>`}function R(b){let c=b.status==="ready",l="is-cold",r=c?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,e=c&&b.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${b.install.steps.map(m=>{if(m.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${h(ServerI18n.t(m.labelKey))} \u2193</a></li>`;let w=m.showOrigin?` <code class="admin-ext-step-code">${h(window.location.origin)}</code>`:"";return`<li>${h(ServerI18n.t(m.labelKey))}${w}</li>`}).join("")}
          </ol>
        </div>`:"",f=b.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
      <article class="admin-ext-card" data-ext="${b.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${l}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${b.color}">${b.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${h(b.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${h(b.version)}</span></div>
          </div>
          ${r}
        </div>
        <p class="admin-ext-desc">${h(ServerI18n.t(b.descKey))}</p>
        ${b.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${h(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${e}
        ${f}
      </article>`}async function N(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;B.fireToken=await b.json(),x()}catch{}}async function D(){try{let b=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!b.ok)return;let c=await b.json();B.sources=Array.isArray(c.sources)?c.sources:[],T()}catch{}}async function C(){try{let b=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!b.ok)return;B.slidoStatus=await b.json(),H()}catch{}}function y(){D(),C()}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let l=await c.json();B.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},B.plainToken=l.token,x(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(c){console.warn("[ext] regen failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function _(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);B.fireToken=await c.json(),B.plainToken=null,x(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(c){console.warn("[ext] revoke failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function x(){let b=document.querySelector("[data-fire-token-display]"),c=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),r=document.querySelector('[data-fire-token-action="revoke"]');if(!b)return;let e=B.fireToken;B.plainToken?(b.textContent=B.plainToken,b.classList.add("is-plain")):e&&e.has_token?(b.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:e.prefix||""}),b.classList.remove("is-plain")):(b.textContent=ServerI18n.t("extTokenNotSetHint"),b.classList.remove("is-plain")),c&&(c.disabled=!B.plainToken),l&&(l.textContent=e&&e.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),r&&(r.disabled=!(e&&e.has_token))}function T(){let b=new Set(B.sources.map(c=>c.source));document.querySelectorAll(".admin-ext-card").forEach(c=>{let l=$.find(f=>f.id===c.dataset.ext);if(!l)return;let r=c.querySelector("[data-ext-dot]");if(!r)return;let e=l.sourceMatch&&b.has(l.sourceMatch);r.classList.toggle("is-live",!!e),r.classList.toggle("is-cold",!e)})}function H(){let b=document.querySelector("[data-slido-status]");if(!b)return;let c=G(B.slidoStatus);b.textContent=c.text,b.classList.toggle("is-live",c.tone==="is-live"),b.classList.toggle("is-error",c.tone==="is-error");let l=B.slidoStatus&&B.slidoStatus.extension,r=b.closest(".admin-ext-card"),e=r&&r.querySelector("[data-ext-download-step]"),f=r&&r.querySelector("[data-ext-download]"),m=r&&r.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(f&&f.setAttribute("href",l.download_url),e&&(e.hidden=!1),m&&(m.textContent="v"+l.version)):e&&(e.hidden=!0)}function E(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(g))return;b.insertAdjacentHTML("beforeend",O());let c=document.getElementById(g);c&&c.addEventListener("click",l=>{let r=l.target.closest("[data-fire-token-action]");if(!r)return;let e=r.dataset.fireTokenAction;e==="regen"?M():e==="revoke"?_():e==="copy"&&B.plainToken&&window.AdminUtils.copyText(B.plainToken,ServerI18n.t("firetokenToastCopied"))}),N(),B.stopPoll||(B.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(g)},intervalMs:u,tick:y}))}window.AdminExtensions={slidoStatusView:G},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&E()})})()});var Vt=ye(()=>{(function(){"use strict";let g="sec-firetoken-overview",h=window.AdminUtils.escapeHtml,u=15e3,$={token:null,plainToken:null,usage24h:[],ceilingPerMin:0,ips:[],audit:[],pollTimer:0};function B(){return`
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
    `}async function A(){await Promise.all([G(),O(),R()])}async function G(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;$.token=await b.json(),M()}catch{}}async function O(){try{let b=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!b.ok)return;let c=await b.json();$.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],$.ceilingPerMin=Number(c.ceiling_per_min)||0;let l=document.querySelector("[data-ft-ceiling]");l&&(l.textContent=$.ceilingPerMin>0?" \xB7 "+ServerI18n.t("firetokenCeilingPerMin",{n:$.ceilingPerMin}):""),$.ips=Array.isArray(c.ips)?c.ips:[],x(),T(),_()}catch{}}async function R(){try{let b=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!b.ok)return;let c=await b.json();$.audit=Array.isArray(c.events)?c.events:[],H()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let l=await c.json();$.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},$.plainToken=l.token,M(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),R()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);$.token=await c.json(),$.plainToken=null,M(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),R()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function C(b){if(!b)return"\u2014";let c=Date.now()/1e3-b;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function y(b){if(!b)return"\u2014";try{return new Date(b*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function M(){let b=$.token,c=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),r=document.querySelector('[data-ft-action="copy"]'),e=document.querySelector('[data-ft-action="regen"]'),f=document.querySelector('[data-ft-action="revoke"]'),m=document.querySelector('[data-ft-stat="created"]'),w=document.querySelector('[data-ft-stat="rotated"]'),v=document.getElementById("adminFtCurl");if(c&&($.plainToken?(c.textContent=$.plainToken,c.classList.add("is-plain")):b&&b.has_token?(c.textContent=(b.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),l&&(b&&b.enabled&&b.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):b&&b.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),r&&(r.disabled=!$.plainToken),f&&(f.disabled=!(b&&b.has_token)),e&&(e.textContent=b&&b.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),m&&(m.textContent=b?y(b.created_at):"\u2014"),w&&(w.textContent=b?C(b.rotated_at):"\u2014"),v)){let s=$.plainToken?$.plainToken:b&&b.prefix?b.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";v.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${s}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function _(){let b=$.usage24h.map(m=>Number(m)||0),c=b.reduce((m,w)=>m+w,0),l=b.length?Math.max(...b):0,r=document.querySelector('[data-ft-stat="hits"]'),e=document.querySelector('[data-ft-stat="peak"]'),f=document.querySelector("[data-ft-peak-meta]");r&&(r.textContent=c.toLocaleString()),e&&(e.textContent=l.toLocaleString()),f&&(f.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function x(){let b=document.getElementById("adminFtChart24h");if(!b)return;let c=$.usage24h.map(f=>Number(f)||0);if(!c.length){b.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...c),r=($.ceilingPerMin||0)*60,e=l>0?Math.min(100,r/Math.max(l,r)*100):100;b.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((f,m)=>{let w=l>0?Math.max(2,f/l*100):2;return`<div class="bar ${l>0&&f===l?"is-peak":""}" style="height:${w}%" title="${m.toString().padStart(2,"0")}:00 \u2014 ${f}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(f=>`<span>${String(f).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function T(){let b=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!b)return;let l=$.ips||[];if(c&&(c.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){b.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let r=l[0]?.ip;b.innerHTML=l.map((e,f)=>{let m=f===0,w=e.source==="web"&&(e.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${m?"is-top":""}">
          <span class="ip">${h(e.ip||"?")}</span>
          ${m?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${w?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${h(e.source||"\u2014")}</span>
          <span class="cnt">${e.count||0} hits</span>
          <span class="when">${C(e.last_seen)}</span>
        </div>`}).join("")}function H(){let b=document.getElementById("adminFtAudit");if(!b)return;let c=$.audit||[];if(!c.length){b.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},r={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};b.innerHTML=c.map(e=>{let f=r[e.kind]||"is-info",m=l[e.kind]||e.kind,w=e.meta||{},v=w.prefix?` \xB7 prefix=${h(w.prefix)}`:w.enabled!=null?` \xB7 enabled=${w.enabled}`:"";return`
        <div class="admin-ft-audit-row ${f}">
          <span class="ts">${y(e.ts)}</span>
          <span class="kind">${h(m)}</span>
          <span class="detail">${v}</span>
        </div>`}).join("")}function E(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(g))return;b.insertAdjacentHTML("beforeend",B());let c=document.getElementById(g);c&&c.addEventListener("click",l=>{let r=l.target.closest("[data-ft-action]");if(!r)return;let e=r.dataset.ftAction;e==="regen"?N():e==="revoke"?D():e==="copy"&&$.plainToken&&window.AdminUtils.copyText($.plainToken,ServerI18n.t("firetokenToastCopied"))}),$.stopPoll||($.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(g),intervalMs:u,tick:A}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&E()})})()});var zt=ye(()=>{(function(){"use strict";let g="sec-about-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})},u="Danmu Fire",$="https://github.com/guan4tou2/danmu-desktop",B=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],A=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],G="danmu.about.lastUpdateCheck",O={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function R(){return`
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
                <div class="admin-about-version-name">${u}</div>
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
              <a class="admin-about-changelog-more" href="${$}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${B.slice(0,4).map(E=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${h(E.v)}</span>
                  ${E.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${h(E.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${E.notes.slice(0,3).map(b=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${h(b.t)}">${h(b.t.toUpperCase())}</span>
                      <span class="msg">${h(b.l)}</span>
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
              ${A.slice(0,6).map(E=>`
                <div class="admin-about-oss-row">
                  <span class="n">${h(E.n)}</span>
                  <span class="v">${h(E.v)}</span>
                  <span class="l">${h(E.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(E){if(!E||E<0)return"\u2014";let b=Math.floor(E/86400),c=Math.floor(E%86400/3600),l=Math.floor(E%3600/60);return b>0?`${b}d ${c}h`:c>0?`${c}h ${l}m`:`${l}m`}function D(){let E=document.querySelector("[data-about-tag]"),b=document.querySelector("[data-about-build]"),c=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),r=document.querySelector("[data-about-checked]"),e=document.querySelector("[data-about-env]"),f=document.querySelector("[data-about-ws-path]");if(E&&(E.textContent=`v${O.appVersion}`),b){let m=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";b.textContent=`BUILD \xB7 ${m} \xB7 stable channel`,e&&(e.textContent=m)}if(c){let m=O.serverStartedAt?O.serverTime-O.serverStartedAt:0;c.textContent=N(m)}if(l&&(O.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):O.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:O.latestVersion||""}):l.textContent="\u2014",l.style.color=O.isLatest===!0?"var(--hud-lime)":O.isLatest===!1?"var(--hud-amber)":""),r&&(r.textContent=O.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:C(O.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),f){let m=window.DANMU_CONFIG||{};f.textContent=m.wsPath||"/ws"}}function C(E){let b=Number(E)||0;if(!b)return"\u2014";let c=String(b).length>12?b:b*1e3,l=(Date.now()-c)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function y(E,b){let c=f=>String(f||"").replace(/^v/i,"").split("-")[0].split(".").map(function(m){return parseInt(m,10)||0}),l=c(E),r=c(b),e=Math.max(l.length,r.length);for(let f=0;f<e;f++){let m=l[f]||0,w=r[f]||0;if(m>w)return!0;if(m<w)return!1}return!1}async function M({silent:E}={}){E||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let b=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!b.ok)throw new Error("HTTP "+b.status);let l=((await b.json()).tag_name||"").replace(/^v/i,"");O.latestVersion=l,O.lastCheckedAt=Date.now(),O.isLatest=!y(l,O.appVersion);try{localStorage.setItem(G,JSON.stringify({ts:O.lastCheckedAt,latest:l,isLatest:O.isLatest}))}catch{}D(),E||window.showToast&&window.showToast(O.isLatest?ServerI18n.t("aboutToastLatest",{v:O.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(b){E||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:b.message||""}),!1)}}function _(){try{let E=localStorage.getItem(G);if(!E)return;let b=JSON.parse(E);O.latestVersion=b.latest,O.lastCheckedAt=Number(b.ts)||0,O.isLatest=!!b.isLatest}catch{}}async function x(){try{let E=await fetch("/admin/metrics",{credentials:"same-origin"});if(!E.ok)return;let b=await E.json();O.serverStartedAt=Number(b.server_started_at)||0,O.serverTime=Number(b.server_time)||Date.now()/1e3,D()}catch{}}function T(){let E=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",b=O.serverStartedAt?O.serverTime-O.serverStartedAt:0,c=(navigator.userAgent||"").slice(0,200),l=[`${u} v${O.appVersion}`,`Channel: ${E}`,`Uptime: ${N(b)}`,`User-Agent: ${c}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let E=document.getElementById("settings-grid");if(!E||document.getElementById(g))return;E.insertAdjacentHTML("beforeend",R()),O.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",_(),D();let b=document.getElementById(g);b&&b.addEventListener("click",function(c){let l=c.target.closest("[data-about-action]");if(!l)return;let r=l.dataset.aboutAction;r==="copy"?T():r==="check-update"?M({silent:!1}):r==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():r==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),x(),setInterval(x,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&H()})})()});var Jt=ye(()=>{(function(){"use strict";let g="admin-setup-wizard-root",h="danmu.setupWizard.completed",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},$=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],B=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function A(s){return s?s.label?s.label:s.labelKey?ServerI18n.t(s.labelKey):s.name||s.id||"\u2014":"\u2014"}function G(s){return s?s.descriptionKey?ServerI18n.t(s.descriptionKey):s.description||"":""}let O={open:!1,step:0,themes:B.slice(),activeTheme:B[0].name,selectedTheme:B[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function R(){O.publicUrl=window.location.origin+"/",fetch("/admin/qr/public",{credentials:"same-origin"}).then(s=>s.ok?s.json():null).then(s=>{!s||!s.url||s.url+"/"===O.publicUrl||(O.publicUrl=s.url+"/",O.open&&M())}).catch(()=>{})}function N(){let s=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";s==="setup"&&!O.open?D():s!=="setup"&&O.open&&C({silent:!0})}function D(){O.open=!0,O.step=0,R(),document.body.dataset.setupWizardOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",y()),l()),e(),x(),M()}function C(s){let o=s&&s.silent;O.open=!1,document.body.dataset.setupWizardOpen="";let p=document.getElementById(g);if(p&&p.remove(),!o&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function y(){return`
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
            ${$.map(function(s,o){return`
                <div class="admin-setup-step" data-step-index="${o}">
                  <span class="bullet">${o+1}</span>
                  <span class="lbl">${u(ServerI18n.t(s.labelKey))}</span>
                </div>
                ${o<$.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:$.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function M(){let s=document.getElementById(g);if(!s)return;s.querySelectorAll(".admin-setup-step").forEach(function(S,I){S.classList.toggle("is-done",I<O.step),S.classList.toggle("is-active",I===O.step)}),s.querySelectorAll(".admin-setup-step-sep").forEach(function(S,I){S.classList.toggle("is-done",I<O.step)});let o=s.querySelector("[data-setup-meta]");o&&(o.textContent=ServerI18n.t("setupWizardStepMeta",{current:O.step+1,total:$.length}));let p=s.querySelector('[data-setup-action="prev"]');p&&(p.disabled=O.step===0);let n=s.querySelector('[data-setup-action="next"]');if(n){let S=$[O.step].id;n.textContent=ServerI18n.t("setupWizardNext")}let t=s.querySelector("[data-setup-foot]");t&&(t.hidden=$[O.step].id==="done");let a=s.querySelector("[data-setup-content]");if(!a)return;let i=$[O.step].id;i==="server"?a.innerHTML=_():i==="moderation"?a.innerHTML=T():i==="theme"?a.innerHTML=b():a.innerHTML=c(),r(i)}function _(){let s=O.readiness,o=s?Number(s.overlay_count)||0:null,p=o!==null&&o>0,t=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:O.publicUrl},{ok:p,unknown:o===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:p?ServerI18n.t("setupWizardReadyDisplayOk",{n:o}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(O.activeTheme||O.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:A(O.themes.filter(function(a){return(a.name||a.id)===(O.selectedTheme||O.activeTheme)})[0]||O.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(a){let i=a.unknown?"is-unknown":a.ok?"is-done":"is-pending",S=a.unknown?"?":a.ok?"\u2713":"!",I='<span class="admin-setup-ready-title">'+u(a.title)+'</span><span class="admin-setup-ready-value">'+u(a.value||"")+"</span>",d=a.goto?'<a class="admin-setup-ready-go" href="'+a.goto+'" data-setup-goto="'+a.goto+'">'+u(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+i+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+S+"</span>"+I+d+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${t}</div>
      </div>`}async function x(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.json();O.readiness={overlay_count:Number(o.overlay_count)||0,mode:o.mode||""}}catch{O.readiness=null}O.open&&$[O.step].id==="server"&&M()}function T(){let s=O.moderationRules.map(function(o){return`
        <a class="admin-setup-mod-row" href="#/${o.route}" data-setup-goto="#/${o.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${u(ServerI18n.t(o.labelKey))}</span>
            <span class="admin-setup-mod-desc">${u(ServerI18n.t(o.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${u(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${s}</div>
      </div>`}let H=["default","neon","retro","cinema"];function E(){let s={};return(O.themes||[]).forEach(function(o){s[o.name||o.id]=o}),H.map(function(o){let p=B.filter(function(t){return t.name===o})[0],n=s[o];return p?{name:o,label:n&&n.label,labelKey:p.labelKey,descriptionKey:p.descriptionKey,colors:p.colors}:n}).filter(Boolean)}function b(){let s=E();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${s.map(function(o){let p=o.name||o.id||"",n=(O.selectedTheme||O.activeTheme)===p,t=(o.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${n?" is-selected":""}" data-setup-theme="${u(p)}">
                ${n?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${t.map(function(a,i){let S=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${u(a)};font-size:${10+i*2}px;text-shadow:0 0 6px ${u(a)}66;">${S[i]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${u(A(o))}</div>
                <div class="admin-setup-theme-sub">${u(G(o))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let s=(function(){for(let o=0;o<O.themes.length;o+=1){let p=O.themes[o];if((p.name||p.id)===(O.selectedTheme||O.activeTheme))return A(p)}return O.selectedTheme||O.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${u(O.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${u(s)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${u(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${u(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function l(){let s=document.getElementById(g);s&&s.addEventListener("click",function(o){if(o.target===s){C();return}let p=o.target.closest("[data-setup-action]");if(p){if(p.dataset.setupAction==="close"){C();return}if(p.dataset.setupAction==="prev"&&O.step>0){O.step-=1,M();return}p.dataset.setupAction==="next"&&m()}})}function r(s){let o=document.getElementById(g);if(o){if(s==="moderation"||s==="done"||s==="server"){if(o.querySelectorAll("[data-setup-goto]").forEach(function(p){p.addEventListener("click",function(){C();let n=p.dataset.setupGoto;n&&(window.location.hash=n)})}),s==="done"){let p=o.querySelector("[data-setup-complete-cta]");p&&p.addEventListener("click",w)}return}if(s==="theme"){o.querySelectorAll("[data-setup-theme]").forEach(function(p){p.addEventListener("click",function(){O.selectedTheme=p.dataset.setupTheme||O.selectedTheme,M()})});return}}}async function e(){try{let s=await fetch("/admin/themes",{credentials:"same-origin"});if(!s.ok)return;let o=await s.json(),p=Array.isArray(o.themes)?o.themes:[];if(!p.length)return;O.themes=p.map(function(n){return{name:n.name||n.id||"",label:n.label||n.display_name||n.name||"",description:n.description||"",colors:n.preview_colors||n.colors||n.palette||B[0].colors}}),O.activeTheme=o.active||O.themes[0]&&O.themes[0].name||O.activeTheme,O.selectedTheme||(O.selectedTheme=O.activeTheme),O.open&&$[O.step].id==="theme"&&M()}catch{}}async function f(){if(!O.selectedTheme||O.selectedTheme===O.activeTheme)return!0;try{let s=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O.selectedTheme})});if(!s.ok)throw new Error("HTTP "+s.status);return O.activeTheme=O.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function m(){if(!($[O.step].id==="theme"&&!await f())){if(O.step<$.length-1){O.step+=1,M();return}w()}}function w(){try{localStorage.setItem(h,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),C()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){C()},isCompleted:function(){try{return!!localStorage.getItem(h)}catch{return!1}},__setCapabilityForTest:function(){}};function v(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&v()})})()});var Yt=ye(()=>{(function(){"use strict";let g="sec-poll-deepdive-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(x){return String(x).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})},u={poll:null,refreshTimer:0};function $(){return`
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
      </div>`}function B(x){if(x.innerHTML="",!window.AdminEmpty){x.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let T=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});T.classList.add("lg:col-span-2"),T.dataset.emptyKind="poll-deepdive",x.appendChild(T)}let A=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function G(x){return x?new Date(x*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function O(x){if(!x||x.length<2)return"";let T=Math.max.apply(null,x.map(function(l){return l.n}).concat([1])),H=100,E=32,b=H/(x.length-1),c=x.map(function(l,r){let e=(r*b).toFixed(2),f=(E-l.n/T*(E-2)-1).toFixed(2);return e+","+f});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+E+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+c.join(" ")+'" /></svg>'}function R(x){let T=x.state||(x.active?"active":"ended"),H=x.question||"\u2014",E=Array.isArray(x.options)?x.options:[],b=function(p){return Number(p.votes!=null?p.votes:p.count)||0},c=E.reduce(function(p,n){return p+b(n)},0),l=T==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:G(x.ended_at)}),r=(function(){let p=Number(x.started_at)||0;if(!p)return"\u2014";let n=T==="active"?Date.now()/1e3:Number(x.ended_at)||p,t=Math.max(0,Math.floor(n-p));return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")})(),e=Number(window._lastOverlayCount)||0,f=e>0?Math.round(c/e*100)+"%":"\u2014",m=e>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:c,audience:e}):ServerI18n.t("pollDeepdiveParticipationUnknown"),w=(function(){let p=Array.isArray(x.questions)?x.questions:[],n=0;for(let t of p)n+=Number(t.duplicate_attempts)||0;return p.length||(n=Number(x.duplicate_attempts)||0),n})(),v=E.map(function(p,n){let t=b(p),a=c>0?t/c*100:0,i=A[n%A.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${h(p.label||p.text||p.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:n+1}))}</span>
            <span class="votes">${t} \xB7 ${a.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${a.toFixed(2)}%;background:${i}"></div>
          </div>
        </div>`}).join(""),s=Array.isArray(x.vote_timeline)?x.vote_timeline:[],o=s.length>=2?O(s):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${h(H)}</div>
          <div class="admin-pdd-state">${h(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${c}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${f}</div><div class="sub">${h(m)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${h(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${w}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${E.length?v:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${o}</div>
        </article>
      </div>`}function N(){let x=document.querySelector("[data-pdd-grid]");if(x){if(!u.poll||!u.poll.poll_id){B(x);return}x.innerHTML=R(u.poll)}}async function D(){try{let x=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!x.ok)return;let T=await x.json();u.poll=T,N()}catch{}}function C(){if(!u.poll||!Array.isArray(u.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let x=[["option_label","votes","percentage"]],T=u.poll.options.reduce(function(l,r){return l+(Number(r.votes!=null?r.votes:r.count)||0)},0);u.poll.options.forEach(function(l,r){let e=Number(l.votes!=null?l.votes:l.count)||0,f=T>0?(e/T*100).toFixed(2):"0.00";x.push([l.label||"option_"+(r+1),e,f])});let H=x.map(function(l){return l.map(window.AdminUtils.csvCell).join(",")}).join(`
`),E=new Blob([H],{type:"text/csv;charset=utf-8"}),b=URL.createObjectURL(E),c=document.createElement("a");c.href=b,c.download="poll-"+(u.poll.poll_id||"current")+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(b)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function y(){try{let x=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function M(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),u.refreshTimer||(u.refreshTimer=setInterval(D,5e3))):u.refreshTimer&&(clearInterval(u.refreshTimer),u.refreshTimer=0)}function _(){let x=document.getElementById("settings-grid");if(!x||document.getElementById(g))return;x.insertAdjacentHTML("beforeend",$());let T=document.getElementById(g);T&&T.addEventListener("click",function(H){let E=H.target.closest("[data-pdd-action]");E&&(E.dataset.pddAction==="export-csv"?C():E.dataset.pddAction==="push"&&y())}),D(),M(),window.addEventListener("hashchange",M)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&_()})})()});var Qt=ye(()=>{(function(){"use strict";let g="admin-message-drawer-root",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})},$={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},B=null;function A(f){let m=f.detail&&f.detail.entry;m&&($.open||(B=document.activeElement),$.entry=m,G(),m.data&&m.data.fingerprint&&D(m.data.fingerprint),C(m))}function G(){$.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",y()),M()),_();let f=document.querySelector("#"+g+" .admin-msgd-v4__close")||document.querySelector("#"+g+" button");if(f)try{f.focus({preventScroll:!0})}catch{}}function O(){$.open=!1,document.body.dataset.messageDrawerOpen="";let f=document.getElementById(g);if(f&&f.remove(),B&&typeof B.focus=="function"&&document.contains(B))try{B.focus({preventScroll:!0})}catch{}B=null}function R(f){if(!$.open)return;if(f.key==="Escape"){O();return}let m=document.activeElement,w=m?(m.tagName||"").toLowerCase():"";if(!(m&&(m.isContentEditable||w==="input"||w==="textarea"||w==="select"))){if(f.key==="ArrowLeft"||f.key==="k"){N(-1),f.preventDefault();return}if(f.key==="ArrowRight"||f.key==="j"){N(1),f.preventDefault();return}}}function N(f){if(!$.entry)return;let m=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(m=window.AdminLiveFeed.getEntries()),!m.length)return;let w=m.findIndex(function(o){return o.id===$.entry.id});if(w<0)return;let v=w+-f;if(v<0||v>=m.length){window.showToast&&window.showToast(f<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let s=m[v];$.entry=s,$.fingerprintRecord=null,C(s),_(),s.data&&s.data.fingerprint&&D(s.data.fingerprint)}async function D(f){try{let m=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!m.ok)return;let w=await m.json(),s=(Array.isArray(w.records)?w.records:[]).find(function(o){return o.fingerprint===f});$.fingerprintRecord=s||null,_()}catch{}}function C(f){let m=f.data&&f.data.fingerprint;if(!m){$.sameFpEntries=[];return}let w=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(w=window.AdminLiveFeed.getEntries()),$.sameFpEntries=w.filter(function(v){return(v.data&&v.data.fingerprint||v.fingerprint||"")===m}).slice(0,8)}function y(){return`
      <div id="${g}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function M(){let f=document.getElementById(g);f&&f.addEventListener("click",function(m){let w=m.target.closest("[data-msgd-action]");if(!w)return;m.stopPropagation();let v=w.dataset.msgdAction;v==="close"?O():v==="ban-fp"?b():v==="ban-fp-quick"?E():v==="recall-msg"?l():v==="blacklist-kw"?r():v==="reply"?e():v==="prev"?N(-1):v==="next"&&N(1)})}function _(){let f=document.getElementById(g);if(!f)return;let m=f.querySelector("[data-msgd-body]");m&&(m.innerHTML=x())}function x(){let f=$.entry;if(!f)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let m=f.data||{},w=m.fingerprint||"\u2014",v=w==="\u2014"?"\u2014":w.slice(0,8),s=w==="\u2014"?"\u2014":w.slice(0,12),o=f.ts?T(f.ts):"\u2014",p=m.nickname||ServerI18n.t("msgDrawerAnonymous"),n=$.fingerprintRecord||{},t=Number(n.message_count)||0,a=Number(n.violation_count)||0,i=$.sameFpEntries||[],S=i.length?Math.round(i.reduce((d,k)=>d+((k.data||k).text||"").length,0)/i.length):(m.text||"").length,I=0;for(let d=0;d<w.length;d++)I=I*31+w.charCodeAt(d)&65535;return I=I%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${I})">${u((p||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${u(p)}</div>
          <div class="admin-msgd-v4__fp">fp:${u(s)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${u(o)}</span>
      </div>

      <div class="admin-msgd-v4__body">${u(m.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${t||i.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${S}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${a>0?"warn":"good"}">${a}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${u(m.ip||"\u2014")}<br/>
          UA \xB7 ${u(m.user_agent||m.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${w==="\u2014"?"disabled":""}>${u(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${m.message_id?"":"disabled"}>${u(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function T(f){try{let m=new Date(f),w=String(m.getHours()).padStart(2,"0"),v=String(m.getMinutes()).padStart(2,"0"),s=String(m.getSeconds()).padStart(2,"0");return w+":"+v+":"+s}catch{return"\u2014"}}function H(f){let m;if(typeof f=="number")m=f*1e3;else if(typeof f=="string")m=new Date(f).getTime();else return"\u2014";if(!m)return"\u2014";let w=(Date.now()-m)/1e3;return w<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(w)}):w<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(w/60)}):w<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(w/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(w/86400)})}async function E(f,m,w){let v=$.entry&&$.entry.data&&$.entry.data.fingerprint;if(!v)return;let s=parseInt(m||0,10)||0,o=s>0?await window.AdminModeration.banFingerprint(v,s,f):await window.AdminModeration.callBlock("fingerprint",v,f);if(!o.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:o.error||""}),!1);return}let p=w||(s>0?ServerI18n.t("msgDrawerSecondsLabel",{n:s}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:v.slice(0,8),label:p}),!0),O()}async function b(){let f=$.entry&&$.entry.data||{},m=f.fingerprint||"\u2014";if(m==="\u2014")return;let w=m.slice(0,12),v=f.nickname||ServerI18n.t("msgDrawerAnonymous"),s=0;for(let I=0;I<m.length;I++)s=s*31+m.charCodeAt(I)&65535;s=s%360;let o=document.createElement("div");o.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${s})">${u((v||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${u(v)}</div>
          <div class="fp">fp:${u(w)}</div>
          <div class="ip">IP \xB7 ${u(f.ip||"\u2014")} \xB7 ${u(f.user_agent||f.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let p=I=>{o.querySelectorAll(".admin-bancfm-dchip").forEach(d=>d.classList.remove("is-active")),I.classList.add("is-active")};if(o.addEventListener("click",I=>{let d=I.target.closest("[data-ban-duration]");d&&p(d)}),o.addEventListener("keydown",I=>{if(I.key!=="Enter"&&I.key!==" ")return;let d=I.target.closest("[data-ban-duration]");d&&(I.preventDefault(),p(d))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:o,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let t=(o.querySelector("[data-ban-reason]")||{}).value||"",a=o.querySelector(".admin-bancfm-dchip.is-active"),i=a&&parseInt(a.dataset.banDuration||"0",10)||0,S=a?a.textContent.trim():ServerI18n.t("msgDrawerPermanent");return E(t.trim(),i,S)}function c(){}async function l(){let f=$.entry,m=f&&f.data&&f.data.message_id;if(!m)return;if(!(await window.AdminModeration.recall(m)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),O()}async function r(){let f=$.entry&&$.entry.data&&$.entry.data.text;if(!f)return;await window.AdminModeration.blockKeyword(f)&&O()}async function e(){let f=document.querySelector("[data-msgd-reply]"),m=f?f.value.trim():"";if(m)try{let w=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:m})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),f&&(f.value="")}catch(w){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:w.message||""}),!1)}}window.AdminMessageDrawer={open:function(f){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:f}}))},close:O},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",A),document.addEventListener("keydown",R))})})()});var Xt=ye(()=>{(function(){"use strict";let g="danmu.notifications.read",h="danmu.notifications.archived",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},$={items:[],refreshTimer:0};function B(o){try{let p=localStorage.getItem(o);if(!p)return new Set;let n=JSON.parse(p);return new Set(Array.isArray(n)?n:[])}catch{return new Set}}function A(o,p){try{localStorage.setItem(o,JSON.stringify(Array.from(p)))}catch{}}function G(o){let p=B(g);p.add(o),A(g,p)}async function O(){let o=[R().catch(function(){return[]}),C().catch(function(){return[]}),y().catch(function(){return[]}),M().catch(function(){return[]})],n=(await Promise.all(o)).flat();n.sort(function(t,a){return(a.ts||0)-(t.ts||0)}),$.items=D(n),E(),l()&&b()}async function R(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let p=await o.json();return(Array.isArray(p.events)?p.events:[]).map(function(t,a){let i=(Number(t.ts)||0)*1e3,S="tok-"+(t.ts||a)+"-"+(t.kind||"x"),I=t.kind||"?",d="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(I==="rotated")d="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(I==="revoked")d="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(I==="toggled"){let L=t.meta&&t.meta.enabled;d=L?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:L?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:S,sev:d,src:"Fire Token",ts:i,title:k,desc:ServerI18n.t("notifDescEventType",{kind:I})+(t.meta?" \xB7 "+JSON.stringify(t.meta):""),raw:t}})}function N(o){let p=typeof o=="string"?o:JSON.stringify(o||""),n=5381;for(let t=0;t<p.length;t++)n=(n<<5)+n+p.charCodeAt(t)>>>0;return n.toString(36)}function D(o){let p={};for(let n=o.length-1;n>=0;n--){let t=o[n].id,a=p[t]||0;p[t]=a+1,a&&(o[n].id=t+"~"+a)}return o}async function C(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let p=await o.json();return(Array.isArray(p.events)?p.events:[]).map(function(t,a){let i=(Number(t.ts)||0)*1e3,S="flt-"+(t.ts||0)+"-"+(t.seq!=null?"s"+t.seq:(t.action||"x")+"-"+N([t.rule_id,t.text_excerpt])),I=t.action||"match";return{id:S,sev:I==="drop"?"warn":"info",src:"Moderation",ts:i,title:ServerI18n.t("notifTitleFilterHit",{action:I}),desc:ServerI18n.t("notifDescFilterHit",{rule:t.rule_id||"?",text:(t.text_excerpt||"").slice(0,60)}),raw:t}})}async function y(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let p=await o.json();return(Array.isArray(p.events)?p.events:[]).map(function(t,a){let i=(Number(t.ts)||0)*1e3,S=String(t.kind||"?");return{id:"wh-"+(t.ts||0)+"-"+S+"-"+N([t.actor,t.meta]),sev:S==="unregister"?"warn":"info",src:"Webhooks",ts:i,title:ServerI18n.t("notifTitleWebhookEvent",{kind:S}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:t.actor||"system"})+(t.meta?" \xB7 "+JSON.stringify(t.meta):""),raw:t}})}async function M(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let p=await o.json(),n=Array.isArray(p.events)?p.events:[],t=new Set(["auth","broadcast","system","session","sessions"]);return n.filter(function(a){return t.has(String(a.source||""))?!(String(a.source)==="auth"&&(a.kind==="login"||a.kind==="logout")):!1}).map(function(a){let i=(Number(a.ts)||0)*1e3,S=String(a.kind||"?");return{id:"sys-"+(a.ts||0)+"-"+(a.source||"x")+"-"+S+"-"+N([a.actor,a.meta]),sev:S==="login_failed"?"warn":"info",src:"System",ts:i,title:ServerI18n.t("notifTitleSystemEvent",{kind:S}),desc:ServerI18n.t("notifDescSystemEvent",{source:a.source||"?",actor:a.actor||"system"}),raw:a}})}let _="admin-notif-panel",x={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function T(o){let p=x[o];return p?ServerI18n.t(p.key):o}function H(){let o=B(g),p=B(h);return $.items.filter(n=>!o.has(n.id)&&!p.has(n.id))}function E(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let p=H().length;o.textContent=p>99?"99+":String(p),o.hidden=p===0}function b(){let o=document.getElementById(_);if(!o)return;let p=H().slice(0,20),n=p.length?p.map(t=>{let a=x[t.src];return'<li class="admin-notif__item" data-sev="'+u(t.sev)+'"><div class="admin-notif__text">'+u(t.title)+'</div><div class="admin-notif__meta">'+u(T(t.src))+" \xB7 "+u(c(t.ts))+"</div>"+(a?'<button type="button" class="admin-notif__action" data-notif-go="'+u(a.hash)+'" data-notif-id="'+u(t.id)+'">'+u(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+u(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+u(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+u(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+n+"</ul>"}function c(o){if(!o)return"\u2014";let p=(Date.now()-o)/1e3;return p<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(p)}):p<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(p/60)}):p<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(p/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(p/86400)})}function l(){let o=document.getElementById(_);return!!o&&!o.hidden}function r(){let o=document.getElementById(_);o&&(b(),o.hidden=!1,$.refreshTimer||($.refreshTimer=setInterval(O,3e4)))}function e(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&r()}function f(){let o=document.getElementById(_);o&&(o.hidden=!0),$.refreshTimer&&(clearInterval($.refreshTimer),$.refreshTimer=0)}function m(){l()?f():r()}function w(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let p=document.createElement("button");if(p.id="admin-notif-bell",p.type="button",p.className="admin-dash-search is-icon-only admin-notif-bell",p.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),p.title=ServerI18n.t("adminRouteTitle_notifications"),p.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(p,o.firstChild),!document.getElementById(_)){let n=document.createElement("div");n.id=_,n.className="admin-notif",n.setAttribute("role","dialog"),n.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),n.hidden=!0,document.body.appendChild(n)}E(),e()}function v(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),m();return}let p=o.target.closest("[data-notif-go]");if(p){G(p.dataset.notifId),f(),location.hash=p.dataset.notifGo,E();return}if(o.target.closest("[data-notif-readall]")){H().forEach(n=>G(n.id)),b(),E();return}l()&&!o.target.closest("#"+_)&&f()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&l()&&f()}),window.addEventListener("hashchange",e),e()}function s(){w(),O()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(w).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),v(),s()})})()});var Zt=ye(()=>{(function(){"use strict";let g="sec-audit-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},u={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},$={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function B(){return`
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
      </div>`}function A(e){if(!e)return"\u2014";try{let f=new Date(Number(e)*1e3),m=String(f.getHours()).padStart(2,"0"),w=String(f.getMinutes()).padStart(2,"0"),v=String(f.getSeconds()).padStart(2,"0");return`${m}:${w}:${v}`}catch{return"\u2014"}}function G(e){let f=String(e.action||e.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(f)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(f)?"warn":"info"}function O(e){return e==="danger"?"var(--hud-crimson, #f87171)":e==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function R(e){return $.filterActor==="all"||String(e.actor||"").toLowerCase()===$.filterActor}function N(e){return $.filterSeverity==="all"||G(e)===$.filterSeverity}function D(){return $.events.filter(function(e){return R(e)&&N(e)})}function C(e){let f=e&&e.meta&&typeof e.meta=="object"?e.meta:{};return f.target||f.keyword||f.fp||f.fingerprint||f.name||f.mode||f.session||f.hook_id||e.target||""}function y(e,f){let m=e!=null,w=f!=null;if(!m&&!w)return"";let v=m?h(JSON.stringify(e)):"",s=w?h(JSON.stringify(f)):"";return m?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${v}</span> \u2192 <span class="admin-audit-diff-a">${s}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${s}</span></span>`}function M(e){let f=e&&e.meta&&typeof e.meta=="object"?e.meta:{},m=[];e.detail&&m.push(`<span>${h(String(e.detail))}</span>`);let w=y(e.before,e.after);w&&m.push(w);let v=Object.assign({},f);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(o){delete v[o]}),Object.keys(v).length&&m.push(`<code class="admin-ui-code admin-audit-meta-extra">${h(JSON.stringify(v))}</code>`),!m.length){let o=u[e.source]&&u[e.source].label||e.source||"system";m.push(`<span>${h(String(o))}</span>`)}return m.join(" ")}function _(e){return e==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":e==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function x(){let e=document.querySelector("[data-audit-rows]");if(!e)return;let f=D();if(!f.length){e.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}e.innerHTML=f.map(function(m){let w=G(m),v=O(w),s=String(m.actor||"system"),o=C(m);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${w}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${h(A(m.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${v};box-shadow:0 0 6px ${v}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${_(s)}">${h(s)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${h(String(m.action||m.kind||"\u2014"))}</span>
              ${o?`<span class="admin-ui-target admin-audit-target">\u2192 ${h(String(o))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${M(m)}</div>
          </div>
        </div>`}).join("")}function T(){let e=document.querySelector("[data-audit-summary]");if(!e)return;let f=D().length,m=$.filterActor==="all"?ServerI18n.t("auditAllRoles"):$.filterActor,w=$.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):$.filterSeverity.toUpperCase();e.textContent=ServerI18n.t("auditSummaryLine",{n:f,actor:m,sev:w})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditActorFilter===$.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(e){e.classList.toggle("is-active",e.dataset.auditSeverityFilter===$.filterSeverity)})}async function E(){try{let e=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!e.ok)return;let f=await e.json(),m=Array.isArray(f.events)?f.events.slice():[];m.sort(function(w,v){return Number(v.ts||0)-Number(w.ts||0)}),$.events=m,H(),x(),T()}catch{}}function b(){let e=D();if(!e.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let f=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8"}),m=URL.createObjectURL(f),w=document.createElement("a");w.href=m,w.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(w),w.click(),document.body.removeChild(w),setTimeout(function(){URL.revokeObjectURL(m)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:e.length}),!0)}function c(){let e=document.getElementById(g);e&&e.addEventListener("click",function(f){let m=f.target.closest("[data-audit-actor-filter]");if(m){$.filterActor=m.dataset.auditActorFilter||"all",H(),x(),T();return}let w=f.target.closest("[data-audit-severity-filter]");if(w){let v=w.dataset.auditSeverityFilter||"all";$.filterSeverity=$.filterSeverity===v?"all":v,H(),x(),T();return}if(f.target.closest("[data-audit-export]")){b();return}f.target.closest("[data-audit-refresh]")&&E()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(E(),$.refreshTimer||($.refreshTimer=setInterval(E,3e4))):$.refreshTimer&&(clearInterval($.refreshTimer),$.refreshTimer=0)}function r(){let e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",B()),c(),E(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&r()})})()});var en=ye(()=>{(function(){"use strict";let g="sec-audience-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},u=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],$=20,B={records:[],filter:"all",shown:$,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function A(t){if(!t)return u[0];let a=0;for(let i=0;i<t.length;i++)a=a*31+t.charCodeAt(i)>>>0;return u[a%u.length]}function G(t){if(!t)return"\u2014";let a=typeof t=="number"?t*1e3:new Date(t).getTime();if(!a)return"\u2014";let i=Math.max(0,(Date.now()-a)/1e3);return i<60?Math.floor(i)+"s":i<3600?Math.floor(i/60)+"m":i<86400?Math.floor(i/3600)+"h":Math.floor(i/86400)+"d"}function O(t){return t==="blocked"||t==="high"?"is-danger":t==="mid"?"is-warn":"is-success"}function R(){return`
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
      </div>`}function N(){let t=B.search.trim().toLowerCase(),a=B.records.slice();return t&&(a=a.filter(function(i){return String(i.nickname||"").toLowerCase().indexOf(t)!==-1||String(i.hash||"").toLowerCase().indexOf(t)!==-1})),a.sort(function(i,S){return B.sort==="last_seen"?(Number(S.last_seen)||0)-(Number(i.last_seen)||0):(Number(S.msgs)||0)-(Number(i.msgs)||0)}),B.filter==="all"?a:B.filter==="flagged"?a.filter(function(i){return i.state==="flagged"||i.state==="blocked"}):B.filter==="extension"?a.filter(function(i){return i.fingerprint&&(i.fingerprint.indexOf("slido")===0||i.fingerprint.indexOf("ext_")===0)}):a}function D(){let t=document.querySelector("[data-aud-stats]");if(!t)return;let a=B.records,i=a.length,S=a.filter(function(L){return L.state==="flagged"}).length,I=a.filter(function(L){return L.state==="blocked"}).length,d=a.reduce(function(L,j){return L+(Number(j.msgs)||0)},0),k=a.filter(function(L){let j=L.last_seen;if(!j)return!1;let P=typeof j=="number"?j*1e3:new Date(j).getTime();return(Date.now()-P)/1e3<300}).length;t.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${i}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${k}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${d}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${I}</div></div>`}function C(){let t=document.querySelector("[data-aud-filters]");if(!t)return;let a=B.records.length,i=B.records.filter(function(S){return S.state==="flagged"||S.state==="blocked"}).length;t.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:a})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:i})}</button>`}let y="__anon__";function M(t){let a=(t.nickname||"").trim();return!a||a==="\u533F\u540D"}function _(t){let a=t.hash||t.fingerprint||"";return a?a.length>9?a.slice(0,4)+"\u2026"+a.slice(-4):a:"\u2014"}function x(){let t=[],a=[];return N().forEach(function(i){M(i)?a.push(i):t.push(i)}),a.length&&t.push({_anonGroup:!0,_count:a.length,fingerprint:y,msgs:a.reduce(function(i,S){return i+(Number(S.msgs)||0)},0),blocked:a.reduce(function(i,S){return i+(Number(S.blocked)||0)},0),last_seen:Math.max.apply(null,a.map(function(i){return i.last_seen||0})),state:a.some(function(i){return i.state==="blocked"})?"blocked":"active"}),t}function T(){let t=document.querySelector("[data-aud-list]"),a=document.querySelector("[data-aud-summary]");if(!t)return;let i=x(),S=Math.min(i.length,B.shown);if(a&&(a.textContent=ServerI18n.t("audienceShownOfTotal",{n:S,total:i.length})),i.length===0){t.innerHTML="";let L=window.AdminEmpty.render("audience");L.dataset.emptyKind="audience",t.appendChild(L);return}let I=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,d=i.slice(0,S).map(function(L){let j=L.fingerprint||"\u2014",P=L.state==="blocked",V=L._anonGroup?ServerI18n.t("audienceAnonymous"):(L.nickname||"").trim(),F=L._anonGroup?"?":V.slice(0,1),U=A(j);return`
        <div class="admin-aud-row${B.selectedFp===j?" is-selected":""}" data-aud-row data-aud-fp="${h(j)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${U}">${h(F)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${h(V)}</span>
            ${L._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:L._count})}</span>`:""}
            ${P&&!L._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${L._anonGroup?"\u2014":h(_(L))}</span>
          <span class="col col-msgs">${Number(L.msgs)||0}</span>
          <span class="col col-blocked">${Number(L.blocked)||0}</span>
          <span class="col col-seen">${h(G(L.last_seen))}</span>
          <span class="col col-actions">
            ${L._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${h(j)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),k=i.length>S?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";t.innerHTML=I+d+k}function H(t){return t&&B.records.find(function(a){return a.fingerprint===t})||null}function E(t){if(!t)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let a=[],i=Number(t.msgs)||0,S=t.fingerprint||"";t.state==="blocked"&&a.push(ServerI18n.t("audienceRuleBlocked")),t.state==="flagged"&&a.push(ServerI18n.t("audienceRuleFlagged")),i>=25?a.push(ServerI18n.t("audienceRuleMsgOver",{n:i})):i>=15&&a.push(ServerI18n.t("audienceRuleMsgNear",{n:i}));let I=B.records.filter(function(j){return j.ip&&t.ip&&j.ip===t.ip}).length;I>=3&&a.push(ServerI18n.t("audienceRuleSameIp",{n:I})),(S.indexOf("slido")===0||S.indexOf("ext_")===0)&&a.push(ServerI18n.t("audienceRuleBridge")),(t.nickname==="\u533F\u540D"||!t.nickname)&&a.push(ServerI18n.t("audienceRuleNoNick"));let d="normal",k="var(--hud-lime)",L="NORMAL";return t.state==="blocked"?(d="blocked",k="var(--hud-crimson)",L="BLOCKED"):t.state==="flagged"||i>=25?(d="high",k="var(--hud-crimson)",L="HIGH RISK"):(i>=15||I>=3)&&(d="mid",k="var(--hud-amber)",L="MID"),{level:d,color:k,label:L,rules:a}}async function b(t){B.detailLoading=!0;try{let a=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!a.ok){B.detailMessages=[];return}let i=await a.json(),S=Array.isArray(i.records)?i.records:[],I=Date.now()-300*1e3;B.detailMessages=S.filter(function(d){return(d.fingerprint||"")!==t?!1:(d.timestamp?new Date(d.timestamp).getTime():0)>=I}).slice(0,8)}catch{B.detailMessages=[]}finally{B.detailLoading=!1}}function c(){let t=document.querySelector("[data-aud-detail]");if(!t)return;let a=B.selectedFp;if(!a){t.hidden=!0,t.innerHTML="";return}let i=H(a);if(!i){B.selectedFp=null,t.hidden=!0;return}t.hidden=!1;let S=E(i);t.dataset.riskLevel=S.level;let I=A(a),d=!i.nickname||i.nickname==="\u533F\u540D",k=d?ServerI18n.t("audienceAnonymous"):i.nickname,L=d?"?":k.slice(0,1),j="fp:"+(a||"").slice(0,8),P=S.rules.length?S.rules.map(function(F){return"<li>"+h(F)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",V="";B.detailLoading?V='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":B.detailMessages.length===0?V='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":V=B.detailMessages.map(function(F){let U=F.muted?"MASKED":F.banned?"BLOCKED":"SHOWN",ee=F.muted?"var(--hud-amber)":F.banned?"var(--hud-crimson)":"var(--hud-lime)",J=F.timestamp?new Date(F.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+h(J)+'</span><span class="m">'+h(F.text||"")+'</span><span class="s" style="color:'+ee+'">'+U+"</span></div>"}).join(""),t.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+O(S.level)+'">'+h(S.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+I+'">'+h(L)+'</span><div><div class="nick">'+h(k)+'</div><div class="fp">'+h(j)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+S.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:S.rules.length})+"</div><ul>"+P+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+V+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(i.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+h(a)+'" data-aud-flagged="'+(i.is_flagged?"true":"false")+'">'+(i.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(t){B.selectedFp=t,B.detailMessages=[],c(),b(t).then(c)}async function r(){try{let t=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!t.ok)return;let a=await t.json();B.records=Array.isArray(a.entries)?a.entries:[],B.serverStats=a&&a.stats||null,D(),C(),T(),B.selectedFp&&c()}catch{}}async function e(t,a,i){if(t)try{let S=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,flagged:!!a,note:i||""})});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(a?ServerI18n.t("audienceToastFlagged",{fp:t.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:t.slice(0,8)}),!0),r()}catch(S){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:S.message||""}),!1)}}async function f(t,a){if(!t||t==="\u2014")return;let i=a??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:t.slice(0,8)}),"")||"");if(i!==null)try{let S=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,reason:i})});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:t.slice(0,8)}),!0),r()}catch(S){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:S.message||""}),!1)}}async function m(t){if(!(!t||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let i=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),r()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:i.message||""}),!1)}}async function w(t){if(!(!t||t==="\u2014"))try{let a=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:t,action:"block",priority:0,enabled:!0})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:t.slice(0,8)}),!0),r()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:a.message||""}),!1)}}async function v(t){if(!(!t||t==="\u2014"))try{let a=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);let i=await a.json(),I=(Array.isArray(i.rules)?i.rules:[]).filter(function(k){return k&&k.type==="fingerprint"&&k.pattern===t});if(I.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let d=0;for(let k of I)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:k.rule_id||k.id})}).catch(function(){return{ok:!1}})).ok&&(d+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:d,fp:t.slice(0,8)}),!0),r()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:a.message||""}),!1)}}async function s(t){if(!(!t||t==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let i=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:t})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:t.slice(0,8)}),!0),r()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:i.message||""}),!1)}}function o(){let t=document.getElementById(g);t&&(t.addEventListener("input",function(a){let i=a.target.closest("[data-aud-search]");i&&(B.search=i.value||"",B.shown=$,T())}),t.addEventListener("change",function(a){let i=a.target.closest("[data-aud-sort]");i&&(B.sort=i.value,T())}),t.addEventListener("click",function(a){let i=a.target.closest("[data-aud-filter]");if(i){B.filter=i.dataset.audFilter,B.shown=$,C(),T();return}let S=a.target.closest("[data-aud-action='ban']");if(S){a.stopPropagation(),s(S.dataset.audFp);return}if(a.target.closest("[data-aud-action='refresh']")){r();return}if(a.target.closest("[data-aud-action='more']")){B.shown+=$,T();return}if(a.target.closest("[data-aud-action='close-detail']")){B.selectedFp=null,c();return}let L=a.target.closest("[data-aud-action='detail-ban']");if(L){s(L.dataset.audFp);return}let j=a.target.closest("[data-aud-action='detail-mask']");if(j){w(j.dataset.audFp);return}let P=a.target.closest("[data-aud-action='detail-safe']");if(P){v(P.dataset.audFp);return}let V=a.target.closest("[data-aud-action='flag']");if(V){a.stopPropagation(),e(V.dataset.audFp,V.dataset.audFlagged!=="true");return}let F=a.target.closest("[data-aud-action='kick']");if(F){a.stopPropagation(),f(F.dataset.audFp);return}let U=a.target.closest("[data-aud-action='unkick']");if(U){a.stopPropagation(),m(U.dataset.audFp);return}let ee=a.target.closest("[data-aud-row]");if(!(ee&&ee.dataset.audFp===y)&&ee&&!a.target.closest("button")){l(ee.dataset.audFp);return}}))}function p(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(r(),B.refreshTimer||(B.refreshTimer=setInterval(r,15e3))):B.refreshTimer&&(clearInterval(B.refreshTimer),B.refreshTimer=0)}function n(){let t=document.getElementById("settings-grid");!t||document.getElementById(g)||(t.insertAdjacentHTML("beforeend",R()),o(),r(),p(),window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&n()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&n()})})()});var tn=ye(()=>{(function(){"use strict";let g=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],h={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},u=2500,$=0,B=0,A=null;function G(){if(A)return A;let C=document.createElement("div");return C.className="admin-konami-hud",C.setAttribute("aria-hidden","true"),C.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(C),A=C,C}function O(){if($===0){A&&A.classList.remove("is-on");return}let C=G();C.classList.add("is-on");let y=C.querySelector(".admin-konami-hud-keys");y&&(y.innerHTML=g.map((_,x)=>`<span class="admin-konami-hud-key ${x<$?"is-filled":""}">${h[_]}</span>`).join(""));let M=C.querySelector(".admin-konami-hud-progress");if(M){let _=Math.round($/g.length*100);M.style.width=_+"%"}}function R(C){$=0,B&&(clearTimeout(B),B=0),C||O()}function N(){B&&clearTimeout(B),B=setTimeout(()=>R(),u)}async function D(){try{let C=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(C){console.warn("[konami] trigger failed:",C&&C.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",C=>{let y=C.target;if(y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable))return;let M=g[$];if(!(C.key===M||M==="b"&&C.key.toLowerCase()==="b"||M==="a"&&C.key.toLowerCase()==="a")){$=C.key===g[0]?1:0,O(),$>0?N():B&&(clearTimeout(B),B=0);return}if($++,O(),$>=g.length){R(!0),D();return}N()}),window.AdminKonami={trigger:D}})()});var nn=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(w){return w==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:w==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:w==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function u(){let w=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,v=w?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${w?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${g(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${v}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${w?`
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
    `}var $=null,B=[];function A(w,v){var s=document.getElementById("adminFontEmptyStateHost");if(!s)return;if((w||[]).some(n=>n.type==="uploaded")){s.innerHTML="";return}s.innerHTML="";var p=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:v?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var n=document.getElementById("adminFontFileInput");n&&n.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});p.dataset.emptyKind="fonts",s.appendChild(p)}function G(w,v){let s=w.weight||"\u2014",o=w.sizeLabel||"\u2014",p=w.foundry||(w.type==="system"?"System":w.type==="default"?"Google / Noto":"Uploaded"),n=w.format||"\u2014",t=w.status||w.type,a=`font-family: "${g(w.name)}", sans-serif;`,i=h(t),S=[];if(v){if(t!=="default"&&S.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${g(w.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),t!=="default"){let I=t==="enabled"||t==="system",d=I?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");S.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${g(w.name)}" data-enabled="${I?"true":"false"}">${d}</button>`)}w.type==="uploaded"&&(S.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${g(w.name)}" title="${g(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),S.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${g(w.name)}">${g(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${g(w.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${a}" class="truncate">${g(w.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(S.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${S.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${g(p)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${g(s)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${g(o)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${g(n)}</span><div style="text-align:right">${i}</div></div>`}let O=null,R={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if(O)return O;try{let w=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return w.ok?(O=(await w.json()).presets||{},O):{}}catch{return{}}}function D(w){return!w||!Number.isFinite(w)?"\u2014":w<1024?w+" B":w<1024*1024?(w/1024).toFixed(1)+" KB":(w/(1024*1024)).toFixed(2)+" MB"}async function C(w){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let v=await N();if(!Object.keys(v).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let s=new Set(["cjk_common","latin"]),o="",p=document.createElement("div");p.className="admin-font-subset-modal-body";let n=()=>{let i=Object.keys(v).map(I=>{let d=R[I]||{label:I,glyphs:"\u2014",estSize:"\u2014"},k=d.labelKey?ServerI18n.t(d.labelKey):d.label,L=s.has(I);return`
          <label class="admin-font-subset-chip${L?" is-active":""}" data-subset-preset="${I}">
            <span class="admin-font-subset-chip-check">${L?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${g(k)}</span>
            <span class="admin-font-subset-chip-range">${g(v[I])}</span>
            <span class="admin-font-subset-chip-meta">${d.glyphs} glyphs \xB7 ${d.estSize}</span>
          </label>`}).join("");p.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${g(w)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${i}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${g(o)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,p.querySelectorAll("[data-subset-preset]").forEach(I=>{I.addEventListener("click",d=>{d.preventDefault();let k=I.dataset.subsetPreset;s.has(k)?s.delete(k):s.add(k),n()})});let S=p.querySelector("[data-subset-custom]");S&&S.addEventListener("input",()=>{o=S.value})};if(n(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:p,width:540}))return;let a=[];if(s.forEach(i=>{v[i]&&a.push(v[i])}),o.trim()&&a.push(o.trim()),!a.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await y(w,a.join(","))}async function y(w,v){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:w}),!0);let s=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(w)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:v})}),o=await s.json().catch(()=>({}));if(s.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!s.ok){window.showToast?.(o.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:s.status}),!1);return}let p=o.saved_bytes||0,n=Math.round((o.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:w,before:D(o.original_size),after:D(o.new_size),pct:n}),!0),x()}catch(s){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:s.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function M(w){try{let v=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:w})});if(!v.ok)throw new Error("HTTP "+v.status);$=w,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:w}),!0),x()}catch(v){console.error("[admin-fonts] set default failed:",v),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function _(w,v){try{let s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!v})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast(ServerI18n.t(v?"fontsToggleOffToast":"fontsToggleOnToast",{name:w}),!0),x()}catch(s){console.error("[admin-fonts] toggle failed:",s),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function x(){var w=document.getElementById("adminFontList");if(!w)return;let v=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var s=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!s.ok)throw new Error("HTTP "+s.status);var o=await s.json(),p=o.fonts||[];if(B=p,window.AdminTabs?.setTabCount?.("assets","fonts",p.length||""),A(p,v),p.length===0){w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,c(p);return}w.innerHTML=p.map(n=>G(n,v)).join(""),c(p),l()}catch(n){console.error("[admin-fonts] fetch failed:",n),w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,A([],v)}}async function T(w){try{let v=await w.slice(0,4).arrayBuffer(),s=new Uint8Array(v);return s[0]===0&&s[1]===1&&s[2]===0&&s[3]===0?"TTF":s[0]===79&&s[1]===84&&s[2]===84&&s[3]===79?"OTF":s[0]===119&&s[1]===79&&s[2]===70&&s[3]===50?"WOFF2":s[0]===116&&s[1]===114&&s[2]===117&&s[3]===101?"TTF":s[0]===116&&s[1]===116&&s[2]===99&&s[3]===102?"TTC":null}catch{return null}}function H(w,v){let s=document.getElementById("adminFontDropStatus");if(s){if(!w){s.textContent="",s.hidden=!0,s.classList.remove("is-good","is-bad");return}s.hidden=!1,s.textContent=w,s.classList.toggle("is-good",v==="good"),s.classList.toggle("is-bad",v==="bad")}}function E(w){let v=document.getElementById("adminFontUploadError");if(!v)return;if(!w){v.hidden=!0,v.innerHTML="";return}v.hidden=!1,v.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${g(w)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let s=v.querySelector("[data-font-error-retry]");s&&s.addEventListener("click",function(){let o=document.getElementById("adminFontFileInput");o&&o.click()})}async function b(w){if(!w)return;E("");let v=w.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(v)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),E(ServerI18n.t("fontsExtNotSupportedFull"));return}if(w.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),E(ServerI18n.t("fontsFileTooLargeFull"));return}let s=await T(w);if(!s){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),E(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:s,size:(w.size/1024).toFixed(1)}),"good");try{var o=new FormData;o.append("fontfile",w);var p=await window.csrfFetch("/admin/upload_font",{method:"POST",body:o}),n=await p.json();p.ok?(window.showToast(n.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:w.name}),"good"),E(""),await x()):(window.showToast(n.error||ServerI18n.t("uploadFailed"),!1),H(n.error||ServerI18n.t("uploadFailed"),"bad"),E(n.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(t){console.error("[admin-fonts] upload error:",t),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),E(ServerI18n.t("fontsNetworkDisconnected"))}}function c(w){let v=document.getElementById("fontsTotalSize");v&&(v.textContent=ServerI18n.t("fontsTotalCount",{n:w.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(w=>{w.addEventListener("click",v=>{if(v.target.closest(".admin-font-delete-btn"))return;let s=w.dataset.font,o=document.getElementById("fontsPreviewFamily"),p=document.getElementById("fontsPreviewHeadline"),n=document.getElementById("fontsPreviewLatin"),t=document.getElementById("fontsPreviewCJK");o&&(o.textContent=s);let a=`"${s}", sans-serif`;p&&(p.style.fontFamily=a),n&&(n.style.fontFamily=a),t&&(t.style.fontFamily=a)})})}async function r(){var w=document.getElementById("adminFontFileInput");if(w){var v=w.files&&w.files[0];if(!v){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await b(v),w.value=""}}function e(){let w=document.getElementById("adminFontDrop"),v=document.getElementById("adminFontFileInput");!w||!v||(w.addEventListener("click",s=>{s.target!==v&&v.click()}),w.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),v.click())}),["dragenter","dragover"].forEach(s=>{w.addEventListener(s,o=>{o.preventDefault(),o.stopPropagation(),w.classList.add("is-drag")})}),["dragleave","drop"].forEach(s=>{w.addEventListener(s,o=>{o.preventDefault(),o.stopPropagation(),w.classList.remove("is-drag")})}),w.addEventListener("drop",async s=>{let o=s.dataTransfer&&s.dataTransfer.files;o&&o[0]&&await b(o[0])}))}async function f(w){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",w),confirmLabel:ServerI18n.t("deleteBtn")}))try{var s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w),{method:"DELETE"}),o=await s.json();s.ok?(window.showToast(o.message||ServerI18n.t("fontDeleteFallback")),await x()):window.showToast(o.error||ServerI18n.t("deleteFailed"),!1)}catch(p){console.error("[admin-fonts] delete error:",p),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function m(){var w=document.getElementById("settings-grid");if(w){w.insertAdjacentHTML("beforeend",u());var v=document.getElementById("adminFontFileInput");v&&v.addEventListener("change",r),e();var s=document.getElementById("adminFontList");s&&s.addEventListener("click",function(o){var p=o.target.closest(".admin-font-delete-btn");if(p){o.stopPropagation(),f(p.dataset.name);return}var n=o.target.closest(".admin-font-default-btn");if(n){o.stopPropagation(),M(n.dataset.name);return}var t=o.target.closest(".admin-font-toggle-btn");if(t){o.stopPropagation();let i=t.dataset.enabled==="true";_(t.dataset.name,i);return}var a=o.target.closest(".admin-font-subset-btn");a&&(o.stopPropagation(),C(a.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(o=>o.ok?o.json():null).then(o=>{o&&Array.isArray(o.FontFamily)&&($=o.FontFamily[3]||null)}).catch(()=>{}).finally(x)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var w=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()});w.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()}})})()});var an=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-scheduler",u=5e3,$=null,B=null;function A(m,w,v,s){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${m}">
        <input type="text" placeholder="${R(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${R(w)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${R(v||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${s||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function G(m){var w=m==="active"?"is-success":m==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+w+'" title="'+R(m)+'"></span>'}function O(m){let w=m.state==="paused",v=m.repeat_count===void 0?"\u2014":m.repeat_count===-1?"\u221E":String(m.repeat_count),s=m.repeat_count>0&&typeof m.remaining=="number"?String(m.repeat_count-m.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${R(m.id)}">
        ${G(m.state)}
        <div>
          <div class="admin-scheduler-job-title">#${g(m.id)}</div>
          <div class="admin-scheduler-job-meta">${g(ServerI18n.t("schedulerMessages"))} ${m.messages?m.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${m.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${g(s)}</span>
        <span class="admin-scheduler-job-val">${g(v)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${w?"is-active":"is-warn"}"
            data-job-id="${R(m.id)}" data-action="${w?"resume":"pause"}">
            ${g(ServerI18n.t(w?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${R(m.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function R(m){return g(m)}function N(){let m=document.querySelectorAll("#schedulerMessages [data-msg-index]"),w=[];return m.forEach(function(v){let s=v.querySelector(".scheduler-msg-text").value.trim(),o=v.querySelector(".scheduler-msg-color").value,p=parseInt(v.querySelector(".scheduler-msg-size").value,10)||48;s&&w.push({text:s,color:o,size:p})}),w}function D(m,w,v){let s=document.getElementById("schedulerMessages");if(!s)return;let o=s.children.length;s.insertAdjacentHTML("beforeend",A(o,m||"",w||"#ffffff",v||48))}function C(m){let w=m.closest("[data-msg-index]");w&&w.remove();let v=document.getElementById("schedulerMessages");v&&v.querySelectorAll("[data-msg-index]").forEach(function(s,o){s.dataset.msgIndex=o})}async function y(){let m=N();if(m.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let w=parseInt(document.getElementById("schedulerInterval").value,10);if(!w||w<1||w>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let v=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(v)||v<-1||v>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let s=document.getElementById("schedulerCreateBtn");s&&(s.disabled=!0);try{let o=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:m,interval_sec:w,repeat_count:v})}),p=await o.json();o.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await c()):showToast(p.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(o){console.error("Scheduler create error:",o),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{s&&(s.disabled=!1)}}function M(m){return"msg"}function _(m){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[m]||"\u25C8"}function x(m){return m.next_run_at?new Date(m.next_run_at*1e3).getHours():new Date().getHours()}function T(m){if(m.next_run_at){let w=new Date(m.next_run_at*1e3);return String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")}return"--:--"}function H(m){let w=m.id||"job",v=Array.isArray(m.messages)?m.messages.length:null;return"Job #"+w+(v!=null?" \xB7 "+v+" messages":"")}function E(m){let w=document.querySelector("[data-sch-timeline]");if(!w)return;let v=[],s=new Date().getHours();for(let p=0;p<24;p++){let n=p>=Math.max(0,s-1)&&p<=Math.min(23,s+2);v.push('<div class="admin-sch-timeline-hour'+(n?" is-peak":"")+'">'+String(p).padStart(2,"0")+"</div>")}let o=(m||[]).map(function(p){let n=M(p),t=_(n),a=p.state!=="paused";return'<div class="admin-sch-timeline-row'+(a?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+g(T(p))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+n+'">'+t+'</span><span class="admin-sch-evt-desc">'+g(H(p))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(a?" is-on":"")+'">'+ServerI18n.t(a?"uiOn":"uiOff")+"</span></div></div>"}).join("");w.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+v.join("")+"</div></div>"+(o||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+g(ServerI18n.t("noActiveJobs"))+"</div>"))}function b(m){let w=document.querySelector("[data-sch-calendar]");if(!w)return;let v=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],s=new Date,o=(s.getDay()+6)%7,p=new Date(s);p.setDate(s.getDate()-o);let n=v.map(function(a,i){let S=new Date(p);return S.setDate(p.getDate()+i),'<div class="admin-sch-calendar-day-head'+(i===o?" is-today":"")+'">'+g(a)+'<span class="date">'+S.getDate()+"</span></div>"}).join(""),t=[0,1,2,3,4,5,6].map(function(a){return'<div class="admin-sch-calendar-cell">'+(a===o?(m||[]).slice(0,5).map(function(S){let I=M(S),d=_(I);return'<span class="admin-sch-cal-chip is-'+I+'">'+g(T(S))+" "+d+"</span>"}).join(""):"")+"</div>"}).join("");w.innerHTML='<div class="admin-sch-calendar-head">'+n+'</div><div class="admin-sch-calendar-body">'+t+"</div>"}async function c(){let m=document.getElementById("schedulerJobsList"),w=document.getElementById("schedulerJobsCount");if(m)try{let v=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!v.ok){m.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}let s=await v.json();if(!Array.isArray(s.jobs)){m.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}w&&(w.textContent=ServerI18n.t("schItemCount",{n:s.jobs.length})),E(s.jobs),b(s.jobs);let o=document.querySelector("[data-sch-meta]");if(o){let p=new Date().toISOString().slice(0,10);o.textContent=ServerI18n.t("schTodayMeta",{date:p,n:s.jobs.length})}if(s.jobs.length===0){m.innerHTML="";let p=window.AdminEmpty.render("scheduler");p.dataset.emptyKind="scheduler",m.appendChild(p);return}m.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+g(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+g(ServerI18n.t("schColInterval"))+"</span><span>"+g(ServerI18n.t("schColSent"))+"</span><span>"+g(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+s.jobs.map(O).join("")}catch(v){console.error("Scheduler fetch error:",v),m.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(m,w){try{let v=await csrfFetch("/admin/scheduler/"+encodeURIComponent(w),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),s=await v.json();v.ok?(showToast(w==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await c()):showToast(s.error||ServerI18n.t("actionFailed"),!1)}catch(v){console.error("Scheduler toggle error:",v),showToast(ServerI18n.t("actionFailed"),!1)}}async function r(m){try{let w=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),v=await w.json();w.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await c()):showToast(v.error||ServerI18n.t("cancelFailed"),!1)}catch(w){console.error("Scheduler cancel error:",w),showToast(ServerI18n.t("cancelFailed"),!1)}}function e(){let m=document.getElementById("settings-grid");if(!m)return;m.insertAdjacentHTML("beforeend",`
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
    `);let w=document.querySelectorAll("[data-sch-view]");w.forEach(n=>{n.addEventListener("click",()=>{let t=n.dataset.schView;w.forEach(S=>{S.classList.toggle("is-active",S===n),S.setAttribute("aria-selected",S===n?"true":"false")});let a=document.querySelector("[data-sch-timeline]"),i=document.querySelector("[data-sch-calendar]");a&&(a.hidden=t!=="timeline"),i&&(i.hidden=t!=="calendar")})}),D("","#ffffff",48);let v=document.getElementById("schedulerMessages");v&&v.addEventListener("click",function(n){let t=n.target.closest(".scheduler-remove-msg");t&&C(t)});let s=document.getElementById("schedulerAddMsg");s&&s.addEventListener("click",function(){D("","#ffffff",48)});let o=document.getElementById("schedulerCreateBtn");o&&o.addEventListener("click",y);let p=document.getElementById("schedulerJobsList");p&&p.addEventListener("click",function(n){let t=n.target.closest(".scheduler-job-toggle");if(t){l(t.dataset.jobId,t.dataset.action);return}let a=n.target.closest(".scheduler-job-cancel");a&&r(a.dataset.jobId)}),$&&(clearInterval($),$=null),B||(B=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:u,tick:c}),window.addEventListener("beforeunload",function(){B&&(B(),B=null)}))}function f(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let m=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(h)&&!m){m=!0;try{e()}finally{m=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var sn=ye(()=>{(function(){"use strict";let g="admin-security-v2-page";var h=window.AdminUtils.escapeHtml;let u=null,$=!1,B=!1,A=0;function G(){let n=t=>ServerI18n.t(t);return`
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
      </div>`}function O(n){if(!n)return 0;let t=0;n.length>=8&&t++,n.length>=12&&t++;let a=(/[a-z]/.test(n)?1:0)+(/[A-Z]/.test(n)?1:0)+(/\d/.test(n)?1:0)+(/[^\w]/.test(n)?1:0);return a>=2&&t++,a>=3&&t++,Math.min(4,t)}function R(n){let t=document.getElementById("sec2-pw-meter"),a=document.getElementById("sec2-pw-label");if(!t||!a)return;let i=O(n),S=[0,25,50,75,100],I=["","is-bad","is-warn","is-warn","is-good"],d=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];t.style.width=S[i]+"%",t.className=I[i],a.textContent=d[i]}async function N(n){n.preventDefault();let t=document.getElementById("sec2-pw-current").value,a=document.getElementById("sec2-pw-new").value,i=document.getElementById("sec2-pw-confirm").value;if(!t||!a||!i){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(a.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(a!==i){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let S=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:t,new_password:a,confirm_password:i})}),I=await S.json().catch(()=>({}));S.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),R(""),I.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(I.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(S){console.error("Password change error:",S),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let n=++A,t=document.getElementById("sec2-wsa-status");B=!0,C(!0),t.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let a=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let i=await a.json();if(n!==A)return!1;u={require_token:!!i.require_token,token:i.token||""},document.getElementById("sec2-wsa-toggle").checked=!!i.require_token,document.getElementById("sec2-wsa-token").value=i.token||"",t.textContent=i.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(i.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,_();let S=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=S?new Date(parseInt(S,10)).toLocaleString():"\u2014",!0}catch{return n!==A||(u=null,C(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{n===A&&(B=!1,C($||!u),$||_())}}function C(n){["toggle","token","save","rotate","copy","reveal"].forEach(t=>{document.getElementById("sec2-wsa-"+t).disabled=n}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",n)}function y(){return $||B||!u?!1:($=!0,++A,C(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function M(){if($=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,C(B||!u),u&&!B){let n=document.getElementById("sec2-wsa-status");n.textContent=ServerI18n.t(u.require_token?"security2StatusEnabled":"security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(u.require_token?"is-active":""),_()}}function _(){if($||B||!u)return;document.getElementById("sec2-wsa-disabled-warning").hidden=u.require_token;let n=document.getElementById("sec2-wsa-toggle").checked!==u.require_token||document.getElementById("sec2-wsa-token").value.trim()!==u.token;document.getElementById("sec2-wsa-draft-hint").hidden=!n}function x(n){return String(n||"").split(/\n+/).map(t=>t.trim()).filter(Boolean)}function T(n){return String(n||"").split(",").map(t=>t.trim().toUpperCase()).filter(Boolean)}function H(n,t){let a=document.getElementById(n);a&&(a.textContent=t==null||t===""?"\u2014":String(t))}async function E(){try{let n=await fetch("/admin/security/settings",{credentials:"same-origin"}),t=await n.json().catch(()=>({}));if(!n.ok)throw new Error(t.error||n.status);let a=t.ip_allowlist||{},i=t.cors||{},S=t.tls||{},I=!!a.enabled,d=Array.isArray(a.entries)?a.entries:[],k=document.getElementById("sec2-ip-dot"),L=document.getElementById("sec2-ip-status-chip"),j=document.getElementById("sec2-ip-toggle"),P=document.getElementById("sec2-ip-entries");k&&(k.classList.toggle("is-lime",I),k.classList.toggle("is-amber",!I)),L&&(L.textContent=I?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),L.className="admin-ui-chip admin-sec-status-chip "+(I?"is-active":"is-warn")),j&&(j.checked=I),P&&(P.value=d.join(`
`)),H("sec2-ip-current",a.current_ip||"\u2014"),H("sec2-ip-status-line",I?ServerI18n.t("security2IpStatusEnabled",{n:d.length}):ServerI18n.t("security2IpStatusDisabled"));let V=Array.isArray(i.origins)?i.origins:["*"],F=Array.isArray(i.methods)?i.methods:[],U=document.getElementById("sec2-cors-origins"),ee=document.getElementById("sec2-cors-credentials"),J=document.getElementById("sec2-cors-methods"),W=document.getElementById("sec2-cors-cred-dot");U&&(U.value=V.join(`
`)),ee&&(ee.checked=!!i.supports_credentials),J&&(J.value=F.join(", ")),W&&(W.classList.toggle("is-lime",!i.supports_credentials),W.classList.toggle("is-amber",!!i.supports_credentials)),H("sec2-cors-origins-line",V.join(", ")),H("sec2-cors-credentials-line",i.supports_credentials?"true":"false"),H("sec2-cors-methods-line",F.join(", "));let Z=S.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:S.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",Z)}catch(n){console.error("Security settings load error:",n);let t=document.getElementById("sec2-ip-status-chip");t&&(t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function b(n){let t={};if(n==="ip")t.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:x(document.getElementById("sec2-ip-entries")?.value||"")};else if(n==="cors"){let a=x(document.getElementById("sec2-cors-origins")?.value||"");t.cors={origins:a.length?a:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:T(document.getElementById("sec2-cors-methods")?.value||"")}}try{let a=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json().catch(()=>({}));if(!a.ok){window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await E()}catch(a){console.error("Security settings save error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function c(){if($||B||!u)return;let n=document.getElementById("sec2-wsa-toggle").checked,t=document.getElementById("sec2-wsa-token").value.trim();if(n&&!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(y())try{let a=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:n,token:t})}),i=await a.json().catch(()=>({}));a.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{M()}}async function l(){if(!($||B||!u||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&y())try{let t=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),a=await t.json().catch(()=>({}));if(t.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(a.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{M()}}function r(){let n=document.getElementById("sec2-wsa-token").value;if(!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function e(){let n=document.getElementById("sec2-wsa-token");n.type=n.type==="password"?"text":"password";let t=n.type==="text",a=document.getElementById("sec2-wsa-reveal");a.setAttribute("aria-pressed",String(t)),a.textContent=ServerI18n.t(t?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),a.setAttribute("aria-label",a.textContent)}async function f(n){if(n==="reset-ws"&&($||B||!u))return;let t={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:i=>ServerI18n.t("security2ToastApiTokensRevoked",{n:i.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[n];if(!(!t||!await window.HudConfirm?.open({icon:"\u26A0",title:t.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:t.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:t.severity||"warn",body:t.confirm,confirmLabel:t.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(n==="reset-ws"&&!y()))try{let i=await window.csrfFetch(t.url,{method:"POST"}),S=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(S.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(n==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(t.ok(S),!0)}catch(i){console.error("Security danger action error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{n==="reset-ws"&&M()}}function m(){let n=document.getElementById("sec2-session-self-line");if(n){let i=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),S=navigator.platform||navigator.userAgentData?.platform||"",I=i?i[0].split("/")[0]:"Browser";n.textContent=ServerI18n.t("security2SessionSelfLine",{browser:I,platform:S})}let t=document.getElementById("sec2-tls-dot"),a=document.getElementById("sec2-tls-status");if(t&&a){let i=location.protocol==="https:";t.classList.add(i?"is-lime":"is-crimson"),a.textContent=i?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function w(){let n=document.getElementById("sec2-pw-form");n&&n.addEventListener("submit",N);let t=document.getElementById("sec2-pw-new");t&&t.addEventListener("input",a=>R(a.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",c),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",r),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",e),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",_),document.getElementById("sec2-wsa-token")?.addEventListener("input",_),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>b("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>b("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(a=>{a.addEventListener("click",()=>{let i=document.querySelector(`[data-sec-disclosure="${a.dataset.secDisclose}"]`);i&&(i.hidden=!i.hidden,a.setAttribute("aria-expanded",i.hidden?"false":"true"),i.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(a=>{a.dataset.secBound!=="1"&&(a.dataset.secBound="1",a.addEventListener("click",()=>f(a.dataset.secDanger)))}),m(),D(),E()}function v(){}function s(){let n=document.querySelector(".admin-dash-grid"),t=document.getElementById(g);if(!n||!t)return;let a=n.dataset.activeRoute||"live",i=n.dataset.activeLeaf||a;t.style.display=a==="system"&&i==="security"?"":"none"}function o(){let n=document.getElementById("settings-grid");!n||document.getElementById(g)||(n.insertAdjacentHTML("beforeend",G()),w(),s())}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=null;function t(){let i=document.querySelector(".admin-dash-grid");!i||n||(n=new MutationObserver(s),n.observe(i,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)?o():void 0,t(),s()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",s),document.addEventListener("admin-panel-rendered",()=>{o(),t(),s()}),t(),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var on=ye(()=>{(function(){"use strict";let g="admin-backup-v2-page";var h=window.AdminUtils.escapeHtml;function u(){let o=p=>ServerI18n.t(p);return`
      <div id="${g}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${o("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${o("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${o("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${o("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${o("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${o("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${o("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecSettingsSnap")}
              <span class="sub">${o("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${o("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${o("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${o("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${o("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${o("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecRestoreSettings")}
              <span class="sub">${o("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${o("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${o("backupApplyDisabledTitle")}">${o("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecRestoreFull")}
              <span class="sub">${o("backupFullPackRestoreNote")}</span>
              <span class="sub">${o("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${o("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${o("backupApplyDisabledTitle")}">${o("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecRestoreAssets")}
              <span class="sub">${o("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${o("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${o("backupApplyDisabledTitle")}">${o("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${o("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecClearHistory")}
              <span class="sub">${o("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${o("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${o("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${o("backupSecFactoryReset")}
              <span class="sub">${o("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${o("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function $(){try{let o=await fetch("/get_settings",{credentials:"same-origin"});if(!o.ok)throw new Error(o.status);let p=await o.json(),n=["password","token","secret","hash"],t={};Object.keys(p||{}).forEach(d=>{n.some(k=>d.toLowerCase().includes(k))||(t[d]=p[d])});let a=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),i=URL.createObjectURL(a),S=new Date().toISOString().replace(/[:.]/g,"-"),I=document.createElement("a");I.href=i,I.download="danmu-settings-"+S+".json",document.body.appendChild(I),I.click(),I.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(o){console.error("Settings snapshot error:",o),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let B=null;function A(){B=null;let o=document.getElementById("bk2-settings-apply");o&&(o.disabled=!0,o.title=ServerI18n.t("backupApplyDisabledTitle"))}async function G(){let o=document.getElementById("bk2-settings-upload"),p=document.getElementById("bk2-settings-diff"),n=document.getElementById("bk2-settings-apply"),t=o&&o.files&&o.files[0];if(!t){A(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let a=await t.text(),i=JSON.parse(a),S=i.settings||i;if(!S||typeof S!="object"||Array.isArray(S))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let I=await fetch("/get_settings",{credentials:"same-origin"}),d=I.ok?await I.json():{},k=[];new Set([...Object.keys(d),...Object.keys(S)]).forEach(j=>{let P=JSON.stringify(d[j]),V=JSON.stringify(S[j]);P!==V&&(P===void 0?k.push("+ "+j+": "+V):V===void 0?k.push("- "+j+": "+P):k.push("~ "+j+": "+P+" \u2192 "+V))}),p.textContent=k.length?k.join(`
`):ServerI18n.t("backupNoDiff"),p.hidden=!1,B=S,n&&(n.disabled=!1,n.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:k.length}),!0)}catch(a){console.error("Dry-run error:",a),A(),p.textContent=ServerI18n.t("backupParseFailedDetail",{msg:a&&a.message?a.message:String(a)}),p.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function O(){let o=document.getElementById("bk2-settings-diff"),p=document.getElementById("bk2-settings-apply");if(!B){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:B})}),a=await t.json().catch(()=>({}));if(!t.ok){o&&(o.hidden=!1,o.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(a.details||a,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}o&&(o.hidden=!1,o.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(a.applied||[]).length+" settings"),B=null,p&&(p.disabled=!0,p.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){o&&(o.hidden=!1,o.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function R(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let o=document.getElementById("bk2-factory-confirm"),p=document.getElementById("bk2-factory-reset");!o||!p||(o.addEventListener("input",()=>{let n=o.value.trim()==="reset";p.classList.toggle("is-ready",n),p.disabled=!n}),p.addEventListener("click",D))}async function D(){let o=document.getElementById("bk2-factory-confirm"),p=document.getElementById("bk2-factory-reset");if((o?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{p&&(p.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),p&&(p.disabled=!1);return}o&&(o.value=""),p&&(p.classList.remove("is-ready"),p.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),_()}catch{p&&(p.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function C(){document.getElementById("bk2-settings-download")?.addEventListener("click",$),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",G),document.getElementById("bk2-settings-apply")?.addEventListener("click",O),document.getElementById("bk2-clear-history")?.addEventListener("click",R),document.getElementById("bk2-pack-export")?.addEventListener("click",x),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",r),document.getElementById("bk2-pack-apply")?.addEventListener("click",e),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",m),N(),_(),T()}let y=null,M=null;async function _(){let o=document.getElementById("bk2-pack-summary");if(o)try{let p=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!p.ok){o.textContent=ServerI18n.t("backupPreviewUnavailable");return}let n=await p.json(),t=(n.total_bytes/(1024*1024)).toFixed(2);o.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:n.file_count||0,mb:t})}catch{o.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function x(){let o=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(o?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function T(){let o=document.getElementById("bk2-assets-summary");if(o)try{let p=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!p.ok){o.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let n=await p.json(),t=(n.total_bytes/(1024*1024)).toFixed(2);o.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:n.file_count||0,mb:t})}catch{o.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let E={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},b={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function c(o){return!o||!o.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(o.map(p=>{let n=p&&b[p.code];return"  "+p.path+" \u2014 "+(n?ServerI18n.t(n):p.reason)}))}function l(o){return(o||[]).map(p=>{let n=p&&E[p.code];return"  "+p.path+" \u2014 "+(n?ServerI18n.t(n):p.reason)})}async function r(){let p=document.getElementById("bk2-pack-upload")?.files?.[0];if(!p){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(p.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let n=new FormData;n.append("file",p);let t=document.getElementById("bk2-pack-diff"),a=document.getElementById("bk2-pack-apply");try{let i=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:n}),S=await i.json().catch(()=>({}));if(!i.ok||!S.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(S.errors||S,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),a&&(a.disabled=!0),y=null;return}if(t){t.hidden=!1;let I=[],d=S.manifest||{};I.push("manifest version: "+(d.version||"?")),I.push("generated_at: "+(d.generated_at?new Date(d.generated_at*1e3).toISOString():"\u2014")),S.credentials==="omitted"&&I.push(ServerI18n.t("backupCredentialsKept")),I.push(""),I.push("Will write "+(S.members?.length||0)+" files:"),(S.members||[]).forEach(k=>{I.push("  "+k.label+"/"+k.path.split("/").slice(1).join("/")+" ("+(k.size||0)+" B)")}),S.skipped?.length&&(I.push(""),I.push("Skipped "+S.skipped.length+" entries:"),I.push(...l(S.skipped))),I.push(...c(S.merged)),t.textContent=I.join(`
`)}y=p,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:S.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:i.message||""}),!1)}}async function e(){if(!y){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let p=new FormData;p.append("file",y);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:p})).json().catch(()=>({})),a=document.getElementById("bk2-pack-diff");if(a){a.hidden=!1;let i=[];t.ok?(i.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),i.push(""),i.push("Applied "+(t.applied||0)+" files"),t.restart_required&&i.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),t.skipped?.length&&(i.push("Skipped "+t.skipped.length+" entries:"),i.push(...l(t.skipped))),i.push(...c(t.merged))):(i.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),t.restart_required&&i.push(ServerI18n.t("backupRestartRequired")),i.push(JSON.stringify(t.errors||t,null,2))),a.textContent=i.join(`
`)}if(t.ok){let i=t.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(i,{n:t.applied}),!0),y=null;let S=document.getElementById("bk2-pack-apply");S&&(S.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(n){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:n.message||""}),!1)}}async function f(){let p=document.getElementById("bk2-assets-upload")?.files?.[0];if(!p){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(p.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let n=new FormData;n.append("file",p);let t=document.getElementById("bk2-assets-diff"),a=document.getElementById("bk2-assets-apply");try{let i=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:n}),S=await i.json().catch(()=>({}));if(!i.ok||!S.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(S.errors||S,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),a&&(a.disabled=!0),M=null;return}if(t){t.hidden=!1;let I=[],d=S.manifest||{};I.push("manifest version: "+(d.version||"?")),I.push("generated_at: "+(d.generated_at?new Date(d.generated_at*1e3).toISOString():"\u2014")),I.push(""),I.push("Will write "+(S.members?.length||0)+" asset files:"),(S.members||[]).forEach(k=>{I.push("  "+k.path+" ("+(k.size||0)+" B)")}),S.skipped?.length&&(I.push(""),I.push("Skipped "+S.skipped.length+" entries:"),S.skipped.forEach(k=>I.push("  "+k.path+" \u2014 "+k.reason))),t.textContent=I.join(`
`)}M=p,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:S.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:i.message||""}),!1)}}async function m(){if(!M){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let p=new FormData;p.append("file",M);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:p})).json().catch(()=>({})),a=document.getElementById("bk2-assets-diff");if(a){a.hidden=!1;let i=[];t.ok?(i.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),i.push(""),i.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&i.push("Skipped "+t.skipped.length+" (see above)")):(i.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),i.push(JSON.stringify(t.errors||t,null,2))),a.textContent=i.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),M=null;let i=document.getElementById("bk2-assets-apply");i&&(i.disabled=!0),T()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(n){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:n.message||""}),!1)}}function w(){let o=document.querySelector(".admin-dash-grid"),p=document.getElementById(g);if(!o||!p)return;let n=o.dataset.activeLeaf||"dashboard";p.style.display=n==="backup"?"":"none"}function v(){let o=document.getElementById("settings-grid");!o||document.getElementById(g)||(o.insertAdjacentHTML("beforeend",u()),C(),w())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&v(),w()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",w),document.addEventListener("admin-panel-rendered",()=>{v(),w()}),v()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var rn=ye(()=>{(function(){"use strict";let g="admin-broadcast-v2-page",h="/admin/broadcast/status",u="/admin/broadcast/toggle",$={mode:"live"},B=null,A=0,G=!1;async function O(){try{let v=await fetch(h,{credentials:"same-origin"});if(!v.ok)return!1;let s=await v.json();if(s&&(s.mode==="live"||s.mode==="standby"))return B=s.session||null,$=s,!0}catch{}return!1}async function R(){try{let v=await fetch("/overlay_status",{credentials:"same-origin"});v.ok&&(A=(await v.json()).overlay_count||0,G=!0)}catch{}}async function N(){await Promise.all([O(),R()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:$.mode==="live",count:G?A:void 0}}))}async function C(v){try{let s=await window.csrfFetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:v})});if(!s.ok){let o=await s.json().catch(()=>({}));throw new Error(o&&o.error?o.error:`HTTP ${s.status}`)}return $=await s.json(),D(),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function y(v,s){return ServerI18n.t(v?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:s})}function M(v){return v?"broadcastBigPause":"broadcastBigResume"}async function _(v){let s=await C(v?"live":"standby");return s&&window.showToast&&window.showToast(ServerI18n.t(v?"broadcastToastResumed":"broadcastToastPaused"),!0),c(),s}async function x(){return await O(),R().then(D),_($.mode!=="live")}async function T(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:_,toggleDisplay:x,clearScreen:T,statusText:y,toggleKey:M};function H(){let v=s=>ServerI18n.t(s);return`
      <div id="${g}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${M(!1)}">${v(M(!1))}</button>
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
      </div>`}let E=0,b=0;function c(){let v=document.getElementById(g);if(!v)return;let s=$.mode==="live",o=s?"live":"standby",p=(d,k)=>{d&&d.textContent!==k&&(d.textContent=k)};v.dataset.bcState=o;let n=v.querySelector("[data-bc-statedot]");n&&(n.dataset.state=o);let t=v.querySelector("[data-bc-statelabel]");t&&(p(t,y(s,A)),t.dataset.state=o);let a=v.querySelector("[data-bc-big]");a&&(a.dataset.i18n=M(s),p(a,ServerI18n.t(a.dataset.i18n)));let i=B||{},S=!!(i.id||i.name),I=v.querySelector("[data-bc-session-ctx]");I&&(I.hidden=!S),S&&p(v.querySelector("[data-bc-session-id]"),String(i.name||i.id))}function l(){let v=document.getElementById(g);v&&(v.querySelector("[data-bc-big]")?.addEventListener("click",()=>_($.mode!=="live")),v.querySelector("[data-bc-clear]")?.addEventListener("click",T))}function r(){E||(N().then(c),c(),E=setInterval(()=>{N().then(c)},5e3),b=setInterval(c,1e3))}function e(){E&&(clearInterval(E),E=0),b&&(clearInterval(b),b=0)}function f(){let v=document.querySelector(".admin-dash-grid"),s=document.getElementById(g);if(!v||!s)return;let o=v.dataset.activeLeaf||"dashboard",p=o==="overlay"||o==="broadcast";s.style.display=p?"":"none",p?r():e()}function m(){let v=document.getElementById("settings-grid");!v||document.getElementById(g)||(v.insertAdjacentHTML("afterbegin",H()),l(),f())}function w(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&m(),f()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",()=>{m(),f()}),m()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w()})()});var ln=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(z,te){return window.ServerI18n?window.ServerI18n.t(z,te):z}let u=["keyword","regex","rate_limit","fingerprint"],$={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},B=["block","replace","allow","review"],A={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},G={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},O={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},R=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function N(z){switch(z.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:z.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:z.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:z.action||"block"}}}function D(z,te){return z==="keyword"?te==="block"?"word":"keyword":z==="regex"?te==="replace"?"replace":"regex":z}function C(z){return z==="permanent"||z==="session"?{lifetime:z}:z==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(z,10)}}function y(z){let te=new Date(z*1e3),ae=ke=>String(ke).padStart(2,"0"),le=`${ae(te.getHours())}:${ae(te.getMinutes())}`,he=new Date;return te.toDateString()===he.toDateString()?le:`${te.getMonth()+1}/${te.getDate()} ${le}`}function M(z){return z.lifetime==="session"?h("blkLifeSession"):z.lifetime==="timed"&&z.expires_at?h("blkLifeUntil",{time:y(z.expires_at)}):h("msgDrawerPermanent")}function _(z){return z.type==="rate_limit"?h("blkRateSummary",{n:z.max_count||5,s:z.window_sec||60}):z.type==="replace"?`${z.pattern}  \u2192  ${z.replacement||""}`:z.pattern}let x=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function T(z,te){return te.find(ae=>ae.type==="regex"&&ae.pattern===z.pattern&&ae.action===z.action)}let H=[],E="all",b=null,c=!1,l=new Set,r=0,e=0,f=!0;function m(z,te,ae){return z.map(le=>`<option value="${g(le)}"${le===ae?" selected":""}>${g(te(le))}</option>`).join("")}function w(){return`
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
              ${m(u,z=>h($[z]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${g(h("blkActionLabel"))}">
              ${m(B,z=>h(A[z]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${g(h("blkLifetimeLabel"))}">
              ${R.map(z=>`<option value="${z.value}">${g(h(z.key))}</option>`).join("")}
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
          ${x.map(z=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${z.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${g(h(z.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(u).map(z=>`
              <button type="button" class="seg-item${z==="all"?" is-active":""}" data-scope="${z}">
                ${g(h(z==="all"?"fltChipAll":$[z]))}
                <span class="admin-block-scope-count" data-scope-count="${z}">0</span>
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
      </div>`}function v(z){let te=N(z),ae=g(z.id);return`
      <div class="hud-rule-row admin-block-row${z.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${g(z.type)}"
        style="${z.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${g(_(z))}</span>
        <span class="admin-block-row__meta">
          <span>${g(h($[te.match]))}</span>
          <span class="admin-block-row__action" data-action="${g(te.action)}">${g(h(A[te.action]||"fltActBlock"))}</span>
          <span>${g(M(z))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${g(z.enabled?h("enabled"):h("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${z.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${z.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${g(h("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${g(h("deleteRule"))}" aria-label="${g(h("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function s(){let z=document.getElementById("blockRuleList");if(!z)return;let te={all:H.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};H.forEach(ke=>{te[N(ke).match]+=1}),Object.keys(te).forEach(ke=>{let $e=document.querySelector(`[data-scope-count="${ke}"]`);$e&&($e.textContent=String(te[ke]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",H.length||"");let ae=H.filter(ke=>ke.lifetime==="session").length,le=document.getElementById("blockRuleClearSession");le&&(le.hidden=ae===0);let he=E==="all"?H:H.filter(ke=>N(ke).match===E);z.innerHTML=he.map(v).join(""),o(he.length===0),p()}function o(z){let te=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!te||!ae)&&(te.hidden=z,ae.hidden=!z,ae.innerHTML="",!!z))if(window.AdminEmpty){let le=window.AdminEmpty.renderCustom({icon:"\u2298",title:h("blkEmpty"),accent:"var(--color-ink-error)"});le.dataset.emptyKind="filters",ae.appendChild(le)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${g(h("blkEmpty"))}</div>`}function p(){x.forEach(z=>{let te=document.querySelector(`[data-flt-quick-id="${z.id}"]`);if(!te)return;let ae=T(z,H),le=!!ae&&ae.enabled!==!1;te.classList.toggle("is-active",le),te.setAttribute("aria-pressed",le?"true":"false")})}let n=0;async function t(){let z=++n;try{let te=await window.csrfFetch("/admin/filters/list");if(!te.ok)throw new Error("HTTP "+te.status);let ae=await te.json();if(z!==n)return;H=Array.isArray(ae.rules)?ae.rules:[],f=ae.session_live!==!1}catch(te){if(z!==n)return;console.error("Failed to fetch block rules:",te),window.showToast(h("fetchFiltersFailed"),!1)}s(),a()}function a(){let z=i("blockRuleLifetime");if(!z)return;let te=z.querySelector('option[value="session"]'),ae=f||!!(b&&b.lifetime==="session");te&&(te.hidden=!ae,te.disabled=!ae),!ae&&z.value==="session"&&(z.value="permanent")}function i(z){return document.getElementById(z)}function S(){let z=i("blockRuleMatch").value,te=i("blockRuleAction"),ae=G[z];Array.from(te.options).forEach(le=>{le.disabled=ae.indexOf(le.value)===-1}),ae.indexOf(te.value)===-1&&(te.value=ae[0]),te.disabled=ae.length===1,i("blockRuleInput").placeholder=h(O[z]),i("blockRuleReplacement").hidden=te.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(le=>{le.hidden=z!=="rate_limit"})}function I(){let z=i("blockRuleMatch").value,te=i("blockRuleAction").value,ae=i("blockRuleInput").value||"",le={type:D(z,te),pattern:z==="regex"?ae:ae.trim(),action:te,priority:parseInt(i("blockRulePriority").value,10)||0};return b&&b.type===le.type&&(le.type==="fingerprint"||le.type==="rate_limit")&&(le.action=b.action||te),le.type==="replace"&&(le.replacement=i("blockRuleReplacement").value||""),le.type==="rate_limit"&&(le.max_count=parseInt(i("blockRuleMaxCount").value,10)||5,le.window_sec=parseFloat(i("blockRuleWindowSec").value)||60),Object.assign(le,C(i("blockRuleLifetime").value))}function d(z,te){let ae=z&&z.code;return h(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":te)}function k(){r+=1,b=null,i("blockRuleInput").value="",i("blockRuleReplacement").value="",i("blockRuleMatch").value="keyword",i("blockRuleAction").value="block";let z=i("blockRuleLifetime"),te=z.querySelector('option[value="keep"]');te&&te.remove(),z.value="permanent",i("blockRulePriority").value="0",i("blockRuleSubmit").textContent=h("modAddWordBtn"),i("blockRuleCancel").hidden=!0,S(),a()}function L(z){r+=1,b=z;let te=N(z);i("blockRuleMatch").value=te.match,S(),i("blockRuleAction").value=te.action,i("blockRuleInput").value=z.pattern||"",i("blockRuleReplacement").value=z.replacement||"",i("blockRuleMaxCount").value=String(z.max_count||5),i("blockRuleWindowSec").value=String(z.window_sec||60),i("blockRulePriority").value=String(z.priority||0);let ae=i("blockRuleLifetime"),le=ae.querySelector('option[value="keep"]');if(le&&le.remove(),z.lifetime==="timed"&&z.expires_at){let he=document.createElement("option");he.value="keep",he.textContent=M(z),ae.insertBefore(he,ae.firstChild),ae.value="keep"}else ae.value=z.lifetime==="session"?"session":"permanent";S(),a(),i("blockRuleSubmit").textContent=h("blkSave"),i("blockRuleCancel").hidden=!1,i("blockRuleInput").focus()}async function j(){if(c)return;let z=I();if(!z.pattern&&z.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),i("blockRuleInput").focus();return}let te=b,ae=r,le=()=>ae===r,he=te?"/admin/filters/update":"/admin/filters/add",ke=te?{rule_id:te.id,updates:z}:z,$e=i("blockRuleSubmit"),pe=++e;c=!0,te&&l.add(te.id),$e&&($e.disabled=!0);try{let xe=await window.csrfFetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)}),Ie=await xe.json().catch(()=>({}));if(te&&xe.status===404){le()&&k(),await t(),window.showToast(h("blkErrGone"),!1);return}if(!xe.ok){window.showToast(d(Ie,te?"updateRuleFailed":"addRuleFailed"),!1);return}le()&&k(),await t(),te?window.showToast(h("blkUpdated"),!0):window.AdminQuickAction&&Ie.rule_id?window.AdminQuickAction.fire({label:h("blkAdded",{pattern:z.pattern||_(z)}),undo:{label:h("histUndo"),run:async()=>{if(!await P(Ie.rule_id))throw new Error("remove failed")}}}):window.showToast(h("ruleAdded"),!0)}catch(xe){console.error("Save block rule error:",xe),window.showToast(h(te?"updateRuleFailed":"addRuleFailed"),!1)}finally{te&&l.delete(te.id),pe===e&&(c=!1),$e&&($e.disabled=!1)}}async function P(z){let te=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:z})});return te.ok&&await t(),te.ok}async function V(z){let te=H.find(le=>le.id===z);if(await window.HudConfirm?.open({icon:"\u2298",title:h("filtersDeleteTitle"),severity:"danger",bodyText:te?_(te):"",confirmLabel:h("filtersDeleteConfirm")}))try{await P(z)?(b&&b.id===z&&k(),window.showToast(h("ruleDeleted"),!0)):window.showToast(h("deleteRuleFailed"),!1)}catch(le){console.error("Delete block rule error:",le),window.showToast(h("deleteRuleFailed"),!1)}}let F={};async function U(z,te){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:z,updates:{enabled:te}})}),le=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(d(le,"updateRuleFailed"),!1),!1;let he=H.find(ke=>ke.id===z);return he&&(he.enabled=te),p(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(h("updateRuleFailed"),!1),!1}}function ee(z,te){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ke=>ke.dataset.ruleId===z);if(!ae)return;let le=ae.querySelector(".filter-toggle-cb");le&&(le.checked=te);let he=ae.querySelector(".admin-filter-toggle-dot");he&&(he.classList.toggle("is-on",te),he.classList.toggle("is-off",!te)),ae.classList.toggle("is-off",!te),ae.style.opacity=te?"":"0.45"}async function J(z,te){let ae=F[z]||(F[z]={want:te,busy:!1});if(ae.want=te,ae.busy)return null;ae.busy=!0;try{let le;do if(le=ae.want,!await U(z,le))return await t(),!1;while(ae.want!==le);return ee(z,le),!0}finally{delete F[z]}}async function W(){let z=H.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:h("blkClearSessionTitle"),severity:"danger",bodyText:h("blkClearSessionBody",{n:z}),confirmLabel:h("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),le=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(h("blkClearedSession",{n:le.removed||0}),!0),await t()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(h("deleteRuleFailed"),!1)}}async function Z(z){let te=x.find(he=>he.id===z);if(!te)return;let ae=h(te.key),le=T(te,H);if(le&&le.enabled===!1){await J(le.id,!0)&&(window.showToast(h("filtersToastEnabled",{label:ae}),!0),await t());return}if(le){let he=await P(le.id).catch(()=>!1);window.showToast(he?h("filtersToastDisabled",{label:ae}):h("filtersToastDisableFailed"),he);return}try{let he=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:te.pattern,action:te.action,priority:50,lifetime:f?"session":"permanent"})});if(!he.ok){let ke=await he.json().catch(()=>({}));window.showToast(h("filtersToastEnableFailed",{msg:d(ke,"addRuleFailed")}),!1);return}window.showToast(h("filtersToastEnabled",{label:ae}),!0),await t()}catch{window.showToast(h("filtersToastEnableFailed",{msg:""}),!1)}}async function K(){let z=i("filterTestText"),te=i("filterTestResult"),ae=(z.value||"").trim();if(!ae){window.showToast(h("sampleTextRequired"),!1),z.focus();return}let le=I();if(!le.pattern&&le.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),i("blockRuleInput").focus();return}te.textContent=h("testing");try{let he=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:le,text:ae})}),ke=await he.json().catch(()=>({}));if(!he.ok){te.textContent=d(ke,"testError");return}let $e={block:h("blocked"),replace:h("replaced"),allow:h("allowed"),review:h("fltActReview")}[ke.action]||h("noMatch");te.dataset.verdict=ke.action||"pass",te.textContent=ke.action==="replace"?`${$e} \u2192 ${ke.text||""}`:$e}catch(he){console.error("Test block rule error:",he),te.textContent=h("testError")}}let Y=6,ne=[],re=0,de=null;function ue(z){let te=new Date(z*1e3),ae=le=>String(le).padStart(2,"0");return`${ae(te.getHours())}:${ae(te.getMinutes())}:${ae(te.getSeconds())}`}let me={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function Te(){let z=i("filterLiveLog");if(z){if(ne.length===0){z.innerHTML=`<div class="admin-block-empty">${g(h("fltNoEvents"))}</div>`;return}z.innerHTML=ne.map(te=>{let ae=String(te.action||"").toUpperCase(),le=me[ae]?h(me[ae]):ae,he=String(te.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${g(ae)}">
        <span class="admin-filter-log-row__time">${g(ue(te.ts))}</span>
        <span class="admin-filter-log-row__action">${g(le)}</span>
        <span class="admin-filter-log-row__text">\u300C${g(te.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${g(h("blkLogRule",{pattern:te.pattern||""}))}${he?" \xB7 "+g(he):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let z=await fetch(`/admin/filters/events?since=${re}`,{credentials:"same-origin"});if(!z.ok)return;let te=await z.json();if(!Array.isArray(te.events)||te.events.length===0)return;for(ne.unshift(...te.events);ne.length>Y;)ne.pop();re=te.latest_seq||re,Te()}catch{}}function Le(z){i("blockRuleMatch").addEventListener("change",S),i("blockRuleAction").addEventListener("change",S),i("blockRuleSubmit").addEventListener("click",j),i("blockRuleCancel").addEventListener("click",k),i("blockRuleInput").addEventListener("keydown",le=>{le.key==="Enter"&&!le.isComposing&&(le.preventDefault(),j())}),i("filterTestBtn").addEventListener("click",K),i("filterTestText").addEventListener("keydown",le=>{le.key==="Enter"&&!le.isComposing&&(le.preventDefault(),K())}),i("blockRuleClearSession").addEventListener("click",W),z.querySelector("[data-flt-quick]").addEventListener("click",le=>{let he=le.target.closest("[data-flt-quick-id]");he&&Z(he.dataset.fltQuickId)});let te=i("blockRuleScope");te.addEventListener("click",le=>{let he=le.target.closest("[data-scope]");he&&(E=he.dataset.scope,te.querySelectorAll("[data-scope]").forEach(ke=>ke.classList.toggle("is-active",ke===he)),s())});let ae=i("blockRuleList");ae.addEventListener("change",le=>{let he=le.target.closest(".filter-toggle-cb");if(!he)return;J(he.dataset.ruleId,he.checked);let ke=he.closest(".admin-block-row"),$e=ke?.querySelector(".admin-filter-toggle-dot");$e&&($e.classList.toggle("is-on",he.checked),$e.classList.toggle("is-off",!he.checked)),ke&&(ke.style.opacity=he.checked?"":"0.45")}),ae.addEventListener("click",le=>{let he=le.target.closest(".filter-delete-btn");if(he)return V(he.dataset.ruleId);let ke=le.target.closest(".block-rule-edit");if(ke){let $e=H.find(pe=>pe.id===ke.dataset.ruleId);$e&&!l.has($e.id)&&L($e)}}),de&&de(),de=window.AdminUtils.pollWhileVisible({el:()=>i("filterLiveLog"),intervalMs:4e3,tick:Ee})}function oe(){let z=document.getElementById("settings-grid");if(!z)return;b=null,E="all",c=!1,e+=1,r+=1,z.insertAdjacentHTML("beforeend",w());let te=document.getElementById("sec-blacklist");Le(te),S(),Te(),t()}let se=!1;document.addEventListener("admin-route-applied",z=>{let te=!!(z.detail&&z.detail.route==="moderation"&&z.detail.leaf==="blacklist");te&&!se&&document.getElementById("blockRuleList")&&t(),se=te});function ce(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let z=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{z()&&oe()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),z()&&oe()}window.AdminBlockRules={viewOf:N,typeFor:D,lifetimePayload:C,ACTIONS_FOR_MATCH:G,QUICK:x,refresh:t},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce()})()});var dn=ye(()=>{(function(){"use strict";var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml,$=1e4,B=null;function A(x){var T=g();return T[x]!==void 0?T[x]:!1}function G(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${u(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${u(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${u(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${u(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${u(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function O(x){var T=ServerI18n.t("fingerprintState_"+x),H="";return x==="blocked"?H=" is-crimson":x==="flagged"?H=" is-amber":x==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+u(T)+"</span>"}function R(x){if(!x)return"\u2014";try{var T=new Date(x*1e3);return T.toLocaleTimeString()}catch{return String(x)}}function N(x){var T=document.getElementById("adminFingerprintTableWrap");if(T){if(!x||x.length===0){T.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",T.appendChild(H);return}var E='<div class="admin-fp-row admin-fp-row--head"><span>'+u(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",b=x.map(function(c){var l=c.blocked|0,r=c.hash||"",e=r.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+u(r)+'"><span class="admin-fp-hash admin-identity-fp" title="'+u(r)+'">fp:'+u(e)+'</span><span class="admin-fp-ip admin-identity-ip">'+u(c.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+u(c.ua||"")+'">'+u(c.ua||"\u2014")+'</span><span class="admin-fp-num">'+(c.msgs|0)+'</span><span class="admin-fp-num">'+(c.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+O(c.state||"active")+'</span><span class="admin-fp-ts">'+u(R(c.last_seen))+"</span></div>"}).join("");T.innerHTML=E+b}}async function D(){var x=document.getElementById("adminFingerprintCount");try{var T=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!T.ok)throw new Error("HTTP "+T.status);var H=await T.json(),E=H.records||[];if(N(E),x){var b=H.count||E.length,c=H.flagged!=null?H.flagged:E.filter(function(r){return r.state==="flagged"||r.state==="blocked"}).length;x.textContent=ServerI18n.t("fpCountSummary",{unique:b,flagged:c})}}catch(r){console.error("[admin-fingerprints] fetch failed:",r);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+u(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function C(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var T=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(T.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var H=await T.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(E){console.error("[admin-fingerprints] reset error:",E),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function y(){M(),B=setInterval(function(){var x=document.getElementById("sec-fingerprints");x&&x.offsetParent!==null&&D()},$)}function M(){B&&(clearInterval(B),B=null)}function _(){var x=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(x){x.insertAdjacentHTML("beforeend",G());var T=document.getElementById("adminFingerprintRefreshBtn");T&&T.addEventListener("click",D);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",C),D(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var x=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&_()});x.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var T=document.getElementById("moderation-grid")||document.getElementById("settings-grid");T&&!document.getElementById("sec-fingerprints")&&_()}})})()});var cn=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.escapeHtml;let h=(s,o)=>{let p=window.ServerI18n?.t?.(s);return p&&p!==s?p:o||s},u=!1;new MutationObserver(()=>{let s=document.getElementById("settings-grid");if(s&&!(document.getElementById("sec-widgets")||u)){u=!0;try{B(s)}finally{u=!1}}}).observe(document.body,{childList:!0,subtree:!0});function B(s){let o=document.createElement("div");o.id="sec-widgets",o.className="admin-widgets-page hud-page-stack lg:col-span-2";let p=location.origin+"/overlay";o.dataset.tpl="B",o.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${g(p)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${g(h("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${g(h("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,s.appendChild(o);let n=document.getElementById("widget-add"),t=o.querySelector("[data-ow-addmenu]");n.addEventListener("click",a=>{a.stopPropagation(),t.hidden=!t.hidden}),t.addEventListener("click",a=>{let i=a.target.closest("[data-ow-add]")?.dataset.owAdd;i&&(t.hidden=!0,O(i))}),document.addEventListener("click",a=>{!t.hidden&&!a.target.closest(".admin-ui-page-actions")&&(t.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",C),o.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let a=o.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(a).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),G()}async function A(s,o="GET",p=null){let n={method:o,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(p){let a=document.querySelector('meta[name="csrf-token"]');a&&(n.headers["X-CSRF-Token"]=a.content),n.body=JSON.stringify(p)}return(await fetch("/admin/widgets/"+s,n)).json()}async function G(){try{let s=await A("list");M(s.widgets||[])}catch(s){console.error("[admin-widgets] Load failed:",s)}}async function O(s){let o={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await A("create","POST",{type:s,config:o[s]||{}}),G()}catch(p){console.error("[admin-widgets] Create failed:",p)}}async function R(s){let o=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:o,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await A("delete","POST",{id:s}),G()}catch(n){console.error("[admin-widgets] Delete failed:",n)}}async function N(s,o){try{await A("update","POST",{id:s,config:o}),G()}catch(p){console.error("[admin-widgets] Update failed:",p)}}async function D(s,o,p){try{await A("score","POST",{id:s,team_index:o,delta:p}),G()}catch(n){console.error("[admin-widgets] Score update failed:",n)}}async function C(){let s=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:s,confirmLabel:ServerI18n.t("clearAll")}))try{await A("clear","POST",{}),G()}catch(p){console.error("[admin-widgets] Clear failed:",p)}}let y=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function M(s){let o=document.getElementById("widgets-list");if(o){if(o.innerHTML="",r(s),s.length===0){let p=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});p.dataset.emptyKind="widgets",o.appendChild(p);return}s.forEach(p=>{o.appendChild(E(p))})}}let _={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function x(s){return h("widgetPos_"+String(s||"top-left").replace("-","_"),s||"")}function T(s){let o=s.config||{},p="";s.type==="scoreboard"?p=(o.teams||[]).map(t=>`${t.name} ${t.score}`).join(" \xB7 "):s.type==="ticker"?(p=(o.messages||[])[0]||"",p&&(p=`\u300C${p}\u300D`)):s.type==="label"&&(p=o.text?`\u300C${o.text}\u300D`:"");let n=x(s.position);return p?`${p} \xB7 ${n}`:n}function H(s){return s==="scoreboard"?h("widgetScoreboard"):s==="ticker"?h("widgetTicker"):s==="label"?h("widgetLabel"):s}function E(s){let o=document.createElement("div");o.className="admin-widget-card",s.visible!==!1&&o.classList.add("is-on");let p=document.createElement("button");p.type="button",p.className="admin-widget-summary",p.setAttribute("aria-expanded","false"),p.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+g(_[s.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+g(H(s.type))+'</span><span class="admin-widget-summary-text">'+g(T(s))+"</span>"+(s.visible===!1?'<span class="admin-widget-summary-off">'+g(h("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',o.appendChild(p);let n=document.createElement("div");n.className="admin-widget-card-body",n.hidden=!0,p.addEventListener("click",()=>{n.hidden=!n.hidden,p.setAttribute("aria-expanded",n.hidden?"false":"true"),o.classList.toggle("is-open",!n.hidden)});let t=v(h("widgetPosition"),y,s.position,I=>N(s.id,{position:I}));n.appendChild(t),s.type==="scoreboard"?e(n,s):s.type==="ticker"?f(n,s):s.type==="label"&&m(n,s);let a=document.createElement("div");a.className="admin-widget-card-actions";let i=document.createElement("button");i.type="button",i.className="admin-ui-action admin-widget-card-action",i.textContent=s.visible?h("widgetHide"):h("widgetShow"),i.addEventListener("click",()=>N(s.id,{visible:!s.visible})),a.appendChild(i);let S=document.createElement("button");return S.type="button",S.className="admin-ui-action is-danger admin-widget-card-action",S.textContent=h("remove"),S.addEventListener("click",()=>R(s.id)),a.appendChild(S),n.appendChild(a),o.appendChild(n),o}let b={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function c(s,o){let p="top-left",n=1/0;for(let[t,[a,i]]of Object.entries(b)){let S=s-a/2,I=o-i/2,d=S*S+I*I;d<n&&(n=d,p=t)}return p}function l(s){let o=s.config||{};return s.type==="scoreboard"?(o.teams||[]).map(p=>`${p.name} ${p.score}`).join("  ")||h("widgetScoreboard"):s.type==="ticker"?(o.messages||[])[0]||h("widgetTicker"):s.type==="label"?o.text||h("widgetLabel"):s.type}function r(s){let o=document.querySelector("[data-ow-stage]");if(o){if(o.innerHTML="",!s.length){o.innerHTML='<span class="admin-ow-stage-empty">'+g(h("widgetsStageEmpty"))+"</span>";return}s.forEach(p=>{let n=document.createElement("div");n.className="admin-ow-box is-"+(p.position||"top-left"),p.visible===!1&&n.classList.add("is-off"),n.dataset.owBox=p.id,n.draggable=!0,n.textContent=l(p),n.title=H(p.type),n.addEventListener("dragend",t=>{let a=o.getBoundingClientRect();if(!a.width||!a.height)return;let i=(t.clientX-a.left)/a.width,S=(t.clientY-a.top)/a.height;if(i<0||i>1||S<0||S>1)return;let I=c(i,S);I!==p.position&&N(p.id,{position:I})}),o.appendChild(n)})}}function e(s,o){let p=o.config||{},n=w(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",p.title||"",t=>N(o.id,{title:t}));s.appendChild(n),(p.teams||[]).forEach((t,a)=>{let i=document.createElement("div");i.className="admin-widget-team";let S=document.createElement("input");S.type="color",S.value=t.color||"#38bdf8",S.className="admin-widget-team-color",S.addEventListener("change",()=>{let j=[...p.teams];j[a]={...j[a],color:S.value},N(o.id,{teams:j})}),i.appendChild(S);let I=document.createElement("input");I.type="text",I.value=t.name,I.className="admin-widget-input",I.addEventListener("change",()=>{let j=[...p.teams];j[a]={...j[a],name:I.value},N(o.id,{teams:j})}),i.appendChild(I);let d=document.createElement("span");d.className="admin-widget-team-score",d.textContent=t.score,i.appendChild(d);let k=document.createElement("button");k.type="button",k.className="admin-widget-step",k.textContent="\u2212",k.addEventListener("click",()=>D(o.id,a,-1)),i.appendChild(k);let L=document.createElement("button");L.type="button",L.className="admin-widget-step",L.textContent="+",L.addEventListener("click",()=>D(o.id,a,1)),i.appendChild(L),s.appendChild(i)})}function f(s,o){let p=o.config||{},n=document.createElement("div");n.className="admin-widget-row";let t=document.createElement("span");t.className="lbl",t.textContent=window.ServerI18n?.t?.("speed")||"SPEED",n.appendChild(t);let a=document.createElement("input");a.type="range",a.min="10",a.max="200",a.value=p.speed||60,a.style.flex="1",a.addEventListener("change",()=>{N(o.id,{speed:parseInt(a.value)})}),n.appendChild(a);let i=document.createElement("span");i.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",i.textContent=a.value,a.addEventListener("input",()=>{i.textContent=a.value}),n.appendChild(i),s.appendChild(n);let S=document.createElement("div");S.className="admin-widget-row",S.style.alignItems="flex-start";let I=document.createElement("span");I.className="lbl",I.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",S.appendChild(I);let d=document.createElement("textarea");d.className="admin-widget-textarea",d.value=(p.messages||[]).join(`
`),d.rows=3,d.placeholder=ServerI18n.t("widgetTickerPlaceholder"),d.addEventListener("change",()=>{let k=d.value.split(`
`).filter(L=>L.trim());N(o.id,{messages:k})}),S.appendChild(d),s.appendChild(S)}function m(s,o){let p=o.config||{};s.appendChild(w(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",p.text||"",n=>N(o.id,{text:n}))),s.appendChild(w(window.ServerI18n?.t?.("size")||"SIZE",String(p.fontSize||24),n=>N(o.id,{fontSize:parseInt(n)||24}),"number"))}function w(s,o,p,n="text"){let t=document.createElement("div");t.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,t.appendChild(a);let i=document.createElement("input");return i.type=n,i.value=o,i.className="admin-widget-input",i.addEventListener("change",()=>p(i.value)),t.appendChild(i),t}function v(s,o,p,n){let t=document.createElement("div");t.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,t.appendChild(a);let i=document.createElement("select");return i.className="admin-widget-select",o.forEach(S=>{let I=document.createElement("option");I.value=S,I.textContent=S,S===p&&(I.selected=!0),i.appendChild(I)}),i.addEventListener("change",()=>n(i.value)),t.appendChild(i),t}})})()});var un=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let g=["live","polls","moderation","viewer","widgets","effects","assets","system","history","notifications","audience","overlay","about"];function h(){let P=window.ADMIN_ROUTES||{},V={};return g.forEach(F=>{let U=P[F];U&&U.title&&(V[F]={title:U.title,kicker:U.kicker||F.toUpperCase()})}),V}let u=[{labelKey:"styleThemePacks",route:"viewer/themes",section:"sec-themes"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer/defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerTheme",route:"viewer/page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerLimits",route:"viewer/limits",section:"sec-viewer-config-limits"},{labelKey:"overlayLayoutFoldTitle",route:"overlay",section:"sec-overlay-layout"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],$=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function B(){let P=document.querySelector('meta[name="csrf-token"]');return P&&P.content||""}function A(P,V){if(typeof window.csrfFetch=="function")return window.csrfFetch(P,V);let F=Object.assign({credentials:"same-origin"},V||{}),U=new Headers(V&&V.headers||{});return U.set("X-CSRF-Token",B()),F.headers=U,fetch(P,F)}function G(P,V){typeof window.showToast=="function"&&window.showToast(P,V!==!1)}let O=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>A("/effects/reload",{method:"POST"}).then(P=>G(P.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),P.ok)).catch(()=>G(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>A("/admin/poll/reset",{method:"POST"}).then(P=>G(P.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),P.ok)).catch(()=>G(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return A("/admin/history/clear",{method:"POST"}).then(V=>G(V.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),V.ok)).catch(()=>G(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],R=null,N=null,D=null,C="",y=[],M=[],_=0,x=null,T=null,H=null,E=15e3;function b(P){return String(P??"").replace(/[&<>"']/g,V=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[V])}function c(P,V){if(!V)return 0;let F=String(P||"").toLowerCase(),U=V.toLowerCase(),ee=0,J=0,W=0,Z=0;for(;ee<F.length&&J<U.length;)F[ee]===U[J]?(J++,Z++,W+=2+Z):Z=0,ee++;return J<U.length?-1:(F.startsWith(U)&&(W+=10),W)}function l(){let P=document.createElement("div");P.className="admin-cmdk",P.setAttribute("hidden",""),P.setAttribute("aria-hidden","true"),P.innerHTML=`
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
    `,document.body.appendChild(P),R=P,N=P.querySelector(".admin-cmdk-input"),D=P.querySelector(".admin-cmdk-list"),P.addEventListener("click",V=>{V.target.matches("[data-cmdk-close]")&&L()}),N.addEventListener("input",V=>{C=V.target.value,S()}),N.addEventListener("keydown",r),D.addEventListener("click",V=>{let F=V.target.closest("[data-cmdk-idx]");F&&(_=parseInt(F.dataset.cmdkIdx,10)||0,f())})}function r(P){if(P.key==="Escape"){P.preventDefault(),L();return}if(P.key==="ArrowDown"){P.preventDefault(),e(1);return}if(P.key==="ArrowUp"){P.preventDefault(),e(-1);return}if(P.key==="Enter"){P.preventDefault(),f();return}}function e(P){if(!y.length)return;_=(_+P+y.length)%y.length,d();let V=D.querySelector(`[data-cmdk-idx="${_}"]`);V&&V.scrollIntoView({block:"nearest"})}function f(){let P=y[_];if(P){if(P.type==="route")window.location.hash="#/"+P.route,L();else if(P.type==="setting")window.location.hash="#/"+P.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let V=document.getElementById(P.section);V&&(V.scrollIntoView({behavior:"smooth",block:"start"}),V.tagName==="DETAILS"&&!V.open&&(V.open=!0))},80),L();else if(P.type==="message")window.location.hash="#/messages",L();else if(P.type==="user")window.location.hash="#/system",setTimeout(()=>{let V=document.getElementById("sec-fingerprints");V&&V.scrollIntoView({behavior:"smooth",block:"start"})},80),L();else if(P.type==="theme"){let V=window.AdminThemes;(V&&V.activate?V.activate(P.id):Promise.resolve({ok:!1})).then(F=>{F.ok?(G(ServerI18n.t("cmdkThemeApplied",{name:P.label}),!0),H=null):G(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>G(ServerI18n.t("cmdkThemeApplyFailed"),!1)),L()}else if(P.type==="action"){try{let V=P.action&&P.action();V&&typeof V.then=="function"&&V.catch(()=>{})}catch{}L()}}}let m={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function w(P){return Object.entries(h()).map(([V,F])=>{let U=Math.max(c(F.title,P),c(V,P)),ee=m[V];return{type:"route",route:V,label:F.title,sub:ee?ServerI18n.t(ee):"",icon:"\u25C7",score:U}}).filter(V=>V.score>=0)}function v(P){let V=h()[P];if(!V)return"";let F="adminRouteTitle_"+P,U=ServerI18n.t(F);return U!==F?U:V.title}function s(P){return u.map(V=>{let F=V.labelKey?ServerI18n.t(V.labelKey):V.label;return{type:"setting",route:V.route,tab:V.tab,section:V.section,label:v(V.route.split("/")[0])?`${v(V.route.split("/")[0])} \u203A ${F}`:F,sub:"",icon:"\u2699",score:c(F,P)}}).filter(V=>V.score>=0)}function o(P){return x?(x.records||[]).map(F=>{let U=F.text||F.message||"",ee=F.nickname||F.user||"guest",J=(F.timestamp||"").slice(11,19)||"\u2014",W=(F.fingerprint||F.fp||"").slice(0,8);return{type:"message",label:`${U}  \xB7  @${ee}`,sub:W?`${J} \xB7 fp:${W}`:J,icon:"\u{1F4AC}",score:Math.max(c(U,P),c(ee,P))}}).filter(F=>F.score>=0):[]}function p(P){if(!H)return[];let V=H.records||[],F=H.active||"";return V.map(U=>{let ee=U.label||U.display_name||U.name||"",J=U.description||ServerI18n.t("cmdkThemeDefaultDesc"),W=U.name===F;return{type:"theme",id:U.name,label:W?ServerI18n.t("cmdkThemeActive",{name:ee}):ee,sub:J,icon:"\u{1F3A8}",score:Math.max(c(ee,P),c(U.name||"",P),c(J,P))}}).filter(U=>U.score>=0)}function n(P){return O.map(V=>{let F=ServerI18n.t(V.labelKey),U=V.subKey?ServerI18n.t(V.subKey):V.sub;return{type:"action",id:V.id,label:F,sub:U,icon:"\u26A1",action:V.action,score:Math.max(c(F,P),c(V.id,P),c(U,P))}}).filter(V=>V.score>=0)}function t(P){return T?(T.records||[]).map(F=>{let U=F.fingerprint||F.fp||F.id||"",ee=F.ip||F.last_ip||"",J=F.nickname||"";return{type:"user",label:J?`@${J}  \xB7  ${U.slice(0,12)}\u2026`:`${U.slice(0,12)}\u2026`,sub:`user \xB7 ${ee||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(c(U,P),c(ee,P),c(J,P))}}).filter(F=>F.score>=0):[]}async function a(){let P=Date.now(),V=[];(!x||P-x.at>E)&&V.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(F=>F.ok?F.json():null).then(F=>{x={at:P,records:F&&F.records||[]}}).catch(()=>{x={at:P,records:[]}})),(!T||P-T.at>E)&&V.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(F=>F.ok?F.json():null).then(F=>{T={at:P,records:F&&F.records||[]}}).catch(()=>{T={at:P,records:[]}})),(!H||P-H.at>E)&&V.push(fetch("/admin/themes",{credentials:"same-origin"}).then(F=>F.ok?F.json():null).then(F=>{H={at:P,records:F&&F.themes||[],active:F&&F.active||""}}).catch(()=>{H={at:P,records:[],active:""}})),V.length&&await Promise.all(V)}let i={actions:5,pages:5,messages:4};async function S(){await a();let P=C.trim(),V={action:n(P),route:w(P),setting:s(P),theme:p(P),message:o(P),user:t(P)};y=[],M=[],$.forEach(F=>{let U=F.types.reduce((ee,J)=>ee.concat(V[J]||[]),[]).sort((ee,J)=>J.score-ee.score).slice(0,i[F.id]||5);U.length&&(M.push({id:F.id,labelKey:F.labelKey,from:y.length,count:U.length}),y=y.concat(U))}),_=0,d()}function I(P){return P.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[P.type]||"\xB7"}function d(){if(!y.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let P=[];M.forEach(V=>{P.push(`<li class="admin-cmdk-group" role="presentation">${b(ServerI18n.t(V.labelKey))}</li>`);for(let F=V.from;F<V.from+V.count;F++){let U=y[F],ee=F===_;P.push(`
        <li class="admin-cmdk-row ${ee?"is-active":""}"
            data-cmdk-idx="${F}" role="option" aria-selected="${ee}">
          <span class="admin-cmdk-icon" aria-hidden="true">${b(I(U))}</span>
          <span class="admin-cmdk-label">${b(U.label)}</span>
          <span class="admin-cmdk-sub">${b(U.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${ee?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=P.join("")}function k(){R||l(),R.removeAttribute("hidden"),R.setAttribute("aria-hidden","false"),R.classList.add("is-open"),C="",N.value="",S(),setTimeout(()=>N.focus(),20)}function L(){R&&(R.setAttribute("hidden",""),R.setAttribute("aria-hidden","true"),R.classList.remove("is-open"))}function j(){return!!(R&&!R.hasAttribute("hidden"))}window.AdminCommandPalette={open:k,close:L,isOpen:j,toggle:()=>j()?L():k()}})()});var mn=ye(()=>{(function(){"use strict";let g="sec-sessions-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},u={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function $(l){if(l=Number(l)||0,l<=0)return"\u2014";var r=Math.floor(l/3600),e=Math.floor(l%3600/60),f=l%60;return r>0?r+"h "+e+"m":e>0?e+"m":f+"s"}function B(l){if(!l)return"\u2014";try{var r=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return r.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function A(){return'<div id="'+g+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function G(){return'<div class="admin-sessions-th"><span>'+h(ServerI18n.t("sessionsColSession"))+"</span><span>"+h(ServerI18n.t("sessionsColMessages"))+"</span><span>"+h(ServerI18n.t("sessionsColViewers"))+"</span><span>"+h(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function O(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function R(){var l=document.getElementById("admin-sessions-table-body");if(l){if(u.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!u.sessions.length){l.innerHTML="";var r=window.AdminEmpty.render("sessions");r.dataset.emptyKind="sessions",l.appendChild(r);return}var e=u.sessions.map(function(f){var m=h(f.id||"");return'<div class="admin-sessions-tr'+(f.is_live?" is-live":"")+'" data-session-id="'+m+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(f.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+h(O(f))+'<span class="admin-sessions-td-sub">'+h(B(f.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(f.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(f.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+h($(f.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+m+'">'+h(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=G()+e}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!u.exportId){l.hidden=!0,l.innerHTML="";return}var r=u.sessions.find(function(f){return f.id===u.exportId});if(!r){u.exportId=null,l.hidden=!0,l.innerHTML="";return}var e=N.map(function(f){return'<button type="button" class="admin-sx-export__seg'+(f.id===u.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+f.id+'" aria-pressed="'+(f.id===u.exportFormat?"true":"false")+'">'+h(ServerI18n.t(f.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+h(ServerI18n.t("sessionsExportTitle",{name:O(r)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+h(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+e+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(u.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+h(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+h(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+h(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+h(ServerI18n.t("sessionsDownloadBtn",{fmt:u.exportFormat.toUpperCase()}))+"</button></div>"}}function C(){if(u.exportId){var l="/admin/sessions/"+encodeURIComponent(u.exportId)+"/export?format="+encodeURIComponent(u.exportFormat)+"&include_pii="+(u.exportPii?"1":"0"),r=document.createElement("a");r.href=l,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove()}}async function y(){var l=u.exportId;if(l)try{var r=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);var e=await r.json(),f=(e.records||[]).slice(0,500);if(!f.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var m=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:f,speedMultiplier:1})});if(m.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function M(){R(),D()}async function _(){u.loading=!0,R();try{var[l,r]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),e=[],f=[];if(l.ok){var m=await l.json();e=Array.isArray(m.sessions)?m.sessions:[],e.forEach(function(t){t._explicit=!0})}if(r.ok){var w=await r.json();f=Array.isArray(w.sessions)?w.sessions:[]}var v=e.slice(),s=new Set(e.map(function(t){return t.id}));f.forEach(function(t){s.has(t.id)||v.push(t)}),v.sort(function(t,a){var i=typeof t.started_at=="number"?t.started_at:Date.parse(t.started_at||0),S=typeof a.started_at=="number"?a.started_at:Date.parse(a.started_at||0);return S-i});try{var o=await fetch("/admin/session/current",{credentials:"same-origin"});if(o.ok){var p=await o.json();if(p.status==="live"){var n=Object.assign({},p,{id:p.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});v.unshift(n)}}}catch{}u.sessions=v,u.total=v.length}catch(t){console.error("[admin-sessions] fetch error:",t),u.sessions=[],u.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:t.message||""}),!1)}finally{u.loading=!1,M()}}function x(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function T(l){u.exportId=l,D();var r=document.querySelector("[data-sessions-export]");r&&r.scrollIntoView({block:"nearest"})}function H(){var l=document.getElementById(g);l&&(l.addEventListener("click",function(r){var e=r.target.closest("[data-sessions-export-open]");if(e){r.stopPropagation(),T(e.dataset.sessionsExportOpen);return}if(r.target.closest("[data-sessions-export-close]")){u.exportId=null,D();return}var f=r.target.closest("[data-sessions-export-fmt]");if(f){u.exportFormat=f.dataset.sessionsExportFmt,D();return}if(r.target.closest("[data-sessions-replay]")){y();return}if(r.target.closest("[data-sessions-download]")){C();return}var m=r.target.closest(".admin-sessions-tr");m&&x(m.dataset.sessionId||null)}),l.addEventListener("change",function(r){var e=r.target.closest("[data-sessions-export-pii]");e&&(u.exportPii=!!e.checked)}),l.addEventListener("keydown",function(r){if(!(r.key!=="Enter"&&r.key!==" ")){var e=r.target.closest(".admin-sessions-tr");e&&(r.preventDefault(),x(e.dataset.sessionId||null))}}))}function E(){var l=document.querySelector(".admin-dash-grid"),r=document.getElementById(g);if(!(!l||!r)){var e=l.dataset.activeLeaf||"dashboard";r.style.display=e==="sessions"?"":"none"}}function b(){var l=document.getElementById("settings-grid");!l||document.getElementById(g)||(l.insertAdjacentHTML("beforeend",A()),H(),_(),E())}function c(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&b(),E()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",E),document.addEventListener("admin-panel-rendered",function(){b(),E()}),b()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var pn=ye(()=>{(function(){"use strict";let g="sec-session-detail-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},u={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},$=!1,B={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function A(){let I=window.location.hash||"",d=I.indexOf("?");if(d===-1)return null;let k=I.slice(d+1);return new URLSearchParams(k).get("id")||null}function G(I){if(!I)return"\u2014";try{let d=new Date(I);if(isNaN(d.getTime()))return String(I);let k=L=>String(L).padStart(2,"0");return`${d.getFullYear()}-${k(d.getMonth()+1)}-${k(d.getDate())} ${k(d.getHours())}:${k(d.getMinutes())}:${k(d.getSeconds())}`}catch{return String(I)}}function O(I){if(!I||I<0)return"\u2014";let d=Math.round(Number(I)),k=Math.floor(d/3600),L=Math.floor(d%3600/60),j=d%60;return k>0?`${k}h ${L}m ${j}s`:L>0?`${L}m ${j}s`:`${j}s`}function R(I,d){if(!I||!d)return"";try{let k=Math.max(0,Math.round((new Date(I)-new Date(d))/1e3)),L=Math.floor(k/60),j=k%60;return`+${String(L).padStart(2,"0")}:${String(j).padStart(2,"0")}`}catch{return""}}function N(I){let d=Number(I);return isNaN(d)?"\u2014":d.toLocaleString()}function D(I){if(!I)return"#64748b";let d=0;for(let L=0;L<I.length;L++)d=d*31+I.charCodeAt(L)>>>0;return`hsl(${d%360}, 60%, 60%)`}function C(){return`
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
    `}async function y(I){if(!I){E(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let d=await fetch(`/admin/sessions/${encodeURIComponent(I)}`,{credentials:"same-origin"});if(d.status===404&&(d=await fetch(`/admin/session/archive/${encodeURIComponent(I)}`,{credentials:"same-origin"})),!d.ok)throw new Error(`HTTP ${d.status}`);let k=await d.json();u.session=k.session||null,u.records=k.records||[],u.density=k.density||[],H(!1),b(),M()}catch(d){H(!1),E(ServerI18n.t("sessionDetailErrLoadFailed",{msg:d.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function M(){if(u.sessionId)try{let I=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(u.sessionId)}`,{credentials:"same-origin"});if(!I.ok)return;let d=await I.json();u.annotations=Array.isArray(d.annotations)?d.annotations:[],m()}catch{}}function _(){let I=u.session;if(!I)return 0;if(I.duration_s)return Math.round(I.duration_s*1e3);if(I.duration)return Math.round(I.duration*1e3);let d=I.started_at||I.start_time,k=I.ended_at||I.end_time;if(d&&k)try{return Math.max(0,new Date(k)-new Date(d))}catch{return 0}return u.density&&u.density.length?u.density.length*60*1e3:0}function x(I){let d=Date.parse(I||0);if(Number.isNaN(d))return"\u2014";let k=new Date(d),L=j=>String(j).padStart(2,"0");return`${L(k.getHours())}:${L(k.getMinutes())}:${L(k.getSeconds())}`}function T(I){let d=Math.floor(I/1e3),k=Math.floor(d/3600),L=Math.floor(d%3600/60),j=d%60,P=V=>String(V).padStart(2,"0");return k>0?`${P(k)}:${P(L)}:${P(j)}`:`${P(L)}:${P(j)}`}function H(I){u.loading=I;let d=document.querySelector("[data-sd-loading]"),k=document.querySelector("[data-sd-error]");d&&(d.hidden=!I),k&&I&&(k.hidden=!0);let L=document.querySelector("[data-sd-timeline-wrap]");if(L&&window.AdminSkeletons){let j=L.querySelector("[data-sd-timeline-skel]");I?(L.hidden=!1,j||(j=window.AdminSkeletons.chart(),j.setAttribute("data-sd-timeline-skel","1"),L.appendChild(j))):j&&j.remove()}}function E(I){u.error=I;let d=document.querySelector("[data-sd-error]"),k=document.querySelector("[data-sd-error-msg]");d&&(d.hidden=!1),k&&(k.textContent=I),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(L){let j=document.querySelector(`[${L}]`);j&&(j.hidden=!0)})}function b(){c(),l(),r(),f(),m();let I=document.querySelector("[data-sd-error]");I&&(I.hidden=!0)}function c(){let I=u.session,d=document.querySelector("[data-sd-session-header]");if(!d)return;d.hidden=!1;let k=document.querySelector("[data-sd-session-id]"),L=document.querySelector("[data-sd-meta-start]"),j=document.querySelector("[data-sd-meta-duration]"),P=document.querySelector("[data-sd-title]"),V=I&&(I.session_id||I.id)||u.sessionId||"\u2014";k&&(k.textContent=V),L&&(L.textContent=G(I&&(I.started_at||I.start_time))),j&&(j.textContent=O(I&&(I.duration_s||I.duration))),P&&(P.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(V).slice(-8)}))}function l(){let I=u.session;if(!I)return;let d=document.querySelector("[data-sd-kpis]");d&&(d.hidden=!1);let k=function(V,F,U){let ee=document.querySelector(`[data-sd-stat="${V}"]`);ee&&(ee.textContent=F);let J=document.querySelector(`[data-sd-stat-sub="${V}"]`);J&&(J.textContent=U||"")};k("msg_count",N(I.msg_count)),k("viewer_count",N(I.viewer_count));let L=Array.isArray(u.density)?u.density:[];if(L.length){let V=0,F=0;L.forEach(function(J,W){J>V&&(V=J,F=W)});let U=Date.parse(I.started_at||I.start_time||0),ee="";if(!Number.isNaN(U)){let J=new Date(U+F*6e4),W=Z=>String(Z).padStart(2,"0");ee=`${W(J.getHours())}:${W(J.getMinutes())}`}k("peak",N(V),ee)}else k("peak","\u2014","");let j=Number(I.blocked_count)||0;k("blocked",N(j));let P=document.querySelector("[data-sd-blocked-btn]");P&&(P.textContent=ServerI18n.t("sessionDetailStatBlocked")+(j?" "+j:""),P.disabled=j===0)}function r(){let I=document.querySelector("[data-sd-timeline-wrap]"),d=document.querySelector("[data-sd-timeline]"),k=document.querySelector("[data-sd-timeline-axis]"),L=document.querySelector("[data-sd-peak-label]");if(!I||!d||!k)return;let j=u.density;if(!j||j.length===0){I.hidden=!0;return}I.hidden=!1;let P=Math.max(1,...j),V=0;j.forEach(function(Z,K){Z>j[V]&&(V=K)});let F=j.map(function(Z,K){let Y=Math.max(2,Math.round(Z/P*100));return`<div class="admin-sd-bar${K===V?" is-peak":""}" style="height:${Y}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:Z,minute:K+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:Z})}"></div>`}).join("");d.innerHTML=F;let U=u.session,ee=G(U&&(U.started_at||U.start_time)).slice(11,16)||"00:00",J=G(U&&(U.ended_at||U.end_time)).slice(11,16)||"",W=j.length>2?`+${Math.round(j.length/2)}min`:"";k.innerHTML=`
      <span class="admin-sd-axis-label">${h(ee)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${h(W)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${h(J)}</span>
    `,L&&(L.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:j[V],minute:V}))}function e(){let I=(u.msgQuery||"").trim().toLowerCase();return u.records.filter(function(d){let k=(d.status||"shown")==="blocked";return u.msgFilter==="blocked"&&!k?!1:I?String(d.text||"").toLowerCase().indexOf(I)!==-1||String(d.nickname||"").toLowerCase().indexOf(I)!==-1:!0})}function f(){let I=document.querySelector("[data-sd-msgs-wrap]"),d=document.querySelector("[data-sd-msgs-list]");if(!I||!d)return;if(!u.records.length){I.hidden=!0;return}I.hidden=!1;let k=e().slice(0,300);if(!k.length){d.innerHTML='<div class="admin-sd-msgs-empty">'+h(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}d.innerHTML=k.map(function(L){let j=(L.status||"shown")==="blocked",P=D(L.fingerprint||L.fp||""),V=x(L.timestamp||L.created_at),F=String(L.nickname||"").trim();return`
        <div class="admin-sd-msg-row${j?" is-blocked":""}">
          <span class="admin-sd-msg-time">${h(V)}</span>
          <span class="admin-sd-msg-dot" style="background:${P}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${h(L.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${h(ServerI18n.t("deliveryStatus_"+(L.status||"shown")))}
            ${L.delivery_reason?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("deliveryReason_"+L.delivery_reason))}</span>`:""}
            ${j&&L.blockedBy?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("sessionDetailBlockedBy",{rule:L.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${h(F||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function m(){let I=u.annotations||[],d=_(),k=document.querySelector("[data-sd-ann-count]");k&&(k.textContent=I.length?`${I.length} ANNOTATIONS`:"");let L=document.querySelector("[data-sd-ann-head]");L&&(L.textContent=I.length?`ANNOTATIONS \xB7 ${I.length}`:"ANNOTATIONS");let j=document.querySelector("[data-sd-ann-layer]");j&&(!d||I.length===0?j.innerHTML="":j.innerHTML=I.map(function(F){let U=B[F.label]||B.note,ee=Math.min(100,Math.max(0,F.ts_ms/d*100)),J=F.id===u.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${U.shape}${J?" is-active":""}"
              data-sd-ann-marker="${h(F.id)}"
              style="left:${ee.toFixed(2)}%;--ann-color:${U.color}"
              title="${h(U.label)} \xB7 ${T(F.ts_ms)}"
              aria-label="${h(U.label)} at ${T(F.ts_ms)}: ${h(F.note||"")}">
              ${U.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${J?`<span class="admin-sd-ann-tip"><span style="color:${U.color}">${U.icon}</span> ${h((F.note||"").slice(0,40))}${(F.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let P=document.querySelector("[data-sd-ann-legend]");P&&(P.innerHTML=Object.keys(B).map(function(F){let U=B[F],ee=U.shape==="square"?"2px":U.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${U.color};border-radius:${ee}"></span>
          <span class="admin-sd-ann-legend-label">${U.label}</span>
        </span>`}).join(""));let V=document.querySelector("[data-sd-ann-list]");if(V){if(I.length===0){V.innerHTML="";let F=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});F.dataset.emptyKind="session-annotations",V.appendChild(F);return}V.innerHTML=I.map(function(F){let U=B[F.label]||B.note,ee=F.id===u.activeAnnId,W=(F.note||"").length>80?(F.note||"").slice(0,80)+"\u2026":F.note||"";return`
        <div class="admin-sd-ann-row${ee?" is-active":""}" data-sd-ann-row="${h(F.id)}">
          <span class="admin-sd-ann-ts" style="color:${U.color}">${T(F.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${U.color}">${U.icon} ${U.label}</span>
          <span class="admin-sd-ann-note">${h(W)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${h(F.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function w(I){if(!u.sessionId)return;let d=window.HudConfirm;if(!d){let U=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:T(I)}),"");U!=null&&U.trim()&&v(I,"note",U.trim());return}let L="highlight",j="",P=document.createElement("div");P.className="admin-sd-ann-modal-body",P.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${T(I)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(B).map(function(U){let ee=B[U];return`
              <button type="button" class="admin-sd-ann-modal-lbl${U==="highlight"?" is-active":""}"
                data-ann-label="${U}" style="--ann-color:${ee.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${ee.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${ee.label}</span>
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
      </div>`,P.addEventListener("click",function(U){let ee=U.target.closest("[data-ann-label]");ee&&(L=ee.dataset.annLabel,P.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(J){J.classList.toggle("is-active",J===ee)}))});let V=P.querySelector("[data-ann-modal-note]"),F=P.querySelector("[data-ann-modal-counter]");V.addEventListener("input",function(){j=V.value,F.textContent=`${j.length} / 280`}),setTimeout(function(){V&&V.focus()},50),d.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:P,width:460}).then(function(U){U&&v(I,L,V.value.trim())})}async function v(I,d,k){if(u.sessionId)try{let L=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:u.sessionId,ts_ms:Math.max(0,Math.round(I)),label:d||"note",note:k||""})});if(!L.ok)throw new Error(`HTTP ${L.status}`);let j=await L.json();j.annotation&&(u.annotations.push(j.annotation),u.annotations.sort(function(P,V){return P.ts_ms-V.ts_ms}),u.activeAnnId=j.annotation.id,m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(L){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:L.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function s(I){if(I)try{let d=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(I)}`,{method:"DELETE",credentials:"same-origin"});if(!d.ok)throw new Error(`HTTP ${d.status}`);u.annotations=u.annotations.filter(function(k){return k.id!==I}),u.activeAnnId===I&&(u.activeAnnId=null),m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(d){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:d.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function o(I){let d=document.querySelector("[data-sd-timeline-inner]"),k=document.querySelector("[data-sd-ann-hover]");if(!d||!k)return;let L=d.getBoundingClientRect();if(!L.width)return;let j=I.clientX-L.left,P=Math.min(1,Math.max(0,j/L.width)),V=_();if(!V){k.hidden=!0;return}let F=Math.round(P*V);u.hoverTsMs=F,k.hidden=!1,k.style.left=`${(P*100).toFixed(2)}%`,k.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:T(F)})}function p(){let I=document.querySelector("[data-sd-ann-hover]");I&&(I.hidden=!0),u.hoverTsMs=null}function n(I){if(I.target.closest("[data-sd-ann-marker]"))return;let d=document.querySelector("[data-sd-timeline-inner]");if(!d)return;let k=d.getBoundingClientRect();if(!k.width)return;let L=I.clientX-k.left,j=Math.min(1,Math.max(0,L/k.width)),P=_();P&&w(Math.round(j*P))}async function t(){if(u.sessionId)try{let I=u.records.slice(0,500);if(!I.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let d=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:I,speedMultiplier:1})});if(d.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!d.ok)throw new Error("HTTP "+d.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function a(I,d){if(I==="back")window.location.hash="#/history/sessions";else if(I==="retry")u.sessionId&&y(u.sessionId);else if(I==="export"){if(!u.sessionId)return;let k=document.createElement("a");k.href="/admin/sessions/"+encodeURIComponent(u.sessionId)+"/export?format=csv",k.rel="noopener",document.body.appendChild(k),k.click(),k.remove()}else if(I==="replay")t();else if(I==="add-annotation"){let k=_(),L=u.hoverTsMs!=null?u.hoverTsMs:Math.round(k/2);w(L)}}function i(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let d=A();if(!d){u.sessionId=null,E(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}u.sessionId=d,y(d)}function S(){let I=document.getElementById("settings-grid");if(!I)return;let d=document.getElementById(g);d||(I.insertAdjacentHTML("beforeend",C()),d=document.getElementById(g),m()),d&&d.dataset.sdBound!=="1"&&(d.dataset.sdBound="1",d.addEventListener("click",function(k){let L=k.target.closest("[data-sd-ann-del]");if(L){k.stopPropagation(),s(L.dataset.sdAnnDel);return}let j=k.target.closest("[data-sd-ann-marker]");if(j){k.stopPropagation(),u.activeAnnId=j.dataset.sdAnnMarker,m();let ee=document.querySelector(`[data-sd-ann-row="${u.activeAnnId}"]`);ee&&ee.scrollIntoView&&ee.scrollIntoView({block:"nearest",behavior:"smooth"});return}let P=k.target.closest("[data-sd-ann-row]");if(P){u.activeAnnId=P.dataset.sdAnnRow,m();return}if(k.target.closest("[data-sd-timeline-inner]")){n(k);return}let F=k.target.closest("[data-sd-action]");if(F){k.preventDefault(),a(F.dataset.sdAction,F);return}let U=k.target.closest("[data-sd-filter]");U&&(u.msgFilter=U.dataset.sdFilter,d.querySelectorAll("[data-sd-filter]").forEach(function(ee){ee.classList.toggle("is-active",ee===U)}),f())}),d.addEventListener("input",function(k){let L=k.target.closest("[data-sd-search]");L&&(u.msgQuery=L.value||"",f())}),d.addEventListener("mousemove",function(k){k.target.closest("[data-sd-timeline-inner]")&&o(k)}),d.addEventListener("mouseleave",function(k){k.target.closest&&k.target.closest("[data-sd-timeline-inner]")&&p()},!0)),u.sessionId=A(),u.sessionId?y(u.sessionId):E(ServerI18n.t("sessionDetailErrNoSessionSelected")),$||($=!0,window.addEventListener("hashchange",i))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let d=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(g)&&d.indexOf("/session-detail")!==-1&&S(),window.addEventListener("admin-route-changed",function(k){(k&&k.detail&&k.detail.route)==="session-detail"&&S()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&S()})})})()});var fn=ye(()=>{(function(){"use strict";let g="sec-search-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},u=20,$={query:"",scope:"session",blockedOnly:!1,who:"",shown:u,results:[],total:0,loading:!1,searched:!1},B=0;function A(){return'<div id="'+g+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+h(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+h(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+h(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+h(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+h(ServerI18n.t("searchWhoAria"))+'"><option value="">'+h(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+h(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+h(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function G(e){if(!e)return 200;for(var f=0,m=0;m<Math.min(e.length,6);m++)f=f*31+e.charCodeAt(m)&65535;return f%360}function O(e,f){if(!f||!e)return h(e||"");var m=h(e),w=h(f);try{var v=new RegExp("("+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return m.replace(v,'<mark class="admin-search-hit">$1</mark>')}catch{return m}}function R(e){if(!e)return"\u2014";try{var f=new Date(e);return f.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return e}}function N(){var e=$.results;return $.blockedOnly&&(e=e.filter(function(f){return(f.status||"shown")==="blocked"})),$.who&&(e=e.filter(function(f){return(f.nickname||"")===$.who})),e}function D(){var e=document.getElementById("admin-search-count");if(e){if(!$.searched||!$.query.trim()){e.textContent="";return}e.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function C(){var e=document.querySelector("[data-search-who]");if(e){var f=[];$.results.forEach(function(w){var v=(w.nickname||"").trim();v&&f.indexOf(v)===-1&&f.push(v)}),f.sort();var m=$.who;e.innerHTML='<option value="">'+h(ServerI18n.t("searchWhoAnyone"))+"</option>"+f.map(function(w){return'<option value="'+h(w)+'"'+(w===m?" selected":"")+">"+h(w)+"</option>"}).join("")}}function y(){var e=document.getElementById("admin-search-results"),f=document.getElementById("admin-search-empty-state"),m=document.getElementById("admin-search-export-btn");if(e){e.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(n){n.remove()});var w=function(n){f&&(f.style.display="block",f.textContent=n),m&&(m.hidden=!0)};if($.loading)return w(ServerI18n.t("searchSearching"));if(!$.searched)return w(ServerI18n.t("searchPromptStart"));var v=N();if(v.length===0)return w(ServerI18n.t("searchNoMatch"));f&&(f.style.display="none"),m&&(m.hidden=!1);var s=Math.min(v.length,$.shown),o=document.createDocumentFragment();if(v.slice(0,s).forEach(function(n){var t=document.createElement("div");t.className="admin-search-row",t.innerHTML='<span class="admin-search-row__ts">'+h(R(n.timestamp))+'</span><span class="admin-search-row__text">'+O(n.text||"",$.query)+'</span><span class="admin-search-row__nick">'+h((n.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+h(ServerI18n.t("deliveryStatus_"+(n.status||"shown")))+(n.delivery_reason?"<br>"+h(ServerI18n.t("deliveryReason_"+n.delivery_reason)):"")+"</span></span>",o.appendChild(t)}),e.appendChild(o),v.length>s){var p=document.createElement("button");p.type="button",p.className="admin-search-more",p.dataset.searchMore="1",p.textContent=ServerI18n.t("searchMoreLeft",{n:v.length-s}),e.appendChild(p)}}}function M(){D(),C(),y()}async function _(){var e=$.query.trim();if(!e){$.loading=!1,$.searched=!1,$.results=[],$.total=0,M();return}$.loading=!0,M();try{var f="/admin/search?q="+encodeURIComponent(e);if($.scope==="session"){var m=await T();m&&(f+="&since="+encodeURIComponent(m))}var w=Date.now(),v=await fetch(f,{credentials:"same-origin"}),s=Date.now()-w;if(!v.ok)throw new Error("HTTP "+v.status);var o=await v.json();$.results=Array.isArray(o.results)?o.results:[],$.total=typeof o.total=="number"?o.total:$.results.length,$.shown=u}catch(p){console.error("[admin-search] fetch error:",p),$.results=[],$.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:p.message||""}),!1)}finally{$.loading=!1,$.searched=!0,M()}}var x=null;async function T(){if(x!==null)return x;try{var e=await fetch("/admin/session/current",{credentials:"same-origin"});if(e.ok){var f=await e.json();if(f.status==="live"&&f.started_at)return x=new Date(f.started_at*1e3).toISOString(),x}}catch{}return x="",""}function H(){clearTimeout(B),B=setTimeout(_,300)}function E(){if($.results.length){var e=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];$.results.forEach(function(v){var s=[v.nickname||"",v.fingerprint||"",v.timestamp||"",v.status||"",v.text||"",v.delivery_reason||""].map(function(o){return'"'+window.AdminUtils.csvSafeText(o).replace(/"/g,'""')+'"'});e.push(s.join(","))});var f=new Blob(["\uFEFF"+e.join(`
`)],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(f),w=document.createElement("a");w.href=m,w.download="danmu-search-"+($.query||"export")+".csv",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(m)}}function b(){var e=document.getElementById(g);if(e){var f=document.getElementById("admin-search-input");f&&(f.addEventListener("input",function(){$.query=f.value,H()}),f.addEventListener("keydown",function(w){w.key==="Enter"&&(clearTimeout(B),$.query=f.value,_())})),e.addEventListener("click",function(w){var v=w.target.closest("[data-search-scope]");if(v){$.scope=v.dataset.searchScope,e.querySelectorAll("[data-search-scope]").forEach(function(o){o.classList.toggle("is-active",o===v)}),$.query.trim()&&H();return}var s=w.target.closest("[data-search-blocked]");if(s){$.blockedOnly=!$.blockedOnly,s.classList.toggle("is-active",$.blockedOnly),$.shown=u,M();return}if(w.target.closest("[data-search-more]")){$.shown+=u,y();return}}),e.addEventListener("change",function(w){var v=w.target.closest("[data-search-who]");v&&($.who=v.value||"",$.shown=u,M())});var m=document.getElementById("admin-search-export-btn");m&&m.addEventListener("click",E)}}function c(){var e=document.querySelector(".admin-dash-grid"),f=document.getElementById(g);if(!(!e||!f)){var m=e.dataset.activeLeaf||"dashboard";f.style.display=m==="search"?"":"none"}}function l(){var e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",A()),b(),c())}function r(){if(window.DANMU_CONFIG?.session?.logged_in){var e=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&l(),c()});e.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",c),document.addEventListener("admin-panel-rendered",function(){l(),c()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var vn=ye(()=>{(function(){"use strict";let g="sec-api-tokens-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},u=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],$=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],B={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function A(n){if(!n)return"\u2014";try{let t=new Date(n);if(isNaN(t.getTime()))return String(n);let a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`}catch{return String(n)}}function G(n){if(!n)return null;try{let t=new Date(n);if(isNaN(t.getTime()))return null;let a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())} ${a(t.getHours())}:${a(t.getMinutes())}`}catch{return null}}function O(n){let t=Number(n);return isNaN(t)?"0":t.toLocaleString()}function R(n){if(!n||n.enabled===!1)return"inactive";if(!n.expires_at)return"active";try{let t=new Date(n.expires_at).getTime(),a=Date.now();if(t<a)return"expired";if(t-a<168*3600*1e3)return"expiring"}catch{}return"active"}function N(n){if(!n)return 1/0;try{return Math.floor((Date.now()-new Date(n).getTime())/864e5)}catch{return 1/0}}function D(n){return!n||!n.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':n.map(function(t){let a="admin-ui-pill admin-at-scope-badge";return t==="admin:*"?a+=" is-danger":t.startsWith("fire:")?a+=" is-warn":t.startsWith("read:stats")?a+=" is-cyan":a+=" is-success",`<span class="${a}">${h(t)}</span>`}).join(" ")}function C(n){let t="admin-ui-dot admin-at-dot";return n==="active"?t+=" is-success":n==="expiring"?t+=" is-warn":n==="expired"?t+=" is-danger":t+=" is-muted",`<span class="${t}" aria-hidden="true"></span>`}function y(){let n=u.map(function(a){let i=a.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",I=`admin-ui-pill admin-at-scope-badge is-${a.badge==="red"?"danger":a.badge==="amber"?"warn":a.badge==="green"?"success":a.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${h(a.id)}"
          >
          <span class="${I}">${h(a.badgeTxt)}</span>
          <span class="admin-at-scope-label">${h(ServerI18n.t(a.labelKey))}</span>
          ${i}
        </label>
      `}).join(""),t=$.map(function(a){let i=a.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${a.days!==null?String(a.days):"null"}" ${i} class="sr-only">
          <span>${h(ServerI18n.t(a.labelKey))}</span>
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
                    ${t}
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
    `}async function M(){H(!0);try{let n=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let t=await n.json();B.tokens=t.tokens||t||[],b()}catch(n){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function _(n){B.creating=!0,E(!0),f();try{let t=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok){let S=await t.json().catch(()=>({}));throw new Error(S.error||S.message||`HTTP ${t.status}`)}let a=await t.json(),i=a.token||a.raw_token||a.access_token||null;B.newTokenRaw=i,c(i),r(),await M(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(t){e(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:t.message||""}),!1)}finally{B.creating=!1,E(!1)}}async function x(n,t){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${h(t||n)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let i=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(n)}`,{method:"DELETE"});if(!i.ok){let S=await i.json().catch(()=>({}));throw new Error(S.error||S.message||`HTTP ${i.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await M()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:i.message||""}),!1)}}async function T(n,t){try{let a=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(n)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!a.ok){let i=await a.json().catch(()=>({}));throw new Error(i.error||i.message||`HTTP ${a.status}`)}window.showToast&&window.showToast(t?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await M()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:a.message||""}),!1)}}function H(n){let t=document.querySelector("[data-at-list-loading]");t&&(t.hidden=!n)}function E(n){let t=document.getElementById("adminAtSubmitBtn");t&&(t.disabled=n,t.textContent=n?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function b(){let n=B.tokens,t=document.querySelector("[data-at-empty]"),a=document.querySelector("[data-at-table-wrap]"),i=document.querySelector("[data-at-tbody]");if(!(!t||!a||!i)){if(!n||n.length===0){if(!t.firstElementChild&&window.AdminEmpty){let S=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});S.dataset.emptyKind="api-tokens",t.appendChild(S)}t.hidden=!1,a.hidden=!0;return}t.hidden=!0,a.hidden=!1,i.innerHTML=n.map(function(S){let I=R(S),d=C(I),k=S.scopes||S.scope||[],L=Array.isArray(k)?k:String(k).split(",").map(ee=>ee.trim()).filter(Boolean),P=N(S.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",V=I==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",F=I==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",U=S.last_used_at?`${G(S.last_used_at)||A(S.last_used_at)}<br><span class="admin-at-ip">${h(S.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${h(S.id||S.token_id||"")}">
          <td class="admin-at-td-label">
            ${d}
            <span class="admin-at-label-text">${h(S.label||S.name||"\u2014")}</span>
            ${P}${V}${F}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${h(S.prefix||S.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(L)}</div>
          </td>
          <td class="admin-at-td-used">${U}</td>
          <td class="admin-at-td-usage">${O(S.usage_count||S.use_count)}</td>
          <td class="admin-at-td-created">${A(S.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${h(S.id||S.token_id||"")}"
              data-token-enabled="${S.enabled===!1?"0":"1"}"
              title="${S.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${S.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${h(S.id||S.token_id||"")}"
              data-token-label="${h(S.label||S.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function c(n){let t=document.getElementById("adminAtSuccessBanner"),a=document.getElementById("adminAtTokenDisplay"),i=document.getElementById("adminAtCreateForm");t&&(t.hidden=!1),a&&n&&(a.value=n),i&&(i.style.opacity="0.5"),t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let n=document.getElementById("adminAtSuccessBanner"),t=document.getElementById("adminAtCreateForm");n&&(n.hidden=!0),t&&(t.style.opacity=""),B.newTokenRaw=null}function r(){let n=document.getElementById("adminAtCreateForm");n&&n.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(i){i.classList.remove("is-active")});let t=document.querySelector("input[name='adminAtExpiry'][value='90']");if(t){t.checked=!0;let i=t.closest(".admin-at-expiry-btn");i&&i.classList.add("is-active")}let a=document.getElementById("adminAtAdminWarn");a&&(a.hidden=!0),f()}function e(n){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!1,t.textContent=n)}function f(){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!0,n.textContent="")}function m(){let n=document.getElementById("adminAtLabel"),t=n?n.value.trim():"",a=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(d){a.push(d.value)});let i=document.querySelector("input[name='adminAtExpiry']:checked"),S=i?i.value:"90",I=S==="null"?null:parseInt(S,10);return{label:t,scopes:a,expiry_days:I}}function w(n){return n.label?n.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!n.scopes||n.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function v(n){if(n.preventDefault(),B.creating)return;f();let t=m(),a=w(t);if(a){e(a);return}_(t)}function s(){let n=B.newTokenRaw;if(!n)return;let t=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(n).then(function(){t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let a=document.getElementById("adminAtTokenDisplay");a&&(a.select(),document.execCommand("copy")),t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function o(){let n=document.getElementById(g);if(!n)return;n.addEventListener("click",function(S){let I=S.target.closest("[data-at-action]");if(I){let k=I.dataset.atAction;if(k==="revoke"){let L=I.dataset.tokenId,j=I.dataset.tokenLabel;x(L,j)}else if(k==="toggle"){let L=I.dataset.tokenId,j=I.dataset.tokenEnabled==="1";T(L,!j)}else k==="copy-token"&&s();return}let d=S.target.closest(".admin-at-expiry-btn");d&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(k){k.classList.remove("is-active")}),d.classList.add("is-active"))});let t=document.getElementById("adminAtScope_admin__");t&&t.addEventListener("change",function(){let S=document.getElementById("adminAtAdminWarn");S&&(S.hidden=!t.checked)});let a=document.getElementById("adminAtCreateForm");a&&a.addEventListener("submit",v);let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){let S=i.closest(".admin-at-expiry-btn");S&&S.classList.add("is-active")}}function p(){let n=document.getElementById("settings-grid");!n||document.getElementById(g)||(n.insertAdjacentHTML("beforeend",y()),o(),M())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&p()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&p()})})()});var hn=ye(()=>{(function(){"use strict";let g="sec-wcag-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})};function u(r){let e=r.replace(/^#/,""),f=e.length===3?e.split("").map(function(m){return m+m}).join(""):e;return[parseInt(f.slice(0,2),16)/255,parseInt(f.slice(2,4),16)/255,parseInt(f.slice(4,6),16)/255]}function $(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function B(r){let e=u(r);return .2126*$(e[0])+.7152*$(e[1])+.0722*$(e[2])}function A(r,e){let f=B(r),m=B(e),w=Math.max(f,m),v=Math.min(f,m);return(w+.05)/(v+.05)}function G(r){return r>=7?"AAA":r>=4.5?"AA":r>=3?"AA-large":"fail"}function O(r,e){let f=B(e),m=[],w=u(r);for(let v=.05;v<=.6&&m.length<3;v+=.05){let o="#"+w.map(function(n){return Math.min(1,n+v)}).map(function(n){return Math.round(n*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),p=A(o,e);p>=4.5&&m.push({hex:o,ratio:p})}return m}let R=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",C={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function y(){let r=R.filter(function(m){return G(A(m.fg,m.bg))!=="fail"}).length,e=R.length-r,f=Math.round(r/R.length*100);return`
      <div id="${g}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${M("PASS AA+",r,ServerI18n.t("wcagStatPassLabel"))}
              ${M("BELOW AA",e,ServerI18n.t("wcagStatFailLabel"))}
              ${M("PAIRS",R.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${M("PASS RATE",f+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:f})}">
                <div class="admin-wcag-meter-fill" style="width:${f}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${D}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${R.map(function(m,w){return _(m,w)}).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">${ServerI18n.t("mlBuiltInGuardrail")}</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${x()}
          </div>
        </div>
      </div>`}function M(r,e,f){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${h(String(e))}</span>
        <span class="hud-stat-tile-label">${h(f)}</span>
      </div>`}function _(r,e){let f=A(r.fg,r.bg),m=G(f),w=C[m],v=ServerI18n.t(r.nameKey),s=w.labelKey?ServerI18n.t(w.labelKey):w.label,o=m==="fail"?ServerI18n.t("wcagWarnFail"):m==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${e}" role="button" tabindex="0"
        aria-label="${h(ServerI18n.t("wcagPairAriaLabel",{name:v,ratio:f.toFixed(2),level:s.slice(2)}))}">
        <span class="admin-wcag-pair-name">${h(v)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${h(r.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${h(r.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${h(r.fg)}">${h(r.fg)} / ${h(r.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${f.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${w.mod}">${s}</span>
        ${o?`<span class="admin-wcag-warn">\u26A0 ${o}</span>`:""}
      </div>`}function x(){let r=A(N.fg,N.bg),e=G(r),f=C[e],m=f.labelKey?ServerI18n.t(f.labelKey):f.label,w=O(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${T(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${T(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${h(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${h(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${h(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${h(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${r.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${f.mod}">${m}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),r>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),r>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),r>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),r>=4.5)}
      </div>

      ${w.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${w.map(function(v){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${h(v.hex)}"
                title="${h(ServerI18n.t("wcagSuggApplyTitle",{ratio:v.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${h(N.bg)};color:${h(v.hex)}">${h(v.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${v.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function T(r,e,f){let m="wcag-tester-"+f;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${m}">${h(r)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${h(e)}"></span>
          <input type="text" id="${m}" class="admin-ui-input" data-wcag-tester-${f}
            aria-label="${h(ServerI18n.t("wcagHexAria",{label:r}))}"
            value="${h(e)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(r,e){return`<div class="admin-wcag-level ${e?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${e?"\u2713":"\u2717"}</span>
      <span>${h(r)}</span>
    </div>`}function E(){let r=document.getElementById(g);r&&(r.addEventListener("click",function(e){let f=e.target.closest("[data-wcag-pair-idx]");if(f){b(f);return}let m=e.target.closest("[data-wcag-sugg]");m&&(N.fg=m.dataset.wcagSugg,c())}),r.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;let f=e.target.closest("[data-wcag-pair-idx]");f&&(e.preventDefault(),b(f))}),r.addEventListener("input",function(e){let f=e.target.closest("[data-wcag-tester-fg]"),m=e.target.closest("[data-wcag-tester-bg]");f&&/^#[0-9A-Fa-f]{6}$/.test(f.value)&&(N.fg=f.value.toUpperCase(),c()),m&&/^#[0-9A-Fa-f]{6}$/.test(m.value)&&(N.bg=m.value.toUpperCase(),c())}))}function b(r){let e=R[parseInt(r.dataset.wcagPairIdx,10)];e&&(N.fg=e.fg,N.bg=e.bg,c())}function c(){let r=document.querySelector("[data-wcag-tester]");r&&(r.innerHTML=x())}function l(){let r=document.getElementById("settings-grid");!r||document.getElementById(g)||(r.insertAdjacentHTML("beforeend",y()),E())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&l()})})()});var gn=ye(()=>{(function(){"use strict";let g="danmu.onboarding.done",h="admin-onboarding-root",A=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],G=0,O=!1;window.AdminOnboarding={start:y,isDone:function(){try{return!!localStorage.getItem(g)}catch{return!1}},reset:function(){try{localStorage.removeItem(g)}catch{}}};let R=new Set(["live","dashboard"]);function N(){if(O||window.AdminOnboarding.isDone()||!R.has(D()))return;let r=()=>!!document.querySelector(".admin-session-banner-live");r()||setTimeout(()=>{O||window.AdminOnboarding.isDone()||r()||R.has(D())&&y()},1200)}function D(){let r=document.querySelector(".admin-dash-grid");return r&&r.dataset.activeRoute||"live"}function C(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&y()}function y(){O||(O=!0,G=0,H())}function M(r){if(!O)return;O=!1,document.body.removeEventListener("click",x),document.removeEventListener("keydown",T),window.removeEventListener("resize",E);let e=document.getElementById(h);if(e&&e.remove(),r)try{localStorage.setItem(g,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function _(){G<A.length-1?(G++,E()):M(!0)}function x(r){let e=r.target.closest("[data-ob-action]");e&&(r.stopPropagation(),e.dataset.obAction==="next"?_():e.dataset.obAction==="skip"&&M(!1))}function T(r){O&&r.key==="Escape"&&(r.preventDefault(),M(!1))}function H(){let r=document.getElementById(h);r&&r.remove();let e=document.createElement("div");e.id=h,e.className="admin-ob-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","false"),e.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(e),document.body.addEventListener("click",x),document.addEventListener("keydown",T),window.addEventListener("resize",E),E()}function E(){let r=document.getElementById(h);if(!r)return;let e=A[G],f=A.length,m=c(e.target),w=window.innerWidth,v=window.innerHeight,s="";m?s='<div class="admin-ob-spot" style="left:'+(m.left-8)+"px;top:"+(m.top-8)+"px;width:"+(m.width+16)+"px;height:"+(m.height+16)+'px;"></div>':s='<div class="admin-ob-scrim"></div>';let o=(w-360)/2,p=v/2-110,n="none";if(m){let S=m.left+m.width/2;e.side==="top"?(o=S-360/2,p=m.top-16,n="bottom"):e.side==="right"?(o=m.right+16+8,p=m.top,n="left"):(o=S-360/2,p=m.bottom+16+8,n="top"),o=Math.max(16,Math.min(w-360-16,o))}let t=A.map(function(S,I){return'<span class="admin-ob-progress-item'+(I===G?" is-current":"")+'">'+(I+1)+" "+l(ServerI18n.t(S.labelKey))+"</span>"+(I<f-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");r.innerHTML=s+'<div class="admin-ob-bubble" data-arrow="'+n+'" style="left:'+o+"px;top:"+p+'px"><div class="admin-ob-count">'+(G+1)+" / "+f+'</div><div class="admin-ob-title">'+l(ServerI18n.t(e.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(e.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(G===f-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+t+"</div></div>";let a=r.querySelector(".admin-ob-bubble");if(!a||!m)return;let i=a.offsetHeight;if(e.side==="top")a.style.top=Math.max(16,m.top-16-8-i)+"px";else if(p+i>v-16){let S=m.top-16-8-i;S>=16?(a.style.top=S+"px",a.setAttribute("data-arrow","bottom")):(a.style.top=Math.max(16,v-i-16)+"px",a.setAttribute("data-arrow","none"))}b(a,m)}function b(r,e){let f=r.getAttribute("data-arrow");if(f==="none")return;let m=r.getBoundingClientRect(),w=f==="top"||f==="bottom",v=w?e.left+e.width/2-m.left:e.top+e.height/2-m.top,s=w?m.width:m.height,o=Math.max(16,Math.min(s-32,v-8));r.style.setProperty("--ob-arrow",o+"px")}function c(r){if(!r)return null;let e=document.querySelector(r);if(!e)return null;let f=e.getBoundingClientRect();return f.width<8||f.height<8||f.bottom<0||f.top>window.innerHeight?null:f}function l(r){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(r):r==null?"":String(r).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",C),C(),window.addEventListener("hashchange",function(){R.has(D())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var En=ye(()=>{var es=Se(it()),ts=Se(st()),ns=Se(ot()),as=Se(rt()),is=Se(lt()),ss=Se(dt()),os=Se(ct()),rs=Se(ut()),ls=Se(mt()),ds=Se(pt()),cs=Se(ft()),us=Se(vt()),ms=Se(ht()),ps=Se(gt()),fs=Se(bt()),vs=Se(wt()),hs=Se(yt()),gs=Se(St()),bs=Se(kt()),ws=Se(It()),ys=Se(Tt()),Ss=Se(_t()),ks=Se(Et()),Is=Se($t()),Ts=Se(xt()),_s=Se(Lt()),Es=Se(At()),$s=Se(Ct()),xs=Se(Bt()),Ls=Se(Ft()),As=Se(Dt()),Cs=Se(Mt()),Bs=Se(Nt()),Fs=Se(Pt()),Ds=Se(Rt()),Ms=Se(Ot()),Ns=Se(qt()),Ps=Se(Ht()),Rs=Se(jt()),Os=Se(Ut()),qs=Se(Kt()),Hs=Se(Wt()),js=Se(Gt()),Us=Se(Vt()),Ks=Se(zt()),Ws=Se(Jt()),Gs=Se(Yt()),Vs=Se(Qt()),zs=Se(Xt()),Js=Se(Zt()),Ys=Se(en()),Qs=Se(tn()),Xs=Se(nn()),Zs=Se(an()),eo=Se(sn()),to=Se(on()),no=Se(rn()),ao=Se(ln()),io=Se(dn()),so=Se(cn()),oo=Se(un()),ro=Se(mn()),lo=Se(pn()),co=Se(fn()),uo=Se(vn()),mo=Se(hn()),po=Se(gn())});En();})();
