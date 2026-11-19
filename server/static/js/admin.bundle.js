/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var yn=Object.create;var at=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var ye=(h,v)=>()=>{try{return v||h((v={exports:{}}).exports,v),v.exports}catch(u){throw v=0,u}};var _n=(h,v,u,$)=>{if(v&&typeof v=="object"||typeof v=="function")for(let B of kn(v))!Tn.call(h,B)&&B!==u&&at(h,B,{get:()=>v[B],enumerable:!($=Sn(v,B))||$.enumerable});return h};var Se=(h,v,u)=>(u=h!=null?yn(In(h)):{},_n(v||!h||!h.__esModule?at(u,"default",{value:h,enumerable:!0}):u,h));var it=ye(()=>{(function(){"use strict";var h=4,v=2500,u=3e3,$=Object.create(null);function B(){return Date.now()}function A(E,x){return(x?"ok:":"err:")+E}function U(E,x){return"var("+E+", "+x+")"}function N(E){return E?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function F(E){for(var x=Array.prototype.slice.call(E.children);x.length>h;){var I=x.shift();I&&I.parentNode&&I.parentNode.removeChild(I)}}function R(E,x){E.remaining=x,E.startedAt=B(),E.timer=setTimeout(function(){y(E)},x)}function D(E){E.timer&&(clearTimeout(E.timer),E.timer=null,E.remaining=Math.max(600,E.remaining-(B()-E.startedAt)))}function C(E){E.timer||!E.el.parentNode||R(E,E.remaining)}function y(E){clearTimeout(E.timer),E.timer=null,E.key&&$[E.key]===E&&delete $[E.key];var x=E.el;!x||!x.parentNode||(x.style.opacity="0",x.style.transform="translateX(8px)",setTimeout(function(){x.parentNode&&x.parentNode.removeChild(x)},180))}function M(E,x){var I=document.getElementById("toast-container");if(I){x=x!==!1;var H=A(String(E),x),T=$[H];if(T&&T.el.parentNode&&B()-T.startedAt<v){T.count+=1,T.countEl&&(T.countEl.textContent="\xD7"+T.count,T.countEl.hidden=!1),D(T),C(T);return}var g=x?U("--color-ink-success","#639922"):U("--color-ink-error","#e24b4a"),c=U("--color-surface","#ffffff"),l=U("--color-text-primary","#1a1a1a"),o=U("--color-border-soft","rgba(0,0,0,.12)"),n=document.createElement("div");n.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+c,"color:"+l,"border:1px solid "+o,"border-left:3px solid "+g,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var f=document.createElement("span");f.style.cssText="display:inline-flex;color:"+g+";flex:0 0 auto",f.innerHTML=N(x);var p=document.createElement("span");p.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",p.textContent=E;var w=document.createElement("span");w.hidden=!0,w.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",n.appendChild(f),n.appendChild(p),n.appendChild(w),I.appendChild(n),F(I),requestAnimationFrame(function(){n.style.opacity="1",n.style.transform="translateX(0)"});var d={key:H,el:n,countEl:w,count:1,timer:null,remaining:u,startedAt:B()};$[H]=d,R(d,u),n.addEventListener("mouseenter",function(){D(d)}),n.addEventListener("mouseleave",function(){C(d)}),n.addEventListener("focusin",function(){D(d)}),n.addEventListener("focusout",function(){C(d)})}}window.showToast=M})()});var st=ye(()=>{(function(){"use strict";var h="admin-details-open-state";function v(){try{return JSON.parse(localStorage.getItem(h))||{}}catch{return{}}}function u(T){try{localStorage.setItem(h,JSON.stringify(T))}catch{}}var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function B(T){return T==null?"":String(T).replace(/[&<>"']/g,function(g){return $[g]})}function A(){var T=document.querySelector("script[nonce]");return T&&T.nonce||""}function U(T,g){var c=A();return"<style"+(T?' id="'+B(T)+'"':"")+(c?' nonce="'+B(c)+'"':"")+">"+(g||"")+"</style>"}var N='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',F=[],R=null;function D(T){if(!T)return!1;for(var g=T,c=null;g&&g!==document.documentElement;c=g,g=g.parentElement)if(g.style&&g.style.display==="none"||g.tagName==="DETAILS"&&!g.open&&!(c&&c.tagName==="SUMMARY"))return!1;return!!(T.offsetParent||T.getClientRects().length)}function C(){var T=document.hidden;F.forEach(function(g){var c=typeof g.el=="function"?g.el():g.el,l=!T&&D(c);if(l&&!g.timer){if(g.immediate!==!1)try{g.tick()}catch{}g.timer=setInterval(g.tick,g.intervalMs)}else!l&&g.timer&&(clearInterval(g.timer),g.timer=0)})}function y(T){var g={el:T.el,intervalMs:T.intervalMs,tick:T.tick,immediate:T.immediate,timer:0};return F.push(g),R||(R=new MutationObserver(function(){C()}),R.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",C),document.addEventListener("visibilitychange",C),document.addEventListener("admin-panel-rendered",C)),C(),function(){g.timer&&clearInterval(g.timer);var l=F.indexOf(g);l!==-1&&F.splice(l,1)}}function M(T){let g=document.createElement("textarea");g.value=T,g.setAttribute("readonly",""),g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select();let c=!1;try{c=!!document.execCommand("copy")}catch{c=!1}return document.body.removeChild(g),c}function E(T,g){let c=n=>window.ServerI18n?window.ServerI18n.t(n):n,l=n=>(window.showToast&&window.showToast(n?g||c("sohCopied"):c("sohCopyFailed"),n),n);if(!T)return Promise.resolve(l(!1));let o=navigator.clipboard;return o&&typeof o.writeText=="function"?o.writeText(T).then(()=>l(!0),()=>l(M(T))):Promise.resolve(l(M(T)))}let x=/^[=+\-@\t\r\n]/;function I(T){let g=T==null?"":String(T);return typeof T=="string"&&x.test(g)?"'"+g:g}function H(T){let g=I(T);return/[",\r\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}window.AdminUtils={csvCell:H,csvSafeText:I,copyText:E,DETAILS_STATE_KEY:h,loadDetailsState:v,saveDetailsState:u,escapeHtml:B,cspNonce:A,styleTag:U,closeIcon:N,pollWhileVisible:y}})()});var ot=ye(()=>{(function(){"use strict";function h(v,u,$,B){let A=v.querySelector("[data-route-breadcrumb]");if(!A)return;let U=Array.from(v.querySelectorAll(".admin-dash-nav-row[data-route]")),N=U.find(I=>I.dataset.route===u)||U.find(I=>I.dataset.route===$);if(!N){A.replaceChildren(),A.hidden=!0;return}let F="",R=N.previousElementSibling;for(;R;){if(R.classList.contains("admin-dash-nav-label")){F=(R.querySelector("[data-i18n]")||R).textContent.trim();break}R=R.previousElementSibling}let C=(N.querySelector("[data-i18n]")||N.querySelector("span:nth-child(2)")||N).textContent.trim(),y=B?v.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,M=y?(y.querySelector(".admin-tabs-btn-label")||y).textContent.trim():"",E=[F===C?"":F,C,M].filter(Boolean),x=document.createDocumentFragment();E.forEach((I,H)=>{if(H){let c=document.createElement("span");c.className="admin-dash-breadcrumb-sep",c.setAttribute("aria-hidden","true"),c.textContent="\u203A",x.appendChild(c)}let T=document.createElement("span"),g=H===E.length-1;T.className="admin-dash-breadcrumb-item"+(g?" is-current":""),g&&T.setAttribute("aria-current","page"),T.textContent=I,x.appendChild(T)}),A.replaceChildren(x),A.hidden=E.length===0}window.AdminBreadcrumb={render:h}})()});var rt=ye(()=>{(function(h){"use strict";let v={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function u(M){return Array.isArray(M.sections)?M.sections:M.section?[M.section]:[]}function $(M){return!!v[M]}function B(M){return v[M]||null}let A={moderation:{filters:"blacklist",fingerprints:"bans"}},U={viewer:{themes:"sec-themes",defaults:"sec-viewer-config-defaults",fields:"sec-viewer-config-defaults",page:"sec-viewer-theme",limits:"sec-viewer-config-limits"}};function N(M,E){if(!E)return null;let x=U[M]&&U[M][E];if(x)return{tab:null,section:x};let I=v[M];if(!I)return null;let H=I.tabs.find(T=>T.folds&&T.folds[E]);return H?{tab:H.slug,section:H.folds[E]}:null}function F(M,E){let x=v[M];if(!x)return null;let I=c=>x.tabs.some(l=>l.slug===c),H=N(M,E);if(H)return H.tab;let T=A[M]?.[E];if(T&&I(T))return T;if(E&&I(E))return E;let g=h.AdminRouter?.tabMemory?.get?.(M);return g&&I(g)?g:x.defaultTab}function R(M,E,x){let I=v[M];if(!I)return null;let H=document.createElement("div");return H.className="admin-tabs-strip",H.dataset.nav=M,H.setAttribute("role","tablist"),H.setAttribute("aria-label",M+" tabs"),I.tabs.forEach(T=>{let g=document.createElement("button");g.type="button",g.className="admin-tabs-btn"+(T.slug===E?" is-active":""),g.dataset.nav=M,g.dataset.tab=T.slug,g.setAttribute("role","tab"),g.setAttribute("aria-selected",T.slug===E?"true":"false");let c=document.createElement("span");c.className="admin-tabs-btn-label",c.textContent=T.labelKey?ServerI18n.t(T.labelKey):T.label,g.appendChild(c);let l=document.createElement("span");l.className="admin-tabs-btn-count",l.dataset.tabCount=T.slug,l.textContent=D[M]&&D[M][T.slug]?D[M][T.slug]:"",g.appendChild(l),g.addEventListener("click",()=>{typeof x?.onSelect=="function"&&x.onSelect(T.slug)}),H.appendChild(g)}),H}let D={};function C(M,E,x){if(!v[M])return;D[M]=D[M]||{},D[M][E]=x==null?"":String(x);let I=document.querySelector('.admin-tabs-strip[data-nav="'+M+'"] [data-tab-count="'+E+'"]');I&&(I.textContent=D[M][E])}function y(M,E,x){let I=v[M];!I||!x||I.tabs.forEach(H=>{let T=H.slug===E,g=new Map;u(H).forEach(c=>{let l=x.querySelector("#"+c);if(!l)return;l.style.display=T?"":"none";let o=g.get(l.parentElement);T&&H.folds&&o&&o.nextElementSibling!==l&&o.after(l),g.set(l.parentElement,l)})})}h.AdminTabs={hasTabsFor:$,getConfig:B,foldFor:N,resolveActiveTab:F,renderTabStrip:R,applyTabSectionVisibility:y,setTabCount:C}})(window)});var dt=ye(()=>{(function(h,v){"use strict";let u="data-quick-action-host",$="admin-quick-action-bar";function B(R){if(R?.host instanceof HTMLElement)return R.host;let D=v.querySelector(".admin-dash-main");if(!D)return v.body;let C=D.querySelector(`[${u}]`);if(!C){C=v.createElement("div"),C.setAttribute(u,"");let y=D.querySelector(".admin-dash-topbar"),E=D.querySelector("[data-admin-tabs-host]")||y;E&&E.parentNode?E.insertAdjacentElement("afterend",C):D.prepend(C)}return C}function A(R,D){typeof h.showToast=="function"&&h.showToast(R,D!==!1)}function U({label:R,undoLabel:D,onUndo:C,windowMs:y}){let M=B(),E=M.querySelector("."+$);E&&E.remove();let x=v.createElement("div");x.className=$,x.setAttribute("role","status"),x.setAttribute("aria-live","polite");let I=v.createElement("span");I.className=$+"-text",I.textContent="\u2713 "+R,x.appendChild(I);let H=v.createElement("button");H.type="button",H.className=$+"-undo",H.textContent="\u21B6 "+(D||ServerI18n.t("qaUndoLabel")),x.appendChild(H);let T=()=>{x.classList.add("is-leaving"),setTimeout(()=>x.remove(),200)},g=setTimeout(T,y||5e3);return H.addEventListener("click",async()=>{clearTimeout(g),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await C(),A(ServerI18n.t("qaUndone"),!0)}catch(c){A(ServerI18n.t("qaUndoFailed",{msg:c?.message||String(c)}),!1)}finally{T()}}),M.appendChild(x),requestAnimationFrame(()=>x.classList.add("is-entering")),x}function N(R){if(!R||typeof R!="object")return;let D=R.label||ServerI18n.t("qaDone");R.toast!==!1&&A(D,!0),R.undo&&typeof R.undo.run=="function"&&U({label:D,undoLabel:R.undo.label,onUndo:R.undo.run,windowMs:R.undo.window})}function F(){v.querySelectorAll("."+$).forEach(R=>R.remove())}h.AdminQuickAction={fire:N,dismissAll:F}})(window,document)});var lt=ye(()=>{(function(){"use strict";let h="admin-hud-modal-root",v=null,u=null,$='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function B(){let F=document.getElementById(h);return F?Array.prototype.slice.call(F.querySelectorAll($)).filter(R=>R.offsetParent!==null||R===document.activeElement):[]}function A(F){let R=document.getElementById(h);if(R&&R.remove(),v&&(v(F),v=null),document.removeEventListener("keydown",U),u&&typeof u.focus=="function")try{u.focus()}catch{}u=null}function U(F){if(F.key==="Escape"){F.preventDefault(),A(!1);return}if(F.key==="Tab"){let R=B();if(!R.length){F.preventDefault();return}let D=R[0],C=R[R.length-1],y=document.activeElement;F.shiftKey?(y===D||!R.includes(y))&&(F.preventDefault(),C.focus()):(y===C||!R.includes(y))&&(F.preventDefault(),D.focus())}}function N(F){return new Promise(R=>{v&&A(!1),v=R,u=document.activeElement;let{icon:D="\u26A0",title:C=ServerI18n.t("hudConfirmTitle"),subtitle:y="",severity:M="warn",body:E="",titleText:x,bodyText:I,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:T=ServerI18n.t("cancel"),width:g=480}=F||{},c=document.createElement("div");c.id=h,c.className=`admin-hud-modal admin-hud-modal--${M}`,c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-hud-modal-title");let l=y?`<div class="admin-hud-modal__subtitle">${y}</div>`:"",o=typeof E=="string"?E:"",n=typeof E!="string"&&E&&E.nodeType;if(c.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${g}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${D}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${C}</div>
              ${l}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${T}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,x!=null){let p=c.querySelector(".admin-hud-modal__title");p&&(p.textContent=String(x))}if(I!=null){let p=c.querySelector("[data-modal-body]");p&&(p.textContent=String(I))}if(n){let p=c.querySelector("[data-modal-body]");p.innerHTML="",p.appendChild(E)}c.addEventListener("click",function(p){let w=p.target.closest("[data-modal-action]");w&&(p.stopPropagation(),A(w.dataset.modalAction==="confirm"))}),document.body.appendChild(c),document.addEventListener("keydown",U);let f=M==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{c.querySelector(`.admin-hud-modal__btn--${f}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:N}})()});var ct=ye(()=>{(function(){"use strict";var h=8,v=30;function u(M,E){return window.ServerI18n?window.ServerI18n.t(M,E):M}function $(M,E){return M?M.length>E?M.slice(0,E)+"\u2026":M:""}function B(M){return u(M==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function A(M,E){return M==="keyword"?$(E,v):E.slice(0,h)}async function U(M,E,x){if(!E)return{ok:!1,error:"empty-value"};try{var I={type:M==="keyword"?"keyword":"fingerprint",value:E};x&&(I.reason=x);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function N(M,E,x){if(!M)return{ok:!1,error:"empty-fingerprint"};var I=parseInt(E||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:M,duration_s:I,reason:x||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function F(M){if(!M)return{ok:!1,error:"empty-message-id"};try{var E=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:M})});return E.ok?{ok:!0}:{ok:!1,error:"HTTP "+E.status}}catch(x){return{ok:!1,error:x&&x.message||"network"}}}function R(M,E){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:u("lfBlockTitle"),subtitle:u("cfmSubBlockFuture"),severity:"danger",bodyText:u("blockConfirm").replace("{label}",B(M)).replace("{display}",A(M,E)),confirmLabel:u("lfBlockTitle")}):(window.showToast&&window.showToast(u("blockFailed"),!1),Promise.resolve(!1))}function D(M,E,x){window.showToast&&window.showToast(M?u(E,x||{}):u("blockFailed"),!!M)}async function C(M,E){if(!M||(E=E||{},!E.skipConfirm&&!await R("keyword",M)))return!1;var x=await U("keyword",M);return D(x.ok,"blockFallback",{label:B("keyword"),display:A("keyword",M)}),x.ok}async function y(M,E){if(!M||(E=E||{},!E.skipConfirm&&!await R("fingerprint",M)))return!1;var x=await U("fingerprint",M,E.reason);return D(x.ok,"blockFallback",{label:B("fingerprint"),display:A("fingerprint",M)}),x.ok}window.AdminModeration={callBlock:U,banFingerprint:N,recall:F,blockKeyword:C,blockFingerprint:y}})()});var ut=ye(()=>{(function(){"use strict";function v(N){let F=document.createElement("div");return F.className="admin-skel-slow",F.hidden=!0,F.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",N.appendChild(F),setTimeout(function(){F.isConnected&&(F.hidden=!1)},3e3),N}function u(N,F){let R=document.createElement("div");if(R.className="admin-skel "+(N||""),F)for(let D in F)R.style[D]=F[D];return R}function $({rows:N=8}={}){let F=document.createElement("div");F.className="admin-skel-card admin-skel-list";let R=document.createElement("div");R.className="admin-skel-list__head",[60,80,140,200,80].forEach(D=>{R.appendChild(u("admin-skel-bar",{width:D+"px",height:"10px"}))}),F.appendChild(R);for(let D=0;D<N;D++){let C=document.createElement("div");C.className="admin-skel-list__row",C.appendChild(u("admin-skel-circle",{width:"24px",height:"24px"}));let y=document.createElement("div");y.className="admin-skel-list__col",y.appendChild(u("admin-skel-bar",{width:50+D*13%40+"%",height:"10px"})),y.appendChild(u("admin-skel-bar",{width:30+D*7%30+"%",height:"8px"})),C.appendChild(y),C.appendChild(u("admin-skel-bar",{width:"60px",height:"10px"})),F.appendChild(C)}return v(F)}function B({cols:N=4}={}){let F=document.createElement("div");F.className="admin-skel-stats",F.style.gridTemplateColumns=`repeat(${N}, 1fr)`;for(let R=0;R<N;R++){let D=document.createElement("div");D.className="admin-skel-card admin-skel-tile",D.appendChild(u("admin-skel-bar",{width:"60px",height:"8px"})),D.appendChild(u("admin-skel-bar",{width:"80px",height:"28px"})),D.appendChild(u("admin-skel-bar",{width:"100%",height:"18px"})),D.appendChild(u("admin-skel-bar",{width:"90px",height:"8px"})),F.appendChild(D)}return v(F)}function A(){let N=document.createElement("div");N.className="admin-skel-card admin-skel-chart";let F=document.createElement("div");F.className="admin-skel-chart__head",F.appendChild(u("admin-skel-bar",{width:"120px",height:"10px"}));let R=document.createElement("span");R.style.flex="1",F.appendChild(R),F.appendChild(u("admin-skel-bar",{width:"80px",height:"10px"})),N.appendChild(F);let D=document.createElement("div");D.className="admin-skel-chart__body";let C=document.createElement("div");C.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>C.appendChild(u("admin-skel-bar",{width:"24px",height:"6px"}))),D.appendChild(C);let y=document.createElement("div");return y.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(E=>y.appendChild(u("admin-skel-bar admin-skel-chart__bar",{height:E+"%"}))),D.appendChild(y),N.appendChild(D),v(N)}function U(N,F){let R={listRows:$,statsTiles:B,chart:A}[N];return R?R(F||{}).outerHTML:""}window.AdminSkeletons={listRows:$,statsTiles:B,chart:A,html:U}})()});var mt=ye(()=>{(function(){"use strict";let h={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},v={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:h.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:h.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:h.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:h.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:h.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:h.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:h.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:h.cyan}};function u(B){let{icon:A="\xB7",title:U="",desc:N="",accent:F=h.cyan,ctaAccent:R,actionLabel:D,action:C,extra:y}=B||{},M=document.createElement("div");M.className="admin-empty",M.dataset.empty="1",M.style.setProperty("--admin-empty-accent",F),R&&M.style.setProperty("--admin-empty-cta",R);let E=document.createElement("div");if(E.className="admin-empty__icon",E.textContent=A,M.appendChild(E),U){let x=document.createElement("div");x.className="admin-empty__title",x.textContent=U,M.appendChild(x)}if(N){let x=document.createElement("div");x.className="admin-empty__desc",x.textContent=N,M.appendChild(x)}if(D){let x=document.createElement("button");x.type="button",x.className="admin-empty__btn",x.textContent=D,typeof C=="function"&&x.addEventListener("click",C),M.appendChild(x)}if(y){let x=document.createElement("div");x.className="admin-empty__extra",typeof y=="string"?x.innerHTML=y:x.appendChild(y),M.appendChild(x)}return M}function $(B){let A=v[B];if(!A)return u({title:ServerI18n.t("emptyNoData"),desc:""});let U=Object.assign({},A,{title:A.titleKey?ServerI18n.t(A.titleKey):A.title,desc:A.descKey?ServerI18n.t(A.descKey):A.desc,actionLabel:A.actionLabelKey?ServerI18n.t(A.actionLabelKey):A.actionLabel});return u(U)}window.AdminEmpty={render:$,renderCustom:u,PRESETS:v}})()});var pt=ye(()=>{(function(){"use strict";var h=8;function v(U){return U?String(U).slice(0,h):""}function u(U){if(!U||typeof U!="object")return{nickname:"",fp:"",ip:""};var N=U.fingerprint||U.fp||U.hash||"",F=U.clientIp||U.client_ip||U.ip||"",R=U.nickname||U.nick||"";return{nickname:String(R||""),fp:String(N||""),ip:String(F||"")}}function $(U){if(!U||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var N=new TextEncoder().encode(String(U));return window.crypto.subtle.digest("SHA-256",N).then(function(F){var R=Array.from(new Uint8Array(F));return R.map(function(D){return D.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function B(U){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var N=document.getElementById("sec-fingerprints");if(N&&!N.open&&(N.open=!0),N)try{N.scrollIntoView({behavior:"smooth",block:"start"})}catch{}$(U).then(function(F){if(F)var R=0,D=setInterval(function(){R+=1;var C=document.querySelector('[data-fp-hash="'+F+'"]');if(C){clearInterval(D),C.classList.add("admin-identity-flash"),setTimeout(function(){C.classList.remove("admin-identity-flash")},2e3);try{C.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else R>12&&clearInterval(D)},250)})}function A(U){U=U||{};var N=U.nickname||"",F=U.fp||"",R=U.ip||"",D=!!U.compact,C=typeof U.onNicknameClick=="function"?U.onNicknameClick:null,y=typeof U.onFpClick=="function"?U.onFpClick:B,M=document.createElement("span");M.className="admin-identity-row";var E;if(C?(E=document.createElement("button"),E.type="button",E.className="admin-identity-nick is-clickable",E.addEventListener("click",function(c){c.stopPropagation(),C(N)})):(E=document.createElement("span"),E.className="admin-identity-nick"),N)E.textContent="@"+N;else{var x="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var I=ServerI18n.t("anonymousPlaceholder");I&&I!=="anonymousPlaceholder"&&(x=I)}}catch{}E.textContent="@"+x,E.classList.add("is-guest")}if(N&&(E.title=N),M.appendChild(E),F){var H;if(y?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(c){c.stopPropagation(),y(F)})):(H=document.createElement("span"),H.className="admin-identity-fp"),F==="new"){var T=document.createElement("span");T.className="admin-identity-dot",H.appendChild(T),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+v(F);H.title=F,M.appendChild(H)}if(R&&!D){var g=document.createElement("span");g.className="admin-identity-ip",g.textContent=R,g.title=R,M.appendChild(g)}return M}window.AdminIdentity={render:A,parse:u,focusFingerprint:B,hashFp:$,FP_DISPLAY_LEN:h}})()});var ft=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function v(i,a){return window.csrfFetch(i,a)}function u(i,a){return window.showToast(i,a)}let $="default",B=[],A={},U=null,N=!1,F="sec-themes";function R(){let i=a=>h(ServerI18n.t(a));return`
      <div id="${F}" class="admin-style-themes lg:col-span-2">
        <div class="admin-style-themes-head">
          <span class="admin-ui-group-label" data-i18n="styleThemePacks">${i("styleThemePacks")}</span>
          <span class="admin-style-themes-actions">
            <button type="button" class="admin-ui-action" id="themeNewBtn">${i("themesNewBtn")}</button>
            <button type="button" id="themeReloadBtn" class="admin-ui-action admin-theme-reload-action">${i("themesReloadBtn")}</button>
          </span>
        </div>
        <div id="themesList">
          <span class="theme-pack-muted" style="padding:14px">${i("themesLoading")}</span>
        </div>
        <!-- \u300C<\u4E3B\u984C> \xB7 \u7D30\u90E8\u8A2D\u5B9A\u300D\uFF08\u8A2D\u8A08\u7A3F 08 \xB7 T1\uFF09\u3002\u4E3B\u984C\u6A94\u672C\u8EAB\u662F repo \u88E1\u7684
             YAML\uFF0C\u6539\u5B83\u7B49\u65BC\u6539\u7A0B\u5F0F\u78BC\uFF1B\u9019\u88E1\u8ABF\u7684\u503C\u5B58\u6210\u4E00\u5C64\u8986\u5BEB\uFF0C\u758A\u5728 YAML \u4E4B\u4E0A\u3002
             \u63CF\u908A\u8207\u9670\u5F71\u662F\u6A23\u5F0F\u8868\u7684\u5169\u5217\uFF0C\u9019\u88E1\u5269\u4E0B\u5C11\u7528\u7684\u5B57\u578B\u8207\u9810\u8A2D\u984F\u8272\u3002 -->
        <details class="admin-dsp2-fold admin-style-themes-detail" data-theme-detail-fold>
          <summary id="themeDetailLabel">\u2014</summary>
          <div class="admin-ui-group" id="themeDetail" data-theme-detail>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvFont">${i("themeDetailFont")}</label>
              <span class="val">
                <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvColor">${i("themeDetailColor")}
                <span class="sub">${i("themeDetailColorHint")}</span>
              </label>
              <span class="val">
                <input type="color" class="admin-ui-input" data-theme-ov="color" id="themeOvColor" />
                <button type="button" class="admin-ui-action" data-theme-ov-clear="color" hidden>${i("themeDetailFontInherit")}</button>
              </span>
            </div>
          </div>
          <div class="theme-pack-sample" id="themeDetailPreview">
            <span class="theme-pack-sample-label">${i("themesSampleLabel")}</span>
            <span class="theme-pack-sample-line" data-theme-preview-line>
              <span class="theme-pack-sample-nick">${h(x)}</span>${h(I)}
            </span>
          </div>
        </details>
      </div>`}function D(){if(document.getElementById(F))return!1;let i=document.getElementById("settings-grid");return i?(i.insertAdjacentHTML("beforeend",R()),!0):!1}function C(){document.dispatchEvent(new CustomEvent("admin-themes-changed",{detail:{active:$}}))}function y(){let i=document.getElementById("themesList");i&&window.AdminSkeletons&&(i.innerHTML="",i.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function M(i){i&&N||y();try{let a=await v("/admin/themes");if(!a.ok)return!1;let m=await a.json();return $=m.active||"default",B=m.themes||[],A=m.overrides||{},U=m.style_defaults||null,N=!0,o(B,$),p(),C(),!0}catch(a){return console.warn("[Themes] Failed to fetch themes:",a),!1}}async function E(i){let a;try{a=await v("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})})}catch{return{ok:!1,error:""}}return a.ok?($=i,await M(!0)||(U=null,o(B,i),p(),C()),{ok:!0,error:""}):{ok:!1,error:(await a.json().catch(()=>({}))).error||""}}var x="\u5C0F\u660E",I="\u8B1B\u5F97\u597D\uFF01+1";function H(i,a){var m=String(i||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(m)?m:a}function T(i){var a=String(i||"").trim(),m=a.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);return m&&(a="#"+m[1]+m[1]+m[2]+m[2]+m[3]+m[3]),/^[0-9a-fA-F]{6}$/.test(a)&&(a="#"+a),/^#[0-9a-fA-F]{6}$/.test(a)?a.toLowerCase():null}function g(i){var a=A[i.name]||{},m=U&&U.Color&&U.Color.global;return T(a.color)||T(m)||"#ffffff"}function c(i){var a=i.styles||{},m=g(i),S=["color:"+m];if(a.textStroke){var k=Math.max(0,Math.min(6,Number(a.strokeWidth)||0));S.push("-webkit-text-stroke:"+k+"px "+H(a.strokeColor,"#000000")),S.push("paint-order:stroke fill")}if(a.textShadow){var L=Math.max(0,Math.min(40,Number(a.shadowBlur)||0));S.push("text-shadow:0 0 "+L+"px "+m)}var O=(A[i.name]||{}).font_family||U&&U.FontFamily&&U.FontFamily.global;return O&&/^[\w\s-]{1,40}$/.test(O)&&S.push("font-family:'"+O+"', var(--font-sans)"),i.font&&Number(i.font.weight)&&S.push("font-weight:"+Math.max(100,Math.min(900,Number(i.font.weight)))),S.join(";")}function l(i){var a=i.bg&&i.bg.gradient;return a&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(a).trim())?"background:"+String(a).trim():""}function o(i,a){let m=document.getElementById("themesList");if(m){if(m.innerHTML="",i.length===0){m.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}i.forEach(S=>{let k=S.name===a,L=h(ServerI18n.t("theme_"+S.name)!=="theme_"+S.name?ServerI18n.t("theme_"+S.name):S.label||S.name),O=document.createElement("div");O.className=`theme-pack-card${k?" is-active":""}`,O.innerHTML=`
        <div class="theme-pack-name">${L}</div>
        <div class="theme-pack-sample" style="${h(l(S))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${h(c(S))}">
            <span class="theme-pack-sample-nick">${h(x)}</span>
            ${h(I)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${S.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${h(S.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${k?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${h(S.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,m.appendChild(O)}),m.querySelectorAll(".theme-delete-btn").forEach(S=>{S.addEventListener("click",async()=>{let k=S.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let O=await v("/admin/themes/"+encodeURIComponent(k),{method:"DELETE"});if(!O.ok)throw new Error("HTTP "+O.status);u(ServerI18n.t("themeDeleted"),!0),M()}catch{u(ServerI18n.t("themesDeleteFailed"),!1)}})}),m.querySelectorAll(".theme-activate-btn").forEach(S=>{S.addEventListener("click",async()=>{let k=await E(S.dataset.theme);k.ok?u(ServerI18n.t("themeActivated"),!0):u(k.error||ServerI18n.t("setThemeFailed"),!1)})})}}function n(){return B.find(i=>i.name===$)||null}function f(i,a){let m=A[$]||{};if(m[i])return m[i];let S=a&&a.styles||{};return i==="stroke"?S.textStroke?Number(S.strokeWidth)>=3?"thick":"thin":"none":S.textShadow?Number(S.shadowBlur)>=10?"strong":"soft":"none"}function p(){let i=document.getElementById("themeDetail"),a=document.getElementById("themeDetailLabel");if(!i||!a)return;let m=n();if(!m)return;let S=ServerI18n.t("theme_"+m.name)!=="theme_"+m.name?ServerI18n.t("theme_"+m.name):m.label||m.name;a.textContent=ServerI18n.t("themeDetailGroup",{name:S});let k=A[$]||{},L=i.querySelector('[data-theme-ov="color"]');L&&(L.value=T(k.color)||g(m));let O=i.querySelector('[data-theme-ov-clear="color"]');O&&(O.hidden=!k.color),d(m),s(m)}var w=null;async function d(i){let a=document.getElementById("themeOvFont");if(!a)return;if(!w)try{let k=await fetch("/fonts",{credentials:"same-origin"});w=k.ok?(await k.json()).fonts||[]:[]}catch{w=[]}let S=(A[$]||{}).font_family||"";a.innerHTML=`<option value="">${h(ServerI18n.t("themeDetailFontInherit"))}</option>`+w.map(k=>{let L=String(k.name||k);return`<option value="${h(L)}"${L===S?" selected":""}>${h(L)}</option>`}).join("")}function s(i){let a=document.querySelector("[data-theme-preview-line]");a&&a.setAttribute("style",c(i))}async function r(i){try{let a=await v("/admin/themes/"+encodeURIComponent($)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error("HTTP "+a.status);u(ServerI18n.t("themeDetailSaved"),!0),await M(!0)}catch{u(ServerI18n.t("themeDetailSaveFailed"),!1)}}function b(){let i=document.getElementById("themeDetail");i&&(i.addEventListener("change",a=>{let m=a.target.closest("[data-theme-ov]");m&&r({[m.getAttribute("data-theme-ov")]:m.value})}),i.addEventListener("click",a=>{let m=a.target.closest("[data-theme-ov-clear]");m&&r({[m.getAttribute("data-theme-ov-clear")]:""})}))}function e(){let i=document.getElementById("themeNewBtn");i&&i.addEventListener("click",async()=>{let a=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!a||!a.trim()))try{let m=await v("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:a.trim(),base:$})});if(!m.ok)throw new Error("HTTP "+m.status);u(ServerI18n.t("themeCreated"),!0),M()}catch{u(ServerI18n.t("themesNewFailed"),!1)}})}function t(){let i=D();if(M(),!i)return;b(),e();let a=document.getElementById("themeReloadBtn");a&&a.addEventListener("click",async()=>{try{(await v("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(u(ServerI18n.t("themesReloaded")),M()):u(ServerI18n.t("themesReloadFailed"),!1)}catch{u(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t,segOf(i){let a=n();return N&&a?f(i,a):null},activeStyles(){let i=n();return i&&i.styles||{}},styleDefaults(){return U},activate:E,refresh(){return M(!0)},setSeg(i,a){return i!=="stroke"&&i!=="shadow"?Promise.resolve():r({[i]:a})}}})()});var vt=ye(()=>{(function(){"use strict";function h(k,L){return window.csrfFetch(k,L)}function v(k,L){return window.showToast(k,L)}var u=window.ServerI18n;function $(k,L){return window.AdminUtils.styleTag(k,L)}let B=null;function A(){let k=document.getElementById("effectEditModal");return k?Array.from(k.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(L=>!L.hasAttribute("disabled")&&L.getAttribute("aria-hidden")!=="true"):[]}function U(k){let L=document.getElementById("effectEditModal");if(!L||L.classList.contains("hidden"))return;if(k.key==="Escape"){k.preventDefault(),N();return}if(k.key!=="Tab")return;let O=A();if(O.length===0){k.preventDefault();return}let K=O[0],_=O[O.length-1],P=document.activeElement;k.shiftKey&&P===K?(k.preventDefault(),_.focus()):!k.shiftKey&&P===_&&(k.preventDefault(),K.focus())}function N(){let k=document.getElementById("effectEditModal");k&&(k.classList.add("hidden"),k.classList.remove("flex"),k.removeEventListener("keydown",U),B&&(B.focus(),B=null))}let F={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(k){return!!F[k]}};let R=new Map,D=new Map;function C(k){if(!k||!k.styleId||!k.keyframes)return;let L="dme-user-"+k.styleId;if(document.getElementById(L))return;let O=document.createElement("style");O.id=L,O.textContent=k.keyframes,document.head.appendChild(O)}async function y(k){if(R.has(k))return R.get(k);if(D.has(k))return D.get(k);let L=(async()=>{try{let O=await h(`/admin/effects/${encodeURIComponent(k)}/content`);if(!O.ok)throw new Error("content fetch failed");let K=await O.json(),_=K&&K.content||"";if(!_)throw new Error("empty content");let P=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:_,params:{}})});if(!P.ok)throw new Error("preview failed");let j=await P.json();if(!j||!j.animation)throw new Error("no animation");return C(j),R.set(k,j),j}catch{return R.set(k,"failed"),null}finally{D.delete(k)}})();return D.set(k,L),L}function M(k,L){let O=k.querySelector(".effect-demo-text");if(!O)return;O.style.animation=L.animation||"",L.animationComposition&&(O.style.animationComposition=L.animationComposition),O.style.animationPlayState="paused";let K=x();K&&K.observe(k)}let E=null;function x(){return E||(typeof IntersectionObserver>"u"?null:(E=new IntersectionObserver(k=>{k.forEach(L=>{let O=L.target.querySelector(".effect-demo-text");O&&(O.style.animationPlayState=L.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),E))}let I=null;function H(k){let L=document.getElementById("effectPreviewParams");if(!L)return{};let O;try{let _=k.split(`
`),P=!1,j=0,z=null,X=0,Z={};for(let V of _){let ee=V.trimStart(),W=V.length-ee.length;if(ee.startsWith("params:")){P=!0,j=W;continue}if(!P||ee===""||ee.startsWith("#"))continue;if(W<=j&&!ee.startsWith("params:")){P=!1;continue}let Q=ee.match(/^([a-zA-Z0-9_]+):\s*$/);if(Q&&W===j+2){z=Q[1],X=W,Z[z]={};continue}if(z&&W>X){let ne=ee.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let re=ne[1],le=ne[2].trim();if((le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),re!=="options"){let ue=Number(le);Z[z][re]=isNaN(ue)?le:ue}}if(ee.startsWith("- value:")){Z[z].options||(Z[z].options=[]);let re=ee.match(/^- value:\s*(.+)$/);if(re){let le=re[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),Z[z].options.push({value:le,label:le})}}if(ee.startsWith("label:")&&Z[z].options&&Z[z].options.length>0){let re=ee.match(/^label:\s*(.+)$/);if(re){let le=re[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),Z[z].options[Z[z].options.length-1].label=le}}}}O=Z}catch{O={}}L.innerHTML="";let K={};for(let[_,P]of Object.entries(O||{})){let j=P.type||"float",z=document.createElement("div");z.className="flex flex-col gap-0.5";let X=document.createElement("label");if(X.className="font-mono",X.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",X.textContent=`${_} (${j})`,z.appendChild(X),j==="select"&&Array.isArray(P.options)){let Z=document.createElement("select");Z.className="admin-ui-select",Z.style.cssText="font-size:13px;padding:4px 8px",Z.dataset.paramKey=_;for(let V of P.options){let ee=document.createElement("option");ee.value=V.value,ee.textContent=V.label||V.value,V.value===String(P.default)&&(ee.selected=!0),Z.appendChild(ee)}K[_]=String(P.default||P.options[0]&&P.options[0].value||""),Z.addEventListener("change",()=>{c()}),z.appendChild(Z)}else{let Z=P.min!=null?P.min:0,V=P.max!=null?P.max:10,ee=P.step!=null?P.step:j==="int"?1:.1,W=P.default!=null?P.default:Z,Q=document.createElement("div");Q.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=Z,ne.max=V,ne.step=ee,ne.value=W,ne.dataset.paramKey=_,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let re=document.createElement("span");re.className="font-mono",re.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",re.textContent=String(W),ne.addEventListener("input",()=>{re.textContent=ne.value,c()}),Q.appendChild(ne),Q.appendChild(re),z.appendChild(Q),K[_]=W}L.appendChild(z)}return K}function T(){let k=document.getElementById("effectPreviewParams");if(!k)return{};let L={};return k.querySelectorAll("[data-param-key]").forEach(O=>{L[O.dataset.paramKey]=O.type==="range"?Number(O.value):O.value}),L}async function g(){let k=document.getElementById("effectEditModalTextarea"),L=document.getElementById("effectPreviewText"),O=document.getElementById("effectPreviewStyle"),K=document.getElementById("effectPreviewError");if(!k||!L||!O)return;let _=k.value;if(!_||_===u.t("effectLoadContent")||_===u.t("effectsNetworkError"))return;let P=T();K?.classList.add("hidden");try{let j=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:_,params:P})}),z=await j.json().catch(()=>({}));j.ok?(O.textContent=z.keyframes||"",L.style.animation=z.animation||"none",L.style.animationComposition=z.animationComposition||""):(L.style.animation="none",O.textContent="",K&&(K.textContent=z.error||u.t("previewFailed"),K.classList.remove("hidden")))}catch{L.style.animation="none",O.textContent="",K&&(K.textContent=u.t("effectsNetworkError"),K.classList.remove("hidden"))}}function c(){clearTimeout(I),I=setTimeout(()=>g(),500)}async function l(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",N),document.getElementById("effectEditModalCancel").addEventListener("click",N),document.getElementById("effectEditModal").addEventListener("click",_=>{_.target===_.currentTarget&&N()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let _=document.getElementById("effectEditModalTextarea");_&&(H(_.value),c())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{g()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let _=document.getElementById("effectEditModal"),P=document.getElementById("effectEditModalTextarea"),j=document.getElementById("effectEditModalSave"),z=_?.dataset.effectName;if(!(!z||!P)){j.disabled=!0;try{let X=await h("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:z,content:P.value})}),Z=await X.json().catch(()=>({}));X.ok?(v(Z.message||u.t("effectSaveFallback"),!0),N(),await f()):v(Z.error||u.t("saveFailed"),!1)}catch{v(u.t("effectsNetworkError"),!1)}finally{j.disabled=!1}}})),await f(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let _=document.getElementById("effectReloadBtn");_&&(_.disabled=!0);try{let P=await h("/admin/effects/reload",{method:"POST"}),j=await P.json().catch(()=>({}));P.ok?(v(j.message||u.t("effectsReloadFallback")),await f()):v(j.error||u.t("reloadFailed"),!1)}catch{v(u.t("effectsNetworkError"),!1)}finally{_&&(_.disabled=!1)}});async function k(_){if(!_)return;let P=new FormData;P.append("effectfile",_);try{let j=await h("/admin/effects/upload",{method:"POST",body:P}),z=await j.json().catch(()=>({}));j.ok?(v(z.message||u.t("effectUploadFallback")),await f()):v(z.error||u.t("uploadFailed"),!1)}catch{v(u.t("effectsNetworkError"),!1)}}let L=document.getElementById("effectUploadInput"),O=L&&!L.dataset.uploadWired;O&&(L.dataset.uploadWired="1"),(O?L:null)?.addEventListener("change",async _=>{await k(_.target.files?.[0]),_.target.value=""});let K=document.getElementById("sec-effects-mgmt");if(K){let _=0,P=Z=>{Z.preventDefault(),_++,K.classList.add("is-drag")},j=Z=>{Z.preventDefault()},z=Z=>{Z.preventDefault(),_=Math.max(0,_-1),_===0&&K.classList.remove("is-drag")},X=async Z=>{Z.preventDefault(),_=0,K.classList.remove("is-drag");let V=Z.dataTransfer?.files?.[0];if(V){if(!/\.(dme|dme\.zip)$/i.test(V.name)){v(u.t("fxToastBadExt"),!1);return}await k(V)}};K.addEventListener("dragenter",P),K.addEventListener("dragover",j),K.addEventListener("dragleave",z),K.addEventListener("drop",X)}}function o(k){let L=(k||"").toLowerCase();return L.startsWith("glow")||L.includes("neon")?"GLOW":L.startsWith("shake")?"SHAKE":L.startsWith("wave")||L.startsWith("spin")||L.startsWith("bounce")||L.startsWith("zoom")||L.startsWith("fire")||L.includes("motion")?"MOTION":L.startsWith("rainbow")||L.startsWith("blink")||L.includes("color")?"COLOR":L.startsWith("type")||L.includes("text")?"TEXT":"MISC"}let n={all:[],filter:"ALL",selected:null};async function f(){let k=document.getElementById("effectsList");if(k)try{let L=await h("/admin/effects");if(!L.ok){k.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsLoadFailed")+"</span>";return}let O=await L.json();n.all=O.effects||[],p(),d()}catch{k.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsNetworkError")+"</span>"}}function p(){let k=document.getElementById("effectsFilterRow");if(!k)return;let L={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};n.all.forEach(j=>{L[o(j.name)]+=1});let O=n.all.length,K=[["ALL",u.t("fxChipAll"),O],["GLOW",u.t("fxCatGlow"),L.GLOW],["MOTION",u.t("fxCatMotion"),L.MOTION],["COLOR",u.t("fxCatColor"),L.COLOR],["SHAKE",u.t("fxCatShake"),L.SHAKE],["TEXT",u.t("fxCatText"),L.TEXT]];L.MISC>0&&K.push(["MISC",u.t("fxCatMisc"),L.MISC]);let _=K.map(([j,z,X])=>`<span class="hud-filter-chip ${n.filter===j?"is-active":""}" data-effect-filter="${j}">${z} ${X}</span>`).join(""),P=k.querySelector("[data-toolbar-spacer]");P?(k.querySelectorAll("[data-effect-filter]").forEach(j=>j.remove()),P.insertAdjacentHTML("beforebegin",_)):k.innerHTML=_,k.querySelectorAll("[data-effect-filter]").forEach(j=>{j.addEventListener("click",()=>{n.filter=j.dataset.effectFilter,p(),d()})})}function w(k){let L=(j,z)=>{let X=document.querySelector(j);X&&(X.textContent=z==null?"\u2014":String(z))},O=k.length,K=k.filter(j=>j.enabled!==!1).length,_=new Set(k.map(j=>o(j.name))),P=k.filter(j=>!F[j.name]).length;L("[data-eflib-total]",O),L("[data-eflib-active]",K),L("[data-eflib-cats]",_.size),L("[data-eflib-user]",P)}function d(){let k=document.getElementById("effectsList");if(!k)return;let L=n.all;w(L);let O=n.filter==="ALL"?L:L.filter(K=>o(K.name)===n.filter);if(!O.length){k.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(L.length?u.t("fxNoFilterMatch"):u.t("noEffectsLoaded"))+"</span>";return}E&&E.disconnect(),k.innerHTML="",O.forEach(K=>{let _=o(K.name),P=_==="GLOW"?"is-glow":_==="COLOR"?"is-color":_==="TEXT"?"is-text":"",j=F[K.name]||"",z=!!j,X=document.createElement("div");X.className="hud-effect-card"+(n.selected===K.name?" is-selected":""),X.dataset.effectName=K.name,X.title=[K.description,`file: ${K.filename}`].filter(Boolean).join(`
`);var Z="effect_"+K.name;let V=u.t(Z)!==Z?u.t(Z):K.label||K.name,ee=z?"built-in":"user",W=j?`animation:${j};animation-play-state:paused;`:"";if(X.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${s(u.t("fxCat"+_.charAt(0)+_.slice(1).toLowerCase())||_)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${P}"><span class="effect-demo-text" style="${W}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${s(V)}</div>
          <div class="hud-effect-card-meta">${s(ee)} \xB7 ${s(K.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${u.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${u.t("lbDelete")}</button>
        </div>
      `,k.appendChild(X),j){let re=x();re&&re.observe(X)}else{let re=R.get(K.name);re&&re!=="failed"?(C(re),M(X,re)):re!=="failed"&&y(K.name).then(le=>{if(!le)return;let ue=k.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(K.name)}"]`);ue&&M(ue,le)})}X.addEventListener("click",re=>{re.target.closest("[data-role]")||a(K)});let Q=X.querySelector('[data-role="edit"]'),ne=X.querySelector('[data-role="delete"]');Q.addEventListener("click",async()=>{let re=document.getElementById("effectEditModal"),le=document.getElementById("effectEditModalTitle"),ue=document.getElementById("effectEditModalFile"),me=document.getElementById("effectEditModalTextarea"),Te=document.getElementById("effectEditModalSave");if(!re)return;B=document.activeElement instanceof HTMLElement?document.activeElement:null,le.textContent=K.label||K.name,ue.textContent=K.filename,me.value=u.t("effectLoadContent"),me.disabled=!0,Te.disabled=!0,re.dataset.effectName=K.name,re.classList.remove("hidden"),re.classList.add("flex"),re.addEventListener("keydown",U),me.focus();let Ee=document.getElementById("effectPreviewText"),Le=document.getElementById("effectPreviewStyle"),oe=document.getElementById("effectPreviewError"),se=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),Le&&(Le.textContent=""),oe&&oe.classList.add("hidden"),se&&(se.innerHTML="");try{let ce=await h(`/admin/effects/${encodeURIComponent(K.name)}/content`),G=await ce.json().catch(()=>({}));ce.ok?(me.value=G.content||"",me.disabled=!1,Te.disabled=!1,me.focus(),H(me.value),g()):(me.value=G.error||u.t("effectLoadContentFailed"),v(G.error||u.t("effectLoadContentFailed"),!1))}catch{me.value=u.t("effectsNetworkError"),v(u.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let re=K.label||K.name;if(await window.HudConfirm?.open({icon:"\u2297",title:u.t("fxDeleteTitle"),subtitle:u.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${u.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${re}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${u.t("fxDeleteWarn")}
                </div>`,confirmLabel:u.t("fxDeleteConfirm"),cancelLabel:u.t("cancel"),width:400}))try{let ue=await h("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K.name})}),me=await ue.json().catch(()=>({}));ue.ok?(v(me.message||u.t("effectDeleteFallback"),!0),await f()):v(me.error||u.t("deleteFailed"),!1)}catch{v(u.t("effectsNetworkError"),!1)}})})}function s(k){return String(k??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function r(k){let L={name:"",label:"",description:"",params:[]};if(!k)return L;let O=k.split(`
`),K="top",_=null;for(let P of O){let j=P.replace(/\r$/,""),z=j.trimStart();if(!z||z.startsWith("#"))continue;let X=j.length-z.length;if(X===0){if(K="top",_&&(L.params.push(_),_=null),z==="params:"){K="params";continue}let Z=z.match(/^([a-z_]+):\s*(.+)$/);Z&&(Z[1]==="name"?L.name=Z[2].trim():Z[1]==="label"?L.label=Z[2].trim():Z[1]==="description"&&(L.description=Z[2].trim()));continue}if(!(K!=="params"&&K!=="param-fields"&&K!=="options")){if(X===2&&(K==="params"||K==="param-fields"||K==="options")){_&&(L.params.push(_),_=null);let Z=z.match(/^(\w+):$/);Z&&(_={key:Z[1]},K="param-fields");continue}if(X===4&&K==="param-fields"&&_){let Z=z.match(/^(\w+):\s*(.*)$/);if(Z){let V=Z[1],ee=Z[2].trim();V==="label"?_.label=ee:V==="type"?_.type=ee:V==="default"?_.default=ee:V==="min"?_.min=parseFloat(ee):V==="max"?_.max=parseFloat(ee):V==="step"?_.step=parseFloat(ee):V==="options"&&(_.options=[],K="options")}continue}if(K==="options"&&_&&X>=6){let Z=z.match(/^-\s*value:\s*(.+)$/);Z&&(_.options||(_.options=[]),_.options.push({value:Z[1].trim(),label:Z[1].trim()}));let V=z.match(/^label:\s*(.+)$/);V&&_.options&&_.options.length>0&&(_.options[_.options.length-1].label=V[1].trim())}}}return _&&L.params.push(_),L}function b(k,L){let O=k.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),K=O?O[1]:"",_=k.match(/^animation:\s*["']?(.+?)["']?\s*$/m),P=_?_[1].trim():"";for(let j of L.params){let z=j.default!==void 0?j.default:"",X=new RegExp(`\\{${j.key}\\}`,"g");K=K.replace(X,z),P=P.replace(X,z)}return{keyframes:K,animation:P}}function e(k,L){if(k==="COLOR"){let O=L.find(K=>K.key==="duration");if(O&&O.default){let K=parseFloat(O.default);if(K<.25)return"crimson";if(K<.33)return"amber"}}if(k==="MOTION"){let O=L.find(K=>K.key==="height");if(O&&O.default){let K=parseFloat(O.default);if(K>30)return"crimson";if(K>24)return"amber"}}return"lime"}function t(k,L){return k==="COLOR"?L==="crimson"?u.t("fxHintFlashBlock"):L==="amber"?u.t("fxHintFlashWarn"):u.t("fxHintFlashOk"):L==="crimson"?u.t("fxHintAmpBlock"):L==="amber"?u.t("fxHintAmpWarn"):u.t("fxHintAmpOk")}function i(k,L){let O=r(L),{keyframes:K,animation:_}=b(L,O),P=o(k.name),j=O.params.filter(me=>me.type!=="select"),z=O.params.filter(me=>me.type==="select"),X=e(P,O.params),Z=X==="crimson"?"BLOCK":X==="amber"?"WARN":"OK",V=t(P,X),ee="fx-anim-"+k.name.replace(/[^a-z0-9]/gi,"-"),W=K&&_?$(ee,K):"",Q=_?`animation:${_};animation-play-state:running;`:"",ne=j.map(me=>{let Te=parseFloat(me.default)||0,Ee=me.min??0,Le=me.max??100,oe=Math.max(0,Math.min(100,(Te-Ee)/(Le-Ee)*100)),se=(me.label||"").match(/\(([^)]+)\)$/),ce=se?se[1]:"",G=me.label||me.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${s(G)}</span>
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
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${u.t("fxNoNumericParams")}</span>`,re=z.map(me=>{let Te=me.options||[],Ee=String(me.default||""),Le=Te.map(oe=>`<span class="fx-radio-btn${oe.value===Ee||oe.label===Ee?" is-active":""}">${s(oe.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${s(me.label||me.key)}</div>
        <div class="fx-radio-group">${Le||"<span>\u2014</span>"}</div>
      </div>`}).join(""),le=["dark","light","photo"].map(me=>{let Te=me==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${me}">
        <span class="fx-preview-bg-label">${me.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Q}color:${Te}">ABC</span>
      </div>`}).join(""),ue=`${W}<div class="fx-param-body">
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
        <div class="fx-preview-3">${le}</div>
      </div>
      <div class="fx-warn-box${X!=="lime"?" is-"+X:""}">
        <span class="fx-warn-chip${X!=="lime"?" is-"+X:""}">${Z}</span>
        <span class="fx-warn-text">${s(V)}</span>
      </div>
    </div>`,ue}async function a(k){n.selected=k.name;let L=document.getElementById("effectsInspector"),O=document.getElementById("effectsInspectorTitle"),K=document.getElementById("effectsInspectorKicker"),_=document.getElementById("effectsInspectorBody");if(L){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),O&&(O.textContent=k.label||k.name),K&&(K.textContent="LOADING"),_&&(_.className="hud-inspector-body",_.textContent="# "+u.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(P=>{P.classList.toggle("is-selected",P.dataset.effectName===k.name)});try{let P=await h(`/admin/effects/${encodeURIComponent(k.name)}/content`),j=await P.json().catch(()=>({}));if(P.ok){let z=j.content||"";_&&(_.className="hud-inspector-body has-param-panel",_.innerHTML=i(k,z)),K&&(K.textContent=o(k.name))}else _&&(_.className="hud-inspector-body",_.textContent="# "+(j.error||u.t("effectLoadContentFailed"))),K&&(K.textContent="ERROR")}catch{_&&(_.className="hud-inspector-body",_.textContent="# "+u.t("effectsNetworkError")),K&&(K.textContent="NETWORK")}}}function m(){let k=document.getElementById("effectsInspectorReload"),L=document.getElementById("effectsInspectorEdit");k?.addEventListener("click",async()=>{if(!n.selected){v(u.t("fxSelectFirst"),!1);return}let O=n.all.find(K=>K.name===n.selected);O&&await a(O)}),L?.addEventListener("click",()=>{if(!n.selected){v(u.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(n.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",m())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:l}})()});var ht=ye(()=>{(function(){"use strict";var h={};window.DanmuEvents={on:function(v,u){h[v]||(h[v]=[]),h[v].push(u)},off:function(v,u){h[v]=(h[v]||[]).filter(function($){return $!==u})},emit:function(v,u){(h[v]||[]).forEach(function($){$(u)})}}})()});var gt=ye(()=>{(function(){"use strict";let h="sec-events",v="/admin/audit?limit=200",$=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},B={events:[],filterSev:"all",filterCat:"all",timer:0};function A(T){let g=(T.source||T.kind||"").toLowerCase(),c=(T.action||"").toLowerCase();return g.includes("plugin")||c.includes("plugin")?"plugin":g.includes("webhook")||c.includes("webhook")?"webhook":g.includes("rate")||c.includes("rate")||c.includes("limit")?"rate":g.includes("filter")||c.includes("filter")?"filter":g.includes("overlay")||c.includes("overlay")||g==="broadcast"?"overlay":g.includes("backup")||c.includes("backup")?"backup":g.includes("msg")||g==="messaging"?"msg":g.includes("ws")||g==="websocket"?"ws":"system"}let U=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,N=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function F(T){let g=(T.action||T.kind||"").toLowerCase();return T.severity?T.severity:U.test(g)?"error":N.test(g)?"warn":"info"}function R(T){let g=T.source||"system",c=T.action||T.kind||"";return c?`${g.toUpperCase()}_${c.toUpperCase()}`:g.toUpperCase()}function D(T){if(!T)return"\u2014";let g=new Date(T*1e3),c=l=>String(l).padStart(2,"0");return`${c(g.getHours())}:${c(g.getMinutes())}:${c(g.getSeconds())}`}function C(T){if(T.message)return T.message;let g=T.meta||{},c=[];if(g.from&&g.to)c.push(`${g.from} \u2192 ${g.to}`);else if(g.text_preview)c.push(`"${g.text_preview.slice(0,60)}"`);else if(Object.keys(g).length){let l=Object.keys(g).slice(0,3);for(let o of l)c.push(`${o}=${JSON.stringify(g[o]).slice(0,30)}`)}return c.length?c.join(" \xB7 "):`${T.source||"system"}.${T.action||T.kind||"?"}`}function y(){return`
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
      </div>`}function M(){let T=document.querySelector("[data-ev-rows]");if(!T)return;let g=B.events,c=g.filter(n=>!(B.filterSev!=="all"&&F(n)!==B.filterSev||B.filterCat!=="all"&&A(n)!==B.filterCat));c.length===0?(T.innerHTML="",window.AdminEmpty?T.appendChild(window.AdminEmpty.render("events")):T.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):T.innerHTML=c.map(n=>{let f=F(n);return`
          <div class="admin-ev-v4__row" data-sev="${f}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${$(D(n.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${f}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${f}">${$(R(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${$(n.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${$(C(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let l={all:g.length,info:0,warn:0,error:0};for(let n of g)l[F(n)]+=1;Object.keys(l).forEach(n=>{let f=document.querySelector(`[data-ev-cnt="${n}"]`);f&&(f.textContent=String(l[n]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${c.length} / ${g.length}`)}async function E(){try{let T=await fetch(v,{credentials:"same-origin"});if(!T.ok)return;let g=await T.json();B.events=Array.isArray(g.events)?g.events:[],M()}catch{}}function x(){let T=document.getElementById(h);T&&T.addEventListener("click",g=>{let c=g.target.closest("[data-ev-sev]");if(c){T.querySelectorAll("[data-ev-sev]").forEach(n=>n.classList.toggle("is-active",n===c)),B.filterSev=c.dataset.evSev,M();return}let l=g.target.closest("[data-ev-cat]");if(l){T.querySelectorAll("[data-ev-cat]").forEach(n=>n.classList.toggle("is-active",n===l)),B.filterCat=l.dataset.evCat,M();return}let o=g.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")E();else if(o.dataset.evAction==="export"){let n=new Blob([JSON.stringify(B.events,null,2)],{type:"application/json"}),f=URL.createObjectURL(n),p=document.createElement("a");p.href=f,p.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(f),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function I(){let T=document.querySelector(".admin-dash-grid"),g=document.getElementById(h);if(!g)return;let l=(T?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";g.style.display=l?"":"none",l?(E(),B.timer||(B.timer=setInterval(E,15e3))):B.timer&&(clearInterval(B.timer),B.timer=0)}function H(){let T=document.getElementById("settings-grid");!T||document.getElementById(h)||(T.insertAdjacentHTML("beforeend",y()),x(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{H(),I()}),H()})})()});var bt=ye(()=>{(function(){"use strict";let h="sec-modqueue",v="/admin/modqueue/list",B=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},A={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},U={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},N={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function F(c){let l=0,o=String(c||"");for(let n=0;n<o.length;n++)l=l*31+o.charCodeAt(n)&65535;return l%360}function R(c){if(!c.created_at_ms)return null;let l=(Date.now()-c.created_at_ms)/1e3,o=Math.max(0,A.autoRejectSec-l);return Math.ceil(o)}function D(c,l){let o=(c.severity||"low").toLowerCase(),n=U[o]||U.low,f=F(c.fp),p=String(c.fp||"\u2014").slice(0,8),w=c.nick||c.nickname||ServerI18n.t("audienceAnonymous"),d=(w||"?").slice(0,2).toUpperCase(),s=l==="pending"?R(c):null,r=l==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${B(c.id||"")}">${B(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${B(c.id||"")}">${B(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${B(c.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",b=l==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${B(ServerI18n.t("modqueueStampApproved"))} \xB7 ${B(c.resolved_by||"admin")} \xB7 ${B(c.resolved_ago||"")}
        </div>`:l==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${c.auto_rejected?`${B(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${B(ServerI18n.t("modqueueAutoRejectTimeout",{n:A.autoRejectSec}))}`:`${B(ServerI18n.t("modqueueStampRejected"))} \xB7 ${B(c.resolved_by||"admin")} \xB7 ${B(c.resolved_ago||"")}`}
        </div>`:"",e=l==="pending"&&s!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${s}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${B(c.id||"")}" data-mq-sev="${B(o)}" style="--mq-sev:${n}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${f})">${B(d)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${B(w)}</div>
            <div class="admin-mq-card__fp">fp:${B(p)}</div>
          </div>
          <div class="admin-mq-card__time">${B(c.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${B(c.content||c.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${n}">${B(ServerI18n.t(N[o]||N.low))}</span>
          <span class="admin-mq-card__rule">${B(ServerI18n.t("modqueueRuleLabel"))}: ${B(c.rule||c.matched_rule||"?")}</span>
          ${e}
        </div>
        ${r}
        ${b}
      </div>`}function C(c,l,o){c&&(c.innerHTML=l.map(n=>D(n,o)).join(""))}function y(){let c=document.getElementById(h);if(!c)return;c.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),c.querySelector(".admin-mq__body").hidden=!0;let l=c.querySelector("[data-mq-empty]");l&&window.AdminEmpty&&(l.hidden=!1,l.innerHTML="",l.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function M(){let c=document.getElementById(h);if(!c)return;if(A.pending.length+A.approved.length+A.rejected.length===0){y();return}c.querySelector(".admin-mq__body").hidden=!1;let o=c.querySelector("[data-mq-empty]");o&&(o.hidden=!0),C(c.querySelector("[data-mq-col-pending]"),A.pending,"pending"),C(c.querySelector("[data-mq-col-approved]"),A.approved,"approved"),C(c.querySelector("[data-mq-col-rejected]"),A.rejected,"rejected");let n=(d,s)=>{c.querySelectorAll(d).forEach(r=>{r.textContent=String(s)})};n("[data-mq-cnt-pending]",A.pending.length),n("[data-mq-cnt-approved]",A.approved.length),n("[data-mq-cnt-rejected]",A.rejected.length);let f=A.pending.length===0;c.querySelectorAll("[data-mq-bulk]").forEach(d=>{d.disabled=f});let p=A.pending[A.pending.length-1],w=c.querySelector("[data-mq-oldest]");if(w){let d=p?R(p):null;w.textContent=d!=null?`oldest: ${d}s`:""}n("[data-mq-throughput]",A.stats.throughput.toFixed?A.stats.throughput.toFixed(1):A.stats.throughput),n("[data-mq-avg-review]",A.stats.avg_review_sec.toFixed?A.stats.avg_review_sec.toFixed(1):A.stats.avg_review_sec),n("[data-mq-auto-rate]",Math.round(A.stats.auto_reject_pct||0)+"%")}async function E(){try{let c=await fetch(v,{credentials:"same-origin"});if(!c.ok){A.pending=[],A.approved=[],A.rejected=[],M();return}let l=await c.json();A.pending=Array.isArray(l.pending)?l.pending:[],A.approved=Array.isArray(l.approved)?l.approved:[],A.rejected=Array.isArray(l.rejected)?l.rejected:[],A.stats=l.stats||A.stats,typeof l.auto_reject_sec=="number"&&(A.autoRejectSec=l.auto_reject_sec),M()}catch{}}async function x(c,l,o){if(window.csrfFetch)try{let n=await window.csrfFetch("/admin/modqueue/"+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,...o||{}})});if(n.ok)window.showToast&&window.showToast(l==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),E();else{let f=await n.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:f.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function I(){return`
      <div id="${h}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function H(){let c=document.getElementById(h);c&&c.addEventListener("click",async l=>{let o=l.target.closest("[data-mq-action]");if(o){let f=o.dataset.mqId,p=o.dataset.mqAction;(p==="approve"||p==="reject")&&x(f,p);return}let n=l.target.closest("[data-mq-bulk]");if(n){let f=n.dataset.mqBulk,p=f==="approve-low";if(!await window.HudConfirm?.open({icon:p?"\u2713":"\u2298",title:p?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:p?"warn":"danger",body:p?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:p?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let d=f.startsWith("approve")?"approve":"reject",s=f.endsWith("low")?"low":"high";x(null,"bulk",{action:d,severity:s})}})}function T(){let c=document.querySelector(".admin-dash-grid"),l=document.getElementById(h);if(!l)return;let o=(location.hash||"").replace("#/","").split("/"),n=c?.dataset.activeRoute||o[0]||"",f=c?.dataset.activeLeaf||o[1]||"",p=n==="modqueue"||n==="moderation"&&(f==="queue"||f===""||f==="moderation");l.style.display=p?"":"none",p?(A.timer||(E(),A.timer=setInterval(E,4e3)),A.countdownTimer||(A.countdownTimer=setInterval(M,1e3))):(A.timer&&(clearInterval(A.timer),A.timer=0),A.countdownTimer&&(clearInterval(A.countdownTimer),A.countdownTimer=0))}function g(){let c=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!c||document.getElementById(h)||(c.insertAdjacentHTML("beforeend",I()),H(),T())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(h)&&g(),T()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",()=>{g(),T()}),g()})})()});var wt=ye(()=>{(function(){"use strict";let h="sec-modbans-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},u=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],$={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},B={fingerprint:"FP",ip:"IP",nick:"NICK"},A={rows:[],refreshTimer:0};async function U(){try{let I=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!I.ok)return;let H=await I.json();A.rows=Array.isArray(H.bans)?H.bans:[],R()}catch{}}function N(I){if(!I||I<=0)return"\u2014";let H=Math.floor(I/86400),T=Math.floor(I%86400/3600),g=Math.floor(I%3600/60);return H>0?`${H}d ${T}h`:T>0?`${T}h ${g}m`:`${g}m`}function F(I){let H=I.target_kind;return H==="fingerprint"?`fp:${(I.target||"").slice(0,8)}`:H==="nick"?`@${I.target}`:I.target||"\u2014"}function R(){let I=document.querySelector("[data-modbans-list]");if(!I)return;let H=A.rows||[],T=document.querySelector("[data-modbans-count]");if(T&&(T.textContent=String(H.length)),H.length===0){I.innerHTML="";let g=window.AdminEmpty.render("blacklist");g.dataset.emptyKind="modbans",I.appendChild(g);return}I.innerHTML=H.map(function(g){let c=g.status==="expired",l=g.status==="permanent",o="admin-modbans-chip is-"+g.status,n=l?ServerI18n.t("modbansPermanent"):c?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:N(g.remaining_s)}),f=encodeURIComponent(g.target_kind)+"|"+encodeURIComponent(g.target);return`
        <div class="admin-modbans-row ${c?"is-expired":""}">
          <span class="admin-modbans-target">${v(F(g))}</span>
          <span class="admin-modbans-kind">${v(B[g.target_kind]||g.target_kind)}</span>
          <span class="admin-modbans-reason">${v(g.reason||"\u2014")}</span>
          <span class="${o}">
            ${g.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${v(n)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${f}"
            ${c?"disabled":""}
            title="${c?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${c?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function D(I){let H=I||{},T=H.kind||"ban",g=window.HudConfirm,c=!H.target,l=H.target_kind||"fingerprint",o=H.target||"";return new Promise(function(n){if(!g){n(!1);return}let f=86400,p=!1,w=12,d="hour",s=document.createElement("div");s.className="admin-modbans-modal-body",s.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${v($[l]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${v(B[l]||"?")} ${v((T||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${v(o?F({target_kind:l,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${c?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(Z){return`<button type="button" class="admin-modbans-modal-preset${Z===l?" is-active":""}"
                data-modbans-target-kind="${Z}">${v($[Z])} ${v(B[Z])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${u.map(function(Z){return`<button type="button" class="${"admin-modbans-modal-preset"+(Z.defaultPick?" is-active":"")+(Z.permanent?" is-permanent":"")}" data-modbans-duration="${Z.val}">${Z.labelKey?ServerI18n.t(Z.labelKey):Z.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let r=s.querySelector("[data-modbans-custom-row]"),b=s.querySelector("[data-modbans-custom-input]"),e=s.querySelector("[data-modbans-custom-seconds]"),t=s.querySelector("[data-modbans-when]"),i=s.querySelector("[data-modbans-custom]"),a=s.querySelector("[data-modbans-target]"),m=s.querySelector("[data-modbans-target-icon]"),S=s.querySelector("[data-modbans-target-label]"),k=s.querySelector("[data-modbans-target-val]"),L=function(){m.textContent=$[l]||"?",S.textContent=`${B[l]||"?"} ${(T||"ban").toUpperCase()}`,k.textContent=o?F({target_kind:l,target:o}):"\u2014"},O=function(){return Math.max(1,parseInt(b.value,10)||1)*(d==="day"?86400:3600)},K=function(){if(f===0){t.textContent=ServerI18n.t("modbansWhenPermanent"),t.classList.remove("is-custom");return}let Z=new Date(Date.now()+f*1e3),V=W=>String(W).padStart(2,"0"),ee=`${Z.getFullYear()}-${V(Z.getMonth()+1)}-${V(Z.getDate())} ${V(Z.getHours())}:${V(Z.getMinutes())}`;p?(t.textContent=ServerI18n.t("modbansWhenCustom",{n:w,unit:ServerI18n.t(d==="day"?"modbansDay":"modbansHour"),stamp:ee}),t.classList.add("is-custom")):(t.textContent=ServerI18n.t("modbansWhenPreset",{dur:N(f),stamp:ee}),t.classList.remove("is-custom"))},_=function(){let Z=O();e.textContent=`= ${Z.toLocaleString()}s`,p&&(w=Math.max(1,parseInt(b.value,10)||1),f=Z,K())},P=s.querySelector("[data-modbans-presets]"),j=function(){p=!0,r.hidden=!1,P.querySelectorAll(".admin-modbans-modal-preset").forEach(function(Z){Z.classList.toggle("is-active",Z===i)}),_()},z=function(Z){p=!1,r.hidden=!0,P.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===Z)})};L(),K(),_(),s.addEventListener("click",function(Z){let V=Z.target.closest("[data-modbans-target-kind]");if(V){l=V.dataset.modbansTargetKind,V.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Q){Q.classList.toggle("is-active",Q===V)}),L();return}if(Z.target.closest("[data-modbans-custom]")){j();return}let ee=Z.target.closest("[data-modbans-custom-unit]");if(ee){d=ee.dataset.modbansCustomUnit||"hour",s.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Q){Q.classList.toggle("is-active",Q===ee)}),_();return}let W=Z.target.closest("[data-modbans-duration]");W&&(f=parseInt(W.dataset.modbansDuration,10)||0,z(W),K())}),b.addEventListener("input",_),a&&a.addEventListener("input",function(){o=a.value.trim(),L()});let X=s.querySelector("[data-modbans-reason]");g.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:s,width:480}).then(function(Z){if(!Z){n(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),n(!1);return}f===0?g.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${v(F({target_kind:l,target:o}))}</b>`})}).then(function(V){if(!V){n(!1);return}C(l,o,f,X.value.trim(),T).then(n)}):C(l,o,f,X.value.trim(),T).then(n)})})}async function C(I,H,T,g,c){try{let l=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:H,duration_s:T,reason:g||"",kind:c||"ban"})});if(!l.ok)throw new Error(`HTTP ${l.status}`);return window.showToast&&window.showToast(T===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:N(T)}),!0),U(),!0}catch(l){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:l.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function y(I){let H=(I||"").split("|");if(H.length!==2)return;let T=decodeURIComponent(H[0]),g=decodeURIComponent(H[1]);try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:T,target:g})});if(!c.ok)throw new Error(`HTTP ${c.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),U()}catch(c){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1)}}function M(){return`
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
      </div>`}function E(){let I=document.getElementById(h);if(!I||I.dataset.modbansBound==="1")return;I.dataset.modbansBound="1",I.addEventListener("click",function(T){if(T.target.closest("[data-modbans-add]")){D({kind:"ban"});return}let g=T.target.closest("[data-modbans-unban]");g&&!g.disabled&&y(g.dataset.modbansUnban)});let H=I.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function x(){let I=document.getElementById("settings-grid");!I||document.getElementById(h)||(I.insertAdjacentHTML("beforeend",M()),E(),U(),A.refreshTimer||(A.refreshTimer=setInterval(U,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&x()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&x()}),window.ModBans={openPicker:D,refreshList:U,formatTarget:F,formatRemaining:N}})()});var yt=ye(()=>{(function(){"use strict";let h="admin-mobile-nav-root",v=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],u=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],$={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",themes:"viewer",appearance:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},B=!1,A=0;function U(){return`
      <nav id="${h}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${u.map(E=>`
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
          ${v.map(E=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${E.id}" data-mn-route="${E.route||""}" ${E.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${E.icon}</span>
              <span class="admin-mobile-nav__label">${E.labelKey?ServerI18n.t(E.labelKey):E.label}</span>
              ${E.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${E.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function N(){let E=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",x=$[E]||E;return v.some(I=>I.id===x)?x:u.some(I=>I.route===x)?"more":""}function F(){let E=document.getElementById(h);if(!E)return;let x=N();E.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===x),I.dataset.mnTab!=="more"&&I.setAttribute("aria-current",I.dataset.mnTab===x?"page":"false")})}function R(E){let x=document.getElementById(h);if(!x)return;B=E,x.dataset.overflow=E?"open":"closed",x.querySelector("[data-mn-overflow]").hidden=!E,x.querySelector("[data-mn-backdrop]").hidden=!E;let I=x.querySelector("[data-mn-tab='more']");I?.classList.toggle("is-active",E),I?.setAttribute("aria-expanded",E?"true":"false")}function D(E){if(E.target.closest("[data-mn-backdrop]")){R(!1);return}if(E.target.closest("[data-mn-logout]")){R(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let x=E.target.closest("[data-mn-tab]");if(x){if(x.dataset.mnTab==="more"){R(!B);return}R(!1),x.dataset.mnRoute&&(location.hash="#/"+x.dataset.mnRoute);return}let I=E.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(R(!1),location.hash="#/"+I.dataset.mnRoute)}async function C(){try{let E=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!E.ok)return;let x=await E.json(),I=Array.isArray(x.pending)?x.pending.length:0;A=I;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(I),H.hidden=!(I>0)}catch{}}function y(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let E=0;function x(){let I=document.activeElement,H=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(x)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(E),E=requestAnimationFrame(()=>setTimeout(x,50))})}function M(){document.getElementById(h)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",U()),document.addEventListener("click",D),window.addEventListener("hashchange",()=>{R(!1),F()}),F(),C(),setInterval(C,8e3),y())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M()})()});var St=ye(()=>{(function(){"use strict";var h="admin-session-expired-root",v=!1,u=null;function $(F,R){try{var D=window.ServerI18n&&ServerI18n.t(F);return D&&D!==F?D:R}catch{return R}}function B(){var F=document.getElementById(h);if(F&&F.remove(),document.body.classList.remove("is-session-expired"),v=!1,u&&u.focus)try{u.focus()}catch{}u=null}function A(F){if(F.key==="Tab"){var R=document.getElementById(h);if(R){var D=R.querySelectorAll("input, button");if(D.length){var C=D[0],y=D[D.length-1];F.shiftKey&&document.activeElement===C?(F.preventDefault(),y.focus()):!F.shiftKey&&document.activeElement===y&&(F.preventDefault(),C.focus())}}}}function U(){if(!(v||document.getElementById(h))){v=!0,u=document.activeElement,document.body.classList.add("is-session-expired");var F=document.createElement("div");F.id=h,F.className="admin-sx",F.setAttribute("role","alertdialog"),F.setAttribute("aria-modal","true"),F.setAttribute("aria-labelledby","admin-sx-title"),F.setAttribute("aria-describedby","admin-sx-body"),F.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+$("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+$("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+$("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+$("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+$("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+$("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(F),document.addEventListener("keydown",A,!0);var R=F.querySelector("#admin-sx-password");setTimeout(function(){try{R.focus()}catch{}},30),F.querySelector("[data-sx-form]").addEventListener("submit",function(D){D.preventDefault(),N(F,R)})}}function N(F,R){var D=F.querySelector("[data-sx-error]"),C=F.querySelector(".admin-sx__submit");D.hidden=!0,C.disabled=!0;var y=new URLSearchParams;y.set("password",R.value),F.querySelector("#admin-sx-remember").checked&&y.set("remember","1");var M=window.__adminRawFetch||window.fetch;M.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:y.toString()}).then(function(E){return E.json().then(function(x){return{status:E.status,data:x}},function(){return{status:E.status,data:{}}})}).then(function(E){if(C.disabled=!1,E.status===200&&E.data&&E.data.ok){var x=document.querySelector('meta[name="csrf-token"]');x&&E.data.csrf_token&&(x.content=E.data.csrf_token),document.removeEventListener("keydown",A,!0),B(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast($("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}E.status===429?D.textContent=$("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):D.textContent=$("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),D.hidden=!1,R.select()}).catch(function(){C.disabled=!1,D.textContent=$("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),D.hidden=!1})}window.AdminSessionExpired={open:U,close:B,isOpen:function(){return v}}})()});var kt=ye(()=>{(function(){"use strict";let h="admin-reconnect-banner",B=0,A=0,U="ok",N=0,F=5e3,R=!1,D=0;function C(o){if(U!==o){if(U=o,o==="ok"||o==="dismissed"){M(),o==="ok"&&(B=0,A=0,F=5e3);return}y()}}function y(){let o=document.getElementById(h);o||(o=document.createElement("div"),o.id=h,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=U;let n=U==="exhausted",f=n?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${f}`,o.innerHTML=n?x():E(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>C("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",n),D||(D=setInterval(I,250))}function M(){let o=document.getElementById(h);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),D&&(clearInterval(D),D=0)}function E(){let o=Math.max(0,(N-Date.now())/1e3),n=F/1e3,f=Math.min(100,(n-o)/n*100);return`
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
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){if(U!=="reconnecting")return;let o=document.getElementById(h);if(!o)return;let n=Math.max(0,(N-Date.now())/1e3),f=F/1e3,p=Math.min(100,(f-n)/f*100),w=o.querySelector(".admin-rcb__progress-fill");w&&(w.style.width=p+"%")}function H(){A=0,B=0,F=5e3,C("reconnecting"),T()}async function T(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?g():o.status===401||o.status===403?C("ok"):c()}catch{c()}}function g(){C("ok")}function c(){if(B+=1,A+=1,A>=10){C("exhausted");return}B>=3&&(F=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,A-1))),N=Date.now()+F,C("reconnecting"),setTimeout(T,F))}function l(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,n=window.fetch;window.__adminRawFetch=n,document.addEventListener("admin:session-restored",()=>{R=!1,g()});async function f(p){try{let w=await p;return w&&w.ok?U!=="ok"&&U!=="dismissed"&&g():w&&w.status===401&&!R?(R=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):w&&w.status>=500&&c(),w}catch(w){throw c(),w}}typeof o=="function"&&(window.csrfFetch=function(){return f(o.apply(this,arguments))}),window.fetch=function(p,w){let d=typeof p=="string"?p:p&&p.url||"",s=n.call(this,p,w);return d.startsWith("/admin/")||d.indexOf("//")===-1&&d.startsWith("admin/")?f(s):s}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()})()});var It=ye(()=>{(function(){"use strict";let h="admin-help-drawer-root",v={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},u=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],$=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function B(E){return E==null?"":String(E).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})}function A(){let E=(location.hash||"").replace("#/","").split("/")[0]||"";return v[E]?E:"_default"}function U(){return`
      <div id="${h}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function N(){let E=v[A()],x=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",I=E.titleKey?ServerI18n.t(E.titleKey):E.title,H=E.tipKeys.map(l=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${B(typeof l=="string"?ServerI18n.t(l):l.literal)}</span>
      </div>`).join(""),T=E.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${B(ServerI18n.t(E.fieldTipKey))}</span>
      </div>`:"",g=u.map(l=>`
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
            <span class="admin-help__route-title">${B(I)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${T}
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
          <div class="admin-help__glossary">${g}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${c}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${x?"v"+B(x):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function F(){let E=document.getElementById(h);E||(document.body.insertAdjacentHTML("beforeend",U()),E=document.getElementById(h),E.addEventListener("click",x=>{if(x.target.closest("[data-help-close]")){R();return}x.target.closest("[data-help-shortcuts]")&&(R(),window.AdminShortcuts&&window.AdminShortcuts.open())})),E.querySelector("[data-help-body]").innerHTML=N(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",C)}function R(){let E=document.getElementById(h);E&&E.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",C)}function D(){document.getElementById(h)?R():F()}function C(E){E.key==="Escape"&&(E.preventDefault(),R())}function y(E){let x=E.target;x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable)||E.key==="F1"&&(E.preventDefault(),D())}function M(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",y)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M(),window.AdminHelp={open:F,close:R,toggle:D}})()});var Tt=ye(()=>{(function(){"use strict";var h="admin-shortcuts-root",v=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function u(c,l){try{var o=window.ServerI18n&&ServerI18n.t(c);return o&&o!==c?o:l}catch{return l}}function $(c,l){window.showToast&&window.showToast(c,l!==!1)}function B(c,l){return(window.csrfFetch||window.fetch)(c,l||{})}function A(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function U(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function N(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function F(){var c="idle";try{var l=await fetch("/admin/poll/status",{credentials:"same-origin"});l.ok&&(c=(await l.json()).state||"idle")}catch{}if(c==="idle"){location.hash="#/polls",$(u("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=c==="active";try{var n=await B(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!n.ok)throw new Error("HTTP "+n.status);$(u(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{$(u("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function R(c){return v?c.metaKey:c.ctrlKey}var D=v?"\u2318":"Ctrl",C=[{group:"global",keys:[D,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(c){return R(c)&&(c.key==="k"||c.key==="K")},run:A},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(c){return c.key==="?"&&!R(c)&&!c.altKey||c.key==="/"&&R(c)},run:function(){H()}},{group:"global",keys:[D,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(c){return R(c)&&c.shiftKey&&(c.key==="d"||c.key==="D")},run:U},{group:"global",keys:[D,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(c){return R(c)&&c.shiftKey&&c.key==="Backspace"},run:N},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(c){return!R(c)&&"jkJK".indexOf(c.key)>=0},run:function(c){window.AdminLiveFeed.moveFocus(c.key==="j"||c.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(c){return!R(c)&&(c.key==="b"||c.key==="B")},run:function(c){window.AdminLiveFeed.blockFocused(c.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(c){return!R(c)&&c.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(c){return!R(c)&&(c.key==="p"||c.key==="P")},run:F}];function y(c){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(c):c==null?"":String(c).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function M(c){return C.filter(function(l){return l.group===c}).map(function(l){var o=l.keys.map(function(n){return n==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+y(n)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+y(u(l.labelKey,l.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function E(){var c=document.getElementById(h);c&&c.remove(),document.removeEventListener("keydown",x,!0)}function x(c){(c.key==="Escape"||c.key==="?")&&(c.preventDefault(),E())}function I(){if(!document.getElementById(h)){var c=document.createElement("div");c.id=h,c.className="admin-ks",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-ks-title"),c.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+y(u("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+y(u("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+M("global")+'</div><div class="admin-ks__group-label">'+y(u("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+M("feed")+'</div><p class="admin-ks__note">'+y(u("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+y(u("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(c),c.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&E()}),document.addEventListener("keydown",x,!0);var l=c.querySelector(".admin-ks__close");l&&setTimeout(function(){try{l.focus()}catch{}},30)}}function H(){document.getElementById(h)?E():I()}function T(c){if(!c)return!1;if(c.isContentEditable)return!0;var l=(c.tagName||"").toLowerCase();return l==="input"||l==="textarea"||l==="select"}function g(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(c){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var l=T(document.activeElement),o=0;o<C.length;o++){var n=C[o];if(n.group==="feed"){if(l||!g())continue}else if(l&&!R(c))continue;if(n.match(c)){c.preventDefault(),n.run(c);return}}}),window.AdminShortcuts={open:I,close:E,toggle:H,list:function(){return C.slice()}}})()});var _t=ye(()=>{(function(){"use strict";let h="theme-mode",v="admin-theme-mode",u="admin-theme-toggle";(function(){try{if(localStorage.getItem(h)!=null)return;let y=localStorage.getItem(v);(y==="light"||y==="dark"||y==="auto")&&(localStorage.setItem(h,y),localStorage.removeItem(v))}catch{}})();function B(){try{let C=localStorage.getItem(h);if(C==="light"||C==="dark"||C==="auto")return C}catch{}return"auto"}function A(C){try{localStorage.setItem(h,C)}catch{}}function U(C){let y=document.documentElement;C==="auto"?y.removeAttribute("data-theme"):y.setAttribute("data-theme",C),F(C)}function N(C){return C==="light"||C==="dark"?C:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function F(C){let y=document.getElementById(u);if(!y)return;let M=N(C);y.dataset.mode=C,y.dataset.effective=M,y.textContent=C==="auto"?"\u25D0":M==="light"?"\u2600":"\u263E",y.title=C==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:M==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):C==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function R(){let C=B(),y=C==="auto"?"light":C==="light"?"dark":"auto";A(y),U(y)}function D(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let C=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,y=document.getElementById(u);if(y){C&&y.classList.contains("admin-theme-toggle--floating")&&C.parentNode&&!C.parentNode.contains(y)&&(y.classList.remove("admin-theme-toggle--floating"),C.parentNode.insertBefore(y,C));return}let M=document.createElement("button");M.id=u,M.type="button",M.className="admin-theme-toggle",M.addEventListener("click",R),C&&C.parentNode?C.parentNode.insertBefore(M,C):(M.classList.add("admin-theme-toggle--floating"),document.body.appendChild(M)),F(B())}if(U(B()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{B()==="auto"&&F("auto")})}catch{}window.addEventListener("storage",C=>{C.key===h&&U(B())}),window.AdminThemeSwitcher={getMode:B,setMode:function(C){C!=="auto"&&C!=="light"&&C!=="dark"||(A(C),U(C),F(C),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:C}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0})}):(D(),new MutationObserver(D).observe(document.body,{childList:!0,subtree:!0}))})()});var Et=ye(()=>{(function(){"use strict";var h={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},v=[];window.DanmuStore={get:function(u){return h[u]},set:function(u,$){h[u]=$,v.forEach(function(B){B(u,$)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+u,$)},subscribe:function(u){v.push(u)},getAll:function(){return Object.assign({},h)}}})()});var $t=ye(()=>{(function(){"use strict";let h=window.DANMU_CONFIG||{},v=Number(h.loginLimit)>0?Number(h.loginLimit):5,u=Number(h.loginWindow)>0?Number(h.loginWindow):300,$=0;function B(){return window.__adminCtx||{}}function A(){let R=B();return typeof R.getSettings=="function"?R.getSettings()||{}:{}}function U(){let R=A();if(R&&typeof R.OpsContact<"u"){let D=R.OpsContact;if(Array.isArray(D))return D[3]||D[0]||null;if(typeof D=="string")return D}return null}function N(){let R=B().appContainer||document.getElementById("app-container");if(!R)return;let D=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";R.innerHTML=`
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
    `;let C=R.querySelector("[data-login-reveal]");C&&C.addEventListener("click",()=>{let x=document.getElementById("password");if(!x)return;let I=x.type==="text";x.type=I?"password":"text",C.textContent=ServerI18n.t(I?"adminLoginReveal":"adminLoginHide");try{x.focus()}catch{}});let y=document.getElementById("loginForm"),M=document.getElementById("password"),E=document.getElementById("loginAttemptsHint");if(y){try{let x=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(x)&&x>0){$=x;let I=Math.max(0,v-$);if(E&&$>0&&I>0){E.hidden=!1;let H=document.getElementById("password");H&&H.classList.add("is-error"),E.textContent=ServerI18n.t("loginAttemptsRemaining",{n:I,min:Math.max(1,Math.ceil(u/60))})}}}catch{}y.addEventListener("submit",async x=>{if(x.preventDefault(),!M)return;let I=new URLSearchParams;I.set("password",M.value),document.getElementById("admin-login-remember")?.checked&&I.set("remember","1");try{let H=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I.toString(),redirect:"manual"});if(H.status===429){let T=H.headers.get("Retry-After"),g=parseInt(T,10),c=Number.isFinite(g)&&g>0?g:u;F(c);return}$+=1;try{sessionStorage.setItem("admin_login_attempts",String($))}catch{}window.location.reload()}catch(H){console.error("Login submit failed:",H),E&&(E.hidden=!1,E.textContent=ServerI18n.t("networkError"))}})}}function F(R){let D=document.getElementById("adminLoginCard");if(!D)return;let C=U(),y=C?`<a class="admin-lockout-contact" href="${C}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";D.classList.add("admin-lockout-card"),D.innerHTML=`
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
    `;let M=document.getElementById("lockoutCountdown"),E=R,x=H=>{let T=Math.floor(H/60),g=H%60;return`${String(T).padStart(2,"0")}:${String(g).padStart(2,"0")}`};M&&(M.textContent=x(E));let I=setInterval(()=>{E-=1,M&&(M.textContent=x(Math.max(0,E))),E<=0&&(clearInterval(I),$=0,N(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:N,renderLockout:F}})()});var xt=ye(()=>{(function(){"use strict";function h(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function v(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function u(){try{let e=h();await e.prime();let t=e.get("history_stats"),[i,a,m]=await Promise.all([t?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!a.ok)return;let S=t||(i&&i.ok?await i.json():null);if(!S)return;let k=(await a.json()).distribution||[],L=S.stats&&S.stats.total||0,O=k.reduce((Z,V)=>V.count>(Z?.count||-1)?V:Z,null),K=O?O.count:0,_=O?(O.hour||"").slice(-5):"\u2014",P=document.querySelector('[data-kpi="messages"]');P&&(P.querySelector("[data-kpi-value]").textContent=L.toLocaleString());let j=document.querySelector('[data-kpi="peak"]');j&&(j.querySelector("[data-kpi-value]").textContent=K.toLocaleString());let z=document.querySelector('[data-kpi="unique-fp"]');if(z){let Z=new Set;(S.records||[]).forEach(V=>{let ee=V.fingerprint||V.fp||V.user_fingerprint;ee&&Z.add(ee)}),z.querySelector("[data-kpi-value]").textContent=Z.size.toLocaleString()}let X=document.querySelector('[data-kpi="session"]');if(X){let Z=m&&m.ok?await m.json():null,V=Z&&Z.status==="live",ee=X.querySelector("[data-kpi-value]");if(V&&Z.started_at){let W=Math.max(0,Math.floor(Date.now()/1e3-Z.started_at)),Q=Math.floor(W/3600),ne=Math.floor(W%3600/60);ee.textContent=Q>0?`${Q}:${String(ne).padStart(2,"0")}:${String(W%60).padStart(2,"0")}`:`${ne}:${String(W%60).padStart(2,"0")}`}else ee.textContent="\u2014"}}catch{}}function $(e,t){let i=document.querySelector(e);if(i){if(typeof t!="number"||t<=0){i.hidden=!0;return}i.hidden=!1,i.textContent=t>999?"999+":String(t)}}async function B(){try{let e=h();await e.prime();let t=e.get("blacklist"),i=e.get("widgets"),a=e.get("history_stats"),m=e.get("effects");$("[data-count-blacklist]",Array.isArray(t)?t.length:0),$("[data-count-widgets]",Array.isArray(i?.widgets)?i.widgets.length:0),$("[data-count-messages]",a?.stats?.last_24h||0),$("[data-count-effects]",Array.isArray(m?.effects)?m.effects.length:0);try{let S=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(S.ok){let k=await S.json();$("[data-count-plugins]",Array.isArray(k?.plugins)?k.plugins.length:0)}}catch{}}catch{}}async function A(){B(),U(),r()}async function U(){let e=document.querySelector("[data-dash-poll-body]"),t=document.querySelector("[data-dash-poll-timer]");if(e)try{let i=h();await i.prime();let m=i.get("metrics");if(!m){let K=await fetch("/admin/metrics",{credentials:"same-origin"});if(!K.ok)return;m=await K.json()}let S=m.poll_state;if(!S||!S.active||!Array.isArray(S.options)||S.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,t&&(t.textContent="");return}let k=S.options.reduce((K,_)=>K+(_.votes||0),0),L=["A","B","C","D","E","F"],O=0;if(S.options.forEach((K,_)=>{(K.votes||0)>(S.options[O].votes||0)&&(O=_)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${v(S.question||ServerI18n.t("dashPollRunning"))}</div>`+S.options.map((K,_)=>{let P=k?Math.round(K.votes/k*100):0;return`
            <div class="admin-dash-poll-opt ${_===O&&k>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${L[_]||String(_+1)}</span>
                <span class="label">${v(K.label||"")}</span>
                <span class="pct">${P}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:K.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${P}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:k})}</div>`,t){let K=S.remaining_seconds;t.textContent=typeof K=="number"&&K>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(K/60),ss:String(K%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function N(e){let t=e.visible!==!1,i=e.config&&e.config.title||e.type||"widget",a=(e.type||"widget").toUpperCase(),m=(e.position||"\u2014").toUpperCase(),S=t?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",k=e.created_at&&t?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,L=k!=null?(()=>{let O=Math.floor(k/86400),K=Math.floor(k%86400/3600),_=Math.floor(k%3600/60),P=k%60;return O>0?`UPTIME \xB7 ${O}d ${String(K).padStart(2,"0")}h`:K>0?`UPTIME \xB7 ${K}:${String(_).padStart(2,"0")}:${String(P).padStart(2,"0")}`:`UPTIME \xB7 ${_}:${String(P).padStart(2,"0")}`})():`STATUS \xB7 ${t?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${v(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${S}"></span>
          <span class="kind">${v(a)}</span>
          <span class="cat">${v(m)}</span>
        </div>
        <div class="title">${v(i)}</div>
        <div class="uptime">${L}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${t?" is-active":""}" data-widget-action="toggle" data-running="${t?"1":"0"}">${t?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function F(e,t){try{let i=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!t}})});if(!i.ok)throw new Error("HTTP "+i.status);D()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function R(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",t=>{let i=t.target.closest(".admin-dash-widget-tile");if(!i)return;let a=t.target.dataset.widgetAction,m=i.dataset.widgetId;if(!(!a||!m)){if(a==="toggle")F(m,t.target.dataset.running==="1");else if(a==="config"){let S=document.querySelector('[data-route="widgets"]');S&&S.click()}}}))}async function D(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let t=h();await t.prime();let i=t.get("widgets");if(!i){let m=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!m.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}i=await m.json()}let a=(i.widgets||i.items||[]).slice(0,4);if(a.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+a.map(N).join("")+"</div>",R(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let C=null,y=null,M=null;function E(e){let t=Math.max(0,Math.floor(Date.now()/1e3-e)),i=Math.floor(t/3600),a=Math.floor(t%3600/60),m=t%60;return i>0?`${i}:${String(a).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${String(a).padStart(2,"0")}:${String(m).padStart(2,"0")}`}function x(e){let t=document.getElementById("admin-session-banner"),i=document.getElementById("sec-live-feed");if(i&&i.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),t&&t.classList.toggle("is-hero",!(e&&e.status==="live")),!t)return;if(C=e,!(e&&e.status==="live"))t.hidden=!1,t.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let m=e.started_at||Date.now()/1e3;t.hidden=!1,t.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${v(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,I(m)}t.dataset.bound||(t.dataset.bound="1",t.addEventListener("click",T))}function I(e){M&&clearInterval(M);let t=()=>{let i=document.querySelector("[data-sess-timer]");i&&(i.textContent=E(e))};t(),M=setInterval(t,1e3)}function H(){M&&(clearInterval(M),M=null)}async function T(e){let t=e.target.closest("[data-sess-action]");if(!t)return;let i=t.dataset.sessAction;if(i==="open"){let a=document.querySelector("[data-sess-name]"),m=(a?a.value:"").trim();if(!m){a&&a.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}t.disabled=!0;try{let S=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:m})}),k=await S.json();if(!S.ok){window.showToast&&window.showToast(k.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:m}),!0),x(k.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{t.disabled=!1}}else if(i==="close"){let a=t.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",m=(L,O)=>`<option value="${L}"${L===a?" selected":""}>${O}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${m("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${m("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${m("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;t.disabled=!0;let k=document.getElementById("sessCloseBehavior")?.value;if(k&&k!==a)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:k})})}catch{}try{let L=await window.csrfFetch("/admin/session/close",{method:"POST"}),O=await L.json();if(!L.ok){window.showToast&&window.showToast(O.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),x({status:"idle",viewer_end_behavior:O.archived&&O.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{t.disabled=!1}}}async function g(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let t=await e.json();x(t)}catch{}}function c(){g(),y&&clearInterval(y),y=setInterval(g,1e4)}function l(){y&&(clearInterval(y),y=null),H()}let o=null,n=null,f=0;function p(){let e=document.querySelector("[data-cockpit-overlay]"),t=window.AdminOverlayControl,i=n;if(!e||!t||!i)return;e.classList.toggle("is-on",i.live);let a=(k,L)=>{k.textContent!==L&&(k.textContent=L)},m=e.querySelector("[data-cockpit-status]");m&&a(m,t.statusText(i.live,i.count));let S=e.querySelector('[data-cockpit-action="toggle"]');S&&(S.dataset.i18n=t.toggleKey(i.live),a(S,ServerI18n.t(S.dataset.i18n)),S.dataset.next=i.live?"standby":"live")}async function w(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let t=f,i=null,a=null;try{let k=await fetch("/overlay_status",{credentials:"same-origin"});k.ok&&(i=(await k.json()).overlay_count||0)}catch{}try{let k=await fetch("/admin/broadcast/status",{credentials:"same-origin"});k.ok&&(a=(await k.json()).mode==="live")}catch{}let m=n;if(!m&&a===null)return;n={live:a!==null&&t===f?a:m?m.live:a,count:i!==null?i:m?m.count:0},p()}document.addEventListener("admin-overlay-state",e=>{let t=e&&e.detail||{};f+=1,n={live:!!t.live,count:typeof t.count=="number"?t.count:n?n.count:0},p()}),document.addEventListener("admin-route-applied",e=>{let t=e&&e.detail&&e.detail.route;t!=="live"&&t!=="dashboard"||(p(),w())});function d(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async a=>{let m=a.target.closest("[data-cockpit-action]");if(!m)return;let S=m.dataset.cockpitAction;if(S==="clear"){window.AdminOverlayControl?.clearScreen();return}S==="toggle"&&(await window.AdminOverlayControl?.setDisplay(m.dataset.next==="live"),w())});let t=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');t&&t.addEventListener("click",s);let i=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');i&&i.addEventListener("click",()=>{location.hash="#/polls"})}async function s(){let e;try{let a=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);e=await a.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let t=document.createElement("div");t.className="admin-soh-qr",t.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:t,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(e.url)}function r(){d(),w(),o&&clearInterval(o),o=setInterval(w,5e3)}function b(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:u,refreshSummary:A,refreshSidebarBadges:B,populatePoll:U,populateWidgets:D,refreshSessionBanner:g,startSessionPolling:c,stopSessionPolling:l,refreshCockpitOverlay:w,renderCockpitOverlay:p,startCockpitPolling:r,stopCockpitPolling:b}})()});var Lt=ye(()=>{(function(){"use strict";let h="sec-viewer-config-defaults",v="sec-overlay-layout",u="sec-viewer-config-limits",$=["sec-themes",h,"sec-viewer-theme",u],B=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(J){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[J]})},U=window.DANMU_CONFIG?.settingRanges||{},N=Object.fromEntries(Object.entries({Opacity:{min:20,max:100,step:1,unit:"%"},FontSize:{min:16,max:64,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}}).map(([q,J])=>{let Y=U[q]||{};return[q,{...J,min:Number.isFinite(Number(Y.min))?Number(Y.min):J.min,max:Number.isFinite(Number(Y.max))?Number(Y.max):J.max}]})),F=[14,20,32,44,64],R=window.DANMU_CONFIG?.defaultColorPalette||[],D=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}],C={stroke:[{value:"none",labelKey:"themeStrokeNone"},{value:"thin",labelKey:"themeStrokeThin"},{value:"thick",labelKey:"themeStrokeThick"}],shadow:[{value:"none",labelKey:"themeShadowNone"},{value:"soft",labelKey:"themeShadowSoft"},{value:"strong",labelKey:"themeShadowStrong"}]};function y(q,J){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(q,J);if(Y&&Y!==q)return Y}return q}let M={};function E(q){if(M[q]!=null)return M[q];let J=N[q];return J?J.step:1}function x(q,J){M[q]=Number(J)||E(q)}let I={options:null,fonts:[],allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},H=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],T=["Color","FontFamily","Layout"];function g(q){return T.indexOf(q)!==-1}function c(q){let J=I.options&&I.options[q],Y=J&&J[1];return Array.isArray(Y)?Y.slice():[]}function l(q){return q==="Color"?R.map(J=>J.replace(/^#/,"").toUpperCase()):q==="Layout"?D.map(J=>J.value):q==="FontFamily"?(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function o(q,J){return q==="Color"?String(J||"").replace(/^#/,"").toUpperCase():String(J||"")}function n(){return`
      <div id="${h}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      <details id="${v}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
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
      </details>`}let p=[{key:"Opacity",labelKey:"displayLabelOpacity",kind:"slider",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",kind:"size",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",kind:"slider",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",kind:"color",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`},{key:"FontFamily",labelKey:"displayLabelFontFamily",kind:"pick",fmt:q=>q||"\u2014"},{key:"Layout",labelKey:"displayLabelLayout",kind:"pick",fmt:q=>w(q)},{key:"Effects",labelKey:"displayLabelEffect",kind:"effects",fixed:!0},{key:"stroke",labelKey:"themeDetailStroke",kind:"theme",fixed:!0},{key:"shadow",labelKey:"themeDetailShadow",kind:"theme",fixed:!0}];function w(q){let J=D.find(Y=>Y.value===q);return J?y(J.labelKey):q||"\u2014"}function d(q){let J=window.AdminThemes;return J&&typeof J.segOf=="function"?J.segOf(q):null}function s(q){let J=I.options||{};if(q.kind==="theme")return!1;if(q.kind==="effects")return!J.Effects||J.Effects[0]!==!1;let Y=J[q.key];return!!(Y&&Y[0]!==!1)}function r(q){let J=window.AdminThemes,Y=J&&typeof J.styleDefaults=="function"?J.styleDefaults():null;return Y&&Y[q]||null}function b(q){let J=r(q);return J&&J.source==="theme"?J.value:(I.options&&I.options[q]||[])[3]}function e(q){if(q.key!=="Color"&&q.key!=="FontFamily")return"";let J=r(q.key);return J?J.source==="theme"?`<span class="admin-ui-chip" data-source-chip="theme">${A(y("styleFromTheme"))}</span>`:J.rejected?`<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${A(String(J.theme_value||""))}">${A(y("styleThemeValueUnused"))}</span>`:"":""}function t(q){let J=s(q),Y=i(q);return(Y?`<div class="admin-dsp2-value-badge ${J?"is-on":""}" data-value-badge>${A(Y)}</div>`:"")+e(q)}function i(q){if(q.key==="Color"||q.key==="FontFamily")return q.fmt(b(q.key));if(q.kind==="theme"){let ie=d(q.key),fe=C[q.key].find(ve=>ve.value===ie);return fe?y(fe.labelKey):"\u2014"}if(q.kind==="effects")return"";let Y=(I.options&&I.options[q.key]||[])[3];return q.fmt?q.fmt(Y):Y!=null?String(Y):"\u2014"}function a(q,J){let Y=J[3],ie=N[q.key],fe=s(q);if(q.kind==="slider"){let ve=ie,ge=Y!=null?Number(Y):ve.min,be=isFinite(ge)?ge:ve.min,Ce=(be-ve.min)/Math.max(1e-6,ve.max-ve.min)*100,_e=A(y(q.labelKey));return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            aria-label="${_e}"
            min="${ve.min}" max="${ve.max}" step="${E(q.key)}" value="${A(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Ce.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Ce.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}" aria-label="${_e}"
              min="${ve.min}" max="${ve.max}" step="${E(q.key)}" value="${A(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(q.kind==="size"){let ve=Number(Y);return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${F.map(ge=>{let be=ve===ge;return`<button type="button" class="admin-dsp2-fchip ${be?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ge}" aria-pressed="${be}">${ge}</button>`}).join("")}
        </div>`}if(q.kind==="color"){let ve="#"+String(Y||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${_().map(ge=>{let be=ge.slice(1),Ce=ge.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Ce?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ge}" aria-label="${ge}" aria-pressed="${Ce}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${A(y("specificColor"))}">
            <span class="sr-only">${A(y("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${A(ve)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ve=(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(we=>{let Be=typeof we=="string"?we:we.name||we.family||"",Ne=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Be,label:Ne}}).filter(we=>we.value),ge=String(Y||""),be=fe&&!!I.allowlistEdit.FontFamily,Ce=be?I.allowlistEdit.FontFamily:new Set(c("FontFamily").map(we=>o("FontFamily",we))),_e=!be&&Ce.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map(we=>{let Be=we.value===ge,Ne=be?Ce.has(we.value):_e||Ce.has(we.value),Re=["admin-dsp2-tchip",Be?"is-active":"",be?"is-editing":"",fe&&!Ne?"is-blocked":""].filter(Boolean).join(" "),ze=be?`data-allow-key="FontFamily" data-allow-value="${A(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${A(we.value)}"`;return`<button type="button" class="${Re}" ${ze}
              aria-pressed="${be?Ne?"true":"false":Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ne?"\u2713 ":""}</span>`:""}${A(we.label)}
            </button>`}).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${A(y("adminRouteTitle_fonts"))} \u203A</a>
        </div>
        ${m(q)}
      `}if(q.key==="Layout"){let ve=String(Y||"scroll"),ge=fe&&!!I.allowlistEdit.Layout,be=ge?I.allowlistEdit.Layout:new Set(c("Layout").map(_e=>o("Layout",_e))),Ce=!ge&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${D.map(_e=>{let we=_e.value===ve,Be=ge?be.has(_e.value):Ce||be.has(_e.value),Ne=["admin-dsp2-tile",we?"is-active":"",ge?"is-editing":"",fe&&!Be?"is-blocked":""].filter(Boolean).join(" "),Re=ge?`data-allow-key="Layout" data-allow-value="${_e.value}"`:`data-chip-key="Layout" data-chip-value="${_e.value}"`;return`<button type="button" class="${Ne}" ${Re}
              aria-pressed="${ge?Be?"true":"false":we?"true":"false"}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${_e.icon}</span>
              <span class="admin-dsp2-tile-label">${y(_e.labelKey)}</span>
              ${ge?`<span class="admin-dsp2-allow-mark">${Be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${m(q)}
      `}if(q.kind==="effects")return`<a class="admin-dsp2-link" href="#/effects">${A(y("adminNavEffects"))} \u203A</a>`;if(q.kind==="theme"){let ve=d(q.key);return`
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${q.key}" role="group"
              aria-label="${A(y(q.labelKey))}">
          ${C[q.key].map(ge=>{let be=ge.value===ve;return`<button type="button" data-theme-opt="${ge.value}" class="${be?"is-active":""}"
              aria-pressed="${be?"true":"false"}">${A(y(ge.labelKey))}</button>`}).join("")}
        </span>`}return""}function m(q){if(!g(q.key)||!s(q))return"";let J=!!I.allowlistEdit[q.key],Y=c(q.key),ie=l(q.key).length||0,fe=Y.length>0?y("displayAllowSummaryPartial",{n:Y.length,total:ie,label:S(q.key)}):y("displayAllowSummaryAll",{total:ie});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${A(fe)}</span>
        ${J?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${A(y("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${A(y("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${A(y("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}">${A(y("displayEditAllowlistTitle"))}</button>
        `}
      </div>`}function S(q){return y(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function k(q,J){if(q.kind!=="slider"&&q.kind!=="size"||!s(q))return"";let Y=N[q.key],ie=J[1]!=null?J[1]:Y.min,fe=J[2]!=null?J[2]:Y.max,ve=E(q.key),ge=(be,Ce,_e,we)=>`
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${A(y(be))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="${Ce}" ${we}
              value="${A(String(_e))}" />
            ${Y.unit?`<span>${Y.unit}</span>`:""}
          </span>
        </label>`;return`
      <div class="admin-dsp2-band">
        ${ge("displayMinAudience",1,ie,`min="${Y.min}" max="${Y.max}" step="${ve}"`)}
        ${ge("displayMaxAudience",2,fe,`min="${Y.min}" max="${Y.max}" step="${ve}"`)}
        ${ge("mlStep","step",ve,'min="0.1" step="0.1"')}
      </div>`}function L(q){let J=s(q),Y=A(y(q.labelKey)+" \xB7 "+y("displayColAudience")),ie=A(y(J?"displayCustomizable":"displayLocked")),fe=q.fixed?`disabled aria-disabled="true" data-fixed-toggle="${q.key}"`:`data-toggle-key="${q.key}"`;return`
      <button type="button" class="admin-dsp2-pill ${J?"is-on":""}" ${fe}
        aria-pressed="${J?"true":"false"}" aria-label="${Y}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${ie}</span>
      </button>`}function O(q){let J=I.options&&I.options[q.key]||[!1,"","",""],Y=s(q),ie=q.kind==="color"&&Y?'<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>':"";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${q.fixed?"is-fixed":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${A(y(q.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${t(q)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${a(q,J)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${k(q,J)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${L(q)}</div>
      </div>${ie}`}function K(){let q=document.getElementById("dsp2-rows");if(q){if(!I.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):A(y("loading"))}`;return}q.innerHTML=p.map(O).join(""),X(),ee()}}function _(){let q=c("Color");return[...new Set((q.length?q:R).map(J=>"#"+String(J).replace(/^#/,"").toUpperCase()).filter(J=>/^#[0-9A-F]{6}$/.test(J)))]}function P(q){let J=q.slice(1).match(/.{2}/g).map(Y=>{let ie=parseInt(Y,16)/255;return ie<=.04045?ie/12.92:((ie+.055)/1.055)**2.4});return J[0]*.2126+J[1]*.7152+J[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function j(q,J="error"){I.paletteNotice={message:q,type:J};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=q,Y.classList.toggle("is-error",J==="error"))}function z(q,J=!0){let Y=document.querySelector("[data-admin-color-palette]"),ie=Y?.querySelector("[data-palette-preview-text]");!ie||!/^#[0-9A-F]{6}$/i.test(q)||(I.palettePreview=q.toUpperCase(),ie.style.color=q,Y.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(fe=>{let ve=fe.dataset.palettePreview===q.toUpperCase();fe.setAttribute("aria-pressed",String(ve)),fe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),J&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ie.getAnimations().forEach(fe=>fe.cancel()),ie.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function X(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!I.options)return;let J=_(),Y=(I.options.ViewerColorPicker||[!0])[0]!==!1,ie=I.paletteBusy?"disabled":"",fe=I.palettePreview||J[0],ve=A(I.paletteDraft),ge=I.paletteNotice;q.setAttribute("aria-busy",String(I.paletteBusy)),q.innerHTML=`
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
        <span class="admin-color-palette-count"><strong data-palette-count>${J.length}</strong><span>${A(y("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${J.map((be,Ce)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${P(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${A(y("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===fe}" ${ie}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Ce+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${J.length<=1?"disabled":ie}
                aria-label="${A(y("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${A(y("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${A(y("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(I.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${ie} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${I.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${ie} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${J.length>=64?"disabled":ie}>
                <span aria-hidden="true">\uFF0B</span> ${A(y("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${A(y(J.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
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
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${ie} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${A(y("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,z(fe,!1)}async function Z(q,J){if(I.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");I.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=y("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let ie=await le("Color",q);I.paletteBusy=!1,I.paletteNotice={type:ie?"success":"error",message:y(ie?"viewerPaletteSaved":"updateFailed")},ie&&J&&(I.palettePreview=J),X(),(J&&ie?Y.querySelector(`[data-palette-preview="${J}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function V(q,J){let Y=I.options&&I.options[q];return Y&&Y[3]!=null?Y[3]:J}function ee(){let q=document.querySelector("[data-preview-stage]"),J=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),ie=document.querySelector("[data-preview-foot-l]"),fe=document.querySelector("[data-preview-foot-r]");if(!q||!J||!Y||!I.options)return;let ve=Number(V("FontSize",32)),ge=Number(V("Opacity",92)),be=Number(V("Speed",1)),Ce="#"+String(b("Color")||V("Color","7DD3FC")).replace(/^#/,""),_e=String(b("FontFamily")||V("FontFamily","NotoSansTC")),we=String(V("Layout","scroll")),Be=Math.min(ve,36),Ne=Math.max(0,Math.min(100,ge))/100,Re=window.AdminThemes&&window.AdminThemes.activeStyles&&window.AdminThemes.activeStyles()||{},ze=Re.textStroke?Math.max(0,Math.min(6,Number(Re.strokeWidth)||0)):0,et=/^#[0-9a-fA-F]{3,8}$/.test(String(Re.strokeColor||""))?Re.strokeColor:"#000000",nt=Re.textShadow?Math.max(0,Math.min(40,Number(Re.shadowBlur)||0)):0;J.style.fontSize=Be+"px",J.style.color=Ce,J.style.opacity=Ne.toFixed(2),J.style.fontFamily=_e+", system-ui, sans-serif",J.style.webkitTextStroke=ze?`${ze}px ${et}`:"",J.style.paintOrder=ze?"stroke fill":"",J.style.textShadow=nt?`0 0 ${nt}px ${Ce}`:"none",Y.style.fontSize=(Be*.78).toFixed(0)+"px",Y.style.opacity=(Ne*.9).toFixed(2),Y.style.fontFamily=_e+", system-ui, sans-serif",q.dataset.layout=we,ie&&(ie.textContent=`${w(we)} \xB7 ${ve}px \xB7 ${(+be).toFixed(1)}\xD7`),fe&&(fe.textContent=y("displayOpacitySuffix",{n:Math.round(ge)}))}let W=["Color","ViewerColorPicker","FontFamily"];function Q(q){W.includes(q)&&window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh()}async function ne(q,J){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!J})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray(I.options[q])||(I.options[q]=[!1,"","",""]),I.options[q][0]=!!J,J||delete I.allowlistEdit[q],K(),Q(q),q==="ViewerColorPicker"?document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0}):document.querySelector(`[data-toggle-key="${q}"]`)?.focus({preventScroll:!0});let ie=p.find(ve=>ve.key===q),fe=q==="ViewerColorPicker"?y("viewerPaletteAllowPicker"):ie?y(ie.labelKey):q;window.showToast&&window.showToast(`${fe} ${y("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(y("updateFailed"),!1),await me(),K()}}async function re(q,J,Y){try{let ie=Y;if(q==="Color"){let ve=String(ie).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(y("colorFormatError"),!1);return}ie=ve.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){ie=q==="Speed"?parseFloat(ie):parseInt(ie,10);let ve=N[q];if(Number.isNaN(ie)||ve&&(ie<ve.min||ie>ve.max)){window.showToast&&window.showToast(`${q} ${ve.min}\u2013${ve.max}`,!1);return}}let fe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:ie,index:J})});if(!fe.ok)throw new Error("update "+fe.status);Array.isArray(I.options[q])||(I.options[q]=[!1,"","",""]),I.options[q][J]=ie,ue(q),ee(),Q(q)}catch(ie){console.warn("[admin-display] update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}async function le(q,J){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:J})});if(!Y.ok)throw new Error("allowlist "+Y.status);let ie=await Y.json().catch(()=>({}));ie&&Array.isArray(ie.option)?I.options[q]=ie.option:Array.isArray(I.options[q])&&(I.options[q][1]=J.slice()),ue(q),ee(),Q(q);let fe=l(q).length||0,ve=q==="Color"?y("settingsUpdated"):J.length>0?y("displayAllowlistToastPartial",{key:q,n:J.length,total:fe}):y("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),q!=="Color"&&window.showToast&&window.showToast(y("updateFailed"),!1),!1}}function ue(q){let J=document.querySelector(`#${h} [data-row-key="${q}"]`);if(!J||!I.options)return;let Y=p.find(ge=>ge.key===q);if(!Y)return;let ie=I.options[q]||[!1,"","",""],fe=ie[3],ve=J.querySelector("[data-row-badges]");if(ve&&(ve.innerHTML=t(Y)),g(q)||Y.kind==="theme"){let ge=J.querySelector("[data-picker-host]");ge&&(ge.innerHTML=a(Y,ie));return}if(q==="FontSize"){J.querySelectorAll(`[data-chip-key="${q}"]`).forEach(be=>{let Ce=String(be.getAttribute("data-chip-value"))===String(fe??"");be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")});let ge=J.querySelector("[data-band-host]");ge&&!ge.contains(document.activeElement)&&(ge.innerHTML=k(Y,ie))}if(Y.kind==="slider"){let ge=N[q],be=Number(fe??ge.min),Ce=(be-ge.min)/Math.max(1e-6,ge.max-ge.min)*100,_e=J.querySelector(".admin-dsp2-slider-fill"),we=J.querySelector(".admin-dsp2-slider-thumb");_e&&(_e.style.width=Ce.toFixed(2)+"%"),we&&(we.style.left=`calc(${Ce.toFixed(2)}% - 8px)`);let Be=J.querySelector(".admin-dsp2-range");Be&&document.activeElement!==Be&&(Be.value=String(be));let Ne=J.querySelector(".admin-dsp2-num");Ne&&document.activeElement!==Ne&&(Ne.value=String(be));let Re=J.querySelector("[data-band-host]");Re&&!Re.contains(document.activeElement)&&(Re.innerHTML=k(Y,ie))}}async function me(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);I.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),I.options=I.options||{}}}async function Te(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let J=await q.json();I.fonts=Array.isArray(J)?J:J.fonts||[]}catch{I.fonts=["NotoSansTC","Inter"]}}function Ee(){if(!I.options){window.showToast&&window.showToast(y("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:I.options},J=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(J),ie=document.createElement("a");ie.href=Y,ie.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(Y),window.showToast&&window.showToast(y("displayExportDone"),!0)}let Le=["Opacity","FontSize","Speed","Color","FontFamily","Layout"],oe=["Color","FontFamily","Layout"];function se(){let q=window.DANMU_CONFIG?.settingDefaults||{},J=window.DANMU_CONFIG?.settingRanges||{},Y=[];for(let ie of Le){let fe=q[ie];if(!Array.isArray(fe)||fe.length<4)return null;if(Y.push({url:"/admin/Set",body:{key:ie,enabled:!!fe[0]}}),oe.includes(ie)){if(fe[3]!==""&&fe[3]!=null){let ve=ie==="Color"?String(fe[3]).replace(/^#/,"").toUpperCase():fe[3];Y.push({url:"/admin/update",body:{type:ie,value:ve,index:3}})}}else{let ve=J[ie];if(!ve)return null;let ge=be=>Math.min(ve.max,Math.max(ve.min,Number(be)));Y.push({url:"/admin/update",body:{type:ie,value:ve.min,index:1}}),Y.push({url:"/admin/update",body:{type:ie,value:ve.max,index:2}}),Y.push({url:"/admin/update",body:{type:ie,value:ge(fe[3]),index:3}})}}return Y}async function ce(){if(!await window.HudConfirm?.open({icon:"\u21A9",title:y("displayRevertConfirmTitle"),subtitle:y("cfmSubRevertDefaults"),severity:"danger",body:y("displayRevertConfirm"),confirmLabel:y("displayDeployRevert")}))return;let J=!1;try{let Y=se();if(!Y)throw new Error("server defaults unavailable");for(let ie of Y){let fe=await window.csrfFetch(ie.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie.body)});if(!fe||!fe.ok)throw new Error(`${ie.url} ${fe?fe.status:"?"}`)}}catch(Y){J=!0,console.warn("[admin-display] revert failed:",Y)}await me(),K(),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh(),window.showToast&&window.showToast(y(J?"updateFailed":"displayRevertDone"),!J)}function G(q){q.addEventListener("click",J=>{let Y=J.target.closest("[data-palette-preview]");if(Y){z(Y.dataset.palettePreview);return}let ie=J.target.closest("[data-palette-remove]");if(ie){let _e=_();if(_e.length>1){let we=_e.filter(Be=>Be!==ie.dataset.paletteRemove);Z(we,we.includes(I.palettePreview)?I.palettePreview:we[0])}return}if(J.target.closest("[data-palette-add]")){let _e=q.querySelector("[data-palette-hex]"),we=String(_e.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){I.paletteInvalid=!0,_e.setAttribute("aria-invalid","true"),j(y("colorFormatError"));return}let Be=_();if(Be.includes("#"+we)){j(y("viewerPaletteDuplicate"));return}Be.length<64&&Z([...Be,"#"+we],"#"+we);return}let fe=J.target.closest("[data-toggle-key]");if(fe){let _e=fe.getAttribute("data-toggle-key"),we=!!(I.options[_e]||[])[0];ne(_e,!we);return}let ve=J.target.closest("[data-theme-opt]");if(ve){let _e=ve.closest("[data-theme-seg]");_e&&window.AdminThemes&&window.AdminThemes.setSeg&&window.AdminThemes.setSeg(_e.getAttribute("data-theme-seg"),ve.getAttribute("data-theme-opt"));return}let ge=J.target.closest("[data-allow-action]");if(ge){let _e=ge.getAttribute("data-allow-action"),we=ge.getAttribute("data-allow-key");if(!we)return;if(_e==="edit"){let Be=c(we).map(Ne=>o(we,Ne));I.allowlistEdit[we]=new Set(Be.length?Be:l(we)),ue(we);return}if(_e==="cancel"){delete I.allowlistEdit[we],ue(we);return}if(_e==="clear"){delete I.allowlistEdit[we],le(we,[]);return}if(_e==="apply"){let Be=I.allowlistEdit[we]||new Set,Ne=l(we),Re=Array.from(Be),ze=Ne.length>0&&Re.length===Ne.length&&Ne.every(et=>Be.has(et));delete I.allowlistEdit[we],le(we,ze?[]:Re);return}}let be=J.target.closest("[data-allow-key][data-allow-value]");if(be){let _e=be.getAttribute("data-allow-key"),we=I.allowlistEdit[_e];if(we){let Be=o(_e,be.getAttribute("data-allow-value"));we.has(Be)?we.delete(Be):we.add(Be),ue(_e)}return}let Ce=J.target.closest("[data-chip-key]");if(Ce){let _e=Ce.getAttribute("data-chip-key"),we=Ce.getAttribute("data-chip-value");q.querySelectorAll(`[data-chip-key="${_e}"]`).forEach(Be=>Be.classList.remove("is-active")),Ce.classList.add("is-active"),re(_e,3,we);return}if(J.target.closest("#dsp2-revert")){ce();return}if(J.target.closest("#dsp2-export")){Ee();return}}),q.addEventListener("keydown",J=>{J.key==="Enter"&&J.target.matches("[data-palette-hex]")&&!J.isComposing&&(J.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",J=>{let Y=J.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,ne("ViewerColorPicker",Y.checked);return}if(Y.closest("[data-vi-toggle]")){Oe({enabled:Y.checked});return}if(Y.closest("[data-vi-ext]")){let be=Array.from(q.querySelectorAll("[data-vi-ext]")).filter(Ce=>Ce.checked).map(Ce=>Ce.getAttribute("data-vi-ext"));Oe({extensions:be});return}if(Y.id==="viewer-images-hosts"){Oe({hosts:Y.value.split(/[\s,]+/).filter(Boolean)});return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){re(Y.getAttribute("data-range-key"),3,Y.value);return}let ie=Y.getAttribute("data-num-key");if(!ie)return;let fe=Y.getAttribute("data-num-index");if(fe==="step"){x(ie,Y.value);let be=Y.closest("[data-row-key]"),Ce=p.find(we=>we.key===ie),_e=be&&be.querySelector("[data-band-host]");_e&&Ce&&(_e.innerHTML=k(Ce,I.options[ie]||[])),ue(ie);return}let ve=parseInt(fe,10);if(Number.isNaN(ve))return;let ge=Y.value;ie==="Color"&&(ge=String(ge).replace(/^#/,"").toUpperCase()),re(ie,ve,ge)}),q.addEventListener("input",J=>{let Y=J.target;if(Y){if(Y.matches("[data-palette-picker]")){I.paletteDraft=Y.value.toUpperCase(),I.paletteInvalid=!1;let ie=q.querySelector("[data-palette-hex]");ie.value=I.paletteDraft,ie.removeAttribute("aria-invalid"),j("","success"),z(I.paletteDraft);return}if(Y.matches("[data-palette-hex]")){I.paletteDraft=Y.value,I.paletteInvalid=!1;let ie=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),j("","success"),/^[0-9a-fA-F]{6}$/.test(ie)&&(q.querySelector("[data-palette-picker]").value="#"+ie,z("#"+ie));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let ie=Y.getAttribute("data-range-key"),fe=N[ie],ve=Number(Y.value),ge=(ve-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,be=Y.closest("[data-row-key]");if(be){let Ce=be.querySelector(".admin-dsp2-slider-fill"),_e=be.querySelector(".admin-dsp2-slider-thumb");Ce&&(Ce.style.width=ge.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(ve))}Array.isArray(I.options[ie])&&(I.options[ie][3]=ve),ee();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let ie=Y.getAttribute("data-num-key"),fe=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(fe)||!Array.isArray(I.options[ie]))return;I.options[ie][fe]=Y.type==="number"?Number(Y.value):Y.value,ee()}}})}function te(q){q.addEventListener("click",J=>{let Y=J.target.closest("[data-dl-step]");if(Y){let fe=Y.closest("[data-dl-stepper]");if(!fe)return;let ve=fe.getAttribute("data-dl-stepper"),ge=Number(Me[ve]??0);De(ve,ge+Number(Y.getAttribute("data-dl-step")));return}let ie=J.target.closest("[data-dl-opt]");if(ie){let fe=ie.closest("[data-dl-seg]");if(!fe)return;let ve=fe.getAttribute("data-dl-seg"),ge=ie.getAttribute("data-dl-opt");De(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(ge):ge)}}),q.addEventListener("change",J=>{let Y=J.target.closest("[data-dl-toggle]");if(Y){De(Y.getAttribute("data-dl-toggle"),Y.checked);return}let ie=J.target.closest("[data-dl-range]");ie&&De(ie.getAttribute("data-dl-range"),Number(ie.value))}),q.addEventListener("input",J=>{let Y=J.target.closest("[data-dl-range]");if(!Y)return;let ie=Y.getAttribute("data-dl-range"),fe=q.querySelector(`[data-dl-value="${ie}"]`);fe&&(fe.textContent=Y.value+"%")})}let ae=null,de=null,he={},ke=0,$e="",pe=q=>(q&&q.hosts||[]).join(`
`);function xe(){return Object.assign({},ae||{},de||{},he)}function Ie(){let q=document.getElementById(h);if(!q||!ae)return;let J=xe(),Y=q.querySelector("[data-vi-toggle]");Y&&(Y.checked=!!J.enabled),Ae(q,!!J.enabled);let ie=q.querySelector("#viewer-images-hosts"),fe=de&&"hosts"in de||"hosts"in he;ie&&!fe&&document.activeElement!==ie&&ie.value===$e&&(ie.value=pe(ae),$e=ie.value);let ve=J.extensions||[];q.querySelectorAll("[data-vi-ext]").forEach(ge=>{ge.checked=ve.indexOf(ge.getAttribute("data-vi-ext"))!==-1})}function Ae(q,J){q.querySelectorAll("[data-vi-row]").forEach(Y=>{Y.style.display=J?"":"none"})}async function Fe(q){try{let J=await q(),Y=null;try{Y=await J.json()}catch{Y=null}return{ok:!!(J.ok&&Y),body:Y}}catch(J){return console.warn("[admin-display] viewer-images request failed:",J),{ok:!1,body:null}}}async function Pe(){let q=ke,J=await Fe(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),Y=!de&&!Object.keys(he).length;J.ok&&Y&&q===ke&&(ae=J.body,Ie())}function qe(q){let J=q&&q.code;return J==="invalid_host"?y("viErrInvalidHost",{host:String(q.detail||"")}):J==="too_many_hosts"?y("viErrTooManyHosts",{max:q.max}):y("updateFailed")}function Oe(q){ke+=1;let J=document.getElementById("viewer-images-hosts");if("hosts"in q&&J&&($e=J.value),"enabled"in q){let Y=document.getElementById(h);Y&&Ae(Y,!!q.enabled)}Object.assign(he,q),de||je()}async function je(){if(de||!Object.keys(he).length)return;let q=he;he={},de=q;let J=await Fe(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}));if(de=null,J.ok){ae=J.body,Ie(),je();return}let Y=he;he={},window.showToast&&window.showToast(qe(J.body),!1),("hosts"in q||"hosts"in Y)&&($e=null),Ie(),Pe()}let Me={};function We(){let q=document.getElementById(v);q&&Object.entries(Me).forEach(([J,Y])=>{let ie=q.querySelector(`[data-dl-value="${J}"]`);ie&&(ie.textContent=J==="max_tracks"?Number(Y)===0?y("dlMaxTracksAuto"):String(Y):String(Y)+"%");let fe=q.querySelector(`[data-dl-range="${J}"]`);fe&&document.activeElement!==fe&&(fe.value=String(Y));let ve=q.querySelector(`[data-dl-toggle="${J}"]`);ve&&(ve.checked=!!Y);let ge=q.querySelector(`[data-dl-seg="${J}"]`);ge&&ge.querySelectorAll("[data-dl-opt]").forEach(be=>{let Ce=be.getAttribute("data-dl-opt")===String(Y);be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")})})}async function Ge(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;Me=await q.json(),We()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function De(q,J){let Y=Me[q];Me[q]=J,We();try{let ie=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:J})});if(!ie.ok)throw new Error("display-layer "+ie.status);Me=await ie.json(),We()}catch(ie){Me[q]=Y,We(),console.warn("[admin-display] display-layer update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}let Ke=!1;async function Ue(){let q=document.getElementById("sec-viewer-config-limits");if(!q||Ke)return;Ke=!0;let J=(Y,ie)=>{let fe=q.querySelector(Y);fe&&(fe.textContent=ie==null?"\u2014":String(ie))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let ie=await Y.json(),fe=ie.rate_limits&&ie.rate_limits.fire||{},ve=ie.rate_limits&&ie.rate_limits.totals||{},ge=Math.max(1,(ie.server_time||0)-(ie.server_started_at||0));J("[data-vc-msg-len]",100),J("[data-vc-nick-len]","\u2014"),J("[data-vc-dedup]","\u2014");let be=(fe.hits||0)/ge;J("[data-vc-avg-rate]",be.toFixed(2)+"/s"),J("[data-vc-throttled]",fe.violations||0),J("[data-vc-blocked]",ve.locked_sources||0),J("[data-vc-deduped]",0)}catch{}finally{Ke=!1}}function Je(){B.forEach(q=>{let J=document.getElementById(q);J&&J.setAttribute("data-admin-ui-replaced","1")})}function Ve(){let q=document.querySelector(".admin-dash-grid");return!!q&&q.dataset.activeRoute==="viewer"}function He(){let q=null;$.forEach(J=>{let Y=document.getElementById(J);Y&&(q&&q.parentElement===Y.parentElement&&q.nextElementSibling!==Y&&q.after(Y),q=Y)})}let Ye=null;function bn(){let q=window.ServerI18n&&window.ServerI18n.currentLang;if(!q||q===Ye)return;let J=Ye===null;if(Ye=q,J)return;let Y=document.createElement("div"),ie=document.getElementById(h);ie&&(Y.innerHTML=n(),ie.replaceChildren(...Y.firstElementChild.childNodes),K(),$e="",Ie());let fe=document.getElementById(v);if(fe){let ve=fe.open;Y.innerHTML=f(),fe.replaceChildren(...Y.firstElementChild.childNodes),fe.open=ve,We()}}let Xe=!1;function Qe(){if(bn(),!Ve()){Xe=!1;return}He(),!Xe&&(Xe=!0,Ue(),I.options&&me().then(K),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh())}function wn(){if(document.getElementById(u))return;let q=document.getElementById("settings-grid");if(!q)return;function J(ie,fe,ve,ge,be,Ce){let _e=Ce?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+ie+'</div></div><div class="admin-vc-limit-row__value" style="color:'+_e+'">'+ve+'<span class="admin-vc-limit-row__unit">'+(ge||"")+"</span></div>"+(be?'<div class="admin-vc-limit-row__hint">'+be+"</div>":"")+"</div>"}let Y=document.createElement("details");Y.id=u,Y.className="admin-dsp2-fold lg:col-span-2",Y.innerHTML='<summary class="admin-ui-page-title">'+A(y("displayContentLimitsTitle"))+'</summary><div class="admin-vc-limits-grid"><div class="admin-vc-limit-card">'+J(A(y("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",A(y("displayMsgLenUnit")),A(y("displayMsgLenHint")))+J(A(y("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",A(y("displayNickLenUnit")),A(y("displayNickLenHint")))+J(A(y("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",A(y("displayDedupHint")))+J(A(y("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+A(y("displayProfanityDefaultValue"))+"</span>","",A(y("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+A(y("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(y("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+A(y("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+A(y("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+A(y("displayAuditLogLink"))+"</a></div></div>",q.appendChild(Y),He()}async function Ze(){let q=document.getElementById("settings-grid");if(!q)return;let J=!1;document.getElementById(h)||(q.insertAdjacentHTML("beforeend",n()),G(document.getElementById(h)),J=!0),document.getElementById(v)||(q.insertAdjacentHTML("beforeend",f()),te(document.getElementById(v)),J=!0),Je(),wn(),Qe(),J&&(I.options||await Promise.all([me(),Te()]),Ge(),Pe(),K())}function tt(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&(!document.getElementById(h)||!document.getElementById(v))?Ze():Je(),Qe()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Qe),document.addEventListener("admin-route-applied",Qe),document.addEventListener("admin-panel-rendered",Ze),document.addEventListener("admin-themes-changed",()=>{ue("stroke"),ue("shadow"),ue("Color"),ue("FontFamily"),ee()}),Ze()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt()})()});var At=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function h(){let V=document.querySelector('meta[name="csrf-token"]');return V&&V.content||""}let v=window.DANMU_CONFIG||{},u=v.session||{logged_in:!1},$=v.settingRanges||{};function B(V,ee={}){let W={credentials:"same-origin",...ee},Q=new Headers(ee.headers||{});return Q.set("X-CSRF-Token",h()),W.headers=Q,fetch(V,W)}window.csrfFetch=B;let A=5e3,U={at:0,data:null,promise:null};function N(){return U.data&&Date.now()-U.at<A}function F(){return N()?Promise.resolve(U.data):(U.promise||(U.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(V=>V.ok?V.json():null).then(V=>(V&&(U.data=V,U.at=Date.now()),U.promise=null,V)).catch(()=>(U.promise=null,null))),U.promise)}function R(V){if(!N())return null;let ee=U.data[V];return ee&&typeof ee=="object"&&"_error"in ee?null:ee}window.__danmuAdminBootstrap={prime:F,get:R},F();let D={},C=null,y=null,M=Object.create(null);Object.assign(M,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let E=Object.create(null);Object.assign(E,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"viewer",tab:"themes"},themes:{nav:"viewer",tab:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let x={_key:V=>"admin:tab:"+V,get(V){try{return sessionStorage.getItem(this._key(V))||null}catch{return null}},set(V,ee){try{ee?sessionStorage.setItem(this._key(V),ee):sessionStorage.removeItem(this._key(V))}catch{}}};function I(V){let ee=(V||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!ee)return null;let W=ee[1],Q=ee[2]||null,ne=null;if(!Q){let me=M[W];typeof me=="string"?W=me:me&&typeof me=="object"&&(W=me.nav||W,ne=me.tab||null)}let re=E[W],le=W,ue=null;if(typeof re=="string"?le=re:re&&typeof re=="object"&&(le=re.nav||W,ue=re.tab||null),ee[1]!==le&&(I._warned||(I._warned=new Set),!I._warned.has(ee[1]))){I._warned.add(ee[1]);try{console.info("[admin] legacy route #/"+ee[1]+" \u2192 #/"+le+(Q||ue||ne?"/"+(Q||ue||ne):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:le,tab:Q||ue||ne,raw:W}}function H(V,ee){return ee?"#/"+V+"/"+ee:"#/"+V}let T={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function g(V,ee,W){if(W=W||V,!K[V]){let ue=M[V];if(typeof ue=="string")V=ue;else if(ue&&typeof ue=="object")ue.nav&&(V=ue.nav),!ee&&ue.tab&&(ee=ue.tab);else{let me=E[V];typeof me=="string"?V=me:me&&typeof me=="object"&&(me.nav&&(V=me.nav),!ee&&me.tab&&(ee=me.tab))}}if(V==="system"&&ee&&T[ee]){let ue=T[ee];V=ue.nav,ee=ue.tab||null,W=V}let Q=K[V]?V:"live",ne=window.AdminTabs,re=ne?.hasTabsFor?.(Q)?ne.resolveActiveTab(Q,ee):null,le=ne?.foldFor?ne.foldFor(Q,ee):null;return{route:Q,tab:re,rawName:W,fold:le?ee:null,foldSection:le?le.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:E,tabMemory:x,parseHash:I,buildHash:H,resolve(V){let ee=I(V);return ee?g(ee.nav,ee.tab,V.match(/^#\/([\w-]+)/)[1]):null}});var c=window.AdminUtils.loadDetailsState,l=window.AdminUtils.saveDetailsState,o=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:F,bootstrapSection:R};async function n(){try{D=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),u.logged_in&&O()}catch(V){console.error("Get settings failed:",V),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function f(V){return/^#[0-9A-Fa-f]{6}$/.test(V)}function p(V){return f(V)?V:/^[0-9A-Fa-f]{6}$/.test(V)?"#"+V:(V.startsWith("#")||(V="#"+V),f(V)?V:"#38bdf8")}function w(V,ee){if($[V]){let W=parseInt(ee);if(isNaN(W)||W<$[V].min||W>$[V].max)return showToast(ServerI18n.t("settingRangeError",{key:V,min:$[V].min,max:$[V].max}),!1),!1}return!0}function d(V,ee,W){if(!W||!Array.isArray(D[V]))return;let Q=D[V][ee];V==="Color"&&typeof Q=="string"&&(Q=p(`#${Q}`)),Q!=null&&(W.value=String(Q))}let s={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-widgets"]}};function r(){Object.values(s).forEach(V=>{let ee=document.getElementById(V.containerId);ee&&V.orderedIds.forEach(W=>{let Q=document.getElementById(W);Q&&Q.parentElement!==ee&&ee.appendChild(Q)})})}function b(){C&&(C.disconnect(),C=null),r(),C=new MutationObserver(()=>{r()}),C.observe(i,{childList:!0,subtree:!0})}async function e(V,ee,W,Q=null){try{if(V==="Color"){if(!f(ee)){showToast(ServerI18n.t("colorFormatError"),!1),d(V,W,Q);return}ee=ee.replace("#","")}else if((V==="Speed"||V==="Opacity"||V==="FontSize")&&!w(V,ee)){d(V,W,Q);return}(await B("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:V,value:ee,index:W})})).ok?(Array.isArray(D[V])||(D[V]=[!1,"","",""]),D[V][W]=ee,showToast(`${V} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await n())}catch(ne){console.error("Error:",ne),showToast(`Update Error: ${ne.message}`,!1),await n()}}async function t(V,ee){try{let W=await B("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V,enabled:ee})}),Q=await W.json().catch(()=>({}));if(W.ok)Array.isArray(D[V])||(D[V]=[!1,"","",""]),D[V][0]=ee,showToast(`${V} ${ServerI18n.t("settingsUpdated")}`),O();else{let ne=document.getElementById(`toggle-${V}`);ne&&(ne.checked=!ee),showToast(Q.error||ServerI18n.t("updateFailed"),!1)}}catch(W){console.error("Error:",W);let Q=document.getElementById(`toggle-${V}`);Q&&(Q.checked=!ee),showToast(`Update Error: ${W.message}`,!1)}}let i=document.getElementById("app-container"),a=document.getElementById("toast-container"),m=(V,ee=500)=>"requestIdleCallback"in window?window.requestIdleCallback(V,{timeout:ee}):setTimeout(V,ee);async function S(){let V=parseInt(document.getElementById("historyHours")?.value||"24");try{let[ee,W]=await Promise.all([fetch(`/admin/stats/hourly?hours=${V}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${V}&limit=10`,{credentials:"same-origin"})]);if(!ee.ok||!W.ok)return;let Q=await ee.json(),ne=await W.json(),re=document.getElementById("statsDashboard");if(!re)return;let le=Q.distribution||[],ue=ne.topTexts||[],me=Math.max(1,...le.map(se=>se.count)),Te=le.reduce((se,ce)=>se+(ce.count||0),0),Ee=le.filter(se=>se.count>0).length,Le=le.map(se=>`<div class="chart-bar" style="height: ${Math.round(se.count/me*100)}%" title="${o(se.hour)}: ${se.count}"><span class="chart-label">${o(se.hour.slice(-5,-3))}</span></div>`).join(""),oe=ue.map((se,ce)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ce+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${o(se.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${se.count}</td></tr>`).join("");re.innerHTML=`
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
              <span class="history-dashboard-caption">${V}h window</span>
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
        </div>`}catch(ee){console.error("Load stats error:",ee)}}window._loadStats=S,window.csrfFetch=B,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=i,window.__adminCtx.getSettings=()=>D;function k(){i&&(i.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function L(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():k()}function O(){let V=c(),ee=(Ee,Le=!1)=>V[Ee]!==void 0?V[Ee]:Le,W=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Ee=>Array.isArray(D[Ee])&&D[Ee][0]===!0).length,Q=D.Layout&&D.Layout[3]?o(String(D.Layout[3]).replace(/_/g," ")):"scroll",ne=D.FontFamily&&D.FontFamily[3]?o(String(D.FontFamily[3])):"NotoSansTC",re=Ee=>Ee.map(Le=>`<span style="height:${Le*10}%;opacity:${.3+Le*.08}"></span>`).join(""),le=Q&&Q!=="off",ue=window.location.port||(window.location.protocol==="https:"?"443":"80");i.innerHTML=`
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
                                    <button class="admin-dash-broadcast ${le?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${o(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${o(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${o(le?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
    `),m(X),P(),b(),m(Z),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),_(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Le=document.querySelector("[data-telem-bars]");if(!Le)return;let oe=document.querySelector("[data-telem-status]"),se={cpu:100,mem:100,ws:100,rate:50};function ce(ae,de,he,ke,$e){let pe=Le.querySelector(`[data-telem-fill="${ae}"]`),xe=Le.querySelector(`[data-telem-value="${ae}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,de))+"%",pe.classList.toggle("is-warn",!ke)),xe&&(xe.textContent=he);let Ie=Le.querySelector(`[data-telem-row="${ae}"]`);Ie&&$e&&Ie.setAttribute("title",$e)}function G(ae,de){if(!de||de<=0)return Math.round(ae)+" MB used";if(de>=1024){let he=(ae/1024).toFixed(1),ke=(de/1024).toFixed(1);return`${he} / ${ke} GB used`}return`${Math.round(ae)} / ${Math.round(de)} MB used`}async function te(){try{let ae=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ae.ok)return;let de=await ae.json(),he=de.cpu_series||[],ke=de.mem_series||[],$e=de.mem_mb_series||[],pe=de.ws_series||[],xe=de.rate_series||[],Ie=Me=>Me.length?Me[Me.length-1]:0,Ae=Number(Ie(he)||0),Fe=Number(Ie(ke)||0),Pe=Number(Ie($e)||0),qe=Number(de.mem_total_mb||0),Oe=Number(Ie(pe)||de.ws_clients||0),je=Number(Ie(xe)||0)/60;if(ce("cpu",Ae,`${Ae.toFixed(0)}%`,Ae<90),ce("mem",Fe,`${Fe.toFixed(0)}%`,Fe<90,G(Pe,qe)),ce("ws",Oe/se.ws*100,String(Oe),Oe<100),ce("rate",je/se.rate*100,`${je.toFixed(1)}/s`,je<40),oe){let Me=Ae>=90||Fe>=90||je>=40;oe.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",oe.classList.toggle("is-warn",Me)}}catch{}}setTimeout(te,4e3),setInterval(te,5e3)})()}let K={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u5F48\u5E55\u6A23\u5F0F",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-themes","sec-viewer-config-defaults","sec-viewer-theme","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-overlay-layout"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=K;function _(){let V=document.querySelector(".admin-dash-grid");if(!V)return;let ee="dashboard",W=null;function Q(pe){return s.moderation.orderedIds.indexOf(pe)!==-1?"moderation-grid":s.assets.orderedIds.indexOf(pe)!==-1?"assets-grid":"settings-grid"}function ne(){let pe=V.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),xe=V.querySelector("[data-route-note]"),Ie=V.querySelector("[data-route-action]"),Ae=Ie?Array.prototype.slice.call(Ie.children):[],Fe=De=>De.querySelector(".admin-ui-page-actions")||Ae.find(Ke=>Ke._adminHomeHead===De)||null,Pe=(De,Ke)=>{Ie&&(Ae.forEach(Ue=>{Ue!==De&&(Ue._adminHomeHead?Ue._adminHomeHead.appendChild(Ue):Ue.remove())}),De&&De.parentNode!==Ie&&(De._adminHomeHead=Ke,Ie.appendChild(De)))};if(!pe){Pe(null,null);return}let qe=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(ee)),Oe=Array.prototype.slice.call(V.querySelectorAll(".admin-ui-page-head"));Oe.forEach(De=>De.classList.remove("is-merged-into-topbar"));let je=(K[ee]?.title||"").trim().replace(/\s+/g," "),Me=null,We=null,Ge=null;if(Oe.forEach(De=>{let Ke=De.querySelector(".admin-ui-page-title"),Ue=Ke&&Ke.textContent.trim().replace(/\s+/g," ");if(Ue&&(qe||Ue===pe||Ue===je)){if(De.offsetParent!==null){Me===null&&(Me=De.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ve=Fe(De);Ve&&!We&&(We=Ve,Ge=De)}De.classList.add("is-merged-into-topbar")}}),Pe(We,Ge),xe){let De=Me||"";xe.innerHTML!==De&&(xe.innerHTML=De),xe.toggleAttribute("hidden",!Me)}}function re(){let pe=K[ee],xe=new Set((pe.sections||[]).map(Q)),Ie=Ae=>Array.from(Ae.children).some(Fe=>getComputedStyle(Fe).display!=="none");V.querySelectorAll(".admin-route-sections").forEach(Ae=>{if(!xe.has(Ae.id)){Ae.style.display="none";return}Ae.style.display="",Ae.style.display=Ie(Ae)?"":"none"})}let le=()=>{let pe=K[ee],xe=new Set(pe.sections);V.querySelectorAll('[id^="sec-"]').forEach(Ie=>{Ie.id&&(Ie.style.display=xe.has(Ie.id)?"":"none")}),W&&window.AdminTabs?.hasTabsFor?.(ee)&&window.AdminTabs.applyTabSectionVisibility(ee,W,V),re(),ne()},ue=null,me=null;function Te(){let pe=me&&document.getElementById(me);!pe||!pe.getClientRects().length||(me=null,pe.tagName==="DETAILS"&&(pe.open=!0),pe.scrollIntoView({block:"start"}))}function Ee(pe){let xe=window.location.hash||"",Ie=xe.indexOf("?");if(Ie===-1)return"";let Ae=I(xe);if(!Ae)return"";let Fe=xe.match(/^#\/([\w-]+)/),Pe=g(Ae.nav,Ae.tab,Fe&&Fe[1]||Ae.raw);return Pe.route===pe.route&&(Pe.tab||null)===(pe.tab||null)&&(Pe.fold||null)===(pe.fold||null)?xe.slice(Ie):""}let Le=(pe,xe,Ie)=>{let Ae=g(pe,xe,Ie);Ie=Ae.rawName,ee=Ae.route,V.dataset.activeRoute=ee;let Fe=Ae.tab,Pe=(Ae.fold?H(ee,Ae.fold):Ie&&Ie!==ee?"#/"+Ie:H(ee,Fe))+Ee(Ae);if(window.location.hash!==Pe){try{history.replaceState(null,"",Pe)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let qe=K[ee],Oe=Array.from(V.querySelectorAll(".admin-dash-nav-row[data-route]")),je=Ie!==ee?Oe.find(He=>He.dataset.route===Ie):null;Oe.forEach(He=>{let Ye=je?He===je:He.dataset.route===ee;He.classList.toggle("is-active",Ye),He.setAttribute("aria-selected",Ye?"true":"false")});let Me=V.querySelector("[data-route-kicker]"),We=V.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(He){return He},De="adminRouteTitle_"+ee,Ke="adminRouteKicker_"+ee,Ue=Ge(De),Je=Ge(Ke);Me&&(Me.textContent=Je!==Ke?Je:qe.kicker),We&&(We.textContent=Ue!==De?Ue:qe.title);let Ve=ee==="dashboard"||ee==="live";V.querySelectorAll('[data-route-view="dashboard"]').forEach(He=>{He.style.display=Ve?"":"none"}),Ve?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),W=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(ee,Fe),V.dataset.activeLeaf=Fe||ee,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:Fe}})),re(),ne(),se(ee,Fe),oe(Ie,ee,Fe),Ae.fold!==ue&&(ue=Ae.fold,me=Ae.foldSection),Te();try{history.replaceState(null,"",Pe)}catch{}};function oe(pe,xe,Ie){window.AdminBreadcrumb?.render(V,pe,xe,Ie)}function se(pe,xe){let Ie=V.querySelector("[data-admin-tabs-host]");if(!Ie){let Ae=V.querySelector(".admin-dash-topbar");if(!Ae)return;Ie=document.createElement("div"),Ie.dataset.adminTabsHost="",Ae.insertAdjacentElement("afterend",Ie)}if(Ie.innerHTML="",window.AdminTabs?.hasTabsFor?.(pe)&&xe){Ie.hidden=!1;let Ae=window.AdminTabs.renderTabStrip(pe,xe,{onSelect:Fe=>Le(pe,Fe)});Ae&&Ie.appendChild(Ae),Ie.classList.remove("admin-tabs-host--accordion");return}Ie.classList.remove("admin-tabs-host--accordion"),Ie.hidden=!0}y&&window.removeEventListener("hashchange",y),y=()=>{let pe=I(window.location.hash),xe=(window.location.hash||"").match(/^#\/([\w-]+)/),Ie=xe?xe[1]:null;pe&&Le(pe.nav,pe.tab,Ie||pe.raw)},window.addEventListener("hashchange",y),V.querySelectorAll("[data-route]").forEach(pe=>{pe.addEventListener("click",xe=>{xe.preventDefault(),Le(pe.dataset.route)})});let ce=I(window.location.hash),G=(window.location.hash||"").match(/^#\/([\w-]+)/),te=G?G[1]:ce?.raw||ce?.nav||"live";Le(ce?.nav||"live",ce?.tab||null,te),window._adminNavigateTo=()=>Le(ee,ue||W);let ae=!1,de=0,he=0;function ke(){if(ae)return;ae=!0;let pe=()=>{ae&&(ae=!1,de&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(de),clearTimeout(he),de=0,he=0,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:ee,leaf:W}})),Te())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(de=requestAnimationFrame(pe),he=setTimeout(pe,100)):he=setTimeout(pe,0)}let $e=V.querySelector(".admin-dash-main");$e&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{ke()}).observe($e,{childList:!0,subtree:!0}),ke())}function P(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let V=document.querySelector("[data-open-help]");V&&V.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let ee=document.querySelector("[data-open-palette]");if(ee){let Q=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};ee.addEventListener("click",Q),ee.addEventListener("keydown",ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Q())})}let W=document.getElementById("logoutButton");W&&W.addEventListener("click",async()=>{try{let Q=await B("/logout",{method:"POST"});Q.redirected&&(window.location.href=Q.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Q){console.error("Logout Failed:",Q),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Q=>{Q.name&&Q.addEventListener("change",async function(){let ne=this.name,re=this.checked;await t(ne,re)})}),document.querySelectorAll("details[id^='sec-']").forEach(Q=>{Q.addEventListener("toggle",()=>{let ne=c();ne[Q.id]=Q.open,l(ne)})}),document.querySelectorAll(".setting-input").forEach(Q=>{Q.addEventListener("change",async function(){let ne=this.dataset.key,re=parseInt(this.dataset.index),le=this.value;this.type==="number"&&(le=parseInt(le)),await e(ne,le,re,this)})})}function j(){if(u.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}O()}else L()}async function z(){await n(),j(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function X(){window.AdminThemes&&window.AdminThemes.init()}function Z(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{C&&(C.disconnect(),C=null)}),z()})});var Ct=ye(()=>{(function(){"use strict";var h=null;async function v(){var F=(document.getElementById("pollQuestion")?.value||"").trim(),R=document.querySelectorAll(".poll-option-input"),D=Array.from(R).map(function(M){return M.value.trim()}).filter(Boolean);if(!F){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(D.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var C=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:F,options:D})}),y=await C.json();if(!C.ok){window.showToast(y.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),U(y),B()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function u(){try{var F=await window.csrfFetch("/admin/poll/end",{method:"POST"}),R=await F.json();if(!F.ok){window.showToast(R.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),U(R),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function $(){try{var F=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),R=await F.json();if(!F.ok){window.showToast(R.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),U(R),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function B(){h&&(clearInterval(h),h=null);var F=async function(){try{var R=await fetch("/admin/poll/status",{credentials:"same-origin"});if(R.ok){var D=await R.json();U(D),D.state!=="active"&&h&&(clearInterval(h),h=null)}}catch{}};F(),h=setInterval(F,2e3)}function A(){var F=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var R=document.querySelector('#sec-polls [data-poll-action="add"]');R&&R.click()},extra:`
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
      </div>`});return F.dataset.emptyKind="poll",F}function U(F){var R=document.getElementById("pollStatusDisplay");if(R){if(R.textContent="",!F||F.state==="idle"){R.appendChild(A());return}var D=F.total_votes||0,C=Math.max(1,...F.options.map(function(T){return T.count})),y=document.createElement("div");y.className="admin-poll-status-card";var M=document.createElement("div");M.className="admin-poll-status-header";var E=document.createElement("span");E.className="admin-poll-status-dot"+(F.state==="active"?" is-active":" is-ended"),M.appendChild(E);var x=document.createElement("span");x.className="admin-poll-status-question",x.textContent=F.question||"",M.appendChild(x);var I=document.createElement("span");I.className="admin-poll-status-state",I.textContent=F.state,M.appendChild(I),y.appendChild(M),F.options.forEach(function(T){var g=document.createElement("div");g.className="admin-poll-status-row";var c=document.createElement("div");c.className="admin-poll-status-label";var l=document.createElement("span"),o=document.createElement("b");o.textContent=T.key+".",l.appendChild(o),l.appendChild(document.createTextNode(" "+T.text));var n=document.createElement("span");n.textContent=T.count+" ("+T.percentage+"%)",c.appendChild(l),c.appendChild(n);var f=document.createElement("div");f.className="admin-poll-status-bar";var p=document.createElement("div");p.className="admin-poll-status-bar-fill",p.style.width=T.count/C*100+"%",f.appendChild(p),g.appendChild(c),g.appendChild(f),y.appendChild(g)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",D),y.appendChild(H),R.appendChild(y)}}function N(){var F=document.getElementById("sec-polls");if(F&&F.dataset.pollLegacyBound!=="1"){F.dataset.pollLegacyBound="1";var R=document.getElementById("pollCreateBtn");R&&R.addEventListener("click",v);var D=document.getElementById("pollEndBtn");D&&D.addEventListener("click",u);var C=document.getElementById("pollResetBtn");C&&C.addEventListener("click",$);var y=document.getElementById("pollAddOptionBtn");y&&y.addEventListener("click",function(){var x=document.getElementById("pollOptionsContainer");if(x){var I=x.querySelectorAll(".poll-option-input").length;if(I>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+I)+". Option "+(I+1),H.maxLength=100,x.appendChild(H)}});var M=document.getElementById("pollRemoveOptionBtn");M&&M.addEventListener("click",function(){var x=document.getElementById("pollOptionsContainer");if(x){var I=x.querySelectorAll(".poll-option-input");if(I.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}I[I.length-1].remove()}});var E=F;E&&(E.addEventListener("toggle",function(){E.open&&B()}),B()),window.addEventListener("beforeunload",function(){h&&(clearInterval(h),h=null)})}}document.addEventListener("admin-panel-rendered",function(){N()}),document.addEventListener("DOMContentLoaded",function(){N()}),window.addEventListener("hashchange",function(){var F=window.location.hash||"";F.indexOf("/polls")!==-1&&N()})})()});var Bt=ye(()=>{(function(){"use strict";var h="sec-timeline-export",v="danmu.adminHistoryExports.v1",u=10,$={rawText:!0,polls:!0,masked:!1,metadata:!0},B=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],A=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],U={range:"24h",filters:Object.assign({},$),format:"JSON"};function N(){return document.getElementById(h)}function F(){try{return JSON.parse(localStorage.getItem(v)||"[]")}catch{return[]}}function R(a){try{localStorage.setItem(v,JSON.stringify(a.slice(0,u)))}catch{}}function D(a){var m=F();m.unshift(a),R(m)}function C(a){return a?a<1024?a+" B":a<1024*1024?(a/1024).toFixed(1)+" KB":(a/1024/1024).toFixed(1)+" MB":"0 B"}function y(a){try{var m=new Date(a),S=new Date,k=m.toDateString()===S.toDateString();if(k)return ServerI18n.t("historyV2TodayAt",{time:String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0")});var L=new Date(S);return L.setDate(S.getDate()-1),m.toDateString()===L.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0")}):m.getMonth()+1+"-"+String(m.getDate()).padStart(2,"0")+" "+String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0")}catch{return a||""}}function M(a){if(a==="1h")return 1;if(a==="24h")return 24;if(a==="7d")return 168;if(a==="today"){var m=new Date,S=new Date(m.getFullYear(),m.getMonth(),m.getDate());return Math.max(1,Math.ceil((m-S)/36e5))}return a==="yest"?48:a==="live"?6:24}function E(a){return a.filter(function(m){return!(!U.filters.rawText&&!m.is_poll&&!m.muted&&!m.banned||!U.filters.polls&&m.is_poll||!U.filters.masked&&(m.muted||m.banned))}).map(function(m){if(!U.filters.metadata){var S=Object.assign({},m);return delete S.clientIp,delete S.fingerprint,S}return m})}function x(a){var m=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],S=window.AdminUtils.csvCell,k=function(O){return O.status?O.status:O.banned?"banned":O.muted?"muted":O.is_poll?"poll":"ok"},L=a.map(function(O){return[O.timestamp||"",O.nickname||"",O.text||"",O.color?"#"+O.color:"",O.size!=null?O.size:"",O.speed!=null?O.speed:"",O.opacity!=null?O.opacity:"",O.isImage?"true":"false",O.fontInfo&&O.fontInfo.name||"",O.clientIp||"",O.fingerprint||"",k(O),O.delivery_reason||""].map(S).join(",")});return[m.join(","),L.join(`\r
`)].filter(Boolean).join(`\r
`)}function I(a){return a.map(function(m,S){var k=new Date(m.timestamp||Date.now()),L=H(k),O=H(new Date(k.getTime()+3e3)),K=(m.nickname?"["+m.nickname+"] ":"")+(m.text||"");return S+1+`
`+L+" --> "+O+`
`+K+`
`}).join(`
`)}function H(a){var m=function(S,k){return String(S).padStart(k||2,"0")};return m(a.getHours())+":"+m(a.getMinutes())+":"+m(a.getSeconds())+","+m(a.getMilliseconds(),3)}function T(a,m){var S=URL.createObjectURL(a),k=document.createElement("a");k.href=S,k.download=m,k.click(),URL.revokeObjectURL(S)}function g(){var a=M(U.range),m=document.getElementById("histv2-go");m&&(m.disabled=!0,m.dataset.busy="1"),fetch("/admin/history?hours="+a+"&limit=10000",{credentials:"same-origin"}).then(function(S){if(!S.ok)throw new Error("http "+S.status);return S.json()}).then(function(S){var k=S&&S.records||[],L=E(k);if(L.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var O=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),K,_;if(U.format==="JSON"){var P=JSON.stringify(L,null,2);_=new Blob([P],{type:"application/json"}),K="danmu-history-"+O+".json"}else U.format==="CSV"?(_=new Blob(["\uFEFF"+x(L)],{type:"text/csv;charset=utf-8;"}),K="danmu-history-"+O+".csv"):(_=new Blob([I(L)],{type:"application/x-subrip;charset=utf-8;"}),K="danmu-history-"+O+".srt");T(_,K),D({name:K,fmt:U.format,size:_.size,when:new Date().toISOString(),count:L.length}),l(),c(L.length,_.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:L.length}),!0)}).catch(function(S){console.error("[history-v2] export failed",S),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:S.message||S}),!1)}).finally(function(){m&&(m.disabled=!1,delete m.dataset.busy)})}function c(a,m){var S=document.getElementById("histv2-estimate");S&&(S.textContent=ServerI18n.t("historyV2Estimate",{count:a||"\u2014",size:m?C(m):"\u2014 MB"}))}function l(){var a=document.getElementById("histv2-recent-list");if(a){var m=F();if(m.length===0){a.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}a.innerHTML=m.map(function(S){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+S.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(S.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(y(S.when))+" \xB7 "+C(S.size)+"</div></div></div>"}).join("")}}function o(a){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(a):a==null?"":String(a).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}function n(){return B.map(function(a){var m=U.range===a.k;return'<button type="button" class="histv2-chip'+(m?" is-active":"")+'" data-histv2-range="'+a.k+'">'+o(ServerI18n.t(a.labelKey))+(a.k==="live"?" \xB7 "+f():"")+"</button>"}).join("")}function f(){var a=new Date;return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function p(){var a=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return a.map(function(m){var S=!!U.filters[m.k];return'<button type="button" class="histv2-toggle'+(S?" is-on":"")+'" data-histv2-toggle="'+m.k+'"><span class="histv2-toggle-mark">'+(S?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(m.labelKey))+"</span></button>"}).join("")}function w(){return A.map(function(a){var m=U.format===a.k;return'<button type="button" class="histv2-fmt'+(m?" is-selected":"")+'" data-histv2-fmt="'+a.k+'">'+(m?'<span class="histv2-fmt-check">\u2713</span>':"")+(a.badge?'<span class="histv2-fmt-badge">'+o(a.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+a.k+'</div><div class="histv2-fmt-desc">'+o(a.desc)+"</div></button>"}).join("")}function d(){var a=N();a&&(a.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+p()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+w()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",a.addEventListener("click",s),l(),t())}function s(a){var m=a.target.closest("[data-histv2-range]");if(m){U.range=m.dataset.histv2Range,r(),t();return}var S=a.target.closest("[data-histv2-toggle]");if(S){var k=S.dataset.histv2Toggle;U.filters[k]=!U.filters[k],b(),t();return}var L=a.target.closest("[data-histv2-fmt]");if(L){U.format=L.dataset.histv2Fmt,e(),t();return}var O=a.target.closest("#histv2-go");if(O&&!O.dataset.busy){g();return}}function r(){var a=document.getElementById("histv2-chips");a&&(a.innerHTML=n())}function b(){var a=document.getElementById("histv2-toggles");a&&(a.innerHTML=p())}function e(){var a=document.getElementById("histv2-formats");a&&(a.innerHTML=w())}function t(){t._t&&clearTimeout(t._t),t._t=setTimeout(function(){var a=M(U.range);fetch("/admin/history?hours="+a+"&limit=10000",{credentials:"same-origin"}).then(function(m){return m.ok?m.json():null}).then(function(m){if(!m)return c(0,0);var S=E(m&&m.records||[]),k=U.format==="JSON"?220:U.format==="CSV"?110:80;c(S.length,S.length*k)}).catch(function(){c(0,0)})},250)}function i(){var a=N(),m=document.getElementById("admin-backup-v2-page");if(!a){var S=document.getElementById("settings-grid");if(!S)return;a=document.createElement("div"),a.id=h,a.className="admin-ui-card lg:col-span-2 history-v2-section",S.appendChild(a),d()}m&&m.parentElement&&a.previousElementSibling!==m&&m.parentElement.insertBefore(a,m.nextSibling)}document.addEventListener("admin-panel-rendered",i),document.addEventListener("admin-route-applied",i),window.AdminHistoryV2={refresh:t,state:U}})()});var Ft=ye(()=>{(function(){"use strict";let h="admin-replay-bar";function v(){let $=document.getElementById(h);return $||(document.body?($=document.createElement("div"),$.id=h,$.className="admin-replay-bar",$.hidden=!0,$.setAttribute("role","status"),$.setAttribute("aria-live","polite"),$.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore($,document.body.firstChild),$):null)}function u($){let B=v();B&&(B.hidden=!$)}window.AdminReplayBar={ensure:v,setActive:u},document.addEventListener("admin-panel-rendered",v)})()});var Dt=ye(()=>{(function(){"use strict";let h=null;function v(y){window.AdminReplayBar&&window.AdminReplayBar.ensure();let M=document.getElementById("replayPauseBtn"),E=document.getElementById("replayResumeBtn"),x=document.getElementById("replayStopBtn"),I=document.getElementById("replayProgress"),H=(c,l)=>{c&&c.classList.toggle("hidden",!l)},T=y==="playing",g=y==="paused";H(M,T),H(E,g),H(x,T||g),H(I,T||g),!T&&!g&&I&&(I.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(T||g)}function u(){h&&clearInterval(h),h=setInterval(async()=>{try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let M=await y.json(),E=document.getElementById("replayProgress");E&&(E.textContent=ServerI18n.t("replayingProgress").replace("{sent}",M.sent).replace("{total}",M.total)),v(M.state),M.state==="stopped"&&(clearInterval(h),h=null)}catch{}},500)}async function $(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),v("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function B(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),v("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),v("stopped"),h&&(clearInterval(h),h=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let U=null,N=null,F=0,R=null;function D(){[["replayPauseBtn",$],["replayResumeBtn",B],["replayStopBtn",A]].forEach(function([M,E]){let x=document.getElementById(M);x&&!x.dataset.replayCtrlsBound&&(x.addEventListener("click",E),x.dataset.replayCtrlsBound="1")})}async function C(){try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let M=await y.json();(M.state==="playing"||M.state==="paused")&&(v(M.state),u())}catch{}}window.AdminReplayControls={notifyStarted:function(){v("playing"),u()}},document.addEventListener("admin-panel-rendered",function(){D(),C()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(D,800)})})()});var Mt=ye(()=>{(function(){"use strict";let h="sec-ratelimit",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(M){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[M]})},u=(y,M)=>ServerI18n.t(y,M),$=(y,M)=>{typeof showToast=="function"&&showToast(y,M)},B={viewer:{targets:["fire","fire_fingerprint","fire_global"],unitKey:"rlMaxMessages"},other:{targets:["api","admin","login","fire_admin"],unitKey:"rlMaxRequests"}},A={fire:"rlTargetViewer",fire_fingerprint:"rlTargetDevice",fire_global:"rlTargetRoom",api:"ratelimitScopeApiDesc",admin:"ratelimitScopeAdminDesc",login:"ratelimitScopeLoginDesc",fire_admin:"rlTargetTokenLane"},U=[10,30,60,300,3600];function N(y){return y>=3600&&y%3600===0?u("rlHours",{n:y/3600}):y>60&&y%60===0?u("rlMinutes",{n:y/60}):u("rlSeconds",{n:y})}function F(y){let M=B[y];return`
            <div class="admin-ratelimit-form" data-rl-form="${y}">
              <div class="admin-ratelimit-row-body admin-ratelimit-row-body--form">
                <label class="admin-ratelimit-field">
                  <span>${u("rlTargetLabel")}</span>
                  <select data-rl-target>
                    ${M.targets.map(E=>`<option value="${E}">${v(u(A[E]))}</option>`).join("")}
                  </select>
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u(M.unitKey)}</span>
                  <input type="number" step="1" inputmode="numeric" data-rl-limit />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u("rlPer")}</span>
                  <select data-rl-window>
                    ${U.map(E=>`<option value="${E}">${v(N(E))}</option>`).join("")}
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
            </div>`}function R(){return`
      <div id="${h}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-rows">
          <div class="admin-ratelimit-row" data-rl-pace>
            ${F("viewer")}
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
            ${F("other")}
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
      </div>`}function D(y){let M={},E={},x=!1,I=Array.from(y.querySelectorAll("[data-rl-form]")),H=_=>({target:_.querySelector("[data-rl-target]"),limit:_.querySelector("[data-rl-limit]"),window:_.querySelector("[data-rl-window]"),current:_.querySelector("[data-rl-current]"),barWrap:_.querySelector("[data-rl-bar-wrap]"),bar:_.querySelector("[data-rl-bar]"),spark:_.querySelector("[data-rl-spark]")}),T=_=>u(A[_]||_);function g(_){let P=H(_);P.window.disabled=P.limit.value.trim()!==""&&Number(P.limit.value)===0}function c(_){let P=H(_),j=M[P.target.value];if(j){if(P.limit.min=j.min,P.limit.max=j.max,P.limit.value=j.limit,!P.window.querySelector(`option[value="${j.window}"]`)){let z=document.createElement("option");z.value=String(j.window),z.textContent=N(j.window),P.window.appendChild(z)}P.window.value=String(j.window),g(_)}}function l(_){let P=H(_),j=E[P.target.value],z=j&&j.hits||0,X=j&&j.violations||0;P.current.textContent=j?u("ratelimitHitsViolations",{hits:z.toLocaleString(),viol:X.toLocaleString()}):"\u2014",P.barWrap.hidden=z+X===0,P.bar.style.width=z+X===0?"0":(X/(z+X)*100).toFixed(1)+"%",o(P.spark,j&&(j.bucket_history||j.history))}function o(_,P){if(!_)return;let j=96,z=24,X=Array.isArray(P)&&P.length?P.slice(-24):new Array(24).fill(0),Z=Math.max(1,...X),V=j/Math.max(1,X.length-1),ee=X.map((Q,ne)=>`${(ne*V).toFixed(1)},${(z-2-Q/Z*(z-4)).toFixed(1)}`).join(" "),W=_.querySelector("polyline");W&&W.setAttribute("points",ee)}async function n(){try{let _=await fetch("/admin/ratelimit/config",{credentials:"same-origin"});if(!_.ok)return;let P=await _.json();M=P&&P.scopes||{},I.forEach(c)}catch{}}async function f(){let _=null;try{let Z=await fetch("/admin/metrics",{credentials:"same-origin"});Z.ok&&(_=await Z.json())}catch{}let P=_&&_.rate_limits;if(E=P||{},I.forEach(l),!_)return;d(),w(_.recent_violations);let j=y.querySelector("[data-rl-sum-viol]"),z=y.querySelector("[data-rl-sum-viol-rate]"),X=y.querySelector("[data-rl-sum-locked]");if(P&&P.totals){let Z=P.totals.hits||0,V=P.totals.violations||0;j&&(j.textContent=V.toLocaleString()),z&&(z.textContent=Z+V>0?u("ratelimitBlockRateValue",{rate:(V/(Z+V)*100).toFixed(1)}):"\u2014"),X&&(X.textContent=u("ratelimitLockedSources",{n:(P.totals.locked_sources||0).toLocaleString()}))}else j&&(j.textContent="\u2014"),z&&(z.textContent="\u2014"),X&&(X.textContent="\u2014")}async function p(){try{let _=window.AdminBootstrap;_&&typeof _.primeBootstrap=="function"&&await _.primeBootstrap();let P=_&&_.bootstrapSection?_.bootstrapSection("history_stats"):null,j=_&&_.bootstrapSection?_.bootstrapSection("blacklist"):null,[z,X]=await Promise.all([P?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"}),j?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})]),Z=P||(z&&z.ok?await z.json():null);if(Z){let ee=y.querySelector("[data-rl-sum-hits]"),W=y.querySelector("[data-rl-sum-hits-delta]");ee&&(ee.textContent=(Z.stats&&Z.stats.last_24h||0).toLocaleString()),W&&(W.textContent=u("ratelimitSumTotal",{n:(Z.stats&&Z.stats.total||0).toLocaleString()}))}let V=j||(X&&X.ok?await X.json():null);if(V){let ee=Array.isArray(V)?V:V.entries||V.keywords||[],W=y.querySelector("[data-rl-sum-black]");W&&(W.textContent=ee.length?u("ratelimitCountUnit",{n:ee.length}):"0")}}catch{}}function w(_){let P=y.querySelector("[data-rl-vbody]"),j=y.querySelector("[data-rl-vcount]");if(!P)return;let z=Array.isArray(_)?_:[];if(j&&(j.textContent=z.length?String(z.length):""),z.length===0){P.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoViolationsYet")}</div>`;return}let X=V=>String(V).padStart(2,"0"),Z=V=>{let ee=new Date(V*1e3);return`${X(ee.getHours())}:${X(ee.getMinutes())}:${X(ee.getSeconds())}`};P.innerHTML=z.slice(0,30).map(V=>`
        <div class="admin-ratelimit-vfeed-row">
          <span class="admin-ratelimit-vfeed-time">${Z(V.ts)}</span>
          <span class="admin-ratelimit-vfeed-scope">${v(T(V.scope||""))}</span>
          <span class="admin-ratelimit-vfeed-ip">${v(V.ip||"")}</span>
        </div>
      `).join("")}function d(){let _=y.querySelector("[data-rl-suggestions]");if(_&&(_.innerHTML=Object.keys(A).map(P=>{let j=E[P],z=j&&j.suggestion;if(!z)return"";let X=u("ratelimitSuggestDetail",{p95:Number(z.p95_per_second||0).toFixed(2),limit:j.limit||"\u2014",window:j.window||"\u2014",suggLimit:z.suggested_limit,suggWindow:z.suggested_window});return`
          <div class="admin-ratelimit-suggest" data-rl-suggest="${P}">
            <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
            <span class="admin-ratelimit-suggest-body">
              <span class="admin-ratelimit-suggest-title">${v(T(P))}</span>
              <span class="admin-ratelimit-suggest-detail">${v(X)}</span>
            </span>
            <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${P}" data-rl-suggest-limit="${Number(z.suggested_limit)}" data-rl-suggest-window="${Number(z.suggested_window)}">${u("ratelimitApplySuggestBtn")}</button>
          </div>`}).join(""),_.children.length&&!x)){x=!0;let P=_.closest("details");P&&(P.open=!0)}}async function s(_,P,j,z){_.disabled=!0;try{let X=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:P,limit:j,window:z})});if(X.ok){let V=await X.json();return M[P]=Object.assign({},M[P],{limit:V.limit,window:V.window,saved:!0}),V.persisted===!1?$(u("rlNotPersisted"),!1):$(u("ratelimitPaceSavedToast"),!0),!0}let Z=await X.clone().json().catch(()=>({}));$(u("ratelimitApplyFailedToast",{msg:Z&&Z.error||`HTTP ${X.status}`}),!1)}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{_.disabled=!1}return!1}let r={cooldown:y.querySelector("[data-rl-cooldown]"),max:y.querySelector("[data-rl-onscreen-max]"),mode:y.querySelector("[data-rl-onscreen-mode]")};async function b(){try{let _=await fetch("/get_settings",{credentials:"same-origin"});if(_.ok){let P=(await _.json()).ViewerFireCooldownSec;r.cooldown&&Array.isArray(P)&&(r.cooldown.value=P[1])}}catch{}try{let _=await fetch("/admin/api/onscreen-limits",{credentials:"same-origin"});if(_.ok){let P=await _.json();r.max&&(r.max.value=P.max_onscreen_danmu),r.mode&&(r.mode.value=P.overflow_mode),e()}}catch{}}function e(){!r.max||!r.mode||(r.mode.disabled=Number(r.max.value)===0)}r.max&&r.max.addEventListener("input",e);async function t(_,P,j){_.disabled=!0;try{let z=await window.csrfFetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});if(z.ok)$(u("ratelimitPaceSavedToast"),!0);else{let X=await z.clone().json().catch(()=>({}));$(u("ratelimitApplyFailedToast",{msg:X&&X.error||`HTTP ${z.status}`}),!1)}}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{_.disabled=!1}}y.addEventListener("click",async _=>{let P=_.target.closest("[data-rl-action]");if(!P)return;let j=P.dataset.rlAction;if(j==="save"){let z=P.closest("[data-rl-form]"),X=H(z),Z=X.limit.value.trim(),V=Number(Z),ee=parseInt(X.window.value,10);if(Z===""||!Number.isInteger(V)||V<0||!Number.isFinite(ee)){$(u("ratelimitInvalidInputToast"),!1);return}let W=M[X.target.value];if(W&&(V<W.min||V>W.max)){$(u("rlOutOfRange",{min:W.min,max:W.max}),!1);return}await s(P,X.target.value,V,ee)&&(g(z),f());return}if(j==="apply-suggest"){let z=P.dataset.rlApply,X=parseInt(P.dataset.rlSuggestLimit,10),Z=parseInt(P.dataset.rlSuggestWindow,10);if(!z||!Number.isFinite(X)||!Number.isFinite(Z))return;let V=M[z];if(V&&(X<V.min||X>V.max)){$(u("rlOutOfRange",{min:V.min,max:V.max}),!1);return}await s(P,z,X,Z)&&(I.forEach(ee=>{H(ee).target.value===z&&c(ee)}),f());return}if(j==="save-cooldown"){let z=parseFloat(r.cooldown&&r.cooldown.value);if(!Number.isFinite(z)||z<0||z>10){$(u("ratelimitInvalidInputToast"),!1);return}await t(P,"/admin/update",{type:"ViewerFireCooldownSec",value:z,index:1});return}if(j==="save-onscreen"){let z=r.max?r.max.value.trim():"",X=Number(z);if(z===""||!Number.isInteger(X)||X<0||X>200){$(u("ratelimitInvalidInputToast"),!1);return}await t(P,"/admin/api/onscreen-limits",{max_onscreen_danmu:X,overflow_mode:r.mode&&r.mode.value==="queue"?"queue":"drop"});return}if(j==="reset"){P.disabled=!0;try{let z=await window.csrfFetch("/admin/ratelimit/reset",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(z.ok){let X=await z.json();M=X&&X.scopes||M,I.forEach(c),f(),X&&X.persisted===!1?$(u("rlNotPersisted"),!1):$(u("ratelimitResetDoneToast"),!0)}else $(u("ratelimitApplyFailedToast",{msg:`HTTP ${z.status}`}),!1)}catch{$(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{P.disabled=!1}}}),y.addEventListener("change",_=>{let P=_.target.closest&&_.target.closest("[data-rl-form]");!P||!_.target.matches("[data-rl-target]")||(c(P),l(P))}),y.addEventListener("input",_=>{let P=_.target.closest&&_.target.closest("[data-rl-form]");P&&_.target.matches("[data-rl-limit]")&&g(P)});let i=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,a={allowlist:[],denylist:[]},m={input:y.querySelector("[data-rl-ip-input]"),select:y.querySelector("[data-rl-ip-select]"),addBtn:y.querySelector("[data-rl-ip-add]"),summary:y.querySelector("[data-rl-ip-summary]"),error:y.querySelector("[data-rl-ip-error]"),allowCount:y.querySelector("[data-rl-ip-allow-count]"),denyCount:y.querySelector("[data-rl-ip-deny-count]"),allowBody:y.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:y.querySelector('[data-rl-ip-body="denylist"]')};function S(_){if(m.error){if(!_){m.error.hidden=!0,m.error.textContent="";return}m.error.hidden=!1,m.error.textContent=_}}function k(_){let P=_==="allowlist"?m.allowBody:m.denyBody,j=_==="allowlist"?m.allowCount:m.denyCount;if(!P||!j)return;let z=Array.isArray(a[_])?a[_]:[];if(j.textContent=String(z.length),z.length===0){let X=ServerI18n.t(_==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");P.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:X})}</div>`;return}P.innerHTML=z.map(X=>{let Z=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:v(X)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${v(X)}">
          <span class="admin-ratelimit-ip-chip-cidr">${v(X)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${v(X)}" data-rl-ip-remove-kind="${_}" title="${Z}" aria-label="${Z}">\xD7</button>
        </div>
      `}).join("")}function L(){if(k("allowlist"),k("denylist"),m.summary){let _=(a.allowlist||[]).length,P=(a.denylist||[]).length;m.summary.textContent=ServerI18n.t("ratelimitIpCounts",{allow:_,deny:P})}}async function O(){try{let _=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!_.ok){m.summary&&(m.summary.textContent=ServerI18n.t("ratelimitLoadFailedStatus",{status:_.status}));return}let P=await _.json();P&&typeof P=="object"&&(a={allowlist:Array.isArray(P.allowlist)?P.allowlist:[],denylist:Array.isArray(P.denylist)?P.denylist:[]},L())}catch{m.summary&&(m.summary.textContent=ServerI18n.t("ratelimitNetworkError"))}}async function K(_,{toastLabel:P}={}){try{let j=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(j.ok){let Z=await j.json();return a={allowlist:Array.isArray(Z.allowlist)?Z.allowlist:[],denylist:Array.isArray(Z.denylist)?Z.denylist:[]},L(),S(""),P&&typeof showToast=="function"&&showToast(P,!0),!0}let z=await j.json().catch(()=>({})),X=z&&z.error||`HTTP ${j.status}`;return S(X),!1}catch{return S(ServerI18n.t("ratelimitNetworkError")),!1}}m.addBtn&&m.addBtn.addEventListener("click",async()=>{if(!m.input||!m.select)return;let _=(m.input.value||"").trim();if(!_){S(ServerI18n.t("ratelimitIpRequiredError"));return}if(!i.test(_)){S(ServerI18n.t("ratelimitIpFormatError"));return}let P=m.select.value==="denylist"?"denylist":"allowlist",j=Array.from(new Set([...a[P]||[],_]));await K({[P]:j},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(P==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:_})})&&(m.input.value="")}),m.input&&(m.input.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),m.addBtn&&m.addBtn.click())}),m.input.addEventListener("input",()=>{m.error&&!m.error.hidden&&S("")})),y.addEventListener("click",async _=>{let P=_.target.closest("[data-rl-ip-remove]");if(!P)return;let j=P.dataset.rlIpRemove,z=P.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",X=(a[z]||[]).filter(Z=>Z!==j);await K({[z]:X},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(z==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:j})})}),O(),n(),b(),f(),p()}function C(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(h))return;y.insertAdjacentHTML("beforeend",R());let M=document.getElementById(h);M&&D(M)}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var Nt=ye(()=>{(function(){"use strict";let h="sec-viewer-theme",v="danmu.viewerTheme.v1",u=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function $(){return`
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
      </details>`}let B=/^#[0-9a-f]{6}$/i,A=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function U(D){return String(D??"").replace(/[&<>"']/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[C])}function N(D){let C={};return!D||typeof D!="object"||(["bg","primary","hero"].forEach(y=>{typeof D[y]=="string"&&B.test(D[y])&&(C[y]=D[y])}),(D.mode==="dark"||D.mode==="light")&&(C.mode=D.mode),typeof D.font=="string"&&/^[\w .-]{1,64}$/.test(D.font)&&(C.font=D.font),(D.logo===null||typeof D.logo=="string"&&A.test(D.logo))&&(C.logo=D.logo)),C}function F(D){let C={...u[0],logo:null};try{let e=localStorage.getItem(v);e&&(C={...C,...N(JSON.parse(e))})}catch{}let y="default";function M(){try{localStorage.setItem(v,JSON.stringify(C))}catch{}}function E(e){let t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return[0,0,0];let i=parseInt(t[1],16);return[i>>16&255,i>>8&255,i&255]}function x([e,t,i]){let a=[e,t,i].map(m=>(m/=255,m<=.03928?m/12.92:Math.pow((m+.055)/1.055,2.4)));return .2126*a[0]+.7152*a[1]+.0722*a[2]}function I(e,t){let i=x(E(e)),a=x(E(t)),[m,S]=i>a?[i,a]:[a,i];return(m+.05)/(S+.05)}function H(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function T(){let e=D.querySelector("[data-vt-presets]");e.innerHTML="",u.forEach(t=>{let i=document.createElement("button");i.type="button",i.className="admin-vt-preset"+(y===t.id?" is-active":""),i.innerHTML=`
          <div class="swatch" style="background:${t.bg}">
            <span style="background:${t.primary}"></span>
            <span style="background:${t.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(t.nameKey)}</div>
          <div class="mode">${ServerI18n.t(t.mode==="dark"?"lbDark":"lbLight")}</div>
        `,i.addEventListener("click",()=>{C={...C,...t},y=t.id,M(),b()}),e.appendChild(i)})}function g(){D.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",C.mode===e.dataset.vtModeBtn)})}function c(){let e=D.querySelector("[data-vt-colors]"),t=C.mode==="dark"?"#F8FAFC":"#0F172A",i=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:t,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:C.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=i.map(a=>{let m=I(C[a.key],a.vs),S=H(m),k=U(C[a.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${k}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${a.label}</span>
                <span class="grade ${S.cls}">${S.label} \xB7 ${m.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${k}" data-vt-color="${a.key}" />
                <input type="text" value="${k}" data-vt-hex="${a.key}" spellcheck="false" />
                <span class="vs">vs ${a.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function l(){let e=D.querySelector("[data-vt-logo-preview]"),t=D.querySelector(".hint-empty"),i=D.querySelector("[data-vt-logo-actions]");C.logo?(e.src=C.logo,e.hidden=!1,t.style.display="none",i.hidden=!1):(e.hidden=!0,t.style.display="",i.hidden=!0)}function o(){let e=D.querySelector("[data-vt-font]");e.value=C.font;let t=D.querySelector("[data-vt-font-specimen]");t.style.fontFamily=C.font}function n(){let e=C.mode==="dark"?"#F8FAFC":"#0F172A",t=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(e,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(C.primary,C.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(C.hero,C.bg)}];D.querySelector("[data-vt-contrast]").innerHTML=t.map(i=>{let a=H(i.ratio);return`<span class="vt-contrast-chip ${a.cls}">${i.lbl} \xB7 ${a.label} ${i.ratio.toFixed(1)}</span>`}).join("")}function f(){let e=D.querySelector("[data-vt-stage]"),t=C.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",C.bg),e.style.setProperty("--vt-primary",C.primary),e.style.setProperty("--vt-hero",C.hero),e.style.setProperty("--vt-fg",t),e.style.fontFamily=C.font;let i=D.querySelector("[data-vt-preview-logo]");if(C.logo){let a=document.createElement("img");a.src=C.logo,a.style.maxHeight="40px",i.replaceChildren(a)}else i.textContent="Danmu Fire"}let p="auto",w="auto";function d(){D.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===p)}),D.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===w)})}async function s(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let t=await e.json(),i=t&&t.ViewerThemeMode&&t.ViewerThemeMode[1],a=t&&t.ViewerLangMode&&t.ViewerLangMode[1];typeof i=="string"&&(p=i),typeof a=="string"&&(w=a),d()}catch{}}async function r(e,t){if(window.csrfFetch)try{let i=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:t,index:1})});if(!i.ok)throw new Error(i.status);window.showToast&&window.showToast(`${e} = ${t}`,!0)}catch(i){console.warn("[admin-viewer-theme] force-mode update failed:",i),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function b(){T(),g(),c(),l(),o(),n(),f(),d()}D.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let t=e.target.dataset.vtColor;B.test(e.target.value)&&(C[t]=e.target.value,y="custom",M(),b())}else if(e.target.matches("[data-vt-hex]")){let t=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(C[t]=e.target.value,y="custom",M(),b())}else e.target.matches("[data-vt-font]")&&(C.font=e.target.value,M(),b())}),D.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let t=e.target.files&&e.target.files[0];if(!t)return;if(t.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let i=new FileReader;i.onload=()=>{C.logo=String(i.result||""),M(),b()},i.readAsDataURL(t)}}),D.addEventListener("click",e=>{let t=e.target.closest("[data-vt-mode-btn]");if(t){C.mode=t.dataset.vtModeBtn,y="custom",M(),b();return}let i=e.target.closest("[data-vt-theme-btn]");if(i){p=i.dataset.vtThemeBtn,d(),r("ViewerThemeMode",p);return}let a=e.target.closest("[data-vt-lang-btn]");if(a){w=a.dataset.vtLangBtn,d(),r("ViewerLangMode",w);return}if(e.target.closest("[data-vt-logo-remove]")){C.logo=null,M(),b();return}let S=e.target.closest("[data-vt-device-btn]");if(S){D.querySelectorAll("[data-vt-device-btn]").forEach(L=>L.classList.toggle("is-active",L===S)),D.querySelector("[data-vt-frame]").dataset.device=S.dataset.vtDeviceBtn;return}let k=e.target.closest("[data-vt-action]");k&&k.dataset.vtAction==="reset"&&(C={...u[0],logo:null},y="default",M(),b())}),b(),s()}document.addEventListener("click",function(D){let C=D.target.closest("[data-vt-jump]");if(!C)return;let y=C.dataset.vtJump;if(y){D.preventDefault();try{location.hash="#/"+y}catch{}}});function R(){let D=document.getElementById("settings-grid");if(!D||document.getElementById(h))return;D.insertAdjacentHTML("beforeend",$());let C=document.getElementById(h);C&&F(C)}document.addEventListener("admin-panel-rendered",R),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var Pt=ye(()=>{(function(){"use strict";let h="sec-system-overview";function v(){return`
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
      </div>`}function u(N){let F=Math.floor(N/86400),R=Math.floor(N%86400/3600),D=Math.floor(N%3600/60);return F>0?`${F}d ${String(R).padStart(2,"0")}h ${String(D).padStart(2,"0")}m`:R>0?`${R}h ${String(D).padStart(2,"0")}m`:`${D}m ${String(N%60).padStart(2,"0")}s`}function $(N,F,R){let D=document.querySelector(`[data-m="${N}"]`);if(!D)return;let C=D.querySelector("[data-m-v]");C&&(C.textContent=F);let y=D.querySelector("[data-m-sub]");y&&(y.textContent=R||"")}function B(N){let F=document.querySelector("[data-soh-banner-dot]"),R=document.querySelector("[data-soh-banner-title]"),D=document.querySelector("[data-soh-chip]"),y=!(N.queue_size!=null&&N.queue_capacity!=null&&N.queue_size>=N.queue_capacity);D&&D.classList.toggle("is-warn",!y),F&&F.classList.toggle("is-warn",!y),R&&(R.textContent=y?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function A(){(async()=>{try{let R=await window.csrfFetch("/admin/metrics");if(!R.ok)return;let D=await R.json(),C=T=>Array.isArray(T)&&T.length?T[T.length-1]:null,y=D.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-D.server_started_at)):0;$("uptime",y>0?u(y):"\u2014","");let M=null;try{let T=await fetch("/admin/audience/stats",{credentials:"same-origin"});T.ok&&(M=(await T.json()).total_live)}catch{}let E=D.ws_clients??0;$("conn",String(E+(M||0)),M==null?ServerI18n.t("sohConnOverlaysOnly",{n:E}):ServerI18n.t("sohConnBreakdown",{overlays:E,viewers:M}));let x=C(D.mem_series||[]),I=D.mem_total_mb?(D.mem_total_mb/1024).toFixed(0):null;$("ram",x!=null?`${Number(x).toFixed(0)}%`:"\u2014",I?ServerI18n.t("sohMemorySub",{total:I}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";$("ver",`v${H}`,ServerI18n.t("sohVersionSub")),B(D)}catch{}})();let N=document.getElementById(h);if(!N)return;let F=()=>{let R=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";N.querySelectorAll("[data-soh-mode]").forEach(D=>{let C=D.dataset.sohMode===R;D.classList.toggle("is-active",C),D.setAttribute("aria-pressed",C?"true":"false")})};F(),document.addEventListener("admin:theme-mode",F),N.addEventListener("click",function(R){let D=R.target.closest("[data-soh-mode]");if(D){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(D.dataset.sohMode),F();return}let C=R.target.closest("[data-soh-action]");if(!(!C||C.disabled)){if(C.dataset.sohAction==="copy-url"){let y=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(y);return}if(C.dataset.sohAction==="show-qr"){let y=N.querySelector("[data-soh-qr]");if(!y)return;if(!y.hidden){y.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(M=>M.ok?M.json():Promise.reject(M)).then(M=>{y.innerHTML=M.svg,y.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function U(){let N=document.getElementById("settings-grid");!N||document.getElementById(h)||(N.insertAdjacentHTML("beforeend",v()),document.getElementById(h)&&A())}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var Rt=ye(()=>{(function(){"use strict";let h="sec-polls",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(U){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[U]})};function u(){return`
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
  `}function $(){let A=document.getElementById("sec-polls");if(!A)return;let U=A.querySelector("[data-poll-queue]"),N=A.querySelector("[data-poll-editor]"),F=A.querySelector("[data-poll-view-builder]"),R=A.querySelector("[data-poll-view-live]"),D=A.querySelector("[data-poll-view-results]"),C="danmu.adminPollQueue.v2";function y(){return"q_"+Math.random().toString(36).slice(2,8)}function M(){return"o_"+Math.random().toString(36).slice(2,6)}function E(W){return{id:M(),label:""}}function x(){return{id:y(),text:"",timer:90,image_url:"",server_q_id:"",options:[E("A"),E("B")]}}let I=null,H="builder",T=null,g=0,c={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},l=null,o=[];try{let W=localStorage.getItem(C);if(W){let Q=JSON.parse(W);Array.isArray(Q)?o=Q:Q&&Array.isArray(Q.queue)&&(o=Q.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[x()]),o.forEach(W=>{typeof W.image_url!="string"&&(W.image_url=""),typeof W.server_q_id!="string"&&(W.server_q_id="")});let n=o[0].id,f="manual",p=null,w=null,d={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function s(){try{localStorage.setItem(C,JSON.stringify({queue:o,activeId:n,mode:f}))}catch{}}function r(W){return o.find(Q=>Q.id===W)}function b(W,Q){let ne=r(W);ne&&Object.assign(ne,Q)}function e(W,Q,ne){let re=W.slice(),[le]=re.splice(Q,1);return re.splice(ne,0,le),re}function t(){U.innerHTML="",o.forEach((W,Q)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",W.id===n&&ne.classList.add("is-active");let re=d.active&&d.currentIndex===Q;re&&ne.classList.add("is-running"),ne.dataset.qid=W.id,ne.draggable=!0;let le=!!W.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Q+1}</span>
            <div class="info">
              <div class="text">${v(W.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:W.options.length})} \xB7 ${W.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):W.timer+"s"} \xB7 ${le?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${re?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":W.id===n?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,U.appendChild(ne)})}function i(){let W=r(n)||o[0];if(!W){N.innerHTML="";return}let Q=o.indexOf(W);N.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Q+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Q+1})}</span>
            </div>
            <span class="progress">Q${Q+1} / ${o.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${v(W.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${W.image_url?`
              <img class="admin-poll-q-image-thumb" src="${v(W.image_url)}" alt="" />
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
            ${W.options.map((ne,re)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+re)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${v(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+re)})}" maxlength="100" />
                ${W.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ne.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
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
        `}function a(){I&&I.active?H="live":T?H="results":H="builder",A.dataset.pollView=H,F.hidden=H!=="builder",R.hidden=H!=="live",D.hidden=H!=="results",t(),i(),z(),H==="live"?O():H==="results"&&_(),H==="live"?m():S()}function m(){l||(l=setInterval(()=>{H!=="live"||!I||!I.active||K()},1e3))}function S(){l&&(clearInterval(l),l=null)}function k(W,Q){if(!W||!W.time_limit_seconds)return null;if(!Q)return W.time_limit_seconds;let ne=Date.now()/1e3-Q;return Math.max(0,Math.round(W.time_limit_seconds-ne))}function L(W){if(W==null)return"\u221E";let Q=String(Math.floor(W/60)).padStart(2,"0"),ne=String(W%60).padStart(2,"0");return`${Q}:${ne}`}function O(){if(!I||!I.questions||I.questions.length===0){R.innerHTML="";return}let W=I.current_index>=0?I.current_index:0,Q=I.questions.length,ne=I.questions[W],re=k(ne,I.started_at),le=ne.time_limit_seconds||0,ue=le>0&&re!=null?Math.max(0,Math.min(1,re/le)):1,me=le>0&&re!=null&&re<=Math.max(5,le*.15),Te=ne.options.reduce((ae,de)=>ae+(de.count||0),0),Ee=[...ne.options].sort((ae,de)=>(de.count||0)-(ae.count||0)),Le=Ee[0]?Ee[0].count:0,oe=I.questions[W+1],se=110,ce=se/2-6,G=2*Math.PI*ce,te=G*ue;R.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${v((I.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${W+1}</strong>`,total:Q})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${se} ${se}" width="56" height="56">
                      <circle cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="${me?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${te} ${G}" stroke-linecap="round"
                        transform="rotate(-90 ${se/2} ${se/2})"
                        style="filter: drop-shadow(0 0 4px ${me?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${me?"is-low":""}" data-live-mmss>${re==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(re)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:W+1})}</div>
                <div class="text">${v(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(ae=>{let de=Te>0?ae.count/Te*100:0,he=(ae.count||0)>0&&ae.count===Le;return`
                    <div class="admin-polls-live-bar ${he?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${v(ae.key)}</span>
                        <span class="lbl">${v(ae.text||"")}</span>
                        ${he?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${de.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:ae.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${de.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Te}</strong>`})}</span>
                ${oe?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${v(oe.text||"")}</em>`})}</span>`:""}
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
                        <span class="t">${v(ae.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
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
        `}function K(){if(!I||!I.active)return;let W=I.current_index>=0?I.current_index:0,Q=I.questions[W];if(!Q)return;let ne=k(Q,I.started_at),re=Q.time_limit_seconds||0,le=R.querySelector("[data-live-mmss]"),ue=R.querySelector("[data-live-ring]");if(le&&(le.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):L(ne),le.classList.toggle("is-low",re>0&&ne!=null&&ne<=Math.max(5,re*.15))),ue&&re>0&&ne!=null){let me=+ue.getAttribute("r"),Te=2*Math.PI*me,Ee=Math.max(0,Math.min(1,ne/re));ue.setAttribute("stroke-dasharray",`${Te*Ee} ${Te}`);let Le=ne<=Math.max(5,re*.15);ue.setAttribute("stroke",Le?"var(--hud-crimson)":"var(--color-primary)"),ue.style.filter=`drop-shadow(0 0 4px ${Le?"var(--hud-crimson)":"var(--color-primary)"})`}c.autoAdvance&&re>0&&ne===0&&(W>=I.questions.length-1?V():Z())}function _(){let W=T;if(!W||!W.questions||W.questions.length===0){D.innerHTML="";return}let Q=W.questions.length,ne=Math.max(0,Math.min(g,Q-1)),re=W.questions[ne],le=re.options.reduce((G,te)=>G+(te.count||0),0),ue=[...re.options].sort((G,te)=>(te.count||0)-(G.count||0)),me=ue[0]||{key:"-",text:"\u2014",count:0},Te=ue[1],Ee=le>0?me.count/le*100:0,Le=Te?Math.max(0,me.count-Te.count):me.count,oe=W.started_at||0,se=W.ended_at||Date.now()/1e3,ce=Math.max(0,Math.round(se-oe));D.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Q>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${W.questions.map((G,te)=>`
                    <button type="button" role="tab" class="${te===ne?"is-active":""}" data-results-tab="${te}">
                      Q${te+1}<span class="t">${v((G.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Q} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:L(ce),n:le})}</span>
                </div>
                <div class="text">${v(re.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${v(me.key)}</div>
                <div class="info">
                  <div class="lbl">${v(me.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} \xB7 ${Ee.toFixed(1)}% ${Te?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Le}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:le})}</span>
                </div>
                ${ue.map((G,te)=>{let ae=le>0?G.count/le*100:0;return`
                    <div class="admin-polls-results-bar ${te===0&&G.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${te+1}</span>
                        <span class="tag">${v(G.key)}</span>
                        <span class="lbl">${v(G.text||"")}</span>
                        <span class="pct">${ae.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:G.count})}</span>
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
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:re.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${re.time_limit_seconds?L(re.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${W.started_at?new Date(W.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${W.ended_at?new Date(W.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${L(ce)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let G=Math.max(1,...ue.map(te=>te.count));return ue.map(te=>`<div class="bar" style="height:${Math.max(6,te.count/G*100)}%"></div>`).join("")})()}
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
        `}function P(W){let Q=[["question_index","question","option_key","option_text","count","percentage"]];return W.questions.forEach((ne,re)=>{let le=ne.options.reduce((ue,me)=>ue+(me.count||0),0);ne.options.forEach(ue=>{let me=le>0?(ue.count/le*100).toFixed(1):"0";Q.push([re+1,ne.text,ue.key,ue.text,ue.count,me])})}),Q.map(ne=>ne.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function j(W,Q,ne){let re=new Blob([ne],{type:Q}),le=document.createElement("a");le.href=URL.createObjectURL(re),le.download=W,document.body.appendChild(le),le.click(),setTimeout(()=>{URL.revokeObjectURL(le.href),le.remove()},0)}A.addEventListener("click",W=>{let Q=W.target.closest("[data-live-action]");if(Q){let ue=Q.dataset.liveAction;ue==="advance"?Z():ue==="end"?V():ue==="pause"&&(c.autoAdvance=!1,O());return}let ne=W.target.closest("[data-live-toggle]");if(ne){let ue=ne.dataset.liveToggle;ue in c&&(c[ue]=!c[ue],ne.classList.toggle("is-on",c[ue]));return}let re=W.target.closest("[data-results-tab]");if(re){g=+re.dataset.resultsTab||0,_();return}let le=W.target.closest("[data-results-action]");if(le){let ue=le.dataset.resultsAction,me=T;if(!me)return;if(ue==="copy"){let Te=me.questions.map((Ee,Le)=>{let oe=Ee.options.reduce((ce,G)=>ce+(G.count||0),0),se=Ee.options.map(ce=>{let G=oe>0?(ce.count/oe*100).toFixed(1):"0.0";return`  ${ce.key}. ${ce.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} (${G}%)`});return`Q${Le+1}: ${Ee.text}
${se.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Te)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ue==="csv"?j(`poll_${(me.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",P(me)):ue==="json"?j(`poll_${(me.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(me,null,2)):ue==="reset"&&(T=null,g=0,a());return}}),U.addEventListener("dragstart",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&(p=Q.dataset.qid,Q.classList.add("is-dragging"))}),U.addEventListener("dragend",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&Q.classList.remove("is-dragging"),p=null,U.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),U.addEventListener("dragover",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-qrow");!Q||!p||Q.dataset.qid===p||(U.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),U.addEventListener("drop",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-qrow");if(!Q||!p)return;let ne=o.findIndex(le=>le.id===p),re=o.findIndex(le=>le.id===Q.dataset.qid);ne<0||re<0||ne===re||(o=e(o,ne,re),s(),a())}),U.addEventListener("click",W=>{let Q=W.target.closest(".admin-poll-qrow");Q&&(n=Q.dataset.qid,s(),a())}),N.addEventListener("input",W=>{let Q=r(n);if(Q){if(W.target.matches("[data-ed-text]")){Q.text=W.target.value,s(),t();return}if(W.target.matches("[data-ed-opt-text]")){let ne=W.target.dataset.edOptText,re=Q.options.find(le=>le.id===ne);re&&(re.label=W.target.value,s(),t())}}}),N.addEventListener("change",W=>{let Q=r(n);Q&&W.target.matches("[data-ed-timer]")&&(Q.timer=+W.target.value,s(),t())}),N.addEventListener("click",async W=>{let Q=r(n);if(!Q)return;let ne=W.target.closest("[data-ed-opt-remove]");if(ne){let le=ne.dataset.edOptRemove;Q.options.length>2&&(Q.options=Q.options.filter(ue=>ue.id!==le),s(),i(),t());return}if(W.target.closest("[data-ed-opt-add]")){Q.options.length<6&&(Q.options.push(E()),s(),i(),t());return}let re=W.target.closest("[data-ed-action]");if(re)if(re.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=o.findIndex(me=>me.id===n);o=o.filter(me=>me.id!==n),n=o[Math.min(ue,o.length-1)].id,s(),a()}}else if(re.dataset.edAction==="upload-q-image"){let le=N.querySelector("[data-ed-q-image-input]");le&&le.click()}else re.dataset.edAction==="remove-q-image"&&(Q.image_url="",s(),i(),t())}),N.addEventListener("change",async W=>{if(!W.target.matches("[data-ed-q-image-input]"))return;let Q=W.target.files&&W.target.files[0];if(!Q)return;let ne=r(n);if(!ne)return;if(!d.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),W.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),W.target.value="";return}if(Q.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),W.target.value="";return}let re=new FormData;re.append("file",Q);try{let le=await csrfFetch(`/admin/poll/${encodeURIComponent(d.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:re}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||"upload failed");ne.image_url=ue.image_url,s(),i(),t(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(le){showToast&&showToast(String(le.message||le),!1)}finally{W.target.value=""}}),N.addEventListener("dragstart",W=>{let Q=W.target.closest(".admin-poll-opt");Q&&(w=Q.dataset.oid,Q.classList.add("is-dragging"))}),N.addEventListener("dragend",W=>{N.querySelectorAll(".is-dragging, .is-drag-over").forEach(Q=>Q.classList.remove("is-dragging","is-drag-over")),w=null}),N.addEventListener("dragover",W=>{let Q=W.target.closest(".admin-poll-opt");!Q||!w||Q.dataset.oid===w||(W.preventDefault(),N.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),N.addEventListener("drop",W=>{W.preventDefault();let Q=W.target.closest(".admin-poll-opt"),ne=r(n);if(!Q||!w||!ne)return;let re=ne.options.findIndex(ue=>ue.id===w),le=ne.options.findIndex(ue=>ue.id===Q.dataset.oid);re<0||le<0||re===le||(ne.options=e(ne.options,re,le),s(),i())}),A.addEventListener("click",W=>{if(W.target.closest("[data-poll-action='add']")){let ue=x();o.push(ue),n=ue.id,s(),a();return}let ne=W.target.closest("[data-poll-template]");if(ne){let ue=x(),me=ne.dataset.pollTemplate,Te=["A","B","C","D","E"],Ee=Le=>Le.map((oe,se)=>{let ce=E(Te[se]);return ce.text=oe,ce});me==="yesno"?(ue.text="",ue.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):me==="stars"?(ue.timer=60,ue.options=Ee(["1","2","3","4","5"])):me==="four"&&(ue.options=Ee(["","","",""])),o.push(ue),n=ue.id,s(),a();return}let re=W.target.closest("[data-poll-mode]");re&&(f=re.dataset.pollMode,A.querySelectorAll("[data-poll-mode]").forEach(ue=>ue.classList.toggle("is-active",ue===re)),s());let le=W.target.closest("[data-poll-session-action]");if(le){let ue=le.dataset.pollSessionAction;ue==="start"?X():ue==="advance"?Z():ue==="end"&&V()}});function z(){let W=A.querySelector("[data-poll-session]");if(!W)return;let Q=W.querySelector("[data-poll-session-status]"),ne=W.querySelector("[data-poll-session-action='start']"),re=W.querySelector("[data-poll-session-action='advance']"),le=W.querySelector("[data-poll-session-action='end']");if(!d.pollId||!d.active){Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,re.hidden=!0,le.hidden=!0;return}let ue=o.length,me=d.currentIndex+1,Te=d.currentIndex>=ue-1;Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${me} / ${ue}</span>`,ne.hidden=!0,re.hidden=Te,le.hidden=!1}async function X(){try{let W=o.map((me,Te)=>{let Ee=(me.text||"").trim(),Le=me.options.map(oe=>(oe.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Te+1}));if(Le.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Te+1}));return{text:Ee,options:Le,time_limit_seconds:me.timer&&me.timer>0?me.timer:null}});if(!W.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Q=(()=>{let me=o.map(Te=>Number(Te.timer)||0).filter(Te=>Te>0);return me.length?Math.round(me.reduce((Te,Ee)=>Te+Ee,0)/me.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:W,mode:f||"manual",default_duration_s:Q})}),re=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(re.error||ServerI18n.t("pollBuilderErrCreateFailed"));d.pollId=re.poll_id,(re.questions||[]).forEach((me,Te)=>{o[Te]&&(o[Te].server_q_id=me.id)}),s();let le=await csrfFetch("/admin/poll/start",{method:"POST"}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||ServerI18n.t("pollBuilderErrStartFailed"));d.active=!0,d.currentIndex=ue.current_index??0,I=ue,T=null,a(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ee()}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function Z(){try{let W=await csrfFetch("/admin/poll/advance",{method:"POST"}),Q=await W.json().catch(()=>({}));if(!W.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));d.currentIndex=Q.current_index,d.active=!!Q.active,I=Q,a(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:d.currentIndex+1}),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}async function V(){try{let W=I,Q=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Q.ok){let ne=await Q.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}W&&W.questions&&(T={...W,ended_at:Date.now()/1e3},g=W.current_index>=0?W.current_index:0),d.active=!1,d.pollId="",d.currentIndex=-1,I=null,d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),a(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(W){showToast&&showToast(String(W.message||W),!1)}}function ee(){d.statusTimer&&clearInterval(d.statusTimer),d.statusTimer=setInterval(async()=>{if(d.pollId)try{let W=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!W.ok)return;let Q=await W.json();if(Q.poll_id!==d.pollId)return;d.active=!!Q.active,d.currentIndex=Q.current_index??-1;let ne=!!(I&&I.active);I=Q,Q.active||(clearInterval(d.statusTimer),d.statusTimer=null,ne&&Q.questions&&!T&&(T={...Q,ended_at:Date.now()/1e3},g=Q.current_index>=0?Q.current_index:0),I=null),H==="live"?O():a()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),S()}),a()}function B(){let A=document.getElementById("settings-grid");!A||document.getElementById(h)||(A.insertAdjacentHTML("beforeend",u()),document.getElementById(h)&&$())}document.addEventListener("admin-panel-rendered",B),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&B()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),B()})})()});var Ot=ye(()=>{(function(){"use strict";let $="sec-live-feed",B={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},A=[],U=[],N=!1,F="",R="all",D=0,C=0,y=null,M=null,E=null;function x(oe){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(oe):String(oe??"").replace(/[&<>"']/g,function(se){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[se]})}function I(oe,se){return oe?oe.length>se?oe.slice(0,se)+"\u2026":oe:""}function H(oe){let se=new Date(oe),ce=G=>String(G).padStart(2,"0");return`${ce(se.getHours())}:${ce(se.getMinutes())}:${ce(se.getSeconds())}`}function T(oe){if(!F)return!0;let se=F.toLowerCase(),ce=oe.data;return ce.text&&ce.text.toLowerCase().includes(se)||ce.nickname&&ce.nickname.toLowerCase().includes(se)||ce.fingerprint&&ce.fingerprint.toLowerCase().includes(se)||ce.layout&&ce.layout.toLowerCase().includes(se)}function g(oe){return R==="muted"?!!oe.muted:!0}function c(){R="all",document.querySelectorAll(".admin-live-feed-tab").forEach(oe=>oe.classList.toggle("is-active",oe.dataset.tab==="all"))}function l(){F="",E&&(E.value=""),c()}function o(oe,se){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let G;return oe==="paused"?G=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:se||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):oe==="no-result"?G=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:se||ServerI18n.t("lfNoMatchDesc")}):G=window.AdminEmpty.render("messages"),G.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),G.setAttribute("data-empty-kind","live-feed"),G}let ce=document.createElement("div");return ce.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",ce.setAttribute("data-empty-kind","live-feed"),ce.innerHTML=`<div class="admin-proto-placeholder-title">${x(oe)}</div><div class="admin-proto-placeholder-body">${x(se||"")}</div>`,ce}function n(oe){let se=oe.data,ce=document.createElement("div");ce.className="admin-live-feed-row"+(oe.muted?" is-muted":""),ce.dataset.id=oe.id,ce.tabIndex=-1;let G=document.createElement("span");if(G.className="admin-live-feed-time",G.textContent=H(oe.ts),ce.appendChild(G),(se.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=se.layout,ce.appendChild(pe)}let ae=B[se.integration];if(ae){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ae,ce.appendChild(pe)}let de=document.createElement("span");de.className="admin-live-feed-text",de.textContent=I(se.text||"",80),de.title=se.text||"",ce.appendChild(de);let he=document.createElement("span");he.className="admin-live-feed-identity",window.AdminIdentity&&he.appendChild(AdminIdentity.render({nickname:se.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!E||(E.value=pe,E.dispatchEvent(new Event("input",{bubbles:!0})),E.focus())}})),ce.appendChild(he);let ke=document.createElement("span");if(ke.className="admin-live-feed-actions is-hover-reveal",se.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",xe=>{xe.stopPropagation(),p(oe)}),ke.appendChild(pe)}let $e=document.createElement("button");if($e.type="button",$e.className="admin-ui-chip is-danger admin-live-feed-action",$e.textContent=ServerI18n.t("blockKeywordBtn"),$e.title=ServerI18n.t("blockKeywordTitle"),$e.addEventListener("click",pe=>{pe.stopPropagation(),w("keyword",se.text,oe.id)}),ke.appendChild($e),se.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",se.fingerprint),pe.addEventListener("click",xe=>{xe.stopPropagation(),w("fingerprint",se.fingerprint,oe.id)}),ke.appendChild(pe)}return ce.appendChild(ke),ce.classList.add("is-clickable"),ce.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||f(oe)}),ce.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),f(oe))}),ce}function f(oe){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(oe)}async function p(oe){let se=oe&&oe.data&&oe.data.message_id;if(!se)return;let ce=await window.AdminModeration.recall(se);if(!ce.ok){console.error("[LiveFeed] Recall failed:",ce.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}oe.recalled=!0;let G=d(oe.id);G&&G.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function w(oe,se,ce){if(!(!se||!await(oe==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,se))){if(ce){let ae=A.find(de=>de.id===ce);ae&&(ae.muted=!0)}else A.forEach(ae=>{oe==="keyword"&&ae.data.text===se&&(ae.muted=!0),oe==="fingerprint"&&ae.data.fingerprint===se&&(ae.muted=!0)});b()}}function d(oe){if(!y||!oe)return null;let se=y.children;for(let ce=0;ce<se.length;ce++)if(se[ce].dataset&&se[ce].dataset.id===oe)return se[ce];return null}function s(){let oe=document.activeElement,se=oe&&oe.closest?oe.closest(".admin-live-feed-row"):null;return se?se.dataset.id:null}function r(oe){if(!oe)return;let se=d(oe);se&&document.activeElement!==se&&se.focus({preventScroll:!0})}function b(){if(!y)return;let oe=s(),se=document.createDocumentFragment(),ce=A.filter(G=>T(G)&&g(G));for(let G=ce.length-1;G>=0;G--)se.appendChild(n(ce[G]));if(y.textContent="",se.childNodes.length===0){let G=N?o("paused"):A.length===0?o("empty"):o("no-result");y.appendChild(G)}else y.appendChild(se);i(),r(oe)}function e(oe){if(!y||!T(oe)||!g(oe))return null;let se=y.querySelector("[data-empty-kind='live-feed']");se&&se.remove();let ce=y.scrollTop<=8,G=n(oe);if(ce)y.insertBefore(G,y.firstChild);else{let te=y.scrollHeight;y.insertBefore(G,y.firstChild),y.scrollTop+=y.scrollHeight-te,C+=1}return G}function t(){let oe=A.length-200;if(oe<=0)return;A.splice(0,oe).forEach(ce=>{let G=d(ce.id);G&&G.remove()})}function i(){k(),L(),m()}function a(oe){let se={ts:Date.now(),data:oe,id:oe&&oe.message_id?"m"+oe.message_id:"e"+ ++D};if(oe&&oe.status==="blocked"&&(se.muted=!0),N){U.push(se),L(),m();return}A.push(se),e(se),t(),i()}function m(){let oe=document.querySelector("[data-lf-jump]"),se=document.querySelector("[data-lf-jump-n]");if(!oe||!se)return;let ce=U.length,G=ce>0?ce:C;G>0?(oe.hidden=!1,se.textContent=String(G)):oe.hidden=!0}function S(){N&&O(),C=0,y&&(y.scrollTop=0),m()}function k(){let oe=document.querySelector("[data-lf-state]");oe&&(oe.className=N?"ui-status is-warning":"ui-status is-success",oe.textContent=N?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function L(){let oe=document.getElementById($)||document,se=(ce,G)=>{let te=oe.querySelector(ce);te&&(te.textContent=String(G))};se("[data-cnt-all]",A.length),se("[data-cnt-mut]",A.filter(ce=>ce.muted).length)}function O(){if(N=!N,y&&y.setAttribute("aria-live",N?"off":"polite"),M&&(M.textContent=N?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),M.classList.toggle("is-primary",N),M.classList.toggle("is-ghost",!N)),N)L(),m();else{for(let oe of U)A.push(oe);U=[],A.length>200&&A.splice(0,A.length-200),C=0,b()}}function K(){let oe=document.getElementById("settings-grid");if(!oe)return!1;let se=`
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
      </div>`;return oe.insertAdjacentHTML("beforeend",se),!0}let _=!1,P=null,j=0,z=1500,X=!1;async function Z(){if(!X){X=!0;try{let oe=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(j),{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json();if(Array.isArray(se.entries)){for(let ce of se.entries)if(!(!ce||!ce.data)){if(typeof ce.seq=="number"){if(ce.seq<=j)continue;j=ce.seq}a(ce.data)}}typeof se.next_since=="number"&&se.next_since>j&&(j=se.next_since)}catch{}finally{X=!1}}}let V=5e3,ee=null,W=!1;async function Q(){if(!(W||document.hidden)){W=!0;try{let oe=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json(),ce=Array.isArray(se.pending)?se.pending.length:0,G=document.getElementById($);if(!G)return;let te=G.querySelector("[data-cnt-q]");te&&(te.textContent=String(ce));let ae=G.querySelector("[data-lf-pending-link]");ae&&ae.classList.toggle("has-pending",ce>0)}catch{}finally{W=!1}}}function ne(){_||(_=!0,Z(),P=setInterval(Z,z),Q(),ee=setInterval(Q,V),window.addEventListener("beforeunload",()=>{ee&&(clearInterval(ee),ee=null),P&&(clearInterval(P),P=null)}))}function re(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById($)&&K()&&(le(),b())}function le(){y=document.getElementById("liveFeedList"),M=document.getElementById("liveFeedPauseBtn"),E=document.getElementById("liveFeedSearch");let oe=document.getElementById("liveFeedClearBtn"),se=document.querySelectorAll(".admin-live-feed-tab");M&&M.addEventListener("click",O),oe&&oe.addEventListener("click",()=>{A=[],U=[],C=0,b()});let ce=document.querySelector("[data-lf-jump-btn]");if(ce&&ce.addEventListener("click",S),y&&y.addEventListener("scroll",()=>{y.scrollTop<=8&&C>0&&(C=0,m())},{passive:!0}),se.forEach(G=>{G.addEventListener("click",()=>{se.forEach(te=>te.classList.remove("is-active")),G.classList.add("is-active"),R=G.dataset.tab||"all",b()})}),E){let G=null;E.addEventListener("input",()=>{clearTimeout(G),G=setTimeout(()=>{F=E.value.trim(),b()},200)})}ne()}function ue(oe){if(!("ontouchstart"in window))return;let se=0,ce=0,G=0,te=null,ae=null,de=!1;function he(ke){if(ke.querySelector(".admin-live-feed-row__swipe-actions"))return;let $e=ke.dataset.id,pe=A.find(Ae=>Ae.id===$e),xe=!!(pe&&pe.data&&pe.data.message_id),Ie=document.createElement("div");Ie.className="admin-live-feed-row__swipe-actions",Ie.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${xe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,Ie.addEventListener("click",function(Ae){let Fe=Ae.target.closest("[data-swipe-act]");if(!Fe||Fe.disabled)return;let Pe=ke.dataset.id,qe=A.find(je=>je.id===Pe);if(!qe||!qe.data)return;let Oe=Fe.dataset.swipeAct;Oe==="ban"?qe.data.fingerprint&&w("fingerprint",qe.data.fingerprint,Pe):Oe==="recall"&&p(qe),ke.classList.remove("is-swiped")}),ke.appendChild(Ie)}oe.addEventListener("touchstart",function(ke){let $e=ke.target.closest(".admin-live-feed-row");$e&&(ke.target.closest(".admin-live-feed-row__swipe-actions")||(te=$e,de=!1,se=ke.touches[0].clientX,ce=ke.touches[0].clientY,G=0))},{passive:!0}),oe.addEventListener("touchmove",function(ke){if(!te||de)return;let $e=ke.touches[0],pe=$e.clientX-se,xe=$e.clientY-ce;if(Math.abs(xe)>Math.abs(pe)&&Math.abs(xe)>12){de=!0;return}if(G=pe,pe<-10){he(te),ae=te,te.classList.add("is-swiping");let Ie=Math.max(-180,pe);te.style.transform=`translateX(${Ie}px)`}else pe>10&&te.classList.contains("is-swiped")&&(te.style.transform="")},{passive:!0}),oe.addEventListener("touchend",function(){te&&(te.classList.remove("is-swiping"),te.style.transform="",G<=-60?te.classList.add("is-swiped"):te.classList.remove("is-swiped"),te=null,ae=null,G=0)},{passive:!0})}function me(){return y?Array.from(y.querySelectorAll(".admin-live-feed-row")):[]}function Te(){let oe=me(),se=document.activeElement;for(let ce of oe)if(ce===se||ce.contains(se))return ce;return null}function Ee(oe){let se=me();if(!se.length)return!1;let ce=Te(),G=ce?se.indexOf(ce)+oe:oe>0?0:se.length-1;return G=Math.max(0,Math.min(se.length-1,G)),se[G].focus(),se[G].scrollIntoView({block:"nearest"}),!0}function Le(oe){let se=Te();if(!se)return!1;let ce=A.find(te=>te.id===se.dataset.id);if(!ce)return!1;let G=oe==="keyword"?ce.data.text:ce.data.fingerprint;return G?(w(oe,G,ce.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return A.slice()},isVisible:function(){return!!(y&&y.offsetParent!==null)},isPaused:function(){return N},moveFocus:Ee,blockFocused:Le,togglePause:function(){O()}},document.addEventListener("admin-panel-rendered",re),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",re):re()})()});var qt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.loadDetailsState,v=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml;function $(b,e=!1){var t=h();return t[b]!==void 0?t[b]:e}function B(b){var e=h();e[b.id]=b.open,v(e)}let A=!1;new MutationObserver(()=>{let b=document.getElementById("settings-grid");if(b&&!(document.getElementById("sec-plugins")||A)){A=!0;try{N(b)}finally{A=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function N(b){let e=`
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
      `;b.insertAdjacentHTML("beforeend",e);let t=document.querySelector("[data-console-filters]");t&&t.addEventListener("click",i=>{let a=i.target.closest("[data-console-filter]");a&&(t.querySelectorAll("[data-console-filter]").forEach(m=>m.classList.toggle("is-active",m===a)),D=a.dataset.consoleFilter,x())}),document.getElementById("pluginsReloadBtn").addEventListener("click",r),T(),H()}let F=0,R=0,D="all",C=[],y=80;function M(b){let e=(b||"INFO").toUpperCase();return e==="ERROR"?"is-error":e==="WARN"?"is-warn":e==="DEBUG"?"is-debug":"is-info"}function E(b){let e=new Date(b*1e3),t=i=>String(i).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}function x(){let b=document.getElementById("pluginsConsoleBody");if(!b)return;let e=D==="all"?C:C.filter(t=>(t.level||"INFO").toUpperCase()===D);if(e.length===0){let t=D==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${D} lines yet \xB7 waiting\u2026`;b.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${t}</span>
          </div>`;return}b.innerHTML=e.map(t=>{let i=E(t.ts),a=(t.msg||"").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),m=(t.plugin||"\u2014").replace(/[<>&"]/g,k=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[k]),S=(t.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${i}</span>
          <span class="lv ${M(t.level)}">${S}</span>
          <span class="plg">${m}</span>
          <span class="msg">${a}</span>
        </div>`}).join("")}async function I(){try{let b=await fetch(`/admin/plugins/console?since=${F}`,{credentials:"same-origin"});if(!b.ok)return;let e=await b.json();if(!Array.isArray(e.events)||e.events.length===0)return;for(C.unshift(...e.events);C.length>y;)C.pop();F=e.latest_seq||F,x()}catch{}}function H(){R||(R=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:I}))}async function T(){let b=document.getElementById("pluginsList");if(b)try{let e=await csrfFetch("/admin/plugins/list");if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json(),i=t.plugins||[];if(g(t.upload_allowed!==!1),i.length===0){b.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",c([]);return}b.innerHTML=i.map(l).join(""),d(b),c(i)}catch(e){console.error("Failed to load plugins:",e),b.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function g(b){let e=document.getElementById("pluginsUploadBtn");e&&(e.disabled=!b,e.toggleAttribute("data-upload-disabled",!b),e.textContent=ServerI18n.t(b?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),b?e.removeAttribute("title"):e.title="ALLOW_PLUGIN_UPLOAD")}function c(b){let e=b.length,t=b.filter(k=>k.enabled).length,i=e-t,a=b.map(k=>k.priority).filter(k=>typeof k=="number"),m=a.length?Math.round(a.reduce((k,L)=>k+L,0)/a.length):null,S=(k,L)=>{document.querySelectorAll(`[data-plugins-stat="${k}"]`).forEach(O=>{O.textContent=L})};S("loaded",e),S("running",t),S("paused",i),S("priority",m??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(k=>{k.textContent=e})}function l(b){let{name:e,version:t,description:i,priority:a,enabled:m,is_user:S,file:k}=b,L=`plugin-toggle-${e}`,O=f(a),K=w(a),_=n(b),P=S&&k?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${u(k)}"
            data-plugin-name="${u(e)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${u(e)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${u(e)}">
          <span class="admin-plugins-dot ${m?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${u(e)}</div>
            ${i?`<div class="desc">${u(i)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${t?"v"+u(t):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${O}">${a??"\u2014"}${K?" \xB7 "+K:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${p(_)}">${_}</span>
          <div class="admin-plugins-toggle-cell">
            ${P}
            <label class="admin-plugins-switch" for="${L}">
              <input type="checkbox" id="${L}" role="switch"
                aria-checked="${!!m}" aria-label="Toggle plugin ${u(e)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${u(e)}"
                ${m?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function o(b,e){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:b}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:e}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let i=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e})}),a=await i.json().catch(()=>({}));if(!i.ok){showToast(a.error||ServerI18n.t("pluginsToastRemoveFailed",{status:i.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:b}),!0),await T()}catch(i){showToast(ServerI18n.t("pluginsToastNetError",{msg:i.message||""}),!1)}}function n(b){let e=b.file||b.path||b.source||"";if(typeof e=="string"){if(e.endsWith(".py"))return"PY";if(e.endsWith(".js"))return"JS"}return(b.language||"PY").toUpperCase()}function f(b){return b==null?"is-muted":b<=10?"is-danger":b<=50?"is-warn":"is-cyan"}function p(b){return b==="JS"?"is-cyan":b==="PY"?"is-warn":"is-muted"}function w(b){return b==null?"":b<=10?"CRITICAL":b<=50?"HIGH":"NORMAL"}function d(b){b.querySelectorAll(".plugin-toggle").forEach(e=>{e.addEventListener("change",async function(){let t=this.dataset.pluginName,i=this.checked;await s(t,i,this)})}),b.querySelectorAll(".plugin-uninstall").forEach(e=>{e.addEventListener("click",function(){o(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(b,e,t){let i=e?"/admin/plugins/enable":"/admin/plugins/disable";try{let a=await csrfFetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b})});if(!a.ok){let m=await a.json().catch(()=>({}));throw new Error(m.error||`HTTP ${a.status}`)}showToast(e?ServerI18n.t("pluginEnabled").replace("{name}",b):ServerI18n.t("pluginDisabled").replace("{name}",b),!0)}catch(a){console.error(`Failed to ${e?"enable":"disable"} plugin:`,a),showToast(a.message||ServerI18n.t("operationFailed"),!1),t&&(t.checked=!e)}}async function r(){let b=document.getElementById("pluginsReloadBtn");b&&(b.disabled=!0);try{let e=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!e.ok){let t=await e.json().catch(()=>({}));throw new Error(t.error||`HTTP ${e.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await T()}catch(e){console.error("Failed to reload plugins:",e),showToast(e.message||ServerI18n.t("reloadFailed"),!1)}finally{b&&(b.disabled=!1)}}})})()});var Ht=ye(()=>{(function(){"use strict";let h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},v={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},u=null,$=null;function B(){return u||(u=document.createElement("div"),u.className="admin-pu-backdrop",u.hidden=!0,u.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(u),u.addEventListener("click",n=>{(n.target.matches("[data-pu-close]")||n.target===u)&&o()}),u)}function A(n){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((p,w)=>{let d=w+1,s=d<n,b=s?"is-done":d===n?"is-active":"";return(w>0?`<span class="admin-pu-step-line ${s?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${b}">
          <span class="circle">${s?"\u2713":d}</span>
          <span class="label">${p}</span>
        </div>`}).join("")}function U(n,f){$.step=n;let p=u.querySelector("[data-pu-steps]");p&&(p.innerHTML=A(n));let w=u.querySelector("[data-pu-body]");w&&(w.innerHTML=f)}function N(n){let f=n==="error-type"?ServerI18n.t("pluginsUploadErrorType"):n==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):n==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):n==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),p=(n||"").startsWith("error")?"\u2715":n==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(n||"").startsWith("error")?"is-error":n==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${p}</div>
          <div class="admin-pu-dropzone-msg">${h(f)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function F(){let n=u.querySelector("[data-pu-dropzone]"),f=u.querySelector("[data-pu-file]"),p=u.querySelector("[data-pu-browse]");p&&p.addEventListener("click",()=>f&&f.click()),f&&f.addEventListener("change",()=>{f.files&&f.files[0]&&R(f.files[0])}),n&&(n.addEventListener("click",()=>f&&f.click()),n.addEventListener("dragover",w=>{w.preventDefault(),n.classList.add("is-over")}),n.addEventListener("dragleave",()=>n.classList.remove("is-over")),n.addEventListener("drop",w=>{w.preventDefault(),n.classList.remove("is-over");let d=w.dataTransfer&&w.dataTransfer.files;if(!(!d||d.length===0)){if(d.length>1){U(1,N("error-multi")),F();return}R(d[0])}}))}function R(n){if(!n.name.match(/\.py$/i)){U(1,N("error-type")),F();return}if(n.size>256*1024){U(1,N("error-size")),F();return}$.file=n,U(2,D(n.name)),C(n)}function D(n){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${h(n)}</div>
      </div>`}async function C(n){try{let f=new FormData;f.append("file",n);let p=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:f}),w=await p.json().catch(()=>({}));if(!p.ok&&!w.validation){window.showToast?.(w.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:p.status}),!1),U(1,N()),F();return}$.manifest=w.manifest||{},$.validation=w.validation||{},$.filename=w.filename||n.name,y($)}catch(f){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:f.message||""}),!1),U(1,N()),F()}}function y(n){let f=n.manifest||{},p=n.validation||{},w="";if(!p.syntax_ok)w=M(p.syntax_err,n);else if(Object.keys(f).length===0)w=E(n);else{let d=(p.deps||[]).some(s=>s.status==="missing");w=H(f,p,n,d)}U(2,`<div class="admin-pu-step2">${w}</div>`),T()}function M(n,f){let p=n&&n.line?n.line:"?",w=n&&n.msg?n.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${p}</span>
        </div>
        <pre class="admin-pu-syntax-body">${h(`>>> ${f.filename}
${w}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function E(n){return`
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
      </footer>`}function x(n){return n==null?"is-muted":n<=10?"is-danger":n<=50?"is-warn":"is-cyan"}function I(n){if(n==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let f=x(n),p=n<=10?"CRITICAL":n<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${f}">${n} \xB7 ${p}</span>`}function H(n,f,p,w){let d=n.name||p.filename.replace(/\.(py|js)$/i,""),s=n.version?`v${h(n.version)}`:"\u2014",r=n.author?`@${h(n.author.replace(/^@/,""))}`:"\u2014",b=n.description||ServerI18n.t("pluginsUploadNoDescription"),e="PY",t="is-warn",i=Array.isArray(n.permissions)?n.permissions:[],a=Object.keys(v).map(O=>{let K=i.includes(O);return`
        <div class="admin-pu-perm-row ${K?"is-req":"is-not"}">
          <span class="dot">${K?"\u25CF":"\u25CB"}</span>
          <span class="key">${h(O)}</span>
          <span class="label">${h(ServerI18n.t(v[O]))}</span>
        </div>`}).join(""),m=f.deps||[],S=m.map(O=>{let K=O.status==="ok"?"is-ok":O.status==="warn"?"is-warn":"is-err",_=O.status==="ok"?"\u2713":O.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${K}">
          <span class="dot">${_}</span>
          <span class="name">${h(O.name)}</span>
          <span class="note">${h(O.note||"")}</span>
        </div>`}).join(""),k=f.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${h(d)}</span>`})}
      </div>`:"",L=m.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${S}</div>
      </section>`;return`
      ${k}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${h(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
          <span class="author">${r}</span>
          <span class="admin-ui-pill admin-pu-pill ${t}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${h(b)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${I(n.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${a}</div>
        </section>
        ${L}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${w?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${w?"disabled":""} data-pu-confirm>${w?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function T(){let n=u.querySelector("[data-pu-back]");n&&n.addEventListener("click",()=>{$.file=null,$.manifest=null,$.validation=null,U(1,N()),F()});let f=u.querySelector("[data-pu-confirm]");f&&f.addEventListener("click",()=>g());let p=u.querySelector("[data-pu-no-manifest-ack]");p&&f&&p.addEventListener("change",()=>{f.disabled=!p.checked})}function g(){let n=$.manifest||{},f=n.name||($.filename||"").replace(/\.(py|js)$/i,""),p=n.version?`v${h(n.version)}`:"\u2014",w=Array.isArray(n.permissions)?n.permissions:[],d=w.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:w.map(b=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${h(b)}</span></div>`).join("");U(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${h(f)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${p}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${d}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${h($.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:n.priority!=null?n.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let s=u.querySelector("[data-pu-install]");s&&s.addEventListener("click",c);let r=u.querySelector("[data-pu-back]");r&&r.addEventListener("click",()=>y($))}async function c(){U(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let n=new FormData;n.append("file",$.file);let f=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:n}),p=await f.json().catch(()=>({}));if(!f.ok){window.showToast?.(p.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:f.status}),!1),y($);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:p.name||$.filename}),!0),o();let w=document.getElementById("pluginsReloadBtn");w&&w.click()}catch(n){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:n.message||""}),!1),y($)}}function l(){B(),$={step:1,file:null,manifest:null,validation:null,filename:null},U(1,N()),F(),u.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){u&&(u.hidden=!0,document.body.classList.remove("admin-pu-open"),$=null)}window.AdminPluginUpload={open:l,close:o},document.addEventListener("click",n=>{let f=n.target.closest("#pluginsUploadBtn");f&&!f.disabled&&(n.preventDefault(),l())})})()});var jt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let v="sec-webhooks",u=12e3,$=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function B(d,s){return d?d.length>s?d.slice(0,s)+"\u2026":d:""}function A(d){if(!d)return"\u2014";try{let s=new Date(d),r=Math.max(0,(Date.now()-s.getTime())/1e3);return r<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(r)}):r<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(r/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(r/86400)})}catch{return"\u2014"}}function U(d){if(!d)return"\u2014";try{return new URL(d).hostname}catch{return B(d,30)}}function N(d){return d==="active"?"is-success":d==="degraded"?"is-warn":"is-muted"}let F={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:$,eventCatalogLoaded:!1};function R(){let d=document.getElementById("settings-grid");!d||document.getElementById(v)||(d.insertAdjacentHTML("beforeend",`
      <details id="${v}" class="admin-dsp2-fold lg:col-span-2" data-tpl="B">
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
    `),D())}function D(){let d=document.getElementById(v);if(!d)return;let s=document.getElementById("wh-register-form");s&&s.addEventListener("submit",async r=>{r.preventDefault();let b=document.getElementById("wh-url").value.trim();if(!b)return;let e=Array.from(s.querySelectorAll('input[name="wh-event"]:checked')).map(m=>m.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let t=document.getElementById("wh-format").value,i=document.getElementById("wh-secret").value.trim(),a={url:b,events:e,format:t};i&&(a.secret=i);try{let m=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),S=await m.json();m.ok&&S.hook_id?(showToast(ServerI18n.t("webhookRegistered")),s.reset(),I(),s.hidden=!0,await C()):showToast(S.error||ServerI18n.t("registrationFailed"),!1)}catch(m){console.error("Webhook register error:",m),showToast(ServerI18n.t("registrationFailed"),!1)}}),d.addEventListener("click",r=>{if(r.target.closest("[data-wh-action='show-add']")){s&&(s.hidden=!1);return}if(r.target.closest("[data-wh-action='hide-add']")){s&&(s.hidden=!0);return}let t=r.target.closest("[data-wh-log-filter]");if(t){F.deliveryFilter=t.dataset.whLogFilter,d.querySelectorAll("[data-wh-log-filter]").forEach(K=>{K.classList.toggle("is-active",K.dataset.whLogFilter===F.deliveryFilter)}),l();return}let i=r.target.closest("[data-wh-action='test']");if(i){r.stopPropagation(),f(i.dataset.whHookId);return}let a=r.target.closest("[data-wh-action='settings']");if(a){r.stopPropagation(),o(a.dataset.whHookId);return}if(r.target.closest("[data-wh-action='close-detail']")){F.selectedHookId=null,n(),g();return}let S=r.target.closest("[data-wh-action='detail-ping']");if(S){f(S.dataset.whHookId);return}let k=r.target.closest("[data-wh-action='detail-toggle']");if(k){p(k.dataset.whHookId,k.dataset.whNextEnabled==="1");return}let L=r.target.closest("[data-wh-action='detail-delete']");if(L){w(L.dataset.whHookId);return}let O=r.target.closest("[data-wh-hook-row]");if(O&&!r.target.closest("button")){o(O.dataset.whHookId);return}}),F.stopPoll||(F.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(v)},intervalMs:u,tick:C}))}async function C(){await E(),await Promise.all([y(),M()]),H(),g(),l(),n()}async function y(){try{let s=await(await csrfFetch("/admin/webhooks/list")).json();F.hooks=Array.isArray(s.webhooks)?s.webhooks:[]}catch{F.hooks=[]}}async function M(){try{let d=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!d.ok)return;let s=await d.json();F.deliveries=Array.isArray(s.deliveries)?s.deliveries:[],F.stats=s.stats||null}catch{}}async function E(){if(!F.eventCatalogLoaded)try{let d=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(d.ok){let s=await d.json(),r=Array.isArray(s.events)?s.events:[];r.length&&(F.eventCatalog=r)}}catch{}finally{F.eventCatalogLoaded=!0,I()}}function x(d){let s=d&&d.slug?String(d.slug):"";if(d&&d.labelKey){let i=ServerI18n.t(d.labelKey);return{slug:s,label:i?i+" \xB7 "+s:s,title:i}}let r=d&&d.zh?String(d.zh):"",b=d&&d.en?String(d.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",t=(d&&d[e]?String(d[e]):"")||b||r;return{slug:s,label:t?t+" \xB7 "+s:s,title:r&&b?r+" \xB7 "+b:r||b}}function I(){let d=document.querySelector("[data-wh-register-events]");d&&(d.innerHTML=F.eventCatalog.map(function(s){let r=x(s);if(!r.slug)return"";let b=r.slug==="on_danmu"?" checked":"";return'<label title="'+h(r.title)+'"><input type="checkbox" name="wh-event" value="'+h(r.slug)+'"'+b+" /> "+h(r.label)+"</label>"}).join(""))}function H(){let d=document.querySelector("[data-wh-stats]");if(!d)return;let s=F.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};d.innerHTML=`
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
      </div>`}function T(){return F.hooks.length&&F.hooks[0].retry_count||3}function g(){let d=document.getElementById("wh-list"),s=document.querySelector("[data-wh-count]");if(d){if(s&&(s.textContent=String(F.hooks.length)),F.hooks.length===0){d.innerHTML="";let r=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let b=document.getElementById("wh-register-form");b&&(b.hidden=!1),document.getElementById("wh-url")?.focus()}});r.dataset.emptyKind="webhooks",d.appendChild(r);return}d.innerHTML=F.hooks.map(c).join("")}}function c(d){let s=h(d.id||""),r=Number(d.success_count)||0,b=Number(d.fail_count)||0,e=r+b,t=e>0?Math.round(r/e*1e3)/10:100,i=d.enabled!==!1,a=Number(d.last_status)||null,m=i?a&&a>=400||d.last_error?"degraded":"active":"paused",S=m==="active"?"var(--hud-lime)":m==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",k=m==="active"?"ACTIVE":m==="degraded"?"DEGRADED":"PAUSED",L=F.selectedHookId===d.id?" is-selected":"",O=N(m),K=(d.events||[]).map(function(P){return'<span class="admin-ui-pill admin-wh-evt-chip">'+h(P)+"</span>"}).join(""),_=d.last_error?'<div class="admin-wh-card-warn">\u26A0 '+h(B(d.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${L}" data-wh-hook-row data-wh-hook-id="${s}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${S};box-shadow:${i?"0 0 6px "+S:"none"}"></span>
          <span class="name">${h(U(d.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${O}">${k}</span>
          <span class="last">last \xB7 ${h(A(d.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${h(d.url)}</div>
        <div class="admin-wh-card-events">${K}</div>
        ${_}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${t}%;background:${S}"></div></div>
            <span class="pct" style="color:${S}">${t}%</span>
          </div>
          <span class="counter ok">\u2713 ${r.toLocaleString()}</span>
          <span class="counter ${b>0?"fail":"fail-zero"}">\u2717 ${b}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function l(){let d=document.getElementById("wh-log-list");if(!d)return;let s=F.deliveries.filter(function(r){return F.deliveryFilter==="all"?!0:F.deliveryFilter==="failed"?!r.ok:F.deliveryFilter==="2xx"?r.code&&r.code>=200&&r.code<300:F.deliveryFilter==="5xx"?r.code&&r.code>=500:!0});if(s.length===0){d.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}d.innerHTML=s.map(function(r){let b=r.ts?new Date(r.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=r.code?String(r.code):"\u2014",t=r.ok?"var(--hud-lime)":"var(--hud-crimson)",i=r.duration_ms?r.duration_ms>=1e3?(r.duration_ms/1e3).toFixed(1)+"s":r.duration_ms+"ms":"\u2014",a=r.ok?"var(--color-text-strong)":"var(--hud-amber)",m=h(U(r.hook_url||"")),S=(r.retries||0)===0?"\u2014":"\xD7"+r.retries,k=(r.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${r.dropped?" is-dropped":""}">
          <span class="time">${h(b)}</span>
          <span class="code" style="color:${t};border-color:${t}55;background:${t}15;">${e}</span>
          <span class="dur" style="color:${a}">${h(i)}</span>
          <span class="ep">${m}</span>
          <span class="evt">${h(r.event||"")}</span>
          <span class="retry" style="color:${k}">${S}</span>
        </div>`}).join("")}function o(d){F.selectedHookId=d,g(),n()}function n(){let d=document.querySelector("[data-wh-detail]");if(!d)return;let s=F.hooks.find(function(m){return m.id===F.selectedHookId});if(!s){d.hidden=!0,d.innerHTML="";return}d.hidden=!1;let r=s.enabled!==!1,b=Number(s.last_status)||null,e=r?b&&b>=400||s.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",t=new Set(s.events||[]),i=F.eventCatalog.map(function(m){let S=x(m),k=t.has(S.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(k?"is-active is-on":"")+'" title="'+h(S.title)+'"><span aria-hidden="true">'+(k?"\u2713":"\u25CB")+"</span><span>"+h(S.label)+"</span></label>"}).join(""),a={event:s.events&&s.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:s.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};d.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+h(U(s.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+i+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(s.retry_count!=null?s.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(s.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+h(JSON.stringify(a,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+h(s.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+h(s.id)+'" data-wh-next-enabled="'+(r?"0":"1")+'">'+(r?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+h(s.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function f(d){if(d)try{let s=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),r=await s.json();s.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(r.error||ServerI18n.t("testFailed"),!1),setTimeout(C,1500)}catch(s){console.error("Webhook test error:",s),showToast(ServerI18n.t("testFailed"),!1)}}async function p(d,s){if(d)try{let r=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d,enabled:s})}),b=await r.json();if(!r.ok){showToast(b.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=F.hooks.find(function(t){return t.id===d});e&&(e.enabled=b.enabled),showToast(b.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),g(),n()}catch(r){console.error("Webhook toggle error:",r),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function w(d){if(!(!d||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let r=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),b=await r.json();r.ok?(showToast(ServerI18n.t("webhookDeleted")),F.selectedHookId===d&&(F.selectedHookId=null),C()):showToast(b.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("Webhook delete error:",r),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(v)&&R()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),R()})})()});var Ut=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let v="sec-sounds",u=null,$=[],B=[];async function A(){try{let l=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!l.ok)throw new Error(await l.text());let o=await l.json();$=o.sounds||[],B=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",$.length||"")}catch(l){console.error("Failed to fetch sounds:",l),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),$=[],B=[]}}async function U(){return A()}async function N(l,o){let n=new FormData;n.append("file",l),n.append("name",o);let f=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:n}),p=await f.json();if(!f.ok)throw new Error(p.error||"Upload failed");return p}async function F(l){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Delete failed");return n}async function R(l){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to add rule");return n}async function D(l){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to delete rule");return n}function C(){let l=document.getElementById("soundsList");if(l){if($.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",l.appendChild(o);return}l.innerHTML=$.map(function(f){var p=h(f.name),w=Math.round((f.volume!=null?f.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+h(f.name)+'"><div class="name" title="'+p+'">'+p+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+h(f.name)+'" min="0" max="100" step="1" value="'+w+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+h(f.name)+'" style="min-width:32px;text-align:right">'+w+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+h(f.name)+'">'+h(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+h(f.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),l.querySelectorAll(".sound-play-btn").forEach(function(f){f.addEventListener("click",function(){var p=f.dataset.name,w=$.find(function(d){return d.name===p});w&&(u&&(u.pause(),u=null),u=new Audio(w.url),u.volume=.5,u.play().catch(function(d){console.warn("Audio preview failed:",d)}))})}),l.querySelectorAll(".sound-delete-btn").forEach(function(f){f.addEventListener("click",async function(){var p=f.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",p),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await F(p),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",p),!0),await A(),C(),M()}catch(d){window.showToast(d.message,!1)}})});var n={};l.querySelectorAll(".sound-volume-slider").forEach(function(f){var p=f.dataset.name,w=l.querySelector('.sound-volume-label[data-name="'+CSS.escape(p)+'"]');f.addEventListener("input",function(){w&&(w.textContent=f.value+"%"),clearTimeout(n[p]),n[p]=setTimeout(function(){y(p,Number(f.value)/100)},300)}),f.addEventListener("change",function(){clearTimeout(n[p]),y(p,Number(f.value)/100)})})}}async function y(l,o){try{var n=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(l)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),f=await n.json();if(!n.ok){window.showToast(f.error||"Volume update failed",!1);return}var p=$.find(function(w){return w.name===l});p&&(p.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(w){console.warn("[admin-sounds] volume save failed:",w),window.showToast("Network error",!1)}}function M(){let l=document.getElementById("ruleSoundName");if(!l)return;let o=l.value;if(l.innerHTML="",$.length===0){let n=document.createElement("option");n.value="",n.textContent=ServerI18n.t("noSoundsAvailable"),n.disabled=!0,l.appendChild(n);return}$.forEach(n=>{let f=document.createElement("option");f.value=n.name,f.textContent=n.name,l.appendChild(f)}),o&&[...l.options].some(n=>n.value===o)&&(l.value=o)}function E(){let l=document.getElementById("rulesList");if(l){if(B.length===0){l.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",l.appendChild(o);return}l.innerHTML=B.map(function(n){var f=n.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):n.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",n.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",n.trigger_value),p=Math.round((n.volume!=null?n.volume:1)*100),w=ServerI18n.t("soundDetailLine").replace("{sound}",n.sound_name).replace("{vol}",p).replace("{cd}",n.cooldown!=null?n.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+h(String(n.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+h(f)+'</div><div class="admin-sounds-rule-detail">'+h(w)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+h(String(n.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),l.querySelectorAll(".sound-rule-del-btn").forEach(function(n){n.addEventListener("click",async function(){try{await D(n.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await U(),E()}catch(f){window.showToast(f.message,!1)}})})}}function x(){let l=document.getElementById("soundUploadBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),n=document.getElementById("soundNameInput"),f=o.files[0];if(!f){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let p=n.value.trim();if(!p){window.showToast(ServerI18n.t("enterSoundName"),!1);return}l.disabled=!0,l.textContent=ServerI18n.t("uploadingStatus");try{await N(f,p),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",p),!0),o.value="",n.value="",await A(),C(),M()}catch(w){window.showToast(w.message,!1)}finally{l.disabled=!1,l.textContent=ServerI18n.t("soundsUploadIdle")}})}function I(){let l=document.getElementById("addRuleBtn");l&&l.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,n=document.getElementById("ruleTriggerValue").value.trim(),f=document.getElementById("ruleSoundName").value,p=document.getElementById("ruleVolume"),w=document.getElementById("ruleCooldown");if(o!=="all"&&!n){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!f){window.showToast(ServerI18n.t("selectSound"),!1);return}let d=parseInt(p.value,10)/100,s=parseInt(w.value,10)||0,r={trigger_type:o,trigger_value:o==="all"?"":n,sound_name:f,volume:Math.max(0,Math.min(1,d)),cooldown:Math.max(0,s)};l.disabled=!0;try{await R(r),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await U(),E()}catch(b){window.showToast(b.message,!1)}finally{l.disabled=!1}})}function H(){let l=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!l||!o)return;function n(){l.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):l.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):l.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}l.addEventListener("change",n),n()}function T(){let l=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!l||!o||l.addEventListener("input",()=>{o.textContent=l.value+"%"})}function g(){return`
      <div id="${v}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function c(){let l=document.getElementById("settings-grid");if(l){if(l.insertAdjacentHTML("beforeend",g()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let n=document.getElementById("rulesList");n&&(n.innerHTML="",n.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([A(),U()]),C(),M(),E(),x(),I(),H(),T()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let l=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(v)&&!l&&(l=!0,c().finally(()=>{l=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(v)&&(l=!0,c().finally(()=>{l=!1}))})})()});var Kt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let v=/^[a-zA-Z0-9_]{1,32}$/,u=".png,.gif,.webp",$="sec-emojis",B=[];function A(){return`
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
    `}function U(T){let g=":"+T.name+":",c=Number(T.used)||0,l=c>0?ServerI18n.t("emojisUsedCount",{n:c}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+R(T.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+R(T.url)+'" alt="'+R(g)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+h(g)+'</div><div class="admin-em-v4__tile-meta">'+h(l)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+R(g)+'" title="'+R(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+R(T.name)+'" title="'+R(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(T){let g=document.querySelector("[data-em-quota-label]"),c=document.querySelector("[data-em-quota-fill]");if(!g||!c)return;let l=T.length,o=100;g.textContent=ServerI18n.t("emojisQuotaUsed",{n:l,max:o}),c.style.width=Math.min(100,l/o*100)+"%"}function F(T){let g=document.querySelector("[data-em-preview-body]");if(!g)return;if(!T||T.length===0){g.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let l=T.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${h(o.name)}:</code> \u2192 <img src="${R(o.url)}" alt=":${R(o.name)}:" /></span>`);g.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:l.join(" \xB7 ")})}function R(T){return h(T)}function D(T){var g=document.getElementById("emojiGrid"),c=document.getElementById("emojiCount");g&&(!T||T.length===0?(window.AdminEmpty?(g.innerHTML="",g.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var l=document.getElementById("emojiFileInput");l&&l.click()}}))):g.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("noEmojisUploaded"))+"</div>",c&&(c.textContent="0")):(g.innerHTML=T.map(U).join(""),c&&(c.textContent=String(T.length))),N(B),F(B))}function C(){var T=document.getElementById("emojiGrid");if(T)if(window.AdminSkeletons){T.innerHTML="";for(var g=0;g<8;g++){var c=document.createElement("div");c.className="admin-em-v4__tile admin-em-v4__tile--skel";var l=document.createElement("div");l.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",l.appendChild(o),c.appendChild(l);var n=document.createElement("div");n.className="admin-skel admin-skel-bar",n.style.width="60%",n.style.height="8px",n.style.margin="6px auto",c.appendChild(n),T.appendChild(c)}}else T.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadingEmojis"))+"</div>"}async function y(){try{var T=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!T.ok)throw new Error("HTTP "+T.status);var g=await T.json();B=g.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",B.length||""),M()}catch(l){console.error("[admin-emojis] fetch failed:",l);var c=document.getElementById("emojiGrid");c&&(c.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function M(){var T=document.getElementById("emojiSearchInput"),g=(T&&T.value||"").trim().toLowerCase(),c=g?B.filter(function(l){return(l.name||"").toLowerCase().includes(g)}):B;D(c)}async function E(){var T=document.getElementById("emojiNameInput"),g=document.getElementById("emojiFileInput"),c=document.getElementById("emojiUploadBtn");if(!(!T||!g||!c)){var l=T.value.trim(),o=g.files&&g.files[0];if(!l){showToast(ServerI18n.t("emojiNameRequired"),!1),T.focus();return}if(!v.test(l)){showToast(ServerI18n.t("emojiNameInvalid"),!1),T.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var n=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(n)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{var f=new FormData;f.append("name",l),f.append("emojifile",o);var p=await csrfFetch("/admin/emojis/upload",{method:"POST",body:f}),w=await p.json();p.ok?(showToast(w.message||ServerI18n.t("emojiUploadFallback")),T.value="",g.value="",await y()):showToast(w.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-emojis] upload error:",d),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function x(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",T),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var c=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),l=await c.json();c.ok?(showToast(l.message||ServerI18n.t("emojiDeleteFallback")),await y()):showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function I(T){try{await navigator.clipboard.writeText(T),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}catch{var g=document.createElement("textarea");g.value=T,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}}function H(){var T=document.getElementById("settings-grid");if(T){T.insertAdjacentHTML("beforeend",A());var g=document.getElementById("emojiUploadBtn");g&&g.addEventListener("click",E);var c=document.getElementById("emojiNameInput");c&&c.addEventListener("keydown",function(p){p.key==="Enter"&&(p.preventDefault(),E())});var l=document.getElementById("emojiSearchInput");l&&l.addEventListener("input",M);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(p){var w=p.target.closest(".emoji-copy-btn");if(w){I(w.dataset.label);return}var d=p.target.closest(".emoji-delete-btn");d&&x(d.dataset.name)});var n=document.querySelector("[data-em-dropzone]"),f=document.getElementById("emojiFileInput");n&&f&&(["dragenter","dragover"].forEach(function(p){n.addEventListener(p,function(w){w.preventDefault(),n.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(p){n.addEventListener(p,function(w){w.preventDefault(),n.classList.remove("is-dragover")})}),n.addEventListener("drop",function(p){var w=p.dataTransfer&&p.dataTransfer.files&&p.dataTransfer.files[0];if(w){var d=new DataTransfer;d.items.add(w),f.files=d.files;var s=document.getElementById("emojiNameInput");if(s&&!s.value){var r=w.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");s.value=r.slice(0,32),s.focus()}n.classList.add("is-dropping"),setTimeout(function(){n.classList.remove("is-dropping")},1200)}})),C(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var T=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById($)&&H()});T.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById($)&&H()}})})()});var Wt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml,v="sec-stickers",u=["png","gif","webp"],$=".gif,.png,.webp",B="__all__",A=[],U=[],N=B;function F(l){return h(l)}function R(){var l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=l?`
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
      <div id="${v}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):h(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function D(l){return l===B?A.length:A.filter(function(o){return o.pack_id===l}).length}function C(){var l=document.getElementById("stickerPackList");if(l){var o='<button type="button" class="admin-stickers-pack'+(N===B?" is-active":"")+'" data-pack="'+B+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+D(B)+"</span></button>";U.forEach(function(n){var f=n.enabled?"is-success":"is-muted",p="admin-stickers-pack"+(n.id===N?" is-active":""),w=n.id==="default",d=w?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+F(n.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+F(n.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+F(n.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+F(n.id)+'" title="'+(n.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(n.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+F(n.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+p+'" data-pack="'+F(n.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+F(n.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+f+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+h(n.name)+'</span><span class="admin-stickers-pack-count">'+D(n.id)+"</span></button>"+d+"</div>"}),l.innerHTML=o}}function y(l){var o=":"+l.name+":";return'<div class="admin-stickers-tile"><img src="'+F(l.url)+'" alt="'+F(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+F(o)+'">'+h(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+F(o)+'" title="'+F(ServerI18n.t("copyToClipboard"))+'">'+h(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+F(l.name)+'" title="'+F(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function M(){var l=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(l){var n=document.getElementById("stickerSearchInput"),f=(n&&n.value||"").trim().toLowerCase(),p=A.filter(function(d){return!(N!==B&&d.pack_id!==N||f&&!(d.name||"").toLowerCase().includes(f))});if(p.length===0){l.innerHTML="";var w=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});w.dataset.emptyKind="stickers",w.style.gridColumn="1 / -1",l.appendChild(w),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}l.innerHTML=p.map(y).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:p.length}))}}async function E(){var l=document.getElementById("stickerGrid");if(l)try{var[o,n]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);A=(await o.json()).stickers||[],U=n.ok?(await n.json()).packs||[]:[],N!==B&&!U.some(function(f){return f.id===N})&&(N=B),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",U.length?ServerI18n.t("tabCountPacks",{n:U.length}):""),C(),M()}catch(f){console.error("[admin-stickers] fetch failed:",f),l.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function x(l,o){if(l==="select"){N=o,C(),M();return}if(l==="rename"){var n=U.find(function(m){return m.id===o}),f=prompt(ServerI18n.t("stickersPackNamePrompt"),n?n.name:"");if(!f)return;try{var p=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f})}),w=await p.json();p.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await E()):window.showToast(w.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="toggle"){try{var d=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});d.ok&&await E()}catch{}return}if(l==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),r=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),N===o&&(N=B),await E()):window.showToast(r.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(l==="up"||l==="down"){var b=U.slice().sort(function(m,S){return(m.order||0)-(S.order||0)}),e=b.findIndex(function(m){return m.id===o});if(e<0)return;var t=l==="up"?e-1:e+1;if(t<0||t>=b.length)return;var i=b[e],a=b[t];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:a.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i.order||0})})]),await E()}catch{}}}async function I(){var l=prompt(ServerI18n.t("stickersNewPackPrompt"));if(l)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),n=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),N=n.pack&&n.pack.id?n.pack.id:N,await E()):window.showToast(n.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var l=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!l||!o)){var n=l.files&&l.files[0];if(!n){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var f=n.name.split(".").pop().toLowerCase();if(u.indexOf(f)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var p=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var w=new FormData;w.append("file",n),N&&N!==B&&w.append("pack_id",N);var d=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:w}),s=await d.json();d.ok?(window.showToast(s.message||ServerI18n.t("stickerUploadFallback")),l.value="",await E()):window.showToast(s.error||ServerI18n.t("uploadFailed"),!1)}catch(r){console.error("[admin-stickers] upload error:",r),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=p}}}async function T(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var n=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(l),{method:"DELETE"}),f=await n.json();n.ok?(window.showToast(f.message||ServerI18n.t("stickerDeleteFallback")),await E()):window.showToast(f.error||ServerI18n.t("deleteFailed"),!1)}catch(p){console.error("[admin-stickers] delete error:",p),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function g(l){try{await navigator.clipboard.writeText(l),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}catch{var o=document.createElement("textarea");o.value=l,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",l))}}function c(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",R());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",H);var n=document.getElementById("stickerPackAddBtn");n&&n.addEventListener("click",I);var f=document.getElementById("stickerSearchInput");f&&f.addEventListener("input",M);var p=document.getElementById("stickerPackList");p&&p.addEventListener("click",function(d){var s=d.target.closest("[data-pack-action]");if(!s){var r=d.target.closest("[data-pack]");r&&x("select",r.dataset.pack);return}var b=s.dataset.packAction,e=s.dataset.packId;b==="select"&&!e&&(e=s.closest("[data-pack]")&&s.closest("[data-pack]").dataset.pack),x(b,e)});var w=document.getElementById("stickerGrid");w&&w.addEventListener("click",function(d){var s=d.target.closest(".sticker-copy-btn");if(s){g(s.dataset.label);return}var r=d.target.closest(".sticker-delete-btn");r&&T(r.dataset.name)}),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(v)&&c()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(v)&&c()}})})()});var Gt=ye(()=>{(function(){"use strict";let h="sec-extensions-overview",v=window.AdminUtils.escapeHtml,u=15e3,$=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],B={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},A=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function U(g){let c=g&&!g.stale?g.report:null;if(!c&&g&&g.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!c)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(c.state==="error"){let l=A.includes(c.error)?c.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+l)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:c.sent||0,held:c.held||0,blocked:c.blocked||0,skipped:c.late_skipped||0})}}function N(){return`
      <div id="${h}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${$.map(F).join("")}
        </div>
      </div>`}function F(g){let c=g.status==="ready",l="is-cold",o=c?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,n=c&&g.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${g.install.steps.map(p=>{if(p.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${v(ServerI18n.t(p.labelKey))} \u2193</a></li>`;let w=p.showOrigin?` <code class="admin-ext-step-code">${v(window.location.origin)}</code>`:"";return`<li>${v(ServerI18n.t(p.labelKey))}${w}</li>`}).join("")}
          </ol>
        </div>`:"",f=g.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
            <div class="name">${v(g.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${v(g.version)}</span></div>
          </div>
          ${o}
        </div>
        <p class="admin-ext-desc">${v(ServerI18n.t(g.descKey))}</p>
        ${g.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${v(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${n}
        ${f}
      </article>`}async function R(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;B.fireToken=await g.json(),x()}catch{}}async function D(){try{let g=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();B.sources=Array.isArray(c.sources)?c.sources:[],I()}catch{}}async function C(){try{let g=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!g.ok)return;B.slidoStatus=await g.json(),H()}catch{}}function y(){D(),C()}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let l=await c.json();B.fireToken={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at},B.plainToken=l.token,x(),window.AdminUtils.copyText(l.token,ServerI18n.t("extToastTokenGenerated"))}catch(c){console.warn("[ext] regen failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function E(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);B.fireToken=await c.json(),B.plainToken=null,x(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(c){console.warn("[ext] revoke failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function x(){let g=document.querySelector("[data-fire-token-display]"),c=document.querySelector('[data-fire-token-action="copy"]'),l=document.querySelector('[data-fire-token-action="regen"]'),o=document.querySelector('[data-fire-token-action="revoke"]');if(!g)return;let n=B.fireToken;B.plainToken?(g.textContent=B.plainToken,g.classList.add("is-plain")):n&&n.has_token?(g.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:n.prefix||""}),g.classList.remove("is-plain")):(g.textContent=ServerI18n.t("extTokenNotSetHint"),g.classList.remove("is-plain")),c&&(c.disabled=!B.plainToken),l&&(l.textContent=n&&n.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),o&&(o.disabled=!(n&&n.has_token))}function I(){let g=new Set(B.sources.map(c=>c.source));document.querySelectorAll(".admin-ext-card").forEach(c=>{let l=$.find(f=>f.id===c.dataset.ext);if(!l)return;let o=c.querySelector("[data-ext-dot]");if(!o)return;let n=l.sourceMatch&&g.has(l.sourceMatch);o.classList.toggle("is-live",!!n),o.classList.toggle("is-cold",!n)})}function H(){let g=document.querySelector("[data-slido-status]");if(!g)return;let c=U(B.slidoStatus);g.textContent=c.text,g.classList.toggle("is-live",c.tone==="is-live"),g.classList.toggle("is-error",c.tone==="is-error");let l=B.slidoStatus&&B.slidoStatus.extension,o=g.closest(".admin-ext-card"),n=o&&o.querySelector("[data-ext-download-step]"),f=o&&o.querySelector("[data-ext-download]"),p=o&&o.querySelector("[data-ext-version]");l&&l.download_url&&l.version?(f&&f.setAttribute("href",l.download_url),n&&(n.hidden=!1),p&&(p.textContent="v"+l.version)):n&&(n.hidden=!0)}function T(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",N());let c=document.getElementById(h);c&&c.addEventListener("click",l=>{let o=l.target.closest("[data-fire-token-action]");if(!o)return;let n=o.dataset.fireTokenAction;n==="regen"?M():n==="revoke"?E():n==="copy"&&B.plainToken&&window.AdminUtils.copyText(B.plainToken,ServerI18n.t("firetokenToastCopied"))}),R(),B.stopPoll||(B.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:u,tick:y}))}window.AdminExtensions={slidoStatusView:U},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&T()})})()});var Vt=ye(()=>{(function(){"use strict";let h="sec-firetoken-overview",v=window.AdminUtils.escapeHtml,u=15e3,$={token:null,plainToken:null,usage24h:[],ceilingPerMin:0,ips:[],audit:[],pollTimer:0};function B(){return`
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
    `}async function A(){await Promise.all([U(),N(),F()])}async function U(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;$.token=await g.json(),M()}catch{}}async function N(){try{let g=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();$.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],$.ceilingPerMin=Number(c.ceiling_per_min)||0;let l=document.querySelector("[data-ft-ceiling]");l&&(l.textContent=$.ceilingPerMin>0?" \xB7 "+ServerI18n.t("firetokenCeilingPerMin",{n:$.ceilingPerMin}):""),$.ips=Array.isArray(c.ips)?c.ips:[],x(),I(),E()}catch{}}async function F(){try{let g=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();$.audit=Array.isArray(c.events)?c.events:[],H()}catch{}}async function R(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let l=await c.json();$.token={enabled:l.enabled,prefix:l.prefix,has_token:!0,rotated_at:l.rotated_at,created_at:l.created_at||l.rotated_at},$.plainToken=l.token,M(),window.AdminUtils.copyText(l.token,ServerI18n.t("firetokenToastGenerated")),F()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function D(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);$.token=await c.json(),$.plainToken=null,M(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),F()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function C(g){if(!g)return"\u2014";let c=Date.now()/1e3-g;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function y(g){if(!g)return"\u2014";try{return new Date(g*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function M(){let g=$.token,c=document.querySelector("[data-ft-token-display]"),l=document.querySelector("[data-ft-status]"),o=document.querySelector('[data-ft-action="copy"]'),n=document.querySelector('[data-ft-action="regen"]'),f=document.querySelector('[data-ft-action="revoke"]'),p=document.querySelector('[data-ft-stat="created"]'),w=document.querySelector('[data-ft-stat="rotated"]'),d=document.getElementById("adminFtCurl");if(c&&($.plainToken?(c.textContent=$.plainToken,c.classList.add("is-plain")):g&&g.has_token?(c.textContent=(g.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),l&&(g&&g.enabled&&g.has_token?(l.textContent=ServerI18n.t("firetokenStatusHealthy"),l.className="admin-ft-status is-good"):g&&g.has_token?(l.textContent=ServerI18n.t("firetokenStatusDisabled"),l.className="admin-ft-status is-warn"):(l.textContent=ServerI18n.t("firetokenStatusUnset"),l.className="admin-ft-status is-muted")),o&&(o.disabled=!$.plainToken),f&&(f.disabled=!(g&&g.has_token)),n&&(n.textContent=g&&g.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),p&&(p.textContent=g?y(g.created_at):"\u2014"),w&&(w.textContent=g?C(g.rotated_at):"\u2014"),d)){let s=$.plainToken?$.plainToken:g&&g.prefix?g.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";d.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${s}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function E(){let g=$.usage24h.map(p=>Number(p)||0),c=g.reduce((p,w)=>p+w,0),l=g.length?Math.max(...g):0,o=document.querySelector('[data-ft-stat="hits"]'),n=document.querySelector('[data-ft-stat="peak"]'),f=document.querySelector("[data-ft-peak-meta]");o&&(o.textContent=c.toLocaleString()),n&&(n.textContent=l.toLocaleString()),f&&(f.textContent=ServerI18n.t("firetokenPeakMeta",{peak:l.toLocaleString()}))}function x(){let g=document.getElementById("adminFtChart24h");if(!g)return;let c=$.usage24h.map(f=>Number(f)||0);if(!c.length){g.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let l=Math.max(...c),o=($.ceilingPerMin||0)*60,n=l>0?Math.min(100,o/Math.max(l,o)*100):100;g.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((f,p)=>{let w=l>0?Math.max(2,f/l*100):2;return`<div class="bar ${l>0&&f===l?"is-peak":""}" style="height:${w}%" title="${p.toString().padStart(2,"0")}:00 \u2014 ${f}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(f=>`<span>${String(f).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function I(){let g=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!g)return;let l=$.ips||[];if(c&&(c.textContent=l.length?`${l.length} IP`:"\u2014"),!l.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let o=l[0]?.ip;g.innerHTML=l.map((n,f)=>{let p=f===0,w=n.source==="web"&&(n.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${p?"is-top":""}">
          <span class="ip">${v(n.ip||"?")}</span>
          ${p?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${w?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${v(n.source||"\u2014")}</span>
          <span class="cnt">${n.count||0} hits</span>
          <span class="when">${C(n.last_seen)}</span>
        </div>`}).join("")}function H(){let g=document.getElementById("adminFtAudit");if(!g)return;let c=$.audit||[];if(!c.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let l={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},o={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};g.innerHTML=c.map(n=>{let f=o[n.kind]||"is-info",p=l[n.kind]||n.kind,w=n.meta||{},d=w.prefix?` \xB7 prefix=${v(w.prefix)}`:w.enabled!=null?` \xB7 enabled=${w.enabled}`:"";return`
        <div class="admin-ft-audit-row ${f}">
          <span class="ts">${y(n.ts)}</span>
          <span class="kind">${v(p)}</span>
          <span class="detail">${d}</span>
        </div>`}).join("")}function T(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",B());let c=document.getElementById(h);c&&c.addEventListener("click",l=>{let o=l.target.closest("[data-ft-action]");if(!o)return;let n=o.dataset.ftAction;n==="regen"?R():n==="revoke"?D():n==="copy"&&$.plainToken&&window.AdminUtils.copyText($.plainToken,ServerI18n.t("firetokenToastCopied"))}),$.stopPoll||($.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(h),intervalMs:u,tick:A}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&T()})})()});var zt=ye(()=>{(function(){"use strict";let h="sec-about-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},u="Danmu Fire",$="https://github.com/guan4tou2/danmu-desktop",B=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],A=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],U="danmu.about.lastUpdateCheck",N={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function F(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${v(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${$}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${B.slice(0,4).map(T=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${v(T.v)}</span>
                  ${T.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${v(T.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${T.notes.slice(0,3).map(g=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${v(g.t)}">${v(g.t.toUpperCase())}</span>
                      <span class="msg">${v(g.l)}</span>
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
              ${A.slice(0,6).map(T=>`
                <div class="admin-about-oss-row">
                  <span class="n">${v(T.n)}</span>
                  <span class="v">${v(T.v)}</span>
                  <span class="l">${v(T.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function R(T){if(!T||T<0)return"\u2014";let g=Math.floor(T/86400),c=Math.floor(T%86400/3600),l=Math.floor(T%3600/60);return g>0?`${g}d ${c}h`:c>0?`${c}h ${l}m`:`${l}m`}function D(){let T=document.querySelector("[data-about-tag]"),g=document.querySelector("[data-about-build]"),c=document.querySelector("[data-about-uptime]"),l=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),n=document.querySelector("[data-about-env]"),f=document.querySelector("[data-about-ws-path]");if(T&&(T.textContent=`v${N.appVersion}`),g){let p=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";g.textContent=`BUILD \xB7 ${p} \xB7 stable channel`,n&&(n.textContent=p)}if(c){let p=N.serverStartedAt?N.serverTime-N.serverStartedAt:0;c.textContent=R(p)}if(l&&(N.isLatest===!0?l.textContent=ServerI18n.t("aboutIsLatestYes"):N.isLatest===!1?l.textContent=ServerI18n.t("aboutHasNewVersion",{v:N.latestVersion||""}):l.textContent="\u2014",l.style.color=N.isLatest===!0?"var(--hud-lime)":N.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=N.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:C(N.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),f){let p=window.DANMU_CONFIG||{};f.textContent=p.wsPath||"/ws"}}function C(T){let g=Number(T)||0;if(!g)return"\u2014";let c=String(g).length>12?g:g*1e3,l=(Date.now()-c)/1e3;return l<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(l)}):l<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(l/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(l/86400)})}function y(T,g){let c=f=>String(f||"").replace(/^v/i,"").split("-")[0].split(".").map(function(p){return parseInt(p,10)||0}),l=c(T),o=c(g),n=Math.max(l.length,o.length);for(let f=0;f<n;f++){let p=l[f]||0,w=o[f]||0;if(p>w)return!0;if(p<w)return!1}return!1}async function M({silent:T}={}){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let g=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!g.ok)throw new Error("HTTP "+g.status);let l=((await g.json()).tag_name||"").replace(/^v/i,"");N.latestVersion=l,N.lastCheckedAt=Date.now(),N.isLatest=!y(l,N.appVersion);try{localStorage.setItem(U,JSON.stringify({ts:N.lastCheckedAt,latest:l,isLatest:N.isLatest}))}catch{}D(),T||window.showToast&&window.showToast(N.isLatest?ServerI18n.t("aboutToastLatest",{v:N.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:l}),!0)}catch(g){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:g.message||""}),!1)}}function E(){try{let T=localStorage.getItem(U);if(!T)return;let g=JSON.parse(T);N.latestVersion=g.latest,N.lastCheckedAt=Number(g.ts)||0,N.isLatest=!!g.isLatest}catch{}}async function x(){try{let T=await fetch("/admin/metrics",{credentials:"same-origin"});if(!T.ok)return;let g=await T.json();N.serverStartedAt=Number(g.server_started_at)||0,N.serverTime=Number(g.server_time)||Date.now()/1e3,D()}catch{}}function I(){let T=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",g=N.serverStartedAt?N.serverTime-N.serverStartedAt:0,c=(navigator.userAgent||"").slice(0,200),l=[`${u} v${N.appVersion}`,`Channel: ${T}`,`Uptime: ${R(g)}`,`User-Agent: ${c}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(h))return;T.insertAdjacentHTML("beforeend",F()),N.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",E(),D();let g=document.getElementById(h);g&&g.addEventListener("click",function(c){let l=c.target.closest("[data-about-action]");if(!l)return;let o=l.dataset.aboutAction;o==="copy"?I():o==="check-update"?M({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),x(),setInterval(x,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&H()})})()});var Jt=ye(()=>{(function(){"use strict";let h="admin-setup-wizard-root",v="danmu.setupWizard.completed",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},$=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],B=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function A(s){return s?s.label?s.label:s.labelKey?ServerI18n.t(s.labelKey):s.name||s.id||"\u2014":"\u2014"}function U(s){return s?s.descriptionKey?ServerI18n.t(s.descriptionKey):s.description||"":""}let N={open:!1,step:0,themes:B.slice(),activeTheme:B[0].name,selectedTheme:B[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function F(){N.publicUrl=window.location.origin+"/"}function R(){let s=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";s==="setup"&&!N.open?D():s!=="setup"&&N.open&&C({silent:!0})}function D(){N.open=!0,N.step=0,F(),document.body.dataset.setupWizardOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",y()),l()),n(),x(),M()}function C(s){let r=s&&s.silent;N.open=!1,document.body.dataset.setupWizardOpen="";let b=document.getElementById(h);if(b&&b.remove(),!r&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function y(){return`
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
            ${$.map(function(s,r){return`
                <div class="admin-setup-step" data-step-index="${r}">
                  <span class="bullet">${r+1}</span>
                  <span class="lbl">${u(ServerI18n.t(s.labelKey))}</span>
                </div>
                ${r<$.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function M(){let s=document.getElementById(h);if(!s)return;s.querySelectorAll(".admin-setup-step").forEach(function(m,S){m.classList.toggle("is-done",S<N.step),m.classList.toggle("is-active",S===N.step)}),s.querySelectorAll(".admin-setup-step-sep").forEach(function(m,S){m.classList.toggle("is-done",S<N.step)});let r=s.querySelector("[data-setup-meta]");r&&(r.textContent=ServerI18n.t("setupWizardStepMeta",{current:N.step+1,total:$.length}));let b=s.querySelector('[data-setup-action="prev"]');b&&(b.disabled=N.step===0);let e=s.querySelector('[data-setup-action="next"]');if(e){let m=$[N.step].id;e.textContent=ServerI18n.t("setupWizardNext")}let t=s.querySelector("[data-setup-foot]");t&&(t.hidden=$[N.step].id==="done");let i=s.querySelector("[data-setup-content]");if(!i)return;let a=$[N.step].id;a==="server"?i.innerHTML=E():a==="moderation"?i.innerHTML=I():a==="theme"?i.innerHTML=g():i.innerHTML=c(),o(a)}function E(){let s=N.readiness,r=s?Number(s.overlay_count)||0:null,b=r!==null&&r>0,t=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:N.publicUrl},{ok:b,unknown:r===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:b?ServerI18n.t("setupWizardReadyDisplayOk",{n:r}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(N.activeTheme||N.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:A(N.themes.filter(function(i){return(i.name||i.id)===(N.selectedTheme||N.activeTheme)})[0]||N.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(i){let a=i.unknown?"is-unknown":i.ok?"is-done":"is-pending",m=i.unknown?"?":i.ok?"\u2713":"!",S='<span class="admin-setup-ready-title">'+u(i.title)+'</span><span class="admin-setup-ready-value">'+u(i.value||"")+"</span>",k=i.goto?'<a class="admin-setup-ready-go" href="'+i.goto+'" data-setup-goto="'+i.goto+'">'+u(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+a+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+m+"</span>"+S+k+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${t}</div>
      </div>`}async function x(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);let r=await s.json();N.readiness={overlay_count:Number(r.overlay_count)||0,mode:r.mode||""}}catch{N.readiness=null}N.open&&$[N.step].id==="server"&&M()}function I(){let s=N.moderationRules.map(function(r){return`
        <a class="admin-setup-mod-row" href="#/${r.route}" data-setup-goto="#/${r.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${u(ServerI18n.t(r.labelKey))}</span>
            <span class="admin-setup-mod-desc">${u(ServerI18n.t(r.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${u(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${s}</div>
      </div>`}let H=["default","neon","retro","cinema"];function T(){let s={};return(N.themes||[]).forEach(function(r){s[r.name||r.id]=r}),H.map(function(r){let b=B.filter(function(t){return t.name===r})[0],e=s[r];return b?{name:r,label:e&&e.label,labelKey:b.labelKey,descriptionKey:b.descriptionKey,colors:b.colors}:e}).filter(Boolean)}function g(){let s=T();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${s.map(function(r){let b=r.name||r.id||"",e=(N.selectedTheme||N.activeTheme)===b,t=(r.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${e?" is-selected":""}" data-setup-theme="${u(b)}">
                ${e?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${t.map(function(i,a){let m=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${u(i)};font-size:${10+a*2}px;text-shadow:0 0 6px ${u(i)}66;">${m[a]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${u(A(r))}</div>
                <div class="admin-setup-theme-sub">${u(U(r))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let s=(function(){for(let r=0;r<N.themes.length;r+=1){let b=N.themes[r];if((b.name||b.id)===(N.selectedTheme||N.activeTheme))return A(b)}return N.selectedTheme||N.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${u(N.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${u(s)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${u(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${u(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function l(){let s=document.getElementById(h);s&&s.addEventListener("click",function(r){if(r.target===s){C();return}let b=r.target.closest("[data-setup-action]");if(b){if(b.dataset.setupAction==="close"){C();return}if(b.dataset.setupAction==="prev"&&N.step>0){N.step-=1,M();return}b.dataset.setupAction==="next"&&p()}})}function o(s){let r=document.getElementById(h);if(r){if(s==="moderation"||s==="done"||s==="server"){if(r.querySelectorAll("[data-setup-goto]").forEach(function(b){b.addEventListener("click",function(){C();let e=b.dataset.setupGoto;e&&(window.location.hash=e)})}),s==="done"){let b=r.querySelector("[data-setup-complete-cta]");b&&b.addEventListener("click",w)}return}if(s==="theme"){r.querySelectorAll("[data-setup-theme]").forEach(function(b){b.addEventListener("click",function(){N.selectedTheme=b.dataset.setupTheme||N.selectedTheme,M()})});return}}}async function n(){try{let s=await fetch("/admin/themes",{credentials:"same-origin"});if(!s.ok)return;let r=await s.json(),b=Array.isArray(r.themes)?r.themes:[];if(!b.length)return;N.themes=b.map(function(e){return{name:e.name||e.id||"",label:e.label||e.display_name||e.name||"",description:e.description||"",colors:e.preview_colors||e.colors||e.palette||B[0].colors}}),N.activeTheme=r.active||N.themes[0]&&N.themes[0].name||N.activeTheme,N.selectedTheme||(N.selectedTheme=N.activeTheme),N.open&&$[N.step].id==="theme"&&M()}catch{}}async function f(){if(!N.selectedTheme||N.selectedTheme===N.activeTheme)return!0;try{let s=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:N.selectedTheme})});if(!s.ok)throw new Error("HTTP "+s.status);return N.activeTheme=N.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function p(){if(!($[N.step].id==="theme"&&!await f())){if(N.step<$.length-1){N.step+=1,M();return}w()}}function w(){try{localStorage.setItem(v,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),C()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}D()},close:function(){C()},isCompleted:function(){try{return!!localStorage.getItem(v)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",R),R()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var Yt=ye(()=>{(function(){"use strict";let h="sec-poll-deepdive-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(x){return String(x).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},u={poll:null,refreshTimer:0};function $(){return`
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
      </div>`}function B(x){if(x.innerHTML="",!window.AdminEmpty){x.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let I=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});I.classList.add("lg:col-span-2"),I.dataset.emptyKind="poll-deepdive",x.appendChild(I)}let A=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function U(x){return x?new Date(x*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function N(x){if(!x||x.length<2)return"";let I=Math.max.apply(null,x.map(function(l){return l.n}).concat([1])),H=100,T=32,g=H/(x.length-1),c=x.map(function(l,o){let n=(o*g).toFixed(2),f=(T-l.n/I*(T-2)-1).toFixed(2);return n+","+f});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+T+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+c.join(" ")+'" /></svg>'}function F(x){let I=x.state||(x.active?"active":"ended"),H=x.question||"\u2014",T=Array.isArray(x.options)?x.options:[],g=function(b){return Number(b.votes!=null?b.votes:b.count)||0},c=T.reduce(function(b,e){return b+g(e)},0),l=I==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:U(x.ended_at)}),o=(function(){let b=Number(x.started_at)||0;if(!b)return"\u2014";let e=I==="active"?Date.now()/1e3:Number(x.ended_at)||b,t=Math.max(0,Math.floor(e-b));return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")})(),n=Number(window._lastOverlayCount)||0,f=n>0?Math.round(c/n*100)+"%":"\u2014",p=n>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:c,audience:n}):ServerI18n.t("pollDeepdiveParticipationUnknown"),w=(function(){let b=Array.isArray(x.questions)?x.questions:[],e=0;for(let t of b)e+=Number(t.duplicate_attempts)||0;return b.length||(e=Number(x.duplicate_attempts)||0),e})(),d=T.map(function(b,e){let t=g(b),i=c>0?t/c*100:0,a=A[e%A.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${v(b.label||b.text||b.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${t} \xB7 ${i.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${i.toFixed(2)}%;background:${a}"></div>
          </div>
        </div>`}).join(""),s=Array.isArray(x.vote_timeline)?x.vote_timeline:[],r=s.length>=2?N(s):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${v(H)}</div>
          <div class="admin-pdd-state">${v(l)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${c}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${f}</div><div class="sub">${v(p)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${v(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${w}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${T.length?d:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${r}</div>
        </article>
      </div>`}function R(){let x=document.querySelector("[data-pdd-grid]");if(x){if(!u.poll||!u.poll.poll_id){B(x);return}x.innerHTML=F(u.poll)}}async function D(){try{let x=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!x.ok)return;let I=await x.json();u.poll=I,R()}catch{}}function C(){if(!u.poll||!Array.isArray(u.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let x=[["option_label","votes","percentage"]],I=u.poll.options.reduce(function(l,o){return l+(Number(o.votes!=null?o.votes:o.count)||0)},0);u.poll.options.forEach(function(l,o){let n=Number(l.votes!=null?l.votes:l.count)||0,f=I>0?(n/I*100).toFixed(2):"0.00";x.push([l.label||"option_"+(o+1),n,f])});let H=x.map(function(l){return l.map(window.AdminUtils.csvCell).join(",")}).join(`
`),T=new Blob([H],{type:"text/csv;charset=utf-8"}),g=URL.createObjectURL(T),c=document.createElement("a");c.href=g,c.download="poll-"+(u.poll.poll_id||"current")+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(g)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function y(){try{let x=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function M(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(D(),u.refreshTimer||(u.refreshTimer=setInterval(D,5e3))):u.refreshTimer&&(clearInterval(u.refreshTimer),u.refreshTimer=0)}function E(){let x=document.getElementById("settings-grid");if(!x||document.getElementById(h))return;x.insertAdjacentHTML("beforeend",$());let I=document.getElementById(h);I&&I.addEventListener("click",function(H){let T=H.target.closest("[data-pdd-action]");T&&(T.dataset.pddAction==="export-csv"?C():T.dataset.pddAction==="push"&&y())}),D(),M(),window.addEventListener("hashchange",M)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&E()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&E()})})()});var Qt=ye(()=>{(function(){"use strict";let h="admin-message-drawer-root",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},$={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},B=null;function A(f){let p=f.detail&&f.detail.entry;p&&($.open||(B=document.activeElement),$.entry=p,U(),p.data&&p.data.fingerprint&&D(p.data.fingerprint),C(p))}function U(){$.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",y()),M()),E();let f=document.querySelector("#"+h+" .admin-msgd-v4__close")||document.querySelector("#"+h+" button");if(f)try{f.focus({preventScroll:!0})}catch{}}function N(){$.open=!1,document.body.dataset.messageDrawerOpen="";let f=document.getElementById(h);if(f&&f.remove(),B&&typeof B.focus=="function"&&document.contains(B))try{B.focus({preventScroll:!0})}catch{}B=null}function F(f){if(!$.open)return;if(f.key==="Escape"){N();return}let p=document.activeElement,w=p?(p.tagName||"").toLowerCase():"";if(!(p&&(p.isContentEditable||w==="input"||w==="textarea"||w==="select"))){if(f.key==="ArrowLeft"||f.key==="k"){R(-1),f.preventDefault();return}if(f.key==="ArrowRight"||f.key==="j"){R(1),f.preventDefault();return}}}function R(f){if(!$.entry)return;let p=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(p=window.AdminLiveFeed.getEntries()),!p.length)return;let w=p.findIndex(function(r){return r.id===$.entry.id});if(w<0)return;let d=w+-f;if(d<0||d>=p.length){window.showToast&&window.showToast(f<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let s=p[d];$.entry=s,$.fingerprintRecord=null,C(s),E(),s.data&&s.data.fingerprint&&D(s.data.fingerprint)}async function D(f){try{let p=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!p.ok)return;let w=await p.json(),s=(Array.isArray(w.records)?w.records:[]).find(function(r){return r.fingerprint===f});$.fingerprintRecord=s||null,E()}catch{}}function C(f){let p=f.data&&f.data.fingerprint;if(!p){$.sameFpEntries=[];return}let w=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(w=window.AdminLiveFeed.getEntries()),$.sameFpEntries=w.filter(function(d){return(d.data&&d.data.fingerprint||d.fingerprint||"")===p}).slice(0,8)}function y(){return`
      <div id="${h}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function M(){let f=document.getElementById(h);f&&f.addEventListener("click",function(p){let w=p.target.closest("[data-msgd-action]");if(!w)return;p.stopPropagation();let d=w.dataset.msgdAction;d==="close"?N():d==="ban-fp"?g():d==="ban-fp-quick"?T():d==="recall-msg"?l():d==="blacklist-kw"?o():d==="reply"?n():d==="prev"?R(-1):d==="next"&&R(1)})}function E(){let f=document.getElementById(h);if(!f)return;let p=f.querySelector("[data-msgd-body]");p&&(p.innerHTML=x())}function x(){let f=$.entry;if(!f)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let p=f.data||{},w=p.fingerprint||"\u2014",d=w==="\u2014"?"\u2014":w.slice(0,8),s=w==="\u2014"?"\u2014":w.slice(0,12),r=f.ts?I(f.ts):"\u2014",b=p.nickname||ServerI18n.t("msgDrawerAnonymous"),e=$.fingerprintRecord||{},t=Number(e.message_count)||0,i=Number(e.violation_count)||0,a=$.sameFpEntries||[],m=a.length?Math.round(a.reduce((k,L)=>k+((L.data||L).text||"").length,0)/a.length):(p.text||"").length,S=0;for(let k=0;k<w.length;k++)S=S*31+w.charCodeAt(k)&65535;return S=S%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${S})">${u((b||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${u(b)}</div>
          <div class="admin-msgd-v4__fp">fp:${u(s)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${u(r)}</span>
      </div>

      <div class="admin-msgd-v4__body">${u(p.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${t||a.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${m}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${i>0?"warn":"good"}">${i}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${u(p.ip||"\u2014")}<br/>
          UA \xB7 ${u(p.user_agent||p.ua||"\u2014")}
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
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${p.message_id?"":"disabled"}>${u(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function I(f){try{let p=new Date(f),w=String(p.getHours()).padStart(2,"0"),d=String(p.getMinutes()).padStart(2,"0"),s=String(p.getSeconds()).padStart(2,"0");return w+":"+d+":"+s}catch{return"\u2014"}}function H(f){let p;if(typeof f=="number")p=f*1e3;else if(typeof f=="string")p=new Date(f).getTime();else return"\u2014";if(!p)return"\u2014";let w=(Date.now()-p)/1e3;return w<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(w)}):w<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(w/60)}):w<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(w/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(w/86400)})}async function T(f,p,w){let d=$.entry&&$.entry.data&&$.entry.data.fingerprint;if(!d)return;let s=parseInt(p||0,10)||0,r=s>0?await window.AdminModeration.banFingerprint(d,s,f):await window.AdminModeration.callBlock("fingerprint",d,f);if(!r.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:r.error||""}),!1);return}let b=w||(s>0?ServerI18n.t("msgDrawerSecondsLabel",{n:s}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:d.slice(0,8),label:b}),!0),N()}async function g(){let f=$.entry&&$.entry.data||{},p=f.fingerprint||"\u2014";if(p==="\u2014")return;let w=p.slice(0,12),d=f.nickname||ServerI18n.t("msgDrawerAnonymous"),s=0;for(let S=0;S<p.length;S++)s=s*31+p.charCodeAt(S)&65535;s=s%360;let r=document.createElement("div");r.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${s})">${u((d||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${u(d)}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let b=S=>{r.querySelectorAll(".admin-bancfm-dchip").forEach(k=>k.classList.remove("is-active")),S.classList.add("is-active")};if(r.addEventListener("click",S=>{let k=S.target.closest("[data-ban-duration]");k&&b(k)}),r.addEventListener("keydown",S=>{if(S.key!=="Enter"&&S.key!==" ")return;let k=S.target.closest("[data-ban-duration]");k&&(S.preventDefault(),b(k))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:r,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let t=(r.querySelector("[data-ban-reason]")||{}).value||"",i=r.querySelector(".admin-bancfm-dchip.is-active"),a=i&&parseInt(i.dataset.banDuration||"0",10)||0,m=i?i.textContent.trim():ServerI18n.t("msgDrawerPermanent");return T(t.trim(),a,m)}function c(){}async function l(){let f=$.entry,p=f&&f.data&&f.data.message_id;if(!p)return;if(!(await window.AdminModeration.recall(p)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),N()}async function o(){let f=$.entry&&$.entry.data&&$.entry.data.text;if(!f)return;await window.AdminModeration.blockKeyword(f)&&N()}async function n(){let f=document.querySelector("[data-msgd-reply]"),p=f?f.value.trim():"";if(p)try{let w=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:p})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),f&&(f.value="")}catch(w){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:w.message||""}),!1)}}window.AdminMessageDrawer={open:function(f){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:f}}))},close:N},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",A),document.addEventListener("keydown",F))})})()});var Xt=ye(()=>{(function(){"use strict";let h="danmu.notifications.read",v="danmu.notifications.archived",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},$={items:[],refreshTimer:0};function B(d){try{let s=localStorage.getItem(d);if(!s)return new Set;let r=JSON.parse(s);return new Set(Array.isArray(r)?r:[])}catch{return new Set}}function A(d,s){try{localStorage.setItem(d,JSON.stringify(Array.from(s)))}catch{}}function U(d){let s=B(h);s.add(d),A(h,s)}async function N(){let d=[F().catch(function(){return[]}),R().catch(function(){return[]}),D().catch(function(){return[]}),C().catch(function(){return[]})],r=(await Promise.all(d)).flat();r.sort(function(b,e){return(e.ts||0)-(b.ts||0)}),$.items=r,I(),g()&&H()}async function F(){let d=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,i="tok-"+(b.ts||e)+"-"+(b.kind||"x"),a=b.kind||"?",m="info",S=ServerI18n.t("notifTitleFireTokenEvent");if(a==="rotated")m="info",S=ServerI18n.t("notifTitleFireTokenRotated");else if(a==="revoked")m="warn",S=ServerI18n.t("notifTitleFireTokenRevoked");else if(a==="toggled"){let k=b.meta&&b.meta.enabled;m=k?"good":"warn",S=ServerI18n.t("notifTitleFireTokenToggled",{state:k?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:i,sev:m,src:"Fire Token",ts:t,title:S,desc:ServerI18n.t("notifDescEventType",{kind:a})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function R(){let d=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,i="flt-"+(b.ts||e)+"-"+(b.action||"x")+"-"+e,a=b.action||"match";return{id:i,sev:a==="drop"?"warn":"info",src:"Moderation",ts:t,title:ServerI18n.t("notifTitleFilterHit",{action:a}),desc:ServerI18n.t("notifDescFilterHit",{rule:b.rule_id||"?",text:(b.text_excerpt||"").slice(0,60)}),raw:b}})}async function D(){let d=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,i=String(b.kind||"?");return{id:"wh-"+(b.ts||e)+"-"+i+"-"+e,sev:i==="unregister"?"warn":"info",src:"Webhooks",ts:t,title:ServerI18n.t("notifTitleWebhookEvent",{kind:i}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:b.actor||"system"})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function C(){let d=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json(),r=Array.isArray(s.events)?s.events:[],b=new Set(["auth","broadcast","system","session","sessions"]);return r.filter(function(e){return b.has(String(e.source||""))}).map(function(e,t){let i=(Number(e.ts)||0)*1e3,a=String(e.kind||"?");return{id:"sys-"+(e.ts||t)+"-"+(e.source||"x")+"-"+a+"-"+t,sev:a==="login_failed"?"warn":"info",src:"System",ts:i,title:ServerI18n.t("notifTitleSystemEvent",{kind:a}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let y="admin-notif-panel",M={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function E(d){let s=M[d];return s?ServerI18n.t(s.key):d}function x(){let d=B(h),s=B(v);return $.items.filter(r=>!d.has(r.id)&&!s.has(r.id))}function I(){let d=document.querySelector("[data-notif-badge]");if(!d)return;let s=x().length;d.textContent=s>99?"99+":String(s),d.hidden=s===0}function H(){let d=document.getElementById(y);if(!d)return;let s=x().slice(0,20),r=s.length?s.map(b=>{let e=M[b.src];return'<li class="admin-notif__item" data-sev="'+u(b.sev)+'"><div class="admin-notif__text">'+u(b.title)+'</div><div class="admin-notif__meta">'+u(E(b.src))+" \xB7 "+u(T(b.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+u(e.hash)+'" data-notif-id="'+u(b.id)+'">'+u(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+u(ServerI18n.t("notifEmpty"))+"</li>";d.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+u(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+u(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+r+"</ul>"}function T(d){if(!d)return"\u2014";let s=(Date.now()-d)/1e3;return s<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(s)}):s<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(s/60)}):s<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(s/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(s/86400)})}function g(){let d=document.getElementById(y);return!!d&&!d.hidden}function c(){let d=document.getElementById(y);d&&(H(),d.hidden=!1,$.refreshTimer||($.refreshTimer=setInterval(N,3e4)))}function l(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&c()}function o(){let d=document.getElementById(y);d&&(d.hidden=!0),$.refreshTimer&&(clearInterval($.refreshTimer),$.refreshTimer=0)}function n(){g()?o():c()}function f(){let d=document.querySelector(".admin-dash-topbar-actions");if(!d||document.getElementById("admin-notif-bell"))return;let s=document.createElement("button");if(s.id="admin-notif-bell",s.type="button",s.className="admin-dash-search is-icon-only admin-notif-bell",s.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),s.title=ServerI18n.t("adminRouteTitle_notifications"),s.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',d.insertBefore(s,d.firstChild),!document.getElementById(y)){let r=document.createElement("div");r.id=y,r.className="admin-notif",r.setAttribute("role","dialog"),r.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),r.hidden=!0,document.body.appendChild(r)}I(),l()}function p(){document.addEventListener("click",d=>{if(d.target.closest("#admin-notif-bell")){d.preventDefault(),n();return}let s=d.target.closest("[data-notif-go]");if(s){U(s.dataset.notifId),o(),location.hash=s.dataset.notifGo,I();return}if(d.target.closest("[data-notif-readall]")){x().forEach(r=>U(r.id)),H(),I();return}g()&&!d.target.closest("#"+y)&&o()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&g()&&o()}),window.addEventListener("hashchange",l),l()}function w(){f(),N()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(f).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),p(),w()})})()});var Zt=ye(()=>{(function(){"use strict";let h="sec-audit-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},u={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},$={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function B(){return`
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
      </div>`}function A(n){if(!n)return"\u2014";try{let f=new Date(Number(n)*1e3),p=String(f.getHours()).padStart(2,"0"),w=String(f.getMinutes()).padStart(2,"0"),d=String(f.getSeconds()).padStart(2,"0");return`${p}:${w}:${d}`}catch{return"\u2014"}}function U(n){let f=String(n.action||n.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(f)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(f)?"warn":"info"}function N(n){return n==="danger"?"var(--hud-crimson, #f87171)":n==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function F(n){return $.filterActor==="all"||String(n.actor||"").toLowerCase()===$.filterActor}function R(n){return $.filterSeverity==="all"||U(n)===$.filterSeverity}function D(){return $.events.filter(function(n){return F(n)&&R(n)})}function C(n){let f=n&&n.meta&&typeof n.meta=="object"?n.meta:{};return f.target||f.keyword||f.fp||f.fingerprint||f.name||f.mode||f.session||f.hook_id||n.target||""}function y(n,f){let p=n!=null,w=f!=null;if(!p&&!w)return"";let d=p?v(JSON.stringify(n)):"",s=w?v(JSON.stringify(f)):"";return p?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${d}</span> \u2192 <span class="admin-audit-diff-a">${s}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${s}</span></span>`}function M(n){let f=n&&n.meta&&typeof n.meta=="object"?n.meta:{},p=[];n.detail&&p.push(`<span>${v(String(n.detail))}</span>`);let w=y(n.before,n.after);w&&p.push(w);let d=Object.assign({},f);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(r){delete d[r]}),Object.keys(d).length&&p.push(`<code class="admin-ui-code admin-audit-meta-extra">${v(JSON.stringify(d))}</code>`),!p.length){let r=u[n.source]&&u[n.source].label||n.source||"system";p.push(`<span>${v(String(r))}</span>`)}return p.join(" ")}function E(n){return n==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":n==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function x(){let n=document.querySelector("[data-audit-rows]");if(!n)return;let f=D();if(!f.length){n.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}n.innerHTML=f.map(function(p){let w=U(p),d=N(w),s=String(p.actor||"system"),r=C(p);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${w}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${v(A(p.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${d};box-shadow:0 0 6px ${d}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${E(s)}">${v(s)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${v(String(p.action||p.kind||"\u2014"))}</span>
              ${r?`<span class="admin-ui-target admin-audit-target">\u2192 ${v(String(r))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${M(p)}</div>
          </div>
        </div>`}).join("")}function I(){let n=document.querySelector("[data-audit-summary]");if(!n)return;let f=D().length,p=$.filterActor==="all"?ServerI18n.t("auditAllRoles"):$.filterActor,w=$.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):$.filterSeverity.toUpperCase();n.textContent=ServerI18n.t("auditSummaryLine",{n:f,actor:p,sev:w})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditActorFilter===$.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditSeverityFilter===$.filterSeverity)})}async function T(){try{let n=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!n.ok)return;let f=await n.json(),p=Array.isArray(f.events)?f.events.slice():[];p.sort(function(w,d){return Number(d.ts||0)-Number(w.ts||0)}),$.events=p,H(),x(),I()}catch{}}function g(){let n=D();if(!n.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let f=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),p=URL.createObjectURL(f),w=document.createElement("a");w.href=p,w.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(w),w.click(),document.body.removeChild(w),setTimeout(function(){URL.revokeObjectURL(p)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:n.length}),!0)}function c(){let n=document.getElementById(h);n&&n.addEventListener("click",function(f){let p=f.target.closest("[data-audit-actor-filter]");if(p){$.filterActor=p.dataset.auditActorFilter||"all",H(),x(),I();return}let w=f.target.closest("[data-audit-severity-filter]");if(w){let d=w.dataset.auditSeverityFilter||"all";$.filterSeverity=$.filterSeverity===d?"all":d,H(),x(),I();return}if(f.target.closest("[data-audit-export]")){g();return}f.target.closest("[data-audit-refresh]")&&T()})}function l(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(T(),$.refreshTimer||($.refreshTimer=setInterval(T,3e4))):$.refreshTimer&&(clearInterval($.refreshTimer),$.refreshTimer=0)}function o(){let n=document.getElementById("settings-grid");!n||document.getElementById(h)||(n.insertAdjacentHTML("beforeend",B()),c(),T(),l(),window.addEventListener("hashchange",l))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&o()})})()});var en=ye(()=>{(function(){"use strict";let h="sec-audience-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},u=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],$=20,B={records:[],filter:"all",shown:$,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function A(t){if(!t)return u[0];let i=0;for(let a=0;a<t.length;a++)i=i*31+t.charCodeAt(a)>>>0;return u[i%u.length]}function U(t){if(!t)return"\u2014";let i=typeof t=="number"?t*1e3:new Date(t).getTime();if(!i)return"\u2014";let a=Math.max(0,(Date.now()-i)/1e3);return a<60?Math.floor(a)+"s":a<3600?Math.floor(a/60)+"m":a<86400?Math.floor(a/3600)+"h":Math.floor(a/86400)+"d"}function N(t){return t==="blocked"||t==="high"?"is-danger":t==="mid"?"is-warn":"is-success"}function F(){return`
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
      </div>`}function R(){let t=B.search.trim().toLowerCase(),i=B.records.slice();return t&&(i=i.filter(function(a){return String(a.nickname||"").toLowerCase().indexOf(t)!==-1||String(a.hash||"").toLowerCase().indexOf(t)!==-1})),i.sort(function(a,m){return B.sort==="last_seen"?(Number(m.last_seen)||0)-(Number(a.last_seen)||0):(Number(m.msgs)||0)-(Number(a.msgs)||0)}),B.filter==="all"?i:B.filter==="flagged"?i.filter(function(a){return a.state==="flagged"||a.state==="blocked"}):B.filter==="extension"?i.filter(function(a){return a.fingerprint&&(a.fingerprint.indexOf("slido")===0||a.fingerprint.indexOf("ext_")===0)}):i}function D(){let t=document.querySelector("[data-aud-stats]");if(!t)return;let i=B.records,a=i.length,m=i.filter(function(O){return O.state==="flagged"}).length,S=i.filter(function(O){return O.state==="blocked"}).length,k=i.reduce(function(O,K){return O+(Number(K.msgs)||0)},0),L=i.filter(function(O){let K=O.last_seen;if(!K)return!1;let _=typeof K=="number"?K*1e3:new Date(K).getTime();return(Date.now()-_)/1e3<300}).length;t.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${a}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${L}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${k}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${m}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${S}</div></div>`}function C(){let t=document.querySelector("[data-aud-filters]");if(!t)return;let i=B.records.length,a=B.records.filter(function(m){return m.state==="flagged"||m.state==="blocked"}).length;t.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:i})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${B.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:a})}</button>`}let y="__anon__";function M(t){let i=(t.nickname||"").trim();return!i||i==="\u533F\u540D"}function E(t){let i=t.hash||t.fingerprint||"";return i?i.length>9?i.slice(0,4)+"\u2026"+i.slice(-4):i:"\u2014"}function x(){let t=[],i=[];return R().forEach(function(a){M(a)?i.push(a):t.push(a)}),i.length&&t.push({_anonGroup:!0,_count:i.length,fingerprint:y,msgs:i.reduce(function(a,m){return a+(Number(m.msgs)||0)},0),blocked:i.reduce(function(a,m){return a+(Number(m.blocked)||0)},0),last_seen:Math.max.apply(null,i.map(function(a){return a.last_seen||0})),state:i.some(function(a){return a.state==="blocked"})?"blocked":"active"}),t}function I(){let t=document.querySelector("[data-aud-list]"),i=document.querySelector("[data-aud-summary]");if(!t)return;let a=x(),m=Math.min(a.length,B.shown);if(i&&(i.textContent=ServerI18n.t("audienceShownOfTotal",{n:m,total:a.length})),a.length===0){t.innerHTML="";let O=window.AdminEmpty.render("audience");O.dataset.emptyKind="audience",t.appendChild(O);return}let S=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,k=a.slice(0,m).map(function(O){let K=O.fingerprint||"\u2014",_=O.state==="blocked",P=O._anonGroup?ServerI18n.t("audienceAnonymous"):(O.nickname||"").trim(),j=O._anonGroup?"?":P.slice(0,1),z=A(K);return`
        <div class="admin-aud-row${B.selectedFp===K?" is-selected":""}" data-aud-row data-aud-fp="${v(K)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${z}">${v(j)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${v(P)}</span>
            ${O._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:O._count})}</span>`:""}
            ${_&&!O._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${O._anonGroup?"\u2014":v(E(O))}</span>
          <span class="col col-msgs">${Number(O.msgs)||0}</span>
          <span class="col col-blocked">${Number(O.blocked)||0}</span>
          <span class="col col-seen">${v(U(O.last_seen))}</span>
          <span class="col col-actions">
            ${O._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${v(K)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),L=a.length>m?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";t.innerHTML=S+k+L}function H(t){return t&&B.records.find(function(i){return i.fingerprint===t})||null}function T(t){if(!t)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let i=[],a=Number(t.msgs)||0,m=t.fingerprint||"";t.state==="blocked"&&i.push(ServerI18n.t("audienceRuleBlocked")),t.state==="flagged"&&i.push(ServerI18n.t("audienceRuleFlagged")),a>=25?i.push(ServerI18n.t("audienceRuleMsgOver",{n:a})):a>=15&&i.push(ServerI18n.t("audienceRuleMsgNear",{n:a}));let S=B.records.filter(function(K){return K.ip&&t.ip&&K.ip===t.ip}).length;S>=3&&i.push(ServerI18n.t("audienceRuleSameIp",{n:S})),(m.indexOf("slido")===0||m.indexOf("ext_")===0)&&i.push(ServerI18n.t("audienceRuleBridge")),(t.nickname==="\u533F\u540D"||!t.nickname)&&i.push(ServerI18n.t("audienceRuleNoNick"));let k="normal",L="var(--hud-lime)",O="NORMAL";return t.state==="blocked"?(k="blocked",L="var(--hud-crimson)",O="BLOCKED"):t.state==="flagged"||a>=25?(k="high",L="var(--hud-crimson)",O="HIGH RISK"):(a>=15||S>=3)&&(k="mid",L="var(--hud-amber)",O="MID"),{level:k,color:L,label:O,rules:i}}async function g(t){B.detailLoading=!0;try{let i=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!i.ok){B.detailMessages=[];return}let a=await i.json(),m=Array.isArray(a.records)?a.records:[],S=Date.now()-300*1e3;B.detailMessages=m.filter(function(k){return(k.fingerprint||"")!==t?!1:(k.timestamp?new Date(k.timestamp).getTime():0)>=S}).slice(0,8)}catch{B.detailMessages=[]}finally{B.detailLoading=!1}}function c(){let t=document.querySelector("[data-aud-detail]");if(!t)return;let i=B.selectedFp;if(!i){t.hidden=!0,t.innerHTML="";return}let a=H(i);if(!a){B.selectedFp=null,t.hidden=!0;return}t.hidden=!1;let m=T(a);t.dataset.riskLevel=m.level;let S=A(i),k=!a.nickname||a.nickname==="\u533F\u540D",L=k?ServerI18n.t("audienceAnonymous"):a.nickname,O=k?"?":L.slice(0,1),K="fp:"+(i||"").slice(0,8),_=m.rules.length?m.rules.map(function(j){return"<li>"+v(j)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",P="";B.detailLoading?P='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":B.detailMessages.length===0?P='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":P=B.detailMessages.map(function(j){let z=j.muted?"MASKED":j.banned?"BLOCKED":"SHOWN",X=j.muted?"var(--hud-amber)":j.banned?"var(--hud-crimson)":"var(--hud-lime)",Z=j.timestamp?new Date(j.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+v(Z)+'</span><span class="m">'+v(j.text||"")+'</span><span class="s" style="color:'+X+'">'+z+"</span></div>"}).join(""),t.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+N(m.level)+'">'+v(m.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+S+'">'+v(O)+'</span><div><div class="nick">'+v(L)+'</div><div class="fp">'+v(K)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+m.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:m.rules.length})+"</div><ul>"+_+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+P+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+v(i)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+v(i)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(a.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+v(i)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+v(i)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+v(i)+'" data-aud-flagged="'+(a.is_flagged?"true":"false")+'">'+(a.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+v(i)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function l(t){B.selectedFp=t,B.detailMessages=[],c(),g(t).then(c)}async function o(){try{let t=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!t.ok)return;let i=await t.json();B.records=Array.isArray(i.entries)?i.entries:[],B.serverStats=i&&i.stats||null,D(),C(),I(),B.selectedFp&&c()}catch{}}async function n(t,i,a){if(t)try{let m=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,flagged:!!i,note:a||""})});if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(i?ServerI18n.t("audienceToastFlagged",{fp:t.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:t.slice(0,8)}),!0),o()}catch(m){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:m.message||""}),!1)}}async function f(t,i){if(!t||t==="\u2014")return;let a=i??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:t.slice(0,8)}),"")||"");if(a!==null)try{let m=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,reason:a})});if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:t.slice(0,8)}),!0),o()}catch(m){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:m.message||""}),!1)}}async function p(t){if(!(!t||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+v(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let a=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:a.message||""}),!1)}}async function w(t){if(!(!t||t==="\u2014"))try{let i=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:t,action:"mask",priority:0,enabled:!0})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:t.slice(0,8)}),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:i.message||""}),!1)}}async function d(t){if(!(!t||t==="\u2014"))try{let i=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);let a=await i.json(),S=(Array.isArray(a.rules)?a.rules:[]).filter(function(L){return L&&L.type==="fingerprint"&&L.pattern===t});if(S.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let k=0;for(let L of S)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:L.rule_id||L.id})}).catch(function(){return{ok:!1}})).ok&&(k+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:k,fp:t.slice(0,8)}),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:i.message||""}),!1)}}async function s(t){if(!(!t||t==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+v(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let a=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:t})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:t.slice(0,8)}),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:a.message||""}),!1)}}function r(){let t=document.getElementById(h);t&&(t.addEventListener("input",function(i){let a=i.target.closest("[data-aud-search]");a&&(B.search=a.value||"",B.shown=$,I())}),t.addEventListener("change",function(i){let a=i.target.closest("[data-aud-sort]");a&&(B.sort=a.value,I())}),t.addEventListener("click",function(i){let a=i.target.closest("[data-aud-filter]");if(a){B.filter=a.dataset.audFilter,B.shown=$,C(),I();return}let m=i.target.closest("[data-aud-action='ban']");if(m){i.stopPropagation(),s(m.dataset.audFp);return}if(i.target.closest("[data-aud-action='refresh']")){o();return}if(i.target.closest("[data-aud-action='more']")){B.shown+=$,I();return}if(i.target.closest("[data-aud-action='close-detail']")){B.selectedFp=null,c();return}let O=i.target.closest("[data-aud-action='detail-ban']");if(O){s(O.dataset.audFp);return}let K=i.target.closest("[data-aud-action='detail-mask']");if(K){w(K.dataset.audFp);return}let _=i.target.closest("[data-aud-action='detail-safe']");if(_){d(_.dataset.audFp);return}let P=i.target.closest("[data-aud-action='flag']");if(P){i.stopPropagation(),n(P.dataset.audFp,P.dataset.audFlagged!=="true");return}let j=i.target.closest("[data-aud-action='kick']");if(j){i.stopPropagation(),f(j.dataset.audFp);return}let z=i.target.closest("[data-aud-action='unkick']");if(z){i.stopPropagation(),p(z.dataset.audFp);return}let X=i.target.closest("[data-aud-row]");if(!(X&&X.dataset.audFp===y)&&X&&!i.target.closest("button")){l(X.dataset.audFp);return}}))}function b(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),B.refreshTimer||(B.refreshTimer=setInterval(o,15e3))):B.refreshTimer&&(clearInterval(B.refreshTimer),B.refreshTimer=0)}function e(){let t=document.getElementById("settings-grid");!t||document.getElementById(h)||(t.insertAdjacentHTML("beforeend",F()),r(),o(),b(),window.addEventListener("hashchange",b))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&e()})})()});var tn=ye(()=>{(function(){"use strict";let h=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],v={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},u=2500,$=0,B=0,A=null;function U(){if(A)return A;let C=document.createElement("div");return C.className="admin-konami-hud",C.setAttribute("aria-hidden","true"),C.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(C),A=C,C}function N(){if($===0){A&&A.classList.remove("is-on");return}let C=U();C.classList.add("is-on");let y=C.querySelector(".admin-konami-hud-keys");y&&(y.innerHTML=h.map((E,x)=>`<span class="admin-konami-hud-key ${x<$?"is-filled":""}">${v[E]}</span>`).join(""));let M=C.querySelector(".admin-konami-hud-progress");if(M){let E=Math.round($/h.length*100);M.style.width=E+"%"}}function F(C){$=0,B&&(clearTimeout(B),B=0),C||N()}function R(){B&&clearTimeout(B),B=setTimeout(()=>F(),u)}async function D(){try{let C=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(C){console.warn("[konami] trigger failed:",C&&C.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",C=>{let y=C.target;if(y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable))return;let M=h[$];if(!(C.key===M||M==="b"&&C.key.toLowerCase()==="b"||M==="a"&&C.key.toLowerCase()==="a")){$=C.key===h[0]?1:0,N(),$>0?R():B&&(clearTimeout(B),B=0);return}if($++,N(),$>=h.length){F(!0),D();return}R()}),window.AdminKonami={trigger:D}})()});var nn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function v(w){return w==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:w==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:w==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function u(){let w=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,d=w?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${w?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${h(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${d}`:""}
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
    `}var $=null,B=[];function A(w,d){var s=document.getElementById("adminFontEmptyStateHost");if(!s)return;if((w||[]).some(e=>e.type==="uploaded")){s.innerHTML="";return}s.innerHTML="";var b=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:d?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});b.dataset.emptyKind="fonts",s.appendChild(b)}function U(w,d){let s=w.weight||"\u2014",r=w.sizeLabel||"\u2014",b=w.foundry||(w.type==="system"?"System":w.type==="default"?"Google / Noto":"Uploaded"),e=w.format||"\u2014",t=w.status||w.type,i=`font-family: "${h(w.name)}", sans-serif;`,a=v(t),m=[];if(d){if(t!=="default"&&m.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${h(w.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),t!=="default"){let S=t==="enabled"||t==="system",k=S?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");m.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${h(w.name)}" data-enabled="${S?"true":"false"}">${k}</button>`)}w.type==="uploaded"&&(m.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${h(w.name)}" title="${h(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),m.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${h(w.name)}">${h(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${h(w.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${i}" class="truncate">${h(w.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(m.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${m.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${h(b)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${h(s)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(r)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${h(e)}</span><div style="text-align:right">${a}</div></div>`}let N=null,F={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function R(){if(N)return N;try{let w=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return w.ok?(N=(await w.json()).presets||{},N):{}}catch{return{}}}function D(w){return!w||!Number.isFinite(w)?"\u2014":w<1024?w+" B":w<1024*1024?(w/1024).toFixed(1)+" KB":(w/(1024*1024)).toFixed(2)+" MB"}async function C(w){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let d=await R();if(!Object.keys(d).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let s=new Set(["cjk_common","latin"]),r="",b=document.createElement("div");b.className="admin-font-subset-modal-body";let e=()=>{let a=Object.keys(d).map(S=>{let k=F[S]||{label:S,glyphs:"\u2014",estSize:"\u2014"},L=k.labelKey?ServerI18n.t(k.labelKey):k.label,O=s.has(S);return`
          <label class="admin-font-subset-chip${O?" is-active":""}" data-subset-preset="${S}">
            <span class="admin-font-subset-chip-check">${O?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${h(L)}</span>
            <span class="admin-font-subset-chip-range">${h(d[S])}</span>
            <span class="admin-font-subset-chip-meta">${k.glyphs} glyphs \xB7 ${k.estSize}</span>
          </label>`}).join("");b.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${h(w)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${a}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${h(r)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,b.querySelectorAll("[data-subset-preset]").forEach(S=>{S.addEventListener("click",k=>{k.preventDefault();let L=S.dataset.subsetPreset;s.has(L)?s.delete(L):s.add(L),e()})});let m=b.querySelector("[data-subset-custom]");m&&m.addEventListener("input",()=>{r=m.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:b,width:540}))return;let i=[];if(s.forEach(a=>{d[a]&&i.push(d[a])}),r.trim()&&i.push(r.trim()),!i.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await y(w,i.join(","))}async function y(w,d){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:w}),!0);let s=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(w)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:d})}),r=await s.json().catch(()=>({}));if(s.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!s.ok){window.showToast?.(r.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:s.status}),!1);return}let b=r.saved_bytes||0,e=Math.round((r.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:w,before:D(r.original_size),after:D(r.new_size),pct:e}),!0),x()}catch(s){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:s.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function M(w){try{let d=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:w})});if(!d.ok)throw new Error("HTTP "+d.status);$=w,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:w}),!0),x()}catch(d){console.error("[admin-fonts] set default failed:",d),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function E(w,d){try{let s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!d})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast(ServerI18n.t(d?"fontsToggleOffToast":"fontsToggleOnToast",{name:w}),!0),x()}catch(s){console.error("[admin-fonts] toggle failed:",s),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function x(){var w=document.getElementById("adminFontList");if(!w)return;let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var s=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!s.ok)throw new Error("HTTP "+s.status);var r=await s.json(),b=r.fonts||[];if(B=b,window.AdminTabs?.setTabCount?.("assets","fonts",b.length||""),A(b,d),b.length===0){w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,c(b);return}w.innerHTML=b.map(e=>U(e,d)).join(""),c(b),l()}catch(e){console.error("[admin-fonts] fetch failed:",e),w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,A([],d)}}async function I(w){try{let d=await w.slice(0,4).arrayBuffer(),s=new Uint8Array(d);return s[0]===0&&s[1]===1&&s[2]===0&&s[3]===0?"TTF":s[0]===79&&s[1]===84&&s[2]===84&&s[3]===79?"OTF":s[0]===119&&s[1]===79&&s[2]===70&&s[3]===50?"WOFF2":s[0]===116&&s[1]===114&&s[2]===117&&s[3]===101?"TTF":s[0]===116&&s[1]===116&&s[2]===99&&s[3]===102?"TTC":null}catch{return null}}function H(w,d){let s=document.getElementById("adminFontDropStatus");if(s){if(!w){s.textContent="",s.hidden=!0,s.classList.remove("is-good","is-bad");return}s.hidden=!1,s.textContent=w,s.classList.toggle("is-good",d==="good"),s.classList.toggle("is-bad",d==="bad")}}function T(w){let d=document.getElementById("adminFontUploadError");if(!d)return;if(!w){d.hidden=!0,d.innerHTML="";return}d.hidden=!1,d.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${h(w)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let s=d.querySelector("[data-font-error-retry]");s&&s.addEventListener("click",function(){let r=document.getElementById("adminFontFileInput");r&&r.click()})}async function g(w){if(!w)return;T("");let d=w.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(d)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),T(ServerI18n.t("fontsExtNotSupportedFull"));return}if(w.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),T(ServerI18n.t("fontsFileTooLargeFull"));return}let s=await I(w);if(!s){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),T(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:s,size:(w.size/1024).toFixed(1)}),"good");try{var r=new FormData;r.append("fontfile",w);var b=await window.csrfFetch("/admin/upload_font",{method:"POST",body:r}),e=await b.json();b.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:w.name}),"good"),T(""),await x()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),H(e.error||ServerI18n.t("uploadFailed"),"bad"),T(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(t){console.error("[admin-fonts] upload error:",t),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),T(ServerI18n.t("fontsNetworkDisconnected"))}}function c(w){let d=document.getElementById("fontsTotalSize");d&&(d.textContent=ServerI18n.t("fontsTotalCount",{n:w.length}))}function l(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(w=>{w.addEventListener("click",d=>{if(d.target.closest(".admin-font-delete-btn"))return;let s=w.dataset.font,r=document.getElementById("fontsPreviewFamily"),b=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),t=document.getElementById("fontsPreviewCJK");r&&(r.textContent=s);let i=`"${s}", sans-serif`;b&&(b.style.fontFamily=i),e&&(e.style.fontFamily=i),t&&(t.style.fontFamily=i)})})}async function o(){var w=document.getElementById("adminFontFileInput");if(w){var d=w.files&&w.files[0];if(!d){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await g(d),w.value=""}}function n(){let w=document.getElementById("adminFontDrop"),d=document.getElementById("adminFontFileInput");!w||!d||(w.addEventListener("click",s=>{s.target!==d&&d.click()}),w.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),d.click())}),["dragenter","dragover"].forEach(s=>{w.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),w.classList.add("is-drag")})}),["dragleave","drop"].forEach(s=>{w.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),w.classList.remove("is-drag")})}),w.addEventListener("drop",async s=>{let r=s.dataTransfer&&s.dataTransfer.files;r&&r[0]&&await g(r[0])}))}async function f(w){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",w),confirmLabel:ServerI18n.t("deleteBtn")}))try{var s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w),{method:"DELETE"}),r=await s.json();s.ok?(window.showToast(r.message||ServerI18n.t("fontDeleteFallback")),await x()):window.showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(b){console.error("[admin-fonts] delete error:",b),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function p(){var w=document.getElementById("settings-grid");if(w){w.insertAdjacentHTML("beforeend",u());var d=document.getElementById("adminFontFileInput");d&&d.addEventListener("change",o),n();var s=document.getElementById("adminFontList");s&&s.addEventListener("click",function(r){var b=r.target.closest(".admin-font-delete-btn");if(b){r.stopPropagation(),f(b.dataset.name);return}var e=r.target.closest(".admin-font-default-btn");if(e){r.stopPropagation(),M(e.dataset.name);return}var t=r.target.closest(".admin-font-toggle-btn");if(t){r.stopPropagation();let a=t.dataset.enabled==="true";E(t.dataset.name,a);return}var i=r.target.closest(".admin-font-subset-btn");i&&(r.stopPropagation(),C(i.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(r=>r.ok?r.json():null).then(r=>{r&&Array.isArray(r.FontFamily)&&($=r.FontFamily[3]||null)}).catch(()=>{}).finally(x)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var w=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&p()});w.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&p()}})})()});var an=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let v="sec-scheduler",u=5e3,$=null,B=null;function A(p,w,d,s){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${p}">
        <input type="text" placeholder="${F(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${F(w)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${F(d||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${s||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function U(p){var w=p==="active"?"is-success":p==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+w+'" title="'+F(p)+'"></span>'}function N(p){let w=p.state==="paused",d=p.repeat_count===void 0?"\u2014":p.repeat_count===-1?"\u221E":String(p.repeat_count),s=p.repeat_count>0&&typeof p.remaining=="number"?String(p.repeat_count-p.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${F(p.id)}">
        ${U(p.state)}
        <div>
          <div class="admin-scheduler-job-title">#${h(p.id)}</div>
          <div class="admin-scheduler-job-meta">${h(ServerI18n.t("schedulerMessages"))} ${p.messages?p.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${p.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${h(s)}</span>
        <span class="admin-scheduler-job-val">${h(d)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${w?"is-active":"is-warn"}"
            data-job-id="${F(p.id)}" data-action="${w?"resume":"pause"}">
            ${h(ServerI18n.t(w?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${F(p.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function F(p){return h(p)}function R(){let p=document.querySelectorAll("#schedulerMessages [data-msg-index]"),w=[];return p.forEach(function(d){let s=d.querySelector(".scheduler-msg-text").value.trim(),r=d.querySelector(".scheduler-msg-color").value,b=parseInt(d.querySelector(".scheduler-msg-size").value,10)||48;s&&w.push({text:s,color:r,size:b})}),w}function D(p,w,d){let s=document.getElementById("schedulerMessages");if(!s)return;let r=s.children.length;s.insertAdjacentHTML("beforeend",A(r,p||"",w||"#ffffff",d||48))}function C(p){let w=p.closest("[data-msg-index]");w&&w.remove();let d=document.getElementById("schedulerMessages");d&&d.querySelectorAll("[data-msg-index]").forEach(function(s,r){s.dataset.msgIndex=r})}async function y(){let p=R();if(p.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let w=parseInt(document.getElementById("schedulerInterval").value,10);if(!w||w<1||w>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let d=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(d)||d<-1||d>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let s=document.getElementById("schedulerCreateBtn");s&&(s.disabled=!0);try{let r=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:p,interval_sec:w,repeat_count:d})}),b=await r.json();r.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await c()):showToast(b.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(r){console.error("Scheduler create error:",r),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{s&&(s.disabled=!1)}}function M(p){return"msg"}function E(p){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[p]||"\u25C8"}function x(p){return p.next_run_at?new Date(p.next_run_at*1e3).getHours():new Date().getHours()}function I(p){if(p.next_run_at){let w=new Date(p.next_run_at*1e3);return String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")}return"--:--"}function H(p){let w=p.id||"job",d=Array.isArray(p.messages)?p.messages.length:null;return"Job #"+w+(d!=null?" \xB7 "+d+" messages":"")}function T(p){let w=document.querySelector("[data-sch-timeline]");if(!w)return;let d=[],s=new Date().getHours();for(let b=0;b<24;b++){let e=b>=Math.max(0,s-1)&&b<=Math.min(23,s+2);d.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(b).padStart(2,"0")+"</div>")}let r=(p||[]).map(function(b){let e=M(b),t=E(e),i=b.state!=="paused";return'<div class="admin-sch-timeline-row'+(i?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+h(I(b))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+t+'</span><span class="admin-sch-evt-desc">'+h(H(b))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(i?" is-on":"")+'">'+ServerI18n.t(i?"uiOn":"uiOff")+"</span></div></div>"}).join("");w.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+d.join("")+"</div></div>"+(r||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+h(ServerI18n.t("noActiveJobs"))+"</div>"))}function g(p){let w=document.querySelector("[data-sch-calendar]");if(!w)return;let d=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],s=new Date,r=(s.getDay()+6)%7,b=new Date(s);b.setDate(s.getDate()-r);let e=d.map(function(i,a){let m=new Date(b);return m.setDate(b.getDate()+a),'<div class="admin-sch-calendar-day-head'+(a===r?" is-today":"")+'">'+h(i)+'<span class="date">'+m.getDate()+"</span></div>"}).join(""),t=[0,1,2,3,4,5,6].map(function(i){return'<div class="admin-sch-calendar-cell">'+(i===r?(p||[]).slice(0,5).map(function(m){let S=M(m),k=E(S);return'<span class="admin-sch-cal-chip is-'+S+'">'+h(I(m))+" "+k+"</span>"}).join(""):"")+"</div>"}).join("");w.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+t+"</div>"}async function c(){let p=document.getElementById("schedulerJobsList"),w=document.getElementById("schedulerJobsCount");if(p)try{let d=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!d.ok){p.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}let s=await d.json();if(!Array.isArray(s.jobs)){p.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}w&&(w.textContent=ServerI18n.t("schItemCount",{n:s.jobs.length})),T(s.jobs),g(s.jobs);let r=document.querySelector("[data-sch-meta]");if(r){let b=new Date().toISOString().slice(0,10);r.textContent=ServerI18n.t("schTodayMeta",{date:b,n:s.jobs.length})}if(s.jobs.length===0){p.innerHTML="";let b=window.AdminEmpty.render("scheduler");b.dataset.emptyKind="scheduler",p.appendChild(b);return}p.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+h(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+h(ServerI18n.t("schColInterval"))+"</span><span>"+h(ServerI18n.t("schColSent"))+"</span><span>"+h(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+s.jobs.map(N).join("")}catch(d){console.error("Scheduler fetch error:",d),p.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadJobsError"))+"</div>"}}async function l(p,w){try{let d=await csrfFetch("/admin/scheduler/"+encodeURIComponent(w),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:p})}),s=await d.json();d.ok?(showToast(w==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await c()):showToast(s.error||ServerI18n.t("actionFailed"),!1)}catch(d){console.error("Scheduler toggle error:",d),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(p){try{let w=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:p})}),d=await w.json();w.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await c()):showToast(d.error||ServerI18n.t("cancelFailed"),!1)}catch(w){console.error("Scheduler cancel error:",w),showToast(ServerI18n.t("cancelFailed"),!1)}}function n(){let p=document.getElementById("settings-grid");if(!p)return;p.insertAdjacentHTML("beforeend",`
      <details id="${v}" class="admin-dsp2-fold lg:col-span-2">
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
    `);let w=document.querySelectorAll("[data-sch-view]");w.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.schView;w.forEach(m=>{m.classList.toggle("is-active",m===e),m.setAttribute("aria-selected",m===e?"true":"false")});let i=document.querySelector("[data-sch-timeline]"),a=document.querySelector("[data-sch-calendar]");i&&(i.hidden=t!=="timeline"),a&&(a.hidden=t!=="calendar")})}),D("","#ffffff",48);let d=document.getElementById("schedulerMessages");d&&d.addEventListener("click",function(e){let t=e.target.closest(".scheduler-remove-msg");t&&C(t)});let s=document.getElementById("schedulerAddMsg");s&&s.addEventListener("click",function(){D("","#ffffff",48)});let r=document.getElementById("schedulerCreateBtn");r&&r.addEventListener("click",y);let b=document.getElementById("schedulerJobsList");b&&b.addEventListener("click",function(e){let t=e.target.closest(".scheduler-job-toggle");if(t){l(t.dataset.jobId,t.dataset.action);return}let i=e.target.closest(".scheduler-job-cancel");i&&o(i.dataset.jobId)}),$&&(clearInterval($),$=null),B||(B=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(v)},intervalMs:u,tick:c}),window.addEventListener("beforeunload",function(){B&&(B(),B=null)}))}function f(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let p=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(v)&&!p){p=!0;try{n()}finally{p=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(v)&&n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var sn=ye(()=>{(function(){"use strict";let h="admin-security-v2-page";var v=window.AdminUtils.escapeHtml;let u=null,$=!1,B=!1,A=0;function U(){let e=t=>ServerI18n.t(t);return`
        <div id="${h}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}function N(e){if(!e)return 0;let t=0;e.length>=8&&t++,e.length>=12&&t++;let i=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return i>=2&&t++,i>=3&&t++,Math.min(4,t)}function F(e){let t=document.getElementById("sec2-pw-meter"),i=document.getElementById("sec2-pw-label");if(!t||!i)return;let a=N(e),m=[0,25,50,75,100],S=["","is-bad","is-warn","is-warn","is-good"],k=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];t.style.width=m[a]+"%",t.className=S[a],i.textContent=k[a]}async function R(e){e.preventDefault();let t=document.getElementById("sec2-pw-current").value,i=document.getElementById("sec2-pw-new").value,a=document.getElementById("sec2-pw-confirm").value;if(!t||!i||!a){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(i.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(i!==a){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let m=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:t,new_password:i,confirm_password:a})}),S=await m.json().catch(()=>({}));m.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),F(""),S.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(S.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(m){console.error("Password change error:",m),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function D(){let e=++A,t=document.getElementById("sec2-wsa-status");B=!0,C(!0),t.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let i=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!i.ok)throw new Error(i.status);let a=await i.json();if(e!==A)return!1;u={require_token:!!a.require_token,token:a.token||""},document.getElementById("sec2-wsa-toggle").checked=!!a.require_token,document.getElementById("sec2-wsa-token").value=a.token||"",t.textContent=a.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(a.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,E();let m=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=m?new Date(parseInt(m,10)).toLocaleString():"\u2014",!0}catch{return e!==A||(u=null,C(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===A&&(B=!1,C($||!u),$||E())}}function C(e){["toggle","token","save","rotate","copy","reveal"].forEach(t=>{document.getElementById("sec2-wsa-"+t).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function y(){return $||B||!u?!1:($=!0,++A,C(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function M(){if($=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,C(B||!u),u&&!B){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(u.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(u.require_token?"is-active":""),E()}}function E(){if($||B||!u)return;document.getElementById("sec2-wsa-disabled-warning").hidden=u.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==u.require_token||document.getElementById("sec2-wsa-token").value.trim()!==u.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function x(e){return String(e||"").split(/\n+/).map(t=>t.trim()).filter(Boolean)}function I(e){return String(e||"").split(",").map(t=>t.trim().toUpperCase()).filter(Boolean)}function H(e,t){let i=document.getElementById(e);i&&(i.textContent=t==null||t===""?"\u2014":String(t))}async function T(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),t=await e.json().catch(()=>({}));if(!e.ok)throw new Error(t.error||e.status);let i=t.ip_allowlist||{},a=t.cors||{},m=t.tls||{},S=!!i.enabled,k=Array.isArray(i.entries)?i.entries:[],L=document.getElementById("sec2-ip-dot"),O=document.getElementById("sec2-ip-status-chip"),K=document.getElementById("sec2-ip-toggle"),_=document.getElementById("sec2-ip-entries");L&&(L.classList.toggle("is-lime",S),L.classList.toggle("is-amber",!S)),O&&(O.textContent=S?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),O.className="admin-ui-chip admin-sec-status-chip "+(S?"is-active":"is-warn")),K&&(K.checked=S),_&&(_.value=k.join(`
`)),H("sec2-ip-current",i.current_ip||"\u2014"),H("sec2-ip-status-line",S?ServerI18n.t("security2IpStatusEnabled",{n:k.length}):ServerI18n.t("security2IpStatusDisabled"));let P=Array.isArray(a.origins)?a.origins:["*"],j=Array.isArray(a.methods)?a.methods:[],z=document.getElementById("sec2-cors-origins"),X=document.getElementById("sec2-cors-credentials"),Z=document.getElementById("sec2-cors-methods"),V=document.getElementById("sec2-cors-cred-dot");z&&(z.value=P.join(`
`)),X&&(X.checked=!!a.supports_credentials),Z&&(Z.value=j.join(", ")),V&&(V.classList.toggle("is-lime",!a.supports_credentials),V.classList.toggle("is-amber",!!a.supports_credentials)),H("sec2-cors-origins-line",P.join(", ")),H("sec2-cors-credentials-line",a.supports_credentials?"true":"false"),H("sec2-cors-methods-line",j.join(", "));let ee=m.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:m.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",ee)}catch(e){console.error("Security settings load error:",e);let t=document.getElementById("sec2-ip-status-chip");t&&(t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function g(e){let t={};if(e==="ip")t.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:x(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let i=x(document.getElementById("sec2-cors-origins")?.value||"");t.cors={origins:i.length?i:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:I(document.getElementById("sec2-cors-methods")?.value||"")}}try{let i=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(a.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await T()}catch(i){console.error("Security settings save error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function c(){if($||B||!u)return;let e=document.getElementById("sec2-wsa-toggle").checked,t=document.getElementById("sec2-wsa-token").value.trim();if(e&&!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(y())try{let i=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:t})}),a=await i.json().catch(()=>({}));i.ok?await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(a.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{M()}}async function l(){if(!($||B||!u||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&y())try{let t=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),i=await t.json().catch(()=>({}));if(t.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await D()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(i.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{M()}}function o(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function n(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let t=e.type==="text",i=document.getElementById("sec2-wsa-reveal");i.setAttribute("aria-pressed",String(t)),i.textContent=ServerI18n.t(t?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),i.setAttribute("aria-label",i.textContent)}async function f(e){if(e==="reset-ws"&&($||B||!u))return;let t={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:a=>ServerI18n.t("security2ToastApiTokensRevoked",{n:a.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!t||!await window.HudConfirm?.open({icon:"\u26A0",title:t.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:t.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:t.severity||"warn",body:t.confirm,confirmLabel:t.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!y()))try{let a=await window.csrfFetch(t.url,{method:"POST"}),m=await a.json().catch(()=>({}));if(!a.ok){window.showToast&&showToast(m.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await D())return}window.showToast&&showToast(t.ok(m),!0)}catch(a){console.error("Security danger action error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&M()}}function p(){let e=document.getElementById("sec2-session-self-line");if(e){let a=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),m=navigator.platform||navigator.userAgentData?.platform||"",S=a?a[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:S,platform:m})}let t=document.getElementById("sec2-tls-dot"),i=document.getElementById("sec2-tls-status");if(t&&i){let a=location.protocol==="https:";t.classList.add(a?"is-lime":"is-crimson"),i.textContent=a?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function w(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",R);let t=document.getElementById("sec2-pw-new");t&&t.addEventListener("input",i=>F(i.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",c),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",l),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",n),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",E),document.getElementById("sec2-wsa-token")?.addEventListener("input",E),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>g("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>g("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(i=>{i.addEventListener("click",()=>{let a=document.querySelector(`[data-sec-disclosure="${i.dataset.secDisclose}"]`);a&&(a.hidden=!a.hidden,i.setAttribute("aria-expanded",a.hidden?"false":"true"),a.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(i=>{i.dataset.secBound!=="1"&&(i.dataset.secBound="1",i.addEventListener("click",()=>f(i.dataset.secDanger)))}),p(),D(),T()}function d(){}function s(){let e=document.querySelector(".admin-dash-grid"),t=document.getElementById(h);if(!e||!t)return;let i=e.dataset.activeRoute||"live",a=e.dataset.activeLeaf||i;t.style.display=i==="system"&&a==="security"?"":"none"}function r(){let e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",U()),w(),s())}function b(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function t(){let a=document.querySelector(".admin-dash-grid");!a||e||(e=new MutationObserver(s),e.observe(a,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)?r():void 0,t(),s()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",s),document.addEventListener("admin-panel-rendered",()=>{r(),t(),s()}),t(),r()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})()});var on=ye(()=>{(function(){"use strict";let h="admin-backup-v2-page";var v=window.AdminUtils.escapeHtml;function u(){let r=b=>ServerI18n.t(b);return`
      <div id="${h}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${r("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${r("backupPageNote")}</p>
          <!-- 2026-09-07\uFF1A\u642C\u56DE\u9801\u9996\u88E1\u3002\u9801\u9996\u88AB\u4F75\u9032 topbar \u6642\uFF0Cshell \u7684
               [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB\uFF08\u898B admin.js \u7684
               _dedupSectionTitles\uFF09\uFF0C\u4E0D\u6703\u518D\u8DDF\u8457\u6D88\u5931\u3002 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${r("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${r("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${r("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${r("backupPackContentList")}</span>
            </span>
          </div>
          <label class="admin-ui-group-row" for="bk2-pack-include-credentials">
            <span class="lbl">${r("backupIncludeCredentials")}</span>
            <span class="val">
              <input type="checkbox" class="admin-ui-checkbox" id="bk2-pack-include-credentials" />
            </span>
          </label>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecSettingsSnap")}
              <span class="sub">${r("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${r("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${r("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${r("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${r("backupAssetsExportBtn")}</button>
            </span>
          </div>

        </div>

        <div class="admin-ui-group-label">${r("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecRestoreSettings")}
              <span class="sub">${r("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${r("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${r("backupApplyDisabledTitle")}">${r("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecRestoreFull")}
              <span class="sub">${r("backupFullPackRestoreNote")}</span>
              <span class="sub">${r("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${r("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${r("backupApplyDisabledTitle")}">${r("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecRestoreAssets")}
              <span class="sub">${r("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${r("backupDryRunBtn")}\u2026</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${r("backupApplyDisabledTitle")}">${r("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${r("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecClearHistory")}
              <span class="sub">${r("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${r("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${r("backupClearBtn")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${r("backupSecFactoryReset")}
              <span class="sub">${r("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${r("backupFactoryResetBtn")}\u2026</button>
            </span>
          </div>
        </div>
      </div>`}async function $(){try{let r=await fetch("/get_settings",{credentials:"same-origin"});if(!r.ok)throw new Error(r.status);let b=await r.json(),e=["password","token","secret","hash"],t={};Object.keys(b||{}).forEach(k=>{e.some(L=>k.toLowerCase().includes(L))||(t[k]=b[k])});let i=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),a=URL.createObjectURL(i),m=new Date().toISOString().replace(/[:.]/g,"-"),S=document.createElement("a");S.href=a,S.download="danmu-settings-"+m+".json",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(a),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(r){console.error("Settings snapshot error:",r),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let B=null;function A(){B=null;let r=document.getElementById("bk2-settings-apply");r&&(r.disabled=!0,r.title=ServerI18n.t("backupApplyDisabledTitle"))}async function U(){let r=document.getElementById("bk2-settings-upload"),b=document.getElementById("bk2-settings-diff"),e=document.getElementById("bk2-settings-apply"),t=r&&r.files&&r.files[0];if(!t){A(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let i=await t.text(),a=JSON.parse(i),m=a.settings||a;if(!m||typeof m!="object"||Array.isArray(m))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let S=await fetch("/get_settings",{credentials:"same-origin"}),k=S.ok?await S.json():{},L=[];new Set([...Object.keys(k),...Object.keys(m)]).forEach(K=>{let _=JSON.stringify(k[K]),P=JSON.stringify(m[K]);_!==P&&(_===void 0?L.push("+ "+K+": "+P):P===void 0?L.push("- "+K+": "+_):L.push("~ "+K+": "+_+" \u2192 "+P))}),b.textContent=L.length?L.join(`
`):ServerI18n.t("backupNoDiff"),b.hidden=!1,B=m,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:L.length}),!0)}catch(i){console.error("Dry-run error:",i),A(),b.textContent=ServerI18n.t("backupParseFailedDetail",{msg:i&&i.message?i.message:String(i)}),b.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function N(){let r=document.getElementById("bk2-settings-diff"),b=document.getElementById("bk2-settings-apply");if(!B){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:B})}),i=await t.json().catch(()=>({}));if(!t.ok){r&&(r.hidden=!1,r.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(i.details||i,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}r&&(r.hidden=!1,r.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(i.applied||[]).length+" settings"),B=null,b&&(b.disabled=!0,b.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){r&&(r.hidden=!1,r.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function R(){let r=document.getElementById("bk2-factory-confirm"),b=document.getElementById("bk2-factory-reset");!r||!b||(r.addEventListener("input",()=>{let e=r.value.trim()==="reset";b.classList.toggle("is-ready",e),b.disabled=!e}),b.addEventListener("click",D))}async function D(){let r=document.getElementById("bk2-factory-confirm"),b=document.getElementById("bk2-factory-reset");if((r?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{b&&(b.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),i=await t.json().catch(()=>({}));if(!t.ok||!i.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),b&&(b.disabled=!1);return}r&&(r.value=""),b&&(b.classList.remove("is-ready"),b.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),E()}catch{b&&(b.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function C(){document.getElementById("bk2-settings-download")?.addEventListener("click",$),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",U),document.getElementById("bk2-settings-apply")?.addEventListener("click",N),document.getElementById("bk2-clear-history")?.addEventListener("click",F),document.getElementById("bk2-pack-export")?.addEventListener("click",x),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",o),document.getElementById("bk2-pack-apply")?.addEventListener("click",n),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",p),R(),E(),I()}let y=null,M=null;async function E(){let r=document.getElementById("bk2-pack-summary");if(r)try{let b=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!b.ok){r.textContent=ServerI18n.t("backupPreviewUnavailable");return}let e=await b.json(),t=(e.total_bytes/(1024*1024)).toFixed(2);r.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:t})}catch{r.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function x(){let r=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(r?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function I(){let r=document.getElementById("bk2-assets-summary");if(r)try{let b=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!b.ok){r.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let e=await b.json(),t=(e.total_bytes/(1024*1024)).toFixed(2);r.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:t})}catch{r.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let T={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},g={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function c(r){return!r||!r.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(r.map(b=>{let e=b&&g[b.code];return"  "+b.path+" \u2014 "+(e?ServerI18n.t(e):b.reason)}))}function l(r){return(r||[]).map(b=>{let e=b&&T[b.code];return"  "+b.path+" \u2014 "+(e?ServerI18n.t(e):b.reason)})}async function o(){let b=document.getElementById("bk2-pack-upload")?.files?.[0];if(!b){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(b.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let e=new FormData;e.append("file",b);let t=document.getElementById("bk2-pack-diff"),i=document.getElementById("bk2-pack-apply");try{let a=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:e}),m=await a.json().catch(()=>({}));if(!a.ok||!m.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(m.errors||m,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),i&&(i.disabled=!0),y=null;return}if(t){t.hidden=!1;let S=[],k=m.manifest||{};S.push("manifest version: "+(k.version||"?")),S.push("generated_at: "+(k.generated_at?new Date(k.generated_at*1e3).toISOString():"\u2014")),m.credentials==="omitted"&&S.push(ServerI18n.t("backupCredentialsKept")),S.push(""),S.push("Will write "+(m.members?.length||0)+" files:"),(m.members||[]).forEach(L=>{S.push("  "+L.label+"/"+L.path.split("/").slice(1).join("/")+" ("+(L.size||0)+" B)")}),m.skipped?.length&&(S.push(""),S.push("Skipped "+m.skipped.length+" entries:"),S.push(...l(m.skipped))),S.push(...c(m.merged)),t.textContent=S.join(`
`)}y=b,i&&(i.disabled=!1,i.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:m.members?.length||0}),!0)}catch(a){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:a.message||""}),!1)}}async function n(){if(!y){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let b=new FormData;b.append("file",y);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:b})).json().catch(()=>({})),i=document.getElementById("bk2-pack-diff");if(i){i.hidden=!1;let a=[];t.ok?(a.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),a.push(""),a.push("Applied "+(t.applied||0)+" files"),t.restart_required&&a.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),t.skipped?.length&&(a.push("Skipped "+t.skipped.length+" entries:"),a.push(...l(t.skipped))),a.push(...c(t.merged))):(a.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),t.restart_required&&a.push(ServerI18n.t("backupRestartRequired")),a.push(JSON.stringify(t.errors||t,null,2))),i.textContent=a.join(`
`)}if(t.ok){let a=t.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(a,{n:t.applied}),!0),y=null;let m=document.getElementById("bk2-pack-apply");m&&(m.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:e.message||""}),!1)}}async function f(){let b=document.getElementById("bk2-assets-upload")?.files?.[0];if(!b){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(b.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let e=new FormData;e.append("file",b);let t=document.getElementById("bk2-assets-diff"),i=document.getElementById("bk2-assets-apply");try{let a=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:e}),m=await a.json().catch(()=>({}));if(!a.ok||!m.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(m.errors||m,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),i&&(i.disabled=!0),M=null;return}if(t){t.hidden=!1;let S=[],k=m.manifest||{};S.push("manifest version: "+(k.version||"?")),S.push("generated_at: "+(k.generated_at?new Date(k.generated_at*1e3).toISOString():"\u2014")),S.push(""),S.push("Will write "+(m.members?.length||0)+" asset files:"),(m.members||[]).forEach(L=>{S.push("  "+L.path+" ("+(L.size||0)+" B)")}),m.skipped?.length&&(S.push(""),S.push("Skipped "+m.skipped.length+" entries:"),m.skipped.forEach(L=>S.push("  "+L.path+" \u2014 "+L.reason))),t.textContent=S.join(`
`)}M=b,i&&(i.disabled=!1,i.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:m.members?.length||0}),!0)}catch(a){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:a.message||""}),!1)}}async function p(){if(!M){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let b=new FormData;b.append("file",M);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:b})).json().catch(()=>({})),i=document.getElementById("bk2-assets-diff");if(i){i.hidden=!1;let a=[];t.ok?(a.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),a.push(""),a.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&a.push("Skipped "+t.skipped.length+" (see above)")):(a.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),a.push(JSON.stringify(t.errors||t,null,2))),i.textContent=a.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),M=null;let a=document.getElementById("bk2-assets-apply");a&&(a.disabled=!0),I()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:e.message||""}),!1)}}function w(){let r=document.querySelector(".admin-dash-grid"),b=document.getElementById(h);if(!r||!b)return;let e=r.dataset.activeLeaf||"dashboard";b.style.display=e==="backup"?"":"none"}function d(){let r=document.getElementById("settings-grid");!r||document.getElementById(h)||(r.insertAdjacentHTML("beforeend",u()),C(),w())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&d(),w()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",w),document.addEventListener("admin-panel-rendered",()=>{d(),w()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var rn=ye(()=>{(function(){"use strict";let h="admin-broadcast-v2-page",v="/admin/broadcast/status",u="/admin/broadcast/toggle",$={mode:"live"},B=null,A=0,U=!1;async function N(){try{let d=await fetch(v,{credentials:"same-origin"});if(!d.ok)return!1;let s=await d.json();if(s&&(s.mode==="live"||s.mode==="standby"))return B=s.session||null,$=s,!0}catch{}return!1}async function F(){try{let d=await fetch("/overlay_status",{credentials:"same-origin"});d.ok&&(A=(await d.json()).overlay_count||0,U=!0)}catch{}}async function R(){await Promise.all([N(),F()]),D()}function D(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:$.mode==="live",count:U?A:void 0}}))}async function C(d){try{let s=await window.csrfFetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:d})});if(!s.ok){let r=await s.json().catch(()=>({}));throw new Error(r&&r.error?r.error:`HTTP ${s.status}`)}return $=await s.json(),D(),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function y(d,s){return ServerI18n.t(d?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:s})}function M(d){return d?"broadcastBigPause":"broadcastBigResume"}async function E(d){let s=await C(d?"live":"standby");return s&&window.showToast&&window.showToast(ServerI18n.t(d?"broadcastToastResumed":"broadcastToastPaused"),!0),c(),s}async function x(){return await N(),F().then(D),E($.mode!=="live")}async function I(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:E,toggleDisplay:x,clearScreen:I,statusText:y,toggleKey:M};function H(){let d=s=>ServerI18n.t(s);return`
      <div id="${h}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${M(!1)}">${d(M(!1))}</button>
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
      </div>`}let T=0,g=0;function c(){let d=document.getElementById(h);if(!d)return;let s=$.mode==="live",r=s?"live":"standby",b=(k,L)=>{k&&k.textContent!==L&&(k.textContent=L)};d.dataset.bcState=r;let e=d.querySelector("[data-bc-statedot]");e&&(e.dataset.state=r);let t=d.querySelector("[data-bc-statelabel]");t&&(b(t,y(s,A)),t.dataset.state=r);let i=d.querySelector("[data-bc-big]");i&&(i.dataset.i18n=M(s),b(i,ServerI18n.t(i.dataset.i18n)));let a=B||{},m=!!(a.id||a.name),S=d.querySelector("[data-bc-session-ctx]");S&&(S.hidden=!m),m&&b(d.querySelector("[data-bc-session-id]"),String(a.name||a.id))}function l(){let d=document.getElementById(h);d&&(d.querySelector("[data-bc-big]")?.addEventListener("click",()=>E($.mode!=="live")),d.querySelector("[data-bc-clear]")?.addEventListener("click",I))}function o(){T||(R().then(c),c(),T=setInterval(()=>{R().then(c)},5e3),g=setInterval(c,1e3))}function n(){T&&(clearInterval(T),T=0),g&&(clearInterval(g),g=0)}function f(){let d=document.querySelector(".admin-dash-grid"),s=document.getElementById(h);if(!d||!s)return;let r=d.dataset.activeLeaf||"dashboard",b=r==="overlay"||r==="broadcast";s.style.display=b?"":"none",b?o():n()}function p(){let d=document.getElementById("settings-grid");!d||document.getElementById(h)||(d.insertAdjacentHTML("afterbegin",H()),l(),f())}function w(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&p(),f()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",()=>{p(),f()}),p()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w()})()});var dn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function v(G,te){return window.ServerI18n?window.ServerI18n.t(G,te):G}let u=["keyword","regex","rate_limit","fingerprint"],$={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},B=["block","replace","allow","review"],A={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},U={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},N={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},F=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function R(G){switch(G.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:G.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:G.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:G.action||"block"}}}function D(G,te){return G==="keyword"?te==="block"?"word":"keyword":G==="regex"?te==="replace"?"replace":"regex":G}function C(G){return G==="permanent"||G==="session"?{lifetime:G}:G==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(G,10)}}function y(G){let te=new Date(G*1e3),ae=ke=>String(ke).padStart(2,"0"),de=`${ae(te.getHours())}:${ae(te.getMinutes())}`,he=new Date;return te.toDateString()===he.toDateString()?de:`${te.getMonth()+1}/${te.getDate()} ${de}`}function M(G){return G.lifetime==="session"?v("blkLifeSession"):G.lifetime==="timed"&&G.expires_at?v("blkLifeUntil",{time:y(G.expires_at)}):v("msgDrawerPermanent")}function E(G){return G.type==="rate_limit"?v("blkRateSummary",{n:G.max_count||5,s:G.window_sec||60}):G.type==="replace"?`${G.pattern}  \u2192  ${G.replacement||""}`:G.pattern}let x=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function I(G,te){return te.find(ae=>ae.type==="regex"&&ae.pattern===G.pattern&&ae.action===G.action)}let H=[],T="all",g=null,c=!1,l=new Set,o=0,n=0,f=!0;function p(G,te,ae){return G.map(de=>`<option value="${h(de)}"${de===ae?" selected":""}>${h(te(de))}</option>`).join("")}function w(){return`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(v("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${h(v("modAddWordPlaceholder"))}" aria-label="${h(v("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${h(v("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${h(v("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${h(v("blkMatchLabel"))}">
              ${p(u,G=>v($[G]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${h(v("blkActionLabel"))}">
              ${p(B,G=>v(A[G]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${h(v("blkLifetimeLabel"))}">
              ${F.map(G=>`<option value="${G.value}">${h(v(G.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${h(v("fltColReplacement"))}" aria-label="${h(v("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${h(v("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${h(v("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${x.map(G=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${G.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${h(v(G.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(u).map(G=>`
              <button type="button" class="seg-item${G==="all"?" is-active":""}" data-scope="${G}">
                ${h(v(G==="all"?"fltChipAll":$[G]))}
                <span class="admin-block-scope-count" data-scope-count="${G}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${h(v("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${h(v("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${h(v("uiColPriority"))} \xB7 ${h(v("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${h(v("sampleText"))}" aria-label="${h(v("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${h(v("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${h(v("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`}function d(G){let te=R(G),ae=h(G.id);return`
      <div class="hud-rule-row admin-block-row${G.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${h(G.type)}"
        style="${G.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${h(E(G))}</span>
        <span class="admin-block-row__meta">
          <span>${h(v($[te.match]))}</span>
          <span class="admin-block-row__action" data-action="${h(te.action)}">${h(v(A[te.action]||"fltActBlock"))}</span>
          <span>${h(M(G))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${h(G.enabled?v("enabled"):v("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${G.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${G.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${h(v("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${h(v("deleteRule"))}" aria-label="${h(v("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function s(){let G=document.getElementById("blockRuleList");if(!G)return;let te={all:H.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};H.forEach(ke=>{te[R(ke).match]+=1}),Object.keys(te).forEach(ke=>{let $e=document.querySelector(`[data-scope-count="${ke}"]`);$e&&($e.textContent=String(te[ke]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",H.length||"");let ae=H.filter(ke=>ke.lifetime==="session").length,de=document.getElementById("blockRuleClearSession");de&&(de.hidden=ae===0);let he=T==="all"?H:H.filter(ke=>R(ke).match===T);G.innerHTML=he.map(d).join(""),r(he.length===0),b()}function r(G){let te=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!te||!ae)&&(te.hidden=G,ae.hidden=!G,ae.innerHTML="",!!G))if(window.AdminEmpty){let de=window.AdminEmpty.renderCustom({icon:"\u2298",title:v("blkEmpty"),accent:"var(--color-ink-error)"});de.dataset.emptyKind="filters",ae.appendChild(de)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${h(v("blkEmpty"))}</div>`}function b(){x.forEach(G=>{let te=document.querySelector(`[data-flt-quick-id="${G.id}"]`);if(!te)return;let ae=I(G,H),de=!!ae&&ae.enabled!==!1;te.classList.toggle("is-active",de),te.setAttribute("aria-pressed",de?"true":"false")})}let e=0;async function t(){let G=++e;try{let te=await window.csrfFetch("/admin/filters/list");if(!te.ok)throw new Error("HTTP "+te.status);let ae=await te.json();if(G!==e)return;H=Array.isArray(ae.rules)?ae.rules:[],f=ae.session_live!==!1}catch(te){if(G!==e)return;console.error("Failed to fetch block rules:",te),window.showToast(v("fetchFiltersFailed"),!1)}s(),i()}function i(){let G=a("blockRuleLifetime");if(!G)return;let te=G.querySelector('option[value="session"]'),ae=f||!!(g&&g.lifetime==="session");te&&(te.hidden=!ae,te.disabled=!ae),!ae&&G.value==="session"&&(G.value="permanent")}function a(G){return document.getElementById(G)}function m(){let G=a("blockRuleMatch").value,te=a("blockRuleAction"),ae=U[G];Array.from(te.options).forEach(de=>{de.disabled=ae.indexOf(de.value)===-1}),ae.indexOf(te.value)===-1&&(te.value=ae[0]),te.disabled=ae.length===1,a("blockRuleInput").placeholder=v(N[G]),a("blockRuleReplacement").hidden=te.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(de=>{de.hidden=G!=="rate_limit"})}function S(){let G=a("blockRuleMatch").value,te=a("blockRuleAction").value,ae=a("blockRuleInput").value||"",de={type:D(G,te),pattern:G==="regex"?ae:ae.trim(),action:te,priority:parseInt(a("blockRulePriority").value,10)||0};return g&&g.type===de.type&&(de.type==="fingerprint"||de.type==="rate_limit")&&(de.action=g.action||te),de.type==="replace"&&(de.replacement=a("blockRuleReplacement").value||""),de.type==="rate_limit"&&(de.max_count=parseInt(a("blockRuleMaxCount").value,10)||5,de.window_sec=parseFloat(a("blockRuleWindowSec").value)||60),Object.assign(de,C(a("blockRuleLifetime").value))}function k(G,te){let ae=G&&G.code;return v(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":te)}function L(){o+=1,g=null,a("blockRuleInput").value="",a("blockRuleReplacement").value="",a("blockRuleMatch").value="keyword",a("blockRuleAction").value="block";let G=a("blockRuleLifetime"),te=G.querySelector('option[value="keep"]');te&&te.remove(),G.value="permanent",a("blockRulePriority").value="0",a("blockRuleSubmit").textContent=v("modAddWordBtn"),a("blockRuleCancel").hidden=!0,m(),i()}function O(G){o+=1,g=G;let te=R(G);a("blockRuleMatch").value=te.match,m(),a("blockRuleAction").value=te.action,a("blockRuleInput").value=G.pattern||"",a("blockRuleReplacement").value=G.replacement||"",a("blockRuleMaxCount").value=String(G.max_count||5),a("blockRuleWindowSec").value=String(G.window_sec||60),a("blockRulePriority").value=String(G.priority||0);let ae=a("blockRuleLifetime"),de=ae.querySelector('option[value="keep"]');if(de&&de.remove(),G.lifetime==="timed"&&G.expires_at){let he=document.createElement("option");he.value="keep",he.textContent=M(G),ae.insertBefore(he,ae.firstChild),ae.value="keep"}else ae.value=G.lifetime==="session"?"session":"permanent";m(),i(),a("blockRuleSubmit").textContent=v("blkSave"),a("blockRuleCancel").hidden=!1,a("blockRuleInput").focus()}async function K(){if(c)return;let G=S();if(!G.pattern&&G.type!=="rate_limit"){window.showToast(v("patternRequired"),!1),a("blockRuleInput").focus();return}let te=g,ae=o,de=()=>ae===o,he=te?"/admin/filters/update":"/admin/filters/add",ke=te?{rule_id:te.id,updates:G}:G,$e=a("blockRuleSubmit"),pe=++n;c=!0,te&&l.add(te.id),$e&&($e.disabled=!0);try{let xe=await window.csrfFetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)}),Ie=await xe.json().catch(()=>({}));if(te&&xe.status===404){de()&&L(),await t(),window.showToast(v("blkErrGone"),!1);return}if(!xe.ok){window.showToast(k(Ie,te?"updateRuleFailed":"addRuleFailed"),!1);return}de()&&L(),await t(),te?window.showToast(v("blkUpdated"),!0):window.AdminQuickAction&&Ie.rule_id?window.AdminQuickAction.fire({label:v("blkAdded",{pattern:G.pattern||E(G)}),undo:{label:v("histUndo"),run:async()=>{if(!await _(Ie.rule_id))throw new Error("remove failed")}}}):window.showToast(v("ruleAdded"),!0)}catch(xe){console.error("Save block rule error:",xe),window.showToast(v(te?"updateRuleFailed":"addRuleFailed"),!1)}finally{te&&l.delete(te.id),pe===n&&(c=!1),$e&&($e.disabled=!1)}}async function _(G){let te=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G})});return te.ok&&await t(),te.ok}async function P(G){let te=H.find(de=>de.id===G);if(await window.HudConfirm?.open({icon:"\u2298",title:v("filtersDeleteTitle"),severity:"danger",bodyText:te?E(te):"",confirmLabel:v("filtersDeleteConfirm")}))try{await _(G)?(g&&g.id===G&&L(),window.showToast(v("ruleDeleted"),!0)):window.showToast(v("deleteRuleFailed"),!1)}catch(de){console.error("Delete block rule error:",de),window.showToast(v("deleteRuleFailed"),!1)}}let j={};async function z(G,te){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G,updates:{enabled:te}})}),de=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(k(de,"updateRuleFailed"),!1),!1;let he=H.find(ke=>ke.id===G);return he&&(he.enabled=te),b(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(v("updateRuleFailed"),!1),!1}}function X(G,te){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ke=>ke.dataset.ruleId===G);if(!ae)return;let de=ae.querySelector(".filter-toggle-cb");de&&(de.checked=te);let he=ae.querySelector(".admin-filter-toggle-dot");he&&(he.classList.toggle("is-on",te),he.classList.toggle("is-off",!te)),ae.classList.toggle("is-off",!te),ae.style.opacity=te?"":"0.45"}async function Z(G,te){let ae=j[G]||(j[G]={want:te,busy:!1});if(ae.want=te,ae.busy)return null;ae.busy=!0;try{let de;do if(de=ae.want,!await z(G,de))return await t(),!1;while(ae.want!==de);return X(G,de),!0}finally{delete j[G]}}async function V(){let G=H.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:v("blkClearSessionTitle"),severity:"danger",bodyText:v("blkClearSessionBody",{n:G}),confirmLabel:v("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),de=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(v("blkClearedSession",{n:de.removed||0}),!0),await t()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(v("deleteRuleFailed"),!1)}}async function ee(G){let te=x.find(he=>he.id===G);if(!te)return;let ae=v(te.key),de=I(te,H);if(de&&de.enabled===!1){await Z(de.id,!0)&&(window.showToast(v("filtersToastEnabled",{label:ae}),!0),await t());return}if(de){let he=await _(de.id).catch(()=>!1);window.showToast(he?v("filtersToastDisabled",{label:ae}):v("filtersToastDisableFailed"),he);return}try{let he=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:te.pattern,action:te.action,priority:50,lifetime:f?"session":"permanent"})});if(!he.ok){let ke=await he.json().catch(()=>({}));window.showToast(v("filtersToastEnableFailed",{msg:k(ke,"addRuleFailed")}),!1);return}window.showToast(v("filtersToastEnabled",{label:ae}),!0),await t()}catch{window.showToast(v("filtersToastEnableFailed",{msg:""}),!1)}}async function W(){let G=a("filterTestText"),te=a("filterTestResult"),ae=(G.value||"").trim();if(!ae){window.showToast(v("sampleTextRequired"),!1),G.focus();return}let de=S();if(!de.pattern&&de.type!=="rate_limit"){window.showToast(v("patternRequired"),!1),a("blockRuleInput").focus();return}te.textContent=v("testing");try{let he=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:de,text:ae})}),ke=await he.json().catch(()=>({}));if(!he.ok){te.textContent=k(ke,"testError");return}let $e={block:v("blocked"),replace:v("replaced"),allow:v("allowed"),review:v("fltActReview")}[ke.action]||v("noMatch");te.dataset.verdict=ke.action||"pass",te.textContent=ke.action==="replace"?`${$e} \u2192 ${ke.text||""}`:$e}catch(he){console.error("Test block rule error:",he),te.textContent=v("testError")}}let Q=6,ne=[],re=0,le=null;function ue(G){let te=new Date(G*1e3),ae=de=>String(de).padStart(2,"0");return`${ae(te.getHours())}:${ae(te.getMinutes())}:${ae(te.getSeconds())}`}let me={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function Te(){let G=a("filterLiveLog");if(G){if(ne.length===0){G.innerHTML=`<div class="admin-block-empty">${h(v("fltNoEvents"))}</div>`;return}G.innerHTML=ne.map(te=>{let ae=String(te.action||"").toUpperCase(),de=me[ae]?v(me[ae]):ae,he=String(te.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${h(ae)}">
        <span class="admin-filter-log-row__time">${h(ue(te.ts))}</span>
        <span class="admin-filter-log-row__action">${h(de)}</span>
        <span class="admin-filter-log-row__text">\u300C${h(te.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${h(v("blkLogRule",{pattern:te.pattern||""}))}${he?" \xB7 "+h(he):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let G=await fetch(`/admin/filters/events?since=${re}`,{credentials:"same-origin"});if(!G.ok)return;let te=await G.json();if(!Array.isArray(te.events)||te.events.length===0)return;for(ne.unshift(...te.events);ne.length>Q;)ne.pop();re=te.latest_seq||re,Te()}catch{}}function Le(G){a("blockRuleMatch").addEventListener("change",m),a("blockRuleAction").addEventListener("change",m),a("blockRuleSubmit").addEventListener("click",K),a("blockRuleCancel").addEventListener("click",L),a("blockRuleInput").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),K())}),a("filterTestBtn").addEventListener("click",W),a("filterTestText").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),W())}),a("blockRuleClearSession").addEventListener("click",V),G.querySelector("[data-flt-quick]").addEventListener("click",de=>{let he=de.target.closest("[data-flt-quick-id]");he&&ee(he.dataset.fltQuickId)});let te=a("blockRuleScope");te.addEventListener("click",de=>{let he=de.target.closest("[data-scope]");he&&(T=he.dataset.scope,te.querySelectorAll("[data-scope]").forEach(ke=>ke.classList.toggle("is-active",ke===he)),s())});let ae=a("blockRuleList");ae.addEventListener("change",de=>{let he=de.target.closest(".filter-toggle-cb");if(!he)return;Z(he.dataset.ruleId,he.checked);let ke=he.closest(".admin-block-row"),$e=ke?.querySelector(".admin-filter-toggle-dot");$e&&($e.classList.toggle("is-on",he.checked),$e.classList.toggle("is-off",!he.checked)),ke&&(ke.style.opacity=he.checked?"":"0.45")}),ae.addEventListener("click",de=>{let he=de.target.closest(".filter-delete-btn");if(he)return P(he.dataset.ruleId);let ke=de.target.closest(".block-rule-edit");if(ke){let $e=H.find(pe=>pe.id===ke.dataset.ruleId);$e&&!l.has($e.id)&&O($e)}}),le&&le(),le=window.AdminUtils.pollWhileVisible({el:()=>a("filterLiveLog"),intervalMs:4e3,tick:Ee})}function oe(){let G=document.getElementById("settings-grid");if(!G)return;g=null,T="all",c=!1,n+=1,o+=1,G.insertAdjacentHTML("beforeend",w());let te=document.getElementById("sec-blacklist");Le(te),m(),Te(),t()}let se=!1;document.addEventListener("admin-route-applied",G=>{let te=!!(G.detail&&G.detail.route==="moderation"&&G.detail.leaf==="blacklist");te&&!se&&document.getElementById("blockRuleList")&&t(),se=te});function ce(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let G=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{G()&&oe()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),G()&&oe()}window.AdminBlockRules={viewOf:R,typeFor:D,lifetimePayload:C,ACTIONS_FOR_MATCH:U,QUICK:x,refresh:t},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce()})()});var ln=ye(()=>{(function(){"use strict";var h=window.AdminUtils.loadDetailsState,v=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml,$=1e4,B=null;function A(x){var I=h();return I[x]!==void 0?I[x]:!1}function U(){return`
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
    `}function N(x){var I=ServerI18n.t("fingerprintState_"+x),H="";return x==="blocked"?H=" is-crimson":x==="flagged"?H=" is-amber":x==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+u(I)+"</span>"}function F(x){if(!x)return"\u2014";try{var I=new Date(x*1e3);return I.toLocaleTimeString()}catch{return String(x)}}function R(x){var I=document.getElementById("adminFingerprintTableWrap");if(I){if(!x||x.length===0){I.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",I.appendChild(H);return}var T='<div class="admin-fp-row admin-fp-row--head"><span>'+u(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",g=x.map(function(c){var l=c.blocked|0,o=c.hash||"",n=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+u(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+u(o)+'">fp:'+u(n)+'</span><span class="admin-fp-ip admin-identity-ip">'+u(c.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+u(c.ua||"")+'">'+u(c.ua||"\u2014")+'</span><span class="admin-fp-num">'+(c.msgs|0)+'</span><span class="admin-fp-num">'+(c.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(l>0?"is-crimson":"is-mute")+'">'+l+"</span><span>"+N(c.state||"active")+'</span><span class="admin-fp-ts">'+u(F(c.last_seen))+"</span></div>"}).join("");I.innerHTML=T+g}}async function D(){var x=document.getElementById("adminFingerprintCount");try{var I=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var H=await I.json(),T=H.records||[];if(R(T),x){var g=H.count||T.length,c=H.flagged!=null?H.flagged:T.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;x.textContent=ServerI18n.t("fpCountSummary",{unique:g,flagged:c})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var l=document.getElementById("adminFingerprintTableWrap");l&&(l.innerHTML='<span class="hud-pill is-danger">'+u(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function C(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var I=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(I.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await D();else{var H=await I.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(T){console.error("[admin-fingerprints] reset error:",T),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function y(){M(),B=setInterval(function(){var x=document.getElementById("sec-fingerprints");x&&x.offsetParent!==null&&D()},$)}function M(){B&&(clearInterval(B),B=null)}function E(){var x=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(x){x.insertAdjacentHTML("beforeend",U());var I=document.getElementById("adminFingerprintRefreshBtn");I&&I.addEventListener("click",D);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",C),D(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var x=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&E()});x.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");I&&!document.getElementById("sec-fingerprints")&&E()}})})()});var cn=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.escapeHtml;let v=(s,r)=>{let b=window.ServerI18n?.t?.(s);return b&&b!==s?b:r||s},u=!1;new MutationObserver(()=>{let s=document.getElementById("settings-grid");if(s&&!(document.getElementById("sec-widgets")||u)){u=!0;try{B(s)}finally{u=!1}}}).observe(document.body,{childList:!0,subtree:!0});function B(s){let r=document.createElement("div");r.id="sec-widgets",r.className="admin-widgets-page hud-page-stack lg:col-span-2";let b=location.origin+"/overlay";r.dataset.tpl="B",r.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${h(v("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${h(v("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${h(v("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${h(v("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${h(v("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${h(v("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${h(v("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${h(v("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${h(v("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${h(v("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${h(v("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${h(b)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${h(v("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${h(v("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,s.appendChild(r);let e=document.getElementById("widget-add"),t=r.querySelector("[data-ow-addmenu]");e.addEventListener("click",i=>{i.stopPropagation(),t.hidden=!t.hidden}),t.addEventListener("click",i=>{let a=i.target.closest("[data-ow-add]")?.dataset.owAdd;a&&(t.hidden=!0,N(a))}),document.addEventListener("click",i=>{!t.hidden&&!i.target.closest(".admin-ui-page-actions")&&(t.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",C),r.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let i=r.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(i).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),U()}async function A(s,r="GET",b=null){let e={method:r,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(b){let i=document.querySelector('meta[name="csrf-token"]');i&&(e.headers["X-CSRF-Token"]=i.content),e.body=JSON.stringify(b)}return(await fetch("/admin/widgets/"+s,e)).json()}async function U(){try{let s=await A("list");M(s.widgets||[])}catch(s){console.error("[admin-widgets] Load failed:",s)}}async function N(s){let r={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await A("create","POST",{type:s,config:r[s]||{}}),U()}catch(b){console.error("[admin-widgets] Create failed:",b)}}async function F(s){let r=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:r,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await A("delete","POST",{id:s}),U()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function R(s,r){try{await A("update","POST",{id:s,config:r}),U()}catch(b){console.error("[admin-widgets] Update failed:",b)}}async function D(s,r,b){try{await A("score","POST",{id:s,team_index:r,delta:b}),U()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function C(){let s=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:s,confirmLabel:ServerI18n.t("clearAll")}))try{await A("clear","POST",{}),U()}catch(b){console.error("[admin-widgets] Clear failed:",b)}}let y=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function M(s){let r=document.getElementById("widgets-list");if(r){if(r.innerHTML="",o(s),s.length===0){let b=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});b.dataset.emptyKind="widgets",r.appendChild(b);return}s.forEach(b=>{r.appendChild(T(b))})}}let E={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function x(s){return v("widgetPos_"+String(s||"top-left").replace("-","_"),s||"")}function I(s){let r=s.config||{},b="";s.type==="scoreboard"?b=(r.teams||[]).map(t=>`${t.name} ${t.score}`).join(" \xB7 "):s.type==="ticker"?(b=(r.messages||[])[0]||"",b&&(b=`\u300C${b}\u300D`)):s.type==="label"&&(b=r.text?`\u300C${r.text}\u300D`:"");let e=x(s.position);return b?`${b} \xB7 ${e}`:e}function H(s){return s==="scoreboard"?v("widgetScoreboard"):s==="ticker"?v("widgetTicker"):s==="label"?v("widgetLabel"):s}function T(s){let r=document.createElement("div");r.className="admin-widget-card",s.visible!==!1&&r.classList.add("is-on");let b=document.createElement("button");b.type="button",b.className="admin-widget-summary",b.setAttribute("aria-expanded","false"),b.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+h(E[s.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+h(H(s.type))+'</span><span class="admin-widget-summary-text">'+h(I(s))+"</span>"+(s.visible===!1?'<span class="admin-widget-summary-off">'+h(v("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',r.appendChild(b);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,b.addEventListener("click",()=>{e.hidden=!e.hidden,b.setAttribute("aria-expanded",e.hidden?"false":"true"),r.classList.toggle("is-open",!e.hidden)});let t=d(v("widgetPosition"),y,s.position,S=>R(s.id,{position:S}));e.appendChild(t),s.type==="scoreboard"?n(e,s):s.type==="ticker"?f(e,s):s.type==="label"&&p(e,s);let i=document.createElement("div");i.className="admin-widget-card-actions";let a=document.createElement("button");a.type="button",a.className="admin-ui-action admin-widget-card-action",a.textContent=s.visible?v("widgetHide"):v("widgetShow"),a.addEventListener("click",()=>R(s.id,{visible:!s.visible})),i.appendChild(a);let m=document.createElement("button");return m.type="button",m.className="admin-ui-action is-danger admin-widget-card-action",m.textContent=v("remove"),m.addEventListener("click",()=>F(s.id)),i.appendChild(m),e.appendChild(i),r.appendChild(e),r}let g={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function c(s,r){let b="top-left",e=1/0;for(let[t,[i,a]]of Object.entries(g)){let m=s-i/2,S=r-a/2,k=m*m+S*S;k<e&&(e=k,b=t)}return b}function l(s){let r=s.config||{};return s.type==="scoreboard"?(r.teams||[]).map(b=>`${b.name} ${b.score}`).join("  ")||v("widgetScoreboard"):s.type==="ticker"?(r.messages||[])[0]||v("widgetTicker"):s.type==="label"?r.text||v("widgetLabel"):s.type}function o(s){let r=document.querySelector("[data-ow-stage]");if(r){if(r.innerHTML="",!s.length){r.innerHTML='<span class="admin-ow-stage-empty">'+h(v("widgetsStageEmpty"))+"</span>";return}s.forEach(b=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(b.position||"top-left"),b.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=b.id,e.draggable=!0,e.textContent=l(b),e.title=H(b.type),e.addEventListener("dragend",t=>{let i=r.getBoundingClientRect();if(!i.width||!i.height)return;let a=(t.clientX-i.left)/i.width,m=(t.clientY-i.top)/i.height;if(a<0||a>1||m<0||m>1)return;let S=c(a,m);S!==b.position&&R(b.id,{position:S})}),r.appendChild(e)})}}function n(s,r){let b=r.config||{},e=w(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",b.title||"",t=>R(r.id,{title:t}));s.appendChild(e),(b.teams||[]).forEach((t,i)=>{let a=document.createElement("div");a.className="admin-widget-team";let m=document.createElement("input");m.type="color",m.value=t.color||"#38bdf8",m.className="admin-widget-team-color",m.addEventListener("change",()=>{let K=[...b.teams];K[i]={...K[i],color:m.value},R(r.id,{teams:K})}),a.appendChild(m);let S=document.createElement("input");S.type="text",S.value=t.name,S.className="admin-widget-input",S.addEventListener("change",()=>{let K=[...b.teams];K[i]={...K[i],name:S.value},R(r.id,{teams:K})}),a.appendChild(S);let k=document.createElement("span");k.className="admin-widget-team-score",k.textContent=t.score,a.appendChild(k);let L=document.createElement("button");L.type="button",L.className="admin-widget-step",L.textContent="\u2212",L.addEventListener("click",()=>D(r.id,i,-1)),a.appendChild(L);let O=document.createElement("button");O.type="button",O.className="admin-widget-step",O.textContent="+",O.addEventListener("click",()=>D(r.id,i,1)),a.appendChild(O),s.appendChild(a)})}function f(s,r){let b=r.config||{},e=document.createElement("div");e.className="admin-widget-row";let t=document.createElement("span");t.className="lbl",t.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(t);let i=document.createElement("input");i.type="range",i.min="10",i.max="200",i.value=b.speed||60,i.style.flex="1",i.addEventListener("change",()=>{R(r.id,{speed:parseInt(i.value)})}),e.appendChild(i);let a=document.createElement("span");a.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",a.textContent=i.value,i.addEventListener("input",()=>{a.textContent=i.value}),e.appendChild(a),s.appendChild(e);let m=document.createElement("div");m.className="admin-widget-row",m.style.alignItems="flex-start";let S=document.createElement("span");S.className="lbl",S.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",m.appendChild(S);let k=document.createElement("textarea");k.className="admin-widget-textarea",k.value=(b.messages||[]).join(`
`),k.rows=3,k.placeholder=ServerI18n.t("widgetTickerPlaceholder"),k.addEventListener("change",()=>{let L=k.value.split(`
`).filter(O=>O.trim());R(r.id,{messages:L})}),m.appendChild(k),s.appendChild(m)}function p(s,r){let b=r.config||{};s.appendChild(w(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",b.text||"",e=>R(r.id,{text:e}))),s.appendChild(w(window.ServerI18n?.t?.("size")||"SIZE",String(b.fontSize||24),e=>R(r.id,{fontSize:parseInt(e)||24}),"number"))}function w(s,r,b,e="text"){let t=document.createElement("div");t.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=s,t.appendChild(i);let a=document.createElement("input");return a.type=e,a.value=r,a.className="admin-widget-input",a.addEventListener("change",()=>b(a.value)),t.appendChild(a),t}function d(s,r,b,e){let t=document.createElement("div");t.className="admin-widget-row";let i=document.createElement("span");i.className="lbl",i.textContent=s,t.appendChild(i);let a=document.createElement("select");return a.className="admin-widget-select",r.forEach(m=>{let S=document.createElement("option");S.value=m,S.textContent=m,m===b&&(S.selected=!0),a.appendChild(S)}),a.addEventListener("change",()=>e(a.value)),t.appendChild(a),t}})})()});var un=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let h=["live","polls","moderation","viewer","widgets","effects","assets","system","history","notifications","audience","overlay","about"];function v(){let _=window.ADMIN_ROUTES||{},P={};return h.forEach(j=>{let z=_[j];z&&z.title&&(P[j]={title:z.title,kicker:z.kicker||j.toUpperCase()})}),P}let u=[{labelKey:"styleThemePacks",route:"viewer/themes",section:"sec-themes"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer/defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerTheme",route:"viewer/page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerLimits",route:"viewer/limits",section:"sec-viewer-config-limits"},{labelKey:"overlayLayoutFoldTitle",route:"overlay",section:"sec-overlay-layout"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],$=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function B(){let _=document.querySelector('meta[name="csrf-token"]');return _&&_.content||""}function A(_,P){if(typeof window.csrfFetch=="function")return window.csrfFetch(_,P);let j=Object.assign({credentials:"same-origin"},P||{}),z=new Headers(P&&P.headers||{});return z.set("X-CSRF-Token",B()),j.headers=z,fetch(_,j)}function U(_,P){typeof window.showToast=="function"&&window.showToast(_,P!==!1)}let N=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>A("/effects/reload",{method:"POST"}).then(_=>U(_.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),_.ok)).catch(()=>U(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>A("/admin/poll/reset",{method:"POST"}).then(_=>U(_.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),_.ok)).catch(()=>U(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return A("/admin/history/clear",{method:"POST"}).then(P=>U(P.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),P.ok)).catch(()=>U(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],F=null,R=null,D=null,C="",y=[],M=[],E=0,x=null,I=null,H=null,T=15e3;function g(_){return String(_??"").replace(/[&<>"']/g,P=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[P])}function c(_,P){if(!P)return 0;let j=String(_||"").toLowerCase(),z=P.toLowerCase(),X=0,Z=0,V=0,ee=0;for(;X<j.length&&Z<z.length;)j[X]===z[Z]?(Z++,ee++,V+=2+ee):ee=0,X++;return Z<z.length?-1:(j.startsWith(z)&&(V+=10),V)}function l(){let _=document.createElement("div");_.className="admin-cmdk",_.setAttribute("hidden",""),_.setAttribute("aria-hidden","true"),_.innerHTML=`
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
    `,document.body.appendChild(_),F=_,R=_.querySelector(".admin-cmdk-input"),D=_.querySelector(".admin-cmdk-list"),_.addEventListener("click",P=>{P.target.matches("[data-cmdk-close]")&&O()}),R.addEventListener("input",P=>{C=P.target.value,m()}),R.addEventListener("keydown",o),D.addEventListener("click",P=>{let j=P.target.closest("[data-cmdk-idx]");j&&(E=parseInt(j.dataset.cmdkIdx,10)||0,f())})}function o(_){if(_.key==="Escape"){_.preventDefault(),O();return}if(_.key==="ArrowDown"){_.preventDefault(),n(1);return}if(_.key==="ArrowUp"){_.preventDefault(),n(-1);return}if(_.key==="Enter"){_.preventDefault(),f();return}}function n(_){if(!y.length)return;E=(E+_+y.length)%y.length,k();let P=D.querySelector(`[data-cmdk-idx="${E}"]`);P&&P.scrollIntoView({block:"nearest"})}function f(){let _=y[E];if(_){if(_.type==="route")window.location.hash="#/"+_.route,O();else if(_.type==="setting")window.location.hash="#/"+_.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let P=document.getElementById(_.section);P&&(P.scrollIntoView({behavior:"smooth",block:"start"}),P.tagName==="DETAILS"&&!P.open&&(P.open=!0))},80),O();else if(_.type==="message")window.location.hash="#/messages",O();else if(_.type==="user")window.location.hash="#/system",setTimeout(()=>{let P=document.getElementById("sec-fingerprints");P&&P.scrollIntoView({behavior:"smooth",block:"start"})},80),O();else if(_.type==="theme"){let P=window.AdminThemes;(P&&P.activate?P.activate(_.id):Promise.resolve({ok:!1})).then(j=>{j.ok?(U(ServerI18n.t("cmdkThemeApplied",{name:_.label}),!0),H=null):U(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>U(ServerI18n.t("cmdkThemeApplyFailed"),!1)),O()}else if(_.type==="action"){try{let P=_.action&&_.action();P&&typeof P.then=="function"&&P.catch(()=>{})}catch{}O()}}}let p={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function w(_){return Object.entries(v()).map(([P,j])=>{let z=Math.max(c(j.title,_),c(P,_)),X=p[P];return{type:"route",route:P,label:j.title,sub:X?ServerI18n.t(X):"",icon:"\u25C7",score:z}}).filter(P=>P.score>=0)}function d(_){let P=v()[_];if(!P)return"";let j="adminRouteTitle_"+_,z=ServerI18n.t(j);return z!==j?z:P.title}function s(_){return u.map(P=>{let j=P.labelKey?ServerI18n.t(P.labelKey):P.label;return{type:"setting",route:P.route,tab:P.tab,section:P.section,label:d(P.route.split("/")[0])?`${d(P.route.split("/")[0])} \u203A ${j}`:j,sub:"",icon:"\u2699",score:c(j,_)}}).filter(P=>P.score>=0)}function r(_){return x?(x.records||[]).map(j=>{let z=j.text||j.message||"",X=j.nickname||j.user||"guest",Z=(j.timestamp||"").slice(11,19)||"\u2014",V=(j.fingerprint||j.fp||"").slice(0,8);return{type:"message",label:`${z}  \xB7  @${X}`,sub:V?`${Z} \xB7 fp:${V}`:Z,icon:"\u{1F4AC}",score:Math.max(c(z,_),c(X,_))}}).filter(j=>j.score>=0):[]}function b(_){if(!H)return[];let P=H.records||[],j=H.active||"";return P.map(z=>{let X=z.label||z.display_name||z.name||"",Z=z.description||ServerI18n.t("cmdkThemeDefaultDesc"),V=z.name===j;return{type:"theme",id:z.name,label:V?ServerI18n.t("cmdkThemeActive",{name:X}):X,sub:Z,icon:"\u{1F3A8}",score:Math.max(c(X,_),c(z.name||"",_),c(Z,_))}}).filter(z=>z.score>=0)}function e(_){return N.map(P=>{let j=ServerI18n.t(P.labelKey),z=P.subKey?ServerI18n.t(P.subKey):P.sub;return{type:"action",id:P.id,label:j,sub:z,icon:"\u26A1",action:P.action,score:Math.max(c(j,_),c(P.id,_),c(z,_))}}).filter(P=>P.score>=0)}function t(_){return I?(I.records||[]).map(j=>{let z=j.fingerprint||j.fp||j.id||"",X=j.ip||j.last_ip||"",Z=j.nickname||"";return{type:"user",label:Z?`@${Z}  \xB7  ${z.slice(0,12)}\u2026`:`${z.slice(0,12)}\u2026`,sub:`user \xB7 ${X||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(c(z,_),c(X,_),c(Z,_))}}).filter(j=>j.score>=0):[]}async function i(){let _=Date.now(),P=[];(!x||_-x.at>T)&&P.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{x={at:_,records:j&&j.records||[]}}).catch(()=>{x={at:_,records:[]}})),(!I||_-I.at>T)&&P.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{I={at:_,records:j&&j.records||[]}}).catch(()=>{I={at:_,records:[]}})),(!H||_-H.at>T)&&P.push(fetch("/admin/themes",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{H={at:_,records:j&&j.themes||[],active:j&&j.active||""}}).catch(()=>{H={at:_,records:[],active:""}})),P.length&&await Promise.all(P)}let a={actions:5,pages:5,messages:4};async function m(){await i();let _=C.trim(),P={action:e(_),route:w(_),setting:s(_),theme:b(_),message:r(_),user:t(_)};y=[],M=[],$.forEach(j=>{let z=j.types.reduce((X,Z)=>X.concat(P[Z]||[]),[]).sort((X,Z)=>Z.score-X.score).slice(0,a[j.id]||5);z.length&&(M.push({id:j.id,labelKey:j.labelKey,from:y.length,count:z.length}),y=y.concat(z))}),E=0,k()}function S(_){return _.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[_.type]||"\xB7"}function k(){if(!y.length){D.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let _=[];M.forEach(P=>{_.push(`<li class="admin-cmdk-group" role="presentation">${g(ServerI18n.t(P.labelKey))}</li>`);for(let j=P.from;j<P.from+P.count;j++){let z=y[j],X=j===E;_.push(`
        <li class="admin-cmdk-row ${X?"is-active":""}"
            data-cmdk-idx="${j}" role="option" aria-selected="${X}">
          <span class="admin-cmdk-icon" aria-hidden="true">${g(S(z))}</span>
          <span class="admin-cmdk-label">${g(z.label)}</span>
          <span class="admin-cmdk-sub">${g(z.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${X?"\u21B5":""}</span>
        </li>`)}}),D.innerHTML=_.join("")}function L(){F||l(),F.removeAttribute("hidden"),F.setAttribute("aria-hidden","false"),F.classList.add("is-open"),C="",R.value="",m(),setTimeout(()=>R.focus(),20)}function O(){F&&(F.setAttribute("hidden",""),F.setAttribute("aria-hidden","true"),F.classList.remove("is-open"))}function K(){return!!(F&&!F.hasAttribute("hidden"))}window.AdminCommandPalette={open:L,close:O,isOpen:K,toggle:()=>K()?O():L()}})()});var mn=ye(()=>{(function(){"use strict";let h="sec-sessions-overview";var v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},u={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function $(l){if(l=Number(l)||0,l<=0)return"\u2014";var o=Math.floor(l/3600),n=Math.floor(l%3600/60),f=l%60;return o>0?o+"h "+n+"m":n>0?n+"m":f+"s"}function B(l){if(!l)return"\u2014";try{var o=typeof l=="number"?new Date(l<1e12?l*1e3:l):new Date(l);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(l)}}function A(){return'<div id="'+h+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function U(){return'<div class="admin-sessions-th"><span>'+v(ServerI18n.t("sessionsColSession"))+"</span><span>"+v(ServerI18n.t("sessionsColMessages"))+"</span><span>"+v(ServerI18n.t("sessionsColViewers"))+"</span><span>"+v(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function N(l){return l.name||ServerI18n.t("sessionsFallbackName",{id:(l.id||"").slice(0,12)})}function F(){var l=document.getElementById("admin-sessions-table-body");if(l){if(u.loading){window.AdminSkeletons?(l.innerHTML="",l.appendChild(window.AdminSkeletons.listRows({rows:5}))):l.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!u.sessions.length){l.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",l.appendChild(o);return}var n=u.sessions.map(function(f){var p=v(f.id||"");return'<div class="admin-sessions-tr'+(f.is_live?" is-live":"")+'" data-session-id="'+p+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(f.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+v(N(f))+'<span class="admin-sessions-td-sub">'+v(B(f.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(f.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(f.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+v($(f.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+p+'">'+v(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");l.innerHTML=U()+n}}var R=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function D(){var l=document.querySelector("[data-sessions-export]");if(l){if(!u.exportId){l.hidden=!0,l.innerHTML="";return}var o=u.sessions.find(function(f){return f.id===u.exportId});if(!o){u.exportId=null,l.hidden=!0,l.innerHTML="";return}var n=R.map(function(f){return'<button type="button" class="admin-sx-export__seg'+(f.id===u.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+f.id+'" aria-pressed="'+(f.id===u.exportFormat?"true":"false")+'">'+v(ServerI18n.t(f.labelKey))+"</button>"}).join("");l.hidden=!1,l.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+v(ServerI18n.t("sessionsExportTitle",{name:N(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+v(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+n+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(u.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+v(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+v(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+v(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+v(ServerI18n.t("sessionsDownloadBtn",{fmt:u.exportFormat.toUpperCase()}))+"</button></div>"}}function C(){if(u.exportId){var l="/admin/sessions/"+encodeURIComponent(u.exportId)+"/export?format="+encodeURIComponent(u.exportFormat)+"&include_pii="+(u.exportPii?"1":"0"),o=document.createElement("a");o.href=l,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function y(){var l=u.exportId;if(l)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(l)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var n=await o.json(),f=(n.records||[]).slice(0,500);if(!f.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var p=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:f,speedMultiplier:1})});if(p.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function M(){F(),D()}async function E(){u.loading=!0,F();try{var[l,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),n=[],f=[];if(l.ok){var p=await l.json();n=Array.isArray(p.sessions)?p.sessions:[],n.forEach(function(t){t._explicit=!0})}if(o.ok){var w=await o.json();f=Array.isArray(w.sessions)?w.sessions:[]}var d=n.slice(),s=new Set(n.map(function(t){return t.id}));f.forEach(function(t){s.has(t.id)||d.push(t)}),d.sort(function(t,i){var a=typeof t.started_at=="number"?t.started_at:Date.parse(t.started_at||0),m=typeof i.started_at=="number"?i.started_at:Date.parse(i.started_at||0);return m-a});try{var r=await fetch("/admin/session/current",{credentials:"same-origin"});if(r.ok){var b=await r.json();if(b.status==="live"){var e=Object.assign({},b,{id:b.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});d.unshift(e)}}}catch{}u.sessions=d,u.total=d.length}catch(t){console.error("[admin-sessions] fetch error:",t),u.sessions=[],u.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:t.message||""}),!1)}finally{u.loading=!1,M()}}function x(l){l&&(window.location.hash="#/session-detail?id="+encodeURIComponent(l))}function I(l){u.exportId=l,D();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function H(){var l=document.getElementById(h);l&&(l.addEventListener("click",function(o){var n=o.target.closest("[data-sessions-export-open]");if(n){o.stopPropagation(),I(n.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){u.exportId=null,D();return}var f=o.target.closest("[data-sessions-export-fmt]");if(f){u.exportFormat=f.dataset.sessionsExportFmt,D();return}if(o.target.closest("[data-sessions-replay]")){y();return}if(o.target.closest("[data-sessions-download]")){C();return}var p=o.target.closest(".admin-sessions-tr");p&&x(p.dataset.sessionId||null)}),l.addEventListener("change",function(o){var n=o.target.closest("[data-sessions-export-pii]");n&&(u.exportPii=!!n.checked)}),l.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var n=o.target.closest(".admin-sessions-tr");n&&(o.preventDefault(),x(n.dataset.sessionId||null))}}))}function T(){var l=document.querySelector(".admin-dash-grid"),o=document.getElementById(h);if(!(!l||!o)){var n=l.dataset.activeLeaf||"dashboard";o.style.display=n==="sessions"?"":"none"}}function g(){var l=document.getElementById("settings-grid");!l||document.getElementById(h)||(l.insertAdjacentHTML("beforeend",A()),H(),E(),T())}function c(){if(window.DANMU_CONFIG?.session?.logged_in){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&g(),T()});l.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",function(){g(),T()}),g()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var pn=ye(()=>{(function(){"use strict";let h="sec-session-detail-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(S){return String(S).replace(/[&<>"']/g,function(k){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]})},u={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},$=!1,B={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function A(){let S=window.location.hash||"",k=S.indexOf("?");if(k===-1)return null;let L=S.slice(k+1);return new URLSearchParams(L).get("id")||null}function U(S){if(!S)return"\u2014";try{let k=new Date(S);if(isNaN(k.getTime()))return String(S);let L=O=>String(O).padStart(2,"0");return`${k.getFullYear()}-${L(k.getMonth()+1)}-${L(k.getDate())} ${L(k.getHours())}:${L(k.getMinutes())}:${L(k.getSeconds())}`}catch{return String(S)}}function N(S){if(!S||S<0)return"\u2014";let k=Math.round(Number(S)),L=Math.floor(k/3600),O=Math.floor(k%3600/60),K=k%60;return L>0?`${L}h ${O}m ${K}s`:O>0?`${O}m ${K}s`:`${K}s`}function F(S,k){if(!S||!k)return"";try{let L=Math.max(0,Math.round((new Date(S)-new Date(k))/1e3)),O=Math.floor(L/60),K=L%60;return`+${String(O).padStart(2,"0")}:${String(K).padStart(2,"0")}`}catch{return""}}function R(S){let k=Number(S);return isNaN(k)?"\u2014":k.toLocaleString()}function D(S){if(!S)return"#64748b";let k=0;for(let O=0;O<S.length;O++)k=k*31+S.charCodeAt(O)>>>0;return`hsl(${k%360}, 60%, 60%)`}function C(){return`
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
    `}async function y(S){if(!S){T(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let k=await fetch(`/admin/sessions/${encodeURIComponent(S)}`,{credentials:"same-origin"});if(k.status===404&&(k=await fetch(`/admin/session/archive/${encodeURIComponent(S)}`,{credentials:"same-origin"})),!k.ok)throw new Error(`HTTP ${k.status}`);let L=await k.json();u.session=L.session||null,u.records=L.records||[],u.density=L.density||[],H(!1),g(),M()}catch(k){H(!1),T(ServerI18n.t("sessionDetailErrLoadFailed",{msg:k.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function M(){if(u.sessionId)try{let S=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(u.sessionId)}`,{credentials:"same-origin"});if(!S.ok)return;let k=await S.json();u.annotations=Array.isArray(k.annotations)?k.annotations:[],p()}catch{}}function E(){let S=u.session;if(!S)return 0;if(S.duration_s)return Math.round(S.duration_s*1e3);if(S.duration)return Math.round(S.duration*1e3);let k=S.started_at||S.start_time,L=S.ended_at||S.end_time;if(k&&L)try{return Math.max(0,new Date(L)-new Date(k))}catch{return 0}return u.density&&u.density.length?u.density.length*60*1e3:0}function x(S){let k=Date.parse(S||0);if(Number.isNaN(k))return"\u2014";let L=new Date(k),O=K=>String(K).padStart(2,"0");return`${O(L.getHours())}:${O(L.getMinutes())}:${O(L.getSeconds())}`}function I(S){let k=Math.floor(S/1e3),L=Math.floor(k/3600),O=Math.floor(k%3600/60),K=k%60,_=P=>String(P).padStart(2,"0");return L>0?`${_(L)}:${_(O)}:${_(K)}`:`${_(O)}:${_(K)}`}function H(S){u.loading=S;let k=document.querySelector("[data-sd-loading]"),L=document.querySelector("[data-sd-error]");k&&(k.hidden=!S),L&&S&&(L.hidden=!0);let O=document.querySelector("[data-sd-timeline-wrap]");if(O&&window.AdminSkeletons){let K=O.querySelector("[data-sd-timeline-skel]");S?(O.hidden=!1,K||(K=window.AdminSkeletons.chart(),K.setAttribute("data-sd-timeline-skel","1"),O.appendChild(K))):K&&K.remove()}}function T(S){u.error=S;let k=document.querySelector("[data-sd-error]"),L=document.querySelector("[data-sd-error-msg]");k&&(k.hidden=!1),L&&(L.textContent=S),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(O){let K=document.querySelector(`[${O}]`);K&&(K.hidden=!0)})}function g(){c(),l(),o(),f(),p();let S=document.querySelector("[data-sd-error]");S&&(S.hidden=!0)}function c(){let S=u.session,k=document.querySelector("[data-sd-session-header]");if(!k)return;k.hidden=!1;let L=document.querySelector("[data-sd-session-id]"),O=document.querySelector("[data-sd-meta-start]"),K=document.querySelector("[data-sd-meta-duration]"),_=document.querySelector("[data-sd-title]"),P=S&&(S.session_id||S.id)||u.sessionId||"\u2014";L&&(L.textContent=P),O&&(O.textContent=U(S&&(S.started_at||S.start_time))),K&&(K.textContent=N(S&&(S.duration_s||S.duration))),_&&(_.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(P).slice(-8)}))}function l(){let S=u.session;if(!S)return;let k=document.querySelector("[data-sd-kpis]");k&&(k.hidden=!1);let L=function(P,j,z){let X=document.querySelector(`[data-sd-stat="${P}"]`);X&&(X.textContent=j);let Z=document.querySelector(`[data-sd-stat-sub="${P}"]`);Z&&(Z.textContent=z||"")};L("msg_count",R(S.msg_count)),L("viewer_count",R(S.viewer_count));let O=Array.isArray(u.density)?u.density:[];if(O.length){let P=0,j=0;O.forEach(function(Z,V){Z>P&&(P=Z,j=V)});let z=Date.parse(S.started_at||S.start_time||0),X="";if(!Number.isNaN(z)){let Z=new Date(z+j*6e4),V=ee=>String(ee).padStart(2,"0");X=`${V(Z.getHours())}:${V(Z.getMinutes())}`}L("peak",R(P),X)}else L("peak","\u2014","");let K=Number(S.blocked_count)||0;L("blocked",R(K));let _=document.querySelector("[data-sd-blocked-btn]");_&&(_.textContent=ServerI18n.t("sessionDetailStatBlocked")+(K?" "+K:""),_.disabled=K===0)}function o(){let S=document.querySelector("[data-sd-timeline-wrap]"),k=document.querySelector("[data-sd-timeline]"),L=document.querySelector("[data-sd-timeline-axis]"),O=document.querySelector("[data-sd-peak-label]");if(!S||!k||!L)return;let K=u.density;if(!K||K.length===0){S.hidden=!0;return}S.hidden=!1;let _=Math.max(1,...K),P=0;K.forEach(function(ee,W){ee>K[P]&&(P=W)});let j=K.map(function(ee,W){let Q=Math.max(2,Math.round(ee/_*100));return`<div class="admin-sd-bar${W===P?" is-peak":""}" style="height:${Q}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ee,minute:W+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ee})}"></div>`}).join("");k.innerHTML=j;let z=u.session,X=U(z&&(z.started_at||z.start_time)).slice(11,16)||"00:00",Z=U(z&&(z.ended_at||z.end_time)).slice(11,16)||"",V=K.length>2?`+${Math.round(K.length/2)}min`:"";L.innerHTML=`
      <span class="admin-sd-axis-label">${v(X)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${v(V)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${v(Z)}</span>
    `,O&&(O.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:K[P],minute:P}))}function n(){let S=(u.msgQuery||"").trim().toLowerCase();return u.records.filter(function(k){let L=(k.status||"shown")==="blocked";return u.msgFilter==="blocked"&&!L?!1:S?String(k.text||"").toLowerCase().indexOf(S)!==-1||String(k.nickname||"").toLowerCase().indexOf(S)!==-1:!0})}function f(){let S=document.querySelector("[data-sd-msgs-wrap]"),k=document.querySelector("[data-sd-msgs-list]");if(!S||!k)return;if(!u.records.length){S.hidden=!0;return}S.hidden=!1;let L=n().slice(0,300);if(!L.length){k.innerHTML='<div class="admin-sd-msgs-empty">'+v(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}k.innerHTML=L.map(function(O){let K=(O.status||"shown")==="blocked",_=D(O.fingerprint||O.fp||""),P=x(O.timestamp||O.created_at),j=String(O.nickname||"").trim();return`
        <div class="admin-sd-msg-row${K?" is-blocked":""}">
          <span class="admin-sd-msg-time">${v(P)}</span>
          <span class="admin-sd-msg-dot" style="background:${_}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${v(O.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${v(ServerI18n.t("deliveryStatus_"+(O.status||"shown")))}
            ${O.delivery_reason?`<span class="admin-sd-msg-rule">${v(ServerI18n.t("deliveryReason_"+O.delivery_reason))}</span>`:""}
            ${K&&O.blockedBy?`<span class="admin-sd-msg-rule">${v(ServerI18n.t("sessionDetailBlockedBy",{rule:O.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${v(j||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function p(){let S=u.annotations||[],k=E(),L=document.querySelector("[data-sd-ann-count]");L&&(L.textContent=S.length?`${S.length} ANNOTATIONS`:"");let O=document.querySelector("[data-sd-ann-head]");O&&(O.textContent=S.length?`ANNOTATIONS \xB7 ${S.length}`:"ANNOTATIONS");let K=document.querySelector("[data-sd-ann-layer]");K&&(!k||S.length===0?K.innerHTML="":K.innerHTML=S.map(function(j){let z=B[j.label]||B.note,X=Math.min(100,Math.max(0,j.ts_ms/k*100)),Z=j.id===u.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${z.shape}${Z?" is-active":""}"
              data-sd-ann-marker="${v(j.id)}"
              style="left:${X.toFixed(2)}%;--ann-color:${z.color}"
              title="${v(z.label)} \xB7 ${I(j.ts_ms)}"
              aria-label="${v(z.label)} at ${I(j.ts_ms)}: ${v(j.note||"")}">
              ${z.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${Z?`<span class="admin-sd-ann-tip"><span style="color:${z.color}">${z.icon}</span> ${v((j.note||"").slice(0,40))}${(j.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let _=document.querySelector("[data-sd-ann-legend]");_&&(_.innerHTML=Object.keys(B).map(function(j){let z=B[j],X=z.shape==="square"?"2px":z.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${z.color};border-radius:${X}"></span>
          <span class="admin-sd-ann-legend-label">${z.label}</span>
        </span>`}).join(""));let P=document.querySelector("[data-sd-ann-list]");if(P){if(S.length===0){P.innerHTML="";let j=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});j.dataset.emptyKind="session-annotations",P.appendChild(j);return}P.innerHTML=S.map(function(j){let z=B[j.label]||B.note,X=j.id===u.activeAnnId,V=(j.note||"").length>80?(j.note||"").slice(0,80)+"\u2026":j.note||"";return`
        <div class="admin-sd-ann-row${X?" is-active":""}" data-sd-ann-row="${v(j.id)}">
          <span class="admin-sd-ann-ts" style="color:${z.color}">${I(j.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${z.color}">${z.icon} ${z.label}</span>
          <span class="admin-sd-ann-note">${v(V)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${v(j.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function w(S){if(!u.sessionId)return;let k=window.HudConfirm;if(!k){let z=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:I(S)}),"");z!=null&&z.trim()&&d(S,"note",z.trim());return}let O="highlight",K="",_=document.createElement("div");_.className="admin-sd-ann-modal-body",_.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${I(S)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(B).map(function(z){let X=B[z];return`
              <button type="button" class="admin-sd-ann-modal-lbl${z==="highlight"?" is-active":""}"
                data-ann-label="${z}" style="--ann-color:${X.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${X.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${X.label}</span>
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
      </div>`,_.addEventListener("click",function(z){let X=z.target.closest("[data-ann-label]");X&&(O=X.dataset.annLabel,_.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(Z){Z.classList.toggle("is-active",Z===X)}))});let P=_.querySelector("[data-ann-modal-note]"),j=_.querySelector("[data-ann-modal-counter]");P.addEventListener("input",function(){K=P.value,j.textContent=`${K.length} / 280`}),setTimeout(function(){P&&P.focus()},50),k.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:_,width:460}).then(function(z){z&&d(S,O,P.value.trim())})}async function d(S,k,L){if(u.sessionId)try{let O=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:u.sessionId,ts_ms:Math.max(0,Math.round(S)),label:k||"note",note:L||""})});if(!O.ok)throw new Error(`HTTP ${O.status}`);let K=await O.json();K.annotation&&(u.annotations.push(K.annotation),u.annotations.sort(function(_,P){return _.ts_ms-P.ts_ms}),u.activeAnnId=K.annotation.id,p(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(O){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:O.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function s(S){if(S)try{let k=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(S)}`,{method:"DELETE",credentials:"same-origin"});if(!k.ok)throw new Error(`HTTP ${k.status}`);u.annotations=u.annotations.filter(function(L){return L.id!==S}),u.activeAnnId===S&&(u.activeAnnId=null),p(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(k){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:k.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function r(S){let k=document.querySelector("[data-sd-timeline-inner]"),L=document.querySelector("[data-sd-ann-hover]");if(!k||!L)return;let O=k.getBoundingClientRect();if(!O.width)return;let K=S.clientX-O.left,_=Math.min(1,Math.max(0,K/O.width)),P=E();if(!P){L.hidden=!0;return}let j=Math.round(_*P);u.hoverTsMs=j,L.hidden=!1,L.style.left=`${(_*100).toFixed(2)}%`,L.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:I(j)})}function b(){let S=document.querySelector("[data-sd-ann-hover]");S&&(S.hidden=!0),u.hoverTsMs=null}function e(S){if(S.target.closest("[data-sd-ann-marker]"))return;let k=document.querySelector("[data-sd-timeline-inner]");if(!k)return;let L=k.getBoundingClientRect();if(!L.width)return;let O=S.clientX-L.left,K=Math.min(1,Math.max(0,O/L.width)),_=E();_&&w(Math.round(K*_))}async function t(){if(u.sessionId)try{let S=u.records.slice(0,500);if(!S.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let k=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:S,speedMultiplier:1})});if(k.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!k.ok)throw new Error("HTTP "+k.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function i(S,k){if(S==="back")window.location.hash="#/history/sessions";else if(S==="retry")u.sessionId&&y(u.sessionId);else if(S==="export"){if(!u.sessionId)return;let L=document.createElement("a");L.href="/admin/sessions/"+encodeURIComponent(u.sessionId)+"/export?format=csv",L.rel="noopener",document.body.appendChild(L),L.click(),L.remove()}else if(S==="replay")t();else if(S==="add-annotation"){let L=E(),O=u.hoverTsMs!=null?u.hoverTsMs:Math.round(L/2);w(O)}}function a(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let k=A();if(!k){u.sessionId=null,T(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}u.sessionId=k,y(k)}function m(){let S=document.getElementById("settings-grid");if(!S)return;let k=document.getElementById(h);k||(S.insertAdjacentHTML("beforeend",C()),k=document.getElementById(h),p()),k&&k.dataset.sdBound!=="1"&&(k.dataset.sdBound="1",k.addEventListener("click",function(L){let O=L.target.closest("[data-sd-ann-del]");if(O){L.stopPropagation(),s(O.dataset.sdAnnDel);return}let K=L.target.closest("[data-sd-ann-marker]");if(K){L.stopPropagation(),u.activeAnnId=K.dataset.sdAnnMarker,p();let X=document.querySelector(`[data-sd-ann-row="${u.activeAnnId}"]`);X&&X.scrollIntoView&&X.scrollIntoView({block:"nearest",behavior:"smooth"});return}let _=L.target.closest("[data-sd-ann-row]");if(_){u.activeAnnId=_.dataset.sdAnnRow,p();return}if(L.target.closest("[data-sd-timeline-inner]")){e(L);return}let j=L.target.closest("[data-sd-action]");if(j){L.preventDefault(),i(j.dataset.sdAction,j);return}let z=L.target.closest("[data-sd-filter]");z&&(u.msgFilter=z.dataset.sdFilter,k.querySelectorAll("[data-sd-filter]").forEach(function(X){X.classList.toggle("is-active",X===z)}),f())}),k.addEventListener("input",function(L){let O=L.target.closest("[data-sd-search]");O&&(u.msgQuery=O.value||"",f())}),k.addEventListener("mousemove",function(L){L.target.closest("[data-sd-timeline-inner]")&&r(L)}),k.addEventListener("mouseleave",function(L){L.target.closest&&L.target.closest("[data-sd-timeline-inner]")&&b()},!0)),u.sessionId=A(),u.sessionId?y(u.sessionId):T(ServerI18n.t("sessionDetailErrNoSessionSelected")),$||($=!0,window.addEventListener("hashchange",a))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&m()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let k=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(h)&&k.indexOf("/session-detail")!==-1&&m(),window.addEventListener("admin-route-changed",function(L){(L&&L.detail&&L.detail.route)==="session-detail"&&m()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&m()})})})()});var fn=ye(()=>{(function(){"use strict";let h="sec-search-overview";var v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(f){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[f]})},u=20,$={query:"",scope:"session",blockedOnly:!1,who:"",shown:u,results:[],total:0,loading:!1,searched:!1},B=0;function A(){return'<div id="'+h+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+v(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+v(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+v(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+v(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+v(ServerI18n.t("searchWhoAria"))+'"><option value="">'+v(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+v(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+v(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function U(n){if(!n)return 200;for(var f=0,p=0;p<Math.min(n.length,6);p++)f=f*31+n.charCodeAt(p)&65535;return f%360}function N(n,f){if(!f||!n)return v(n||"");var p=v(n),w=v(f);try{var d=new RegExp("("+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return p.replace(d,'<mark class="admin-search-hit">$1</mark>')}catch{return p}}function F(n){if(!n)return"\u2014";try{var f=new Date(n);return f.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return n}}function R(){var n=$.results;return $.blockedOnly&&(n=n.filter(function(f){return(f.status||"shown")==="blocked"})),$.who&&(n=n.filter(function(f){return(f.nickname||"")===$.who})),n}function D(){var n=document.getElementById("admin-search-count");if(n){if(!$.searched||!$.query.trim()){n.textContent="";return}n.textContent=ServerI18n.t("searchResultCount",{n:R().length})}}function C(){var n=document.querySelector("[data-search-who]");if(n){var f=[];$.results.forEach(function(w){var d=(w.nickname||"").trim();d&&f.indexOf(d)===-1&&f.push(d)}),f.sort();var p=$.who;n.innerHTML='<option value="">'+v(ServerI18n.t("searchWhoAnyone"))+"</option>"+f.map(function(w){return'<option value="'+v(w)+'"'+(w===p?" selected":"")+">"+v(w)+"</option>"}).join("")}}function y(){var n=document.getElementById("admin-search-results"),f=document.getElementById("admin-search-empty-state"),p=document.getElementById("admin-search-export-btn");if(n){n.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var w=function(e){f&&(f.style.display="block",f.textContent=e),p&&(p.hidden=!0)};if($.loading)return w(ServerI18n.t("searchSearching"));if(!$.searched)return w(ServerI18n.t("searchPromptStart"));var d=R();if(d.length===0)return w(ServerI18n.t("searchNoMatch"));f&&(f.style.display="none"),p&&(p.hidden=!1);var s=Math.min(d.length,$.shown),r=document.createDocumentFragment();if(d.slice(0,s).forEach(function(e){var t=document.createElement("div");t.className="admin-search-row",t.innerHTML='<span class="admin-search-row__ts">'+v(F(e.timestamp))+'</span><span class="admin-search-row__text">'+N(e.text||"",$.query)+'</span><span class="admin-search-row__nick">'+v((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+v(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+v(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",r.appendChild(t)}),n.appendChild(r),d.length>s){var b=document.createElement("button");b.type="button",b.className="admin-search-more",b.dataset.searchMore="1",b.textContent=ServerI18n.t("searchMoreLeft",{n:d.length-s}),n.appendChild(b)}}}function M(){D(),C(),y()}async function E(){var n=$.query.trim();if(!n){$.loading=!1,$.searched=!1,$.results=[],$.total=0,M();return}$.loading=!0,M();try{var f="/admin/search?q="+encodeURIComponent(n);if($.scope==="session"){var p=await I();p&&(f+="&since="+encodeURIComponent(p))}var w=Date.now(),d=await fetch(f,{credentials:"same-origin"}),s=Date.now()-w;if(!d.ok)throw new Error("HTTP "+d.status);var r=await d.json();$.results=Array.isArray(r.results)?r.results:[],$.total=typeof r.total=="number"?r.total:$.results.length,$.shown=u}catch(b){console.error("[admin-search] fetch error:",b),$.results=[],$.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:b.message||""}),!1)}finally{$.loading=!1,$.searched=!0,M()}}var x=null;async function I(){if(x!==null)return x;try{var n=await fetch("/admin/session/current",{credentials:"same-origin"});if(n.ok){var f=await n.json();if(f.status==="live"&&f.started_at)return x=new Date(f.started_at*1e3).toISOString(),x}}catch{}return x="",""}function H(){clearTimeout(B),B=setTimeout(E,300)}function T(){if($.results.length){var n=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];$.results.forEach(function(d){var s=[d.nickname||"",d.fingerprint||"",d.timestamp||"",d.status||"",d.text||"",d.delivery_reason||""].map(function(r){return'"'+window.AdminUtils.csvSafeText(r).replace(/"/g,'""')+'"'});n.push(s.join(","))});var f=new Blob(["\uFEFF"+n.join(`
`)],{type:"text/csv;charset=utf-8"}),p=URL.createObjectURL(f),w=document.createElement("a");w.href=p,w.download="danmu-search-"+($.query||"export")+".csv",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(p)}}function g(){var n=document.getElementById(h);if(n){var f=document.getElementById("admin-search-input");f&&(f.addEventListener("input",function(){$.query=f.value,H()}),f.addEventListener("keydown",function(w){w.key==="Enter"&&(clearTimeout(B),$.query=f.value,E())})),n.addEventListener("click",function(w){var d=w.target.closest("[data-search-scope]");if(d){$.scope=d.dataset.searchScope,n.querySelectorAll("[data-search-scope]").forEach(function(r){r.classList.toggle("is-active",r===d)}),$.query.trim()&&H();return}var s=w.target.closest("[data-search-blocked]");if(s){$.blockedOnly=!$.blockedOnly,s.classList.toggle("is-active",$.blockedOnly),$.shown=u,M();return}if(w.target.closest("[data-search-more]")){$.shown+=u,y();return}}),n.addEventListener("change",function(w){var d=w.target.closest("[data-search-who]");d&&($.who=d.value||"",$.shown=u,M())});var p=document.getElementById("admin-search-export-btn");p&&p.addEventListener("click",T)}}function c(){var n=document.querySelector(".admin-dash-grid"),f=document.getElementById(h);if(!(!n||!f)){var p=n.dataset.activeLeaf||"dashboard";f.style.display=p==="search"?"":"none"}}function l(){var n=document.getElementById("settings-grid");!n||document.getElementById(h)||(n.insertAdjacentHTML("beforeend",A()),g(),c())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var n=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&l(),c()});n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",c),document.addEventListener("admin-panel-rendered",function(){l(),c()}),l()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var vn=ye(()=>{(function(){"use strict";let h="sec-api-tokens-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},u=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],$=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],B={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function A(e){if(!e)return"\u2014";try{let t=new Date(e);if(isNaN(t.getTime()))return String(e);let i=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${i(t.getMonth()+1)}-${i(t.getDate())}`}catch{return String(e)}}function U(e){if(!e)return null;try{let t=new Date(e);if(isNaN(t.getTime()))return null;let i=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${i(t.getMonth()+1)}-${i(t.getDate())} ${i(t.getHours())}:${i(t.getMinutes())}`}catch{return null}}function N(e){let t=Number(e);return isNaN(t)?"0":t.toLocaleString()}function F(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let t=new Date(e.expires_at).getTime(),i=Date.now();if(t<i)return"expired";if(t-i<168*3600*1e3)return"expiring"}catch{}return"active"}function R(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function D(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(t){let i="admin-ui-pill admin-at-scope-badge";return t==="admin:*"?i+=" is-danger":t.startsWith("fire:")?i+=" is-warn":t.startsWith("read:stats")?i+=" is-cyan":i+=" is-success",`<span class="${i}">${v(t)}</span>`}).join(" ")}function C(e){let t="admin-ui-dot admin-at-dot";return e==="active"?t+=" is-success":e==="expiring"?t+=" is-warn":e==="expired"?t+=" is-danger":t+=" is-muted",`<span class="${t}" aria-hidden="true"></span>`}function y(){let e=u.map(function(i){let a=i.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",S=`admin-ui-pill admin-at-scope-badge is-${i.badge==="red"?"danger":i.badge==="amber"?"warn":i.badge==="green"?"success":i.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${i.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${i.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${v(i.id)}"
          >
          <span class="${S}">${v(i.badgeTxt)}</span>
          <span class="admin-at-scope-label">${v(ServerI18n.t(i.labelKey))}</span>
          ${a}
        </label>
      `}).join(""),t=$.map(function(i){let a=i.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${i.days!==null?String(i.days):"null"}" ${a} class="sr-only">
          <span>${v(ServerI18n.t(i.labelKey))}</span>
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
                    ${e}
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
    `}async function M(){H(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();B.tokens=t.tokens||t||[],g()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function E(e){B.creating=!0,T(!0),f();try{let t=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){let m=await t.json().catch(()=>({}));throw new Error(m.error||m.message||`HTTP ${t.status}`)}let i=await t.json(),a=i.token||i.raw_token||i.access_token||null;B.newTokenRaw=a,c(a),o(),await M(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(t){n(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:t.message||""}),!1)}finally{B.creating=!1,T(!1)}}async function x(e,t){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${v(t||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let a=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){let m=await a.json().catch(()=>({}));throw new Error(m.error||m.message||`HTTP ${a.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await M()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:a.message||""}),!1)}}async function I(e,t){try{let i=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!i.ok){let a=await i.json().catch(()=>({}));throw new Error(a.error||a.message||`HTTP ${i.status}`)}window.showToast&&window.showToast(t?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await M()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:i.message||""}),!1)}}function H(e){let t=document.querySelector("[data-at-list-loading]");t&&(t.hidden=!e)}function T(e){let t=document.getElementById("adminAtSubmitBtn");t&&(t.disabled=e,t.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function g(){let e=B.tokens,t=document.querySelector("[data-at-empty]"),i=document.querySelector("[data-at-table-wrap]"),a=document.querySelector("[data-at-tbody]");if(!(!t||!i||!a)){if(!e||e.length===0){if(!t.firstElementChild&&window.AdminEmpty){let m=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});m.dataset.emptyKind="api-tokens",t.appendChild(m)}t.hidden=!1,i.hidden=!0;return}t.hidden=!0,i.hidden=!1,a.innerHTML=e.map(function(m){let S=F(m),k=C(S),L=m.scopes||m.scope||[],O=Array.isArray(L)?L:String(L).split(",").map(X=>X.trim()).filter(Boolean),_=R(m.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",P=S==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",j=S==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",z=m.last_used_at?`${U(m.last_used_at)||A(m.last_used_at)}<br><span class="admin-at-ip">${v(m.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${v(m.id||m.token_id||"")}">
          <td class="admin-at-td-label">
            ${k}
            <span class="admin-at-label-text">${v(m.label||m.name||"\u2014")}</span>
            ${_}${P}${j}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${v(m.prefix||m.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${D(O)}</div>
          </td>
          <td class="admin-at-td-used">${z}</td>
          <td class="admin-at-td-usage">${N(m.usage_count||m.use_count)}</td>
          <td class="admin-at-td-created">${A(m.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${v(m.id||m.token_id||"")}"
              data-token-enabled="${m.enabled===!1?"0":"1"}"
              title="${m.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${m.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${v(m.id||m.token_id||"")}"
              data-token-label="${v(m.label||m.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function c(e){let t=document.getElementById("adminAtSuccessBanner"),i=document.getElementById("adminAtTokenDisplay"),a=document.getElementById("adminAtCreateForm");t&&(t.hidden=!1),i&&e&&(i.value=e),a&&(a.style.opacity="0.5"),t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}function l(){let e=document.getElementById("adminAtSuccessBanner"),t=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),t&&(t.style.opacity=""),B.newTokenRaw=null}function o(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(a){a.classList.remove("is-active")});let t=document.querySelector("input[name='adminAtExpiry'][value='90']");if(t){t.checked=!0;let a=t.closest(".admin-at-expiry-btn");a&&a.classList.add("is-active")}let i=document.getElementById("adminAtAdminWarn");i&&(i.hidden=!0),f()}function n(e){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!1,t.textContent=e)}function f(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function p(){let e=document.getElementById("adminAtLabel"),t=e?e.value.trim():"",i=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(k){i.push(k.value)});let a=document.querySelector("input[name='adminAtExpiry']:checked"),m=a?a.value:"90",S=m==="null"?null:parseInt(m,10);return{label:t,scopes:i,expiry_days:S}}function w(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function d(e){if(e.preventDefault(),B.creating)return;f();let t=p(),i=w(t);if(i){n(i);return}E(t)}function s(){let e=B.newTokenRaw;if(!e)return;let t=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let i=document.getElementById("adminAtTokenDisplay");i&&(i.select(),document.execCommand("copy")),t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function r(){let e=document.getElementById(h);if(!e)return;e.addEventListener("click",function(m){let S=m.target.closest("[data-at-action]");if(S){let L=S.dataset.atAction;if(L==="revoke"){let O=S.dataset.tokenId,K=S.dataset.tokenLabel;x(O,K)}else if(L==="toggle"){let O=S.dataset.tokenId,K=S.dataset.tokenEnabled==="1";I(O,!K)}else L==="copy-token"&&s();return}let k=m.target.closest(".admin-at-expiry-btn");k&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(L){L.classList.remove("is-active")}),k.classList.add("is-active"))});let t=document.getElementById("adminAtScope_admin__");t&&t.addEventListener("change",function(){let m=document.getElementById("adminAtAdminWarn");m&&(m.hidden=!t.checked)});let i=document.getElementById("adminAtCreateForm");i&&i.addEventListener("submit",d);let a=document.querySelector("input[name='adminAtExpiry'][value='90']");if(a){let m=a.closest(".admin-at-expiry-btn");m&&m.classList.add("is-active")}}function b(){let e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",y()),r(),M())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&b()})})()});var hn=ye(()=>{(function(){"use strict";let h="sec-wcag-overview",v=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})};function u(o){let n=o.replace(/^#/,""),f=n.length===3?n.split("").map(function(p){return p+p}).join(""):n;return[parseInt(f.slice(0,2),16)/255,parseInt(f.slice(2,4),16)/255,parseInt(f.slice(4,6),16)/255]}function $(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function B(o){let n=u(o);return .2126*$(n[0])+.7152*$(n[1])+.0722*$(n[2])}function A(o,n){let f=B(o),p=B(n),w=Math.max(f,p),d=Math.min(f,p);return(w+.05)/(d+.05)}function U(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function N(o,n){let f=B(n),p=[],w=u(o);for(let d=.05;d<=.6&&p.length<3;d+=.05){let r="#"+w.map(function(e){return Math.min(1,e+d)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),b=A(r,n);b>=4.5&&p.push({hex:r,ratio:b})}return p}let F=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],R={fg:"#FB7185",bg:"#000000"},D="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",C={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function y(){let o=F.filter(function(p){return U(A(p.fg,p.bg))!=="fail"}).length,n=F.length-o,f=Math.round(o/F.length*100);return`
      <div id="${h}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${M("PASS AA+",o,ServerI18n.t("wcagStatPassLabel"))}
              ${M("BELOW AA",n,ServerI18n.t("wcagStatFailLabel"))}
              ${M("PAIRS",F.length,ServerI18n.t("wcagStatPairsLabel"))}
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
              ${F.map(function(p,w){return E(p,w)}).join("")}
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
      </div>`}function M(o,n,f){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${v(String(n))}</span>
        <span class="hud-stat-tile-label">${v(f)}</span>
      </div>`}function E(o,n){let f=A(o.fg,o.bg),p=U(f),w=C[p],d=ServerI18n.t(o.nameKey),s=w.labelKey?ServerI18n.t(w.labelKey):w.label,r=p==="fail"?ServerI18n.t("wcagWarnFail"):p==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${D}"
        data-wcag-pair-idx="${n}" role="button" tabindex="0"
        aria-label="${v(ServerI18n.t("wcagPairAriaLabel",{name:d,ratio:f.toFixed(2),level:s.slice(2)}))}">
        <span class="admin-wcag-pair-name">${v(d)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${v(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${v(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${v(o.fg)}">${v(o.fg)} / ${v(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${f.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${w.mod}">${s}</span>
        ${r?`<span class="admin-wcag-warn">\u26A0 ${r}</span>`:""}
      </div>`}function x(){let o=A(R.fg,R.bg),n=U(o),f=C[n],p=f.labelKey?ServerI18n.t(f.labelKey):f.label,w=N(R.fg,R.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${I(ServerI18n.t("wcagForegroundLabel"),R.fg,"fg")}
        ${I(ServerI18n.t("wcagBackgroundLabel"),R.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${v(R.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${v(R.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${v(R.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${v(R.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${f.mod}">${p}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${w.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${w.map(function(d){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${v(d.hex)}"
                title="${v(ServerI18n.t("wcagSuggApplyTitle",{ratio:d.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${v(R.bg)};color:${v(d.hex)}">${v(d.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${d.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function I(o,n,f){let p="wcag-tester-"+f;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${p}">${v(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${v(n)}"></span>
          <input type="text" id="${p}" class="admin-ui-input" data-wcag-tester-${f}
            aria-label="${v(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${v(n)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(o,n){return`<div class="admin-wcag-level ${n?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${n?"\u2713":"\u2717"}</span>
      <span>${v(o)}</span>
    </div>`}function T(){let o=document.getElementById(h);o&&(o.addEventListener("click",function(n){let f=n.target.closest("[data-wcag-pair-idx]");if(f){g(f);return}let p=n.target.closest("[data-wcag-sugg]");p&&(R.fg=p.dataset.wcagSugg,c())}),o.addEventListener("keydown",function(n){if(n.key!=="Enter"&&n.key!==" "&&n.key!=="Spacebar")return;let f=n.target.closest("[data-wcag-pair-idx]");f&&(n.preventDefault(),g(f))}),o.addEventListener("input",function(n){let f=n.target.closest("[data-wcag-tester-fg]"),p=n.target.closest("[data-wcag-tester-bg]");f&&/^#[0-9A-Fa-f]{6}$/.test(f.value)&&(R.fg=f.value.toUpperCase(),c()),p&&/^#[0-9A-Fa-f]{6}$/.test(p.value)&&(R.bg=p.value.toUpperCase(),c())}))}function g(o){let n=F[parseInt(o.dataset.wcagPairIdx,10)];n&&(R.fg=n.fg,R.bg=n.bg,c())}function c(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=x())}function l(){let o=document.getElementById("settings-grid");!o||document.getElementById(h)||(o.insertAdjacentHTML("beforeend",y()),T())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&l()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&l()})})()});var gn=ye(()=>{(function(){"use strict";let h="danmu.onboarding.done",v="admin-onboarding-root",A=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],U=0,N=!1;window.AdminOnboarding={start:y,isDone:function(){try{return!!localStorage.getItem(h)}catch{return!1}},reset:function(){try{localStorage.removeItem(h)}catch{}}};let F=new Set(["live","dashboard"]);function R(){if(N||window.AdminOnboarding.isDone()||!F.has(D()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{N||window.AdminOnboarding.isDone()||o()||F.has(D())&&y()},1200)}function D(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function C(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&y()}function y(){N||(N=!0,U=0,H())}function M(o){if(!N)return;N=!1,document.body.removeEventListener("click",x),document.removeEventListener("keydown",I),window.removeEventListener("resize",T);let n=document.getElementById(v);if(n&&n.remove(),o)try{localStorage.setItem(h,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function E(){U<A.length-1?(U++,T()):M(!0)}function x(o){let n=o.target.closest("[data-ob-action]");n&&(o.stopPropagation(),n.dataset.obAction==="next"?E():n.dataset.obAction==="skip"&&M(!1))}function I(o){N&&o.key==="Escape"&&(o.preventDefault(),M(!1))}function H(){let o=document.getElementById(v);o&&o.remove();let n=document.createElement("div");n.id=v,n.className="admin-ob-root",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","false"),n.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(n),document.body.addEventListener("click",x),document.addEventListener("keydown",I),window.addEventListener("resize",T),T()}function T(){let o=document.getElementById(v);if(!o)return;let n=A[U],f=A.length,p=c(n.target),w=window.innerWidth,d=window.innerHeight,s="";p?s='<div class="admin-ob-spot" style="left:'+(p.left-8)+"px;top:"+(p.top-8)+"px;width:"+(p.width+16)+"px;height:"+(p.height+16)+'px;"></div>':s='<div class="admin-ob-scrim"></div>';let r=(w-360)/2,b=d/2-110,e="none";if(p){let m=p.left+p.width/2;n.side==="top"?(r=m-360/2,b=p.top-16,e="bottom"):n.side==="right"?(r=p.right+16+8,b=p.top,e="left"):(r=m-360/2,b=p.bottom+16+8,e="top"),r=Math.max(16,Math.min(w-360-16,r))}let t=A.map(function(m,S){return'<span class="admin-ob-progress-item'+(S===U?" is-current":"")+'">'+(S+1)+" "+l(ServerI18n.t(m.labelKey))+"</span>"+(S<f-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=s+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+r+"px;top:"+b+'px"><div class="admin-ob-count">'+(U+1)+" / "+f+'</div><div class="admin-ob-title">'+l(ServerI18n.t(n.titleKey))+'</div><div class="admin-ob-body">'+l(ServerI18n.t(n.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+l(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+l(ServerI18n.t(U===f-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+t+"</div></div>";let i=o.querySelector(".admin-ob-bubble");if(!i||!p)return;let a=i.offsetHeight;if(n.side==="top")i.style.top=Math.max(16,p.top-16-8-a)+"px";else if(b+a>d-16){let m=p.top-16-8-a;m>=16?(i.style.top=m+"px",i.setAttribute("data-arrow","bottom")):(i.style.top=Math.max(16,d-a-16)+"px",i.setAttribute("data-arrow","none"))}g(i,p)}function g(o,n){let f=o.getAttribute("data-arrow");if(f==="none")return;let p=o.getBoundingClientRect(),w=f==="top"||f==="bottom",d=w?n.left+n.width/2-p.left:n.top+n.height/2-p.top,s=w?p.width:p.height,r=Math.max(16,Math.min(s-32,d-8));o.style.setProperty("--ob-arrow",r+"px")}function c(o){if(!o)return null;let n=document.querySelector(o);if(!n)return null;let f=n.getBoundingClientRect();return f.width<8||f.height<8||f.bottom<0||f.top>window.innerHeight?null:f}function l(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",C),C(),window.addEventListener("hashchange",function(){F.has(D())&&setTimeout(R,600)}),setTimeout(R,800))})})()});var En=ye(()=>{var es=Se(it()),ts=Se(st()),ns=Se(ot()),as=Se(rt()),is=Se(dt()),ss=Se(lt()),os=Se(ct()),rs=Se(ut()),ds=Se(mt()),ls=Se(pt()),cs=Se(ft()),us=Se(vt()),ms=Se(ht()),ps=Se(gt()),fs=Se(bt()),vs=Se(wt()),hs=Se(yt()),gs=Se(St()),bs=Se(kt()),ws=Se(It()),ys=Se(Tt()),Ss=Se(_t()),ks=Se(Et()),Is=Se($t()),Ts=Se(xt()),_s=Se(Lt()),Es=Se(At()),$s=Se(Ct()),xs=Se(Bt()),Ls=Se(Ft()),As=Se(Dt()),Cs=Se(Mt()),Bs=Se(Nt()),Fs=Se(Pt()),Ds=Se(Rt()),Ms=Se(Ot()),Ns=Se(qt()),Ps=Se(Ht()),Rs=Se(jt()),Os=Se(Ut()),qs=Se(Kt()),Hs=Se(Wt()),js=Se(Gt()),Us=Se(Vt()),Ks=Se(zt()),Ws=Se(Jt()),Gs=Se(Yt()),Vs=Se(Qt()),zs=Se(Xt()),Js=Se(Zt()),Ys=Se(en()),Qs=Se(tn()),Xs=Se(nn()),Zs=Se(an()),eo=Se(sn()),to=Se(on()),no=Se(rn()),ao=Se(dn()),io=Se(ln()),so=Se(cn()),oo=Se(un()),ro=Se(mn()),lo=Se(pn()),co=Se(fn()),uo=Se(vn()),mo=Se(hn()),po=Se(gn())});En();})();
