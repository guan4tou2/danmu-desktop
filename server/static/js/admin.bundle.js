/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var yn=Object.create;var at=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var ye=(g,h)=>()=>{try{return h||g((h={exports:{}}).exports,h),h.exports}catch(w){throw h=0,w}};var _n=(g,h,w,x)=>{if(h&&typeof h=="object"||typeof h=="function")for(let F of kn(h))!Tn.call(g,F)&&F!==w&&at(g,F,{get:()=>h[F],enumerable:!(x=Sn(h,F))||x.enumerable});return g};var Se=(g,h,w)=>(w=g!=null?yn(In(g)):{},_n(h||!g||!g.__esModule?at(w,"default",{value:g,enumerable:!0}):w,g));var it=ye(()=>{(function(){"use strict";var g=4,h=2500,w=3e3,x=Object.create(null);function F(){return Date.now()}function $(_,E){return(E?"ok:":"err:")+_}function D(_,E){return"var("+_+", "+E+")"}function B(_){return _?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function C(_){for(var E=Array.prototype.slice.call(_.children);E.length>g;){var I=E.shift();I&&I.parentNode&&I.parentNode.removeChild(I)}}function P(_,E){_.remaining=E,_.startedAt=F(),_.timer=setTimeout(function(){k(_)},E)}function M(_){_.timer&&(clearTimeout(_.timer),_.timer=null,_.remaining=Math.max(600,_.remaining-(F()-_.startedAt)))}function A(_){_.timer||!_.el.parentNode||P(_,_.remaining)}function k(_){clearTimeout(_.timer),_.timer=null,_.key&&x[_.key]===_&&delete x[_.key];var E=_.el;!E||!E.parentNode||(E.style.opacity="0",E.style.transform="translateX(8px)",setTimeout(function(){E.parentNode&&E.parentNode.removeChild(E)},180))}function N(_,E){var I=document.getElementById("toast-container");if(I){E=E!==!1;var H=$(String(_),E),T=x[H];if(T&&T.el.parentNode&&F()-T.startedAt<h){T.count+=1,T.countEl&&(T.countEl.textContent="\xD7"+T.count,T.countEl.hidden=!1),M(T),A(T);return}var b=E?D("--color-ink-success","#639922"):D("--color-ink-error","#e24b4a"),m=D("--color-surface","#ffffff"),r=D("--color-text-primary","#1a1a1a"),o=D("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+m,"color:"+r,"border:1px solid "+o,"border-left:3px solid "+b,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var u=document.createElement("span");u.style.cssText="display:inline-flex;color:"+b+";flex:0 0 auto",u.innerHTML=B(E);var c=document.createElement("span");c.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",c.textContent=_;var p=document.createElement("span");p.hidden=!0,p.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(u),t.appendChild(c),t.appendChild(p),I.appendChild(t),C(I),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var d={key:H,el:t,countEl:p,count:1,timer:null,remaining:w,startedAt:F()};x[H]=d,P(d,w),t.addEventListener("mouseenter",function(){M(d)}),t.addEventListener("mouseleave",function(){A(d)}),t.addEventListener("focusin",function(){M(d)}),t.addEventListener("focusout",function(){A(d)})}}window.showToast=N})()});var st=ye(()=>{(function(){"use strict";var g="admin-details-open-state";function h(){try{return JSON.parse(localStorage.getItem(g))||{}}catch{return{}}}function w(T){try{localStorage.setItem(g,JSON.stringify(T))}catch{}}var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function F(T){return T==null?"":String(T).replace(/[&<>"']/g,function(b){return x[b]})}function $(){var T=document.querySelector("script[nonce]");return T&&T.nonce||""}function D(T,b){var m=$();return"<style"+(T?' id="'+F(T)+'"':"")+(m?' nonce="'+F(m)+'"':"")+">"+(b||"")+"</style>"}var B='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',C=[],P=null;function M(T){if(!T)return!1;for(var b=T,m=null;b&&b!==document.documentElement;m=b,b=b.parentElement)if(b.style&&b.style.display==="none"||b.tagName==="DETAILS"&&!b.open&&!(m&&m.tagName==="SUMMARY"))return!1;return!!(T.offsetParent||T.getClientRects().length)}function A(){var T=document.hidden;C.forEach(function(b){var m=typeof b.el=="function"?b.el():b.el,r=!T&&M(m);if(r&&!b.timer){if(b.immediate!==!1)try{b.tick()}catch{}b.timer=setInterval(b.tick,b.intervalMs)}else!r&&b.timer&&(clearInterval(b.timer),b.timer=0)})}function k(T){var b={el:T.el,intervalMs:T.intervalMs,tick:T.tick,immediate:T.immediate,timer:0};return C.push(b),P||(P=new MutationObserver(function(){A()}),P.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",A),document.addEventListener("visibilitychange",A),document.addEventListener("admin-panel-rendered",A)),A(),function(){b.timer&&clearInterval(b.timer);var r=C.indexOf(b);r!==-1&&C.splice(r,1)}}function N(T){let b=document.createElement("textarea");b.value=T,b.setAttribute("readonly",""),b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select();let m=!1;try{m=!!document.execCommand("copy")}catch{m=!1}return document.body.removeChild(b),m}function _(T,b){let m=t=>window.ServerI18n?window.ServerI18n.t(t):t,r=t=>(window.showToast&&window.showToast(t?b||m("sohCopied"):m("sohCopyFailed"),t),t);if(!T)return Promise.resolve(r(!1));let o=navigator.clipboard;return o&&typeof o.writeText=="function"?o.writeText(T).then(()=>r(!0),()=>r(N(T))):Promise.resolve(r(N(T)))}let E=/^[=+\-@\t\r\n]/;function I(T){let b=T==null?"":String(T);return typeof T=="string"&&E.test(b)?"'"+b:b}function H(T){let b=I(T);return/[",\r\n]/.test(b)?'"'+b.replace(/"/g,'""')+'"':b}window.AdminUtils={csvCell:H,csvSafeText:I,copyText:_,DETAILS_STATE_KEY:g,loadDetailsState:h,saveDetailsState:w,escapeHtml:F,cspNonce:$,styleTag:D,closeIcon:B,pollWhileVisible:k}})()});var ot=ye(()=>{(function(){"use strict";function g(h,w,x,F){let $=h.querySelector("[data-route-breadcrumb]");if(!$)return;let D=Array.from(h.querySelectorAll(".admin-dash-nav-row[data-route]")),B=D.find(I=>I.dataset.route===w)||D.find(I=>I.dataset.route===x);if(!B){$.replaceChildren(),$.hidden=!0;return}let C="",P=B.previousElementSibling;for(;P;){if(P.classList.contains("admin-dash-nav-label")){C=(P.querySelector("[data-i18n]")||P).textContent.trim();break}P=P.previousElementSibling}let A=(B.querySelector("[data-i18n]")||B.querySelector("span:nth-child(2)")||B).textContent.trim(),k=F?h.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=k?(k.querySelector(".admin-tabs-btn-label")||k).textContent.trim():"",_=[C===A?"":C,A,N].filter(Boolean),E=document.createDocumentFragment();_.forEach((I,H)=>{if(H){let m=document.createElement("span");m.className="admin-dash-breadcrumb-sep",m.setAttribute("aria-hidden","true"),m.textContent="\u203A",E.appendChild(m)}let T=document.createElement("span"),b=H===_.length-1;T.className="admin-dash-breadcrumb-item"+(b?" is-current":""),b&&T.setAttribute("aria-current","page"),T.textContent=I,E.appendChild(T)}),$.replaceChildren(E),$.hidden=_.length===0}window.AdminBreadcrumb={render:g}})()});var rt=ye(()=>{(function(g){"use strict";let h={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function w(N){return Array.isArray(N.sections)?N.sections:N.section?[N.section]:[]}function x(N){return!!h[N]}function F(N){return h[N]||null}let $={moderation:{filters:"blacklist",fingerprints:"bans"}},D={viewer:{themes:"sec-themes",defaults:"sec-viewer-config-defaults",fields:"sec-viewer-config-defaults",page:"sec-viewer-theme",limits:"sec-viewer-config-limits"}};function B(N,_){if(!_)return null;let E=D[N]&&D[N][_];if(E)return{tab:null,section:E};let I=h[N];if(!I)return null;let H=I.tabs.find(T=>T.folds&&T.folds[_]);return H?{tab:H.slug,section:H.folds[_]}:null}function C(N,_){let E=h[N];if(!E)return null;let I=m=>E.tabs.some(r=>r.slug===m),H=B(N,_);if(H)return H.tab;let T=$[N]?.[_];if(T&&I(T))return T;if(_&&I(_))return _;let b=g.AdminRouter?.tabMemory?.get?.(N);return b&&I(b)?b:E.defaultTab}function P(N,_,E){let I=h[N];if(!I)return null;let H=document.createElement("div");return H.className="admin-tabs-strip",H.dataset.nav=N,H.setAttribute("role","tablist"),H.setAttribute("aria-label",N+" tabs"),I.tabs.forEach(T=>{let b=document.createElement("button");b.type="button",b.className="admin-tabs-btn"+(T.slug===_?" is-active":""),b.dataset.nav=N,b.dataset.tab=T.slug,b.setAttribute("role","tab"),b.setAttribute("aria-selected",T.slug===_?"true":"false");let m=document.createElement("span");m.className="admin-tabs-btn-label",m.textContent=T.labelKey?ServerI18n.t(T.labelKey):T.label,b.appendChild(m);let r=document.createElement("span");r.className="admin-tabs-btn-count",r.dataset.tabCount=T.slug,r.textContent=M[N]&&M[N][T.slug]?M[N][T.slug]:"",b.appendChild(r),b.addEventListener("click",()=>{typeof E?.onSelect=="function"&&E.onSelect(T.slug)}),H.appendChild(b)}),H}let M={};function A(N,_,E){if(!h[N])return;M[N]=M[N]||{},M[N][_]=E==null?"":String(E);let I=document.querySelector('.admin-tabs-strip[data-nav="'+N+'"] [data-tab-count="'+_+'"]');I&&(I.textContent=M[N][_])}function k(N,_,E){let I=h[N];!I||!E||I.tabs.forEach(H=>{let T=H.slug===_,b=new Map;w(H).forEach(m=>{let r=E.querySelector("#"+m);if(!r)return;r.style.display=T?"":"none";let o=b.get(r.parentElement);T&&H.folds&&o&&o.nextElementSibling!==r&&o.after(r),b.set(r.parentElement,r)})})}g.AdminTabs={hasTabsFor:x,getConfig:F,foldFor:B,resolveActiveTab:C,renderTabStrip:P,applyTabSectionVisibility:k,setTabCount:A}})(window)});var dt=ye(()=>{(function(g,h){"use strict";let w="data-quick-action-host",x="admin-quick-action-bar";function F(P){if(P?.host instanceof HTMLElement)return P.host;let M=h.querySelector(".admin-dash-main");if(!M)return h.body;let A=M.querySelector(`[${w}]`);if(!A){A=h.createElement("div"),A.setAttribute(w,"");let k=M.querySelector(".admin-dash-topbar"),_=M.querySelector("[data-admin-tabs-host]")||k;_&&_.parentNode?_.insertAdjacentElement("afterend",A):M.prepend(A)}return A}function $(P,M){typeof g.showToast=="function"&&g.showToast(P,M!==!1)}function D({label:P,undoLabel:M,onUndo:A,windowMs:k}){let N=F(),_=N.querySelector("."+x);_&&_.remove();let E=h.createElement("div");E.className=x,E.setAttribute("role","status"),E.setAttribute("aria-live","polite");let I=h.createElement("span");I.className=x+"-text",I.textContent="\u2713 "+P,E.appendChild(I);let H=h.createElement("button");H.type="button",H.className=x+"-undo",H.textContent="\u21B6 "+(M||ServerI18n.t("qaUndoLabel")),E.appendChild(H);let T=()=>{E.classList.add("is-leaving"),setTimeout(()=>E.remove(),200)},b=setTimeout(T,k||5e3);return H.addEventListener("click",async()=>{clearTimeout(b),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await A(),$(ServerI18n.t("qaUndone"),!0)}catch(m){$(ServerI18n.t("qaUndoFailed",{msg:m?.message||String(m)}),!1)}finally{T()}}),N.appendChild(E),requestAnimationFrame(()=>E.classList.add("is-entering")),E}function B(P){if(!P||typeof P!="object")return;let M=P.label||ServerI18n.t("qaDone");P.toast!==!1&&$(M,!0),P.undo&&typeof P.undo.run=="function"&&D({label:M,undoLabel:P.undo.label,onUndo:P.undo.run,windowMs:P.undo.window})}function C(){h.querySelectorAll("."+x).forEach(P=>P.remove())}g.AdminQuickAction={fire:B,dismissAll:C}})(window,document)});var lt=ye(()=>{(function(){"use strict";let g="admin-hud-modal-root",h=null,w=null,x='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function F(){let C=document.getElementById(g);return C?Array.prototype.slice.call(C.querySelectorAll(x)).filter(P=>P.offsetParent!==null||P===document.activeElement):[]}function $(C){let P=document.getElementById(g);if(P&&P.remove(),h&&(h(C),h=null),document.removeEventListener("keydown",D),w&&typeof w.focus=="function")try{w.focus()}catch{}w=null}function D(C){if(C.key==="Escape"){C.preventDefault(),$(!1);return}if(C.key==="Tab"){let P=F();if(!P.length){C.preventDefault();return}let M=P[0],A=P[P.length-1],k=document.activeElement;C.shiftKey?(k===M||!P.includes(k))&&(C.preventDefault(),A.focus()):(k===A||!P.includes(k))&&(C.preventDefault(),M.focus())}}function B(C){return new Promise(P=>{h&&$(!1),h=P,w=document.activeElement;let{icon:M="\u26A0",title:A=ServerI18n.t("hudConfirmTitle"),subtitle:k="",severity:N="warn",body:_="",titleText:E,bodyText:I,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:T=ServerI18n.t("cancel"),width:b=480}=C||{},m=document.createElement("div");m.id=g,m.className=`admin-hud-modal admin-hud-modal--${N}`,m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-hud-modal-title");let r=k?`<div class="admin-hud-modal__subtitle">${k}</div>`:"",o=typeof _=="string"?_:"",t=typeof _!="string"&&_&&_.nodeType;if(m.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${b}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${M}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${A}</div>
              ${r}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${T}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,E!=null){let c=m.querySelector(".admin-hud-modal__title");c&&(c.textContent=String(E))}if(I!=null){let c=m.querySelector("[data-modal-body]");c&&(c.textContent=String(I))}if(t){let c=m.querySelector("[data-modal-body]");c.innerHTML="",c.appendChild(_)}m.addEventListener("click",function(c){let p=c.target.closest("[data-modal-action]");p&&(c.stopPropagation(),$(p.dataset.modalAction==="confirm"))}),document.body.appendChild(m),document.addEventListener("keydown",D);let u=N==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{m.querySelector(`.admin-hud-modal__btn--${u}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:B}})()});var ct=ye(()=>{(function(){"use strict";var g=8,h=30;function w(N,_){return window.ServerI18n?window.ServerI18n.t(N,_):N}function x(N,_){return N?N.length>_?N.slice(0,_)+"\u2026":N:""}function F(N){return w(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function $(N,_){return N==="keyword"?x(_,h):_.slice(0,g)}async function D(N,_,E){if(!_)return{ok:!1,error:"empty-value"};try{var I={type:N==="keyword"?"keyword":"fingerprint",value:_};E&&(I.reason=E);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function B(N,_,E){if(!N)return{ok:!1,error:"empty-fingerprint"};var I=parseInt(_||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:I,reason:E||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function C(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var _=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return _.ok?{ok:!0}:{ok:!1,error:"HTTP "+_.status}}catch(E){return{ok:!1,error:E&&E.message||"network"}}}function P(N,_){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:w("lfBlockTitle"),subtitle:w("cfmSubBlockFuture"),severity:"danger",bodyText:w("blockConfirm").replace("{label}",F(N)).replace("{display}",$(N,_)),confirmLabel:w("lfBlockTitle")}):(window.showToast&&window.showToast(w("blockFailed"),!1),Promise.resolve(!1))}function M(N,_,E){window.showToast&&window.showToast(N?w(_,E||{}):w("blockFailed"),!!N)}async function A(N,_){if(!N||(_=_||{},!_.skipConfirm&&!await P("keyword",N)))return!1;var E=await D("keyword",N);return M(E.ok,"blockFallback",{label:F("keyword"),display:$("keyword",N)}),E.ok}async function k(N,_){if(!N||(_=_||{},!_.skipConfirm&&!await P("fingerprint",N)))return!1;var E=await D("fingerprint",N,_.reason);return M(E.ok,"blockFallback",{label:F("fingerprint"),display:$("fingerprint",N)}),E.ok}window.AdminModeration={callBlock:D,banFingerprint:B,recall:C,blockKeyword:A,blockFingerprint:k}})()});var ut=ye(()=>{(function(){"use strict";function h(B){let C=document.createElement("div");return C.className="admin-skel-slow",C.hidden=!0,C.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",B.appendChild(C),setTimeout(function(){C.isConnected&&(C.hidden=!1)},3e3),B}function w(B,C){let P=document.createElement("div");if(P.className="admin-skel "+(B||""),C)for(let M in C)P.style[M]=C[M];return P}function x({rows:B=8}={}){let C=document.createElement("div");C.className="admin-skel-card admin-skel-list";let P=document.createElement("div");P.className="admin-skel-list__head",[60,80,140,200,80].forEach(M=>{P.appendChild(w("admin-skel-bar",{width:M+"px",height:"10px"}))}),C.appendChild(P);for(let M=0;M<B;M++){let A=document.createElement("div");A.className="admin-skel-list__row",A.appendChild(w("admin-skel-circle",{width:"24px",height:"24px"}));let k=document.createElement("div");k.className="admin-skel-list__col",k.appendChild(w("admin-skel-bar",{width:50+M*13%40+"%",height:"10px"})),k.appendChild(w("admin-skel-bar",{width:30+M*7%30+"%",height:"8px"})),A.appendChild(k),A.appendChild(w("admin-skel-bar",{width:"60px",height:"10px"})),C.appendChild(A)}return h(C)}function F({cols:B=4}={}){let C=document.createElement("div");C.className="admin-skel-stats",C.style.gridTemplateColumns=`repeat(${B}, 1fr)`;for(let P=0;P<B;P++){let M=document.createElement("div");M.className="admin-skel-card admin-skel-tile",M.appendChild(w("admin-skel-bar",{width:"60px",height:"8px"})),M.appendChild(w("admin-skel-bar",{width:"80px",height:"28px"})),M.appendChild(w("admin-skel-bar",{width:"100%",height:"18px"})),M.appendChild(w("admin-skel-bar",{width:"90px",height:"8px"})),C.appendChild(M)}return h(C)}function $(){let B=document.createElement("div");B.className="admin-skel-card admin-skel-chart";let C=document.createElement("div");C.className="admin-skel-chart__head",C.appendChild(w("admin-skel-bar",{width:"120px",height:"10px"}));let P=document.createElement("span");P.style.flex="1",C.appendChild(P),C.appendChild(w("admin-skel-bar",{width:"80px",height:"10px"})),B.appendChild(C);let M=document.createElement("div");M.className="admin-skel-chart__body";let A=document.createElement("div");A.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>A.appendChild(w("admin-skel-bar",{width:"24px",height:"6px"}))),M.appendChild(A);let k=document.createElement("div");return k.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(_=>k.appendChild(w("admin-skel-bar admin-skel-chart__bar",{height:_+"%"}))),M.appendChild(k),B.appendChild(M),h(B)}function D(B,C){let P={listRows:x,statsTiles:F,chart:$}[B];return P?P(C||{}).outerHTML:""}window.AdminSkeletons={listRows:x,statsTiles:F,chart:$,html:D}})()});var mt=ye(()=>{(function(){"use strict";let g={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},h={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:g.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:g.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:g.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:g.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:g.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:g.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:g.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:g.cyan}};function w(F){let{icon:$="\xB7",title:D="",desc:B="",accent:C=g.cyan,ctaAccent:P,actionLabel:M,action:A,extra:k}=F||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",C),P&&N.style.setProperty("--admin-empty-cta",P);let _=document.createElement("div");if(_.className="admin-empty__icon",_.textContent=$,N.appendChild(_),D){let E=document.createElement("div");E.className="admin-empty__title",E.textContent=D,N.appendChild(E)}if(B){let E=document.createElement("div");E.className="admin-empty__desc",E.textContent=B,N.appendChild(E)}if(M){let E=document.createElement("button");E.type="button",E.className="admin-empty__btn",E.textContent=M,typeof A=="function"&&E.addEventListener("click",A),N.appendChild(E)}if(k){let E=document.createElement("div");E.className="admin-empty__extra",typeof k=="string"?E.innerHTML=k:E.appendChild(k),N.appendChild(E)}return N}function x(F){let $=h[F];if(!$)return w({title:ServerI18n.t("emptyNoData"),desc:""});let D=Object.assign({},$,{title:$.titleKey?ServerI18n.t($.titleKey):$.title,desc:$.descKey?ServerI18n.t($.descKey):$.desc,actionLabel:$.actionLabelKey?ServerI18n.t($.actionLabelKey):$.actionLabel});return w(D)}window.AdminEmpty={render:x,renderCustom:w,PRESETS:h}})()});var pt=ye(()=>{(function(){"use strict";var g=8;function h(D){return D?String(D).slice(0,g):""}function w(D){if(!D||typeof D!="object")return{nickname:"",fp:"",ip:""};var B=D.fingerprint||D.fp||D.hash||"",C=D.clientIp||D.client_ip||D.ip||"",P=D.nickname||D.nick||"";return{nickname:String(P||""),fp:String(B||""),ip:String(C||"")}}function x(D){if(!D||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var B=new TextEncoder().encode(String(D));return window.crypto.subtle.digest("SHA-256",B).then(function(C){var P=Array.from(new Uint8Array(C));return P.map(function(M){return M.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function F(D){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var B=document.getElementById("sec-fingerprints");if(B&&!B.open&&(B.open=!0),B)try{B.scrollIntoView({behavior:"smooth",block:"start"})}catch{}x(D).then(function(C){if(C)var P=0,M=setInterval(function(){P+=1;var A=document.querySelector('[data-fp-hash="'+C+'"]');if(A){clearInterval(M),A.classList.add("admin-identity-flash"),setTimeout(function(){A.classList.remove("admin-identity-flash")},2e3);try{A.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else P>12&&clearInterval(M)},250)})}function $(D){D=D||{};var B=D.nickname||"",C=D.fp||"",P=D.ip||"",M=!!D.compact,A=typeof D.onNicknameClick=="function"?D.onNicknameClick:null,k=typeof D.onFpClick=="function"?D.onFpClick:F,N=document.createElement("span");N.className="admin-identity-row";var _;if(A?(_=document.createElement("button"),_.type="button",_.className="admin-identity-nick is-clickable",_.addEventListener("click",function(m){m.stopPropagation(),A(B)})):(_=document.createElement("span"),_.className="admin-identity-nick"),B)_.textContent="@"+B;else{var E="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var I=ServerI18n.t("anonymousPlaceholder");I&&I!=="anonymousPlaceholder"&&(E=I)}}catch{}_.textContent="@"+E,_.classList.add("is-guest")}if(B&&(_.title=B),N.appendChild(_),C){var H;if(k?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(m){m.stopPropagation(),k(C)})):(H=document.createElement("span"),H.className="admin-identity-fp"),C==="new"){var T=document.createElement("span");T.className="admin-identity-dot",H.appendChild(T),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+h(C);H.title=C,N.appendChild(H)}if(P&&!M){var b=document.createElement("span");b.className="admin-identity-ip",b.textContent=P,b.title=P,N.appendChild(b)}return N}window.AdminIdentity={render:$,parse:w,focusFingerprint:F,hashFp:x,FP_DISPLAY_LEN:g}})()});var ft=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(a,i){return window.csrfFetch(a,i)}function w(a,i){return window.showToast(a,i)}let x="default",F=[],$={},D=null,B=!1,C="sec-themes";function P(){let a=i=>g(ServerI18n.t(i));return`
      <div id="${C}" class="admin-style-themes lg:col-span-2">
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
              <span class="theme-pack-sample-nick">${g(E)}</span>${g(I)}
            </span>
          </div>
        </details>
      </div>`}function M(){if(document.getElementById(C))return!1;let a=document.getElementById("settings-grid");return a?(a.insertAdjacentHTML("beforeend",P()),!0):!1}function A(){document.dispatchEvent(new CustomEvent("admin-themes-changed",{detail:{active:x}}))}function k(){let a=document.getElementById("themesList");a&&window.AdminSkeletons&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function N(a){a&&B||k();try{let i=await h("/admin/themes");if(!i.ok)return!1;let f=await i.json();return x=f.active||"default",F=f.themes||[],$=f.overrides||{},D=f.style_defaults||null,B=!0,o(F,x),c(),A(),!0}catch(i){return console.warn("[Themes] Failed to fetch themes:",i),!1}}async function _(a){let i;try{i=await h("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})}catch{return{ok:!1,error:""}}return i.ok?(x=a,await N(!0)||(D=null,o(F,a),c(),A()),{ok:!0,error:""}):{ok:!1,error:(await i.json().catch(()=>({}))).error||""}}var E="\u5C0F\u660E",I="\u8B1B\u5F97\u597D\uFF01+1";function H(a,i){var f=String(a||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(f)?f:i}function T(a){var i=String(a||"").trim(),f=i.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);return f&&(i="#"+f[1]+f[1]+f[2]+f[2]+f[3]+f[3]),/^[0-9a-fA-F]{6}$/.test(i)&&(i="#"+i),/^#[0-9a-fA-F]{6}$/.test(i)?i.toLowerCase():null}function b(a){var i=$[a.name]||{},f=D&&D.Color&&D.Color.global;return T(i.color)||T(f)||"#ffffff"}function m(a){var i=a.styles||{},f=b(a),y=["color:"+f];if(i.textStroke){var S=Math.max(0,Math.min(6,Number(i.strokeWidth)||0));y.push("-webkit-text-stroke:"+S+"px "+H(i.strokeColor,"#000000")),y.push("paint-order:stroke fill")}if(i.textShadow){var L=Math.max(0,Math.min(40,Number(i.shadowBlur)||0));y.push("text-shadow:0 0 "+L+"px "+f)}var R=($[a.name]||{}).font_family||D&&D.FontFamily&&D.FontFamily.global;return R&&/^[\w\s-]{1,40}$/.test(R)&&y.push("font-family:'"+R+"', var(--font-sans)"),a.font&&Number(a.font.weight)&&y.push("font-weight:"+Math.max(100,Math.min(900,Number(a.font.weight)))),y.join(";")}function r(a){var i=a.bg&&a.bg.gradient;return i&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(i).trim())?"background:"+String(i).trim():""}function o(a,i){let f=document.getElementById("themesList");if(f){if(f.innerHTML="",a.length===0){f.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}a.forEach(y=>{let S=y.name===i,L=g(ServerI18n.t("theme_"+y.name)!=="theme_"+y.name?ServerI18n.t("theme_"+y.name):y.label||y.name),R=document.createElement("div");R.className=`theme-pack-card${S?" is-active":""}`,R.innerHTML=`
        <div class="theme-pack-name">${L}</div>
        <div class="theme-pack-sample" style="${g(r(y))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${g(m(y))}">
            <span class="theme-pack-sample-nick">${g(E)}</span>
            ${g(I)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${y.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${g(y.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${S?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${g(y.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,f.appendChild(R)}),f.querySelectorAll(".theme-delete-btn").forEach(y=>{y.addEventListener("click",async()=>{let S=y.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let R=await h("/admin/themes/"+encodeURIComponent(S),{method:"DELETE"});if(!R.ok)throw new Error("HTTP "+R.status);w(ServerI18n.t("themeDeleted"),!0),N()}catch{w(ServerI18n.t("themesDeleteFailed"),!1)}})}),f.querySelectorAll(".theme-activate-btn").forEach(y=>{y.addEventListener("click",async()=>{let S=await _(y.dataset.theme);S.ok?w(ServerI18n.t("themeActivated"),!0):w(S.error||ServerI18n.t("setThemeFailed"),!1)})})}}function t(){return F.find(a=>a.name===x)||null}function u(a,i){let f=$[x]||{};if(f[a])return f[a];let y=i&&i.styles||{};return a==="stroke"?y.textStroke?Number(y.strokeWidth)>=3?"thick":"thin":"none":y.textShadow?Number(y.shadowBlur)>=10?"strong":"soft":"none"}function c(){let a=document.getElementById("themeDetail"),i=document.getElementById("themeDetailLabel");if(!a||!i)return;let f=t();if(!f)return;let y=ServerI18n.t("theme_"+f.name)!=="theme_"+f.name?ServerI18n.t("theme_"+f.name):f.label||f.name;i.textContent=ServerI18n.t("themeDetailGroup",{name:y});let S=$[x]||{},L=a.querySelector('[data-theme-ov="color"]');L&&(L.value=T(S.color)||b(f));let R=a.querySelector('[data-theme-ov-clear="color"]');R&&(R.hidden=!S.color),d(f),s(f)}var p=null;async function d(a){let i=document.getElementById("themeOvFont");if(!i)return;if(!p)try{let S=await fetch("/fonts",{credentials:"same-origin"});p=S.ok?(await S.json()).fonts||[]:[]}catch{p=[]}let y=($[x]||{}).font_family||"";i.innerHTML=`<option value="">${g(ServerI18n.t("themeDetailFontInherit"))}</option>`+p.map(S=>{let L=String(S.name||S);return`<option value="${g(L)}"${L===y?" selected":""}>${g(L)}</option>`}).join("")}function s(a){let i=document.querySelector("[data-theme-preview-line]");i&&i.setAttribute("style",m(a))}async function l(a){try{let i=await h("/admin/themes/"+encodeURIComponent(x)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error("HTTP "+i.status);w(ServerI18n.t("themeDetailSaved"),!0),await N(!0)}catch{w(ServerI18n.t("themeDetailSaveFailed"),!1)}}function v(){let a=document.getElementById("themeDetail");a&&(a.addEventListener("change",i=>{let f=i.target.closest("[data-theme-ov]");f&&l({[f.getAttribute("data-theme-ov")]:f.value})}),a.addEventListener("click",i=>{let f=i.target.closest("[data-theme-ov-clear]");f&&l({[f.getAttribute("data-theme-ov-clear")]:""})}))}function e(){let a=document.getElementById("themeNewBtn");a&&a.addEventListener("click",async()=>{let i=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!i||!i.trim()))try{let f=await h("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:i.trim(),base:x})});if(!f.ok)throw new Error("HTTP "+f.status);w(ServerI18n.t("themeCreated"),!0),N()}catch{w(ServerI18n.t("themesNewFailed"),!1)}})}function n(){let a=M();if(N(),!a)return;v(),e();let i=document.getElementById("themeReloadBtn");i&&i.addEventListener("click",async()=>{try{(await h("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(w(ServerI18n.t("themesReloaded")),N()):w(ServerI18n.t("themesReloadFailed"),!1)}catch{w(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:n,segOf(a){let i=t();return B&&i?u(a,i):null},activeStyles(){let a=t();return a&&a.styles||{}},styleDefaults(){return D},activate:_,refresh(){return N(!0)},setSeg(a,i){return a!=="stroke"&&a!=="shadow"?Promise.resolve():l({[a]:i})}}})()});var vt=ye(()=>{(function(){"use strict";function g(S,L){return window.csrfFetch(S,L)}function h(S,L){return window.showToast(S,L)}var w=window.ServerI18n;function x(S,L){return window.AdminUtils.styleTag(S,L)}let F=null;function $(){let S=document.getElementById("effectEditModal");return S?Array.from(S.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(L=>!L.hasAttribute("disabled")&&L.getAttribute("aria-hidden")!=="true"):[]}function D(S){let L=document.getElementById("effectEditModal");if(!L||L.classList.contains("hidden"))return;if(S.key==="Escape"){S.preventDefault(),B();return}if(S.key!=="Tab")return;let R=$();if(R.length===0){S.preventDefault();return}let j=R[0],q=R[R.length-1],W=document.activeElement;S.shiftKey&&W===j?(S.preventDefault(),q.focus()):!S.shiftKey&&W===q&&(S.preventDefault(),j.focus())}function B(){let S=document.getElementById("effectEditModal");S&&(S.classList.add("hidden"),S.classList.remove("flex"),S.removeEventListener("keydown",D),F&&(F.focus(),F=null))}let C={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(S){return!!C[S]}};let P=new Map,M=new Map;function A(S){if(!S||!S.styleId||!S.keyframes)return;let L="dme-user-"+S.styleId;if(document.getElementById(L))return;let R=document.createElement("style");R.id=L,R.textContent=S.keyframes,document.head.appendChild(R)}async function k(S){if(P.has(S))return P.get(S);if(M.has(S))return M.get(S);let L=(async()=>{try{let R=await g(`/admin/effects/${encodeURIComponent(S)}/content`);if(!R.ok)throw new Error("content fetch failed");let j=await R.json(),q=j&&j.content||"";if(!q)throw new Error("empty content");let W=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:q,params:{}})});if(!W.ok)throw new Error("preview failed");let G=await W.json();if(!G||!G.animation)throw new Error("no animation");return A(G),P.set(S,G),G}catch{return P.set(S,"failed"),null}finally{M.delete(S)}})();return M.set(S,L),L}function N(S,L){let R=S.querySelector(".effect-demo-text");if(!R)return;R.style.animation=L.animation||"",L.animationComposition&&(R.style.animationComposition=L.animationComposition),R.style.animationPlayState="paused";let j=E();j&&j.observe(S)}let _=null;function E(){return _||(typeof IntersectionObserver>"u"?null:(_=new IntersectionObserver(S=>{S.forEach(L=>{let R=L.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=L.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),_))}let I=null;function H(S){let L=document.getElementById("effectPreviewParams");if(!L)return{};let R;try{let q=S.split(`
`),W=!1,G=0,X=null,le=0,te={};for(let J of q){let Z=J.trimStart(),K=J.length-Z.length;if(Z.startsWith("params:")){W=!0,G=K;continue}if(!W||Z===""||Z.startsWith("#"))continue;if(K<=G&&!Z.startsWith("params:")){W=!1;continue}let Y=Z.match(/^([a-zA-Z0-9_]+):\s*$/);if(Y&&K===G+2){X=Y[1],le=K,te[X]={};continue}if(X&&K>le){let ne=Z.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let oe=ne[1],de=ne[2].trim();if((de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),oe!=="options"){let ue=Number(de);te[X][oe]=isNaN(ue)?de:ue}}if(Z.startsWith("- value:")){te[X].options||(te[X].options=[]);let oe=Z.match(/^- value:\s*(.+)$/);if(oe){let de=oe[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),te[X].options.push({value:de,label:de})}}if(Z.startsWith("label:")&&te[X].options&&te[X].options.length>0){let oe=Z.match(/^label:\s*(.+)$/);if(oe){let de=oe[1].trim();(de.startsWith('"')&&de.endsWith('"')||de.startsWith("'")&&de.endsWith("'"))&&(de=de.slice(1,-1)),te[X].options[te[X].options.length-1].label=de}}}}R=te}catch{R={}}L.innerHTML="";let j={};for(let[q,W]of Object.entries(R||{})){let G=W.type||"float",X=document.createElement("div");X.className="flex flex-col gap-0.5";let le=document.createElement("label");if(le.className="font-mono",le.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",le.textContent=`${q} (${G})`,X.appendChild(le),G==="select"&&Array.isArray(W.options)){let te=document.createElement("select");te.className="admin-ui-select",te.style.cssText="font-size:13px;padding:4px 8px",te.dataset.paramKey=q;for(let J of W.options){let Z=document.createElement("option");Z.value=J.value,Z.textContent=J.label||J.value,J.value===String(W.default)&&(Z.selected=!0),te.appendChild(Z)}j[q]=String(W.default||W.options[0]&&W.options[0].value||""),te.addEventListener("change",()=>{m()}),X.appendChild(te)}else{let te=W.min!=null?W.min:0,J=W.max!=null?W.max:10,Z=W.step!=null?W.step:G==="int"?1:.1,K=W.default!=null?W.default:te,Y=document.createElement("div");Y.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=te,ne.max=J,ne.step=Z,ne.value=K,ne.dataset.paramKey=q,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let oe=document.createElement("span");oe.className="font-mono",oe.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",oe.textContent=String(K),ne.addEventListener("input",()=>{oe.textContent=ne.value,m()}),Y.appendChild(ne),Y.appendChild(oe),X.appendChild(Y),j[q]=K}L.appendChild(X)}return j}function T(){let S=document.getElementById("effectPreviewParams");if(!S)return{};let L={};return S.querySelectorAll("[data-param-key]").forEach(R=>{L[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),L}async function b(){let S=document.getElementById("effectEditModalTextarea"),L=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),j=document.getElementById("effectPreviewError");if(!S||!L||!R)return;let q=S.value;if(!q||q===w.t("effectLoadContent")||q===w.t("effectsNetworkError"))return;let W=T();j?.classList.add("hidden");try{let G=await g("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:q,params:W})}),X=await G.json().catch(()=>({}));G.ok?(R.textContent=X.keyframes||"",L.style.animation=X.animation||"none",L.style.animationComposition=X.animationComposition||""):(L.style.animation="none",R.textContent="",j&&(j.textContent=X.error||w.t("previewFailed"),j.classList.remove("hidden")))}catch{L.style.animation="none",R.textContent="",j&&(j.textContent=w.t("effectsNetworkError"),j.classList.remove("hidden"))}}function m(){clearTimeout(I),I=setTimeout(()=>b(),500)}async function r(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                  <p class="text-xs font-semibold m-0" style="color:var(--color-text-muted)">${w.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="admin-ui-action admin-fx-preview-refresh">${w.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:var(--color-bg-elevated);padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:34px;color:var(--color-text-strong);display:inline-block;">${w.t("previewText")}</span>
                </div>
                ${x("effectPreviewStyle","")}
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs m-0 hidden" style="color: var(--color-ink-error)"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 shrink-0" style="border-top:1px solid var(--admin-line)">
              <button id="effectEditModalCancel" class="admin-ui-action admin-fx-modal-action">${w.t("cancel")}</button>
              <button id="effectEditModalSave" class="admin-ui-action is-primary admin-fx-modal-action">${w.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `),document.getElementById("effectEditModalClose").addEventListener("click",B),document.getElementById("effectEditModalCancel").addEventListener("click",B),document.getElementById("effectEditModal").addEventListener("click",q=>{q.target===q.currentTarget&&B()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let q=document.getElementById("effectEditModalTextarea");q&&(H(q.value),m())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{b()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let q=document.getElementById("effectEditModal"),W=document.getElementById("effectEditModalTextarea"),G=document.getElementById("effectEditModalSave"),X=q?.dataset.effectName;if(!(!X||!W)){G.disabled=!0;try{let le=await g("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X,content:W.value})}),te=await le.json().catch(()=>({}));le.ok?(h(te.message||w.t("effectSaveFallback"),!0),B(),await u()):h(te.error||w.t("saveFailed"),!1)}catch{h(w.t("effectsNetworkError"),!1)}finally{G.disabled=!1}}})),await u(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let q=document.getElementById("effectReloadBtn");q&&(q.disabled=!0);try{let W=await g("/admin/effects/reload",{method:"POST"}),G=await W.json().catch(()=>({}));W.ok?(h(G.message||w.t("effectsReloadFallback")),await u()):h(G.error||w.t("reloadFailed"),!1)}catch{h(w.t("effectsNetworkError"),!1)}finally{q&&(q.disabled=!1)}});async function S(q){if(!q)return;let W=new FormData;W.append("effectfile",q);try{let G=await g("/admin/effects/upload",{method:"POST",body:W}),X=await G.json().catch(()=>({}));G.ok?(h(X.message||w.t("effectUploadFallback")),await u()):h(X.error||w.t("uploadFailed"),!1)}catch{h(w.t("effectsNetworkError"),!1)}}let L=document.getElementById("effectUploadInput"),R=L&&!L.dataset.uploadWired;R&&(L.dataset.uploadWired="1"),(R?L:null)?.addEventListener("change",async q=>{await S(q.target.files?.[0]),q.target.value=""});let j=document.getElementById("sec-effects-mgmt");if(j){let q=0,W=te=>{te.preventDefault(),q++,j.classList.add("is-drag")},G=te=>{te.preventDefault()},X=te=>{te.preventDefault(),q=Math.max(0,q-1),q===0&&j.classList.remove("is-drag")},le=async te=>{te.preventDefault(),q=0,j.classList.remove("is-drag");let J=te.dataTransfer?.files?.[0];if(J){if(!/\.(dme|dme\.zip)$/i.test(J.name)){h(w.t("fxToastBadExt"),!1);return}await S(J)}};j.addEventListener("dragenter",W),j.addEventListener("dragover",G),j.addEventListener("dragleave",X),j.addEventListener("drop",le)}}function o(S){let L=(S||"").toLowerCase();return L.startsWith("glow")||L.includes("neon")?"GLOW":L.startsWith("shake")?"SHAKE":L.startsWith("wave")||L.startsWith("spin")||L.startsWith("bounce")||L.startsWith("zoom")||L.startsWith("fire")||L.includes("motion")?"MOTION":L.startsWith("rainbow")||L.startsWith("blink")||L.includes("color")?"COLOR":L.startsWith("type")||L.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function u(){let S=document.getElementById("effectsList");if(S)try{let L=await g("/admin/effects");if(!L.ok){S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+w.t("effectsLoadFailed")+"</span>";return}let R=await L.json();t.all=R.effects||[],c(),d()}catch{S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+w.t("effectsNetworkError")+"</span>"}}function c(){let S=document.getElementById("effectsFilterRow");if(!S)return;let L={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(G=>{L[o(G.name)]+=1});let R=t.all.length,j=[["ALL",w.t("fxChipAll"),R],["GLOW",w.t("fxCatGlow"),L.GLOW],["MOTION",w.t("fxCatMotion"),L.MOTION],["COLOR",w.t("fxCatColor"),L.COLOR],["SHAKE",w.t("fxCatShake"),L.SHAKE],["TEXT",w.t("fxCatText"),L.TEXT]];L.MISC>0&&j.push(["MISC",w.t("fxCatMisc"),L.MISC]);let q=j.map(([G,X,le])=>`<span class="hud-filter-chip ${t.filter===G?"is-active":""}" data-effect-filter="${G}">${X} ${le}</span>`).join(""),W=S.querySelector("[data-toolbar-spacer]");W?(S.querySelectorAll("[data-effect-filter]").forEach(G=>G.remove()),W.insertAdjacentHTML("beforebegin",q)):S.innerHTML=q,S.querySelectorAll("[data-effect-filter]").forEach(G=>{G.addEventListener("click",()=>{t.filter=G.dataset.effectFilter,c(),d()})})}function p(S){let L=(G,X)=>{let le=document.querySelector(G);le&&(le.textContent=X==null?"\u2014":String(X))},R=S.length,j=S.filter(G=>G.enabled!==!1).length,q=new Set(S.map(G=>o(G.name))),W=S.filter(G=>!C[G.name]).length;L("[data-eflib-total]",R),L("[data-eflib-active]",j),L("[data-eflib-cats]",q.size),L("[data-eflib-user]",W)}function d(){let S=document.getElementById("effectsList");if(!S)return;let L=t.all;p(L);let R=t.filter==="ALL"?L:L.filter(j=>o(j.name)===t.filter);if(!R.length){S.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(L.length?w.t("fxNoFilterMatch"):w.t("noEffectsLoaded"))+"</span>";return}_&&_.disconnect(),S.innerHTML="",R.forEach(j=>{let q=o(j.name),W=q==="GLOW"?"is-glow":q==="COLOR"?"is-color":q==="TEXT"?"is-text":"",G=C[j.name]||"",X=!!G,le=document.createElement("div");le.className="hud-effect-card"+(t.selected===j.name?" is-selected":""),le.dataset.effectName=j.name,le.title=[j.description,`file: ${j.filename}`].filter(Boolean).join(`
`);var te="effect_"+j.name;let J=w.t(te)!==te?w.t(te):j.label||j.name,Z=X?"built-in":"user",K=G?`animation:${G};animation-play-state:paused;`:"";if(le.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${s(w.t("fxCat"+q.charAt(0)+q.slice(1).toLowerCase())||q)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${W}"><span class="effect-demo-text" style="${K}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${s(J)}</div>
          <div class="hud-effect-card-meta">${s(Z)} \xB7 ${s(j.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${w.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${w.t("lbDelete")}</button>
        </div>
      `,S.appendChild(le),G){let oe=E();oe&&oe.observe(le)}else{let oe=P.get(j.name);oe&&oe!=="failed"?(A(oe),N(le,oe)):oe!=="failed"&&k(j.name).then(de=>{if(!de)return;let ue=S.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(j.name)}"]`);ue&&N(ue,de)})}le.addEventListener("click",oe=>{oe.target.closest("[data-role]")||i(j)});let Y=le.querySelector('[data-role="edit"]'),ne=le.querySelector('[data-role="delete"]');Y.addEventListener("click",async()=>{let oe=document.getElementById("effectEditModal"),de=document.getElementById("effectEditModalTitle"),ue=document.getElementById("effectEditModalFile"),me=document.getElementById("effectEditModalTextarea"),Te=document.getElementById("effectEditModalSave");if(!oe)return;F=document.activeElement instanceof HTMLElement?document.activeElement:null,de.textContent=j.label||j.name,ue.textContent=j.filename,me.value=w.t("effectLoadContent"),me.disabled=!0,Te.disabled=!0,oe.dataset.effectName=j.name,oe.classList.remove("hidden"),oe.classList.add("flex"),oe.addEventListener("keydown",D),me.focus();let Ee=document.getElementById("effectPreviewText"),Ae=document.getElementById("effectPreviewStyle"),se=document.getElementById("effectPreviewError"),ie=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),Ae&&(Ae.textContent=""),se&&se.classList.add("hidden"),ie&&(ie.innerHTML="");try{let ce=await g(`/admin/effects/${encodeURIComponent(j.name)}/content`),U=await ce.json().catch(()=>({}));ce.ok?(me.value=U.content||"",me.disabled=!1,Te.disabled=!1,me.focus(),H(me.value),b()):(me.value=U.error||w.t("effectLoadContentFailed"),h(U.error||w.t("effectLoadContentFailed"),!1))}catch{me.value=w.t("effectsNetworkError"),h(w.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let oe=j.label||j.name;if(await window.HudConfirm?.open({icon:"\u2297",title:w.t("fxDeleteTitle"),subtitle:w.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${w.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${oe}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${w.t("fxDeleteWarn")}
                </div>`,confirmLabel:w.t("fxDeleteConfirm"),cancelLabel:w.t("cancel"),width:400}))try{let ue=await g("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j.name})}),me=await ue.json().catch(()=>({}));ue.ok?(h(me.message||w.t("effectDeleteFallback"),!0),await u()):h(me.error||w.t("deleteFailed"),!1)}catch{h(w.t("effectsNetworkError"),!1)}})})}function s(S){return String(S??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(S){let L={name:"",label:"",description:"",params:[]};if(!S)return L;let R=S.split(`
`),j="top",q=null;for(let W of R){let G=W.replace(/\r$/,""),X=G.trimStart();if(!X||X.startsWith("#"))continue;let le=G.length-X.length;if(le===0){if(j="top",q&&(L.params.push(q),q=null),X==="params:"){j="params";continue}let te=X.match(/^([a-z_]+):\s*(.+)$/);te&&(te[1]==="name"?L.name=te[2].trim():te[1]==="label"?L.label=te[2].trim():te[1]==="description"&&(L.description=te[2].trim()));continue}if(!(j!=="params"&&j!=="param-fields"&&j!=="options")){if(le===2&&(j==="params"||j==="param-fields"||j==="options")){q&&(L.params.push(q),q=null);let te=X.match(/^(\w+):$/);te&&(q={key:te[1]},j="param-fields");continue}if(le===4&&j==="param-fields"&&q){let te=X.match(/^(\w+):\s*(.*)$/);if(te){let J=te[1],Z=te[2].trim();J==="label"?q.label=Z:J==="type"?q.type=Z:J==="default"?q.default=Z:J==="min"?q.min=parseFloat(Z):J==="max"?q.max=parseFloat(Z):J==="step"?q.step=parseFloat(Z):J==="options"&&(q.options=[],j="options")}continue}if(j==="options"&&q&&le>=6){let te=X.match(/^-\s*value:\s*(.+)$/);te&&(q.options||(q.options=[]),q.options.push({value:te[1].trim(),label:te[1].trim()}));let J=X.match(/^label:\s*(.+)$/);J&&q.options&&q.options.length>0&&(q.options[q.options.length-1].label=J[1].trim())}}}return q&&L.params.push(q),L}function v(S,L){let R=S.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),j=R?R[1]:"",q=S.match(/^animation:\s*["']?(.+?)["']?\s*$/m),W=q?q[1].trim():"";for(let G of L.params){let X=G.default!==void 0?G.default:"",le=new RegExp(`\\{${G.key}\\}`,"g");j=j.replace(le,X),W=W.replace(le,X)}return{keyframes:j,animation:W}}function e(S,L){if(S==="COLOR"){let R=L.find(j=>j.key==="duration");if(R&&R.default){let j=parseFloat(R.default);if(j<.25)return"crimson";if(j<.33)return"amber"}}if(S==="MOTION"){let R=L.find(j=>j.key==="height");if(R&&R.default){let j=parseFloat(R.default);if(j>30)return"crimson";if(j>24)return"amber"}}return"lime"}function n(S,L){return S==="COLOR"?L==="crimson"?w.t("fxHintFlashBlock"):L==="amber"?w.t("fxHintFlashWarn"):w.t("fxHintFlashOk"):L==="crimson"?w.t("fxHintAmpBlock"):L==="amber"?w.t("fxHintAmpWarn"):w.t("fxHintAmpOk")}function a(S,L){let R=l(L),{keyframes:j,animation:q}=v(L,R),W=o(S.name),G=R.params.filter(me=>me.type!=="select"),X=R.params.filter(me=>me.type==="select"),le=e(W,R.params),te=le==="crimson"?"BLOCK":le==="amber"?"WARN":"OK",J=n(W,le),Z="fx-anim-"+S.name.replace(/[^a-z0-9]/gi,"-"),K=j&&q?x(Z,j):"",Y=q?`animation:${q};animation-play-state:running;`:"",ne=G.map(me=>{let Te=parseFloat(me.default)||0,Ee=me.min??0,Ae=me.max??100,se=Math.max(0,Math.min(100,(Te-Ee)/(Ae-Ee)*100)),ie=(me.label||"").match(/\(([^)]+)\)$/),ce=ie?ie[1]:"",U=me.label||me.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${s(U)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${Te}<span style="color:var(--color-text-muted);margin-left:2px">${s(ce)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${se}%"></div>
          <div class="fx-slider-knob" style="left:${se}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ee}${s(ce)}</span><span>${Ae}${s(ce)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${w.t("fxNoNumericParams")}</span>`,oe=X.map(me=>{let Te=me.options||[],Ee=String(me.default||""),Ae=Te.map(se=>`<span class="fx-radio-btn${se.value===Ee||se.label===Ee?" is-active":""}">${s(se.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${s(me.label||me.key)}</div>
        <div class="fx-radio-group">${Ae||"<span>\u2014</span>"}</div>
      </div>`}).join(""),de=["dark","light","photo"].map(me=>{let Te=me==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${me}">
        <span class="fx-preview-bg-label">${me.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Y}color:${Te}">ABC</span>
      </div>`}).join(""),ue=`${K}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${w.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ne}</div>
      </div>`;return oe&&(ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${w.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${oe}</div>
      </div>`),ue+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${w.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${de}</div>
      </div>
      <div class="fx-warn-box${le!=="lime"?" is-"+le:""}">
        <span class="fx-warn-chip${le!=="lime"?" is-"+le:""}">${te}</span>
        <span class="fx-warn-text">${s(J)}</span>
      </div>
    </div>`,ue}async function i(S){t.selected=S.name;let L=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),j=document.getElementById("effectsInspectorKicker"),q=document.getElementById("effectsInspectorBody");if(L){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=S.label||S.name),j&&(j.textContent="LOADING"),q&&(q.className="hud-inspector-body",q.textContent="# "+w.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(W=>{W.classList.toggle("is-selected",W.dataset.effectName===S.name)});try{let W=await g(`/admin/effects/${encodeURIComponent(S.name)}/content`),G=await W.json().catch(()=>({}));if(W.ok){let X=G.content||"";q&&(q.className="hud-inspector-body has-param-panel",q.innerHTML=a(S,X)),j&&(j.textContent=o(S.name))}else q&&(q.className="hud-inspector-body",q.textContent="# "+(G.error||w.t("effectLoadContentFailed"))),j&&(j.textContent="ERROR")}catch{q&&(q.className="hud-inspector-body",q.textContent="# "+w.t("effectsNetworkError")),j&&(j.textContent="NETWORK")}}}function f(){let S=document.getElementById("effectsInspectorReload"),L=document.getElementById("effectsInspectorEdit");S?.addEventListener("click",async()=>{if(!t.selected){h(w.t("fxSelectFirst"),!1);return}let R=t.all.find(j=>j.name===t.selected);R&&await i(R)}),L?.addEventListener("click",()=>{if(!t.selected){h(w.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",f())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:r}})()});var ht=ye(()=>{(function(){"use strict";var g={};window.DanmuEvents={on:function(h,w){g[h]||(g[h]=[]),g[h].push(w)},off:function(h,w){g[h]=(g[h]||[]).filter(function(x){return x!==w})},emit:function(h,w){(g[h]||[]).forEach(function(x){x(w)})}}})()});var gt=ye(()=>{(function(){"use strict";let g="sec-events",h="/admin/audit?limit=200",x=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})},F={events:[],filterSev:"all",filterCat:"all",timer:0};function $(T){let b=(T.source||T.kind||"").toLowerCase(),m=(T.action||"").toLowerCase();return b.includes("plugin")||m.includes("plugin")?"plugin":b.includes("webhook")||m.includes("webhook")?"webhook":b.includes("rate")||m.includes("rate")||m.includes("limit")?"rate":b.includes("filter")||m.includes("filter")?"filter":b.includes("overlay")||m.includes("overlay")||b==="broadcast"?"overlay":b.includes("backup")||m.includes("backup")?"backup":b.includes("msg")||b==="messaging"?"msg":b.includes("ws")||b==="websocket"?"ws":"system"}let D=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,B=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function C(T){let b=(T.action||T.kind||"").toLowerCase();return T.severity?T.severity:D.test(b)?"error":B.test(b)?"warn":"info"}function P(T){let b=T.source||"system",m=T.action||T.kind||"";return m?`${b.toUpperCase()}_${m.toUpperCase()}`:b.toUpperCase()}function M(T){if(!T)return"\u2014";let b=new Date(T*1e3),m=r=>String(r).padStart(2,"0");return`${m(b.getHours())}:${m(b.getMinutes())}:${m(b.getSeconds())}`}function A(T){if(T.message)return T.message;let b=T.meta||{},m=[];if(b.from&&b.to)m.push(`${b.from} \u2192 ${b.to}`);else if(b.text_preview)m.push(`"${b.text_preview.slice(0,60)}"`);else if(Object.keys(b).length){let r=Object.keys(b).slice(0,3);for(let o of r)m.push(`${o}=${JSON.stringify(b[o]).slice(0,30)}`)}return m.length?m.join(" \xB7 "):`${T.source||"system"}.${T.action||T.kind||"?"}`}function k(){return`
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
      </div>`}function N(){let T=document.querySelector("[data-ev-rows]");if(!T)return;let b=F.events,m=b.filter(t=>!(F.filterSev!=="all"&&C(t)!==F.filterSev||F.filterCat!=="all"&&$(t)!==F.filterCat));m.length===0?(T.innerHTML="",window.AdminEmpty?T.appendChild(window.AdminEmpty.render("events")):T.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):T.innerHTML=m.map(t=>{let u=C(t);return`
          <div class="admin-ev-v4__row" data-sev="${u}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${x(M(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${u}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${u}">${x(P(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${x(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${x(A(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let r={all:b.length,info:0,warn:0,error:0};for(let t of b)r[C(t)]+=1;Object.keys(r).forEach(t=>{let u=document.querySelector(`[data-ev-cnt="${t}"]`);u&&(u.textContent=String(r[t]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${m.length} / ${b.length}`)}async function _(){try{let T=await fetch(h,{credentials:"same-origin"});if(!T.ok)return;let b=await T.json();F.events=Array.isArray(b.events)?b.events:[],N()}catch{}}function E(){let T=document.getElementById(g);T&&T.addEventListener("click",b=>{let m=b.target.closest("[data-ev-sev]");if(m){T.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===m)),F.filterSev=m.dataset.evSev,N();return}let r=b.target.closest("[data-ev-cat]");if(r){T.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===r)),F.filterCat=r.dataset.evCat,N();return}let o=b.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")_();else if(o.dataset.evAction==="export"){let t=new Blob([JSON.stringify(F.events,null,2)],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(u),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function I(){let T=document.querySelector(".admin-dash-grid"),b=document.getElementById(g);if(!b)return;let r=(T?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";b.style.display=r?"":"none",r?(_(),F.timer||(F.timer=setInterval(_,15e3))):F.timer&&(clearInterval(F.timer),F.timer=0)}function H(){let T=document.getElementById("settings-grid");!T||document.getElementById(g)||(T.insertAdjacentHTML("beforeend",k()),E(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&H(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{H(),I()}),H()})})()});var bt=ye(()=>{(function(){"use strict";let g="sec-modqueue",h="/admin/modqueue/list",F=window.AdminUtils&&window.AdminUtils.escapeHtml||function(m){return String(m).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},$={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},D={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},B={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function C(m){let r=0,o=String(m||"");for(let t=0;t<o.length;t++)r=r*31+o.charCodeAt(t)&65535;return r%360}function P(m){if(!m.created_at_ms)return null;let r=(Date.now()-m.created_at_ms)/1e3,o=Math.max(0,$.autoRejectSec-r);return Math.ceil(o)}function M(m,r){let o=(m.severity||"low").toLowerCase(),t=D[o]||D.low,u=C(m.fp),c=String(m.fp||"\u2014").slice(0,8),p=m.nick||m.nickname||ServerI18n.t("audienceAnonymous"),d=(p||"?").slice(0,2).toUpperCase(),s=r==="pending"?P(m):null,l=r==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${F(m.id||"")}">${F(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${F(m.id||"")}">${F(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${F(m.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",v=r==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${F(ServerI18n.t("modqueueStampApproved"))} \xB7 ${F(m.resolved_by||"admin")} \xB7 ${F(m.resolved_ago||"")}
        </div>`:r==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${m.auto_rejected?`${F(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${F(ServerI18n.t("modqueueAutoRejectTimeout",{n:$.autoRejectSec}))}`:`${F(ServerI18n.t("modqueueStampRejected"))} \xB7 ${F(m.resolved_by||"admin")} \xB7 ${F(m.resolved_ago||"")}`}
        </div>`:"",e=r==="pending"&&s!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${s}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${F(m.id||"")}" data-mq-sev="${F(o)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${u})">${F(d)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${F(p)}</div>
            <div class="admin-mq-card__fp">fp:${F(c)}</div>
          </div>
          <div class="admin-mq-card__time">${F(m.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${F(m.content||m.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${F(ServerI18n.t(B[o]||B.low))}</span>
          <span class="admin-mq-card__rule">${F(ServerI18n.t("modqueueRuleLabel"))}: ${F(m.rule||m.matched_rule||"?")}</span>
          ${e}
        </div>
        ${l}
        ${v}
      </div>`}function A(m,r,o){m&&(m.innerHTML=r.map(t=>M(t,o)).join(""))}function k(){let m=document.getElementById(g);if(!m)return;m.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),m.querySelector(".admin-mq__body").hidden=!0;let r=m.querySelector("[data-mq-empty]");r&&window.AdminEmpty&&(r.hidden=!1,r.innerHTML="",r.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let m=document.getElementById(g);if(!m)return;if($.pending.length+$.approved.length+$.rejected.length===0){k();return}m.querySelector(".admin-mq__body").hidden=!1;let o=m.querySelector("[data-mq-empty]");o&&(o.hidden=!0),A(m.querySelector("[data-mq-col-pending]"),$.pending,"pending"),A(m.querySelector("[data-mq-col-approved]"),$.approved,"approved"),A(m.querySelector("[data-mq-col-rejected]"),$.rejected,"rejected");let t=(d,s)=>{m.querySelectorAll(d).forEach(l=>{l.textContent=String(s)})};t("[data-mq-cnt-pending]",$.pending.length),t("[data-mq-cnt-approved]",$.approved.length),t("[data-mq-cnt-rejected]",$.rejected.length);let u=$.pending.length===0;m.querySelectorAll("[data-mq-bulk]").forEach(d=>{d.disabled=u});let c=$.pending[$.pending.length-1],p=m.querySelector("[data-mq-oldest]");if(p){let d=c?P(c):null;p.textContent=d!=null?`oldest: ${d}s`:""}t("[data-mq-throughput]",$.stats.throughput.toFixed?$.stats.throughput.toFixed(1):$.stats.throughput),t("[data-mq-avg-review]",$.stats.avg_review_sec.toFixed?$.stats.avg_review_sec.toFixed(1):$.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round($.stats.auto_reject_pct||0)+"%")}async function _(){try{let m=await fetch(h,{credentials:"same-origin"});if(!m.ok){$.pending=[],$.approved=[],$.rejected=[],N();return}let r=await m.json();$.pending=Array.isArray(r.pending)?r.pending:[],$.approved=Array.isArray(r.approved)?r.approved:[],$.rejected=Array.isArray(r.rejected)?r.rejected:[],$.stats=r.stats||$.stats,typeof r.auto_reject_sec=="number"&&($.autoRejectSec=r.auto_reject_sec),N()}catch{}}async function E(m,r,o){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:m,...o||{}})});if(t.ok)window.showToast&&window.showToast(r==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),_();else{let u=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:u.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function I(){return`
      <div id="${g}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function H(){let m=document.getElementById(g);m&&m.addEventListener("click",async r=>{let o=r.target.closest("[data-mq-action]");if(o){let u=o.dataset.mqId,c=o.dataset.mqAction;(c==="approve"||c==="reject")&&E(u,c);return}let t=r.target.closest("[data-mq-bulk]");if(t){let u=t.dataset.mqBulk,c=u==="approve-low";if(!await window.HudConfirm?.open({icon:c?"\u2713":"\u2298",title:c?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:c?"warn":"danger",body:c?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:c?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let d=u.startsWith("approve")?"approve":"reject",s=u.endsWith("low")?"low":"high";E(null,"bulk",{action:d,severity:s})}})}function T(){let m=document.querySelector(".admin-dash-grid"),r=document.getElementById(g);if(!r)return;let o=(location.hash||"").replace("#/","").split("/"),t=m?.dataset.activeRoute||o[0]||"",u=m?.dataset.activeLeaf||o[1]||"",c=t==="modqueue"||t==="moderation"&&(u==="queue"||u===""||u==="moderation");r.style.display=c?"":"none",c?($.timer||(_(),$.timer=setInterval(_,4e3)),$.countdownTimer||($.countdownTimer=setInterval(N,1e3))):($.timer&&(clearInterval($.timer),$.timer=0),$.countdownTimer&&(clearInterval($.countdownTimer),$.countdownTimer=0))}function b(){let m=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!m||document.getElementById(g)||(m.insertAdjacentHTML("beforeend",I()),H(),T())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(g)&&b(),T()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",()=>{b(),T()}),b()})})()});var wt=ye(()=>{(function(){"use strict";let g="sec-modbans-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},w=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],x={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},F={fingerprint:"FP",ip:"IP",nick:"NICK"},$={rows:[],refreshTimer:0};async function D(){try{let I=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!I.ok)return;let H=await I.json();$.rows=Array.isArray(H.bans)?H.bans:[],P()}catch{}}function B(I){if(!I||I<=0)return"\u2014";let H=Math.floor(I/86400),T=Math.floor(I%86400/3600),b=Math.floor(I%3600/60);return H>0?`${H}d ${T}h`:T>0?`${T}h ${b}m`:`${b}m`}function C(I){let H=I.target_kind;return H==="fingerprint"?`fp:${(I.target||"").slice(0,8)}`:H==="nick"?`@${I.target}`:I.target||"\u2014"}function P(){let I=document.querySelector("[data-modbans-list]");if(!I)return;let H=$.rows||[],T=document.querySelector("[data-modbans-count]");if(T&&(T.textContent=String(H.length)),H.length===0){I.innerHTML="";let b=window.AdminEmpty.render("blacklist");b.dataset.emptyKind="modbans",I.appendChild(b);return}I.innerHTML=H.map(function(b){let m=b.status==="expired",r=b.status==="permanent",o="admin-modbans-chip is-"+b.status,t=r?ServerI18n.t("modbansPermanent"):m?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:B(b.remaining_s)}),u=encodeURIComponent(b.target_kind)+"|"+encodeURIComponent(b.target);return`
        <div class="admin-modbans-row ${m?"is-expired":""}">
          <span class="admin-modbans-target">${h(C(b))}</span>
          <span class="admin-modbans-kind">${h(F[b.target_kind]||b.target_kind)}</span>
          <span class="admin-modbans-reason">${h(b.reason||"\u2014")}</span>
          <span class="${o}">
            ${b.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${h(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${u}"
            ${m?"disabled":""}
            title="${m?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${m?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function M(I){let H=I||{},T=H.kind||"ban",b=window.HudConfirm,m=!H.target,r=H.target_kind||"fingerprint",o=H.target||"";return new Promise(function(t){if(!b){t(!1);return}let u=86400,c=!1,p=12,d="hour",s=document.createElement("div");s.className="admin-modbans-modal-body",s.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${h(x[r]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${h(F[r]||"?")} ${h((T||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${h(o?C({target_kind:r,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${m?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(te){return`<button type="button" class="admin-modbans-modal-preset${te===r?" is-active":""}"
                data-modbans-target-kind="${te}">${h(x[te])} ${h(F[te])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${w.map(function(te){return`<button type="button" class="${"admin-modbans-modal-preset"+(te.defaultPick?" is-active":"")+(te.permanent?" is-permanent":"")}" data-modbans-duration="${te.val}">${te.labelKey?ServerI18n.t(te.labelKey):te.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let l=s.querySelector("[data-modbans-custom-row]"),v=s.querySelector("[data-modbans-custom-input]"),e=s.querySelector("[data-modbans-custom-seconds]"),n=s.querySelector("[data-modbans-when]"),a=s.querySelector("[data-modbans-custom]"),i=s.querySelector("[data-modbans-target]"),f=s.querySelector("[data-modbans-target-icon]"),y=s.querySelector("[data-modbans-target-label]"),S=s.querySelector("[data-modbans-target-val]"),L=function(){f.textContent=x[r]||"?",y.textContent=`${F[r]||"?"} ${(T||"ban").toUpperCase()}`,S.textContent=o?C({target_kind:r,target:o}):"\u2014"},R=function(){return Math.max(1,parseInt(v.value,10)||1)*(d==="day"?86400:3600)},j=function(){if(u===0){n.textContent=ServerI18n.t("modbansWhenPermanent"),n.classList.remove("is-custom");return}let te=new Date(Date.now()+u*1e3),J=K=>String(K).padStart(2,"0"),Z=`${te.getFullYear()}-${J(te.getMonth()+1)}-${J(te.getDate())} ${J(te.getHours())}:${J(te.getMinutes())}`;c?(n.textContent=ServerI18n.t("modbansWhenCustom",{n:p,unit:ServerI18n.t(d==="day"?"modbansDay":"modbansHour"),stamp:Z}),n.classList.add("is-custom")):(n.textContent=ServerI18n.t("modbansWhenPreset",{dur:B(u),stamp:Z}),n.classList.remove("is-custom"))},q=function(){let te=R();e.textContent=`= ${te.toLocaleString()}s`,c&&(p=Math.max(1,parseInt(v.value,10)||1),u=te,j())},W=s.querySelector("[data-modbans-presets]"),G=function(){c=!0,l.hidden=!1,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(te){te.classList.toggle("is-active",te===a)}),q()},X=function(te){c=!1,l.hidden=!0,W.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===te)})};L(),j(),q(),s.addEventListener("click",function(te){let J=te.target.closest("[data-modbans-target-kind]");if(J){r=J.dataset.modbansTargetKind,J.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Y){Y.classList.toggle("is-active",Y===J)}),L();return}if(te.target.closest("[data-modbans-custom]")){G();return}let Z=te.target.closest("[data-modbans-custom-unit]");if(Z){d=Z.dataset.modbansCustomUnit||"hour",s.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Y){Y.classList.toggle("is-active",Y===Z)}),q();return}let K=te.target.closest("[data-modbans-duration]");K&&(u=parseInt(K.dataset.modbansDuration,10)||0,X(K),j())}),v.addEventListener("input",q),i&&i.addEventListener("input",function(){o=i.value.trim(),L()});let le=s.querySelector("[data-modbans-reason]");b.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:s,width:480}).then(function(te){if(!te){t(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}u===0?b.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${h(C({target_kind:r,target:o}))}</b>`})}).then(function(J){if(!J){t(!1);return}A(r,o,u,le.value.trim(),T).then(t)}):A(r,o,u,le.value.trim(),T).then(t)})})}async function A(I,H,T,b,m){try{let r=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:H,duration_s:T,reason:b||"",kind:m||"ban"})});if(!r.ok)throw new Error(`HTTP ${r.status}`);return window.showToast&&window.showToast(T===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:B(T)}),!0),D(),!0}catch(r){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:r.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function k(I){let H=(I||"").split("|");if(H.length!==2)return;let T=decodeURIComponent(H[0]),b=decodeURIComponent(H[1]);try{let m=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:T,target:b})});if(!m.ok)throw new Error(`HTTP ${m.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),D()}catch(m){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:m.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
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
      </div>`}function _(){let I=document.getElementById(g);if(!I||I.dataset.modbansBound==="1")return;I.dataset.modbansBound="1",I.addEventListener("click",function(T){if(T.target.closest("[data-modbans-add]")){M({kind:"ban"});return}let b=T.target.closest("[data-modbans-unban]");b&&!b.disabled&&k(b.dataset.modbansUnban)});let H=I.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function E(){let I=document.getElementById("settings-grid");!I||document.getElementById(g)||(I.insertAdjacentHTML("beforeend",N()),_(),D(),$.refreshTimer||($.refreshTimer=setInterval(D,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&E()}),window.ModBans={openPicker:M,refreshList:D,formatTarget:C,formatRemaining:B}})()});var yt=ye(()=>{(function(){"use strict";let g="admin-mobile-nav-root",h=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],w=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],x={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",themes:"viewer",appearance:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},F=!1,$=0;function D(){return`
      <nav id="${g}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${w.map(_=>`
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
      </nav>`}function B(){let _=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",E=x[_]||_;return h.some(I=>I.id===E)?E:w.some(I=>I.route===E)?"more":""}function C(){let _=document.getElementById(g);if(!_)return;let E=B();_.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===E),I.dataset.mnTab!=="more"&&I.setAttribute("aria-current",I.dataset.mnTab===E?"page":"false")})}function P(_){let E=document.getElementById(g);if(!E)return;F=_,E.dataset.overflow=_?"open":"closed",E.querySelector("[data-mn-overflow]").hidden=!_,E.querySelector("[data-mn-backdrop]").hidden=!_;let I=E.querySelector("[data-mn-tab='more']");I?.classList.toggle("is-active",_),I?.setAttribute("aria-expanded",_?"true":"false")}function M(_){if(_.target.closest("[data-mn-backdrop]")){P(!1);return}if(_.target.closest("[data-mn-logout]")){P(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let E=_.target.closest("[data-mn-tab]");if(E){if(E.dataset.mnTab==="more"){P(!F);return}P(!1),E.dataset.mnRoute&&(location.hash="#/"+E.dataset.mnRoute);return}let I=_.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(P(!1),location.hash="#/"+I.dataset.mnRoute)}async function A(){try{let _=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!_.ok)return;let E=await _.json(),I=Array.isArray(E.pending)?E.pending.length:0;$=I;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(I),H.hidden=!(I>0)}catch{}}function k(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let _=0;function E(){let I=document.activeElement,H=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(_),_=requestAnimationFrame(E)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(_),_=requestAnimationFrame(()=>setTimeout(E,50))})}function N(){document.getElementById(g)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",D()),document.addEventListener("click",M),window.addEventListener("hashchange",()=>{P(!1),C()}),C(),A(),setInterval(A,8e3),k())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var St=ye(()=>{(function(){"use strict";var g="admin-session-expired-root",h=!1,w=null;function x(C,P){try{var M=window.ServerI18n&&ServerI18n.t(C);return M&&M!==C?M:P}catch{return P}}function F(){var C=document.getElementById(g);if(C&&C.remove(),document.body.classList.remove("is-session-expired"),h=!1,w&&w.focus)try{w.focus()}catch{}w=null}function $(C){if(C.key==="Tab"){var P=document.getElementById(g);if(P){var M=P.querySelectorAll("input, button");if(M.length){var A=M[0],k=M[M.length-1];C.shiftKey&&document.activeElement===A?(C.preventDefault(),k.focus()):!C.shiftKey&&document.activeElement===k&&(C.preventDefault(),A.focus())}}}}function D(){if(!(h||document.getElementById(g))){h=!0,w=document.activeElement,document.body.classList.add("is-session-expired");var C=document.createElement("div");C.id=g,C.className="admin-sx",C.setAttribute("role","alertdialog"),C.setAttribute("aria-modal","true"),C.setAttribute("aria-labelledby","admin-sx-title"),C.setAttribute("aria-describedby","admin-sx-body"),C.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+x("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+x("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+x("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+x("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+x("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+x("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(C),document.addEventListener("keydown",$,!0);var P=C.querySelector("#admin-sx-password");setTimeout(function(){try{P.focus()}catch{}},30),C.querySelector("[data-sx-form]").addEventListener("submit",function(M){M.preventDefault(),B(C,P)})}}function B(C,P){var M=C.querySelector("[data-sx-error]"),A=C.querySelector(".admin-sx__submit");M.hidden=!0,A.disabled=!0;var k=new URLSearchParams;k.set("password",P.value),C.querySelector("#admin-sx-remember").checked&&k.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:k.toString()}).then(function(_){return _.json().then(function(E){return{status:_.status,data:E}},function(){return{status:_.status,data:{}}})}).then(function(_){if(A.disabled=!1,_.status===200&&_.data&&_.data.ok){var E=document.querySelector('meta[name="csrf-token"]');E&&_.data.csrf_token&&(E.content=_.data.csrf_token),document.removeEventListener("keydown",$,!0),F(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(x("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}_.status===429?M.textContent=x("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):M.textContent=x("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),M.hidden=!1,P.select()}).catch(function(){A.disabled=!1,M.textContent=x("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),M.hidden=!1})}window.AdminSessionExpired={open:D,close:F,isOpen:function(){return h}}})()});var kt=ye(()=>{(function(){"use strict";let g="admin-reconnect-banner",F=0,$=0,D="ok",B=0,C=5e3,P=!1,M=0;function A(o){if(D!==o){if(D=o,o==="ok"||o==="dismissed"){N(),o==="ok"&&(F=0,$=0,C=5e3);return}k()}}function k(){let o=document.getElementById(g);o||(o=document.createElement("div"),o.id=g,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=D;let t=D==="exhausted",u=t?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${u}`,o.innerHTML=t?E():_(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>A("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),M||(M=setInterval(I,250))}function N(){let o=document.getElementById(g);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),M&&(clearInterval(M),M=0)}function _(){let o=Math.max(0,(B-Date.now())/1e3),t=C/1e3,u=Math.min(100,(t-o)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:$})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${u}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function E(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){if(D!=="reconnecting")return;let o=document.getElementById(g);if(!o)return;let t=Math.max(0,(B-Date.now())/1e3),u=C/1e3,c=Math.min(100,(u-t)/u*100),p=o.querySelector(".admin-rcb__progress-fill");p&&(p.style.width=c+"%")}function H(){$=0,F=0,C=5e3,A("reconnecting"),T()}async function T(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?b():o.status===401||o.status===403?A("ok"):m()}catch{m()}}function b(){A("ok")}function m(){if(F+=1,$+=1,$>=10){A("exhausted");return}F>=3&&(C=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,$-1))),B=Date.now()+C,A("reconnecting"),setTimeout(T,C))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{P=!1,b()});async function u(c){try{let p=await c;return p&&p.ok?D!=="ok"&&D!=="dismissed"&&b():p&&p.status===401&&!P?(P=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):p&&p.status>=500&&m(),p}catch(p){throw m(),p}}typeof o=="function"&&(window.csrfFetch=function(){return u(o.apply(this,arguments))}),window.fetch=function(c,p){let d=typeof c=="string"?c:c&&c.url||"",s=t.call(this,c,p);return d.startsWith("/admin/")||d.indexOf("//")===-1&&d.startsWith("admin/")?u(s):s}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var It=ye(()=>{(function(){"use strict";let g="admin-help-drawer-root",h={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},w=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],x=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function F(_){return _==null?"":String(_).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})}function $(){let _=(location.hash||"").replace("#/","").split("/")[0]||"";return h[_]?_:"_default"}function D(){return`
      <div id="${g}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function B(){let _=h[$()],E=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",I=_.titleKey?ServerI18n.t(_.titleKey):_.title,H=_.tipKeys.map(r=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${F(typeof r=="string"?ServerI18n.t(r):r.literal)}</span>
      </div>`).join(""),T=_.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${F(ServerI18n.t(_.fieldTipKey))}</span>
      </div>`:"",b=w.map(r=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${F(r.term)}</div>
        <div class="admin-help__glossary-def">${F(ServerI18n.t(r.defKey))}</div>
      </div>`).join(""),m=x.map(r=>`
      <a class="admin-help__resource" href="${F(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${F(r.label)}</span>
        <span class="admin-help__resource-url">${F(r.url.replace(/^https?:\/\//,""))}</span>
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
          <div class="admin-help__tips">${H}</div>
          ${T}
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
          <div class="admin-help__glossary">${b}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${m}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${E?"v"+F(E):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function C(){let _=document.getElementById(g);_||(document.body.insertAdjacentHTML("beforeend",D()),_=document.getElementById(g),_.addEventListener("click",E=>{if(E.target.closest("[data-help-close]")){P();return}E.target.closest("[data-help-shortcuts]")&&(P(),window.AdminShortcuts&&window.AdminShortcuts.open())})),_.querySelector("[data-help-body]").innerHTML=B(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",A)}function P(){let _=document.getElementById(g);_&&_.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",A)}function M(){document.getElementById(g)?P():C()}function A(_){_.key==="Escape"&&(_.preventDefault(),P())}function k(_){let E=_.target;E&&(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable)||_.key==="F1"&&(_.preventDefault(),M())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",k)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:C,close:P,toggle:M}})()});var Tt=ye(()=>{(function(){"use strict";var g="admin-shortcuts-root",h=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function w(m,r){try{var o=window.ServerI18n&&ServerI18n.t(m);return o&&o!==m?o:r}catch{return r}}function x(m,r){window.showToast&&window.showToast(m,r!==!1)}function F(m,r){return(window.csrfFetch||window.fetch)(m,r||{})}function $(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function D(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function B(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function C(){var m="idle";try{var r=await fetch("/admin/poll/status",{credentials:"same-origin"});r.ok&&(m=(await r.json()).state||"idle")}catch{}if(m==="idle"){location.hash="#/polls",x(w("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=m==="active";try{var t=await F(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);x(w(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{x(w("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function P(m){return h?m.metaKey:m.ctrlKey}var M=h?"\u2318":"Ctrl",A=[{group:"global",keys:[M,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(m){return P(m)&&(m.key==="k"||m.key==="K")},run:$},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(m){return m.key==="?"&&!P(m)&&!m.altKey||m.key==="/"&&P(m)},run:function(){H()}},{group:"global",keys:[M,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(m){return P(m)&&m.shiftKey&&(m.key==="d"||m.key==="D")},run:D},{group:"global",keys:[M,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(m){return P(m)&&m.shiftKey&&m.key==="Backspace"},run:B},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(m){return!P(m)&&"jkJK".indexOf(m.key)>=0},run:function(m){window.AdminLiveFeed.moveFocus(m.key==="j"||m.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(m){return!P(m)&&(m.key==="b"||m.key==="B")},run:function(m){window.AdminLiveFeed.blockFocused(m.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(m){return!P(m)&&m.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(m){return!P(m)&&(m.key==="p"||m.key==="P")},run:C}];function k(m){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(m):m==null?"":String(m).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})}function N(m){return A.filter(function(r){return r.group===m}).map(function(r){var o=r.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+k(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+k(w(r.labelKey,r.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function _(){var m=document.getElementById(g);m&&m.remove(),document.removeEventListener("keydown",E,!0)}function E(m){(m.key==="Escape"||m.key==="?")&&(m.preventDefault(),_())}function I(){if(!document.getElementById(g)){var m=document.createElement("div");m.id=g,m.className="admin-ks",m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-ks-title"),m.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+k(w("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+k(w("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+k(w("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+k(w("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+k(w("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(m),m.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&_()}),document.addEventListener("keydown",E,!0);var r=m.querySelector(".admin-ks__close");r&&setTimeout(function(){try{r.focus()}catch{}},30)}}function H(){document.getElementById(g)?_():I()}function T(m){if(!m)return!1;if(m.isContentEditable)return!0;var r=(m.tagName||"").toLowerCase();return r==="input"||r==="textarea"||r==="select"}function b(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(m){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var r=T(document.activeElement),o=0;o<A.length;o++){var t=A[o];if(t.group==="feed"){if(r||!b())continue}else if(r&&!P(m))continue;if(t.match(m)){m.preventDefault(),t.run(m);return}}}),window.AdminShortcuts={open:I,close:_,toggle:H,list:function(){return A.slice()}}})()});var _t=ye(()=>{(function(){"use strict";let g="theme-mode",h="admin-theme-mode",w="admin-theme-toggle";(function(){try{if(localStorage.getItem(g)!=null)return;let k=localStorage.getItem(h);(k==="light"||k==="dark"||k==="auto")&&(localStorage.setItem(g,k),localStorage.removeItem(h))}catch{}})();function F(){try{let A=localStorage.getItem(g);if(A==="light"||A==="dark"||A==="auto")return A}catch{}return"auto"}function $(A){try{localStorage.setItem(g,A)}catch{}}function D(A){let k=document.documentElement;A==="auto"?k.removeAttribute("data-theme"):k.setAttribute("data-theme",A),C(A)}function B(A){return A==="light"||A==="dark"?A:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function C(A){let k=document.getElementById(w);if(!k)return;let N=B(A);k.dataset.mode=A,k.dataset.effective=N,k.textContent=A==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",k.title=A==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):A==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function P(){let A=F(),k=A==="auto"?"light":A==="light"?"dark":"auto";$(k),D(k)}function M(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let A=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,k=document.getElementById(w);if(k){A&&k.classList.contains("admin-theme-toggle--floating")&&A.parentNode&&!A.parentNode.contains(k)&&(k.classList.remove("admin-theme-toggle--floating"),A.parentNode.insertBefore(k,A));return}let N=document.createElement("button");N.id=w,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",P),A&&A.parentNode?A.parentNode.insertBefore(N,A):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),C(F())}if(D(F()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{F()==="auto"&&C("auto")})}catch{}window.addEventListener("storage",A=>{A.key===g&&D(F())}),window.AdminThemeSwitcher={getMode:F,setMode:function(A){A!=="auto"&&A!=="light"&&A!=="dark"||($(A),D(A),C(A),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:A}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{M(),new MutationObserver(M).observe(document.body,{childList:!0,subtree:!0})}):(M(),new MutationObserver(M).observe(document.body,{childList:!0,subtree:!0}))})()});var Et=ye(()=>{(function(){"use strict";var g={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},h=[];window.DanmuStore={get:function(w){return g[w]},set:function(w,x){g[w]=x,h.forEach(function(F){F(w,x)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+w,x)},subscribe:function(w){h.push(w)},getAll:function(){return Object.assign({},g)}}})()});var $t=ye(()=>{(function(){"use strict";let w=0;function x(){return window.__adminCtx||{}}function F(){let C=x();return typeof C.getSettings=="function"?C.getSettings()||{}:{}}function $(){let C=F();if(C&&typeof C.OpsContact<"u"){let P=C.OpsContact;if(Array.isArray(P))return P[3]||P[0]||null;if(typeof P=="string")return P}return null}function D(){let C=x().appContainer||document.getElementById("app-container");if(!C)return;let P=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";C.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${P?` \xB7 v${P}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let M=C.querySelector("[data-login-reveal]");M&&M.addEventListener("click",()=>{let _=document.getElementById("password");if(!_)return;let E=_.type==="text";_.type=E?"password":"text",M.textContent=ServerI18n.t(E?"adminLoginReveal":"adminLoginHide");try{_.focus()}catch{}});let A=document.getElementById("loginForm"),k=document.getElementById("password"),N=document.getElementById("loginAttemptsHint");if(A){try{let _=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(_)&&_>0){w=_;let E=Math.max(0,5-w);if(N&&w>0&&E>0){N.hidden=!1;let I=document.getElementById("password");I&&I.classList.add("is-error"),N.textContent=ServerI18n.t("loginAttemptsRemaining",{n:E})}}}catch{}A.addEventListener("submit",async _=>{if(_.preventDefault(),!k)return;let E=new URLSearchParams;E.set("password",k.value),document.getElementById("admin-login-remember")?.checked&&E.set("remember","1");try{let I=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:E.toString(),redirect:"manual"});if(I.status===429){let H=I.headers.get("Retry-After"),T=parseInt(H,10),b=Number.isFinite(T)&&T>0?T:300;B(b);return}w+=1;try{sessionStorage.setItem("admin_login_attempts",String(w))}catch{}window.location.reload()}catch(I){console.error("Login submit failed:",I),N&&(N.hidden=!1,N.textContent=ServerI18n.t("networkError"))}})}}function B(C){let P=document.getElementById("adminLoginCard");if(!P)return;let M=$(),A=M?`<a class="admin-lockout-contact" href="${M}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";P.classList.add("admin-lockout-card"),P.innerHTML=`
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
        ${A}
      </div>
    `;let k=document.getElementById("lockoutCountdown"),N=C,_=I=>{let H=Math.floor(I/60),T=I%60;return`${String(H).padStart(2,"0")}:${String(T).padStart(2,"0")}`};k&&(k.textContent=_(N));let E=setInterval(()=>{N-=1,k&&(k.textContent=_(Math.max(0,N))),N<=0&&(clearInterval(E),w=0,D(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:D,renderLockout:B}})()});var Lt=ye(()=>{(function(){"use strict";function g(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function h(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function w(){try{let e=g();await e.prime();let n=e.get("history_stats"),[a,i,f]=await Promise.all([n?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!i.ok)return;let y=n||(a&&a.ok?await a.json():null);if(!y)return;let S=(await i.json()).distribution||[],L=y.stats&&y.stats.total||0,R=S.reduce((te,J)=>J.count>(te?.count||-1)?J:te,null),j=R?R.count:0,q=R?(R.hour||"").slice(-5):"\u2014",W=document.querySelector('[data-kpi="messages"]');W&&(W.querySelector("[data-kpi-value]").textContent=L.toLocaleString());let G=document.querySelector('[data-kpi="peak"]');G&&(G.querySelector("[data-kpi-value]").textContent=j.toLocaleString());let X=document.querySelector('[data-kpi="unique-fp"]');if(X){let te=new Set;(y.records||[]).forEach(J=>{let Z=J.fingerprint||J.fp||J.user_fingerprint;Z&&te.add(Z)}),X.querySelector("[data-kpi-value]").textContent=te.size.toLocaleString()}let le=document.querySelector('[data-kpi="session"]');if(le){let te=f&&f.ok?await f.json():null,J=te&&te.status==="live",Z=le.querySelector("[data-kpi-value]");if(J&&te.started_at){let K=Math.max(0,Math.floor(Date.now()/1e3-te.started_at)),Y=Math.floor(K/3600),ne=Math.floor(K%3600/60);Z.textContent=Y>0?`${Y}:${String(ne).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`:`${ne}:${String(K%60).padStart(2,"0")}`}else Z.textContent="\u2014"}}catch{}}function x(e,n){let a=document.querySelector(e);if(a){if(typeof n!="number"||n<=0){a.hidden=!0;return}a.hidden=!1,a.textContent=n>999?"999+":String(n)}}async function F(){try{let e=g();await e.prime();let n=e.get("blacklist"),a=e.get("widgets"),i=e.get("history_stats"),f=e.get("effects");x("[data-count-blacklist]",Array.isArray(n)?n.length:0),x("[data-count-widgets]",Array.isArray(a?.widgets)?a.widgets.length:0),x("[data-count-messages]",i?.stats?.last_24h||0),x("[data-count-effects]",Array.isArray(f?.effects)?f.effects.length:0);try{let y=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(y.ok){let S=await y.json();x("[data-count-plugins]",Array.isArray(S?.plugins)?S.plugins.length:0)}}catch{}}catch{}}async function $(){F(),D(),l()}async function D(){let e=document.querySelector("[data-dash-poll-body]"),n=document.querySelector("[data-dash-poll-timer]");if(e)try{let a=g();await a.prime();let f=a.get("metrics");if(!f){let j=await fetch("/admin/metrics",{credentials:"same-origin"});if(!j.ok)return;f=await j.json()}let y=f.poll_state;if(!y||!y.active||!Array.isArray(y.options)||y.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,n&&(n.textContent="");return}let S=y.options.reduce((j,q)=>j+(q.votes||0),0),L=["A","B","C","D","E","F"],R=0;if(y.options.forEach((j,q)=>{(j.votes||0)>(y.options[R].votes||0)&&(R=q)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${h(y.question||ServerI18n.t("dashPollRunning"))}</div>`+y.options.map((j,q)=>{let W=S?Math.round(j.votes/S*100):0;return`
            <div class="admin-dash-poll-opt ${q===R&&S>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${L[q]||String(q+1)}</span>
                <span class="label">${h(j.label||"")}</span>
                <span class="pct">${W}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:j.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${W}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:S})}</div>`,n){let j=y.remaining_seconds;n.textContent=typeof j=="number"&&j>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(j/60),ss:String(j%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function B(e){let n=e.visible!==!1,a=e.config&&e.config.title||e.type||"widget",i=(e.type||"widget").toUpperCase(),f=(e.position||"\u2014").toUpperCase(),y=n?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",S=e.created_at&&n?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,L=S!=null?(()=>{let R=Math.floor(S/86400),j=Math.floor(S%86400/3600),q=Math.floor(S%3600/60),W=S%60;return R>0?`UPTIME \xB7 ${R}d ${String(j).padStart(2,"0")}h`:j>0?`UPTIME \xB7 ${j}:${String(q).padStart(2,"0")}:${String(W).padStart(2,"0")}`:`UPTIME \xB7 ${q}:${String(W).padStart(2,"0")}`})():`STATUS \xB7 ${n?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${h(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${y}"></span>
          <span class="kind">${h(i)}</span>
          <span class="cat">${h(f)}</span>
        </div>
        <div class="title">${h(a)}</div>
        <div class="uptime">${L}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${n?" is-active":""}" data-widget-action="toggle" data-running="${n?"1":"0"}">${n?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function C(e,n){try{let a=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!n}})});if(!a.ok)throw new Error("HTTP "+a.status);M()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function P(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",n=>{let a=n.target.closest(".admin-dash-widget-tile");if(!a)return;let i=n.target.dataset.widgetAction,f=a.dataset.widgetId;if(!(!i||!f)){if(i==="toggle")C(f,n.target.dataset.running==="1");else if(i==="config"){let y=document.querySelector('[data-route="widgets"]');y&&y.click()}}}))}async function M(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let n=g();await n.prime();let a=n.get("widgets");if(!a){let f=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!f.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}a=await f.json()}let i=(a.widgets||a.items||[]).slice(0,4);if(i.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+i.map(B).join("")+"</div>",P(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let A=null,k=null,N=null;function _(e){let n=Math.max(0,Math.floor(Date.now()/1e3-e)),a=Math.floor(n/3600),i=Math.floor(n%3600/60),f=n%60;return a>0?`${a}:${String(i).padStart(2,"0")}:${String(f).padStart(2,"0")}`:`${String(i).padStart(2,"0")}:${String(f).padStart(2,"0")}`}function E(e){let n=document.getElementById("admin-session-banner"),a=document.getElementById("sec-live-feed");if(a&&a.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),n&&n.classList.toggle("is-hero",!(e&&e.status==="live")),!n)return;if(A=e,!(e&&e.status==="live"))n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let f=e.started_at||Date.now()/1e3;n.hidden=!1,n.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${h(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,I(f)}n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",T))}function I(e){N&&clearInterval(N);let n=()=>{let a=document.querySelector("[data-sess-timer]");a&&(a.textContent=_(e))};n(),N=setInterval(n,1e3)}function H(){N&&(clearInterval(N),N=null)}async function T(e){let n=e.target.closest("[data-sess-action]");if(!n)return;let a=n.dataset.sessAction;if(a==="open"){let i=document.querySelector("[data-sess-name]"),f=(i?i.value:"").trim();if(!f){i&&i.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}n.disabled=!0;try{let y=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f})}),S=await y.json();if(!y.ok){window.showToast&&window.showToast(S.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:f}),!0),E(S.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{n.disabled=!1}}else if(a==="close"){let i=n.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",f=(L,R)=>`<option value="${L}"${L===i?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${f("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${f("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${f("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;n.disabled=!0;let S=document.getElementById("sessCloseBehavior")?.value;if(S&&S!==i)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:S})})}catch{}try{let L=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await L.json();if(!L.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),E({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{n.disabled=!1}}}async function b(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json();E(n)}catch{}}function m(){b(),k&&clearInterval(k),k=setInterval(b,1e4)}function r(){k&&(clearInterval(k),k=null),H()}let o=null,t=null,u=0;function c(){let e=document.querySelector("[data-cockpit-overlay]"),n=window.AdminOverlayControl,a=t;if(!e||!n||!a)return;e.classList.toggle("is-on",a.live);let i=(S,L)=>{S.textContent!==L&&(S.textContent=L)},f=e.querySelector("[data-cockpit-status]");f&&i(f,n.statusText(a.live,a.count));let y=e.querySelector('[data-cockpit-action="toggle"]');y&&(y.dataset.i18n=n.toggleKey(a.live),i(y,ServerI18n.t(y.dataset.i18n)),y.dataset.next=a.live?"standby":"live")}async function p(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let n=u,a=null,i=null;try{let S=await fetch("/overlay_status",{credentials:"same-origin"});S.ok&&(a=(await S.json()).overlay_count||0)}catch{}try{let S=await fetch("/admin/broadcast/status",{credentials:"same-origin"});S.ok&&(i=(await S.json()).mode==="live")}catch{}let f=t;if(!f&&i===null)return;t={live:i!==null&&n===u?i:f?f.live:i,count:a!==null?a:f?f.count:0},c()}document.addEventListener("admin-overlay-state",e=>{let n=e&&e.detail||{};u+=1,t={live:!!n.live,count:typeof n.count=="number"?n.count:t?t.count:0},c()}),document.addEventListener("admin-route-applied",e=>{let n=e&&e.detail&&e.detail.route;n!=="live"&&n!=="dashboard"||(c(),p())});function d(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async i=>{let f=i.target.closest("[data-cockpit-action]");if(!f)return;let y=f.dataset.cockpitAction;if(y==="clear"){window.AdminOverlayControl?.clearScreen();return}y==="toggle"&&(await window.AdminOverlayControl?.setDisplay(f.dataset.next==="live"),p())});let n=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');n&&n.addEventListener("click",s);let a=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');a&&a.addEventListener("click",()=>{location.hash="#/polls"})}async function s(){let e;try{let i=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);e=await i.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let n=document.createElement("div");n.className="admin-soh-qr",n.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:n,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(e.url)}function l(){d(),p(),o&&clearInterval(o),o=setInterval(p,5e3)}function v(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:w,refreshSummary:$,refreshSidebarBadges:F,populatePoll:D,populateWidgets:M,refreshSessionBanner:b,startSessionPolling:m,stopSessionPolling:r,refreshCockpitOverlay:p,renderCockpitOverlay:c,startCockpitPolling:l,stopCockpitPolling:v}})()});var xt=ye(()=>{(function(){"use strict";let g="sec-viewer-config-defaults",h="sec-overlay-layout",w="sec-viewer-config-limits",x=["sec-themes",g,"sec-viewer-theme",w],F=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],$=window.AdminUtils&&window.AdminUtils.escapeHtml||function(O){return String(O).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},D=window.DANMU_CONFIG?.settingRanges||{},B=Object.fromEntries(Object.entries({Opacity:{min:20,max:100,step:1,unit:"%"},FontSize:{min:16,max:64,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}}).map(([O,V])=>{let z=D[O]||{};return[O,{...V,min:Number.isFinite(Number(z.min))?Number(z.min):V.min,max:Number.isFinite(Number(z.max))?Number(z.max):V.max}]})),C=[14,20,32,44,64],P=window.DANMU_CONFIG?.defaultColorPalette||[],M=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}],A={stroke:[{value:"none",labelKey:"themeStrokeNone"},{value:"thin",labelKey:"themeStrokeThin"},{value:"thick",labelKey:"themeStrokeThick"}],shadow:[{value:"none",labelKey:"themeShadowNone"},{value:"soft",labelKey:"themeShadowSoft"},{value:"strong",labelKey:"themeShadowStrong"}]};function k(O,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let z=window.ServerI18n.t(O,V);if(z&&z!==O)return z}return O}let N={};function _(O){if(N[O]!=null)return N[O];let V=B[O];return V?V.step:1}function E(O,V){N[O]=Number(V)||_(O)}let I={options:null,fonts:[],allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},H=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],T=["Color","FontFamily","Layout"];function b(O){return T.indexOf(O)!==-1}function m(O){let V=I.options&&I.options[O],z=V&&V[1];return Array.isArray(z)?z.slice():[]}function r(O){return O==="Color"?P.map(V=>V.replace(/^#/,"").toUpperCase()):O==="Layout"?M.map(V=>V.value):O==="FontFamily"?(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(z=>typeof z=="string"?z:z.name||z.family||"").filter(Boolean):[]}function o(O,V){return O==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function t(){return`
      <div id="${g}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-dsp2-grid">
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head" aria-hidden="true">
              <span>${$(k("displayColParam"))}</span>
              <span>${$(k("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right">${$(k("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):$(k("loading"))}
            </div>
          </div>

          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${$(k("mlLivePreview"))}</span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${$(k("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${$(k("displayPreviewSample2"))}</span>
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
                \u21BA ${$(k("displayDeployRevert"))}
              </button>
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export">
                \u2197 ${$(k("displayExportJson"))}
              </button>
            </div>
          </div>
        </div>

        <!-- \u89C0\u773E\u5916\u90E8\u5716\u7247\uFF085.8.0\uFF09\u3002\u9810\u8A2D\u95DC\u9589\uFF1B\u5224\u65B7\u5728\u4F3A\u670D\u5668\uFF08/fire\uFF09\uFF0C\u9019\u88E1\u53EA\u8B80\u5BEB
             /admin/viewer-images\u3002\u95DC\u9589\u6642\u7DB2\u7AD9\u8207\u683C\u5F0F\u5169\u5217\u6536\u8D77\u4F86\u3002 -->
        <div id="viewer-images-group">
          <div class="admin-ui-group-label">${$(k("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${$(k("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall admin-vi-row" data-vi-row style="display:none">
              <label class="lbl" for="viewer-images-hosts">${$(k("viHosts"))}</label>
              <span class="val admin-vi-hosts">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off"
                  placeholder="${$(k("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row admin-vi-row" data-vi-row style="display:none" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${$(k("viExtensions"))}</span>
              <span class="val admin-vi-exts" id="viewer-images-extensions">
                ${H.map(O=>`
                <label class="admin-vi-ext">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${O.value}" />
                  <span>${O.label}</span>
                </label>`).join("")}
              </span>
            </div>
          </div>
        </div>
      </div>`}function u(){return`
      <details id="${h}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
        <summary class="admin-ui-page-title">${$(k("overlayLayoutFoldTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
          <div class="admin-ui-group-label">${$(k("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlMaxTracks"))}
                <span class="sub">${$(k("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlAvoidOverlap"))}
                <span class="sub">${$(k("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${$(k("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002 -->
          <div class="admin-ui-group-label">${$(k("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlSafeArea"))}
                <span class="sub">${$(k("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${$(k("dlStrokeMode"))}
                <span class="sub">${$(k("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${$(k("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${$(k("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${$(k("dlStrokeNever"))}</button>
              </span>
            </div>
            <!-- 2026-09-08\uFF1A\u6253\u5B57\u6295\u7968\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\uFF0C
                 \u800C\u662F\u8ABF\u6697\u3002\u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${$(k("dlDimPollVotes"))}
                <span class="sub">${$(k("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${$(k("dlPollVoteOpacity"))}
                <span class="sub">${$(k("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>
      </details>`}let c=[{key:"Opacity",labelKey:"displayLabelOpacity",kind:"slider",fmt:O=>`${Math.round(O)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",kind:"size",fmt:O=>`${O}px`},{key:"Speed",labelKey:"displayLabelSpeed",kind:"slider",fmt:O=>`${(+O).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",kind:"color",fmt:O=>`#${String(O||"").replace(/^#/,"").toUpperCase()||"\u2014"}`},{key:"FontFamily",labelKey:"displayLabelFontFamily",kind:"pick",fmt:O=>O||"\u2014"},{key:"Layout",labelKey:"displayLabelLayout",kind:"pick",fmt:O=>p(O)},{key:"Effects",labelKey:"displayLabelEffect",kind:"effects",fixed:!0},{key:"stroke",labelKey:"themeDetailStroke",kind:"theme",fixed:!0},{key:"shadow",labelKey:"themeDetailShadow",kind:"theme",fixed:!0}];function p(O){let V=M.find(z=>z.value===O);return V?k(V.labelKey):O||"\u2014"}function d(O){let V=window.AdminThemes;return V&&typeof V.segOf=="function"?V.segOf(O):null}function s(O){let V=I.options||{};if(O.kind==="theme")return!1;if(O.kind==="effects")return!V.Effects||V.Effects[0]!==!1;let z=V[O.key];return!!(z&&z[0]!==!1)}function l(O){let V=window.AdminThemes,z=V&&typeof V.styleDefaults=="function"?V.styleDefaults():null;return z&&z[O]||null}function v(O){let V=l(O);return V&&V.source==="theme"?V.value:(I.options&&I.options[O]||[])[3]}function e(O){if(O.key!=="Color"&&O.key!=="FontFamily")return"";let V=l(O.key);return V?V.source==="theme"?`<span class="admin-ui-chip" data-source-chip="theme">${$(k("styleFromTheme"))}</span>`:V.rejected?`<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${$(String(V.theme_value||""))}">${$(k("styleThemeValueUnused"))}</span>`:"":""}function n(O){let V=s(O),z=a(O);return(z?`<div class="admin-dsp2-value-badge ${V?"is-on":""}" data-value-badge>${$(z)}</div>`:"")+e(O)}function a(O){if(O.key==="Color"||O.key==="FontFamily")return O.fmt(v(O.key));if(O.kind==="theme"){let ae=d(O.key),fe=A[O.key].find(ve=>ve.value===ae);return fe?k(fe.labelKey):"\u2014"}if(O.kind==="effects")return"";let z=(I.options&&I.options[O.key]||[])[3];return O.fmt?O.fmt(z):z!=null?String(z):"\u2014"}function i(O,V){let z=V[3],ae=B[O.key],fe=s(O);if(O.kind==="slider"){let ve=ae,ge=z!=null?Number(z):ve.min,be=isFinite(ge)?ge:ve.min,xe=(be-ve.min)/Math.max(1e-6,ve.max-ve.min)*100,_e=$(k(O.labelKey));return`
        <div class="admin-dsp2-track" data-track="${O.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${O.key}" data-num-index="3"
            aria-label="${_e}"
            min="${ve.min}" max="${ve.max}" step="${_(O.key)}" value="${$(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${xe.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${xe.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${O.key}" aria-label="${_e}"
              min="${ve.min}" max="${ve.max}" step="${_(O.key)}" value="${$(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(O.kind==="size"){let ve=Number(z);return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${C.map(ge=>{let be=ve===ge;return`<button type="button" class="admin-dsp2-fchip ${be?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ge}" aria-pressed="${be}">${ge}</button>`}).join("")}
        </div>`}if(O.kind==="color"){let ve="#"+String(z||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${q().map(ge=>{let be=ge.slice(1),xe=ge.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${xe?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ge}" aria-label="${ge}" aria-pressed="${xe}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${$(k("specificColor"))}">
            <span class="sr-only">${$(k("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${$(ve)}" />
          </label>
        </div>
      `}if(O.key==="FontFamily"){let ve=(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(we=>{let Be=typeof we=="string"?we:we.name||we.family||"",Ne=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Be,label:Ne}}).filter(we=>we.value),ge=String(z||""),be=fe&&!!I.allowlistEdit.FontFamily,xe=be?I.allowlistEdit.FontFamily:new Set(m("FontFamily").map(we=>o("FontFamily",we))),_e=!be&&xe.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map(we=>{let Be=we.value===ge,Ne=be?xe.has(we.value):_e||xe.has(we.value),Re=["admin-dsp2-tchip",Be?"is-active":"",be?"is-editing":"",fe&&!Ne?"is-blocked":""].filter(Boolean).join(" "),ze=be?`data-allow-key="FontFamily" data-allow-value="${$(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${$(we.value)}"`;return`<button type="button" class="${Re}" ${ze}
              aria-pressed="${be?Ne?"true":"false":Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ne?"\u2713 ":""}</span>`:""}${$(we.label)}
            </button>`}).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${$(k("adminRouteTitle_fonts"))} \u203A</a>
        </div>
        ${f(O)}
      `}if(O.key==="Layout"){let ve=String(z||"scroll"),ge=fe&&!!I.allowlistEdit.Layout,be=ge?I.allowlistEdit.Layout:new Set(m("Layout").map(_e=>o("Layout",_e))),xe=!ge&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${M.map(_e=>{let we=_e.value===ve,Be=ge?be.has(_e.value):xe||be.has(_e.value),Ne=["admin-dsp2-tile",we?"is-active":"",ge?"is-editing":"",fe&&!Be?"is-blocked":""].filter(Boolean).join(" "),Re=ge?`data-allow-key="Layout" data-allow-value="${_e.value}"`:`data-chip-key="Layout" data-chip-value="${_e.value}"`;return`<button type="button" class="${Ne}" ${Re}
              aria-pressed="${ge?Be?"true":"false":we?"true":"false"}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${_e.icon}</span>
              <span class="admin-dsp2-tile-label">${k(_e.labelKey)}</span>
              ${ge?`<span class="admin-dsp2-allow-mark">${Be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${f(O)}
      `}if(O.kind==="effects")return`<a class="admin-dsp2-link" href="#/effects">${$(k("adminNavEffects"))} \u203A</a>`;if(O.kind==="theme"){let ve=d(O.key);return`
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${O.key}" role="group"
              aria-label="${$(k(O.labelKey))}">
          ${A[O.key].map(ge=>{let be=ge.value===ve;return`<button type="button" data-theme-opt="${ge.value}" class="${be?"is-active":""}"
              aria-pressed="${be?"true":"false"}">${$(k(ge.labelKey))}</button>`}).join("")}
        </span>`}return""}function f(O){if(!b(O.key)||!s(O))return"";let V=!!I.allowlistEdit[O.key],z=m(O.key),ae=r(O.key).length||0,fe=z.length>0?k("displayAllowSummaryPartial",{n:z.length,total:ae,label:y(O.key)}):k("displayAllowSummaryAll",{total:ae});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${O.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${O.key}">${$(fe)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${O.key}">${$(k("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${O.key}">${$(k("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${O.key}">${$(k("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${O.key}">${$(k("displayEditAllowlistTitle"))}</button>
        `}
      </div>`}function y(O){return k(O==="Color"?"displayLabelColor":O==="FontFamily"?"displayLabelFontFamily":O==="Layout"?"displayLabelLayout":"displayLabelOption")}function S(O,V){if(O.kind!=="slider"&&O.kind!=="size"||!s(O))return"";let z=B[O.key],ae=V[1]!=null?V[1]:z.min,fe=V[2]!=null?V[2]:z.max,ve=_(O.key),ge=(be,xe,_e,we)=>`
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${$(k(be))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${O.key}" data-num-index="${xe}" ${we}
              value="${$(String(_e))}" />
            ${z.unit?`<span>${z.unit}</span>`:""}
          </span>
        </label>`;return`
      <div class="admin-dsp2-band">
        ${ge("displayMinAudience",1,ae,`min="${z.min}" max="${z.max}" step="${ve}"`)}
        ${ge("displayMaxAudience",2,fe,`min="${z.min}" max="${z.max}" step="${ve}"`)}
        ${ge("mlStep","step",ve,'min="0.1" step="0.1"')}
      </div>`}function L(O){let V=s(O),z=$(k(O.labelKey)+" \xB7 "+k("displayColAudience")),ae=$(k(V?"displayCustomizable":"displayLocked")),fe=O.fixed?`disabled aria-disabled="true" data-fixed-toggle="${O.key}"`:`data-toggle-key="${O.key}"`;return`
      <button type="button" class="admin-dsp2-pill ${V?"is-on":""}" ${fe}
        aria-pressed="${V?"true":"false"}" aria-label="${z}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${ae}</span>
      </button>`}function R(O){let V=I.options&&I.options[O.key]||[!1,"","",""],z=s(O),ae=O.kind==="color"&&z?'<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>':"";return`
      <div class="admin-dsp2-row ${z?"is-on":"is-off"} ${O.fixed?"is-fixed":""}" data-row-key="${O.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${$(k(O.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${n(O)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${i(O,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${S(O,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${L(O)}</div>
      </div>${ae}`}function j(){let O=document.getElementById("dsp2-rows");if(O){if(!I.options){O.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):$(k("loading"))}`;return}O.innerHTML=c.map(R).join(""),le(),Z()}}function q(){let O=m("Color");return[...new Set((O.length?O:P).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function W(O){let V=O.slice(1).match(/.{2}/g).map(z=>{let ae=parseInt(z,16)/255;return ae<=.04045?ae/12.92:((ae+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function G(O,V="error"){I.paletteNotice={message:O,type:V};let z=document.querySelector("[data-palette-feedback]");z&&(z.textContent=O,z.classList.toggle("is-error",V==="error"))}function X(O,V=!0){let z=document.querySelector("[data-admin-color-palette]"),ae=z?.querySelector("[data-palette-preview-text]");!ae||!/^#[0-9A-F]{6}$/i.test(O)||(I.palettePreview=O.toUpperCase(),ae.style.color=O,z.querySelector("[data-palette-preview-code]").textContent=O.toUpperCase(),z.querySelectorAll("[data-palette-preview]").forEach(fe=>{let ve=fe.dataset.palettePreview===O.toUpperCase();fe.setAttribute("aria-pressed",String(ve)),fe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ae.getAnimations().forEach(fe=>fe.cancel()),ae.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function le(){let O=document.querySelector("[data-admin-color-palette]");if(!O||!I.options)return;let V=q(),z=(I.options.ViewerColorPicker||[!0])[0]!==!1,ae=I.paletteBusy?"disabled":"",fe=I.palettePreview||V[0],ve=$(I.paletteDraft),ge=I.paletteNotice;O.setAttribute("aria-busy",String(I.paletteBusy)),O.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${$(k("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${$(k("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${$(k("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${V.length}</strong><span>${$(k("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${V.map((be,xe)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${W(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${$(k("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===fe}" ${ae}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(xe+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${V.length<=1?"disabled":ae}
                aria-label="${$(k("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${$(k("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${$(k("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(I.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${ae} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${I.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${ae} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":ae}>
                <span aria-hidden="true">\uFF0B</span> ${$(k("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${$(k(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${ge?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${ge?$(ge.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${$(k("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${$(k("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${fe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${$(k("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${$(k("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${$(k("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${z?"checked":""} ${ae} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${$(k("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,X(fe,!1)}async function te(O,V){if(I.paletteBusy)return;let z=document.querySelector("[data-admin-color-palette]");I.paletteBusy=!0,z.setAttribute("aria-busy","true"),z.querySelector("[data-palette-sync-status]").textContent=k("viewerPaletteSaving"),z.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let ae=await de("Color",O);I.paletteBusy=!1,I.paletteNotice={type:ae?"success":"error",message:k(ae?"viewerPaletteSaved":"updateFailed")},ae&&V&&(I.palettePreview=V),le(),(V&&ae?z.querySelector(`[data-palette-preview="${V}"]`):z.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function J(O,V){let z=I.options&&I.options[O];return z&&z[3]!=null?z[3]:V}function Z(){let O=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),z=document.querySelector("[data-preview-pill='2']"),ae=document.querySelector("[data-preview-foot-l]"),fe=document.querySelector("[data-preview-foot-r]");if(!O||!V||!z||!I.options)return;let ve=Number(J("FontSize",32)),ge=Number(J("Opacity",92)),be=Number(J("Speed",1)),xe="#"+String(v("Color")||J("Color","7DD3FC")).replace(/^#/,""),_e=String(v("FontFamily")||J("FontFamily","NotoSansTC")),we=String(J("Layout","scroll")),Be=Math.min(ve,36),Ne=Math.max(0,Math.min(100,ge))/100,Re=window.AdminThemes&&window.AdminThemes.activeStyles&&window.AdminThemes.activeStyles()||{},ze=Re.textStroke?Math.max(0,Math.min(6,Number(Re.strokeWidth)||0)):0,et=/^#[0-9a-fA-F]{3,8}$/.test(String(Re.strokeColor||""))?Re.strokeColor:"#000000",nt=Re.textShadow?Math.max(0,Math.min(40,Number(Re.shadowBlur)||0)):0;V.style.fontSize=Be+"px",V.style.color=xe,V.style.opacity=Ne.toFixed(2),V.style.fontFamily=_e+", system-ui, sans-serif",V.style.webkitTextStroke=ze?`${ze}px ${et}`:"",V.style.paintOrder=ze?"stroke fill":"",V.style.textShadow=nt?`0 0 ${nt}px ${xe}`:"none",z.style.fontSize=(Be*.78).toFixed(0)+"px",z.style.opacity=(Ne*.9).toFixed(2),z.style.fontFamily=_e+", system-ui, sans-serif",O.dataset.layout=we,ae&&(ae.textContent=`${p(we)} \xB7 ${ve}px \xB7 ${(+be).toFixed(1)}\xD7`),fe&&(fe.textContent=k("displayOpacitySuffix",{n:Math.round(ge)}))}let K=["Color","ViewerColorPicker","FontFamily"];function Y(O){K.includes(O)&&window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh()}async function ne(O,V){try{let z=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:O,enabled:!!V})});if(!z.ok)throw new Error("toggle "+z.status);Array.isArray(I.options[O])||(I.options[O]=[!1,"","",""]),I.options[O][0]=!!V,V||delete I.allowlistEdit[O],j(),Y(O),O==="ViewerColorPicker"?document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0}):document.querySelector(`[data-toggle-key="${O}"]`)?.focus({preventScroll:!0});let ae=c.find(ve=>ve.key===O),fe=O==="ViewerColorPicker"?k("viewerPaletteAllowPicker"):ae?k(ae.labelKey):O;window.showToast&&window.showToast(`${fe} ${k("settingsUpdated")}`,!0)}catch(z){console.warn("[admin-display] toggle failed:",z),window.showToast&&window.showToast(k("updateFailed"),!1),await me(),j()}}async function oe(O,V,z){try{let ae=z;if(O==="Color"){let ve=String(ae).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(k("colorFormatError"),!1);return}ae=ve.toUpperCase()}else if(O==="Opacity"||O==="FontSize"||O==="Speed"){ae=O==="Speed"?parseFloat(ae):parseInt(ae,10);let ve=B[O];if(Number.isNaN(ae)||ve&&(ae<ve.min||ae>ve.max)){window.showToast&&window.showToast(`${O} ${ve.min}\u2013${ve.max}`,!1);return}}let fe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:O,value:ae,index:V})});if(!fe.ok)throw new Error("update "+fe.status);Array.isArray(I.options[O])||(I.options[O]=[!1,"","",""]),I.options[O][V]=ae,ue(O),Z(),Y(O)}catch(ae){console.warn("[admin-display] update failed:",ae),window.showToast&&window.showToast(k("updateFailed"),!1)}}async function de(O,V){try{let z=await window.csrfFetch(`/admin/options/${encodeURIComponent(O)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!z.ok)throw new Error("allowlist "+z.status);let ae=await z.json().catch(()=>({}));ae&&Array.isArray(ae.option)?I.options[O]=ae.option:Array.isArray(I.options[O])&&(I.options[O][1]=V.slice()),ue(O),Z(),Y(O);let fe=r(O).length||0,ve=O==="Color"?k("settingsUpdated"):V.length>0?k("displayAllowlistToastPartial",{key:O,n:V.length,total:fe}):k("displayAllowlistToastAll",{key:O});return O!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(z){return console.warn("[admin-display] allowlist failed:",z),O!=="Color"&&window.showToast&&window.showToast(k("updateFailed"),!1),!1}}function ue(O){let V=document.querySelector(`#${g} [data-row-key="${O}"]`);if(!V||!I.options)return;let z=c.find(ge=>ge.key===O);if(!z)return;let ae=I.options[O]||[!1,"","",""],fe=ae[3],ve=V.querySelector("[data-row-badges]");if(ve&&(ve.innerHTML=n(z)),b(O)||z.kind==="theme"){let ge=V.querySelector("[data-picker-host]");ge&&(ge.innerHTML=i(z,ae));return}if(O==="FontSize"){V.querySelectorAll(`[data-chip-key="${O}"]`).forEach(be=>{let xe=String(be.getAttribute("data-chip-value"))===String(fe??"");be.classList.toggle("is-active",xe),be.setAttribute("aria-pressed",xe?"true":"false")});let ge=V.querySelector("[data-band-host]");ge&&!ge.contains(document.activeElement)&&(ge.innerHTML=S(z,ae))}if(z.kind==="slider"){let ge=B[O],be=Number(fe??ge.min),xe=(be-ge.min)/Math.max(1e-6,ge.max-ge.min)*100,_e=V.querySelector(".admin-dsp2-slider-fill"),we=V.querySelector(".admin-dsp2-slider-thumb");_e&&(_e.style.width=xe.toFixed(2)+"%"),we&&(we.style.left=`calc(${xe.toFixed(2)}% - 8px)`);let Be=V.querySelector(".admin-dsp2-range");Be&&document.activeElement!==Be&&(Be.value=String(be));let Ne=V.querySelector(".admin-dsp2-num");Ne&&document.activeElement!==Ne&&(Ne.value=String(be));let Re=V.querySelector("[data-band-host]");Re&&!Re.contains(document.activeElement)&&(Re.innerHTML=S(z,ae))}}async function me(){try{let O=await fetch("/get_settings",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);I.options=await O.json()}catch(O){console.warn("[admin-display] /get_settings failed:",O),I.options=I.options||{}}}async function Te(){try{let O=await fetch("/fonts",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);let V=await O.json();I.fonts=Array.isArray(V)?V:V.fonts||[]}catch{I.fonts=["NotoSansTC","Inter"]}}function Ee(){if(!I.options){window.showToast&&window.showToast(k("loading"),!1);return}let O={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:I.options},V=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),z=URL.createObjectURL(V),ae=document.createElement("a");ae.href=z,ae.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(z),window.showToast&&window.showToast(k("displayExportDone"),!0)}let Ae=["Opacity","FontSize","Speed","Color","FontFamily","Layout"],se=["Color","FontFamily","Layout"];function ie(){let O=window.DANMU_CONFIG?.settingDefaults||{},V=window.DANMU_CONFIG?.settingRanges||{},z=[];for(let ae of Ae){let fe=O[ae];if(!Array.isArray(fe)||fe.length<4)return null;if(z.push({url:"/admin/Set",body:{key:ae,enabled:!!fe[0]}}),se.includes(ae)){if(fe[3]!==""&&fe[3]!=null){let ve=ae==="Color"?String(fe[3]).replace(/^#/,"").toUpperCase():fe[3];z.push({url:"/admin/update",body:{type:ae,value:ve,index:3}})}}else{let ve=V[ae];if(!ve)return null;let ge=be=>Math.min(ve.max,Math.max(ve.min,Number(be)));z.push({url:"/admin/update",body:{type:ae,value:ve.min,index:1}}),z.push({url:"/admin/update",body:{type:ae,value:ve.max,index:2}}),z.push({url:"/admin/update",body:{type:ae,value:ge(fe[3]),index:3}})}}return z}async function ce(){if(!await window.HudConfirm?.open({icon:"\u21A9",title:k("displayRevertConfirmTitle"),subtitle:k("cfmSubRevertDefaults"),severity:"danger",body:k("displayRevertConfirm"),confirmLabel:k("displayDeployRevert")}))return;let V=!1;try{let z=ie();if(!z)throw new Error("server defaults unavailable");for(let ae of z){let fe=await window.csrfFetch(ae.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.body)});if(!fe||!fe.ok)throw new Error(`${ae.url} ${fe?fe.status:"?"}`)}}catch(z){V=!0,console.warn("[admin-display] revert failed:",z)}await me(),j(),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh(),window.showToast&&window.showToast(k(V?"updateFailed":"displayRevertDone"),!V)}function U(O){O.addEventListener("click",V=>{let z=V.target.closest("[data-palette-preview]");if(z){X(z.dataset.palettePreview);return}let ae=V.target.closest("[data-palette-remove]");if(ae){let _e=q();if(_e.length>1){let we=_e.filter(Be=>Be!==ae.dataset.paletteRemove);te(we,we.includes(I.palettePreview)?I.palettePreview:we[0])}return}if(V.target.closest("[data-palette-add]")){let _e=O.querySelector("[data-palette-hex]"),we=String(_e.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){I.paletteInvalid=!0,_e.setAttribute("aria-invalid","true"),G(k("colorFormatError"));return}let Be=q();if(Be.includes("#"+we)){G(k("viewerPaletteDuplicate"));return}Be.length<64&&te([...Be,"#"+we],"#"+we);return}let fe=V.target.closest("[data-toggle-key]");if(fe){let _e=fe.getAttribute("data-toggle-key"),we=!!(I.options[_e]||[])[0];ne(_e,!we);return}let ve=V.target.closest("[data-theme-opt]");if(ve){let _e=ve.closest("[data-theme-seg]");_e&&window.AdminThemes&&window.AdminThemes.setSeg&&window.AdminThemes.setSeg(_e.getAttribute("data-theme-seg"),ve.getAttribute("data-theme-opt"));return}let ge=V.target.closest("[data-allow-action]");if(ge){let _e=ge.getAttribute("data-allow-action"),we=ge.getAttribute("data-allow-key");if(!we)return;if(_e==="edit"){let Be=m(we).map(Ne=>o(we,Ne));I.allowlistEdit[we]=new Set(Be.length?Be:r(we)),ue(we);return}if(_e==="cancel"){delete I.allowlistEdit[we],ue(we);return}if(_e==="clear"){delete I.allowlistEdit[we],de(we,[]);return}if(_e==="apply"){let Be=I.allowlistEdit[we]||new Set,Ne=r(we),Re=Array.from(Be),ze=Ne.length>0&&Re.length===Ne.length&&Ne.every(et=>Be.has(et));delete I.allowlistEdit[we],de(we,ze?[]:Re);return}}let be=V.target.closest("[data-allow-key][data-allow-value]");if(be){let _e=be.getAttribute("data-allow-key"),we=I.allowlistEdit[_e];if(we){let Be=o(_e,be.getAttribute("data-allow-value"));we.has(Be)?we.delete(Be):we.add(Be),ue(_e)}return}let xe=V.target.closest("[data-chip-key]");if(xe){let _e=xe.getAttribute("data-chip-key"),we=xe.getAttribute("data-chip-value");O.querySelectorAll(`[data-chip-key="${_e}"]`).forEach(Be=>Be.classList.remove("is-active")),xe.classList.add("is-active"),oe(_e,3,we);return}if(V.target.closest("#dsp2-revert")){ce();return}if(V.target.closest("#dsp2-export")){Ee();return}}),O.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),O.querySelector("[data-palette-add]")?.click())}),O.addEventListener("change",V=>{let z=V.target;if(!z)return;if(z.matches("[data-viewer-color-picker]")){z.disabled=!0,ne("ViewerColorPicker",z.checked);return}if(z.closest("[data-vi-toggle]")){Oe({enabled:z.checked});return}if(z.closest("[data-vi-ext]")){let be=Array.from(O.querySelectorAll("[data-vi-ext]")).filter(xe=>xe.checked).map(xe=>xe.getAttribute("data-vi-ext"));Oe({extensions:be});return}if(z.id==="viewer-images-hosts"){Oe({hosts:z.value.split(/[\s,]+/).filter(Boolean)});return}if(z.classList&&z.classList.contains("admin-dsp2-range")){oe(z.getAttribute("data-range-key"),3,z.value);return}let ae=z.getAttribute("data-num-key");if(!ae)return;let fe=z.getAttribute("data-num-index");if(fe==="step"){E(ae,z.value);let be=z.closest("[data-row-key]"),xe=c.find(we=>we.key===ae),_e=be&&be.querySelector("[data-band-host]");_e&&xe&&(_e.innerHTML=S(xe,I.options[ae]||[])),ue(ae);return}let ve=parseInt(fe,10);if(Number.isNaN(ve))return;let ge=z.value;ae==="Color"&&(ge=String(ge).replace(/^#/,"").toUpperCase()),oe(ae,ve,ge)}),O.addEventListener("input",V=>{let z=V.target;if(z){if(z.matches("[data-palette-picker]")){I.paletteDraft=z.value.toUpperCase(),I.paletteInvalid=!1;let ae=O.querySelector("[data-palette-hex]");ae.value=I.paletteDraft,ae.removeAttribute("aria-invalid"),G("","success"),X(I.paletteDraft);return}if(z.matches("[data-palette-hex]")){I.paletteDraft=z.value,I.paletteInvalid=!1;let ae=z.value.replace(/^#/,"");z.removeAttribute("aria-invalid"),G("","success"),/^[0-9a-fA-F]{6}$/.test(ae)&&(O.querySelector("[data-palette-picker]").value="#"+ae,X("#"+ae));return}if(z.classList&&z.classList.contains("admin-dsp2-range")){let ae=z.getAttribute("data-range-key"),fe=B[ae],ve=Number(z.value),ge=(ve-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,be=z.closest("[data-row-key]");if(be){let xe=be.querySelector(".admin-dsp2-slider-fill"),_e=be.querySelector(".admin-dsp2-slider-thumb");xe&&(xe.style.width=ge.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(ve))}Array.isArray(I.options[ae])&&(I.options[ae][3]=ve),Z();return}if(z.classList&&z.classList.contains("admin-dsp2-num")){let ae=z.getAttribute("data-num-key"),fe=parseInt(z.getAttribute("data-num-index"),10);if(Number.isNaN(fe)||!Array.isArray(I.options[ae]))return;I.options[ae][fe]=z.type==="number"?Number(z.value):z.value,Z()}}})}function Q(O){O.addEventListener("click",V=>{let z=V.target.closest("[data-dl-step]");if(z){let fe=z.closest("[data-dl-stepper]");if(!fe)return;let ve=fe.getAttribute("data-dl-stepper"),ge=Number(Me[ve]??0);De(ve,ge+Number(z.getAttribute("data-dl-step")));return}let ae=V.target.closest("[data-dl-opt]");if(ae){let fe=ae.closest("[data-dl-seg]");if(!fe)return;let ve=fe.getAttribute("data-dl-seg"),ge=ae.getAttribute("data-dl-opt");De(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(ge):ge)}}),O.addEventListener("change",V=>{let z=V.target.closest("[data-dl-toggle]");if(z){De(z.getAttribute("data-dl-toggle"),z.checked);return}let ae=V.target.closest("[data-dl-range]");ae&&De(ae.getAttribute("data-dl-range"),Number(ae.value))}),O.addEventListener("input",V=>{let z=V.target.closest("[data-dl-range]");if(!z)return;let ae=z.getAttribute("data-dl-range"),fe=O.querySelector(`[data-dl-value="${ae}"]`);fe&&(fe.textContent=z.value+"%")})}let ee=null,re=null,he={},ke=0,$e="",pe=O=>(O&&O.hosts||[]).join(`
`);function Le(){return Object.assign({},ee||{},re||{},he)}function Ie(){let O=document.getElementById(g);if(!O||!ee)return;let V=Le(),z=O.querySelector("[data-vi-toggle]");z&&(z.checked=!!V.enabled),Ce(O,!!V.enabled);let ae=O.querySelector("#viewer-images-hosts"),fe=re&&"hosts"in re||"hosts"in he;ae&&!fe&&document.activeElement!==ae&&ae.value===$e&&(ae.value=pe(ee),$e=ae.value);let ve=V.extensions||[];O.querySelectorAll("[data-vi-ext]").forEach(ge=>{ge.checked=ve.indexOf(ge.getAttribute("data-vi-ext"))!==-1})}function Ce(O,V){O.querySelectorAll("[data-vi-row]").forEach(z=>{z.style.display=V?"":"none"})}async function Fe(O){try{let V=await O(),z=null;try{z=await V.json()}catch{z=null}return{ok:!!(V.ok&&z),body:z}}catch(V){return console.warn("[admin-display] viewer-images request failed:",V),{ok:!1,body:null}}}async function Pe(){let O=ke,V=await Fe(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),z=!re&&!Object.keys(he).length;V.ok&&z&&O===ke&&(ee=V.body,Ie())}function qe(O){let V=O&&O.code;return V==="invalid_host"?k("viErrInvalidHost",{host:String(O.detail||"")}):V==="too_many_hosts"?k("viErrTooManyHosts",{max:O.max}):k("updateFailed")}function Oe(O){ke+=1;let V=document.getElementById("viewer-images-hosts");if("hosts"in O&&V&&($e=V.value),"enabled"in O){let z=document.getElementById(g);z&&Ce(z,!!O.enabled)}Object.assign(he,O),re||je()}async function je(){if(re||!Object.keys(he).length)return;let O=he;he={},re=O;let V=await Fe(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}));if(re=null,V.ok){ee=V.body,Ie(),je();return}let z=he;he={},window.showToast&&window.showToast(qe(V.body),!1),("hosts"in O||"hosts"in z)&&($e=null),Ie(),Pe()}let Me={};function We(){let O=document.getElementById(h);O&&Object.entries(Me).forEach(([V,z])=>{let ae=O.querySelector(`[data-dl-value="${V}"]`);ae&&(ae.textContent=V==="max_tracks"?Number(z)===0?k("dlMaxTracksAuto"):String(z):String(z)+"%");let fe=O.querySelector(`[data-dl-range="${V}"]`);fe&&document.activeElement!==fe&&(fe.value=String(z));let ve=O.querySelector(`[data-dl-toggle="${V}"]`);ve&&(ve.checked=!!z);let ge=O.querySelector(`[data-dl-seg="${V}"]`);ge&&ge.querySelectorAll("[data-dl-opt]").forEach(be=>{let xe=be.getAttribute("data-dl-opt")===String(z);be.classList.toggle("is-active",xe),be.setAttribute("aria-pressed",xe?"true":"false")})})}async function Ge(){try{let O=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!O.ok)return;Me=await O.json(),We()}catch(O){console.warn("[admin-display] display-layer fetch failed:",O)}}async function De(O,V){let z=Me[O];Me[O]=V,We();try{let ae=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[O]:V})});if(!ae.ok)throw new Error("display-layer "+ae.status);Me=await ae.json(),We()}catch(ae){Me[O]=z,We(),console.warn("[admin-display] display-layer update failed:",ae),window.showToast&&window.showToast(k("updateFailed"),!1)}}let Ke=!1;async function Ue(){let O=document.getElementById("sec-viewer-config-limits");if(!O||Ke)return;Ke=!0;let V=(z,ae)=>{let fe=O.querySelector(z);fe&&(fe.textContent=ae==null?"\u2014":String(ae))};try{let z=await fetch("/admin/metrics",{credentials:"same-origin"});if(!z.ok)return;let ae=await z.json(),fe=ae.rate_limits&&ae.rate_limits.fire||{},ve=ae.rate_limits&&ae.rate_limits.totals||{},ge=ae.rate_limit_config&&ae.rate_limit_config.fire||{},be=Math.max(1,(ae.server_time||0)-(ae.server_started_at||0));V("[data-vc-rate-fp]",ge.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",ge.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let xe=(fe.hits||0)/be;V("[data-vc-avg-rate]",xe.toFixed(2)+"/s"),V("[data-vc-throttled]",fe.violations||0),V("[data-vc-blocked]",ve.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{Ke=!1}}function Je(){F.forEach(O=>{let V=document.getElementById(O);V&&V.setAttribute("data-admin-ui-replaced","1")})}function Ve(){let O=document.querySelector(".admin-dash-grid");return!!O&&O.dataset.activeRoute==="viewer"}function He(){let O=null;x.forEach(V=>{let z=document.getElementById(V);z&&(O&&O.parentElement===z.parentElement&&O.nextElementSibling!==z&&O.after(z),O=z)})}let Ye=null;function bn(){let O=window.ServerI18n&&window.ServerI18n.currentLang;if(!O||O===Ye)return;let V=Ye===null;if(Ye=O,V)return;let z=document.createElement("div"),ae=document.getElementById(g);ae&&(z.innerHTML=t(),ae.replaceChildren(...z.firstElementChild.childNodes),j(),$e="",Ie());let fe=document.getElementById(h);if(fe){let ve=fe.open;z.innerHTML=u(),fe.replaceChildren(...z.firstElementChild.childNodes),fe.open=ve,We()}}let Xe=!1;function Qe(){if(bn(),!Ve()){Xe=!1;return}He(),!Xe&&(Xe=!0,Ue(),I.options&&me().then(j),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh())}function wn(){if(document.getElementById(w))return;let O=document.getElementById("settings-grid");if(!O)return;function V(ae,fe,ve,ge,be,xe){let _e=xe?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+ae+'</div></div><div class="admin-vc-limit-row__value" style="color:'+_e+'">'+ve+'<span class="admin-vc-limit-row__unit">'+(ge||"")+"</span></div>"+(be?'<div class="admin-vc-limit-row__hint">'+be+"</div>":"")+"</div>"}let z=document.createElement("details");z.id=w,z.className="admin-dsp2-fold lg:col-span-2",z.innerHTML='<summary class="admin-ui-page-title">'+$(k("viewerLimitsFoldTitle"))+'</summary><div class="admin-vc-limits-grid"><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+$(k("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+$(k("displayEditLink"))+"</a></div>"+V($(k("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",$(k("displayRateFpUnit")),$(k("displayRateFpHint")))+V($(k("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",$(k("displayRateGlobalHint")))+V($(k("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",$(k("displayRateBurstUnit")),$(k("displayRateBurstHint")))+V($(k("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",$(k("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+$(k("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+$(k("displayContentLimitsTitle"))+"</span></div>"+V($(k("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",$(k("displayMsgLenUnit")),$(k("displayMsgLenHint")))+V($(k("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",$(k("displayNickLenUnit")),$(k("displayNickLenHint")))+V($(k("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",$(k("displayDedupHint")))+V($(k("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+$(k("displayProfanityDefaultValue"))+"</span>","",$(k("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+$(k("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+$(k("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+$(k("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+$(k("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+$(k("displayAuditLogLink"))+"</a></div></div>",O.appendChild(z),He()}async function Ze(){let O=document.getElementById("settings-grid");if(!O)return;let V=!1;document.getElementById(g)||(O.insertAdjacentHTML("beforeend",t()),U(document.getElementById(g)),V=!0),document.getElementById(h)||(O.insertAdjacentHTML("beforeend",u()),Q(document.getElementById(h)),V=!0),Je(),wn(),Qe(),V&&(I.options||await Promise.all([me(),Te()]),Ge(),Pe(),j())}function tt(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&(!document.getElementById(g)||!document.getElementById(h))?Ze():Je(),Qe()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Qe),document.addEventListener("admin-route-applied",Qe),document.addEventListener("admin-panel-rendered",Ze),document.addEventListener("admin-themes-changed",()=>{ue("stroke"),ue("shadow"),ue("Color"),ue("FontFamily"),Z()}),Ze()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt()})()});var At=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function g(){let J=document.querySelector('meta[name="csrf-token"]');return J&&J.content||""}let h=window.DANMU_CONFIG||{},w=h.session||{logged_in:!1},x=h.settingRanges||{};function F(J,Z={}){let K={credentials:"same-origin",...Z},Y=new Headers(Z.headers||{});return Y.set("X-CSRF-Token",g()),K.headers=Y,fetch(J,K)}window.csrfFetch=F;let $=5e3,D={at:0,data:null,promise:null};function B(){return D.data&&Date.now()-D.at<$}function C(){return B()?Promise.resolve(D.data):(D.promise||(D.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(J=>J.ok?J.json():null).then(J=>(J&&(D.data=J,D.at=Date.now()),D.promise=null,J)).catch(()=>(D.promise=null,null))),D.promise)}function P(J){if(!B())return null;let Z=D.data[J];return Z&&typeof Z=="object"&&"_error"in Z?null:Z}window.__danmuAdminBootstrap={prime:C,get:P},C();let M={},A=null,k=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let _=Object.create(null);Object.assign(_,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"viewer",tab:"themes"},themes:{nav:"viewer",tab:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let E={_key:J=>"admin:tab:"+J,get(J){try{return sessionStorage.getItem(this._key(J))||null}catch{return null}},set(J,Z){try{Z?sessionStorage.setItem(this._key(J),Z):sessionStorage.removeItem(this._key(J))}catch{}}};function I(J){let Z=(J||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!Z)return null;let K=Z[1],Y=Z[2]||null,ne=null;if(!Y){let me=N[K];typeof me=="string"?K=me:me&&typeof me=="object"&&(K=me.nav||K,ne=me.tab||null)}let oe=_[K],de=K,ue=null;if(typeof oe=="string"?de=oe:oe&&typeof oe=="object"&&(de=oe.nav||K,ue=oe.tab||null),Z[1]!==de&&(I._warned||(I._warned=new Set),!I._warned.has(Z[1]))){I._warned.add(Z[1]);try{console.info("[admin] legacy route #/"+Z[1]+" \u2192 #/"+de+(Y||ue||ne?"/"+(Y||ue||ne):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:de,tab:Y||ue||ne,raw:K}}function H(J,Z){return Z?"#/"+J+"/"+Z:"#/"+J}let T={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function b(J,Z,K){if(K=K||J,!j[J]){let ue=N[J];if(typeof ue=="string")J=ue;else if(ue&&typeof ue=="object")ue.nav&&(J=ue.nav),!Z&&ue.tab&&(Z=ue.tab);else{let me=_[J];typeof me=="string"?J=me:me&&typeof me=="object"&&(me.nav&&(J=me.nav),!Z&&me.tab&&(Z=me.tab))}}if(J==="system"&&Z&&T[Z]){let ue=T[Z];J=ue.nav,Z=ue.tab||null,K=J}let Y=j[J]?J:"live",ne=window.AdminTabs,oe=ne?.hasTabsFor?.(Y)?ne.resolveActiveTab(Y,Z):null,de=ne?.foldFor?ne.foldFor(Y,Z):null;return{route:Y,tab:oe,rawName:K,fold:de?Z:null,foldSection:de?de.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:_,tabMemory:E,parseHash:I,buildHash:H,resolve(J){let Z=I(J);return Z?b(Z.nav,Z.tab,J.match(/^#\/([\w-]+)/)[1]):null}});var m=window.AdminUtils.loadDetailsState,r=window.AdminUtils.saveDetailsState,o=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:C,bootstrapSection:P};async function t(){try{M=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),w.logged_in&&R()}catch(J){console.error("Get settings failed:",J),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function u(J){return/^#[0-9A-Fa-f]{6}$/.test(J)}function c(J){return u(J)?J:/^[0-9A-Fa-f]{6}$/.test(J)?"#"+J:(J.startsWith("#")||(J="#"+J),u(J)?J:"#38bdf8")}function p(J,Z){if(x[J]){let K=parseInt(Z);if(isNaN(K)||K<x[J].min||K>x[J].max)return showToast(ServerI18n.t("settingRangeError",{key:J,min:x[J].min,max:x[J].max}),!1),!1}return!0}function d(J,Z,K){if(!K||!Array.isArray(M[J]))return;let Y=M[J][Z];J==="Color"&&typeof Y=="string"&&(Y=c(`#${Y}`)),Y!=null&&(K.value=String(Y))}let s={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-widgets"]}};function l(){Object.values(s).forEach(J=>{let Z=document.getElementById(J.containerId);Z&&J.orderedIds.forEach(K=>{let Y=document.getElementById(K);Y&&Y.parentElement!==Z&&Z.appendChild(Y)})})}function v(){A&&(A.disconnect(),A=null),l(),A=new MutationObserver(()=>{l()}),A.observe(a,{childList:!0,subtree:!0})}async function e(J,Z,K,Y=null){try{if(J==="Color"){if(!u(Z)){showToast(ServerI18n.t("colorFormatError"),!1),d(J,K,Y);return}Z=Z.replace("#","")}else if((J==="Speed"||J==="Opacity"||J==="FontSize")&&!p(J,Z)){d(J,K,Y);return}(await F("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:J,value:Z,index:K})})).ok?(Array.isArray(M[J])||(M[J]=[!1,"","",""]),M[J][K]=Z,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await t())}catch(ne){console.error("Error:",ne),showToast(`Update Error: ${ne.message}`,!1),await t()}}async function n(J,Z){try{let K=await F("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:J,enabled:Z})}),Y=await K.json().catch(()=>({}));if(K.ok)Array.isArray(M[J])||(M[J]=[!1,"","",""]),M[J][0]=Z,showToast(`${J} ${ServerI18n.t("settingsUpdated")}`),R();else{let ne=document.getElementById(`toggle-${J}`);ne&&(ne.checked=!Z),showToast(Y.error||ServerI18n.t("updateFailed"),!1)}}catch(K){console.error("Error:",K);let Y=document.getElementById(`toggle-${J}`);Y&&(Y.checked=!Z),showToast(`Update Error: ${K.message}`,!1)}}let a=document.getElementById("app-container"),i=document.getElementById("toast-container"),f=(J,Z=500)=>"requestIdleCallback"in window?window.requestIdleCallback(J,{timeout:Z}):setTimeout(J,Z);async function y(){let J=parseInt(document.getElementById("historyHours")?.value||"24");try{let[Z,K]=await Promise.all([fetch(`/admin/stats/hourly?hours=${J}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${J}&limit=10`,{credentials:"same-origin"})]);if(!Z.ok||!K.ok)return;let Y=await Z.json(),ne=await K.json(),oe=document.getElementById("statsDashboard");if(!oe)return;let de=Y.distribution||[],ue=ne.topTexts||[],me=Math.max(1,...de.map(ie=>ie.count)),Te=de.reduce((ie,ce)=>ie+(ce.count||0),0),Ee=de.filter(ie=>ie.count>0).length,Ae=de.map(ie=>`<div class="chart-bar" style="height: ${Math.round(ie.count/me*100)}%" title="${o(ie.hour)}: ${ie.count}"><span class="chart-label">${o(ie.hour.slice(-5,-3))}</span></div>`).join(""),se=ue.map((ie,ce)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ce+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${o(ie.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ie.count}</td></tr>`).join("");oe.innerHTML=`
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
              <span class="history-dashboard-caption">${J}h window</span>
            </div>
            <div class="stats-chart">${Ae||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${ue.length?`<table class="w-full text-xs"><tbody>${se}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(Z){console.error("Load stats error:",Z)}}window._loadStats=y,window.csrfFetch=F,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>M;function S(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function L(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():S()}function R(){let J=m(),Z=(Ee,Ae=!1)=>J[Ee]!==void 0?J[Ee]:Ae,K=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Ee=>Array.isArray(M[Ee])&&M[Ee][0]===!0).length,Y=M.Layout&&M.Layout[3]?o(String(M.Layout[3]).replace(/_/g," ")):"scroll",ne=M.FontFamily&&M.FontFamily[3]?o(String(M.FontFamily[3])):"NotoSansTC",oe=Ee=>Ee.map(Ae=>`<span style="height:${Ae*10}%;opacity:${.3+Ae*.08}"></span>`).join(""),de=Y&&Y!=="off",ue=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${de?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${o(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${o(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${o(de?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                `;let me=document.getElementById("settings-grid"),Te=M.Effects?M.Effects[0]!==!1:!0;me.insertAdjacentHTML("beforeend",`
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
    `),f(le),W(),v(),f(te),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),q(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Ae=document.querySelector("[data-telem-bars]");if(!Ae)return;let se=document.querySelector("[data-telem-status]"),ie={cpu:100,mem:100,ws:100,rate:50};function ce(ee,re,he,ke,$e){let pe=Ae.querySelector(`[data-telem-fill="${ee}"]`),Le=Ae.querySelector(`[data-telem-value="${ee}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,re))+"%",pe.classList.toggle("is-warn",!ke)),Le&&(Le.textContent=he);let Ie=Ae.querySelector(`[data-telem-row="${ee}"]`);Ie&&$e&&Ie.setAttribute("title",$e)}function U(ee,re){if(!re||re<=0)return Math.round(ee)+" MB used";if(re>=1024){let he=(ee/1024).toFixed(1),ke=(re/1024).toFixed(1);return`${he} / ${ke} GB used`}return`${Math.round(ee)} / ${Math.round(re)} MB used`}async function Q(){try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ee.ok)return;let re=await ee.json(),he=re.cpu_series||[],ke=re.mem_series||[],$e=re.mem_mb_series||[],pe=re.ws_series||[],Le=re.rate_series||[],Ie=Me=>Me.length?Me[Me.length-1]:0,Ce=Number(Ie(he)||0),Fe=Number(Ie(ke)||0),Pe=Number(Ie($e)||0),qe=Number(re.mem_total_mb||0),Oe=Number(Ie(pe)||re.ws_clients||0),je=Number(Ie(Le)||0)/60;if(ce("cpu",Ce,`${Ce.toFixed(0)}%`,Ce<90),ce("mem",Fe,`${Fe.toFixed(0)}%`,Fe<90,U(Pe,qe)),ce("ws",Oe/ie.ws*100,String(Oe),Oe<100),ce("rate",je/ie.rate*100,`${je.toFixed(1)}/s`,je<40),se){let Me=Ce>=90||Fe>=90||je>=40;se.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",se.classList.toggle("is-warn",Me)}}catch{}}setTimeout(Q,4e3),setInterval(Q,5e3)})()}let j={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u5F48\u5E55\u6A23\u5F0F",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-themes","sec-viewer-config-defaults","sec-viewer-theme","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-overlay-layout"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=j;function q(){let J=document.querySelector(".admin-dash-grid");if(!J)return;let Z="dashboard",K=null;function Y(pe){return s.moderation.orderedIds.indexOf(pe)!==-1?"moderation-grid":s.assets.orderedIds.indexOf(pe)!==-1?"assets-grid":"settings-grid"}function ne(){let pe=J.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),Le=J.querySelector("[data-route-note]"),Ie=J.querySelector("[data-route-action]"),Ce=Ie?Array.prototype.slice.call(Ie.children):[],Fe=De=>De.querySelector(".admin-ui-page-actions")||Ce.find(Ke=>Ke._adminHomeHead===De)||null,Pe=(De,Ke)=>{Ie&&(Ce.forEach(Ue=>{Ue!==De&&(Ue._adminHomeHead?Ue._adminHomeHead.appendChild(Ue):Ue.remove())}),De&&De.parentNode!==Ie&&(De._adminHomeHead=Ke,Ie.appendChild(De)))};if(!pe){Pe(null,null);return}let qe=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(Z)),Oe=Array.prototype.slice.call(J.querySelectorAll(".admin-ui-page-head"));Oe.forEach(De=>De.classList.remove("is-merged-into-topbar"));let je=(j[Z]?.title||"").trim().replace(/\s+/g," "),Me=null,We=null,Ge=null;if(Oe.forEach(De=>{let Ke=De.querySelector(".admin-ui-page-title"),Ue=Ke&&Ke.textContent.trim().replace(/\s+/g," ");if(Ue&&(qe||Ue===pe||Ue===je)){if(De.offsetParent!==null){Me===null&&(Me=De.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ve=Fe(De);Ve&&!We&&(We=Ve,Ge=De)}De.classList.add("is-merged-into-topbar")}}),Pe(We,Ge),Le){let De=Me||"";Le.innerHTML!==De&&(Le.innerHTML=De),Le.toggleAttribute("hidden",!Me)}}function oe(){let pe=j[Z],Le=new Set((pe.sections||[]).map(Y)),Ie=Ce=>Array.from(Ce.children).some(Fe=>getComputedStyle(Fe).display!=="none");J.querySelectorAll(".admin-route-sections").forEach(Ce=>{if(!Le.has(Ce.id)){Ce.style.display="none";return}Ce.style.display="",Ce.style.display=Ie(Ce)?"":"none"})}let de=()=>{let pe=j[Z],Le=new Set(pe.sections);J.querySelectorAll('[id^="sec-"]').forEach(Ie=>{Ie.id&&(Ie.style.display=Le.has(Ie.id)?"":"none")}),K&&window.AdminTabs?.hasTabsFor?.(Z)&&window.AdminTabs.applyTabSectionVisibility(Z,K,J),oe(),ne()},ue=null,me=null;function Te(){let pe=me&&document.getElementById(me);!pe||!pe.getClientRects().length||(me=null,pe.tagName==="DETAILS"&&(pe.open=!0),pe.scrollIntoView({block:"start"}))}function Ee(pe){let Le=window.location.hash||"",Ie=Le.indexOf("?");if(Ie===-1)return"";let Ce=I(Le);if(!Ce)return"";let Fe=Le.match(/^#\/([\w-]+)/),Pe=b(Ce.nav,Ce.tab,Fe&&Fe[1]||Ce.raw);return Pe.route===pe.route&&(Pe.tab||null)===(pe.tab||null)&&(Pe.fold||null)===(pe.fold||null)?Le.slice(Ie):""}let Ae=(pe,Le,Ie)=>{let Ce=b(pe,Le,Ie);Ie=Ce.rawName,Z=Ce.route,J.dataset.activeRoute=Z;let Fe=Ce.tab,Pe=(Ce.fold?H(Z,Ce.fold):Ie&&Ie!==Z?"#/"+Ie:H(Z,Fe))+Ee(Ce);if(window.location.hash!==Pe){try{history.replaceState(null,"",Pe)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let qe=j[Z],Oe=Array.from(J.querySelectorAll(".admin-dash-nav-row[data-route]")),je=Ie!==Z?Oe.find(He=>He.dataset.route===Ie):null;Oe.forEach(He=>{let Ye=je?He===je:He.dataset.route===Z;He.classList.toggle("is-active",Ye),He.setAttribute("aria-selected",Ye?"true":"false")});let Me=J.querySelector("[data-route-kicker]"),We=J.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(He){return He},De="adminRouteTitle_"+Z,Ke="adminRouteKicker_"+Z,Ue=Ge(De),Je=Ge(Ke);Me&&(Me.textContent=Je!==Ke?Je:qe.kicker),We&&(We.textContent=Ue!==De?Ue:qe.title);let Ve=Z==="dashboard"||Z==="live";J.querySelectorAll('[data-route-view="dashboard"]').forEach(He=>{He.style.display=Ve?"":"none"}),Ve?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),K=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(Z,Fe),J.dataset.activeLeaf=Fe||Z,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:Fe}})),oe(),ne(),ie(Z,Fe),se(Ie,Z,Fe),Ce.fold!==ue&&(ue=Ce.fold,me=Ce.foldSection),Te();try{history.replaceState(null,"",Pe)}catch{}};function se(pe,Le,Ie){window.AdminBreadcrumb?.render(J,pe,Le,Ie)}function ie(pe,Le){let Ie=J.querySelector("[data-admin-tabs-host]");if(!Ie){let Ce=J.querySelector(".admin-dash-topbar");if(!Ce)return;Ie=document.createElement("div"),Ie.dataset.adminTabsHost="",Ce.insertAdjacentElement("afterend",Ie)}if(Ie.innerHTML="",window.AdminTabs?.hasTabsFor?.(pe)&&Le){Ie.hidden=!1;let Ce=window.AdminTabs.renderTabStrip(pe,Le,{onSelect:Fe=>Ae(pe,Fe)});Ce&&Ie.appendChild(Ce),Ie.classList.remove("admin-tabs-host--accordion");return}Ie.classList.remove("admin-tabs-host--accordion"),Ie.hidden=!0}k&&window.removeEventListener("hashchange",k),k=()=>{let pe=I(window.location.hash),Le=(window.location.hash||"").match(/^#\/([\w-]+)/),Ie=Le?Le[1]:null;pe&&Ae(pe.nav,pe.tab,Ie||pe.raw)},window.addEventListener("hashchange",k),J.querySelectorAll("[data-route]").forEach(pe=>{pe.addEventListener("click",Le=>{Le.preventDefault(),Ae(pe.dataset.route)})});let ce=I(window.location.hash),U=(window.location.hash||"").match(/^#\/([\w-]+)/),Q=U?U[1]:ce?.raw||ce?.nav||"live";Ae(ce?.nav||"live",ce?.tab||null,Q),window._adminNavigateTo=()=>Ae(Z,ue||K);let ee=!1,re=0,he=0;function ke(){if(ee)return;ee=!0;let pe=()=>{ee&&(ee=!1,re&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(re),clearTimeout(he),re=0,he=0,de(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:K}})),Te())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(re=requestAnimationFrame(pe),he=setTimeout(pe,100)):he=setTimeout(pe,0)}let $e=J.querySelector(".admin-dash-main");$e&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{ke()}).observe($e,{childList:!0,subtree:!0}),ke())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let J=document.querySelector("[data-open-help]");J&&J.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let Z=document.querySelector("[data-open-palette]");if(Z){let Y=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};Z.addEventListener("click",Y),Z.addEventListener("keydown",ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Y())})}let K=document.getElementById("logoutButton");K&&K.addEventListener("click",async()=>{try{let Y=await F("/logout",{method:"POST"});Y.redirected&&(window.location.href=Y.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Y){console.error("Logout Failed:",Y),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Y=>{Y.name&&Y.addEventListener("change",async function(){let ne=this.name,oe=this.checked;await n(ne,oe)})}),document.querySelectorAll("details[id^='sec-']").forEach(Y=>{Y.addEventListener("toggle",()=>{let ne=m();ne[Y.id]=Y.open,r(ne)})}),document.querySelectorAll(".setting-input").forEach(Y=>{Y.addEventListener("change",async function(){let ne=this.dataset.key,oe=parseInt(this.dataset.index),de=this.value;this.type==="number"&&(de=parseInt(de)),await e(ne,de,oe,this)})})}function G(){if(w.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}R()}else L()}async function X(){await t(),G(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function le(){window.AdminThemes&&window.AdminThemes.init()}function te(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{A&&(A.disconnect(),A=null)}),X()})});var Ct=ye(()=>{(function(){"use strict";var g=null;async function h(){var C=(document.getElementById("pollQuestion")?.value||"").trim(),P=document.querySelectorAll(".poll-option-input"),M=Array.from(P).map(function(N){return N.value.trim()}).filter(Boolean);if(!C){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(M.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var A=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:C,options:M})}),k=await A.json();if(!A.ok){window.showToast(k.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),D(k),F()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function w(){try{var C=await window.csrfFetch("/admin/poll/end",{method:"POST"}),P=await C.json();if(!C.ok){window.showToast(P.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),D(P),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function x(){try{var C=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),P=await C.json();if(!C.ok){window.showToast(P.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),D(P),g&&(clearInterval(g),g=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function F(){g&&(clearInterval(g),g=null);var C=async function(){try{var P=await fetch("/admin/poll/status",{credentials:"same-origin"});if(P.ok){var M=await P.json();D(M),M.state!=="active"&&g&&(clearInterval(g),g=null)}}catch{}};C(),g=setInterval(C,2e3)}function $(){var C=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var P=document.querySelector('#sec-polls [data-poll-action="add"]');P&&P.click()},extra:`
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
      </div>`});return C.dataset.emptyKind="poll",C}function D(C){var P=document.getElementById("pollStatusDisplay");if(P){if(P.textContent="",!C||C.state==="idle"){P.appendChild($());return}var M=C.total_votes||0,A=Math.max(1,...C.options.map(function(T){return T.count})),k=document.createElement("div");k.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var _=document.createElement("span");_.className="admin-poll-status-dot"+(C.state==="active"?" is-active":" is-ended"),N.appendChild(_);var E=document.createElement("span");E.className="admin-poll-status-question",E.textContent=C.question||"",N.appendChild(E);var I=document.createElement("span");I.className="admin-poll-status-state",I.textContent=C.state,N.appendChild(I),k.appendChild(N),C.options.forEach(function(T){var b=document.createElement("div");b.className="admin-poll-status-row";var m=document.createElement("div");m.className="admin-poll-status-label";var r=document.createElement("span"),o=document.createElement("b");o.textContent=T.key+".",r.appendChild(o),r.appendChild(document.createTextNode(" "+T.text));var t=document.createElement("span");t.textContent=T.count+" ("+T.percentage+"%)",m.appendChild(r),m.appendChild(t);var u=document.createElement("div");u.className="admin-poll-status-bar";var c=document.createElement("div");c.className="admin-poll-status-bar-fill",c.style.width=T.count/A*100+"%",u.appendChild(c),b.appendChild(m),b.appendChild(u),k.appendChild(b)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",M),k.appendChild(H),P.appendChild(k)}}function B(){var C=document.getElementById("sec-polls");if(C&&C.dataset.pollLegacyBound!=="1"){C.dataset.pollLegacyBound="1";var P=document.getElementById("pollCreateBtn");P&&P.addEventListener("click",h);var M=document.getElementById("pollEndBtn");M&&M.addEventListener("click",w);var A=document.getElementById("pollResetBtn");A&&A.addEventListener("click",x);var k=document.getElementById("pollAddOptionBtn");k&&k.addEventListener("click",function(){var E=document.getElementById("pollOptionsContainer");if(E){var I=E.querySelectorAll(".poll-option-input").length;if(I>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+I)+". Option "+(I+1),H.maxLength=100,E.appendChild(H)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var E=document.getElementById("pollOptionsContainer");if(E){var I=E.querySelectorAll(".poll-option-input");if(I.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}I[I.length-1].remove()}});var _=C;_&&(_.addEventListener("toggle",function(){_.open&&F()}),F()),window.addEventListener("beforeunload",function(){g&&(clearInterval(g),g=null)})}}document.addEventListener("admin-panel-rendered",function(){B()}),document.addEventListener("DOMContentLoaded",function(){B()}),window.addEventListener("hashchange",function(){var C=window.location.hash||"";C.indexOf("/polls")!==-1&&B()})})()});var Bt=ye(()=>{(function(){"use strict";var g="sec-timeline-export",h="danmu.adminHistoryExports.v1",w=10,x={rawText:!0,polls:!0,masked:!1,metadata:!0},F=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],$=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],D={range:"24h",filters:Object.assign({},x),format:"JSON"};function B(){return document.getElementById(g)}function C(){try{return JSON.parse(localStorage.getItem(h)||"[]")}catch{return[]}}function P(i){try{localStorage.setItem(h,JSON.stringify(i.slice(0,w)))}catch{}}function M(i){var f=C();f.unshift(i),P(f)}function A(i){return i?i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/1024/1024).toFixed(1)+" MB":"0 B"}function k(i){try{var f=new Date(i),y=new Date,S=f.toDateString()===y.toDateString();if(S)return ServerI18n.t("historyV2TodayAt",{time:String(f.getHours()).padStart(2,"0")+":"+String(f.getMinutes()).padStart(2,"0")});var L=new Date(y);return L.setDate(y.getDate()-1),f.toDateString()===L.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(f.getHours()).padStart(2,"0")+":"+String(f.getMinutes()).padStart(2,"0")}):f.getMonth()+1+"-"+String(f.getDate()).padStart(2,"0")+" "+String(f.getHours()).padStart(2,"0")+":"+String(f.getMinutes()).padStart(2,"0")}catch{return i||""}}function N(i){if(i==="1h")return 1;if(i==="24h")return 24;if(i==="7d")return 168;if(i==="today"){var f=new Date,y=new Date(f.getFullYear(),f.getMonth(),f.getDate());return Math.max(1,Math.ceil((f-y)/36e5))}return i==="yest"?48:i==="live"?6:24}function _(i){return i.filter(function(f){return!(!D.filters.rawText&&!f.is_poll&&!f.muted&&!f.banned||!D.filters.polls&&f.is_poll||!D.filters.masked&&(f.muted||f.banned))}).map(function(f){if(!D.filters.metadata){var y=Object.assign({},f);return delete y.clientIp,delete y.fingerprint,y}return f})}function E(i){var f=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],y=window.AdminUtils.csvCell,S=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},L=i.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",S(R),R.delivery_reason||""].map(y).join(",")});return[f.join(","),L.join(`\r
`)].filter(Boolean).join(`\r
`)}function I(i){return i.map(function(f,y){var S=new Date(f.timestamp||Date.now()),L=H(S),R=H(new Date(S.getTime()+3e3)),j=(f.nickname?"["+f.nickname+"] ":"")+(f.text||"");return y+1+`
`+L+" --> "+R+`
`+j+`
`}).join(`
`)}function H(i){var f=function(y,S){return String(y).padStart(S||2,"0")};return f(i.getHours())+":"+f(i.getMinutes())+":"+f(i.getSeconds())+","+f(i.getMilliseconds(),3)}function T(i,f){var y=URL.createObjectURL(i),S=document.createElement("a");S.href=y,S.download=f,S.click(),URL.revokeObjectURL(y)}function b(){var i=N(D.range),f=document.getElementById("histv2-go");f&&(f.disabled=!0,f.dataset.busy="1"),fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(y){if(!y.ok)throw new Error("http "+y.status);return y.json()}).then(function(y){var S=y&&y.records||[],L=_(S);if(L.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),j,q;if(D.format==="JSON"){var W=JSON.stringify(L,null,2);q=new Blob([W],{type:"application/json"}),j="danmu-history-"+R+".json"}else D.format==="CSV"?(q=new Blob(["\uFEFF"+E(L)],{type:"text/csv;charset=utf-8;"}),j="danmu-history-"+R+".csv"):(q=new Blob([I(L)],{type:"application/x-subrip;charset=utf-8;"}),j="danmu-history-"+R+".srt");T(q,j),M({name:j,fmt:D.format,size:q.size,when:new Date().toISOString(),count:L.length}),r(),m(L.length,q.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:L.length}),!0)}).catch(function(y){console.error("[history-v2] export failed",y),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:y.message||y}),!1)}).finally(function(){f&&(f.disabled=!1,delete f.dataset.busy)})}function m(i,f){var y=document.getElementById("histv2-estimate");y&&(y.textContent=ServerI18n.t("historyV2Estimate",{count:i||"\u2014",size:f?A(f):"\u2014 MB"}))}function r(){var i=document.getElementById("histv2-recent-list");if(i){var f=C();if(f.length===0){i.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}i.innerHTML=f.map(function(y){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+y.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(y.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(k(y.when))+" \xB7 "+A(y.size)+"</div></div></div>"}).join("")}}function o(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})}function t(){return F.map(function(i){var f=D.range===i.k;return'<button type="button" class="histv2-chip'+(f?" is-active":"")+'" data-histv2-range="'+i.k+'">'+o(ServerI18n.t(i.labelKey))+(i.k==="live"?" \xB7 "+u():"")+"</button>"}).join("")}function u(){var i=new Date;return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function c(){var i=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return i.map(function(f){var y=!!D.filters[f.k];return'<button type="button" class="histv2-toggle'+(y?" is-on":"")+'" data-histv2-toggle="'+f.k+'"><span class="histv2-toggle-mark">'+(y?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(f.labelKey))+"</span></button>"}).join("")}function p(){return $.map(function(i){var f=D.format===i.k;return'<button type="button" class="histv2-fmt'+(f?" is-selected":"")+'" data-histv2-fmt="'+i.k+'">'+(f?'<span class="histv2-fmt-check">\u2713</span>':"")+(i.badge?'<span class="histv2-fmt-badge">'+o(i.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+i.k+'</div><div class="histv2-fmt-desc">'+o(i.desc)+"</div></button>"}).join("")}function d(){var i=B();i&&(i.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+c()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+p()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",i.addEventListener("click",s),r(),n())}function s(i){var f=i.target.closest("[data-histv2-range]");if(f){D.range=f.dataset.histv2Range,l(),n();return}var y=i.target.closest("[data-histv2-toggle]");if(y){var S=y.dataset.histv2Toggle;D.filters[S]=!D.filters[S],v(),n();return}var L=i.target.closest("[data-histv2-fmt]");if(L){D.format=L.dataset.histv2Fmt,e(),n();return}var R=i.target.closest("#histv2-go");if(R&&!R.dataset.busy){b();return}}function l(){var i=document.getElementById("histv2-chips");i&&(i.innerHTML=t())}function v(){var i=document.getElementById("histv2-toggles");i&&(i.innerHTML=c())}function e(){var i=document.getElementById("histv2-formats");i&&(i.innerHTML=p())}function n(){n._t&&clearTimeout(n._t),n._t=setTimeout(function(){var i=N(D.range);fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(f){return f.ok?f.json():null}).then(function(f){if(!f)return m(0,0);var y=_(f&&f.records||[]),S=D.format==="JSON"?220:D.format==="CSV"?110:80;m(y.length,y.length*S)}).catch(function(){m(0,0)})},250)}function a(){var i=B(),f=document.getElementById("admin-backup-v2-page");if(!i){var y=document.getElementById("settings-grid");if(!y)return;i=document.createElement("div"),i.id=g,i.className="admin-ui-card lg:col-span-2 history-v2-section",y.appendChild(i),d()}f&&f.parentElement&&i.previousElementSibling!==f&&f.parentElement.insertBefore(i,f.nextSibling)}document.addEventListener("admin-panel-rendered",a),document.addEventListener("admin-route-applied",a),window.AdminHistoryV2={refresh:n,state:D}})()});var Ft=ye(()=>{(function(){"use strict";let g="admin-replay-bar";function h(){let x=document.getElementById(g);return x||(document.body?(x=document.createElement("div"),x.id=g,x.className="admin-replay-bar",x.hidden=!0,x.setAttribute("role","status"),x.setAttribute("aria-live","polite"),x.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(x,document.body.firstChild),x):null)}function w(x){let F=h();F&&(F.hidden=!x)}window.AdminReplayBar={ensure:h,setActive:w},document.addEventListener("admin-panel-rendered",h)})()});var Dt=ye(()=>{(function(){"use strict";let g=null;function h(k){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),_=document.getElementById("replayResumeBtn"),E=document.getElementById("replayStopBtn"),I=document.getElementById("replayProgress"),H=(m,r)=>{m&&m.classList.toggle("hidden",!r)},T=k==="playing",b=k==="paused";H(N,T),H(_,b),H(E,T||b),H(I,T||b),!T&&!b&&I&&(I.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(T||b)}function w(){g&&clearInterval(g),g=setInterval(async()=>{try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let N=await k.json(),_=document.getElementById("replayProgress");_&&(_.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),h(N.state),N.state==="stopped"&&(clearInterval(g),g=null)}catch{}},500)}async function x(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),h("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function F(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),h("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function $(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),h("stopped"),g&&(clearInterval(g),g=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let D=null,B=null,C=0,P=null;function M(){[["replayPauseBtn",x],["replayResumeBtn",F],["replayStopBtn",$]].forEach(function([N,_]){let E=document.getElementById(N);E&&!E.dataset.replayCtrlsBound&&(E.addEventListener("click",_),E.dataset.replayCtrlsBound="1")})}async function A(){try{let k=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!k.ok)return;let N=await k.json();(N.state==="playing"||N.state==="paused")&&(h(N.state),w())}catch{}}window.AdminReplayControls={notifyStarted:function(){h("playing"),w()}},document.addEventListener("admin-panel-rendered",function(){M(),A()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(M,800)})})()});var Mt=ye(()=>{(function(){"use strict";let g="sec-ratelimit",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(D){return String(D).replace(/[&<>"']/g,function(B){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[B]})},w=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function x(){return`
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
          ${w.map(D=>`
            <div class="admin-ratelimit-row" data-rl-key="${D.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${h(ServerI18n.t(D.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${D.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${D.defLimit}" data-rl-limit="${D.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${D.key}">
                    <option value="10"${D.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${D.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${D.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${D.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${D.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${D.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${D.defLockout}" data-rl-lockout="${D.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${D.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${D.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${D.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${D.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${D.key}">
                  effective_rate = ${D.defLimit} / ${D.defWindow}s = ${(D.defLimit/D.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(D.defLimit*1.5)}${D.key==="login"?" \xB7 lock = "+D.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${D.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${D.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function F(D){let B=D.querySelector("#rlEnvExport");setTimeout(async()=>{try{let r=window.AdminBootstrap;r&&typeof r.primeBootstrap=="function"&&await r.primeBootstrap();let o=r&&r.bootstrapSection?r.bootstrapSection("history_stats"):null,t=r&&r.bootstrapSection?r.bootstrapSection("blacklist"):null,u=r&&r.bootstrapSection?r.bootstrapSection("metrics"):null,c=[];c.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),c.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),c.push(u?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[p,d,s]=await Promise.all(c),l=o||(p&&p.ok?await p.json():null);if(l){let f=l.stats&&l.stats.last_24h||0,y=l.stats&&l.stats.total||0,S=D.querySelector("[data-rl-sum-hits]"),L=D.querySelector("[data-rl-sum-hits-delta]");S&&(S.textContent=f.toLocaleString()),L&&(L.textContent=ServerI18n.t("ratelimitSumTotal",{n:y.toLocaleString()}))}let v=t||(d&&d.ok?await d.json():null);if(v){let f=Array.isArray(v)?v:v.entries||v.keywords||[],y=D.querySelector("[data-rl-sum-black]");y&&(y.textContent=f.length?ServerI18n.t("ratelimitCountUnit",{n:f.length}):"0")}let e=D.querySelector("[data-rl-sum-viol]"),n=D.querySelector("[data-rl-sum-viol-rate]"),a=D.querySelector("[data-rl-sum-locked]"),i=u||(s&&s.ok?await s.json():null);if(i){let f=i&&i.rate_limits;if(f&&f.totals){let y=f.totals.hits||0,S=f.totals.violations||0,L=f.totals.locked_sources||0;if(e&&(e.textContent=S.toLocaleString()),n){let R=y+S;n.textContent=R>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(S/R*100).toFixed(1)}):"\u2014"}a&&(a.textContent=ServerI18n.t("ratelimitLockedSources",{n:L.toLocaleString()})),w.forEach(({key:R})=>{let j=f[R],q=D.querySelector(`[data-rl-current="${R}"]`);if(q&&j){let W=(j.hits||0).toLocaleString(),G=(j.violations||0).toLocaleString();q.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:W,viol:G})}}),P(f)}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),a&&(a.textContent="\u2014")}else e&&(e.textContent="\u2014"),n&&(n.textContent=ServerI18n.t("ratelimitCountPendingBackend")),a&&(a.textContent="\u2014");C(i&&i.recent_violations)}catch{}},4500);function C(r){let o=D.querySelector("[data-rl-vbody]"),t=D.querySelector("[data-rl-vcount]");if(!o)return;let u=Array.isArray(r)?r:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:u.length})),u.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let c=d=>{let s=new Date(d*1e3),l=v=>String(v).padStart(2,"0");return`${l(s.getHours())}:${l(s.getMinutes())}:${l(s.getSeconds())}`},p=d=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[d]||"var(--color-text-muted)";o.innerHTML=u.slice(0,30).map(d=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${c(d.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${p(d.scope)}">${(d.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(d.ip||"")}</span>
        </div>
      `).join("")}function P(r){r&&w.forEach(({key:o})=>{let t=r[o],u=D.querySelector(`[data-rl-suggest="${o}"]`);if(!u)return;let c=t&&t.suggestion;if(!c){u.hidden=!0;return}let p=u.querySelector("[data-rl-suggest-detail]");p&&(p.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(c.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:c.suggested_limit,suggWindow:c.suggested_window}));let d=u.querySelector("[data-rl-apply]");d&&(d.dataset.rlSuggestLimit=String(c.suggested_limit),d.dataset.rlSuggestWindow=String(c.suggested_window)),u.hidden=!1})}async function M(){try{let r=await fetch("/admin/metrics",{credentials:"same-origin"});if(!r.ok)return;let o=await r.json(),t=o&&o.rate_limits;if(!t)return;w.forEach(({key:u})=>{let c=t[u],p=D.querySelector(`[data-rl-current="${u}"]`);if(p&&c){let d=(c.hits||0).toLocaleString(),s=(c.violations||0).toLocaleString();p.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:d,viol:s})}}),P(t)}catch{}}D.addEventListener("click",async r=>{let o=r.target.closest("[data-rl-action]");if(!o)return;let t=o.dataset.rlAction;if(t==="save"){let u=o.dataset.rlSave,c=D.querySelector(`[data-rl-limit="${u}"]`),p=D.querySelector(`[data-rl-window="${u}"]`);if(!c||!p)return;let d=parseInt(c.value,10),s=parseInt(p.value,10);if(!Number.isFinite(d)||!Number.isFinite(s)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let l=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let v=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:u,limit:d,window:s})});if(v.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:u.toUpperCase(),limit:d,window:s}),!0),M();else{let e=await v.json().catch(()=>({})),n=e&&e.error||`HTTP ${v.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:n}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=l}return}if(t==="apply-suggest"){let u=o.dataset.rlApply,c=parseInt(o.dataset.rlSuggestLimit,10),p=parseInt(o.dataset.rlSuggestWindow,10);if(!u||!Number.isFinite(c)||!Number.isFinite(p))return;let d=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let s=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:u,limit:c,window:p})});if(s.ok){let l=D.querySelector(`[data-rl-limit="${u}"]`),v=D.querySelector(`[data-rl-window="${u}"]`);l&&(l.value=c),v&&(v.value=p),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:u.toUpperCase(),limit:c,window:p}),!0),M(),A()}else{let l=await s.json().catch(()=>({})),v=l&&l.error||`HTTP ${s.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:v}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=d}return}if(t==="export"){let u=[];D.querySelectorAll("[data-rl-limit]").forEach(c=>{let p=c.dataset.rlLimit.toUpperCase();u.push(`${p}_RATE_LIMIT=${c.value}`)}),D.querySelectorAll("[data-rl-window]").forEach(c=>{let p=c.dataset.rlWindow.toUpperCase();u.push(`${p}_RATE_WINDOW=${c.value}`)}),B.textContent=u.join(`
`),B.hidden=!1;try{navigator.clipboard?.writeText(u.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([c,[p,d]])=>{let s=D.querySelector(`[data-rl-limit="${c}"]`),l=D.querySelector(`[data-rl-window="${c}"]`);s&&(s.value=p),l&&(l.value=d)}),B.hidden=!0,A())});function A(){w.forEach(({key:r})=>{let o=D.querySelector(`[data-rl-limit="${r}"]`),t=D.querySelector(`[data-rl-window="${r}"]`),u=D.querySelector(`[data-rl-lockout="${r}"]`),c=D.querySelector(`[data-rl-effective="${r}"]`);if(!o||!t||!c)return;let p=parseInt(o.value,10)||0,d=parseInt(t.value,10)||1,s=(p/d).toFixed(2),l=Math.round(p*1.5),v=`effective_rate = ${p} / ${d}s = ${s} req/s \xB7 burst = ${l}`;if(r==="login"&&u){let e=parseInt(u.value,10)||0;v+=` \xB7 lock = ${e}s`}c.textContent=v})}D.addEventListener("input",r=>{let o=r.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||A()}),D.addEventListener("change",r=>{let o=r.target;!o||!o.dataset.rlWindow||A()}),A();function k(r,o){if(!r||!Array.isArray(o))return;let t=96,u=24,c=o.length?o:new Array(24).fill(0),p=Math.max(1,...c),d=t/Math.max(1,c.length-1),s=c.map((v,e)=>`${(e*d).toFixed(1)},${(u-2-v/p*(u-4)).toFixed(1)}`).join(" "),l=r.querySelector("polyline");l&&l.setAttribute("points",s)}w.forEach(({key:r})=>{let o=D.querySelector(`[data-rl-spark="${r}"]`);o&&k(o,new Array(24).fill(0))});let N=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,_={allowlist:[],denylist:[]},E={input:D.querySelector("[data-rl-ip-input]"),select:D.querySelector("[data-rl-ip-select]"),addBtn:D.querySelector("[data-rl-ip-add]"),summary:D.querySelector("[data-rl-ip-summary]"),error:D.querySelector("[data-rl-ip-error]"),allowCount:D.querySelector("[data-rl-ip-allow-count]"),denyCount:D.querySelector("[data-rl-ip-deny-count]"),allowBody:D.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:D.querySelector('[data-rl-ip-body="denylist"]')};function I(r){if(E.error){if(!r){E.error.hidden=!0,E.error.textContent="";return}E.error.hidden=!1,E.error.textContent=r}}function H(r){let o=r==="allowlist"?E.allowBody:E.denyBody,t=r==="allowlist"?E.allowCount:E.denyCount;if(!o||!t)return;let u=Array.isArray(_[r])?_[r]:[];if(t.textContent=String(u.length),u.length===0){let c=ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:c})}</div>`;return}o.innerHTML=u.map(c=>{let p=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:h(c)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${h(c)}">
          <span class="admin-ratelimit-ip-chip-cidr">${h(c)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${h(c)}" data-rl-ip-remove-kind="${r}" title="${p}" aria-label="${p}">\xD7</button>
        </div>
      `}).join("")}function T(){if(H("allowlist"),H("denylist"),E.summary){let r=(_.allowlist||[]).length,o=(_.denylist||[]).length;E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:r,deny:o})}}async function b(){try{let r=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!r.ok){E.summary&&(E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:r.status}));return}let o=await r.json();o&&typeof o=="object"&&(_={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},T())}catch{E.summary&&(E.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function m(r,{toastLabel:o}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(t.ok){let p=await t.json();return _={allowlist:Array.isArray(p.allowlist)?p.allowlist:[],denylist:Array.isArray(p.denylist)?p.denylist:[]},T(),I(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let u=await t.json().catch(()=>({})),c=u&&u.error||`HTTP ${t.status}`;return I(c),!1}catch{return I(ServerI18n.t("ratelimitNetworkError")),!1}}E.addBtn&&E.addBtn.addEventListener("click",async()=>{if(!E.input||!E.select)return;let r=(E.input.value||"").trim();if(!r){I(ServerI18n.t("ratelimitIpRequiredError"));return}if(!N.test(r)){I(ServerI18n.t("ratelimitIpFormatError"));return}let o=E.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([..._[o]||[],r]));await m({[o]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:r})})&&(E.input.value="")}),E.input&&(E.input.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),E.addBtn&&E.addBtn.click())}),E.input.addEventListener("input",()=>{E.error&&!E.error.hidden&&I("")})),D.addEventListener("click",async r=>{let o=r.target.closest("[data-rl-ip-remove]");if(!o)return;let t=o.dataset.rlIpRemove,u=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",c=(_[u]||[]).filter(p=>p!==t);await m({[u]:c},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(u==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),b(),setTimeout(async()=>{try{let r=await fetch("/admin/metrics",{credentials:"same-origin"});if(!r.ok)return;let o=await r.json(),t=o&&o.rate_limits;if(!t)return;w.forEach(({key:u})=>{let c=t[u]&&(t[u].bucket_history||t[u].history);if(Array.isArray(c)&&c.length){let p=D.querySelector(`[data-rl-spark="${u}"]`);p&&k(p,c.slice(-24))}})}catch{}},5500)}function $(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(g))return;D.insertAdjacentHTML("beforeend",x());let B=document.getElementById(g);B&&F(B)}document.addEventListener("admin-panel-rendered",$),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),$()})})()});var Nt=ye(()=>{(function(){"use strict";let g="sec-viewer-theme",h="danmu.viewerTheme.v1",w=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function x(){return`
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
      </details>`}let F=/^#[0-9a-f]{6}$/i,$=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function D(M){return String(M??"").replace(/[&<>"']/g,A=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[A])}function B(M){let A={};return!M||typeof M!="object"||(["bg","primary","hero"].forEach(k=>{typeof M[k]=="string"&&F.test(M[k])&&(A[k]=M[k])}),(M.mode==="dark"||M.mode==="light")&&(A.mode=M.mode),typeof M.font=="string"&&/^[\w .-]{1,64}$/.test(M.font)&&(A.font=M.font),(M.logo===null||typeof M.logo=="string"&&$.test(M.logo))&&(A.logo=M.logo)),A}function C(M){let A={...w[0],logo:null};try{let e=localStorage.getItem(h);e&&(A={...A,...B(JSON.parse(e))})}catch{}let k="default";function N(){try{localStorage.setItem(h,JSON.stringify(A))}catch{}}function _(e){let n=/^#?([0-9a-f]{6})$/i.exec(e);if(!n)return[0,0,0];let a=parseInt(n[1],16);return[a>>16&255,a>>8&255,a&255]}function E([e,n,a]){let i=[e,n,a].map(f=>(f/=255,f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4)));return .2126*i[0]+.7152*i[1]+.0722*i[2]}function I(e,n){let a=E(_(e)),i=E(_(n)),[f,y]=a>i?[a,i]:[i,a];return(f+.05)/(y+.05)}function H(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function T(){let e=M.querySelector("[data-vt-presets]");e.innerHTML="",w.forEach(n=>{let a=document.createElement("button");a.type="button",a.className="admin-vt-preset"+(k===n.id?" is-active":""),a.innerHTML=`
          <div class="swatch" style="background:${n.bg}">
            <span style="background:${n.primary}"></span>
            <span style="background:${n.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(n.nameKey)}</div>
          <div class="mode">${ServerI18n.t(n.mode==="dark"?"lbDark":"lbLight")}</div>
        `,a.addEventListener("click",()=>{A={...A,...n},k=n.id,N(),v()}),e.appendChild(a)})}function b(){M.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",A.mode===e.dataset.vtModeBtn)})}function m(){let e=M.querySelector("[data-vt-colors]"),n=A.mode==="dark"?"#F8FAFC":"#0F172A",a=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:n,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:A.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:A.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=a.map(i=>{let f=I(A[i.key],i.vs),y=H(f),S=D(A[i.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${S}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${i.label}</span>
                <span class="grade ${y.cls}">${y.label} \xB7 ${f.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${S}" data-vt-color="${i.key}" />
                <input type="text" value="${S}" data-vt-hex="${i.key}" spellcheck="false" />
                <span class="vs">vs ${i.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function r(){let e=M.querySelector("[data-vt-logo-preview]"),n=M.querySelector(".hint-empty"),a=M.querySelector("[data-vt-logo-actions]");A.logo?(e.src=A.logo,e.hidden=!1,n.style.display="none",a.hidden=!1):(e.hidden=!0,n.style.display="",a.hidden=!0)}function o(){let e=M.querySelector("[data-vt-font]");e.value=A.font;let n=M.querySelector("[data-vt-font-specimen]");n.style.fontFamily=A.font}function t(){let e=A.mode==="dark"?"#F8FAFC":"#0F172A",n=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(e,A.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(A.primary,A.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(A.hero,A.bg)}];M.querySelector("[data-vt-contrast]").innerHTML=n.map(a=>{let i=H(a.ratio);return`<span class="vt-contrast-chip ${i.cls}">${a.lbl} \xB7 ${i.label} ${a.ratio.toFixed(1)}</span>`}).join("")}function u(){let e=M.querySelector("[data-vt-stage]"),n=A.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",A.bg),e.style.setProperty("--vt-primary",A.primary),e.style.setProperty("--vt-hero",A.hero),e.style.setProperty("--vt-fg",n),e.style.fontFamily=A.font;let a=M.querySelector("[data-vt-preview-logo]");if(A.logo){let i=document.createElement("img");i.src=A.logo,i.style.maxHeight="40px",a.replaceChildren(i)}else a.textContent="Danmu Fire"}let c="auto",p="auto";function d(){M.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===c)}),M.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===p)})}async function s(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let n=await e.json(),a=n&&n.ViewerThemeMode&&n.ViewerThemeMode[1],i=n&&n.ViewerLangMode&&n.ViewerLangMode[1];typeof a=="string"&&(c=a),typeof i=="string"&&(p=i),d()}catch{}}async function l(e,n){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:n,index:1})});if(!a.ok)throw new Error(a.status);window.showToast&&window.showToast(`${e} = ${n}`,!0)}catch(a){console.warn("[admin-viewer-theme] force-mode update failed:",a),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function v(){T(),b(),m(),r(),o(),t(),u(),d()}M.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let n=e.target.dataset.vtColor;F.test(e.target.value)&&(A[n]=e.target.value,k="custom",N(),v())}else if(e.target.matches("[data-vt-hex]")){let n=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(A[n]=e.target.value,k="custom",N(),v())}else e.target.matches("[data-vt-font]")&&(A.font=e.target.value,N(),v())}),M.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let n=e.target.files&&e.target.files[0];if(!n)return;if(n.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let a=new FileReader;a.onload=()=>{A.logo=String(a.result||""),N(),v()},a.readAsDataURL(n)}}),M.addEventListener("click",e=>{let n=e.target.closest("[data-vt-mode-btn]");if(n){A.mode=n.dataset.vtModeBtn,k="custom",N(),v();return}let a=e.target.closest("[data-vt-theme-btn]");if(a){c=a.dataset.vtThemeBtn,d(),l("ViewerThemeMode",c);return}let i=e.target.closest("[data-vt-lang-btn]");if(i){p=i.dataset.vtLangBtn,d(),l("ViewerLangMode",p);return}if(e.target.closest("[data-vt-logo-remove]")){A.logo=null,N(),v();return}let y=e.target.closest("[data-vt-device-btn]");if(y){M.querySelectorAll("[data-vt-device-btn]").forEach(L=>L.classList.toggle("is-active",L===y)),M.querySelector("[data-vt-frame]").dataset.device=y.dataset.vtDeviceBtn;return}let S=e.target.closest("[data-vt-action]");S&&S.dataset.vtAction==="reset"&&(A={...w[0],logo:null},k="default",N(),v())}),v(),s()}document.addEventListener("click",function(M){let A=M.target.closest("[data-vt-jump]");if(!A)return;let k=A.dataset.vtJump;if(k){M.preventDefault();try{location.hash="#/"+k}catch{}}});function P(){let M=document.getElementById("settings-grid");if(!M||document.getElementById(g))return;M.insertAdjacentHTML("beforeend",x());let A=document.getElementById(g);A&&C(A)}document.addEventListener("admin-panel-rendered",P),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),P()})})()});var Pt=ye(()=>{(function(){"use strict";let g="sec-system-overview";function h(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(B=>`
            <div class="admin-soh-kpi" data-m="${B.id}">
              <div class="admin-soh-kpi__label">${B.label}</div>
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
      </div>`}function w(B){let C=Math.floor(B/86400),P=Math.floor(B%86400/3600),M=Math.floor(B%3600/60);return C>0?`${C}d ${String(P).padStart(2,"0")}h ${String(M).padStart(2,"0")}m`:P>0?`${P}h ${String(M).padStart(2,"0")}m`:`${M}m ${String(B%60).padStart(2,"0")}s`}function x(B,C,P){let M=document.querySelector(`[data-m="${B}"]`);if(!M)return;let A=M.querySelector("[data-m-v]");A&&(A.textContent=C);let k=M.querySelector("[data-m-sub]");k&&(k.textContent=P||"")}function F(B){let C=document.querySelector("[data-soh-banner-dot]"),P=document.querySelector("[data-soh-banner-title]"),M=document.querySelector("[data-soh-chip]"),k=!(B.queue_size!=null&&B.queue_capacity!=null&&B.queue_size>=B.queue_capacity);M&&M.classList.toggle("is-warn",!k),C&&C.classList.toggle("is-warn",!k),P&&(P.textContent=k?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function $(){(async()=>{try{let P=await window.csrfFetch("/admin/metrics");if(!P.ok)return;let M=await P.json(),A=T=>Array.isArray(T)&&T.length?T[T.length-1]:null,k=M.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-M.server_started_at)):0;x("uptime",k>0?w(k):"\u2014","");let N=null;try{let T=await fetch("/admin/audience/stats",{credentials:"same-origin"});T.ok&&(N=(await T.json()).total_live)}catch{}let _=M.ws_clients??0;x("conn",String(_+(N||0)),N==null?ServerI18n.t("sohConnOverlaysOnly",{n:_}):ServerI18n.t("sohConnBreakdown",{overlays:_,viewers:N}));let E=A(M.mem_series||[]),I=M.mem_total_mb?(M.mem_total_mb/1024).toFixed(0):null;x("ram",E!=null?`${Number(E).toFixed(0)}%`:"\u2014",I?ServerI18n.t("sohMemorySub",{total:I}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";x("ver",`v${H}`,ServerI18n.t("sohVersionSub")),F(M)}catch{}})();let B=document.getElementById(g);if(!B)return;let C=()=>{let P=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";B.querySelectorAll("[data-soh-mode]").forEach(M=>{let A=M.dataset.sohMode===P;M.classList.toggle("is-active",A),M.setAttribute("aria-pressed",A?"true":"false")})};C(),document.addEventListener("admin:theme-mode",C),B.addEventListener("click",function(P){let M=P.target.closest("[data-soh-mode]");if(M){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(M.dataset.sohMode),C();return}let A=P.target.closest("[data-soh-action]");if(!(!A||A.disabled)){if(A.dataset.sohAction==="copy-url"){let k=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(k);return}if(A.dataset.sohAction==="show-qr"){let k=B.querySelector("[data-soh-qr]");if(!k)return;if(!k.hidden){k.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(N=>N.ok?N.json():Promise.reject(N)).then(N=>{k.innerHTML=N.svg,k.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function D(){let B=document.getElementById("settings-grid");!B||document.getElementById(g)||(B.insertAdjacentHTML("beforeend",h()),document.getElementById(g)&&$())}document.addEventListener("admin-panel-rendered",D),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&D()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),D()})})()});var Rt=ye(()=>{(function(){"use strict";let g="sec-polls",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(D){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[D]})};function w(){return`
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
  `}function x(){let $=document.getElementById("sec-polls");if(!$)return;let D=$.querySelector("[data-poll-queue]"),B=$.querySelector("[data-poll-editor]"),C=$.querySelector("[data-poll-view-builder]"),P=$.querySelector("[data-poll-view-live]"),M=$.querySelector("[data-poll-view-results]"),A="danmu.adminPollQueue.v2";function k(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function _(K){return{id:N(),label:""}}function E(){return{id:k(),text:"",timer:90,image_url:"",server_q_id:"",options:[_("A"),_("B")]}}let I=null,H="builder",T=null,b=0,m={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},r=null,o=[];try{let K=localStorage.getItem(A);if(K){let Y=JSON.parse(K);Array.isArray(Y)?o=Y:Y&&Array.isArray(Y.queue)&&(o=Y.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[E()]),o.forEach(K=>{typeof K.image_url!="string"&&(K.image_url=""),typeof K.server_q_id!="string"&&(K.server_q_id="")});let t=o[0].id,u="manual",c=null,p=null,d={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function s(){try{localStorage.setItem(A,JSON.stringify({queue:o,activeId:t,mode:u}))}catch{}}function l(K){return o.find(Y=>Y.id===K)}function v(K,Y){let ne=l(K);ne&&Object.assign(ne,Y)}function e(K,Y,ne){let oe=K.slice(),[de]=oe.splice(Y,1);return oe.splice(ne,0,de),oe}function n(){D.innerHTML="",o.forEach((K,Y)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",K.id===t&&ne.classList.add("is-active");let oe=d.active&&d.currentIndex===Y;oe&&ne.classList.add("is-running"),ne.dataset.qid=K.id,ne.draggable=!0;let de=!!K.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Y+1}</span>
            <div class="info">
              <div class="text">${h(K.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:K.options.length})} \xB7 ${K.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):K.timer+"s"} \xB7 ${de?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${oe?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":K.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,D.appendChild(ne)})}function a(){let K=l(t)||o[0];if(!K){B.innerHTML="";return}let Y=o.indexOf(K);B.innerHTML=`
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
            ${K.options.map((ne,oe)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+oe)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${h(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+oe)})}" maxlength="100" />
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
        `}function i(){I&&I.active?H="live":T?H="results":H="builder",$.dataset.pollView=H,C.hidden=H!=="builder",P.hidden=H!=="live",M.hidden=H!=="results",n(),a(),X(),H==="live"?R():H==="results"&&q(),H==="live"?f():y()}function f(){r||(r=setInterval(()=>{H!=="live"||!I||!I.active||j()},1e3))}function y(){r&&(clearInterval(r),r=null)}function S(K,Y){if(!K||!K.time_limit_seconds)return null;if(!Y)return K.time_limit_seconds;let ne=Date.now()/1e3-Y;return Math.max(0,Math.round(K.time_limit_seconds-ne))}function L(K){if(K==null)return"\u221E";let Y=String(Math.floor(K/60)).padStart(2,"0"),ne=String(K%60).padStart(2,"0");return`${Y}:${ne}`}function R(){if(!I||!I.questions||I.questions.length===0){P.innerHTML="";return}let K=I.current_index>=0?I.current_index:0,Y=I.questions.length,ne=I.questions[K],oe=S(ne,I.started_at),de=ne.time_limit_seconds||0,ue=de>0&&oe!=null?Math.max(0,Math.min(1,oe/de)):1,me=de>0&&oe!=null&&oe<=Math.max(5,de*.15),Te=ne.options.reduce((ee,re)=>ee+(re.count||0),0),Ee=[...ne.options].sort((ee,re)=>(re.count||0)-(ee.count||0)),Ae=Ee[0]?Ee[0].count:0,se=I.questions[K+1],ie=110,ce=ie/2-6,U=2*Math.PI*ce,Q=U*ue;P.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${h((I.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${K+1}</strong>`,total:Y})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${ie} ${ie}" width="56" height="56">
                      <circle cx="${ie/2}" cy="${ie/2}" r="${ce}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${ie/2}" cy="${ie/2}" r="${ce}" fill="none"
                        stroke="${me?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${Q} ${U}" stroke-linecap="round"
                        transform="rotate(-90 ${ie/2} ${ie/2})"
                        style="filter: drop-shadow(0 0 4px ${me?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${me?"is-low":""}" data-live-mmss>${oe==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(oe)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:K+1})}</div>
                <div class="text">${h(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(ee=>{let re=Te>0?ee.count/Te*100:0,he=(ee.count||0)>0&&ee.count===Ae;return`
                    <div class="admin-polls-live-bar ${he?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${h(ee.key)}</span>
                        <span class="lbl">${h(ee.text||"")}</span>
                        ${he?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${re.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ee.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${re.toFixed(1)}%"></div></div>
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
                  ${I.questions.map((ee,re)=>{let he=re<K?"done":re===K?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${he}">
                        <span class="idx">${he==="done"?"\u2713":re+1}</span>
                        <span class="t">${h(ee.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(ee=>`
                    <label class="admin-polls-live-toggle ${m[ee.k]?"is-on":""}" data-live-toggle="${ee.k}">
                      <span class="lbl">${ee.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function j(){if(!I||!I.active)return;let K=I.current_index>=0?I.current_index:0,Y=I.questions[K];if(!Y)return;let ne=S(Y,I.started_at),oe=Y.time_limit_seconds||0,de=P.querySelector("[data-live-mmss]"),ue=P.querySelector("[data-live-ring]");if(de&&(de.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(ne),de.classList.toggle("is-low",oe>0&&ne!=null&&ne<=Math.max(5,oe*.15))),ue&&oe>0&&ne!=null){let me=+ue.getAttribute("r"),Te=2*Math.PI*me,Ee=Math.max(0,Math.min(1,ne/oe));ue.setAttribute("stroke-dasharray",`${Te*Ee} ${Te}`);let Ae=ne<=Math.max(5,oe*.15);ue.setAttribute("stroke",Ae?"var(--hud-crimson)":"var(--color-primary)"),ue.style.filter=`drop-shadow(0 0 4px ${Ae?"var(--hud-crimson)":"var(--color-primary)"})`}m.autoAdvance&&oe>0&&ne===0&&(K>=I.questions.length-1?J():te())}function q(){let K=T;if(!K||!K.questions||K.questions.length===0){M.innerHTML="";return}let Y=K.questions.length,ne=Math.max(0,Math.min(b,Y-1)),oe=K.questions[ne],de=oe.options.reduce((U,Q)=>U+(Q.count||0),0),ue=[...oe.options].sort((U,Q)=>(Q.count||0)-(U.count||0)),me=ue[0]||{key:"-",text:"\u2014",count:0},Te=ue[1],Ee=de>0?me.count/de*100:0,Ae=Te?Math.max(0,me.count-Te.count):me.count,se=K.started_at||0,ie=K.ended_at||Date.now()/1e3,ce=Math.max(0,Math.round(ie-se));M.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Y>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${K.questions.map((U,Q)=>`
                    <button type="button" role="tab" class="${Q===ne?"is-active":""}" data-results-tab="${Q}">
                      Q${Q+1}<span class="t">${h((U.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Y} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:L(ce),n:de})}</span>
                </div>
                <div class="text">${h(oe.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${h(me.key)}</div>
                <div class="info">
                  <div class="lbl">${h(me.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} \xB7 ${Ee.toFixed(1)}% ${Te?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Ae}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:de})}</span>
                </div>
                ${ue.map((U,Q)=>{let ee=de>0?U.count/de*100:0;return`
                    <div class="admin-polls-results-bar ${Q===0&&U.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${Q+1}</span>
                        <span class="tag">${h(U.key)}</span>
                        <span class="lbl">${h(U.text||"")}</span>
                        <span class="pct">${ee.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:U.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${ee.toFixed(1)}%"></div></div>
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
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${L(ce)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let U=Math.max(1,...ue.map(Q=>Q.count));return ue.map(Q=>`<div class="bar" style="height:${Math.max(6,Q.count/U*100)}%"></div>`).join("")})()}
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
        `}function W(K){let Y=[["question_index","question","option_key","option_text","count","percentage"]];return K.questions.forEach((ne,oe)=>{let de=ne.options.reduce((ue,me)=>ue+(me.count||0),0);ne.options.forEach(ue=>{let me=de>0?(ue.count/de*100).toFixed(1):"0";Y.push([oe+1,ne.text,ue.key,ue.text,ue.count,me])})}),Y.map(ne=>ne.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function G(K,Y,ne){let oe=new Blob([ne],{type:Y}),de=document.createElement("a");de.href=URL.createObjectURL(oe),de.download=K,document.body.appendChild(de),de.click(),setTimeout(()=>{URL.revokeObjectURL(de.href),de.remove()},0)}$.addEventListener("click",K=>{let Y=K.target.closest("[data-live-action]");if(Y){let ue=Y.dataset.liveAction;ue==="advance"?te():ue==="end"?J():ue==="pause"&&(m.autoAdvance=!1,R());return}let ne=K.target.closest("[data-live-toggle]");if(ne){let ue=ne.dataset.liveToggle;ue in m&&(m[ue]=!m[ue],ne.classList.toggle("is-on",m[ue]));return}let oe=K.target.closest("[data-results-tab]");if(oe){b=+oe.dataset.resultsTab||0,q();return}let de=K.target.closest("[data-results-action]");if(de){let ue=de.dataset.resultsAction,me=T;if(!me)return;if(ue==="copy"){let Te=me.questions.map((Ee,Ae)=>{let se=Ee.options.reduce((ce,U)=>ce+(U.count||0),0),ie=Ee.options.map(ce=>{let U=se>0?(ce.count/se*100).toFixed(1):"0.0";return`  ${ce.key}. ${ce.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} (${U}%)`});return`Q${Ae+1}: ${Ee.text}
${ie.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Te)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ue==="csv"?G(`poll_${(me.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",W(me)):ue==="json"?G(`poll_${(me.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(me,null,2)):ue==="reset"&&(T=null,b=0,i());return}}),D.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(c=Y.dataset.qid,Y.classList.add("is-dragging"))}),D.addEventListener("dragend",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&Y.classList.remove("is-dragging"),c=null,D.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),D.addEventListener("dragover",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");!Y||!c||Y.dataset.qid===c||(D.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),D.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-qrow");if(!Y||!c)return;let ne=o.findIndex(de=>de.id===c),oe=o.findIndex(de=>de.id===Y.dataset.qid);ne<0||oe<0||ne===oe||(o=e(o,ne,oe),s(),i())}),D.addEventListener("click",K=>{let Y=K.target.closest(".admin-poll-qrow");Y&&(t=Y.dataset.qid,s(),i())}),B.addEventListener("input",K=>{let Y=l(t);if(Y){if(K.target.matches("[data-ed-text]")){Y.text=K.target.value,s(),n();return}if(K.target.matches("[data-ed-opt-text]")){let ne=K.target.dataset.edOptText,oe=Y.options.find(de=>de.id===ne);oe&&(oe.label=K.target.value,s(),n())}}}),B.addEventListener("change",K=>{let Y=l(t);Y&&K.target.matches("[data-ed-timer]")&&(Y.timer=+K.target.value,s(),n())}),B.addEventListener("click",async K=>{let Y=l(t);if(!Y)return;let ne=K.target.closest("[data-ed-opt-remove]");if(ne){let de=ne.dataset.edOptRemove;Y.options.length>2&&(Y.options=Y.options.filter(ue=>ue.id!==de),s(),a(),n());return}if(K.target.closest("[data-ed-opt-add]")){Y.options.length<6&&(Y.options.push(_()),s(),a(),n());return}let oe=K.target.closest("[data-ed-action]");if(oe)if(oe.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=o.findIndex(me=>me.id===t);o=o.filter(me=>me.id!==t),t=o[Math.min(ue,o.length-1)].id,s(),i()}}else if(oe.dataset.edAction==="upload-q-image"){let de=B.querySelector("[data-ed-q-image-input]");de&&de.click()}else oe.dataset.edAction==="remove-q-image"&&(Y.image_url="",s(),a(),n())}),B.addEventListener("change",async K=>{if(!K.target.matches("[data-ed-q-image-input]"))return;let Y=K.target.files&&K.target.files[0];if(!Y)return;let ne=l(t);if(!ne)return;if(!d.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),K.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),K.target.value="";return}if(Y.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),K.target.value="";return}let oe=new FormData;oe.append("file",Y);try{let de=await csrfFetch(`/admin/poll/${encodeURIComponent(d.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:oe}),ue=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ue.error||"upload failed");ne.image_url=ue.image_url,s(),a(),n(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(de){showToast&&showToast(String(de.message||de),!1)}finally{K.target.value=""}}),B.addEventListener("dragstart",K=>{let Y=K.target.closest(".admin-poll-opt");Y&&(p=Y.dataset.oid,Y.classList.add("is-dragging"))}),B.addEventListener("dragend",K=>{B.querySelectorAll(".is-dragging, .is-drag-over").forEach(Y=>Y.classList.remove("is-dragging","is-drag-over")),p=null}),B.addEventListener("dragover",K=>{let Y=K.target.closest(".admin-poll-opt");!Y||!p||Y.dataset.oid===p||(K.preventDefault(),B.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Y.classList.add("is-drag-over"))}),B.addEventListener("drop",K=>{K.preventDefault();let Y=K.target.closest(".admin-poll-opt"),ne=l(t);if(!Y||!p||!ne)return;let oe=ne.options.findIndex(ue=>ue.id===p),de=ne.options.findIndex(ue=>ue.id===Y.dataset.oid);oe<0||de<0||oe===de||(ne.options=e(ne.options,oe,de),s(),a())}),$.addEventListener("click",K=>{if(K.target.closest("[data-poll-action='add']")){let ue=E();o.push(ue),t=ue.id,s(),i();return}let ne=K.target.closest("[data-poll-template]");if(ne){let ue=E(),me=ne.dataset.pollTemplate,Te=["A","B","C","D","E"],Ee=Ae=>Ae.map((se,ie)=>{let ce=_(Te[ie]);return ce.text=se,ce});me==="yesno"?(ue.text="",ue.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):me==="stars"?(ue.timer=60,ue.options=Ee(["1","2","3","4","5"])):me==="four"&&(ue.options=Ee(["","","",""])),o.push(ue),t=ue.id,s(),i();return}let oe=K.target.closest("[data-poll-mode]");oe&&(u=oe.dataset.pollMode,$.querySelectorAll("[data-poll-mode]").forEach(ue=>ue.classList.toggle("is-active",ue===oe)),s());let de=K.target.closest("[data-poll-session-action]");if(de){let ue=de.dataset.pollSessionAction;ue==="start"?le():ue==="advance"?te():ue==="end"&&J()}});function X(){let K=$.querySelector("[data-poll-session]");if(!K)return;let Y=K.querySelector("[data-poll-session-status]"),ne=K.querySelector("[data-poll-session-action='start']"),oe=K.querySelector("[data-poll-session-action='advance']"),de=K.querySelector("[data-poll-session-action='end']");if(!d.pollId||!d.active){Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,oe.hidden=!0,de.hidden=!0;return}let ue=o.length,me=d.currentIndex+1,Te=d.currentIndex>=ue-1;Y.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${me} / ${ue}</span>`,ne.hidden=!0,oe.hidden=Te,de.hidden=!1}async function le(){try{let K=o.map((me,Te)=>{let Ee=(me.text||"").trim(),Ae=me.options.map(se=>(se.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Te+1}));if(Ae.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Te+1}));return{text:Ee,options:Ae,time_limit_seconds:me.timer&&me.timer>0?me.timer:null}});if(!K.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Y=(()=>{let me=o.map(Te=>Number(Te.timer)||0).filter(Te=>Te>0);return me.length?Math.round(me.reduce((Te,Ee)=>Te+Ee,0)/me.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:K,mode:u||"manual",default_duration_s:Y})}),oe=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(oe.error||ServerI18n.t("pollBuilderErrCreateFailed"));d.pollId=oe.poll_id,(oe.questions||[]).forEach((me,Te)=>{o[Te]&&(o[Te].server_q_id=me.id)}),s();let de=await csrfFetch("/admin/poll/start",{method:"POST"}),ue=await de.json().catch(()=>({}));if(!de.ok)throw new Error(ue.error||ServerI18n.t("pollBuilderErrStartFailed"));d.active=!0,d.currentIndex=ue.current_index??0,I=ue,T=null,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),Z()}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function te(){try{let K=await csrfFetch("/admin/poll/advance",{method:"POST"}),Y=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Y.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));d.currentIndex=Y.current_index,d.active=!!Y.active,I=Y,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:d.currentIndex+1}),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}async function J(){try{let K=I,Y=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Y.ok){let ne=await Y.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}K&&K.questions&&(T={...K,ended_at:Date.now()/1e3},b=K.current_index>=0?K.current_index:0),d.active=!1,d.pollId="",d.currentIndex=-1,I=null,d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}}function Z(){d.statusTimer&&clearInterval(d.statusTimer),d.statusTimer=setInterval(async()=>{if(d.pollId)try{let K=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!K.ok)return;let Y=await K.json();if(Y.poll_id!==d.pollId)return;d.active=!!Y.active,d.currentIndex=Y.current_index??-1;let ne=!!(I&&I.active);I=Y,Y.active||(clearInterval(d.statusTimer),d.statusTimer=null,ne&&Y.questions&&!T&&(T={...Y,ended_at:Date.now()/1e3},b=Y.current_index>=0?Y.current_index:0),I=null),H==="live"?R():i()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),y()}),i()}function F(){let $=document.getElementById("settings-grid");!$||document.getElementById(g)||($.insertAdjacentHTML("beforeend",w()),document.getElementById(g)&&x())}document.addEventListener("admin-panel-rendered",F),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&F()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),F()})})()});var Ot=ye(()=>{(function(){"use strict";let x="sec-live-feed",F={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},$=[],D=[],B=!1,C="",P="all",M=0,A=0,k=null,N=null,_=null;function E(se){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(se):String(se??"").replace(/[&<>"']/g,function(ie){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ie]})}function I(se,ie){return se?se.length>ie?se.slice(0,ie)+"\u2026":se:""}function H(se){let ie=new Date(se),ce=U=>String(U).padStart(2,"0");return`${ce(ie.getHours())}:${ce(ie.getMinutes())}:${ce(ie.getSeconds())}`}function T(se){if(!C)return!0;let ie=C.toLowerCase(),ce=se.data;return ce.text&&ce.text.toLowerCase().includes(ie)||ce.nickname&&ce.nickname.toLowerCase().includes(ie)||ce.fingerprint&&ce.fingerprint.toLowerCase().includes(ie)||ce.layout&&ce.layout.toLowerCase().includes(ie)}function b(se){return P==="muted"?!!se.muted:!0}function m(){P="all",document.querySelectorAll(".admin-live-feed-tab").forEach(se=>se.classList.toggle("is-active",se.dataset.tab==="all"))}function r(){C="",_&&(_.value=""),m()}function o(se,ie){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let U;return se==="paused"?U=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ie||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):se==="no-result"?U=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ie||ServerI18n.t("lfNoMatchDesc")}):U=window.AdminEmpty.render("messages"),U.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),U.setAttribute("data-empty-kind","live-feed"),U}let ce=document.createElement("div");return ce.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",ce.setAttribute("data-empty-kind","live-feed"),ce.innerHTML=`<div class="admin-proto-placeholder-title">${E(se)}</div><div class="admin-proto-placeholder-body">${E(ie||"")}</div>`,ce}function t(se){let ie=se.data,ce=document.createElement("div");ce.className="admin-live-feed-row"+(se.muted?" is-muted":""),ce.dataset.id=se.id,ce.tabIndex=-1;let U=document.createElement("span");if(U.className="admin-live-feed-time",U.textContent=H(se.ts),ce.appendChild(U),(ie.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ie.layout,ce.appendChild(pe)}let ee=F[ie.integration];if(ee){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ee,ce.appendChild(pe)}let re=document.createElement("span");re.className="admin-live-feed-text",re.textContent=I(ie.text||"",80),re.title=ie.text||"",ce.appendChild(re);let he=document.createElement("span");he.className="admin-live-feed-identity",window.AdminIdentity&&he.appendChild(AdminIdentity.render({nickname:ie.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!_||(_.value=pe,_.dispatchEvent(new Event("input",{bubbles:!0})),_.focus())}})),ce.appendChild(he);let ke=document.createElement("span");if(ke.className="admin-live-feed-actions is-hover-reveal",ie.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",Le=>{Le.stopPropagation(),c(se)}),ke.appendChild(pe)}let $e=document.createElement("button");if($e.type="button",$e.className="admin-ui-chip is-danger admin-live-feed-action",$e.textContent=ServerI18n.t("blockKeywordBtn"),$e.title=ServerI18n.t("blockKeywordTitle"),$e.addEventListener("click",pe=>{pe.stopPropagation(),p("keyword",ie.text,se.id)}),ke.appendChild($e),ie.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",ie.fingerprint),pe.addEventListener("click",Le=>{Le.stopPropagation(),p("fingerprint",ie.fingerprint,se.id)}),ke.appendChild(pe)}return ce.appendChild(ke),ce.classList.add("is-clickable"),ce.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||u(se)}),ce.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),u(se))}),ce}function u(se){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(se)}async function c(se){let ie=se&&se.data&&se.data.message_id;if(!ie)return;let ce=await window.AdminModeration.recall(ie);if(!ce.ok){console.error("[LiveFeed] Recall failed:",ce.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}se.recalled=!0;let U=d(se.id);U&&U.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function p(se,ie,ce){if(!(!ie||!await(se==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ie))){if(ce){let ee=$.find(re=>re.id===ce);ee&&(ee.muted=!0)}else $.forEach(ee=>{se==="keyword"&&ee.data.text===ie&&(ee.muted=!0),se==="fingerprint"&&ee.data.fingerprint===ie&&(ee.muted=!0)});v()}}function d(se){if(!k||!se)return null;let ie=k.children;for(let ce=0;ce<ie.length;ce++)if(ie[ce].dataset&&ie[ce].dataset.id===se)return ie[ce];return null}function s(){let se=document.activeElement,ie=se&&se.closest?se.closest(".admin-live-feed-row"):null;return ie?ie.dataset.id:null}function l(se){if(!se)return;let ie=d(se);ie&&document.activeElement!==ie&&ie.focus({preventScroll:!0})}function v(){if(!k)return;let se=s(),ie=document.createDocumentFragment(),ce=$.filter(U=>T(U)&&b(U));for(let U=ce.length-1;U>=0;U--)ie.appendChild(t(ce[U]));if(k.textContent="",ie.childNodes.length===0){let U=B?o("paused"):$.length===0?o("empty"):o("no-result");k.appendChild(U)}else k.appendChild(ie);a(),l(se)}function e(se){if(!k||!T(se)||!b(se))return null;let ie=k.querySelector("[data-empty-kind='live-feed']");ie&&ie.remove();let ce=k.scrollTop<=8,U=t(se);if(ce)k.insertBefore(U,k.firstChild);else{let Q=k.scrollHeight;k.insertBefore(U,k.firstChild),k.scrollTop+=k.scrollHeight-Q,A+=1}return U}function n(){let se=$.length-200;if(se<=0)return;$.splice(0,se).forEach(ce=>{let U=d(ce.id);U&&U.remove()})}function a(){S(),L(),f()}function i(se){let ie={ts:Date.now(),data:se,id:se&&se.message_id?"m"+se.message_id:"e"+ ++M};if(se&&se.status==="blocked"&&(ie.muted=!0),B){D.push(ie),L(),f();return}$.push(ie),e(ie),n(),a()}function f(){let se=document.querySelector("[data-lf-jump]"),ie=document.querySelector("[data-lf-jump-n]");if(!se||!ie)return;let ce=D.length,U=ce>0?ce:A;U>0?(se.hidden=!1,ie.textContent=String(U)):se.hidden=!0}function y(){B&&R(),A=0,k&&(k.scrollTop=0),f()}function S(){let se=document.querySelector("[data-lf-state]");se&&(se.className=B?"ui-status is-warning":"ui-status is-success",se.textContent=B?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function L(){let se=document.getElementById(x)||document,ie=(ce,U)=>{let Q=se.querySelector(ce);Q&&(Q.textContent=String(U))};ie("[data-cnt-all]",$.length),ie("[data-cnt-mut]",$.filter(ce=>ce.muted).length)}function R(){if(B=!B,k&&k.setAttribute("aria-live",B?"off":"polite"),N&&(N.textContent=B?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),N.classList.toggle("is-primary",B),N.classList.toggle("is-ghost",!B)),B)L(),f();else{for(let se of D)$.push(se);D=[],$.length>200&&$.splice(0,$.length-200),A=0,v()}}function j(){let se=document.getElementById("settings-grid");if(!se)return!1;let ie=`
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
      </div>`;return se.insertAdjacentHTML("beforeend",ie),!0}let q=!1,W=null,G=0,X=1500,le=!1;async function te(){if(!le){le=!0;try{let se=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(G),{credentials:"same-origin"});if(!se.ok)return;let ie=await se.json();if(Array.isArray(ie.entries)){for(let ce of ie.entries)if(!(!ce||!ce.data)){if(typeof ce.seq=="number"){if(ce.seq<=G)continue;G=ce.seq}i(ce.data)}}typeof ie.next_since=="number"&&ie.next_since>G&&(G=ie.next_since)}catch{}finally{le=!1}}}let J=5e3,Z=null,K=!1;async function Y(){if(!(K||document.hidden)){K=!0;try{let se=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!se.ok)return;let ie=await se.json(),ce=Array.isArray(ie.pending)?ie.pending.length:0,U=document.getElementById(x);if(!U)return;let Q=U.querySelector("[data-cnt-q]");Q&&(Q.textContent=String(ce));let ee=U.querySelector("[data-lf-pending-link]");ee&&ee.classList.toggle("has-pending",ce>0)}catch{}finally{K=!1}}}function ne(){q||(q=!0,te(),W=setInterval(te,X),Y(),Z=setInterval(Y,J),window.addEventListener("beforeunload",()=>{Z&&(clearInterval(Z),Z=null),W&&(clearInterval(W),W=null)}))}function oe(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(x)&&j()&&(de(),v())}function de(){k=document.getElementById("liveFeedList"),N=document.getElementById("liveFeedPauseBtn"),_=document.getElementById("liveFeedSearch");let se=document.getElementById("liveFeedClearBtn"),ie=document.querySelectorAll(".admin-live-feed-tab");N&&N.addEventListener("click",R),se&&se.addEventListener("click",()=>{$=[],D=[],A=0,v()});let ce=document.querySelector("[data-lf-jump-btn]");if(ce&&ce.addEventListener("click",y),k&&k.addEventListener("scroll",()=>{k.scrollTop<=8&&A>0&&(A=0,f())},{passive:!0}),ie.forEach(U=>{U.addEventListener("click",()=>{ie.forEach(Q=>Q.classList.remove("is-active")),U.classList.add("is-active"),P=U.dataset.tab||"all",v()})}),_){let U=null;_.addEventListener("input",()=>{clearTimeout(U),U=setTimeout(()=>{C=_.value.trim(),v()},200)})}ne()}function ue(se){if(!("ontouchstart"in window))return;let ie=0,ce=0,U=0,Q=null,ee=null,re=!1;function he(ke){if(ke.querySelector(".admin-live-feed-row__swipe-actions"))return;let $e=ke.dataset.id,pe=$.find(Ce=>Ce.id===$e),Le=!!(pe&&pe.data&&pe.data.message_id),Ie=document.createElement("div");Ie.className="admin-live-feed-row__swipe-actions",Ie.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${Le?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,Ie.addEventListener("click",function(Ce){let Fe=Ce.target.closest("[data-swipe-act]");if(!Fe||Fe.disabled)return;let Pe=ke.dataset.id,qe=$.find(je=>je.id===Pe);if(!qe||!qe.data)return;let Oe=Fe.dataset.swipeAct;Oe==="ban"?qe.data.fingerprint&&p("fingerprint",qe.data.fingerprint,Pe):Oe==="recall"&&c(qe),ke.classList.remove("is-swiped")}),ke.appendChild(Ie)}se.addEventListener("touchstart",function(ke){let $e=ke.target.closest(".admin-live-feed-row");$e&&(ke.target.closest(".admin-live-feed-row__swipe-actions")||(Q=$e,re=!1,ie=ke.touches[0].clientX,ce=ke.touches[0].clientY,U=0))},{passive:!0}),se.addEventListener("touchmove",function(ke){if(!Q||re)return;let $e=ke.touches[0],pe=$e.clientX-ie,Le=$e.clientY-ce;if(Math.abs(Le)>Math.abs(pe)&&Math.abs(Le)>12){re=!0;return}if(U=pe,pe<-10){he(Q),ee=Q,Q.classList.add("is-swiping");let Ie=Math.max(-180,pe);Q.style.transform=`translateX(${Ie}px)`}else pe>10&&Q.classList.contains("is-swiped")&&(Q.style.transform="")},{passive:!0}),se.addEventListener("touchend",function(){Q&&(Q.classList.remove("is-swiping"),Q.style.transform="",U<=-60?Q.classList.add("is-swiped"):Q.classList.remove("is-swiped"),Q=null,ee=null,U=0)},{passive:!0})}function me(){return k?Array.from(k.querySelectorAll(".admin-live-feed-row")):[]}function Te(){let se=me(),ie=document.activeElement;for(let ce of se)if(ce===ie||ce.contains(ie))return ce;return null}function Ee(se){let ie=me();if(!ie.length)return!1;let ce=Te(),U=ce?ie.indexOf(ce)+se:se>0?0:ie.length-1;return U=Math.max(0,Math.min(ie.length-1,U)),ie[U].focus(),ie[U].scrollIntoView({block:"nearest"}),!0}function Ae(se){let ie=Te();if(!ie)return!1;let ce=$.find(Q=>Q.id===ie.dataset.id);if(!ce)return!1;let U=se==="keyword"?ce.data.text:ce.data.fingerprint;return U?(p(se,U,ce.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return $.slice()},isVisible:function(){return!!(k&&k.offsetParent!==null)},isPaused:function(){return B},moveFocus:Ee,blockFocused:Ae,togglePause:function(){R()}},document.addEventListener("admin-panel-rendered",oe),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",oe):oe()})()});var qt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,w=window.AdminUtils.escapeHtml;function x(v,e=!1){var n=g();return n[v]!==void 0?n[v]:e}function F(v){var e=g();e[v.id]=v.open,h(e)}let $=!1;new MutationObserver(()=>{let v=document.getElementById("settings-grid");if(v&&!(document.getElementById("sec-plugins")||$)){$=!0;try{B(v)}finally{$=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function B(v){let e=`
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
      `;v.insertAdjacentHTML("beforeend",e);let n=document.querySelector("[data-console-filters]");n&&n.addEventListener("click",a=>{let i=a.target.closest("[data-console-filter]");i&&(n.querySelectorAll("[data-console-filter]").forEach(f=>f.classList.toggle("is-active",f===i)),M=i.dataset.consoleFilter,E())}),document.getElementById("pluginsReloadBtn").addEventListener("click",l),T(),H()}let C=0,P=0,M="all",A=[],k=80;function N(v){let e=(v||"INFO").toUpperCase();return e==="ERROR"?"is-error":e==="WARN"?"is-warn":e==="DEBUG"?"is-debug":"is-info"}function _(v){let e=new Date(v*1e3),n=a=>String(a).padStart(2,"0");return`${n(e.getHours())}:${n(e.getMinutes())}:${n(e.getSeconds())}`}function E(){let v=document.getElementById("pluginsConsoleBody");if(!v)return;let e=M==="all"?A:A.filter(n=>(n.level||"INFO").toUpperCase()===M);if(e.length===0){let n=M==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${M} lines yet \xB7 waiting\u2026`;v.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${n}</span>
          </div>`;return}v.innerHTML=e.map(n=>{let a=_(n.ts),i=(n.msg||"").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),f=(n.plugin||"\u2014").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),y=(n.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${a}</span>
          <span class="lv ${N(n.level)}">${y}</span>
          <span class="plg">${f}</span>
          <span class="msg">${i}</span>
        </div>`}).join("")}async function I(){try{let v=await fetch(`/admin/plugins/console?since=${C}`,{credentials:"same-origin"});if(!v.ok)return;let e=await v.json();if(!Array.isArray(e.events)||e.events.length===0)return;for(A.unshift(...e.events);A.length>k;)A.pop();C=e.latest_seq||C,E()}catch{}}function H(){P||(P=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:I}))}async function T(){let v=document.getElementById("pluginsList");if(v)try{let e=await csrfFetch("/admin/plugins/list");if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json(),a=n.plugins||[];if(b(n.upload_allowed!==!1),a.length===0){v.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",m([]);return}v.innerHTML=a.map(r).join(""),d(v),m(a)}catch(e){console.error("Failed to load plugins:",e),v.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function b(v){let e=document.getElementById("pluginsUploadBtn");e&&(e.disabled=!v,e.toggleAttribute("data-upload-disabled",!v),e.textContent=ServerI18n.t(v?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),v?e.removeAttribute("title"):e.title="ALLOW_PLUGIN_UPLOAD")}function m(v){let e=v.length,n=v.filter(S=>S.enabled).length,a=e-n,i=v.map(S=>S.priority).filter(S=>typeof S=="number"),f=i.length?Math.round(i.reduce((S,L)=>S+L,0)/i.length):null,y=(S,L)=>{document.querySelectorAll(`[data-plugins-stat="${S}"]`).forEach(R=>{R.textContent=L})};y("loaded",e),y("running",n),y("paused",a),y("priority",f??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(S=>{S.textContent=e})}function r(v){let{name:e,version:n,description:a,priority:i,enabled:f,is_user:y,file:S}=v,L=`plugin-toggle-${e}`,R=u(i),j=p(i),q=t(v),W=y&&S?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${w(S)}"
            data-plugin-name="${w(e)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${w(e)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${w(e)}">
          <span class="admin-plugins-dot ${f?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${w(e)}</div>
            ${a?`<div class="desc">${w(a)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${n?"v"+w(n):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${R}">${i??"\u2014"}${j?" \xB7 "+j:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${c(q)}">${q}</span>
          <div class="admin-plugins-toggle-cell">
            ${W}
            <label class="admin-plugins-switch" for="${L}">
              <input type="checkbox" id="${L}" role="switch"
                aria-checked="${!!f}" aria-label="Toggle plugin ${w(e)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${w(e)}"
                ${f?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function o(v,e){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:v}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:e}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let a=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e})}),i=await a.json().catch(()=>({}));if(!a.ok){showToast(i.error||ServerI18n.t("pluginsToastRemoveFailed",{status:a.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:v}),!0),await T()}catch(a){showToast(ServerI18n.t("pluginsToastNetError",{msg:a.message||""}),!1)}}function t(v){let e=v.file||v.path||v.source||"";if(typeof e=="string"){if(e.endsWith(".py"))return"PY";if(e.endsWith(".js"))return"JS"}return(v.language||"PY").toUpperCase()}function u(v){return v==null?"is-muted":v<=10?"is-danger":v<=50?"is-warn":"is-cyan"}function c(v){return v==="JS"?"is-cyan":v==="PY"?"is-warn":"is-muted"}function p(v){return v==null?"":v<=10?"CRITICAL":v<=50?"HIGH":"NORMAL"}function d(v){v.querySelectorAll(".plugin-toggle").forEach(e=>{e.addEventListener("change",async function(){let n=this.dataset.pluginName,a=this.checked;await s(n,a,this)})}),v.querySelectorAll(".plugin-uninstall").forEach(e=>{e.addEventListener("click",function(){o(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(v,e,n){let a=e?"/admin/plugins/enable":"/admin/plugins/disable";try{let i=await csrfFetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:v})});if(!i.ok){let f=await i.json().catch(()=>({}));throw new Error(f.error||`HTTP ${i.status}`)}showToast(e?ServerI18n.t("pluginEnabled").replace("{name}",v):ServerI18n.t("pluginDisabled").replace("{name}",v),!0)}catch(i){console.error(`Failed to ${e?"enable":"disable"} plugin:`,i),showToast(i.message||ServerI18n.t("operationFailed"),!1),n&&(n.checked=!e)}}async function l(){let v=document.getElementById("pluginsReloadBtn");v&&(v.disabled=!0);try{let e=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!e.ok){let n=await e.json().catch(()=>({}));throw new Error(n.error||`HTTP ${e.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await T()}catch(e){console.error("Failed to reload plugins:",e),showToast(e.message||ServerI18n.t("reloadFailed"),!1)}finally{v&&(v.disabled=!1)}}})})()});var Ht=ye(()=>{(function(){"use strict";let g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},h={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},w=null,x=null;function F(){return w||(w=document.createElement("div"),w.className="admin-pu-backdrop",w.hidden=!0,w.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(w),w.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===w)&&o()}),w)}function $(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((c,p)=>{let d=p+1,s=d<t,v=s?"is-done":d===t?"is-active":"";return(p>0?`<span class="admin-pu-step-line ${s?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${v}">
          <span class="circle">${s?"\u2713":d}</span>
          <span class="label">${c}</span>
        </div>`}).join("")}function D(t,u){x.step=t;let c=w.querySelector("[data-pu-steps]");c&&(c.innerHTML=$(t));let p=w.querySelector("[data-pu-body]");p&&(p.innerHTML=u)}function B(t){let u=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),c=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${c}</div>
          <div class="admin-pu-dropzone-msg">${g(u)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function C(){let t=w.querySelector("[data-pu-dropzone]"),u=w.querySelector("[data-pu-file]"),c=w.querySelector("[data-pu-browse]");c&&c.addEventListener("click",()=>u&&u.click()),u&&u.addEventListener("change",()=>{u.files&&u.files[0]&&P(u.files[0])}),t&&(t.addEventListener("click",()=>u&&u.click()),t.addEventListener("dragover",p=>{p.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",p=>{p.preventDefault(),t.classList.remove("is-over");let d=p.dataTransfer&&p.dataTransfer.files;if(!(!d||d.length===0)){if(d.length>1){D(1,B("error-multi")),C();return}P(d[0])}}))}function P(t){if(!t.name.match(/\.py$/i)){D(1,B("error-type")),C();return}if(t.size>256*1024){D(1,B("error-size")),C();return}x.file=t,D(2,M(t.name)),A(t)}function M(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${g(t)}</div>
      </div>`}async function A(t){try{let u=new FormData;u.append("file",t);let c=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:u}),p=await c.json().catch(()=>({}));if(!c.ok&&!p.validation){window.showToast?.(p.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:c.status}),!1),D(1,B()),C();return}x.manifest=p.manifest||{},x.validation=p.validation||{},x.filename=p.filename||t.name,k(x)}catch(u){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:u.message||""}),!1),D(1,B()),C()}}function k(t){let u=t.manifest||{},c=t.validation||{},p="";if(!c.syntax_ok)p=N(c.syntax_err,t);else if(Object.keys(u).length===0)p=_(t);else{let d=(c.deps||[]).some(s=>s.status==="missing");p=H(u,c,t,d)}D(2,`<div class="admin-pu-step2">${p}</div>`),T()}function N(t,u){let c=t&&t.line?t.line:"?",p=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${c}</span>
        </div>
        <pre class="admin-pu-syntax-body">${g(`>>> ${u.filename}
${p}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function _(t){return`
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
      </footer>`}function E(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function I(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let u=E(t),c=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${u}">${t} \xB7 ${c}</span>`}function H(t,u,c,p){let d=t.name||c.filename.replace(/\.(py|js)$/i,""),s=t.version?`v${g(t.version)}`:"\u2014",l=t.author?`@${g(t.author.replace(/^@/,""))}`:"\u2014",v=t.description||ServerI18n.t("pluginsUploadNoDescription"),e="PY",n="is-warn",a=Array.isArray(t.permissions)?t.permissions:[],i=Object.keys(h).map(R=>{let j=a.includes(R);return`
        <div class="admin-pu-perm-row ${j?"is-req":"is-not"}">
          <span class="dot">${j?"\u25CF":"\u25CB"}</span>
          <span class="key">${g(R)}</span>
          <span class="label">${g(ServerI18n.t(h[R]))}</span>
        </div>`}).join(""),f=u.deps||[],y=f.map(R=>{let j=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",q=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${j}">
          <span class="dot">${q}</span>
          <span class="name">${g(R.name)}</span>
          <span class="note">${g(R.note||"")}</span>
        </div>`}).join(""),S=u.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${g(d)}</span>`})}
      </div>`:"",L=f.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${y}</div>
      </section>`;return`
      ${S}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${g(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
          <span class="author">${l}</span>
          <span class="admin-ui-pill admin-pu-pill ${n}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${g(v)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${I(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${i}</div>
        </section>
        ${L}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${p?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${p?"disabled":""} data-pu-confirm>${p?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function T(){let t=w.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{x.file=null,x.manifest=null,x.validation=null,D(1,B()),C()});let u=w.querySelector("[data-pu-confirm]");u&&u.addEventListener("click",()=>b());let c=w.querySelector("[data-pu-no-manifest-ack]");c&&u&&c.addEventListener("change",()=>{u.disabled=!c.checked})}function b(){let t=x.manifest||{},u=t.name||(x.filename||"").replace(/\.(py|js)$/i,""),c=t.version?`v${g(t.version)}`:"\u2014",p=Array.isArray(t.permissions)?t.permissions:[],d=p.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:p.map(v=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${g(v)}</span></div>`).join("");D(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${g(u)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${c}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${d}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${g(x.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:t.priority!=null?t.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let s=w.querySelector("[data-pu-install]");s&&s.addEventListener("click",m);let l=w.querySelector("[data-pu-back]");l&&l.addEventListener("click",()=>k(x))}async function m(){D(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",x.file);let u=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),c=await u.json().catch(()=>({}));if(!u.ok){window.showToast?.(c.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:u.status}),!1),k(x);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:c.name||x.filename}),!0),o();let p=document.getElementById("pluginsReloadBtn");p&&p.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),k(x)}}function r(){F(),x={step:1,file:null,manifest:null,validation:null,filename:null},D(1,B()),C(),w.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){w&&(w.hidden=!0,document.body.classList.remove("admin-pu-open"),x=null)}window.AdminPluginUpload={open:r,close:o},document.addEventListener("click",t=>{let u=t.target.closest("#pluginsUploadBtn");u&&!u.disabled&&(t.preventDefault(),r())})})()});var jt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-webhooks",w=12e3,x=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function F(d,s){return d?d.length>s?d.slice(0,s)+"\u2026":d:""}function $(d){if(!d)return"\u2014";try{let s=new Date(d),l=Math.max(0,(Date.now()-s.getTime())/1e3);return l<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(l)}):l<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(l/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(l/86400)})}catch{return"\u2014"}}function D(d){if(!d)return"\u2014";try{return new URL(d).hostname}catch{return F(d,30)}}function B(d){return d==="active"?"is-success":d==="degraded"?"is-warn":"is-muted"}let C={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:x,eventCatalogLoaded:!1};function P(){let d=document.getElementById("settings-grid");!d||document.getElementById(h)||(d.insertAdjacentHTML("beforeend",`
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
    `),M())}function M(){let d=document.getElementById(h);if(!d)return;let s=document.getElementById("wh-register-form");s&&s.addEventListener("submit",async l=>{l.preventDefault();let v=document.getElementById("wh-url").value.trim();if(!v)return;let e=Array.from(s.querySelectorAll('input[name="wh-event"]:checked')).map(f=>f.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let n=document.getElementById("wh-format").value,a=document.getElementById("wh-secret").value.trim(),i={url:v,events:e,format:n};a&&(i.secret=a);try{let f=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),y=await f.json();f.ok&&y.hook_id?(showToast(ServerI18n.t("webhookRegistered")),s.reset(),I(),s.hidden=!0,await A()):showToast(y.error||ServerI18n.t("registrationFailed"),!1)}catch(f){console.error("Webhook register error:",f),showToast(ServerI18n.t("registrationFailed"),!1)}}),d.addEventListener("click",l=>{if(l.target.closest("[data-wh-action='show-add']")){s&&(s.hidden=!1);return}if(l.target.closest("[data-wh-action='hide-add']")){s&&(s.hidden=!0);return}let n=l.target.closest("[data-wh-log-filter]");if(n){C.deliveryFilter=n.dataset.whLogFilter,d.querySelectorAll("[data-wh-log-filter]").forEach(j=>{j.classList.toggle("is-active",j.dataset.whLogFilter===C.deliveryFilter)}),r();return}let a=l.target.closest("[data-wh-action='test']");if(a){l.stopPropagation(),u(a.dataset.whHookId);return}let i=l.target.closest("[data-wh-action='settings']");if(i){l.stopPropagation(),o(i.dataset.whHookId);return}if(l.target.closest("[data-wh-action='close-detail']")){C.selectedHookId=null,t(),b();return}let y=l.target.closest("[data-wh-action='detail-ping']");if(y){u(y.dataset.whHookId);return}let S=l.target.closest("[data-wh-action='detail-toggle']");if(S){c(S.dataset.whHookId,S.dataset.whNextEnabled==="1");return}let L=l.target.closest("[data-wh-action='detail-delete']");if(L){p(L.dataset.whHookId);return}let R=l.target.closest("[data-wh-hook-row]");if(R&&!l.target.closest("button")){o(R.dataset.whHookId);return}}),C.stopPoll||(C.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:w,tick:A}))}async function A(){await _(),await Promise.all([k(),N()]),H(),b(),r(),t()}async function k(){try{let s=await(await csrfFetch("/admin/webhooks/list")).json();C.hooks=Array.isArray(s.webhooks)?s.webhooks:[]}catch{C.hooks=[]}}async function N(){try{let d=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!d.ok)return;let s=await d.json();C.deliveries=Array.isArray(s.deliveries)?s.deliveries:[],C.stats=s.stats||null}catch{}}async function _(){if(!C.eventCatalogLoaded)try{let d=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(d.ok){let s=await d.json(),l=Array.isArray(s.events)?s.events:[];l.length&&(C.eventCatalog=l)}}catch{}finally{C.eventCatalogLoaded=!0,I()}}function E(d){let s=d&&d.slug?String(d.slug):"";if(d&&d.labelKey){let a=ServerI18n.t(d.labelKey);return{slug:s,label:a?a+" \xB7 "+s:s,title:a}}let l=d&&d.zh?String(d.zh):"",v=d&&d.en?String(d.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",n=(d&&d[e]?String(d[e]):"")||v||l;return{slug:s,label:n?n+" \xB7 "+s:s,title:l&&v?l+" \xB7 "+v:l||v}}function I(){let d=document.querySelector("[data-wh-register-events]");d&&(d.innerHTML=C.eventCatalog.map(function(s){let l=E(s);if(!l.slug)return"";let v=l.slug==="on_danmu"?" checked":"";return'<label title="'+g(l.title)+'"><input type="checkbox" name="wh-event" value="'+g(l.slug)+'"'+v+" /> "+g(l.label)+"</label>"}).join(""))}function H(){let d=document.querySelector("[data-wh-stats]");if(!d)return;let s=C.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};d.innerHTML=`
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
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:T()})}</div>
        <div class="v" style="color:${s.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${s.dropped_24h}</div>
      </div>`}function T(){return C.hooks.length&&C.hooks[0].retry_count||3}function b(){let d=document.getElementById("wh-list"),s=document.querySelector("[data-wh-count]");if(d){if(s&&(s.textContent=String(C.hooks.length)),C.hooks.length===0){d.innerHTML="";let l=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let v=document.getElementById("wh-register-form");v&&(v.hidden=!1),document.getElementById("wh-url")?.focus()}});l.dataset.emptyKind="webhooks",d.appendChild(l);return}d.innerHTML=C.hooks.map(m).join("")}}function m(d){let s=g(d.id||""),l=Number(d.success_count)||0,v=Number(d.fail_count)||0,e=l+v,n=e>0?Math.round(l/e*1e3)/10:100,a=d.enabled!==!1,i=Number(d.last_status)||null,f=a?i&&i>=400||d.last_error?"degraded":"active":"paused",y=f==="active"?"var(--hud-lime)":f==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",S=f==="active"?"ACTIVE":f==="degraded"?"DEGRADED":"PAUSED",L=C.selectedHookId===d.id?" is-selected":"",R=B(f),j=(d.events||[]).map(function(W){return'<span class="admin-ui-pill admin-wh-evt-chip">'+g(W)+"</span>"}).join(""),q=d.last_error?'<div class="admin-wh-card-warn">\u26A0 '+g(F(d.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${L}" data-wh-hook-row data-wh-hook-id="${s}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${y};box-shadow:${a?"0 0 6px "+y:"none"}"></span>
          <span class="name">${g(D(d.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${S}</span>
          <span class="last">last \xB7 ${g($(d.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${g(d.url)}</div>
        <div class="admin-wh-card-events">${j}</div>
        ${q}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${n}%;background:${y}"></div></div>
            <span class="pct" style="color:${y}">${n}%</span>
          </div>
          <span class="counter ok">\u2713 ${l.toLocaleString()}</span>
          <span class="counter ${v>0?"fail":"fail-zero"}">\u2717 ${v}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function r(){let d=document.getElementById("wh-log-list");if(!d)return;let s=C.deliveries.filter(function(l){return C.deliveryFilter==="all"?!0:C.deliveryFilter==="failed"?!l.ok:C.deliveryFilter==="2xx"?l.code&&l.code>=200&&l.code<300:C.deliveryFilter==="5xx"?l.code&&l.code>=500:!0});if(s.length===0){d.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}d.innerHTML=s.map(function(l){let v=l.ts?new Date(l.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=l.code?String(l.code):"\u2014",n=l.ok?"var(--hud-lime)":"var(--hud-crimson)",a=l.duration_ms?l.duration_ms>=1e3?(l.duration_ms/1e3).toFixed(1)+"s":l.duration_ms+"ms":"\u2014",i=l.ok?"var(--color-text-strong)":"var(--hud-amber)",f=g(D(l.hook_url||"")),y=(l.retries||0)===0?"\u2014":"\xD7"+l.retries,S=(l.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${l.dropped?" is-dropped":""}">
          <span class="time">${g(v)}</span>
          <span class="code" style="color:${n};border-color:${n}55;background:${n}15;">${e}</span>
          <span class="dur" style="color:${i}">${g(a)}</span>
          <span class="ep">${f}</span>
          <span class="evt">${g(l.event||"")}</span>
          <span class="retry" style="color:${S}">${y}</span>
        </div>`}).join("")}function o(d){C.selectedHookId=d,b(),t()}function t(){let d=document.querySelector("[data-wh-detail]");if(!d)return;let s=C.hooks.find(function(f){return f.id===C.selectedHookId});if(!s){d.hidden=!0,d.innerHTML="";return}d.hidden=!1;let l=s.enabled!==!1,v=Number(s.last_status)||null,e=l?v&&v>=400||s.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",n=new Set(s.events||[]),a=C.eventCatalog.map(function(f){let y=E(f),S=n.has(y.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(S?"is-active is-on":"")+'" title="'+g(y.title)+'"><span aria-hidden="true">'+(S?"\u2713":"\u25CB")+"</span><span>"+g(y.label)+"</span></label>"}).join(""),i={event:s.events&&s.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:s.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};d.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+g(D(s.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+a+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(s.retry_count!=null?s.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(s.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+g(JSON.stringify(i,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+g(s.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+g(s.id)+'" data-wh-next-enabled="'+(l?"0":"1")+'">'+(l?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+g(s.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function u(d){if(d)try{let s=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),l=await s.json();s.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(l.error||ServerI18n.t("testFailed"),!1),setTimeout(A,1500)}catch(s){console.error("Webhook test error:",s),showToast(ServerI18n.t("testFailed"),!1)}}async function c(d,s){if(d)try{let l=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d,enabled:s})}),v=await l.json();if(!l.ok){showToast(v.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=C.hooks.find(function(n){return n.id===d});e&&(e.enabled=v.enabled),showToast(v.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),b(),t()}catch(l){console.error("Webhook toggle error:",l),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function p(d){if(!(!d||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let l=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),v=await l.json();l.ok?(showToast(ServerI18n.t("webhookDeleted")),C.selectedHookId===d&&(C.selectedHookId=null),A()):showToast(v.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("Webhook delete error:",l),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),P()})})()});var Ut=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-sounds",w=null,x=[],F=[];async function $(){try{let r=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!r.ok)throw new Error(await r.text());let o=await r.json();x=o.sounds||[],F=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",x.length||"")}catch(r){console.error("Failed to fetch sounds:",r),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),x=[],F=[]}}async function D(){return $()}async function B(r,o){let t=new FormData;t.append("file",r),t.append("name",o);let u=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),c=await u.json();if(!u.ok)throw new Error(c.error||"Upload failed");return c}async function C(r){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),t=await o.json();if(!o.ok)throw new Error(t.error||"Delete failed");return t}async function P(r){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),t=await o.json();if(!o.ok)throw new Error(t.error||"Failed to add rule");return t}async function M(r){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r})}),t=await o.json();if(!o.ok)throw new Error(t.error||"Failed to delete rule");return t}function A(){let r=document.getElementById("soundsList");if(r){if(x.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",r.appendChild(o);return}r.innerHTML=x.map(function(u){var c=g(u.name),p=Math.round((u.volume!=null?u.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+g(u.name)+'"><div class="name" title="'+c+'">'+c+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+g(u.name)+'" min="0" max="100" step="1" value="'+p+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+g(u.name)+'" style="min-width:32px;text-align:right">'+p+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+g(u.name)+'">'+g(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+g(u.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),r.querySelectorAll(".sound-play-btn").forEach(function(u){u.addEventListener("click",function(){var c=u.dataset.name,p=x.find(function(d){return d.name===c});p&&(w&&(w.pause(),w=null),w=new Audio(p.url),w.volume=.5,w.play().catch(function(d){console.warn("Audio preview failed:",d)}))})}),r.querySelectorAll(".sound-delete-btn").forEach(function(u){u.addEventListener("click",async function(){var c=u.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await C(c),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",c),!0),await $(),A(),N()}catch(d){window.showToast(d.message,!1)}})});var t={};r.querySelectorAll(".sound-volume-slider").forEach(function(u){var c=u.dataset.name,p=r.querySelector('.sound-volume-label[data-name="'+CSS.escape(c)+'"]');u.addEventListener("input",function(){p&&(p.textContent=u.value+"%"),clearTimeout(t[c]),t[c]=setTimeout(function(){k(c,Number(u.value)/100)},300)}),u.addEventListener("change",function(){clearTimeout(t[c]),k(c,Number(u.value)/100)})})}}async function k(r,o){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(r)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),u=await t.json();if(!t.ok){window.showToast(u.error||"Volume update failed",!1);return}var c=x.find(function(p){return p.name===r});c&&(c.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(p){console.warn("[admin-sounds] volume save failed:",p),window.showToast("Network error",!1)}}function N(){let r=document.getElementById("ruleSoundName");if(!r)return;let o=r.value;if(r.innerHTML="",x.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,r.appendChild(t);return}x.forEach(t=>{let u=document.createElement("option");u.value=t.name,u.textContent=t.name,r.appendChild(u)}),o&&[...r.options].some(t=>t.value===o)&&(r.value=o)}function _(){let r=document.getElementById("rulesList");if(r){if(F.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",r.appendChild(o);return}r.innerHTML=F.map(function(t){var u=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),c=Math.round((t.volume!=null?t.volume:1)*100),p=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",c).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+g(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+g(u)+'</div><div class="admin-sounds-rule-detail">'+g(p)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+g(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),r.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await M(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await D(),_()}catch(u){window.showToast(u.message,!1)}})})}}function E(){let r=document.getElementById("soundUploadBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),u=o.files[0];if(!u){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let c=t.value.trim();if(!c){window.showToast(ServerI18n.t("enterSoundName"),!1);return}r.disabled=!0,r.textContent=ServerI18n.t("uploadingStatus");try{await B(u,c),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",c),!0),o.value="",t.value="",await $(),A(),N()}catch(p){window.showToast(p.message,!1)}finally{r.disabled=!1,r.textContent=ServerI18n.t("soundsUploadIdle")}})}function I(){let r=document.getElementById("addRuleBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),u=document.getElementById("ruleSoundName").value,c=document.getElementById("ruleVolume"),p=document.getElementById("ruleCooldown");if(o!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!u){window.showToast(ServerI18n.t("selectSound"),!1);return}let d=parseInt(c.value,10)/100,s=parseInt(p.value,10)||0,l={trigger_type:o,trigger_value:o==="all"?"":t,sound_name:u,volume:Math.max(0,Math.min(1,d)),cooldown:Math.max(0,s)};r.disabled=!0;try{await P(l),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await D(),_()}catch(v){window.showToast(v.message,!1)}finally{r.disabled=!1}})}function H(){let r=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!r||!o)return;function t(){r.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):r.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):r.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}r.addEventListener("change",t),t()}function T(){let r=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!r||!o||r.addEventListener("input",()=>{o.textContent=r.value+"%"})}function b(){return`
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
    `}async function m(){let r=document.getElementById("settings-grid");if(r){if(r.insertAdjacentHTML("beforeend",b()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([$(),D()]),A(),N(),_(),E(),I(),H(),T()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let r=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&!r&&(r=!0,m().finally(()=>{r=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&(r=!0,m().finally(()=>{r=!1}))})})()});var Kt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h=/^[a-zA-Z0-9_]{1,32}$/,w=".png,.gif,.webp",x="sec-emojis",F=[];function $(){return`
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
              <input id="emojiFileInput" type="file" accept="${w}" />
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
    `}function D(T){let b=":"+T.name+":",m=Number(T.used)||0,r=m>0?ServerI18n.t("emojisUsedCount",{n:m}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+P(T.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+P(T.url)+'" alt="'+P(b)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+g(b)+'</div><div class="admin-em-v4__tile-meta">'+g(r)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+P(b)+'" title="'+P(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+P(T.name)+'" title="'+P(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function B(T){let b=document.querySelector("[data-em-quota-label]"),m=document.querySelector("[data-em-quota-fill]");if(!b||!m)return;let r=T.length,o=100;b.textContent=ServerI18n.t("emojisQuotaUsed",{n:r,max:o}),m.style.width=Math.min(100,r/o*100)+"%"}function C(T){let b=document.querySelector("[data-em-preview-body]");if(!b)return;if(!T||T.length===0){b.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let r=T.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${g(o.name)}:</code> \u2192 <img src="${P(o.url)}" alt=":${P(o.name)}:" /></span>`);b.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:r.join(" \xB7 ")})}function P(T){return g(T)}function M(T){var b=document.getElementById("emojiGrid"),m=document.getElementById("emojiCount");b&&(!T||T.length===0?(window.AdminEmpty?(b.innerHTML="",b.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var r=document.getElementById("emojiFileInput");r&&r.click()}}))):b.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("noEmojisUploaded"))+"</div>",m&&(m.textContent="0")):(b.innerHTML=T.map(D).join(""),m&&(m.textContent=String(T.length))),B(F),C(F))}function A(){var T=document.getElementById("emojiGrid");if(T)if(window.AdminSkeletons){T.innerHTML="";for(var b=0;b<8;b++){var m=document.createElement("div");m.className="admin-em-v4__tile admin-em-v4__tile--skel";var r=document.createElement("div");r.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",r.appendChild(o),m.appendChild(r);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",m.appendChild(t),T.appendChild(m)}}else T.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadingEmojis"))+"</div>"}async function k(){try{var T=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!T.ok)throw new Error("HTTP "+T.status);var b=await T.json();F=b.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",F.length||""),N()}catch(r){console.error("[admin-emojis] fetch failed:",r);var m=document.getElementById("emojiGrid");m&&(m.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var T=document.getElementById("emojiSearchInput"),b=(T&&T.value||"").trim().toLowerCase(),m=b?F.filter(function(r){return(r.name||"").toLowerCase().includes(b)}):F;M(m)}async function _(){var T=document.getElementById("emojiNameInput"),b=document.getElementById("emojiFileInput"),m=document.getElementById("emojiUploadBtn");if(!(!T||!b||!m)){var r=T.value.trim(),o=b.files&&b.files[0];if(!r){showToast(ServerI18n.t("emojiNameRequired"),!1),T.focus();return}if(!h.test(r)){showToast(ServerI18n.t("emojiNameInvalid"),!1),T.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}m.disabled=!0,m.textContent=ServerI18n.t("uploadingStatus");try{var u=new FormData;u.append("name",r),u.append("emojifile",o);var c=await csrfFetch("/admin/emojis/upload",{method:"POST",body:u}),p=await c.json();c.ok?(showToast(p.message||ServerI18n.t("emojiUploadFallback")),T.value="",b.value="",await k()):showToast(p.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-emojis] upload error:",d),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{m.disabled=!1,m.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function E(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",T),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var m=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),r=await m.json();m.ok?(showToast(r.message||ServerI18n.t("emojiDeleteFallback")),await k()):showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function I(T){try{await navigator.clipboard.writeText(T),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}catch{var b=document.createElement("textarea");b.value=T,b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}}function H(){var T=document.getElementById("settings-grid");if(T){T.insertAdjacentHTML("beforeend",$());var b=document.getElementById("emojiUploadBtn");b&&b.addEventListener("click",_);var m=document.getElementById("emojiNameInput");m&&m.addEventListener("keydown",function(c){c.key==="Enter"&&(c.preventDefault(),_())});var r=document.getElementById("emojiSearchInput");r&&r.addEventListener("input",N);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(c){var p=c.target.closest(".emoji-copy-btn");if(p){I(p.dataset.label);return}var d=c.target.closest(".emoji-delete-btn");d&&E(d.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),u=document.getElementById("emojiFileInput");t&&u&&(["dragenter","dragover"].forEach(function(c){t.addEventListener(c,function(p){p.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(c){t.addEventListener(c,function(p){p.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(c){var p=c.dataTransfer&&c.dataTransfer.files&&c.dataTransfer.files[0];if(p){var d=new DataTransfer;d.items.add(p),u.files=d.files;var s=document.getElementById("emojiNameInput");if(s&&!s.value){var l=p.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");s.value=l.slice(0,32),s.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),A(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var T=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(x)&&H()});T.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(x)&&H()}})})()});var Wt=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml,h="sec-stickers",w=["png","gif","webp"],x=".gif,.png,.webp",F="__all__",$=[],D=[],B=F;function C(r){return g(r)}function P(){var r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=r?`
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
            ${r?`<div class="admin-ui-card">${o}</div>`:""}

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
    `}function M(r){return r===F?$.length:$.filter(function(o){return o.pack_id===r}).length}function A(){var r=document.getElementById("stickerPackList");if(r){var o='<button type="button" class="admin-stickers-pack'+(B===F?" is-active":"")+'" data-pack="'+F+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+M(F)+"</span></button>";D.forEach(function(t){var u=t.enabled?"is-success":"is-muted",c="admin-stickers-pack"+(t.id===B?" is-active":""),p=t.id==="default",d=p?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+C(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+C(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+C(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+C(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+C(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+c+'" data-pack="'+C(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+C(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+u+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+g(t.name)+'</span><span class="admin-stickers-pack-count">'+M(t.id)+"</span></button>"+d+"</div>"}),r.innerHTML=o}}function k(r){var o=":"+r.name+":";return'<div class="admin-stickers-tile"><img src="'+C(r.url)+'" alt="'+C(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+C(o)+'">'+g(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+C(o)+'" title="'+C(ServerI18n.t("copyToClipboard"))+'">'+g(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+C(r.name)+'" title="'+C(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var r=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(r){var t=document.getElementById("stickerSearchInput"),u=(t&&t.value||"").trim().toLowerCase(),c=$.filter(function(d){return!(B!==F&&d.pack_id!==B||u&&!(d.name||"").toLowerCase().includes(u))});if(c.length===0){r.innerHTML="";var p=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});p.dataset.emptyKind="stickers",p.style.gridColumn="1 / -1",r.appendChild(p),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}r.innerHTML=c.map(k).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:c.length}))}}async function _(){var r=document.getElementById("stickerGrid");if(r)try{var[o,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);$=(await o.json()).stickers||[],D=t.ok?(await t.json()).packs||[]:[],B!==F&&!D.some(function(u){return u.id===B})&&(B=F),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",D.length?ServerI18n.t("tabCountPacks",{n:D.length}):""),A(),N()}catch(u){console.error("[admin-stickers] fetch failed:",u),r.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function E(r,o){if(r==="select"){B=o,A(),N();return}if(r==="rename"){var t=D.find(function(f){return f.id===o}),u=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!u)return;try{var c=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u})}),p=await c.json();c.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await _()):window.showToast(p.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="toggle"){try{var d=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});d.ok&&await _()}catch{}return}if(r==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),l=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),B===o&&(B=F),await _()):window.showToast(l.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="up"||r==="down"){var v=D.slice().sort(function(f,y){return(f.order||0)-(y.order||0)}),e=v.findIndex(function(f){return f.id===o});if(e<0)return;var n=r==="up"?e-1:e+1;if(n<0||n>=v.length)return;var a=v[e],i=v[n];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:a.order||0})})]),await _()}catch{}}}async function I(){var r=prompt(ServerI18n.t("stickersNewPackPrompt"));if(r)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),t=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),B=t.pack&&t.pack.id?t.pack.id:B,await _()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var r=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!r||!o)){var t=r.files&&r.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var u=t.name.split(".").pop().toLowerCase();if(w.indexOf(u)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var c=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var p=new FormData;p.append("file",t),B&&B!==F&&p.append("pack_id",B);var d=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:p}),s=await d.json();d.ok?(window.showToast(s.message||ServerI18n.t("stickerUploadFallback")),r.value="",await _()):window.showToast(s.error||ServerI18n.t("uploadFailed"),!1)}catch(l){console.error("[admin-stickers] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=c}}}async function T(r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(r),{method:"DELETE"}),u=await t.json();t.ok?(window.showToast(u.message||ServerI18n.t("stickerDeleteFallback")),await _()):window.showToast(u.error||ServerI18n.t("deleteFailed"),!1)}catch(c){console.error("[admin-stickers] delete error:",c),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function b(r){try{await navigator.clipboard.writeText(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}catch{var o=document.createElement("textarea");o.value=r,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}}function m(){var r=document.getElementById("settings-grid");if(r){r.insertAdjacentHTML("beforeend",P());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",H);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",I);var u=document.getElementById("stickerSearchInput");u&&u.addEventListener("input",N);var c=document.getElementById("stickerPackList");c&&c.addEventListener("click",function(d){var s=d.target.closest("[data-pack-action]");if(!s){var l=d.target.closest("[data-pack]");l&&E("select",l.dataset.pack);return}var v=s.dataset.packAction,e=s.dataset.packId;v==="select"&&!e&&(e=s.closest("[data-pack]")&&s.closest("[data-pack]").dataset.pack),E(v,e)});var p=document.getElementById("stickerGrid");p&&p.addEventListener("click",function(d){var s=d.target.closest(".sticker-copy-btn");if(s){b(s.dataset.label);return}var l=d.target.closest(".sticker-delete-btn");l&&T(l.dataset.name)}),_()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&m()});r.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&m()}})})()});var Gt=ye(()=>{(function(){"use strict";let g="sec-extensions-overview",h=window.AdminUtils.escapeHtml,w=15e3,x=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],F={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},$=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function D(b){let m=b&&!b.stale?b.report:null;if(!m&&b&&b.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!m)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(m.state==="error"){let r=$.includes(m.error)?m.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+r)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:m.sent||0,held:m.held||0,blocked:m.blocked||0,skipped:m.late_skipped||0})}}function B(){return`
      <div id="${g}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${x.map(C).join("")}
        </div>
      </div>`}function C(b){let m=b.status==="ready",r="is-cold",o=m?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,t=m&&b.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${b.install.steps.map(c=>{if(c.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${h(ServerI18n.t(c.labelKey))} \u2193</a></li>`;let p=c.showOrigin?` <code class="admin-ext-step-code">${h(window.location.origin)}</code>`:"";return`<li>${h(ServerI18n.t(c.labelKey))}${p}</li>`}).join("")}
          </ol>
        </div>`:"",u=b.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
          <span class="admin-ext-status-dot ${r}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${b.color}">${b.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${h(b.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${h(b.version)}</span></div>
          </div>
          ${o}
        </div>
        <p class="admin-ext-desc">${h(ServerI18n.t(b.descKey))}</p>
        ${b.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${h(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${t}
        ${u}
      </article>`}async function P(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;F.fireToken=await b.json(),E()}catch{}}async function M(){try{let b=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!b.ok)return;let m=await b.json();F.sources=Array.isArray(m.sources)?m.sources:[],I()}catch{}}async function A(){try{let b=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!b.ok)return;F.slidoStatus=await b.json(),H()}catch{}}function k(){M(),A()}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let m=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!m.ok)throw new Error("HTTP "+m.status);let r=await m.json();F.fireToken={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at},F.plainToken=r.token,E(),window.AdminUtils.copyText(r.token,ServerI18n.t("extToastTokenGenerated"))}catch(m){console.warn("[ext] regen failed:",m),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function _(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let m=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!m.ok)throw new Error("HTTP "+m.status);F.fireToken=await m.json(),F.plainToken=null,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(m){console.warn("[ext] revoke failed:",m),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function E(){let b=document.querySelector("[data-fire-token-display]"),m=document.querySelector('[data-fire-token-action="copy"]'),r=document.querySelector('[data-fire-token-action="regen"]'),o=document.querySelector('[data-fire-token-action="revoke"]');if(!b)return;let t=F.fireToken;F.plainToken?(b.textContent=F.plainToken,b.classList.add("is-plain")):t&&t.has_token?(b.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:t.prefix||""}),b.classList.remove("is-plain")):(b.textContent=ServerI18n.t("extTokenNotSetHint"),b.classList.remove("is-plain")),m&&(m.disabled=!F.plainToken),r&&(r.textContent=t&&t.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),o&&(o.disabled=!(t&&t.has_token))}function I(){let b=new Set(F.sources.map(m=>m.source));document.querySelectorAll(".admin-ext-card").forEach(m=>{let r=x.find(u=>u.id===m.dataset.ext);if(!r)return;let o=m.querySelector("[data-ext-dot]");if(!o)return;let t=r.sourceMatch&&b.has(r.sourceMatch);o.classList.toggle("is-live",!!t),o.classList.toggle("is-cold",!t)})}function H(){let b=document.querySelector("[data-slido-status]");if(!b)return;let m=D(F.slidoStatus);b.textContent=m.text,b.classList.toggle("is-live",m.tone==="is-live"),b.classList.toggle("is-error",m.tone==="is-error");let r=F.slidoStatus&&F.slidoStatus.extension,o=b.closest(".admin-ext-card"),t=o&&o.querySelector("[data-ext-download-step]"),u=o&&o.querySelector("[data-ext-download]"),c=o&&o.querySelector("[data-ext-version]");r&&r.download_url&&r.version?(u&&u.setAttribute("href",r.download_url),t&&(t.hidden=!1),c&&(c.textContent="v"+r.version)):t&&(t.hidden=!0)}function T(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(g))return;b.insertAdjacentHTML("beforeend",B());let m=document.getElementById(g);m&&m.addEventListener("click",r=>{let o=r.target.closest("[data-fire-token-action]");if(!o)return;let t=o.dataset.fireTokenAction;t==="regen"?N():t==="revoke"?_():t==="copy"&&F.plainToken&&window.AdminUtils.copyText(F.plainToken,ServerI18n.t("firetokenToastCopied"))}),P(),F.stopPoll||(F.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(g)},intervalMs:w,tick:k}))}window.AdminExtensions={slidoStatusView:D},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&T()})})()});var Vt=ye(()=>{(function(){"use strict";let g="sec-firetoken-overview",h=window.AdminUtils.escapeHtml,w=15e3,x={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function F(){return`
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
    `}async function $(){await Promise.all([D(),B(),C()])}async function D(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;x.token=await b.json(),N()}catch{}}async function B(){try{let b=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!b.ok)return;let m=await b.json();x.usage24h=Array.isArray(m.usage_24h)?m.usage_24h:[],x.ips=Array.isArray(m.ips)?m.ips:[],E(),I(),_()}catch{}}async function C(){try{let b=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!b.ok)return;let m=await b.json();x.audit=Array.isArray(m.events)?m.events:[],H()}catch{}}async function P(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let m=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!m.ok)throw new Error("HTTP "+m.status);let r=await m.json();x.token={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at,created_at:r.created_at||r.rotated_at},x.plainToken=r.token,N(),window.AdminUtils.copyText(r.token,ServerI18n.t("firetokenToastGenerated")),C()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function M(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let m=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!m.ok)throw new Error("HTTP "+m.status);x.token=await m.json(),x.plainToken=null,N(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),C()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function A(b){if(!b)return"\u2014";let m=Date.now()/1e3-b;return m<60?ServerI18n.t("firetokenJustNow"):m<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(m/60)}):m<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(m/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(m/86400)})}function k(b){if(!b)return"\u2014";try{return new Date(b*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function N(){let b=x.token,m=document.querySelector("[data-ft-token-display]"),r=document.querySelector("[data-ft-status]"),o=document.querySelector('[data-ft-action="copy"]'),t=document.querySelector('[data-ft-action="regen"]'),u=document.querySelector('[data-ft-action="revoke"]'),c=document.querySelector('[data-ft-stat="created"]'),p=document.querySelector('[data-ft-stat="rotated"]'),d=document.getElementById("adminFtCurl");if(m&&(x.plainToken?(m.textContent=x.plainToken,m.classList.add("is-plain")):b&&b.has_token?(m.textContent=(b.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",m.classList.remove("is-plain")):(m.textContent=ServerI18n.t("firetokenNotSetHint"),m.classList.remove("is-plain")),r&&(b&&b.enabled&&b.has_token?(r.textContent=ServerI18n.t("firetokenStatusHealthy"),r.className="admin-ft-status is-good"):b&&b.has_token?(r.textContent=ServerI18n.t("firetokenStatusDisabled"),r.className="admin-ft-status is-warn"):(r.textContent=ServerI18n.t("firetokenStatusUnset"),r.className="admin-ft-status is-muted")),o&&(o.disabled=!x.plainToken),u&&(u.disabled=!(b&&b.has_token)),t&&(t.textContent=b&&b.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),c&&(c.textContent=b?k(b.created_at):"\u2014"),p&&(p.textContent=b?A(b.rotated_at):"\u2014"),d)){let s=x.plainToken?x.plainToken:b&&b.prefix?b.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";d.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${s}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function _(){let b=x.usage24h.map(c=>Number(c)||0),m=b.reduce((c,p)=>c+p,0),r=b.length?Math.max(...b):0,o=document.querySelector('[data-ft-stat="hits"]'),t=document.querySelector('[data-ft-stat="peak"]'),u=document.querySelector("[data-ft-peak-meta]");o&&(o.textContent=m.toLocaleString()),t&&(t.textContent=r.toLocaleString()),u&&(u.textContent=ServerI18n.t("firetokenPeakMeta",{peak:r.toLocaleString()}))}function E(){let b=document.getElementById("adminFtChart24h");if(!b)return;let m=x.usage24h.map(u=>Number(u)||0);if(!m.length){b.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let r=Math.max(...m),o=12e3,t=r>0?Math.min(100,o/Math.max(r,o)*100):100;b.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${m.map((u,c)=>{let p=r>0?Math.max(2,u/r*100):2;return`<div class="bar ${r>0&&u===r?"is-peak":""}" style="height:${p}%" title="${c.toString().padStart(2,"0")}:00 \u2014 ${u}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(u=>`<span>${String(u).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function I(){let b=document.getElementById("adminFtIps"),m=document.querySelector("[data-ft-ip-count]");if(!b)return;let r=x.ips||[];if(m&&(m.textContent=r.length?`${r.length} IP`:"\u2014"),!r.length){b.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let o=r[0]?.ip;b.innerHTML=r.map((t,u)=>{let c=u===0,p=t.source==="web"&&(t.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${c?"is-top":""}">
          <span class="ip">${h(t.ip||"?")}</span>
          ${c?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${p?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${h(t.source||"\u2014")}</span>
          <span class="cnt">${t.count||0} hits</span>
          <span class="when">${A(t.last_seen)}</span>
        </div>`}).join("")}function H(){let b=document.getElementById("adminFtAudit");if(!b)return;let m=x.audit||[];if(!m.length){b.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let r={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},o={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};b.innerHTML=m.map(t=>{let u=o[t.kind]||"is-info",c=r[t.kind]||t.kind,p=t.meta||{},d=p.prefix?` \xB7 prefix=${h(p.prefix)}`:p.enabled!=null?` \xB7 enabled=${p.enabled}`:"";return`
        <div class="admin-ft-audit-row ${u}">
          <span class="ts">${k(t.ts)}</span>
          <span class="kind">${h(c)}</span>
          <span class="detail">${d}</span>
        </div>`}).join("")}function T(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(g))return;b.insertAdjacentHTML("beforeend",F());let m=document.getElementById(g);m&&m.addEventListener("click",r=>{let o=r.target.closest("[data-ft-action]");if(!o)return;let t=o.dataset.ftAction;t==="regen"?P():t==="revoke"?M():t==="copy"&&x.plainToken&&window.AdminUtils.copyText(x.plainToken,ServerI18n.t("firetokenToastCopied"))}),x.stopPoll||(x.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(g),intervalMs:w,tick:$}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&T()})})()});var zt=ye(()=>{(function(){"use strict";let g="sec-about-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})},w="Danmu Fire",x="https://github.com/guan4tou2/danmu-desktop",F=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],$=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],D="danmu.about.lastUpdateCheck",B={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function C(){return`
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
                <div class="admin-about-version-name">${w}</div>
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
              <a class="admin-about-changelog-more" href="${x}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${F.slice(0,4).map(T=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${h(T.v)}</span>
                  ${T.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${h(T.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${T.notes.slice(0,3).map(b=>`
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
              ${$.slice(0,6).map(T=>`
                <div class="admin-about-oss-row">
                  <span class="n">${h(T.n)}</span>
                  <span class="v">${h(T.v)}</span>
                  <span class="l">${h(T.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function P(T){if(!T||T<0)return"\u2014";let b=Math.floor(T/86400),m=Math.floor(T%86400/3600),r=Math.floor(T%3600/60);return b>0?`${b}d ${m}h`:m>0?`${m}h ${r}m`:`${r}m`}function M(){let T=document.querySelector("[data-about-tag]"),b=document.querySelector("[data-about-build]"),m=document.querySelector("[data-about-uptime]"),r=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),u=document.querySelector("[data-about-ws-path]");if(T&&(T.textContent=`v${B.appVersion}`),b){let c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";b.textContent=`BUILD \xB7 ${c} \xB7 stable channel`,t&&(t.textContent=c)}if(m){let c=B.serverStartedAt?B.serverTime-B.serverStartedAt:0;m.textContent=P(c)}if(r&&(B.isLatest===!0?r.textContent=ServerI18n.t("aboutIsLatestYes"):B.isLatest===!1?r.textContent=ServerI18n.t("aboutHasNewVersion",{v:B.latestVersion||""}):r.textContent="\u2014",r.style.color=B.isLatest===!0?"var(--hud-lime)":B.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=B.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:A(B.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),u){let c=window.DANMU_CONFIG||{};u.textContent=c.wsPath||"/ws"}}function A(T){let b=Number(T)||0;if(!b)return"\u2014";let m=String(b).length>12?b:b*1e3,r=(Date.now()-m)/1e3;return r<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(r)}):r<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(r/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(r/86400)})}function k(T,b){let m=u=>String(u||"").replace(/^v/i,"").split("-")[0].split(".").map(function(c){return parseInt(c,10)||0}),r=m(T),o=m(b),t=Math.max(r.length,o.length);for(let u=0;u<t;u++){let c=r[u]||0,p=o[u]||0;if(c>p)return!0;if(c<p)return!1}return!1}async function N({silent:T}={}){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let b=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!b.ok)throw new Error("HTTP "+b.status);let r=((await b.json()).tag_name||"").replace(/^v/i,"");B.latestVersion=r,B.lastCheckedAt=Date.now(),B.isLatest=!k(r,B.appVersion);try{localStorage.setItem(D,JSON.stringify({ts:B.lastCheckedAt,latest:r,isLatest:B.isLatest}))}catch{}M(),T||window.showToast&&window.showToast(B.isLatest?ServerI18n.t("aboutToastLatest",{v:B.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:r}),!0)}catch(b){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:b.message||""}),!1)}}function _(){try{let T=localStorage.getItem(D);if(!T)return;let b=JSON.parse(T);B.latestVersion=b.latest,B.lastCheckedAt=Number(b.ts)||0,B.isLatest=!!b.isLatest}catch{}}async function E(){try{let T=await fetch("/admin/metrics",{credentials:"same-origin"});if(!T.ok)return;let b=await T.json();B.serverStartedAt=Number(b.server_started_at)||0,B.serverTime=Number(b.server_time)||Date.now()/1e3,M()}catch{}}function I(){let T=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",b=B.serverStartedAt?B.serverTime-B.serverStartedAt:0,m=(navigator.userAgent||"").slice(0,200),r=[`${w} v${B.appVersion}`,`Channel: ${T}`,`Uptime: ${P(b)}`,`User-Agent: ${m}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(g))return;T.insertAdjacentHTML("beforeend",C()),B.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",_(),M();let b=document.getElementById(g);b&&b.addEventListener("click",function(m){let r=m.target.closest("[data-about-action]");if(!r)return;let o=r.dataset.aboutAction;o==="copy"?I():o==="check-update"?N({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),E(),setInterval(E,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&H()})})()});var Jt=ye(()=>{(function(){"use strict";let g="admin-setup-wizard-root",h="danmu.setupWizard.completed",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},x=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],F=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function $(s){return s?s.label?s.label:s.labelKey?ServerI18n.t(s.labelKey):s.name||s.id||"\u2014":"\u2014"}function D(s){return s?s.descriptionKey?ServerI18n.t(s.descriptionKey):s.description||"":""}let B={open:!1,step:0,themes:F.slice(),activeTheme:F[0].name,selectedTheme:F[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function C(){B.publicUrl=window.location.origin+"/"}function P(){let s=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";s==="setup"&&!B.open?M():s!=="setup"&&B.open&&A({silent:!0})}function M(){B.open=!0,B.step=0,C(),document.body.dataset.setupWizardOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",k()),r()),t(),E(),N()}function A(s){let l=s&&s.silent;B.open=!1,document.body.dataset.setupWizardOpen="";let v=document.getElementById(g);if(v&&v.remove(),!l&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function k(){return`
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
            ${x.map(function(s,l){return`
                <div class="admin-setup-step" data-step-index="${l}">
                  <span class="bullet">${l+1}</span>
                  <span class="lbl">${w(ServerI18n.t(s.labelKey))}</span>
                </div>
                ${l<x.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function N(){let s=document.getElementById(g);if(!s)return;s.querySelectorAll(".admin-setup-step").forEach(function(f,y){f.classList.toggle("is-done",y<B.step),f.classList.toggle("is-active",y===B.step)}),s.querySelectorAll(".admin-setup-step-sep").forEach(function(f,y){f.classList.toggle("is-done",y<B.step)});let l=s.querySelector("[data-setup-meta]");l&&(l.textContent=ServerI18n.t("setupWizardStepMeta",{current:B.step+1,total:x.length}));let v=s.querySelector('[data-setup-action="prev"]');v&&(v.disabled=B.step===0);let e=s.querySelector('[data-setup-action="next"]');if(e){let f=x[B.step].id;e.textContent=ServerI18n.t("setupWizardNext")}let n=s.querySelector("[data-setup-foot]");n&&(n.hidden=x[B.step].id==="done");let a=s.querySelector("[data-setup-content]");if(!a)return;let i=x[B.step].id;i==="server"?a.innerHTML=_():i==="moderation"?a.innerHTML=I():i==="theme"?a.innerHTML=b():a.innerHTML=m(),o(i)}function _(){let s=B.readiness,l=s?Number(s.overlay_count)||0:null,v=l!==null&&l>0,n=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:B.publicUrl},{ok:v,unknown:l===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:v?ServerI18n.t("setupWizardReadyDisplayOk",{n:l}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(B.activeTheme||B.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:$(B.themes.filter(function(a){return(a.name||a.id)===(B.selectedTheme||B.activeTheme)})[0]||B.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(a){let i=a.unknown?"is-unknown":a.ok?"is-done":"is-pending",f=a.unknown?"?":a.ok?"\u2713":"!",y='<span class="admin-setup-ready-title">'+w(a.title)+'</span><span class="admin-setup-ready-value">'+w(a.value||"")+"</span>",S=a.goto?'<a class="admin-setup-ready-go" href="'+a.goto+'" data-setup-goto="'+a.goto+'">'+w(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+i+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+f+"</span>"+y+S+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${w(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${w(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${n}</div>
      </div>`}async function E(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);let l=await s.json();B.readiness={overlay_count:Number(l.overlay_count)||0,mode:l.mode||""}}catch{B.readiness=null}B.open&&x[B.step].id==="server"&&N()}function I(){let s=B.moderationRules.map(function(l){return`
        <a class="admin-setup-mod-row" href="#/${l.route}" data-setup-goto="#/${l.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${w(ServerI18n.t(l.labelKey))}</span>
            <span class="admin-setup-mod-desc">${w(ServerI18n.t(l.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${w(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${w(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${w(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${s}</div>
      </div>`}let H=["default","neon","retro","cinema"];function T(){let s={};return(B.themes||[]).forEach(function(l){s[l.name||l.id]=l}),H.map(function(l){let v=F.filter(function(n){return n.name===l})[0],e=s[l];return v?{name:l,label:e&&e.label,labelKey:v.labelKey,descriptionKey:v.descriptionKey,colors:v.colors}:e}).filter(Boolean)}function b(){let s=T();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${s.map(function(l){let v=l.name||l.id||"",e=(B.selectedTheme||B.activeTheme)===v,n=(l.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${e?" is-selected":""}" data-setup-theme="${w(v)}">
                ${e?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${n.map(function(a,i){let f=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${w(a)};font-size:${10+i*2}px;text-shadow:0 0 6px ${w(a)}66;">${f[i]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${w($(l))}</div>
                <div class="admin-setup-theme-sub">${w(D(l))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function m(){let s=(function(){for(let l=0;l<B.themes.length;l+=1){let v=B.themes[l];if((v.name||v.id)===(B.selectedTheme||B.activeTheme))return $(v)}return B.selectedTheme||B.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${w(B.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${w(s)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${w(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${w(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function r(){let s=document.getElementById(g);s&&s.addEventListener("click",function(l){if(l.target===s){A();return}let v=l.target.closest("[data-setup-action]");if(v){if(v.dataset.setupAction==="close"){A();return}if(v.dataset.setupAction==="prev"&&B.step>0){B.step-=1,N();return}v.dataset.setupAction==="next"&&c()}})}function o(s){let l=document.getElementById(g);if(l){if(s==="moderation"||s==="done"||s==="server"){if(l.querySelectorAll("[data-setup-goto]").forEach(function(v){v.addEventListener("click",function(){A();let e=v.dataset.setupGoto;e&&(window.location.hash=e)})}),s==="done"){let v=l.querySelector("[data-setup-complete-cta]");v&&v.addEventListener("click",p)}return}if(s==="theme"){l.querySelectorAll("[data-setup-theme]").forEach(function(v){v.addEventListener("click",function(){B.selectedTheme=v.dataset.setupTheme||B.selectedTheme,N()})});return}}}async function t(){try{let s=await fetch("/admin/themes",{credentials:"same-origin"});if(!s.ok)return;let l=await s.json(),v=Array.isArray(l.themes)?l.themes:[];if(!v.length)return;B.themes=v.map(function(e){return{name:e.name||e.id||"",label:e.label||e.display_name||e.name||"",description:e.description||"",colors:e.preview_colors||e.colors||e.palette||F[0].colors}}),B.activeTheme=l.active||B.themes[0]&&B.themes[0].name||B.activeTheme,B.selectedTheme||(B.selectedTheme=B.activeTheme),B.open&&x[B.step].id==="theme"&&N()}catch{}}async function u(){if(!B.selectedTheme||B.selectedTheme===B.activeTheme)return!0;try{let s=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B.selectedTheme})});if(!s.ok)throw new Error("HTTP "+s.status);return B.activeTheme=B.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function c(){if(!(x[B.step].id==="theme"&&!await u())){if(B.step<x.length-1){B.step+=1,N();return}p()}}function p(){try{localStorage.setItem(h,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),A()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}M()},close:function(){A()},isCompleted:function(){try{return!!localStorage.getItem(h)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",P),P()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var Yt=ye(()=>{(function(){"use strict";let g="sec-poll-deepdive-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},w={poll:null,refreshTimer:0};function x(){return`
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
      </div>`}function F(E){if(E.innerHTML="",!window.AdminEmpty){E.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let I=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});I.classList.add("lg:col-span-2"),I.dataset.emptyKind="poll-deepdive",E.appendChild(I)}let $=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function D(E){return E?new Date(E*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function B(E){if(!E||E.length<2)return"";let I=Math.max.apply(null,E.map(function(r){return r.n}).concat([1])),H=100,T=32,b=H/(E.length-1),m=E.map(function(r,o){let t=(o*b).toFixed(2),u=(T-r.n/I*(T-2)-1).toFixed(2);return t+","+u});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+T+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+m.join(" ")+'" /></svg>'}function C(E){let I=E.state||(E.active?"active":"ended"),H=E.question||"\u2014",T=Array.isArray(E.options)?E.options:[],b=function(v){return Number(v.votes!=null?v.votes:v.count)||0},m=T.reduce(function(v,e){return v+b(e)},0),r=I==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:D(E.ended_at)}),o=(function(){let v=Number(E.started_at)||0;if(!v)return"\u2014";let e=I==="active"?Date.now()/1e3:Number(E.ended_at)||v,n=Math.max(0,Math.floor(e-v));return Math.floor(n/60)+":"+String(n%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,u=t>0?Math.round(m/t*100)+"%":"\u2014",c=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:m,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),p=(function(){let v=Array.isArray(E.questions)?E.questions:[],e=0;for(let n of v)e+=Number(n.duplicate_attempts)||0;return v.length||(e=Number(E.duplicate_attempts)||0),e})(),d=T.map(function(v,e){let n=b(v),a=m>0?n/m*100:0,i=$[e%$.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${h(v.label||v.text||v.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${n} \xB7 ${a.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${a.toFixed(2)}%;background:${i}"></div>
          </div>
        </div>`}).join(""),s=Array.isArray(E.vote_timeline)?E.vote_timeline:[],l=s.length>=2?B(s):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${h(H)}</div>
          <div class="admin-pdd-state">${h(r)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${m}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${u}</div><div class="sub">${h(c)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${h(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${p}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${T.length?d:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${l}</div>
        </article>
      </div>`}function P(){let E=document.querySelector("[data-pdd-grid]");if(E){if(!w.poll||!w.poll.poll_id){F(E);return}E.innerHTML=C(w.poll)}}async function M(){try{let E=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!E.ok)return;let I=await E.json();w.poll=I,P()}catch{}}function A(){if(!w.poll||!Array.isArray(w.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let E=[["option_label","votes","percentage"]],I=w.poll.options.reduce(function(r,o){return r+(Number(o.votes!=null?o.votes:o.count)||0)},0);w.poll.options.forEach(function(r,o){let t=Number(r.votes!=null?r.votes:r.count)||0,u=I>0?(t/I*100).toFixed(2):"0.00";E.push([r.label||"option_"+(o+1),t,u])});let H=E.map(function(r){return r.map(window.AdminUtils.csvCell).join(",")}).join(`
`),T=new Blob([H],{type:"text/csv;charset=utf-8"}),b=URL.createObjectURL(T),m=document.createElement("a");m.href=b,m.download="poll-"+(w.poll.poll_id||"current")+".csv",document.body.appendChild(m),m.click(),document.body.removeChild(m),setTimeout(function(){URL.revokeObjectURL(b)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function k(){try{let E=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(M(),w.refreshTimer||(w.refreshTimer=setInterval(M,5e3))):w.refreshTimer&&(clearInterval(w.refreshTimer),w.refreshTimer=0)}function _(){let E=document.getElementById("settings-grid");if(!E||document.getElementById(g))return;E.insertAdjacentHTML("beforeend",x());let I=document.getElementById(g);I&&I.addEventListener("click",function(H){let T=H.target.closest("[data-pdd-action]");T&&(T.dataset.pddAction==="export-csv"?A():T.dataset.pddAction==="push"&&k())}),M(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&_()})})()});var Qt=ye(()=>{(function(){"use strict";let g="admin-message-drawer-root",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(u){return String(u).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},x={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},F=null;function $(u){let c=u.detail&&u.detail.entry;c&&(x.open||(F=document.activeElement),x.entry=c,D(),c.data&&c.data.fingerprint&&M(c.data.fingerprint),A(c))}function D(){x.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(g)||(document.body.insertAdjacentHTML("beforeend",k()),N()),_();let u=document.querySelector("#"+g+" .admin-msgd-v4__close")||document.querySelector("#"+g+" button");if(u)try{u.focus({preventScroll:!0})}catch{}}function B(){x.open=!1,document.body.dataset.messageDrawerOpen="";let u=document.getElementById(g);if(u&&u.remove(),F&&typeof F.focus=="function"&&document.contains(F))try{F.focus({preventScroll:!0})}catch{}F=null}function C(u){if(!x.open)return;if(u.key==="Escape"){B();return}let c=document.activeElement,p=c?(c.tagName||"").toLowerCase():"";if(!(c&&(c.isContentEditable||p==="input"||p==="textarea"||p==="select"))){if(u.key==="ArrowLeft"||u.key==="k"){P(-1),u.preventDefault();return}if(u.key==="ArrowRight"||u.key==="j"){P(1),u.preventDefault();return}}}function P(u){if(!x.entry)return;let c=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(c=window.AdminLiveFeed.getEntries()),!c.length)return;let p=c.findIndex(function(l){return l.id===x.entry.id});if(p<0)return;let d=p+-u;if(d<0||d>=c.length){window.showToast&&window.showToast(u<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let s=c[d];x.entry=s,x.fingerprintRecord=null,A(s),_(),s.data&&s.data.fingerprint&&M(s.data.fingerprint)}async function M(u){try{let c=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!c.ok)return;let p=await c.json(),s=(Array.isArray(p.records)?p.records:[]).find(function(l){return l.fingerprint===u});x.fingerprintRecord=s||null,_()}catch{}}function A(u){let c=u.data&&u.data.fingerprint;if(!c){x.sameFpEntries=[];return}let p=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(p=window.AdminLiveFeed.getEntries()),x.sameFpEntries=p.filter(function(d){return(d.data&&d.data.fingerprint||d.fingerprint||"")===c}).slice(0,8)}function k(){return`
      <div id="${g}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let u=document.getElementById(g);u&&u.addEventListener("click",function(c){let p=c.target.closest("[data-msgd-action]");if(!p)return;c.stopPropagation();let d=p.dataset.msgdAction;d==="close"?B():d==="ban-fp"?b():d==="ban-fp-quick"?T():d==="recall-msg"?r():d==="blacklist-kw"?o():d==="reply"?t():d==="prev"?P(-1):d==="next"&&P(1)})}function _(){let u=document.getElementById(g);if(!u)return;let c=u.querySelector("[data-msgd-body]");c&&(c.innerHTML=E())}function E(){let u=x.entry;if(!u)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let c=u.data||{},p=c.fingerprint||"\u2014",d=p==="\u2014"?"\u2014":p.slice(0,8),s=p==="\u2014"?"\u2014":p.slice(0,12),l=u.ts?I(u.ts):"\u2014",v=c.nickname||ServerI18n.t("msgDrawerAnonymous"),e=x.fingerprintRecord||{},n=Number(e.message_count)||0,a=Number(e.violation_count)||0,i=x.sameFpEntries||[],f=i.length?Math.round(i.reduce((S,L)=>S+((L.data||L).text||"").length,0)/i.length):(c.text||"").length,y=0;for(let S=0;S<p.length;S++)y=y*31+p.charCodeAt(S)&65535;return y=y%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${y})">${w((v||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${w(v)}</div>
          <div class="admin-msgd-v4__fp">fp:${w(s)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${w(l)}</span>
      </div>

      <div class="admin-msgd-v4__body">${w(c.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${f}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${a>0?"warn":"good"}">${a}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${w(c.ip||"\u2014")}<br/>
          UA \xB7 ${w(c.user_agent||c.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${p==="\u2014"?"disabled":""}>${w(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${c.message_id?"":"disabled"}>${w(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function I(u){try{let c=new Date(u),p=String(c.getHours()).padStart(2,"0"),d=String(c.getMinutes()).padStart(2,"0"),s=String(c.getSeconds()).padStart(2,"0");return p+":"+d+":"+s}catch{return"\u2014"}}function H(u){let c;if(typeof u=="number")c=u*1e3;else if(typeof u=="string")c=new Date(u).getTime();else return"\u2014";if(!c)return"\u2014";let p=(Date.now()-c)/1e3;return p<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(p)}):p<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(p/60)}):p<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(p/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(p/86400)})}async function T(u,c,p){let d=x.entry&&x.entry.data&&x.entry.data.fingerprint;if(!d)return;let s=parseInt(c||0,10)||0,l=s>0?await window.AdminModeration.banFingerprint(d,s,u):await window.AdminModeration.callBlock("fingerprint",d,u);if(!l.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:l.error||""}),!1);return}let v=p||(s>0?ServerI18n.t("msgDrawerSecondsLabel",{n:s}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:d.slice(0,8),label:v}),!0),B()}async function b(){let u=x.entry&&x.entry.data||{},c=u.fingerprint||"\u2014";if(c==="\u2014")return;let p=c.slice(0,12),d=u.nickname||ServerI18n.t("msgDrawerAnonymous"),s=0;for(let y=0;y<c.length;y++)s=s*31+c.charCodeAt(y)&65535;s=s%360;let l=document.createElement("div");l.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${s})">${w((d||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${w(d)}</div>
          <div class="fp">fp:${w(p)}</div>
          <div class="ip">IP \xB7 ${w(u.ip||"\u2014")} \xB7 ${w(u.user_agent||u.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let v=y=>{l.querySelectorAll(".admin-bancfm-dchip").forEach(S=>S.classList.remove("is-active")),y.classList.add("is-active")};if(l.addEventListener("click",y=>{let S=y.target.closest("[data-ban-duration]");S&&v(S)}),l.addEventListener("keydown",y=>{if(y.key!=="Enter"&&y.key!==" ")return;let S=y.target.closest("[data-ban-duration]");S&&(y.preventDefault(),v(S))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:l,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let n=(l.querySelector("[data-ban-reason]")||{}).value||"",a=l.querySelector(".admin-bancfm-dchip.is-active"),i=a&&parseInt(a.dataset.banDuration||"0",10)||0,f=a?a.textContent.trim():ServerI18n.t("msgDrawerPermanent");return T(n.trim(),i,f)}function m(){}async function r(){let u=x.entry,c=u&&u.data&&u.data.message_id;if(!c)return;if(!(await window.AdminModeration.recall(c)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),B()}async function o(){let u=x.entry&&x.entry.data&&x.entry.data.text;if(!u)return;await window.AdminModeration.blockKeyword(u)&&B()}async function t(){let u=document.querySelector("[data-msgd-reply]"),c=u?u.value.trim():"";if(c)try{let p=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:c})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),u&&(u.value="")}catch(p){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:p.message||""}),!1)}}window.AdminMessageDrawer={open:function(u){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:u}}))},close:B},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",$),document.addEventListener("keydown",C))})})()});var Xt=ye(()=>{(function(){"use strict";let g="danmu.notifications.read",h="danmu.notifications.archived",w=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},x={items:[],refreshTimer:0};function F(d){try{let s=localStorage.getItem(d);if(!s)return new Set;let l=JSON.parse(s);return new Set(Array.isArray(l)?l:[])}catch{return new Set}}function $(d,s){try{localStorage.setItem(d,JSON.stringify(Array.from(s)))}catch{}}function D(d){let s=F(g);s.add(d),$(g,s)}async function B(){let d=[C().catch(function(){return[]}),P().catch(function(){return[]}),M().catch(function(){return[]}),A().catch(function(){return[]})],l=(await Promise.all(d)).flat();l.sort(function(v,e){return(e.ts||0)-(v.ts||0)}),x.items=l,I(),b()&&H()}async function C(){let d=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(v,e){let n=(Number(v.ts)||0)*1e3,a="tok-"+(v.ts||e)+"-"+(v.kind||"x"),i=v.kind||"?",f="info",y=ServerI18n.t("notifTitleFireTokenEvent");if(i==="rotated")f="info",y=ServerI18n.t("notifTitleFireTokenRotated");else if(i==="revoked")f="warn",y=ServerI18n.t("notifTitleFireTokenRevoked");else if(i==="toggled"){let S=v.meta&&v.meta.enabled;f=S?"good":"warn",y=ServerI18n.t("notifTitleFireTokenToggled",{state:S?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:a,sev:f,src:"Fire Token",ts:n,title:y,desc:ServerI18n.t("notifDescEventType",{kind:i})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function P(){let d=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(v,e){let n=(Number(v.ts)||0)*1e3,a="flt-"+(v.ts||e)+"-"+(v.action||"x")+"-"+e,i=v.action||"match";return{id:a,sev:i==="drop"?"warn":"info",src:"Moderation",ts:n,title:ServerI18n.t("notifTitleFilterHit",{action:i}),desc:ServerI18n.t("notifDescFilterHit",{rule:v.rule_id||"?",text:(v.text_excerpt||"").slice(0,60)}),raw:v}})}async function M(){let d=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(v,e){let n=(Number(v.ts)||0)*1e3,a=String(v.kind||"?");return{id:"wh-"+(v.ts||e)+"-"+a+"-"+e,sev:a==="unregister"?"warn":"info",src:"Webhooks",ts:n,title:ServerI18n.t("notifTitleWebhookEvent",{kind:a}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:v.actor||"system"})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function A(){let d=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json(),l=Array.isArray(s.events)?s.events:[],v=new Set(["auth","broadcast","system","session","sessions"]);return l.filter(function(e){return v.has(String(e.source||""))}).map(function(e,n){let a=(Number(e.ts)||0)*1e3,i=String(e.kind||"?");return{id:"sys-"+(e.ts||n)+"-"+(e.source||"x")+"-"+i+"-"+n,sev:i==="login_failed"?"warn":"info",src:"System",ts:a,title:ServerI18n.t("notifTitleSystemEvent",{kind:i}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let k="admin-notif-panel",N={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function _(d){let s=N[d];return s?ServerI18n.t(s.key):d}function E(){let d=F(g),s=F(h);return x.items.filter(l=>!d.has(l.id)&&!s.has(l.id))}function I(){let d=document.querySelector("[data-notif-badge]");if(!d)return;let s=E().length;d.textContent=s>99?"99+":String(s),d.hidden=s===0}function H(){let d=document.getElementById(k);if(!d)return;let s=E().slice(0,20),l=s.length?s.map(v=>{let e=N[v.src];return'<li class="admin-notif__item" data-sev="'+w(v.sev)+'"><div class="admin-notif__text">'+w(v.title)+'</div><div class="admin-notif__meta">'+w(_(v.src))+" \xB7 "+w(T(v.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+w(e.hash)+'" data-notif-id="'+w(v.id)+'">'+w(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+w(ServerI18n.t("notifEmpty"))+"</li>";d.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+w(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+w(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+l+"</ul>"}function T(d){if(!d)return"\u2014";let s=(Date.now()-d)/1e3;return s<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(s)}):s<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(s/60)}):s<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(s/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(s/86400)})}function b(){let d=document.getElementById(k);return!!d&&!d.hidden}function m(){let d=document.getElementById(k);d&&(H(),d.hidden=!1,x.refreshTimer||(x.refreshTimer=setInterval(B,3e4)))}function r(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&m()}function o(){let d=document.getElementById(k);d&&(d.hidden=!0),x.refreshTimer&&(clearInterval(x.refreshTimer),x.refreshTimer=0)}function t(){b()?o():m()}function u(){let d=document.querySelector(".admin-dash-topbar-actions");if(!d||document.getElementById("admin-notif-bell"))return;let s=document.createElement("button");if(s.id="admin-notif-bell",s.type="button",s.className="admin-dash-search is-icon-only admin-notif-bell",s.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),s.title=ServerI18n.t("adminRouteTitle_notifications"),s.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',d.insertBefore(s,d.firstChild),!document.getElementById(k)){let l=document.createElement("div");l.id=k,l.className="admin-notif",l.setAttribute("role","dialog"),l.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),l.hidden=!0,document.body.appendChild(l)}I(),r()}function c(){document.addEventListener("click",d=>{if(d.target.closest("#admin-notif-bell")){d.preventDefault(),t();return}let s=d.target.closest("[data-notif-go]");if(s){D(s.dataset.notifId),o(),location.hash=s.dataset.notifGo,I();return}if(d.target.closest("[data-notif-readall]")){E().forEach(l=>D(l.id)),H(),I();return}b()&&!d.target.closest("#"+k)&&o()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&b()&&o()}),window.addEventListener("hashchange",r),r()}function p(){u(),B()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(u).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),c(),p()})})()});var Zt=ye(()=>{(function(){"use strict";let g="sec-audit-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},w={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},x={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function F(){return`
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
      </div>`}function $(t){if(!t)return"\u2014";try{let u=new Date(Number(t)*1e3),c=String(u.getHours()).padStart(2,"0"),p=String(u.getMinutes()).padStart(2,"0"),d=String(u.getSeconds()).padStart(2,"0");return`${c}:${p}:${d}`}catch{return"\u2014"}}function D(t){let u=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(u)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(u)?"warn":"info"}function B(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function C(t){return x.filterActor==="all"||String(t.actor||"").toLowerCase()===x.filterActor}function P(t){return x.filterSeverity==="all"||D(t)===x.filterSeverity}function M(){return x.events.filter(function(t){return C(t)&&P(t)})}function A(t){let u=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return u.target||u.keyword||u.fp||u.fingerprint||u.name||u.mode||u.session||u.hook_id||t.target||""}function k(t,u){let c=t!=null,p=u!=null;if(!c&&!p)return"";let d=c?h(JSON.stringify(t)):"",s=p?h(JSON.stringify(u)):"";return c?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${d}</span> \u2192 <span class="admin-audit-diff-a">${s}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${s}</span></span>`}function N(t){let u=t&&t.meta&&typeof t.meta=="object"?t.meta:{},c=[];t.detail&&c.push(`<span>${h(String(t.detail))}</span>`);let p=k(t.before,t.after);p&&c.push(p);let d=Object.assign({},u);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(l){delete d[l]}),Object.keys(d).length&&c.push(`<code class="admin-ui-code admin-audit-meta-extra">${h(JSON.stringify(d))}</code>`),!c.length){let l=w[t.source]&&w[t.source].label||t.source||"system";c.push(`<span>${h(String(l))}</span>`)}return c.join(" ")}function _(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function E(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let u=M();if(!u.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=u.map(function(c){let p=D(c),d=B(p),s=String(c.actor||"system"),l=A(c);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${p}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${h($(c.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${d};box-shadow:0 0 6px ${d}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${_(s)}">${h(s)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${h(String(c.action||c.kind||"\u2014"))}</span>
              ${l?`<span class="admin-ui-target admin-audit-target">\u2192 ${h(String(l))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(c)}</div>
          </div>
        </div>`}).join("")}function I(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let u=M().length,c=x.filterActor==="all"?ServerI18n.t("auditAllRoles"):x.filterActor,p=x.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):x.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:u,actor:c,sev:p})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===x.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===x.filterSeverity)})}async function T(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let u=await t.json(),c=Array.isArray(u.events)?u.events.slice():[];c.sort(function(p,d){return Number(d.ts||0)-Number(p.ts||0)}),x.events=c,H(),E(),I()}catch{}}function b(){let t=M();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let u=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),c=URL.createObjectURL(u),p=document.createElement("a");p.href=c,p.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(function(){URL.revokeObjectURL(c)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function m(){let t=document.getElementById(g);t&&t.addEventListener("click",function(u){let c=u.target.closest("[data-audit-actor-filter]");if(c){x.filterActor=c.dataset.auditActorFilter||"all",H(),E(),I();return}let p=u.target.closest("[data-audit-severity-filter]");if(p){let d=p.dataset.auditSeverityFilter||"all";x.filterSeverity=x.filterSeverity===d?"all":d,H(),E(),I();return}if(u.target.closest("[data-audit-export]")){b();return}u.target.closest("[data-audit-refresh]")&&T()})}function r(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(T(),x.refreshTimer||(x.refreshTimer=setInterval(T,3e4))):x.refreshTimer&&(clearInterval(x.refreshTimer),x.refreshTimer=0)}function o(){let t=document.getElementById("settings-grid");!t||document.getElementById(g)||(t.insertAdjacentHTML("beforeend",F()),m(),T(),r(),window.addEventListener("hashchange",r))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&o()})})()});var en=ye(()=>{(function(){"use strict";let g="sec-audience-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},w=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],x=20,F={records:[],filter:"all",shown:x,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function $(n){if(!n)return w[0];let a=0;for(let i=0;i<n.length;i++)a=a*31+n.charCodeAt(i)>>>0;return w[a%w.length]}function D(n){if(!n)return"\u2014";let a=typeof n=="number"?n*1e3:new Date(n).getTime();if(!a)return"\u2014";let i=Math.max(0,(Date.now()-a)/1e3);return i<60?Math.floor(i)+"s":i<3600?Math.floor(i/60)+"m":i<86400?Math.floor(i/3600)+"h":Math.floor(i/86400)+"d"}function B(n){return n==="blocked"||n==="high"?"is-danger":n==="mid"?"is-warn":"is-success"}function C(){return`
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
      </div>`}function P(){let n=F.search.trim().toLowerCase(),a=F.records.slice();return n&&(a=a.filter(function(i){return String(i.nickname||"").toLowerCase().indexOf(n)!==-1||String(i.hash||"").toLowerCase().indexOf(n)!==-1})),a.sort(function(i,f){return F.sort==="last_seen"?(Number(f.last_seen)||0)-(Number(i.last_seen)||0):(Number(f.msgs)||0)-(Number(i.msgs)||0)}),F.filter==="all"?a:F.filter==="flagged"?a.filter(function(i){return i.state==="flagged"||i.state==="blocked"}):F.filter==="extension"?a.filter(function(i){return i.fingerprint&&(i.fingerprint.indexOf("slido")===0||i.fingerprint.indexOf("ext_")===0)}):a}function M(){let n=document.querySelector("[data-aud-stats]");if(!n)return;let a=F.records,i=a.length,f=a.filter(function(R){return R.state==="flagged"}).length,y=a.filter(function(R){return R.state==="blocked"}).length,S=a.reduce(function(R,j){return R+(Number(j.msgs)||0)},0),L=a.filter(function(R){let j=R.last_seen;if(!j)return!1;let q=typeof j=="number"?j*1e3:new Date(j).getTime();return(Date.now()-q)/1e3<300}).length;n.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${i}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${L}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${f}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${y}</div></div>`}function A(){let n=document.querySelector("[data-aud-filters]");if(!n)return;let a=F.records.length,i=F.records.filter(function(f){return f.state==="flagged"||f.state==="blocked"}).length;n.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${F.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:a})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${F.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:i})}</button>`}let k="__anon__";function N(n){let a=(n.nickname||"").trim();return!a||a==="\u533F\u540D"}function _(n){let a=n.hash||n.fingerprint||"";return a?a.length>9?a.slice(0,4)+"\u2026"+a.slice(-4):a:"\u2014"}function E(){let n=[],a=[];return P().forEach(function(i){N(i)?a.push(i):n.push(i)}),a.length&&n.push({_anonGroup:!0,_count:a.length,fingerprint:k,msgs:a.reduce(function(i,f){return i+(Number(f.msgs)||0)},0),blocked:a.reduce(function(i,f){return i+(Number(f.blocked)||0)},0),last_seen:Math.max.apply(null,a.map(function(i){return i.last_seen||0})),state:a.some(function(i){return i.state==="blocked"})?"blocked":"active"}),n}function I(){let n=document.querySelector("[data-aud-list]"),a=document.querySelector("[data-aud-summary]");if(!n)return;let i=E(),f=Math.min(i.length,F.shown);if(a&&(a.textContent=ServerI18n.t("audienceShownOfTotal",{n:f,total:i.length})),i.length===0){n.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",n.appendChild(R);return}let y=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,S=i.slice(0,f).map(function(R){let j=R.fingerprint||"\u2014",q=R.state==="blocked",W=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),G=R._anonGroup?"?":W.slice(0,1),X=$(j);return`
        <div class="admin-aud-row${F.selectedFp===j?" is-selected":""}" data-aud-row data-aud-fp="${h(j)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${X}">${h(G)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${h(W)}</span>
            ${R._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:R._count})}</span>`:""}
            ${q&&!R._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${R._anonGroup?"\u2014":h(_(R))}</span>
          <span class="col col-msgs">${Number(R.msgs)||0}</span>
          <span class="col col-blocked">${Number(R.blocked)||0}</span>
          <span class="col col-seen">${h(D(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${h(j)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),L=i.length>f?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";n.innerHTML=y+S+L}function H(n){return n&&F.records.find(function(a){return a.fingerprint===n})||null}function T(n){if(!n)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let a=[],i=Number(n.msgs)||0,f=n.fingerprint||"";n.state==="blocked"&&a.push(ServerI18n.t("audienceRuleBlocked")),n.state==="flagged"&&a.push(ServerI18n.t("audienceRuleFlagged")),i>=25?a.push(ServerI18n.t("audienceRuleMsgOver",{n:i})):i>=15&&a.push(ServerI18n.t("audienceRuleMsgNear",{n:i}));let y=F.records.filter(function(j){return j.ip&&n.ip&&j.ip===n.ip}).length;y>=3&&a.push(ServerI18n.t("audienceRuleSameIp",{n:y})),(f.indexOf("slido")===0||f.indexOf("ext_")===0)&&a.push(ServerI18n.t("audienceRuleBridge")),(n.nickname==="\u533F\u540D"||!n.nickname)&&a.push(ServerI18n.t("audienceRuleNoNick"));let S="normal",L="var(--hud-lime)",R="NORMAL";return n.state==="blocked"?(S="blocked",L="var(--hud-crimson)",R="BLOCKED"):n.state==="flagged"||i>=25?(S="high",L="var(--hud-crimson)",R="HIGH RISK"):(i>=15||y>=3)&&(S="mid",L="var(--hud-amber)",R="MID"),{level:S,color:L,label:R,rules:a}}async function b(n){F.detailLoading=!0;try{let a=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!a.ok){F.detailMessages=[];return}let i=await a.json(),f=Array.isArray(i.records)?i.records:[],y=Date.now()-300*1e3;F.detailMessages=f.filter(function(S){return(S.fingerprint||"")!==n?!1:(S.timestamp?new Date(S.timestamp).getTime():0)>=y}).slice(0,8)}catch{F.detailMessages=[]}finally{F.detailLoading=!1}}function m(){let n=document.querySelector("[data-aud-detail]");if(!n)return;let a=F.selectedFp;if(!a){n.hidden=!0,n.innerHTML="";return}let i=H(a);if(!i){F.selectedFp=null,n.hidden=!0;return}n.hidden=!1;let f=T(i);n.dataset.riskLevel=f.level;let y=$(a),S=!i.nickname||i.nickname==="\u533F\u540D",L=S?ServerI18n.t("audienceAnonymous"):i.nickname,R=S?"?":L.slice(0,1),j="fp:"+(a||"").slice(0,8),q=f.rules.length?f.rules.map(function(G){return"<li>"+h(G)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",W="";F.detailLoading?W='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":F.detailMessages.length===0?W='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":W=F.detailMessages.map(function(G){let X=G.muted?"MASKED":G.banned?"BLOCKED":"SHOWN",le=G.muted?"var(--hud-amber)":G.banned?"var(--hud-crimson)":"var(--hud-lime)",te=G.timestamp?new Date(G.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+h(te)+'</span><span class="m">'+h(G.text||"")+'</span><span class="s" style="color:'+le+'">'+X+"</span></div>"}).join(""),n.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+B(f.level)+'">'+h(f.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+y+'">'+h(R)+'</span><div><div class="nick">'+h(L)+'</div><div class="fp">'+h(j)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+f.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:f.rules.length})+"</div><ul>"+q+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+W+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(i.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+h(a)+'" data-aud-flagged="'+(i.is_flagged?"true":"false")+'">'+(i.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+h(a)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function r(n){F.selectedFp=n,F.detailMessages=[],m(),b(n).then(m)}async function o(){try{let n=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!n.ok)return;let a=await n.json();F.records=Array.isArray(a.entries)?a.entries:[],F.serverStats=a&&a.stats||null,M(),A(),I(),F.selectedFp&&m()}catch{}}async function t(n,a,i){if(n)try{let f=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,flagged:!!a,note:i||""})});if(!f.ok)throw new Error("HTTP "+f.status);window.showToast&&window.showToast(a?ServerI18n.t("audienceToastFlagged",{fp:n.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:n.slice(0,8)}),!0),o()}catch(f){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:f.message||""}),!1)}}async function u(n,a){if(!n||n==="\u2014")return;let i=a??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:n.slice(0,8)}),"")||"");if(i!==null)try{let f=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n,reason:i})});if(!f.ok)throw new Error("HTTP "+f.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:n.slice(0,8)}),!0),o()}catch(f){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:f.message||""}),!1)}}async function c(n){if(!(!n||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let i=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:i.message||""}),!1)}}async function p(n){if(!(!n||n==="\u2014"))try{let a=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:n,action:"mask",priority:0,enabled:!0})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:n.slice(0,8)}),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:a.message||""}),!1)}}async function d(n){if(!(!n||n==="\u2014"))try{let a=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);let i=await a.json(),y=(Array.isArray(i.rules)?i.rules:[]).filter(function(L){return L&&L.type==="fingerprint"&&L.pattern===n});if(y.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let S=0;for(let L of y)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:L.rule_id||L.id})}).catch(function(){return{ok:!1}})).ok&&(S+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:S,fp:n.slice(0,8)}),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:a.message||""}),!1)}}async function s(n){if(!(!n||n==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+h(n.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let i=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:n})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:n.slice(0,8)}),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:i.message||""}),!1)}}function l(){let n=document.getElementById(g);n&&(n.addEventListener("input",function(a){let i=a.target.closest("[data-aud-search]");i&&(F.search=i.value||"",F.shown=x,I())}),n.addEventListener("change",function(a){let i=a.target.closest("[data-aud-sort]");i&&(F.sort=i.value,I())}),n.addEventListener("click",function(a){let i=a.target.closest("[data-aud-filter]");if(i){F.filter=i.dataset.audFilter,F.shown=x,A(),I();return}let f=a.target.closest("[data-aud-action='ban']");if(f){a.stopPropagation(),s(f.dataset.audFp);return}if(a.target.closest("[data-aud-action='refresh']")){o();return}if(a.target.closest("[data-aud-action='more']")){F.shown+=x,I();return}if(a.target.closest("[data-aud-action='close-detail']")){F.selectedFp=null,m();return}let R=a.target.closest("[data-aud-action='detail-ban']");if(R){s(R.dataset.audFp);return}let j=a.target.closest("[data-aud-action='detail-mask']");if(j){p(j.dataset.audFp);return}let q=a.target.closest("[data-aud-action='detail-safe']");if(q){d(q.dataset.audFp);return}let W=a.target.closest("[data-aud-action='flag']");if(W){a.stopPropagation(),t(W.dataset.audFp,W.dataset.audFlagged!=="true");return}let G=a.target.closest("[data-aud-action='kick']");if(G){a.stopPropagation(),u(G.dataset.audFp);return}let X=a.target.closest("[data-aud-action='unkick']");if(X){a.stopPropagation(),c(X.dataset.audFp);return}let le=a.target.closest("[data-aud-row]");if(!(le&&le.dataset.audFp===k)&&le&&!a.target.closest("button")){r(le.dataset.audFp);return}}))}function v(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),F.refreshTimer||(F.refreshTimer=setInterval(o,15e3))):F.refreshTimer&&(clearInterval(F.refreshTimer),F.refreshTimer=0)}function e(){let n=document.getElementById("settings-grid");!n||document.getElementById(g)||(n.insertAdjacentHTML("beforeend",C()),l(),o(),v(),window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&e()})})()});var tn=ye(()=>{(function(){"use strict";let g=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],h={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},w=2500,x=0,F=0,$=null;function D(){if($)return $;let A=document.createElement("div");return A.className="admin-konami-hud",A.setAttribute("aria-hidden","true"),A.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(A),$=A,A}function B(){if(x===0){$&&$.classList.remove("is-on");return}let A=D();A.classList.add("is-on");let k=A.querySelector(".admin-konami-hud-keys");k&&(k.innerHTML=g.map((_,E)=>`<span class="admin-konami-hud-key ${E<x?"is-filled":""}">${h[_]}</span>`).join(""));let N=A.querySelector(".admin-konami-hud-progress");if(N){let _=Math.round(x/g.length*100);N.style.width=_+"%"}}function C(A){x=0,F&&(clearTimeout(F),F=0),A||B()}function P(){F&&clearTimeout(F),F=setTimeout(()=>C(),w)}async function M(){try{let A=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!A.ok)throw new Error("HTTP "+A.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(A){console.warn("[konami] trigger failed:",A&&A.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",A=>{let k=A.target;if(k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable))return;let N=g[x];if(!(A.key===N||N==="b"&&A.key.toLowerCase()==="b"||N==="a"&&A.key.toLowerCase()==="a")){x=A.key===g[0]?1:0,B(),x>0?P():F&&(clearTimeout(F),F=0);return}if(x++,B(),x>=g.length){C(!0),M();return}P()}),window.AdminKonami={trigger:M}})()});var nn=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(p){return p==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:p==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:p==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function w(){let p=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,d=p?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${p?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${g(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${d}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${p?`
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
    `}var x=null,F=[];function $(p,d){var s=document.getElementById("adminFontEmptyStateHost");if(!s)return;if((p||[]).some(e=>e.type==="uploaded")){s.innerHTML="";return}s.innerHTML="";var v=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:d?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});v.dataset.emptyKind="fonts",s.appendChild(v)}function D(p,d){let s=p.weight||"\u2014",l=p.sizeLabel||"\u2014",v=p.foundry||(p.type==="system"?"System":p.type==="default"?"Google / Noto":"Uploaded"),e=p.format||"\u2014",n=p.status||p.type,a=`font-family: "${g(p.name)}", sans-serif;`,i=h(n),f=[];if(d){if(n!=="default"&&f.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${g(p.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),n!=="default"){let y=n==="enabled"||n==="system",S=y?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");f.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${g(p.name)}" data-enabled="${y?"true":"false"}">${S}</button>`)}p.type==="uploaded"&&(f.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${g(p.name)}" title="${g(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),f.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${g(p.name)}">${g(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${g(p.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${a}" class="truncate">${g(p.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(f.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${f.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${g(v)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${g(s)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${g(l)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${g(e)}</span><div style="text-align:right">${i}</div></div>`}let B=null,C={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function P(){if(B)return B;try{let p=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return p.ok?(B=(await p.json()).presets||{},B):{}}catch{return{}}}function M(p){return!p||!Number.isFinite(p)?"\u2014":p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/(1024*1024)).toFixed(2)+" MB"}async function A(p){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let d=await P();if(!Object.keys(d).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let s=new Set(["cjk_common","latin"]),l="",v=document.createElement("div");v.className="admin-font-subset-modal-body";let e=()=>{let i=Object.keys(d).map(y=>{let S=C[y]||{label:y,glyphs:"\u2014",estSize:"\u2014"},L=S.labelKey?ServerI18n.t(S.labelKey):S.label,R=s.has(y);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${y}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${g(L)}</span>
            <span class="admin-font-subset-chip-range">${g(d[y])}</span>
            <span class="admin-font-subset-chip-meta">${S.glyphs} glyphs \xB7 ${S.estSize}</span>
          </label>`}).join("");v.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${g(p)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${i}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${g(l)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,v.querySelectorAll("[data-subset-preset]").forEach(y=>{y.addEventListener("click",S=>{S.preventDefault();let L=y.dataset.subsetPreset;s.has(L)?s.delete(L):s.add(L),e()})});let f=v.querySelector("[data-subset-custom]");f&&f.addEventListener("input",()=>{l=f.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:v,width:540}))return;let a=[];if(s.forEach(i=>{d[i]&&a.push(d[i])}),l.trim()&&a.push(l.trim()),!a.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await k(p,a.join(","))}async function k(p,d){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:p}),!0);let s=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(p)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:d})}),l=await s.json().catch(()=>({}));if(s.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!s.ok){window.showToast?.(l.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:s.status}),!1);return}let v=l.saved_bytes||0,e=Math.round((l.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:p,before:M(l.original_size),after:M(l.new_size),pct:e}),!0),E()}catch(s){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:s.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(p){try{let d=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:p})});if(!d.ok)throw new Error("HTTP "+d.status);x=p,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:p}),!0),E()}catch(d){console.error("[admin-fonts] set default failed:",d),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function _(p,d){try{let s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(p)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!d})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast(ServerI18n.t(d?"fontsToggleOffToast":"fontsToggleOnToast",{name:p}),!0),E()}catch(s){console.error("[admin-fonts] toggle failed:",s),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function E(){var p=document.getElementById("adminFontList");if(!p)return;let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var s=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!s.ok)throw new Error("HTTP "+s.status);var l=await s.json(),v=l.fonts||[];if(F=v,window.AdminTabs?.setTabCount?.("assets","fonts",v.length||""),$(v,d),v.length===0){p.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,m(v);return}p.innerHTML=v.map(e=>D(e,d)).join(""),m(v),r()}catch(e){console.error("[admin-fonts] fetch failed:",e),p.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,$([],d)}}async function I(p){try{let d=await p.slice(0,4).arrayBuffer(),s=new Uint8Array(d);return s[0]===0&&s[1]===1&&s[2]===0&&s[3]===0?"TTF":s[0]===79&&s[1]===84&&s[2]===84&&s[3]===79?"OTF":s[0]===119&&s[1]===79&&s[2]===70&&s[3]===50?"WOFF2":s[0]===116&&s[1]===114&&s[2]===117&&s[3]===101?"TTF":s[0]===116&&s[1]===116&&s[2]===99&&s[3]===102?"TTC":null}catch{return null}}function H(p,d){let s=document.getElementById("adminFontDropStatus");if(s){if(!p){s.textContent="",s.hidden=!0,s.classList.remove("is-good","is-bad");return}s.hidden=!1,s.textContent=p,s.classList.toggle("is-good",d==="good"),s.classList.toggle("is-bad",d==="bad")}}function T(p){let d=document.getElementById("adminFontUploadError");if(!d)return;if(!p){d.hidden=!0,d.innerHTML="";return}d.hidden=!1,d.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${g(p)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let s=d.querySelector("[data-font-error-retry]");s&&s.addEventListener("click",function(){let l=document.getElementById("adminFontFileInput");l&&l.click()})}async function b(p){if(!p)return;T("");let d=p.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(d)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),T(ServerI18n.t("fontsExtNotSupportedFull"));return}if(p.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),T(ServerI18n.t("fontsFileTooLargeFull"));return}let s=await I(p);if(!s){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),T(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:s,size:(p.size/1024).toFixed(1)}),"good");try{var l=new FormData;l.append("fontfile",p);var v=await window.csrfFetch("/admin/upload_font",{method:"POST",body:l}),e=await v.json();v.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:p.name}),"good"),T(""),await E()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),H(e.error||ServerI18n.t("uploadFailed"),"bad"),T(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(n){console.error("[admin-fonts] upload error:",n),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),T(ServerI18n.t("fontsNetworkDisconnected"))}}function m(p){let d=document.getElementById("fontsTotalSize");d&&(d.textContent=ServerI18n.t("fontsTotalCount",{n:p.length}))}function r(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(p=>{p.addEventListener("click",d=>{if(d.target.closest(".admin-font-delete-btn"))return;let s=p.dataset.font,l=document.getElementById("fontsPreviewFamily"),v=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),n=document.getElementById("fontsPreviewCJK");l&&(l.textContent=s);let a=`"${s}", sans-serif`;v&&(v.style.fontFamily=a),e&&(e.style.fontFamily=a),n&&(n.style.fontFamily=a)})})}async function o(){var p=document.getElementById("adminFontFileInput");if(p){var d=p.files&&p.files[0];if(!d){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await b(d),p.value=""}}function t(){let p=document.getElementById("adminFontDrop"),d=document.getElementById("adminFontFileInput");!p||!d||(p.addEventListener("click",s=>{s.target!==d&&d.click()}),p.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),d.click())}),["dragenter","dragover"].forEach(s=>{p.addEventListener(s,l=>{l.preventDefault(),l.stopPropagation(),p.classList.add("is-drag")})}),["dragleave","drop"].forEach(s=>{p.addEventListener(s,l=>{l.preventDefault(),l.stopPropagation(),p.classList.remove("is-drag")})}),p.addEventListener("drop",async s=>{let l=s.dataTransfer&&s.dataTransfer.files;l&&l[0]&&await b(l[0])}))}async function u(p){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",p),confirmLabel:ServerI18n.t("deleteBtn")}))try{var s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(p),{method:"DELETE"}),l=await s.json();s.ok?(window.showToast(l.message||ServerI18n.t("fontDeleteFallback")),await E()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(v){console.error("[admin-fonts] delete error:",v),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function c(){var p=document.getElementById("settings-grid");if(p){p.insertAdjacentHTML("beforeend",w());var d=document.getElementById("adminFontFileInput");d&&d.addEventListener("change",o),t();var s=document.getElementById("adminFontList");s&&s.addEventListener("click",function(l){var v=l.target.closest(".admin-font-delete-btn");if(v){l.stopPropagation(),u(v.dataset.name);return}var e=l.target.closest(".admin-font-default-btn");if(e){l.stopPropagation(),N(e.dataset.name);return}var n=l.target.closest(".admin-font-toggle-btn");if(n){l.stopPropagation();let i=n.dataset.enabled==="true";_(n.dataset.name,i);return}var a=l.target.closest(".admin-font-subset-btn");a&&(l.stopPropagation(),A(a.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.FontFamily)&&(x=l.FontFamily[3]||null)}).catch(()=>{}).finally(E)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var p=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&c()});p.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&c()}})})()});var an=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;let h="sec-scheduler",w=5e3,x=null,F=null;function $(c,p,d,s){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${c}">
        <input type="text" placeholder="${C(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${C(p)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${C(d||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${s||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function D(c){var p=c==="active"?"is-success":c==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+p+'" title="'+C(c)+'"></span>'}function B(c){let p=c.state==="paused",d=c.repeat_count===void 0?"\u2014":c.repeat_count===-1?"\u221E":String(c.repeat_count),s=c.repeat_count>0&&typeof c.remaining=="number"?String(c.repeat_count-c.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${C(c.id)}">
        ${D(c.state)}
        <div>
          <div class="admin-scheduler-job-title">#${g(c.id)}</div>
          <div class="admin-scheduler-job-meta">${g(ServerI18n.t("schedulerMessages"))} ${c.messages?c.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${c.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${g(s)}</span>
        <span class="admin-scheduler-job-val">${g(d)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${p?"is-active":"is-warn"}"
            data-job-id="${C(c.id)}" data-action="${p?"resume":"pause"}">
            ${g(ServerI18n.t(p?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${C(c.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function C(c){return g(c)}function P(){let c=document.querySelectorAll("#schedulerMessages [data-msg-index]"),p=[];return c.forEach(function(d){let s=d.querySelector(".scheduler-msg-text").value.trim(),l=d.querySelector(".scheduler-msg-color").value,v=parseInt(d.querySelector(".scheduler-msg-size").value,10)||48;s&&p.push({text:s,color:l,size:v})}),p}function M(c,p,d){let s=document.getElementById("schedulerMessages");if(!s)return;let l=s.children.length;s.insertAdjacentHTML("beforeend",$(l,c||"",p||"#ffffff",d||48))}function A(c){let p=c.closest("[data-msg-index]");p&&p.remove();let d=document.getElementById("schedulerMessages");d&&d.querySelectorAll("[data-msg-index]").forEach(function(s,l){s.dataset.msgIndex=l})}async function k(){let c=P();if(c.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let p=parseInt(document.getElementById("schedulerInterval").value,10);if(!p||p<1||p>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let d=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(d)||d<-1||d>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let s=document.getElementById("schedulerCreateBtn");s&&(s.disabled=!0);try{let l=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:c,interval_sec:p,repeat_count:d})}),v=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await m()):showToast(v.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(l){console.error("Scheduler create error:",l),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{s&&(s.disabled=!1)}}function N(c){return"msg"}function _(c){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[c]||"\u25C8"}function E(c){return c.next_run_at?new Date(c.next_run_at*1e3).getHours():new Date().getHours()}function I(c){if(c.next_run_at){let p=new Date(c.next_run_at*1e3);return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")}return"--:--"}function H(c){let p=c.id||"job",d=Array.isArray(c.messages)?c.messages.length:null;return"Job #"+p+(d!=null?" \xB7 "+d+" messages":"")}function T(c){let p=document.querySelector("[data-sch-timeline]");if(!p)return;let d=[],s=new Date().getHours();for(let v=0;v<24;v++){let e=v>=Math.max(0,s-1)&&v<=Math.min(23,s+2);d.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(v).padStart(2,"0")+"</div>")}let l=(c||[]).map(function(v){let e=N(v),n=_(e),a=v.state!=="paused";return'<div class="admin-sch-timeline-row'+(a?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+g(I(v))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+n+'</span><span class="admin-sch-evt-desc">'+g(H(v))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(a?" is-on":"")+'">'+ServerI18n.t(a?"uiOn":"uiOff")+"</span></div></div>"}).join("");p.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+d.join("")+"</div></div>"+(l||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+g(ServerI18n.t("noActiveJobs"))+"</div>"))}function b(c){let p=document.querySelector("[data-sch-calendar]");if(!p)return;let d=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],s=new Date,l=(s.getDay()+6)%7,v=new Date(s);v.setDate(s.getDate()-l);let e=d.map(function(a,i){let f=new Date(v);return f.setDate(v.getDate()+i),'<div class="admin-sch-calendar-day-head'+(i===l?" is-today":"")+'">'+g(a)+'<span class="date">'+f.getDate()+"</span></div>"}).join(""),n=[0,1,2,3,4,5,6].map(function(a){return'<div class="admin-sch-calendar-cell">'+(a===l?(c||[]).slice(0,5).map(function(f){let y=N(f),S=_(y);return'<span class="admin-sch-cal-chip is-'+y+'">'+g(I(f))+" "+S+"</span>"}).join(""):"")+"</div>"}).join("");p.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+n+"</div>"}async function m(){let c=document.getElementById("schedulerJobsList"),p=document.getElementById("schedulerJobsCount");if(c)try{let d=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!d.ok){c.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",p&&(p.textContent="\u2014");return}let s=await d.json();if(!Array.isArray(s.jobs)){c.innerHTML='<div class="admin-emojis-empty">'+g(ServerI18n.t("loadJobsFailed"))+"</div>",p&&(p.textContent="\u2014");return}p&&(p.textContent=ServerI18n.t("schItemCount",{n:s.jobs.length})),T(s.jobs),b(s.jobs);let l=document.querySelector("[data-sch-meta]");if(l){let v=new Date().toISOString().slice(0,10);l.textContent=ServerI18n.t("schTodayMeta",{date:v,n:s.jobs.length})}if(s.jobs.length===0){c.innerHTML="";let v=window.AdminEmpty.render("scheduler");v.dataset.emptyKind="scheduler",c.appendChild(v);return}c.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+g(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+g(ServerI18n.t("schColInterval"))+"</span><span>"+g(ServerI18n.t("schColSent"))+"</span><span>"+g(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+s.jobs.map(B).join("")}catch(d){console.error("Scheduler fetch error:",d),c.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+g(ServerI18n.t("loadJobsError"))+"</div>"}}async function r(c,p){try{let d=await csrfFetch("/admin/scheduler/"+encodeURIComponent(p),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:c})}),s=await d.json();d.ok?(showToast(p==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await m()):showToast(s.error||ServerI18n.t("actionFailed"),!1)}catch(d){console.error("Scheduler toggle error:",d),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(c){try{let p=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:c})}),d=await p.json();p.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await m()):showToast(d.error||ServerI18n.t("cancelFailed"),!1)}catch(p){console.error("Scheduler cancel error:",p),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let c=document.getElementById("settings-grid");if(!c)return;c.insertAdjacentHTML("beforeend",`
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
    `);let p=document.querySelectorAll("[data-sch-view]");p.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.schView;p.forEach(f=>{f.classList.toggle("is-active",f===e),f.setAttribute("aria-selected",f===e?"true":"false")});let a=document.querySelector("[data-sch-timeline]"),i=document.querySelector("[data-sch-calendar]");a&&(a.hidden=n!=="timeline"),i&&(i.hidden=n!=="calendar")})}),M("","#ffffff",48);let d=document.getElementById("schedulerMessages");d&&d.addEventListener("click",function(e){let n=e.target.closest(".scheduler-remove-msg");n&&A(n)});let s=document.getElementById("schedulerAddMsg");s&&s.addEventListener("click",function(){M("","#ffffff",48)});let l=document.getElementById("schedulerCreateBtn");l&&l.addEventListener("click",k);let v=document.getElementById("schedulerJobsList");v&&v.addEventListener("click",function(e){let n=e.target.closest(".scheduler-job-toggle");if(n){r(n.dataset.jobId,n.dataset.action);return}let a=e.target.closest(".scheduler-job-cancel");a&&o(a.dataset.jobId)}),x&&(clearInterval(x),x=null),F||(F=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:w,tick:m}),window.addEventListener("beforeunload",function(){F&&(F(),F=null)}))}function u(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(h)&&!c){c=!0;try{t()}finally{c=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u()})()});var sn=ye(()=>{(function(){"use strict";let g="admin-security-v2-page";var h=window.AdminUtils.escapeHtml;let w=null,x=!1,F=!1,$=0;function D(){let e=n=>ServerI18n.t(n);return`
        <div id="${g}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}function B(e){if(!e)return 0;let n=0;e.length>=8&&n++,e.length>=12&&n++;let a=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return a>=2&&n++,a>=3&&n++,Math.min(4,n)}function C(e){let n=document.getElementById("sec2-pw-meter"),a=document.getElementById("sec2-pw-label");if(!n||!a)return;let i=B(e),f=[0,25,50,75,100],y=["","is-bad","is-warn","is-warn","is-good"],S=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];n.style.width=f[i]+"%",n.className=y[i],a.textContent=S[i]}async function P(e){e.preventDefault();let n=document.getElementById("sec2-pw-current").value,a=document.getElementById("sec2-pw-new").value,i=document.getElementById("sec2-pw-confirm").value;if(!n||!a||!i){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(a.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(a!==i){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let f=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:n,new_password:a,confirm_password:i})}),y=await f.json().catch(()=>({}));f.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),C(""),y.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(y.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(f){console.error("Password change error:",f),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function M(){let e=++$,n=document.getElementById("sec2-wsa-status");F=!0,A(!0),n.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let a=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let i=await a.json();if(e!==$)return!1;w={require_token:!!i.require_token,token:i.token||""},document.getElementById("sec2-wsa-toggle").checked=!!i.require_token,document.getElementById("sec2-wsa-token").value=i.token||"",n.textContent=i.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),n.className="admin-ui-chip admin-sec-status-chip "+(i.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,_();let f=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=f?new Date(parseInt(f,10)).toLocaleString():"\u2014",!0}catch{return e!==$||(w=null,A(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===$&&(F=!1,A(x||!w),x||_())}}function A(e){["toggle","token","save","rotate","copy","reveal"].forEach(n=>{document.getElementById("sec2-wsa-"+n).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function k(){return x||F||!w?!1:(x=!0,++$,A(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(x=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,A(F||!w),w&&!F){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(w.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(w.require_token?"is-active":""),_()}}function _(){if(x||F||!w)return;document.getElementById("sec2-wsa-disabled-warning").hidden=w.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==w.require_token||document.getElementById("sec2-wsa-token").value.trim()!==w.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function E(e){return String(e||"").split(/\n+/).map(n=>n.trim()).filter(Boolean)}function I(e){return String(e||"").split(",").map(n=>n.trim().toUpperCase()).filter(Boolean)}function H(e,n){let a=document.getElementById(e);a&&(a.textContent=n==null||n===""?"\u2014":String(n))}async function T(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||e.status);let a=n.ip_allowlist||{},i=n.cors||{},f=n.tls||{},y=!!a.enabled,S=Array.isArray(a.entries)?a.entries:[],L=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),j=document.getElementById("sec2-ip-toggle"),q=document.getElementById("sec2-ip-entries");L&&(L.classList.toggle("is-lime",y),L.classList.toggle("is-amber",!y)),R&&(R.textContent=y?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(y?"is-active":"is-warn")),j&&(j.checked=y),q&&(q.value=S.join(`
`)),H("sec2-ip-current",a.current_ip||"\u2014"),H("sec2-ip-status-line",y?ServerI18n.t("security2IpStatusEnabled",{n:S.length}):ServerI18n.t("security2IpStatusDisabled"));let W=Array.isArray(i.origins)?i.origins:["*"],G=Array.isArray(i.methods)?i.methods:[],X=document.getElementById("sec2-cors-origins"),le=document.getElementById("sec2-cors-credentials"),te=document.getElementById("sec2-cors-methods"),J=document.getElementById("sec2-cors-cred-dot");X&&(X.value=W.join(`
`)),le&&(le.checked=!!i.supports_credentials),te&&(te.value=G.join(", ")),J&&(J.classList.toggle("is-lime",!i.supports_credentials),J.classList.toggle("is-amber",!!i.supports_credentials)),H("sec2-cors-origins-line",W.join(", ")),H("sec2-cors-credentials-line",i.supports_credentials?"true":"false"),H("sec2-cors-methods-line",G.join(", "));let Z=f.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:f.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",Z)}catch(e){console.error("Security settings load error:",e);let n=document.getElementById("sec2-ip-status-chip");n&&(n.textContent=ServerI18n.t("security2LoadFailed"),n.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function b(e){let n={};if(e==="ip")n.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:E(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let a=E(document.getElementById("sec2-cors-origins")?.value||"");n.cors={origins:a.length?a:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:I(document.getElementById("sec2-cors-methods")?.value||"")}}try{let a=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),i=await a.json().catch(()=>({}));if(!a.ok){window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await T()}catch(a){console.error("Security settings save error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function m(){if(x||F||!w)return;let e=document.getElementById("sec2-wsa-toggle").checked,n=document.getElementById("sec2-wsa-token").value.trim();if(e&&!n){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(k())try{let a=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:n})}),i=await a.json().catch(()=>({}));a.ok?await M()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function r(){if(!(x||F||!w||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&k())try{let n=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),a=await n.json().catch(()=>({}));if(n.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await M()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(a.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function o(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let n=e.type==="text",a=document.getElementById("sec2-wsa-reveal");a.setAttribute("aria-pressed",String(n)),a.textContent=ServerI18n.t(n?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),a.setAttribute("aria-label",a.textContent)}async function u(e){if(e==="reset-ws"&&(x||F||!w))return;let n={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:i=>ServerI18n.t("security2ToastApiTokensRevoked",{n:i.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!n||!await window.HudConfirm?.open({icon:"\u26A0",title:n.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:n.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:n.severity||"warn",body:n.confirm,confirmLabel:n.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!k()))try{let i=await window.csrfFetch(n.url,{method:"POST"}),f=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(f.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await M())return}window.showToast&&showToast(n.ok(f),!0)}catch(i){console.error("Security danger action error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&N()}}function c(){let e=document.getElementById("sec2-session-self-line");if(e){let i=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),f=navigator.platform||navigator.userAgentData?.platform||"",y=i?i[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:y,platform:f})}let n=document.getElementById("sec2-tls-dot"),a=document.getElementById("sec2-tls-status");if(n&&a){let i=location.protocol==="https:";n.classList.add(i?"is-lime":"is-crimson"),a.textContent=i?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function p(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",P);let n=document.getElementById("sec2-pw-new");n&&n.addEventListener("input",a=>C(a.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",m),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",r),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",_),document.getElementById("sec2-wsa-token")?.addEventListener("input",_),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>b("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>b("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(a=>{a.addEventListener("click",()=>{let i=document.querySelector(`[data-sec-disclosure="${a.dataset.secDisclose}"]`);i&&(i.hidden=!i.hidden,a.setAttribute("aria-expanded",i.hidden?"false":"true"),i.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(a=>{a.dataset.secBound!=="1"&&(a.dataset.secBound="1",a.addEventListener("click",()=>u(a.dataset.secDanger)))}),c(),M(),T()}function d(){}function s(){let e=document.querySelector(".admin-dash-grid"),n=document.getElementById(g);if(!e||!n)return;let a=e.dataset.activeRoute||"live",i=e.dataset.activeLeaf||a;n.style.display=a==="system"&&i==="security"?"":"none"}function l(){let e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",D()),p(),s())}function v(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function n(){let i=document.querySelector(".admin-dash-grid");!i||e||(e=new MutationObserver(s),e.observe(i,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)?l():void 0,n(),s()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",s),document.addEventListener("admin-panel-rendered",()=>{l(),n(),s()}),n(),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var on=ye(()=>{(function(){"use strict";let g="admin-backup-v2-page";var h=window.AdminUtils.escapeHtml;function w(){let l=v=>ServerI18n.t(v);return`
      <div id="${g}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${l("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${l("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${l("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${l("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${l("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${l("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${l("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecSettingsSnap")}
              <span class="sub">${l("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${l("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${l("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${l("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${l("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${l("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecRestoreSettings")}
              <span class="sub">${l("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${l("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${l("backupApplyDisabledTitle")}">${l("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecRestoreFull")}
              <span class="sub">${l("backupFullPackRestoreNote")}</span>
              <span class="sub">${l("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${l("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${l("backupApplyDisabledTitle")}">${l("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecRestoreAssets")}
              <span class="sub">${l("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${l("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${l("backupApplyDisabledTitle")}">${l("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${l("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecClearHistory")}
              <span class="sub">${l("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${l("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${l("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${l("backupSecFactoryReset")}
              <span class="sub">${l("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${l("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function x(){try{let l=await fetch("/get_settings",{credentials:"same-origin"});if(!l.ok)throw new Error(l.status);let v=await l.json(),e=["password","token","secret","hash"],n={};Object.keys(v||{}).forEach(S=>{e.some(L=>S.toLowerCase().includes(L))||(n[S]=v[S])});let a=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:n},null,2)],{type:"application/json"}),i=URL.createObjectURL(a),f=new Date().toISOString().replace(/[:.]/g,"-"),y=document.createElement("a");y.href=i,y.download="danmu-settings-"+f+".json",document.body.appendChild(y),y.click(),y.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(l){console.error("Settings snapshot error:",l),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let F=null;function $(){F=null;let l=document.getElementById("bk2-settings-apply");l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle"))}async function D(){let l=document.getElementById("bk2-settings-upload"),v=document.getElementById("bk2-settings-diff"),e=document.getElementById("bk2-settings-apply"),n=l&&l.files&&l.files[0];if(!n){$(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let a=await n.text(),i=JSON.parse(a),f=i.settings||i;if(!f||typeof f!="object"||Array.isArray(f))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let y=await fetch("/get_settings",{credentials:"same-origin"}),S=y.ok?await y.json():{},L=[];new Set([...Object.keys(S),...Object.keys(f)]).forEach(j=>{let q=JSON.stringify(S[j]),W=JSON.stringify(f[j]);q!==W&&(q===void 0?L.push("+ "+j+": "+W):W===void 0?L.push("- "+j+": "+q):L.push("~ "+j+": "+q+" \u2192 "+W))}),v.textContent=L.length?L.join(`
`):ServerI18n.t("backupNoDiff"),v.hidden=!1,F=f,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:L.length}),!0)}catch(a){console.error("Dry-run error:",a),$(),v.textContent=ServerI18n.t("backupParseFailedDetail",{msg:a&&a.message?a.message:String(a)}),v.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function B(){let l=document.getElementById("bk2-settings-diff"),v=document.getElementById("bk2-settings-apply");if(!F){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let n=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:F})}),a=await n.json().catch(()=>({}));if(!n.ok){l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(a.details||a,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(a.applied||[]).length+" settings"),F=null,v&&(v.disabled=!0,v.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(n){l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:n&&n.message?n.message:String(n)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function C(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function P(){let l=document.getElementById("bk2-factory-confirm"),v=document.getElementById("bk2-factory-reset");!l||!v||(l.addEventListener("input",()=>{let e=l.value.trim()==="reset";v.classList.toggle("is-ready",e),v.disabled=!e}),v.addEventListener("click",M))}async function M(){let l=document.getElementById("bk2-factory-confirm"),v=document.getElementById("bk2-factory-reset");if((l?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{v&&(v.disabled=!0);let n=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),a=await n.json().catch(()=>({}));if(!n.ok||!a.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),v&&(v.disabled=!1);return}l&&(l.value=""),v&&(v.classList.remove("is-ready"),v.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),_()}catch{v&&(v.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function A(){document.getElementById("bk2-settings-download")?.addEventListener("click",x),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",D),document.getElementById("bk2-settings-apply")?.addEventListener("click",B),document.getElementById("bk2-clear-history")?.addEventListener("click",C),document.getElementById("bk2-pack-export")?.addEventListener("click",E),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",o),document.getElementById("bk2-pack-apply")?.addEventListener("click",t),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",u),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),P(),_(),I()}let k=null,N=null;async function _(){let l=document.getElementById("bk2-pack-summary");if(l)try{let v=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!v.ok){l.textContent=ServerI18n.t("backupPreviewUnavailable");return}let e=await v.json(),n=(e.total_bytes/(1024*1024)).toFixed(2);l.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:n})}catch{l.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function E(){let l=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(l?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function I(){let l=document.getElementById("bk2-assets-summary");if(l)try{let v=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!v.ok){l.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let e=await v.json(),n=(e.total_bytes/(1024*1024)).toFixed(2);l.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:n})}catch{l.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let T={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},b={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function m(l){return!l||!l.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(l.map(v=>{let e=v&&b[v.code];return"  "+v.path+" \u2014 "+(e?ServerI18n.t(e):v.reason)}))}function r(l){return(l||[]).map(v=>{let e=v&&T[v.code];return"  "+v.path+" \u2014 "+(e?ServerI18n.t(e):v.reason)})}async function o(){let v=document.getElementById("bk2-pack-upload")?.files?.[0];if(!v){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(v.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let e=new FormData;e.append("file",v);let n=document.getElementById("bk2-pack-diff"),a=document.getElementById("bk2-pack-apply");try{let i=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:e}),f=await i.json().catch(()=>({}));if(!i.ok||!f.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(f.errors||f,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),a&&(a.disabled=!0),k=null;return}if(n){n.hidden=!1;let y=[],S=f.manifest||{};y.push("manifest version: "+(S.version||"?")),y.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),f.credentials==="omitted"&&y.push(ServerI18n.t("backupCredentialsKept")),y.push(""),y.push("Will write "+(f.members?.length||0)+" files:"),(f.members||[]).forEach(L=>{y.push("  "+L.label+"/"+L.path.split("/").slice(1).join("/")+" ("+(L.size||0)+" B)")}),f.skipped?.length&&(y.push(""),y.push("Skipped "+f.skipped.length+" entries:"),y.push(...r(f.skipped))),y.push(...m(f.merged)),n.textContent=y.join(`
`)}k=v,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:f.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:i.message||""}),!1)}}async function t(){if(!k){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let v=new FormData;v.append("file",k);try{let n=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:v})).json().catch(()=>({})),a=document.getElementById("bk2-pack-diff");if(a){a.hidden=!1;let i=[];n.ok?(i.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),i.push(""),i.push("Applied "+(n.applied||0)+" files"),n.restart_required&&i.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),n.skipped?.length&&(i.push("Skipped "+n.skipped.length+" entries:"),i.push(...r(n.skipped))),i.push(...m(n.merged))):(i.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),n.restart_required&&i.push(ServerI18n.t("backupRestartRequired")),i.push(JSON.stringify(n.errors||n,null,2))),a.textContent=i.join(`
`)}if(n.ok){let i=n.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(i,{n:n.applied}),!0),k=null;let f=document.getElementById("bk2-pack-apply");f&&(f.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:e.message||""}),!1)}}async function u(){let v=document.getElementById("bk2-assets-upload")?.files?.[0];if(!v){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(v.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let e=new FormData;e.append("file",v);let n=document.getElementById("bk2-assets-diff"),a=document.getElementById("bk2-assets-apply");try{let i=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:e}),f=await i.json().catch(()=>({}));if(!i.ok||!f.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(f.errors||f,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),a&&(a.disabled=!0),N=null;return}if(n){n.hidden=!1;let y=[],S=f.manifest||{};y.push("manifest version: "+(S.version||"?")),y.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),y.push(""),y.push("Will write "+(f.members?.length||0)+" asset files:"),(f.members||[]).forEach(L=>{y.push("  "+L.path+" ("+(L.size||0)+" B)")}),f.skipped?.length&&(y.push(""),y.push("Skipped "+f.skipped.length+" entries:"),f.skipped.forEach(L=>y.push("  "+L.path+" \u2014 "+L.reason))),n.textContent=y.join(`
`)}N=v,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:f.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:i.message||""}),!1)}}async function c(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let v=new FormData;v.append("file",N);try{let n=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:v})).json().catch(()=>({})),a=document.getElementById("bk2-assets-diff");if(a){a.hidden=!1;let i=[];n.ok?(i.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),i.push(""),i.push("Applied "+(n.applied||0)+" files"),n.skipped?.length&&i.push("Skipped "+n.skipped.length+" (see above)")):(i.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),i.push(JSON.stringify(n.errors||n,null,2))),a.textContent=i.join(`
`)}if(n.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:n.applied}),!0),N=null;let i=document.getElementById("bk2-assets-apply");i&&(i.disabled=!0),I()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:e.message||""}),!1)}}function p(){let l=document.querySelector(".admin-dash-grid"),v=document.getElementById(g);if(!l||!v)return;let e=l.dataset.activeLeaf||"dashboard";v.style.display=e==="backup"?"":"none"}function d(){let l=document.getElementById("settings-grid");!l||document.getElementById(g)||(l.insertAdjacentHTML("beforeend",w()),A(),p())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&d(),p()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",()=>{d(),p()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var rn=ye(()=>{(function(){"use strict";let g="admin-broadcast-v2-page",h="/admin/broadcast/status",w="/admin/broadcast/toggle",x={mode:"live"},F=null,$=0,D=!1;async function B(){try{let d=await fetch(h,{credentials:"same-origin"});if(!d.ok)return!1;let s=await d.json();if(s&&(s.mode==="live"||s.mode==="standby"))return F=s.session||null,x=s,!0}catch{}return!1}async function C(){try{let d=await fetch("/overlay_status",{credentials:"same-origin"});d.ok&&($=(await d.json()).overlay_count||0,D=!0)}catch{}}async function P(){await Promise.all([B(),C()]),M()}function M(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:x.mode==="live",count:D?$:void 0}}))}async function A(d){try{let s=await window.csrfFetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:d})});if(!s.ok){let l=await s.json().catch(()=>({}));throw new Error(l&&l.error?l.error:`HTTP ${s.status}`)}return x=await s.json(),M(),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function k(d,s){return ServerI18n.t(d?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:s})}function N(d){return d?"broadcastBigPause":"broadcastBigResume"}async function _(d){let s=await A(d?"live":"standby");return s&&window.showToast&&window.showToast(ServerI18n.t(d?"broadcastToastResumed":"broadcastToastPaused"),!0),m(),s}async function E(){return await B(),C().then(M),_(x.mode!=="live")}async function I(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:_,toggleDisplay:E,clearScreen:I,statusText:k,toggleKey:N};function H(){let d=s=>ServerI18n.t(s);return`
      <div id="${g}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${N(!1)}">${d(N(!1))}</button>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear
                    data-i18n="broadcastClearScreenBtn">${d("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions"
                 data-i18n="broadcastManageSessionsLink">${d("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let T=0,b=0;function m(){let d=document.getElementById(g);if(!d)return;let s=x.mode==="live",l=s?"live":"standby",v=(S,L)=>{S&&S.textContent!==L&&(S.textContent=L)};d.dataset.bcState=l;let e=d.querySelector("[data-bc-statedot]");e&&(e.dataset.state=l);let n=d.querySelector("[data-bc-statelabel]");n&&(v(n,k(s,$)),n.dataset.state=l);let a=d.querySelector("[data-bc-big]");a&&(a.dataset.i18n=N(s),v(a,ServerI18n.t(a.dataset.i18n)));let i=F||{},f=!!(i.id||i.name),y=d.querySelector("[data-bc-session-ctx]");y&&(y.hidden=!f),f&&v(d.querySelector("[data-bc-session-id]"),String(i.name||i.id))}function r(){let d=document.getElementById(g);d&&(d.querySelector("[data-bc-big]")?.addEventListener("click",()=>_(x.mode!=="live")),d.querySelector("[data-bc-clear]")?.addEventListener("click",I))}function o(){T||(P().then(m),m(),T=setInterval(()=>{P().then(m)},5e3),b=setInterval(m,1e3))}function t(){T&&(clearInterval(T),T=0),b&&(clearInterval(b),b=0)}function u(){let d=document.querySelector(".admin-dash-grid"),s=document.getElementById(g);if(!d||!s)return;let l=d.dataset.activeLeaf||"dashboard",v=l==="overlay"||l==="broadcast";s.style.display=v?"":"none",v?o():t()}function c(){let d=document.getElementById("settings-grid");!d||document.getElementById(g)||(d.insertAdjacentHTML("afterbegin",H()),r(),u())}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(g)&&c(),u()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",u),document.addEventListener("admin-panel-rendered",()=>{c(),u()}),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var dn=ye(()=>{(function(){"use strict";var g=window.AdminUtils.escapeHtml;function h(U,Q){return window.ServerI18n?window.ServerI18n.t(U,Q):U}let w=["keyword","regex","rate_limit","fingerprint"],x={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},F=["block","replace","allow","review"],$={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},D={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},B={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},C=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function P(U){switch(U.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:U.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:U.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:U.action||"block"}}}function M(U,Q){return U==="keyword"?Q==="block"?"word":"keyword":U==="regex"?Q==="replace"?"replace":"regex":U}function A(U){return U==="permanent"||U==="session"?{lifetime:U}:U==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(U,10)}}function k(U){let Q=new Date(U*1e3),ee=ke=>String(ke).padStart(2,"0"),re=`${ee(Q.getHours())}:${ee(Q.getMinutes())}`,he=new Date;return Q.toDateString()===he.toDateString()?re:`${Q.getMonth()+1}/${Q.getDate()} ${re}`}function N(U){return U.lifetime==="session"?h("blkLifeSession"):U.lifetime==="timed"&&U.expires_at?h("blkLifeUntil",{time:k(U.expires_at)}):h("msgDrawerPermanent")}function _(U){return U.type==="rate_limit"?h("blkRateSummary",{n:U.max_count||5,s:U.window_sec||60}):U.type==="replace"?`${U.pattern}  \u2192  ${U.replacement||""}`:U.pattern}let E=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function I(U,Q){return Q.find(ee=>ee.type==="regex"&&ee.pattern===U.pattern&&ee.action===U.action)}let H=[],T="all",b=null,m=!1,r=new Set,o=0,t=0,u=!0;function c(U,Q,ee){return U.map(re=>`<option value="${g(re)}"${re===ee?" selected":""}>${g(Q(re))}</option>`).join("")}function p(){return`
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
              ${c(w,U=>h(x[U]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${g(h("blkActionLabel"))}">
              ${c(F,U=>h($[U]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${g(h("blkLifetimeLabel"))}">
              ${C.map(U=>`<option value="${U.value}">${g(h(U.key))}</option>`).join("")}
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
          ${E.map(U=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${U.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${g(h(U.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(w).map(U=>`
              <button type="button" class="seg-item${U==="all"?" is-active":""}" data-scope="${U}">
                ${g(h(U==="all"?"fltChipAll":x[U]))}
                <span class="admin-block-scope-count" data-scope-count="${U}">0</span>
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
      </div>`}function d(U){let Q=P(U),ee=g(U.id);return`
      <div class="hud-rule-row admin-block-row${U.enabled?"":" is-off"}" data-rule-id="${ee}" data-rule-type="${g(U.type)}"
        style="${U.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${g(_(U))}</span>
        <span class="admin-block-row__meta">
          <span>${g(h(x[Q.match]))}</span>
          <span class="admin-block-row__action" data-action="${g(Q.action)}">${g(h($[Q.action]||"fltActBlock"))}</span>
          <span>${g(N(U))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${g(U.enabled?h("enabled"):h("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ee}" ${U.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${U.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ee}">${g(h("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ee}" title="${g(h("deleteRule"))}" aria-label="${g(h("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function s(){let U=document.getElementById("blockRuleList");if(!U)return;let Q={all:H.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};H.forEach(ke=>{Q[P(ke).match]+=1}),Object.keys(Q).forEach(ke=>{let $e=document.querySelector(`[data-scope-count="${ke}"]`);$e&&($e.textContent=String(Q[ke]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",H.length||"");let ee=H.filter(ke=>ke.lifetime==="session").length,re=document.getElementById("blockRuleClearSession");re&&(re.hidden=ee===0);let he=T==="all"?H:H.filter(ke=>P(ke).match===T);U.innerHTML=he.map(d).join(""),l(he.length===0),v()}function l(U){let Q=document.querySelector("[data-block-list-group]"),ee=document.querySelector("[data-block-empty]");if(!(!Q||!ee)&&(Q.hidden=U,ee.hidden=!U,ee.innerHTML="",!!U))if(window.AdminEmpty){let re=window.AdminEmpty.renderCustom({icon:"\u2298",title:h("blkEmpty"),accent:"var(--color-ink-error)"});re.dataset.emptyKind="filters",ee.appendChild(re)}else ee.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${g(h("blkEmpty"))}</div>`}function v(){E.forEach(U=>{let Q=document.querySelector(`[data-flt-quick-id="${U.id}"]`);if(!Q)return;let ee=I(U,H),re=!!ee&&ee.enabled!==!1;Q.classList.toggle("is-active",re),Q.setAttribute("aria-pressed",re?"true":"false")})}let e=0;async function n(){let U=++e;try{let Q=await window.csrfFetch("/admin/filters/list");if(!Q.ok)throw new Error("HTTP "+Q.status);let ee=await Q.json();if(U!==e)return;H=Array.isArray(ee.rules)?ee.rules:[],u=ee.session_live!==!1}catch(Q){if(U!==e)return;console.error("Failed to fetch block rules:",Q),window.showToast(h("fetchFiltersFailed"),!1)}s(),a()}function a(){let U=i("blockRuleLifetime");if(!U)return;let Q=U.querySelector('option[value="session"]'),ee=u||!!(b&&b.lifetime==="session");Q&&(Q.hidden=!ee,Q.disabled=!ee),!ee&&U.value==="session"&&(U.value="permanent")}function i(U){return document.getElementById(U)}function f(){let U=i("blockRuleMatch").value,Q=i("blockRuleAction"),ee=D[U];Array.from(Q.options).forEach(re=>{re.disabled=ee.indexOf(re.value)===-1}),ee.indexOf(Q.value)===-1&&(Q.value=ee[0]),Q.disabled=ee.length===1,i("blockRuleInput").placeholder=h(B[U]),i("blockRuleReplacement").hidden=Q.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(re=>{re.hidden=U!=="rate_limit"})}function y(){let U=i("blockRuleMatch").value,Q=i("blockRuleAction").value,ee=i("blockRuleInput").value||"",re={type:M(U,Q),pattern:U==="regex"?ee:ee.trim(),action:Q,priority:parseInt(i("blockRulePriority").value,10)||0};return b&&b.type===re.type&&(re.type==="fingerprint"||re.type==="rate_limit")&&(re.action=b.action||Q),re.type==="replace"&&(re.replacement=i("blockRuleReplacement").value||""),re.type==="rate_limit"&&(re.max_count=parseInt(i("blockRuleMaxCount").value,10)||5,re.window_sec=parseFloat(i("blockRuleWindowSec").value)||60),Object.assign(re,A(i("blockRuleLifetime").value))}function S(U,Q){let ee=U&&U.code;return h(ee==="duplicate"?"blkErrDuplicate":ee==="invalid_regex"?"blkErrRegex":ee==="unsafe_regex"?"blkErrUnsafe":ee==="regex_timeout"?"blkErrTimeout":ee==="no_session"?"blkErrNoSession":ee==="save_failed"?"blkErrNotSaved":ee==="conflict"?"blkErrConflict":ee==="regex_busy"?"blkErrBusy":Q)}function L(){o+=1,b=null,i("blockRuleInput").value="",i("blockRuleReplacement").value="",i("blockRuleMatch").value="keyword",i("blockRuleAction").value="block";let U=i("blockRuleLifetime"),Q=U.querySelector('option[value="keep"]');Q&&Q.remove(),U.value="permanent",i("blockRulePriority").value="0",i("blockRuleSubmit").textContent=h("modAddWordBtn"),i("blockRuleCancel").hidden=!0,f(),a()}function R(U){o+=1,b=U;let Q=P(U);i("blockRuleMatch").value=Q.match,f(),i("blockRuleAction").value=Q.action,i("blockRuleInput").value=U.pattern||"",i("blockRuleReplacement").value=U.replacement||"",i("blockRuleMaxCount").value=String(U.max_count||5),i("blockRuleWindowSec").value=String(U.window_sec||60),i("blockRulePriority").value=String(U.priority||0);let ee=i("blockRuleLifetime"),re=ee.querySelector('option[value="keep"]');if(re&&re.remove(),U.lifetime==="timed"&&U.expires_at){let he=document.createElement("option");he.value="keep",he.textContent=N(U),ee.insertBefore(he,ee.firstChild),ee.value="keep"}else ee.value=U.lifetime==="session"?"session":"permanent";f(),a(),i("blockRuleSubmit").textContent=h("blkSave"),i("blockRuleCancel").hidden=!1,i("blockRuleInput").focus()}async function j(){if(m)return;let U=y();if(!U.pattern&&U.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),i("blockRuleInput").focus();return}let Q=b,ee=o,re=()=>ee===o,he=Q?"/admin/filters/update":"/admin/filters/add",ke=Q?{rule_id:Q.id,updates:U}:U,$e=i("blockRuleSubmit"),pe=++t;m=!0,Q&&r.add(Q.id),$e&&($e.disabled=!0);try{let Le=await window.csrfFetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)}),Ie=await Le.json().catch(()=>({}));if(Q&&Le.status===404){re()&&L(),await n(),window.showToast(h("blkErrGone"),!1);return}if(!Le.ok){window.showToast(S(Ie,Q?"updateRuleFailed":"addRuleFailed"),!1);return}re()&&L(),await n(),Q?window.showToast(h("blkUpdated"),!0):window.AdminQuickAction&&Ie.rule_id?window.AdminQuickAction.fire({label:h("blkAdded",{pattern:U.pattern||_(U)}),undo:{label:h("histUndo"),run:async()=>{if(!await q(Ie.rule_id))throw new Error("remove failed")}}}):window.showToast(h("ruleAdded"),!0)}catch(Le){console.error("Save block rule error:",Le),window.showToast(h(Q?"updateRuleFailed":"addRuleFailed"),!1)}finally{Q&&r.delete(Q.id),pe===t&&(m=!1),$e&&($e.disabled=!1)}}async function q(U){let Q=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:U})});return Q.ok&&await n(),Q.ok}async function W(U){let Q=H.find(re=>re.id===U);if(await window.HudConfirm?.open({icon:"\u2298",title:h("filtersDeleteTitle"),severity:"danger",bodyText:Q?_(Q):"",confirmLabel:h("filtersDeleteConfirm")}))try{await q(U)?(b&&b.id===U&&L(),window.showToast(h("ruleDeleted"),!0)):window.showToast(h("deleteRuleFailed"),!1)}catch(re){console.error("Delete block rule error:",re),window.showToast(h("deleteRuleFailed"),!1)}}let G={};async function X(U,Q){try{let ee=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:U,updates:{enabled:Q}})}),re=await ee.json().catch(()=>({}));if(!ee.ok)return window.showToast(S(re,"updateRuleFailed"),!1),!1;let he=H.find(ke=>ke.id===U);return he&&(he.enabled=Q),v(),!0}catch(ee){return console.error("Toggle block rule error:",ee),window.showToast(h("updateRuleFailed"),!1),!1}}function le(U,Q){let ee=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ke=>ke.dataset.ruleId===U);if(!ee)return;let re=ee.querySelector(".filter-toggle-cb");re&&(re.checked=Q);let he=ee.querySelector(".admin-filter-toggle-dot");he&&(he.classList.toggle("is-on",Q),he.classList.toggle("is-off",!Q)),ee.classList.toggle("is-off",!Q),ee.style.opacity=Q?"":"0.45"}async function te(U,Q){let ee=G[U]||(G[U]={want:Q,busy:!1});if(ee.want=Q,ee.busy)return null;ee.busy=!0;try{let re;do if(re=ee.want,!await X(U,re))return await n(),!1;while(ee.want!==re);return le(U,re),!0}finally{delete G[U]}}async function J(){let U=H.filter(ee=>ee.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:h("blkClearSessionTitle"),severity:"danger",bodyText:h("blkClearSessionBody",{n:U}),confirmLabel:h("blkClearSession")}))try{let ee=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),re=await ee.json().catch(()=>({}));if(!ee.ok)throw new Error("HTTP "+ee.status);window.showToast(h("blkClearedSession",{n:re.removed||0}),!0),await n()}catch(ee){console.error("Clear session rules error:",ee),window.showToast(h("deleteRuleFailed"),!1)}}async function Z(U){let Q=E.find(he=>he.id===U);if(!Q)return;let ee=h(Q.key),re=I(Q,H);if(re&&re.enabled===!1){await te(re.id,!0)&&(window.showToast(h("filtersToastEnabled",{label:ee}),!0),await n());return}if(re){let he=await q(re.id).catch(()=>!1);window.showToast(he?h("filtersToastDisabled",{label:ee}):h("filtersToastDisableFailed"),he);return}try{let he=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:Q.pattern,action:Q.action,priority:50,lifetime:u?"session":"permanent"})});if(!he.ok){let ke=await he.json().catch(()=>({}));window.showToast(h("filtersToastEnableFailed",{msg:S(ke,"addRuleFailed")}),!1);return}window.showToast(h("filtersToastEnabled",{label:ee}),!0),await n()}catch{window.showToast(h("filtersToastEnableFailed",{msg:""}),!1)}}async function K(){let U=i("filterTestText"),Q=i("filterTestResult"),ee=(U.value||"").trim();if(!ee){window.showToast(h("sampleTextRequired"),!1),U.focus();return}let re=y();if(!re.pattern&&re.type!=="rate_limit"){window.showToast(h("patternRequired"),!1),i("blockRuleInput").focus();return}Q.textContent=h("testing");try{let he=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:re,text:ee})}),ke=await he.json().catch(()=>({}));if(!he.ok){Q.textContent=S(ke,"testError");return}let $e={block:h("blocked"),replace:h("replaced"),allow:h("allowed"),review:h("fltActReview")}[ke.action]||h("noMatch");Q.dataset.verdict=ke.action||"pass",Q.textContent=ke.action==="replace"?`${$e} \u2192 ${ke.text||""}`:$e}catch(he){console.error("Test block rule error:",he),Q.textContent=h("testError")}}let Y=6,ne=[],oe=0,de=null;function ue(U){let Q=new Date(U*1e3),ee=re=>String(re).padStart(2,"0");return`${ee(Q.getHours())}:${ee(Q.getMinutes())}:${ee(Q.getSeconds())}`}let me={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function Te(){let U=i("filterLiveLog");if(U){if(ne.length===0){U.innerHTML=`<div class="admin-block-empty">${g(h("fltNoEvents"))}</div>`;return}U.innerHTML=ne.map(Q=>{let ee=String(Q.action||"").toUpperCase(),re=me[ee]?h(me[ee]):ee,he=String(Q.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${g(ee)}">
        <span class="admin-filter-log-row__time">${g(ue(Q.ts))}</span>
        <span class="admin-filter-log-row__action">${g(re)}</span>
        <span class="admin-filter-log-row__text">\u300C${g(Q.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${g(h("blkLogRule",{pattern:Q.pattern||""}))}${he?" \xB7 "+g(he):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let U=await fetch(`/admin/filters/events?since=${oe}`,{credentials:"same-origin"});if(!U.ok)return;let Q=await U.json();if(!Array.isArray(Q.events)||Q.events.length===0)return;for(ne.unshift(...Q.events);ne.length>Y;)ne.pop();oe=Q.latest_seq||oe,Te()}catch{}}function Ae(U){i("blockRuleMatch").addEventListener("change",f),i("blockRuleAction").addEventListener("change",f),i("blockRuleSubmit").addEventListener("click",j),i("blockRuleCancel").addEventListener("click",L),i("blockRuleInput").addEventListener("keydown",re=>{re.key==="Enter"&&!re.isComposing&&(re.preventDefault(),j())}),i("filterTestBtn").addEventListener("click",K),i("filterTestText").addEventListener("keydown",re=>{re.key==="Enter"&&!re.isComposing&&(re.preventDefault(),K())}),i("blockRuleClearSession").addEventListener("click",J),U.querySelector("[data-flt-quick]").addEventListener("click",re=>{let he=re.target.closest("[data-flt-quick-id]");he&&Z(he.dataset.fltQuickId)});let Q=i("blockRuleScope");Q.addEventListener("click",re=>{let he=re.target.closest("[data-scope]");he&&(T=he.dataset.scope,Q.querySelectorAll("[data-scope]").forEach(ke=>ke.classList.toggle("is-active",ke===he)),s())});let ee=i("blockRuleList");ee.addEventListener("change",re=>{let he=re.target.closest(".filter-toggle-cb");if(!he)return;te(he.dataset.ruleId,he.checked);let ke=he.closest(".admin-block-row"),$e=ke?.querySelector(".admin-filter-toggle-dot");$e&&($e.classList.toggle("is-on",he.checked),$e.classList.toggle("is-off",!he.checked)),ke&&(ke.style.opacity=he.checked?"":"0.45")}),ee.addEventListener("click",re=>{let he=re.target.closest(".filter-delete-btn");if(he)return W(he.dataset.ruleId);let ke=re.target.closest(".block-rule-edit");if(ke){let $e=H.find(pe=>pe.id===ke.dataset.ruleId);$e&&!r.has($e.id)&&R($e)}}),de&&de(),de=window.AdminUtils.pollWhileVisible({el:()=>i("filterLiveLog"),intervalMs:4e3,tick:Ee})}function se(){let U=document.getElementById("settings-grid");if(!U)return;b=null,T="all",m=!1,t+=1,o+=1,U.insertAdjacentHTML("beforeend",p());let Q=document.getElementById("sec-blacklist");Ae(Q),f(),Te(),n()}let ie=!1;document.addEventListener("admin-route-applied",U=>{let Q=!!(U.detail&&U.detail.route==="moderation"&&U.detail.leaf==="blacklist");Q&&!ie&&document.getElementById("blockRuleList")&&n(),ie=Q});function ce(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let U=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{U()&&se()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()&&se()}window.AdminBlockRules={viewOf:P,typeFor:M,lifetimePayload:A,ACTIONS_FOR_MATCH:D,QUICK:E,refresh:n},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce()})()});var ln=ye(()=>{(function(){"use strict";var g=window.AdminUtils.loadDetailsState,h=window.AdminUtils.saveDetailsState,w=window.AdminUtils.escapeHtml,x=1e4,F=null;function $(E){var I=g();return I[E]!==void 0?I[E]:!1}function D(){return`
      <div id="sec-fingerprints" class="admin-fp-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${w(ServerI18n.t("fingerprintsTitle"))}</h2>
          <p class="admin-ui-page-note">${w(ServerI18n.t("fingerprintsDesc"))}</p>
        </div>

        <div class="admin-fp-toolbar">
          <span id="adminFingerprintCount" class="admin-fp-count">\u2014</span>
          <span style="flex:1"></span>
          <button id="adminFingerprintRefreshBtn" class="admin-ui-action admin-fp-toolbar-action" type="button">${w(ServerI18n.t("refreshBtn"))}</button>
          <button id="adminFingerprintResetBtn" class="admin-ui-action is-danger admin-fp-toolbar-action" type="button">${w(ServerI18n.t("fingerprintResetBtn"))}</button>
        </div>

        <div class="admin-fp-card" id="adminFingerprintTableWrap">
          <div class="admin-fp-loading">${w(ServerI18n.t("loadingFingerprints"))}</div>
        </div>
      </div>
    `}function B(E){var I=ServerI18n.t("fingerprintState_"+E),H="";return E==="blocked"?H=" is-crimson":E==="flagged"?H=" is-amber":E==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+w(I)+"</span>"}function C(E){if(!E)return"\u2014";try{var I=new Date(E*1e3);return I.toLocaleTimeString()}catch{return String(E)}}function P(E){var I=document.getElementById("adminFingerprintTableWrap");if(I){if(!E||E.length===0){I.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",I.appendChild(H);return}var T='<div class="admin-fp-row admin-fp-row--head"><span>'+w(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+w(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+w(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+w(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+w(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+w(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+w(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+w(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",b=E.map(function(m){var r=m.blocked|0,o=m.hash||"",t=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+w(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+w(o)+'">fp:'+w(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+w(m.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+w(m.ua||"")+'">'+w(m.ua||"\u2014")+'</span><span class="admin-fp-num">'+(m.msgs|0)+'</span><span class="admin-fp-num">'+(m.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(r>0?"is-crimson":"is-mute")+'">'+r+"</span><span>"+B(m.state||"active")+'</span><span class="admin-fp-ts">'+w(C(m.last_seen))+"</span></div>"}).join("");I.innerHTML=T+b}}async function M(){var E=document.getElementById("adminFingerprintCount");try{var I=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var H=await I.json(),T=H.records||[];if(P(T),E){var b=H.count||T.length,m=H.flagged!=null?H.flagged:T.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;E.textContent=ServerI18n.t("fpCountSummary",{unique:b,flagged:m})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var r=document.getElementById("adminFingerprintTableWrap");r&&(r.innerHTML='<span class="hud-pill is-danger">'+w(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function A(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var I=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(I.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await M();else{var H=await I.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(T){console.error("[admin-fingerprints] reset error:",T),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function k(){N(),F=setInterval(function(){var E=document.getElementById("sec-fingerprints");E&&E.offsetParent!==null&&M()},x)}function N(){F&&(clearInterval(F),F=null)}function _(){var E=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(E){E.insertAdjacentHTML("beforeend",D());var I=document.getElementById("adminFingerprintRefreshBtn");I&&I.addEventListener("click",M);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",A),M(),k()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var E=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&_()});E.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");I&&!document.getElementById("sec-fingerprints")&&_()}})})()});var cn=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var g=window.AdminUtils.escapeHtml;let h=(s,l)=>{let v=window.ServerI18n?.t?.(s);return v&&v!==s?v:l||s},w=!1;new MutationObserver(()=>{let s=document.getElementById("settings-grid");if(s&&!(document.getElementById("sec-widgets")||w)){w=!0;try{F(s)}finally{w=!1}}}).observe(document.body,{childList:!0,subtree:!0});function F(s){let l=document.createElement("div");l.id="sec-widgets",l.className="admin-widgets-page hud-page-stack lg:col-span-2";let v=location.origin+"/overlay";l.dataset.tpl="B",l.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${g(v)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${g(h("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${g(h("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,s.appendChild(l);let e=document.getElementById("widget-add"),n=l.querySelector("[data-ow-addmenu]");e.addEventListener("click",a=>{a.stopPropagation(),n.hidden=!n.hidden}),n.addEventListener("click",a=>{let i=a.target.closest("[data-ow-add]")?.dataset.owAdd;i&&(n.hidden=!0,B(i))}),document.addEventListener("click",a=>{!n.hidden&&!a.target.closest(".admin-ui-page-actions")&&(n.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",A),l.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let a=l.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(a).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),D()}async function $(s,l="GET",v=null){let e={method:l,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(v){let a=document.querySelector('meta[name="csrf-token"]');a&&(e.headers["X-CSRF-Token"]=a.content),e.body=JSON.stringify(v)}return(await fetch("/admin/widgets/"+s,e)).json()}async function D(){try{let s=await $("list");N(s.widgets||[])}catch(s){console.error("[admin-widgets] Load failed:",s)}}async function B(s){let l={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await $("create","POST",{type:s,config:l[s]||{}}),D()}catch(v){console.error("[admin-widgets] Create failed:",v)}}async function C(s){let l=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:l,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await $("delete","POST",{id:s}),D()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function P(s,l){try{await $("update","POST",{id:s,config:l}),D()}catch(v){console.error("[admin-widgets] Update failed:",v)}}async function M(s,l,v){try{await $("score","POST",{id:s,team_index:l,delta:v}),D()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function A(){let s=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:s,confirmLabel:ServerI18n.t("clearAll")}))try{await $("clear","POST",{}),D()}catch(v){console.error("[admin-widgets] Clear failed:",v)}}let k=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(s){let l=document.getElementById("widgets-list");if(l){if(l.innerHTML="",o(s),s.length===0){let v=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});v.dataset.emptyKind="widgets",l.appendChild(v);return}s.forEach(v=>{l.appendChild(T(v))})}}let _={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function E(s){return h("widgetPos_"+String(s||"top-left").replace("-","_"),s||"")}function I(s){let l=s.config||{},v="";s.type==="scoreboard"?v=(l.teams||[]).map(n=>`${n.name} ${n.score}`).join(" \xB7 "):s.type==="ticker"?(v=(l.messages||[])[0]||"",v&&(v=`\u300C${v}\u300D`)):s.type==="label"&&(v=l.text?`\u300C${l.text}\u300D`:"");let e=E(s.position);return v?`${v} \xB7 ${e}`:e}function H(s){return s==="scoreboard"?h("widgetScoreboard"):s==="ticker"?h("widgetTicker"):s==="label"?h("widgetLabel"):s}function T(s){let l=document.createElement("div");l.className="admin-widget-card",s.visible!==!1&&l.classList.add("is-on");let v=document.createElement("button");v.type="button",v.className="admin-widget-summary",v.setAttribute("aria-expanded","false"),v.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+g(_[s.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+g(H(s.type))+'</span><span class="admin-widget-summary-text">'+g(I(s))+"</span>"+(s.visible===!1?'<span class="admin-widget-summary-off">'+g(h("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',l.appendChild(v);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,v.addEventListener("click",()=>{e.hidden=!e.hidden,v.setAttribute("aria-expanded",e.hidden?"false":"true"),l.classList.toggle("is-open",!e.hidden)});let n=d(h("widgetPosition"),k,s.position,y=>P(s.id,{position:y}));e.appendChild(n),s.type==="scoreboard"?t(e,s):s.type==="ticker"?u(e,s):s.type==="label"&&c(e,s);let a=document.createElement("div");a.className="admin-widget-card-actions";let i=document.createElement("button");i.type="button",i.className="admin-ui-action admin-widget-card-action",i.textContent=s.visible?h("widgetHide"):h("widgetShow"),i.addEventListener("click",()=>P(s.id,{visible:!s.visible})),a.appendChild(i);let f=document.createElement("button");return f.type="button",f.className="admin-ui-action is-danger admin-widget-card-action",f.textContent=h("remove"),f.addEventListener("click",()=>C(s.id)),a.appendChild(f),e.appendChild(a),l.appendChild(e),l}let b={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function m(s,l){let v="top-left",e=1/0;for(let[n,[a,i]]of Object.entries(b)){let f=s-a/2,y=l-i/2,S=f*f+y*y;S<e&&(e=S,v=n)}return v}function r(s){let l=s.config||{};return s.type==="scoreboard"?(l.teams||[]).map(v=>`${v.name} ${v.score}`).join("  ")||h("widgetScoreboard"):s.type==="ticker"?(l.messages||[])[0]||h("widgetTicker"):s.type==="label"?l.text||h("widgetLabel"):s.type}function o(s){let l=document.querySelector("[data-ow-stage]");if(l){if(l.innerHTML="",!s.length){l.innerHTML='<span class="admin-ow-stage-empty">'+g(h("widgetsStageEmpty"))+"</span>";return}s.forEach(v=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(v.position||"top-left"),v.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=v.id,e.draggable=!0,e.textContent=r(v),e.title=H(v.type),e.addEventListener("dragend",n=>{let a=l.getBoundingClientRect();if(!a.width||!a.height)return;let i=(n.clientX-a.left)/a.width,f=(n.clientY-a.top)/a.height;if(i<0||i>1||f<0||f>1)return;let y=m(i,f);y!==v.position&&P(v.id,{position:y})}),l.appendChild(e)})}}function t(s,l){let v=l.config||{},e=p(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",v.title||"",n=>P(l.id,{title:n}));s.appendChild(e),(v.teams||[]).forEach((n,a)=>{let i=document.createElement("div");i.className="admin-widget-team";let f=document.createElement("input");f.type="color",f.value=n.color||"#38bdf8",f.className="admin-widget-team-color",f.addEventListener("change",()=>{let j=[...v.teams];j[a]={...j[a],color:f.value},P(l.id,{teams:j})}),i.appendChild(f);let y=document.createElement("input");y.type="text",y.value=n.name,y.className="admin-widget-input",y.addEventListener("change",()=>{let j=[...v.teams];j[a]={...j[a],name:y.value},P(l.id,{teams:j})}),i.appendChild(y);let S=document.createElement("span");S.className="admin-widget-team-score",S.textContent=n.score,i.appendChild(S);let L=document.createElement("button");L.type="button",L.className="admin-widget-step",L.textContent="\u2212",L.addEventListener("click",()=>M(l.id,a,-1)),i.appendChild(L);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>M(l.id,a,1)),i.appendChild(R),s.appendChild(i)})}function u(s,l){let v=l.config||{},e=document.createElement("div");e.className="admin-widget-row";let n=document.createElement("span");n.className="lbl",n.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(n);let a=document.createElement("input");a.type="range",a.min="10",a.max="200",a.value=v.speed||60,a.style.flex="1",a.addEventListener("change",()=>{P(l.id,{speed:parseInt(a.value)})}),e.appendChild(a);let i=document.createElement("span");i.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",i.textContent=a.value,a.addEventListener("input",()=>{i.textContent=a.value}),e.appendChild(i),s.appendChild(e);let f=document.createElement("div");f.className="admin-widget-row",f.style.alignItems="flex-start";let y=document.createElement("span");y.className="lbl",y.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",f.appendChild(y);let S=document.createElement("textarea");S.className="admin-widget-textarea",S.value=(v.messages||[]).join(`
`),S.rows=3,S.placeholder=ServerI18n.t("widgetTickerPlaceholder"),S.addEventListener("change",()=>{let L=S.value.split(`
`).filter(R=>R.trim());P(l.id,{messages:L})}),f.appendChild(S),s.appendChild(f)}function c(s,l){let v=l.config||{};s.appendChild(p(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",v.text||"",e=>P(l.id,{text:e}))),s.appendChild(p(window.ServerI18n?.t?.("size")||"SIZE",String(v.fontSize||24),e=>P(l.id,{fontSize:parseInt(e)||24}),"number"))}function p(s,l,v,e="text"){let n=document.createElement("div");n.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,n.appendChild(a);let i=document.createElement("input");return i.type=e,i.value=l,i.className="admin-widget-input",i.addEventListener("change",()=>v(i.value)),n.appendChild(i),n}function d(s,l,v,e){let n=document.createElement("div");n.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,n.appendChild(a);let i=document.createElement("select");return i.className="admin-widget-select",l.forEach(f=>{let y=document.createElement("option");y.value=f,y.textContent=f,f===v&&(y.selected=!0),i.appendChild(y)}),i.addEventListener("change",()=>e(i.value)),n.appendChild(i),n}})})()});var un=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let g=["live","polls","moderation","viewer","widgets","effects","assets","system","history","notifications","audience","overlay","about"];function h(){let q=window.ADMIN_ROUTES||{},W={};return g.forEach(G=>{let X=q[G];X&&X.title&&(W[G]={title:X.title,kicker:X.kicker||G.toUpperCase()})}),W}let w=[{labelKey:"styleThemePacks",route:"viewer/themes",section:"sec-themes"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer/defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerTheme",route:"viewer/page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerLimits",route:"viewer/limits",section:"sec-viewer-config-limits"},{labelKey:"overlayLayoutFoldTitle",route:"overlay",section:"sec-overlay-layout"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],x=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function F(){let q=document.querySelector('meta[name="csrf-token"]');return q&&q.content||""}function $(q,W){if(typeof window.csrfFetch=="function")return window.csrfFetch(q,W);let G=Object.assign({credentials:"same-origin"},W||{}),X=new Headers(W&&W.headers||{});return X.set("X-CSRF-Token",F()),G.headers=X,fetch(q,G)}function D(q,W){typeof window.showToast=="function"&&window.showToast(q,W!==!1)}let B=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>$("/effects/reload",{method:"POST"}).then(q=>D(q.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),q.ok)).catch(()=>D(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>$("/admin/poll/reset",{method:"POST"}).then(q=>D(q.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),q.ok)).catch(()=>D(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return $("/admin/history/clear",{method:"POST"}).then(W=>D(W.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),W.ok)).catch(()=>D(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],C=null,P=null,M=null,A="",k=[],N=[],_=0,E=null,I=null,H=null,T=15e3;function b(q){return String(q??"").replace(/[&<>"']/g,W=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[W])}function m(q,W){if(!W)return 0;let G=String(q||"").toLowerCase(),X=W.toLowerCase(),le=0,te=0,J=0,Z=0;for(;le<G.length&&te<X.length;)G[le]===X[te]?(te++,Z++,J+=2+Z):Z=0,le++;return te<X.length?-1:(G.startsWith(X)&&(J+=10),J)}function r(){let q=document.createElement("div");q.className="admin-cmdk",q.setAttribute("hidden",""),q.setAttribute("aria-hidden","true"),q.innerHTML=`
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
    `,document.body.appendChild(q),C=q,P=q.querySelector(".admin-cmdk-input"),M=q.querySelector(".admin-cmdk-list"),q.addEventListener("click",W=>{W.target.matches("[data-cmdk-close]")&&R()}),P.addEventListener("input",W=>{A=W.target.value,f()}),P.addEventListener("keydown",o),M.addEventListener("click",W=>{let G=W.target.closest("[data-cmdk-idx]");G&&(_=parseInt(G.dataset.cmdkIdx,10)||0,u())})}function o(q){if(q.key==="Escape"){q.preventDefault(),R();return}if(q.key==="ArrowDown"){q.preventDefault(),t(1);return}if(q.key==="ArrowUp"){q.preventDefault(),t(-1);return}if(q.key==="Enter"){q.preventDefault(),u();return}}function t(q){if(!k.length)return;_=(_+q+k.length)%k.length,S();let W=M.querySelector(`[data-cmdk-idx="${_}"]`);W&&W.scrollIntoView({block:"nearest"})}function u(){let q=k[_];if(q){if(q.type==="route")window.location.hash="#/"+q.route,R();else if(q.type==="setting")window.location.hash="#/"+q.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let W=document.getElementById(q.section);W&&(W.scrollIntoView({behavior:"smooth",block:"start"}),W.tagName==="DETAILS"&&!W.open&&(W.open=!0))},80),R();else if(q.type==="message")window.location.hash="#/messages",R();else if(q.type==="user")window.location.hash="#/system",setTimeout(()=>{let W=document.getElementById("sec-fingerprints");W&&W.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if(q.type==="theme"){let W=window.AdminThemes;(W&&W.activate?W.activate(q.id):Promise.resolve({ok:!1})).then(G=>{G.ok?(D(ServerI18n.t("cmdkThemeApplied",{name:q.label}),!0),H=null):D(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>D(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R()}else if(q.type==="action"){try{let W=q.action&&q.action();W&&typeof W.then=="function"&&W.catch(()=>{})}catch{}R()}}}let c={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function p(q){return Object.entries(h()).map(([W,G])=>{let X=Math.max(m(G.title,q),m(W,q)),le=c[W];return{type:"route",route:W,label:G.title,sub:le?ServerI18n.t(le):"",icon:"\u25C7",score:X}}).filter(W=>W.score>=0)}function d(q){let W=h()[q];if(!W)return"";let G="adminRouteTitle_"+q,X=ServerI18n.t(G);return X!==G?X:W.title}function s(q){return w.map(W=>{let G=W.labelKey?ServerI18n.t(W.labelKey):W.label;return{type:"setting",route:W.route,tab:W.tab,section:W.section,label:d(W.route.split("/")[0])?`${d(W.route.split("/")[0])} \u203A ${G}`:G,sub:"",icon:"\u2699",score:m(G,q)}}).filter(W=>W.score>=0)}function l(q){return E?(E.records||[]).map(G=>{let X=G.text||G.message||"",le=G.nickname||G.user||"guest",te=(G.timestamp||"").slice(11,19)||"\u2014",J=(G.fingerprint||G.fp||"").slice(0,8);return{type:"message",label:`${X}  \xB7  @${le}`,sub:J?`${te} \xB7 fp:${J}`:te,icon:"\u{1F4AC}",score:Math.max(m(X,q),m(le,q))}}).filter(G=>G.score>=0):[]}function v(q){if(!H)return[];let W=H.records||[],G=H.active||"";return W.map(X=>{let le=X.label||X.display_name||X.name||"",te=X.description||ServerI18n.t("cmdkThemeDefaultDesc"),J=X.name===G;return{type:"theme",id:X.name,label:J?ServerI18n.t("cmdkThemeActive",{name:le}):le,sub:te,icon:"\u{1F3A8}",score:Math.max(m(le,q),m(X.name||"",q),m(te,q))}}).filter(X=>X.score>=0)}function e(q){return B.map(W=>{let G=ServerI18n.t(W.labelKey),X=W.subKey?ServerI18n.t(W.subKey):W.sub;return{type:"action",id:W.id,label:G,sub:X,icon:"\u26A1",action:W.action,score:Math.max(m(G,q),m(W.id,q),m(X,q))}}).filter(W=>W.score>=0)}function n(q){return I?(I.records||[]).map(G=>{let X=G.fingerprint||G.fp||G.id||"",le=G.ip||G.last_ip||"",te=G.nickname||"";return{type:"user",label:te?`@${te}  \xB7  ${X.slice(0,12)}\u2026`:`${X.slice(0,12)}\u2026`,sub:`user \xB7 ${le||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(m(X,q),m(le,q),m(te,q))}}).filter(G=>G.score>=0):[]}async function a(){let q=Date.now(),W=[];(!E||q-E.at>T)&&W.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{E={at:q,records:G&&G.records||[]}}).catch(()=>{E={at:q,records:[]}})),(!I||q-I.at>T)&&W.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{I={at:q,records:G&&G.records||[]}}).catch(()=>{I={at:q,records:[]}})),(!H||q-H.at>T)&&W.push(fetch("/admin/themes",{credentials:"same-origin"}).then(G=>G.ok?G.json():null).then(G=>{H={at:q,records:G&&G.themes||[],active:G&&G.active||""}}).catch(()=>{H={at:q,records:[],active:""}})),W.length&&await Promise.all(W)}let i={actions:5,pages:5,messages:4};async function f(){await a();let q=A.trim(),W={action:e(q),route:p(q),setting:s(q),theme:v(q),message:l(q),user:n(q)};k=[],N=[],x.forEach(G=>{let X=G.types.reduce((le,te)=>le.concat(W[te]||[]),[]).sort((le,te)=>te.score-le.score).slice(0,i[G.id]||5);X.length&&(N.push({id:G.id,labelKey:G.labelKey,from:k.length,count:X.length}),k=k.concat(X))}),_=0,S()}function y(q){return q.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[q.type]||"\xB7"}function S(){if(!k.length){M.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let q=[];N.forEach(W=>{q.push(`<li class="admin-cmdk-group" role="presentation">${b(ServerI18n.t(W.labelKey))}</li>`);for(let G=W.from;G<W.from+W.count;G++){let X=k[G],le=G===_;q.push(`
        <li class="admin-cmdk-row ${le?"is-active":""}"
            data-cmdk-idx="${G}" role="option" aria-selected="${le}">
          <span class="admin-cmdk-icon" aria-hidden="true">${b(y(X))}</span>
          <span class="admin-cmdk-label">${b(X.label)}</span>
          <span class="admin-cmdk-sub">${b(X.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${le?"\u21B5":""}</span>
        </li>`)}}),M.innerHTML=q.join("")}function L(){C||r(),C.removeAttribute("hidden"),C.setAttribute("aria-hidden","false"),C.classList.add("is-open"),A="",P.value="",f(),setTimeout(()=>P.focus(),20)}function R(){C&&(C.setAttribute("hidden",""),C.setAttribute("aria-hidden","true"),C.classList.remove("is-open"))}function j(){return!!(C&&!C.hasAttribute("hidden"))}window.AdminCommandPalette={open:L,close:R,isOpen:j,toggle:()=>j()?R():L()}})()});var mn=ye(()=>{(function(){"use strict";let g="sec-sessions-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},w={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function x(r){if(r=Number(r)||0,r<=0)return"\u2014";var o=Math.floor(r/3600),t=Math.floor(r%3600/60),u=r%60;return o>0?o+"h "+t+"m":t>0?t+"m":u+"s"}function F(r){if(!r)return"\u2014";try{var o=typeof r=="number"?new Date(r<1e12?r*1e3:r):new Date(r);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(r)}}function $(){return'<div id="'+g+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function D(){return'<div class="admin-sessions-th"><span>'+h(ServerI18n.t("sessionsColSession"))+"</span><span>"+h(ServerI18n.t("sessionsColMessages"))+"</span><span>"+h(ServerI18n.t("sessionsColViewers"))+"</span><span>"+h(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function B(r){return r.name||ServerI18n.t("sessionsFallbackName",{id:(r.id||"").slice(0,12)})}function C(){var r=document.getElementById("admin-sessions-table-body");if(r){if(w.loading){window.AdminSkeletons?(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:5}))):r.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!w.sessions.length){r.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",r.appendChild(o);return}var t=w.sessions.map(function(u){var c=h(u.id||"");return'<div class="admin-sessions-tr'+(u.is_live?" is-live":"")+'" data-session-id="'+c+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(u.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+h(B(u))+'<span class="admin-sessions-td-sub">'+h(F(u.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(u.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(u.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+h(x(u.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+c+'">'+h(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");r.innerHTML=D()+t}}var P=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function M(){var r=document.querySelector("[data-sessions-export]");if(r){if(!w.exportId){r.hidden=!0,r.innerHTML="";return}var o=w.sessions.find(function(u){return u.id===w.exportId});if(!o){w.exportId=null,r.hidden=!0,r.innerHTML="";return}var t=P.map(function(u){return'<button type="button" class="admin-sx-export__seg'+(u.id===w.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+u.id+'" aria-pressed="'+(u.id===w.exportFormat?"true":"false")+'">'+h(ServerI18n.t(u.labelKey))+"</button>"}).join("");r.hidden=!1,r.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+h(ServerI18n.t("sessionsExportTitle",{name:B(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+h(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(w.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+h(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+h(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+h(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+h(ServerI18n.t("sessionsDownloadBtn",{fmt:w.exportFormat.toUpperCase()}))+"</button></div>"}}function A(){if(w.exportId){var r="/admin/sessions/"+encodeURIComponent(w.exportId)+"/export?format="+encodeURIComponent(w.exportFormat)+"&include_pii="+(w.exportPii?"1":"0"),o=document.createElement("a");o.href=r,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function k(){var r=w.exportId;if(r)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(r)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var t=await o.json(),u=(t.records||[]).slice(0,500);if(!u.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var c=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:u,speedMultiplier:1})});if(c.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!c.ok)throw new Error("HTTP "+c.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){C(),M()}async function _(){w.loading=!0,C();try{var[r,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],u=[];if(r.ok){var c=await r.json();t=Array.isArray(c.sessions)?c.sessions:[],t.forEach(function(n){n._explicit=!0})}if(o.ok){var p=await o.json();u=Array.isArray(p.sessions)?p.sessions:[]}var d=t.slice(),s=new Set(t.map(function(n){return n.id}));u.forEach(function(n){s.has(n.id)||d.push(n)}),d.sort(function(n,a){var i=typeof n.started_at=="number"?n.started_at:Date.parse(n.started_at||0),f=typeof a.started_at=="number"?a.started_at:Date.parse(a.started_at||0);return f-i});try{var l=await fetch("/admin/session/current",{credentials:"same-origin"});if(l.ok){var v=await l.json();if(v.status==="live"){var e=Object.assign({},v,{id:v.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});d.unshift(e)}}}catch{}w.sessions=d,w.total=d.length}catch(n){console.error("[admin-sessions] fetch error:",n),w.sessions=[],w.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:n.message||""}),!1)}finally{w.loading=!1,N()}}function E(r){r&&(window.location.hash="#/session-detail?id="+encodeURIComponent(r))}function I(r){w.exportId=r,M();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function H(){var r=document.getElementById(g);r&&(r.addEventListener("click",function(o){var t=o.target.closest("[data-sessions-export-open]");if(t){o.stopPropagation(),I(t.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){w.exportId=null,M();return}var u=o.target.closest("[data-sessions-export-fmt]");if(u){w.exportFormat=u.dataset.sessionsExportFmt,M();return}if(o.target.closest("[data-sessions-replay]")){k();return}if(o.target.closest("[data-sessions-download]")){A();return}var c=o.target.closest(".admin-sessions-tr");c&&E(c.dataset.sessionId||null)}),r.addEventListener("change",function(o){var t=o.target.closest("[data-sessions-export-pii]");t&&(w.exportPii=!!t.checked)}),r.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var t=o.target.closest(".admin-sessions-tr");t&&(o.preventDefault(),E(t.dataset.sessionId||null))}}))}function T(){var r=document.querySelector(".admin-dash-grid"),o=document.getElementById(g);if(!(!r||!o)){var t=r.dataset.activeLeaf||"dashboard";o.style.display=t==="sessions"?"":"none"}}function b(){var r=document.getElementById("settings-grid");!r||document.getElementById(g)||(r.insertAdjacentHTML("beforeend",$()),H(),_(),T())}function m(){if(window.DANMU_CONFIG?.session?.logged_in){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&b(),T()});r.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",function(){b(),T()}),b()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()})()});var pn=ye(()=>{(function(){"use strict";let g="sec-session-detail-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},w={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},x=!1,F={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function $(){let y=window.location.hash||"",S=y.indexOf("?");if(S===-1)return null;let L=y.slice(S+1);return new URLSearchParams(L).get("id")||null}function D(y){if(!y)return"\u2014";try{let S=new Date(y);if(isNaN(S.getTime()))return String(y);let L=R=>String(R).padStart(2,"0");return`${S.getFullYear()}-${L(S.getMonth()+1)}-${L(S.getDate())} ${L(S.getHours())}:${L(S.getMinutes())}:${L(S.getSeconds())}`}catch{return String(y)}}function B(y){if(!y||y<0)return"\u2014";let S=Math.round(Number(y)),L=Math.floor(S/3600),R=Math.floor(S%3600/60),j=S%60;return L>0?`${L}h ${R}m ${j}s`:R>0?`${R}m ${j}s`:`${j}s`}function C(y,S){if(!y||!S)return"";try{let L=Math.max(0,Math.round((new Date(y)-new Date(S))/1e3)),R=Math.floor(L/60),j=L%60;return`+${String(R).padStart(2,"0")}:${String(j).padStart(2,"0")}`}catch{return""}}function P(y){let S=Number(y);return isNaN(S)?"\u2014":S.toLocaleString()}function M(y){if(!y)return"#64748b";let S=0;for(let R=0;R<y.length;R++)S=S*31+y.charCodeAt(R)>>>0;return`hsl(${S%360}, 60%, 60%)`}function A(){return`
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
    `}async function k(y){if(!y){T(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let S=await fetch(`/admin/sessions/${encodeURIComponent(y)}`,{credentials:"same-origin"});if(S.status===404&&(S=await fetch(`/admin/session/archive/${encodeURIComponent(y)}`,{credentials:"same-origin"})),!S.ok)throw new Error(`HTTP ${S.status}`);let L=await S.json();w.session=L.session||null,w.records=L.records||[],w.density=L.density||[],H(!1),b(),N()}catch(S){H(!1),T(ServerI18n.t("sessionDetailErrLoadFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(w.sessionId)try{let y=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(w.sessionId)}`,{credentials:"same-origin"});if(!y.ok)return;let S=await y.json();w.annotations=Array.isArray(S.annotations)?S.annotations:[],c()}catch{}}function _(){let y=w.session;if(!y)return 0;if(y.duration_s)return Math.round(y.duration_s*1e3);if(y.duration)return Math.round(y.duration*1e3);let S=y.started_at||y.start_time,L=y.ended_at||y.end_time;if(S&&L)try{return Math.max(0,new Date(L)-new Date(S))}catch{return 0}return w.density&&w.density.length?w.density.length*60*1e3:0}function E(y){let S=Date.parse(y||0);if(Number.isNaN(S))return"\u2014";let L=new Date(S),R=j=>String(j).padStart(2,"0");return`${R(L.getHours())}:${R(L.getMinutes())}:${R(L.getSeconds())}`}function I(y){let S=Math.floor(y/1e3),L=Math.floor(S/3600),R=Math.floor(S%3600/60),j=S%60,q=W=>String(W).padStart(2,"0");return L>0?`${q(L)}:${q(R)}:${q(j)}`:`${q(R)}:${q(j)}`}function H(y){w.loading=y;let S=document.querySelector("[data-sd-loading]"),L=document.querySelector("[data-sd-error]");S&&(S.hidden=!y),L&&y&&(L.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let j=R.querySelector("[data-sd-timeline-skel]");y?(R.hidden=!1,j||(j=window.AdminSkeletons.chart(),j.setAttribute("data-sd-timeline-skel","1"),R.appendChild(j))):j&&j.remove()}}function T(y){w.error=y;let S=document.querySelector("[data-sd-error]"),L=document.querySelector("[data-sd-error-msg]");S&&(S.hidden=!1),L&&(L.textContent=y),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let j=document.querySelector(`[${R}]`);j&&(j.hidden=!0)})}function b(){m(),r(),o(),u(),c();let y=document.querySelector("[data-sd-error]");y&&(y.hidden=!0)}function m(){let y=w.session,S=document.querySelector("[data-sd-session-header]");if(!S)return;S.hidden=!1;let L=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),j=document.querySelector("[data-sd-meta-duration]"),q=document.querySelector("[data-sd-title]"),W=y&&(y.session_id||y.id)||w.sessionId||"\u2014";L&&(L.textContent=W),R&&(R.textContent=D(y&&(y.started_at||y.start_time))),j&&(j.textContent=B(y&&(y.duration_s||y.duration))),q&&(q.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(W).slice(-8)}))}function r(){let y=w.session;if(!y)return;let S=document.querySelector("[data-sd-kpis]");S&&(S.hidden=!1);let L=function(W,G,X){let le=document.querySelector(`[data-sd-stat="${W}"]`);le&&(le.textContent=G);let te=document.querySelector(`[data-sd-stat-sub="${W}"]`);te&&(te.textContent=X||"")};L("msg_count",P(y.msg_count)),L("viewer_count",P(y.viewer_count));let R=Array.isArray(w.density)?w.density:[];if(R.length){let W=0,G=0;R.forEach(function(te,J){te>W&&(W=te,G=J)});let X=Date.parse(y.started_at||y.start_time||0),le="";if(!Number.isNaN(X)){let te=new Date(X+G*6e4),J=Z=>String(Z).padStart(2,"0");le=`${J(te.getHours())}:${J(te.getMinutes())}`}L("peak",P(W),le)}else L("peak","\u2014","");let j=Number(y.blocked_count)||0;L("blocked",P(j));let q=document.querySelector("[data-sd-blocked-btn]");q&&(q.textContent=ServerI18n.t("sessionDetailStatBlocked")+(j?" "+j:""),q.disabled=j===0)}function o(){let y=document.querySelector("[data-sd-timeline-wrap]"),S=document.querySelector("[data-sd-timeline]"),L=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!y||!S||!L)return;let j=w.density;if(!j||j.length===0){y.hidden=!0;return}y.hidden=!1;let q=Math.max(1,...j),W=0;j.forEach(function(Z,K){Z>j[W]&&(W=K)});let G=j.map(function(Z,K){let Y=Math.max(2,Math.round(Z/q*100));return`<div class="admin-sd-bar${K===W?" is-peak":""}" style="height:${Y}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:Z,minute:K+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:Z})}"></div>`}).join("");S.innerHTML=G;let X=w.session,le=D(X&&(X.started_at||X.start_time)).slice(11,16)||"00:00",te=D(X&&(X.ended_at||X.end_time)).slice(11,16)||"",J=j.length>2?`+${Math.round(j.length/2)}min`:"";L.innerHTML=`
      <span class="admin-sd-axis-label">${h(le)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${h(J)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${h(te)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:j[W],minute:W}))}function t(){let y=(w.msgQuery||"").trim().toLowerCase();return w.records.filter(function(S){let L=(S.status||"shown")==="blocked";return w.msgFilter==="blocked"&&!L?!1:y?String(S.text||"").toLowerCase().indexOf(y)!==-1||String(S.nickname||"").toLowerCase().indexOf(y)!==-1:!0})}function u(){let y=document.querySelector("[data-sd-msgs-wrap]"),S=document.querySelector("[data-sd-msgs-list]");if(!y||!S)return;if(!w.records.length){y.hidden=!0;return}y.hidden=!1;let L=t().slice(0,300);if(!L.length){S.innerHTML='<div class="admin-sd-msgs-empty">'+h(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}S.innerHTML=L.map(function(R){let j=(R.status||"shown")==="blocked",q=M(R.fingerprint||R.fp||""),W=E(R.timestamp||R.created_at),G=String(R.nickname||"").trim();return`
        <div class="admin-sd-msg-row${j?" is-blocked":""}">
          <span class="admin-sd-msg-time">${h(W)}</span>
          <span class="admin-sd-msg-dot" style="background:${q}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${h(R.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${h(ServerI18n.t("deliveryStatus_"+(R.status||"shown")))}
            ${R.delivery_reason?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("deliveryReason_"+R.delivery_reason))}</span>`:""}
            ${j&&R.blockedBy?`<span class="admin-sd-msg-rule">${h(ServerI18n.t("sessionDetailBlockedBy",{rule:R.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${h(G||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function c(){let y=w.annotations||[],S=_(),L=document.querySelector("[data-sd-ann-count]");L&&(L.textContent=y.length?`${y.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=y.length?`ANNOTATIONS \xB7 ${y.length}`:"ANNOTATIONS");let j=document.querySelector("[data-sd-ann-layer]");j&&(!S||y.length===0?j.innerHTML="":j.innerHTML=y.map(function(G){let X=F[G.label]||F.note,le=Math.min(100,Math.max(0,G.ts_ms/S*100)),te=G.id===w.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${X.shape}${te?" is-active":""}"
              data-sd-ann-marker="${h(G.id)}"
              style="left:${le.toFixed(2)}%;--ann-color:${X.color}"
              title="${h(X.label)} \xB7 ${I(G.ts_ms)}"
              aria-label="${h(X.label)} at ${I(G.ts_ms)}: ${h(G.note||"")}">
              ${X.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${te?`<span class="admin-sd-ann-tip"><span style="color:${X.color}">${X.icon}</span> ${h((G.note||"").slice(0,40))}${(G.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let q=document.querySelector("[data-sd-ann-legend]");q&&(q.innerHTML=Object.keys(F).map(function(G){let X=F[G],le=X.shape==="square"?"2px":X.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${X.color};border-radius:${le}"></span>
          <span class="admin-sd-ann-legend-label">${X.label}</span>
        </span>`}).join(""));let W=document.querySelector("[data-sd-ann-list]");if(W){if(y.length===0){W.innerHTML="";let G=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});G.dataset.emptyKind="session-annotations",W.appendChild(G);return}W.innerHTML=y.map(function(G){let X=F[G.label]||F.note,le=G.id===w.activeAnnId,J=(G.note||"").length>80?(G.note||"").slice(0,80)+"\u2026":G.note||"";return`
        <div class="admin-sd-ann-row${le?" is-active":""}" data-sd-ann-row="${h(G.id)}">
          <span class="admin-sd-ann-ts" style="color:${X.color}">${I(G.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${X.color}">${X.icon} ${X.label}</span>
          <span class="admin-sd-ann-note">${h(J)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${h(G.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function p(y){if(!w.sessionId)return;let S=window.HudConfirm;if(!S){let X=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:I(y)}),"");X!=null&&X.trim()&&d(y,"note",X.trim());return}let R="highlight",j="",q=document.createElement("div");q.className="admin-sd-ann-modal-body",q.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${I(y)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(F).map(function(X){let le=F[X];return`
              <button type="button" class="admin-sd-ann-modal-lbl${X==="highlight"?" is-active":""}"
                data-ann-label="${X}" style="--ann-color:${le.color}">
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
      </div>`,q.addEventListener("click",function(X){let le=X.target.closest("[data-ann-label]");le&&(R=le.dataset.annLabel,q.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(te){te.classList.toggle("is-active",te===le)}))});let W=q.querySelector("[data-ann-modal-note]"),G=q.querySelector("[data-ann-modal-counter]");W.addEventListener("input",function(){j=W.value,G.textContent=`${j.length} / 280`}),setTimeout(function(){W&&W.focus()},50),S.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:q,width:460}).then(function(X){X&&d(y,R,W.value.trim())})}async function d(y,S,L){if(w.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:w.sessionId,ts_ms:Math.max(0,Math.round(y)),label:S||"note",note:L||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let j=await R.json();j.annotation&&(w.annotations.push(j.annotation),w.annotations.sort(function(q,W){return q.ts_ms-W.ts_ms}),w.activeAnnId=j.annotation.id,c(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function s(y){if(y)try{let S=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(y)}`,{method:"DELETE",credentials:"same-origin"});if(!S.ok)throw new Error(`HTTP ${S.status}`);w.annotations=w.annotations.filter(function(L){return L.id!==y}),w.activeAnnId===y&&(w.activeAnnId=null),c(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(S){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function l(y){let S=document.querySelector("[data-sd-timeline-inner]"),L=document.querySelector("[data-sd-ann-hover]");if(!S||!L)return;let R=S.getBoundingClientRect();if(!R.width)return;let j=y.clientX-R.left,q=Math.min(1,Math.max(0,j/R.width)),W=_();if(!W){L.hidden=!0;return}let G=Math.round(q*W);w.hoverTsMs=G,L.hidden=!1,L.style.left=`${(q*100).toFixed(2)}%`,L.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:I(G)})}function v(){let y=document.querySelector("[data-sd-ann-hover]");y&&(y.hidden=!0),w.hoverTsMs=null}function e(y){if(y.target.closest("[data-sd-ann-marker]"))return;let S=document.querySelector("[data-sd-timeline-inner]");if(!S)return;let L=S.getBoundingClientRect();if(!L.width)return;let R=y.clientX-L.left,j=Math.min(1,Math.max(0,R/L.width)),q=_();q&&p(Math.round(j*q))}async function n(){if(w.sessionId)try{let y=w.records.slice(0,500);if(!y.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let S=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:y,speedMultiplier:1})});if(S.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function a(y,S){if(y==="back")window.location.hash="#/history/sessions";else if(y==="retry")w.sessionId&&k(w.sessionId);else if(y==="export"){if(!w.sessionId)return;let L=document.createElement("a");L.href="/admin/sessions/"+encodeURIComponent(w.sessionId)+"/export?format=csv",L.rel="noopener",document.body.appendChild(L),L.click(),L.remove()}else if(y==="replay")n();else if(y==="add-annotation"){let L=_(),R=w.hoverTsMs!=null?w.hoverTsMs:Math.round(L/2);p(R)}}function i(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let S=$();if(!S){w.sessionId=null,T(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}w.sessionId=S,k(S)}function f(){let y=document.getElementById("settings-grid");if(!y)return;let S=document.getElementById(g);S||(y.insertAdjacentHTML("beforeend",A()),S=document.getElementById(g),c()),S&&S.dataset.sdBound!=="1"&&(S.dataset.sdBound="1",S.addEventListener("click",function(L){let R=L.target.closest("[data-sd-ann-del]");if(R){L.stopPropagation(),s(R.dataset.sdAnnDel);return}let j=L.target.closest("[data-sd-ann-marker]");if(j){L.stopPropagation(),w.activeAnnId=j.dataset.sdAnnMarker,c();let le=document.querySelector(`[data-sd-ann-row="${w.activeAnnId}"]`);le&&le.scrollIntoView&&le.scrollIntoView({block:"nearest",behavior:"smooth"});return}let q=L.target.closest("[data-sd-ann-row]");if(q){w.activeAnnId=q.dataset.sdAnnRow,c();return}if(L.target.closest("[data-sd-timeline-inner]")){e(L);return}let G=L.target.closest("[data-sd-action]");if(G){L.preventDefault(),a(G.dataset.sdAction,G);return}let X=L.target.closest("[data-sd-filter]");X&&(w.msgFilter=X.dataset.sdFilter,S.querySelectorAll("[data-sd-filter]").forEach(function(le){le.classList.toggle("is-active",le===X)}),u())}),S.addEventListener("input",function(L){let R=L.target.closest("[data-sd-search]");R&&(w.msgQuery=R.value||"",u())}),S.addEventListener("mousemove",function(L){L.target.closest("[data-sd-timeline-inner]")&&l(L)}),S.addEventListener("mouseleave",function(L){L.target.closest&&L.target.closest("[data-sd-timeline-inner]")&&v()},!0)),w.sessionId=$(),w.sessionId?k(w.sessionId):T(ServerI18n.t("sessionDetailErrNoSessionSelected")),x||(x=!0,window.addEventListener("hashchange",i))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&f()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let S=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(g)&&S.indexOf("/session-detail")!==-1&&f(),window.addEventListener("admin-route-changed",function(L){(L&&L.detail&&L.detail.route)==="session-detail"&&f()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&f()})})})()});var fn=ye(()=>{(function(){"use strict";let g="sec-search-overview";var h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},w=20,x={query:"",scope:"session",blockedOnly:!1,who:"",shown:w,results:[],total:0,loading:!1,searched:!1},F=0;function $(){return'<div id="'+g+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+h(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+h(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+h(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+h(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+h(ServerI18n.t("searchWhoAria"))+'"><option value="">'+h(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+h(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+h(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function D(t){if(!t)return 200;for(var u=0,c=0;c<Math.min(t.length,6);c++)u=u*31+t.charCodeAt(c)&65535;return u%360}function B(t,u){if(!u||!t)return h(t||"");var c=h(t),p=h(u);try{var d=new RegExp("("+p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return c.replace(d,'<mark class="admin-search-hit">$1</mark>')}catch{return c}}function C(t){if(!t)return"\u2014";try{var u=new Date(t);return u.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function P(){var t=x.results;return x.blockedOnly&&(t=t.filter(function(u){return(u.status||"shown")==="blocked"})),x.who&&(t=t.filter(function(u){return(u.nickname||"")===x.who})),t}function M(){var t=document.getElementById("admin-search-count");if(t){if(!x.searched||!x.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:P().length})}}function A(){var t=document.querySelector("[data-search-who]");if(t){var u=[];x.results.forEach(function(p){var d=(p.nickname||"").trim();d&&u.indexOf(d)===-1&&u.push(d)}),u.sort();var c=x.who;t.innerHTML='<option value="">'+h(ServerI18n.t("searchWhoAnyone"))+"</option>"+u.map(function(p){return'<option value="'+h(p)+'"'+(p===c?" selected":"")+">"+h(p)+"</option>"}).join("")}}function k(){var t=document.getElementById("admin-search-results"),u=document.getElementById("admin-search-empty-state"),c=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var p=function(e){u&&(u.style.display="block",u.textContent=e),c&&(c.hidden=!0)};if(x.loading)return p(ServerI18n.t("searchSearching"));if(!x.searched)return p(ServerI18n.t("searchPromptStart"));var d=P();if(d.length===0)return p(ServerI18n.t("searchNoMatch"));u&&(u.style.display="none"),c&&(c.hidden=!1);var s=Math.min(d.length,x.shown),l=document.createDocumentFragment();if(d.slice(0,s).forEach(function(e){var n=document.createElement("div");n.className="admin-search-row",n.innerHTML='<span class="admin-search-row__ts">'+h(C(e.timestamp))+'</span><span class="admin-search-row__text">'+B(e.text||"",x.query)+'</span><span class="admin-search-row__nick">'+h((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+h(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+h(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",l.appendChild(n)}),t.appendChild(l),d.length>s){var v=document.createElement("button");v.type="button",v.className="admin-search-more",v.dataset.searchMore="1",v.textContent=ServerI18n.t("searchMoreLeft",{n:d.length-s}),t.appendChild(v)}}}function N(){M(),A(),k()}async function _(){var t=x.query.trim();if(!t){x.loading=!1,x.searched=!1,x.results=[],x.total=0,N();return}x.loading=!0,N();try{var u="/admin/search?q="+encodeURIComponent(t);if(x.scope==="session"){var c=await I();c&&(u+="&since="+encodeURIComponent(c))}var p=Date.now(),d=await fetch(u,{credentials:"same-origin"}),s=Date.now()-p;if(!d.ok)throw new Error("HTTP "+d.status);var l=await d.json();x.results=Array.isArray(l.results)?l.results:[],x.total=typeof l.total=="number"?l.total:x.results.length,x.shown=w}catch(v){console.error("[admin-search] fetch error:",v),x.results=[],x.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:v.message||""}),!1)}finally{x.loading=!1,x.searched=!0,N()}}var E=null;async function I(){if(E!==null)return E;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var u=await t.json();if(u.status==="live"&&u.started_at)return E=new Date(u.started_at*1e3).toISOString(),E}}catch{}return E="",""}function H(){clearTimeout(F),F=setTimeout(_,300)}function T(){if(x.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];x.results.forEach(function(d){var s=[d.nickname||"",d.fingerprint||"",d.timestamp||"",d.status||"",d.text||"",d.delivery_reason||""].map(function(l){return'"'+window.AdminUtils.csvSafeText(l).replace(/"/g,'""')+'"'});t.push(s.join(","))});var u=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(u),p=document.createElement("a");p.href=c,p.download="danmu-search-"+(x.query||"export")+".csv",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(c)}}function b(){var t=document.getElementById(g);if(t){var u=document.getElementById("admin-search-input");u&&(u.addEventListener("input",function(){x.query=u.value,H()}),u.addEventListener("keydown",function(p){p.key==="Enter"&&(clearTimeout(F),x.query=u.value,_())})),t.addEventListener("click",function(p){var d=p.target.closest("[data-search-scope]");if(d){x.scope=d.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(l){l.classList.toggle("is-active",l===d)}),x.query.trim()&&H();return}var s=p.target.closest("[data-search-blocked]");if(s){x.blockedOnly=!x.blockedOnly,s.classList.toggle("is-active",x.blockedOnly),x.shown=w,N();return}if(p.target.closest("[data-search-more]")){x.shown+=w,k();return}}),t.addEventListener("change",function(p){var d=p.target.closest("[data-search-who]");d&&(x.who=d.value||"",x.shown=w,N())});var c=document.getElementById("admin-search-export-btn");c&&c.addEventListener("click",T)}}function m(){var t=document.querySelector(".admin-dash-grid"),u=document.getElementById(g);if(!(!t||!u)){var c=t.dataset.activeLeaf||"dashboard";u.style.display=c==="search"?"":"none"}}function r(){var t=document.getElementById("settings-grid");!t||document.getElementById(g)||(t.insertAdjacentHTML("beforeend",$()),b(),m())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&r(),m()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",m),document.addEventListener("admin-panel-rendered",function(){r(),m()}),r()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var vn=ye(()=>{(function(){"use strict";let g="sec-api-tokens-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},w=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],x=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],F={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function $(e){if(!e)return"\u2014";try{let n=new Date(e);if(isNaN(n.getTime()))return String(e);let a=i=>String(i).padStart(2,"0");return`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())}`}catch{return String(e)}}function D(e){if(!e)return null;try{let n=new Date(e);if(isNaN(n.getTime()))return null;let a=i=>String(i).padStart(2,"0");return`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())} ${a(n.getHours())}:${a(n.getMinutes())}`}catch{return null}}function B(e){let n=Number(e);return isNaN(n)?"0":n.toLocaleString()}function C(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let n=new Date(e.expires_at).getTime(),a=Date.now();if(n<a)return"expired";if(n-a<168*3600*1e3)return"expiring"}catch{}return"active"}function P(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function M(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(n){let a="admin-ui-pill admin-at-scope-badge";return n==="admin:*"?a+=" is-danger":n.startsWith("fire:")?a+=" is-warn":n.startsWith("read:stats")?a+=" is-cyan":a+=" is-success",`<span class="${a}">${h(n)}</span>`}).join(" ")}function A(e){let n="admin-ui-dot admin-at-dot";return e==="active"?n+=" is-success":e==="expiring"?n+=" is-warn":e==="expired"?n+=" is-danger":n+=" is-muted",`<span class="${n}" aria-hidden="true"></span>`}function k(){let e=w.map(function(a){let i=a.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",y=`admin-ui-pill admin-at-scope-badge is-${a.badge==="red"?"danger":a.badge==="amber"?"warn":a.badge==="green"?"success":a.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${a.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${h(a.id)}"
          >
          <span class="${y}">${h(a.badgeTxt)}</span>
          <span class="admin-at-scope-label">${h(ServerI18n.t(a.labelKey))}</span>
          ${i}
        </label>
      `}).join(""),n=x.map(function(a){let i=a.default?"checked":"";return`
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
    `}async function N(){H(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let n=await e.json();F.tokens=n.tokens||n||[],b()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function _(e){F.creating=!0,T(!0),u();try{let n=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok){let f=await n.json().catch(()=>({}));throw new Error(f.error||f.message||`HTTP ${n.status}`)}let a=await n.json(),i=a.token||a.raw_token||a.access_token||null;F.newTokenRaw=i,m(i),o(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(n){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:n.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:n.message||""}),!1)}finally{F.creating=!1,T(!1)}}async function E(e,n){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${h(n||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let i=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!i.ok){let f=await i.json().catch(()=>({}));throw new Error(f.error||f.message||`HTTP ${i.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:i.message||""}),!1)}}async function I(e,n){try{let a=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:n})});if(!a.ok){let i=await a.json().catch(()=>({}));throw new Error(i.error||i.message||`HTTP ${a.status}`)}window.showToast&&window.showToast(n?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:a.message||""}),!1)}}function H(e){let n=document.querySelector("[data-at-list-loading]");n&&(n.hidden=!e)}function T(e){let n=document.getElementById("adminAtSubmitBtn");n&&(n.disabled=e,n.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function b(){let e=F.tokens,n=document.querySelector("[data-at-empty]"),a=document.querySelector("[data-at-table-wrap]"),i=document.querySelector("[data-at-tbody]");if(!(!n||!a||!i)){if(!e||e.length===0){if(!n.firstElementChild&&window.AdminEmpty){let f=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});f.dataset.emptyKind="api-tokens",n.appendChild(f)}n.hidden=!1,a.hidden=!0;return}n.hidden=!0,a.hidden=!1,i.innerHTML=e.map(function(f){let y=C(f),S=A(y),L=f.scopes||f.scope||[],R=Array.isArray(L)?L:String(L).split(",").map(le=>le.trim()).filter(Boolean),q=P(f.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",W=y==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",G=y==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",X=f.last_used_at?`${D(f.last_used_at)||$(f.last_used_at)}<br><span class="admin-at-ip">${h(f.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${h(f.id||f.token_id||"")}">
          <td class="admin-at-td-label">
            ${S}
            <span class="admin-at-label-text">${h(f.label||f.name||"\u2014")}</span>
            ${q}${W}${G}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${h(f.prefix||f.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${M(R)}</div>
          </td>
          <td class="admin-at-td-used">${X}</td>
          <td class="admin-at-td-usage">${B(f.usage_count||f.use_count)}</td>
          <td class="admin-at-td-created">${$(f.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${h(f.id||f.token_id||"")}"
              data-token-enabled="${f.enabled===!1?"0":"1"}"
              title="${f.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${f.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${h(f.id||f.token_id||"")}"
              data-token-label="${h(f.label||f.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function m(e){let n=document.getElementById("adminAtSuccessBanner"),a=document.getElementById("adminAtTokenDisplay"),i=document.getElementById("adminAtCreateForm");n&&(n.hidden=!1),a&&e&&(a.value=e),i&&(i.style.opacity="0.5"),n&&n.scrollIntoView({behavior:"smooth",block:"nearest"})}function r(){let e=document.getElementById("adminAtSuccessBanner"),n=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),n&&(n.style.opacity=""),F.newTokenRaw=null}function o(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(i){i.classList.remove("is-active")});let n=document.querySelector("input[name='adminAtExpiry'][value='90']");if(n){n.checked=!0;let i=n.closest(".admin-at-expiry-btn");i&&i.classList.add("is-active")}let a=document.getElementById("adminAtAdminWarn");a&&(a.hidden=!0),u()}function t(e){let n=document.getElementById("adminAtFormError");n&&(n.hidden=!1,n.textContent=e)}function u(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function c(){let e=document.getElementById("adminAtLabel"),n=e?e.value.trim():"",a=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(S){a.push(S.value)});let i=document.querySelector("input[name='adminAtExpiry']:checked"),f=i?i.value:"90",y=f==="null"?null:parseInt(f,10);return{label:n,scopes:a,expiry_days:y}}function p(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function d(e){if(e.preventDefault(),F.creating)return;u();let n=c(),a=p(n);if(a){t(a);return}_(n)}function s(){let e=F.newTokenRaw;if(!e)return;let n=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let a=document.getElementById("adminAtTokenDisplay");a&&(a.select(),document.execCommand("copy")),n&&(n.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){n.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function l(){let e=document.getElementById(g);if(!e)return;e.addEventListener("click",function(f){let y=f.target.closest("[data-at-action]");if(y){let L=y.dataset.atAction;if(L==="revoke"){let R=y.dataset.tokenId,j=y.dataset.tokenLabel;E(R,j)}else if(L==="toggle"){let R=y.dataset.tokenId,j=y.dataset.tokenEnabled==="1";I(R,!j)}else L==="copy-token"&&s();return}let S=f.target.closest(".admin-at-expiry-btn");S&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(L){L.classList.remove("is-active")}),S.classList.add("is-active"))});let n=document.getElementById("adminAtScope_admin__");n&&n.addEventListener("change",function(){let f=document.getElementById("adminAtAdminWarn");f&&(f.hidden=!n.checked)});let a=document.getElementById("adminAtCreateForm");a&&a.addEventListener("submit",d);let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){let f=i.closest(".admin-at-expiry-btn");f&&f.classList.add("is-active")}}function v(){let e=document.getElementById("settings-grid");!e||document.getElementById(g)||(e.insertAdjacentHTML("beforeend",k()),l(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&v()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&v()})})()});var hn=ye(()=>{(function(){"use strict";let g="sec-wcag-overview",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function w(o){let t=o.replace(/^#/,""),u=t.length===3?t.split("").map(function(c){return c+c}).join(""):t;return[parseInt(u.slice(0,2),16)/255,parseInt(u.slice(2,4),16)/255,parseInt(u.slice(4,6),16)/255]}function x(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function F(o){let t=w(o);return .2126*x(t[0])+.7152*x(t[1])+.0722*x(t[2])}function $(o,t){let u=F(o),c=F(t),p=Math.max(u,c),d=Math.min(u,c);return(p+.05)/(d+.05)}function D(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function B(o,t){let u=F(t),c=[],p=w(o);for(let d=.05;d<=.6&&c.length<3;d+=.05){let l="#"+p.map(function(e){return Math.min(1,e+d)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),v=$(l,t);v>=4.5&&c.push({hex:l,ratio:v})}return c}let C=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],P={fg:"#FB7185",bg:"#000000"},M="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",A={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function k(){let o=C.filter(function(c){return D($(c.fg,c.bg))!=="fail"}).length,t=C.length-o,u=Math.round(o/C.length*100);return`
      <div id="${g}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${N("PASS AA+",o,ServerI18n.t("wcagStatPassLabel"))}
              ${N("BELOW AA",t,ServerI18n.t("wcagStatFailLabel"))}
              ${N("PAIRS",C.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",u+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:u})}">
                <div class="admin-wcag-meter-fill" style="width:${u}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${M}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${C.map(function(c,p){return _(c,p)}).join("")}
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
      </div>`}function N(o,t,u){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${h(String(t))}</span>
        <span class="hud-stat-tile-label">${h(u)}</span>
      </div>`}function _(o,t){let u=$(o.fg,o.bg),c=D(u),p=A[c],d=ServerI18n.t(o.nameKey),s=p.labelKey?ServerI18n.t(p.labelKey):p.label,l=c==="fail"?ServerI18n.t("wcagWarnFail"):c==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${M}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${h(ServerI18n.t("wcagPairAriaLabel",{name:d,ratio:u.toFixed(2),level:s.slice(2)}))}">
        <span class="admin-wcag-pair-name">${h(d)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${h(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${h(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${h(o.fg)}">${h(o.fg)} / ${h(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${u.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${p.mod}">${s}</span>
        ${l?`<span class="admin-wcag-warn">\u26A0 ${l}</span>`:""}
      </div>`}function E(){let o=$(P.fg,P.bg),t=D(o),u=A[t],c=u.labelKey?ServerI18n.t(u.labelKey):u.label,p=B(P.fg,P.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${I(ServerI18n.t("wcagForegroundLabel"),P.fg,"fg")}
        ${I(ServerI18n.t("wcagBackgroundLabel"),P.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${h(P.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${h(P.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${h(P.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${h(P.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${u.mod}">${c}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${p.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${p.map(function(d){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${h(d.hex)}"
                title="${h(ServerI18n.t("wcagSuggApplyTitle",{ratio:d.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${h(P.bg)};color:${h(d.hex)}">${h(d.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${d.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function I(o,t,u){let c="wcag-tester-"+u;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${c}">${h(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${h(t)}"></span>
          <input type="text" id="${c}" class="admin-ui-input" data-wcag-tester-${u}
            aria-label="${h(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${h(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(o,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${h(o)}</span>
    </div>`}function T(){let o=document.getElementById(g);o&&(o.addEventListener("click",function(t){let u=t.target.closest("[data-wcag-pair-idx]");if(u){b(u);return}let c=t.target.closest("[data-wcag-sugg]");c&&(P.fg=c.dataset.wcagSugg,m())}),o.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let u=t.target.closest("[data-wcag-pair-idx]");u&&(t.preventDefault(),b(u))}),o.addEventListener("input",function(t){let u=t.target.closest("[data-wcag-tester-fg]"),c=t.target.closest("[data-wcag-tester-bg]");u&&/^#[0-9A-Fa-f]{6}$/.test(u.value)&&(P.fg=u.value.toUpperCase(),m()),c&&/^#[0-9A-Fa-f]{6}$/.test(c.value)&&(P.bg=c.value.toUpperCase(),m())}))}function b(o){let t=C[parseInt(o.dataset.wcagPairIdx,10)];t&&(P.fg=t.fg,P.bg=t.bg,m())}function m(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=E())}function r(){let o=document.getElementById("settings-grid");!o||document.getElementById(g)||(o.insertAdjacentHTML("beforeend",k()),T())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(g)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(g)&&r()})})()});var gn=ye(()=>{(function(){"use strict";let g="danmu.onboarding.done",h="admin-onboarding-root",$=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],D=0,B=!1;window.AdminOnboarding={start:k,isDone:function(){try{return!!localStorage.getItem(g)}catch{return!1}},reset:function(){try{localStorage.removeItem(g)}catch{}}};let C=new Set(["live","dashboard"]);function P(){if(B||window.AdminOnboarding.isDone()||!C.has(M()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{B||window.AdminOnboarding.isDone()||o()||C.has(M())&&k()},1200)}function M(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function A(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&k()}function k(){B||(B=!0,D=0,H())}function N(o){if(!B)return;B=!1,document.body.removeEventListener("click",E),document.removeEventListener("keydown",I),window.removeEventListener("resize",T);let t=document.getElementById(h);if(t&&t.remove(),o)try{localStorage.setItem(g,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function _(){D<$.length-1?(D++,T()):N(!0)}function E(o){let t=o.target.closest("[data-ob-action]");t&&(o.stopPropagation(),t.dataset.obAction==="next"?_():t.dataset.obAction==="skip"&&N(!1))}function I(o){B&&o.key==="Escape"&&(o.preventDefault(),N(!1))}function H(){let o=document.getElementById(h);o&&o.remove();let t=document.createElement("div");t.id=h,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",E),document.addEventListener("keydown",I),window.addEventListener("resize",T),T()}function T(){let o=document.getElementById(h);if(!o)return;let t=$[D],u=$.length,c=m(t.target),p=window.innerWidth,d=window.innerHeight,s="";c?s='<div class="admin-ob-spot" style="left:'+(c.left-8)+"px;top:"+(c.top-8)+"px;width:"+(c.width+16)+"px;height:"+(c.height+16)+'px;"></div>':s='<div class="admin-ob-scrim"></div>';let l=(p-360)/2,v=d/2-110,e="none";if(c){let f=c.left+c.width/2;t.side==="top"?(l=f-360/2,v=c.top-16,e="bottom"):t.side==="right"?(l=c.right+16+8,v=c.top,e="left"):(l=f-360/2,v=c.bottom+16+8,e="top"),l=Math.max(16,Math.min(p-360-16,l))}let n=$.map(function(f,y){return'<span class="admin-ob-progress-item'+(y===D?" is-current":"")+'">'+(y+1)+" "+r(ServerI18n.t(f.labelKey))+"</span>"+(y<u-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=s+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+l+"px;top:"+v+'px"><div class="admin-ob-count">'+(D+1)+" / "+u+'</div><div class="admin-ob-title">'+r(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+r(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+r(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+r(ServerI18n.t(D===u-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+n+"</div></div>";let a=o.querySelector(".admin-ob-bubble");if(!a||!c)return;let i=a.offsetHeight;if(t.side==="top")a.style.top=Math.max(16,c.top-16-8-i)+"px";else if(v+i>d-16){let f=c.top-16-8-i;f>=16?(a.style.top=f+"px",a.setAttribute("data-arrow","bottom")):(a.style.top=Math.max(16,d-i-16)+"px",a.setAttribute("data-arrow","none"))}b(a,c)}function b(o,t){let u=o.getAttribute("data-arrow");if(u==="none")return;let c=o.getBoundingClientRect(),p=u==="top"||u==="bottom",d=p?t.left+t.width/2-c.left:t.top+t.height/2-c.top,s=p?c.width:c.height,l=Math.max(16,Math.min(s-32,d-8));o.style.setProperty("--ob-arrow",l+"px")}function m(o){if(!o)return null;let t=document.querySelector(o);if(!t)return null;let u=t.getBoundingClientRect();return u.width<8||u.height<8||u.bottom<0||u.top>window.innerHeight?null:u}function r(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",A),A(),window.addEventListener("hashchange",function(){C.has(M())&&setTimeout(P,600)}),setTimeout(P,800))})})()});var En=ye(()=>{var es=Se(it()),ts=Se(st()),ns=Se(ot()),as=Se(rt()),is=Se(dt()),ss=Se(lt()),os=Se(ct()),rs=Se(ut()),ds=Se(mt()),ls=Se(pt()),cs=Se(ft()),us=Se(vt()),ms=Se(ht()),ps=Se(gt()),fs=Se(bt()),vs=Se(wt()),hs=Se(yt()),gs=Se(St()),bs=Se(kt()),ws=Se(It()),ys=Se(Tt()),Ss=Se(_t()),ks=Se(Et()),Is=Se($t()),Ts=Se(Lt()),_s=Se(xt()),Es=Se(At()),$s=Se(Ct()),Ls=Se(Bt()),xs=Se(Ft()),As=Se(Dt()),Cs=Se(Mt()),Bs=Se(Nt()),Fs=Se(Pt()),Ds=Se(Rt()),Ms=Se(Ot()),Ns=Se(qt()),Ps=Se(Ht()),Rs=Se(jt()),Os=Se(Ut()),qs=Se(Kt()),Hs=Se(Wt()),js=Se(Gt()),Us=Se(Vt()),Ks=Se(zt()),Ws=Se(Jt()),Gs=Se(Yt()),Vs=Se(Qt()),zs=Se(Xt()),Js=Se(Zt()),Ys=Se(en()),Qs=Se(tn()),Xs=Se(nn()),Zs=Se(an()),eo=Se(sn()),to=Se(on()),no=Se(rn()),ao=Se(dn()),io=Se(ln()),so=Se(cn()),oo=Se(un()),ro=Se(mn()),lo=Se(pn()),co=Se(fn()),uo=Se(vn()),mo=Se(hn()),po=Se(gn())});En();})();
