/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var yn=Object.create;var at=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var ye=(h,f)=>()=>{try{return f||h((f={exports:{}}).exports,f),f.exports}catch(u){throw f=0,u}};var _n=(h,f,u,E)=>{if(f&&typeof f=="object"||typeof f=="function")for(let C of kn(f))!Tn.call(h,C)&&C!==u&&at(h,C,{get:()=>f[C],enumerable:!(E=Sn(f,C))||E.enumerable});return h};var Se=(h,f,u)=>(u=h!=null?yn(In(h)):{},_n(f||!h||!h.__esModule?at(u,"default",{value:h,enumerable:!0}):u,h));var it=ye(()=>{(function(){"use strict";var h=4,f=2500,u=3e3,E=Object.create(null);function C(){return Date.now()}function L(_,$){return($?"ok:":"err:")+_}function U(_,$){return"var("+_+", "+$+")"}function M(_){return _?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function B(_){for(var $=Array.prototype.slice.call(_.children);$.length>h;){var I=$.shift();I&&I.parentNode&&I.parentNode.removeChild(I)}}function N(_,$){_.remaining=$,_.startedAt=C(),_.timer=setTimeout(function(){y(_)},$)}function F(_){_.timer&&(clearTimeout(_.timer),_.timer=null,_.remaining=Math.max(600,_.remaining-(C()-_.startedAt)))}function A(_){_.timer||!_.el.parentNode||N(_,_.remaining)}function y(_){clearTimeout(_.timer),_.timer=null,_.key&&E[_.key]===_&&delete E[_.key];var $=_.el;!$||!$.parentNode||($.style.opacity="0",$.style.transform="translateX(8px)",setTimeout(function(){$.parentNode&&$.parentNode.removeChild($)},180))}function D(_,$){var I=document.getElementById("toast-container");if(I){$=$!==!1;var H=L(String(_),$),T=E[H];if(T&&T.el.parentNode&&C()-T.startedAt<f){T.count+=1,T.countEl&&(T.countEl.textContent="\xD7"+T.count,T.countEl.hidden=!1),F(T),A(T);return}var g=$?U("--color-ink-success","#639922"):U("--color-ink-error","#e24b4a"),c=U("--color-surface","#ffffff"),r=U("--color-text-primary","#1a1a1a"),o=U("--color-border-soft","rgba(0,0,0,.12)"),n=document.createElement("div");n.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+c,"color:"+r,"border:1px solid "+o,"border-left:3px solid "+g,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var p=document.createElement("span");p.style.cssText="display:inline-flex;color:"+g+";flex:0 0 auto",p.innerHTML=M($);var m=document.createElement("span");m.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",m.textContent=_;var w=document.createElement("span");w.hidden=!0,w.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",n.appendChild(p),n.appendChild(m),n.appendChild(w),I.appendChild(n),B(I),requestAnimationFrame(function(){n.style.opacity="1",n.style.transform="translateX(0)"});var d={key:H,el:n,countEl:w,count:1,timer:null,remaining:u,startedAt:C()};E[H]=d,N(d,u),n.addEventListener("mouseenter",function(){F(d)}),n.addEventListener("mouseleave",function(){A(d)}),n.addEventListener("focusin",function(){F(d)}),n.addEventListener("focusout",function(){A(d)})}}window.showToast=D})()});var st=ye(()=>{(function(){"use strict";var h="admin-details-open-state";function f(){try{return JSON.parse(localStorage.getItem(h))||{}}catch{return{}}}function u(T){try{localStorage.setItem(h,JSON.stringify(T))}catch{}}var E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function C(T){return T==null?"":String(T).replace(/[&<>"']/g,function(g){return E[g]})}function L(){var T=document.querySelector("script[nonce]");return T&&T.nonce||""}function U(T,g){var c=L();return"<style"+(T?' id="'+C(T)+'"':"")+(c?' nonce="'+C(c)+'"':"")+">"+(g||"")+"</style>"}var M='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',B=[],N=null;function F(T){if(!T)return!1;for(var g=T,c=null;g&&g!==document.documentElement;c=g,g=g.parentElement)if(g.style&&g.style.display==="none"||g.tagName==="DETAILS"&&!g.open&&!(c&&c.tagName==="SUMMARY"))return!1;return!!(T.offsetParent||T.getClientRects().length)}function A(){var T=document.hidden;B.forEach(function(g){var c=typeof g.el=="function"?g.el():g.el,r=!T&&F(c);if(r&&!g.timer){if(g.immediate!==!1)try{g.tick()}catch{}g.timer=setInterval(g.tick,g.intervalMs)}else!r&&g.timer&&(clearInterval(g.timer),g.timer=0)})}function y(T){var g={el:T.el,intervalMs:T.intervalMs,tick:T.tick,immediate:T.immediate,timer:0};return B.push(g),N||(N=new MutationObserver(function(){A()}),N.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","open"]}),window.addEventListener("hashchange",A),document.addEventListener("visibilitychange",A),document.addEventListener("admin-panel-rendered",A)),A(),function(){g.timer&&clearInterval(g.timer);var r=B.indexOf(g);r!==-1&&B.splice(r,1)}}function D(T){let g=document.createElement("textarea");g.value=T,g.setAttribute("readonly",""),g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select();let c=!1;try{c=!!document.execCommand("copy")}catch{c=!1}return document.body.removeChild(g),c}function _(T,g){let c=n=>window.ServerI18n?window.ServerI18n.t(n):n,r=n=>(window.showToast&&window.showToast(n?g||c("sohCopied"):c("sohCopyFailed"),n),n);if(!T)return Promise.resolve(r(!1));let o=navigator.clipboard;return o&&typeof o.writeText=="function"?o.writeText(T).then(()=>r(!0),()=>r(D(T))):Promise.resolve(r(D(T)))}let $=/^[=+\-@\t\r\n]/;function I(T){let g=T==null?"":String(T);return typeof T=="string"&&$.test(g)?"'"+g:g}function H(T){let g=I(T);return/[",\r\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}window.AdminUtils={csvCell:H,csvSafeText:I,copyText:_,DETAILS_STATE_KEY:h,loadDetailsState:f,saveDetailsState:u,escapeHtml:C,cspNonce:L,styleTag:U,closeIcon:M,pollWhileVisible:y}})()});var ot=ye(()=>{(function(){"use strict";function h(f,u,E,C){let L=f.querySelector("[data-route-breadcrumb]");if(!L)return;let U=Array.from(f.querySelectorAll(".admin-dash-nav-row[data-route]")),M=U.find(I=>I.dataset.route===u)||U.find(I=>I.dataset.route===E);if(!M){L.replaceChildren(),L.hidden=!0;return}let B="",N=M.previousElementSibling;for(;N;){if(N.classList.contains("admin-dash-nav-label")){B=(N.querySelector("[data-i18n]")||N).textContent.trim();break}N=N.previousElementSibling}let A=(M.querySelector("[data-i18n]")||M.querySelector("span:nth-child(2)")||M).textContent.trim(),y=C?f.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,D=y?(y.querySelector(".admin-tabs-btn-label")||y).textContent.trim():"",_=[B===A?"":B,A,D].filter(Boolean),$=document.createDocumentFragment();_.forEach((I,H)=>{if(H){let c=document.createElement("span");c.className="admin-dash-breadcrumb-sep",c.setAttribute("aria-hidden","true"),c.textContent="\u203A",$.appendChild(c)}let T=document.createElement("span"),g=H===_.length-1;T.className="admin-dash-breadcrumb-item"+(g?" is-current":""),g&&T.setAttribute("aria-current","page"),T.textContent=I,$.appendChild(T)}),L.replaceChildren($),L.hidden=_.length===0}window.AdminBreadcrumb={render:h}})()});var rt=ye(()=>{(function(h){"use strict";let f={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",section:"sec-blacklist"},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"backup",labelKey:"adminNavBackup",sections:["admin-backup-v2-page","sec-timeline-export"]},{slug:"integrations",labelKey:"adminNavIntegrations",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"],folds:{webhooks:"sec-webhooks",plugins:"sec-plugins","api-tokens":"sec-api-tokens-overview",scheduler:"sec-scheduler"}},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function u(D){return Array.isArray(D.sections)?D.sections:D.section?[D.section]:[]}function E(D){return!!f[D]}function C(D){return f[D]||null}let L={moderation:{filters:"blacklist",fingerprints:"bans"}},U={viewer:{themes:"sec-themes",defaults:"sec-viewer-config-defaults",fields:"sec-viewer-config-defaults",page:"sec-viewer-theme",limits:"sec-viewer-config-limits"}};function M(D,_){if(!_)return null;let $=U[D]&&U[D][_];if($)return{tab:null,section:$};let I=f[D];if(!I)return null;let H=I.tabs.find(T=>T.folds&&T.folds[_]);return H?{tab:H.slug,section:H.folds[_]}:null}function B(D,_){let $=f[D];if(!$)return null;let I=c=>$.tabs.some(r=>r.slug===c),H=M(D,_);if(H)return H.tab;let T=L[D]?.[_];if(T&&I(T))return T;if(_&&I(_))return _;let g=h.AdminRouter?.tabMemory?.get?.(D);return g&&I(g)?g:$.defaultTab}function N(D,_,$){let I=f[D];if(!I)return null;let H=document.createElement("div");return H.className="admin-tabs-strip",H.dataset.nav=D,H.setAttribute("role","tablist"),H.setAttribute("aria-label",D+" tabs"),I.tabs.forEach(T=>{let g=document.createElement("button");g.type="button",g.className="admin-tabs-btn"+(T.slug===_?" is-active":""),g.dataset.nav=D,g.dataset.tab=T.slug,g.setAttribute("role","tab"),g.setAttribute("aria-selected",T.slug===_?"true":"false");let c=document.createElement("span");c.className="admin-tabs-btn-label",c.textContent=T.labelKey?ServerI18n.t(T.labelKey):T.label,g.appendChild(c);let r=document.createElement("span");r.className="admin-tabs-btn-count",r.dataset.tabCount=T.slug,r.textContent=F[D]&&F[D][T.slug]?F[D][T.slug]:"",g.appendChild(r),g.addEventListener("click",()=>{typeof $?.onSelect=="function"&&$.onSelect(T.slug)}),H.appendChild(g)}),H}let F={};function A(D,_,$){if(!f[D])return;F[D]=F[D]||{},F[D][_]=$==null?"":String($);let I=document.querySelector('.admin-tabs-strip[data-nav="'+D+'"] [data-tab-count="'+_+'"]');I&&(I.textContent=F[D][_])}function y(D,_,$){let I=f[D];!I||!$||I.tabs.forEach(H=>{let T=H.slug===_,g=new Map;u(H).forEach(c=>{let r=$.querySelector("#"+c);if(!r)return;r.style.display=T?"":"none";let o=g.get(r.parentElement);T&&H.folds&&o&&o.nextElementSibling!==r&&o.after(r),g.set(r.parentElement,r)})})}h.AdminTabs={hasTabsFor:E,getConfig:C,foldFor:M,resolveActiveTab:B,renderTabStrip:N,applyTabSectionVisibility:y,setTabCount:A}})(window)});var dt=ye(()=>{(function(h,f){"use strict";let u="data-quick-action-host",E="admin-quick-action-bar";function C(N){if(N?.host instanceof HTMLElement)return N.host;let F=f.querySelector(".admin-dash-main");if(!F)return f.body;let A=F.querySelector(`[${u}]`);if(!A){A=f.createElement("div"),A.setAttribute(u,"");let y=F.querySelector(".admin-dash-topbar"),_=F.querySelector("[data-admin-tabs-host]")||y;_&&_.parentNode?_.insertAdjacentElement("afterend",A):F.prepend(A)}return A}function L(N,F){typeof h.showToast=="function"&&h.showToast(N,F!==!1)}function U({label:N,undoLabel:F,onUndo:A,windowMs:y}){let D=C(),_=D.querySelector("."+E);_&&_.remove();let $=f.createElement("div");$.className=E,$.setAttribute("role","status"),$.setAttribute("aria-live","polite");let I=f.createElement("span");I.className=E+"-text",I.textContent="\u2713 "+N,$.appendChild(I);let H=f.createElement("button");H.type="button",H.className=E+"-undo",H.textContent="\u21B6 "+(F||ServerI18n.t("qaUndoLabel")),$.appendChild(H);let T=()=>{$.classList.add("is-leaving"),setTimeout(()=>$.remove(),200)},g=setTimeout(T,y||5e3);return H.addEventListener("click",async()=>{clearTimeout(g),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await A(),L(ServerI18n.t("qaUndone"),!0)}catch(c){L(ServerI18n.t("qaUndoFailed",{msg:c?.message||String(c)}),!1)}finally{T()}}),D.appendChild($),requestAnimationFrame(()=>$.classList.add("is-entering")),$}function M(N){if(!N||typeof N!="object")return;let F=N.label||ServerI18n.t("qaDone");N.toast!==!1&&L(F,!0),N.undo&&typeof N.undo.run=="function"&&U({label:F,undoLabel:N.undo.label,onUndo:N.undo.run,windowMs:N.undo.window})}function B(){f.querySelectorAll("."+E).forEach(N=>N.remove())}h.AdminQuickAction={fire:M,dismissAll:B}})(window,document)});var lt=ye(()=>{(function(){"use strict";let h="admin-hud-modal-root",f=null,u=null,E='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function C(){let B=document.getElementById(h);return B?Array.prototype.slice.call(B.querySelectorAll(E)).filter(N=>N.offsetParent!==null||N===document.activeElement):[]}function L(B){let N=document.getElementById(h);if(N&&N.remove(),f&&(f(B),f=null),document.removeEventListener("keydown",U),u&&typeof u.focus=="function")try{u.focus()}catch{}u=null}function U(B){if(B.key==="Escape"){B.preventDefault(),L(!1);return}if(B.key==="Tab"){let N=C();if(!N.length){B.preventDefault();return}let F=N[0],A=N[N.length-1],y=document.activeElement;B.shiftKey?(y===F||!N.includes(y))&&(B.preventDefault(),A.focus()):(y===A||!N.includes(y))&&(B.preventDefault(),F.focus())}}function M(B){return new Promise(N=>{f&&L(!1),f=N,u=document.activeElement;let{icon:F="\u26A0",title:A=ServerI18n.t("hudConfirmTitle"),subtitle:y="",severity:D="warn",body:_="",titleText:$,bodyText:I,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:T=ServerI18n.t("cancel"),width:g=480}=B||{},c=document.createElement("div");c.id=h,c.className=`admin-hud-modal admin-hud-modal--${D}`,c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-hud-modal-title");let r=y?`<div class="admin-hud-modal__subtitle">${y}</div>`:"",o=typeof _=="string"?_:"",n=typeof _!="string"&&_&&_.nodeType;if(c.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${g}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${F}</span>
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
        </div>`,$!=null){let m=c.querySelector(".admin-hud-modal__title");m&&(m.textContent=String($))}if(I!=null){let m=c.querySelector("[data-modal-body]");m&&(m.textContent=String(I))}if(n){let m=c.querySelector("[data-modal-body]");m.innerHTML="",m.appendChild(_)}c.addEventListener("click",function(m){let w=m.target.closest("[data-modal-action]");w&&(m.stopPropagation(),L(w.dataset.modalAction==="confirm"))}),document.body.appendChild(c),document.addEventListener("keydown",U);let p=D==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{c.querySelector(`.admin-hud-modal__btn--${p}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:M}})()});var ct=ye(()=>{(function(){"use strict";var h=8,f=30;function u(D,_){return window.ServerI18n?window.ServerI18n.t(D,_):D}function E(D,_){return D?D.length>_?D.slice(0,_)+"\u2026":D:""}function C(D){return u(D==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function L(D,_){return D==="keyword"?E(_,f):_.slice(0,h)}async function U(D,_,$){if(!_)return{ok:!1,error:"empty-value"};try{var I={type:D==="keyword"?"keyword":"fingerprint",value:_};$&&(I.reason=$);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function M(D,_,$){if(!D)return{ok:!1,error:"empty-fingerprint"};var I=parseInt(_||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:D,duration_s:I,reason:$||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(T){return{ok:!1,error:T&&T.message||"network"}}}async function B(D){if(!D)return{ok:!1,error:"empty-message-id"};try{var _=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:D})});return _.ok?{ok:!0}:{ok:!1,error:"HTTP "+_.status}}catch($){return{ok:!1,error:$&&$.message||"network"}}}function N(D,_){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:u("lfBlockTitle"),subtitle:u("cfmSubBlockFuture"),severity:"danger",bodyText:u("blockConfirm").replace("{label}",C(D)).replace("{display}",L(D,_)),confirmLabel:u("lfBlockTitle")}):(window.showToast&&window.showToast(u("blockFailed"),!1),Promise.resolve(!1))}function F(D,_,$){window.showToast&&window.showToast(D?u(_,$||{}):u("blockFailed"),!!D)}async function A(D,_){if(!D||(_=_||{},!_.skipConfirm&&!await N("keyword",D)))return!1;var $=await U("keyword",D);return F($.ok,"blockFallback",{label:C("keyword"),display:L("keyword",D)}),$.ok}async function y(D,_){if(!D||(_=_||{},!_.skipConfirm&&!await N("fingerprint",D)))return!1;var $=await U("fingerprint",D,_.reason);return F($.ok,"blockFallback",{label:C("fingerprint"),display:L("fingerprint",D)}),$.ok}window.AdminModeration={callBlock:U,banFingerprint:M,recall:B,blockKeyword:A,blockFingerprint:y}})()});var ut=ye(()=>{(function(){"use strict";function f(M){let B=document.createElement("div");return B.className="admin-skel-slow",B.hidden=!0,B.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",M.appendChild(B),setTimeout(function(){B.isConnected&&(B.hidden=!1)},3e3),M}function u(M,B){let N=document.createElement("div");if(N.className="admin-skel "+(M||""),B)for(let F in B)N.style[F]=B[F];return N}function E({rows:M=8}={}){let B=document.createElement("div");B.className="admin-skel-card admin-skel-list";let N=document.createElement("div");N.className="admin-skel-list__head",[60,80,140,200,80].forEach(F=>{N.appendChild(u("admin-skel-bar",{width:F+"px",height:"10px"}))}),B.appendChild(N);for(let F=0;F<M;F++){let A=document.createElement("div");A.className="admin-skel-list__row",A.appendChild(u("admin-skel-circle",{width:"24px",height:"24px"}));let y=document.createElement("div");y.className="admin-skel-list__col",y.appendChild(u("admin-skel-bar",{width:50+F*13%40+"%",height:"10px"})),y.appendChild(u("admin-skel-bar",{width:30+F*7%30+"%",height:"8px"})),A.appendChild(y),A.appendChild(u("admin-skel-bar",{width:"60px",height:"10px"})),B.appendChild(A)}return f(B)}function C({cols:M=4}={}){let B=document.createElement("div");B.className="admin-skel-stats",B.style.gridTemplateColumns=`repeat(${M}, 1fr)`;for(let N=0;N<M;N++){let F=document.createElement("div");F.className="admin-skel-card admin-skel-tile",F.appendChild(u("admin-skel-bar",{width:"60px",height:"8px"})),F.appendChild(u("admin-skel-bar",{width:"80px",height:"28px"})),F.appendChild(u("admin-skel-bar",{width:"100%",height:"18px"})),F.appendChild(u("admin-skel-bar",{width:"90px",height:"8px"})),B.appendChild(F)}return f(B)}function L(){let M=document.createElement("div");M.className="admin-skel-card admin-skel-chart";let B=document.createElement("div");B.className="admin-skel-chart__head",B.appendChild(u("admin-skel-bar",{width:"120px",height:"10px"}));let N=document.createElement("span");N.style.flex="1",B.appendChild(N),B.appendChild(u("admin-skel-bar",{width:"80px",height:"10px"})),M.appendChild(B);let F=document.createElement("div");F.className="admin-skel-chart__body";let A=document.createElement("div");A.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>A.appendChild(u("admin-skel-bar",{width:"24px",height:"6px"}))),F.appendChild(A);let y=document.createElement("div");return y.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(_=>y.appendChild(u("admin-skel-bar admin-skel-chart__bar",{height:_+"%"}))),F.appendChild(y),M.appendChild(F),f(M)}function U(M,B){let N={listRows:E,statsTiles:C,chart:L}[M];return N?N(B||{}).outerHTML:""}window.AdminSkeletons={listRows:E,statsTiles:C,chart:L,html:U}})()});var mt=ye(()=>{(function(){"use strict";let h={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},f={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:h.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:h.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:h.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:h.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:h.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:h.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:h.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:h.cyan}};function u(C){let{icon:L="\xB7",title:U="",desc:M="",accent:B=h.cyan,ctaAccent:N,actionLabel:F,action:A,extra:y}=C||{},D=document.createElement("div");D.className="admin-empty",D.dataset.empty="1",D.style.setProperty("--admin-empty-accent",B),N&&D.style.setProperty("--admin-empty-cta",N);let _=document.createElement("div");if(_.className="admin-empty__icon",_.textContent=L,D.appendChild(_),U){let $=document.createElement("div");$.className="admin-empty__title",$.textContent=U,D.appendChild($)}if(M){let $=document.createElement("div");$.className="admin-empty__desc",$.textContent=M,D.appendChild($)}if(F){let $=document.createElement("button");$.type="button",$.className="admin-empty__btn",$.textContent=F,typeof A=="function"&&$.addEventListener("click",A),D.appendChild($)}if(y){let $=document.createElement("div");$.className="admin-empty__extra",typeof y=="string"?$.innerHTML=y:$.appendChild(y),D.appendChild($)}return D}function E(C){let L=f[C];if(!L)return u({title:ServerI18n.t("emptyNoData"),desc:""});let U=Object.assign({},L,{title:L.titleKey?ServerI18n.t(L.titleKey):L.title,desc:L.descKey?ServerI18n.t(L.descKey):L.desc,actionLabel:L.actionLabelKey?ServerI18n.t(L.actionLabelKey):L.actionLabel});return u(U)}window.AdminEmpty={render:E,renderCustom:u,PRESETS:f}})()});var pt=ye(()=>{(function(){"use strict";var h=8;function f(U){return U?String(U).slice(0,h):""}function u(U){if(!U||typeof U!="object")return{nickname:"",fp:"",ip:""};var M=U.fingerprint||U.fp||U.hash||"",B=U.clientIp||U.client_ip||U.ip||"",N=U.nickname||U.nick||"";return{nickname:String(N||""),fp:String(M||""),ip:String(B||"")}}function E(U){if(!U||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var M=new TextEncoder().encode(String(U));return window.crypto.subtle.digest("SHA-256",M).then(function(B){var N=Array.from(new Uint8Array(B));return N.map(function(F){return F.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function C(U){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var M=document.getElementById("sec-fingerprints");if(M&&!M.open&&(M.open=!0),M)try{M.scrollIntoView({behavior:"smooth",block:"start"})}catch{}E(U).then(function(B){if(B)var N=0,F=setInterval(function(){N+=1;var A=document.querySelector('[data-fp-hash="'+B+'"]');if(A){clearInterval(F),A.classList.add("admin-identity-flash"),setTimeout(function(){A.classList.remove("admin-identity-flash")},2e3);try{A.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else N>12&&clearInterval(F)},250)})}function L(U){U=U||{};var M=U.nickname||"",B=U.fp||"",N=U.ip||"",F=!!U.compact,A=typeof U.onNicknameClick=="function"?U.onNicknameClick:null,y=typeof U.onFpClick=="function"?U.onFpClick:C,D=document.createElement("span");D.className="admin-identity-row";var _;if(A?(_=document.createElement("button"),_.type="button",_.className="admin-identity-nick is-clickable",_.addEventListener("click",function(c){c.stopPropagation(),A(M)})):(_=document.createElement("span"),_.className="admin-identity-nick"),M)_.textContent="@"+M;else{var $="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var I=ServerI18n.t("anonymousPlaceholder");I&&I!=="anonymousPlaceholder"&&($=I)}}catch{}_.textContent="@"+$,_.classList.add("is-guest")}if(M&&(_.title=M),D.appendChild(_),B){var H;if(y?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(c){c.stopPropagation(),y(B)})):(H=document.createElement("span"),H.className="admin-identity-fp"),B==="new"){var T=document.createElement("span");T.className="admin-identity-dot",H.appendChild(T),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+f(B);H.title=B,D.appendChild(H)}if(N&&!F){var g=document.createElement("span");g.className="admin-identity-ip",g.textContent=N,g.title=N,D.appendChild(g)}return D}window.AdminIdentity={render:L,parse:u,focusFingerprint:C,hashFp:E,FP_DISPLAY_LEN:h}})()});var ft=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(a,i){return window.csrfFetch(a,i)}function u(a,i){return window.showToast(a,i)}let E="default",C=[],L={},U=null,M=!1,B="sec-themes";function N(){let a=i=>h(ServerI18n.t(i));return`
      <div id="${B}" class="admin-style-themes lg:col-span-2">
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
              <span class="theme-pack-sample-nick">${h($)}</span>${h(I)}
            </span>
          </div>
        </details>
      </div>`}function F(){if(document.getElementById(B))return!1;let a=document.getElementById("settings-grid");return a?(a.insertAdjacentHTML("beforeend",N()),!0):!1}function A(){document.dispatchEvent(new CustomEvent("admin-themes-changed",{detail:{active:E}}))}function y(){let a=document.getElementById("themesList");a&&window.AdminSkeletons&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function D(a){a&&M||y();try{let i=await f("/admin/themes");if(!i.ok)return!1;let v=await i.json();return E=v.active||"default",C=v.themes||[],L=v.overrides||{},U=v.style_defaults||null,M=!0,o(C,E),m(),A(),!0}catch(i){return console.warn("[Themes] Failed to fetch themes:",i),!1}}async function _(a){let i;try{i=await f("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})}catch{return{ok:!1,error:""}}return i.ok?(E=a,await D(!0)||(U=null,o(C,a),m(),A()),{ok:!0,error:""}):{ok:!1,error:(await i.json().catch(()=>({}))).error||""}}var $="\u5C0F\u660E",I="\u8B1B\u5F97\u597D\uFF01+1";function H(a,i){var v=String(a||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(v)?v:i}function T(a){var i=String(a||"").trim(),v=i.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);return v&&(i="#"+v[1]+v[1]+v[2]+v[2]+v[3]+v[3]),/^[0-9a-fA-F]{6}$/.test(i)&&(i="#"+i),/^#[0-9a-fA-F]{6}$/.test(i)?i.toLowerCase():null}function g(a){var i=L[a.name]||{},v=U&&U.Color&&U.Color.global;return T(i.color)||T(v)||"#ffffff"}function c(a){var i=a.styles||{},v=g(a),k=["color:"+v];if(i.textStroke){var S=Math.max(0,Math.min(6,Number(i.strokeWidth)||0));k.push("-webkit-text-stroke:"+S+"px "+H(i.strokeColor,"#000000")),k.push("paint-order:stroke fill")}if(i.textShadow){var x=Math.max(0,Math.min(40,Number(i.shadowBlur)||0));k.push("text-shadow:0 0 "+x+"px "+v)}var R=(L[a.name]||{}).font_family||U&&U.FontFamily&&U.FontFamily.global;return R&&/^[\w\s-]{1,40}$/.test(R)&&k.push("font-family:'"+R+"', var(--font-sans)"),a.font&&Number(a.font.weight)&&k.push("font-weight:"+Math.max(100,Math.min(900,Number(a.font.weight)))),k.join(";")}function r(a){var i=a.bg&&a.bg.gradient;return i&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(i).trim())?"background:"+String(i).trim():""}function o(a,i){let v=document.getElementById("themesList");if(v){if(v.innerHTML="",a.length===0){v.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}a.forEach(k=>{let S=k.name===i,x=h(ServerI18n.t("theme_"+k.name)!=="theme_"+k.name?ServerI18n.t("theme_"+k.name):k.label||k.name),R=document.createElement("div");R.className=`theme-pack-card${S?" is-active":""}`,R.innerHTML=`
        <div class="theme-pack-name">${x}</div>
        <div class="theme-pack-sample" style="${h(r(k))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${h(c(k))}">
            <span class="theme-pack-sample-nick">${h($)}</span>
            ${h(I)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${k.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${h(k.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${S?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${h(k.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,v.appendChild(R)}),v.querySelectorAll(".theme-delete-btn").forEach(k=>{k.addEventListener("click",async()=>{let S=k.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let R=await f("/admin/themes/"+encodeURIComponent(S),{method:"DELETE"});if(!R.ok)throw new Error("HTTP "+R.status);u(ServerI18n.t("themeDeleted"),!0),D()}catch{u(ServerI18n.t("themesDeleteFailed"),!1)}})}),v.querySelectorAll(".theme-activate-btn").forEach(k=>{k.addEventListener("click",async()=>{let S=await _(k.dataset.theme);S.ok?u(ServerI18n.t("themeActivated"),!0):u(S.error||ServerI18n.t("setThemeFailed"),!1)})})}}function n(){return C.find(a=>a.name===E)||null}function p(a,i){let v=L[E]||{};if(v[a])return v[a];let k=i&&i.styles||{};return a==="stroke"?k.textStroke?Number(k.strokeWidth)>=3?"thick":"thin":"none":k.textShadow?Number(k.shadowBlur)>=10?"strong":"soft":"none"}function m(){let a=document.getElementById("themeDetail"),i=document.getElementById("themeDetailLabel");if(!a||!i)return;let v=n();if(!v)return;let k=ServerI18n.t("theme_"+v.name)!=="theme_"+v.name?ServerI18n.t("theme_"+v.name):v.label||v.name;i.textContent=ServerI18n.t("themeDetailGroup",{name:k});let S=L[E]||{},x=a.querySelector('[data-theme-ov="color"]');x&&(x.value=T(S.color)||g(v));let R=a.querySelector('[data-theme-ov-clear="color"]');R&&(R.hidden=!S.color),d(v),s(v)}var w=null;async function d(a){let i=document.getElementById("themeOvFont");if(!i)return;if(!w)try{let S=await fetch("/fonts",{credentials:"same-origin"});w=S.ok?(await S.json()).fonts||[]:[]}catch{w=[]}let k=(L[E]||{}).font_family||"";i.innerHTML=`<option value="">${h(ServerI18n.t("themeDetailFontInherit"))}</option>`+w.map(S=>{let x=String(S.name||S);return`<option value="${h(x)}"${x===k?" selected":""}>${h(x)}</option>`}).join("")}function s(a){let i=document.querySelector("[data-theme-preview-line]");i&&i.setAttribute("style",c(a))}async function l(a){try{let i=await f("/admin/themes/"+encodeURIComponent(E)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error("HTTP "+i.status);u(ServerI18n.t("themeDetailSaved"),!0),await D(!0)}catch{u(ServerI18n.t("themeDetailSaveFailed"),!1)}}function b(){let a=document.getElementById("themeDetail");a&&(a.addEventListener("change",i=>{let v=i.target.closest("[data-theme-ov]");v&&l({[v.getAttribute("data-theme-ov")]:v.value})}),a.addEventListener("click",i=>{let v=i.target.closest("[data-theme-ov-clear]");v&&l({[v.getAttribute("data-theme-ov-clear")]:""})}))}function e(){let a=document.getElementById("themeNewBtn");a&&a.addEventListener("click",async()=>{let i=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!i||!i.trim()))try{let v=await f("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:i.trim(),base:E})});if(!v.ok)throw new Error("HTTP "+v.status);u(ServerI18n.t("themeCreated"),!0),D()}catch{u(ServerI18n.t("themesNewFailed"),!1)}})}function t(){let a=F();if(D(),!a)return;b(),e();let i=document.getElementById("themeReloadBtn");i&&i.addEventListener("click",async()=>{try{(await f("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(u(ServerI18n.t("themesReloaded")),D()):u(ServerI18n.t("themesReloadFailed"),!1)}catch{u(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t,segOf(a){let i=n();return M&&i?p(a,i):null},activeStyles(){let a=n();return a&&a.styles||{}},styleDefaults(){return U},activate:_,refresh(){return D(!0)},setSeg(a,i){return a!=="stroke"&&a!=="shadow"?Promise.resolve():l({[a]:i})}}})()});var vt=ye(()=>{(function(){"use strict";function h(S,x){return window.csrfFetch(S,x)}function f(S,x){return window.showToast(S,x)}var u=window.ServerI18n;function E(S,x){return window.AdminUtils.styleTag(S,x)}let C=null;function L(){let S=document.getElementById("effectEditModal");return S?Array.from(S.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(x=>!x.hasAttribute("disabled")&&x.getAttribute("aria-hidden")!=="true"):[]}function U(S){let x=document.getElementById("effectEditModal");if(!x||x.classList.contains("hidden"))return;if(S.key==="Escape"){S.preventDefault(),M();return}if(S.key!=="Tab")return;let R=L();if(R.length===0){S.preventDefault();return}let G=R[0],q=R[R.length-1],z=document.activeElement;S.shiftKey&&z===G?(S.preventDefault(),q.focus()):!S.shiftKey&&z===q&&(S.preventDefault(),G.focus())}function M(){let S=document.getElementById("effectEditModal");S&&(S.classList.add("hidden"),S.classList.remove("flex"),S.removeEventListener("keydown",U),C&&(C.focus(),C=null))}let B={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(S){return!!B[S]}};let N=new Map,F=new Map;function A(S){if(!S||!S.styleId||!S.keyframes)return;let x="dme-user-"+S.styleId;if(document.getElementById(x))return;let R=document.createElement("style");R.id=x,R.textContent=S.keyframes,document.head.appendChild(R)}async function y(S){if(N.has(S))return N.get(S);if(F.has(S))return F.get(S);let x=(async()=>{try{let R=await h(`/admin/effects/${encodeURIComponent(S)}/content`);if(!R.ok)throw new Error("content fetch failed");let G=await R.json(),q=G&&G.content||"";if(!q)throw new Error("empty content");let z=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:q,params:{}})});if(!z.ok)throw new Error("preview failed");let P=await z.json();if(!P||!P.animation)throw new Error("no animation");return A(P),N.set(S,P),P}catch{return N.set(S,"failed"),null}finally{F.delete(S)}})();return F.set(S,x),x}function D(S,x){let R=S.querySelector(".effect-demo-text");if(!R)return;R.style.animation=x.animation||"",x.animationComposition&&(R.style.animationComposition=x.animationComposition),R.style.animationPlayState="paused";let G=$();G&&G.observe(S)}let _=null;function $(){return _||(typeof IntersectionObserver>"u"?null:(_=new IntersectionObserver(S=>{S.forEach(x=>{let R=x.target.querySelector(".effect-demo-text");R&&(R.style.animationPlayState=x.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),_))}let I=null;function H(S){let x=document.getElementById("effectPreviewParams");if(!x)return{};let R;try{let q=S.split(`
`),z=!1,P=0,W=null,ee=0,J={};for(let K of q){let Z=K.trimStart(),j=K.length-Z.length;if(Z.startsWith("params:")){z=!0,P=j;continue}if(!z||Z===""||Z.startsWith("#"))continue;if(j<=P&&!Z.startsWith("params:")){z=!1;continue}let Q=Z.match(/^([a-zA-Z0-9_]+):\s*$/);if(Q&&j===P+2){W=Q[1],ee=j,J[W]={};continue}if(W&&j>ee){let ne=Z.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let re=ne[1],le=ne[2].trim();if((le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),re!=="options"){let ue=Number(le);J[W][re]=isNaN(ue)?le:ue}}if(Z.startsWith("- value:")){J[W].options||(J[W].options=[]);let re=Z.match(/^- value:\s*(.+)$/);if(re){let le=re[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),J[W].options.push({value:le,label:le})}}if(Z.startsWith("label:")&&J[W].options&&J[W].options.length>0){let re=Z.match(/^label:\s*(.+)$/);if(re){let le=re[1].trim();(le.startsWith('"')&&le.endsWith('"')||le.startsWith("'")&&le.endsWith("'"))&&(le=le.slice(1,-1)),J[W].options[J[W].options.length-1].label=le}}}}R=J}catch{R={}}x.innerHTML="";let G={};for(let[q,z]of Object.entries(R||{})){let P=z.type||"float",W=document.createElement("div");W.className="flex flex-col gap-0.5";let ee=document.createElement("label");if(ee.className="font-mono",ee.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",ee.textContent=`${q} (${P})`,W.appendChild(ee),P==="select"&&Array.isArray(z.options)){let J=document.createElement("select");J.className="admin-ui-select",J.style.cssText="font-size:13px;padding:4px 8px",J.dataset.paramKey=q;for(let K of z.options){let Z=document.createElement("option");Z.value=K.value,Z.textContent=K.label||K.value,K.value===String(z.default)&&(Z.selected=!0),J.appendChild(Z)}G[q]=String(z.default||z.options[0]&&z.options[0].value||""),J.addEventListener("change",()=>{c()}),W.appendChild(J)}else{let J=z.min!=null?z.min:0,K=z.max!=null?z.max:10,Z=z.step!=null?z.step:P==="int"?1:.1,j=z.default!=null?z.default:J,Q=document.createElement("div");Q.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=J,ne.max=K,ne.step=Z,ne.value=j,ne.dataset.paramKey=q,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let re=document.createElement("span");re.className="font-mono",re.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",re.textContent=String(j),ne.addEventListener("input",()=>{re.textContent=ne.value,c()}),Q.appendChild(ne),Q.appendChild(re),W.appendChild(Q),G[q]=j}x.appendChild(W)}return G}function T(){let S=document.getElementById("effectPreviewParams");if(!S)return{};let x={};return S.querySelectorAll("[data-param-key]").forEach(R=>{x[R.dataset.paramKey]=R.type==="range"?Number(R.value):R.value}),x}async function g(){let S=document.getElementById("effectEditModalTextarea"),x=document.getElementById("effectPreviewText"),R=document.getElementById("effectPreviewStyle"),G=document.getElementById("effectPreviewError");if(!S||!x||!R)return;let q=S.value;if(!q||q===u.t("effectLoadContent")||q===u.t("effectsNetworkError"))return;let z=T();G?.classList.add("hidden");try{let P=await h("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:q,params:z})}),W=await P.json().catch(()=>({}));P.ok?(R.textContent=W.keyframes||"",x.style.animation=W.animation||"none",x.style.animationComposition=W.animationComposition||""):(x.style.animation="none",R.textContent="",G&&(G.textContent=W.error||u.t("previewFailed"),G.classList.remove("hidden")))}catch{x.style.animation="none",R.textContent="",G&&(G.textContent=u.t("effectsNetworkError"),G.classList.remove("hidden"))}}function c(){clearTimeout(I),I=setTimeout(()=>g(),500)}async function r(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                ${E("effectPreviewStyle","")}
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",M),document.getElementById("effectEditModalCancel").addEventListener("click",M),document.getElementById("effectEditModal").addEventListener("click",q=>{q.target===q.currentTarget&&M()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let q=document.getElementById("effectEditModalTextarea");q&&(H(q.value),c())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{g()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let q=document.getElementById("effectEditModal"),z=document.getElementById("effectEditModalTextarea"),P=document.getElementById("effectEditModalSave"),W=q?.dataset.effectName;if(!(!W||!z)){P.disabled=!0;try{let ee=await h("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W,content:z.value})}),J=await ee.json().catch(()=>({}));ee.ok?(f(J.message||u.t("effectSaveFallback"),!0),M(),await p()):f(J.error||u.t("saveFailed"),!1)}catch{f(u.t("effectsNetworkError"),!1)}finally{P.disabled=!1}}})),await p(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let q=document.getElementById("effectReloadBtn");q&&(q.disabled=!0);try{let z=await h("/admin/effects/reload",{method:"POST"}),P=await z.json().catch(()=>({}));z.ok?(f(P.message||u.t("effectsReloadFallback")),await p()):f(P.error||u.t("reloadFailed"),!1)}catch{f(u.t("effectsNetworkError"),!1)}finally{q&&(q.disabled=!1)}});async function S(q){if(!q)return;let z=new FormData;z.append("effectfile",q);try{let P=await h("/admin/effects/upload",{method:"POST",body:z}),W=await P.json().catch(()=>({}));P.ok?(f(W.message||u.t("effectUploadFallback")),await p()):f(W.error||u.t("uploadFailed"),!1)}catch{f(u.t("effectsNetworkError"),!1)}}let x=document.getElementById("effectUploadInput"),R=x&&!x.dataset.uploadWired;R&&(x.dataset.uploadWired="1"),(R?x:null)?.addEventListener("change",async q=>{await S(q.target.files?.[0]),q.target.value=""});let G=document.getElementById("sec-effects-mgmt");if(G){let q=0,z=J=>{J.preventDefault(),q++,G.classList.add("is-drag")},P=J=>{J.preventDefault()},W=J=>{J.preventDefault(),q=Math.max(0,q-1),q===0&&G.classList.remove("is-drag")},ee=async J=>{J.preventDefault(),q=0,G.classList.remove("is-drag");let K=J.dataTransfer?.files?.[0];if(K){if(!/\.(dme|dme\.zip)$/i.test(K.name)){f(u.t("fxToastBadExt"),!1);return}await S(K)}};G.addEventListener("dragenter",z),G.addEventListener("dragover",P),G.addEventListener("dragleave",W),G.addEventListener("drop",ee)}}function o(S){let x=(S||"").toLowerCase();return x.startsWith("glow")||x.includes("neon")?"GLOW":x.startsWith("shake")?"SHAKE":x.startsWith("wave")||x.startsWith("spin")||x.startsWith("bounce")||x.startsWith("zoom")||x.startsWith("fire")||x.includes("motion")?"MOTION":x.startsWith("rainbow")||x.startsWith("blink")||x.includes("color")?"COLOR":x.startsWith("type")||x.includes("text")?"TEXT":"MISC"}let n={all:[],filter:"ALL",selected:null};async function p(){let S=document.getElementById("effectsList");if(S)try{let x=await h("/admin/effects");if(!x.ok){S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsLoadFailed")+"</span>";return}let R=await x.json();n.all=R.effects||[],m(),d()}catch{S.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+u.t("effectsNetworkError")+"</span>"}}function m(){let S=document.getElementById("effectsFilterRow");if(!S)return;let x={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};n.all.forEach(P=>{x[o(P.name)]+=1});let R=n.all.length,G=[["ALL",u.t("fxChipAll"),R],["GLOW",u.t("fxCatGlow"),x.GLOW],["MOTION",u.t("fxCatMotion"),x.MOTION],["COLOR",u.t("fxCatColor"),x.COLOR],["SHAKE",u.t("fxCatShake"),x.SHAKE],["TEXT",u.t("fxCatText"),x.TEXT]];x.MISC>0&&G.push(["MISC",u.t("fxCatMisc"),x.MISC]);let q=G.map(([P,W,ee])=>`<span class="hud-filter-chip ${n.filter===P?"is-active":""}" data-effect-filter="${P}">${W} ${ee}</span>`).join(""),z=S.querySelector("[data-toolbar-spacer]");z?(S.querySelectorAll("[data-effect-filter]").forEach(P=>P.remove()),z.insertAdjacentHTML("beforebegin",q)):S.innerHTML=q,S.querySelectorAll("[data-effect-filter]").forEach(P=>{P.addEventListener("click",()=>{n.filter=P.dataset.effectFilter,m(),d()})})}function w(S){let x=(P,W)=>{let ee=document.querySelector(P);ee&&(ee.textContent=W==null?"\u2014":String(W))},R=S.length,G=S.filter(P=>P.enabled!==!1).length,q=new Set(S.map(P=>o(P.name))),z=S.filter(P=>!B[P.name]).length;x("[data-eflib-total]",R),x("[data-eflib-active]",G),x("[data-eflib-cats]",q.size),x("[data-eflib-user]",z)}function d(){let S=document.getElementById("effectsList");if(!S)return;let x=n.all;w(x);let R=n.filter==="ALL"?x:x.filter(G=>o(G.name)===n.filter);if(!R.length){S.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(x.length?u.t("fxNoFilterMatch"):u.t("noEffectsLoaded"))+"</span>";return}_&&_.disconnect(),S.innerHTML="",R.forEach(G=>{let q=o(G.name),z=q==="GLOW"?"is-glow":q==="COLOR"?"is-color":q==="TEXT"?"is-text":"",P=B[G.name]||"",W=!!P,ee=document.createElement("div");ee.className="hud-effect-card"+(n.selected===G.name?" is-selected":""),ee.dataset.effectName=G.name,ee.title=[G.description,`file: ${G.filename}`].filter(Boolean).join(`
`);var J="effect_"+G.name;let K=u.t(J)!==J?u.t(J):G.label||G.name,Z=W?"built-in":"user",j=P?`animation:${P};animation-play-state:paused;`:"";if(ee.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${s(u.t("fxCat"+q.charAt(0)+q.slice(1).toLowerCase())||q)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${z}"><span class="effect-demo-text" style="${j}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${s(K)}</div>
          <div class="hud-effect-card-meta">${s(Z)} \xB7 ${s(G.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${u.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${u.t("lbDelete")}</button>
        </div>
      `,S.appendChild(ee),P){let re=$();re&&re.observe(ee)}else{let re=N.get(G.name);re&&re!=="failed"?(A(re),D(ee,re)):re!=="failed"&&y(G.name).then(le=>{if(!le)return;let ue=S.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(G.name)}"]`);ue&&D(ue,le)})}ee.addEventListener("click",re=>{re.target.closest("[data-role]")||i(G)});let Q=ee.querySelector('[data-role="edit"]'),ne=ee.querySelector('[data-role="delete"]');Q.addEventListener("click",async()=>{let re=document.getElementById("effectEditModal"),le=document.getElementById("effectEditModalTitle"),ue=document.getElementById("effectEditModalFile"),me=document.getElementById("effectEditModalTextarea"),Te=document.getElementById("effectEditModalSave");if(!re)return;C=document.activeElement instanceof HTMLElement?document.activeElement:null,le.textContent=G.label||G.name,ue.textContent=G.filename,me.value=u.t("effectLoadContent"),me.disabled=!0,Te.disabled=!0,re.dataset.effectName=G.name,re.classList.remove("hidden"),re.classList.add("flex"),re.addEventListener("keydown",U),me.focus();let Ee=document.getElementById("effectPreviewText"),Le=document.getElementById("effectPreviewStyle"),oe=document.getElementById("effectPreviewError"),se=document.getElementById("effectPreviewParams");Ee&&(Ee.style.animation="none"),Le&&(Le.textContent=""),oe&&oe.classList.add("hidden"),se&&(se.innerHTML="");try{let ce=await h(`/admin/effects/${encodeURIComponent(G.name)}/content`),V=await ce.json().catch(()=>({}));ce.ok?(me.value=V.content||"",me.disabled=!1,Te.disabled=!1,me.focus(),H(me.value),g()):(me.value=V.error||u.t("effectLoadContentFailed"),f(V.error||u.t("effectLoadContentFailed"),!1))}catch{me.value=u.t("effectsNetworkError"),f(u.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let re=G.label||G.name;if(await window.HudConfirm?.open({icon:"\u2297",title:u.t("fxDeleteTitle"),subtitle:u.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${u.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${re}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${u.t("fxDeleteWarn")}
                </div>`,confirmLabel:u.t("fxDeleteConfirm"),cancelLabel:u.t("cancel"),width:400}))try{let ue=await h("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G.name})}),me=await ue.json().catch(()=>({}));ue.ok?(f(me.message||u.t("effectDeleteFallback"),!0),await p()):f(me.error||u.t("deleteFailed"),!1)}catch{f(u.t("effectsNetworkError"),!1)}})})}function s(S){return String(S??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(S){let x={name:"",label:"",description:"",params:[]};if(!S)return x;let R=S.split(`
`),G="top",q=null;for(let z of R){let P=z.replace(/\r$/,""),W=P.trimStart();if(!W||W.startsWith("#"))continue;let ee=P.length-W.length;if(ee===0){if(G="top",q&&(x.params.push(q),q=null),W==="params:"){G="params";continue}let J=W.match(/^([a-z_]+):\s*(.+)$/);J&&(J[1]==="name"?x.name=J[2].trim():J[1]==="label"?x.label=J[2].trim():J[1]==="description"&&(x.description=J[2].trim()));continue}if(!(G!=="params"&&G!=="param-fields"&&G!=="options")){if(ee===2&&(G==="params"||G==="param-fields"||G==="options")){q&&(x.params.push(q),q=null);let J=W.match(/^(\w+):$/);J&&(q={key:J[1]},G="param-fields");continue}if(ee===4&&G==="param-fields"&&q){let J=W.match(/^(\w+):\s*(.*)$/);if(J){let K=J[1],Z=J[2].trim();K==="label"?q.label=Z:K==="type"?q.type=Z:K==="default"?q.default=Z:K==="min"?q.min=parseFloat(Z):K==="max"?q.max=parseFloat(Z):K==="step"?q.step=parseFloat(Z):K==="options"&&(q.options=[],G="options")}continue}if(G==="options"&&q&&ee>=6){let J=W.match(/^-\s*value:\s*(.+)$/);J&&(q.options||(q.options=[]),q.options.push({value:J[1].trim(),label:J[1].trim()}));let K=W.match(/^label:\s*(.+)$/);K&&q.options&&q.options.length>0&&(q.options[q.options.length-1].label=K[1].trim())}}}return q&&x.params.push(q),x}function b(S,x){let R=S.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),G=R?R[1]:"",q=S.match(/^animation:\s*["']?(.+?)["']?\s*$/m),z=q?q[1].trim():"";for(let P of x.params){let W=P.default!==void 0?P.default:"",ee=new RegExp(`\\{${P.key}\\}`,"g");G=G.replace(ee,W),z=z.replace(ee,W)}return{keyframes:G,animation:z}}function e(S,x){if(S==="COLOR"){let R=x.find(G=>G.key==="duration");if(R&&R.default){let G=parseFloat(R.default);if(G<.25)return"crimson";if(G<.33)return"amber"}}if(S==="MOTION"){let R=x.find(G=>G.key==="height");if(R&&R.default){let G=parseFloat(R.default);if(G>30)return"crimson";if(G>24)return"amber"}}return"lime"}function t(S,x){return S==="COLOR"?x==="crimson"?u.t("fxHintFlashBlock"):x==="amber"?u.t("fxHintFlashWarn"):u.t("fxHintFlashOk"):x==="crimson"?u.t("fxHintAmpBlock"):x==="amber"?u.t("fxHintAmpWarn"):u.t("fxHintAmpOk")}function a(S,x){let R=l(x),{keyframes:G,animation:q}=b(x,R),z=o(S.name),P=R.params.filter(me=>me.type!=="select"),W=R.params.filter(me=>me.type==="select"),ee=e(z,R.params),J=ee==="crimson"?"BLOCK":ee==="amber"?"WARN":"OK",K=t(z,ee),Z="fx-anim-"+S.name.replace(/[^a-z0-9]/gi,"-"),j=G&&q?E(Z,G):"",Q=q?`animation:${q};animation-play-state:running;`:"",ne=P.map(me=>{let Te=parseFloat(me.default)||0,Ee=me.min??0,Le=me.max??100,oe=Math.max(0,Math.min(100,(Te-Ee)/(Le-Ee)*100)),se=(me.label||"").match(/\(([^)]+)\)$/),ce=se?se[1]:"",V=me.label||me.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${s(V)}</span>
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
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${u.t("fxNoNumericParams")}</span>`,re=W.map(me=>{let Te=me.options||[],Ee=String(me.default||""),Le=Te.map(oe=>`<span class="fx-radio-btn${oe.value===Ee||oe.label===Ee?" is-active":""}">${s(oe.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${s(me.label||me.key)}</div>
        <div class="fx-radio-group">${Le||"<span>\u2014</span>"}</div>
      </div>`}).join(""),le=["dark","light","photo"].map(me=>{let Te=me==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${me}">
        <span class="fx-preview-bg-label">${me.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Q}color:${Te}">ABC</span>
      </div>`}).join(""),ue=`${j}<div class="fx-param-body">
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
      <div class="fx-warn-box${ee!=="lime"?" is-"+ee:""}">
        <span class="fx-warn-chip${ee!=="lime"?" is-"+ee:""}">${J}</span>
        <span class="fx-warn-text">${s(K)}</span>
      </div>
    </div>`,ue}async function i(S){n.selected=S.name;let x=document.getElementById("effectsInspector"),R=document.getElementById("effectsInspectorTitle"),G=document.getElementById("effectsInspectorKicker"),q=document.getElementById("effectsInspectorBody");if(x){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),R&&(R.textContent=S.label||S.name),G&&(G.textContent="LOADING"),q&&(q.className="hud-inspector-body",q.textContent="# "+u.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(z=>{z.classList.toggle("is-selected",z.dataset.effectName===S.name)});try{let z=await h(`/admin/effects/${encodeURIComponent(S.name)}/content`),P=await z.json().catch(()=>({}));if(z.ok){let W=P.content||"";q&&(q.className="hud-inspector-body has-param-panel",q.innerHTML=a(S,W)),G&&(G.textContent=o(S.name))}else q&&(q.className="hud-inspector-body",q.textContent="# "+(P.error||u.t("effectLoadContentFailed"))),G&&(G.textContent="ERROR")}catch{q&&(q.className="hud-inspector-body",q.textContent="# "+u.t("effectsNetworkError")),G&&(G.textContent="NETWORK")}}}function v(){let S=document.getElementById("effectsInspectorReload"),x=document.getElementById("effectsInspectorEdit");S?.addEventListener("click",async()=>{if(!n.selected){f(u.t("fxSelectFirst"),!1);return}let R=n.all.find(G=>G.name===n.selected);R&&await i(R)}),x?.addEventListener("click",()=>{if(!n.selected){f(u.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(n.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",v())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:r}})()});var ht=ye(()=>{(function(){"use strict";var h={};window.DanmuEvents={on:function(f,u){h[f]||(h[f]=[]),h[f].push(u)},off:function(f,u){h[f]=(h[f]||[]).filter(function(E){return E!==u})},emit:function(f,u){(h[f]||[]).forEach(function(E){E(u)})}}})()});var gt=ye(()=>{(function(){"use strict";let h="sec-events",f="/admin/audit?limit=200",E=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},C={events:[],filterSev:"all",filterCat:"all",timer:0};function L(T){let g=(T.source||T.kind||"").toLowerCase(),c=(T.action||"").toLowerCase();return g.includes("plugin")||c.includes("plugin")?"plugin":g.includes("webhook")||c.includes("webhook")?"webhook":g.includes("rate")||c.includes("rate")||c.includes("limit")?"rate":g.includes("filter")||c.includes("filter")?"filter":g.includes("overlay")||c.includes("overlay")||g==="broadcast"?"overlay":g.includes("backup")||c.includes("backup")?"backup":g.includes("msg")||g==="messaging"?"msg":g.includes("ws")||g==="websocket"?"ws":"system"}let U=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,M=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function B(T){let g=(T.action||T.kind||"").toLowerCase();return T.severity?T.severity:U.test(g)?"error":M.test(g)?"warn":"info"}function N(T){let g=T.source||"system",c=T.action||T.kind||"";return c?`${g.toUpperCase()}_${c.toUpperCase()}`:g.toUpperCase()}function F(T){if(!T)return"\u2014";let g=new Date(T*1e3),c=r=>String(r).padStart(2,"0");return`${c(g.getHours())}:${c(g.getMinutes())}:${c(g.getSeconds())}`}function A(T){if(T.message)return T.message;let g=T.meta||{},c=[];if(g.from&&g.to)c.push(`${g.from} \u2192 ${g.to}`);else if(g.text_preview)c.push(`"${g.text_preview.slice(0,60)}"`);else if(Object.keys(g).length){let r=Object.keys(g).slice(0,3);for(let o of r)c.push(`${o}=${JSON.stringify(g[o]).slice(0,30)}`)}return c.length?c.join(" \xB7 "):`${T.source||"system"}.${T.action||T.kind||"?"}`}function y(){return`
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
      </div>`}function D(){let T=document.querySelector("[data-ev-rows]");if(!T)return;let g=C.events,c=g.filter(n=>!(C.filterSev!=="all"&&B(n)!==C.filterSev||C.filterCat!=="all"&&L(n)!==C.filterCat));c.length===0?(T.innerHTML="",window.AdminEmpty?T.appendChild(window.AdminEmpty.render("events")):T.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):T.innerHTML=c.map(n=>{let p=B(n);return`
          <div class="admin-ev-v4__row" data-sev="${p}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${E(F(n.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${p}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${p}">${E(N(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${E(n.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${E(A(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let r={all:g.length,info:0,warn:0,error:0};for(let n of g)r[B(n)]+=1;Object.keys(r).forEach(n=>{let p=document.querySelector(`[data-ev-cnt="${n}"]`);p&&(p.textContent=String(r[n]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${c.length} / ${g.length}`)}async function _(){try{let T=await fetch(f,{credentials:"same-origin"});if(!T.ok)return;let g=await T.json();C.events=Array.isArray(g.events)?g.events:[],D()}catch{}}function $(){let T=document.getElementById(h);T&&T.addEventListener("click",g=>{let c=g.target.closest("[data-ev-sev]");if(c){T.querySelectorAll("[data-ev-sev]").forEach(n=>n.classList.toggle("is-active",n===c)),C.filterSev=c.dataset.evSev,D();return}let r=g.target.closest("[data-ev-cat]");if(r){T.querySelectorAll("[data-ev-cat]").forEach(n=>n.classList.toggle("is-active",n===r)),C.filterCat=r.dataset.evCat,D();return}let o=g.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")_();else if(o.dataset.evAction==="export"){let n=new Blob([JSON.stringify(C.events,null,2)],{type:"application/json"}),p=URL.createObjectURL(n),m=document.createElement("a");m.href=p,m.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(p),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function I(){let T=document.querySelector(".admin-dash-grid"),g=document.getElementById(h);if(!g)return;let r=(T?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";g.style.display=r?"":"none",r?(_(),C.timer||(C.timer=setInterval(_,15e3))):C.timer&&(clearInterval(C.timer),C.timer=0)}function H(){let T=document.getElementById("settings-grid");!T||document.getElementById(h)||(T.insertAdjacentHTML("beforeend",y()),$(),I())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H(),I()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",I),document.addEventListener("admin-panel-rendered",()=>{H(),I()}),H()})})()});var bt=ye(()=>{(function(){"use strict";let h="sec-modqueue",f="/admin/modqueue/list",C=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},L={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},U={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},M={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function B(c){let r=0,o=String(c||"");for(let n=0;n<o.length;n++)r=r*31+o.charCodeAt(n)&65535;return r%360}function N(c){if(!c.created_at_ms)return null;let r=(Date.now()-c.created_at_ms)/1e3,o=Math.max(0,L.autoRejectSec-r);return Math.ceil(o)}function F(c,r){let o=(c.severity||"low").toLowerCase(),n=U[o]||U.low,p=B(c.fp),m=String(c.fp||"\u2014").slice(0,8),w=c.nick||c.nickname||ServerI18n.t("audienceAnonymous"),d=(w||"?").slice(0,2).toUpperCase(),s=r==="pending"?N(c):null,l=r==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${C(c.id||"")}">${C(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${C(c.id||"")}">${C(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${C(c.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",b=r==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${C(ServerI18n.t("modqueueStampApproved"))} \xB7 ${C(c.resolved_by||"admin")} \xB7 ${C(c.resolved_ago||"")}
        </div>`:r==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${c.auto_rejected?`${C(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${C(ServerI18n.t("modqueueAutoRejectTimeout",{n:L.autoRejectSec}))}`:`${C(ServerI18n.t("modqueueStampRejected"))} \xB7 ${C(c.resolved_by||"admin")} \xB7 ${C(c.resolved_ago||"")}`}
        </div>`:"",e=r==="pending"&&s!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${s}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${C(c.id||"")}" data-mq-sev="${C(o)}" style="--mq-sev:${n}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${p})">${C(d)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${C(w)}</div>
            <div class="admin-mq-card__fp">fp:${C(m)}</div>
          </div>
          <div class="admin-mq-card__time">${C(c.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${C(c.content||c.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${n}">${C(ServerI18n.t(M[o]||M.low))}</span>
          <span class="admin-mq-card__rule">${C(ServerI18n.t("modqueueRuleLabel"))}: ${C(c.rule||c.matched_rule||"?")}</span>
          ${e}
        </div>
        ${l}
        ${b}
      </div>`}function A(c,r,o){c&&(c.innerHTML=r.map(n=>F(n,o)).join(""))}function y(){let c=document.getElementById(h);if(!c)return;c.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),c.querySelector(".admin-mq__body").hidden=!0;let r=c.querySelector("[data-mq-empty]");r&&window.AdminEmpty&&(r.hidden=!1,r.innerHTML="",r.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function D(){let c=document.getElementById(h);if(!c)return;if(L.pending.length+L.approved.length+L.rejected.length===0){y();return}c.querySelector(".admin-mq__body").hidden=!1;let o=c.querySelector("[data-mq-empty]");o&&(o.hidden=!0),A(c.querySelector("[data-mq-col-pending]"),L.pending,"pending"),A(c.querySelector("[data-mq-col-approved]"),L.approved,"approved"),A(c.querySelector("[data-mq-col-rejected]"),L.rejected,"rejected");let n=(d,s)=>{c.querySelectorAll(d).forEach(l=>{l.textContent=String(s)})};n("[data-mq-cnt-pending]",L.pending.length),n("[data-mq-cnt-approved]",L.approved.length),n("[data-mq-cnt-rejected]",L.rejected.length);let p=L.pending.length===0;c.querySelectorAll("[data-mq-bulk]").forEach(d=>{d.disabled=p});let m=L.pending[L.pending.length-1],w=c.querySelector("[data-mq-oldest]");if(w){let d=m?N(m):null;w.textContent=d!=null?`oldest: ${d}s`:""}n("[data-mq-throughput]",L.stats.throughput.toFixed?L.stats.throughput.toFixed(1):L.stats.throughput),n("[data-mq-avg-review]",L.stats.avg_review_sec.toFixed?L.stats.avg_review_sec.toFixed(1):L.stats.avg_review_sec),n("[data-mq-auto-rate]",Math.round(L.stats.auto_reject_pct||0)+"%")}async function _(){try{let c=await fetch(f,{credentials:"same-origin"});if(!c.ok){L.pending=[],L.approved=[],L.rejected=[],D();return}let r=await c.json();L.pending=Array.isArray(r.pending)?r.pending:[],L.approved=Array.isArray(r.approved)?r.approved:[],L.rejected=Array.isArray(r.rejected)?r.rejected:[],L.stats=r.stats||L.stats,typeof r.auto_reject_sec=="number"&&(L.autoRejectSec=r.auto_reject_sec),D()}catch{}}async function $(c,r,o){if(window.csrfFetch)try{let n=await window.csrfFetch("/admin/modqueue/"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,...o||{}})});if(n.ok)window.showToast&&window.showToast(r==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),_();else{let p=await n.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:p.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function I(){return`
      <div id="${h}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function H(){let c=document.getElementById(h);c&&c.addEventListener("click",async r=>{let o=r.target.closest("[data-mq-action]");if(o){let p=o.dataset.mqId,m=o.dataset.mqAction;(m==="approve"||m==="reject")&&$(p,m);return}let n=r.target.closest("[data-mq-bulk]");if(n){let p=n.dataset.mqBulk,m=p==="approve-low";if(!await window.HudConfirm?.open({icon:m?"\u2713":"\u2298",title:m?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:m?"warn":"danger",body:m?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:m?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let d=p.startsWith("approve")?"approve":"reject",s=p.endsWith("low")?"low":"high";$(null,"bulk",{action:d,severity:s})}})}function T(){let c=document.querySelector(".admin-dash-grid"),r=document.getElementById(h);if(!r)return;let o=(location.hash||"").replace("#/","").split("/"),n=c?.dataset.activeRoute||o[0]||"",p=c?.dataset.activeLeaf||o[1]||"",m=n==="modqueue"||n==="moderation"&&(p==="queue"||p===""||p==="moderation");r.style.display=m?"":"none",m?(L.timer||(_(),L.timer=setInterval(_,4e3)),L.countdownTimer||(L.countdownTimer=setInterval(D,1e3))):(L.timer&&(clearInterval(L.timer),L.timer=0),L.countdownTimer&&(clearInterval(L.countdownTimer),L.countdownTimer=0))}function g(){let c=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!c||document.getElementById(h)||(c.insertAdjacentHTML("beforeend",I()),H(),T())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(h)&&g(),T()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",()=>{g(),T()}),g()})})()});var wt=ye(()=>{(function(){"use strict";let h="sec-modbans-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},u=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],E={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},C={fingerprint:"FP",ip:"IP",nick:"NICK"},L={rows:[],refreshTimer:0};async function U(){try{let I=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!I.ok)return;let H=await I.json();L.rows=Array.isArray(H.bans)?H.bans:[],N()}catch{}}function M(I){if(!I||I<=0)return"\u2014";let H=Math.floor(I/86400),T=Math.floor(I%86400/3600),g=Math.floor(I%3600/60);return H>0?`${H}d ${T}h`:T>0?`${T}h ${g}m`:`${g}m`}function B(I){let H=I.target_kind;return H==="fingerprint"?`fp:${(I.target||"").slice(0,8)}`:H==="nick"?`@${I.target}`:I.target||"\u2014"}function N(){let I=document.querySelector("[data-modbans-list]");if(!I)return;let H=L.rows||[],T=document.querySelector("[data-modbans-count]");if(T&&(T.textContent=String(H.length)),H.length===0){I.innerHTML="";let g=window.AdminEmpty.render("blacklist");g.dataset.emptyKind="modbans",I.appendChild(g);return}I.innerHTML=H.map(function(g){let c=g.status==="expired",r=g.status==="permanent",o="admin-modbans-chip is-"+g.status,n=r?ServerI18n.t("modbansPermanent"):c?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:M(g.remaining_s)}),p=encodeURIComponent(g.target_kind)+"|"+encodeURIComponent(g.target);return`
        <div class="admin-modbans-row ${c?"is-expired":""}">
          <span class="admin-modbans-target">${f(B(g))}</span>
          <span class="admin-modbans-kind">${f(C[g.target_kind]||g.target_kind)}</span>
          <span class="admin-modbans-reason">${f(g.reason||"\u2014")}</span>
          <span class="${o}">
            ${g.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${f(n)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${p}"
            ${c?"disabled":""}
            title="${c?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${c?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function F(I){let H=I||{},T=H.kind||"ban",g=window.HudConfirm,c=!H.target,r=H.target_kind||"fingerprint",o=H.target||"";return new Promise(function(n){if(!g){n(!1);return}let p=86400,m=!1,w=12,d="hour",s=document.createElement("div");s.className="admin-modbans-modal-body",s.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${f(E[r]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${f(C[r]||"?")} ${f((T||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${f(o?B({target_kind:r,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${c?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(J){return`<button type="button" class="admin-modbans-modal-preset${J===r?" is-active":""}"
                data-modbans-target-kind="${J}">${f(E[J])} ${f(C[J])}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let l=s.querySelector("[data-modbans-custom-row]"),b=s.querySelector("[data-modbans-custom-input]"),e=s.querySelector("[data-modbans-custom-seconds]"),t=s.querySelector("[data-modbans-when]"),a=s.querySelector("[data-modbans-custom]"),i=s.querySelector("[data-modbans-target]"),v=s.querySelector("[data-modbans-target-icon]"),k=s.querySelector("[data-modbans-target-label]"),S=s.querySelector("[data-modbans-target-val]"),x=function(){v.textContent=E[r]||"?",k.textContent=`${C[r]||"?"} ${(T||"ban").toUpperCase()}`,S.textContent=o?B({target_kind:r,target:o}):"\u2014"},R=function(){return Math.max(1,parseInt(b.value,10)||1)*(d==="day"?86400:3600)},G=function(){if(p===0){t.textContent=ServerI18n.t("modbansWhenPermanent"),t.classList.remove("is-custom");return}let J=new Date(Date.now()+p*1e3),K=j=>String(j).padStart(2,"0"),Z=`${J.getFullYear()}-${K(J.getMonth()+1)}-${K(J.getDate())} ${K(J.getHours())}:${K(J.getMinutes())}`;m?(t.textContent=ServerI18n.t("modbansWhenCustom",{n:w,unit:ServerI18n.t(d==="day"?"modbansDay":"modbansHour"),stamp:Z}),t.classList.add("is-custom")):(t.textContent=ServerI18n.t("modbansWhenPreset",{dur:M(p),stamp:Z}),t.classList.remove("is-custom"))},q=function(){let J=R();e.textContent=`= ${J.toLocaleString()}s`,m&&(w=Math.max(1,parseInt(b.value,10)||1),p=J,G())},z=s.querySelector("[data-modbans-presets]"),P=function(){m=!0,l.hidden=!1,z.querySelectorAll(".admin-modbans-modal-preset").forEach(function(J){J.classList.toggle("is-active",J===a)}),q()},W=function(J){m=!1,l.hidden=!0,z.querySelectorAll(".admin-modbans-modal-preset").forEach(function(K){K.classList.toggle("is-active",K===J)})};x(),G(),q(),s.addEventListener("click",function(J){let K=J.target.closest("[data-modbans-target-kind]");if(K){r=K.dataset.modbansTargetKind,K.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Q){Q.classList.toggle("is-active",Q===K)}),x();return}if(J.target.closest("[data-modbans-custom]")){P();return}let Z=J.target.closest("[data-modbans-custom-unit]");if(Z){d=Z.dataset.modbansCustomUnit||"hour",s.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Q){Q.classList.toggle("is-active",Q===Z)}),q();return}let j=J.target.closest("[data-modbans-duration]");j&&(p=parseInt(j.dataset.modbansDuration,10)||0,W(j),G())}),b.addEventListener("input",q),i&&i.addEventListener("input",function(){o=i.value.trim(),x()});let ee=s.querySelector("[data-modbans-reason]");g.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:s,width:480}).then(function(J){if(!J){n(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),n(!1);return}p===0?g.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${f(B({target_kind:r,target:o}))}</b>`})}).then(function(K){if(!K){n(!1);return}A(r,o,p,ee.value.trim(),T).then(n)}):A(r,o,p,ee.value.trim(),T).then(n)})})}async function A(I,H,T,g,c){try{let r=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:I,target:H,duration_s:T,reason:g||"",kind:c||"ban"})});if(!r.ok)throw new Error(`HTTP ${r.status}`);return window.showToast&&window.showToast(T===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:M(T)}),!0),U(),!0}catch(r){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:r.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function y(I){let H=(I||"").split("|");if(H.length!==2)return;let T=decodeURIComponent(H[0]),g=decodeURIComponent(H[1]);try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:T,target:g})});if(!c.ok)throw new Error(`HTTP ${c.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),U()}catch(c){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1)}}function D(){return`
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
      </div>`}function _(){let I=document.getElementById(h);if(!I||I.dataset.modbansBound==="1")return;I.dataset.modbansBound="1",I.addEventListener("click",function(T){if(T.target.closest("[data-modbans-add]")){F({kind:"ban"});return}let g=T.target.closest("[data-modbans-unban]");g&&!g.disabled&&y(g.dataset.modbansUnban)});let H=I.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function $(){let I=document.getElementById("settings-grid");!I||document.getElementById(h)||(I.insertAdjacentHTML("beforeend",D()),_(),U(),L.refreshTimer||(L.refreshTimer=setInterval(U,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&$()}),window.ModBans={openPicker:F,refreshList:U,formatTarget:B,formatRemaining:M}})()});var yt=ye(()=>{(function(){"use strict";let h="admin-mobile-nav-root",f=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],u=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"}],E={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",themes:"viewer",appearance:"viewer",security:"system",backup:"system",integrations:"system",extensions:"system",firetoken:"system",webhooks:"system",plugins:"system","api-tokens":"system",scheduler:"system",automation:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets"},C=!1,L=0;function U(){return`
      <nav id="${h}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
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
          ${f.map(_=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${_.id}" data-mn-route="${_.route||""}" ${_.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${_.icon}</span>
              <span class="admin-mobile-nav__label">${_.labelKey?ServerI18n.t(_.labelKey):_.label}</span>
              ${_.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${_.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function M(){let _=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",$=E[_]||_;return f.some(I=>I.id===$)?$:u.some(I=>I.route===$)?"more":""}function B(){let _=document.getElementById(h);if(!_)return;let $=M();_.querySelectorAll("[data-mn-tab]").forEach(I=>{I.classList.toggle("is-active",I.dataset.mnTab===$),I.dataset.mnTab!=="more"&&I.setAttribute("aria-current",I.dataset.mnTab===$?"page":"false")})}function N(_){let $=document.getElementById(h);if(!$)return;C=_,$.dataset.overflow=_?"open":"closed",$.querySelector("[data-mn-overflow]").hidden=!_,$.querySelector("[data-mn-backdrop]").hidden=!_;let I=$.querySelector("[data-mn-tab='more']");I?.classList.toggle("is-active",_),I?.setAttribute("aria-expanded",_?"true":"false")}function F(_){if(_.target.closest("[data-mn-backdrop]")){N(!1);return}if(_.target.closest("[data-mn-logout]")){N(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let $=_.target.closest("[data-mn-tab]");if($){if($.dataset.mnTab==="more"){N(!C);return}N(!1),$.dataset.mnRoute&&(location.hash="#/"+$.dataset.mnRoute);return}let I=_.target.closest("[data-mn-route]");I&&I.classList.contains("admin-mobile-nav__o-row")&&(N(!1),location.hash="#/"+I.dataset.mnRoute)}async function A(){try{let _=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!_.ok)return;let $=await _.json(),I=Array.isArray($.pending)?$.pending.length:0;L=I;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(I),H.hidden=!(I>0)}catch{}}function y(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let _=0;function $(){let I=document.activeElement,H=I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(_),_=requestAnimationFrame($)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(_),_=requestAnimationFrame(()=>setTimeout($,50))})}function D(){document.getElementById(h)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",U()),document.addEventListener("click",F),window.addEventListener("hashchange",()=>{N(!1),B()}),B(),A(),setInterval(A,8e3),y())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",D):D()})()});var St=ye(()=>{(function(){"use strict";var h="admin-session-expired-root",f=!1,u=null;function E(B,N){try{var F=window.ServerI18n&&ServerI18n.t(B);return F&&F!==B?F:N}catch{return N}}function C(){var B=document.getElementById(h);if(B&&B.remove(),document.body.classList.remove("is-session-expired"),f=!1,u&&u.focus)try{u.focus()}catch{}u=null}function L(B){if(B.key==="Tab"){var N=document.getElementById(h);if(N){var F=N.querySelectorAll("input, button");if(F.length){var A=F[0],y=F[F.length-1];B.shiftKey&&document.activeElement===A?(B.preventDefault(),y.focus()):!B.shiftKey&&document.activeElement===y&&(B.preventDefault(),A.focus())}}}}function U(){if(!(f||document.getElementById(h))){f=!0,u=document.activeElement,document.body.classList.add("is-session-expired");var B=document.createElement("div");B.id=h,B.className="admin-sx",B.setAttribute("role","alertdialog"),B.setAttribute("aria-modal","true"),B.setAttribute("aria-labelledby","admin-sx-title"),B.setAttribute("aria-describedby","admin-sx-body"),B.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+E("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+E("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+E("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+E("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+E("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+E("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(B),document.addEventListener("keydown",L,!0);var N=B.querySelector("#admin-sx-password");setTimeout(function(){try{N.focus()}catch{}},30),B.querySelector("[data-sx-form]").addEventListener("submit",function(F){F.preventDefault(),M(B,N)})}}function M(B,N){var F=B.querySelector("[data-sx-error]"),A=B.querySelector(".admin-sx__submit");F.hidden=!0,A.disabled=!0;var y=new URLSearchParams;y.set("password",N.value),B.querySelector("#admin-sx-remember").checked&&y.set("remember","1");var D=window.__adminRawFetch||window.fetch;D.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:y.toString()}).then(function(_){return _.json().then(function($){return{status:_.status,data:$}},function(){return{status:_.status,data:{}}})}).then(function(_){if(A.disabled=!1,_.status===200&&_.data&&_.data.ok){var $=document.querySelector('meta[name="csrf-token"]');$&&_.data.csrf_token&&($.content=_.data.csrf_token),document.removeEventListener("keydown",L,!0),C(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(E("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}_.status===429?F.textContent=E("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):F.textContent=E("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),F.hidden=!1,N.select()}).catch(function(){A.disabled=!1,F.textContent=E("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),F.hidden=!1})}window.AdminSessionExpired={open:U,close:C,isOpen:function(){return f}}})()});var kt=ye(()=>{(function(){"use strict";let h="admin-reconnect-banner",C=0,L=0,U="ok",M=0,B=5e3,N=!1,F=0;function A(o){if(U!==o){if(U=o,o==="ok"||o==="dismissed"){D(),o==="ok"&&(C=0,L=0,B=5e3);return}y()}}function y(){let o=document.getElementById(h);o||(o=document.createElement("div"),o.id=h,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=U;let n=U==="exhausted",p=n?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${p}`,o.innerHTML=n?$():_(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>A("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",n),F||(F=setInterval(I,250))}function D(){let o=document.getElementById(h);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),F&&(clearInterval(F),F=0)}function _(){let o=Math.max(0,(M-Date.now())/1e3),n=B/1e3,p=Math.min(100,(n-o)/n*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:L})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${p}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function $(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function I(){if(U!=="reconnecting")return;let o=document.getElementById(h);if(!o)return;let n=Math.max(0,(M-Date.now())/1e3),p=B/1e3,m=Math.min(100,(p-n)/p*100),w=o.querySelector(".admin-rcb__progress-fill");w&&(w.style.width=m+"%")}function H(){L=0,C=0,B=5e3,A("reconnecting"),T()}async function T(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?g():o.status===401||o.status===403?A("ok"):c()}catch{c()}}function g(){A("ok")}function c(){if(C+=1,L+=1,L>=10){A("exhausted");return}C>=3&&(B=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,L-1))),M=Date.now()+B,A("reconnecting"),setTimeout(T,B))}function r(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,n=window.fetch;window.__adminRawFetch=n,document.addEventListener("admin:session-restored",()=>{N=!1,g()});async function p(m){try{let w=await m;return w&&w.ok?U!=="ok"&&U!=="dismissed"&&g():w&&w.status===401&&!N?(N=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):w&&w.status>=500&&c(),w}catch(w){throw c(),w}}typeof o=="function"&&(window.csrfFetch=function(){return p(o.apply(this,arguments))}),window.fetch=function(m,w){let d=typeof m=="string"?m:m&&m.url||"",s=n.call(this,m,w);return d.startsWith("/admin/")||d.indexOf("//")===-1&&d.startsWith("admin/")?p(s):s}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var It=ye(()=>{(function(){"use strict";let h="admin-help-drawer-root",f={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},u=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],E=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function C(_){return _==null?"":String(_).replace(/[&<>"']/g,function($){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[$]})}function L(){let _=(location.hash||"").replace("#/","").split("/")[0]||"";return f[_]?_:"_default"}function U(){return`
      <div id="${h}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function M(){let _=f[L()],$=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",I=_.titleKey?ServerI18n.t(_.titleKey):_.title,H=_.tipKeys.map(r=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${C(typeof r=="string"?ServerI18n.t(r):r.literal)}</span>
      </div>`).join(""),T=_.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${C(ServerI18n.t(_.fieldTipKey))}</span>
      </div>`:"",g=u.map(r=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${C(r.term)}</div>
        <div class="admin-help__glossary-def">${C(ServerI18n.t(r.defKey))}</div>
      </div>`).join(""),c=E.map(r=>`
      <a class="admin-help__resource" href="${C(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${C(r.label)}</span>
        <span class="admin-help__resource-url">${C(r.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${C(I)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${T}
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
          <div class="admin-help__glossary">${g}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${c}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${$?"v"+C($):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function B(){let _=document.getElementById(h);_||(document.body.insertAdjacentHTML("beforeend",U()),_=document.getElementById(h),_.addEventListener("click",$=>{if($.target.closest("[data-help-close]")){N();return}$.target.closest("[data-help-shortcuts]")&&(N(),window.AdminShortcuts&&window.AdminShortcuts.open())})),_.querySelector("[data-help-body]").innerHTML=M(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",A)}function N(){let _=document.getElementById(h);_&&_.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",A)}function F(){document.getElementById(h)?N():B()}function A(_){_.key==="Escape"&&(_.preventDefault(),N())}function y(_){let $=_.target;$&&($.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable)||_.key==="F1"&&(_.preventDefault(),F())}function D(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",y)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",D):D(),window.AdminHelp={open:B,close:N,toggle:F}})()});var Tt=ye(()=>{(function(){"use strict";var h="admin-shortcuts-root",f=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function u(c,r){try{var o=window.ServerI18n&&ServerI18n.t(c);return o&&o!==c?o:r}catch{return r}}function E(c,r){window.showToast&&window.showToast(c,r!==!1)}function C(c,r){return(window.csrfFetch||window.fetch)(c,r||{})}function L(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}function U(){window.AdminOverlayControl&&window.AdminOverlayControl.toggleDisplay()}function M(){window.AdminOverlayControl&&window.AdminOverlayControl.clearScreen()}async function B(){var c="idle";try{var r=await fetch("/admin/poll/status",{credentials:"same-origin"});r.ok&&(c=(await r.json()).state||"idle")}catch{}if(c==="idle"){location.hash="#/polls",E(u("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=c==="active";try{var n=await C(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!n.ok)throw new Error("HTTP "+n.status);E(u(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{E(u("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function N(c){return f?c.metaKey:c.ctrlKey}var F=f?"\u2318":"Ctrl",A=[{group:"global",keys:[F,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(c){return N(c)&&(c.key==="k"||c.key==="K")},run:L},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(c){return c.key==="?"&&!N(c)&&!c.altKey||c.key==="/"&&N(c)},run:function(){H()}},{group:"global",keys:[F,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u66AB\u505C\u986F\u793A\uFF0F\u7E7C\u7E8C\u986F\u793A",match:function(c){return N(c)&&c.shiftKey&&(c.key==="d"||c.key==="D")},run:U},{group:"global",keys:[F,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u756B\u9762",match:function(c){return N(c)&&c.shiftKey&&c.key==="Backspace"},run:M},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(c){return!N(c)&&"jkJK".indexOf(c.key)>=0},run:function(c){window.AdminLiveFeed.moveFocus(c.key==="j"||c.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(c){return!N(c)&&(c.key==="b"||c.key==="B")},run:function(c){window.AdminLiveFeed.blockFocused(c.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(c){return!N(c)&&c.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(c){return!N(c)&&(c.key==="p"||c.key==="P")},run:B}];function y(c){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(c):c==null?"":String(c).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})}function D(c){return A.filter(function(r){return r.group===c}).map(function(r){var o=r.keys.map(function(n){return n==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+y(n)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+y(u(r.labelKey,r.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function _(){var c=document.getElementById(h);c&&c.remove(),document.removeEventListener("keydown",$,!0)}function $(c){(c.key==="Escape"||c.key==="?")&&(c.preventDefault(),_())}function I(){if(!document.getElementById(h)){var c=document.createElement("div");c.id=h,c.className="admin-ks",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","admin-ks-title"),c.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+y(u("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+y(u("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+D("global")+'</div><div class="admin-ks__group-label">'+y(u("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+D("feed")+'</div><p class="admin-ks__note">'+y(u("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+y(u("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(c),c.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&_()}),document.addEventListener("keydown",$,!0);var r=c.querySelector(".admin-ks__close");r&&setTimeout(function(){try{r.focus()}catch{}},30)}}function H(){document.getElementById(h)?_():I()}function T(c){if(!c)return!1;if(c.isContentEditable)return!0;var r=(c.tagName||"").toLowerCase();return r==="input"||r==="textarea"||r==="select"}function g(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(c){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var r=T(document.activeElement),o=0;o<A.length;o++){var n=A[o];if(n.group==="feed"){if(r||!g())continue}else if(r&&!N(c))continue;if(n.match(c)){c.preventDefault(),n.run(c);return}}}),window.AdminShortcuts={open:I,close:_,toggle:H,list:function(){return A.slice()}}})()});var _t=ye(()=>{(function(){"use strict";let h="theme-mode",f="admin-theme-mode",u="admin-theme-toggle";(function(){try{if(localStorage.getItem(h)!=null)return;let y=localStorage.getItem(f);(y==="light"||y==="dark"||y==="auto")&&(localStorage.setItem(h,y),localStorage.removeItem(f))}catch{}})();function C(){try{let A=localStorage.getItem(h);if(A==="light"||A==="dark"||A==="auto")return A}catch{}return"auto"}function L(A){try{localStorage.setItem(h,A)}catch{}}function U(A){let y=document.documentElement;A==="auto"?y.removeAttribute("data-theme"):y.setAttribute("data-theme",A),B(A)}function M(A){return A==="light"||A==="dark"?A:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function B(A){let y=document.getElementById(u);if(!y)return;let D=M(A);y.dataset.mode=A,y.dataset.effective=D,y.textContent=A==="auto"?"\u25D0":D==="light"?"\u2600":"\u263E",y.title=A==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:D==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):A==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function N(){let A=C(),y=A==="auto"?"light":A==="light"?"dark":"auto";L(y),U(y)}function F(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let A=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,y=document.getElementById(u);if(y){A&&y.classList.contains("admin-theme-toggle--floating")&&A.parentNode&&!A.parentNode.contains(y)&&(y.classList.remove("admin-theme-toggle--floating"),A.parentNode.insertBefore(y,A));return}let D=document.createElement("button");D.id=u,D.type="button",D.className="admin-theme-toggle",D.addEventListener("click",N),A&&A.parentNode?A.parentNode.insertBefore(D,A):(D.classList.add("admin-theme-toggle--floating"),document.body.appendChild(D)),B(C())}if(U(C()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{C()==="auto"&&B("auto")})}catch{}window.addEventListener("storage",A=>{A.key===h&&U(C())}),window.AdminThemeSwitcher={getMode:C,setMode:function(A){A!=="auto"&&A!=="light"&&A!=="dark"||(L(A),U(A),B(A),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:A}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0})}):(F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0}))})()});var Et=ye(()=>{(function(){"use strict";var h={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},f=[];window.DanmuStore={get:function(u){return h[u]},set:function(u,E){h[u]=E,f.forEach(function(C){C(u,E)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+u,E)},subscribe:function(u){f.push(u)},getAll:function(){return Object.assign({},h)}}})()});var $t=ye(()=>{(function(){"use strict";let h=window.DANMU_CONFIG||{},f=Number(h.loginLimit)>0?Number(h.loginLimit):5,u=Number(h.loginWindow)>0?Number(h.loginWindow):300,E=0;function C(){return window.__adminCtx||{}}function L(){let N=C();return typeof N.getSettings=="function"?N.getSettings()||{}:{}}function U(){let N=L();if(N&&typeof N.OpsContact<"u"){let F=N.OpsContact;if(Array.isArray(F))return F[3]||F[0]||null;if(typeof F=="string")return F}return null}function M(){let N=C().appContainer||document.getElementById("app-container");if(!N)return;let F=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";N.innerHTML=`
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
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>${F?` \xB7 v${F}`:""}
            </span>
          </div>
        </div>
      </div>
    `;let A=N.querySelector("[data-login-reveal]");A&&A.addEventListener("click",()=>{let $=document.getElementById("password");if(!$)return;let I=$.type==="text";$.type=I?"password":"text",A.textContent=ServerI18n.t(I?"adminLoginReveal":"adminLoginHide");try{$.focus()}catch{}});let y=document.getElementById("loginForm"),D=document.getElementById("password"),_=document.getElementById("loginAttemptsHint");if(y){try{let $=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite($)&&$>0){E=$;let I=Math.max(0,f-E);if(_&&E>0&&I>0){_.hidden=!1;let H=document.getElementById("password");H&&H.classList.add("is-error"),_.textContent=ServerI18n.t("loginAttemptsRemaining",{n:I,min:Math.max(1,Math.ceil(u/60))})}}}catch{}y.addEventListener("submit",async $=>{if($.preventDefault(),!D)return;let I=new URLSearchParams;I.set("password",D.value),document.getElementById("admin-login-remember")?.checked&&I.set("remember","1");try{let H=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I.toString(),redirect:"manual"});if(H.status===429){let T=H.headers.get("Retry-After"),g=parseInt(T,10),c=Number.isFinite(g)&&g>0?g:u;B(c);return}E+=1;try{sessionStorage.setItem("admin_login_attempts",String(E))}catch{}window.location.reload()}catch(H){console.error("Login submit failed:",H),_&&(_.hidden=!1,_.textContent=ServerI18n.t("networkError"))}})}}function B(N){let F=document.getElementById("adminLoginCard");if(!F)return;let A=U(),y=A?`<a class="admin-lockout-contact" href="${A}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";F.classList.add("admin-lockout-card"),F.innerHTML=`
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
    `;let D=document.getElementById("lockoutCountdown"),_=N,$=H=>{let T=Math.floor(H/60),g=H%60;return`${String(T).padStart(2,"0")}:${String(g).padStart(2,"0")}`};D&&(D.textContent=$(_));let I=setInterval(()=>{_-=1,D&&(D.textContent=$(Math.max(0,_))),_<=0&&(clearInterval(I),E=0,M(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:M,renderLockout:B}})()});var xt=ye(()=>{(function(){"use strict";function h(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function f(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function u(){try{let e=h();await e.prime();let t=e.get("history_stats"),[a,i,v]=await Promise.all([t?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!i.ok)return;let k=t||(a&&a.ok?await a.json():null);if(!k)return;let S=(await i.json()).distribution||[],x=k.stats&&k.stats.total||0,R=S.reduce((J,K)=>K.count>(J?.count||-1)?K:J,null),G=R?R.count:0,q=R?(R.hour||"").slice(-5):"\u2014",z=document.querySelector('[data-kpi="messages"]');z&&(z.querySelector("[data-kpi-value]").textContent=x.toLocaleString());let P=document.querySelector('[data-kpi="peak"]');P&&(P.querySelector("[data-kpi-value]").textContent=G.toLocaleString());let W=document.querySelector('[data-kpi="unique-fp"]');if(W){let J=new Set;(k.records||[]).forEach(K=>{let Z=K.fingerprint||K.fp||K.user_fingerprint;Z&&J.add(Z)}),W.querySelector("[data-kpi-value]").textContent=J.size.toLocaleString()}let ee=document.querySelector('[data-kpi="session"]');if(ee){let J=v&&v.ok?await v.json():null,K=J&&J.status==="live",Z=ee.querySelector("[data-kpi-value]");if(K&&J.started_at){let j=Math.max(0,Math.floor(Date.now()/1e3-J.started_at)),Q=Math.floor(j/3600),ne=Math.floor(j%3600/60);Z.textContent=Q>0?`${Q}:${String(ne).padStart(2,"0")}:${String(j%60).padStart(2,"0")}`:`${ne}:${String(j%60).padStart(2,"0")}`}else Z.textContent="\u2014"}}catch{}}function E(e,t){let a=document.querySelector(e);if(a){if(typeof t!="number"||t<=0){a.hidden=!0;return}a.hidden=!1,a.textContent=t>999?"999+":String(t)}}async function C(){try{let e=h();await e.prime();let t=e.get("blacklist"),a=e.get("widgets"),i=e.get("history_stats"),v=e.get("effects");E("[data-count-blacklist]",Array.isArray(t)?t.length:0),E("[data-count-widgets]",Array.isArray(a?.widgets)?a.widgets.length:0),E("[data-count-messages]",i?.stats?.last_24h||0),E("[data-count-effects]",Array.isArray(v?.effects)?v.effects.length:0);try{let k=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(k.ok){let S=await k.json();E("[data-count-plugins]",Array.isArray(S?.plugins)?S.plugins.length:0)}}catch{}}catch{}}async function L(){C(),U(),l()}async function U(){let e=document.querySelector("[data-dash-poll-body]"),t=document.querySelector("[data-dash-poll-timer]");if(e)try{let a=h();await a.prime();let v=a.get("metrics");if(!v){let G=await fetch("/admin/metrics",{credentials:"same-origin"});if(!G.ok)return;v=await G.json()}let k=v.poll_state;if(!k||!k.active||!Array.isArray(k.options)||k.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,t&&(t.textContent="");return}let S=k.options.reduce((G,q)=>G+(q.votes||0),0),x=["A","B","C","D","E","F"],R=0;if(k.options.forEach((G,q)=>{(G.votes||0)>(k.options[R].votes||0)&&(R=q)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${f(k.question||ServerI18n.t("dashPollRunning"))}</div>`+k.options.map((G,q)=>{let z=S?Math.round(G.votes/S*100):0;return`
            <div class="admin-dash-poll-opt ${q===R&&S>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${x[q]||String(q+1)}</span>
                <span class="label">${f(G.label||"")}</span>
                <span class="pct">${z}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:G.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${z}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:S})}</div>`,t){let G=k.remaining_seconds;t.textContent=typeof G=="number"&&G>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(G/60),ss:String(G%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function M(e){let t=e.visible!==!1,a=e.config&&e.config.title||e.type||"widget",i=(e.type||"widget").toUpperCase(),v=(e.position||"\u2014").toUpperCase(),k=t?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",S=e.created_at&&t?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,x=S!=null?(()=>{let R=Math.floor(S/86400),G=Math.floor(S%86400/3600),q=Math.floor(S%3600/60),z=S%60;return R>0?`UPTIME \xB7 ${R}d ${String(G).padStart(2,"0")}h`:G>0?`UPTIME \xB7 ${G}:${String(q).padStart(2,"0")}:${String(z).padStart(2,"0")}`:`UPTIME \xB7 ${q}:${String(z).padStart(2,"0")}`})():`STATUS \xB7 ${t?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${f(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${k}"></span>
          <span class="kind">${f(i)}</span>
          <span class="cat">${f(v)}</span>
        </div>
        <div class="title">${f(a)}</div>
        <div class="uptime">${x}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${t?" is-active":""}" data-widget-action="toggle" data-running="${t?"1":"0"}">${t?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function B(e,t){try{let a=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!t}})});if(!a.ok)throw new Error("HTTP "+a.status);F()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function N(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",t=>{let a=t.target.closest(".admin-dash-widget-tile");if(!a)return;let i=t.target.dataset.widgetAction,v=a.dataset.widgetId;if(!(!i||!v)){if(i==="toggle")B(v,t.target.dataset.running==="1");else if(i==="config"){let k=document.querySelector('[data-route="widgets"]');k&&k.click()}}}))}async function F(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let t=h();await t.prime();let a=t.get("widgets");if(!a){let v=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!v.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}a=await v.json()}let i=(a.widgets||a.items||[]).slice(0,4);if(i.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+i.map(M).join("")+"</div>",N(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let A=null,y=null,D=null;function _(e){let t=Math.max(0,Math.floor(Date.now()/1e3-e)),a=Math.floor(t/3600),i=Math.floor(t%3600/60),v=t%60;return a>0?`${a}:${String(i).padStart(2,"0")}:${String(v).padStart(2,"0")}`:`${String(i).padStart(2,"0")}:${String(v).padStart(2,"0")}`}function $(e){let t=document.getElementById("admin-session-banner"),a=document.getElementById("sec-live-feed");if(a&&a.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),t&&t.classList.toggle("is-hero",!(e&&e.status==="live")),!t)return;if(A=e,!(e&&e.status==="live"))t.hidden=!1,t.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let v=e.started_at||Date.now()/1e3;t.hidden=!1,t.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${f(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,I(v)}t.dataset.bound||(t.dataset.bound="1",t.addEventListener("click",T))}function I(e){D&&clearInterval(D);let t=()=>{let a=document.querySelector("[data-sess-timer]");a&&(a.textContent=_(e))};t(),D=setInterval(t,1e3)}function H(){D&&(clearInterval(D),D=null)}async function T(e){let t=e.target.closest("[data-sess-action]");if(!t)return;let a=t.dataset.sessAction;if(a==="open"){let i=document.querySelector("[data-sess-name]"),v=(i?i.value:"").trim();if(!v){i&&i.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}t.disabled=!0;try{let k=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:v})}),S=await k.json();if(!k.ok){window.showToast&&window.showToast(S.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:v}),!0),$(S.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{t.disabled=!1}}else if(a==="close"){let i=t.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",v=(x,R)=>`<option value="${x}"${x===i?" selected":""}>${R}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${v("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${v("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${v("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;t.disabled=!0;let S=document.getElementById("sessCloseBehavior")?.value;if(S&&S!==i)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:S})})}catch{}try{let x=await window.csrfFetch("/admin/session/close",{method:"POST"}),R=await x.json();if(!x.ok){window.showToast&&window.showToast(R.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),$({status:"idle",viewer_end_behavior:R.archived&&R.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{t.disabled=!1}}}async function g(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let t=await e.json();$(t)}catch{}}function c(){g(),y&&clearInterval(y),y=setInterval(g,1e4)}function r(){y&&(clearInterval(y),y=null),H()}let o=null,n=null,p=0;function m(){let e=document.querySelector("[data-cockpit-overlay]"),t=window.AdminOverlayControl,a=n;if(!e||!t||!a)return;e.classList.toggle("is-on",a.live);let i=(S,x)=>{S.textContent!==x&&(S.textContent=x)},v=e.querySelector("[data-cockpit-status]");v&&i(v,t.statusText(a.live,a.count));let k=e.querySelector('[data-cockpit-action="toggle"]');k&&(k.dataset.i18n=t.toggleKey(a.live),i(k,ServerI18n.t(k.dataset.i18n)),k.dataset.next=a.live?"standby":"live")}async function w(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let t=p,a=null,i=null;try{let S=await fetch("/overlay_status",{credentials:"same-origin"});S.ok&&(a=(await S.json()).overlay_count||0)}catch{}try{let S=await fetch("/admin/broadcast/status",{credentials:"same-origin"});S.ok&&(i=(await S.json()).mode==="live")}catch{}let v=n;if(!v&&i===null)return;n={live:i!==null&&t===p?i:v?v.live:i,count:a!==null?a:v?v.count:0},m()}document.addEventListener("admin-overlay-state",e=>{let t=e&&e.detail||{};p+=1,n={live:!!t.live,count:typeof t.count=="number"?t.count:n?n.count:0},m()}),document.addEventListener("admin-route-applied",e=>{let t=e&&e.detail&&e.detail.route;t!=="live"&&t!=="dashboard"||(m(),w())});function d(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async i=>{let v=i.target.closest("[data-cockpit-action]");if(!v)return;let k=v.dataset.cockpitAction;if(k==="clear"){window.AdminOverlayControl?.clearScreen();return}k==="toggle"&&(await window.AdminOverlayControl?.setDisplay(v.dataset.next==="live"),w())});let t=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');t&&t.addEventListener("click",s);let a=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');a&&a.addEventListener("click",()=>{location.hash="#/polls"})}async function s(){let e;try{let i=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);e=await i.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let t=document.createElement("div");t.className="admin-soh-qr",t.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:t,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&window.AdminUtils.copyText(e.url)}function l(){d(),w(),o&&clearInterval(o),o=setInterval(w,5e3)}function b(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:u,refreshSummary:L,refreshSidebarBadges:C,populatePoll:U,populateWidgets:F,refreshSessionBanner:g,startSessionPolling:c,stopSessionPolling:r,refreshCockpitOverlay:w,renderCockpitOverlay:m,startCockpitPolling:l,stopCockpitPolling:b}})()});var Lt=ye(()=>{(function(){"use strict";let h="sec-viewer-config-defaults",f="sec-overlay-layout",u="sec-viewer-config-limits",E=["sec-themes",h,"sec-viewer-theme",u],C=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],L=window.AdminUtils&&window.AdminUtils.escapeHtml||function(O){return String(O).replace(/[&<>"']/g,function(Y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[Y]})},U=window.DANMU_CONFIG?.settingRanges||{},M=Object.fromEntries(Object.entries({Opacity:{min:20,max:100,step:1,unit:"%"},FontSize:{min:16,max:64,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}}).map(([O,Y])=>{let X=U[O]||{};return[O,{...Y,min:Number.isFinite(Number(X.min))?Number(X.min):Y.min,max:Number.isFinite(Number(X.max))?Number(X.max):Y.max}]})),B=[14,20,32,44,64],N=window.DANMU_CONFIG?.defaultColorPalette||[],F=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}],A={stroke:[{value:"none",labelKey:"themeStrokeNone"},{value:"thin",labelKey:"themeStrokeThin"},{value:"thick",labelKey:"themeStrokeThick"}],shadow:[{value:"none",labelKey:"themeShadowNone"},{value:"soft",labelKey:"themeShadowSoft"},{value:"strong",labelKey:"themeShadowStrong"}]};function y(O,Y){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let X=window.ServerI18n.t(O,Y);if(X&&X!==O)return X}return O}let D={};function _(O){if(D[O]!=null)return D[O];let Y=M[O];return Y?Y.step:1}function $(O,Y){D[O]=Number(Y)||_(O)}let I={options:null,fonts:[],allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",paletteInvalid:!1,palettePreview:null,paletteNotice:null},H=[{value:"png",label:"PNG"},{value:"jpg",label:"JPG"},{value:"gif",label:"GIF"},{value:"webp",label:"WebP"}],T=["Color","FontFamily","Layout"];function g(O){return T.indexOf(O)!==-1}function c(O){let Y=I.options&&I.options[O],X=Y&&Y[1];return Array.isArray(X)?X.slice():[]}function r(O){return O==="Color"?N.map(Y=>Y.replace(/^#/,"").toUpperCase()):O==="Layout"?F.map(Y=>Y.value):O==="FontFamily"?(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(X=>typeof X=="string"?X:X.name||X.family||"").filter(Boolean):[]}function o(O,Y){return O==="Color"?String(Y||"").replace(/^#/,"").toUpperCase():String(Y||"")}function n(){return`
      <div id="${h}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-dsp2-grid">
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head" aria-hidden="true">
              <span>${L(y("displayColParam"))}</span>
              <span>${L(y("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right">${L(y("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):L(y("loading"))}
            </div>
          </div>

          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${L(y("mlLivePreview"))}</span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${L(y("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${L(y("displayPreviewSample2"))}</span>
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
                \u21BA ${L(y("displayDeployRevert"))}
              </button>
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export">
                \u2197 ${L(y("displayExportJson"))}
              </button>
            </div>
          </div>
        </div>

        <!-- \u89C0\u773E\u5916\u90E8\u5716\u7247\uFF085.8.0\uFF09\u3002\u9810\u8A2D\u95DC\u9589\uFF1B\u5224\u65B7\u5728\u4F3A\u670D\u5668\uFF08/fire\uFF09\uFF0C\u9019\u88E1\u53EA\u8B80\u5BEB
             /admin/viewer-images\u3002\u95DC\u9589\u6642\u7DB2\u7AD9\u8207\u683C\u5F0F\u5169\u5217\u6536\u8D77\u4F86\u3002 -->
        <div id="viewer-images-group">
          <div class="admin-ui-group-label">${L(y("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${L(y("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall admin-vi-row" data-vi-row style="display:none">
              <label class="lbl" for="viewer-images-hosts">${L(y("viHosts"))}</label>
              <span class="val admin-vi-hosts">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off"
                  placeholder="${L(y("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row admin-vi-row" data-vi-row style="display:none" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${L(y("viExtensions"))}</span>
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
      </div>`}function p(){return`
      <details id="${f}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
        <summary class="admin-ui-page-title">${L(y("overlayLayoutFoldTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
          <div class="admin-ui-group-label">${L(y("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlMaxTracks"))}
                <span class="sub">${L(y("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlAvoidOverlap"))}
                <span class="sub">${L(y("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${L(y("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002 -->
          <div class="admin-ui-group-label">${L(y("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlSafeArea"))}
                <span class="sub">${L(y("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${L(y("dlStrokeMode"))}
                <span class="sub">${L(y("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${L(y("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${L(y("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${L(y("dlStrokeNever"))}</button>
              </span>
            </div>
            <!-- 2026-09-08\uFF1A\u6253\u5B57\u6295\u7968\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\uFF0C
                 \u800C\u662F\u8ABF\u6697\u3002\u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${L(y("dlDimPollVotes"))}
                <span class="sub">${L(y("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${L(y("dlPollVoteOpacity"))}
                <span class="sub">${L(y("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>
      </details>`}let m=[{key:"Opacity",labelKey:"displayLabelOpacity",kind:"slider",fmt:O=>`${Math.round(O)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",kind:"size",fmt:O=>`${O}px`},{key:"Speed",labelKey:"displayLabelSpeed",kind:"slider",fmt:O=>`${(+O).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",kind:"color",fmt:O=>`#${String(O||"").replace(/^#/,"").toUpperCase()||"\u2014"}`},{key:"FontFamily",labelKey:"displayLabelFontFamily",kind:"pick",fmt:O=>O||"\u2014"},{key:"Layout",labelKey:"displayLabelLayout",kind:"pick",fmt:O=>w(O)},{key:"Effects",labelKey:"displayLabelEffect",kind:"effects",fixed:!0},{key:"stroke",labelKey:"themeDetailStroke",kind:"theme",fixed:!0},{key:"shadow",labelKey:"themeDetailShadow",kind:"theme",fixed:!0}];function w(O){let Y=F.find(X=>X.value===O);return Y?y(Y.labelKey):O||"\u2014"}function d(O){let Y=window.AdminThemes;return Y&&typeof Y.segOf=="function"?Y.segOf(O):null}function s(O){let Y=I.options||{};if(O.kind==="theme")return!1;if(O.kind==="effects")return!Y.Effects||Y.Effects[0]!==!1;let X=Y[O.key];return!!(X&&X[0]!==!1)}function l(O){let Y=window.AdminThemes,X=Y&&typeof Y.styleDefaults=="function"?Y.styleDefaults():null;return X&&X[O]||null}function b(O){let Y=l(O);return Y&&Y.source==="theme"?Y.value:(I.options&&I.options[O]||[])[3]}function e(O){if(O.key!=="Color"&&O.key!=="FontFamily")return"";let Y=l(O.key);return Y?Y.source==="theme"?`<span class="admin-ui-chip" data-source-chip="theme">${L(y("styleFromTheme"))}</span>`:Y.rejected?`<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${L(String(Y.theme_value||""))}">${L(y("styleThemeValueUnused"))}</span>`:"":""}function t(O){let Y=s(O),X=a(O);return(X?`<div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${L(X)}</div>`:"")+e(O)}function a(O){if(O.key==="Color"||O.key==="FontFamily")return O.fmt(b(O.key));if(O.kind==="theme"){let ie=d(O.key),fe=A[O.key].find(ve=>ve.value===ie);return fe?y(fe.labelKey):"\u2014"}if(O.kind==="effects")return"";let X=(I.options&&I.options[O.key]||[])[3];return O.fmt?O.fmt(X):X!=null?String(X):"\u2014"}function i(O,Y){let X=Y[3],ie=M[O.key],fe=s(O);if(O.kind==="slider"){let ve=ie,ge=X!=null?Number(X):ve.min,be=isFinite(ge)?ge:ve.min,Ce=(be-ve.min)/Math.max(1e-6,ve.max-ve.min)*100,_e=L(y(O.labelKey));return`
        <div class="admin-dsp2-track" data-track="${O.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${O.key}" data-num-index="3"
            aria-label="${_e}"
            min="${ve.min}" max="${ve.max}" step="${_(O.key)}" value="${L(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${Ce.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${Ce.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${O.key}" aria-label="${_e}"
              min="${ve.min}" max="${ve.max}" step="${_(O.key)}" value="${L(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ve.min}${ve.unit}</span><span>${ve.max}${ve.unit}</span>
            </div>
          </div>
        </div>`}if(O.kind==="size"){let ve=Number(X);return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${B.map(ge=>{let be=ve===ge;return`<button type="button" class="admin-dsp2-fchip ${be?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ge}" aria-pressed="${be}">${ge}</button>`}).join("")}
        </div>`}if(O.kind==="color"){let ve="#"+String(X||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${q().map(ge=>{let be=ge.slice(1),Ce=ge.toUpperCase()===ve;return`<button type="button" class="admin-dsp2-swatch ${Ce?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ge}" aria-label="${ge}" aria-pressed="${Ce}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${L(y("specificColor"))}">
            <span class="sr-only">${L(y("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${L(ve)}" />
          </label>
        </div>
      `}if(O.key==="FontFamily"){let ve=(I.fonts&&I.fonts.length?I.fonts:["NotoSansTC","Inter"]).map(we=>{let Be=typeof we=="string"?we:we.name||we.family||"",Ne=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Be,label:Ne}}).filter(we=>we.value),ge=String(X||""),be=fe&&!!I.allowlistEdit.FontFamily,Ce=be?I.allowlistEdit.FontFamily:new Set(c("FontFamily").map(we=>o("FontFamily",we))),_e=!be&&Ce.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ve.map(we=>{let Be=we.value===ge,Ne=be?Ce.has(we.value):_e||Ce.has(we.value),Re=["admin-dsp2-tchip",Be?"is-active":"",be?"is-editing":"",fe&&!Ne?"is-blocked":""].filter(Boolean).join(" "),ze=be?`data-allow-key="FontFamily" data-allow-value="${L(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${L(we.value)}"`;return`<button type="button" class="${Re}" ${ze}
              aria-pressed="${be?Ne?"true":"false":Be?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ne?"\u2713 ":""}</span>`:""}${L(we.label)}
            </button>`}).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${L(y("adminRouteTitle_fonts"))} \u203A</a>
        </div>
        ${v(O)}
      `}if(O.key==="Layout"){let ve=String(X||"scroll"),ge=fe&&!!I.allowlistEdit.Layout,be=ge?I.allowlistEdit.Layout:new Set(c("Layout").map(_e=>o("Layout",_e))),Ce=!ge&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${F.map(_e=>{let we=_e.value===ve,Be=ge?be.has(_e.value):Ce||be.has(_e.value),Ne=["admin-dsp2-tile",we?"is-active":"",ge?"is-editing":"",fe&&!Be?"is-blocked":""].filter(Boolean).join(" "),Re=ge?`data-allow-key="Layout" data-allow-value="${_e.value}"`:`data-chip-key="Layout" data-chip-value="${_e.value}"`;return`<button type="button" class="${Ne}" ${Re}
              aria-pressed="${ge?Be?"true":"false":we?"true":"false"}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${_e.icon}</span>
              <span class="admin-dsp2-tile-label">${y(_e.labelKey)}</span>
              ${ge?`<span class="admin-dsp2-allow-mark">${Be?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${v(O)}
      `}if(O.kind==="effects")return`<a class="admin-dsp2-link" href="#/effects">${L(y("adminNavEffects"))} \u203A</a>`;if(O.kind==="theme"){let ve=d(O.key);return`
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${O.key}" role="group"
              aria-label="${L(y(O.labelKey))}">
          ${A[O.key].map(ge=>{let be=ge.value===ve;return`<button type="button" data-theme-opt="${ge.value}" class="${be?"is-active":""}"
              aria-pressed="${be?"true":"false"}">${L(y(ge.labelKey))}</button>`}).join("")}
        </span>`}return""}function v(O){if(!g(O.key)||!s(O))return"";let Y=!!I.allowlistEdit[O.key],X=c(O.key),ie=r(O.key).length||0,fe=X.length>0?y("displayAllowSummaryPartial",{n:X.length,total:ie,label:k(O.key)}):y("displayAllowSummaryAll",{total:ie});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${O.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${O.key}">${L(fe)}</span>
        ${Y?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${O.key}">${L(y("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${O.key}">${L(y("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${O.key}">${L(y("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${O.key}">${L(y("displayEditAllowlistTitle"))}</button>
        `}
      </div>`}function k(O){return y(O==="Color"?"displayLabelColor":O==="FontFamily"?"displayLabelFontFamily":O==="Layout"?"displayLabelLayout":"displayLabelOption")}function S(O,Y){if(O.kind!=="slider"&&O.kind!=="size"||!s(O))return"";let X=M[O.key],ie=Y[1]!=null?Y[1]:X.min,fe=Y[2]!=null?Y[2]:X.max,ve=_(O.key),ge=(be,Ce,_e,we)=>`
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${L(y(be))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${O.key}" data-num-index="${Ce}" ${we}
              value="${L(String(_e))}" />
            ${X.unit?`<span>${X.unit}</span>`:""}
          </span>
        </label>`;return`
      <div class="admin-dsp2-band">
        ${ge("displayMinAudience",1,ie,`min="${X.min}" max="${X.max}" step="${ve}"`)}
        ${ge("displayMaxAudience",2,fe,`min="${X.min}" max="${X.max}" step="${ve}"`)}
        ${ge("mlStep","step",ve,'min="0.1" step="0.1"')}
      </div>`}function x(O){let Y=s(O),X=L(y(O.labelKey)+" \xB7 "+y("displayColAudience")),ie=L(y(Y?"displayCustomizable":"displayLocked")),fe=O.fixed?`disabled aria-disabled="true" data-fixed-toggle="${O.key}"`:`data-toggle-key="${O.key}"`;return`
      <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}" ${fe}
        aria-pressed="${Y?"true":"false"}" aria-label="${X}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${ie}</span>
      </button>`}function R(O){let Y=I.options&&I.options[O.key]||[!1,"","",""],X=s(O),ie=O.kind==="color"&&X?'<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>':"";return`
      <div class="admin-dsp2-row ${X?"is-on":"is-off"} ${O.fixed?"is-fixed":""}" data-row-key="${O.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${L(y(O.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${t(O)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${i(O,Y)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${S(O,Y)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${x(O)}</div>
      </div>${ie}`}function G(){let O=document.getElementById("dsp2-rows");if(O){if(!I.options){O.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):L(y("loading"))}`;return}O.innerHTML=m.map(R).join(""),ee(),Z()}}function q(){let O=c("Color");return[...new Set((O.length?O:N).map(Y=>"#"+String(Y).replace(/^#/,"").toUpperCase()).filter(Y=>/^#[0-9A-F]{6}$/.test(Y)))]}function z(O){let Y=O.slice(1).match(/.{2}/g).map(X=>{let ie=parseInt(X,16)/255;return ie<=.04045?ie/12.92:((ie+.055)/1.055)**2.4});return Y[0]*.2126+Y[1]*.7152+Y[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function P(O,Y="error"){I.paletteNotice={message:O,type:Y};let X=document.querySelector("[data-palette-feedback]");X&&(X.textContent=O,X.classList.toggle("is-error",Y==="error"))}function W(O,Y=!0){let X=document.querySelector("[data-admin-color-palette]"),ie=X?.querySelector("[data-palette-preview-text]");!ie||!/^#[0-9A-F]{6}$/i.test(O)||(I.palettePreview=O.toUpperCase(),ie.style.color=O,X.querySelector("[data-palette-preview-code]").textContent=O.toUpperCase(),X.querySelectorAll("[data-palette-preview]").forEach(fe=>{let ve=fe.dataset.palettePreview===O.toUpperCase();fe.setAttribute("aria-pressed",String(ve)),fe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ve)}),Y&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ie.getAnimations().forEach(fe=>fe.cancel()),ie.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function ee(){let O=document.querySelector("[data-admin-color-palette]");if(!O||!I.options)return;let Y=q(),X=(I.options.ViewerColorPicker||[!0])[0]!==!1,ie=I.paletteBusy?"disabled":"",fe=I.palettePreview||Y[0],ve=L(I.paletteDraft),ge=I.paletteNotice;O.setAttribute("aria-busy",String(I.paletteBusy)),O.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${L(y("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${L(y("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${L(y("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${Y.length}</strong><span>${L(y("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${Y.map((be,Ce)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${z(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${L(y("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===fe}" ${ie}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(Ce+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${Y.length<=1?"disabled":ie}
                aria-label="${L(y("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${L(y("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${L(y("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(I.paletteDraft)?ve:"#38bdf8"}" data-palette-picker ${ie} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ve}"
                ${I.paletteInvalid?'aria-invalid="true"':""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${ie} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${Y.length>=64?"disabled":ie}>
                <span aria-hidden="true">\uFF0B</span> ${L(y("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${L(y(Y.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${ge?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${ge?L(ge.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${L(y("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${L(y("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${fe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${L(y("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${L(y("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${L(y("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${X?"checked":""} ${ie} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${L(y("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,W(fe,!1)}async function J(O,Y){if(I.paletteBusy)return;let X=document.querySelector("[data-admin-color-palette]");I.paletteBusy=!0,X.setAttribute("aria-busy","true"),X.querySelector("[data-palette-sync-status]").textContent=y("viewerPaletteSaving"),X.querySelectorAll("input, button").forEach(ve=>{ve.disabled=!0});let ie=await le("Color",O);I.paletteBusy=!1,I.paletteNotice={type:ie?"success":"error",message:y(ie?"viewerPaletteSaved":"updateFailed")},ie&&Y&&(I.palettePreview=Y),ee(),(Y&&ie?X.querySelector(`[data-palette-preview="${Y}"]`):X.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function K(O,Y){let X=I.options&&I.options[O];return X&&X[3]!=null?X[3]:Y}function Z(){let O=document.querySelector("[data-preview-stage]"),Y=document.querySelector("[data-preview-pill='1']"),X=document.querySelector("[data-preview-pill='2']"),ie=document.querySelector("[data-preview-foot-l]"),fe=document.querySelector("[data-preview-foot-r]");if(!O||!Y||!X||!I.options)return;let ve=Number(K("FontSize",32)),ge=Number(K("Opacity",92)),be=Number(K("Speed",1)),Ce="#"+String(b("Color")||K("Color","7DD3FC")).replace(/^#/,""),_e=String(b("FontFamily")||K("FontFamily","NotoSansTC")),we=String(K("Layout","scroll")),Be=Math.min(ve,36),Ne=Math.max(0,Math.min(100,ge))/100,Re=window.AdminThemes&&window.AdminThemes.activeStyles&&window.AdminThemes.activeStyles()||{},ze=Re.textStroke?Math.max(0,Math.min(6,Number(Re.strokeWidth)||0)):0,et=/^#[0-9a-fA-F]{3,8}$/.test(String(Re.strokeColor||""))?Re.strokeColor:"#000000",nt=Re.textShadow?Math.max(0,Math.min(40,Number(Re.shadowBlur)||0)):0;Y.style.fontSize=Be+"px",Y.style.color=Ce,Y.style.opacity=Ne.toFixed(2),Y.style.fontFamily=_e+", system-ui, sans-serif",Y.style.webkitTextStroke=ze?`${ze}px ${et}`:"",Y.style.paintOrder=ze?"stroke fill":"",Y.style.textShadow=nt?`0 0 ${nt}px ${Ce}`:"none",X.style.fontSize=(Be*.78).toFixed(0)+"px",X.style.opacity=(Ne*.9).toFixed(2),X.style.fontFamily=_e+", system-ui, sans-serif",O.dataset.layout=we,ie&&(ie.textContent=`${w(we)} \xB7 ${ve}px \xB7 ${(+be).toFixed(1)}\xD7`),fe&&(fe.textContent=y("displayOpacitySuffix",{n:Math.round(ge)}))}let j=["Color","ViewerColorPicker","FontFamily"];function Q(O){j.includes(O)&&window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh()}async function ne(O,Y){try{let X=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:O,enabled:!!Y})});if(!X.ok)throw new Error("toggle "+X.status);Array.isArray(I.options[O])||(I.options[O]=[!1,"","",""]),I.options[O][0]=!!Y,Y||delete I.allowlistEdit[O],G(),Q(O),O==="ViewerColorPicker"?document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0}):document.querySelector(`[data-toggle-key="${O}"]`)?.focus({preventScroll:!0});let ie=m.find(ve=>ve.key===O),fe=O==="ViewerColorPicker"?y("viewerPaletteAllowPicker"):ie?y(ie.labelKey):O;window.showToast&&window.showToast(`${fe} ${y("settingsUpdated")}`,!0)}catch(X){console.warn("[admin-display] toggle failed:",X),window.showToast&&window.showToast(y("updateFailed"),!1),await me(),G()}}async function re(O,Y,X){try{let ie=X;if(O==="Color"){let ve=String(ie).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ve)){window.showToast&&window.showToast(y("colorFormatError"),!1);return}ie=ve.toUpperCase()}else if(O==="Opacity"||O==="FontSize"||O==="Speed"){ie=O==="Speed"?parseFloat(ie):parseInt(ie,10);let ve=M[O];if(Number.isNaN(ie)||ve&&(ie<ve.min||ie>ve.max)){window.showToast&&window.showToast(`${O} ${ve.min}\u2013${ve.max}`,!1);return}}let fe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:O,value:ie,index:Y})});if(!fe.ok)throw new Error("update "+fe.status);Array.isArray(I.options[O])||(I.options[O]=[!1,"","",""]),I.options[O][Y]=ie,ue(O),Z(),Q(O)}catch(ie){console.warn("[admin-display] update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}async function le(O,Y){try{let X=await window.csrfFetch(`/admin/options/${encodeURIComponent(O)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:Y})});if(!X.ok)throw new Error("allowlist "+X.status);let ie=await X.json().catch(()=>({}));ie&&Array.isArray(ie.option)?I.options[O]=ie.option:Array.isArray(I.options[O])&&(I.options[O][1]=Y.slice()),ue(O),Z(),Q(O);let fe=r(O).length||0,ve=O==="Color"?y("settingsUpdated"):Y.length>0?y("displayAllowlistToastPartial",{key:O,n:Y.length,total:fe}):y("displayAllowlistToastAll",{key:O});return O!=="Color"&&window.showToast&&window.showToast(ve,!0),!0}catch(X){return console.warn("[admin-display] allowlist failed:",X),O!=="Color"&&window.showToast&&window.showToast(y("updateFailed"),!1),!1}}function ue(O){let Y=document.querySelector(`#${h} [data-row-key="${O}"]`);if(!Y||!I.options)return;let X=m.find(ge=>ge.key===O);if(!X)return;let ie=I.options[O]||[!1,"","",""],fe=ie[3],ve=Y.querySelector("[data-row-badges]");if(ve&&(ve.innerHTML=t(X)),g(O)||X.kind==="theme"){let ge=Y.querySelector("[data-picker-host]");ge&&(ge.innerHTML=i(X,ie));return}if(O==="FontSize"){Y.querySelectorAll(`[data-chip-key="${O}"]`).forEach(be=>{let Ce=String(be.getAttribute("data-chip-value"))===String(fe??"");be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")});let ge=Y.querySelector("[data-band-host]");ge&&!ge.contains(document.activeElement)&&(ge.innerHTML=S(X,ie))}if(X.kind==="slider"){let ge=M[O],be=Number(fe??ge.min),Ce=(be-ge.min)/Math.max(1e-6,ge.max-ge.min)*100,_e=Y.querySelector(".admin-dsp2-slider-fill"),we=Y.querySelector(".admin-dsp2-slider-thumb");_e&&(_e.style.width=Ce.toFixed(2)+"%"),we&&(we.style.left=`calc(${Ce.toFixed(2)}% - 8px)`);let Be=Y.querySelector(".admin-dsp2-range");Be&&document.activeElement!==Be&&(Be.value=String(be));let Ne=Y.querySelector(".admin-dsp2-num");Ne&&document.activeElement!==Ne&&(Ne.value=String(be));let Re=Y.querySelector("[data-band-host]");Re&&!Re.contains(document.activeElement)&&(Re.innerHTML=S(X,ie))}}async function me(){try{let O=await fetch("/get_settings",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);I.options=await O.json()}catch(O){console.warn("[admin-display] /get_settings failed:",O),I.options=I.options||{}}}async function Te(){try{let O=await fetch("/fonts",{credentials:"same-origin"});if(!O.ok)throw new Error(O.status);let Y=await O.json();I.fonts=Array.isArray(Y)?Y:Y.fonts||[]}catch{I.fonts=["NotoSansTC","Inter"]}}function Ee(){if(!I.options){window.showToast&&window.showToast(y("loading"),!1);return}let O={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:I.options},Y=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),X=URL.createObjectURL(Y),ie=document.createElement("a");ie.href=X,ie.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(X),window.showToast&&window.showToast(y("displayExportDone"),!0)}let Le=["Opacity","FontSize","Speed","Color","FontFamily","Layout"],oe=["Color","FontFamily","Layout"];function se(){let O=window.DANMU_CONFIG?.settingDefaults||{},Y=window.DANMU_CONFIG?.settingRanges||{},X=[];for(let ie of Le){let fe=O[ie];if(!Array.isArray(fe)||fe.length<4)return null;if(X.push({url:"/admin/Set",body:{key:ie,enabled:!!fe[0]}}),oe.includes(ie)){if(fe[3]!==""&&fe[3]!=null){let ve=ie==="Color"?String(fe[3]).replace(/^#/,"").toUpperCase():fe[3];X.push({url:"/admin/update",body:{type:ie,value:ve,index:3}})}}else{let ve=Y[ie];if(!ve)return null;let ge=be=>Math.min(ve.max,Math.max(ve.min,Number(be)));X.push({url:"/admin/update",body:{type:ie,value:ve.min,index:1}}),X.push({url:"/admin/update",body:{type:ie,value:ve.max,index:2}}),X.push({url:"/admin/update",body:{type:ie,value:ge(fe[3]),index:3}})}}return X}async function ce(){if(!await window.HudConfirm?.open({icon:"\u21A9",title:y("displayRevertConfirmTitle"),subtitle:y("cfmSubRevertDefaults"),severity:"danger",body:y("displayRevertConfirm"),confirmLabel:y("displayDeployRevert")}))return;let Y=!1;try{let X=se();if(!X)throw new Error("server defaults unavailable");for(let ie of X){let fe=await window.csrfFetch(ie.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie.body)});if(!fe||!fe.ok)throw new Error(`${ie.url} ${fe?fe.status:"?"}`)}}catch(X){Y=!0,console.warn("[admin-display] revert failed:",X)}await me(),G(),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh(),window.showToast&&window.showToast(y(Y?"updateFailed":"displayRevertDone"),!Y)}function V(O){O.addEventListener("click",Y=>{let X=Y.target.closest("[data-palette-preview]");if(X){W(X.dataset.palettePreview);return}let ie=Y.target.closest("[data-palette-remove]");if(ie){let _e=q();if(_e.length>1){let we=_e.filter(Be=>Be!==ie.dataset.paletteRemove);J(we,we.includes(I.palettePreview)?I.palettePreview:we[0])}return}if(Y.target.closest("[data-palette-add]")){let _e=O.querySelector("[data-palette-hex]"),we=String(_e.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(we)){I.paletteInvalid=!0,_e.setAttribute("aria-invalid","true"),P(y("colorFormatError"));return}let Be=q();if(Be.includes("#"+we)){P(y("viewerPaletteDuplicate"));return}Be.length<64&&J([...Be,"#"+we],"#"+we);return}let fe=Y.target.closest("[data-toggle-key]");if(fe){let _e=fe.getAttribute("data-toggle-key"),we=!!(I.options[_e]||[])[0];ne(_e,!we);return}let ve=Y.target.closest("[data-theme-opt]");if(ve){let _e=ve.closest("[data-theme-seg]");_e&&window.AdminThemes&&window.AdminThemes.setSeg&&window.AdminThemes.setSeg(_e.getAttribute("data-theme-seg"),ve.getAttribute("data-theme-opt"));return}let ge=Y.target.closest("[data-allow-action]");if(ge){let _e=ge.getAttribute("data-allow-action"),we=ge.getAttribute("data-allow-key");if(!we)return;if(_e==="edit"){let Be=c(we).map(Ne=>o(we,Ne));I.allowlistEdit[we]=new Set(Be.length?Be:r(we)),ue(we);return}if(_e==="cancel"){delete I.allowlistEdit[we],ue(we);return}if(_e==="clear"){delete I.allowlistEdit[we],le(we,[]);return}if(_e==="apply"){let Be=I.allowlistEdit[we]||new Set,Ne=r(we),Re=Array.from(Be),ze=Ne.length>0&&Re.length===Ne.length&&Ne.every(et=>Be.has(et));delete I.allowlistEdit[we],le(we,ze?[]:Re);return}}let be=Y.target.closest("[data-allow-key][data-allow-value]");if(be){let _e=be.getAttribute("data-allow-key"),we=I.allowlistEdit[_e];if(we){let Be=o(_e,be.getAttribute("data-allow-value"));we.has(Be)?we.delete(Be):we.add(Be),ue(_e)}return}let Ce=Y.target.closest("[data-chip-key]");if(Ce){let _e=Ce.getAttribute("data-chip-key"),we=Ce.getAttribute("data-chip-value");O.querySelectorAll(`[data-chip-key="${_e}"]`).forEach(Be=>Be.classList.remove("is-active")),Ce.classList.add("is-active"),re(_e,3,we);return}if(Y.target.closest("#dsp2-revert")){ce();return}if(Y.target.closest("#dsp2-export")){Ee();return}}),O.addEventListener("keydown",Y=>{Y.key==="Enter"&&Y.target.matches("[data-palette-hex]")&&!Y.isComposing&&(Y.preventDefault(),O.querySelector("[data-palette-add]")?.click())}),O.addEventListener("change",Y=>{let X=Y.target;if(!X)return;if(X.matches("[data-viewer-color-picker]")){X.disabled=!0,ne("ViewerColorPicker",X.checked);return}if(X.closest("[data-vi-toggle]")){Oe({enabled:X.checked});return}if(X.closest("[data-vi-ext]")){let be=Array.from(O.querySelectorAll("[data-vi-ext]")).filter(Ce=>Ce.checked).map(Ce=>Ce.getAttribute("data-vi-ext"));Oe({extensions:be});return}if(X.id==="viewer-images-hosts"){Oe({hosts:X.value.split(/[\s,]+/).filter(Boolean)});return}if(X.classList&&X.classList.contains("admin-dsp2-range")){re(X.getAttribute("data-range-key"),3,X.value);return}let ie=X.getAttribute("data-num-key");if(!ie)return;let fe=X.getAttribute("data-num-index");if(fe==="step"){$(ie,X.value);let be=X.closest("[data-row-key]"),Ce=m.find(we=>we.key===ie),_e=be&&be.querySelector("[data-band-host]");_e&&Ce&&(_e.innerHTML=S(Ce,I.options[ie]||[])),ue(ie);return}let ve=parseInt(fe,10);if(Number.isNaN(ve))return;let ge=X.value;ie==="Color"&&(ge=String(ge).replace(/^#/,"").toUpperCase()),re(ie,ve,ge)}),O.addEventListener("input",Y=>{let X=Y.target;if(X){if(X.matches("[data-palette-picker]")){I.paletteDraft=X.value.toUpperCase(),I.paletteInvalid=!1;let ie=O.querySelector("[data-palette-hex]");ie.value=I.paletteDraft,ie.removeAttribute("aria-invalid"),P("","success"),W(I.paletteDraft);return}if(X.matches("[data-palette-hex]")){I.paletteDraft=X.value,I.paletteInvalid=!1;let ie=X.value.replace(/^#/,"");X.removeAttribute("aria-invalid"),P("","success"),/^[0-9a-fA-F]{6}$/.test(ie)&&(O.querySelector("[data-palette-picker]").value="#"+ie,W("#"+ie));return}if(X.classList&&X.classList.contains("admin-dsp2-range")){let ie=X.getAttribute("data-range-key"),fe=M[ie],ve=Number(X.value),ge=(ve-fe.min)/Math.max(1e-6,fe.max-fe.min)*100,be=X.closest("[data-row-key]");if(be){let Ce=be.querySelector(".admin-dsp2-slider-fill"),_e=be.querySelector(".admin-dsp2-slider-thumb");Ce&&(Ce.style.width=ge.toFixed(2)+"%"),_e&&(_e.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(ve))}Array.isArray(I.options[ie])&&(I.options[ie][3]=ve),Z();return}if(X.classList&&X.classList.contains("admin-dsp2-num")){let ie=X.getAttribute("data-num-key"),fe=parseInt(X.getAttribute("data-num-index"),10);if(Number.isNaN(fe)||!Array.isArray(I.options[ie]))return;I.options[ie][fe]=X.type==="number"?Number(X.value):X.value,Z()}}})}function te(O){O.addEventListener("click",Y=>{let X=Y.target.closest("[data-dl-step]");if(X){let fe=X.closest("[data-dl-stepper]");if(!fe)return;let ve=fe.getAttribute("data-dl-stepper"),ge=Number(Me[ve]??0);De(ve,ge+Number(X.getAttribute("data-dl-step")));return}let ie=Y.target.closest("[data-dl-opt]");if(ie){let fe=ie.closest("[data-dl-seg]");if(!fe)return;let ve=fe.getAttribute("data-dl-seg"),ge=ie.getAttribute("data-dl-opt");De(ve,["safe_area","poll_vote_opacity"].indexOf(ve)!==-1?Number(ge):ge)}}),O.addEventListener("change",Y=>{let X=Y.target.closest("[data-dl-toggle]");if(X){De(X.getAttribute("data-dl-toggle"),X.checked);return}let ie=Y.target.closest("[data-dl-range]");ie&&De(ie.getAttribute("data-dl-range"),Number(ie.value))}),O.addEventListener("input",Y=>{let X=Y.target.closest("[data-dl-range]");if(!X)return;let ie=X.getAttribute("data-dl-range"),fe=O.querySelector(`[data-dl-value="${ie}"]`);fe&&(fe.textContent=X.value+"%")})}let ae=null,de=null,he={},ke=0,$e="",pe=O=>(O&&O.hosts||[]).join(`
`);function xe(){return Object.assign({},ae||{},de||{},he)}function Ie(){let O=document.getElementById(h);if(!O||!ae)return;let Y=xe(),X=O.querySelector("[data-vi-toggle]");X&&(X.checked=!!Y.enabled),Ae(O,!!Y.enabled);let ie=O.querySelector("#viewer-images-hosts"),fe=de&&"hosts"in de||"hosts"in he;ie&&!fe&&document.activeElement!==ie&&ie.value===$e&&(ie.value=pe(ae),$e=ie.value);let ve=Y.extensions||[];O.querySelectorAll("[data-vi-ext]").forEach(ge=>{ge.checked=ve.indexOf(ge.getAttribute("data-vi-ext"))!==-1})}function Ae(O,Y){O.querySelectorAll("[data-vi-row]").forEach(X=>{X.style.display=Y?"":"none"})}async function Fe(O){try{let Y=await O(),X=null;try{X=await Y.json()}catch{X=null}return{ok:!!(Y.ok&&X),body:X}}catch(Y){return console.warn("[admin-display] viewer-images request failed:",Y),{ok:!1,body:null}}}async function Pe(){let O=ke,Y=await Fe(()=>fetch("/admin/viewer-images",{credentials:"same-origin"})),X=!de&&!Object.keys(he).length;Y.ok&&X&&O===ke&&(ae=Y.body,Ie())}function qe(O){let Y=O&&O.code;return Y==="invalid_host"?y("viErrInvalidHost",{host:String(O.detail||"")}):Y==="too_many_hosts"?y("viErrTooManyHosts",{max:O.max}):y("updateFailed")}function Oe(O){ke+=1;let Y=document.getElementById("viewer-images-hosts");if("hosts"in O&&Y&&($e=Y.value),"enabled"in O){let X=document.getElementById(h);X&&Ae(X,!!O.enabled)}Object.assign(he,O),de||je()}async function je(){if(de||!Object.keys(he).length)return;let O=he;he={},de=O;let Y=await Fe(()=>window.csrfFetch("/admin/viewer-images",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}));if(de=null,Y.ok){ae=Y.body,Ie(),je();return}let X=he;he={},window.showToast&&window.showToast(qe(Y.body),!1),("hosts"in O||"hosts"in X)&&($e=null),Ie(),Pe()}let Me={};function We(){let O=document.getElementById(f);O&&Object.entries(Me).forEach(([Y,X])=>{let ie=O.querySelector(`[data-dl-value="${Y}"]`);ie&&(ie.textContent=Y==="max_tracks"?Number(X)===0?y("dlMaxTracksAuto"):String(X):String(X)+"%");let fe=O.querySelector(`[data-dl-range="${Y}"]`);fe&&document.activeElement!==fe&&(fe.value=String(X));let ve=O.querySelector(`[data-dl-toggle="${Y}"]`);ve&&(ve.checked=!!X);let ge=O.querySelector(`[data-dl-seg="${Y}"]`);ge&&ge.querySelectorAll("[data-dl-opt]").forEach(be=>{let Ce=be.getAttribute("data-dl-opt")===String(X);be.classList.toggle("is-active",Ce),be.setAttribute("aria-pressed",Ce?"true":"false")})})}async function Ge(){try{let O=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!O.ok)return;Me=await O.json(),We()}catch(O){console.warn("[admin-display] display-layer fetch failed:",O)}}async function De(O,Y){let X=Me[O];Me[O]=Y,We();try{let ie=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[O]:Y})});if(!ie.ok)throw new Error("display-layer "+ie.status);Me=await ie.json(),We()}catch(ie){Me[O]=X,We(),console.warn("[admin-display] display-layer update failed:",ie),window.showToast&&window.showToast(y("updateFailed"),!1)}}let Ke=!1;async function Ue(){let O=document.getElementById("sec-viewer-config-limits");if(!O||Ke)return;Ke=!0;let Y=(X,ie)=>{let fe=O.querySelector(X);fe&&(fe.textContent=ie==null?"\u2014":String(ie))};try{let X=await fetch("/admin/metrics",{credentials:"same-origin"});if(!X.ok)return;let ie=await X.json(),fe=ie.rate_limits&&ie.rate_limits.fire||{},ve=ie.rate_limits&&ie.rate_limits.totals||{},ge=Math.max(1,(ie.server_time||0)-(ie.server_started_at||0));Y("[data-vc-msg-len]",100),Y("[data-vc-nick-len]","\u2014"),Y("[data-vc-dedup]","\u2014");let be=(fe.hits||0)/ge;Y("[data-vc-avg-rate]",be.toFixed(2)+"/s"),Y("[data-vc-throttled]",fe.violations||0),Y("[data-vc-blocked]",ve.locked_sources||0),Y("[data-vc-deduped]",0)}catch{}finally{Ke=!1}}function Je(){C.forEach(O=>{let Y=document.getElementById(O);Y&&Y.setAttribute("data-admin-ui-replaced","1")})}function Ve(){let O=document.querySelector(".admin-dash-grid");return!!O&&O.dataset.activeRoute==="viewer"}function He(){let O=null;E.forEach(Y=>{let X=document.getElementById(Y);X&&(O&&O.parentElement===X.parentElement&&O.nextElementSibling!==X&&O.after(X),O=X)})}let Ye=null;function bn(){let O=window.ServerI18n&&window.ServerI18n.currentLang;if(!O||O===Ye)return;let Y=Ye===null;if(Ye=O,Y)return;let X=document.createElement("div"),ie=document.getElementById(h);ie&&(X.innerHTML=n(),ie.replaceChildren(...X.firstElementChild.childNodes),G(),$e="",Ie());let fe=document.getElementById(f);if(fe){let ve=fe.open;X.innerHTML=p(),fe.replaceChildren(...X.firstElementChild.childNodes),fe.open=ve,We()}}let Xe=!1;function Qe(){if(bn(),!Ve()){Xe=!1;return}He(),!Xe&&(Xe=!0,Ue(),I.options&&me().then(G),window.AdminThemes&&window.AdminThemes.refresh&&window.AdminThemes.refresh())}function wn(){if(document.getElementById(u))return;let O=document.getElementById("settings-grid");if(!O)return;function Y(ie,fe,ve,ge,be,Ce){let _e=Ce?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+ie+'</div></div><div class="admin-vc-limit-row__value" style="color:'+_e+'">'+ve+'<span class="admin-vc-limit-row__unit">'+(ge||"")+"</span></div>"+(be?'<div class="admin-vc-limit-row__hint">'+be+"</div>":"")+"</div>"}let X=document.createElement("details");X.id=u,X.className="admin-dsp2-fold lg:col-span-2",X.innerHTML='<summary class="admin-ui-page-title">'+L(y("displayContentLimitsTitle"))+'</summary><div class="admin-vc-limits-grid"><div class="admin-vc-limit-card">'+Y(L(y("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",L(y("displayMsgLenUnit")),L(y("displayMsgLenHint")))+Y(L(y("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",L(y("displayNickLenUnit")),L(y("displayNickLenHint")))+Y(L(y("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",L(y("displayDedupHint")))+Y(L(y("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+L(y("displayProfanityDefaultValue"))+"</span>","",L(y("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+L(y("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+L(y("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+L(y("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+L(y("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+L(y("displayAuditLogLink"))+"</a></div></div>",O.appendChild(X),He()}async function Ze(){let O=document.getElementById("settings-grid");if(!O)return;let Y=!1;document.getElementById(h)||(O.insertAdjacentHTML("beforeend",n()),V(document.getElementById(h)),Y=!0),document.getElementById(f)||(O.insertAdjacentHTML("beforeend",p()),te(document.getElementById(f)),Y=!0),Je(),wn(),Qe(),Y&&(I.options||await Promise.all([me(),Te()]),Ge(),Pe(),G())}function tt(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&(!document.getElementById(h)||!document.getElementById(f))?Ze():Je(),Qe()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Qe),document.addEventListener("admin-route-applied",Qe),document.addEventListener("admin-panel-rendered",Ze),document.addEventListener("admin-themes-changed",()=>{ue("stroke"),ue("shadow"),ue("Color"),ue("FontFamily"),Z()}),Ze()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt()})()});var At=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function h(){let K=document.querySelector('meta[name="csrf-token"]');return K&&K.content||""}let f=window.DANMU_CONFIG||{},u=f.session||{logged_in:!1},E=f.settingRanges||{};function C(K,Z={}){let j={credentials:"same-origin",...Z},Q=new Headers(Z.headers||{});return Q.set("X-CSRF-Token",h()),j.headers=Q,fetch(K,j)}window.csrfFetch=C;let L=5e3,U={at:0,data:null,promise:null};function M(){return U.data&&Date.now()-U.at<L}function B(){return M()?Promise.resolve(U.data):(U.promise||(U.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>(K&&(U.data=K,U.at=Date.now()),U.promise=null,K)).catch(()=>(U.promise=null,null))),U.promise)}function N(K){if(!M())return null;let Z=U.data[K];return Z&&typeof Z=="object"&&"_error"in Z?null:Z}window.__danmuAdminBootstrap={prime:B,get:N},B();let F={},A=null,y=null,D=Object.create(null);Object.assign(D,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},blacklist:{nav:"moderation",tab:"blacklist"},filters:{nav:"moderation",tab:"blacklist"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"system",tab:"webhooks"},plugins:{nav:"system",tab:"plugins"},"api-tokens":{nav:"system",tab:"api-tokens"},scheduler:{nav:"system",tab:"scheduler"},security:{nav:"system",tab:"security"},firetoken:{nav:"system",tab:"firetoken"}});let _=Object.create(null);Object.assign(_,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"system",tab:"scheduler"},appearance:{nav:"viewer",tab:"themes"},themes:{nav:"viewer",tab:"themes"},scheduler:{nav:"system",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"system",tab:"integrations"},integrations:{nav:"system",tab:"integrations"},backup:{nav:"system",tab:"backup"},mobile:{nav:"system",tab:"system"}});let $={_key:K=>"admin:tab:"+K,get(K){try{return sessionStorage.getItem(this._key(K))||null}catch{return null}},set(K,Z){try{Z?sessionStorage.setItem(this._key(K),Z):sessionStorage.removeItem(this._key(K))}catch{}}};function I(K){let Z=(K||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!Z)return null;let j=Z[1],Q=Z[2]||null,ne=null;if(!Q){let me=D[j];typeof me=="string"?j=me:me&&typeof me=="object"&&(j=me.nav||j,ne=me.tab||null)}let re=_[j],le=j,ue=null;if(typeof re=="string"?le=re:re&&typeof re=="object"&&(le=re.nav||j,ue=re.tab||null),Z[1]!==le&&(I._warned||(I._warned=new Set),!I._warned.has(Z[1]))){I._warned.add(Z[1]);try{console.info("[admin] legacy route #/"+Z[1]+" \u2192 #/"+le+(Q||ue||ne?"/"+(Q||ue||ne):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:le,tab:Q||ue||ne,raw:j}}function H(K,Z){return Z?"#/"+K+"/"+Z:"#/"+K}let T={system:{nav:"system",tab:"overview"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}};function g(K,Z,j){if(j=j||K,!G[K]){let ue=D[K];if(typeof ue=="string")K=ue;else if(ue&&typeof ue=="object")ue.nav&&(K=ue.nav),!Z&&ue.tab&&(Z=ue.tab);else{let me=_[K];typeof me=="string"?K=me:me&&typeof me=="object"&&(me.nav&&(K=me.nav),!Z&&me.tab&&(Z=me.tab))}}if(K==="system"&&Z&&T[Z]){let ue=T[Z];K=ue.nav,Z=ue.tab||null,j=K}let Q=G[K]?K:"live",ne=window.AdminTabs,re=ne?.hasTabsFor?.(Q)?ne.resolveActiveTab(Q,Z):null,le=ne?.foldFor?ne.foldFor(Q,Z):null;return{route:Q,tab:re,rawName:j,fold:le?Z:null,foldSection:le?le.section:null}}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:_,tabMemory:$,parseHash:I,buildHash:H,resolve(K){let Z=I(K);return Z?g(Z.nav,Z.tab,K.match(/^#\/([\w-]+)/)[1]):null}});var c=window.AdminUtils.loadDetailsState,r=window.AdminUtils.saveDetailsState,o=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:B,bootstrapSection:N};async function n(){try{F=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),u.logged_in&&R()}catch(K){console.error("Get settings failed:",K),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function p(K){return/^#[0-9A-Fa-f]{6}$/.test(K)}function m(K){return p(K)?K:/^[0-9A-Fa-f]{6}$/.test(K)?"#"+K:(K.startsWith("#")||(K="#"+K),p(K)?K:"#38bdf8")}function w(K,Z){if(E[K]){let j=parseInt(Z);if(isNaN(j)||j<E[K].min||j>E[K].max)return showToast(ServerI18n.t("settingRangeError",{key:K,min:E[K].min,max:E[K].max}),!1),!1}return!0}function d(K,Z,j){if(!j||!Array.isArray(F[K]))return;let Q=F[K][Z];K==="Color"&&typeof Q=="string"&&(Q=m(`#${Q}`)),Q!=null&&(j.value=String(Q))}let s={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-polls","sec-security","sec-ws-auth"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-widgets"]}};function l(){Object.values(s).forEach(K=>{let Z=document.getElementById(K.containerId);Z&&K.orderedIds.forEach(j=>{let Q=document.getElementById(j);Q&&Q.parentElement!==Z&&Z.appendChild(Q)})})}function b(){A&&(A.disconnect(),A=null),l(),A=new MutationObserver(()=>{l()}),A.observe(a,{childList:!0,subtree:!0})}async function e(K,Z,j,Q=null){try{if(K==="Color"){if(!p(Z)){showToast(ServerI18n.t("colorFormatError"),!1),d(K,j,Q);return}Z=Z.replace("#","")}else if((K==="Speed"||K==="Opacity"||K==="FontSize")&&!w(K,Z)){d(K,j,Q);return}(await C("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:K,value:Z,index:j})})).ok?(Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][j]=Z,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await n())}catch(ne){console.error("Error:",ne),showToast(`Update Error: ${ne.message}`,!1),await n()}}async function t(K,Z){try{let j=await C("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:K,enabled:Z})}),Q=await j.json().catch(()=>({}));if(j.ok)Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][0]=Z,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`),R();else{let ne=document.getElementById(`toggle-${K}`);ne&&(ne.checked=!Z),showToast(Q.error||ServerI18n.t("updateFailed"),!1)}}catch(j){console.error("Error:",j);let Q=document.getElementById(`toggle-${K}`);Q&&(Q.checked=!Z),showToast(`Update Error: ${j.message}`,!1)}}let a=document.getElementById("app-container"),i=document.getElementById("toast-container"),v=(K,Z=500)=>"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:Z}):setTimeout(K,Z);async function k(){let K=parseInt(document.getElementById("historyHours")?.value||"24");try{let[Z,j]=await Promise.all([fetch(`/admin/stats/hourly?hours=${K}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${K}&limit=10`,{credentials:"same-origin"})]);if(!Z.ok||!j.ok)return;let Q=await Z.json(),ne=await j.json(),re=document.getElementById("statsDashboard");if(!re)return;let le=Q.distribution||[],ue=ne.topTexts||[],me=Math.max(1,...le.map(se=>se.count)),Te=le.reduce((se,ce)=>se+(ce.count||0),0),Ee=le.filter(se=>se.count>0).length,Le=le.map(se=>`<div class="chart-bar" style="height: ${Math.round(se.count/me*100)}%" title="${o(se.hour)}: ${se.count}"><span class="chart-label">${o(se.hour.slice(-5,-3))}</span></div>`).join(""),oe=ue.map((se,ce)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ce+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${o(se.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${se.count}</td></tr>`).join("");re.innerHTML=`
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
              <span class="history-dashboard-caption">${K}h window</span>
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
        </div>`}catch(Z){console.error("Load stats error:",Z)}}window._loadStats=k,window.csrfFetch=C,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=a,window.__adminCtx.getSettings=()=>F;function S(){a&&(a.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function x(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():S()}function R(){let K=c(),Z=(Ee,Le=!1)=>K[Ee]!==void 0?K[Ee]:Le,j=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(Ee=>Array.isArray(F[Ee])&&F[Ee][0]===!0).length,Q=F.Layout&&F.Layout[3]?o(String(F.Layout[3]).replace(/_/g," ")):"scroll",ne=F.FontFamily&&F.FontFamily[3]?o(String(F.FontFamily[3])):"NotoSansTC",re=Ee=>Ee.map(Le=>`<span style="height:${Le*10}%;opacity:${.3+Le*.08}"></span>`).join(""),le=Q&&Q!=="off",ue=window.location.port||(window.location.protocol==="https:"?"443":"80");a.innerHTML=`
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
                `;let me=document.getElementById("settings-grid"),Te=F.Effects?F.Effects[0]!==!1:!0;me.insertAdjacentHTML("beforeend",`
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
    `),v(ee),z(),b(),v(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),q(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let Le=document.querySelector("[data-telem-bars]");if(!Le)return;let oe=document.querySelector("[data-telem-status]"),se={cpu:100,mem:100,ws:100,rate:50};function ce(ae,de,he,ke,$e){let pe=Le.querySelector(`[data-telem-fill="${ae}"]`),xe=Le.querySelector(`[data-telem-value="${ae}"]`);pe&&(pe.style.width=Math.max(0,Math.min(100,de))+"%",pe.classList.toggle("is-warn",!ke)),xe&&(xe.textContent=he);let Ie=Le.querySelector(`[data-telem-row="${ae}"]`);Ie&&$e&&Ie.setAttribute("title",$e)}function V(ae,de){if(!de||de<=0)return Math.round(ae)+" MB used";if(de>=1024){let he=(ae/1024).toFixed(1),ke=(de/1024).toFixed(1);return`${he} / ${ke} GB used`}return`${Math.round(ae)} / ${Math.round(de)} MB used`}async function te(){try{let ae=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ae.ok)return;let de=await ae.json(),he=de.cpu_series||[],ke=de.mem_series||[],$e=de.mem_mb_series||[],pe=de.ws_series||[],xe=de.rate_series||[],Ie=Me=>Me.length?Me[Me.length-1]:0,Ae=Number(Ie(he)||0),Fe=Number(Ie(ke)||0),Pe=Number(Ie($e)||0),qe=Number(de.mem_total_mb||0),Oe=Number(Ie(pe)||de.ws_clients||0),je=Number(Ie(xe)||0)/60;if(ce("cpu",Ae,`${Ae.toFixed(0)}%`,Ae<90),ce("mem",Fe,`${Fe.toFixed(0)}%`,Fe<90,V(Pe,qe)),ce("ws",Oe/se.ws*100,String(Oe),Oe<100),ce("rate",je/se.rate*100,`${je.toFixed(1)}/s`,je<40),oe){let Me=Ae>=90||Fe>=90||je>=40;oe.textContent=Me?"\u25CF BUSY":"\u25CF HEALTHY",oe.classList.toggle("is-warn",Me)}}catch{}}setTimeout(te,4e3),setInterval(te,5e3)})()}let G={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u5F48\u5E55\u6A23\u5F0F",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-themes","sec-viewer-config-defaults","sec-viewer-theme","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","admin-backup-v2-page","sec-timeline-export","sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-overlay-layout"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=G;function q(){let K=document.querySelector(".admin-dash-grid");if(!K)return;let Z="dashboard",j=null;function Q(pe){return s.moderation.orderedIds.indexOf(pe)!==-1?"moderation-grid":s.assets.orderedIds.indexOf(pe)!==-1?"assets-grid":"settings-grid"}function ne(){let pe=K.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),xe=K.querySelector("[data-route-note]"),Ie=K.querySelector("[data-route-action]"),Ae=Ie?Array.prototype.slice.call(Ie.children):[],Fe=De=>De.querySelector(".admin-ui-page-actions")||Ae.find(Ke=>Ke._adminHomeHead===De)||null,Pe=(De,Ke)=>{Ie&&(Ae.forEach(Ue=>{Ue!==De&&(Ue._adminHomeHead?Ue._adminHomeHead.appendChild(Ue):Ue.remove())}),De&&De.parentNode!==Ie&&(De._adminHomeHead=Ke,Ie.appendChild(De)))};if(!pe){Pe(null,null);return}let qe=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(Z)),Oe=Array.prototype.slice.call(K.querySelectorAll(".admin-ui-page-head"));Oe.forEach(De=>De.classList.remove("is-merged-into-topbar"));let je=(G[Z]?.title||"").trim().replace(/\s+/g," "),Me=null,We=null,Ge=null;if(Oe.forEach(De=>{let Ke=De.querySelector(".admin-ui-page-title"),Ue=Ke&&Ke.textContent.trim().replace(/\s+/g," ");if(Ue&&(qe||Ue===pe||Ue===je)){if(De.offsetParent!==null){Me===null&&(Me=De.querySelector(".admin-ui-page-note")?.innerHTML||"");let Ve=Fe(De);Ve&&!We&&(We=Ve,Ge=De)}De.classList.add("is-merged-into-topbar")}}),Pe(We,Ge),xe){let De=Me||"";xe.innerHTML!==De&&(xe.innerHTML=De),xe.toggleAttribute("hidden",!Me)}}function re(){let pe=G[Z],xe=new Set((pe.sections||[]).map(Q)),Ie=Ae=>Array.from(Ae.children).some(Fe=>getComputedStyle(Fe).display!=="none");K.querySelectorAll(".admin-route-sections").forEach(Ae=>{if(!xe.has(Ae.id)){Ae.style.display="none";return}Ae.style.display="",Ae.style.display=Ie(Ae)?"":"none"})}let le=()=>{let pe=G[Z],xe=new Set(pe.sections);K.querySelectorAll('[id^="sec-"]').forEach(Ie=>{Ie.id&&(Ie.style.display=xe.has(Ie.id)?"":"none")}),j&&window.AdminTabs?.hasTabsFor?.(Z)&&window.AdminTabs.applyTabSectionVisibility(Z,j,K),re(),ne()},ue=null,me=null;function Te(){let pe=me&&document.getElementById(me);!pe||!pe.getClientRects().length||(me=null,pe.tagName==="DETAILS"&&(pe.open=!0),pe.scrollIntoView({block:"start"}))}function Ee(pe){let xe=window.location.hash||"",Ie=xe.indexOf("?");if(Ie===-1)return"";let Ae=I(xe);if(!Ae)return"";let Fe=xe.match(/^#\/([\w-]+)/),Pe=g(Ae.nav,Ae.tab,Fe&&Fe[1]||Ae.raw);return Pe.route===pe.route&&(Pe.tab||null)===(pe.tab||null)&&(Pe.fold||null)===(pe.fold||null)?xe.slice(Ie):""}let Le=(pe,xe,Ie)=>{let Ae=g(pe,xe,Ie);Ie=Ae.rawName,Z=Ae.route,K.dataset.activeRoute=Z;let Fe=Ae.tab,Pe=(Ae.fold?H(Z,Ae.fold):Ie&&Ie!==Z?"#/"+Ie:H(Z,Fe))+Ee(Ae);if(window.location.hash!==Pe){try{history.replaceState(null,"",Pe)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let qe=G[Z],Oe=Array.from(K.querySelectorAll(".admin-dash-nav-row[data-route]")),je=Ie!==Z?Oe.find(He=>He.dataset.route===Ie):null;Oe.forEach(He=>{let Ye=je?He===je:He.dataset.route===Z;He.classList.toggle("is-active",Ye),He.setAttribute("aria-selected",Ye?"true":"false")});let Me=K.querySelector("[data-route-kicker]"),We=K.querySelector("[data-route-title]");var Ge=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(He){return He},De="adminRouteTitle_"+Z,Ke="adminRouteKicker_"+Z,Ue=Ge(De),Je=Ge(Ke);Me&&(Me.textContent=Je!==Ke?Je:qe.kicker),We&&(We.textContent=Ue!==De?Ue:qe.title);let Ve=Z==="dashboard"||Z==="live";K.querySelectorAll('[data-route-view="dashboard"]').forEach(He=>{He.style.display=Ve?"":"none"}),Ve?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),j=Fe,Fe&&window.AdminRouter?.tabMemory?.set?.(Z,Fe),K.dataset.activeLeaf=Fe||Z,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:Fe}})),re(),ne(),se(Z,Fe),oe(Ie,Z,Fe),Ae.fold!==ue&&(ue=Ae.fold,me=Ae.foldSection),Te();try{history.replaceState(null,"",Pe)}catch{}};function oe(pe,xe,Ie){window.AdminBreadcrumb?.render(K,pe,xe,Ie)}function se(pe,xe){let Ie=K.querySelector("[data-admin-tabs-host]");if(!Ie){let Ae=K.querySelector(".admin-dash-topbar");if(!Ae)return;Ie=document.createElement("div"),Ie.dataset.adminTabsHost="",Ae.insertAdjacentElement("afterend",Ie)}if(Ie.innerHTML="",window.AdminTabs?.hasTabsFor?.(pe)&&xe){Ie.hidden=!1;let Ae=window.AdminTabs.renderTabStrip(pe,xe,{onSelect:Fe=>Le(pe,Fe)});Ae&&Ie.appendChild(Ae),Ie.classList.remove("admin-tabs-host--accordion");return}Ie.classList.remove("admin-tabs-host--accordion"),Ie.hidden=!0}y&&window.removeEventListener("hashchange",y),y=()=>{let pe=I(window.location.hash),xe=(window.location.hash||"").match(/^#\/([\w-]+)/),Ie=xe?xe[1]:null;pe&&Le(pe.nav,pe.tab,Ie||pe.raw)},window.addEventListener("hashchange",y),K.querySelectorAll("[data-route]").forEach(pe=>{pe.addEventListener("click",xe=>{xe.preventDefault(),Le(pe.dataset.route)})});let ce=I(window.location.hash),V=(window.location.hash||"").match(/^#\/([\w-]+)/),te=V?V[1]:ce?.raw||ce?.nav||"live";Le(ce?.nav||"live",ce?.tab||null,te),window._adminNavigateTo=()=>Le(Z,ue||j);let ae=!1,de=0,he=0;function ke(){if(ae)return;ae=!0;let pe=()=>{ae&&(ae=!1,de&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(de),clearTimeout(he),de=0,he=0,le(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:Z,leaf:j}})),Te())};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?(de=requestAnimationFrame(pe),he=setTimeout(pe,100)):he=setTimeout(pe,0)}let $e=K.querySelector(".admin-dash-main");$e&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{ke()}).observe($e,{childList:!0,subtree:!0}),ke())}function z(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let K=document.querySelector("[data-open-help]");K&&K.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let Z=document.querySelector("[data-open-palette]");if(Z){let Q=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};Z.addEventListener("click",Q),Z.addEventListener("keydown",ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Q())})}let j=document.getElementById("logoutButton");j&&j.addEventListener("click",async()=>{try{let Q=await C("/logout",{method:"POST"});Q.redirected&&(window.location.href=Q.url),showToast(ServerI18n.t("logoutSuccess"))}catch(Q){console.error("Logout Failed:",Q),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(Q=>{Q.name&&Q.addEventListener("change",async function(){let ne=this.name,re=this.checked;await t(ne,re)})}),document.querySelectorAll("details[id^='sec-']").forEach(Q=>{Q.addEventListener("toggle",()=>{let ne=c();ne[Q.id]=Q.open,r(ne)})}),document.querySelectorAll(".setting-input").forEach(Q=>{Q.addEventListener("change",async function(){let ne=this.dataset.key,re=parseInt(this.dataset.index),le=this.value;this.type==="number"&&(le=parseInt(le)),await e(ne,le,re,this)})})}function P(){if(u.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}R()}else x()}async function W(){await n(),P(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function ee(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{A&&(A.disconnect(),A=null)}),W()})});var Ct=ye(()=>{(function(){"use strict";var h=null;async function f(){var B=(document.getElementById("pollQuestion")?.value||"").trim(),N=document.querySelectorAll(".poll-option-input"),F=Array.from(N).map(function(D){return D.value.trim()}).filter(Boolean);if(!B){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(F.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var A=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:B,options:F})}),y=await A.json();if(!A.ok){window.showToast(y.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),U(y),C()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function u(){try{var B=await window.csrfFetch("/admin/poll/end",{method:"POST"}),N=await B.json();if(!B.ok){window.showToast(N.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),U(N),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function E(){try{var B=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),N=await B.json();if(!B.ok){window.showToast(N.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),U(N),h&&(clearInterval(h),h=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function C(){h&&(clearInterval(h),h=null);var B=async function(){try{var N=await fetch("/admin/poll/status",{credentials:"same-origin"});if(N.ok){var F=await N.json();U(F),F.state!=="active"&&h&&(clearInterval(h),h=null)}}catch{}};B(),h=setInterval(B,2e3)}function L(){var B=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var N=document.querySelector('#sec-polls [data-poll-action="add"]');N&&N.click()},extra:`
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
      </div>`});return B.dataset.emptyKind="poll",B}function U(B){var N=document.getElementById("pollStatusDisplay");if(N){if(N.textContent="",!B||B.state==="idle"){N.appendChild(L());return}var F=B.total_votes||0,A=Math.max(1,...B.options.map(function(T){return T.count})),y=document.createElement("div");y.className="admin-poll-status-card";var D=document.createElement("div");D.className="admin-poll-status-header";var _=document.createElement("span");_.className="admin-poll-status-dot"+(B.state==="active"?" is-active":" is-ended"),D.appendChild(_);var $=document.createElement("span");$.className="admin-poll-status-question",$.textContent=B.question||"",D.appendChild($);var I=document.createElement("span");I.className="admin-poll-status-state",I.textContent=B.state,D.appendChild(I),y.appendChild(D),B.options.forEach(function(T){var g=document.createElement("div");g.className="admin-poll-status-row";var c=document.createElement("div");c.className="admin-poll-status-label";var r=document.createElement("span"),o=document.createElement("b");o.textContent=T.key+".",r.appendChild(o),r.appendChild(document.createTextNode(" "+T.text));var n=document.createElement("span");n.textContent=T.count+" ("+T.percentage+"%)",c.appendChild(r),c.appendChild(n);var p=document.createElement("div");p.className="admin-poll-status-bar";var m=document.createElement("div");m.className="admin-poll-status-bar-fill",m.style.width=T.count/A*100+"%",p.appendChild(m),g.appendChild(c),g.appendChild(p),y.appendChild(g)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",F),y.appendChild(H),N.appendChild(y)}}function M(){var B=document.getElementById("sec-polls");if(B&&B.dataset.pollLegacyBound!=="1"){B.dataset.pollLegacyBound="1";var N=document.getElementById("pollCreateBtn");N&&N.addEventListener("click",f);var F=document.getElementById("pollEndBtn");F&&F.addEventListener("click",u);var A=document.getElementById("pollResetBtn");A&&A.addEventListener("click",E);var y=document.getElementById("pollAddOptionBtn");y&&y.addEventListener("click",function(){var $=document.getElementById("pollOptionsContainer");if($){var I=$.querySelectorAll(".poll-option-input").length;if(I>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+I)+". Option "+(I+1),H.maxLength=100,$.appendChild(H)}});var D=document.getElementById("pollRemoveOptionBtn");D&&D.addEventListener("click",function(){var $=document.getElementById("pollOptionsContainer");if($){var I=$.querySelectorAll(".poll-option-input");if(I.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}I[I.length-1].remove()}});var _=B;_&&(_.addEventListener("toggle",function(){_.open&&C()}),C()),window.addEventListener("beforeunload",function(){h&&(clearInterval(h),h=null)})}}document.addEventListener("admin-panel-rendered",function(){M()}),document.addEventListener("DOMContentLoaded",function(){M()}),window.addEventListener("hashchange",function(){var B=window.location.hash||"";B.indexOf("/polls")!==-1&&M()})})()});var Bt=ye(()=>{(function(){"use strict";var h="sec-timeline-export",f="danmu.adminHistoryExports.v1",u=10,E={rawText:!0,polls:!0,masked:!1,metadata:!0},C=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],L=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],U={range:"24h",filters:Object.assign({},E),format:"JSON"};function M(){return document.getElementById(h)}function B(){try{return JSON.parse(localStorage.getItem(f)||"[]")}catch{return[]}}function N(i){try{localStorage.setItem(f,JSON.stringify(i.slice(0,u)))}catch{}}function F(i){var v=B();v.unshift(i),N(v)}function A(i){return i?i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/1024/1024).toFixed(1)+" MB":"0 B"}function y(i){try{var v=new Date(i),k=new Date,S=v.toDateString()===k.toDateString();if(S)return ServerI18n.t("historyV2TodayAt",{time:String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")});var x=new Date(k);return x.setDate(k.getDate()-1),v.toDateString()===x.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")}):v.getMonth()+1+"-"+String(v.getDate()).padStart(2,"0")+" "+String(v.getHours()).padStart(2,"0")+":"+String(v.getMinutes()).padStart(2,"0")}catch{return i||""}}function D(i){if(i==="1h")return 1;if(i==="24h")return 24;if(i==="7d")return 168;if(i==="today"){var v=new Date,k=new Date(v.getFullYear(),v.getMonth(),v.getDate());return Math.max(1,Math.ceil((v-k)/36e5))}return i==="yest"?48:i==="live"?6:24}function _(i){return i.filter(function(v){return!(!U.filters.rawText&&!v.is_poll&&!v.muted&&!v.banned||!U.filters.polls&&v.is_poll||!U.filters.masked&&(v.muted||v.banned))}).map(function(v){if(!U.filters.metadata){var k=Object.assign({},v);return delete k.clientIp,delete k.fingerprint,k}return v})}function $(i){var v=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],k=window.AdminUtils.csvCell,S=function(R){return R.status?R.status:R.banned?"banned":R.muted?"muted":R.is_poll?"poll":"ok"},x=i.map(function(R){return[R.timestamp||"",R.nickname||"",R.text||"",R.color?"#"+R.color:"",R.size!=null?R.size:"",R.speed!=null?R.speed:"",R.opacity!=null?R.opacity:"",R.isImage?"true":"false",R.fontInfo&&R.fontInfo.name||"",R.clientIp||"",R.fingerprint||"",S(R),R.delivery_reason||""].map(k).join(",")});return[v.join(","),x.join(`\r
`)].filter(Boolean).join(`\r
`)}function I(i){return i.map(function(v,k){var S=new Date(v.timestamp||Date.now()),x=H(S),R=H(new Date(S.getTime()+3e3)),G=(v.nickname?"["+v.nickname+"] ":"")+(v.text||"");return k+1+`
`+x+" --> "+R+`
`+G+`
`}).join(`
`)}function H(i){var v=function(k,S){return String(k).padStart(S||2,"0")};return v(i.getHours())+":"+v(i.getMinutes())+":"+v(i.getSeconds())+","+v(i.getMilliseconds(),3)}function T(i,v){var k=URL.createObjectURL(i),S=document.createElement("a");S.href=k,S.download=v,S.click(),URL.revokeObjectURL(k)}function g(){var i=D(U.range),v=document.getElementById("histv2-go");v&&(v.disabled=!0,v.dataset.busy="1"),fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(k){if(!k.ok)throw new Error("http "+k.status);return k.json()}).then(function(k){var S=k&&k.records||[],x=_(S);if(x.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var R=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),G,q;if(U.format==="JSON"){var z=JSON.stringify(x,null,2);q=new Blob([z],{type:"application/json"}),G="danmu-history-"+R+".json"}else U.format==="CSV"?(q=new Blob(["\uFEFF"+$(x)],{type:"text/csv;charset=utf-8;"}),G="danmu-history-"+R+".csv"):(q=new Blob([I(x)],{type:"application/x-subrip;charset=utf-8;"}),G="danmu-history-"+R+".srt");T(q,G),F({name:G,fmt:U.format,size:q.size,when:new Date().toISOString(),count:x.length}),r(),c(x.length,q.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:x.length}),!0)}).catch(function(k){console.error("[history-v2] export failed",k),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:k.message||k}),!1)}).finally(function(){v&&(v.disabled=!1,delete v.dataset.busy)})}function c(i,v){var k=document.getElementById("histv2-estimate");k&&(k.textContent=ServerI18n.t("historyV2Estimate",{count:i||"\u2014",size:v?A(v):"\u2014 MB"}))}function r(){var i=document.getElementById("histv2-recent-list");if(i){var v=B();if(v.length===0){i.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}i.innerHTML=v.map(function(k){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+k.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(k.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o(y(k.when))+" \xB7 "+A(k.size)+"</div></div></div>"}).join("")}}function o(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):i==null?"":String(i).replace(/[&<>"']/g,function(v){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[v]})}function n(){return C.map(function(i){var v=U.range===i.k;return'<button type="button" class="histv2-chip'+(v?" is-active":"")+'" data-histv2-range="'+i.k+'">'+o(ServerI18n.t(i.labelKey))+(i.k==="live"?" \xB7 "+p():"")+"</button>"}).join("")}function p(){var i=new Date;return String(i.getHours()).padStart(2,"0")+":"+String(i.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function m(){var i=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return i.map(function(v){var k=!!U.filters[v.k];return'<button type="button" class="histv2-toggle'+(k?" is-on":"")+'" data-histv2-toggle="'+v.k+'"><span class="histv2-toggle-mark">'+(k?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(v.labelKey))+"</span></button>"}).join("")}function w(){return L.map(function(i){var v=U.format===i.k;return'<button type="button" class="histv2-fmt'+(v?" is-selected":"")+'" data-histv2-fmt="'+i.k+'">'+(v?'<span class="histv2-fmt-check">\u2713</span>':"")+(i.badge?'<span class="histv2-fmt-badge">'+o(i.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+i.k+'</div><div class="histv2-fmt-desc">'+o(i.desc)+"</div></button>"}).join("")}function d(){var i=M();i&&(i.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+m()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+w()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",i.addEventListener("click",s),r(),t())}function s(i){var v=i.target.closest("[data-histv2-range]");if(v){U.range=v.dataset.histv2Range,l(),t();return}var k=i.target.closest("[data-histv2-toggle]");if(k){var S=k.dataset.histv2Toggle;U.filters[S]=!U.filters[S],b(),t();return}var x=i.target.closest("[data-histv2-fmt]");if(x){U.format=x.dataset.histv2Fmt,e(),t();return}var R=i.target.closest("#histv2-go");if(R&&!R.dataset.busy){g();return}}function l(){var i=document.getElementById("histv2-chips");i&&(i.innerHTML=n())}function b(){var i=document.getElementById("histv2-toggles");i&&(i.innerHTML=m())}function e(){var i=document.getElementById("histv2-formats");i&&(i.innerHTML=w())}function t(){t._t&&clearTimeout(t._t),t._t=setTimeout(function(){var i=D(U.range);fetch("/admin/history?hours="+i+"&limit=10000",{credentials:"same-origin"}).then(function(v){return v.ok?v.json():null}).then(function(v){if(!v)return c(0,0);var k=_(v&&v.records||[]),S=U.format==="JSON"?220:U.format==="CSV"?110:80;c(k.length,k.length*S)}).catch(function(){c(0,0)})},250)}function a(){var i=M(),v=document.getElementById("admin-backup-v2-page");if(!i){var k=document.getElementById("settings-grid");if(!k)return;i=document.createElement("div"),i.id=h,i.className="admin-ui-card lg:col-span-2 history-v2-section",k.appendChild(i),d()}v&&v.parentElement&&i.previousElementSibling!==v&&v.parentElement.insertBefore(i,v.nextSibling)}document.addEventListener("admin-panel-rendered",a),document.addEventListener("admin-route-applied",a),window.AdminHistoryV2={refresh:t,state:U}})()});var Ft=ye(()=>{(function(){"use strict";let h="admin-replay-bar";function f(){let E=document.getElementById(h);return E||(document.body?(E=document.createElement("div"),E.id=h,E.className="admin-replay-bar",E.hidden=!0,E.setAttribute("role","status"),E.setAttribute("aria-live","polite"),E.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(E,document.body.firstChild),E):null)}function u(E){let C=f();C&&(C.hidden=!E)}window.AdminReplayBar={ensure:f,setActive:u},document.addEventListener("admin-panel-rendered",f)})()});var Dt=ye(()=>{(function(){"use strict";let h=null;function f(y){window.AdminReplayBar&&window.AdminReplayBar.ensure();let D=document.getElementById("replayPauseBtn"),_=document.getElementById("replayResumeBtn"),$=document.getElementById("replayStopBtn"),I=document.getElementById("replayProgress"),H=(c,r)=>{c&&c.classList.toggle("hidden",!r)},T=y==="playing",g=y==="paused";H(D,T),H(_,g),H($,T||g),H(I,T||g),!T&&!g&&I&&(I.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(T||g)}function u(){h&&clearInterval(h),h=setInterval(async()=>{try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let D=await y.json(),_=document.getElementById("replayProgress");_&&(_.textContent=ServerI18n.t("replayingProgress").replace("{sent}",D.sent).replace("{total}",D.total)),f(D.state),D.state==="stopped"&&(clearInterval(h),h=null)}catch{}},500)}async function E(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),f("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function C(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),f("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function L(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),f("stopped"),h&&(clearInterval(h),h=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let U=null,M=null,B=0,N=null;function F(){[["replayPauseBtn",E],["replayResumeBtn",C],["replayStopBtn",L]].forEach(function([D,_]){let $=document.getElementById(D);$&&!$.dataset.replayCtrlsBound&&($.addEventListener("click",_),$.dataset.replayCtrlsBound="1")})}async function A(){try{let y=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!y.ok)return;let D=await y.json();(D.state==="playing"||D.state==="paused")&&(f(D.state),u())}catch{}}window.AdminReplayControls={notifyStarted:function(){f("playing"),u()}},document.addEventListener("admin-panel-rendered",function(){F(),A()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(F,800)})})()});var Mt=ye(()=>{(function(){"use strict";let h="sec-ratelimit",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(y){return String(y).replace(/[&<>"']/g,function(D){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[D]})},u=(y,D)=>ServerI18n.t(y,D),E=(y,D)=>{typeof showToast=="function"&&showToast(y,D)},C={viewer:{targets:["fire","fire_fingerprint","fire_global"],unitKey:"rlMaxMessages"},other:{targets:["api","admin","login","fire_admin"],unitKey:"rlMaxRequests"}},L={fire:"rlTargetViewer",fire_fingerprint:"rlTargetDevice",fire_global:"rlTargetRoom",api:"ratelimitScopeApiDesc",admin:"ratelimitScopeAdminDesc",login:"ratelimitScopeLoginDesc",fire_admin:"rlTargetTokenLane"},U=[10,30,60,300,3600];function M(y){return y>=3600&&y%3600===0?u("rlHours",{n:y/3600}):y>60&&y%60===0?u("rlMinutes",{n:y/60}):u("rlSeconds",{n:y})}function B(y){let D=C[y];return`
            <div class="admin-ratelimit-form" data-rl-form="${y}">
              <div class="admin-ratelimit-row-body admin-ratelimit-row-body--form">
                <label class="admin-ratelimit-field">
                  <span>${u("rlTargetLabel")}</span>
                  <select data-rl-target>
                    ${D.targets.map(_=>`<option value="${_}">${f(u(L[_]))}</option>`).join("")}
                  </select>
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u(D.unitKey)}</span>
                  <input type="number" step="1" inputmode="numeric" data-rl-limit />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${u("rlPer")}</span>
                  <select data-rl-window>
                    ${U.map(_=>`<option value="${_}">${f(M(_))}</option>`).join("")}
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
      <div id="${h}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-rows">
          <div class="admin-ratelimit-row" data-rl-pace>
            ${B("viewer")}
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
            ${B("other")}
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
      </div>`}function F(y){let D={},_={},$=!1,I=0,H=Array.from(y.querySelectorAll("[data-rl-form]")),T=P=>({target:P.querySelector("[data-rl-target]"),limit:P.querySelector("[data-rl-limit]"),window:P.querySelector("[data-rl-window]"),current:P.querySelector("[data-rl-current]"),barWrap:P.querySelector("[data-rl-bar-wrap]"),bar:P.querySelector("[data-rl-bar]"),spark:P.querySelector("[data-rl-spark]")}),g=P=>u(L[P]||P);function c(P){let W=T(P);W.window.disabled=W.limit.value.trim()!==""&&Number(W.limit.value)===0}function r(P){let W=T(P),ee=D[W.target.value];if(ee){if(W.limit.min=ee.min,W.limit.max=ee.max,W.limit.value=ee.limit,W.window.querySelectorAll("option[data-rl-custom]").forEach(J=>J.remove()),!W.window.querySelector(`option[value="${ee.window}"]`)){let J=document.createElement("option");J.value=String(ee.window),J.textContent=M(ee.window),J.dataset.rlCustom="1",W.window.appendChild(J)}W.window.value=String(ee.window),c(P)}}function o(P){let W=T(P),ee=_[W.target.value],J=ee&&ee.hits||0,K=ee&&ee.violations||0;W.current.textContent=ee?u("ratelimitHitsViolations",{hits:J.toLocaleString(),viol:K.toLocaleString()}):"\u2014",W.barWrap.hidden=J+K===0,W.bar.style.width=J+K===0?"0":(K/(J+K)*100).toFixed(1)+"%",n(W.spark,ee&&(ee.bucket_history||ee.history))}function n(P,W){if(!P)return;let ee=96,J=24,K=Array.isArray(W)&&W.length?W.slice(-24):new Array(24).fill(0),Z=Math.max(1,...K),j=ee/Math.max(1,K.length-1),Q=K.map((re,le)=>`${(le*j).toFixed(1)},${(J-2-re/Z*(J-4)).toFixed(1)}`).join(" "),ne=P.querySelector("polyline");ne&&ne.setAttribute("points",Q)}async function p(){let P=I;try{let W=await fetch("/admin/ratelimit/config",{credentials:"same-origin"});if(!W.ok)return;let ee=await W.json();if(P!==I){await p();return}D=ee&&ee.scopes||{},H.forEach(r)}catch{}}let m=!1;async function w(){if(m)return;m=!0;let P=null;try{let Z=await fetch("/admin/metrics",{credentials:"same-origin"});Z.ok&&(P=await Z.json())}catch{}finally{m=!1}let W=P&&P.rate_limits;if(_=W||{},H.forEach(o),!P)return;l(),s(P.recent_violations);let ee=y.querySelector("[data-rl-sum-viol]"),J=y.querySelector("[data-rl-sum-viol-rate]"),K=y.querySelector("[data-rl-sum-locked]");if(W&&W.totals){let Z=W.totals.hits||0,j=W.totals.violations||0;ee&&(ee.textContent=j.toLocaleString()),J&&(J.textContent=Z+j>0?u("ratelimitBlockRateValue",{rate:(j/(Z+j)*100).toFixed(1)}):"\u2014"),K&&(K.textContent=u("ratelimitLockedSources",{n:(W.totals.locked_sources||0).toLocaleString()}))}else ee&&(ee.textContent="\u2014"),J&&(J.textContent="\u2014"),K&&(K.textContent="\u2014")}async function d(){try{let P=window.AdminBootstrap;P&&typeof P.primeBootstrap=="function"&&await P.primeBootstrap();let W=P&&P.bootstrapSection?P.bootstrapSection("history_stats"):null,ee=P&&P.bootstrapSection?P.bootstrapSection("blacklist"):null,[J,K]=await Promise.all([W?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"}),ee?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})]),Z=W||(J&&J.ok?await J.json():null);if(Z){let Q=y.querySelector("[data-rl-sum-hits]"),ne=y.querySelector("[data-rl-sum-hits-delta]");Q&&(Q.textContent=(Z.stats&&Z.stats.last_24h||0).toLocaleString()),ne&&(ne.textContent=u("ratelimitSumTotal",{n:(Z.stats&&Z.stats.total||0).toLocaleString()}))}let j=ee||(K&&K.ok?await K.json():null);if(j){let Q=Array.isArray(j)?j:j.entries||j.keywords||[],ne=y.querySelector("[data-rl-sum-black]");ne&&(ne.textContent=Q.length?u("ratelimitCountUnit",{n:Q.length}):"0")}}catch{}}function s(P){let W=y.querySelector("[data-rl-vbody]"),ee=y.querySelector("[data-rl-vcount]");if(!W)return;let J=Array.isArray(P)?P:[];if(ee&&(ee.textContent=J.length?String(J.length):""),J.length===0){W.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${u("ratelimitNoViolationsYet")}</div>`;return}let K=j=>String(j).padStart(2,"0"),Z=j=>{let Q=new Date(j*1e3);return`${K(Q.getHours())}:${K(Q.getMinutes())}:${K(Q.getSeconds())}`};W.innerHTML=J.slice(0,30).map(j=>`
        <div class="admin-ratelimit-vfeed-row">
          <span class="admin-ratelimit-vfeed-time">${Z(j.ts)}</span>
          <span class="admin-ratelimit-vfeed-scope">${f(g(j.scope||""))}</span>
          <span class="admin-ratelimit-vfeed-ip">${f(j.ip||"")}</span>
        </div>
      `).join("")}function l(){let P=y.querySelector("[data-rl-suggestions]");if(P&&(P.innerHTML=Object.keys(L).map(W=>{let ee=_[W],J=ee&&ee.suggestion;if(!J)return"";let K=u("ratelimitSuggestDetail",{p95:Number(J.p95_per_second||0).toFixed(2),limit:ee.limit||"\u2014",window:ee.window||"\u2014",suggLimit:J.suggested_limit,suggWindow:J.suggested_window});return`
          <div class="admin-ratelimit-suggest" data-rl-suggest="${W}">
            <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
            <span class="admin-ratelimit-suggest-body">
              <span class="admin-ratelimit-suggest-title">${f(g(W))}</span>
              <span class="admin-ratelimit-suggest-detail">${f(K)}</span>
            </span>
            <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${W}" data-rl-suggest-limit="${Number(J.suggested_limit)}" data-rl-suggest-window="${Number(J.suggested_window)}">${u("ratelimitApplySuggestBtn")}</button>
          </div>`}).join(""),P.children.length&&!$)){$=!0;let W=P.closest("details");W&&(W.open=!0)}}async function b(P,W,ee,J){P.disabled=!0;try{let K=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:W,limit:ee,window:J})});if(K.ok){let j=await K.json();return I+=1,D[W]=Object.assign({},D[W],{limit:j.limit,window:j.window,saved:!0}),j.persisted===!1?E(u("rlNotPersisted"),!1):E(u("ratelimitPaceSavedToast"),!0),!0}let Z=await K.clone().json().catch(()=>({}));E(u("ratelimitApplyFailedToast",{msg:Z&&Z.error||`HTTP ${K.status}`}),!1)}catch{E(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{P.disabled=!1}return!1}let e={cooldown:y.querySelector("[data-rl-cooldown]"),max:y.querySelector("[data-rl-onscreen-max]"),mode:y.querySelector("[data-rl-onscreen-mode]")};async function t(){try{let P=await fetch("/get_settings",{credentials:"same-origin"});if(P.ok){let W=(await P.json()).ViewerFireCooldownSec;e.cooldown&&Array.isArray(W)&&(e.cooldown.value=W[1])}}catch{}try{let P=await fetch("/admin/api/onscreen-limits",{credentials:"same-origin"});if(P.ok){let W=await P.json();e.max&&(e.max.value=W.max_onscreen_danmu),e.mode&&(e.mode.value=W.overflow_mode),a()}}catch{}}function a(){!e.max||!e.mode||(e.mode.disabled=Number(e.max.value)===0)}e.max&&e.max.addEventListener("input",a);async function i(P,W,ee){P.disabled=!0;try{let J=await window.csrfFetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)});if(J.ok)E(u("ratelimitPaceSavedToast"),!0);else{let K=await J.clone().json().catch(()=>({}));E(u("ratelimitApplyFailedToast",{msg:K&&K.error||`HTTP ${J.status}`}),!1)}}catch{E(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{P.disabled=!1}}y.addEventListener("click",async P=>{let W=P.target.closest("[data-rl-action]");if(!W)return;let ee=W.dataset.rlAction;if(ee==="save"){let J=W.closest("[data-rl-form]"),K=T(J),Z=K.limit.value.trim(),j=Number(Z),Q=parseInt(K.window.value,10);if(Z===""||!Number.isInteger(j)||j<0||!Number.isFinite(Q)){E(u("ratelimitInvalidInputToast"),!1);return}let ne=D[K.target.value];if(ne&&(j<ne.min||j>ne.max)){E(u("rlOutOfRange",{min:ne.min,max:ne.max}),!1);return}await b(W,K.target.value,j,Q)&&(r(J),w());return}if(ee==="apply-suggest"){let J=W.dataset.rlApply,K=parseInt(W.dataset.rlSuggestLimit,10),Z=parseInt(W.dataset.rlSuggestWindow,10);if(!J||!Number.isFinite(K)||!Number.isFinite(Z))return;let j=D[J];if(j&&(K<j.min||K>j.max)){E(u("rlOutOfRange",{min:j.min,max:j.max}),!1);return}await b(W,J,K,Z)&&(H.forEach(Q=>{T(Q).target.value===J&&r(Q)}),w());return}if(ee==="save-cooldown"){let J=parseFloat(e.cooldown&&e.cooldown.value);if(!Number.isFinite(J)||J<0||J>10){E(u("ratelimitInvalidInputToast"),!1);return}await i(W,"/admin/update",{type:"ViewerFireCooldownSec",value:J,index:1});return}if(ee==="save-onscreen"){let J=e.max?e.max.value.trim():"",K=Number(J);if(J===""||!Number.isInteger(K)||K<0||K>200){E(u("ratelimitInvalidInputToast"),!1);return}await i(W,"/admin/api/onscreen-limits",{max_onscreen_danmu:K,overflow_mode:e.mode&&e.mode.value==="queue"?"queue":"drop"});return}if(ee==="reset"){W.disabled=!0;try{let J=await window.csrfFetch("/admin/ratelimit/reset",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(J.ok){let K=await J.json();I+=1,D=K&&K.scopes||D,H.forEach(r),w(),K&&K.persisted===!1?E(u("rlNotPersisted"),!1):E(u("ratelimitResetDoneToast"),!0)}else E(u("ratelimitApplyFailedToast",{msg:`HTTP ${J.status}`}),!1)}catch{E(u("ratelimitApplyFailedToast",{msg:u("ratelimitNetworkError")}),!1)}finally{W.disabled=!1}}}),y.addEventListener("change",P=>{let W=P.target.closest&&P.target.closest("[data-rl-form]");!W||!P.target.matches("[data-rl-target]")||(r(W),o(W),w())}),y.addEventListener("input",P=>{let W=P.target.closest&&P.target.closest("[data-rl-form]");W&&P.target.matches("[data-rl-limit]")&&c(W)});let v=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,k={allowlist:[],denylist:[]},S={input:y.querySelector("[data-rl-ip-input]"),select:y.querySelector("[data-rl-ip-select]"),addBtn:y.querySelector("[data-rl-ip-add]"),summary:y.querySelector("[data-rl-ip-summary]"),error:y.querySelector("[data-rl-ip-error]"),allowCount:y.querySelector("[data-rl-ip-allow-count]"),denyCount:y.querySelector("[data-rl-ip-deny-count]"),allowBody:y.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:y.querySelector('[data-rl-ip-body="denylist"]')};function x(P){if(S.error){if(!P){S.error.hidden=!0,S.error.textContent="";return}S.error.hidden=!1,S.error.textContent=P}}function R(P){let W=P==="allowlist"?S.allowBody:S.denyBody,ee=P==="allowlist"?S.allowCount:S.denyCount;if(!W||!ee)return;let J=Array.isArray(k[P])?k[P]:[];if(ee.textContent=String(J.length),J.length===0){let K=ServerI18n.t(P==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");W.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:K})}</div>`;return}W.innerHTML=J.map(K=>{let Z=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:f(K)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${f(K)}">
          <span class="admin-ratelimit-ip-chip-cidr">${f(K)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${f(K)}" data-rl-ip-remove-kind="${P}" title="${Z}" aria-label="${Z}">\xD7</button>
        </div>
      `}).join("")}function G(){if(R("allowlist"),R("denylist"),S.summary){let P=(k.allowlist||[]).length,W=(k.denylist||[]).length;S.summary.textContent=ServerI18n.t("ratelimitIpCounts",{allow:P,deny:W})}}async function q(){try{let P=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!P.ok){S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitLoadFailedStatus",{status:P.status}));return}let W=await P.json();W&&typeof W=="object"&&(k={allowlist:Array.isArray(W.allowlist)?W.allowlist:[],denylist:Array.isArray(W.denylist)?W.denylist:[]},G())}catch{S.summary&&(S.summary.textContent=ServerI18n.t("ratelimitNetworkError"))}}async function z(P,{toastLabel:W}={}){try{let ee=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(ee.ok){let Z=await ee.json();return k={allowlist:Array.isArray(Z.allowlist)?Z.allowlist:[],denylist:Array.isArray(Z.denylist)?Z.denylist:[]},G(),x(""),W&&typeof showToast=="function"&&showToast(W,!0),!0}let J=await ee.json().catch(()=>({})),K=J&&J.error||`HTTP ${ee.status}`;return x(K),!1}catch{return x(ServerI18n.t("ratelimitNetworkError")),!1}}S.addBtn&&S.addBtn.addEventListener("click",async()=>{if(!S.input||!S.select)return;let P=(S.input.value||"").trim();if(!P){x(ServerI18n.t("ratelimitIpRequiredError"));return}if(!v.test(P)){x(ServerI18n.t("ratelimitIpFormatError"));return}let W=S.select.value==="denylist"?"denylist":"allowlist",ee=Array.from(new Set([...k[W]||[],P]));await z({[W]:ee},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(W==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:P})})&&(S.input.value="")}),S.input&&(S.input.addEventListener("keydown",P=>{P.key==="Enter"&&(P.preventDefault(),S.addBtn&&S.addBtn.click())}),S.input.addEventListener("input",()=>{S.error&&!S.error.hidden&&x("")})),y.addEventListener("click",async P=>{let W=P.target.closest("[data-rl-ip-remove]");if(!W)return;let ee=W.dataset.rlIpRemove,J=W.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",K=(k[J]||[]).filter(Z=>Z!==ee);await z({[J]:K},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(J==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:ee})})}),q(),p(),t(),w(),d()}function A(){let y=document.getElementById("settings-grid");if(!y||document.getElementById(h))return;y.insertAdjacentHTML("beforeend",N());let D=document.getElementById(h);D&&F(D)}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var Nt=ye(()=>{(function(){"use strict";let h="sec-viewer-theme",f="danmu.viewerTheme.v1",u=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function E(){return`
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
      </details>`}let C=/^#[0-9a-f]{6}$/i,L=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function U(F){return String(F??"").replace(/[&<>"']/g,A=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[A])}function M(F){let A={};return!F||typeof F!="object"||(["bg","primary","hero"].forEach(y=>{typeof F[y]=="string"&&C.test(F[y])&&(A[y]=F[y])}),(F.mode==="dark"||F.mode==="light")&&(A.mode=F.mode),typeof F.font=="string"&&/^[\w .-]{1,64}$/.test(F.font)&&(A.font=F.font),(F.logo===null||typeof F.logo=="string"&&L.test(F.logo))&&(A.logo=F.logo)),A}function B(F){let A={...u[0],logo:null};try{let e=localStorage.getItem(f);e&&(A={...A,...M(JSON.parse(e))})}catch{}let y="default";function D(){try{localStorage.setItem(f,JSON.stringify(A))}catch{}}function _(e){let t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return[0,0,0];let a=parseInt(t[1],16);return[a>>16&255,a>>8&255,a&255]}function $([e,t,a]){let i=[e,t,a].map(v=>(v/=255,v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)));return .2126*i[0]+.7152*i[1]+.0722*i[2]}function I(e,t){let a=$(_(e)),i=$(_(t)),[v,k]=a>i?[a,i]:[i,a];return(v+.05)/(k+.05)}function H(e){return e>=7?{label:"AAA",cls:"is-good"}:e>=4.5?{label:"AA",cls:"is-ok"}:e>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function T(){let e=F.querySelector("[data-vt-presets]");e.innerHTML="",u.forEach(t=>{let a=document.createElement("button");a.type="button",a.className="admin-vt-preset"+(y===t.id?" is-active":""),a.innerHTML=`
          <div class="swatch" style="background:${t.bg}">
            <span style="background:${t.primary}"></span>
            <span style="background:${t.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(t.nameKey)}</div>
          <div class="mode">${ServerI18n.t(t.mode==="dark"?"lbDark":"lbLight")}</div>
        `,a.addEventListener("click",()=>{A={...A,...t},y=t.id,D(),b()}),e.appendChild(a)})}function g(){F.querySelectorAll("[data-vt-mode-btn]").forEach(e=>{e.classList.toggle("is-active",A.mode===e.dataset.vtModeBtn)})}function c(){let e=F.querySelector("[data-vt-colors]"),t=A.mode==="dark"?"#F8FAFC":"#0F172A",a=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:t,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:A.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:A.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];e.innerHTML=a.map(i=>{let v=I(A[i.key],i.vs),k=H(v),S=U(A[i.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${S}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${i.label}</span>
                <span class="grade ${k.cls}">${k.label} \xB7 ${v.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${S}" data-vt-color="${i.key}" />
                <input type="text" value="${S}" data-vt-hex="${i.key}" spellcheck="false" />
                <span class="vs">vs ${i.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function r(){let e=F.querySelector("[data-vt-logo-preview]"),t=F.querySelector(".hint-empty"),a=F.querySelector("[data-vt-logo-actions]");A.logo?(e.src=A.logo,e.hidden=!1,t.style.display="none",a.hidden=!1):(e.hidden=!0,t.style.display="",a.hidden=!0)}function o(){let e=F.querySelector("[data-vt-font]");e.value=A.font;let t=F.querySelector("[data-vt-font-specimen]");t.style.fontFamily=A.font}function n(){let e=A.mode==="dark"?"#F8FAFC":"#0F172A",t=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(e,A.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(A.primary,A.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:I(A.hero,A.bg)}];F.querySelector("[data-vt-contrast]").innerHTML=t.map(a=>{let i=H(a.ratio);return`<span class="vt-contrast-chip ${i.cls}">${a.lbl} \xB7 ${i.label} ${a.ratio.toFixed(1)}</span>`}).join("")}function p(){let e=F.querySelector("[data-vt-stage]"),t=A.mode==="dark"?"#F8FAFC":"#0F172A";e.style.setProperty("--vt-bg",A.bg),e.style.setProperty("--vt-primary",A.primary),e.style.setProperty("--vt-hero",A.hero),e.style.setProperty("--vt-fg",t),e.style.fontFamily=A.font;let a=F.querySelector("[data-vt-preview-logo]");if(A.logo){let i=document.createElement("img");i.src=A.logo,i.style.maxHeight="40px",a.replaceChildren(i)}else a.textContent="Danmu Fire"}let m="auto",w="auto";function d(){F.querySelectorAll("[data-vt-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtThemeBtn===m)}),F.querySelectorAll("[data-vt-lang-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.vtLangBtn===w)})}async function s(){try{let e=await fetch("/get_settings",{credentials:"same-origin"});if(!e.ok)return;let t=await e.json(),a=t&&t.ViewerThemeMode&&t.ViewerThemeMode[1],i=t&&t.ViewerLangMode&&t.ViewerLangMode[1];typeof a=="string"&&(m=a),typeof i=="string"&&(w=i),d()}catch{}}async function l(e,t){if(window.csrfFetch)try{let a=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e,value:t,index:1})});if(!a.ok)throw new Error(a.status);window.showToast&&window.showToast(`${e} = ${t}`,!0)}catch(a){console.warn("[admin-viewer-theme] force-mode update failed:",a),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:e}),!1)}}function b(){T(),g(),c(),r(),o(),n(),p(),d()}F.addEventListener("input",e=>{if(e.target.matches("[data-vt-color]")){let t=e.target.dataset.vtColor;C.test(e.target.value)&&(A[t]=e.target.value,y="custom",D(),b())}else if(e.target.matches("[data-vt-hex]")){let t=e.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(e.target.value)&&(A[t]=e.target.value,y="custom",D(),b())}else e.target.matches("[data-vt-font]")&&(A.font=e.target.value,D(),b())}),F.addEventListener("change",e=>{if(e.target.matches("[data-vt-logo-input]")){let t=e.target.files&&e.target.files[0];if(!t)return;if(t.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let a=new FileReader;a.onload=()=>{A.logo=String(a.result||""),D(),b()},a.readAsDataURL(t)}}),F.addEventListener("click",e=>{let t=e.target.closest("[data-vt-mode-btn]");if(t){A.mode=t.dataset.vtModeBtn,y="custom",D(),b();return}let a=e.target.closest("[data-vt-theme-btn]");if(a){m=a.dataset.vtThemeBtn,d(),l("ViewerThemeMode",m);return}let i=e.target.closest("[data-vt-lang-btn]");if(i){w=i.dataset.vtLangBtn,d(),l("ViewerLangMode",w);return}if(e.target.closest("[data-vt-logo-remove]")){A.logo=null,D(),b();return}let k=e.target.closest("[data-vt-device-btn]");if(k){F.querySelectorAll("[data-vt-device-btn]").forEach(x=>x.classList.toggle("is-active",x===k)),F.querySelector("[data-vt-frame]").dataset.device=k.dataset.vtDeviceBtn;return}let S=e.target.closest("[data-vt-action]");S&&S.dataset.vtAction==="reset"&&(A={...u[0],logo:null},y="default",D(),b())}),b(),s()}document.addEventListener("click",function(F){let A=F.target.closest("[data-vt-jump]");if(!A)return;let y=A.dataset.vtJump;if(y){F.preventDefault();try{location.hash="#/"+y}catch{}}});function N(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(h))return;F.insertAdjacentHTML("beforeend",E());let A=document.getElementById(h);A&&B(A)}document.addEventListener("admin-panel-rendered",N),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Pt=ye(()=>{(function(){"use strict";let h="sec-system-overview";function f(){return`
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
      </div>`}function u(M){let B=Math.floor(M/86400),N=Math.floor(M%86400/3600),F=Math.floor(M%3600/60);return B>0?`${B}d ${String(N).padStart(2,"0")}h ${String(F).padStart(2,"0")}m`:N>0?`${N}h ${String(F).padStart(2,"0")}m`:`${F}m ${String(M%60).padStart(2,"0")}s`}function E(M,B,N){let F=document.querySelector(`[data-m="${M}"]`);if(!F)return;let A=F.querySelector("[data-m-v]");A&&(A.textContent=B);let y=F.querySelector("[data-m-sub]");y&&(y.textContent=N||"")}function C(M){let B=document.querySelector("[data-soh-banner-dot]"),N=document.querySelector("[data-soh-banner-title]"),F=document.querySelector("[data-soh-chip]"),y=!(M.queue_size!=null&&M.queue_capacity!=null&&M.queue_size>=M.queue_capacity);F&&F.classList.toggle("is-warn",!y),B&&B.classList.toggle("is-warn",!y),N&&(N.textContent=y?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function L(){(async()=>{try{let N=await window.csrfFetch("/admin/metrics");if(!N.ok)return;let F=await N.json(),A=T=>Array.isArray(T)&&T.length?T[T.length-1]:null,y=F.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-F.server_started_at)):0;E("uptime",y>0?u(y):"\u2014","");let D=null;try{let T=await fetch("/admin/audience/stats",{credentials:"same-origin"});T.ok&&(D=(await T.json()).total_live)}catch{}let _=F.ws_clients??0;E("conn",String(_+(D||0)),D==null?ServerI18n.t("sohConnOverlaysOnly",{n:_}):ServerI18n.t("sohConnBreakdown",{overlays:_,viewers:D}));let $=A(F.mem_series||[]),I=F.mem_total_mb?(F.mem_total_mb/1024).toFixed(0):null;E("ram",$!=null?`${Number($).toFixed(0)}%`:"\u2014",I?ServerI18n.t("sohMemorySub",{total:I}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";E("ver",`v${H}`,ServerI18n.t("sohVersionSub")),C(F)}catch{}})();let M=document.getElementById(h);if(!M)return;let B=()=>{let N=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";M.querySelectorAll("[data-soh-mode]").forEach(F=>{let A=F.dataset.sohMode===N;F.classList.toggle("is-active",A),F.setAttribute("aria-pressed",A?"true":"false")})};B(),document.addEventListener("admin:theme-mode",B),M.addEventListener("click",function(N){let F=N.target.closest("[data-soh-mode]");if(F){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(F.dataset.sohMode),B();return}let A=N.target.closest("[data-soh-action]");if(!(!A||A.disabled)){if(A.dataset.sohAction==="copy-url"){let y=document.getElementById("sysoPublicUrl")?.textContent||"";window.AdminUtils.copyText(y);return}if(A.dataset.sohAction==="show-qr"){let y=M.querySelector("[data-soh-qr]");if(!y)return;if(!y.hidden){y.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(D=>D.ok?D.json():Promise.reject(D)).then(D=>{y.innerHTML=D.svg,y.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function U(){let M=document.getElementById("settings-grid");!M||document.getElementById(h)||(M.insertAdjacentHTML("beforeend",f()),document.getElementById(h)&&L())}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var Rt=ye(()=>{(function(){"use strict";let h="sec-polls",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(L){return String(L).replace(/[&<>"']/g,function(U){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[U]})};function u(){return`
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
  `}function E(){let L=document.getElementById("sec-polls");if(!L)return;let U=L.querySelector("[data-poll-queue]"),M=L.querySelector("[data-poll-editor]"),B=L.querySelector("[data-poll-view-builder]"),N=L.querySelector("[data-poll-view-live]"),F=L.querySelector("[data-poll-view-results]"),A="danmu.adminPollQueue.v2";function y(){return"q_"+Math.random().toString(36).slice(2,8)}function D(){return"o_"+Math.random().toString(36).slice(2,6)}function _(j){return{id:D(),label:""}}function $(){return{id:y(),text:"",timer:90,image_url:"",server_q_id:"",options:[_("A"),_("B")]}}let I=null,H="builder",T=null,g=0,c={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},r=null,o=[];try{let j=localStorage.getItem(A);if(j){let Q=JSON.parse(j);Array.isArray(Q)?o=Q:Q&&Array.isArray(Q.queue)&&(o=Q.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[$()]),o.forEach(j=>{typeof j.image_url!="string"&&(j.image_url=""),typeof j.server_q_id!="string"&&(j.server_q_id="")});let n=o[0].id,p="manual",m=null,w=null,d={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function s(){try{localStorage.setItem(A,JSON.stringify({queue:o,activeId:n,mode:p}))}catch{}}function l(j){return o.find(Q=>Q.id===j)}function b(j,Q){let ne=l(j);ne&&Object.assign(ne,Q)}function e(j,Q,ne){let re=j.slice(),[le]=re.splice(Q,1);return re.splice(ne,0,le),re}function t(){U.innerHTML="",o.forEach((j,Q)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",j.id===n&&ne.classList.add("is-active");let re=d.active&&d.currentIndex===Q;re&&ne.classList.add("is-running"),ne.dataset.qid=j.id,ne.draggable=!0;let le=!!j.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Q+1}</span>
            <div class="info">
              <div class="text">${f(j.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:j.options.length})} \xB7 ${j.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):j.timer+"s"} \xB7 ${le?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${re?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":j.id===n?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,U.appendChild(ne)})}function a(){let j=l(n)||o[0];if(!j){M.innerHTML="";return}let Q=o.indexOf(j);M.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Q+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Q+1})}</span>
            </div>
            <span class="progress">Q${Q+1} / ${o.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${f(j.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${j.image_url?`
              <img class="admin-poll-q-image-thumb" src="${f(j.image_url)}" alt="" />
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
            ${j.options.map((ne,re)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+re)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${f(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+re)})}" maxlength="100" />
                ${j.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ne.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
              </div>
            `).join("")}
            ${j.options.length<6?`<button type="button" class="admin-poll-opt-add" data-ed-opt-add>${ServerI18n.t("pollBuilderAddOptionBtn",{n:j.options.length})}</button>`:""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>${ServerI18n.t("pollBuilderTimeLimitLabel")}</span>
              <select data-ed-timer>
                <option value="30"${j.timer===30?" selected":""}>30s</option>
                <option value="90"${j.timer===90?" selected":""}>90s</option>
                <option value="180"${j.timer===180?" selected":""}>${ServerI18n.t("pollBuilderTimer3Min")}</option>
                <option value="300"${j.timer===300?" selected":""}>${ServerI18n.t("pollBuilderTimer5Min")}</option>
                <option value="0"${j.timer===0?" selected":""}>${ServerI18n.t("pollBuilderNoTimeLimit")}</option>
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
        `}function i(){I&&I.active?H="live":T?H="results":H="builder",L.dataset.pollView=H,B.hidden=H!=="builder",N.hidden=H!=="live",F.hidden=H!=="results",t(),a(),W(),H==="live"?R():H==="results"&&q(),H==="live"?v():k()}function v(){r||(r=setInterval(()=>{H!=="live"||!I||!I.active||G()},1e3))}function k(){r&&(clearInterval(r),r=null)}function S(j,Q){if(!j||!j.time_limit_seconds)return null;if(!Q)return j.time_limit_seconds;let ne=Date.now()/1e3-Q;return Math.max(0,Math.round(j.time_limit_seconds-ne))}function x(j){if(j==null)return"\u221E";let Q=String(Math.floor(j/60)).padStart(2,"0"),ne=String(j%60).padStart(2,"0");return`${Q}:${ne}`}function R(){if(!I||!I.questions||I.questions.length===0){N.innerHTML="";return}let j=I.current_index>=0?I.current_index:0,Q=I.questions.length,ne=I.questions[j],re=S(ne,I.started_at),le=ne.time_limit_seconds||0,ue=le>0&&re!=null?Math.max(0,Math.min(1,re/le)):1,me=le>0&&re!=null&&re<=Math.max(5,le*.15),Te=ne.options.reduce((ae,de)=>ae+(de.count||0),0),Ee=[...ne.options].sort((ae,de)=>(de.count||0)-(ae.count||0)),Le=Ee[0]?Ee[0].count:0,oe=I.questions[j+1],se=110,ce=se/2-6,V=2*Math.PI*ce,te=V*ue;N.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${f((I.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${j+1}</strong>`,total:Q})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${se} ${se}" width="56" height="56">
                      <circle cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${se/2}" cy="${se/2}" r="${ce}" fill="none"
                        stroke="${me?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${te} ${V}" stroke-linecap="round"
                        transform="rotate(-90 ${se/2} ${se/2})"
                        style="filter: drop-shadow(0 0 4px ${me?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${me?"is-low":""}" data-live-mmss>${re==null?ServerI18n.t("pollBuilderNoTimeLimit"):x(re)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:j+1})}</div>
                <div class="text">${f(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ee.map(ae=>{let de=Te>0?ae.count/Te*100:0,he=(ae.count||0)>0&&ae.count===Le;return`
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
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${Te}</strong>`})}</span>
                ${oe?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${f(oe.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${j>=Q-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${j+1}/${Q}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${I.questions.map((ae,de)=>{let he=de<j?"done":de===j?"active":"queued";return`
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
                    <label class="admin-polls-live-toggle ${c[ae.k]?"is-on":""}" data-live-toggle="${ae.k}">
                      <span class="lbl">${ae.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function G(){if(!I||!I.active)return;let j=I.current_index>=0?I.current_index:0,Q=I.questions[j];if(!Q)return;let ne=S(Q,I.started_at),re=Q.time_limit_seconds||0,le=N.querySelector("[data-live-mmss]"),ue=N.querySelector("[data-live-ring]");if(le&&(le.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):x(ne),le.classList.toggle("is-low",re>0&&ne!=null&&ne<=Math.max(5,re*.15))),ue&&re>0&&ne!=null){let me=+ue.getAttribute("r"),Te=2*Math.PI*me,Ee=Math.max(0,Math.min(1,ne/re));ue.setAttribute("stroke-dasharray",`${Te*Ee} ${Te}`);let Le=ne<=Math.max(5,re*.15);ue.setAttribute("stroke",Le?"var(--hud-crimson)":"var(--color-primary)"),ue.style.filter=`drop-shadow(0 0 4px ${Le?"var(--hud-crimson)":"var(--color-primary)"})`}c.autoAdvance&&re>0&&ne===0&&(j>=I.questions.length-1?K():J())}function q(){let j=T;if(!j||!j.questions||j.questions.length===0){F.innerHTML="";return}let Q=j.questions.length,ne=Math.max(0,Math.min(g,Q-1)),re=j.questions[ne],le=re.options.reduce((V,te)=>V+(te.count||0),0),ue=[...re.options].sort((V,te)=>(te.count||0)-(V.count||0)),me=ue[0]||{key:"-",text:"\u2014",count:0},Te=ue[1],Ee=le>0?me.count/le*100:0,Le=Te?Math.max(0,me.count-Te.count):me.count,oe=j.started_at||0,se=j.ended_at||Date.now()/1e3,ce=Math.max(0,Math.round(se-oe));F.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Q>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${j.questions.map((V,te)=>`
                    <button type="button" role="tab" class="${te===ne?"is-active":""}" data-results-tab="${te}">
                      Q${te+1}<span class="t">${f((V.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Q} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:x(ce),n:le})}</span>
                </div>
                <div class="text">${f(re.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${f(me.key)}</div>
                <div class="info">
                  <div class="lbl">${f(me.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} \xB7 ${Ee.toFixed(1)}% ${Te?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:Le}):""}</div>
                </div>
                <div class="pct">${Ee.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:le})}</span>
                </div>
                ${ue.map((V,te)=>{let ae=le>0?V.count/le*100:0;return`
                    <div class="admin-polls-results-bar ${te===0&&V.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${te+1}</span>
                        <span class="tag">${f(V.key)}</span>
                        <span class="lbl">${f(V.text||"")}</span>
                        <span class="pct">${ae.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:V.count})}</span>
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
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${re.time_limit_seconds?x(re.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${j.started_at?new Date(j.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${j.ended_at?new Date(j.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${x(ce)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let V=Math.max(1,...ue.map(te=>te.count));return ue.map(te=>`<div class="bar" style="height:${Math.max(6,te.count/V*100)}%"></div>`).join("")})()}
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
        `}function z(j){let Q=[["question_index","question","option_key","option_text","count","percentage"]];return j.questions.forEach((ne,re)=>{let le=ne.options.reduce((ue,me)=>ue+(me.count||0),0);ne.options.forEach(ue=>{let me=le>0?(ue.count/le*100).toFixed(1):"0";Q.push([re+1,ne.text,ue.key,ue.text,ue.count,me])})}),Q.map(ne=>ne.map(window.AdminUtils.csvCell).join(",")).join(`
`)}function P(j,Q,ne){let re=new Blob([ne],{type:Q}),le=document.createElement("a");le.href=URL.createObjectURL(re),le.download=j,document.body.appendChild(le),le.click(),setTimeout(()=>{URL.revokeObjectURL(le.href),le.remove()},0)}L.addEventListener("click",j=>{let Q=j.target.closest("[data-live-action]");if(Q){let ue=Q.dataset.liveAction;ue==="advance"?J():ue==="end"?K():ue==="pause"&&(c.autoAdvance=!1,R());return}let ne=j.target.closest("[data-live-toggle]");if(ne){let ue=ne.dataset.liveToggle;ue in c&&(c[ue]=!c[ue],ne.classList.toggle("is-on",c[ue]));return}let re=j.target.closest("[data-results-tab]");if(re){g=+re.dataset.resultsTab||0,q();return}let le=j.target.closest("[data-results-action]");if(le){let ue=le.dataset.resultsAction,me=T;if(!me)return;if(ue==="copy"){let Te=me.questions.map((Ee,Le)=>{let oe=Ee.options.reduce((ce,V)=>ce+(V.count||0),0),se=Ee.options.map(ce=>{let V=oe>0?(ce.count/oe*100).toFixed(1):"0.0";return`  ${ce.key}. ${ce.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:ce.count})} (${V}%)`});return`Q${Le+1}: ${Ee.text}
${se.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(Te)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else ue==="csv"?P(`poll_${(me.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",z(me)):ue==="json"?P(`poll_${(me.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(me,null,2)):ue==="reset"&&(T=null,g=0,i());return}}),U.addEventListener("dragstart",j=>{let Q=j.target.closest(".admin-poll-qrow");Q&&(m=Q.dataset.qid,Q.classList.add("is-dragging"))}),U.addEventListener("dragend",j=>{let Q=j.target.closest(".admin-poll-qrow");Q&&Q.classList.remove("is-dragging"),m=null,U.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),U.addEventListener("dragover",j=>{j.preventDefault();let Q=j.target.closest(".admin-poll-qrow");!Q||!m||Q.dataset.qid===m||(U.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),U.addEventListener("drop",j=>{j.preventDefault();let Q=j.target.closest(".admin-poll-qrow");if(!Q||!m)return;let ne=o.findIndex(le=>le.id===m),re=o.findIndex(le=>le.id===Q.dataset.qid);ne<0||re<0||ne===re||(o=e(o,ne,re),s(),i())}),U.addEventListener("click",j=>{let Q=j.target.closest(".admin-poll-qrow");Q&&(n=Q.dataset.qid,s(),i())}),M.addEventListener("input",j=>{let Q=l(n);if(Q){if(j.target.matches("[data-ed-text]")){Q.text=j.target.value,s(),t();return}if(j.target.matches("[data-ed-opt-text]")){let ne=j.target.dataset.edOptText,re=Q.options.find(le=>le.id===ne);re&&(re.label=j.target.value,s(),t())}}}),M.addEventListener("change",j=>{let Q=l(n);Q&&j.target.matches("[data-ed-timer]")&&(Q.timer=+j.target.value,s(),t())}),M.addEventListener("click",async j=>{let Q=l(n);if(!Q)return;let ne=j.target.closest("[data-ed-opt-remove]");if(ne){let le=ne.dataset.edOptRemove;Q.options.length>2&&(Q.options=Q.options.filter(ue=>ue.id!==le),s(),a(),t());return}if(j.target.closest("[data-ed-opt-add]")){Q.options.length<6&&(Q.options.push(_()),s(),a(),t());return}let re=j.target.closest("[data-ed-action]");if(re)if(re.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let ue=o.findIndex(me=>me.id===n);o=o.filter(me=>me.id!==n),n=o[Math.min(ue,o.length-1)].id,s(),i()}}else if(re.dataset.edAction==="upload-q-image"){let le=M.querySelector("[data-ed-q-image-input]");le&&le.click()}else re.dataset.edAction==="remove-q-image"&&(Q.image_url="",s(),a(),t())}),M.addEventListener("change",async j=>{if(!j.target.matches("[data-ed-q-image-input]"))return;let Q=j.target.files&&j.target.files[0];if(!Q)return;let ne=l(n);if(!ne)return;if(!d.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),j.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),j.target.value="";return}if(Q.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),j.target.value="";return}let re=new FormData;re.append("file",Q);try{let le=await csrfFetch(`/admin/poll/${encodeURIComponent(d.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:re}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||"upload failed");ne.image_url=ue.image_url,s(),a(),t(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(le){showToast&&showToast(String(le.message||le),!1)}finally{j.target.value=""}}),M.addEventListener("dragstart",j=>{let Q=j.target.closest(".admin-poll-opt");Q&&(w=Q.dataset.oid,Q.classList.add("is-dragging"))}),M.addEventListener("dragend",j=>{M.querySelectorAll(".is-dragging, .is-drag-over").forEach(Q=>Q.classList.remove("is-dragging","is-drag-over")),w=null}),M.addEventListener("dragover",j=>{let Q=j.target.closest(".admin-poll-opt");!Q||!w||Q.dataset.oid===w||(j.preventDefault(),M.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Q.classList.add("is-drag-over"))}),M.addEventListener("drop",j=>{j.preventDefault();let Q=j.target.closest(".admin-poll-opt"),ne=l(n);if(!Q||!w||!ne)return;let re=ne.options.findIndex(ue=>ue.id===w),le=ne.options.findIndex(ue=>ue.id===Q.dataset.oid);re<0||le<0||re===le||(ne.options=e(ne.options,re,le),s(),a())}),L.addEventListener("click",j=>{if(j.target.closest("[data-poll-action='add']")){let ue=$();o.push(ue),n=ue.id,s(),i();return}let ne=j.target.closest("[data-poll-template]");if(ne){let ue=$(),me=ne.dataset.pollTemplate,Te=["A","B","C","D","E"],Ee=Le=>Le.map((oe,se)=>{let ce=_(Te[se]);return ce.text=oe,ce});me==="yesno"?(ue.text="",ue.options=Ee([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):me==="stars"?(ue.timer=60,ue.options=Ee(["1","2","3","4","5"])):me==="four"&&(ue.options=Ee(["","","",""])),o.push(ue),n=ue.id,s(),i();return}let re=j.target.closest("[data-poll-mode]");re&&(p=re.dataset.pollMode,L.querySelectorAll("[data-poll-mode]").forEach(ue=>ue.classList.toggle("is-active",ue===re)),s());let le=j.target.closest("[data-poll-session-action]");if(le){let ue=le.dataset.pollSessionAction;ue==="start"?ee():ue==="advance"?J():ue==="end"&&K()}});function W(){let j=L.querySelector("[data-poll-session]");if(!j)return;let Q=j.querySelector("[data-poll-session-status]"),ne=j.querySelector("[data-poll-session-action='start']"),re=j.querySelector("[data-poll-session-action='advance']"),le=j.querySelector("[data-poll-session-action='end']");if(!d.pollId||!d.active){Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,re.hidden=!0,le.hidden=!0;return}let ue=o.length,me=d.currentIndex+1,Te=d.currentIndex>=ue-1;Q.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${me} / ${ue}</span>`,ne.hidden=!0,re.hidden=Te,le.hidden=!1}async function ee(){try{let j=o.map((me,Te)=>{let Ee=(me.text||"").trim(),Le=me.options.map(oe=>(oe.label||"").trim()).filter(Boolean);if(!Ee)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:Te+1}));if(Le.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:Te+1}));return{text:Ee,options:Le,time_limit_seconds:me.timer&&me.timer>0?me.timer:null}});if(!j.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Q=(()=>{let me=o.map(Te=>Number(Te.timer)||0).filter(Te=>Te>0);return me.length?Math.round(me.reduce((Te,Ee)=>Te+Ee,0)/me.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:j,mode:p||"manual",default_duration_s:Q})}),re=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(re.error||ServerI18n.t("pollBuilderErrCreateFailed"));d.pollId=re.poll_id,(re.questions||[]).forEach((me,Te)=>{o[Te]&&(o[Te].server_q_id=me.id)}),s();let le=await csrfFetch("/admin/poll/start",{method:"POST"}),ue=await le.json().catch(()=>({}));if(!le.ok)throw new Error(ue.error||ServerI18n.t("pollBuilderErrStartFailed"));d.active=!0,d.currentIndex=ue.current_index??0,I=ue,T=null,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),Z()}catch(j){showToast&&showToast(String(j.message||j),!1)}}async function J(){try{let j=await csrfFetch("/admin/poll/advance",{method:"POST"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));d.currentIndex=Q.current_index,d.active=!!Q.active,I=Q,i(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:d.currentIndex+1}),!0)}catch(j){showToast&&showToast(String(j.message||j),!1)}}async function K(){try{let j=I,Q=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Q.ok){let ne=await Q.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}j&&j.questions&&(T={...j,ended_at:Date.now()/1e3},g=j.current_index>=0?j.current_index:0),d.active=!1,d.pollId="",d.currentIndex=-1,I=null,d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),i(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(j){showToast&&showToast(String(j.message||j),!1)}}function Z(){d.statusTimer&&clearInterval(d.statusTimer),d.statusTimer=setInterval(async()=>{if(d.pollId)try{let j=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!j.ok)return;let Q=await j.json();if(Q.poll_id!==d.pollId)return;d.active=!!Q.active,d.currentIndex=Q.current_index??-1;let ne=!!(I&&I.active);I=Q,Q.active||(clearInterval(d.statusTimer),d.statusTimer=null,ne&&Q.questions&&!T&&(T={...Q,ended_at:Date.now()/1e3},g=Q.current_index>=0?Q.current_index:0),I=null),H==="live"?R():i()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),k()}),i()}function C(){let L=document.getElementById("settings-grid");!L||document.getElementById(h)||(L.insertAdjacentHTML("beforeend",u()),document.getElementById(h)&&E())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var Ot=ye(()=>{(function(){"use strict";let E="sec-live-feed",C={slido:"Slido",discord:"Discord",obs:"OBS",bookmarklet:"Bookmarklet"},L=[],U=[],M=!1,B="",N="all",F=0,A=0,y=null,D=null,_=null;function $(oe){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(oe):String(oe??"").replace(/[&<>"']/g,function(se){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[se]})}function I(oe,se){return oe?oe.length>se?oe.slice(0,se)+"\u2026":oe:""}function H(oe){let se=new Date(oe),ce=V=>String(V).padStart(2,"0");return`${ce(se.getHours())}:${ce(se.getMinutes())}:${ce(se.getSeconds())}`}function T(oe){if(!B)return!0;let se=B.toLowerCase(),ce=oe.data;return ce.text&&ce.text.toLowerCase().includes(se)||ce.nickname&&ce.nickname.toLowerCase().includes(se)||ce.fingerprint&&ce.fingerprint.toLowerCase().includes(se)||ce.layout&&ce.layout.toLowerCase().includes(se)}function g(oe){return N==="muted"?!!oe.muted:!0}function c(){N="all",document.querySelectorAll(".admin-live-feed-tab").forEach(oe=>oe.classList.toggle("is-active",oe.dataset.tab==="all"))}function r(){B="",_&&(_.value=""),c()}function o(oe,se){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let V;return oe==="paused"?V=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:se||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):oe==="no-result"?V=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:se||ServerI18n.t("lfNoMatchDesc")}):V=window.AdminEmpty.render("messages"),V.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),V.setAttribute("data-empty-kind","live-feed"),V}let ce=document.createElement("div");return ce.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",ce.setAttribute("data-empty-kind","live-feed"),ce.innerHTML=`<div class="admin-proto-placeholder-title">${$(oe)}</div><div class="admin-proto-placeholder-body">${$(se||"")}</div>`,ce}function n(oe){let se=oe.data,ce=document.createElement("div");ce.className="admin-live-feed-row"+(oe.muted?" is-muted":""),ce.dataset.id=oe.id,ce.tabIndex=-1;let V=document.createElement("span");if(V.className="admin-live-feed-time",V.textContent=H(oe.ts),ce.appendChild(V),(se.layout||"scroll").toLowerCase()!=="scroll"){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=se.layout,ce.appendChild(pe)}let ae=C[se.integration];if(ae){let pe=document.createElement("span");pe.className="admin-ui-chip admin-live-feed-tag",pe.textContent=ae,ce.appendChild(pe)}let de=document.createElement("span");de.className="admin-live-feed-text",de.textContent=I(se.text||"",80),de.title=se.text||"",ce.appendChild(de);let he=document.createElement("span");he.className="admin-live-feed-identity",window.AdminIdentity&&he.appendChild(AdminIdentity.render({nickname:se.nickname||"",fp:"",onNicknameClick:function(pe){!pe||!_||(_.value=pe,_.dispatchEvent(new Event("input",{bubbles:!0})),_.focus())}})),ce.appendChild(he);let ke=document.createElement("span");if(ke.className="admin-live-feed-actions is-hover-reveal",se.message_id){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip admin-live-feed-action",pe.textContent=ServerI18n.t("lfRecallBtn"),pe.title=ServerI18n.t("lfRecallTitle"),pe.addEventListener("click",xe=>{xe.stopPropagation(),m(oe)}),ke.appendChild(pe)}let $e=document.createElement("button");if($e.type="button",$e.className="admin-ui-chip is-danger admin-live-feed-action",$e.textContent=ServerI18n.t("blockKeywordBtn"),$e.title=ServerI18n.t("blockKeywordTitle"),$e.addEventListener("click",pe=>{pe.stopPropagation(),w("keyword",se.text,oe.id)}),ke.appendChild($e),se.fingerprint){let pe=document.createElement("button");pe.type="button",pe.className="admin-ui-chip is-warn admin-live-feed-action",pe.textContent=ServerI18n.t("blockFpBtn"),pe.title=ServerI18n.t("blockFpTitle").replace("{fp}",se.fingerprint),pe.addEventListener("click",xe=>{xe.stopPropagation(),w("fingerprint",se.fingerprint,oe.id)}),ke.appendChild(pe)}return ce.appendChild(ke),ce.classList.add("is-clickable"),ce.addEventListener("click",pe=>{pe.target.closest(".admin-live-feed-actions")||p(oe)}),ce.addEventListener("keydown",pe=>{pe.key!=="Enter"||pe.target.closest("button")||(pe.preventDefault(),p(oe))}),ce}function p(oe){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(oe)}async function m(oe){let se=oe&&oe.data&&oe.data.message_id;if(!se)return;let ce=await window.AdminModeration.recall(se);if(!ce.ok){console.error("[LiveFeed] Recall failed:",ce.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}oe.recalled=!0;let V=d(oe.id);V&&V.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function w(oe,se,ce){if(!(!se||!await(oe==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,se))){if(ce){let ae=L.find(de=>de.id===ce);ae&&(ae.muted=!0)}else L.forEach(ae=>{oe==="keyword"&&ae.data.text===se&&(ae.muted=!0),oe==="fingerprint"&&ae.data.fingerprint===se&&(ae.muted=!0)});b()}}function d(oe){if(!y||!oe)return null;let se=y.children;for(let ce=0;ce<se.length;ce++)if(se[ce].dataset&&se[ce].dataset.id===oe)return se[ce];return null}function s(){let oe=document.activeElement,se=oe&&oe.closest?oe.closest(".admin-live-feed-row"):null;return se?se.dataset.id:null}function l(oe){if(!oe)return;let se=d(oe);se&&document.activeElement!==se&&se.focus({preventScroll:!0})}function b(){if(!y)return;let oe=s(),se=document.createDocumentFragment(),ce=L.filter(V=>T(V)&&g(V));for(let V=ce.length-1;V>=0;V--)se.appendChild(n(ce[V]));if(y.textContent="",se.childNodes.length===0){let V=M?o("paused"):L.length===0?o("empty"):o("no-result");y.appendChild(V)}else y.appendChild(se);a(),l(oe)}function e(oe){if(!y||!T(oe)||!g(oe))return null;let se=y.querySelector("[data-empty-kind='live-feed']");se&&se.remove();let ce=y.scrollTop<=8,V=n(oe);if(ce)y.insertBefore(V,y.firstChild);else{let te=y.scrollHeight;y.insertBefore(V,y.firstChild),y.scrollTop+=y.scrollHeight-te,A+=1}return V}function t(){let oe=L.length-200;if(oe<=0)return;L.splice(0,oe).forEach(ce=>{let V=d(ce.id);V&&V.remove()})}function a(){S(),x(),v()}function i(oe){let se={ts:Date.now(),data:oe,id:oe&&oe.message_id?"m"+oe.message_id:"e"+ ++F};if(oe&&oe.status==="blocked"&&(se.muted=!0),M){U.push(se),x(),v();return}L.push(se),e(se),t(),a()}function v(){let oe=document.querySelector("[data-lf-jump]"),se=document.querySelector("[data-lf-jump-n]");if(!oe||!se)return;let ce=U.length,V=ce>0?ce:A;V>0?(oe.hidden=!1,se.textContent=String(V)):oe.hidden=!0}function k(){M&&R(),A=0,y&&(y.scrollTop=0),v()}function S(){let oe=document.querySelector("[data-lf-state]");oe&&(oe.className=M?"ui-status is-warning":"ui-status is-success",oe.textContent=M?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function x(){let oe=document.getElementById(E)||document,se=(ce,V)=>{let te=oe.querySelector(ce);te&&(te.textContent=String(V))};se("[data-cnt-all]",L.length),se("[data-cnt-mut]",L.filter(ce=>ce.muted).length)}function R(){if(M=!M,y&&y.setAttribute("aria-live",M?"off":"polite"),D&&(D.textContent=M?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),D.classList.toggle("is-primary",M),D.classList.toggle("is-ghost",!M)),M)x(),v();else{for(let oe of U)L.push(oe);U=[],L.length>200&&L.splice(0,L.length-200),A=0,b()}}function G(){let oe=document.getElementById("settings-grid");if(!oe)return!1;let se=`
      <div id="${E}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
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
      </div>`;return oe.insertAdjacentHTML("beforeend",se),!0}let q=!1,z=null,P=0,W=1500,ee=!1;async function J(){if(!ee){ee=!0;try{let oe=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(P),{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json();if(Array.isArray(se.entries)){for(let ce of se.entries)if(!(!ce||!ce.data)){if(typeof ce.seq=="number"){if(ce.seq<=P)continue;P=ce.seq}i(ce.data)}}typeof se.next_since=="number"&&se.next_since>P&&(P=se.next_since)}catch{}finally{ee=!1}}}let K=5e3,Z=null,j=!1;async function Q(){if(!(j||document.hidden)){j=!0;try{let oe=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!oe.ok)return;let se=await oe.json(),ce=Array.isArray(se.pending)?se.pending.length:0,V=document.getElementById(E);if(!V)return;let te=V.querySelector("[data-cnt-q]");te&&(te.textContent=String(ce));let ae=V.querySelector("[data-lf-pending-link]");ae&&ae.classList.toggle("has-pending",ce>0)}catch{}finally{j=!1}}}function ne(){q||(q=!0,J(),z=setInterval(J,W),Q(),Z=setInterval(Q,K),window.addEventListener("beforeunload",()=>{Z&&(clearInterval(Z),Z=null),z&&(clearInterval(z),z=null)}))}function re(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(E)&&G()&&(le(),b())}function le(){y=document.getElementById("liveFeedList"),D=document.getElementById("liveFeedPauseBtn"),_=document.getElementById("liveFeedSearch");let oe=document.getElementById("liveFeedClearBtn"),se=document.querySelectorAll(".admin-live-feed-tab");D&&D.addEventListener("click",R),oe&&oe.addEventListener("click",()=>{L=[],U=[],A=0,b()});let ce=document.querySelector("[data-lf-jump-btn]");if(ce&&ce.addEventListener("click",k),y&&y.addEventListener("scroll",()=>{y.scrollTop<=8&&A>0&&(A=0,v())},{passive:!0}),se.forEach(V=>{V.addEventListener("click",()=>{se.forEach(te=>te.classList.remove("is-active")),V.classList.add("is-active"),N=V.dataset.tab||"all",b()})}),_){let V=null;_.addEventListener("input",()=>{clearTimeout(V),V=setTimeout(()=>{B=_.value.trim(),b()},200)})}ne()}function ue(oe){if(!("ontouchstart"in window))return;let se=0,ce=0,V=0,te=null,ae=null,de=!1;function he(ke){if(ke.querySelector(".admin-live-feed-row__swipe-actions"))return;let $e=ke.dataset.id,pe=L.find(Ae=>Ae.id===$e),xe=!!(pe&&pe.data&&pe.data.message_id),Ie=document.createElement("div");Ie.className="admin-live-feed-row__swipe-actions",Ie.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${xe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,Ie.addEventListener("click",function(Ae){let Fe=Ae.target.closest("[data-swipe-act]");if(!Fe||Fe.disabled)return;let Pe=ke.dataset.id,qe=L.find(je=>je.id===Pe);if(!qe||!qe.data)return;let Oe=Fe.dataset.swipeAct;Oe==="ban"?qe.data.fingerprint&&w("fingerprint",qe.data.fingerprint,Pe):Oe==="recall"&&m(qe),ke.classList.remove("is-swiped")}),ke.appendChild(Ie)}oe.addEventListener("touchstart",function(ke){let $e=ke.target.closest(".admin-live-feed-row");$e&&(ke.target.closest(".admin-live-feed-row__swipe-actions")||(te=$e,de=!1,se=ke.touches[0].clientX,ce=ke.touches[0].clientY,V=0))},{passive:!0}),oe.addEventListener("touchmove",function(ke){if(!te||de)return;let $e=ke.touches[0],pe=$e.clientX-se,xe=$e.clientY-ce;if(Math.abs(xe)>Math.abs(pe)&&Math.abs(xe)>12){de=!0;return}if(V=pe,pe<-10){he(te),ae=te,te.classList.add("is-swiping");let Ie=Math.max(-180,pe);te.style.transform=`translateX(${Ie}px)`}else pe>10&&te.classList.contains("is-swiped")&&(te.style.transform="")},{passive:!0}),oe.addEventListener("touchend",function(){te&&(te.classList.remove("is-swiping"),te.style.transform="",V<=-60?te.classList.add("is-swiped"):te.classList.remove("is-swiped"),te=null,ae=null,V=0)},{passive:!0})}function me(){return y?Array.from(y.querySelectorAll(".admin-live-feed-row")):[]}function Te(){let oe=me(),se=document.activeElement;for(let ce of oe)if(ce===se||ce.contains(se))return ce;return null}function Ee(oe){let se=me();if(!se.length)return!1;let ce=Te(),V=ce?se.indexOf(ce)+oe:oe>0?0:se.length-1;return V=Math.max(0,Math.min(se.length-1,V)),se[V].focus(),se[V].scrollIntoView({block:"nearest"}),!0}function Le(oe){let se=Te();if(!se)return!1;let ce=L.find(te=>te.id===se.dataset.id);if(!ce)return!1;let V=oe==="keyword"?ce.data.text:ce.data.fingerprint;return V?(w(oe,V,ce.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return L.slice()},isVisible:function(){return!!(y&&y.offsetParent!==null)},isPaused:function(){return M},moveFocus:Ee,blockFocused:Le,togglePause:function(){R()}},document.addEventListener("admin-panel-rendered",re),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",re):re()})()});var qt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.loadDetailsState,f=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml;function E(b,e=!1){var t=h();return t[b]!==void 0?t[b]:e}function C(b){var e=h();e[b.id]=b.open,f(e)}let L=!1;new MutationObserver(()=>{let b=document.getElementById("settings-grid");if(b&&!(document.getElementById("sec-plugins")||L)){L=!0;try{M(b)}finally{L=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function M(b){let e=`
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
      `;b.insertAdjacentHTML("beforeend",e);let t=document.querySelector("[data-console-filters]");t&&t.addEventListener("click",a=>{let i=a.target.closest("[data-console-filter]");i&&(t.querySelectorAll("[data-console-filter]").forEach(v=>v.classList.toggle("is-active",v===i)),F=i.dataset.consoleFilter,$())}),document.getElementById("pluginsReloadBtn").addEventListener("click",l),T(),H()}let B=0,N=0,F="all",A=[],y=80;function D(b){let e=(b||"INFO").toUpperCase();return e==="ERROR"?"is-error":e==="WARN"?"is-warn":e==="DEBUG"?"is-debug":"is-info"}function _(b){let e=new Date(b*1e3),t=a=>String(a).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}function $(){let b=document.getElementById("pluginsConsoleBody");if(!b)return;let e=F==="all"?A:A.filter(t=>(t.level||"INFO").toUpperCase()===F);if(e.length===0){let t=F==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${F} lines yet \xB7 waiting\u2026`;b.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${t}</span>
          </div>`;return}b.innerHTML=e.map(t=>{let a=_(t.ts),i=(t.msg||"").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),v=(t.plugin||"\u2014").replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),k=(t.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${a}</span>
          <span class="lv ${D(t.level)}">${k}</span>
          <span class="plg">${v}</span>
          <span class="msg">${i}</span>
        </div>`}).join("")}async function I(){try{let b=await fetch(`/admin/plugins/console?since=${B}`,{credentials:"same-origin"});if(!b.ok)return;let e=await b.json();if(!Array.isArray(e.events)||e.events.length===0)return;for(A.unshift(...e.events);A.length>y;)A.pop();B=e.latest_seq||B,$()}catch{}}function H(){N||(N=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:I}))}async function T(){let b=document.getElementById("pluginsList");if(b)try{let e=await csrfFetch("/admin/plugins/list");if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json(),a=t.plugins||[];if(g(t.upload_allowed!==!1),a.length===0){b.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",c([]);return}b.innerHTML=a.map(r).join(""),d(b),c(a)}catch(e){console.error("Failed to load plugins:",e),b.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function g(b){let e=document.getElementById("pluginsUploadBtn");e&&(e.disabled=!b,e.toggleAttribute("data-upload-disabled",!b),e.textContent=ServerI18n.t(b?"pluginsUploadBtnLabel":"pluginsUploadDisabled"),b?e.removeAttribute("title"):e.title="ALLOW_PLUGIN_UPLOAD")}function c(b){let e=b.length,t=b.filter(S=>S.enabled).length,a=e-t,i=b.map(S=>S.priority).filter(S=>typeof S=="number"),v=i.length?Math.round(i.reduce((S,x)=>S+x,0)/i.length):null,k=(S,x)=>{document.querySelectorAll(`[data-plugins-stat="${S}"]`).forEach(R=>{R.textContent=x})};k("loaded",e),k("running",t),k("paused",a),k("priority",v??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(S=>{S.textContent=e})}function r(b){let{name:e,version:t,description:a,priority:i,enabled:v,is_user:k,file:S}=b,x=`plugin-toggle-${e}`,R=p(i),G=w(i),q=n(b),z=k&&S?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${u(S)}"
            data-plugin-name="${u(e)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${u(e)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${u(e)}">
          <span class="admin-plugins-dot ${v?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${u(e)}</div>
            ${a?`<div class="desc">${u(a)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${t?"v"+u(t):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${R}">${i??"\u2014"}${G?" \xB7 "+G:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${m(q)}">${q}</span>
          <div class="admin-plugins-toggle-cell">
            ${z}
            <label class="admin-plugins-switch" for="${x}">
              <input type="checkbox" id="${x}" role="switch"
                aria-checked="${!!v}" aria-label="Toggle plugin ${u(e)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${u(e)}"
                ${v?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function o(b,e){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:b}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:e}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let a=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e})}),i=await a.json().catch(()=>({}));if(!a.ok){showToast(i.error||ServerI18n.t("pluginsToastRemoveFailed",{status:a.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:b}),!0),await T()}catch(a){showToast(ServerI18n.t("pluginsToastNetError",{msg:a.message||""}),!1)}}function n(b){let e=b.file||b.path||b.source||"";if(typeof e=="string"){if(e.endsWith(".py"))return"PY";if(e.endsWith(".js"))return"JS"}return(b.language||"PY").toUpperCase()}function p(b){return b==null?"is-muted":b<=10?"is-danger":b<=50?"is-warn":"is-cyan"}function m(b){return b==="JS"?"is-cyan":b==="PY"?"is-warn":"is-muted"}function w(b){return b==null?"":b<=10?"CRITICAL":b<=50?"HIGH":"NORMAL"}function d(b){b.querySelectorAll(".plugin-toggle").forEach(e=>{e.addEventListener("change",async function(){let t=this.dataset.pluginName,a=this.checked;await s(t,a,this)})}),b.querySelectorAll(".plugin-uninstall").forEach(e=>{e.addEventListener("click",function(){o(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function s(b,e,t){let a=e?"/admin/plugins/enable":"/admin/plugins/disable";try{let i=await csrfFetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b})});if(!i.ok){let v=await i.json().catch(()=>({}));throw new Error(v.error||`HTTP ${i.status}`)}showToast(e?ServerI18n.t("pluginEnabled").replace("{name}",b):ServerI18n.t("pluginDisabled").replace("{name}",b),!0)}catch(i){console.error(`Failed to ${e?"enable":"disable"} plugin:`,i),showToast(i.message||ServerI18n.t("operationFailed"),!1),t&&(t.checked=!e)}}async function l(){let b=document.getElementById("pluginsReloadBtn");b&&(b.disabled=!0);try{let e=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!e.ok){let t=await e.json().catch(()=>({}));throw new Error(t.error||`HTTP ${e.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await T()}catch(e){console.error("Failed to reload plugins:",e),showToast(e.message||ServerI18n.t("reloadFailed"),!1)}finally{b&&(b.disabled=!1)}}})})()});var Ht=ye(()=>{(function(){"use strict";let h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},f={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},u=null,E=null;function C(){return u||(u=document.createElement("div"),u.className="admin-pu-backdrop",u.hidden=!0,u.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(u),u.addEventListener("click",n=>{(n.target.matches("[data-pu-close]")||n.target===u)&&o()}),u)}function L(n){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((m,w)=>{let d=w+1,s=d<n,b=s?"is-done":d===n?"is-active":"";return(w>0?`<span class="admin-pu-step-line ${s?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${b}">
          <span class="circle">${s?"\u2713":d}</span>
          <span class="label">${m}</span>
        </div>`}).join("")}function U(n,p){E.step=n;let m=u.querySelector("[data-pu-steps]");m&&(m.innerHTML=L(n));let w=u.querySelector("[data-pu-body]");w&&(w.innerHTML=p)}function M(n){let p=n==="error-type"?ServerI18n.t("pluginsUploadErrorType"):n==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):n==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):n==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),m=(n||"").startsWith("error")?"\u2715":n==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(n||"").startsWith("error")?"is-error":n==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${m}</div>
          <div class="admin-pu-dropzone-msg">${h(p)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function B(){let n=u.querySelector("[data-pu-dropzone]"),p=u.querySelector("[data-pu-file]"),m=u.querySelector("[data-pu-browse]");m&&m.addEventListener("click",()=>p&&p.click()),p&&p.addEventListener("change",()=>{p.files&&p.files[0]&&N(p.files[0])}),n&&(n.addEventListener("click",()=>p&&p.click()),n.addEventListener("dragover",w=>{w.preventDefault(),n.classList.add("is-over")}),n.addEventListener("dragleave",()=>n.classList.remove("is-over")),n.addEventListener("drop",w=>{w.preventDefault(),n.classList.remove("is-over");let d=w.dataTransfer&&w.dataTransfer.files;if(!(!d||d.length===0)){if(d.length>1){U(1,M("error-multi")),B();return}N(d[0])}}))}function N(n){if(!n.name.match(/\.py$/i)){U(1,M("error-type")),B();return}if(n.size>256*1024){U(1,M("error-size")),B();return}E.file=n,U(2,F(n.name)),A(n)}function F(n){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${h(n)}</div>
      </div>`}async function A(n){try{let p=new FormData;p.append("file",n);let m=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:p}),w=await m.json().catch(()=>({}));if(!m.ok&&!w.validation){window.showToast?.(w.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:m.status}),!1),U(1,M()),B();return}E.manifest=w.manifest||{},E.validation=w.validation||{},E.filename=w.filename||n.name,y(E)}catch(p){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:p.message||""}),!1),U(1,M()),B()}}function y(n){let p=n.manifest||{},m=n.validation||{},w="";if(!m.syntax_ok)w=D(m.syntax_err,n);else if(Object.keys(p).length===0)w=_(n);else{let d=(m.deps||[]).some(s=>s.status==="missing");w=H(p,m,n,d)}U(2,`<div class="admin-pu-step2">${w}</div>`),T()}function D(n,p){let m=n&&n.line?n.line:"?",w=n&&n.msg?n.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${m}</span>
        </div>
        <pre class="admin-pu-syntax-body">${h(`>>> ${p.filename}
${w}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function _(n){return`
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
      </footer>`}function $(n){return n==null?"is-muted":n<=10?"is-danger":n<=50?"is-warn":"is-cyan"}function I(n){if(n==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let p=$(n),m=n<=10?"CRITICAL":n<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${p}">${n} \xB7 ${m}</span>`}function H(n,p,m,w){let d=n.name||m.filename.replace(/\.(py|js)$/i,""),s=n.version?`v${h(n.version)}`:"\u2014",l=n.author?`@${h(n.author.replace(/^@/,""))}`:"\u2014",b=n.description||ServerI18n.t("pluginsUploadNoDescription"),e="PY",t="is-warn",a=Array.isArray(n.permissions)?n.permissions:[],i=Object.keys(f).map(R=>{let G=a.includes(R);return`
        <div class="admin-pu-perm-row ${G?"is-req":"is-not"}">
          <span class="dot">${G?"\u25CF":"\u25CB"}</span>
          <span class="key">${h(R)}</span>
          <span class="label">${h(ServerI18n.t(f[R]))}</span>
        </div>`}).join(""),v=p.deps||[],k=v.map(R=>{let G=R.status==="ok"?"is-ok":R.status==="warn"?"is-warn":"is-err",q=R.status==="ok"?"\u2713":R.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${G}">
          <span class="dot">${q}</span>
          <span class="name">${h(R.name)}</span>
          <span class="note">${h(R.note||"")}</span>
        </div>`}).join(""),S=p.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${h(d)}</span>`})}
      </div>`:"",x=v.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${k}</div>
      </section>`;return`
      ${S}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${h(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${s}</span>
          <span class="author">${l}</span>
          <span class="admin-ui-pill admin-pu-pill ${t}" style="margin-left:auto">${e}</span>
        </div>
        <div class="admin-pu-manifest-desc">${h(b)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${I(n.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${i}</div>
        </section>
        ${x}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${w?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${w?"disabled":""} data-pu-confirm>${w?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function T(){let n=u.querySelector("[data-pu-back]");n&&n.addEventListener("click",()=>{E.file=null,E.manifest=null,E.validation=null,U(1,M()),B()});let p=u.querySelector("[data-pu-confirm]");p&&p.addEventListener("click",()=>g());let m=u.querySelector("[data-pu-no-manifest-ack]");m&&p&&m.addEventListener("change",()=>{p.disabled=!m.checked})}function g(){let n=E.manifest||{},p=n.name||(E.filename||"").replace(/\.(py|js)$/i,""),m=n.version?`v${h(n.version)}`:"\u2014",w=Array.isArray(n.permissions)?n.permissions:[],d=w.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:w.map(b=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${h(b)}</span></div>`).join("");U(3,`
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
          <div class="admin-pu-confirm-perms">${d}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${h(E.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:n.priority!=null?n.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let s=u.querySelector("[data-pu-install]");s&&s.addEventListener("click",c);let l=u.querySelector("[data-pu-back]");l&&l.addEventListener("click",()=>y(E))}async function c(){U(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let n=new FormData;n.append("file",E.file);let p=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:n}),m=await p.json().catch(()=>({}));if(!p.ok){window.showToast?.(m.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:p.status}),!1),y(E);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:m.name||E.filename}),!0),o();let w=document.getElementById("pluginsReloadBtn");w&&w.click()}catch(n){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:n.message||""}),!1),y(E)}}function r(){C(),E={step:1,file:null,manifest:null,validation:null,filename:null},U(1,M()),B(),u.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){u&&(u.hidden=!0,document.body.classList.remove("admin-pu-open"),E=null)}window.AdminPluginUpload={open:r,close:o},document.addEventListener("click",n=>{let p=n.target.closest("#pluginsUploadBtn");p&&!p.disabled&&(n.preventDefault(),r())})})()});var jt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-webhooks",u=12e3,E=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function C(d,s){return d?d.length>s?d.slice(0,s)+"\u2026":d:""}function L(d){if(!d)return"\u2014";try{let s=new Date(d),l=Math.max(0,(Date.now()-s.getTime())/1e3);return l<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(l)}):l<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(l/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(l/86400)})}catch{return"\u2014"}}function U(d){if(!d)return"\u2014";try{return new URL(d).hostname}catch{return C(d,30)}}function M(d){return d==="active"?"is-success":d==="degraded"?"is-warn":"is-muted"}let B={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:E,eventCatalogLoaded:!1};function N(){let d=document.getElementById("settings-grid");!d||document.getElementById(f)||(d.insertAdjacentHTML("beforeend",`
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
    `),F())}function F(){let d=document.getElementById(f);if(!d)return;let s=document.getElementById("wh-register-form");s&&s.addEventListener("submit",async l=>{l.preventDefault();let b=document.getElementById("wh-url").value.trim();if(!b)return;let e=Array.from(s.querySelectorAll('input[name="wh-event"]:checked')).map(v=>v.value);if(e.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let t=document.getElementById("wh-format").value,a=document.getElementById("wh-secret").value.trim(),i={url:b,events:e,format:t};a&&(i.secret=a);try{let v=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),k=await v.json();v.ok&&k.hook_id?(showToast(ServerI18n.t("webhookRegistered")),s.reset(),I(),s.hidden=!0,await A()):showToast(k.error||ServerI18n.t("registrationFailed"),!1)}catch(v){console.error("Webhook register error:",v),showToast(ServerI18n.t("registrationFailed"),!1)}}),d.addEventListener("click",l=>{if(l.target.closest("[data-wh-action='show-add']")){s&&(s.hidden=!1);return}if(l.target.closest("[data-wh-action='hide-add']")){s&&(s.hidden=!0);return}let t=l.target.closest("[data-wh-log-filter]");if(t){B.deliveryFilter=t.dataset.whLogFilter,d.querySelectorAll("[data-wh-log-filter]").forEach(G=>{G.classList.toggle("is-active",G.dataset.whLogFilter===B.deliveryFilter)}),r();return}let a=l.target.closest("[data-wh-action='test']");if(a){l.stopPropagation(),p(a.dataset.whHookId);return}let i=l.target.closest("[data-wh-action='settings']");if(i){l.stopPropagation(),o(i.dataset.whHookId);return}if(l.target.closest("[data-wh-action='close-detail']")){B.selectedHookId=null,n(),g();return}let k=l.target.closest("[data-wh-action='detail-ping']");if(k){p(k.dataset.whHookId);return}let S=l.target.closest("[data-wh-action='detail-toggle']");if(S){m(S.dataset.whHookId,S.dataset.whNextEnabled==="1");return}let x=l.target.closest("[data-wh-action='detail-delete']");if(x){w(x.dataset.whHookId);return}let R=l.target.closest("[data-wh-hook-row]");if(R&&!l.target.closest("button")){o(R.dataset.whHookId);return}}),B.stopPoll||(B.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(f)},intervalMs:u,tick:A}))}async function A(){await _(),await Promise.all([y(),D()]),H(),g(),r(),n()}async function y(){try{let s=await(await csrfFetch("/admin/webhooks/list")).json();B.hooks=Array.isArray(s.webhooks)?s.webhooks:[]}catch{B.hooks=[]}}async function D(){try{let d=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!d.ok)return;let s=await d.json();B.deliveries=Array.isArray(s.deliveries)?s.deliveries:[],B.stats=s.stats||null}catch{}}async function _(){if(!B.eventCatalogLoaded)try{let d=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(d.ok){let s=await d.json(),l=Array.isArray(s.events)?s.events:[];l.length&&(B.eventCatalog=l)}}catch{}finally{B.eventCatalogLoaded=!0,I()}}function $(d){let s=d&&d.slug?String(d.slug):"";if(d&&d.labelKey){let a=ServerI18n.t(d.labelKey);return{slug:s,label:a?a+" \xB7 "+s:s,title:a}}let l=d&&d.zh?String(d.zh):"",b=d&&d.en?String(d.en):"",e=window.ServerI18n&&ServerI18n.currentLang||"zh",t=(d&&d[e]?String(d[e]):"")||b||l;return{slug:s,label:t?t+" \xB7 "+s:s,title:l&&b?l+" \xB7 "+b:l||b}}function I(){let d=document.querySelector("[data-wh-register-events]");d&&(d.innerHTML=B.eventCatalog.map(function(s){let l=$(s);if(!l.slug)return"";let b=l.slug==="on_danmu"?" checked":"";return'<label title="'+h(l.title)+'"><input type="checkbox" name="wh-event" value="'+h(l.slug)+'"'+b+" /> "+h(l.label)+"</label>"}).join(""))}function H(){let d=document.querySelector("[data-wh-stats]");if(!d)return;let s=B.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};d.innerHTML=`
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
      </div>`}function T(){return B.hooks.length&&B.hooks[0].retry_count||3}function g(){let d=document.getElementById("wh-list"),s=document.querySelector("[data-wh-count]");if(d){if(s&&(s.textContent=String(B.hooks.length)),B.hooks.length===0){d.innerHTML="";let l=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let b=document.getElementById("wh-register-form");b&&(b.hidden=!1),document.getElementById("wh-url")?.focus()}});l.dataset.emptyKind="webhooks",d.appendChild(l);return}d.innerHTML=B.hooks.map(c).join("")}}function c(d){let s=h(d.id||""),l=Number(d.success_count)||0,b=Number(d.fail_count)||0,e=l+b,t=e>0?Math.round(l/e*1e3)/10:100,a=d.enabled!==!1,i=Number(d.last_status)||null,v=a?i&&i>=400||d.last_error?"degraded":"active":"paused",k=v==="active"?"var(--hud-lime)":v==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",S=v==="active"?"ACTIVE":v==="degraded"?"DEGRADED":"PAUSED",x=B.selectedHookId===d.id?" is-selected":"",R=M(v),G=(d.events||[]).map(function(z){return'<span class="admin-ui-pill admin-wh-evt-chip">'+h(z)+"</span>"}).join(""),q=d.last_error?'<div class="admin-wh-card-warn">\u26A0 '+h(C(d.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${x}" data-wh-hook-row data-wh-hook-id="${s}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${k};box-shadow:${a?"0 0 6px "+k:"none"}"></span>
          <span class="name">${h(U(d.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${R}">${S}</span>
          <span class="last">last \xB7 ${h(L(d.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${h(d.url)}</div>
        <div class="admin-wh-card-events">${G}</div>
        ${q}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${t}%;background:${k}"></div></div>
            <span class="pct" style="color:${k}">${t}%</span>
          </div>
          <span class="counter ok">\u2713 ${l.toLocaleString()}</span>
          <span class="counter ${b>0?"fail":"fail-zero"}">\u2717 ${b}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${s}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function r(){let d=document.getElementById("wh-log-list");if(!d)return;let s=B.deliveries.filter(function(l){return B.deliveryFilter==="all"?!0:B.deliveryFilter==="failed"?!l.ok:B.deliveryFilter==="2xx"?l.code&&l.code>=200&&l.code<300:B.deliveryFilter==="5xx"?l.code&&l.code>=500:!0});if(s.length===0){d.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}d.innerHTML=s.map(function(l){let b=l.ts?new Date(l.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",e=l.code?String(l.code):"\u2014",t=l.ok?"var(--hud-lime)":"var(--hud-crimson)",a=l.duration_ms?l.duration_ms>=1e3?(l.duration_ms/1e3).toFixed(1)+"s":l.duration_ms+"ms":"\u2014",i=l.ok?"var(--color-text-strong)":"var(--hud-amber)",v=h(U(l.hook_url||"")),k=(l.retries||0)===0?"\u2014":"\xD7"+l.retries,S=(l.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${l.dropped?" is-dropped":""}">
          <span class="time">${h(b)}</span>
          <span class="code" style="color:${t};border-color:${t}55;background:${t}15;">${e}</span>
          <span class="dur" style="color:${i}">${h(a)}</span>
          <span class="ep">${v}</span>
          <span class="evt">${h(l.event||"")}</span>
          <span class="retry" style="color:${S}">${k}</span>
        </div>`}).join("")}function o(d){B.selectedHookId=d,g(),n()}function n(){let d=document.querySelector("[data-wh-detail]");if(!d)return;let s=B.hooks.find(function(v){return v.id===B.selectedHookId});if(!s){d.hidden=!0,d.innerHTML="";return}d.hidden=!1;let l=s.enabled!==!1,b=Number(s.last_status)||null,e=l?b&&b>=400||s.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",t=new Set(s.events||[]),a=B.eventCatalog.map(function(v){let k=$(v),S=t.has(k.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(S?"is-active is-on":"")+'" title="'+h(k.title)+'"><span aria-hidden="true">'+(S?"\u2713":"\u25CB")+"</span><span>"+h(k.label)+"</span></label>"}).join(""),i={event:s.events&&s.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:s.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};d.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+e+";box-shadow:0 0 6px "+e+'"></span><span class="name">'+h(U(s.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+a+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(s.retry_count!=null?s.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(s.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+h(JSON.stringify(i,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+h(s.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+h(s.id)+'" data-wh-next-enabled="'+(l?"0":"1")+'">'+(l?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+h(s.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function p(d){if(d)try{let s=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),l=await s.json();s.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(l.error||ServerI18n.t("testFailed"),!1),setTimeout(A,1500)}catch(s){console.error("Webhook test error:",s),showToast(ServerI18n.t("testFailed"),!1)}}async function m(d,s){if(d)try{let l=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d,enabled:s})}),b=await l.json();if(!l.ok){showToast(b.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let e=B.hooks.find(function(t){return t.id===d});e&&(e.enabled=b.enabled),showToast(b.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),g(),n()}catch(l){console.error("Webhook toggle error:",l),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function w(d){if(!(!d||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let l=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),b=await l.json();l.ok?(showToast(ServerI18n.t("webhookDeleted")),B.selectedHookId===d&&(B.selectedHookId=null),A()):showToast(b.error||ServerI18n.t("deleteFailed"),!1)}catch(l){console.error("Webhook delete error:",l),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),N()})})()});var Ut=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-sounds",u=null,E=[],C=[];async function L(){try{let r=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!r.ok)throw new Error(await r.text());let o=await r.json();E=o.sounds||[],C=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",E.length||"")}catch(r){console.error("Failed to fetch sounds:",r),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),E=[],C=[]}}async function U(){return L()}async function M(r,o){let n=new FormData;n.append("file",r),n.append("name",o);let p=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:n}),m=await p.json();if(!p.ok)throw new Error(m.error||"Upload failed");return m}async function B(r){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Delete failed");return n}async function N(r){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to add rule");return n}async function F(r){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Failed to delete rule");return n}function A(){let r=document.getElementById("soundsList");if(r){if(E.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",r.appendChild(o);return}r.innerHTML=E.map(function(p){var m=h(p.name),w=Math.round((p.volume!=null?p.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+h(p.name)+'"><div class="name" title="'+m+'">'+m+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+h(p.name)+'" min="0" max="100" step="1" value="'+w+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+h(p.name)+'" style="min-width:32px;text-align:right">'+w+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+h(p.name)+'">'+h(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+h(p.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),r.querySelectorAll(".sound-play-btn").forEach(function(p){p.addEventListener("click",function(){var m=p.dataset.name,w=E.find(function(d){return d.name===m});w&&(u&&(u.pause(),u=null),u=new Audio(w.url),u.volume=.5,u.play().catch(function(d){console.warn("Audio preview failed:",d)}))})}),r.querySelectorAll(".sound-delete-btn").forEach(function(p){p.addEventListener("click",async function(){var m=p.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",m),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await B(m),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",m),!0),await L(),A(),D()}catch(d){window.showToast(d.message,!1)}})});var n={};r.querySelectorAll(".sound-volume-slider").forEach(function(p){var m=p.dataset.name,w=r.querySelector('.sound-volume-label[data-name="'+CSS.escape(m)+'"]');p.addEventListener("input",function(){w&&(w.textContent=p.value+"%"),clearTimeout(n[m]),n[m]=setTimeout(function(){y(m,Number(p.value)/100)},300)}),p.addEventListener("change",function(){clearTimeout(n[m]),y(m,Number(p.value)/100)})})}}async function y(r,o){try{var n=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(r)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),p=await n.json();if(!n.ok){window.showToast(p.error||"Volume update failed",!1);return}var m=E.find(function(w){return w.name===r});m&&(m.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(w){console.warn("[admin-sounds] volume save failed:",w),window.showToast("Network error",!1)}}function D(){let r=document.getElementById("ruleSoundName");if(!r)return;let o=r.value;if(r.innerHTML="",E.length===0){let n=document.createElement("option");n.value="",n.textContent=ServerI18n.t("noSoundsAvailable"),n.disabled=!0,r.appendChild(n);return}E.forEach(n=>{let p=document.createElement("option");p.value=n.name,p.textContent=n.name,r.appendChild(p)}),o&&[...r.options].some(n=>n.value===o)&&(r.value=o)}function _(){let r=document.getElementById("rulesList");if(r){if(C.length===0){r.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",r.appendChild(o);return}r.innerHTML=C.map(function(n){var p=n.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):n.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",n.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",n.trigger_value),m=Math.round((n.volume!=null?n.volume:1)*100),w=ServerI18n.t("soundDetailLine").replace("{sound}",n.sound_name).replace("{vol}",m).replace("{cd}",n.cooldown!=null?n.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+h(String(n.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+h(p)+'</div><div class="admin-sounds-rule-detail">'+h(w)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+h(String(n.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),r.querySelectorAll(".sound-rule-del-btn").forEach(function(n){n.addEventListener("click",async function(){try{await F(n.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await U(),_()}catch(p){window.showToast(p.message,!1)}})})}}function $(){let r=document.getElementById("soundUploadBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),n=document.getElementById("soundNameInput"),p=o.files[0];if(!p){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let m=n.value.trim();if(!m){window.showToast(ServerI18n.t("enterSoundName"),!1);return}r.disabled=!0,r.textContent=ServerI18n.t("uploadingStatus");try{await M(p,m),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",m),!0),o.value="",n.value="",await L(),A(),D()}catch(w){window.showToast(w.message,!1)}finally{r.disabled=!1,r.textContent=ServerI18n.t("soundsUploadIdle")}})}function I(){let r=document.getElementById("addRuleBtn");r&&r.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,n=document.getElementById("ruleTriggerValue").value.trim(),p=document.getElementById("ruleSoundName").value,m=document.getElementById("ruleVolume"),w=document.getElementById("ruleCooldown");if(o!=="all"&&!n){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!p){window.showToast(ServerI18n.t("selectSound"),!1);return}let d=parseInt(m.value,10)/100,s=parseInt(w.value,10)||0,l={trigger_type:o,trigger_value:o==="all"?"":n,sound_name:p,volume:Math.max(0,Math.min(1,d)),cooldown:Math.max(0,s)};r.disabled=!0;try{await N(l),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await U(),_()}catch(b){window.showToast(b.message,!1)}finally{r.disabled=!1}})}function H(){let r=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!r||!o)return;function n(){r.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):r.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):r.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}r.addEventListener("change",n),n()}function T(){let r=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!r||!o||r.addEventListener("input",()=>{o.textContent=r.value+"%"})}function g(){return`
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
    `}async function c(){let r=document.getElementById("settings-grid");if(r){if(r.insertAdjacentHTML("beforeend",g()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let n=document.getElementById("rulesList");n&&(n.innerHTML="",n.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([L(),U()]),A(),D(),_(),$(),I(),H(),T()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let r=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&!r&&(r=!0,c().finally(()=>{r=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&(r=!0,c().finally(()=>{r=!1}))})})()});var Kt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f=/^[a-zA-Z0-9_]{1,32}$/,u=".png,.gif,.webp",E="sec-emojis",C=[];function L(){return`
      <div id="${E}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}function U(T){let g=":"+T.name+":",c=Number(T.used)||0,r=c>0?ServerI18n.t("emojisUsedCount",{n:c}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+N(T.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+N(T.url)+'" alt="'+N(g)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+h(g)+'</div><div class="admin-em-v4__tile-meta">'+h(r)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+N(g)+'" title="'+N(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+N(T.name)+'" title="'+N(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function M(T){let g=document.querySelector("[data-em-quota-label]"),c=document.querySelector("[data-em-quota-fill]");if(!g||!c)return;let r=T.length,o=100;g.textContent=ServerI18n.t("emojisQuotaUsed",{n:r,max:o}),c.style.width=Math.min(100,r/o*100)+"%"}function B(T){let g=document.querySelector("[data-em-preview-body]");if(!g)return;if(!T||T.length===0){g.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let r=T.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${h(o.name)}:</code> \u2192 <img src="${N(o.url)}" alt=":${N(o.name)}:" /></span>`);g.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:r.join(" \xB7 ")})}function N(T){return h(T)}function F(T){var g=document.getElementById("emojiGrid"),c=document.getElementById("emojiCount");g&&(!T||T.length===0?(window.AdminEmpty?(g.innerHTML="",g.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var r=document.getElementById("emojiFileInput");r&&r.click()}}))):g.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("noEmojisUploaded"))+"</div>",c&&(c.textContent="0")):(g.innerHTML=T.map(U).join(""),c&&(c.textContent=String(T.length))),M(C),B(C))}function A(){var T=document.getElementById("emojiGrid");if(T)if(window.AdminSkeletons){T.innerHTML="";for(var g=0;g<8;g++){var c=document.createElement("div");c.className="admin-em-v4__tile admin-em-v4__tile--skel";var r=document.createElement("div");r.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",r.appendChild(o),c.appendChild(r);var n=document.createElement("div");n.className="admin-skel admin-skel-bar",n.style.width="60%",n.style.height="8px",n.style.margin="6px auto",c.appendChild(n),T.appendChild(c)}}else T.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadingEmojis"))+"</div>"}async function y(){try{var T=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!T.ok)throw new Error("HTTP "+T.status);var g=await T.json();C=g.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",C.length||""),D()}catch(r){console.error("[admin-emojis] fetch failed:",r);var c=document.getElementById("emojiGrid");c&&(c.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function D(){var T=document.getElementById("emojiSearchInput"),g=(T&&T.value||"").trim().toLowerCase(),c=g?C.filter(function(r){return(r.name||"").toLowerCase().includes(g)}):C;F(c)}async function _(){var T=document.getElementById("emojiNameInput"),g=document.getElementById("emojiFileInput"),c=document.getElementById("emojiUploadBtn");if(!(!T||!g||!c)){var r=T.value.trim(),o=g.files&&g.files[0];if(!r){showToast(ServerI18n.t("emojiNameRequired"),!1),T.focus();return}if(!f.test(r)){showToast(ServerI18n.t("emojiNameInvalid"),!1),T.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var n=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(n)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{var p=new FormData;p.append("name",r),p.append("emojifile",o);var m=await csrfFetch("/admin/emojis/upload",{method:"POST",body:p}),w=await m.json();m.ok?(showToast(w.message||ServerI18n.t("emojiUploadFallback")),T.value="",g.value="",await y()):showToast(w.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-emojis] upload error:",d),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function $(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",T),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var c=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),r=await c.json();c.ok?(showToast(r.message||ServerI18n.t("emojiDeleteFallback")),await y()):showToast(r.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function I(T){try{await navigator.clipboard.writeText(T),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}catch{var g=document.createElement("textarea");g.value=T,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),showToast(ServerI18n.t("copiedLabel").replace("{label}",T))}}function H(){var T=document.getElementById("settings-grid");if(T){T.insertAdjacentHTML("beforeend",L());var g=document.getElementById("emojiUploadBtn");g&&g.addEventListener("click",_);var c=document.getElementById("emojiNameInput");c&&c.addEventListener("keydown",function(m){m.key==="Enter"&&(m.preventDefault(),_())});var r=document.getElementById("emojiSearchInput");r&&r.addEventListener("input",D);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(m){var w=m.target.closest(".emoji-copy-btn");if(w){I(w.dataset.label);return}var d=m.target.closest(".emoji-delete-btn");d&&$(d.dataset.name)});var n=document.querySelector("[data-em-dropzone]"),p=document.getElementById("emojiFileInput");n&&p&&(["dragenter","dragover"].forEach(function(m){n.addEventListener(m,function(w){w.preventDefault(),n.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(m){n.addEventListener(m,function(w){w.preventDefault(),n.classList.remove("is-dragover")})}),n.addEventListener("drop",function(m){var w=m.dataTransfer&&m.dataTransfer.files&&m.dataTransfer.files[0];if(w){var d=new DataTransfer;d.items.add(w),p.files=d.files;var s=document.getElementById("emojiNameInput");if(s&&!s.value){var l=w.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");s.value=l.slice(0,32),s.focus()}n.classList.add("is-dropping"),setTimeout(function(){n.classList.remove("is-dropping")},1200)}})),A(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var T=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(E)&&H()});T.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(E)&&H()}})})()});var Wt=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml,f="sec-stickers",u=["png","gif","webp"],E=".gif,.png,.webp",C="__all__",L=[],U=[],M=C;function B(r){return h(r)}function N(){var r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=r?`
          <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("stickersAddLabel")}</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-ui-monolabel">${ServerI18n.t("stickersFileHint")}</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${E}"
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
                ${window.AdminSkeletons?window.AdminSkeletons.html("statsTiles",{cols:4}):h(ServerI18n.t("loadingStickers"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function F(r){return r===C?L.length:L.filter(function(o){return o.pack_id===r}).length}function A(){var r=document.getElementById("stickerPackList");if(r){var o='<button type="button" class="admin-stickers-pack'+(M===C?" is-active":"")+'" data-pack="'+C+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+F(C)+"</span></button>";U.forEach(function(n){var p=n.enabled?"is-success":"is-muted",m="admin-stickers-pack"+(n.id===M?" is-active":""),w=n.id==="default",d=w?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+B(n.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+B(n.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+B(n.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+B(n.id)+'" title="'+(n.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(n.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+B(n.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+m+'" data-pack="'+B(n.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+B(n.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+p+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+h(n.name)+'</span><span class="admin-stickers-pack-count">'+F(n.id)+"</span></button>"+d+"</div>"}),r.innerHTML=o}}function y(r){var o=":"+r.name+":";return'<div class="admin-stickers-tile"><img src="'+B(r.url)+'" alt="'+B(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+B(o)+'">'+h(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+B(o)+'" title="'+B(ServerI18n.t("copyToClipboard"))+'">'+h(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+B(r.name)+'" title="'+B(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function D(){var r=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(r){var n=document.getElementById("stickerSearchInput"),p=(n&&n.value||"").trim().toLowerCase(),m=L.filter(function(d){return!(M!==C&&d.pack_id!==M||p&&!(d.name||"").toLowerCase().includes(p))});if(m.length===0){r.innerHTML="";var w=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});w.dataset.emptyKind="stickers",w.style.gridColumn="1 / -1",r.appendChild(w),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}r.innerHTML=m.map(y).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:m.length}))}}async function _(){var r=document.getElementById("stickerGrid");if(r)try{var[o,n]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);L=(await o.json()).stickers||[],U=n.ok?(await n.json()).packs||[]:[],M!==C&&!U.some(function(p){return p.id===M})&&(M=C),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",U.length?ServerI18n.t("tabCountPacks",{n:U.length}):""),A(),D()}catch(p){console.error("[admin-stickers] fetch failed:",p),r.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function $(r,o){if(r==="select"){M=o,A(),D();return}if(r==="rename"){var n=U.find(function(v){return v.id===o}),p=prompt(ServerI18n.t("stickersPackNamePrompt"),n?n.name:"");if(!p)return;try{var m=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p})}),w=await m.json();m.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await _()):window.showToast(w.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="toggle"){try{var d=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});d.ok&&await _()}catch{}return}if(r==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var s=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),l=await s.json();s.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),M===o&&(M=C),await _()):window.showToast(l.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(r==="up"||r==="down"){var b=U.slice().sort(function(v,k){return(v.order||0)-(k.order||0)}),e=b.findIndex(function(v){return v.id===o});if(e<0)return;var t=r==="up"?e-1:e+1;if(t<0||t>=b.length)return;var a=b[e],i=b[t];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(i.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:a.order||0})})]),await _()}catch{}}}async function I(){var r=prompt(ServerI18n.t("stickersNewPackPrompt"));if(r)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),n=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),M=n.pack&&n.pack.id?n.pack.id:M,await _()):window.showToast(n.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var r=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!r||!o)){var n=r.files&&r.files[0];if(!n){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var p=n.name.split(".").pop().toLowerCase();if(u.indexOf(p)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var m=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var w=new FormData;w.append("file",n),M&&M!==C&&w.append("pack_id",M);var d=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:w}),s=await d.json();d.ok?(window.showToast(s.message||ServerI18n.t("stickerUploadFallback")),r.value="",await _()):window.showToast(s.error||ServerI18n.t("uploadFailed"),!1)}catch(l){console.error("[admin-stickers] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=m}}}async function T(r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var n=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(r),{method:"DELETE"}),p=await n.json();n.ok?(window.showToast(p.message||ServerI18n.t("stickerDeleteFallback")),await _()):window.showToast(p.error||ServerI18n.t("deleteFailed"),!1)}catch(m){console.error("[admin-stickers] delete error:",m),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function g(r){try{await navigator.clipboard.writeText(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}catch{var o=document.createElement("textarea");o.value=r,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",r))}}function c(){var r=document.getElementById("settings-grid");if(r){r.insertAdjacentHTML("beforeend",N());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",H);var n=document.getElementById("stickerPackAddBtn");n&&n.addEventListener("click",I);var p=document.getElementById("stickerSearchInput");p&&p.addEventListener("input",D);var m=document.getElementById("stickerPackList");m&&m.addEventListener("click",function(d){var s=d.target.closest("[data-pack-action]");if(!s){var l=d.target.closest("[data-pack]");l&&$("select",l.dataset.pack);return}var b=s.dataset.packAction,e=s.dataset.packId;b==="select"&&!e&&(e=s.closest("[data-pack]")&&s.closest("[data-pack]").dataset.pack),$(b,e)});var w=document.getElementById("stickerGrid");w&&w.addEventListener("click",function(d){var s=d.target.closest(".sticker-copy-btn");if(s){g(s.dataset.label);return}var l=d.target.closest(".sticker-delete-btn");l&&T(l.dataset.name)}),_()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&c()});r.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&c()}})})()});var Gt=ye(()=>{(function(){"use strict";let h="sec-extensions-overview",f=window.AdminUtils.escapeHtml,u=15e3,E=[{id:"slido",name:"Slido Extension",version:"\u2014",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload"},{kind:"config",labelKey:"extSlidoStepConfig",showOrigin:!0}]},hasFireTokenUI:!0,hasLiveStatus:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],C={fireToken:null,plainToken:null,sources:[],sourcesTimer:0,slidoStatus:null},L=["rate_limited","screen_full","no_overlay","rejected","captcha_required","token_invalid","feed_unrecognized","tracking_full","server_unreachable"];function U(g){let c=g&&!g.stale?g.report:null;if(!c&&g&&g.token_rejected)return{tone:"is-error",text:ServerI18n.t("extSlidoErr_token_invalid")};if(!c)return{tone:"",text:ServerI18n.t("extSlidoStatusNone")};if(c.state==="error"){let r=L.includes(c.error)?c.error:"rejected";return{tone:"is-error",text:ServerI18n.t("extSlidoErr_"+r)}}return{tone:"is-live",text:ServerI18n.t("extSlidoStatusWatching",{sent:c.sent||0,held:c.held||0,blocked:c.blocked||0,skipped:c.late_skipped||0})}}function M(){return`
      <div id="${h}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${E.map(B).join("")}
        </div>
      </div>`}function B(g){let c=g.status==="ready",r="is-cold",o=c?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,n=c&&g.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${g.install.steps.map(m=>{if(m.kind==="download")return`<li data-ext-download-step hidden><a class="admin-ext-step-link" data-ext-download download>${f(ServerI18n.t(m.labelKey))} \u2193</a></li>`;let w=m.showOrigin?` <code class="admin-ext-step-code">${f(window.location.origin)}</code>`:"";return`<li>${f(ServerI18n.t(m.labelKey))}${w}</li>`}).join("")}
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
          <span class="admin-ext-status-dot ${r}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${g.color}">${g.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${f(g.name)}</div>
            <div class="meta"><span class="ver" data-ext-version>${f(g.version)}</span></div>
          </div>
          ${o}
        </div>
        <p class="admin-ext-desc">${f(ServerI18n.t(g.descKey))}</p>
        ${g.hasLiveStatus?`<p class="admin-ext-live-status" data-slido-status role="status" aria-live="polite">${f(ServerI18n.t("extSlidoStatusNone"))}</p>`:""}
        ${n}
        ${p}
      </article>`}async function N(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;C.fireToken=await g.json(),$()}catch{}}async function F(){try{let g=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();C.sources=Array.isArray(c.sources)?c.sources:[],I()}catch{}}async function A(){try{let g=await fetch("/admin/integrations/slido/status",{credentials:"same-origin"});if(!g.ok)return;C.slidoStatus=await g.json(),H()}catch{}}function y(){F(),A()}async function D(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let r=await c.json();C.fireToken={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at},C.plainToken=r.token,$(),window.AdminUtils.copyText(r.token,ServerI18n.t("extToastTokenGenerated"))}catch(c){console.warn("[ext] regen failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function _(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);C.fireToken=await c.json(),C.plainToken=null,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(c){console.warn("[ext] revoke failed:",c),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function $(){let g=document.querySelector("[data-fire-token-display]"),c=document.querySelector('[data-fire-token-action="copy"]'),r=document.querySelector('[data-fire-token-action="regen"]'),o=document.querySelector('[data-fire-token-action="revoke"]');if(!g)return;let n=C.fireToken;C.plainToken?(g.textContent=C.plainToken,g.classList.add("is-plain")):n&&n.has_token?(g.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:n.prefix||""}),g.classList.remove("is-plain")):(g.textContent=ServerI18n.t("extTokenNotSetHint"),g.classList.remove("is-plain")),c&&(c.disabled=!C.plainToken),r&&(r.textContent=n&&n.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),o&&(o.disabled=!(n&&n.has_token))}function I(){let g=new Set(C.sources.map(c=>c.source));document.querySelectorAll(".admin-ext-card").forEach(c=>{let r=E.find(p=>p.id===c.dataset.ext);if(!r)return;let o=c.querySelector("[data-ext-dot]");if(!o)return;let n=r.sourceMatch&&g.has(r.sourceMatch);o.classList.toggle("is-live",!!n),o.classList.toggle("is-cold",!n)})}function H(){let g=document.querySelector("[data-slido-status]");if(!g)return;let c=U(C.slidoStatus);g.textContent=c.text,g.classList.toggle("is-live",c.tone==="is-live"),g.classList.toggle("is-error",c.tone==="is-error");let r=C.slidoStatus&&C.slidoStatus.extension,o=g.closest(".admin-ext-card"),n=o&&o.querySelector("[data-ext-download-step]"),p=o&&o.querySelector("[data-ext-download]"),m=o&&o.querySelector("[data-ext-version]");r&&r.download_url&&r.version?(p&&p.setAttribute("href",r.download_url),n&&(n.hidden=!1),m&&(m.textContent="v"+r.version)):n&&(n.hidden=!0)}function T(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",M());let c=document.getElementById(h);c&&c.addEventListener("click",r=>{let o=r.target.closest("[data-fire-token-action]");if(!o)return;let n=o.dataset.fireTokenAction;n==="regen"?D():n==="revoke"?_():n==="copy"&&C.plainToken&&window.AdminUtils.copyText(C.plainToken,ServerI18n.t("firetokenToastCopied"))}),N(),C.stopPoll||(C.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(h)},intervalMs:u,tick:y}))}window.AdminExtensions={slidoStatusView:U},document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&T()})})()});var Vt=ye(()=>{(function(){"use strict";let h="sec-firetoken-overview",f=window.AdminUtils.escapeHtml,u=15e3,E={token:null,plainToken:null,usage24h:[],ceilingPerMin:0,ips:[],audit:[],pollTimer:0};function C(){return`
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
    `}async function L(){await Promise.all([U(),M(),B()])}async function U(){try{let g=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!g.ok)return;E.token=await g.json(),D()}catch{}}async function M(){try{let g=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();E.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],E.ceilingPerMin=Number(c.ceiling_per_min)||0;let r=document.querySelector("[data-ft-ceiling]");r&&(r.textContent=E.ceilingPerMin>0?" \xB7 "+ServerI18n.t("firetokenCeilingPerMin",{n:E.ceilingPerMin}):""),E.ips=Array.isArray(c.ips)?c.ips:[],$(),I(),_()}catch{}}async function B(){try{let g=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!g.ok)return;let c=await g.json();E.audit=Array.isArray(c.events)?c.events:[],H()}catch{}}async function N(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let r=await c.json();E.token={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at,created_at:r.created_at||r.rotated_at},E.plainToken=r.token,D(),window.AdminUtils.copyText(r.token,ServerI18n.t("firetokenToastGenerated")),B()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);E.token=await c.json(),E.plainToken=null,D(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),B()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function A(g){if(!g)return"\u2014";let c=Date.now()/1e3-g;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function y(g){if(!g)return"\u2014";try{return new Date(g*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function D(){let g=E.token,c=document.querySelector("[data-ft-token-display]"),r=document.querySelector("[data-ft-status]"),o=document.querySelector('[data-ft-action="copy"]'),n=document.querySelector('[data-ft-action="regen"]'),p=document.querySelector('[data-ft-action="revoke"]'),m=document.querySelector('[data-ft-stat="created"]'),w=document.querySelector('[data-ft-stat="rotated"]'),d=document.getElementById("adminFtCurl");if(c&&(E.plainToken?(c.textContent=E.plainToken,c.classList.add("is-plain")):g&&g.has_token?(c.textContent=(g.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),r&&(g&&g.enabled&&g.has_token?(r.textContent=ServerI18n.t("firetokenStatusHealthy"),r.className="admin-ft-status is-good"):g&&g.has_token?(r.textContent=ServerI18n.t("firetokenStatusDisabled"),r.className="admin-ft-status is-warn"):(r.textContent=ServerI18n.t("firetokenStatusUnset"),r.className="admin-ft-status is-muted")),o&&(o.disabled=!E.plainToken),p&&(p.disabled=!(g&&g.has_token)),n&&(n.textContent=g&&g.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),m&&(m.textContent=g?y(g.created_at):"\u2014"),w&&(w.textContent=g?A(g.rotated_at):"\u2014"),d)){let s=E.plainToken?E.plainToken:g&&g.prefix?g.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";d.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${s}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function _(){let g=E.usage24h.map(m=>Number(m)||0),c=g.reduce((m,w)=>m+w,0),r=g.length?Math.max(...g):0,o=document.querySelector('[data-ft-stat="hits"]'),n=document.querySelector('[data-ft-stat="peak"]'),p=document.querySelector("[data-ft-peak-meta]");o&&(o.textContent=c.toLocaleString()),n&&(n.textContent=r.toLocaleString()),p&&(p.textContent=ServerI18n.t("firetokenPeakMeta",{peak:r.toLocaleString()}))}function $(){let g=document.getElementById("adminFtChart24h");if(!g)return;let c=E.usage24h.map(p=>Number(p)||0);if(!c.length){g.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let r=Math.max(...c),o=(E.ceilingPerMin||0)*60,n=r>0?Math.min(100,o/Math.max(r,o)*100):100;g.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((p,m)=>{let w=r>0?Math.max(2,p/r*100):2;return`<div class="bar ${r>0&&p===r?"is-peak":""}" style="height:${w}%" title="${m.toString().padStart(2,"0")}:00 \u2014 ${p}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(p=>`<span>${String(p).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function I(){let g=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!g)return;let r=E.ips||[];if(c&&(c.textContent=r.length?`${r.length} IP`:"\u2014"),!r.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let o=r[0]?.ip;g.innerHTML=r.map((n,p)=>{let m=p===0,w=n.source==="web"&&(n.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${m?"is-top":""}">
          <span class="ip">${f(n.ip||"?")}</span>
          ${m?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${w?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${f(n.source||"\u2014")}</span>
          <span class="cnt">${n.count||0} hits</span>
          <span class="when">${A(n.last_seen)}</span>
        </div>`}).join("")}function H(){let g=document.getElementById("adminFtAudit");if(!g)return;let c=E.audit||[];if(!c.length){g.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let r={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},o={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};g.innerHTML=c.map(n=>{let p=o[n.kind]||"is-info",m=r[n.kind]||n.kind,w=n.meta||{},d=w.prefix?` \xB7 prefix=${f(w.prefix)}`:w.enabled!=null?` \xB7 enabled=${w.enabled}`:"";return`
        <div class="admin-ft-audit-row ${p}">
          <span class="ts">${y(n.ts)}</span>
          <span class="kind">${f(m)}</span>
          <span class="detail">${d}</span>
        </div>`}).join("")}function T(){let g=document.getElementById("settings-grid");if(!g||document.getElementById(h))return;g.insertAdjacentHTML("beforeend",C());let c=document.getElementById(h);c&&c.addEventListener("click",r=>{let o=r.target.closest("[data-ft-action]");if(!o)return;let n=o.dataset.ftAction;n==="regen"?N():n==="revoke"?F():n==="copy"&&E.plainToken&&window.AdminUtils.copyText(E.plainToken,ServerI18n.t("firetokenToastCopied"))}),E.stopPoll||(E.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(h),intervalMs:u,tick:L}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&T()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&T()})})()});var zt=ye(()=>{(function(){"use strict";let h="sec-about-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(T){return String(T).replace(/[&<>"']/g,function(g){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[g]})},u="Danmu Fire",E="https://github.com/guan4tou2/danmu-desktop",C=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],L=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],U="danmu.about.lastUpdateCheck",M={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function B(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${f(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${E}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${C.slice(0,4).map(T=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${f(T.v)}</span>
                  ${T.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${f(T.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${T.notes.slice(0,3).map(g=>`
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
              ${L.slice(0,6).map(T=>`
                <div class="admin-about-oss-row">
                  <span class="n">${f(T.n)}</span>
                  <span class="v">${f(T.v)}</span>
                  <span class="l">${f(T.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function N(T){if(!T||T<0)return"\u2014";let g=Math.floor(T/86400),c=Math.floor(T%86400/3600),r=Math.floor(T%3600/60);return g>0?`${g}d ${c}h`:c>0?`${c}h ${r}m`:`${r}m`}function F(){let T=document.querySelector("[data-about-tag]"),g=document.querySelector("[data-about-build]"),c=document.querySelector("[data-about-uptime]"),r=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),n=document.querySelector("[data-about-env]"),p=document.querySelector("[data-about-ws-path]");if(T&&(T.textContent=`v${M.appVersion}`),g){let m=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";g.textContent=`BUILD \xB7 ${m} \xB7 stable channel`,n&&(n.textContent=m)}if(c){let m=M.serverStartedAt?M.serverTime-M.serverStartedAt:0;c.textContent=N(m)}if(r&&(M.isLatest===!0?r.textContent=ServerI18n.t("aboutIsLatestYes"):M.isLatest===!1?r.textContent=ServerI18n.t("aboutHasNewVersion",{v:M.latestVersion||""}):r.textContent="\u2014",r.style.color=M.isLatest===!0?"var(--hud-lime)":M.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=M.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:A(M.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),p){let m=window.DANMU_CONFIG||{};p.textContent=m.wsPath||"/ws"}}function A(T){let g=Number(T)||0;if(!g)return"\u2014";let c=String(g).length>12?g:g*1e3,r=(Date.now()-c)/1e3;return r<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(r)}):r<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(r/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(r/86400)})}function y(T,g){let c=p=>String(p||"").replace(/^v/i,"").split("-")[0].split(".").map(function(m){return parseInt(m,10)||0}),r=c(T),o=c(g),n=Math.max(r.length,o.length);for(let p=0;p<n;p++){let m=r[p]||0,w=o[p]||0;if(m>w)return!0;if(m<w)return!1}return!1}async function D({silent:T}={}){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let g=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!g.ok)throw new Error("HTTP "+g.status);let r=((await g.json()).tag_name||"").replace(/^v/i,"");M.latestVersion=r,M.lastCheckedAt=Date.now(),M.isLatest=!y(r,M.appVersion);try{localStorage.setItem(U,JSON.stringify({ts:M.lastCheckedAt,latest:r,isLatest:M.isLatest}))}catch{}F(),T||window.showToast&&window.showToast(M.isLatest?ServerI18n.t("aboutToastLatest",{v:M.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:r}),!0)}catch(g){T||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:g.message||""}),!1)}}function _(){try{let T=localStorage.getItem(U);if(!T)return;let g=JSON.parse(T);M.latestVersion=g.latest,M.lastCheckedAt=Number(g.ts)||0,M.isLatest=!!g.isLatest}catch{}}async function $(){try{let T=await fetch("/admin/metrics",{credentials:"same-origin"});if(!T.ok)return;let g=await T.json();M.serverStartedAt=Number(g.server_started_at)||0,M.serverTime=Number(g.server_time)||Date.now()/1e3,F()}catch{}}function I(){let T=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",g=M.serverStartedAt?M.serverTime-M.serverStartedAt:0,c=(navigator.userAgent||"").slice(0,200),r=[`${u} v${M.appVersion}`,`Channel: ${T}`,`Uptime: ${N(g)}`,`User-Agent: ${c}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let T=document.getElementById("settings-grid");if(!T||document.getElementById(h))return;T.insertAdjacentHTML("beforeend",B()),M.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",_(),F();let g=document.getElementById(h);g&&g.addEventListener("click",function(c){let r=c.target.closest("[data-about-action]");if(!r)return;let o=r.dataset.aboutAction;o==="copy"?I():o==="check-update"?D({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),$(),setInterval($,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&H()})})()});var Jt=ye(()=>{(function(){"use strict";let h="admin-setup-wizard-root",f="danmu.setupWizard.completed",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},E=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],C=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function L(s){return s?s.label?s.label:s.labelKey?ServerI18n.t(s.labelKey):s.name||s.id||"\u2014":"\u2014"}function U(s){return s?s.descriptionKey?ServerI18n.t(s.descriptionKey):s.description||"":""}let M={open:!1,step:0,themes:C.slice(),activeTheme:C[0].name,selectedTheme:C[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function B(){M.publicUrl=window.location.origin+"/"}function N(){let s=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";s==="setup"&&!M.open?F():s!=="setup"&&M.open&&A({silent:!0})}function F(){M.open=!0,M.step=0,B(),document.body.dataset.setupWizardOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",y()),r()),n(),$(),D()}function A(s){let l=s&&s.silent;M.open=!1,document.body.dataset.setupWizardOpen="";let b=document.getElementById(h);if(b&&b.remove(),!l&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function y(){return`
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
            ${E.map(function(s,l){return`
                <div class="admin-setup-step" data-step-index="${l}">
                  <span class="bullet">${l+1}</span>
                  <span class="lbl">${u(ServerI18n.t(s.labelKey))}</span>
                </div>
                ${l<E.length-1?'<span class="admin-setup-step-sep"></span>':""}
              `}).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta",{current:1,total:E.length})}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`}function D(){let s=document.getElementById(h);if(!s)return;s.querySelectorAll(".admin-setup-step").forEach(function(v,k){v.classList.toggle("is-done",k<M.step),v.classList.toggle("is-active",k===M.step)}),s.querySelectorAll(".admin-setup-step-sep").forEach(function(v,k){v.classList.toggle("is-done",k<M.step)});let l=s.querySelector("[data-setup-meta]");l&&(l.textContent=ServerI18n.t("setupWizardStepMeta",{current:M.step+1,total:E.length}));let b=s.querySelector('[data-setup-action="prev"]');b&&(b.disabled=M.step===0);let e=s.querySelector('[data-setup-action="next"]');if(e){let v=E[M.step].id;e.textContent=ServerI18n.t("setupWizardNext")}let t=s.querySelector("[data-setup-foot]");t&&(t.hidden=E[M.step].id==="done");let a=s.querySelector("[data-setup-content]");if(!a)return;let i=E[M.step].id;i==="server"?a.innerHTML=_():i==="moderation"?a.innerHTML=I():i==="theme"?a.innerHTML=g():a.innerHTML=c(),o(i)}function _(){let s=M.readiness,l=s?Number(s.overlay_count)||0:null,b=l!==null&&l>0,t=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:M.publicUrl},{ok:b,unknown:l===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:b?ServerI18n.t("setupWizardReadyDisplayOk",{n:l}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(M.activeTheme||M.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:L(M.themes.filter(function(a){return(a.name||a.id)===(M.selectedTheme||M.activeTheme)})[0]||M.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(a){let i=a.unknown?"is-unknown":a.ok?"is-done":"is-pending",v=a.unknown?"?":a.ok?"\u2713":"!",k='<span class="admin-setup-ready-title">'+u(a.title)+'</span><span class="admin-setup-ready-value">'+u(a.value||"")+"</span>",S=a.goto?'<a class="admin-setup-ready-go" href="'+a.goto+'" data-setup-goto="'+a.goto+'">'+u(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+i+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+v+"</span>"+k+S+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${t}</div>
      </div>`}async function $(){try{let s=await fetch("/overlay_status",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);let l=await s.json();M.readiness={overlay_count:Number(l.overlay_count)||0,mode:l.mode||""}}catch{M.readiness=null}M.open&&E[M.step].id==="server"&&D()}function I(){let s=M.moderationRules.map(function(l){return`
        <a class="admin-setup-mod-row" href="#/${l.route}" data-setup-goto="#/${l.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${u(ServerI18n.t(l.labelKey))}</span>
            <span class="admin-setup-mod-desc">${u(ServerI18n.t(l.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${u(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${u(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${u(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${s}</div>
      </div>`}let H=["default","neon","retro","cinema"];function T(){let s={};return(M.themes||[]).forEach(function(l){s[l.name||l.id]=l}),H.map(function(l){let b=C.filter(function(t){return t.name===l})[0],e=s[l];return b?{name:l,label:e&&e.label,labelKey:b.labelKey,descriptionKey:b.descriptionKey,colors:b.colors}:e}).filter(Boolean)}function g(){let s=T();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${s.map(function(l){let b=l.name||l.id||"",e=(M.selectedTheme||M.activeTheme)===b,t=(l.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${e?" is-selected":""}" data-setup-theme="${u(b)}">
                ${e?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${t.map(function(a,i){let v=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${u(a)};font-size:${10+i*2}px;text-shadow:0 0 6px ${u(a)}66;">${v[i]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${u(L(l))}</div>
                <div class="admin-setup-theme-sub">${u(U(l))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function c(){let s=(function(){for(let l=0;l<M.themes.length;l+=1){let b=M.themes[l];if((b.name||b.id)===(M.selectedTheme||M.activeTheme))return L(b)}return M.selectedTheme||M.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${u(M.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${u(s)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${u(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${u(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function r(){let s=document.getElementById(h);s&&s.addEventListener("click",function(l){if(l.target===s){A();return}let b=l.target.closest("[data-setup-action]");if(b){if(b.dataset.setupAction==="close"){A();return}if(b.dataset.setupAction==="prev"&&M.step>0){M.step-=1,D();return}b.dataset.setupAction==="next"&&m()}})}function o(s){let l=document.getElementById(h);if(l){if(s==="moderation"||s==="done"||s==="server"){if(l.querySelectorAll("[data-setup-goto]").forEach(function(b){b.addEventListener("click",function(){A();let e=b.dataset.setupGoto;e&&(window.location.hash=e)})}),s==="done"){let b=l.querySelector("[data-setup-complete-cta]");b&&b.addEventListener("click",w)}return}if(s==="theme"){l.querySelectorAll("[data-setup-theme]").forEach(function(b){b.addEventListener("click",function(){M.selectedTheme=b.dataset.setupTheme||M.selectedTheme,D()})});return}}}async function n(){try{let s=await fetch("/admin/themes",{credentials:"same-origin"});if(!s.ok)return;let l=await s.json(),b=Array.isArray(l.themes)?l.themes:[];if(!b.length)return;M.themes=b.map(function(e){return{name:e.name||e.id||"",label:e.label||e.display_name||e.name||"",description:e.description||"",colors:e.preview_colors||e.colors||e.palette||C[0].colors}}),M.activeTheme=l.active||M.themes[0]&&M.themes[0].name||M.activeTheme,M.selectedTheme||(M.selectedTheme=M.activeTheme),M.open&&E[M.step].id==="theme"&&D()}catch{}}async function p(){if(!M.selectedTheme||M.selectedTheme===M.activeTheme)return!0;try{let s=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M.selectedTheme})});if(!s.ok)throw new Error("HTTP "+s.status);return M.activeTheme=M.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function m(){if(!(E[M.step].id==="theme"&&!await p())){if(M.step<E.length-1){M.step+=1,D();return}w()}}function w(){try{localStorage.setItem(f,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),A()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}F()},close:function(){A()},isCompleted:function(){try{return!!localStorage.getItem(f)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",N),N()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var Yt=ye(()=>{(function(){"use strict";let h="sec-poll-deepdive-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function($){return String($).replace(/[&<>"']/g,function(I){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[I]})},u={poll:null,refreshTimer:0};function E(){return`
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
      </div>`}function C($){if($.innerHTML="",!window.AdminEmpty){$.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let I=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});I.classList.add("lg:col-span-2"),I.dataset.emptyKind="poll-deepdive",$.appendChild(I)}let L=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function U($){return $?new Date($*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function M($){if(!$||$.length<2)return"";let I=Math.max.apply(null,$.map(function(r){return r.n}).concat([1])),H=100,T=32,g=H/($.length-1),c=$.map(function(r,o){let n=(o*g).toFixed(2),p=(T-r.n/I*(T-2)-1).toFixed(2);return n+","+p});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+T+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+c.join(" ")+'" /></svg>'}function B($){let I=$.state||($.active?"active":"ended"),H=$.question||"\u2014",T=Array.isArray($.options)?$.options:[],g=function(b){return Number(b.votes!=null?b.votes:b.count)||0},c=T.reduce(function(b,e){return b+g(e)},0),r=I==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:U($.ended_at)}),o=(function(){let b=Number($.started_at)||0;if(!b)return"\u2014";let e=I==="active"?Date.now()/1e3:Number($.ended_at)||b,t=Math.max(0,Math.floor(e-b));return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")})(),n=Number(window._lastOverlayCount)||0,p=n>0?Math.round(c/n*100)+"%":"\u2014",m=n>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:c,audience:n}):ServerI18n.t("pollDeepdiveParticipationUnknown"),w=(function(){let b=Array.isArray($.questions)?$.questions:[],e=0;for(let t of b)e+=Number(t.duplicate_attempts)||0;return b.length||(e=Number($.duplicate_attempts)||0),e})(),d=T.map(function(b,e){let t=g(b),a=c>0?t/c*100:0,i=L[e%L.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${f(b.label||b.text||b.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:e+1}))}</span>
            <span class="votes">${t} \xB7 ${a.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${a.toFixed(2)}%;background:${i}"></div>
          </div>
        </div>`}).join(""),s=Array.isArray($.vote_timeline)?$.vote_timeline:[],l=s.length>=2?M(s):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${f(H)}</div>
          <div class="admin-pdd-state">${f(r)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${c}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${p}</div><div class="sub">${f(m)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${f(o)}</div></div>
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
          <div class="admin-pdd-timeline">${l}</div>
        </article>
      </div>`}function N(){let $=document.querySelector("[data-pdd-grid]");if($){if(!u.poll||!u.poll.poll_id){C($);return}$.innerHTML=B(u.poll)}}async function F(){try{let $=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!$.ok)return;let I=await $.json();u.poll=I,N()}catch{}}function A(){if(!u.poll||!Array.isArray(u.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let $=[["option_label","votes","percentage"]],I=u.poll.options.reduce(function(r,o){return r+(Number(o.votes!=null?o.votes:o.count)||0)},0);u.poll.options.forEach(function(r,o){let n=Number(r.votes!=null?r.votes:r.count)||0,p=I>0?(n/I*100).toFixed(2):"0.00";$.push([r.label||"option_"+(o+1),n,p])});let H=$.map(function(r){return r.map(window.AdminUtils.csvCell).join(",")}).join(`
`),T=new Blob([H],{type:"text/csv;charset=utf-8"}),g=URL.createObjectURL(T),c=document.createElement("a");c.href=g,c.download="poll-"+(u.poll.poll_id||"current")+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(g)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function y(){try{let $=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function D(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(F(),u.refreshTimer||(u.refreshTimer=setInterval(F,5e3))):u.refreshTimer&&(clearInterval(u.refreshTimer),u.refreshTimer=0)}function _(){let $=document.getElementById("settings-grid");if(!$||document.getElementById(h))return;$.insertAdjacentHTML("beforeend",E());let I=document.getElementById(h);I&&I.addEventListener("click",function(H){let T=H.target.closest("[data-pdd-action]");T&&(T.dataset.pddAction==="export-csv"?A():T.dataset.pddAction==="push"&&y())}),F(),D(),window.addEventListener("hashchange",D)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&_()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&_()})})()});var Qt=ye(()=>{(function(){"use strict";let h="admin-message-drawer-root",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(p){return String(p).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})},E={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},C=null;function L(p){let m=p.detail&&p.detail.entry;m&&(E.open||(C=document.activeElement),E.entry=m,U(),m.data&&m.data.fingerprint&&F(m.data.fingerprint),A(m))}function U(){E.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(h)||(document.body.insertAdjacentHTML("beforeend",y()),D()),_();let p=document.querySelector("#"+h+" .admin-msgd-v4__close")||document.querySelector("#"+h+" button");if(p)try{p.focus({preventScroll:!0})}catch{}}function M(){E.open=!1,document.body.dataset.messageDrawerOpen="";let p=document.getElementById(h);if(p&&p.remove(),C&&typeof C.focus=="function"&&document.contains(C))try{C.focus({preventScroll:!0})}catch{}C=null}function B(p){if(!E.open)return;if(p.key==="Escape"){M();return}let m=document.activeElement,w=m?(m.tagName||"").toLowerCase():"";if(!(m&&(m.isContentEditable||w==="input"||w==="textarea"||w==="select"))){if(p.key==="ArrowLeft"||p.key==="k"){N(-1),p.preventDefault();return}if(p.key==="ArrowRight"||p.key==="j"){N(1),p.preventDefault();return}}}function N(p){if(!E.entry)return;let m=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(m=window.AdminLiveFeed.getEntries()),!m.length)return;let w=m.findIndex(function(l){return l.id===E.entry.id});if(w<0)return;let d=w+-p;if(d<0||d>=m.length){window.showToast&&window.showToast(p<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let s=m[d];E.entry=s,E.fingerprintRecord=null,A(s),_(),s.data&&s.data.fingerprint&&F(s.data.fingerprint)}async function F(p){try{let m=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!m.ok)return;let w=await m.json(),s=(Array.isArray(w.records)?w.records:[]).find(function(l){return l.fingerprint===p});E.fingerprintRecord=s||null,_()}catch{}}function A(p){let m=p.data&&p.data.fingerprint;if(!m){E.sameFpEntries=[];return}let w=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(w=window.AdminLiveFeed.getEntries()),E.sameFpEntries=w.filter(function(d){return(d.data&&d.data.fingerprint||d.fingerprint||"")===m}).slice(0,8)}function y(){return`
      <div id="${h}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function D(){let p=document.getElementById(h);p&&p.addEventListener("click",function(m){let w=m.target.closest("[data-msgd-action]");if(!w)return;m.stopPropagation();let d=w.dataset.msgdAction;d==="close"?M():d==="ban-fp"?g():d==="ban-fp-quick"?T():d==="recall-msg"?r():d==="blacklist-kw"?o():d==="reply"?n():d==="prev"?N(-1):d==="next"&&N(1)})}function _(){let p=document.getElementById(h);if(!p)return;let m=p.querySelector("[data-msgd-body]");m&&(m.innerHTML=$())}function $(){let p=E.entry;if(!p)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let m=p.data||{},w=m.fingerprint||"\u2014",d=w==="\u2014"?"\u2014":w.slice(0,8),s=w==="\u2014"?"\u2014":w.slice(0,12),l=p.ts?I(p.ts):"\u2014",b=m.nickname||ServerI18n.t("msgDrawerAnonymous"),e=E.fingerprintRecord||{},t=Number(e.message_count)||0,a=Number(e.violation_count)||0,i=E.sameFpEntries||[],v=i.length?Math.round(i.reduce((S,x)=>S+((x.data||x).text||"").length,0)/i.length):(m.text||"").length,k=0;for(let S=0;S<w.length;S++)k=k*31+w.charCodeAt(S)&65535;return k=k%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${k})">${u((b||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${u(b)}</div>
          <div class="admin-msgd-v4__fp">fp:${u(s)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${u(l)}</span>
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
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${v}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
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
    `}function I(p){try{let m=new Date(p),w=String(m.getHours()).padStart(2,"0"),d=String(m.getMinutes()).padStart(2,"0"),s=String(m.getSeconds()).padStart(2,"0");return w+":"+d+":"+s}catch{return"\u2014"}}function H(p){let m;if(typeof p=="number")m=p*1e3;else if(typeof p=="string")m=new Date(p).getTime();else return"\u2014";if(!m)return"\u2014";let w=(Date.now()-m)/1e3;return w<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(w)}):w<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(w/60)}):w<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(w/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(w/86400)})}async function T(p,m,w){let d=E.entry&&E.entry.data&&E.entry.data.fingerprint;if(!d)return;let s=parseInt(m||0,10)||0,l=s>0?await window.AdminModeration.banFingerprint(d,s,p):await window.AdminModeration.callBlock("fingerprint",d,p);if(!l.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:l.error||""}),!1);return}let b=w||(s>0?ServerI18n.t("msgDrawerSecondsLabel",{n:s}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:d.slice(0,8),label:b}),!0),M()}async function g(){let p=E.entry&&E.entry.data||{},m=p.fingerprint||"\u2014";if(m==="\u2014")return;let w=m.slice(0,12),d=p.nickname||ServerI18n.t("msgDrawerAnonymous"),s=0;for(let k=0;k<m.length;k++)s=s*31+m.charCodeAt(k)&65535;s=s%360;let l=document.createElement("div");l.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${s})">${u((d||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${u(d)}</div>
          <div class="fp">fp:${u(w)}</div>
          <div class="ip">IP \xB7 ${u(p.ip||"\u2014")} \xB7 ${u(p.user_agent||p.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let b=k=>{l.querySelectorAll(".admin-bancfm-dchip").forEach(S=>S.classList.remove("is-active")),k.classList.add("is-active")};if(l.addEventListener("click",k=>{let S=k.target.closest("[data-ban-duration]");S&&b(S)}),l.addEventListener("keydown",k=>{if(k.key!=="Enter"&&k.key!==" ")return;let S=k.target.closest("[data-ban-duration]");S&&(k.preventDefault(),b(S))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:l,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let t=(l.querySelector("[data-ban-reason]")||{}).value||"",a=l.querySelector(".admin-bancfm-dchip.is-active"),i=a&&parseInt(a.dataset.banDuration||"0",10)||0,v=a?a.textContent.trim():ServerI18n.t("msgDrawerPermanent");return T(t.trim(),i,v)}function c(){}async function r(){let p=E.entry,m=p&&p.data&&p.data.message_id;if(!m)return;if(!(await window.AdminModeration.recall(m)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),M()}async function o(){let p=E.entry&&E.entry.data&&E.entry.data.text;if(!p)return;await window.AdminModeration.blockKeyword(p)&&M()}async function n(){let p=document.querySelector("[data-msgd-reply]"),m=p?p.value.trim():"";if(m)try{let w=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:m})});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),p&&(p.value="")}catch(w){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:w.message||""}),!1)}}window.AdminMessageDrawer={open:function(p){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:p}}))},close:M},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",L),document.addEventListener("keydown",B))})})()});var Xt=ye(()=>{(function(){"use strict";let h="danmu.notifications.read",f="danmu.notifications.archived",u=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},E={items:[],refreshTimer:0};function C(d){try{let s=localStorage.getItem(d);if(!s)return new Set;let l=JSON.parse(s);return new Set(Array.isArray(l)?l:[])}catch{return new Set}}function L(d,s){try{localStorage.setItem(d,JSON.stringify(Array.from(s)))}catch{}}function U(d){let s=C(h);s.add(d),L(h,s)}async function M(){let d=[B().catch(function(){return[]}),N().catch(function(){return[]}),F().catch(function(){return[]}),A().catch(function(){return[]})],l=(await Promise.all(d)).flat();l.sort(function(b,e){return(e.ts||0)-(b.ts||0)}),E.items=l,I(),g()&&H()}async function B(){let d=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,a="tok-"+(b.ts||e)+"-"+(b.kind||"x"),i=b.kind||"?",v="info",k=ServerI18n.t("notifTitleFireTokenEvent");if(i==="rotated")v="info",k=ServerI18n.t("notifTitleFireTokenRotated");else if(i==="revoked")v="warn",k=ServerI18n.t("notifTitleFireTokenRevoked");else if(i==="toggled"){let S=b.meta&&b.meta.enabled;v=S?"good":"warn",k=ServerI18n.t("notifTitleFireTokenToggled",{state:S?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:a,sev:v,src:"Fire Token",ts:t,title:k,desc:ServerI18n.t("notifDescEventType",{kind:i})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function N(){let d=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,a="flt-"+(b.ts||e)+"-"+(b.action||"x")+"-"+e,i=b.action||"match";return{id:a,sev:i==="drop"?"warn":"info",src:"Moderation",ts:t,title:ServerI18n.t("notifTitleFilterHit",{action:i}),desc:ServerI18n.t("notifDescFilterHit",{rule:b.rule_id||"?",text:(b.text_excerpt||"").slice(0,60)}),raw:b}})}async function F(){let d=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json();return(Array.isArray(s.events)?s.events:[]).map(function(b,e){let t=(Number(b.ts)||0)*1e3,a=String(b.kind||"?");return{id:"wh-"+(b.ts||e)+"-"+a+"-"+e,sev:a==="unregister"?"warn":"info",src:"Webhooks",ts:t,title:ServerI18n.t("notifTitleWebhookEvent",{kind:a}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:b.actor||"system"})+(b.meta?" \xB7 "+JSON.stringify(b.meta):""),raw:b}})}async function A(){let d=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!d.ok)return[];let s=await d.json(),l=Array.isArray(s.events)?s.events:[],b=new Set(["auth","broadcast","system","session","sessions"]);return l.filter(function(e){return b.has(String(e.source||""))}).map(function(e,t){let a=(Number(e.ts)||0)*1e3,i=String(e.kind||"?");return{id:"sys-"+(e.ts||t)+"-"+(e.source||"x")+"-"+i+"-"+t,sev:i==="login_failed"?"warn":"info",src:"System",ts:a,title:ServerI18n.t("notifTitleSystemEvent",{kind:i}),desc:ServerI18n.t("notifDescSystemEvent",{source:e.source||"?",actor:e.actor||"system"}),raw:e}})}let y="admin-notif-panel",D={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/system/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/system/integrations"},System:{key:"adminNavSystem",hash:"#/events"}};function _(d){let s=D[d];return s?ServerI18n.t(s.key):d}function $(){let d=C(h),s=C(f);return E.items.filter(l=>!d.has(l.id)&&!s.has(l.id))}function I(){let d=document.querySelector("[data-notif-badge]");if(!d)return;let s=$().length;d.textContent=s>99?"99+":String(s),d.hidden=s===0}function H(){let d=document.getElementById(y);if(!d)return;let s=$().slice(0,20),l=s.length?s.map(b=>{let e=D[b.src];return'<li class="admin-notif__item" data-sev="'+u(b.sev)+'"><div class="admin-notif__text">'+u(b.title)+'</div><div class="admin-notif__meta">'+u(_(b.src))+" \xB7 "+u(T(b.ts))+"</div>"+(e?'<button type="button" class="admin-notif__action" data-notif-go="'+u(e.hash)+'" data-notif-id="'+u(b.id)+'">'+u(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+u(ServerI18n.t("notifEmpty"))+"</li>";d.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+u(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+u(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+l+"</ul>"}function T(d){if(!d)return"\u2014";let s=(Date.now()-d)/1e3;return s<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(s)}):s<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(s/60)}):s<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(s/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(s/86400)})}function g(){let d=document.getElementById(y);return!!d&&!d.hidden}function c(){let d=document.getElementById(y);d&&(H(),d.hidden=!1,E.refreshTimer||(E.refreshTimer=setInterval(M,3e4)))}function r(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&c()}function o(){let d=document.getElementById(y);d&&(d.hidden=!0),E.refreshTimer&&(clearInterval(E.refreshTimer),E.refreshTimer=0)}function n(){g()?o():c()}function p(){let d=document.querySelector(".admin-dash-topbar-actions");if(!d||document.getElementById("admin-notif-bell"))return;let s=document.createElement("button");if(s.id="admin-notif-bell",s.type="button",s.className="admin-dash-search is-icon-only admin-notif-bell",s.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),s.title=ServerI18n.t("adminRouteTitle_notifications"),s.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',d.insertBefore(s,d.firstChild),!document.getElementById(y)){let l=document.createElement("div");l.id=y,l.className="admin-notif",l.setAttribute("role","dialog"),l.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),l.hidden=!0,document.body.appendChild(l)}I(),r()}function m(){document.addEventListener("click",d=>{if(d.target.closest("#admin-notif-bell")){d.preventDefault(),n();return}let s=d.target.closest("[data-notif-go]");if(s){U(s.dataset.notifId),o(),location.hash=s.dataset.notifGo,I();return}if(d.target.closest("[data-notif-readall]")){$().forEach(l=>U(l.id)),H(),I();return}g()&&!d.target.closest("#"+y)&&o()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&g()&&o()}),window.addEventListener("hashchange",r),r()}function w(){p(),M()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(p).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),m(),w()})})()});var Zt=ye(()=>{(function(){"use strict";let h="sec-audit-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},u={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},E={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function C(){return`
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
      </div>`}function L(n){if(!n)return"\u2014";try{let p=new Date(Number(n)*1e3),m=String(p.getHours()).padStart(2,"0"),w=String(p.getMinutes()).padStart(2,"0"),d=String(p.getSeconds()).padStart(2,"0");return`${m}:${w}:${d}`}catch{return"\u2014"}}function U(n){let p=String(n.action||n.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(p)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(p)?"warn":"info"}function M(n){return n==="danger"?"var(--hud-crimson, #f87171)":n==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function B(n){return E.filterActor==="all"||String(n.actor||"").toLowerCase()===E.filterActor}function N(n){return E.filterSeverity==="all"||U(n)===E.filterSeverity}function F(){return E.events.filter(function(n){return B(n)&&N(n)})}function A(n){let p=n&&n.meta&&typeof n.meta=="object"?n.meta:{};return p.target||p.keyword||p.fp||p.fingerprint||p.name||p.mode||p.session||p.hook_id||n.target||""}function y(n,p){let m=n!=null,w=p!=null;if(!m&&!w)return"";let d=m?f(JSON.stringify(n)):"",s=w?f(JSON.stringify(p)):"";return m?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${d}</span> \u2192 <span class="admin-audit-diff-a">${s}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${s}</span></span>`}function D(n){let p=n&&n.meta&&typeof n.meta=="object"?n.meta:{},m=[];n.detail&&m.push(`<span>${f(String(n.detail))}</span>`);let w=y(n.before,n.after);w&&m.push(w);let d=Object.assign({},p);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(l){delete d[l]}),Object.keys(d).length&&m.push(`<code class="admin-ui-code admin-audit-meta-extra">${f(JSON.stringify(d))}</code>`),!m.length){let l=u[n.source]&&u[n.source].label||n.source||"system";m.push(`<span>${f(String(l))}</span>`)}return m.join(" ")}function _(n){return n==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":n==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function $(){let n=document.querySelector("[data-audit-rows]");if(!n)return;let p=F();if(!p.length){n.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}n.innerHTML=p.map(function(m){let w=U(m),d=M(w),s=String(m.actor||"system"),l=A(m);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${w}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${f(L(m.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${d};box-shadow:0 0 6px ${d}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${_(s)}">${f(s)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${f(String(m.action||m.kind||"\u2014"))}</span>
              ${l?`<span class="admin-ui-target admin-audit-target">\u2192 ${f(String(l))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${D(m)}</div>
          </div>
        </div>`}).join("")}function I(){let n=document.querySelector("[data-audit-summary]");if(!n)return;let p=F().length,m=E.filterActor==="all"?ServerI18n.t("auditAllRoles"):E.filterActor,w=E.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):E.filterSeverity.toUpperCase();n.textContent=ServerI18n.t("auditSummaryLine",{n:p,actor:m,sev:w})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditActorFilter===E.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditSeverityFilter===E.filterSeverity)})}async function T(){try{let n=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!n.ok)return;let p=await n.json(),m=Array.isArray(p.events)?p.events.slice():[];m.sort(function(w,d){return Number(d.ts||0)-Number(w.ts||0)}),E.events=m,H(),$(),I()}catch{}}function g(){let n=F();if(!n.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let p=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),m=URL.createObjectURL(p),w=document.createElement("a");w.href=m,w.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(w),w.click(),document.body.removeChild(w),setTimeout(function(){URL.revokeObjectURL(m)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:n.length}),!0)}function c(){let n=document.getElementById(h);n&&n.addEventListener("click",function(p){let m=p.target.closest("[data-audit-actor-filter]");if(m){E.filterActor=m.dataset.auditActorFilter||"all",H(),$(),I();return}let w=p.target.closest("[data-audit-severity-filter]");if(w){let d=w.dataset.auditSeverityFilter||"all";E.filterSeverity=E.filterSeverity===d?"all":d,H(),$(),I();return}if(p.target.closest("[data-audit-export]")){g();return}p.target.closest("[data-audit-refresh]")&&T()})}function r(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(T(),E.refreshTimer||(E.refreshTimer=setInterval(T,3e4))):E.refreshTimer&&(clearInterval(E.refreshTimer),E.refreshTimer=0)}function o(){let n=document.getElementById("settings-grid");!n||document.getElementById(h)||(n.insertAdjacentHTML("beforeend",C()),c(),T(),r(),window.addEventListener("hashchange",r))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&o()})})()});var en=ye(()=>{(function(){"use strict";let h="sec-audience-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},u=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],E=20,C={records:[],filter:"all",shown:E,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function L(t){if(!t)return u[0];let a=0;for(let i=0;i<t.length;i++)a=a*31+t.charCodeAt(i)>>>0;return u[a%u.length]}function U(t){if(!t)return"\u2014";let a=typeof t=="number"?t*1e3:new Date(t).getTime();if(!a)return"\u2014";let i=Math.max(0,(Date.now()-a)/1e3);return i<60?Math.floor(i)+"s":i<3600?Math.floor(i/60)+"m":i<86400?Math.floor(i/3600)+"h":Math.floor(i/86400)+"d"}function M(t){return t==="blocked"||t==="high"?"is-danger":t==="mid"?"is-warn":"is-success"}function B(){return`
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
      </div>`}function N(){let t=C.search.trim().toLowerCase(),a=C.records.slice();return t&&(a=a.filter(function(i){return String(i.nickname||"").toLowerCase().indexOf(t)!==-1||String(i.hash||"").toLowerCase().indexOf(t)!==-1})),a.sort(function(i,v){return C.sort==="last_seen"?(Number(v.last_seen)||0)-(Number(i.last_seen)||0):(Number(v.msgs)||0)-(Number(i.msgs)||0)}),C.filter==="all"?a:C.filter==="flagged"?a.filter(function(i){return i.state==="flagged"||i.state==="blocked"}):C.filter==="extension"?a.filter(function(i){return i.fingerprint&&(i.fingerprint.indexOf("slido")===0||i.fingerprint.indexOf("ext_")===0)}):a}function F(){let t=document.querySelector("[data-aud-stats]");if(!t)return;let a=C.records,i=a.length,v=a.filter(function(R){return R.state==="flagged"}).length,k=a.filter(function(R){return R.state==="blocked"}).length,S=a.reduce(function(R,G){return R+(Number(G.msgs)||0)},0),x=a.filter(function(R){let G=R.last_seen;if(!G)return!1;let q=typeof G=="number"?G*1e3:new Date(G).getTime();return(Date.now()-q)/1e3<300}).length;t.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${i}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${x}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${S}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${v}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${k}</div></div>`}function A(){let t=document.querySelector("[data-aud-filters]");if(!t)return;let a=C.records.length,i=C.records.filter(function(v){return v.state==="flagged"||v.state==="blocked"}).length;t.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:a})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${C.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:i})}</button>`}let y="__anon__";function D(t){let a=(t.nickname||"").trim();return!a||a==="\u533F\u540D"}function _(t){let a=t.hash||t.fingerprint||"";return a?a.length>9?a.slice(0,4)+"\u2026"+a.slice(-4):a:"\u2014"}function $(){let t=[],a=[];return N().forEach(function(i){D(i)?a.push(i):t.push(i)}),a.length&&t.push({_anonGroup:!0,_count:a.length,fingerprint:y,msgs:a.reduce(function(i,v){return i+(Number(v.msgs)||0)},0),blocked:a.reduce(function(i,v){return i+(Number(v.blocked)||0)},0),last_seen:Math.max.apply(null,a.map(function(i){return i.last_seen||0})),state:a.some(function(i){return i.state==="blocked"})?"blocked":"active"}),t}function I(){let t=document.querySelector("[data-aud-list]"),a=document.querySelector("[data-aud-summary]");if(!t)return;let i=$(),v=Math.min(i.length,C.shown);if(a&&(a.textContent=ServerI18n.t("audienceShownOfTotal",{n:v,total:i.length})),i.length===0){t.innerHTML="";let R=window.AdminEmpty.render("audience");R.dataset.emptyKind="audience",t.appendChild(R);return}let k=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,S=i.slice(0,v).map(function(R){let G=R.fingerprint||"\u2014",q=R.state==="blocked",z=R._anonGroup?ServerI18n.t("audienceAnonymous"):(R.nickname||"").trim(),P=R._anonGroup?"?":z.slice(0,1),W=L(G);return`
        <div class="admin-aud-row${C.selectedFp===G?" is-selected":""}" data-aud-row data-aud-fp="${f(G)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${W}">${f(P)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${f(z)}</span>
            ${R._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:R._count})}</span>`:""}
            ${q&&!R._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${R._anonGroup?"\u2014":f(_(R))}</span>
          <span class="col col-msgs">${Number(R.msgs)||0}</span>
          <span class="col col-blocked">${Number(R.blocked)||0}</span>
          <span class="col col-seen">${f(U(R.last_seen))}</span>
          <span class="col col-actions">
            ${R._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${f(G)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),x=i.length>v?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";t.innerHTML=k+S+x}function H(t){return t&&C.records.find(function(a){return a.fingerprint===t})||null}function T(t){if(!t)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let a=[],i=Number(t.msgs)||0,v=t.fingerprint||"";t.state==="blocked"&&a.push(ServerI18n.t("audienceRuleBlocked")),t.state==="flagged"&&a.push(ServerI18n.t("audienceRuleFlagged")),i>=25?a.push(ServerI18n.t("audienceRuleMsgOver",{n:i})):i>=15&&a.push(ServerI18n.t("audienceRuleMsgNear",{n:i}));let k=C.records.filter(function(G){return G.ip&&t.ip&&G.ip===t.ip}).length;k>=3&&a.push(ServerI18n.t("audienceRuleSameIp",{n:k})),(v.indexOf("slido")===0||v.indexOf("ext_")===0)&&a.push(ServerI18n.t("audienceRuleBridge")),(t.nickname==="\u533F\u540D"||!t.nickname)&&a.push(ServerI18n.t("audienceRuleNoNick"));let S="normal",x="var(--hud-lime)",R="NORMAL";return t.state==="blocked"?(S="blocked",x="var(--hud-crimson)",R="BLOCKED"):t.state==="flagged"||i>=25?(S="high",x="var(--hud-crimson)",R="HIGH RISK"):(i>=15||k>=3)&&(S="mid",x="var(--hud-amber)",R="MID"),{level:S,color:x,label:R,rules:a}}async function g(t){C.detailLoading=!0;try{let a=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!a.ok){C.detailMessages=[];return}let i=await a.json(),v=Array.isArray(i.records)?i.records:[],k=Date.now()-300*1e3;C.detailMessages=v.filter(function(S){return(S.fingerprint||"")!==t?!1:(S.timestamp?new Date(S.timestamp).getTime():0)>=k}).slice(0,8)}catch{C.detailMessages=[]}finally{C.detailLoading=!1}}function c(){let t=document.querySelector("[data-aud-detail]");if(!t)return;let a=C.selectedFp;if(!a){t.hidden=!0,t.innerHTML="";return}let i=H(a);if(!i){C.selectedFp=null,t.hidden=!0;return}t.hidden=!1;let v=T(i);t.dataset.riskLevel=v.level;let k=L(a),S=!i.nickname||i.nickname==="\u533F\u540D",x=S?ServerI18n.t("audienceAnonymous"):i.nickname,R=S?"?":x.slice(0,1),G="fp:"+(a||"").slice(0,8),q=v.rules.length?v.rules.map(function(P){return"<li>"+f(P)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",z="";C.detailLoading?z='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":C.detailMessages.length===0?z='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":z=C.detailMessages.map(function(P){let W=P.muted?"MASKED":P.banned?"BLOCKED":"SHOWN",ee=P.muted?"var(--hud-amber)":P.banned?"var(--hud-crimson)":"var(--hud-lime)",J=P.timestamp?new Date(P.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+f(J)+'</span><span class="m">'+f(P.text||"")+'</span><span class="s" style="color:'+ee+'">'+W+"</span></div>"}).join(""),t.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+M(v.level)+'">'+f(v.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+k+'">'+f(R)+'</span><div><div class="nick">'+f(x)+'</div><div class="fp">'+f(G)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+v.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:v.rules.length})+"</div><ul>"+q+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+z+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(i.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+f(a)+'" data-aud-flagged="'+(i.is_flagged?"true":"false")+'">'+(i.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+f(a)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function r(t){C.selectedFp=t,C.detailMessages=[],c(),g(t).then(c)}async function o(){try{let t=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!t.ok)return;let a=await t.json();C.records=Array.isArray(a.entries)?a.entries:[],C.serverStats=a&&a.stats||null,F(),A(),I(),C.selectedFp&&c()}catch{}}async function n(t,a,i){if(t)try{let v=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,flagged:!!a,note:i||""})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(a?ServerI18n.t("audienceToastFlagged",{fp:t.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:t.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:v.message||""}),!1)}}async function p(t,a){if(!t||t==="\u2014")return;let i=a??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:t.slice(0,8)}),"")||"");if(i!==null)try{let v=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,reason:i})});if(!v.ok)throw new Error("HTTP "+v.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:t.slice(0,8)}),!0),o()}catch(v){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:v.message||""}),!1)}}async function m(t){if(!(!t||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+f(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let i=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:i.message||""}),!1)}}async function w(t){if(!(!t||t==="\u2014"))try{let a=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:t,action:"mask",priority:0,enabled:!0})});if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:t.slice(0,8)}),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:a.message||""}),!1)}}async function d(t){if(!(!t||t==="\u2014"))try{let a=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);let i=await a.json(),k=(Array.isArray(i.rules)?i.rules:[]).filter(function(x){return x&&x.type==="fingerprint"&&x.pattern===t});if(k.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let S=0;for(let x of k)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:x.rule_id||x.id})}).catch(function(){return{ok:!1}})).ok&&(S+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:S,fp:t.slice(0,8)}),!0),o()}catch(a){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:a.message||""}),!1)}}async function s(t){if(!(!t||t==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+f(t.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let i=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:t})});if(!i.ok)throw new Error("HTTP "+i.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:t.slice(0,8)}),!0),o()}catch(i){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:i.message||""}),!1)}}function l(){let t=document.getElementById(h);t&&(t.addEventListener("input",function(a){let i=a.target.closest("[data-aud-search]");i&&(C.search=i.value||"",C.shown=E,I())}),t.addEventListener("change",function(a){let i=a.target.closest("[data-aud-sort]");i&&(C.sort=i.value,I())}),t.addEventListener("click",function(a){let i=a.target.closest("[data-aud-filter]");if(i){C.filter=i.dataset.audFilter,C.shown=E,A(),I();return}let v=a.target.closest("[data-aud-action='ban']");if(v){a.stopPropagation(),s(v.dataset.audFp);return}if(a.target.closest("[data-aud-action='refresh']")){o();return}if(a.target.closest("[data-aud-action='more']")){C.shown+=E,I();return}if(a.target.closest("[data-aud-action='close-detail']")){C.selectedFp=null,c();return}let R=a.target.closest("[data-aud-action='detail-ban']");if(R){s(R.dataset.audFp);return}let G=a.target.closest("[data-aud-action='detail-mask']");if(G){w(G.dataset.audFp);return}let q=a.target.closest("[data-aud-action='detail-safe']");if(q){d(q.dataset.audFp);return}let z=a.target.closest("[data-aud-action='flag']");if(z){a.stopPropagation(),n(z.dataset.audFp,z.dataset.audFlagged!=="true");return}let P=a.target.closest("[data-aud-action='kick']");if(P){a.stopPropagation(),p(P.dataset.audFp);return}let W=a.target.closest("[data-aud-action='unkick']");if(W){a.stopPropagation(),m(W.dataset.audFp);return}let ee=a.target.closest("[data-aud-row]");if(!(ee&&ee.dataset.audFp===y)&&ee&&!a.target.closest("button")){r(ee.dataset.audFp);return}}))}function b(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),C.refreshTimer||(C.refreshTimer=setInterval(o,15e3))):C.refreshTimer&&(clearInterval(C.refreshTimer),C.refreshTimer=0)}function e(){let t=document.getElementById("settings-grid");!t||document.getElementById(h)||(t.insertAdjacentHTML("beforeend",B()),l(),o(),b(),window.addEventListener("hashchange",b))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&e()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&e()})})()});var tn=ye(()=>{(function(){"use strict";let h=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],f={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},u=2500,E=0,C=0,L=null;function U(){if(L)return L;let A=document.createElement("div");return A.className="admin-konami-hud",A.setAttribute("aria-hidden","true"),A.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(A),L=A,A}function M(){if(E===0){L&&L.classList.remove("is-on");return}let A=U();A.classList.add("is-on");let y=A.querySelector(".admin-konami-hud-keys");y&&(y.innerHTML=h.map((_,$)=>`<span class="admin-konami-hud-key ${$<E?"is-filled":""}">${f[_]}</span>`).join(""));let D=A.querySelector(".admin-konami-hud-progress");if(D){let _=Math.round(E/h.length*100);D.style.width=_+"%"}}function B(A){E=0,C&&(clearTimeout(C),C=0),A||M()}function N(){C&&clearTimeout(C),C=setTimeout(()=>B(),u)}async function F(){try{let A=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!A.ok)throw new Error("HTTP "+A.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(A){console.warn("[konami] trigger failed:",A&&A.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",A=>{let y=A.target;if(y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable))return;let D=h[E];if(!(A.key===D||D==="b"&&A.key.toLowerCase()==="b"||D==="a"&&A.key.toLowerCase()==="a")){E=A.key===h[0]?1:0,M(),E>0?N():C&&(clearTimeout(C),C=0);return}if(E++,M(),E>=h.length){B(!0),F();return}N()}),window.AdminKonami={trigger:F}})()});var nn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(w){return w==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:w==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:w==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function u(){let w=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,d=w?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
    `}var E=null,C=[];function L(w,d){var s=document.getElementById("adminFontEmptyStateHost");if(!s)return;if((w||[]).some(e=>e.type==="uploaded")){s.innerHTML="";return}s.innerHTML="";var b=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:d?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var e=document.getElementById("adminFontFileInput");e&&e.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});b.dataset.emptyKind="fonts",s.appendChild(b)}function U(w,d){let s=w.weight||"\u2014",l=w.sizeLabel||"\u2014",b=w.foundry||(w.type==="system"?"System":w.type==="default"?"Google / Noto":"Uploaded"),e=w.format||"\u2014",t=w.status||w.type,a=`font-family: "${h(w.name)}", sans-serif;`,i=f(t),v=[];if(d){if(t!=="default"&&v.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${h(w.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),t!=="default"){let k=t==="enabled"||t==="system",S=k?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");v.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${h(w.name)}" data-enabled="${k?"true":"false"}">${S}</button>`)}w.type==="uploaded"&&(v.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${h(w.name)}" title="${h(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),v.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${h(w.name)}">${h(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${h(w.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${a}" class="truncate">${h(w.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(v.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${v.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${h(b)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${h(s)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${h(l)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${h(e)}</span><div style="text-align:right">${i}</div></div>`}let M=null,B={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function N(){if(M)return M;try{let w=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return w.ok?(M=(await w.json()).presets||{},M):{}}catch{return{}}}function F(w){return!w||!Number.isFinite(w)?"\u2014":w<1024?w+" B":w<1024*1024?(w/1024).toFixed(1)+" KB":(w/(1024*1024)).toFixed(2)+" MB"}async function A(w){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let d=await N();if(!Object.keys(d).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let s=new Set(["cjk_common","latin"]),l="",b=document.createElement("div");b.className="admin-font-subset-modal-body";let e=()=>{let i=Object.keys(d).map(k=>{let S=B[k]||{label:k,glyphs:"\u2014",estSize:"\u2014"},x=S.labelKey?ServerI18n.t(S.labelKey):S.label,R=s.has(k);return`
          <label class="admin-font-subset-chip${R?" is-active":""}" data-subset-preset="${k}">
            <span class="admin-font-subset-chip-check">${R?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${h(x)}</span>
            <span class="admin-font-subset-chip-range">${h(d[k])}</span>
            <span class="admin-font-subset-chip-meta">${S.glyphs} glyphs \xB7 ${S.estSize}</span>
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
          <div class="admin-font-subset-chips">${i}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${h(l)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,b.querySelectorAll("[data-subset-preset]").forEach(k=>{k.addEventListener("click",S=>{S.preventDefault();let x=k.dataset.subsetPreset;s.has(x)?s.delete(x):s.add(x),e()})});let v=b.querySelector("[data-subset-custom]");v&&v.addEventListener("input",()=>{l=v.value})};if(e(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:b,width:540}))return;let a=[];if(s.forEach(i=>{d[i]&&a.push(d[i])}),l.trim()&&a.push(l.trim()),!a.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await y(w,a.join(","))}async function y(w,d){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:w}),!0);let s=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(w)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:d})}),l=await s.json().catch(()=>({}));if(s.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!s.ok){window.showToast?.(l.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:s.status}),!1);return}let b=l.saved_bytes||0,e=Math.round((l.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:w,before:F(l.original_size),after:F(l.new_size),pct:e}),!0),$()}catch(s){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:s.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function D(w){try{let d=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:w})});if(!d.ok)throw new Error("HTTP "+d.status);E=w,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:w}),!0),$()}catch(d){console.error("[admin-fonts] set default failed:",d),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function _(w,d){try{let s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!d})});if(!s.ok)throw new Error("HTTP "+s.status);window.showToast(ServerI18n.t(d?"fontsToggleOffToast":"fontsToggleOnToast",{name:w}),!0),$()}catch(s){console.error("[admin-fonts] toggle failed:",s),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function $(){var w=document.getElementById("adminFontList");if(!w)return;let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var s=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!s.ok)throw new Error("HTTP "+s.status);var l=await s.json(),b=l.fonts||[];if(C=b,window.AdminTabs?.setTabCount?.("assets","fonts",b.length||""),L(b,d),b.length===0){w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,c(b);return}w.innerHTML=b.map(e=>U(e,d)).join(""),c(b),r()}catch(e){console.error("[admin-fonts] fetch failed:",e),w.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,L([],d)}}async function I(w){try{let d=await w.slice(0,4).arrayBuffer(),s=new Uint8Array(d);return s[0]===0&&s[1]===1&&s[2]===0&&s[3]===0?"TTF":s[0]===79&&s[1]===84&&s[2]===84&&s[3]===79?"OTF":s[0]===119&&s[1]===79&&s[2]===70&&s[3]===50?"WOFF2":s[0]===116&&s[1]===114&&s[2]===117&&s[3]===101?"TTF":s[0]===116&&s[1]===116&&s[2]===99&&s[3]===102?"TTC":null}catch{return null}}function H(w,d){let s=document.getElementById("adminFontDropStatus");if(s){if(!w){s.textContent="",s.hidden=!0,s.classList.remove("is-good","is-bad");return}s.hidden=!1,s.textContent=w,s.classList.toggle("is-good",d==="good"),s.classList.toggle("is-bad",d==="bad")}}function T(w){let d=document.getElementById("adminFontUploadError");if(!d)return;if(!w){d.hidden=!0,d.innerHTML="";return}d.hidden=!1,d.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${h(w)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let s=d.querySelector("[data-font-error-retry]");s&&s.addEventListener("click",function(){let l=document.getElementById("adminFontFileInput");l&&l.click()})}async function g(w){if(!w)return;T("");let d=w.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(d)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),T(ServerI18n.t("fontsExtNotSupportedFull"));return}if(w.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),T(ServerI18n.t("fontsFileTooLargeFull"));return}let s=await I(w);if(!s){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),T(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:s,size:(w.size/1024).toFixed(1)}),"good");try{var l=new FormData;l.append("fontfile",w);var b=await window.csrfFetch("/admin/upload_font",{method:"POST",body:l}),e=await b.json();b.ok?(window.showToast(e.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:w.name}),"good"),T(""),await $()):(window.showToast(e.error||ServerI18n.t("uploadFailed"),!1),H(e.error||ServerI18n.t("uploadFailed"),"bad"),T(e.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(t){console.error("[admin-fonts] upload error:",t),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),T(ServerI18n.t("fontsNetworkDisconnected"))}}function c(w){let d=document.getElementById("fontsTotalSize");d&&(d.textContent=ServerI18n.t("fontsTotalCount",{n:w.length}))}function r(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(w=>{w.addEventListener("click",d=>{if(d.target.closest(".admin-font-delete-btn"))return;let s=w.dataset.font,l=document.getElementById("fontsPreviewFamily"),b=document.getElementById("fontsPreviewHeadline"),e=document.getElementById("fontsPreviewLatin"),t=document.getElementById("fontsPreviewCJK");l&&(l.textContent=s);let a=`"${s}", sans-serif`;b&&(b.style.fontFamily=a),e&&(e.style.fontFamily=a),t&&(t.style.fontFamily=a)})})}async function o(){var w=document.getElementById("adminFontFileInput");if(w){var d=w.files&&w.files[0];if(!d){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await g(d),w.value=""}}function n(){let w=document.getElementById("adminFontDrop"),d=document.getElementById("adminFontFileInput");!w||!d||(w.addEventListener("click",s=>{s.target!==d&&d.click()}),w.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),d.click())}),["dragenter","dragover"].forEach(s=>{w.addEventListener(s,l=>{l.preventDefault(),l.stopPropagation(),w.classList.add("is-drag")})}),["dragleave","drop"].forEach(s=>{w.addEventListener(s,l=>{l.preventDefault(),l.stopPropagation(),w.classList.remove("is-drag")})}),w.addEventListener("drop",async s=>{let l=s.dataTransfer&&s.dataTransfer.files;l&&l[0]&&await g(l[0])}))}async function p(w){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",w),confirmLabel:ServerI18n.t("deleteBtn")}))try{var s=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(w),{method:"DELETE"}),l=await s.json();s.ok?(window.showToast(l.message||ServerI18n.t("fontDeleteFallback")),await $()):window.showToast(l.error||ServerI18n.t("deleteFailed"),!1)}catch(b){console.error("[admin-fonts] delete error:",b),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function m(){var w=document.getElementById("settings-grid");if(w){w.insertAdjacentHTML("beforeend",u());var d=document.getElementById("adminFontFileInput");d&&d.addEventListener("change",o),n();var s=document.getElementById("adminFontList");s&&s.addEventListener("click",function(l){var b=l.target.closest(".admin-font-delete-btn");if(b){l.stopPropagation(),p(b.dataset.name);return}var e=l.target.closest(".admin-font-default-btn");if(e){l.stopPropagation(),D(e.dataset.name);return}var t=l.target.closest(".admin-font-toggle-btn");if(t){l.stopPropagation();let i=t.dataset.enabled==="true";_(t.dataset.name,i);return}var a=l.target.closest(".admin-font-subset-btn");a&&(l.stopPropagation(),A(a.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.FontFamily)&&(E=l.FontFamily[3]||null)}).catch(()=>{}).finally($)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var w=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()});w.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&m()}})})()});var an=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;let f="sec-scheduler",u=5e3,E=null,C=null;function L(m,w,d,s){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${m}">
        <input type="text" placeholder="${B(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${B(w)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${B(d||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${s||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function U(m){var w=m==="active"?"is-success":m==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+w+'" title="'+B(m)+'"></span>'}function M(m){let w=m.state==="paused",d=m.repeat_count===void 0?"\u2014":m.repeat_count===-1?"\u221E":String(m.repeat_count),s=m.repeat_count>0&&typeof m.remaining=="number"?String(m.repeat_count-m.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${B(m.id)}">
        ${U(m.state)}
        <div>
          <div class="admin-scheduler-job-title">#${h(m.id)}</div>
          <div class="admin-scheduler-job-meta">${h(ServerI18n.t("schedulerMessages"))} ${m.messages?m.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${m.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${h(s)}</span>
        <span class="admin-scheduler-job-val">${h(d)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${w?"is-active":"is-warn"}"
            data-job-id="${B(m.id)}" data-action="${w?"resume":"pause"}">
            ${h(ServerI18n.t(w?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${B(m.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function B(m){return h(m)}function N(){let m=document.querySelectorAll("#schedulerMessages [data-msg-index]"),w=[];return m.forEach(function(d){let s=d.querySelector(".scheduler-msg-text").value.trim(),l=d.querySelector(".scheduler-msg-color").value,b=parseInt(d.querySelector(".scheduler-msg-size").value,10)||48;s&&w.push({text:s,color:l,size:b})}),w}function F(m,w,d){let s=document.getElementById("schedulerMessages");if(!s)return;let l=s.children.length;s.insertAdjacentHTML("beforeend",L(l,m||"",w||"#ffffff",d||48))}function A(m){let w=m.closest("[data-msg-index]");w&&w.remove();let d=document.getElementById("schedulerMessages");d&&d.querySelectorAll("[data-msg-index]").forEach(function(s,l){s.dataset.msgIndex=l})}async function y(){let m=N();if(m.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let w=parseInt(document.getElementById("schedulerInterval").value,10);if(!w||w<1||w>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let d=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(d)||d<-1||d>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let s=document.getElementById("schedulerCreateBtn");s&&(s.disabled=!0);try{let l=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:m,interval_sec:w,repeat_count:d})}),b=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await c()):showToast(b.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(l){console.error("Scheduler create error:",l),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{s&&(s.disabled=!1)}}function D(m){return"msg"}function _(m){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[m]||"\u25C8"}function $(m){return m.next_run_at?new Date(m.next_run_at*1e3).getHours():new Date().getHours()}function I(m){if(m.next_run_at){let w=new Date(m.next_run_at*1e3);return String(w.getHours()).padStart(2,"0")+":"+String(w.getMinutes()).padStart(2,"0")}return"--:--"}function H(m){let w=m.id||"job",d=Array.isArray(m.messages)?m.messages.length:null;return"Job #"+w+(d!=null?" \xB7 "+d+" messages":"")}function T(m){let w=document.querySelector("[data-sch-timeline]");if(!w)return;let d=[],s=new Date().getHours();for(let b=0;b<24;b++){let e=b>=Math.max(0,s-1)&&b<=Math.min(23,s+2);d.push('<div class="admin-sch-timeline-hour'+(e?" is-peak":"")+'">'+String(b).padStart(2,"0")+"</div>")}let l=(m||[]).map(function(b){let e=D(b),t=_(e),a=b.state!=="paused";return'<div class="admin-sch-timeline-row'+(a?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+h(I(b))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+e+'">'+t+'</span><span class="admin-sch-evt-desc">'+h(H(b))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(a?" is-on":"")+'">'+ServerI18n.t(a?"uiOn":"uiOff")+"</span></div></div>"}).join("");w.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+d.join("")+"</div></div>"+(l||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+h(ServerI18n.t("noActiveJobs"))+"</div>"))}function g(m){let w=document.querySelector("[data-sch-calendar]");if(!w)return;let d=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],s=new Date,l=(s.getDay()+6)%7,b=new Date(s);b.setDate(s.getDate()-l);let e=d.map(function(a,i){let v=new Date(b);return v.setDate(b.getDate()+i),'<div class="admin-sch-calendar-day-head'+(i===l?" is-today":"")+'">'+h(a)+'<span class="date">'+v.getDate()+"</span></div>"}).join(""),t=[0,1,2,3,4,5,6].map(function(a){return'<div class="admin-sch-calendar-cell">'+(a===l?(m||[]).slice(0,5).map(function(v){let k=D(v),S=_(k);return'<span class="admin-sch-cal-chip is-'+k+'">'+h(I(v))+" "+S+"</span>"}).join(""):"")+"</div>"}).join("");w.innerHTML='<div class="admin-sch-calendar-head">'+e+'</div><div class="admin-sch-calendar-body">'+t+"</div>"}async function c(){let m=document.getElementById("schedulerJobsList"),w=document.getElementById("schedulerJobsCount");if(m)try{let d=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!d.ok){m.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}let s=await d.json();if(!Array.isArray(s.jobs)){m.innerHTML='<div class="admin-emojis-empty">'+h(ServerI18n.t("loadJobsFailed"))+"</div>",w&&(w.textContent="\u2014");return}w&&(w.textContent=ServerI18n.t("schItemCount",{n:s.jobs.length})),T(s.jobs),g(s.jobs);let l=document.querySelector("[data-sch-meta]");if(l){let b=new Date().toISOString().slice(0,10);l.textContent=ServerI18n.t("schTodayMeta",{date:b,n:s.jobs.length})}if(s.jobs.length===0){m.innerHTML="";let b=window.AdminEmpty.render("scheduler");b.dataset.emptyKind="scheduler",m.appendChild(b);return}m.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+h(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+h(ServerI18n.t("schColInterval"))+"</span><span>"+h(ServerI18n.t("schColSent"))+"</span><span>"+h(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+s.jobs.map(M).join("")}catch(d){console.error("Scheduler fetch error:",d),m.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+h(ServerI18n.t("loadJobsError"))+"</div>"}}async function r(m,w){try{let d=await csrfFetch("/admin/scheduler/"+encodeURIComponent(w),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),s=await d.json();d.ok?(showToast(w==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await c()):showToast(s.error||ServerI18n.t("actionFailed"),!1)}catch(d){console.error("Scheduler toggle error:",d),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(m){try{let w=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:m})}),d=await w.json();w.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await c()):showToast(d.error||ServerI18n.t("cancelFailed"),!1)}catch(w){console.error("Scheduler cancel error:",w),showToast(ServerI18n.t("cancelFailed"),!1)}}function n(){let m=document.getElementById("settings-grid");if(!m)return;m.insertAdjacentHTML("beforeend",`
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
    `);let w=document.querySelectorAll("[data-sch-view]");w.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.schView;w.forEach(v=>{v.classList.toggle("is-active",v===e),v.setAttribute("aria-selected",v===e?"true":"false")});let a=document.querySelector("[data-sch-timeline]"),i=document.querySelector("[data-sch-calendar]");a&&(a.hidden=t!=="timeline"),i&&(i.hidden=t!=="calendar")})}),F("","#ffffff",48);let d=document.getElementById("schedulerMessages");d&&d.addEventListener("click",function(e){let t=e.target.closest(".scheduler-remove-msg");t&&A(t)});let s=document.getElementById("schedulerAddMsg");s&&s.addEventListener("click",function(){F("","#ffffff",48)});let l=document.getElementById("schedulerCreateBtn");l&&l.addEventListener("click",y);let b=document.getElementById("schedulerJobsList");b&&b.addEventListener("click",function(e){let t=e.target.closest(".scheduler-job-toggle");if(t){r(t.dataset.jobId,t.dataset.action);return}let a=e.target.closest(".scheduler-job-cancel");a&&o(a.dataset.jobId)}),E&&(clearInterval(E),E=null),C||(C=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(f)},intervalMs:u,tick:c}),window.addEventListener("beforeunload",function(){C&&(C(),C=null)}))}function p(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let m=!1;new MutationObserver(function(){if(document.getElementById("settings-grid")&&!document.getElementById(f)&&!m){m=!0;try{n()}finally{m=!1}}}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})()});var sn=ye(()=>{(function(){"use strict";let h="admin-security-v2-page";var f=window.AdminUtils.escapeHtml;let u=null,E=!1,C=!1,L=0;function U(){let e=t=>ServerI18n.t(t);return`
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
      </div>`}function M(e){if(!e)return 0;let t=0;e.length>=8&&t++,e.length>=12&&t++;let a=(/[a-z]/.test(e)?1:0)+(/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[^\w]/.test(e)?1:0);return a>=2&&t++,a>=3&&t++,Math.min(4,t)}function B(e){let t=document.getElementById("sec2-pw-meter"),a=document.getElementById("sec2-pw-label");if(!t||!a)return;let i=M(e),v=[0,25,50,75,100],k=["","is-bad","is-warn","is-warn","is-good"],S=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];t.style.width=v[i]+"%",t.className=k[i],a.textContent=S[i]}async function N(e){e.preventDefault();let t=document.getElementById("sec2-pw-current").value,a=document.getElementById("sec2-pw-new").value,i=document.getElementById("sec2-pw-confirm").value;if(!t||!a||!i){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(a.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(a!==i){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let v=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:t,new_password:a,confirm_password:i})}),k=await v.json().catch(()=>({}));v.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),B(""),k.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(k.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(v){console.error("Password change error:",v),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function F(){let e=++L,t=document.getElementById("sec2-wsa-status");C=!0,A(!0),t.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let a=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let i=await a.json();if(e!==L)return!1;u={require_token:!!i.require_token,token:i.token||""},document.getElementById("sec2-wsa-toggle").checked=!!i.require_token,document.getElementById("sec2-wsa-token").value=i.token||"",t.textContent=i.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(i.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,_();let v=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=v?new Date(parseInt(v,10)).toLocaleString():"\u2014",!0}catch{return e!==L||(u=null,A(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{e===L&&(C=!1,A(E||!u),E||_())}}function A(e){["toggle","token","save","rotate","copy","reveal"].forEach(t=>{document.getElementById("sec2-wsa-"+t).disabled=e}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",e)}function y(){return E||C||!u?!1:(E=!0,++L,A(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function D(){if(E=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,A(C||!u),u&&!C){let e=document.getElementById("sec2-wsa-status");e.textContent=ServerI18n.t(u.require_token?"security2StatusEnabled":"security2StatusDisabled"),e.className="admin-ui-chip admin-sec-status-chip "+(u.require_token?"is-active":""),_()}}function _(){if(E||C||!u)return;document.getElementById("sec2-wsa-disabled-warning").hidden=u.require_token;let e=document.getElementById("sec2-wsa-toggle").checked!==u.require_token||document.getElementById("sec2-wsa-token").value.trim()!==u.token;document.getElementById("sec2-wsa-draft-hint").hidden=!e}function $(e){return String(e||"").split(/\n+/).map(t=>t.trim()).filter(Boolean)}function I(e){return String(e||"").split(",").map(t=>t.trim().toUpperCase()).filter(Boolean)}function H(e,t){let a=document.getElementById(e);a&&(a.textContent=t==null||t===""?"\u2014":String(t))}async function T(){try{let e=await fetch("/admin/security/settings",{credentials:"same-origin"}),t=await e.json().catch(()=>({}));if(!e.ok)throw new Error(t.error||e.status);let a=t.ip_allowlist||{},i=t.cors||{},v=t.tls||{},k=!!a.enabled,S=Array.isArray(a.entries)?a.entries:[],x=document.getElementById("sec2-ip-dot"),R=document.getElementById("sec2-ip-status-chip"),G=document.getElementById("sec2-ip-toggle"),q=document.getElementById("sec2-ip-entries");x&&(x.classList.toggle("is-lime",k),x.classList.toggle("is-amber",!k)),R&&(R.textContent=k?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),R.className="admin-ui-chip admin-sec-status-chip "+(k?"is-active":"is-warn")),G&&(G.checked=k),q&&(q.value=S.join(`
`)),H("sec2-ip-current",a.current_ip||"\u2014"),H("sec2-ip-status-line",k?ServerI18n.t("security2IpStatusEnabled",{n:S.length}):ServerI18n.t("security2IpStatusDisabled"));let z=Array.isArray(i.origins)?i.origins:["*"],P=Array.isArray(i.methods)?i.methods:[],W=document.getElementById("sec2-cors-origins"),ee=document.getElementById("sec2-cors-credentials"),J=document.getElementById("sec2-cors-methods"),K=document.getElementById("sec2-cors-cred-dot");W&&(W.value=z.join(`
`)),ee&&(ee.checked=!!i.supports_credentials),J&&(J.value=P.join(", ")),K&&(K.classList.toggle("is-lime",!i.supports_credentials),K.classList.toggle("is-amber",!!i.supports_credentials)),H("sec2-cors-origins-line",z.join(", ")),H("sec2-cors-credentials-line",i.supports_credentials?"true":"false"),H("sec2-cors-methods-line",P.join(", "));let Z=v.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:v.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",Z)}catch(e){console.error("Security settings load error:",e);let t=document.getElementById("sec2-ip-status-chip");t&&(t.textContent=ServerI18n.t("security2LoadFailed"),t.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function g(e){let t={};if(e==="ip")t.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:$(document.getElementById("sec2-ip-entries")?.value||"")};else if(e==="cors"){let a=$(document.getElementById("sec2-cors-origins")?.value||"");t.cors={origins:a.length?a:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:I(document.getElementById("sec2-cors-methods")?.value||"")}}try{let a=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json().catch(()=>({}));if(!a.ok){window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await T()}catch(a){console.error("Security settings save error:",a),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function c(){if(E||C||!u)return;let e=document.getElementById("sec2-wsa-toggle").checked,t=document.getElementById("sec2-wsa-token").value.trim();if(e&&!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(y())try{let a=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:e,token:t})}),i=await a.json().catch(()=>({}));a.ok?await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(i.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{D()}}async function r(){if(!(E||C||!u||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&y())try{let t=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),a=await t.json().catch(()=>({}));if(t.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(a.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{D()}}function o(){let e=document.getElementById("sec2-wsa-token").value;if(!e){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function n(){let e=document.getElementById("sec2-wsa-token");e.type=e.type==="password"?"text":"password";let t=e.type==="text",a=document.getElementById("sec2-wsa-reveal");a.setAttribute("aria-pressed",String(t)),a.textContent=ServerI18n.t(t?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),a.setAttribute("aria-label",a.textContent)}async function p(e){if(e==="reset-ws"&&(E||C||!u))return;let t={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:i=>ServerI18n.t("security2ToastApiTokensRevoked",{n:i.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[e];if(!(!t||!await window.HudConfirm?.open({icon:"\u26A0",title:t.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:t.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:t.severity||"warn",body:t.confirm,confirmLabel:t.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(e==="reset-ws"&&!y()))try{let i=await window.csrfFetch(t.url,{method:"POST"}),v=await i.json().catch(()=>({}));if(!i.ok){window.showToast&&showToast(v.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(e==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await F())return}window.showToast&&showToast(t.ok(v),!0)}catch(i){console.error("Security danger action error:",i),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{e==="reset-ws"&&D()}}function m(){let e=document.getElementById("sec2-session-self-line");if(e){let i=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),v=navigator.platform||navigator.userAgentData?.platform||"",k=i?i[0].split("/")[0]:"Browser";e.textContent=ServerI18n.t("security2SessionSelfLine",{browser:k,platform:v})}let t=document.getElementById("sec2-tls-dot"),a=document.getElementById("sec2-tls-status");if(t&&a){let i=location.protocol==="https:";t.classList.add(i?"is-lime":"is-crimson"),a.textContent=i?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function w(){let e=document.getElementById("sec2-pw-form");e&&e.addEventListener("submit",N);let t=document.getElementById("sec2-pw-new");t&&t.addEventListener("input",a=>B(a.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",c),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",r),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",n),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",_),document.getElementById("sec2-wsa-token")?.addEventListener("input",_),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>g("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>g("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(a=>{a.addEventListener("click",()=>{let i=document.querySelector(`[data-sec-disclosure="${a.dataset.secDisclose}"]`);i&&(i.hidden=!i.hidden,a.setAttribute("aria-expanded",i.hidden?"false":"true"),i.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(a=>{a.dataset.secBound!=="1"&&(a.dataset.secBound="1",a.addEventListener("click",()=>p(a.dataset.secDanger)))}),m(),F(),T()}function d(){}function s(){let e=document.querySelector(".admin-dash-grid"),t=document.getElementById(h);if(!e||!t)return;let a=e.dataset.activeRoute||"live",i=e.dataset.activeLeaf||a;t.style.display=a==="system"&&i==="security"?"":"none"}function l(){let e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",U()),w(),s())}function b(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let e=null;function t(){let i=document.querySelector(".admin-dash-grid");!i||e||(e=new MutationObserver(s),e.observe(i,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)?l():void 0,t(),s()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",s),document.addEventListener("admin-panel-rendered",()=>{l(),t(),s()}),t(),l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})()});var on=ye(()=>{(function(){"use strict";let h="admin-backup-v2-page";var f=window.AdminUtils.escapeHtml;function u(){let l=b=>ServerI18n.t(b);return`
      <div id="${h}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}async function E(){try{let l=await fetch("/get_settings",{credentials:"same-origin"});if(!l.ok)throw new Error(l.status);let b=await l.json(),e=["password","token","secret","hash"],t={};Object.keys(b||{}).forEach(S=>{e.some(x=>S.toLowerCase().includes(x))||(t[S]=b[S])});let a=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:t},null,2)],{type:"application/json"}),i=URL.createObjectURL(a),v=new Date().toISOString().replace(/[:.]/g,"-"),k=document.createElement("a");k.href=i,k.download="danmu-settings-"+v+".json",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(i),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(l){console.error("Settings snapshot error:",l),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let C=null;function L(){C=null;let l=document.getElementById("bk2-settings-apply");l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle"))}async function U(){let l=document.getElementById("bk2-settings-upload"),b=document.getElementById("bk2-settings-diff"),e=document.getElementById("bk2-settings-apply"),t=l&&l.files&&l.files[0];if(!t){L(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let a=await t.text(),i=JSON.parse(a),v=i.settings||i;if(!v||typeof v!="object"||Array.isArray(v))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let k=await fetch("/get_settings",{credentials:"same-origin"}),S=k.ok?await k.json():{},x=[];new Set([...Object.keys(S),...Object.keys(v)]).forEach(G=>{let q=JSON.stringify(S[G]),z=JSON.stringify(v[G]);q!==z&&(q===void 0?x.push("+ "+G+": "+z):z===void 0?x.push("- "+G+": "+q):x.push("~ "+G+": "+q+" \u2192 "+z))}),b.textContent=x.length?x.join(`
`):ServerI18n.t("backupNoDiff"),b.hidden=!1,C=v,e&&(e.disabled=!1,e.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:x.length}),!0)}catch(a){console.error("Dry-run error:",a),L(),b.textContent=ServerI18n.t("backupParseFailedDetail",{msg:a&&a.message?a.message:String(a)}),b.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function M(){let l=document.getElementById("bk2-settings-diff"),b=document.getElementById("bk2-settings-apply");if(!C){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let t=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:C})}),a=await t.json().catch(()=>({}));if(!t.ok){l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(a.details||a,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(a.applied||[]).length+" settings"),C=null,b&&(b.disabled=!0,b.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(t){l&&(l.hidden=!1,l.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:t&&t.message?t.message:String(t)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function B(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function N(){let l=document.getElementById("bk2-factory-confirm"),b=document.getElementById("bk2-factory-reset");!l||!b||(l.addEventListener("input",()=>{let e=l.value.trim()==="reset";b.classList.toggle("is-ready",e),b.disabled=!e}),b.addEventListener("click",F))}async function F(){let l=document.getElementById("bk2-factory-confirm"),b=document.getElementById("bk2-factory-reset");if((l?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{b&&(b.disabled=!0);let t=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),b&&(b.disabled=!1);return}l&&(l.value=""),b&&(b.classList.remove("is-ready"),b.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),_()}catch{b&&(b.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function A(){document.getElementById("bk2-settings-download")?.addEventListener("click",E),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",U),document.getElementById("bk2-settings-apply")?.addEventListener("click",M),document.getElementById("bk2-clear-history")?.addEventListener("click",B),document.getElementById("bk2-pack-export")?.addEventListener("click",$),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",o),document.getElementById("bk2-pack-apply")?.addEventListener("click",n),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",p),document.getElementById("bk2-assets-apply")?.addEventListener("click",m),N(),_(),I()}let y=null,D=null;async function _(){let l=document.getElementById("bk2-pack-summary");if(l)try{let b=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!b.ok){l.textContent=ServerI18n.t("backupPreviewUnavailable");return}let e=await b.json(),t=(e.total_bytes/(1024*1024)).toFixed(2);l.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:t})}catch{l.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function $(){let l=document.getElementById("bk2-pack-include-credentials")?.checked;window.location.href="/admin/backup/export"+(l?"?include_credentials=1":""),window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function I(){let l=document.getElementById("bk2-assets-summary");if(l)try{let b=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!b.ok){l.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let e=await b.json(),t=(e.total_bytes/(1024*1024)).toFixed(2);l.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:e.file_count||0,mb:t})}catch{l.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}let T={unsafe_path:"backupSkipUnsafePath",not_backup_file:"backupSkipNotBackupFile",admin_password:"backupSkipAdminPassword",read_failed:"backupSkipReadFailed",plugin_upload_disabled:"backupSkipPluginUploadDisabled",webhook_no_credentials:"backupSkipWebhookNoCredentials",webhook_invalid:"backupSkipWebhookInvalid",credential_invalid:"backupSkipCredentialInvalid",webhook_store_mismatch:"backupSkipWebhookStoreMismatch"},g={webhook_updated:"backupMergeWebhookUpdated",webhook_kept:"backupMergeWebhookKept",unreadable_file_kept:"backupMergeUnreadableKept",fire_token_legacy_ignored:"backupMergeFireTokenLegacy",ws_auth_turned_off:"backupMergeWsAuthOff"};function c(l){return!l||!l.length?[]:[""].concat(ServerI18n.t("backupMergedHeader")).concat(l.map(b=>{let e=b&&g[b.code];return"  "+b.path+" \u2014 "+(e?ServerI18n.t(e):b.reason)}))}function r(l){return(l||[]).map(b=>{let e=b&&T[b.code];return"  "+b.path+" \u2014 "+(e?ServerI18n.t(e):b.reason)})}async function o(){let b=document.getElementById("bk2-pack-upload")?.files?.[0];if(!b){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(b.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let e=new FormData;e.append("file",b);let t=document.getElementById("bk2-pack-diff"),a=document.getElementById("bk2-pack-apply");try{let i=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:e}),v=await i.json().catch(()=>({}));if(!i.ok||!v.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(v.errors||v,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),a&&(a.disabled=!0),y=null;return}if(t){t.hidden=!1;let k=[],S=v.manifest||{};k.push("manifest version: "+(S.version||"?")),k.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),v.credentials==="omitted"&&k.push(ServerI18n.t("backupCredentialsKept")),k.push(""),k.push("Will write "+(v.members?.length||0)+" files:"),(v.members||[]).forEach(x=>{k.push("  "+x.label+"/"+x.path.split("/").slice(1).join("/")+" ("+(x.size||0)+" B)")}),v.skipped?.length&&(k.push(""),k.push("Skipped "+v.skipped.length+" entries:"),k.push(...r(v.skipped))),k.push(...c(v.merged)),t.textContent=k.join(`
`)}y=b,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:v.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:i.message||""}),!1)}}async function n(){if(!y){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let b=new FormData;b.append("file",y);try{let t=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:b})).json().catch(()=>({})),a=document.getElementById("bk2-pack-diff");if(a){a.hidden=!1;let i=[];t.ok?(i.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),i.push(""),i.push("Applied "+(t.applied||0)+" files"),t.restart_required&&i.push("\u26A0 "+ServerI18n.t("backupRestartRequired")),t.skipped?.length&&(i.push("Skipped "+t.skipped.length+" entries:"),i.push(...r(t.skipped))),i.push(...c(t.merged))):(i.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),t.restart_required&&i.push(ServerI18n.t("backupRestartRequired")),i.push(JSON.stringify(t.errors||t,null,2))),a.textContent=i.join(`
`)}if(t.ok){let i=t.restart_required?"backupPackAppliedRestartHint":"backupPackApplied";window.showToast?.(ServerI18n.t(i,{n:t.applied}),!0),y=null;let v=document.getElementById("bk2-pack-apply");v&&(v.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:e.message||""}),!1)}}async function p(){let b=document.getElementById("bk2-assets-upload")?.files?.[0];if(!b){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(b.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let e=new FormData;e.append("file",b);let t=document.getElementById("bk2-assets-diff"),a=document.getElementById("bk2-assets-apply");try{let i=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:e}),v=await i.json().catch(()=>({}));if(!i.ok||!v.ok){t&&(t.hidden=!1,t.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(v.errors||v,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),a&&(a.disabled=!0),D=null;return}if(t){t.hidden=!1;let k=[],S=v.manifest||{};k.push("manifest version: "+(S.version||"?")),k.push("generated_at: "+(S.generated_at?new Date(S.generated_at*1e3).toISOString():"\u2014")),k.push(""),k.push("Will write "+(v.members?.length||0)+" asset files:"),(v.members||[]).forEach(x=>{k.push("  "+x.path+" ("+(x.size||0)+" B)")}),v.skipped?.length&&(k.push(""),k.push("Skipped "+v.skipped.length+" entries:"),v.skipped.forEach(x=>k.push("  "+x.path+" \u2014 "+x.reason))),t.textContent=k.join(`
`)}D=b,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:v.members?.length||0}),!0)}catch(i){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:i.message||""}),!1)}}async function m(){if(!D){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let b=new FormData;b.append("file",D);try{let t=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:b})).json().catch(()=>({})),a=document.getElementById("bk2-assets-diff");if(a){a.hidden=!1;let i=[];t.ok?(i.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),i.push(""),i.push("Applied "+(t.applied||0)+" files"),t.skipped?.length&&i.push("Skipped "+t.skipped.length+" (see above)")):(i.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),i.push(JSON.stringify(t.errors||t,null,2))),a.textContent=i.join(`
`)}if(t.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:t.applied}),!0),D=null;let i=document.getElementById("bk2-assets-apply");i&&(i.disabled=!0),I()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(e){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:e.message||""}),!1)}}function w(){let l=document.querySelector(".admin-dash-grid"),b=document.getElementById(h);if(!l||!b)return;let e=l.dataset.activeLeaf||"dashboard";b.style.display=e==="backup"?"":"none"}function d(){let l=document.getElementById("settings-grid");!l||document.getElementById(h)||(l.insertAdjacentHTML("beforeend",u()),A(),w())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&d(),w()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",w),document.addEventListener("admin-panel-rendered",()=>{d(),w()}),d()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var rn=ye(()=>{(function(){"use strict";let h="admin-broadcast-v2-page",f="/admin/broadcast/status",u="/admin/broadcast/toggle",E={mode:"live"},C=null,L=0,U=!1;async function M(){try{let d=await fetch(f,{credentials:"same-origin"});if(!d.ok)return!1;let s=await d.json();if(s&&(s.mode==="live"||s.mode==="standby"))return C=s.session||null,E=s,!0}catch{}return!1}async function B(){try{let d=await fetch("/overlay_status",{credentials:"same-origin"});d.ok&&(L=(await d.json()).overlay_count||0,U=!0)}catch{}}async function N(){await Promise.all([M(),B()]),F()}function F(){document.dispatchEvent(new CustomEvent("admin-overlay-state",{detail:{live:E.mode==="live",count:U?L:void 0}}))}async function A(d){try{let s=await window.csrfFetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:d})});if(!s.ok){let l=await s.json().catch(()=>({}));throw new Error(l&&l.error?l.error:`HTTP ${s.status}`)}return E=await s.json(),F(),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function y(d,s){return ServerI18n.t(d?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:s})}function D(d){return d?"broadcastBigPause":"broadcastBigResume"}async function _(d){let s=await A(d?"live":"standby");return s&&window.showToast&&window.showToast(ServerI18n.t(d?"broadcastToastResumed":"broadcastToastPaused"),!0),c(),s}async function $(){return await M(),B().then(F),_(E.mode!=="live")}async function I(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:_,toggleDisplay:$,clearScreen:I,statusText:y,toggleKey:D};function H(){let d=s=>ServerI18n.t(s);return`
      <div id="${h}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${D(!1)}">${d(D(!1))}</button>
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
      </div>`}let T=0,g=0;function c(){let d=document.getElementById(h);if(!d)return;let s=E.mode==="live",l=s?"live":"standby",b=(S,x)=>{S&&S.textContent!==x&&(S.textContent=x)};d.dataset.bcState=l;let e=d.querySelector("[data-bc-statedot]");e&&(e.dataset.state=l);let t=d.querySelector("[data-bc-statelabel]");t&&(b(t,y(s,L)),t.dataset.state=l);let a=d.querySelector("[data-bc-big]");a&&(a.dataset.i18n=D(s),b(a,ServerI18n.t(a.dataset.i18n)));let i=C||{},v=!!(i.id||i.name),k=d.querySelector("[data-bc-session-ctx]");k&&(k.hidden=!v),v&&b(d.querySelector("[data-bc-session-id]"),String(i.name||i.id))}function r(){let d=document.getElementById(h);d&&(d.querySelector("[data-bc-big]")?.addEventListener("click",()=>_(E.mode!=="live")),d.querySelector("[data-bc-clear]")?.addEventListener("click",I))}function o(){T||(N().then(c),c(),T=setInterval(()=>{N().then(c)},5e3),g=setInterval(c,1e3))}function n(){T&&(clearInterval(T),T=0),g&&(clearInterval(g),g=0)}function p(){let d=document.querySelector(".admin-dash-grid"),s=document.getElementById(h);if(!d||!s)return;let l=d.dataset.activeLeaf||"dashboard",b=l==="overlay"||l==="broadcast";s.style.display=b?"":"none",b?o():n()}function m(){let d=document.getElementById("settings-grid");!d||document.getElementById(h)||(d.insertAdjacentHTML("afterbegin",H()),r(),p())}function w(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(h)&&m(),p()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",p),document.addEventListener("admin-panel-rendered",()=>{m(),p()}),m()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w()})()});var dn=ye(()=>{(function(){"use strict";var h=window.AdminUtils.escapeHtml;function f(V,te){return window.ServerI18n?window.ServerI18n.t(V,te):V}let u=["keyword","regex","rate_limit","fingerprint"],E={keyword:"ulWord",regex:"ulRegex",rate_limit:"ulRate",fingerprint:"blkMatchFingerprint"},C=["block","replace","allow","review"],L={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"},U={keyword:["block","allow","review"],regex:["block","replace","allow","review"],rate_limit:["block"],fingerprint:["block"]},M={keyword:"modAddWordPlaceholder",regex:"blkPhRegex",rate_limit:"blkPhRate",fingerprint:"blkPhFingerprint"},B=[{value:"permanent",key:"msgDrawerPermanent"},{value:"session",key:"blkLifeSession"},{value:"3600",key:"msgDrawerDurationHour1"},{value:"86400",key:"msgDrawerDurationHour24"},{value:"604800",key:"msgDrawerDurationDay7"}];function N(V){switch(V.type){case"word":return{match:"keyword",action:"block"};case"keyword":return{match:"keyword",action:V.action};case"replace":return{match:"regex",action:"replace"};case"regex":return{match:"regex",action:V.action};case"rate_limit":return{match:"rate_limit",action:"block"};case"fingerprint":return{match:"fingerprint",action:"block"};default:return{match:"keyword",action:V.action||"block"}}}function F(V,te){return V==="keyword"?te==="block"?"word":"keyword":V==="regex"?te==="replace"?"replace":"regex":V}function A(V){return V==="permanent"||V==="session"?{lifetime:V}:V==="keep"?{lifetime:"timed"}:{lifetime:"timed",duration_sec:parseInt(V,10)}}function y(V){let te=new Date(V*1e3),ae=ke=>String(ke).padStart(2,"0"),de=`${ae(te.getHours())}:${ae(te.getMinutes())}`,he=new Date;return te.toDateString()===he.toDateString()?de:`${te.getMonth()+1}/${te.getDate()} ${de}`}function D(V){return V.lifetime==="session"?f("blkLifeSession"):V.lifetime==="timed"&&V.expires_at?f("blkLifeUntil",{time:y(V.expires_at)}):f("msgDrawerPermanent")}function _(V){return V.type==="rate_limit"?f("blkRateSummary",{n:V.max_count||5,s:V.window_sec||60}):V.type==="replace"?`${V.pattern}  \u2192  ${V.replacement||""}`:V.pattern}let $=[{id:"url",key:"fltPresetUrl",pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",key:"fltPresetAllcaps",pattern:"^(?-i:(?!.*[a-z])(?=.*[A-Z][A-Z][A-Z])(?:.*?[A-Z]){8})",action:"review"},{id:"repeat",key:"fltPresetRepeat",pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",key:"blkPresetEmojiOnly",pattern:"^(?!\\s*$)(?:[\\U0001F000-\\U0001FAFF]\\uFE0F?|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|[\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u21AA\\u2300-\\u23FF\\u25AA-\\u25FE\\u2600-\\u27BF\\u2B00-\\u2BFF\\u3030\\u303D\\u3297\\u3299]\\uFE0F|[0-9#*]\\uFE0F?\\u20E3|\\u200D|\\s)+$",action:"block"}];function I(V,te){return te.find(ae=>ae.type==="regex"&&ae.pattern===V.pattern&&ae.action===V.action)}let H=[],T="all",g=null,c=!1,r=new Set,o=0,n=0,p=!0;function m(V,te,ae){return V.map(de=>`<option value="${h(de)}"${de===ae?" selected":""}>${h(te(de))}</option>`).join("")}function w(){return`
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
              ${m(u,V=>f(E[V]),"keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${h(f("blkActionLabel"))}">
              ${m(C,V=>f(L[V]),"block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${h(f("blkLifetimeLabel"))}">
              ${B.map(V=>`<option value="${V.value}">${h(f(V.key))}</option>`).join("")}
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
          ${$.map(V=>`
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${V.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${h(f(V.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(u).map(V=>`
              <button type="button" class="seg-item${V==="all"?" is-active":""}" data-scope="${V}">
                ${h(f(V==="all"?"fltChipAll":E[V]))}
                <span class="admin-block-scope-count" data-scope-count="${V}">0</span>
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
      </div>`}function d(V){let te=N(V),ae=h(V.id);return`
      <div class="hud-rule-row admin-block-row${V.enabled?"":" is-off"}" data-rule-id="${ae}" data-rule-type="${h(V.type)}"
        style="${V.enabled?"":"opacity:0.45"}">
        <span class="admin-block-row__pattern">${h(_(V))}</span>
        <span class="admin-block-row__meta">
          <span>${h(f(E[te.match]))}</span>
          <span class="admin-block-row__action" data-action="${h(te.action)}">${h(f(L[te.action]||"fltActBlock"))}</span>
          <span>${h(D(V))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${h(V.enabled?f("enabled"):f("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${ae}" ${V.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${V.enabled?"is-on":"is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${ae}">${h(f("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${ae}" title="${h(f("deleteRule"))}" aria-label="${h(f("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`}function s(){let V=document.getElementById("blockRuleList");if(!V)return;let te={all:H.length,keyword:0,regex:0,rate_limit:0,fingerprint:0};H.forEach(ke=>{te[N(ke).match]+=1}),Object.keys(te).forEach(ke=>{let $e=document.querySelector(`[data-scope-count="${ke}"]`);$e&&($e.textContent=String(te[ke]))}),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("moderation","blacklist",H.length||"");let ae=H.filter(ke=>ke.lifetime==="session").length,de=document.getElementById("blockRuleClearSession");de&&(de.hidden=ae===0);let he=T==="all"?H:H.filter(ke=>N(ke).match===T);V.innerHTML=he.map(d).join(""),l(he.length===0),b()}function l(V){let te=document.querySelector("[data-block-list-group]"),ae=document.querySelector("[data-block-empty]");if(!(!te||!ae)&&(te.hidden=V,ae.hidden=!V,ae.innerHTML="",!!V))if(window.AdminEmpty){let de=window.AdminEmpty.renderCustom({icon:"\u2298",title:f("blkEmpty"),accent:"var(--color-ink-error)"});de.dataset.emptyKind="filters",ae.appendChild(de)}else ae.innerHTML=`<div class="admin-block-empty" data-empty-kind="filters">${h(f("blkEmpty"))}</div>`}function b(){$.forEach(V=>{let te=document.querySelector(`[data-flt-quick-id="${V.id}"]`);if(!te)return;let ae=I(V,H),de=!!ae&&ae.enabled!==!1;te.classList.toggle("is-active",de),te.setAttribute("aria-pressed",de?"true":"false")})}let e=0;async function t(){let V=++e;try{let te=await window.csrfFetch("/admin/filters/list");if(!te.ok)throw new Error("HTTP "+te.status);let ae=await te.json();if(V!==e)return;H=Array.isArray(ae.rules)?ae.rules:[],p=ae.session_live!==!1}catch(te){if(V!==e)return;console.error("Failed to fetch block rules:",te),window.showToast(f("fetchFiltersFailed"),!1)}s(),a()}function a(){let V=i("blockRuleLifetime");if(!V)return;let te=V.querySelector('option[value="session"]'),ae=p||!!(g&&g.lifetime==="session");te&&(te.hidden=!ae,te.disabled=!ae),!ae&&V.value==="session"&&(V.value="permanent")}function i(V){return document.getElementById(V)}function v(){let V=i("blockRuleMatch").value,te=i("blockRuleAction"),ae=U[V];Array.from(te.options).forEach(de=>{de.disabled=ae.indexOf(de.value)===-1}),ae.indexOf(te.value)===-1&&(te.value=ae[0]),te.disabled=ae.length===1,i("blockRuleInput").placeholder=f(M[V]),i("blockRuleReplacement").hidden=te.value!=="replace",document.querySelectorAll("[data-block-rate]").forEach(de=>{de.hidden=V!=="rate_limit"})}function k(){let V=i("blockRuleMatch").value,te=i("blockRuleAction").value,ae=i("blockRuleInput").value||"",de={type:F(V,te),pattern:V==="regex"?ae:ae.trim(),action:te,priority:parseInt(i("blockRulePriority").value,10)||0};return g&&g.type===de.type&&(de.type==="fingerprint"||de.type==="rate_limit")&&(de.action=g.action||te),de.type==="replace"&&(de.replacement=i("blockRuleReplacement").value||""),de.type==="rate_limit"&&(de.max_count=parseInt(i("blockRuleMaxCount").value,10)||5,de.window_sec=parseFloat(i("blockRuleWindowSec").value)||60),Object.assign(de,A(i("blockRuleLifetime").value))}function S(V,te){let ae=V&&V.code;return f(ae==="duplicate"?"blkErrDuplicate":ae==="invalid_regex"?"blkErrRegex":ae==="unsafe_regex"?"blkErrUnsafe":ae==="regex_timeout"?"blkErrTimeout":ae==="no_session"?"blkErrNoSession":ae==="save_failed"?"blkErrNotSaved":ae==="conflict"?"blkErrConflict":ae==="regex_busy"?"blkErrBusy":te)}function x(){o+=1,g=null,i("blockRuleInput").value="",i("blockRuleReplacement").value="",i("blockRuleMatch").value="keyword",i("blockRuleAction").value="block";let V=i("blockRuleLifetime"),te=V.querySelector('option[value="keep"]');te&&te.remove(),V.value="permanent",i("blockRulePriority").value="0",i("blockRuleSubmit").textContent=f("modAddWordBtn"),i("blockRuleCancel").hidden=!0,v(),a()}function R(V){o+=1,g=V;let te=N(V);i("blockRuleMatch").value=te.match,v(),i("blockRuleAction").value=te.action,i("blockRuleInput").value=V.pattern||"",i("blockRuleReplacement").value=V.replacement||"",i("blockRuleMaxCount").value=String(V.max_count||5),i("blockRuleWindowSec").value=String(V.window_sec||60),i("blockRulePriority").value=String(V.priority||0);let ae=i("blockRuleLifetime"),de=ae.querySelector('option[value="keep"]');if(de&&de.remove(),V.lifetime==="timed"&&V.expires_at){let he=document.createElement("option");he.value="keep",he.textContent=D(V),ae.insertBefore(he,ae.firstChild),ae.value="keep"}else ae.value=V.lifetime==="session"?"session":"permanent";v(),a(),i("blockRuleSubmit").textContent=f("blkSave"),i("blockRuleCancel").hidden=!1,i("blockRuleInput").focus()}async function G(){if(c)return;let V=k();if(!V.pattern&&V.type!=="rate_limit"){window.showToast(f("patternRequired"),!1),i("blockRuleInput").focus();return}let te=g,ae=o,de=()=>ae===o,he=te?"/admin/filters/update":"/admin/filters/add",ke=te?{rule_id:te.id,updates:V}:V,$e=i("blockRuleSubmit"),pe=++n;c=!0,te&&r.add(te.id),$e&&($e.disabled=!0);try{let xe=await window.csrfFetch(he,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)}),Ie=await xe.json().catch(()=>({}));if(te&&xe.status===404){de()&&x(),await t(),window.showToast(f("blkErrGone"),!1);return}if(!xe.ok){window.showToast(S(Ie,te?"updateRuleFailed":"addRuleFailed"),!1);return}de()&&x(),await t(),te?window.showToast(f("blkUpdated"),!0):window.AdminQuickAction&&Ie.rule_id?window.AdminQuickAction.fire({label:f("blkAdded",{pattern:V.pattern||_(V)}),undo:{label:f("histUndo"),run:async()=>{if(!await q(Ie.rule_id))throw new Error("remove failed")}}}):window.showToast(f("ruleAdded"),!0)}catch(xe){console.error("Save block rule error:",xe),window.showToast(f(te?"updateRuleFailed":"addRuleFailed"),!1)}finally{te&&r.delete(te.id),pe===n&&(c=!1),$e&&($e.disabled=!1)}}async function q(V){let te=await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:V})});return te.ok&&await t(),te.ok}async function z(V){let te=H.find(de=>de.id===V);if(await window.HudConfirm?.open({icon:"\u2298",title:f("filtersDeleteTitle"),severity:"danger",bodyText:te?_(te):"",confirmLabel:f("filtersDeleteConfirm")}))try{await q(V)?(g&&g.id===V&&x(),window.showToast(f("ruleDeleted"),!0)):window.showToast(f("deleteRuleFailed"),!1)}catch(de){console.error("Delete block rule error:",de),window.showToast(f("deleteRuleFailed"),!1)}}let P={};async function W(V,te){try{let ae=await window.csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:V,updates:{enabled:te}})}),de=await ae.json().catch(()=>({}));if(!ae.ok)return window.showToast(S(de,"updateRuleFailed"),!1),!1;let he=H.find(ke=>ke.id===V);return he&&(he.enabled=te),b(),!0}catch(ae){return console.error("Toggle block rule error:",ae),window.showToast(f("updateRuleFailed"),!1),!1}}function ee(V,te){let ae=Array.from(document.querySelectorAll("#blockRuleList .admin-block-row")).find(ke=>ke.dataset.ruleId===V);if(!ae)return;let de=ae.querySelector(".filter-toggle-cb");de&&(de.checked=te);let he=ae.querySelector(".admin-filter-toggle-dot");he&&(he.classList.toggle("is-on",te),he.classList.toggle("is-off",!te)),ae.classList.toggle("is-off",!te),ae.style.opacity=te?"":"0.45"}async function J(V,te){let ae=P[V]||(P[V]={want:te,busy:!1});if(ae.want=te,ae.busy)return null;ae.busy=!0;try{let de;do if(de=ae.want,!await W(V,de))return await t(),!1;while(ae.want!==de);return ee(V,de),!0}finally{delete P[V]}}async function K(){let V=H.filter(ae=>ae.lifetime==="session").length;if(await window.HudConfirm?.open({icon:"\u2298",title:f("blkClearSessionTitle"),severity:"danger",bodyText:f("blkClearSessionBody",{n:V}),confirmLabel:f("blkClearSession")}))try{let ae=await window.csrfFetch("/admin/filters/clear-session",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),de=await ae.json().catch(()=>({}));if(!ae.ok)throw new Error("HTTP "+ae.status);window.showToast(f("blkClearedSession",{n:de.removed||0}),!0),await t()}catch(ae){console.error("Clear session rules error:",ae),window.showToast(f("deleteRuleFailed"),!1)}}async function Z(V){let te=$.find(he=>he.id===V);if(!te)return;let ae=f(te.key),de=I(te,H);if(de&&de.enabled===!1){await J(de.id,!0)&&(window.showToast(f("filtersToastEnabled",{label:ae}),!0),await t());return}if(de){let he=await q(de.id).catch(()=>!1);window.showToast(he?f("filtersToastDisabled",{label:ae}):f("filtersToastDisableFailed"),he);return}try{let he=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",pattern:te.pattern,action:te.action,priority:50,lifetime:p?"session":"permanent"})});if(!he.ok){let ke=await he.json().catch(()=>({}));window.showToast(f("filtersToastEnableFailed",{msg:S(ke,"addRuleFailed")}),!1);return}window.showToast(f("filtersToastEnabled",{label:ae}),!0),await t()}catch{window.showToast(f("filtersToastEnableFailed",{msg:""}),!1)}}async function j(){let V=i("filterTestText"),te=i("filterTestResult"),ae=(V.value||"").trim();if(!ae){window.showToast(f("sampleTextRequired"),!1),V.focus();return}let de=k();if(!de.pattern&&de.type!=="rate_limit"){window.showToast(f("patternRequired"),!1),i("blockRuleInput").focus();return}te.textContent=f("testing");try{let he=await window.csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:de,text:ae})}),ke=await he.json().catch(()=>({}));if(!he.ok){te.textContent=S(ke,"testError");return}let $e={block:f("blocked"),replace:f("replaced"),allow:f("allowed"),review:f("fltActReview")}[ke.action]||f("noMatch");te.dataset.verdict=ke.action||"pass",te.textContent=ke.action==="replace"?`${$e} \u2192 ${ke.text||""}`:$e}catch(he){console.error("Test block rule error:",he),te.textContent=f("testError")}}let Q=6,ne=[],re=0,le=null;function ue(V){let te=new Date(V*1e3),ae=de=>String(de).padStart(2,"0");return`${ae(te.getHours())}:${ae(te.getMinutes())}:${ae(te.getSeconds())}`}let me={BLOCK:"fltActBlock",REPLACE:"fltActReplace",MASK:"fltActReplace",ALLOW:"fltActAllow",REVIEW:"fltActReview"};function Te(){let V=i("filterLiveLog");if(V){if(ne.length===0){V.innerHTML=`<div class="admin-block-empty">${h(f("fltNoEvents"))}</div>`;return}V.innerHTML=ne.map(te=>{let ae=String(te.action||"").toUpperCase(),de=me[ae]?f(me[ae]):ae,he=String(te.source||"").slice(0,16);return`<div class="admin-filter-log-row" data-action="${h(ae)}">
        <span class="admin-filter-log-row__time">${h(ue(te.ts))}</span>
        <span class="admin-filter-log-row__action">${h(de)}</span>
        <span class="admin-filter-log-row__text">\u300C${h(te.text_excerpt||"")}\u300D<span class="admin-filter-log-row__rule"> \u2014 ${h(f("blkLogRule",{pattern:te.pattern||""}))}${he?" \xB7 "+h(he):""}</span></span>
      </div>`}).join("")}}async function Ee(){try{let V=await fetch(`/admin/filters/events?since=${re}`,{credentials:"same-origin"});if(!V.ok)return;let te=await V.json();if(!Array.isArray(te.events)||te.events.length===0)return;for(ne.unshift(...te.events);ne.length>Q;)ne.pop();re=te.latest_seq||re,Te()}catch{}}function Le(V){i("blockRuleMatch").addEventListener("change",v),i("blockRuleAction").addEventListener("change",v),i("blockRuleSubmit").addEventListener("click",G),i("blockRuleCancel").addEventListener("click",x),i("blockRuleInput").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),G())}),i("filterTestBtn").addEventListener("click",j),i("filterTestText").addEventListener("keydown",de=>{de.key==="Enter"&&!de.isComposing&&(de.preventDefault(),j())}),i("blockRuleClearSession").addEventListener("click",K),V.querySelector("[data-flt-quick]").addEventListener("click",de=>{let he=de.target.closest("[data-flt-quick-id]");he&&Z(he.dataset.fltQuickId)});let te=i("blockRuleScope");te.addEventListener("click",de=>{let he=de.target.closest("[data-scope]");he&&(T=he.dataset.scope,te.querySelectorAll("[data-scope]").forEach(ke=>ke.classList.toggle("is-active",ke===he)),s())});let ae=i("blockRuleList");ae.addEventListener("change",de=>{let he=de.target.closest(".filter-toggle-cb");if(!he)return;J(he.dataset.ruleId,he.checked);let ke=he.closest(".admin-block-row"),$e=ke?.querySelector(".admin-filter-toggle-dot");$e&&($e.classList.toggle("is-on",he.checked),$e.classList.toggle("is-off",!he.checked)),ke&&(ke.style.opacity=he.checked?"":"0.45")}),ae.addEventListener("click",de=>{let he=de.target.closest(".filter-delete-btn");if(he)return z(he.dataset.ruleId);let ke=de.target.closest(".block-rule-edit");if(ke){let $e=H.find(pe=>pe.id===ke.dataset.ruleId);$e&&!r.has($e.id)&&R($e)}}),le&&le(),le=window.AdminUtils.pollWhileVisible({el:()=>i("filterLiveLog"),intervalMs:4e3,tick:Ee})}function oe(){let V=document.getElementById("settings-grid");if(!V)return;g=null,T="all",c=!1,n+=1,o+=1,V.insertAdjacentHTML("beforeend",w());let te=document.getElementById("sec-blacklist");Le(te),v(),Te(),t()}let se=!1;document.addEventListener("admin-route-applied",V=>{let te=!!(V.detail&&V.detail.route==="moderation"&&V.detail.leaf==="blacklist");te&&!se&&document.getElementById("blockRuleList")&&t(),se=te});function ce(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let V=()=>document.getElementById("settings-grid")&&!document.getElementById("sec-blacklist");new MutationObserver(()=>{V()&&oe()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),V()&&oe()}window.AdminBlockRules={viewOf:N,typeFor:F,lifetimePayload:A,ACTIONS_FOR_MATCH:U,QUICK:$,refresh:t},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce()})()});var ln=ye(()=>{(function(){"use strict";var h=window.AdminUtils.loadDetailsState,f=window.AdminUtils.saveDetailsState,u=window.AdminUtils.escapeHtml,E=1e4,C=null;function L($){var I=h();return I[$]!==void 0?I[$]:!1}function U(){return`
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
    `}function M($){var I=ServerI18n.t("fingerprintState_"+$),H="";return $==="blocked"?H=" is-crimson":$==="flagged"?H=" is-amber":$==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+u(I)+"</span>"}function B($){if(!$)return"\u2014";try{var I=new Date($*1e3);return I.toLocaleTimeString()}catch{return String($)}}function N($){var I=document.getElementById("adminFingerprintTableWrap");if(I){if(!$||$.length===0){I.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",I.appendChild(H);return}var T='<div class="admin-fp-row admin-fp-row--head"><span>'+u(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+u(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+u(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",g=$.map(function(c){var r=c.blocked|0,o=c.hash||"",n=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+u(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+u(o)+'">fp:'+u(n)+'</span><span class="admin-fp-ip admin-identity-ip">'+u(c.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+u(c.ua||"")+'">'+u(c.ua||"\u2014")+'</span><span class="admin-fp-num">'+(c.msgs|0)+'</span><span class="admin-fp-num">'+(c.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(r>0?"is-crimson":"is-mute")+'">'+r+"</span><span>"+M(c.state||"active")+'</span><span class="admin-fp-ts">'+u(B(c.last_seen))+"</span></div>"}).join("");I.innerHTML=T+g}}async function F(){var $=document.getElementById("adminFingerprintCount");try{var I=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!I.ok)throw new Error("HTTP "+I.status);var H=await I.json(),T=H.records||[];if(N(T),$){var g=H.count||T.length,c=H.flagged!=null?H.flagged:T.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;$.textContent=ServerI18n.t("fpCountSummary",{unique:g,flagged:c})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var r=document.getElementById("adminFingerprintTableWrap");r&&(r.innerHTML='<span class="hud-pill is-danger">'+u(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function A(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var I=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(I.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await F();else{var H=await I.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(T){console.error("[admin-fingerprints] reset error:",T),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function y(){D(),C=setInterval(function(){var $=document.getElementById("sec-fingerprints");$&&$.offsetParent!==null&&F()},E)}function D(){C&&(clearInterval(C),C=null)}function _(){var $=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if($){$.insertAdjacentHTML("beforeend",U());var I=document.getElementById("adminFingerprintRefreshBtn");I&&I.addEventListener("click",F);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",A),F(),y()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var $=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&_()});$.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var I=document.getElementById("moderation-grid")||document.getElementById("settings-grid");I&&!document.getElementById("sec-fingerprints")&&_()}})})()});var cn=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var h=window.AdminUtils.escapeHtml;let f=(s,l)=>{let b=window.ServerI18n?.t?.(s);return b&&b!==s?b:l||s},u=!1;new MutationObserver(()=>{let s=document.getElementById("settings-grid");if(s&&!(document.getElementById("sec-widgets")||u)){u=!0;try{C(s)}finally{u=!1}}}).observe(document.body,{childList:!0,subtree:!0});function C(s){let l=document.createElement("div");l.id="sec-widgets",l.className="admin-widgets-page hud-page-stack lg:col-span-2";let b=location.origin+"/overlay";l.dataset.tpl="B",l.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${h(b)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${h(f("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${h(f("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,s.appendChild(l);let e=document.getElementById("widget-add"),t=l.querySelector("[data-ow-addmenu]");e.addEventListener("click",a=>{a.stopPropagation(),t.hidden=!t.hidden}),t.addEventListener("click",a=>{let i=a.target.closest("[data-ow-add]")?.dataset.owAdd;i&&(t.hidden=!0,M(i))}),document.addEventListener("click",a=>{!t.hidden&&!a.target.closest(".admin-ui-page-actions")&&(t.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",A),l.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let a=l.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(a).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),U()}async function L(s,l="GET",b=null){let e={method:l,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(b){let a=document.querySelector('meta[name="csrf-token"]');a&&(e.headers["X-CSRF-Token"]=a.content),e.body=JSON.stringify(b)}return(await fetch("/admin/widgets/"+s,e)).json()}async function U(){try{let s=await L("list");D(s.widgets||[])}catch(s){console.error("[admin-widgets] Load failed:",s)}}async function M(s){let l={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await L("create","POST",{type:s,config:l[s]||{}}),U()}catch(b){console.error("[admin-widgets] Create failed:",b)}}async function B(s){let l=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:l,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await L("delete","POST",{id:s}),U()}catch(e){console.error("[admin-widgets] Delete failed:",e)}}async function N(s,l){try{await L("update","POST",{id:s,config:l}),U()}catch(b){console.error("[admin-widgets] Update failed:",b)}}async function F(s,l,b){try{await L("score","POST",{id:s,team_index:l,delta:b}),U()}catch(e){console.error("[admin-widgets] Score update failed:",e)}}async function A(){let s=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:s,confirmLabel:ServerI18n.t("clearAll")}))try{await L("clear","POST",{}),U()}catch(b){console.error("[admin-widgets] Clear failed:",b)}}let y=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function D(s){let l=document.getElementById("widgets-list");if(l){if(l.innerHTML="",o(s),s.length===0){let b=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});b.dataset.emptyKind="widgets",l.appendChild(b);return}s.forEach(b=>{l.appendChild(T(b))})}}let _={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function $(s){return f("widgetPos_"+String(s||"top-left").replace("-","_"),s||"")}function I(s){let l=s.config||{},b="";s.type==="scoreboard"?b=(l.teams||[]).map(t=>`${t.name} ${t.score}`).join(" \xB7 "):s.type==="ticker"?(b=(l.messages||[])[0]||"",b&&(b=`\u300C${b}\u300D`)):s.type==="label"&&(b=l.text?`\u300C${l.text}\u300D`:"");let e=$(s.position);return b?`${b} \xB7 ${e}`:e}function H(s){return s==="scoreboard"?f("widgetScoreboard"):s==="ticker"?f("widgetTicker"):s==="label"?f("widgetLabel"):s}function T(s){let l=document.createElement("div");l.className="admin-widget-card",s.visible!==!1&&l.classList.add("is-on");let b=document.createElement("button");b.type="button",b.className="admin-widget-summary",b.setAttribute("aria-expanded","false"),b.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+h(_[s.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+h(H(s.type))+'</span><span class="admin-widget-summary-text">'+h(I(s))+"</span>"+(s.visible===!1?'<span class="admin-widget-summary-off">'+h(f("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',l.appendChild(b);let e=document.createElement("div");e.className="admin-widget-card-body",e.hidden=!0,b.addEventListener("click",()=>{e.hidden=!e.hidden,b.setAttribute("aria-expanded",e.hidden?"false":"true"),l.classList.toggle("is-open",!e.hidden)});let t=d(f("widgetPosition"),y,s.position,k=>N(s.id,{position:k}));e.appendChild(t),s.type==="scoreboard"?n(e,s):s.type==="ticker"?p(e,s):s.type==="label"&&m(e,s);let a=document.createElement("div");a.className="admin-widget-card-actions";let i=document.createElement("button");i.type="button",i.className="admin-ui-action admin-widget-card-action",i.textContent=s.visible?f("widgetHide"):f("widgetShow"),i.addEventListener("click",()=>N(s.id,{visible:!s.visible})),a.appendChild(i);let v=document.createElement("button");return v.type="button",v.className="admin-ui-action is-danger admin-widget-card-action",v.textContent=f("remove"),v.addEventListener("click",()=>B(s.id)),a.appendChild(v),e.appendChild(a),l.appendChild(e),l}let g={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function c(s,l){let b="top-left",e=1/0;for(let[t,[a,i]]of Object.entries(g)){let v=s-a/2,k=l-i/2,S=v*v+k*k;S<e&&(e=S,b=t)}return b}function r(s){let l=s.config||{};return s.type==="scoreboard"?(l.teams||[]).map(b=>`${b.name} ${b.score}`).join("  ")||f("widgetScoreboard"):s.type==="ticker"?(l.messages||[])[0]||f("widgetTicker"):s.type==="label"?l.text||f("widgetLabel"):s.type}function o(s){let l=document.querySelector("[data-ow-stage]");if(l){if(l.innerHTML="",!s.length){l.innerHTML='<span class="admin-ow-stage-empty">'+h(f("widgetsStageEmpty"))+"</span>";return}s.forEach(b=>{let e=document.createElement("div");e.className="admin-ow-box is-"+(b.position||"top-left"),b.visible===!1&&e.classList.add("is-off"),e.dataset.owBox=b.id,e.draggable=!0,e.textContent=r(b),e.title=H(b.type),e.addEventListener("dragend",t=>{let a=l.getBoundingClientRect();if(!a.width||!a.height)return;let i=(t.clientX-a.left)/a.width,v=(t.clientY-a.top)/a.height;if(i<0||i>1||v<0||v>1)return;let k=c(i,v);k!==b.position&&N(b.id,{position:k})}),l.appendChild(e)})}}function n(s,l){let b=l.config||{},e=w(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",b.title||"",t=>N(l.id,{title:t}));s.appendChild(e),(b.teams||[]).forEach((t,a)=>{let i=document.createElement("div");i.className="admin-widget-team";let v=document.createElement("input");v.type="color",v.value=t.color||"#38bdf8",v.className="admin-widget-team-color",v.addEventListener("change",()=>{let G=[...b.teams];G[a]={...G[a],color:v.value},N(l.id,{teams:G})}),i.appendChild(v);let k=document.createElement("input");k.type="text",k.value=t.name,k.className="admin-widget-input",k.addEventListener("change",()=>{let G=[...b.teams];G[a]={...G[a],name:k.value},N(l.id,{teams:G})}),i.appendChild(k);let S=document.createElement("span");S.className="admin-widget-team-score",S.textContent=t.score,i.appendChild(S);let x=document.createElement("button");x.type="button",x.className="admin-widget-step",x.textContent="\u2212",x.addEventListener("click",()=>F(l.id,a,-1)),i.appendChild(x);let R=document.createElement("button");R.type="button",R.className="admin-widget-step",R.textContent="+",R.addEventListener("click",()=>F(l.id,a,1)),i.appendChild(R),s.appendChild(i)})}function p(s,l){let b=l.config||{},e=document.createElement("div");e.className="admin-widget-row";let t=document.createElement("span");t.className="lbl",t.textContent=window.ServerI18n?.t?.("speed")||"SPEED",e.appendChild(t);let a=document.createElement("input");a.type="range",a.min="10",a.max="200",a.value=b.speed||60,a.style.flex="1",a.addEventListener("change",()=>{N(l.id,{speed:parseInt(a.value)})}),e.appendChild(a);let i=document.createElement("span");i.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",i.textContent=a.value,a.addEventListener("input",()=>{i.textContent=a.value}),e.appendChild(i),s.appendChild(e);let v=document.createElement("div");v.className="admin-widget-row",v.style.alignItems="flex-start";let k=document.createElement("span");k.className="lbl",k.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",v.appendChild(k);let S=document.createElement("textarea");S.className="admin-widget-textarea",S.value=(b.messages||[]).join(`
`),S.rows=3,S.placeholder=ServerI18n.t("widgetTickerPlaceholder"),S.addEventListener("change",()=>{let x=S.value.split(`
`).filter(R=>R.trim());N(l.id,{messages:x})}),v.appendChild(S),s.appendChild(v)}function m(s,l){let b=l.config||{};s.appendChild(w(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",b.text||"",e=>N(l.id,{text:e}))),s.appendChild(w(window.ServerI18n?.t?.("size")||"SIZE",String(b.fontSize||24),e=>N(l.id,{fontSize:parseInt(e)||24}),"number"))}function w(s,l,b,e="text"){let t=document.createElement("div");t.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,t.appendChild(a);let i=document.createElement("input");return i.type=e,i.value=l,i.className="admin-widget-input",i.addEventListener("change",()=>b(i.value)),t.appendChild(i),t}function d(s,l,b,e){let t=document.createElement("div");t.className="admin-widget-row";let a=document.createElement("span");a.className="lbl",a.textContent=s,t.appendChild(a);let i=document.createElement("select");return i.className="admin-widget-select",l.forEach(v=>{let k=document.createElement("option");k.value=v,k.textContent=v,v===b&&(k.selected=!0),i.appendChild(k)}),i.addEventListener("change",()=>e(i.value)),t.appendChild(i),t}})})()});var un=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let h=["live","polls","moderation","viewer","widgets","effects","assets","system","history","notifications","audience","overlay","about"];function f(){let q=window.ADMIN_ROUTES||{},z={};return h.forEach(P=>{let W=q[P];W&&W.title&&(z[P]={title:W.title,kicker:W.kicker||P.toUpperCase()})}),z}let u=[{labelKey:"styleThemePacks",route:"viewer/themes",section:"sec-themes"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer/defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerTheme",route:"viewer/page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerLimits",route:"viewer/limits",section:"sec-viewer-config-limits"},{labelKey:"overlayLayoutFoldTitle",route:"overlay",section:"sec-overlay-layout"},{labelKey:"cmdkSettingBlacklist",route:"moderation/blacklist",section:"sec-blacklist"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"system/security",section:"admin-security-v2-page"},{labelKey:"adminRouteTitle_backup",route:"system/backup",section:"admin-backup-v2-page"},{labelKey:"adminRouteTitle_integrations",route:"system/integrations",section:"sec-extensions-overview"},{labelKey:"tabExtPlugins",route:"system/plugins",section:"sec-plugins"},{labelKey:"tabExtApiKeys",route:"system/api-tokens",section:"sec-api-tokens-overview"},{labelKey:"adminRouteTitle_firetoken",route:"system/firetoken",section:"sec-firetoken-overview"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{labelKey:"tabExtWebhooks",route:"system/webhooks",section:"sec-webhooks"},{labelKey:"tabExtScheduler",route:"system/scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],E=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function C(){let q=document.querySelector('meta[name="csrf-token"]');return q&&q.content||""}function L(q,z){if(typeof window.csrfFetch=="function")return window.csrfFetch(q,z);let P=Object.assign({credentials:"same-origin"},z||{}),W=new Headers(z&&z.headers||{});return W.set("X-CSRF-Token",C()),P.headers=W,fetch(q,P)}function U(q,z){typeof window.showToast=="function"&&window.showToast(q,z!==!1)}let M=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>L("/effects/reload",{method:"POST"}).then(q=>U(q.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),q.ok)).catch(()=>U(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"broadcastBigPause",subKey:"adminNavOverlay",action:()=>window.AdminOverlayControl?.setDisplay(!1)},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>L("/admin/poll/reset",{method:"POST"}).then(q=>U(q.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),q.ok)).catch(()=>U(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return L("/admin/history/clear",{method:"POST"}).then(z=>U(z.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),z.ok)).catch(()=>U(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],B=null,N=null,F=null,A="",y=[],D=[],_=0,$=null,I=null,H=null,T=15e3;function g(q){return String(q??"").replace(/[&<>"']/g,z=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[z])}function c(q,z){if(!z)return 0;let P=String(q||"").toLowerCase(),W=z.toLowerCase(),ee=0,J=0,K=0,Z=0;for(;ee<P.length&&J<W.length;)P[ee]===W[J]?(J++,Z++,K+=2+Z):Z=0,ee++;return J<W.length?-1:(P.startsWith(W)&&(K+=10),K)}function r(){let q=document.createElement("div");q.className="admin-cmdk",q.setAttribute("hidden",""),q.setAttribute("aria-hidden","true"),q.innerHTML=`
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
    `,document.body.appendChild(q),B=q,N=q.querySelector(".admin-cmdk-input"),F=q.querySelector(".admin-cmdk-list"),q.addEventListener("click",z=>{z.target.matches("[data-cmdk-close]")&&R()}),N.addEventListener("input",z=>{A=z.target.value,v()}),N.addEventListener("keydown",o),F.addEventListener("click",z=>{let P=z.target.closest("[data-cmdk-idx]");P&&(_=parseInt(P.dataset.cmdkIdx,10)||0,p())})}function o(q){if(q.key==="Escape"){q.preventDefault(),R();return}if(q.key==="ArrowDown"){q.preventDefault(),n(1);return}if(q.key==="ArrowUp"){q.preventDefault(),n(-1);return}if(q.key==="Enter"){q.preventDefault(),p();return}}function n(q){if(!y.length)return;_=(_+q+y.length)%y.length,S();let z=F.querySelector(`[data-cmdk-idx="${_}"]`);z&&z.scrollIntoView({block:"nearest"})}function p(){let q=y[_];if(q){if(q.type==="route")window.location.hash="#/"+q.route,R();else if(q.type==="setting")window.location.hash="#/"+q.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let z=document.getElementById(q.section);z&&(z.scrollIntoView({behavior:"smooth",block:"start"}),z.tagName==="DETAILS"&&!z.open&&(z.open=!0))},80),R();else if(q.type==="message")window.location.hash="#/messages",R();else if(q.type==="user")window.location.hash="#/system",setTimeout(()=>{let z=document.getElementById("sec-fingerprints");z&&z.scrollIntoView({behavior:"smooth",block:"start"})},80),R();else if(q.type==="theme"){let z=window.AdminThemes;(z&&z.activate?z.activate(q.id):Promise.resolve({ok:!1})).then(P=>{P.ok?(U(ServerI18n.t("cmdkThemeApplied",{name:q.label}),!0),H=null):U(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>U(ServerI18n.t("cmdkThemeApplyFailed"),!1)),R()}else if(q.type==="action"){try{let z=q.action&&q.action();z&&typeof z.then=="function"&&z.catch(()=>{})}catch{}R()}}}let m={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",system:"adminNavGroupSystem",history:"adminNavGroupSystem"};function w(q){return Object.entries(f()).map(([z,P])=>{let W=Math.max(c(P.title,q),c(z,q)),ee=m[z];return{type:"route",route:z,label:P.title,sub:ee?ServerI18n.t(ee):"",icon:"\u25C7",score:W}}).filter(z=>z.score>=0)}function d(q){let z=f()[q];if(!z)return"";let P="adminRouteTitle_"+q,W=ServerI18n.t(P);return W!==P?W:z.title}function s(q){return u.map(z=>{let P=z.labelKey?ServerI18n.t(z.labelKey):z.label;return{type:"setting",route:z.route,tab:z.tab,section:z.section,label:d(z.route.split("/")[0])?`${d(z.route.split("/")[0])} \u203A ${P}`:P,sub:"",icon:"\u2699",score:c(P,q)}}).filter(z=>z.score>=0)}function l(q){return $?($.records||[]).map(P=>{let W=P.text||P.message||"",ee=P.nickname||P.user||"guest",J=(P.timestamp||"").slice(11,19)||"\u2014",K=(P.fingerprint||P.fp||"").slice(0,8);return{type:"message",label:`${W}  \xB7  @${ee}`,sub:K?`${J} \xB7 fp:${K}`:J,icon:"\u{1F4AC}",score:Math.max(c(W,q),c(ee,q))}}).filter(P=>P.score>=0):[]}function b(q){if(!H)return[];let z=H.records||[],P=H.active||"";return z.map(W=>{let ee=W.label||W.display_name||W.name||"",J=W.description||ServerI18n.t("cmdkThemeDefaultDesc"),K=W.name===P;return{type:"theme",id:W.name,label:K?ServerI18n.t("cmdkThemeActive",{name:ee}):ee,sub:J,icon:"\u{1F3A8}",score:Math.max(c(ee,q),c(W.name||"",q),c(J,q))}}).filter(W=>W.score>=0)}function e(q){return M.map(z=>{let P=ServerI18n.t(z.labelKey),W=z.subKey?ServerI18n.t(z.subKey):z.sub;return{type:"action",id:z.id,label:P,sub:W,icon:"\u26A1",action:z.action,score:Math.max(c(P,q),c(z.id,q),c(W,q))}}).filter(z=>z.score>=0)}function t(q){return I?(I.records||[]).map(P=>{let W=P.fingerprint||P.fp||P.id||"",ee=P.ip||P.last_ip||"",J=P.nickname||"";return{type:"user",label:J?`@${J}  \xB7  ${W.slice(0,12)}\u2026`:`${W.slice(0,12)}\u2026`,sub:`user \xB7 ${ee||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(c(W,q),c(ee,q),c(J,q))}}).filter(P=>P.score>=0):[]}async function a(){let q=Date.now(),z=[];(!$||q-$.at>T)&&z.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(P=>P.ok?P.json():null).then(P=>{$={at:q,records:P&&P.records||[]}}).catch(()=>{$={at:q,records:[]}})),(!I||q-I.at>T)&&z.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(P=>P.ok?P.json():null).then(P=>{I={at:q,records:P&&P.records||[]}}).catch(()=>{I={at:q,records:[]}})),(!H||q-H.at>T)&&z.push(fetch("/admin/themes",{credentials:"same-origin"}).then(P=>P.ok?P.json():null).then(P=>{H={at:q,records:P&&P.themes||[],active:P&&P.active||""}}).catch(()=>{H={at:q,records:[],active:""}})),z.length&&await Promise.all(z)}let i={actions:5,pages:5,messages:4};async function v(){await a();let q=A.trim(),z={action:e(q),route:w(q),setting:s(q),theme:b(q),message:l(q),user:t(q)};y=[],D=[],E.forEach(P=>{let W=P.types.reduce((ee,J)=>ee.concat(z[J]||[]),[]).sort((ee,J)=>J.score-ee.score).slice(0,i[P.id]||5);W.length&&(D.push({id:P.id,labelKey:P.labelKey,from:y.length,count:W.length}),y=y.concat(W))}),_=0,S()}function k(q){return q.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[q.type]||"\xB7"}function S(){if(!y.length){F.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let q=[];D.forEach(z=>{q.push(`<li class="admin-cmdk-group" role="presentation">${g(ServerI18n.t(z.labelKey))}</li>`);for(let P=z.from;P<z.from+z.count;P++){let W=y[P],ee=P===_;q.push(`
        <li class="admin-cmdk-row ${ee?"is-active":""}"
            data-cmdk-idx="${P}" role="option" aria-selected="${ee}">
          <span class="admin-cmdk-icon" aria-hidden="true">${g(k(W))}</span>
          <span class="admin-cmdk-label">${g(W.label)}</span>
          <span class="admin-cmdk-sub">${g(W.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${ee?"\u21B5":""}</span>
        </li>`)}}),F.innerHTML=q.join("")}function x(){B||r(),B.removeAttribute("hidden"),B.setAttribute("aria-hidden","false"),B.classList.add("is-open"),A="",N.value="",v(),setTimeout(()=>N.focus(),20)}function R(){B&&(B.setAttribute("hidden",""),B.setAttribute("aria-hidden","true"),B.classList.remove("is-open"))}function G(){return!!(B&&!B.hasAttribute("hidden"))}window.AdminCommandPalette={open:x,close:R,isOpen:G,toggle:()=>G()?R():x()}})()});var mn=ye(()=>{(function(){"use strict";let h="sec-sessions-overview";var f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},u={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function E(r){if(r=Number(r)||0,r<=0)return"\u2014";var o=Math.floor(r/3600),n=Math.floor(r%3600/60),p=r%60;return o>0?o+"h "+n+"m":n>0?n+"m":p+"s"}function C(r){if(!r)return"\u2014";try{var o=typeof r=="number"?new Date(r<1e12?r*1e3:r):new Date(r);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(r)}}function L(){return'<div id="'+h+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function U(){return'<div class="admin-sessions-th"><span>'+f(ServerI18n.t("sessionsColSession"))+"</span><span>"+f(ServerI18n.t("sessionsColMessages"))+"</span><span>"+f(ServerI18n.t("sessionsColViewers"))+"</span><span>"+f(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function M(r){return r.name||ServerI18n.t("sessionsFallbackName",{id:(r.id||"").slice(0,12)})}function B(){var r=document.getElementById("admin-sessions-table-body");if(r){if(u.loading){window.AdminSkeletons?(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:5}))):r.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!u.sessions.length){r.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",r.appendChild(o);return}var n=u.sessions.map(function(p){var m=f(p.id||"");return'<div class="admin-sessions-tr'+(p.is_live?" is-live":"")+'" data-session-id="'+m+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(p.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+f(M(p))+'<span class="admin-sessions-td-sub">'+f(C(p.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(p.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(p.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+f(E(p.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+m+'">'+f(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");r.innerHTML=U()+n}}var N=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function F(){var r=document.querySelector("[data-sessions-export]");if(r){if(!u.exportId){r.hidden=!0,r.innerHTML="";return}var o=u.sessions.find(function(p){return p.id===u.exportId});if(!o){u.exportId=null,r.hidden=!0,r.innerHTML="";return}var n=N.map(function(p){return'<button type="button" class="admin-sx-export__seg'+(p.id===u.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+p.id+'" aria-pressed="'+(p.id===u.exportFormat?"true":"false")+'">'+f(ServerI18n.t(p.labelKey))+"</button>"}).join("");r.hidden=!1,r.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+f(ServerI18n.t("sessionsExportTitle",{name:M(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+f(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+n+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(u.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+f(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+f(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+f(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+f(ServerI18n.t("sessionsDownloadBtn",{fmt:u.exportFormat.toUpperCase()}))+"</button></div>"}}function A(){if(u.exportId){var r="/admin/sessions/"+encodeURIComponent(u.exportId)+"/export?format="+encodeURIComponent(u.exportFormat)+"&include_pii="+(u.exportPii?"1":"0"),o=document.createElement("a");o.href=r,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function y(){var r=u.exportId;if(r)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(r)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var n=await o.json(),p=(n.records||[]).slice(0,500);if(!p.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var m=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:p,speedMultiplier:1})});if(m.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!m.ok)throw new Error("HTTP "+m.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function D(){B(),F()}async function _(){u.loading=!0,B();try{var[r,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),n=[],p=[];if(r.ok){var m=await r.json();n=Array.isArray(m.sessions)?m.sessions:[],n.forEach(function(t){t._explicit=!0})}if(o.ok){var w=await o.json();p=Array.isArray(w.sessions)?w.sessions:[]}var d=n.slice(),s=new Set(n.map(function(t){return t.id}));p.forEach(function(t){s.has(t.id)||d.push(t)}),d.sort(function(t,a){var i=typeof t.started_at=="number"?t.started_at:Date.parse(t.started_at||0),v=typeof a.started_at=="number"?a.started_at:Date.parse(a.started_at||0);return v-i});try{var l=await fetch("/admin/session/current",{credentials:"same-origin"});if(l.ok){var b=await l.json();if(b.status==="live"){var e=Object.assign({},b,{id:b.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});d.unshift(e)}}}catch{}u.sessions=d,u.total=d.length}catch(t){console.error("[admin-sessions] fetch error:",t),u.sessions=[],u.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:t.message||""}),!1)}finally{u.loading=!1,D()}}function $(r){r&&(window.location.hash="#/session-detail?id="+encodeURIComponent(r))}function I(r){u.exportId=r,F();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function H(){var r=document.getElementById(h);r&&(r.addEventListener("click",function(o){var n=o.target.closest("[data-sessions-export-open]");if(n){o.stopPropagation(),I(n.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){u.exportId=null,F();return}var p=o.target.closest("[data-sessions-export-fmt]");if(p){u.exportFormat=p.dataset.sessionsExportFmt,F();return}if(o.target.closest("[data-sessions-replay]")){y();return}if(o.target.closest("[data-sessions-download]")){A();return}var m=o.target.closest(".admin-sessions-tr");m&&$(m.dataset.sessionId||null)}),r.addEventListener("change",function(o){var n=o.target.closest("[data-sessions-export-pii]");n&&(u.exportPii=!!n.checked)}),r.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var n=o.target.closest(".admin-sessions-tr");n&&(o.preventDefault(),$(n.dataset.sessionId||null))}}))}function T(){var r=document.querySelector(".admin-dash-grid"),o=document.getElementById(h);if(!(!r||!o)){var n=r.dataset.activeLeaf||"dashboard";o.style.display=n==="sessions"?"":"none"}}function g(){var r=document.getElementById("settings-grid");!r||document.getElementById(h)||(r.insertAdjacentHTML("beforeend",L()),H(),_(),T())}function c(){if(window.DANMU_CONFIG?.session?.logged_in){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&g(),T()});r.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",T),document.addEventListener("admin-panel-rendered",function(){g(),T()}),g()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var pn=ye(()=>{(function(){"use strict";let h="sec-session-detail-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(k){return String(k).replace(/[&<>"']/g,function(S){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[S]})},u={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},E=!1,C={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function L(){let k=window.location.hash||"",S=k.indexOf("?");if(S===-1)return null;let x=k.slice(S+1);return new URLSearchParams(x).get("id")||null}function U(k){if(!k)return"\u2014";try{let S=new Date(k);if(isNaN(S.getTime()))return String(k);let x=R=>String(R).padStart(2,"0");return`${S.getFullYear()}-${x(S.getMonth()+1)}-${x(S.getDate())} ${x(S.getHours())}:${x(S.getMinutes())}:${x(S.getSeconds())}`}catch{return String(k)}}function M(k){if(!k||k<0)return"\u2014";let S=Math.round(Number(k)),x=Math.floor(S/3600),R=Math.floor(S%3600/60),G=S%60;return x>0?`${x}h ${R}m ${G}s`:R>0?`${R}m ${G}s`:`${G}s`}function B(k,S){if(!k||!S)return"";try{let x=Math.max(0,Math.round((new Date(k)-new Date(S))/1e3)),R=Math.floor(x/60),G=x%60;return`+${String(R).padStart(2,"0")}:${String(G).padStart(2,"0")}`}catch{return""}}function N(k){let S=Number(k);return isNaN(S)?"\u2014":S.toLocaleString()}function F(k){if(!k)return"#64748b";let S=0;for(let R=0;R<k.length;R++)S=S*31+k.charCodeAt(R)>>>0;return`hsl(${S%360}, 60%, 60%)`}function A(){return`
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
    `}async function y(k){if(!k){T(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let S=await fetch(`/admin/sessions/${encodeURIComponent(k)}`,{credentials:"same-origin"});if(S.status===404&&(S=await fetch(`/admin/session/archive/${encodeURIComponent(k)}`,{credentials:"same-origin"})),!S.ok)throw new Error(`HTTP ${S.status}`);let x=await S.json();u.session=x.session||null,u.records=x.records||[],u.density=x.density||[],H(!1),g(),D()}catch(S){H(!1),T(ServerI18n.t("sessionDetailErrLoadFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function D(){if(u.sessionId)try{let k=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(u.sessionId)}`,{credentials:"same-origin"});if(!k.ok)return;let S=await k.json();u.annotations=Array.isArray(S.annotations)?S.annotations:[],m()}catch{}}function _(){let k=u.session;if(!k)return 0;if(k.duration_s)return Math.round(k.duration_s*1e3);if(k.duration)return Math.round(k.duration*1e3);let S=k.started_at||k.start_time,x=k.ended_at||k.end_time;if(S&&x)try{return Math.max(0,new Date(x)-new Date(S))}catch{return 0}return u.density&&u.density.length?u.density.length*60*1e3:0}function $(k){let S=Date.parse(k||0);if(Number.isNaN(S))return"\u2014";let x=new Date(S),R=G=>String(G).padStart(2,"0");return`${R(x.getHours())}:${R(x.getMinutes())}:${R(x.getSeconds())}`}function I(k){let S=Math.floor(k/1e3),x=Math.floor(S/3600),R=Math.floor(S%3600/60),G=S%60,q=z=>String(z).padStart(2,"0");return x>0?`${q(x)}:${q(R)}:${q(G)}`:`${q(R)}:${q(G)}`}function H(k){u.loading=k;let S=document.querySelector("[data-sd-loading]"),x=document.querySelector("[data-sd-error]");S&&(S.hidden=!k),x&&k&&(x.hidden=!0);let R=document.querySelector("[data-sd-timeline-wrap]");if(R&&window.AdminSkeletons){let G=R.querySelector("[data-sd-timeline-skel]");k?(R.hidden=!1,G||(G=window.AdminSkeletons.chart(),G.setAttribute("data-sd-timeline-skel","1"),R.appendChild(G))):G&&G.remove()}}function T(k){u.error=k;let S=document.querySelector("[data-sd-error]"),x=document.querySelector("[data-sd-error-msg]");S&&(S.hidden=!1),x&&(x.textContent=k),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(R){let G=document.querySelector(`[${R}]`);G&&(G.hidden=!0)})}function g(){c(),r(),o(),p(),m();let k=document.querySelector("[data-sd-error]");k&&(k.hidden=!0)}function c(){let k=u.session,S=document.querySelector("[data-sd-session-header]");if(!S)return;S.hidden=!1;let x=document.querySelector("[data-sd-session-id]"),R=document.querySelector("[data-sd-meta-start]"),G=document.querySelector("[data-sd-meta-duration]"),q=document.querySelector("[data-sd-title]"),z=k&&(k.session_id||k.id)||u.sessionId||"\u2014";x&&(x.textContent=z),R&&(R.textContent=U(k&&(k.started_at||k.start_time))),G&&(G.textContent=M(k&&(k.duration_s||k.duration))),q&&(q.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(z).slice(-8)}))}function r(){let k=u.session;if(!k)return;let S=document.querySelector("[data-sd-kpis]");S&&(S.hidden=!1);let x=function(z,P,W){let ee=document.querySelector(`[data-sd-stat="${z}"]`);ee&&(ee.textContent=P);let J=document.querySelector(`[data-sd-stat-sub="${z}"]`);J&&(J.textContent=W||"")};x("msg_count",N(k.msg_count)),x("viewer_count",N(k.viewer_count));let R=Array.isArray(u.density)?u.density:[];if(R.length){let z=0,P=0;R.forEach(function(J,K){J>z&&(z=J,P=K)});let W=Date.parse(k.started_at||k.start_time||0),ee="";if(!Number.isNaN(W)){let J=new Date(W+P*6e4),K=Z=>String(Z).padStart(2,"0");ee=`${K(J.getHours())}:${K(J.getMinutes())}`}x("peak",N(z),ee)}else x("peak","\u2014","");let G=Number(k.blocked_count)||0;x("blocked",N(G));let q=document.querySelector("[data-sd-blocked-btn]");q&&(q.textContent=ServerI18n.t("sessionDetailStatBlocked")+(G?" "+G:""),q.disabled=G===0)}function o(){let k=document.querySelector("[data-sd-timeline-wrap]"),S=document.querySelector("[data-sd-timeline]"),x=document.querySelector("[data-sd-timeline-axis]"),R=document.querySelector("[data-sd-peak-label]");if(!k||!S||!x)return;let G=u.density;if(!G||G.length===0){k.hidden=!0;return}k.hidden=!1;let q=Math.max(1,...G),z=0;G.forEach(function(Z,j){Z>G[z]&&(z=j)});let P=G.map(function(Z,j){let Q=Math.max(2,Math.round(Z/q*100));return`<div class="admin-sd-bar${j===z?" is-peak":""}" style="height:${Q}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:Z,minute:j+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:Z})}"></div>`}).join("");S.innerHTML=P;let W=u.session,ee=U(W&&(W.started_at||W.start_time)).slice(11,16)||"00:00",J=U(W&&(W.ended_at||W.end_time)).slice(11,16)||"",K=G.length>2?`+${Math.round(G.length/2)}min`:"";x.innerHTML=`
      <span class="admin-sd-axis-label">${f(ee)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${f(K)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${f(J)}</span>
    `,R&&(R.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:G[z],minute:z}))}function n(){let k=(u.msgQuery||"").trim().toLowerCase();return u.records.filter(function(S){let x=(S.status||"shown")==="blocked";return u.msgFilter==="blocked"&&!x?!1:k?String(S.text||"").toLowerCase().indexOf(k)!==-1||String(S.nickname||"").toLowerCase().indexOf(k)!==-1:!0})}function p(){let k=document.querySelector("[data-sd-msgs-wrap]"),S=document.querySelector("[data-sd-msgs-list]");if(!k||!S)return;if(!u.records.length){k.hidden=!0;return}k.hidden=!1;let x=n().slice(0,300);if(!x.length){S.innerHTML='<div class="admin-sd-msgs-empty">'+f(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}S.innerHTML=x.map(function(R){let G=(R.status||"shown")==="blocked",q=F(R.fingerprint||R.fp||""),z=$(R.timestamp||R.created_at),P=String(R.nickname||"").trim();return`
        <div class="admin-sd-msg-row${G?" is-blocked":""}">
          <span class="admin-sd-msg-time">${f(z)}</span>
          <span class="admin-sd-msg-dot" style="background:${q}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${f(R.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${f(ServerI18n.t("deliveryStatus_"+(R.status||"shown")))}
            ${R.delivery_reason?`<span class="admin-sd-msg-rule">${f(ServerI18n.t("deliveryReason_"+R.delivery_reason))}</span>`:""}
            ${G&&R.blockedBy?`<span class="admin-sd-msg-rule">${f(ServerI18n.t("sessionDetailBlockedBy",{rule:R.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${f(P||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function m(){let k=u.annotations||[],S=_(),x=document.querySelector("[data-sd-ann-count]");x&&(x.textContent=k.length?`${k.length} ANNOTATIONS`:"");let R=document.querySelector("[data-sd-ann-head]");R&&(R.textContent=k.length?`ANNOTATIONS \xB7 ${k.length}`:"ANNOTATIONS");let G=document.querySelector("[data-sd-ann-layer]");G&&(!S||k.length===0?G.innerHTML="":G.innerHTML=k.map(function(P){let W=C[P.label]||C.note,ee=Math.min(100,Math.max(0,P.ts_ms/S*100)),J=P.id===u.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${W.shape}${J?" is-active":""}"
              data-sd-ann-marker="${f(P.id)}"
              style="left:${ee.toFixed(2)}%;--ann-color:${W.color}"
              title="${f(W.label)} \xB7 ${I(P.ts_ms)}"
              aria-label="${f(W.label)} at ${I(P.ts_ms)}: ${f(P.note||"")}">
              ${W.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${J?`<span class="admin-sd-ann-tip"><span style="color:${W.color}">${W.icon}</span> ${f((P.note||"").slice(0,40))}${(P.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let q=document.querySelector("[data-sd-ann-legend]");q&&(q.innerHTML=Object.keys(C).map(function(P){let W=C[P],ee=W.shape==="square"?"2px":W.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${W.color};border-radius:${ee}"></span>
          <span class="admin-sd-ann-legend-label">${W.label}</span>
        </span>`}).join(""));let z=document.querySelector("[data-sd-ann-list]");if(z){if(k.length===0){z.innerHTML="";let P=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});P.dataset.emptyKind="session-annotations",z.appendChild(P);return}z.innerHTML=k.map(function(P){let W=C[P.label]||C.note,ee=P.id===u.activeAnnId,K=(P.note||"").length>80?(P.note||"").slice(0,80)+"\u2026":P.note||"";return`
        <div class="admin-sd-ann-row${ee?" is-active":""}" data-sd-ann-row="${f(P.id)}">
          <span class="admin-sd-ann-ts" style="color:${W.color}">${I(P.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${W.color}">${W.icon} ${W.label}</span>
          <span class="admin-sd-ann-note">${f(K)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${f(P.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function w(k){if(!u.sessionId)return;let S=window.HudConfirm;if(!S){let W=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:I(k)}),"");W!=null&&W.trim()&&d(k,"note",W.trim());return}let R="highlight",G="",q=document.createElement("div");q.className="admin-sd-ann-modal-body",q.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${I(k)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(C).map(function(W){let ee=C[W];return`
              <button type="button" class="admin-sd-ann-modal-lbl${W==="highlight"?" is-active":""}"
                data-ann-label="${W}" style="--ann-color:${ee.color}">
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
      </div>`,q.addEventListener("click",function(W){let ee=W.target.closest("[data-ann-label]");ee&&(R=ee.dataset.annLabel,q.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(J){J.classList.toggle("is-active",J===ee)}))});let z=q.querySelector("[data-ann-modal-note]"),P=q.querySelector("[data-ann-modal-counter]");z.addEventListener("input",function(){G=z.value,P.textContent=`${G.length} / 280`}),setTimeout(function(){z&&z.focus()},50),S.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:q,width:460}).then(function(W){W&&d(k,R,z.value.trim())})}async function d(k,S,x){if(u.sessionId)try{let R=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:u.sessionId,ts_ms:Math.max(0,Math.round(k)),label:S||"note",note:x||""})});if(!R.ok)throw new Error(`HTTP ${R.status}`);let G=await R.json();G.annotation&&(u.annotations.push(G.annotation),u.annotations.sort(function(q,z){return q.ts_ms-z.ts_ms}),u.activeAnnId=G.annotation.id,m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(R){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:R.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function s(k){if(k)try{let S=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(k)}`,{method:"DELETE",credentials:"same-origin"});if(!S.ok)throw new Error(`HTTP ${S.status}`);u.annotations=u.annotations.filter(function(x){return x.id!==k}),u.activeAnnId===k&&(u.activeAnnId=null),m(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(S){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:S.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function l(k){let S=document.querySelector("[data-sd-timeline-inner]"),x=document.querySelector("[data-sd-ann-hover]");if(!S||!x)return;let R=S.getBoundingClientRect();if(!R.width)return;let G=k.clientX-R.left,q=Math.min(1,Math.max(0,G/R.width)),z=_();if(!z){x.hidden=!0;return}let P=Math.round(q*z);u.hoverTsMs=P,x.hidden=!1,x.style.left=`${(q*100).toFixed(2)}%`,x.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:I(P)})}function b(){let k=document.querySelector("[data-sd-ann-hover]");k&&(k.hidden=!0),u.hoverTsMs=null}function e(k){if(k.target.closest("[data-sd-ann-marker]"))return;let S=document.querySelector("[data-sd-timeline-inner]");if(!S)return;let x=S.getBoundingClientRect();if(!x.width)return;let R=k.clientX-x.left,G=Math.min(1,Math.max(0,R/x.width)),q=_();q&&w(Math.round(G*q))}async function t(){if(u.sessionId)try{let k=u.records.slice(0,500);if(!k.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let S=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:k,speedMultiplier:1})});if(S.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function a(k,S){if(k==="back")window.location.hash="#/history/sessions";else if(k==="retry")u.sessionId&&y(u.sessionId);else if(k==="export"){if(!u.sessionId)return;let x=document.createElement("a");x.href="/admin/sessions/"+encodeURIComponent(u.sessionId)+"/export?format=csv",x.rel="noopener",document.body.appendChild(x),x.click(),x.remove()}else if(k==="replay")t();else if(k==="add-annotation"){let x=_(),R=u.hoverTsMs!=null?u.hoverTsMs:Math.round(x/2);w(R)}}function i(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let S=L();if(!S){u.sessionId=null,T(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}u.sessionId=S,y(S)}function v(){let k=document.getElementById("settings-grid");if(!k)return;let S=document.getElementById(h);S||(k.insertAdjacentHTML("beforeend",A()),S=document.getElementById(h),m()),S&&S.dataset.sdBound!=="1"&&(S.dataset.sdBound="1",S.addEventListener("click",function(x){let R=x.target.closest("[data-sd-ann-del]");if(R){x.stopPropagation(),s(R.dataset.sdAnnDel);return}let G=x.target.closest("[data-sd-ann-marker]");if(G){x.stopPropagation(),u.activeAnnId=G.dataset.sdAnnMarker,m();let ee=document.querySelector(`[data-sd-ann-row="${u.activeAnnId}"]`);ee&&ee.scrollIntoView&&ee.scrollIntoView({block:"nearest",behavior:"smooth"});return}let q=x.target.closest("[data-sd-ann-row]");if(q){u.activeAnnId=q.dataset.sdAnnRow,m();return}if(x.target.closest("[data-sd-timeline-inner]")){e(x);return}let P=x.target.closest("[data-sd-action]");if(P){x.preventDefault(),a(P.dataset.sdAction,P);return}let W=x.target.closest("[data-sd-filter]");W&&(u.msgFilter=W.dataset.sdFilter,S.querySelectorAll("[data-sd-filter]").forEach(function(ee){ee.classList.toggle("is-active",ee===W)}),p())}),S.addEventListener("input",function(x){let R=x.target.closest("[data-sd-search]");R&&(u.msgQuery=R.value||"",p())}),S.addEventListener("mousemove",function(x){x.target.closest("[data-sd-timeline-inner]")&&l(x)}),S.addEventListener("mouseleave",function(x){x.target.closest&&x.target.closest("[data-sd-timeline-inner]")&&b()},!0)),u.sessionId=L(),u.sessionId?y(u.sessionId):T(ServerI18n.t("sessionDetailErrNoSessionSelected")),E||(E=!0,window.addEventListener("hashchange",i))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&v()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let S=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(h)&&S.indexOf("/session-detail")!==-1&&v(),window.addEventListener("admin-route-changed",function(x){(x&&x.detail&&x.detail.route)==="session-detail"&&v()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&v()})})})()});var fn=ye(()=>{(function(){"use strict";let h="sec-search-overview";var f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})},u=20,E={query:"",scope:"session",blockedOnly:!1,who:"",shown:u,results:[],total:0,loading:!1,searched:!1},C=0;function L(){return'<div id="'+h+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+f(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+f(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+f(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+f(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+f(ServerI18n.t("searchWhoAria"))+'"><option value="">'+f(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+f(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+f(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function U(n){if(!n)return 200;for(var p=0,m=0;m<Math.min(n.length,6);m++)p=p*31+n.charCodeAt(m)&65535;return p%360}function M(n,p){if(!p||!n)return f(n||"");var m=f(n),w=f(p);try{var d=new RegExp("("+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return m.replace(d,'<mark class="admin-search-hit">$1</mark>')}catch{return m}}function B(n){if(!n)return"\u2014";try{var p=new Date(n);return p.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return n}}function N(){var n=E.results;return E.blockedOnly&&(n=n.filter(function(p){return(p.status||"shown")==="blocked"})),E.who&&(n=n.filter(function(p){return(p.nickname||"")===E.who})),n}function F(){var n=document.getElementById("admin-search-count");if(n){if(!E.searched||!E.query.trim()){n.textContent="";return}n.textContent=ServerI18n.t("searchResultCount",{n:N().length})}}function A(){var n=document.querySelector("[data-search-who]");if(n){var p=[];E.results.forEach(function(w){var d=(w.nickname||"").trim();d&&p.indexOf(d)===-1&&p.push(d)}),p.sort();var m=E.who;n.innerHTML='<option value="">'+f(ServerI18n.t("searchWhoAnyone"))+"</option>"+p.map(function(w){return'<option value="'+f(w)+'"'+(w===m?" selected":"")+">"+f(w)+"</option>"}).join("")}}function y(){var n=document.getElementById("admin-search-results"),p=document.getElementById("admin-search-empty-state"),m=document.getElementById("admin-search-export-btn");if(n){n.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(e){e.remove()});var w=function(e){p&&(p.style.display="block",p.textContent=e),m&&(m.hidden=!0)};if(E.loading)return w(ServerI18n.t("searchSearching"));if(!E.searched)return w(ServerI18n.t("searchPromptStart"));var d=N();if(d.length===0)return w(ServerI18n.t("searchNoMatch"));p&&(p.style.display="none"),m&&(m.hidden=!1);var s=Math.min(d.length,E.shown),l=document.createDocumentFragment();if(d.slice(0,s).forEach(function(e){var t=document.createElement("div");t.className="admin-search-row",t.innerHTML='<span class="admin-search-row__ts">'+f(B(e.timestamp))+'</span><span class="admin-search-row__text">'+M(e.text||"",E.query)+'</span><span class="admin-search-row__nick">'+f((e.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+f(ServerI18n.t("deliveryStatus_"+(e.status||"shown")))+(e.delivery_reason?"<br>"+f(ServerI18n.t("deliveryReason_"+e.delivery_reason)):"")+"</span></span>",l.appendChild(t)}),n.appendChild(l),d.length>s){var b=document.createElement("button");b.type="button",b.className="admin-search-more",b.dataset.searchMore="1",b.textContent=ServerI18n.t("searchMoreLeft",{n:d.length-s}),n.appendChild(b)}}}function D(){F(),A(),y()}async function _(){var n=E.query.trim();if(!n){E.loading=!1,E.searched=!1,E.results=[],E.total=0,D();return}E.loading=!0,D();try{var p="/admin/search?q="+encodeURIComponent(n);if(E.scope==="session"){var m=await I();m&&(p+="&since="+encodeURIComponent(m))}var w=Date.now(),d=await fetch(p,{credentials:"same-origin"}),s=Date.now()-w;if(!d.ok)throw new Error("HTTP "+d.status);var l=await d.json();E.results=Array.isArray(l.results)?l.results:[],E.total=typeof l.total=="number"?l.total:E.results.length,E.shown=u}catch(b){console.error("[admin-search] fetch error:",b),E.results=[],E.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:b.message||""}),!1)}finally{E.loading=!1,E.searched=!0,D()}}var $=null;async function I(){if($!==null)return $;try{var n=await fetch("/admin/session/current",{credentials:"same-origin"});if(n.ok){var p=await n.json();if(p.status==="live"&&p.started_at)return $=new Date(p.started_at*1e3).toISOString(),$}}catch{}return $="",""}function H(){clearTimeout(C),C=setTimeout(_,300)}function T(){if(E.results.length){var n=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];E.results.forEach(function(d){var s=[d.nickname||"",d.fingerprint||"",d.timestamp||"",d.status||"",d.text||"",d.delivery_reason||""].map(function(l){return'"'+window.AdminUtils.csvSafeText(l).replace(/"/g,'""')+'"'});n.push(s.join(","))});var p=new Blob(["\uFEFF"+n.join(`
`)],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(p),w=document.createElement("a");w.href=m,w.download="danmu-search-"+(E.query||"export")+".csv",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(m)}}function g(){var n=document.getElementById(h);if(n){var p=document.getElementById("admin-search-input");p&&(p.addEventListener("input",function(){E.query=p.value,H()}),p.addEventListener("keydown",function(w){w.key==="Enter"&&(clearTimeout(C),E.query=p.value,_())})),n.addEventListener("click",function(w){var d=w.target.closest("[data-search-scope]");if(d){E.scope=d.dataset.searchScope,n.querySelectorAll("[data-search-scope]").forEach(function(l){l.classList.toggle("is-active",l===d)}),E.query.trim()&&H();return}var s=w.target.closest("[data-search-blocked]");if(s){E.blockedOnly=!E.blockedOnly,s.classList.toggle("is-active",E.blockedOnly),E.shown=u,D();return}if(w.target.closest("[data-search-more]")){E.shown+=u,y();return}}),n.addEventListener("change",function(w){var d=w.target.closest("[data-search-who]");d&&(E.who=d.value||"",E.shown=u,D())});var m=document.getElementById("admin-search-export-btn");m&&m.addEventListener("click",T)}}function c(){var n=document.querySelector(".admin-dash-grid"),p=document.getElementById(h);if(!(!n||!p)){var m=n.dataset.activeLeaf||"dashboard";p.style.display=m==="search"?"":"none"}}function r(){var n=document.getElementById("settings-grid");!n||document.getElementById(h)||(n.insertAdjacentHTML("beforeend",L()),g(),c())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var n=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&r(),c()});n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",c),document.addEventListener("admin-panel-rendered",function(){r(),c()}),r()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var vn=ye(()=>{(function(){"use strict";let h="sec-api-tokens-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})},u=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],E=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],C={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function L(e){if(!e)return"\u2014";try{let t=new Date(e);if(isNaN(t.getTime()))return String(e);let a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`}catch{return String(e)}}function U(e){if(!e)return null;try{let t=new Date(e);if(isNaN(t.getTime()))return null;let a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())} ${a(t.getHours())}:${a(t.getMinutes())}`}catch{return null}}function M(e){let t=Number(e);return isNaN(t)?"0":t.toLocaleString()}function B(e){if(!e||e.enabled===!1)return"inactive";if(!e.expires_at)return"active";try{let t=new Date(e.expires_at).getTime(),a=Date.now();if(t<a)return"expired";if(t-a<168*3600*1e3)return"expiring"}catch{}return"active"}function N(e){if(!e)return 1/0;try{return Math.floor((Date.now()-new Date(e).getTime())/864e5)}catch{return 1/0}}function F(e){return!e||!e.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':e.map(function(t){let a="admin-ui-pill admin-at-scope-badge";return t==="admin:*"?a+=" is-danger":t.startsWith("fire:")?a+=" is-warn":t.startsWith("read:stats")?a+=" is-cyan":a+=" is-success",`<span class="${a}">${f(t)}</span>`}).join(" ")}function A(e){let t="admin-ui-dot admin-at-dot";return e==="active"?t+=" is-success":e==="expiring"?t+=" is-warn":e==="expired"?t+=" is-danger":t+=" is-muted",`<span class="${t}" aria-hidden="true"></span>`}function y(){let e=u.map(function(a){let i=a.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",k=`admin-ui-pill admin-at-scope-badge is-${a.badge==="red"?"danger":a.badge==="amber"?"warn":a.badge==="green"?"success":a.badge}`;return`
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
      `}).join(""),t=E.map(function(a){let i=a.default?"checked":"";return`
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
    `}async function D(){H(!0);try{let e=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();C.tokens=t.tokens||t||[],g()}catch(e){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:e.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function _(e){C.creating=!0,T(!0),p();try{let t=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){let v=await t.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${t.status}`)}let a=await t.json(),i=a.token||a.raw_token||a.access_token||null;C.newTokenRaw=i,c(i),o(),await D(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(t){n(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:t.message||""}),!1)}finally{C.creating=!1,T(!1)}}async function $(e,t){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${f(t||e)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let i=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"DELETE"});if(!i.ok){let v=await i.json().catch(()=>({}));throw new Error(v.error||v.message||`HTTP ${i.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await D()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:i.message||""}),!1)}}async function I(e,t){try{let a=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!a.ok){let i=await a.json().catch(()=>({}));throw new Error(i.error||i.message||`HTTP ${a.status}`)}window.showToast&&window.showToast(t?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await D()}catch(a){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:a.message||""}),!1)}}function H(e){let t=document.querySelector("[data-at-list-loading]");t&&(t.hidden=!e)}function T(e){let t=document.getElementById("adminAtSubmitBtn");t&&(t.disabled=e,t.textContent=e?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function g(){let e=C.tokens,t=document.querySelector("[data-at-empty]"),a=document.querySelector("[data-at-table-wrap]"),i=document.querySelector("[data-at-tbody]");if(!(!t||!a||!i)){if(!e||e.length===0){if(!t.firstElementChild&&window.AdminEmpty){let v=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});v.dataset.emptyKind="api-tokens",t.appendChild(v)}t.hidden=!1,a.hidden=!0;return}t.hidden=!0,a.hidden=!1,i.innerHTML=e.map(function(v){let k=B(v),S=A(k),x=v.scopes||v.scope||[],R=Array.isArray(x)?x:String(x).split(",").map(ee=>ee.trim()).filter(Boolean),q=N(v.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",z=k==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",P=k==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",W=v.last_used_at?`${U(v.last_used_at)||L(v.last_used_at)}<br><span class="admin-at-ip">${f(v.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${f(v.id||v.token_id||"")}">
          <td class="admin-at-td-label">
            ${S}
            <span class="admin-at-label-text">${f(v.label||v.name||"\u2014")}</span>
            ${q}${z}${P}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${f(v.prefix||v.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${F(R)}</div>
          </td>
          <td class="admin-at-td-used">${W}</td>
          <td class="admin-at-td-usage">${M(v.usage_count||v.use_count)}</td>
          <td class="admin-at-td-created">${L(v.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${f(v.id||v.token_id||"")}"
              data-token-enabled="${v.enabled===!1?"0":"1"}"
              title="${v.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${v.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${f(v.id||v.token_id||"")}"
              data-token-label="${f(v.label||v.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function c(e){let t=document.getElementById("adminAtSuccessBanner"),a=document.getElementById("adminAtTokenDisplay"),i=document.getElementById("adminAtCreateForm");t&&(t.hidden=!1),a&&e&&(a.value=e),i&&(i.style.opacity="0.5"),t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}function r(){let e=document.getElementById("adminAtSuccessBanner"),t=document.getElementById("adminAtCreateForm");e&&(e.hidden=!0),t&&(t.style.opacity=""),C.newTokenRaw=null}function o(){let e=document.getElementById("adminAtCreateForm");e&&e.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(i){i.classList.remove("is-active")});let t=document.querySelector("input[name='adminAtExpiry'][value='90']");if(t){t.checked=!0;let i=t.closest(".admin-at-expiry-btn");i&&i.classList.add("is-active")}let a=document.getElementById("adminAtAdminWarn");a&&(a.hidden=!0),p()}function n(e){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!1,t.textContent=e)}function p(){let e=document.getElementById("adminAtFormError");e&&(e.hidden=!0,e.textContent="")}function m(){let e=document.getElementById("adminAtLabel"),t=e?e.value.trim():"",a=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(S){a.push(S.value)});let i=document.querySelector("input[name='adminAtExpiry']:checked"),v=i?i.value:"90",k=v==="null"?null:parseInt(v,10);return{label:t,scopes:a,expiry_days:k}}function w(e){return e.label?e.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!e.scopes||e.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function d(e){if(e.preventDefault(),C.creating)return;p();let t=m(),a=w(t);if(a){n(a);return}_(t)}function s(){let e=C.newTokenRaw;if(!e)return;let t=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(function(){t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let a=document.getElementById("adminAtTokenDisplay");a&&(a.select(),document.execCommand("copy")),t&&(t.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){t.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function l(){let e=document.getElementById(h);if(!e)return;e.addEventListener("click",function(v){let k=v.target.closest("[data-at-action]");if(k){let x=k.dataset.atAction;if(x==="revoke"){let R=k.dataset.tokenId,G=k.dataset.tokenLabel;$(R,G)}else if(x==="toggle"){let R=k.dataset.tokenId,G=k.dataset.tokenEnabled==="1";I(R,!G)}else x==="copy-token"&&s();return}let S=v.target.closest(".admin-at-expiry-btn");S&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(x){x.classList.remove("is-active")}),S.classList.add("is-active"))});let t=document.getElementById("adminAtScope_admin__");t&&t.addEventListener("change",function(){let v=document.getElementById("adminAtAdminWarn");v&&(v.hidden=!t.checked)});let a=document.getElementById("adminAtCreateForm");a&&a.addEventListener("submit",d);let i=document.querySelector("input[name='adminAtExpiry'][value='90']");if(i){let v=i.closest(".admin-at-expiry-btn");v&&v.classList.add("is-active")}}function b(){let e=document.getElementById("settings-grid");!e||document.getElementById(h)||(e.insertAdjacentHTML("beforeend",y()),l(),D())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&b()})})()});var hn=ye(()=>{(function(){"use strict";let h="sec-wcag-overview",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})};function u(o){let n=o.replace(/^#/,""),p=n.length===3?n.split("").map(function(m){return m+m}).join(""):n;return[parseInt(p.slice(0,2),16)/255,parseInt(p.slice(2,4),16)/255,parseInt(p.slice(4,6),16)/255]}function E(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function C(o){let n=u(o);return .2126*E(n[0])+.7152*E(n[1])+.0722*E(n[2])}function L(o,n){let p=C(o),m=C(n),w=Math.max(p,m),d=Math.min(p,m);return(w+.05)/(d+.05)}function U(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function M(o,n){let p=C(n),m=[],w=u(o);for(let d=.05;d<=.6&&m.length<3;d+=.05){let l="#"+w.map(function(e){return Math.min(1,e+d)}).map(function(e){return Math.round(e*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),b=L(l,n);b>=4.5&&m.push({hex:l,ratio:b})}return m}let B=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],N={fg:"#FB7185",bg:"#000000"},F="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",A={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function y(){let o=B.filter(function(m){return U(L(m.fg,m.bg))!=="fail"}).length,n=B.length-o,p=Math.round(o/B.length*100);return`
      <div id="${h}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${D("PASS AA+",o,ServerI18n.t("wcagStatPassLabel"))}
              ${D("BELOW AA",n,ServerI18n.t("wcagStatFailLabel"))}
              ${D("PAIRS",B.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${D("PASS RATE",p+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:p})}">
                <div class="admin-wcag-meter-fill" style="width:${p}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${F}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${B.map(function(m,w){return _(m,w)}).join("")}
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
      </div>`}function D(o,n,p){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${f(String(n))}</span>
        <span class="hud-stat-tile-label">${f(p)}</span>
      </div>`}function _(o,n){let p=L(o.fg,o.bg),m=U(p),w=A[m],d=ServerI18n.t(o.nameKey),s=w.labelKey?ServerI18n.t(w.labelKey):w.label,l=m==="fail"?ServerI18n.t("wcagWarnFail"):m==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${F}"
        data-wcag-pair-idx="${n}" role="button" tabindex="0"
        aria-label="${f(ServerI18n.t("wcagPairAriaLabel",{name:d,ratio:p.toFixed(2),level:s.slice(2)}))}">
        <span class="admin-wcag-pair-name">${f(d)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${f(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${f(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${f(o.fg)}">${f(o.fg)} / ${f(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${p.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${w.mod}">${s}</span>
        ${l?`<span class="admin-wcag-warn">\u26A0 ${l}</span>`:""}
      </div>`}function $(){let o=L(N.fg,N.bg),n=U(o),p=A[n],m=p.labelKey?ServerI18n.t(p.labelKey):p.label,w=M(N.fg,N.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${I(ServerI18n.t("wcagForegroundLabel"),N.fg,"fg")}
        ${I(ServerI18n.t("wcagBackgroundLabel"),N.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${f(N.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${f(N.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${f(N.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${f(N.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${p.mod}">${m}</span>
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
            ${w.map(function(d){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${f(d.hex)}"
                title="${f(ServerI18n.t("wcagSuggApplyTitle",{ratio:d.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${f(N.bg)};color:${f(d.hex)}">${f(d.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${d.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function I(o,n,p){let m="wcag-tester-"+p;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${m}">${f(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${f(n)}"></span>
          <input type="text" id="${m}" class="admin-ui-input" data-wcag-tester-${p}
            aria-label="${f(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${f(n)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(o,n){return`<div class="admin-wcag-level ${n?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${n?"\u2713":"\u2717"}</span>
      <span>${f(o)}</span>
    </div>`}function T(){let o=document.getElementById(h);o&&(o.addEventListener("click",function(n){let p=n.target.closest("[data-wcag-pair-idx]");if(p){g(p);return}let m=n.target.closest("[data-wcag-sugg]");m&&(N.fg=m.dataset.wcagSugg,c())}),o.addEventListener("keydown",function(n){if(n.key!=="Enter"&&n.key!==" "&&n.key!=="Spacebar")return;let p=n.target.closest("[data-wcag-pair-idx]");p&&(n.preventDefault(),g(p))}),o.addEventListener("input",function(n){let p=n.target.closest("[data-wcag-tester-fg]"),m=n.target.closest("[data-wcag-tester-bg]");p&&/^#[0-9A-Fa-f]{6}$/.test(p.value)&&(N.fg=p.value.toUpperCase(),c()),m&&/^#[0-9A-Fa-f]{6}$/.test(m.value)&&(N.bg=m.value.toUpperCase(),c())}))}function g(o){let n=B[parseInt(o.dataset.wcagPairIdx,10)];n&&(N.fg=n.fg,N.bg=n.bg,c())}function c(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=$())}function r(){let o=document.getElementById("settings-grid");!o||document.getElementById(h)||(o.insertAdjacentHTML("beforeend",y()),T())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&r()})})()});var gn=ye(()=>{(function(){"use strict";let h="danmu.onboarding.done",f="admin-onboarding-root",L=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],U=0,M=!1;window.AdminOnboarding={start:y,isDone:function(){try{return!!localStorage.getItem(h)}catch{return!1}},reset:function(){try{localStorage.removeItem(h)}catch{}}};let B=new Set(["live","dashboard"]);function N(){if(M||window.AdminOnboarding.isDone()||!B.has(F()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{M||window.AdminOnboarding.isDone()||o()||B.has(F())&&y()},1200)}function F(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function A(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&y()}function y(){M||(M=!0,U=0,H())}function D(o){if(!M)return;M=!1,document.body.removeEventListener("click",$),document.removeEventListener("keydown",I),window.removeEventListener("resize",T);let n=document.getElementById(f);if(n&&n.remove(),o)try{localStorage.setItem(h,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function _(){U<L.length-1?(U++,T()):D(!0)}function $(o){let n=o.target.closest("[data-ob-action]");n&&(o.stopPropagation(),n.dataset.obAction==="next"?_():n.dataset.obAction==="skip"&&D(!1))}function I(o){M&&o.key==="Escape"&&(o.preventDefault(),D(!1))}function H(){let o=document.getElementById(f);o&&o.remove();let n=document.createElement("div");n.id=f,n.className="admin-ob-root",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","false"),n.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(n),document.body.addEventListener("click",$),document.addEventListener("keydown",I),window.addEventListener("resize",T),T()}function T(){let o=document.getElementById(f);if(!o)return;let n=L[U],p=L.length,m=c(n.target),w=window.innerWidth,d=window.innerHeight,s="";m?s='<div class="admin-ob-spot" style="left:'+(m.left-8)+"px;top:"+(m.top-8)+"px;width:"+(m.width+16)+"px;height:"+(m.height+16)+'px;"></div>':s='<div class="admin-ob-scrim"></div>';let l=(w-360)/2,b=d/2-110,e="none";if(m){let v=m.left+m.width/2;n.side==="top"?(l=v-360/2,b=m.top-16,e="bottom"):n.side==="right"?(l=m.right+16+8,b=m.top,e="left"):(l=v-360/2,b=m.bottom+16+8,e="top"),l=Math.max(16,Math.min(w-360-16,l))}let t=L.map(function(v,k){return'<span class="admin-ob-progress-item'+(k===U?" is-current":"")+'">'+(k+1)+" "+r(ServerI18n.t(v.labelKey))+"</span>"+(k<p-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=s+'<div class="admin-ob-bubble" data-arrow="'+e+'" style="left:'+l+"px;top:"+b+'px"><div class="admin-ob-count">'+(U+1)+" / "+p+'</div><div class="admin-ob-title">'+r(ServerI18n.t(n.titleKey))+'</div><div class="admin-ob-body">'+r(ServerI18n.t(n.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+r(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+r(ServerI18n.t(U===p-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+t+"</div></div>";let a=o.querySelector(".admin-ob-bubble");if(!a||!m)return;let i=a.offsetHeight;if(n.side==="top")a.style.top=Math.max(16,m.top-16-8-i)+"px";else if(b+i>d-16){let v=m.top-16-8-i;v>=16?(a.style.top=v+"px",a.setAttribute("data-arrow","bottom")):(a.style.top=Math.max(16,d-i-16)+"px",a.setAttribute("data-arrow","none"))}g(a,m)}function g(o,n){let p=o.getAttribute("data-arrow");if(p==="none")return;let m=o.getBoundingClientRect(),w=p==="top"||p==="bottom",d=w?n.left+n.width/2-m.left:n.top+n.height/2-m.top,s=w?m.width:m.height,l=Math.max(16,Math.min(s-32,d-8));o.style.setProperty("--ob-arrow",l+"px")}function c(o){if(!o)return null;let n=document.querySelector(o);if(!n)return null;let p=n.getBoundingClientRect();return p.width<8||p.height<8||p.bottom<0||p.top>window.innerHeight?null:p}function r(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",A),A(),window.addEventListener("hashchange",function(){B.has(F())&&setTimeout(N,600)}),setTimeout(N,800))})})()});var En=ye(()=>{var es=Se(it()),ts=Se(st()),ns=Se(ot()),as=Se(rt()),is=Se(dt()),ss=Se(lt()),os=Se(ct()),rs=Se(ut()),ds=Se(mt()),ls=Se(pt()),cs=Se(ft()),us=Se(vt()),ms=Se(ht()),ps=Se(gt()),fs=Se(bt()),vs=Se(wt()),hs=Se(yt()),gs=Se(St()),bs=Se(kt()),ws=Se(It()),ys=Se(Tt()),Ss=Se(_t()),ks=Se(Et()),Is=Se($t()),Ts=Se(xt()),_s=Se(Lt()),Es=Se(At()),$s=Se(Ct()),xs=Se(Bt()),Ls=Se(Ft()),As=Se(Dt()),Cs=Se(Mt()),Bs=Se(Nt()),Fs=Se(Pt()),Ds=Se(Rt()),Ms=Se(Ot()),Ns=Se(qt()),Ps=Se(Ht()),Rs=Se(jt()),Os=Se(Ut()),qs=Se(Kt()),Hs=Se(Wt()),js=Se(Gt()),Us=Se(Vt()),Ks=Se(zt()),Ws=Se(Jt()),Gs=Se(Yt()),Vs=Se(Qt()),zs=Se(Xt()),Js=Se(Zt()),Ys=Se(en()),Qs=Se(tn()),Xs=Se(nn()),Zs=Se(an()),eo=Se(sn()),to=Se(on()),no=Se(rn()),ao=Se(dn()),io=Se(ln()),so=Se(cn()),oo=Se(un()),ro=Se(mn()),lo=Se(pn()),co=Se(fn()),uo=Se(vn()),mo=Se(hn()),po=Se(gn())});En();})();
