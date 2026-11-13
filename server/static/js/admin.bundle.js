/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Yt=Object.create;var Me=Object.defineProperty;var Qt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,en=Object.prototype.hasOwnProperty;var ye=(y,k)=>()=>{try{return k||y((k={exports:{}}).exports,k),k.exports}catch(g){throw k=0,g}};var tn=(y,k,g,h)=>{if(k&&typeof k=="object"||typeof k=="function")for(let A of Xt(k))!en.call(y,A)&&A!==g&&Me(y,A,{get:()=>k[A],enumerable:!(h=Qt(k,A))||h.enumerable});return y};var be=(y,k,g)=>(g=y!=null?Yt(Zt(y)):{},tn(k||!y||!y.__esModule?Me(g,"default",{value:y,enumerable:!0}):g,y));var Ne=ye(()=>{(function(){"use strict";var y=4,k=2500,g=3e3,h=Object.create(null);function A(){return Date.now()}function U(w,b){return(b?"ok:":"err:")+w}function C(w,b){return"var("+w+", "+b+")"}function _(w){return w?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(w){for(var b=Array.prototype.slice.call(w.children);b.length>y;){var L=b.shift();L&&L.parentNode&&L.parentNode.removeChild(L)}}function M(w,b){w.remaining=b,w.startedAt=A(),w.timer=setTimeout(function(){$(w)},b)}function F(w){w.timer&&(clearTimeout(w.timer),w.timer=null,w.remaining=Math.max(600,w.remaining-(A()-w.startedAt)))}function S(w){w.timer||!w.el.parentNode||M(w,w.remaining)}function $(w){clearTimeout(w.timer),w.timer=null,w.key&&h[w.key]===w&&delete h[w.key];var b=w.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function N(w,b){var L=document.getElementById("toast-container");if(L){b=b!==!1;var H=U(String(w),b),B=h[H];if(B&&B.el.parentNode&&A()-B.startedAt<k){B.count+=1,B.countEl&&(B.countEl.textContent="\xD7"+B.count,B.countEl.hidden=!1),F(B),S(B);return}var P=b?C("--color-ink-success","#639922"):C("--color-ink-error","#e24b4a"),f=C("--color-surface","#ffffff"),c=C("--color-text-primary","#1a1a1a"),o=C("--color-border-soft","rgba(0,0,0,.12)"),t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+f,"color:"+c,"border:1px solid "+o,"border-left:3px solid "+P,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var s=document.createElement("span");s.style.cssText="display:inline-flex;color:"+P+";flex:0 0 auto",s.innerHTML=_(b);var n=document.createElement("span");n.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",n.textContent=w;var r=document.createElement("span");r.hidden=!0,r.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",t.appendChild(s),t.appendChild(n),t.appendChild(r),L.appendChild(t),m(L),requestAnimationFrame(function(){t.style.opacity="1",t.style.transform="translateX(0)"});var d={key:H,el:t,countEl:r,count:1,timer:null,remaining:g,startedAt:A()};h[H]=d,M(d,g),t.addEventListener("mouseenter",function(){F(d)}),t.addEventListener("mouseleave",function(){S(d)}),t.addEventListener("focusin",function(){F(d)}),t.addEventListener("focusout",function(){S(d)})}}window.showToast=N})()});var Pe=ye(()=>{(function(){"use strict";var y="admin-details-open-state";function k(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(N){try{localStorage.setItem(y,JSON.stringify(N))}catch{}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(N){return N==null?"":String(N).replace(/[&<>"']/g,function(w){return h[w]})}function U(){var N=document.querySelector("script[nonce]");return N&&N.nonce||""}function C(N,w){var b=U();return"<style"+(N?' id="'+A(N)+'"':"")+(b?' nonce="'+A(b)+'"':"")+">"+(w||"")+"</style>"}var _='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],M=null;function F(N){if(!N)return!1;for(var w=N;w&&w!==document.documentElement;w=w.parentElement)if(w.style&&w.style.display==="none")return!1;return!!(N.offsetParent||N.getClientRects().length)}function S(){var N=document.hidden;m.forEach(function(w){var b=typeof w.el=="function"?w.el():w.el,L=!N&&F(b);if(L&&!w.timer){if(w.immediate!==!1)try{w.tick()}catch{}w.timer=setInterval(w.tick,w.intervalMs)}else!L&&w.timer&&(clearInterval(w.timer),w.timer=0)})}function $(N){var w={el:N.el,intervalMs:N.intervalMs,tick:N.tick,immediate:N.immediate,timer:0};return m.push(w),M||(M=new MutationObserver(function(){S()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",S),document.addEventListener("visibilitychange",S),document.addEventListener("admin-panel-rendered",S)),S(),function(){w.timer&&clearInterval(w.timer);var L=m.indexOf(w);L!==-1&&m.splice(L,1)}}window.AdminUtils={DETAILS_STATE_KEY:y,loadDetailsState:k,saveDetailsState:g,escapeHtml:A,cspNonce:U,styleTag:C,closeIcon:_,pollWhileVisible:$}})()});var Re=ye(()=>{(function(){"use strict";function y(k,g,h,A){let U=k.querySelector("[data-route-breadcrumb]");if(!U)return;let C=Array.from(k.querySelectorAll(".admin-dash-nav-row[data-route]")),_=C.find(L=>L.dataset.route===g)||C.find(L=>L.dataset.route===h);if(!_){U.replaceChildren(),U.hidden=!0;return}let m="",M=_.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){m=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let S=(_.querySelector("[data-i18n]")||_.querySelector("span:nth-child(2)")||_).textContent.trim(),$=A?k.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,N=$?($.querySelector(".admin-tabs-btn-label")||$).textContent.trim():"",w=[m,S,N].filter(Boolean),b=document.createDocumentFragment();w.forEach((L,H)=>{if(H){let f=document.createElement("span");f.className="admin-dash-breadcrumb-sep",f.setAttribute("aria-hidden","true"),f.textContent="\u203A",b.appendChild(f)}let B=document.createElement("span"),P=H===w.length-1;B.className="admin-dash-breadcrumb-item"+(P?" is-current":""),P&&B.setAttribute("aria-current","page"),B.textContent=L,b.appendChild(B)}),U.replaceChildren(b),U.hidden=w.length===0}window.AdminBreadcrumb={render:y}})()});var Oe=ye(()=>{(function(y){"use strict";let k={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(S){return Array.isArray(S.sections)?S.sections:S.section?[S.section]:[]}function h(S){return!!k[S]}function A(S){return k[S]||null}let U={moderation:{filters:"blacklist",fingerprints:"bans"}};function C(S,$){let N=k[S];if(!N)return null;let w=H=>N.tabs.some(B=>B.slug===H),b=U[S]?.[$];if(b&&w(b))return b;if($&&w($))return $;let L=y.AdminRouter?.tabMemory?.get?.(S);return L&&w(L)?L:N.defaultTab}function _(S,$,N){let w=k[S];if(!w)return null;let b=document.createElement("div");return b.className="admin-tabs-strip",b.dataset.nav=S,b.setAttribute("role","tablist"),b.setAttribute("aria-label",S+" tabs"),w.tabs.forEach(L=>{let H=document.createElement("button");H.type="button",H.className="admin-tabs-btn"+(L.slug===$?" is-active":""),H.dataset.nav=S,H.dataset.tab=L.slug,H.setAttribute("role","tab"),H.setAttribute("aria-selected",L.slug===$?"true":"false");let B=document.createElement("span");B.className="admin-tabs-btn-label",B.textContent=L.labelKey?ServerI18n.t(L.labelKey):L.label,H.appendChild(B);let P=document.createElement("span");P.className="admin-tabs-btn-count",P.dataset.tabCount=L.slug,P.textContent=m[S]&&m[S][L.slug]?m[S][L.slug]:"",H.appendChild(P),H.addEventListener("click",()=>{typeof N?.onSelect=="function"&&N.onSelect(L.slug)}),b.appendChild(H)}),b}let m={};function M(S,$,N){if(!k[S])return;m[S]=m[S]||{},m[S][$]=N==null?"":String(N);let w=document.querySelector('.admin-tabs-strip[data-nav="'+S+'"] [data-tab-count="'+$+'"]');w&&(w.textContent=m[S][$])}function F(S,$,N){let w=k[S];!w||!N||w.tabs.forEach(b=>{let L=b.slug===$;g(b).forEach(H=>{let B=N.querySelector("#"+H);B&&(B.style.display=L?"":"none")})})}y.AdminTabs={hasTabsFor:h,getConfig:A,resolveActiveTab:C,renderTabStrip:_,applyTabSectionVisibility:F,setTabCount:M}})(window)});var qe=ye(()=>{(function(y,k){"use strict";let g="data-quick-action-host",h="admin-quick-action-bar";function A(M){if(M?.host instanceof HTMLElement)return M.host;let F=k.querySelector(".admin-dash-main");if(!F)return k.body;let S=F.querySelector(`[${g}]`);if(!S){S=k.createElement("div"),S.setAttribute(g,"");let $=F.querySelector(".admin-dash-topbar"),w=F.querySelector("[data-admin-tabs-host]")||$;w&&w.parentNode?w.insertAdjacentElement("afterend",S):F.prepend(S)}return S}function U(M,F){typeof y.showToast=="function"&&y.showToast(M,F!==!1)}function C({label:M,undoLabel:F,onUndo:S,windowMs:$}){let N=A(),w=N.querySelector("."+h);w&&w.remove();let b=k.createElement("div");b.className=h,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let L=k.createElement("span");L.className=h+"-text",L.textContent="\u2713 "+M,b.appendChild(L);let H=k.createElement("button");H.type="button",H.className=h+"-undo",H.textContent="\u21B6 "+(F||ServerI18n.t("qaUndoLabel")),b.appendChild(H);let B=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},P=setTimeout(B,$||5e3);return H.addEventListener("click",async()=>{clearTimeout(P),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await S(),U(ServerI18n.t("qaUndone"),!0)}catch(f){U(ServerI18n.t("qaUndoFailed",{msg:f?.message||String(f)}),!1)}finally{B()}}),N.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function _(M){if(!M||typeof M!="object")return;let F=M.label||ServerI18n.t("qaDone");M.toast!==!1&&U(F,!0),M.undo&&typeof M.undo.run=="function"&&C({label:F,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function m(){k.querySelectorAll("."+h).forEach(M=>M.remove())}y.AdminQuickAction={fire:_,dismissAll:m}})(window,document)});var He=ye(()=>{(function(){"use strict";let y="admin-hud-modal-root",k=null,g=null,h='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function A(){let m=document.getElementById(y);return m?Array.prototype.slice.call(m.querySelectorAll(h)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function U(m){let M=document.getElementById(y);if(M&&M.remove(),k&&(k(m),k=null),document.removeEventListener("keydown",C),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function C(m){if(m.key==="Escape"){m.preventDefault(),U(!1);return}if(m.key==="Tab"){let M=A();if(!M.length){m.preventDefault();return}let F=M[0],S=M[M.length-1],$=document.activeElement;m.shiftKey?($===F||!M.includes($))&&(m.preventDefault(),S.focus()):($===S||!M.includes($))&&(m.preventDefault(),F.focus())}}function _(m){return new Promise(M=>{k&&U(!1),k=M,g=document.activeElement;let{icon:F="\u26A0",title:S=ServerI18n.t("hudConfirmTitle"),subtitle:$="",severity:N="warn",body:w="",titleText:b,bodyText:L,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:B=ServerI18n.t("cancel"),width:P=480}=m||{},f=document.createElement("div");f.id=y,f.className=`admin-hud-modal admin-hud-modal--${N}`,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-hud-modal-title");let c=$?`<div class="admin-hud-modal__subtitle">${$}</div>`:"",o=typeof w=="string"?w:"",t=typeof w!="string"&&w&&w.nodeType;if(f.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${P}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${F}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${S}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${o}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${B}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,b!=null){let n=f.querySelector(".admin-hud-modal__title");n&&(n.textContent=String(b))}if(L!=null){let n=f.querySelector("[data-modal-body]");n&&(n.textContent=String(L))}if(t){let n=f.querySelector("[data-modal-body]");n.innerHTML="",n.appendChild(w)}f.addEventListener("click",function(n){let r=n.target.closest("[data-modal-action]");r&&(n.stopPropagation(),U(r.dataset.modalAction==="confirm"))}),document.body.appendChild(f),document.addEventListener("keydown",C);let s=N==="danger"?"cancel":"confirm";requestAnimationFrame(()=>{f.querySelector(`.admin-hud-modal__btn--${s}`)?.focus()})})}window.HudConfirm={open:_}})()});var je=ye(()=>{(function(){"use strict";var y=8,k=30;function g(N,w){return window.ServerI18n?window.ServerI18n.t(N,w):N}function h(N,w){return N?N.length>w?N.slice(0,w)+"\u2026":N:""}function A(N){return g(N==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function U(N,w){return N==="keyword"?h(w,k):w.slice(0,y)}async function C(N,w,b){if(!w)return{ok:!1,error:"empty-value"};try{var L={type:N==="keyword"?"keyword":"fingerprint",value:w};b&&(L.reason=b);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function _(N,w,b){if(!N)return{ok:!1,error:"empty-fingerprint"};var L=parseInt(w||0,10)||0;try{var H=await window.csrfFetch("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:N,duration_s:L,reason:b||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function m(N){if(!N)return{ok:!1,error:"empty-message-id"};try{var w=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:N})});return w.ok?{ok:!0}:{ok:!1,error:"HTTP "+w.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function M(N,w){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",A(N)).replace("{display}",U(N,w)),confirmLabel:g("lfBlockTitle")}):(window.showToast&&window.showToast(g("blockFailed"),!1),Promise.resolve(!1))}function F(N,w,b){window.showToast&&window.showToast(N?g(w,b||{}):g("blockFailed"),!!N)}async function S(N,w){if(!N||(w=w||{},!w.skipConfirm&&!await M("keyword",N)))return!1;var b=await C("keyword",N);return F(b.ok,"blockFallback",{label:A("keyword"),display:U("keyword",N)}),b.ok}async function $(N,w){if(!N||(w=w||{},!w.skipConfirm&&!await M("fingerprint",N)))return!1;var b=await C("fingerprint",N,w.reason);return F(b.ok,"blockFallback",{label:A("fingerprint"),display:U("fingerprint",N)}),b.ok}window.AdminModeration={callBlock:C,banFingerprint:_,recall:m,blockKeyword:S,blockFingerprint:$}})()});var Ue=ye(()=>{(function(){"use strict";function k(_){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",_.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),_}function g(_,m){let M=document.createElement("div");if(M.className="admin-skel "+(_||""),m)for(let F in m)M.style[F]=m[F];return M}function h({rows:_=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(F=>{M.appendChild(g("admin-skel-bar",{width:F+"px",height:"10px"}))}),m.appendChild(M);for(let F=0;F<_;F++){let S=document.createElement("div");S.className="admin-skel-list__row",S.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let $=document.createElement("div");$.className="admin-skel-list__col",$.appendChild(g("admin-skel-bar",{width:50+F*13%40+"%",height:"10px"})),$.appendChild(g("admin-skel-bar",{width:30+F*7%30+"%",height:"8px"})),S.appendChild($),S.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(S)}return k(m)}function A({cols:_=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${_}, 1fr)`;for(let M=0;M<_;M++){let F=document.createElement("div");F.className="admin-skel-card admin-skel-tile",F.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),F.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),F.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),F.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(F)}return k(m)}function U(){let _=document.createElement("div");_.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",m.appendChild(M),m.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),_.appendChild(m);let F=document.createElement("div");F.className="admin-skel-chart__body";let S=document.createElement("div");S.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>S.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),F.appendChild(S);let $=document.createElement("div");return $.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(w=>$.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:w+"%"}))),F.appendChild($),_.appendChild(F),k(_)}function C(_,m){let M={listRows:h,statsTiles:A,chart:U}[_];return M?M(m||{}).outerHTML:""}window.AdminSkeletons={listRows:h,statsTiles:A,chart:U,html:C}})()});var Ke=ye(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},k={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(A){let{icon:U="\xB7",title:C="",desc:_="",accent:m=y.cyan,ctaAccent:M,actionLabel:F,action:S,extra:$}=A||{},N=document.createElement("div");N.className="admin-empty",N.dataset.empty="1",N.style.setProperty("--admin-empty-accent",m),M&&N.style.setProperty("--admin-empty-cta",M);let w=document.createElement("div");if(w.className="admin-empty__icon",w.textContent=U,N.appendChild(w),C){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=C,N.appendChild(b)}if(_){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=_,N.appendChild(b)}if(F){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=F,typeof S=="function"&&b.addEventListener("click",S),N.appendChild(b)}if($){let b=document.createElement("div");b.className="admin-empty__extra",typeof $=="string"?b.innerHTML=$:b.appendChild($),N.appendChild(b)}return N}function h(A){let U=k[A];if(!U)return g({title:ServerI18n.t("emptyNoData"),desc:""});let C=Object.assign({},U,{title:U.titleKey?ServerI18n.t(U.titleKey):U.title,desc:U.descKey?ServerI18n.t(U.descKey):U.desc,actionLabel:U.actionLabelKey?ServerI18n.t(U.actionLabelKey):U.actionLabel});return g(C)}window.AdminEmpty={render:h,renderCustom:g,PRESETS:k}})()});var We=ye(()=>{(function(){"use strict";var y=8;function k(C){return C?String(C).slice(0,y):""}function g(C){if(!C||typeof C!="object")return{nickname:"",fp:"",ip:""};var _=C.fingerprint||C.fp||C.hash||"",m=C.clientIp||C.client_ip||C.ip||"",M=C.nickname||C.nick||"";return{nickname:String(M||""),fp:String(_||""),ip:String(m||"")}}function h(C){if(!C||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var _=new TextEncoder().encode(String(C));return window.crypto.subtle.digest("SHA-256",_).then(function(m){var M=Array.from(new Uint8Array(m));return M.map(function(F){return F.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function A(C){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var _=document.getElementById("sec-fingerprints");if(_&&!_.open&&(_.open=!0),_)try{_.scrollIntoView({behavior:"smooth",block:"start"})}catch{}h(C).then(function(m){if(m)var M=0,F=setInterval(function(){M+=1;var S=document.querySelector('[data-fp-hash="'+m+'"]');if(S){clearInterval(F),S.classList.add("admin-identity-flash"),setTimeout(function(){S.classList.remove("admin-identity-flash")},2e3);try{S.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(F)},250)})}function U(C){C=C||{};var _=C.nickname||"",m=C.fp||"",M=C.ip||"",F=!!C.compact,S=typeof C.onNicknameClick=="function"?C.onNicknameClick:null,$=typeof C.onFpClick=="function"?C.onFpClick:A,N=document.createElement("span");N.className="admin-identity-row";var w;if(S?(w=document.createElement("button"),w.type="button",w.className="admin-identity-nick is-clickable",w.addEventListener("click",function(f){f.stopPropagation(),S(_)})):(w=document.createElement("span"),w.className="admin-identity-nick"),_)w.textContent="@"+_;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var L=ServerI18n.t("anonymousPlaceholder");L&&L!=="anonymousPlaceholder"&&(b=L)}}catch{}w.textContent="@"+b,w.classList.add("is-guest")}if(_&&(w.title=_),N.appendChild(w),m){var H;if($?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(f){f.stopPropagation(),$(m)})):(H=document.createElement("span"),H.className="admin-identity-fp"),m==="new"){var B=document.createElement("span");B.className="admin-identity-dot",H.appendChild(B),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+k(m);H.title=m,N.appendChild(H)}if(M&&!F){var P=document.createElement("span");P.className="admin-identity-ip",P.textContent=M,P.title=M,N.appendChild(P)}return N}window.AdminIdentity={render:U,parse:g,focusFingerprint:A,hashFp:h,FP_DISPLAY_LEN:y}})()});var Ge=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(s,n){return window.csrfFetch(s,n)}function g(s,n){return window.showToast(s,n)}let h="default",A=[],U={};function C(){let s=document.getElementById("themesList");s&&window.AdminSkeletons&&(s.innerHTML="",s.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function _(){C();try{let s=await k("/admin/themes");if(!s.ok)return;let n=await s.json();h=n.active||"default",A=n.themes||[],U=n.overrides||{},N(A,h),L()}catch(s){console.warn("[Themes] Failed to fetch themes:",s)}}var m="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function F(s,n){var r=String(s||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(r)?r:n}function S(s){var n=s.styles||{},r=["color:"+F(n.color,"#ffffff")];if(n.textStroke){var d=Math.max(0,Math.min(6,Number(n.strokeWidth)||0));r.push("-webkit-text-stroke:"+d+"px "+F(n.strokeColor,"#000000")),r.push("paint-order:stroke fill")}if(n.textShadow){var e=Math.max(0,Math.min(40,Number(n.shadowBlur)||0));r.push("text-shadow:0 0 "+e+"px "+F(n.color,"#ffffff"))}var a=s.font&&s.font.family;return a&&/^[\w\s-]{1,40}$/.test(a)&&r.push("font-family:'"+a+"', var(--font-sans)"),s.font&&Number(s.font.weight)&&r.push("font-weight:"+Math.max(100,Math.min(900,Number(s.font.weight)))),r.join(";")}function $(s){var n=s.bg&&s.bg.gradient;return n&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(n).trim())?"background:"+String(n).trim():""}function N(s,n){let r=document.getElementById("themesList");if(r){if(r.innerHTML="",s.length===0){r.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}s.forEach(d=>{let e=d.name===n,a=y(ServerI18n.t("theme_"+d.name)!=="theme_"+d.name?ServerI18n.t("theme_"+d.name):d.label||d.name),v=document.createElement("div");v.className=`theme-pack-card${e?" is-active":""}`,v.innerHTML=`
        <div class="theme-pack-name">${a}</div>
        <div class="theme-pack-sample" style="${y($(d))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(S(d))}">
            <span class="theme-pack-sample-nick">${y(m)}</span>
            ${y(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${d.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(d.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${e?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(d.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,r.appendChild(v)}),r.querySelectorAll(".theme-delete-btn").forEach(d=>{d.addEventListener("click",async()=>{let e=d.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let v=await k("/admin/themes/"+encodeURIComponent(e),{method:"DELETE"});if(!v.ok)throw new Error("HTTP "+v.status);g(ServerI18n.t("themeDeleted"),!0),_()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),r.querySelectorAll(".theme-activate-btn").forEach(d=>{d.addEventListener("click",async()=>{let e=d.dataset.theme;try{let a=await k("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});if(a.ok)g(ServerI18n.t("themeActivated"),!0),h=e,N(s,e),L();else{let v=await a.json().catch(()=>({}));g(v.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function w(){return A.find(s=>s.name===h)||null}function b(s,n){let r=U[h]||{};if(r[s])return r[s];let d=n&&n.styles||{};return s==="stroke"?d.textStroke?Number(d.strokeWidth)>=3?"thick":"thin":"none":d.textShadow?Number(d.shadowBlur)>=10?"strong":"soft":"none"}function L(){let s=document.getElementById("themeDetail"),n=document.getElementById("themeDetailLabel");if(!s||!n)return;let r=w();if(!r)return;let d=ServerI18n.t("theme_"+r.name)!=="theme_"+r.name?ServerI18n.t("theme_"+r.name):r.label||r.name;n.textContent=ServerI18n.t("themeDetailGroup",{name:d}),["stroke","shadow"].forEach(a=>{let v=b(a,r);s.querySelectorAll(`[data-theme-seg="${a}"] [data-theme-opt]`).forEach(i=>{let l=i.getAttribute("data-theme-opt")===v;i.classList.toggle("is-active",l),i.setAttribute("aria-pressed",l?"true":"false")})});let e=s.querySelector('[data-theme-ov="color"]');if(e){let a=F((r.styles||{}).color,"#ffffff");e.value=/^#[0-9a-fA-F]{6}$/.test(a)?a:"#ffffff"}B(r),P(r)}var H=null;async function B(s){let n=document.getElementById("themeOvFont");if(!n)return;if(!H)try{let e=await fetch("/fonts",{credentials:"same-origin"});H=e.ok?(await e.json()).fonts||[]:[]}catch{H=[]}let d=(U[h]||{}).font_family||"";n.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+H.map(e=>{let a=String(e.name||e);return`<option value="${y(a)}"${a===d?" selected":""}>${y(a)}</option>`}).join("")}function P(s){let n=document.querySelector("[data-theme-preview-line]");n&&n.setAttribute("style",S(s))}async function f(s){try{let n=await k("/admin/themes/"+encodeURIComponent(h)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!n.ok)throw new Error("HTTP "+n.status);g(ServerI18n.t("themeDetailSaved"),!0),await _()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let s=document.getElementById("themeDetail");s&&(s.addEventListener("click",n=>{let r=n.target.closest("[data-theme-opt]");if(!r)return;let d=r.closest("[data-theme-seg]");d&&f({[d.getAttribute("data-theme-seg")]:r.getAttribute("data-theme-opt")})}),s.addEventListener("change",n=>{let r=n.target.closest("[data-theme-ov]");r&&f({[r.getAttribute("data-theme-ov")]:r.value})}))}function o(){let s=document.getElementById("themeNewBtn");s&&s.addEventListener("click",async()=>{let n=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!n||!n.trim()))try{let r=await k("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:n.trim(),base:h})});if(!r.ok)throw new Error("HTTP "+r.status);g(ServerI18n.t("themeCreated"),!0),_()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function t(){_(),c(),o();let s=document.getElementById("themeReloadBtn");s&&s.addEventListener("click",async()=>{try{(await k("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),_()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:t}})()});var ze=ye(()=>{(function(){"use strict";function y(E,D){return window.csrfFetch(E,D)}function k(E,D){return window.showToast(E,D)}var g=window.ServerI18n;function h(E,D){return window.AdminUtils.styleTag(E,D)}let A=null;function U(){let E=document.getElementById("effectEditModal");return E?Array.from(E.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(D=>!D.hasAttribute("disabled")&&D.getAttribute("aria-hidden")!=="true"):[]}function C(E){let D=document.getElementById("effectEditModal");if(!D||D.classList.contains("hidden"))return;if(E.key==="Escape"){E.preventDefault(),_();return}if(E.key!=="Tab")return;let O=U();if(O.length===0){E.preventDefault();return}let W=O[0],T=O[O.length-1],R=document.activeElement;E.shiftKey&&R===W?(E.preventDefault(),T.focus()):!E.shiftKey&&R===T&&(E.preventDefault(),W.focus())}function _(){let E=document.getElementById("effectEditModal");E&&(E.classList.add("hidden"),E.classList.remove("flex"),E.removeEventListener("keydown",C),A&&(A.focus(),A=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(E){return!!m[E]}};let M=new Map,F=new Map;function S(E){if(!E||!E.styleId||!E.keyframes)return;let D="dme-user-"+E.styleId;if(document.getElementById(D))return;let O=document.createElement("style");O.id=D,O.textContent=E.keyframes,document.head.appendChild(O)}async function $(E){if(M.has(E))return M.get(E);if(F.has(E))return F.get(E);let D=(async()=>{try{let O=await y(`/admin/effects/${encodeURIComponent(E)}/content`);if(!O.ok)throw new Error("content fetch failed");let W=await O.json(),T=W&&W.content||"";if(!T)throw new Error("empty content");let R=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:{}})});if(!R.ok)throw new Error("preview failed");let j=await R.json();if(!j||!j.animation)throw new Error("no animation");return S(j),M.set(E,j),j}catch{return M.set(E,"failed"),null}finally{F.delete(E)}})();return F.set(E,D),D}function N(E,D){let O=E.querySelector(".effect-demo-text");if(!O)return;O.style.animation=D.animation||"",D.animationComposition&&(O.style.animationComposition=D.animationComposition),O.style.animationPlayState="paused";let W=b();W&&W.observe(E)}let w=null;function b(){return w||(typeof IntersectionObserver>"u"?null:(w=new IntersectionObserver(E=>{E.forEach(D=>{let O=D.target.querySelector(".effect-demo-text");O&&(O.style.animationPlayState=D.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),w))}let L=null;function H(E){let D=document.getElementById("effectPreviewParams");if(!D)return{};let O;try{let T=E.split(`
`),R=!1,j=0,J=null,K=0,G={};for(let te of T){let ne=te.trimStart(),z=te.length-ne.length;if(ne.startsWith("params:")){R=!0,j=z;continue}if(!R||ne===""||ne.startsWith("#"))continue;if(z<=j&&!ne.startsWith("params:")){R=!1;continue}let X=ne.match(/^([a-zA-Z0-9_]+):\s*$/);if(X&&z===j+2){J=X[1],K=z,G[J]={};continue}if(J&&z>K){let Z=ne.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(Z){let se=Z[1],ie=Z[2].trim();if((ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),se!=="options"){let le=Number(ie);G[J][se]=isNaN(le)?ie:le}}if(ne.startsWith("- value:")){G[J].options||(G[J].options=[]);let se=ne.match(/^- value:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options.push({value:ie,label:ie})}}if(ne.startsWith("label:")&&G[J].options&&G[J].options.length>0){let se=ne.match(/^label:\s*(.+)$/);if(se){let ie=se[1].trim();(ie.startsWith('"')&&ie.endsWith('"')||ie.startsWith("'")&&ie.endsWith("'"))&&(ie=ie.slice(1,-1)),G[J].options[G[J].options.length-1].label=ie}}}}O=G}catch{O={}}D.innerHTML="";let W={};for(let[T,R]of Object.entries(O||{})){let j=R.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let K=document.createElement("label");if(K.className="font-mono",K.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",K.textContent=`${T} (${j})`,J.appendChild(K),j==="select"&&Array.isArray(R.options)){let G=document.createElement("select");G.className="admin-ui-select",G.style.cssText="font-size:13px;padding:4px 8px",G.dataset.paramKey=T;for(let te of R.options){let ne=document.createElement("option");ne.value=te.value,ne.textContent=te.label||te.value,te.value===String(R.default)&&(ne.selected=!0),G.appendChild(ne)}W[T]=String(R.default||R.options[0]&&R.options[0].value||""),G.addEventListener("change",()=>{f()}),J.appendChild(G)}else{let G=R.min!=null?R.min:0,te=R.max!=null?R.max:10,ne=R.step!=null?R.step:j==="int"?1:.1,z=R.default!=null?R.default:G,X=document.createElement("div");X.className="flex items-center gap-2";let Z=document.createElement("input");Z.type="range",Z.min=G,Z.max=te,Z.step=ne,Z.value=z,Z.dataset.paramKey=T,Z.className="flex-1",Z.style.accentColor="var(--color-primary)";let se=document.createElement("span");se.className="font-mono",se.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",se.textContent=String(z),Z.addEventListener("input",()=>{se.textContent=Z.value,f()}),X.appendChild(Z),X.appendChild(se),J.appendChild(X),W[T]=z}D.appendChild(J)}return W}function B(){let E=document.getElementById("effectPreviewParams");if(!E)return{};let D={};return E.querySelectorAll("[data-param-key]").forEach(O=>{D[O.dataset.paramKey]=O.type==="range"?Number(O.value):O.value}),D}async function P(){let E=document.getElementById("effectEditModalTextarea"),D=document.getElementById("effectPreviewText"),O=document.getElementById("effectPreviewStyle"),W=document.getElementById("effectPreviewError");if(!E||!D||!O)return;let T=E.value;if(!T||T===g.t("effectLoadContent")||T===g.t("effectsNetworkError"))return;let R=B();W?.classList.add("hidden");try{let j=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:R})}),J=await j.json().catch(()=>({}));j.ok?(O.textContent=J.keyframes||"",D.style.animation=J.animation||"none",D.style.animationComposition=J.animationComposition||""):(D.style.animation="none",O.textContent="",W&&(W.textContent=J.error||g.t("previewFailed"),W.classList.remove("hidden")))}catch{D.style.animation="none",O.textContent="",W&&(W.textContent=g.t("effectsNetworkError"),W.classList.remove("hidden"))}}function f(){clearTimeout(L),L=setTimeout(()=>P(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",_),document.getElementById("effectEditModalCancel").addEventListener("click",_),document.getElementById("effectEditModal").addEventListener("click",T=>{T.target===T.currentTarget&&_()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let T=document.getElementById("effectEditModalTextarea");T&&(H(T.value),f())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{P()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let T=document.getElementById("effectEditModal"),R=document.getElementById("effectEditModalTextarea"),j=document.getElementById("effectEditModalSave"),J=T?.dataset.effectName;if(!(!J||!R)){j.disabled=!0;try{let K=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:R.value})}),G=await K.json().catch(()=>({}));K.ok?(k(G.message||g.t("effectSaveFallback"),!0),_(),await s()):k(G.error||g.t("saveFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{j.disabled=!1}}})),await s(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let T=document.getElementById("effectReloadBtn");T&&(T.disabled=!0);try{let R=await y("/admin/effects/reload",{method:"POST"}),j=await R.json().catch(()=>({}));R.ok?(k(j.message||g.t("effectsReloadFallback")),await s()):k(j.error||g.t("reloadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{T&&(T.disabled=!1)}});async function E(T){if(!T)return;let R=new FormData;R.append("effectfile",T);try{let j=await y("/admin/effects/upload",{method:"POST",body:R}),J=await j.json().catch(()=>({}));j.ok?(k(J.message||g.t("effectUploadFallback")),await s()):k(J.error||g.t("uploadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}}let D=document.getElementById("effectUploadInput"),O=D&&!D.dataset.uploadWired;O&&(D.dataset.uploadWired="1"),(O?D:null)?.addEventListener("change",async T=>{await E(T.target.files?.[0]),T.target.value=""});let W=document.getElementById("sec-effects-mgmt");if(W){let T=0,R=G=>{G.preventDefault(),T++,W.classList.add("is-drag")},j=G=>{G.preventDefault()},J=G=>{G.preventDefault(),T=Math.max(0,T-1),T===0&&W.classList.remove("is-drag")},K=async G=>{G.preventDefault(),T=0,W.classList.remove("is-drag");let te=G.dataTransfer?.files?.[0];if(te){if(!/\.(dme|dme\.zip)$/i.test(te.name)){k(g.t("fxToastBadExt"),!1);return}await E(te)}};W.addEventListener("dragenter",R),W.addEventListener("dragover",j),W.addEventListener("dragleave",J),W.addEventListener("drop",K)}}function o(E){let D=(E||"").toLowerCase();return D.startsWith("glow")||D.includes("neon")?"GLOW":D.startsWith("shake")?"SHAKE":D.startsWith("wave")||D.startsWith("spin")||D.startsWith("bounce")||D.startsWith("zoom")||D.startsWith("fire")||D.includes("motion")?"MOTION":D.startsWith("rainbow")||D.startsWith("blink")||D.includes("color")?"COLOR":D.startsWith("type")||D.includes("text")?"TEXT":"MISC"}let t={all:[],filter:"ALL",selected:null};async function s(){let E=document.getElementById("effectsList");if(E)try{let D=await y("/admin/effects");if(!D.ok){E.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let O=await D.json();t.all=O.effects||[],n(),d()}catch{E.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function n(){let E=document.getElementById("effectsFilterRow");if(!E)return;let D={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};t.all.forEach(j=>{D[o(j.name)]+=1});let O=t.all.length,W=[["ALL",g.t("fxChipAll"),O],["GLOW",g.t("fxCatGlow"),D.GLOW],["MOTION",g.t("fxCatMotion"),D.MOTION],["COLOR",g.t("fxCatColor"),D.COLOR],["SHAKE",g.t("fxCatShake"),D.SHAKE],["TEXT",g.t("fxCatText"),D.TEXT]];D.MISC>0&&W.push(["MISC",g.t("fxCatMisc"),D.MISC]);let T=W.map(([j,J,K])=>`<span class="hud-filter-chip ${t.filter===j?"is-active":""}" data-effect-filter="${j}">${J} ${K}</span>`).join(""),R=E.querySelector("[data-toolbar-spacer]");R?(E.querySelectorAll("[data-effect-filter]").forEach(j=>j.remove()),R.insertAdjacentHTML("beforebegin",T)):E.innerHTML=T,E.querySelectorAll("[data-effect-filter]").forEach(j=>{j.addEventListener("click",()=>{t.filter=j.dataset.effectFilter,n(),d()})})}function r(E){let D=(j,J)=>{let K=document.querySelector(j);K&&(K.textContent=J==null?"\u2014":String(J))},O=E.length,W=E.filter(j=>j.enabled!==!1).length,T=new Set(E.map(j=>o(j.name))),R=E.filter(j=>!m[j.name]).length;D("[data-eflib-total]",O),D("[data-eflib-active]",W),D("[data-eflib-cats]",T.size),D("[data-eflib-user]",R)}function d(){let E=document.getElementById("effectsList");if(!E)return;let D=t.all;r(D);let O=t.filter==="ALL"?D:D.filter(W=>o(W.name)===t.filter);if(!O.length){E.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(D.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}w&&w.disconnect(),E.innerHTML="",O.forEach(W=>{let T=o(W.name),R=T==="GLOW"?"is-glow":T==="COLOR"?"is-color":T==="TEXT"?"is-text":"",j=m[W.name]||"",J=!!j,K=document.createElement("div");K.className="hud-effect-card"+(t.selected===W.name?" is-selected":""),K.dataset.effectName=W.name,K.title=[W.description,`file: ${W.filename}`].filter(Boolean).join(`
`);var G="effect_"+W.name;let te=g.t(G)!==G?g.t(G):W.label||W.name,ne=J?"built-in":"user",z=j?`animation:${j};animation-play-state:paused;`:"";if(K.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${e(g.t("fxCat"+T.charAt(0)+T.slice(1).toLowerCase())||T)}</span>
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
      `,E.appendChild(K),j){let se=b();se&&se.observe(K)}else{let se=M.get(W.name);se&&se!=="failed"?(S(se),N(K,se)):se!=="failed"&&$(W.name).then(ie=>{if(!ie)return;let le=E.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(W.name)}"]`);le&&N(le,ie)})}K.addEventListener("click",se=>{se.target.closest("[data-role]")||p(W)});let X=K.querySelector('[data-role="edit"]'),Z=K.querySelector('[data-role="delete"]');X.addEventListener("click",async()=>{let se=document.getElementById("effectEditModal"),ie=document.getElementById("effectEditModalTitle"),le=document.getElementById("effectEditModalFile"),ue=document.getElementById("effectEditModalTextarea"),ke=document.getElementById("effectEditModalSave");if(!se)return;A=document.activeElement instanceof HTMLElement?document.activeElement:null,ie.textContent=W.label||W.name,le.textContent=W.filename,ue.value=g.t("effectLoadContent"),ue.disabled=!0,ke.disabled=!0,se.dataset.effectName=W.name,se.classList.remove("hidden"),se.classList.add("flex"),se.addEventListener("keydown",C),ue.focus();let Ie=document.getElementById("effectPreviewText"),ee=document.getElementById("effectPreviewStyle"),ae=document.getElementById("effectPreviewError"),de=document.getElementById("effectPreviewParams");Ie&&(Ie.style.animation="none"),ee&&(ee.textContent=""),ae&&ae.classList.add("hidden"),de&&(de.innerHTML="");try{let me=await y(`/admin/effects/${encodeURIComponent(W.name)}/content`),re=await me.json().catch(()=>({}));me.ok?(ue.value=re.content||"",ue.disabled=!1,ke.disabled=!1,ue.focus(),H(ue.value),P()):(ue.value=re.error||g.t("effectLoadContentFailed"),k(re.error||g.t("effectLoadContentFailed"),!1))}catch{ue.value=g.t("effectsNetworkError"),k(g.t("effectsNetworkError"),!1)}}),Z.addEventListener("click",async()=>{let se=W.label||W.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${se}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let le=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W.name})}),ue=await le.json().catch(()=>({}));le.ok?(k(ue.message||g.t("effectDeleteFallback"),!0),await s()):k(ue.error||g.t("deleteFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}})})}function e(E){return String(E??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(E){let D={name:"",label:"",description:"",params:[]};if(!E)return D;let O=E.split(`
`),W="top",T=null;for(let R of O){let j=R.replace(/\r$/,""),J=j.trimStart();if(!J||J.startsWith("#"))continue;let K=j.length-J.length;if(K===0){if(W="top",T&&(D.params.push(T),T=null),J==="params:"){W="params";continue}let G=J.match(/^([a-z_]+):\s*(.+)$/);G&&(G[1]==="name"?D.name=G[2].trim():G[1]==="label"?D.label=G[2].trim():G[1]==="description"&&(D.description=G[2].trim()));continue}if(!(W!=="params"&&W!=="param-fields"&&W!=="options")){if(K===2&&(W==="params"||W==="param-fields"||W==="options")){T&&(D.params.push(T),T=null);let G=J.match(/^(\w+):$/);G&&(T={key:G[1]},W="param-fields");continue}if(K===4&&W==="param-fields"&&T){let G=J.match(/^(\w+):\s*(.*)$/);if(G){let te=G[1],ne=G[2].trim();te==="label"?T.label=ne:te==="type"?T.type=ne:te==="default"?T.default=ne:te==="min"?T.min=parseFloat(ne):te==="max"?T.max=parseFloat(ne):te==="step"?T.step=parseFloat(ne):te==="options"&&(T.options=[],W="options")}continue}if(W==="options"&&T&&K>=6){let G=J.match(/^-\s*value:\s*(.+)$/);G&&(T.options||(T.options=[]),T.options.push({value:G[1].trim(),label:G[1].trim()}));let te=J.match(/^label:\s*(.+)$/);te&&T.options&&T.options.length>0&&(T.options[T.options.length-1].label=te[1].trim())}}}return T&&D.params.push(T),D}function v(E,D){let O=E.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),W=O?O[1]:"",T=E.match(/^animation:\s*["']?(.+?)["']?\s*$/m),R=T?T[1].trim():"";for(let j of D.params){let J=j.default!==void 0?j.default:"",K=new RegExp(`\\{${j.key}\\}`,"g");W=W.replace(K,J),R=R.replace(K,J)}return{keyframes:W,animation:R}}function i(E,D){if(E==="COLOR"){let O=D.find(W=>W.key==="duration");if(O&&O.default){let W=parseFloat(O.default);if(W<.25)return"crimson";if(W<.33)return"amber"}}if(E==="MOTION"){let O=D.find(W=>W.key==="height");if(O&&O.default){let W=parseFloat(O.default);if(W>30)return"crimson";if(W>24)return"amber"}}return"lime"}function l(E,D){return E==="COLOR"?D==="crimson"?g.t("fxHintFlashBlock"):D==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):D==="crimson"?g.t("fxHintAmpBlock"):D==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(E,D){let O=a(D),{keyframes:W,animation:T}=v(D,O),R=o(E.name),j=O.params.filter(ue=>ue.type!=="select"),J=O.params.filter(ue=>ue.type==="select"),K=i(R,O.params),G=K==="crimson"?"BLOCK":K==="amber"?"WARN":"OK",te=l(R,K),ne="fx-anim-"+E.name.replace(/[^a-z0-9]/gi,"-"),z=W&&T?h(ne,W):"",X=T?`animation:${T};animation-play-state:running;`:"",Z=j.map(ue=>{let ke=parseFloat(ue.default)||0,Ie=ue.min??0,ee=ue.max??100,ae=Math.max(0,Math.min(100,(ke-Ie)/(ee-Ie)*100)),de=(ue.label||"").match(/\(([^)]+)\)$/),me=de?de[1]:"",re=ue.label||ue.key;return`<div style="display:flex;flex-direction:column;gap:2px">
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
    </div>`,le}async function p(E){t.selected=E.name;let D=document.getElementById("effectsInspector"),O=document.getElementById("effectsInspectorTitle"),W=document.getElementById("effectsInspectorKicker"),T=document.getElementById("effectsInspectorBody");if(D){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),O&&(O.textContent=E.label||E.name),W&&(W.textContent="LOADING"),T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(R=>{R.classList.toggle("is-selected",R.dataset.effectName===E.name)});try{let R=await y(`/admin/effects/${encodeURIComponent(E.name)}/content`),j=await R.json().catch(()=>({}));if(R.ok){let J=j.content||"";T&&(T.className="hud-inspector-body has-param-panel",T.innerHTML=u(E,J)),W&&(W.textContent=o(E.name))}else T&&(T.className="hud-inspector-body",T.textContent="# "+(j.error||g.t("effectLoadContentFailed"))),W&&(W.textContent="ERROR")}catch{T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("effectsNetworkError")),W&&(W.textContent="NETWORK")}}}function x(){let E=document.getElementById("effectsInspectorReload"),D=document.getElementById("effectsInspectorEdit");E?.addEventListener("click",async()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}let O=t.all.find(W=>W.name===t.selected);O&&await p(O)}),D?.addEventListener("click",()=>{if(!t.selected){k(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(t.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",x())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var Ve=ye(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(k,g){y[k]||(y[k]=[]),y[k].push(g)},off:function(k,g){y[k]=(y[k]||[]).filter(function(h){return h!==g})},emit:function(k,g){(y[k]||[]).forEach(function(h){h(g)})}}})()});var Je=ye(()=>{(function(){"use strict";let y="sec-events",k="/admin/audit?limit=200",h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},A={events:[],filterSev:"all",filterCat:"all",timer:0};function U(B){let P=(B.source||B.kind||"").toLowerCase(),f=(B.action||"").toLowerCase();return P.includes("plugin")||f.includes("plugin")?"plugin":P.includes("webhook")||f.includes("webhook")?"webhook":P.includes("rate")||f.includes("rate")||f.includes("limit")?"rate":P.includes("filter")||f.includes("filter")?"filter":P.includes("overlay")||f.includes("overlay")||P==="broadcast"?"overlay":P.includes("backup")||f.includes("backup")?"backup":P.includes("msg")||P==="messaging"?"msg":P.includes("ws")||P==="websocket"?"ws":"system"}let C=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,_=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(B){let P=(B.action||B.kind||"").toLowerCase();return B.severity?B.severity:C.test(P)?"error":_.test(P)?"warn":"info"}function M(B){let P=B.source||"system",f=B.action||B.kind||"";return f?`${P.toUpperCase()}_${f.toUpperCase()}`:P.toUpperCase()}function F(B){if(!B)return"\u2014";let P=new Date(B*1e3),f=c=>String(c).padStart(2,"0");return`${f(P.getHours())}:${f(P.getMinutes())}:${f(P.getSeconds())}`}function S(B){if(B.message)return B.message;let P=B.meta||{},f=[];if(P.from&&P.to)f.push(`${P.from} \u2192 ${P.to}`);else if(P.text_preview)f.push(`"${P.text_preview.slice(0,60)}"`);else if(Object.keys(P).length){let c=Object.keys(P).slice(0,3);for(let o of c)f.push(`${o}=${JSON.stringify(P[o]).slice(0,30)}`)}return f.length?f.join(" \xB7 "):`${B.source||"system"}.${B.action||B.kind||"?"}`}function $(){return`
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
      </div>`}function N(){let B=document.querySelector("[data-ev-rows]");if(!B)return;let P=A.events,f=P.filter(t=>!(A.filterSev!=="all"&&m(t)!==A.filterSev||A.filterCat!=="all"&&U(t)!==A.filterCat));f.length===0?(B.innerHTML="",window.AdminEmpty?B.appendChild(window.AdminEmpty.render("events")):B.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):B.innerHTML=f.map(t=>{let s=m(t);return`
          <div class="admin-ev-v4__row" data-sev="${s}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${h(F(t.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${s}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${s}">${h(M(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${h(t.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${h(S(t))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:P.length,info:0,warn:0,error:0};for(let t of P)c[m(t)]+=1;Object.keys(c).forEach(t=>{let s=document.querySelector(`[data-ev-cnt="${t}"]`);s&&(s.textContent=String(c[t]))});let o=document.querySelector("[data-ev-total]");o&&(o.textContent=`${f.length} / ${P.length}`)}async function w(){try{let B=await fetch(k,{credentials:"same-origin"});if(!B.ok)return;let P=await B.json();A.events=Array.isArray(P.events)?P.events:[],N()}catch{}}function b(){let B=document.getElementById(y);B&&B.addEventListener("click",P=>{let f=P.target.closest("[data-ev-sev]");if(f){B.querySelectorAll("[data-ev-sev]").forEach(t=>t.classList.toggle("is-active",t===f)),A.filterSev=f.dataset.evSev,N();return}let c=P.target.closest("[data-ev-cat]");if(c){B.querySelectorAll("[data-ev-cat]").forEach(t=>t.classList.toggle("is-active",t===c)),A.filterCat=c.dataset.evCat,N();return}let o=P.target.closest("[data-ev-action]");if(o){if(o.dataset.evAction==="refresh")w();else if(o.dataset.evAction==="export"){let t=new Blob([JSON.stringify(A.events,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(s),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function L(){let B=document.querySelector(".admin-dash-grid"),P=document.getElementById(y);if(!P)return;let c=(B?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";P.style.display=c?"":"none",c?(w(),A.timer||(A.timer=setInterval(w,15e3))):A.timer&&(clearInterval(A.timer),A.timer=0)}function H(){let B=document.getElementById("settings-grid");!B||document.getElementById(y)||(B.insertAdjacentHTML("beforeend",$()),b(),L())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H(),L()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",L),document.addEventListener("admin-panel-rendered",()=>{H(),L()}),H()})})()});var Ye=ye(()=>{(function(){"use strict";let y="sec-modqueue",k="/admin/modqueue/list",A=window.AdminUtils&&window.AdminUtils.escapeHtml||function(f){return String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},U={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},C={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},_={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(f){let c=0,o=String(f||"");for(let t=0;t<o.length;t++)c=c*31+o.charCodeAt(t)&65535;return c%360}function M(f){if(!f.created_at_ms)return null;let c=(Date.now()-f.created_at_ms)/1e3,o=Math.max(0,U.autoRejectSec-c);return Math.ceil(o)}function F(f,c){let o=(f.severity||"low").toLowerCase(),t=C[o]||C.low,s=m(f.fp),n=String(f.fp||"\u2014").slice(0,8),r=f.nick||f.nickname||ServerI18n.t("audienceAnonymous"),d=(r||"?").slice(0,2).toUpperCase(),e=c==="pending"?M(f):null,a=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${A(f.id||"")}">${A(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${A(f.id||"")}">${A(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${A(f.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",v=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${A(ServerI18n.t("modqueueStampApproved"))} \xB7 ${A(f.resolved_by||"admin")} \xB7 ${A(f.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${f.auto_rejected?`${A(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${A(ServerI18n.t("modqueueAutoRejectTimeout",{n:U.autoRejectSec}))}`:`${A(ServerI18n.t("modqueueStampRejected"))} \xB7 ${A(f.resolved_by||"admin")} \xB7 ${A(f.resolved_ago||"")}`}
        </div>`:"",i=c==="pending"&&e!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${e}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${A(f.id||"")}" data-mq-sev="${A(o)}" style="--mq-sev:${t}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${s})">${A(d)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${A(r)}</div>
            <div class="admin-mq-card__fp">fp:${A(n)}</div>
          </div>
          <div class="admin-mq-card__time">${A(f.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${A(f.content||f.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${t}">${A(ServerI18n.t(_[o]||_.low))}</span>
          <span class="admin-mq-card__rule">${A(ServerI18n.t("modqueueRuleLabel"))}: ${A(f.rule||f.matched_rule||"?")}</span>
          ${i}
        </div>
        ${a}
        ${v}
      </div>`}function S(f,c,o){f&&(f.innerHTML=c.map(t=>F(t,o)).join(""))}function $(){let f=document.getElementById(y);if(!f)return;f.querySelectorAll("[data-mq-bulk]").forEach(o=>{o.disabled=!0}),f.querySelector(".admin-mq__body").hidden=!0;let c=f.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function N(){let f=document.getElementById(y);if(!f)return;if(U.pending.length+U.approved.length+U.rejected.length===0){$();return}f.querySelector(".admin-mq__body").hidden=!1;let o=f.querySelector("[data-mq-empty]");o&&(o.hidden=!0),S(f.querySelector("[data-mq-col-pending]"),U.pending,"pending"),S(f.querySelector("[data-mq-col-approved]"),U.approved,"approved"),S(f.querySelector("[data-mq-col-rejected]"),U.rejected,"rejected");let t=(d,e)=>{f.querySelectorAll(d).forEach(a=>{a.textContent=String(e)})};t("[data-mq-cnt-pending]",U.pending.length),t("[data-mq-cnt-approved]",U.approved.length),t("[data-mq-cnt-rejected]",U.rejected.length);let s=U.pending.length===0;f.querySelectorAll("[data-mq-bulk]").forEach(d=>{d.disabled=s});let n=U.pending[U.pending.length-1],r=f.querySelector("[data-mq-oldest]");if(r){let d=n?M(n):null;r.textContent=d!=null?`oldest: ${d}s`:""}t("[data-mq-throughput]",U.stats.throughput.toFixed?U.stats.throughput.toFixed(1):U.stats.throughput),t("[data-mq-avg-review]",U.stats.avg_review_sec.toFixed?U.stats.avg_review_sec.toFixed(1):U.stats.avg_review_sec),t("[data-mq-auto-rate]",Math.round(U.stats.auto_reject_pct||0)+"%")}async function w(){try{let f=await fetch(k,{credentials:"same-origin"});if(!f.ok){U.pending=[],U.approved=[],U.rejected=[],N();return}let c=await f.json();U.pending=Array.isArray(c.pending)?c.pending:[],U.approved=Array.isArray(c.approved)?c.approved:[],U.rejected=Array.isArray(c.rejected)?c.rejected:[],U.stats=c.stats||U.stats,typeof c.auto_reject_sec=="number"&&(U.autoRejectSec=c.auto_reject_sec),N()}catch{}}async function b(f,c,o){if(window.csrfFetch)try{let t=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f,...o||{}})});if(t.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),w();else{let s=await t.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:s.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function L(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
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
      </div>`}function H(){let f=document.getElementById(y);f&&f.addEventListener("click",async c=>{let o=c.target.closest("[data-mq-action]");if(o){let s=o.dataset.mqId,n=o.dataset.mqAction;(n==="approve"||n==="reject")&&b(s,n);return}let t=c.target.closest("[data-mq-bulk]");if(t){let s=t.dataset.mqBulk,n=s==="approve-low";if(!await window.HudConfirm?.open({icon:n?"\u2713":"\u2298",title:n?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:n?"warn":"danger",body:n?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:n?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let d=s.startsWith("approve")?"approve":"reject",e=s.endsWith("low")?"low":"high";b(null,"bulk",{action:d,severity:e})}})}function B(){let f=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!c)return;let o=(location.hash||"").replace("#/","").split("/"),t=f?.dataset.activeRoute||o[0]||"",s=f?.dataset.activeLeaf||o[1]||"",n=t==="modqueue"||t==="moderation"&&(s==="queue"||s===""||s==="moderation");c.style.display=n?"":"none",n?(U.timer||(w(),U.timer=setInterval(w,4e3)),U.countdownTimer||(U.countdownTimer=setInterval(N,1e3))):(U.timer&&(clearInterval(U.timer),U.timer=0),U.countdownTimer&&(clearInterval(U.countdownTimer),U.countdownTimer=0))}function P(){let f=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!f||document.getElementById(y)||(f.insertAdjacentHTML("beforeend",L()),H(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&P(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{P(),B()}),P()})})()});var Qe=ye(()=>{(function(){"use strict";let y="sec-modbans-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(L){return String(L).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],h={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},A={fingerprint:"FP",ip:"IP",nick:"NICK"},U={rows:[],refreshTimer:0};async function C(){try{let L=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!L.ok)return;let H=await L.json();U.rows=Array.isArray(H.bans)?H.bans:[],M()}catch{}}function _(L){if(!L||L<=0)return"\u2014";let H=Math.floor(L/86400),B=Math.floor(L%86400/3600),P=Math.floor(L%3600/60);return H>0?`${H}d ${B}h`:B>0?`${B}h ${P}m`:`${P}m`}function m(L){let H=L.target_kind;return H==="fingerprint"?`fp:${(L.target||"").slice(0,8)}`:H==="nick"?`@${L.target}`:L.target||"\u2014"}function M(){let L=document.querySelector("[data-modbans-list]");if(!L)return;let H=U.rows||[],B=document.querySelector("[data-modbans-count]");if(B&&(B.textContent=String(H.length)),H.length===0){L.innerHTML="";let P=window.AdminEmpty.render("blacklist");P.dataset.emptyKind="modbans",L.appendChild(P);return}L.innerHTML=H.map(function(P){let f=P.status==="expired",c=P.status==="permanent",o="admin-modbans-chip is-"+P.status,t=c?ServerI18n.t("modbansPermanent"):f?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:_(P.remaining_s)}),s=encodeURIComponent(P.target_kind)+"|"+encodeURIComponent(P.target);return`
        <div class="admin-modbans-row ${f?"is-expired":""}">
          <span class="admin-modbans-target">${k(m(P))}</span>
          <span class="admin-modbans-kind">${k(A[P.target_kind]||P.target_kind)}</span>
          <span class="admin-modbans-reason">${k(P.reason||"\u2014")}</span>
          <span class="${o}">
            ${P.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${k(t)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${s}"
            ${f?"disabled":""}
            title="${f?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${f?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function F(L){let H=L||{},B=H.kind||"ban",P=window.HudConfirm,f=!H.target,c=H.target_kind||"fingerprint",o=H.target||"";return new Promise(function(t){if(!P){t(!1);return}let s=86400,n=!1,r=12,d="hour",e=document.createElement("div");e.className="admin-modbans-modal-body",e.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${k(h[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${k(A[c]||"?")} ${k((B||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${k(o?m({target_kind:c,target:o}):"\u2014")}</div>
          </div>
        </div>
        ${f?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(G){return`<button type="button" class="admin-modbans-modal-preset${G===c?" is-active":""}"
                data-modbans-target-kind="${G}">${k(h[G])} ${k(A[G])}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let a=e.querySelector("[data-modbans-custom-row]"),v=e.querySelector("[data-modbans-custom-input]"),i=e.querySelector("[data-modbans-custom-seconds]"),l=e.querySelector("[data-modbans-when]"),u=e.querySelector("[data-modbans-custom]"),p=e.querySelector("[data-modbans-target]"),x=e.querySelector("[data-modbans-target-icon]"),I=e.querySelector("[data-modbans-target-label]"),E=e.querySelector("[data-modbans-target-val]"),D=function(){x.textContent=h[c]||"?",I.textContent=`${A[c]||"?"} ${(B||"ban").toUpperCase()}`,E.textContent=o?m({target_kind:c,target:o}):"\u2014"},O=function(){return Math.max(1,parseInt(v.value,10)||1)*(d==="day"?86400:3600)},W=function(){if(s===0){l.textContent=ServerI18n.t("modbansWhenPermanent"),l.classList.remove("is-custom");return}let G=new Date(Date.now()+s*1e3),te=z=>String(z).padStart(2,"0"),ne=`${G.getFullYear()}-${te(G.getMonth()+1)}-${te(G.getDate())} ${te(G.getHours())}:${te(G.getMinutes())}`;n?(l.textContent=ServerI18n.t("modbansWhenCustom",{n:r,unit:ServerI18n.t(d==="day"?"modbansDay":"modbansHour"),stamp:ne}),l.classList.add("is-custom")):(l.textContent=ServerI18n.t("modbansWhenPreset",{dur:_(s),stamp:ne}),l.classList.remove("is-custom"))},T=function(){let G=O();i.textContent=`= ${G.toLocaleString()}s`,n&&(r=Math.max(1,parseInt(v.value,10)||1),s=G,W())},R=e.querySelector("[data-modbans-presets]"),j=function(){n=!0,a.hidden=!1,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(G){G.classList.toggle("is-active",G===u)}),T()},J=function(G){n=!1,a.hidden=!0,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(te){te.classList.toggle("is-active",te===G)})};D(),W(),T(),e.addEventListener("click",function(G){let te=G.target.closest("[data-modbans-target-kind]");if(te){c=te.dataset.modbansTargetKind,te.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(X){X.classList.toggle("is-active",X===te)}),D();return}if(G.target.closest("[data-modbans-custom]")){j();return}let ne=G.target.closest("[data-modbans-custom-unit]");if(ne){d=ne.dataset.modbansCustomUnit||"hour",e.querySelectorAll("[data-modbans-custom-unit]").forEach(function(X){X.classList.toggle("is-active",X===ne)}),T();return}let z=G.target.closest("[data-modbans-duration]");z&&(s=parseInt(z.dataset.modbansDuration,10)||0,J(z),W())}),v.addEventListener("input",T),p&&p.addEventListener("input",function(){o=p.value.trim(),D()});let K=e.querySelector("[data-modbans-reason]");P.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:e,width:480}).then(function(G){if(!G){t(!1);return}if(!o){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),t(!1);return}s===0?P.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${k(m({target_kind:c,target:o}))}</b>`})}).then(function(te){if(!te){t(!1);return}S(c,o,s,K.value.trim(),B).then(t)}):S(c,o,s,K.value.trim(),B).then(t)})})}async function S(L,H,B,P,f){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:L,target:H,duration_s:B,reason:P||"",kind:f||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(B===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:_(B)}),!0),C(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function $(L){let H=(L||"").split("|");if(H.length!==2)return;let B=decodeURIComponent(H[0]),P=decodeURIComponent(H[1]);try{let f=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:P})});if(!f.ok)throw new Error(`HTTP ${f.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),C()}catch(f){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:f.message||ServerI18n.t("modbansUnknownError")}),!1)}}function N(){return`
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
      </div>`}function w(){let L=document.getElementById(y);if(!L||L.dataset.modbansBound==="1")return;L.dataset.modbansBound="1",L.addEventListener("click",function(B){if(B.target.closest("[data-modbans-add]")){F({kind:"ban"});return}let P=B.target.closest("[data-modbans-unban]");P&&!P.disabled&&$(P.dataset.modbansUnban)});let H=L.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let L=document.getElementById("settings-grid");!L||document.getElementById(y)||(L.insertAdjacentHTML("beforeend",N()),w(),C(),U.refreshTimer||(U.refreshTimer=setInterval(C,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:F,refreshList:C,formatTarget:m,formatRemaining:_}})()});var Xe=ye(()=>{(function(){"use strict";let y="admin-mobile-nav-root",k=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],h={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},A=!1,U=0;function C(){return`
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
      </nav>`}function _(){let w=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=h[w]||w;return k.some(L=>L.id===b)?b:g.some(L=>L.route===b)?"more":""}function m(){let w=document.getElementById(y);if(!w)return;let b=_();w.querySelectorAll("[data-mn-tab]").forEach(L=>{L.classList.toggle("is-active",L.dataset.mnTab===b),L.dataset.mnTab!=="more"&&L.setAttribute("aria-current",L.dataset.mnTab===b?"page":"false")})}function M(w){let b=document.getElementById(y);if(!b)return;A=w,b.dataset.overflow=w?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!w,b.querySelector("[data-mn-backdrop]").hidden=!w;let L=b.querySelector("[data-mn-tab='more']");L?.classList.toggle("is-active",w),L?.setAttribute("aria-expanded",w?"true":"false")}function F(w){if(w.target.closest("[data-mn-backdrop]")){M(!1);return}if(w.target.closest("[data-mn-logout]")){M(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let b=w.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){M(!A);return}M(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let L=w.target.closest("[data-mn-route]");L&&L.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+L.dataset.mnRoute)}async function S(){try{let w=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!w.ok)return;let b=await w.json(),L=Array.isArray(b.pending)?b.pending.length:0;U=L;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(L),H.hidden=!(L>0)}catch{}}function $(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let w=0;function b(){let L=document.activeElement,H=L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(w),w=requestAnimationFrame(()=>setTimeout(b,50))})}function N(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",C()),document.addEventListener("click",F),window.addEventListener("hashchange",()=>{M(!1),m()}),m(),S(),setInterval(S,8e3),$())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()})()});var Ze=ye(()=>{(function(){"use strict";var y="admin-session-expired-root",k=!1,g=null;function h(m,M){try{var F=window.ServerI18n&&ServerI18n.t(m);return F&&F!==m?F:M}catch{return M}}function A(){var m=document.getElementById(y);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),k=!1,g&&g.focus)try{g.focus()}catch{}g=null}function U(m){if(m.key==="Tab"){var M=document.getElementById(y);if(M){var F=M.querySelectorAll("input, button");if(F.length){var S=F[0],$=F[F.length-1];m.shiftKey&&document.activeElement===S?(m.preventDefault(),$.focus()):!m.shiftKey&&document.activeElement===$&&(m.preventDefault(),S.focus())}}}}function C(){if(!(k||document.getElementById(y))){k=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=y,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+h("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+h("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+h("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+h("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+h("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+h("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",U,!0);var M=m.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(F){F.preventDefault(),_(m,M)})}}function _(m,M){var F=m.querySelector("[data-sx-error]"),S=m.querySelector(".admin-sx__submit");F.hidden=!0,S.disabled=!0;var $=new URLSearchParams;$.set("password",M.value),m.querySelector("#admin-sx-remember").checked&&$.set("remember","1");var N=window.__adminRawFetch||window.fetch;N.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:$.toString()}).then(function(w){return w.json().then(function(b){return{status:w.status,data:b}},function(){return{status:w.status,data:{}}})}).then(function(w){if(S.disabled=!1,w.status===200&&w.data&&w.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&w.data.csrf_token&&(b.content=w.data.csrf_token),document.removeEventListener("keydown",U,!0),A(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(h("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}w.status===429?F.textContent=h("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):F.textContent=h("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),F.hidden=!1,M.select()}).catch(function(){S.disabled=!1,F.textContent=h("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),F.hidden=!1})}window.AdminSessionExpired={open:C,close:A,isOpen:function(){return k}}})()});var et=ye(()=>{(function(){"use strict";let y="admin-reconnect-banner",A=0,U=0,C="ok",_=0,m=5e3,M=!1,F=0;function S(o){if(C!==o){if(C=o,o==="ok"||o==="dismissed"){N(),o==="ok"&&(A=0,U=0,m=5e3);return}$()}}function $(){let o=document.getElementById(y);o||(o=document.createElement("div"),o.id=y,o.className="admin-rcb",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),document.body.insertBefore(o,document.body.firstChild)),o.dataset.state=C;let t=C==="exhausted",s=t?"admin-rcb--crimson":"admin-rcb--amber";o.className=`admin-rcb ${s}`,o.innerHTML=t?b():w(),o.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),o.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>S("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",t),F||(F=setInterval(L,250))}function N(){let o=document.getElementById(y);o&&o.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),F&&(clearInterval(F),F=0)}function w(){let o=Math.max(0,(_-Date.now())/1e3),t=m/1e3,s=Math.min(100,(t-o)/t*100);return`
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody",{n:U})}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${s}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function b(){return`
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function L(){if(C!=="reconnecting")return;let o=document.getElementById(y);if(!o)return;let t=Math.max(0,(_-Date.now())/1e3),s=m/1e3,n=Math.min(100,(s-t)/s*100),r=o.querySelector(".admin-rcb__progress-fill");r&&(r.style.width=n+"%")}function H(){U=0,A=0,m=5e3,S("reconnecting"),B()}async function B(){try{let o=await fetch("/admin/bootstrap",{credentials:"same-origin"});o.ok?P():o.status===401||o.status===403?S("ok"):f()}catch{f()}}function P(){S("ok")}function f(){if(A+=1,U+=1,U>=10){S("exhausted");return}A>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,U-1))),_=Date.now()+m,S("reconnecting"),setTimeout(B,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let o=window.csrfFetch,t=window.fetch;window.__adminRawFetch=t,document.addEventListener("admin:session-restored",()=>{M=!1,P()});async function s(n){try{let r=await n;return r&&r.ok?C!=="ok"&&C!=="dismissed"&&P():r&&r.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):r&&r.status>=500&&f(),r}catch(r){throw f(),r}}typeof o=="function"&&(window.csrfFetch=function(){return s(o.apply(this,arguments))}),window.fetch=function(n,r){let d=typeof n=="string"?n:n&&n.url||"",e=t.call(this,n,r);return d.startsWith("/admin/")||d.indexOf("//")===-1&&d.startsWith("admin/")?s(e):e}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var tt=ye(()=>{(function(){"use strict";let y="admin-help-drawer-root",k={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],h=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function A(w){return w==null?"":String(w).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function U(){let w=(location.hash||"").replace("#/","").split("/")[0]||"";return k[w]?w:"_default"}function C(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function _(){let w=k[U()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",L=w.titleKey?ServerI18n.t(w.titleKey):w.title,H=w.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${A(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),B=w.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${A(ServerI18n.t(w.fieldTipKey))}</span>
      </div>`:"",P=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${A(c.term)}</div>
        <div class="admin-help__glossary-def">${A(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),f=h.map(c=>`
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
          <div class="admin-help__tips">${H}</div>
          ${B}
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
          <div class="admin-help__glossary">${P}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${f}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+A(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let w=document.getElementById(y);w||(document.body.insertAdjacentHTML("beforeend",C()),w=document.getElementById(y),w.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){M();return}b.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),w.querySelector("[data-help-body]").innerHTML=_(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",S)}function M(){let w=document.getElementById(y);w&&w.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",S)}function F(){document.getElementById(y)?M():m()}function S(w){w.key==="Escape"&&(w.preventDefault(),M())}function $(w){let b=w.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||w.key==="F1"&&(w.preventDefault(),F())}function N(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",$)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N(),window.AdminHelp={open:m,close:M,toggle:F}})()});var nt=ye(()=>{(function(){"use strict";var y="admin-shortcuts-root",k=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(f,c){try{var o=window.ServerI18n&&ServerI18n.t(f);return o&&o!==f?o:c}catch{return c}}function h(f,c){window.showToast&&window.showToast(f,c!==!1)}function A(f,c){return(window.csrfFetch||window.fetch)(f,c||{})}function U(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function C(){var f=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).mode==="live")}catch{}try{var o=await A("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:f?"standby":"live"})});if(!o.ok)throw new Error("HTTP "+o.status);h(g(f?"ksToastDisplayOff":"ksToastDisplayOn",f?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{h(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function _(){try{var f=await A("/admin/overlay/clear",{method:"POST"});if(!f.ok)throw new Error("HTTP "+f.status);h(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{h(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var f="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(f=(await c.json()).state||"idle")}catch{}if(f==="idle"){location.hash="#/polls",h(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var o=f==="active";try{var t=await A(o?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!t.ok)throw new Error("HTTP "+t.status);h(g(o?"ksToastPollEnded":"ksToastPollStarted",o?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{h(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(f){return k?f.metaKey:f.ctrlKey}var F=k?"\u2318":"Ctrl",S=[{group:"global",keys:[F,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(f){return M(f)&&(f.key==="k"||f.key==="K")},run:U},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(f){return f.key==="?"&&!M(f)&&!f.altKey||f.key==="/"&&M(f)},run:function(){H()}},{group:"global",keys:[F,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(f){return M(f)&&f.shiftKey&&(f.key==="d"||f.key==="D")},run:C},{group:"global",keys:[F,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(f){return M(f)&&f.shiftKey&&f.key==="Backspace"},run:_},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(f){return!M(f)&&"jkJK".indexOf(f.key)>=0},run:function(f){window.AdminLiveFeed.moveFocus(f.key==="j"||f.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(f){return!M(f)&&(f.key==="b"||f.key==="B")},run:function(f){window.AdminLiveFeed.blockFocused(f.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(f){return!M(f)&&f.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(f){return!M(f)&&(f.key==="p"||f.key==="P")},run:m}];function $(f){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(f):f==null?"":String(f).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function N(f){return S.filter(function(c){return c.group===f}).map(function(c){var o=c.keys.map(function(t){return t==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+$(t)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+$(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+o+"</span></div>"}).join("")}function w(){var f=document.getElementById(y);f&&f.remove(),document.removeEventListener("keydown",b,!0)}function b(f){(f.key==="Escape"||f.key==="?")&&(f.preventDefault(),w())}function L(){if(!document.getElementById(y)){var f=document.createElement("div");f.id=y,f.className="admin-ks",f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.setAttribute("aria-labelledby","admin-ks-title"),f.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+$(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+$(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+N("global")+'</div><div class="admin-ks__group-label">'+$(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+N("feed")+'</div><p class="admin-ks__note">'+$(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+$(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(f),f.addEventListener("click",function(o){o.target.closest("[data-ks-close]")&&w()}),document.addEventListener("keydown",b,!0);var c=f.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function H(){document.getElementById(y)?w():L()}function B(f){if(!f)return!1;if(f.isContentEditable)return!0;var c=(f.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function P(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(f){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=B(document.activeElement),o=0;o<S.length;o++){var t=S[o];if(t.group==="feed"){if(c||!P())continue}else if(c&&!M(f))continue;if(t.match(f)){f.preventDefault(),t.run(f);return}}}),window.AdminShortcuts={open:L,close:w,toggle:H,list:function(){return S.slice()}}})()});var at=ye(()=>{(function(){"use strict";let y="theme-mode",k="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let $=localStorage.getItem(k);($==="light"||$==="dark"||$==="auto")&&(localStorage.setItem(y,$),localStorage.removeItem(k))}catch{}})();function A(){try{let S=localStorage.getItem(y);if(S==="light"||S==="dark"||S==="auto")return S}catch{}return"auto"}function U(S){try{localStorage.setItem(y,S)}catch{}}function C(S){let $=document.documentElement;S==="auto"?$.removeAttribute("data-theme"):$.setAttribute("data-theme",S),m(S)}function _(S){return S==="light"||S==="dark"?S:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(S){let $=document.getElementById(g);if(!$)return;let N=_(S);$.dataset.mode=S,$.dataset.effective=N,$.textContent=S==="auto"?"\u25D0":N==="light"?"\u2600":"\u263E",$.title=S==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:N==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):S==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let S=A(),$=S==="auto"?"light":S==="light"?"dark":"auto";U($),C($)}function F(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let S=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,$=document.getElementById(g);if($){S&&$.classList.contains("admin-theme-toggle--floating")&&S.parentNode&&!S.parentNode.contains($)&&($.classList.remove("admin-theme-toggle--floating"),S.parentNode.insertBefore($,S));return}let N=document.createElement("button");N.id=g,N.type="button",N.className="admin-theme-toggle",N.addEventListener("click",M),S&&S.parentNode?S.parentNode.insertBefore(N,S):(N.classList.add("admin-theme-toggle--floating"),document.body.appendChild(N)),m(A())}if(C(A()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{A()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",S=>{S.key===y&&C(A())}),window.AdminThemeSwitcher={getMode:A,setMode:function(S){S!=="auto"&&S!=="light"&&S!=="dark"||(U(S),C(S),m(S),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:S}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0})}):(F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0}))})()});var it=ye(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},k=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,h){y[g]=h,k.forEach(function(A){A(g,h)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,h)},subscribe:function(g){k.push(g)},getAll:function(){return Object.assign({},y)}}})()});var st=ye(()=>{(function(){"use strict";let g=0;function h(){return window.__adminCtx||{}}function A(){let m=h();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function U(){let m=A();if(m&&typeof m.OpsContact<"u"){let M=m.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function C(){let m=h().appContainer||document.getElementById("app-container");if(!m)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
    `;let F=m.querySelector("[data-login-reveal]");F&&F.addEventListener("click",()=>{let w=document.getElementById("password");if(!w)return;let b=w.type==="text";w.type=b?"password":"text",F.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{w.focus()}catch{}});let S=document.getElementById("loginForm"),$=document.getElementById("password"),N=document.getElementById("loginAttemptsHint");if(S){try{let w=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(w)&&w>0){g=w;let b=Math.max(0,5-g);if(N&&g>0&&b>0){N.hidden=!1;let L=document.getElementById("password");L&&L.classList.add("is-error"),N.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}S.addEventListener("submit",async w=>{if(w.preventDefault(),!$)return;let b=new URLSearchParams;b.set("password",$.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let L=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(L.status===429){let H=L.headers.get("Retry-After"),B=parseInt(H,10),P=Number.isFinite(B)&&B>0?B:300;_(P);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(L){console.error("Login submit failed:",L),N&&(N.hidden=!1,N.textContent=ServerI18n.t("networkError"))}})}}function _(m){let M=document.getElementById("adminLoginCard");if(!M)return;let F=U(),S=F?`<a class="admin-lockout-contact" href="${F}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
    `;let $=document.getElementById("lockoutCountdown"),N=m,w=L=>{let H=Math.floor(L/60),B=L%60;return`${String(H).padStart(2,"0")}:${String(B).padStart(2,"0")}`};$&&($.textContent=w(N));let b=setInterval(()=>{N-=1,$&&($.textContent=w(Math.max(0,N))),N<=0&&(clearInterval(b),g=0,C(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:C,renderLockout:_}})()});var ot=ye(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function k(e){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(e):String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function g(){try{let e=y();await e.prime();let a=e.get("history_stats"),[v,i,l]=await Promise.all([a?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!i.ok)return;let u=a||(v&&v.ok?await v.json():null);if(!u)return;let p=(await i.json()).distribution||[],x=u.stats&&u.stats.total||0,I=p.reduce((j,J)=>J.count>(j?.count||-1)?J:j,null),E=I?I.count:0,D=I?(I.hour||"").slice(-5):"\u2014",O=document.querySelector('[data-kpi="messages"]');O&&(O.querySelector("[data-kpi-value]").textContent=x.toLocaleString());let W=document.querySelector('[data-kpi="peak"]');W&&(W.querySelector("[data-kpi-value]").textContent=E.toLocaleString());let T=document.querySelector('[data-kpi="unique-fp"]');if(T){let j=new Set;(u.records||[]).forEach(J=>{let K=J.fingerprint||J.fp||J.user_fingerprint;K&&j.add(K)}),T.querySelector("[data-kpi-value]").textContent=j.size.toLocaleString()}let R=document.querySelector('[data-kpi="session"]');if(R){let j=l&&l.ok?await l.json():null,J=j&&j.status==="live",K=R.querySelector("[data-kpi-value]");if(J&&j.started_at){let G=Math.max(0,Math.floor(Date.now()/1e3-j.started_at)),te=Math.floor(G/3600),ne=Math.floor(G%3600/60);K.textContent=te>0?`${te}:${String(ne).padStart(2,"0")}:${String(G%60).padStart(2,"0")}`:`${ne}:${String(G%60).padStart(2,"0")}`}else K.textContent="\u2014"}}catch{}}function h(e,a){let v=document.querySelector(e);if(v){if(typeof a!="number"||a<=0){v.hidden=!0;return}v.hidden=!1,v.textContent=a>999?"999+":String(a)}}async function A(){try{let e=y();await e.prime();let a=e.get("blacklist"),v=e.get("widgets"),i=e.get("history_stats"),l=e.get("effects"),u=e.get("themes");h("[data-count-blacklist]",Array.isArray(a)?a.length:0),h("[data-count-widgets]",Array.isArray(v?.widgets)?v.widgets.length:0),h("[data-count-messages]",i?.stats?.last_24h||0),h("[data-count-effects]",Array.isArray(l?.effects)?l.effects.length:0),h("[data-count-themes]",Array.isArray(u?.themes)?u.themes.length:0);try{let p=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(p.ok){let x=await p.json();h("[data-count-plugins]",Array.isArray(x?.plugins)?x.plugins.length:0)}}catch{}}catch{}}async function U(){A(),C(),r()}async function C(){let e=document.querySelector("[data-dash-poll-body]"),a=document.querySelector("[data-dash-poll-timer]");if(e)try{let v=y();await v.prime();let l=v.get("metrics");if(!l){let E=await fetch("/admin/metrics",{credentials:"same-origin"});if(!E.ok)return;l=await E.json()}let u=l.poll_state;if(!u||!u.active||!Array.isArray(u.options)||u.options.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,a&&(a.textContent="");return}let p=u.options.reduce((E,D)=>E+(D.votes||0),0),x=["A","B","C","D","E","F"],I=0;if(u.options.forEach((E,D)=>{(E.votes||0)>(u.options[I].votes||0)&&(I=D)}),e.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${k(u.question||ServerI18n.t("dashPollRunning"))}</div>`+u.options.map((E,D)=>{let O=p?Math.round(E.votes/p*100):0;return`
            <div class="admin-dash-poll-opt ${D===I&&p>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${x[D]||String(D+1)}</span>
                <span class="label">${k(E.label||"")}</span>
                <span class="pct">${O}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:E.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${O}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:p})}</div>`,a){let E=u.remaining_seconds;a.textContent=typeof E=="number"&&E>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(E/60),ss:String(E%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function _(e){let a=e.visible!==!1,v=e.config&&e.config.title||e.type||"widget",i=(e.type||"widget").toUpperCase(),l=(e.position||"\u2014").toUpperCase(),u=a?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",p=e.created_at&&a?Math.max(0,Math.floor(Date.now()/1e3-e.created_at)):null,x=p!=null?(()=>{let I=Math.floor(p/86400),E=Math.floor(p%86400/3600),D=Math.floor(p%3600/60),O=p%60;return I>0?`UPTIME \xB7 ${I}d ${String(E).padStart(2,"0")}h`:E>0?`UPTIME \xB7 ${E}:${String(D).padStart(2,"0")}:${String(O).padStart(2,"0")}`:`UPTIME \xB7 ${D}:${String(O).padStart(2,"0")}`})():`STATUS \xB7 ${a?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${k(e.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${u}"></span>
          <span class="kind">${k(i)}</span>
          <span class="cat">${k(l)}</span>
        </div>
        <div class="title">${k(v)}</div>
        <div class="uptime">${x}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${a?" is-active":""}" data-widget-action="toggle" data-running="${a?"1":"0"}">${a?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(e,a){try{let v=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:e,config:{visible:!a}})});if(!v.ok)throw new Error("HTTP "+v.status);F()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(e){e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",a=>{let v=a.target.closest(".admin-dash-widget-tile");if(!v)return;let i=a.target.dataset.widgetAction,l=v.dataset.widgetId;if(!(!i||!l)){if(i==="toggle")m(l,a.target.dataset.running==="1");else if(i==="config"){let u=document.querySelector('[data-route="widgets"]');u&&u.click()}}}))}async function F(){let e=document.querySelector("[data-dash-widgets]");if(e)try{let a=y();await a.prime();let v=a.get("widgets");if(!v){let l=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!l.ok){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}v=await l.json()}let i=(v.widgets||v.items||[]).slice(0,4);if(i.length===0){e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}e.innerHTML='<div class="admin-dash-widget-grid">'+i.map(_).join("")+"</div>",M(e)}catch{e.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let S=null,$=null,N=null;function w(e){let a=Math.max(0,Math.floor(Date.now()/1e3-e)),v=Math.floor(a/3600),i=Math.floor(a%3600/60),l=a%60;return v>0?`${v}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}function b(e){let a=document.getElementById("admin-session-banner"),v=document.getElementById("sec-live-feed");if(v&&v.classList.toggle("is-idle-collapsed",!(e&&e.status==="live")),a&&a.classList.toggle("is-hero",!(e&&e.status==="live")),!a)return;if(S=e,!(e&&e.status==="live"))a.hidden=!1,a.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let l=e.started_at||Date.now()/1e3;a.hidden=!1,a.innerHTML=`
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
        </div>`,L(l)}a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",B))}function L(e){N&&clearInterval(N);let a=()=>{let v=document.querySelector("[data-sess-timer]");v&&(v.textContent=w(e))};a(),N=setInterval(a,1e3)}function H(){N&&(clearInterval(N),N=null)}async function B(e){let a=e.target.closest("[data-sess-action]");if(!a)return;let v=a.dataset.sessAction;if(v==="open"){let i=document.querySelector("[data-sess-name]"),l=(i?i.value:"").trim();if(!l){i&&i.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}a.disabled=!0;try{let u=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l})}),p=await u.json();if(!u.ok){window.showToast&&window.showToast(p.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:l}),!0),b(p.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{a.disabled=!1}}else if(v==="close"){let i=a.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",l=(x,I)=>`<option value="${x}"${x===i?" selected":""}>${I}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${l("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${l("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${l("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;a.disabled=!0;let p=document.getElementById("sessCloseBehavior")?.value;if(p&&p!==i)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:p})})}catch{}try{let x=await window.csrfFetch("/admin/session/close",{method:"POST"}),I=await x.json();if(!x.ok){window.showToast&&window.showToast(I.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),b({status:"idle",viewer_end_behavior:I.archived&&I.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{a.disabled=!1}}}async function P(){try{let e=await fetch("/admin/session/current",{credentials:"same-origin"});if(!e.ok)return;let a=await e.json();b(a)}catch{}}function f(){P(),$&&clearInterval($),$=setInterval(P,1e4)}function c(){$&&(clearInterval($),$=null),H()}let o=null;async function t(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.offsetParent===null)return;let a=0,v=!1;try{let x=await fetch("/overlay_status",{credentials:"same-origin"});x.ok&&(a=(await x.json()).overlay_count||0)}catch{}try{let x=await fetch("/admin/broadcast/status",{credentials:"same-origin"});x.ok&&(v=(await x.json()).mode==="live")}catch{}let i=a>0&&v;e.classList.toggle("is-on",i);let l=e.querySelector("[data-cockpit-status]");l&&(l.textContent=i?ServerI18n.t("adminCockpitOn",{n:a}):ServerI18n.t("adminCockpitOff"));let u=e.querySelector('[data-cockpit-action="toggle"]');u&&(u.dataset.i18n=v?"broadcastBigPause":"broadcastBigResume",u.textContent=ServerI18n.t(u.dataset.i18n),u.dataset.next=v?"standby":"live");let p=e.querySelector('[data-cockpit-action="clear"]');p&&(p.disabled=a===0)}function s(){let e=document.querySelector("[data-cockpit-overlay]");if(!e||e.dataset.bound)return;e.dataset.bound="1",e.addEventListener("click",async i=>{let l=i.target.closest("[data-cockpit-action]");if(!l)return;let u=l.dataset.cockpitAction;if(u==="clear"){window.AdminOverlayControl?.clearScreen();return}u==="toggle"&&(await window.AdminOverlayControl?.setDisplay(l.dataset.next==="live"),t())});let a=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="idle-qr"]');a&&a.addEventListener("click",n);let v=e.parentElement&&e.parentElement.querySelector('[data-cockpit-action="poll"]');v&&v.addEventListener("click",()=>{location.hash="#/polls"})}async function n(){let e;try{let i=await fetch("/admin/qr/public",{credentials:"same-origin"});if(!i.ok)throw new Error("HTTP "+i.status);e=await i.json()}catch{window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1);return}let a=document.createElement("div");a.className="admin-soh-qr",a.innerHTML=e.svg,await window.HudConfirm?.open({icon:"\u25A6",titleText:e.url,body:a,severity:"info",confirmLabel:ServerI18n.t("copyBtn"),cancelLabel:ServerI18n.t("close"),width:360})&&navigator.clipboard?.writeText(e.url).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1))}function r(){s(),t(),o&&clearInterval(o),o=setInterval(t,5e3)}function d(){o&&(clearInterval(o),o=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:U,refreshSidebarBadges:A,populatePoll:C,populateWidgets:F,refreshSessionBanner:P,startSessionPolling:f,stopSessionPolling:c,refreshCockpitOverlay:t,startCockpitPolling:r,stopCockpitPolling:d}})()});var rt=ye(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",k=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],h=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(V){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[V]})},A={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},U=[14,20,32,44,64],C=window.DANMU_CONFIG?.defaultColorPalette||[],_=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(q,V){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let Y=window.ServerI18n.t(q,V);if(Y&&Y!==q)return Y}return q}let M={};function F(q){if(M[q]!=null)return M[q];let V=A[q];return V?V.step:1}function S(q,V){M[q]=Number(V)||F(q)}let $={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",palettePreview:null,paletteNotice:null},N=["Color","FontFamily","Layout"];function w(q){return N.indexOf(q)!==-1}function b(q){let V=$.options&&$.options[q],Y=V&&V[1];return Array.isArray(Y)?Y.slice():[]}function L(q){return q==="Color"?C.map(V=>V.replace(/^#/,"").toUpperCase()):q==="Layout"?_.map(V=>V.value):q==="FontFamily"?($.fonts&&$.fonts.length?$.fonts:["NotoSansTC","Inter"]).map(Y=>typeof Y=="string"?Y:Y.name||Y.family||"").filter(Boolean):[]}function H(q,V){return q==="Color"?String(V||"").replace(/^#/,"").toUpperCase():String(V||"")}function B(){return`
      <div id="${y}" class="lg:col-span-2" data-tpl="C">
        <!-- \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u5169\u689D\u8DEF\u7531\u3002\u986F\u793A\u5C64 (values) \u4E0A\u5B83\u662F\u6B21\u8981\u8A2D\u5B9A\uFF0C\u6536\u9032\u9810\u8A2D
             \u6536\u5408\u7684 details\uFF0Csummary \u5C31\u662F\u6A19\u984C\uFF1B\u89C0\u773E\u9801 (audience) \u4E0A\u5B83\u662F\u4E3B\u9AD4\uFF0C
             syncVisibility \u628A\u5B83\u5C55\u958B\u3001summary \u85CF\u8D77\u4F86\u3002 -->
        <details class="admin-dsp2-fold" data-dsp-fold>
        <summary class="admin-ui-page-title" data-dsp-only="values">${h(m("displayValuesTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
        <div class="admin-ui-page-head" data-dsp-only="audience">
          <h2 class="admin-ui-page-title">${h(m("viewerGroupAudience"))}</h2>
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
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">UI language</span><span>Auto (follow browser)</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Placeholder</span><span>${h(m("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Submit button</span><span>${ServerI18n.t("fireDanmu")}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Poll prompt</span><span>${h(m("displayPollPromptExample"))}</span>
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
      </div>`}let P=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>f(q),noRange:!0}];function f(q){let V=_.find(Y=>Y.value===q);return V?m(V.labelKey):q||"\u2014"}function c(q,V){let Y=V[0]!==!1,Q=V[3],oe=A[q.key];if(q.key==="Opacity"||q.key==="Speed"){let ce=oe,pe=Q!=null?Number(Q):ce.min,we=isFinite(pe)?pe:ce.min,ge=(we-ce.min)/Math.max(1e-6,ce.max-ce.min)*100;return`
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
          ${d().map(pe=>{let we=pe.slice(1),ge=pe.toUpperCase()===ce;return`<button type="button" class="admin-dsp2-swatch ${ge?"is-active":""}"
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
        ${o(q)}
      `}if(q.key==="Layout"){let ce=String(Q||"scroll"),pe=!!$.allowlistEdit.Layout,we=pe?$.allowlistEdit.Layout:new Set(b("Layout").map(he=>H("Layout",he))),ge=!pe&&we.size===0;return`
        <div class="admin-dsp2-tiles">
          ${_.map(he=>{let Se=he.value===ce,Te=pe?we.has(he.value):ge||we.has(he.value),Ee=["admin-dsp2-tile",Se?"is-active":"",pe?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),_e=pe?`data-allow-key="Layout" data-allow-value="${he.value}"`:`data-chip-key="Layout" data-chip-value="${he.value}"`;return`<button type="button" class="${Ee}" ${_e}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${he.icon}</span>
              <span class="admin-dsp2-tile-label">${m(he.labelKey)}</span>
              ${pe?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${o(q)}
      `}return""}function o(q){if(!w(q.key))return"";let V=!!$.allowlistEdit[q.key],Y=b(q.key),Q=L(q.key).length||0,oe=Y.length>0?m("displayAllowSummaryPartial",{n:Y.length,total:Q,label:t(q.key)}):m("displayAllowSummaryAll",{total:Q});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${h(oe)}</span>
        ${V?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${h(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${h(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${h(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${h(m("displayEditAllowlistTitle"))}">[${h(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function t(q){return m(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function s(q,V){if(q.noRange||!(V[0]!==!1))return"";let Q=A[q.key],oe=V[1]!=null?V[1]:Q.min,ce=V[2]!=null?V[2]:Q.max,pe=F(q.key);return`
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
          <div class="admin-dsp2-band-host" data-band-host>${s(q,V)}</div>
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
      </div>`}function r(){let q=document.getElementById("dsp2-rows");if(q){if(!$.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):h(m("loading"))}`;return}q.innerHTML=P.map(V=>n(V,$.options[V.key]||[!1,"","",""])).join(""),i(),p(),x()}}function d(){let q=b("Color");return[...new Set((q.length?q:C).map(V=>"#"+String(V).replace(/^#/,"").toUpperCase()).filter(V=>/^#[0-9A-F]{6}$/.test(V)))]}function e(q){let V=q.slice(1).match(/.{2}/g).map(Y=>{let Q=parseInt(Y,16)/255;return Q<=.04045?Q/12.92:((Q+.055)/1.055)**2.4});return V[0]*.2126+V[1]*.7152+V[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function a(q,V="error"){$.paletteNotice={message:q,type:V};let Y=document.querySelector("[data-palette-feedback]");Y&&(Y.textContent=q,Y.classList.toggle("is-error",V==="error"))}function v(q,V=!0){let Y=document.querySelector("[data-admin-color-palette]"),Q=Y?.querySelector("[data-palette-preview-text]");!Q||!/^#[0-9A-F]{6}$/i.test(q)||($.palettePreview=q.toUpperCase(),Q.style.color=q,Y.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),Y.querySelectorAll("[data-palette-preview]").forEach(oe=>{let ce=oe.dataset.palettePreview===q.toUpperCase();oe.setAttribute("aria-pressed",String(ce)),oe.closest(".admin-color-palette-chip").classList.toggle("is-previewing",ce)}),V&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(Q.getAnimations().forEach(oe=>oe.cancel()),Q.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function i(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!$.options)return;let V=d(),Y=($.options.ViewerColorPicker||[!0])[0]!==!1,Q=$.paletteBusy?"disabled":"",oe=$.palettePreview||V[0],ce=h($.paletteDraft),pe=$.paletteNotice;q.setAttribute("aria-busy",String($.paletteBusy)),q.innerHTML=`
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
      </div>`,v(oe,!1)}async function l(q,V){if($.paletteBusy)return;let Y=document.querySelector("[data-admin-color-palette]");$.paletteBusy=!0,Y.setAttribute("aria-busy","true"),Y.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),Y.querySelectorAll("input, button").forEach(ce=>{ce.disabled=!0});let Q=await D("Color",q);$.paletteBusy=!1,$.paletteNotice={type:Q?"success":"error",message:m(Q?"viewerPaletteSaved":"updateFailed")},Q&&V&&($.palettePreview=V),i(),(V&&Q?Y.querySelector(`[data-palette-preview="${V}"]`):Y.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(q,V){let Y=$.options&&$.options[q];return Y&&Y[3]!=null?Y[3]:V}function p(){let q=document.querySelector("[data-preview-stage]"),V=document.querySelector("[data-preview-pill='1']"),Y=document.querySelector("[data-preview-pill='2']"),Q=document.querySelector("[data-preview-foot-l]"),oe=document.querySelector("[data-preview-foot-r]");if(!q||!V||!Y||!$.options)return;let ce=Number(u("FontSize",32)),pe=Number(u("Opacity",92)),we=Number(u("Speed",1)),ge="#"+String(u("Color","7DD3FC")).replace(/^#/,""),he=String(u("FontFamily","NotoSansTC")),Se=String(u("Layout","scroll")),Te=Math.min(ce,36),Ee=Math.max(0,Math.min(100,pe))/100;V.style.fontSize=Te+"px",V.style.color=ge,V.style.opacity=Ee.toFixed(2),V.style.fontFamily=he+", system-ui, sans-serif",V.style.textShadow=`0 0 14px ${ge}66`,Y.style.fontSize=(Te*.78).toFixed(0)+"px",Y.style.opacity=(Ee*.9).toFixed(2),Y.style.fontFamily=he+", system-ui, sans-serif",q.dataset.layout=Se,Q&&(Q.textContent=`${f(Se)} \xB7 ${ce}px \xB7 ${(+we).toFixed(1)}\xD7`),oe&&(oe.textContent=m("displayOpacitySuffix",{n:Math.round(pe)}))}function x(){let q=document.querySelector("[data-summary-list]"),V=document.querySelector("[data-summary-count]");if(!q||!$.options)return;let Y=P.filter(Q=>($.options[Q.key]||[])[0]).length;V&&(V.textContent=`AUDIENCE \xB7 ${Y}/6 OPEN`),q.innerHTML=P.map(Q=>{let oe=!!($.options[Q.key]||[])[0];return`<div class="admin-dsp2-srow ${oe?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${h(m(Q.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${h(m(oe?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function I(q,V){try{let Y=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!V})});if(!Y.ok)throw new Error("toggle "+Y.status);Array.isArray($.options[q])||($.options[q]=[!1,"","",""]),$.options[q][0]=!!V,r(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let Q=q==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${Q} ${m("settingsUpdated")}`,!0)}catch(Y){console.warn("[admin-display] toggle failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1),await W(),r()}}async function E(q,V,Y){try{let Q=Y;if(q==="Color"){let ce=String(Q).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(ce)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}Q=ce.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){Q=q==="Speed"?parseFloat(Q):parseInt(Q,10);let ce=A[q];if(Number.isNaN(Q)||ce&&(Q<ce.min||Q>ce.max)){window.showToast&&window.showToast(`${q} ${ce.min}\u2013${ce.max}`,!1);return}}let oe=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:Q,index:V})});if(!oe.ok)throw new Error("update "+oe.status);Array.isArray($.options[q])||($.options[q]=[!1,"","",""]),$.options[q][V]=Q,O(q),p(),x()}catch(Q){console.warn("[admin-display] update failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function D(q,V){try{let Y=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:V})});if(!Y.ok)throw new Error("allowlist "+Y.status);let Q=await Y.json().catch(()=>({}));Q&&Array.isArray(Q.option)?$.options[q]=Q.option:Array.isArray($.options[q])&&($.options[q][1]=V.slice()),O(q),p(),x();let oe=L(q).length||0,ce=q==="Color"?m("settingsUpdated"):V.length>0?m("displayAllowlistToastPartial",{key:q,n:V.length,total:oe}):m("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(ce,!0),!0}catch(Y){return console.warn("[admin-display] allowlist failed:",Y),q!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function O(q){let V=document.querySelector(`[data-row-key="${q}"]`);if(!V||!$.options)return;let Y=P.find(pe=>pe.key===q);if(!Y)return;let Q=$.options[q]||[!1,"","",""],oe=Q[3],ce=V.querySelector("[data-value-badge]");if(ce&&(ce.textContent=Y.fmt?Y.fmt(oe):oe!=null?String(oe):"\u2014"),w(q)){let pe=V.querySelector("[data-picker-host]");pe&&(pe.innerHTML=c(Y,Q));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&V.querySelectorAll(`[data-chip-key="${q}"]`).forEach(pe=>{let we=pe.getAttribute("data-chip-value"),ge=q==="Color"?String(oe||"").replace(/^#/,"").toUpperCase():String(oe??"");pe.classList.toggle("is-active",String(we)===ge)}),q==="Opacity"||q==="Speed"){let pe=A[q],we=Number(oe??pe.min),ge=(we-pe.min)/Math.max(1e-6,pe.max-pe.min)*100,he=V.querySelector(".admin-dsp2-slider-fill"),Se=V.querySelector(".admin-dsp2-slider-thumb");he&&(he.style.width=ge.toFixed(2)+"%"),Se&&(Se.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let Te=V.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(we));let Ee=V.querySelector(".admin-dsp2-num");Ee&&document.activeElement!==Ee&&(Ee.value=String(we))}}async function W(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);$.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),$.options=$.options||{}}}async function T(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let V=await q.json();$.fonts=Array.isArray(V)?V:V.fonts||[]}catch{$.fonts=["NotoSansTC","Inter"]}}async function R(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let V=await q.json();$.viewerCount=V.ws_clients??0}catch{}}function j(){J(),R(),$.metricsTimer=setInterval(R,5e3)}function J(){$.metricsTimer&&(clearInterval($.metricsTimer),$.metricsTimer=null)}function K(){if(!$.options){window.showToast&&window.showToast(m("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:$.options},V=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(V),Q=document.createElement("a");Q.href=Y,Q.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(Y),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function G(){if(!$.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let V of P){let Y=$.options[V.key];Array.isArray(Y)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:V.key,enabled:!!Y[0]})})}await R(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${$.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(V){console.warn("[admin-display] deploy failed:",V),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function te(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!0,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[Y,Q]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y,enabled:!!Q[0]})});for(let oe=1;oe<=3;oe++)oe<3&&(Y==="Color"||Y==="FontFamily"||Y==="Layout")||Q[oe]===""||Q[oe]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:Y,value:Q[oe],index:oe})})}await W(),r(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(Y){console.warn("[admin-display] revert failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ne(){let q=document.getElementById(y);q&&(q.addEventListener("click",V=>{let Y=V.target.closest("[data-palette-preview]");if(Y){v(Y.dataset.palettePreview);return}let Q=V.target.closest("[data-palette-remove]");if(Q){let ge=d();if(ge.length>1){let he=ge.filter(Se=>Se!==Q.dataset.paletteRemove);l(he,he.includes($.palettePreview)?$.palettePreview:he[0])}return}if(V.target.closest("[data-palette-add]")){let ge=q.querySelector("[data-palette-hex]"),he=String(ge.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(he)){ge.setAttribute("aria-invalid","true"),a(m("colorFormatError"));return}let Se=d();if(Se.includes("#"+he)){a(m("viewerPaletteDuplicate"));return}Se.length<64&&l([...Se,"#"+he],"#"+he);return}let oe=V.target.closest("[data-toggle-key]");if(oe){let ge=oe.getAttribute("data-toggle-key"),he=!!($.options[ge]||[])[0];I(ge,!he);return}let ce=V.target.closest("[data-allow-action]");if(ce){let ge=ce.getAttribute("data-allow-action"),he=ce.getAttribute("data-allow-key");if(!he)return;if(ge==="edit"){let Se=b(he).map(Te=>H(he,Te));Se.length?$.allowlistEdit[he]=new Set(Se):$.allowlistEdit[he]=new Set(L(he)),O(he);return}if(ge==="cancel"){delete $.allowlistEdit[he],O(he);return}if(ge==="clear"){$.allowlistEdit[he]=new Set,D(he,[]),delete $.allowlistEdit[he];return}if(ge==="apply"){let Se=$.allowlistEdit[he]||new Set,Te=L(he),Ee=Array.from(Se),_e=Te.length>0&&Ee.length===Te.length&&Te.every($e=>Se.has($e));D(he,_e?[]:Ee),delete $.allowlistEdit[he];return}}let pe=V.target.closest("[data-allow-key][data-allow-value]");if(pe){let ge=pe.getAttribute("data-allow-key"),he=pe.getAttribute("data-allow-value"),Se=$.allowlistEdit[ge];if(Se){let Te=H(ge,he);Se.has(Te)?Se.delete(Te):Se.add(Te),O(ge)}return}let we=V.target.closest("[data-chip-key]");if(we){let ge=we.getAttribute("data-chip-key"),he=we.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${ge}"]`).forEach(Se=>Se.classList.remove("is-active")),we.classList.add("is-active"),E(ge,3,he);return}if(V.target&&V.target.id==="dsp2-revert"){te();return}if(V.target&&V.target.id==="dsp2-export"){K();return}}),q.addEventListener("keydown",V=>{V.key==="Enter"&&V.target.matches("[data-palette-hex]")&&!V.isComposing&&(V.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",V=>{let Y=V.target;if(!Y)return;if(Y.matches("[data-viewer-color-picker]")){Y.disabled=!0,I("ViewerColorPicker",Y.checked);return}let Q=Y.getAttribute("data-num-key");if(!Q)return;let oe=Y.getAttribute("data-num-index");if(oe==="step"){S(Q,Y.value),O(Q);return}let ce=parseInt(oe,10);if(Number.isNaN(ce))return;let pe=Y.value;Q==="Color"&&(pe=String(pe).replace(/^#/,"").toUpperCase()),E(Q,ce,pe)}),q.addEventListener("input",V=>{let Y=V.target;if(Y){if(Y.matches("[data-palette-picker]")){$.paletteDraft=Y.value.toUpperCase(),q.querySelector("[data-palette-hex]").value=$.paletteDraft,a("","success"),v($.paletteDraft);return}if(Y.matches("[data-palette-hex]")){$.paletteDraft=Y.value;let Q=Y.value.replace(/^#/,"");Y.removeAttribute("aria-invalid"),a("","success"),/^[0-9a-fA-F]{6}$/.test(Q)&&(q.querySelector("[data-palette-picker]").value="#"+Q,v("#"+Q));return}if(Y.classList&&Y.classList.contains("admin-dsp2-range")){let Q=Y.getAttribute("data-range-key"),oe=A[Q],ce=Number(Y.value),pe=(ce-oe.min)/Math.max(1e-6,oe.max-oe.min)*100,we=Y.closest("[data-row-key]");if(we){let ge=we.querySelector(".admin-dsp2-slider-fill"),he=we.querySelector(".admin-dsp2-slider-thumb");ge&&(ge.style.width=pe.toFixed(2)+"%"),he&&(he.style.left=`calc(${pe.toFixed(2)}% - 8px)`);let Se=we.querySelector(".admin-dsp2-num");Se&&(Se.value=String(ce))}Array.isArray($.options[Q])&&($.options[Q][3]=ce),p();return}if(Y.classList&&Y.classList.contains("admin-dsp2-num")){let Q=Y.getAttribute("data-num-key"),oe=parseInt(Y.getAttribute("data-num-index"),10);if(Number.isNaN(oe)||!Array.isArray($.options[Q]))return;let ce=Y.value;Y.type==="number"&&(ce=Number(ce)),$.options[Q][oe]=ce,p()}}}),q.addEventListener("change",V=>{let Y=V.target;if(Y&&Y.classList&&Y.classList.contains("admin-dsp2-range")){let Q=Y.getAttribute("data-range-key");E(Q,3,Y.value)}}),q.addEventListener("click",V=>{let Y=V.target.closest("[data-dl-step]");if(Y){let oe=Y.closest("[data-dl-stepper]");if(!oe)return;let ce=oe.getAttribute("data-dl-stepper"),we=Number(z[ce]??0)+Number(Y.getAttribute("data-dl-step"));se(ce,we);return}let Q=V.target.closest("[data-dl-opt]");if(Q){let oe=Q.closest("[data-dl-seg]");if(!oe)return;let ce=oe.getAttribute("data-dl-seg"),pe=Q.getAttribute("data-dl-opt");se(ce,["safe_area","poll_vote_opacity"].indexOf(ce)!==-1?Number(pe):pe)}}),q.addEventListener("change",V=>{let Y=V.target.closest("[data-dl-toggle]");if(Y){se(Y.getAttribute("data-dl-toggle"),Y.checked);return}let Q=V.target.closest("[data-dl-range]");Q&&se(Q.getAttribute("data-dl-range"),Number(Q.value))}),q.addEventListener("input",V=>{let Y=V.target.closest("[data-dl-range]");if(!Y)return;let Q=Y.getAttribute("data-dl-range"),oe=q.querySelector(`[data-dl-value="${Q}"]`);oe&&(oe.textContent=Y.value+"%")}))}let z={};function X(){let q=document.getElementById(y);q&&Object.entries(z).forEach(([V,Y])=>{let Q=q.querySelector(`[data-dl-value="${V}"]`);Q&&(Q.textContent=V==="max_tracks"?Number(Y)===0?m("dlMaxTracksAuto"):String(Y):String(Y)+"%");let oe=q.querySelector(`[data-dl-range="${V}"]`);oe&&document.activeElement!==oe&&(oe.value=String(Y));let ce=q.querySelector(`[data-dl-toggle="${V}"]`);ce&&(ce.checked=!!Y);let pe=q.querySelector(`[data-dl-seg="${V}"]`);pe&&pe.querySelectorAll("[data-dl-opt]").forEach(we=>{let ge=we.getAttribute("data-dl-opt")===String(Y);we.classList.toggle("is-active",ge),we.setAttribute("aria-pressed",ge?"true":"false")})})}async function Z(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;z=await q.json(),X()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function se(q,V){let Y=z[q];z[q]=V,X();try{let Q=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:V})});if(!Q.ok)throw new Error("display-layer "+Q.status);z=await Q.json(),X()}catch(Q){z[q]=Y,X(),console.warn("[admin-display] display-layer update failed:",Q),window.showToast&&window.showToast(m("updateFailed"),!1)}}function ie(){k.forEach(q=>{let V=document.getElementById(q);V&&V.setAttribute("data-admin-ui-replaced","1")})}let le=null;function ue(q,V){return q==="overlay"||V==="overlay"||q==="display"||V==="display"}function ke(q,V){return q==="viewer-config"||q==="viewer"||V==="viewer-config"||V==="viewer"}function Ie(q,V){if(!ke(q,V))return;let Y=window.AdminTabs?.getConfig?.("viewer");if(!Y)return;let Q=ce=>Y.tabs.some(pe=>pe.slug===ce),oe=Q(V)?V:null;if(!oe&&window.AdminTabs.resolveActiveTab){let ce=window.AdminTabs.resolveActiveTab("viewer",null);Q(ce)&&(oe=ce)}oe&&(document.body.dataset.viewerConfigTab=oe)}let ee=!1,ae=!1;async function de(){let q=document.getElementById("sec-viewer-config-limits");if(!q||ee)return;ee=!0;let V=(Y,Q)=>{let oe=q.querySelector(Y);oe&&(oe.textContent=Q==null?"\u2014":String(Q))};try{let Y=await fetch("/admin/metrics",{credentials:"same-origin"});if(!Y.ok)return;let Q=await Y.json(),oe=Q.rate_limits&&Q.rate_limits.fire||{},ce=Q.rate_limits&&Q.rate_limits.totals||{},pe=Q.rate_limit_config&&Q.rate_limit_config.fire||{},we=Math.max(1,(Q.server_time||0)-(Q.server_started_at||0));V("[data-vc-rate-fp]",pe.limit||"\u2014"),V("[data-vc-rate-global]","\u2014"),V("[data-vc-rate-burst]","\u2014"),V("[data-vc-rate-cooldown]",pe.window||"\u2014"),V("[data-vc-msg-len]",100),V("[data-vc-nick-len]","\u2014"),V("[data-vc-dedup]","\u2014");let ge=(oe.hits||0)/we;V("[data-vc-avg-rate]",ge.toFixed(2)+"/s"),V("[data-vc-throttled]",oe.violations||0),V("[data-vc-blocked]",ce.locked_sources||0),V("[data-vc-deduped]",0)}catch{}finally{ee=!1}}function me(){let q=document.querySelector(".admin-dash-grid"),V=document.getElementById(y);if(!q||!V)return;let Y=q.dataset.activeRoute||"live",Q=q.dataset.activeLeaf||Y;Ie(Y,Q);let oe=document.body.dataset.viewerConfigTab||"defaults",ce=ke(Y,Q),pe=ue(Y,Q),we=ce||pe,ge=V.querySelector("[data-dsp-fold]");ge&&V.dataset.dspMode!==(pe?"values":"audience")&&(ge.open=!pe),V.dataset.dspMode=pe?"values":"audience",V.style.display=we?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(Se=>{let Te=document.getElementById(Se);Te&&(Te.style.display=ce?"":"none")});let he=document.getElementById("sec-viewer-config-info");he&&(he.style.display=ce?"":"none"),ce?ae||(ae=!0,de()):ae=!1,ue(Y,Q)?$.metricsTimer||j():J(),le=Y}function re(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let V=document.createElement("div");V.id="sec-viewer-config-info",V.className="lg:col-span-2",V.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let Y=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],Q=document.createElement("div");Q.id="sec-viewer-config-fields",Q.className="admin-vc-fields-grid lg:col-span-2";let oe=document.createElement("div");oe.className="admin-vc-col-panel";let ce=document.createElement("div");ce.className="admin-vc-fields-head";let pe=Y.filter(function(xe){return xe.on}).length,we=Y.length-pe;ce.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+h(m("displayFieldsCountLabel",{count:Y.length}))+'</span><span class="admin-vc-fields-count">'+h(m("displayFieldsShownHidden",{shown:pe,hidden:we}))+"</span>",oe.appendChild(ce);let ge=document.createElement("div");ge.className="admin-vc-fields-list",Y.forEach(function(xe){let Ae=document.createElement("div");Ae.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Fe=document.createElement("span");Fe.className="admin-vc-field-dot"+(xe.on?" is-on":""),Ae.appendChild(Fe);let De=document.createElement("div");var Be="";xe.pinned&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+h(m("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+h(m("displayFieldBadgeBlocked"))+"</span>"),De.innerHTML='<div class="admin-vc-field-label">'+h(xe.k)+Be+'</div><div class="admin-vc-field-desc">'+h(xe.desc)+"</div>",Ae.appendChild(De);let Le=document.createElement("button");if(Le.type="button",Le.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Le.textContent=xe.on?m("displayToggleShow"):m("displayToggleHide"),xe.blocked||xe.pinned)Le.disabled=!0,Le.className+=" disabled";else{var Ce=xe.on;Le.addEventListener("click",function(){Ce=!Ce,Le.className="admin-vc-toggle "+(Ce?"is-on":"is-off"),Le.textContent=m(Ce?"displayToggleShow":"displayToggleHide"),Fe.className="admin-vc-field-dot"+(Ce?" is-on":"")})}Ae.appendChild(Le),ge.appendChild(Ae)}),oe.appendChild(ge);let he=document.createElement("div");he.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Ae){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Ae===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");he.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+h(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+h(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+h(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+h(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+h(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+h(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+h(m("displayFieldsTip"))+"</div>",Q.appendChild(oe),Q.appendChild(he);function Ee(xe,Ae,Fe,De,Be,Le){let Ce=Le?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ce+'">'+Fe+'<span class="admin-vc-limit-row__unit">'+(De||"")+"</span></div>"+(Be?'<div class="admin-vc-limit-row__hint">'+Be+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+h(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+h(m("displayEditLink"))+"</a></div>"+Ee(h(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",h(m("displayRateFpUnit")),h(m("displayRateFpHint")))+Ee(h(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",h(m("displayRateGlobalHint")))+Ee(h(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",h(m("displayRateBurstUnit")),h(m("displayRateBurstHint")))+Ee(h(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",h(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+h(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+h(m("displayContentLimitsTitle"))+"</span></div>"+Ee(h(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",h(m("displayMsgLenUnit")),h(m("displayMsgLenHint")))+Ee(h(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",h(m("displayNickLenUnit")),h(m("displayNickLenHint")))+Ee(h(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",h(m("displayDedupHint")))+Ee(h(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+h(m("displayProfanityDefaultValue"))+"</span>","",h(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+h(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+h(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+h(m("displayAuditLogLink"))+"</a></div>";let $e=document.getElementById("sec-viewer-theme");$e&&$e.parentNode===q?(q.insertBefore(V,$e),q.insertBefore(_e,$e),q.insertBefore(Q,$e)):(q.appendChild(V),q.appendChild(_e),q.appendChild(Q)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),me()}async function ve(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(y)){ie();return}q.insertAdjacentHTML("beforeend",B()),ne(),ie(),me(),$.options||await Promise.all([W(),T()]),Z(),r()}function fe(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?ve():ie(),me()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",me),document.addEventListener("admin-route-applied",me),document.addEventListener("admin-panel-rendered",()=>{ve(),ie(),re(),me()}),ve(),re()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fe):fe()})()});var dt=ye(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let K=document.querySelector('meta[name="csrf-token"]');return K&&K.content||""}let k=window.DANMU_CONFIG||{},g=k.session||{logged_in:!1},h=k.settingRanges||{};function A(K,G={}){let te={credentials:"same-origin",...G},ne=new Headers(G.headers||{});return ne.set("X-CSRF-Token",y()),te.headers=ne,fetch(K,te)}window.csrfFetch=A;let U=5e3,C={at:0,data:null,promise:null};function _(){return C.data&&Date.now()-C.at<U}function m(){return _()?Promise.resolve(C.data):(C.promise||(C.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(K=>K.ok?K.json():null).then(K=>(K&&(C.data=K,C.at=Date.now()),C.promise=null,K)).catch(()=>(C.promise=null,null))),C.promise)}function M(K){if(!_())return null;let G=C.data[K];return G&&typeof G=="object"&&"_error"in G?null:G}window.__danmuAdminBootstrap={prime:m,get:M},m();let F={},S=null,$=null,N=Object.create(null);Object.assign(N,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let w=Object.create(null);Object.assign(w,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let b={_key:K=>"admin:tab:"+K,get(K){try{return sessionStorage.getItem(this._key(K))||null}catch{return null}},set(K,G){try{G?sessionStorage.setItem(this._key(K),G):sessionStorage.removeItem(this._key(K))}catch{}}};function L(K){let G=(K||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!G)return null;let te=G[1],ne=G[2]||null,z=null;if(!ne){let ie=N[te];typeof ie=="string"?te=ie:ie&&typeof ie=="object"&&(te=ie.nav||te,z=ie.tab||null)}let X=w[te],Z=te,se=null;if(typeof X=="string"?Z=X:X&&typeof X=="object"&&(Z=X.nav||te,se=X.tab||null),G[1]!==Z&&(L._warned||(L._warned=new Set),!L._warned.has(G[1]))){L._warned.add(G[1]);try{console.info("[admin] legacy route #/"+G[1]+" \u2192 #/"+Z+(ne||se||z?"/"+(ne||se||z):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:Z,tab:ne||se||z,raw:te}}function H(K,G){return G?"#/"+K+"/"+G:"#/"+K}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:w,tabMemory:b,parseHash:L,buildHash:H});var B=window.AdminUtils.loadDetailsState,P=window.AdminUtils.saveDetailsState,f=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:M};async function c(){try{F=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&E()}catch(K){console.error("Get settings failed:",K),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function o(K){return/^#[0-9A-Fa-f]{6}$/.test(K)}function t(K){return o(K)?K:/^[0-9A-Fa-f]{6}$/.test(K)?"#"+K:(K.startsWith("#")||(K="#"+K),o(K)?K:"#38bdf8")}function s(K,G){if(h[K]){let te=parseInt(G);if(isNaN(te)||te<h[K].min||te>h[K].max)return showToast(ServerI18n.t("settingRangeError",{key:K,min:h[K].min,max:h[K].max}),!1),!1}return!0}function n(K,G,te){if(!te||!Array.isArray(F[K]))return;let ne=F[K][G];K==="Color"&&typeof ne=="string"&&(ne=t(`#${ne}`)),ne!=null&&(te.value=String(ne))}let r={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function d(){Object.values(r).forEach(K=>{let G=document.getElementById(K.containerId);G&&K.orderedIds.forEach(te=>{let ne=document.getElementById(te);ne&&ne.parentElement!==G&&G.appendChild(ne)})})}function e(){S&&(S.disconnect(),S=null),d(),S=new MutationObserver(()=>{d()}),S.observe(i,{childList:!0,subtree:!0})}async function a(K,G,te,ne=null){try{if(K==="Color"){if(!o(G)){showToast(ServerI18n.t("colorFormatError"),!1),n(K,te,ne);return}G=G.replace("#","")}else if((K==="Speed"||K==="Opacity"||K==="FontSize")&&!s(K,G)){n(K,te,ne);return}(await A("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:K,value:G,index:te})})).ok?(Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][te]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(z){console.error("Error:",z),showToast(`Update Error: ${z.message}`,!1),await c()}}async function v(K,G){try{let te=await A("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:K,enabled:G})}),ne=await te.json().catch(()=>({}));if(te.ok)Array.isArray(F[K])||(F[K]=[!1,"","",""]),F[K][0]=G,showToast(`${K} ${ServerI18n.t("settingsUpdated")}`),E();else{let z=document.getElementById(`toggle-${K}`);z&&(z.checked=!G),showToast(ne.error||ServerI18n.t("updateFailed"),!1)}}catch(te){console.error("Error:",te);let ne=document.getElementById(`toggle-${K}`);ne&&(ne.checked=!G),showToast(`Update Error: ${te.message}`,!1)}}let i=document.getElementById("app-container"),l=document.getElementById("toast-container"),u=(K,G=500)=>"requestIdleCallback"in window?window.requestIdleCallback(K,{timeout:G}):setTimeout(K,G);async function p(){let K=parseInt(document.getElementById("historyHours")?.value||"24");try{let[G,te]=await Promise.all([fetch(`/admin/stats/hourly?hours=${K}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${K}&limit=10`,{credentials:"same-origin"})]);if(!G.ok||!te.ok)return;let ne=await G.json(),z=await te.json(),X=document.getElementById("statsDashboard");if(!X)return;let Z=ne.distribution||[],se=z.topTexts||[],ie=Math.max(1,...Z.map(ee=>ee.count)),le=Z.reduce((ee,ae)=>ee+(ae.count||0),0),ue=Z.filter(ee=>ee.count>0).length,ke=Z.map(ee=>`<div class="chart-bar" style="height: ${Math.round(ee.count/ie*100)}%" title="${f(ee.hour)}: ${ee.count}"><span class="chart-label">${f(ee.hour.slice(-5,-3))}</span></div>`).join(""),Ie=se.map((ee,ae)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ae+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${f(ee.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${ee.count}</td></tr>`).join("");X.innerHTML=`
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
        </div>`}catch(G){console.error("Load stats error:",G)}}window._loadStats=p,window.csrfFetch=A,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=i,window.__adminCtx.getSettings=()=>F;function x(){i&&(i.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function I(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():x()}function E(){let K=B(),G=(ue,ke=!1)=>K[ue]!==void 0?K[ue]:ke,te=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(ue=>Array.isArray(F[ue])&&F[ue][0]===!0).length,ne=F.Layout&&F.Layout[3]?f(String(F.Layout[3]).replace(/_/g," ")):"scroll",z=F.FontFamily&&F.FontFamily[3]?f(String(F.FontFamily[3])):"NotoSansTC",X=ue=>ue.map(ke=>`<span style="height:${ke*10}%;opacity:${.3+ke*.08}"></span>`).join(""),Z=ne&&ne!=="off",se=window.location.port||(window.location.protocol==="https:"?"443":"80");i.innerHTML=`
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
    `),W(),e(),u(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),O(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let ke=document.querySelector("[data-telem-bars]");if(!ke)return;let Ie=document.querySelector("[data-telem-status]"),ee={cpu:100,mem:100,ws:100,rate:50};function ae(re,ve,fe,q,V){let Y=ke.querySelector(`[data-telem-fill="${re}"]`),Q=ke.querySelector(`[data-telem-value="${re}"]`);Y&&(Y.style.width=Math.max(0,Math.min(100,ve))+"%",Y.classList.toggle("is-warn",!q)),Q&&(Q.textContent=fe);let oe=ke.querySelector(`[data-telem-row="${re}"]`);oe&&V&&oe.setAttribute("title",V)}function de(re,ve){if(!ve||ve<=0)return Math.round(re)+" MB used";if(ve>=1024){let fe=(re/1024).toFixed(1),q=(ve/1024).toFixed(1);return`${fe} / ${q} GB used`}return`${Math.round(re)} / ${Math.round(ve)} MB used`}async function me(){try{let re=await fetch("/admin/metrics",{credentials:"same-origin"});if(!re.ok)return;let ve=await re.json(),fe=ve.cpu_series||[],q=ve.mem_series||[],V=ve.mem_mb_series||[],Y=ve.ws_series||[],Q=ve.rate_series||[],oe=Te=>Te.length?Te[Te.length-1]:0,ce=Number(oe(fe)||0),pe=Number(oe(q)||0),we=Number(oe(V)||0),ge=Number(ve.mem_total_mb||0),he=Number(oe(Y)||ve.ws_clients||0),Se=Number(oe(Q)||0)/60;if(ae("cpu",ce,`${ce.toFixed(0)}%`,ce<90),ae("mem",pe,`${pe.toFixed(0)}%`,pe<90,de(we,ge)),ae("ws",he/ee.ws*100,String(he),he<100),ae("rate",Se/ee.rate*100,`${Se.toFixed(1)}/s`,Se<40),Ie){let Te=ce>=90||pe>=90||Se>=40;Ie.textContent=Te?"\u25CF BUSY":"\u25CF HEALTHY",Ie.classList.toggle("is-warn",Te)}}catch{}}setTimeout(me,4e3),setInterval(me,5e3)})()}let D={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=D;function O(){let K=document.querySelector(".admin-dash-grid");if(!K)return;let G="dashboard",te=null;function ne(re){return r.moderation.orderedIds.indexOf(re)!==-1?"moderation-grid":r.assets.orderedIds.indexOf(re)!==-1?"assets-grid":re==="sec-scheduler"||re==="sec-webhooks"?"sec-advanced":"settings-grid"}function z(){let re=K.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ve=K.querySelector("[data-route-note]"),fe=K.querySelector("[data-route-action]");if(fe&&Array.prototype.slice.call(fe.children).forEach(oe=>{oe._adminHomeHead?oe._adminHomeHead.appendChild(oe):oe.remove()}),!re)return;let q=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(G)),V=Array.prototype.slice.call(K.querySelectorAll(".admin-ui-page-head"));V.forEach(oe=>oe.classList.remove("is-merged-into-topbar"));let Y=(D[G]?.title||"").trim().replace(/\s+/g," "),Q=null;V.forEach(oe=>{let ce=oe.querySelector(".admin-ui-page-title"),pe=ce&&ce.textContent.trim().replace(/\s+/g," ");if(pe&&(q||pe===re||pe===Y)){if(oe.offsetParent!==null){Q===null&&(Q=oe.querySelector(".admin-ui-page-note")?.innerHTML||"");let ge=oe.querySelector(".admin-ui-page-actions");ge&&fe&&!fe.children.length&&(ge._adminHomeHead=oe,fe.appendChild(ge))}oe.classList.add("is-merged-into-topbar")}}),ve&&(ve.innerHTML=Q||"",ve.hidden=!Q)}function X(){let re=D[G],ve=new Set((re.sections||[]).map(ne)),fe=q=>q.id==="sec-advanced"?Array.from(q.querySelectorAll('[id^="sec-"]')).some(V=>getComputedStyle(V).display!=="none"):Array.from(q.children).some(V=>getComputedStyle(V).display!=="none");K.querySelectorAll(".admin-route-sections").forEach(q=>{if(!(q.id==="sec-advanced"?ve.has("sec-advanced"):ve.has(q.id))){q.style.display="none";return}q.style.display="",q.style.display=fe(q)?"":"none"})}let Z=()=>{let re=D[G],ve=new Set(re.sections);K.querySelectorAll('[id^="sec-"]').forEach(fe=>{if(fe.id){if(fe.id==="sec-advanced"){let q=Array.from(fe.querySelectorAll('[id^="sec-"]')).some(V=>ve.has(V.id));fe.style.display=q?"":"none";return}fe.style.display=ve.has(fe.id)?"":"none"}}),te&&window.AdminTabs?.hasTabsFor?.(G)&&window.AdminTabs.applyTabSectionVisibility(G,te,K),X(),z()},se={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},ie=(re,ve,fe)=>{if(fe=fe||re,!D[re]){let _e=N[re];if(typeof _e=="string")re=_e;else if(_e&&typeof _e=="object")_e.nav&&(re=_e.nav),!ve&&_e.tab&&(ve=_e.tab);else{let $e=w[re];typeof $e=="string"?re=$e:$e&&typeof $e=="object"&&($e.nav&&(re=$e.nav),!ve&&$e.tab&&(ve=$e.tab))}}if(re==="system"&&ve&&se[ve]){let _e=se[ve];re=_e.nav,ve=_e.tab||null,fe=re}G=D[re]?re:"live",K.dataset.activeRoute=G;let q;window.AdminTabs?.hasTabsFor?.(G)?q=window.AdminTabs.resolveActiveTab(G,ve):q=null;let V=fe&&fe!==G?"#/"+fe:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(G,q):"#/"+G;if(window.location.hash!==V){try{history.replaceState(null,"",V)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let Y=D[G],Q=Array.from(K.querySelectorAll(".admin-dash-nav-row[data-route]")),oe=fe!==G?Q.find(_e=>_e.dataset.route===fe):null;Q.forEach(_e=>{let $e=oe?_e===oe:_e.dataset.route===G;_e.classList.toggle("is-active",$e),_e.setAttribute("aria-selected",$e?"true":"false")});let ce=K.querySelector("[data-route-kicker]"),pe=K.querySelector("[data-route-title]");var we=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(_e){return _e},ge="adminRouteTitle_"+G,he="adminRouteKicker_"+G,Se=we(ge),Te=we(he);ce&&(ce.textContent=Te!==he?Te:Y.kicker),pe&&(pe.textContent=Se!==ge?Se:Y.title);let Ee=G==="dashboard"||G==="live";K.querySelectorAll('[data-route-view="dashboard"]').forEach(_e=>{_e.style.display=Ee?"":"none"}),Ee?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),te=q,q&&window.AdminRouter?.tabMemory?.set?.(G,q),K.dataset.activeLeaf=q||G,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:q}})),X(),z(),ue(G,q),le(fe,G,q);try{history.replaceState(null,"",V)}catch{}};function le(re,ve,fe){window.AdminBreadcrumb?.render(K,re,ve,fe)}function ue(re,ve){let fe=K.querySelector("[data-admin-tabs-host]");if(!fe){let q=K.querySelector(".admin-dash-topbar");if(!q)return;fe=document.createElement("div"),fe.dataset.adminTabsHost="",q.insertAdjacentElement("afterend",fe)}if(fe.innerHTML="",window.AdminTabs?.hasTabsFor?.(re)&&ve){fe.hidden=!1;let q=window.AdminTabs.renderTabStrip(re,ve,{onSelect:V=>ie(re,V)});q&&fe.appendChild(q),fe.classList.remove("admin-tabs-host--accordion");return}fe.classList.remove("admin-tabs-host--accordion"),fe.hidden=!0}$&&window.removeEventListener("hashchange",$),$=()=>{let re=L(window.location.hash),ve=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=ve?ve[1]:null;re&&ie(re.nav,re.tab,fe||re.raw)},window.addEventListener("hashchange",$),K.querySelectorAll("[data-route]").forEach(re=>{re.addEventListener("click",ve=>{ve.preventDefault(),ie(re.dataset.route)})});let ke=L(window.location.hash),Ie=(window.location.hash||"").match(/^#\/([\w-]+)/),ee=Ie?Ie[1]:ke?.raw||ke?.nav||"live";ie(ke?.nav||"live",ke?.tab||null,ee),window._adminNavigateTo=()=>ie(G,te);let ae=!1;function de(){if(ae)return;ae=!0;let re=()=>{ae=!1,Z(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:G,leaf:te}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(re):setTimeout(re,0)}let me=K.querySelector(".admin-dash-main");me&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{de()}).observe(me,{childList:!0,subtree:!0}),de())}function W(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let K=document.querySelector("[data-open-help]");K&&K.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let G=document.querySelector("[data-open-palette]");if(G){let ne=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};G.addEventListener("click",ne),G.addEventListener("keydown",z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ne())})}let te=document.getElementById("logoutButton");te&&te.addEventListener("click",async()=>{try{let ne=await A("/logout",{method:"POST"});ne.redirected&&(window.location.href=ne.url),showToast(ServerI18n.t("logoutSuccess"))}catch(ne){console.error("Logout Failed:",ne),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(ne=>{ne.name&&ne.addEventListener("change",async function(){let z=this.name,X=this.checked;await v(z,X)})}),document.querySelectorAll("details[id^='sec-']").forEach(ne=>{ne.addEventListener("toggle",()=>{let z=B();z[ne.id]=ne.open,P(z)})}),document.querySelectorAll(".setting-input").forEach(ne=>{ne.addEventListener("change",async function(){let z=this.dataset.key,X=parseInt(this.dataset.index),Z=this.value;this.type==="number"&&(Z=parseInt(Z)),await a(z,Z,X,this)})})}function T(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}E()}else I()}async function R(){await c(),T(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function j(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{S&&(S.disconnect(),S=null)}),R()})});var lt=ye(()=>{(function(){"use strict";var y=null;async function k(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),F=Array.from(M).map(function(N){return N.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(F.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var S=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:F})}),$=await S.json();if(!S.ok){window.showToast($.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),C($),A()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function h(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),C(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function A(){y&&(clearInterval(y),y=null);var m=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var F=await M.json();C(F),F.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};m(),y=setInterval(m,2e3)}function U(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function C(m){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!m||m.state==="idle"){M.appendChild(U());return}var F=m.total_votes||0,S=Math.max(1,...m.options.map(function(B){return B.count})),$=document.createElement("div");$.className="admin-poll-status-card";var N=document.createElement("div");N.className="admin-poll-status-header";var w=document.createElement("span");w.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),N.appendChild(w);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=m.question||"",N.appendChild(b);var L=document.createElement("span");L.className="admin-poll-status-state",L.textContent=m.state,N.appendChild(L),$.appendChild(N),m.options.forEach(function(B){var P=document.createElement("div");P.className="admin-poll-status-row";var f=document.createElement("div");f.className="admin-poll-status-label";var c=document.createElement("span"),o=document.createElement("b");o.textContent=B.key+".",c.appendChild(o),c.appendChild(document.createTextNode(" "+B.text));var t=document.createElement("span");t.textContent=B.count+" ("+B.percentage+"%)",f.appendChild(c),f.appendChild(t);var s=document.createElement("div");s.className="admin-poll-status-bar";var n=document.createElement("div");n.className="admin-poll-status-bar-fill",n.style.width=B.count/S*100+"%",s.appendChild(n),P.appendChild(f),P.appendChild(s),$.appendChild(P)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",F),$.appendChild(H),M.appendChild($)}}function _(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",k);var F=document.getElementById("pollEndBtn");F&&F.addEventListener("click",g);var S=document.getElementById("pollResetBtn");S&&S.addEventListener("click",h);var $=document.getElementById("pollAddOptionBtn");$&&$.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var L=b.querySelectorAll(".poll-option-input").length;if(L>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+L)+". Option "+(L+1),H.maxLength=100,b.appendChild(H)}});var N=document.getElementById("pollRemoveOptionBtn");N&&N.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var L=b.querySelectorAll(".poll-option-input");if(L.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}L[L.length-1].remove()}});var w=m;w&&(w.addEventListener("toggle",function(){w.open&&A()}),A()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){_()}),document.addEventListener("DOMContentLoaded",function(){_()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&_()})})()});var ct=ye(()=>{(function(){"use strict";async function y(){try{let A=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!A.ok){let M=await A.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",M.error||A.statusText),!1);return}let U=await A.json(),C=document.getElementById("blacklistKeywords");C.innerHTML="";let _=document.getElementById("modBlacklistCount");_&&(_.textContent=`${U.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=U.length),U.length===0?C.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:U.forEach(M=>{let F=document.createElement("div");F.className="hud-banned-row";let S=document.createElement("span");S.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",S.textContent="\u2298";let $=document.createElement("span");$.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",$.textContent=M;let N=document.createElement("button");N.className="removeKeywordBtn",N.type="button",N.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",N.textContent="UNBAN",N.setAttribute("data-keyword",M),F.appendChild(S),F.appendChild($),F.appendChild(N),C.appendChild(F)})}catch(A){console.error("Fetch blacklist error:",A),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function k(){let A=document.getElementById("newKeywordInput"),U=A.value.trim();if(!U){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let C=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})}),_=await C.json();C.ok?(A.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:_.message||ServerI18n.t("histToastBlacklisted",{keyword:U}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})})).ok)throw new Error("remove failed");y()}}}):showToast(_.message||"Keyword added.",!0)):showToast(_.error||"Failed to add keyword.",!1)}catch(C){console.error("Add keyword error:",C),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(A){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",A),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let C=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:A})}),_=await C.json();C.ok?(showToast(_.message||"Keyword removed.",!0),y()):showToast(_.error||"Failed to remove keyword.",!1)}catch(C){console.error("Remove keyword error:",C),showToast(ServerI18n.t("removeKeywordError"),!1)}}function h(){let A=document.getElementById("addKeywordBtn");A&&A.addEventListener("click",k);let U=document.getElementById("newKeywordInput");U&&U.addEventListener("keypress",function(_){(_.key==="Enter"||_.keyCode===13)&&(_.preventDefault(),k())});let C=document.getElementById("blacklistKeywords");C&&C.addEventListener("click",function(_){let m=_.target.closest(".removeKeywordBtn");if(m){let M=m.dataset.keyword;M&&g(M)}})}document.addEventListener("admin-panel-rendered",function(){y(),h()}),window.AdminHistory={fetchBlacklist:y}})()});var ut=ye(()=>{(function(){"use strict";var y="sec-timeline-export",k="danmu.adminHistoryExports.v1",g=10,h={rawText:!0,polls:!0,masked:!1,metadata:!0},A=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],U=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],C={range:"24h",filters:Object.assign({},h),format:"JSON"};function _(){return document.getElementById(y)}function m(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return[]}}function M(p){try{localStorage.setItem(k,JSON.stringify(p.slice(0,g)))}catch{}}function F(p){var x=m();x.unshift(p),M(x)}function S(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function $(p){try{var x=new Date(p),I=new Date,E=x.toDateString()===I.toDateString();if(E)return ServerI18n.t("historyV2TodayAt",{time:String(x.getHours()).padStart(2,"0")+":"+String(x.getMinutes()).padStart(2,"0")});var D=new Date(I);return D.setDate(I.getDate()-1),x.toDateString()===D.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String(x.getHours()).padStart(2,"0")+":"+String(x.getMinutes()).padStart(2,"0")}):x.getMonth()+1+"-"+String(x.getDate()).padStart(2,"0")+" "+String(x.getHours()).padStart(2,"0")+":"+String(x.getMinutes()).padStart(2,"0")}catch{return p||""}}function N(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var x=new Date,I=new Date(x.getFullYear(),x.getMonth(),x.getDate());return Math.max(1,Math.ceil((x-I)/36e5))}return p==="yest"?48:p==="live"?6:24}function w(p){return p.filter(function(x){return!(!C.filters.rawText&&!x.is_poll&&!x.muted&&!x.banned||!C.filters.polls&&x.is_poll||!C.filters.masked&&(x.muted||x.banned))}).map(function(x){if(!C.filters.metadata){var I=Object.assign({},x);return delete I.clientIp,delete I.fingerprint,I}return x})}function b(p){var x=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],I=function(O){var W=O==null?"":String(O);return W.indexOf(",")>=0||W.indexOf('"')>=0||W.indexOf(`
`)>=0?'"'+W.replace(/"/g,'""')+'"':W},E=function(O){return O.status?O.status:O.banned?"banned":O.muted?"muted":O.is_poll?"poll":"ok"},D=p.map(function(O){return[O.timestamp||"",O.nickname||"",O.text||"",O.color?"#"+O.color:"",O.size!=null?O.size:"",O.speed!=null?O.speed:"",O.opacity!=null?O.opacity:"",O.isImage?"true":"false",O.fontInfo&&O.fontInfo.name||"",O.clientIp||"",O.fingerprint||"",E(O),O.delivery_reason||""].map(I).join(",")});return[x.join(","),D.join(`\r
`)].filter(Boolean).join(`\r
`)}function L(p){return p.map(function(x,I){var E=new Date(x.timestamp||Date.now()),D=H(E),O=H(new Date(E.getTime()+3e3)),W=(x.nickname?"["+x.nickname+"] ":"")+(x.text||"");return I+1+`
`+D+" --> "+O+`
`+W+`
`}).join(`
`)}function H(p){var x=function(I,E){return String(I).padStart(E||2,"0")};return x(p.getHours())+":"+x(p.getMinutes())+":"+x(p.getSeconds())+","+x(p.getMilliseconds(),3)}function B(p,x){var I=URL.createObjectURL(p),E=document.createElement("a");E.href=I,E.download=x,E.click(),URL.revokeObjectURL(I)}function P(){var p=N(C.range),x=document.getElementById("histv2-go");x&&(x.disabled=!0,x.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(I){if(!I.ok)throw new Error("http "+I.status);return I.json()}).then(function(I){var E=I&&I.records||[],D=w(E);if(D.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var O=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),W,T;if(C.format==="JSON"){var R=JSON.stringify(D,null,2);T=new Blob([R],{type:"application/json"}),W="danmu-history-"+O+".json"}else C.format==="CSV"?(T=new Blob(["\uFEFF"+b(D)],{type:"text/csv;charset=utf-8;"}),W="danmu-history-"+O+".csv"):(T=new Blob([L(D)],{type:"application/x-subrip;charset=utf-8;"}),W="danmu-history-"+O+".srt");B(T,W),F({name:W,fmt:C.format,size:T.size,when:new Date().toISOString(),count:D.length}),c(),f(D.length,T.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:D.length}),!0)}).catch(function(I){console.error("[history-v2] export failed",I),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:I.message||I}),!1)}).finally(function(){x&&(x.disabled=!1,delete x.dataset.busy)})}function f(p,x){var I=document.getElementById("histv2-estimate");I&&(I.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:x?S(x):"\u2014 MB"}))}function c(){var p=document.getElementById("histv2-recent-list");if(p){var x=m();if(x.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=x.map(function(I){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+I.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+o(I.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+o($(I.when))+" \xB7 "+S(I.size)+"</div></div></div>"}).join("")}}function o(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})}function t(){return A.map(function(p){var x=C.range===p.k;return'<button type="button" class="histv2-chip'+(x?" is-active":"")+'" data-histv2-range="'+p.k+'">'+o(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+s():"")+"</button>"}).join("")}function s(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function n(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function(x){var I=!!C.filters[x.k];return'<button type="button" class="histv2-toggle'+(I?" is-on":"")+'" data-histv2-toggle="'+x.k+'"><span class="histv2-toggle-mark">'+(I?"\u2713":"\u25CB")+"</span><span>"+o(ServerI18n.t(x.labelKey))+"</span></button>"}).join("")}function r(){return U.map(function(p){var x=C.format===p.k;return'<button type="button" class="histv2-fmt'+(x?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+(x?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+o(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+o(p.desc)+"</div></button>"}).join("")}function d(){var p=_();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+t()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+r()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",e),c(),l())}function e(p){var x=p.target.closest("[data-histv2-range]");if(x){C.range=x.dataset.histv2Range,a(),l();return}var I=p.target.closest("[data-histv2-toggle]");if(I){var E=I.dataset.histv2Toggle;C.filters[E]=!C.filters[E],v(),l();return}var D=p.target.closest("[data-histv2-fmt]");if(D){C.format=D.dataset.histv2Fmt,i(),l();return}var O=p.target.closest("#histv2-go");if(O&&!O.dataset.busy){P();return}}function a(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=t())}function v(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=n())}function i(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=r())}function l(){l._t&&clearTimeout(l._t),l._t=setTimeout(function(){var p=N(C.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(x){return x.ok?x.json():null}).then(function(x){if(!x)return f(0,0);var I=w(x&&x.records||[]),E=C.format==="JSON"?220:C.format==="CSV"?110:80;f(I.length,I.length*E)}).catch(function(){f(0,0)})},250)}function u(){var p=_(),x=document.getElementById("admin-backup-v2-page");if(!p){var I=document.getElementById("settings-grid");if(!I)return;p=document.createElement("div"),p.id=y,p.className="admin-ui-card lg:col-span-2 history-v2-section",I.appendChild(p),d()}x&&x.parentElement&&p.previousElementSibling!==x&&x.parentElement.insertBefore(p,x.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:l,state:C}})()});var mt=ye(()=>{(function(){"use strict";let y="admin-replay-bar";function k(){let h=document.getElementById(y);return h||(document.body?(h=document.createElement("div"),h.id=y,h.className="admin-replay-bar",h.hidden=!0,h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(h,document.body.firstChild),h):null)}function g(h){let A=k();A&&(A.hidden=!h)}window.AdminReplayBar={ensure:k,setActive:g},document.addEventListener("admin-panel-rendered",k)})()});var pt=ye(()=>{(function(){"use strict";let y=null;function k($){window.AdminReplayBar&&window.AdminReplayBar.ensure();let N=document.getElementById("replayPauseBtn"),w=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),L=document.getElementById("replayProgress"),H=(f,c)=>{f&&f.classList.toggle("hidden",!c)},B=$==="playing",P=$==="paused";H(N,B),H(w,P),H(b,B||P),H(L,B||P),!B&&!P&&L&&(L.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(B||P)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let $=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!$.ok)return;let N=await $.json(),w=document.getElementById("replayProgress");w&&(w.textContent=ServerI18n.t("replayingProgress").replace("{sent}",N.sent).replace("{total}",N.total)),k(N.state),N.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function h(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),k("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function A(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),k("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function U(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),k("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let C=null,_=null,m=0,M=null;function F(){[["replayPauseBtn",h],["replayResumeBtn",A],["replayStopBtn",U]].forEach(function([N,w]){let b=document.getElementById(N);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",w),b.dataset.replayCtrlsBound="1")})}async function S(){try{let $=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!$.ok)return;let N=await $.json();(N.state==="playing"||N.state==="paused")&&(k(N.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){k("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){F(),S()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(F,800)})})()});var vt=ye(()=>{(function(){"use strict";let y="sec-ratelimit",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function h(){return`
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
      </div>`}function A(C){let _=C.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let o=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,t=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,s=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,n=[];n.push(o?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),n.push(t?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),n.push(s?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[r,d,e]=await Promise.all(n),a=o||(r&&r.ok?await r.json():null);if(a){let x=a.stats&&a.stats.last_24h||0,I=a.stats&&a.stats.total||0,E=C.querySelector("[data-rl-sum-hits]"),D=C.querySelector("[data-rl-sum-hits-delta]");E&&(E.textContent=x.toLocaleString()),D&&(D.textContent=ServerI18n.t("ratelimitSumTotal",{n:I.toLocaleString()}))}let v=t||(d&&d.ok?await d.json():null);if(v){let x=Array.isArray(v)?v:v.entries||v.keywords||[],I=C.querySelector("[data-rl-sum-black]");I&&(I.textContent=x.length?ServerI18n.t("ratelimitCountUnit",{n:x.length}):"0")}let i=C.querySelector("[data-rl-sum-viol]"),l=C.querySelector("[data-rl-sum-viol-rate]"),u=C.querySelector("[data-rl-sum-locked]"),p=s||(e&&e.ok?await e.json():null);if(p){let x=p&&p.rate_limits;if(x&&x.totals){let I=x.totals.hits||0,E=x.totals.violations||0,D=x.totals.locked_sources||0;if(i&&(i.textContent=E.toLocaleString()),l){let O=I+E;l.textContent=O>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(E/O*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:D.toLocaleString()})),g.forEach(({key:O})=>{let W=x[O],T=C.querySelector(`[data-rl-current="${O}"]`);if(T&&W){let R=(W.hits||0).toLocaleString(),j=(W.violations||0).toLocaleString();T.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:R,viol:j})}}),M(x)}else i&&(i.textContent="\u2014"),l&&(l.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else i&&(i.textContent="\u2014"),l&&(l.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(p&&p.recent_violations)}catch{}},4500);function m(c){let o=C.querySelector("[data-rl-vbody]"),t=C.querySelector("[data-rl-vcount]");if(!o)return;let s=Array.isArray(c)?c:[];if(t&&(t.textContent=ServerI18n.t("ratelimitViolationsCount",{n:s.length})),s.length===0){o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let n=d=>{let e=new Date(d*1e3),a=v=>String(v).padStart(2,"0");return`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`},r=d=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[d]||"var(--color-text-muted)";o.innerHTML=s.slice(0,30).map(d=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${n(d.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${r(d.scope)}">${(d.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${k(d.ip||"")}</span>
        </div>
      `).join("")}function M(c){c&&g.forEach(({key:o})=>{let t=c[o],s=C.querySelector(`[data-rl-suggest="${o}"]`);if(!s)return;let n=t&&t.suggestion;if(!n){s.hidden=!0;return}let r=s.querySelector("[data-rl-suggest-detail]");r&&(r.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(n.p95_per_second||0).toFixed(2),limit:t.limit||"\u2014",window:t.window||"\u2014",suggLimit:n.suggested_limit,suggWindow:n.suggested_window}));let d=s.querySelector("[data-rl-apply]");d&&(d.dataset.rlSuggestLimit=String(n.suggested_limit),d.dataset.rlSuggestWindow=String(n.suggested_window)),s.hidden=!1})}async function F(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let o=await c.json(),t=o&&o.rate_limits;if(!t)return;g.forEach(({key:s})=>{let n=t[s],r=C.querySelector(`[data-rl-current="${s}"]`);if(r&&n){let d=(n.hits||0).toLocaleString(),e=(n.violations||0).toLocaleString();r.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:d,viol:e})}}),M(t)}catch{}}C.addEventListener("click",async c=>{let o=c.target.closest("[data-rl-action]");if(!o)return;let t=o.dataset.rlAction;if(t==="save"){let s=o.dataset.rlSave,n=C.querySelector(`[data-rl-limit="${s}"]`),r=C.querySelector(`[data-rl-window="${s}"]`);if(!n||!r)return;let d=parseInt(n.value,10),e=parseInt(r.value,10);if(!Number.isFinite(d)||!Number.isFinite(e)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let a=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let v=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:s,limit:d,window:e})});if(v.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:s.toUpperCase(),limit:d,window:e}),!0),F();else{let i=await v.json().catch(()=>({})),l=i&&i.error||`HTTP ${v.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:l}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=a}return}if(t==="apply-suggest"){let s=o.dataset.rlApply,n=parseInt(o.dataset.rlSuggestLimit,10),r=parseInt(o.dataset.rlSuggestWindow,10);if(!s||!Number.isFinite(n)||!Number.isFinite(r))return;let d=o.textContent;o.disabled=!0,o.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let e=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:s,limit:n,window:r})});if(e.ok){let a=C.querySelector(`[data-rl-limit="${s}"]`),v=C.querySelector(`[data-rl-window="${s}"]`);a&&(a.value=n),v&&(v.value=r),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:s.toUpperCase(),limit:n,window:r}),!0),F(),S()}else{let a=await e.json().catch(()=>({})),v=a&&a.error||`HTTP ${e.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:v}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{o.disabled=!1,o.textContent=d}return}if(t==="export"){let s=[];C.querySelectorAll("[data-rl-limit]").forEach(n=>{let r=n.dataset.rlLimit.toUpperCase();s.push(`${r}_RATE_LIMIT=${n.value}`)}),C.querySelectorAll("[data-rl-window]").forEach(n=>{let r=n.dataset.rlWindow.toUpperCase();s.push(`${r}_RATE_WINDOW=${n.value}`)}),_.textContent=s.join(`
`),_.hidden=!1;try{navigator.clipboard?.writeText(s.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else t==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([n,[r,d]])=>{let e=C.querySelector(`[data-rl-limit="${n}"]`),a=C.querySelector(`[data-rl-window="${n}"]`);e&&(e.value=r),a&&(a.value=d)}),_.hidden=!0,S())});function S(){g.forEach(({key:c})=>{let o=C.querySelector(`[data-rl-limit="${c}"]`),t=C.querySelector(`[data-rl-window="${c}"]`),s=C.querySelector(`[data-rl-lockout="${c}"]`),n=C.querySelector(`[data-rl-effective="${c}"]`);if(!o||!t||!n)return;let r=parseInt(o.value,10)||0,d=parseInt(t.value,10)||1,e=(r/d).toFixed(2),a=Math.round(r*1.5),v=`effective_rate = ${r} / ${d}s = ${e} req/s \xB7 burst = ${a}`;if(c==="login"&&s){let i=parseInt(s.value,10)||0;v+=` \xB7 lock = ${i}s`}n.textContent=v})}C.addEventListener("input",c=>{let o=c.target;!o||!o.dataset.rlLimit&&!o.dataset.rlLockout||S()}),C.addEventListener("change",c=>{let o=c.target;!o||!o.dataset.rlWindow||S()}),S();function $(c,o){if(!c||!Array.isArray(o))return;let t=96,s=24,n=o.length?o:new Array(24).fill(0),r=Math.max(1,...n),d=t/Math.max(1,n.length-1),e=n.map((v,i)=>`${(i*d).toFixed(1)},${(s-2-v/r*(s-4)).toFixed(1)}`).join(" "),a=c.querySelector("polyline");a&&a.setAttribute("points",e)}g.forEach(({key:c})=>{let o=C.querySelector(`[data-rl-spark="${c}"]`);o&&$(o,new Array(24).fill(0))});let N=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,w={allowlist:[],denylist:[]},b={input:C.querySelector("[data-rl-ip-input]"),select:C.querySelector("[data-rl-ip-select]"),addBtn:C.querySelector("[data-rl-ip-add]"),summary:C.querySelector("[data-rl-ip-summary]"),error:C.querySelector("[data-rl-ip-error]"),allowCount:C.querySelector("[data-rl-ip-allow-count]"),denyCount:C.querySelector("[data-rl-ip-deny-count]"),allowBody:C.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:C.querySelector('[data-rl-ip-body="denylist"]')};function L(c){if(b.error){if(!c){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=c}}function H(c){let o=c==="allowlist"?b.allowBody:b.denyBody,t=c==="allowlist"?b.allowCount:b.denyCount;if(!o||!t)return;let s=Array.isArray(w[c])?w[c]:[];if(t.textContent=String(s.length),s.length===0){let n=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");o.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:n})}</div>`;return}o.innerHTML=s.map(n=>{let r=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:k(n)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${k(n)}">
          <span class="admin-ratelimit-ip-chip-cidr">${k(n)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${k(n)}" data-rl-ip-remove-kind="${c}" title="${r}" aria-label="${r}">\xD7</button>
        </div>
      `}).join("")}function B(){if(H("allowlist"),H("denylist"),b.summary){let c=(w.allowlist||[]).length,o=(w.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:o})}}async function P(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let o=await c.json();o&&typeof o=="object"&&(w={allowlist:Array.isArray(o.allowlist)?o.allowlist:[],denylist:Array.isArray(o.denylist)?o.denylist:[]},B())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function f(c,{toastLabel:o}={}){try{let t=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(t.ok){let r=await t.json();return w={allowlist:Array.isArray(r.allowlist)?r.allowlist:[],denylist:Array.isArray(r.denylist)?r.denylist:[]},B(),L(""),o&&typeof showToast=="function"&&showToast(o,!0),!0}let s=await t.json().catch(()=>({})),n=s&&s.error||`HTTP ${t.status}`;return L(n),!1}catch{return L(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let c=(b.input.value||"").trim();if(!c){L(ServerI18n.t("ratelimitIpRequiredError"));return}if(!N.test(c)){L(ServerI18n.t("ratelimitIpFormatError"));return}let o=b.select.value==="denylist"?"denylist":"allowlist",t=Array.from(new Set([...w[o]||[],c]));await f({[o]:t},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(o==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&L("")})),C.addEventListener("click",async c=>{let o=c.target.closest("[data-rl-ip-remove]");if(!o)return;let t=o.dataset.rlIpRemove,s=o.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",n=(w[s]||[]).filter(r=>r!==t);await f({[s]:n},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(s==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:t})})}),P(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let o=await c.json(),t=o&&o.rate_limits;if(!t)return;g.forEach(({key:s})=>{let n=t[s]&&(t[s].bucket_history||t[s].history);if(Array.isArray(n)&&n.length){let r=C.querySelector(`[data-rl-spark="${s}"]`);r&&$(r,n.slice(-24))}})}catch{}},5500)}function U(){let C=document.getElementById("settings-grid");if(!C||document.getElementById(y))return;C.insertAdjacentHTML("beforeend",h());let _=document.getElementById(y);_&&A(_)}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var ft=ye(()=>{(function(){"use strict";let y="sec-viewer-theme",k="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function h(){return`
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
      </div>`}let A=/^#[0-9a-f]{6}$/i,U=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function C(F){return String(F??"").replace(/[&<>"']/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[S])}function _(F){let S={};return!F||typeof F!="object"||(["bg","primary","hero"].forEach($=>{typeof F[$]=="string"&&A.test(F[$])&&(S[$]=F[$])}),(F.mode==="dark"||F.mode==="light")&&(S.mode=F.mode),typeof F.font=="string"&&/^[\w .-]{1,64}$/.test(F.font)&&(S.font=F.font),(F.logo===null||typeof F.logo=="string"&&U.test(F.logo))&&(S.logo=F.logo)),S}function m(F){let S={...g[0],logo:null};try{let i=localStorage.getItem(k);i&&(S={...S,..._(JSON.parse(i))})}catch{}let $="default";function N(){try{localStorage.setItem(k,JSON.stringify(S))}catch{}}function w(i){let l=/^#?([0-9a-f]{6})$/i.exec(i);if(!l)return[0,0,0];let u=parseInt(l[1],16);return[u>>16&255,u>>8&255,u&255]}function b([i,l,u]){let p=[i,l,u].map(x=>(x/=255,x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function L(i,l){let u=b(w(i)),p=b(w(l)),[x,I]=u>p?[u,p]:[p,u];return(x+.05)/(I+.05)}function H(i){return i>=7?{label:"AAA",cls:"is-good"}:i>=4.5?{label:"AA",cls:"is-ok"}:i>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function B(){let i=F.querySelector("[data-vt-presets]");i.innerHTML="",g.forEach(l=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+($===l.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${l.bg}">
            <span style="background:${l.primary}"></span>
            <span style="background:${l.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(l.nameKey)}</div>
          <div class="mode">${ServerI18n.t(l.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{S={...S,...l},$=l.id,N(),v()}),i.appendChild(u)})}function P(){F.querySelectorAll("[data-vt-mode-btn]").forEach(i=>{i.classList.toggle("is-active",S.mode===i.dataset.vtModeBtn)})}function f(){let i=F.querySelector("[data-vt-colors]"),l=S.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:l,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:S.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];i.innerHTML=u.map(p=>{let x=L(S[p.key],p.vs),I=H(x),E=C(S[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${E}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${I.cls}">${I.label} \xB7 ${x.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${E}" data-vt-color="${p.key}" />
                <input type="text" value="${E}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let i=F.querySelector("[data-vt-logo-preview]"),l=F.querySelector(".hint-empty"),u=F.querySelector("[data-vt-logo-actions]");S.logo?(i.src=S.logo,i.hidden=!1,l.style.display="none",u.hidden=!1):(i.hidden=!0,l.style.display="",u.hidden=!0)}function o(){let i=F.querySelector("[data-vt-font]");i.value=S.font;let l=F.querySelector("[data-vt-font-specimen]");l.style.fontFamily=S.font}function t(){let i=S.mode==="dark"?"#F8FAFC":"#0F172A",l=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(i,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(S.primary,S.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:L(S.hero,S.bg)}];F.querySelector("[data-vt-contrast]").innerHTML=l.map(u=>{let p=H(u.ratio);return`<span class="vt-contrast-chip ${p.cls}">${u.lbl} \xB7 ${p.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function s(){let i=F.querySelector("[data-vt-stage]"),l=S.mode==="dark"?"#F8FAFC":"#0F172A";i.style.setProperty("--vt-bg",S.bg),i.style.setProperty("--vt-primary",S.primary),i.style.setProperty("--vt-hero",S.hero),i.style.setProperty("--vt-fg",l),i.style.fontFamily=S.font;let u=F.querySelector("[data-vt-preview-logo]");if(S.logo){let p=document.createElement("img");p.src=S.logo,p.style.maxHeight="40px",u.replaceChildren(p)}else u.textContent="Danmu Fire"}let n="auto",r="auto";function d(){F.querySelectorAll("[data-vt-theme-btn]").forEach(i=>{i.classList.toggle("is-active",i.dataset.vtThemeBtn===n)}),F.querySelectorAll("[data-vt-lang-btn]").forEach(i=>{i.classList.toggle("is-active",i.dataset.vtLangBtn===r)})}async function e(){try{let i=await fetch("/get_settings",{credentials:"same-origin"});if(!i.ok)return;let l=await i.json(),u=l&&l.ViewerThemeMode&&l.ViewerThemeMode[1],p=l&&l.ViewerLangMode&&l.ViewerLangMode[1];typeof u=="string"&&(n=u),typeof p=="string"&&(r=p),d()}catch{}}async function a(i,l){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:i,value:l,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${i} = ${l}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:i}),!1)}}function v(){B(),P(),f(),c(),o(),t(),s(),d()}F.addEventListener("input",i=>{if(i.target.matches("[data-vt-color]")){let l=i.target.dataset.vtColor;A.test(i.target.value)&&(S[l]=i.target.value,$="custom",N(),v())}else if(i.target.matches("[data-vt-hex]")){let l=i.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(i.target.value)&&(S[l]=i.target.value,$="custom",N(),v())}else i.target.matches("[data-vt-font]")&&(S.font=i.target.value,N(),v())}),F.addEventListener("change",i=>{if(i.target.matches("[data-vt-logo-input]")){let l=i.target.files&&i.target.files[0];if(!l)return;if(l.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{S.logo=String(u.result||""),N(),v()},u.readAsDataURL(l)}}),F.addEventListener("click",i=>{let l=i.target.closest("[data-vt-mode-btn]");if(l){S.mode=l.dataset.vtModeBtn,$="custom",N(),v();return}let u=i.target.closest("[data-vt-theme-btn]");if(u){n=u.dataset.vtThemeBtn,d(),a("ViewerThemeMode",n);return}let p=i.target.closest("[data-vt-lang-btn]");if(p){r=p.dataset.vtLangBtn,d(),a("ViewerLangMode",r);return}if(i.target.closest("[data-vt-logo-remove]")){S.logo=null,N(),v();return}let I=i.target.closest("[data-vt-device-btn]");if(I){F.querySelectorAll("[data-vt-device-btn]").forEach(D=>D.classList.toggle("is-active",D===I)),F.querySelector("[data-vt-frame]").dataset.device=I.dataset.vtDeviceBtn;return}let E=i.target.closest("[data-vt-action]");E&&E.dataset.vtAction==="reset"&&(S={...g[0],logo:null},$="default",N(),v())}),v(),e()}document.addEventListener("click",function(F){let S=F.target.closest("[data-vt-jump]");if(!S)return;let $=S.dataset.vtJump;if($){F.preventDefault();try{location.hash="#/"+$}catch{}}});function M(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",h());let S=document.getElementById(y);S&&m(S)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var ht=ye(()=>{(function(){"use strict";let y="sec-system-overview";function k(){return`
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
          ${[{id:"uptime",label:ServerI18n.t("sohMetricUptime")},{id:"conn",label:ServerI18n.t("sohMetricConnected")},{id:"ram",label:ServerI18n.t("sohMetricMemory")},{id:"ver",label:ServerI18n.t("sohMetricVersion")}].map(_=>`
            <div class="admin-soh-kpi" data-m="${_.id}">
              <div class="admin-soh-kpi__label">${_.label}</div>
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
          ${[{hash:"#/backup",label:ServerI18n.t("adminNavBackup"),sub:ServerI18n.t("sohLinkBackupSub"),attr:""},{hash:"#/security",label:ServerI18n.t("adminNavSecurity"),sub:ServerI18n.t("sohLinkSecuritySub"),attr:'data-soh-sub="security"'},{hash:"#/integrations",label:ServerI18n.t("adminNavIntegrations"),sub:"\u2014",attr:'data-soh-sub="integrations"'},{hash:"#/about",label:ServerI18n.t("sohLinkAbout"),sub:ServerI18n.t("sohLinkAboutSub"),attr:""}].map(_=>`
            <a class="admin-ui-group-row admin-soh-link" href="${_.hash}">
              <span class="lbl">${_.label}</span>
              <span class="val admin-soh-link__sub" ${_.attr}>${_.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">\u203A</span>
            </a>`).join("")}
        </div>
      </div>`}function g(_){let m=Math.floor(_/86400),M=Math.floor(_%86400/3600),F=Math.floor(_%3600/60);return m>0?`${m}d ${String(M).padStart(2,"0")}h ${String(F).padStart(2,"0")}m`:M>0?`${M}h ${String(F).padStart(2,"0")}m`:`${F}m ${String(_%60).padStart(2,"0")}s`}function h(_,m,M){let F=document.querySelector(`[data-m="${_}"]`);if(!F)return;let S=F.querySelector("[data-m-v]");S&&(S.textContent=m);let $=F.querySelector("[data-m-sub]");$&&($.textContent=M||"")}function A(_){let m=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),F=document.querySelector("[data-soh-chip]"),$=!(_.queue_size!=null&&_.queue_capacity!=null&&_.queue_size>=_.queue_capacity);F&&F.classList.toggle("is-warn",!$),m&&m.classList.toggle("is-warn",!$),M&&(M.textContent=$?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function U(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let F=await M.json(),S=P=>Array.isArray(P)&&P.length?P[P.length-1]:null,$=F.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-F.server_started_at)):0;h("uptime",$>0?g($):"\u2014","");let N=null;try{let P=await fetch("/admin/audience/stats",{credentials:"same-origin"});P.ok&&(N=(await P.json()).total_live)}catch{}let w=F.ws_clients??0;h("conn",String(w+(N||0)),N==null?ServerI18n.t("sohConnOverlaysOnly",{n:w}):ServerI18n.t("sohConnBreakdown",{overlays:w,viewers:N}));let b=S(F.mem_series||[]),L=F.mem_total_mb?(F.mem_total_mb/1024).toFixed(0):null;h("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",L?ServerI18n.t("sohMemorySub",{total:L}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";h("ver",`v${H}`,ServerI18n.t("sohVersionSub")),A(F);let B=document.querySelector('[data-soh-sub="integrations"]');B&&(B.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:F.webhooks_count??0,plugins:F.plugins_loaded??0}));try{let P=await window.csrfFetch("/admin/ws-auth");if(P.ok){let f=await P.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=f.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let _=document.getElementById(y);if(!_)return;let m=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";_.querySelectorAll("[data-soh-mode]").forEach(F=>{let S=F.dataset.sohMode===M;F.classList.toggle("is-active",S),F.setAttribute("aria-pressed",S?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),_.addEventListener("click",function(M){let F=M.target.closest("[data-soh-mode]");if(F){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(F.dataset.sohMode),m();return}let S=M.target.closest("[data-soh-action]");if(!(!S||S.disabled)){if(S.dataset.sohAction==="copy-url"){let $=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText($).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(S.dataset.sohAction==="show-qr"){let $=_.querySelector("[data-soh-qr]");if(!$)return;if(!$.hidden){$.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(N=>N.ok?N.json():Promise.reject(N)).then(N=>{$.innerHTML=N.svg,$.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function C(){let _=document.getElementById("settings-grid");!_||document.getElementById(y)||(_.insertAdjacentHTML("beforeend",k()),document.getElementById(y)&&U())}document.addEventListener("admin-panel-rendered",C),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&C()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),C()})})()});var gt=ye(()=>{(function(){"use strict";let y="sec-polls",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(U){return String(U).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})};function g(){return`
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
  `}function h(){let U=document.getElementById("sec-polls");if(!U)return;let C=U.querySelector("[data-poll-queue]"),_=U.querySelector("[data-poll-editor]"),m=U.querySelector("[data-poll-view-builder]"),M=U.querySelector("[data-poll-view-live]"),F=U.querySelector("[data-poll-view-results]"),S="danmu.adminPollQueue.v2";function $(){return"q_"+Math.random().toString(36).slice(2,8)}function N(){return"o_"+Math.random().toString(36).slice(2,6)}function w(z){return{id:N(),label:""}}function b(){return{id:$(),text:"",timer:90,image_url:"",server_q_id:"",options:[w("A"),w("B")]}}let L=null,H="builder",B=null,P=0,f={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,o=[];try{let z=localStorage.getItem(S);if(z){let X=JSON.parse(z);Array.isArray(X)?o=X:X&&Array.isArray(X.queue)&&(o=X.queue)}}catch{}(!Array.isArray(o)||o.length===0)&&(o=[b()]),o.forEach(z=>{typeof z.image_url!="string"&&(z.image_url=""),typeof z.server_q_id!="string"&&(z.server_q_id="")});let t=o[0].id,s="manual",n=null,r=null,d={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function e(){try{localStorage.setItem(S,JSON.stringify({queue:o,activeId:t,mode:s}))}catch{}}function a(z){return o.find(X=>X.id===z)}function v(z,X){let Z=a(z);Z&&Object.assign(Z,X)}function i(z,X,Z){let se=z.slice(),[ie]=se.splice(X,1);return se.splice(Z,0,ie),se}function l(){C.innerHTML="",o.forEach((z,X)=>{let Z=document.createElement("div");Z.className="admin-poll-qrow",z.id===t&&Z.classList.add("is-active");let se=d.active&&d.currentIndex===X;se&&Z.classList.add("is-running"),Z.dataset.qid=z.id,Z.draggable=!0;let ie=!!z.image_url;Z.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${X+1}</span>
            <div class="info">
              <div class="text">${k(z.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:z.options.length})} \xB7 ${z.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):z.timer+"s"} \xB7 ${ie?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${se?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":z.id===t?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,C.appendChild(Z)})}function u(){let z=a(t)||o[0];if(!z){_.innerHTML="";return}let X=o.indexOf(z);_.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${X+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:X+1})}</span>
            </div>
            <span class="progress">Q${X+1} / ${o.length}</span>
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
        `}function p(){L&&L.active?H="live":B?H="results":H="builder",U.dataset.pollView=H,m.hidden=H!=="builder",M.hidden=H!=="live",F.hidden=H!=="results",l(),u(),J(),H==="live"?O():H==="results"&&T(),H==="live"?x():I()}function x(){c||(c=setInterval(()=>{H!=="live"||!L||!L.active||W()},1e3))}function I(){c&&(clearInterval(c),c=null)}function E(z,X){if(!z||!z.time_limit_seconds)return null;if(!X)return z.time_limit_seconds;let Z=Date.now()/1e3-X;return Math.max(0,Math.round(z.time_limit_seconds-Z))}function D(z){if(z==null)return"\u221E";let X=String(Math.floor(z/60)).padStart(2,"0"),Z=String(z%60).padStart(2,"0");return`${X}:${Z}`}function O(){if(!L||!L.questions||L.questions.length===0){M.innerHTML="";return}let z=L.current_index>=0?L.current_index:0,X=L.questions.length,Z=L.questions[z],se=E(Z,L.started_at),ie=Z.time_limit_seconds||0,le=ie>0&&se!=null?Math.max(0,Math.min(1,se/ie)):1,ue=ie>0&&se!=null&&se<=Math.max(5,ie*.15),ke=Z.options.reduce((fe,q)=>fe+(q.count||0),0),Ie=[...Z.options].sort((fe,q)=>(q.count||0)-(fe.count||0)),ee=Ie[0]?Ie[0].count:0,ae=L.questions[z+1],de=110,me=de/2-6,re=2*Math.PI*me,ve=re*le;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${k((L.poll_id||"").slice(-6))}
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
                  ${L.questions.map((fe,q)=>{let V=q<z?"done":q===z?"active":"queued";return`
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
        `}function W(){if(!L||!L.active)return;let z=L.current_index>=0?L.current_index:0,X=L.questions[z];if(!X)return;let Z=E(X,L.started_at),se=X.time_limit_seconds||0,ie=M.querySelector("[data-live-mmss]"),le=M.querySelector("[data-live-ring]");if(ie&&(ie.textContent=Z==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(Z),ie.classList.toggle("is-low",se>0&&Z!=null&&Z<=Math.max(5,se*.15))),le&&se>0&&Z!=null){let ue=+le.getAttribute("r"),ke=2*Math.PI*ue,Ie=Math.max(0,Math.min(1,Z/se));le.setAttribute("stroke-dasharray",`${ke*Ie} ${ke}`);let ee=Z<=Math.max(5,se*.15);le.setAttribute("stroke",ee?"var(--hud-crimson)":"var(--color-primary)"),le.style.filter=`drop-shadow(0 0 4px ${ee?"var(--hud-crimson)":"var(--color-primary)"})`}f.autoAdvance&&se>0&&Z===0&&(z>=L.questions.length-1?te():G())}function T(){let z=B;if(!z||!z.questions||z.questions.length===0){F.innerHTML="";return}let X=z.questions.length,Z=Math.max(0,Math.min(P,X-1)),se=z.questions[Z],ie=se.options.reduce((re,ve)=>re+(ve.count||0),0),le=[...se.options].sort((re,ve)=>(ve.count||0)-(re.count||0)),ue=le[0]||{key:"-",text:"\u2014",count:0},ke=le[1],Ie=ie>0?ue.count/ie*100:0,ee=ke?Math.max(0,ue.count-ke.count):ue.count,ae=z.started_at||0,de=z.ended_at||Date.now()/1e3,me=Math.max(0,Math.round(de-ae));F.innerHTML=`
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
`)}function j(z,X,Z){let se=new Blob([Z],{type:X}),ie=document.createElement("a");ie.href=URL.createObjectURL(se),ie.download=z,document.body.appendChild(ie),ie.click(),setTimeout(()=>{URL.revokeObjectURL(ie.href),ie.remove()},0)}U.addEventListener("click",z=>{let X=z.target.closest("[data-live-action]");if(X){let le=X.dataset.liveAction;le==="advance"?G():le==="end"?te():le==="pause"&&(f.autoAdvance=!1,O());return}let Z=z.target.closest("[data-live-toggle]");if(Z){let le=Z.dataset.liveToggle;le in f&&(f[le]=!f[le],Z.classList.toggle("is-on",f[le]));return}let se=z.target.closest("[data-results-tab]");if(se){P=+se.dataset.resultsTab||0,T();return}let ie=z.target.closest("[data-results-action]");if(ie){let le=ie.dataset.resultsAction,ue=B;if(!ue)return;if(le==="copy"){let ke=ue.questions.map((Ie,ee)=>{let ae=Ie.options.reduce((me,re)=>me+(re.count||0),0),de=Ie.options.map(me=>{let re=ae>0?(me.count/ae*100).toFixed(1):"0.0";return`  ${me.key}. ${me.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:me.count})} (${re}%)`});return`Q${ee+1}: ${Ie.text}
${de.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(ke)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else le==="csv"?j(`poll_${(ue.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",R(ue)):le==="json"?j(`poll_${(ue.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(ue,null,2)):le==="reset"&&(B=null,P=0,p());return}}),C.addEventListener("dragstart",z=>{let X=z.target.closest(".admin-poll-qrow");X&&(n=X.dataset.qid,X.classList.add("is-dragging"))}),C.addEventListener("dragend",z=>{let X=z.target.closest(".admin-poll-qrow");X&&X.classList.remove("is-dragging"),n=null,C.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over"))}),C.addEventListener("dragover",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-qrow");!X||!n||X.dataset.qid===n||(C.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),C.addEventListener("drop",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-qrow");if(!X||!n)return;let Z=o.findIndex(ie=>ie.id===n),se=o.findIndex(ie=>ie.id===X.dataset.qid);Z<0||se<0||Z===se||(o=i(o,Z,se),e(),p())}),C.addEventListener("click",z=>{let X=z.target.closest(".admin-poll-qrow");X&&(t=X.dataset.qid,e(),p())}),_.addEventListener("input",z=>{let X=a(t);if(X){if(z.target.matches("[data-ed-text]")){X.text=z.target.value,e(),l();return}if(z.target.matches("[data-ed-opt-text]")){let Z=z.target.dataset.edOptText,se=X.options.find(ie=>ie.id===Z);se&&(se.label=z.target.value,e(),l())}}}),_.addEventListener("change",z=>{let X=a(t);X&&z.target.matches("[data-ed-timer]")&&(X.timer=+z.target.value,e(),l())}),_.addEventListener("click",async z=>{let X=a(t);if(!X)return;let Z=z.target.closest("[data-ed-opt-remove]");if(Z){let ie=Z.dataset.edOptRemove;X.options.length>2&&(X.options=X.options.filter(le=>le.id!==ie),e(),u(),l());return}if(z.target.closest("[data-ed-opt-add]")){X.options.length<6&&(X.options.push(w()),e(),u(),l());return}let se=z.target.closest("[data-ed-action]");if(se)if(se.dataset.edAction==="remove-q"){if(o.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let le=o.findIndex(ue=>ue.id===t);o=o.filter(ue=>ue.id!==t),t=o[Math.min(le,o.length-1)].id,e(),p()}}else if(se.dataset.edAction==="upload-q-image"){let ie=_.querySelector("[data-ed-q-image-input]");ie&&ie.click()}else se.dataset.edAction==="remove-q-image"&&(X.image_url="",e(),u(),l())}),_.addEventListener("change",async z=>{if(!z.target.matches("[data-ed-q-image-input]"))return;let X=z.target.files&&z.target.files[0];if(!X)return;let Z=a(t);if(!Z)return;if(!d.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),z.target.value="";return}if(!Z.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),z.target.value="";return}if(X.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),z.target.value="";return}let se=new FormData;se.append("file",X);try{let ie=await csrfFetch(`/admin/poll/${encodeURIComponent(d.pollId)}/upload-image/${encodeURIComponent(Z.server_q_id)}`,{method:"POST",body:se}),le=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(le.error||"upload failed");Z.image_url=le.image_url,e(),u(),l(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(ie){showToast&&showToast(String(ie.message||ie),!1)}finally{z.target.value=""}}),_.addEventListener("dragstart",z=>{let X=z.target.closest(".admin-poll-opt");X&&(r=X.dataset.oid,X.classList.add("is-dragging"))}),_.addEventListener("dragend",z=>{_.querySelectorAll(".is-dragging, .is-drag-over").forEach(X=>X.classList.remove("is-dragging","is-drag-over")),r=null}),_.addEventListener("dragover",z=>{let X=z.target.closest(".admin-poll-opt");!X||!r||X.dataset.oid===r||(z.preventDefault(),_.querySelectorAll(".is-drag-over").forEach(Z=>Z.classList.remove("is-drag-over")),X.classList.add("is-drag-over"))}),_.addEventListener("drop",z=>{z.preventDefault();let X=z.target.closest(".admin-poll-opt"),Z=a(t);if(!X||!r||!Z)return;let se=Z.options.findIndex(le=>le.id===r),ie=Z.options.findIndex(le=>le.id===X.dataset.oid);se<0||ie<0||se===ie||(Z.options=i(Z.options,se,ie),e(),u())}),U.addEventListener("click",z=>{if(z.target.closest("[data-poll-action='add']")){let le=b();o.push(le),t=le.id,e(),p();return}let Z=z.target.closest("[data-poll-template]");if(Z){let le=b(),ue=Z.dataset.pollTemplate,ke=["A","B","C","D","E"],Ie=ee=>ee.map((ae,de)=>{let me=w(ke[de]);return me.text=ae,me});ue==="yesno"?(le.text="",le.options=Ie([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):ue==="stars"?(le.timer=60,le.options=Ie(["1","2","3","4","5"])):ue==="four"&&(le.options=Ie(["","","",""])),o.push(le),t=le.id,e(),p();return}let se=z.target.closest("[data-poll-mode]");se&&(s=se.dataset.pollMode,U.querySelectorAll("[data-poll-mode]").forEach(le=>le.classList.toggle("is-active",le===se)),e());let ie=z.target.closest("[data-poll-session-action]");if(ie){let le=ie.dataset.pollSessionAction;le==="start"?K():le==="advance"?G():le==="end"&&te()}});function J(){let z=U.querySelector("[data-poll-session]");if(!z)return;let X=z.querySelector("[data-poll-session-status]"),Z=z.querySelector("[data-poll-session-action='start']"),se=z.querySelector("[data-poll-session-action='advance']"),ie=z.querySelector("[data-poll-session-action='end']");if(!d.pollId||!d.active){X.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,Z.hidden=!1,se.hidden=!0,ie.hidden=!0;return}let le=o.length,ue=d.currentIndex+1,ke=d.currentIndex>=le-1;X.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${ue} / ${le}</span>`,Z.hidden=!0,se.hidden=ke,ie.hidden=!1}async function K(){try{let z=o.map((ue,ke)=>{let Ie=(ue.text||"").trim(),ee=ue.options.map(ae=>(ae.label||"").trim()).filter(Boolean);if(!Ie)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:ke+1}));if(ee.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:ke+1}));return{text:Ie,options:ee,time_limit_seconds:ue.timer&&ue.timer>0?ue.timer:null}});if(!z.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let X=(()=>{let ue=o.map(ke=>Number(ke.timer)||0).filter(ke=>ke>0);return ue.length?Math.round(ue.reduce((ke,Ie)=>ke+Ie,0)/ue.length):null})(),Z=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:z,mode:s||"manual",default_duration_s:X})}),se=await Z.json().catch(()=>({}));if(!Z.ok)throw new Error(se.error||ServerI18n.t("pollBuilderErrCreateFailed"));d.pollId=se.poll_id,(se.questions||[]).forEach((ue,ke)=>{o[ke]&&(o[ke].server_q_id=ue.id)}),e();let ie=await csrfFetch("/admin/poll/start",{method:"POST"}),le=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(le.error||ServerI18n.t("pollBuilderErrStartFailed"));d.active=!0,d.currentIndex=le.current_index??0,L=le,B=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),ne()}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function G(){try{let z=await csrfFetch("/admin/poll/advance",{method:"POST"}),X=await z.json().catch(()=>({}));if(!z.ok)throw new Error(X.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));d.currentIndex=X.current_index,d.active=!!X.active,L=X,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:d.currentIndex+1}),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}async function te(){try{let z=L,X=await csrfFetch("/admin/poll/end",{method:"POST"});if(!X.ok){let Z=await X.json().catch(()=>({}));throw new Error(Z.error||ServerI18n.t("pollBuilderErrEndFailed"))}z&&z.questions&&(B={...z,ended_at:Date.now()/1e3},P=z.current_index>=0?z.current_index:0),d.active=!1,d.pollId="",d.currentIndex=-1,L=null,d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(z){showToast&&showToast(String(z.message||z),!1)}}function ne(){d.statusTimer&&clearInterval(d.statusTimer),d.statusTimer=setInterval(async()=>{if(d.pollId)try{let z=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!z.ok)return;let X=await z.json();if(X.poll_id!==d.pollId)return;d.active=!!X.active,d.currentIndex=X.current_index??-1;let Z=!!(L&&L.active);L=X,X.active||(clearInterval(d.statusTimer),d.statusTimer=null,Z&&X.questions&&!B&&(B={...X,ended_at:Date.now()/1e3},P=X.current_index>=0?X.current_index:0),L=null),H==="live"?O():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{d.statusTimer&&(clearInterval(d.statusTimer),d.statusTimer=null),I()}),p()}function A(){let U=document.getElementById("settings-grid");!U||document.getElementById(y)||(U.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&h())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var yt=ye(()=>{(function(){"use strict";let h="sec-live-feed",A=[],U=[],C=!1,_="",m="all",M=0,F=0,S=null,$=null,N=null;function w(ee){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(ee):String(ee??"").replace(/[&<>"']/g,function(ae){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ae]})}function b(ee,ae){return ee?ee.length>ae?ee.slice(0,ae)+"\u2026":ee:""}function L(ee){let ae=new Date(ee),de=me=>String(me).padStart(2,"0");return`${de(ae.getHours())}:${de(ae.getMinutes())}:${de(ae.getSeconds())}`}function H(ee){if(!_)return!0;let ae=_.toLowerCase(),de=ee.data;return de.text&&de.text.toLowerCase().includes(ae)||de.nickname&&de.nickname.toLowerCase().includes(ae)||de.fingerprint&&de.fingerprint.toLowerCase().includes(ae)||de.layout&&de.layout.toLowerCase().includes(ae)}function B(ee){return m==="muted"?!!ee.muted:!0}function P(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(ee=>ee.classList.toggle("is-active",ee.dataset.tab==="all"))}function f(){_="",N&&(N.value=""),P()}function c(ee,ae){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let me;return ee==="paused"?me=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:ae||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):ee==="no-result"?me=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:ae||ServerI18n.t("lfNoMatchDesc")}):me=window.AdminEmpty.render("messages"),me.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),me.setAttribute("data-empty-kind","live-feed"),me}let de=document.createElement("div");return de.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",de.setAttribute("data-empty-kind","live-feed"),de.innerHTML=`<div class="admin-proto-placeholder-title">${w(ee)}</div><div class="admin-proto-placeholder-body">${w(ae||"")}</div>`,de}function o(ee){let ae=ee.data,de=document.createElement("div");de.className="admin-live-feed-row"+(ee.muted?" is-muted":""),de.dataset.id=ee.id,de.tabIndex=-1;let me=document.createElement("span");if(me.className="admin-live-feed-time",me.textContent=L(ee.ts),de.appendChild(me),(ae.layout||"scroll").toLowerCase()!=="scroll"){let Y=document.createElement("span");Y.className="admin-ui-chip admin-live-feed-tag",Y.textContent=ae.layout,de.appendChild(Y)}let ve=document.createElement("span");ve.className="admin-live-feed-text",ve.textContent=b(ae.text||"",80),ve.title=ae.text||"",de.appendChild(ve);let fe=document.createElement("span");fe.className="admin-live-feed-identity",window.AdminIdentity&&fe.appendChild(AdminIdentity.render({nickname:ae.nickname||"",fp:"",onNicknameClick:function(Y){!Y||!N||(N.value=Y,N.dispatchEvent(new Event("input",{bubbles:!0})),N.focus())}})),de.appendChild(fe);let q=document.createElement("span");if(q.className="admin-live-feed-actions is-hover-reveal",ae.message_id){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip admin-live-feed-action",Y.textContent=ServerI18n.t("lfRecallBtn"),Y.title=ServerI18n.t("lfRecallTitle"),Y.addEventListener("click",Q=>{Q.stopPropagation(),s(ee)}),q.appendChild(Y)}let V=document.createElement("button");if(V.type="button",V.className="admin-ui-chip is-danger admin-live-feed-action",V.textContent=ServerI18n.t("blockKeywordBtn"),V.title=ServerI18n.t("blockKeywordTitle"),V.addEventListener("click",Y=>{Y.stopPropagation(),n("keyword",ae.text,ee.id)}),q.appendChild(V),ae.fingerprint){let Y=document.createElement("button");Y.type="button",Y.className="admin-ui-chip is-warn admin-live-feed-action",Y.textContent=ServerI18n.t("blockFpBtn"),Y.title=ServerI18n.t("blockFpTitle").replace("{fp}",ae.fingerprint),Y.addEventListener("click",Q=>{Q.stopPropagation(),n("fingerprint",ae.fingerprint,ee.id)}),q.appendChild(Y)}return de.appendChild(q),de.classList.add("is-clickable"),de.addEventListener("click",Y=>{Y.target.closest(".admin-live-feed-actions")||t(ee)}),de.addEventListener("keydown",Y=>{Y.key!=="Enter"||Y.target.closest("button")||(Y.preventDefault(),t(ee))}),de}function t(ee){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(ee)}async function s(ee){let ae=ee&&ee.data&&ee.data.message_id;if(!ae)return;let de=await window.AdminModeration.recall(ae);if(!de.ok){console.error("[LiveFeed] Recall failed:",de.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}ee.recalled=!0;let me=r(ee.id);me&&me.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function n(ee,ae,de){if(!(!ae||!await(ee==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,ae))){if(de){let ve=A.find(fe=>fe.id===de);ve&&(ve.muted=!0)}else A.forEach(ve=>{ee==="keyword"&&ve.data.text===ae&&(ve.muted=!0),ee==="fingerprint"&&ve.data.fingerprint===ae&&(ve.muted=!0)});a()}}function r(ee){if(!S||!ee)return null;let ae=S.children;for(let de=0;de<ae.length;de++)if(ae[de].dataset&&ae[de].dataset.id===ee)return ae[de];return null}function d(){let ee=document.activeElement,ae=ee&&ee.closest?ee.closest(".admin-live-feed-row"):null;return ae?ae.dataset.id:null}function e(ee){if(!ee)return;let ae=r(ee);ae&&document.activeElement!==ae&&ae.focus({preventScroll:!0})}function a(){if(!S)return;let ee=d(),ae=document.createDocumentFragment(),de=A.filter(me=>H(me)&&B(me));for(let me=de.length-1;me>=0;me--)ae.appendChild(o(de[me]));if(S.textContent="",ae.childNodes.length===0){let me=C?c("paused"):A.length===0?c("empty"):c("no-result");S.appendChild(me)}else S.appendChild(ae);l(),e(ee)}function v(ee){if(!S||!H(ee)||!B(ee))return null;let ae=S.querySelector("[data-empty-kind='live-feed']");ae&&ae.remove();let de=S.scrollTop<=8,me=o(ee);if(de)S.insertBefore(me,S.firstChild);else{let re=S.scrollHeight;S.insertBefore(me,S.firstChild),S.scrollTop+=S.scrollHeight-re,F+=1}return me}function i(){let ee=A.length-200;if(ee<=0)return;A.splice(0,ee).forEach(de=>{let me=r(de.id);me&&me.remove()})}function l(){I(),E(),p()}function u(ee){let ae={ts:Date.now(),data:ee,id:ee&&ee.message_id?"m"+ee.message_id:"e"+ ++M};if(ee&&ee.status==="blocked"&&(ae.muted=!0),C){U.push(ae),E(),p();return}A.push(ae),v(ae),i(),l()}function p(){let ee=document.querySelector("[data-lf-jump]"),ae=document.querySelector("[data-lf-jump-n]");if(!ee||!ae)return;let de=U.length,me=de>0?de:F;me>0?(ee.hidden=!1,ae.textContent=String(me)):ee.hidden=!0}function x(){C&&D(),F=0,S&&(S.scrollTop=0),p()}function I(){let ee=document.querySelector("[data-lf-state]");ee&&(ee.className=C?"ui-status is-warning":"ui-status is-success",ee.textContent=C?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function E(){let ee=document.getElementById(h)||document,ae=(de,me)=>{let re=ee.querySelector(de);re&&(re.textContent=String(me))};ae("[data-cnt-all]",A.length),ae("[data-cnt-mut]",A.filter(de=>de.muted).length)}function D(){if(C=!C,S&&S.setAttribute("aria-live",C?"off":"polite"),$&&($.textContent=C?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),$.classList.toggle("is-primary",C),$.classList.toggle("is-ghost",!C)),C)E(),p();else{for(let ee of U)A.push(ee);U=[],A.length>200&&A.splice(0,A.length-200),F=0,a()}}function O(){let ee=document.getElementById("settings-grid");if(!ee)return!1;let ae=`
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
      </div>`;return ee.insertAdjacentHTML("beforeend",ae),!0}let W=!1,T=null,R=0,j=1500,J=!1;async function K(){if(!J){J=!0;try{let ee=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(R),{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json();if(Array.isArray(ae.entries)){for(let de of ae.entries)if(!(!de||!de.data)){if(typeof de.seq=="number"){if(de.seq<=R)continue;R=de.seq}u(de.data)}}typeof ae.next_since=="number"&&ae.next_since>R&&(R=ae.next_since)}catch{}finally{J=!1}}}let G=5e3,te=null,ne=!1;async function z(){if(!(ne||document.hidden)){ne=!0;try{let ee=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!ee.ok)return;let ae=await ee.json(),de=Array.isArray(ae.pending)?ae.pending.length:0,me=document.getElementById(h);if(!me)return;let re=me.querySelector("[data-cnt-q]");re&&(re.textContent=String(de));let ve=me.querySelector("[data-lf-pending-link]");ve&&ve.classList.toggle("has-pending",de>0)}catch{}finally{ne=!1}}}function X(){W||(W=!0,K(),T=setInterval(K,j),z(),te=setInterval(z,G),window.addEventListener("beforeunload",()=>{te&&(clearInterval(te),te=null),T&&(clearInterval(T),T=null)}))}function Z(){window.DANMU_CONFIG?.session?.logged_in&&!document.getElementById(h)&&O()&&(se(),a())}function se(){S=document.getElementById("liveFeedList"),$=document.getElementById("liveFeedPauseBtn"),N=document.getElementById("liveFeedSearch");let ee=document.getElementById("liveFeedClearBtn"),ae=document.querySelectorAll(".admin-live-feed-tab");$&&$.addEventListener("click",D),ee&&ee.addEventListener("click",()=>{A=[],U=[],F=0,a()});let de=document.querySelector("[data-lf-jump-btn]");if(de&&de.addEventListener("click",x),S&&S.addEventListener("scroll",()=>{S.scrollTop<=8&&F>0&&(F=0,p())},{passive:!0}),ae.forEach(me=>{me.addEventListener("click",()=>{ae.forEach(re=>re.classList.remove("is-active")),me.classList.add("is-active"),m=me.dataset.tab||"all",a()})}),N){let me=null;N.addEventListener("input",()=>{clearTimeout(me),me=setTimeout(()=>{_=N.value.trim(),a()},200)})}X()}function ie(ee){if(!("ontouchstart"in window))return;let ae=0,de=0,me=0,re=null,ve=null,fe=!1;function q(V){if(V.querySelector(".admin-live-feed-row__swipe-actions"))return;let Y=V.dataset.id,Q=A.find(pe=>pe.id===Y),oe=!!(Q&&Q.data&&Q.data.message_id),ce=document.createElement("div");ce.className="admin-live-feed-row__swipe-actions",ce.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${oe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,ce.addEventListener("click",function(pe){let we=pe.target.closest("[data-swipe-act]");if(!we||we.disabled)return;let ge=V.dataset.id,he=A.find(Te=>Te.id===ge);if(!he||!he.data)return;let Se=we.dataset.swipeAct;Se==="ban"?he.data.fingerprint&&n("fingerprint",he.data.fingerprint,ge):Se==="recall"&&s(he),V.classList.remove("is-swiped")}),V.appendChild(ce)}ee.addEventListener("touchstart",function(V){let Y=V.target.closest(".admin-live-feed-row");Y&&(V.target.closest(".admin-live-feed-row__swipe-actions")||(re=Y,fe=!1,ae=V.touches[0].clientX,de=V.touches[0].clientY,me=0))},{passive:!0}),ee.addEventListener("touchmove",function(V){if(!re||fe)return;let Y=V.touches[0],Q=Y.clientX-ae,oe=Y.clientY-de;if(Math.abs(oe)>Math.abs(Q)&&Math.abs(oe)>12){fe=!0;return}if(me=Q,Q<-10){q(re),ve=re,re.classList.add("is-swiping");let ce=Math.max(-180,Q);re.style.transform=`translateX(${ce}px)`}else Q>10&&re.classList.contains("is-swiped")&&(re.style.transform="")},{passive:!0}),ee.addEventListener("touchend",function(){re&&(re.classList.remove("is-swiping"),re.style.transform="",me<=-60?re.classList.add("is-swiped"):re.classList.remove("is-swiped"),re=null,ve=null,me=0)},{passive:!0})}function le(){return S?Array.from(S.querySelectorAll(".admin-live-feed-row")):[]}function ue(){let ee=le(),ae=document.activeElement;for(let de of ee)if(de===ae||de.contains(ae))return de;return null}function ke(ee){let ae=le();if(!ae.length)return!1;let de=ue(),me=de?ae.indexOf(de)+ee:ee>0?0:ae.length-1;return me=Math.max(0,Math.min(ae.length-1,me)),ae[me].focus(),ae[me].scrollIntoView({block:"nearest"}),!0}function Ie(ee){let ae=ue();if(!ae)return!1;let de=A.find(re=>re.id===ae.dataset.id);if(!de)return!1;let me=ee==="keyword"?de.data.text:de.data.fingerprint;return me?(n(ee,me,de.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return A.slice()},isVisible:function(){return!!(S&&S.offsetParent!==null)},isPaused:function(){return C},moveFocus:ke,blockFocused:Ie,togglePause:function(){D()}},document.addEventListener("admin-panel-rendered",Z),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z()})()});var bt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function h(a,v=!1){var i=y();return i[a]!==void 0?i[a]:v}function A(a){var v=y();v[a.id]=a.open,k(v)}let U=!1;new MutationObserver(()=>{let a=document.getElementById("settings-grid");if(a&&!(document.getElementById("sec-plugins")||U)){U=!0;try{_(a)}finally{U=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function _(a){let v=`
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
      `;a.insertAdjacentHTML("beforeend",v);let i=document.querySelector("[data-console-filters]");i&&i.addEventListener("click",l=>{let u=l.target.closest("[data-console-filter]");u&&(i.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===u)),F=u.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",e),B(),H()}let m=0,M=0,F="all",S=[],$=80;function N(a){let v=(a||"INFO").toUpperCase();return v==="ERROR"?"is-error":v==="WARN"?"is-warn":v==="DEBUG"?"is-debug":"is-info"}function w(a){let v=new Date(a*1e3),i=l=>String(l).padStart(2,"0");return`${i(v.getHours())}:${i(v.getMinutes())}:${i(v.getSeconds())}`}function b(){let a=document.getElementById("pluginsConsoleBody");if(!a)return;let v=F==="all"?S:S.filter(i=>(i.level||"INFO").toUpperCase()===F);if(v.length===0){let i=F==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${F} lines yet \xB7 waiting\u2026`;a.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${i}</span>
          </div>`;return}a.innerHTML=v.map(i=>{let l=w(i.ts),u=(i.msg||"").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),p=(i.plugin||"\u2014").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),x=(i.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${l}</span>
          <span class="lv ${N(i.level)}">${x}</span>
          <span class="plg">${p}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function L(){try{let a=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!a.ok)return;let v=await a.json();if(!Array.isArray(v.events)||v.events.length===0)return;for(S.unshift(...v.events);S.length>$;)S.pop();m=v.latest_seq||m,b()}catch{}}function H(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:L}))}async function B(){let a=document.getElementById("pluginsList");if(a)try{let v=await csrfFetch("/admin/plugins/list");if(!v.ok)throw new Error(`HTTP ${v.status}`);let l=(await v.json()).plugins||[];if(l.length===0){a.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",P([]);return}a.innerHTML=l.map(f).join(""),r(a),P(l)}catch(v){console.error("Failed to load plugins:",v),a.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function P(a){let v=a.length,i=a.filter(I=>I.enabled).length,l=v-i,u=a.map(I=>I.priority).filter(I=>typeof I=="number"),p=u.length?Math.round(u.reduce((I,E)=>I+E,0)/u.length):null,x=(I,E)=>{document.querySelectorAll(`[data-plugins-stat="${I}"]`).forEach(D=>{D.textContent=E})};x("loaded",v),x("running",i),x("paused",l),x("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(I=>{I.textContent=v})}function f(a){let{name:v,version:i,description:l,priority:u,enabled:p,is_user:x,file:I}=a,E=`plugin-toggle-${v}`,D=t(u),O=n(u),W=o(a),T=x&&I?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(I)}"
            data-plugin-name="${g(v)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(v)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(v)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(v)}</div>
            ${l?`<div class="desc">${g(l)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${i?"v"+g(i):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${D}">${u??"\u2014"}${O?" \xB7 "+O:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${s(W)}">${W}</span>
          <div class="admin-plugins-toggle-cell">
            ${T}
            <label class="admin-plugins-switch" for="${E}">
              <input type="checkbox" id="${E}" role="switch"
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
      `}async function c(a,v){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:a}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:v}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let l=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:v})}),u=await l.json().catch(()=>({}));if(!l.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:l.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:a}),!0),await B()}catch(l){showToast(ServerI18n.t("pluginsToastNetError",{msg:l.message||""}),!1)}}function o(a){let v=a.file||a.path||a.source||"";if(typeof v=="string"){if(v.endsWith(".py"))return"PY";if(v.endsWith(".js"))return"JS"}return(a.language||"PY").toUpperCase()}function t(a){return a==null?"is-muted":a<=10?"is-danger":a<=50?"is-warn":"is-cyan"}function s(a){return a==="JS"?"is-cyan":a==="PY"?"is-warn":"is-muted"}function n(a){return a==null?"":a<=10?"CRITICAL":a<=50?"HIGH":"NORMAL"}function r(a){a.querySelectorAll(".plugin-toggle").forEach(v=>{v.addEventListener("change",async function(){let i=this.dataset.pluginName,l=this.checked;await d(i,l,this)})}),a.querySelectorAll(".plugin-uninstall").forEach(v=>{v.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function d(a,v,i){let l=v?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||`HTTP ${u.status}`)}showToast(v?ServerI18n.t("pluginEnabled").replace("{name}",a):ServerI18n.t("pluginDisabled").replace("{name}",a),!0)}catch(u){console.error(`Failed to ${v?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),i&&(i.checked=!v)}}async function e(){let a=document.getElementById("pluginsReloadBtn");a&&(a.disabled=!0);try{let v=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!v.ok){let i=await v.json().catch(()=>({}));throw new Error(i.error||`HTTP ${v.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await B()}catch(v){console.error("Failed to reload plugins:",v),showToast(v.message||ServerI18n.t("reloadFailed"),!1)}finally{a&&(a.disabled=!1)}}})})()});var wt=ye(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},k={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,h=null;function A(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",t=>{(t.target.matches("[data-pu-close]")||t.target===g)&&o()}),g)}function U(t){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((n,r)=>{let d=r+1,e=d<t,v=e?"is-done":d===t?"is-active":"";return(r>0?`<span class="admin-pu-step-line ${e?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${v}">
          <span class="circle">${e?"\u2713":d}</span>
          <span class="label">${n}</span>
        </div>`}).join("")}function C(t,s){h.step=t;let n=g.querySelector("[data-pu-steps]");n&&(n.innerHTML=U(t));let r=g.querySelector("[data-pu-body]");r&&(r.innerHTML=s)}function _(t){let s=t==="error-type"?ServerI18n.t("pluginsUploadErrorType"):t==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):t==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):t==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),n=(t||"").startsWith("error")?"\u2715":t==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(t||"").startsWith("error")?"is-error":t==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${n}</div>
          <div class="admin-pu-dropzone-msg">${y(s)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let t=g.querySelector("[data-pu-dropzone]"),s=g.querySelector("[data-pu-file]"),n=g.querySelector("[data-pu-browse]");n&&n.addEventListener("click",()=>s&&s.click()),s&&s.addEventListener("change",()=>{s.files&&s.files[0]&&M(s.files[0])}),t&&(t.addEventListener("click",()=>s&&s.click()),t.addEventListener("dragover",r=>{r.preventDefault(),t.classList.add("is-over")}),t.addEventListener("dragleave",()=>t.classList.remove("is-over")),t.addEventListener("drop",r=>{r.preventDefault(),t.classList.remove("is-over");let d=r.dataTransfer&&r.dataTransfer.files;if(!(!d||d.length===0)){if(d.length>1){C(1,_("error-multi")),m();return}M(d[0])}}))}function M(t){if(!t.name.match(/\.py$/i)){C(1,_("error-type")),m();return}if(t.size>256*1024){C(1,_("error-size")),m();return}h.file=t,C(2,F(t.name)),S(t)}function F(t){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(t)}</div>
      </div>`}async function S(t){try{let s=new FormData;s.append("file",t);let n=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:s}),r=await n.json().catch(()=>({}));if(!n.ok&&!r.validation){window.showToast?.(r.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:n.status}),!1),C(1,_()),m();return}h.manifest=r.manifest||{},h.validation=r.validation||{},h.filename=r.filename||t.name,$(h)}catch(s){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:s.message||""}),!1),C(1,_()),m()}}function $(t){let s=t.manifest||{},n=t.validation||{},r="";if(!n.syntax_ok)r=N(n.syntax_err,t);else if(Object.keys(s).length===0)r=w(t);else{let d=(n.deps||[]).some(e=>e.status==="missing");r=H(s,n,t,d)}C(2,`<div class="admin-pu-step2">${r}</div>`),B()}function N(t,s){let n=t&&t.line?t.line:"?",r=t&&t.msg?t.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${n}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${s.filename}
${r}`)}</pre>
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
      </footer>`}function b(t){return t==null?"is-muted":t<=10?"is-danger":t<=50?"is-warn":"is-cyan"}function L(t){if(t==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let s=b(t),n=t<=10?"CRITICAL":t<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${s}">${t} \xB7 ${n}</span>`}function H(t,s,n,r){let d=t.name||n.filename.replace(/\.(py|js)$/i,""),e=t.version?`v${y(t.version)}`:"\u2014",a=t.author?`@${y(t.author.replace(/^@/,""))}`:"\u2014",v=t.description||ServerI18n.t("pluginsUploadNoDescription"),i="PY",l="is-warn",u=Array.isArray(t.permissions)?t.permissions:[],p=Object.keys(k).map(O=>{let W=u.includes(O);return`
        <div class="admin-pu-perm-row ${W?"is-req":"is-not"}">
          <span class="dot">${W?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(O)}</span>
          <span class="label">${y(ServerI18n.t(k[O]))}</span>
        </div>`}).join(""),x=s.deps||[],I=x.map(O=>{let W=O.status==="ok"?"is-ok":O.status==="warn"?"is-warn":"is-err",T=O.status==="ok"?"\u2713":O.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${W}">
          <span class="dot">${T}</span>
          <span class="name">${y(O.name)}</span>
          <span class="note">${y(O.note||"")}</span>
        </div>`}).join(""),E=s.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(d)}</span>`})}
      </div>`:"",D=x.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${I}</div>
      </section>`;return`
      ${E}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
          <span class="author">${a}</span>
          <span class="admin-ui-pill admin-pu-pill ${l}" style="margin-left:auto">${i}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(v)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${L(t.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPermissions")}</span>
          <div class="admin-pu-perm-list">${p}</div>
        </section>
        ${D}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${r?"admin-ui-action admin-pu-btn":"admin-ui-action is-warn admin-pu-btn"}" ${r?"disabled":""} data-pu-confirm>${r?ServerI18n.t("pluginsUploadFixDeps"):ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`}function B(){let t=g.querySelector("[data-pu-back]");t&&t.addEventListener("click",()=>{h.file=null,h.manifest=null,h.validation=null,C(1,_()),m()});let s=g.querySelector("[data-pu-confirm]");s&&s.addEventListener("click",()=>P());let n=g.querySelector("[data-pu-no-manifest-ack]");n&&s&&n.addEventListener("change",()=>{s.disabled=!n.checked})}function P(){let t=h.manifest||{},s=t.name||(h.filename||"").replace(/\.(py|js)$/i,""),n=t.version?`v${y(t.version)}`:"\u2014",r=Array.isArray(t.permissions)?t.permissions:[],d=r.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:r.map(v=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(v)}</span></div>`).join("");C(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(s)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${n}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${d}</div>
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
      </div>`);let e=g.querySelector("[data-pu-install]");e&&e.addEventListener("click",f);let a=g.querySelector("[data-pu-back]");a&&a.addEventListener("click",()=>$(h))}async function f(){C(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let t=new FormData;t.append("file",h.file);let s=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:t}),n=await s.json().catch(()=>({}));if(!s.ok){window.showToast?.(n.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:s.status}),!1),$(h);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:n.name||h.filename}),!0),o();let r=document.getElementById("pluginsReloadBtn");r&&r.click()}catch(t){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:t.message||""}),!1),$(h)}}function c(){A(),h={step:1,file:null,manifest:null,validation:null,filename:null},C(1,_()),m(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function o(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),h=null)}window.AdminPluginUpload={open:c,close:o},document.addEventListener("click",t=>{t.target.closest("#pluginsUploadBtn")&&(t.preventDefault(),c())})})()});var St=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-webhooks",g=12e3,h=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function A(d,e){return d?d.length>e?d.slice(0,e)+"\u2026":d:""}function U(d){if(!d)return"\u2014";try{let e=new Date(d),a=Math.max(0,(Date.now()-e.getTime())/1e3);return a<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(a)}):a<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(a/60)}):a<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(a/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(a/86400)})}catch{return"\u2014"}}function C(d){if(!d)return"\u2014";try{return new URL(d).hostname}catch{return A(d,30)}}function _(d){return d==="active"?"is-success":d==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:h,eventCatalogLoaded:!1};function M(){let d=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!d||document.getElementById(k)||(d.insertAdjacentHTML("beforeend",`
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
    `),F())}function F(){let d=document.getElementById(k);if(!d)return;let e=document.getElementById("wh-register-form");e&&e.addEventListener("submit",async a=>{a.preventDefault();let v=document.getElementById("wh-url").value.trim();if(!v)return;let i=Array.from(e.querySelectorAll('input[name="wh-event"]:checked')).map(x=>x.value);if(i.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let l=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),p={url:v,events:i,format:l};u&&(p.secret=u);try{let x=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),I=await x.json();x.ok&&I.hook_id?(showToast(ServerI18n.t("webhookRegistered")),e.reset(),L(),e.hidden=!0,await S()):showToast(I.error||ServerI18n.t("registrationFailed"),!1)}catch(x){console.error("Webhook register error:",x),showToast(ServerI18n.t("registrationFailed"),!1)}}),d.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(a=>a.addEventListener("click",()=>{e&&(e.hidden=!1)})),d.addEventListener("click",a=>{if(a.target.closest("[data-wh-action='show-add']")){e&&(e.hidden=!1);return}if(a.target.closest("[data-wh-action='hide-add']")){e&&(e.hidden=!0);return}let l=a.target.closest("[data-wh-log-filter]");if(l){m.deliveryFilter=l.dataset.whLogFilter,d.querySelectorAll("[data-wh-log-filter]").forEach(W=>{W.classList.toggle("is-active",W.dataset.whLogFilter===m.deliveryFilter)}),c();return}let u=a.target.closest("[data-wh-action='test']");if(u){a.stopPropagation(),s(u.dataset.whHookId);return}let p=a.target.closest("[data-wh-action='settings']");if(p){a.stopPropagation(),o(p.dataset.whHookId);return}if(a.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,t(),P();return}let I=a.target.closest("[data-wh-action='detail-ping']");if(I){s(I.dataset.whHookId);return}let E=a.target.closest("[data-wh-action='detail-toggle']");if(E){n(E.dataset.whHookId,E.dataset.whNextEnabled==="1");return}let D=a.target.closest("[data-wh-action='detail-delete']");if(D){r(D.dataset.whHookId);return}let O=a.target.closest("[data-wh-hook-row]");if(O&&!a.target.closest("button")){o(O.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:S}))}async function S(){await w(),await Promise.all([$(),N()]),H(),P(),c(),t()}async function $(){try{let e=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(e.webhooks)?e.webhooks:[]}catch{m.hooks=[]}}async function N(){try{let d=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!d.ok)return;let e=await d.json();m.deliveries=Array.isArray(e.deliveries)?e.deliveries:[],m.stats=e.stats||null}catch{}}async function w(){if(!m.eventCatalogLoaded)try{let d=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(d.ok){let e=await d.json(),a=Array.isArray(e.events)?e.events:[];a.length&&(m.eventCatalog=a)}}catch{}finally{m.eventCatalogLoaded=!0,L()}}function b(d){let e=d&&d.slug?String(d.slug):"";if(d&&d.labelKey){let u=ServerI18n.t(d.labelKey);return{slug:e,label:u?u+" \xB7 "+e:e,title:u}}let a=d&&d.zh?String(d.zh):"",v=d&&d.en?String(d.en):"",i=window.ServerI18n&&ServerI18n.currentLang||"zh",l=(d&&d[i]?String(d[i]):"")||v||a;return{slug:e,label:l?l+" \xB7 "+e:e,title:a&&v?a+" \xB7 "+v:a||v}}function L(){let d=document.querySelector("[data-wh-register-events]");d&&(d.innerHTML=m.eventCatalog.map(function(e){let a=b(e);if(!a.slug)return"";let v=a.slug==="on_danmu"?" checked":"";return'<label title="'+y(a.title)+'"><input type="checkbox" name="wh-event" value="'+y(a.slug)+'"'+v+" /> "+y(a.label)+"</label>"}).join(""))}function H(){let d=document.querySelector("[data-wh-stats]");if(!d)return;let e=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};d.innerHTML=`
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
      </div>`}function B(){return m.hooks.length&&m.hooks[0].retry_count||3}function P(){let d=document.getElementById("wh-list"),e=document.querySelector("[data-wh-count]");if(d){if(e&&(e.textContent=String(m.hooks.length)),m.hooks.length===0){d.innerHTML="";let a=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let v=document.getElementById("wh-register-form");v&&(v.hidden=!1),document.getElementById("wh-url")?.focus()}});a.dataset.emptyKind="webhooks",d.appendChild(a);return}d.innerHTML=m.hooks.map(f).join("")}}function f(d){let e=y(d.id||""),a=Number(d.success_count)||0,v=Number(d.fail_count)||0,i=a+v,l=i>0?Math.round(a/i*1e3)/10:100,u=d.enabled!==!1,p=Number(d.last_status)||null,x=u?p&&p>=400||d.last_error?"degraded":"active":"paused",I=x==="active"?"var(--hud-lime)":x==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",E=x==="active"?"ACTIVE":x==="degraded"?"DEGRADED":"PAUSED",D=m.selectedHookId===d.id?" is-selected":"",O=_(x),W=(d.events||[]).map(function(R){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(R)+"</span>"}).join(""),T=d.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(A(d.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${D}" data-wh-hook-row data-wh-hook-id="${e}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${I};box-shadow:${u?"0 0 6px "+I:"none"}"></span>
          <span class="name">${y(C(d.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${O}">${E}</span>
          <span class="last">last \xB7 ${y(U(d.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(d.url)}</div>
        <div class="admin-wh-card-events">${W}</div>
        ${T}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${l}%;background:${I}"></div></div>
            <span class="pct" style="color:${I}">${l}%</span>
          </div>
          <span class="counter ok">\u2713 ${a.toLocaleString()}</span>
          <span class="counter ${v>0?"fail":"fail-zero"}">\u2717 ${v}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let d=document.getElementById("wh-log-list");if(!d)return;let e=m.deliveries.filter(function(a){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!a.ok:m.deliveryFilter==="2xx"?a.code&&a.code>=200&&a.code<300:m.deliveryFilter==="5xx"?a.code&&a.code>=500:!0});if(e.length===0){d.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}d.innerHTML=e.map(function(a){let v=a.ts?new Date(a.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",i=a.code?String(a.code):"\u2014",l=a.ok?"var(--hud-lime)":"var(--hud-crimson)",u=a.duration_ms?a.duration_ms>=1e3?(a.duration_ms/1e3).toFixed(1)+"s":a.duration_ms+"ms":"\u2014",p=a.ok?"var(--color-text-strong)":"var(--hud-amber)",x=y(C(a.hook_url||"")),I=(a.retries||0)===0?"\u2014":"\xD7"+a.retries,E=(a.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${a.dropped?" is-dropped":""}">
          <span class="time">${y(v)}</span>
          <span class="code" style="color:${l};border-color:${l}55;background:${l}15;">${i}</span>
          <span class="dur" style="color:${p}">${y(u)}</span>
          <span class="ep">${x}</span>
          <span class="evt">${y(a.event||"")}</span>
          <span class="retry" style="color:${E}">${I}</span>
        </div>`}).join("")}function o(d){m.selectedHookId=d,P(),t()}function t(){let d=document.querySelector("[data-wh-detail]");if(!d)return;let e=m.hooks.find(function(x){return x.id===m.selectedHookId});if(!e){d.hidden=!0,d.innerHTML="";return}d.hidden=!1;let a=e.enabled!==!1,v=Number(e.last_status)||null,i=a?v&&v>=400||e.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",l=new Set(e.events||[]),u=m.eventCatalog.map(function(x){let I=b(x),E=l.has(I.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(E?"is-active is-on":"")+'" title="'+y(I.title)+'"><span aria-hidden="true">'+(E?"\u2713":"\u25CB")+"</span><span>"+y(I.label)+"</span></label>"}).join(""),p={event:e.events&&e.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:e.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};d.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+i+";box-shadow:0 0 6px "+i+'"></span><span class="name">'+y(C(e.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(e.retry_count!=null?e.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(e.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(e.id)+'" data-wh-next-enabled="'+(a?"0":"1")+'">'+(a?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function s(d){if(d)try{let e=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),a=await e.json();e.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(a.error||ServerI18n.t("testFailed"),!1),setTimeout(S,1500)}catch(e){console.error("Webhook test error:",e),showToast(ServerI18n.t("testFailed"),!1)}}async function n(d,e){if(d)try{let a=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d,enabled:e})}),v=await a.json();if(!a.ok){showToast(v.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let i=m.hooks.find(function(l){return l.id===d});i&&(i.enabled=v.enabled),showToast(v.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),P(),t()}catch(a){console.error("Webhook toggle error:",a),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function r(d){if(!(!d||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let a=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:d})}),v=await a.json();a.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===d&&(m.selectedHookId=null),S()):showToast(v.error||ServerI18n.t("deleteFailed"),!1)}catch(a){console.error("Webhook delete error:",a),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var kt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-sounds",g=null,h=[],A=[];async function U(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let o=await c.json();h=o.sounds||[],A=o.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",h.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),h=[],A=[]}}async function C(){return U()}async function _(c,o){let t=new FormData;t.append("file",c),t.append("name",o);let s=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:t}),n=await s.json();if(!s.ok)throw new Error(n.error||"Upload failed");return n}async function m(c){let o=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await o.json();if(!o.ok)throw new Error(t.error||"Delete failed");return t}async function M(c){let o=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),t=await o.json();if(!o.ok)throw new Error(t.error||"Failed to add rule");return t}async function F(c){let o=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),t=await o.json();if(!o.ok)throw new Error(t.error||"Failed to delete rule");return t}function S(){let c=document.getElementById("soundsList");if(c){if(h.length===0){c.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});o.dataset.emptyKind="sounds",o.style.gridColumn="1 / -1",c.appendChild(o);return}c.innerHTML=h.map(function(s){var n=y(s.name),r=Math.round((s.volume!=null?s.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(s.name)+'"><div class="name" title="'+n+'">'+n+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(s.name)+'" min="0" max="100" step="1" value="'+r+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(s.name)+'" style="min-width:32px;text-align:right">'+r+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(s.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(s.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(s){s.addEventListener("click",function(){var n=s.dataset.name,r=h.find(function(d){return d.name===n});r&&(g&&(g.pause(),g=null),g=new Audio(r.url),g.volume=.5,g.play().catch(function(d){console.warn("Audio preview failed:",d)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(s){s.addEventListener("click",async function(){var n=s.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",n),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(n),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",n),!0),await U(),S(),N()}catch(d){window.showToast(d.message,!1)}})});var t={};c.querySelectorAll(".sound-volume-slider").forEach(function(s){var n=s.dataset.name,r=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(n)+'"]');s.addEventListener("input",function(){r&&(r.textContent=s.value+"%"),clearTimeout(t[n]),t[n]=setTimeout(function(){$(n,Number(s.value)/100)},300)}),s.addEventListener("change",function(){clearTimeout(t[n]),$(n,Number(s.value)/100)})})}}async function $(c,o){try{var t=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:o})}),s=await t.json();if(!t.ok){window.showToast(s.error||"Volume update failed",!1);return}var n=h.find(function(r){return r.name===c});n&&(n.volume=o),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(o*100)}),!0)}catch(r){console.warn("[admin-sounds] volume save failed:",r),window.showToast("Network error",!1)}}function N(){let c=document.getElementById("ruleSoundName");if(!c)return;let o=c.value;if(c.innerHTML="",h.length===0){let t=document.createElement("option");t.value="",t.textContent=ServerI18n.t("noSoundsAvailable"),t.disabled=!0,c.appendChild(t);return}h.forEach(t=>{let s=document.createElement("option");s.value=t.name,s.textContent=t.name,c.appendChild(s)}),o&&[...c.options].some(t=>t.value===o)&&(c.value=o)}function w(){let c=document.getElementById("rulesList");if(c){if(A.length===0){c.innerHTML="";var o=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});o.dataset.emptyKind="sound-rules",c.appendChild(o);return}c.innerHTML=A.map(function(t){var s=t.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):t.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",t.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",t.trigger_value),n=Math.round((t.volume!=null?t.volume:1)*100),r=ServerI18n.t("soundDetailLine").replace("{sound}",t.sound_name).replace("{vol}",n).replace("{cd}",t.cooldown!=null?t.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(t.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(s)+'</div><div class="admin-sounds-rule-detail">'+y(r)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(t.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(t){t.addEventListener("click",async function(){try{await F(t.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await C(),w()}catch(s){window.showToast(s.message,!1)}})})}}function b(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let o=document.getElementById("soundFileInput"),t=document.getElementById("soundNameInput"),s=o.files[0];if(!s){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let n=t.value.trim();if(!n){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await _(s,n),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",n),!0),o.value="",t.value="",await U(),S(),N()}catch(r){window.showToast(r.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function L(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let o=document.getElementById("ruleTriggerType").value,t=document.getElementById("ruleTriggerValue").value.trim(),s=document.getElementById("ruleSoundName").value,n=document.getElementById("ruleVolume"),r=document.getElementById("ruleCooldown");if(o!=="all"&&!t){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!s){window.showToast(ServerI18n.t("selectSound"),!1);return}let d=parseInt(n.value,10)/100,e=parseInt(r.value,10)||0,a={trigger_type:o,trigger_value:o==="all"?"":t,sound_name:s,volume:Math.max(0,Math.min(1,d)),cooldown:Math.max(0,e)};c.disabled=!0;try{await M(a),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await C(),w()}catch(v){window.showToast(v.message,!1)}finally{c.disabled=!1}})}function H(){let c=document.getElementById("ruleTriggerType"),o=document.getElementById("ruleTriggerValue");if(!c||!o)return;function t(){c.value==="all"?(o.disabled=!0,o.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),o.value=""):c.value==="keyword"?(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(o.disabled=!1,o.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",t),t()}function B(){let c=document.getElementById("ruleVolume"),o=document.getElementById("ruleVolumeLabel");!c||!o||c.addEventListener("input",()=>{o.textContent=c.value+"%"})}function P(){return`
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
    `}async function f(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",P()),window.AdminSkeletons){let o=document.getElementById("soundsList");o&&(o.innerHTML="",o.appendChild(window.AdminSkeletons.listRows({rows:3})));let t=document.getElementById("rulesList");t&&(t.innerHTML="",t.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([U(),C()]),S(),N(),w(),b(),L(),H(),B()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(k)&&!c&&(c=!0,f().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&(c=!0,f().finally(()=>{c=!1}))})})()});var It=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",h="sec-emojis",A=[];function U(){return`
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
    `}function C(B){let P=":"+B.name+":",f=Number(B.used)||0,c=f>0?ServerI18n.t("emojisUsedCount",{n:f}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(B.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(B.url)+'" alt="'+M(P)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(P)+'</div><div class="admin-em-v4__tile-meta">'+y(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(P)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(B.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function _(B){let P=document.querySelector("[data-em-quota-label]"),f=document.querySelector("[data-em-quota-fill]");if(!P||!f)return;let c=B.length,o=100;P.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:o}),f.style.width=Math.min(100,c/o*100)+"%"}function m(B){let P=document.querySelector("[data-em-preview-body]");if(!P)return;if(!B||B.length===0){P.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=B.slice(0,3).map(o=>`<span class="admin-em-v4__preview-pair"><code>:${y(o.name)}:</code> \u2192 <img src="${M(o.url)}" alt=":${M(o.name)}:" /></span>`);P.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function M(B){return y(B)}function F(B){var P=document.getElementById("emojiGrid"),f=document.getElementById("emojiCount");P&&(!B||B.length===0?(window.AdminEmpty?(P.innerHTML="",P.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):P.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",f&&(f.textContent="0")):(P.innerHTML=B.map(C).join(""),f&&(f.textContent=String(B.length))),_(A),m(A))}function S(){var B=document.getElementById("emojiGrid");if(B)if(window.AdminSkeletons){B.innerHTML="";for(var P=0;P<8;P++){var f=document.createElement("div");f.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var o=document.createElement("div");o.className="admin-skel",o.style.width="100%",o.style.height="100%",c.appendChild(o),f.appendChild(c);var t=document.createElement("div");t.className="admin-skel admin-skel-bar",t.style.width="60%",t.style.height="8px",t.style.margin="6px auto",f.appendChild(t),B.appendChild(f)}}else B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function $(){try{var B=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var P=await B.json();A=P.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",A.length||""),N()}catch(c){console.error("[admin-emojis] fetch failed:",c);var f=document.getElementById("emojiGrid");f&&(f.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function N(){var B=document.getElementById("emojiSearchInput"),P=(B&&B.value||"").trim().toLowerCase(),f=P?A.filter(function(c){return(c.name||"").toLowerCase().includes(P)}):A;F(f)}async function w(){var B=document.getElementById("emojiNameInput"),P=document.getElementById("emojiFileInput"),f=document.getElementById("emojiUploadBtn");if(!(!B||!P||!f)){var c=B.value.trim(),o=P.files&&P.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),B.focus();return}if(!k.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),B.focus();return}if(!o){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var t=o.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(t)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}f.disabled=!0,f.textContent=ServerI18n.t("uploadingStatus");try{var s=new FormData;s.append("name",c),s.append("emojifile",o);var n=await csrfFetch("/admin/emojis/upload",{method:"POST",body:s}),r=await n.json();n.ok?(showToast(r.message||ServerI18n.t("emojiUploadFallback")),B.value="",P.value="",await $()):showToast(r.error||ServerI18n.t("uploadFailed"),!1)}catch(d){console.error("[admin-emojis] upload error:",d),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{f.disabled=!1,f.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",B),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var f=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),c=await f.json();f.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await $()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("[admin-emojis] delete error:",o),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function L(B){try{await navigator.clipboard.writeText(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}catch{var P=document.createElement("textarea");P.value=B,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}}function H(){var B=document.getElementById("settings-grid");if(B){B.insertAdjacentHTML("beforeend",U());var P=document.getElementById("emojiUploadBtn");P&&P.addEventListener("click",w);var f=document.getElementById("emojiNameInput");f&&f.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),w())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",N);var o=document.getElementById("emojiGrid");o&&o.addEventListener("click",function(n){var r=n.target.closest(".emoji-copy-btn");if(r){L(r.dataset.label);return}var d=n.target.closest(".emoji-delete-btn");d&&b(d.dataset.name)});var t=document.querySelector("[data-em-dropzone]"),s=document.getElementById("emojiFileInput");t&&s&&(["dragenter","dragover"].forEach(function(n){t.addEventListener(n,function(r){r.preventDefault(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(n){t.addEventListener(n,function(r){r.preventDefault(),t.classList.remove("is-dragover")})}),t.addEventListener("drop",function(n){var r=n.dataTransfer&&n.dataTransfer.files&&n.dataTransfer.files[0];if(r){var d=new DataTransfer;d.items.add(r),s.files=d.files;var e=document.getElementById("emojiNameInput");if(e&&!e.value){var a=r.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");e.value=a.slice(0,32),e.focus()}t.classList.add("is-dropping"),setTimeout(function(){t.classList.remove("is-dropping")},1200)}})),S(),$()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var B=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(h)&&H()});B.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(h)&&H()}})})()});var Tt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,k="sec-stickers",g=["png","gif","webp"],h=".gif,.png,.webp",A="__all__",U=[],C=[],_=A;function m(c){return y(c)}function M(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,o=c?`
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
            ${c?`<div class="admin-ui-card">${o}</div>`:""}

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
    `}function F(c){return c===A?U.length:U.filter(function(o){return o.pack_id===c}).length}function S(){var c=document.getElementById("stickerPackList");if(c){var o='<button type="button" class="admin-stickers-pack'+(_===A?" is-active":"")+'" data-pack="'+A+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+F(A)+"</span></button>";C.forEach(function(t){var s=t.enabled?"is-success":"is-muted",n="admin-stickers-pack"+(t.id===_?" is-active":""),r=t.id==="default",d=r?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(t.id)+'" title="'+(t.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(t.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(t.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";o+='<div class="'+n+'" data-pack="'+m(t.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(t.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+s+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(t.name)+'</span><span class="admin-stickers-pack-count">'+F(t.id)+"</span></button>"+d+"</div>"}),c.innerHTML=o}}function $(c){var o=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(o)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(o)+'">'+y(o)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(o)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function N(){var c=document.getElementById("stickerGrid"),o=document.getElementById("stickerCount");if(c){var t=document.getElementById("stickerSearchInput"),s=(t&&t.value||"").trim().toLowerCase(),n=U.filter(function(d){return!(_!==A&&d.pack_id!==_||s&&!(d.name||"").toLowerCase().includes(s))});if(n.length===0){c.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});r.dataset.emptyKind="stickers",r.style.gridColumn="1 / -1",c.appendChild(r),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=n.map($).join(""),o&&(o.textContent=ServerI18n.t("stickersItemCount",{n:n.length}))}}async function w(){var c=document.getElementById("stickerGrid");if(c)try{var[o,t]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!o.ok)throw new Error("HTTP "+o.status);U=(await o.json()).stickers||[],C=t.ok?(await t.json()).packs||[]:[],_!==A&&!C.some(function(s){return s.id===_})&&(_=A),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",C.length?ServerI18n.t("tabCountPacks",{n:C.length}):""),S(),N()}catch(s){console.error("[admin-stickers] fetch failed:",s),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(c,o){if(c==="select"){_=o,S(),N();return}if(c==="rename"){var t=C.find(function(x){return x.id===o}),s=prompt(ServerI18n.t("stickersPackNamePrompt"),t?t.name:"");if(!s)return;try{var n=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})}),r=await n.json();n.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await w()):window.showToast(r.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var d=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o)+"/toggle",{method:"POST"});d.ok&&await w()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(o),{method:"DELETE"}),a=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),_===o&&(_=A),await w()):window.showToast(a.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var v=C.slice().sort(function(x,I){return(x.order||0)-(I.order||0)}),i=v.findIndex(function(x){return x.id===o});if(i<0)return;var l=c==="up"?i-1:i+1;if(l<0||l>=v.length)return;var u=v[i],p=v[l];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await w()}catch{}}}async function L(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var o=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),t=await o.json();o.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),_=t.pack&&t.pack.id?t.pack.id:_,await w()):window.showToast(t.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var c=document.getElementById("stickerFileInput"),o=document.getElementById("stickerUploadBtn");if(!(!c||!o)){var t=c.files&&c.files[0];if(!t){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var s=t.name.split(".").pop().toLowerCase();if(g.indexOf(s)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}o.disabled=!0;var n=o.textContent;o.textContent=ServerI18n.t("uploadingStatus");try{var r=new FormData;r.append("file",t),_&&_!==A&&r.append("pack_id",_);var d=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:r}),e=await d.json();d.ok?(window.showToast(e.message||ServerI18n.t("stickerUploadFallback")),c.value="",await w()):window.showToast(e.error||ServerI18n.t("uploadFailed"),!1)}catch(a){console.error("[admin-stickers] upload error:",a),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{o.disabled=!1,o.textContent=n}}}async function B(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var t=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),s=await t.json();t.ok?(window.showToast(s.message||ServerI18n.t("stickerDeleteFallback")),await w()):window.showToast(s.error||ServerI18n.t("deleteFailed"),!1)}catch(n){console.error("[admin-stickers] delete error:",n),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function P(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var o=document.createElement("textarea");o.value=c,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function f(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",M());var o=document.getElementById("stickerUploadBtn");o&&o.addEventListener("click",H);var t=document.getElementById("stickerPackAddBtn");t&&t.addEventListener("click",L);var s=document.getElementById("stickerSearchInput");s&&s.addEventListener("input",N);var n=document.getElementById("stickerPackList");n&&n.addEventListener("click",function(d){var e=d.target.closest("[data-pack-action]");if(!e){var a=d.target.closest("[data-pack]");a&&b("select",a.dataset.pack);return}var v=e.dataset.packAction,i=e.dataset.packId;v==="select"&&!i&&(i=e.closest("[data-pack]")&&e.closest("[data-pack]").dataset.pack),b(v,i)});var r=document.getElementById("stickerGrid");r&&r.addEventListener("click",function(d){var e=d.target.closest(".sticker-copy-btn");if(e){P(e.dataset.label);return}var a=d.target.closest(".sticker-delete-btn");a&&B(a.dataset.name)}),w()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(k)&&f()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&f()}})})()});var _t=ye(()=>{(function(){"use strict";let y="sec-extensions-overview",k=window.AdminUtils.escapeHtml,g=15e3,h=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],A={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function U(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${h.map(C).join("")}
        </div>
      </div>`}function C(b){let L=b.status==="ready",H="is-cold",B=L?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,P=L&&b.install?`<div class="admin-ext-install">
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
        ${P}
        ${f}
      </article>`}async function _(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;A.fireToken=await b.json(),$()}catch{}}async function m(){try{let b=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!b.ok)return;let L=await b.json();A.sources=Array.isArray(L.sources)?L.sources:[],N()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let L=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!L.ok)throw new Error("HTTP "+L.status);let H=await L.json();A.fireToken={enabled:H.enabled,prefix:H.prefix,has_token:!0,rotated_at:H.rotated_at},A.plainToken=H.token,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),S(H.token)}catch(L){console.warn("[ext] regen failed:",L),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let L=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!L.ok)throw new Error("HTTP "+L.status);A.fireToken=await L.json(),A.plainToken=null,$(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(L){console.warn("[ext] revoke failed:",L),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(b){if(b)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(b).catch(()=>{});else{let L=document.createElement("textarea");L.value=b,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();try{document.execCommand("copy")}catch{}document.body.removeChild(L)}}function $(){let b=document.querySelector("[data-fire-token-display]"),L=document.querySelector('[data-fire-token-action="copy"]'),H=document.querySelector('[data-fire-token-action="regen"]'),B=document.querySelector('[data-fire-token-action="revoke"]');if(!b)return;let P=A.fireToken;A.plainToken?(b.textContent=A.plainToken,b.classList.add("is-plain")):P&&P.has_token?(b.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:P.prefix||""}),b.classList.remove("is-plain")):(b.textContent=ServerI18n.t("extTokenNotSetHint"),b.classList.remove("is-plain")),L&&(L.disabled=!A.plainToken),H&&(H.textContent=P&&P.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),B&&(B.disabled=!(P&&P.has_token))}function N(){let b=new Set(A.sources.map(L=>L.source));document.querySelectorAll(".admin-ext-card").forEach(L=>{let H=h.find(f=>f.id===L.dataset.ext);if(!H)return;let B=L.querySelector("[data-ext-dot]");if(!B)return;let P=H.sourceMatch&&b.has(H.sourceMatch);B.classList.toggle("is-live",!!P),B.classList.toggle("is-cold",!P)})}function w(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",U());let L=document.getElementById(y);L&&L.addEventListener("click",H=>{let B=H.target.closest("[data-fire-token-action]");if(!B)return;let P=B.dataset.fireTokenAction;P==="regen"?M():P==="revoke"?F():P==="copy"&&A.plainToken&&(S(A.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),_(),A.stopPoll||(A.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&w()})})()});var Et=ye(()=>{(function(){"use strict";let y="sec-firetoken-overview",k=window.AdminUtils.escapeHtml,g=15e3,h={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function A(){return`
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
    `}async function U(){await Promise.all([C(),_(),m()])}async function C(){try{let f=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!f.ok)return;h.token=await f.json(),w()}catch{}}async function _(){try{let f=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],h.ips=Array.isArray(c.ips)?c.ips:[],L(),H(),b()}catch{}}async function m(){try{let f=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!f.ok)return;let c=await f.json();h.audit=Array.isArray(c.events)?c.events:[],B()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let o=await c.json();h.token={enabled:o.enabled,prefix:o.prefix,has_token:!0,rotated_at:o.rotated_at,created_at:o.created_at||o.rotated_at},h.plainToken=o.token,w(),S(o.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);h.token=await c.json(),h.plainToken=null,w(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function S(f){if(f)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(f).catch(()=>{});else{let c=document.createElement("textarea");c.value=f,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function $(f){if(!f)return"\u2014";let c=Date.now()/1e3-f;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function N(f){if(!f)return"\u2014";try{return new Date(f*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function w(){let f=h.token,c=document.querySelector("[data-ft-token-display]"),o=document.querySelector("[data-ft-status]"),t=document.querySelector('[data-ft-action="copy"]'),s=document.querySelector('[data-ft-action="regen"]'),n=document.querySelector('[data-ft-action="revoke"]'),r=document.querySelector('[data-ft-stat="created"]'),d=document.querySelector('[data-ft-stat="rotated"]'),e=document.getElementById("adminFtCurl");if(c&&(h.plainToken?(c.textContent=h.plainToken,c.classList.add("is-plain")):f&&f.has_token?(c.textContent=(f.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),o&&(f&&f.enabled&&f.has_token?(o.textContent=ServerI18n.t("firetokenStatusHealthy"),o.className="admin-ft-status is-good"):f&&f.has_token?(o.textContent=ServerI18n.t("firetokenStatusDisabled"),o.className="admin-ft-status is-warn"):(o.textContent=ServerI18n.t("firetokenStatusUnset"),o.className="admin-ft-status is-muted")),t&&(t.disabled=!h.plainToken),n&&(n.disabled=!(f&&f.has_token)),s&&(s.textContent=f&&f.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),r&&(r.textContent=f?N(f.created_at):"\u2014"),d&&(d.textContent=f?$(f.rotated_at):"\u2014"),e)){let a=h.plainToken?h.plainToken:f&&f.prefix?f.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";e.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${a}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function b(){let f=h.usage24h.map(r=>Number(r)||0),c=f.reduce((r,d)=>r+d,0),o=f.length?Math.max(...f):0,t=document.querySelector('[data-ft-stat="hits"]'),s=document.querySelector('[data-ft-stat="peak"]'),n=document.querySelector("[data-ft-peak-meta]");t&&(t.textContent=c.toLocaleString()),s&&(s.textContent=o.toLocaleString()),n&&(n.textContent=ServerI18n.t("firetokenPeakMeta",{peak:o.toLocaleString()}))}function L(){let f=document.getElementById("adminFtChart24h");if(!f)return;let c=h.usage24h.map(n=>Number(n)||0);if(!c.length){f.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let o=Math.max(...c),t=12e3,s=o>0?Math.min(100,t/Math.max(o,t)*100):100;f.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((n,r)=>{let d=o>0?Math.max(2,n/o*100):2;return`<div class="bar ${o>0&&n===o?"is-peak":""}" style="height:${d}%" title="${r.toString().padStart(2,"0")}:00 \u2014 ${n}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(n=>`<span>${String(n).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function H(){let f=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!f)return;let o=h.ips||[];if(c&&(c.textContent=o.length?`${o.length} IP`:"\u2014"),!o.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let t=o[0]?.ip;f.innerHTML=o.map((s,n)=>{let r=n===0,d=s.source==="web"&&(s.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${r?"is-top":""}">
          <span class="ip">${k(s.ip||"?")}</span>
          ${r?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${d?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${k(s.source||"\u2014")}</span>
          <span class="cnt">${s.count||0} hits</span>
          <span class="when">${$(s.last_seen)}</span>
        </div>`}).join("")}function B(){let f=document.getElementById("adminFtAudit");if(!f)return;let c=h.audit||[];if(!c.length){f.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let o={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},t={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};f.innerHTML=c.map(s=>{let n=t[s.kind]||"is-info",r=o[s.kind]||s.kind,d=s.meta||{},e=d.prefix?` \xB7 prefix=${k(d.prefix)}`:d.enabled!=null?` \xB7 enabled=${d.enabled}`:"";return`
        <div class="admin-ft-audit-row ${n}">
          <span class="ts">${N(s.ts)}</span>
          <span class="kind">${k(r)}</span>
          <span class="detail">${e}</span>
        </div>`}).join("")}function P(){let f=document.getElementById("settings-grid");if(!f||document.getElementById(y))return;f.insertAdjacentHTML("beforeend",A());let c=document.getElementById(y);c&&c.addEventListener("click",o=>{let t=o.target.closest("[data-ft-action]");if(!t)return;let s=t.dataset.ftAction;s==="regen"?M():s==="revoke"?F():s==="copy"&&h.plainToken&&(S(h.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),h.stopPoll||(h.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:U}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&P()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&P()})})()});var $t=ye(()=>{(function(){"use strict";let y="sec-about-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(P){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[P]})},g="Danmu Fire",h="https://github.com/guan4tou2/danmu-desktop",A=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],U=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],C="danmu.about.lastUpdateCheck",_={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
            ${A.slice(0,4).map(B=>`
              <div class="admin-about-cl-entry" data-about-changelog-item>
                <div class="admin-about-cl-head">
                  <span class="ver">v${k(B.v)}</span>
                  ${B.tag==="current"?'<span class="cur">'+ServerI18n.t("aboutCurrentVersion")+"</span>":""}
                  <span class="date">${k(B.d)}</span>
                </div>
                <div class="admin-about-cl-notes">
                  ${B.notes.slice(0,3).map(P=>`
                    <div class="admin-about-cl-row">
                      <span class="tag tag-${k(P.t)}">${k(P.t.toUpperCase())}</span>
                      <span class="msg">${k(P.l)}</span>
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
      </div>`}function M(B){if(!B||B<0)return"\u2014";let P=Math.floor(B/86400),f=Math.floor(B%86400/3600),c=Math.floor(B%3600/60);return P>0?`${P}d ${f}h`:f>0?`${f}h ${c}m`:`${c}m`}function F(){let B=document.querySelector("[data-about-tag]"),P=document.querySelector("[data-about-build]"),f=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),o=document.querySelector("[data-about-checked]"),t=document.querySelector("[data-about-env]"),s=document.querySelector("[data-about-ws-path]");if(B&&(B.textContent=`v${_.appVersion}`),P){let n=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";P.textContent=`BUILD \xB7 ${n} \xB7 stable channel`,t&&(t.textContent=n)}if(f){let n=_.serverStartedAt?_.serverTime-_.serverStartedAt:0;f.textContent=M(n)}if(c&&(_.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):_.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:_.latestVersion||""}):c.textContent="\u2014",c.style.color=_.isLatest===!0?"var(--hud-lime)":_.isLatest===!1?"var(--hud-amber)":""),o&&(o.textContent=_.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:S(_.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),s){let n=window.DANMU_CONFIG||{};s.textContent=n.wsPath||"/ws"}}function S(B){let P=Number(B)||0;if(!P)return"\u2014";let f=String(P).length>12?P:P*1e3,c=(Date.now()-f)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function $(B,P){let f=s=>String(s||"").replace(/^v/i,"").split("-")[0].split(".").map(function(n){return parseInt(n,10)||0}),c=f(B),o=f(P),t=Math.max(c.length,o.length);for(let s=0;s<t;s++){let n=c[s]||0,r=o[s]||0;if(n>r)return!0;if(n<r)return!1}return!1}async function N({silent:B}={}){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let P=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!P.ok)throw new Error("HTTP "+P.status);let c=((await P.json()).tag_name||"").replace(/^v/i,"");_.latestVersion=c,_.lastCheckedAt=Date.now(),_.isLatest=!$(c,_.appVersion);try{localStorage.setItem(C,JSON.stringify({ts:_.lastCheckedAt,latest:c,isLatest:_.isLatest}))}catch{}F(),B||window.showToast&&window.showToast(_.isLatest?ServerI18n.t("aboutToastLatest",{v:_.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(P){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:P.message||""}),!1)}}function w(){try{let B=localStorage.getItem(C);if(!B)return;let P=JSON.parse(B);_.latestVersion=P.latest,_.lastCheckedAt=Number(P.ts)||0,_.isLatest=!!P.isLatest}catch{}}async function b(){try{let B=await fetch("/admin/metrics",{credentials:"same-origin"});if(!B.ok)return;let P=await B.json();_.serverStartedAt=Number(P.server_started_at)||0,_.serverTime=Number(P.server_time)||Date.now()/1e3,F()}catch{}}function L(){let B=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",P=_.serverStartedAt?_.serverTime-_.serverStartedAt:0,f=(navigator.userAgent||"").slice(0,200),c=[`${g} v${_.appVersion}`,`Channel: ${B}`,`Uptime: ${M(P)}`,`User-Agent: ${f}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",m()),_.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",w(),F();let P=document.getElementById(y);P&&P.addEventListener("click",function(f){let c=f.target.closest("[data-about-action]");if(!c)return;let o=c.dataset.aboutAction;o==="copy"?L():o==="check-update"?N({silent:!1}):o==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():o==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&H()})})()});var xt=ye(()=>{(function(){"use strict";let y="admin-setup-wizard-root",k="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},h=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],A=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function U(e){return e?e.label?e.label:e.labelKey?ServerI18n.t(e.labelKey):e.name||e.id||"\u2014":"\u2014"}function C(e){return e?e.descriptionKey?ServerI18n.t(e.descriptionKey):e.description||"":""}let _={open:!1,step:0,themes:A.slice(),activeTheme:A[0].name,selectedTheme:A[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){_.publicUrl=window.location.origin+"/"}function M(){let e=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";e==="setup"&&!_.open?F():e!=="setup"&&_.open&&S({silent:!0})}function F(){_.open=!0,_.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",$()),c()),t(),b(),N()}function S(e){let a=e&&e.silent;_.open=!1,document.body.dataset.setupWizardOpen="";let v=document.getElementById(y);if(v&&v.remove(),!a&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function $(){return`
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
            ${h.map(function(e,a){return`
                <div class="admin-setup-step" data-step-index="${a}">
                  <span class="bullet">${a+1}</span>
                  <span class="lbl">${g(ServerI18n.t(e.labelKey))}</span>
                </div>
                ${a<h.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function N(){let e=document.getElementById(y);if(!e)return;e.querySelectorAll(".admin-setup-step").forEach(function(x,I){x.classList.toggle("is-done",I<_.step),x.classList.toggle("is-active",I===_.step)}),e.querySelectorAll(".admin-setup-step-sep").forEach(function(x,I){x.classList.toggle("is-done",I<_.step)});let a=e.querySelector("[data-setup-meta]");a&&(a.textContent=ServerI18n.t("setupWizardStepMeta",{current:_.step+1,total:h.length}));let v=e.querySelector('[data-setup-action="prev"]');v&&(v.disabled=_.step===0);let i=e.querySelector('[data-setup-action="next"]');if(i){let x=h[_.step].id;i.textContent=ServerI18n.t("setupWizardNext")}let l=e.querySelector("[data-setup-foot]");l&&(l.hidden=h[_.step].id==="done");let u=e.querySelector("[data-setup-content]");if(!u)return;let p=h[_.step].id;p==="server"?u.innerHTML=w():p==="moderation"?u.innerHTML=L():p==="theme"?u.innerHTML=P():u.innerHTML=f(),o(p)}function w(){let e=_.readiness,a=e?Number(e.overlay_count)||0:null,v=a!==null&&a>0,l=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:_.publicUrl},{ok:v,unknown:a===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:v?ServerI18n.t("setupWizardReadyDisplayOk",{n:a}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(_.activeTheme||_.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:U(_.themes.filter(function(u){return(u.name||u.id)===(_.selectedTheme||_.activeTheme)})[0]||_.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let p=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",x=u.unknown?"?":u.ok?"\u2713":"!",I='<span class="admin-setup-ready-title">'+g(u.title)+'</span><span class="admin-setup-ready-value">'+g(u.value||"")+"</span>",E=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+p+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+x+"</span>"+I+E+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${l}</div>
      </div>`}async function b(){try{let e=await fetch("/overlay_status",{credentials:"same-origin"});if(!e.ok)throw new Error("HTTP "+e.status);let a=await e.json();_.readiness={overlay_count:Number(a.overlay_count)||0,mode:a.mode||""}}catch{_.readiness=null}_.open&&h[_.step].id==="server"&&N()}function L(){let e=_.moderationRules.map(function(a){return`
        <a class="admin-setup-mod-row" href="#/${a.route}" data-setup-goto="#/${a.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${g(ServerI18n.t(a.labelKey))}</span>
            <span class="admin-setup-mod-desc">${g(ServerI18n.t(a.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${g(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${e}</div>
      </div>`}let H=["default","neon","retro","cinema"];function B(){let e={};return(_.themes||[]).forEach(function(a){e[a.name||a.id]=a}),H.map(function(a){let v=A.filter(function(l){return l.name===a})[0],i=e[a];return v?{name:a,label:i&&i.label,labelKey:v.labelKey,descriptionKey:v.descriptionKey,colors:v.colors}:i}).filter(Boolean)}function P(){let e=B();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${e.map(function(a){let v=a.name||a.id||"",i=(_.selectedTheme||_.activeTheme)===v,l=(a.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${i?" is-selected":""}" data-setup-theme="${g(v)}">
                ${i?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${l.map(function(u,p){let x=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(u)};font-size:${10+p*2}px;text-shadow:0 0 6px ${g(u)}66;">${x[p]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(U(a))}</div>
                <div class="admin-setup-theme-sub">${g(C(a))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function f(){let e=(function(){for(let a=0;a<_.themes.length;a+=1){let v=_.themes[a];if((v.name||v.id)===(_.selectedTheme||_.activeTheme))return U(v)}return _.selectedTheme||_.activeTheme||"\u2014"})();return`
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">\u2713</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${g(_.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${g(e)}</span></div>
        </div>
        <div class="admin-setup-done-next">
          <a class="admin-setup-done-link" href="#/moderation" data-setup-goto="#/moderation">${g(ServerI18n.t("setupWizardStepModeration"))}<span aria-hidden="true">\u203A</span></a>
          <a class="admin-setup-done-link" href="#/overlay" data-setup-goto="#/overlay">${g(ServerI18n.t("adminRouteTitle_overlay"))}<span aria-hidden="true">\u203A</span></a>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`}function c(){let e=document.getElementById(y);e&&e.addEventListener("click",function(a){if(a.target===e){S();return}let v=a.target.closest("[data-setup-action]");if(v){if(v.dataset.setupAction==="close"){S();return}if(v.dataset.setupAction==="prev"&&_.step>0){_.step-=1,N();return}v.dataset.setupAction==="next"&&n()}})}function o(e){let a=document.getElementById(y);if(a){if(e==="moderation"||e==="done"||e==="server"){if(a.querySelectorAll("[data-setup-goto]").forEach(function(v){v.addEventListener("click",function(){S();let i=v.dataset.setupGoto;i&&(window.location.hash=i)})}),e==="done"){let v=a.querySelector("[data-setup-complete-cta]");v&&v.addEventListener("click",r)}return}if(e==="theme"){a.querySelectorAll("[data-setup-theme]").forEach(function(v){v.addEventListener("click",function(){_.selectedTheme=v.dataset.setupTheme||_.selectedTheme,N()})});return}}}async function t(){try{let e=await fetch("/admin/themes",{credentials:"same-origin"});if(!e.ok)return;let a=await e.json(),v=Array.isArray(a.themes)?a.themes:[];if(!v.length)return;_.themes=v.map(function(i){return{name:i.name||i.id||"",label:i.label||i.display_name||i.name||"",description:i.description||"",colors:i.preview_colors||i.colors||i.palette||A[0].colors}}),_.activeTheme=a.active||_.themes[0]&&_.themes[0].name||_.activeTheme,_.selectedTheme||(_.selectedTheme=_.activeTheme),_.open&&h[_.step].id==="theme"&&N()}catch{}}async function s(){if(!_.selectedTheme||_.selectedTheme===_.activeTheme)return!0;try{let e=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_.selectedTheme})});if(!e.ok)throw new Error("HTTP "+e.status);return _.activeTheme=_.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function n(){if(!(h[_.step].id==="theme"&&!await s())){if(_.step<h.length-1){_.step+=1,N();return}r()}}function r(){try{localStorage.setItem(k,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),S()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}F()},close:function(){S()},isCompleted:function(){try{return!!localStorage.getItem(k)}catch{return!1}},__setCapabilityForTest:function(){}};function d(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&d()})})()});var Lt=ye(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})},g={poll:null,refreshTimer:0};function h(){return`
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
      </div>`}function A(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let L=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});L.classList.add("lg:col-span-2"),L.dataset.emptyKind="poll-deepdive",b.appendChild(L)}let U=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function C(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function _(b){if(!b||b.length<2)return"";let L=Math.max.apply(null,b.map(function(c){return c.n}).concat([1])),H=100,B=32,P=H/(b.length-1),f=b.map(function(c,o){let t=(o*P).toFixed(2),s=(B-c.n/L*(B-2)-1).toFixed(2);return t+","+s});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+B+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+f.join(" ")+'" /></svg>'}function m(b){let L=b.state||(b.active?"active":"ended"),H=b.question||"\u2014",B=Array.isArray(b.options)?b.options:[],P=function(v){return Number(v.votes!=null?v.votes:v.count)||0},f=B.reduce(function(v,i){return v+P(i)},0),c=L==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:C(b.ended_at)}),o=(function(){let v=Number(b.started_at)||0;if(!v)return"\u2014";let i=L==="active"?Date.now()/1e3:Number(b.ended_at)||v,l=Math.max(0,Math.floor(i-v));return Math.floor(l/60)+":"+String(l%60).padStart(2,"0")})(),t=Number(window._lastOverlayCount)||0,s=t>0?Math.round(f/t*100)+"%":"\u2014",n=t>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:f,audience:t}):ServerI18n.t("pollDeepdiveParticipationUnknown"),r=(function(){let v=Array.isArray(b.questions)?b.questions:[],i=0;for(let l of v)i+=Number(l.duplicate_attempts)||0;return v.length||(i=Number(b.duplicate_attempts)||0),i})(),d=B.map(function(v,i){let l=P(v),u=f>0?l/f*100:0,p=U[i%U.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${k(v.label||v.text||v.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:i+1}))}</span>
            <span class="votes">${l} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),e=Array.isArray(b.vote_timeline)?b.vote_timeline:[],a=e.length>=2?_(e):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
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
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${s}</div><div class="sub">${k(n)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${k(o)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${r}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${B.length?d:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${a}</div>
        </article>
      </div>`}function M(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!g.poll||!g.poll.poll_id){A(b);return}b.innerHTML=m(g.poll)}}async function F(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let L=await b.json();g.poll=L,M()}catch{}}function S(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],L=g.poll.options.reduce(function(c,o){return c+(Number(o.votes!=null?o.votes:o.count)||0)},0);g.poll.options.forEach(function(c,o){let t=Number(c.votes!=null?c.votes:c.count)||0,s=L>0?(t/L*100).toFixed(2):"0.00";b.push([c.label||"option_"+(o+1),t,s])});let H=b.map(function(c){return c.map(function(o){let t=String(o);return t.includes(",")||t.includes('"')?'"'+t.replace(/"/g,'""')+'"':t}).join(",")}).join(`
`),B=new Blob([H],{type:"text/csv;charset=utf-8"}),P=URL.createObjectURL(B),f=document.createElement("a");f.href=P,f.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(P)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function $(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function N(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(F(),g.refreshTimer||(g.refreshTimer=setInterval(F,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function w(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",h());let L=document.getElementById(y);L&&L.addEventListener("click",function(H){let B=H.target.closest("[data-pdd-action]");B&&(B.dataset.pddAction==="export-csv"?S():B.dataset.pddAction==="push"&&$())}),F(),N(),window.addEventListener("hashchange",N)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&w()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&w()})})()});var At=ye(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})},h={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},A=null;function U(s){let n=s.detail&&s.detail.entry;n&&(h.open||(A=document.activeElement),h.entry=n,C(),n.data&&n.data.fingerprint&&F(n.data.fingerprint),S(n))}function C(){h.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",$()),N()),w();let s=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(s)try{s.focus({preventScroll:!0})}catch{}}function _(){h.open=!1,document.body.dataset.messageDrawerOpen="";let s=document.getElementById(y);if(s&&s.remove(),A&&typeof A.focus=="function"&&document.contains(A))try{A.focus({preventScroll:!0})}catch{}A=null}function m(s){if(!h.open)return;if(s.key==="Escape"){_();return}let n=document.activeElement,r=n?(n.tagName||"").toLowerCase():"";if(!(n&&(n.isContentEditable||r==="input"||r==="textarea"||r==="select"))){if(s.key==="ArrowLeft"||s.key==="k"){M(-1),s.preventDefault();return}if(s.key==="ArrowRight"||s.key==="j"){M(1),s.preventDefault();return}}}function M(s){if(!h.entry)return;let n=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(n=window.AdminLiveFeed.getEntries()),!n.length)return;let r=n.findIndex(function(a){return a.id===h.entry.id});if(r<0)return;let d=r+-s;if(d<0||d>=n.length){window.showToast&&window.showToast(s<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let e=n[d];h.entry=e,h.fingerprintRecord=null,S(e),w(),e.data&&e.data.fingerprint&&F(e.data.fingerprint)}async function F(s){try{let n=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!n.ok)return;let r=await n.json(),e=(Array.isArray(r.records)?r.records:[]).find(function(a){return(a.fingerprint||"").startsWith(s.slice(0,8))});h.fingerprintRecord=e||null,w()}catch{}}function S(s){let n=s.data&&s.data.fingerprint;if(!n){h.sameFpEntries=[];return}let r=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(r=window.AdminLiveFeed.getEntries()),h.sameFpEntries=r.filter(function(d){let e=d.data&&d.data.fingerprint||d.fingerprint||"";return e&&e.startsWith(n.slice(0,8))}).slice(0,8)}function $(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function N(){let s=document.getElementById(y);s&&s.addEventListener("click",function(n){let r=n.target.closest("[data-msgd-action]");if(!r)return;n.stopPropagation();let d=r.dataset.msgdAction;d==="close"?_():d==="ban-fp"?P():d==="ban-fp-quick"?B():d==="recall-msg"?c():d==="blacklist-kw"?o():d==="reply"?t():d==="prev"?M(-1):d==="next"&&M(1)})}function w(){let s=document.getElementById(y);if(!s)return;let n=s.querySelector("[data-msgd-body]");n&&(n.innerHTML=b())}function b(){let s=h.entry;if(!s)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let n=s.data||{},r=n.fingerprint||"\u2014",d=r==="\u2014"?"\u2014":r.slice(0,8),e=r==="\u2014"?"\u2014":r.slice(0,12),a=s.ts?L(s.ts):"\u2014",v=n.nickname||ServerI18n.t("msgDrawerAnonymous"),i=h.fingerprintRecord||{},l=Number(i.message_count)||0,u=Number(i.violation_count)||0,p=h.sameFpEntries||[],x=p.length?Math.round(p.reduce((E,D)=>E+((D.data||D).text||"").length,0)/p.length):(n.text||"").length,I=0;for(let E=0;E<r.length;E++)I=I*31+r.charCodeAt(E)&65535;return I=I%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${I})">${g((v||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(v)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(e)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(a)}</span>
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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${l||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${x}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
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
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${r==="\u2014"?"disabled":""}>${g(ServerI18n.t("msgdBanFpBtn"))}</button>
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
    `}function L(s){try{let n=new Date(s),r=String(n.getHours()).padStart(2,"0"),d=String(n.getMinutes()).padStart(2,"0"),e=String(n.getSeconds()).padStart(2,"0");return r+":"+d+":"+e}catch{return"\u2014"}}function H(s){let n;if(typeof s=="number")n=s*1e3;else if(typeof s=="string")n=new Date(s).getTime();else return"\u2014";if(!n)return"\u2014";let r=(Date.now()-n)/1e3;return r<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(r)}):r<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(r/60)}):r<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(r/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(r/86400)})}async function B(s,n,r){let d=h.entry&&h.entry.data&&h.entry.data.fingerprint;if(!d)return;let e=parseInt(n||0,10)||0,a=e>0?await window.AdminModeration.banFingerprint(d,e,s):await window.AdminModeration.callBlock("fingerprint",d,s);if(!a.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:a.error||""}),!1);return}let v=r||(e>0?ServerI18n.t("msgDrawerSecondsLabel",{n:e}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:d.slice(0,8),label:v}),!0),_()}async function P(){let s=h.entry&&h.entry.data||{},n=s.fingerprint||"\u2014";if(n==="\u2014")return;let r=n.slice(0,12),d=s.nickname||ServerI18n.t("msgDrawerAnonymous"),e=0;for(let I=0;I<n.length;I++)e=e*31+n.charCodeAt(I)&65535;e=e%360;let a=document.createElement("div");a.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${e})">${g((d||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(d)}</div>
          <div class="fp">fp:${g(r)}</div>
          <div class="ip">IP \xB7 ${g(s.ip||"\u2014")} \xB7 ${g(s.user_agent||s.ua||"\u2014")}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let v=I=>{a.querySelectorAll(".admin-bancfm-dchip").forEach(E=>E.classList.remove("is-active")),I.classList.add("is-active")};if(a.addEventListener("click",I=>{let E=I.target.closest("[data-ban-duration]");E&&v(E)}),a.addEventListener("keydown",I=>{if(I.key!=="Enter"&&I.key!==" ")return;let E=I.target.closest("[data-ban-duration]");E&&(I.preventDefault(),v(E))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:a,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let l=(a.querySelector("[data-ban-reason]")||{}).value||"",u=a.querySelector(".admin-bancfm-dchip.is-active"),p=u&&parseInt(u.dataset.banDuration||"0",10)||0,x=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return B(l.trim(),p,x)}function f(){}async function c(){let s=h.entry,n=s&&s.data&&s.data.message_id;if(!n)return;if(!(await window.AdminModeration.recall(n)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),_()}async function o(){let s=h.entry&&h.entry.data&&h.entry.data.text;if(!s)return;await window.AdminModeration.blockKeyword(s)&&_()}async function t(){let s=document.querySelector("[data-msgd-reply]"),n=s?s.value.trim():"";if(n)try{let r=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})});if(!r.ok)throw new Error("HTTP "+r.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),s&&(s.value="")}catch(r){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:r.message||""}),!1)}}window.AdminMessageDrawer={open:function(s){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:s}}))},close:_},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",U),document.addEventListener("keydown",m))})})()});var Ct=ye(()=>{(function(){"use strict";let y="danmu.notifications.read",k="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},h={items:[],refreshTimer:0};function A(d){try{let e=localStorage.getItem(d);if(!e)return new Set;let a=JSON.parse(e);return new Set(Array.isArray(a)?a:[])}catch{return new Set}}function U(d,e){try{localStorage.setItem(d,JSON.stringify(Array.from(e)))}catch{}}function C(d){let e=A(y);e.add(d),U(y,e)}async function _(){let d=[m().catch(function(){return[]}),M().catch(function(){return[]}),F().catch(function(){return[]}),S().catch(function(){return[]})],a=(await Promise.all(d)).flat();a.sort(function(v,i){return(i.ts||0)-(v.ts||0)}),h.items=a,L(),P()&&H()}async function m(){let d=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!d.ok)return[];let e=await d.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,i){let l=(Number(v.ts)||0)*1e3,u="tok-"+(v.ts||i)+"-"+(v.kind||"x"),p=v.kind||"?",x="info",I=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")x="info",I=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")x="warn",I=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let E=v.meta&&v.meta.enabled;x=E?"good":"warn",I=ServerI18n.t("notifTitleFireTokenToggled",{state:E?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:x,src:"Fire Token",ts:l,title:I,desc:ServerI18n.t("notifDescEventType",{kind:p})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function M(){let d=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!d.ok)return[];let e=await d.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,i){let l=(Number(v.ts)||0)*1e3,u="flt-"+(v.ts||i)+"-"+(v.action||"x")+"-"+i,p=v.action||"match";return{id:u,sev:p==="drop"?"warn":"info",src:"Moderation",ts:l,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:v.rule_id||"?",text:(v.text||"").slice(0,60)}),raw:v}})}async function F(){let d=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!d.ok)return[];let e=await d.json();return(Array.isArray(e.events)?e.events:[]).map(function(v,i){let l=(Number(v.ts)||0)*1e3,u=String(v.kind||"?");return{id:"wh-"+(v.ts||i)+"-"+u+"-"+i,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:l,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:v.actor||"system"})+(v.meta?" \xB7 "+JSON.stringify(v.meta):""),raw:v}})}async function S(){let d=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!d.ok)return[];let e=await d.json(),a=Array.isArray(e.events)?e.events:[],v=new Set(["auth","broadcast","system","session","sessions"]);return a.filter(function(i){return v.has(String(i.source||""))}).map(function(i,l){let u=(Number(i.ts)||0)*1e3,p=String(i.kind||"?");return{id:"sys-"+(i.ts||l)+"-"+(i.source||"x")+"-"+p+"-"+l,sev:p==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:i.source||"?",actor:i.actor||"system"}),raw:i}})}let $="admin-notif-panel",N={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function w(d){let e=N[d];return e?ServerI18n.t(e.key):d}function b(){let d=A(y),e=A(k);return h.items.filter(a=>!d.has(a.id)&&!e.has(a.id))}function L(){let d=document.querySelector("[data-notif-badge]");if(!d)return;let e=b().length;d.textContent=e>99?"99+":String(e),d.hidden=e===0}function H(){let d=document.getElementById($);if(!d)return;let e=b().slice(0,20),a=e.length?e.map(v=>{let i=N[v.src];return'<li class="admin-notif__item" data-sev="'+g(v.sev)+'"><div class="admin-notif__text">'+g(v.title)+'</div><div class="admin-notif__meta">'+g(w(v.src))+" \xB7 "+g(B(v.ts))+"</div>"+(i?'<button type="button" class="admin-notif__action" data-notif-go="'+g(i.hash)+'" data-notif-id="'+g(v.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";d.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+a+"</ul>"}function B(d){if(!d)return"\u2014";let e=(Date.now()-d)/1e3;return e<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(e)}):e<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(e/60)}):e<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(e/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(e/86400)})}function P(){let d=document.getElementById($);return!!d&&!d.hidden}function f(){let d=document.getElementById($);d&&(H(),d.hidden=!1,h.refreshTimer||(h.refreshTimer=setInterval(_,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&f()}function o(){let d=document.getElementById($);d&&(d.hidden=!0),h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function t(){P()?o():f()}function s(){let d=document.querySelector(".admin-dash-topbar-actions");if(!d||document.getElementById("admin-notif-bell"))return;let e=document.createElement("button");if(e.id="admin-notif-bell",e.type="button",e.className="admin-dash-search is-icon-only admin-notif-bell",e.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),e.title=ServerI18n.t("adminRouteTitle_notifications"),e.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',d.insertBefore(e,d.firstChild),!document.getElementById($)){let a=document.createElement("div");a.id=$,a.className="admin-notif",a.setAttribute("role","dialog"),a.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),a.hidden=!0,document.body.appendChild(a)}L(),c()}function n(){document.addEventListener("click",d=>{if(d.target.closest("#admin-notif-bell")){d.preventDefault(),t();return}let e=d.target.closest("[data-notif-go]");if(e){C(e.dataset.notifId),o(),location.hash=e.dataset.notifGo,L();return}if(d.target.closest("[data-notif-readall]")){b().forEach(a=>C(a.id)),H(),L();return}P()&&!d.target.closest("#"+$)&&o()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&P()&&o()}),window.addEventListener("hashchange",c),c()}function r(){s(),_()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(s).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),n(),r()})})()});var Bt=ye(()=>{(function(){"use strict";let y="sec-audit-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},h={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function A(){return`
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
      </div>`}function U(t){if(!t)return"\u2014";try{let s=new Date(Number(t)*1e3),n=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0"),d=String(s.getSeconds()).padStart(2,"0");return`${n}:${r}:${d}`}catch{return"\u2014"}}function C(t){let s=String(t.action||t.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(s)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(s)?"warn":"info"}function _(t){return t==="danger"?"var(--hud-crimson, #f87171)":t==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(t){return h.filterActor==="all"||String(t.actor||"").toLowerCase()===h.filterActor}function M(t){return h.filterSeverity==="all"||C(t)===h.filterSeverity}function F(){return h.events.filter(function(t){return m(t)&&M(t)})}function S(t){let s=t&&t.meta&&typeof t.meta=="object"?t.meta:{};return s.target||s.keyword||s.fp||s.fingerprint||s.name||s.mode||s.session||s.hook_id||t.target||""}function $(t,s){let n=t!=null,r=s!=null;if(!n&&!r)return"";let d=n?k(JSON.stringify(t)):"",e=r?k(JSON.stringify(s)):"";return n?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${d}</span> \u2192 <span class="admin-audit-diff-a">${e}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${e}</span></span>`}function N(t){let s=t&&t.meta&&typeof t.meta=="object"?t.meta:{},n=[];t.detail&&n.push(`<span>${k(String(t.detail))}</span>`);let r=$(t.before,t.after);r&&n.push(r);let d=Object.assign({},s);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(a){delete d[a]}),Object.keys(d).length&&n.push(`<code class="admin-ui-code admin-audit-meta-extra">${k(JSON.stringify(d))}</code>`),!n.length){let a=g[t.source]&&g[t.source].label||t.source||"system";n.push(`<span>${k(String(a))}</span>`)}return n.join(" ")}function w(t){return t==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":t==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let t=document.querySelector("[data-audit-rows]");if(!t)return;let s=F();if(!s.length){t.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}t.innerHTML=s.map(function(n){let r=C(n),d=_(r),e=String(n.actor||"system"),a=S(n);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${r}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${k(U(n.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${d};box-shadow:0 0 6px ${d}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${w(e)}">${k(e)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${k(String(n.action||n.kind||"\u2014"))}</span>
              ${a?`<span class="admin-ui-target admin-audit-target">\u2192 ${k(String(a))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${N(n)}</div>
          </div>
        </div>`}).join("")}function L(){let t=document.querySelector("[data-audit-summary]");if(!t)return;let s=F().length,n=h.filterActor==="all"?ServerI18n.t("auditAllRoles"):h.filterActor,r=h.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):h.filterSeverity.toUpperCase();t.textContent=ServerI18n.t("auditSummaryLine",{n:s,actor:n,sev:r})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditActorFilter===h.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(t){t.classList.toggle("is-active",t.dataset.auditSeverityFilter===h.filterSeverity)})}async function B(){try{let t=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!t.ok)return;let s=await t.json(),n=Array.isArray(s.events)?s.events.slice():[];n.sort(function(r,d){return Number(d.ts||0)-Number(r.ts||0)}),h.events=n,H(),b(),L()}catch{}}function P(){let t=F();if(!t.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let s=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(s),r=document.createElement("a");r.href=n,r.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(function(){URL.revokeObjectURL(n)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:t.length}),!0)}function f(){let t=document.getElementById(y);t&&t.addEventListener("click",function(s){let n=s.target.closest("[data-audit-actor-filter]");if(n){h.filterActor=n.dataset.auditActorFilter||"all",H(),b(),L();return}let r=s.target.closest("[data-audit-severity-filter]");if(r){let d=r.dataset.auditSeverityFilter||"all";h.filterSeverity=h.filterSeverity===d?"all":d,H(),b(),L();return}if(s.target.closest("[data-audit-export]")){P();return}s.target.closest("[data-audit-refresh]")&&B()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(B(),h.refreshTimer||(h.refreshTimer=setInterval(B,3e4))):h.refreshTimer&&(clearInterval(h.refreshTimer),h.refreshTimer=0)}function o(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",A()),f(),B(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&o()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&o()})})()});var Ft=ye(()=>{(function(){"use strict";let y="sec-audience-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(l){return String(l).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],h=20,A={records:[],filter:"all",shown:h,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function U(l){if(!l)return g[0];let u=0;for(let p=0;p<l.length;p++)u=u*31+l.charCodeAt(p)>>>0;return g[u%g.length]}function C(l){if(!l)return"\u2014";let u=typeof l=="number"?l*1e3:new Date(l).getTime();if(!u)return"\u2014";let p=Math.max(0,(Date.now()-u)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function _(l){return l==="blocked"||l==="high"?"is-danger":l==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function M(){let l=A.search.trim().toLowerCase(),u=A.records.slice();return l&&(u=u.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(l)!==-1||String(p.hash||"").toLowerCase().indexOf(l)!==-1})),u.sort(function(p,x){return A.sort==="last_seen"?(Number(x.last_seen)||0)-(Number(p.last_seen)||0):(Number(x.msgs)||0)-(Number(p.msgs)||0)}),A.filter==="all"?u:A.filter==="flagged"?u.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):A.filter==="extension"?u.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):u}function F(){let l=document.querySelector("[data-aud-stats]");if(!l)return;let u=A.records,p=u.length,x=u.filter(function(O){return O.state==="flagged"}).length,I=u.filter(function(O){return O.state==="blocked"}).length,E=u.reduce(function(O,W){return O+(Number(W.msgs)||0)},0),D=u.filter(function(O){let W=O.last_seen;if(!W)return!1;let T=typeof W=="number"?W*1e3:new Date(W).getTime();return(Date.now()-T)/1e3<300}).length;l.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${D}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${E}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${x}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${I}</div></div>`}function S(){let l=document.querySelector("[data-aud-filters]");if(!l)return;let u=A.records.length,p=A.records.filter(function(x){return x.state==="flagged"||x.state==="blocked"}).length;l.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${A.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let $="__anon__";function N(l){let u=(l.nickname||"").trim();return!u||u==="\u533F\u540D"}function w(l){let u=l.hash||l.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function b(){let l=[],u=[];return M().forEach(function(p){N(p)?u.push(p):l.push(p)}),u.length&&l.push({_anonGroup:!0,_count:u.length,fingerprint:$,msgs:u.reduce(function(p,x){return p+(Number(x.msgs)||0)},0),blocked:u.reduce(function(p,x){return p+(Number(x.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(p){return p.last_seen||0})),state:u.some(function(p){return p.state==="blocked"})?"blocked":"active"}),l}function L(){let l=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!l)return;let p=b(),x=Math.min(p.length,A.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:x,total:p.length})),p.length===0){l.innerHTML="";let O=window.AdminEmpty.render("audience");O.dataset.emptyKind="audience",l.appendChild(O);return}let I=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,E=p.slice(0,x).map(function(O){let W=O.fingerprint||"\u2014",T=O.state==="blocked",R=O._anonGroup?ServerI18n.t("audienceAnonymous"):(O.nickname||"").trim(),j=O._anonGroup?"?":R.slice(0,1),J=U(W);return`
        <div class="admin-aud-row${A.selectedFp===W?" is-selected":""}" data-aud-row data-aud-fp="${k(W)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${k(j)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${k(R)}</span>
            ${O._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:O._count})}</span>`:""}
            ${T&&!O._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${O._anonGroup?"\u2014":k(w(O))}</span>
          <span class="col col-msgs">${Number(O.msgs)||0}</span>
          <span class="col col-blocked">${Number(O.blocked)||0}</span>
          <span class="col col-seen">${k(C(O.last_seen))}</span>
          <span class="col col-actions">
            ${O._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${k(W)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),D=p.length>x?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";l.innerHTML=I+E+D}function H(l){return l&&A.records.find(function(u){return u.fingerprint===l})||null}function B(l){if(!l)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],p=Number(l.msgs)||0,x=l.fingerprint||"";l.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),l.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),p>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let I=A.records.filter(function(W){return W.ip&&l.ip&&W.ip===l.ip}).length;I>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:I})),(x.indexOf("slido")===0||x.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(l.nickname==="\u533F\u540D"||!l.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let E="normal",D="var(--hud-lime)",O="NORMAL";return l.state==="blocked"?(E="blocked",D="var(--hud-crimson)",O="BLOCKED"):l.state==="flagged"||p>=25?(E="high",D="var(--hud-crimson)",O="HIGH RISK"):(p>=15||I>=3)&&(E="mid",D="var(--hud-amber)",O="MID"),{level:E,color:D,label:O,rules:u}}async function P(l){A.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){A.detailMessages=[];return}let p=await u.json(),x=Array.isArray(p.records)?p.records:[],I=Date.now()-300*1e3;A.detailMessages=x.filter(function(E){return(E.fingerprint||"")!==l?!1:(E.timestamp?new Date(E.timestamp).getTime():0)>=I}).slice(0,8)}catch{A.detailMessages=[]}finally{A.detailLoading=!1}}function f(){let l=document.querySelector("[data-aud-detail]");if(!l)return;let u=A.selectedFp;if(!u){l.hidden=!0,l.innerHTML="";return}let p=H(u);if(!p){A.selectedFp=null,l.hidden=!0;return}l.hidden=!1;let x=B(p);l.dataset.riskLevel=x.level;let I=U(u),E=!p.nickname||p.nickname==="\u533F\u540D",D=E?ServerI18n.t("audienceAnonymous"):p.nickname,O=E?"?":D.slice(0,1),W="fp:"+(u||"").slice(0,8),T=x.rules.length?x.rules.map(function(j){return"<li>"+k(j)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",R="";A.detailLoading?R='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":A.detailMessages.length===0?R='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":R=A.detailMessages.map(function(j){let J=j.muted?"MASKED":j.banned?"BLOCKED":"SHOWN",K=j.muted?"var(--hud-amber)":j.banned?"var(--hud-crimson)":"var(--hud-lime)",G=j.timestamp?new Date(j.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+k(G)+'</span><span class="m">'+k(j.text||"")+'</span><span class="s" style="color:'+K+'">'+J+"</span></div>"}).join(""),l.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+_(x.level)+'">'+k(x.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+I+'">'+k(O)+'</span><div><div class="nick">'+k(D)+'</div><div class="fp">'+k(W)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+x.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:x.rules.length})+"</div><ul>"+T+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+R+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+k(u)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(l){A.selectedFp=l,A.detailMessages=[],f(),P(l).then(f)}async function o(){try{let l=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!l.ok)return;let u=await l.json();A.records=Array.isArray(u.entries)?u.entries:[],A.serverStats=u&&u.stats||null,F(),S(),L(),A.selectedFp&&f()}catch{}}async function t(l,u,p){if(l)try{let x=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l,flagged:!!u,note:p||""})});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:l.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:l.slice(0,8)}),!0),o()}catch(x){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:x.message||""}),!1)}}async function s(l,u){if(!l||l==="\u2014")return;let p=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:l.slice(0,8)}),"")||"");if(p!==null)try{let x=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l,reason:p})});if(!x.ok)throw new Error("HTTP "+x.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:l.slice(0,8)}),!0),o()}catch(x){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:x.message||""}),!1)}}async function n(l){if(!(!l||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(l.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:l})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),o()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function r(l){if(!(!l||l==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:l,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:l.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function d(l){if(!(!l||l==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let p=await u.json(),I=(Array.isArray(p.rules)?p.rules:[]).filter(function(D){return D&&D.type==="fingerprint"&&D.pattern===l});if(I.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let E=0;for(let D of I)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D.rule_id||D.id})}).catch(function(){return{ok:!1}})).ok&&(E+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:E,fp:l.slice(0,8)}),!0),o()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function e(l){if(!(!l||l==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(l.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:l})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:l.slice(0,8)}),!0),o()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function a(){let l=document.getElementById(y);l&&(l.addEventListener("input",function(u){let p=u.target.closest("[data-aud-search]");p&&(A.search=p.value||"",A.shown=h,L())}),l.addEventListener("change",function(u){let p=u.target.closest("[data-aud-sort]");p&&(A.sort=p.value,L())}),l.addEventListener("click",function(u){let p=u.target.closest("[data-aud-filter]");if(p){A.filter=p.dataset.audFilter,A.shown=h,S(),L();return}let x=u.target.closest("[data-aud-action='ban']");if(x){u.stopPropagation(),e(x.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){o();return}if(u.target.closest("[data-aud-action='more']")){A.shown+=h,L();return}if(u.target.closest("[data-aud-action='close-detail']")){A.selectedFp=null,f();return}let O=u.target.closest("[data-aud-action='detail-ban']");if(O){e(O.dataset.audFp);return}let W=u.target.closest("[data-aud-action='detail-mask']");if(W){r(W.dataset.audFp);return}let T=u.target.closest("[data-aud-action='detail-safe']");if(T){d(T.dataset.audFp);return}let R=u.target.closest("[data-aud-action='flag']");if(R){u.stopPropagation(),t(R.dataset.audFp,R.dataset.audFlagged!=="true");return}let j=u.target.closest("[data-aud-action='kick']");if(j){u.stopPropagation(),s(j.dataset.audFp);return}let J=u.target.closest("[data-aud-action='unkick']");if(J){u.stopPropagation(),n(J.dataset.audFp);return}let K=u.target.closest("[data-aud-row]");if(!(K&&K.dataset.audFp===$)&&K&&!u.target.closest("button")){c(K.dataset.audFp);return}}))}function v(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(o(),A.refreshTimer||(A.refreshTimer=setInterval(o,15e3))):A.refreshTimer&&(clearInterval(A.refreshTimer),A.refreshTimer=0)}function i(){let l=document.getElementById("settings-grid");!l||document.getElementById(y)||(l.insertAdjacentHTML("beforeend",m()),a(),o(),v(),window.addEventListener("hashchange",v))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&i()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&i()})})()});var Dt=ye(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],k={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,h=0,A=0,U=null;function C(){if(U)return U;let S=document.createElement("div");return S.className="admin-konami-hud",S.setAttribute("aria-hidden","true"),S.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(S),U=S,S}function _(){if(h===0){U&&U.classList.remove("is-on");return}let S=C();S.classList.add("is-on");let $=S.querySelector(".admin-konami-hud-keys");$&&($.innerHTML=y.map((w,b)=>`<span class="admin-konami-hud-key ${b<h?"is-filled":""}">${k[w]}</span>`).join(""));let N=S.querySelector(".admin-konami-hud-progress");if(N){let w=Math.round(h/y.length*100);N.style.width=w+"%"}}function m(S){h=0,A&&(clearTimeout(A),A=0),S||_()}function M(){A&&clearTimeout(A),A=setTimeout(()=>m(),g)}async function F(){try{let S=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!S.ok)throw new Error("HTTP "+S.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(S){console.warn("[konami] trigger failed:",S&&S.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",S=>{let $=S.target;if($&&($.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable))return;let N=y[h];if(!(S.key===N||N==="b"&&S.key.toLowerCase()==="b"||N==="a"&&S.key.toLowerCase()==="a")){h=S.key===y[0]?1:0,_(),h>0?M():A&&(clearTimeout(A),A=0);return}if(h++,_(),h>=y.length){m(!0),F();return}M()}),window.AdminKonami={trigger:F}})()});var Mt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(r){return r==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:r==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:r==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let r=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,d=r?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${r?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${d}`:""}
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
    `}var h=null,A=[];function U(r,d){var e=document.getElementById("adminFontEmptyStateHost");if(!e)return;if((r||[]).some(i=>i.type==="uploaded")){e.innerHTML="";return}e.innerHTML="";var v=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:d?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var i=document.getElementById("adminFontFileInput");i&&i.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});v.dataset.emptyKind="fonts",e.appendChild(v)}function C(r,d){let e=r.weight||"\u2014",a=r.sizeLabel||"\u2014",v=r.foundry||(r.type==="system"?"System":r.type==="default"?"Google / Noto":"Uploaded"),i=r.format||"\u2014",l=r.status||r.type,u=`font-family: "${y(r.name)}", sans-serif;`,p=k(l),x=[];if(d){if(l!=="default"&&x.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(r.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),l!=="default"){let I=l==="enabled"||l==="system",E=I?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");x.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(r.name)}" data-enabled="${I?"true":"false"}">${E}</button>`)}r.type==="uploaded"&&(x.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(r.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),x.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(r.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(r.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(r.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+(x.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${x.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(v)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(e)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(a)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(i)}</span><div style="text-align:right">${p}</div></div>`}let _=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(_)return _;try{let r=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return r.ok?(_=(await r.json()).presets||{},_):{}}catch{return{}}}function F(r){return!r||!Number.isFinite(r)?"\u2014":r<1024?r+" B":r<1024*1024?(r/1024).toFixed(1)+" KB":(r/(1024*1024)).toFixed(2)+" MB"}async function S(r){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let d=await M();if(!Object.keys(d).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let e=new Set(["cjk_common","latin"]),a="",v=document.createElement("div");v.className="admin-font-subset-modal-body";let i=()=>{let p=Object.keys(d).map(I=>{let E=m[I]||{label:I,glyphs:"\u2014",estSize:"\u2014"},D=E.labelKey?ServerI18n.t(E.labelKey):E.label,O=e.has(I);return`
          <label class="admin-font-subset-chip${O?" is-active":""}" data-subset-preset="${I}">
            <span class="admin-font-subset-chip-check">${O?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(D)}</span>
            <span class="admin-font-subset-chip-range">${y(d[I])}</span>
            <span class="admin-font-subset-chip-meta">${E.glyphs} glyphs \xB7 ${E.estSize}</span>
          </label>`}).join("");v.innerHTML=`
        <div class="admin-font-subset-target">
          <span class="admin-font-subset-target-glyph">${ServerI18n.t("fontsSubsetTargetGlyph")}</span>
          <div>
            <div class="admin-ui-monolabel">${ServerI18n.t("mlFont")}</div>
            <div class="admin-font-subset-target-name">${y(r)}</div>
          </div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsSubsetPresetsLabel")} \xB7 ${ServerI18n.t("fontsSecPresets")}</div>
          <div class="admin-font-subset-chips">${p}</div>
        </div>
        <div class="admin-font-subset-section">
          <div class="admin-ui-monolabel">${ServerI18n.t("fontsCustomRangeLabel")}${ServerI18n.t("fontsSecUnicodeRange")}</div>
          <textarea class="admin-font-subset-custom" data-subset-custom
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(a)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,v.querySelectorAll("[data-subset-preset]").forEach(I=>{I.addEventListener("click",E=>{E.preventDefault();let D=I.dataset.subsetPreset;e.has(D)?e.delete(D):e.add(D),i()})});let x=v.querySelector("[data-subset-custom]");x&&x.addEventListener("input",()=>{a=x.value})};if(i(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:v,width:540}))return;let u=[];if(e.forEach(p=>{d[p]&&u.push(d[p])}),a.trim()&&u.push(a.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await $(r,u.join(","))}async function $(r,d){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:r}),!0);let e=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(r)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:d})}),a=await e.json().catch(()=>({}));if(e.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!e.ok){window.showToast?.(a.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:e.status}),!1);return}let v=a.saved_bytes||0,i=Math.round((a.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:r,before:F(a.original_size),after:F(a.new_size),pct:i}),!0),b()}catch(e){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:e.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function N(r){try{let d=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:r})});if(!d.ok)throw new Error("HTTP "+d.status);h=r,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:r}),!0),b()}catch(d){console.error("[admin-fonts] set default failed:",d),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function w(r,d){try{let e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(r)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!d})});if(!e.ok)throw new Error("HTTP "+e.status);window.showToast(ServerI18n.t(d?"fontsToggleOffToast":"fontsToggleOnToast",{name:r}),!0),b()}catch(e){console.error("[admin-fonts] toggle failed:",e),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var r=document.getElementById("adminFontList");if(!r)return;let d=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var e=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!e.ok)throw new Error("HTTP "+e.status);var a=await e.json(),v=a.fonts||[];if(A=v,window.AdminTabs?.setTabCount?.("assets","fonts",v.length||""),U(v,d),v.length===0){r.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,f(v);return}r.innerHTML=v.map(i=>C(i,d)).join(""),f(v),c()}catch(i){console.error("[admin-fonts] fetch failed:",i),r.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,U([],d)}}async function L(r){try{let d=await r.slice(0,4).arrayBuffer(),e=new Uint8Array(d);return e[0]===0&&e[1]===1&&e[2]===0&&e[3]===0?"TTF":e[0]===79&&e[1]===84&&e[2]===84&&e[3]===79?"OTF":e[0]===119&&e[1]===79&&e[2]===70&&e[3]===50?"WOFF2":e[0]===116&&e[1]===114&&e[2]===117&&e[3]===101?"TTF":e[0]===116&&e[1]===116&&e[2]===99&&e[3]===102?"TTC":null}catch{return null}}function H(r,d){let e=document.getElementById("adminFontDropStatus");if(e){if(!r){e.textContent="",e.hidden=!0,e.classList.remove("is-good","is-bad");return}e.hidden=!1,e.textContent=r,e.classList.toggle("is-good",d==="good"),e.classList.toggle("is-bad",d==="bad")}}function B(r){let d=document.getElementById("adminFontUploadError");if(!d)return;if(!r){d.hidden=!0,d.innerHTML="";return}d.hidden=!1,d.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(r)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let e=d.querySelector("[data-font-error-retry]");e&&e.addEventListener("click",function(){let a=document.getElementById("adminFontFileInput");a&&a.click()})}async function P(r){if(!r)return;B("");let d=r.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(d)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),B(ServerI18n.t("fontsExtNotSupportedFull"));return}if(r.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),B(ServerI18n.t("fontsFileTooLargeFull"));return}let e=await L(r);if(!e){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),B(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:e,size:(r.size/1024).toFixed(1)}),"good");try{var a=new FormData;a.append("fontfile",r);var v=await window.csrfFetch("/admin/upload_font",{method:"POST",body:a}),i=await v.json();v.ok?(window.showToast(i.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:r.name}),"good"),B(""),await b()):(window.showToast(i.error||ServerI18n.t("uploadFailed"),!1),H(i.error||ServerI18n.t("uploadFailed"),"bad"),B(i.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(l){console.error("[admin-fonts] upload error:",l),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),B(ServerI18n.t("fontsNetworkDisconnected"))}}function f(r){let d=document.getElementById("fontsTotalSize");d&&(d.textContent=ServerI18n.t("fontsTotalCount",{n:r.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(r=>{r.addEventListener("click",d=>{if(d.target.closest(".admin-font-delete-btn"))return;let e=r.dataset.font,a=document.getElementById("fontsPreviewFamily"),v=document.getElementById("fontsPreviewHeadline"),i=document.getElementById("fontsPreviewLatin"),l=document.getElementById("fontsPreviewCJK");a&&(a.textContent=e);let u=`"${e}", sans-serif`;v&&(v.style.fontFamily=u),i&&(i.style.fontFamily=u),l&&(l.style.fontFamily=u)})})}async function o(){var r=document.getElementById("adminFontFileInput");if(r){var d=r.files&&r.files[0];if(!d){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await P(d),r.value=""}}function t(){let r=document.getElementById("adminFontDrop"),d=document.getElementById("adminFontFileInput");!r||!d||(r.addEventListener("click",e=>{e.target!==d&&d.click()}),r.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),d.click())}),["dragenter","dragover"].forEach(e=>{r.addEventListener(e,a=>{a.preventDefault(),a.stopPropagation(),r.classList.add("is-drag")})}),["dragleave","drop"].forEach(e=>{r.addEventListener(e,a=>{a.preventDefault(),a.stopPropagation(),r.classList.remove("is-drag")})}),r.addEventListener("drop",async e=>{let a=e.dataTransfer&&e.dataTransfer.files;a&&a[0]&&await P(a[0])}))}async function s(r){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",r),confirmLabel:ServerI18n.t("deleteBtn")}))try{var e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(r),{method:"DELETE"}),a=await e.json();e.ok?(window.showToast(a.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(a.error||ServerI18n.t("deleteFailed"),!1)}catch(v){console.error("[admin-fonts] delete error:",v),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function n(){var r=document.getElementById("settings-grid");if(r){r.insertAdjacentHTML("beforeend",g());var d=document.getElementById("adminFontFileInput");d&&d.addEventListener("change",o),t();var e=document.getElementById("adminFontList");e&&e.addEventListener("click",function(a){var v=a.target.closest(".admin-font-delete-btn");if(v){a.stopPropagation(),s(v.dataset.name);return}var i=a.target.closest(".admin-font-default-btn");if(i){a.stopPropagation(),N(i.dataset.name);return}var l=a.target.closest(".admin-font-toggle-btn");if(l){a.stopPropagation();let p=l.dataset.enabled==="true";w(l.dataset.name,p);return}var u=a.target.closest(".admin-font-subset-btn");u&&(a.stopPropagation(),S(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(a=>a.ok?a.json():null).then(a=>{a&&Array.isArray(a.FontFamily)&&(h=a.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var r=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()});r.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&n()}})})()});var Nt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-scheduler",g=5e3,h=null,A=null;function U(n,r,d,e){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${n}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(r)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(d||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${e||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function C(n){var r=n==="active"?"is-success":n==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+r+'" title="'+m(n)+'"></span>'}function _(n){let r=n.state==="paused",d=n.repeat_count===void 0?"\u2014":n.repeat_count===-1?"\u221E":String(n.repeat_count),e=n.repeat_count>0&&typeof n.remaining=="number"?String(n.repeat_count-n.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(n.id)}">
        ${C(n.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(n.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${n.messages?n.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${n.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(e)}</span>
        <span class="admin-scheduler-job-val">${y(d)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${r?"is-active":"is-warn"}"
            data-job-id="${m(n.id)}" data-action="${r?"resume":"pause"}">
            ${y(ServerI18n.t(r?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(n.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(n){return y(n)}function M(){let n=document.querySelectorAll("#schedulerMessages [data-msg-index]"),r=[];return n.forEach(function(d){let e=d.querySelector(".scheduler-msg-text").value.trim(),a=d.querySelector(".scheduler-msg-color").value,v=parseInt(d.querySelector(".scheduler-msg-size").value,10)||48;e&&r.push({text:e,color:a,size:v})}),r}function F(n,r,d){let e=document.getElementById("schedulerMessages");if(!e)return;let a=e.children.length;e.insertAdjacentHTML("beforeend",U(a,n||"",r||"#ffffff",d||48))}function S(n){let r=n.closest("[data-msg-index]");r&&r.remove();let d=document.getElementById("schedulerMessages");d&&d.querySelectorAll("[data-msg-index]").forEach(function(e,a){e.dataset.msgIndex=a})}async function $(){let n=M();if(n.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let r=parseInt(document.getElementById("schedulerInterval").value,10);if(!r||r<1||r>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let d=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(d)||d<-1||d>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let e=document.getElementById("schedulerCreateBtn");e&&(e.disabled=!0);try{let a=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,interval_sec:r,repeat_count:d})}),v=await a.json();a.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await f()):showToast(v.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(a){console.error("Scheduler create error:",a),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{e&&(e.disabled=!1)}}function N(n){return"msg"}function w(n){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[n]||"\u25C8"}function b(n){return n.next_run_at?new Date(n.next_run_at*1e3).getHours():new Date().getHours()}function L(n){if(n.next_run_at){let r=new Date(n.next_run_at*1e3);return String(r.getHours()).padStart(2,"0")+":"+String(r.getMinutes()).padStart(2,"0")}return"--:--"}function H(n){let r=n.id||"job",d=Array.isArray(n.messages)?n.messages.length:null;return"Job #"+r+(d!=null?" \xB7 "+d+" messages":"")}function B(n){let r=document.querySelector("[data-sch-timeline]");if(!r)return;let d=[],e=new Date().getHours();for(let v=0;v<24;v++){let i=v>=Math.max(0,e-1)&&v<=Math.min(23,e+2);d.push('<div class="admin-sch-timeline-hour'+(i?" is-peak":"")+'">'+String(v).padStart(2,"0")+"</div>")}let a=(n||[]).map(function(v){let i=N(v),l=w(i),u=v.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(L(v))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+i+'">'+l+'</span><span class="admin-sch-evt-desc">'+y(H(v))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");r.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+d.join("")+"</div></div>"+(a||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function P(n){let r=document.querySelector("[data-sch-calendar]");if(!r)return;let d=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],e=new Date,a=(e.getDay()+6)%7,v=new Date(e);v.setDate(e.getDate()-a);let i=d.map(function(u,p){let x=new Date(v);return x.setDate(v.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===a?" is-today":"")+'">'+y(u)+'<span class="date">'+x.getDate()+"</span></div>"}).join(""),l=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===a?(n||[]).slice(0,5).map(function(x){let I=N(x),E=w(I);return'<span class="admin-sch-cal-chip is-'+I+'">'+y(L(x))+" "+E+"</span>"}).join(""):"")+"</div>"}).join("");r.innerHTML='<div class="admin-sch-calendar-head">'+i+'</div><div class="admin-sch-calendar-body">'+l+"</div>"}async function f(){let n=document.getElementById("schedulerJobsList"),r=document.getElementById("schedulerJobsCount");if(n)try{let d=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!d.ok){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",r&&(r.textContent="\u2014");return}let e=await d.json();if(!Array.isArray(e.jobs)){n.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",r&&(r.textContent="\u2014");return}r&&(r.textContent=ServerI18n.t("schItemCount",{n:e.jobs.length})),B(e.jobs),P(e.jobs);let a=document.querySelector("[data-sch-meta]");if(a){let v=new Date().toISOString().slice(0,10);a.textContent=ServerI18n.t("schTodayMeta",{date:v,n:e.jobs.length})}if(e.jobs.length===0){n.innerHTML="";let v=window.AdminEmpty.render("scheduler");v.dataset.emptyKind="scheduler",n.appendChild(v);return}n.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+e.jobs.map(_).join("")}catch(d){console.error("Scheduler fetch error:",d),n.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(n,r){try{let d=await csrfFetch("/admin/scheduler/"+encodeURIComponent(r),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),e=await d.json();d.ok?(showToast(r==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await f()):showToast(e.error||ServerI18n.t("actionFailed"),!1)}catch(d){console.error("Scheduler toggle error:",d),showToast(ServerI18n.t("actionFailed"),!1)}}async function o(n){try{let r=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:n})}),d=await r.json();r.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await f()):showToast(d.error||ServerI18n.t("cancelFailed"),!1)}catch(r){console.error("Scheduler cancel error:",r),showToast(ServerI18n.t("cancelFailed"),!1)}}function t(){let n=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!n)return;n.insertAdjacentHTML("beforeend",`
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
    `);let r=document.querySelectorAll("[data-sch-view]");r.forEach(i=>{i.addEventListener("click",()=>{let l=i.dataset.schView;r.forEach(x=>{x.classList.toggle("is-active",x===i),x.setAttribute("aria-selected",x===i?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");u&&(u.hidden=l!=="timeline"),p&&(p.hidden=l!=="calendar")})}),F("","#ffffff",48);let d=document.getElementById("schedulerMessages");d&&d.addEventListener("click",function(i){let l=i.target.closest(".scheduler-remove-msg");l&&S(l)});let e=document.getElementById("schedulerAddMsg");e&&e.addEventListener("click",function(){F("","#ffffff",48)});let a=document.getElementById("schedulerCreateBtn");a&&a.addEventListener("click",$);let v=document.getElementById("schedulerJobsList");v&&v.addEventListener("click",function(i){let l=i.target.closest(".scheduler-job-toggle");if(l){c(l.dataset.jobId,l.dataset.action);return}let u=i.target.closest(".scheduler-job-cancel");u&&o(u.dataset.jobId)}),h&&(clearInterval(h),h=null),A||(A=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:f}),window.addEventListener("beforeunload",function(){A&&(A(),A=null)}))}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let n=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&!n){n=!0;try{t()}finally{n=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var Pt=ye(()=>{(function(){"use strict";let y="admin-security-v2-page";var k=window.AdminUtils.escapeHtml;let g=null,h=!1,A=!1,U=0;function C(){let i=l=>ServerI18n.t(l);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}function _(i){if(!i)return 0;let l=0;i.length>=8&&l++,i.length>=12&&l++;let u=(/[a-z]/.test(i)?1:0)+(/[A-Z]/.test(i)?1:0)+(/\d/.test(i)?1:0)+(/[^\w]/.test(i)?1:0);return u>=2&&l++,u>=3&&l++,Math.min(4,l)}function m(i){let l=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!l||!u)return;let p=_(i),x=[0,25,50,75,100],I=["","is-bad","is-warn","is-warn","is-good"],E=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];l.style.width=x[p]+"%",l.className=I[p],u.textContent=E[p]}async function M(i){i.preventDefault();let l=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!l||!u||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let x=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:l,new_password:u,confirm_password:p})}),I=await x.json().catch(()=>({}));x.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),I.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(I.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch(x){console.error("Password change error:",x),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function F(){let i=++U,l=document.getElementById("sec2-wsa-status");A=!0,S(!0),l.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let p=await u.json();if(i!==U)return!1;g={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",l.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),l.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,w();let x=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=x?new Date(parseInt(x,10)).toLocaleString():"\u2014",!0}catch{return i!==U||(g=null,S(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,l.textContent=ServerI18n.t("security2LoadFailed"),l.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{i===U&&(A=!1,S(h||!g),h||w())}}function S(i){["toggle","token","save","rotate","copy","reveal"].forEach(l=>{document.getElementById("sec2-wsa-"+l).disabled=i}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",i)}function $(){return h||A||!g?!1:(h=!0,++U,S(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function N(){if(h=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,S(A||!g),g&&!A){let i=document.getElementById("sec2-wsa-status");i.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),i.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),w()}}function w(){if(h||A||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let i=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!i}function b(i){return String(i||"").split(/\n+/).map(l=>l.trim()).filter(Boolean)}function L(i){return String(i||"").split(",").map(l=>l.trim().toUpperCase()).filter(Boolean)}function H(i,l){let u=document.getElementById(i);u&&(u.textContent=l==null||l===""?"\u2014":String(l))}async function B(){try{let i=await fetch("/admin/security/settings",{credentials:"same-origin"}),l=await i.json().catch(()=>({}));if(!i.ok)throw new Error(l.error||i.status);let u=l.ip_allowlist||{},p=l.cors||{},x=l.tls||{},I=!!u.enabled,E=Array.isArray(u.entries)?u.entries:[],D=document.getElementById("sec2-ip-dot"),O=document.getElementById("sec2-ip-status-chip"),W=document.getElementById("sec2-ip-toggle"),T=document.getElementById("sec2-ip-entries");D&&(D.classList.toggle("is-lime",I),D.classList.toggle("is-amber",!I)),O&&(O.textContent=I?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),O.className="admin-ui-chip admin-sec-status-chip "+(I?"is-active":"is-warn")),W&&(W.checked=I),T&&(T.value=E.join(`
`)),H("sec2-ip-current",u.current_ip||"\u2014"),H("sec2-ip-status-line",I?ServerI18n.t("security2IpStatusEnabled",{n:E.length}):ServerI18n.t("security2IpStatusDisabled"));let R=Array.isArray(p.origins)?p.origins:["*"],j=Array.isArray(p.methods)?p.methods:[],J=document.getElementById("sec2-cors-origins"),K=document.getElementById("sec2-cors-credentials"),G=document.getElementById("sec2-cors-methods"),te=document.getElementById("sec2-cors-cred-dot");J&&(J.value=R.join(`
`)),K&&(K.checked=!!p.supports_credentials),G&&(G.value=j.join(", ")),te&&(te.classList.toggle("is-lime",!p.supports_credentials),te.classList.toggle("is-amber",!!p.supports_credentials)),H("sec2-cors-origins-line",R.join(", ")),H("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),H("sec2-cors-methods-line",j.join(", "));let ne=x.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:x.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",ne)}catch(i){console.error("Security settings load error:",i);let l=document.getElementById("sec2-ip-status-chip");l&&(l.textContent=ServerI18n.t("security2LoadFailed"),l.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function P(i){let l={};if(i==="ip")l.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(i==="cors"){let u=b(document.getElementById("sec2-cors-origins")?.value||"");l.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:L(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),p=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await B()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function f(){if(h||A||!g)return;let i=document.getElementById("sec2-wsa-toggle").checked,l=document.getElementById("sec2-wsa-token").value.trim();if(i&&!l){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if($())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:i,token:l})}),p=await u.json().catch(()=>({}));u.ok?await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}async function c(){if(!(h||A||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&$())try{let l=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await l.json().catch(()=>({}));if(l.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{N()}}function o(){let i=document.getElementById("sec2-wsa-token").value;if(!i){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function t(){let i=document.getElementById("sec2-wsa-token");i.type=i.type==="password"?"text":"password";let l=i.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(l)),u.textContent=ServerI18n.t(l?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function s(i){if(i==="reset-ws"&&(h||A||!g))return;let l={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[i];if(!(!l||!await window.HudConfirm?.open({icon:"\u26A0",title:l.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:l.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:l.severity||"warn",body:l.confirm,confirmLabel:l.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(i==="reset-ws"&&!$()))try{let p=await window.csrfFetch(l.url,{method:"POST"}),x=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast(x.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(i==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await F())return}window.showToast&&showToast(l.ok(x),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{i==="reset-ws"&&N()}}function n(){let i=document.getElementById("sec2-session-self-line");if(i){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),x=navigator.platform||navigator.userAgentData?.platform||"",I=p?p[0].split("/")[0]:"Browser";i.textContent=ServerI18n.t("security2SessionSelfLine",{browser:I,platform:x})}let l=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(l&&u){let p=location.protocol==="https:";l.classList.add(p?"is-lime":"is-crimson"),u.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function r(){let i=document.getElementById("sec2-pw-form");i&&i.addEventListener("submit",M);let l=document.getElementById("sec2-pw-new");l&&l.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",f),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",o),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",t),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",w),document.getElementById("sec2-wsa-token")?.addEventListener("input",w),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>P("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>P("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,u.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>s(u.dataset.secDanger)))}),n(),F(),B()}function d(){}function e(){let i=document.querySelector(".admin-dash-grid"),l=document.getElementById(y);if(!i||!l)return;let u=i.dataset.activeRoute||"live",p=i.dataset.activeLeaf||u;l.style.display=u==="security"||u==="system"&&p==="security"?"":"none"}function a(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",C()),r(),e())}function v(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let i=null;function l(){let p=document.querySelector(".admin-dash-grid");!p||i||(i=new MutationObserver(e),i.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?a():void 0,l(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{a(),l(),e()}),l(),a()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var Rt=ye(()=>{(function(){"use strict";let y="admin-backup-v2-page";var k=window.AdminUtils.escapeHtml;function g(){let n=r=>ServerI18n.t(r);return`
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
      </div>`}async function h(){try{let n=await fetch("/get_settings",{credentials:"same-origin"});if(!n.ok)throw new Error(n.status);let r=await n.json(),d=["password","token","secret","hash"],e={};Object.keys(r||{}).forEach(u=>{d.some(p=>u.toLowerCase().includes(p))||(e[u]=r[u])});let a=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:e},null,2)],{type:"application/json"}),v=URL.createObjectURL(a),i=new Date().toISOString().replace(/[:.]/g,"-"),l=document.createElement("a");l.href=v,l.download="danmu-settings-"+i+".json",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(v),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(n){console.error("Settings snapshot error:",n),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let A=null;function U(){A=null;let n=document.getElementById("bk2-settings-apply");n&&(n.disabled=!0,n.title=ServerI18n.t("backupApplyDisabledTitle"))}async function C(){let n=document.getElementById("bk2-settings-upload"),r=document.getElementById("bk2-settings-diff"),d=document.getElementById("bk2-settings-apply"),e=n&&n.files&&n.files[0];if(!e){U(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let a=await e.text(),v=JSON.parse(a),i=v.settings||v;if(!i||typeof i!="object"||Array.isArray(i))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let l=await fetch("/get_settings",{credentials:"same-origin"}),u=l.ok?await l.json():{},p=[];new Set([...Object.keys(u),...Object.keys(i)]).forEach(I=>{let E=JSON.stringify(u[I]),D=JSON.stringify(i[I]);E!==D&&(E===void 0?p.push("+ "+I+": "+D):D===void 0?p.push("- "+I+": "+E):p.push("~ "+I+": "+E+" \u2192 "+D))}),r.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),r.hidden=!1,A=i,d&&(d.disabled=!1,d.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(a){console.error("Dry-run error:",a),U(),r.textContent=ServerI18n.t("backupParseFailedDetail",{msg:a&&a.message?a.message:String(a)}),r.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function _(){let n=document.getElementById("bk2-settings-diff"),r=document.getElementById("bk2-settings-apply");if(!A){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let e=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:A})}),a=await e.json().catch(()=>({}));if(!e.ok){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(a.details||a,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(a.applied||[]).length+" settings"),A=null,r&&(r.disabled=!0,r.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(e){n&&(n.hidden=!1,n.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:e&&e.message?e.message:String(e)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let n=document.getElementById("bk2-factory-confirm"),r=document.getElementById("bk2-factory-reset");!n||!r||(n.addEventListener("input",()=>{let d=n.value.trim()==="reset";r.classList.toggle("is-ready",d),r.disabled=!d}),r.addEventListener("click",F))}async function F(){let n=document.getElementById("bk2-factory-confirm"),r=document.getElementById("bk2-factory-reset");if((n?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{r&&(r.disabled=!0);let e=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),a=await e.json().catch(()=>({}));if(!e.ok||!a.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),r&&(r.disabled=!1);return}n&&(n.value=""),r&&(r.classList.remove("is-ready"),r.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),w()}catch{r&&(r.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function S(){document.getElementById("bk2-settings-download")?.addEventListener("click",h),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",C),document.getElementById("bk2-settings-apply")?.addEventListener("click",_),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",B),document.getElementById("bk2-pack-apply")?.addEventListener("click",P),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",f),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),M(),w(),L()}let $=null,N=null;async function w(){let n=document.getElementById("bk2-pack-summary");if(n)try{let r=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!r.ok){n.textContent=ServerI18n.t("backupPreviewUnavailable");return}let d=await r.json(),e=(d.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:d.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function L(){let n=document.getElementById("bk2-assets-summary");if(n)try{let r=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!r.ok){n.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let d=await r.json(),e=(d.total_bytes/(1024*1024)).toFixed(2);n.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:d.file_count||0,mb:e})}catch{n.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function B(){let r=document.getElementById("bk2-pack-upload")?.files?.[0];if(!r){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(r.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let d=new FormData;d.append("file",r);let e=document.getElementById("bk2-pack-diff"),a=document.getElementById("bk2-pack-apply");try{let v=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:d}),i=await v.json().catch(()=>({}));if(!v.ok||!i.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(i.errors||i,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),a&&(a.disabled=!0),$=null;return}if(e){e.hidden=!1;let l=[],u=i.manifest||{};l.push("manifest version: "+(u.version||"?")),l.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),l.push(""),l.push("Will write "+(i.members?.length||0)+" files:"),(i.members||[]).forEach(p=>{l.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),i.skipped?.length&&(l.push(""),l.push("Skipped "+i.skipped.length+" entries:"),i.skipped.forEach(p=>l.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=l.join(`
`)}$=r,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:i.members?.length||0}),!0)}catch(v){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:v.message||""}),!1)}}async function P(){if(!$){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let r=new FormData;r.append("file",$);try{let e=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:r})).json().catch(()=>({})),a=document.getElementById("bk2-pack-diff");if(a){a.hidden=!1;let v=[];e.ok?(v.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),v.push(""),v.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&v.push("Skipped "+e.skipped.length+" (see above)")):(v.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),v.push(JSON.stringify(e.errors||e,null,2))),a.textContent=v.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:e.applied}),!0),$=null;let v=document.getElementById("bk2-pack-apply");v&&(v.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(d){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:d.message||""}),!1)}}async function f(){let r=document.getElementById("bk2-assets-upload")?.files?.[0];if(!r){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(r.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let d=new FormData;d.append("file",r);let e=document.getElementById("bk2-assets-diff"),a=document.getElementById("bk2-assets-apply");try{let v=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:d}),i=await v.json().catch(()=>({}));if(!v.ok||!i.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(i.errors||i,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),a&&(a.disabled=!0),N=null;return}if(e){e.hidden=!1;let l=[],u=i.manifest||{};l.push("manifest version: "+(u.version||"?")),l.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),l.push(""),l.push("Will write "+(i.members?.length||0)+" asset files:"),(i.members||[]).forEach(p=>{l.push("  "+p.path+" ("+(p.size||0)+" B)")}),i.skipped?.length&&(l.push(""),l.push("Skipped "+i.skipped.length+" entries:"),i.skipped.forEach(p=>l.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=l.join(`
`)}N=r,a&&(a.disabled=!1,a.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:i.members?.length||0}),!0)}catch(v){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:v.message||""}),!1)}}async function c(){if(!N){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let r=new FormData;r.append("file",N);try{let e=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:r})).json().catch(()=>({})),a=document.getElementById("bk2-assets-diff");if(a){a.hidden=!1;let v=[];e.ok?(v.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),v.push(""),v.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&v.push("Skipped "+e.skipped.length+" (see above)")):(v.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),v.push(JSON.stringify(e.errors||e,null,2))),a.textContent=v.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:e.applied}),!0),N=null;let v=document.getElementById("bk2-assets-apply");v&&(v.disabled=!0),L()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(d){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:d.message||""}),!1)}}function o(){let n=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!n||!r)return;let d=n.dataset.activeLeaf||"dashboard";r.style.display=d==="backup"?"":"none"}function t(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",g()),S(),o())}function s(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&t(),o()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",o),document.addEventListener("admin-panel-rendered",()=>{t(),o()}),t()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})()});var Ot=ye(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",k="/admin/broadcast/status",g="/admin/broadcast/toggle",h={mode:"live",started_at:null,total_messages:0,queue_size:0},A=null;async function U(){try{let t=await fetch(k,{credentials:"same-origin"});if(!t.ok)return;let s=await t.json();s&&(s.mode==="live"||s.mode==="standby")&&(A=s.session||null,h=s)}catch{}}async function C(t){try{let s=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!s.ok){let n=await s.json().catch(()=>({}));throw new Error(n&&n.error?n.error:`HTTP ${s.status}`)}return h=await s.json(),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function _(t){(!Number.isFinite(t)||t<0)&&(t=0);let s=Math.floor(t/1e3),n=String(Math.floor(s/3600)).padStart(2,"0"),r=String(Math.floor(s%3600/60)).padStart(2,"0"),d=String(s%60).padStart(2,"0");return`${n}:${r}:${d}`}async function m(t){let s=await C(t?"live":"standby");return s&&window.showToast&&window.showToast(ServerI18n.t(t?"broadcastToastResumed":"broadcastToastPaused"),!0),L(),s}async function M(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"danger",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearScreenBtn")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}window.AdminOverlayControl={setDisplay:m,clearScreen:M};function F(){let t=s=>ServerI18n.t(s);return`
      <div id="${y}" class="admin-broadcast-page admin-bc-v4 admin-bc-v5 hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-bc-v4__body">
          <div class="admin-bc-v5__status-row">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>${t("uiDisplayOff")}</span>
          </div>

          <!-- \u9019\u9801\u552F\u4E00\u7684\u4E3B\u52D5\u4F5C\u3002\u6E05\u7A7A\u756B\u9762\u4E0D\u53EF\u5FA9\u539F\uFF0C\u9694\u8457\u5206\u9694\u7DDA\u653E\u5728\u4E0B\u9762\u3002 -->
          <div class="admin-bc-v4__big-wrap">
            <button type="button" class="admin-bc-v4__big admin-bc-v5__big is-off" data-bc-big>${t("broadcastBigResume")}</button>
          </div>
          <div class="admin-bc-v4__secondary">
            <button type="button" class="admin-ui-action is-danger" data-bc-clear>${t("broadcastClearScreenBtn")}</button>
          </div>

          <div class="admin-bc-v4__stats">
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiSessionDuration")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-elapsed>\u2014</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiMsgTotal")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-msgs>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-cockpit-stat-label">${t("dashKpiUniqueFp")}</div><div class="admin-bc-v4__stat-v" data-bc-stat-fp>0</div></div>
          </div>

          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx hidden>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-started>\u2014</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-window>\u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions">${t("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>
      </div>`}let S=0,$=0,N=0,w=0;async function b(){try{let t=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(t.ok){let s=await t.json();typeof s.total=="number"&&(S=s.total)}}catch{}}function L(){let t=document.getElementById(y);if(!t)return;let s=h.mode==="live",n=s?"live":"standby",r=(p,x)=>{let I=t.querySelector(p);I&&(I.textContent=x)};t.dataset.bcState=n;let d=t.querySelector("[data-bc-statedot]");d&&(d.dataset.state=n);let e=t.querySelector("[data-bc-statelabel]");e&&(e.textContent=ServerI18n.t(s?"uiDisplayOn":"uiDisplayOff"),e.dataset.state=n);let a=t.querySelector("[data-bc-big]");a&&(a.className=`admin-bc-v4__big admin-bc-v5__big ${s?"is-on":"is-off"}`,a.textContent=ServerI18n.t(s?"broadcastBigPause":"broadcastBigResume"));let v=s&&h.started_at?Date.now()-h.started_at*1e3:0;r("[data-bc-stat-elapsed]",s?_(v).slice(3):"\u2014"),r("[data-bc-stat-msgs]",(h.total_messages||0).toLocaleString()),r("[data-bc-stat-fp]",S.toLocaleString());let i=A||{},l=!!(i.id||i.name),u=t.querySelector("[data-bc-session-ctx]");if(u&&(u.hidden=!l),l){let p=typeof i.started_at=="number"?i.started_at:null,x=E=>String(E).padStart(2,"0"),I=p?new Date(p*1e3):null;r("[data-bc-session-id]",i.name||i.id),r("[data-bc-session-started]",ServerI18n.t("sessionDetailStatStarted")+" \xB7 "+(I?`${x(I.getHours())}:${x(I.getMinutes())}:${x(I.getSeconds())}`:"\u2014")),r("[data-bc-session-window]",ServerI18n.t("sessionDetailStatDuration")+" \xB7 "+(p?_(Date.now()-p*1e3).slice(3):"\u2014"))}}function H(){let t=document.getElementById(y);t&&(t.querySelector("[data-bc-big]")?.addEventListener("click",()=>m(h.mode!=="live")),t.querySelector("[data-bc-clear]")?.addEventListener("click",M))}function B(){$||(U(),b(),L(),N=setInterval(U,5e3),$=setInterval(()=>{b().then(L)},1e4),w=setInterval(L,1e3))}function P(){N&&(clearInterval(N),N=0),$&&(clearInterval($),$=0),w&&(clearInterval(w),w=0)}function f(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!t||!s)return;let n=t.dataset.activeLeaf||"dashboard",r=n==="overlay"||n==="broadcast";s.style.display=r?"":"none",r?B():P()}function c(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("afterbegin",F()),H(),f())}function o(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),f()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",()=>{c(),f()}),c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var qt=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let h=["keyword","regex","replace","rate_limit"],A=["block","replace","allow","review"],U={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function C(T){var R=y();return R[T]!==void 0?R[T]:!1}function _(T,R){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(T);if(j&&j!==T)return j}return R||T}let m={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},M={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function F(){return`
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
            ${[{id:"url",label:ServerI18n.t("fltPresetUrl"),pattern:"https?://[^\\s]+",action:"block"},{id:"allcaps",label:ServerI18n.t("fltPresetAllcaps"),pattern:"^[A-Z\\W\\s]{8,}$",action:"review"},{id:"repeat",label:ServerI18n.t("fltPresetRepeat"),pattern:"(.)\\1{6,}",action:"review"},{id:"emojionly",label:"Emoji-only",pattern:"^[\\p{Emoji}\\s]+$",action:"block"}].map(T=>`
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${T.id}" data-flt-pattern="${T.pattern}" data-flt-action="${T.action}" data-flt-label="${T.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${T.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${T.id}">\u2014</span>
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
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${_("addFilterRule","Add Rule")}</span>

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
                  <input type="text" id="filterPattern" placeholder="${_("filterPatternPlaceholder","Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">${ServerI18n.t("fltColReplacement")}</label>
                  <input type="text" id="filterReplacement" placeholder="${_("filterReplacementPlaceholder","Replacement text...")}"
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
                  + ${_("addRule","Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${_("testRule","Test Rule")}</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${_("sampleText","Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${_("testBtn","Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`}let S="all";function $(T){let R=m[T.type]||"is-default",j=M[T.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},K=ServerI18n.t(J[T.type]||"ulWord"),G=T.pattern;if(T.type==="replace"&&T.replacement!==void 0&&(G=`${T.pattern}  \u2192  ${T.replacement}`),T.type==="rate_limit"){let z=T.max_count||5,X=T.window_sec||60;G=`${T.pattern}  \xB7  ${z}/${X}s`}let te=T.enabled?"":"opacity:0.45;",ne=U[T.action]?ServerI18n.t(U[T.action]):T.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${te}" data-rule-id="${g(T.id)}" data-rule-type="${g(T.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(G)}</span>
        <span class="hud-pill ${R}">${K}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content">${g(ne)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(T.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(T.enabled?_("enabled","Enabled"):_("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(T.id)}" ${T.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${T.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(T.id)}" title="${_("deleteRule","Delete")}" aria-label="${_("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function N(T){let R={all:T.length,keyword:0,regex:0,replace:0,rate_limit:0};T.forEach(J=>{R[J.type]!=null&&R[J.type]++}),Object.keys(R).forEach(J=>{let K=document.querySelector(`[data-filter-count="${J}"]`);K&&(K.textContent=R[J])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=R.all)}async function w(){let T=document.querySelector('[data-mod-stat="blacklist"]');if(T)try{let R=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!R.ok)return;let j=await R.json(),J=Array.isArray(j)?j:j.keywords||[];T.textContent=String(J.length)}catch{}}async function b(){try{let T=await csrfFetch("/admin/filters/list");if(!T.ok)throw new Error("HTTP "+T.status);return(await T.json()).rules||[]}catch(T){return console.error("Failed to fetch filter rules:",T),showToast(_("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function L(){let T=document.getElementById("filterRulesList");if(!T)return;T.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${_("loading","Loading...")}</div>`;let R=await b();if(N(R),w(),R.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),T.innerHTML="",T.appendChild(J)}else T.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${_("noFilterRules","No filter rules configured.")}</div>`;return}let j=S==="all"?R:R.filter(J=>J.type===S);T.innerHTML=j.map($).join("")}async function H(){let T=document.getElementById("filterType"),R=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),K=document.getElementById("filterPriority"),G=document.getElementById("filterMaxCount"),te=document.getElementById("filterWindowSec"),ne=T.value,z=(j.value||"").trim();if(!z){showToast(_("patternRequired","Pattern is required"),!1),j.focus();return}let X={type:ne,pattern:z,action:R.value,priority:parseInt(K.value,10)||0};ne==="replace"&&(X.replacement=J.value||""),ne==="rate_limit"&&(X.max_count=parseInt(G.value,10)||5,X.window_sec=parseFloat(te.value)||60);try{let Z=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),se=await Z.json();if(!Z.ok){showToast(se.error||_("addRuleFailed","Failed to add rule"),!1);return}showToast(_("ruleAdded","Rule added"),!0),j.value="",J.value="",await L()}catch(Z){console.error("Add filter rule error:",Z),showToast(_("addRuleFailed","Failed to add rule"),!1)}}async function B(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:_("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T})}),J=await j.json();if(!j.ok){showToast(J.error||_("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(_("ruleDeleted","Rule deleted"),!0),await L()}catch(j){console.error("Delete filter rule error:",j),showToast(_("deleteRuleFailed","Failed to delete rule"),!1)}}async function P(T,R){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T,updates:{enabled:R}})}),J=await j.json();if(!j.ok){showToast(J.error||_("updateRuleFailed","Failed to update rule"),!1),await L();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(_("updateRuleFailed","Failed to update rule"),!1),await L()}}async function f(){let T=document.getElementById("filterTestText"),R=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),J=document.getElementById("filterAction"),K=document.getElementById("filterPattern"),G=document.getElementById("filterReplacement"),te=document.getElementById("filterMaxCount"),ne=document.getElementById("filterWindowSec"),z=(T.value||"").trim();if(!z){showToast(_("sampleTextRequired","Enter sample text to test"),!1),T.focus();return}let X=(K.value||"").trim();if(!X){showToast(_("patternRequired","Pattern is required"),!1),K.focus();return}let Z=j.value,se={type:Z,pattern:X,action:J.value};Z==="replace"&&(se.replacement=G.value||""),Z==="rate_limit"&&(se.max_count=parseInt(te.value,10)||5,se.window_sec=parseFloat(ne.value)||60),R.innerHTML=`<span style="color:var(--color-text-muted)">${_("testing","Testing...")}</span>`;try{let ie=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:se,text:z})}),le=await ie.json();if(!ie.ok){R.innerHTML=`<span style="color: var(--color-ink-error)">${g(le.error||"Test failed")}</span>`;return}let ue="";le.action==="block"?ue=`<span style="color: var(--color-ink-error);font-weight:600">${_("blocked","BLOCKED")}</span>`:le.action==="replace"?ue=`<span style="color: var(--color-ink-warning);font-weight:600">${_("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(le.text)}</span>`:le.action==="allow"?ue=`<span style="color: var(--color-ink-success);font-weight:600">${_("allowed","ALLOWED")}</span>`:le.action==="review"?ue=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:ue=`<span style="color:var(--color-text-muted)">${_("noMatch","No match (pass)")}</span>`,le.reason&&(ue+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(le.reason)}</span>`),R.innerHTML=ue}catch(ie){console.error("Test filter rule error:",ie),R.innerHTML=`<span style="color: var(--color-ink-error)">${_("testError","Test error")}</span>`}}function c(){let T=document.getElementById("filterType"),R=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!T)return;let J=T.value;R&&(R.style.display=J==="replace"?"":"none"),j&&(j.style.display=J==="rate_limit"?"grid":"none")}function o(){let T=document.getElementById("filterTypeChips");T&&T.addEventListener("click",R=>{let j=R.target.closest(".hud-filter-chip");j&&(S=j.dataset.filterScope||"all",T.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===S)}),L())})}let t=6,s=[],n=!1,r=0,d=0;function e(T){let R=new Date(T*1e3),j=J=>String(J).padStart(2,"0");return`${j(R.getHours())}:${j(R.getMinutes())}:${j(R.getSeconds())}`}function a(T){let R=(T||"").toUpperCase();return R==="BLOCK"?"var(--hud-crimson)":R==="MASK"||R==="REPLACE"?"var(--hud-amber)":R==="REVIEW"?"var(--color-primary)":R==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function v(){let T=document.getElementById("filterLiveLog");if(T){if(s.length===0){T.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}T.innerHTML=s.map(R=>{let j=e(R.ts),J=(R.action||"").toUpperCase(),K=a(J),G=(R.text_excerpt||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),te=(R.pattern||"").replace(/[<>&"]/g,X=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[X]),ne=(R.source||"").slice(0,16),z=ne?`\xB7 ${ne}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${K}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${G}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${te} ${z}</span></span>
      </div>`}).join("")}}async function i(){try{let T=await fetch(`/admin/filters/events?since=${d}`,{credentials:"same-origin"});if(!T.ok)return;let R=await T.json();if(R.counts_24h){let j=(J,K)=>{let G=document.querySelector(`[data-mod-stat="${J}"]`);G&&(G.textContent=K!=null?String(K):"\u2014")};j("masked",R.counts_24h.MASK||0),j("blocked",R.counts_24h.BLOCK||0)}if(!Array.isArray(R.events)||R.events.length===0)return;for(s.unshift(...R.events);s.length>t;)s.pop();d=R.latest_seq||d,document.getElementById("filterLiveLog")&&v()}catch{}}function l(){n||(n=!0,i(),r=setInterval(i,4e3))}let u=Object.create(null),p="[QUICK]";function x(T,R){return T.find(j=>(j.name||"").startsWith(p+" "+R))}async function I(){let T=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(R=>{let j=R.dataset.fltLabel,J=x(T,j),K=!!J&&J.enabled!==!1;R.classList.toggle("is-active",K),J?u[R.dataset.fltQuickId]=J.id||J.rule_id:delete u[R.dataset.fltQuickId]})}async function E(T){let R=T.dataset.fltQuickId,j=T.dataset.fltPattern,J=T.dataset.fltAction,K=T.dataset.fltLabel,G=u[R];if(G)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:G})})).ok?(delete u[R],T.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:K}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let te=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${p} ${K}`,pattern:j,action:J,enabled:!0,priority:50})});if(te.ok){let ne=await te.json().catch(()=>({}));ne.rule_id&&(u[R]=ne.rule_id),T.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:K}),!0)}else{let ne=await te.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:ne.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function D(){let T=document.querySelector("[data-flt-quick]");T&&(T.addEventListener("click",R=>{let j=R.target.closest(".admin-flt-v4__qchip");j&&E(j)}),I())}function O(){let T=document.getElementById("settings-grid");if(!T)return;T.insertAdjacentHTML("beforeend",F()),o(),D();let R=document.getElementById("filterType");R&&R.addEventListener("change",c);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",H);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",f);let K=document.getElementById("filterTestText");K&&K.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),f())});let G=document.getElementById("filterPattern");G&&G.addEventListener("keydown",ne=>{ne.key==="Enter"&&(ne.preventDefault(),H())});let te=document.getElementById("filterRulesList");te&&(te.addEventListener("change",ne=>{let z=ne.target.closest(".filter-toggle-cb");if(!z)return;P(z.dataset.ruleId,z.checked);let X=z.closest(".hud-rule-row"),Z=X?.querySelector(".admin-filter-toggle-dot");Z&&(Z.classList.toggle("is-on",z.checked),Z.classList.toggle("is-off",!z.checked)),X&&(X.style.opacity=z.checked?"":"0.45")}),te.addEventListener("click",ne=>{let z=ne.target.closest(".filter-delete-btn");z&&B(z.dataset.ruleId)})),L(),l(),v()}function W(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W()})()});var Ht=ye(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,h=1e4,A=null;function U(b){var L=y();return L[b]!==void 0?L[b]:!1}function C(){return`
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
    `}function _(b){var L=ServerI18n.t("fingerprintState_"+b),H="";return b==="blocked"?H=" is-crimson":b==="flagged"?H=" is-amber":b==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+g(L)+"</span>"}function m(b){if(!b)return"\u2014";try{var L=new Date(b*1e3);return L.toLocaleTimeString()}catch{return String(b)}}function M(b){var L=document.getElementById("adminFingerprintTableWrap");if(L){if(!b||b.length===0){L.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",L.appendChild(H);return}var B='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",P=b.map(function(f){var c=f.blocked|0,o=f.hash||"",t=o.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(o)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(o)+'">fp:'+g(t)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(f.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(f.ua||"")+'">'+g(f.ua||"\u2014")+'</span><span class="admin-fp-num">'+(f.msgs|0)+'</span><span class="admin-fp-num">'+(f.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+_(f.state||"active")+'</span><span class="admin-fp-ts">'+g(m(f.last_seen))+"</span></div>"}).join("");L.innerHTML=B+P}}async function F(){var b=document.getElementById("adminFingerprintCount");try{var L=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!L.ok)throw new Error("HTTP "+L.status);var H=await L.json(),B=H.records||[];if(M(B),b){var P=H.count||B.length,f=H.flagged!=null?H.flagged:B.filter(function(o){return o.state==="flagged"||o.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:P,flagged:f})}}catch(o){console.error("[admin-fingerprints] fetch failed:",o);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function S(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var L=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(L.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await F();else{var H=await L.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(B){console.error("[admin-fingerprints] reset error:",B),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function $(){N(),A=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&F()},h)}function N(){A&&(clearInterval(A),A=null)}function w(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",C());var L=document.getElementById("adminFingerprintRefreshBtn");L&&L.addEventListener("click",F);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",S),F(),$()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&w()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var L=document.getElementById("moderation-grid")||document.getElementById("settings-grid");L&&!document.getElementById("sec-fingerprints")&&w()}})})()});var jt=ye(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let k=(e,a)=>{let v=window.ServerI18n?.t?.(e);return v&&v!==e?v:a||e},g=!1;new MutationObserver(()=>{let e=document.getElementById("settings-grid");if(e&&!(document.getElementById("sec-widgets")||g)){g=!0;try{A(e)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function A(e){let a=document.createElement("div");a.id="sec-widgets",a.className="admin-widgets-page hud-page-stack lg:col-span-2";let v=location.origin+"/overlay";a.dataset.tpl="B",a.innerHTML=`
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
        </div>`,e.appendChild(a);let i=document.getElementById("widget-add"),l=a.querySelector("[data-ow-addmenu]");i.addEventListener("click",u=>{u.stopPropagation(),l.hidden=!l.hidden}),l.addEventListener("click",u=>{let p=u.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(l.hidden=!0,_(p))}),document.addEventListener("click",u=>{!l.hidden&&!u.target.closest(".admin-ui-page-actions")&&(l.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",S),a.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=a.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),C()}async function U(e,a="GET",v=null){let i={method:a,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(v){let u=document.querySelector('meta[name="csrf-token"]');u&&(i.headers["X-CSRF-Token"]=u.content),i.body=JSON.stringify(v)}return(await fetch("/admin/widgets/"+e,i)).json()}async function C(){try{let e=await U("list");N(e.widgets||[])}catch(e){console.error("[admin-widgets] Load failed:",e)}}async function _(e){let a={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await U("create","POST",{type:e,config:a[e]||{}}),C()}catch(v){console.error("[admin-widgets] Create failed:",v)}}async function m(e){let a=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:a,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await U("delete","POST",{id:e}),C()}catch(i){console.error("[admin-widgets] Delete failed:",i)}}async function M(e,a){try{await U("update","POST",{id:e,config:a}),C()}catch(v){console.error("[admin-widgets] Update failed:",v)}}async function F(e,a,v){try{await U("score","POST",{id:e,team_index:a,delta:v}),C()}catch(i){console.error("[admin-widgets] Score update failed:",i)}}async function S(){let e=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:e,confirmLabel:ServerI18n.t("clearAll")}))try{await U("clear","POST",{}),C()}catch(v){console.error("[admin-widgets] Clear failed:",v)}}let $=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function N(e){let a=document.getElementById("widgets-list");if(a){if(a.innerHTML="",o(e),e.length===0){let v=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});v.dataset.emptyKind="widgets",a.appendChild(v);return}e.forEach(v=>{a.appendChild(B(v))})}}let w={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(e){return k("widgetPos_"+String(e||"top-left").replace("-","_"),e||"")}function L(e){let a=e.config||{},v="";e.type==="scoreboard"?v=(a.teams||[]).map(l=>`${l.name} ${l.score}`).join(" \xB7 "):e.type==="ticker"?(v=(a.messages||[])[0]||"",v&&(v=`\u300C${v}\u300D`)):e.type==="label"&&(v=a.text?`\u300C${a.text}\u300D`:"");let i=b(e.position);return v?`${v} \xB7 ${i}`:i}function H(e){return e==="scoreboard"?k("widgetScoreboard"):e==="ticker"?k("widgetTicker"):e==="label"?k("widgetLabel"):e}function B(e){let a=document.createElement("div");a.className="admin-widget-card",e.visible!==!1&&a.classList.add("is-on");let v=document.createElement("button");v.type="button",v.className="admin-widget-summary",v.setAttribute("aria-expanded","false"),v.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(w[e.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(H(e.type))+'</span><span class="admin-widget-summary-text">'+y(L(e))+"</span>"+(e.visible===!1?'<span class="admin-widget-summary-off">'+y(k("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',a.appendChild(v);let i=document.createElement("div");i.className="admin-widget-card-body",i.hidden=!0,v.addEventListener("click",()=>{i.hidden=!i.hidden,v.setAttribute("aria-expanded",i.hidden?"false":"true"),a.classList.toggle("is-open",!i.hidden)});let l=d(k("widgetPosition"),$,e.position,I=>M(e.id,{position:I}));i.appendChild(l),e.type==="scoreboard"?t(i,e):e.type==="ticker"?s(i,e):e.type==="label"&&n(i,e);let u=document.createElement("div");u.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=e.visible?k("widgetHide"):k("widgetShow"),p.addEventListener("click",()=>M(e.id,{visible:!e.visible})),u.appendChild(p);let x=document.createElement("button");return x.type="button",x.className="admin-ui-action is-danger admin-widget-card-action",x.textContent=k("remove"),x.addEventListener("click",()=>m(e.id)),u.appendChild(x),i.appendChild(u),a.appendChild(i),a}let P={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function f(e,a){let v="top-left",i=1/0;for(let[l,[u,p]]of Object.entries(P)){let x=e-u/2,I=a-p/2,E=x*x+I*I;E<i&&(i=E,v=l)}return v}function c(e){let a=e.config||{};return e.type==="scoreboard"?(a.teams||[]).map(v=>`${v.name} ${v.score}`).join("  ")||k("widgetScoreboard"):e.type==="ticker"?(a.messages||[])[0]||k("widgetTicker"):e.type==="label"?a.text||k("widgetLabel"):e.type}function o(e){let a=document.querySelector("[data-ow-stage]");if(a){if(a.innerHTML="",!e.length){a.innerHTML='<span class="admin-ow-stage-empty">'+y(k("widgetsStageEmpty"))+"</span>";return}e.forEach(v=>{let i=document.createElement("div");i.className="admin-ow-box is-"+(v.position||"top-left"),v.visible===!1&&i.classList.add("is-off"),i.dataset.owBox=v.id,i.draggable=!0,i.textContent=c(v),i.title=H(v.type),i.addEventListener("dragend",l=>{let u=a.getBoundingClientRect();if(!u.width||!u.height)return;let p=(l.clientX-u.left)/u.width,x=(l.clientY-u.top)/u.height;if(p<0||p>1||x<0||x>1)return;let I=f(p,x);I!==v.position&&M(v.id,{position:I})}),a.appendChild(i)})}}function t(e,a){let v=a.config||{},i=r(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",v.title||"",l=>M(a.id,{title:l}));e.appendChild(i),(v.teams||[]).forEach((l,u)=>{let p=document.createElement("div");p.className="admin-widget-team";let x=document.createElement("input");x.type="color",x.value=l.color||"#38bdf8",x.className="admin-widget-team-color",x.addEventListener("change",()=>{let W=[...v.teams];W[u]={...W[u],color:x.value},M(a.id,{teams:W})}),p.appendChild(x);let I=document.createElement("input");I.type="text",I.value=l.name,I.className="admin-widget-input",I.addEventListener("change",()=>{let W=[...v.teams];W[u]={...W[u],name:I.value},M(a.id,{teams:W})}),p.appendChild(I);let E=document.createElement("span");E.className="admin-widget-team-score",E.textContent=l.score,p.appendChild(E);let D=document.createElement("button");D.type="button",D.className="admin-widget-step",D.textContent="\u2212",D.addEventListener("click",()=>F(a.id,u,-1)),p.appendChild(D);let O=document.createElement("button");O.type="button",O.className="admin-widget-step",O.textContent="+",O.addEventListener("click",()=>F(a.id,u,1)),p.appendChild(O),e.appendChild(p)})}function s(e,a){let v=a.config||{},i=document.createElement("div");i.className="admin-widget-row";let l=document.createElement("span");l.className="lbl",l.textContent=window.ServerI18n?.t?.("speed")||"SPEED",i.appendChild(l);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=v.speed||60,u.style.flex="1",u.addEventListener("change",()=>{M(a.id,{speed:parseInt(u.value)})}),i.appendChild(u);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=u.value,u.addEventListener("input",()=>{p.textContent=u.value}),i.appendChild(p),e.appendChild(i);let x=document.createElement("div");x.className="admin-widget-row",x.style.alignItems="flex-start";let I=document.createElement("span");I.className="lbl",I.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",x.appendChild(I);let E=document.createElement("textarea");E.className="admin-widget-textarea",E.value=(v.messages||[]).join(`
`),E.rows=3,E.placeholder=ServerI18n.t("widgetTickerPlaceholder"),E.addEventListener("change",()=>{let D=E.value.split(`
`).filter(O=>O.trim());M(a.id,{messages:D})}),x.appendChild(E),e.appendChild(x)}function n(e,a){let v=a.config||{};e.appendChild(r(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",v.text||"",i=>M(a.id,{text:i}))),e.appendChild(r(window.ServerI18n?.t?.("size")||"SIZE",String(v.fontSize||24),i=>M(a.id,{fontSize:parseInt(i)||24}),"number"))}function r(e,a,v,i="text"){let l=document.createElement("div");l.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,l.appendChild(u);let p=document.createElement("input");return p.type=i,p.value=a,p.className="admin-widget-input",p.addEventListener("change",()=>v(p.value)),l.appendChild(p),l}function d(e,a,v,i){let l=document.createElement("div");l.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,l.appendChild(u);let p=document.createElement("select");return p.className="admin-widget-select",a.forEach(x=>{let I=document.createElement("option");I.value=x,I.textContent=x,x===v&&(I.selected=!0),p.appendChild(I)}),p.addEventListener("change",()=>i(p.value)),l.appendChild(p),l}})})()});var Ut=ye(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function k(){let T=window.ADMIN_ROUTES||{},R={};return y.forEach(j=>{let J=T[j];J&&J.title&&(R[j]={title:J.title,kicker:J.kicker||j.toUpperCase()})}),R}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],h=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function A(){let T=document.querySelector('meta[name="csrf-token"]');return T&&T.content||""}function U(T,R){if(typeof window.csrfFetch=="function")return window.csrfFetch(T,R);let j=Object.assign({credentials:"same-origin"},R||{}),J=new Headers(R&&R.headers||{});return J.set("X-CSRF-Token",A()),j.headers=J,fetch(T,j)}function C(T,R){typeof window.showToast=="function"&&window.showToast(T,R!==!1)}let _=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>U("/effects/reload",{method:"POST"}).then(T=>C(T.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),T.ok)).catch(()=>C(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>U("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(T=>C(T.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),T.ok)).catch(()=>C(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>U("/admin/poll/reset",{method:"POST"}).then(T=>C(T.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),T.ok)).catch(()=>C(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return U("/admin/history/clear",{method:"POST"}).then(R=>C(R.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),R.ok)).catch(()=>C(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,M=null,F=null,S="",$=[],N=[],w=0,b=null,L=null,H=null,B=15e3;function P(T){return String(T??"").replace(/[&<>"']/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[R])}function f(T,R){if(!R)return 0;let j=String(T||"").toLowerCase(),J=R.toLowerCase(),K=0,G=0,te=0,ne=0;for(;K<j.length&&G<J.length;)j[K]===J[G]?(G++,ne++,te+=2+ne):ne=0,K++;return G<J.length?-1:(j.startsWith(J)&&(te+=10),te)}function c(){let T=document.createElement("div");T.className="admin-cmdk",T.setAttribute("hidden",""),T.setAttribute("aria-hidden","true"),T.innerHTML=`
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
    `,document.body.appendChild(T),m=T,M=T.querySelector(".admin-cmdk-input"),F=T.querySelector(".admin-cmdk-list"),T.addEventListener("click",R=>{R.target.matches("[data-cmdk-close]")&&O()}),M.addEventListener("input",R=>{S=R.target.value,x()}),M.addEventListener("keydown",o),F.addEventListener("click",R=>{let j=R.target.closest("[data-cmdk-idx]");j&&(w=parseInt(j.dataset.cmdkIdx,10)||0,s())})}function o(T){if(T.key==="Escape"){T.preventDefault(),O();return}if(T.key==="ArrowDown"){T.preventDefault(),t(1);return}if(T.key==="ArrowUp"){T.preventDefault(),t(-1);return}if(T.key==="Enter"){T.preventDefault(),s();return}}function t(T){if(!$.length)return;w=(w+T+$.length)%$.length,E();let R=F.querySelector(`[data-cmdk-idx="${w}"]`);R&&R.scrollIntoView({block:"nearest"})}function s(){let T=$[w];if(T){if(T.type==="route")window.location.hash="#/"+T.route,O();else if(T.type==="setting")T.tab&&(document.body.dataset.viewerConfigTab=T.tab),window.location.hash="#/"+T.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let R=document.getElementById(T.section);R&&(R.scrollIntoView({behavior:"smooth",block:"start"}),R.tagName==="DETAILS"&&!R.open&&(R.open=!0))},80),O();else if(T.type==="message")window.location.hash="#/messages",O();else if(T.type==="user")window.location.hash="#/system",setTimeout(()=>{let R=document.getElementById("sec-fingerprints");R&&R.scrollIntoView({behavior:"smooth",block:"start"})},80),O();else if(T.type==="theme")U("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T.id})}).then(R=>{R.ok?(C(ServerI18n.t("cmdkThemeApplied",{name:T.label}),!0),H=null):C(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>C(ServerI18n.t("cmdkThemeApplyFailed"),!1)),O();else if(T.type==="action"){try{let R=T.action&&T.action();R&&typeof R.then=="function"&&R.catch(()=>{})}catch{}O()}}}let n={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function r(T){return Object.entries(k()).map(([R,j])=>{let J=Math.max(f(j.title,T),f(R,T)),K=n[R];return{type:"route",route:R,label:j.title,sub:K?ServerI18n.t(K):"",icon:"\u25C7",score:J}}).filter(R=>R.score>=0)}function d(T){let R=k()[T];return R?R.title:""}function e(T){return g.map(R=>{let j=R.labelKey?ServerI18n.t(R.labelKey):R.label;return{type:"setting",route:R.route,tab:R.tab,section:R.section,label:d(R.route)?`${d(R.route)} \u203A ${j}`:j,sub:"",icon:"\u2699",score:f(j,T)}}).filter(R=>R.score>=0)}function a(T){return b?(b.records||[]).map(j=>{let J=j.text||j.message||"",K=j.nickname||j.user||"guest",G=(j.timestamp||"").slice(11,19)||"\u2014",te=(j.fingerprint||j.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${K}`,sub:te?`${G} \xB7 fp:${te}`:G,icon:"\u{1F4AC}",score:Math.max(f(J,T),f(K,T))}}).filter(j=>j.score>=0):[]}function v(T){if(!H)return[];let R=H.records||[],j=H.active||"";return R.map(J=>{let K=J.label||J.display_name||J.name||"",G=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),te=J.name===j;return{type:"theme",id:J.name,label:te?ServerI18n.t("cmdkThemeActive",{name:K}):K,sub:G,icon:"\u{1F3A8}",score:Math.max(f(K,T),f(J.name||"",T),f(G,T))}}).filter(J=>J.score>=0)}function i(T){return _.map(R=>{let j=ServerI18n.t(R.labelKey),J=R.subKey?ServerI18n.t(R.subKey):R.sub;return{type:"action",id:R.id,label:j,sub:J,icon:"\u26A1",action:R.action,score:Math.max(f(j,T),f(R.id,T),f(J,T))}}).filter(R=>R.score>=0)}function l(T){return L?(L.records||[]).map(j=>{let J=j.fingerprint||j.fp||j.id||"",K=j.ip||j.last_ip||"",G=j.nickname||"";return{type:"user",label:G?`@${G}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${K||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(f(J,T),f(K,T),f(G,T))}}).filter(j=>j.score>=0):[]}async function u(){let T=Date.now(),R=[];(!b||T-b.at>B)&&R.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{b={at:T,records:j&&j.records||[]}}).catch(()=>{b={at:T,records:[]}})),(!L||T-L.at>B)&&R.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{L={at:T,records:j&&j.records||[]}}).catch(()=>{L={at:T,records:[]}})),(!H||T-H.at>B)&&R.push(fetch("/admin/themes",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{H={at:T,records:j&&j.themes||[],active:j&&j.active||""}}).catch(()=>{H={at:T,records:[],active:""}})),R.length&&await Promise.all(R)}let p={actions:5,pages:5,messages:4};async function x(){await u();let T=S.trim(),R={action:i(T),route:r(T),setting:e(T),theme:v(T),message:a(T),user:l(T)};$=[],N=[],h.forEach(j=>{let J=j.types.reduce((K,G)=>K.concat(R[G]||[]),[]).sort((K,G)=>G.score-K.score).slice(0,p[j.id]||5);J.length&&(N.push({id:j.id,labelKey:j.labelKey,from:$.length,count:J.length}),$=$.concat(J))}),w=0,E()}function I(T){return T.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[T.type]||"\xB7"}function E(){if(!$.length){F.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let T=[];N.forEach(R=>{T.push(`<li class="admin-cmdk-group" role="presentation">${P(ServerI18n.t(R.labelKey))}</li>`);for(let j=R.from;j<R.from+R.count;j++){let J=$[j],K=j===w;T.push(`
        <li class="admin-cmdk-row ${K?"is-active":""}"
            data-cmdk-idx="${j}" role="option" aria-selected="${K}">
          <span class="admin-cmdk-icon" aria-hidden="true">${P(I(J))}</span>
          <span class="admin-cmdk-label">${P(J.label)}</span>
          <span class="admin-cmdk-sub">${P(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${K?"\u21B5":""}</span>
        </li>`)}}),F.innerHTML=T.join("")}function D(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),S="",M.value="",x(),setTimeout(()=>M.focus(),20)}function O(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function W(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:D,close:O,isOpen:W,toggle:()=>W()?O():D()}})()});var Kt=ye(()=>{(function(){"use strict";let y="sec-sessions-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function h(c){if(c=Number(c)||0,c<=0)return"\u2014";var o=Math.floor(c/3600),t=Math.floor(c%3600/60),s=c%60;return o>0?o+"h "+t+"m":t>0?t+"m":s+"s"}function A(c){if(!c)return"\u2014";try{var o=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return o.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function U(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function C(){return'<div class="admin-sessions-th"><span>'+k(ServerI18n.t("sessionsColSession"))+"</span><span>"+k(ServerI18n.t("sessionsColMessages"))+"</span><span>"+k(ServerI18n.t("sessionsColViewers"))+"</span><span>"+k(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function _(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var o=window.AdminEmpty.render("sessions");o.dataset.emptyKind="sessions",c.appendChild(o);return}var t=g.sessions.map(function(s){var n=k(s.id||"");return'<div class="admin-sessions-tr'+(s.is_live?" is-live":"")+'" data-session-id="'+n+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(s.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+k(_(s))+'<span class="admin-sessions-td-sub">'+k(A(s.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(s.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(s.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+k(h(s.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+n+'">'+k(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=C()+t}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function F(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var o=g.sessions.find(function(s){return s.id===g.exportId});if(!o){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var t=M.map(function(s){return'<button type="button" class="admin-sx-export__seg'+(s.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+s.id+'" aria-pressed="'+(s.id===g.exportFormat?"true":"false")+'">'+k(ServerI18n.t(s.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+k(ServerI18n.t("sessionsExportTitle",{name:_(o)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+k(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+t+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+k(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+k(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+k(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+k(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function S(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),o=document.createElement("a");o.href=c,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove()}}async function $(){var c=g.exportId;if(c)try{var o=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!o.ok)throw new Error("HTTP "+o.status);var t=await o.json(),s=(t.records||[]).slice(0,500);if(!s.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var n=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:s,speedMultiplier:1})});if(n.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!n.ok)throw new Error("HTTP "+n.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function N(){m(),F()}async function w(){g.loading=!0,m();try{var[c,o]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),t=[],s=[];if(c.ok){var n=await c.json();t=Array.isArray(n.sessions)?n.sessions:[],t.forEach(function(l){l._explicit=!0})}if(o.ok){var r=await o.json();s=Array.isArray(r.sessions)?r.sessions:[]}var d=t.slice(),e=new Set(t.map(function(l){return l.id}));s.forEach(function(l){e.has(l.id)||d.push(l)}),d.sort(function(l,u){var p=typeof l.started_at=="number"?l.started_at:Date.parse(l.started_at||0),x=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return x-p});try{var a=await fetch("/admin/session/current",{credentials:"same-origin"});if(a.ok){var v=await a.json();if(v.status==="live"){var i=Object.assign({},v,{id:v.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});d.unshift(i)}}}catch{}g.sessions=d,g.total=d.length}catch(l){console.error("[admin-sessions] fetch error:",l),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:l.message||""}),!1)}finally{g.loading=!1,N()}}function b(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function L(c){g.exportId=c,F();var o=document.querySelector("[data-sessions-export]");o&&o.scrollIntoView({block:"nearest"})}function H(){var c=document.getElementById(y);c&&(c.addEventListener("click",function(o){var t=o.target.closest("[data-sessions-export-open]");if(t){o.stopPropagation(),L(t.dataset.sessionsExportOpen);return}if(o.target.closest("[data-sessions-export-close]")){g.exportId=null,F();return}var s=o.target.closest("[data-sessions-export-fmt]");if(s){g.exportFormat=s.dataset.sessionsExportFmt,F();return}if(o.target.closest("[data-sessions-replay]")){$();return}if(o.target.closest("[data-sessions-download]")){S();return}var n=o.target.closest(".admin-sessions-tr");n&&b(n.dataset.sessionId||null)}),c.addEventListener("change",function(o){var t=o.target.closest("[data-sessions-export-pii]");t&&(g.exportPii=!!t.checked)}),c.addEventListener("keydown",function(o){if(!(o.key!=="Enter"&&o.key!==" ")){var t=o.target.closest(".admin-sessions-tr");t&&(o.preventDefault(),b(t.dataset.sessionId||null))}}))}function B(){var c=document.querySelector(".admin-dash-grid"),o=document.getElementById(y);if(!(!c||!o)){var t=c.dataset.activeLeaf||"dashboard";o.style.display=t==="sessions"?"":"none"}}function P(){var c=document.getElementById("settings-grid");!c||document.getElementById(y)||(c.insertAdjacentHTML("beforeend",U()),H(),w(),B())}function f(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&P(),B()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",function(){P(),B()}),P()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()})()});var Wt=ye(()=>{(function(){"use strict";let y="sec-session-detail-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(E){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[E]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},h=!1,A={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function U(){let I=window.location.hash||"",E=I.indexOf("?");if(E===-1)return null;let D=I.slice(E+1);return new URLSearchParams(D).get("id")||null}function C(I){if(!I)return"\u2014";try{let E=new Date(I);if(isNaN(E.getTime()))return String(I);let D=O=>String(O).padStart(2,"0");return`${E.getFullYear()}-${D(E.getMonth()+1)}-${D(E.getDate())} ${D(E.getHours())}:${D(E.getMinutes())}:${D(E.getSeconds())}`}catch{return String(I)}}function _(I){if(!I||I<0)return"\u2014";let E=Math.round(Number(I)),D=Math.floor(E/3600),O=Math.floor(E%3600/60),W=E%60;return D>0?`${D}h ${O}m ${W}s`:O>0?`${O}m ${W}s`:`${W}s`}function m(I,E){if(!I||!E)return"";try{let D=Math.max(0,Math.round((new Date(I)-new Date(E))/1e3)),O=Math.floor(D/60),W=D%60;return`+${String(O).padStart(2,"0")}:${String(W).padStart(2,"0")}`}catch{return""}}function M(I){let E=Number(I);return isNaN(E)?"\u2014":E.toLocaleString()}function F(I){if(!I)return"#64748b";let E=0;for(let O=0;O<I.length;O++)E=E*31+I.charCodeAt(O)>>>0;return`hsl(${E%360}, 60%, 60%)`}function S(){return`
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
    `}async function $(I){if(!I){B(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let E=await fetch(`/admin/sessions/${encodeURIComponent(I)}`,{credentials:"same-origin"});if(E.status===404&&(E=await fetch(`/admin/session/archive/${encodeURIComponent(I)}`,{credentials:"same-origin"})),!E.ok)throw new Error(`HTTP ${E.status}`);let D=await E.json();g.session=D.session||null,g.records=D.records||[],g.density=D.density||[],H(!1),P(),N()}catch(E){H(!1),B(ServerI18n.t("sessionDetailErrLoadFailed",{msg:E.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function N(){if(g.sessionId)try{let I=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!I.ok)return;let E=await I.json();g.annotations=Array.isArray(E.annotations)?E.annotations:[],n()}catch{}}function w(){let I=g.session;if(!I)return 0;if(I.duration_s)return Math.round(I.duration_s*1e3);if(I.duration)return Math.round(I.duration*1e3);let E=I.started_at||I.start_time,D=I.ended_at||I.end_time;if(E&&D)try{return Math.max(0,new Date(D)-new Date(E))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function b(I){let E=Date.parse(I||0);if(Number.isNaN(E))return"\u2014";let D=new Date(E),O=W=>String(W).padStart(2,"0");return`${O(D.getHours())}:${O(D.getMinutes())}:${O(D.getSeconds())}`}function L(I){let E=Math.floor(I/1e3),D=Math.floor(E/3600),O=Math.floor(E%3600/60),W=E%60,T=R=>String(R).padStart(2,"0");return D>0?`${T(D)}:${T(O)}:${T(W)}`:`${T(O)}:${T(W)}`}function H(I){g.loading=I;let E=document.querySelector("[data-sd-loading]"),D=document.querySelector("[data-sd-error]");E&&(E.hidden=!I),D&&I&&(D.hidden=!0);let O=document.querySelector("[data-sd-timeline-wrap]");if(O&&window.AdminSkeletons){let W=O.querySelector("[data-sd-timeline-skel]");I?(O.hidden=!1,W||(W=window.AdminSkeletons.chart(),W.setAttribute("data-sd-timeline-skel","1"),O.appendChild(W))):W&&W.remove()}}function B(I){g.error=I;let E=document.querySelector("[data-sd-error]"),D=document.querySelector("[data-sd-error-msg]");E&&(E.hidden=!1),D&&(D.textContent=I),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(O){let W=document.querySelector(`[${O}]`);W&&(W.hidden=!0)})}function P(){f(),c(),o(),s(),n();let I=document.querySelector("[data-sd-error]");I&&(I.hidden=!0)}function f(){let I=g.session,E=document.querySelector("[data-sd-session-header]");if(!E)return;E.hidden=!1;let D=document.querySelector("[data-sd-session-id]"),O=document.querySelector("[data-sd-meta-start]"),W=document.querySelector("[data-sd-meta-duration]"),T=document.querySelector("[data-sd-title]"),R=I&&(I.session_id||I.id)||g.sessionId||"\u2014";D&&(D.textContent=R),O&&(O.textContent=C(I&&(I.started_at||I.start_time))),W&&(W.textContent=_(I&&(I.duration_s||I.duration))),T&&(T.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(R).slice(-8)}))}function c(){let I=g.session;if(!I)return;let E=document.querySelector("[data-sd-kpis]");E&&(E.hidden=!1);let D=function(R,j,J){let K=document.querySelector(`[data-sd-stat="${R}"]`);K&&(K.textContent=j);let G=document.querySelector(`[data-sd-stat-sub="${R}"]`);G&&(G.textContent=J||"")};D("msg_count",M(I.msg_count)),D("viewer_count",M(I.viewer_count));let O=Array.isArray(g.density)?g.density:[];if(O.length){let R=0,j=0;O.forEach(function(G,te){G>R&&(R=G,j=te)});let J=Date.parse(I.started_at||I.start_time||0),K="";if(!Number.isNaN(J)){let G=new Date(J+j*6e4),te=ne=>String(ne).padStart(2,"0");K=`${te(G.getHours())}:${te(G.getMinutes())}`}D("peak",M(R),K)}else D("peak","\u2014","");let W=Number(I.blocked_count)||0;D("blocked",M(W));let T=document.querySelector("[data-sd-blocked-btn]");T&&(T.textContent=ServerI18n.t("sessionDetailStatBlocked")+(W?" "+W:""),T.disabled=W===0)}function o(){let I=document.querySelector("[data-sd-timeline-wrap]"),E=document.querySelector("[data-sd-timeline]"),D=document.querySelector("[data-sd-timeline-axis]"),O=document.querySelector("[data-sd-peak-label]");if(!I||!E||!D)return;let W=g.density;if(!W||W.length===0){I.hidden=!0;return}I.hidden=!1;let T=Math.max(1,...W),R=0;W.forEach(function(ne,z){ne>W[R]&&(R=z)});let j=W.map(function(ne,z){let X=Math.max(2,Math.round(ne/T*100));return`<div class="admin-sd-bar${z===R?" is-peak":""}" style="height:${X}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:ne,minute:z+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:ne})}"></div>`}).join("");E.innerHTML=j;let J=g.session,K=C(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",G=C(J&&(J.ended_at||J.end_time)).slice(11,16)||"",te=W.length>2?`+${Math.round(W.length/2)}min`:"";D.innerHTML=`
      <span class="admin-sd-axis-label">${k(K)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${k(te)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${k(G)}</span>
    `,O&&(O.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:W[R],minute:R}))}function t(){let I=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(E){let D=(E.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!D?!1:I?String(E.text||"").toLowerCase().indexOf(I)!==-1||String(E.nickname||"").toLowerCase().indexOf(I)!==-1:!0})}function s(){let I=document.querySelector("[data-sd-msgs-wrap]"),E=document.querySelector("[data-sd-msgs-list]");if(!I||!E)return;if(!g.records.length){I.hidden=!0;return}I.hidden=!1;let D=t().slice(0,300);if(!D.length){E.innerHTML='<div class="admin-sd-msgs-empty">'+k(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}E.innerHTML=D.map(function(O){let W=(O.status||"shown")==="blocked",T=F(O.fingerprint||O.fp||""),R=b(O.timestamp||O.created_at),j=String(O.nickname||"").trim();return`
        <div class="admin-sd-msg-row${W?" is-blocked":""}">
          <span class="admin-sd-msg-time">${k(R)}</span>
          <span class="admin-sd-msg-dot" style="background:${T}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${k(O.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${k(ServerI18n.t("deliveryStatus_"+(O.status||"shown")))}
            ${O.delivery_reason?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("deliveryReason_"+O.delivery_reason))}</span>`:""}
            ${W&&O.blockedBy?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("sessionDetailBlockedBy",{rule:O.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${k(j||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function n(){let I=g.annotations||[],E=w(),D=document.querySelector("[data-sd-ann-count]");D&&(D.textContent=I.length?`${I.length} ANNOTATIONS`:"");let O=document.querySelector("[data-sd-ann-head]");O&&(O.textContent=I.length?`ANNOTATIONS \xB7 ${I.length}`:"ANNOTATIONS");let W=document.querySelector("[data-sd-ann-layer]");W&&(!E||I.length===0?W.innerHTML="":W.innerHTML=I.map(function(j){let J=A[j.label]||A.note,K=Math.min(100,Math.max(0,j.ts_ms/E*100)),G=j.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${G?" is-active":""}"
              data-sd-ann-marker="${k(j.id)}"
              style="left:${K.toFixed(2)}%;--ann-color:${J.color}"
              title="${k(J.label)} \xB7 ${L(j.ts_ms)}"
              aria-label="${k(J.label)} at ${L(j.ts_ms)}: ${k(j.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${G?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${k((j.note||"").slice(0,40))}${(j.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let T=document.querySelector("[data-sd-ann-legend]");T&&(T.innerHTML=Object.keys(A).map(function(j){let J=A[j],K=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${K}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let R=document.querySelector("[data-sd-ann-list]");if(R){if(I.length===0){R.innerHTML="";let j=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});j.dataset.emptyKind="session-annotations",R.appendChild(j);return}R.innerHTML=I.map(function(j){let J=A[j.label]||A.note,K=j.id===g.activeAnnId,te=(j.note||"").length>80?(j.note||"").slice(0,80)+"\u2026":j.note||"";return`
        <div class="admin-sd-ann-row${K?" is-active":""}" data-sd-ann-row="${k(j.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${L(j.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${k(te)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${k(j.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function r(I){if(!g.sessionId)return;let E=window.HudConfirm;if(!E){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:L(I)}),"");J!=null&&J.trim()&&d(I,"note",J.trim());return}let O="highlight",W="",T=document.createElement("div");T.className="admin-sd-ann-modal-body",T.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${L(I)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(A).map(function(J){let K=A[J];return`
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
      </div>`,T.addEventListener("click",function(J){let K=J.target.closest("[data-ann-label]");K&&(O=K.dataset.annLabel,T.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(G){G.classList.toggle("is-active",G===K)}))});let R=T.querySelector("[data-ann-modal-note]"),j=T.querySelector("[data-ann-modal-counter]");R.addEventListener("input",function(){W=R.value,j.textContent=`${W.length} / 280`}),setTimeout(function(){R&&R.focus()},50),E.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:T,width:460}).then(function(J){J&&d(I,O,R.value.trim())})}async function d(I,E,D){if(g.sessionId)try{let O=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(I)),label:E||"note",note:D||""})});if(!O.ok)throw new Error(`HTTP ${O.status}`);let W=await O.json();W.annotation&&(g.annotations.push(W.annotation),g.annotations.sort(function(T,R){return T.ts_ms-R.ts_ms}),g.activeAnnId=W.annotation.id,n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(O){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:O.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function e(I){if(I)try{let E=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(I)}`,{method:"DELETE",credentials:"same-origin"});if(!E.ok)throw new Error(`HTTP ${E.status}`);g.annotations=g.annotations.filter(function(D){return D.id!==I}),g.activeAnnId===I&&(g.activeAnnId=null),n(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(E){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:E.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function a(I){let E=document.querySelector("[data-sd-timeline-inner]"),D=document.querySelector("[data-sd-ann-hover]");if(!E||!D)return;let O=E.getBoundingClientRect();if(!O.width)return;let W=I.clientX-O.left,T=Math.min(1,Math.max(0,W/O.width)),R=w();if(!R){D.hidden=!0;return}let j=Math.round(T*R);g.hoverTsMs=j,D.hidden=!1,D.style.left=`${(T*100).toFixed(2)}%`,D.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:L(j)})}function v(){let I=document.querySelector("[data-sd-ann-hover]");I&&(I.hidden=!0),g.hoverTsMs=null}function i(I){if(I.target.closest("[data-sd-ann-marker]"))return;let E=document.querySelector("[data-sd-timeline-inner]");if(!E)return;let D=E.getBoundingClientRect();if(!D.width)return;let O=I.clientX-D.left,W=Math.min(1,Math.max(0,O/D.width)),T=w();T&&r(Math.round(W*T))}async function l(){if(g.sessionId)try{let I=g.records.slice(0,500);if(!I.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let E=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:I,speedMultiplier:1})});if(E.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!E.ok)throw new Error("HTTP "+E.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(I,E){if(I==="back")window.location.hash="#/history/sessions";else if(I==="retry")g.sessionId&&$(g.sessionId);else if(I==="export"){if(!g.sessionId)return;let D=document.createElement("a");D.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",D.rel="noopener",document.body.appendChild(D),D.click(),D.remove()}else if(I==="replay")l();else if(I==="add-annotation"){let D=w(),O=g.hoverTsMs!=null?g.hoverTsMs:Math.round(D/2);r(O)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let E=U();if(!E){g.sessionId=null,B(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=E,$(E)}function x(){let I=document.getElementById("settings-grid");if(!I)return;let E=document.getElementById(y);E||(I.insertAdjacentHTML("beforeend",S()),E=document.getElementById(y),n()),E&&E.dataset.sdBound!=="1"&&(E.dataset.sdBound="1",E.addEventListener("click",function(D){let O=D.target.closest("[data-sd-ann-del]");if(O){D.stopPropagation(),e(O.dataset.sdAnnDel);return}let W=D.target.closest("[data-sd-ann-marker]");if(W){D.stopPropagation(),g.activeAnnId=W.dataset.sdAnnMarker,n();let K=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);K&&K.scrollIntoView&&K.scrollIntoView({block:"nearest",behavior:"smooth"});return}let T=D.target.closest("[data-sd-ann-row]");if(T){g.activeAnnId=T.dataset.sdAnnRow,n();return}if(D.target.closest("[data-sd-timeline-inner]")){i(D);return}let j=D.target.closest("[data-sd-action]");if(j){D.preventDefault(),u(j.dataset.sdAction,j);return}let J=D.target.closest("[data-sd-filter]");J&&(g.msgFilter=J.dataset.sdFilter,E.querySelectorAll("[data-sd-filter]").forEach(function(K){K.classList.toggle("is-active",K===J)}),s())}),E.addEventListener("input",function(D){let O=D.target.closest("[data-sd-search]");O&&(g.msgQuery=O.value||"",s())}),E.addEventListener("mousemove",function(D){D.target.closest("[data-sd-timeline-inner]")&&a(D)}),E.addEventListener("mouseleave",function(D){D.target.closest&&D.target.closest("[data-sd-timeline-inner]")&&v()},!0)),g.sessionId=U(),g.sessionId?$(g.sessionId):B(ServerI18n.t("sessionDetailErrNoSessionSelected")),h||(h=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&x()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let E=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&E.indexOf("/session-detail")!==-1&&x(),window.addEventListener("admin-route-changed",function(D){(D&&D.detail&&D.detail.route)==="session-detail"&&x()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&x()})})})()});var Gt=ye(()=>{(function(){"use strict";let y="sec-search-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g=20,h={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},A=0;function U(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+k(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+k(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+k(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+k(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+k(ServerI18n.t("searchWhoAria"))+'"><option value="">'+k(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+k(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+k(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function C(t){if(!t)return 200;for(var s=0,n=0;n<Math.min(t.length,6);n++)s=s*31+t.charCodeAt(n)&65535;return s%360}function _(t,s){if(!s||!t)return k(t||"");var n=k(t),r=k(s);try{var d=new RegExp("("+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return n.replace(d,'<mark class="admin-search-hit">$1</mark>')}catch{return n}}function m(t){if(!t)return"\u2014";try{var s=new Date(t);return s.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return t}}function M(){var t=h.results;return h.blockedOnly&&(t=t.filter(function(s){return(s.status||"shown")==="blocked"})),h.who&&(t=t.filter(function(s){return(s.nickname||"")===h.who})),t}function F(){var t=document.getElementById("admin-search-count");if(t){if(!h.searched||!h.query.trim()){t.textContent="";return}t.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function S(){var t=document.querySelector("[data-search-who]");if(t){var s=[];h.results.forEach(function(r){var d=(r.nickname||"").trim();d&&s.indexOf(d)===-1&&s.push(d)}),s.sort();var n=h.who;t.innerHTML='<option value="">'+k(ServerI18n.t("searchWhoAnyone"))+"</option>"+s.map(function(r){return'<option value="'+k(r)+'"'+(r===n?" selected":"")+">"+k(r)+"</option>"}).join("")}}function $(){var t=document.getElementById("admin-search-results"),s=document.getElementById("admin-search-empty-state"),n=document.getElementById("admin-search-export-btn");if(t){t.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(i){i.remove()});var r=function(i){s&&(s.style.display="block",s.textContent=i),n&&(n.hidden=!0)};if(h.loading)return r(ServerI18n.t("searchSearching"));if(!h.searched)return r(ServerI18n.t("searchPromptStart"));var d=M();if(d.length===0)return r(ServerI18n.t("searchNoMatch"));s&&(s.style.display="none"),n&&(n.hidden=!1);var e=Math.min(d.length,h.shown),a=document.createDocumentFragment();if(d.slice(0,e).forEach(function(i){var l=document.createElement("div");l.className="admin-search-row",l.innerHTML='<span class="admin-search-row__ts">'+k(m(i.timestamp))+'</span><span class="admin-search-row__text">'+_(i.text||"",h.query)+'</span><span class="admin-search-row__nick">'+k((i.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+k(ServerI18n.t("deliveryStatus_"+(i.status||"shown")))+(i.delivery_reason?"<br>"+k(ServerI18n.t("deliveryReason_"+i.delivery_reason)):"")+"</span></span>",a.appendChild(l)}),t.appendChild(a),d.length>e){var v=document.createElement("button");v.type="button",v.className="admin-search-more",v.dataset.searchMore="1",v.textContent=ServerI18n.t("searchMoreLeft",{n:d.length-e}),t.appendChild(v)}}}function N(){F(),S(),$()}async function w(){var t=h.query.trim();if(!t){h.loading=!1,h.searched=!1,h.results=[],h.total=0,N();return}h.loading=!0,N();try{var s="/admin/search?q="+encodeURIComponent(t);if(h.scope==="session"){var n=await L();n&&(s+="&since="+encodeURIComponent(n))}var r=Date.now(),d=await fetch(s,{credentials:"same-origin"}),e=Date.now()-r;if(!d.ok)throw new Error("HTTP "+d.status);var a=await d.json();h.results=Array.isArray(a.results)?a.results:[],h.total=typeof a.total=="number"?a.total:h.results.length,h.shown=g}catch(v){console.error("[admin-search] fetch error:",v),h.results=[],h.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:v.message||""}),!1)}finally{h.loading=!1,h.searched=!0,N()}}var b=null;async function L(){if(b!==null)return b;try{var t=await fetch("/admin/session/current",{credentials:"same-origin"});if(t.ok){var s=await t.json();if(s.status==="live"&&s.started_at)return b=new Date(s.started_at*1e3).toISOString(),b}}catch{}return b="",""}function H(){clearTimeout(A),A=setTimeout(w,300)}function B(){if(h.results.length){var t=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];h.results.forEach(function(d){var e=[d.nickname||"",d.fingerprint||"",d.timestamp||"",d.status||"",d.text||"",d.delivery_reason||""].map(function(a){return'"'+String(a).replace(/"/g,'""')+'"'});t.push(e.join(","))});var s=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(s),r=document.createElement("a");r.href=n,r.download="danmu-search-"+(h.query||"export")+".csv",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}}function P(){var t=document.getElementById(y);if(t){var s=document.getElementById("admin-search-input");s&&(s.addEventListener("input",function(){h.query=s.value,H()}),s.addEventListener("keydown",function(r){r.key==="Enter"&&(clearTimeout(A),h.query=s.value,w())})),t.addEventListener("click",function(r){var d=r.target.closest("[data-search-scope]");if(d){h.scope=d.dataset.searchScope,t.querySelectorAll("[data-search-scope]").forEach(function(a){a.classList.toggle("is-active",a===d)}),h.query.trim()&&H();return}var e=r.target.closest("[data-search-blocked]");if(e){h.blockedOnly=!h.blockedOnly,e.classList.toggle("is-active",h.blockedOnly),h.shown=g,N();return}if(r.target.closest("[data-search-more]")){h.shown+=g,$();return}}),t.addEventListener("change",function(r){var d=r.target.closest("[data-search-who]");d&&(h.who=d.value||"",h.shown=g,N())});var n=document.getElementById("admin-search-export-btn");n&&n.addEventListener("click",B)}}function f(){var t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!(!t||!s)){var n=t.dataset.activeLeaf||"dashboard";s.style.display=n==="search"?"":"none"}}function c(){var t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",U()),P(),f())}function o(){if(window.DANMU_CONFIG?.session?.logged_in){var t=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),f()});t.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",f),document.addEventListener("admin-panel-rendered",function(){c(),f()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})()});var zt=ye(()=>{(function(){"use strict";let y="sec-api-tokens-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],h=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],A={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function U(i){if(!i)return"\u2014";try{let l=new Date(i);if(isNaN(l.getTime()))return String(i);let u=p=>String(p).padStart(2,"0");return`${l.getFullYear()}-${u(l.getMonth()+1)}-${u(l.getDate())}`}catch{return String(i)}}function C(i){if(!i)return null;try{let l=new Date(i);if(isNaN(l.getTime()))return null;let u=p=>String(p).padStart(2,"0");return`${l.getFullYear()}-${u(l.getMonth()+1)}-${u(l.getDate())} ${u(l.getHours())}:${u(l.getMinutes())}`}catch{return null}}function _(i){let l=Number(i);return isNaN(l)?"0":l.toLocaleString()}function m(i){if(!i||i.enabled===!1)return"inactive";if(!i.expires_at)return"active";try{let l=new Date(i.expires_at).getTime(),u=Date.now();if(l<u)return"expired";if(l-u<168*3600*1e3)return"expiring"}catch{}return"active"}function M(i){if(!i)return 1/0;try{return Math.floor((Date.now()-new Date(i).getTime())/864e5)}catch{return 1/0}}function F(i){return!i||!i.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':i.map(function(l){let u="admin-ui-pill admin-at-scope-badge";return l==="admin:*"?u+=" is-danger":l.startsWith("fire:")?u+=" is-warn":l.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${k(l)}</span>`}).join(" ")}function S(i){let l="admin-ui-dot admin-at-dot";return i==="active"?l+=" is-success":i==="expiring"?l+=" is-warn":i==="expired"?l+=" is-danger":l+=" is-muted",`<span class="${l}" aria-hidden="true"></span>`}function $(){let i=g.map(function(u){let p=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",I=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}">
          <input
            type="checkbox"
            id="adminAtScope_${u.id.replace(/[^a-z0-9]/g,"_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${k(u.id)}"
          >
          <span class="${I}">${k(u.badgeTxt)}</span>
          <span class="admin-at-scope-label">${k(ServerI18n.t(u.labelKey))}</span>
          ${p}
        </label>
      `}).join(""),l=h.map(function(u){let p=u.default?"checked":"";return`
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
                    ${i}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${l}
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
    `}async function N(){H(!0);try{let i=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!i.ok)throw new Error(`HTTP ${i.status}`);let l=await i.json();A.tokens=l.tokens||l||[],P()}catch(i){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:i.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function w(i){A.creating=!0,B(!0),s();try{let l=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok){let x=await l.json().catch(()=>({}));throw new Error(x.error||x.message||`HTTP ${l.status}`)}let u=await l.json(),p=u.token||u.raw_token||u.access_token||null;A.newTokenRaw=p,f(p),o(),await N(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(l){t(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:l.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:l.message||""}),!1)}finally{A.creating=!1,B(!1)}}async function b(i,l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${k(l||i)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(i)}`,{method:"DELETE"});if(!p.ok){let x=await p.json().catch(()=>({}));throw new Error(x.error||x.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await N()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function L(i,l){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(i)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:l})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(l?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await N()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function H(i){let l=document.querySelector("[data-at-list-loading]");l&&(l.hidden=!i)}function B(i){let l=document.getElementById("adminAtSubmitBtn");l&&(l.disabled=i,l.textContent=i?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function P(){let i=A.tokens,l=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!l||!u||!p)){if(!i||i.length===0){if(!l.firstElementChild&&window.AdminEmpty){let x=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});x.dataset.emptyKind="api-tokens",l.appendChild(x)}l.hidden=!1,u.hidden=!0;return}l.hidden=!0,u.hidden=!1,p.innerHTML=i.map(function(x){let I=m(x),E=S(I),D=x.scopes||x.scope||[],O=Array.isArray(D)?D:String(D).split(",").map(K=>K.trim()).filter(Boolean),T=M(x.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",R=I==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",j=I==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=x.last_used_at?`${C(x.last_used_at)||U(x.last_used_at)}<br><span class="admin-at-ip">${k(x.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${k(x.id||x.token_id||"")}">
          <td class="admin-at-td-label">
            ${E}
            <span class="admin-at-label-text">${k(x.label||x.name||"\u2014")}</span>
            ${T}${R}${j}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${k(x.prefix||x.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${F(O)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${_(x.usage_count||x.use_count)}</td>
          <td class="admin-at-td-created">${U(x.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${k(x.id||x.token_id||"")}"
              data-token-enabled="${x.enabled===!1?"0":"1"}"
              title="${x.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${x.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${k(x.id||x.token_id||"")}"
              data-token-label="${k(x.label||x.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function f(i){let l=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");l&&(l.hidden=!1),u&&i&&(u.value=i),p&&(p.style.opacity="0.5"),l&&l.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let i=document.getElementById("adminAtSuccessBanner"),l=document.getElementById("adminAtCreateForm");i&&(i.hidden=!0),l&&(l.style.opacity=""),A.newTokenRaw=null}function o(){let i=document.getElementById("adminAtCreateForm");i&&i.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let l=document.querySelector("input[name='adminAtExpiry'][value='90']");if(l){l.checked=!0;let p=l.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),s()}function t(i){let l=document.getElementById("adminAtFormError");l&&(l.hidden=!1,l.textContent=i)}function s(){let i=document.getElementById("adminAtFormError");i&&(i.hidden=!0,i.textContent="")}function n(){let i=document.getElementById("adminAtLabel"),l=i?i.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(E){u.push(E.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),x=p?p.value:"90",I=x==="null"?null:parseInt(x,10);return{label:l,scopes:u,expiry_days:I}}function r(i){return i.label?i.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!i.scopes||i.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function d(i){if(i.preventDefault(),A.creating)return;s();let l=n(),u=r(l);if(u){t(u);return}w(l)}function e(){let i=A.newTokenRaw;if(!i)return;let l=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(i).then(function(){l&&(l.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){l.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),l&&(l.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){l.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function a(){let i=document.getElementById(y);if(!i)return;i.addEventListener("click",function(x){let I=x.target.closest("[data-at-action]");if(I){let D=I.dataset.atAction;if(D==="revoke"){let O=I.dataset.tokenId,W=I.dataset.tokenLabel;b(O,W)}else if(D==="toggle"){let O=I.dataset.tokenId,W=I.dataset.tokenEnabled==="1";L(O,!W)}else D==="copy-token"&&e();return}let E=x.target.closest(".admin-at-expiry-btn");E&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(D){D.classList.remove("is-active")}),E.classList.add("is-active"))});let l=document.getElementById("adminAtScope_admin__");l&&l.addEventListener("change",function(){let x=document.getElementById("adminAtAdminWarn");x&&(x.hidden=!l.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",d);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let x=p.closest(".admin-at-expiry-btn");x&&x.classList.add("is-active")}}function v(){let i=document.getElementById("settings-grid");!i||document.getElementById(y)||(i.insertAdjacentHTML("beforeend",$()),a(),N())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&v()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&v()})})()});var Vt=ye(()=>{(function(){"use strict";let y="sec-wcag-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(o){return String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})};function g(o){let t=o.replace(/^#/,""),s=t.length===3?t.split("").map(function(n){return n+n}).join(""):t;return[parseInt(s.slice(0,2),16)/255,parseInt(s.slice(2,4),16)/255,parseInt(s.slice(4,6),16)/255]}function h(o){return o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)}function A(o){let t=g(o);return .2126*h(t[0])+.7152*h(t[1])+.0722*h(t[2])}function U(o,t){let s=A(o),n=A(t),r=Math.max(s,n),d=Math.min(s,n);return(r+.05)/(d+.05)}function C(o){return o>=7?"AAA":o>=4.5?"AA":o>=3?"AA-large":"fail"}function _(o,t){let s=A(t),n=[],r=g(o);for(let d=.05;d<=.6&&n.length<3;d+=.05){let a="#"+r.map(function(i){return Math.min(1,i+d)}).map(function(i){return Math.round(i*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),v=U(a,t);v>=4.5&&n.push({hex:a,ratio:v})}return n}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},F="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",S={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function $(){let o=m.filter(function(n){return C(U(n.fg,n.bg))!=="fail"}).length,t=m.length-o,s=Math.round(o/m.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
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
              ${N("PAIRS",m.length,ServerI18n.t("wcagStatPairsLabel"))}
              ${N("PASS RATE",s+"%",ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel",{rate:s})}">
                <div class="admin-wcag-meter-fill" style="width:${s}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${F}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${m.map(function(n,r){return w(n,r)}).join("")}
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
      </div>`}function N(o,t,s){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${k(String(t))}</span>
        <span class="hud-stat-tile-label">${k(s)}</span>
      </div>`}function w(o,t){let s=U(o.fg,o.bg),n=C(s),r=S[n],d=ServerI18n.t(o.nameKey),e=r.labelKey?ServerI18n.t(r.labelKey):r.label,a=n==="fail"?ServerI18n.t("wcagWarnFail"):n==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${F}"
        data-wcag-pair-idx="${t}" role="button" tabindex="0"
        aria-label="${k(ServerI18n.t("wcagPairAriaLabel",{name:d,ratio:s.toFixed(2),level:e.slice(2)}))}">
        <span class="admin-wcag-pair-name">${k(d)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${k(o.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${k(o.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${k(o.fg)}">${k(o.fg)} / ${k(o.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${s.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${r.mod}">${e}</span>
        ${a?`<span class="admin-wcag-warn">\u26A0 ${a}</span>`:""}
      </div>`}function b(){let o=U(M.fg,M.bg),t=C(o),s=S[t],n=s.labelKey?ServerI18n.t(s.labelKey):s.label,r=_(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${L(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${L(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${k(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${k(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${o.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${s.mod}">${n}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),o>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),o>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),o>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),o>=4.5)}
      </div>

      ${r.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${r.map(function(d){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${k(d.hex)}"
                title="${k(ServerI18n.t("wcagSuggApplyTitle",{ratio:d.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${k(M.bg)};color:${k(d.hex)}">${k(d.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${d.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function L(o,t,s){let n="wcag-tester-"+s;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${n}">${k(o)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${k(t)}"></span>
          <input type="text" id="${n}" class="admin-ui-input" data-wcag-tester-${s}
            aria-label="${k(ServerI18n.t("wcagHexAria",{label:o}))}"
            value="${k(t)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(o,t){return`<div class="admin-wcag-level ${t?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${t?"\u2713":"\u2717"}</span>
      <span>${k(o)}</span>
    </div>`}function B(){let o=document.getElementById(y);o&&(o.addEventListener("click",function(t){let s=t.target.closest("[data-wcag-pair-idx]");if(s){P(s);return}let n=t.target.closest("[data-wcag-sugg]");n&&(M.fg=n.dataset.wcagSugg,f())}),o.addEventListener("keydown",function(t){if(t.key!=="Enter"&&t.key!==" "&&t.key!=="Spacebar")return;let s=t.target.closest("[data-wcag-pair-idx]");s&&(t.preventDefault(),P(s))}),o.addEventListener("input",function(t){let s=t.target.closest("[data-wcag-tester-fg]"),n=t.target.closest("[data-wcag-tester-bg]");s&&/^#[0-9A-Fa-f]{6}$/.test(s.value)&&(M.fg=s.value.toUpperCase(),f()),n&&/^#[0-9A-Fa-f]{6}$/.test(n.value)&&(M.bg=n.value.toUpperCase(),f())}))}function P(o){let t=m[parseInt(o.dataset.wcagPairIdx,10)];t&&(M.fg=t.fg,M.bg=t.bg,f())}function f(){let o=document.querySelector("[data-wcag-tester]");o&&(o.innerHTML=b())}function c(){let o=document.getElementById("settings-grid");!o||document.getElementById(y)||(o.insertAdjacentHTML("beforeend",$()),B())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&c()})})()});var Jt=ye(()=>{(function(){"use strict";let y="danmu.onboarding.done",k="admin-onboarding-root",U=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],C=0,_=!1;window.AdminOnboarding={start:$,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let m=new Set(["live","dashboard"]);function M(){if(_||window.AdminOnboarding.isDone()||!m.has(F()))return;let o=()=>!!document.querySelector(".admin-session-banner-live");o()||setTimeout(()=>{_||window.AdminOnboarding.isDone()||o()||m.has(F())&&$()},1200)}function F(){let o=document.querySelector(".admin-dash-grid");return o&&o.dataset.activeRoute||"live"}function S(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&$()}function $(){_||(_=!0,C=0,H())}function N(o){if(!_)return;_=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",L),window.removeEventListener("resize",B);let t=document.getElementById(k);if(t&&t.remove(),o)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function w(){C<U.length-1?(C++,B()):N(!0)}function b(o){let t=o.target.closest("[data-ob-action]");t&&(o.stopPropagation(),t.dataset.obAction==="next"?w():t.dataset.obAction==="skip"&&N(!1))}function L(o){_&&o.key==="Escape"&&(o.preventDefault(),N(!1))}function H(){let o=document.getElementById(k);o&&o.remove();let t=document.createElement("div");t.id=k,t.className="admin-ob-root",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","false"),t.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(t),document.body.addEventListener("click",b),document.addEventListener("keydown",L),window.addEventListener("resize",B),B()}function B(){let o=document.getElementById(k);if(!o)return;let t=U[C],s=U.length,n=f(t.target),r=window.innerWidth,d=window.innerHeight,e="";n?e='<div class="admin-ob-spot" style="left:'+(n.left-8)+"px;top:"+(n.top-8)+"px;width:"+(n.width+16)+"px;height:"+(n.height+16)+'px;"></div>':e='<div class="admin-ob-scrim"></div>';let a=(r-360)/2,v=d/2-110,i="none";if(n){let x=n.left+n.width/2;t.side==="top"?(a=x-360/2,v=n.top-16,i="bottom"):t.side==="right"?(a=n.right+16+8,v=n.top,i="left"):(a=x-360/2,v=n.bottom+16+8,i="top"),a=Math.max(16,Math.min(r-360-16,a))}let l=U.map(function(x,I){return'<span class="admin-ob-progress-item'+(I===C?" is-current":"")+'">'+(I+1)+" "+c(ServerI18n.t(x.labelKey))+"</span>"+(I<s-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");o.innerHTML=e+'<div class="admin-ob-bubble" data-arrow="'+i+'" style="left:'+a+"px;top:"+v+'px"><div class="admin-ob-count">'+(C+1)+" / "+s+'</div><div class="admin-ob-title">'+c(ServerI18n.t(t.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(t.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(C===s-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+l+"</div></div>";let u=o.querySelector(".admin-ob-bubble");if(!u||!n)return;let p=u.offsetHeight;if(t.side==="top")u.style.top=Math.max(16,n.top-16-8-p)+"px";else if(v+p>d-16){let x=n.top-16-8-p;x>=16?(u.style.top=x+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,d-p-16)+"px",u.setAttribute("data-arrow","none"))}P(u,n)}function P(o,t){let s=o.getAttribute("data-arrow");if(s==="none")return;let n=o.getBoundingClientRect(),r=s==="top"||s==="bottom",d=r?t.left+t.width/2-n.left:t.top+t.height/2-n.top,e=r?n.width:n.height,a=Math.max(16,Math.min(e-32,d-8));o.style.setProperty("--ob-arrow",a+"px")}function f(o){if(!o)return null;let t=document.querySelector(o);if(!t)return null;let s=t.getBoundingClientRect();return s.width<8||s.height<8||s.bottom<0||s.top>window.innerHeight?null:s}function c(o){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(o):o==null?"":String(o).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",S),S(),window.addEventListener("hashchange",function(){m.has(F())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var nn=ye(()=>{var Fi=be(Ne()),Di=be(Pe()),Mi=be(Re()),Ni=be(Oe()),Pi=be(qe()),Ri=be(He()),Oi=be(je()),qi=be(Ue()),Hi=be(Ke()),ji=be(We()),Ui=be(Ge()),Ki=be(ze()),Wi=be(Ve()),Gi=be(Je()),zi=be(Ye()),Vi=be(Qe()),Ji=be(Xe()),Yi=be(Ze()),Qi=be(et()),Xi=be(tt()),Zi=be(nt()),es=be(at()),ts=be(it()),ns=be(st()),as=be(ot()),is=be(rt()),ss=be(dt()),os=be(lt()),rs=be(ct()),ds=be(ut()),ls=be(mt()),cs=be(pt()),us=be(vt()),ms=be(ft()),ps=be(ht()),vs=be(gt()),fs=be(yt()),hs=be(bt()),gs=be(wt()),ys=be(St()),bs=be(kt()),ws=be(It()),Ss=be(Tt()),ks=be(_t()),Is=be(Et()),Ts=be($t()),_s=be(xt()),Es=be(Lt()),$s=be(At()),xs=be(Ct()),Ls=be(Bt()),As=be(Ft()),Cs=be(Dt()),Bs=be(Mt()),Fs=be(Nt()),Ds=be(Pt()),Ms=be(Rt()),Ns=be(Ot()),Ps=be(qt()),Rs=be(Ht()),Os=be(jt()),qs=be(Ut()),Hs=be(Kt()),js=be(Wt()),Us=be(Gt()),Ks=be(zt()),Ws=be(Vt()),Gs=be(Jt())});nn();})();
