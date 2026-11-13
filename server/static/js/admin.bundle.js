/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Yt=Object.create;var Me=Object.defineProperty;var Qt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,en=Object.prototype.hasOwnProperty;var ye=(y,k)=>()=>{try{return k||y((k={exports:{}}).exports,k),k.exports}catch(g){throw k=0,g}};var tn=(y,k,g,h)=>{if(k&&typeof k=="object"||typeof k=="function")for(let L of Xt(k))!en.call(y,L)&&L!==g&&Me(y,L,{get:()=>k[L],enumerable:!(h=Qt(k,L))||h.enumerable});return y};var be=(y,k,g)=>(g=y!=null?Yt(Zt(y)):{},tn(k||!y||!y.__esModule?Me(g,"default",{value:y,enumerable:!0}):g,y));var Ne=ye(()=>{(function(){"use strict";var y=4,k=2500,g=3e3,h=Object.create(null);function L(){return Date.now()}function U(w,b){return(b?"ok:":"err:")+w}function C(w,b){return"var("+w+", "+b+")"}function T(w){return w?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(w){for(var b=Array.prototype.slice.call(w.children);b.length>y;){var x=b.shift();x&&x.parentNode&&x.parentNode.removeChild(x)}}function M(w,b){w.remaining=b,w.startedAt=L(),w.timer=setTimeout(function(){$(w)},b)}function F(w){w.timer&&(clearTimeout(w.timer),w.timer=null,w.remaining=Math.max(600,w.remaining-(L()-w.startedAt)))}function S(w){w.timer||!w.el.parentNode||M(w,w.remaining)}function $(w){clearTimeout(w.timer),w.timer=null,w.key&&h[w.key]===w&&delete h[w.key];var b=w.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function P(w,b){var x=document.getElementById("toast-container");if(x){b=b!==!1;var H=U(String(w),b),B=h[H];if(B&&B.el.parentNode&&L()-B.startedAt<k){B.count+=1,B.countEl&&(B.countEl.textContent="\xD7"+B.count,B.countEl.hidden=!1),F(B),S(B);return}var N=b?C("--color-ink-success","#639922"):C("--color-ink-error","#e24b4a"),f=C("--color-surface","#ffffff"),c=C("--color-text-primary","#1a1a1a"),a=C("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+f,"color:"+c,"border:1px solid "+a,"border-left:3px solid "+N,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+N+";flex:0 0 auto",d.innerHTML=T(b);var n=document.createElement("span");n.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",n.textContent=w;var l=document.createElement("span");l.hidden=!0,l.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(d),t.appendChild(n),t.appendChild(l),x.appendChild(t),m(x),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var o={key:H,el:t,countEl:l,count:1,timer:null,remaining:g,startedAt:L()};h[H]=o,M(o,g),t.addEventListener("mouseenter",function(){F(o)}),t.addEventListener("mouseleave",function(){S(o)}),t.addEventListener("focusin",function(){F(o)}),t.addEventListener("focusout",function(){S(o)})}}window.showToast=P})()});var Pe=ye(()=>{(function(){"use strict";var y="admin-details-open-state";function k(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(P){try{localStorage.setItem(y,JSON.stringify(P))}catch{}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function L(P){return P==null?"":String(P).replace(/[&<>"']/g,function(w){return h[w]})}function U(){var P=document.querySelector("script[nonce]");return P&&P.nonce||""}function C(P,w){var b=U();return"<style"+(P?' id="'+L(P)+'"':"")+(b?' nonce="'+L(b)+'"':"")+">"+(w||"")+"</style>"}var T='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],M=null;function F(P){if(!P)return!1;for(var w=P;w&&w!==document.documentElement;w=w.parentElement)if(w.style&&w.style.display==="none")return!1;return!!(P.offsetParent||P.getClientRects().length)}function S(){var P=document.hidden;m.forEach(function(w){var b=typeof w.el=="function"?w.el():w.el,x=!P&&F(b);if(x&&!w.timer){if(w.immediate!==!1)try{w.tick()}catch{}w.timer=setInterval(w.tick,w.intervalMs)}else!x&&w.timer&&(clearInterval(w.timer),w.timer=0)})}function $(P){var w={el:P.el,intervalMs:P.intervalMs,tick:P.tick,immediate:P.immediate,timer:0};return m.push(w),M||(M=new MutationObserver(function(){S()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",S),document.addEventListener("visibilitychange",S),document.addEventListener("admin-panel-rendered",S)),S(),function(){w.timer&&clearInterval(w.timer);var x=m.indexOf(w);x!==-1&&m.splice(x,1)}}window.AdminUtils={DETAILS_STATE_KEY:y,loadDetailsState:k,saveDetailsState:g,escapeHtml:L,cspNonce:U,styleTag:C,closeIcon:T,pollWhileVisible:$}})()});var Re=ye(()=>{(function(){"use strict";function y(k,g,h,L){let U=k.querySelector("[data-route-breadcrumb]");if(!U)return;let C=Array.from(k.querySelectorAll(".admin-dash-nav-row[data-route]")),T=C.find(x=>x.dataset.route===g)||C.find(x=>x.dataset.route===h);if(!T){U.replaceChildren(),U.hidden=!0;return}let m="",M=T.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){m=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let S=(T.querySelector("[data-i18n]")||T.querySelector("span:nth-child(2)")||T).textContent.trim(),$=L?k.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=$?($.querySelector(".admin-tabs-btn-label")||$).textContent.trim():"",w=[m,S,P].filter(Boolean),b=document.createDocumentFragment();w.forEach((x,H)=>{if(H){let f=document.createElement("span");f.className="admin-dash-breadcrumb-sep",f.setAttribute("aria-hidden","true"),f.textContent="\u203A",b.appendChild(f)}let B=document.createElement("span"),N=H===w.length-1;B.className="admin-dash-breadcrumb-item"+(N?" is-current":""),N&&B.setAttribute("aria-current","page"),B.textContent=x,b.appendChild(B)}),U.replaceChildren(b),U.hidden=w.length===0}window.AdminBreadcrumb={render:y}})()});var Oe=ye(()=>{(function(y){"use strict";let k={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(S){return Array.isArray(S.sections)?S.sections:S.section?[S.section]:[]}function h(S){return!!k[S]}function L(S){return k[S]||null}let U={moderation:{filters:"blacklist",fingerprints:"bans"}};function C(S,$){let P=k[S];if(!P)return null;let w=H=>P.tabs.some(B=>B.slug===H),b=U[S]?.[$];if(b&&w(b))return b;if($&&w($))return $;let x=y.AdminRouter?.tabMemory?.get?.(S);return x&&w(x)?x:P.defaultTab}function T(S,$,P){let w=k[S];if(!w)return null;let b=document.createElement("div");return b.className="admin-tabs-strip",b.dataset.nav=S,b.setAttribute("role","tablist"),b.setAttribute("aria-label",S+" tabs"),w.tabs.forEach(x=>{let H=document.createElement("button");H.type="button",H.className="admin-tabs-btn"+(x.slug===$?" is-active":""),H.dataset.nav=S,H.dataset.tab=x.slug,H.setAttribute("role","tab"),H.setAttribute("aria-selected",x.slug===$?"true":"false");let B=document.createElement("span");B.className="admin-tabs-btn-label",B.textContent=x.labelKey?ServerI18n.t(x.labelKey):x.label,H.appendChild(B);let N=document.createElement("span");N.className="admin-tabs-btn-count",N.dataset.tabCount=x.slug,N.textContent=m[S]&&m[S][x.slug]?m[S][x.slug]:"",H.appendChild(N),H.addEventListener("click",()=>{typeof P?.onSelect=="function"&&P.onSelect(x.slug)}),b.appendChild(H)}),b}let m={};function M(S,$,P){if(!k[S])return;m[S]=m[S]||{},m[S][$]=P==null?"":String(P);let w=document.querySelector('.admin-tabs-strip[data-nav="'+S+'"] [data-tab-count="'+$+'"]');w&&(w.textContent=m[S][$])}function F(S,$,P){let w=k[S];!w||!P||w.tabs.forEach(b=>{let x=b.slug===$;g(b).forEach(H=>{let B=P.querySelector("#"+H);B&&(B.style.display=x?"":"none")})})}y.AdminTabs={hasTabsFor:h,getConfig:L,resolveActiveTab:C,renderTabStrip:T,applyTabSectionVisibility:F,setTabCount:M}})(window)});var qe=ye(()=>{(function(y,k){"use strict";let g="data-quick-action-host",h="admin-quick-action-bar";function L(M){if(M?.host instanceof HTMLElement)return M.host;let F=k.querySelector(".admin-dash-main");if(!F)return k.body;let S=F.querySelector(`[${g}]`);if(!S){S=k.createElement("div"),S.setAttribute(g,"");let $=F.querySelector(".admin-dash-topbar"),w=F.querySelector("[data-admin-tabs-host]")||$;w&&w.parentNode?w.insertAdjacentElement("afterend",S):F.prepend(S)}return S}function U(M,F){typeof y.showToast=="function"&&y.showToast(M,F!==!1)}function C({label:M,undoLabel:F,onUndo:S,windowMs:$}){let P=L(),w=P.querySelector("."+h);w&&w.remove();let b=k.createElement("div");b.className=h,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let x=k.createElement("span");x.className=h+"-text",x.textContent="\u2713 "+M,b.appendChild(x);let H=k.createElement("button");H.type="button",H.className=h+"-undo",H.textContent="\u21B6 "+(F||ServerI18n.t("qaUndoLabel")),b.appendChild(H);let B=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},N=setTimeout(B,$||5e3);return H.addEventListener("click",async()=>{clearTimeout(N),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await S(),U(ServerI18n.t("qaUndone"),!0)}catch(f){U(ServerI18n.t("qaUndoFailed",{msg:f?.message||String(f)}),!1)}finally{B()}}),P.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function T(M){if(!M||typeof M!="object")return;let F=M.label||ServerI18n.t("qaDone");M.toast!==!1&&U(F,!0),M.undo&&typeof M.undo.run=="function"&&C({label:F,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function m(){k.querySelectorAll("."+h).forEach(M=>M.remove())}y.AdminQuickAction={fire:T,dismissAll:m}})(window,document)});var He=ye(()=>{(function(){"use strict";let y="admin-hud-modal-root",k=null,g=null,h='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function L(){let m=document.getElementById(y);return m?Array.prototype.slice.call(m.querySelectorAll(h)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function U(m){let M=document.getElementById(y);if(M&&M.remove(),k&&(k(m),k=null),document.removeEventListener("keydown",C),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function C(m){if(m.key==="Escape"){m.preventDefault(),U(!1);return}if(m.key==="Tab"){let M=L();if(!M.length){m.preventDefault();return}let F=M[0],S=M[M.length-1],$=document.activeElement;m.shiftKey?($===F||!M.includes($))&&(m.preventDefault(),S.focus()):($===S||!M.includes($))&&(m.preventDefault(),F.focus())}}function T(m){return new Promise(M=>{k&&U(!1),k=M,g=document.activeElement;let{icon:F="\u26A0",title:S=ServerI18n.t("hudConfirmTitle"),subtitle:$="",severity:P="warn",body:w="",titleText:b,bodyText:x,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:B=ServerI18n.t("cancel"),width:N=480}=m||{},f=document.createElement("div");f.id=y,f.className=`admin-hud-modal admin-hud-modal--${P}`,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-hud-modal-title");let c=$?`<div class="admin-hud-modal__subtitle">${$}</div>`:"",a=typeof w=="string"?w:"",t=typeof w!="string"&&w&&w.nodeType;if(f.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${N}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${F}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${S}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${a}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${B}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,b!=null){let n=f.querySelector(".admin-hud-modal__title");n&&(n.textContent=String(b))}if(x!=null){let n=f.querySelector("[data-modal-body]");n&&(n.textContent=String(x))}if(t){let n=f.querySelector("[data-modal-body]");n.innerHTML="",n.appendChild(w)}f.addEventListener("click",function(n){let l=n.target.closest("[data-modal-action]");l&&(n.stopPropagation(),U(l.dataset.modalAction==="confirm"))}),document.body.appendChild(f),document.addEventListener("keydown",C);let d=P==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{f.querySelector(`.admin-hud-modal__btn--${d}`)?.focus({focusVisible:!0})})})}window.HudConfirm={open:T}})()});var je=ye(()=>{(function(){"use strict";var y=8,k=30;function g(P,w){return window.ServerI18n?window.ServerI18n.t(P,w):P}function h(P,w){return P?P.length>w?P.slice(0,w)+"\u2026":P:""}function L(P){return g(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function U(P,w){return P==="keyword"?h(w,k):w.slice(0,y)}async function C(P,w,b){if(!w)return{ok:!1,error:"empty-value"};try{var x={type:P==="keyword"?"keyword":"fingerprint",value:w};b&&(x.reason=b);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function T(P,w,b){if(!P)return{ok:!1,error:"empty-fingerprint"};var x=parseInt(w||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:x,reason:b||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function m(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var w=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return w.ok?{ok:!0}:{ok:!1,error:"HTTP "+w.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function M(P,w){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",L(P)).replace("{display}",U(P,w)),confirmLabel:g("lfBlockTitle")}):(window.showToast&&window.showToast(g("blockFailed"),!1),Promise.resolve(!1))}function F(P,w,b){window.showToast&&window.showToast(P?g(w,b||{}):g("blockFailed"),!!P)}async function S(P,w){if(!P||(w=w||{},!w.skipConfirm&&!await M("keyword",P)))return!1;var b=await C("keyword",P);return F(b.ok,"blockFallback",{label:L("keyword"),display:U("keyword",P)}),b.ok}async function $(P,w){if(!P||(w=w||{},!w.skipConfirm&&!await M("fingerprint",P)))return!1;var b=await C("fingerprint",P,w.reason);return F(b.ok,"blockFallback",{label:L("fingerprint"),display:U("fingerprint",P)}),b.ok}window.AdminModeration={callBlock:C,banFingerprint:T,recall:m,blockKeyword:S,blockFingerprint:$}})()});var Ue=ye(()=>{(function(){"use strict";function k(T){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",T.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),T}function g(T,m){let M=document.createElement("div");if(M.className="admin-skel "+(T||""),m)for(let F in m)M.style[F]=m[F];return M}function h({rows:T=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(F=>{M.appendChild(g("admin-skel-bar",{width:F+"px",height:"10px"}))}),m.appendChild(M);for(let F=0;F<T;F++){let S=document.createElement("div");S.className="admin-skel-list__row",S.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let $=document.createElement("div");$.className="admin-skel-list__col",$.appendChild(g("admin-skel-bar",{width:50+F*13%40+"%",height:"10px"})),$.appendChild(g("admin-skel-bar",{width:30+F*7%30+"%",height:"8px"})),S.appendChild($),S.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(S)}return k(m)}function L({cols:T=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${T}, 1fr)`;for(let M=0;M<T;M++){let F=document.createElement("div");F.className="admin-skel-card admin-skel-tile",F.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),F.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),F.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),F.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(F)}return k(m)}function U(){let T=document.createElement("div");T.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",m.appendChild(M),m.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),T.appendChild(m);let F=document.createElement("div");F.className="admin-skel-chart__body";let S=document.createElement("div");S.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>S.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),F.appendChild(S);let $=document.createElement("div");return $.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(w=>$.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:w+"%"}))),F.appendChild($),T.appendChild(F),k(T)}function C(T,m){let M={listRows:h,statsTiles:L,chart:U}[T];return M?M(m||{}).outerHTML:""}window.AdminSkeletons={listRows:h,statsTiles:L,chart:U,html:C}})()});var Ke=ye(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},k={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(L){let{icon:U="\xB7",title:C="",desc:T="",accent:m=y.cyan,ctaAccent:M,actionLabel:F,action:S,extra:$}=L||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),M&&P.style.setProperty("--admin-empty-cta",M);let w=document.createElement("div");if(w.className="admin-empty__icon",w.textContent=U,P.appendChild(w),C){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=C,P.appendChild(b)}if(T){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=T,P.appendChild(b)}if(F){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=F,typeof S=="function"&&b.addEventListener("click",S),P.appendChild(b)}if($){let b=document.createElement("div");b.className="admin-empty__extra",typeof $=="string"?b.innerHTML=$:b.appendChild($),P.appendChild(b)}return P}function h(L){let U=k[L];if(!U)return g({title:ServerI18n.t("emptyNoData"),desc:""});let C=Object.assign({},U,{title:U.titleKey?ServerI18n.t(U.titleKey):U.title,desc:U.descKey?ServerI18n.t(U.descKey):U.desc,actionLabel:U.actionLabelKey?ServerI18n.t(U.actionLabelKey):U.actionLabel});return g(C)}window.AdminEmpty={render:h,renderCustom:g,PRESETS:k}})()});var We=ye(()=>{(function(){"use strict";var y=8;function k(C){return C?String(C).slice(0,y):""}function g(C){if(!C||typeof C!="object")return{nickname:"",fp:"",ip:""};var T=C.fingerprint||C.fp||C.hash||"",m=C.clientIp||C.client_ip||C.ip||"",M=C.nickname||C.nick||"";return{nickname:String(M||""),fp:String(T||""),ip:String(m||"")}}function h(C){if(!C||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var T=new TextEncoder().encode(String(C));return window.crypto.subtle.digest("SHA-256",T).then(function(m){var M=Array.from(new Uint8Array(m));return M.map(function(F){return F.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function L(C){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var T=document.getElementById("sec-fingerprints");if(T&&!T.open&&(T.open=!0),T)try{T.scrollIntoView({behavior:"smooth",block:"start"})}catch{}h(C).then(function(m){if(m)var M=0,F=setInterval(function(){M+=1;var S=document.querySelector('[data-fp-hash="'+m+'"]');if(S){clearInterval(F),S.classList.add("admin-identity-flash"),setTimeout(function(){S.classList.remove("admin-identity-flash")},2e3);try{S.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(F)},250)})}function U(C){C=C||{};var T=C.nickname||"",m=C.fp||"",M=C.ip||"",F=!!C.compact,S=typeof C.onNicknameClick=="function"?C.onNicknameClick:null,$=typeof C.onFpClick=="function"?C.onFpClick:L,P=document.createElement("span");P.className="admin-identity-row";var w;if(S?(w=document.createElement("button"),w.type="button",w.className="admin-identity-nick is-clickable",w.addEventListener("click",function(f){f.stopPropagation(),S(T)})):(w=document.createElement("span"),w.className="admin-identity-nick"),T)w.textContent="@"+T;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var x=ServerI18n.t("anonymousPlaceholder");x&&x!=="anonymousPlaceholder"&&(b=x)}}catch{}w.textContent="@"+b,w.classList.add("is-guest")}if(T&&(w.title=T),P.appendChild(w),m){var H;if($?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(f){f.stopPropagation(),$(m)})):(H=document.createElement("span"),H.className="admin-identity-fp"),m==="new"){var B=document.createElement("span");B.className="admin-identity-dot",H.appendChild(B),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+k(m);H.title=m,P.appendChild(H)}if(M&&!F){var N=document.createElement("span");N.className="admin-identity-ip",N.textContent=M,N.title=M,P.appendChild(N)}return P}window.AdminIdentity={render:U,parse:g,focusFingerprint:L,hashFp:h,FP_DISPLAY_LEN:y}})()});var Ge=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(d,n){return window.csrfFetch(d,n)}function g(d,n){return window.showToast(d,n)}let h="default",L=[],U={};function C(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function T(){C();try{let d=await k("/admin/themes");if(!d.ok)return;let n=await d.json();h=n.active||"default",L=n.themes||[],U=n.overrides||{},P(L,h),x()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var m="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function F(d,n){var l=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(l)?l:n}function S(d){var n=d.styles||{},l=["color:"+F(n.color,"#ffffff")];if(n.textStroke){var o=Math.max(0,Math.min(6,Number(n.strokeWidth)||0));l.push("-webkit-text-stroke:"+o+"px "+F(n.strokeColor,"#000000")),l.push("paint-order:stroke fill")}if(n.textShadow){var e=Math.max(0,Math.min(40,Number(n.shadowBlur)||0));l.push("text-shadow:0 0 "+e+"px "+F(n.color,"#ffffff"))}var i=d.font&&d.font.family;return i&&/^[\w\s-]{1,40}$/.test(i)&&l.push("font-family:'"+i+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&l.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),l.join(";")}function $(d){var n=d.bg&&d.bg.gradient;return n&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(n).trim())?"background:"+String(n).trim():""}function P(d,n){let l=document.getElementById("themesList");if(l){if(l.innerHTML="",d.length===0){l.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(o=>{let e=o.name===n,i=y(ServerI18n.t("theme_"+o.name)!=="theme_"+o.name?ServerI18n.t("theme_"+o.name):o.label||o.name),v=document.createElement("div");v.className=`theme-pack-card${e?" is-active":""}`,v.innerHTML=`
        <div class="theme-pack-name">${i}</div>
        <div class="theme-pack-sample" style="${y($(o))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(S(o))}">
            <span class="theme-pack-sample-nick">${y(m)}</span>
            ${y(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${o.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${e?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(o.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,l.appendChild(v)}),l.querySelectorAll(".theme-delete-btn").forEach(o=>{o.addEventListener("click",async()=>{let e=o.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let v=await k("/admin/themes/"+encodeURIComponent(e),{method:"DELETE"});if(!v.ok)throw new Error("HTTP "+v.status);g(ServerI18n.t("themeDeleted"),!0),T()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),l.querySelectorAll(".theme-activate-btn").forEach(o=>{o.addEventListener("click",async()=>{let e=o.dataset.theme;try{let i=await k("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});if(i.ok)g(ServerI18n.t("themeActivated"),!0),h=e,P(d,e),x();else{let v=await i.json().catch(()=>({}));g(v.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function w(){return L.find(d=>d.name===h)||null}function b(d,n){let l=U[h]||{};if(l[d])return l[d];let o=n&&n.styles||{};return d==="stroke"?o.textStroke?Number(o.strokeWidth)>=3?"thick":"thin":"none":o.textShadow?Number(o.shadowBlur)>=10?"strong":"soft":"none"}function x(){let d=document.getElementById("themeDetail"),n=document.getElementById("themeDetailLabel");if(!d||!n)return;let l=w();if(!l)return;let o=ServerI18n.t("theme_"+l.name)!=="theme_"+l.name?ServerI18n.t("theme_"+l.name):l.label||l.name;n.textContent=ServerI18n.t("themeDetailGroup",{name:o}),["stroke","shadow"].forEach(i=>{let v=b(i,l);d.querySelectorAll(`[data-theme-seg="${i}"] [data-theme-opt]`).forEach(s=>{let r=s.getAttribute("data-theme-opt")===v;s.classList.toggle("is-active",r),s.setAttribute("aria-pressed",r?"true":"false")})});let e=d.querySelector('[data-theme-ov="color"]');if(e){let i=F((l.styles||{}).color,"#ffffff");e.value=/^#[0-9a-fA-F]{6}$/.test(i)?i:"#ffffff"}B(l),N(l)}var H=null;async function B(d){let n=document.getElementById("themeOvFont");if(!n)return;if(!H)try{let e=await fetch("/fonts",{credentials:"same-origin"});H=e.ok?(await e.json()).fonts||[]:[]}catch{H=[]}let o=(U[h]||{}).font_family||"";n.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+H.map(e=>{let i=String(e.name||e);return`<option value="${y(i)}"${i===o?" selected":""}>${y(i)}</option>`}).join("")}function N(d){let n=document.querySelector("[data-theme-preview-line]");n&&n.setAttribute("style",S(d))}async function f(d){try{let n=await k("/admin/themes/"+encodeURIComponent(h)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!n.ok)throw new Error("HTTP "+n.status);g(ServerI18n.t("themeDetailSaved"),!0),await T()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",n=>{let l=n.target.closest("[data-theme-opt]");if(!l)return;let o=l.closest("[data-theme-seg]");o&&f({[o.getAttribute("data-theme-seg")]:l.getAttribute("data-theme-opt")})}),d.addEventListener("change",n=>{let l=n.target.closest("[data-theme-ov]");l&&f({[l.getAttribute("data-theme-ov")]:l.value})}))}function a(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let n=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!n||!n.trim()))try{let l=await k("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:n.trim(),base:h})});if(!l.ok)throw new Error("HTTP "+l.status);g(ServerI18n.t("themeCreated"),!0),T()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function t(){T(),c(),a();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await k("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),T()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t}})()});var ze=ye(()=>{(function(){"use strict";function y(_,D){return window.csrfFetch(_,D)}function k(_,D){return window.showToast(_,D)}var g=window.ServerI18n;function h(_,D){return window.AdminUtils.styleTag(_,D)}let L=null;function U(){let _=document.getElementById("effectEditModal");return _?Array.from(_.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(D=>!D.hasAttribute("disabled")&&D.getAttribute("aria-hidden")!=="true"):[]}function C(_){let D=document.getElementById("effectEditModal");if(!D||D.classList.contains("hidden"))return;if(_.key==="Escape"){_.preventDefault(),T();return}if(_.key!=="Tab")return;let O=U();if(O.length===0){_.preventDefault();return}let W=O[0],I=O[O.length-1],R=document.activeElement;_.shiftKey&&R===W?(_.preventDefault(),I.focus()):!_.shiftKey&&R===I&&(_.preventDefault(),W.focus())}function T(){let _=document.getElementById("effectEditModal");_&&(_.classList.add("hidden"),_.classList.remove("flex"),_.removeEventListener("keydown",C),L&&(L.focus(),L=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(_){return!!m[_]}};let M=new Map,F=new Map;function S(_){if(!_||!_.styleId||!_.keyframes)return;let D="dme-user-"+_.styleId;if(document.getElementById(D))return;let O=document.createElement("style");O.id=D,O.textContent=_.keyframes,document.head.appendChild(O)}async function $(_){if(M.has(_))return M.get(_);if(F.has(_))return F.get(_);let D=(async()=>{try{let O=await y(`/admin/effects/${encodeURIComponent(_)}/content`);if(!O.ok)throw new Error("content fetch failed");let W=await O.json(),I=W&&W.content||"";if(!I)throw new Error("empty content");let R=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:I,params:{}})});if(!R.ok)throw new Error("preview failed");let j=await R.json();if(!j||!j.animation)throw new Error("no animation");return S(j),M.set(_,j),j}catch{return M.set(_,"failed"),null}finally{F.delete(_)}})();return F.set(_,D),D}function P(_,D){let O=_.querySelector(".effect-demo-text");if(!O)return;O.style.animation=D.animation||"",D.animationComposition&&(O.style.animationComposition=D.animationComposition),O.style.animationPlayState="paused";let W=b();W&&W.observe(_)}let w=null;function b(){return w||(typeof IntersectionObserver>"u"?null:(w=new IntersectionObserver(_=>{_.forEach(D=>{let O=D.target.querySelector(".effect-demo-text");O&&(O.style.animationPlayState=D.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),w))}let x=null;function H(_){let D=document.getElementById("effectPreviewParams");if(!D)return{};let O;try{let I=_.split(`
`),R=!1,j=0,J=null,K=0,G={};for(let te of I){let ne=te.trimStart(),z=te.length-ne.length;if(ne.startsWith("params:")){R=!0,j=z;continue}if(!R||ne===""||ne.startsWith("#"))continue;if(z<=j&&!ne.startsWith("params:")){R=!1;continue}let X=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(X&&z===j+2){J=X[1],K=z,G[J]={};continue}if(J&&z>K){let Z=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(Z){let se=Z[1],ie=Z[2].trim();if((ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),se!=="options"){let le=Number(ie);G[J][se]=isNaN(le)?ie:le}}if(ne.startsWith("- value:")){G[J].options||(G[J].options=[]);let se=ne.match(/^- value:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options.push({value:ie,label:ie})}}if(ne.startsWith("label:")&&G[J].options&&G[J].options.length>0){let se=ne.match(/^label:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options[G[J].options.length-1].label=ie}}}}O=G}catch{O={}}D.innerHTML="";let W={};for(let[I,R]of Object.entries(O||{})){let j=R.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let K=document.createElement("label");if(K.className="font-mono",K.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",K.textContent=`${I} (${j})`,J.appendChild(K),j==="select"&&Array.isArray(R.options)){let G=document.createElement("select");G.className="admin-ui-select",G.style.cssText="font-size:13px;padding:4px 8px",G.dataset.paramKey=I;for(let te of R.options){let ne=document.createElement("option");ne.value=te.value,ne.textContent=te.label||te.value,te.value===String(R.default)&&(ne.selected=!0),G.appendChild(ne)}W[I]=String(R.default||R.options[0]&&R.options[0].value||""),G.addEventListener("change",()=>{f()}),J.appendChild(G)}else{let G=R.min!=null?R.min:0,te=R.max!=null?R.max:10,ne=R.step!=null?R.step:j==="int"?1:.1,z=R.default!=null?R.default:G,X=document.createElement("div");X.className="flex items-center gap-2";let Z=document.createElement("input");Z.type="range",Z.min=G,Z.max=te,Z.step=ne,Z.value=z,Z.dataset.paramKey=I,Z.className="flex-1",Z.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(z),Z.addEventListener("input",()=>{se.textContent=Z.value,f()}),X.appendChild(Z),X.appendChild(se),J.appendChild(X),W[I]=z}D.appendChild(J)}return W}function B(){let _=document.getElementById("effectPreviewParams");if(!_)return{};let D={};return _.querySelectorAll("[data-param-key]").forEach(O=>{D[O.dataset.paramKey]=O.type==="range"?Number(O.value):O.value}),D}async function N(){let _=document.getElementById("effectEditModalTextarea"),D=document.getElementById("effectPreviewText"),O=document.getElementById("effectPreviewStyle"),W=document.getElementById("effectPreviewError");if(!_||!D||!O)return;let I=_.value;if(!I||I===g.t("effectLoadContent")||I===g.t("effectsNetworkError"))return;let R=B();W?.classList.add("hidden");try{let j=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:I,params:R})}),J=await j.json().catch(()=>({}));j.ok?(O.textContent=J.keyframes||"",D.style.animation=J.animation||"none",D.style.animationComposition=J.animationComposition||""):(D.style.animation="none",O.textContent="",W&&(W.textContent=J.error||g.t("previewFailed"),W.classList.remove("hidden")))}catch{D.style.animation="none",O.textContent="",W&&(W.textContent=g.t("effectsNetworkError"),W.classList.remove("hidden"))}}function f(){clearTimeout(x),x=setTimeout(()=>N(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
                ${h("effectPreviewStyle","")}
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",T),document.getElementById("effectEditModalCancel").addEventListener("click",T),document.getElementById("effectEditModal").addEventListener("click",I=>{I.target===I.currentTarget&&T()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let I=document.getElementById("effectEditModalTextarea");I&&(H(I.value),f())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{N()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let I=document.getElementById("effectEditModal"),R=document.getElementById("effectEditModalTextarea"),j=document.getElementById("effectEditModalSave"),J=I?.dataset.effectName;if(!(!J||!R)){j.disabled=!0;try{let K=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:R.value})}),G=await K.json().catch(()=>({}));K.ok?(k(G.message||g.t("effectSaveFallback"),!0),T(),await d()):k(G.error||g.t("saveFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{j.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let I=document.getElementById("effectReloadBtn");I&&(I.disabled=!0);try{let R=await y("/admin/effects/reload",{method:"POST"}),j=await R.json().catch(()=>({}));R.ok?(k(j.message||g.t("effectsReloadFallback")),await d()):k(j.error||g.t("reloadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{I&&(I.disabled=!1)}});async function _(I){if(!I)return;let R=new FormData;R.append("effectfile",I);try{let j=await y("/admin/effects/upload",{method:"POST",body:R}),J=await j.json().catch(()=>({}));j.ok?(k(J.message||g.t("effectUploadFallback")),await d()):k(J.error||g.t("uploadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}}let D=document.getElementById("effectUploadInput"),O=D&&!D.dataset.uploadWired;O&&(D.dataset.uploadWired="1"),(O?D:null)?.addEventListener("change",async I=>{await _(I.target.files?.[0]),I.target.value=""});let W=document.getElementById("sec-effects-mgmt");if(W){let I=0,R=G=>{G.preventDefault(),I++,W.classList.add("is-drag")},j=G=>{G.preventDefault()},J=G=>{G.preventDefault(),I=Math.max(0,I-1),I===0&&W.classList.remove("is-drag")},K=async G=>{G.preventDefault(),I=0,W.classList.remove("is-drag");let te=G.dataTransfer?.files?.[0];if(te){if(!/\.(dme|dme\.zip)$/i.test(te.name)){k(g.t("fxToastBadExt"),!1);return}await _(te)}};W.addEventListener("dragenter",R),W.addEventListener("dragover",j),W.addEventListener("dragleave",J),W.addEventListener("drop",K)}}function a(_){let D=(_||"").toLowerCase();return D.startsWith("glow")||D.includes("neon")?"GLOW":D.startsWith("shake")?"SHAKE":D.startsWith("wave")||D.startsWith("spin")||D.startsWith("bounce")||D.startsWith("zoom")||D.startsWith("fire")||D.includes("motion")?"MOTION":D.startsWith("rainbow")||D.startsWith("blink")||D.includes("color")?"COLOR":D.startsWith("type")||D.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function d(){let _=document.getElementById("effectsList");if(_)try{let D=await y("/admin/effects");if(!D.ok){_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let O=await D.json();t.all=O.effects||[],n(),o()}catch{_.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function n(){let _=document.getElementById("effectsFilterRow");if(!_)return;let D={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(j=>{D[a(j.name)]+=1});let O=t.all.length,W=[["ALL",g.t("fxChipAll"),O],["GLOW",g.t("fxCatGlow"),D.GLOW],["MOTION",g.t("fxCatMotion"),D.MOTION],["COLOR",g.t("fxCatColor"),D.COLOR],["SHAKE",g.t("fxCatShake"),D.SHAKE],["TEXT",g.t("fxCatText"),D.TEXT]];D.MISC>0&&W.push(["MISC",g.t("fxCatMisc"),D.MISC]);let I=W.map(([j,J,K])=>`<span class="hud-filter-chip ${t.filter===j?"is-active":""}" data-effect-filter="${j}">${J} ${K}</span>`).join(""),R=_.querySelector("[data-toolbar-spacer]");R?(_.querySelectorAll("[data-effect-filter]").forEach(j=>j.remove()),R.insertAdjacentHTML("beforebegin",I)):_.innerHTML=I,_.querySelectorAll("[data-effect-filter]").forEach(j=>{j.addEventListener("click",()=>{t.filter=j.dataset.effectFilter,n(),o()})})}function l(_){let D=(j,J)=>{let K=document.querySelector(j);K&&(K.textContent=J==null?"\u2014":String(J))},O=_.length,W=_.filter(j=>j.enabled!==!1).length,I=new Set(_.map(j=>a(j.name))),R=_.filter(j=>!m[j.name]).length;D("[data-eflib-total]",O),D("[data-eflib-active]",W),D("[data-eflib-cats]",I.size),D("[data-eflib-user]",R)}function o(){let _=document.getElementById("effectsList");if(!_)return;let D=t.all;l(D);let O=t.filter==="ALL"?D:D.filter(W=>a(W.name)===t.filter);if(!O.length){_.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(D.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}w&&w.disconnect(),_.innerHTML="",O.forEach(W=>{let I=a(W.name),R=I==="GLOW"?"is-glow":I==="COLOR"?"is-color":I==="TEXT"?"is-text":"",j=m[W.name]||"",J=!!j,K=document.createElement("div");K.className="hud-effect-card"+(t.selected===W.name?" is-selected":""),K.dataset.effectName=W.name,K.title=[W.description,`file: ${W.filename}`].filter(Boolean).join(`
`);var G="effect_"+W.name;let te=g.t(G)!==G?g.t(G):W.label||W.name,ne=J?"built-in":"user",z=j?`animation:${j};animation-play-state:paused;`:"";if(K.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${e(g.t("fxCat"+I.charAt(0)+I.slice(1).toLowerCase())||I)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${R}"><span class="effect-demo-text" style="${z}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${e(te)}</div>
          <div class="hud-effect-card-meta">${e(ne)} \xB7 ${e(W.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,_.appendChild(K),j){let se=b();se&&se.observe(K)}else{let se=M.get(W.name);se&&se!=="failed"?(S(se),P(K,se)):se!=="failed"&&$(W.name).then(ie=>{if(!ie)return;let le=_.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(W.name)}"]`);le&&P(le,ie)})}K.addEventListener("click",se=>{se.target.closest("[data-role]")||p(W)});let X=K.querySelector('[data-role="edit"]'),Z=K.querySelector('[data-role="delete"]');X.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),ie=document.getElementById("effectEditModalTitle"),le=document.getElementById("effectEditModalFile"),ue=document.getElementById("effectEditModalTextarea"),ke=document.getElementById("effectEditModalSave");if(!se)return;L=document.activeElement instanceof HTMLElement?document.activeElement:null,ie.textContent=W.label||W.name,le.textContent=W.filename,ue.value=g.t("effectLoadContent"),ue.disabled=!0,ke.disabled=!0,se.dataset.effectName=W.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",C),ue.focus();let Ie=document.getElementById("effectPreviewText"),ee=document.getElementById("effectPreviewStyle"),ae=document.getElementById("effectPreviewError"),de=document.getElementById("effectPreviewParams");Ie&&(Ie.style.animation="none"),ee&&(ee.textContent=""),ae&&ae.classList.add("hidden"),de&&(de.innerHTML="");try{let me=await y(`/admin/effects/${encodeURIComponent(W.name)}/content`),re=await me.json().catch(()=>({}));me.ok?(ue.value=re.content||"",ue.disabled=!1,ke.disabled=!1,ue.focus(),H(ue.value),N()):(ue.value=re.error||g.t("effectLoadContentFailed"),k(re.error||g.t("effectLoadContentFailed"),!1))}catch{ue.value=g.t("effectsNetworkError"),k(g.t("effectsNetworkError"),!1)}}),Z.addEventListener("click",async()=>{let se=W.label||W.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let le=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W.name})}),ue=await le.json().catch(()=>({}));le.ok?(k(ue.message||g.t("effectDeleteFallback"),!0),await d()):k(ue.error||g.t("deleteFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}})})}function e(_){return String(_??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(_){let D={name:"",label:"",description:"",params:[]};if(!_)return D;let O=_.split(`
`),W="top",I=null;for(let R of O){let j=R.replace(/\r$/,""),J=j.trimStart();if(!J||J.startsWith("#"))continue;let K=j.length-J.length;if(K===0){if(W="top",I&&(D.params.push(I),I=null),J==="params:"){W="params";continue}let G=J.match(/^([a-z_]+):\s*(.+)$/);G&&(G[1]==="name"?D.name=G[2].trim():G[1]==="label"?D.label=G[2].trim():G[1]==="description"&&(D.description=G[2].trim()));continue}if(!(W!=="params"&&W!=="param-fields"&&W!=="options")){if(K===2&&(W==="params"||W==="param-fields"||W==="options")){I&&(D.params.push(I),I=null);let G=J.match(/^(\w+):$/);G&&(I={key:G[1]},W="param-fields");continue}if(K===4&&W==="param-fields"&&I){let G=J.match(/^(\w+):\s*(.*)$/);if(G){let te=G[1],ne=G[2].trim();te==="label"?I.label=ne:te==="type"?I.type=ne:te==="default"?I.default=ne:te==="min"?I.min=parseFloat(ne):te==="max"?I.max=parseFloat(ne):te==="step"?I.step=parseFloat(ne):te==="options"&&(I.options=[],W="options")}continue}if(W==="options"&&I&&K>=6){let G=J.match(/^-\s*value:\s*(.+)$/);G&&(I.options||(I.options=[]),I.options.push({value:G[1].trim(),label:G[1].trim()}));let te=J.match(/^label:\s*(.+)$/);te&&I.options&&I.options.length>0&&(I.options[I.options.length-1].label=te[1].trim())}}}return I&&D.params.push(I),D}function v(_,D){let O=_.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),W=O?O[1]:"",I=_.match(/^animation:\s*["']?(.+?)["']?\s*$/m),R=I?I[1].trim():"";for(let j of D.params){let J=j.default!==void 0?j.default:"",K=new RegExp(`\\{${j.key}\\}`,"g");W=W.replace(K,J),R=R.replace(K,J)}return{keyframes:W,animation:R}}function s(_,D){if(_==="COLOR"){let O=D.find(W=>W.key==="duration");if(O&&O.default){let W=parseFloat(O.default);if(W<.25)return"crimson";if(W<.33)return"amber"}}if(_==="MOTION"){let O=D.find(W=>W.key==="height");if(O&&O.default){let W=parseFloat(O.default);if(W>30)return"crimson";if(W>24)return"amber"}}return"lime"}function r(_,D){return _==="COLOR"?D==="crimson"?g.t("fxHintFlashBlock"):D==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):D==="crimson"?g.t("fxHintAmpBlock"):D==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(_,D){let O=i(D),{keyframes:W,animation:I}=v(D,O),R=a(_.name),j=O.params.filter(ue=>ue.type!=="select"),J=O.params.filter(ue=>ue.type==="select"),K=s(R,O.params),G=K==="crimson"?"BLOCK":K==="amber"?"WARN":"OK",te=r(R,K),ne="fx-anim-"+_.name.replace(/[^a-z0-9]/gi,"-"),z=W&&I?h(ne,W):"",X=I?`animation:${I};animation-play-state:running;`:"",Z=j.map(ue=>{let ke=parseFloat(ue.default)||0,Ie=ue.min??0,ee=ue.max??100,ae=Math.max(0,Math.min(100,(ke-Ie)/(ee-Ie)*100)),de=(ue.label||"").match(/\(([^)]+)\)$/),me=de?de[1]:"",re=ue.label||ue.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${e(re)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${ke}<span style="color:var(--color-text-muted);margin-left:2px">${e(me)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${ae}%"></div>
          <div class="fx-slider-knob" style="left:${ae}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${Ie}${e(me)}</span><span>${ee}${e(me)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,se=J.map(ue=>{let ke=ue.options||[],Ie=String(ue.default||""),ee=ke.map(ae=>`<span class="fx-radio-btn${ae.value===Ie||ae.label===Ie?" is-active":""}">${e(ae.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${e(ue.label||ue.key)}</div>
        <div class="fx-radio-group">${ee||"<span>\u2014</span>"}</div>
      </div>`}).join(""),ie=["dark","light","photo"].map(ue=>{let ke=ue==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${ue}">
        <span class="fx-preview-bg-label">${ue.toUpperCase()}</span>
        <span class="fx-preview-text" style="${X}color:${ke}">ABC</span>
      </div>`}).join(""),le=`${z}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${Z}</div>
      </div>`;return se&&(le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${se}</div>
      </div>`),le+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${ie}</div>
      </div>
      <div class="fx-warn-box${K!=="lime"?" is-"+K:""}">
        <span class="fx-warn-chip${K!=="lime"?" is-"+K:""}">${G}</span>
        <span class="fx-warn-text">${e(te)}</span>
      </div>
    </div>`,le}async function p(_){t.selected=_.name;let D=document.getElementById("effectsInspector"),O=document.getElementById("effectsInspectorTitle"),W=document.getElementById("effectsInspectorKicker"),I=document.getElementById("effectsInspectorBody");if(D){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),O&&(O.textContent=_.label||_.name),W&&(W.textContent="LOADING"),I&&(I.className="hud-inspector-body",I.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(R=>{R.classList.toggle("is-selected",R.dataset.effectName===_.name)});try{let R=await y(`/admin/effects/${encodeURIComponent(_.name)}/content`),j=await R.json().catch(()=>({}));if(R.ok){let J=j.content||"";I&&(I.className="hud-inspector-body has-param-panel",I.innerHTML=u(_,J)),W&&(W.textContent=a(_.name))}else I&&(I.className="hud-inspector-body",I.textContent="# "+(j.error||g.t("effectLoadContentFailed"))),W&&(W.textContent="ERROR")}catch{I&&(I.className="hud-inspector-body",I.textContent="# "+g.t("effectsNetworkError")),W&&(W.textContent="NETWORK")}}}function A(){let _=document.getElementById("effectsInspectorReload"),D=document.getElementById("effectsInspectorEdit");_?.addEventListener("click",async()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}let O=t.all.find(W=>W.name===t.selected);O&&await p(O)}),D?.addEventListener("click",()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",A())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var Ve=ye(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(k,g){y[k]||(y[k]=[]),y[k].push(g)},off:function(k,g){y[k]=(y[k]||[]).filter(function(h){return h!==g})},emit:function(k,g){(y[k]||[]).forEach(function(h){h(g)})}}})()});var Je=ye(()=>{(function(){"use strict";let y="sec-events",k="/admin/audit?limit=200",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},L={events:[],filterSev:"all",filterCat:"all",timer:0};function U(B){let N=(B.source||B.kind||"").toLowerCase(),f=(B.action||"").toLowerCase();return N.includes("plugin")||f.includes("plugin")?"plugin":N.includes("webhook")||f.includes("webhook")?"webhook":N.includes("rate")||f.includes("rate")||f.includes("limit")?"rate":N.includes("filter")||f.includes("filter")?"filter":N.includes("overlay")||f.includes("overlay")||N==="broadcast"?"overlay":N.includes("backup")||f.includes("backup")?"backup":N.includes("msg")||N==="messaging"?"msg":N.includes("ws")||N==="websocket"?"ws":"system"}let C=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,T=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(B){let N=(B.action||B.kind||"").toLowerCase();return B.severity?B.severity:C.test(N)?"error":T.test(N)?"warn":"info"}function M(B){let N=B.source||"system",f=B.action||B.kind||"";return f?`${N.toUpperCase()}_${f.toUpperCase()}`:N.toUpperCase()}function F(B){if(!B)return"\u2014";let N=new Date(B*1e3),f=c=>String(c).padStart(2,"0");return`${f(N.getHours())}:${f(N.getMinutes())}:${f(N.getSeconds())}`}function S(B){if(B.message)return B.message;let N=B.meta||{},f=[];if(N.from&&N.to)f.push(`${N.from} \u2192 ${N.to}`);else if(N.text_preview)f.push(`"${N.text_preview.slice(0,60)}"`);else if(Object.keys(N).length){let c=Object.keys(N).slice(0,3);for(let a of c)f.push(`${a}=${JSON.stringify(N[a]).slice(0,30)}`)}return f.length?f.join(" \xB7 "):`${B.source||"system"}.${B.action||B.kind||"?"}`}function $(){return`
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
      </div>`}function P(){let B=document.querySelector("[data-ev-rows]");if(!B)return;let N=L.events,f=N.filter(t=>!(L.filterSev!=="all"&&m(t)!==L.filterSev||L.filterCat!=="all"&&U(t)!==L.filterCat));f.length===0?(B.innerHTML="",window.AdminEmpty?B.appendChild(window.AdminEmpty.render("events")):B.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):B.innerHTML=f.map(t=>{let d=m(t);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${h(F(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${h(M(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${h(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${h(S(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:N.length,info:0,warn:0,error:0};for(let t of N)c[m(t)]+=1;Object.keys(c).forEach(t=>{let d=document.querySelector(`[data-ev-cnt="${t}"]`);d&&(d.textContent=String(c[t]))});let a=document.querySelector("[data-ev-total]");a&&(a.textContent=`${f.length} / ${N.length}`)}async function w(){try{let B=await fetch(k,{credentials:"same-origin"});if(!B.ok)return;let N=await B.json();L.events=Array.isArray(N.events)?N.events:[],P()}catch{}}function b(){let B=document.getElementById(y);B&&B.addEventListener("click",N=>{let f=N.target.closest("[data-ev-sev]");if(f){B.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===f)),L.filterSev=f.dataset.evSev,P();return}let c=N.target.closest("[data-ev-cat]");if(c){B.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===c)),L.filterCat=c.dataset.evCat,P();return}let a=N.target.closest("[data-ev-action]");if(a){if(a.dataset.evAction==="refresh")w();else if(a.dataset.evAction==="export"){let t=new Blob([JSON.stringify(L.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(t),n=document.createElement("a");n.href=d,n.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function x(){let B=document.querySelector(".admin-dash-grid"),N=document.getElementById(y);if(!N)return;let c=(B?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";N.style.display=c?"":"none",c?(w(),L.timer||(L.timer=setInterval(w,15e3))):L.timer&&(clearInterval(L.timer),L.timer=0)}function H(){let B=document.getElementById("settings-grid");!B||document.getElementById(y)||(B.insertAdjacentHTML("beforeend",$()),b(),x())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H(),x()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",x),document.addEventListener("admin-panel-rendered",()=>{H(),x()}),H()})})()});var Ye=ye(()=>{(function(){"use strict";let y="sec-modqueue",k="/admin/modqueue/list",L=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},U={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},C={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},T={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(f){let c=0,a=String(f||"");for(let t=0;t<a.length;t++)c=c*31+a.charCodeAt(t)&65535;return c%360}function M(f){if(!f.created_at_ms)return null;let c=(Date.now()-f.created_at_ms)/1e3,a=Math.max(0,U.autoRejectSec-c);return Math.ceil(a)}function F(f,c){let a=(f.severity||"low").toLowerCase(),t=C[a]||C.low,d=m(f.fp),n=String(f.fp||"\u2014").slice(0,8),l=f.nick||f.nickname||ServerI18n.t("audienceAnonymous"),o=(l||"?").slice(0,2).toUpperCase(),e=c==="pending"?M(f):null,i=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${L(f.id||"")}">${L(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${L(f.id||"")}">${L(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${L(f.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",v=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${L(ServerI18n.t("modqueueStampApproved"))} \xB7 ${L(f.resolved_by||"admin")} \xB7 ${L(f.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${f.auto_rejected?`${L(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${L(ServerI18n.t("modqueueAutoRejectTimeout",{n:U.autoRejectSec}))}`:`${L(ServerI18n.t("modqueueStampRejected"))} \xB7 ${L(f.resolved_by||"admin")} \xB7 ${L(f.resolved_ago||"")}`}
        </div>`:"",s=c==="pending"&&e!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${e}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${L(f.id||"")}" data-mq-sev="${L(a)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${L(o)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${L(l)}</div>
            <div class="admin-mq-card__fp">fp:${L(n)}</div>
          </div>
          <div class="admin-mq-card__time">${L(f.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${L(f.content||f.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${L(ServerI18n.t(T[a]||T.low))}</span>
          <span class="admin-mq-card__rule">${L(ServerI18n.t("modqueueRuleLabel"))}: ${L(f.rule||f.matched_rule||"?")}</span>
          ${s}
        </div>
        ${i}
        ${v}
      </div>`}function S(f,c,a){f&&(f.innerHTML=c.map(t=>F(t,a)).join(""))}function $(){let f=document.getElementById(y);if(!f)return;f.querySelectorAll("[data-mq-bulk]").forEach(a=>{a.disabled=!0}),f.querySelector(".admin-mq__body").hidden=!0;let c=f.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let f=document.getElementById(y);if(!f)return;if(U.pending.length+U.approved.length+U.rejected.length===0){$();return}f.querySelector(".admin-mq__body").hidden=!1;let a=f.querySelector("[data-mq-empty]");a&&(a.hidden=!0),S(f.querySelector("[data-mq-col-pending]"),U.pending,"pending"),S(f.querySelector("[data-mq-col-approved]"),U.approved,"approved"),S(f.querySelector("[data-mq-col-rejected]"),U.rejected,"rejected");let t=(o,e)=>{f.querySelectorAll(o).forEach(i=>{i.textContent=String(e)})};t("[data-mq-cnt-pending]",U.pending.length),t("[data-mq-cnt-approved]",U.approved.length),t("[data-mq-cnt-rejected]",U.rejected.length);let d=U.pending.length===0;f.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=d});let n=U.pending[U.pending.length-1],l=f.querySelector("[data-mq-oldest]");if(l){let o=n?M(n):null;l.textContent=o!=null?`oldest: ${o}s`:""}t("[data-mq-throughput]",U.stats.throughput.toFixed?U.stats.throughput.toFixed(1):U.stats.throughput),t("[data-mq-avg-review]",U.stats.avg_review_sec.toFixed?U.stats.avg_review_sec.toFixed(1):U.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round(U.stats.auto_reject_pct||0)+"%")}async function w(){try{let f=await fetch(k,{credentials:"same-origin"});if(!f.ok){U.pending=[],U.approved=[],U.rejected=[],P();return}let c=await f.json();U.pending=Array.isArray(c.pending)?c.pending:[],U.approved=Array.isArray(c.approved)?c.approved:[],U.rejected=Array.isArray(c.rejected)?c.rejected:[],U.stats=c.stats||U.stats,typeof c.auto_reject_sec=="number"&&(U.autoRejectSec=c.auto_reject_sec),P()}catch{}}async function b(f,c,a){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f,...a||{}})});if(t.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),w();else{let d=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function x(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${L(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${L(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${L(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${L(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${L(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function H(){let f=document.getElementById(y);f&&f.addEventListener("click",async c=>{let a=c.target.closest("[data-mq-action]");if(a){let d=a.dataset.mqId,n=a.dataset.mqAction;(n==="approve"||n==="reject")&&b(d,n);return}let t=c.target.closest("[data-mq-bulk]");if(t){let d=t.dataset.mqBulk,n=d==="approve-low";if(!await window.HudConfirm?.open({icon:n?"\u2713":"\u2298",title:n?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:n?"warn":"danger",body:n?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:n?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let o=d.startsWith("approve")?"approve":"reject",e=d.endsWith("low")?"low":"high";b(null,"bulk",{action:o,severity:e})}})}function B(){let f=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!c)return;let a=(location.hash||"").replace("#/","").split("/"),t=f?.dataset.activeRoute||a[0]||"",d=f?.dataset.activeLeaf||a[1]||"",n=t==="modqueue"||t==="moderation"&&(d==="queue"||d===""||d==="moderation");c.style.display=n?"":"none",n?(U.timer||(w(),U.timer=setInterval(w,4e3)),U.countdownTimer||(U.countdownTimer=setInterval(P,1e3))):(U.timer&&(clearInterval(U.timer),U.timer=0),U.countdownTimer&&(clearInterval(U.countdownTimer),U.countdownTimer=0))}function N(){let f=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!f||document.getElementById(y)||(f.insertAdjacentHTML("beforeend",x()),H(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&N(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{N(),B()}),N()})})()});var Qe=ye(()=>{(function(){"use strict";let y="sec-modbans-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(x){return String(x).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],h={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},L={fingerprint:"FP",ip:"IP",nick:"NICK"},U={rows:[],refreshTimer:0};async function C(){try{let x=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!x.ok)return;let H=await x.json();U.rows=Array.isArray(H.bans)?H.bans:[],M()}catch{}}function T(x){if(!x||x<=0)return"\u2014";let H=Math.floor(x/86400),B=Math.floor(x%86400/3600),N=Math.floor(x%3600/60);return H>0?`${H}d ${B}h`:B>0?`${B}h ${N}m`:`${N}m`}function m(x){let H=x.target_kind;return H==="fingerprint"?`fp:${(x.target||"").slice(0,8)}`:H==="nick"?`@${x.target}`:x.target||"\u2014"}function M(){let x=document.querySelector("[data-modbans-list]");if(!x)return;let H=U.rows||[],B=document.querySelector("[data-modbans-count]");if(B&&(B.textContent=String(H.length)),H.length===0){x.innerHTML="";let N=window.AdminEmpty.render("blacklist");N.dataset.emptyKind="modbans",x.appendChild(N);return}x.innerHTML=H.map(function(N){let f=N.status==="expired",c=N.status==="permanent",a="admin-modbans-chip is-"+N.status,t=c?ServerI18n.t("modbansPermanent"):f?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:T(N.remaining_s)}),d=encodeURIComponent(N.target_kind)+"|"+encodeURIComponent(N.target);return`
        <div class="admin-modbans-row ${f?"is-expired":""}">
          <span class="admin-modbans-target">${k(m(N))}</span>
          <span class="admin-modbans-kind">${k(L[N.target_kind]||N.target_kind)}</span>
          <span class="admin-modbans-reason">${k(N.reason||"\u2014")}</span>
          <span class="${a}">
            ${N.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${k(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${f?"disabled":""}
            title="${f?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${f?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function F(x){let H=x||{},B=H.kind||"ban",N=window.HudConfirm,f=!H.target,c=H.target_kind||"fingerprint",a=H.target||"";return new Promise(function(t){if(!N){t(!1);return}let d=86400,n=!1,l=12,o="hour",e=document.createElement("div");e.className="admin-modbans-modal-body",e.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${k(h[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${k(L[c]||"?")} ${k((B||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${k(a?m({target_kind:c,target:a}):"\u2014")}</div>
          </div>
        </div>
        ${f?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(G){return`<button type="button" class="admin-modbans-modal-preset${G===c?" is-active":""}"
                data-modbans-target-kind="${G}">${k(h[G])} ${k(L[G])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(G){return`<button type="button" class="${"admin-modbans-modal-preset"+(G.defaultPick?" is-active":"")+(G.permanent?" is-permanent":"")}" data-modbans-duration="${G.val}">${G.labelKey?ServerI18n.t(G.labelKey):G.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let i=e.querySelector("[data-modbans-custom-row]"),v=e.querySelector("[data-modbans-custom-input]"),s=e.querySelector("[data-modbans-custom-seconds]"),r=e.querySelector("[data-modbans-when]"),u=e.querySelector("[data-modbans-custom]"),p=e.querySelector("[data-modbans-target]"),A=e.querySelector("[data-modbans-target-icon]"),E=e.querySelector("[data-modbans-target-label]"),_=e.querySelector("[data-modbans-target-val]"),D=function(){A.textContent=h[c]||"?",E.textContent=`${L[c]||"?"} ${(B||"ban").toUpperCase()}`,_.textContent=a?m({target_kind:c,target:a}):"\u2014"},O=function(){return Math.max(1,parseInt(v.value,10)||1)*(o==="day"?86400:3600)},W=function(){if(d===0){r.textContent=ServerI18n.t("modbansWhenPermanent"),r.classList.remove("is-custom");return}let G=new Date(Date.now()+d*1e3),te=z=>String(z).padStart(2,"0"),ne=`${G.getFullYear()}-${te(G.getMonth()+1)}-${te(G.getDate())} ${te(G.getHours())}:${te(G.getMinutes())}`;n?(r.textContent=ServerI18n.t("modbansWhenCustom",{n:l,unit:ServerI18n.t(o==="day"?"modbansDay":"modbansHour"),stamp:ne}),r.classList.add("is-custom")):(r.textContent=ServerI18n.t("modbansWhenPreset",{dur:T(d),stamp:ne}),r.classList.remove("is-custom"))},I=function(){let G=O();s.textContent=`= ${G.toLocaleString()}s`,n&&(l=Math.max(1,parseInt(v.value,10)||1),d=G,W())},R=e.querySelector("[data-modbans-presets]"),j=function(){n=!0,i.hidden=!1,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(G){G.classList.toggle("is-active",G===u)}),I()},J=function(G){n=!1,i.hidden=!0,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(te){te.classList.toggle("is-active",te===G)})};D(),W(),I(),e.addEventListener("click",function(G){let te=G.target.closest("[data-modbans-target-kind]");if(te){c=te.dataset.modbansTargetKind,te.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(X){X.classList.toggle("is-active",X===te)}),D();return}if(G.target.closest("[data-modbans-custom]")){j();return}let ne=G.target.closest("[data-modbans-custom-unit]");if(ne){o=ne.dataset.modbansCustomUnit||"hour",e.querySelectorAll("[data-modbans-custom-unit]").forEach(function(X){X.classList.toggle("is-active",X===ne)}),I();return}let z=G.target.closest("[data-modbans-duration]");z&&(d=parseInt(z.dataset.modbansDuration,10)||0,J(z),W())}),v.addEventListener("input",I),p&&p.addEventListener("input",function(){a=p.value.trim(),D()});let K=e.querySelector("[data-modbans-reason]");N.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:e,width:480}).then(function(G){if(!G){t(!1);return}if(!a){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}d===0?N.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${k(m({target_kind:c,target:a}))}</b>`})}).then(function(te){if(!te){t(!1);return}S(c,a,d,K.value.trim(),B).then(t)}):S(c,a,d,K.value.trim(),B).then(t)})})}async function S(x,H,B,N,f){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:x,target:H,duration_s:B,reason:N||"",kind:f||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(B===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:T(B)}),!0),C(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function $(x){let H=(x||"").split("|");if(H.length!==2)return;let B=decodeURIComponent(H[0]),N=decodeURIComponent(H[1]);try{let f=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:N})});if(!f.ok)throw new Error(`HTTP ${f.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),C()}catch(f){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:f.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function w(){let x=document.getElementById(y);if(!x||x.dataset.modbansBound==="1")return;x.dataset.modbansBound="1",x.addEventListener("click",function(B){if(B.target.closest("[data-modbans-add]")){F({kind:"ban"});return}let N=B.target.closest("[data-modbans-unban]");N&&!N.disabled&&$(N.dataset.modbansUnban)});let H=x.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let x=document.getElementById("settings-grid");!x||document.getElementById(y)||(x.insertAdjacentHTML("beforeend",P()),w(),C(),U.refreshTimer||(U.refreshTimer=setInterval(C,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:F,refreshList:C,formatTarget:m,formatRemaining:T}})()});var Xe=ye(()=>{(function(){"use strict";let y="admin-mobile-nav-root",k=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],h={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},L=!1,U=0;function C(){return`
      <nav id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow id="admin-mobile-more-menu" hidden>
          ${g.map(w=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${w.route}">
              <span class="admin-mobile-nav__o-icon">${w.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${w.labelKey?ServerI18n.t(w.labelKey):w.label}</span>
                <span class="admin-mobile-nav__o-desc">${w.descKey?ServerI18n.t(w.descKey):w.desc||""}</span>
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
          ${k.map(w=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${w.id}" data-mn-route="${w.route||""}" ${w.id==="more"?'aria-expanded="false" aria-controls="admin-mobile-more-menu"':'aria-current="false"'}>
              <span class="admin-mobile-nav__icon">${w.icon}</span>
              <span class="admin-mobile-nav__label">${w.labelKey?ServerI18n.t(w.labelKey):w.label}</span>
              ${w.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${w.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </nav>`}function T(){let w=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=h[w]||w;return k.some(x=>x.id===b)?b:g.some(x=>x.route===b)?"more":""}function m(){let w=document.getElementById(y);if(!w)return;let b=T();w.querySelectorAll("[data-mn-tab]").forEach(x=>{x.classList.toggle("is-active",x.dataset.mnTab===b),x.dataset.mnTab!=="more"&&x.setAttribute("aria-current",x.dataset.mnTab===b?"page":"false")})}function M(w){let b=document.getElementById(y);if(!b)return;L=w,b.dataset.overflow=w?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!w,b.querySelector("[data-mn-backdrop]").hidden=!w;let x=b.querySelector("[data-mn-tab='more']");x?.classList.toggle("is-active",w),x?.setAttribute("aria-expanded",w?"true":"false")}function F(w){if(w.target.closest("[data-mn-backdrop]")){M(!1);return}if(w.target.closest("[data-mn-logout]")){M(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let b=w.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){M(!L);return}M(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let x=w.target.closest("[data-mn-route]");x&&x.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+x.dataset.mnRoute)}async function S(){try{let w=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!w.ok)return;let b=await w.json(),x=Array.isArray(b.pending)?b.pending.length:0;U=x;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(x),H.hidden=!(x>0)}catch{}}function $(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let w=0;function b(){let x=document.activeElement,H=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(()=>setTimeout(b,50))})}function P(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",C()),document.addEventListener("click",F),window.addEventListener("hashchange",()=>{M(!1),m()}),m(),S(),setInterval(S,8e3),$())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var Ze=ye(()=>{(function(){"use strict";var y="admin-session-expired-root",k=!1,g=null;function h(m,M){try{var F=window.ServerI18n&&ServerI18n.t(m);return F&&F!==m?F:M}catch{return M}}function L(){var m=document.getElementById(y);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),k=!1,g&&g.focus)try{g.focus()}catch{}g=null}function U(m){if(m.key==="Tab"){var M=document.getElementById(y);if(M){var F=M.querySelectorAll("input, button");if(F.length){var S=F[0],$=F[F.length-1];m.shiftKey&&document.activeElement===S?(m.preventDefault(),$.focus()):!m.shiftKey&&document.activeElement===$&&(m.preventDefault(),S.focus())}}}}function C(){if(!(k||document.getElementById(y))){k=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=y,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+h("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+h("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+h("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+h("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+h("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+h("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",U,!0);var M=m.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(F){F.preventDefault(),T(m,M)})}}function T(m,M){var F=m.querySelector("[data-sx-error]"),S=m.querySelector(".admin-sx__submit");F.hidden=!0,S.disabled=!0;var $=new URLSearchParams;$.set("password",M.value),m.querySelector("#admin-sx-remember").checked&&$.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:$.toString()}).then(function(w){return w.json().then(function(b){return{status:w.status,data:b}},function(){return{status:w.status,data:{}}})}).then(function(w){if(S.disabled=!1,w.status===200&&w.data&&w.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&w.data.csrf_token&&(b.content=w.data.csrf_token),document.removeEventListener("keydown",U,!0),L(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(h("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}w.status===429?F.textContent=h("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):F.textContent=h("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),F.hidden=!1,M.select()}).catch(function(){S.disabled=!1,F.textContent=h("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),F.hidden=!1})}window.AdminSessionExpired={open:C,close:L,isOpen:function(){return k}}})()});var et=ye(()=>{(function(){"use strict";let y="admin-reconnect-banner",L=0,U=0,C="ok",T=0,m=5e3,M=!1,F=0;function S(a){if(C!==a){if(C=a,a==="ok"||a==="dismissed"){P(),a==="ok"&&(L=0,U=0,m=5e3);return}$()}}function $(){let a=document.getElementById(y);a||(a=document.createElement("div"),a.id=y,a.className="admin-rcb",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.insertBefore(a,document.body.firstChild)),a.dataset.state=C;let t=C==="exhausted",d=t?"admin-rcb--crimson":"admin-rcb--amber";a.className=`admin-rcb ${d}`,a.innerHTML=t?b():w(),a.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),a.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>S("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),F||(F=setInterval(x,250))}function P(){let a=document.getElementById(y);a&&a.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),F&&(clearInterval(F),F=0)}function w(){let a=Math.max(0,(T-Date.now())/1e3),t=m/1e3,d=Math.min(100,(t-a)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:U})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${d}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function b(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function x(){if(C!=="reconnecting")return;let a=document.getElementById(y);if(!a)return;let t=Math.max(0,(T-Date.now())/1e3),d=m/1e3,n=Math.min(100,(d-t)/d*100),l=a.querySelector(".admin-rcb__progress-fill");l&&(l.style.width=n+"%")}function H(){U=0,L=0,m=5e3,S("reconnecting"),B()}async function B(){try{let a=await fetch("/admin/bootstrap",{credentials:"same-origin"});a.ok?N():a.status===401||a.status===403?S("ok"):f()}catch{f()}}function N(){S("ok")}function f(){if(L+=1,U+=1,U>=10){S("exhausted");return}L>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,U-1))),T=Date.now()+m,S("reconnecting"),setTimeout(B,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let a=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{M=!1,N()});async function d(n){try{let l=await n;return l&&l.ok?C!=="ok"&&C!=="dismissed"&&N():l&&l.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):l&&l.status>=500&&f(),l}catch(l){throw f(),l}}typeof a=="function"&&(window.csrfFetch=function(){return d(a.apply(this,arguments))}),window.fetch=function(n,l){let o=typeof n=="string"?n:n&&n.url||"",e=t.call(this,n,l);return o.startsWith("/admin/")||o.indexOf("//")===-1&&o.startsWith("admin/")?d(e):e}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var tt=ye(()=>{(function(){"use strict";let y="admin-help-drawer-root",k={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],h=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function L(w){return w==null?"":String(w).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function U(){let w=(location.hash||"").replace("#/","").split("/")[0]||"";return k[w]?w:"_default"}function C(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function T(){let w=k[U()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",x=w.titleKey?ServerI18n.t(w.titleKey):w.title,H=w.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${L(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),B=w.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${L(ServerI18n.t(w.fieldTipKey))}</span>
      </div>`:"",N=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${L(c.term)}</div>
        <div class="admin-help__glossary-def">${L(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),f=h.map(c=>`
      <a class="admin-help__resource" href="${L(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${L(c.label)}</span>
        <span class="admin-help__resource-url">${L(c.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${L(x)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${B}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${L(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${N}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${f}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+L(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let w=document.getElementById(y);w||(document.body.insertAdjacentHTML("beforeend",C()),w=document.getElementById(y),w.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){M();return}b.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),w.querySelector("[data-help-body]").innerHTML=T(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",S)}function M(){let w=document.getElementById(y);w&&w.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",S)}function F(){document.getElementById(y)?M():m()}function S(w){w.key==="Escape"&&(w.preventDefault(),M())}function $(w){let b=w.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||w.key==="F1"&&(w.preventDefault(),F())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",$)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:M,toggle:F}})()});var nt=ye(()=>{(function(){"use strict";var y="admin-shortcuts-root",k=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(f,c){try{var a=window.ServerI18n&&ServerI18n.t(f);return a&&a!==f?a:c}catch{return c}}function h(f,c){window.showToast&&window.showToast(f,c!==!1)}function L(f,c){return(window.csrfFetch||window.fetch)(f,c||{})}function U(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function C(){var f=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).mode==="live")}catch{}try{var a=await L("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:f?"standby":"live"})});if(!a.ok)throw new Error("HTTP "+a.status);h(g(f?"ksToastDisplayOff":"ksToastDisplayOn",f?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{h(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function T(){try{var f=await L("/admin/overlay/clear",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);h(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{h(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var f="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).state||"idle")}catch{}if(f==="idle"){location.hash="#/polls",h(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var a=f==="active";try{var t=await L(a?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);h(g(a?"ksToastPollEnded":"ksToastPollStarted",a?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{h(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(f){return k?f.metaKey:f.ctrlKey}var F=k?"\u2318":"Ctrl",S=[{group:"global",keys:[F,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(f){return M(f)&&(f.key==="k"||f.key==="K")},run:U},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(f){return f.key==="?"&&!M(f)&&!f.altKey||f.key==="/"&&M(f)},run:function(){H()}},{group:"global",keys:[F,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(f){return M(f)&&f.shiftKey&&(f.key==="d"||f.key==="D")},run:C},{group:"global",keys:[F,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(f){return M(f)&&f.shiftKey&&f.key==="Backspace"},run:T},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(f){return!M(f)&&"jkJK".indexOf(f.key)>=0},run:function(f){window.AdminLiveFeed.moveFocus(f.key==="j"||f.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(f){return!M(f)&&(f.key==="b"||f.key==="B")},run:function(f){window.AdminLiveFeed.blockFocused(f.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(f){return!M(f)&&f.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(f){return!M(f)&&(f.key==="p"||f.key==="P")},run:m}];function $(f){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(f):f==null?"":String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function P(f){return S.filter(function(c){return c.group===f}).map(function(c){var a=c.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+$(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+$(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+a+"</span></div>"}).join("")}function w(){var f=document.getElementById(y);f&&f.remove(),document.removeEventListener("keydown",b,!0)}function b(f){(f.key==="Escape"||f.key==="?")&&(f.preventDefault(),w())}function x(){if(!document.getElementById(y)){var f=document.createElement("div");f.id=y,f.className="admin-ks",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-ks-title"),f.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+$(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+$(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+$(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+$(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+$(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(f),f.addEventListener("click",function(a){a.target.closest("[data-ks-close]")&&w()}),document.addEventListener("keydown",b,!0);var c=f.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function H(){document.getElementById(y)?w():x()}function B(f){if(!f)return!1;if(f.isContentEditable)return!0;var c=(f.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function N(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(f){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=B(document.activeElement),a=0;a<S.length;a++){var t=S[a];if(t.group==="feed"){if(c||!N())continue}else if(c&&!M(f))continue;if(t.match(f)){f.preventDefault(),t.run(f);return}}}),window.AdminShortcuts={open:x,close:w,toggle:H,list:function(){return S.slice()}}})()});var at=ye(()=>{(function(){"use strict";let y="theme-mode",k="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let $=localStorage.getItem(k);($==="light"||$==="dark"||$==="auto")&&(localStorage.setItem(y,$),localStorage.removeItem(k))}catch{}})();function L(){try{let S=localStorage.getItem(y);if(S==="light"||S==="dark"||S==="auto")return S}catch{}return"auto"}function U(S){try{localStorage.setItem(y,S)}catch{}}function C(S){let $=document.documentElement;S==="auto"?$.removeAttribute("data-theme"):$.setAttribute("data-theme",S),m(S)}function T(S){return S==="light"||S==="dark"?S:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(S){let $=document.getElementById(g);if(!$)return;let P=T(S);$.dataset.mode=S,$.dataset.effective=P,$.textContent=S==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",$.title=S==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):S==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let S=L(),$=S==="auto"?"light":S==="light"?"dark":"auto";U($),C($)}function F(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let S=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,$=document.getElementById(g);if($){S&&$.classList.contains("admin-theme-toggle--floating")&&S.parentNode&&!S.parentNode.contains($)&&($.classList.remove("admin-theme-toggle--floating"),S.parentNode.insertBefore($,S));return}let P=document.createElement("button");P.id=g,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",M),S&&S.parentNode?S.parentNode.insertBefore(P,S):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(L())}if(C(L()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{L()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",S=>{S.key===y&&C(L())}),window.AdminThemeSwitcher={getMode:L,setMode:function(S){S!=="auto"&&S!=="light"&&S!=="dark"||(U(S),C(S),m(S),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:S}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0})}):(F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0}))})()});var it=ye(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},k=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,h){y[g]=h,k.forEach(function(L){L(g,h)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,h)},subscribe:function(g){k.push(g)},getAll:function(){return Object.assign({},y)}}})()});var st=ye(()=>{(function(){"use strict";let g=0;function h(){return window.__adminCtx||{}}function L(){let m=h();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function U(){let m=L();if(m&&typeof m.OpsContact<"u"){let M=m.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function C(){let m=h().appContainer||document.getElementById("app-container");if(!m)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
    `;let F=m.querySelector("[data-login-reveal]");F&&F.addEventListener("click",()=>{let w=document.getElementById("password");if(!w)return;let b=w.type==="text";w.type=b?"password":"text",F.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{w.focus()}catch{}});let S=document.getElementById("loginForm"),$=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(S){try{let w=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(w)&&w>0){g=w;let b=Math.max(0,5-g);if(P&&g>0&&b>0){P.hidden=!1;let x=document.getElementById("password");x&&x.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}S.addEventListener("submit",async w=>{if(w.preventDefault(),!$)return;let b=new URLSearchParams;b.set("password",$.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let x=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(x.status===429){let H=x.headers.get("Retry-After"),B=parseInt(H,10),N=Number.isFinite(B)&&B>0?B:300;T(N);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(x){console.error("Login submit failed:",x),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function T(m){let M=document.getElementById("adminLoginCard");if(!M)return;let F=U(),S=F?`<a class="admin-lockout-contact" href="${F}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
        ${S}
      </div>
    `;let $=document.getElementById("lockoutCountdown"),P=m,w=x=>{let H=Math.floor(x/60),B=x%60;return`${String(H).padStart(2,"0")}:${String(B).padStart(2,"0")}`};$&&($.textContent=w(P));let b=setInterval(()=>{P-=1,$&&($.textContent=w(Math.max(0,P))),P<=0&&(clearInterval(b),g=0,C(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:C,renderLockout:T}})()});var ot=ye(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function k(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}async function g(){try{let e=y();await e.prime();let i=e.get("history_stats"),[v,s,r]=await Promise.all([i?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!s.ok)return;let u=i||(v&&v.ok?await v.json():null);if(!u)return;let p=(await s.json()).distribution||[],A=u.stats&&u.stats.total||0,E=p.reduce((j,J)=>J.count>(j?.count||-1)?J:j,null),_=E?E.count:0,D=E?(E.hour||"").slice(-5):"\u2014",O=document.querySelector('[data-kpi="messages"]');O&&(O.querySelector("[data-kpi-value]").textContent=A.toLocaleString());let W=document.querySelector('[data-kpi="peak"]');W&&(W.querySelector("[data-kpi-value]").textContent=_.toLocaleString());let I=document.querySelector('[data-kpi="unique-fp"]');if(I){let j=new Set;(u.records||[]).forEach(J=>{let K=J.fingerprint||J.fp||J.user_fingerprint;K&&j.add(K)}),I.querySelector("[data-kpi-value]").textContent=j.size.toLocaleString()}let R=document.querySelector('[data-kpi="session"]');if(R){let j=r&&r.ok?await r.json():null,J=j&&j.status==="live",K=R.querySelector("[data-kpi-value]");if(J&&j.started_at){let G=Math.max(0,Math.floor(Date.now()/1e3-j.started_at)),te=Math.floor(G/3600),ne=Math.floor(G%3600/60);K.textContent=te>0?`${te}:${String(ne).padStart(2,"0")}:${String(G%60).padStart(2,"0")}`:`${ne}:${String(G%60).padStart(2,"0")}`}else K.textContent="\u2014"}}catch{}}function h(e,i){let v=document.querySelector(e);if(v){if(typeof i!="number"||i<=0){v.hidden=!0;return}v.hidden=!1,v.textContent=i>999?"999+":String(i)}}async function L(){try{let e=y();await e.prime();let i=e.get("blacklist"),v=e.get("widgets"),s=e.get("history_stats"),r=e.get("effects"),u=e.get("themes");h("[data-count-blacklist]",Array.isArray(i)?i.length:0),h("[data-count-widgets]",Array.isArray(v?.widgets)?v.widgets.length:0),h("[data-count-messages]",s?.stats?.last_24h||0),h("[data-count-effects]",Array.isArray(r?.effects)?r.effects.length:0),h("[data-count-themes]",Array.isArray(u?.themes)?u.themes.length:0);try{let p=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(p.ok){let A=await p.json();h("[data-count-plugins]",Array.isArray(A?.plugins)?A.plugins.length:0)}}catch{}}catch{}}async function U(){L(),C(),l()}async function C(){let e=document.querySelector("[data-dash-poll-body]"),i=document.querySelector("[data-dash-poll-timer]");if(e)try{let v=y();await v.prime();let r=v.get("metrics");if(!r){let _=await fetch("/admin/metrics",{credentials:"same-origin"});if(!_.ok)return;r=await _.json()}let u=r.poll_state;if(!u||!u.active||!Array.isArray(u.options)||u.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,i&&(i.textContent="");return}let p=u.options.reduce((_,D)=>_+(D.votes||0),0),A=["A","B","C","D","E","F"],E=0;if(u.options.forEach((_,D)=>{(_.votes||0)>(u.options[E].votes||0)&&(E=D)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${k(u.question||ServerI18n.t("dashPollRunning"))}</div>`+u.options.map((_,D)=>{let O=p?Math.round(_.votes/p*100):0;return`
            <div class="admin-dash-poll-opt ${D===E&&p>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${A[D]||String(D+1)}</span>
                <span class="label">${k(_.label||"")}</span>
                <span class="pct">${O}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:_.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${O}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:p})}</div>`,i){let _=u.remaining_seconds;i.textContent=typeof _=="number"&&_>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(_/60),ss:String(_%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function T(e){let i=e.visible!==!1,v=e.config&&e.config.title||e.type||"widget",s=(e.type||"widget").toUpperCase(),r=(e.position||"\u2014").toUpperCase(),u=i?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",p=e.created_at&&i?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,A=p!=null?(()=>{let E=Math.floor(p/86400),_=Math.floor(p%86400/3600),D=Math.floor(p%3600/60),O=p%60;return E>0?`UPTIME \xB7 ${E}d ${String(_).padStart(2,"0")}h`:_>0?`UPTIME \xB7 ${_}:${String(D).padStart(2,"0")}:${String(O).padStart(2,"0")}`:`UPTIME \xB7 ${D}:${String(O).padStart(2,"0")}`})():`STATUS \xB7 ${i?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${k(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${u}"></span>
          <span class="kind">${k(s)}</span>
          <span class="cat">${k(r)}</span>
        </div>
        <div class="title">${k(v)}</div>
        <div class="uptime">${A}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${i?" is-active":""}" data-widget-action="toggle" data-running="${i?"1":"0"}">${i?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(e,i){try{let v=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!i}})});if(!v.ok)throw new Error("HTTP "+v.status);F()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",i=>{let v=i.target.closest(".admin-dash-widget-tile");if(!v)return;let s=i.target.dataset.widgetAction,r=v.dataset.widgetId;if(!(!s||!r)){if(s==="toggle")m(r,i.target.dataset.running==="1");else if(s==="config"){let u=document.querySelector('[data-route="widgets"]');u&&u.click()}}}))}async function F(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let i=y();await i.prime();let v=i.get("widgets");if(!v){let r=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!r.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}v=await r.json()}let s=(v.widgets||v.items||[]).slice(0,4);if(s.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+s.map(T).join("")+"</div>",M(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let S=null,$=null,P=null;function w(e){let i=Math.max(0,Math.floor(Date.now()/1e3-e)),v=Math.floor(i/3600),s=Math.floor(i%3600/60),r=i%60;return v>0?`${v}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function b(e){let i=document.getElementById("admin-session-banner"),v=document.getElementById("sec-live-feed");if(v&&v.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),i&&i.classList.toggle("is-hero",!(e&&e.status==="live")),!i)return;if(S=e,!(e&&e.status==="live"))i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let r=e.started_at||Date.now()/1e3;i.hidden=!1,i.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${k(e.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,x(r)}i.dataset.bound||(i.dataset.bound="1",i.addEventListener("click",B))}function x(e){P&&clearInterval(P);let i=()=>{let v=document.querySelector("[data-sess-timer]");v&&(v.textContent=w(e))};i(),P=setInterval(i,1e3)}function H(){P&&(clearInterval(P),P=null)}async function B(e){let i=e.target.closest("[data-sess-action]");if(!i)return;let v=i.dataset.sessAction;if(v==="open"){let s=document.querySelector("[data-sess-name]"),r=(s?s.value:"").trim();if(!r){s&&s.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}i.disabled=!0;try{let u=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})}),p=await u.json();if(!u.ok){window.showToast&&window.showToast(p.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:r}),!0),b(p.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{i.disabled=!1}}else if(v==="close"){let s=i.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",r=(A,E)=>`<option value="${A}"${A===s?" selected":""}>${E}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${r("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${r("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${r("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;i.disabled=!0;let p=document.getElementById("sessCloseBehavior")?.value;if(p&&p!==s)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:p})})}catch{}try{let A=await window.csrfFetch("/admin/session/close",{method:"POST"}),E=await A.json();if(!A.ok){window.showToast&&window.showToast(E.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),b({status:"idle",viewer_end_behavior:E.archived&&E.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{i.disabled=!1}}}async function N(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let i=await e.json();b(i)}catch{}}function f(){N(),$&&clearInterval($),$=setInterval(N,1e4)}function c(){$&&(clearInterval($),$=null),H()}let a=null;async function t(){let e=document.querySelector("[data-cockpit-overlay]"),i=window.AdminOverlayControl;if(!e||!i||e.offsetParent===null)return;let v=0,s=!1;try{let p=await fetch("/overlay_status",{credentials:"same-origin"});p.ok&&(v=(await p.json()).overlay_count||0)}catch{}try{let p=await fetch("/admin/broadcast/status",{credentials:"same-origin"});p.ok&&(s=(await p.json()).mode==="live")}catch{}e.classList.toggle("is-on",s);let r=e.querySelector("[data-cockpit-status]");r&&(r.textContent=i.statusText(s,v));let u=e.querySelector('[data-cockpit-action="toggle"]');u&&(u.dataset.i18n=i.toggleKey(s),u.textContent=ServerI18n.t(u.dataset.i18n),u.dataset.next=s?"standby":"live")}function d(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async s=>{let r=s.target.closest("[data-cockpit-action]");if(!r)return;let u=r.dataset.cockpitAction;if(u==="clear"){window.AdminOverlayControl?.clearScreen();return}u==="toggle"&&(await window.AdminOverlayControl?.setDisplay(r.dataset.next==="live"),t())});let i=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');i&&i.addEventListener("click",n);let v=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');v&&v.addEventListener("click",()=>{location.hash="#/polls"})}async function n(){let e;try{let s=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!s.ok)throw new Error("HTTP "+s.status);e=await s.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let i=document.createElement("div");i.className="admin-soh-qr",i.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:i,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&navigator.clipboard?.writeText(e.url).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1))}function l(){d(),t(),a&&clearInterval(a),a=setInterval(t,5e3)}function o(){a&&(clearInterval(a),a=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:U,refreshSidebarBadges:L,populatePoll:C,populateWidgets:F,refreshSessionBanner:N,startSessionPolling:f,stopSessionPolling:c,refreshCockpitOverlay:t,startCockpitPolling:l,stopCockpitPolling:o}})()});var rt=ye(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",k=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},L={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},U=[14,20,32,44,64],C=window.DANMU_CONFIG?.defaultColorPalette||[],T=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(q,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(q,V);if(Y&&Y!==q)return Y}return q}let M={};function F(q){if(M[q]!=null)return M[q];let V=L[q];return V?V.step:1}function S(q,V){M[q]=Number(V)||F(q)}let $={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",palettePreview:null,paletteNotice:null},P=["Color","FontFamily","Layout"];function w(q){return P.indexOf(q)!==-1}function b(q){let V=$.options&&$.options[q],Y=V&&V[1];return Array.isArray(Y)?Y.slice():[]}function x(q){return q==="Color"?C.map(V=>V.replace(/^#/,"").toUpperCase()):q==="Layout"?T.map(V=>V.value):q==="FontFamily"?($.fonts&&$.fonts.length?$.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function H(q,V){return q==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function B(){return`
      <div id="${y}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values" data-i18n="displayValuesTitle">${h(m("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title" data-i18n="viewerGroupAudience">${h(m("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note">${m("displayViewerDefaultsNote")}</p>
        </div>

        <!-- \u986F\u793A\u5C64\u5C08\u5C6C\uFF1A\u5927\u87A2\u5E55\u600E\u9EBC\u6392\uFF082026-08-19 \u8A2D\u8A08\u7A3F 07 \xB7 R1\uFF09\u3002
             \u9019\u56DB\u500B\u548C\u4E0A\u9762\u90A3\u7D44\u4E0D\u540C\u7A2E\u985E\u2014\u2014\u4E0A\u9762\u662F\u300C\u89C0\u773E\u7AEF\u7684\u503C\u300D\uFF0C\u9019\u88E1\u662F
             \u300C\u5927\u87A2\u5E55\u672C\u8EAB\u7684\u6392\u7248\u300D\uFF0C\u89C0\u773E\u6C38\u9060\u78B0\u4E0D\u5230\uFF0C\u6240\u4EE5\u4E0D\u9032 ROWS \u90A3\u5F35\u8868\u3002 -->
        <div data-dsp-only="values">
          <div class="admin-ui-group-label">${h(m("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlMaxTracks"))}
                <span class="sub">${h(m("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">\u2212</button>
                <span class="stepper-val" data-dl-value="max_tracks">\u2014</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlAvoidOverlap"))}
                <span class="sub">${h(m("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${h(m("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">\u2014</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">\u2014</span>
              </span>
            </div>
          </div>

          <!-- \u6295\u5F71\u5B89\u5168\u5340\u8207\u6DFA\u5E95\u63CF\u908A\uFF08\u8A2D\u8A08\u7A3F 16 \xB7 OS1\uFF0FOS2\uFF09\u3002\u986F\u793A\u5C64\u90A3\u534A\u65E9\u5C31
               \u5BEB\u597D\u4E86\uFF08child.css \u7684 --overlay-safe\u3001stage-luminance \u7684 setForced\uFF09\uFF0C
               \u7F3A\u7684\u4E00\u76F4\u662F\u9019\u5169\u5217\u2014\u2014\u5B89\u5168\u5340\u6C38\u9060\u505C\u5728\u5BEB\u6B7B\u7684 5%\uFF0C\u63CF\u908A\u6A21\u5F0F\u6C92\u6709\u5165\u53E3\u3002 -->
          <div class="admin-ui-group-label">${h(m("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlSafeArea"))}
                <span class="sub">${h(m("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${h(m("dlStrokeMode"))}
                <span class="sub">${h(m("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${h(m("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${h(m("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${h(m("dlStrokeNever"))}</button>
              </span>
            </div>

            <!-- 2026-09-08\uFF1A\u6295\u7968\u662F\u7528\u300C\u9001\u51FA\u9078\u9805\u4EE3\u865F\u7576\u5F48\u5E55\u300D\u5BE6\u4F5C\u7684\uFF0C\u6240\u4EE5\u6253\u5B57\u6295\u7968
                 \u7684\u4EBA\u6703\u8B93\u5927\u87A2\u5E55\u51FA\u73FE\u4E00\u6574\u7247 A / B / C / D\u3002\u4E0D\u85CF\u8D77\u4F86\u2014\u2014\u770B\u5F97\u5230\u5927\u5BB6\u5728
                 \u6295\u7968\u672C\u8EAB\u5C31\u662F\u6C23\u6C1B\u2014\u2014\u800C\u662F\u8ABF\u6697\uFF0C\u8B93\u771F\u6B63\u7684\u7559\u8A00\u4ECD\u7136\u8B80\u5F97\u5230\u3002
                 \u4E00\u6B21\u6309\u4E0B\u5373\u6295\u7968\uFF08POST /poll/vote\uFF09\u6839\u672C\u4E0D\u7522\u751F\u5F48\u5E55\uFF0C\u4E0D\u53D7\u9019\u88E1\u5F71\u97FF\u3002 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${h(m("dlDimPollVotes"))}
                <span class="sub">${h(m("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${h(m("dlPollVoteOpacity"))}
                <span class="sub">${h(m("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>

        <div class="admin-color-palette" data-dsp-only="audience" data-admin-color-palette></div>

        <div class="admin-dsp2-grid">
          <!-- Left \xB7 row list -->
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head">
              <span>${h(m("displayColParam"))}</span>
              <span data-dsp-only="values">${h(m("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right" data-dsp-only="audience">${h(m("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(m("loading"))}
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("mlLivePreview")}</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${h(m("displayPreviewSync"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${h(m("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${h(m("displayPreviewSample2"))}</span>
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
                <span>${h(m("displayAutoSyncTitle"))}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color: var(--color-ink-accent);letter-spacing:0.1em;font-weight:700">${h(m("displayAutoSyncLive"))}</div>
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${h(m("displayAutoSyncNote"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1">
                  \u21BA ${h(m("displayDeployRevert"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1">
                  \u2197 ${h(m("displayExportJson"))}
                </button>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-admin-controlled" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${h(m("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="language">${h(m("language"))}</span><span data-i18n="viewerThemeFollowBrowser">${h(m("viewerThemeFollowBrowser"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPlaceholder">${h(m("displayAdminCtlPlaceholder"))}</span><span data-i18n="displayPlaceholderExample">${h(m("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlSubmit">${h(m("displayAdminCtlSubmit"))}</span><span data-i18n="fireDanmu">${h(m("fireDanmu"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em" data-i18n="displayAdminCtlPollPrompt">${h(m("displayAdminCtlPollPrompt"))}</span><span data-i18n="displayPollPromptExample">${h(m("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6">
                ${h(m("displayAdminControlledNote"))}
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${h(m("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
        </div>
        </details>
      </div>`}let N=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>f(q),noRange:!0}];function f(q){let V=T.find(Y=>Y.value===q);return V?m(V.labelKey):q||"\u2014"}function c(q,V){let Y=V[0]!==!1,Q=V[3],oe=L[q.key];if(q.key==="Opacity"||q.key==="Speed"){let ce=oe,pe=Q!=null?Number(Q):ce.min,we=isFinite(pe)?pe:ce.min,ge=(we-ce.min)/Math.max(1e-6,ce.max-ce.min)*100;return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            min="${ce.min}" max="${ce.max}" step="${F(q.key)}" value="${h(String(we))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${ge.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${ge.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}"
              min="${ce.min}" max="${ce.max}" step="${F(q.key)}" value="${h(String(we))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${ce.min}${ce.unit}</span><span>${ce.max}${ce.unit}</span>
            </div>
          </div>
        </div>`}if(q.key==="FontSize"){let ce=Number(Q);return`
        <div class="admin-dsp2-chiprow">
          ${U.map(pe=>`<button type="button" class="admin-dsp2-fchip ${ce===pe?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${pe}">${pe}</button>`).join("")}
        </div>`}if(q.key==="Color"){let ce="#"+String(Q||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${o().map(pe=>{let we=pe.slice(1),ge=pe.toUpperCase()===ce;return`<button type="button" class="admin-dsp2-swatch ${ge?"is-active":""}"
              data-chip-key="Color" data-chip-value="${we}"
              style="background:${pe}" aria-label="${pe}" aria-pressed="${ge}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${h(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${h(ce)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let ce=($.fonts&&$.fonts.length?$.fonts:["NotoSansTC","Inter"]).map(Se=>{let Te=typeof Se=="string"?Se:Se.name||Se.family||"",Ee=typeof Se=="string"?Se:Se.label||Se.name||Se.family||"";return{value:Te,label:Ee}}).filter(Se=>Se.value),pe=String(Q||""),we=!!$.allowlistEdit.FontFamily,ge=we?$.allowlistEdit.FontFamily:new Set(b("FontFamily").map(Se=>H("FontFamily",Se))),he=!we&&ge.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${ce.map(Se=>{let Te=Se.value===pe,Ee=we?ge.has(Se.value):he||ge.has(Se.value),_e=["admin-dsp2-tchip",Te?"is-active":"",we?"is-editing":"",Ee?"":"is-blocked"].filter(Boolean).join(" "),$e=we?`data-allow-key="FontFamily" data-allow-value="${h(Se.value)}"`:`data-chip-key="FontFamily" data-chip-value="${h(Se.value)}"`;return`<button type="button" class="${_e}" ${$e}
              aria-pressed="${Ee?"true":"false"}">
              ${we?`<span class="admin-dsp2-allow-mark">${Ee?"\u2713 ":""}</span>`:""}${h(Se.label)}
            </button>`}).join("")}
        </div>
        ${a(q)}
      `}if(q.key==="Layout"){let ce=String(Q||"scroll"),pe=!!$.allowlistEdit.Layout,we=pe?$.allowlistEdit.Layout:new Set(b("Layout").map(he=>H("Layout",he))),ge=!pe&&we.size===0;return`
        <div class="admin-dsp2-tiles">
          ${T.map(he=>{let Se=he.value===ce,Te=pe?we.has(he.value):ge||we.has(he.value),Ee=["admin-dsp2-tile",Se?"is-active":"",pe?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),_e=pe?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${Ee}" ${_e}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${pe?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${a(q)}
      `}return""}function a(q){if(!w(q.key))return"";let V=!!$.allowlistEdit[q.key],Y=b(q.key),Q=x(q.key).length||0,oe=Y.length>0?m("displayAllowSummaryPartial",{n:Y.length,total:Q,label:t(q.key)}):m("displayAllowSummaryAll",{total:Q});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${h(oe)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${h(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${h(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${h(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${h(m("displayEditAllowlistTitle"))}">[${h(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function t(q){return m(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function d(q,V){if(q.noRange||!(V[0]!==!1))return"";let Q=L[q.key],oe=V[1]!=null?V[1]:Q.min,ce=V[2]!=null?V[2]:Q.max,pe=F(q.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="1"
              min="${Q.min}" max="${Q.max}" step="${pe}" value="${h(String(oe))}" />
            ${Q.unit?`<span>${Q.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${h(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="2"
              min="${Q.min}" max="${Q.max}" step="${pe}" value="${h(String(ce))}" />
            ${Q.unit?`<span>${Q.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="step"
              min="0.1" step="0.1" value="${h(String(pe))}" />
            ${Q.unit?`<span>${Q.unit}</span>`:""}
          </div>
        </div>
      </div>`}function n(q,V){let Y=V[0]!==!1,Q=V[3],oe=q.fmt?q.fmt(Q):Q!=null?String(Q):"\u2014",ce=q.key==="Layout";return`
      <div class="admin-dsp2-row ${Y?"is-on":"is-off"} ${ce?"is-last":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${h(m(q.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${Y?"is-on":""}" data-value-badge>${h(oe)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <!-- \u63D0\u793A\u5169\u5957\u4E26\u5B58\uFF0CCSS \u4F9D data-dsp-mode \u64C7\u4E00\u3002\u986F\u793A\u5C64\u8B1B\u7684\u662F\u300C\u5927\u87A2\u5E55
               \u4E0A\u5C31\u662F\u9019\u500B\u503C\u300D\uFF1B\u89C0\u773E\u9801\u8B1B\u7684\u662F\u300C\u89C0\u773E\u62D6\u6ED1\u687F\u6642\u5F9E\u54EA\u88E1\u958B\u59CB\u300D\u3002 -->
          <div class="admin-dsp2-cell-hint" data-dsp-only="values">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(m("displayHintBigScreen"))}
          </div>
          <div class="admin-dsp2-cell-hint" data-dsp-only="audience">
            <span class="admin-dsp2-cell-hint-arrow">\u25B8</span>
            ${h(m(Y?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${c(q,V)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${d(q,V)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${Y?"is-on":""}"
            data-toggle-key="${q.key}" aria-pressed="${Y?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${h(m(Y?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${h(Y?m("displayToggleHintOn"):q.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function l(){let q=document.getElementById("dsp2-rows");if(q){if(!$.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(m("loading"))}`;return}q.innerHTML=N.map(V=>n(V,$.options[V.key]||[!1,"","",""])).join(""),s(),p(),A()}}function o(){let q=b("Color");return[...new Set((q.length?q:C).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function e(q){let V=q.slice(1).match(/.{2}/g).map(Y=>{let Q=parseInt(Y,16)/255;return Q<=.04045?Q/12.92:((Q+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function i(q,V="error"){$.paletteNotice={message:q,type:V};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=q,Y.classList.toggle("is-error",V==="error"))}function v(q,V=!0){let Y=document.querySelector("[data-admin-color-palette]"),Q=Y?.querySelector("[data-palette-preview-text]");!Q||!/^#[0-9A-F]{6}$/i.test(q)||($.palettePreview=q.toUpperCase(),Q.style.color=q,Y.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(oe=>{let ce=oe.dataset.palettePreview===q.toUpperCase();oe.setAttribute("aria-pressed",String(ce)),oe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ce)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(Q.getAnimations().forEach(oe=>oe.cancel()),Q.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function s(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!$.options)return;let V=o(),Y=($.options.ViewerColorPicker||[!0])[0]!==!1,Q=$.paletteBusy?"disabled":"",oe=$.palettePreview||V[0],ce=h($.paletteDraft),pe=$.paletteNotice;q.setAttribute("aria-busy",String($.paletteBusy)),q.innerHTML=`
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29\uFF1Akey \u5F9E viewerPaletteEyebrow \u6539\u540D\u70BA viewerPaletteLabel\u3002
               \u6587\u6848\u6C92\u8B8A\uFF1B\u8A2D\u8A08\u5951\u7D04\u7981\u7684\u662F *Eyebrow / *Kicker \u9019\u7A2E\u547D\u540D\uFF08\u90A3\u4EE3\u8868
               \u300C\u4E2D\u6587\u6A19\u7C64\u65C1\u908A\u518D\u64FA\u4E00\u884C\u5927\u5BEB\u82F1\u6587\u300D\u7684\u820A\u7248\u578B\uFF09\u3002\u9019\u88E1\u7684 eyebrow \u662F
               \u4F7F\u7528\u8005\u8A9E\u8A00\u7684\u5C0F\u6A19\uFF0C\u8207\u4E0B\u65B9\u6A19\u984C\u4E0D\u91CD\u8907\u3002 -->
          <span class="admin-color-palette-eyebrow">${h(m("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${h(m("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${h(m("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${V.length}</strong><span>${h(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${V.map((we,ge)=>`<div class="admin-color-palette-chip" style="--palette-color:${we};--palette-ink:${e(we)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${we}"
                aria-label="${h(m("viewerPalettePreviewColor",{color:we}))}" aria-pressed="${we===oe}" ${Q}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(ge+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${we}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${we}" ${V.length<=1?"disabled":Q}
                aria-label="${h(m("viewerPaletteRemove",{color:we}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${h(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${h(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test($.paletteDraft)?ce:"#38bdf8"}" data-palette-picker ${Q} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${ce}"
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${Q} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${V.length>=64?"disabled":Q}>
                <span aria-hidden="true">\uFF0B</span> ${h(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${h(m(V.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${pe?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${pe?h(pe.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${h(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${h(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${oe}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${h(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${h(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${h(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${Y?"checked":""} ${Q} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${h(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,v(oe,!1)}async function r(q,V){if($.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");$.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ce=>{ce.disabled=!0});let Q=await D("Color",q);$.paletteBusy=!1,$.paletteNotice={type:Q?"success":"error",message:m(Q?"viewerPaletteSaved":"updateFailed")},Q&&V&&($.palettePreview=V),s(),(V&&Q?Y.querySelector(`[data-palette-preview="${V}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(q,V){let Y=$.options&&$.options[q];return Y&&Y[3]!=null?Y[3]:V}function p(){let q=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),Q=document.querySelector("[data-preview-foot-l]"),oe=document.querySelector("[data-preview-foot-r]");if(!q||!V||!Y||!$.options)return;let ce=Number(u("FontSize",32)),pe=Number(u("Opacity",92)),we=Number(u("Speed",1)),ge="#"+String(u("Color","7DD3FC")).replace(/^#/,""),he=String(u("FontFamily","NotoSansTC")),Se=String(u("Layout","scroll")),Te=Math.min(ce,36),Ee=Math.max(0,Math.min(100,pe))/100;V.style.fontSize=Te+"px",V.style.color=ge,V.style.opacity=Ee.toFixed(2),V.style.fontFamily=he+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${ge}66`,Y.style.fontSize=(Te*.78).toFixed(0)+"px",Y.style.opacity=(Ee*.9).toFixed(2),Y.style.fontFamily=he+", system-ui, sans-serif",q.dataset.layout=Se,Q&&(Q.textContent=`${f(Se)} \xB7 ${ce}px \xB7 ${(+we).toFixed(1)}\xD7`),oe&&(oe.textContent=m("displayOpacitySuffix",{n:Math.round(pe)}))}function A(){let q=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!q||!$.options)return;let Y=N.filter(Q=>($.options[Q.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),q.innerHTML=N.map(Q=>{let oe=!!($.options[Q.key]||[])[0];return`<div class="admin-dsp2-srow ${oe?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${h(m(Q.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${h(m(oe?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function E(q,V){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!V})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray($.options[q])||($.options[q]=[!1,"","",""]),$.options[q][0]=!!V,l(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let Q=q==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${Q} ${m("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1),await W(),l()}}async function _(q,V,Y){try{let Q=Y;if(q==="Color"){let ce=String(Q).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ce)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}Q=ce.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){Q=q==="Speed"?parseFloat(Q):parseInt(Q,10);let ce=L[q];if(Number.isNaN(Q)||ce&&(Q<ce.min||Q>ce.max)){window.showToast&&window.showToast(`${q} ${ce.min}\u2013${ce.max}`,!1);return}}let oe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:Q,index:V})});if(!oe.ok)throw new Error("update "+oe.status);Array.isArray($.options[q])||($.options[q]=[!1,"","",""]),$.options[q][V]=Q,O(q),p(),A()}catch(Q){console.warn("[admin-display] update failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function D(q,V){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!Y.ok)throw new Error("allowlist "+Y.status);let Q=await Y.json().catch(()=>({}));Q&&Array.isArray(Q.option)?$.options[q]=Q.option:Array.isArray($.options[q])&&($.options[q][1]=V.slice()),O(q),p(),A();let oe=x(q).length||0,ce=q==="Color"?m("settingsUpdated"):V.length>0?m("displayAllowlistToastPartial",{key:q,n:V.length,total:oe}):m("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ce,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),q!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function O(q){let V=document.querySelector(`[data-row-key="${q}"]`);if(!V||!$.options)return;let Y=N.find(pe=>pe.key===q);if(!Y)return;let Q=$.options[q]||[!1,"","",""],oe=Q[3],ce=V.querySelector("[data-value-badge]");if(ce&&(ce.textContent=Y.fmt?Y.fmt(oe):oe!=null?String(oe):"\u2014"),w(q)){let pe=V.querySelector("[data-picker-host]");pe&&(pe.innerHTML=c(Y,Q));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&V.querySelectorAll(`[data-chip-key="${q}"]`).forEach(pe=>{let we=pe.getAttribute("data-chip-value"),ge=q==="Color"?String(oe||"").replace(/^#/,"").toUpperCase():String(oe??"");pe.classList.toggle("is-active",String(we)===ge)}),q==="Opacity"||q==="Speed"){let pe=L[q],we=Number(oe??pe.min),ge=(we-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,he=V.querySelector(".admin-dsp2-slider-fill"),Se=V.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=ge.toFixed(2)+"%"),Se&&(Se.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let Te=V.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(we));let Ee=V.querySelector(".admin-dsp2-num");Ee&&document.activeElement!==Ee&&(Ee.value=String(we))}}async function W(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);$.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),$.options=$.options||{}}}async function I(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let V=await q.json();$.fonts=Array.isArray(V)?V:V.fonts||[]}catch{$.fonts=["NotoSansTC","Inter"]}}async function R(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let V=await q.json();$.viewerCount=V.ws_clients??0}catch{}}function j(){J(),R(),$.metricsTimer=setInterval(R,5e3)}function J(){$.metricsTimer&&(clearInterval($.metricsTimer),$.metricsTimer=null)}function K(){if(!$.options){window.showToast&&window.showToast(m("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:$.options},V=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(V),Q=document.createElement("a");Q.href=Y,Q.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(Y),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function G(){if(!$.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let V of N){let Y=$.options[V.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!Y[0]})})}await R(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${$.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function te(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"danger",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Y,Q]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!Q[0]})});for(let oe=1;oe<=3;oe++)oe<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||Q[oe]===""||Q[oe]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:Q[oe],index:oe})})}await W(),l(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ne(){let q=document.getElementById(y);q&&(q.addEventListener("click",V=>{let Y=V.target.closest("[data-palette-preview]");if(Y){v(Y.dataset.palettePreview);return}let Q=V.target.closest("[data-palette-remove]");if(Q){let ge=o();if(ge.length>1){let he=ge.filter(Se=>Se!==Q.dataset.paletteRemove);r(he,he.includes($.palettePreview)?$.palettePreview:he[0])}return}if(V.target.closest("[data-palette-add]")){let ge=q.querySelector("[data-palette-hex]"),he=String(ge.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(he)){ge.setAttribute("aria-invalid","true"),i(m("colorFormatError"));return}let Se=o();if(Se.includes("#"+he)){i(m("viewerPaletteDuplicate"));return}Se.length<64&&r([...Se,"#"+he],"#"+he);return}let oe=V.target.closest("[data-toggle-key]");if(oe){let ge=oe.getAttribute("data-toggle-key"),he=!!($.options[ge]||[])[0];E(ge,!he);return}let ce=V.target.closest("[data-allow-action]");if(ce){let ge=ce.getAttribute("data-allow-action"),he=ce.getAttribute("data-allow-key");if(!he)return;if(ge==="edit"){let Se=b(he).map(Te=>H(he,Te));Se.length?$.allowlistEdit[he]=new Set(Se):$.allowlistEdit[he]=new Set(x(he)),O(he);return}if(ge==="cancel"){delete $.allowlistEdit[he],O(he);return}if(ge==="clear"){$.allowlistEdit[he]=new Set,D(he,[]),delete $.allowlistEdit[he];return}if(ge==="apply"){let Se=$.allowlistEdit[he]||new Set,Te=x(he),Ee=Array.from(Se),_e=Te.length>0&&Ee.length===Te.length&&Te.every($e=>Se.has($e));D(he,_e?[]:Ee),delete $.allowlistEdit[he];return}}let pe=V.target.closest("[data-allow-key][data-allow-value]");if(pe){let ge=pe.getAttribute("data-allow-key"),he=pe.getAttribute("data-allow-value"),Se=$.allowlistEdit[ge];if(Se){let Te=H(ge,he);Se.has(Te)?Se.delete(Te):Se.add(Te),O(ge)}return}let we=V.target.closest("[data-chip-key]");if(we){let ge=we.getAttribute("data-chip-key"),he=we.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${ge}"]`).forEach(Se=>Se.classList.remove("is-active")),we.classList.add("is-active"),_(ge,3,he);return}if(V.target&&V.target.id==="dsp2-revert"){te();return}if(V.target&&V.target.id==="dsp2-export"){K();return}}),q.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",V=>{let Y=V.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,E("ViewerColorPicker",Y.checked);return}let Q=Y.getAttribute("data-num-key");if(!Q)return;let oe=Y.getAttribute("data-num-index");if(oe==="step"){S(Q,Y.value),O(Q);return}let ce=parseInt(oe,10);if(Number.isNaN(ce))return;let pe=Y.value;Q==="Color"&&(pe=String(pe).replace(/^#/,"").toUpperCase()),_(Q,ce,pe)}),q.addEventListener("input",V=>{let Y=V.target;if(Y){if(Y.matches("[data-palette-picker]")){$.paletteDraft=Y.value.toUpperCase(),q.querySelector("[data-palette-hex]").value=$.paletteDraft,i("","success"),v($.paletteDraft);return}if(Y.matches("[data-palette-hex]")){$.paletteDraft=Y.value;let Q=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),i("","success"),/^[0-9a-fA-F]{6}$/.test(Q)&&(q.querySelector("[data-palette-picker]").value="#"+Q,v("#"+Q));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let Q=Y.getAttribute("data-range-key"),oe=L[Q],ce=Number(Y.value),pe=(ce-oe.min)/Math.max(1e-6,oe.max-oe.min)*100,we=Y.closest("[data-row-key]");if(we){let ge=we.querySelector(".admin-dsp2-slider-fill"),he=we.querySelector(".admin-dsp2-slider-thumb");ge&&(ge.style.width=pe.toFixed(2)+"%"),he&&(he.style.left=`calc(${pe.toFixed(2)}% - 8px)`);let Se=we.querySelector(".admin-dsp2-num");Se&&(Se.value=String(ce))}Array.isArray($.options[Q])&&($.options[Q][3]=ce),p();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let Q=Y.getAttribute("data-num-key"),oe=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(oe)||!Array.isArray($.options[Q]))return;let ce=Y.value;Y.type==="number"&&(ce=Number(ce)),$.options[Q][oe]=ce,p()}}}),q.addEventListener("change",V=>{let Y=V.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let Q=Y.getAttribute("data-range-key");_(Q,3,Y.value)}}),q.addEventListener("click",V=>{let Y=V.target.closest("[data-dl-step]");if(Y){let oe=Y.closest("[data-dl-stepper]");if(!oe)return;let ce=oe.getAttribute("data-dl-stepper"),we=Number(z[ce]??0)+Number(Y.getAttribute("data-dl-step"));se(ce,we);return}let Q=V.target.closest("[data-dl-opt]");if(Q){let oe=Q.closest("[data-dl-seg]");if(!oe)return;let ce=oe.getAttribute("data-dl-seg"),pe=Q.getAttribute("data-dl-opt");se(ce,["safe_area","poll_vote_opacity"].indexOf(ce)!==-1?Number(pe):pe)}}),q.addEventListener("change",V=>{let Y=V.target.closest("[data-dl-toggle]");if(Y){se(Y.getAttribute("data-dl-toggle"),Y.checked);return}let Q=V.target.closest("[data-dl-range]");Q&&se(Q.getAttribute("data-dl-range"),Number(Q.value))}),q.addEventListener("input",V=>{let Y=V.target.closest("[data-dl-range]");if(!Y)return;let Q=Y.getAttribute("data-dl-range"),oe=q.querySelector(`[data-dl-value="${Q}"]`);oe&&(oe.textContent=Y.value+"%")}))}let z={};function X(){let q=document.getElementById(y);q&&Object.entries(z).forEach(([V,Y])=>{let Q=q.querySelector(`[data-dl-value="${V}"]`);Q&&(Q.textContent=V==="max_tracks"?Number(Y)===0?m("dlMaxTracksAuto"):String(Y):String(Y)+"%");let oe=q.querySelector(`[data-dl-range="${V}"]`);oe&&document.activeElement!==oe&&(oe.value=String(Y));let ce=q.querySelector(`[data-dl-toggle="${V}"]`);ce&&(ce.checked=!!Y);let pe=q.querySelector(`[data-dl-seg="${V}"]`);pe&&pe.querySelectorAll("[data-dl-opt]").forEach(we=>{let ge=we.getAttribute("data-dl-opt")===String(Y);we.classList.toggle("is-active",ge),we.setAttribute("aria-pressed",ge?"true":"false")})})}async function Z(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;z=await q.json(),X()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function se(q,V){let Y=z[q];z[q]=V,X();try{let Q=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:V})});if(!Q.ok)throw new Error("display-layer "+Q.status);z=await Q.json(),X()}catch(Q){z[q]=Y,X(),console.warn("[admin-display] display-layer update failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ie(){k.forEach(q=>{let V=document.getElementById(q);V&&V.setAttribute("data-admin-ui-replaced","1")})}let le=null;function ue(q,V){return q==="overlay"||V==="overlay"||q==="display"||V==="display"}function ke(q,V){return q==="viewer-config"||q==="viewer"||V==="viewer-config"||V==="viewer"}function Ie(q,V){if(!ke(q,V))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let Q=ce=>Y.tabs.some(pe=>pe.slug===ce),oe=Q(V)?V:null;if(!oe&&window.AdminTabs.resolveActiveTab){let ce=window.AdminTabs.resolveActiveTab("viewer",null);Q(ce)&&(oe=ce)}oe&&(document.body.dataset.viewerConfigTab=oe)}let ee=!1,ae=!1;async function de(){let q=document.getElementById("sec-viewer-config-limits");if(!q||ee)return;ee=!0;let V=(Y,Q)=>{let oe=q.querySelector(Y);oe&&(oe.textContent=Q==null?"\u2014":String(Q))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let Q=await Y.json(),oe=Q.rate_limits&&Q.rate_limits.fire||{},ce=Q.rate_limits&&Q.rate_limits.totals||{},pe=Q.rate_limit_config&&Q.rate_limit_config.fire||{},we=Math.max(1,(Q.server_time||0)-(Q.server_started_at||0));V("[data-vc-rate-fp]",pe.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",pe.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let ge=(oe.hits||0)/we;V("[data-vc-avg-rate]",ge.toFixed(2)+"/s"),V("[data-vc-throttled]",oe.violations||0),V("[data-vc-blocked]",ce.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{ee=!1}}function me(){let q=document.querySelector(".admin-dash-grid"),V=document.getElementById(y);if(!q||!V)return;let Y=q.dataset.activeRoute||"live",Q=q.dataset.activeLeaf||Y;Ie(Y,Q);let oe=document.body.dataset.viewerConfigTab||"defaults",ce=ke(Y,Q),pe=ue(Y,Q),we=ce||pe,ge=V.querySelector("[data-dsp-fold]");ge&&V.dataset.dspMode!==(pe?"values":"audience")&&(ge.open=!pe),V.dataset.dspMode=pe?"values":"audience",V.style.display=we?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(Se=>{let Te=document.getElementById(Se);Te&&(Te.style.display=ce?"":"none")});let he=document.getElementById("sec-viewer-config-info");he&&(he.style.display=ce?"":"none"),ce?ae||(ae=!0,de()):ae=!1,ue(Y,Q)?$.metricsTimer||j():J(),le=Y}function re(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],Q=document.createElement("div");Q.id="sec-viewer-config-fields",Q.className="admin-vc-fields-grid lg:col-span-2";let oe=document.createElement("div");oe.className="admin-vc-col-panel";let ce=document.createElement("div");ce.className="admin-vc-fields-head";let pe=Y.filter(function(xe){return xe.on}).length,we=Y.length-pe;ce.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+h(m("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+h(m("displayFieldsShownHidden",{shown:pe,hidden:we}))+"</span>",oe.appendChild(ce);let ge=document.createElement("div");ge.className="admin-vc-fields-list",Y.forEach(function(xe){let Ae=document.createElement("div");Ae.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Fe=document.createElement("span");Fe.className="admin-vc-field-dot"+(xe.on?" is-on":""),Ae.appendChild(Fe);let De=document.createElement("div");var Be="";xe.pinned&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+h(m("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+h(m("displayFieldBadgeBlocked"))+"</span>"),De.innerHTML='<div class="admin-vc-field-label">'+h(xe.k)+Be+'</div><div class="admin-vc-field-desc">'+h(xe.desc)+"</div>",Ae.appendChild(De);let Le=document.createElement("button");if(Le.type="button",Le.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Le.textContent=xe.on?m("displayToggleShow"):m("displayToggleHide"),xe.blocked||xe.pinned)Le.disabled=!0,Le.className+=" disabled";else{var Ce=xe.on;Le.addEventListener("click",function(){Ce=!Ce,Le.className="admin-vc-toggle "+(Ce?"is-on":"is-off"),Le.textContent=m(Ce?"displayToggleShow":"displayToggleHide"),Fe.className="admin-vc-field-dot"+(Ce?" is-on":"")})}Ae.appendChild(Le),ge.appendChild(Ae)}),oe.appendChild(ge);let he=document.createElement("div");he.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Ae){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Ae===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+h(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+h(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+h(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+h(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+h(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+h(m("displayFieldsTip"))+"</div>",Q.appendChild(oe),Q.appendChild(he);function Ee(xe,Ae,Fe,De,Be,Le){let Ce=Le?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ce+'">'+Fe+'<span class="admin-vc-limit-row__unit">'+(De||"")+"</span></div>"+(Be?'<div class="admin-vc-limit-row__hint">'+Be+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+h(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+h(m("displayEditLink"))+"</a></div>"+Ee(h(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",h(m("displayRateFpUnit")),h(m("displayRateFpHint")))+Ee(h(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",h(m("displayRateGlobalHint")))+Ee(h(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",h(m("displayRateBurstUnit")),h(m("displayRateBurstHint")))+Ee(h(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",h(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+h(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+h(m("displayContentLimitsTitle"))+"</span></div>"+Ee(h(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",h(m("displayMsgLenUnit")),h(m("displayMsgLenHint")))+Ee(h(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",h(m("displayNickLenUnit")),h(m("displayNickLenHint")))+Ee(h(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",h(m("displayDedupHint")))+Ee(h(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+h(m("displayProfanityDefaultValue"))+"</span>","",h(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+h(m("displayAuditLogLink"))+"</a></div>";let $e=document.getElementById("sec-viewer-theme");$e&&$e.parentNode===q?(q.insertBefore(V,$e),q.insertBefore(_e,$e),q.insertBefore(Q,$e)):(q.appendChild(V),q.appendChild(_e),q.appendChild(Q)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),me()}async function ve(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(y)){ie();return}q.insertAdjacentHTML("beforeend",B()),ne(),ie(),me(),$.options||await Promise.all([W(),I()]),Z(),l()}function fe(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?ve():ie(),me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",me),document.addEventListener("admin-route-applied",me),document.addEventListener("admin-panel-rendered",()=>{ve(),ie(),re(),me()}),ve(),re()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fe):fe()})()});var dt=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let K=document.querySelector('meta[name="csrf-token"]');return K&&K.content||""}let k=window.DANMU_CONFIG||{},g=k.session||{logged_in:!1},h=k.settingRanges||{};function L(K,G={}){let te={credentials:"same-origin",...G},ne=new Headers(G.headers||{});return ne.set("X-CSRF-Token",y()),te.headers=ne,fetch(K,te)}window.csrfFetch=L;let U=5e3,C={at:0,data:null,promise:null};function T(){return C.data&&Date.now()-C.at<U}function m(){return T()?Promise.resolve(C.data):(C.promise||(C.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>(K&&(C.data=K,C.at=Date.now()),C.promise=null,K)).catch(()=>(C.promise=null,null))),C.promise)}function M(K){if(!T())return null;let G=C.data[K];return G&&typeof G=="object"&&"_error"in G?null:G}window.__danmuAdminBootstrap={prime:m,get:M},m();let F={},S=null,$=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let w=Object.create(null);Object.assign(w,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let b={_key:K=>"admin:tab:"+K,get(K){try{return sessionStorage.getItem(this._key(K))||null}catch{return null}},set(K,G){try{G?sessionStorage.setItem(this._key(K),G):sessionStorage.removeItem(this._key(K))}catch{}}};function x(K){let G=(K||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!G)return null;let te=G[1],ne=G[2]||null,z=null;if(!ne){let ie=P[te];typeof ie=="string"?te=ie:ie&&typeof ie=="object"&&(te=ie.nav||te,z=ie.tab||null)}let X=w[te],Z=te,se=null;if(typeof X=="string"?Z=X:X&&typeof X=="object"&&(Z=X.nav||te,se=X.tab||null),G[1]!==Z&&(x._warned||(x._warned=new Set),!x._warned.has(G[1]))){x._warned.add(G[1]);try{console.info("[admin] legacy route #/"+G[1]+" \u2192 #/"+Z+(ne||se||z?"/"+(ne||se||z):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:Z,tab:ne||se||z,raw:te}}function H(K,G){return G?"#/"+K+"/"+G:"#/"+K}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:w,tabMemory:b,parseHash:x,buildHash:H});var B=window.AdminUtils.loadDetailsState,N=window.AdminUtils.saveDetailsState,f=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:M};async function c(){try{F=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&_()}catch(K){console.error("Get settings failed:",K),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function a(K){return/^#[0-9A-Fa-f]{6}$/.test(K)}function t(K){return a(K)?K:/^[0-9A-Fa-f]{6}$/.test(K)?"#"+K:(K.startsWith("#")||(K="#"+K),a(K)?K:"#38bdf8")}function d(K,G){if(h[K]){let te=parseInt(G);if(isNaN(te)||te<h[K].min||te>h[K].max)return showToast(ServerI18n.t("settingRangeError",{key:K,min:h[K].min,max:h[K].max}),!1),!1}return!0}function n(K,G,te){if(!te||!Array.isArray(F[K]))return;let ne=F[K][G];K==="Color"&&typeof ne=="string"&&(ne=t(`#${ne}`)),ne!=null&&(te.value=String(ne))}let l={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function o(){Object.values(l).forEach(K=>{let G=document.getElementById(K.containerId);G&&K.orderedIds.forEach(te=>{let ne=document.getElementById(te);ne&&ne.parentElement!==G&&G.appendChild(ne)})})}function e(){S&&(S.disconnect(),S=null),o(),S=new MutationObserver(()=>{o()}),S.observe(s,{childList:!0,subtree:!0})}async function i(K,G,te,ne=null){try{if(K==="Color"){if(!a(G)){showToast(ServerI18n.t("colorFormatError"),!1),n(K,te,ne);return}G=G.replace("#","")}else if((K==="Speed"||K==="Opacity"||K==="FontSize")&&!d(K,G)){n(K,te,ne);return}(await L("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:K,value:G,index:te})})).ok?(Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][te]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(z){console.error("Error:",z),showToast(`Update Error: ${z.message}`,!1),await c()}}async function v(K,G){try{let te=await L("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:K,enabled:G})}),ne=await te.json().catch(()=>({}));if(te.ok)Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][0]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`),_();else{let z=document.getElementById(`toggle-${K}`);z&&(z.checked=!G),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(te){console.error("Error:",te);let ne=document.getElementById(`toggle-${K}`);ne&&(ne.checked=!G),showToast(`Update Error: ${te.message}`,!1)}}let s=document.getElementById("app-container"),r=document.getElementById("toast-container"),u=(K,G=500)=>"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:G}):setTimeout(K,G);async function p(){let K=parseInt(document.getElementById("historyHours")?.value||"24");try{let[G,te]=await Promise.all([fetch(`/admin/stats/hourly?hours=${K}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${K}&limit=10`,{credentials:"same-origin"})]);if(!G.ok||!te.ok)return;let ne=await G.json(),z=await te.json(),X=document.getElementById("statsDashboard");if(!X)return;let Z=ne.distribution||[],se=z.topTexts||[],ie=Math.max(1,...Z.map(ee=>ee.count)),le=Z.reduce((ee,ae)=>ee+(ae.count||0),0),ue=Z.filter(ee=>ee.count>0).length,ke=Z.map(ee=>`<div class="chart-bar" style="height: ${Math.round(ee.count/ie*100)}%" title="${f(ee.hour)}: ${ee.count}"><span class="chart-label">${f(ee.hour.slice(-5,-3))}</span></div>`).join(""),Ie=se.map((ee,ae)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ae+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${f(ee.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ee.count}</td></tr>`).join("");X.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${le}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${ue}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${K}h window</span>
            </div>
            <div class="stats-chart">${ke||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${se.length?`<table class="w-full text-xs"><tbody>${Ie}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(G){console.error("Load stats error:",G)}}window._loadStats=p,window.csrfFetch=L,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=s,window.__adminCtx.getSettings=()=>F;function A(){s&&(s.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function E(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():A()}function _(){let K=B(),G=(ue,ke=!1)=>K[ue]!==void 0?K[ue]:ke,te=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ue=>Array.isArray(F[ue])&&F[ue][0]===!0).length,ne=F.Layout&&F.Layout[3]?f(String(F.Layout[3]).replace(/_/g," ")):"scroll",z=F.FontFamily&&F.FontFamily[3]?f(String(F.FontFamily[3])):"NotoSansTC",X=ue=>ue.map(ke=>`<span style="height:${ke*10}%;opacity:${.3+ke*.08}"></span>`).join(""),Z=ne&&ne!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");s.innerHTML=`
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
                                     \u5B83\u540C\u6642\u662F\u90A3\u56DB\u500B\u5206\u9801\u7684\u5BB6\u3002 -->
                                <button type="button" class="admin-dash-nav-row" data-route="system" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25EB</span>
                                    <span data-i18n="adminNavSystem">\u7CFB\u7D71</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="history" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u25F7</span>
                                    <span data-i18n="adminNavHistory">\u7D00\u9304\u8207\u532F\u51FA</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="backup" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u21EA</span>
                                    <span data-i18n="adminNavBackup">\u5099\u4EFD\u8207\u9084\u539F</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="security" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u26BF</span>
                                    <span data-i18n="adminNavSecurity">\u5B89\u5168</span>
                                </button>
                                <button type="button" class="admin-dash-nav-row" data-route="integrations" role="tab" aria-selected="false">
                                    <span class="admin-dash-nav-icon">\u232C</span>
                                    <span data-i18n="adminNavIntegrations">\u64F4\u5145</span>
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
                                         aria-label="${f(ServerI18n.t("adminSearchHint"))}"
                                         title="${f(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${f(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${f(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${Z?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${f(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${f(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${f(Z?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                            <details id="sec-advanced" class="admin-route-sections" open>
                                <summary class="sr-only">${ServerI18n.t("sectionAutomationTitle")||"Advanced"}</summary>
                                <div id="advanced-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- webhooks & scheduler -->
                                </div>
                            </details>

                            <!-- 2026-09-06 \u8A2D\u8A08\u7A3F 06\uFF1AQuick Actions F1\u2013F4 \u8207 My Actions \u6574\u5340\u79FB\u9664\u3002
                                 \u63A7\u5236\u53F0\u9996\u5C4F\u61C9\u8A72\u53EA\u6709\u4E09\u584A\u2014\u2014\u986F\u793A\u5C64\u958B\u95DC\u3001\u4E00\u884C\u6578\u5B57\u3001\u5373\u6642\u8A0A\u606F\u6D41\u3002
                                 F1\u2013F4 \u90A3\u56DB\u5F35\u5E38\u99D0\u9762\u677F\uFF08\u6548\u679C\uFF0F\u6295\u7968\uFF0F\u9ED1\u540D\u55AE\uFF0F\u5EE3\u64AD\uFF09\u662F\u300C\u56DB\u500B\u5165\u53E3\u7684
                                 \u6377\u5F91\u300D\uFF0C\u4F46\u4E3B\u6301\u4EBA\u771F\u6B63\u8981\u7528\u6642\u662F\u6709\u660E\u78BA\u76EE\u6A19\u7684\uFF0C\u2318K \u547D\u4EE4\u9762\u677F\u4E00\u6B21
                                 \u5C31\u5230\uFF08\u8A2D\u8A08\u7A3F 15 \xB7 CK1 \u660E\u8B1B\u300C\u53D6\u4EE3 F1\u2013F4\u300D\uFF09\uFF1BMy Actions \u662F\u7A3D\u6838
                                 \u7528\u7684\u56DE\u9867\uFF0C\u5BB6\u5728\u300C\u7D00\u9304\u8207\u532F\u51FA \u203A \u64CD\u4F5C\u7D00\u9304\u300D\u3002 -->
                        </div>
                    </div>
                `;let ie=document.getElementById("settings-grid"),le=F.Effects?F.Effects[0]!==!1:!0;ie.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${le}">${le?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${le}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${le?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),ie.insertAdjacentHTML("beforeend",`
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
    `),ie.insertAdjacentHTML("beforeend",`
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
            <span class="lbl">${f(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${f(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${f(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${f(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${f(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${f(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${f(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${f(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${f(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${f(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${f(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),u(j),ie.insertAdjacentHTML("beforeend",`
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
    `),W(),e(),u(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),O(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ke=document.querySelector("[data-telem-bars]");if(!ke)return;let Ie=document.querySelector("[data-telem-status]"),ee={cpu:100,mem:100,ws:100,rate:50};function ae(re,ve,fe,q,V){let Y=ke.querySelector(`[data-telem-fill="${re}"]`),Q=ke.querySelector(`[data-telem-value="${re}"]`);Y&&(Y.style.width=Math.max(0,Math.min(100,ve))+"%",Y.classList.toggle("is-warn",!q)),Q&&(Q.textContent=fe);let oe=ke.querySelector(`[data-telem-row="${re}"]`);oe&&V&&oe.setAttribute("title",V)}function de(re,ve){if(!ve||ve<=0)return Math.round(re)+" MB used";if(ve>=1024){let fe=(re/1024).toFixed(1),q=(ve/1024).toFixed(1);return`${fe} / ${q} GB used`}return`${Math.round(re)} / ${Math.round(ve)} MB used`}async function me(){try{let re=await fetch("/admin/metrics",{credentials:"same-origin"});if(!re.ok)return;let ve=await re.json(),fe=ve.cpu_series||[],q=ve.mem_series||[],V=ve.mem_mb_series||[],Y=ve.ws_series||[],Q=ve.rate_series||[],oe=Te=>Te.length?Te[Te.length-1]:0,ce=Number(oe(fe)||0),pe=Number(oe(q)||0),we=Number(oe(V)||0),ge=Number(ve.mem_total_mb||0),he=Number(oe(Y)||ve.ws_clients||0),Se=Number(oe(Q)||0)/60;if(ae("cpu",ce,`${ce.toFixed(0)}%`,ce<90),ae("mem",pe,`${pe.toFixed(0)}%`,pe<90,de(we,ge)),ae("ws",he/ee.ws*100,String(he),he<100),ae("rate",Se/ee.rate*100,`${Se.toFixed(1)}/s`,Se<40),Ie){let Te=ce>=90||pe>=90||Se>=40;Ie.textContent=Te?"\u25CF BUSY":"\u25CF HEALTHY",Ie.classList.toggle("is-warn",Te)}}catch{}}setTimeout(me,4e3),setInterval(me,5e3)})()}let D={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=D;function O(){let K=document.querySelector(".admin-dash-grid");if(!K)return;let G="dashboard",te=null;function ne(re){return l.moderation.orderedIds.indexOf(re)!==-1?"moderation-grid":l.assets.orderedIds.indexOf(re)!==-1?"assets-grid":re==="sec-scheduler"||re==="sec-webhooks"?"sec-advanced":"settings-grid"}function z(){let re=K.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=K.querySelector("[data-route-note]"),fe=K.querySelector("[data-route-action]");if(fe&&Array.prototype.slice.call(fe.children).forEach(oe=>{oe._adminHomeHead?oe._adminHomeHead.appendChild(oe):oe.remove()}),!re)return;let q=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(G)),V=Array.prototype.slice.call(K.querySelectorAll(".admin-ui-page-head"));V.forEach(oe=>oe.classList.remove("is-merged-into-topbar"));let Y=(D[G]?.title||"").trim().replace(/\s+/g," "),Q=null;V.forEach(oe=>{let ce=oe.querySelector(".admin-ui-page-title"),pe=ce&&ce.textContent.trim().replace(/\s+/g," ");if(pe&&(q||pe===re||pe===Y)){if(oe.offsetParent!==null){Q===null&&(Q=oe.querySelector(".admin-ui-page-note")?.innerHTML||"");let ge=oe.querySelector(".admin-ui-page-actions");ge&&fe&&!fe.children.length&&(ge._adminHomeHead=oe,fe.appendChild(ge))}oe.classList.add("is-merged-into-topbar")}}),ve&&(ve.innerHTML=Q||"",ve.hidden=!Q)}function X(){let re=D[G],ve=new Set((re.sections||[]).map(ne)),fe=q=>q.id==="sec-advanced"?Array.from(q.querySelectorAll('[id^="sec-"]')).some(V=>getComputedStyle(V).display!=="none"):Array.from(q.children).some(V=>getComputedStyle(V).display!=="none");K.querySelectorAll(".admin-route-sections").forEach(q=>{if(!(q.id==="sec-advanced"?ve.has("sec-advanced"):ve.has(q.id))){q.style.display="none";return}q.style.display="",q.style.display=fe(q)?"":"none"})}let Z=()=>{let re=D[G],ve=new Set(re.sections);K.querySelectorAll('[id^="sec-"]').forEach(fe=>{if(fe.id){if(fe.id==="sec-advanced"){let q=Array.from(fe.querySelectorAll('[id^="sec-"]')).some(V=>ve.has(V.id));fe.style.display=q?"":"none";return}fe.style.display=ve.has(fe.id)?"":"none"}}),te&&window.AdminTabs?.hasTabsFor?.(G)&&window.AdminTabs.applyTabSectionVisibility(G,te,K),X(),z()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},ie=(re,ve,fe)=>{if(fe=fe||re,!D[re]){let _e=P[re];if(typeof _e=="string")re=_e;else if(_e&&typeof _e=="object")_e.nav&&(re=_e.nav),!ve&&_e.tab&&(ve=_e.tab);else{let $e=w[re];typeof $e=="string"?re=$e:$e&&typeof $e=="object"&&($e.nav&&(re=$e.nav),!ve&&$e.tab&&(ve=$e.tab))}}if(re==="system"&&ve&&se[ve]){let _e=se[ve];re=_e.nav,ve=_e.tab||null,fe=re}G=D[re]?re:"live",K.dataset.activeRoute=G;let q;window.AdminTabs?.hasTabsFor?.(G)?q=window.AdminTabs.resolveActiveTab(G,ve):q=null;let V=fe&&fe!==G?"#/"+fe:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(G,q):"#/"+G;if(window.location.hash!==V){try{history.replaceState(null,"",V)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let Y=D[G],Q=Array.from(K.querySelectorAll(".admin-dash-nav-row[data-route]")),oe=fe!==G?Q.find(_e=>_e.dataset.route===fe):null;Q.forEach(_e=>{let $e=oe?_e===oe:_e.dataset.route===G;_e.classList.toggle("is-active",$e),_e.setAttribute("aria-selected",$e?"true":"false")});let ce=K.querySelector("[data-route-kicker]"),pe=K.querySelector("[data-route-title]");var we=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(_e){return _e},ge="adminRouteTitle_"+G,he="adminRouteKicker_"+G,Se=we(ge),Te=we(he);ce&&(ce.textContent=Te!==he?Te:Y.kicker),pe&&(pe.textContent=Se!==ge?Se:Y.title);let Ee=G==="dashboard"||G==="live";K.querySelectorAll('[data-route-view="dashboard"]').forEach(_e=>{_e.style.display=Ee?"":"none"}),Ee?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),te=q,q&&window.AdminRouter?.tabMemory?.set?.(G,q),K.dataset.activeLeaf=q||G,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:q}})),X(),z(),ue(G,q),le(fe,G,q);try{history.replaceState(null,"",V)}catch{}};function le(re,ve,fe){window.AdminBreadcrumb?.render(K,re,ve,fe)}function ue(re,ve){let fe=K.querySelector("[data-admin-tabs-host]");if(!fe){let q=K.querySelector(".admin-dash-topbar");if(!q)return;fe=document.createElement("div"),fe.dataset.adminTabsHost="",q.insertAdjacentElement("afterend",fe)}if(fe.innerHTML="",window.AdminTabs?.hasTabsFor?.(re)&&ve){fe.hidden=!1;let q=window.AdminTabs.renderTabStrip(re,ve,{onSelect:V=>ie(re,V)});q&&fe.appendChild(q),fe.classList.remove("admin-tabs-host--accordion");return}fe.classList.remove("admin-tabs-host--accordion"),fe.hidden=!0}$&&window.removeEventListener("hashchange",$),$=()=>{let re=x(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=ve?ve[1]:null;re&&ie(re.nav,re.tab,fe||re.raw)},window.addEventListener("hashchange",$),K.querySelectorAll("[data-route]").forEach(re=>{re.addEventListener("click",ve=>{ve.preventDefault(),ie(re.dataset.route)})});let ke=x(window.location.hash),Ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ee=Ie?Ie[1]:ke?.raw||ke?.nav||"live";ie(ke?.nav||"live",ke?.tab||null,ee),window._adminNavigateTo=()=>ie(G,te);let ae=!1;function de(){if(ae)return;ae=!0;let re=()=>{ae=!1,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:te}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(re):setTimeout(re,0)}let me=K.querySelector(".admin-dash-main");me&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{de()}).observe(me,{childList:!0,subtree:!0}),de())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let K=document.querySelector("[data-open-help]");K&&K.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let G=document.querySelector("[data-open-palette]");if(G){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};G.addEventListener("click",ne),G.addEventListener("keydown",z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ne())})}let te=document.getElementById("logoutButton");te&&te.addEventListener("click",async()=>{try{let ne=await L("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let z=this.name,X=this.checked;await v(z,X)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let z=B();z[ne.id]=ne.open,N(z)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let z=this.dataset.key,X=parseInt(this.dataset.index),Z=this.value;this.type==="number"&&(Z=parseInt(Z)),await i(z,Z,X,this)})})}function I(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}_()}else E()}async function R(){await c(),I(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function j(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{S&&(S.disconnect(),S=null)}),R()})});var lt=ye(()=>{(function(){"use strict";var y=null;async function k(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),F=Array.from(M).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(F.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var S=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:F})}),$=await S.json();if(!S.ok){window.showToast($.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),C($),L()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function L(){y&&(clearInterval(y),y=null);var m=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var F=await M.json();C(F),F.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};m(),y=setInterval(m,2e3)}function U(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function C(m){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!m||m.state==="idle"){M.appendChild(U());return}var F=m.total_votes||0,S=Math.max(1,...m.options.map(function(B){return B.count})),$=document.createElement("div");$.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var w=document.createElement("span");w.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(w);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=m.question||"",P.appendChild(b);var x=document.createElement("span");x.className="admin-poll-status-state",x.textContent=m.state,P.appendChild(x),$.appendChild(P),m.options.forEach(function(B){var N=document.createElement("div");N.className="admin-poll-status-row";var f=document.createElement("div");f.className="admin-poll-status-label";var c=document.createElement("span"),a=document.createElement("b");a.textContent=B.key+".",c.appendChild(a),c.appendChild(document.createTextNode(" "+B.text));var t=document.createElement("span");t.textContent=B.count+" ("+B.percentage+"%)",f.appendChild(c),f.appendChild(t);var d=document.createElement("div");d.className="admin-poll-status-bar";var n=document.createElement("div");n.className="admin-poll-status-bar-fill",n.style.width=B.count/S*100+"%",d.appendChild(n),N.appendChild(f),N.appendChild(d),$.appendChild(N)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",F),$.appendChild(H),M.appendChild($)}}function T(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",k);var F=document.getElementById("pollEndBtn");F&&F.addEventListener("click",g);var S=document.getElementById("pollResetBtn");S&&S.addEventListener("click",h);var $=document.getElementById("pollAddOptionBtn");$&&$.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var x=b.querySelectorAll(".poll-option-input").length;if(x>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+x)+". Option "+(x+1),H.maxLength=100,b.appendChild(H)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var x=b.querySelectorAll(".poll-option-input");if(x.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}x[x.length-1].remove()}});var w=m;w&&(w.addEventListener("toggle",function(){w.open&&L()}),L()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){T()}),document.addEventListener("DOMContentLoaded",function(){T()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&T()})})()});var ct=ye(()=>{(function(){"use strict";async function y(){try{let L=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!L.ok){let M=await L.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",M.error||L.statusText),!1);return}let U=await L.json(),C=document.getElementById("blacklistKeywords");C.innerHTML="";let T=document.getElementById("modBlacklistCount");T&&(T.textContent=`${U.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=U.length),U.length===0?C.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:U.forEach(M=>{let F=document.createElement("div");F.className="hud-banned-row";let S=document.createElement("span");S.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",S.textContent="\u2298";let $=document.createElement("span");$.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",$.textContent=M;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",M),F.appendChild(S),F.appendChild($),F.appendChild(P),C.appendChild(F)})}catch(L){console.error("Fetch blacklist error:",L),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function k(){let L=document.getElementById("newKeywordInput"),U=L.value.trim();if(!U){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let C=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})}),T=await C.json();C.ok?(L.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:T.message||ServerI18n.t("histToastBlacklisted",{keyword:U}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})})).ok)throw new Error("remove failed");y()}}}):showToast(T.message||"Keyword added.",!0)):showToast(T.error||"Failed to add keyword.",!1)}catch(C){console.error("Add keyword error:",C),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(L){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",L),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let C=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:L})}),T=await C.json();C.ok?(showToast(T.message||"Keyword removed.",!0),y()):showToast(T.error||"Failed to remove keyword.",!1)}catch(C){console.error("Remove keyword error:",C),showToast(ServerI18n.t("removeKeywordError"),!1)}}function h(){let L=document.getElementById("addKeywordBtn");L&&L.addEventListener("click",k);let U=document.getElementById("newKeywordInput");U&&U.addEventListener("keypress",function(T){(T.key==="Enter"||T.keyCode===13)&&(T.preventDefault(),k())});let C=document.getElementById("blacklistKeywords");C&&C.addEventListener("click",function(T){let m=T.target.closest(".removeKeywordBtn");if(m){let M=m.dataset.keyword;M&&g(M)}})}document.addEventListener("admin-panel-rendered",function(){y(),h()}),window.AdminHistory={fetchBlacklist:y}})()});var ut=ye(()=>{(function(){"use strict";var y="sec-timeline-export",k="danmu.adminHistoryExports.v1",g=10,h={rawText:!0,polls:!0,masked:!1,metadata:!0},L=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],U=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],C={range:"24h",filters:Object.assign({},h),format:"JSON"};function T(){return document.getElementById(y)}function m(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return[]}}function M(p){try{localStorage.setItem(k,JSON.stringify(p.slice(0,g)))}catch{}}function F(p){var A=m();A.unshift(p),M(A)}function S(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function $(p){try{var A=new Date(p),E=new Date,_=A.toDateString()===E.toDateString();if(_)return ServerI18n.t("historyV2TodayAt",{time:String(A.getHours()).padStart(2,"0")+":"+String(A.getMinutes()).padStart(2,"0")});var D=new Date(E);return D.setDate(E.getDate()-1),A.toDateString()===D.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(A.getHours()).padStart(2,"0")+":"+String(A.getMinutes()).padStart(2,"0")}):A.getMonth()+1+"-"+String(A.getDate()).padStart(2,"0")+" "+String(A.getHours()).padStart(2,"0")+":"+String(A.getMinutes()).padStart(2,"0")}catch{return p||""}}function P(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var A=new Date,E=new Date(A.getFullYear(),A.getMonth(),A.getDate());return Math.max(1,Math.ceil((A-E)/36e5))}return p==="yest"?48:p==="live"?6:24}function w(p){return p.filter(function(A){return!(!C.filters.rawText&&!A.is_poll&&!A.muted&&!A.banned||!C.filters.polls&&A.is_poll||!C.filters.masked&&(A.muted||A.banned))}).map(function(A){if(!C.filters.metadata){var E=Object.assign({},A);return delete E.clientIp,delete E.fingerprint,E}return A})}function b(p){var A=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],E=function(O){var W=O==null?"":String(O);return W.indexOf(",")>=0||W.indexOf('"')>=0||W.indexOf(`
`)>=0?'"'+W.replace(/"/g,'""')+'"':W},_=function(O){return O.status?O.status:O.banned?"banned":O.muted?"muted":O.is_poll?"poll":"ok"},D=p.map(function(O){return[O.timestamp||"",O.nickname||"",O.text||"",O.color?"#"+O.color:"",O.size!=null?O.size:"",O.speed!=null?O.speed:"",O.opacity!=null?O.opacity:"",O.isImage?"true":"false",O.fontInfo&&O.fontInfo.name||"",O.clientIp||"",O.fingerprint||"",_(O),O.delivery_reason||""].map(E).join(",")});return[A.join(","),D.join(`\r
`)].filter(Boolean).join(`\r
`)}function x(p){return p.map(function(A,E){var _=new Date(A.timestamp||Date.now()),D=H(_),O=H(new Date(_.getTime()+3e3)),W=(A.nickname?"["+A.nickname+"] ":"")+(A.text||"");return E+1+`
`+D+" --> "+O+`
`+W+`
`}).join(`
`)}function H(p){var A=function(E,_){return String(E).padStart(_||2,"0")};return A(p.getHours())+":"+A(p.getMinutes())+":"+A(p.getSeconds())+","+A(p.getMilliseconds(),3)}function B(p,A){var E=URL.createObjectURL(p),_=document.createElement("a");_.href=E,_.download=A,_.click(),URL.revokeObjectURL(E)}function N(){var p=P(C.range),A=document.getElementById("histv2-go");A&&(A.disabled=!0,A.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(E){if(!E.ok)throw new Error("http "+E.status);return E.json()}).then(function(E){var _=E&&E.records||[],D=w(_);if(D.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var O=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),W,I;if(C.format==="JSON"){var R=JSON.stringify(D,null,2);I=new Blob([R],{type:"application/json"}),W="danmu-history-"+O+".json"}else C.format==="CSV"?(I=new Blob(["\uFEFF"+b(D)],{type:"text/csv;charset=utf-8;"}),W="danmu-history-"+O+".csv"):(I=new Blob([x(D)],{type:"application/x-subrip;charset=utf-8;"}),W="danmu-history-"+O+".srt");B(I,W),F({name:W,fmt:C.format,size:I.size,when:new Date().toISOString(),count:D.length}),c(),f(D.length,I.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:D.length}),!0)}).catch(function(E){console.error("[history-v2] export failed",E),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:E.message||E}),!1)}).finally(function(){A&&(A.disabled=!1,delete A.dataset.busy)})}function f(p,A){var E=document.getElementById("histv2-estimate");E&&(E.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:A?S(A):"\u2014 MB"}))}function c(){var p=document.getElementById("histv2-recent-list");if(p){var A=m();if(A.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=A.map(function(E){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+E.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+a(E.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+a($(E.when))+" \xB7 "+S(E.size)+"</div></div></div>"}).join("")}}function a(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})}function t(){return L.map(function(p){var A=C.range===p.k;return'<button type="button" class="histv2-chip'+(A?" is-active":"")+'" data-histv2-range="'+p.k+'">'+a(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function n(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function(A){var E=!!C.filters[A.k];return'<button type="button" class="histv2-toggle'+(E?" is-on":"")+'" data-histv2-toggle="'+A.k+'"><span class="histv2-toggle-mark">'+(E?"\u2713":"\u25CB")+"</span><span>"+a(ServerI18n.t(A.labelKey))+"</span></button>"}).join("")}function l(){return U.map(function(p){var A=C.format===p.k;return'<button type="button" class="histv2-fmt'+(A?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+(A?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+a(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+a(p.desc)+"</div></button>"}).join("")}function o(){var p=T();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+l()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",e),c(),r())}function e(p){var A=p.target.closest("[data-histv2-range]");if(A){C.range=A.dataset.histv2Range,i(),r();return}var E=p.target.closest("[data-histv2-toggle]");if(E){var _=E.dataset.histv2Toggle;C.filters[_]=!C.filters[_],v(),r();return}var D=p.target.closest("[data-histv2-fmt]");if(D){C.format=D.dataset.histv2Fmt,s(),r();return}var O=p.target.closest("#histv2-go");if(O&&!O.dataset.busy){N();return}}function i(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=t())}function v(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=n())}function s(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=l())}function r(){r._t&&clearTimeout(r._t),r._t=setTimeout(function(){var p=P(C.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(A){return A.ok?A.json():null}).then(function(A){if(!A)return f(0,0);var E=w(A&&A.records||[]),_=C.format==="JSON"?220:C.format==="CSV"?110:80;f(E.length,E.length*_)}).catch(function(){f(0,0)})},250)}function u(){var p=T(),A=document.getElementById("admin-backup-v2-page");if(!p){var E=document.getElementById("settings-grid");if(!E)return;p=document.createElement("div"),p.id=y,p.className="admin-ui-card lg:col-span-2 history-v2-section",E.appendChild(p),o()}A&&A.parentElement&&p.previousElementSibling!==A&&A.parentElement.insertBefore(p,A.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:r,state:C}})()});var mt=ye(()=>{(function(){"use strict";let y="admin-replay-bar";function k(){let h=document.getElementById(y);return h||(document.body?(h=document.createElement("div"),h.id=y,h.className="admin-replay-bar",h.hidden=!0,h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(h,document.body.firstChild),h):null)}function g(h){let L=k();L&&(L.hidden=!h)}window.AdminReplayBar={ensure:k,setActive:g},document.addEventListener("admin-panel-rendered",k)})()});var pt=ye(()=>{(function(){"use strict";let y=null;function k($){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),w=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),x=document.getElementById("replayProgress"),H=(f,c)=>{f&&f.classList.toggle("hidden",!c)},B=$==="playing",N=$==="paused";H(P,B),H(w,N),H(b,B||N),H(x,B||N),!B&&!N&&x&&(x.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(B||N)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let $=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!$.ok)return;let P=await $.json(),w=document.getElementById("replayProgress");w&&(w.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),k(P.state),P.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function h(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),k("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function L(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),k("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function U(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),k("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let C=null,T=null,m=0,M=null;function F(){[["replayPauseBtn",h],["replayResumeBtn",L],["replayStopBtn",U]].forEach(function([P,w]){let b=document.getElementById(P);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",w),b.dataset.replayCtrlsBound="1")})}async function S(){try{let $=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!$.ok)return;let P=await $.json();(P.state==="playing"||P.state==="paused")&&(k(P.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){k("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){F(),S()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(F,800)})})()});var vt=ye(()=>{(function(){"use strict";let y="sec-ratelimit",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(T){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[T]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function h(){return`
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
          ${g.map(C=>`
            <div class="admin-ratelimit-row" data-rl-key="${C.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${k(ServerI18n.t(C.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${C.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${C.defLimit}" data-rl-limit="${C.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${C.key}">
                    <option value="10"${C.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${C.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${C.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${C.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${C.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${C.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${C.defLockout}" data-rl-lockout="${C.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${C.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${C.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${C.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${C.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${C.key}">
                  effective_rate = ${C.defLimit} / ${C.defWindow}s = ${(C.defLimit/C.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(C.defLimit*1.5)}${C.key==="login"?" \xB7 lock = "+C.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${C.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${C.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function L(C){let T=C.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let a=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,t=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,d=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,n=[];n.push(a?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),n.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),n.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[l,o,e]=await Promise.all(n),i=a||(l&&l.ok?await l.json():null);if(i){let A=i.stats&&i.stats.last_24h||0,E=i.stats&&i.stats.total||0,_=C.querySelector("[data-rl-sum-hits]"),D=C.querySelector("[data-rl-sum-hits-delta]");_&&(_.textContent=A.toLocaleString()),D&&(D.textContent=ServerI18n.t("ratelimitSumTotal",{n:E.toLocaleString()}))}let v=t||(o&&o.ok?await o.json():null);if(v){let A=Array.isArray(v)?v:v.entries||v.keywords||[],E=C.querySelector("[data-rl-sum-black]");E&&(E.textContent=A.length?ServerI18n.t("ratelimitCountUnit",{n:A.length}):"0")}let s=C.querySelector("[data-rl-sum-viol]"),r=C.querySelector("[data-rl-sum-viol-rate]"),u=C.querySelector("[data-rl-sum-locked]"),p=d||(e&&e.ok?await e.json():null);if(p){let A=p&&p.rate_limits;if(A&&A.totals){let E=A.totals.hits||0,_=A.totals.violations||0,D=A.totals.locked_sources||0;if(s&&(s.textContent=_.toLocaleString()),r){let O=E+_;r.textContent=O>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(_/O*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:D.toLocaleString()})),g.forEach(({key:O})=>{let W=A[O],I=C.querySelector(`[data-rl-current="${O}"]`);if(I&&W){let R=(W.hits||0).toLocaleString(),j=(W.violations||0).toLocaleString();I.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:R,viol:j})}}),M(A)}else s&&(s.textContent="\u2014"),r&&(r.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else s&&(s.textContent="\u2014"),r&&(r.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(p&&p.recent_violations)}catch{}},4500);function m(c){let a=C.querySelector("[data-rl-vbody]"),t=C.querySelector("[data-rl-vcount]");if(!a)return;let d=Array.isArray(c)?c:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){a.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let n=o=>{let e=new Date(o*1e3),i=v=>String(v).padStart(2,"0");return`${i(e.getHours())}:${i(e.getMinutes())}:${i(e.getSeconds())}`},l=o=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[o]||"var(--color-text-muted)";a.innerHTML=d.slice(0,30).map(o=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${n(o.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${l(o.scope)}">${(o.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${k(o.ip||"")}</span>
        </div>
      `).join("")}function M(c){c&&g.forEach(({key:a})=>{let t=c[a],d=C.querySelector(`[data-rl-suggest="${a}"]`);if(!d)return;let n=t&&t.suggestion;if(!n){d.hidden=!0;return}let l=d.querySelector("[data-rl-suggest-detail]");l&&(l.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(n.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:n.suggested_limit,suggWindow:n.suggested_window}));let o=d.querySelector("[data-rl-apply]");o&&(o.dataset.rlSuggestLimit=String(n.suggested_limit),o.dataset.rlSuggestWindow=String(n.suggested_window)),d.hidden=!1})}async function F(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let a=await c.json(),t=a&&a.rate_limits;if(!t)return;g.forEach(({key:d})=>{let n=t[d],l=C.querySelector(`[data-rl-current="${d}"]`);if(l&&n){let o=(n.hits||0).toLocaleString(),e=(n.violations||0).toLocaleString();l.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:o,viol:e})}}),M(t)}catch{}}C.addEventListener("click",async c=>{let a=c.target.closest("[data-rl-action]");if(!a)return;let t=a.dataset.rlAction;if(t==="save"){let d=a.dataset.rlSave,n=C.querySelector(`[data-rl-limit="${d}"]`),l=C.querySelector(`[data-rl-window="${d}"]`);if(!n||!l)return;let o=parseInt(n.value,10),e=parseInt(l.value,10);if(!Number.isFinite(o)||!Number.isFinite(e)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let i=a.textContent;a.disabled=!0,a.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let v=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:o,window:e})});if(v.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:o,window:e}),!0),F();else{let s=await v.json().catch(()=>({})),r=s&&s.error||`HTTP ${v.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:r}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{a.disabled=!1,a.textContent=i}return}if(t==="apply-suggest"){let d=a.dataset.rlApply,n=parseInt(a.dataset.rlSuggestLimit,10),l=parseInt(a.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(n)||!Number.isFinite(l))return;let o=a.textContent;a.disabled=!0,a.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let e=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:n,window:l})});if(e.ok){let i=C.querySelector(`[data-rl-limit="${d}"]`),v=C.querySelector(`[data-rl-window="${d}"]`);i&&(i.value=n),v&&(v.value=l),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:n,window:l}),!0),F(),S()}else{let i=await e.json().catch(()=>({})),v=i&&i.error||`HTTP ${e.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:v}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{a.disabled=!1,a.textContent=o}return}if(t==="export"){let d=[];C.querySelectorAll("[data-rl-limit]").forEach(n=>{let l=n.dataset.rlLimit.toUpperCase();d.push(`${l}_RATE_LIMIT=${n.value}`)}),C.querySelectorAll("[data-rl-window]").forEach(n=>{let l=n.dataset.rlWindow.toUpperCase();d.push(`${l}_RATE_WINDOW=${n.value}`)}),T.textContent=d.join(`
`),T.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([n,[l,o]])=>{let e=C.querySelector(`[data-rl-limit="${n}"]`),i=C.querySelector(`[data-rl-window="${n}"]`);e&&(e.value=l),i&&(i.value=o)}),T.hidden=!0,S())});function S(){g.forEach(({key:c})=>{let a=C.querySelector(`[data-rl-limit="${c}"]`),t=C.querySelector(`[data-rl-window="${c}"]`),d=C.querySelector(`[data-rl-lockout="${c}"]`),n=C.querySelector(`[data-rl-effective="${c}"]`);if(!a||!t||!n)return;let l=parseInt(a.value,10)||0,o=parseInt(t.value,10)||1,e=(l/o).toFixed(2),i=Math.round(l*1.5),v=`effective_rate = ${l} / ${o}s = ${e} req/s \xB7 burst = ${i}`;if(c==="login"&&d){let s=parseInt(d.value,10)||0;v+=` \xB7 lock = ${s}s`}n.textContent=v})}C.addEventListener("input",c=>{let a=c.target;!a||!a.dataset.rlLimit&&!a.dataset.rlLockout||S()}),C.addEventListener("change",c=>{let a=c.target;!a||!a.dataset.rlWindow||S()}),S();function $(c,a){if(!c||!Array.isArray(a))return;let t=96,d=24,n=a.length?a:new Array(24).fill(0),l=Math.max(1,...n),o=t/Math.max(1,n.length-1),e=n.map((v,s)=>`${(s*o).toFixed(1)},${(d-2-v/l*(d-4)).toFixed(1)}`).join(" "),i=c.querySelector("polyline");i&&i.setAttribute("points",e)}g.forEach(({key:c})=>{let a=C.querySelector(`[data-rl-spark="${c}"]`);a&&$(a,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,w={allowlist:[],denylist:[]},b={input:C.querySelector("[data-rl-ip-input]"),select:C.querySelector("[data-rl-ip-select]"),addBtn:C.querySelector("[data-rl-ip-add]"),summary:C.querySelector("[data-rl-ip-summary]"),error:C.querySelector("[data-rl-ip-error]"),allowCount:C.querySelector("[data-rl-ip-allow-count]"),denyCount:C.querySelector("[data-rl-ip-deny-count]"),allowBody:C.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:C.querySelector('[data-rl-ip-body="denylist"]')};function x(c){if(b.error){if(!c){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=c}}function H(c){let a=c==="allowlist"?b.allowBody:b.denyBody,t=c==="allowlist"?b.allowCount:b.denyCount;if(!a||!t)return;let d=Array.isArray(w[c])?w[c]:[];if(t.textContent=String(d.length),d.length===0){let n=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");a.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:n})}</div>`;return}a.innerHTML=d.map(n=>{let l=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:k(n)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${k(n)}">
          <span class="admin-ratelimit-ip-chip-cidr">${k(n)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${k(n)}" data-rl-ip-remove-kind="${c}" title="${l}" aria-label="${l}">\xD7</button>
        </div>
      `}).join("")}function B(){if(H("allowlist"),H("denylist"),b.summary){let c=(w.allowlist||[]).length,a=(w.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:a})}}async function N(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let a=await c.json();a&&typeof a=="object"&&(w={allowlist:Array.isArray(a.allowlist)?a.allowlist:[],denylist:Array.isArray(a.denylist)?a.denylist:[]},B())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function f(c,{toastLabel:a}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(t.ok){let l=await t.json();return w={allowlist:Array.isArray(l.allowlist)?l.allowlist:[],denylist:Array.isArray(l.denylist)?l.denylist:[]},B(),x(""),a&&typeof showToast=="function"&&showToast(a,!0),!0}let d=await t.json().catch(()=>({})),n=d&&d.error||`HTTP ${t.status}`;return x(n),!1}catch{return x(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let c=(b.input.value||"").trim();if(!c){x(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(c)){x(ServerI18n.t("ratelimitIpFormatError"));return}let a=b.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([...w[a]||[],c]));await f({[a]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(a==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&x("")})),C.addEventListener("click",async c=>{let a=c.target.closest("[data-rl-ip-remove]");if(!a)return;let t=a.dataset.rlIpRemove,d=a.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",n=(w[d]||[]).filter(l=>l!==t);await f({[d]:n},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),N(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let a=await c.json(),t=a&&a.rate_limits;if(!t)return;g.forEach(({key:d})=>{let n=t[d]&&(t[d].bucket_history||t[d].history);if(Array.isArray(n)&&n.length){let l=C.querySelector(`[data-rl-spark="${d}"]`);l&&$(l,n.slice(-24))}})}catch{}},5500)}function U(){let C=document.getElementById("settings-grid");if(!C||document.getElementById(y))return;C.insertAdjacentHTML("beforeend",h());let T=document.getElementById(y);T&&L(T)}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var ft=ye(()=>{(function(){"use strict";let y="sec-viewer-theme",k="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function h(){return`
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
      </div>`}let L=/^#[0-9a-f]{6}$/i,U=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function C(F){return String(F??"").replace(/[&<>"']/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[S])}function T(F){let S={};return!F||typeof F!="object"||(["bg","primary","hero"].forEach($=>{typeof F[$]=="string"&&L.test(F[$])&&(S[$]=F[$])}),(F.mode==="dark"||F.mode==="light")&&(S.mode=F.mode),typeof F.font=="string"&&/^[\w .-]{1,64}$/.test(F.font)&&(S.font=F.font),(F.logo===null||typeof F.logo=="string"&&U.test(F.logo))&&(S.logo=F.logo)),S}function m(F){let S={...g[0],logo:null};try{let s=localStorage.getItem(k);s&&(S={...S,...T(JSON.parse(s))})}catch{}let $="default";function P(){try{localStorage.setItem(k,JSON.stringify(S))}catch{}}function w(s){let r=/^#?([0-9a-f]{6})$/i.exec(s);if(!r)return[0,0,0];let u=parseInt(r[1],16);return[u>>16&255,u>>8&255,u&255]}function b([s,r,u]){let p=[s,r,u].map(A=>(A/=255,A<=.03928?A/12.92:Math.pow((A+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function x(s,r){let u=b(w(s)),p=b(w(r)),[A,E]=u>p?[u,p]:[p,u];return(A+.05)/(E+.05)}function H(s){return s>=7?{label:"AAA",cls:"is-good"}:s>=4.5?{label:"AA",cls:"is-ok"}:s>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function B(){let s=F.querySelector("[data-vt-presets]");s.innerHTML="",g.forEach(r=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+($===r.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${r.bg}">
            <span style="background:${r.primary}"></span>
            <span style="background:${r.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(r.nameKey)}</div>
          <div class="mode">${ServerI18n.t(r.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{S={...S,...r},$=r.id,P(),v()}),s.appendChild(u)})}function N(){F.querySelectorAll("[data-vt-mode-btn]").forEach(s=>{s.classList.toggle("is-active",S.mode===s.dataset.vtModeBtn)})}function f(){let s=F.querySelector("[data-vt-colors]"),r=S.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:r,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];s.innerHTML=u.map(p=>{let A=x(S[p.key],p.vs),E=H(A),_=C(S[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${_}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${E.cls}">${E.label} \xB7 ${A.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${_}" data-vt-color="${p.key}" />
                <input type="text" value="${_}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let s=F.querySelector("[data-vt-logo-preview]"),r=F.querySelector(".hint-empty"),u=F.querySelector("[data-vt-logo-actions]");S.logo?(s.src=S.logo,s.hidden=!1,r.style.display="none",u.hidden=!1):(s.hidden=!0,r.style.display="",u.hidden=!0)}function a(){let s=F.querySelector("[data-vt-font]");s.value=S.font;let r=F.querySelector("[data-vt-font-specimen]");r.style.fontFamily=S.font}function t(){let s=S.mode==="dark"?"#F8FAFC":"#0F172A",r=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(s,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(S.primary,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:x(S.hero,S.bg)}];F.querySelector("[data-vt-contrast]").innerHTML=r.map(u=>{let p=H(u.ratio);return`<span class="vt-contrast-chip ${p.cls}">${u.lbl} \xB7 ${p.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function d(){let s=F.querySelector("[data-vt-stage]"),r=S.mode==="dark"?"#F8FAFC":"#0F172A";s.style.setProperty("--vt-bg",S.bg),s.style.setProperty("--vt-primary",S.primary),s.style.setProperty("--vt-hero",S.hero),s.style.setProperty("--vt-fg",r),s.style.fontFamily=S.font;let u=F.querySelector("[data-vt-preview-logo]");if(S.logo){let p=document.createElement("img");p.src=S.logo,p.style.maxHeight="40px",u.replaceChildren(p)}else u.textContent="Danmu Fire"}let n="auto",l="auto";function o(){F.querySelectorAll("[data-vt-theme-btn]").forEach(s=>{s.classList.toggle("is-active",s.dataset.vtThemeBtn===n)}),F.querySelectorAll("[data-vt-lang-btn]").forEach(s=>{s.classList.toggle("is-active",s.dataset.vtLangBtn===l)})}async function e(){try{let s=await fetch("/get_settings",{credentials:"same-origin"});if(!s.ok)return;let r=await s.json(),u=r&&r.ViewerThemeMode&&r.ViewerThemeMode[1],p=r&&r.ViewerLangMode&&r.ViewerLangMode[1];typeof u=="string"&&(n=u),typeof p=="string"&&(l=p),o()}catch{}}async function i(s,r){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:s,value:r,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${s} = ${r}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:s}),!1)}}function v(){B(),N(),f(),c(),a(),t(),d(),o()}F.addEventListener("input",s=>{if(s.target.matches("[data-vt-color]")){let r=s.target.dataset.vtColor;L.test(s.target.value)&&(S[r]=s.target.value,$="custom",P(),v())}else if(s.target.matches("[data-vt-hex]")){let r=s.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(s.target.value)&&(S[r]=s.target.value,$="custom",P(),v())}else s.target.matches("[data-vt-font]")&&(S.font=s.target.value,P(),v())}),F.addEventListener("change",s=>{if(s.target.matches("[data-vt-logo-input]")){let r=s.target.files&&s.target.files[0];if(!r)return;if(r.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{S.logo=String(u.result||""),P(),v()},u.readAsDataURL(r)}}),F.addEventListener("click",s=>{let r=s.target.closest("[data-vt-mode-btn]");if(r){S.mode=r.dataset.vtModeBtn,$="custom",P(),v();return}let u=s.target.closest("[data-vt-theme-btn]");if(u){n=u.dataset.vtThemeBtn,o(),i("ViewerThemeMode",n);return}let p=s.target.closest("[data-vt-lang-btn]");if(p){l=p.dataset.vtLangBtn,o(),i("ViewerLangMode",l);return}if(s.target.closest("[data-vt-logo-remove]")){S.logo=null,P(),v();return}let E=s.target.closest("[data-vt-device-btn]");if(E){F.querySelectorAll("[data-vt-device-btn]").forEach(D=>D.classList.toggle("is-active",D===E)),F.querySelector("[data-vt-frame]").dataset.device=E.dataset.vtDeviceBtn;return}let _=s.target.closest("[data-vt-action]");_&&_.dataset.vtAction==="reset"&&(S={...g[0],logo:null},$="default",P(),v())}),v(),e()}document.addEventListener("click",function(F){let S=F.target.closest("[data-vt-jump]");if(!S)return;let $=S.dataset.vtJump;if($){F.preventDefault();try{location.hash="#/"+$}catch{}}});function M(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",h());let S=document.getElementById(y);S&&m(S)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var ht=ye(()=>{(function(){"use strict";let y="sec-system-overview";function k(){return`
      <div id="${y}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("sohPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("sohPageNote")}</p>
          <div class="admin-ui-page-actions">
            <span class="admin-soh-chip" data-soh-chip>
              <span class="admin-soh-chip__dot" data-soh-banner-dot></span>
              <span data-soh-banner-title>${ServerI18n.t("sohChecking")}</span>
            </span>
          </div>
        </div>

        <div class="admin-soh-kpis">
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(T=>`
            <div class="admin-soh-kpi" data-m="${T.id}">
              <div class="admin-soh-kpi__label">${T.label}</div>
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

        <div class="admin-ui-group">
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(T=>`
            <a class="admin-ui-group-row admin-soh-link" href="${T.hash}">
              <span class="lbl">${T.label}</span>
              <span class="val admin-soh-link__sub" ${T.attr}>${T.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function g(T){let m=Math.floor(T/86400),M=Math.floor(T%86400/3600),F=Math.floor(T%3600/60);return m>0?`${m}d ${String(M).padStart(2,"0")}h ${String(F).padStart(2,"0")}m`:M>0?`${M}h ${String(F).padStart(2,"0")}m`:`${F}m ${String(T%60).padStart(2,"0")}s`}function h(T,m,M){let F=document.querySelector(`[data-m="${T}"]`);if(!F)return;let S=F.querySelector("[data-m-v]");S&&(S.textContent=m);let $=F.querySelector("[data-m-sub]");$&&($.textContent=M||"")}function L(T){let m=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),F=document.querySelector("[data-soh-chip]"),$=!(T.queue_size!=null&&T.queue_capacity!=null&&T.queue_size>=T.queue_capacity);F&&F.classList.toggle("is-warn",!$),m&&m.classList.toggle("is-warn",!$),M&&(M.textContent=$?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function U(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let F=await M.json(),S=N=>Array.isArray(N)&&N.length?N[N.length-1]:null,$=F.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-F.server_started_at)):0;h("uptime",$>0?g($):"\u2014","");let P=null;try{let N=await fetch("/admin/audience/stats",{credentials:"same-origin"});N.ok&&(P=(await N.json()).total_live)}catch{}let w=F.ws_clients??0;h("conn",String(w+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:w}):ServerI18n.t("sohConnBreakdown",{overlays:w,viewers:P}));let b=S(F.mem_series||[]),x=F.mem_total_mb?(F.mem_total_mb/1024).toFixed(0):null;h("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",x?ServerI18n.t("sohMemorySub",{total:x}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";h("ver",`v${H}`,ServerI18n.t("sohVersionSub")),L(F);let B=document.querySelector('[data-soh-sub="integrations"]');B&&(B.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:F.webhooks_count??0,plugins:F.plugins_loaded??0}));try{let N=await window.csrfFetch("/admin/ws-auth");if(N.ok){let f=await N.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=f.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let T=document.getElementById(y);if(!T)return;let m=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";T.querySelectorAll("[data-soh-mode]").forEach(F=>{let S=F.dataset.sohMode===M;F.classList.toggle("is-active",S),F.setAttribute("aria-pressed",S?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),T.addEventListener("click",function(M){let F=M.target.closest("[data-soh-mode]");if(F){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(F.dataset.sohMode),m();return}let S=M.target.closest("[data-soh-action]");if(!(!S||S.disabled)){if(S.dataset.sohAction==="copy-url"){let $=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText($).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(S.dataset.sohAction==="show-qr"){let $=T.querySelector("[data-soh-qr]");if(!$)return;if(!$.hidden){$.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{$.innerHTML=P.svg,$.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function C(){let T=document.getElementById("settings-grid");!T||document.getElementById(y)||(T.insertAdjacentHTML("beforeend",k()),document.getElementById(y)&&U())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var gt=ye(()=>{(function(){"use strict";let y="sec-polls",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(U){return String(U).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})};function g(){return`
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
  `}function h(){let U=document.getElementById("sec-polls");if(!U)return;let C=U.querySelector("[data-poll-queue]"),T=U.querySelector("[data-poll-editor]"),m=U.querySelector("[data-poll-view-builder]"),M=U.querySelector("[data-poll-view-live]"),F=U.querySelector("[data-poll-view-results]"),S="danmu.adminPollQueue.v2";function $(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function w(z){return{id:P(),label:""}}function b(){return{id:$(),text:"",timer:90,image_url:"",server_q_id:"",options:[w("A"),w("B")]}}let x=null,H="builder",B=null,N=0,f={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,a=[];try{let z=localStorage.getItem(S);if(z){let X=JSON.parse(z);Array.isArray(X)?a=X:X&&Array.isArray(X.queue)&&(a=X.queue)}}catch{}(!Array.isArray(a)||a.length===0)&&(a=[b()]),a.forEach(z=>{typeof z.image_url!="string"&&(z.image_url=""),typeof z.server_q_id!="string"&&(z.server_q_id="")});let t=a[0].id,d="manual",n=null,l=null,o={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function e(){try{localStorage.setItem(S,JSON.stringify({queue:a,activeId:t,mode:d}))}catch{}}function i(z){return a.find(X=>X.id===z)}function v(z,X){let Z=i(z);Z&&Object.assign(Z,X)}function s(z,X,Z){let se=z.slice(),[ie]=se.splice(X,1);return se.splice(Z,0,ie),se}function r(){C.innerHTML="",a.forEach((z,X)=>{let Z=document.createElement("div");Z.className="admin-poll-qrow",z.id===t&&Z.classList.add("is-active");let se=o.active&&o.currentIndex===X;se&&Z.classList.add("is-running"),Z.dataset.qid=z.id,Z.draggable=!0;let ie=!!z.image_url;Z.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${X+1}</span>
            <div class="info">
              <div class="text">${k(z.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:z.options.length})} \xB7 ${z.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):z.timer+"s"} \xB7 ${ie?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":z.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,C.appendChild(Z)})}function u(){let z=i(t)||a[0];if(!z){T.innerHTML="";return}let X=a.indexOf(z);T.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${X+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:X+1})}</span>
            </div>
            <span class="progress">Q${X+1} / ${a.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${k(z.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${z.image_url?`
              <img class="admin-poll-q-image-thumb" src="${k(z.image_url)}" alt="" />
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
            ${z.options.map((Z,se)=>`
              <div class="admin-poll-opt" data-oid="${Z.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+se)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${Z.id}" value="${k(Z.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+se)})}" maxlength="100" />
                ${z.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${Z.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
              </div>
            `).join("")}
            ${z.options.length<6?`<button type="button" class="admin-poll-opt-add" data-ed-opt-add>${ServerI18n.t("pollBuilderAddOptionBtn",{n:z.options.length})}</button>`:""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>${ServerI18n.t("pollBuilderTimeLimitLabel")}</span>
              <select data-ed-timer>
                <option value="30"${z.timer===30?" selected":""}>30s</option>
                <option value="90"${z.timer===90?" selected":""}>90s</option>
                <option value="180"${z.timer===180?" selected":""}>${ServerI18n.t("pollBuilderTimer3Min")}</option>
                <option value="300"${z.timer===300?" selected":""}>${ServerI18n.t("pollBuilderTimer5Min")}</option>
                <option value="0"${z.timer===0?" selected":""}>${ServerI18n.t("pollBuilderNoTimeLimit")}</option>
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
        `}function p(){x&&x.active?H="live":B?H="results":H="builder",U.dataset.pollView=H,m.hidden=H!=="builder",M.hidden=H!=="live",F.hidden=H!=="results",r(),u(),J(),H==="live"?O():H==="results"&&I(),H==="live"?A():E()}function A(){c||(c=setInterval(()=>{H!=="live"||!x||!x.active||W()},1e3))}function E(){c&&(clearInterval(c),c=null)}function _(z,X){if(!z||!z.time_limit_seconds)return null;if(!X)return z.time_limit_seconds;let Z=Date.now()/1e3-X;return Math.max(0,Math.round(z.time_limit_seconds-Z))}function D(z){if(z==null)return"\u221E";let X=String(Math.floor(z/60)).padStart(2,"0"),Z=String(z%60).padStart(2,"0");return`${X}:${Z}`}function O(){if(!x||!x.questions||x.questions.length===0){M.innerHTML="";return}let z=x.current_index>=0?x.current_index:0,X=x.questions.length,Z=x.questions[z],se=_(Z,x.started_at),ie=Z.time_limit_seconds||0,le=ie>0&&se!=null?Math.max(0,Math.min(1,se/ie)):1,ue=ie>0&&se!=null&&se<=Math.max(5,ie*.15),ke=Z.options.reduce((fe,q)=>fe+(q.count||0),0),Ie=[...Z.options].sort((fe,q)=>(q.count||0)-(fe.count||0)),ee=Ie[0]?Ie[0].count:0,ae=x.questions[z+1],de=110,me=de/2-6,re=2*Math.PI*me,ve=re*le;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${k((x.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${z+1}</strong>`,total:X})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${de} ${de}" width="56" height="56">
                      <circle cx="${de/2}" cy="${de/2}" r="${me}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${de/2}" cy="${de/2}" r="${me}" fill="none"
                        stroke="${ue?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ve} ${re}" stroke-linecap="round"
                        transform="rotate(-90 ${de/2} ${de/2})"
                        style="filter: drop-shadow(0 0 4px ${ue?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${ue?"is-low":""}" data-live-mmss>${se==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(se)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:z+1})}</div>
                <div class="text">${k(Z.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${Ie.map(fe=>{let q=ke>0?fe.count/ke*100:0,V=(fe.count||0)>0&&fe.count===ee;return`
                    <div class="admin-polls-live-bar ${V?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${k(fe.key)}</span>
                        <span class="lbl">${k(fe.text||"")}</span>
                        ${V?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${q.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:fe.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${q.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${ke}</strong>`})}</span>
                ${ae?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${k(ae.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${z>=X-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${z+1}/${X}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${x.questions.map((fe,q)=>{let V=q<z?"done":q===z?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${V}">
                        <span class="idx">${V==="done"?"\u2713":q+1}</span>
                        <span class="t">${k(fe.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${V==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(fe=>`
                    <label class="admin-polls-live-toggle ${f[fe.k]?"is-on":""}" data-live-toggle="${fe.k}">
                      <span class="lbl">${fe.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function W(){if(!x||!x.active)return;let z=x.current_index>=0?x.current_index:0,X=x.questions[z];if(!X)return;let Z=_(X,x.started_at),se=X.time_limit_seconds||0,ie=M.querySelector("[data-live-mmss]"),le=M.querySelector("[data-live-ring]");if(ie&&(ie.textContent=Z==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(Z),ie.classList.toggle("is-low",se>0&&Z!=null&&Z<=Math.max(5,se*.15))),le&&se>0&&Z!=null){let ue=+le.getAttribute("r"),ke=2*Math.PI*ue,Ie=Math.max(0,Math.min(1,Z/se));le.setAttribute("stroke-dasharray",`${ke*Ie} ${ke}`);let ee=Z<=Math.max(5,se*.15);le.setAttribute("stroke",ee?"var(--hud-crimson)":"var(--color-primary)"),le.style.filter=`drop-shadow(0 0 4px ${ee?"var(--hud-crimson)":"var(--color-primary)"})`}f.autoAdvance&&se>0&&Z===0&&(z>=x.questions.length-1?te():G())}function I(){let z=B;if(!z||!z.questions||z.questions.length===0){F.innerHTML="";return}let X=z.questions.length,Z=Math.max(0,Math.min(N,X-1)),se=z.questions[Z],ie=se.options.reduce((re,ve)=>re+(ve.count||0),0),le=[...se.options].sort((re,ve)=>(ve.count||0)-(re.count||0)),ue=le[0]||{key:"-",text:"\u2014",count:0},ke=le[1],Ie=ie>0?ue.count/ie*100:0,ee=ke?Math.max(0,ue.count-ke.count):ue.count,ae=z.started_at||0,de=z.ended_at||Date.now()/1e3,me=Math.max(0,Math.round(de-ae));F.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${X>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${z.questions.map((re,ve)=>`
                    <button type="button" role="tab" class="${ve===Z?"is-active":""}" data-results-tab="${ve}">
                      Q${ve+1}<span class="t">${k((re.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${Z+1}/${X} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:D(me),n:ie})}</span>
                </div>
                <div class="text">${k(se.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${k(ue.key)}</div>
                <div class="info">
                  <div class="lbl">${k(ue.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:ue.count})} \xB7 ${Ie.toFixed(1)}% ${ke?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:ee}):""}</div>
                </div>
                <div class="pct">${Ie.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:ie})}</span>
                </div>
                ${le.map((re,ve)=>{let fe=ie>0?re.count/ie*100:0;return`
                    <div class="admin-polls-results-bar ${ve===0&&re.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ve+1}</span>
                        <span class="tag">${k(re.key)}</span>
                        <span class="lbl">${k(re.text||"")}</span>
                        <span class="pct">${fe.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:re.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${fe.toFixed(1)}%"></div></div>
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
                  <span class="big">${ie}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,ie?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:se.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${se.time_limit_seconds?D(se.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${z.started_at?new Date(z.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${z.ended_at?new Date(z.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${D(me)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let re=Math.max(1,...le.map(ve=>ve.count));return le.map(ve=>`<div class="bar" style="height:${Math.max(6,ve.count/re*100)}%"></div>`).join("")})()}
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
        `}function R(z){let X=[["question_index","question","option_key","option_text","count","percentage"]];return z.questions.forEach((Z,se)=>{let ie=Z.options.reduce((le,ue)=>le+(ue.count||0),0);Z.options.forEach(le=>{let ue=ie>0?(le.count/ie*100).toFixed(1):"0";X.push([se+1,Z.text,le.key,le.text,le.count,ue])})}),X.map(Z=>Z.map(se=>{let ie=String(se??"");return/[",\n]/.test(ie)?`"${ie.replace(/"/g,'""')}"`:ie}).join(",")).join(`
`)}function j(z,X,Z){let se=new Blob([Z],{type:X}),ie=document.createElement("a");ie.href=URL.createObjectURL(se),ie.download=z,document.body.appendChild(ie),ie.click(),setTimeout(()=>{URL.revokeObjectURL(ie.href),ie.remove()},0)}U.addEventListener("click",z=>{let X=z.target.closest("[data-live-action]");if(X){let le=X.dataset.liveAction;le==="advance"?G():le==="end"?te():le==="pause"&&(f.autoAdvance=!1,O());return}let Z=z.target.closest("[data-live-toggle]");if(Z){let le=Z.dataset.liveToggle;le in f&&(f[le]=!f[le],Z.classList.toggle("is-on",f[le]));return}let se=z.target.closest("[data-results-tab]");if(se){N=+se.dataset.resultsTab||0,I();return}let ie=z.target.closest("[data-results-action]");if(ie){let le=ie.dataset.resultsAction,ue=B;if(!ue)return;if(le==="copy"){let ke=ue.questions.map((Ie,ee)=>{let ae=Ie.options.reduce((me,re)=>me+(re.count||0),0),de=Ie.options.map(me=>{let re=ae>0?(me.count/ae*100).toFixed(1):"0.0";return`  ${me.key}. ${me.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} (${re}%)`});return`Q${ee+1}: ${Ie.text}
${de.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ke)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else le==="csv"?j(`poll_${(ue.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",R(ue)):le==="json"?j(`poll_${(ue.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ue,null,2)):le==="reset"&&(B=null,N=0,p());return}}),C.addEventListener("dragstart",z=>{let X=z.target.closest(".admin-poll-qrow");X&&(n=X.dataset.qid,X.classList.add("is-dragging"))}),C.addEventListener("dragend",z=>{let X=z.target.closest(".admin-poll-qrow");X&&X.classList.remove("is-dragging"),n=null,C.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over"))}),C.addEventListener("dragover",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-qrow");!X||!n||X.dataset.qid===n||(C.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),C.addEventListener("drop",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-qrow");if(!X||!n)return;let Z=a.findIndex(ie=>ie.id===n),se=a.findIndex(ie=>ie.id===X.dataset.qid);Z<0||se<0||Z===se||(a=s(a,Z,se),e(),p())}),C.addEventListener("click",z=>{let X=z.target.closest(".admin-poll-qrow");X&&(t=X.dataset.qid,e(),p())}),T.addEventListener("input",z=>{let X=i(t);if(X){if(z.target.matches("[data-ed-text]")){X.text=z.target.value,e(),r();return}if(z.target.matches("[data-ed-opt-text]")){let Z=z.target.dataset.edOptText,se=X.options.find(ie=>ie.id===Z);se&&(se.label=z.target.value,e(),r())}}}),T.addEventListener("change",z=>{let X=i(t);X&&z.target.matches("[data-ed-timer]")&&(X.timer=+z.target.value,e(),r())}),T.addEventListener("click",async z=>{let X=i(t);if(!X)return;let Z=z.target.closest("[data-ed-opt-remove]");if(Z){let ie=Z.dataset.edOptRemove;X.options.length>2&&(X.options=X.options.filter(le=>le.id!==ie),e(),u(),r());return}if(z.target.closest("[data-ed-opt-add]")){X.options.length<6&&(X.options.push(w()),e(),u(),r());return}let se=z.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(a.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let le=a.findIndex(ue=>ue.id===t);a=a.filter(ue=>ue.id!==t),t=a[Math.min(le,a.length-1)].id,e(),p()}}else if(se.dataset.edAction==="upload-q-image"){let ie=T.querySelector("[data-ed-q-image-input]");ie&&ie.click()}else se.dataset.edAction==="remove-q-image"&&(X.image_url="",e(),u(),r())}),T.addEventListener("change",async z=>{if(!z.target.matches("[data-ed-q-image-input]"))return;let X=z.target.files&&z.target.files[0];if(!X)return;let Z=i(t);if(!Z)return;if(!o.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),z.target.value="";return}if(!Z.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),z.target.value="";return}if(X.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),z.target.value="";return}let se=new FormData;se.append("file",X);try{let ie=await csrfFetch(`/admin/poll/${encodeURIComponent(o.pollId)}/upload-image/${encodeURIComponent(Z.server_q_id)}`,{method:"POST",body:se}),le=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(le.error||"upload failed");Z.image_url=le.image_url,e(),u(),r(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(ie){showToast&&showToast(String(ie.message||ie),!1)}finally{z.target.value=""}}),T.addEventListener("dragstart",z=>{let X=z.target.closest(".admin-poll-opt");X&&(l=X.dataset.oid,X.classList.add("is-dragging"))}),T.addEventListener("dragend",z=>{T.querySelectorAll(".is-dragging, .is-drag-over").forEach(X=>X.classList.remove("is-dragging","is-drag-over")),l=null}),T.addEventListener("dragover",z=>{let X=z.target.closest(".admin-poll-opt");!X||!l||X.dataset.oid===l||(z.preventDefault(),T.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),T.addEventListener("drop",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-opt"),Z=i(t);if(!X||!l||!Z)return;let se=Z.options.findIndex(le=>le.id===l),ie=Z.options.findIndex(le=>le.id===X.dataset.oid);se<0||ie<0||se===ie||(Z.options=s(Z.options,se,ie),e(),u())}),U.addEventListener("click",z=>{if(z.target.closest("[data-poll-action='add']")){let le=b();a.push(le),t=le.id,e(),p();return}let Z=z.target.closest("[data-poll-template]");if(Z){let le=b(),ue=Z.dataset.pollTemplate,ke=["A","B","C","D","E"],Ie=ee=>ee.map((ae,de)=>{let me=w(ke[de]);return me.text=ae,me});ue==="yesno"?(le.text="",le.options=Ie([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ue==="stars"?(le.timer=60,le.options=Ie(["1","2","3","4","5"])):ue==="four"&&(le.options=Ie(["","","",""])),a.push(le),t=le.id,e(),p();return}let se=z.target.closest("[data-poll-mode]");se&&(d=se.dataset.pollMode,U.querySelectorAll("[data-poll-mode]").forEach(le=>le.classList.toggle("is-active",le===se)),e());let ie=z.target.closest("[data-poll-session-action]");if(ie){let le=ie.dataset.pollSessionAction;le==="start"?K():le==="advance"?G():le==="end"&&te()}});function J(){let z=U.querySelector("[data-poll-session]");if(!z)return;let X=z.querySelector("[data-poll-session-status]"),Z=z.querySelector("[data-poll-session-action='start']"),se=z.querySelector("[data-poll-session-action='advance']"),ie=z.querySelector("[data-poll-session-action='end']");if(!o.pollId||!o.active){X.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,Z.hidden=!1,se.hidden=!0,ie.hidden=!0;return}let le=a.length,ue=o.currentIndex+1,ke=o.currentIndex>=le-1;X.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ue} / ${le}</span>`,Z.hidden=!0,se.hidden=ke,ie.hidden=!1}async function K(){try{let z=a.map((ue,ke)=>{let Ie=(ue.text||"").trim(),ee=ue.options.map(ae=>(ae.label||"").trim()).filter(Boolean);if(!Ie)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ke+1}));if(ee.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ke+1}));return{text:Ie,options:ee,time_limit_seconds:ue.timer&&ue.timer>0?ue.timer:null}});if(!z.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let X=(()=>{let ue=a.map(ke=>Number(ke.timer)||0).filter(ke=>ke>0);return ue.length?Math.round(ue.reduce((ke,Ie)=>ke+Ie,0)/ue.length):null})(),Z=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:z,mode:d||"manual",default_duration_s:X})}),se=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));o.pollId=se.poll_id,(se.questions||[]).forEach((ue,ke)=>{a[ke]&&(a[ke].server_q_id=ue.id)}),e();let ie=await csrfFetch("/admin/poll/start",{method:"POST"}),le=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(le.error||ServerI18n.t("pollBuilderErrStartFailed"));o.active=!0,o.currentIndex=le.current_index??0,x=le,B=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function G(){try{let z=await csrfFetch("/admin/poll/advance",{method:"POST"}),X=await z.json().catch(()=>({}));if(!z.ok)throw new Error(X.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));o.currentIndex=X.current_index,o.active=!!X.active,x=X,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:o.currentIndex+1}),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function te(){try{let z=x,X=await csrfFetch("/admin/poll/end",{method:"POST"});if(!X.ok){let Z=await X.json().catch(()=>({}));throw new Error(Z.error||ServerI18n.t("pollBuilderErrEndFailed"))}z&&z.questions&&(B={...z,ended_at:Date.now()/1e3},N=z.current_index>=0?z.current_index:0),o.active=!1,o.pollId="",o.currentIndex=-1,x=null,o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}function ne(){o.statusTimer&&clearInterval(o.statusTimer),o.statusTimer=setInterval(async()=>{if(o.pollId)try{let z=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!z.ok)return;let X=await z.json();if(X.poll_id!==o.pollId)return;o.active=!!X.active,o.currentIndex=X.current_index??-1;let Z=!!(x&&x.active);x=X,X.active||(clearInterval(o.statusTimer),o.statusTimer=null,Z&&X.questions&&!B&&(B={...X,ended_at:Date.now()/1e3},N=X.current_index>=0?X.current_index:0),x=null),H==="live"?O():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{o.statusTimer&&(clearInterval(o.statusTimer),o.statusTimer=null),E()}),p()}function L(){let U=document.getElementById("settings-grid");!U||document.getElementById(y)||(U.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&h())}document.addEventListener("admin-panel-rendered",L),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&L()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),L()})})()});var yt=ye(()=>{(function(){"use strict";let h="sec-live-feed",L=[],U=[],C=!1,T="",m="all",M=0,F=0,S=null,$=null,P=null;function w(ee){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ee):String(ee??"").replace(/[&<>"']/g,function(ae){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ae]})}function b(ee,ae){return ee?ee.length>ae?ee.slice(0,ae)+"\u2026":ee:""}function x(ee){let ae=new Date(ee),de=me=>String(me).padStart(2,"0");return`${de(ae.getHours())}:${de(ae.getMinutes())}:${de(ae.getSeconds())}`}function H(ee){if(!T)return!0;let ae=T.toLowerCase(),de=ee.data;return de.text&&de.text.toLowerCase().includes(ae)||de.nickname&&de.nickname.toLowerCase().includes(ae)||de.fingerprint&&de.fingerprint.toLowerCase().includes(ae)||de.layout&&de.layout.toLowerCase().includes(ae)}function B(ee){return m==="muted"?!!ee.muted:!0}function N(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ee=>ee.classList.toggle("is-active",ee.dataset.tab==="all"))}function f(){T="",P&&(P.value=""),N()}function c(ee,ae){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let me;return ee==="paused"?me=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ae||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ee==="no-result"?me=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ae||ServerI18n.t("lfNoMatchDesc")}):me=window.AdminEmpty.render("messages"),me.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),me.setAttribute("data-empty-kind","live-feed"),me}let de=document.createElement("div");return de.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",de.setAttribute("data-empty-kind","live-feed"),de.innerHTML=`<div class="admin-proto-placeholder-title">${w(ee)}</div><div class="admin-proto-placeholder-body">${w(ae||"")}</div>`,de}function a(ee){let ae=ee.data,de=document.createElement("div");de.className="admin-live-feed-row"+(ee.muted?" is-muted":""),de.dataset.id=ee.id,de.tabIndex=-1;let me=document.createElement("span");if(me.className="admin-live-feed-time",me.textContent=x(ee.ts),de.appendChild(me),(ae.layout||"scroll").toLowerCase()!=="scroll"){let Y=document.createElement("span");Y.className="admin-ui-chip admin-live-feed-tag",Y.textContent=ae.layout,de.appendChild(Y)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=b(ae.text||"",80),ve.title=ae.text||"",de.appendChild(ve);let fe=document.createElement("span");fe.className="admin-live-feed-identity",window.AdminIdentity&&fe.appendChild(AdminIdentity.render({nickname:ae.nickname||"",fp:"",onNicknameClick:function(Y){!Y||!P||(P.value=Y,P.dispatchEvent(new Event("input",{bubbles:!0})),P.focus())}})),de.appendChild(fe);let q=document.createElement("span");if(q.className="admin-live-feed-actions is-hover-reveal",ae.message_id){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip admin-live-feed-action",Y.textContent=ServerI18n.t("lfRecallBtn"),Y.title=ServerI18n.t("lfRecallTitle"),Y.addEventListener("click",Q=>{Q.stopPropagation(),d(ee)}),q.appendChild(Y)}let V=document.createElement("button");if(V.type="button",V.className="admin-ui-chip is-danger admin-live-feed-action",V.textContent=ServerI18n.t("blockKeywordBtn"),V.title=ServerI18n.t("blockKeywordTitle"),V.addEventListener("click",Y=>{Y.stopPropagation(),n("keyword",ae.text,ee.id)}),q.appendChild(V),ae.fingerprint){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip is-warn admin-live-feed-action",Y.textContent=ServerI18n.t("blockFpBtn"),Y.title=ServerI18n.t("blockFpTitle").replace("{fp}",ae.fingerprint),Y.addEventListener("click",Q=>{Q.stopPropagation(),n("fingerprint",ae.fingerprint,ee.id)}),q.appendChild(Y)}return de.appendChild(q),de.classList.add("is-clickable"),de.addEventListener("click",Y=>{Y.target.closest(".admin-live-feed-actions")||t(ee)}),de.addEventListener("keydown",Y=>{Y.key!=="Enter"||Y.target.closest("button")||(Y.preventDefault(),t(ee))}),de}function t(ee){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ee)}async function d(ee){let ae=ee&&ee.data&&ee.data.message_id;if(!ae)return;let de=await window.AdminModeration.recall(ae);if(!de.ok){console.error("[LiveFeed] Recall failed:",de.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ee.recalled=!0;let me=l(ee.id);me&&me.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function n(ee,ae,de){if(!(!ae||!await(ee==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ae))){if(de){let ve=L.find(fe=>fe.id===de);ve&&(ve.muted=!0)}else L.forEach(ve=>{ee==="keyword"&&ve.data.text===ae&&(ve.muted=!0),ee==="fingerprint"&&ve.data.fingerprint===ae&&(ve.muted=!0)});i()}}function l(ee){if(!S||!ee)return null;let ae=S.children;for(let de=0;de<ae.length;de++)if(ae[de].dataset&&ae[de].dataset.id===ee)return ae[de];return null}function o(){let ee=document.activeElement,ae=ee&&ee.closest?ee.closest(".admin-live-feed-row"):null;return ae?ae.dataset.id:null}function e(ee){if(!ee)return;let ae=l(ee);ae&&document.activeElement!==ae&&ae.focus({preventScroll:!0})}function i(){if(!S)return;let ee=o(),ae=document.createDocumentFragment(),de=L.filter(me=>H(me)&&B(me));for(let me=de.length-1;me>=0;me--)ae.appendChild(a(de[me]));if(S.textContent="",ae.childNodes.length===0){let me=C?c("paused"):L.length===0?c("empty"):c("no-result");S.appendChild(me)}else S.appendChild(ae);r(),e(ee)}function v(ee){if(!S||!H(ee)||!B(ee))return null;let ae=S.querySelector("[data-empty-kind='live-feed']");ae&&ae.remove();let de=S.scrollTop<=8,me=a(ee);if(de)S.insertBefore(me,S.firstChild);else{let re=S.scrollHeight;S.insertBefore(me,S.firstChild),S.scrollTop+=S.scrollHeight-re,F+=1}return me}function s(){let ee=L.length-200;if(ee<=0)return;L.splice(0,ee).forEach(de=>{let me=l(de.id);me&&me.remove()})}function r(){E(),_(),p()}function u(ee){let ae={ts:Date.now(),data:ee,id:ee&&ee.message_id?"m"+ee.message_id:"e"+ ++M};if(ee&&ee.status==="blocked"&&(ae.muted=!0),C){U.push(ae),_(),p();return}L.push(ae),v(ae),s(),r()}function p(){let ee=document.querySelector("[data-lf-jump]"),ae=document.querySelector("[data-lf-jump-n]");if(!ee||!ae)return;let de=U.length,me=de>0?de:F;me>0?(ee.hidden=!1,ae.textContent=String(me)):ee.hidden=!0}function A(){C&&D(),F=0,S&&(S.scrollTop=0),p()}function E(){let ee=document.querySelector("[data-lf-state]");ee&&(ee.className=C?"ui-status is-warning":"ui-status is-success",ee.textContent=C?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function _(){let ee=document.getElementById(h)||document,ae=(de,me)=>{let re=ee.querySelector(de);re&&(re.textContent=String(me))};ae("[data-cnt-all]",L.length),ae("[data-cnt-mut]",L.filter(de=>de.muted).length)}function D(){if(C=!C,S&&S.setAttribute("aria-live",C?"off":"polite"),$&&($.textContent=C?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),$.classList.toggle("is-primary",C),$.classList.toggle("is-ghost",!C)),C)_(),p();else{for(let ee of U)L.push(ee);U=[],L.length>200&&L.splice(0,L.length-200),F=0,i()}}function O(){let ee=document.getElementById("settings-grid");if(!ee)return!1;let ae=`
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
              placeholder="${w(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${w(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${w(ServerI18n.t("clearBtn"))}</button>
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
      </div>`;return ee.insertAdjacentHTML("beforeend",ae),!0}let W=!1,I=null,R=0,j=1500,J=!1;async function K(){if(!J){J=!0;try{let ee=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(R),{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json();if(Array.isArray(ae.entries)){for(let de of ae.entries)if(!(!de||!de.data)){if(typeof de.seq=="number"){if(de.seq<=R)continue;R=de.seq}u(de.data)}}typeof ae.next_since=="number"&&ae.next_since>R&&(R=ae.next_since)}catch{}finally{J=!1}}}let G=5e3,te=null,ne=!1;async function z(){if(!(ne||document.hidden)){ne=!0;try{let ee=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json(),de=Array.isArray(ae.pending)?ae.pending.length:0,me=document.getElementById(h);if(!me)return;let re=me.querySelector("[data-cnt-q]");re&&(re.textContent=String(de));let ve=me.querySelector("[data-lf-pending-link]");ve&&ve.classList.toggle("has-pending",de>0)}catch{}finally{ne=!1}}}function X(){W||(W=!0,K(),I=setInterval(K,j),z(),te=setInterval(z,G),window.addEventListener("beforeunload",()=>{te&&(clearInterval(te),te=null),I&&(clearInterval(I),I=null)}))}function Z(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(h)&&O()&&(se(),i())}function se(){S=document.getElementById("liveFeedList"),$=document.getElementById("liveFeedPauseBtn"),P=document.getElementById("liveFeedSearch");let ee=document.getElementById("liveFeedClearBtn"),ae=document.querySelectorAll(".admin-live-feed-tab");$&&$.addEventListener("click",D),ee&&ee.addEventListener("click",()=>{L=[],U=[],F=0,i()});let de=document.querySelector("[data-lf-jump-btn]");if(de&&de.addEventListener("click",A),S&&S.addEventListener("scroll",()=>{S.scrollTop<=8&&F>0&&(F=0,p())},{passive:!0}),ae.forEach(me=>{me.addEventListener("click",()=>{ae.forEach(re=>re.classList.remove("is-active")),me.classList.add("is-active"),m=me.dataset.tab||"all",i()})}),P){let me=null;P.addEventListener("input",()=>{clearTimeout(me),me=setTimeout(()=>{T=P.value.trim(),i()},200)})}X()}function ie(ee){if(!("ontouchstart"in window))return;let ae=0,de=0,me=0,re=null,ve=null,fe=!1;function q(V){if(V.querySelector(".admin-live-feed-row__swipe-actions"))return;let Y=V.dataset.id,Q=L.find(pe=>pe.id===Y),oe=!!(Q&&Q.data&&Q.data.message_id),ce=document.createElement("div");ce.className="admin-live-feed-row__swipe-actions",ce.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${oe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,ce.addEventListener("click",function(pe){let we=pe.target.closest("[data-swipe-act]");if(!we||we.disabled)return;let ge=V.dataset.id,he=L.find(Te=>Te.id===ge);if(!he||!he.data)return;let Se=we.dataset.swipeAct;Se==="ban"?he.data.fingerprint&&n("fingerprint",he.data.fingerprint,ge):Se==="recall"&&d(he),V.classList.remove("is-swiped")}),V.appendChild(ce)}ee.addEventListener("touchstart",function(V){let Y=V.target.closest(".admin-live-feed-row");Y&&(V.target.closest(".admin-live-feed-row__swipe-actions")||(re=Y,fe=!1,ae=V.touches[0].clientX,de=V.touches[0].clientY,me=0))},{passive:!0}),ee.addEventListener("touchmove",function(V){if(!re||fe)return;let Y=V.touches[0],Q=Y.clientX-ae,oe=Y.clientY-de;if(Math.abs(oe)>Math.abs(Q)&&Math.abs(oe)>12){fe=!0;return}if(me=Q,Q<-10){q(re),ve=re,re.classList.add("is-swiping");let ce=Math.max(-180,Q);re.style.transform=`translateX(${ce}px)`}else Q>10&&re.classList.contains("is-swiped")&&(re.style.transform="")},{passive:!0}),ee.addEventListener("touchend",function(){re&&(re.classList.remove("is-swiping"),re.style.transform="",me<=-60?re.classList.add("is-swiped"):re.classList.remove("is-swiped"),re=null,ve=null,me=0)},{passive:!0})}function le(){return S?Array.from(S.querySelectorAll(".admin-live-feed-row")):[]}function ue(){let ee=le(),ae=document.activeElement;for(let de of ee)if(de===ae||de.contains(ae))return de;return null}function ke(ee){let ae=le();if(!ae.length)return!1;let de=ue(),me=de?ae.indexOf(de)+ee:ee>0?0:ae.length-1;return me=Math.max(0,Math.min(ae.length-1,me)),ae[me].focus(),ae[me].scrollIntoView({block:"nearest"}),!0}function Ie(ee){let ae=ue();if(!ae)return!1;let de=L.find(re=>re.id===ae.dataset.id);if(!de)return!1;let me=ee==="keyword"?de.data.text:de.data.fingerprint;return me?(n(ee,me,de.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return L.slice()},isVisible:function(){return!!(S&&S.offsetParent!==null)},isPaused:function(){return C},moveFocus:ke,blockFocused:Ie,togglePause:function(){D()}},document.addEventListener("admin-panel-rendered",Z),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z()})()});var bt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function h(i,v=!1){var s=y();return s[i]!==void 0?s[i]:v}function L(i){var v=y();v[i.id]=i.open,k(v)}let U=!1;new MutationObserver(()=>{let i=document.getElementById("settings-grid");if(i&&!(document.getElementById("sec-plugins")||U)){U=!0;try{T(i)}finally{U=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function T(i){let v=`
        <div id="sec-plugins" class="hud-page-stack lg:col-span-2" data-tpl="B">
          <div class="admin-ui-page-head">
            <h2 class="admin-ui-page-title">${ServerI18n.t("pluginsTitle")}</h2>
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
      `;i.insertAdjacentHTML("beforeend",v);let s=document.querySelector("[data-console-filters]");s&&s.addEventListener("click",r=>{let u=r.target.closest("[data-console-filter]");u&&(s.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===u)),F=u.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",e),B(),H()}let m=0,M=0,F="all",S=[],$=80;function P(i){let v=(i||"INFO").toUpperCase();return v==="ERROR"?"is-error":v==="WARN"?"is-warn":v==="DEBUG"?"is-debug":"is-info"}function w(i){let v=new Date(i*1e3),s=r=>String(r).padStart(2,"0");return`${s(v.getHours())}:${s(v.getMinutes())}:${s(v.getSeconds())}`}function b(){let i=document.getElementById("pluginsConsoleBody");if(!i)return;let v=F==="all"?S:S.filter(s=>(s.level||"INFO").toUpperCase()===F);if(v.length===0){let s=F==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${F} lines yet \xB7 waiting\u2026`;i.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${s}</span>
          </div>`;return}i.innerHTML=v.map(s=>{let r=w(s.ts),u=(s.msg||"").replace(/[<>&"]/g,E=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[E]),p=(s.plugin||"\u2014").replace(/[<>&"]/g,E=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[E]),A=(s.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${r}</span>
          <span class="lv ${P(s.level)}">${A}</span>
          <span class="plg">${p}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function x(){try{let i=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!i.ok)return;let v=await i.json();if(!Array.isArray(v.events)||v.events.length===0)return;for(S.unshift(...v.events);S.length>$;)S.pop();m=v.latest_seq||m,b()}catch{}}function H(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:x}))}async function B(){let i=document.getElementById("pluginsList");if(i)try{let v=await csrfFetch("/admin/plugins/list");if(!v.ok)throw new Error(`HTTP ${v.status}`);let r=(await v.json()).plugins||[];if(r.length===0){i.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",N([]);return}i.innerHTML=r.map(f).join(""),l(i),N(r)}catch(v){console.error("Failed to load plugins:",v),i.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function N(i){let v=i.length,s=i.filter(E=>E.enabled).length,r=v-s,u=i.map(E=>E.priority).filter(E=>typeof E=="number"),p=u.length?Math.round(u.reduce((E,_)=>E+_,0)/u.length):null,A=(E,_)=>{document.querySelectorAll(`[data-plugins-stat="${E}"]`).forEach(D=>{D.textContent=_})};A("loaded",v),A("running",s),A("paused",r),A("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(E=>{E.textContent=v})}function f(i){let{name:v,version:s,description:r,priority:u,enabled:p,is_user:A,file:E}=i,_=`plugin-toggle-${v}`,D=t(u),O=n(u),W=a(i),I=A&&E?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(E)}"
            data-plugin-name="${g(v)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(v)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(v)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(v)}</div>
            ${r?`<div class="desc">${g(r)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${s?"v"+g(s):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${D}">${u??"\u2014"}${O?" \xB7 "+O:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${d(W)}">${W}</span>
          <div class="admin-plugins-toggle-cell">
            ${I}
            <label class="admin-plugins-switch" for="${_}">
              <input type="checkbox" id="${_}" role="switch"
                aria-checked="${!!p}" aria-label="Toggle plugin ${g(v)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(v)}"
                ${p?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(i,v){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:i}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:v}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let r=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:v})}),u=await r.json().catch(()=>({}));if(!r.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:r.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:i}),!0),await B()}catch(r){showToast(ServerI18n.t("pluginsToastNetError",{msg:r.message||""}),!1)}}function a(i){let v=i.file||i.path||i.source||"";if(typeof v=="string"){if(v.endsWith(".py"))return"PY";if(v.endsWith(".js"))return"JS"}return(i.language||"PY").toUpperCase()}function t(i){return i==null?"is-muted":i<=10?"is-danger":i<=50?"is-warn":"is-cyan"}function d(i){return i==="JS"?"is-cyan":i==="PY"?"is-warn":"is-muted"}function n(i){return i==null?"":i<=10?"CRITICAL":i<=50?"HIGH":"NORMAL"}function l(i){i.querySelectorAll(".plugin-toggle").forEach(v=>{v.addEventListener("change",async function(){let s=this.dataset.pluginName,r=this.checked;await o(s,r,this)})}),i.querySelectorAll(".plugin-uninstall").forEach(v=>{v.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function o(i,v,s){let r=v?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||`HTTP ${u.status}`)}showToast(v?ServerI18n.t("pluginEnabled").replace("{name}",i):ServerI18n.t("pluginDisabled").replace("{name}",i),!0)}catch(u){console.error(`Failed to ${v?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),s&&(s.checked=!v)}}async function e(){let i=document.getElementById("pluginsReloadBtn");i&&(i.disabled=!0);try{let v=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!v.ok){let s=await v.json().catch(()=>({}));throw new Error(s.error||`HTTP ${v.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await B()}catch(v){console.error("Failed to reload plugins:",v),showToast(v.message||ServerI18n.t("reloadFailed"),!1)}finally{i&&(i.disabled=!1)}}})})()});var wt=ye(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},k={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,h=null;function L(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===g)&&a()}),g)}function U(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((n,l)=>{let o=l+1,e=o<t,v=e?"is-done":o===t?"is-active":"";return(l>0?`<span class="admin-pu-step-line ${e?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${v}">
          <span class="circle">${e?"\u2713":o}</span>
          <span class="label">${n}</span>
        </div>`}).join("")}function C(t,d){h.step=t;let n=g.querySelector("[data-pu-steps]");n&&(n.innerHTML=U(t));let l=g.querySelector("[data-pu-body]");l&&(l.innerHTML=d)}function T(t){let d=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),n=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${n}</div>
          <div class="admin-pu-dropzone-msg">${y(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let t=g.querySelector("[data-pu-dropzone]"),d=g.querySelector("[data-pu-file]"),n=g.querySelector("[data-pu-browse]");n&&n.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&M(d.files[0])}),t&&(t.addEventListener("click",()=>d&&d.click()),t.addEventListener("dragover",l=>{l.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",l=>{l.preventDefault(),t.classList.remove("is-over");let o=l.dataTransfer&&l.dataTransfer.files;if(!(!o||o.length===0)){if(o.length>1){C(1,T("error-multi")),m();return}M(o[0])}}))}function M(t){if(!t.name.match(/\.py$/i)){C(1,T("error-type")),m();return}if(t.size>256*1024){C(1,T("error-size")),m();return}h.file=t,C(2,F(t.name)),S(t)}function F(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(t)}</div>
      </div>`}async function S(t){try{let d=new FormData;d.append("file",t);let n=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),l=await n.json().catch(()=>({}));if(!n.ok&&!l.validation){window.showToast?.(l.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:n.status}),!1),C(1,T()),m();return}h.manifest=l.manifest||{},h.validation=l.validation||{},h.filename=l.filename||t.name,$(h)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),C(1,T()),m()}}function $(t){let d=t.manifest||{},n=t.validation||{},l="";if(!n.syntax_ok)l=P(n.syntax_err,t);else if(Object.keys(d).length===0)l=w(t);else{let o=(n.deps||[]).some(e=>e.status==="missing");l=H(d,n,t,o)}C(2,`<div class="admin-pu-step2">${l}</div>`),B()}function P(t,d){let n=t&&t.line?t.line:"?",l=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${n}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${d.filename}
${l}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function w(t){return`
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
      </footer>`}function b(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function x(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=b(t),n=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${t} \xB7 ${n}</span>`}function H(t,d,n,l){let o=t.name||n.filename.replace(/\.(py|js)$/i,""),e=t.version?`v${y(t.version)}`:"\u2014",i=t.author?`@${y(t.author.replace(/^@/,""))}`:"\u2014",v=t.description||ServerI18n.t("pluginsUploadNoDescription"),s="PY",r="is-warn",u=Array.isArray(t.permissions)?t.permissions:[],p=Object.keys(k).map(O=>{let W=u.includes(O);return`
        <div class="admin-pu-perm-row ${W?"is-req":"is-not"}">
          <span class="dot">${W?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(O)}</span>
          <span class="label">${y(ServerI18n.t(k[O]))}</span>
        </div>`}).join(""),A=d.deps||[],E=A.map(O=>{let W=O.status==="ok"?"is-ok":O.status==="warn"?"is-warn":"is-err",I=O.status==="ok"?"\u2713":O.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${W}">
          <span class="dot">${I}</span>
          <span class="name">${y(O.name)}</span>
          <span class="note">${y(O.note||"")}</span>
        </div>`}).join(""),_=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(o)}</span>`})}
      </div>`:"",D=A.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${E}</div>
      </section>`;return`
      ${_}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(o)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
          <span class="author">${i}</span>
          <span class="admin-ui-pill admin-pu-pill ${r}" style="margin-left:auto">${s}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(v)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${x(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${p}</div>
        </section>
        ${D}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${l?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${l?"disabled":""} data-pu-confirm>${l?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function B(){let t=g.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{h.file=null,h.manifest=null,h.validation=null,C(1,T()),m()});let d=g.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>N());let n=g.querySelector("[data-pu-no-manifest-ack]");n&&d&&n.addEventListener("change",()=>{d.disabled=!n.checked})}function N(){let t=h.manifest||{},d=t.name||(h.filename||"").replace(/\.(py|js)$/i,""),n=t.version?`v${y(t.version)}`:"\u2014",l=Array.isArray(t.permissions)?t.permissions:[],o=l.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:l.map(v=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(v)}</span></div>`).join("");C(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${o}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${y(h.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:t.priority!=null?t.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let e=g.querySelector("[data-pu-install]");e&&e.addEventListener("click",f);let i=g.querySelector("[data-pu-back]");i&&i.addEventListener("click",()=>$(h))}async function f(){C(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",h.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),n=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(n.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),$(h);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:n.name||h.filename}),!0),a();let l=document.getElementById("pluginsReloadBtn");l&&l.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),$(h)}}function c(){L(),h={step:1,file:null,manifest:null,validation:null,filename:null},C(1,T()),m(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function a(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),h=null)}window.AdminPluginUpload={open:c,close:a},document.addEventListener("click",t=>{t.target.closest("#pluginsUploadBtn")&&(t.preventDefault(),c())})})()});var St=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-webhooks",g=12e3,h=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function L(o,e){return o?o.length>e?o.slice(0,e)+"\u2026":o:""}function U(o){if(!o)return"\u2014";try{let e=new Date(o),i=Math.max(0,(Date.now()-e.getTime())/1e3);return i<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(i)}):i<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(i/60)}):i<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(i/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(i/86400)})}catch{return"\u2014"}}function C(o){if(!o)return"\u2014";try{return new URL(o).hostname}catch{return L(o,30)}}function T(o){return o==="active"?"is-success":o==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:h,eventCatalogLoaded:!1};function M(){let o=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!o||document.getElementById(k)||(o.insertAdjacentHTML("beforeend",`
      <div id="${k}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">Webhooks</h2>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("webhooksPageNote")}
          </p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 X1\uFF1A\u64F4\u5145\u9801\u7684\u4E3B\u8981\u52D5\u4F5C\u662F\u300C\u65B0\u589E Webhook\u300D\uFF0C\u5728\u9801\u9996\u53F3\u5074\u3002
               \u9801\u9996\u88AB\u4F75\u9032 topbar \u6642 shell \u7684 [data-route-action] \u63D2\u69FD\u6703\u63A5\u4F4F\u5B83\uFF0C
               \u800C\u4E14\u53EA\u6709\u300C\u7576\u4E0B\u53EF\u898B\u7684\u90A3\u500B\u5206\u9801\u7684\u9801\u9996\u300D\u6703\u88AB\u642C\u2014\u2014\u6240\u4EE5\u5207\u5230\u63D2\u4EF6\u5206\u9801
               \u9019\u9846\u9215\u5C31\u4E0D\u6703\u8DDF\u8457\u51FA\u73FE\u3002 -->
          <div class="admin-ui-page-actions">
            <button type="button" class="admin-ui-action is-primary" data-wh-action="show-add">
              ${ServerI18n.t("webhooksAddEndpointBtn")}
            </button>
          </div>
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
    `),F())}function F(){let o=document.getElementById(k);if(!o)return;let e=document.getElementById("wh-register-form");e&&e.addEventListener("submit",async i=>{i.preventDefault();let v=document.getElementById("wh-url").value.trim();if(!v)return;let s=Array.from(e.querySelectorAll('input[name="wh-event"]:checked')).map(A=>A.value);if(s.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let r=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),p={url:v,events:s,format:r};u&&(p.secret=u);try{let A=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),E=await A.json();A.ok&&E.hook_id?(showToast(ServerI18n.t("webhookRegistered")),e.reset(),x(),e.hidden=!0,await S()):showToast(E.error||ServerI18n.t("registrationFailed"),!1)}catch(A){console.error("Webhook register error:",A),showToast(ServerI18n.t("registrationFailed"),!1)}}),o.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(i=>i.addEventListener("click",()=>{e&&(e.hidden=!1)})),o.addEventListener("click",i=>{if(i.target.closest("[data-wh-action='show-add']")){e&&(e.hidden=!1);return}if(i.target.closest("[data-wh-action='hide-add']")){e&&(e.hidden=!0);return}let r=i.target.closest("[data-wh-log-filter]");if(r){m.deliveryFilter=r.dataset.whLogFilter,o.querySelectorAll("[data-wh-log-filter]").forEach(W=>{W.classList.toggle("is-active",W.dataset.whLogFilter===m.deliveryFilter)}),c();return}let u=i.target.closest("[data-wh-action='test']");if(u){i.stopPropagation(),d(u.dataset.whHookId);return}let p=i.target.closest("[data-wh-action='settings']");if(p){i.stopPropagation(),a(p.dataset.whHookId);return}if(i.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,t(),N();return}let E=i.target.closest("[data-wh-action='detail-ping']");if(E){d(E.dataset.whHookId);return}let _=i.target.closest("[data-wh-action='detail-toggle']");if(_){n(_.dataset.whHookId,_.dataset.whNextEnabled==="1");return}let D=i.target.closest("[data-wh-action='detail-delete']");if(D){l(D.dataset.whHookId);return}let O=i.target.closest("[data-wh-hook-row]");if(O&&!i.target.closest("button")){a(O.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:S}))}async function S(){await w(),await Promise.all([$(),P()]),H(),N(),c(),t()}async function $(){try{let e=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(e.webhooks)?e.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let o=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!o.ok)return;let e=await o.json();m.deliveries=Array.isArray(e.deliveries)?e.deliveries:[],m.stats=e.stats||null}catch{}}async function w(){if(!m.eventCatalogLoaded)try{let o=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(o.ok){let e=await o.json(),i=Array.isArray(e.events)?e.events:[];i.length&&(m.eventCatalog=i)}}catch{}finally{m.eventCatalogLoaded=!0,x()}}function b(o){let e=o&&o.slug?String(o.slug):"";if(o&&o.labelKey){let u=ServerI18n.t(o.labelKey);return{slug:e,label:u?u+" \xB7 "+e:e,title:u}}let i=o&&o.zh?String(o.zh):"",v=o&&o.en?String(o.en):"",s=window.ServerI18n&&ServerI18n.currentLang||"zh",r=(o&&o[s]?String(o[s]):"")||v||i;return{slug:e,label:r?r+" \xB7 "+e:e,title:i&&v?i+" \xB7 "+v:i||v}}function x(){let o=document.querySelector("[data-wh-register-events]");o&&(o.innerHTML=m.eventCatalog.map(function(e){let i=b(e);if(!i.slug)return"";let v=i.slug==="on_danmu"?" checked":"";return'<label title="'+y(i.title)+'"><input type="checkbox" name="wh-event" value="'+y(i.slug)+'"'+v+" /> "+y(i.label)+"</label>"}).join(""))}function H(){let o=document.querySelector("[data-wh-stats]");if(!o)return;let e=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};o.innerHTML=`
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${e.endpoints_enabled} / ${e.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${e.deliveries_24h.toLocaleString?e.deliveries_24h.toLocaleString():e.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${e.failed_pending_retry>0?"var(--hud-amber)":"var(--color-text-secondary)"}">${e.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel",{n:B()})}</div>
        <div class="v" style="color:${e.dropped_24h>0?"var(--hud-crimson)":"var(--color-text-secondary)"}">${e.dropped_24h}</div>
      </div>`}function B(){return m.hooks.length&&m.hooks[0].retry_count||3}function N(){let o=document.getElementById("wh-list"),e=document.querySelector("[data-wh-count]");if(o){if(e&&(e.textContent=String(m.hooks.length)),m.hooks.length===0){o.innerHTML="";let i=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let v=document.getElementById("wh-register-form");v&&(v.hidden=!1),document.getElementById("wh-url")?.focus()}});i.dataset.emptyKind="webhooks",o.appendChild(i);return}o.innerHTML=m.hooks.map(f).join("")}}function f(o){let e=y(o.id||""),i=Number(o.success_count)||0,v=Number(o.fail_count)||0,s=i+v,r=s>0?Math.round(i/s*1e3)/10:100,u=o.enabled!==!1,p=Number(o.last_status)||null,A=u?p&&p>=400||o.last_error?"degraded":"active":"paused",E=A==="active"?"var(--hud-lime)":A==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",_=A==="active"?"ACTIVE":A==="degraded"?"DEGRADED":"PAUSED",D=m.selectedHookId===o.id?" is-selected":"",O=T(A),W=(o.events||[]).map(function(R){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(R)+"</span>"}).join(""),I=o.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(L(o.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${D}" data-wh-hook-row data-wh-hook-id="${e}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${E};box-shadow:${u?"0 0 6px "+E:"none"}"></span>
          <span class="name">${y(C(o.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${O}">${_}</span>
          <span class="last">last \xB7 ${y(U(o.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(o.url)}</div>
        <div class="admin-wh-card-events">${W}</div>
        ${I}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${r}%;background:${E}"></div></div>
            <span class="pct" style="color:${E}">${r}%</span>
          </div>
          <span class="counter ok">\u2713 ${i.toLocaleString()}</span>
          <span class="counter ${v>0?"fail":"fail-zero"}">\u2717 ${v}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let o=document.getElementById("wh-log-list");if(!o)return;let e=m.deliveries.filter(function(i){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!i.ok:m.deliveryFilter==="2xx"?i.code&&i.code>=200&&i.code<300:m.deliveryFilter==="5xx"?i.code&&i.code>=500:!0});if(e.length===0){o.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}o.innerHTML=e.map(function(i){let v=i.ts?new Date(i.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",s=i.code?String(i.code):"\u2014",r=i.ok?"var(--hud-lime)":"var(--hud-crimson)",u=i.duration_ms?i.duration_ms>=1e3?(i.duration_ms/1e3).toFixed(1)+"s":i.duration_ms+"ms":"\u2014",p=i.ok?"var(--color-text-strong)":"var(--hud-amber)",A=y(C(i.hook_url||"")),E=(i.retries||0)===0?"\u2014":"\xD7"+i.retries,_=(i.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${i.dropped?" is-dropped":""}">
          <span class="time">${y(v)}</span>
          <span class="code" style="color:${r};border-color:${r}55;background:${r}15;">${s}</span>
          <span class="dur" style="color:${p}">${y(u)}</span>
          <span class="ep">${A}</span>
          <span class="evt">${y(i.event||"")}</span>
          <span class="retry" style="color:${_}">${E}</span>
        </div>`}).join("")}function a(o){m.selectedHookId=o,N(),t()}function t(){let o=document.querySelector("[data-wh-detail]");if(!o)return;let e=m.hooks.find(function(A){return A.id===m.selectedHookId});if(!e){o.hidden=!0,o.innerHTML="";return}o.hidden=!1;let i=e.enabled!==!1,v=Number(e.last_status)||null,s=i?v&&v>=400||e.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",r=new Set(e.events||[]),u=m.eventCatalog.map(function(A){let E=b(A),_=r.has(E.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(_?"is-active is-on":"")+'" title="'+y(E.title)+'"><span aria-hidden="true">'+(_?"\u2713":"\u25CB")+"</span><span>"+y(E.label)+"</span></label>"}).join(""),p={event:e.events&&e.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:e.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};o.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+s+";box-shadow:0 0 6px "+s+'"></span><span class="name">'+y(C(e.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(e.retry_count!=null?e.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(e.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(e.id)+'" data-wh-next-enabled="'+(i?"0":"1")+'">'+(i?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(o){if(o)try{let e=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),i=await e.json();e.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(i.error||ServerI18n.t("testFailed"),!1),setTimeout(S,1500)}catch(e){console.error("Webhook test error:",e),showToast(ServerI18n.t("testFailed"),!1)}}async function n(o,e){if(o)try{let i=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o,enabled:e})}),v=await i.json();if(!i.ok){showToast(v.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let s=m.hooks.find(function(r){return r.id===o});s&&(s.enabled=v.enabled),showToast(v.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),N(),t()}catch(i){console.error("Webhook toggle error:",i),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function l(o){if(!(!o||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let i=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:o})}),v=await i.json();i.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===o&&(m.selectedHookId=null),S()):showToast(v.error||ServerI18n.t("deleteFailed"),!1)}catch(i){console.error("Webhook delete error:",i),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var kt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-sounds",g=null,h=[],L=[];async function U(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let a=await c.json();h=a.sounds||[],L=a.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",h.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),h=[],L=[]}}async function C(){return U()}async function T(c,a){let t=new FormData;t.append("file",c),t.append("name",a);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),n=await d.json();if(!d.ok)throw new Error(n.error||"Upload failed");return n}async function m(c){let a=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await a.json();if(!a.ok)throw new Error(t.error||"Delete failed");return t}async function M(c){let a=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),t=await a.json();if(!a.ok)throw new Error(t.error||"Failed to add rule");return t}async function F(c){let a=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),t=await a.json();if(!a.ok)throw new Error(t.error||"Failed to delete rule");return t}function S(){let c=document.getElementById("soundsList");if(c){if(h.length===0){c.innerHTML="";var a=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});a.dataset.emptyKind="sounds",a.style.gridColumn="1 / -1",c.appendChild(a);return}c.innerHTML=h.map(function(d){var n=y(d.name),l=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(d.name)+'"><div class="name" title="'+n+'">'+n+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(d.name)+'" min="0" max="100" step="1" value="'+l+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(d.name)+'" style="min-width:32px;text-align:right">'+l+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(d.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var n=d.dataset.name,l=h.find(function(o){return o.name===n});l&&(g&&(g.pause(),g=null),g=new Audio(l.url),g.volume=.5,g.play().catch(function(o){console.warn("Audio preview failed:",o)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var n=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",n),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(n),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",n),!0),await U(),S(),P()}catch(o){window.showToast(o.message,!1)}})});var t={};c.querySelectorAll(".sound-volume-slider").forEach(function(d){var n=d.dataset.name,l=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(n)+'"]');d.addEventListener("input",function(){l&&(l.textContent=d.value+"%"),clearTimeout(t[n]),t[n]=setTimeout(function(){$(n,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(t[n]),$(n,Number(d.value)/100)})})}}async function $(c,a){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:a})}),d=await t.json();if(!t.ok){window.showToast(d.error||"Volume update failed",!1);return}var n=h.find(function(l){return l.name===c});n&&(n.volume=a),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(a*100)}),!0)}catch(l){console.warn("[admin-sounds] volume save failed:",l),window.showToast("Network error",!1)}}function P(){let c=document.getElementById("ruleSoundName");if(!c)return;let a=c.value;if(c.innerHTML="",h.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,c.appendChild(t);return}h.forEach(t=>{let d=document.createElement("option");d.value=t.name,d.textContent=t.name,c.appendChild(d)}),a&&[...c.options].some(t=>t.value===a)&&(c.value=a)}function w(){let c=document.getElementById("rulesList");if(c){if(L.length===0){c.innerHTML="";var a=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});a.dataset.emptyKind="sound-rules",c.appendChild(a);return}c.innerHTML=L.map(function(t){var d=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),n=Math.round((t.volume!=null?t.volume:1)*100),l=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",n).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(d)+'</div><div class="admin-sounds-rule-detail">'+y(l)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await F(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await C(),w()}catch(d){window.showToast(d.message,!1)}})})}}function b(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let a=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),d=a.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let n=t.value.trim();if(!n){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await T(d,n),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",n),!0),a.value="",t.value="",await U(),S(),P()}catch(l){window.showToast(l.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function x(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let a=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,n=document.getElementById("ruleVolume"),l=document.getElementById("ruleCooldown");if(a!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let o=parseInt(n.value,10)/100,e=parseInt(l.value,10)||0,i={trigger_type:a,trigger_value:a==="all"?"":t,sound_name:d,volume:Math.max(0,Math.min(1,o)),cooldown:Math.max(0,e)};c.disabled=!0;try{await M(i),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await C(),w()}catch(v){window.showToast(v.message,!1)}finally{c.disabled=!1}})}function H(){let c=document.getElementById("ruleTriggerType"),a=document.getElementById("ruleTriggerValue");if(!c||!a)return;function t(){c.value==="all"?(a.disabled=!0,a.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),a.value=""):c.value==="keyword"?(a.disabled=!1,a.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(a.disabled=!1,a.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",t),t()}function B(){let c=document.getElementById("ruleVolume"),a=document.getElementById("ruleVolumeLabel");!c||!a||c.addEventListener("input",()=>{a.textContent=c.value+"%"})}function N(){return`
      <div id="${k}" class="admin-sounds-page hud-page-stack lg:col-span-2" data-tpl="B">
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
    `}async function f(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",N()),window.AdminSkeletons){let a=document.getElementById("soundsList");a&&(a.innerHTML="",a.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([U(),C()]),S(),P(),w(),b(),x(),H(),B()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(k)&&!c&&(c=!0,f().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&(c=!0,f().finally(()=>{c=!1}))})})()});var It=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",h="sec-emojis",L=[];function U(){return`
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
    `}function C(B){let N=":"+B.name+":",f=Number(B.used)||0,c=f>0?ServerI18n.t("emojisUsedCount",{n:f}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(B.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(B.url)+'" alt="'+M(N)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(N)+'</div><div class="admin-em-v4__tile-meta">'+y(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(N)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(B.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function T(B){let N=document.querySelector("[data-em-quota-label]"),f=document.querySelector("[data-em-quota-fill]");if(!N||!f)return;let c=B.length,a=100;N.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:a}),f.style.width=Math.min(100,c/a*100)+"%"}function m(B){let N=document.querySelector("[data-em-preview-body]");if(!N)return;if(!B||B.length===0){N.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=B.slice(0,3).map(a=>`<span class="admin-em-v4__preview-pair"><code>:${y(a.name)}:</code> \u2192 <img src="${M(a.url)}" alt=":${M(a.name)}:" /></span>`);N.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function M(B){return y(B)}function F(B){var N=document.getElementById("emojiGrid"),f=document.getElementById("emojiCount");N&&(!B||B.length===0?(window.AdminEmpty?(N.innerHTML="",N.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):N.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",f&&(f.textContent="0")):(N.innerHTML=B.map(C).join(""),f&&(f.textContent=String(B.length))),T(L),m(L))}function S(){var B=document.getElementById("emojiGrid");if(B)if(window.AdminSkeletons){B.innerHTML="";for(var N=0;N<8;N++){var f=document.createElement("div");f.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var a=document.createElement("div");a.className="admin-skel",a.style.width="100%",a.style.height="100%",c.appendChild(a),f.appendChild(c);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",f.appendChild(t),B.appendChild(f)}}else B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function $(){try{var B=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var N=await B.json();L=N.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",L.length||""),P()}catch(c){console.error("[admin-emojis] fetch failed:",c);var f=document.getElementById("emojiGrid");f&&(f.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var B=document.getElementById("emojiSearchInput"),N=(B&&B.value||"").trim().toLowerCase(),f=N?L.filter(function(c){return(c.name||"").toLowerCase().includes(N)}):L;F(f)}async function w(){var B=document.getElementById("emojiNameInput"),N=document.getElementById("emojiFileInput"),f=document.getElementById("emojiUploadBtn");if(!(!B||!N||!f)){var c=B.value.trim(),a=N.files&&N.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),B.focus();return}if(!k.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),B.focus();return}if(!a){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=a.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}f.disabled=!0,f.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",c),d.append("emojifile",a);var n=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),l=await n.json();n.ok?(showToast(l.message||ServerI18n.t("emojiUploadFallback")),B.value="",N.value="",await $()):showToast(l.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-emojis] upload error:",o),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{f.disabled=!1,f.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",B),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var f=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),c=await f.json();f.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await $()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(a){console.error("[admin-emojis] delete error:",a),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function x(B){try{await navigator.clipboard.writeText(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}catch{var N=document.createElement("textarea");N.value=B,N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}}function H(){var B=document.getElementById("settings-grid");if(B){B.insertAdjacentHTML("beforeend",U());var N=document.getElementById("emojiUploadBtn");N&&N.addEventListener("click",w);var f=document.getElementById("emojiNameInput");f&&f.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),w())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",P);var a=document.getElementById("emojiGrid");a&&a.addEventListener("click",function(n){var l=n.target.closest(".emoji-copy-btn");if(l){x(l.dataset.label);return}var o=n.target.closest(".emoji-delete-btn");o&&b(o.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");t&&d&&(["dragenter","dragover"].forEach(function(n){t.addEventListener(n,function(l){l.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(n){t.addEventListener(n,function(l){l.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(n){var l=n.dataTransfer&&n.dataTransfer.files&&n.dataTransfer.files[0];if(l){var o=new DataTransfer;o.items.add(l),d.files=o.files;var e=document.getElementById("emojiNameInput");if(e&&!e.value){var i=l.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");e.value=i.slice(0,32),e.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),S(),$()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var B=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H()});B.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&H()}})})()});var Tt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,k="sec-stickers",g=["png","gif","webp"],h=".gif,.png,.webp",L="__all__",U=[],C=[],T=L;function m(c){return y(c)}function M(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,a=c?`
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
      <div id="${k}" class="admin-stickers-page hud-page-stack lg:col-span-2" data-tpl="B">
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
            ${c?`<div class="admin-ui-card">${a}</div>`:""}

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
    `}function F(c){return c===L?U.length:U.filter(function(a){return a.pack_id===c}).length}function S(){var c=document.getElementById("stickerPackList");if(c){var a='<button type="button" class="admin-stickers-pack'+(T===L?" is-active":"")+'" data-pack="'+L+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+F(L)+"</span></button>";C.forEach(function(t){var d=t.enabled?"is-success":"is-muted",n="admin-stickers-pack"+(t.id===T?" is-active":""),l=t.id==="default",o=l?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";a+='<div class="'+n+'" data-pack="'+m(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(t.name)+'</span><span class="admin-stickers-pack-count">'+F(t.id)+"</span></button>"+o+"</div>"}),c.innerHTML=a}}function $(c){var a=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(a)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(a)+'">'+y(a)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(a)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var c=document.getElementById("stickerGrid"),a=document.getElementById("stickerCount");if(c){var t=document.getElementById("stickerSearchInput"),d=(t&&t.value||"").trim().toLowerCase(),n=U.filter(function(o){return!(T!==L&&o.pack_id!==T||d&&!(o.name||"").toLowerCase().includes(d))});if(n.length===0){c.innerHTML="";var l=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});l.dataset.emptyKind="stickers",l.style.gridColumn="1 / -1",c.appendChild(l),a&&(a.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=n.map($).join(""),a&&(a.textContent=ServerI18n.t("stickersItemCount",{n:n.length}))}}async function w(){var c=document.getElementById("stickerGrid");if(c)try{var[a,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!a.ok)throw new Error("HTTP "+a.status);U=(await a.json()).stickers||[],C=t.ok?(await t.json()).packs||[]:[],T!==L&&!C.some(function(d){return d.id===T})&&(T=L),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",C.length?ServerI18n.t("tabCountPacks",{n:C.length}):""),S(),P()}catch(d){console.error("[admin-stickers] fetch failed:",d),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(c,a){if(c==="select"){T=a,S(),P();return}if(c==="rename"){var t=C.find(function(A){return A.id===a}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!d)return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),l=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await w()):window.showToast(l.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var o=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a)+"/toggle",{method:"POST"});o.ok&&await w()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(a),{method:"DELETE"}),i=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),T===a&&(T=L),await w()):window.showToast(i.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var v=C.slice().sort(function(A,E){return(A.order||0)-(E.order||0)}),s=v.findIndex(function(A){return A.id===a});if(s<0)return;var r=c==="up"?s-1:s+1;if(r<0||r>=v.length)return;var u=v[s],p=v[r];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await w()}catch{}}}async function x(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var a=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await a.json();a.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),T=t.pack&&t.pack.id?t.pack.id:T,await w()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var c=document.getElementById("stickerFileInput"),a=document.getElementById("stickerUploadBtn");if(!(!c||!a)){var t=c.files&&c.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=t.name.split(".").pop().toLowerCase();if(g.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}a.disabled=!0;var n=a.textContent;a.textContent=ServerI18n.t("uploadingStatus");try{var l=new FormData;l.append("file",t),T&&T!==L&&l.append("pack_id",T);var o=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:l}),e=await o.json();o.ok?(window.showToast(e.message||ServerI18n.t("stickerUploadFallback")),c.value="",await w()):window.showToast(e.error||ServerI18n.t("uploadFailed"),!1)}catch(i){console.error("[admin-stickers] upload error:",i),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{a.disabled=!1,a.textContent=n}}}async function B(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),d=await t.json();t.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await w()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(n){console.error("[admin-stickers] delete error:",n),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function N(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var a=document.createElement("textarea");a.value=c,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function f(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",M());var a=document.getElementById("stickerUploadBtn");a&&a.addEventListener("click",H);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",x);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",P);var n=document.getElementById("stickerPackList");n&&n.addEventListener("click",function(o){var e=o.target.closest("[data-pack-action]");if(!e){var i=o.target.closest("[data-pack]");i&&b("select",i.dataset.pack);return}var v=e.dataset.packAction,s=e.dataset.packId;v==="select"&&!s&&(s=e.closest("[data-pack]")&&e.closest("[data-pack]").dataset.pack),b(v,s)});var l=document.getElementById("stickerGrid");l&&l.addEventListener("click",function(o){var e=o.target.closest(".sticker-copy-btn");if(e){N(e.dataset.label);return}var i=o.target.closest(".sticker-delete-btn");i&&B(i.dataset.name)}),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(k)&&f()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&f()}})})()});var _t=ye(()=>{(function(){"use strict";let y="sec-extensions-overview",k=window.AdminUtils.escapeHtml,g=15e3,h=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],L={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function U(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${h.map(C).join("")}
        </div>
      </div>`}function C(b){let x=b.status==="ready",H="is-cold",B=x?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,N=x&&b.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${b.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${k(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${k(ServerI18n.t(c.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",f=b.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
          <div class="admin-ui-monolabel">
            Fire token \xB7 ${ServerI18n.t("extSecFireToken")}
            <a href="#/firetoken" class="admin-ext-token-deeplink">${ServerI18n.t("extTokenDeepLink")}</a>
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
          <span class="admin-ext-status-dot ${H}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${b.color}">${b.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${k(b.name)}</div>
            <div class="meta"><span class="ver">${k(b.version)}</span></div>
          </div>
          ${B}
        </div>
        <p class="admin-ext-desc">${k(ServerI18n.t(b.descKey))}</p>
        ${N}
        ${f}
      </article>`}async function T(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;L.fireToken=await b.json(),$()}catch{}}async function m(){try{let b=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!b.ok)return;let x=await b.json();L.sources=Array.isArray(x.sources)?x.sources:[],P()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let x=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);let H=await x.json();L.fireToken={enabled:H.enabled,prefix:H.prefix,has_token:!0,rotated_at:H.rotated_at},L.plainToken=H.token,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),S(H.token)}catch(x){console.warn("[ext] regen failed:",x),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let x=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!x.ok)throw new Error("HTTP "+x.status);L.fireToken=await x.json(),L.plainToken=null,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(x){console.warn("[ext] revoke failed:",x),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(b){if(b)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(b).catch(()=>{});else{let x=document.createElement("textarea");x.value=b,x.style.position="fixed",x.style.opacity="0",document.body.appendChild(x),x.select();try{document.execCommand("copy")}catch{}document.body.removeChild(x)}}function $(){let b=document.querySelector("[data-fire-token-display]"),x=document.querySelector('[data-fire-token-action="copy"]'),H=document.querySelector('[data-fire-token-action="regen"]'),B=document.querySelector('[data-fire-token-action="revoke"]');if(!b)return;let N=L.fireToken;L.plainToken?(b.textContent=L.plainToken,b.classList.add("is-plain")):N&&N.has_token?(b.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:N.prefix||""}),b.classList.remove("is-plain")):(b.textContent=ServerI18n.t("extTokenNotSetHint"),b.classList.remove("is-plain")),x&&(x.disabled=!L.plainToken),H&&(H.textContent=N&&N.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),B&&(B.disabled=!(N&&N.has_token))}function P(){let b=new Set(L.sources.map(x=>x.source));document.querySelectorAll(".admin-ext-card").forEach(x=>{let H=h.find(f=>f.id===x.dataset.ext);if(!H)return;let B=x.querySelector("[data-ext-dot]");if(!B)return;let N=H.sourceMatch&&b.has(H.sourceMatch);B.classList.toggle("is-live",!!N),B.classList.toggle("is-cold",!N)})}function w(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",U());let x=document.getElementById(y);x&&x.addEventListener("click",H=>{let B=H.target.closest("[data-fire-token-action]");if(!B)return;let N=B.dataset.fireTokenAction;N==="regen"?M():N==="revoke"?F():N==="copy"&&L.plainToken&&(S(L.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),T(),L.stopPoll||(L.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&w()})})()});var Et=ye(()=>{(function(){"use strict";let y="sec-firetoken-overview",k=window.AdminUtils.escapeHtml,g=15e3,h={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function L(){return`
      <div id="${y}" class="admin-ft-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("firetokenPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("firetokenPageNote",{link:'<a href="#/integrations">API Tokens</a>'})}</p>
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
    `}async function U(){await Promise.all([C(),T(),m()])}async function C(){try{let f=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!f.ok)return;h.token=await f.json(),w()}catch{}}async function T(){try{let f=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],h.ips=Array.isArray(c.ips)?c.ips:[],x(),H(),b()}catch{}}async function m(){try{let f=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.audit=Array.isArray(c.events)?c.events:[],B()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let a=await c.json();h.token={enabled:a.enabled,prefix:a.prefix,has_token:!0,rotated_at:a.rotated_at,created_at:a.created_at||a.rotated_at},h.plainToken=a.token,w(),S(a.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);h.token=await c.json(),h.plainToken=null,w(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(f){if(f)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(f).catch(()=>{});else{let c=document.createElement("textarea");c.value=f,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function $(f){if(!f)return"\u2014";let c=Date.now()/1e3-f;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function P(f){if(!f)return"\u2014";try{return new Date(f*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function w(){let f=h.token,c=document.querySelector("[data-ft-token-display]"),a=document.querySelector("[data-ft-status]"),t=document.querySelector('[data-ft-action="copy"]'),d=document.querySelector('[data-ft-action="regen"]'),n=document.querySelector('[data-ft-action="revoke"]'),l=document.querySelector('[data-ft-stat="created"]'),o=document.querySelector('[data-ft-stat="rotated"]'),e=document.getElementById("adminFtCurl");if(c&&(h.plainToken?(c.textContent=h.plainToken,c.classList.add("is-plain")):f&&f.has_token?(c.textContent=(f.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),a&&(f&&f.enabled&&f.has_token?(a.textContent=ServerI18n.t("firetokenStatusHealthy"),a.className="admin-ft-status is-good"):f&&f.has_token?(a.textContent=ServerI18n.t("firetokenStatusDisabled"),a.className="admin-ft-status is-warn"):(a.textContent=ServerI18n.t("firetokenStatusUnset"),a.className="admin-ft-status is-muted")),t&&(t.disabled=!h.plainToken),n&&(n.disabled=!(f&&f.has_token)),d&&(d.textContent=f&&f.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),l&&(l.textContent=f?P(f.created_at):"\u2014"),o&&(o.textContent=f?$(f.rotated_at):"\u2014"),e)){let i=h.plainToken?h.plainToken:f&&f.prefix?f.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";e.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${i}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function b(){let f=h.usage24h.map(l=>Number(l)||0),c=f.reduce((l,o)=>l+o,0),a=f.length?Math.max(...f):0,t=document.querySelector('[data-ft-stat="hits"]'),d=document.querySelector('[data-ft-stat="peak"]'),n=document.querySelector("[data-ft-peak-meta]");t&&(t.textContent=c.toLocaleString()),d&&(d.textContent=a.toLocaleString()),n&&(n.textContent=ServerI18n.t("firetokenPeakMeta",{peak:a.toLocaleString()}))}function x(){let f=document.getElementById("adminFtChart24h");if(!f)return;let c=h.usage24h.map(n=>Number(n)||0);if(!c.length){f.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let a=Math.max(...c),t=12e3,d=a>0?Math.min(100,t/Math.max(a,t)*100):100;f.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((n,l)=>{let o=a>0?Math.max(2,n/a*100):2;return`<div class="bar ${a>0&&n===a?"is-peak":""}" style="height:${o}%" title="${l.toString().padStart(2,"0")}:00 \u2014 ${n}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(n=>`<span>${String(n).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function H(){let f=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!f)return;let a=h.ips||[];if(c&&(c.textContent=a.length?`${a.length} IP`:"\u2014"),!a.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let t=a[0]?.ip;f.innerHTML=a.map((d,n)=>{let l=n===0,o=d.source==="web"&&(d.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${l?"is-top":""}">
          <span class="ip">${k(d.ip||"?")}</span>
          ${l?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${o?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${k(d.source||"\u2014")}</span>
          <span class="cnt">${d.count||0} hits</span>
          <span class="when">${$(d.last_seen)}</span>
        </div>`}).join("")}function B(){let f=document.getElementById("adminFtAudit");if(!f)return;let c=h.audit||[];if(!c.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let a={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},t={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};f.innerHTML=c.map(d=>{let n=t[d.kind]||"is-info",l=a[d.kind]||d.kind,o=d.meta||{},e=o.prefix?` \xB7 prefix=${k(o.prefix)}`:o.enabled!=null?` \xB7 enabled=${o.enabled}`:"";return`
        <div class="admin-ft-audit-row ${n}">
          <span class="ts">${P(d.ts)}</span>
          <span class="kind">${k(l)}</span>
          <span class="detail">${e}</span>
        </div>`}).join("")}function N(){let f=document.getElementById("settings-grid");if(!f||document.getElementById(y))return;f.insertAdjacentHTML("beforeend",L());let c=document.getElementById(y);c&&c.addEventListener("click",a=>{let t=a.target.closest("[data-ft-action]");if(!t)return;let d=t.dataset.ftAction;d==="regen"?M():d==="revoke"?F():d==="copy"&&h.plainToken&&(S(h.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),h.stopPoll||(h.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:U}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&N()})})()});var $t=ye(()=>{(function(){"use strict";let y="sec-about-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},g="Danmu Fire",h="https://github.com/guan4tou2/danmu-desktop",L=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],U=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],C="danmu.about.lastUpdateCheck",T={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
                <span class="v" style="grid-column: span 2" data-about-admin-url>${k(location.origin+"/admin/")}</span>
              </div>
            </div>
          </article>

          <article class="admin-about-changelog">
            <div class="admin-about-changelog-head">
              <span class="admin-ui-monolabel">${ServerI18n.t("uiSectionChangelog")}</span>
              <a class="admin-about-changelog-more" href="${h}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${L.slice(0,4).map(B=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${k(B.v)}</span>
                  ${B.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${k(B.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${B.notes.slice(0,3).map(N=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${k(N.t)}">${k(N.t.toUpperCase())}</span>
                      <span class="msg">${k(N.l)}</span>
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
              ${U.slice(0,6).map(B=>`
                <div class="admin-about-oss-row">
                  <span class="n">${k(B.n)}</span>
                  <span class="v">${k(B.v)}</span>
                  <span class="l">${k(B.l)}</span>
                </div>
              `).join("")}
            </div>
          </article>
        </div>
      </div>`}function M(B){if(!B||B<0)return"\u2014";let N=Math.floor(B/86400),f=Math.floor(B%86400/3600),c=Math.floor(B%3600/60);return N>0?`${N}d ${f}h`:f>0?`${f}h ${c}m`:`${c}m`}function F(){let B=document.querySelector("[data-about-tag]"),N=document.querySelector("[data-about-build]"),f=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),a=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if(B&&(B.textContent=`v${T.appVersion}`),N){let n=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";N.textContent=`BUILD \xB7 ${n} \xB7 stable channel`,t&&(t.textContent=n)}if(f){let n=T.serverStartedAt?T.serverTime-T.serverStartedAt:0;f.textContent=M(n)}if(c&&(T.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):T.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:T.latestVersion||""}):c.textContent="\u2014",c.style.color=T.isLatest===!0?"var(--hud-lime)":T.isLatest===!1?"var(--hud-amber)":""),a&&(a.textContent=T.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:S(T.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let n=window.DANMU_CONFIG||{};d.textContent=n.wsPath||"/ws"}}function S(B){let N=Number(B)||0;if(!N)return"\u2014";let f=String(N).length>12?N:N*1e3,c=(Date.now()-f)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function $(B,N){let f=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(n){return parseInt(n,10)||0}),c=f(B),a=f(N),t=Math.max(c.length,a.length);for(let d=0;d<t;d++){let n=c[d]||0,l=a[d]||0;if(n>l)return!0;if(n<l)return!1}return!1}async function P({silent:B}={}){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let N=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!N.ok)throw new Error("HTTP "+N.status);let c=((await N.json()).tag_name||"").replace(/^v/i,"");T.latestVersion=c,T.lastCheckedAt=Date.now(),T.isLatest=!$(c,T.appVersion);try{localStorage.setItem(C,JSON.stringify({ts:T.lastCheckedAt,latest:c,isLatest:T.isLatest}))}catch{}F(),B||window.showToast&&window.showToast(T.isLatest?ServerI18n.t("aboutToastLatest",{v:T.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(N){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:N.message||""}),!1)}}function w(){try{let B=localStorage.getItem(C);if(!B)return;let N=JSON.parse(B);T.latestVersion=N.latest,T.lastCheckedAt=Number(N.ts)||0,T.isLatest=!!N.isLatest}catch{}}async function b(){try{let B=await fetch("/admin/metrics",{credentials:"same-origin"});if(!B.ok)return;let N=await B.json();T.serverStartedAt=Number(N.server_started_at)||0,T.serverTime=Number(N.server_time)||Date.now()/1e3,F()}catch{}}function x(){let B=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",N=T.serverStartedAt?T.serverTime-T.serverStartedAt:0,f=(navigator.userAgent||"").slice(0,200),c=[`${g} v${T.appVersion}`,`Channel: ${B}`,`Uptime: ${M(N)}`,`User-Agent: ${f}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",m()),T.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",w(),F();let N=document.getElementById(y);N&&N.addEventListener("click",function(f){let c=f.target.closest("[data-about-action]");if(!c)return;let a=c.dataset.aboutAction;a==="copy"?x():a==="check-update"?P({silent:!1}):a==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():a==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&H()})})()});var xt=ye(()=>{(function(){"use strict";let y="admin-setup-wizard-root",k="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(i){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[i]})},h=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],L=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function U(e){return e?e.label?e.label:e.labelKey?ServerI18n.t(e.labelKey):e.name||e.id||"\u2014":"\u2014"}function C(e){return e?e.descriptionKey?ServerI18n.t(e.descriptionKey):e.description||"":""}let T={open:!1,step:0,themes:L.slice(),activeTheme:L[0].name,selectedTheme:L[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){T.publicUrl=window.location.origin+"/"}function M(){let e=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";e==="setup"&&!T.open?F():e!=="setup"&&T.open&&S({silent:!0})}function F(){T.open=!0,T.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",$()),c()),t(),b(),P()}function S(e){let i=e&&e.silent;T.open=!1,document.body.dataset.setupWizardOpen="";let v=document.getElementById(y);if(v&&v.remove(),!i&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function $(){return`
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
            ${h.map(function(e,i){return`
                <div class="admin-setup-step" data-step-index="${i}">
                  <span class="bullet">${i+1}</span>
                  <span class="lbl">${g(ServerI18n.t(e.labelKey))}</span>
                </div>
                ${i<h.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function P(){let e=document.getElementById(y);if(!e)return;e.querySelectorAll(".admin-setup-step").forEach(function(A,E){A.classList.toggle("is-done",E<T.step),A.classList.toggle("is-active",E===T.step)}),e.querySelectorAll(".admin-setup-step-sep").forEach(function(A,E){A.classList.toggle("is-done",E<T.step)});let i=e.querySelector("[data-setup-meta]");i&&(i.textContent=ServerI18n.t("setupWizardStepMeta",{current:T.step+1,total:h.length}));let v=e.querySelector('[data-setup-action="prev"]');v&&(v.disabled=T.step===0);let s=e.querySelector('[data-setup-action="next"]');if(s){let A=h[T.step].id;s.textContent=ServerI18n.t("setupWizardNext")}let r=e.querySelector("[data-setup-foot]");r&&(r.hidden=h[T.step].id==="done");let u=e.querySelector("[data-setup-content]");if(!u)return;let p=h[T.step].id;p==="server"?u.innerHTML=w():p==="moderation"?u.innerHTML=x():p==="theme"?u.innerHTML=N():u.innerHTML=f(),a(p)}function w(){let e=T.readiness,i=e?Number(e.overlay_count)||0:null,v=i!==null&&i>0,r=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:T.publicUrl},{ok:v,unknown:i===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:v?ServerI18n.t("setupWizardReadyDisplayOk",{n:i}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(T.activeTheme||T.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:U(T.themes.filter(function(u){return(u.name||u.id)===(T.selectedTheme||T.activeTheme)})[0]||T.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let p=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",A=u.unknown?"?":u.ok?"\u2713":"!",E='<span class="admin-setup-ready-title">'+g(u.title)+'</span><span class="admin-setup-ready-value">'+g(u.value||"")+"</span>",_=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+p+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+A+"</span>"+E+_+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${r}</div>
      </div>`}async function b(){try{let e=await fetch("/overlay_status",{credentials:"same-origin"});if(!e.ok)throw new Error("HTTP "+e.status);let i=await e.json();T.readiness={overlay_count:Number(i.overlay_count)||0,mode:i.mode||""}}catch{T.readiness=null}T.open&&h[T.step].id==="server"&&P()}function x(){let e=T.moderationRules.map(function(i){return`
        <a class="admin-setup-mod-row" href="#/${i.route}" data-setup-goto="#/${i.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${g(ServerI18n.t(i.labelKey))}</span>
            <span class="admin-setup-mod-desc">${g(ServerI18n.t(i.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${g(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${e}</div>
      </div>`}let H=["default","neon","retro","cinema"];function B(){let e={};return(T.themes||[]).forEach(function(i){e[i.name||i.id]=i}),H.map(function(i){let v=L.filter(function(r){return r.name===i})[0],s=e[i];return v?{name:i,label:s&&s.label,labelKey:v.labelKey,descriptionKey:v.descriptionKey,colors:v.colors}:s}).filter(Boolean)}function N(){let e=B();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${e.map(function(i){let v=i.name||i.id||"",s=(T.selectedTheme||T.activeTheme)===v,r=(i.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${s?" is-selected":""}" data-setup-theme="${g(v)}">
                ${s?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${r.map(function(u,p){let A=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(u)};font-size:${10+p*2}px;text-shadow:0 0 6px ${g(u)}66;">${A[p]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(U(i))}</div>
                <div class="admin-setup-theme-sub">${g(C(i))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function f(){let e=(function(){for(let i=0;i<T.themes.length;i+=1){let v=T.themes[i];if((v.name||v.id)===(T.selectedTheme||T.activeTheme))return U(v)}return T.selectedTheme||T.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(T.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(e)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${g(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${g(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function c(){let e=document.getElementById(y);e&&e.addEventListener("click",function(i){if(i.target===e){S();return}let v=i.target.closest("[data-setup-action]");if(v){if(v.dataset.setupAction==="close"){S();return}if(v.dataset.setupAction==="prev"&&T.step>0){T.step-=1,P();return}v.dataset.setupAction==="next"&&n()}})}function a(e){let i=document.getElementById(y);if(i){if(e==="moderation"||e==="done"||e==="server"){if(i.querySelectorAll("[data-setup-goto]").forEach(function(v){v.addEventListener("click",function(){S();let s=v.dataset.setupGoto;s&&(window.location.hash=s)})}),e==="done"){let v=i.querySelector("[data-setup-complete-cta]");v&&v.addEventListener("click",l)}return}if(e==="theme"){i.querySelectorAll("[data-setup-theme]").forEach(function(v){v.addEventListener("click",function(){T.selectedTheme=v.dataset.setupTheme||T.selectedTheme,P()})});return}}}async function t(){try{let e=await fetch("/admin/themes",{credentials:"same-origin"});if(!e.ok)return;let i=await e.json(),v=Array.isArray(i.themes)?i.themes:[];if(!v.length)return;T.themes=v.map(function(s){return{name:s.name||s.id||"",label:s.label||s.display_name||s.name||"",description:s.description||"",colors:s.preview_colors||s.colors||s.palette||L[0].colors}}),T.activeTheme=i.active||T.themes[0]&&T.themes[0].name||T.activeTheme,T.selectedTheme||(T.selectedTheme=T.activeTheme),T.open&&h[T.step].id==="theme"&&P()}catch{}}async function d(){if(!T.selectedTheme||T.selectedTheme===T.activeTheme)return!0;try{let e=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T.selectedTheme})});if(!e.ok)throw new Error("HTTP "+e.status);return T.activeTheme=T.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function n(){if(!(h[T.step].id==="theme"&&!await d())){if(T.step<h.length-1){T.step+=1,P();return}l()}}function l(){try{localStorage.setItem(k,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),S()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}F()},close:function(){S()},isCompleted:function(){try{return!!localStorage.getItem(k)}catch{return!1}},__setCapabilityForTest:function(){}};function o(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&o()})})()});var Lt=ye(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})},g={poll:null,refreshTimer:0};function h(){return`
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
      </div>`}function L(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let x=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});x.classList.add("lg:col-span-2"),x.dataset.emptyKind="poll-deepdive",b.appendChild(x)}let U=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function C(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function T(b){if(!b||b.length<2)return"";let x=Math.max.apply(null,b.map(function(c){return c.n}).concat([1])),H=100,B=32,N=H/(b.length-1),f=b.map(function(c,a){let t=(a*N).toFixed(2),d=(B-c.n/x*(B-2)-1).toFixed(2);return t+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+B+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+f.join(" ")+'" /></svg>'}function m(b){let x=b.state||(b.active?"active":"ended"),H=b.question||"\u2014",B=Array.isArray(b.options)?b.options:[],N=function(v){return Number(v.votes!=null?v.votes:v.count)||0},f=B.reduce(function(v,s){return v+N(s)},0),c=x==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:C(b.ended_at)}),a=(function(){let v=Number(b.started_at)||0;if(!v)return"\u2014";let s=x==="active"?Date.now()/1e3:Number(b.ended_at)||v,r=Math.max(0,Math.floor(s-v));return Math.floor(r/60)+":"+String(r%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,d=t>0?Math.round(f/t*100)+"%":"\u2014",n=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:f,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),l=(function(){let v=Array.isArray(b.questions)?b.questions:[],s=0;for(let r of v)s+=Number(r.duplicate_attempts)||0;return v.length||(s=Number(b.duplicate_attempts)||0),s})(),o=B.map(function(v,s){let r=N(v),u=f>0?r/f*100:0,p=U[s%U.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${k(v.label||v.text||v.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:s+1}))}</span>
            <span class="votes">${r} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),e=Array.isArray(b.vote_timeline)?b.vote_timeline:[],i=e.length>=2?T(e):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">\u2039 ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${k(H)}</div>
          <div class="admin-pdd-state">${k(c)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${f}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${k(n)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${k(a)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${l}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${B.length?o:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${i}</div>
        </article>
      </div>`}function M(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!g.poll||!g.poll.poll_id){L(b);return}b.innerHTML=m(g.poll)}}async function F(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let x=await b.json();g.poll=x,M()}catch{}}function S(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],x=g.poll.options.reduce(function(c,a){return c+(Number(a.votes!=null?a.votes:a.count)||0)},0);g.poll.options.forEach(function(c,a){let t=Number(c.votes!=null?c.votes:c.count)||0,d=x>0?(t/x*100).toFixed(2):"0.00";b.push([c.label||"option_"+(a+1),t,d])});let H=b.map(function(c){return c.map(function(a){let t=String(a);return t.includes(",")||t.includes('"')?'"'+t.replace(/"/g,'""')+'"':t}).join(",")}).join(`
`),B=new Blob([H],{type:"text/csv;charset=utf-8"}),N=URL.createObjectURL(B),f=document.createElement("a");f.href=N,f.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(N)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function $(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(F(),g.refreshTimer||(g.refreshTimer=setInterval(F,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function w(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",h());let x=document.getElementById(y);x&&x.addEventListener("click",function(H){let B=H.target.closest("[data-pdd-action]");B&&(B.dataset.pddAction==="export-csv"?S():B.dataset.pddAction==="push"&&$())}),F(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&w()})})()});var At=ye(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},h={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},L=null;function U(d){let n=d.detail&&d.detail.entry;n&&(h.open||(L=document.activeElement),h.entry=n,C(),n.data&&n.data.fingerprint&&F(n.data.fingerprint),S(n))}function C(){h.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",$()),P()),w();let d=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function T(){h.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(y);if(d&&d.remove(),L&&typeof L.focus=="function"&&document.contains(L))try{L.focus({preventScroll:!0})}catch{}L=null}function m(d){if(!h.open)return;if(d.key==="Escape"){T();return}let n=document.activeElement,l=n?(n.tagName||"").toLowerCase():"";if(!(n&&(n.isContentEditable||l==="input"||l==="textarea"||l==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){M(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){M(1),d.preventDefault();return}}}function M(d){if(!h.entry)return;let n=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(n=window.AdminLiveFeed.getEntries()),!n.length)return;let l=n.findIndex(function(i){return i.id===h.entry.id});if(l<0)return;let o=l+-d;if(o<0||o>=n.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let e=n[o];h.entry=e,h.fingerprintRecord=null,S(e),w(),e.data&&e.data.fingerprint&&F(e.data.fingerprint)}async function F(d){try{let n=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!n.ok)return;let l=await n.json(),e=(Array.isArray(l.records)?l.records:[]).find(function(i){return(i.fingerprint||"").startsWith(d.slice(0,8))});h.fingerprintRecord=e||null,w()}catch{}}function S(d){let n=d.data&&d.data.fingerprint;if(!n){h.sameFpEntries=[];return}let l=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(l=window.AdminLiveFeed.getEntries()),h.sameFpEntries=l.filter(function(o){let e=o.data&&o.data.fingerprint||o.fingerprint||"";return e&&e.startsWith(n.slice(0,8))}).slice(0,8)}function $(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let d=document.getElementById(y);d&&d.addEventListener("click",function(n){let l=n.target.closest("[data-msgd-action]");if(!l)return;n.stopPropagation();let o=l.dataset.msgdAction;o==="close"?T():o==="ban-fp"?N():o==="ban-fp-quick"?B():o==="recall-msg"?c():o==="blacklist-kw"?a():o==="reply"?t():o==="prev"?M(-1):o==="next"&&M(1)})}function w(){let d=document.getElementById(y);if(!d)return;let n=d.querySelector("[data-msgd-body]");n&&(n.innerHTML=b())}function b(){let d=h.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let n=d.data||{},l=n.fingerprint||"\u2014",o=l==="\u2014"?"\u2014":l.slice(0,8),e=l==="\u2014"?"\u2014":l.slice(0,12),i=d.ts?x(d.ts):"\u2014",v=n.nickname||ServerI18n.t("msgDrawerAnonymous"),s=h.fingerprintRecord||{},r=Number(s.message_count)||0,u=Number(s.violation_count)||0,p=h.sameFpEntries||[],A=p.length?Math.round(p.reduce((_,D)=>_+((D.data||D).text||"").length,0)/p.length):(n.text||"").length,E=0;for(let _=0;_<l.length;_++)E=E*31+l.charCodeAt(_)&65535;return E=E%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${E})">${g((v||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(v)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(e)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(i)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(n.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${r||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${A}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(n.ip||"\u2014")}<br/>
          UA \xB7 ${g(n.user_agent||n.ua||"\u2014")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN\xB7\u4E2D\u6587 bilingual monolabel pattern as
             SENDER PROFILE above \u2014 left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${l==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29\uFF1A\u539F\u672C\u9019\u88E1\u662F\u300C\u975C\u97F3\u6307\u7D0B\u300D\uFF0B\u300C\u25D1 Mask\u300D\u5169\u9846\u3002
               \u975C\u97F3\u8207\u5C01\u7981\u6253\u7684\u662F\u540C\u4E00\u652F API\uFF08\u540C\u4E00\u500B\u6C38\u4E45\u6548\u679C\uFF09\uFF0C\u800C Mask \u5176\u5BE6\u662F
               \u628A\u6574\u53E5\u6587\u672C\u52A0\u9032\u9ED1\u540D\u55AE\u2014\u2014\u5169\u9846\u90FD\u5728\u627F\u8AFE\u4E00\u500B\u4E0D\u5B58\u5728\u7684\u9078\u9805\u3002
               \u63DB\u6210\u771F\u7684\u505A\u5F97\u5230\u7684\u4E8B\uFF1A\u628A\u9019\u4E00\u5247\u5F9E\u5927\u87A2\u5E55\u64A4\u4E0B\u3002 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${n.message_id?"":"disabled"}>${g(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function x(d){try{let n=new Date(d),l=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0"),e=String(n.getSeconds()).padStart(2,"0");return l+":"+o+":"+e}catch{return"\u2014"}}function H(d){let n;if(typeof d=="number")n=d*1e3;else if(typeof d=="string")n=new Date(d).getTime();else return"\u2014";if(!n)return"\u2014";let l=(Date.now()-n)/1e3;return l<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(l)}):l<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(l/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(l/86400)})}async function B(d,n,l){let o=h.entry&&h.entry.data&&h.entry.data.fingerprint;if(!o)return;let e=parseInt(n||0,10)||0,i=e>0?await window.AdminModeration.banFingerprint(o,e,d):await window.AdminModeration.callBlock("fingerprint",o,d);if(!i.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:i.error||""}),!1);return}let v=l||(e>0?ServerI18n.t("msgDrawerSecondsLabel",{n:e}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:o.slice(0,8),label:v}),!0),T()}async function N(){let d=h.entry&&h.entry.data||{},n=d.fingerprint||"\u2014";if(n==="\u2014")return;let l=n.slice(0,12),o=d.nickname||ServerI18n.t("msgDrawerAnonymous"),e=0;for(let E=0;E<n.length;E++)e=e*31+n.charCodeAt(E)&65535;e=e%360;let i=document.createElement("div");i.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${e})">${g((o||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(o)}</div>
          <div class="fp">fp:${g(l)}</div>
          <div class="ip">IP \xB7 ${g(d.ip||"\u2014")} \xB7 ${g(d.user_agent||d.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let v=E=>{i.querySelectorAll(".admin-bancfm-dchip").forEach(_=>_.classList.remove("is-active")),E.classList.add("is-active")};if(i.addEventListener("click",E=>{let _=E.target.closest("[data-ban-duration]");_&&v(_)}),i.addEventListener("keydown",E=>{if(E.key!=="Enter"&&E.key!==" ")return;let _=E.target.closest("[data-ban-duration]");_&&(E.preventDefault(),v(_))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:i,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let r=(i.querySelector("[data-ban-reason]")||{}).value||"",u=i.querySelector(".admin-bancfm-dchip.is-active"),p=u&&parseInt(u.dataset.banDuration||"0",10)||0,A=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return B(r.trim(),p,A)}function f(){}async function c(){let d=h.entry,n=d&&d.data&&d.data.message_id;if(!n)return;if(!(await window.AdminModeration.recall(n)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),T()}async function a(){let d=h.entry&&h.entry.data&&h.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&T()}async function t(){let d=document.querySelector("[data-msgd-reply]"),n=d?d.value.trim():"";if(n)try{let l=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:l.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:T},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",U),document.addEventListener("keydown",m))})})()});var Ct=ye(()=>{(function(){"use strict";let y="danmu.notifications.read",k="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},h={items:[],refreshTimer:0};function L(o){try{let e=localStorage.getItem(o);if(!e)return new Set;let i=JSON.parse(e);return new Set(Array.isArray(i)?i:[])}catch{return new Set}}function U(o,e){try{localStorage.setItem(o,JSON.stringify(Array.from(e)))}catch{}}function C(o){let e=L(y);e.add(o),U(y,e)}async function T(){let o=[m().catch(function(){return[]}),M().catch(function(){return[]}),F().catch(function(){return[]}),S().catch(function(){return[]})],i=(await Promise.all(o)).flat();i.sort(function(v,s){return(s.ts||0)-(v.ts||0)}),h.items=i,x(),N()&&H()}async function m(){let o=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!o.ok)return[];let e=await o.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,s){let r=(Number(v.ts)||0)*1e3,u="tok-"+(v.ts||s)+"-"+(v.kind||"x"),p=v.kind||"?",A="info",E=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")A="info",E=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")A="warn",E=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let _=v.meta&&v.meta.enabled;A=_?"good":"warn",E=ServerI18n.t("notifTitleFireTokenToggled",{state:_?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:A,src:"Fire Token",ts:r,title:E,desc:ServerI18n.t("notifDescEventType",{kind:p})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function M(){let o=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!o.ok)return[];let e=await o.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,s){let r=(Number(v.ts)||0)*1e3,u="flt-"+(v.ts||s)+"-"+(v.action||"x")+"-"+s,p=v.action||"match";return{id:u,sev:p==="drop"?"warn":"info",src:"Moderation",ts:r,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:v.rule_id||"?",text:(v.text||"").slice(0,60)}),raw:v}})}async function F(){let o=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!o.ok)return[];let e=await o.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,s){let r=(Number(v.ts)||0)*1e3,u=String(v.kind||"?");return{id:"wh-"+(v.ts||s)+"-"+u+"-"+s,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:r,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:v.actor||"system"})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function S(){let o=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!o.ok)return[];let e=await o.json(),i=Array.isArray(e.events)?e.events:[],v=new Set(["auth","broadcast","system","session","sessions"]);return i.filter(function(s){return v.has(String(s.source||""))}).map(function(s,r){let u=(Number(s.ts)||0)*1e3,p=String(s.kind||"?");return{id:"sys-"+(s.ts||r)+"-"+(s.source||"x")+"-"+p+"-"+r,sev:p==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:s.source||"?",actor:s.actor||"system"}),raw:s}})}let $="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function w(o){let e=P[o];return e?ServerI18n.t(e.key):o}function b(){let o=L(y),e=L(k);return h.items.filter(i=>!o.has(i.id)&&!e.has(i.id))}function x(){let o=document.querySelector("[data-notif-badge]");if(!o)return;let e=b().length;o.textContent=e>99?"99+":String(e),o.hidden=e===0}function H(){let o=document.getElementById($);if(!o)return;let e=b().slice(0,20),i=e.length?e.map(v=>{let s=P[v.src];return'<li class="admin-notif__item" data-sev="'+g(v.sev)+'"><div class="admin-notif__text">'+g(v.title)+'</div><div class="admin-notif__meta">'+g(w(v.src))+" \xB7 "+g(B(v.ts))+"</div>"+(s?'<button type="button" class="admin-notif__action" data-notif-go="'+g(s.hash)+'" data-notif-id="'+g(v.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";o.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+i+"</ul>"}function B(o){if(!o)return"\u2014";let e=(Date.now()-o)/1e3;return e<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(e)}):e<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(e/60)}):e<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(e/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(e/86400)})}function N(){let o=document.getElementById($);return!!o&&!o.hidden}function f(){let o=document.getElementById($);o&&(H(),o.hidden=!1,h.refreshTimer||(h.refreshTimer=setInterval(T,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&f()}function a(){let o=document.getElementById($);o&&(o.hidden=!0),h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function t(){N()?a():f()}function d(){let o=document.querySelector(".admin-dash-topbar-actions");if(!o||document.getElementById("admin-notif-bell"))return;let e=document.createElement("button");if(e.id="admin-notif-bell",e.type="button",e.className="admin-dash-search is-icon-only admin-notif-bell",e.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),e.title=ServerI18n.t("adminRouteTitle_notifications"),e.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',o.insertBefore(e,o.firstChild),!document.getElementById($)){let i=document.createElement("div");i.id=$,i.className="admin-notif",i.setAttribute("role","dialog"),i.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),i.hidden=!0,document.body.appendChild(i)}x(),c()}function n(){document.addEventListener("click",o=>{if(o.target.closest("#admin-notif-bell")){o.preventDefault(),t();return}let e=o.target.closest("[data-notif-go]");if(e){C(e.dataset.notifId),a(),location.hash=e.dataset.notifGo,x();return}if(o.target.closest("[data-notif-readall]")){b().forEach(i=>C(i.id)),H(),x();return}N()&&!o.target.closest("#"+$)&&a()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&N()&&a()}),window.addEventListener("hashchange",c),c()}function l(){d(),T()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),n(),l()})})()});var Bt=ye(()=>{(function(){"use strict";let y="sec-audit-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},h={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function L(){return`
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
      </div>`}function U(t){if(!t)return"\u2014";try{let d=new Date(Number(t)*1e3),n=String(d.getHours()).padStart(2,"0"),l=String(d.getMinutes()).padStart(2,"0"),o=String(d.getSeconds()).padStart(2,"0");return`${n}:${l}:${o}`}catch{return"\u2014"}}function C(t){let d=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function T(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(t){return h.filterActor==="all"||String(t.actor||"").toLowerCase()===h.filterActor}function M(t){return h.filterSeverity==="all"||C(t)===h.filterSeverity}function F(){return h.events.filter(function(t){return m(t)&&M(t)})}function S(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||t.target||""}function $(t,d){let n=t!=null,l=d!=null;if(!n&&!l)return"";let o=n?k(JSON.stringify(t)):"",e=l?k(JSON.stringify(d)):"";return n?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${o}</span> \u2192 <span class="admin-audit-diff-a">${e}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${e}</span></span>`}function P(t){let d=t&&t.meta&&typeof t.meta=="object"?t.meta:{},n=[];t.detail&&n.push(`<span>${k(String(t.detail))}</span>`);let l=$(t.before,t.after);l&&n.push(l);let o=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(i){delete o[i]}),Object.keys(o).length&&n.push(`<code class="admin-ui-code admin-audit-meta-extra">${k(JSON.stringify(o))}</code>`),!n.length){let i=g[t.source]&&g[t.source].label||t.source||"system";n.push(`<span>${k(String(i))}</span>`)}return n.join(" ")}function w(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let d=F();if(!d.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=d.map(function(n){let l=C(n),o=T(l),e=String(n.actor||"system"),i=S(n);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${l}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${k(U(n.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${o};box-shadow:0 0 6px ${o}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${w(e)}">${k(e)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${k(String(n.action||n.kind||"\u2014"))}</span>
              ${i?`<span class="admin-ui-target admin-audit-target">\u2192 ${k(String(i))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(n)}</div>
          </div>
        </div>`}).join("")}function x(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let d=F().length,n=h.filterActor==="all"?ServerI18n.t("auditAllRoles"):h.filterActor,l=h.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):h.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:n,sev:l})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===h.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===h.filterSeverity)})}async function B(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let d=await t.json(),n=Array.isArray(d.events)?d.events.slice():[];n.sort(function(l,o){return Number(o.ts||0)-Number(l.ts||0)}),h.events=n,H(),b(),x()}catch{}}function N(){let t=F();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(d),l=document.createElement("a");l.href=n,l.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(function(){URL.revokeObjectURL(n)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function f(){let t=document.getElementById(y);t&&t.addEventListener("click",function(d){let n=d.target.closest("[data-audit-actor-filter]");if(n){h.filterActor=n.dataset.auditActorFilter||"all",H(),b(),x();return}let l=d.target.closest("[data-audit-severity-filter]");if(l){let o=l.dataset.auditSeverityFilter||"all";h.filterSeverity=h.filterSeverity===o?"all":o,H(),b(),x();return}if(d.target.closest("[data-audit-export]")){N();return}d.target.closest("[data-audit-refresh]")&&B()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(B(),h.refreshTimer||(h.refreshTimer=setInterval(B,3e4))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function a(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",L()),f(),B(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&a()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&a()})})()});var Ft=ye(()=>{(function(){"use strict";let y="sec-audience-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],h=20,L={records:[],filter:"all",shown:h,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function U(r){if(!r)return g[0];let u=0;for(let p=0;p<r.length;p++)u=u*31+r.charCodeAt(p)>>>0;return g[u%g.length]}function C(r){if(!r)return"\u2014";let u=typeof r=="number"?r*1e3:new Date(r).getTime();if(!u)return"\u2014";let p=Math.max(0,(Date.now()-u)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function T(r){return r==="blocked"||r==="high"?"is-danger":r==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function M(){let r=L.search.trim().toLowerCase(),u=L.records.slice();return r&&(u=u.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(r)!==-1||String(p.hash||"").toLowerCase().indexOf(r)!==-1})),u.sort(function(p,A){return L.sort==="last_seen"?(Number(A.last_seen)||0)-(Number(p.last_seen)||0):(Number(A.msgs)||0)-(Number(p.msgs)||0)}),L.filter==="all"?u:L.filter==="flagged"?u.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):L.filter==="extension"?u.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):u}function F(){let r=document.querySelector("[data-aud-stats]");if(!r)return;let u=L.records,p=u.length,A=u.filter(function(O){return O.state==="flagged"}).length,E=u.filter(function(O){return O.state==="blocked"}).length,_=u.reduce(function(O,W){return O+(Number(W.msgs)||0)},0),D=u.filter(function(O){let W=O.last_seen;if(!W)return!1;let I=typeof W=="number"?W*1e3:new Date(W).getTime();return(Date.now()-I)/1e3<300}).length;r.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${D}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${_}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${A}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${E}</div></div>`}function S(){let r=document.querySelector("[data-aud-filters]");if(!r)return;let u=L.records.length,p=L.records.filter(function(A){return A.state==="flagged"||A.state==="blocked"}).length;r.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${L.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${L.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let $="__anon__";function P(r){let u=(r.nickname||"").trim();return!u||u==="\u533F\u540D"}function w(r){let u=r.hash||r.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function b(){let r=[],u=[];return M().forEach(function(p){P(p)?u.push(p):r.push(p)}),u.length&&r.push({_anonGroup:!0,_count:u.length,fingerprint:$,msgs:u.reduce(function(p,A){return p+(Number(A.msgs)||0)},0),blocked:u.reduce(function(p,A){return p+(Number(A.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(p){return p.last_seen||0})),state:u.some(function(p){return p.state==="blocked"})?"blocked":"active"}),r}function x(){let r=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!r)return;let p=b(),A=Math.min(p.length,L.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:A,total:p.length})),p.length===0){r.innerHTML="";let O=window.AdminEmpty.render("audience");O.dataset.emptyKind="audience",r.appendChild(O);return}let E=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,_=p.slice(0,A).map(function(O){let W=O.fingerprint||"\u2014",I=O.state==="blocked",R=O._anonGroup?ServerI18n.t("audienceAnonymous"):(O.nickname||"").trim(),j=O._anonGroup?"?":R.slice(0,1),J=U(W);return`
        <div class="admin-aud-row${L.selectedFp===W?" is-selected":""}" data-aud-row data-aud-fp="${k(W)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${k(j)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${k(R)}</span>
            ${O._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:O._count})}</span>`:""}
            ${I&&!O._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${O._anonGroup?"\u2014":k(w(O))}</span>
          <span class="col col-msgs">${Number(O.msgs)||0}</span>
          <span class="col col-blocked">${Number(O.blocked)||0}</span>
          <span class="col col-seen">${k(C(O.last_seen))}</span>
          <span class="col col-actions">
            ${O._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${k(W)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),D=p.length>A?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";r.innerHTML=E+_+D}function H(r){return r&&L.records.find(function(u){return u.fingerprint===r})||null}function B(r){if(!r)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],p=Number(r.msgs)||0,A=r.fingerprint||"";r.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),r.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),p>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let E=L.records.filter(function(W){return W.ip&&r.ip&&W.ip===r.ip}).length;E>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:E})),(A.indexOf("slido")===0||A.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(r.nickname==="\u533F\u540D"||!r.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let _="normal",D="var(--hud-lime)",O="NORMAL";return r.state==="blocked"?(_="blocked",D="var(--hud-crimson)",O="BLOCKED"):r.state==="flagged"||p>=25?(_="high",D="var(--hud-crimson)",O="HIGH RISK"):(p>=15||E>=3)&&(_="mid",D="var(--hud-amber)",O="MID"),{level:_,color:D,label:O,rules:u}}async function N(r){L.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){L.detailMessages=[];return}let p=await u.json(),A=Array.isArray(p.records)?p.records:[],E=Date.now()-300*1e3;L.detailMessages=A.filter(function(_){return(_.fingerprint||"")!==r?!1:(_.timestamp?new Date(_.timestamp).getTime():0)>=E}).slice(0,8)}catch{L.detailMessages=[]}finally{L.detailLoading=!1}}function f(){let r=document.querySelector("[data-aud-detail]");if(!r)return;let u=L.selectedFp;if(!u){r.hidden=!0,r.innerHTML="";return}let p=H(u);if(!p){L.selectedFp=null,r.hidden=!0;return}r.hidden=!1;let A=B(p);r.dataset.riskLevel=A.level;let E=U(u),_=!p.nickname||p.nickname==="\u533F\u540D",D=_?ServerI18n.t("audienceAnonymous"):p.nickname,O=_?"?":D.slice(0,1),W="fp:"+(u||"").slice(0,8),I=A.rules.length?A.rules.map(function(j){return"<li>"+k(j)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",R="";L.detailLoading?R='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":L.detailMessages.length===0?R='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":R=L.detailMessages.map(function(j){let J=j.muted?"MASKED":j.banned?"BLOCKED":"SHOWN",K=j.muted?"var(--hud-amber)":j.banned?"var(--hud-crimson)":"var(--hud-lime)",G=j.timestamp?new Date(j.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+k(G)+'</span><span class="m">'+k(j.text||"")+'</span><span class="s" style="color:'+K+'">'+J+"</span></div>"}).join(""),r.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+T(A.level)+'">'+k(A.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+E+'">'+k(O)+'</span><div><div class="nick">'+k(D)+'</div><div class="fp">'+k(W)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+A.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:A.rules.length})+"</div><ul>"+I+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+R+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+k(u)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(r){L.selectedFp=r,L.detailMessages=[],f(),N(r).then(f)}async function a(){try{let r=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!r.ok)return;let u=await r.json();L.records=Array.isArray(u.entries)?u.entries:[],L.serverStats=u&&u.stats||null,F(),S(),x(),L.selectedFp&&f()}catch{}}async function t(r,u,p){if(r)try{let A=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:r,flagged:!!u,note:p||""})});if(!A.ok)throw new Error("HTTP "+A.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:r.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:r.slice(0,8)}),!0),a()}catch(A){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:A.message||""}),!1)}}async function d(r,u){if(!r||r==="\u2014")return;let p=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:r.slice(0,8)}),"")||"");if(p!==null)try{let A=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:r,reason:p})});if(!A.ok)throw new Error("HTTP "+A.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:r.slice(0,8)}),!0),a()}catch(A){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:A.message||""}),!1)}}async function n(r){if(!(!r||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(r.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:r})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),a()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function l(r){if(!(!r||r==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:r,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:r.slice(0,8)}),!0),a()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function o(r){if(!(!r||r==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let p=await u.json(),E=(Array.isArray(p.rules)?p.rules:[]).filter(function(D){return D&&D.type==="fingerprint"&&D.pattern===r});if(E.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let _=0;for(let D of E)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D.rule_id||D.id})}).catch(function(){return{ok:!1}})).ok&&(_+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:_,fp:r.slice(0,8)}),!0),a()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function e(r){if(!(!r||r==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(r.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:r})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:r.slice(0,8)}),!0),a()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function i(){let r=document.getElementById(y);r&&(r.addEventListener("input",function(u){let p=u.target.closest("[data-aud-search]");p&&(L.search=p.value||"",L.shown=h,x())}),r.addEventListener("change",function(u){let p=u.target.closest("[data-aud-sort]");p&&(L.sort=p.value,x())}),r.addEventListener("click",function(u){let p=u.target.closest("[data-aud-filter]");if(p){L.filter=p.dataset.audFilter,L.shown=h,S(),x();return}let A=u.target.closest("[data-aud-action='ban']");if(A){u.stopPropagation(),e(A.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){a();return}if(u.target.closest("[data-aud-action='more']")){L.shown+=h,x();return}if(u.target.closest("[data-aud-action='close-detail']")){L.selectedFp=null,f();return}let O=u.target.closest("[data-aud-action='detail-ban']");if(O){e(O.dataset.audFp);return}let W=u.target.closest("[data-aud-action='detail-mask']");if(W){l(W.dataset.audFp);return}let I=u.target.closest("[data-aud-action='detail-safe']");if(I){o(I.dataset.audFp);return}let R=u.target.closest("[data-aud-action='flag']");if(R){u.stopPropagation(),t(R.dataset.audFp,R.dataset.audFlagged!=="true");return}let j=u.target.closest("[data-aud-action='kick']");if(j){u.stopPropagation(),d(j.dataset.audFp);return}let J=u.target.closest("[data-aud-action='unkick']");if(J){u.stopPropagation(),n(J.dataset.audFp);return}let K=u.target.closest("[data-aud-row]");if(!(K&&K.dataset.audFp===$)&&K&&!u.target.closest("button")){c(K.dataset.audFp);return}}))}function v(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(a(),L.refreshTimer||(L.refreshTimer=setInterval(a,15e3))):L.refreshTimer&&(clearInterval(L.refreshTimer),L.refreshTimer=0)}function s(){let r=document.getElementById("settings-grid");!r||document.getElementById(y)||(r.insertAdjacentHTML("beforeend",m()),i(),a(),v(),window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&s()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&s()})})()});var Dt=ye(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],k={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,h=0,L=0,U=null;function C(){if(U)return U;let S=document.createElement("div");return S.className="admin-konami-hud",S.setAttribute("aria-hidden","true"),S.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(S),U=S,S}function T(){if(h===0){U&&U.classList.remove("is-on");return}let S=C();S.classList.add("is-on");let $=S.querySelector(".admin-konami-hud-keys");$&&($.innerHTML=y.map((w,b)=>`<span class="admin-konami-hud-key ${b<h?"is-filled":""}">${k[w]}</span>`).join(""));let P=S.querySelector(".admin-konami-hud-progress");if(P){let w=Math.round(h/y.length*100);P.style.width=w+"%"}}function m(S){h=0,L&&(clearTimeout(L),L=0),S||T()}function M(){L&&clearTimeout(L),L=setTimeout(()=>m(),g)}async function F(){try{let S=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(S){console.warn("[konami] trigger failed:",S&&S.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",S=>{let $=S.target;if($&&($.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable))return;let P=y[h];if(!(S.key===P||P==="b"&&S.key.toLowerCase()==="b"||P==="a"&&S.key.toLowerCase()==="a")){h=S.key===y[0]?1:0,T(),h>0?M():L&&(clearTimeout(L),L=0);return}if(h++,T(),h>=y.length){m(!0),F();return}M()}),window.AdminKonami={trigger:F}})()});var Mt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(l){return l==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:l==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:l==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=l?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${l?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${o}`:""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.12em">${ServerI18n.t("fontsTotalPlaceholder")}</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${l?`
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
    `}var h=null,L=[];function U(l,o){var e=document.getElementById("adminFontEmptyStateHost");if(!e)return;if((l||[]).some(s=>s.type==="uploaded")){e.innerHTML="";return}e.innerHTML="";var v=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:o?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var s=document.getElementById("adminFontFileInput");s&&s.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});v.dataset.emptyKind="fonts",e.appendChild(v)}function C(l,o){let e=l.weight||"\u2014",i=l.sizeLabel||"\u2014",v=l.foundry||(l.type==="system"?"System":l.type==="default"?"Google / Noto":"Uploaded"),s=l.format||"\u2014",r=l.status||l.type,u=`font-family: "${y(l.name)}", sans-serif;`,p=k(r),A=[];if(o){if(r!=="default"&&A.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(l.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),r!=="default"){let E=r==="enabled"||r==="system",_=E?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");A.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(l.name)}" data-enabled="${E?"true":"false"}">${_}</button>`)}l.type==="uploaded"&&(A.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(l.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),A.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(l.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(l.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(l.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(A.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${A.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(v)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(e)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(i)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(s)}</span><div style="text-align:right">${p}</div></div>`}let T=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(T)return T;try{let l=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return l.ok?(T=(await l.json()).presets||{},T):{}}catch{return{}}}function F(l){return!l||!Number.isFinite(l)?"\u2014":l<1024?l+" B":l<1024*1024?(l/1024).toFixed(1)+" KB":(l/(1024*1024)).toFixed(2)+" MB"}async function S(l){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let o=await M();if(!Object.keys(o).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let e=new Set(["cjk_common","latin"]),i="",v=document.createElement("div");v.className="admin-font-subset-modal-body";let s=()=>{let p=Object.keys(o).map(E=>{let _=m[E]||{label:E,glyphs:"\u2014",estSize:"\u2014"},D=_.labelKey?ServerI18n.t(_.labelKey):_.label,O=e.has(E);return`
          <label class="admin-font-subset-chip${O?" is-active":""}" data-subset-preset="${E}">
            <span class="admin-font-subset-chip-check">${O?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(D)}</span>
            <span class="admin-font-subset-chip-range">${y(o[E])}</span>
            <span class="admin-font-subset-chip-meta">${_.glyphs} glyphs \xB7 ${_.estSize}</span>
          </label>`}).join("");v.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(l)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${p}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(i)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,v.querySelectorAll("[data-subset-preset]").forEach(E=>{E.addEventListener("click",_=>{_.preventDefault();let D=E.dataset.subsetPreset;e.has(D)?e.delete(D):e.add(D),s()})});let A=v.querySelector("[data-subset-custom]");A&&A.addEventListener("input",()=>{i=A.value})};if(s(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:v,width:540}))return;let u=[];if(e.forEach(p=>{o[p]&&u.push(o[p])}),i.trim()&&u.push(i.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await $(l,u.join(","))}async function $(l,o){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:l}),!0);let e=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(l)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:o})}),i=await e.json().catch(()=>({}));if(e.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!e.ok){window.showToast?.(i.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:e.status}),!1);return}let v=i.saved_bytes||0,s=Math.round((i.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:l,before:F(i.original_size),after:F(i.new_size),pct:s}),!0),b()}catch(e){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:e.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(l){try{let o=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:l})});if(!o.ok)throw new Error("HTTP "+o.status);h=l,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:l}),!0),b()}catch(o){console.error("[admin-fonts] set default failed:",o),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function w(l,o){try{let e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!o})});if(!e.ok)throw new Error("HTTP "+e.status);window.showToast(ServerI18n.t(o?"fontsToggleOffToast":"fontsToggleOnToast",{name:l}),!0),b()}catch(e){console.error("[admin-fonts] toggle failed:",e),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var l=document.getElementById("adminFontList");if(!l)return;let o=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var e=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!e.ok)throw new Error("HTTP "+e.status);var i=await e.json(),v=i.fonts||[];if(L=v,window.AdminTabs?.setTabCount?.("assets","fonts",v.length||""),U(v,o),v.length===0){l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,f(v);return}l.innerHTML=v.map(s=>C(s,o)).join(""),f(v),c()}catch(s){console.error("[admin-fonts] fetch failed:",s),l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,U([],o)}}async function x(l){try{let o=await l.slice(0,4).arrayBuffer(),e=new Uint8Array(o);return e[0]===0&&e[1]===1&&e[2]===0&&e[3]===0?"TTF":e[0]===79&&e[1]===84&&e[2]===84&&e[3]===79?"OTF":e[0]===119&&e[1]===79&&e[2]===70&&e[3]===50?"WOFF2":e[0]===116&&e[1]===114&&e[2]===117&&e[3]===101?"TTF":e[0]===116&&e[1]===116&&e[2]===99&&e[3]===102?"TTC":null}catch{return null}}function H(l,o){let e=document.getElementById("adminFontDropStatus");if(e){if(!l){e.textContent="",e.hidden=!0,e.classList.remove("is-good","is-bad");return}e.hidden=!1,e.textContent=l,e.classList.toggle("is-good",o==="good"),e.classList.toggle("is-bad",o==="bad")}}function B(l){let o=document.getElementById("adminFontUploadError");if(!o)return;if(!l){o.hidden=!0,o.innerHTML="";return}o.hidden=!1,o.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(l)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let e=o.querySelector("[data-font-error-retry]");e&&e.addEventListener("click",function(){let i=document.getElementById("adminFontFileInput");i&&i.click()})}async function N(l){if(!l)return;B("");let o=l.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(o)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),B(ServerI18n.t("fontsExtNotSupportedFull"));return}if(l.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),B(ServerI18n.t("fontsFileTooLargeFull"));return}let e=await x(l);if(!e){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),B(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:e,size:(l.size/1024).toFixed(1)}),"good");try{var i=new FormData;i.append("fontfile",l);var v=await window.csrfFetch("/admin/upload_font",{method:"POST",body:i}),s=await v.json();v.ok?(window.showToast(s.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:l.name}),"good"),B(""),await b()):(window.showToast(s.error||ServerI18n.t("uploadFailed"),!1),H(s.error||ServerI18n.t("uploadFailed"),"bad"),B(s.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(r){console.error("[admin-fonts] upload error:",r),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),B(ServerI18n.t("fontsNetworkDisconnected"))}}function f(l){let o=document.getElementById("fontsTotalSize");o&&(o.textContent=ServerI18n.t("fontsTotalCount",{n:l.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(l=>{l.addEventListener("click",o=>{if(o.target.closest(".admin-font-delete-btn"))return;let e=l.dataset.font,i=document.getElementById("fontsPreviewFamily"),v=document.getElementById("fontsPreviewHeadline"),s=document.getElementById("fontsPreviewLatin"),r=document.getElementById("fontsPreviewCJK");i&&(i.textContent=e);let u=`"${e}", sans-serif`;v&&(v.style.fontFamily=u),s&&(s.style.fontFamily=u),r&&(r.style.fontFamily=u)})})}async function a(){var l=document.getElementById("adminFontFileInput");if(l){var o=l.files&&l.files[0];if(!o){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await N(o),l.value=""}}function t(){let l=document.getElementById("adminFontDrop"),o=document.getElementById("adminFontFileInput");!l||!o||(l.addEventListener("click",e=>{e.target!==o&&o.click()}),l.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),o.click())}),["dragenter","dragover"].forEach(e=>{l.addEventListener(e,i=>{i.preventDefault(),i.stopPropagation(),l.classList.add("is-drag")})}),["dragleave","drop"].forEach(e=>{l.addEventListener(e,i=>{i.preventDefault(),i.stopPropagation(),l.classList.remove("is-drag")})}),l.addEventListener("drop",async e=>{let i=e.dataTransfer&&e.dataTransfer.files;i&&i[0]&&await N(i[0])}))}async function d(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("deleteBtn")}))try{var e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l),{method:"DELETE"}),i=await e.json();e.ok?(window.showToast(i.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(i.error||ServerI18n.t("deleteFailed"),!1)}catch(v){console.error("[admin-fonts] delete error:",v),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function n(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",g());var o=document.getElementById("adminFontFileInput");o&&o.addEventListener("change",a),t();var e=document.getElementById("adminFontList");e&&e.addEventListener("click",function(i){var v=i.target.closest(".admin-font-delete-btn");if(v){i.stopPropagation(),d(v.dataset.name);return}var s=i.target.closest(".admin-font-default-btn");if(s){i.stopPropagation(),P(s.dataset.name);return}var r=i.target.closest(".admin-font-toggle-btn");if(r){i.stopPropagation();let p=r.dataset.enabled==="true";w(r.dataset.name,p);return}var u=i.target.closest(".admin-font-subset-btn");u&&(i.stopPropagation(),S(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.FontFamily)&&(h=i.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()}})})()});var Nt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-scheduler",g=5e3,h=null,L=null;function U(n,l,o,e){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${n}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(l)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(o||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${e||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function C(n){var l=n==="active"?"is-success":n==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+l+'" title="'+m(n)+'"></span>'}function T(n){let l=n.state==="paused",o=n.repeat_count===void 0?"\u2014":n.repeat_count===-1?"\u221E":String(n.repeat_count),e=n.repeat_count>0&&typeof n.remaining=="number"?String(n.repeat_count-n.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(n.id)}">
        ${C(n.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(n.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${n.messages?n.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${n.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(e)}</span>
        <span class="admin-scheduler-job-val">${y(o)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${l?"is-active":"is-warn"}"
            data-job-id="${m(n.id)}" data-action="${l?"resume":"pause"}">
            ${y(ServerI18n.t(l?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(n.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(n){return y(n)}function M(){let n=document.querySelectorAll("#schedulerMessages [data-msg-index]"),l=[];return n.forEach(function(o){let e=o.querySelector(".scheduler-msg-text").value.trim(),i=o.querySelector(".scheduler-msg-color").value,v=parseInt(o.querySelector(".scheduler-msg-size").value,10)||48;e&&l.push({text:e,color:i,size:v})}),l}function F(n,l,o){let e=document.getElementById("schedulerMessages");if(!e)return;let i=e.children.length;e.insertAdjacentHTML("beforeend",U(i,n||"",l||"#ffffff",o||48))}function S(n){let l=n.closest("[data-msg-index]");l&&l.remove();let o=document.getElementById("schedulerMessages");o&&o.querySelectorAll("[data-msg-index]").forEach(function(e,i){e.dataset.msgIndex=i})}async function $(){let n=M();if(n.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let l=parseInt(document.getElementById("schedulerInterval").value,10);if(!l||l<1||l>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let o=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(o)||o<-1||o>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let e=document.getElementById("schedulerCreateBtn");e&&(e.disabled=!0);try{let i=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,interval_sec:l,repeat_count:o})}),v=await i.json();i.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await f()):showToast(v.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(i){console.error("Scheduler create error:",i),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{e&&(e.disabled=!1)}}function P(n){return"msg"}function w(n){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[n]||"\u25C8"}function b(n){return n.next_run_at?new Date(n.next_run_at*1e3).getHours():new Date().getHours()}function x(n){if(n.next_run_at){let l=new Date(n.next_run_at*1e3);return String(l.getHours()).padStart(2,"0")+":"+String(l.getMinutes()).padStart(2,"0")}return"--:--"}function H(n){let l=n.id||"job",o=Array.isArray(n.messages)?n.messages.length:null;return"Job #"+l+(o!=null?" \xB7 "+o+" messages":"")}function B(n){let l=document.querySelector("[data-sch-timeline]");if(!l)return;let o=[],e=new Date().getHours();for(let v=0;v<24;v++){let s=v>=Math.max(0,e-1)&&v<=Math.min(23,e+2);o.push('<div class="admin-sch-timeline-hour'+(s?" is-peak":"")+'">'+String(v).padStart(2,"0")+"</div>")}let i=(n||[]).map(function(v){let s=P(v),r=w(s),u=v.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(x(v))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+s+'">'+r+'</span><span class="admin-sch-evt-desc">'+y(H(v))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");l.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+o.join("")+"</div></div>"+(i||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function N(n){let l=document.querySelector("[data-sch-calendar]");if(!l)return;let o=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],e=new Date,i=(e.getDay()+6)%7,v=new Date(e);v.setDate(e.getDate()-i);let s=o.map(function(u,p){let A=new Date(v);return A.setDate(v.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===i?" is-today":"")+'">'+y(u)+'<span class="date">'+A.getDate()+"</span></div>"}).join(""),r=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===i?(n||[]).slice(0,5).map(function(A){let E=P(A),_=w(E);return'<span class="admin-sch-cal-chip is-'+E+'">'+y(x(A))+" "+_+"</span>"}).join(""):"")+"</div>"}).join("");l.innerHTML='<div class="admin-sch-calendar-head">'+s+'</div><div class="admin-sch-calendar-body">'+r+"</div>"}async function f(){let n=document.getElementById("schedulerJobsList"),l=document.getElementById("schedulerJobsCount");if(n)try{let o=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!o.ok){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}let e=await o.json();if(!Array.isArray(e.jobs)){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}l&&(l.textContent=ServerI18n.t("schItemCount",{n:e.jobs.length})),B(e.jobs),N(e.jobs);let i=document.querySelector("[data-sch-meta]");if(i){let v=new Date().toISOString().slice(0,10);i.textContent=ServerI18n.t("schTodayMeta",{date:v,n:e.jobs.length})}if(e.jobs.length===0){n.innerHTML="";let v=window.AdminEmpty.render("scheduler");v.dataset.emptyKind="scheduler",n.appendChild(v);return}n.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+e.jobs.map(T).join("")}catch(o){console.error("Scheduler fetch error:",o),n.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(n,l){try{let o=await csrfFetch("/admin/scheduler/"+encodeURIComponent(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),e=await o.json();o.ok?(showToast(l==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await f()):showToast(e.error||ServerI18n.t("actionFailed"),!1)}catch(o){console.error("Scheduler toggle error:",o),showToast(ServerI18n.t("actionFailed"),!1)}}async function a(n){try{let l=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),o=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await f()):showToast(o.error||ServerI18n.t("cancelFailed"),!1)}catch(l){console.error("Scheduler cancel error:",l),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let n=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!n)return;n.insertAdjacentHTML("beforeend",`
      <div id="${k}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("schPageTitle")}</h2>
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
    `);let l=document.querySelectorAll("[data-sch-view]");l.forEach(s=>{s.addEventListener("click",()=>{let r=s.dataset.schView;l.forEach(A=>{A.classList.toggle("is-active",A===s),A.setAttribute("aria-selected",A===s?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");u&&(u.hidden=r!=="timeline"),p&&(p.hidden=r!=="calendar")})}),F("","#ffffff",48);let o=document.getElementById("schedulerMessages");o&&o.addEventListener("click",function(s){let r=s.target.closest(".scheduler-remove-msg");r&&S(r)});let e=document.getElementById("schedulerAddMsg");e&&e.addEventListener("click",function(){F("","#ffffff",48)});let i=document.getElementById("schedulerCreateBtn");i&&i.addEventListener("click",$);let v=document.getElementById("schedulerJobsList");v&&v.addEventListener("click",function(s){let r=s.target.closest(".scheduler-job-toggle");if(r){c(r.dataset.jobId,r.dataset.action);return}let u=s.target.closest(".scheduler-job-cancel");u&&a(u.dataset.jobId)}),h&&(clearInterval(h),h=null),L||(L=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:f}),window.addEventListener("beforeunload",function(){L&&(L(),L=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&!n){n=!0;try{t()}finally{n=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Pt=ye(()=>{(function(){"use strict";let y="admin-security-v2-page";var k=window.AdminUtils.escapeHtml;let g=null,h=!1,L=!1,U=0;function C(){let s=r=>ServerI18n.t(r);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${s("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${s("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${s("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2PwRowLabel")}
              <span class="sub">${s("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${s("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${s("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${s("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${s("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${s("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${s("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${s("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${s("security2CardWsTokenTitle")}" placeholder="${s("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${s("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${s("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${s("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${s("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${s("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${s("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${s("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${s("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${s("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${s("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${s("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${s("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${s("security2WsAuthMigrationPrepare")}</li>
            <li>${s("security2WsAuthMigrationDesktop")}</li>
            <li>${s("security2WsAuthMigrationEnable")}</li>
            <li>${s("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${s("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${s("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${s("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${s("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${s("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${s("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${s("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${s("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2StatusLabel")}
              <span class="sub">${s("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${s("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2RevokeApiTokensTitle")}
              <span class="sub">${s("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${s("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2RevokeFireTokenTitle")}
              <span class="sub">${s("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${s("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${s("security2ResetWsTokenTitle")}
              <span class="sub">${s("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${s("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function T(s){if(!s)return 0;let r=0;s.length>=8&&r++,s.length>=12&&r++;let u=(/[a-z]/.test(s)?1:0)+(/[A-Z]/.test(s)?1:0)+(/\d/.test(s)?1:0)+(/[^\w]/.test(s)?1:0);return u>=2&&r++,u>=3&&r++,Math.min(4,r)}function m(s){let r=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!r||!u)return;let p=T(s),A=[0,25,50,75,100],E=["","is-bad","is-warn","is-warn","is-good"],_=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];r.style.width=A[p]+"%",r.className=E[p],u.textContent=_[p]}async function M(s){s.preventDefault();let r=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!r||!u||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let A=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:r,new_password:u,confirm_password:p})}),E=await A.json().catch(()=>({}));A.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),E.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(E.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(A){console.error("Password change error:",A),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function F(){let s=++U,r=document.getElementById("sec2-wsa-status");L=!0,S(!0),r.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let p=await u.json();if(s!==U)return!1;g={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",r.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),r.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,w();let A=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=A?new Date(parseInt(A,10)).toLocaleString():"\u2014",!0}catch{return s!==U||(g=null,S(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,r.textContent=ServerI18n.t("security2LoadFailed"),r.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{s===U&&(L=!1,S(h||!g),h||w())}}function S(s){["toggle","token","save","rotate","copy","reveal"].forEach(r=>{document.getElementById("sec2-wsa-"+r).disabled=s}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",s)}function $(){return h||L||!g?!1:(h=!0,++U,S(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(h=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,S(L||!g),g&&!L){let s=document.getElementById("sec2-wsa-status");s.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),s.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),w()}}function w(){if(h||L||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let s=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!s}function b(s){return String(s||"").split(/\n+/).map(r=>r.trim()).filter(Boolean)}function x(s){return String(s||"").split(",").map(r=>r.trim().toUpperCase()).filter(Boolean)}function H(s,r){let u=document.getElementById(s);u&&(u.textContent=r==null||r===""?"\u2014":String(r))}async function B(){try{let s=await fetch("/admin/security/settings",{credentials:"same-origin"}),r=await s.json().catch(()=>({}));if(!s.ok)throw new Error(r.error||s.status);let u=r.ip_allowlist||{},p=r.cors||{},A=r.tls||{},E=!!u.enabled,_=Array.isArray(u.entries)?u.entries:[],D=document.getElementById("sec2-ip-dot"),O=document.getElementById("sec2-ip-status-chip"),W=document.getElementById("sec2-ip-toggle"),I=document.getElementById("sec2-ip-entries");D&&(D.classList.toggle("is-lime",E),D.classList.toggle("is-amber",!E)),O&&(O.textContent=E?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),O.className="admin-ui-chip admin-sec-status-chip "+(E?"is-active":"is-warn")),W&&(W.checked=E),I&&(I.value=_.join(`
`)),H("sec2-ip-current",u.current_ip||"\u2014"),H("sec2-ip-status-line",E?ServerI18n.t("security2IpStatusEnabled",{n:_.length}):ServerI18n.t("security2IpStatusDisabled"));let R=Array.isArray(p.origins)?p.origins:["*"],j=Array.isArray(p.methods)?p.methods:[],J=document.getElementById("sec2-cors-origins"),K=document.getElementById("sec2-cors-credentials"),G=document.getElementById("sec2-cors-methods"),te=document.getElementById("sec2-cors-cred-dot");J&&(J.value=R.join(`
`)),K&&(K.checked=!!p.supports_credentials),G&&(G.value=j.join(", ")),te&&(te.classList.toggle("is-lime",!p.supports_credentials),te.classList.toggle("is-amber",!!p.supports_credentials)),H("sec2-cors-origins-line",R.join(", ")),H("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),H("sec2-cors-methods-line",j.join(", "));let ne=A.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:A.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",ne)}catch(s){console.error("Security settings load error:",s);let r=document.getElementById("sec2-ip-status-chip");r&&(r.textContent=ServerI18n.t("security2LoadFailed"),r.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function N(s){let r={};if(s==="ip")r.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(s==="cors"){let u=b(document.getElementById("sec2-cors-origins")?.value||"");r.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:x(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),p=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await B()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function f(){if(h||L||!g)return;let s=document.getElementById("sec2-wsa-toggle").checked,r=document.getElementById("sec2-wsa-token").value.trim();if(s&&!r){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if($())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:s,token:r})}),p=await u.json().catch(()=>({}));u.ok?await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function c(){if(!(h||L||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&$())try{let r=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await r.json().catch(()=>({}));if(r.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function a(){let s=document.getElementById("sec2-wsa-token").value;if(!s){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let s=document.getElementById("sec2-wsa-token");s.type=s.type==="password"?"text":"password";let r=s.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(r)),u.textContent=ServerI18n.t(r?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function d(s){if(s==="reset-ws"&&(h||L||!g))return;let r={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[s];if(!(!r||!await window.HudConfirm?.open({icon:"\u26A0",title:r.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:r.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:r.severity||"warn",body:r.confirm,confirmLabel:r.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(s==="reset-ws"&&!$()))try{let p=await window.csrfFetch(r.url,{method:"POST"}),A=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast(A.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(s==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await F())return}window.showToast&&showToast(r.ok(A),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{s==="reset-ws"&&P()}}function n(){let s=document.getElementById("sec2-session-self-line");if(s){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),A=navigator.platform||navigator.userAgentData?.platform||"",E=p?p[0].split("/")[0]:"Browser";s.textContent=ServerI18n.t("security2SessionSelfLine",{browser:E,platform:A})}let r=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(r&&u){let p=location.protocol==="https:";r.classList.add(p?"is-lime":"is-crimson"),u.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function l(){let s=document.getElementById("sec2-pw-form");s&&s.addEventListener("submit",M);let r=document.getElementById("sec2-pw-new");r&&r.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",f),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",a),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",w),document.getElementById("sec2-wsa-token")?.addEventListener("input",w),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>N("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>N("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,u.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>d(u.dataset.secDanger)))}),n(),F(),B()}function o(){}function e(){let s=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!s||!r)return;let u=s.dataset.activeRoute||"live",p=s.dataset.activeLeaf||u;r.style.display=u==="security"||u==="system"&&p==="security"?"":"none"}function i(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",C()),l(),e())}function v(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let s=null;function r(){let p=document.querySelector(".admin-dash-grid");!p||s||(s=new MutationObserver(e),s.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?i():void 0,r(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{i(),r(),e()}),r(),i()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var Rt=ye(()=>{(function(){"use strict";let y="admin-backup-v2-page";var k=window.AdminUtils.escapeHtml;function g(){let n=l=>ServerI18n.t(l);return`
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
      </div>`}async function h(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)throw new Error(n.status);let l=await n.json(),o=["password","token","secret","hash"],e={};Object.keys(l||{}).forEach(u=>{o.some(p=>u.toLowerCase().includes(p))||(e[u]=l[u])});let i=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:e},null,2)],{type:"application/json"}),v=URL.createObjectURL(i),s=new Date().toISOString().replace(/[:.]/g,"-"),r=document.createElement("a");r.href=v,r.download="danmu-settings-"+s+".json",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(v),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(n){console.error("Settings snapshot error:",n),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let L=null;function U(){L=null;let n=document.getElementById("bk2-settings-apply");n&&(n.disabled=!0,n.title=ServerI18n.t("backupApplyDisabledTitle"))}async function C(){let n=document.getElementById("bk2-settings-upload"),l=document.getElementById("bk2-settings-diff"),o=document.getElementById("bk2-settings-apply"),e=n&&n.files&&n.files[0];if(!e){U(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let i=await e.text(),v=JSON.parse(i),s=v.settings||v;if(!s||typeof s!="object"||Array.isArray(s))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let r=await fetch("/get_settings",{credentials:"same-origin"}),u=r.ok?await r.json():{},p=[];new Set([...Object.keys(u),...Object.keys(s)]).forEach(E=>{let _=JSON.stringify(u[E]),D=JSON.stringify(s[E]);_!==D&&(_===void 0?p.push("+ "+E+": "+D):D===void 0?p.push("- "+E+": "+_):p.push("~ "+E+": "+_+" \u2192 "+D))}),l.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),l.hidden=!1,L=s,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(i){console.error("Dry-run error:",i),U(),l.textContent=ServerI18n.t("backupParseFailedDetail",{msg:i&&i.message?i.message:String(i)}),l.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function T(){let n=document.getElementById("bk2-settings-diff"),l=document.getElementById("bk2-settings-apply");if(!L){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"danger",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let e=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:L})}),i=await e.json().catch(()=>({}));if(!e.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(i.details||i,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(i.applied||[]).length+" settings"),L=null,l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(e){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:e&&e.message?e.message:String(e)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let n=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");!n||!l||(n.addEventListener("input",()=>{let o=n.value.trim()==="reset";l.classList.toggle("is-ready",o),l.disabled=!o}),l.addEventListener("click",F))}async function F(){let n=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");if((n?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{l&&(l.disabled=!0);let e=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),i=await e.json().catch(()=>({}));if(!e.ok||!i.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),l&&(l.disabled=!1);return}n&&(n.value=""),l&&(l.classList.remove("is-ready"),l.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),w()}catch{l&&(l.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function S(){document.getElementById("bk2-settings-download")?.addEventListener("click",h),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",C),document.getElementById("bk2-settings-apply")?.addEventListener("click",T),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",B),document.getElementById("bk2-pack-apply")?.addEventListener("click",N),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),M(),w(),x()}let $=null,P=null;async function w(){let n=document.getElementById("bk2-pack-summary");if(n)try{let l=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!l.ok){n.textContent=ServerI18n.t("backupPreviewUnavailable");return}let o=await l.json(),e=(o.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function x(){let n=document.getElementById("bk2-assets-summary");if(n)try{let l=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!l.ok){n.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let o=await l.json(),e=(o.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:o.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function B(){let l=document.getElementById("bk2-pack-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(l.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let o=new FormData;o.append("file",l);let e=document.getElementById("bk2-pack-diff"),i=document.getElementById("bk2-pack-apply");try{let v=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:o}),s=await v.json().catch(()=>({}));if(!v.ok||!s.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(s.errors||s,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),i&&(i.disabled=!0),$=null;return}if(e){e.hidden=!1;let r=[],u=s.manifest||{};r.push("manifest version: "+(u.version||"?")),r.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),r.push(""),r.push("Will write "+(s.members?.length||0)+" files:"),(s.members||[]).forEach(p=>{r.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),s.skipped?.length&&(r.push(""),r.push("Skipped "+s.skipped.length+" entries:"),s.skipped.forEach(p=>r.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=r.join(`
`)}$=l,i&&(i.disabled=!1,i.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:s.members?.length||0}),!0)}catch(v){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:v.message||""}),!1)}}async function N(){if(!$){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let l=new FormData;l.append("file",$);try{let e=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:l})).json().catch(()=>({})),i=document.getElementById("bk2-pack-diff");if(i){i.hidden=!1;let v=[];e.ok?(v.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),v.push(""),v.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&v.push("Skipped "+e.skipped.length+" (see above)")):(v.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),v.push(JSON.stringify(e.errors||e,null,2))),i.textContent=v.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:e.applied}),!0),$=null;let v=document.getElementById("bk2-pack-apply");v&&(v.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:o.message||""}),!1)}}async function f(){let l=document.getElementById("bk2-assets-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(l.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let o=new FormData;o.append("file",l);let e=document.getElementById("bk2-assets-diff"),i=document.getElementById("bk2-assets-apply");try{let v=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:o}),s=await v.json().catch(()=>({}));if(!v.ok||!s.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(s.errors||s,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),i&&(i.disabled=!0),P=null;return}if(e){e.hidden=!1;let r=[],u=s.manifest||{};r.push("manifest version: "+(u.version||"?")),r.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),r.push(""),r.push("Will write "+(s.members?.length||0)+" asset files:"),(s.members||[]).forEach(p=>{r.push("  "+p.path+" ("+(p.size||0)+" B)")}),s.skipped?.length&&(r.push(""),r.push("Skipped "+s.skipped.length+" entries:"),s.skipped.forEach(p=>r.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=r.join(`
`)}P=l,i&&(i.disabled=!1,i.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:s.members?.length||0}),!0)}catch(v){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:v.message||""}),!1)}}async function c(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"danger",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let l=new FormData;l.append("file",P);try{let e=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:l})).json().catch(()=>({})),i=document.getElementById("bk2-assets-diff");if(i){i.hidden=!1;let v=[];e.ok?(v.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),v.push(""),v.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&v.push("Skipped "+e.skipped.length+" (see above)")):(v.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),v.push(JSON.stringify(e.errors||e,null,2))),i.textContent=v.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:e.applied}),!0),P=null;let v=document.getElementById("bk2-assets-apply");v&&(v.disabled=!0),x()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(o){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:o.message||""}),!1)}}function a(){let n=document.querySelector(".admin-dash-grid"),l=document.getElementById(y);if(!n||!l)return;let o=n.dataset.activeLeaf||"dashboard";l.style.display=o==="backup"?"":"none"}function t(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",g()),S(),a())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&t(),a()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",a),document.addEventListener("admin-panel-rendered",()=>{t(),a()}),t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Ot=ye(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",k="/admin/broadcast/status",g="/admin/broadcast/toggle",h={mode:"live"},L=null,U=0;async function C(){try{let a=await fetch(k,{credentials:"same-origin"});if(!a.ok)return;let t=await a.json();t&&(t.mode==="live"||t.mode==="standby")&&(L=t.session||null,h=t)}catch{}try{let a=await fetch("/overlay_status",{credentials:"same-origin"});a.ok&&(U=(await a.json()).overlay_count||0)}catch{}}async function T(a){try{let t=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:a})});if(!t.ok){let d=await t.json().catch(()=>({}));throw new Error(d&&d.error?d.error:`HTTP ${t.status}`)}return h=await t.json(),!0}catch(t){return console.warn("[admin-broadcast] toggle failed:",t),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:t&&t.message||""}),!1),!1}}function m(a,t){return ServerI18n.t(a?"uiDisplayOn":"uiDisplayOff")+" \xB7 "+ServerI18n.t("setupWizardReadyDisplayOk",{n:t})}function M(a){return a?"broadcastBigPause":"broadcastBigResume"}async function F(a){let t=await T(a?"live":"standby");return t&&window.showToast&&window.showToast(ServerI18n.t(a?"broadcastToastResumed":"broadcastToastPaused"),!0),b(),t}async function S(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let t=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});t.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:t.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:F,clearScreen:S,statusText:m,toggleKey:M};function $(){let a=t=>ServerI18n.t(t);return`
      <div id="${y}" class="admin-broadcast-page hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row" role="status" aria-live="polite">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>\u2014</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <button type="button" class="admin-ui-action is-primary admin-bc-v4__big" data-bc-big
                  data-i18n="${M(!1)}">${a(M(!1))}</button>
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
      </div>`}let P=0,w=0;function b(){let a=document.getElementById(y);if(!a)return;let t=h.mode==="live",d=t?"live":"standby",n=(r,u)=>{r&&r.textContent!==u&&(r.textContent=u)};a.dataset.bcState=d;let l=a.querySelector("[data-bc-statedot]");l&&(l.dataset.state=d);let o=a.querySelector("[data-bc-statelabel]");o&&(n(o,m(t,U)),o.dataset.state=d);let e=a.querySelector("[data-bc-big]");e&&(e.dataset.i18n=M(t),n(e,ServerI18n.t(e.dataset.i18n)));let i=L||{},v=!!(i.id||i.name),s=a.querySelector("[data-bc-session-ctx]");s&&(s.hidden=!v),v&&n(a.querySelector("[data-bc-session-id]"),String(i.name||i.id))}function x(){let a=document.getElementById(y);a&&(a.querySelector("[data-bc-big]")?.addEventListener("click",()=>F(h.mode!=="live")),a.querySelector("[data-bc-clear]")?.addEventListener("click",S))}function H(){P||(C().then(b),b(),P=setInterval(()=>{C().then(b)},5e3),w=setInterval(b,1e3))}function B(){P&&(clearInterval(P),P=0),w&&(clearInterval(w),w=0)}function N(){let a=document.querySelector(".admin-dash-grid"),t=document.getElementById(y);if(!a||!t)return;let d=a.dataset.activeLeaf||"dashboard",n=d==="overlay"||d==="broadcast";t.style.display=n?"":"none",n?H():B()}function f(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("afterbegin",$()),x(),N())}function c(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&f(),N()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",N),document.addEventListener("admin-panel-rendered",()=>{f(),N()}),f()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var qt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let h=["keyword","regex","replace","rate_limit"],L=["block","replace","allow","review"],U={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function C(I){var R=y();return R[I]!==void 0?R[I]:!1}function T(I,R){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(I);if(j&&j!==I)return j}return R||I}let m={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},M={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function F(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"review"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(I=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${I.id}" data-flt-pattern="${I.pattern}" data-flt-action="${I.action}" data-flt-label="${I.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${I.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${I.id}">\u2014</span>
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${T("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${T("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${T("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${T("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${T("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${T("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${T("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let S="all";function $(I){let R=m[I.type]||"is-default",j=M[I.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},K=ServerI18n.t(J[I.type]||"ulWord"),G=I.pattern;if(I.type==="replace"&&I.replacement!==void 0&&(G=`${I.pattern}  \u2192  ${I.replacement}`),I.type==="rate_limit"){let z=I.max_count||5,X=I.window_sec||60;G=`${I.pattern}  \xB7  ${z}/${X}s`}let te=I.enabled?"":"opacity:0.45;",ne=U[I.action]?ServerI18n.t(U[I.action]):I.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${te}" data-rule-id="${g(I.id)}" data-rule-type="${g(I.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(G)}</span>
        <span class="hud-pill ${R}">${K}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content">${g(ne)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(I.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(I.enabled?T("enabled","Enabled"):T("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(I.id)}" ${I.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${I.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(I.id)}" title="${T("deleteRule","Delete")}" aria-label="${T("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function P(I){let R={all:I.length,keyword:0,regex:0,replace:0,rate_limit:0};I.forEach(J=>{R[J.type]!=null&&R[J.type]++}),Object.keys(R).forEach(J=>{let K=document.querySelector(`[data-filter-count="${J}"]`);K&&(K.textContent=R[J])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=R.all)}async function w(){let I=document.querySelector('[data-mod-stat="blacklist"]');if(I)try{let R=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!R.ok)return;let j=await R.json(),J=Array.isArray(j)?j:j.keywords||[];I.textContent=String(J.length)}catch{}}async function b(){try{let I=await csrfFetch("/admin/filters/list");if(!I.ok)throw new Error("HTTP "+I.status);return(await I.json()).rules||[]}catch(I){return console.error("Failed to fetch filter rules:",I),showToast(T("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function x(){let I=document.getElementById("filterRulesList");if(!I)return;I.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${T("loading","Loading...")}</div>`;let R=await b();if(P(R),w(),R.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),I.innerHTML="",I.appendChild(J)}else I.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${T("noFilterRules","No filter rules configured.")}</div>`;return}let j=S==="all"?R:R.filter(J=>J.type===S);I.innerHTML=j.map($).join("")}async function H(){let I=document.getElementById("filterType"),R=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),K=document.getElementById("filterPriority"),G=document.getElementById("filterMaxCount"),te=document.getElementById("filterWindowSec"),ne=I.value,z=(j.value||"").trim();if(!z){showToast(T("patternRequired","Pattern is required"),!1),j.focus();return}let X={type:ne,pattern:z,action:R.value,priority:parseInt(K.value,10)||0};ne==="replace"&&(X.replacement=J.value||""),ne==="rate_limit"&&(X.max_count=parseInt(G.value,10)||5,X.window_sec=parseFloat(te.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),se=await Z.json();if(!Z.ok){showToast(se.error||T("addRuleFailed","Failed to add rule"),!1);return}showToast(T("ruleAdded","Rule added"),!0),j.value="",J.value="",await x()}catch(Z){console.error("Add filter rule error:",Z),showToast(T("addRuleFailed","Failed to add rule"),!1)}}async function B(I){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:T("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:I})}),J=await j.json();if(!j.ok){showToast(J.error||T("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(T("ruleDeleted","Rule deleted"),!0),await x()}catch(j){console.error("Delete filter rule error:",j),showToast(T("deleteRuleFailed","Failed to delete rule"),!1)}}async function N(I,R){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:I,updates:{enabled:R}})}),J=await j.json();if(!j.ok){showToast(J.error||T("updateRuleFailed","Failed to update rule"),!1),await x();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(T("updateRuleFailed","Failed to update rule"),!1),await x()}}async function f(){let I=document.getElementById("filterTestText"),R=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),J=document.getElementById("filterAction"),K=document.getElementById("filterPattern"),G=document.getElementById("filterReplacement"),te=document.getElementById("filterMaxCount"),ne=document.getElementById("filterWindowSec"),z=(I.value||"").trim();if(!z){showToast(T("sampleTextRequired","Enter sample text to test"),!1),I.focus();return}let X=(K.value||"").trim();if(!X){showToast(T("patternRequired","Pattern is required"),!1),K.focus();return}let Z=j.value,se={type:Z,pattern:X,action:J.value};Z==="replace"&&(se.replacement=G.value||""),Z==="rate_limit"&&(se.max_count=parseInt(te.value,10)||5,se.window_sec=parseFloat(ne.value)||60),R.innerHTML=`<span style="color:var(--color-text-muted)">${T("testing","Testing...")}</span>`;try{let ie=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:z})}),le=await ie.json();if(!ie.ok){R.innerHTML=`<span style="color: var(--color-ink-error)">${g(le.error||"Test failed")}</span>`;return}let ue="";le.action==="block"?ue=`<span style="color: var(--color-ink-error);font-weight:600">${T("blocked","BLOCKED")}</span>`:le.action==="replace"?ue=`<span style="color: var(--color-ink-warning);font-weight:600">${T("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(le.text)}</span>`:le.action==="allow"?ue=`<span style="color: var(--color-ink-success);font-weight:600">${T("allowed","ALLOWED")}</span>`:le.action==="review"?ue=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:ue=`<span style="color:var(--color-text-muted)">${T("noMatch","No match (pass)")}</span>`,le.reason&&(ue+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(le.reason)}</span>`),R.innerHTML=ue}catch(ie){console.error("Test filter rule error:",ie),R.innerHTML=`<span style="color: var(--color-ink-error)">${T("testError","Test error")}</span>`}}function c(){let I=document.getElementById("filterType"),R=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!I)return;let J=I.value;R&&(R.style.display=J==="replace"?"":"none"),j&&(j.style.display=J==="rate_limit"?"grid":"none")}function a(){let I=document.getElementById("filterTypeChips");I&&I.addEventListener("click",R=>{let j=R.target.closest(".hud-filter-chip");j&&(S=j.dataset.filterScope||"all",I.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===S)}),x())})}let t=6,d=[],n=!1,l=0,o=0;function e(I){let R=new Date(I*1e3),j=J=>String(J).padStart(2,"0");return`${j(R.getHours())}:${j(R.getMinutes())}:${j(R.getSeconds())}`}function i(I){let R=(I||"").toUpperCase();return R==="BLOCK"?"var(--hud-crimson)":R==="MASK"||R==="REPLACE"?"var(--hud-amber)":R==="REVIEW"?"var(--color-primary)":R==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function v(){let I=document.getElementById("filterLiveLog");if(I){if(d.length===0){I.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}I.innerHTML=d.map(R=>{let j=e(R.ts),J=(R.action||"").toUpperCase(),K=i(J),G=(R.text_excerpt||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),te=(R.pattern||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),ne=(R.source||"").slice(0,16),z=ne?`\xB7 ${ne}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${K}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${G}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${te} ${z}</span></span>
      </div>`}).join("")}}async function s(){try{let I=await fetch(`/admin/filters/events?since=${o}`,{credentials:"same-origin"});if(!I.ok)return;let R=await I.json();if(R.counts_24h){let j=(J,K)=>{let G=document.querySelector(`[data-mod-stat="${J}"]`);G&&(G.textContent=K!=null?String(K):"\u2014")};j("masked",R.counts_24h.MASK||0),j("blocked",R.counts_24h.BLOCK||0)}if(!Array.isArray(R.events)||R.events.length===0)return;for(d.unshift(...R.events);d.length>t;)d.pop();o=R.latest_seq||o,document.getElementById("filterLiveLog")&&v()}catch{}}function r(){n||(n=!0,s(),l=setInterval(s,4e3))}let u=Object.create(null),p="[QUICK]";function A(I,R){return I.find(j=>(j.name||"").startsWith(p+" "+R))}async function E(){let I=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(R=>{let j=R.dataset.fltLabel,J=A(I,j),K=!!J&&J.enabled!==!1;R.classList.toggle("is-active",K),J?u[R.dataset.fltQuickId]=J.id||J.rule_id:delete u[R.dataset.fltQuickId]})}async function _(I){let R=I.dataset.fltQuickId,j=I.dataset.fltPattern,J=I.dataset.fltAction,K=I.dataset.fltLabel,G=u[R];if(G)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G})})).ok?(delete u[R],I.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:K}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let te=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${p} ${K}`,pattern:j,action:J,enabled:!0,priority:50})});if(te.ok){let ne=await te.json().catch(()=>({}));ne.rule_id&&(u[R]=ne.rule_id),I.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:K}),!0)}else{let ne=await te.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:ne.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function D(){let I=document.querySelector("[data-flt-quick]");I&&(I.addEventListener("click",R=>{let j=R.target.closest(".admin-flt-v4__qchip");j&&_(j)}),E())}function O(){let I=document.getElementById("settings-grid");if(!I)return;I.insertAdjacentHTML("beforeend",F()),a(),D();let R=document.getElementById("filterType");R&&R.addEventListener("change",c);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",H);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",f);let K=document.getElementById("filterTestText");K&&K.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),f())});let G=document.getElementById("filterPattern");G&&G.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),H())});let te=document.getElementById("filterRulesList");te&&(te.addEventListener("change",ne=>{let z=ne.target.closest(".filter-toggle-cb");if(!z)return;N(z.dataset.ruleId,z.checked);let X=z.closest(".hud-rule-row"),Z=X?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",z.checked),Z.classList.toggle("is-off",!z.checked)),X&&(X.style.opacity=z.checked?"":"0.45")}),te.addEventListener("click",ne=>{let z=ne.target.closest(".filter-delete-btn");z&&B(z.dataset.ruleId)})),x(),r(),v()}function W(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W()})()});var Ht=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,h=1e4,L=null;function U(b){var x=y();return x[b]!==void 0?x[b]:!1}function C(){return`
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
    `}function T(b){var x=ServerI18n.t("fingerprintState_"+b),H="";return b==="blocked"?H=" is-crimson":b==="flagged"?H=" is-amber":b==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+g(x)+"</span>"}function m(b){if(!b)return"\u2014";try{var x=new Date(b*1e3);return x.toLocaleTimeString()}catch{return String(b)}}function M(b){var x=document.getElementById("adminFingerprintTableWrap");if(x){if(!b||b.length===0){x.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",x.appendChild(H);return}var B='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",N=b.map(function(f){var c=f.blocked|0,a=f.hash||"",t=a.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(a)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(a)+'">fp:'+g(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(f.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(f.ua||"")+'">'+g(f.ua||"\u2014")+'</span><span class="admin-fp-num">'+(f.msgs|0)+'</span><span class="admin-fp-num">'+(f.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+T(f.state||"active")+'</span><span class="admin-fp-ts">'+g(m(f.last_seen))+"</span></div>"}).join("");x.innerHTML=B+N}}async function F(){var b=document.getElementById("adminFingerprintCount");try{var x=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!x.ok)throw new Error("HTTP "+x.status);var H=await x.json(),B=H.records||[];if(M(B),b){var N=H.count||B.length,f=H.flagged!=null?H.flagged:B.filter(function(a){return a.state==="flagged"||a.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:N,flagged:f})}}catch(a){console.error("[admin-fingerprints] fetch failed:",a);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function S(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var x=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(x.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await F();else{var H=await x.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(B){console.error("[admin-fingerprints] reset error:",B),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function $(){P(),L=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&F()},h)}function P(){L&&(clearInterval(L),L=null)}function w(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",C());var x=document.getElementById("adminFingerprintRefreshBtn");x&&x.addEventListener("click",F);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",S),F(),$()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&w()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var x=document.getElementById("moderation-grid")||document.getElementById("settings-grid");x&&!document.getElementById("sec-fingerprints")&&w()}})})()});var jt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let k=(e,i)=>{let v=window.ServerI18n?.t?.(e);return v&&v!==e?v:i||e},g=!1;new MutationObserver(()=>{let e=document.getElementById("settings-grid");if(e&&!(document.getElementById("sec-widgets")||g)){g=!0;try{L(e)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function L(e){let i=document.createElement("div");i.id="sec-widgets",i.className="admin-widgets-page hud-page-stack lg:col-span-2";let v=location.origin+"/overlay";i.dataset.tpl="B",i.innerHTML=`
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${y(k("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${y(k("widgetsDesc"))}</p>
          <!-- \u8A2D\u8A08\u7A3F 08 \xB7 W1\uFF1A\u4E3B\u8981\u52D5\u4F5C\u5728\u9801\u9996\u53F3\u5074\u3002\u9801\u9996\u5728\u6A19\u984C\u8207\u8DEF\u7531\u540C\u540D\u6642\u6703\u88AB
               \u4F75\u9032 topbar\uFF0Cshell \u7684 [data-route-action] \u63D2\u69FD\u6703\u628A\u9019\u4E00\u584A\u63A5\u904E\u53BB
               \uFF08\u898B admin.js \u7684 _dedupSectionTitles\uFF09\u3002 -->
          <div class="admin-ui-page-actions admin-ow-addrow">
            <button id="widget-add" type="button" class="admin-ui-action is-primary">
              ${y(k("widgetsAddBtn"))}
            </button>
            <div class="admin-ow-addmenu" data-ow-addmenu hidden>
              <button type="button" data-ow-add="scoreboard">${y(k("widgetScoreboard"))}</button>
              <button type="button" data-ow-add="ticker">${y(k("widgetTicker"))}</button>
              <button type="button" data-ow-add="label">${y(k("widgetLabel"))}</button>
            </div>
          </div>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${y(k("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(k("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${y(k("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${y(k("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${y(k("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${y(v)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(k("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(k("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,e.appendChild(i);let s=document.getElementById("widget-add"),r=i.querySelector("[data-ow-addmenu]");s.addEventListener("click",u=>{u.stopPropagation(),r.hidden=!r.hidden}),r.addEventListener("click",u=>{let p=u.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(r.hidden=!0,T(p))}),document.addEventListener("click",u=>{!r.hidden&&!u.target.closest(".admin-ui-page-actions")&&(r.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",S),i.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=i.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),C()}async function U(e,i="GET",v=null){let s={method:i,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(v){let u=document.querySelector('meta[name="csrf-token"]');u&&(s.headers["X-CSRF-Token"]=u.content),s.body=JSON.stringify(v)}return(await fetch("/admin/widgets/"+e,s)).json()}async function C(){try{let e=await U("list");P(e.widgets||[])}catch(e){console.error("[admin-widgets] Load failed:",e)}}async function T(e){let i={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await U("create","POST",{type:e,config:i[e]||{}}),C()}catch(v){console.error("[admin-widgets] Create failed:",v)}}async function m(e){let i=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:i,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await U("delete","POST",{id:e}),C()}catch(s){console.error("[admin-widgets] Delete failed:",s)}}async function M(e,i){try{await U("update","POST",{id:e,config:i}),C()}catch(v){console.error("[admin-widgets] Update failed:",v)}}async function F(e,i,v){try{await U("score","POST",{id:e,team_index:i,delta:v}),C()}catch(s){console.error("[admin-widgets] Score update failed:",s)}}async function S(){let e=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:e,confirmLabel:ServerI18n.t("clearAll")}))try{await U("clear","POST",{}),C()}catch(v){console.error("[admin-widgets] Clear failed:",v)}}let $=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(e){let i=document.getElementById("widgets-list");if(i){if(i.innerHTML="",a(e),e.length===0){let v=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});v.dataset.emptyKind="widgets",i.appendChild(v);return}e.forEach(v=>{i.appendChild(B(v))})}}let w={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(e){return k("widgetPos_"+String(e||"top-left").replace("-","_"),e||"")}function x(e){let i=e.config||{},v="";e.type==="scoreboard"?v=(i.teams||[]).map(r=>`${r.name} ${r.score}`).join(" \xB7 "):e.type==="ticker"?(v=(i.messages||[])[0]||"",v&&(v=`\u300C${v}\u300D`)):e.type==="label"&&(v=i.text?`\u300C${i.text}\u300D`:"");let s=b(e.position);return v?`${v} \xB7 ${s}`:s}function H(e){return e==="scoreboard"?k("widgetScoreboard"):e==="ticker"?k("widgetTicker"):e==="label"?k("widgetLabel"):e}function B(e){let i=document.createElement("div");i.className="admin-widget-card",e.visible!==!1&&i.classList.add("is-on");let v=document.createElement("button");v.type="button",v.className="admin-widget-summary",v.setAttribute("aria-expanded","false"),v.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(w[e.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(H(e.type))+'</span><span class="admin-widget-summary-text">'+y(x(e))+"</span>"+(e.visible===!1?'<span class="admin-widget-summary-off">'+y(k("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',i.appendChild(v);let s=document.createElement("div");s.className="admin-widget-card-body",s.hidden=!0,v.addEventListener("click",()=>{s.hidden=!s.hidden,v.setAttribute("aria-expanded",s.hidden?"false":"true"),i.classList.toggle("is-open",!s.hidden)});let r=o(k("widgetPosition"),$,e.position,E=>M(e.id,{position:E}));s.appendChild(r),e.type==="scoreboard"?t(s,e):e.type==="ticker"?d(s,e):e.type==="label"&&n(s,e);let u=document.createElement("div");u.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=e.visible?k("widgetHide"):k("widgetShow"),p.addEventListener("click",()=>M(e.id,{visible:!e.visible})),u.appendChild(p);let A=document.createElement("button");return A.type="button",A.className="admin-ui-action is-danger admin-widget-card-action",A.textContent=k("remove"),A.addEventListener("click",()=>m(e.id)),u.appendChild(A),s.appendChild(u),i.appendChild(s),i}let N={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function f(e,i){let v="top-left",s=1/0;for(let[r,[u,p]]of Object.entries(N)){let A=e-u/2,E=i-p/2,_=A*A+E*E;_<s&&(s=_,v=r)}return v}function c(e){let i=e.config||{};return e.type==="scoreboard"?(i.teams||[]).map(v=>`${v.name} ${v.score}`).join("  ")||k("widgetScoreboard"):e.type==="ticker"?(i.messages||[])[0]||k("widgetTicker"):e.type==="label"?i.text||k("widgetLabel"):e.type}function a(e){let i=document.querySelector("[data-ow-stage]");if(i){if(i.innerHTML="",!e.length){i.innerHTML='<span class="admin-ow-stage-empty">'+y(k("widgetsStageEmpty"))+"</span>";return}e.forEach(v=>{let s=document.createElement("div");s.className="admin-ow-box is-"+(v.position||"top-left"),v.visible===!1&&s.classList.add("is-off"),s.dataset.owBox=v.id,s.draggable=!0,s.textContent=c(v),s.title=H(v.type),s.addEventListener("dragend",r=>{let u=i.getBoundingClientRect();if(!u.width||!u.height)return;let p=(r.clientX-u.left)/u.width,A=(r.clientY-u.top)/u.height;if(p<0||p>1||A<0||A>1)return;let E=f(p,A);E!==v.position&&M(v.id,{position:E})}),i.appendChild(s)})}}function t(e,i){let v=i.config||{},s=l(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",v.title||"",r=>M(i.id,{title:r}));e.appendChild(s),(v.teams||[]).forEach((r,u)=>{let p=document.createElement("div");p.className="admin-widget-team";let A=document.createElement("input");A.type="color",A.value=r.color||"#38bdf8",A.className="admin-widget-team-color",A.addEventListener("change",()=>{let W=[...v.teams];W[u]={...W[u],color:A.value},M(i.id,{teams:W})}),p.appendChild(A);let E=document.createElement("input");E.type="text",E.value=r.name,E.className="admin-widget-input",E.addEventListener("change",()=>{let W=[...v.teams];W[u]={...W[u],name:E.value},M(i.id,{teams:W})}),p.appendChild(E);let _=document.createElement("span");_.className="admin-widget-team-score",_.textContent=r.score,p.appendChild(_);let D=document.createElement("button");D.type="button",D.className="admin-widget-step",D.textContent="\u2212",D.addEventListener("click",()=>F(i.id,u,-1)),p.appendChild(D);let O=document.createElement("button");O.type="button",O.className="admin-widget-step",O.textContent="+",O.addEventListener("click",()=>F(i.id,u,1)),p.appendChild(O),e.appendChild(p)})}function d(e,i){let v=i.config||{},s=document.createElement("div");s.className="admin-widget-row";let r=document.createElement("span");r.className="lbl",r.textContent=window.ServerI18n?.t?.("speed")||"SPEED",s.appendChild(r);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=v.speed||60,u.style.flex="1",u.addEventListener("change",()=>{M(i.id,{speed:parseInt(u.value)})}),s.appendChild(u);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=u.value,u.addEventListener("input",()=>{p.textContent=u.value}),s.appendChild(p),e.appendChild(s);let A=document.createElement("div");A.className="admin-widget-row",A.style.alignItems="flex-start";let E=document.createElement("span");E.className="lbl",E.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",A.appendChild(E);let _=document.createElement("textarea");_.className="admin-widget-textarea",_.value=(v.messages||[]).join(`
`),_.rows=3,_.placeholder=ServerI18n.t("widgetTickerPlaceholder"),_.addEventListener("change",()=>{let D=_.value.split(`
`).filter(O=>O.trim());M(i.id,{messages:D})}),A.appendChild(_),e.appendChild(A)}function n(e,i){let v=i.config||{};e.appendChild(l(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",v.text||"",s=>M(i.id,{text:s}))),e.appendChild(l(window.ServerI18n?.t?.("size")||"SIZE",String(v.fontSize||24),s=>M(i.id,{fontSize:parseInt(s)||24}),"number"))}function l(e,i,v,s="text"){let r=document.createElement("div");r.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,r.appendChild(u);let p=document.createElement("input");return p.type=s,p.value=i,p.className="admin-widget-input",p.addEventListener("change",()=>v(p.value)),r.appendChild(p),r}function o(e,i,v,s){let r=document.createElement("div");r.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,r.appendChild(u);let p=document.createElement("select");return p.className="admin-widget-select",i.forEach(A=>{let E=document.createElement("option");E.value=A,E.textContent=A,A===v&&(E.selected=!0),p.appendChild(E)}),p.addEventListener("change",()=>s(p.value)),r.appendChild(p),r}})})()});var Ut=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function k(){let I=window.ADMIN_ROUTES||{},R={};return y.forEach(j=>{let J=I[j];J&&J.title&&(R[j]={title:J.title,kicker:J.kicker||j.toUpperCase()})}),R}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],h=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function L(){let I=document.querySelector('meta[name="csrf-token"]');return I&&I.content||""}function U(I,R){if(typeof window.csrfFetch=="function")return window.csrfFetch(I,R);let j=Object.assign({credentials:"same-origin"},R||{}),J=new Headers(R&&R.headers||{});return J.set("X-CSRF-Token",L()),j.headers=J,fetch(I,j)}function C(I,R){typeof window.showToast=="function"&&window.showToast(I,R!==!1)}let T=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>U("/effects/reload",{method:"POST"}).then(I=>C(I.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),I.ok)).catch(()=>C(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>U("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(I=>C(I.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),I.ok)).catch(()=>C(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>U("/admin/poll/reset",{method:"POST"}).then(I=>C(I.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),I.ok)).catch(()=>C(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return U("/admin/history/clear",{method:"POST"}).then(R=>C(R.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),R.ok)).catch(()=>C(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,M=null,F=null,S="",$=[],P=[],w=0,b=null,x=null,H=null,B=15e3;function N(I){return String(I??"").replace(/[&<>"']/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[R])}function f(I,R){if(!R)return 0;let j=String(I||"").toLowerCase(),J=R.toLowerCase(),K=0,G=0,te=0,ne=0;for(;K<j.length&&G<J.length;)j[K]===J[G]?(G++,ne++,te+=2+ne):ne=0,K++;return G<J.length?-1:(j.startsWith(J)&&(te+=10),te)}function c(){let I=document.createElement("div");I.className="admin-cmdk",I.setAttribute("hidden",""),I.setAttribute("aria-hidden","true"),I.innerHTML=`
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
    `,document.body.appendChild(I),m=I,M=I.querySelector(".admin-cmdk-input"),F=I.querySelector(".admin-cmdk-list"),I.addEventListener("click",R=>{R.target.matches("[data-cmdk-close]")&&O()}),M.addEventListener("input",R=>{S=R.target.value,A()}),M.addEventListener("keydown",a),F.addEventListener("click",R=>{let j=R.target.closest("[data-cmdk-idx]");j&&(w=parseInt(j.dataset.cmdkIdx,10)||0,d())})}function a(I){if(I.key==="Escape"){I.preventDefault(),O();return}if(I.key==="ArrowDown"){I.preventDefault(),t(1);return}if(I.key==="ArrowUp"){I.preventDefault(),t(-1);return}if(I.key==="Enter"){I.preventDefault(),d();return}}function t(I){if(!$.length)return;w=(w+I+$.length)%$.length,_();let R=F.querySelector(`[data-cmdk-idx="${w}"]`);R&&R.scrollIntoView({block:"nearest"})}function d(){let I=$[w];if(I){if(I.type==="route")window.location.hash="#/"+I.route,O();else if(I.type==="setting")I.tab&&(document.body.dataset.viewerConfigTab=I.tab),window.location.hash="#/"+I.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let R=document.getElementById(I.section);R&&(R.scrollIntoView({behavior:"smooth",block:"start"}),R.tagName==="DETAILS"&&!R.open&&(R.open=!0))},80),O();else if(I.type==="message")window.location.hash="#/messages",O();else if(I.type==="user")window.location.hash="#/system",setTimeout(()=>{let R=document.getElementById("sec-fingerprints");R&&R.scrollIntoView({behavior:"smooth",block:"start"})},80),O();else if(I.type==="theme")U("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I.id})}).then(R=>{R.ok?(C(ServerI18n.t("cmdkThemeApplied",{name:I.label}),!0),H=null):C(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>C(ServerI18n.t("cmdkThemeApplyFailed"),!1)),O();else if(I.type==="action"){try{let R=I.action&&I.action();R&&typeof R.then=="function"&&R.catch(()=>{})}catch{}O()}}}let n={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function l(I){return Object.entries(k()).map(([R,j])=>{let J=Math.max(f(j.title,I),f(R,I)),K=n[R];return{type:"route",route:R,label:j.title,sub:K?ServerI18n.t(K):"",icon:"\u25C7",score:J}}).filter(R=>R.score>=0)}function o(I){let R=k()[I];return R?R.title:""}function e(I){return g.map(R=>{let j=R.labelKey?ServerI18n.t(R.labelKey):R.label;return{type:"setting",route:R.route,tab:R.tab,section:R.section,label:o(R.route)?`${o(R.route)} \u203A ${j}`:j,sub:"",icon:"\u2699",score:f(j,I)}}).filter(R=>R.score>=0)}function i(I){return b?(b.records||[]).map(j=>{let J=j.text||j.message||"",K=j.nickname||j.user||"guest",G=(j.timestamp||"").slice(11,19)||"\u2014",te=(j.fingerprint||j.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${K}`,sub:te?`${G} \xB7 fp:${te}`:G,icon:"\u{1F4AC}",score:Math.max(f(J,I),f(K,I))}}).filter(j=>j.score>=0):[]}function v(I){if(!H)return[];let R=H.records||[],j=H.active||"";return R.map(J=>{let K=J.label||J.display_name||J.name||"",G=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),te=J.name===j;return{type:"theme",id:J.name,label:te?ServerI18n.t("cmdkThemeActive",{name:K}):K,sub:G,icon:"\u{1F3A8}",score:Math.max(f(K,I),f(J.name||"",I),f(G,I))}}).filter(J=>J.score>=0)}function s(I){return T.map(R=>{let j=ServerI18n.t(R.labelKey),J=R.subKey?ServerI18n.t(R.subKey):R.sub;return{type:"action",id:R.id,label:j,sub:J,icon:"\u26A1",action:R.action,score:Math.max(f(j,I),f(R.id,I),f(J,I))}}).filter(R=>R.score>=0)}function r(I){return x?(x.records||[]).map(j=>{let J=j.fingerprint||j.fp||j.id||"",K=j.ip||j.last_ip||"",G=j.nickname||"";return{type:"user",label:G?`@${G}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${K||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(f(J,I),f(K,I),f(G,I))}}).filter(j=>j.score>=0):[]}async function u(){let I=Date.now(),R=[];(!b||I-b.at>B)&&R.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{b={at:I,records:j&&j.records||[]}}).catch(()=>{b={at:I,records:[]}})),(!x||I-x.at>B)&&R.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{x={at:I,records:j&&j.records||[]}}).catch(()=>{x={at:I,records:[]}})),(!H||I-H.at>B)&&R.push(fetch("/admin/themes",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{H={at:I,records:j&&j.themes||[],active:j&&j.active||""}}).catch(()=>{H={at:I,records:[],active:""}})),R.length&&await Promise.all(R)}let p={actions:5,pages:5,messages:4};async function A(){await u();let I=S.trim(),R={action:s(I),route:l(I),setting:e(I),theme:v(I),message:i(I),user:r(I)};$=[],P=[],h.forEach(j=>{let J=j.types.reduce((K,G)=>K.concat(R[G]||[]),[]).sort((K,G)=>G.score-K.score).slice(0,p[j.id]||5);J.length&&(P.push({id:j.id,labelKey:j.labelKey,from:$.length,count:J.length}),$=$.concat(J))}),w=0,_()}function E(I){return I.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[I.type]||"\xB7"}function _(){if(!$.length){F.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let I=[];P.forEach(R=>{I.push(`<li class="admin-cmdk-group" role="presentation">${N(ServerI18n.t(R.labelKey))}</li>`);for(let j=R.from;j<R.from+R.count;j++){let J=$[j],K=j===w;I.push(`
        <li class="admin-cmdk-row ${K?"is-active":""}"
            data-cmdk-idx="${j}" role="option" aria-selected="${K}">
          <span class="admin-cmdk-icon" aria-hidden="true">${N(E(J))}</span>
          <span class="admin-cmdk-label">${N(J.label)}</span>
          <span class="admin-cmdk-sub">${N(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${K?"\u21B5":""}</span>
        </li>`)}}),F.innerHTML=I.join("")}function D(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),S="",M.value="",A(),setTimeout(()=>M.focus(),20)}function O(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function W(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:D,close:O,isOpen:W,toggle:()=>W()?O():D()}})()});var Kt=ye(()=>{(function(){"use strict";let y="sec-sessions-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function h(c){if(c=Number(c)||0,c<=0)return"\u2014";var a=Math.floor(c/3600),t=Math.floor(c%3600/60),d=c%60;return a>0?a+"h "+t+"m":t>0?t+"m":d+"s"}function L(c){if(!c)return"\u2014";try{var a=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return a.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function U(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function C(){return'<div class="admin-sessions-th"><span>'+k(ServerI18n.t("sessionsColSession"))+"</span><span>"+k(ServerI18n.t("sessionsColMessages"))+"</span><span>"+k(ServerI18n.t("sessionsColViewers"))+"</span><span>"+k(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function T(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var a=window.AdminEmpty.render("sessions");a.dataset.emptyKind="sessions",c.appendChild(a);return}var t=g.sessions.map(function(d){var n=k(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+n+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+k(T(d))+'<span class="admin-sessions-td-sub">'+k(L(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+k(h(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+n+'">'+k(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=C()+t}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function F(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var a=g.sessions.find(function(d){return d.id===g.exportId});if(!a){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var t=M.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===g.exportFormat?"true":"false")+'">'+k(ServerI18n.t(d.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+k(ServerI18n.t("sessionsExportTitle",{name:T(a)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+k(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+k(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+k(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+k(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+k(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function S(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),a=document.createElement("a");a.href=c,a.rel="noopener",document.body.appendChild(a),a.click(),a.remove()}}async function $(){var c=g.exportId;if(c)try{var a=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!a.ok)throw new Error("HTTP "+a.status);var t=await a.json(),d=(t.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var n=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(n.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!n.ok)throw new Error("HTTP "+n.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),F()}async function w(){g.loading=!0,m();try{var[c,a]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],d=[];if(c.ok){var n=await c.json();t=Array.isArray(n.sessions)?n.sessions:[],t.forEach(function(r){r._explicit=!0})}if(a.ok){var l=await a.json();d=Array.isArray(l.sessions)?l.sessions:[]}var o=t.slice(),e=new Set(t.map(function(r){return r.id}));d.forEach(function(r){e.has(r.id)||o.push(r)}),o.sort(function(r,u){var p=typeof r.started_at=="number"?r.started_at:Date.parse(r.started_at||0),A=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return A-p});try{var i=await fetch("/admin/session/current",{credentials:"same-origin"});if(i.ok){var v=await i.json();if(v.status==="live"){var s=Object.assign({},v,{id:v.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});o.unshift(s)}}}catch{}g.sessions=o,g.total=o.length}catch(r){console.error("[admin-sessions] fetch error:",r),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:r.message||""}),!1)}finally{g.loading=!1,P()}}function b(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function x(c){g.exportId=c,F();var a=document.querySelector("[data-sessions-export]");a&&a.scrollIntoView({block:"nearest"})}function H(){var c=document.getElementById(y);c&&(c.addEventListener("click",function(a){var t=a.target.closest("[data-sessions-export-open]");if(t){a.stopPropagation(),x(t.dataset.sessionsExportOpen);return}if(a.target.closest("[data-sessions-export-close]")){g.exportId=null,F();return}var d=a.target.closest("[data-sessions-export-fmt]");if(d){g.exportFormat=d.dataset.sessionsExportFmt,F();return}if(a.target.closest("[data-sessions-replay]")){$();return}if(a.target.closest("[data-sessions-download]")){S();return}var n=a.target.closest(".admin-sessions-tr");n&&b(n.dataset.sessionId||null)}),c.addEventListener("change",function(a){var t=a.target.closest("[data-sessions-export-pii]");t&&(g.exportPii=!!t.checked)}),c.addEventListener("keydown",function(a){if(!(a.key!=="Enter"&&a.key!==" ")){var t=a.target.closest(".admin-sessions-tr");t&&(a.preventDefault(),b(t.dataset.sessionId||null))}}))}function B(){var c=document.querySelector(".admin-dash-grid"),a=document.getElementById(y);if(!(!c||!a)){var t=c.dataset.activeLeaf||"dashboard";a.style.display=t==="sessions"?"":"none"}}function N(){var c=document.getElementById("settings-grid");!c||document.getElementById(y)||(c.insertAdjacentHTML("beforeend",U()),H(),w(),B())}function f(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N(),B()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",function(){N(),B()}),N()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var Wt=ye(()=>{(function(){"use strict";let y="sec-session-detail-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(E){return String(E).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},h=!1,L={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function U(){let E=window.location.hash||"",_=E.indexOf("?");if(_===-1)return null;let D=E.slice(_+1);return new URLSearchParams(D).get("id")||null}function C(E){if(!E)return"\u2014";try{let _=new Date(E);if(isNaN(_.getTime()))return String(E);let D=O=>String(O).padStart(2,"0");return`${_.getFullYear()}-${D(_.getMonth()+1)}-${D(_.getDate())} ${D(_.getHours())}:${D(_.getMinutes())}:${D(_.getSeconds())}`}catch{return String(E)}}function T(E){if(!E||E<0)return"\u2014";let _=Math.round(Number(E)),D=Math.floor(_/3600),O=Math.floor(_%3600/60),W=_%60;return D>0?`${D}h ${O}m ${W}s`:O>0?`${O}m ${W}s`:`${W}s`}function m(E,_){if(!E||!_)return"";try{let D=Math.max(0,Math.round((new Date(E)-new Date(_))/1e3)),O=Math.floor(D/60),W=D%60;return`+${String(O).padStart(2,"0")}:${String(W).padStart(2,"0")}`}catch{return""}}function M(E){let _=Number(E);return isNaN(_)?"\u2014":_.toLocaleString()}function F(E){if(!E)return"#64748b";let _=0;for(let O=0;O<E.length;O++)_=_*31+E.charCodeAt(O)>>>0;return`hsl(${_%360}, 60%, 60%)`}function S(){return`
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
    `}async function $(E){if(!E){B(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let _=await fetch(`/admin/sessions/${encodeURIComponent(E)}`,{credentials:"same-origin"});if(_.status===404&&(_=await fetch(`/admin/session/archive/${encodeURIComponent(E)}`,{credentials:"same-origin"})),!_.ok)throw new Error(`HTTP ${_.status}`);let D=await _.json();g.session=D.session||null,g.records=D.records||[],g.density=D.density||[],H(!1),N(),P()}catch(_){H(!1),B(ServerI18n.t("sessionDetailErrLoadFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(g.sessionId)try{let E=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!E.ok)return;let _=await E.json();g.annotations=Array.isArray(_.annotations)?_.annotations:[],n()}catch{}}function w(){let E=g.session;if(!E)return 0;if(E.duration_s)return Math.round(E.duration_s*1e3);if(E.duration)return Math.round(E.duration*1e3);let _=E.started_at||E.start_time,D=E.ended_at||E.end_time;if(_&&D)try{return Math.max(0,new Date(D)-new Date(_))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function b(E){let _=Date.parse(E||0);if(Number.isNaN(_))return"\u2014";let D=new Date(_),O=W=>String(W).padStart(2,"0");return`${O(D.getHours())}:${O(D.getMinutes())}:${O(D.getSeconds())}`}function x(E){let _=Math.floor(E/1e3),D=Math.floor(_/3600),O=Math.floor(_%3600/60),W=_%60,I=R=>String(R).padStart(2,"0");return D>0?`${I(D)}:${I(O)}:${I(W)}`:`${I(O)}:${I(W)}`}function H(E){g.loading=E;let _=document.querySelector("[data-sd-loading]"),D=document.querySelector("[data-sd-error]");_&&(_.hidden=!E),D&&E&&(D.hidden=!0);let O=document.querySelector("[data-sd-timeline-wrap]");if(O&&window.AdminSkeletons){let W=O.querySelector("[data-sd-timeline-skel]");E?(O.hidden=!1,W||(W=window.AdminSkeletons.chart(),W.setAttribute("data-sd-timeline-skel","1"),O.appendChild(W))):W&&W.remove()}}function B(E){g.error=E;let _=document.querySelector("[data-sd-error]"),D=document.querySelector("[data-sd-error-msg]");_&&(_.hidden=!1),D&&(D.textContent=E),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(O){let W=document.querySelector(`[${O}]`);W&&(W.hidden=!0)})}function N(){f(),c(),a(),d(),n();let E=document.querySelector("[data-sd-error]");E&&(E.hidden=!0)}function f(){let E=g.session,_=document.querySelector("[data-sd-session-header]");if(!_)return;_.hidden=!1;let D=document.querySelector("[data-sd-session-id]"),O=document.querySelector("[data-sd-meta-start]"),W=document.querySelector("[data-sd-meta-duration]"),I=document.querySelector("[data-sd-title]"),R=E&&(E.session_id||E.id)||g.sessionId||"\u2014";D&&(D.textContent=R),O&&(O.textContent=C(E&&(E.started_at||E.start_time))),W&&(W.textContent=T(E&&(E.duration_s||E.duration))),I&&(I.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(R).slice(-8)}))}function c(){let E=g.session;if(!E)return;let _=document.querySelector("[data-sd-kpis]");_&&(_.hidden=!1);let D=function(R,j,J){let K=document.querySelector(`[data-sd-stat="${R}"]`);K&&(K.textContent=j);let G=document.querySelector(`[data-sd-stat-sub="${R}"]`);G&&(G.textContent=J||"")};D("msg_count",M(E.msg_count)),D("viewer_count",M(E.viewer_count));let O=Array.isArray(g.density)?g.density:[];if(O.length){let R=0,j=0;O.forEach(function(G,te){G>R&&(R=G,j=te)});let J=Date.parse(E.started_at||E.start_time||0),K="";if(!Number.isNaN(J)){let G=new Date(J+j*6e4),te=ne=>String(ne).padStart(2,"0");K=`${te(G.getHours())}:${te(G.getMinutes())}`}D("peak",M(R),K)}else D("peak","\u2014","");let W=Number(E.blocked_count)||0;D("blocked",M(W));let I=document.querySelector("[data-sd-blocked-btn]");I&&(I.textContent=ServerI18n.t("sessionDetailStatBlocked")+(W?" "+W:""),I.disabled=W===0)}function a(){let E=document.querySelector("[data-sd-timeline-wrap]"),_=document.querySelector("[data-sd-timeline]"),D=document.querySelector("[data-sd-timeline-axis]"),O=document.querySelector("[data-sd-peak-label]");if(!E||!_||!D)return;let W=g.density;if(!W||W.length===0){E.hidden=!0;return}E.hidden=!1;let I=Math.max(1,...W),R=0;W.forEach(function(ne,z){ne>W[R]&&(R=z)});let j=W.map(function(ne,z){let X=Math.max(2,Math.round(ne/I*100));return`<div class="admin-sd-bar${z===R?" is-peak":""}" style="height:${X}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:z+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");_.innerHTML=j;let J=g.session,K=C(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",G=C(J&&(J.ended_at||J.end_time)).slice(11,16)||"",te=W.length>2?`+${Math.round(W.length/2)}min`:"";D.innerHTML=`
      <span class="admin-sd-axis-label">${k(K)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${k(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${k(G)}</span>
    `,O&&(O.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:W[R],minute:R}))}function t(){let E=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(_){let D=(_.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!D?!1:E?String(_.text||"").toLowerCase().indexOf(E)!==-1||String(_.nickname||"").toLowerCase().indexOf(E)!==-1:!0})}function d(){let E=document.querySelector("[data-sd-msgs-wrap]"),_=document.querySelector("[data-sd-msgs-list]");if(!E||!_)return;if(!g.records.length){E.hidden=!0;return}E.hidden=!1;let D=t().slice(0,300);if(!D.length){_.innerHTML='<div class="admin-sd-msgs-empty">'+k(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}_.innerHTML=D.map(function(O){let W=(O.status||"shown")==="blocked",I=F(O.fingerprint||O.fp||""),R=b(O.timestamp||O.created_at),j=String(O.nickname||"").trim();return`
        <div class="admin-sd-msg-row${W?" is-blocked":""}">
          <span class="admin-sd-msg-time">${k(R)}</span>
          <span class="admin-sd-msg-dot" style="background:${I}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${k(O.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${k(ServerI18n.t("deliveryStatus_"+(O.status||"shown")))}
            ${O.delivery_reason?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("deliveryReason_"+O.delivery_reason))}</span>`:""}
            ${W&&O.blockedBy?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("sessionDetailBlockedBy",{rule:O.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${k(j||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function n(){let E=g.annotations||[],_=w(),D=document.querySelector("[data-sd-ann-count]");D&&(D.textContent=E.length?`${E.length} ANNOTATIONS`:"");let O=document.querySelector("[data-sd-ann-head]");O&&(O.textContent=E.length?`ANNOTATIONS \xB7 ${E.length}`:"ANNOTATIONS");let W=document.querySelector("[data-sd-ann-layer]");W&&(!_||E.length===0?W.innerHTML="":W.innerHTML=E.map(function(j){let J=L[j.label]||L.note,K=Math.min(100,Math.max(0,j.ts_ms/_*100)),G=j.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${G?" is-active":""}"
              data-sd-ann-marker="${k(j.id)}"
              style="left:${K.toFixed(2)}%;--ann-color:${J.color}"
              title="${k(J.label)} \xB7 ${x(j.ts_ms)}"
              aria-label="${k(J.label)} at ${x(j.ts_ms)}: ${k(j.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${G?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${k((j.note||"").slice(0,40))}${(j.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let I=document.querySelector("[data-sd-ann-legend]");I&&(I.innerHTML=Object.keys(L).map(function(j){let J=L[j],K=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${K}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let R=document.querySelector("[data-sd-ann-list]");if(R){if(E.length===0){R.innerHTML="";let j=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});j.dataset.emptyKind="session-annotations",R.appendChild(j);return}R.innerHTML=E.map(function(j){let J=L[j.label]||L.note,K=j.id===g.activeAnnId,te=(j.note||"").length>80?(j.note||"").slice(0,80)+"\u2026":j.note||"";return`
        <div class="admin-sd-ann-row${K?" is-active":""}" data-sd-ann-row="${k(j.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${x(j.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${k(te)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${k(j.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function l(E){if(!g.sessionId)return;let _=window.HudConfirm;if(!_){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:x(E)}),"");J!=null&&J.trim()&&o(E,"note",J.trim());return}let O="highlight",W="",I=document.createElement("div");I.className="admin-sd-ann-modal-body",I.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${x(E)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(L).map(function(J){let K=L[J];return`
              <button type="button" class="admin-sd-ann-modal-lbl${J==="highlight"?" is-active":""}"
                data-ann-label="${J}" style="--ann-color:${K.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${K.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${K.label}</span>
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
      </div>`,I.addEventListener("click",function(J){let K=J.target.closest("[data-ann-label]");K&&(O=K.dataset.annLabel,I.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(G){G.classList.toggle("is-active",G===K)}))});let R=I.querySelector("[data-ann-modal-note]"),j=I.querySelector("[data-ann-modal-counter]");R.addEventListener("input",function(){W=R.value,j.textContent=`${W.length} / 280`}),setTimeout(function(){R&&R.focus()},50),_.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:I,width:460}).then(function(J){J&&o(E,O,R.value.trim())})}async function o(E,_,D){if(g.sessionId)try{let O=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(E)),label:_||"note",note:D||""})});if(!O.ok)throw new Error(`HTTP ${O.status}`);let W=await O.json();W.annotation&&(g.annotations.push(W.annotation),g.annotations.sort(function(I,R){return I.ts_ms-R.ts_ms}),g.activeAnnId=W.annotation.id,n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(O){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:O.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function e(E){if(E)try{let _=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(E)}`,{method:"DELETE",credentials:"same-origin"});if(!_.ok)throw new Error(`HTTP ${_.status}`);g.annotations=g.annotations.filter(function(D){return D.id!==E}),g.activeAnnId===E&&(g.activeAnnId=null),n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(_){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:_.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function i(E){let _=document.querySelector("[data-sd-timeline-inner]"),D=document.querySelector("[data-sd-ann-hover]");if(!_||!D)return;let O=_.getBoundingClientRect();if(!O.width)return;let W=E.clientX-O.left,I=Math.min(1,Math.max(0,W/O.width)),R=w();if(!R){D.hidden=!0;return}let j=Math.round(I*R);g.hoverTsMs=j,D.hidden=!1,D.style.left=`${(I*100).toFixed(2)}%`,D.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:x(j)})}function v(){let E=document.querySelector("[data-sd-ann-hover]");E&&(E.hidden=!0),g.hoverTsMs=null}function s(E){if(E.target.closest("[data-sd-ann-marker]"))return;let _=document.querySelector("[data-sd-timeline-inner]");if(!_)return;let D=_.getBoundingClientRect();if(!D.width)return;let O=E.clientX-D.left,W=Math.min(1,Math.max(0,O/D.width)),I=w();I&&l(Math.round(W*I))}async function r(){if(g.sessionId)try{let E=g.records.slice(0,500);if(!E.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let _=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:E,speedMultiplier:1})});if(_.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!_.ok)throw new Error("HTTP "+_.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(E,_){if(E==="back")window.location.hash="#/history/sessions";else if(E==="retry")g.sessionId&&$(g.sessionId);else if(E==="export"){if(!g.sessionId)return;let D=document.createElement("a");D.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",D.rel="noopener",document.body.appendChild(D),D.click(),D.remove()}else if(E==="replay")r();else if(E==="add-annotation"){let D=w(),O=g.hoverTsMs!=null?g.hoverTsMs:Math.round(D/2);l(O)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let _=U();if(!_){g.sessionId=null,B(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=_,$(_)}function A(){let E=document.getElementById("settings-grid");if(!E)return;let _=document.getElementById(y);_||(E.insertAdjacentHTML("beforeend",S()),_=document.getElementById(y),n()),_&&_.dataset.sdBound!=="1"&&(_.dataset.sdBound="1",_.addEventListener("click",function(D){let O=D.target.closest("[data-sd-ann-del]");if(O){D.stopPropagation(),e(O.dataset.sdAnnDel);return}let W=D.target.closest("[data-sd-ann-marker]");if(W){D.stopPropagation(),g.activeAnnId=W.dataset.sdAnnMarker,n();let K=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);K&&K.scrollIntoView&&K.scrollIntoView({block:"nearest",behavior:"smooth"});return}let I=D.target.closest("[data-sd-ann-row]");if(I){g.activeAnnId=I.dataset.sdAnnRow,n();return}if(D.target.closest("[data-sd-timeline-inner]")){s(D);return}let j=D.target.closest("[data-sd-action]");if(j){D.preventDefault(),u(j.dataset.sdAction,j);return}let J=D.target.closest("[data-sd-filter]");J&&(g.msgFilter=J.dataset.sdFilter,_.querySelectorAll("[data-sd-filter]").forEach(function(K){K.classList.toggle("is-active",K===J)}),d())}),_.addEventListener("input",function(D){let O=D.target.closest("[data-sd-search]");O&&(g.msgQuery=O.value||"",d())}),_.addEventListener("mousemove",function(D){D.target.closest("[data-sd-timeline-inner]")&&i(D)}),_.addEventListener("mouseleave",function(D){D.target.closest&&D.target.closest("[data-sd-timeline-inner]")&&v()},!0)),g.sessionId=U(),g.sessionId?$(g.sessionId):B(ServerI18n.t("sessionDetailErrNoSessionSelected")),h||(h=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let _=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&_.indexOf("/session-detail")!==-1&&A(),window.addEventListener("admin-route-changed",function(D){(D&&D.detail&&D.detail.route)==="session-detail"&&A()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&A()})})})()});var Gt=ye(()=>{(function(){"use strict";let y="sec-search-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g=20,h={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},L=0;function U(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+k(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+k(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+k(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+k(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+k(ServerI18n.t("searchWhoAria"))+'"><option value="">'+k(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+k(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+k(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function C(t){if(!t)return 200;for(var d=0,n=0;n<Math.min(t.length,6);n++)d=d*31+t.charCodeAt(n)&65535;return d%360}function T(t,d){if(!d||!t)return k(t||"");var n=k(t),l=k(d);try{var o=new RegExp("("+l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return n.replace(o,'<mark class="admin-search-hit">$1</mark>')}catch{return n}}function m(t){if(!t)return"\u2014";try{var d=new Date(t);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function M(){var t=h.results;return h.blockedOnly&&(t=t.filter(function(d){return(d.status||"shown")==="blocked"})),h.who&&(t=t.filter(function(d){return(d.nickname||"")===h.who})),t}function F(){var t=document.getElementById("admin-search-count");if(t){if(!h.searched||!h.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function S(){var t=document.querySelector("[data-search-who]");if(t){var d=[];h.results.forEach(function(l){var o=(l.nickname||"").trim();o&&d.indexOf(o)===-1&&d.push(o)}),d.sort();var n=h.who;t.innerHTML='<option value="">'+k(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(l){return'<option value="'+k(l)+'"'+(l===n?" selected":"")+">"+k(l)+"</option>"}).join("")}}function $(){var t=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),n=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(s){s.remove()});var l=function(s){d&&(d.style.display="block",d.textContent=s),n&&(n.hidden=!0)};if(h.loading)return l(ServerI18n.t("searchSearching"));if(!h.searched)return l(ServerI18n.t("searchPromptStart"));var o=M();if(o.length===0)return l(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),n&&(n.hidden=!1);var e=Math.min(o.length,h.shown),i=document.createDocumentFragment();if(o.slice(0,e).forEach(function(s){var r=document.createElement("div");r.className="admin-search-row",r.innerHTML='<span class="admin-search-row__ts">'+k(m(s.timestamp))+'</span><span class="admin-search-row__text">'+T(s.text||"",h.query)+'</span><span class="admin-search-row__nick">'+k((s.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+k(ServerI18n.t("deliveryStatus_"+(s.status||"shown")))+(s.delivery_reason?"<br>"+k(ServerI18n.t("deliveryReason_"+s.delivery_reason)):"")+"</span></span>",i.appendChild(r)}),t.appendChild(i),o.length>e){var v=document.createElement("button");v.type="button",v.className="admin-search-more",v.dataset.searchMore="1",v.textContent=ServerI18n.t("searchMoreLeft",{n:o.length-e}),t.appendChild(v)}}}function P(){F(),S(),$()}async function w(){var t=h.query.trim();if(!t){h.loading=!1,h.searched=!1,h.results=[],h.total=0,P();return}h.loading=!0,P();try{var d="/admin/search?q="+encodeURIComponent(t);if(h.scope==="session"){var n=await x();n&&(d+="&since="+encodeURIComponent(n))}var l=Date.now(),o=await fetch(d,{credentials:"same-origin"}),e=Date.now()-l;if(!o.ok)throw new Error("HTTP "+o.status);var i=await o.json();h.results=Array.isArray(i.results)?i.results:[],h.total=typeof i.total=="number"?i.total:h.results.length,h.shown=g}catch(v){console.error("[admin-search] fetch error:",v),h.results=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:v.message||""}),!1)}finally{h.loading=!1,h.searched=!0,P()}}var b=null;async function x(){if(b!==null)return b;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var d=await t.json();if(d.status==="live"&&d.started_at)return b=new Date(d.started_at*1e3).toISOString(),b}}catch{}return b="",""}function H(){clearTimeout(L),L=setTimeout(w,300)}function B(){if(h.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];h.results.forEach(function(o){var e=[o.nickname||"",o.fingerprint||"",o.timestamp||"",o.status||"",o.text||"",o.delivery_reason||""].map(function(i){return'"'+String(i).replace(/"/g,'""')+'"'});t.push(e.join(","))});var d=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(d),l=document.createElement("a");l.href=n,l.download="danmu-search-"+(h.query||"export")+".csv",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(n)}}function N(){var t=document.getElementById(y);if(t){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){h.query=d.value,H()}),d.addEventListener("keydown",function(l){l.key==="Enter"&&(clearTimeout(L),h.query=d.value,w())})),t.addEventListener("click",function(l){var o=l.target.closest("[data-search-scope]");if(o){h.scope=o.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(i){i.classList.toggle("is-active",i===o)}),h.query.trim()&&H();return}var e=l.target.closest("[data-search-blocked]");if(e){h.blockedOnly=!h.blockedOnly,e.classList.toggle("is-active",h.blockedOnly),h.shown=g,P();return}if(l.target.closest("[data-search-more]")){h.shown+=g,$();return}}),t.addEventListener("change",function(l){var o=l.target.closest("[data-search-who]");o&&(h.who=o.value||"",h.shown=g,P())});var n=document.getElementById("admin-search-export-btn");n&&n.addEventListener("click",B)}}function f(){var t=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!(!t||!d)){var n=t.dataset.activeLeaf||"dashboard";d.style.display=n==="search"?"":"none"}}function c(){var t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",U()),N(),f())}function a(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),f()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",function(){c(),f()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a()})()});var zt=ye(()=>{(function(){"use strict";let y="sec-api-tokens-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],h=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],L={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function U(s){if(!s)return"\u2014";try{let r=new Date(s);if(isNaN(r.getTime()))return String(s);let u=p=>String(p).padStart(2,"0");return`${r.getFullYear()}-${u(r.getMonth()+1)}-${u(r.getDate())}`}catch{return String(s)}}function C(s){if(!s)return null;try{let r=new Date(s);if(isNaN(r.getTime()))return null;let u=p=>String(p).padStart(2,"0");return`${r.getFullYear()}-${u(r.getMonth()+1)}-${u(r.getDate())} ${u(r.getHours())}:${u(r.getMinutes())}`}catch{return null}}function T(s){let r=Number(s);return isNaN(r)?"0":r.toLocaleString()}function m(s){if(!s||s.enabled===!1)return"inactive";if(!s.expires_at)return"active";try{let r=new Date(s.expires_at).getTime(),u=Date.now();if(r<u)return"expired";if(r-u<168*3600*1e3)return"expiring"}catch{}return"active"}function M(s){if(!s)return 1/0;try{return Math.floor((Date.now()-new Date(s).getTime())/864e5)}catch{return 1/0}}function F(s){return!s||!s.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':s.map(function(r){let u="admin-ui-pill admin-at-scope-badge";return r==="admin:*"?u+=" is-danger":r.startsWith("fire:")?u+=" is-warn":r.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${k(r)}</span>`}).join(" ")}function S(s){let r="admin-ui-dot admin-at-dot";return s==="active"?r+=" is-success":s==="expiring"?r+=" is-warn":s==="expired"?r+=" is-danger":r+=" is-muted",`<span class="${r}" aria-hidden="true"></span>`}function $(){let s=g.map(function(u){let p=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",E=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${k(u.id)}"
          >
          <span class="${E}">${k(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${k(ServerI18n.t(u.labelKey))}</span>
          ${p}
        </label>
      `}).join(""),r=h.map(function(u){let p=u.default?"checked":"";return`
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${u.days!==null?String(u.days):"null"}" ${p} class="sr-only">
          <span>${k(ServerI18n.t(u.labelKey))}</span>
        </label>
      `}).join("");return`
      <div id="${y}" class="admin-at-page hud-page-stack lg:col-span-2" data-tpl="B">
        <!-- Page header -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">API Tokens</h2>
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
                    ${s}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${r}
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
    `}async function P(){H(!0);try{let s=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!s.ok)throw new Error(`HTTP ${s.status}`);let r=await s.json();L.tokens=r.tokens||r||[],N()}catch(s){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:s.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function w(s){L.creating=!0,B(!0),d();try{let r=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!r.ok){let A=await r.json().catch(()=>({}));throw new Error(A.error||A.message||`HTTP ${r.status}`)}let u=await r.json(),p=u.token||u.raw_token||u.access_token||null;L.newTokenRaw=p,f(p),a(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(r){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:r.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:r.message||""}),!1)}finally{L.creating=!1,B(!1)}}async function b(s,r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${k(r||s)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(s)}`,{method:"DELETE"});if(!p.ok){let A=await p.json().catch(()=>({}));throw new Error(A.error||A.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function x(s,r){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(s)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:r})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(r?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function H(s){let r=document.querySelector("[data-at-list-loading]");r&&(r.hidden=!s)}function B(s){let r=document.getElementById("adminAtSubmitBtn");r&&(r.disabled=s,r.textContent=s?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function N(){let s=L.tokens,r=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!r||!u||!p)){if(!s||s.length===0){if(!r.firstElementChild&&window.AdminEmpty){let A=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});A.dataset.emptyKind="api-tokens",r.appendChild(A)}r.hidden=!1,u.hidden=!0;return}r.hidden=!0,u.hidden=!1,p.innerHTML=s.map(function(A){let E=m(A),_=S(E),D=A.scopes||A.scope||[],O=Array.isArray(D)?D:String(D).split(",").map(K=>K.trim()).filter(Boolean),I=M(A.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",R=E==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",j=E==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=A.last_used_at?`${C(A.last_used_at)||U(A.last_used_at)}<br><span class="admin-at-ip">${k(A.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${k(A.id||A.token_id||"")}">
          <td class="admin-at-td-label">
            ${_}
            <span class="admin-at-label-text">${k(A.label||A.name||"\u2014")}</span>
            ${I}${R}${j}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${k(A.prefix||A.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${F(O)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${T(A.usage_count||A.use_count)}</td>
          <td class="admin-at-td-created">${U(A.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${k(A.id||A.token_id||"")}"
              data-token-enabled="${A.enabled===!1?"0":"1"}"
              title="${A.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${A.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${k(A.id||A.token_id||"")}"
              data-token-label="${k(A.label||A.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function f(s){let r=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");r&&(r.hidden=!1),u&&s&&(u.value=s),p&&(p.style.opacity="0.5"),r&&r.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let s=document.getElementById("adminAtSuccessBanner"),r=document.getElementById("adminAtCreateForm");s&&(s.hidden=!0),r&&(r.style.opacity=""),L.newTokenRaw=null}function a(){let s=document.getElementById("adminAtCreateForm");s&&s.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let r=document.querySelector("input[name='adminAtExpiry'][value='90']");if(r){r.checked=!0;let p=r.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),d()}function t(s){let r=document.getElementById("adminAtFormError");r&&(r.hidden=!1,r.textContent=s)}function d(){let s=document.getElementById("adminAtFormError");s&&(s.hidden=!0,s.textContent="")}function n(){let s=document.getElementById("adminAtLabel"),r=s?s.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(_){u.push(_.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),A=p?p.value:"90",E=A==="null"?null:parseInt(A,10);return{label:r,scopes:u,expiry_days:E}}function l(s){return s.label?s.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!s.scopes||s.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function o(s){if(s.preventDefault(),L.creating)return;d();let r=n(),u=l(r);if(u){t(u);return}w(r)}function e(){let s=L.newTokenRaw;if(!s)return;let r=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(s).then(function(){r&&(r.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){r.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),r&&(r.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){r.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function i(){let s=document.getElementById(y);if(!s)return;s.addEventListener("click",function(A){let E=A.target.closest("[data-at-action]");if(E){let D=E.dataset.atAction;if(D==="revoke"){let O=E.dataset.tokenId,W=E.dataset.tokenLabel;b(O,W)}else if(D==="toggle"){let O=E.dataset.tokenId,W=E.dataset.tokenEnabled==="1";x(O,!W)}else D==="copy-token"&&e();return}let _=A.target.closest(".admin-at-expiry-btn");_&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(D){D.classList.remove("is-active")}),_.classList.add("is-active"))});let r=document.getElementById("adminAtScope_admin__");r&&r.addEventListener("change",function(){let A=document.getElementById("adminAtAdminWarn");A&&(A.hidden=!r.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",o);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let A=p.closest(".admin-at-expiry-btn");A&&A.classList.add("is-active")}}function v(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",$()),i(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&v()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&v()})})()});var Vt=ye(()=>{(function(){"use strict";let y="sec-wcag-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(a){return String(a).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function g(a){let t=a.replace(/^#/,""),d=t.length===3?t.split("").map(function(n){return n+n}).join(""):t;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function h(a){return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function L(a){let t=g(a);return .2126*h(t[0])+.7152*h(t[1])+.0722*h(t[2])}function U(a,t){let d=L(a),n=L(t),l=Math.max(d,n),o=Math.min(d,n);return(l+.05)/(o+.05)}function C(a){return a>=7?"AAA":a>=4.5?"AA":a>=3?"AA-large":"fail"}function T(a,t){let d=L(t),n=[],l=g(a);for(let o=.05;o<=.6&&n.length<3;o+=.05){let i="#"+l.map(function(s){return Math.min(1,s+o)}).map(function(s){return Math.round(s*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),v=U(i,t);v>=4.5&&n.push({hex:i,ratio:v})}return n}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},F="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",S={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function $(){let a=m.filter(function(n){return C(U(n.fg,n.bg))!=="fail"}).length,t=m.length-a,d=Math.round(a/m.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",a,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",t,ServerI18n.t("wcagStatFailLabel"))}
              ${P("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${P("PASS RATE",d+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:d})}">
                <div class="admin-wcag-meter-fill" style="width:${d}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${F}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(n,l){return w(n,l)}).join("")}
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
      </div>`}function P(a,t,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${k(String(t))}</span>
        <span class="hud-stat-tile-label">${k(d)}</span>
      </div>`}function w(a,t){let d=U(a.fg,a.bg),n=C(d),l=S[n],o=ServerI18n.t(a.nameKey),e=l.labelKey?ServerI18n.t(l.labelKey):l.label,i=n==="fail"?ServerI18n.t("wcagWarnFail"):n==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${F}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${k(ServerI18n.t("wcagPairAriaLabel",{name:o,ratio:d.toFixed(2),level:e.slice(2)}))}">
        <span class="admin-wcag-pair-name">${k(o)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${k(a.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${k(a.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${k(a.fg)}">${k(a.fg)} / ${k(a.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${l.mod}">${e}</span>
        ${i?`<span class="admin-wcag-warn">\u26A0 ${i}</span>`:""}
      </div>`}function b(){let a=U(M.fg,M.bg),t=C(a),d=S[t],n=d.labelKey?ServerI18n.t(d.labelKey):d.label,l=T(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${x(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${x(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${k(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${k(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${a.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${n}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),a>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),a>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),a>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),a>=4.5)}
      </div>

      ${l.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${l.map(function(o){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${k(o.hex)}"
                title="${k(ServerI18n.t("wcagSuggApplyTitle",{ratio:o.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${k(M.bg)};color:${k(o.hex)}">${k(o.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${o.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function x(a,t,d){let n="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${n}">${k(a)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${k(t)}"></span>
          <input type="text" id="${n}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${k(ServerI18n.t("wcagHexAria",{label:a}))}"
            value="${k(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(a,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${k(a)}</span>
    </div>`}function B(){let a=document.getElementById(y);a&&(a.addEventListener("click",function(t){let d=t.target.closest("[data-wcag-pair-idx]");if(d){N(d);return}let n=t.target.closest("[data-wcag-sugg]");n&&(M.fg=n.dataset.wcagSugg,f())}),a.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let d=t.target.closest("[data-wcag-pair-idx]");d&&(t.preventDefault(),N(d))}),a.addEventListener("input",function(t){let d=t.target.closest("[data-wcag-tester-fg]"),n=t.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(M.fg=d.value.toUpperCase(),f()),n&&/^#[0-9A-Fa-f]{6}$/.test(n.value)&&(M.bg=n.value.toUpperCase(),f())}))}function N(a){let t=m[parseInt(a.dataset.wcagPairIdx,10)];t&&(M.fg=t.fg,M.bg=t.bg,f())}function f(){let a=document.querySelector("[data-wcag-tester]");a&&(a.innerHTML=b())}function c(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",$()),B())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&c()})})()});var Jt=ye(()=>{(function(){"use strict";let y="danmu.onboarding.done",k="admin-onboarding-root",U=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],C=0,T=!1;window.AdminOnboarding={start:$,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let m=new Set(["live","dashboard"]);function M(){if(T||window.AdminOnboarding.isDone()||!m.has(F()))return;let a=()=>!!document.querySelector(".admin-session-banner-live");a()||setTimeout(()=>{T||window.AdminOnboarding.isDone()||a()||m.has(F())&&$()},1200)}function F(){let a=document.querySelector(".admin-dash-grid");return a&&a.dataset.activeRoute||"live"}function S(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&$()}function $(){T||(T=!0,C=0,H())}function P(a){if(!T)return;T=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",x),window.removeEventListener("resize",B);let t=document.getElementById(k);if(t&&t.remove(),a)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function w(){C<U.length-1?(C++,B()):P(!0)}function b(a){let t=a.target.closest("[data-ob-action]");t&&(a.stopPropagation(),t.dataset.obAction==="next"?w():t.dataset.obAction==="skip"&&P(!1))}function x(a){T&&a.key==="Escape"&&(a.preventDefault(),P(!1))}function H(){let a=document.getElementById(k);a&&a.remove();let t=document.createElement("div");t.id=k,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",b),document.addEventListener("keydown",x),window.addEventListener("resize",B),B()}function B(){let a=document.getElementById(k);if(!a)return;let t=U[C],d=U.length,n=f(t.target),l=window.innerWidth,o=window.innerHeight,e="";n?e='<div class="admin-ob-spot" style="left:'+(n.left-8)+"px;top:"+(n.top-8)+"px;width:"+(n.width+16)+"px;height:"+(n.height+16)+'px;"></div>':e='<div class="admin-ob-scrim"></div>';let i=(l-360)/2,v=o/2-110,s="none";if(n){let A=n.left+n.width/2;t.side==="top"?(i=A-360/2,v=n.top-16,s="bottom"):t.side==="right"?(i=n.right+16+8,v=n.top,s="left"):(i=A-360/2,v=n.bottom+16+8,s="top"),i=Math.max(16,Math.min(l-360-16,i))}let r=U.map(function(A,E){return'<span class="admin-ob-progress-item'+(E===C?" is-current":"")+'">'+(E+1)+" "+c(ServerI18n.t(A.labelKey))+"</span>"+(E<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");a.innerHTML=e+'<div class="admin-ob-bubble" data-arrow="'+s+'" style="left:'+i+"px;top:"+v+'px"><div class="admin-ob-count">'+(C+1)+" / "+d+'</div><div class="admin-ob-title">'+c(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(C===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+r+"</div></div>";let u=a.querySelector(".admin-ob-bubble");if(!u||!n)return;let p=u.offsetHeight;if(t.side==="top")u.style.top=Math.max(16,n.top-16-8-p)+"px";else if(v+p>o-16){let A=n.top-16-8-p;A>=16?(u.style.top=A+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,o-p-16)+"px",u.setAttribute("data-arrow","none"))}N(u,n)}function N(a,t){let d=a.getAttribute("data-arrow");if(d==="none")return;let n=a.getBoundingClientRect(),l=d==="top"||d==="bottom",o=l?t.left+t.width/2-n.left:t.top+t.height/2-n.top,e=l?n.width:n.height,i=Math.max(16,Math.min(e-32,o-8));a.style.setProperty("--ob-arrow",i+"px")}function f(a){if(!a)return null;let t=document.querySelector(a);if(!t)return null;let d=t.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function c(a){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(a):a==null?"":String(a).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",S),S(),window.addEventListener("hashchange",function(){m.has(F())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var nn=ye(()=>{var Fi=be(Ne()),Di=be(Pe()),Mi=be(Re()),Ni=be(Oe()),Pi=be(qe()),Ri=be(He()),Oi=be(je()),qi=be(Ue()),Hi=be(Ke()),ji=be(We()),Ui=be(Ge()),Ki=be(ze()),Wi=be(Ve()),Gi=be(Je()),zi=be(Ye()),Vi=be(Qe()),Ji=be(Xe()),Yi=be(Ze()),Qi=be(et()),Xi=be(tt()),Zi=be(nt()),es=be(at()),ts=be(it()),ns=be(st()),as=be(ot()),is=be(rt()),ss=be(dt()),os=be(lt()),rs=be(ct()),ds=be(ut()),ls=be(mt()),cs=be(pt()),us=be(vt()),ms=be(ft()),ps=be(ht()),vs=be(gt()),fs=be(yt()),hs=be(bt()),gs=be(wt()),ys=be(St()),bs=be(kt()),ws=be(It()),Ss=be(Tt()),ks=be(_t()),Is=be(Et()),Ts=be($t()),_s=be(xt()),Es=be(Lt()),$s=be(At()),xs=be(Ct()),Ls=be(Bt()),As=be(Ft()),Cs=be(Dt()),Bs=be(Mt()),Fs=be(Nt()),Ds=be(Pt()),Ms=be(Rt()),Ns=be(Ot()),Ps=be(qt()),Rs=be(Ht()),Os=be(jt()),qs=be(Ut()),Hs=be(Kt()),js=be(Wt()),Us=be(Gt()),Ks=be(zt()),Ws=be(Vt()),Gs=be(Jt())});nn();})();
