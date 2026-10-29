/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html
 * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */
(()=>{var Yt=Object.create;var Me=Object.defineProperty;var Qt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,en=Object.prototype.hasOwnProperty;var ve=(y,k)=>()=>{try{return k||y((k={exports:{}}).exports,k),k.exports}catch(g){throw k=0,g}};var tn=(y,k,g,f)=>{if(k&&typeof k=="object"||typeof k=="function")for(let x of Xt(k))!en.call(y,x)&&x!==g&&Me(y,x,{get:()=>k[x],enumerable:!(f=Qt(k,x))||f.enumerable});return y};var he=(y,k,g)=>(g=y!=null?Yt(Zt(y)):{},tn(k||!y||!y.__esModule?Me(g,"default",{value:y,enumerable:!0}):g,y));var Ne=ve(()=>{(function(){"use strict";var y=4,k=2500,g=3e3,f=Object.create(null);function x(){return Date.now()}function U(S,b){return(b?"ok:":"err:")+S}function A(S,b){return"var("+S+", "+b+")"}function _(S){return S?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>'}function m(S){for(var b=Array.prototype.slice.call(S.children);b.length>y;){var C=b.shift();C&&C.parentNode&&C.parentNode.removeChild(C)}}function M(S,b){S.remaining=b,S.startedAt=x(),S.timer=setTimeout(function(){E(S)},b)}function F(S){S.timer&&(clearTimeout(S.timer),S.timer=null,S.remaining=Math.max(600,S.remaining-(x()-S.startedAt)))}function w(S){S.timer||!S.el.parentNode||M(S,S.remaining)}function E(S){clearTimeout(S.timer),S.timer=null,S.key&&f[S.key]===S&&delete f[S.key];var b=S.el;!b||!b.parentNode||(b.style.opacity="0",b.style.transform="translateX(8px)",setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},180))}function P(S,b){var C=document.getElementById("toast-container");if(C){b=b!==!1;var H=U(String(S),b),B=f[H];if(B&&B.el.parentNode&&x()-B.startedAt<k){B.count+=1,B.countEl&&(B.countEl.textContent="\xD7"+B.count,B.countEl.hidden=!1),F(B),w(B);return}var N=b?A("--color-ink-success","#639922"):A("--color-ink-error","#e24b4a"),v=A("--color-surface","#ffffff"),c=A("--color-text-primary","#1a1a1a"),r=A("--color-border-soft","rgba(0,0,0,.12)"),n=document.createElement("div");n.style.cssText=["display:flex","align-items:center","gap:10px","min-width:220px","max-width:340px","padding:10px 12px","background:"+v,"color:"+c,"border:1px solid "+r,"border-left:3px solid "+N,"border-radius:10px","box-shadow:0 8px 24px rgba(0,0,0,.18)","font-size:13px","line-height:1.45","opacity:0","transform:translateX(8px)","transition:opacity 180ms ease-out, transform 180ms ease-out","pointer-events:auto"].join(";");var d=document.createElement("span");d.style.cssText="display:inline-flex;color:"+N+";flex:0 0 auto",d.innerHTML=_(b);var a=document.createElement("span");a.style.cssText="flex:1 1 auto;min-width:0;overflow-wrap:anywhere",a.textContent=S;var l=document.createElement("span");l.hidden=!0,l.style.cssText="flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65",n.appendChild(d),n.appendChild(a),n.appendChild(l),C.appendChild(n),m(C),requestAnimationFrame(function(){n.style.opacity="1",n.style.transform="translateX(0)"});var i={key:H,el:n,countEl:l,count:1,timer:null,remaining:g,startedAt:x()};f[H]=i,M(i,g),n.addEventListener("mouseenter",function(){F(i)}),n.addEventListener("mouseleave",function(){w(i)}),n.addEventListener("focusin",function(){F(i)}),n.addEventListener("focusout",function(){w(i)})}}window.showToast=P})()});var Pe=ve(()=>{(function(){"use strict";var y="admin-details-open-state";function k(){try{return JSON.parse(localStorage.getItem(y))||{}}catch{return{}}}function g(P){try{localStorage.setItem(y,JSON.stringify(P))}catch{}}var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(P){return P==null?"":String(P).replace(/[&<>"']/g,function(S){return f[S]})}function U(){var P=document.querySelector("script[nonce]");return P&&P.nonce||""}function A(P,S){var b=U();return"<style"+(P?' id="'+x(P)+'"':"")+(b?' nonce="'+x(b)+'"':"")+">"+(S||"")+"</style>"}var _='<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="vertical-align:middle" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>',m=[],M=null;function F(P){if(!P)return!1;for(var S=P;S&&S!==document.documentElement;S=S.parentElement)if(S.style&&S.style.display==="none")return!1;return!!(P.offsetParent||P.getClientRects().length)}function w(){var P=document.hidden;m.forEach(function(S){var b=typeof S.el=="function"?S.el():S.el,C=!P&&F(b);if(C&&!S.timer){if(S.immediate!==!1)try{S.tick()}catch{}S.timer=setInterval(S.tick,S.intervalMs)}else!C&&S.timer&&(clearInterval(S.timer),S.timer=0)})}function E(P){var S={el:P.el,intervalMs:P.intervalMs,tick:P.tick,immediate:P.immediate,timer:0};return m.push(S),M||(M=new MutationObserver(function(){w()}),M.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["style","class","hidden"]}),window.addEventListener("hashchange",w),document.addEventListener("visibilitychange",w),document.addEventListener("admin-panel-rendered",w)),w(),function(){S.timer&&clearInterval(S.timer);var C=m.indexOf(S);C!==-1&&m.splice(C,1)}}window.AdminUtils={DETAILS_STATE_KEY:y,loadDetailsState:k,saveDetailsState:g,escapeHtml:x,cspNonce:U,styleTag:A,closeIcon:_,pollWhileVisible:E}})()});var Re=ve(()=>{(function(){"use strict";function y(k,g,f,x){let U=k.querySelector("[data-route-breadcrumb]");if(!U)return;let A=Array.from(k.querySelectorAll(".admin-dash-nav-row[data-route]")),_=A.find(C=>C.dataset.route===g)||A.find(C=>C.dataset.route===f);if(!_){U.replaceChildren(),U.hidden=!0;return}let m="",M=_.previousElementSibling;for(;M;){if(M.classList.contains("admin-dash-nav-label")){m=(M.querySelector("[data-i18n]")||M).textContent.trim();break}M=M.previousElementSibling}let w=(_.querySelector("[data-i18n]")||_.querySelector("span:nth-child(2)")||_).textContent.trim(),E=x?k.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']"):null,P=E?(E.querySelector(".admin-tabs-btn-label")||E).textContent.trim():"",S=[m,w,P].filter(Boolean),b=document.createDocumentFragment();S.forEach((C,H)=>{if(H){let v=document.createElement("span");v.className="admin-dash-breadcrumb-sep",v.setAttribute("aria-hidden","true"),v.textContent="\u203A",b.appendChild(v)}let B=document.createElement("span"),N=H===S.length-1;B.className="admin-dash-breadcrumb-item"+(N?" is-current":""),N&&B.setAttribute("aria-current","page"),B.textContent=C,b.appendChild(B)}),U.replaceChildren(b),U.hidden=S.length===0}window.AdminBreadcrumb={render:y}})()});var Oe=ve(()=>{(function(y){"use strict";let k={moderation:{defaultTab:"blacklist",tabs:[{slug:"queue",labelKey:"tabModQueue",en:"QUEUE",section:"sec-modqueue"},{slug:"blacklist",labelKey:"tabModBlockedWords",en:"WORDS",sections:["sec-blacklist","sec-filters"]},{slug:"bans",labelKey:"tabModBlockedViewers",en:"VIEWERS",sections:["sec-modbans-overview","sec-fingerprints"]},{slug:"ratelimit",labelKey:"tabModSendLimits",en:"LIMITS",section:"sec-ratelimit"}]},assets:{defaultTab:"emojis",tabs:[{slug:"emojis",labelKey:"tabAssetsEmojis",en:"EMOJIS",section:"sec-emojis"},{slug:"stickers",labelKey:"tabAssetsStickers",en:"STICKERS",section:"sec-stickers"},{slug:"fonts",labelKey:"tabAssetsFonts",en:"FONTS",section:"sec-fonts"},{slug:"sounds",labelKey:"tabAssetsSounds",en:"SOUNDS",section:"sec-sounds"}]},integrations:{defaultTab:"webhooks",tabs:[{slug:"webhooks",labelKey:"tabExtWebhooks",en:"WEBHOOKS",section:"sec-webhooks"},{slug:"plugins",labelKey:"tabExtPlugins",en:"PLUGINS",sections:["sec-plugins","sec-extensions-overview"]},{slug:"api-tokens",labelKey:"tabExtApiKeys",en:"API KEYS",section:"sec-api-tokens-overview"},{slug:"scheduler",labelKey:"tabExtScheduler",en:"SCHEDULER",section:"sec-scheduler"}]},system:{defaultTab:"overview",tabs:[{slug:"overview",labelKey:"tabSystemOverview",en:"OVERVIEW",section:"sec-system-overview"},{slug:"security",labelKey:"tabSystemSecurity",en:"SECURITY",section:"admin-security-v2-page"},{slug:"firetoken",label:"Fire Token",en:"FIRETOKEN",section:"sec-firetoken-overview"},{slug:"wcag",labelKey:"tabSystemWcag",en:"WCAG",section:"sec-wcag-overview"},{slug:"about",labelKey:"tabSystemAbout",en:"ABOUT",section:"sec-about-overview"}]},history:{defaultTab:"sessions",tabs:[{slug:"sessions",labelKey:"tabHistorySessions",en:"SESSIONS",section:"sec-sessions-overview"},{slug:"audience",labelKey:"tabHistoryAudience",en:"AUDIENCE",section:"sec-audience-overview"},{slug:"search",labelKey:"tabHistorySearch",en:"SEARCH",section:"sec-search-overview"},{slug:"audit",labelKey:"tabHistoryAudit",en:"AUDIT",section:"sec-audit-overview"}]}};function g(w){return Array.isArray(w.sections)?w.sections:w.section?[w.section]:[]}function f(w){return!!k[w]}function x(w){return k[w]||null}let U={moderation:{filters:"blacklist",fingerprints:"bans"}};function A(w,E){let P=k[w];if(!P)return null;let S=H=>P.tabs.some(B=>B.slug===H),b=U[w]?.[E];if(b&&S(b))return b;if(E&&S(E))return E;let C=y.AdminRouter?.tabMemory?.get?.(w);return C&&S(C)?C:P.defaultTab}function _(w,E,P){let S=k[w];if(!S)return null;let b=document.createElement("div");return b.className="admin-tabs-strip",b.dataset.nav=w,b.setAttribute("role","tablist"),b.setAttribute("aria-label",w+" tabs"),S.tabs.forEach(C=>{let H=document.createElement("button");H.type="button",H.className="admin-tabs-btn"+(C.slug===E?" is-active":""),H.dataset.nav=w,H.dataset.tab=C.slug,H.setAttribute("role","tab"),H.setAttribute("aria-selected",C.slug===E?"true":"false");let B=document.createElement("span");B.className="admin-tabs-btn-label",B.textContent=C.labelKey?ServerI18n.t(C.labelKey):C.label,H.appendChild(B);let N=document.createElement("span");N.className="admin-tabs-btn-count",N.dataset.tabCount=C.slug,N.textContent=m[w]&&m[w][C.slug]?m[w][C.slug]:"",H.appendChild(N),H.addEventListener("click",()=>{typeof P?.onSelect=="function"&&P.onSelect(C.slug)}),b.appendChild(H)}),b}let m={};function M(w,E,P){if(!k[w])return;m[w]=m[w]||{},m[w][E]=P==null?"":String(P);let S=document.querySelector('.admin-tabs-strip[data-nav="'+w+'"] [data-tab-count="'+E+'"]');S&&(S.textContent=m[w][E])}function F(w,E,P){let S=k[w];!S||!P||S.tabs.forEach(b=>{let C=b.slug===E;g(b).forEach(H=>{let B=P.querySelector("#"+H);B&&(B.style.display=C?"":"none")})})}y.AdminTabs={hasTabsFor:f,getConfig:x,resolveActiveTab:A,renderTabStrip:_,applyTabSectionVisibility:F,setTabCount:M}})(window)});var qe=ve(()=>{(function(y,k){"use strict";let g="data-quick-action-host",f="admin-quick-action-bar";function x(M){if(M?.host instanceof HTMLElement)return M.host;let F=k.querySelector(".admin-dash-main");if(!F)return k.body;let w=F.querySelector(`[${g}]`);if(!w){w=k.createElement("div"),w.setAttribute(g,"");let E=F.querySelector(".admin-dash-topbar"),S=F.querySelector("[data-admin-tabs-host]")||E;S&&S.parentNode?S.insertAdjacentElement("afterend",w):F.prepend(w)}return w}function U(M,F){typeof y.showToast=="function"&&y.showToast(M,F!==!1)}function A({label:M,undoLabel:F,onUndo:w,windowMs:E}){let P=x(),S=P.querySelector("."+f);S&&S.remove();let b=k.createElement("div");b.className=f,b.setAttribute("role","status"),b.setAttribute("aria-live","polite");let C=k.createElement("span");C.className=f+"-text",C.textContent="\u2713 "+M,b.appendChild(C);let H=k.createElement("button");H.type="button",H.className=f+"-undo",H.textContent="\u21B6 "+(F||ServerI18n.t("qaUndoLabel")),b.appendChild(H);let B=()=>{b.classList.add("is-leaving"),setTimeout(()=>b.remove(),200)},N=setTimeout(B,E||5e3);return H.addEventListener("click",async()=>{clearTimeout(N),H.disabled=!0,H.textContent=ServerI18n.t("qaUndoing");try{await w(),U(ServerI18n.t("qaUndone"),!0)}catch(v){U(ServerI18n.t("qaUndoFailed",{msg:v?.message||String(v)}),!1)}finally{B()}}),P.appendChild(b),requestAnimationFrame(()=>b.classList.add("is-entering")),b}function _(M){if(!M||typeof M!="object")return;let F=M.label||ServerI18n.t("qaDone");M.toast!==!1&&U(F,!0),M.undo&&typeof M.undo.run=="function"&&A({label:F,undoLabel:M.undo.label,onUndo:M.undo.run,windowMs:M.undo.window})}function m(){k.querySelectorAll("."+f).forEach(M=>M.remove())}y.AdminQuickAction={fire:_,dismissAll:m}})(window,document)});var He=ve(()=>{(function(){"use strict";let y="admin-hud-modal-root",k=null,g=null,f='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function x(){let m=document.getElementById(y);return m?Array.prototype.slice.call(m.querySelectorAll(f)).filter(M=>M.offsetParent!==null||M===document.activeElement):[]}function U(m){let M=document.getElementById(y);if(M&&M.remove(),k&&(k(m),k=null),document.removeEventListener("keydown",A),g&&typeof g.focus=="function")try{g.focus()}catch{}g=null}function A(m){if(m.key==="Escape"){m.preventDefault(),U(!1);return}if(m.key==="Tab"){let M=x();if(!M.length){m.preventDefault();return}let F=M[0],w=M[M.length-1],E=document.activeElement;m.shiftKey?(E===F||!M.includes(E))&&(m.preventDefault(),w.focus()):(E===w||!M.includes(E))&&(m.preventDefault(),F.focus())}}function _(m){return new Promise(M=>{k&&U(!1),k=M,g=document.activeElement;let{icon:F="\u26A0",title:w=ServerI18n.t("hudConfirmTitle"),subtitle:E="",severity:P="warn",body:S="",titleText:b,bodyText:C,confirmLabel:H=ServerI18n.t("hudConfirmLabel"),cancelLabel:B=ServerI18n.t("cancel"),width:N=480}=m||{},v=document.createElement("div");v.id=y,v.className=`admin-hud-modal admin-hud-modal--${P}`,v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-hud-modal-title");let c=E?`<div class="admin-hud-modal__subtitle">${E}</div>`:"",r=typeof S=="string"?S:"",n=typeof S!="string"&&S&&S.nodeType;if(v.innerHTML=`
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${N}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${F}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${w}</div>
              ${c}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${r}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${B}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${H}</button>
          </div>
        </div>`,b!=null){let d=v.querySelector(".admin-hud-modal__title");d&&(d.textContent=String(b))}if(C!=null){let d=v.querySelector("[data-modal-body]");d&&(d.textContent=String(C))}if(n){let d=v.querySelector("[data-modal-body]");d.innerHTML="",d.appendChild(S)}v.addEventListener("click",function(d){let a=d.target.closest("[data-modal-action]");a&&(d.stopPropagation(),U(a.dataset.modalAction==="confirm"))}),document.body.appendChild(v),document.addEventListener("keydown",A),requestAnimationFrame(()=>{v.querySelector(".admin-hud-modal__btn--confirm")?.focus()})})}window.HudConfirm={open:_}})()});var je=ve(()=>{(function(){"use strict";var y=8,k=30;function g(P,S){return window.ServerI18n?window.ServerI18n.t(P,S):P}function f(P,S){return P?P.length>S?P.slice(0,S)+"\u2026":P:""}function x(P){return g(P==="keyword"?"blockLabelKeyword":"blockLabelFingerprint")}function U(P,S){return P==="keyword"?f(S,k):S.slice(0,y)}async function A(P,S,b){if(!S)return{ok:!1,error:"empty-value"};try{var C={type:P==="keyword"?"keyword":"fingerprint",value:S};b&&(C.reason=b);var H=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function _(P,S,b){if(!P)return{ok:!1,error:"empty-fingerprint"};var C=parseInt(S||0,10)||0;try{var H=await window.csrfFetch("/admin/modbans",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target_kind:"fingerprint",target:P,duration_s:C,reason:b||"",kind:"ban"})});return H.ok?{ok:!0}:{ok:!1,error:"HTTP "+H.status}}catch(B){return{ok:!1,error:B&&B.message||"network"}}}async function m(P){if(!P)return{ok:!1,error:"empty-message-id"};try{var S=await window.csrfFetch("/admin/overlay/recall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message_id:P})});return S.ok?{ok:!0}:{ok:!1,error:"HTTP "+S.status}}catch(b){return{ok:!1,error:b&&b.message||"network"}}}function M(P,S){return window.HudConfirm?window.HudConfirm.open({icon:"\u2298",title:g("lfBlockTitle"),subtitle:g("cfmSubBlockFuture"),severity:"danger",bodyText:g("blockConfirm").replace("{label}",x(P)).replace("{display}",U(P,S)),confirmLabel:g("lfBlockTitle")}):Promise.resolve(!0)}function F(P,S,b){window.showToast&&window.showToast(P?g(S,b||{}):g("blockFailed"),!!P)}async function w(P,S){if(!P||(S=S||{},!S.skipConfirm&&!await M("keyword",P)))return!1;var b=await A("keyword",P);return F(b.ok,"blockFallback",{label:x("keyword"),display:U("keyword",P)}),b.ok}async function E(P,S){if(!P||(S=S||{},!S.skipConfirm&&!await M("fingerprint",P)))return!1;var b=await A("fingerprint",P,S.reason);return F(b.ok,"blockFallback",{label:x("fingerprint"),display:U("fingerprint",P)}),b.ok}window.AdminModeration={callBlock:A,banFingerprint:_,recall:m,blockKeyword:w,blockFingerprint:E}})()});var Ue=ve(()=>{(function(){"use strict";function k(_){let m=document.createElement("div");return m.className="admin-skel-slow",m.hidden=!0,m.textContent=window.ServerI18n&&ServerI18n.t("skeletonSlowHint")||"\u9023\u7DDA\u8F03\u6162\u2026",_.appendChild(m),setTimeout(function(){m.isConnected&&(m.hidden=!1)},3e3),_}function g(_,m){let M=document.createElement("div");if(M.className="admin-skel "+(_||""),m)for(let F in m)M.style[F]=m[F];return M}function f({rows:_=8}={}){let m=document.createElement("div");m.className="admin-skel-card admin-skel-list";let M=document.createElement("div");M.className="admin-skel-list__head",[60,80,140,200,80].forEach(F=>{M.appendChild(g("admin-skel-bar",{width:F+"px",height:"10px"}))}),m.appendChild(M);for(let F=0;F<_;F++){let w=document.createElement("div");w.className="admin-skel-list__row",w.appendChild(g("admin-skel-circle",{width:"24px",height:"24px"}));let E=document.createElement("div");E.className="admin-skel-list__col",E.appendChild(g("admin-skel-bar",{width:50+F*13%40+"%",height:"10px"})),E.appendChild(g("admin-skel-bar",{width:30+F*7%30+"%",height:"8px"})),w.appendChild(E),w.appendChild(g("admin-skel-bar",{width:"60px",height:"10px"})),m.appendChild(w)}return k(m)}function x({cols:_=4}={}){let m=document.createElement("div");m.className="admin-skel-stats",m.style.gridTemplateColumns=`repeat(${_}, 1fr)`;for(let M=0;M<_;M++){let F=document.createElement("div");F.className="admin-skel-card admin-skel-tile",F.appendChild(g("admin-skel-bar",{width:"60px",height:"8px"})),F.appendChild(g("admin-skel-bar",{width:"80px",height:"28px"})),F.appendChild(g("admin-skel-bar",{width:"100%",height:"18px"})),F.appendChild(g("admin-skel-bar",{width:"90px",height:"8px"})),m.appendChild(F)}return k(m)}function U(){let _=document.createElement("div");_.className="admin-skel-card admin-skel-chart";let m=document.createElement("div");m.className="admin-skel-chart__head",m.appendChild(g("admin-skel-bar",{width:"120px",height:"10px"}));let M=document.createElement("span");M.style.flex="1",m.appendChild(M),m.appendChild(g("admin-skel-bar",{width:"80px",height:"10px"})),_.appendChild(m);let F=document.createElement("div");F.className="admin-skel-chart__body";let w=document.createElement("div");w.className="admin-skel-chart__y",[100,75,50,25,0].forEach(()=>w.appendChild(g("admin-skel-bar",{width:"24px",height:"6px"}))),F.appendChild(w);let E=document.createElement("div");return E.className="admin-skel-chart__bars",[38,55,22,70,48,33,62,45,78,28,52,41,67,31,58,49,73,36,51,64,29,47,56,39].forEach(S=>E.appendChild(g("admin-skel-bar admin-skel-chart__bar",{height:S+"%"}))),F.appendChild(E),_.appendChild(F),k(_)}function A(_,m){let M={listRows:f,statsTiles:x,chart:U}[_];return M?M(m||{}).outerHTML:""}window.AdminSkeletons={listRows:f,statsTiles:x,chart:U,html:A}})()});var Ke=ve(()=>{(function(){"use strict";let y={cyan:"var(--color-ink-accent)",amber:"var(--color-ink-warning)",lime:"var(--color-ink-success)",crimson:"var(--color-ink-error)",textDim:"var(--color-text-muted)"},k={sessions:{icon:"\u25F7",titleKey:"emptySessionsTitle",descKey:"emptySessionsDesc",actionLabelKey:"emptySessionsAction",action:()=>{location.hash="#/overlay"},accent:y.cyan},polls:{icon:"\u22B7",titleKey:"emptyPollsTitle",descKey:"emptyPollsDesc",actionLabelKey:"emptyPollsAction",action:()=>{location.hash="#/polls"},accent:y.amber},audience:{icon:"\u25C9",titleKey:"emptyAudienceTitle",descKey:"emptyAudienceDesc",accent:y.lime},events:{icon:"\u2299",titleKey:"emptyEventsTitle",descKey:"emptyEventsDesc",accent:y.lime},messages:{icon:"\u2261",titleKey:"emptyMessagesTitle",descKey:"emptyMessagesDesc",accent:y.cyan},blacklist:{icon:"\u2298",titleKey:"emptyBlacklistTitle",descKey:"emptyBlacklistDesc",actionLabelKey:"emptyBlacklistAction",action:()=>{location.hash="#/moderation/blacklist"},accent:y.crimson},filters:{icon:"\u26A1",titleKey:"emptyFiltersTitle",descKey:"emptyFiltersDesc",actionLabelKey:"emptyFiltersAction",action:()=>{location.hash="#/moderation"},accent:y.amber},scheduler:{icon:"\u23F0",titleKey:"emptySchedulerTitle",descKey:"emptySchedulerDesc",actionLabelKey:"emptySchedulerAction",action:()=>{location.hash="#/system/scheduler"},accent:y.cyan}};function g(x){let{icon:U="\xB7",title:A="",desc:_="",accent:m=y.cyan,ctaAccent:M,actionLabel:F,action:w,extra:E}=x||{},P=document.createElement("div");P.className="admin-empty",P.dataset.empty="1",P.style.setProperty("--admin-empty-accent",m),M&&P.style.setProperty("--admin-empty-cta",M);let S=document.createElement("div");if(S.className="admin-empty__icon",S.textContent=U,P.appendChild(S),A){let b=document.createElement("div");b.className="admin-empty__title",b.textContent=A,P.appendChild(b)}if(_){let b=document.createElement("div");b.className="admin-empty__desc",b.textContent=_,P.appendChild(b)}if(F){let b=document.createElement("button");b.type="button",b.className="admin-empty__btn",b.textContent=F,typeof w=="function"&&b.addEventListener("click",w),P.appendChild(b)}if(E){let b=document.createElement("div");b.className="admin-empty__extra",typeof E=="string"?b.innerHTML=E:b.appendChild(E),P.appendChild(b)}return P}function f(x){let U=k[x];if(!U)return g({title:ServerI18n.t("emptyNoData"),desc:""});let A=Object.assign({},U,{title:U.titleKey?ServerI18n.t(U.titleKey):U.title,desc:U.descKey?ServerI18n.t(U.descKey):U.desc,actionLabel:U.actionLabelKey?ServerI18n.t(U.actionLabelKey):U.actionLabel});return g(A)}window.AdminEmpty={render:f,renderCustom:g,PRESETS:k}})()});var We=ve(()=>{(function(){"use strict";var y=8;function k(A){return A?String(A).slice(0,y):""}function g(A){if(!A||typeof A!="object")return{nickname:"",fp:"",ip:""};var _=A.fingerprint||A.fp||A.hash||"",m=A.clientIp||A.client_ip||A.ip||"",M=A.nickname||A.nick||"";return{nickname:String(M||""),fp:String(_||""),ip:String(m||"")}}function f(A){if(!A||!window.crypto||!window.crypto.subtle||!window.TextEncoder)return Promise.resolve(null);try{var _=new TextEncoder().encode(String(A));return window.crypto.subtle.digest("SHA-256",_).then(function(m){var M=Array.from(new Uint8Array(m));return M.map(function(F){return F.toString(16).padStart(2,"0")}).join("").slice(0,12)}).catch(function(){return null})}catch{return Promise.resolve(null)}}function x(A){if(location.hash!=="#/system")try{location.hash="#/system"}catch{}var _=document.getElementById("sec-fingerprints");if(_&&!_.open&&(_.open=!0),_)try{_.scrollIntoView({behavior:"smooth",block:"start"})}catch{}f(A).then(function(m){if(m)var M=0,F=setInterval(function(){M+=1;var w=document.querySelector('[data-fp-hash="'+m+'"]');if(w){clearInterval(F),w.classList.add("admin-identity-flash"),setTimeout(function(){w.classList.remove("admin-identity-flash")},2e3);try{w.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}else M>12&&clearInterval(F)},250)})}function U(A){A=A||{};var _=A.nickname||"",m=A.fp||"",M=A.ip||"",F=!!A.compact,w=typeof A.onNicknameClick=="function"?A.onNicknameClick:null,E=typeof A.onFpClick=="function"?A.onFpClick:x,P=document.createElement("span");P.className="admin-identity-row";var S;if(w?(S=document.createElement("button"),S.type="button",S.className="admin-identity-nick is-clickable",S.addEventListener("click",function(v){v.stopPropagation(),w(_)})):(S=document.createElement("span"),S.className="admin-identity-nick"),_)S.textContent="@"+_;else{var b="guest";try{if(typeof ServerI18n<"u"&&ServerI18n.t){var C=ServerI18n.t("anonymousPlaceholder");C&&C!=="anonymousPlaceholder"&&(b=C)}}catch{}S.textContent="@"+b,S.classList.add("is-guest")}if(_&&(S.title=_),P.appendChild(S),m){var H;if(E?(H=document.createElement("button"),H.type="button",H.className="admin-identity-fp is-clickable",H.addEventListener("click",function(v){v.stopPropagation(),E(m)})):(H=document.createElement("span"),H.className="admin-identity-fp"),m==="new"){var B=document.createElement("span");B.className="admin-identity-dot",H.appendChild(B),H.appendChild(document.createTextNode("fp:new"))}else H.textContent="fp:"+k(m);H.title=m,P.appendChild(H)}if(M&&!F){var N=document.createElement("span");N.className="admin-identity-ip",N.textContent=M,N.title=M,P.appendChild(N)}return P}window.AdminIdentity={render:U,parse:g,focusFingerprint:x,hashFp:f,FP_DISPLAY_LEN:y}})()});var Ge=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(d,a){return window.csrfFetch(d,a)}function g(d,a){return window.showToast(d,a)}let f="default",x=[],U={};function A(){let d=document.getElementById("themesList");d&&window.AdminSkeletons&&(d.innerHTML="",d.appendChild(window.AdminSkeletons.listRows({rows:4})))}async function _(){A();try{let d=await k("/admin/themes");if(!d.ok)return;let a=await d.json();f=a.active||"default",x=a.themes||[],U=a.overrides||{},P(x,f),C()}catch(d){console.warn("[Themes] Failed to fetch themes:",d)}}var m="\u5C0F\u660E",M="\u8B1B\u5F97\u597D\uFF01+1";function F(d,a){var l=String(d||"").trim();return/^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(l)?l:a}function w(d){var a=d.styles||{},l=["color:"+F(a.color,"#ffffff")];if(a.textStroke){var i=Math.max(0,Math.min(6,Number(a.strokeWidth)||0));l.push("-webkit-text-stroke:"+i+"px "+F(a.strokeColor,"#000000")),l.push("paint-order:stroke fill")}if(a.textShadow){var e=Math.max(0,Math.min(40,Number(a.shadowBlur)||0));l.push("text-shadow:0 0 "+e+"px "+F(a.color,"#ffffff"))}var o=d.font&&d.font.family;return o&&/^[\w\s-]{1,40}$/.test(o)&&l.push("font-family:'"+o+"', var(--font-sans)"),d.font&&Number(d.font.weight)&&l.push("font-weight:"+Math.max(100,Math.min(900,Number(d.font.weight)))),l.join(";")}function E(d){var a=d.bg&&d.bg.gradient;return a&&/^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(a).trim())?"background:"+String(a).trim():""}function P(d,a){let l=document.getElementById("themesList");if(l){if(l.innerHTML="",d.length===0){l.innerHTML='<span class="theme-pack-muted" style="padding:14px">'+ServerI18n.t("noThemesFound")+"</span>";return}d.forEach(i=>{let e=i.name===a,o=y(ServerI18n.t("theme_"+i.name)!=="theme_"+i.name?ServerI18n.t("theme_"+i.name):i.label||i.name),h=document.createElement("div");h.className=`theme-pack-card${e?" is-active":""}`,h.innerHTML=`
        <div class="theme-pack-name">${o}</div>
        <div class="theme-pack-sample" style="${y(E(i))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${y(w(i))}">
            <span class="theme-pack-sample-nick">${y(m)}</span>
            ${y(M)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${i.custom?`<button class="admin-ui-action theme-delete-btn" data-theme="${y(i.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`:""}
          ${e?'<span class="admin-ui-chip admin-theme-pack-status is-active">'+ServerI18n.t("themesActiveChip")+"</span>":`<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${y(i.name)}">${ServerI18n.t("themesActivateBtn")}</button>`}
        </div>
      `,l.appendChild(h)}),l.querySelectorAll(".theme-delete-btn").forEach(i=>{i.addEventListener("click",async()=>{let e=i.dataset.theme;if(await window.HudConfirm.open({title:ServerI18n.t("themesDeleteBtn"),severity:"danger",body:ServerI18n.t("themesDeleteConfirm"),confirmLabel:ServerI18n.t("themesDeleteBtn"),cancelLabel:ServerI18n.t("cancel")}))try{let h=await k("/admin/themes/"+encodeURIComponent(e),{method:"DELETE"});if(!h.ok)throw new Error("HTTP "+h.status);g(ServerI18n.t("themeDeleted"),!0),_()}catch{g(ServerI18n.t("themesDeleteFailed"),!1)}})}),l.querySelectorAll(".theme-activate-btn").forEach(i=>{i.addEventListener("click",async()=>{let e=i.dataset.theme;try{let o=await k("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})});if(o.ok)g(ServerI18n.t("themeActivated"),!0),f=e,P(d,e),C();else{let h=await o.json().catch(()=>({}));g(h.error||ServerI18n.t("setThemeFailed"),!1)}}catch{g(ServerI18n.t("setThemeFailed"),!1)}})})}}function S(){return x.find(d=>d.name===f)||null}function b(d,a){let l=U[f]||{};if(l[d])return l[d];let i=a&&a.styles||{};return d==="stroke"?i.textStroke?Number(i.strokeWidth)>=3?"thick":"thin":"none":i.textShadow?Number(i.shadowBlur)>=10?"strong":"soft":"none"}function C(){let d=document.getElementById("themeDetail"),a=document.getElementById("themeDetailLabel");if(!d||!a)return;let l=S();if(!l)return;let i=ServerI18n.t("theme_"+l.name)!=="theme_"+l.name?ServerI18n.t("theme_"+l.name):l.label||l.name;a.textContent=ServerI18n.t("themeDetailGroup",{name:i}),["stroke","shadow"].forEach(o=>{let h=b(o,l);d.querySelectorAll(`[data-theme-seg="${o}"] [data-theme-opt]`).forEach(t=>{let s=t.getAttribute("data-theme-opt")===h;t.classList.toggle("is-active",s),t.setAttribute("aria-pressed",s?"true":"false")})});let e=d.querySelector('[data-theme-ov="color"]');if(e){let o=F((l.styles||{}).color,"#ffffff");e.value=/^#[0-9a-fA-F]{6}$/.test(o)?o:"#ffffff"}B(l),N(l)}var H=null;async function B(d){let a=document.getElementById("themeOvFont");if(!a)return;if(!H)try{let e=await fetch("/fonts",{credentials:"same-origin"});H=e.ok?(await e.json()).fonts||[]:[]}catch{H=[]}let i=(U[f]||{}).font_family||"";a.innerHTML=`<option value="">${y(ServerI18n.t("themeDetailFontInherit"))}</option>`+H.map(e=>{let o=String(e.name||e);return`<option value="${y(o)}"${o===i?" selected":""}>${y(o)}</option>`}).join("")}function N(d){let a=document.querySelector("[data-theme-preview-line]");a&&a.setAttribute("style",w(d))}async function v(d){try{let a=await k("/admin/themes/"+encodeURIComponent(f)+"/overrides",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!a.ok)throw new Error("HTTP "+a.status);g(ServerI18n.t("themeDetailSaved"),!0),await _()}catch{g(ServerI18n.t("themeDetailSaveFailed"),!1)}}function c(){let d=document.getElementById("themeDetail");d&&(d.addEventListener("click",a=>{let l=a.target.closest("[data-theme-opt]");if(!l)return;let i=l.closest("[data-theme-seg]");i&&v({[i.getAttribute("data-theme-seg")]:l.getAttribute("data-theme-opt")})}),d.addEventListener("change",a=>{let l=a.target.closest("[data-theme-ov]");l&&v({[l.getAttribute("data-theme-ov")]:l.value})}))}function r(){let d=document.getElementById("themeNewBtn");d&&d.addEventListener("click",async()=>{let a=window.prompt(ServerI18n.t("themesNewPrompt"),"");if(!(!a||!a.trim()))try{let l=await k("/admin/themes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:a.trim(),base:f})});if(!l.ok)throw new Error("HTTP "+l.status);g(ServerI18n.t("themeCreated"),!0),_()}catch{g(ServerI18n.t("themesNewFailed"),!1)}})}function n(){_(),c(),r();let d=document.getElementById("themeReloadBtn");d&&d.addEventListener("click",async()=>{try{(await k("/admin/themes/reload",{method:"POST",headers:{"Content-Type":"application/json"}})).ok?(g(ServerI18n.t("themesReloaded")),_()):g(ServerI18n.t("themesReloadFailed"),!1)}catch{g(ServerI18n.t("themesReloadFailed"),!1)}})}window.AdminThemes={init:n}})()});var ze=ve(()=>{(function(){"use strict";function y(L,D){return window.csrfFetch(L,D)}function k(L,D){return window.showToast(L,D)}var g=window.ServerI18n;function f(L,D){return window.AdminUtils.styleTag(L,D)}let x=null;function U(){let L=document.getElementById("effectEditModal");return L?Array.from(L.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(D=>!D.hasAttribute("disabled")&&D.getAttribute("aria-hidden")!=="true"):[]}function A(L){let D=document.getElementById("effectEditModal");if(!D||D.classList.contains("hidden"))return;if(L.key==="Escape"){L.preventDefault(),_();return}if(L.key!=="Tab")return;let O=U();if(O.length===0){L.preventDefault();return}let z=O[0],T=O[O.length-1],R=document.activeElement;L.shiftKey&&R===z?(L.preventDefault(),T.focus()):!L.shiftKey&&R===T&&(L.preventDefault(),z.focus())}function _(){let L=document.getElementById("effectEditModal");L&&(L.classList.add("hidden"),L.classList.remove("flex"),L.removeEventListener("keydown",A),x&&(x.focus(),x=null))}let m={blink:"dme-blink 0.6s step-start infinite",bounce:"dme-bounce 0.6s ease-in-out infinite",glow:"dme-glow-medium 1.2s ease-in-out infinite",rainbow:"dme-rainbow 2s linear infinite",shake:"dme-shake 0.25s ease-in-out infinite",spin:"dme-spin 1.5s linear infinite normal",wave:"dme-wave 0.5s ease-in-out infinite",zoom:"dme-zoom 0.8s ease-in-out infinite"};window.AdminEffectsMeta={isBuiltin:function(L){return!!m[L]}};let M=new Map,F=new Map;function w(L){if(!L||!L.styleId||!L.keyframes)return;let D="dme-user-"+L.styleId;if(document.getElementById(D))return;let O=document.createElement("style");O.id=D,O.textContent=L.keyframes,document.head.appendChild(O)}async function E(L){if(M.has(L))return M.get(L);if(F.has(L))return F.get(L);let D=(async()=>{try{let O=await y(`/admin/effects/${encodeURIComponent(L)}/content`);if(!O.ok)throw new Error("content fetch failed");let z=await O.json(),T=z&&z.content||"";if(!T)throw new Error("empty content");let R=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:{}})});if(!R.ok)throw new Error("preview failed");let j=await R.json();if(!j||!j.animation)throw new Error("no animation");return w(j),M.set(L,j),j}catch{return M.set(L,"failed"),null}finally{F.delete(L)}})();return F.set(L,D),D}function P(L,D){let O=L.querySelector(".effect-demo-text");if(!O)return;O.style.animation=D.animation||"",D.animationComposition&&(O.style.animationComposition=D.animationComposition),O.style.animationPlayState="paused";let z=b();z&&z.observe(L)}let S=null;function b(){return S||(typeof IntersectionObserver>"u"?null:(S=new IntersectionObserver(L=>{L.forEach(D=>{let O=D.target.querySelector(".effect-demo-text");O&&(O.style.animationPlayState=D.intersectionRatio>=.5?"running":"paused")})},{threshold:[0,.5,1]}),S))}let C=null;function H(L){let D=document.getElementById("effectPreviewParams");if(!D)return{};let O;try{let T=L.split(`
`),R=!1,j=0,J=null,W=0,V={};for(let ae of T){let se=ae.trimStart(),G=ae.length-se.length;if(se.startsWith("params:")){R=!0,j=G;continue}if(!R||se===""||se.startsWith("#"))continue;if(G<=j&&!se.startsWith("params:")){R=!1;continue}let Z=se.match(/^([a-zA-Z0-9_]+):\s*$/);if(Z&&G===j+2){J=Z[1],W=G,V[J]={};continue}if(J&&G>W){let ne=se.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);if(ne){let ie=ne[1],K=ne[2].trim();if((K.startsWith('"')&&K.endsWith('"')||K.startsWith("'")&&K.endsWith("'"))&&(K=K.slice(1,-1)),ie!=="options"){let Q=Number(K);V[J][ie]=isNaN(Q)?K:Q}}if(se.startsWith("- value:")){V[J].options||(V[J].options=[]);let ie=se.match(/^- value:\s*(.+)$/);if(ie){let K=ie[1].trim();(K.startsWith('"')&&K.endsWith('"')||K.startsWith("'")&&K.endsWith("'"))&&(K=K.slice(1,-1)),V[J].options.push({value:K,label:K})}}if(se.startsWith("label:")&&V[J].options&&V[J].options.length>0){let ie=se.match(/^label:\s*(.+)$/);if(ie){let K=ie[1].trim();(K.startsWith('"')&&K.endsWith('"')||K.startsWith("'")&&K.endsWith("'"))&&(K=K.slice(1,-1)),V[J].options[V[J].options.length-1].label=K}}}}O=V}catch{O={}}D.innerHTML="";let z={};for(let[T,R]of Object.entries(O||{})){let j=R.type||"float",J=document.createElement("div");J.className="flex flex-col gap-0.5";let W=document.createElement("label");if(W.className="font-mono",W.style.cssText="font-size:0.65rem;color:var(--color-text-muted)",W.textContent=`${T} (${j})`,J.appendChild(W),j==="select"&&Array.isArray(R.options)){let V=document.createElement("select");V.className="admin-ui-select",V.style.cssText="font-size:13px;padding:4px 8px",V.dataset.paramKey=T;for(let ae of R.options){let se=document.createElement("option");se.value=ae.value,se.textContent=ae.label||ae.value,ae.value===String(R.default)&&(se.selected=!0),V.appendChild(se)}z[T]=String(R.default||R.options[0]&&R.options[0].value||""),V.addEventListener("change",()=>{v()}),J.appendChild(V)}else{let V=R.min!=null?R.min:0,ae=R.max!=null?R.max:10,se=R.step!=null?R.step:j==="int"?1:.1,G=R.default!=null?R.default:V,Z=document.createElement("div");Z.className="flex items-center gap-2";let ne=document.createElement("input");ne.type="range",ne.min=V,ne.max=ae,ne.step=se,ne.value=G,ne.dataset.paramKey=T,ne.className="flex-1",ne.style.accentColor="var(--color-primary)";let ie=document.createElement("span");ie.className="font-mono",ie.style.cssText="font-size:13px;color:var(--color-text-muted);width:2.5rem;text-align:right",ie.textContent=String(G),ne.addEventListener("input",()=>{ie.textContent=ne.value,v()}),Z.appendChild(ne),Z.appendChild(ie),J.appendChild(Z),z[T]=G}D.appendChild(J)}return z}function B(){let L=document.getElementById("effectPreviewParams");if(!L)return{};let D={};return L.querySelectorAll("[data-param-key]").forEach(O=>{D[O.dataset.paramKey]=O.type==="range"?Number(O.value):O.value}),D}async function N(){let L=document.getElementById("effectEditModalTextarea"),D=document.getElementById("effectPreviewText"),O=document.getElementById("effectPreviewStyle"),z=document.getElementById("effectPreviewError");if(!L||!D||!O)return;let T=L.value;if(!T||T===g.t("effectLoadContent")||T===g.t("effectsNetworkError"))return;let R=B();z?.classList.add("hidden");try{let j=await y("/admin/effects/preview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,params:R})}),J=await j.json().catch(()=>({}));j.ok?(O.textContent=J.keyframes||"",D.style.animation=J.animation||"none",D.style.animationComposition=J.animationComposition||""):(D.style.animation="none",O.textContent="",z&&(z.textContent=J.error||g.t("previewFailed"),z.classList.remove("hidden")))}catch{D.style.animation="none",O.textContent="",z&&(z.textContent=g.t("effectsNetworkError"),z.classList.remove("hidden"))}}function v(){clearTimeout(C),C=setTimeout(()=>N(),500)}async function c(){document.getElementById("effectEditModal")||(document.body.insertAdjacentHTML("beforeend",`
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
      `),document.getElementById("effectEditModalClose").addEventListener("click",_),document.getElementById("effectEditModalCancel").addEventListener("click",_),document.getElementById("effectEditModal").addEventListener("click",T=>{T.target===T.currentTarget&&_()}),document.getElementById("effectEditModalTextarea").addEventListener("input",()=>{let T=document.getElementById("effectEditModalTextarea");T&&(H(T.value),v())}),document.getElementById("effectPreviewRefreshBtn").addEventListener("click",()=>{N()}),document.getElementById("effectEditModalSave").addEventListener("click",async()=>{let T=document.getElementById("effectEditModal"),R=document.getElementById("effectEditModalTextarea"),j=document.getElementById("effectEditModalSave"),J=T?.dataset.effectName;if(!(!J||!R)){j.disabled=!0;try{let W=await y("/admin/effects/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J,content:R.value})}),V=await W.json().catch(()=>({}));W.ok?(k(V.message||g.t("effectSaveFallback"),!0),_(),await d()):k(V.error||g.t("saveFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{j.disabled=!1}}})),await d(),document.getElementById("effectReloadBtn")?.addEventListener("click",async()=>{let T=document.getElementById("effectReloadBtn");T&&(T.disabled=!0);try{let R=await y("/admin/effects/reload",{method:"POST"}),j=await R.json().catch(()=>({}));R.ok?(k(j.message||g.t("effectsReloadFallback")),await d()):k(j.error||g.t("reloadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}finally{T&&(T.disabled=!1)}});async function L(T){if(!T)return;let R=new FormData;R.append("effectfile",T);try{let j=await y("/admin/effects/upload",{method:"POST",body:R}),J=await j.json().catch(()=>({}));j.ok?(k(J.message||g.t("effectUploadFallback")),await d()):k(J.error||g.t("uploadFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}}let D=document.getElementById("effectUploadInput"),O=D&&!D.dataset.uploadWired;O&&(D.dataset.uploadWired="1"),(O?D:null)?.addEventListener("change",async T=>{await L(T.target.files?.[0]),T.target.value=""});let z=document.getElementById("sec-effects-mgmt");if(z){let T=0,R=V=>{V.preventDefault(),T++,z.classList.add("is-drag")},j=V=>{V.preventDefault()},J=V=>{V.preventDefault(),T=Math.max(0,T-1),T===0&&z.classList.remove("is-drag")},W=async V=>{V.preventDefault(),T=0,z.classList.remove("is-drag");let ae=V.dataTransfer?.files?.[0];if(ae){if(!/\.(dme|dme\.zip)$/i.test(ae.name)){k(g.t("fxToastBadExt"),!1);return}await L(ae)}};z.addEventListener("dragenter",R),z.addEventListener("dragover",j),z.addEventListener("dragleave",J),z.addEventListener("drop",W)}}function r(L){let D=(L||"").toLowerCase();return D.startsWith("glow")||D.includes("neon")?"GLOW":D.startsWith("shake")?"SHAKE":D.startsWith("wave")||D.startsWith("spin")||D.startsWith("bounce")||D.startsWith("zoom")||D.startsWith("fire")||D.includes("motion")?"MOTION":D.startsWith("rainbow")||D.startsWith("blink")||D.includes("color")?"COLOR":D.startsWith("type")||D.includes("text")?"TEXT":"MISC"}let n={all:[],filter:"ALL",selected:null};async function d(){let L=document.getElementById("effectsList");if(L)try{let D=await y("/admin/effects");if(!D.ok){L.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsLoadFailed")+"</span>";return}let O=await D.json();n.all=O.effects||[],a(),i()}catch{L.innerHTML='<span style="font-size:11px;color: var(--color-ink-error);grid-column:1 / -1">'+g.t("effectsNetworkError")+"</span>"}}function a(){let L=document.getElementById("effectsFilterRow");if(!L)return;let D={GLOW:0,MOTION:0,COLOR:0,SHAKE:0,TEXT:0,MISC:0};n.all.forEach(j=>{D[r(j.name)]+=1});let O=n.all.length,z=[["ALL",g.t("fxChipAll"),O],["GLOW",g.t("fxCatGlow"),D.GLOW],["MOTION",g.t("fxCatMotion"),D.MOTION],["COLOR",g.t("fxCatColor"),D.COLOR],["SHAKE",g.t("fxCatShake"),D.SHAKE],["TEXT",g.t("fxCatText"),D.TEXT]];D.MISC>0&&z.push(["MISC",g.t("fxCatMisc"),D.MISC]);let T=z.map(([j,J,W])=>`<span class="hud-filter-chip ${n.filter===j?"is-active":""}" data-effect-filter="${j}">${J} ${W}</span>`).join(""),R=L.querySelector("[data-toolbar-spacer]");R?(L.querySelectorAll("[data-effect-filter]").forEach(j=>j.remove()),R.insertAdjacentHTML("beforebegin",T)):L.innerHTML=T,L.querySelectorAll("[data-effect-filter]").forEach(j=>{j.addEventListener("click",()=>{n.filter=j.dataset.effectFilter,a(),i()})})}function l(L){let D=(j,J)=>{let W=document.querySelector(j);W&&(W.textContent=J==null?"\u2014":String(J))},O=L.length,z=L.filter(j=>j.enabled!==!1).length,T=new Set(L.map(j=>r(j.name))),R=L.filter(j=>!m[j.name]).length;D("[data-eflib-total]",O),D("[data-eflib-active]",z),D("[data-eflib-cats]",T.size),D("[data-eflib-user]",R)}function i(){let L=document.getElementById("effectsList");if(!L)return;let D=n.all;l(D);let O=n.filter==="ALL"?D:D.filter(z=>r(z.name)===n.filter);if(!O.length){L.innerHTML='<span style="font-size:11px;color:var(--color-text-muted);grid-column:1 / -1">'+(D.length?g.t("fxNoFilterMatch"):g.t("noEffectsLoaded"))+"</span>";return}S&&S.disconnect(),L.innerHTML="",O.forEach(z=>{let T=r(z.name),R=T==="GLOW"?"is-glow":T==="COLOR"?"is-color":T==="TEXT"?"is-text":"",j=m[z.name]||"",J=!!j,W=document.createElement("div");W.className="hud-effect-card"+(n.selected===z.name?" is-selected":""),W.dataset.effectName=z.name,W.title=[z.description,`file: ${z.filename}`].filter(Boolean).join(`
`);var V="effect_"+z.name;let ae=g.t(V)!==V?g.t(V):z.label||z.name,se=J?"built-in":"user",G=j?`animation:${j};animation-play-state:paused;`:"";if(W.innerHTML=`
        <div class="hud-effect-card-head">
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${e(g.t("fxCat"+T.charAt(0)+T.slice(1).toLowerCase())||T)}</span>
          <!-- v8\uFF08\u8A2D\u8A08\u7A3F 07 \xB7 R5\uFF09\uFF1A\u6A94\u540D\u4E0D\u518D\u5370\u5728\u5361\u9762\u3002\u300C.dme\u300D\u662F\u5BE6\u4F5C\u7D30\u7BC0\uFF0C
               \u4F9D\u898F\u683C\u53EA\u5728\u532F\u5165\u6642\u51FA\u73FE\uFF1B\u6A94\u540D\u4ECD\u7559\u5728 card.title \u7684 tooltip \u88E1\uFF0C
               \u9700\u8981\u5C0D\u7167\u6A94\u6848\u7684\u4EBA\u67E5\u5F97\u5230\u3002 -->
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${R}"><span class="effect-demo-text" style="${G}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${e(ae)}</div>
          <div class="hud-effect-card-meta">${e(se)} \xB7 ${e(z.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">${g.t("lbEdit")}</button>
          <button type="button" class="hud-effect-chip is-danger" data-role="delete" style="margin-left:auto">${g.t("lbDelete")}</button>
        </div>
      `,L.appendChild(W),j){let ie=b();ie&&ie.observe(W)}else{let ie=M.get(z.name);ie&&ie!=="failed"?(w(ie),P(W,ie)):ie!=="failed"&&E(z.name).then(K=>{if(!K)return;let Q=L.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(z.name)}"]`);Q&&P(Q,K)})}W.addEventListener("click",ie=>{ie.target.closest("[data-role]")||p(z)});let Z=W.querySelector('[data-role="edit"]'),ne=W.querySelector('[data-role="delete"]');Z.addEventListener("click",async()=>{let ie=document.getElementById("effectEditModal"),K=document.getElementById("effectEditModalTitle"),Q=document.getElementById("effectEditModalFile"),X=document.getElementById("effectEditModalTextarea"),oe=document.getElementById("effectEditModalSave");if(!ie)return;x=document.activeElement instanceof HTMLElement?document.activeElement:null,K.textContent=z.label||z.name,Q.textContent=z.filename,X.value=g.t("effectLoadContent"),X.disabled=!0,oe.disabled=!0,ie.dataset.effectName=z.name,ie.classList.remove("hidden"),ie.classList.add("flex"),ie.addEventListener("keydown",A),X.focus();let me=document.getElementById("effectPreviewText"),fe=document.getElementById("effectPreviewStyle"),ke=document.getElementById("effectPreviewError"),Ie=document.getElementById("effectPreviewParams");me&&(me.style.animation="none"),fe&&(fe.textContent=""),ke&&ke.classList.add("hidden"),Ie&&(Ie.innerHTML="");try{let Se=await y(`/admin/effects/${encodeURIComponent(z.name)}/content`),re=await Se.json().catch(()=>({}));Se.ok?(X.value=re.content||"",X.disabled=!1,oe.disabled=!1,X.focus(),H(X.value),N()):(X.value=re.error||g.t("effectLoadContentFailed"),k(re.error||g.t("effectLoadContentFailed"),!1))}catch{X.value=g.t("effectsNetworkError"),k(g.t("effectsNetworkError"),!1)}}),ne.addEventListener("click",async()=>{let ie=z.label||z.name;if(await window.HudConfirm?.open({icon:"\u2297",title:g.t("fxDeleteTitle"),subtitle:g.t("cfmSubDeleteUndone"),severity:"danger",body:`
                <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                  ${g.t("fxDeleteBody",{name:`<span style="font-family:var(--hud-font-mono, ui-monospace, monospace);color: var(--color-ink-accent);font-weight:600;">${ie}.dme</span>`})}
                </div>
                <div style="margin-top:12px;padding:10px 12px;border-radius:4px;background:rgba(255,77,79,0.05);border:1px solid rgba(255,77,79,0.19);font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;color: var(--color-ink-error);letter-spacing:0.3px;">
                  ${g.t("fxDeleteWarn")}
                </div>`,confirmLabel:g.t("fxDeleteConfirm"),cancelLabel:g.t("cancel"),width:400}))try{let Q=await y("/admin/effects/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:z.name})}),X=await Q.json().catch(()=>({}));Q.ok?(k(X.message||g.t("effectDeleteFallback"),!0),await d()):k(X.error||g.t("deleteFailed"),!1)}catch{k(g.t("effectsNetworkError"),!1)}})})}function e(L){return String(L??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(L){let D={name:"",label:"",description:"",params:[]};if(!L)return D;let O=L.split(`
`),z="top",T=null;for(let R of O){let j=R.replace(/\r$/,""),J=j.trimStart();if(!J||J.startsWith("#"))continue;let W=j.length-J.length;if(W===0){if(z="top",T&&(D.params.push(T),T=null),J==="params:"){z="params";continue}let V=J.match(/^([a-z_]+):\s*(.+)$/);V&&(V[1]==="name"?D.name=V[2].trim():V[1]==="label"?D.label=V[2].trim():V[1]==="description"&&(D.description=V[2].trim()));continue}if(!(z!=="params"&&z!=="param-fields"&&z!=="options")){if(W===2&&(z==="params"||z==="param-fields"||z==="options")){T&&(D.params.push(T),T=null);let V=J.match(/^(\w+):$/);V&&(T={key:V[1]},z="param-fields");continue}if(W===4&&z==="param-fields"&&T){let V=J.match(/^(\w+):\s*(.*)$/);if(V){let ae=V[1],se=V[2].trim();ae==="label"?T.label=se:ae==="type"?T.type=se:ae==="default"?T.default=se:ae==="min"?T.min=parseFloat(se):ae==="max"?T.max=parseFloat(se):ae==="step"?T.step=parseFloat(se):ae==="options"&&(T.options=[],z="options")}continue}if(z==="options"&&T&&W>=6){let V=J.match(/^-\s*value:\s*(.+)$/);V&&(T.options||(T.options=[]),T.options.push({value:V[1].trim(),label:V[1].trim()}));let ae=J.match(/^label:\s*(.+)$/);ae&&T.options&&T.options.length>0&&(T.options[T.options.length-1].label=ae[1].trim())}}}return T&&D.params.push(T),D}function h(L,D){let O=L.match(/^keyframes:\s*\|(.+?)(?=^\w|\Z)/ms),z=O?O[1]:"",T=L.match(/^animation:\s*["']?(.+?)["']?\s*$/m),R=T?T[1].trim():"";for(let j of D.params){let J=j.default!==void 0?j.default:"",W=new RegExp(`\\{${j.key}\\}`,"g");z=z.replace(W,J),R=R.replace(W,J)}return{keyframes:z,animation:R}}function t(L,D){if(L==="COLOR"){let O=D.find(z=>z.key==="duration");if(O&&O.default){let z=parseFloat(O.default);if(z<.25)return"crimson";if(z<.33)return"amber"}}if(L==="MOTION"){let O=D.find(z=>z.key==="height");if(O&&O.default){let z=parseFloat(O.default);if(z>30)return"crimson";if(z>24)return"amber"}}return"lime"}function s(L,D){return L==="COLOR"?D==="crimson"?g.t("fxHintFlashBlock"):D==="amber"?g.t("fxHintFlashWarn"):g.t("fxHintFlashOk"):D==="crimson"?g.t("fxHintAmpBlock"):D==="amber"?g.t("fxHintAmpWarn"):g.t("fxHintAmpOk")}function u(L,D){let O=o(D),{keyframes:z,animation:T}=h(D,O),R=r(L.name),j=O.params.filter(X=>X.type!=="select"),J=O.params.filter(X=>X.type==="select"),W=t(R,O.params),V=W==="crimson"?"BLOCK":W==="amber"?"WARN":"OK",ae=s(R,W),se="fx-anim-"+L.name.replace(/[^a-z0-9]/gi,"-"),G=z&&T?f(se,z):"",Z=T?`animation:${T};animation-play-state:running;`:"",ne=j.map(X=>{let oe=parseFloat(X.default)||0,me=X.min??0,fe=X.max??100,ke=Math.max(0,Math.min(100,(oe-me)/(fe-me)*100)),Ie=(X.label||"").match(/\(([^)]+)\)$/),Se=Ie?Ie[1]:"",re=X.label||X.key;return`<div style="display:flex;flex-direction:column;gap:2px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:7px">
          <span style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500">${e(re)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong,#e2e8f0)">
            ${oe}<span style="color:var(--color-text-muted);margin-left:2px">${e(Se)}</span>
          </span>
        </div>
        <div class="fx-slider-track">
          <div class="fx-slider-fill" style="width:${ke}%"></div>
          <div class="fx-slider-knob" style="left:${ke}%"></div>
        </div>
        <div class="fx-slider-minmax">
          <span>${me}${e(Se)}</span><span>${fe}${e(Se)}</span>
        </div>
      </div>`}).join("")||`<span style="font-size:11px;color:var(--color-text-muted)">${g.t("fxNoNumericParams")}</span>`,ie=J.map(X=>{let oe=X.options||[],me=String(X.default||""),fe=oe.map(ke=>`<span class="fx-radio-btn${ke.value===me||ke.label===me?" is-active":""}">${e(ke.label)}</span>`).join("");return`<div>
        <div style="font-size:11px;color:var(--color-text-strong,#e2e8f0);font-weight:500;margin-bottom:7px">${e(X.label||X.key)}</div>
        <div class="fx-radio-group">${fe||"<span>\u2014</span>"}</div>
      </div>`}).join(""),K=["dark","light","photo"].map(X=>{let oe=X==="light"?"#0F172A":"#ffffff";return`<div class="fx-preview-cell is-${X}">
        <span class="fx-preview-bg-label">${X.toUpperCase()}</span>
        <span class="fx-preview-text" style="${Z}color:${oe}">ABC</span>
      </div>`}).join(""),Q=`${G}<div class="fx-param-body">
      <div>
        <div class="fx-section-head">${g.t("fxSectionParams")}</div>
        <div style="display:flex;flex-direction:column;gap:14px">${ne}</div>
      </div>`;return ie&&(Q+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("fxSectionControls")}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${ie}</div>
      </div>`),Q+=`<div class="fx-divider"></div>
      <div>
        <div class="fx-section-head">${g.t("uiLivePreview")}</div>
        <div class="fx-preview-3">${K}</div>
      </div>
      <div class="fx-warn-box${W!=="lime"?" is-"+W:""}">
        <span class="fx-warn-chip${W!=="lime"?" is-"+W:""}">${V}</span>
        <span class="fx-warn-text">${e(ae)}</span>
      </div>
    </div>`,Q}async function p(L){n.selected=L.name;let D=document.getElementById("effectsInspector"),O=document.getElementById("effectsInspectorTitle"),z=document.getElementById("effectsInspectorKicker"),T=document.getElementById("effectsInspectorBody");if(D){document.getElementById("effectsInspectorReload")?.removeAttribute("disabled"),document.getElementById("effectsInspectorEdit")?.removeAttribute("disabled"),O&&(O.textContent=L.label||L.name),z&&(z.textContent="LOADING"),T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("fxYamlLoading")),document.querySelectorAll(".hud-effect-card").forEach(R=>{R.classList.toggle("is-selected",R.dataset.effectName===L.name)});try{let R=await y(`/admin/effects/${encodeURIComponent(L.name)}/content`),j=await R.json().catch(()=>({}));if(R.ok){let J=j.content||"";T&&(T.className="hud-inspector-body has-param-panel",T.innerHTML=u(L,J)),z&&(z.textContent=r(L.name))}else T&&(T.className="hud-inspector-body",T.textContent="# "+(j.error||g.t("effectLoadContentFailed"))),z&&(z.textContent="ERROR")}catch{T&&(T.className="hud-inspector-body",T.textContent="# "+g.t("effectsNetworkError")),z&&(z.textContent="NETWORK")}}}function $(){let L=document.getElementById("effectsInspectorReload"),D=document.getElementById("effectsInspectorEdit");L?.addEventListener("click",async()=>{if(!n.selected){k(g.t("fxSelectFirst"),!1);return}let O=n.all.find(z=>z.name===n.selected);O&&await p(O)}),D?.addEventListener("click",()=>{if(!n.selected){k(g.t("fxSelectFirst"),!1);return}document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(n.selected)}"]`)?.querySelector('[data-role="edit"]')?.click()})}new MutationObserver(()=>{document.getElementById("effectsInspector")&&!document.getElementById("effectsInspector").dataset.wired&&(document.getElementById("effectsInspector").dataset.wired="1",$())}).observe(document.body,{childList:!0,subtree:!0}),window.AdminEffects={init:c}})()});var Ve=ve(()=>{(function(){"use strict";var y={};window.DanmuEvents={on:function(k,g){y[k]||(y[k]=[]),y[k].push(g)},off:function(k,g){y[k]=(y[k]||[]).filter(function(f){return f!==g})},emit:function(k,g){(y[k]||[]).forEach(function(f){f(g)})}}})()});var Je=ve(()=>{(function(){"use strict";let y="sec-events",k="/admin/audit?limit=200",f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},x={events:[],filterSev:"all",filterCat:"all",timer:0};function U(B){let N=(B.source||B.kind||"").toLowerCase(),v=(B.action||"").toLowerCase();return N.includes("plugin")||v.includes("plugin")?"plugin":N.includes("webhook")||v.includes("webhook")?"webhook":N.includes("rate")||v.includes("rate")||v.includes("limit")?"rate":N.includes("filter")||v.includes("filter")?"filter":N.includes("overlay")||v.includes("overlay")||N==="broadcast"?"overlay":N.includes("backup")||v.includes("backup")?"backup":N.includes("msg")||N==="messaging"?"msg":N.includes("ws")||N==="websocket"?"ws":"system"}let A=/(fail|error|revoke|ban|kill|denied|reject|oom)/i,_=/(warn|timeout|degraded|retry|slow|throttle|standby)/i;function m(B){let N=(B.action||B.kind||"").toLowerCase();return B.severity?B.severity:A.test(N)?"error":_.test(N)?"warn":"info"}function M(B){let N=B.source||"system",v=B.action||B.kind||"";return v?`${N.toUpperCase()}_${v.toUpperCase()}`:N.toUpperCase()}function F(B){if(!B)return"\u2014";let N=new Date(B*1e3),v=c=>String(c).padStart(2,"0");return`${v(N.getHours())}:${v(N.getMinutes())}:${v(N.getSeconds())}`}function w(B){if(B.message)return B.message;let N=B.meta||{},v=[];if(N.from&&N.to)v.push(`${N.from} \u2192 ${N.to}`);else if(N.text_preview)v.push(`"${N.text_preview.slice(0,60)}"`);else if(Object.keys(N).length){let c=Object.keys(N).slice(0,3);for(let r of c)v.push(`${r}=${JSON.stringify(N[r]).slice(0,30)}`)}return v.length?v.join(" \xB7 "):`${B.source||"system"}.${B.action||B.kind||"?"}`}function E(){return`
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
      </div>`}function P(){let B=document.querySelector("[data-ev-rows]");if(!B)return;let N=x.events,v=N.filter(n=>!(x.filterSev!=="all"&&m(n)!==x.filterSev||x.filterCat!=="all"&&U(n)!==x.filterCat));v.length===0?(B.innerHTML="",window.AdminEmpty?B.appendChild(window.AdminEmpty.render("events")):B.innerHTML='<div class="admin-ev-v4__empty">'+ServerI18n.t("evNoEvents")+"</div>"):B.innerHTML=v.map(n=>{let d=m(n);return`
          <div class="admin-ev-v4__row" data-sev="${d}">
            <span class="admin-ev-v4__cell admin-ev-v4__time">${f(F(n.ts))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__sev">
              <span class="admin-ev-v4__sev-dot" data-sev="${d}"></span>
            </span>
            <span class="admin-ev-v4__cell admin-ev-v4__type" data-sev="${d}">${f(M(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__actor">${f(n.actor||"system")}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__msg">${f(w(n))}</span>
            <span class="admin-ev-v4__cell admin-ev-v4__link"></span>
          </div>`}).join("");let c={all:N.length,info:0,warn:0,error:0};for(let n of N)c[m(n)]+=1;Object.keys(c).forEach(n=>{let d=document.querySelector(`[data-ev-cnt="${n}"]`);d&&(d.textContent=String(c[n]))});let r=document.querySelector("[data-ev-total]");r&&(r.textContent=`${v.length} / ${N.length}`)}async function S(){try{let B=await fetch(k,{credentials:"same-origin"});if(!B.ok)return;let N=await B.json();x.events=Array.isArray(N.events)?N.events:[],P()}catch{}}function b(){let B=document.getElementById(y);B&&B.addEventListener("click",N=>{let v=N.target.closest("[data-ev-sev]");if(v){B.querySelectorAll("[data-ev-sev]").forEach(n=>n.classList.toggle("is-active",n===v)),x.filterSev=v.dataset.evSev,P();return}let c=N.target.closest("[data-ev-cat]");if(c){B.querySelectorAll("[data-ev-cat]").forEach(n=>n.classList.toggle("is-active",n===c)),x.filterCat=c.dataset.evCat,P();return}let r=N.target.closest("[data-ev-action]");if(r){if(r.dataset.evAction==="refresh")S();else if(r.dataset.evAction==="export"){let n=new Blob([JSON.stringify(x.events,null,2)],{type:"application/json"}),d=URL.createObjectURL(n),a=document.createElement("a");a.href=d,a.download=`events-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"")}.json`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(d),window.showToast?.(ServerI18n.t("evToastDownloaded"),!0)}}})}function C(){let B=document.querySelector(".admin-dash-grid"),N=document.getElementById(y);if(!N)return;let c=(B?.dataset.activeLeaf||(location.hash||"").replace("#/","")||"")==="events";N.style.display=c?"":"none",c?(S(),x.timer||(x.timer=setInterval(S,15e3))):x.timer&&(clearInterval(x.timer),x.timer=0)}function H(){let B=document.getElementById("settings-grid");!B||document.getElementById(y)||(B.insertAdjacentHTML("beforeend",E()),b(),C())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H(),C()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",C),document.addEventListener("admin-panel-rendered",()=>{H(),C()}),H()})})()});var Ye=ve(()=>{(function(){"use strict";let y="sec-modqueue",k="/admin/modqueue/list",x=window.AdminUtils&&window.AdminUtils.escapeHtml||function(v){return String(v).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})},U={pending:[],approved:[],rejected:[],stats:{throughput:0,avg_review_sec:0,auto_reject_pct:0},timer:0,countdownTimer:0,autoRejectSec:30},A={high:"var(--color-danger, #ff4d4f)",medium:"var(--color-warning, #fbbf24)",low:"var(--color-text-muted, #94a3b8)"},_={high:"modqueueSevHigh",medium:"modqueueSevMedium",low:"modqueueSevLow"};function m(v){let c=0,r=String(v||"");for(let n=0;n<r.length;n++)c=c*31+r.charCodeAt(n)&65535;return c%360}function M(v){if(!v.created_at_ms)return null;let c=(Date.now()-v.created_at_ms)/1e3,r=Math.max(0,U.autoRejectSec-c);return Math.ceil(r)}function F(v,c){let r=(v.severity||"low").toLowerCase(),n=A[r]||A.low,d=m(v.fp),a=String(v.fp||"\u2014").slice(0,8),l=v.nick||v.nickname||ServerI18n.t("audienceAnonymous"),i=(l||"?").slice(0,2).toUpperCase(),e=c==="pending"?M(v):null,o=c==="pending"?`
      <div class="admin-mq-card__actions">
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--approve" data-mq-action="approve" data-mq-id="${x(v.id||"")}">${x(ServerI18n.t("modqueueApproveBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--reject" data-mq-action="reject" data-mq-id="${x(v.id||"")}">${x(ServerI18n.t("modqueueRejectBtn"))}</button>
        <button type="button" class="admin-mq-card__btn admin-mq-card__btn--more" data-mq-action="more" data-mq-id="${x(v.id||"")}" aria-label="More">\u22EF</button>
      </div>`:"",h=c==="approved"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--ok">
          <span class="admin-mq-card__stamp-dot"></span>
          ${x(ServerI18n.t("modqueueStampApproved"))} \xB7 ${x(v.resolved_by||"admin")} \xB7 ${x(v.resolved_ago||"")}
        </div>`:c==="rejected"?`<div class="admin-mq-card__stamp admin-mq-card__stamp--rej">
          <span class="admin-mq-card__stamp-dot"></span>${v.auto_rejected?`${x(ServerI18n.t("modqueueStampAutoRejected"))} \xB7 ${x(ServerI18n.t("modqueueAutoRejectTimeout",{n:U.autoRejectSec}))}`:`${x(ServerI18n.t("modqueueStampRejected"))} \xB7 ${x(v.resolved_by||"admin")} \xB7 ${x(v.resolved_ago||"")}`}
        </div>`:"",t=c==="pending"&&e!=null?`
      <span class="admin-mq-card__countdown">
        <span class="admin-mq-card__countdown-dot"></span>${e}s
      </span>`:"";return`
      <div class="admin-mq-card" data-mq-id="${x(v.id||"")}" data-mq-sev="${x(r)}" style="--mq-sev:${n}">
        <div class="admin-mq-card__head">
          <span class="admin-mq-card__avatar" style="background: oklch(0.65 0.18 ${d})">${x(i)}</span>
          <div class="admin-mq-card__id">
            <div class="admin-mq-card__nick">@${x(l)}</div>
            <div class="admin-mq-card__fp">fp:${x(a)}</div>
          </div>
          <div class="admin-mq-card__time">${x(v.time||"")}</div>
        </div>
        <div class="admin-mq-card__body">${x(v.content||v.text||"")}</div>
        <div class="admin-mq-card__meta">
          <span class="admin-mq-card__sev" style="--mq-sev:${n}">${x(ServerI18n.t(_[r]||_.low))}</span>
          <span class="admin-mq-card__rule">${x(ServerI18n.t("modqueueRuleLabel"))}: ${x(v.rule||v.matched_rule||"?")}</span>
          ${t}
        </div>
        ${o}
        ${h}
      </div>`}function w(v,c,r){v&&(v.innerHTML=c.map(n=>F(n,r)).join(""))}function E(){let v=document.getElementById(y);if(!v)return;v.querySelectorAll("[data-mq-bulk]").forEach(r=>{r.disabled=!0}),v.querySelector(".admin-mq__body").hidden=!0;let c=v.querySelector("[data-mq-empty]");c&&window.AdminEmpty&&(c.hidden=!1,c.innerHTML="",c.appendChild(window.AdminEmpty.renderCustom({icon:"\u2713",title:ServerI18n.t("modqueueEmptyTitle"),desc:ServerI18n.t("modqueueEmptyDesc"),accent:"var(--color-ink-success)",actionLabel:ServerI18n.t("modqueueEmptyAction"),action:function(){location.hash="#/live"},extra:'<a href="#/audit" style="color: var(--color-ink-accent); text-decoration:underline">'+ServerI18n.t("modqueueEmptyAuditLink")+"</a>"})))}function P(){let v=document.getElementById(y);if(!v)return;if(U.pending.length+U.approved.length+U.rejected.length===0){E();return}v.querySelector(".admin-mq__body").hidden=!1;let r=v.querySelector("[data-mq-empty]");r&&(r.hidden=!0),w(v.querySelector("[data-mq-col-pending]"),U.pending,"pending"),w(v.querySelector("[data-mq-col-approved]"),U.approved,"approved"),w(v.querySelector("[data-mq-col-rejected]"),U.rejected,"rejected");let n=(i,e)=>{v.querySelectorAll(i).forEach(o=>{o.textContent=String(e)})};n("[data-mq-cnt-pending]",U.pending.length),n("[data-mq-cnt-approved]",U.approved.length),n("[data-mq-cnt-rejected]",U.rejected.length);let d=U.pending.length===0;v.querySelectorAll("[data-mq-bulk]").forEach(i=>{i.disabled=d});let a=U.pending[U.pending.length-1],l=v.querySelector("[data-mq-oldest]");if(l){let i=a?M(a):null;l.textContent=i!=null?`oldest: ${i}s`:""}n("[data-mq-throughput]",U.stats.throughput.toFixed?U.stats.throughput.toFixed(1):U.stats.throughput),n("[data-mq-avg-review]",U.stats.avg_review_sec.toFixed?U.stats.avg_review_sec.toFixed(1):U.stats.avg_review_sec),n("[data-mq-auto-rate]",Math.round(U.stats.auto_reject_pct||0)+"%")}async function S(){try{let v=await fetch(k,{credentials:"same-origin"});if(!v.ok){U.pending=[],U.approved=[],U.rejected=[],P();return}let c=await v.json();U.pending=Array.isArray(c.pending)?c.pending:[],U.approved=Array.isArray(c.approved)?c.approved:[],U.rejected=Array.isArray(c.rejected)?c.rejected:[],U.stats=c.stats||U.stats,typeof c.auto_reject_sec=="number"&&(U.autoRejectSec=c.auto_reject_sec),P()}catch{}}async function b(v,c,r){if(window.csrfFetch)try{let n=await window.csrfFetch("/admin/modqueue/"+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:v,...r||{}})});if(n.ok)window.showToast&&window.showToast(c==="approve"?ServerI18n.t("modqueueToastApproved"):ServerI18n.t("modqueueToastRejected"),!0),S();else{let d=await n.json().catch(()=>({}));window.showToast&&window.showToast(ServerI18n.t("modqueueToastActionFailed",{msg:d.error||""}),!1)}}catch{window.showToast&&window.showToast(ServerI18n.t("modqueueToastNetworkError"),!1)}}function C(){return`
      <div id="${y}" class="admin-mq hud-page-stack lg:col-span-2" data-tpl="B" style="display:none">
        <!-- 2026-07-30 \u4F7F\u7528\u8005\u6307\u793A\uFF1A\u79FB\u9664\u5340\u584A page-head\u2014\u2014\u5206\u9801\u5217\u5DF2\u9078\u4E2D\u300C\u5BE9\u6838
             \u4F47\u5217\u300D\u3001\u9EB5\u5305\u5C51\u4E5F\u5BEB\u4E86\uFF0C\u9019\u689D\u6A19\u984C\u7D14\u91CD\u8907\u3002\u8AAA\u660E\u7531\u4E0B\u65B9 admin-mq__hint
             \u627F\u63A5\u3002\u540C\u7406\u9069\u7528\u5176\u4ED6\u5BE9\u6838\u5206\u9801\uFF08BANS/BLACKLIST\u2026\uFF09\uFF0C\u672C\u6B21\u5148\u52D5\u4F47\u5217\u3002 -->

        <!-- Toolbar: stats chips + bulk + auto-reject config -->
        <div class="admin-mq__toolbar">
          <span class="admin-mq__chip admin-mq__chip--pending">
            <span class="admin-mq__dot admin-mq__dot--amber"></span>
            ${x(ServerI18n.t("mqStatePending"))} \xB7 <span data-mq-cnt-pending>0</span>
          </span>
          <span class="admin-mq__counter admin-mq__counter--ok">
            <span data-mq-cnt-approved>0</span> ${x(ServerI18n.t("mqStateApproved"))}
          </span>
          <span class="admin-mq__counter admin-mq__counter--rej">
            <span data-mq-cnt-rejected>0</span> ${x(ServerI18n.t("mqStateRejected"))}
          </span>
          <span class="admin-mq__spacer"></span>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--ok" data-mq-bulk="approve-low">${x(ServerI18n.t("modqueueBulkApproveConfirm"))}</button>
          <button type="button" class="admin-mq__bulk admin-mq__bulk--rej" data-mq-bulk="reject-high">${x(ServerI18n.t("modqueueBulkRejectConfirm"))}</button>
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
      </div>`}function H(){let v=document.getElementById(y);v&&v.addEventListener("click",async c=>{let r=c.target.closest("[data-mq-action]");if(r){let d=r.dataset.mqId,a=r.dataset.mqAction;(a==="approve"||a==="reject")&&b(d,a);return}let n=c.target.closest("[data-mq-bulk]");if(n){let d=n.dataset.mqBulk,a=d==="approve-low";if(!await window.HudConfirm?.open({icon:a?"\u2713":"\u2298",title:a?ServerI18n.t("modqueueBulkApproveTitle"):ServerI18n.t("modqueueBulkRejectTitle"),subtitle:ServerI18n.t("cfmSubBulkModeration"),severity:a?"warn":"danger",body:a?ServerI18n.t("modqueueBulkApproveBody"):ServerI18n.t("modqueueBulkRejectBody"),confirmLabel:a?ServerI18n.t("modqueueBulkApproveConfirm"):ServerI18n.t("modqueueBulkRejectConfirm")}))return;let i=d.startsWith("approve")?"approve":"reject",e=d.endsWith("low")?"low":"high";b(null,"bulk",{action:i,severity:e})}})}function B(){let v=document.querySelector(".admin-dash-grid"),c=document.getElementById(y);if(!c)return;let r=(location.hash||"").replace("#/","").split("/"),n=v?.dataset.activeRoute||r[0]||"",d=v?.dataset.activeLeaf||r[1]||"",a=n==="modqueue"||n==="moderation"&&(d==="queue"||d===""||d==="moderation");c.style.display=a?"":"none",a?(U.timer||(S(),U.timer=setInterval(S,4e3)),U.countdownTimer||(U.countdownTimer=setInterval(P,1e3))):(U.timer&&(clearInterval(U.timer),U.timer=0),U.countdownTimer&&(clearInterval(U.countdownTimer),U.countdownTimer=0))}function N(){let v=document.getElementById("moderation-grid")||document.getElementById("settings-grid");!v||document.getElementById(y)||(v.insertAdjacentHTML("beforeend",C()),H(),B())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(function(){(document.getElementById("moderation-grid")||document.getElementById("settings-grid"))&&!document.getElementById(y)&&N(),B()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",()=>{N(),B()}),N()})})()});var Qe=ve(()=>{(function(){"use strict";let y="sec-modbans-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(C){return String(C).replace(/[&<>"']/g,function(H){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[H]})},g=[{label:"1h",val:3600},{label:"6h",val:21600},{label:"24h",val:86400,defaultPick:!0},{label:"7d",val:604800},{labelKey:"modbansPermanent",val:0,permanent:!0}],f={fingerprint:"\u25C9",ip:"\u2299",nick:"@"},x={fingerprint:"FP",ip:"IP",nick:"NICK"},U={rows:[],refreshTimer:0};async function A(){try{let C=await fetch("/admin/mod/bans/list",{credentials:"same-origin"});if(!C.ok)return;let H=await C.json();U.rows=Array.isArray(H.bans)?H.bans:[],M()}catch{}}function _(C){if(!C||C<=0)return"\u2014";let H=Math.floor(C/86400),B=Math.floor(C%86400/3600),N=Math.floor(C%3600/60);return H>0?`${H}d ${B}h`:B>0?`${B}h ${N}m`:`${N}m`}function m(C){let H=C.target_kind;return H==="fingerprint"?`fp:${(C.target||"").slice(0,8)}`:H==="nick"?`@${C.target}`:C.target||"\u2014"}function M(){let C=document.querySelector("[data-modbans-list]");if(!C)return;let H=U.rows||[],B=document.querySelector("[data-modbans-count]");if(B&&(B.textContent=String(H.length)),H.length===0){C.innerHTML="";let N=window.AdminEmpty.render("blacklist");N.dataset.emptyKind="modbans",C.appendChild(N);return}C.innerHTML=H.map(function(N){let v=N.status==="expired",c=N.status==="permanent",r="admin-modbans-chip is-"+N.status,n=c?ServerI18n.t("modbansPermanent"):v?ServerI18n.t("modbansExpiredAuto"):ServerI18n.t("modbansRemaining",{time:_(N.remaining_s)}),d=encodeURIComponent(N.target_kind)+"|"+encodeURIComponent(N.target);return`
        <div class="admin-modbans-row ${v?"is-expired":""}">
          <span class="admin-modbans-target">${k(m(N))}</span>
          <span class="admin-modbans-kind">${k(x[N.target_kind]||N.target_kind)}</span>
          <span class="admin-modbans-reason">${k(N.reason||"\u2014")}</span>
          <span class="${r}">
            ${N.status==="active"?'<span class="admin-modbans-chip-pulse"></span>':""}
            ${k(n)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${d}"
            ${v?"disabled":""}
            title="${v?ServerI18n.t("modbansAutoUnbanned"):ServerI18n.t("modbansUnbanTitle")}">
            ${v?"\u2014":ServerI18n.t("modbansUnban")}
          </button>
        </div>`}).join("")}function F(C){let H=C||{},B=H.kind||"ban",N=window.HudConfirm,v=!H.target,c=H.target_kind||"fingerprint",r=H.target||"";return new Promise(function(n){if(!N){n(!1);return}let d=86400,a=!1,l=12,i="hour",e=document.createElement("div");e.className="admin-modbans-modal-body",e.innerHTML=`
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon" data-modbans-target-icon>${k(f[c]||"?")}</span>
          <div>
            <div class="admin-ui-monolabel" data-modbans-target-label>${k(x[c]||"?")} ${k((B||"ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val" data-modbans-target-val>${k(r?m({target_kind:c,target:r}):"\u2014")}</div>
          </div>
        </div>
        ${v?`
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("modbansTargetLabel")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-kinds>
            ${["fingerprint","ip","nick"].map(function(V){return`<button type="button" class="admin-modbans-modal-preset${V===c?" is-active":""}"
                data-modbans-target-kind="${V}">${k(f[V])} ${k(x[V])}</button>`}).join("")}
          </div>
          <input type="text" class="admin-modbans-modal-target-input" data-modbans-target
            placeholder="${ServerI18n.t("modbansTargetPlaceholder")}" maxlength="120" autocomplete="off" />
        </div>`:""}
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">${ServerI18n.t("mlBanDuration")}</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${g.map(function(V){return`<button type="button" class="${"admin-modbans-modal-preset"+(V.defaultPick?" is-active":"")+(V.permanent?" is-permanent":"")}" data-modbans-duration="${V.val}">${V.labelKey?ServerI18n.t(V.labelKey):V.label}</button>`}).join("")}
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
        <div class="admin-modbans-modal-hint">${ServerI18n.t("modbansHint")}</div>`;let o=e.querySelector("[data-modbans-custom-row]"),h=e.querySelector("[data-modbans-custom-input]"),t=e.querySelector("[data-modbans-custom-seconds]"),s=e.querySelector("[data-modbans-when]"),u=e.querySelector("[data-modbans-custom]"),p=e.querySelector("[data-modbans-target]"),$=e.querySelector("[data-modbans-target-icon]"),I=e.querySelector("[data-modbans-target-label]"),L=e.querySelector("[data-modbans-target-val]"),D=function(){$.textContent=f[c]||"?",I.textContent=`${x[c]||"?"} ${(B||"ban").toUpperCase()}`,L.textContent=r?m({target_kind:c,target:r}):"\u2014"},O=function(){return Math.max(1,parseInt(h.value,10)||1)*(i==="day"?86400:3600)},z=function(){if(d===0){s.textContent=ServerI18n.t("modbansWhenPermanent"),s.classList.remove("is-custom");return}let V=new Date(Date.now()+d*1e3),ae=G=>String(G).padStart(2,"0"),se=`${V.getFullYear()}-${ae(V.getMonth()+1)}-${ae(V.getDate())} ${ae(V.getHours())}:${ae(V.getMinutes())}`;a?(s.textContent=ServerI18n.t("modbansWhenCustom",{n:l,unit:ServerI18n.t(i==="day"?"modbansDay":"modbansHour"),stamp:se}),s.classList.add("is-custom")):(s.textContent=ServerI18n.t("modbansWhenPreset",{dur:_(d),stamp:se}),s.classList.remove("is-custom"))},T=function(){let V=O();t.textContent=`= ${V.toLocaleString()}s`,a&&(l=Math.max(1,parseInt(h.value,10)||1),d=V,z())},R=e.querySelector("[data-modbans-presets]"),j=function(){a=!0,o.hidden=!1,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(V){V.classList.toggle("is-active",V===u)}),T()},J=function(V){a=!1,o.hidden=!0,R.querySelectorAll(".admin-modbans-modal-preset").forEach(function(ae){ae.classList.toggle("is-active",ae===V)})};D(),z(),T(),e.addEventListener("click",function(V){let ae=V.target.closest("[data-modbans-target-kind]");if(ae){c=ae.dataset.modbansTargetKind,ae.parentElement.querySelectorAll("[data-modbans-target-kind]").forEach(function(Z){Z.classList.toggle("is-active",Z===ae)}),D();return}if(V.target.closest("[data-modbans-custom]")){j();return}let se=V.target.closest("[data-modbans-custom-unit]");if(se){i=se.dataset.modbansCustomUnit||"hour",e.querySelectorAll("[data-modbans-custom-unit]").forEach(function(Z){Z.classList.toggle("is-active",Z===se)}),T();return}let G=V.target.closest("[data-modbans-duration]");G&&(d=parseInt(G.dataset.modbansDuration,10)||0,J(G),z())}),h.addEventListener("input",T),p&&p.addEventListener("input",function(){r=p.value.trim(),D()});let W=e.querySelector("[data-modbans-reason]");N.open({icon:"\u2298",title:ServerI18n.t("modbansModalTitle"),subtitle:ServerI18n.t("cfmSubBanTimed"),severity:"danger",confirmLabel:ServerI18n.t("modbansConfirmBan"),cancelLabel:ServerI18n.t("cancel"),body:e,width:480}).then(function(V){if(!V){n(!1);return}if(!r){window.showToast&&window.showToast(ServerI18n.t("modbansToastNeedTarget"),!1),n(!1);return}d===0?N.open({icon:"\u26A0",title:ServerI18n.t("modbansConfirmPermTitle"),subtitle:ServerI18n.t("cfmSubBanPermanent"),severity:"warn",confirmLabel:ServerI18n.t("modbansConfirmPermLabel"),cancelLabel:ServerI18n.t("modbansBack"),body:ServerI18n.t("modbansConfirmPermBody",{target:`<b>${k(m({target_kind:c,target:r}))}</b>`})}).then(function(ae){if(!ae){n(!1);return}w(c,r,d,W.value.trim(),B).then(n)}):w(c,r,d,W.value.trim(),B).then(n)})})}async function w(C,H,B,N,v){try{let c=await(window.csrfFetch||fetch)("/admin/mod/bans/add",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:C,target:H,duration_s:B,reason:N||"",kind:v||"ban"})});if(!c.ok)throw new Error(`HTTP ${c.status}`);return window.showToast&&window.showToast(B===0?ServerI18n.t("modbansToastPermBanned"):ServerI18n.t("modbansToastBanned",{dur:_(B)}),!0),A(),!0}catch(c){return window.showToast&&window.showToast(ServerI18n.t("modbansToastBanFailed",{msg:c.message||ServerI18n.t("modbansUnknownError")}),!1),!1}}async function E(C){let H=(C||"").split("|");if(H.length!==2)return;let B=decodeURIComponent(H[0]),N=decodeURIComponent(H[1]);try{let v=await(window.csrfFetch||fetch)("/admin/mod/bans/remove",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({target_kind:B,target:N})});if(!v.ok)throw new Error(`HTTP ${v.status}`);window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanned"),!0),A()}catch(v){window.showToast&&window.showToast(ServerI18n.t("modbansToastUnbanFailed",{msg:v.message||ServerI18n.t("modbansUnknownError")}),!1)}}function P(){return`
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
      </div>`}function S(){let C=document.getElementById(y);if(!C||C.dataset.modbansBound==="1")return;C.dataset.modbansBound="1",C.addEventListener("click",function(B){if(B.target.closest("[data-modbans-add]")){F({kind:"ban"});return}let N=B.target.closest("[data-modbans-unban]");N&&!N.disabled&&E(N.dataset.modbansUnban)});let H=C.querySelector("[data-modbans-list]");H&&window.AdminSkeletons&&!H.children.length&&H.appendChild(window.AdminSkeletons.listRows({rows:4}))}function b(){let C=document.getElementById("settings-grid");!C||document.getElementById(y)||(C.insertAdjacentHTML("beforeend",P()),S(),A(),U.refreshTimer||(U.refreshTimer=setInterval(A,3e4)))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&b()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&b()}),window.ModBans={openPicker:F,refreshList:A,formatTarget:m,formatRemaining:_}})()});var Xe=ve(()=>{(function(){"use strict";let y="admin-mobile-nav-root",k=[{id:"live",route:"live",icon:"\u25B6",label:"Live"},{id:"moderation",route:"moderation",icon:"\u2298",labelKey:"adminRouteTitle_moderation",badgeKey:"pending"},{id:"polls",route:"polls",icon:"\u22B7",labelKey:"adminRouteTitle_polls"},{id:"assets",route:"assets",icon:"\u229E",labelKey:"mnavTabAssets"},{id:"more",route:null,icon:"\u22EF",labelKey:"mnavMore"}],g=[{route:"overlay",icon:"\u25A3",labelKey:"adminRouteTitle_overlay",descKey:"mnavDescOverlay"},{route:"viewer",icon:"\u25D0",labelKey:"adminRouteTitle_viewer",descKey:"mnavDescViewer"},{route:"effects",icon:"\u2726",labelKey:"mnavEffects",descKey:"mnavDescEffects"},{route:"themes",icon:"\u2756",labelKey:"mnavThemes",descKey:"mnavDescThemes"},{route:"widgets",icon:"\u25A5",labelKey:"adminNavWidgets"},{route:"history",icon:"\u25F7",labelKey:"adminRouteTitle_history",descKey:"mnavDescHistory"},{route:"backup",icon:"\u21EA",labelKey:"mnavBackup",descKey:"mnavDescBackup"},{route:"system",icon:"\u25EB",labelKey:"adminNavSystem",descKey:"mnavDescSystem"},{route:"integrations",icon:"\u232C",labelKey:"adminNavIntegrations",desc:"Slido \xB7 Discord \xB7 OBS"}],f={dashboard:"live",messages:"live",broadcast:"overlay","viewer-config":"viewer",display:"viewer",security:"system",modqueue:"moderation",modbans:"moderation",fingerprints:"moderation",ratelimit:"moderation",audit:"history",replay:"history",fonts:"assets",webhooks:"integrations",plugins:"integrations","api-tokens":"integrations",scheduler:"integrations"},x=!1,U=0;function A(){return`
      <div id="${y}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow hidden>
          ${g.map(S=>`
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${S.route}">
              <span class="admin-mobile-nav__o-icon">${S.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${S.labelKey?ServerI18n.t(S.labelKey):S.label}</span>
                <span class="admin-mobile-nav__o-desc">${S.descKey?ServerI18n.t(S.descKey):S.desc||""}</span>
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
          ${k.map(S=>`
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${S.id}" data-mn-route="${S.route||""}">
              <span class="admin-mobile-nav__icon">${S.icon}</span>
              <span class="admin-mobile-nav__label">${S.labelKey?ServerI18n.t(S.labelKey):S.label}</span>
              ${S.badgeKey?`<span class="admin-mobile-nav__badge" data-mn-badge="${S.badgeKey}" hidden>0</span>`:""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`}function _(){let S=(location.hash||"").replace(/^#\//,"").split("/")[0]||"",b=f[S]||S;return k.some(C=>C.id===b)?b:g.some(C=>C.route===b)?"more":""}function m(){let S=document.getElementById(y);if(!S)return;let b=_();S.querySelectorAll("[data-mn-tab]").forEach(C=>{C.classList.toggle("is-active",C.dataset.mnTab===b)})}function M(S){let b=document.getElementById(y);b&&(x=S,b.dataset.overflow=S?"open":"closed",b.querySelector("[data-mn-overflow]").hidden=!S,b.querySelector("[data-mn-backdrop]").hidden=!S,b.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active",S))}function F(S){if(S.target.closest("[data-mn-backdrop]")){M(!1);return}if(S.target.closest("[data-mn-logout]")){M(!1);let H=document.getElementById("logoutButton");H&&H.click();return}let b=S.target.closest("[data-mn-tab]");if(b){if(b.dataset.mnTab==="more"){M(!x);return}M(!1),b.dataset.mnRoute&&(location.hash="#/"+b.dataset.mnRoute);return}let C=S.target.closest("[data-mn-route]");C&&C.classList.contains("admin-mobile-nav__o-row")&&(M(!1),location.hash="#/"+C.dataset.mnRoute)}async function w(){try{let S=await fetch("/admin/modqueue/list",{credentials:"same-origin"});if(!S.ok)return;let b=await S.json(),C=Array.isArray(b.pending)?b.pending.length:0;U=C;let H=document.querySelector("[data-mn-badge='pending']");if(!H)return;H.textContent=String(C),H.hidden=!(C>0)}catch{}}function E(){if(window.matchMedia?.("(min-width: 769px)").matches)return;let S=0;function b(){let C=document.activeElement,H=C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.isContentEditable);document.body.classList.toggle("admin-mobile-nav--hidden",!!H)}document.addEventListener("focusin",()=>{cancelAnimationFrame(S),S=requestAnimationFrame(b)}),document.addEventListener("focusout",()=>{cancelAnimationFrame(S),S=requestAnimationFrame(()=>setTimeout(b,50))})}function P(){document.getElementById(y)||window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&(document.body.insertAdjacentHTML("beforeend",A()),document.addEventListener("click",F),window.addEventListener("hashchange",()=>{M(!1),m()}),m(),w(),setInterval(w,8e3),E())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P()})()});var Ze=ve(()=>{(function(){"use strict";var y="admin-session-expired-root",k=!1,g=null;function f(m,M){try{var F=window.ServerI18n&&ServerI18n.t(m);return F&&F!==m?F:M}catch{return M}}function x(){var m=document.getElementById(y);if(m&&m.remove(),document.body.classList.remove("is-session-expired"),k=!1,g&&g.focus)try{g.focus()}catch{}g=null}function U(m){if(m.key==="Tab"){var M=document.getElementById(y);if(M){var F=M.querySelectorAll("input, button");if(F.length){var w=F[0],E=F[F.length-1];m.shiftKey&&document.activeElement===w?(m.preventDefault(),E.focus()):!m.shiftKey&&document.activeElement===E&&(m.preventDefault(),w.focus())}}}}function A(){if(!(k||document.getElementById(y))){k=!0,g=document.activeElement,document.body.classList.add("is-session-expired");var m=document.createElement("div");m.id=y,m.className="admin-sx",m.setAttribute("role","alertdialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","admin-sx-title"),m.setAttribute("aria-describedby","admin-sx-body"),m.innerHTML='<div class="admin-sx__backdrop"></div><div class="admin-sx__panel"><h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">'+f("sxTitle","\u767B\u5165\u5DF2\u904E\u671F")+'</h2><p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">'+f("sxBody","\u8ACB\u91CD\u65B0\u767B\u5165\u3002\u5927\u87A2\u5E55\u8207\u89C0\u773E\u4E0D\u53D7\u5F71\u97FF\uFF0C\u91CD\u65B0\u8F38\u5165\u5BC6\u78BC\u5373\u53EF\u56DE\u5230\u525B\u624D\u7684\u9801\u9762\u3002")+'</p><form class="admin-sx__form" data-sx-form><label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">'+f("sxPasswordLabel","\u7BA1\u7406\u5BC6\u78BC")+'</label><input class="admin-sx__input" type="password" id="admin-sx-password" name="password" autocomplete="current-password" required /><label class="admin-login-remember" for="admin-sx-remember"><input type="checkbox" id="admin-sx-remember" name="remember" value="1" /><span data-i18n="adminLoginRemember">'+f("adminLoginRemember","\u5728\u9019\u53F0\u88DD\u7F6E\u4FDD\u6301\u767B\u5165 30 \u5929")+'</span></label><p class="admin-login-remember-note" data-i18n="adminLoginRememberNote">'+f("adminLoginRememberNote","\u53EA\u5728\u81EA\u5DF1\u7684\u88DD\u7F6E\u52FE\u9078\uFF1B\u5171\u7528\u88DD\u7F6E\u8ACB\u4FDD\u6301\u672A\u52FE\u9078\u3002")+'</p><p class="admin-sx__error" data-sx-error role="alert" hidden></p><button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">'+f("sxSubmit","\u91CD\u65B0\u767B\u5165")+"</button></form></div>",document.body.appendChild(m),document.addEventListener("keydown",U,!0);var M=m.querySelector("#admin-sx-password");setTimeout(function(){try{M.focus()}catch{}},30),m.querySelector("[data-sx-form]").addEventListener("submit",function(F){F.preventDefault(),_(m,M)})}}function _(m,M){var F=m.querySelector("[data-sx-error]"),w=m.querySelector(".admin-sx__submit");F.hidden=!0,w.disabled=!0;var E=new URLSearchParams;E.set("password",M.value),m.querySelector("#admin-sx-remember").checked&&E.set("remember","1");var P=window.__adminRawFetch||window.fetch;P.call(window,"/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"fetch",Accept:"application/json"},body:E.toString()}).then(function(S){return S.json().then(function(b){return{status:S.status,data:b}},function(){return{status:S.status,data:{}}})}).then(function(S){if(w.disabled=!1,S.status===200&&S.data&&S.data.ok){var b=document.querySelector('meta[name="csrf-token"]');b&&S.data.csrf_token&&(b.content=S.data.csrf_token),document.removeEventListener("keydown",U,!0),x(),document.dispatchEvent(new CustomEvent("admin:session-restored")),window.showToast&&window.showToast(f("sxToastBack","\u5DF2\u91CD\u65B0\u767B\u5165"),!0);return}S.status===429?F.textContent=f("sxLockedOut","\u5617\u8A66\u592A\u591A\u6B21\uFF0C\u8ACB\u7A0D\u7B49\u4E00\u4E0B\u518D\u8A66\u3002"):F.textContent=f("sxWrongPassword","\u5BC6\u78BC\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u4E00\u6B21\u3002"),F.hidden=!1,M.select()}).catch(function(){w.disabled=!1,F.textContent=f("sxNetworkError","\u9023\u4E0D\u4E0A\u4F3A\u670D\u5668\uFF0C\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u3002"),F.hidden=!1})}window.AdminSessionExpired={open:A,close:x,isOpen:function(){return k}}})()});var et=ve(()=>{(function(){"use strict";let y="admin-reconnect-banner",x=0,U=0,A="ok",_=0,m=5e3,M=!1,F=0;function w(r){if(A!==r){if(A=r,r==="ok"||r==="dismissed"){P(),r==="ok"&&(x=0,U=0,m=5e3);return}E()}}function E(){let r=document.getElementById(y);r||(r=document.createElement("div"),r.id=y,r.className="admin-rcb",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.insertBefore(r,document.body.firstChild)),r.dataset.state=A;let n=A==="exhausted",d=n?"admin-rcb--crimson":"admin-rcb--amber";r.className=`admin-rcb ${d}`,r.innerHTML=n?b():S(),r.querySelector("[data-rcb-action='retry']")?.addEventListener("click",H),r.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click",()=>w("dismissed")),document.body.classList.toggle("admin-rcb-active",!0),document.body.classList.toggle("admin-rcb-exhausted",n),F||(F=setInterval(C,250))}function P(){let r=document.getElementById(y);r&&r.remove(),document.body.classList.remove("admin-rcb-active","admin-rcb-exhausted"),F&&(clearInterval(F),F=0)}function S(){let r=Math.max(0,(_-Date.now())/1e3),n=m/1e3,d=Math.min(100,(n-r)/n*100);return`
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
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`}function C(){if(A!=="reconnecting")return;let r=document.getElementById(y);if(!r)return;let n=Math.max(0,(_-Date.now())/1e3),d=m/1e3,a=Math.min(100,(d-n)/d*100),l=r.querySelector(".admin-rcb__progress-fill");l&&(l.style.width=a+"%")}function H(){U=0,x=0,m=5e3,w("reconnecting"),B()}async function B(){try{let r=await fetch("/admin/bootstrap",{credentials:"same-origin"});r.ok?N():r.status===401||r.status===403?w("ok"):v()}catch{v()}}function N(){w("ok")}function v(){if(x+=1,U+=1,U>=10){w("exhausted");return}x>=3&&(m=Math.min(3e4,5e3*Math.pow(1.5,Math.max(0,U-1))),_=Date.now()+m,w("reconnecting"),setTimeout(B,m))}function c(){if(!window.DANMU_CONFIG?.session?.logged_in||!document.body.classList.contains("admin-body"))return;let r=window.csrfFetch,n=window.fetch;window.__adminRawFetch=n,document.addEventListener("admin:session-restored",()=>{M=!1,N()});async function d(a){try{let l=await a;return l&&l.ok?A!=="ok"&&A!=="dismissed"&&N():l&&l.status===401&&!M?(M=!0,window.AdminSessionExpired?window.AdminSessionExpired.open():location.reload()):l&&l.status>=500&&v(),l}catch(l){throw v(),l}}typeof r=="function"&&(window.csrfFetch=function(){return d(r.apply(this,arguments))}),window.fetch=function(a,l){let i=typeof a=="string"?a:a&&a.url||"",e=n.call(this,a,l);return i.startsWith("/admin/")||i.indexOf("//")===-1&&i.startsWith("admin/")?d(e):e}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})()});var tt=ve(()=>{(function(){"use strict";let y="admin-help-drawer-root",k={_default:{title:"Danmu Fire",tipKeys:["helpDrawerDefaultTip1","helpDrawerDefaultTip2","helpDrawerDefaultTip3"]},live:{titleKey:"helpDrawerLiveTitle",tipKeys:["helpDrawerLiveTip1","helpDrawerLiveTip2","helpDrawerLiveTip3"]},polls:{titleKey:"helpDrawerPollsTitle",tipKeys:["helpDrawerPollsTip1","helpDrawerPollsTip2","helpDrawerPollsTip3","helpDrawerPollsTip4"]},widgets:{titleKey:"adminNavWidgets",tipKeys:["helpDrawerWidgetsTip1","helpDrawerWidgetsTip2","helpDrawerWidgetsTip3"]},moderation:{titleKey:"helpDrawerModerationTitle",fieldTipKey:"helpDrawerModerationFieldTip",tipKeys:["helpDrawerModerationTip1","helpDrawerModerationTip2","helpDrawerModerationTip3"]},webhooks:{title:"Webhooks",tipKeys:["helpDrawerWebhooksTip1","helpDrawerWebhooksTip2","helpDrawerWebhooksTip3"]},"api-tokens":{title:"API Tokens",tipKeys:["helpDrawerApiTokensTip1","helpDrawerApiTokensTip2","helpDrawerApiTokensTip3"]},plugins:{titleKey:"helpDrawerPluginsTitle",tipKeys:["helpDrawerPluginsTip1","helpDrawerPluginsTip2","helpDrawerPluginsTip3"]},overlay:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},broadcast:{titleKey:"helpDrawerOverlayTitle",tipKeys:["helpDrawerOverlayTip1","helpDrawerOverlayTip2","helpDrawerOverlayTip3"]},viewer:{titleKey:"helpDrawerViewerTitle",tipKeys:["helpDrawerViewerTip1","helpDrawerViewerTip2","helpDrawerViewerTip3"]},modqueue:{titleKey:"helpDrawerModqueueTitle",tipKeys:["helpDrawerModqueueTip1","helpDrawerModqueueTip2","helpDrawerModqueueTip3","helpDrawerModqueueTip4"]},sessions:{titleKey:"helpDrawerSessionsTitle",tipKeys:["helpDrawerSessionsTip1","helpDrawerSessionsTip2","helpDrawerSessionsTip3"]},system:{titleKey:"helpDrawerSystemTitle",tipKeys:["helpDrawerSystemTip1","helpDrawerSystemTip2","helpDrawerSystemTip3","helpDrawerSystemTip4"]}},g=[{term:"Desktop",defKey:"helpDrawerGlossaryDesktopDef"},{term:"Session",defKey:"helpDrawerGlossarySessionDef"},{term:"Fire Token",defKey:"helpDrawerGlossaryFireTokenDef"},{term:"Fingerprint (fp)",defKey:"helpDrawerGlossaryFingerprintDef"},{term:".dme",defKey:"helpDrawerGlossaryDmeDef"}],f=[{label:"GitHub Repo",url:"https://github.com/guan4tou2/danmu-desktop"},{label:"Issues",url:"https://github.com/guan4tou2/danmu-desktop/issues"},{label:"CHANGELOG",url:"https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md"},{label:"Plugin SDK",url:"https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins"}];function x(S){return S==null?"":String(S).replace(/[&<>"']/g,function(b){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[b]})}function U(){let S=(location.hash||"").replace("#/","").split("/")[0]||"";return k[S]?S:"_default"}function A(){return`
      <div id="${y}" class="admin-help" role="complementary" aria-labelledby="admin-help-title">
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`}function _(){let S=k[U()],b=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",C=S.titleKey?ServerI18n.t(S.titleKey):S.title,H=S.tipKeys.map(c=>`
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">\u2192</span>
        <span>${x(typeof c=="string"?ServerI18n.t(c):c.literal)}</span>
      </div>`).join(""),B=S.fieldTipKey?`
      <div class="admin-help__fieldtip">
        <span class="admin-help__fieldtip-label">${ServerI18n.t("helpDrawerFieldTipLabel")}</span>
        <span>${x(ServerI18n.t(S.fieldTipKey))}</span>
      </div>`:"",N=g.map(c=>`
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${x(c.term)}</div>
        <div class="admin-help__glossary-def">${x(ServerI18n.t(c.defKey))}</div>
      </div>`).join(""),v=f.map(c=>`
      <a class="admin-help__resource" href="${x(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${x(c.label)}</span>
        <span class="admin-help__resource-url">${x(c.url.replace(/^https?:\/\//,""))}</span>
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
            <span class="admin-help__route-title">${x(C)}</span>
            <span class="admin-help__route-tag">${ServerI18n.t("helpDrawerCurrentPageTag")}</span>
          </div>
          <div class="admin-help__tips">${H}</div>
          ${B}
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerShortcutsLabel")}</div>
          <button type="button" class="admin-help__shortcut" data-help-shortcuts>
            <div class="admin-help__keys"><kbd class="admin-help__kbd">?</kbd></div>
            <span class="admin-help__shortcut-desc">${x(ServerI18n.t("ksTitle"))}</span>
          </button>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerGlossaryLabel")}</div>
          <div class="admin-help__glossary">${N}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">${ServerI18n.t("helpDrawerResourcesLabel")}</div>
          <div class="admin-help__resources">${v}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${b?"v"+x(b):""} \xB7 ${ServerI18n.t("helpDrawerFooterHint")}
      </footer>`}function m(){let S=document.getElementById(y);S||(document.body.insertAdjacentHTML("beforeend",A()),S=document.getElementById(y),S.addEventListener("click",b=>{if(b.target.closest("[data-help-close]")){M();return}b.target.closest("[data-help-shortcuts]")&&(M(),window.AdminShortcuts&&window.AdminShortcuts.open())})),S.querySelector("[data-help-body]").innerHTML=_(),document.body.classList.add("is-help-open"),document.addEventListener("keydown",w)}function M(){let S=document.getElementById(y);S&&S.remove(),document.body.classList.remove("is-help-open"),document.removeEventListener("keydown",w)}function F(){document.getElementById(y)?M():m()}function w(S){S.key==="Escape"&&(S.preventDefault(),M())}function E(S){let b=S.target;b&&(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||S.key==="F1"&&(S.preventDefault(),F())}function P(){window.DANMU_CONFIG?.session?.logged_in&&document.body.classList.contains("admin-body")&&document.addEventListener("keydown",E)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P(),window.AdminHelp={open:m,close:M,toggle:F}})()});var nt=ve(()=>{(function(){"use strict";var y="admin-shortcuts-root",k=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");function g(v,c){try{var r=window.ServerI18n&&ServerI18n.t(v);return r&&r!==v?r:c}catch{return c}}function f(v,c){window.showToast&&window.showToast(v,c!==!1)}function x(v,c){return(window.csrfFetch||window.fetch)(v,c||{})}function U(){window.AdminCommandPalette&&window.AdminCommandPalette.toggle()}async function A(){var v=!1;try{var c=await fetch("/admin/broadcast/status",{credentials:"same-origin"});c.ok&&(v=(await c.json()).mode==="live")}catch{}try{var r=await x("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:v?"standby":"live"})});if(!r.ok)throw new Error("HTTP "+r.status);f(g(v?"ksToastDisplayOff":"ksToastDisplayOn",v?"\u5DF2\u95DC\u9589":"\u5DF2\u958B\u555F")),window.AdminDashboard&&window.AdminDashboard.refreshCockpitOverlay&&window.AdminDashboard.refreshCockpitOverlay()}catch{f(g("cmdkToastToggleFailed","\u5207\u63DB\u5931\u6557"),!1)}}async function _(){try{var v=await x("/admin/overlay/clear",{method:"POST"});if(!v.ok)throw new Error("HTTP "+v.status);f(g("toastCleared","\u5DF2\u6E05\u7A7A"))}catch{f(g("toastClearFailed","\u6E05\u7A7A\u5931\u6557"),!1)}}async function m(){var v="idle";try{var c=await fetch("/admin/poll/status",{credentials:"same-origin"});c.ok&&(v=(await c.json()).state||"idle")}catch{}if(v==="idle"){location.hash="#/polls",f(g("ksToastNoPoll","\u9084\u6C92\u6709\u6295\u7968\uFF0C\u5148\u5EFA\u7ACB\u4E00\u500B"),!1);return}var r=v==="active";try{var n=await x(r?"/admin/poll/end":"/admin/poll/start",{method:"POST"});if(!n.ok)throw new Error("HTTP "+n.status);f(g(r?"ksToastPollEnded":"ksToastPollStarted",r?"\u5DF2\u7D50\u675F":"\u5DF2\u958B\u59CB"))}catch{f(g("ksToastPollFailed","\u6295\u7968\u64CD\u4F5C\u5931\u6557"),!1)}}function M(v){return k?v.metaKey:v.ctrlKey}var F=k?"\u2318":"Ctrl",w=[{group:"global",keys:[F,"K"],labelKey:"ksOpenPalette",fallback:"\u958B\u555F\u547D\u4EE4\u9762\u677F",match:function(v){return M(v)&&(v.key==="k"||v.key==="K")},run:U},{group:"global",keys:["?"],labelKey:"ksThisSheet",fallback:"\u9019\u4EFD\u5FEB\u901F\u9375",match:function(v){return v.key==="?"&&!M(v)&&!v.altKey||v.key==="/"&&M(v)},run:function(){H()}},{group:"global",keys:[F,"\u21E7","D"],labelKey:"ksToggleDisplay",fallback:"\u5207\u63DB\u986F\u793A\u5C64",match:function(v){return M(v)&&v.shiftKey&&(v.key==="d"||v.key==="D")},run:A},{group:"global",keys:[F,"\u21E7","\u232B"],labelKey:"ksClearScreen",fallback:"\u6E05\u7A7A\u5927\u87A2\u5E55",match:function(v){return M(v)&&v.shiftKey&&v.key==="Backspace"},run:_},{group:"feed",keys:["J","/","K"],labelKey:"ksFeedMove",fallback:"\u4E0A\uFF0F\u4E0B\u4E00\u5247",match:function(v){return!M(v)&&"jkJK".indexOf(v.key)>=0},run:function(v){window.AdminLiveFeed.moveFocus(v.key==="j"||v.key==="J"?1:-1)}},{group:"feed",keys:["B","/","\u21E7B"],labelKey:"ksFeedBlock",fallback:"\u5C01\u9396\u9019\u5247\u7684\u5B57\uFF0F\u4EBA",match:function(v){return!M(v)&&(v.key==="b"||v.key==="B")},run:function(v){window.AdminLiveFeed.blockFocused(v.shiftKey?"fingerprint":"keyword")}},{group:"feed",keys:["Space"],labelKey:"ksFeedPause",fallback:"\u66AB\u505C\uFF0F\u7E7C\u7E8C\u6372\u52D5",match:function(v){return!M(v)&&v.key===" "},run:function(){window.AdminLiveFeed.togglePause()}},{group:"feed",keys:["P"],labelKey:"ksFeedPoll",fallback:"\u958B\u59CB\uFF0F\u7D50\u675F\u6295\u7968",match:function(v){return!M(v)&&(v.key==="p"||v.key==="P")},run:m}];function E(v){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(v):v==null?"":String(v).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}function P(v){return w.filter(function(c){return c.group===v}).map(function(c){var r=c.keys.map(function(n){return n==="/"?'<span class="admin-ks__sep">/</span>':'<kbd class="admin-ks__key">'+E(n)+"</kbd>"}).join("");return'<div class="admin-ks__row"><span class="admin-ks__desc">'+E(g(c.labelKey,c.fallback))+'</span><span class="admin-ks__keys">'+r+"</span></div>"}).join("")}function S(){var v=document.getElementById(y);v&&v.remove(),document.removeEventListener("keydown",b,!0)}function b(v){(v.key==="Escape"||v.key==="?")&&(v.preventDefault(),S())}function C(){if(!document.getElementById(y)){var v=document.createElement("div");v.id=y,v.className="admin-ks",v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","admin-ks-title"),v.innerHTML='<div class="admin-ks__backdrop" data-ks-close></div><div class="admin-ks__panel"><h2 class="admin-ks__title" id="admin-ks-title">'+E(g("ksTitle","\u9375\u76E4\u5FEB\u901F\u9375"))+'</h2><div class="admin-ks__group-label">'+E(g("ksGroupGlobal","\u5168\u57DF"))+'</div><div class="admin-ks__group">'+P("global")+'</div><div class="admin-ks__group-label">'+E(g("ksGroupFeed","\u63A7\u5236\u53F0\u8A0A\u606F\u6D41"))+'</div><div class="admin-ks__group">'+P("feed")+'</div><p class="admin-ks__note">'+E(g("ksNote","Windows \u4EE5 Ctrl \u53D6\u4EE3 \u2318\u3002"))+'</p><button type="button" class="admin-ks__close" data-ks-close>'+E(g("closeBtn","\u95DC\u9589"))+"</button></div>",document.body.appendChild(v),v.addEventListener("click",function(r){r.target.closest("[data-ks-close]")&&S()}),document.addEventListener("keydown",b,!0);var c=v.querySelector(".admin-ks__close");c&&setTimeout(function(){try{c.focus()}catch{}},30)}}function H(){document.getElementById(y)?S():C()}function B(v){if(!v)return!1;if(v.isContentEditable)return!0;var c=(v.tagName||"").toLowerCase();return c==="input"||c==="textarea"||c==="select"}function N(){return!(!(window.AdminLiveFeed&&window.AdminLiveFeed.isVisible&&window.AdminLiveFeed.isVisible())||document.body.dataset.messageDrawerOpen==="1"||document.getElementById("admin-hud-modal-root"))}document.addEventListener("keydown",function(v){if(document.body.classList.contains("admin-body")&&window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&!document.getElementById("admin-session-expired-root"))for(var c=B(document.activeElement),r=0;r<w.length;r++){var n=w[r];if(n.group==="feed"){if(c||!N())continue}else if(c&&!M(v))continue;if(n.match(v)){v.preventDefault(),n.run(v);return}}}),window.AdminShortcuts={open:C,close:S,toggle:H,list:function(){return w.slice()}}})()});var at=ve(()=>{(function(){"use strict";let y="theme-mode",k="admin-theme-mode",g="admin-theme-toggle";(function(){try{if(localStorage.getItem(y)!=null)return;let E=localStorage.getItem(k);(E==="light"||E==="dark"||E==="auto")&&(localStorage.setItem(y,E),localStorage.removeItem(k))}catch{}})();function x(){try{let w=localStorage.getItem(y);if(w==="light"||w==="dark"||w==="auto")return w}catch{}return"auto"}function U(w){try{localStorage.setItem(y,w)}catch{}}function A(w){let E=document.documentElement;w==="auto"?E.removeAttribute("data-theme"):E.setAttribute("data-theme",w),m(w)}function _(w){return w==="light"||w==="dark"?w:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function m(w){let E=document.getElementById(g);if(!E)return;let P=_(w);E.dataset.mode=w,E.dataset.effective=P,E.textContent=w==="auto"?"\u25D0":P==="light"?"\u2600":"\u263E",E.title=w==="auto"?ServerI18n.t("themeModeFollowSystem",{mode:P==="light"?ServerI18n.t("themeModeLightShort"):ServerI18n.t("themeModeDarkShort")}):w==="light"?ServerI18n.t("themeModeLight"):ServerI18n.t("themeModeDark")}function M(){let w=x(),E=w==="auto"?"light":w==="light"?"dark":"auto";U(E),A(E)}function F(){if(!document.body.classList.contains("admin-body")||!window.DANMU_CONFIG?.session?.logged_in)return;let w=document.querySelector(".admin-dash-broadcast")||document.querySelector("#logoutButton")||null,E=document.getElementById(g);if(E){w&&E.classList.contains("admin-theme-toggle--floating")&&w.parentNode&&!w.parentNode.contains(E)&&(E.classList.remove("admin-theme-toggle--floating"),w.parentNode.insertBefore(E,w));return}let P=document.createElement("button");P.id=g,P.type="button",P.className="admin-theme-toggle",P.addEventListener("click",M),w&&w.parentNode?w.parentNode.insertBefore(P,w):(P.classList.add("admin-theme-toggle--floating"),document.body.appendChild(P)),m(x())}if(A(x()),window.matchMedia)try{window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{x()==="auto"&&m("auto")})}catch{}window.addEventListener("storage",w=>{w.key===y&&A(x())}),window.AdminThemeSwitcher={getMode:x,setMode:function(w){w!=="auto"&&w!=="light"&&w!=="dark"||(U(w),A(w),m(w),document.dispatchEvent(new CustomEvent("admin:theme-mode",{detail:{mode:w}})))}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0})}):(F(),new MutationObserver(F).observe(document.body,{childList:!0,subtree:!0}))})()});var it=ve(()=>{(function(){"use strict";var y={csrfToken:null,settings:{},session:{logged_in:!1},fontCache:[],wsConnected:!1},k=[];window.DanmuStore={get:function(g){return y[g]},set:function(g,f){y[g]=f,k.forEach(function(x){x(g,f)}),window.DanmuEvents&&window.DanmuEvents.emit("store:"+g,f)},subscribe:function(g){k.push(g)},getAll:function(){return Object.assign({},y)}}})()});var st=ve(()=>{(function(){"use strict";let g=0;function f(){return window.__adminCtx||{}}function x(){let m=f();return typeof m.getSettings=="function"?m.getSettings()||{}:{}}function U(){let m=x();if(m&&typeof m.OpsContact<"u"){let M=m.OpsContact;if(Array.isArray(M))return M[3]||M[0]||null;if(typeof M=="string")return M}return null}function A(){let m=f().appContainer||document.getElementById("app-container");if(!m)return;let M=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"";m.innerHTML=`
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
    `;let F=m.querySelector("[data-login-reveal]");F&&F.addEventListener("click",()=>{let S=document.getElementById("password");if(!S)return;let b=S.type==="text";S.type=b?"password":"text",F.textContent=ServerI18n.t(b?"adminLoginReveal":"adminLoginHide");try{S.focus()}catch{}});let w=document.getElementById("loginForm"),E=document.getElementById("password"),P=document.getElementById("loginAttemptsHint");if(w){try{let S=parseInt(sessionStorage.getItem("admin_login_attempts")||"0",10);if(Number.isFinite(S)&&S>0){g=S;let b=Math.max(0,5-g);if(P&&g>0&&b>0){P.hidden=!1;let C=document.getElementById("password");C&&C.classList.add("is-error"),P.textContent=ServerI18n.t("loginAttemptsRemaining",{n:b})}}}catch{}w.addEventListener("submit",async S=>{if(S.preventDefault(),!E)return;let b=new URLSearchParams;b.set("password",E.value),document.getElementById("admin-login-remember")?.checked&&b.set("remember","1");try{let C=await fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString(),redirect:"manual"});if(C.status===429){let H=C.headers.get("Retry-After"),B=parseInt(H,10),N=Number.isFinite(B)&&B>0?B:300;_(N);return}g+=1;try{sessionStorage.setItem("admin_login_attempts",String(g))}catch{}window.location.reload()}catch(C){console.error("Login submit failed:",C),P&&(P.hidden=!1,P.textContent=ServerI18n.t("networkError"))}})}}function _(m){let M=document.getElementById("adminLoginCard");if(!M)return;let F=U(),w=F?`<a class="admin-lockout-contact" href="${F}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`:"";M.classList.add("admin-lockout-card"),M.innerHTML=`
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
        ${w}
      </div>
    `;let E=document.getElementById("lockoutCountdown"),P=m,S=C=>{let H=Math.floor(C/60),B=C%60;return`${String(H).padStart(2,"0")}:${String(B).padStart(2,"0")}`};E&&(E.textContent=S(P));let b=setInterval(()=>{P-=1,E&&(E.textContent=S(Math.max(0,P))),P<=0&&(clearInterval(b),g=0,A(),ServerI18n.updateUI())},1e3)}window.AdminLogin={render:A,renderLockout:_}})()});var ot=ve(()=>{(function(){"use strict";function y(){return window.__danmuAdminBootstrap||{prime:()=>Promise.resolve(null),get:()=>null}}function k(i){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(i):String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function g(){try{let i=y();await i.prime();let e=i.get("history_stats"),[o,h,t]=await Promise.all([e?null:fetch("/admin/history?hours=24&limit=200",{credentials:"same-origin"}),fetch("/admin/stats/hourly?hours=24",{credentials:"same-origin"}),fetch("/admin/session/current",{credentials:"same-origin"}).catch(()=>null)]);if(!h.ok)return;let s=e||(o&&o.ok?await o.json():null);if(!s)return;let u=(await h.json()).distribution||[],p=s.stats&&s.stats.total||0,$=u.reduce((R,j)=>j.count>(R?.count||-1)?j:R,null),I=$?$.count:0,L=$?($.hour||"").slice(-5):"\u2014",D=document.querySelector('[data-kpi="messages"]');D&&(D.querySelector("[data-kpi-value]").textContent=p.toLocaleString());let O=document.querySelector('[data-kpi="peak"]');O&&(O.querySelector("[data-kpi-value]").textContent=I.toLocaleString());let z=document.querySelector('[data-kpi="unique-fp"]');if(z){let R=new Set;(s.records||[]).forEach(j=>{let J=j.fingerprint||j.fp||j.user_fingerprint;J&&R.add(J)}),z.querySelector("[data-kpi-value]").textContent=R.size.toLocaleString()}let T=document.querySelector('[data-kpi="session"]');if(T){let R=t&&t.ok?await t.json():null,j=R&&R.status==="live",J=T.querySelector("[data-kpi-value]");if(j&&R.started_at){let W=Math.max(0,Math.floor(Date.now()/1e3-R.started_at)),V=Math.floor(W/3600),ae=Math.floor(W%3600/60);J.textContent=V>0?`${V}:${String(ae).padStart(2,"0")}:${String(W%60).padStart(2,"0")}`:`${ae}:${String(W%60).padStart(2,"0")}`}else J.textContent="\u2014"}}catch{}}function f(i,e){let o=document.querySelector(i);if(o){if(typeof e!="number"||e<=0){o.hidden=!0;return}o.hidden=!1,o.textContent=e>999?"999+":String(e)}}async function x(){try{let i=y();await i.prime();let e=i.get("blacklist"),o=i.get("widgets"),h=i.get("history_stats"),t=i.get("effects"),s=i.get("themes");f("[data-count-blacklist]",Array.isArray(e)?e.length:0),f("[data-count-widgets]",Array.isArray(o?.widgets)?o.widgets.length:0),f("[data-count-messages]",h?.stats?.last_24h||0),f("[data-count-effects]",Array.isArray(t?.effects)?t.effects.length:0),f("[data-count-themes]",Array.isArray(s?.themes)?s.themes.length:0);try{let u=await fetch("/admin/plugins/list",{credentials:"same-origin"});if(u.ok){let p=await u.json();f("[data-count-plugins]",Array.isArray(p?.plugins)?p.plugins.length:0)}}catch{}}catch{}}async function U(){x(),A(),a()}async function A(){let i=document.querySelector("[data-dash-poll-body]"),e=document.querySelector("[data-dash-poll-timer]");if(i)try{let o=y();await o.prime();let t=o.get("metrics");if(!t){let I=await fetch("/admin/metrics",{credentials:"same-origin"});if(!I.ok)return;t=await I.json()}let s=t.poll_state;if(!s||!s.active||!Array.isArray(s.options)||s.options.length===0){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`,e&&(e.textContent="");return}let u=s.options.reduce((I,L)=>I+(L.votes||0),0),p=["A","B","C","D","E","F"],$=0;if(s.options.forEach((I,L)=>{(I.votes||0)>(s.options[$].votes||0)&&($=L)}),i.innerHTML=`<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${k(s.question||ServerI18n.t("dashPollRunning"))}</div>`+s.options.map((I,L)=>{let D=u?Math.round(I.votes/u*100):0;return`
            <div class="admin-dash-poll-opt ${L===$&&u>0?"is-winner":""}">
              <div class="row">
                <span class="tag">${p[L]||String(L+1)}</span>
                <span class="label">${k(I.label||"")}</span>
                <span class="pct">${D}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit",{n:I.votes||0})}</span>
              </div>
              <div class="bar"><span style="width:${D}%"></span></div>
            </div>`}).join("")+`<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine",{n:u})}</div>`,e){let I=s.remaining_seconds;e.textContent=typeof I=="number"&&I>0?ServerI18n.t("dashPollRemaining",{mm:Math.floor(I/60),ss:String(I%60).padStart(2,"0")}):"\u25CF LIVE"}}catch{}}function _(i){let e=i.visible!==!1,o=i.config&&i.config.title||i.type||"widget",h=(i.type||"widget").toUpperCase(),t=(i.position||"\u2014").toUpperCase(),s=e?"var(--color-success, #86efac)":"var(--color-warning, #fbbf24)",u=i.created_at&&e?Math.max(0,Math.floor(Date.now()/1e3-i.created_at)):null,p=u!=null?(()=>{let $=Math.floor(u/86400),I=Math.floor(u%86400/3600),L=Math.floor(u%3600/60),D=u%60;return $>0?`UPTIME \xB7 ${$}d ${String(I).padStart(2,"0")}h`:I>0?`UPTIME \xB7 ${I}:${String(L).padStart(2,"0")}:${String(D).padStart(2,"0")}`:`UPTIME \xB7 ${L}:${String(D).padStart(2,"0")}`})():`STATUS \xB7 ${e?"RUNNING":"PAUSED"}`;return`
      <div class="admin-dash-widget-tile" data-widget-id="${k(i.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${s}"></span>
          <span class="kind">${k(h)}</span>
          <span class="cat">${k(t)}</span>
        </div>
        <div class="title">${k(o)}</div>
        <div class="uptime">${p}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${e?" is-active":""}" data-widget-action="toggle" data-running="${e?"1":"0"}">${e?"PAUSE":"RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">${ServerI18n.t("uiConfig")}</button>
        </div>
      </div>`}async function m(i,e){try{let o=await window.csrfFetch("/admin/widgets/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({widget_id:i,config:{visible:!e}})});if(!o.ok)throw new Error("HTTP "+o.status);F()}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastWidgetFailed"),!1)}}function M(i){i.dataset.bound!=="1"&&(i.dataset.bound="1",i.addEventListener("click",e=>{let o=e.target.closest(".admin-dash-widget-tile");if(!o)return;let h=e.target.dataset.widgetAction,t=o.dataset.widgetId;if(!(!h||!t)){if(h==="toggle")m(t,e.target.dataset.running==="1");else if(h==="config"){let s=document.querySelector('[data-route="widgets"]');s&&s.click()}}}))}async function F(){let i=document.querySelector("[data-dash-widgets]");if(i)try{let e=y();await e.prime();let o=e.get("widgets");if(!o){let t=await fetch("/admin/widgets/list",{credentials:"same-origin"});if(!t.ok){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;return}o=await t.json()}let h=(o.widgets||o.items||[]).slice(0,4);if(h.length===0){i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;return}i.innerHTML='<div class="admin-dash-widget-grid">'+h.map(_).join("")+"</div>",M(i)}catch{i.innerHTML=`<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`}}let w=null,E=null,P=null;function S(i){let e=Math.max(0,Math.floor(Date.now()/1e3-i)),o=Math.floor(e/3600),h=Math.floor(e%3600/60),t=e%60;return o>0?`${o}:${String(h).padStart(2,"0")}:${String(t).padStart(2,"0")}`:`${String(h).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function b(i){let e=document.getElementById("admin-session-banner"),o=document.getElementById("sec-live-feed");if(o&&o.classList.toggle("is-idle-collapsed",!(i&&i.status==="live")),e&&e.classList.toggle("is-hero",!(i&&i.status==="live")),!e)return;if(w=i,!(i&&i.status==="live"))e.hidden=!1,e.innerHTML=`
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;else{let t=i.started_at||Date.now()/1e3;e.hidden=!1,e.innerHTML=`
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${k(i.name||ServerI18n.t("dashSessFallbackName"))}</span>
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
        </div>`,C(t)}e.dataset.bound||(e.dataset.bound="1",e.addEventListener("click",B))}function C(i){P&&clearInterval(P);let e=()=>{let o=document.querySelector("[data-sess-timer]");o&&(o.textContent=S(i))};e(),P=setInterval(e,1e3)}function H(){P&&(clearInterval(P),P=null)}async function B(i){let e=i.target.closest("[data-sess-action]");if(!e)return;let o=e.dataset.sessAction;if(o==="open"){let h=document.querySelector("[data-sess-name]"),t=(h?h.value:"").trim();if(!t){h&&h.focus(),window.showToast&&window.showToast(ServerI18n.t("dashToastNeedName"),!1);return}e.disabled=!0;try{let s=await window.csrfFetch("/admin/session/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})}),u=await s.json();if(!s.ok){window.showToast&&window.showToast(u.error||ServerI18n.t("dashToastOpenFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessOpened",{name:t}),!0),b(u.session)}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastOpenSessFailed"),!1)}finally{e.disabled=!1}}else if(o==="close"){let h=e.closest("[data-current-behavior]")?.dataset.currentBehavior||"continue",t=(p,$)=>`<option value="${p}"${p===h?" selected":""}>${$}</option>`;if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("dashCloseTitle"),subtitle:ServerI18n.t("cfmSubCloseSession"),severity:"danger",body:`
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${t("continue",ServerI18n.t("dashCloseBehaviorContinue"))}
              ${t("ended_screen",ServerI18n.t("dashCloseBehaviorEnded"))}
              ${t("reload",ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,confirmLabel:ServerI18n.t("dashCloseTitle")}))return;e.disabled=!0;let u=document.getElementById("sessCloseBehavior")?.value;if(u&&u!==h)try{await window.csrfFetch("/admin/session/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({viewer_end_behavior:u})})}catch{}try{let p=await window.csrfFetch("/admin/session/close",{method:"POST"}),$=await p.json();if(!p.ok){window.showToast&&window.showToast($.error||ServerI18n.t("dashToastCloseFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("dashToastSessClosed"),!0),H(),b({status:"idle",viewer_end_behavior:$.archived&&$.archived.viewer_end_behavior||"continue"})}catch{window.showToast&&window.showToast(ServerI18n.t("dashToastCloseSessFailed"),!1)}finally{e.disabled=!1}}}async function N(){try{let i=await fetch("/admin/session/current",{credentials:"same-origin"});if(!i.ok)return;let e=await i.json();b(e)}catch{}}function v(){N(),E&&clearInterval(E),E=setInterval(N,1e4)}function c(){E&&(clearInterval(E),E=null),H()}let r=null;async function n(){let i=document.querySelector("[data-cockpit-overlay]");if(!i||i.offsetParent===null)return;let e=0,o=!1;try{let p=await fetch("/overlay_status",{credentials:"same-origin"});p.ok&&(e=(await p.json()).overlay_count||0)}catch{}try{let p=await fetch("/admin/broadcast/status",{credentials:"same-origin"});p.ok&&(o=(await p.json()).mode==="live")}catch{}let h=e>0&&o;i.classList.toggle("is-on",h);let t=i.querySelector("[data-cockpit-status]");t&&(t.textContent=h?ServerI18n.t("adminCockpitOn",{n:e}):ServerI18n.t("adminCockpitOff"));let s=i.querySelector('[data-cockpit-action="toggle"]');s&&(s.textContent=ServerI18n.t(h?"adminCockpitTurnOff":"adminCockpitTurnOn"),s.classList.toggle("is-danger",h),s.classList.toggle("is-primary",!h),s.dataset.next=h?"standby":"live");let u=i.querySelector('[data-cockpit-action="clear"]');u&&(u.disabled=e===0)}function d(){let i=document.querySelector("[data-cockpit-overlay]");if(!i||i.dataset.bound)return;i.dataset.bound="1",i.addEventListener("click",async h=>{let t=h.target.closest("[data-cockpit-action]");if(!t)return;let s=t.dataset.cockpitAction;if(s==="clear"){try{let u=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("toastCleared"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("toastClearFailed"),!1)}return}if(s==="toggle"){try{let u=await window.csrfFetch("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t.dataset.next||"standby"})});if(!u.ok)throw new Error("HTTP "+u.status)}catch{window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:""}),!1)}n()}});let e=i.parentElement&&i.parentElement.querySelector('[data-cockpit-action="idle-qr"]');e&&e.addEventListener("click",()=>{location.hash="#/overlay"});let o=i.parentElement&&i.parentElement.querySelector('[data-cockpit-action="poll"]');o&&o.addEventListener("click",()=>{location.hash="#/polls"})}function a(){d(),n(),r&&clearInterval(r),r=setInterval(n,5e3)}function l(){r&&(clearInterval(r),r=null)}window.AdminDashboard={refreshKpi:g,refreshSummary:U,refreshSidebarBadges:x,populatePoll:A,populateWidgets:F,refreshSessionBanner:N,startSessionPolling:v,stopSessionPolling:c,refreshCockpitOverlay:n,startCockpitPolling:a,stopCockpitPolling:l}})()});var rt=ve(()=>{(function(){"use strict";let y="sec-viewer-config-defaults",k=["sec-color","sec-opacity","sec-fontsize","sec-speed","sec-fontfamily","sec-layout"],f=window.AdminUtils&&window.AdminUtils.escapeHtml||function(q){return String(q).replace(/[&<>"']/g,function(Y){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[Y]})},x={Opacity:{min:0,max:100,step:1,unit:"%"},FontSize:{min:12,max:100,step:2,unit:"px"},Speed:{min:.5,max:3,step:.1,unit:"\xD7"}},U=[14,20,32,44,64],A=window.DANMU_CONFIG?.defaultColorPalette||[],_=[{value:"scroll",labelKey:"layoutPresetScroll",icon:"\u2192"},{value:"top_fixed",labelKey:"layoutPresetTop",icon:"\u2580"},{value:"bottom_fixed",labelKey:"layoutPresetBottom",icon:"\u2584"},{value:"float",labelKey:"layoutPresetCenter",icon:"\u25A0"},{value:"rise",labelKey:"layoutPresetSide",icon:"\u258C"}];function m(q,Y){if(window.ServerI18n&&typeof window.ServerI18n.t=="function"){let ee=window.ServerI18n.t(q,Y);if(ee&&ee!==q)return ee}return q}let M={};function F(q){if(M[q]!=null)return M[q];let Y=x[q];return Y?Y.step:1}function w(q,Y){M[q]=Number(Y)||F(q)}let E={options:null,fonts:[],metricsTimer:null,viewerCount:0,allowlistEdit:{},paletteBusy:!1,paletteDraft:"#38BDF8",palettePreview:null,paletteNotice:null},P=["Color","FontFamily","Layout"];function S(q){return P.indexOf(q)!==-1}function b(q){let Y=E.options&&E.options[q],ee=Y&&Y[1];return Array.isArray(ee)?ee.slice():[]}function C(q){return q==="Color"?A.map(Y=>Y.replace(/^#/,"").toUpperCase()):q==="Layout"?_.map(Y=>Y.value):q==="FontFamily"?(E.fonts&&E.fonts.length?E.fonts:["NotoSansTC","Inter"]).map(ee=>typeof ee=="string"?ee:ee.name||ee.family||"").filter(Boolean):[]}function H(q,Y){return q==="Color"?String(Y||"").replace(/^#/,"").toUpperCase():String(Y||"")}function B(){return`
      <div id="${y}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <!-- \u6A19\u984C\uFF0F\u8AAA\u660E\u5169\u5957\u4E26\u5B58\uFF0C\u7531 data-dsp-mode \u6C7A\u5B9A\u9732\u54EA\u4E00\u5957\uFF08CSS \u5728 style.css\uFF09\u3002
             \u540C\u4E00\u4EFD\u9762\u677F\u670D\u52D9\u986F\u793A\u5C64\u8207\u89C0\u773E\u9801\u5169\u689D\u8DEF\u7531\uFF0C\u6587\u6848\u4E0D\u80FD\u53EA\u5BEB\u4E00\u7A2E\u3002 -->
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-dsp-only="values">${f(m("displayValuesTitle"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="values">${m("displayValuesNote")}</p>
          <h2 class="admin-ui-page-title" data-dsp-only="audience">${f(m("viewerGroupAudience"))}</h2>
          <p class="admin-ui-page-note" data-dsp-only="audience">${m("displayViewerDefaultsNote")}</p>
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
                <span>${f(m("displayAdminControlledTitle"))}</span>
              </div>
              <div style="display:grid;grid-template-columns:auto 1fr;gap:7px 12px;align-items:start;font-size:11px;line-height:1.45">
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">UI language</span><span>Auto (follow browser)</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Placeholder</span><span>${f(m("displayPlaceholderExample"))}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Submit button</span><span>${ServerI18n.t("fireDanmu")}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.08em">Poll prompt</span><span>${f(m("displayPollPromptExample"))}</span>
              </div>
              <div style="padding-top:8px;border-top:1px solid var(--hud-line);font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);line-height:1.6">
                ${f(m("displayAdminControlledNote"))}
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-ui-monolabel admin-dsp2-card-head">
                <span>${f(m("displaySummaryTitle"))}</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
      </div>`}let N=[{key:"Opacity",labelKey:"displayLabelOpacity",fmt:q=>`${Math.round(q)}%`},{key:"FontSize",labelKey:"displayLabelFontSize",fmt:q=>`${q}px`},{key:"Speed",labelKey:"displayLabelSpeed",fmt:q=>`${(+q).toFixed(1)}\xD7`},{key:"Color",labelKey:"displayLabelColor",fmt:q=>`#${String(q||"").replace(/^#/,"").toUpperCase()||"\u2014"}`,noRange:!0},{key:"FontFamily",labelKey:"displayLabelFontFamily",fmt:q=>q||"\u2014",noRange:!0},{key:"Layout",labelKey:"displayLabelLayout",fmt:q=>v(q),noRange:!0}];function v(q){let Y=_.find(ee=>ee.value===q);return Y?m(Y.labelKey):q||"\u2014"}function c(q,Y){let ee=Y[0]!==!1,te=Y[3],de=x[q.key];if(q.key==="Opacity"||q.key==="Speed"){let le=de,ce=te!=null?Number(te):le.min,be=isFinite(ce)?ce:le.min,ge=(be-le.min)/Math.max(1e-6,le.max-le.min)*100;return`
        <div class="admin-dsp2-track" data-track="${q.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${q.key}" data-num-index="3"
            min="${le.min}" max="${le.max}" step="${F(q.key)}" value="${f(String(be))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${ge.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${ge.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${q.key}"
              min="${le.min}" max="${le.max}" step="${F(q.key)}" value="${f(String(be))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${le.min}${le.unit}</span><span>${le.max}${le.unit}</span>
            </div>
          </div>
        </div>`}if(q.key==="FontSize"){let le=Number(te);return`
        <div class="admin-dsp2-chiprow">
          ${U.map(ce=>`<button type="button" class="admin-dsp2-fchip ${le===ce?"is-active":""}"
              data-chip-key="FontSize" data-chip-value="${ce}">${ce}</button>`).join("")}
        </div>`}if(q.key==="Color"){let le="#"+String(te||"FFFFFF").replace(/^#/,"").toUpperCase();return`
        <div class="admin-dsp2-swatches">
          ${i().map(ce=>{let be=ce.slice(1),ge=ce.toUpperCase()===le;return`<button type="button" class="admin-dsp2-swatch ${ge?"is-active":""}"
              data-chip-key="Color" data-chip-value="${be}"
              style="background:${ce}" aria-label="${ce}" aria-pressed="${ge}"></button>`}).join("")}
          <label class="admin-dsp2-swatch-custom" title="${f(m("specificColor"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${f(le)}" />
          </label>
        </div>
      `}if(q.key==="FontFamily"){let le=(E.fonts&&E.fonts.length?E.fonts:["NotoSansTC","Inter"]).map(we=>{let Te=typeof we=="string"?we:we.name||we.family||"",Ee=typeof we=="string"?we:we.label||we.name||we.family||"";return{value:Te,label:Ee}}).filter(we=>we.value),ce=String(te||""),be=!!E.allowlistEdit.FontFamily,ge=be?E.allowlistEdit.FontFamily:new Set(b("FontFamily").map(we=>H("FontFamily",we))),ye=!be&&ge.size===0;return`
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${le.map(we=>{let Te=we.value===ce,Ee=be?ge.has(we.value):ye||ge.has(we.value),_e=["admin-dsp2-tchip",Te?"is-active":"",be?"is-editing":"",Ee?"":"is-blocked"].filter(Boolean).join(" "),$e=be?`data-allow-key="FontFamily" data-allow-value="${f(we.value)}"`:`data-chip-key="FontFamily" data-chip-value="${f(we.value)}"`;return`<button type="button" class="${_e}" ${$e}
              aria-pressed="${Ee?"true":"false"}">
              ${be?`<span class="admin-dsp2-allow-mark">${Ee?"\u2713 ":""}</span>`:""}${f(we.label)}
            </button>`}).join("")}
        </div>
        ${r(q)}
      `}if(q.key==="Layout"){let le=String(te||"scroll"),ce=!!E.allowlistEdit.Layout,be=ce?E.allowlistEdit.Layout:new Set(b("Layout").map(ye=>H("Layout",ye))),ge=!ce&&be.size===0;return`
        <div class="admin-dsp2-tiles">
          ${_.map(ye=>{let we=ye.value===le,Te=ce?be.has(ye.value):ge||be.has(ye.value),Ee=["admin-dsp2-tile",we?"is-active":"",ce?"is-editing":"",Te?"":"is-blocked"].filter(Boolean).join(" "),_e=ce?`data-allow-key="Layout" data-allow-value="${ye.value}"`:`data-chip-key="Layout" data-chip-value="${ye.value}"`;return`<button type="button" class="${Ee}" ${_e}
              aria-pressed="${Te?"true":"false"}">
              <span class="admin-dsp2-tile-icon">${ye.icon}</span>
              <span class="admin-dsp2-tile-label">${m(ye.labelKey)}</span>
              ${ce?`<span class="admin-dsp2-allow-mark">${Te?"\u2713":""}</span>`:""}
            </button>`}).join("")}
        </div>
        ${r(q)}
      `}return""}function r(q){if(!S(q.key))return"";let Y=!!E.allowlistEdit[q.key],ee=b(q.key),te=C(q.key).length||0,de=ee.length>0?m("displayAllowSummaryPartial",{n:ee.length,total:te,label:n(q.key)}):m("displayAllowSummaryAll",{total:te});return`
      <div class="admin-dsp2-allow-controls" data-allow-controls="${q.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${q.key}">${f(de)}</span>
        ${Y?`
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${q.key}">${f(m("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${q.key}">${f(m("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${q.key}">${f(m("displayAllowAllBtn"))}</button>
        `:`
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${q.key}" title="${f(m("displayEditAllowlistTitle"))}">[${f(m("displayEditAllowlistTitle"))}]</button>
        `}
      </div>`}function n(q){return m(q==="Color"?"displayLabelColor":q==="FontFamily"?"displayLabelFontFamily":q==="Layout"?"displayLabelLayout":"displayLabelOption")}function d(q,Y){if(q.noRange||!(Y[0]!==!1))return"";let te=x[q.key],de=Y[1]!=null?Y[1]:te.min,le=Y[2]!=null?Y[2]:te.max,ce=F(q.key);return`
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMinAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="1"
              min="${te.min}" max="${te.max}" step="${ce}" value="${f(String(de))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${f(m("displayMaxAudience"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="2"
              min="${te.min}" max="${te.max}" step="${ce}" value="${f(String(le))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlStep")}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${q.key}" data-num-index="step"
              min="0.1" step="0.1" value="${f(String(ce))}" />
            ${te.unit?`<span>${te.unit}</span>`:""}
          </div>
        </div>
      </div>`}function a(q,Y){let ee=Y[0]!==!1,te=Y[3],de=q.fmt?q.fmt(te):te!=null?String(te):"\u2014",le=q.key==="Layout";return`
      <div class="admin-dsp2-row ${ee?"is-on":"is-off"} ${le?"is-last":""}" data-row-key="${q.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${f(m(q.labelKey))}</div>
          <div class="admin-dsp2-value-badge ${ee?"is-on":""}" data-value-badge>${f(de)}</div>
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
            ${f(m(ee?"displayHintAudienceOn":"displayHintAudienceOff"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${c(q,Y)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${d(q,Y)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${ee?"is-on":""}"
            data-toggle-key="${q.key}" aria-pressed="${ee?"true":"false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${f(m(ee?"displayCustomizable":"displayLocked"))}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${f(ee?m("displayToggleHintOn"):q.noRange?m("displayToggleHintOffPick"):m("displayToggleHintOffSlider"))}
          </div>
        </div>
      </div>`}function l(){let q=document.getElementById("dsp2-rows");if(q){if(!E.options){q.innerHTML=`${window.AdminSkeletons?window.AdminSkeletons.html("listRows",{rows:3}):f(m("loading"))}`;return}q.innerHTML=N.map(Y=>a(Y,E.options[Y.key]||[!1,"","",""])).join(""),t(),p(),$()}}function i(){let q=b("Color");return[...new Set((q.length?q:A).map(Y=>"#"+String(Y).replace(/^#/,"").toUpperCase()).filter(Y=>/^#[0-9A-F]{6}$/.test(Y)))]}function e(q){let Y=q.slice(1).match(/.{2}/g).map(ee=>{let te=parseInt(ee,16)/255;return te<=.04045?te/12.92:((te+.055)/1.055)**2.4});return Y[0]*.2126+Y[1]*.7152+Y[2]*.0722>.179?"var(--slate-950)":"var(--color-white)"}function o(q,Y="error"){E.paletteNotice={message:q,type:Y};let ee=document.querySelector("[data-palette-feedback]");ee&&(ee.textContent=q,ee.classList.toggle("is-error",Y==="error"))}function h(q,Y=!0){let ee=document.querySelector("[data-admin-color-palette]"),te=ee?.querySelector("[data-palette-preview-text]");!te||!/^#[0-9A-F]{6}$/i.test(q)||(E.palettePreview=q.toUpperCase(),te.style.color=q,ee.querySelector("[data-palette-preview-code]").textContent=q.toUpperCase(),ee.querySelectorAll("[data-palette-preview]").forEach(de=>{let le=de.dataset.palettePreview===q.toUpperCase();de.setAttribute("aria-pressed",String(le)),de.closest(".admin-color-palette-chip").classList.toggle("is-previewing",le)}),Y&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(te.getAnimations().forEach(de=>de.cancel()),te.animate([{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.7,.2,1)"})))}function t(){let q=document.querySelector("[data-admin-color-palette]");if(!q||!E.options)return;let Y=i(),ee=(E.options.ViewerColorPicker||[!0])[0]!==!1,te=E.paletteBusy?"disabled":"",de=E.palettePreview||Y[0],le=f(E.paletteDraft),ce=E.paletteNotice;q.setAttribute("aria-busy",String(E.paletteBusy)),q.innerHTML=`
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
        <span class="admin-color-palette-count"><strong data-palette-count>${Y.length}</strong><span>${f(m("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${Y.map((be,ge)=>`<div class="admin-color-palette-chip" style="--palette-color:${be};--palette-ink:${e(be)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${be}"
                aria-label="${f(m("viewerPalettePreviewColor",{color:be}))}" aria-pressed="${be===de}" ${te}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(ge+1).padStart(2,"0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">\u2713</span>
              </button>
              <code>${be}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${be}" ${Y.length<=1?"disabled":te}
                aria-label="${f(m("viewerPaletteRemove",{color:be}))}"><span aria-hidden="true">\xD7</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${f(m("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${f(m("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(E.paletteDraft)?le:"#38bdf8"}" data-palette-picker ${te} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${le}"
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${te} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${Y.length>=64?"disabled":te}>
                <span aria-hidden="true">\uFF0B</span> ${f(m("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${f(m(Y.length>=64?"viewerPaletteLimit":"viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${ce?.type==="error"?"is-error":""}" data-palette-feedback role="status" aria-live="polite">${ce?f(ce.message):""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${f(m("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${f(m("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${de}</span><span aria-hidden="true">\u2192</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${f(m("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${f(m("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${f(m("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${ee?"checked":""} ${te} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${f(m("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`,h(de,!1)}async function s(q,Y){if(E.paletteBusy)return;let ee=document.querySelector("[data-admin-color-palette]");E.paletteBusy=!0,ee.setAttribute("aria-busy","true"),ee.querySelector("[data-palette-sync-status]").textContent=m("viewerPaletteSaving"),ee.querySelectorAll("input, button").forEach(le=>{le.disabled=!0});let te=await D("Color",q);E.paletteBusy=!1,E.paletteNotice={type:te?"success":"error",message:m(te?"viewerPaletteSaved":"updateFailed")},te&&Y&&(E.palettePreview=Y),t(),(Y&&te?ee.querySelector(`[data-palette-preview="${Y}"]`):ee.querySelector("[data-palette-hex]"))?.focus({preventScroll:!0})}function u(q,Y){let ee=E.options&&E.options[q];return ee&&ee[3]!=null?ee[3]:Y}function p(){let q=document.querySelector("[data-preview-stage]"),Y=document.querySelector("[data-preview-pill='1']"),ee=document.querySelector("[data-preview-pill='2']"),te=document.querySelector("[data-preview-foot-l]"),de=document.querySelector("[data-preview-foot-r]");if(!q||!Y||!ee||!E.options)return;let le=Number(u("FontSize",32)),ce=Number(u("Opacity",92)),be=Number(u("Speed",1)),ge="#"+String(u("Color","7DD3FC")).replace(/^#/,""),ye=String(u("FontFamily","NotoSansTC")),we=String(u("Layout","scroll")),Te=Math.min(le,36),Ee=Math.max(0,Math.min(100,ce))/100;Y.style.fontSize=Te+"px",Y.style.color=ge,Y.style.opacity=Ee.toFixed(2),Y.style.fontFamily=ye+", system-ui, sans-serif",Y.style.textShadow=`0 0 14px ${ge}66`,ee.style.fontSize=(Te*.78).toFixed(0)+"px",ee.style.opacity=(Ee*.9).toFixed(2),ee.style.fontFamily=ye+", system-ui, sans-serif",q.dataset.layout=we,te&&(te.textContent=`${v(we)} \xB7 ${le}px \xB7 ${(+be).toFixed(1)}\xD7`),de&&(de.textContent=m("displayOpacitySuffix",{n:Math.round(ce)}))}function $(){let q=document.querySelector("[data-summary-list]"),Y=document.querySelector("[data-summary-count]");if(!q||!E.options)return;let ee=N.filter(te=>(E.options[te.key]||[])[0]).length;Y&&(Y.textContent=`AUDIENCE \xB7 ${ee}/6 OPEN`),q.innerHTML=N.map(te=>{let de=!!(E.options[te.key]||[])[0];return`<div class="admin-dsp2-srow ${de?"is-on":""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${f(m(te.labelKey))}</span>
        <span class="admin-dsp2-srow-tag">${f(m(de?"displayAudienceChangeable":"displayLocked"))}</span>
      </div>`}).join("")}async function I(q,Y){try{let ee=await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:q,enabled:!!Y})});if(!ee.ok)throw new Error("toggle "+ee.status);Array.isArray(E.options[q])||(E.options[q]=[!1,"","",""]),E.options[q][0]=!!Y,l(),q==="ViewerColorPicker"&&document.querySelector("[data-viewer-color-picker]")?.focus({preventScroll:!0});let te=q==="ViewerColorPicker"?m("viewerPaletteAllowPicker"):q;window.showToast&&window.showToast(`${te} ${m("settingsUpdated")}`,!0)}catch(ee){console.warn("[admin-display] toggle failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1),await z(),l()}}async function L(q,Y,ee){try{let te=ee;if(q==="Color"){let le=String(te).replace(/^#/,"");if(!/^[0-9A-Fa-f]{6}$/.test(le)){window.showToast&&window.showToast(m("colorFormatError"),!1);return}te=le.toUpperCase()}else if(q==="Opacity"||q==="FontSize"||q==="Speed"){te=q==="Speed"?parseFloat(te):parseInt(te,10);let le=x[q];if(Number.isNaN(te)||le&&(te<le.min||te>le.max)){window.showToast&&window.showToast(`${q} ${le.min}\u2013${le.max}`,!1);return}}let de=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:q,value:te,index:Y})});if(!de.ok)throw new Error("update "+de.status);Array.isArray(E.options[q])||(E.options[q]=[!1,"","",""]),E.options[q][Y]=te,O(q),p(),$()}catch(te){console.warn("[admin-display] update failed:",te),window.showToast&&window.showToast(m("updateFailed"),!1)}}async function D(q,Y){try{let ee=await window.csrfFetch(`/admin/options/${encodeURIComponent(q)}/allowlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allowlist:Y})});if(!ee.ok)throw new Error("allowlist "+ee.status);let te=await ee.json().catch(()=>({}));te&&Array.isArray(te.option)?E.options[q]=te.option:Array.isArray(E.options[q])&&(E.options[q][1]=Y.slice()),O(q),p(),$();let de=C(q).length||0,le=q==="Color"?m("settingsUpdated"):Y.length>0?m("displayAllowlistToastPartial",{key:q,n:Y.length,total:de}):m("displayAllowlistToastAll",{key:q});return q!=="Color"&&window.showToast&&window.showToast(le,!0),!0}catch(ee){return console.warn("[admin-display] allowlist failed:",ee),q!=="Color"&&window.showToast&&window.showToast(m("updateFailed"),!1),!1}}function O(q){let Y=document.querySelector(`[data-row-key="${q}"]`);if(!Y||!E.options)return;let ee=N.find(ce=>ce.key===q);if(!ee)return;let te=E.options[q]||[!1,"","",""],de=te[3],le=Y.querySelector("[data-value-badge]");if(le&&(le.textContent=ee.fmt?ee.fmt(de):de!=null?String(de):"\u2014"),S(q)){let ce=Y.querySelector("[data-picker-host]");ce&&(ce.innerHTML=c(ee,te));return}if((q==="FontSize"||q==="Color"||q==="FontFamily"||q==="Layout")&&Y.querySelectorAll(`[data-chip-key="${q}"]`).forEach(ce=>{let be=ce.getAttribute("data-chip-value"),ge=q==="Color"?String(de||"").replace(/^#/,"").toUpperCase():String(de??"");ce.classList.toggle("is-active",String(be)===ge)}),q==="Opacity"||q==="Speed"){let ce=x[q],be=Number(de??ce.min),ge=(be-ce.min)/Math.max(1e-6,ce.max-ce.min)*100,ye=Y.querySelector(".admin-dsp2-slider-fill"),we=Y.querySelector(".admin-dsp2-slider-thumb");ye&&(ye.style.width=ge.toFixed(2)+"%"),we&&(we.style.left=`calc(${ge.toFixed(2)}% - 8px)`);let Te=Y.querySelector(".admin-dsp2-range");Te&&document.activeElement!==Te&&(Te.value=String(be));let Ee=Y.querySelector(".admin-dsp2-num");Ee&&document.activeElement!==Ee&&(Ee.value=String(be))}}async function z(){try{let q=await fetch("/get_settings",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);E.options=await q.json()}catch(q){console.warn("[admin-display] /get_settings failed:",q),E.options=E.options||{}}}async function T(){try{let q=await fetch("/fonts",{credentials:"same-origin"});if(!q.ok)throw new Error(q.status);let Y=await q.json();E.fonts=Array.isArray(Y)?Y:Y.fonts||[]}catch{E.fonts=["NotoSansTC","Inter"]}}async function R(){try{let q=await fetch("/admin/metrics",{credentials:"same-origin"});if(!q.ok)return;let Y=await q.json();E.viewerCount=Y.ws_clients??0}catch{}}function j(){J(),R(),E.metricsTimer=setInterval(R,5e3)}function J(){E.metricsTimer&&(clearInterval(E.metricsTimer),E.metricsTimer=null)}function W(){if(!E.options){window.showToast&&window.showToast(m("loading"),!1);return}let q={exported_at:new Date().toISOString(),app_version:window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"",options:E.options},Y=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),ee=URL.createObjectURL(Y),te=document.createElement("a");te.href=ee,te.download=`danmu-display-settings-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(ee),window.showToast&&window.showToast(m("displayExportDone"),!0)}async function V(){if(!E.options)return;let q=document.getElementById("dsp2-deploy");q&&(q.disabled=!0,q.classList.add("is-pending"));try{for(let Y of N){let ee=E.options[Y.key];Array.isArray(ee)&&await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:Y.key,enabled:!!ee[0]})})}await R(),window.showToast&&window.showToast(m("displayBroadcastDone")+` ${E.viewerCount} ${m("displayViewersReceivedSuffix")}`,!0)}catch(Y){console.warn("[admin-display] deploy failed:",Y),window.showToast&&window.showToast(m("updateFailed"),!1)}finally{q&&(q.disabled=!1,q.classList.remove("is-pending"))}}async function ae(){let q={Opacity:[!0,0,100,70],FontSize:[!0,20,100,50],Speed:[!0,.5,3,1],Color:[!0,0,0,"FFFFFF"],FontFamily:[!1,"","","NotoSansTC"],Layout:[!0,"","","scroll"]};if(await window.HudConfirm?.open({icon:"\u21A9",title:m("displayRevertConfirmTitle"),subtitle:ServerI18n.t("cfmSubRevertDefaults"),severity:"warn",body:m("displayRevertConfirm"),confirmLabel:m("displayDeployRevert")}))try{for(let[ee,te]of Object.entries(q)){await window.csrfFetch("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:ee,enabled:!!te[0]})});for(let de=1;de<=3;de++)de<3&&(ee==="Color"||ee==="FontFamily"||ee==="Layout")||te[de]===""||te[de]==null||await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:ee,value:te[de],index:de})})}await z(),l(),window.showToast&&window.showToast(m("displayRevertDone"),!0)}catch(ee){console.warn("[admin-display] revert failed:",ee),window.showToast&&window.showToast(m("updateFailed"),!1)}}function se(){let q=document.getElementById(y);q&&(q.addEventListener("click",Y=>{let ee=Y.target.closest("[data-palette-preview]");if(ee){h(ee.dataset.palettePreview);return}let te=Y.target.closest("[data-palette-remove]");if(te){let ge=i();if(ge.length>1){let ye=ge.filter(we=>we!==te.dataset.paletteRemove);s(ye,ye.includes(E.palettePreview)?E.palettePreview:ye[0])}return}if(Y.target.closest("[data-palette-add]")){let ge=q.querySelector("[data-palette-hex]"),ye=String(ge.value).trim().replace(/^#/,"").toUpperCase();if(!/^[0-9A-F]{6}$/.test(ye)){ge.setAttribute("aria-invalid","true"),o(m("colorFormatError"));return}let we=i();if(we.includes("#"+ye)){o(m("viewerPaletteDuplicate"));return}we.length<64&&s([...we,"#"+ye],"#"+ye);return}let de=Y.target.closest("[data-toggle-key]");if(de){let ge=de.getAttribute("data-toggle-key"),ye=!!(E.options[ge]||[])[0];I(ge,!ye);return}let le=Y.target.closest("[data-allow-action]");if(le){let ge=le.getAttribute("data-allow-action"),ye=le.getAttribute("data-allow-key");if(!ye)return;if(ge==="edit"){let we=b(ye).map(Te=>H(ye,Te));we.length?E.allowlistEdit[ye]=new Set(we):E.allowlistEdit[ye]=new Set(C(ye)),O(ye);return}if(ge==="cancel"){delete E.allowlistEdit[ye],O(ye);return}if(ge==="clear"){E.allowlistEdit[ye]=new Set,D(ye,[]),delete E.allowlistEdit[ye];return}if(ge==="apply"){let we=E.allowlistEdit[ye]||new Set,Te=C(ye),Ee=Array.from(we),_e=Te.length>0&&Ee.length===Te.length&&Te.every($e=>we.has($e));D(ye,_e?[]:Ee),delete E.allowlistEdit[ye];return}}let ce=Y.target.closest("[data-allow-key][data-allow-value]");if(ce){let ge=ce.getAttribute("data-allow-key"),ye=ce.getAttribute("data-allow-value"),we=E.allowlistEdit[ge];if(we){let Te=H(ge,ye);we.has(Te)?we.delete(Te):we.add(Te),O(ge)}return}let be=Y.target.closest("[data-chip-key]");if(be){let ge=be.getAttribute("data-chip-key"),ye=be.getAttribute("data-chip-value");document.querySelectorAll(`[data-chip-key="${ge}"]`).forEach(we=>we.classList.remove("is-active")),be.classList.add("is-active"),L(ge,3,ye);return}if(Y.target&&Y.target.id==="dsp2-revert"){ae();return}if(Y.target&&Y.target.id==="dsp2-export"){W();return}}),q.addEventListener("keydown",Y=>{Y.key==="Enter"&&Y.target.matches("[data-palette-hex]")&&!Y.isComposing&&(Y.preventDefault(),q.querySelector("[data-palette-add]")?.click())}),q.addEventListener("change",Y=>{let ee=Y.target;if(!ee)return;if(ee.matches("[data-viewer-color-picker]")){ee.disabled=!0,I("ViewerColorPicker",ee.checked);return}let te=ee.getAttribute("data-num-key");if(!te)return;let de=ee.getAttribute("data-num-index");if(de==="step"){w(te,ee.value),O(te);return}let le=parseInt(de,10);if(Number.isNaN(le))return;let ce=ee.value;te==="Color"&&(ce=String(ce).replace(/^#/,"").toUpperCase()),L(te,le,ce)}),q.addEventListener("input",Y=>{let ee=Y.target;if(ee){if(ee.matches("[data-palette-picker]")){E.paletteDraft=ee.value.toUpperCase(),q.querySelector("[data-palette-hex]").value=E.paletteDraft,o("","success"),h(E.paletteDraft);return}if(ee.matches("[data-palette-hex]")){E.paletteDraft=ee.value;let te=ee.value.replace(/^#/,"");ee.removeAttribute("aria-invalid"),o("","success"),/^[0-9a-fA-F]{6}$/.test(te)&&(q.querySelector("[data-palette-picker]").value="#"+te,h("#"+te));return}if(ee.classList&&ee.classList.contains("admin-dsp2-range")){let te=ee.getAttribute("data-range-key"),de=x[te],le=Number(ee.value),ce=(le-de.min)/Math.max(1e-6,de.max-de.min)*100,be=ee.closest("[data-row-key]");if(be){let ge=be.querySelector(".admin-dsp2-slider-fill"),ye=be.querySelector(".admin-dsp2-slider-thumb");ge&&(ge.style.width=ce.toFixed(2)+"%"),ye&&(ye.style.left=`calc(${ce.toFixed(2)}% - 8px)`);let we=be.querySelector(".admin-dsp2-num");we&&(we.value=String(le))}Array.isArray(E.options[te])&&(E.options[te][3]=le),p();return}if(ee.classList&&ee.classList.contains("admin-dsp2-num")){let te=ee.getAttribute("data-num-key"),de=parseInt(ee.getAttribute("data-num-index"),10);if(Number.isNaN(de)||!Array.isArray(E.options[te]))return;let le=ee.value;ee.type==="number"&&(le=Number(le)),E.options[te][de]=le,p()}}}),q.addEventListener("change",Y=>{let ee=Y.target;if(ee&&ee.classList&&ee.classList.contains("admin-dsp2-range")){let te=ee.getAttribute("data-range-key");L(te,3,ee.value)}}),q.addEventListener("click",Y=>{let ee=Y.target.closest("[data-dl-step]");if(ee){let de=ee.closest("[data-dl-stepper]");if(!de)return;let le=de.getAttribute("data-dl-stepper"),be=Number(G[le]??0)+Number(ee.getAttribute("data-dl-step"));ie(le,be);return}let te=Y.target.closest("[data-dl-opt]");if(te){let de=te.closest("[data-dl-seg]");if(!de)return;let le=de.getAttribute("data-dl-seg"),ce=te.getAttribute("data-dl-opt");ie(le,["safe_area","poll_vote_opacity"].indexOf(le)!==-1?Number(ce):ce)}}),q.addEventListener("change",Y=>{let ee=Y.target.closest("[data-dl-toggle]");if(ee){ie(ee.getAttribute("data-dl-toggle"),ee.checked);return}let te=Y.target.closest("[data-dl-range]");te&&ie(te.getAttribute("data-dl-range"),Number(te.value))}),q.addEventListener("input",Y=>{let ee=Y.target.closest("[data-dl-range]");if(!ee)return;let te=ee.getAttribute("data-dl-range"),de=q.querySelector(`[data-dl-value="${te}"]`);de&&(de.textContent=ee.value+"%")}))}let G={};function Z(){let q=document.getElementById(y);q&&Object.entries(G).forEach(([Y,ee])=>{let te=q.querySelector(`[data-dl-value="${Y}"]`);te&&(te.textContent=Y==="max_tracks"?Number(ee)===0?m("dlMaxTracksAuto"):String(ee):String(ee)+"%");let de=q.querySelector(`[data-dl-range="${Y}"]`);de&&document.activeElement!==de&&(de.value=String(ee));let le=q.querySelector(`[data-dl-toggle="${Y}"]`);le&&(le.checked=!!ee);let ce=q.querySelector(`[data-dl-seg="${Y}"]`);ce&&ce.querySelectorAll("[data-dl-opt]").forEach(be=>{let ge=be.getAttribute("data-dl-opt")===String(ee);be.classList.toggle("is-active",ge),be.setAttribute("aria-pressed",ge?"true":"false")})})}async function ne(){try{let q=await fetch("/admin/display-layer",{credentials:"same-origin"});if(!q.ok)return;G=await q.json(),Z()}catch(q){console.warn("[admin-display] display-layer fetch failed:",q)}}async function ie(q,Y){let ee=G[q];G[q]=Y,Z();try{let te=await window.csrfFetch("/admin/display-layer",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[q]:Y})});if(!te.ok)throw new Error("display-layer "+te.status);G=await te.json(),Z()}catch(te){G[q]=ee,Z(),console.warn("[admin-display] display-layer update failed:",te),window.showToast&&window.showToast(m("updateFailed"),!1)}}function K(){k.forEach(q=>{let Y=document.getElementById(q);Y&&Y.setAttribute("data-admin-ui-replaced","1")})}let Q=null;function X(q,Y){return q==="overlay"||Y==="overlay"||q==="display"||Y==="display"}function oe(q,Y){return q==="viewer-config"||q==="viewer"||Y==="viewer-config"||Y==="viewer"}function me(q,Y){if(!oe(q,Y))return;let ee=window.AdminTabs?.getConfig?.("viewer");if(!ee)return;let te=le=>ee.tabs.some(ce=>ce.slug===le),de=te(Y)?Y:null;if(!de&&window.AdminTabs.resolveActiveTab){let le=window.AdminTabs.resolveActiveTab("viewer",null);te(le)&&(de=le)}de&&(document.body.dataset.viewerConfigTab=de)}let fe=!1,ke=!1;async function Ie(){let q=document.getElementById("sec-viewer-config-limits");if(!q||fe)return;fe=!0;let Y=(ee,te)=>{let de=q.querySelector(ee);de&&(de.textContent=te==null?"\u2014":String(te))};try{let ee=await fetch("/admin/metrics",{credentials:"same-origin"});if(!ee.ok)return;let te=await ee.json(),de=te.rate_limits&&te.rate_limits.fire||{},le=te.rate_limits&&te.rate_limits.totals||{},ce=te.rate_limit_config&&te.rate_limit_config.fire||{},be=Math.max(1,(te.server_time||0)-(te.server_started_at||0));Y("[data-vc-rate-fp]",ce.limit||"\u2014"),Y("[data-vc-rate-global]","\u2014"),Y("[data-vc-rate-burst]","\u2014"),Y("[data-vc-rate-cooldown]",ce.window||"\u2014"),Y("[data-vc-msg-len]",100),Y("[data-vc-nick-len]","\u2014"),Y("[data-vc-dedup]","\u2014");let ge=(de.hits||0)/be;Y("[data-vc-avg-rate]",ge.toFixed(2)+"/s"),Y("[data-vc-throttled]",de.violations||0),Y("[data-vc-blocked]",le.locked_sources||0),Y("[data-vc-deduped]",0)}catch{}finally{fe=!1}}function Se(){let q=document.querySelector(".admin-dash-grid"),Y=document.getElementById(y);if(!q||!Y)return;let ee=q.dataset.activeRoute||"live",te=q.dataset.activeLeaf||ee;me(ee,te);let de=document.body.dataset.viewerConfigTab||"defaults",le=oe(ee,te),ce=X(ee,te),be=le||ce;Y.dataset.dspMode=ce?"values":"audience",Y.style.display=be?"":"none",["sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-limits"].forEach(ye=>{let we=document.getElementById(ye);we&&(we.style.display=le?"":"none")});let ge=document.getElementById("sec-viewer-config-info");ge&&(ge.style.display=le?"":"none"),le?ke||(ke=!0,Ie()):ke=!1,X(ee,te)?E.metricsTimer||j():J(),Q=ee}function re(){if(document.getElementById("sec-viewer-config-info"))return;let q=document.getElementById("settings-grid");if(!q)return;let Y=document.createElement("div");Y.id="sec-viewer-config-info",Y.className="lg:col-span-2",Y.innerHTML='<div class="admin-vc-info-banner">'+m("displayViewerConfigInfoBanner")+"</div>";let ee=[{k:m("displayFieldNicknameLabel"),desc:m("displayFieldNicknameDesc"),on:!0,pinned:!0},{k:m("displayFieldMessageLabel"),desc:m("displayFieldMessageDesc"),on:!0,pinned:!0},{k:m("displayFieldColorLabel"),desc:m("displayFieldColorDesc"),on:!0},{k:m("displayFieldFontLabel"),desc:m("displayFieldFontDesc"),on:!0},{k:m("displayFieldSizeLabel"),desc:m("displayFieldSizeDesc"),on:!0},{k:m("displayFieldOpacityLabel"),desc:m("displayFieldOpacityDesc"),on:!0},{k:m("displayFieldSpeedLabel"),desc:m("displayFieldSpeedDesc"),on:!0},{k:m("displayFieldLayoutLabel"),desc:"scroll / top / bottom / float / rise",on:!0},{k:m("displayFieldEffectLabel"),desc:m("displayFieldEffectDesc"),on:!1}],te=document.createElement("div");te.id="sec-viewer-config-fields",te.className="admin-vc-fields-grid lg:col-span-2";let de=document.createElement("div");de.className="admin-vc-col-panel";let le=document.createElement("div");le.className="admin-vc-fields-head";let ce=ee.filter(function(xe){return xe.on}).length,be=ee.length-ce;le.innerHTML='<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:1px">'+f(m("displayFieldsCountLabel",{count:ee.length}))+'</span><span class="admin-vc-fields-count">'+f(m("displayFieldsShownHidden",{shown:ce,hidden:be}))+"</span>",de.appendChild(le);let ge=document.createElement("div");ge.className="admin-vc-fields-list",ee.forEach(function(xe){let Ce=document.createElement("div");Ce.className="admin-vc-field-row"+(xe.blocked?" is-blocked":"");let Fe=document.createElement("span");Fe.className="admin-vc-field-dot"+(xe.on?" is-on":""),Ce.appendChild(Fe);let De=document.createElement("div");var Be="";xe.pinned&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--required">'+f(m("displayFieldBadgeRequired"))+"</span>"),xe.blocked&&(Be='<span class="admin-vc-field-badge admin-vc-field-badge--blocked">'+f(m("displayFieldBadgeBlocked"))+"</span>"),De.innerHTML='<div class="admin-vc-field-label">'+f(xe.k)+Be+'</div><div class="admin-vc-field-desc">'+f(xe.desc)+"</div>",Ce.appendChild(De);let Le=document.createElement("button");if(Le.type="button",Le.className="admin-vc-toggle "+(xe.on?"is-on":"is-off"),Le.textContent=xe.on?m("displayToggleShow"):m("displayToggleHide"),xe.blocked||xe.pinned)Le.disabled=!0,Le.className+=" disabled";else{var Ae=xe.on;Le.addEventListener("click",function(){Ae=!Ae,Le.className="admin-vc-toggle "+(Ae?"is-on":"is-off"),Le.textContent=m(Ae?"displayToggleShow":"displayToggleHide"),Fe.className="admin-vc-field-dot"+(Ae?" is-on":"")})}Ce.appendChild(Le),ge.appendChild(Ce)}),de.appendChild(ge);let ye=document.createElement("div");ye.className="admin-vc-col-panel";var Te=["#fde68a","#a7f3d0","#bae6fd","#fbcfe8","#c4b5fd","#fff"].map(function(xe,Ce){return'<span class="admin-vc-swatch-dot" style="background:'+xe+";border:"+(Ce===0?"2px solid var(--color-primary,#38bdf8)":"1px solid var(--color-border,var(--hud-line))")+'"></span>'}).join("");ye.innerHTML='<div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.5px">'+f(m("displayAudiencePreviewLabel"))+'</div><div class="admin-vc-preview-form"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldNicknameLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input">'+f(m("displaySampleNickname"))+'</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldMessageLabel"))+' <span style="color: var(--color-ink-error)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">'+f(m("displaySampleMessage"))+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelColor"))+'</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">'+Te+'</span></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontFamily"))+'</div><div class="admin-vc-preview-input">Noto Sans TC \xB7 <b>Zen Kaku</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelFontSize"))+'</div><div class="admin-vc-preview-input">small \xB7 <b>regular</b> \xB7 large</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelOpacity"))+'</div><div class="admin-vc-preview-input">0.4 \xB7 0.7 \xB7 <b>1.0</b></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelSpeed"))+'</div><div class="admin-vc-preview-input">0.5\xD7 \xB7 <b>1.0\xD7</b> \xB7 2.0\xD7</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelLayout"))+'</div><div class="admin-vc-preview-input"><b>scroll</b> \xB7 top \xB7 bottom \xB7 float \xB7 rise</div></div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayLabelEffect"))+'</div><div class="admin-vc-preview-input">glow \xB7 <b>bounce</b> \xB7 wave</div></div><div class="admin-vc-preview-field"><div class="admin-vc-preview-label">'+f(m("displayFieldStyleBoundaryLabel"))+'</div><div class="admin-vc-preview-input">'+f(m("displayFieldStyleBoundaryDesc"))+'</div></div></div><div class="admin-vc-preview-submit">\u2197 '+f(m("displaySubmitButtonMock"))+'</div></div><div class="admin-vc-tip">\xB7 '+f(m("displayFieldsTip"))+"</div>",te.appendChild(de),te.appendChild(ye);function Ee(xe,Ce,Fe,De,Be,Le){let Ae=Le?"var(--color-crimson, #f87171)":"var(--color-text-strong)";return'<div class="admin-vc-limit-row"><div class="admin-vc-limit-row__label"><div class="admin-vc-limit-row__zh">'+xe+'</div></div><div class="admin-vc-limit-row__value" style="color:'+Ae+'">'+Fe+'<span class="admin-vc-limit-row__unit">'+(De||"")+"</span></div>"+(Be?'<div class="admin-vc-limit-row__hint">'+Be+"</div>":"")+"</div>"}let _e=document.createElement("div");_e.id="sec-viewer-config-limits",_e.className="admin-vc-limits-grid lg:col-span-2",_e.innerHTML='<div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-amber"></span><span class="admin-vc-limit-card__zh">'+f(m("displayRateLimitsTitle"))+'</span><a href="#/ratelimit" class="admin-vc-limit-card__edit">'+f(m("displayEditLink"))+"</a></div>"+Ee(f(m("displayRateFpLabel")),"PER FP / MIN","<span data-vc-rate-fp>\u2014</span>",f(m("displayRateFpUnit")),f(m("displayRateFpHint")))+Ee(f(m("displayRateGlobalLabel")),"GLOBAL / SEC","<span data-vc-rate-global>\u2014</span>","/s",f(m("displayRateGlobalHint")))+Ee(f(m("displayRateBurstLabel")),"BURST WINDOW","<span data-vc-rate-burst>\u2014</span>",f(m("displayRateBurstUnit")),f(m("displayRateBurstHint")))+Ee(f(m("displayRateCooldownLabel")),"COOLDOWN","<span data-vc-rate-cooldown>\u2014</span>","s",f(m("displayRateCooldownHint")))+'<div class="admin-vc-limit-card__foot">\u26A0 '+f(m("displayRateLimitsFooter"))+'</div></div><div class="admin-vc-limit-card"><div class="admin-vc-limit-card__head"><span class="admin-vc-limit-card__dot is-cyan"></span><span class="admin-vc-limit-card__zh">'+f(m("displayContentLimitsTitle"))+"</span></div>"+Ee(f(m("displayMsgLenLabel")),"MAX LENGTH","<span data-vc-msg-len>\u2014</span>",f(m("displayMsgLenUnit")),f(m("displayMsgLenHint")))+Ee(f(m("displayNickLenLabel")),"NICK MAX","<span data-vc-nick-len>\u2014</span>",f(m("displayNickLenUnit")),f(m("displayNickLenHint")))+Ee(f(m("displayDedupLabel")),"DEDUP WINDOW","<span data-vc-dedup>\u2014</span>","s",f(m("displayDedupHint")))+Ee(f(m("displayProfanityLabel")),"PROFANITY ACTION","<span data-vc-profanity>"+f(m("displayProfanityDefaultValue"))+"</span>","",f(m("displayProfanityHint")))+'<div class="admin-vc-limit-card__deferred"><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayAttachmentLimitLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div><div class="admin-vc-limit-card__deferred-row"><span>'+f(m("displayLinkDetectionLabel"))+'</span><span class="admin-vc-limit-card__deferred-tag">'+f(m("displayComingSoonTag"))+'</span></div></div></div><div class="admin-vc-limit-status"><span class="admin-vc-limit-status__label">'+ServerI18n.t("lbCurrentSession")+'</span><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>\u2014</span></div><div class="admin-vc-limit-status__metric"><span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>\u2014</span></div><span class="admin-vc-limit-status__spacer"></span><a href="#/audit" class="admin-vc-limit-status__detail">'+f(m("displayAuditLogLink"))+"</a></div>";let $e=document.getElementById("sec-viewer-theme");$e&&$e.parentNode===q?(q.insertBefore(Y,$e),q.insertBefore(_e,$e),q.insertBefore(te,$e)):(q.appendChild(Y),q.appendChild(_e),q.appendChild(te)),document.body.dataset.viewerConfigTab||(document.body.dataset.viewerConfigTab="defaults"),Se()}async function ue(){let q=document.getElementById("settings-grid");if(!q||document.getElementById(y)){K();return}q.insertAdjacentHTML("beforeend",B()),se(),K(),Se(),E.options||await Promise.all([z(),T()]),ne(),l()}function pe(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?ue():K(),Se()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",Se),document.addEventListener("admin-route-applied",Se),document.addEventListener("admin-panel-rendered",()=>{ue(),K(),re(),Se()}),ue(),re()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe()})()});var dt=ve(()=>{document.addEventListener("DOMContentLoaded",()=>{function y(){let W=document.querySelector('meta[name="csrf-token"]');return W&&W.content||""}let k=window.DANMU_CONFIG||{},g=k.session||{logged_in:!1},f=k.settingRanges||{};function x(W,V={}){let ae={credentials:"same-origin",...V},se=new Headers(V.headers||{});return se.set("X-CSRF-Token",y()),ae.headers=se,fetch(W,ae)}window.csrfFetch=x;let U=5e3,A={at:0,data:null,promise:null};function _(){return A.data&&Date.now()-A.at<U}function m(){return _()?Promise.resolve(A.data):(A.promise||(A.promise=fetch("/admin/bootstrap",{credentials:"same-origin"}).then(W=>W.ok?W.json():null).then(W=>(W&&(A.data=W,A.at=Date.now()),A.promise=null,W)).catch(()=>(A.promise=null,null))),A.promise)}function M(W){if(!_())return null;let V=A.data[W];return V&&typeof V=="object"&&"_error"in V?null:V}window.__danmuAdminBootstrap={prime:m,get:M},m();let F={},w=null,E=null,P=Object.create(null);Object.assign(P,{dashboard:"live",messages:"live",display:{nav:"viewer",tab:"defaults"},ratelimit:{nav:"moderation",tab:"ratelimit"},audit:{nav:"history",tab:"audit"},fonts:{nav:"assets",tab:"fonts"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},"api-tokens":{nav:"integrations",tab:"api-tokens"},scheduler:{nav:"integrations",tab:"scheduler"},security:{nav:"system",tab:"security"}});let S=Object.create(null);Object.assign(S,{fingerprints:{nav:"moderation",tab:"fingerprints"},modqueue:{nav:"moderation",tab:"queue"},modbans:{nav:"moderation",tab:"bans"},broadcast:{nav:"overlay"},"viewer-config":{nav:"viewer"},automation:{nav:"integrations",tab:"scheduler"},appearance:{nav:"themes"},scheduler:{nav:"integrations",tab:"scheduler"},replay:{nav:"history",tab:"replay"},extensions:{nav:"integrations",tab:"plugins"},mobile:{nav:"system",tab:"system"}});let b={_key:W=>"admin:tab:"+W,get(W){try{return sessionStorage.getItem(this._key(W))||null}catch{return null}},set(W,V){try{V?sessionStorage.setItem(this._key(W),V):sessionStorage.removeItem(this._key(W))}catch{}}};function C(W){let V=(W||"").match(/^#\/([\w-]+)(?:\/([\w-]+))?/);if(!V)return null;let ae=V[1],se=V[2]||null,G=null;if(!se){let K=P[ae];typeof K=="string"?ae=K:K&&typeof K=="object"&&(ae=K.nav||ae,G=K.tab||null)}let Z=S[ae],ne=ae,ie=null;if(typeof Z=="string"?ne=Z:Z&&typeof Z=="object"&&(ne=Z.nav||ae,ie=Z.tab||null),V[1]!==ne&&(C._warned||(C._warned=new Set),!C._warned.has(V[1]))){C._warned.add(V[1]);try{console.info("[admin] legacy route #/"+V[1]+" \u2192 #/"+ne+(se||ie||G?"/"+(se||ie||G):"")+" \u2014 update your bookmark; redirects are scheduled for removal.")}catch{}}return{nav:ne,tab:se||ie||G,raw:ae}}function H(W,V){return V?"#/"+W+"/"+V:"#/"+W}window.AdminRouter=window.AdminRouter||{},Object.assign(window.AdminRouter,{aliases:S,tabMemory:b,parseHash:C,buildHash:H});var B=window.AdminUtils.loadDetailsState,N=window.AdminUtils.saveDetailsState,v=window.AdminUtils.escapeHtml;window.AdminBootstrap={primeBootstrap:m,bootstrapSection:M};async function c(){try{F=await(await fetch("/get_settings",{method:"GET",credentials:"same-origin"})).json(),g.logged_in&&L()}catch(W){console.error("Get settings failed:",W),showToast(ServerI18n.t("getSettingsFailed"),!1)}}function r(W){return/^#[0-9A-Fa-f]{6}$/.test(W)}function n(W){return r(W)?W:/^[0-9A-Fa-f]{6}$/.test(W)?"#"+W:(W.startsWith("#")||(W="#"+W),r(W)?W:"#38bdf8")}function d(W,V){if(f[W]){let ae=parseInt(V);if(isNaN(ae)||ae<f[W].min||ae>f[W].max)return showToast(ServerI18n.t("settingRangeError",{key:W,min:f[W].min,max:f[W].max}),!1),!1}return!0}function a(W,V,ae){if(!ae||!Array.isArray(F[W]))return;let se=F[W][V];W==="Color"&&typeof se=="string"&&(se=n(`#${se}`)),se!=null&&(ae.value=String(se))}let l={moderation:{containerId:"moderation-grid",orderedIds:["sec-live-feed","sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-polls","sec-security","sec-ws-auth","sec-onscreen-limits"]},assets:{containerId:"assets-grid",orderedIds:["sec-emojis","sec-stickers","sec-sounds","sec-themes","sec-plugins","sec-widgets"]}};function i(){Object.values(l).forEach(W=>{let V=document.getElementById(W.containerId);V&&W.orderedIds.forEach(ae=>{let se=document.getElementById(ae);se&&se.parentElement!==V&&V.appendChild(se)})})}function e(){w&&(w.disconnect(),w=null),i(),w=new MutationObserver(()=>{i()}),w.observe(t,{childList:!0,subtree:!0})}async function o(W,V,ae,se=null){try{if(W==="Color"){if(!r(V)){showToast(ServerI18n.t("colorFormatError"),!1),a(W,ae,se);return}V=V.replace("#","")}else if((W==="Speed"||W==="Opacity"||W==="FontSize")&&!d(W,V)){a(W,ae,se);return}(await x("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:W,value:V,index:ae})})).ok?(Array.isArray(F[W])||(F[W]=[!1,"","",""]),F[W][ae]=V,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`,!0)):(showToast(ServerI18n.t("updateFailed"),!1),await c())}catch(G){console.error("Error:",G),showToast(`Update Error: ${G.message}`,!1),await c()}}async function h(W,V){try{let ae=await x("/admin/Set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:W,enabled:V})}),se=await ae.json().catch(()=>({}));if(ae.ok)Array.isArray(F[W])||(F[W]=[!1,"","",""]),F[W][0]=V,showToast(`${W} ${ServerI18n.t("settingsUpdated")}`),L();else{let G=document.getElementById(`toggle-${W}`);G&&(G.checked=!V),showToast(se.error||ServerI18n.t("updateFailed"),!1)}}catch(ae){console.error("Error:",ae);let se=document.getElementById(`toggle-${W}`);se&&(se.checked=!V),showToast(`Update Error: ${ae.message}`,!1)}}let t=document.getElementById("app-container"),s=document.getElementById("toast-container"),u=(W,V=500)=>"requestIdleCallback"in window?window.requestIdleCallback(W,{timeout:V}):setTimeout(W,V);async function p(){let W=parseInt(document.getElementById("historyHours")?.value||"24");try{let[V,ae]=await Promise.all([fetch(`/admin/stats/hourly?hours=${W}`,{credentials:"same-origin"}),fetch(`/admin/stats/top-text?hours=${W}&limit=10`,{credentials:"same-origin"})]);if(!V.ok||!ae.ok)return;let se=await V.json(),G=await ae.json(),Z=document.getElementById("statsDashboard");if(!Z)return;let ne=se.distribution||[],ie=G.topTexts||[],K=Math.max(1,...ne.map(fe=>fe.count)),Q=ne.reduce((fe,ke)=>fe+(ke.count||0),0),X=ne.filter(fe=>fe.count>0).length,oe=ne.map(fe=>`<div class="chart-bar" style="height: ${Math.round(fe.count/K*100)}%" title="${v(fe.hour)}: ${fe.count}"><span class="chart-label">${v(fe.hour.slice(-5,-3))}</span></div>`).join(""),me=ie.map((fe,ke)=>`<tr class="history-toptext-row"><td class="py-1 pr-3 history-toptext-rank">${ke+1}</td><td class="py-1 pr-3 text-sm history-toptext-text">${v(fe.text)}</td><td class="py-1 font-mono text-sm history-toptext-count">${fe.count}</td></tr>`).join("");Z.innerHTML=`
        <div class="history-dashboard-grid">
          <div class="history-dashboard-card">
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label">${ServerI18n.t("total")}</span>
              <strong class="history-dashboard-value">${Q}</strong>
            </div>
            <div class="history-dashboard-meta">
              <span class="history-dashboard-label" data-i18n="historyActiveSlots">${ServerI18n.t("historyActiveSlots")}</span>
              <strong class="history-dashboard-value">${X}</strong>
            </div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--chart">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("hourlyDistribution")}</h4>
              <span class="history-dashboard-caption">${W}h window</span>
            </div>
            <div class="stats-chart">${oe||`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}</div>
          </div>
          <div class="history-dashboard-card history-dashboard-card--table">
            <div class="history-dashboard-title-row">
              <h4 class="history-dashboard-title">${ServerI18n.t("topTexts")}</h4>
              <span class="history-dashboard-caption">Top 10</span>
            </div>
            ${ie.length?`<table class="w-full text-xs"><tbody>${me}</tbody></table>`:`<span class="text-xs history-nodata">${ServerI18n.t("noData")}</span>`}
          </div>
        </div>`}catch(V){console.error("Load stats error:",V)}}window._loadStats=p,window.csrfFetch=x,window.__adminCtx=window.__adminCtx||{},window.__adminCtx.appContainer=t,window.__adminCtx.getSettings=()=>F;function $(){t&&(t.innerHTML=`
      <div class="admin-login-shell"><div class="admin-login-card">
        <img class="admin-login-wordmark is-on-dark" src="/static/wordmark-dark.svg"
             alt="Danmu Fire" width="540" height="96" />
        <img class="admin-login-wordmark is-on-light" src="/static/wordmark-light.svg"
             alt="" aria-hidden="true" width="540" height="96" />
        <form action="/login" method="post" class="admin-login-form">
          <input type="password" name="password" class="admin-login-input" required />
          <button type="submit" class="admin-login-submit">Sign in</button>
        </form>
      </div></div>`)}function I(){window.AdminLogin&&typeof window.AdminLogin.render=="function"?window.AdminLogin.render():$()}function L(){let W=B(),V=(X,oe=!1)=>W[X]!==void 0?W[X]:oe,ae=["Color","Opacity","FontSize","Speed","FontFamily","Layout","Effects"].filter(X=>Array.isArray(F[X])&&F[X][0]===!0).length,se=F.Layout&&F.Layout[3]?v(String(F.Layout[3]).replace(/_/g," ")):"scroll",G=F.FontFamily&&F.FontFamily[3]?v(String(F.FontFamily[3])):"NotoSansTC",Z=X=>X.map(oe=>`<span style="height:${oe*10}%;opacity:${.3+oe*.08}"></span>`).join(""),ne=se&&se!=="off",ie=window.location.port||(window.location.protocol==="https:"?"443":"80");t.innerHTML=`
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
                                         aria-label="${v(ServerI18n.t("adminSearchHint"))}"
                                         title="${v(ServerI18n.t("adminSearchHint"))} \u2318K">
                                        <span aria-hidden="true">\u2315</span>
                                    </button>
                                    <!-- \u8A2D\u8A08\u7A3F 15 \xB7 HD1\uFF1A\u8AAA\u660E\u62BD\u5C5C\u7531\u300C?\u300D\u6309\u9215\u958B\u3002
                                         \u5728\u9019\u4E4B\u524D\u62BD\u5C5C\u53EA\u6709\u9375\u76E4\uFF08F1\uFF09\u80FD\u958B\uFF0C\u7B49\u65BC\u5C0D\u6ED1\u9F20\u4F7F\u7528\u8005
                                         \u4E0D\u5B58\u5728\u3002\u9375\u76E4\u7684 ? \u5DF2\u6539\u6210\u53EB\u300C\u5FEB\u901F\u9375\u4E00\u89BD\u300D\uFF08KS1\uFF09\u3002 -->
                                    <button class="admin-dash-search is-icon-only" type="button" data-open-help
                                         aria-label="${v(ServerI18n.t("helpDrawerTitle"))}"
                                         title="${v(ServerI18n.t("helpDrawerTitle"))} F1">
                                        <span aria-hidden="true">?</span>
                                    </button>
                                    <!-- \u8AA0\u5BE6\u7684\u72C0\u614B\u71C8\uFF0B\u6377\u5F91\uFF1A\u5B83\u662F\u5C0E\u822A\uFF08\u524D\u5F80\u986F\u793A\u5C64\u9801\uFF09\uFF0C
                                         \u4E0D\u662F\u958B\u95DC\u3002 -->
                                    <button class="admin-dash-broadcast ${ne?"is-on":"is-off"}" type="button" aria-live="polite"
                                        title="${v(ServerI18n.t("adminRouteTitle_overlay"))}" data-route="overlay">
                                        <span class="dot"></span>
                                        ${v(ServerI18n.t("adminRouteTitle_overlay"))} \xB7 ${v(ne?ServerI18n.t("statusOn"):ServerI18n.t("statusOff"))}
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
                                    <div class="admin-cockpit-overlay-actions">
                                        <button type="button" class="admin-ui-action" data-cockpit-action="clear"
                                                data-i18n="adminCockpitClear">\u6E05\u7A7A\u756B\u9762</button>
                                        <button type="button" class="admin-ui-action is-danger" data-cockpit-action="toggle"
                                                data-i18n="adminCockpitTurnOff">\u95DC\u9589</button>
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
                `;let K=document.getElementById("settings-grid"),Q=F.Effects?F.Effects[0]!==!1:!0;K.insertAdjacentHTML("beforeend",`
      <div id="sec-effects" class="admin-ui-group admin-master-toggle admin-master-toggle--slim lg:col-span-2">
        <div class="admin-ui-group-row is-tall admin-master-toggle__row">
          <span class="lbl">${ServerI18n.t("effectsSetting")}
            <span class="sub admin-master-toggle__state" data-on="${Q}">${Q?ServerI18n.t("effectsEnabledMsg"):ServerI18n.t("effectsDisabledMsg")}</span>
          </span>
          <span class="admin-master-toggle__spacer"></span>
          <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" name="Effects" id="toggle-Effects" role="switch" aria-checked="${Q}" aria-label="Toggle ${ServerI18n.t("effectsSetting")}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${Q?"checked":""} />
            <label for="toggle-Effects" class="toggle-label block overflow-hidden h-7 rounded-full cursor-pointer" style="background:var(--color-bg-elevated)"></label>
          </div>
        </div>
      </div>`),K.insertAdjacentHTML("beforeend",`
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
    `),K.insertAdjacentHTML("beforeend",`
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
            <span class="lbl">${v(ServerI18n.t("themeDetailFont"))}</span>
            <span class="val">
              <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${v(ServerI18n.t("themeDetailStroke"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="stroke">
              <button type="button" data-theme-opt="none">${v(ServerI18n.t("themeStrokeNone"))}</button>
              <button type="button" data-theme-opt="thin">${v(ServerI18n.t("themeStrokeThin"))}</button>
              <button type="button" data-theme-opt="thick">${v(ServerI18n.t("themeStrokeThick"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${v(ServerI18n.t("themeDetailShadow"))}</span>
            <span class="val admin-ui-seg" data-theme-seg="shadow">
              <button type="button" data-theme-opt="none">${v(ServerI18n.t("themeShadowNone"))}</button>
              <button type="button" data-theme-opt="soft">${v(ServerI18n.t("themeShadowSoft"))}</button>
              <button type="button" data-theme-opt="strong">${v(ServerI18n.t("themeShadowStrong"))}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${v(ServerI18n.t("themeDetailColor"))}
              <span class="sub">${v(ServerI18n.t("themeDetailColorHint"))}</span>
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
    `),u(j),K.insertAdjacentHTML("beforeend",`
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2">
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
    `),z(),e(),u(J),document.dispatchEvent(new CustomEvent("admin-panel-rendered")),O(),setTimeout(()=>{window.AdminDashboard?.refreshKpi?.()},1500),setTimeout(()=>{window.AdminDashboard?.refreshSummary?.()},3e3),setTimeout(()=>{window.AdminDashboard?.startSessionPolling?.()},800),(function(){let oe=document.querySelector("[data-telem-bars]");if(!oe)return;let me=document.querySelector("[data-telem-status]"),fe={cpu:100,mem:100,ws:100,rate:50};function ke(re,ue,pe,q,Y){let ee=oe.querySelector(`[data-telem-fill="${re}"]`),te=oe.querySelector(`[data-telem-value="${re}"]`);ee&&(ee.style.width=Math.max(0,Math.min(100,ue))+"%",ee.classList.toggle("is-warn",!q)),te&&(te.textContent=pe);let de=oe.querySelector(`[data-telem-row="${re}"]`);de&&Y&&de.setAttribute("title",Y)}function Ie(re,ue){if(!ue||ue<=0)return Math.round(re)+" MB used";if(ue>=1024){let pe=(re/1024).toFixed(1),q=(ue/1024).toFixed(1);return`${pe} / ${q} GB used`}return`${Math.round(re)} / ${Math.round(ue)} MB used`}async function Se(){try{let re=await fetch("/admin/metrics",{credentials:"same-origin"});if(!re.ok)return;let ue=await re.json(),pe=ue.cpu_series||[],q=ue.mem_series||[],Y=ue.mem_mb_series||[],ee=ue.ws_series||[],te=ue.rate_series||[],de=Te=>Te.length?Te[Te.length-1]:0,le=Number(de(pe)||0),ce=Number(de(q)||0),be=Number(de(Y)||0),ge=Number(ue.mem_total_mb||0),ye=Number(de(ee)||ue.ws_clients||0),we=Number(de(te)||0)/60;if(ke("cpu",le,`${le.toFixed(0)}%`,le<90),ke("mem",ce,`${ce.toFixed(0)}%`,ce<90,Ie(be,ge)),ke("ws",ye/fe.ws*100,String(ye),ye<100),ke("rate",we/fe.rate*100,`${we.toFixed(1)}/s`,we<40),me){let Te=le>=90||ce>=90||we>=40;me.textContent=Te?"\u25CF BUSY":"\u25CF HEALTHY",me.classList.toggle("is-warn",Te)}}catch{}}setTimeout(Se,4e3),setInterval(Se,5e3)})()}let D={live:{title:"\u63A7\u5236\u53F0",kicker:"LIVE \xB7 \u64CD\u4F5C\u8259 \xB7 \u5373\u6642\u72C0\u614B",sections:["sec-live-feed"],showKpi:!0},viewer:{title:"\u89C0\u773E\u9801",kicker:"VIEWER \xB7 \u89C0\u773E\u7AEF\u8A2D\u5B9A",sections:["sec-viewer-config-info","sec-viewer-theme","sec-viewer-config-fields","sec-viewer-config-defaults","sec-viewer-config-limits"]},dashboard:{title:"\u63A7\u5236\u53F0",kicker:"DASHBOARD \xB7 \u6D3B\u52D5\u9032\u884C\u4E2D",sections:[],showKpi:!0},history:{title:"\u7D00\u9304\u8207\u532F\u51FA",kicker:"RECORDS \xB7 \u5834\u6B21\u8CC7\u6599\u5207\u7247",sections:["sec-sessions-overview","sec-search-overview","sec-audit-overview","sec-audience-overview"]},polls:{title:"\u6295\u7968",kicker:"POLLS \xB7 2\u20136 \u9078\u9805",sections:["sec-polls"]},widgets:{title:"\u5C0F\u5DE5\u5177",kicker:"OBS \u5C0F\u5DE5\u5177 \xB7 \u5206\u6578\u677F \xB7 \u8DD1\u99AC\u71C8",sections:["sec-widgets"]},themes:{title:"\u4E3B\u984C",kicker:"THEME PACKS \xB7 \u5F48\u5E55\u6A23\u5F0F\u9810\u8A2D",sections:["sec-themes"]},assets:{title:"\u7D20\u6750",kicker:"ASSETS LIBRARY \xB7 \u7D71\u4E00\u7D20\u6750\u7E3D\u89BD",sections:["sec-emojis","sec-stickers","sec-sounds","sec-fonts"]},integrations:{title:"\u64F4\u5145",sections:["sec-extensions-overview","sec-webhooks","sec-plugins","sec-api-tokens-overview","sec-scheduler"]},firetoken:{title:"Fire Token",kicker:"ADMIN LANE \xB7 FIRE TOKEN \xB7 \u7528\u91CF / IP / AUDIT",sections:["sec-firetoken-overview"]},moderation:{title:"\u5BE9\u6838",kicker:"MODERATION \xB7 \u5BE9\u6838\u8207\u9632\u8B77",sections:["sec-modqueue","sec-modbans-overview","sec-blacklist","sec-filters","sec-ratelimit","sec-fingerprints"]},effects:{title:"\u52D5\u756B\u6548\u679C",kicker:"EFFECTS LIBRARY \xB7 \u71B1\u91CD\u8F09",sections:["sec-effects","sec-effects-mgmt"]},system:{title:"\u7CFB\u7D71",kicker:"SYSTEM \xB7 \u5065\u5EB7\u5EA6\u8207\u7D44\u614B",sections:["sec-system-overview","admin-security-v2-page","sec-firetoken-overview","sec-wcag-overview","sec-about-overview"]},backup:{title:"\u5099\u4EFD\u8207\u9084\u539F",kicker:"BACKUP \xB7 EXPORT \xB7 DANGER",sections:["admin-backup-v2-page","sec-timeline-export"]},notifications:{title:"\u901A\u77E5",sections:[]},audience:{title:"\u89C0\u773E",kicker:"AUDIENCE \xB7 \u5373\u6642\u6307\u7D0B\u805A\u5408",sections:["sec-audience-overview"]},events:{title:"\u7CFB\u7D71\u4E8B\u4EF6",kicker:"SYSTEM \xB7 EVENTS \xB7 AUTO-EMITTED",sections:["sec-events"]},about:{title:"\u95DC\u65BC",kicker:"ABOUT \xB7 \u7248\u672C \xB7 CHANGELOG \xB7 \u958B\u6E90\u8CC7\u8A0A",sections:["sec-about-overview"]},setup:{title:"\u8A2D\u5B9A\u7CBE\u9748",kicker:"SETUP WIZARD \xB7 \u521D\u6B21\u8A2D\u5B9A \xB7 \u53EF\u91CD\u8DD1",sections:[]},"poll-deepdive":{title:"\u6295\u7968\u6DF1\u5EA6\u5206\u6790",kicker:"POLL ANALYTICS \xB7 \u9078\u9805\u5206\u4F48 \xB7 \u8AA0\u4FE1\u6AA2\u67E5",sections:["sec-poll-deepdive-overview"]},overlay:{title:"\u986F\u793A\u5C64",kicker:"DESKTOP \xB7 ON / OFF / PAUSED",sections:["admin-broadcast-v2-page","sec-viewer-config-defaults"]},sessions:{title:"\u5834\u6B21",kicker:"SESSIONS \xB7 \u5834\u6B21\u5217\u8868 \xB7 \u5373\u6642 / \u6B77\u53F2",sections:["sec-sessions-overview"]},"session-detail":{title:"\u5834\u6B21\u8A73\u60C5",kicker:"SESSION DETAIL \xB7 \u5BC6\u5EA6\u6642\u9593\u8EF8 \xB7 \u8A0A\u606F\u56DE\u9867",sections:["sec-session-detail-overview"]},search:{title:"\u641C\u5C0B",kicker:"SEARCH \xB7 \u5168\u6587\u641C\u5C0B \xB7 \u8DE8\u5834\u6B21",sections:["sec-search-overview"]},wcag:{title:"WCAG \u5C0D\u6BD4\u5EA6",kicker:"A11Y \xB7 WCAG 2.1 CONTRAST CHECKER",sections:["sec-wcag-overview"]},"onboarding-tour":{title:"\u65B0\u624B\u5C0E\u89BD",kicker:"ONBOARDING \xB7 5 \u6B65\u9A5F\u5FEB\u901F\u4E0A\u624B",sections:[]}};window.ADMIN_ROUTES=D;function O(){let W=document.querySelector(".admin-dash-grid");if(!W)return;let V="dashboard",ae=null;function se(re){return l.moderation.orderedIds.indexOf(re)!==-1?"moderation-grid":l.assets.orderedIds.indexOf(re)!==-1?"assets-grid":re==="sec-scheduler"||re==="sec-webhooks"?"sec-advanced":"settings-grid"}function G(){let re=W.querySelector("[data-route-title]")?.textContent?.trim().replace(/\s+/g," "),ue=W.querySelector("[data-route-note]"),pe=W.querySelector("[data-route-action]");if(pe&&Array.prototype.slice.call(pe.children).forEach(de=>{de._adminHomeHead?de._adminHomeHead.appendChild(de):de.remove()}),!re)return;let q=!!(window.AdminTabs&&window.AdminTabs.hasTabsFor&&window.AdminTabs.hasTabsFor(V)),Y=Array.prototype.slice.call(W.querySelectorAll(".admin-ui-page-head"));Y.forEach(de=>de.classList.remove("is-merged-into-topbar"));let ee=(D[V]?.title||"").trim().replace(/\s+/g," "),te=null;Y.forEach(de=>{let le=de.querySelector(".admin-ui-page-title"),ce=le&&le.textContent.trim().replace(/\s+/g," ");if(ce&&(q||ce===re||ce===ee)){if(de.offsetParent!==null){te===null&&(te=de.querySelector(".admin-ui-page-note")?.innerHTML||"");let ge=de.querySelector(".admin-ui-page-actions");ge&&pe&&!pe.children.length&&(ge._adminHomeHead=de,pe.appendChild(ge))}de.classList.add("is-merged-into-topbar")}}),ue&&(ue.innerHTML=te||"",ue.hidden=!te)}function Z(){let re=D[V],ue=new Set((re.sections||[]).map(se)),pe=q=>q.id==="sec-advanced"?Array.from(q.querySelectorAll('[id^="sec-"]')).some(Y=>getComputedStyle(Y).display!=="none"):Array.from(q.children).some(Y=>getComputedStyle(Y).display!=="none");W.querySelectorAll(".admin-route-sections").forEach(q=>{if(!(q.id==="sec-advanced"?ue.has("sec-advanced"):ue.has(q.id))){q.style.display="none";return}q.style.display="",q.style.display=pe(q)?"":"none"})}let ne=()=>{let re=D[V],ue=new Set(re.sections);W.querySelectorAll('[id^="sec-"]').forEach(pe=>{if(pe.id){if(pe.id==="sec-advanced"){let q=Array.from(pe.querySelectorAll('[id^="sec-"]')).some(Y=>ue.has(Y.id));pe.style.display=q?"":"none";return}pe.style.display=ue.has(pe.id)?"":"none"}}),ae&&window.AdminTabs?.hasTabsFor?.(V)&&window.AdminTabs.applyTabSectionVisibility(V,ae,W),Z(),G()},ie={system:{nav:"system",tab:"overview"},backup:{nav:"backup"},integrations:{nav:"integrations"},"api-tokens":{nav:"integrations",tab:"api-tokens"},webhooks:{nav:"integrations",tab:"webhooks"},plugins:{nav:"integrations",tab:"plugins"},scheduler:{nav:"integrations",tab:"scheduler"},sessions:{nav:"history",tab:"sessions"},search:{nav:"history",tab:"search"},audit:{nav:"history",tab:"audit"},replay:{nav:"history",tab:"replay"},audience:{nav:"history",tab:"audience"}},K=(re,ue,pe)=>{if(pe=pe||re,!D[re]){let _e=P[re];if(typeof _e=="string")re=_e;else if(_e&&typeof _e=="object")_e.nav&&(re=_e.nav),!ue&&_e.tab&&(ue=_e.tab);else{let $e=S[re];typeof $e=="string"?re=$e:$e&&typeof $e=="object"&&($e.nav&&(re=$e.nav),!ue&&$e.tab&&(ue=$e.tab))}}if(re==="system"&&ue&&ie[ue]){let _e=ie[ue];re=_e.nav,ue=_e.tab||null,pe=re}V=D[re]?re:"live",W.dataset.activeRoute=V;let q;window.AdminTabs?.hasTabsFor?.(V)?q=window.AdminTabs.resolveActiveTab(V,ue):q=null;let Y=pe&&pe!==V?"#/"+pe:window.AdminRouter?.buildHash?window.AdminRouter.buildHash(V,q):"#/"+V;if(window.location.hash!==Y){try{history.replaceState(null,"",Y)}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}let ee=D[V],te=Array.from(W.querySelectorAll(".admin-dash-nav-row[data-route]")),de=pe!==V?te.find(_e=>_e.dataset.route===pe):null;te.forEach(_e=>{let $e=de?_e===de:_e.dataset.route===V;_e.classList.toggle("is-active",$e),_e.setAttribute("aria-selected",$e?"true":"false")});let le=W.querySelector("[data-route-kicker]"),ce=W.querySelector("[data-route-title]");var be=window.ServerI18n?window.ServerI18n.t.bind(window.ServerI18n):function(_e){return _e},ge="adminRouteTitle_"+V,ye="adminRouteKicker_"+V,we=be(ge),Te=be(ye);le&&(le.textContent=Te!==ye?Te:ee.kicker),ce&&(ce.textContent=we!==ge?we:ee.title);let Ee=V==="dashboard"||V==="live";W.querySelectorAll('[data-route-view="dashboard"]').forEach(_e=>{_e.style.display=Ee?"":"none"}),Ee?window.AdminDashboard?.startSessionPolling?.():window.AdminDashboard?.stopSessionPolling?.(),ae=q,q&&window.AdminRouter?.tabMemory?.set?.(V,q),W.dataset.activeLeaf=q||V,ne(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:V,leaf:q}})),Z(),G(),X(V,q),Q(pe,V,q);try{history.replaceState(null,"",Y)}catch{}};function Q(re,ue,pe){window.AdminBreadcrumb?.render(W,re,ue,pe)}function X(re,ue){let pe=W.querySelector("[data-admin-tabs-host]");if(!pe){let q=W.querySelector(".admin-dash-topbar");if(!q)return;pe=document.createElement("div"),pe.dataset.adminTabsHost="",q.insertAdjacentElement("afterend",pe)}if(pe.innerHTML="",window.AdminTabs?.hasTabsFor?.(re)&&ue){pe.hidden=!1;let q=window.AdminTabs.renderTabStrip(re,ue,{onSelect:Y=>K(re,Y)});q&&pe.appendChild(q),pe.classList.remove("admin-tabs-host--accordion");return}pe.classList.remove("admin-tabs-host--accordion"),pe.hidden=!0}E&&window.removeEventListener("hashchange",E),E=()=>{let re=C(window.location.hash),ue=(window.location.hash||"").match(/^#\/([\w-]+)/),pe=ue?ue[1]:null;re&&K(re.nav,re.tab,pe||re.raw)},window.addEventListener("hashchange",E),W.querySelectorAll("[data-route]").forEach(re=>{re.addEventListener("click",ue=>{ue.preventDefault(),K(re.dataset.route)})});let oe=C(window.location.hash),me=(window.location.hash||"").match(/^#\/([\w-]+)/),fe=me?me[1]:oe?.raw||oe?.nav||"live";K(oe?.nav||"live",oe?.tab||null,fe),window._adminNavigateTo=()=>K(V,ae);let ke=!1;function Ie(){if(ke)return;ke=!0;let re=()=>{ke=!1,ne(),document.dispatchEvent(new CustomEvent("admin-route-applied",{detail:{route:V,leaf:ae}}))};typeof requestAnimationFrame=="function"&&document.visibilityState!=="hidden"?requestAnimationFrame(re):setTimeout(re,0)}let Se=W.querySelector(".admin-dash-main");Se&&typeof MutationObserver=="function"&&(new MutationObserver(()=>{Ie()}).observe(Se,{childList:!0,subtree:!0}),Ie())}function z(){window.ServerI18n&&typeof window.ServerI18n.bindLanguageSelector=="function"&&window.ServerI18n.bindLanguageSelector();let W=document.querySelector("[data-open-help]");W&&W.addEventListener("click",()=>{window.AdminHelp&&window.AdminHelp.toggle()});let V=document.querySelector("[data-open-palette]");if(V){let se=()=>{window.AdminCommandPalette&&window.AdminCommandPalette.open()};V.addEventListener("click",se),V.addEventListener("keydown",G=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),se())})}let ae=document.getElementById("logoutButton");ae&&ae.addEventListener("click",async()=>{try{let se=await x("/logout",{method:"POST"});se.redirected&&(window.location.href=se.url),showToast(ServerI18n.t("logoutSuccess"))}catch(se){console.error("Logout Failed:",se),showToast(ServerI18n.t("logoutFailed"),!1)}}),document.querySelectorAll(".toggle-checkbox").forEach(se=>{se.name&&se.addEventListener("change",async function(){let G=this.name,Z=this.checked;await h(G,Z)})}),document.querySelectorAll("details[id^='sec-']").forEach(se=>{se.addEventListener("toggle",()=>{let G=B();G[se.id]=se.open,N(G)})}),document.querySelectorAll(".setting-input").forEach(se=>{se.addEventListener("change",async function(){let G=this.dataset.key,Z=parseInt(this.dataset.index),ne=this.value;this.type==="number"&&(ne=parseInt(ne)),await o(G,ne,Z,this)})})}function T(){if(g.logged_in){try{sessionStorage.removeItem("admin_login_attempts")}catch{}L()}else I()}async function R(){await c(),T(),window.ServerI18n&&typeof ServerI18n.updateUI=="function"&&ServerI18n.updateUI()}function j(){window.AdminThemes&&window.AdminThemes.init()}function J(){window.AdminEffects&&window.AdminEffects.init()}window.addEventListener("beforeunload",()=>{w&&(w.disconnect(),w=null)}),R()})});var lt=ve(()=>{(function(){"use strict";var y=null;async function k(){var m=(document.getElementById("pollQuestion")?.value||"").trim(),M=document.querySelectorAll(".poll-option-input"),F=Array.from(M).map(function(P){return P.value.trim()}).filter(Boolean);if(!m){window.showToast(ServerI18n.t("pollEnterQuestion"),!1);return}if(F.length<2){window.showToast(ServerI18n.t("pollMinOptions"),!1);return}try{var w=await window.csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:m,options:F})}),E=await w.json();if(!w.ok){window.showToast(E.error||ServerI18n.t("pollCreateFailed"),!1);return}window.showToast(ServerI18n.t("pollCreated"),!0),A(E),x()}catch{window.showToast(ServerI18n.t("pollCreateFailed"),!1)}}async function g(){try{var m=await window.csrfFetch("/admin/poll/end",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollEndFailed"),!1);return}window.showToast(ServerI18n.t("pollEnded"),!0),A(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollEndFailed"),!1)}}async function f(){try{var m=await window.csrfFetch("/admin/poll/reset",{method:"POST"}),M=await m.json();if(!m.ok){window.showToast(M.error||ServerI18n.t("pollResetFailed"),!1);return}window.showToast(ServerI18n.t("pollResetDone"),!0),A(M),y&&(clearInterval(y),y=null)}catch{window.showToast(ServerI18n.t("pollResetFailed"),!1)}}function x(){y&&(clearInterval(y),y=null);var m=async function(){try{var M=await fetch("/admin/poll/status",{credentials:"same-origin"});if(M.ok){var F=await M.json();A(F),F.state!=="active"&&y&&(clearInterval(y),y=null)}}catch{}};m(),y=setInterval(m,2e3)}function U(){var m=window.AdminEmpty.renderCustom({icon:"\u22B7",title:ServerI18n.t("pollEmptyTitle"),desc:ServerI18n.t("pollEmptyDesc"),actionLabel:ServerI18n.t("pollEmptyAction"),action:function(){var M=document.querySelector('#sec-polls [data-poll-action="add"]');M&&M.click()},extra:`
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
      </div>`});return m.dataset.emptyKind="poll",m}function A(m){var M=document.getElementById("pollStatusDisplay");if(M){if(M.textContent="",!m||m.state==="idle"){M.appendChild(U());return}var F=m.total_votes||0,w=Math.max(1,...m.options.map(function(B){return B.count})),E=document.createElement("div");E.className="admin-poll-status-card";var P=document.createElement("div");P.className="admin-poll-status-header";var S=document.createElement("span");S.className="admin-poll-status-dot"+(m.state==="active"?" is-active":" is-ended"),P.appendChild(S);var b=document.createElement("span");b.className="admin-poll-status-question",b.textContent=m.question||"",P.appendChild(b);var C=document.createElement("span");C.className="admin-poll-status-state",C.textContent=m.state,P.appendChild(C),E.appendChild(P),m.options.forEach(function(B){var N=document.createElement("div");N.className="admin-poll-status-row";var v=document.createElement("div");v.className="admin-poll-status-label";var c=document.createElement("span"),r=document.createElement("b");r.textContent=B.key+".",c.appendChild(r),c.appendChild(document.createTextNode(" "+B.text));var n=document.createElement("span");n.textContent=B.count+" ("+B.percentage+"%)",v.appendChild(c),v.appendChild(n);var d=document.createElement("div");d.className="admin-poll-status-bar";var a=document.createElement("div");a.className="admin-poll-status-bar-fill",a.style.width=B.count/w*100+"%",d.appendChild(a),N.appendChild(v),N.appendChild(d),E.appendChild(N)});var H=document.createElement("div");H.className="admin-poll-status-footer",H.textContent=ServerI18n.t("pollTotalVotes").replace("{0}",F),E.appendChild(H),M.appendChild(E)}}function _(){var m=document.getElementById("sec-polls");if(m&&m.dataset.pollLegacyBound!=="1"){m.dataset.pollLegacyBound="1";var M=document.getElementById("pollCreateBtn");M&&M.addEventListener("click",k);var F=document.getElementById("pollEndBtn");F&&F.addEventListener("click",g);var w=document.getElementById("pollResetBtn");w&&w.addEventListener("click",f);var E=document.getElementById("pollAddOptionBtn");E&&E.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var C=b.querySelectorAll(".poll-option-input").length;if(C>=6){window.showToast(ServerI18n.t("maxPollOptions"),!1);return}var H=document.createElement("input");H.type="text",H.className="poll-option-input admin-ui-input",H.placeholder=String.fromCharCode(65+C)+". Option "+(C+1),H.maxLength=100,b.appendChild(H)}});var P=document.getElementById("pollRemoveOptionBtn");P&&P.addEventListener("click",function(){var b=document.getElementById("pollOptionsContainer");if(b){var C=b.querySelectorAll(".poll-option-input");if(C.length<=2){window.showToast(ServerI18n.t("minPollOptions"),!1);return}C[C.length-1].remove()}});var S=m;S&&(S.addEventListener("toggle",function(){S.open&&x()}),x()),window.addEventListener("beforeunload",function(){y&&(clearInterval(y),y=null)})}}document.addEventListener("admin-panel-rendered",function(){_()}),document.addEventListener("DOMContentLoaded",function(){_()}),window.addEventListener("hashchange",function(){var m=window.location.hash||"";m.indexOf("/polls")!==-1&&_()})})()});var ct=ve(()=>{(function(){"use strict";async function y(){try{let x=await fetch("/admin/blacklist/get",{method:"GET",credentials:"same-origin"});if(!x.ok){let M=await x.json();showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}",M.error||x.statusText),!1);return}let U=await x.json(),A=document.getElementById("blacklistKeywords");A.innerHTML="";let _=document.getElementById("modBlacklistCount");_&&(_.textContent=`${U.length} words`);let m=document.querySelector('[data-mod-stat="banned"]');m&&(m.textContent=U.length),U.length===0?A.innerHTML=`<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`:U.forEach(M=>{let F=document.createElement("div");F.className="hud-banned-row";let w=document.createElement("span");w.style.cssText="color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px",w.textContent="\u2298";let E=document.createElement("span");E.style.cssText="flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all",E.textContent=M;let P=document.createElement("button");P.className="removeKeywordBtn",P.type="button",P.style.cssText="background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px",P.textContent="UNBAN",P.setAttribute("data-keyword",M),F.appendChild(w),F.appendChild(E),F.appendChild(P),A.appendChild(F)})}catch(x){console.error("Fetch blacklist error:",x),showToast(ServerI18n.t("fetchBlacklistError"),!1)}}async function k(){let x=document.getElementById("newKeywordInput"),U=x.value.trim();if(!U){showToast(ServerI18n.t("keywordEmpty"),!1);return}try{let A=await window.csrfFetch("/admin/blacklist/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})}),_=await A.json();A.ok?(x.value="",y(),window.AdminQuickAction?window.AdminQuickAction.fire({label:_.message||ServerI18n.t("histToastBlacklisted",{keyword:U}),undo:{label:ServerI18n.t("histUndo"),run:async()=>{if(!(await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:U})})).ok)throw new Error("remove failed");y()}}}):showToast(_.message||"Keyword added.",!0)):showToast(_.error||"Failed to add keyword.",!1)}catch(A){console.error("Add keyword error:",A),showToast(ServerI18n.t("addKeywordError"),!1)}}async function g(x){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("histRemoveKwTitle"),subtitle:ServerI18n.t("cfmSubRemoveKeyword"),severity:"warn",bodyText:ServerI18n.t("confirmRemoveKeyword").replace("{keyword}",x),confirmLabel:ServerI18n.t("histRemoveKwConfirm")}))try{let A=await window.csrfFetch("/admin/blacklist/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:x})}),_=await A.json();A.ok?(showToast(_.message||"Keyword removed.",!0),y()):showToast(_.error||"Failed to remove keyword.",!1)}catch(A){console.error("Remove keyword error:",A),showToast(ServerI18n.t("removeKeywordError"),!1)}}function f(){let x=document.getElementById("addKeywordBtn");x&&x.addEventListener("click",k);let U=document.getElementById("newKeywordInput");U&&U.addEventListener("keypress",function(_){(_.key==="Enter"||_.keyCode===13)&&(_.preventDefault(),k())});let A=document.getElementById("blacklistKeywords");A&&A.addEventListener("click",function(_){let m=_.target.closest(".removeKeywordBtn");if(m){let M=m.dataset.keyword;M&&g(M)}})}document.addEventListener("admin-panel-rendered",function(){y(),f()}),window.AdminHistory={fetchBlacklist:y}})()});var ut=ve(()=>{(function(){"use strict";var y="sec-timeline-export",k="danmu.adminHistoryExports.v1",g=10,f={rawText:!0,polls:!0,masked:!1,metadata:!0},x=[{k:"live",labelKey:"historyV2RangeLive",hours:null},{k:"1h",labelKey:"historyV2Range1h",hours:1},{k:"24h",labelKey:"historyV2Range24h",hours:24},{k:"today",labelKey:"sessionsBucketToday",hours:null},{k:"yest",labelKey:"sessionsBucketYesterday",hours:null},{k:"7d",labelKey:"historyV2Range7d",hours:168},{k:"custom",labelKey:"historyV2RangeCustom",hours:null}],U=[{k:"JSON",descKey:"historyV2FormatJsonDesc"},{k:"CSV",descKey:"historyV2FormatCsvDesc"},{k:"SRT",descKey:"historyV2FormatSrtDesc",badgeKey:"historyV2FormatSrtBadge"}],A={range:"24h",filters:Object.assign({},f),format:"JSON"};function _(){return document.getElementById(y)}function m(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return[]}}function M(p){try{localStorage.setItem(k,JSON.stringify(p.slice(0,g)))}catch{}}function F(p){var $=m();$.unshift(p),M($)}function w(p){return p?p<1024?p+" B":p<1024*1024?(p/1024).toFixed(1)+" KB":(p/1024/1024).toFixed(1)+" MB":"0 B"}function E(p){try{var $=new Date(p),I=new Date,L=$.toDateString()===I.toDateString();if(L)return ServerI18n.t("historyV2TodayAt",{time:String($.getHours()).padStart(2,"0")+":"+String($.getMinutes()).padStart(2,"0")});var D=new Date(I);return D.setDate(I.getDate()-1),$.toDateString()===D.toDateString()?ServerI18n.t("historyV2YesterdayAt",{time:String($.getHours()).padStart(2,"0")+":"+String($.getMinutes()).padStart(2,"0")}):$.getMonth()+1+"-"+String($.getDate()).padStart(2,"0")+" "+String($.getHours()).padStart(2,"0")+":"+String($.getMinutes()).padStart(2,"0")}catch{return p||""}}function P(p){if(p==="1h")return 1;if(p==="24h")return 24;if(p==="7d")return 168;if(p==="today"){var $=new Date,I=new Date($.getFullYear(),$.getMonth(),$.getDate());return Math.max(1,Math.ceil(($-I)/36e5))}return p==="yest"?48:p==="live"?6:24}function S(p){return p.filter(function($){return!(!A.filters.rawText&&!$.is_poll&&!$.muted&&!$.banned||!A.filters.polls&&$.is_poll||!A.filters.masked&&($.muted||$.banned))}).map(function($){if(!A.filters.metadata){var I=Object.assign({},$);return delete I.clientIp,delete I.fingerprint,I}return $})}function b(p){var $=["timestamp","nickname","text","color","size","speed","opacity","isImage","fontName","clientIp","fingerprint","status","delivery_reason"],I=function(O){var z=O==null?"":String(O);return z.indexOf(",")>=0||z.indexOf('"')>=0||z.indexOf(`
`)>=0?'"'+z.replace(/"/g,'""')+'"':z},L=function(O){return O.status?O.status:O.banned?"banned":O.muted?"muted":O.is_poll?"poll":"ok"},D=p.map(function(O){return[O.timestamp||"",O.nickname||"",O.text||"",O.color?"#"+O.color:"",O.size!=null?O.size:"",O.speed!=null?O.speed:"",O.opacity!=null?O.opacity:"",O.isImage?"true":"false",O.fontInfo&&O.fontInfo.name||"",O.clientIp||"",O.fingerprint||"",L(O),O.delivery_reason||""].map(I).join(",")});return[$.join(","),D.join(`\r
`)].filter(Boolean).join(`\r
`)}function C(p){return p.map(function($,I){var L=new Date($.timestamp||Date.now()),D=H(L),O=H(new Date(L.getTime()+3e3)),z=($.nickname?"["+$.nickname+"] ":"")+($.text||"");return I+1+`
`+D+" --> "+O+`
`+z+`
`}).join(`
`)}function H(p){var $=function(I,L){return String(I).padStart(L||2,"0")};return $(p.getHours())+":"+$(p.getMinutes())+":"+$(p.getSeconds())+","+$(p.getMilliseconds(),3)}function B(p,$){var I=URL.createObjectURL(p),L=document.createElement("a");L.href=I,L.download=$,L.click(),URL.revokeObjectURL(I)}function N(){var p=P(A.range),$=document.getElementById("histv2-go");$&&($.disabled=!0,$.dataset.busy="1"),fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function(I){if(!I.ok)throw new Error("http "+I.status);return I.json()}).then(function(I){var L=I&&I.records||[],D=S(L);if(D.length===0){window.showToast&&window.showToast(ServerI18n.t("historyV2NoMatchingRecords"),!1);return}var O=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),z,T;if(A.format==="JSON"){var R=JSON.stringify(D,null,2);T=new Blob([R],{type:"application/json"}),z="danmu-history-"+O+".json"}else A.format==="CSV"?(T=new Blob(["\uFEFF"+b(D)],{type:"text/csv;charset=utf-8;"}),z="danmu-history-"+O+".csv"):(T=new Blob([C(D)],{type:"application/x-subrip;charset=utf-8;"}),z="danmu-history-"+O+".srt");B(T,z),F({name:z,fmt:A.format,size:T.size,when:new Date().toISOString(),count:D.length}),c(),v(D.length,T.size),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExported",{n:D.length}),!0)}).catch(function(I){console.error("[history-v2] export failed",I),window.showToast&&window.showToast(ServerI18n.t("historyV2ToastExportFailed",{msg:I.message||I}),!1)}).finally(function(){$&&($.disabled=!1,delete $.dataset.busy)})}function v(p,$){var I=document.getElementById("histv2-estimate");I&&(I.textContent=ServerI18n.t("historyV2Estimate",{count:p||"\u2014",size:$?w($):"\u2014 MB"}))}function c(){var p=document.getElementById("histv2-recent-list");if(p){var $=m();if($.length===0){p.innerHTML='<div class="histv2-recent-empty">'+ServerI18n.t("historyV2RecentEmpty")+"</div>";return}p.innerHTML=$.map(function(I){return'<div class="histv2-recent-row"><span class="histv2-recent-fmt">'+I.fmt+'</span><div class="histv2-recent-meta"><div class="histv2-recent-name">'+r(I.name)+'</div><div class="histv2-recent-sub">admin \xB7 '+r(E(I.when))+" \xB7 "+w(I.size)+"</div></div></div>"}).join("")}}function r(p){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(p):p==null?"":String(p).replace(/[&<>"']/g,function($){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[$]})}function n(){return x.map(function(p){var $=A.range===p.k;return'<button type="button" class="histv2-chip'+($?" is-active":"")+'" data-histv2-range="'+p.k+'">'+r(ServerI18n.t(p.labelKey))+(p.k==="live"?" \xB7 "+d():"")+"</button>"}).join("")}function d(){var p=new Date;return String(p.getHours()).padStart(2,"0")+":"+String(p.getMinutes()).padStart(2,"0")+"\u2013"+ServerI18n.t("historyV2Now")}function a(){var p=[{k:"rawText",labelKey:"historyV2ToggleRawText"},{k:"polls",labelKey:"historyV2TogglePolls"},{k:"masked",labelKey:"historyV2ToggleMasked"},{k:"metadata",labelKey:"historyV2ToggleMetadata"}];return p.map(function($){var I=!!A.filters[$.k];return'<button type="button" class="histv2-toggle'+(I?" is-on":"")+'" data-histv2-toggle="'+$.k+'"><span class="histv2-toggle-mark">'+(I?"\u2713":"\u25CB")+"</span><span>"+r(ServerI18n.t($.labelKey))+"</span></button>"}).join("")}function l(){return U.map(function(p){var $=A.format===p.k;return'<button type="button" class="histv2-fmt'+($?" is-selected":"")+'" data-histv2-fmt="'+p.k+'">'+($?'<span class="histv2-fmt-check">\u2713</span>':"")+(p.badge?'<span class="histv2-fmt-badge">'+r(p.badge)+"</span>":"")+'<div class="histv2-fmt-ext">'+p.k+'</div><div class="histv2-fmt-desc">'+r(p.desc)+"</div></button>"}).join("")}function i(){var p=_();p&&(p.innerHTML='<div class="histv2-grid"><div class="histv2-pane histv2-picker"><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepTime")+'</div><div class="histv2-chips" id="histv2-chips">'+n()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFilter")+'</div><div class="histv2-toggles" id="histv2-toggles">'+a()+'</div><div class="histv2-section-hd">'+ServerI18n.t("historyV2StepFormat")+'</div><div class="histv2-formats" id="histv2-formats">'+l()+'</div><div class="histv2-actions"><button type="button" id="histv2-go" class="histv2-go">'+ServerI18n.t("historyV2GoButton")+'</button><span id="histv2-estimate" class="histv2-estimate">'+ServerI18n.t("historyV2Estimate",{count:"\u2014",size:"\u2014 MB"})+'</span></div></div><div class="histv2-pane histv2-recent"><div class="histv2-recent-hd"><span class="histv2-recent-label">'+ServerI18n.t("historyV2RecentLabel")+'</span><span class="histv2-recent-period">'+ServerI18n.t("historyV2RecentPeriod")+'</span></div><div id="histv2-recent-list" class="histv2-recent-list"></div><div class="histv2-privacy"><div class="histv2-privacy-hd">'+ServerI18n.t("historyV2PrivacyTitle")+"</div>"+ServerI18n.t("historyV2PrivacyBody")+"</div></div></div>",p.addEventListener("click",e),c(),s())}function e(p){var $=p.target.closest("[data-histv2-range]");if($){A.range=$.dataset.histv2Range,o(),s();return}var I=p.target.closest("[data-histv2-toggle]");if(I){var L=I.dataset.histv2Toggle;A.filters[L]=!A.filters[L],h(),s();return}var D=p.target.closest("[data-histv2-fmt]");if(D){A.format=D.dataset.histv2Fmt,t(),s();return}var O=p.target.closest("#histv2-go");if(O&&!O.dataset.busy){N();return}}function o(){var p=document.getElementById("histv2-chips");p&&(p.innerHTML=n())}function h(){var p=document.getElementById("histv2-toggles");p&&(p.innerHTML=a())}function t(){var p=document.getElementById("histv2-formats");p&&(p.innerHTML=l())}function s(){s._t&&clearTimeout(s._t),s._t=setTimeout(function(){var p=P(A.range);fetch("/admin/history?hours="+p+"&limit=10000",{credentials:"same-origin"}).then(function($){return $.ok?$.json():null}).then(function($){if(!$)return v(0,0);var I=S($&&$.records||[]),L=A.format==="JSON"?220:A.format==="CSV"?110:80;v(I.length,I.length*L)}).catch(function(){v(0,0)})},250)}function u(){var p=_(),$=document.getElementById("admin-backup-v2-page");if(!p){var I=document.getElementById("settings-grid");if(!I)return;p=document.createElement("div"),p.id=y,p.className="admin-ui-card lg:col-span-2 history-v2-section",I.appendChild(p),i()}$&&$.parentElement&&p.previousElementSibling!==$&&$.parentElement.insertBefore(p,$.nextSibling)}document.addEventListener("admin-panel-rendered",u),document.addEventListener("admin-route-applied",u),window.AdminHistoryV2={refresh:s,state:A}})()});var mt=ve(()=>{(function(){"use strict";let y="admin-replay-bar";function k(){let f=document.getElementById(y);return f||(document.body?(f=document.createElement("div"),f.id=y,f.className="admin-replay-bar",f.hidden=!0,f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),f.innerHTML='<span class="admin-replay-bar__dot" aria-hidden="true"></span><span class="admin-replay-bar__label">'+ServerI18n.t("replayBarLabel")+'</span><span id="replayProgress" class="admin-replay-bar__progress hidden"></span><span class="admin-replay-bar__spacer"></span><button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">'+ServerI18n.t("pause")+'</button><button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">'+ServerI18n.t("resume")+'</button><button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">'+ServerI18n.t("stop")+"</button>",document.body.insertBefore(f,document.body.firstChild),f):null)}function g(f){let x=k();x&&(x.hidden=!f)}window.AdminReplayBar={ensure:k,setActive:g},document.addEventListener("admin-panel-rendered",k)})()});var pt=ve(()=>{(function(){"use strict";let y=null;function k(E){window.AdminReplayBar&&window.AdminReplayBar.ensure();let P=document.getElementById("replayPauseBtn"),S=document.getElementById("replayResumeBtn"),b=document.getElementById("replayStopBtn"),C=document.getElementById("replayProgress"),H=(v,c)=>{v&&v.classList.toggle("hidden",!c)},B=E==="playing",N=E==="paused";H(P,B),H(S,N),H(b,B||N),H(C,B||N),!B&&!N&&C&&(C.textContent=""),window.AdminReplayBar&&window.AdminReplayBar.setActive(B||N)}function g(){y&&clearInterval(y),y=setInterval(async()=>{try{let E=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!E.ok)return;let P=await E.json(),S=document.getElementById("replayProgress");S&&(S.textContent=ServerI18n.t("replayingProgress").replace("{sent}",P.sent).replace("{total}",P.total)),k(P.state),P.state==="stopped"&&(clearInterval(y),y=null)}catch{}},500)}async function f(){try{await window.csrfFetch("/admin/replay/pause",{method:"POST"}),k("paused")}catch{window.showToast(window.ServerI18n.t("replayPauseFailed"),!1)}}async function x(){try{await window.csrfFetch("/admin/replay/resume",{method:"POST"}),k("playing")}catch{window.showToast(window.ServerI18n.t("replayResumeFailed"),!1)}}async function U(){try{await window.csrfFetch("/admin/replay/stop",{method:"POST"}),k("stopped"),y&&(clearInterval(y),y=null)}catch{window.showToast(window.ServerI18n.t("replayStopFailed"),!1)}}let A=null,_=null,m=0,M=null;function F(){[["replayPauseBtn",f],["replayResumeBtn",x],["replayStopBtn",U]].forEach(function([P,S]){let b=document.getElementById(P);b&&!b.dataset.replayCtrlsBound&&(b.addEventListener("click",S),b.dataset.replayCtrlsBound="1")})}async function w(){try{let E=await fetch("/admin/replay/status",{credentials:"same-origin"});if(!E.ok)return;let P=await E.json();(P.state==="playing"||P.state==="paused")&&(k(P.state),g())}catch{}}window.AdminReplayControls={notifyStarted:function(){k("playing"),g()}},document.addEventListener("admin-panel-rendered",function(){F(),w()}),document.addEventListener("DOMContentLoaded",function(){setTimeout(F,800)})})()});var vt=ve(()=>{(function(){"use strict";let y="sec-ratelimit",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(A){return String(A).replace(/[&<>"']/g,function(_){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[_]})},g=[{key:"fire",labelKey:"ratelimitScopeFireDesc",envLimit:"FIRE_RATE_LIMIT",envWindow:"FIRE_RATE_WINDOW",defLimit:20,defWindow:60,defLockout:null},{key:"api",labelKey:"ratelimitScopeApiDesc",envLimit:"API_RATE_LIMIT",envWindow:"API_RATE_WINDOW",defLimit:30,defWindow:60,defLockout:null},{key:"admin",labelKey:"ratelimitScopeAdminDesc",envLimit:"ADMIN_RATE_LIMIT",envWindow:"ADMIN_RATE_WINDOW",defLimit:300,defWindow:60,defLockout:null},{key:"login",labelKey:"ratelimitScopeLoginDesc",envLimit:"LOGIN_RATE_LIMIT",envWindow:"LOGIN_RATE_WINDOW",defLimit:5,defWindow:300,defLockout:900}];function f(){return`
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
          ${g.map(A=>`
            <div class="admin-ratelimit-row" data-rl-key="${A.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${k(ServerI18n.t(A.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${A.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${A.defLimit}" data-rl-limit="${A.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${A.key}">
                    <option value="10"${A.defWindow===10?" selected":""}>10s</option>
                    <option value="30"${A.defWindow===30?" selected":""}>30s</option>
                    <option value="60"${A.defWindow===60?" selected":""}>60s</option>
                    <option value="300"${A.defWindow===300?" selected":""}>5 min</option>
                    <option value="3600"${A.defWindow===3600?" selected":""}>1 hr</option>
                  </select>
                </label>
                ${A.key==="login"?`
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${A.defLockout}" data-rl-lockout="${A.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>`:""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${A.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${A.key}">\u2014</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${A.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${A.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${A.key}">
                  effective_rate = ${A.defLimit} / ${A.defWindow}s = ${(A.defLimit/A.defWindow).toFixed(2)} req/s \xB7 burst = ${Math.round(A.defLimit*1.5)}${A.key==="login"?" \xB7 lock = "+A.defLockout+"s":""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${A.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">\u25B2</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>\u2014</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${A.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
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
      </div>`}function x(A){let _=A.querySelector("#rlEnvExport");setTimeout(async()=>{try{let c=window.AdminBootstrap;c&&typeof c.primeBootstrap=="function"&&await c.primeBootstrap();let r=c&&c.bootstrapSection?c.bootstrapSection("history_stats"):null,n=c&&c.bootstrapSection?c.bootstrapSection("blacklist"):null,d=c&&c.bootstrapSection?c.bootstrapSection("metrics"):null,a=[];a.push(r?null:fetch("/admin/history?hours=24&limit=1",{credentials:"same-origin"})),a.push(n?null:fetch("/admin/blacklist/get",{credentials:"same-origin"})),a.push(d?null:fetch("/admin/metrics",{credentials:"same-origin"}));let[l,i,e]=await Promise.all(a),o=r||(l&&l.ok?await l.json():null);if(o){let $=o.stats&&o.stats.last_24h||0,I=o.stats&&o.stats.total||0,L=A.querySelector("[data-rl-sum-hits]"),D=A.querySelector("[data-rl-sum-hits-delta]");L&&(L.textContent=$.toLocaleString()),D&&(D.textContent=ServerI18n.t("ratelimitSumTotal",{n:I.toLocaleString()}))}let h=n||(i&&i.ok?await i.json():null);if(h){let $=Array.isArray(h)?h:h.entries||h.keywords||[],I=A.querySelector("[data-rl-sum-black]");I&&(I.textContent=$.length?ServerI18n.t("ratelimitCountUnit",{n:$.length}):"0")}let t=A.querySelector("[data-rl-sum-viol]"),s=A.querySelector("[data-rl-sum-viol-rate]"),u=A.querySelector("[data-rl-sum-locked]"),p=d||(e&&e.ok?await e.json():null);if(p){let $=p&&p.rate_limits;if($&&$.totals){let I=$.totals.hits||0,L=$.totals.violations||0,D=$.totals.locked_sources||0;if(t&&(t.textContent=L.toLocaleString()),s){let O=I+L;s.textContent=O>0?ServerI18n.t("ratelimitBlockRateValue",{rate:(L/O*100).toFixed(1)}):"\u2014"}u&&(u.textContent=ServerI18n.t("ratelimitLockedSources",{n:D.toLocaleString()})),g.forEach(({key:O})=>{let z=$[O],T=A.querySelector(`[data-rl-current="${O}"]`);if(T&&z){let R=(z.hits||0).toLocaleString(),j=(z.violations||0).toLocaleString();T.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:R,viol:j})}}),M($)}else t&&(t.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014")}else t&&(t.textContent="\u2014"),s&&(s.textContent=ServerI18n.t("ratelimitCountPendingBackend")),u&&(u.textContent="\u2014");m(p&&p.recent_violations)}catch{}},4500);function m(c){let r=A.querySelector("[data-rl-vbody]"),n=A.querySelector("[data-rl-vcount]");if(!r)return;let d=Array.isArray(c)?c:[];if(n&&(n.textContent=ServerI18n.t("ratelimitViolationsCount",{n:d.length})),d.length===0){r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;return}let a=i=>{let e=new Date(i*1e3),o=h=>String(h).padStart(2,"0");return`${o(e.getHours())}:${o(e.getMinutes())}:${o(e.getSeconds())}`},l=i=>({fire:"var(--color-primary)",api:"var(--hud-lime)",admin:"var(--hud-amber)",login:"var(--hud-crimson)"})[i]||"var(--color-text-muted)";r.innerHTML=d.slice(0,30).map(i=>`
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${a(i.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${l(i.scope)}">${(i.scope||"").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${k(i.ip||"")}</span>
        </div>
      `).join("")}function M(c){c&&g.forEach(({key:r})=>{let n=c[r],d=A.querySelector(`[data-rl-suggest="${r}"]`);if(!d)return;let a=n&&n.suggestion;if(!a){d.hidden=!0;return}let l=d.querySelector("[data-rl-suggest-detail]");l&&(l.textContent=ServerI18n.t("ratelimitSuggestDetail",{p95:Number(a.p95_per_second||0).toFixed(2),limit:n.limit||"\u2014",window:n.window||"\u2014",suggLimit:a.suggested_limit,suggWindow:a.suggested_window}));let i=d.querySelector("[data-rl-apply]");i&&(i.dataset.rlSuggestLimit=String(a.suggested_limit),i.dataset.rlSuggestWindow=String(a.suggested_window)),d.hidden=!1})}async function F(){try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let r=await c.json(),n=r&&r.rate_limits;if(!n)return;g.forEach(({key:d})=>{let a=n[d],l=A.querySelector(`[data-rl-current="${d}"]`);if(l&&a){let i=(a.hits||0).toLocaleString(),e=(a.violations||0).toLocaleString();l.textContent=ServerI18n.t("ratelimitHitsViolations",{hits:i,viol:e})}}),M(n)}catch{}}A.addEventListener("click",async c=>{let r=c.target.closest("[data-rl-action]");if(!r)return;let n=r.dataset.rlAction;if(n==="save"){let d=r.dataset.rlSave,a=A.querySelector(`[data-rl-limit="${d}"]`),l=A.querySelector(`[data-rl-window="${d}"]`);if(!a||!l)return;let i=parseInt(a.value,10),e=parseInt(l.value,10);if(!Number.isFinite(i)||!Number.isFinite(e)){typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitInvalidInputToast"),!1);return}let o=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let h=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:i,window:e})});if(h.ok)typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastApplied",{scope:d.toUpperCase(),limit:i,window:e}),!0),F();else{let t=await h.json().catch(()=>({})),s=t&&t.error||`HTTP ${h.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:s}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=o}return}if(n==="apply-suggest"){let d=r.dataset.rlApply,a=parseInt(r.dataset.rlSuggestLimit,10),l=parseInt(r.dataset.rlSuggestWindow,10);if(!d||!Number.isFinite(a)||!Number.isFinite(l))return;let i=r.textContent;r.disabled=!0,r.textContent=ServerI18n.t("ratelimitApplyingBtn");try{let e=await window.csrfFetch("/admin/ratelimit/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:d,limit:a,window:l})});if(e.ok){let o=A.querySelector(`[data-rl-limit="${d}"]`),h=A.querySelector(`[data-rl-window="${d}"]`);o&&(o.value=a),h&&(h.value=l),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitToastAppliedSuggestion",{scope:d.toUpperCase(),limit:a,window:l}),!0),F(),w()}else{let o=await e.json().catch(()=>({})),h=o&&o.error||`HTTP ${e.status}`;typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:h}),!1)}}catch{typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitApplyFailedToast",{msg:ServerI18n.t("ratelimitNetworkError")}),!1)}finally{r.disabled=!1,r.textContent=i}return}if(n==="export"){let d=[];A.querySelectorAll("[data-rl-limit]").forEach(a=>{let l=a.dataset.rlLimit.toUpperCase();d.push(`${l}_RATE_LIMIT=${a.value}`)}),A.querySelectorAll("[data-rl-window]").forEach(a=>{let l=a.dataset.rlWindow.toUpperCase();d.push(`${l}_RATE_WINDOW=${a.value}`)}),_.textContent=d.join(`
`),_.hidden=!1;try{navigator.clipboard?.writeText(d.join(`
`)),typeof showToast=="function"&&showToast(ServerI18n.t("ratelimitCopiedToast"),!0)}catch{}}else n==="reset"&&(Object.entries({fire:[20,60],api:[30,60],admin:[60,60],login:[5,300]}).forEach(([a,[l,i]])=>{let e=A.querySelector(`[data-rl-limit="${a}"]`),o=A.querySelector(`[data-rl-window="${a}"]`);e&&(e.value=l),o&&(o.value=i)}),_.hidden=!0,w())});function w(){g.forEach(({key:c})=>{let r=A.querySelector(`[data-rl-limit="${c}"]`),n=A.querySelector(`[data-rl-window="${c}"]`),d=A.querySelector(`[data-rl-lockout="${c}"]`),a=A.querySelector(`[data-rl-effective="${c}"]`);if(!r||!n||!a)return;let l=parseInt(r.value,10)||0,i=parseInt(n.value,10)||1,e=(l/i).toFixed(2),o=Math.round(l*1.5),h=`effective_rate = ${l} / ${i}s = ${e} req/s \xB7 burst = ${o}`;if(c==="login"&&d){let t=parseInt(d.value,10)||0;h+=` \xB7 lock = ${t}s`}a.textContent=h})}A.addEventListener("input",c=>{let r=c.target;!r||!r.dataset.rlLimit&&!r.dataset.rlLockout||w()}),A.addEventListener("change",c=>{let r=c.target;!r||!r.dataset.rlWindow||w()}),w();function E(c,r){if(!c||!Array.isArray(r))return;let n=96,d=24,a=r.length?r:new Array(24).fill(0),l=Math.max(1,...a),i=n/Math.max(1,a.length-1),e=a.map((h,t)=>`${(t*i).toFixed(1)},${(d-2-h/l*(d-4)).toFixed(1)}`).join(" "),o=c.querySelector("polyline");o&&o.setAttribute("points",e)}g.forEach(({key:c})=>{let r=A.querySelector(`[data-rl-spark="${c}"]`);r&&E(r,new Array(24).fill(0))});let P=/^([0-9a-f:.]+)(\/\d{1,3})?$/i,S={allowlist:[],denylist:[]},b={input:A.querySelector("[data-rl-ip-input]"),select:A.querySelector("[data-rl-ip-select]"),addBtn:A.querySelector("[data-rl-ip-add]"),summary:A.querySelector("[data-rl-ip-summary]"),error:A.querySelector("[data-rl-ip-error]"),allowCount:A.querySelector("[data-rl-ip-allow-count]"),denyCount:A.querySelector("[data-rl-ip-deny-count]"),allowBody:A.querySelector('[data-rl-ip-body="allowlist"]'),denyBody:A.querySelector('[data-rl-ip-body="denylist"]')};function C(c){if(b.error){if(!c){b.error.hidden=!0,b.error.textContent="";return}b.error.hidden=!1,b.error.textContent=c}}function H(c){let r=c==="allowlist"?b.allowBody:b.denyBody,n=c==="allowlist"?b.allowCount:b.denyCount;if(!r||!n)return;let d=Array.isArray(S[c])?S[c]:[];if(n.textContent=String(d.length),d.length===0){let a=ServerI18n.t(c==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName");r.innerHTML=`<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet",{list:a})}</div>`;return}r.innerHTML=d.map(a=>{let l=ServerI18n.t("ratelimitRemoveEntryTitle",{entry:k(a)});return`
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${k(a)}">
          <span class="admin-ratelimit-ip-chip-cidr">${k(a)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${k(a)}" data-rl-ip-remove-kind="${c}" title="${l}" aria-label="${l}">\xD7</button>
        </div>
      `}).join("")}function B(){if(H("allowlist"),H("denylist"),b.summary){let c=(S.allowlist||[]).length,r=(S.denylist||[]).length;b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitIpCounts",{allow:c,deny:r})}}async function N(){try{let c=await fetch("/admin/ratelimit/ip-rules",{credentials:"same-origin"});if(!c.ok){b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitLoadFailedStatus",{status:c.status}));return}let r=await c.json();r&&typeof r=="object"&&(S={allowlist:Array.isArray(r.allowlist)?r.allowlist:[],denylist:Array.isArray(r.denylist)?r.denylist:[]},B())}catch{b.summary&&(b.summary.textContent=ServerI18n.t("ratelimitIpPolicyLabel")+" \xB7 "+ServerI18n.t("ratelimitNetworkError"))}}async function v(c,{toastLabel:r}={}){try{let n=await window.csrfFetch("/admin/ratelimit/ip-rules",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(n.ok){let l=await n.json();return S={allowlist:Array.isArray(l.allowlist)?l.allowlist:[],denylist:Array.isArray(l.denylist)?l.denylist:[]},B(),C(""),r&&typeof showToast=="function"&&showToast(r,!0),!0}let d=await n.json().catch(()=>({})),a=d&&d.error||`HTTP ${n.status}`;return C(a),!1}catch{return C(ServerI18n.t("ratelimitNetworkError")),!1}}b.addBtn&&b.addBtn.addEventListener("click",async()=>{if(!b.input||!b.select)return;let c=(b.input.value||"").trim();if(!c){C(ServerI18n.t("ratelimitIpRequiredError"));return}if(!P.test(c)){C(ServerI18n.t("ratelimitIpFormatError"));return}let r=b.select.value==="denylist"?"denylist":"allowlist",n=Array.from(new Set([...S[r]||[],c]));await v({[r]:n},{toastLabel:ServerI18n.t("ratelimitToastAdded",{list:ServerI18n.t(r==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:c})})&&(b.input.value="")}),b.input&&(b.input.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),b.addBtn&&b.addBtn.click())}),b.input.addEventListener("input",()=>{b.error&&!b.error.hidden&&C("")})),A.addEventListener("click",async c=>{let r=c.target.closest("[data-rl-ip-remove]");if(!r)return;let n=r.dataset.rlIpRemove,d=r.dataset.rlIpRemoveKind==="denylist"?"denylist":"allowlist",a=(S[d]||[]).filter(l=>l!==n);await v({[d]:a},{toastLabel:ServerI18n.t("ratelimitToastRemoved",{list:ServerI18n.t(d==="allowlist"?"ratelimitAllowlistName":"ratelimitDenylistName"),value:n})})}),N(),setTimeout(async()=>{try{let c=await fetch("/admin/metrics",{credentials:"same-origin"});if(!c.ok)return;let r=await c.json(),n=r&&r.rate_limits;if(!n)return;g.forEach(({key:d})=>{let a=n[d]&&(n[d].bucket_history||n[d].history);if(Array.isArray(a)&&a.length){let l=A.querySelector(`[data-rl-spark="${d}"]`);l&&E(l,a.slice(-24))}})}catch{}},5500)}function U(){let A=document.getElementById("settings-grid");if(!A||document.getElementById(y))return;A.insertAdjacentHTML("beforeend",f());let _=document.getElementById(y);_&&x(_)}document.addEventListener("admin-panel-rendered",U),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&U()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),U()})})()});var ft=ve(()=>{(function(){"use strict";let y="sec-viewer-theme",k="danmu.viewerTheme.v1",g=[{id:"default",nameKey:"viewerThemePresetDefaultName",bg:"#050910",primary:"#7DD3FC",hero:"#FCD34D",mode:"dark",font:"Zen Kaku Gothic New"},{id:"daylight",nameKey:"viewerThemePresetDaylightName",bg:"#F8FAFC",primary:"#0284C7",hero:"#D97706",mode:"light",font:"Zen Kaku Gothic New"},{id:"cinema",nameKey:"viewerThemePresetCinemaName",bg:"#0A0A0F",primary:"#FBBF24",hero:"#FCD34D",mode:"dark",font:"Chakra Petch"},{id:"retro",nameKey:"viewerThemePresetRetroName",bg:"#1A1511",primary:"#FB923C",hero:"#FDE68A",mode:"dark",font:"Bebas Neue"}];function f(){return`
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
      </div>`}let x=/^#[0-9a-f]{6}$/i,U=/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i;function A(F){return String(F??"").replace(/[&<>"']/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[w])}function _(F){let w={};return!F||typeof F!="object"||(["bg","primary","hero"].forEach(E=>{typeof F[E]=="string"&&x.test(F[E])&&(w[E]=F[E])}),(F.mode==="dark"||F.mode==="light")&&(w.mode=F.mode),typeof F.font=="string"&&/^[\w .-]{1,64}$/.test(F.font)&&(w.font=F.font),(F.logo===null||typeof F.logo=="string"&&U.test(F.logo))&&(w.logo=F.logo)),w}function m(F){let w={...g[0],logo:null};try{let t=localStorage.getItem(k);t&&(w={...w,..._(JSON.parse(t))})}catch{}let E="default";function P(){try{localStorage.setItem(k,JSON.stringify(w))}catch{}}function S(t){let s=/^#?([0-9a-f]{6})$/i.exec(t);if(!s)return[0,0,0];let u=parseInt(s[1],16);return[u>>16&255,u>>8&255,u&255]}function b([t,s,u]){let p=[t,s,u].map($=>($/=255,$<=.03928?$/12.92:Math.pow(($+.055)/1.055,2.4)));return .2126*p[0]+.7152*p[1]+.0722*p[2]}function C(t,s){let u=b(S(t)),p=b(S(s)),[$,I]=u>p?[u,p]:[p,u];return($+.05)/(I+.05)}function H(t){return t>=7?{label:"AAA",cls:"is-good"}:t>=4.5?{label:"AA",cls:"is-ok"}:t>=3?{label:"AA/LG",cls:"is-meh"}:{label:"FAIL",cls:"is-fail"}}function B(){let t=F.querySelector("[data-vt-presets]");t.innerHTML="",g.forEach(s=>{let u=document.createElement("button");u.type="button",u.className="admin-vt-preset"+(E===s.id?" is-active":""),u.innerHTML=`
          <div class="swatch" style="background:${s.bg}">
            <span style="background:${s.primary}"></span>
            <span style="background:${s.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(s.nameKey)}</div>
          <div class="mode">${ServerI18n.t(s.mode==="dark"?"lbDark":"lbLight")}</div>
        `,u.addEventListener("click",()=>{w={...w,...s},E=s.id,P(),h()}),t.appendChild(u)})}function N(){F.querySelectorAll("[data-vt-mode-btn]").forEach(t=>{t.classList.toggle("is-active",w.mode===t.dataset.vtModeBtn)})}function v(){let t=F.querySelector("[data-vt-colors]"),s=w.mode==="dark"?"#F8FAFC":"#0F172A",u=[{key:"bg",label:ServerI18n.t("viewerThemeColorLabelBg"),en:"BG",vs:s,vsLbl:ServerI18n.t("viewerThemeColorLabelText")},{key:"primary",label:ServerI18n.t("viewerThemeColorLabelPrimary"),en:"PRIMARY",vs:w.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")},{key:"hero",label:ServerI18n.t("viewerThemeColorLabelHero"),en:"HERO",vs:w.bg,vsLbl:ServerI18n.t("viewerThemeColorLabelBg")}];t.innerHTML=u.map(p=>{let $=C(w[p.key],p.vs),I=H($),L=A(w[p.key]);return`
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${L}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${p.label}</span>
                <span class="grade ${I.cls}">${I.label} \xB7 ${$.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${L}" data-vt-color="${p.key}" />
                <input type="text" value="${L}" data-vt-hex="${p.key}" spellcheck="false" />
                <span class="vs">vs ${p.vsLbl}</span>
              </div>
            </div>
          </div>`}).join("")}function c(){let t=F.querySelector("[data-vt-logo-preview]"),s=F.querySelector(".hint-empty"),u=F.querySelector("[data-vt-logo-actions]");w.logo?(t.src=w.logo,t.hidden=!1,s.style.display="none",u.hidden=!1):(t.hidden=!0,s.style.display="",u.hidden=!0)}function r(){let t=F.querySelector("[data-vt-font]");t.value=w.font;let s=F.querySelector("[data-vt-font-specimen]");s.style.fontFamily=w.font}function n(){let t=w.mode==="dark"?"#F8FAFC":"#0F172A",s=[{lbl:ServerI18n.t("viewerThemeColorLabelText")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(t,w.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelPrimary")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(w.primary,w.bg)},{lbl:ServerI18n.t("viewerThemeColorLabelHero")+" vs "+ServerI18n.t("viewerThemeColorLabelBg"),ratio:C(w.hero,w.bg)}];F.querySelector("[data-vt-contrast]").innerHTML=s.map(u=>{let p=H(u.ratio);return`<span class="vt-contrast-chip ${p.cls}">${u.lbl} \xB7 ${p.label} ${u.ratio.toFixed(1)}</span>`}).join("")}function d(){let t=F.querySelector("[data-vt-stage]"),s=w.mode==="dark"?"#F8FAFC":"#0F172A";t.style.setProperty("--vt-bg",w.bg),t.style.setProperty("--vt-primary",w.primary),t.style.setProperty("--vt-hero",w.hero),t.style.setProperty("--vt-fg",s),t.style.fontFamily=w.font;let u=F.querySelector("[data-vt-preview-logo]");if(w.logo){let p=document.createElement("img");p.src=w.logo,p.style.maxHeight="40px",u.replaceChildren(p)}else u.textContent="Danmu Fire"}let a="auto",l="auto";function i(){F.querySelectorAll("[data-vt-theme-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtThemeBtn===a)}),F.querySelectorAll("[data-vt-lang-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.vtLangBtn===l)})}async function e(){try{let t=await fetch("/get_settings",{credentials:"same-origin"});if(!t.ok)return;let s=await t.json(),u=s&&s.ViewerThemeMode&&s.ViewerThemeMode[1],p=s&&s.ViewerLangMode&&s.ViewerLangMode[1];typeof u=="string"&&(a=u),typeof p=="string"&&(l=p),i()}catch{}}async function o(t,s){if(window.csrfFetch)try{let u=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,value:s,index:1})});if(!u.ok)throw new Error(u.status);window.showToast&&window.showToast(`${t} = ${s}`,!0)}catch(u){console.warn("[admin-viewer-theme] force-mode update failed:",u),window.showToast&&window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed",{field:t}),!1)}}function h(){B(),N(),v(),c(),r(),n(),d(),i()}F.addEventListener("input",t=>{if(t.target.matches("[data-vt-color]")){let s=t.target.dataset.vtColor;x.test(t.target.value)&&(w[s]=t.target.value,E="custom",P(),h())}else if(t.target.matches("[data-vt-hex]")){let s=t.target.dataset.vtHex;/^#[0-9a-f]{6}$/i.test(t.target.value)&&(w[s]=t.target.value,E="custom",P(),h())}else t.target.matches("[data-vt-font]")&&(w.font=t.target.value,P(),h())}),F.addEventListener("change",t=>{if(t.target.matches("[data-vt-logo-input]")){let s=t.target.files&&t.target.files[0];if(!s)return;if(s.size>500*1024){typeof showToast=="function"&&showToast("Logo \u2264 500 KB",!1);return}let u=new FileReader;u.onload=()=>{w.logo=String(u.result||""),P(),h()},u.readAsDataURL(s)}}),F.addEventListener("click",t=>{let s=t.target.closest("[data-vt-mode-btn]");if(s){w.mode=s.dataset.vtModeBtn,E="custom",P(),h();return}let u=t.target.closest("[data-vt-theme-btn]");if(u){a=u.dataset.vtThemeBtn,i(),o("ViewerThemeMode",a);return}let p=t.target.closest("[data-vt-lang-btn]");if(p){l=p.dataset.vtLangBtn,i(),o("ViewerLangMode",l);return}if(t.target.closest("[data-vt-logo-remove]")){w.logo=null,P(),h();return}let I=t.target.closest("[data-vt-device-btn]");if(I){F.querySelectorAll("[data-vt-device-btn]").forEach(D=>D.classList.toggle("is-active",D===I)),F.querySelector("[data-vt-frame]").dataset.device=I.dataset.vtDeviceBtn;return}let L=t.target.closest("[data-vt-action]");L&&L.dataset.vtAction==="reset"&&(w={...g[0],logo:null},E="default",P(),h())}),h(),e()}document.addEventListener("click",function(F){let w=F.target.closest("[data-vt-jump]");if(!w)return;let E=w.dataset.vtJump;if(E){F.preventDefault();try{location.hash="#/"+E}catch{}}});function M(){let F=document.getElementById("settings-grid");if(!F||document.getElementById(y))return;F.insertAdjacentHTML("beforeend",f());let w=document.getElementById(y);w&&m(w)}document.addEventListener("admin-panel-rendered",M),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var ht=ve(()=>{(function(){"use strict";let y="sec-system-overview";function k(){return`
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
      </div>`}function g(_){let m=Math.floor(_/86400),M=Math.floor(_%86400/3600),F=Math.floor(_%3600/60);return m>0?`${m}d ${String(M).padStart(2,"0")}h ${String(F).padStart(2,"0")}m`:M>0?`${M}h ${String(F).padStart(2,"0")}m`:`${F}m ${String(_%60).padStart(2,"0")}s`}function f(_,m,M){let F=document.querySelector(`[data-m="${_}"]`);if(!F)return;let w=F.querySelector("[data-m-v]");w&&(w.textContent=m);let E=F.querySelector("[data-m-sub]");E&&(E.textContent=M||"")}function x(_){let m=document.querySelector("[data-soh-banner-dot]"),M=document.querySelector("[data-soh-banner-title]"),F=document.querySelector("[data-soh-chip]"),E=!(_.queue_size!=null&&_.queue_capacity!=null&&_.queue_size>=_.queue_capacity);F&&F.classList.toggle("is-warn",!E),m&&m.classList.toggle("is-warn",!E),M&&(M.textContent=E?ServerI18n.t("sohAllHealthy"):ServerI18n.t("sohOneUnhealthy"))}function U(){(async()=>{try{let M=await window.csrfFetch("/admin/metrics");if(!M.ok)return;let F=await M.json(),w=N=>Array.isArray(N)&&N.length?N[N.length-1]:null,E=F.server_started_at?Math.max(0,Math.floor(Date.now()/1e3-F.server_started_at)):0;f("uptime",E>0?g(E):"\u2014","");let P=null;try{let N=await fetch("/admin/audience/stats",{credentials:"same-origin"});N.ok&&(P=(await N.json()).total_live)}catch{}let S=F.ws_clients??0;f("conn",String(S+(P||0)),P==null?ServerI18n.t("sohConnOverlaysOnly",{n:S}):ServerI18n.t("sohConnBreakdown",{overlays:S,viewers:P}));let b=w(F.mem_series||[]),C=F.mem_total_mb?(F.mem_total_mb/1024).toFixed(0):null;f("ram",b!=null?`${Number(b).toFixed(0)}%`:"\u2014",C?ServerI18n.t("sohMemorySub",{total:C}):"");let H=window.DANMU_CONFIG&&window.DANMU_CONFIG.appVersion||"?";f("ver",`v${H}`,ServerI18n.t("sohVersionSub")),x(F);let B=document.querySelector('[data-soh-sub="integrations"]');B&&(B.textContent=ServerI18n.t("sohLinkExtSub",{webhooks:F.webhooks_count??0,plugins:F.plugins_loaded??0}));try{let N=await window.csrfFetch("/admin/ws-auth");if(N.ok){let v=await N.json(),c=document.querySelector('[data-soh-sub="security"]');c&&(c.textContent=v.require_token?ServerI18n.t("sohLinkSecurityOn"):ServerI18n.t("sohLinkSecurityOff"))}}catch{}}catch{}})();let _=document.getElementById(y);if(!_)return;let m=()=>{let M=window.AdminThemeSwitcher&&window.AdminThemeSwitcher.getMode()||"auto";_.querySelectorAll("[data-soh-mode]").forEach(F=>{let w=F.dataset.sohMode===M;F.classList.toggle("is-active",w),F.setAttribute("aria-pressed",w?"true":"false")})};m(),document.addEventListener("admin:theme-mode",m),_.addEventListener("click",function(M){let F=M.target.closest("[data-soh-mode]");if(F){window.AdminThemeSwitcher&&window.AdminThemeSwitcher.setMode(F.dataset.sohMode),m();return}let w=M.target.closest("[data-soh-action]");if(!(!w||w.disabled)){if(w.dataset.sohAction==="copy-url"){let E=document.getElementById("sysoPublicUrl")?.textContent||"";navigator.clipboard?.writeText(E).then(()=>window.showToast&&window.showToast(ServerI18n.t("sohCopied"),!0),()=>window.showToast&&window.showToast(ServerI18n.t("sohCopyFailed"),!1));return}if(w.dataset.sohAction==="show-qr"){let E=_.querySelector("[data-soh-qr]");if(!E)return;if(!E.hidden){E.hidden=!0;return}fetch("/admin/qr/public",{credentials:"same-origin"}).then(P=>P.ok?P.json():Promise.reject(P)).then(P=>{E.innerHTML=P.svg,E.hidden=!1}).catch(()=>window.showToast&&window.showToast(ServerI18n.t("sohQrFailed"),!1))}}})}function A(){let _=document.getElementById("settings-grid");!_||document.getElementById(y)||(_.insertAdjacentHTML("beforeend",k()),document.getElementById(y)&&U())}document.addEventListener("admin-panel-rendered",A),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&A()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),A()})})()});var gt=ve(()=>{(function(){"use strict";let y="sec-polls",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(U){return String(U).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})};function g(){return`
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
  `}function f(){let U=document.getElementById("sec-polls");if(!U)return;let A=U.querySelector("[data-poll-queue]"),_=U.querySelector("[data-poll-editor]"),m=U.querySelector("[data-poll-view-builder]"),M=U.querySelector("[data-poll-view-live]"),F=U.querySelector("[data-poll-view-results]"),w="danmu.adminPollQueue.v2";function E(){return"q_"+Math.random().toString(36).slice(2,8)}function P(){return"o_"+Math.random().toString(36).slice(2,6)}function S(G){return{id:P(),label:""}}function b(){return{id:E(),text:"",timer:90,image_url:"",server_q_id:"",options:[S("A"),S("B")]}}let C=null,H="builder",B=null,N=0,v={showResults:!0,showTotals:!0,anonymous:!1,autoAdvance:!1},c=null,r=[];try{let G=localStorage.getItem(w);if(G){let Z=JSON.parse(G);Array.isArray(Z)?r=Z:Z&&Array.isArray(Z.queue)&&(r=Z.queue)}}catch{}(!Array.isArray(r)||r.length===0)&&(r=[b()]),r.forEach(G=>{typeof G.image_url!="string"&&(G.image_url=""),typeof G.server_q_id!="string"&&(G.server_q_id="")});let n=r[0].id,d="manual",a=null,l=null,i={pollId:"",active:!1,currentIndex:-1,statusTimer:null};function e(){try{localStorage.setItem(w,JSON.stringify({queue:r,activeId:n,mode:d}))}catch{}}function o(G){return r.find(Z=>Z.id===G)}function h(G,Z){let ne=o(G);ne&&Object.assign(ne,Z)}function t(G,Z,ne){let ie=G.slice(),[K]=ie.splice(Z,1);return ie.splice(ne,0,K),ie}function s(){A.innerHTML="",r.forEach((G,Z)=>{let ne=document.createElement("div");ne.className="admin-poll-qrow",G.id===n&&ne.classList.add("is-active");let ie=i.active&&i.currentIndex===Z;ie&&ne.classList.add("is-running"),ne.dataset.qid=G.id,ne.draggable=!0;let K=!!G.image_url;ne.innerHTML=`
            <span class="drag-handle" title="${ServerI18n.t("pollBuilderDragReorderTitle")}">\u22EE\u22EE</span>
            <span class="idx">${Z+1}</span>
            <div class="info">
              <div class="text">${k(G.text||ServerI18n.t("pollBuilderEmptyQuestionPlaceholder"))}</div>
              <div class="meta">${ServerI18n.t("pollBuilderOptionsCount",{n:G.options.length})} \xB7 ${G.timer===0?ServerI18n.t("pollBuilderNoTimeLimit"):G.timer+"s"} \xB7 ${K?ServerI18n.t("pollBuilderHasImage"):ServerI18n.t("pollBuilderPlainText")}</div>
            </div>
            ${ie?'<span class="editing-chip" style="background:rgba(134,239,172,0.12);color: var(--color-ink-success)">\u25CF '+ServerI18n.t("uiLive")+"</span>":G.id===n?`<span class="editing-chip">${ServerI18n.t("pollBuilderEditingChip")}</span>`:""}
          `,A.appendChild(ne)})}function u(){let G=o(n)||r[0];if(!G){_.innerHTML="";return}let Z=r.indexOf(G);_.innerHTML=`
          <div class="admin-poll-edit-head">
            <span class="idx">${Z+1}</span>
            <div class="head-info">
              <span class="title">${ServerI18n.t("pollBuilderEditQuestionTitle",{n:Z+1})}</span>
            </div>
            <span class="progress">Q${Z+1} / ${r.length}</span>
          </div>

          <div class="admin-poll-field-label">${ServerI18n.t("pollQuestion")}</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${k(G.text||"")}" placeholder="${ServerI18n.t("pollBuilderQuestionPlaceholder")}" maxlength="200" />

          <div class="admin-poll-field-label">${ServerI18n.t("pollBuilderFieldQuestionImage")}</div>
          <div class="admin-poll-q-image">
            ${G.image_url?`
              <img class="admin-poll-q-image-thumb" src="${k(G.image_url)}" alt="" />
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
            ${G.options.map((ne,ie)=>`
              <div class="admin-poll-opt" data-oid="${ne.id}" draggable="true">
                <span class="drag-handle">\u22EE\u22EE</span>
                <span class="opt-tag">${String.fromCharCode(65+ie)}</span>
                <!-- 2026-10-29\uFF1A\u9078\u9805\u5716\u7247\u9215\u79FB\u9664\u3002\u5B83\u53EA\u628A opt.img \u8A2D\u6210\u5B57\u4E32
                     "placeholder"\uFF0C\u6C92\u6709\u4E0A\u50B3\u3001\u6C92\u6709\u9001\u51FA\u3001\u5F8C\u7AEF schema \u4E5F\u53EA\u6536
                     options \u5B57\u4E32\u9663\u5217\u2014\u2014\u662F\u4E00\u9846\u770B\u8D77\u4F86\u80FD\u7528\u7684\u5047\u6309\u9215\u3002 -->
                <input type="text" data-ed-opt-text="${ne.id}" value="${k(ne.label||"")}" placeholder="${ServerI18n.t("pollBuilderOptionPlaceholder",{letter:String.fromCharCode(65+ie)})}" maxlength="100" />
                ${G.options.length>2?`<button type="button" class="opt-remove" data-ed-opt-remove="${ne.id}" title="${ServerI18n.t("pollBuilderDeleteTitle")}">${window.AdminUtils.closeIcon}</button>`:""}
              </div>
            `).join("")}
            ${G.options.length<6?`<button type="button" class="admin-poll-opt-add" data-ed-opt-add>${ServerI18n.t("pollBuilderAddOptionBtn",{n:G.options.length})}</button>`:""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>${ServerI18n.t("pollBuilderTimeLimitLabel")}</span>
              <select data-ed-timer>
                <option value="30"${G.timer===30?" selected":""}>30s</option>
                <option value="90"${G.timer===90?" selected":""}>90s</option>
                <option value="180"${G.timer===180?" selected":""}>${ServerI18n.t("pollBuilderTimer3Min")}</option>
                <option value="300"${G.timer===300?" selected":""}>${ServerI18n.t("pollBuilderTimer5Min")}</option>
                <option value="0"${G.timer===0?" selected":""}>${ServerI18n.t("pollBuilderNoTimeLimit")}</option>
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
        `}function p(){C&&C.active?H="live":B?H="results":H="builder",U.dataset.pollView=H,m.hidden=H!=="builder",M.hidden=H!=="live",F.hidden=H!=="results",s(),u(),J(),H==="live"?O():H==="results"&&T(),H==="live"?$():I()}function $(){c||(c=setInterval(()=>{H!=="live"||!C||!C.active||z()},1e3))}function I(){c&&(clearInterval(c),c=null)}function L(G,Z){if(!G||!G.time_limit_seconds)return null;if(!Z)return G.time_limit_seconds;let ne=Date.now()/1e3-Z;return Math.max(0,Math.round(G.time_limit_seconds-ne))}function D(G){if(G==null)return"\u221E";let Z=String(Math.floor(G/60)).padStart(2,"0"),ne=String(G%60).padStart(2,"0");return`${Z}:${ne}`}function O(){if(!C||!C.questions||C.questions.length===0){M.innerHTML="";return}let G=C.current_index>=0?C.current_index:0,Z=C.questions.length,ne=C.questions[G],ie=L(ne,C.started_at),K=ne.time_limit_seconds||0,Q=K>0&&ie!=null?Math.max(0,Math.min(1,ie/K)):1,X=K>0&&ie!=null&&ie<=Math.max(5,K*.15),oe=ne.options.reduce((pe,q)=>pe+(q.count||0),0),me=[...ne.options].sort((pe,q)=>(q.count||0)-(pe.count||0)),fe=me[0]?me[0].count:0,ke=C.questions[G+1],Ie=110,Se=Ie/2-6,re=2*Math.PI*Se,ue=re*Q;M.innerHTML=`
          <div class="admin-polls-live-grid">
            <!-- LEFT \xB7 big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>${ServerI18n.t("uiLive")} \xB7 #${k((C.poll_id||"").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  ${ServerI18n.t("pollBuilderLiveQuestionProgress",{idx:`<strong>${G+1}</strong>`,total:Z})}
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${Ie} ${Ie}" width="56" height="56">
                      <circle cx="${Ie/2}" cy="${Ie/2}" r="${Se}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${Ie/2}" cy="${Ie/2}" r="${Se}" fill="none"
                        stroke="${X?"var(--hud-crimson)":"var(--color-primary)"}" stroke-width="5"
                        stroke-dasharray="${ue} ${re}" stroke-linecap="round"
                        transform="rotate(-90 ${Ie/2} ${Ie/2})"
                        style="filter: drop-shadow(0 0 4px ${X?"var(--hud-crimson)":"var(--color-primary)"})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">${ServerI18n.t("pollBuilderRemainingLabel")}</div>
                    <div class="mmss ${X?"is-low":""}" data-live-mmss>${ie==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(ie)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">${ServerI18n.t("pollQuestionNo",{n:G+1})}</div>
                <div class="text">${k(ne.text||"")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${me.map(pe=>{let q=oe>0?pe.count/oe*100:0,Y=(pe.count||0)>0&&pe.count===fe;return`
                    <div class="admin-polls-live-bar ${Y?"is-leader":""}">
                      <div class="row">
                        <span class="tag">${k(pe.key)}</span>
                        <span class="lbl">${k(pe.text||"")}</span>
                        ${Y?`<span class="lead">${ServerI18n.t("pollBuilderLeadingBadge")}</span>`:""}
                        <span class="pct">${q.toFixed(0)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:pe.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${q.toFixed(1)}%"></div></div>
                    </div>
                  `}).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">${ServerI18n.t("pollBuilderTotalVotesLabel",{total:`<strong data-live-total>${oe}</strong>`})}</span>
                ${ke?`<span class="sep"></span><span class="meta">${ServerI18n.t("pollBuilderNextQuestionLabel",{text:`<em>${k(ke.text||"")}</em>`})}</span>`:""}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${G>=Z-1?"disabled":""}>${ServerI18n.t("pollBuilderLiveAdvanceBtn")}</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">${ServerI18n.t("pollBuilderLiveEndBtn")}</button>
                </div>
              </div>
            </div>

            <!-- RIGHT \xB7 queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderQuestionProgressTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiProgress")} \xB7 ${G+1}/${Z}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${C.questions.map((pe,q)=>{let Y=q<G?"done":q===G?"active":"queued";return`
                      <div class="admin-polls-live-qmini is-${Y}">
                        <span class="idx">${Y==="done"?"\u2713":q+1}</span>
                        <span class="t">${k(pe.text||ServerI18n.t("pollBuilderEmptyShort"))}</span>
                        ${Y==="active"?'<span class="dot"></span>':""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderPushTitle")}</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[{k:"showResults",label:ServerI18n.t("pollBuilderToggleShowResults")},{k:"showTotals",label:ServerI18n.t("pollBuilderToggleShowTotals")},{k:"autoAdvance",label:ServerI18n.t("pollBuilderAutoAdvanceDesc")},{k:"anonymous",label:ServerI18n.t("pollBuilderToggleAnonymous")}].map(pe=>`
                    <label class="admin-polls-live-toggle ${v[pe.k]?"is-on":""}" data-live-toggle="${pe.k}">
                      <span class="lbl">${pe.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `}function z(){if(!C||!C.active)return;let G=C.current_index>=0?C.current_index:0,Z=C.questions[G];if(!Z)return;let ne=L(Z,C.started_at),ie=Z.time_limit_seconds||0,K=M.querySelector("[data-live-mmss]"),Q=M.querySelector("[data-live-ring]");if(K&&(K.textContent=ne==null?ServerI18n.t("pollBuilderNoTimeLimit"):D(ne),K.classList.toggle("is-low",ie>0&&ne!=null&&ne<=Math.max(5,ie*.15))),Q&&ie>0&&ne!=null){let X=+Q.getAttribute("r"),oe=2*Math.PI*X,me=Math.max(0,Math.min(1,ne/ie));Q.setAttribute("stroke-dasharray",`${oe*me} ${oe}`);let fe=ne<=Math.max(5,ie*.15);Q.setAttribute("stroke",fe?"var(--hud-crimson)":"var(--color-primary)"),Q.style.filter=`drop-shadow(0 0 4px ${fe?"var(--hud-crimson)":"var(--color-primary)"})`}v.autoAdvance&&ie>0&&ne===0&&(G>=C.questions.length-1?ae():V())}function T(){let G=B;if(!G||!G.questions||G.questions.length===0){F.innerHTML="";return}let Z=G.questions.length,ne=Math.max(0,Math.min(N,Z-1)),ie=G.questions[ne],K=ie.options.reduce((re,ue)=>re+(ue.count||0),0),Q=[...ie.options].sort((re,ue)=>(ue.count||0)-(re.count||0)),X=Q[0]||{key:"-",text:"\u2014",count:0},oe=Q[1],me=K>0?X.count/K*100:0,fe=oe?Math.max(0,X.count-oe.count):X.count,ke=G.started_at||0,Ie=G.ended_at||Date.now()/1e3,Se=Math.max(0,Math.round(Ie-ke));F.innerHTML=`
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${Z>1?`
                <div class="admin-polls-results-tabs" role="tablist">
                  ${G.questions.map((re,ue)=>`
                    <button type="button" role="tab" class="${ue===ne?"is-active":""}" data-results-tab="${ue}">
                      Q${ue+1}<span class="t">${k((re.text||"").slice(0,24))}</span>
                    </button>
                  `).join("")}
                </div>`:""}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="admin-ui-chip admin-poll-result-state">${ServerI18n.t("pollStateEnded")}</span>
                  <span>Q${ne+1}/${Z} \xB7 ${ServerI18n.t("pollBuilderResultsMetaLine",{dur:D(Se),n:K})}</span>
                </div>
                <div class="text">${k(ie.text||"")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${k(X.key)}</div>
                <div class="info">
                  <div class="lbl">${k(X.text||"\u2014")}</div>
                  <div class="sub">${ServerI18n.t("pollBuilderVoteCount",{n:X.count})} \xB7 ${me.toFixed(1)}% ${oe?ServerI18n.t("pollBuilderLeadOverRunnerUp",{lead:fe}):""}</div>
                </div>
                <div class="pct">${me.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderFullResultsTitle")}</span>
                  <span class="kicker">${ServerI18n.t("uiResults")} \xB7 ${ServerI18n.t("pollBuilderVoteCount",{n:K})}</span>
                </div>
                ${Q.map((re,ue)=>{let pe=K>0?re.count/K*100:0;return`
                    <div class="admin-polls-results-bar ${ue===0&&re.count>0?"is-winner":""}">
                      <div class="row">
                        <span class="rank">#${ue+1}</span>
                        <span class="tag">${k(re.key)}</span>
                        <span class="lbl">${k(re.text||"")}</span>
                        <span class="pct">${pe.toFixed(1)}%</span>
                        <span class="cnt">${ServerI18n.t("pollBuilderVoteCount",{n:re.count})}</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${pe.toFixed(1)}%"></div></div>
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
                  <span class="big">${K}</span>
                  <span class="unit">${ServerI18n.t("pollBuilderVotesThisQuestion")}</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100,K?100:0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>${ServerI18n.t("pollBuilderOptionsCountLabel",{n:ie.options.length})}</span>
                  <span>${ServerI18n.t("pollBuilderTimeLimitLabel")} ${ie.time_limit_seconds?D(ie.time_limit_seconds):ServerI18n.t("pollBuilderNone")}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">${ServerI18n.t("pollBuilderTimelineTitle")}</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderStartedLabel")}</span><span class="v">${G.started_at?new Date(G.started_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderEndedLabel")}</span><span class="v">${G.ended_at?new Date(G.ended_at*1e3).toLocaleTimeString():"\u2014"}</span></div>
                  <div class="row"><span class="k">${ServerI18n.t("pollBuilderDurationLabel")}</span><span class="v">${D(Se)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){let re=Math.max(1,...Q.map(ue=>ue.count));return Q.map(ue=>`<div class="bar" style="height:${Math.max(6,ue.count/re*100)}%"></div>`).join("")})()}
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
        `}function R(G){let Z=[["question_index","question","option_key","option_text","count","percentage"]];return G.questions.forEach((ne,ie)=>{let K=ne.options.reduce((Q,X)=>Q+(X.count||0),0);ne.options.forEach(Q=>{let X=K>0?(Q.count/K*100).toFixed(1):"0";Z.push([ie+1,ne.text,Q.key,Q.text,Q.count,X])})}),Z.map(ne=>ne.map(ie=>{let K=String(ie??"");return/[",\n]/.test(K)?`"${K.replace(/"/g,'""')}"`:K}).join(",")).join(`
`)}function j(G,Z,ne){let ie=new Blob([ne],{type:Z}),K=document.createElement("a");K.href=URL.createObjectURL(ie),K.download=G,document.body.appendChild(K),K.click(),setTimeout(()=>{URL.revokeObjectURL(K.href),K.remove()},0)}U.addEventListener("click",G=>{let Z=G.target.closest("[data-live-action]");if(Z){let Q=Z.dataset.liveAction;Q==="advance"?V():Q==="end"?ae():Q==="pause"&&(v.autoAdvance=!1,O());return}let ne=G.target.closest("[data-live-toggle]");if(ne){let Q=ne.dataset.liveToggle;Q in v&&(v[Q]=!v[Q],ne.classList.toggle("is-on",v[Q]));return}let ie=G.target.closest("[data-results-tab]");if(ie){N=+ie.dataset.resultsTab||0,T();return}let K=G.target.closest("[data-results-action]");if(K){let Q=K.dataset.resultsAction,X=B;if(!X)return;if(Q==="copy"){let oe=X.questions.map((me,fe)=>{let ke=me.options.reduce((Se,re)=>Se+(re.count||0),0),Ie=me.options.map(Se=>{let re=ke>0?(Se.count/ke*100).toFixed(1):"0.0";return`  ${Se.key}. ${Se.text} \u2014 ${ServerI18n.t("pollBuilderVoteCount",{n:Se.count})} (${re}%)`});return`Q${fe+1}: ${me.text}
${Ie.join(`
`)}`}).join(`

`);(navigator.clipboard?.writeText(oe)||Promise.resolve()).then(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastResultsCopied"),!0)).catch(()=>showToast&&showToast(ServerI18n.t("pollBuilderToastCopyFailed"),!1))}else Q==="csv"?j(`poll_${(X.poll_id||"results").slice(-8)}.csv`,"text/csv;charset=utf-8",R(X)):Q==="json"?j(`poll_${(X.poll_id||"results").slice(-8)}.json`,"application/json",JSON.stringify(X,null,2)):Q==="reset"&&(B=null,N=0,p());return}}),A.addEventListener("dragstart",G=>{let Z=G.target.closest(".admin-poll-qrow");Z&&(a=Z.dataset.qid,Z.classList.add("is-dragging"))}),A.addEventListener("dragend",G=>{let Z=G.target.closest(".admin-poll-qrow");Z&&Z.classList.remove("is-dragging"),a=null,A.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over"))}),A.addEventListener("dragover",G=>{G.preventDefault();let Z=G.target.closest(".admin-poll-qrow");!Z||!a||Z.dataset.qid===a||(A.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),A.addEventListener("drop",G=>{G.preventDefault();let Z=G.target.closest(".admin-poll-qrow");if(!Z||!a)return;let ne=r.findIndex(K=>K.id===a),ie=r.findIndex(K=>K.id===Z.dataset.qid);ne<0||ie<0||ne===ie||(r=t(r,ne,ie),e(),p())}),A.addEventListener("click",G=>{let Z=G.target.closest(".admin-poll-qrow");Z&&(n=Z.dataset.qid,e(),p())}),_.addEventListener("input",G=>{let Z=o(n);if(Z){if(G.target.matches("[data-ed-text]")){Z.text=G.target.value,e(),s();return}if(G.target.matches("[data-ed-opt-text]")){let ne=G.target.dataset.edOptText,ie=Z.options.find(K=>K.id===ne);ie&&(ie.label=G.target.value,e(),s())}}}),_.addEventListener("change",G=>{let Z=o(n);Z&&G.target.matches("[data-ed-timer]")&&(Z.timer=+G.target.value,e(),s())}),_.addEventListener("click",async G=>{let Z=o(n);if(!Z)return;let ne=G.target.closest("[data-ed-opt-remove]");if(ne){let K=ne.dataset.edOptRemove;Z.options.length>2&&(Z.options=Z.options.filter(Q=>Q.id!==K),e(),u(),s());return}if(G.target.closest("[data-ed-opt-add]")){Z.options.length<6&&(Z.options.push(S()),e(),u(),s());return}let ie=G.target.closest("[data-ed-action]");if(ie)if(ie.dataset.edAction==="remove-q"){if(r.length>1&&await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("pollBuilderRemoveQConfirmTitle"),subtitle:ServerI18n.t("cfmSubRemoveQuestion"),severity:"warn",body:ServerI18n.t("pollBuilderRemoveQConfirmBody"),confirmLabel:ServerI18n.t("pollBuilderRemoveQConfirmTitle")})){let Q=r.findIndex(X=>X.id===n);r=r.filter(X=>X.id!==n),n=r[Math.min(Q,r.length-1)].id,e(),p()}}else if(ie.dataset.edAction==="upload-q-image"){let K=_.querySelector("[data-ed-q-image-input]");K&&K.click()}else ie.dataset.edAction==="remove-q-image"&&(Z.image_url="",e(),u(),s())}),_.addEventListener("change",async G=>{if(!G.target.matches("[data-ed-q-image-input]"))return;let Z=G.target.files&&G.target.files[0];if(!Z)return;let ne=o(n);if(!ne)return;if(!i.pollId){showToast&&showToast(ServerI18n.t("pollBuilderToastNeedSession"),!1),G.target.value="";return}if(!ne.server_q_id){showToast&&showToast(ServerI18n.t("pollBuilderToastNotSynced"),!1),G.target.value="";return}if(Z.size>2*1024*1024){showToast&&showToast(ServerI18n.t("pollBuilderToastImageTooLarge"),!1),G.target.value="";return}let ie=new FormData;ie.append("file",Z);try{let K=await csrfFetch(`/admin/poll/${encodeURIComponent(i.pollId)}/upload-image/${encodeURIComponent(ne.server_q_id)}`,{method:"POST",body:ie}),Q=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Q.error||"upload failed");ne.image_url=Q.image_url,e(),u(),s(),showToast&&showToast(ServerI18n.t("pollBuilderToastImageUploaded"),!0)}catch(K){showToast&&showToast(String(K.message||K),!1)}finally{G.target.value=""}}),_.addEventListener("dragstart",G=>{let Z=G.target.closest(".admin-poll-opt");Z&&(l=Z.dataset.oid,Z.classList.add("is-dragging"))}),_.addEventListener("dragend",G=>{_.querySelectorAll(".is-dragging, .is-drag-over").forEach(Z=>Z.classList.remove("is-dragging","is-drag-over")),l=null}),_.addEventListener("dragover",G=>{let Z=G.target.closest(".admin-poll-opt");!Z||!l||Z.dataset.oid===l||(G.preventDefault(),_.querySelectorAll(".is-drag-over").forEach(ne=>ne.classList.remove("is-drag-over")),Z.classList.add("is-drag-over"))}),_.addEventListener("drop",G=>{G.preventDefault();let Z=G.target.closest(".admin-poll-opt"),ne=o(n);if(!Z||!l||!ne)return;let ie=ne.options.findIndex(Q=>Q.id===l),K=ne.options.findIndex(Q=>Q.id===Z.dataset.oid);ie<0||K<0||ie===K||(ne.options=t(ne.options,ie,K),e(),u())}),U.addEventListener("click",G=>{if(G.target.closest("[data-poll-action='add']")){let Q=b();r.push(Q),n=Q.id,e(),p();return}let ne=G.target.closest("[data-poll-template]");if(ne){let Q=b(),X=ne.dataset.pollTemplate,oe=["A","B","C","D","E"],me=fe=>fe.map((ke,Ie)=>{let Se=S(oe[Ie]);return Se.text=ke,Se});X==="yesno"?(Q.text="",Q.options=me([ServerI18n.t("pollTemplateYes"),ServerI18n.t("pollTemplateNo")])):X==="stars"?(Q.timer=60,Q.options=me(["1","2","3","4","5"])):X==="four"&&(Q.options=me(["","","",""])),r.push(Q),n=Q.id,e(),p();return}let ie=G.target.closest("[data-poll-mode]");ie&&(d=ie.dataset.pollMode,U.querySelectorAll("[data-poll-mode]").forEach(Q=>Q.classList.toggle("is-active",Q===ie)),e());let K=G.target.closest("[data-poll-session-action]");if(K){let Q=K.dataset.pollSessionAction;Q==="start"?W():Q==="advance"?V():Q==="end"&&ae()}});function J(){let G=U.querySelector("[data-poll-session]");if(!G)return;let Z=G.querySelector("[data-poll-session-status]"),ne=G.querySelector("[data-poll-session-action='start']"),ie=G.querySelector("[data-poll-session-action='advance']"),K=G.querySelector("[data-poll-session-action='end']");if(!i.pollId||!i.active){Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollBuilderSessionNotStarted")}</span>`,ne.hidden=!1,ie.hidden=!0,K.hidden=!0;return}let Q=r.length,X=i.currentIndex+1,oe=i.currentIndex>=Q-1;Z.innerHTML=`<span class="kicker">${ServerI18n.t("pollSessionActive")}</span><span class="progress">${X} / ${Q}</span>`,ne.hidden=!0,ie.hidden=oe,K.hidden=!1}async function W(){try{let G=r.map((X,oe)=>{let me=(X.text||"").trim(),fe=X.options.map(ke=>(ke.label||"").trim()).filter(Boolean);if(!me)throw new Error(ServerI18n.t("pollBuilderErrMissingText",{n:oe+1}));if(fe.length<2)throw new Error(ServerI18n.t("pollBuilderErrNotEnoughOptions",{n:oe+1}));return{text:me,options:fe,time_limit_seconds:X.timer&&X.timer>0?X.timer:null}});if(!G.length)throw new Error(ServerI18n.t("pollBuilderErrNoQuestions"));let Z=(()=>{let X=r.map(oe=>Number(oe.timer)||0).filter(oe=>oe>0);return X.length?Math.round(X.reduce((oe,me)=>oe+me,0)/X.length):null})(),ne=await csrfFetch("/admin/poll/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:G,mode:d||"manual",default_duration_s:Z})}),ie=await ne.json().catch(()=>({}));if(!ne.ok)throw new Error(ie.error||ServerI18n.t("pollBuilderErrCreateFailed"));i.pollId=ie.poll_id,(ie.questions||[]).forEach((X,oe)=>{r[oe]&&(r[oe].server_q_id=X.id)}),e();let K=await csrfFetch("/admin/poll/start",{method:"POST"}),Q=await K.json().catch(()=>({}));if(!K.ok)throw new Error(Q.error||ServerI18n.t("pollBuilderErrStartFailed"));i.active=!0,i.currentIndex=Q.current_index??0,C=Q,B=null,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionStarted"),!0),se()}catch(G){showToast&&showToast(String(G.message||G),!1)}}async function V(){try{let G=await csrfFetch("/admin/poll/advance",{method:"POST"}),Z=await G.json().catch(()=>({}));if(!G.ok)throw new Error(Z.error||ServerI18n.t("pollBuilderErrAdvanceFailed"));i.currentIndex=Z.current_index,i.active=!!Z.active,C=Z,p(),showToast&&showToast(ServerI18n.t("pollBuilderToastAdvanced",{n:i.currentIndex+1}),!0)}catch(G){showToast&&showToast(String(G.message||G),!1)}}async function ae(){try{let G=C,Z=await csrfFetch("/admin/poll/end",{method:"POST"});if(!Z.ok){let ne=await Z.json().catch(()=>({}));throw new Error(ne.error||ServerI18n.t("pollBuilderErrEndFailed"))}G&&G.questions&&(B={...G,ended_at:Date.now()/1e3},N=G.current_index>=0?G.current_index:0),i.active=!1,i.pollId="",i.currentIndex=-1,C=null,i.statusTimer&&(clearInterval(i.statusTimer),i.statusTimer=null),p(),showToast&&showToast(ServerI18n.t("pollBuilderToastSessionEnded"),!0)}catch(G){showToast&&showToast(String(G.message||G),!1)}}function se(){i.statusTimer&&clearInterval(i.statusTimer),i.statusTimer=setInterval(async()=>{if(i.pollId)try{let G=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!G.ok)return;let Z=await G.json();if(Z.poll_id!==i.pollId)return;i.active=!!Z.active,i.currentIndex=Z.current_index??-1;let ne=!!(C&&C.active);C=Z,Z.active||(clearInterval(i.statusTimer),i.statusTimer=null,ne&&Z.questions&&!B&&(B={...Z,ended_at:Date.now()/1e3},N=Z.current_index>=0?Z.current_index:0),C=null),H==="live"?O():p()}catch{}},2e3)}window.addEventListener("beforeunload",()=>{i.statusTimer&&(clearInterval(i.statusTimer),i.statusTimer=null),I()}),p()}function x(){let U=document.getElementById("settings-grid");!U||document.getElementById(y)||(U.insertAdjacentHTML("beforeend",g()),document.getElementById(y)&&f())}document.addEventListener("admin-panel-rendered",x),document.addEventListener("DOMContentLoaded",function(){new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&x()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),x()})})()});var yt=ve(()=>{(function(){"use strict";let f="sec-live-feed",x=[],U=[],A=!1,_="",m="all",M=0,F=0,w=null,E=null,P=null;function S(K){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(K):String(K??"").replace(/[&<>"']/g,function(Q){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[Q]})}function b(K,Q){return K?K.length>Q?K.slice(0,Q)+"\u2026":K:""}function C(K){let Q=new Date(K),X=oe=>String(oe).padStart(2,"0");return`${X(Q.getHours())}:${X(Q.getMinutes())}:${X(Q.getSeconds())}`}function H(K){if(!_)return!0;let Q=_.toLowerCase(),X=K.data;return X.text&&X.text.toLowerCase().includes(Q)||X.nickname&&X.nickname.toLowerCase().includes(Q)||X.fingerprint&&X.fingerprint.toLowerCase().includes(Q)||X.layout&&X.layout.toLowerCase().includes(Q)}function B(K){return m==="muted"?!!K.muted:m==="sensitive"?!!K.sensitive:m==="queued"?K.data&&K.data.status==="queued":!0}function N(){m="all",document.querySelectorAll(".admin-live-feed-tab").forEach(K=>K.classList.toggle("is-active",K.dataset.tab==="all"))}function v(){_="",P&&(P.value=""),N()}function c(K,Q){if(window.AdminEmpty&&typeof window.AdminEmpty.renderCustom=="function"){let oe;return K==="paused"?oe=window.AdminEmpty.renderCustom({icon:"\u23F8",title:ServerI18n.t("lfPausedTitle"),desc:Q||ServerI18n.t("lfPausedDesc"),accent:"var(--color-ink-warning)"}):K==="no-result"?oe=window.AdminEmpty.renderCustom({icon:"\u25CB",title:ServerI18n.t("lfNoMatchTitle"),desc:Q||ServerI18n.t("lfNoMatchDesc")}):oe=window.AdminEmpty.render("messages"),oe.classList.add("admin-proto-placeholder-box","admin-live-feed-empty-placeholder"),oe.setAttribute("data-empty-kind","live-feed"),oe}let X=document.createElement("div");return X.className="admin-proto-placeholder-box admin-live-feed-empty-placeholder",X.setAttribute("data-empty-kind","live-feed"),X.innerHTML=`<div class="admin-proto-placeholder-title">${S(K)}</div><div class="admin-proto-placeholder-body">${S(Q||"")}</div>`,X}function r(K){let Q=K.data,X=document.createElement("div");X.className="admin-live-feed-row"+(K.muted?" is-muted":""),X.dataset.id=K.id,X.tabIndex=-1;let oe=document.createElement("span");if(oe.className="admin-live-feed-time",oe.textContent=C(K.ts),X.appendChild(oe),(Q.layout||"scroll").toLowerCase()!=="scroll"){let re=document.createElement("span");re.className="admin-ui-chip admin-live-feed-tag",re.textContent=Q.layout,X.appendChild(re)}let fe=document.createElement("span");fe.className="admin-live-feed-text",fe.textContent=b(Q.text||"",80),fe.title=Q.text||"",X.appendChild(fe);let ke=document.createElement("span");ke.className="admin-live-feed-identity",window.AdminIdentity&&ke.appendChild(AdminIdentity.render({nickname:Q.nickname||"",fp:"",onNicknameClick:function(re){!re||!P||(P.value=re,P.dispatchEvent(new Event("input",{bubbles:!0})),P.focus())}})),X.appendChild(ke);let Ie=document.createElement("span");if(Ie.className="admin-live-feed-actions is-hover-reveal",Q.message_id){let re=document.createElement("button");re.type="button",re.className="admin-ui-chip admin-live-feed-action",re.textContent=ServerI18n.t("lfRecallBtn"),re.title=ServerI18n.t("lfRecallTitle"),re.addEventListener("click",ue=>{ue.stopPropagation(),d(K)}),Ie.appendChild(re)}let Se=document.createElement("button");if(Se.type="button",Se.className="admin-ui-chip is-danger admin-live-feed-action",Se.textContent=ServerI18n.t("blockKeywordBtn"),Se.title=ServerI18n.t("blockKeywordTitle"),Se.addEventListener("click",re=>{re.stopPropagation(),a("keyword",Q.text,K.id)}),Ie.appendChild(Se),Q.fingerprint){let re=document.createElement("button");re.type="button",re.className="admin-ui-chip is-warn admin-live-feed-action",re.textContent=ServerI18n.t("blockFpBtn"),re.title=ServerI18n.t("blockFpTitle").replace("{fp}",Q.fingerprint),re.addEventListener("click",ue=>{ue.stopPropagation(),a("fingerprint",Q.fingerprint,K.id)}),Ie.appendChild(re)}return X.appendChild(Ie),X.classList.add("is-clickable"),X.addEventListener("click",re=>{re.target.closest(".admin-live-feed-actions")||n(K)}),X.addEventListener("keydown",re=>{re.key!=="Enter"||re.target.closest("button")||(re.preventDefault(),n(K))}),X}function n(K){window.AdminMessageDrawer&&typeof window.AdminMessageDrawer.open=="function"&&window.AdminMessageDrawer.open(K)}async function d(K){let Q=K&&K.data&&K.data.message_id;if(!Q)return;let X=await window.AdminModeration.recall(Q);if(!X.ok){console.error("[LiveFeed] Recall failed:",X.error),showToast(ServerI18n.t("lfRecallFailed"),!1);return}K.recalled=!0;let oe=l(K.id);oe&&oe.classList.add("is-recalled"),showToast(ServerI18n.t("lfRecallDone"))}async function a(K,Q,X){if(!(!Q||!await(K==="keyword"?window.AdminModeration.blockKeyword:window.AdminModeration.blockFingerprint).call(window.AdminModeration,Q))){if(X){let fe=x.find(ke=>ke.id===X);fe&&(fe.muted=!0)}else x.forEach(fe=>{K==="keyword"&&fe.data.text===Q&&(fe.muted=!0),K==="fingerprint"&&fe.data.fingerprint===Q&&(fe.muted=!0)});o()}}function l(K){if(!w||!K)return null;let Q=w.children;for(let X=0;X<Q.length;X++)if(Q[X].dataset&&Q[X].dataset.id===K)return Q[X];return null}function i(){let K=document.activeElement,Q=K&&K.closest?K.closest(".admin-live-feed-row"):null;return Q?Q.dataset.id:null}function e(K){if(!K)return;let Q=l(K);Q&&document.activeElement!==Q&&Q.focus({preventScroll:!0})}function o(){if(!w)return;let K=i(),Q=document.createDocumentFragment(),X=x.filter(oe=>H(oe)&&B(oe));for(let oe=X.length-1;oe>=0;oe--)Q.appendChild(r(X[oe]));if(w.textContent="",Q.childNodes.length===0){let oe=A?c("paused"):x.length===0?c("empty"):c("no-result");w.appendChild(oe)}else w.appendChild(Q);s(),e(K)}function h(K){if(!w||!H(K)||!B(K))return null;let Q=w.querySelector("[data-empty-kind='live-feed']");Q&&Q.remove();let X=w.scrollTop<=8,oe=r(K);if(X)w.insertBefore(oe,w.firstChild);else{let me=w.scrollHeight;w.insertBefore(oe,w.firstChild),w.scrollTop+=w.scrollHeight-me,F+=1}return oe}function t(){let K=x.length-200;if(K<=0)return;x.splice(0,K).forEach(X=>{let oe=l(X.id);oe&&oe.remove()})}function s(){I(),L(),p()}function u(K){let Q={ts:Date.now(),data:K,id:K&&K.message_id?"m"+K.message_id:"e"+ ++M};if(K&&K.status==="blocked"&&(Q.muted=!0),K&&(K.sensitive||K.flagged)&&(Q.sensitive=!0),A){U.push(Q),L(),p();return}x.push(Q),h(Q),t(),s()}function p(){let K=document.querySelector("[data-lf-jump]"),Q=document.querySelector("[data-lf-jump-n]");if(!K||!Q)return;let X=U.length,oe=X>0?X:F;oe>0?(K.hidden=!1,Q.textContent=String(oe)):K.hidden=!0}function $(){A&&D(),F=0,w&&(w.scrollTop=0),p()}function I(){let K=document.querySelector("[data-lf-state]");K&&(K.className=A?"ui-status is-warning":"ui-status is-success",K.textContent=A?ServerI18n.t("lfAutoScrollPaused"):ServerI18n.t("lfAutoScrollOn"))}function L(){let K=document.getElementById(f)||document,Q=(X,oe)=>{let me=K.querySelector(X);me&&(me.textContent=String(oe))};Q("[data-cnt-all]",x.length),Q("[data-cnt-sens]",x.filter(X=>X.sensitive).length),Q("[data-cnt-mut]",x.filter(X=>X.muted).length),Q("[data-cnt-q]",x.filter(X=>X.data&&X.data.status==="queued").length)}function D(){if(A=!A,w&&w.setAttribute("aria-live",A?"off":"polite"),E&&(E.textContent=A?ServerI18n.t("resumeBtn"):ServerI18n.t("pauseBtn"),E.classList.toggle("is-primary",A),E.classList.toggle("is-ghost",!A)),A)L(),p();else{for(let K of U)x.push(K);U=[],x.length>200&&x.splice(0,x.length-200),F=0,o()}}function O(){let K=document.getElementById("settings-grid");if(!K)return!1;let Q=`
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
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="sensitive" role="tab">
                ${ServerI18n.t("lfChipSensitive")} <span class="admin-lf-v4__count" data-cnt-sens>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="muted" role="tab">
                ${ServerI18n.t("lfChipBlocked")} <span class="admin-lf-v4__count" data-cnt-mut>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="queued" role="tab">
                ${ServerI18n.t("lfChipPending")} <span class="admin-lf-v4__count" data-cnt-q>0</span>
              </button>
            </div>
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
      </div>`;return K.insertAdjacentHTML("beforeend",Q),!0}let z=!1,T=null,R=0,j=1500;async function J(){try{let K=await fetch("/admin/live-feed/recent?since="+encodeURIComponent(R),{credentials:"same-origin"});if(!K.ok)return;let Q=await K.json();if(Array.isArray(Q.entries))for(let X of Q.entries)X&&X.data&&u(X.data);typeof Q.next_since=="number"&&(R=Q.next_since)}catch{}}function W(){z||(z=!0,J(),T=setInterval(J,j),window.addEventListener("beforeunload",()=>{T&&(clearInterval(T),T=null)}))}function V(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let K=new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(f)&&O()&&(ae(),K.disconnect())});K.observe(document.body,{childList:!0,subtree:!0}),O()&&(ae(),K.disconnect())}function ae(){w=document.getElementById("liveFeedList"),E=document.getElementById("liveFeedPauseBtn"),P=document.getElementById("liveFeedSearch");let K=document.getElementById("liveFeedClearBtn"),Q=document.querySelectorAll(".admin-live-feed-tab");E&&E.addEventListener("click",D),K&&K.addEventListener("click",()=>{x=[],U=[],F=0,o()});let X=document.querySelector("[data-lf-jump-btn]");if(X&&X.addEventListener("click",$),w&&w.addEventListener("scroll",()=>{w.scrollTop<=8&&F>0&&(F=0,p())},{passive:!0}),Q.forEach(oe=>{oe.addEventListener("click",()=>{Q.forEach(me=>me.classList.remove("is-active")),oe.classList.add("is-active"),m=oe.dataset.tab||"all",o()})}),P){let oe=null;P.addEventListener("input",()=>{clearTimeout(oe),oe=setTimeout(()=>{_=P.value.trim(),o()},200)})}W()}function se(K){if(!("ontouchstart"in window))return;let Q=0,X=0,oe=0,me=null,fe=null,ke=!1;function Ie(Se){if(Se.querySelector(".admin-live-feed-row__swipe-actions"))return;let re=Se.dataset.id,ue=x.find(Y=>Y.id===re),pe=!!(ue&&ue.data&&ue.data.message_id),q=document.createElement("div");q.className="admin-live-feed-row__swipe-actions",q.innerHTML=`
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${pe?"":"disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">\u25CC</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">\u2298</span>${ServerI18n.t("lfSwipeBan")}
        </button>`,q.addEventListener("click",function(Y){let ee=Y.target.closest("[data-swipe-act]");if(!ee||ee.disabled)return;let te=Se.dataset.id,de=x.find(ce=>ce.id===te);if(!de||!de.data)return;let le=ee.dataset.swipeAct;le==="ban"?de.data.fingerprint&&a("fingerprint",de.data.fingerprint,te):le==="recall"&&d(de),Se.classList.remove("is-swiped")}),Se.appendChild(q)}K.addEventListener("touchstart",function(Se){let re=Se.target.closest(".admin-live-feed-row");re&&(Se.target.closest(".admin-live-feed-row__swipe-actions")||(me=re,ke=!1,Q=Se.touches[0].clientX,X=Se.touches[0].clientY,oe=0))},{passive:!0}),K.addEventListener("touchmove",function(Se){if(!me||ke)return;let re=Se.touches[0],ue=re.clientX-Q,pe=re.clientY-X;if(Math.abs(pe)>Math.abs(ue)&&Math.abs(pe)>12){ke=!0;return}if(oe=ue,ue<-10){Ie(me),fe=me,me.classList.add("is-swiping");let q=Math.max(-180,ue);me.style.transform=`translateX(${q}px)`}else ue>10&&me.classList.contains("is-swiped")&&(me.style.transform="")},{passive:!0}),K.addEventListener("touchend",function(){me&&(me.classList.remove("is-swiping"),me.style.transform="",oe<=-60?me.classList.add("is-swiped"):me.classList.remove("is-swiped"),me=null,fe=null,oe=0)},{passive:!0})}function G(){return w?Array.from(w.querySelectorAll(".admin-live-feed-row")):[]}function Z(){let K=G(),Q=document.activeElement;for(let X of K)if(X===Q||X.contains(Q))return X;return null}function ne(K){let Q=G();if(!Q.length)return!1;let X=Z(),oe=X?Q.indexOf(X)+K:K>0?0:Q.length-1;return oe=Math.max(0,Math.min(Q.length-1,oe)),Q[oe].focus(),Q[oe].scrollIntoView({block:"nearest"}),!0}function ie(K){let Q=Z();if(!Q)return!1;let X=x.find(me=>me.id===Q.dataset.id);if(!X)return!1;let oe=K==="keyword"?X.data.text:X.data.fingerprint;return oe?(a(K,oe,X.id),!0):!1}window.AdminLiveFeed={getEntries:function(){return x.slice()},isVisible:function(){return!!(w&&w.offsetParent!==null)},isPaused:function(){return A},moveFocus:ne,blockFocused:ie,togglePause:function(){D()}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V()})()});var bt=ve(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;function f(o,h=!1){var t=y();return t[o]!==void 0?t[o]:h}function x(o){var h=y();h[o.id]=o.open,k(h)}let U=!1;new MutationObserver(()=>{let o=document.getElementById("settings-grid");if(o&&!(document.getElementById("sec-plugins")||U)){U=!0;try{_(o)}finally{U=!1}}}).observe(document.getElementById("app-container"),{childList:!0,subtree:!0});function _(o){let h=`
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
      `;o.insertAdjacentHTML("beforeend",h);let t=document.querySelector("[data-console-filters]");t&&t.addEventListener("click",s=>{let u=s.target.closest("[data-console-filter]");u&&(t.querySelectorAll("[data-console-filter]").forEach(p=>p.classList.toggle("is-active",p===u)),F=u.dataset.consoleFilter,b())}),document.getElementById("pluginsReloadBtn").addEventListener("click",e),B(),H()}let m=0,M=0,F="all",w=[],E=80;function P(o){let h=(o||"INFO").toUpperCase();return h==="ERROR"?"is-error":h==="WARN"?"is-warn":h==="DEBUG"?"is-debug":"is-info"}function S(o){let h=new Date(o*1e3),t=s=>String(s).padStart(2,"0");return`${t(h.getHours())}:${t(h.getMinutes())}:${t(h.getSeconds())}`}function b(){let o=document.getElementById("pluginsConsoleBody");if(!o)return;let h=F==="all"?w:w.filter(t=>(t.level||"INFO").toUpperCase()===F);if(h.length===0){let t=F==="all"?"Console stream becomes live when plugins emit stdout/stderr.":`No ${F} lines yet \xB7 waiting\u2026`;o.innerHTML=`
          <div class="admin-plugins-console-line">
            <span class="ts">\u2014</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${t}</span>
          </div>`;return}o.innerHTML=h.map(t=>{let s=S(t.ts),u=(t.msg||"").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),p=(t.plugin||"\u2014").replace(/[<>&"]/g,I=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[I]),$=(t.level||"INFO").toUpperCase();return`<div class="admin-plugins-console-line">
          <span class="ts">${s}</span>
          <span class="lv ${P(t.level)}">${$}</span>
          <span class="plg">${p}</span>
          <span class="msg">${u}</span>
        </div>`}).join("")}async function C(){try{let o=await fetch(`/admin/plugins/console?since=${m}`,{credentials:"same-origin"});if(!o.ok)return;let h=await o.json();if(!Array.isArray(h.events)||h.events.length===0)return;for(w.unshift(...h.events);w.length>E;)w.pop();m=h.latest_seq||m,b()}catch{}}function H(){M||(M=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById("sec-plugins")},intervalMs:5e3,tick:C}))}async function B(){let o=document.getElementById("pluginsList");if(o)try{let h=await csrfFetch("/admin/plugins/list");if(!h.ok)throw new Error(`HTTP ${h.status}`);let s=(await h.json()).plugins||[];if(s.length===0){o.innerHTML='<div class="admin-plugins-row admin-plugins-empty"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("noPluginsFound")+"</span></div>",N([]);return}o.innerHTML=s.map(v).join(""),l(o),N(s)}catch(h){console.error("Failed to load plugins:",h),o.innerHTML='<div class="admin-plugins-row admin-plugins-empty is-error"><span></span><span class="admin-plugins-loading">'+ServerI18n.t("loadPluginsFailed")+"</span></div>"}}function N(o){let h=o.length,t=o.filter(I=>I.enabled).length,s=h-t,u=o.map(I=>I.priority).filter(I=>typeof I=="number"),p=u.length?Math.round(u.reduce((I,L)=>I+L,0)/u.length):null,$=(I,L)=>{document.querySelectorAll(`[data-plugins-stat="${I}"]`).forEach(D=>{D.textContent=L})};$("loaded",h),$("running",t),$("paused",s),$("priority",p??"\u2014"),document.querySelectorAll("[data-plugins-count]").forEach(I=>{I.textContent=h})}function v(o){let{name:h,version:t,description:s,priority:u,enabled:p,is_user:$,file:I}=o,L=`plugin-toggle-${h}`,D=n(u),O=a(u),z=r(o),T=$&&I?`<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${g(I)}"
            data-plugin-name="${g(h)}"
            title="${ServerI18n.t("pluginsRemoveTitleAttr")}"
            aria-label="Uninstall plugin ${g(h)}">\u2298</button>`:"";return`
        <div class="admin-plugins-row" data-plugin="${g(h)}">
          <span class="admin-plugins-dot ${p?"is-running":"is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${g(h)}</div>
            ${s?`<div class="desc">${g(s)}</div>`:""}
          </div>
          <span class="admin-plugins-ver">${t?"v"+g(t):"\u2014"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${D}">${u??"\u2014"}${O?" \xB7 "+O:""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${d(z)}">${z}</span>
          <div class="admin-plugins-toggle-cell">
            ${T}
            <label class="admin-plugins-switch" for="${L}">
              <input type="checkbox" id="${L}" role="switch"
                aria-checked="${!!p}" aria-label="Toggle plugin ${g(h)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${g(h)}"
                ${p?"checked":""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `}async function c(o,h){if(await window.HudConfirm?.open({icon:"\u2298",titleText:ServerI18n.t("pluginsRemoveModalTitle",{name:o}),subtitle:ServerI18n.t("cfmSubUninstallPlugin"),severity:"danger",bodyText:ServerI18n.t("pluginsRemoveBody",{filename:h}),confirmLabel:ServerI18n.t("pluginsRemoveConfirm")}))try{let s=await csrfFetch("/admin/plugins/uninstall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:h})}),u=await s.json().catch(()=>({}));if(!s.ok){showToast(u.error||ServerI18n.t("pluginsToastRemoveFailed",{status:s.status}),!1);return}showToast(ServerI18n.t("pluginsToastRemoved",{name:o}),!0),await B()}catch(s){showToast(ServerI18n.t("pluginsToastNetError",{msg:s.message||""}),!1)}}function r(o){let h=o.file||o.path||o.source||"";if(typeof h=="string"){if(h.endsWith(".py"))return"PY";if(h.endsWith(".js"))return"JS"}return(o.language||"PY").toUpperCase()}function n(o){return o==null?"is-muted":o<=10?"is-danger":o<=50?"is-warn":"is-cyan"}function d(o){return o==="JS"?"is-cyan":o==="PY"?"is-warn":"is-muted"}function a(o){return o==null?"":o<=10?"CRITICAL":o<=50?"HIGH":"NORMAL"}function l(o){o.querySelectorAll(".plugin-toggle").forEach(h=>{h.addEventListener("change",async function(){let t=this.dataset.pluginName,s=this.checked;await i(t,s,this)})}),o.querySelectorAll(".plugin-uninstall").forEach(h=>{h.addEventListener("click",function(){c(this.dataset.pluginName,this.dataset.pluginFilename)})})}async function i(o,h,t){let s=h?"/admin/plugins/enable":"/admin/plugins/disable";try{let u=await csrfFetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||`HTTP ${u.status}`)}showToast(h?ServerI18n.t("pluginEnabled").replace("{name}",o):ServerI18n.t("pluginDisabled").replace("{name}",o),!0)}catch(u){console.error(`Failed to ${h?"enable":"disable"} plugin:`,u),showToast(u.message||ServerI18n.t("operationFailed"),!1),t&&(t.checked=!h)}}async function e(){let o=document.getElementById("pluginsReloadBtn");o&&(o.disabled=!0);try{let h=await csrfFetch("/admin/plugins/reload",{method:"POST"});if(!h.ok){let t=await h.json().catch(()=>({}));throw new Error(t.error||`HTTP ${h.status}`)}showToast(ServerI18n.t("pluginsReloaded"),!0),await B()}catch(h){console.error("Failed to reload plugins:",h),showToast(h.message||ServerI18n.t("reloadFailed"),!1)}finally{o&&(o.disabled=!1)}}})})()});var wt=ve(()=>{(function(){"use strict";let y=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},k={"messages.read":"pluginsUploadPermMessagesRead","messages.block":"pluginsUploadPermMessagesBlock","filters.add":"pluginsUploadPermFiltersAdd","session.read":"pluginsUploadPermSessionRead","overlay.write":"pluginsUploadPermOverlayWrite"},g=null,f=null;function x(){return g||(g=document.createElement("div"),g.className="admin-pu-backdrop",g.hidden=!0,g.innerHTML=`
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",n=>{(n.target.matches("[data-pu-close]")||n.target===g)&&r()}),g)}function U(n){return[ServerI18n.t("pluginsUploadStepPick"),ServerI18n.t("pluginsUploadStepValidate"),ServerI18n.t("pluginsUploadStepConfirm"),ServerI18n.t("pluginsUploadStepInstall")].map((a,l)=>{let i=l+1,e=i<n,h=e?"is-done":i===n?"is-active":"";return(l>0?`<span class="admin-pu-step-line ${e?"is-done":""}"></span>`:"")+`<div class="admin-pu-step ${h}">
          <span class="circle">${e?"\u2713":i}</span>
          <span class="label">${a}</span>
        </div>`}).join("")}function A(n,d){f.step=n;let a=g.querySelector("[data-pu-steps]");a&&(a.innerHTML=U(n));let l=g.querySelector("[data-pu-body]");l&&(l.innerHTML=d)}function _(n){let d=n==="error-type"?ServerI18n.t("pluginsUploadErrorType"):n==="error-size"?ServerI18n.t("pluginsUploadErrorSize"):n==="error-multi"?ServerI18n.t("pluginsUploadErrorMulti"):n==="dragover"?ServerI18n.t("pluginsUploadDragoverMsg"):ServerI18n.t("pluginsUploadDropzoneMsg"),a=(n||"").startsWith("error")?"\u2715":n==="dragover"?"\u2193":"\u2191";return`
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${(n||"").startsWith("error")?"is-error":n==="dragover"?"is-over":""}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${a}</div>
          <div class="admin-pu-dropzone-msg">${y(d)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`}function m(){let n=g.querySelector("[data-pu-dropzone]"),d=g.querySelector("[data-pu-file]"),a=g.querySelector("[data-pu-browse]");a&&a.addEventListener("click",()=>d&&d.click()),d&&d.addEventListener("change",()=>{d.files&&d.files[0]&&M(d.files[0])}),n&&(n.addEventListener("click",()=>d&&d.click()),n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("is-over")}),n.addEventListener("dragleave",()=>n.classList.remove("is-over")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("is-over");let i=l.dataTransfer&&l.dataTransfer.files;if(!(!i||i.length===0)){if(i.length>1){A(1,_("error-multi")),m();return}M(i[0])}}))}function M(n){if(!n.name.match(/\.(py|js)$/i)){A(1,_("error-type")),m();return}if(n.size>256*1024){A(1,_("error-size")),m();return}f.file=n,A(2,F(n.name)),w(n)}function F(n){return`
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${y(n)}</div>
      </div>`}async function w(n){try{let d=new FormData;d.append("file",n);let a=await window.csrfFetch("/admin/plugins/upload?dry_run=true",{method:"POST",body:d}),l=await a.json().catch(()=>({}));if(!a.ok&&!l.validation){window.showToast?.(l.error||ServerI18n.t("pluginsUploadToastUploadFailed",{status:a.status}),!1),A(1,_()),m();return}f.manifest=l.manifest||{},f.validation=l.validation||{},f.filename=l.filename||n.name,E(f)}catch(d){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:d.message||""}),!1),A(1,_()),m()}}function E(n){let d=n.manifest||{},a=n.validation||{},l="";if(!a.syntax_ok)l=P(a.syntax_err,n);else if(Object.keys(d).length===0)l=S(n);else{let i=(a.deps||[]).some(e=>e.status==="missing");l=H(d,a,n,i)}A(2,`<div class="admin-pu-step2">${l}</div>`),B()}function P(n,d){let a=n&&n.line?n.line:"?",l=n&&n.msg?n.msg:"syntax error";return`
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError \xB7 Line ${a}</span>
        </div>
        <pre class="admin-pu-syntax-body">${y(`>>> ${d.filename}
${l}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`}function S(n){return`
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
      </footer>`}function b(n){return n==null?"is-muted":n<=10?"is-danger":n<=50?"is-warn":"is-cyan"}function C(n){if(n==null)return'<span class="admin-ui-pill admin-pu-pill is-muted">\u2014</span>';let d=b(n),a=n<=10?"CRITICAL":n<=50?"HIGH":"NORMAL";return`<span class="admin-ui-pill admin-pu-pill ${d}">${n} \xB7 ${a}</span>`}function H(n,d,a,l){let i=n.name||a.filename.replace(/\.(py|js)$/i,""),e=n.version?`v${y(n.version)}`:"\u2014",o=n.author?`@${y(n.author.replace(/^@/,""))}`:"\u2014",h=n.description||ServerI18n.t("pluginsUploadNoDescription"),t=a.filename.endsWith(".js")?"JS":"PY",s=t==="PY"?"is-warn":"is-cyan",u=Array.isArray(n.permissions)?n.permissions:[],p=Object.keys(k).map(O=>{let z=u.includes(O);return`
        <div class="admin-pu-perm-row ${z?"is-req":"is-not"}">
          <span class="dot">${z?"\u25CF":"\u25CB"}</span>
          <span class="key">${y(O)}</span>
          <span class="label">${y(ServerI18n.t(k[O]))}</span>
        </div>`}).join(""),$=d.deps||[],I=$.map(O=>{let z=O.status==="ok"?"is-ok":O.status==="warn"?"is-warn":"is-err",T=O.status==="ok"?"\u2713":O.status==="warn"?"\u26A0":"\u2717";return`
        <div class="admin-pu-dep-row ${z}">
          <span class="dot">${T}</span>
          <span class="name">${y(O.name)}</span>
          <span class="note">${y(O.note||"")}</span>
        </div>`}).join(""),L=d.duplicate_name?`
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning",{name:`<span class="mono">${y(i)}</span>`})}
      </div>`:"",D=$.length===0?"":`
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">${ServerI18n.t("mlDependencies")}</span>
        <div class="admin-pu-dep-list">${I}</div>
      </section>`;return`
      ${L}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${y(i)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${e}</span>
          <span class="author">${o}</span>
          <span class="admin-ui-pill admin-pu-pill ${s}" style="margin-left:auto">${t}</span>
        </div>
        <div class="admin-pu-manifest-desc">${y(h)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("mlPriority")}</span>
          ${C(n.priority)}
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
      </footer>`}function B(){let n=g.querySelector("[data-pu-back]");n&&n.addEventListener("click",()=>{f.file=null,f.manifest=null,f.validation=null,A(1,_()),m()});let d=g.querySelector("[data-pu-confirm]");d&&d.addEventListener("click",()=>N());let a=g.querySelector("[data-pu-no-manifest-ack]");a&&d&&a.addEventListener("change",()=>{d.disabled=!a.checked})}function N(){let n=f.manifest||{},d=n.name||(f.filename||"").replace(/\.(py|js)$/i,""),a=n.version?`v${y(n.version)}`:"\u2014",l=Array.isArray(n.permissions)?n.permissions:[],i=l.length===0?`<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`:l.map(h=>`<div class="admin-pu-confirm-perm">\u25CF <span class="mono">${y(h)}</span></div>`).join("");A(3,`
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">\u26A0</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${y(d)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${a}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${i}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite",{path:`server/user_plugins/${y(f.filename||"")}`})}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable",{priority:n.priority!=null?n.priority:100})}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);let e=g.querySelector("[data-pu-install]");e&&e.addEventListener("click",v);let o=g.querySelector("[data-pu-back]");o&&o.addEventListener("click",()=>E(f))}async function v(){A(4,`
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);try{let n=new FormData;n.append("file",f.file);let d=await window.csrfFetch("/admin/plugins/upload",{method:"POST",body:n}),a=await d.json().catch(()=>({}));if(!d.ok){window.showToast?.(a.error||ServerI18n.t("pluginsUploadToastInstallFailed",{status:d.status}),!1),E(f);return}window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled",{name:a.name||f.filename}),!0),r();let l=document.getElementById("pluginsReloadBtn");l&&l.click()}catch(n){window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError",{msg:n.message||""}),!1),E(f)}}function c(){x(),f={step:1,file:null,manifest:null,validation:null,filename:null},A(1,_()),m(),g.hidden=!1,document.body.classList.add("admin-pu-open")}function r(){g&&(g.hidden=!0,document.body.classList.remove("admin-pu-open"),f=null)}window.AdminPluginUpload={open:c,close:r},document.addEventListener("click",n=>{n.target.closest("#pluginsUploadBtn")&&(n.preventDefault(),c())})})()});var St=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-webhooks",g=12e3,f=[{slug:"on_danmu",labelKey:"webhooksEvtOnDanmu"},{slug:"on_danmu_blocked",labelKey:"webhooksEvtOnDanmuBlocked"},{slug:"on_poll_create",labelKey:"webhooksEvtOnPollCreate"},{slug:"on_poll_vote",labelKey:"webhooksEvtOnPollVote"},{slug:"on_poll_end",labelKey:"webhooksEvtOnPollEnd"},{slug:"on_session_start",labelKey:"webhooksEvtOnSessionStart"},{slug:"on_session_end",labelKey:"webhooksEvtOnSessionEnd"},{slug:"on_overlay_clear",labelKey:"webhooksEvtOnOverlayClear"},{slug:"on_audit_alert",labelKey:"webhooksEvtOnAuditAlert"},{slug:"on_plugin_change",labelKey:"webhooksEvtOnPluginChange"}];function x(i,e){return i?i.length>e?i.slice(0,e)+"\u2026":i:""}function U(i){if(!i)return"\u2014";try{let e=new Date(i),o=Math.max(0,(Date.now()-e.getTime())/1e3);return o<60?ServerI18n.t("webhooksTimeAgoSeconds",{n:Math.floor(o)}):o<3600?ServerI18n.t("webhooksTimeAgoMinutes",{n:Math.floor(o/60)}):o<86400?ServerI18n.t("webhooksTimeAgoHours",{n:Math.floor(o/3600)}):ServerI18n.t("webhooksTimeAgoDays",{n:Math.floor(o/86400)})}catch{return"\u2014"}}function A(i){if(!i)return"\u2014";try{return new URL(i).hostname}catch{return x(i,30)}}function _(i){return i==="active"?"is-success":i==="degraded"?"is-warn":"is-muted"}let m={hooks:[],deliveries:[],stats:null,selectedHookId:null,deliveryFilter:"all",pollTimer:0,eventCatalog:f,eventCatalogLoaded:!1};function M(){let i=document.getElementById("advanced-grid")||document.getElementById("settings-grid");!i||document.getElementById(k)||(i.insertAdjacentHTML("beforeend",`
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
    `),F())}function F(){let i=document.getElementById(k);if(!i)return;let e=document.getElementById("wh-register-form");e&&e.addEventListener("submit",async o=>{o.preventDefault();let h=document.getElementById("wh-url").value.trim();if(!h)return;let t=Array.from(e.querySelectorAll('input[name="wh-event"]:checked')).map($=>$.value);if(t.length===0){showToast(ServerI18n.t("selectAtLeastOneEvent"),!1);return}let s=document.getElementById("wh-format").value,u=document.getElementById("wh-secret").value.trim(),p={url:h,events:t,format:s};u&&(p.secret=u);try{let $=await csrfFetch("/admin/webhooks/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),I=await $.json();$.ok&&I.hook_id?(showToast(ServerI18n.t("webhookRegistered")),e.reset(),C(),e.hidden=!0,await w()):showToast(I.error||ServerI18n.t("registrationFailed"),!1)}catch($){console.error("Webhook register error:",$),showToast(ServerI18n.t("registrationFailed"),!1)}}),i.querySelectorAll(".admin-ui-page-actions [data-wh-action='show-add']").forEach(o=>o.addEventListener("click",()=>{e&&(e.hidden=!1)})),i.addEventListener("click",o=>{if(o.target.closest("[data-wh-action='show-add']")){e&&(e.hidden=!1);return}if(o.target.closest("[data-wh-action='hide-add']")){e&&(e.hidden=!0);return}let s=o.target.closest("[data-wh-log-filter]");if(s){m.deliveryFilter=s.dataset.whLogFilter,i.querySelectorAll("[data-wh-log-filter]").forEach(z=>{z.classList.toggle("is-active",z.dataset.whLogFilter===m.deliveryFilter)}),c();return}let u=o.target.closest("[data-wh-action='test']");if(u){o.stopPropagation(),d(u.dataset.whHookId);return}let p=o.target.closest("[data-wh-action='settings']");if(p){o.stopPropagation(),r(p.dataset.whHookId);return}if(o.target.closest("[data-wh-action='close-detail']")){m.selectedHookId=null,n(),N();return}let I=o.target.closest("[data-wh-action='detail-ping']");if(I){d(I.dataset.whHookId);return}let L=o.target.closest("[data-wh-action='detail-toggle']");if(L){a(L.dataset.whHookId,L.dataset.whNextEnabled==="1");return}let D=o.target.closest("[data-wh-action='detail-delete']");if(D){l(D.dataset.whHookId);return}let O=o.target.closest("[data-wh-hook-row]");if(O&&!o.target.closest("button")){r(O.dataset.whHookId);return}}),m.stopPoll||(m.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:w}))}async function w(){await S(),await Promise.all([E(),P()]),H(),N(),c(),n()}async function E(){try{let e=await(await csrfFetch("/admin/webhooks/list")).json();m.hooks=Array.isArray(e.webhooks)?e.webhooks:[]}catch{m.hooks=[]}}async function P(){try{let i=await fetch("/admin/webhooks/deliveries?limit=50",{credentials:"same-origin"});if(!i.ok)return;let e=await i.json();m.deliveries=Array.isArray(e.deliveries)?e.deliveries:[],m.stats=e.stats||null}catch{}}async function S(){if(!m.eventCatalogLoaded)try{let i=await fetch("/admin/webhooks/events",{credentials:"same-origin"});if(i.ok){let e=await i.json(),o=Array.isArray(e.events)?e.events:[];o.length&&(m.eventCatalog=o)}}catch{}finally{m.eventCatalogLoaded=!0,C()}}function b(i){let e=i&&i.slug?String(i.slug):"";if(i&&i.labelKey){let u=ServerI18n.t(i.labelKey);return{slug:e,label:u?u+" \xB7 "+e:e,title:u}}let o=i&&i.zh?String(i.zh):"",h=i&&i.en?String(i.en):"",t=window.ServerI18n&&ServerI18n.currentLang||"zh",s=(i&&i[t]?String(i[t]):"")||h||o;return{slug:e,label:s?s+" \xB7 "+e:e,title:o&&h?o+" \xB7 "+h:o||h}}function C(){let i=document.querySelector("[data-wh-register-events]");i&&(i.innerHTML=m.eventCatalog.map(function(e){let o=b(e);if(!o.slug)return"";let h=o.slug==="on_danmu"?" checked":"";return'<label title="'+y(o.title)+'"><input type="checkbox" name="wh-event" value="'+y(o.slug)+'"'+h+" /> "+y(o.label)+"</label>"}).join(""))}function H(){let i=document.querySelector("[data-wh-stats]");if(!i)return;let e=m.stats||{endpoints_enabled:0,endpoints_total:0,deliveries_24h:0,failed_pending_retry:0,dropped_24h:0};i.innerHTML=`
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
      </div>`}function B(){return m.hooks.length&&m.hooks[0].retry_count||3}function N(){let i=document.getElementById("wh-list"),e=document.querySelector("[data-wh-count]");if(i){if(e&&(e.textContent=String(m.hooks.length)),m.hooks.length===0){i.innerHTML="";let o=window.AdminEmpty.renderCustom({icon:"\u21CC",title:ServerI18n.t("webhooksEmptyTitle"),desc:ServerI18n.t("webhooksEmptyDesc"),actionLabel:ServerI18n.t("webhooksEmptyActionLabel"),action:()=>{let h=document.getElementById("wh-register-form");h&&(h.hidden=!1),document.getElementById("wh-url")?.focus()}});o.dataset.emptyKind="webhooks",i.appendChild(o);return}i.innerHTML=m.hooks.map(v).join("")}}function v(i){let e=y(i.id||""),o=Number(i.success_count)||0,h=Number(i.fail_count)||0,t=o+h,s=t>0?Math.round(o/t*1e3)/10:100,u=i.enabled!==!1,p=Number(i.last_status)||null,$=u?p&&p>=400||i.last_error?"degraded":"active":"paused",I=$==="active"?"var(--hud-lime)":$==="degraded"?"var(--hud-amber)":"var(--color-text-secondary)",L=$==="active"?"ACTIVE":$==="degraded"?"DEGRADED":"PAUSED",D=m.selectedHookId===i.id?" is-selected":"",O=_($),z=(i.events||[]).map(function(R){return'<span class="admin-ui-pill admin-wh-evt-chip">'+y(R)+"</span>"}).join(""),T=i.last_error?'<div class="admin-wh-card-warn">\u26A0 '+y(x(i.last_error,90))+"</div>":"";return`
      <article class="admin-wh-card${D}" data-wh-hook-row data-wh-hook-id="${e}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${I};box-shadow:${u?"0 0 6px "+I:"none"}"></span>
          <span class="name">${y(A(i.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${O}">${L}</span>
          <span class="last">last \xB7 ${y(U(i.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${y(i.url)}</div>
        <div class="admin-wh-card-events">${z}</div>
        ${T}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">${ServerI18n.t("whSuccessRate")}</span>
            <div class="bar"><div class="fill" style="width:${s}%;background:${I}"></div></div>
            <span class="pct" style="color:${I}">${s}%</span>
          </div>
          <span class="counter ok">\u2713 ${o.toLocaleString()}</span>
          <span class="counter ${h>0?"fail":"fail-zero"}">\u2717 ${h}</span>
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${e}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
        </div>
      </article>`}function c(){let i=document.getElementById("wh-log-list");if(!i)return;let e=m.deliveries.filter(function(o){return m.deliveryFilter==="all"?!0:m.deliveryFilter==="failed"?!o.ok:m.deliveryFilter==="2xx"?o.code&&o.code>=200&&o.code<300:m.deliveryFilter==="5xx"?o.code&&o.code>=500:!0});if(e.length===0){i.innerHTML=`<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;return}i.innerHTML=e.map(function(o){let h=o.ts?new Date(o.ts).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014",t=o.code?String(o.code):"\u2014",s=o.ok?"var(--hud-lime)":"var(--hud-crimson)",u=o.duration_ms?o.duration_ms>=1e3?(o.duration_ms/1e3).toFixed(1)+"s":o.duration_ms+"ms":"\u2014",p=o.ok?"var(--color-text-strong)":"var(--hud-amber)",$=y(A(o.hook_url||"")),I=(o.retries||0)===0?"\u2014":"\xD7"+o.retries,L=(o.retries||0)>0?"var(--hud-amber)":"var(--color-text-muted)";return`
        <div class="admin-wh-log-row${o.dropped?" is-dropped":""}">
          <span class="time">${y(h)}</span>
          <span class="code" style="color:${s};border-color:${s}55;background:${s}15;">${t}</span>
          <span class="dur" style="color:${p}">${y(u)}</span>
          <span class="ep">${$}</span>
          <span class="evt">${y(o.event||"")}</span>
          <span class="retry" style="color:${L}">${I}</span>
        </div>`}).join("")}function r(i){m.selectedHookId=i,N(),n()}function n(){let i=document.querySelector("[data-wh-detail]");if(!i)return;let e=m.hooks.find(function($){return $.id===m.selectedHookId});if(!e){i.hidden=!0,i.innerHTML="";return}i.hidden=!1;let o=e.enabled!==!1,h=Number(e.last_status)||null,t=o?h&&h>=400||e.last_error?"var(--hud-amber)":"var(--hud-lime)":"var(--color-text-secondary)",s=new Set(e.events||[]),u=m.eventCatalog.map(function($){let I=b($),L=s.has(I.slug);return'<label class="admin-ui-chip admin-wh-detail-evt '+(L?"is-active is-on":"")+'" title="'+y(I.title)+'"><span aria-hidden="true">'+(L?"\u2713":"\u25CB")+"</span><span>"+y(I.label)+"</span></label>"}).join(""),p={event:e.events&&e.events[0]||"on_danmu",ts:Math.floor(Date.now()/1e3),hook_id:e.id,data:{text:ServerI18n.t("webhooksSamplePayloadText"),color:"#ffffff",size:50}};i.innerHTML='<div class="admin-wh-detail-head"><span class="dot" style="background:'+t+";box-shadow:0 0 6px "+t+'"></span><span class="name">'+y(A(e.url))+'</span><span class="admin-ui-spacer" aria-hidden="true"></span><button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="'+ServerI18n.t("webhooksCloseAriaLabel")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("webhooksEventSubscriptionsLabel")+'</div><div class="admin-wh-detail-events">'+u+'</div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whRetryPolicy")+'</div><div class="admin-wh-detail-policy"><div><span class="k">Max retries</span><span class="v">'+(e.retry_count!=null?e.retry_count:3)+'</span></div><div><span class="k">Backoff</span><span class="v">exponential \xB7 1s \u2192 2s \u2192 4s</span></div><div><span class="k">Timeout</span><span class="v">5,000 ms</span></div><div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">'+(e.secret?"SHA-256 \xB7 X-Webhook-Signature":ServerI18n.t("webhooksSecretNotSet"))+'</span></div></div><div class="admin-ui-monolabel admin-wh-detail-label">'+ServerI18n.t("whPayloadSample")+'</div><pre class="admin-wh-detail-payload">'+y(JSON.stringify(p,null,2))+'</pre><div class="admin-wh-detail-actions"><button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailPingBtn")+'</button><button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="'+y(e.id)+'" data-wh-next-enabled="'+(o?"0":"1")+'">'+(o?ServerI18n.t("webhooksDetailPauseBtn"):ServerI18n.t("webhooksDetailEnableBtn"))+'</button><button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="'+y(e.id)+'">'+ServerI18n.t("webhooksDetailDeleteBtn")+"</button></div>"}async function d(i){if(i)try{let e=await csrfFetch("/admin/webhooks/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:i})}),o=await e.json();e.ok?showToast(ServerI18n.t("testPayloadSent")):showToast(o.error||ServerI18n.t("testFailed"),!1),setTimeout(w,1500)}catch(e){console.error("Webhook test error:",e),showToast(ServerI18n.t("testFailed"),!1)}}async function a(i,e){if(i)try{let o=await csrfFetch("/admin/webhooks/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:i,enabled:e})}),h=await o.json();if(!o.ok){showToast(h.error||ServerI18n.t("webhooksToggleFailed"),!1);return}let t=m.hooks.find(function(s){return s.id===i});t&&(t.enabled=h.enabled),showToast(h.enabled?ServerI18n.t("webhooksEnabledToast"):ServerI18n.t("webhooksPausedToast")),H(),N(),n()}catch(o){console.error("Webhook toggle error:",o),showToast(ServerI18n.t("webhooksToggleFailed"),!1)}}async function l(i){if(!(!i||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("webhooksDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteWebhook"),severity:"danger",body:ServerI18n.t("deleteWebhookConfirm"),confirmLabel:ServerI18n.t("webhooksConfirmDeleteLabel")})))try{let o=await csrfFetch("/admin/webhooks/unregister",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hook_id:i})}),h=await o.json();o.ok?(showToast(ServerI18n.t("webhookDeleted")),m.selectedHookId===i&&(m.selectedHookId=null),w()):showToast(h.error||ServerI18n.t("deleteFailed"),!1)}catch(o){console.error("Webhook delete error:",o),showToast(ServerI18n.t("deleteFailed"),!1)}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&M()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),M()})})()});var kt=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-sounds",g=null,f=[],x=[];async function U(){try{let c=await window.csrfFetch("/admin/sounds/list",{method:"GET"});if(!c.ok)throw new Error(await c.text());let r=await c.json();f=r.sounds||[],x=r.rules||[],window.AdminTabs?.setTabCount?.("assets","sounds",f.length||"")}catch(c){console.error("Failed to fetch sounds:",c),window.showToast(ServerI18n.t("loadSoundsFailed"),!1),f=[],x=[]}}async function A(){return U()}async function _(c,r){let n=new FormData;n.append("file",c),n.append("name",r);let d=await window.csrfFetch("/admin/sounds/upload",{method:"POST",body:n}),a=await d.json();if(!d.ok)throw new Error(a.error||"Upload failed");return a}async function m(c){let r=await window.csrfFetch("/admin/sounds/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),n=await r.json();if(!r.ok)throw new Error(n.error||"Delete failed");return n}async function M(c){let r=await window.csrfFetch("/admin/sounds/rules/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),n=await r.json();if(!r.ok)throw new Error(n.error||"Failed to add rule");return n}async function F(c){let r=await window.csrfFetch("/admin/sounds/rules/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c})}),n=await r.json();if(!r.ok)throw new Error(n.error||"Failed to delete rule");return n}function w(){let c=document.getElementById("soundsList");if(c){if(f.length===0){c.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundsUploaded"),desc:ServerI18n.t("soundsEmptyDesc")});r.dataset.emptyKind="sounds",r.style.gridColumn="1 / -1",c.appendChild(r);return}c.innerHTML=f.map(function(d){var a=y(d.name),l=Math.round((d.volume!=null?d.volume:1)*100);return'<div class="admin-sounds-tile" data-sound-name="'+y(d.name)+'"><div class="name" title="'+a+'">'+a+'</div><div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="admin-ui-monolabel" style="font-size:11px">'+ServerI18n.t("mlVolume")+'</span><input type="range" class="sound-volume-slider" data-name="'+y(d.name)+'" min="0" max="100" step="1" value="'+l+'" style="flex:1;min-width:80px;max-width:120px;accent-color:var(--color-primary)" /><span class="admin-ui-monolabel sound-volume-label" data-name="'+y(d.name)+'" style="min-width:32px;text-align:right">'+l+'%</span></div><div class="actions" style="margin-top:6px"><button type="button" class="admin-ui-chip is-active sound-play-btn" data-name="'+y(d.name)+'">'+y(ServerI18n.t("previewBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sound-delete-btn" data-name="'+y(d.name)+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}).join(""),c.querySelectorAll(".sound-play-btn").forEach(function(d){d.addEventListener("click",function(){var a=d.dataset.name,l=f.find(function(i){return i.name===a});l&&(g&&(g.pause(),g=null),g=new Audio(l.url),g.volume=.5,g.play().catch(function(i){console.warn("Audio preview failed:",i)}))})}),c.querySelectorAll(".sound-delete-btn").forEach(function(d){d.addEventListener("click",async function(){var a=d.dataset.name;if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("soundsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSound"),severity:"danger",bodyText:ServerI18n.t("deleteSoundConfirm").replace("{name}",a),confirmLabel:ServerI18n.t("soundsDeleteConfirm")}))try{await m(a),window.showToast(ServerI18n.t("soundDeleted").replace("{name}",a),!0),await U(),w(),P()}catch(i){window.showToast(i.message,!1)}})});var n={};c.querySelectorAll(".sound-volume-slider").forEach(function(d){var a=d.dataset.name,l=c.querySelector('.sound-volume-label[data-name="'+CSS.escape(a)+'"]');d.addEventListener("input",function(){l&&(l.textContent=d.value+"%"),clearTimeout(n[a]),n[a]=setTimeout(function(){E(a,Number(d.value)/100)},300)}),d.addEventListener("change",function(){clearTimeout(n[a]),E(a,Number(d.value)/100)})})}}async function E(c,r){try{var n=await window.csrfFetch("/admin/sounds/"+encodeURIComponent(c)+"/volume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({volume:r})}),d=await n.json();if(!n.ok){window.showToast(d.error||"Volume update failed",!1);return}var a=f.find(function(l){return l.name===c});a&&(a.volume=r),window.showToast(ServerI18n.t("soundsToastVolumeSaved",{pct:Math.round(r*100)}),!0)}catch(l){console.warn("[admin-sounds] volume save failed:",l),window.showToast("Network error",!1)}}function P(){let c=document.getElementById("ruleSoundName");if(!c)return;let r=c.value;if(c.innerHTML="",f.length===0){let n=document.createElement("option");n.value="",n.textContent=ServerI18n.t("noSoundsAvailable"),n.disabled=!0,c.appendChild(n);return}f.forEach(n=>{let d=document.createElement("option");d.value=n.name,d.textContent=n.name,c.appendChild(d)}),r&&[...c.options].some(n=>n.value===r)&&(c.value=r)}function S(){let c=document.getElementById("rulesList");if(c){if(x.length===0){c.innerHTML="";var r=window.AdminEmpty.renderCustom({icon:"\u266A",title:ServerI18n.t("noSoundRules"),desc:ServerI18n.t("soundsRulesEmptyDesc")});r.dataset.emptyKind="sound-rules",c.appendChild(r);return}c.innerHTML=x.map(function(n){var d=n.trigger_type==="all"?ServerI18n.t("triggerAllMessages"):n.trigger_type==="keyword"?ServerI18n.t("triggerKeywordPrefix").replace("{value}",n.trigger_value):ServerI18n.t("triggerEffectPrefix").replace("{value}",n.trigger_value),a=Math.round((n.volume!=null?n.volume:1)*100),l=ServerI18n.t("soundDetailLine").replace("{sound}",n.sound_name).replace("{vol}",a).replace("{cd}",n.cooldown!=null?n.cooldown:0);return'<div class="admin-sounds-rule" data-rule-id="'+y(String(n.id))+'"><div class="admin-sounds-rule-body"><div class="admin-sounds-rule-trigger">'+y(d)+'</div><div class="admin-sounds-rule-detail">'+y(l)+'</div></div><button type="button" class="admin-ui-chip is-danger sound-rule-del-btn" data-rule-id="'+y(String(n.id))+'">'+window.AdminUtils.closeIcon+"</button></div>"}).join(""),c.querySelectorAll(".sound-rule-del-btn").forEach(function(n){n.addEventListener("click",async function(){try{await F(n.dataset.ruleId),window.showToast(ServerI18n.t("soundRuleDeleted"),!0),await A(),S()}catch(d){window.showToast(d.message,!1)}})})}}function b(){let c=document.getElementById("soundUploadBtn");c&&c.addEventListener("click",async()=>{let r=document.getElementById("soundFileInput"),n=document.getElementById("soundNameInput"),d=r.files[0];if(!d){window.showToast(ServerI18n.t("selectAudioFile"),!1);return}let a=n.value.trim();if(!a){window.showToast(ServerI18n.t("enterSoundName"),!1);return}c.disabled=!0,c.textContent=ServerI18n.t("uploadingStatus");try{await _(d,a),window.showToast(ServerI18n.t("soundUploaded").replace("{name}",a),!0),r.value="",n.value="",await U(),w(),P()}catch(l){window.showToast(l.message,!1)}finally{c.disabled=!1,c.textContent=ServerI18n.t("soundsUploadIdle")}})}function C(){let c=document.getElementById("addRuleBtn");c&&c.addEventListener("click",async()=>{let r=document.getElementById("ruleTriggerType").value,n=document.getElementById("ruleTriggerValue").value.trim(),d=document.getElementById("ruleSoundName").value,a=document.getElementById("ruleVolume"),l=document.getElementById("ruleCooldown");if(r!=="all"&&!n){window.showToast(ServerI18n.t("enterTriggerValue"),!1);return}if(!d){window.showToast(ServerI18n.t("selectSound"),!1);return}let i=parseInt(a.value,10)/100,e=parseInt(l.value,10)||0,o={trigger_type:r,trigger_value:r==="all"?"":n,sound_name:d,volume:Math.max(0,Math.min(1,i)),cooldown:Math.max(0,e)};c.disabled=!0;try{await M(o),window.showToast(ServerI18n.t("soundRuleAdded"),!0),document.getElementById("ruleTriggerValue").value="",await A(),S()}catch(h){window.showToast(h.message,!1)}finally{c.disabled=!1}})}function H(){let c=document.getElementById("ruleTriggerType"),r=document.getElementById("ruleTriggerValue");if(!c||!r)return;function n(){c.value==="all"?(r.disabled=!0,r.placeholder=ServerI18n.t("triggerValueAllPlaceholder"),r.value=""):c.value==="keyword"?(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueKeywordPlaceholder")):c.value==="effect"&&(r.disabled=!1,r.placeholder=ServerI18n.t("triggerValueEffectPlaceholder"))}c.addEventListener("change",n),n()}function B(){let c=document.getElementById("ruleVolume"),r=document.getElementById("ruleVolumeLabel");!c||!r||c.addEventListener("input",()=>{r.textContent=c.value+"%"})}function N(){return`
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
    `}async function v(){let c=document.getElementById("settings-grid");if(c){if(c.insertAdjacentHTML("beforeend",N()),window.AdminSkeletons){let r=document.getElementById("soundsList");r&&(r.innerHTML="",r.appendChild(window.AdminSkeletons.listRows({rows:3})));let n=document.getElementById("rulesList");n&&(n.innerHTML="",n.appendChild(window.AdminSkeletons.listRows({rows:3})))}await Promise.all([U(),A()]),w(),P(),S(),b(),C(),H(),B()}}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;let c=!1;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(k)&&!c&&(c=!0,v().finally(()=>{c=!1}))}).observe(document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&(c=!0,v().finally(()=>{c=!1}))})})()});var It=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k=/^[a-zA-Z0-9_]{1,32}$/,g=".png,.gif,.webp",f="sec-emojis",x=[];function U(){return`
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
    `}function A(B){let N=":"+B.name+":",v=Number(B.used)||0,c=v>0?ServerI18n.t("emojisUsedCount",{n:v}):ServerI18n.t("emojisNeverUsed");return'<div class="admin-em-v4__tile" data-em-name="'+M(B.name)+'"><div class="admin-em-v4__tile-thumb"><img src="'+M(B.url)+'" alt="'+M(N)+'" loading="lazy" /></div><div class="admin-em-v4__tile-name">'+y(N)+'</div><div class="admin-em-v4__tile-meta">'+y(c)+'</div><span class="admin-em-v4__tile-dot" aria-label="enabled"></span><div class="admin-em-v4__tile-actions"><button type="button" class="emoji-copy-btn" data-label="'+M(N)+'" title="'+M(ServerI18n.t("copyToClipboard"))+'">'+ServerI18n.t("emojisCopyBtn")+'</button><button type="button" class="emoji-delete-btn" data-name="'+M(B.name)+'" title="'+M(ServerI18n.t("deleteEmoji"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function _(B){let N=document.querySelector("[data-em-quota-label]"),v=document.querySelector("[data-em-quota-fill]");if(!N||!v)return;let c=B.length,r=100;N.textContent=ServerI18n.t("emojisQuotaUsed",{n:c,max:r}),v.style.width=Math.min(100,c/r*100)+"%"}function m(B){let N=document.querySelector("[data-em-preview-body]");if(!N)return;if(!B||B.length===0){N.innerHTML='<span class="admin-em-v4__preview-empty">'+ServerI18n.t("emojisPreviewEmpty")+"</span>";return}let c=B.slice(0,3).map(r=>`<span class="admin-em-v4__preview-pair"><code>:${y(r.name)}:</code> \u2192 <img src="${M(r.url)}" alt=":${M(r.name)}:" /></span>`);N.innerHTML=ServerI18n.t("emojisPreviewTyping",{pairs:c.join(" \xB7 ")})}function M(B){return y(B)}function F(B){var N=document.getElementById("emojiGrid"),v=document.getElementById("emojiCount");N&&(!B||B.length===0?(window.AdminEmpty?(N.innerHTML="",N.appendChild(window.AdminEmpty.renderCustom({icon:"\u229E",title:ServerI18n.t("emojisEmptyTitle"),desc:ServerI18n.t("emojisEmptyDesc"),actionLabel:ServerI18n.t("emojisEmptyAction"),action:function(){var c=document.getElementById("emojiFileInput");c&&c.click()}}))):N.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("noEmojisUploaded"))+"</div>",v&&(v.textContent="0")):(N.innerHTML=B.map(A).join(""),v&&(v.textContent=String(B.length))),_(x),m(x))}function w(){var B=document.getElementById("emojiGrid");if(B)if(window.AdminSkeletons){B.innerHTML="";for(var N=0;N<8;N++){var v=document.createElement("div");v.className="admin-em-v4__tile admin-em-v4__tile--skel";var c=document.createElement("div");c.className="admin-em-v4__tile-thumb";var r=document.createElement("div");r.className="admin-skel",r.style.width="100%",r.style.height="100%",c.appendChild(r),v.appendChild(c);var n=document.createElement("div");n.className="admin-skel admin-skel-bar",n.style.width="60%",n.style.height="8px",n.style.margin="6px auto",v.appendChild(n),B.appendChild(v)}}else B.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadingEmojis"))+"</div>"}async function E(){try{var B=await fetch("/admin/emojis/list",{method:"GET",credentials:"same-origin"});if(!B.ok)throw new Error("HTTP "+B.status);var N=await B.json();x=N.emojis||[],window.AdminTabs?.setTabCount?.("assets","emojis",x.length||""),P()}catch(c){console.error("[admin-emojis] fetch failed:",c);var v=document.getElementById("emojiGrid");v&&(v.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadEmojiFailed"))+"</div>")}}function P(){var B=document.getElementById("emojiSearchInput"),N=(B&&B.value||"").trim().toLowerCase(),v=N?x.filter(function(c){return(c.name||"").toLowerCase().includes(N)}):x;F(v)}async function S(){var B=document.getElementById("emojiNameInput"),N=document.getElementById("emojiFileInput"),v=document.getElementById("emojiUploadBtn");if(!(!B||!N||!v)){var c=B.value.trim(),r=N.files&&N.files[0];if(!c){showToast(ServerI18n.t("emojiNameRequired"),!1),B.focus();return}if(!k.test(c)){showToast(ServerI18n.t("emojiNameInvalid"),!1),B.focus();return}if(!r){showToast(ServerI18n.t("emojiFileRequired"),!1);return}var n=r.name.split(".").pop().toLowerCase();if(!["png","gif","webp"].includes(n)){showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}v.disabled=!0,v.textContent=ServerI18n.t("uploadingStatus");try{var d=new FormData;d.append("name",c),d.append("emojifile",r);var a=await csrfFetch("/admin/emojis/upload",{method:"POST",body:d}),l=await a.json();a.ok?(showToast(l.message||ServerI18n.t("emojiUploadFallback")),B.value="",N.value="",await E()):showToast(l.error||ServerI18n.t("uploadFailed"),!1)}catch(i){console.error("[admin-emojis] upload error:",i),showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{v.disabled=!1,v.textContent=ServerI18n.t("emojisUploadBtnIdle")}}}async function b(B){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("emojisDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteEmoji"),severity:"danger",bodyText:ServerI18n.t("deleteEmojiConfirm").replace("{name}",B),confirmLabel:ServerI18n.t("emojisDeleteConfirm")}))try{var v=await csrfFetch("/admin/emojis/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),c=await v.json();v.ok?(showToast(c.message||ServerI18n.t("emojiDeleteFallback")),await E()):showToast(c.error||ServerI18n.t("deleteFailed"),!1)}catch(r){console.error("[admin-emojis] delete error:",r),showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function C(B){try{await navigator.clipboard.writeText(B),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}catch{var N=document.createElement("textarea");N.value=B,N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N),showToast(ServerI18n.t("copiedLabel").replace("{label}",B))}}function H(){var B=document.getElementById("settings-grid");if(B){B.insertAdjacentHTML("beforeend",U());var N=document.getElementById("emojiUploadBtn");N&&N.addEventListener("click",S);var v=document.getElementById("emojiNameInput");v&&v.addEventListener("keydown",function(a){a.key==="Enter"&&(a.preventDefault(),S())});var c=document.getElementById("emojiSearchInput");c&&c.addEventListener("input",P);var r=document.getElementById("emojiGrid");r&&r.addEventListener("click",function(a){var l=a.target.closest(".emoji-copy-btn");if(l){C(l.dataset.label);return}var i=a.target.closest(".emoji-delete-btn");i&&b(i.dataset.name)});var n=document.querySelector("[data-em-dropzone]"),d=document.getElementById("emojiFileInput");n&&d&&(["dragenter","dragover"].forEach(function(a){n.addEventListener(a,function(l){l.preventDefault(),n.classList.add("is-dragover")})}),["dragleave","drop"].forEach(function(a){n.addEventListener(a,function(l){l.preventDefault(),n.classList.remove("is-dragover")})}),n.addEventListener("drop",function(a){var l=a.dataTransfer&&a.dataTransfer.files&&a.dataTransfer.files[0];if(l){var i=new DataTransfer;i.items.add(l),d.files=i.files;var e=document.getElementById("emojiNameInput");if(e&&!e.value){var o=l.name.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-zA-Z0-9_]/g,"_");e.value=o.slice(0,32),e.focus()}n.classList.add("is-dropping"),setTimeout(function(){n.classList.remove("is-dropping")},1200)}})),w(),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var B=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(f)&&H()});B.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(f)&&H()}})})()});var Tt=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml,k="sec-stickers",g=["png","gif","webp"],f=".gif,.png,.webp",x="__all__",U=[],A=[],_=x;function m(c){return y(c)}function M(){var c=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,r=c?`
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
            ${c?`<div class="admin-ui-card">${r}</div>`:""}

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
    `}function F(c){return c===x?U.length:U.filter(function(r){return r.pack_id===c}).length}function w(){var c=document.getElementById("stickerPackList");if(c){var r='<button type="button" class="admin-stickers-pack'+(_===x?" is-active":"")+'" data-pack="'+x+'"><span class="admin-ui-dot is-success"></span><span class="admin-stickers-pack-name">'+ServerI18n.t("stickersAllPacks")+'</span><span class="admin-stickers-pack-count">'+F(x)+"</span></button>";A.forEach(function(n){var d=n.enabled?"is-success":"is-muted",a="admin-stickers-pack"+(n.id===_?" is-active":""),l=n.id==="default",i=l?"":'<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px"><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="rename" data-pack-id="'+m(n.id)+'" title="'+ServerI18n.t("stickersRenameTitle")+'">\u270E</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="up" data-pack-id="'+m(n.id)+'" title="'+ServerI18n.t("stickersMoveUp")+'">\u2191</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="down" data-pack-id="'+m(n.id)+'" title="'+ServerI18n.t("stickersMoveDown")+'">\u2193</button><button type="button" class="admin-ui-chip admin-sticker-pack-action" data-pack-action="toggle" data-pack-id="'+m(n.id)+'" title="'+(n.enabled?ServerI18n.t("stickersDisable"):ServerI18n.t("stickersEnable"))+'">'+ServerI18n.t(n.enabled?"uiOn":"uiOff")+'</button><button type="button" class="admin-ui-chip is-danger admin-sticker-pack-action" data-pack-action="delete" data-pack-id="'+m(n.id)+'" title="'+ServerI18n.t("stickersDeletePackTitle")+'">'+window.AdminUtils.closeIcon+"</button></div>";r+='<div class="'+a+'" data-pack="'+m(n.id)+'" style="display:flex;flex-direction:column;gap:4px"><button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="'+m(n.id)+'" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%"><span class="admin-ui-dot '+d+'"></span><span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+y(n.name)+'</span><span class="admin-stickers-pack-count">'+F(n.id)+"</span></button>"+i+"</div>"}),c.innerHTML=r}}function E(c){var r=":"+c.name+":";return'<div class="admin-stickers-tile"><img src="'+m(c.url)+'" alt="'+m(r)+'" width="56" height="56" loading="lazy" /><span class="label" title="'+m(r)+'">'+y(r)+'</span><div class="actions"><button type="button" class="admin-ui-chip sticker-copy-btn" data-label="'+m(r)+'" title="'+m(ServerI18n.t("copyToClipboard"))+'">'+y(ServerI18n.t("copyBtn"))+'</button><button type="button" class="admin-ui-chip is-danger sticker-delete-btn" data-name="'+m(c.name)+'" title="'+m(ServerI18n.t("deleteSticker"))+'">'+window.AdminUtils.closeIcon+"</button></div></div>"}function P(){var c=document.getElementById("stickerGrid"),r=document.getElementById("stickerCount");if(c){var n=document.getElementById("stickerSearchInput"),d=(n&&n.value||"").trim().toLowerCase(),a=U.filter(function(i){return!(_!==x&&i.pack_id!==_||d&&!(i.name||"").toLowerCase().includes(d))});if(a.length===0){c.innerHTML="";var l=window.AdminEmpty.renderCustom({icon:"\u25A6",title:ServerI18n.t("noStickersUploaded"),desc:ServerI18n.t("stickersEmptyDesc")});l.dataset.emptyKind="stickers",l.style.gridColumn="1 / -1",c.appendChild(l),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:0}));return}c.innerHTML=a.map(E).join(""),r&&(r.textContent=ServerI18n.t("stickersItemCount",{n:a.length}))}}async function S(){var c=document.getElementById("stickerGrid");if(c)try{var[r,n]=await Promise.all([fetch("/stickers",{method:"GET",credentials:"same-origin"}),window.csrfFetch("/admin/stickers/packs",{method:"GET"})]);if(!r.ok)throw new Error("HTTP "+r.status);U=(await r.json()).stickers||[],A=n.ok?(await n.json()).packs||[]:[],_!==x&&!A.some(function(d){return d.id===_})&&(_=x),window.AdminTabs&&window.AdminTabs.setTabCount&&window.AdminTabs.setTabCount("assets","stickers",A.length?ServerI18n.t("tabCountPacks",{n:A.length}):""),w(),P()}catch(d){console.error("[admin-stickers] fetch failed:",d),c.innerHTML='<div class="admin-stickers-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadStickersFailed"))+"</div>"}}async function b(c,r){if(c==="select"){_=r,w(),P();return}if(c==="rename"){var n=A.find(function($){return $.id===r}),d=prompt(ServerI18n.t("stickersPackNamePrompt"),n?n.name:"");if(!d)return;try{var a=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})}),l=await a.json();a.ok?(window.showToast(ServerI18n.t("stickersToastRenamed")),await S()):window.showToast(l.error||ServerI18n.t("stickersToastRenameFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="toggle"){try{var i=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r)+"/toggle",{method:"POST"});i.ok&&await S()}catch{}return}if(c==="delete"){if(!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeletePackTitle"),subtitle:ServerI18n.t("cfmSubDeletePack"),severity:"danger",body:ServerI18n.t("stickersDeletePackBody"),confirmLabel:ServerI18n.t("stickersDeletePackTitle")}))return;try{var e=await window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(r),{method:"DELETE"}),o=await e.json();e.ok?(window.showToast(ServerI18n.t("stickersToastPackDeleted")),_===r&&(_=x),await S()):window.showToast(o.error||ServerI18n.t("stickersToastDeleteFailed"),!1)}catch{window.showToast("Network error",!1)}return}if(c==="up"||c==="down"){var h=A.slice().sort(function($,I){return($.order||0)-(I.order||0)}),t=h.findIndex(function($){return $.id===r});if(t<0)return;var s=c==="up"?t-1:t+1;if(s<0||s>=h.length)return;var u=h[t],p=h[s];try{await Promise.all([window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(u.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:p.order||0})}),window.csrfFetch("/admin/stickers/packs/"+encodeURIComponent(p.id)+"/reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:u.order||0})})]),await S()}catch{}}}async function C(){var c=prompt(ServerI18n.t("stickersNewPackPrompt"));if(c)try{var r=await window.csrfFetch("/admin/stickers/packs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})}),n=await r.json();r.ok?(window.showToast(ServerI18n.t("stickersToastPackCreated")),_=n.pack&&n.pack.id?n.pack.id:_,await S()):window.showToast(n.error||ServerI18n.t("stickersToastCreateFailed"),!1)}catch{window.showToast("Network error",!1)}}async function H(){var c=document.getElementById("stickerFileInput"),r=document.getElementById("stickerUploadBtn");if(!(!c||!r)){var n=c.files&&c.files[0];if(!n){window.showToast(ServerI18n.t("stickerFileRequired"),!1);return}var d=n.name.split(".").pop().toLowerCase();if(g.indexOf(d)===-1){window.showToast(ServerI18n.t("emojiInvalidFileType"),!1);return}r.disabled=!0;var a=r.textContent;r.textContent=ServerI18n.t("uploadingStatus");try{var l=new FormData;l.append("file",n),_&&_!==x&&l.append("pack_id",_);var i=await window.csrfFetch("/admin/upload_sticker",{method:"POST",body:l}),e=await i.json();i.ok?(window.showToast(e.message||ServerI18n.t("stickerUploadFallback")),c.value="",await S()):window.showToast(e.error||ServerI18n.t("uploadFailed"),!1)}catch(o){console.error("[admin-stickers] upload error:",o),window.showToast(ServerI18n.t("uploadNetworkError"),!1)}finally{r.disabled=!1,r.textContent=a}}}async function B(c){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("stickersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteSticker"),severity:"danger",bodyText:ServerI18n.t("deleteStickerConfirm").replace("{name}",c),confirmLabel:ServerI18n.t("stickersDeleteConfirm")}))try{var n=await window.csrfFetch("/admin/stickers/"+encodeURIComponent(c),{method:"DELETE"}),d=await n.json();n.ok?(window.showToast(d.message||ServerI18n.t("stickerDeleteFallback")),await S()):window.showToast(d.error||ServerI18n.t("deleteFailed"),!1)}catch(a){console.error("[admin-stickers] delete error:",a),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}async function N(c){try{await navigator.clipboard.writeText(c),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}catch{var r=document.createElement("textarea");r.value=c,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),window.showToast(ServerI18n.t("copiedLabel").replace("{label}",c))}}function v(){var c=document.getElementById("settings-grid");if(c){c.insertAdjacentHTML("beforeend",M());var r=document.getElementById("stickerUploadBtn");r&&r.addEventListener("click",H);var n=document.getElementById("stickerPackAddBtn");n&&n.addEventListener("click",C);var d=document.getElementById("stickerSearchInput");d&&d.addEventListener("input",P);var a=document.getElementById("stickerPackList");a&&a.addEventListener("click",function(i){var e=i.target.closest("[data-pack-action]");if(!e){var o=i.target.closest("[data-pack]");o&&b("select",o.dataset.pack);return}var h=e.dataset.packAction,t=e.dataset.packId;h==="select"&&!t&&(t=e.closest("[data-pack]")&&e.closest("[data-pack]").dataset.pack),b(h,t)});var l=document.getElementById("stickerGrid");l&&l.addEventListener("click",function(i){var e=i.target.closest(".sticker-copy-btn");if(e){N(e.dataset.label);return}var o=i.target.closest(".sticker-delete-btn");o&&B(o.dataset.name)}),S()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(k)&&v()});c.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(k)&&v()}})})()});var _t=ve(()=>{(function(){"use strict";let y="sec-extensions-overview",k=window.AdminUtils.escapeHtml,g=15e3,f=[{id:"slido",name:"Slido Extension",version:"v0.2.0",icon:"\u25A6",color:"var(--color-ink-accent)",descKey:"extSlidoDesc",status:"ready",sourceMatch:"slido",install:{steps:[{kind:"download",labelKey:"extSlidoStepDownload",href:"/static/extensions/danmu-slido-extension-0.2.0.zip"},{kind:"config",labelKey:"extSlidoStepConfig"}]},hasFireTokenUI:!0},{id:"discord",name:"Discord Bridge",version:"\u2014",icon:"\u2709",color:"var(--color-ink-theme)",descKey:"extDiscordDesc",status:"soon",sourceMatch:"discord"},{id:"obs",name:"OBS Plugin",version:"\u2014",icon:"\u25CE",color:"var(--color-ink-success)",descKey:"extObsDesc",status:"soon",sourceMatch:"obs"},{id:"bookmarklet",name:"Bookmarklet",version:"\u2014",icon:"\u2726",color:"var(--color-ink-warning)",descKey:"extBookmarkletDesc",status:"soon",sourceMatch:"bookmarklet"}],x={fireToken:null,plainToken:null,sources:[],sourcesTimer:0};function U(){return`
      <div id="${y}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote")}</p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${f.map(A).join("")}
        </div>
      </div>`}function A(b){let C=b.status==="ready",H="is-cold",B=C?`<span class="admin-ext-flag is-ready">${ServerI18n.t("lbReady")}</span>`:`<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`,N=C&&b.install?`<div class="admin-ext-install">
          <div class="admin-ui-monolabel">${ServerI18n.t("uiSectionInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${b.install.steps.map(c=>c.kind==="download"?`<li><a class="admin-ext-step-link" href="${c.href}" target="_blank" rel="noopener noreferrer">${k(ServerI18n.t(c.labelKey))} \u2193</a></li>`:`<li>${k(ServerI18n.t(c.labelKey))}</li>`).join("")}
          </ol>
        </div>`:"",v=b.hasFireTokenUI?`<div class="admin-ext-token" data-ext-token>
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
        ${v}
      </article>`}async function _(){try{let b=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!b.ok)return;x.fireToken=await b.json(),E()}catch{}}async function m(){try{let b=await fetch("/admin/integrations/sources/recent",{credentials:"same-origin"});if(!b.ok)return;let C=await b.json();x.sources=Array.isArray(C.sources)?C.sources:[],P()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);let H=await C.json();x.fireToken={enabled:H.enabled,prefix:H.prefix,has_token:!0,rotated_at:H.rotated_at},x.plainToken=H.token,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenGenerated"),!0),w(H.token)}catch(C){console.warn("[ext] regen failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let C=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!C.ok)throw new Error("HTTP "+C.status);x.fireToken=await C.json(),x.plainToken=null,E(),window.showToast&&window.showToast(ServerI18n.t("extToastTokenRevoked"),!0)}catch(C){console.warn("[ext] revoke failed:",C),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function w(b){if(b)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(b).catch(()=>{});else{let C=document.createElement("textarea");C.value=b,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}}function E(){let b=document.querySelector("[data-fire-token-display]"),C=document.querySelector('[data-fire-token-action="copy"]'),H=document.querySelector('[data-fire-token-action="regen"]'),B=document.querySelector('[data-fire-token-action="revoke"]');if(!b)return;let N=x.fireToken;x.plainToken?(b.textContent=x.plainToken,b.classList.add("is-plain")):N&&N.has_token?(b.textContent=ServerI18n.t("extTokenPrefixHint",{prefix:N.prefix||""}),b.classList.remove("is-plain")):(b.textContent=ServerI18n.t("extTokenNotSetHint"),b.classList.remove("is-plain")),C&&(C.disabled=!x.plainToken),H&&(H.textContent=N&&N.has_token?ServerI18n.t("extTokenRegenerateLabel"):ServerI18n.t("firetokenGenerateBtn")),B&&(B.disabled=!(N&&N.has_token))}function P(){let b=new Set(x.sources.map(C=>C.source));document.querySelectorAll(".admin-ext-card").forEach(C=>{let H=f.find(v=>v.id===C.dataset.ext);if(!H)return;let B=C.querySelector("[data-ext-dot]");if(!B)return;let N=H.sourceMatch&&b.has(H.sourceMatch);B.classList.toggle("is-live",!!N),B.classList.toggle("is-cold",!N)})}function S(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",U());let C=document.getElementById(y);C&&C.addEventListener("click",H=>{let B=H.target.closest("[data-fire-token-action]");if(!B)return;let N=B.dataset.fireTokenAction;N==="regen"?M():N==="revoke"?F():N==="copy"&&x.plainToken&&(w(x.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),_(),x.stopPoll||(x.stopPoll=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(y)},intervalMs:g,tick:m}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&S()})})()});var Et=ve(()=>{(function(){"use strict";let y="sec-firetoken-overview",k=window.AdminUtils.escapeHtml,g=15e3,f={token:null,plainToken:null,usage24h:[],ips:[],audit:[],pollTimer:0};function x(){return`
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
    `}async function U(){await Promise.all([A(),_(),m()])}async function A(){try{let v=await fetch("/admin/integrations/fire-token",{credentials:"same-origin"});if(!v.ok)return;f.token=await v.json(),S()}catch{}}async function _(){try{let v=await fetch("/admin/integrations/fire-token/usage",{credentials:"same-origin"});if(!v.ok)return;let c=await v.json();f.usage24h=Array.isArray(c.usage_24h)?c.usage_24h:[],f.ips=Array.isArray(c.ips)?c.ips:[],C(),H(),b()}catch{}}async function m(){try{let v=await fetch("/admin/integrations/fire-token/audit?limit=20",{credentials:"same-origin"});if(!v.ok)return;let c=await v.json();f.audit=Array.isArray(c.events)?c.events:[],B()}catch{}}async function M(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("firetokenRegenModalTitle"),subtitle:ServerI18n.t("cfmSubRotateToken"),severity:"warn",body:ServerI18n.t("firetokenRegenModalBody"),confirmLabel:ServerI18n.t("firetokenRegenModalConfirm")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/regenerate",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);let r=await c.json();f.token={enabled:r.enabled,prefix:r.prefix,has_token:!0,rotated_at:r.rotated_at,created_at:r.created_at||r.rotated_at},f.plainToken=r.token,S(),w(r.token),window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerated"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastGenerateFailed"),!1)}}async function F(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("firetokenRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeToken"),severity:"danger",body:ServerI18n.t("firetokenRevokeModalBody"),confirmLabel:ServerI18n.t("firetokenRevokeBtn")}))try{let c=await window.csrfFetch("/admin/integrations/fire-token/revoke",{method:"POST"});if(!c.ok)throw new Error("HTTP "+c.status);f.token=await c.json(),f.plainToken=null,S(),window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevoked"),!0),m()}catch{window.showToast&&window.showToast(ServerI18n.t("firetokenToastRevokeFailed"),!1)}}function w(v){if(v)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).catch(()=>{});else{let c=document.createElement("textarea");c.value=v,c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select();try{document.execCommand("copy")}catch{}document.body.removeChild(c)}}function E(v){if(!v)return"\u2014";let c=Date.now()/1e3-v;return c<60?ServerI18n.t("firetokenJustNow"):c<3600?ServerI18n.t("firetokenMinutesAgo",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("firetokenHoursAgo",{n:Math.floor(c/3600)}):ServerI18n.t("firetokenDaysAgo",{n:Math.floor(c/86400)})}function P(v){if(!v)return"\u2014";try{return new Date(v*1e3).toISOString().replace("T"," ").slice(0,16)}catch{return"\u2014"}}function S(){let v=f.token,c=document.querySelector("[data-ft-token-display]"),r=document.querySelector("[data-ft-status]"),n=document.querySelector('[data-ft-action="copy"]'),d=document.querySelector('[data-ft-action="regen"]'),a=document.querySelector('[data-ft-action="revoke"]'),l=document.querySelector('[data-ft-stat="created"]'),i=document.querySelector('[data-ft-stat="rotated"]'),e=document.getElementById("adminFtCurl");if(c&&(f.plainToken?(c.textContent=f.plainToken,c.classList.add("is-plain")):v&&v.has_token?(c.textContent=(v.prefix||"")+" \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c.classList.remove("is-plain")):(c.textContent=ServerI18n.t("firetokenNotSetHint"),c.classList.remove("is-plain")),r&&(v&&v.enabled&&v.has_token?(r.textContent=ServerI18n.t("firetokenStatusHealthy"),r.className="admin-ft-status is-good"):v&&v.has_token?(r.textContent=ServerI18n.t("firetokenStatusDisabled"),r.className="admin-ft-status is-warn"):(r.textContent=ServerI18n.t("firetokenStatusUnset"),r.className="admin-ft-status is-muted")),n&&(n.disabled=!f.plainToken),a&&(a.disabled=!(v&&v.has_token)),d&&(d.textContent=v&&v.has_token?ServerI18n.t("firetokenRegenBtn"):ServerI18n.t("firetokenGenerateBtn")),l&&(l.textContent=v?P(v.created_at):"\u2014"),i&&(i.textContent=v?E(v.rotated_at):"\u2014"),e)){let o=f.plainToken?f.plainToken:v&&v.prefix?v.prefix.replace("\u2026","\u2026<full token>"):"<your-token>";e.textContent=`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${o}' \\
  -d '{"text":"${ServerI18n.t("firetokenCurlSampleText")}","color":"#7dd3fc","size":48}'`}}function b(){let v=f.usage24h.map(l=>Number(l)||0),c=v.reduce((l,i)=>l+i,0),r=v.length?Math.max(...v):0,n=document.querySelector('[data-ft-stat="hits"]'),d=document.querySelector('[data-ft-stat="peak"]'),a=document.querySelector("[data-ft-peak-meta]");n&&(n.textContent=c.toLocaleString()),d&&(d.textContent=r.toLocaleString()),a&&(a.textContent=ServerI18n.t("firetokenPeakMeta",{peak:r.toLocaleString()}))}function C(){let v=document.getElementById("adminFtChart24h");if(!v)return;let c=f.usage24h.map(a=>Number(a)||0);if(!c.length){v.innerHTML=`<div class="admin-ft-chart-empty">${ServerI18n.t("firetokenNoChartData")}</div>`;return}let r=Math.max(...c),n=12e3,d=r>0?Math.min(100,n/Math.max(r,n)*100):100;v.innerHTML=`
      <div class="admin-ft-chart-bars">
        ${c.map((a,l)=>{let i=r>0?Math.max(2,a/r*100):2;return`<div class="bar ${r>0&&a===r?"is-peak":""}" style="height:${i}%" title="${l.toString().padStart(2,"0")}:00 \u2014 ${a}"></div>`}).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0,4,8,12,16,20].map(a=>`<span>${String(a).padStart(2,"0")}:00</span>`).join("")}
      </div>`}function H(){let v=document.getElementById("adminFtIps"),c=document.querySelector("[data-ft-ip-count]");if(!v)return;let r=f.ips||[];if(c&&(c.textContent=r.length?`${r.length} IP`:"\u2014"),!r.length){v.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoTraffic")}</div>`;return}let n=r[0]?.ip;v.innerHTML=r.map((d,a)=>{let l=a===0,i=d.source==="web"&&(d.ua||"").length<8;return`
        <div class="admin-ft-ip-row ${l?"is-top":""}">
          <span class="ip">${k(d.ip||"?")}</span>
          ${l?`<span class="tag is-top">${ServerI18n.t("uiTop")}</span>`:""}
          ${i?'<span class="tag is-warn">\u26A0 UA</span>':""}
          <span class="src">${k(d.source||"\u2014")}</span>
          <span class="cnt">${d.count||0} hits</span>
          <span class="when">${E(d.last_seen)}</span>
        </div>`}).join("")}function B(){let v=document.getElementById("adminFtAudit");if(!v)return;let c=f.audit||[];if(!c.length){v.innerHTML=`<div class="admin-ft-audit-empty">${ServerI18n.t("firetokenNoEvents")}</div>`;return}let r={rotated:ServerI18n.t("firetokenKindRotated"),revoked:ServerI18n.t("firetokenKindRevoked"),toggled:ServerI18n.t("firetokenKindToggled")},n={rotated:"is-rotated",revoked:"is-revoked",toggled:"is-toggled"};v.innerHTML=c.map(d=>{let a=n[d.kind]||"is-info",l=r[d.kind]||d.kind,i=d.meta||{},e=i.prefix?` \xB7 prefix=${k(i.prefix)}`:i.enabled!=null?` \xB7 enabled=${i.enabled}`:"";return`
        <div class="admin-ft-audit-row ${a}">
          <span class="ts">${P(d.ts)}</span>
          <span class="kind">${k(l)}</span>
          <span class="detail">${e}</span>
        </div>`}).join("")}function N(){let v=document.getElementById("settings-grid");if(!v||document.getElementById(y))return;v.insertAdjacentHTML("beforeend",x());let c=document.getElementById(y);c&&c.addEventListener("click",r=>{let n=r.target.closest("[data-ft-action]");if(!n)return;let d=n.dataset.ftAction;d==="regen"?M():d==="revoke"?F():d==="copy"&&f.plainToken&&(w(f.plainToken),window.showToast&&window.showToast(ServerI18n.t("firetokenToastCopied"),!0))}),f.stopPoll||(f.stopPoll=window.AdminUtils.pollWhileVisible({el:()=>document.getElementById(y),intervalMs:g,tick:U}))}document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&N()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&N()})})()});var $t=ve(()=>{(function(){"use strict";let y="sec-about-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(B){return String(B).replace(/[&<>"']/g,function(N){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[N]})},g="Danmu Fire",f="https://github.com/guan4tou2/danmu-desktop",x=[{v:"5.3.1",d:"2026-05-20",tag:"current",notes:[{t:"fix",l:"Portable-only \u767C\u4F48\u6253\u5305 \xB7 Windows \u53EA\u51FA portable x64 \xB7 macOS \u53EA\u51FA arm64 ZIP \xB7 \u505C\u7528 NSIS/DMG"},{t:"fix",l:"Release notes \u8A3B\u660E portable-only \u653F\u7B56\u8207 macOS ad-hoc \u7C3D\u7AE0 / \u672A\u516C\u8B49\u9650\u5236"}]},{v:"5.3.0",d:"2026-05-20",tag:"",notes:[{t:"feat",l:"Desktop \u986F\u793A\u5BA2\u6236\u7AEF\u5B9A\u6848 \xB7 \u5C0D\u9F4A v3 \u8A2D\u8A08 \xB7 \u79FB\u9664\u9000\u5F79 setup-wizard / bridge / debug \u8DEF\u5F91"},{t:"feat",l:"WebSocket runtime \u7D71\u4E00\u81F3 Flask /ws \u8DEF\u7531 \xB7 CI \u79FB\u9664\u820A 4001 \u5047\u8A2D \xB7 Docker smoke \u8986\u84CB"},{t:"fix",l:"\u79FB\u9664 admin \u547D\u4EE4\u9762\u677F debug log fallback \xB7 sidebar IA + regression guard \u9396\u5B9A"},{t:"fix",l:"\u76F8\u4F9D\u4E0B\u9650\u63D0\u5347 idna>=3.15 \xB7 pip-audit \u4FDD\u7559 scoped flask-cors \u5FFD\u7565\u8A3B\u8A18"}]},{v:"5.2.0",d:"2026-05-19",tag:"",notes:[{t:"feat",l:"Danmu Redesign v5 finish \xB7 Batch 12 closes design coverage 22/28 \u2192 28/28"},{t:"feat",l:"BE audience module \xB7 risk score \xB7 flag / kick / unkick \xB7 /admin/audience/*"},{t:"feat",l:"BE backup pack \xB7 .tar.gz export / dry-run / atomic apply \xB7 /admin/backup/*"},{t:"feat",l:"Help Drawer v5 \xB7 360 px route-aware tips + shortcuts + glossary + resources"},{t:"feat",l:"Webhook event vocab 3 \u2192 10 \xB7 toggle endpoint \xB7 session/Desktop/plugin emit sites"},{t:"feat",l:"/admin/search filters \xB7 since/until/type/fp/status \xB7 custom date range"},{t:"fix",l:"\u25D0 \u986F\u793A\u8A2D\u5B9A retired \xB7 merged into viewer 4-tab (page/fields/defaults/limits)"}]},{v:"5.1.0",d:"2026-05-18",tag:"",notes:[{t:"feat",l:"Polestar pivot \xB7 #/broadcast \u2192 #/overlay \xB7 Desktop on/off \u5225\u540D \xB7 4-state UI (off/on/paused/ended)"},{t:"feat",l:"Brief 0518 \u7CFB\u5217 \xB7 replay annotations \xB7 time-bound bans \xB7 sessions bucket \xB7 \u591A\u984C polls + \u5716\u7247 \xB7 fonts subset"},{t:"feat",l:"Moderation 6 sub-tabs \xB7 \u5BE9\u6838\u4F47\u5217 / \u5C01\u7981 / \u9ED1\u540D\u55AE / \u654F\u611F\u5B57 / \u901F\u7387 / \u6307\u7D0B"},{t:"feat",l:"Viewer mobile hamburger sheet \xB7 \u684C\u6A5F \u263C/\u25D0/\u263E theme chip \xB7 \u66B1\u7A31\u6D6E\u52D5 popover"},{t:"feat",l:"P0-0 IA migration \xB7 sidebar 8-area flat \u2192 5-section grouped (\u7E3D\u89BD/\u4E92\u52D5/\u5BE9\u6838/\u8A2D\u5B9A/\u6574\u5408)"}]},{v:"5.0.0",d:"2026-04-25",tag:"",notes:[{t:"feat",l:"Design v2 retrofit \xB7 22 commit sprint \xB7 \u6574\u5957 admin shell + 10 \u500B page \u91CD\u69CB"},{t:"feat",l:"\u2318K \u547D\u4EE4\u9762\u677F \xB7 effects 8-card live preview \xB7 Edge state pages"},{t:"feat",l:"Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline"},{t:"feat",l:"Sidebar \u6574\u4F75 \xB7 20 \u2192 17 row \xB7 history/viewer-config \u52A0 2-tab strip"}]},{v:"4.8.7",d:"2026-04-22",tag:"",notes:[{t:"feat",l:"Design tokens (shared/tokens.css) \xB7 type scale \xB7 4px spacing grid"},{t:"feat",l:"Effects .dme \u71B1\u63D2\u62D4 \xB7 8 \u500B\u5167\u5EFA\u6548\u679C \xB7 5 \u79D2\u6383\u76EE\u9304"},{t:"fix",l:"WebKit slider track \u986F\u793A cyan progress"}]},{v:"4.8.0",d:"2026-04-18",tag:"",notes:[{t:"feat",l:"WS Token live-state auth \xB7 \u6301\u4E45\u5316 + chmod 0o600"},{t:"feat",l:"ProxyFix wrapper \xB7 X-Forwarded-For \u4FE1\u4EFB"},{t:"fix",l:"graceful-degradation on unwritable disk"}]},{v:"4.6.0",d:"2026-04-19",tag:"",notes:[{t:"feat",l:"Electron build \xB7 macOS / Windows / Ubuntu \xB7 6 binaries"},{t:"feat",l:"auto-update flow \xB7 GitHub Release manifest"},{t:"feat",l:"skip-link \xB7 WCAG \xB7 prefers-reduced-motion"}]}],U=[{n:"Flask",v:"3.x",l:"BSD-3"},{n:"Electron",v:"32.x",l:"MIT"},{n:"Tailwind CSS",v:"3.x",l:"MIT"},{n:"Playwright",v:"1.x",l:"Apache-2.0"},{n:"Werkzeug",v:"3.x",l:"BSD-3"},{n:"websockets",v:"12.x",l:"BSD-3"},{n:"marshmallow",v:"3.x",l:"MIT"}],A="danmu.about.lastUpdateCheck",_={serverStartedAt:0,serverTime:0,appVersion:"\u2014",latestVersion:null,lastCheckedAt:0,isLatest:null};function m(){return`
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
              <a class="admin-about-changelog-more" href="${f}/releases" target="_blank" rel="noopener noreferrer">${ServerI18n.t("aboutFullChangelog")}</a>
            </div>
            ${x.slice(0,4).map(B=>`
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
      </div>`}function M(B){if(!B||B<0)return"\u2014";let N=Math.floor(B/86400),v=Math.floor(B%86400/3600),c=Math.floor(B%3600/60);return N>0?`${N}d ${v}h`:v>0?`${v}h ${c}m`:`${c}m`}function F(){let B=document.querySelector("[data-about-tag]"),N=document.querySelector("[data-about-build]"),v=document.querySelector("[data-about-uptime]"),c=document.querySelector("[data-about-update]"),r=document.querySelector("[data-about-checked]"),n=document.querySelector("[data-about-env]"),d=document.querySelector("[data-about-ws-path]");if(B&&(B.textContent=`v${_.appVersion}`),N){let a=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production";N.textContent=`BUILD \xB7 ${a} \xB7 stable channel`,n&&(n.textContent=a)}if(v){let a=_.serverStartedAt?_.serverTime-_.serverStartedAt:0;v.textContent=M(a)}if(c&&(_.isLatest===!0?c.textContent=ServerI18n.t("aboutIsLatestYes"):_.isLatest===!1?c.textContent=ServerI18n.t("aboutHasNewVersion",{v:_.latestVersion||""}):c.textContent="\u2014",c.style.color=_.isLatest===!0?"var(--hud-lime)":_.isLatest===!1?"var(--hud-amber)":""),r&&(r.textContent=_.lastCheckedAt?ServerI18n.t("aboutCheckedAgo",{t:w(_.lastCheckedAt)}):ServerI18n.t("aboutNeverChecked")),d){let a=window.DANMU_CONFIG||{};d.textContent=a.wsPath||"/ws"}}function w(B){let N=Number(B)||0;if(!N)return"\u2014";let v=String(N).length>12?N:N*1e3,c=(Date.now()-v)/1e3;return c<60?ServerI18n.t("aboutDeltaSec",{n:Math.floor(c)}):c<3600?ServerI18n.t("aboutDeltaMin",{n:Math.floor(c/60)}):c<86400?ServerI18n.t("aboutDeltaHour",{n:Math.floor(c/3600)}):ServerI18n.t("aboutDeltaDay",{n:Math.floor(c/86400)})}function E(B,N){let v=d=>String(d||"").replace(/^v/i,"").split("-")[0].split(".").map(function(a){return parseInt(a,10)||0}),c=v(B),r=v(N),n=Math.max(c.length,r.length);for(let d=0;d<n;d++){let a=c[d]||0,l=r[d]||0;if(a>l)return!0;if(a<l)return!1}return!1}async function P({silent:B}={}){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastChecking"),!0);try{let N=await fetch("https://api.github.com/repos/guan4tou2/danmu-desktop/releases/latest",{headers:{Accept:"application/vnd.github+json"}});if(!N.ok)throw new Error("HTTP "+N.status);let c=((await N.json()).tag_name||"").replace(/^v/i,"");_.latestVersion=c,_.lastCheckedAt=Date.now(),_.isLatest=!E(c,_.appVersion);try{localStorage.setItem(A,JSON.stringify({ts:_.lastCheckedAt,latest:c,isLatest:_.isLatest}))}catch{}F(),B||window.showToast&&window.showToast(_.isLatest?ServerI18n.t("aboutToastLatest",{v:_.appVersion}):ServerI18n.t("aboutToastNewVersion",{tag:c}),!0)}catch(N){B||window.showToast&&window.showToast(ServerI18n.t("aboutToastCheckFailed",{msg:N.message||""}),!1)}}function S(){try{let B=localStorage.getItem(A);if(!B)return;let N=JSON.parse(B);_.latestVersion=N.latest,_.lastCheckedAt=Number(N.ts)||0,_.isLatest=!!N.isLatest}catch{}}async function b(){try{let B=await fetch("/admin/metrics",{credentials:"same-origin"});if(!B.ok)return;let N=await B.json();_.serverStartedAt=Number(N.server_started_at)||0,_.serverTime=Number(N.server_time)||Date.now()/1e3,F()}catch{}}function C(){let B=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.environment||"production",N=_.serverStartedAt?_.serverTime-_.serverStartedAt:0,v=(navigator.userAgent||"").slice(0,200),c=[`${g} v${_.appVersion}`,`Channel: ${B}`,`Uptime: ${M(N)}`,`User-Agent: ${v}`,`URL: ${location.origin}`].join(`
`);navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopied"),!0)}).catch(()=>{window.showToast&&window.showToast(ServerI18n.t("aboutToastCopyDenied"),!1)}):window.showToast&&window.showToast(ServerI18n.t("aboutToastNoClipboard"),!1)}function H(){let B=document.getElementById("settings-grid");if(!B||document.getElementById(y))return;B.insertAdjacentHTML("beforeend",m()),_.appVersion=window.DANMU_CONFIG&&(window.DANMU_CONFIG.appVersion||window.DANMU_CONFIG.app_version)||"\u2014",S(),F();let N=document.getElementById(y);N&&N.addEventListener("click",function(v){let c=v.target.closest("[data-about-action]");if(!c)return;let r=c.dataset.aboutAction;r==="copy"?C():r==="check-update"?P({silent:!1}):r==="setup-wizard"?window.AdminSetupWizard&&typeof window.AdminSetupWizard.open=="function"&&window.AdminSetupWizard.open():r==="onboarding"&&window.AdminOnboarding&&typeof window.AdminOnboarding.start=="function"&&(window.AdminOnboarding.reset(),window.AdminOnboarding.start())}),b(),setInterval(b,3e4)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&H()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&H()})})()});var xt=ve(()=>{(function(){"use strict";let y="admin-setup-wizard-root",k="danmu.setupWizard.completed",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(e){return String(e).replace(/[&<>"']/g,function(o){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[o]})},f=[{id:"server",labelKey:"setupWizardStepServer"},{id:"theme",labelKey:"setupWizardStepTheme"},{id:"moderation",labelKey:"setupWizardStepModeration"},{id:"done",labelKey:"setupWizardStepDone"}],x=[{name:"default",labelKey:"setupWizardThemeDefaultLabel",descriptionKey:"setupWizardThemeDefaultDesc",colors:["#7dd3fc","#e2e8f0","#fbbf24","#86efac"]},{name:"neon",labelKey:"setupWizardThemeNeonLabel",descriptionKey:"setupWizardThemeNeonDesc",colors:["#38bdf8","#fbbf24","#86efac","#f87171"]},{name:"retro",labelKey:"setupWizardThemeRetroLabel",descriptionKey:"setupWizardThemeRetroDesc",colors:["#f97316","#facc15","#fb7185","#60a5fa"]},{name:"cinema",labelKey:"setupWizardThemeCinemaLabel",descriptionKey:"setupWizardThemeCinemaDesc",colors:["#f5d08a","#fef3c7","#94a3b8","#e5e7eb"]}];function U(e){return e?e.label?e.label:e.labelKey?ServerI18n.t(e.labelKey):e.name||e.id||"\u2014":"\u2014"}function A(e){return e?e.descriptionKey?ServerI18n.t(e.descriptionKey):e.description||"":""}let _={open:!1,step:0,themes:x.slice(),activeTheme:x[0].name,selectedTheme:x[0].name,publicUrl:"",moderationRules:[{id:"ratelimit",labelKey:"setupWizardModRateLimitLabel",descKey:"setupWizardModRateLimitDesc",route:"moderation/ratelimit"},{id:"words",labelKey:"setupWizardModSensitiveLabel",descKey:"setupWizardModSensitiveDesc",route:"moderation/blacklist"},{id:"bans",labelKey:"setupWizardModFingerprintLabel",descKey:"setupWizardModFingerprintDesc",route:"moderation/bans"}],readiness:null};function m(){_.publicUrl=window.location.origin+"/"}function M(){let e=(window.location.hash.match(/^#\/(\w[\w-]*)/)||[])[1]||"";e==="setup"&&!_.open?F():e!=="setup"&&_.open&&w({silent:!0})}function F(){_.open=!0,_.step=0,m(),document.body.dataset.setupWizardOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",E()),c()),n(),b(),P()}function w(e){let o=e&&e.silent;_.open=!1,document.body.dataset.setupWizardOpen="";let h=document.getElementById(y);if(h&&h.remove(),!o&&window.location.hash==="#/setup"){try{history.replaceState(null,"","#/dashboard")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function E(){return`
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
            ${f.map(function(e,o){return`
                <div class="admin-setup-step" data-step-index="${o}">
                  <span class="bullet">${o+1}</span>
                  <span class="lbl">${g(ServerI18n.t(e.labelKey))}</span>
                </div>
                ${o<f.length-1?'<span class="admin-setup-step-sep"></span>':""}
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
      </div>`}function P(){let e=document.getElementById(y);if(!e)return;e.querySelectorAll(".admin-setup-step").forEach(function($,I){$.classList.toggle("is-done",I<_.step),$.classList.toggle("is-active",I===_.step)}),e.querySelectorAll(".admin-setup-step-sep").forEach(function($,I){$.classList.toggle("is-done",I<_.step)});let o=e.querySelector("[data-setup-meta]");o&&(o.textContent=ServerI18n.t("setupWizardStepMeta",{current:_.step+1,total:f.length}));let h=e.querySelector('[data-setup-action="prev"]');h&&(h.disabled=_.step===0);let t=e.querySelector('[data-setup-action="next"]');if(t){let $=f[_.step].id;t.textContent=ServerI18n.t("setupWizardNext")}let s=e.querySelector("[data-setup-foot]");s&&(s.hidden=f[_.step].id==="done");let u=e.querySelector("[data-setup-content]");if(!u)return;let p=f[_.step].id;p==="server"?u.innerHTML=S():p==="moderation"?u.innerHTML=C():p==="theme"?u.innerHTML=N():u.innerHTML=v(),r(p)}function S(){let e=_.readiness,o=e?Number(e.overlay_count)||0:null,h=o!==null&&o>0,s=[{ok:!0,title:ServerI18n.t("setupWizardReadyServer"),value:_.publicUrl},{ok:h,unknown:o===null,title:ServerI18n.t("setupWizardReadyDisplay"),value:h?ServerI18n.t("setupWizardReadyDisplayOk",{n:o}):ServerI18n.t("setupWizardReadyDisplayNone"),goto:"#/overlay"},{ok:!!(_.activeTheme||_.selectedTheme),title:ServerI18n.t("setupWizardReadyTheme"),value:U(_.themes.filter(function(u){return(u.name||u.id)===(_.selectedTheme||_.activeTheme)})[0]||_.themes[0])},{ok:!1,title:ServerI18n.t("setupWizardReadyViewerTest"),value:ServerI18n.t("setupWizardReadyViewerTestDesc"),goto:"#/viewer"}].map(function(u){let p=u.unknown?"is-unknown":u.ok?"is-done":"is-pending",$=u.unknown?"?":u.ok?"\u2713":"!",I='<span class="admin-setup-ready-title">'+g(u.title)+'</span><span class="admin-setup-ready-value">'+g(u.value||"")+"</span>",L=u.goto?'<a class="admin-setup-ready-go" href="'+u.goto+'" data-setup-goto="'+u.goto+'">'+g(ServerI18n.t("setupWizardModGo"))+'<span aria-hidden="true">\u203A</span></a>':"";return'<div class="admin-setup-ready-row '+p+'"><span class="admin-setup-ready-mark" aria-hidden="true">'+$+"</span>"+I+L+"</div>"}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepServer"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardServerDesc"))}</p>
        <div class="admin-setup-ready-list">${s}</div>
      </div>`}async function b(){try{let e=await fetch("/overlay_status",{credentials:"same-origin"});if(!e.ok)throw new Error("HTTP "+e.status);let o=await e.json();_.readiness={overlay_count:Number(o.overlay_count)||0,mode:o.mode||""}}catch{_.readiness=null}_.open&&f[_.step].id==="server"&&P()}function C(){let e=_.moderationRules.map(function(o){return`
        <a class="admin-setup-mod-row" href="#/${o.route}" data-setup-goto="#/${o.route}">
          <span class="admin-setup-mod-body">
            <span class="admin-setup-mod-title">${g(ServerI18n.t(o.labelKey))}</span>
            <span class="admin-setup-mod-desc">${g(ServerI18n.t(o.descKey))}</span>
          </span>
          <span class="admin-setup-mod-go">${g(ServerI18n.t("setupWizardModGo"))}<span aria-hidden="true">\u203A</span></span>
        </a>`}).join("");return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${g(ServerI18n.t("setupWizardStepModeration"))}</h2>
        <p class="admin-setup-step-desc">${g(ServerI18n.t("setupWizardModerationDesc"))}</p>
        <div class="admin-setup-mod-list">${e}</div>
      </div>`}let H=["default","neon","retro","cinema"];function B(){let e={};return(_.themes||[]).forEach(function(o){e[o.name||o.id]=o}),H.map(function(o){let h=x.filter(function(s){return s.name===o})[0],t=e[o];return h?{name:o,label:t&&t.label,labelKey:h.labelKey,descriptionKey:h.descriptionKey,colors:h.colors}:t}).filter(Boolean)}function N(){let e=B();return`
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${e.map(function(o){let h=o.name||o.id||"",t=(_.selectedTheme||_.activeTheme)===h,s=(o.colors||[]).slice(0,4);return`
              <button type="button" class="admin-setup-theme-card${t?" is-selected":""}" data-setup-theme="${g(h)}">
                ${t?'<span class="admin-setup-theme-check">\u2713</span>':""}
                <div class="admin-setup-theme-swatch">
                  ${s.map(function(u,p){let $=["+1",ServerI18n.t("setupWizardThemeSwatchLaugh"),"\u{1F525}","\u2728"];return`<span class="admin-setup-theme-swatch-token" style="color:${g(u)};font-size:${10+p*2}px;text-shadow:0 0 6px ${g(u)}66;">${$[p]||"\xB7"}</span>`}).join("")}
                </div>
                <div class="admin-setup-theme-name">${g(U(o))}</div>
                <div class="admin-setup-theme-sub">${g(A(o))}</div>
              </button>`}).join("")}
        </div>
      </div>`}function v(){let e=(function(){for(let o=0;o<_.themes.length;o+=1){let h=_.themes[o];if((h.name||h.id)===(_.selectedTheme||_.activeTheme))return U(h)}return _.selectedTheme||_.activeTheme||"\u2014"})();return`
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
      </div>`}function c(){let e=document.getElementById(y);e&&e.addEventListener("click",function(o){if(o.target===e){w();return}let h=o.target.closest("[data-setup-action]");if(h){if(h.dataset.setupAction==="close"){w();return}if(h.dataset.setupAction==="prev"&&_.step>0){_.step-=1,P();return}h.dataset.setupAction==="next"&&a()}})}function r(e){let o=document.getElementById(y);if(o){if(e==="moderation"||e==="done"||e==="server"){o.querySelectorAll("[data-setup-goto]").forEach(function(h){h.addEventListener("click",function(){w();let t=h.dataset.setupGoto;t&&(window.location.hash=t)})});return}if(e==="theme"){o.querySelectorAll("[data-setup-theme]").forEach(function(h){h.addEventListener("click",function(){_.selectedTheme=h.dataset.setupTheme||_.selectedTheme,P()})});return}if(e==="done"){let h=o.querySelector("[data-setup-complete-cta]");h&&h.addEventListener("click",l)}}}async function n(){try{let e=await fetch("/admin/themes",{credentials:"same-origin"});if(!e.ok)return;let o=await e.json(),h=Array.isArray(o.themes)?o.themes:[];if(!h.length)return;_.themes=h.map(function(t){return{name:t.name||t.id||"",label:t.label||t.display_name||t.name||"",description:t.description||"",colors:t.preview_colors||t.colors||t.palette||x[0].colors}}),_.activeTheme=o.active||_.themes[0]&&_.themes[0].name||_.activeTheme,_.selectedTheme||(_.selectedTheme=_.activeTheme),_.open&&f[_.step].id==="theme"&&P()}catch{}}async function d(){if(!_.selectedTheme||_.selectedTheme===_.activeTheme)return!0;try{let e=await window.csrfFetch("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:_.selectedTheme})});if(!e.ok)throw new Error("HTTP "+e.status);return _.activeTheme=_.selectedTheme,window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplied"),!0),!0}catch{return window.showToast&&window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"),!1),!1}}async function a(){if(!(f[_.step].id==="theme"&&!await d())){if(_.step<f.length-1){_.step+=1,P();return}l()}}function l(){try{localStorage.setItem(k,"1")}catch{}window.showToast&&window.showToast(ServerI18n.t("setupWizardToastComplete"),!0),w()}window.AdminSetupWizard={open:function(){try{history.replaceState(null,"","#/setup")}catch{}F()},close:function(){w()},isCompleted:function(){try{return!!localStorage.getItem(k)}catch{return!1}},__setCapabilityForTest:function(){}};function i(){window.addEventListener("hashchange",M),M()}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&i()})})()});var Lt=ve(()=>{(function(){"use strict";let y="sec-poll-deepdive-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(b){return String(b).replace(/[&<>"']/g,function(C){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[C]})},g={poll:null,refreshTimer:0};function f(){return`
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
      </div>`}function x(b){if(b.innerHTML="",!window.AdminEmpty){b.innerHTML='<div class="admin-pdd-loading">'+ServerI18n.t("pollDeepdiveEmptyTitle")+"</div>";return}let C=window.AdminEmpty.renderCustom({icon:"\u25CC",title:ServerI18n.t("pollDeepdiveEmptyTitle"),desc:ServerI18n.t("pollDeepdiveEmptyDesc"),actionLabel:ServerI18n.t("pollDeepdiveEmptyActionLabel"),action:()=>{location.hash="#/polls"}});C.classList.add("lg:col-span-2"),C.dataset.emptyKind="poll-deepdive",b.appendChild(C)}let U=["var(--color-ink-success)","var(--color-ink-accent)","var(--color-ink-warning)","var(--color-danger)"];function A(b){return b?new Date(b*1e3).toLocaleTimeString(window.ServerI18n&&ServerI18n.dateLocale&&ServerI18n.dateLocale()||void 0,{hour:"2-digit",minute:"2-digit"}):""}function _(b){if(!b||b.length<2)return"";let C=Math.max.apply(null,b.map(function(c){return c.n}).concat([1])),H=100,B=32,N=H/(b.length-1),v=b.map(function(c,r){let n=(r*N).toFixed(2),d=(B-c.n/C*(B-2)-1).toFixed(2);return n+","+d});return'<svg class="admin-pdd-timeline-svg" viewBox="0 0 '+H+" "+B+'" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+v.join(" ")+'" /></svg>'}function m(b){let C=b.state||(b.active?"active":"ended"),H=b.question||"\u2014",B=Array.isArray(b.options)?b.options:[],N=function(h){return Number(h.votes!=null?h.votes:h.count)||0},v=B.reduce(function(h,t){return h+N(t)},0),c=C==="active"?ServerI18n.t("pollDeepdiveStateActive"):ServerI18n.t("pollDeepdiveStateEnded",{time:A(b.ended_at)}),r=(function(){let h=Number(b.started_at)||0;if(!h)return"\u2014";let t=C==="active"?Date.now()/1e3:Number(b.ended_at)||h,s=Math.max(0,Math.floor(t-h));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")})(),n=Number(window._lastOverlayCount)||0,d=n>0?Math.round(v/n*100)+"%":"\u2014",a=n>0?ServerI18n.t("pollDeepdiveParticipationSub",{total:v,audience:n}):ServerI18n.t("pollDeepdiveParticipationUnknown"),l=(function(){let h=Array.isArray(b.questions)?b.questions:[],t=0;for(let s of h)t+=Number(s.duplicate_attempts)||0;return h.length||(t=Number(b.duplicate_attempts)||0),t})(),i=B.map(function(h,t){let s=N(h),u=v>0?s/v*100:0,p=U[t%U.length];return`
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${k(h.label||h.text||h.key||ServerI18n.t("pollDeepdiveOptionFallbackLabel",{n:t+1}))}</span>
            <span class="votes">${s} \xB7 ${u.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${u.toFixed(2)}%;background:${p}"></div>
          </div>
        </div>`}).join(""),e=Array.isArray(b.vote_timeline)?b.vote_timeline:[],o=e.length>=2?_(e):'<div class="admin-pdd-timeline-empty">'+ServerI18n.t("pollDeepdiveTimelineTooShort")+"</div>";return`
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
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${v}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${d}</div><div class="sub">${k(a)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${k(r)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${l}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${B.length?i:'<div class="admin-pdd-empty-rows">'+ServerI18n.t("pollDeepdiveNoOptions")+"</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${o}</div>
        </article>
      </div>`}function M(){let b=document.querySelector("[data-pdd-grid]");if(b){if(!g.poll||!g.poll.poll_id){x(b);return}b.innerHTML=m(g.poll)}}async function F(){try{let b=await fetch("/admin/poll/status",{credentials:"same-origin"});if(!b.ok)return;let C=await b.json();g.poll=C,M()}catch{}}function w(){if(!g.poll||!Array.isArray(g.poll.options)){window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastNoData"),!1);return}let b=[["option_label","votes","percentage"]],C=g.poll.options.reduce(function(c,r){return c+(Number(r.votes!=null?r.votes:r.count)||0)},0);g.poll.options.forEach(function(c,r){let n=Number(c.votes!=null?c.votes:c.count)||0,d=C>0?(n/C*100).toFixed(2):"0.00";b.push([c.label||"option_"+(r+1),n,d])});let H=b.map(function(c){return c.map(function(r){let n=String(r);return n.includes(",")||n.includes('"')?'"'+n.replace(/"/g,'""')+'"':n}).join(",")}).join(`
`),B=new Blob([H],{type:"text/csv;charset=utf-8"}),N=URL.createObjectURL(B),v=document.createElement("a");v.href=N,v.download="poll-"+(g.poll.poll_id||"current")+".csv",document.body.appendChild(v),v.click(),document.body.removeChild(v),setTimeout(function(){URL.revokeObjectURL(N)},1e3),window.showToast&&window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"),!0)}async function E(){try{let b=await window.csrfFetch("/admin/poll/broadcast",{method:"POST"});if(!b.ok)throw new Error("HTTP "+b.status);window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushDone"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("pollDeepdivePushFailed"),!1)}}function P(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="poll-deepdive"?(F(),g.refreshTimer||(g.refreshTimer=setInterval(F,5e3))):g.refreshTimer&&(clearInterval(g.refreshTimer),g.refreshTimer=0)}function S(){let b=document.getElementById("settings-grid");if(!b||document.getElementById(y))return;b.insertAdjacentHTML("beforeend",f());let C=document.getElementById(y);C&&C.addEventListener("click",function(H){let B=H.target.closest("[data-pdd-action]");B&&(B.dataset.pddAction==="export-csv"?w():B.dataset.pddAction==="push"&&E())}),F(),P(),window.addEventListener("hashchange",P)}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&S()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&S()})})()});var Ct=ve(()=>{(function(){"use strict";let y="admin-message-drawer-root",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(d){return String(d).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})},f={open:!1,entry:null,fingerprintRecord:null,sameFpEntries:[]},x=null;function U(d){let a=d.detail&&d.detail.entry;a&&(f.open||(x=document.activeElement),f.entry=a,A(),a.data&&a.data.fingerprint&&F(a.data.fingerprint),w(a))}function A(){f.open=!0,document.body.dataset.messageDrawerOpen="1",document.getElementById(y)||(document.body.insertAdjacentHTML("beforeend",E()),P()),S();let d=document.querySelector("#"+y+" .admin-msgd-v4__close")||document.querySelector("#"+y+" button");if(d)try{d.focus({preventScroll:!0})}catch{}}function _(){f.open=!1,document.body.dataset.messageDrawerOpen="";let d=document.getElementById(y);if(d&&d.remove(),x&&typeof x.focus=="function"&&document.contains(x))try{x.focus({preventScroll:!0})}catch{}x=null}function m(d){if(!f.open)return;if(d.key==="Escape"){_();return}let a=document.activeElement,l=a?(a.tagName||"").toLowerCase():"";if(!(a&&(a.isContentEditable||l==="input"||l==="textarea"||l==="select"))){if(d.key==="ArrowLeft"||d.key==="k"){M(-1),d.preventDefault();return}if(d.key==="ArrowRight"||d.key==="j"){M(1),d.preventDefault();return}}}function M(d){if(!f.entry)return;let a=[];if(window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(a=window.AdminLiveFeed.getEntries()),!a.length)return;let l=a.findIndex(function(o){return o.id===f.entry.id});if(l<0)return;let i=l+-d;if(i<0||i>=a.length){window.showToast&&window.showToast(d<0?ServerI18n.t("msgDrawerNavAtNewest"):ServerI18n.t("msgDrawerNavAtOldest"),!1);return}let e=a[i];f.entry=e,f.fingerprintRecord=null,w(e),S(),e.data&&e.data.fingerprint&&F(e.data.fingerprint)}async function F(d){try{let a=await fetch("/admin/fingerprints?limit=500",{credentials:"same-origin"});if(!a.ok)return;let l=await a.json(),e=(Array.isArray(l.records)?l.records:[]).find(function(o){return(o.fingerprint||"").startsWith(d.slice(0,8))});f.fingerprintRecord=e||null,S()}catch{}}function w(d){let a=d.data&&d.data.fingerprint;if(!a){f.sameFpEntries=[];return}let l=[];window.AdminLiveFeed&&typeof window.AdminLiveFeed.getEntries=="function"&&(l=window.AdminLiveFeed.getEntries()),f.sameFpEntries=l.filter(function(i){let e=i.data&&i.data.fingerprint||i.fingerprint||"";return e&&e.startsWith(a.slice(0,8))}).slice(0,8)}function E(){return`
      <div id="${y}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`}function P(){let d=document.getElementById(y);d&&d.addEventListener("click",function(a){let l=a.target.closest("[data-msgd-action]");if(!l)return;a.stopPropagation();let i=l.dataset.msgdAction;i==="close"?_():i==="ban-fp"?N():i==="ban-fp-quick"?B():i==="recall-msg"?c():i==="blacklist-kw"?r():i==="reply"?n():i==="prev"?M(-1):i==="next"&&M(1)})}function S(){let d=document.getElementById(y);if(!d)return;let a=d.querySelector("[data-msgd-body]");a&&(a.innerHTML=b())}function b(){let d=f.entry;if(!d)return`<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;let a=d.data||{},l=a.fingerprint||"\u2014",i=l==="\u2014"?"\u2014":l.slice(0,8),e=l==="\u2014"?"\u2014":l.slice(0,12),o=d.ts?C(d.ts):"\u2014",h=a.nickname||ServerI18n.t("msgDrawerAnonymous"),t=f.fingerprintRecord||{},s=Number(t.message_count)||0,u=Number(t.violation_count)||0,p=f.sameFpEntries||[],$=p.length?Math.round(p.reduce((L,D)=>L+((D.data||D).text||"").length,0)/p.length):(a.text||"").length,I=0;for(let L=0;L<l.length;L++)I=I*31+l.charCodeAt(L)&65535;return I=I%360,`
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${I})">${g((h||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${g(h)}</div>
          <div class="admin-msgd-v4__fp">fp:${g(e)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${g(o)}</span>
      </div>

      <div class="admin-msgd-v4__body">${g(a.text||"")}</div>

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
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${s||p.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${$}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${u>0?"warn":"good"}">${u}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP \xB7 ${g(a.ip||"\u2014")}<br/>
          UA \xB7 ${g(a.user_agent||a.ua||"\u2014")}
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
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${a.message_id?"":"disabled"}>${g(ServerI18n.t("lfRecallBtn"))}</button>
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
    `}function C(d){try{let a=new Date(d),l=String(a.getHours()).padStart(2,"0"),i=String(a.getMinutes()).padStart(2,"0"),e=String(a.getSeconds()).padStart(2,"0");return l+":"+i+":"+e}catch{return"\u2014"}}function H(d){let a;if(typeof d=="number")a=d*1e3;else if(typeof d=="string")a=new Date(d).getTime();else return"\u2014";if(!a)return"\u2014";let l=(Date.now()-a)/1e3;return l<60?ServerI18n.t("msgDrawerSecAgo",{n:Math.floor(l)}):l<3600?ServerI18n.t("msgDrawerMinAgo",{n:Math.floor(l/60)}):l<86400?ServerI18n.t("msgDrawerHourAgo",{n:Math.floor(l/3600)}):ServerI18n.t("msgDrawerDayAgo",{n:Math.floor(l/86400)})}async function B(d,a,l){let i=f.entry&&f.entry.data&&f.entry.data.fingerprint;if(!i)return;let e=parseInt(a||0,10)||0,o=e>0?await window.AdminModeration.banFingerprint(i,e,d):await window.AdminModeration.callBlock("fingerprint",i,d);if(!o.ok){window.showToast&&window.showToast(ServerI18n.t("msgDrawerBanFailed",{msg:o.error||""}),!1);return}let h=l||(e>0?ServerI18n.t("msgDrawerSecondsLabel",{n:e}):ServerI18n.t("msgDrawerPermanent"));window.showToast&&window.showToast(ServerI18n.t("msgDrawerToastBanned",{fp:i.slice(0,8),label:h}),!0),_()}async function N(){let d=f.entry&&f.entry.data||{},a=d.fingerprint||"\u2014";if(a==="\u2014")return;let l=a.slice(0,12),i=d.nickname||ServerI18n.t("msgDrawerAnonymous"),e=0;for(let I=0;I<a.length;I++)e=e*31+a.charCodeAt(I)&65535;e=e%360;let o=document.createElement("div");o.innerHTML=`
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${e})">${g((i||"?").slice(0,2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${g(i)}</div>
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
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;let h=I=>{o.querySelectorAll(".admin-bancfm-dchip").forEach(L=>L.classList.remove("is-active")),I.classList.add("is-active")};if(o.addEventListener("click",I=>{let L=I.target.closest("[data-ban-duration]");L&&h(L)}),o.addEventListener("keydown",I=>{if(I.key!=="Enter"&&I.key!==" ")return;let L=I.target.closest("[data-ban-duration]");L&&(I.preventDefault(),h(L))}),!window.HudConfirm||!await window.HudConfirm.open({icon:"\u2298",title:ServerI18n.t("msgDrawerBanConfirmTitle"),subtitle:ServerI18n.t("cfmSubBanConfirm"),severity:"danger",body:o,confirmLabel:ServerI18n.t("msgDrawerConfirmBan"),cancelLabel:ServerI18n.t("cancel"),width:480}))return;let s=(o.querySelector("[data-ban-reason]")||{}).value||"",u=o.querySelector(".admin-bancfm-dchip.is-active"),p=u&&parseInt(u.dataset.banDuration||"0",10)||0,$=u?u.textContent.trim():ServerI18n.t("msgDrawerPermanent");return B(s.trim(),p,$)}function v(){}async function c(){let d=f.entry,a=d&&d.data&&d.data.message_id;if(!a)return;if(!(await window.AdminModeration.recall(a)).ok){window.showToast&&window.showToast(ServerI18n.t("lfRecallFailed"),!1);return}window.showToast&&window.showToast(ServerI18n.t("lfRecallDone"),!0),_()}async function r(){let d=f.entry&&f.entry.data&&f.entry.data.text;if(!d)return;await window.AdminModeration.blockKeyword(d)&&_()}async function n(){let d=document.querySelector("[data-msgd-reply]"),a=d?d.value.trim():"";if(a)try{let l=await window.csrfFetch("/admin/broadcast/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:a})});if(!l.ok)throw new Error("HTTP "+l.status);window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplySent"),!0),d&&(d.value="")}catch(l){window.showToast&&window.showToast(ServerI18n.t("msgDrawerReplyFailed",{msg:l.message||""}),!1)}}window.AdminMessageDrawer={open:function(d){document.dispatchEvent(new CustomEvent("admin:message-detail-open",{detail:{entry:d}}))},close:_},document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(document.addEventListener("admin:message-detail-open",U),document.addEventListener("keydown",m))})})()});var At=ve(()=>{(function(){"use strict";let y="danmu.notifications.read",k="danmu.notifications.archived",g=window.AdminUtils&&window.AdminUtils.escapeHtml||function(i){return String(i).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})},f={items:[],refreshTimer:0};function x(i){try{let e=localStorage.getItem(i);if(!e)return new Set;let o=JSON.parse(e);return new Set(Array.isArray(o)?o:[])}catch{return new Set}}function U(i,e){try{localStorage.setItem(i,JSON.stringify(Array.from(e)))}catch{}}function A(i){let e=x(y);e.add(i),U(y,e)}async function _(){let i=[m().catch(function(){return[]}),M().catch(function(){return[]}),F().catch(function(){return[]}),w().catch(function(){return[]})],o=(await Promise.all(i)).flat();o.sort(function(h,t){return(t.ts||0)-(h.ts||0)}),f.items=o,C(),N()&&H()}async function m(){let i=await fetch("/admin/integrations/fire-token/audit",{credentials:"same-origin"});if(!i.ok)return[];let e=await i.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u="tok-"+(h.ts||t)+"-"+(h.kind||"x"),p=h.kind||"?",$="info",I=ServerI18n.t("notifTitleFireTokenEvent");if(p==="rotated")$="info",I=ServerI18n.t("notifTitleFireTokenRotated");else if(p==="revoked")$="warn",I=ServerI18n.t("notifTitleFireTokenRevoked");else if(p==="toggled"){let L=h.meta&&h.meta.enabled;$=L?"good":"warn",I=ServerI18n.t("notifTitleFireTokenToggled",{state:L?ServerI18n.t("notifStateEnabled"):ServerI18n.t("notifStateDisabled")})}return{id:u,sev:$,src:"Fire Token",ts:s,title:I,desc:ServerI18n.t("notifDescEventType",{kind:p})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function M(){let i=await fetch("/admin/filters/events",{credentials:"same-origin"});if(!i.ok)return[];let e=await i.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u="flt-"+(h.ts||t)+"-"+(h.action||"x")+"-"+t,p=h.action||"match";return{id:u,sev:p==="drop"?"warn":"info",src:"Moderation",ts:s,title:ServerI18n.t("notifTitleFilterHit",{action:p}),desc:ServerI18n.t("notifDescFilterHit",{rule:h.rule_id||"?",text:(h.text||"").slice(0,60)}),raw:h}})}async function F(){let i=await fetch("/admin/audit?source=webhooks&limit=100",{credentials:"same-origin"});if(!i.ok)return[];let e=await i.json();return(Array.isArray(e.events)?e.events:[]).map(function(h,t){let s=(Number(h.ts)||0)*1e3,u=String(h.kind||"?");return{id:"wh-"+(h.ts||t)+"-"+u+"-"+t,sev:u==="unregister"?"warn":"info",src:"Webhooks",ts:s,title:ServerI18n.t("notifTitleWebhookEvent",{kind:u}),desc:ServerI18n.t("notifDescWebhookEvent",{actor:h.actor||"system"})+(h.meta?" \xB7 "+JSON.stringify(h.meta):""),raw:h}})}async function w(){let i=await fetch("/admin/audit?limit=120",{credentials:"same-origin"});if(!i.ok)return[];let e=await i.json(),o=Array.isArray(e.events)?e.events:[],h=new Set(["auth","broadcast","system","session","sessions"]);return o.filter(function(t){return h.has(String(t.source||""))}).map(function(t,s){let u=(Number(t.ts)||0)*1e3,p=String(t.kind||"?");return{id:"sys-"+(t.ts||s)+"-"+(t.source||"x")+"-"+p+"-"+s,sev:p==="login_failed"?"warn":"info",src:"System",ts:u,title:ServerI18n.t("notifTitleSystemEvent",{kind:p}),desc:ServerI18n.t("notifDescSystemEvent",{source:t.source||"?",actor:t.actor||"system"}),raw:t}})}let E="admin-notif-panel",P={Moderation:{key:"adminNavModeration",hash:"#/moderation"},Webhooks:{key:"adminNavIntegrations",hash:"#/integrations/webhooks"},"Fire Token":{key:"adminNavIntegrations",hash:"#/integrations/plugins"},System:{key:"adminNavSystem",hash:"#/events"}};function S(i){let e=P[i];return e?ServerI18n.t(e.key):i}function b(){let i=x(y),e=x(k);return f.items.filter(o=>!i.has(o.id)&&!e.has(o.id))}function C(){let i=document.querySelector("[data-notif-badge]");if(!i)return;let e=b().length;i.textContent=e>99?"99+":String(e),i.hidden=e===0}function H(){let i=document.getElementById(E);if(!i)return;let e=b().slice(0,20),o=e.length?e.map(h=>{let t=P[h.src];return'<li class="admin-notif__item" data-sev="'+g(h.sev)+'"><div class="admin-notif__text">'+g(h.title)+'</div><div class="admin-notif__meta">'+g(S(h.src))+" \xB7 "+g(B(h.ts))+"</div>"+(t?'<button type="button" class="admin-notif__action" data-notif-go="'+g(t.hash)+'" data-notif-id="'+g(h.id)+'">'+g(ServerI18n.t("notifViewBtn"))+"</button>":"")+"</li>"}).join(""):'<li class="admin-notif__empty">'+g(ServerI18n.t("notifEmpty"))+"</li>";i.innerHTML='<div class="admin-notif__head"><span class="admin-notif__title">'+g(ServerI18n.t("adminRouteTitle_notifications"))+'</span><button type="button" class="admin-notif__readall" data-notif-readall>'+g(ServerI18n.t("notifMarkAllRead"))+'</button></div><ul class="admin-notif__list">'+o+"</ul>"}function B(i){if(!i)return"\u2014";let e=(Date.now()-i)/1e3;return e<60?ServerI18n.t("notifTimeSecAgo",{n:Math.floor(e)}):e<3600?ServerI18n.t("notifTimeMinAgo",{n:Math.floor(e/60)}):e<86400?ServerI18n.t("notifTimeHourAgo",{n:Math.floor(e/3600)}):ServerI18n.t("notifTimeDayAgo",{n:Math.floor(e/86400)})}function N(){let i=document.getElementById(E);return!!i&&!i.hidden}function v(){let i=document.getElementById(E);i&&(H(),i.hidden=!1,f.refreshTimer||(f.refreshTimer=setInterval(_,3e4)))}function c(){(location.hash||"").replace(/^#\/?/,"").split("/")[0]==="notifications"&&v()}function r(){let i=document.getElementById(E);i&&(i.hidden=!0),f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function n(){N()?r():v()}function d(){let i=document.querySelector(".admin-dash-topbar-actions");if(!i||document.getElementById("admin-notif-bell"))return;let e=document.createElement("button");if(e.id="admin-notif-bell",e.type="button",e.className="admin-dash-search is-icon-only admin-notif-bell",e.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),e.title=ServerI18n.t("adminRouteTitle_notifications"),e.innerHTML='<span aria-hidden="true">\u25CD</span><span class="admin-notif-bell__badge" data-notif-badge hidden>0</span>',i.insertBefore(e,i.firstChild),!document.getElementById(E)){let o=document.createElement("div");o.id=E,o.className="admin-notif",o.setAttribute("role","dialog"),o.setAttribute("aria-label",ServerI18n.t("adminRouteTitle_notifications")),o.hidden=!0,document.body.appendChild(o)}C(),c()}function a(){document.addEventListener("click",i=>{if(i.target.closest("#admin-notif-bell")){i.preventDefault(),n();return}let e=i.target.closest("[data-notif-go]");if(e){A(e.dataset.notifId),r(),location.hash=e.dataset.notifGo,C();return}if(i.target.closest("[data-notif-readall]")){b().forEach(o=>A(o.id)),H(),C();return}N()&&!i.target.closest("#"+E)&&r()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&N()&&r()}),window.addEventListener("hashchange",c),c()}function l(){d(),_()}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(d).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),a(),l()})})()});var Bt=ve(()=>{(function(){"use strict";let y="sec-audit-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g={auth:{label:"Auth"},fire_token:{label:"Fire Token"},broadcast:{label:"Desktop"},moderation:{label:"Moderation"},session:{label:"Session"}},f={events:[],filterActor:"all",filterSeverity:"all",refreshTimer:0};function x(){return`
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
      </div>`}function U(n){if(!n)return"\u2014";try{let d=new Date(Number(n)*1e3),a=String(d.getHours()).padStart(2,"0"),l=String(d.getMinutes()).padStart(2,"0"),i=String(d.getSeconds()).padStart(2,"0");return`${a}:${l}:${i}`}catch{return"\u2014"}}function A(n){let d=String(n.action||n.kind||"").toLowerCase();return/(block|ban|revoke|delete|kick|reject|drop)/.test(d)?"danger":/(fail|error|timeout|warn|rate|deny|denied|limit)/.test(d)?"warn":"info"}function _(n){return n==="danger"?"var(--hud-crimson, #f87171)":n==="warn"?"var(--hud-amber, #fbbf24)":"var(--color-text-muted, #94a3b8)"}function m(n){return f.filterActor==="all"||String(n.actor||"").toLowerCase()===f.filterActor}function M(n){return f.filterSeverity==="all"||A(n)===f.filterSeverity}function F(){return f.events.filter(function(n){return m(n)&&M(n)})}function w(n){let d=n&&n.meta&&typeof n.meta=="object"?n.meta:{};return d.target||d.keyword||d.fp||d.fingerprint||d.name||d.mode||d.session||d.hook_id||n.target||""}function E(n,d){let a=n!=null,l=d!=null;if(!a&&!l)return"";let i=a?k(JSON.stringify(n)):"",e=l?k(JSON.stringify(d)):"";return a?`<span class="admin-audit-diff"><span class="admin-audit-diff-b">${i}</span> \u2192 <span class="admin-audit-diff-a">${e}</span></span>`:`<span class="admin-audit-diff"><span class="admin-audit-diff-a">${e}</span></span>`}function P(n){let d=n&&n.meta&&typeof n.meta=="object"?n.meta:{},a=[];n.detail&&a.push(`<span>${k(String(n.detail))}</span>`);let l=E(n.before,n.after);l&&a.push(l);let i=Object.assign({},d);if(["target","keyword","fp","fingerprint","name","mode","session","hook_id"].forEach(function(o){delete i[o]}),Object.keys(i).length&&a.push(`<code class="admin-ui-code admin-audit-meta-extra">${k(JSON.stringify(i))}</code>`),!a.length){let o=g[n.source]&&g[n.source].label||n.source||"system";a.push(`<span>${k(String(o))}</span>`)}return a.join(" ")}function S(n){return n==="admin"?"admin-ui-pill admin-audit-row-pill is-admin":n==="system"?"admin-ui-pill admin-audit-row-pill":"admin-ui-pill admin-audit-row-pill is-generic"}function b(){let n=document.querySelector("[data-audit-rows]");if(!n)return;let d=F();if(!d.length){n.innerHTML=`<div class="admin-audit-empty">${ServerI18n.t("auditNoMatch")}</div>`;return}n.innerHTML=d.map(function(a){let l=A(a),i=_(l),e=String(a.actor||"system"),o=w(a);return`
        <div class="admin-ui-timeline-row admin-audit-timeline-row" data-severity="${l}">
          <div class="admin-ui-stamp admin-audit-cell-stamp">
            <span class="admin-ui-time admin-audit-ts">${k(U(a.ts))}</span>
            <span class="admin-ui-dot admin-audit-sev-dot" style="background:${i};box-shadow:0 0 6px ${i}"></span>
          </div>
          <div class="admin-ui-row-body admin-audit-cell-body">
            <div class="admin-ui-row-head admin-audit-row-head">
              <span class="${S(e)}">${k(e)}</span>
              <span class="admin-ui-row-action admin-audit-event-action">${k(String(a.action||a.kind||"\u2014"))}</span>
              ${o?`<span class="admin-ui-target admin-audit-target">\u2192 ${k(String(o))}</span>`:""}
            </div>
            <div class="admin-ui-row-detail admin-audit-row-detail">${P(a)}</div>
          </div>
        </div>`}).join("")}function C(){let n=document.querySelector("[data-audit-summary]");if(!n)return;let d=F().length,a=f.filterActor==="all"?ServerI18n.t("auditAllRoles"):f.filterActor,l=f.filterSeverity==="all"?ServerI18n.t("auditAllLevels"):f.filterSeverity.toUpperCase();n.textContent=ServerI18n.t("auditSummaryLine",{n:d,actor:a,sev:l})}function H(){document.querySelectorAll("[data-audit-actor-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditActorFilter===f.filterActor)}),document.querySelectorAll("[data-audit-severity-filter]").forEach(function(n){n.classList.toggle("is-active",n.dataset.auditSeverityFilter===f.filterSeverity)})}async function B(){try{let n=await fetch("/admin/audit?limit=200",{credentials:"same-origin"});if(!n.ok)return;let d=await n.json(),a=Array.isArray(d.events)?d.events.slice():[];a.sort(function(l,i){return Number(i.ts||0)-Number(l.ts||0)}),f.events=a,H(),b(),C()}catch{}}function N(){let n=F();if(!n.length){window.showToast&&window.showToast(ServerI18n.t("auditNothingToExport"),!1);return}let d=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),a=URL.createObjectURL(d),l=document.createElement("a");l.href=a,l.download="audit-"+new Date().toISOString().slice(0,10)+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(function(){URL.revokeObjectURL(a)},1e3),window.showToast&&window.showToast(ServerI18n.t("auditToastExported",{n:n.length}),!0)}function v(){let n=document.getElementById(y);n&&n.addEventListener("click",function(d){let a=d.target.closest("[data-audit-actor-filter]");if(a){f.filterActor=a.dataset.auditActorFilter||"all",H(),b(),C();return}let l=d.target.closest("[data-audit-severity-filter]");if(l){let i=l.dataset.auditSeverityFilter||"all";f.filterSeverity=f.filterSeverity===i?"all":i,H(),b(),C();return}if(d.target.closest("[data-audit-export]")){N();return}d.target.closest("[data-audit-refresh]")&&B()})}function c(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audit"?(B(),f.refreshTimer||(f.refreshTimer=setInterval(B,3e4))):f.refreshTimer&&(clearInterval(f.refreshTimer),f.refreshTimer=0)}function r(){let n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",x()),v(),B(),c(),window.addEventListener("hashchange",c))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&r()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&r()})})()});var Ft=ve(()=>{(function(){"use strict";let y="sec-audience-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(s){return String(s).replace(/[&<>"']/g,function(u){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[u]})},g=["#38bdf8","#fbbf24","#86efac","#f87171","#94a3b8","#64748b","#334155","#1e293b"],f=20,x={records:[],filter:"all",shown:f,search:"",sort:"msgs",refreshTimer:0,selectedFp:null,detailMessages:[],detailLoading:!1};function U(s){if(!s)return g[0];let u=0;for(let p=0;p<s.length;p++)u=u*31+s.charCodeAt(p)>>>0;return g[u%g.length]}function A(s){if(!s)return"\u2014";let u=typeof s=="number"?s*1e3:new Date(s).getTime();if(!u)return"\u2014";let p=Math.max(0,(Date.now()-u)/1e3);return p<60?Math.floor(p)+"s":p<3600?Math.floor(p/60)+"m":p<86400?Math.floor(p/3600)+"h":Math.floor(p/86400)+"d"}function _(s){return s==="blocked"||s==="high"?"is-danger":s==="mid"?"is-warn":"is-success"}function m(){return`
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
      </div>`}function M(){let s=x.search.trim().toLowerCase(),u=x.records.slice();return s&&(u=u.filter(function(p){return String(p.nickname||"").toLowerCase().indexOf(s)!==-1||String(p.hash||"").toLowerCase().indexOf(s)!==-1})),u.sort(function(p,$){return x.sort==="last_seen"?(Number($.last_seen)||0)-(Number(p.last_seen)||0):(Number($.msgs)||0)-(Number(p.msgs)||0)}),x.filter==="all"?u:x.filter==="flagged"?u.filter(function(p){return p.state==="flagged"||p.state==="blocked"}):x.filter==="extension"?u.filter(function(p){return p.fingerprint&&(p.fingerprint.indexOf("slido")===0||p.fingerprint.indexOf("ext_")===0)}):u}function F(){let s=document.querySelector("[data-aud-stats]");if(!s)return;let u=x.records,p=u.length,$=u.filter(function(O){return O.state==="flagged"}).length,I=u.filter(function(O){return O.state==="blocked"}).length,L=u.reduce(function(O,z){return O+(Number(z.msgs)||0)},0),D=u.filter(function(O){let z=O.last_seen;if(!z)return!1;let T=typeof z=="number"?z*1e3:new Date(z).getTime();return(Date.now()-T)/1e3<300}).length;s.innerHTML=`
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatCurrentFp")}</div><div class="v">${p}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatActive5min")}</div><div class="v" style="color: var(--color-ink-success)">${D}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatTotalMsgs")}</div><div class="v" style="color: var(--color-ink-accent)">${L}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatFlagged")}</div><div class="v" style="color: var(--color-ink-warning)">${$}</div></div>
      <div class="admin-aud-stat"><div class="k">${ServerI18n.t("audienceStatBlocked")}</div><div class="v" style="color: var(--color-ink-error)">${I}</div></div>`}function w(){let s=document.querySelector("[data-aud-filters]");if(!s)return;let u=x.records.length,p=x.records.filter(function($){return $.state==="flagged"||$.state==="blocked"}).length;s.innerHTML=`
      <button type="button" class="admin-ui-chip admin-aud-filter ${x.filter==="all"?"is-active":""}" data-aud-filter="all">${ServerI18n.t("audienceFilterAll",{n:u})}</button>
      <button type="button" class="admin-ui-chip admin-aud-filter ${x.filter==="flagged"?"is-active":""}" data-aud-filter="flagged">${ServerI18n.t("audienceFilterFlagged",{n:p})}</button>`}let E="__anon__";function P(s){let u=(s.nickname||"").trim();return!u||u==="\u533F\u540D"}function S(s){let u=s.hash||s.fingerprint||"";return u?u.length>9?u.slice(0,4)+"\u2026"+u.slice(-4):u:"\u2014"}function b(){let s=[],u=[];return M().forEach(function(p){P(p)?u.push(p):s.push(p)}),u.length&&s.push({_anonGroup:!0,_count:u.length,fingerprint:E,msgs:u.reduce(function(p,$){return p+(Number($.msgs)||0)},0),blocked:u.reduce(function(p,$){return p+(Number($.blocked)||0)},0),last_seen:Math.max.apply(null,u.map(function(p){return p.last_seen||0})),state:u.some(function(p){return p.state==="blocked"})?"blocked":"active"}),s}function C(){let s=document.querySelector("[data-aud-list]"),u=document.querySelector("[data-aud-summary]");if(!s)return;let p=b(),$=Math.min(p.length,x.shown);if(u&&(u.textContent=ServerI18n.t("audienceShownOfTotal",{n:$,total:p.length})),p.length===0){s.innerHTML="";let O=window.AdminEmpty.render("audience");O.dataset.emptyKind="audience",s.appendChild(O);return}let I=`
      <div class="admin-aud-row admin-aud-row--head">
        <span class="col col-avatar"></span>
        <span class="col col-nick">${ServerI18n.t("audienceColViewer")}</span>
        <span class="col col-fp">${ServerI18n.t("audienceColDeviceId")}</span>
        <span class="col col-msgs">${ServerI18n.t("audienceColMsgs")}</span>
        <span class="col col-blocked">${ServerI18n.t("audienceColBlocked")}</span>
        <span class="col col-seen">${ServerI18n.t("audienceColLastSeen")}</span>
        <span class="col col-actions"></span>
      </div>`,L=p.slice(0,$).map(function(O){let z=O.fingerprint||"\u2014",T=O.state==="blocked",R=O._anonGroup?ServerI18n.t("audienceAnonymous"):(O.nickname||"").trim(),j=O._anonGroup?"?":R.slice(0,1),J=U(z);return`
        <div class="admin-aud-row${x.selectedFp===z?" is-selected":""}" data-aud-row data-aud-fp="${k(z)}">
          <span class="col col-avatar">
            <span class="avatar" style="background:${J}">${k(j)}</span>
          </span>
          <span class="col col-nick">
            <span class="nick">${k(R)}</span>
            ${O._anonGroup?`<span class="admin-aud-count">${ServerI18n.t("audienceAnonCount",{n:O._count})}</span>`:""}
            ${T&&!O._anonGroup?`<span class="admin-aud-blockedtag">${ServerI18n.t("audienceBlockedTag")}</span>`:""}
          </span>
          <span class="col col-fp">${O._anonGroup?"\u2014":k(S(O))}</span>
          <span class="col col-msgs">${Number(O.msgs)||0}</span>
          <span class="col col-blocked">${Number(O.blocked)||0}</span>
          <span class="col col-seen">${k(A(O.last_seen))}</span>
          <span class="col col-actions">
            ${O._anonGroup?"":`<button type="button" class="admin-ui-action is-danger admin-aud-action" data-aud-action="ban" data-aud-fp="${k(z)}">${ServerI18n.t("audienceBanBtn")}</button>`}
          </span>
        </div>`}).join(""),D=p.length>$?`<button type="button" class="admin-aud-more" data-aud-action="more">${ServerI18n.t("audienceLoadMore")}</button>`:"";s.innerHTML=I+L+D}function H(s){return s&&x.records.find(function(u){return u.fingerprint===s})||null}function B(s){if(!s)return{level:"normal",color:"var(--hud-lime)",label:"NORMAL",rules:[]};let u=[],p=Number(s.msgs)||0,$=s.fingerprint||"";s.state==="blocked"&&u.push(ServerI18n.t("audienceRuleBlocked")),s.state==="flagged"&&u.push(ServerI18n.t("audienceRuleFlagged")),p>=25?u.push(ServerI18n.t("audienceRuleMsgOver",{n:p})):p>=15&&u.push(ServerI18n.t("audienceRuleMsgNear",{n:p}));let I=x.records.filter(function(z){return z.ip&&s.ip&&z.ip===s.ip}).length;I>=3&&u.push(ServerI18n.t("audienceRuleSameIp",{n:I})),($.indexOf("slido")===0||$.indexOf("ext_")===0)&&u.push(ServerI18n.t("audienceRuleBridge")),(s.nickname==="\u533F\u540D"||!s.nickname)&&u.push(ServerI18n.t("audienceRuleNoNick"));let L="normal",D="var(--hud-lime)",O="NORMAL";return s.state==="blocked"?(L="blocked",D="var(--hud-crimson)",O="BLOCKED"):s.state==="flagged"||p>=25?(L="high",D="var(--hud-crimson)",O="HIGH RISK"):(p>=15||I>=3)&&(L="mid",D="var(--hud-amber)",O="MID"),{level:L,color:D,label:O,rules:u}}async function N(s){x.detailLoading=!0;try{let u=await fetch("/admin/history?hours=1&limit=200",{credentials:"same-origin"});if(!u.ok){x.detailMessages=[];return}let p=await u.json(),$=Array.isArray(p.records)?p.records:[],I=Date.now()-300*1e3;x.detailMessages=$.filter(function(L){return(L.fingerprint||"")!==s?!1:(L.timestamp?new Date(L.timestamp).getTime():0)>=I}).slice(0,8)}catch{x.detailMessages=[]}finally{x.detailLoading=!1}}function v(){let s=document.querySelector("[data-aud-detail]");if(!s)return;let u=x.selectedFp;if(!u){s.hidden=!0,s.innerHTML="";return}let p=H(u);if(!p){x.selectedFp=null,s.hidden=!0;return}s.hidden=!1;let $=B(p);s.dataset.riskLevel=$.level;let I=U(u),L=!p.nickname||p.nickname==="\u533F\u540D",D=L?ServerI18n.t("audienceAnonymous"):p.nickname,O=L?"?":D.slice(0,1),z="fp:"+(u||"").slice(0,8),T=$.rules.length?$.rules.map(function(j){return"<li>"+k(j)+"</li>"}).join(""):'<li class="ok">'+ServerI18n.t("audienceNoFlags")+"</li>",R="";x.detailLoading?R='<div class="admin-aud-detail-loading">'+ServerI18n.t("audienceDetailLoadingMsgs")+"</div>":x.detailMessages.length===0?R='<div class="admin-aud-detail-empty">'+ServerI18n.t("audienceDetailNoMsgs")+"</div>":R=x.detailMessages.map(function(j){let J=j.muted?"MASKED":j.banned?"BLOCKED":"SHOWN",W=j.muted?"var(--hud-amber)":j.banned?"var(--hud-crimson)":"var(--hud-lime)",V=j.timestamp?new Date(j.timestamp).toLocaleTimeString(ServerI18n.dateLocale(),{hour12:!1}):"\u2014";return'<div class="admin-aud-detail-msg"><span class="ts">'+k(V)+'</span><span class="m">'+k(j.text||"")+'</span><span class="s" style="color:'+W+'">'+J+"</span></div>"}).join(""),s.innerHTML='<div class="admin-aud-detail-head"><span class="admin-ui-pill admin-aud-risk-pill '+_($.level)+'">'+k($.label)+'</span><button type="button" class="admin-ui-action admin-aud-detail-close" data-aud-action="close-detail" aria-label="'+ServerI18n.t("audienceCloseAria")+'">'+window.AdminUtils.closeIcon+'</button></div><div class="admin-aud-detail-id"><span class="avatar" style="background:'+I+'">'+k(O)+'</span><div><div class="nick">'+k(D)+'</div><div class="fp">'+k(z)+'</div></div></div><div class="admin-aud-detail-flag" data-risk="'+$.level+'"><div class="hd">'+ServerI18n.t("audienceFlagHeader",{n:$.rules.length})+"</div><ul>"+T+'</ul></div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailMsgsLabel")+'</div><div class="admin-aud-detail-messages">'+R+'</div><div class="admin-ui-monolabel admin-aud-detail-label">'+ServerI18n.t("audienceDetailActionsLabel")+'</div><div class="admin-aud-detail-actions"><button type="button" class="admin-ui-action is-danger is-block admin-aud-detail-action" data-aud-action="detail-ban" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionBanFp")+'</button><button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="detail-mask" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionMask")+"</button>"+(p.is_kicked?'<button type="button" class="admin-ui-action is-warn is-block admin-aud-detail-action" data-aud-action="unkick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionUnkick")+"</button>":'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="kick" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionKick")+"</button>")+'<button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="flag" data-aud-fp="'+k(u)+'" data-aud-flagged="'+(p.is_flagged?"true":"false")+'">'+(p.is_flagged?ServerI18n.t("audienceActionUnflag"):ServerI18n.t("audienceActionFlag"))+'</button><button type="button" class="admin-ui-action is-block admin-aud-detail-action" data-aud-action="detail-safe" data-aud-fp="'+k(u)+'">'+ServerI18n.t("audienceActionSafe")+"</button></div>"}function c(s){x.selectedFp=s,x.detailMessages=[],v(),N(s).then(v)}async function r(){try{let s=await fetch("/admin/audience/list?limit=500",{credentials:"same-origin"});if(!s.ok)return;let u=await s.json();x.records=Array.isArray(u.entries)?u.entries:[],x.serverStats=u&&u.stats||null,F(),w(),C(),x.selectedFp&&v()}catch{}}async function n(s,u,p){if(s)try{let $=await window.csrfFetch("/admin/audience/flag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,flagged:!!u,note:p||""})});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(u?ServerI18n.t("audienceToastFlagged",{fp:s.slice(0,8)}):ServerI18n.t("audienceToastUnflagged",{fp:s.slice(0,8)}),!0),r()}catch($){window.showToast&&window.showToast(ServerI18n.t("audienceToastFlagFailed",{msg:$.message||""}),!1)}}async function d(s,u){if(!s||s==="\u2014")return;let p=u??(window.prompt(ServerI18n.t("audienceKickPrompt",{fp:s.slice(0,8)}),"")||"");if(p!==null)try{let $=await window.csrfFetch("/admin/audience/kick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s,reason:p})});if(!$.ok)throw new Error("HTTP "+$.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastKicked",{fp:s.slice(0,8)}),!0),r()}catch($){window.showToast&&window.showToast(ServerI18n.t("audienceToastKickFailed",{msg:$.message||""}),!1)}}async function a(s){if(!(!s||!await window.HudConfirm?.open({icon:"\u21A9",title:ServerI18n.t("audienceUnkickTitle"),subtitle:ServerI18n.t("cfmSubUnkick"),severity:"warn",body:ServerI18n.t("audienceUnkickBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceUnkickTitle")})))try{let p=await window.csrfFetch("/admin/audience/unkick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:s})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkicked"),!0),r()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastUnkickFailed",{msg:p.message||""}),!1)}}async function l(s){if(!(!s||s==="\u2014"))try{let u=await window.csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",pattern:s,action:"mask",priority:0,enabled:!0})});if(!u.ok)throw new Error("HTTP "+u.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastMasked",{fp:s.slice(0,8)}),!0),r()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastMaskFailed",{msg:u.message||""}),!1)}}async function i(s){if(!(!s||s==="\u2014"))try{let u=await fetch("/admin/filters/list",{credentials:"same-origin"});if(!u.ok)throw new Error("HTTP "+u.status);let p=await u.json(),I=(Array.isArray(p.rules)?p.rules:[]).filter(function(D){return D&&D.type==="fingerprint"&&D.pattern===s});if(I.length===0){window.showToast&&window.showToast(ServerI18n.t("audienceToastNoRules"),!0);return}let L=0;for(let D of I)(await window.csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:D.rule_id||D.id})}).catch(function(){return{ok:!1}})).ok&&(L+=1);window.showToast&&window.showToast(ServerI18n.t("audienceToastRulesCleared",{n:L,fp:s.slice(0,8)}),!0),r()}catch(u){window.showToast&&window.showToast(ServerI18n.t("audienceToastClearFailed",{msg:u.message||""}),!1)}}async function e(s){if(!(!s||s==="\u2014"||!await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("audienceBanTitle"),subtitle:ServerI18n.t("cfmSubBanFp"),severity:"danger",body:ServerI18n.t("audienceBanBody",{fpHtml:'<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">fp:'+k(s.slice(0,8))+"</div>"}),confirmLabel:ServerI18n.t("audienceBanConfirm")})))try{let p=await window.csrfFetch("/admin/live/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"fingerprint",value:s})});if(!p.ok)throw new Error("HTTP "+p.status);window.showToast&&window.showToast(ServerI18n.t("audienceToastBanned",{fp:s.slice(0,8)}),!0),r()}catch(p){window.showToast&&window.showToast(ServerI18n.t("audienceToastBanFailed",{msg:p.message||""}),!1)}}function o(){let s=document.getElementById(y);s&&(s.addEventListener("input",function(u){let p=u.target.closest("[data-aud-search]");p&&(x.search=p.value||"",x.shown=f,C())}),s.addEventListener("change",function(u){let p=u.target.closest("[data-aud-sort]");p&&(x.sort=p.value,C())}),s.addEventListener("click",function(u){let p=u.target.closest("[data-aud-filter]");if(p){x.filter=p.dataset.audFilter,x.shown=f,w(),C();return}let $=u.target.closest("[data-aud-action='ban']");if($){u.stopPropagation(),e($.dataset.audFp);return}if(u.target.closest("[data-aud-action='refresh']")){r();return}if(u.target.closest("[data-aud-action='more']")){x.shown+=f,C();return}if(u.target.closest("[data-aud-action='close-detail']")){x.selectedFp=null,v();return}let O=u.target.closest("[data-aud-action='detail-ban']");if(O){e(O.dataset.audFp);return}let z=u.target.closest("[data-aud-action='detail-mask']");if(z){l(z.dataset.audFp);return}let T=u.target.closest("[data-aud-action='detail-safe']");if(T){i(T.dataset.audFp);return}let R=u.target.closest("[data-aud-action='flag']");if(R){u.stopPropagation(),n(R.dataset.audFp,R.dataset.audFlagged!=="true");return}let j=u.target.closest("[data-aud-action='kick']");if(j){u.stopPropagation(),d(j.dataset.audFp);return}let J=u.target.closest("[data-aud-action='unkick']");if(J){u.stopPropagation(),a(J.dataset.audFp);return}let W=u.target.closest("[data-aud-row]");if(!(W&&W.dataset.audFp===E)&&W&&!u.target.closest("button")){c(W.dataset.audFp);return}}))}function h(){(document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf||"dashboard")==="audience"?(r(),x.refreshTimer||(x.refreshTimer=setInterval(r,15e3))):x.refreshTimer&&(clearInterval(x.refreshTimer),x.refreshTimer=0)}function t(){let s=document.getElementById("settings-grid");!s||document.getElementById(y)||(s.insertAdjacentHTML("beforeend",m()),o(),r(),h(),window.addEventListener("hashchange",h))}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&t()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&t()})})()});var Dt=ve(()=>{(function(){"use strict";let y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],k={ArrowUp:"\u25B2",ArrowDown:"\u25BC",ArrowLeft:"\u25C0",ArrowRight:"\u25B6",b:"B",a:"A"},g=2500,f=0,x=0,U=null;function A(){if(U)return U;let w=document.createElement("div");return w.className="admin-konami-hud",w.setAttribute("aria-hidden","true"),w.innerHTML=`
      <div class="admin-konami-hud-label">Konami</div>
      <div class="admin-konami-hud-keys"></div>
      <div class="admin-konami-hud-progress"></div>
    `,document.body.appendChild(w),U=w,w}function _(){if(f===0){U&&U.classList.remove("is-on");return}let w=A();w.classList.add("is-on");let E=w.querySelector(".admin-konami-hud-keys");E&&(E.innerHTML=y.map((S,b)=>`<span class="admin-konami-hud-key ${b<f?"is-filled":""}">${k[S]}</span>`).join(""));let P=w.querySelector(".admin-konami-hud-progress");if(P){let S=Math.round(f/y.length*100);P.style.width=S+"%"}}function m(w){f=0,x&&(clearTimeout(x),x=0),w||_()}function M(){x&&clearTimeout(x),x=setTimeout(()=>m(),g)}async function F(){try{let w=await window.csrfFetch("/admin/konami/trigger",{method:"POST"});if(!w.ok)throw new Error("HTTP "+w.status);window.showToast&&window.showToast(ServerI18n.t("konamiToastFired"),!0)}catch(w){console.warn("[konami] trigger failed:",w&&w.message),window.showToast&&window.showToast(ServerI18n.t("konamiToastFailed"),!1)}}document.addEventListener("keydown",w=>{let E=w.target;if(E&&(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable))return;let P=y[f];if(!(w.key===P||P==="b"&&w.key.toLowerCase()==="b"||P==="a"&&w.key.toLowerCase()==="a")){f=w.key===y[0]?1:0,_(),f>0?M():x&&(clearTimeout(x),x=0);return}if(f++,_(),f>=y.length){m(!0),F();return}M()}),window.AdminKonami={trigger:F}})()});var Mt=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;function k(l){return l==="default"?`<span class="hud-pill is-default">${ServerI18n.t("fontTypeDefault")}</span>`:l==="enabled"?`<span class="hud-pill is-lime">${ServerI18n.t("fontsPillOn")}</span>`:l==="system"?`<span class="hud-pill">${ServerI18n.t("fontsPillSystem")}</span>`:`<span class="hud-pill">${ServerI18n.t("fontsPillOff")}</span>`}function g(){let l=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in,i=l?'<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />':"";return`
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
                ${l?`<label for="adminFontFileInput" class="admin-ui-action admin-font-upload-action" style="cursor:pointer" title="${y(ServerI18n.t("uploadFont"))}">${ServerI18n.t("uploadFont")}</label>${i}`:""}
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
    `}var f=null,x=[];function U(l,i){var e=document.getElementById("adminFontEmptyStateHost");if(!e)return;if((l||[]).some(t=>t.type==="uploaded")){e.innerHTML="";return}e.innerHTML="";var h=window.AdminEmpty.renderCustom({icon:"\u2302",title:ServerI18n.t("fontsEmptyTitle"),desc:ServerI18n.t("fontsEmptyDesc"),actionLabel:i?"\u21EA "+ServerI18n.t("uploadFont"):void 0,action:function(){var t=document.getElementById("adminFontFileInput");t&&t.click()},extra:ServerI18n.t("fontsSupportedFormats")+" \xB7 WOFF2 \xB7 WOFF \xB7 TTF \xB7 OTF"});h.dataset.emptyKind="fonts",e.appendChild(h)}function A(l,i){let e=l.weight||"\u2014",o=l.sizeLabel||"\u2014",h=l.foundry||(l.type==="system"?"System":l.type==="default"?"Google / Noto":"Uploaded"),t=l.format||"\u2014",s=l.status||l.type,u=`font-family: "${y(l.name)}", sans-serif;`,p=k(s),$=[];if(i){if(s!=="default"&&$.push(`<button class="admin-font-default-btn hud-effect-chip" data-name="${y(l.name)}">${ServerI18n.t("fontsSetDefaultBtn")}</button>`),s!=="default"){let I=s==="enabled"||s==="system",L=I?ServerI18n.t("fontsToggleOff"):ServerI18n.t("fontsToggleOn");$.push(`<button class="admin-font-toggle-btn hud-effect-chip" data-name="${y(l.name)}" data-enabled="${I?"true":"false"}">${L}</button>`)}l.type==="uploaded"&&($.push(`<button class="admin-font-subset-btn hud-effect-chip" data-name="${y(l.name)}" title="${y(ServerI18n.t("fontsSubsetBtnTitle"))}">${ServerI18n.t("fontsSubsetBtn")}</button>`),$.push(`<button class="admin-font-delete-btn admin-ui-action is-danger" data-name="${y(l.name)}">${y(ServerI18n.t("deleteBtn"))}</button>`))}return`<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${y(l.name)}"><div class="min-w-0"><div style="font-size:16px;color:var(--color-text-strong);${u}" class="truncate">${y(l.name)}</div><div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">${ServerI18n.t("fontsRowSample")}</div>`+($.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${$.join("")}</div>`:"")+`</div><span style="font-size:13px;color:var(--color-text-strong)">${y(h)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${y(e)}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${y(o)}</span><span class="hud-pill" style="text-transform:uppercase;justify-self:start">${y(t)}</span><div style="text-align:right">${p}</div></div>`}let _=null,m={latin:{label:"Latin",glyphs:"224",estSize:"48 KB"},latin_ext:{label:"Latin Ext",glyphs:"608",estSize:"120 KB"},cjk_common:{labelKey:"fontsSubsetLabelCjkCommon",glyphs:"20,992",estSize:"1.8 MB"},cjk_full:{labelKey:"fontsSubsetLabelCjkFull",glyphs:"29,810",estSize:"2.6 MB"},kana:{labelKey:"fontsSubsetLabelKana",glyphs:"352",estSize:"84 KB"},hangul:{labelKey:"fontsSubsetLabelHangul",glyphs:"11,400",estSize:"1.4 MB"}};async function M(){if(_)return _;try{let l=await fetch("/admin/fonts/subset/presets",{credentials:"same-origin"});return l.ok?(_=(await l.json()).presets||{},_):{}}catch{return{}}}function F(l){return!l||!Number.isFinite(l)?"\u2014":l<1024?l+" B":l<1024*1024?(l/1024).toFixed(1)+" KB":(l/(1024*1024)).toFixed(2)+" MB"}async function w(l){if(!window.HudConfirm){window.showToast?.(ServerI18n.t("fontsToastNeedsModal"),!1);return}let i=await M();if(!Object.keys(i).length){window.showToast?.(ServerI18n.t("fontsToastNoPresets"),!1);return}let e=new Set(["cjk_common","latin"]),o="",h=document.createElement("div");h.className="admin-font-subset-modal-body";let t=()=>{let p=Object.keys(i).map(I=>{let L=m[I]||{label:I,glyphs:"\u2014",estSize:"\u2014"},D=L.labelKey?ServerI18n.t(L.labelKey):L.label,O=e.has(I);return`
          <label class="admin-font-subset-chip${O?" is-active":""}" data-subset-preset="${I}">
            <span class="admin-font-subset-chip-check">${O?"\u2713":""}</span>
            <span class="admin-font-subset-chip-label">${y(D)}</span>
            <span class="admin-font-subset-chip-range">${y(i[I])}</span>
            <span class="admin-font-subset-chip-meta">${L.glyphs} glyphs \xB7 ${L.estSize}</span>
          </label>`}).join("");h.innerHTML=`
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
            placeholder="U+4E00-9FFF, U+FF00-FFEF">${y(o)}</textarea>
          <div class="admin-font-subset-hint">${ServerI18n.t("fontsSubsetCustomHint")}</div>
        </div>
        <div class="admin-font-subset-warn">${ServerI18n.t("fontsSubsetWarn")}</div>`,h.querySelectorAll("[data-subset-preset]").forEach(I=>{I.addEventListener("click",L=>{L.preventDefault();let D=I.dataset.subsetPreset;e.has(D)?e.delete(D):e.add(D),t()})});let $=h.querySelector("[data-subset-custom]");$&&$.addEventListener("input",()=>{o=$.value})};if(t(),!await window.HudConfirm.open({icon:"\u2297",title:ServerI18n.t("fontsSubsetModalTitle"),subtitle:ServerI18n.t("cfmSubFontSubset"),severity:"warn",confirmLabel:ServerI18n.t("fontsSubsetGenerateBtn"),cancelLabel:ServerI18n.t("cancel"),body:h,width:540}))return;let u=[];if(e.forEach(p=>{i[p]&&u.push(i[p])}),o.trim()&&u.push(o.trim()),!u.length){window.showToast?.(ServerI18n.t("fontsToastNeedPresetOrRange"),!1);return}await E(l,u.join(","))}async function E(l,i){try{window.showToast?.(ServerI18n.t("fontsToastSubsetting",{name:l}),!0);let e=await window.csrfFetch(`/admin/fonts/${encodeURIComponent(l)}/subset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({unicode_range:i})}),o=await e.json().catch(()=>({}));if(e.status===503){window.showToast?.(ServerI18n.t("fontsToastMissingFontTools"),!1);return}if(!e.ok){window.showToast?.(o.error||ServerI18n.t("fontsToastSubsetFailedHttp",{status:e.status}),!1);return}let h=o.saved_bytes||0,t=Math.round((o.saved_ratio||0)*100);window.showToast?.(ServerI18n.t("fontsToastSubsetDone",{name:l,before:F(o.original_size),after:F(o.new_size),pct:t}),!0),b()}catch(e){window.showToast?.(ServerI18n.t("fontsToastSubsetFailed",{msg:e.message||ServerI18n.t("fontsUnknownError")}),!1)}}async function P(l){try{let i=await window.csrfFetch("/admin/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"FontFamily",index:3,value:l})});if(!i.ok)throw new Error("HTTP "+i.status);f=l,window.showToast(ServerI18n.t("fontsSetDefaultToast",{name:l}),!0),b()}catch(i){console.error("[admin-fonts] set default failed:",i),window.showToast(ServerI18n.t("fontsSetDefaultFailed"),!1)}}async function S(l,i){try{let e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l)+"/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!i})});if(!e.ok)throw new Error("HTTP "+e.status);window.showToast(ServerI18n.t(i?"fontsToggleOffToast":"fontsToggleOnToast",{name:l}),!0),b()}catch(e){console.error("[admin-fonts] toggle failed:",e),window.showToast(ServerI18n.t("fontsToggleFailed"),!1)}}async function b(){var l=document.getElementById("adminFontList");if(!l)return;let i=window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in;try{var e=await window.csrfFetch("/admin/fonts",{method:"GET"});if(!e.ok)throw new Error("HTTP "+e.status);var o=await e.json(),h=o.fonts||[];if(x=h,window.AdminTabs?.setTabCount?.("assets","fonts",h.length||""),U(h,i),h.length===0){l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color:var(--color-text-muted)">${ServerI18n.t("noFontsUploaded")}</span></div>`,v(h);return}l.innerHTML=h.map(t=>A(t,i)).join(""),v(h),c()}catch(t){console.error("[admin-fonts] fetch failed:",t),l.innerHTML=`<div class="hud-table-row" style="grid-template-columns: 1fr;"><span style="font-size:11px;color: var(--color-ink-error)">${ServerI18n.t("loadFontsFailed")}</span></div>`,U([],i)}}async function C(l){try{let i=await l.slice(0,4).arrayBuffer(),e=new Uint8Array(i);return e[0]===0&&e[1]===1&&e[2]===0&&e[3]===0?"TTF":e[0]===79&&e[1]===84&&e[2]===84&&e[3]===79?"OTF":e[0]===119&&e[1]===79&&e[2]===70&&e[3]===50?"WOFF2":e[0]===116&&e[1]===114&&e[2]===117&&e[3]===101?"TTF":e[0]===116&&e[1]===116&&e[2]===99&&e[3]===102?"TTC":null}catch{return null}}function H(l,i){let e=document.getElementById("adminFontDropStatus");if(e){if(!l){e.textContent="",e.hidden=!0,e.classList.remove("is-good","is-bad");return}e.hidden=!1,e.textContent=l,e.classList.toggle("is-good",i==="good"),e.classList.toggle("is-bad",i==="bad")}}function B(l){let i=document.getElementById("adminFontUploadError");if(!i)return;if(!l){i.hidden=!0,i.innerHTML="";return}i.hidden=!1,i.innerHTML=`
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">${ServerI18n.t("fontsUploadErrorTitle")}</div>
        <div class="admin-error-panel-desc">${y(l)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>${ServerI18n.t("fontsRetrySelectFile")}</button>
      </div>
    `;let e=i.querySelector("[data-font-error-retry]");e&&e.addEventListener("click",function(){let o=document.getElementById("adminFontFileInput");o&&o.click()})}async function N(l){if(!l)return;B("");let i=l.name.toLowerCase();if(!/\.(ttf|otf|woff2)$/.test(i)){window.showToast(ServerI18n.t("invalidFileType"),!1),H(ServerI18n.t("fontsExtNotSupportedShort"),"bad"),B(ServerI18n.t("fontsExtNotSupportedFull"));return}if(l.size>5*1024*1024){window.showToast(ServerI18n.t("fontsFileTooLarge"),!1),H(ServerI18n.t("fontsFileTooLarge"),"bad"),B(ServerI18n.t("fontsFileTooLargeFull"));return}let e=await C(l);if(!e){window.showToast(ServerI18n.t("fontsInvalidFontToast"),!1),H(ServerI18n.t("fontsMagicInvalid"),"bad"),B(ServerI18n.t("fontsMagicValidationFailed"));return}H(ServerI18n.t("fontsUploadValidated",{magic:e,size:(l.size/1024).toFixed(1)}),"good");try{var o=new FormData;o.append("fontfile",l);var h=await window.csrfFetch("/admin/upload_font",{method:"POST",body:o}),t=await h.json();h.ok?(window.showToast(t.message||ServerI18n.t("fontUploadFallback")),H(ServerI18n.t("fontsUploadedStatus",{filename:l.name}),"good"),B(""),await b()):(window.showToast(t.error||ServerI18n.t("uploadFailed"),!1),H(t.error||ServerI18n.t("uploadFailed"),"bad"),B(t.error||ServerI18n.t("fontsUploadFailedRetry")))}catch(s){console.error("[admin-fonts] upload error:",s),window.showToast(ServerI18n.t("uploadNetworkError"),!1),H(ServerI18n.t("fontsNetworkErrorShort"),"bad"),B(ServerI18n.t("fontsNetworkDisconnected"))}}function v(l){let i=document.getElementById("fontsTotalSize");i&&(i.textContent=ServerI18n.t("fontsTotalCount",{n:l.length}))}function c(){document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach(l=>{l.addEventListener("click",i=>{if(i.target.closest(".admin-font-delete-btn"))return;let e=l.dataset.font,o=document.getElementById("fontsPreviewFamily"),h=document.getElementById("fontsPreviewHeadline"),t=document.getElementById("fontsPreviewLatin"),s=document.getElementById("fontsPreviewCJK");o&&(o.textContent=e);let u=`"${e}", sans-serif`;h&&(h.style.fontFamily=u),t&&(t.style.fontFamily=u),s&&(s.style.fontFamily=u)})})}async function r(){var l=document.getElementById("adminFontFileInput");if(l){var i=l.files&&l.files[0];if(!i){window.showToast(ServerI18n.t("selectTTFFile"),!1);return}await N(i),l.value=""}}function n(){let l=document.getElementById("adminFontDrop"),i=document.getElementById("adminFontFileInput");!l||!i||(l.addEventListener("click",e=>{e.target!==i&&i.click()}),l.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),i.click())}),["dragenter","dragover"].forEach(e=>{l.addEventListener(e,o=>{o.preventDefault(),o.stopPropagation(),l.classList.add("is-drag")})}),["dragleave","drop"].forEach(e=>{l.addEventListener(e,o=>{o.preventDefault(),o.stopPropagation(),l.classList.remove("is-drag")})}),l.addEventListener("drop",async e=>{let o=e.dataTransfer&&e.dataTransfer.files;o&&o[0]&&await N(o[0])}))}async function d(l){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("fontsDeleteModalTitle"),subtitle:ServerI18n.t("cfmSubDeleteFont"),severity:"danger",bodyText:ServerI18n.t("deleteFontConfirm").replace("{name}",l),confirmLabel:ServerI18n.t("deleteBtn")}))try{var e=await window.csrfFetch("/admin/fonts/"+encodeURIComponent(l),{method:"DELETE"}),o=await e.json();e.ok?(window.showToast(o.message||ServerI18n.t("fontDeleteFallback")),await b()):window.showToast(o.error||ServerI18n.t("deleteFailed"),!1)}catch(h){console.error("[admin-fonts] delete error:",h),window.showToast(ServerI18n.t("deleteNetworkError"),!1)}}function a(){var l=document.getElementById("settings-grid");if(l){l.insertAdjacentHTML("beforeend",g());var i=document.getElementById("adminFontFileInput");i&&i.addEventListener("change",r),n();var e=document.getElementById("adminFontList");e&&e.addEventListener("click",function(o){var h=o.target.closest(".admin-font-delete-btn");if(h){o.stopPropagation(),d(h.dataset.name);return}var t=o.target.closest(".admin-font-default-btn");if(t){o.stopPropagation(),P(t.dataset.name);return}var s=o.target.closest(".admin-font-toggle-btn");if(s){o.stopPropagation();let p=s.dataset.enabled==="true";S(s.dataset.name,p);return}var u=o.target.closest(".admin-font-subset-btn");u&&(o.stopPropagation(),w(u.dataset.name))}),fetch("/get_settings",{credentials:"same-origin"}).then(o=>o.ok?o.json():null).then(o=>{o&&Array.isArray(o.FontFamily)&&(f=o.FontFamily[3]||null)}).catch(()=>{}).finally(b)}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var l=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()});l.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-fonts")&&a()}})})()});var Nt=ve(()=>{(function(){"use strict";var y=window.AdminUtils.escapeHtml;let k="sec-scheduler",g=5e3,f=null,x=null;function U(a,l,i,e){return`
      <div class="admin-scheduler-msg-row" data-msg-index="${a}">
        <input type="text" placeholder="${m(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${m(l)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${m(i||"#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${e||48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">${window.AdminUtils.closeIcon}</button>
      </div>`}function A(a){var l=a==="active"?"is-success":a==="paused"?"is-warn":"is-muted";return'<span class="admin-ui-dot '+l+'" title="'+m(a)+'"></span>'}function _(a){let l=a.state==="paused",i=a.repeat_count===void 0?"\u2014":a.repeat_count===-1?"\u221E":String(a.repeat_count),e=a.repeat_count>0&&typeof a.remaining=="number"?String(a.repeat_count-a.remaining):"\u2014";return`
      <div class="admin-scheduler-job" data-job-id="${m(a.id)}">
        ${A(a.state)}
        <div>
          <div class="admin-scheduler-job-title">#${y(a.id)}</div>
          <div class="admin-scheduler-job-meta">${y(ServerI18n.t("schedulerMessages"))} ${a.messages?a.messages.length:"?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${a.interval_sec??"?"}s</span>
        <span class="admin-scheduler-job-val">${y(e)}</span>
        <span class="admin-scheduler-job-val">${y(i)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${l?"is-active":"is-warn"}"
            data-job-id="${m(a.id)}" data-action="${l?"resume":"pause"}">
            ${y(ServerI18n.t(l?"resumeJobBtn":"pauseJobBtn"))}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${m(a.id)}">${window.AdminUtils.closeIcon}</button>
        </div>
      </div>`}function m(a){return y(a)}function M(){let a=document.querySelectorAll("#schedulerMessages [data-msg-index]"),l=[];return a.forEach(function(i){let e=i.querySelector(".scheduler-msg-text").value.trim(),o=i.querySelector(".scheduler-msg-color").value,h=parseInt(i.querySelector(".scheduler-msg-size").value,10)||48;e&&l.push({text:e,color:o,size:h})}),l}function F(a,l,i){let e=document.getElementById("schedulerMessages");if(!e)return;let o=e.children.length;e.insertAdjacentHTML("beforeend",U(o,a||"",l||"#ffffff",i||48))}function w(a){let l=a.closest("[data-msg-index]");l&&l.remove();let i=document.getElementById("schedulerMessages");i&&i.querySelectorAll("[data-msg-index]").forEach(function(e,o){e.dataset.msgIndex=o})}async function E(){let a=M();if(a.length===0){showToast(ServerI18n.t("schedulerNoMessages")||"Add at least one message",!1);return}let l=parseInt(document.getElementById("schedulerInterval").value,10);if(!l||l<1||l>3600){showToast(ServerI18n.t("schedulerBadInterval")||"Interval must be 1-3600 seconds",!1);return}let i=parseInt(document.getElementById("schedulerRepeat").value,10);if(isNaN(i)||i<-1||i>1e4){showToast(ServerI18n.t("schedulerBadRepeat")||"Repeat must be -1 to 10000",!1);return}let e=document.getElementById("schedulerCreateBtn");e&&(e.disabled=!0);try{let o=await csrfFetch("/admin/scheduler/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:a,interval_sec:l,repeat_count:i})}),h=await o.json();o.ok?(showToast(ServerI18n.t("schedulerCreated")||"Job created"),await v()):showToast(h.error||ServerI18n.t("schedulerCreateFailed"),!1)}catch(o){console.error("Scheduler create error:",o),showToast(ServerI18n.t("schedulerCreateFailed")||"Failed to create job",!1)}finally{e&&(e.disabled=!1)}}function P(a){return"msg"}function S(a){return{poll:"\u22B7",msg:"\u25C8",theme:"\u2756",mute:"\u{1F507}",webhook:"\u21CC"}[a]||"\u25C8"}function b(a){return a.next_run_at?new Date(a.next_run_at*1e3).getHours():new Date().getHours()}function C(a){if(a.next_run_at){let l=new Date(a.next_run_at*1e3);return String(l.getHours()).padStart(2,"0")+":"+String(l.getMinutes()).padStart(2,"0")}return"--:--"}function H(a){let l=a.id||"job",i=Array.isArray(a.messages)?a.messages.length:null;return"Job #"+l+(i!=null?" \xB7 "+i+" messages":"")}function B(a){let l=document.querySelector("[data-sch-timeline]");if(!l)return;let i=[],e=new Date().getHours();for(let h=0;h<24;h++){let t=h>=Math.max(0,e-1)&&h<=Math.min(23,e+2);i.push('<div class="admin-sch-timeline-hour'+(t?" is-peak":"")+'">'+String(h).padStart(2,"0")+"</div>")}let o=(a||[]).map(function(h){let t=P(h),s=S(t),u=h.state!=="paused";return'<div class="admin-sch-timeline-row'+(u?"":" is-off")+'"><div class="admin-sch-timeline-row-time">'+y(C(h))+'</div><div class="admin-sch-timeline-row-body"><span class="admin-sch-evt-icon is-'+t+'">'+s+'</span><span class="admin-sch-evt-desc">'+y(H(h))+"</span>"+(!1?'<span class="admin-sch-evt-conflict">\u26A0 '+ServerI18n.t("schConflict")+"</span>":"")+'<span class="admin-sch-evt-state'+(u?" is-on":"")+'">'+ServerI18n.t(u?"uiOn":"uiOff")+"</span></div></div>"}).join("");l.innerHTML='<div class="admin-sch-timeline-head"><div class="admin-sch-timeline-head-label">'+ServerI18n.t("schHour")+'</div><div class="admin-sch-timeline-hours">'+i.join("")+"</div></div>"+(o||(window.AdminEmpty?window.AdminEmpty.renderCustom({icon:"\u23F0",title:ServerI18n.t("noActiveJobs")}).outerHTML:'<div style="padding:24px;text-align:center">'+y(ServerI18n.t("noActiveJobs"))+"</div>"))}function N(a){let l=document.querySelector("[data-sch-calendar]");if(!l)return;let i=[ServerI18n.t("schDayMon"),ServerI18n.t("schDayTue"),ServerI18n.t("schDayWed"),ServerI18n.t("schDayThu"),ServerI18n.t("schDayFri"),ServerI18n.t("schDaySat"),ServerI18n.t("schDaySun")],e=new Date,o=(e.getDay()+6)%7,h=new Date(e);h.setDate(e.getDate()-o);let t=i.map(function(u,p){let $=new Date(h);return $.setDate(h.getDate()+p),'<div class="admin-sch-calendar-day-head'+(p===o?" is-today":"")+'">'+y(u)+'<span class="date">'+$.getDate()+"</span></div>"}).join(""),s=[0,1,2,3,4,5,6].map(function(u){return'<div class="admin-sch-calendar-cell">'+(u===o?(a||[]).slice(0,5).map(function($){let I=P($),L=S(I);return'<span class="admin-sch-cal-chip is-'+I+'">'+y(C($))+" "+L+"</span>"}).join(""):"")+"</div>"}).join("");l.innerHTML='<div class="admin-sch-calendar-head">'+t+'</div><div class="admin-sch-calendar-body">'+s+"</div>"}async function v(){let a=document.getElementById("schedulerJobsList"),l=document.getElementById("schedulerJobsCount");if(a)try{let i=await csrfFetch("/admin/scheduler/list",{method:"GET"});if(!i.ok){a.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}let e=await i.json();if(!Array.isArray(e.jobs)){a.innerHTML='<div class="admin-emojis-empty">'+y(ServerI18n.t("loadJobsFailed"))+"</div>",l&&(l.textContent="\u2014");return}l&&(l.textContent=ServerI18n.t("schItemCount",{n:e.jobs.length})),B(e.jobs),N(e.jobs);let o=document.querySelector("[data-sch-meta]");if(o){let h=new Date().toISOString().slice(0,10);o.textContent=ServerI18n.t("schTodayMeta",{date:h,n:e.jobs.length})}if(e.jobs.length===0){a.innerHTML="";let h=window.AdminEmpty.render("scheduler");h.dataset.emptyKind="scheduler",a.appendChild(h);return}a.innerHTML='<div class="admin-scheduler-jobs-head"><span></span><span>'+y(ServerI18n.t("schJobsHeadMsg"))+"</span><span>"+y(ServerI18n.t("schColInterval"))+"</span><span>"+y(ServerI18n.t("schColSent"))+"</span><span>"+y(ServerI18n.t("schColRepeat"))+"</span><span></span></div>"+e.jobs.map(_).join("")}catch(i){console.error("Scheduler fetch error:",i),a.innerHTML='<div class="admin-emojis-empty" style="color: var(--color-ink-error)">'+y(ServerI18n.t("loadJobsError"))+"</div>"}}async function c(a,l){try{let i=await csrfFetch("/admin/scheduler/"+encodeURIComponent(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),e=await i.json();i.ok?(showToast(l==="pause"?ServerI18n.t("jobPaused"):ServerI18n.t("jobResumed")),await v()):showToast(e.error||ServerI18n.t("actionFailed"),!1)}catch(i){console.error("Scheduler toggle error:",i),showToast(ServerI18n.t("actionFailed"),!1)}}async function r(a){try{let l=await csrfFetch("/admin/scheduler/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:a})}),i=await l.json();l.ok?(showToast(ServerI18n.t("schedulerCancelled")||"Job cancelled"),await v()):showToast(i.error||ServerI18n.t("cancelFailed"),!1)}catch(l){console.error("Scheduler cancel error:",l),showToast(ServerI18n.t("cancelFailed"),!1)}}function n(){let a=document.getElementById("advanced-grid")||document.getElementById("settings-grid");if(!a)return;a.insertAdjacentHTML("beforeend",`
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
    `);let l=document.querySelectorAll("[data-sch-view]");l.forEach(t=>{t.addEventListener("click",()=>{let s=t.dataset.schView;l.forEach($=>{$.classList.toggle("is-active",$===t),$.setAttribute("aria-selected",$===t?"true":"false")});let u=document.querySelector("[data-sch-timeline]"),p=document.querySelector("[data-sch-calendar]");u&&(u.hidden=s!=="timeline"),p&&(p.hidden=s!=="calendar")})}),F("","#ffffff",48);let i=document.getElementById("schedulerMessages");i&&i.addEventListener("click",function(t){let s=t.target.closest(".scheduler-remove-msg");s&&w(s)});let e=document.getElementById("schedulerAddMsg");e&&e.addEventListener("click",function(){F("","#ffffff",48)});let o=document.getElementById("schedulerCreateBtn");o&&o.addEventListener("click",E);let h=document.getElementById("schedulerJobsList");h&&h.addEventListener("click",function(t){let s=t.target.closest(".scheduler-job-toggle");if(s){c(s.dataset.jobId,s.dataset.action);return}let u=t.target.closest(".scheduler-job-cancel");u&&r(u.dataset.jobId)}),f&&(clearInterval(f),f=null),x||(x=window.AdminUtils.pollWhileVisible({el:function(){return document.getElementById(k)},intervalMs:g,tick:v}),window.addEventListener("beforeunload",function(){x&&(x(),x=null)}))}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let a=!1;new MutationObserver(function(){if((document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&!a){a=!0;try{n()}finally{a=!1}}}).observe(document.body,{childList:!0,subtree:!0}),(document.getElementById("advanced-grid")||document.getElementById("settings-grid"))&&!document.getElementById(k)&&n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Pt=ve(()=>{(function(){"use strict";let y="admin-security-v2-page";var k=window.AdminUtils.escapeHtml;let g=null,f=!1,x=!1,U=0;function A(){let t=s=>ServerI18n.t(s);return`
        <div id="${y}" class="admin-security-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${t("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">${t("security2PageNote")}</p>
        </div>

        <div class="admin-ui-group-label">${t("security2CardPasswordTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2PwRowLabel")}
              <span class="sub">${t("security2PwDiscloseHint")}</span>
            </span>
            <span class="val">
              <button type="button" class="admin-ui-action" data-sec-disclose="sec2-pw-form">${t("security2SubmitChangePassword")}\u2026</button>
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
              <button type="submit" class="admin-ui-action is-primary admin-sec-action">${t("security2SubmitChangePassword")}</button>
            </form>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CurrentSessionRowLabel")}</span>
            <span class="val" id="sec2-session-self-line">\u2014</span>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("security2CardWsTokenTitle")}</div>
        <div class="admin-ui-group admin-security-ws">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2WsTokenToggleLabel")}
              <span class="sub" id="sec2-wsa-toggle-hint">${t("security2WsTokenToggleHint")}</span>
            </span>
            <span class="val">
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip" role="status">${t("security2Loading")}</span>
              <input id="sec2-wsa-toggle" type="checkbox" class="admin-ui-checkbox" aria-label="${t("security2WsTokenToggleLabel")}" aria-describedby="sec2-wsa-toggle-hint sec2-wsa-connection-hint" disabled />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall admin-security-ws-token-row">
            <input id="sec2-wsa-token" type="password" class="admin-ui-input admin-ui-grow" aria-label="${t("security2CardWsTokenTitle")}" placeholder="${t("security2NotConfigured")}" autocomplete="off" spellcheck="false" disabled />
            <span class="val">
              <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action" aria-label="${t("security2WsAuthRevealLabel")}" aria-pressed="false" disabled>${t("security2WsAuthRevealLabel")}</button>
              <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action" disabled>${t("security2CopyButton")}</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-ui-danger-btn" disabled>${t("security2RegenerateButton")}\u2026</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2LastRotationLabel")}</span>
            <span class="val">
              <span id="sec2-wsa-lastrot" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary" disabled>${t("security2SaveButton")}</button>
            </span>
          </div>
        </div>
        <p id="sec2-wsa-disabled-warning" class="admin-ui-notice is-warn" role="status" hidden>${t("security2WsAuthDisabledWarning")}</p>
        <p id="sec2-wsa-draft-hint" class="admin-ui-notice is-warn" role="status" hidden>${t("security2WsAuthDraftHint")}</p>
        <p id="sec2-wsa-saving-hint" class="admin-ui-notice" role="status" hidden>${t("security2WsAuthSavingHint")}</p>
        <p id="sec2-wsa-load-error" class="admin-ui-notice is-danger" role="alert" hidden>${t("security2WsAuthLoadFailed")}</p>
        <p id="sec2-wsa-connection-hint" class="admin-ui-page-note">${t("security2WsAuthConnectionHint")}</p>
        <details class="admin-security-ws-migration">
          <summary>${t("security2WsAuthMigrationTitle")}</summary>
          <ol>
            <li>${t("security2WsAuthMigrationPrepare")}</li>
            <li>${t("security2WsAuthMigrationDesktop")}</li>
            <li>${t("security2WsAuthMigrationEnable")}</li>
            <li>${t("security2WsAuthMigrationVerify")}</li>
          </ol>
        </details>

        <div class="admin-ui-group-label">${t("security2CardIpTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2IpToggleLabel")}
              <span class="sub" id="sec2-ip-status-line">\u2014</span>
            </span>
            <span class="val">
              <span id="sec2-ip-dot" class="admin-ui-dot is-amber"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${t("security2Loading")}</span>
              <input id="sec2-ip-toggle" type="checkbox" class="admin-ui-checkbox" />
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <textarea id="sec2-ip-entries" class="admin-ui-input admin-ui-grow" rows="3" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CurrentIpLabel")}</span>
            <span class="val">
              <span id="sec2-ip-current" class="admin-security-timestamp">\u2014</span>
              <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary">${t("security2SaveButton")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row">
            <span class="lbl">${t("security2CardAuditTitle")}</span>
            <span class="val"><a href="#/audit" class="admin-ui-action">${t("security2ViewFullLogLink")}</a></span>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("security2CardCorsTitle")}</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2CorsOriginsRowLabel")}
              <span class="sub" id="sec2-cors-origins-line">\u2014</span>
            </span>
            <textarea id="sec2-cors-origins" class="admin-ui-input" rows="2" spellcheck="false" placeholder="*"></textarea>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2CorsCredentialsToggleLabel")}
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
              <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary">${t("security2SaveButton")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">HTTPS / TLS</div>
        <div class="admin-ui-group">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2StatusLabel")}
              <span class="sub">${t("security2TlsRecommendationNote")}</span>
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

        <div class="admin-ui-danger-label">${t("security2CardDangerTitle")}</div>
        <div class="admin-ui-group is-danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2RevokeApiTokensTitle")}
              <span class="sub">${t("security2RevokeApiTokensDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-tokens">${t("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2RevokeFireTokenTitle")}
              <span class="sub">${t("security2RevokeFireTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="revoke-firetoken">${t("security2RevokeButton")}\u2026</button></span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("security2ResetWsTokenTitle")}
              <span class="sub">${t("security2ResetWsTokenDesc")}</span>
            </span>
            <span class="val"><button type="button" class="admin-ui-danger-btn" data-sec-danger="reset-ws">${t("security2RegenerateButton")}\u2026</button></span>
          </div>
        </div>
      </div>`}function _(t){if(!t)return 0;let s=0;t.length>=8&&s++,t.length>=12&&s++;let u=(/[a-z]/.test(t)?1:0)+(/[A-Z]/.test(t)?1:0)+(/\d/.test(t)?1:0)+(/[^\w]/.test(t)?1:0);return u>=2&&s++,u>=3&&s++,Math.min(4,s)}function m(t){let s=document.getElementById("sec2-pw-meter"),u=document.getElementById("sec2-pw-label");if(!s||!u)return;let p=_(t),$=[0,25,50,75,100],I=["","is-bad","is-warn","is-warn","is-good"],L=["\u2014",ServerI18n.t("security2PwWeak"),ServerI18n.t("security2PwFair"),ServerI18n.t("security2PwGood"),ServerI18n.t("security2PwStrong")];s.style.width=$[p]+"%",s.className=I[p],u.textContent=L[p]}async function M(t){t.preventDefault();let s=document.getElementById("sec2-pw-current").value,u=document.getElementById("sec2-pw-new").value,p=document.getElementById("sec2-pw-confirm").value;if(!s||!u||!p){window.showToast&&showToast(ServerI18n.t("security2ToastFillAllFields"),!1);return}if(u.length<8){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMinLength"),!1);return}if(u!==p){window.showToast&&showToast(ServerI18n.t("security2ToastPasswordMismatch"),!1);return}try{let $=await window.csrfFetch("/admin/change_password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_password:s,new_password:u,confirm_password:p})}),I=await $.json().catch(()=>({}));$.ok?(window.showToast&&showToast(ServerI18n.t("security2ToastPasswordChanged"),!0),document.getElementById("sec2-pw-form").reset(),m(""),I.reauthenticate&&window.AdminSessionExpired?.open()):window.showToast&&showToast(I.error||ServerI18n.t("security2ToastChangeFailed"),!1)}catch($){console.error("Password change error:",$),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function F(){let t=++U,s=document.getElementById("sec2-wsa-status");x=!0,w(!0),s.textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0;try{let u=await fetch("/admin/ws-auth",{credentials:"same-origin"});if(!u.ok)throw new Error(u.status);let p=await u.json();if(t!==U)return!1;g={require_token:!!p.require_token,token:p.token||""},document.getElementById("sec2-wsa-toggle").checked=!!p.require_token,document.getElementById("sec2-wsa-token").value=p.token||"",s.textContent=p.require_token?ServerI18n.t("security2StatusEnabled"):ServerI18n.t("security2StatusDisabled"),s.className="admin-ui-chip admin-sec-status-chip "+(p.require_token?"is-active":""),document.getElementById("sec2-wsa-load-error").hidden=!0,S();let $=localStorage.getItem("ws-auth-last-rotation");return document.getElementById("sec2-wsa-lastrot").textContent=$?new Date(parseInt($,10)).toLocaleString():"\u2014",!0}catch{return t!==U||(g=null,w(!0),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-load-error").hidden=!1,s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip"),!1}finally{t===U&&(x=!1,w(f||!g),f||S())}}function w(t){["toggle","token","save","rotate","copy","reveal"].forEach(s=>{document.getElementById("sec2-wsa-"+s).disabled=t}),document.querySelector('[data-sec-danger="reset-ws"]')?.toggleAttribute("disabled",t)}function E(){return f||x||!g?!1:(f=!0,++U,w(!0),document.getElementById("sec2-wsa-status").textContent=ServerI18n.t("security2Loading"),document.getElementById("sec2-wsa-disabled-warning").hidden=!0,document.getElementById("sec2-wsa-draft-hint").hidden=!0,document.getElementById("sec2-wsa-saving-hint").hidden=!1,!0)}function P(){if(f=!1,document.getElementById("sec2-wsa-saving-hint").hidden=!0,w(x||!g),g&&!x){let t=document.getElementById("sec2-wsa-status");t.textContent=ServerI18n.t(g.require_token?"security2StatusEnabled":"security2StatusDisabled"),t.className="admin-ui-chip admin-sec-status-chip "+(g.require_token?"is-active":""),S()}}function S(){if(f||x||!g)return;document.getElementById("sec2-wsa-disabled-warning").hidden=g.require_token;let t=document.getElementById("sec2-wsa-toggle").checked!==g.require_token||document.getElementById("sec2-wsa-token").value.trim()!==g.token;document.getElementById("sec2-wsa-draft-hint").hidden=!t}function b(t){return String(t||"").split(/\n+/).map(s=>s.trim()).filter(Boolean)}function C(t){return String(t||"").split(",").map(s=>s.trim().toUpperCase()).filter(Boolean)}function H(t,s){let u=document.getElementById(t);u&&(u.textContent=s==null||s===""?"\u2014":String(s))}async function B(){try{let t=await fetch("/admin/security/settings",{credentials:"same-origin"}),s=await t.json().catch(()=>({}));if(!t.ok)throw new Error(s.error||t.status);let u=s.ip_allowlist||{},p=s.cors||{},$=s.tls||{},I=!!u.enabled,L=Array.isArray(u.entries)?u.entries:[],D=document.getElementById("sec2-ip-dot"),O=document.getElementById("sec2-ip-status-chip"),z=document.getElementById("sec2-ip-toggle"),T=document.getElementById("sec2-ip-entries");D&&(D.classList.toggle("is-lime",I),D.classList.toggle("is-amber",!I)),O&&(O.textContent=I?ServerI18n.t("security2IpRestricted"):ServerI18n.t("security2StatusDisabled"),O.className="admin-ui-chip admin-sec-status-chip "+(I?"is-active":"is-warn")),z&&(z.checked=I),T&&(T.value=L.join(`
`)),H("sec2-ip-current",u.current_ip||"\u2014"),H("sec2-ip-status-line",I?ServerI18n.t("security2IpStatusEnabled",{n:L.length}):ServerI18n.t("security2IpStatusDisabled"));let R=Array.isArray(p.origins)?p.origins:["*"],j=Array.isArray(p.methods)?p.methods:[],J=document.getElementById("sec2-cors-origins"),W=document.getElementById("sec2-cors-credentials"),V=document.getElementById("sec2-cors-methods"),ae=document.getElementById("sec2-cors-cred-dot");J&&(J.value=R.join(`
`)),W&&(W.checked=!!p.supports_credentials),V&&(V.value=j.join(", ")),ae&&(ae.classList.toggle("is-lime",!p.supports_credentials),ae.classList.toggle("is-amber",!!p.supports_credentials)),H("sec2-cors-origins-line",R.join(", ")),H("sec2-cors-credentials-line",p.supports_credentials?"true":"false"),H("sec2-cors-methods-line",j.join(", "));let se=$.hsts_enabled?ServerI18n.t("security2HstsConfigured",{header:$.hsts_header||"Strict-Transport-Security"}):ServerI18n.t("security2NotConfigured");H("sec2-hsts-status",se)}catch(t){console.error("Security settings load error:",t);let s=document.getElementById("sec2-ip-status-chip");s&&(s.textContent=ServerI18n.t("security2LoadFailed"),s.className="admin-ui-chip is-danger admin-sec-status-chip")}}async function N(t){let s={};if(t==="ip")s.ip_allowlist={enabled:!!document.getElementById("sec2-ip-toggle")?.checked,entries:b(document.getElementById("sec2-ip-entries")?.value||"")};else if(t==="cors"){let u=b(document.getElementById("sec2-cors-origins")?.value||"");s.cors={origins:u.length?u:["*"],supports_credentials:!!document.getElementById("sec2-cors-credentials")?.checked,methods:C(document.getElementById("sec2-cors-methods")?.value||"")}}try{let u=await window.csrfFetch("/admin/security/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),p=await u.json().catch(()=>({}));if(!u.ok){window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1);return}window.showToast&&showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"),!0),await B()}catch(u){console.error("Security settings save error:",u),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}}async function v(){if(f||x||!g)return;let t=document.getElementById("sec2-wsa-toggle").checked,s=document.getElementById("sec2-wsa-token").value.trim();if(t&&!s){window.showToast&&showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"),!1);return}if(E())try{let u=await window.csrfFetch("/admin/ws-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({require_token:t,token:s})}),p=await u.json().catch(()=>({}));u.ok?await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastWsAuthSaved"),!0):window.showToast&&showToast(p.error||ServerI18n.t("security2ToastSaveFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}async function c(){if(!(f||x||!g||!await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("security2ResetWsTokenTitle"),subtitle:ServerI18n.t("cfmSubRotateWsToken"),severity:"warn",body:ServerI18n.t("security2RotateConfirmBody"),confirmLabel:ServerI18n.t("security2GenerateNewTokenLabel")}))&&E())try{let s=await window.csrfFetch("/admin/ws-auth/rotate",{method:"POST"}),u=await s.json().catch(()=>({}));if(s.ok){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}await F()&&window.showToast&&showToast(ServerI18n.t("security2ToastNewTokenGenerated"),!0)}else window.showToast&&showToast(u.error||ServerI18n.t("security2ToastRegenerateFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{P()}}function r(){let t=document.getElementById("sec2-wsa-token").value;if(!t){window.showToast&&showToast(ServerI18n.t("security2ToastTokenEmpty"),!1);return}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopied"),!0)).catch(()=>window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)):window.showToast&&showToast(ServerI18n.t("security2ToastCopyFailed"),!1)}function n(){let t=document.getElementById("sec2-wsa-token");t.type=t.type==="password"?"text":"password";let s=t.type==="text",u=document.getElementById("sec2-wsa-reveal");u.setAttribute("aria-pressed",String(s)),u.textContent=ServerI18n.t(s?"security2WsAuthHideLabel":"security2WsAuthRevealLabel"),u.setAttribute("aria-label",u.textContent)}async function d(t){if(t==="reset-ws"&&(f||x||!g))return;let s={"revoke-tokens":{confirm:ServerI18n.t("security2ConfirmRevokeApiTokens"),url:"/admin/security/revoke-api-tokens",ok:p=>ServerI18n.t("security2ToastApiTokensRevoked",{n:p.revoked||0})},"revoke-firetoken":{confirm:ServerI18n.t("security2ConfirmRevokeFireToken"),url:"/admin/integrations/fire-token/revoke",ok:()=>ServerI18n.t("security2ToastFireTokenRevoked")},"reset-ws":{confirm:ServerI18n.t("security2ConfirmResetWsToken"),url:"/admin/ws-auth/rotate",ok:()=>ServerI18n.t("security2ToastWsTokenReset")}}[t];if(!(!s||!await window.HudConfirm?.open({icon:"\u26A0",title:s.title||ServerI18n.t("security2ConfirmDefaultTitle"),subtitle:s.subtitle||ServerI18n.t("cfmSubSecurityAction"),severity:s.severity||"warn",body:s.confirm,confirmLabel:s.confirmLabel||ServerI18n.t("security2ConfirmDefaultLabel")}))&&!(t==="reset-ws"&&!E()))try{let p=await window.csrfFetch(s.url,{method:"POST"}),$=await p.json().catch(()=>({}));if(!p.ok){window.showToast&&showToast($.error||ServerI18n.t("security2ToastActionFailed"),!1);return}if(t==="reset-ws"){try{localStorage.setItem("ws-auth-last-rotation",String(Date.now()))}catch{}if(!await F())return}window.showToast&&showToast(s.ok($),!0)}catch(p){console.error("Security danger action error:",p),window.showToast&&showToast(ServerI18n.t("security2ToastNetworkError"),!1)}finally{t==="reset-ws"&&P()}}function a(){let t=document.getElementById("sec2-session-self-line");if(t){let p=(navigator.userAgent||"").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/),$=navigator.platform||navigator.userAgentData?.platform||"",I=p?p[0].split("/")[0]:"Browser";t.textContent=ServerI18n.t("security2SessionSelfLine",{browser:I,platform:$})}let s=document.getElementById("sec2-tls-dot"),u=document.getElementById("sec2-tls-status");if(s&&u){let p=location.protocol==="https:";s.classList.add(p?"is-lime":"is-crimson"),u.textContent=p?ServerI18n.t("security2TlsEnabledHttps"):ServerI18n.t("security2TlsDisabledHttp")}}function l(){let t=document.getElementById("sec2-pw-form");t&&t.addEventListener("submit",M);let s=document.getElementById("sec2-pw-new");s&&s.addEventListener("input",u=>m(u.target.value)),document.getElementById("sec2-wsa-save")?.addEventListener("click",v),document.getElementById("sec2-wsa-rotate")?.addEventListener("click",c),document.getElementById("sec2-wsa-copy")?.addEventListener("click",r),document.getElementById("sec2-wsa-reveal")?.addEventListener("click",n),document.getElementById("sec2-wsa-toggle")?.addEventListener("change",S),document.getElementById("sec2-wsa-token")?.addEventListener("input",S),document.getElementById("sec2-ip-save")?.addEventListener("click",()=>N("ip")),document.getElementById("sec2-cors-save")?.addEventListener("click",()=>N("cors")),document.querySelectorAll("[data-sec-disclose]").forEach(u=>{u.addEventListener("click",()=>{let p=document.querySelector(`[data-sec-disclosure="${u.dataset.secDisclose}"]`);p&&(p.hidden=!p.hidden,u.setAttribute("aria-expanded",p.hidden?"false":"true"),p.hidden||document.getElementById("sec2-pw-current")?.focus())})}),document.querySelectorAll("[data-sec-danger]").forEach(u=>{u.dataset.secBound!=="1"&&(u.dataset.secBound="1",u.addEventListener("click",()=>d(u.dataset.secDanger)))}),a(),F(),B()}function i(){}function e(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!t||!s)return;let u=t.dataset.activeRoute||"live",p=t.dataset.activeLeaf||u;s.style.display=u==="security"||u==="system"&&p==="security"?"":"none"}function o(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",A()),l(),e())}function h(){if(!window.DANMU_CONFIG?.session?.logged_in)return;let t=null;function s(){let p=document.querySelector(".admin-dash-grid");!p||t||(t=new MutationObserver(e),t.observe(p,{attributes:!0,attributeFilter:["data-active-route","data-active-leaf"]}))}new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)?o():void 0,s(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{o(),s(),e()}),s(),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var Rt=ve(()=>{(function(){"use strict";let y="admin-backup-v2-page";var k=window.AdminUtils.escapeHtml;function g(){let a=l=>ServerI18n.t(l);return`
      <div id="${y}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
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
      </div>`}async function f(){try{let a=await fetch("/get_settings",{credentials:"same-origin"});if(!a.ok)throw new Error(a.status);let l=await a.json(),i=["password","token","secret","hash"],e={};Object.keys(l||{}).forEach(u=>{i.some(p=>u.toLowerCase().includes(p))||(e[u]=l[u])});let o=new Blob([JSON.stringify({exported_at:new Date().toISOString(),version:1,settings:e},null,2)],{type:"application/json"}),h=URL.createObjectURL(o),t=new Date().toISOString().replace(/[:.]/g,"-"),s=document.createElement("a");s.href=h,s.download="danmu-settings-"+t+".json",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(h),4e3),window.showToast&&showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"),!0)}catch(a){console.error("Settings snapshot error:",a),window.showToast&&showToast(ServerI18n.t("backupSnapshotFailed"),!1)}}let x=null;function U(){x=null;let a=document.getElementById("bk2-settings-apply");a&&(a.disabled=!0,a.title=ServerI18n.t("backupApplyDisabledTitle"))}async function A(){let a=document.getElementById("bk2-settings-upload"),l=document.getElementById("bk2-settings-diff"),i=document.getElementById("bk2-settings-apply"),e=a&&a.files&&a.files[0];if(!e){U(),window.showToast&&showToast(ServerI18n.t("backupSelectJsonFirst"),!1);return}try{let o=await e.text(),h=JSON.parse(o),t=h.settings||h;if(!t||typeof t!="object"||Array.isArray(t))throw new Error(ServerI18n.t("backupSettingsMustBeObject"));let s=await fetch("/get_settings",{credentials:"same-origin"}),u=s.ok?await s.json():{},p=[];new Set([...Object.keys(u),...Object.keys(t)]).forEach(I=>{let L=JSON.stringify(u[I]),D=JSON.stringify(t[I]);L!==D&&(L===void 0?p.push("+ "+I+": "+D):D===void 0?p.push("- "+I+": "+L):p.push("~ "+I+": "+L+" \u2192 "+D))}),l.textContent=p.length?p.join(`
`):ServerI18n.t("backupNoDiff"),l.hidden=!1,x=t,i&&(i.disabled=!1,i.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast&&showToast(ServerI18n.t("backupDiffCount",{n:p.length}),!0)}catch(o){console.error("Dry-run error:",o),U(),l.textContent=ServerI18n.t("backupParseFailedDetail",{msg:o&&o.message?o.message:String(o)}),l.hidden=!1,window.showToast&&showToast(ServerI18n.t("backupParseFailed"),!1)}}async function _(){let a=document.getElementById("bk2-settings-diff"),l=document.getElementById("bk2-settings-apply");if(!x){window.showToast&&showToast(ServerI18n.t("backupDryRunFirst"),!1);return}if(await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplySettingsConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreSettings"),severity:"warn",body:ServerI18n.t("backupApplySettingsConfirmBody"),confirmLabel:ServerI18n.t("backupApplyBtn")}))try{let e=await window.csrfFetch("/admin/settings/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({settings:x})}),o=await e.json().catch(()=>({}));if(!e.ok){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyFailedDetail",{details:JSON.stringify(o.details||o,null,2)})),window.showToast&&showToast(ServerI18n.t("backupSettingsApplyFailed"),!1);return}a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyCompleteHeader")+`
Applied `+(o.applied||[]).length+" settings"),x=null,l&&(l.disabled=!0,l.title=ServerI18n.t("backupApplyDisabledTitle")),window.showToast&&showToast(ServerI18n.t("backupSettingsApplied"),!0)}catch(e){a&&(a.hidden=!1,a.textContent=ServerI18n.t("backupApplyErrorDetail",{msg:e&&e.message?e.message:String(e)})),window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}async function m(){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("backupClearHistoryConfirmTitle"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("backupClearHistoryConfirmBody"),confirmLabel:ServerI18n.t("backupClearHistoryConfirmLabel")}))try{(await window.csrfFetch("/admin/history/clear",{method:"POST"})).ok?window.showToast&&showToast(ServerI18n.t("backupHistoryCleared"),!0):window.showToast&&showToast(ServerI18n.t("backupClearFailed"),!1)}catch{window.showToast&&showToast(ServerI18n.t("backupNetworkError"),!1)}}function M(){let a=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");!a||!l||(a.addEventListener("input",()=>{let i=a.value.trim()==="reset";l.classList.toggle("is-ready",i),l.disabled=!i}),l.addEventListener("click",F))}async function F(){let a=document.getElementById("bk2-factory-confirm"),l=document.getElementById("bk2-factory-reset");if((a?.value||"").trim()!=="reset"){window.showToast&&showToast(ServerI18n.t("backupEnterResetToConfirm"),!1);return}if(await window.HudConfirm?.open({icon:"\u2298",title:"Factory reset",subtitle:ServerI18n.t("cfmSubFactoryReset"),severity:"danger",body:ServerI18n.t("backupFactoryResetConfirmBody"),confirmLabel:ServerI18n.t("backupFactoryResetConfirmLabel")}))try{l&&(l.disabled=!0);let e=await window.csrfFetch("/admin/backup/factory-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirm:"reset"})}),o=await e.json().catch(()=>({}));if(!e.ok||!o.ok){window.showToast&&showToast(ServerI18n.t("backupFactoryResetFailed"),!1),l&&(l.disabled=!1);return}a&&(a.value=""),l&&(l.classList.remove("is-ready"),l.disabled=!0),window.showToast&&showToast(ServerI18n.t("backupFactoryResetDone"),!0),S()}catch{l&&(l.disabled=!1),window.showToast&&showToast(ServerI18n.t("backupFactoryResetNetworkError"),!1)}}function w(){document.getElementById("bk2-settings-download")?.addEventListener("click",f),document.getElementById("bk2-settings-dryrun")?.addEventListener("click",A),document.getElementById("bk2-settings-apply")?.addEventListener("click",_),document.getElementById("bk2-clear-history")?.addEventListener("click",m),document.getElementById("bk2-pack-export")?.addEventListener("click",b),document.getElementById("bk2-pack-dryrun")?.addEventListener("click",B),document.getElementById("bk2-pack-apply")?.addEventListener("click",N),document.getElementById("bk2-assets-export")?.addEventListener("click",H),document.getElementById("bk2-assets-dryrun")?.addEventListener("click",v),document.getElementById("bk2-assets-apply")?.addEventListener("click",c),M(),S(),C()}let E=null,P=null;async function S(){let a=document.getElementById("bk2-pack-summary");if(a)try{let l=await fetch("/admin/backup/manifest",{credentials:"same-origin"});if(!l.ok){a.textContent=ServerI18n.t("backupPreviewUnavailable");return}let i=await l.json(),e=(i.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:i.file_count||0,mb:e})}catch{a.textContent=ServerI18n.t("backupPreviewFailedNetwork")}}function b(){window.location.href="/admin/backup/export",window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"),!0)}async function C(){let a=document.getElementById("bk2-assets-summary");if(a)try{let l=await fetch("/admin/backup/assets/manifest",{credentials:"same-origin"});if(!l.ok){a.textContent=ServerI18n.t("backupAssetPreviewUnavailable");return}let i=await l.json(),e=(i.total_bytes/(1024*1024)).toFixed(2);a.innerHTML=ServerI18n.t("backupPackSizeSummary",{count:i.file_count||0,mb:e})}catch{a.textContent=ServerI18n.t("backupAssetPreviewFailedNetwork")}}function H(){window.location.href="/admin/backup/assets/export",window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"),!0)}async function B(){let l=document.getElementById("bk2-pack-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"),!1);return}if(l.size>16*1024*1024){window.showToast?.(ServerI18n.t("backupFileOver16MB"),!1);return}let i=new FormData;i.append("file",l);let e=document.getElementById("bk2-pack-diff"),o=document.getElementById("bk2-pack-apply");try{let h=await window.csrfFetch("/admin/backup/import?dry_run=true",{method:"POST",body:i}),t=await h.json().catch(()=>({}));if(!h.ok||!t.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupValidateFailedDetail",{details:JSON.stringify(t.errors||t,null,2)})),window.showToast?.(ServerI18n.t("backupDryRunFailed"),!1),o&&(o.disabled=!0),E=null;return}if(e){e.hidden=!1;let s=[],u=t.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(t.members?.length||0)+" files:"),(t.members||[]).forEach(p=>{s.push("  "+p.label+"/"+p.path.split("/").slice(1).join("/")+" ("+(p.size||0)+" B)")}),t.skipped?.length&&(s.push(""),s.push("Skipped "+t.skipped.length+" entries:"),t.skipped.forEach(p=>s.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=s.join(`
`)}E=l,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupDryRunPassedCount",{n:t.members?.length||0}),!0)}catch(h){window.showToast?.(ServerI18n.t("backupDryRunErrorDetail",{msg:h.message||""}),!1)}}async function N(){if(!E){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyFullPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestorePack"),severity:"danger",body:ServerI18n.t("backupApplyFullPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyPackConfirmLabel")}))return;let l=new FormData;l.append("file",E);try{let e=await(await window.csrfFetch("/admin/backup/import",{method:"POST",body:l})).json().catch(()=>({})),o=document.getElementById("bk2-pack-diff");if(o){o.hidden=!1;let h=[];e.ok?(h.push("\u2713 "+ServerI18n.t("backupApplyCompleteHeader")),h.push(""),h.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&h.push("Skipped "+e.skipped.length+" (see above)")):(h.push("\u2717 "+ServerI18n.t("backupApplyFailedHeader")),h.push(JSON.stringify(e.errors||e,null,2))),o.textContent=h.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint",{n:e.applied}),!0),E=null;let h=document.getElementById("bk2-pack-apply");h&&(h.disabled=!0)}else window.showToast?.(ServerI18n.t("backupApplyFailedHeader"),!1)}catch(i){window.showToast?.(ServerI18n.t("backupApplyErrorToast",{msg:i.message||""}),!1)}}async function v(){let l=document.getElementById("bk2-assets-upload")?.files?.[0];if(!l){window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"),!1);return}if(l.size>64*1024*1024){window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"),!1);return}let i=new FormData;i.append("file",l);let e=document.getElementById("bk2-assets-diff"),o=document.getElementById("bk2-assets-apply");try{let h=await window.csrfFetch("/admin/backup/assets/import?dry_run=true",{method:"POST",body:i}),t=await h.json().catch(()=>({}));if(!h.ok||!t.ok){e&&(e.hidden=!1,e.textContent=ServerI18n.t("backupAssetValidateFailedDetail",{details:JSON.stringify(t.errors||t,null,2)})),window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"),!1),o&&(o.disabled=!0),P=null;return}if(e){e.hidden=!1;let s=[],u=t.manifest||{};s.push("manifest version: "+(u.version||"?")),s.push("generated_at: "+(u.generated_at?new Date(u.generated_at*1e3).toISOString():"\u2014")),s.push(""),s.push("Will write "+(t.members?.length||0)+" asset files:"),(t.members||[]).forEach(p=>{s.push("  "+p.path+" ("+(p.size||0)+" B)")}),t.skipped?.length&&(s.push(""),s.push("Skipped "+t.skipped.length+" entries:"),t.skipped.forEach(p=>s.push("  "+p.path+" \u2014 "+p.reason))),e.textContent=s.join(`
`)}P=l,o&&(o.disabled=!1,o.title=ServerI18n.t("backupApplyEnabledTitle")),window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount",{n:t.members?.length||0}),!0)}catch(h){window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail",{msg:h.message||""}),!1)}}async function c(){if(!P){window.showToast?.(ServerI18n.t("backupDryRunFirst"),!1);return}if(!await window.HudConfirm?.open({icon:"\u26A0",title:ServerI18n.t("backupApplyAssetPackConfirmTitle"),subtitle:ServerI18n.t("cfmSubRestoreAssets"),severity:"warn",body:ServerI18n.t("backupApplyAssetPackConfirmBody"),confirmLabel:ServerI18n.t("backupApplyAssetPackConfirmTitle")}))return;let l=new FormData;l.append("file",P);try{let e=await(await window.csrfFetch("/admin/backup/assets/import",{method:"POST",body:l})).json().catch(()=>({})),o=document.getElementById("bk2-assets-diff");if(o){o.hidden=!1;let h=[];e.ok?(h.push("\u2713 "+ServerI18n.t("backupAssetApplyCompleteHeader")),h.push(""),h.push("Applied "+(e.applied||0)+" files"),e.skipped?.length&&h.push("Skipped "+e.skipped.length+" (see above)")):(h.push("\u2717 "+ServerI18n.t("backupAssetApplyFailedHeader")),h.push(JSON.stringify(e.errors||e,null,2))),o.textContent=h.join(`
`)}if(e.ok){window.showToast?.(ServerI18n.t("backupAssetPackApplied",{n:e.applied}),!0),P=null;let h=document.getElementById("bk2-assets-apply");h&&(h.disabled=!0),C()}else window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"),!1)}catch(i){window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast",{msg:i.message||""}),!1)}}function r(){let a=document.querySelector(".admin-dash-grid"),l=document.getElementById(y);if(!a||!l)return;let i=a.dataset.activeLeaf||"dashboard";l.style.display=i==="backup"?"":"none"}function n(){let a=document.getElementById("settings-grid");!a||document.getElementById(y)||(a.insertAdjacentHTML("beforeend",g()),w(),r())}function d(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&n(),r()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",r),document.addEventListener("admin-panel-rendered",()=>{n(),r()}),n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d()})()});var Ot=ve(()=>{(function(){"use strict";let y="admin-broadcast-v2-page",k="/admin/broadcast/status",g="/admin/broadcast/toggle",f={mode:"live",started_at:null,total_messages:0,queue_size:0};function x(t){try{window.dispatchEvent(new CustomEvent("danmu-broadcast-changed",{detail:t}))}catch{}}function U(){return{mode:f.mode,started_at:typeof f.started_at=="number"?f.started_at*1e3:null}}let A=null;async function _(){try{let t=await fetch(k,{credentials:"same-origin"});if(!t.ok)return;let s=await t.json();s&&(s.mode==="live"||s.mode==="standby")&&(A=s.session||null,f=s,x(U()))}catch{}}async function m(t){try{let s=await window.csrfFetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!s.ok){let p=await s.json().catch(()=>({}));throw new Error(p&&p.error?p.error:`HTTP ${s.status}`)}return f=await s.json(),x(U()),!0}catch(s){return console.warn("[admin-broadcast] toggle failed:",s),window.showToast&&window.showToast(ServerI18n.t("broadcastToastToggleFailed",{msg:s&&s.message||""}),!1),!1}}function M(t){(!Number.isFinite(t)||t<0)&&(t=0);let s=Math.floor(t/1e3),u=String(Math.floor(s/3600)).padStart(2,"0"),p=String(Math.floor(s%3600/60)).padStart(2,"0"),$=String(s%60).padStart(2,"0");return`${u}:${p}:${$}`}function F(){let t=A||{};return t.status==="live"||t.state==="active"}function w(){let t=A||{};return t.status==="ended"||t.state==="ended"}function E(){let t=f.mode||"standby";return w()?"ended":t==="live"?"live":F()?"paused":"standby"}function P(){return`
      <div id="${y}" class="admin-broadcast-page admin-bc-v4 admin-bc-v5 hud-page-stack lg:col-span-2" data-bc-state="standby">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-bc-title>${ServerI18n.t("adminRouteTitle_overlay")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("broadcastPageNote")}</p>
        </div>

        <!-- Body slot \u2014 content swaps by state (ended uses a centered card) -->
        <div class="admin-bc-v4__body" data-bc-body>
          <!-- Status indicator (centered, calm) -->
          <div class="admin-bc-v5__status-row">
            <span class="admin-bc-v4__statedot" data-bc-statedot></span>
            <span class="admin-bc-v5__status-label" data-bc-statelabel>${ServerI18n.t("uiDisplayOff")}</span>
          </div>

          <!-- Stats strip \u2014 4 tiles (SESSION ACTIVITY framing) -->
          <div class="admin-bc-v4__stats" data-bc-stats>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-v" data-bc-stat-elapsed>\u2014</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-v" data-bc-stat-msgs>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-v" data-bc-stat-fp>0</div></div>
            <div class="admin-bc-v4__stat"><div class="admin-bc-v4__stat-v" data-bc-stat-fire>0</div></div>
          </div>

          <!-- Primary toggle (2-state + paused sub-state) -->
          <div class="admin-bc-v4__big-wrap">
            <button type="button" class="admin-bc-v4__big" data-bc-big>${ServerI18n.t("broadcastBigStart")}</button>
          </div>

          <!-- Confirm hint when ON -->
          <div class="admin-bc-v4__confirm-hint admin-bc-v5__confirm-hint" data-bc-confirm-hint hidden>
            ${ServerI18n.t("broadcastConfirmHint")}
          </div>

          <!-- Secondary controls \u2014 CLEAR only.\uFF082026-07-30 \u780D\u6389\u300C\u66AB\u505C\u986F\u793A\u300D\uFF1A
               \u5B83\u8207\u4E3B\u6309\u9215\u7684\u300C\u505C\u6B62\u986F\u793A\u300D\u6253\u7684\u662F\u540C\u4E00\u500B postToggle("standby")\uFF0C
               server \u53EA\u6709 live/standby \u4E8C\u614B \u2014\u2014 \u540C\u4E00\u4EF6\u4E8B\u5169\u500B\u540D\u5B57\u53EA\u6703\u8B93\u4EBA\u731C
               \u5DEE\u5225\u3002\u8A5E\u5F59\u6539\u7531\u4E3B\u6309\u9215\u96A8\u5834\u6B21\u72C0\u614B\u5207\u63DB\u3002\uFF09 -->
          <div class="admin-bc-v4__secondary admin-bc-v5__secondary" data-bc-secondary>
            <button type="button" class="admin-bc-v4__sec is-clear" data-bc-clear>
              <span class="admin-bc-v4__sec-label">${ServerI18n.t("broadcastClearScreenBtn")}</span>
            </button>
          </div>

          <!-- Session context card \u2014 overlay is the toggle, session is the data slice -->
          <div class="admin-bc-v5__session-ctx" data-bc-session-ctx>
            <div class="admin-bc-v5__session-label">${ServerI18n.t("uiSessionContext")} \xB7 ${ServerI18n.t("broadcastDataSliceLabel")}</div>
            <div class="admin-bc-v5__session-row">
              <span class="admin-bc-v5__session-id" data-bc-session-id>\u2014</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-started>Started \xB7 \u2014</span>
              <span class="admin-bc-v5__session-meta" data-bc-session-window>Window \xB7 \u2014</span>
              <span class="admin-bc-v5__spacer"></span>
              <a class="admin-bc-v5__session-link" href="#/sessions">${ServerI18n.t("broadcastManageSessionsLink")}</a>
            </div>
          </div>
        </div>

        <!-- Ended state card (rendered only when session has been formally ended) -->
        <div class="admin-bc-v4__ended" data-bc-ended hidden>
          <div class="admin-bc-v4__ended-icon">\u25A0</div>
          <div class="admin-bc-v4__ended-title">${ServerI18n.t("broadcastEndedTitle")}</div>
          <div class="admin-bc-v4__ended-stats">
            <div><div data-bc-end-dur>\u2014</div></div>
            <div><div data-bc-end-msgs>\u2014</div></div>
            <div><div data-bc-end-fp>\u2014</div></div>
            <div><div data-bc-end-fire>\u2014</div></div>
          </div>
          <a class="admin-bc-v4__ended-link" data-bc-go-sessions href="#/sessions">${ServerI18n.t("broadcastViewSessionsLink")}</a>
        </div>
      </div>`}let S=0,b=0,C=0,H=0,B=0;async function N(){try{let t=await fetch("/admin/metrics",{credentials:"same-origin"});if(!t.ok)return;S=(await t.json()).ws_clients||0}catch{}try{let t=await fetch("/admin/fingerprints?limit=1",{credentials:"same-origin"});if(t.ok){let s=await t.json();typeof s.total=="number"&&(b=s.total)}}catch{}}let v={standby:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 OFF"},live:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 ON"},paused:{titleKey:"adminRouteTitle_overlay",en:"DESKTOP \xB7 PAUSED"},ended:{titleKey:"broadcastEndedTitle",en:"SESSION ENDED"}},c={standby:ServerI18n.t("uiDisplayOff"),live:ServerI18n.t("uiDisplayOn"),paused:"DESKTOP PAUSED",ended:"SESSION ENDED"};function r(){let t=document.getElementById(y);if(!t)return;let s=E(),u=s==="live",p=s==="paused",$=s==="ended",I=s==="standby";t.dataset.bcState=s;let L=t.querySelector("[data-bc-title]"),D=t.querySelector("[data-bc-en]");if(L&&(L.textContent=ServerI18n.t(v[s].titleKey)),D){let K=u&&f.started_at?Date.now()/1e3-f.started_at:0;D.textContent=u?`DESKTOP \xB7 ON \xB7 ${M(K*1e3)}`:$&&A?.ended_at?`SESSION ENDED \xB7 ${new Date(A.ended_at*1e3).toISOString().slice(0,10)}`:v[s].en}let O=t.querySelector("[data-bc-body]"),z=t.querySelector("[data-bc-ended]");O&&z&&(O.hidden=$,z.hidden=!$);let T=t.querySelector("[data-bc-statedot]"),R=t.querySelector("[data-bc-statelabel]"),j=t.querySelector("[data-bc-elapsed]"),J=t.querySelector("[data-bc-sched]");if(T&&(T.dataset.state=s),R&&(R.textContent=c[s]||c.standby,R.dataset.state=s),j){let K=u&&f.started_at?Date.now()-f.started_at*1e3:0;j.textContent=M(K),j.hidden=!u}if(J){let K=A?.scheduled_at;if(I&&typeof K=="number"&&K>Date.now()/1e3){let Q=Math.max(0,K-Date.now()/1e3),X=String(Math.floor(Q/60)).padStart(2,"0"),oe=String(Math.floor(Q%60)).padStart(2,"0"),me=new Date(K*1e3),fe=`${String(me.getHours()).padStart(2,"0")}:${String(me.getMinutes()).padStart(2,"0")}`;J.textContent=ServerI18n.t("broadcastSchedCountdown",{time:fe,mm:X,ss:oe}),J.hidden=!1}else J.hidden=!0}let W=f.total_messages||0,V=f.fire_count||W,ae=f.started_at&&(u||p)?Date.now()/1e3-f.started_at:0,se=I?"\u2014":M(ae*1e3).slice(3),G=(K,Q)=>{let X=t.querySelector(K);X&&(X.textContent=Q)};G("[data-bc-stat-elapsed]",I?"\u2014":se),G("[data-bc-stat-msgs]",I?"0":W.toLocaleString()),G("[data-bc-stat-fp]",I?"0":b.toLocaleString()),G("[data-bc-stat-fire]",I?"0":V.toLocaleString());let Z=t.querySelector("[data-bc-session-ctx]");if(Z){let K=A||{},Q=!!(K.id||K.name);if(Z.hidden=!Q,Q){let X=t.querySelector("[data-bc-session-id]"),oe=t.querySelector("[data-bc-session-started]"),me=t.querySelector("[data-bc-session-window]");if(X&&(X.textContent=K.name||K.id||"\u2014"),oe){let fe=K.started_at;if(typeof fe=="number"){let ke=new Date(fe*1e3),Ie=Se=>String(Se).padStart(2,"0");oe.textContent=`Started \xB7 ${Ie(ke.getHours())}:${Ie(ke.getMinutes())}:${Ie(ke.getSeconds())}`}else oe.textContent="Started \xB7 \u2014"}if(me){let fe=K.started_at;if(typeof fe=="number"){let ke=Date.now()-fe*1e3;me.textContent=`Window \xB7 ${M(ke).slice(3)}`}else me.textContent="Window \xB7 \u2014"}}}let ne=t.querySelector("[data-bc-big]");if(ne)if(u){let K=F();ne.className="admin-bc-v4__big admin-bc-v5__big is-on",ne.textContent=K?ServerI18n.t("broadcastBigPause"):ServerI18n.t("broadcastBigStop")}else p?(ne.className="admin-bc-v4__big admin-bc-v5__big is-resume",ne.textContent=ServerI18n.t("broadcastBigResume")):(ne.className="admin-bc-v4__big admin-bc-v5__big is-off",ne.textContent=ServerI18n.t("broadcastBigStart"));let ie=t.querySelector("[data-bc-confirm-hint]");if(ie&&(ie.hidden=!(u&&!F())),t.querySelectorAll("[data-bc-clear]").forEach(K=>{K.disabled=I||$}),$){let K=A||{},Q=K.duration_sec?M(K.duration_sec*1e3).slice(3):"\u2014";G("[data-bc-end-dur]",Q),G("[data-bc-end-msgs]",String(K.total_messages||W||"\u2014")),G("[data-bc-end-fp]",String(K.unique_fp||b||"\u2014")),G("[data-bc-end-fire]",String(K.fire_count||V||"\u2014"))}}async function n(){let t=E();if(t==="standby")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastSwitchedLive"),!0);else if(t==="paused")await m("live")&&window.showToast&&showToast(ServerI18n.t("broadcastToastResumed"),!0);else if(t==="live"){if(F()){await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastPaused"),!0),r();return}let u=f.started_at?Date.now()-f.started_at*1e3:0,p=M(u),$=f.total_messages||0,I=b.toLocaleString();if(!await window.HudConfirm?.open({icon:"\u25A0",title:ServerI18n.t("broadcastStopLabel"),subtitle:ServerI18n.t("cfmSubStopDisplay"),severity:"warn",body:`
              <div style="font-size:13px;color:var(--hud-text, #f1f5f9);line-height:1.7;">
                ${ServerI18n.t("broadcastStopBodyDesc")}
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px 12px;margin-top:12px;background:var(--hud-bg2, #182239);border-radius:6px;border:1px solid var(--hud-line, rgba(148,163,184,0.18));text-align:center;">
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiStatMsgs")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${$.toLocaleString()}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">FP</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${I}</div></div>
                <div><div style="font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:1px;color:var(--hud-text-dim, #94a3b8);">${ServerI18n.t("uiColTime")}</div><div style="font-size:13px;font-weight:600;margin-top:2px;">${p}</div></div>
              </div>
              <div style="margin-top:12px;font-family:var(--hud-font-mono, ui-monospace, monospace);font-size:11px;letter-spacing:0.3px;color: var(--color-ink-warning);">
                ${ServerI18n.t("broadcastStopBodyWarn")}
              </div>`,confirmLabel:ServerI18n.t("broadcastStopLabel"),cancelLabel:ServerI18n.t("cancel"),width:440}))return;await m("standby")&&window.showToast&&showToast(ServerI18n.t("broadcastToastStopped")+" \xB7 "+ServerI18n.t("uiDisplayOff"),!0)}r()}async function d(){if(await window.HudConfirm?.open({icon:"\u232B",title:ServerI18n.t("broadcastClearModalTitle"),subtitle:ServerI18n.t("cfmSubClearScreen"),severity:"warn",body:ServerI18n.t("broadcastClearModalBody"),confirmLabel:ServerI18n.t("broadcastClearModalConfirm")}))try{let s=await window.csrfFetch("/admin/overlay/clear",{method:"POST"});s.ok?window.showToast&&showToast(ServerI18n.t("broadcastToastCleared"),!0):window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailedHttp",{status:s.status}),!1)}catch{window.showToast&&showToast(ServerI18n.t("broadcastToastClearFailed"),!1)}}function a(){let t=document.getElementById(y);t&&(t.querySelector("[data-bc-big]")?.addEventListener("click",n),t.querySelector("[data-bc-clear]")?.addEventListener("click",d))}function l(){C||(_(),N(),r(),H=setInterval(_,5e3),C=setInterval(()=>{N().then(r)},1e4),B=setInterval(r,1e3))}function i(){H&&(clearInterval(H),H=0),C&&(clearInterval(C),C=0),B&&(clearInterval(B),B=0)}function e(){let t=document.querySelector(".admin-dash-grid"),s=document.getElementById(y);if(!t||!s)return;let u=t.dataset.activeLeaf||"dashboard",p=u==="overlay"||u==="broadcast";s.style.display=p?"":"none",p?l():i()}function o(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",P()),a(),e())}function h(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById(y)&&o(),e()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",e),document.addEventListener("admin-panel-rendered",()=>{o(),e()}),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()})()});var qt=ve(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml;let f=["keyword","regex","replace","rate_limit"],x=["block","replace","allow","review"],U={block:"fltActBlock",replace:"fltActReplace",allow:"fltActAllow",review:"fltActReview"};function A(T){var R=y();return R[T]!==void 0?R[T]:!1}function _(T,R){if(typeof ServerI18n<"u"&&ServerI18n.t){let j=ServerI18n.t(T);if(j&&j!==T)return j}return R||T}let m={keyword:"is-cyan",regex:"is-cyan",replace:"is-amber",rate_limit:"is-danger"},M={block:"var(--hud-crimson)",replace:"var(--hud-amber)",allow:"var(--hud-lime)",review:"var(--color-ink-accent)"};function F(){return`
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
      </div>`}let w="all";function E(T){let R=m[T.type]||"is-default",j=M[T.action]||"var(--color-text-muted)",J={keyword:"ulWord",regex:"ulRegex",replace:"ulReplace",rate_limit:"ulRate"},W=ServerI18n.t(J[T.type]||"ulWord"),V=T.pattern;if(T.type==="replace"&&T.replacement!==void 0&&(V=`${T.pattern}  \u2192  ${T.replacement}`),T.type==="rate_limit"){let G=T.max_count||5,Z=T.window_sec||60;V=`${T.pattern}  \xB7  ${G}/${Z}s`}let ae=T.enabled?"":"opacity:0.45;",se=U[T.action]?ServerI18n.t(U[T.action]):T.action;return`
      <div class="hud-table-row hud-rule-row admin-flt-v4__grid" style="${ae}" data-rule-id="${g(T.id)}" data-rule-type="${g(T.type)}">
        <span style="font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all">${g(V)}</span>
        <span class="hud-pill ${R}">${W}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${j};color:#000;font-weight:700;width:fit-content">${g(se)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${g(String(T.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${g(T.enabled?_("enabled","Enabled"):_("disabled","Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${g(T.id)}" ${T.enabled?"checked":""} />
          <span class="admin-filter-toggle-dot ${T.enabled?"is-on":"is-off"}" style="cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${g(T.id)}" title="${_("deleteRule","Delete")}" aria-label="${_("deleteRule","Delete")}">${window.AdminUtils.closeIcon}</button>
      </div>`}function P(T){let R={all:T.length,keyword:0,regex:0,replace:0,rate_limit:0};T.forEach(J=>{R[J.type]!=null&&R[J.type]++}),Object.keys(R).forEach(J=>{let W=document.querySelector(`[data-filter-count="${J}"]`);W&&(W.textContent=R[J])});let j=document.querySelector('[data-mod-stat="rules"]');j&&(j.textContent=R.all)}async function S(){let T=document.querySelector('[data-mod-stat="blacklist"]');if(T)try{let R=await fetch("/admin/blacklist/get",{credentials:"same-origin"});if(!R.ok)return;let j=await R.json(),J=Array.isArray(j)?j:j.keywords||[];T.textContent=String(J.length)}catch{}}async function b(){try{let T=await csrfFetch("/admin/filters/list");if(!T.ok)throw new Error("HTTP "+T.status);return(await T.json()).rules||[]}catch(T){return console.error("Failed to fetch filter rules:",T),showToast(_("fetchFiltersFailed","Failed to load filter rules"),!1),[]}}async function C(){let T=document.getElementById("filterRulesList");if(!T)return;T.innerHTML=`<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${_("loading","Loading...")}</div>`;let R=await b();if(P(R),S(),R.length===0){if(window.AdminEmpty){let J=window.AdminEmpty.render("filters");J.setAttribute("data-empty-kind","filters"),T.innerHTML="",T.appendChild(J)}else T.innerHTML=`<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${_("noFilterRules","No filter rules configured.")}</div>`;return}let j=w==="all"?R:R.filter(J=>J.type===w);T.innerHTML=j.map(E).join("")}async function H(){let T=document.getElementById("filterType"),R=document.getElementById("filterAction"),j=document.getElementById("filterPattern"),J=document.getElementById("filterReplacement"),W=document.getElementById("filterPriority"),V=document.getElementById("filterMaxCount"),ae=document.getElementById("filterWindowSec"),se=T.value,G=(j.value||"").trim();if(!G){showToast(_("patternRequired","Pattern is required"),!1),j.focus();return}let Z={type:se,pattern:G,action:R.value,priority:parseInt(W.value,10)||0};se==="replace"&&(Z.replacement=J.value||""),se==="rate_limit"&&(Z.max_count=parseInt(V.value,10)||5,Z.window_sec=parseFloat(ae.value)||60);try{let ne=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z)}),ie=await ne.json();if(!ne.ok){showToast(ie.error||_("addRuleFailed","Failed to add rule"),!1);return}showToast(_("ruleAdded","Rule added"),!0),j.value="",J.value="",await C()}catch(ne){console.error("Add filter rule error:",ne),showToast(_("addRuleFailed","Failed to add rule"),!1)}}async function B(T){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("filtersDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteFilterRule"),severity:"danger",body:_("confirmDeleteRule","Delete this filter rule?"),confirmLabel:ServerI18n.t("filtersDeleteConfirm")}))try{let j=await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T})}),J=await j.json();if(!j.ok){showToast(J.error||_("deleteRuleFailed","Failed to delete rule"),!1);return}showToast(_("ruleDeleted","Rule deleted"),!0),await C()}catch(j){console.error("Delete filter rule error:",j),showToast(_("deleteRuleFailed","Failed to delete rule"),!1)}}async function N(T,R){try{let j=await csrfFetch("/admin/filters/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:T,updates:{enabled:R}})}),J=await j.json();if(!j.ok){showToast(J.error||_("updateRuleFailed","Failed to update rule"),!1),await C();return}}catch(j){console.error("Toggle filter rule error:",j),showToast(_("updateRuleFailed","Failed to update rule"),!1),await C()}}async function v(){let T=document.getElementById("filterTestText"),R=document.getElementById("filterTestResult"),j=document.getElementById("filterType"),J=document.getElementById("filterAction"),W=document.getElementById("filterPattern"),V=document.getElementById("filterReplacement"),ae=document.getElementById("filterMaxCount"),se=document.getElementById("filterWindowSec"),G=(T.value||"").trim();if(!G){showToast(_("sampleTextRequired","Enter sample text to test"),!1),T.focus();return}let Z=(W.value||"").trim();if(!Z){showToast(_("patternRequired","Pattern is required"),!1),W.focus();return}let ne=j.value,ie={type:ne,pattern:Z,action:J.value};ne==="replace"&&(ie.replacement=V.value||""),ne==="rate_limit"&&(ie.max_count=parseInt(ae.value,10)||5,ie.window_sec=parseFloat(se.value)||60),R.innerHTML=`<span style="color:var(--color-text-muted)">${_("testing","Testing...")}</span>`;try{let K=await csrfFetch("/admin/filters/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule:ie,text:G})}),Q=await K.json();if(!K.ok){R.innerHTML=`<span style="color: var(--color-ink-error)">${g(Q.error||"Test failed")}</span>`;return}let X="";Q.action==="block"?X=`<span style="color: var(--color-ink-error);font-weight:600">${_("blocked","BLOCKED")}</span>`:Q.action==="replace"?X=`<span style="color: var(--color-ink-warning);font-weight:600">${_("replaced","REPLACED")}</span> <span style="color:var(--color-text-secondary)">\u2192 ${g(Q.text)}</span>`:Q.action==="allow"?X=`<span style="color: var(--color-ink-success);font-weight:600">${_("allowed","ALLOWED")}</span>`:Q.action==="review"?X=`<span style="color: var(--color-ink-accent);font-weight:600">${ServerI18n.t("fltActReview")}</span>`:X=`<span style="color:var(--color-text-muted)">${_("noMatch","No match (pass)")}</span>`,Q.reason&&(X+=`<br/><span style="font-size:11px;color:var(--color-text-muted)">${g(Q.reason)}</span>`),R.innerHTML=X}catch(K){console.error("Test filter rule error:",K),R.innerHTML=`<span style="color: var(--color-ink-error)">${_("testError","Test error")}</span>`}}function c(){let T=document.getElementById("filterType"),R=document.getElementById("filterReplacementRow"),j=document.getElementById("filterRateLimitRow");if(!T)return;let J=T.value;R&&(R.style.display=J==="replace"?"":"none"),j&&(j.style.display=J==="rate_limit"?"grid":"none")}function r(){let T=document.getElementById("filterTypeChips");T&&T.addEventListener("click",R=>{let j=R.target.closest(".hud-filter-chip");j&&(w=j.dataset.filterScope||"all",T.querySelectorAll(".hud-filter-chip").forEach(J=>{J.classList.toggle("is-active",J.dataset.filterScope===w)}),C())})}let n=6,d=[],a=!1,l=0,i=0;function e(T){let R=new Date(T*1e3),j=J=>String(J).padStart(2,"0");return`${j(R.getHours())}:${j(R.getMinutes())}:${j(R.getSeconds())}`}function o(T){let R=(T||"").toUpperCase();return R==="BLOCK"?"var(--hud-crimson)":R==="MASK"||R==="REPLACE"?"var(--hud-amber)":R==="REVIEW"?"var(--color-primary)":R==="ALLOW"?"var(--hud-lime)":"var(--color-text-muted)"}function h(){let T=document.getElementById("filterLiveLog");if(T){if(d.length===0){T.innerHTML=`<div style="color:var(--color-text-muted);text-align:center;padding:10px">${ServerI18n.t("fltNoEvents")}</div>`;return}T.innerHTML=d.map(R=>{let j=e(R.ts),J=(R.action||"").toUpperCase(),W=o(J),V=(R.text_excerpt||"").replace(/[<>&"]/g,Z=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Z]),ae=(R.pattern||"").replace(/[<>&"]/g,Z=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[Z]),se=(R.source||"").slice(0,16),G=se?`\xB7 ${se}`:"";return`<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${j}</span>
        <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${W}">${J}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300C${V}\u300D<span style="color:var(--color-text-muted)"> \u2014 \u898F\u5247 ${ae} ${G}</span></span>
      </div>`}).join("")}}async function t(){try{let T=await fetch(`/admin/filters/events?since=${i}`,{credentials:"same-origin"});if(!T.ok)return;let R=await T.json();if(R.counts_24h){let j=(J,W)=>{let V=document.querySelector(`[data-mod-stat="${J}"]`);V&&(V.textContent=W!=null?String(W):"\u2014")};j("masked",R.counts_24h.MASK||0),j("blocked",R.counts_24h.BLOCK||0)}if(!Array.isArray(R.events)||R.events.length===0)return;for(d.unshift(...R.events);d.length>n;)d.pop();i=R.latest_seq||i,document.getElementById("filterLiveLog")&&h()}catch{}}function s(){a||(a=!0,t(),l=setInterval(t,4e3))}let u=Object.create(null),p="[QUICK]";function $(T,R){return T.find(j=>(j.name||"").startsWith(p+" "+R))}async function I(){let T=await b().catch(()=>[]);document.querySelectorAll(".admin-flt-v4__qchip").forEach(R=>{let j=R.dataset.fltLabel,J=$(T,j),W=!!J&&J.enabled!==!1;R.classList.toggle("is-active",W),J?u[R.dataset.fltQuickId]=J.id||J.rule_id:delete u[R.dataset.fltQuickId]})}async function L(T){let R=T.dataset.fltQuickId,j=T.dataset.fltPattern,J=T.dataset.fltAction,W=T.dataset.fltLabel,V=u[R];if(V)(await csrfFetch("/admin/filters/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:V})})).ok?(delete u[R],T.classList.remove("is-active"),showToast(ServerI18n.t("filtersToastDisabled",{label:W}),!0)):showToast(ServerI18n.t("filtersToastDisableFailed"),!1);else{let ae=await csrfFetch("/admin/filters/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"regex",name:`${p} ${W}`,pattern:j,action:J,enabled:!0,priority:50})});if(ae.ok){let se=await ae.json().catch(()=>({}));se.rule_id&&(u[R]=se.rule_id),T.classList.add("is-active"),showToast(ServerI18n.t("filtersToastEnabled",{label:W}),!0)}else{let se=await ae.json().catch(()=>({}));showToast(ServerI18n.t("filtersToastEnableFailed",{msg:se.error||""}),!1)}}typeof renderRules=="function"&&renderRules()}function D(){let T=document.querySelector("[data-flt-quick]");T&&(T.addEventListener("click",R=>{let j=R.target.closest(".admin-flt-v4__qchip");j&&L(j)}),I())}function O(){let T=document.getElementById("settings-grid");if(!T)return;T.insertAdjacentHTML("beforeend",F()),r(),D();let R=document.getElementById("filterType");R&&R.addEventListener("change",c);let j=document.getElementById("filterAddBtn");j&&j.addEventListener("click",H);let J=document.getElementById("filterTestBtn");J&&J.addEventListener("click",v);let W=document.getElementById("filterTestText");W&&W.addEventListener("keydown",se=>{se.key==="Enter"&&(se.preventDefault(),v())});let V=document.getElementById("filterPattern");V&&V.addEventListener("keydown",se=>{se.key==="Enter"&&(se.preventDefault(),H())});let ae=document.getElementById("filterRulesList");ae&&(ae.addEventListener("change",se=>{let G=se.target.closest(".filter-toggle-cb");if(!G)return;N(G.dataset.ruleId,G.checked);let Z=G.closest(".hud-rule-row"),ne=Z?.querySelector(".admin-filter-toggle-dot");ne&&(ne.classList.toggle("is-on",G.checked),ne.classList.toggle("is-off",!G.checked)),Z&&(Z.style.opacity=G.checked?"":"0.45")}),ae.addEventListener("click",se=>{let G=se.target.closest(".filter-delete-btn");G&&B(G.dataset.ruleId)})),C(),s(),h()}function z(){if(!window.DANMU_CONFIG?.session?.logged_in)return;new MutationObserver(()=>{document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById("sec-filters")&&O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):z()})()});var Ht=ve(()=>{(function(){"use strict";var y=window.AdminUtils.loadDetailsState,k=window.AdminUtils.saveDetailsState,g=window.AdminUtils.escapeHtml,f=1e4,x=null;function U(b){var C=y();return C[b]!==void 0?C[b]:!1}function A(){return`
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
    `}function _(b){var C=ServerI18n.t("fingerprintState_"+b),H="";return b==="blocked"?H=" is-crimson":b==="flagged"?H=" is-amber":b==="active"?H=" is-cyan":H=" is-mute",'<span class="admin-fp-state'+H+'">'+g(C)+"</span>"}function m(b){if(!b)return"\u2014";try{var C=new Date(b*1e3);return C.toLocaleTimeString()}catch{return String(b)}}function M(b){var C=document.getElementById("adminFingerprintTableWrap");if(C){if(!b||b.length===0){C.innerHTML="";var H=window.AdminEmpty.render("audience");H.dataset.emptyKind="fingerprints",C.appendChild(H);return}var B='<div class="admin-fp-row admin-fp-row--head"><span>'+g(ServerI18n.t("fingerprintCol_hash"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ip"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_ua"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_msgs"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_rate"))+'</span><span class="num">'+g(ServerI18n.t("fingerprintCol_blocked"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_state"))+"</span><span>"+g(ServerI18n.t("fingerprintCol_lastSeen"))+"</span></div>",N=b.map(function(v){var c=v.blocked|0,r=v.hash||"",n=r.slice(0,8);return'<div class="admin-fp-row admin-fp-data" data-fp-hash="'+g(r)+'"><span class="admin-fp-hash admin-identity-fp" title="'+g(r)+'">fp:'+g(n)+'</span><span class="admin-fp-ip admin-identity-ip">'+g(v.ip||"\u2014")+'</span><span class="admin-fp-ua" title="'+g(v.ua||"")+'">'+g(v.ua||"\u2014")+'</span><span class="admin-fp-num">'+(v.msgs|0)+'</span><span class="admin-fp-num">'+(v.rate_per_min|0)+'/m</span><span class="admin-fp-num '+(c>0?"is-crimson":"is-mute")+'">'+c+"</span><span>"+_(v.state||"active")+'</span><span class="admin-fp-ts">'+g(m(v.last_seen))+"</span></div>"}).join("");C.innerHTML=B+N}}async function F(){var b=document.getElementById("adminFingerprintCount");try{var C=await fetch("/admin/fingerprints?limit=100",{method:"GET",credentials:"same-origin"});if(!C.ok)throw new Error("HTTP "+C.status);var H=await C.json(),B=H.records||[];if(M(B),b){var N=H.count||B.length,v=H.flagged!=null?H.flagged:B.filter(function(r){return r.state==="flagged"||r.state==="blocked"}).length;b.textContent=ServerI18n.t("fpCountSummary",{unique:N,flagged:v})}}catch(r){console.error("[admin-fingerprints] fetch failed:",r);var c=document.getElementById("adminFingerprintTableWrap");c&&(c.innerHTML='<span class="hud-pill is-danger">'+g(ServerI18n.t("loadFingerprintsFailed"))+"</span>")}}async function w(){if(await window.HudConfirm?.open({icon:"\u27F3",title:ServerI18n.t("fpResetTitle"),subtitle:ServerI18n.t("cfmSubResetFingerprints"),severity:"danger",body:ServerI18n.t("fingerprintResetConfirm"),confirmLabel:ServerI18n.t("fpResetConfirm")}))try{var C=await window.csrfFetch("/admin/fingerprints/reset",{method:"POST"});if(C.ok)window.showToast(ServerI18n.t("fingerprintResetOk")),await F();else{var H=await C.json().catch(function(){return{}});window.showToast(H.error||ServerI18n.t("fingerprintResetFailed"),!1)}}catch(B){console.error("[admin-fingerprints] reset error:",B),window.showToast(ServerI18n.t("fingerprintResetFailed"),!1)}}function E(){P(),x=setInterval(function(){var b=document.getElementById("sec-fingerprints");b&&b.offsetParent!==null&&F()},f)}function P(){x&&(clearInterval(x),x=null)}function S(){var b=document.getElementById("moderation-grid")||document.getElementById("settings-grid");if(b){b.insertAdjacentHTML("beforeend",A());var C=document.getElementById("adminFingerprintRefreshBtn");C&&C.addEventListener("click",F);var H=document.getElementById("adminFingerprintResetBtn");H&&H.addEventListener("click",w),F(),E()}}document.addEventListener("DOMContentLoaded",function(){if(!(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)){var b=new MutationObserver(function(){var H=document.getElementById("moderation-grid")||document.getElementById("settings-grid");H&&!document.getElementById("sec-fingerprints")&&S()});b.observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});var C=document.getElementById("moderation-grid")||document.getElementById("settings-grid");C&&!document.getElementById("sec-fingerprints")&&S()}})})()});var jt=ve(()=>{(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{if(!window.DANMU_CONFIG?.session?.logged_in)return;var y=window.AdminUtils.escapeHtml;let k=(e,o)=>{let h=window.ServerI18n?.t?.(e);return h&&h!==e?h:o||e},g=!1;new MutationObserver(()=>{let e=document.getElementById("settings-grid");if(e&&!(document.getElementById("sec-widgets")||g)){g=!0;try{x(e)}finally{g=!1}}}).observe(document.body,{childList:!0,subtree:!0});function x(e){let o=document.createElement("div");o.id="sec-widgets",o.className="admin-widgets-page hud-page-stack lg:col-span-2";let h=location.origin+"/overlay";o.dataset.tpl="B",o.innerHTML=`
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
                <code class="admin-ow-url" data-ow-obs-url>${y(h)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${y(k("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${y(k("widgetsResolutionHint"))}</span><code>1920 \xD7 1080</code>
              </div>
            </div>
          </aside>
        </div>`,e.appendChild(o);let t=document.getElementById("widget-add"),s=o.querySelector("[data-ow-addmenu]");t.addEventListener("click",u=>{u.stopPropagation(),s.hidden=!s.hidden}),s.addEventListener("click",u=>{let p=u.target.closest("[data-ow-add]")?.dataset.owAdd;p&&(s.hidden=!0,_(p))}),document.addEventListener("click",u=>{!s.hidden&&!u.target.closest(".admin-ui-page-actions")&&(s.hidden=!0)}),document.getElementById("widget-clear-all").addEventListener("click",w),o.querySelector("[data-ow-copy]")?.addEventListener("click",()=>{let u=o.querySelector("[data-ow-obs-url]")?.textContent||"";navigator.clipboard?.writeText(u).then(()=>window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"),!0),()=>window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"),!1))}),A()}async function U(e,o="GET",h=null){let t={method:o,headers:{"Content-Type":"application/json"},credentials:"same-origin"};if(h){let u=document.querySelector('meta[name="csrf-token"]');u&&(t.headers["X-CSRF-Token"]=u.content),t.body=JSON.stringify(h)}return(await fetch("/admin/widgets/"+e,t)).json()}async function A(){try{let e=await U("list");P(e.widgets||[])}catch(e){console.error("[admin-widgets] Load failed:",e)}}async function _(e){let o={scoreboard:{title:"Score",teams:[{name:"Team A",score:0,color:"#38bdf8"},{name:"Team B",score:0,color:"#fbbf24"}],position:"top-left"},ticker:{messages:["Welcome!","Subscribe for updates"],speed:60,position:"bottom-center"},label:{text:"Hello World",fontSize:28,position:"top-right"}};try{await U("create","POST",{type:e,config:o[e]||{}}),A()}catch(h){console.error("[admin-widgets] Create failed:",h)}}async function m(e){let o=ServerI18n.t("widgetDeleteConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsDeleteTitle"),subtitle:ServerI18n.t("cfmSubDeleteWidget"),severity:"danger",body:o,confirmLabel:ServerI18n.t("widgetsDeleteConfirmBtn")}))try{await U("delete","POST",{id:e}),A()}catch(t){console.error("[admin-widgets] Delete failed:",t)}}async function M(e,o){try{await U("update","POST",{id:e,config:o}),A()}catch(h){console.error("[admin-widgets] Update failed:",h)}}async function F(e,o,h){try{await U("score","POST",{id:e,team_index:o,delta:h}),A()}catch(t){console.error("[admin-widgets] Score update failed:",t)}}async function w(){let e=ServerI18n.t("widgetClearConfirm");if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("widgetsClearTitle"),subtitle:ServerI18n.t("cfmSubClearWidgets"),severity:"danger",body:e,confirmLabel:ServerI18n.t("clearAll")}))try{await U("clear","POST",{}),A()}catch(h){console.error("[admin-widgets] Clear failed:",h)}}let E=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];function P(e){let o=document.getElementById("widgets-list");if(o){if(o.innerHTML="",r(e),e.length===0){let h=window.AdminEmpty.renderCustom({icon:"\u2B1A",title:ServerI18n.t("widgetNone"),desc:ServerI18n.t("widgetsEmptyDesc"),actionLabel:ServerI18n.t("widgetsEmptyAction"),action:()=>document.getElementById("widget-add")?.click()});h.dataset.emptyKind="widgets",o.appendChild(h);return}e.forEach(h=>{o.appendChild(B(h))})}}let S={scoreboard:"\u25A6",ticker:"\u224B",label:"\u25AD"};function b(e){return k("widgetPos_"+String(e||"top-left").replace("-","_"),e||"")}function C(e){let o=e.config||{},h="";e.type==="scoreboard"?h=(o.teams||[]).map(s=>`${s.name} ${s.score}`).join(" \xB7 "):e.type==="ticker"?(h=(o.messages||[])[0]||"",h&&(h=`\u300C${h}\u300D`)):e.type==="label"&&(h=o.text?`\u300C${o.text}\u300D`:"");let t=b(e.position);return h?`${h} \xB7 ${t}`:t}function H(e){return e==="scoreboard"?k("widgetScoreboard"):e==="ticker"?k("widgetTicker"):e==="label"?k("widgetLabel"):e}function B(e){let o=document.createElement("div");o.className="admin-widget-card",e.visible!==!1&&o.classList.add("is-on");let h=document.createElement("button");h.type="button",h.className="admin-widget-summary",h.setAttribute("aria-expanded","false"),h.innerHTML='<span class="admin-widget-summary-icon" aria-hidden="true">'+y(S[e.type]||"\u25AB")+'</span><span class="admin-widget-summary-name">'+y(H(e.type))+'</span><span class="admin-widget-summary-text">'+y(C(e))+"</span>"+(e.visible===!1?'<span class="admin-widget-summary-off">'+y(k("widgetHiddenChip"))+"</span>":"")+'<span class="admin-widget-summary-chev" aria-hidden="true">\u203A</span>',o.appendChild(h);let t=document.createElement("div");t.className="admin-widget-card-body",t.hidden=!0,h.addEventListener("click",()=>{t.hidden=!t.hidden,h.setAttribute("aria-expanded",t.hidden?"false":"true"),o.classList.toggle("is-open",!t.hidden)});let s=i(k("widgetPosition"),E,e.position,I=>M(e.id,{position:I}));t.appendChild(s),e.type==="scoreboard"?n(t,e):e.type==="ticker"?d(t,e):e.type==="label"&&a(t,e);let u=document.createElement("div");u.className="admin-widget-card-actions";let p=document.createElement("button");p.type="button",p.className="admin-ui-action admin-widget-card-action",p.textContent=e.visible?k("widgetHide"):k("widgetShow"),p.addEventListener("click",()=>M(e.id,{visible:!e.visible})),u.appendChild(p);let $=document.createElement("button");return $.type="button",$.className="admin-ui-action is-danger admin-widget-card-action",$.textContent=k("remove"),$.addEventListener("click",()=>m(e.id)),u.appendChild($),t.appendChild(u),o.appendChild(t),o}let N={"top-left":[0,0],"top-center":[1,0],"top-right":[2,0],center:[1,1],"bottom-left":[0,2],"bottom-center":[1,2],"bottom-right":[2,2]};function v(e,o){let h="top-left",t=1/0;for(let[s,[u,p]]of Object.entries(N)){let $=e-u/2,I=o-p/2,L=$*$+I*I;L<t&&(t=L,h=s)}return h}function c(e){let o=e.config||{};return e.type==="scoreboard"?(o.teams||[]).map(h=>`${h.name} ${h.score}`).join("  ")||k("widgetScoreboard"):e.type==="ticker"?(o.messages||[])[0]||k("widgetTicker"):e.type==="label"?o.text||k("widgetLabel"):e.type}function r(e){let o=document.querySelector("[data-ow-stage]");if(o){if(o.innerHTML="",!e.length){o.innerHTML='<span class="admin-ow-stage-empty">'+y(k("widgetsStageEmpty"))+"</span>";return}e.forEach(h=>{let t=document.createElement("div");t.className="admin-ow-box is-"+(h.position||"top-left"),h.visible===!1&&t.classList.add("is-off"),t.dataset.owBox=h.id,t.draggable=!0,t.textContent=c(h),t.title=H(h.type),t.addEventListener("dragend",s=>{let u=o.getBoundingClientRect();if(!u.width||!u.height)return;let p=(s.clientX-u.left)/u.width,$=(s.clientY-u.top)/u.height;if(p<0||p>1||$<0||$>1)return;let I=v(p,$);I!==h.position&&M(h.id,{position:I})}),o.appendChild(t)})}}function n(e,o){let h=o.config||{},t=l(window.ServerI18n?.t?.("widgetScoreboardTitle")||"TITLE",h.title||"",s=>M(o.id,{title:s}));e.appendChild(t),(h.teams||[]).forEach((s,u)=>{let p=document.createElement("div");p.className="admin-widget-team";let $=document.createElement("input");$.type="color",$.value=s.color||"#38bdf8",$.className="admin-widget-team-color",$.addEventListener("change",()=>{let z=[...h.teams];z[u]={...z[u],color:$.value},M(o.id,{teams:z})}),p.appendChild($);let I=document.createElement("input");I.type="text",I.value=s.name,I.className="admin-widget-input",I.addEventListener("change",()=>{let z=[...h.teams];z[u]={...z[u],name:I.value},M(o.id,{teams:z})}),p.appendChild(I);let L=document.createElement("span");L.className="admin-widget-team-score",L.textContent=s.score,p.appendChild(L);let D=document.createElement("button");D.type="button",D.className="admin-widget-step",D.textContent="\u2212",D.addEventListener("click",()=>F(o.id,u,-1)),p.appendChild(D);let O=document.createElement("button");O.type="button",O.className="admin-widget-step",O.textContent="+",O.addEventListener("click",()=>F(o.id,u,1)),p.appendChild(O),e.appendChild(p)})}function d(e,o){let h=o.config||{},t=document.createElement("div");t.className="admin-widget-row";let s=document.createElement("span");s.className="lbl",s.textContent=window.ServerI18n?.t?.("speed")||"SPEED",t.appendChild(s);let u=document.createElement("input");u.type="range",u.min="10",u.max="200",u.value=h.speed||60,u.style.flex="1",u.addEventListener("change",()=>{M(o.id,{speed:parseInt(u.value)})}),t.appendChild(u);let p=document.createElement("span");p.style.cssText="min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right",p.textContent=u.value,u.addEventListener("input",()=>{p.textContent=u.value}),t.appendChild(p),e.appendChild(t);let $=document.createElement("div");$.className="admin-widget-row",$.style.alignItems="flex-start";let I=document.createElement("span");I.className="lbl",I.textContent=window.ServerI18n?.t?.("widgetTickerMessages")||"MESSAGES",$.appendChild(I);let L=document.createElement("textarea");L.className="admin-widget-textarea",L.value=(h.messages||[]).join(`
`),L.rows=3,L.placeholder=ServerI18n.t("widgetTickerPlaceholder"),L.addEventListener("change",()=>{let D=L.value.split(`
`).filter(O=>O.trim());M(o.id,{messages:D})}),$.appendChild(L),e.appendChild($)}function a(e,o){let h=o.config||{};e.appendChild(l(window.ServerI18n?.t?.("widgetLabelText")||"TEXT",h.text||"",t=>M(o.id,{text:t}))),e.appendChild(l(window.ServerI18n?.t?.("size")||"SIZE",String(h.fontSize||24),t=>M(o.id,{fontSize:parseInt(t)||24}),"number"))}function l(e,o,h,t="text"){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,s.appendChild(u);let p=document.createElement("input");return p.type=t,p.value=o,p.className="admin-widget-input",p.addEventListener("change",()=>h(p.value)),s.appendChild(p),s}function i(e,o,h,t){let s=document.createElement("div");s.className="admin-widget-row";let u=document.createElement("span");u.className="lbl",u.textContent=e,s.appendChild(u);let p=document.createElement("select");return p.className="admin-widget-select",o.forEach($=>{let I=document.createElement("option");I.value=$,I.textContent=$,$===h&&(I.selected=!0),p.appendChild(I)}),p.addEventListener("change",()=>t(p.value)),s.appendChild(p),s}})})()});var Ut=ve(()=>{(function(){"use strict";if(!document.body||!document.body.classList.contains("admin-body"))return;let y=["live","polls","moderation","viewer","widgets","effects","themes","assets","system","history","backup","integrations","plugins","webhooks","api-tokens","security","notifications","audience","firetoken","overlay","about"];function k(){let T=window.ADMIN_ROUTES||{},R={};return y.forEach(j=>{let J=T[j];J&&J.title&&(R[j]={title:J.title,kicker:J.kicker||j.toUpperCase()})}),R}let g=[{labelKey:"cmdkSettingViewerTheme",route:"viewer",tab:"page",section:"sec-viewer-theme"},{labelKey:"cmdkSettingViewerFields",route:"viewer",tab:"fields",section:"sec-viewer-config-fields"},{labelKey:"cmdkSettingViewerDefaults",route:"viewer",tab:"defaults",section:"sec-viewer-config-defaults"},{labelKey:"cmdkSettingViewerLimits",route:"viewer",tab:"limits",section:"sec-viewer-config-limits"},{labelKey:"cmdkSettingBlacklist",route:"moderation",section:"sec-blacklist"},{labelKey:"cmdkSettingFilters",route:"moderation",section:"sec-filters"},{labelKey:"cmdkSettingRatelimit",route:"moderation",tab:"ratelimit",section:"sec-ratelimit"},{labelKey:"cmdkSettingEffects",route:"effects",section:"sec-effects"},{labelKey:"cmdkSettingEffectsMgmt",route:"effects",section:"sec-effects-mgmt"},{labelKey:"adminRouteTitle_security",route:"security",tab:"security",section:"admin-security-v2-page"},{label:"Emoji",route:"assets",section:"sec-emojis"},{label:"Stickers",route:"assets",section:"sec-stickers"},{label:"Sounds",route:"assets",section:"sec-sounds"},{labelKey:"adminRouteTitle_fonts",route:"fonts",section:"sec-fonts"},{label:"Webhooks",route:"webhooks",section:"sec-webhooks"},{label:"Scheduler",route:"scheduler",section:"sec-scheduler"},{label:"Fingerprints",route:"fingerprints",section:"sec-fingerprints"},{labelKey:"cmdkSettingSystemOverview",route:"system",section:"sec-system-overview"}],f=[{id:"actions",labelKey:"cmdkGroupActions",types:["action"]},{id:"pages",labelKey:"cmdkGroupPages",types:["route","setting","theme"]},{id:"messages",labelKey:"cmdkGroupMessages",types:["message","user"]}];function x(){let T=document.querySelector('meta[name="csrf-token"]');return T&&T.content||""}function U(T,R){if(typeof window.csrfFetch=="function")return window.csrfFetch(T,R);let j=Object.assign({credentials:"same-origin"},R||{}),J=new Headers(R&&R.headers||{});return J.set("X-CSRF-Token",x()),j.headers=J,fetch(T,j)}function A(T,R){typeof window.showToast=="function"&&window.showToast(T,R!==!1)}let _=[{id:"restart-effects",labelKey:"cmdkActionReloadEffects",subKey:"adminNavEffects",action:()=>U("/effects/reload",{method:"POST"}).then(T=>A(T.ok?ServerI18n.t("effectsReloadFallback"):ServerI18n.t("cmdkToastEffectsReloadFailed"),T.ok)).catch(()=>A(ServerI18n.t("cmdkToastEffectsReloadFailed"),!1))},{id:"overlay-off",labelKey:"cmdkActionOverlayOff",subKey:"adminNavOverlay",action:()=>U("/admin/broadcast/toggle",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"overlay_off"})}).then(T=>A(T.ok?ServerI18n.t("cmdkToastOverlayOff"):ServerI18n.t("cmdkToastToggleFailed"),T.ok)).catch(()=>A(ServerI18n.t("cmdkToastToggleFailed"),!1))},{id:"reset-poll",labelKey:"cmdkActionResetPoll",subKey:"adminNavPolls",action:()=>U("/admin/poll/reset",{method:"POST"}).then(T=>A(T.ok?ServerI18n.t("cmdkToastPollReset"):ServerI18n.t("cmdkToastPollResetFailed"),T.ok)).catch(()=>A(ServerI18n.t("cmdkToastPollResetFailed"),!1))},{id:"clear-history",labelKey:"cmdkActionClearHistory",subKey:"adminNavHistory",action:async()=>{if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("cmdkActionClearHistory"),subtitle:ServerI18n.t("cfmSubClearHistory"),severity:"danger",body:ServerI18n.t("cmdkClearHistoryBody"),confirmLabel:ServerI18n.t("cmdkClearHistoryConfirm")}))return U("/admin/history/clear",{method:"POST"}).then(R=>A(R.ok?ServerI18n.t("cmdkToastHistoryCleared"):ServerI18n.t("cmdkToastHistoryClearFailed"),R.ok)).catch(()=>A(ServerI18n.t("cmdkToastHistoryClearFailed"),!1))}},{id:"logout",labelKey:"logout",sub:"",action:()=>fetch("/logout",{method:"POST",credentials:"same-origin"}).finally(()=>location.reload())},{id:"reload-page",labelKey:"cmdkActionReloadPage",sub:"",action:()=>location.reload()}],m=null,M=null,F=null,w="",E=[],P=[],S=0,b=null,C=null,H=null,B=15e3;function N(T){return String(T??"").replace(/[&<>"']/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[R])}function v(T,R){if(!R)return 0;let j=String(T||"").toLowerCase(),J=R.toLowerCase(),W=0,V=0,ae=0,se=0;for(;W<j.length&&V<J.length;)j[W]===J[V]?(V++,se++,ae+=2+se):se=0,W++;return V<J.length?-1:(j.startsWith(J)&&(ae+=10),ae)}function c(){let T=document.createElement("div");T.className="admin-cmdk",T.setAttribute("hidden",""),T.setAttribute("aria-hidden","true"),T.innerHTML=`
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
    `,document.body.appendChild(T),m=T,M=T.querySelector(".admin-cmdk-input"),F=T.querySelector(".admin-cmdk-list"),T.addEventListener("click",R=>{R.target.matches("[data-cmdk-close]")&&O()}),M.addEventListener("input",R=>{w=R.target.value,$()}),M.addEventListener("keydown",r),F.addEventListener("click",R=>{let j=R.target.closest("[data-cmdk-idx]");j&&(S=parseInt(j.dataset.cmdkIdx,10)||0,d())})}function r(T){if(T.key==="Escape"){T.preventDefault(),O();return}if(T.key==="ArrowDown"){T.preventDefault(),n(1);return}if(T.key==="ArrowUp"){T.preventDefault(),n(-1);return}if(T.key==="Enter"){T.preventDefault(),d();return}}function n(T){if(!E.length)return;S=(S+T+E.length)%E.length,L();let R=F.querySelector(`[data-cmdk-idx="${S}"]`);R&&R.scrollIntoView({block:"nearest"})}function d(){let T=E[S];if(T){if(T.type==="route")window.location.hash="#/"+T.route,O();else if(T.type==="setting")T.tab&&(document.body.dataset.viewerConfigTab=T.tab),window.location.hash="#/"+T.route,setTimeout(()=>window.dispatchEvent(new Event("hashchange")),20),setTimeout(()=>{let R=document.getElementById(T.section);R&&(R.scrollIntoView({behavior:"smooth",block:"start"}),R.tagName==="DETAILS"&&!R.open&&(R.open=!0))},80),O();else if(T.type==="message")window.location.hash="#/messages",O();else if(T.type==="user")window.location.hash="#/system",setTimeout(()=>{let R=document.getElementById("sec-fingerprints");R&&R.scrollIntoView({behavior:"smooth",block:"start"})},80),O();else if(T.type==="theme")U("/admin/themes/active",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T.id})}).then(R=>{R.ok?(A(ServerI18n.t("cmdkThemeApplied",{name:T.label}),!0),H=null):A(ServerI18n.t("cmdkThemeApplyFailed"),!1)}).catch(()=>A(ServerI18n.t("cmdkThemeApplyFailed"),!1)),O();else if(T.type==="action"){try{let R=T.action&&T.action();R&&typeof R.then=="function"&&R.catch(()=>{})}catch{}O()}}}let a={live:"adminNavGroupLive",overlay:"adminNavGroupLive",polls:"adminNavGroupLive",moderation:"adminNavGroupLive",viewer:"adminNavGroupAppearance",effects:"adminNavGroupAppearance",themes:"adminNavGroupAppearance",assets:"adminNavGroupAppearance",widgets:"adminNavGroupAppearance",history:"adminNavGroupSystem",backup:"adminNavGroupSystem",security:"adminNavGroupSystem",integrations:"adminNavGroupSystem"};function l(T){return Object.entries(k()).map(([R,j])=>{let J=Math.max(v(j.title,T),v(R,T)),W=a[R];return{type:"route",route:R,label:j.title,sub:W?ServerI18n.t(W):"",icon:"\u25C7",score:J}}).filter(R=>R.score>=0)}function i(T){let R=k()[T];return R?R.title:""}function e(T){return g.map(R=>{let j=R.labelKey?ServerI18n.t(R.labelKey):R.label;return{type:"setting",route:R.route,tab:R.tab,section:R.section,label:i(R.route)?`${i(R.route)} \u203A ${j}`:j,sub:"",icon:"\u2699",score:v(j,T)}}).filter(R=>R.score>=0)}function o(T){return b?(b.records||[]).map(j=>{let J=j.text||j.message||"",W=j.nickname||j.user||"guest",V=(j.timestamp||"").slice(11,19)||"\u2014",ae=(j.fingerprint||j.fp||"").slice(0,8);return{type:"message",label:`${J}  \xB7  @${W}`,sub:ae?`${V} \xB7 fp:${ae}`:V,icon:"\u{1F4AC}",score:Math.max(v(J,T),v(W,T))}}).filter(j=>j.score>=0):[]}function h(T){if(!H)return[];let R=H.records||[],j=H.active||"";return R.map(J=>{let W=J.label||J.display_name||J.name||"",V=J.description||ServerI18n.t("cmdkThemeDefaultDesc"),ae=J.name===j;return{type:"theme",id:J.name,label:ae?ServerI18n.t("cmdkThemeActive",{name:W}):W,sub:V,icon:"\u{1F3A8}",score:Math.max(v(W,T),v(J.name||"",T),v(V,T))}}).filter(J=>J.score>=0)}function t(T){return _.map(R=>{let j=ServerI18n.t(R.labelKey),J=R.subKey?ServerI18n.t(R.subKey):R.sub;return{type:"action",id:R.id,label:j,sub:J,icon:"\u26A1",action:R.action,score:Math.max(v(j,T),v(R.id,T),v(J,T))}}).filter(R=>R.score>=0)}function s(T){return C?(C.records||[]).map(j=>{let J=j.fingerprint||j.fp||j.id||"",W=j.ip||j.last_ip||"",V=j.nickname||"";return{type:"user",label:V?`@${V}  \xB7  ${J.slice(0,12)}\u2026`:`${J.slice(0,12)}\u2026`,sub:`user \xB7 ${W||ServerI18n.t("cmdkIpUnknown")}`,icon:"\u{1F464}",score:Math.max(v(J,T),v(W,T),v(V,T))}}).filter(j=>j.score>=0):[]}async function u(){let T=Date.now(),R=[];(!b||T-b.at>B)&&R.push(fetch("/admin/history?hours=24&limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{b={at:T,records:j&&j.records||[]}}).catch(()=>{b={at:T,records:[]}})),(!C||T-C.at>B)&&R.push(fetch("/admin/fingerprints?limit=50",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{C={at:T,records:j&&j.records||[]}}).catch(()=>{C={at:T,records:[]}})),(!H||T-H.at>B)&&R.push(fetch("/admin/themes",{credentials:"same-origin"}).then(j=>j.ok?j.json():null).then(j=>{H={at:T,records:j&&j.themes||[],active:j&&j.active||""}}).catch(()=>{H={at:T,records:[],active:""}})),R.length&&await Promise.all(R)}let p={actions:5,pages:5,messages:4};async function $(){await u();let T=w.trim(),R={action:t(T),route:l(T),setting:e(T),theme:h(T),message:o(T),user:s(T)};E=[],P=[],f.forEach(j=>{let J=j.types.reduce((W,V)=>W.concat(R[V]||[]),[]).sort((W,V)=>V.score-W.score).slice(0,p[j.id]||5);J.length&&(P.push({id:j.id,labelKey:j.labelKey,from:E.length,count:J.length}),E=E.concat(J))}),S=0,L()}function I(T){return T.icon||{route:"\u25C7",setting:"\u2699",message:"\u{1F4AC}",user:"\u{1F464}",theme:"\u{1F3A8}",action:"\u26A1"}[T.type]||"\xB7"}function L(){if(!E.length){F.innerHTML=`<li class="admin-cmdk-empty">${ServerI18n.t("cmdkEmptyResults")}</li>`;return}let T=[];P.forEach(R=>{T.push(`<li class="admin-cmdk-group" role="presentation">${N(ServerI18n.t(R.labelKey))}</li>`);for(let j=R.from;j<R.from+R.count;j++){let J=E[j],W=j===S;T.push(`
        <li class="admin-cmdk-row ${W?"is-active":""}"
            data-cmdk-idx="${j}" role="option" aria-selected="${W}">
          <span class="admin-cmdk-icon" aria-hidden="true">${N(I(J))}</span>
          <span class="admin-cmdk-label">${N(J.label)}</span>
          <span class="admin-cmdk-sub">${N(J.sub||"")}</span>
          <span class="admin-cmdk-shortcut" aria-hidden="true">${W?"\u21B5":""}</span>
        </li>`)}}),F.innerHTML=T.join("")}function D(){m||c(),m.removeAttribute("hidden"),m.setAttribute("aria-hidden","false"),m.classList.add("is-open"),w="",M.value="",$(),setTimeout(()=>M.focus(),20)}function O(){m&&(m.setAttribute("hidden",""),m.setAttribute("aria-hidden","true"),m.classList.remove("is-open"))}function z(){return!!(m&&!m.hasAttribute("hidden"))}window.AdminCommandPalette={open:D,close:O,isOpen:z,toggle:()=>z()?O():D()}})()});var Kt=ve(()=>{(function(){"use strict";let y="sec-sessions-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(c){return String(c).replace(/[&<>"']/g,function(r){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[r]})},g={sessions:[],total:0,exportId:null,exportFormat:"csv",exportPii:!1,loading:!0};function f(c){if(c=Number(c)||0,c<=0)return"\u2014";var r=Math.floor(c/3600),n=Math.floor(c%3600/60),d=c%60;return r>0?r+"h "+n+"m":n>0?n+"m":d+"s"}function x(c){if(!c)return"\u2014";try{var r=typeof c=="number"?new Date(c<1e12?c*1e3:c):new Date(c);return r.toLocaleString(ServerI18n.dateLocale(),{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return String(c)}}function U(){return'<div id="'+y+'" class="admin-sessions-page hud-page-stack lg:col-span-2" data-tpl="B"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("adminRouteTitle_sessions")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("sessionsPageNote")+'</p></div><div class="admin-sessions-table" id="admin-sessions-table-body"></div><div class="admin-sx-export" data-sessions-export hidden></div></div>'}function A(){return'<div class="admin-sessions-th"><span>'+k(ServerI18n.t("sessionsColSession"))+"</span><span>"+k(ServerI18n.t("sessionsColMessages"))+"</span><span>"+k(ServerI18n.t("sessionsColViewers"))+"</span><span>"+k(ServerI18n.t("sessionsLabelDuration"))+"</span><span></span></div>"}function _(c){return c.name||ServerI18n.t("sessionsFallbackName",{id:(c.id||"").slice(0,12)})}function m(){var c=document.getElementById("admin-sessions-table-body");if(c){if(g.loading){window.AdminSkeletons?(c.innerHTML="",c.appendChild(window.AdminSkeletons.listRows({rows:5}))):c.innerHTML='<div class="admin-sessions-loading">'+ServerI18n.t("sessionsLoadingText")+"</div>";return}if(!g.sessions.length){c.innerHTML="";var r=window.AdminEmpty.render("sessions");r.dataset.emptyKind="sessions",c.appendChild(r);return}var n=g.sessions.map(function(d){var a=k(d.id||"");return'<div class="admin-sessions-tr'+(d.is_live?" is-live":"")+'" data-session-id="'+a+'" role="button" tabindex="0"><span class="admin-sessions-td-name">'+(d.is_live?'<span class="admin-sessions-livedot" aria-hidden="true"></span>':"")+k(_(d))+'<span class="admin-sessions-td-sub">'+k(x(d.started_at))+'</span></span><span class="admin-sessions-td-num">'+(Number(d.msg_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+(Number(d.viewer_count)||0).toLocaleString()+'</span><span class="admin-sessions-td-num">'+k(f(d.duration_s))+'</span><button type="button" class="admin-sessions-export-btn" data-sessions-export-open="'+a+'">'+k(ServerI18n.t("sessionsExportBtn"))+" \u203A</button></div>"}).join("");c.innerHTML=A()+n}}var M=[{id:"csv",labelKey:"sessionsExportFmtCsv"},{id:"json",labelKey:"sessionsExportFmtJson"},{id:"srt",labelKey:"sessionsExportFmtSrt"}];function F(){var c=document.querySelector("[data-sessions-export]");if(c){if(!g.exportId){c.hidden=!0,c.innerHTML="";return}var r=g.sessions.find(function(d){return d.id===g.exportId});if(!r){g.exportId=null,c.hidden=!0,c.innerHTML="";return}var n=M.map(function(d){return'<button type="button" class="admin-sx-export__seg'+(d.id===g.exportFormat?" is-active":"")+'" data-sessions-export-fmt="'+d.id+'" aria-pressed="'+(d.id===g.exportFormat?"true":"false")+'">'+k(ServerI18n.t(d.labelKey))+"</button>"}).join("");c.hidden=!1,c.innerHTML='<div class="admin-sx-export__head"><h3 class="admin-sx-export__title">'+k(ServerI18n.t("sessionsExportTitle",{name:_(r)}))+'</h3><button type="button" class="admin-sx-export__close" data-sessions-export-close aria-label="'+k(ServerI18n.t("close"))+'">\xD7</button></div><div class="admin-sx-export__segs" role="group">'+n+'</div><label class="admin-sx-export__pii"><input type="checkbox" data-sessions-export-pii'+(g.exportPii?" checked":"")+' /><span><span class="admin-sx-export__pii-label">'+k(ServerI18n.t("sessionsExportPii"))+'</span><span class="admin-sx-export__pii-warn">'+k(ServerI18n.t("sessionsExportPiiWarn"))+'</span></span></label><div class="admin-sx-export__actions"><button type="button" class="admin-sx-export__secondary" data-sessions-replay>'+k(ServerI18n.t("sessionsReplayBtn"))+'</button><button type="button" class="admin-sx-export__primary" data-sessions-download>'+k(ServerI18n.t("sessionsDownloadBtn",{fmt:g.exportFormat.toUpperCase()}))+"</button></div>"}}function w(){if(g.exportId){var c="/admin/sessions/"+encodeURIComponent(g.exportId)+"/export?format="+encodeURIComponent(g.exportFormat)+"&include_pii="+(g.exportPii?"1":"0"),r=document.createElement("a");r.href=c,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove()}}async function E(){var c=g.exportId;if(c)try{var r=await fetch("/admin/sessions/"+encodeURIComponent(c)+"/export?format=json",{credentials:"same-origin"});if(!r.ok)throw new Error("HTTP "+r.status);var n=await r.json(),d=(n.records||[]).slice(0,500);if(!d.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}var a=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:d,speedMultiplier:1})});if(a.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!a.ok)throw new Error("HTTP "+a.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0),window.AdminReplayControls&&window.AdminReplayControls.notifyStarted()}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function P(){m(),F()}async function S(){g.loading=!0,m();try{var[c,r]=await Promise.all([fetch("/admin/session/archive?limit=100",{credentials:"same-origin"}),fetch("/admin/sessions?hours=168",{credentials:"same-origin"})]),n=[],d=[];if(c.ok){var a=await c.json();n=Array.isArray(a.sessions)?a.sessions:[],n.forEach(function(s){s._explicit=!0})}if(r.ok){var l=await r.json();d=Array.isArray(l.sessions)?l.sessions:[]}var i=n.slice(),e=new Set(n.map(function(s){return s.id}));d.forEach(function(s){e.has(s.id)||i.push(s)}),i.sort(function(s,u){var p=typeof s.started_at=="number"?s.started_at:Date.parse(s.started_at||0),$=typeof u.started_at=="number"?u.started_at:Date.parse(u.started_at||0);return $-p});try{var o=await fetch("/admin/session/current",{credentials:"same-origin"});if(o.ok){var h=await o.json();if(h.status==="live"){var t=Object.assign({},h,{id:h.id,ended_at:null,is_live:!0,msg_count:0,viewer_count:0,_explicit:!0});i.unshift(t)}}}catch{}g.sessions=i,g.total=i.length}catch(s){console.error("[admin-sessions] fetch error:",s),g.sessions=[],g.total=0,window.showToast&&window.showToast(ServerI18n.t("sessionsToastLoadFailed",{msg:s.message||""}),!1)}finally{g.loading=!1,P()}}function b(c){c&&(window.location.hash="#/session-detail?id="+encodeURIComponent(c))}function C(c){g.exportId=c,F();var r=document.querySelector("[data-sessions-export]");r&&r.scrollIntoView({block:"nearest"})}function H(){var c=document.getElementById(y);c&&(c.addEventListener("click",function(r){var n=r.target.closest("[data-sessions-export-open]");if(n){r.stopPropagation(),C(n.dataset.sessionsExportOpen);return}if(r.target.closest("[data-sessions-export-close]")){g.exportId=null,F();return}var d=r.target.closest("[data-sessions-export-fmt]");if(d){g.exportFormat=d.dataset.sessionsExportFmt,F();return}if(r.target.closest("[data-sessions-replay]")){E();return}if(r.target.closest("[data-sessions-download]")){w();return}var a=r.target.closest(".admin-sessions-tr");a&&b(a.dataset.sessionId||null)}),c.addEventListener("change",function(r){var n=r.target.closest("[data-sessions-export-pii]");n&&(g.exportPii=!!n.checked)}),c.addEventListener("keydown",function(r){if(!(r.key!=="Enter"&&r.key!==" ")){var n=r.target.closest(".admin-sessions-tr");n&&(r.preventDefault(),b(n.dataset.sessionId||null))}}))}function B(){var c=document.querySelector(".admin-dash-grid"),r=document.getElementById(y);if(!(!c||!r)){var n=c.dataset.activeLeaf||"dashboard";r.style.display=n==="sessions"?"":"none"}}function N(){var c=document.getElementById("settings-grid");!c||document.getElementById(y)||(c.insertAdjacentHTML("beforeend",U()),H(),S(),B())}function v(){if(window.DANMU_CONFIG?.session?.logged_in){var c=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&N(),B()});c.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",B),document.addEventListener("admin-panel-rendered",function(){N(),B()}),N()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()})()});var Wt=ve(()=>{(function(){"use strict";let y="sec-session-detail-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(I){return String(I).replace(/[&<>"']/g,function(L){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[L]})},g={sessionId:null,session:null,records:[],density:[],loading:!1,error:null,msgQuery:"",msgFilter:"all",annotations:[],activeAnnId:null,hoverTsMs:null},f=!1,x={highlight:{icon:"\u2605",color:"var(--color-primary)",label:"HIGHLIGHT",shape:"star"},vote:{icon:"\u22B7",color:"var(--hud-amber)",label:"VOTE",shape:"circle"},note:{icon:"\u25CF",color:"var(--color-text-muted)",label:"NOTE",shape:"circle"},warning:{icon:"!",color:"var(--hud-crimson)",label:"WARNING",shape:"square"}};function U(){let I=window.location.hash||"",L=I.indexOf("?");if(L===-1)return null;let D=I.slice(L+1);return new URLSearchParams(D).get("id")||null}function A(I){if(!I)return"\u2014";try{let L=new Date(I);if(isNaN(L.getTime()))return String(I);let D=O=>String(O).padStart(2,"0");return`${L.getFullYear()}-${D(L.getMonth()+1)}-${D(L.getDate())} ${D(L.getHours())}:${D(L.getMinutes())}:${D(L.getSeconds())}`}catch{return String(I)}}function _(I){if(!I||I<0)return"\u2014";let L=Math.round(Number(I)),D=Math.floor(L/3600),O=Math.floor(L%3600/60),z=L%60;return D>0?`${D}h ${O}m ${z}s`:O>0?`${O}m ${z}s`:`${z}s`}function m(I,L){if(!I||!L)return"";try{let D=Math.max(0,Math.round((new Date(I)-new Date(L))/1e3)),O=Math.floor(D/60),z=D%60;return`+${String(O).padStart(2,"0")}:${String(z).padStart(2,"0")}`}catch{return""}}function M(I){let L=Number(I);return isNaN(L)?"\u2014":L.toLocaleString()}function F(I){if(!I)return"#64748b";let L=0;for(let O=0;O<I.length;O++)L=L*31+I.charCodeAt(O)>>>0;return`hsl(${L%360}, 60%, 60%)`}function w(){return`
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
    `}async function E(I){if(!I){B(ServerI18n.t("sessionDetailErrMissingId"));return}H(!0);try{let L=await fetch(`/admin/sessions/${encodeURIComponent(I)}`,{credentials:"same-origin"});if(L.status===404&&(L=await fetch(`/admin/session/archive/${encodeURIComponent(I)}`,{credentials:"same-origin"})),!L.ok)throw new Error(`HTTP ${L.status}`);let D=await L.json();g.session=D.session||null,g.records=D.records||[],g.density=D.density||[],H(!1),N(),P()}catch(L){H(!1),B(ServerI18n.t("sessionDetailErrLoadFailed",{msg:L.message||ServerI18n.t("sessionDetailUnknownError")}))}}async function P(){if(g.sessionId)try{let I=await fetch(`/admin/replay/annotations?session_id=${encodeURIComponent(g.sessionId)}`,{credentials:"same-origin"});if(!I.ok)return;let L=await I.json();g.annotations=Array.isArray(L.annotations)?L.annotations:[],a()}catch{}}function S(){let I=g.session;if(!I)return 0;if(I.duration_s)return Math.round(I.duration_s*1e3);if(I.duration)return Math.round(I.duration*1e3);let L=I.started_at||I.start_time,D=I.ended_at||I.end_time;if(L&&D)try{return Math.max(0,new Date(D)-new Date(L))}catch{return 0}return g.density&&g.density.length?g.density.length*60*1e3:0}function b(I){let L=Date.parse(I||0);if(Number.isNaN(L))return"\u2014";let D=new Date(L),O=z=>String(z).padStart(2,"0");return`${O(D.getHours())}:${O(D.getMinutes())}:${O(D.getSeconds())}`}function C(I){let L=Math.floor(I/1e3),D=Math.floor(L/3600),O=Math.floor(L%3600/60),z=L%60,T=R=>String(R).padStart(2,"0");return D>0?`${T(D)}:${T(O)}:${T(z)}`:`${T(O)}:${T(z)}`}function H(I){g.loading=I;let L=document.querySelector("[data-sd-loading]"),D=document.querySelector("[data-sd-error]");L&&(L.hidden=!I),D&&I&&(D.hidden=!0);let O=document.querySelector("[data-sd-timeline-wrap]");if(O&&window.AdminSkeletons){let z=O.querySelector("[data-sd-timeline-skel]");I?(O.hidden=!1,z||(z=window.AdminSkeletons.chart(),z.setAttribute("data-sd-timeline-skel","1"),O.appendChild(z))):z&&z.remove()}}function B(I){g.error=I;let L=document.querySelector("[data-sd-error]"),D=document.querySelector("[data-sd-error-msg]");L&&(L.hidden=!1),D&&(D.textContent=I),["data-sd-session-header","data-sd-kpis","data-sd-timeline-wrap","data-sd-msgs-wrap"].forEach(function(O){let z=document.querySelector(`[${O}]`);z&&(z.hidden=!0)})}function N(){v(),c(),r(),d(),a();let I=document.querySelector("[data-sd-error]");I&&(I.hidden=!0)}function v(){let I=g.session,L=document.querySelector("[data-sd-session-header]");if(!L)return;L.hidden=!1;let D=document.querySelector("[data-sd-session-id]"),O=document.querySelector("[data-sd-meta-start]"),z=document.querySelector("[data-sd-meta-duration]"),T=document.querySelector("[data-sd-title]"),R=I&&(I.session_id||I.id)||g.sessionId||"\u2014";D&&(D.textContent=R),O&&(O.textContent=A(I&&(I.started_at||I.start_time))),z&&(z.textContent=_(I&&(I.duration_s||I.duration))),T&&(T.textContent=ServerI18n.t("sessionDetailTitleWithId",{id:String(R).slice(-8)}))}function c(){let I=g.session;if(!I)return;let L=document.querySelector("[data-sd-kpis]");L&&(L.hidden=!1);let D=function(R,j,J){let W=document.querySelector(`[data-sd-stat="${R}"]`);W&&(W.textContent=j);let V=document.querySelector(`[data-sd-stat-sub="${R}"]`);V&&(V.textContent=J||"")};D("msg_count",M(I.msg_count)),D("viewer_count",M(I.viewer_count));let O=Array.isArray(g.density)?g.density:[];if(O.length){let R=0,j=0;O.forEach(function(V,ae){V>R&&(R=V,j=ae)});let J=Date.parse(I.started_at||I.start_time||0),W="";if(!Number.isNaN(J)){let V=new Date(J+j*6e4),ae=se=>String(se).padStart(2,"0");W=`${ae(V.getHours())}:${ae(V.getMinutes())}`}D("peak",M(R),W)}else D("peak","\u2014","");let z=Number(I.blocked_count)||0;D("blocked",M(z));let T=document.querySelector("[data-sd-blocked-btn]");T&&(T.textContent=ServerI18n.t("sessionDetailStatBlocked")+(z?" "+z:""),T.disabled=z===0)}function r(){let I=document.querySelector("[data-sd-timeline-wrap]"),L=document.querySelector("[data-sd-timeline]"),D=document.querySelector("[data-sd-timeline-axis]"),O=document.querySelector("[data-sd-peak-label]");if(!I||!L||!D)return;let z=g.density;if(!z||z.length===0){I.hidden=!0;return}I.hidden=!1;let T=Math.max(1,...z),R=0;z.forEach(function(se,G){se>z[R]&&(R=G)});let j=z.map(function(se,G){let Z=Math.max(2,Math.round(se/T*100));return`<div class="admin-sd-bar${G===R?" is-peak":""}" style="height:${Z}%" title="${ServerI18n.t("sessionDetailBarTitle",{count:se,minute:G+1})}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel",{count:se})}"></div>`}).join("");L.innerHTML=j;let J=g.session,W=A(J&&(J.started_at||J.start_time)).slice(11,16)||"00:00",V=A(J&&(J.ended_at||J.end_time)).slice(11,16)||"",ae=z.length>2?`+${Math.round(z.length/2)}min`:"";D.innerHTML=`
      <span class="admin-sd-axis-label">${k(W)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${k(ae)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${k(V)}</span>
    `,O&&(O.textContent=ServerI18n.t("sessionDetailPeakLabel",{count:z[R],minute:R}))}function n(){let I=(g.msgQuery||"").trim().toLowerCase();return g.records.filter(function(L){let D=(L.status||"shown")==="blocked";return g.msgFilter==="blocked"&&!D?!1:I?String(L.text||"").toLowerCase().indexOf(I)!==-1||String(L.nickname||"").toLowerCase().indexOf(I)!==-1:!0})}function d(){let I=document.querySelector("[data-sd-msgs-wrap]"),L=document.querySelector("[data-sd-msgs-list]");if(!I||!L)return;if(!g.records.length){I.hidden=!0;return}I.hidden=!1;let D=n().slice(0,300);if(!D.length){L.innerHTML='<div class="admin-sd-msgs-empty">'+k(ServerI18n.t("sessionDetailNoMatch"))+"</div>";return}L.innerHTML=D.map(function(O){let z=(O.status||"shown")==="blocked",T=F(O.fingerprint||O.fp||""),R=b(O.timestamp||O.created_at),j=String(O.nickname||"").trim();return`
        <div class="admin-sd-msg-row${z?" is-blocked":""}">
          <span class="admin-sd-msg-time">${k(R)}</span>
          <span class="admin-sd-msg-dot" style="background:${T}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${k(O.text||"")}</span>
          <span class="admin-sd-msg-status">
            ${k(ServerI18n.t("deliveryStatus_"+(O.status||"shown")))}
            ${O.delivery_reason?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("deliveryReason_"+O.delivery_reason))}</span>`:""}
            ${z&&O.blockedBy?`<span class="admin-sd-msg-rule">${k(ServerI18n.t("sessionDetailBlockedBy",{rule:O.blockedBy}))}</span>`:""}
          </span>
          <span class="admin-sd-msg-nick">${k(j||ServerI18n.t("audienceAnonymous"))}</span>
        </div>`}).join("")}function a(){let I=g.annotations||[],L=S(),D=document.querySelector("[data-sd-ann-count]");D&&(D.textContent=I.length?`${I.length} ANNOTATIONS`:"");let O=document.querySelector("[data-sd-ann-head]");O&&(O.textContent=I.length?`ANNOTATIONS \xB7 ${I.length}`:"ANNOTATIONS");let z=document.querySelector("[data-sd-ann-layer]");z&&(!L||I.length===0?z.innerHTML="":z.innerHTML=I.map(function(j){let J=x[j.label]||x.note,W=Math.min(100,Math.max(0,j.ts_ms/L*100)),V=j.id===g.activeAnnId;return`
            <button type="button"
              class="admin-sd-ann-marker is-shape-${J.shape}${V?" is-active":""}"
              data-sd-ann-marker="${k(j.id)}"
              style="left:${W.toFixed(2)}%;--ann-color:${J.color}"
              title="${k(J.label)} \xB7 ${C(j.ts_ms)}"
              aria-label="${k(J.label)} at ${C(j.ts_ms)}: ${k(j.note||"")}">
              ${J.shape==="square"?'<span class="admin-sd-ann-marker-glyph">!</span>':""}
              ${V?`<span class="admin-sd-ann-tip"><span style="color:${J.color}">${J.icon}</span> ${k((j.note||"").slice(0,40))}${(j.note||"").length>40?"\u2026":""}</span>`:""}
            </button>`}).join(""));let T=document.querySelector("[data-sd-ann-legend]");T&&(T.innerHTML=Object.keys(x).map(function(j){let J=x[j],W=J.shape==="square"?"2px":J.shape==="star"?"0":"50%";return`<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${J.color};border-radius:${W}"></span>
          <span class="admin-sd-ann-legend-label">${J.label}</span>
        </span>`}).join(""));let R=document.querySelector("[data-sd-ann-list]");if(R){if(I.length===0){R.innerHTML="";let j=window.AdminEmpty.renderCustom({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAnnEmptyTitle"),desc:ServerI18n.t("sessionDetailAnnEmptyDesc")});j.dataset.emptyKind="session-annotations",R.appendChild(j);return}R.innerHTML=I.map(function(j){let J=x[j.label]||x.note,W=j.id===g.activeAnnId,ae=(j.note||"").length>80?(j.note||"").slice(0,80)+"\u2026":j.note||"";return`
        <div class="admin-sd-ann-row${W?" is-active":""}" data-sd-ann-row="${k(j.id)}">
          <span class="admin-sd-ann-ts" style="color:${J.color}">${C(j.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${J.color}">${J.icon} ${J.label}</span>
          <span class="admin-sd-ann-note">${k(ae)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${k(j.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">\u{1F5D1}</button>
        </div>`}).join("")}}function l(I){if(!g.sessionId)return;let L=window.HudConfirm;if(!L){let J=window.prompt(ServerI18n.t("sessionDetailPromptFallback",{time:C(I)}),"");J!=null&&J.trim()&&i(I,"note",J.trim());return}let O="highlight",z="",T=document.createElement("div");T.className="admin-sd-ann-modal-body",T.innerHTML=`
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${C(I)}</div>
        <div class="admin-sd-ann-modal-hint">${ServerI18n.t("sdAnnPrefilled")}</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(x).map(function(J){let W=x[J];return`
              <button type="button" class="admin-sd-ann-modal-lbl${J==="highlight"?" is-active":""}"
                data-ann-label="${J}" style="--ann-color:${W.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${W.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${W.label}</span>
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
      </div>`,T.addEventListener("click",function(J){let W=J.target.closest("[data-ann-label]");W&&(O=W.dataset.annLabel,T.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function(V){V.classList.toggle("is-active",V===W)}))});let R=T.querySelector("[data-ann-modal-note]"),j=T.querySelector("[data-ann-modal-counter]");R.addEventListener("input",function(){z=R.value,j.textContent=`${z.length} / 280`}),setTimeout(function(){R&&R.focus()},50),L.open({icon:"\u{1F4CC}",title:ServerI18n.t("sessionDetailAddAnnotationModalTitle"),subtitle:ServerI18n.t("cfmSubAddAnnotation"),severity:"info",confirmLabel:ServerI18n.t("sessionDetailConfirmAdd"),cancelLabel:ServerI18n.t("cancel"),body:T,width:460}).then(function(J){J&&i(I,O,R.value.trim())})}async function i(I,L,D){if(g.sessionId)try{let O=await(window.csrfFetch||fetch)("/admin/replay/annotations",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({session_id:g.sessionId,ts_ms:Math.max(0,Math.round(I)),label:L||"note",note:D||""})});if(!O.ok)throw new Error(`HTTP ${O.status}`);let z=await O.json();z.annotation&&(g.annotations.push(z.annotation),g.annotations.sort(function(T,R){return T.ts_ms-R.ts_ms}),g.activeAnnId=z.annotation.id,a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastAdded"),!0))}catch(O){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrAddFailed",{msg:O.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}async function e(I){if(I)try{let L=await(window.csrfFetch||fetch)(`/admin/replay/annotations/${encodeURIComponent(I)}`,{method:"DELETE",credentials:"same-origin"});if(!L.ok)throw new Error(`HTTP ${L.status}`);g.annotations=g.annotations.filter(function(D){return D.id!==I}),g.activeAnnId===I&&(g.activeAnnId=null),a(),window.showToast&&window.showToast(ServerI18n.t("sessionDetailToastDeleted"),!0)}catch(L){window.showToast&&window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed",{msg:L.message||ServerI18n.t("sessionDetailUnknownError")}),!1)}}function o(I){let L=document.querySelector("[data-sd-timeline-inner]"),D=document.querySelector("[data-sd-ann-hover]");if(!L||!D)return;let O=L.getBoundingClientRect();if(!O.width)return;let z=I.clientX-O.left,T=Math.min(1,Math.max(0,z/O.width)),R=S();if(!R){D.hidden=!0;return}let j=Math.round(T*R);g.hoverTsMs=j,D.hidden=!1,D.style.left=`${(T*100).toFixed(2)}%`,D.textContent=ServerI18n.t("sessionDetailHoverAddCta",{time:C(j)})}function h(){let I=document.querySelector("[data-sd-ann-hover]");I&&(I.hidden=!0),g.hoverTsMs=null}function t(I){if(I.target.closest("[data-sd-ann-marker]"))return;let L=document.querySelector("[data-sd-timeline-inner]");if(!L)return;let D=L.getBoundingClientRect();if(!D.width)return;let O=I.clientX-D.left,z=Math.min(1,Math.max(0,O/D.width)),T=S();T&&l(Math.round(z*T))}async function s(){if(g.sessionId)try{let I=g.records.slice(0,500);if(!I.length){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayEmpty"),!1);return}let L=await window.csrfFetch("/admin/replay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:I,speedMultiplier:1})});if(L.status===503){window.showToast&&window.showToast(ServerI18n.t("sessionsReplayNoOverlay"),!1);return}if(!L.ok)throw new Error("HTTP "+L.status);window.showToast&&window.showToast(ServerI18n.t("sessionsReplayStarted"),!0)}catch{window.showToast&&window.showToast(ServerI18n.t("sessionsReplayFailed"),!1)}}function u(I,L){if(I==="back")window.location.hash="#/history/sessions";else if(I==="retry")g.sessionId&&E(g.sessionId);else if(I==="export"){if(!g.sessionId)return;let D=document.createElement("a");D.href="/admin/sessions/"+encodeURIComponent(g.sessionId)+"/export?format=csv",D.rel="noopener",document.body.appendChild(D),D.click(),D.remove()}else if(I==="replay")s();else if(I==="add-annotation"){let D=S(),O=g.hoverTsMs!=null?g.hoverTsMs:Math.round(D/2);l(O)}}function p(){if((window.location.hash||"").indexOf("/session-detail")===-1)return;let L=U();if(!L){g.sessionId=null,B(ServerI18n.t("sessionDetailErrNoSessionSelected"));return}g.sessionId=L,E(L)}function $(){let I=document.getElementById("settings-grid");if(!I)return;let L=document.getElementById(y);L||(I.insertAdjacentHTML("beforeend",w()),L=document.getElementById(y),a()),L&&L.dataset.sdBound!=="1"&&(L.dataset.sdBound="1",L.addEventListener("click",function(D){let O=D.target.closest("[data-sd-ann-del]");if(O){D.stopPropagation(),e(O.dataset.sdAnnDel);return}let z=D.target.closest("[data-sd-ann-marker]");if(z){D.stopPropagation(),g.activeAnnId=z.dataset.sdAnnMarker,a();let W=document.querySelector(`[data-sd-ann-row="${g.activeAnnId}"]`);W&&W.scrollIntoView&&W.scrollIntoView({block:"nearest",behavior:"smooth"});return}let T=D.target.closest("[data-sd-ann-row]");if(T){g.activeAnnId=T.dataset.sdAnnRow,a();return}if(D.target.closest("[data-sd-timeline-inner]")){t(D);return}let j=D.target.closest("[data-sd-action]");if(j){D.preventDefault(),u(j.dataset.sdAction,j);return}let J=D.target.closest("[data-sd-filter]");J&&(g.msgFilter=J.dataset.sdFilter,L.querySelectorAll("[data-sd-filter]").forEach(function(W){W.classList.toggle("is-active",W===J)}),d())}),L.addEventListener("input",function(D){let O=D.target.closest("[data-sd-search]");O&&(g.msgQuery=O.value||"",d())}),L.addEventListener("mousemove",function(D){D.target.closest("[data-sd-timeline-inner]")&&o(D)}),L.addEventListener("mouseleave",function(D){D.target.closest&&D.target.closest("[data-sd-timeline-inner]")&&h()},!0)),g.sessionId=U(),g.sessionId?E(g.sessionId):B(ServerI18n.t("sessionDetailErrNoSessionSelected")),f||(f=!0,window.addEventListener("hashchange",p))}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&(window.location.hash||"").indexOf("/session-detail")!==-1&&$()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0});let L=window.location.hash||"";document.getElementById("settings-grid")&&!document.getElementById(y)&&L.indexOf("/session-detail")!==-1&&$(),window.addEventListener("admin-route-changed",function(D){(D&&D.detail&&D.detail.route)==="session-detail"&&$()}),window.addEventListener("hashchange",function(){(window.location.hash||"").indexOf("/session-detail")!==-1&&$()})})})()});var Gt=ve(()=>{(function(){"use strict";let y="sec-search-overview";var k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(n){return String(n).replace(/[&<>"']/g,function(d){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[d]})},g=20,f={query:"",scope:"session",blockedOnly:!1,who:"",shown:g,results:[],total:0,loading:!1,searched:!1},x=0;function U(){return'<div id="'+y+'" class="admin-search-page hud-page-stack lg:col-span-2"><div class="admin-ui-page-head"><h2 class="admin-ui-page-title">'+ServerI18n.t("searchPageTitle")+'</h2><p class="admin-ui-page-note">'+ServerI18n.t("searchPageNote")+'</p></div><div class="admin-search-bar"><input id="admin-search-input" type="search" class="admin-ui-input admin-search-input" placeholder="'+k(ServerI18n.t("searchInputPlaceholder"))+'" autocomplete="off" spellcheck="false" /><span id="admin-search-count" class="admin-search-count"></span></div><div class="admin-search-filters"><button type="button" class="admin-ui-chip admin-search-chip is-active" data-search-scope="session">'+k(ServerI18n.t("searchScopeSession"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-scope="all">'+k(ServerI18n.t("searchScopeAll"))+'</button><button type="button" class="admin-ui-chip admin-search-chip" data-search-blocked>'+k(ServerI18n.t("searchOnlyBlocked"))+'</button><select class="admin-ui-select admin-search-who" data-search-who aria-label="'+k(ServerI18n.t("searchWhoAria"))+'"><option value="">'+k(ServerI18n.t("searchWhoAnyone"))+'</option></select><span class="admin-ui-spacer"></span><button type="button" id="admin-search-export-btn" class="admin-ui-action" hidden>'+k(ServerI18n.t("searchExportCsv"))+'</button></div><div id="admin-search-results" class="admin-search-results"><div id="admin-search-empty-state" class="admin-search-empty">'+k(ServerI18n.t("searchPromptStart"))+"</div></div></div>"}function A(n){if(!n)return 200;for(var d=0,a=0;a<Math.min(n.length,6);a++)d=d*31+n.charCodeAt(a)&65535;return d%360}function _(n,d){if(!d||!n)return k(n||"");var a=k(n),l=k(d);try{var i=new RegExp("("+l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");return a.replace(i,'<mark class="admin-search-hit">$1</mark>')}catch{return a}}function m(n){if(!n)return"\u2014";try{var d=new Date(n);return d.toLocaleString(ServerI18n.dateLocale(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return n}}function M(){var n=f.results;return f.blockedOnly&&(n=n.filter(function(d){return(d.status||"shown")==="blocked"})),f.who&&(n=n.filter(function(d){return(d.nickname||"")===f.who})),n}function F(){var n=document.getElementById("admin-search-count");if(n){if(!f.searched||!f.query.trim()){n.textContent="";return}n.textContent=ServerI18n.t("searchResultCount",{n:M().length})}}function w(){var n=document.querySelector("[data-search-who]");if(n){var d=[];f.results.forEach(function(l){var i=(l.nickname||"").trim();i&&d.indexOf(i)===-1&&d.push(i)}),d.sort();var a=f.who;n.innerHTML='<option value="">'+k(ServerI18n.t("searchWhoAnyone"))+"</option>"+d.map(function(l){return'<option value="'+k(l)+'"'+(l===a?" selected":"")+">"+k(l)+"</option>"}).join("")}}function E(){var n=document.getElementById("admin-search-results"),d=document.getElementById("admin-search-empty-state"),a=document.getElementById("admin-search-export-btn");if(n){n.querySelectorAll(".admin-search-row, .admin-search-more").forEach(function(t){t.remove()});var l=function(t){d&&(d.style.display="block",d.textContent=t),a&&(a.hidden=!0)};if(f.loading)return l(ServerI18n.t("searchSearching"));if(!f.searched)return l(ServerI18n.t("searchPromptStart"));var i=M();if(i.length===0)return l(ServerI18n.t("searchNoMatch"));d&&(d.style.display="none"),a&&(a.hidden=!1);var e=Math.min(i.length,f.shown),o=document.createDocumentFragment();if(i.slice(0,e).forEach(function(t){var s=document.createElement("div");s.className="admin-search-row",s.innerHTML='<span class="admin-search-row__ts">'+k(m(t.timestamp))+'</span><span class="admin-search-row__text">'+_(t.text||"",f.query)+'</span><span class="admin-search-row__nick">'+k((t.nickname||"").trim()||ServerI18n.t("audienceAnonymous"))+'<span class="admin-search-row__delivery">'+k(ServerI18n.t("deliveryStatus_"+(t.status||"shown")))+(t.delivery_reason?"<br>"+k(ServerI18n.t("deliveryReason_"+t.delivery_reason)):"")+"</span></span>",o.appendChild(s)}),n.appendChild(o),i.length>e){var h=document.createElement("button");h.type="button",h.className="admin-search-more",h.dataset.searchMore="1",h.textContent=ServerI18n.t("searchMoreLeft",{n:i.length-e}),n.appendChild(h)}}}function P(){F(),w(),E()}async function S(){var n=f.query.trim();if(!n){f.loading=!1,f.searched=!1,f.results=[],f.total=0,P();return}f.loading=!0,P();try{var d="/admin/search?q="+encodeURIComponent(n);if(f.scope==="session"){var a=await C();a&&(d+="&since="+encodeURIComponent(a))}var l=Date.now(),i=await fetch(d,{credentials:"same-origin"}),e=Date.now()-l;if(!i.ok)throw new Error("HTTP "+i.status);var o=await i.json();f.results=Array.isArray(o.results)?o.results:[],f.total=typeof o.total=="number"?o.total:f.results.length,f.shown=g}catch(h){console.error("[admin-search] fetch error:",h),f.results=[],f.total=0,window.showToast&&window.showToast(ServerI18n.t("searchToastFailed",{msg:h.message||""}),!1)}finally{f.loading=!1,f.searched=!0,P()}}var b=null;async function C(){if(b!==null)return b;try{var n=await fetch("/admin/session/current",{credentials:"same-origin"});if(n.ok){var d=await n.json();if(d.status==="live"&&d.started_at)return b=new Date(d.started_at*1e3).toISOString(),b}}catch{}return b="",""}function H(){clearTimeout(x),x=setTimeout(S,300)}function B(){if(f.results.length){var n=[["nickname","fingerprint","timestamp","status","text","delivery_reason"].join(",")];f.results.forEach(function(i){var e=[i.nickname||"",i.fingerprint||"",i.timestamp||"",i.status||"",i.text||"",i.delivery_reason||""].map(function(o){return'"'+String(o).replace(/"/g,'""')+'"'});n.push(e.join(","))});var d=new Blob(["\uFEFF"+n.join(`
`)],{type:"text/csv;charset=utf-8"}),a=URL.createObjectURL(d),l=document.createElement("a");l.href=a,l.download="danmu-search-"+(f.query||"export")+".csv",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}}function N(){var n=document.getElementById(y);if(n){var d=document.getElementById("admin-search-input");d&&(d.addEventListener("input",function(){f.query=d.value,H()}),d.addEventListener("keydown",function(l){l.key==="Enter"&&(clearTimeout(x),f.query=d.value,S())})),n.addEventListener("click",function(l){var i=l.target.closest("[data-search-scope]");if(i){f.scope=i.dataset.searchScope,n.querySelectorAll("[data-search-scope]").forEach(function(o){o.classList.toggle("is-active",o===i)}),f.query.trim()&&H();return}var e=l.target.closest("[data-search-blocked]");if(e){f.blockedOnly=!f.blockedOnly,e.classList.toggle("is-active",f.blockedOnly),f.shown=g,P();return}if(l.target.closest("[data-search-more]")){f.shown+=g,E();return}}),n.addEventListener("change",function(l){var i=l.target.closest("[data-search-who]");i&&(f.who=i.value||"",f.shown=g,P())});var a=document.getElementById("admin-search-export-btn");a&&a.addEventListener("click",B)}}function v(){var n=document.querySelector(".admin-dash-grid"),d=document.getElementById(y);if(!(!n||!d)){var a=n.dataset.activeLeaf||"dashboard";d.style.display=a==="search"?"":"none"}}function c(){var n=document.getElementById("settings-grid");!n||document.getElementById(y)||(n.insertAdjacentHTML("beforeend",U()),N(),v())}function r(){if(window.DANMU_CONFIG?.session?.logged_in){var n=new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c(),v()});n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("hashchange",v),document.addEventListener("admin-panel-rendered",function(){c(),v()}),c()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})()});var zt=ve(()=>{(function(){"use strict";let y="sec-api-tokens-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(t){return String(t).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})},g=[{id:"read:history",labelKey:"apiTokensScopeReadHistory",badge:"green",badgeTxt:"read:history"},{id:"read:stats",labelKey:"apiTokensScopeReadStats",badge:"cyan",badgeTxt:"read:stats"},{id:"fire:danmu",labelKey:"apiTokensScopeFireDanmu",badge:"amber",badgeTxt:"fire:danmu"},{id:"admin:*",labelKey:"apiTokensScopeAdminAll",badge:"red",badgeTxt:"admin:*"}],f=[{labelKey:"apiTokensExpiry7d",days:7},{labelKey:"apiTokensExpiry30d",days:30},{labelKey:"apiTokensExpiry90d",days:90,default:!0},{labelKey:"apiTokensExpiryPermanent",days:null}],x={tokens:[],loading:!1,creating:!1,newTokenRaw:null,formError:null};function U(t){if(!t)return"\u2014";try{let s=new Date(t);if(isNaN(s.getTime()))return String(t);let u=p=>String(p).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())}`}catch{return String(t)}}function A(t){if(!t)return null;try{let s=new Date(t);if(isNaN(s.getTime()))return null;let u=p=>String(p).padStart(2,"0");return`${s.getFullYear()}-${u(s.getMonth()+1)}-${u(s.getDate())} ${u(s.getHours())}:${u(s.getMinutes())}`}catch{return null}}function _(t){let s=Number(t);return isNaN(s)?"0":s.toLocaleString()}function m(t){if(!t||t.enabled===!1)return"inactive";if(!t.expires_at)return"active";try{let s=new Date(t.expires_at).getTime(),u=Date.now();if(s<u)return"expired";if(s-u<168*3600*1e3)return"expiring"}catch{}return"active"}function M(t){if(!t)return 1/0;try{return Math.floor((Date.now()-new Date(t).getTime())/864e5)}catch{return 1/0}}function F(t){return!t||!t.length?'<span class="admin-ui-pill admin-at-scope-badge is-muted">\u2014</span>':t.map(function(s){let u="admin-ui-pill admin-at-scope-badge";return s==="admin:*"?u+=" is-danger":s.startsWith("fire:")?u+=" is-warn":s.startsWith("read:stats")?u+=" is-cyan":u+=" is-success",`<span class="${u}">${k(s)}</span>`}).join(" ")}function w(t){let s="admin-ui-dot admin-at-dot";return t==="active"?s+=" is-success":t==="expiring"?s+=" is-warn":t==="expired"?s+=" is-danger":s+=" is-muted",`<span class="${s}" aria-hidden="true"></span>`}function E(){let t=g.map(function(u){let p=u.id==="admin:*"?`<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`:"",I=`admin-ui-pill admin-at-scope-badge is-${u.badge==="red"?"danger":u.badge==="amber"?"warn":u.badge==="green"?"success":u.badge}`;return`
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
      `}).join(""),s=f.map(function(u){let p=u.default?"checked":"";return`
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
                    ${t}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">${ServerI18n.t("uiExpiry")} \xB7 ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${s}
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
    `}async function P(){H(!0);try{let t=await fetch("/admin/api-tokens",{credentials:"same-origin"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let s=await t.json();x.tokens=s.tokens||s||[],N()}catch(t){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastLoadFailed",{msg:t.message||ServerI18n.t("apiTokensUnknownError")}),!1)}finally{H(!1)}}async function S(t){x.creating=!0,B(!0),d();try{let s=await csrfFetch("/admin/api-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok){let $=await s.json().catch(()=>({}));throw new Error($.error||$.message||`HTTP ${s.status}`)}let u=await s.json(),p=u.token||u.raw_token||u.access_token||null;x.newTokenRaw=p,v(p),r(),await P(),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreated"),!0)}catch(s){n(ServerI18n.t("apiTokensFormErrCreateFailed",{msg:s.message||ServerI18n.t("apiTokensUnknownError")})),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCreateFailed",{msg:s.message||""}),!1)}finally{x.creating=!1,B(!1)}}async function b(t,s){if(await window.HudConfirm?.open({icon:"\u2298",title:ServerI18n.t("apiTokensRevokeModalTitle"),subtitle:ServerI18n.t("cfmSubRevokeUndone"),severity:"danger",body:`<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div><div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-muted)">${k(s||t)}</div>`,confirmLabel:ServerI18n.t("apiTokensRevoke")}))try{let p=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"DELETE"});if(!p.ok){let $=await p.json().catch(()=>({}));throw new Error($.error||$.message||`HTTP ${p.status}`)}window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevoked"),!0),await P()}catch(p){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastRevokeFailed",{msg:p.message||""}),!1)}}async function C(t,s){try{let u=await csrfFetch(`/admin/api-tokens/${encodeURIComponent(t)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:s})});if(!u.ok){let p=await u.json().catch(()=>({}));throw new Error(p.error||p.message||`HTTP ${u.status}`)}window.showToast&&window.showToast(s?ServerI18n.t("apiTokensToastEnabled"):ServerI18n.t("apiTokensToastDisabled"),!0),await P()}catch(u){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastActionFailed",{msg:u.message||""}),!1)}}function H(t){let s=document.querySelector("[data-at-list-loading]");s&&(s.hidden=!t)}function B(t){let s=document.getElementById("adminAtSubmitBtn");s&&(s.disabled=t,s.textContent=t?ServerI18n.t("apiTokensGenerating"):ServerI18n.t("apiTokensGenerateBtn"))}function N(){let t=x.tokens,s=document.querySelector("[data-at-empty]"),u=document.querySelector("[data-at-table-wrap]"),p=document.querySelector("[data-at-tbody]");if(!(!s||!u||!p)){if(!t||t.length===0){if(!s.firstElementChild&&window.AdminEmpty){let $=window.AdminEmpty.renderCustom({icon:"\u26BF",title:ServerI18n.t("apiTokensEmptyTitle"),desc:ServerI18n.t("apiTokensEmptyDesc")});$.dataset.emptyKind="api-tokens",s.appendChild($)}s.hidden=!1,u.hidden=!0;return}s.hidden=!0,u.hidden=!1,p.innerHTML=t.map(function($){let I=m($),L=w(I),D=$.scopes||$.scope||[],O=Array.isArray(D)?D:String(D).split(",").map(W=>W.trim()).filter(Boolean),T=M($.last_used_at)>=90?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>`:"",R=I==="expired"?`<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>`:"",j=I==="expiring"?`<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>`:"",J=$.last_used_at?`${A($.last_used_at)||U($.last_used_at)}<br><span class="admin-at-ip">${k($.last_used_ip||"")}</span>`:ServerI18n.t("apiTokensNeverUsed");return`
        <tr class="admin-at-row" data-token-id="${k($.id||$.token_id||"")}">
          <td class="admin-at-td-label">
            ${L}
            <span class="admin-at-label-text">${k($.label||$.name||"\u2014")}</span>
            ${T}${R}${j}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${k($.prefix||$.id_prefix||"\u2014")}</span>
            <div class="admin-at-scopes-cell">${F(O)}</div>
          </td>
          <td class="admin-at-td-used">${J}</td>
          <td class="admin-at-td-usage">${_($.usage_count||$.use_count)}</td>
          <td class="admin-at-td-created">${U($.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${k($.id||$.token_id||"")}"
              data-token-enabled="${$.enabled===!1?"0":"1"}"
              title="${$.enabled===!1?ServerI18n.t("apiTokensEnableTitle"):ServerI18n.t("apiTokensDisableTitle")}"
            >${$.enabled===!1?ServerI18n.t("apiTokensEnableLabel"):ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${k($.id||$.token_id||"")}"
              data-token-label="${k($.label||$.name||"")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
          </td>
        </tr>
      `}).join("")}}function v(t){let s=document.getElementById("adminAtSuccessBanner"),u=document.getElementById("adminAtTokenDisplay"),p=document.getElementById("adminAtCreateForm");s&&(s.hidden=!1),u&&t&&(u.value=t),p&&(p.style.opacity="0.5"),s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}function c(){let t=document.getElementById("adminAtSuccessBanner"),s=document.getElementById("adminAtCreateForm");t&&(t.hidden=!0),s&&(s.style.opacity=""),x.newTokenRaw=null}function r(){let t=document.getElementById("adminAtCreateForm");t&&t.reset(),document.querySelectorAll(".admin-at-expiry-btn").forEach(function(p){p.classList.remove("is-active")});let s=document.querySelector("input[name='adminAtExpiry'][value='90']");if(s){s.checked=!0;let p=s.closest(".admin-at-expiry-btn");p&&p.classList.add("is-active")}let u=document.getElementById("adminAtAdminWarn");u&&(u.hidden=!0),d()}function n(t){let s=document.getElementById("adminAtFormError");s&&(s.hidden=!1,s.textContent=t)}function d(){let t=document.getElementById("adminAtFormError");t&&(t.hidden=!0,t.textContent="")}function a(){let t=document.getElementById("adminAtLabel"),s=t?t.value.trim():"",u=[];document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function(L){u.push(L.value)});let p=document.querySelector("input[name='adminAtExpiry']:checked"),$=p?p.value:"90",I=$==="null"?null:parseInt($,10);return{label:s,scopes:u,expiry_days:I}}function l(t){return t.label?t.label.length>80?ServerI18n.t("apiTokensErrLabelTooLong"):!t.scopes||t.scopes.length===0?ServerI18n.t("apiTokensErrNeedScope"):null:ServerI18n.t("apiTokensErrNeedLabel")}function i(t){if(t.preventDefault(),x.creating)return;d();let s=a(),u=l(s);if(u){n(u);return}S(s)}function e(){let t=x.newTokenRaw;if(!t)return;let s=document.getElementById("adminAtCopyBtn");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500)),window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopied"),!0)}).catch(function(){window.showToast&&window.showToast(ServerI18n.t("apiTokensToastCopyFailed"),!1)});else{let u=document.getElementById("adminAtTokenDisplay");u&&(u.select(),document.execCommand("copy")),s&&(s.textContent=ServerI18n.t("apiTokensCopiedLabel"),setTimeout(function(){s.textContent=ServerI18n.t("apiTokensCopyBtn")},2500))}}function o(){let t=document.getElementById(y);if(!t)return;t.addEventListener("click",function($){let I=$.target.closest("[data-at-action]");if(I){let D=I.dataset.atAction;if(D==="revoke"){let O=I.dataset.tokenId,z=I.dataset.tokenLabel;b(O,z)}else if(D==="toggle"){let O=I.dataset.tokenId,z=I.dataset.tokenEnabled==="1";C(O,!z)}else D==="copy-token"&&e();return}let L=$.target.closest(".admin-at-expiry-btn");L&&(document.querySelectorAll(".admin-at-expiry-btn").forEach(function(D){D.classList.remove("is-active")}),L.classList.add("is-active"))});let s=document.getElementById("adminAtScope_admin__");s&&s.addEventListener("change",function(){let $=document.getElementById("adminAtAdminWarn");$&&($.hidden=!s.checked)});let u=document.getElementById("adminAtCreateForm");u&&u.addEventListener("submit",i);let p=document.querySelector("input[name='adminAtExpiry'][value='90']");if(p){let $=p.closest(".admin-at-expiry-btn");$&&$.classList.add("is-active")}}function h(){let t=document.getElementById("settings-grid");!t||document.getElementById(y)||(t.insertAdjacentHTML("beforeend",E()),o(),P())}document.addEventListener("DOMContentLoaded",function(){if(!window.DANMU_CONFIG||!window.DANMU_CONFIG.session||!window.DANMU_CONFIG.session.logged_in)return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&h()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&h()})})()});var Vt=ve(()=>{(function(){"use strict";let y="sec-wcag-overview",k=window.AdminUtils&&window.AdminUtils.escapeHtml||function(r){return String(r).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})};function g(r){let n=r.replace(/^#/,""),d=n.length===3?n.split("").map(function(a){return a+a}).join(""):n;return[parseInt(d.slice(0,2),16)/255,parseInt(d.slice(2,4),16)/255,parseInt(d.slice(4,6),16)/255]}function f(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function x(r){let n=g(r);return .2126*f(n[0])+.7152*f(n[1])+.0722*f(n[2])}function U(r,n){let d=x(r),a=x(n),l=Math.max(d,a),i=Math.min(d,a);return(l+.05)/(i+.05)}function A(r){return r>=7?"AAA":r>=4.5?"AA":r>=3?"AA-large":"fail"}function _(r,n){let d=x(n),a=[],l=g(r);for(let i=.05;i<=.6&&a.length<3;i+=.05){let o="#"+l.map(function(t){return Math.min(1,t+i)}).map(function(t){return Math.round(t*255).toString(16).padStart(2,"0")}).join("").toUpperCase(),h=U(o,n);h>=4.5&&a.push({hex:o,ratio:h})}return a}let m=[{nameKey:"wcagPairWhiteBlack",fg:"#FFFFFF",bg:"#000000"},{nameKey:"wcagPairCyanBlack",fg:"#38BDF8",bg:"#000000"},{nameKey:"wcagPairYellowBlack",fg:"#FBBF24",bg:"#000000"},{nameKey:"wcagPairRedBlack",fg:"#F87171",bg:"#000000"},{nameKey:"wcagPairSystemRedWhite",fg:"#DC2626",bg:"#FFFFFF"},{nameKey:"wcagPairGreenProjection",fg:"#86EFAC",bg:"#0F172A"},{nameKey:"wcagPairSystemMessagePanel",fg:"#94A3B8",bg:"#1E293B"},{nameKey:"wcagPairAuxGrayCard",fg:"#64748B",bg:"#1E293B"}],M={fg:"#FB7185",bg:"#000000"},F="minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px",w={AAA:{mod:"is-pass",label:"\u2713 AAA"},AA:{mod:"is-pass",label:"\u2713 AA"},"AA-large":{mod:"is-large",labelKey:"wcagPillLevelAALarge"},fail:{mod:"is-fail",label:"\u2717 FAIL"}};function E(){let r=m.filter(function(a){return A(U(a.fg,a.bg))!=="fail"}).length,n=m.length-r,d=Math.round(r/m.length*100);return`
      <div id="${y}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${P("PASS AA+",r,ServerI18n.t("wcagStatPassLabel"))}
              ${P("BELOW AA",n,ServerI18n.t("wcagStatFailLabel"))}
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
              ${m.map(function(a,l){return S(a,l)}).join("")}
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
      </div>`}function P(r,n,d){return`
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-value">${k(String(n))}</span>
        <span class="hud-stat-tile-label">${k(d)}</span>
      </div>`}function S(r,n){let d=U(r.fg,r.bg),a=A(d),l=w[a],i=ServerI18n.t(r.nameKey),e=l.labelKey?ServerI18n.t(l.labelKey):l.label,o=a==="fail"?ServerI18n.t("wcagWarnFail"):a==="AA-large"?ServerI18n.t("wcagWarnLargeOnly"):"";return`
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${F}"
        data-wcag-pair-idx="${n}" role="button" tabindex="0"
        aria-label="${k(ServerI18n.t("wcagPairAriaLabel",{name:i,ratio:d.toFixed(2),level:e.slice(2)}))}">
        <span class="admin-wcag-pair-name">${k(i)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${k(r.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${k(r.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${k(r.fg)}">${k(r.fg)} / ${k(r.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${d.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${l.mod}">${e}</span>
        ${o?`<span class="admin-wcag-warn">\u26A0 ${o}</span>`:""}
      </div>`}function b(){let r=U(M.fg,M.bg),n=A(r),d=w[n],a=d.labelKey?ServerI18n.t(d.labelKey):d.label,l=_(M.fg,M.bg);return`
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${C(ServerI18n.t("wcagForegroundLabel"),M.fg,"fg")}
        ${C(ServerI18n.t("wcagBackgroundLabel"),M.bg,"bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${k(M.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${k(M.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${k(M.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-value">${r.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${d.mod}">${a}</span>
      </div>

      <div class="admin-wcag-levels">
        ${H(ServerI18n.t("wcagCheckAANormal"),r>=4.5)}
        ${H(ServerI18n.t("wcagCheckAALarge"),r>=3)}
        ${H(ServerI18n.t("wcagCheckAAANormal"),r>=7)}
        ${H(ServerI18n.t("wcagCheckAAALarge"),r>=4.5)}
      </div>

      ${l.length?`
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${l.map(function(i){return`<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${k(i.hex)}"
                title="${k(ServerI18n.t("wcagSuggApplyTitle",{ratio:i.ratio.toFixed(2)}))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${k(M.bg)};color:${k(i.hex)}">${k(i.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${i.ratio.toFixed(1)}:1</span>
              </button>`}).join("")}
          </div>
        </div>`:""}`}function C(r,n,d){let a="wcag-tester-"+d;return`
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${a}">${k(r)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${k(n)}"></span>
          <input type="text" id="${a}" class="admin-ui-input" data-wcag-tester-${d}
            aria-label="${k(ServerI18n.t("wcagHexAria",{label:r}))}"
            value="${k(n)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`}function H(r,n){return`<div class="admin-wcag-level ${n?"is-pass":"is-fail"}">
      <span class="admin-wcag-level-icon">${n?"\u2713":"\u2717"}</span>
      <span>${k(r)}</span>
    </div>`}function B(){let r=document.getElementById(y);r&&(r.addEventListener("click",function(n){let d=n.target.closest("[data-wcag-pair-idx]");if(d){N(d);return}let a=n.target.closest("[data-wcag-sugg]");a&&(M.fg=a.dataset.wcagSugg,v())}),r.addEventListener("keydown",function(n){if(n.key!=="Enter"&&n.key!==" "&&n.key!=="Spacebar")return;let d=n.target.closest("[data-wcag-pair-idx]");d&&(n.preventDefault(),N(d))}),r.addEventListener("input",function(n){let d=n.target.closest("[data-wcag-tester-fg]"),a=n.target.closest("[data-wcag-tester-bg]");d&&/^#[0-9A-Fa-f]{6}$/.test(d.value)&&(M.fg=d.value.toUpperCase(),v()),a&&/^#[0-9A-Fa-f]{6}$/.test(a.value)&&(M.bg=a.value.toUpperCase(),v())}))}function N(r){let n=m[parseInt(r.dataset.wcagPairIdx,10)];n&&(M.fg=n.fg,M.bg=n.bg,v())}function v(){let r=document.querySelector("[data-wcag-tester]");r&&(r.innerHTML=b())}function c(){let r=document.getElementById("settings-grid");!r||document.getElementById(y)||(r.insertAdjacentHTML("beforeend",E()),B())}document.addEventListener("DOMContentLoaded",function(){if(!(window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in))return;new MutationObserver(function(){document.getElementById("settings-grid")&&!document.getElementById(y)&&c()}).observe(document.getElementById("app-container")||document.body,{childList:!0,subtree:!0}),document.getElementById("settings-grid")&&!document.getElementById(y)&&c()})})()});var Jt=ve(()=>{(function(){"use strict";let y="danmu.onboarding.done",k="admin-onboarding-root",U=[{titleKey:"obStep1Title",bodyKey:"obStep1Body",labelKey:"obStep1Label",target:".admin-cockpit-overlay",side:"bottom"},{titleKey:"obStep2Title",bodyKey:"obStep2Body",labelKey:"obStep2Label",target:".admin-cockpit-stats-actions",side:"bottom"},{titleKey:"obStep3Title",bodyKey:"obStep3Body",labelKey:"obStep3Label",target:"#sec-live-feed .admin-lf-v4__card, #sec-live-feed",side:"top"}],A=0,_=!1;window.AdminOnboarding={start:E,isDone:function(){try{return!!localStorage.getItem(y)}catch{return!1}},reset:function(){try{localStorage.removeItem(y)}catch{}}};let m=new Set(["live","dashboard"]);function M(){if(_||window.AdminOnboarding.isDone()||!m.has(F()))return;let r=()=>!!document.querySelector(".admin-session-banner-live");r()||setTimeout(()=>{_||window.AdminOnboarding.isDone()||r()||m.has(F())&&E()},1200)}function F(){let r=document.querySelector(".admin-dash-grid");return r&&r.dataset.activeRoute||"live"}function w(){((window.location.hash.match(/^#\/(\S+)/)||[])[1]||"")==="onboarding-tour"&&E()}function E(){_||(_=!0,A=0,H())}function P(r){if(!_)return;_=!1,document.body.removeEventListener("click",b),document.removeEventListener("keydown",C),window.removeEventListener("resize",B);let n=document.getElementById(k);if(n&&n.remove(),r)try{localStorage.setItem(y,"1")}catch{}if(window.location.hash==="#/onboarding-tour"){try{history.replaceState(null,"","#/live")}catch{}window.dispatchEvent(new HashChangeEvent("hashchange"))}}function S(){A<U.length-1?(A++,B()):P(!0)}function b(r){let n=r.target.closest("[data-ob-action]");n&&(r.stopPropagation(),n.dataset.obAction==="next"?S():n.dataset.obAction==="skip"&&P(!1))}function C(r){_&&r.key==="Escape"&&(r.preventDefault(),P(!1))}function H(){let r=document.getElementById(k);r&&r.remove();let n=document.createElement("div");n.id=k,n.className="admin-ob-root",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","false"),n.setAttribute("aria-label",ServerI18n.t("obAriaLabel")),document.body.appendChild(n),document.body.addEventListener("click",b),document.addEventListener("keydown",C),window.addEventListener("resize",B),B()}function B(){let r=document.getElementById(k);if(!r)return;let n=U[A],d=U.length,a=v(n.target),l=window.innerWidth,i=window.innerHeight,e="";a?e='<div class="admin-ob-spot" style="left:'+(a.left-8)+"px;top:"+(a.top-8)+"px;width:"+(a.width+16)+"px;height:"+(a.height+16)+'px;"></div>':e='<div class="admin-ob-scrim"></div>';let o=(l-360)/2,h=i/2-110,t="none";if(a){let $=a.left+a.width/2;n.side==="top"?(o=$-360/2,h=a.top-16,t="bottom"):n.side==="right"?(o=a.right+16+8,h=a.top,t="left"):(o=$-360/2,h=a.bottom+16+8,t="top"),o=Math.max(16,Math.min(l-360-16,o))}let s=U.map(function($,I){return'<span class="admin-ob-progress-item'+(I===A?" is-current":"")+'">'+(I+1)+" "+c(ServerI18n.t($.labelKey))+"</span>"+(I<d-1?'<span class="admin-ob-progress-sep">\xB7</span>':"")}).join("");r.innerHTML=e+'<div class="admin-ob-bubble" data-arrow="'+t+'" style="left:'+o+"px;top:"+h+'px"><div class="admin-ob-count">'+(A+1)+" / "+d+'</div><div class="admin-ob-title">'+c(ServerI18n.t(n.titleKey))+'</div><div class="admin-ob-body">'+c(ServerI18n.t(n.bodyKey))+'</div><div class="admin-ob-foot"><button type="button" class="admin-ob-skip" data-ob-action="skip">'+c(ServerI18n.t("obSkip"))+'</button><div class="admin-ob-foot-spacer"></div><button type="button" class="admin-ob-next" data-ob-action="next">'+c(ServerI18n.t(A===d-1?"obDone":"obNext"))+'</button></div><div class="admin-ob-progress">'+s+"</div></div>";let u=r.querySelector(".admin-ob-bubble");if(!u||!a)return;let p=u.offsetHeight;if(n.side==="top")u.style.top=Math.max(16,a.top-16-8-p)+"px";else if(h+p>i-16){let $=a.top-16-8-p;$>=16?(u.style.top=$+"px",u.setAttribute("data-arrow","bottom")):(u.style.top=Math.max(16,i-p-16)+"px",u.setAttribute("data-arrow","none"))}N(u,a)}function N(r,n){let d=r.getAttribute("data-arrow");if(d==="none")return;let a=r.getBoundingClientRect(),l=d==="top"||d==="bottom",i=l?n.left+n.width/2-a.left:n.top+n.height/2-a.top,e=l?a.width:a.height,o=Math.max(16,Math.min(e-32,i-8));r.style.setProperty("--ob-arrow",o+"px")}function v(r){if(!r)return null;let n=document.querySelector(r);if(!n)return null;let d=n.getBoundingClientRect();return d.width<8||d.height<8||d.bottom<0||d.top>window.innerHeight?null:d}function c(r){return window.AdminUtils&&window.AdminUtils.escapeHtml?window.AdminUtils.escapeHtml(r):r==null?"":String(r).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}document.addEventListener("DOMContentLoaded",function(){window.DANMU_CONFIG&&window.DANMU_CONFIG.session&&window.DANMU_CONFIG.session.logged_in&&(window.addEventListener("hashchange",w),w(),window.addEventListener("hashchange",function(){m.has(F())&&setTimeout(M,600)}),setTimeout(M,800))})})()});var nn=ve(()=>{var Fi=he(Ne()),Di=he(Pe()),Mi=he(Re()),Ni=he(Oe()),Pi=he(qe()),Ri=he(He()),Oi=he(je()),qi=he(Ue()),Hi=he(Ke()),ji=he(We()),Ui=he(Ge()),Ki=he(ze()),Wi=he(Ve()),Gi=he(Je()),zi=he(Ye()),Vi=he(Qe()),Ji=he(Xe()),Yi=he(Ze()),Qi=he(et()),Xi=he(tt()),Zi=he(nt()),es=he(at()),ts=he(it()),ns=he(st()),as=he(ot()),is=he(rt()),ss=he(dt()),os=he(lt()),rs=he(ct()),ds=he(ut()),ls=he(mt()),cs=he(pt()),us=he(vt()),ms=he(ft()),ps=he(ht()),vs=he(gt()),fs=he(yt()),hs=he(bt()),gs=he(wt()),ys=he(St()),bs=he(kt()),ws=he(It()),Ss=he(Tt()),ks=he(_t()),Is=he(Et()),Ts=he($t()),_s=he(xt()),Es=he(Lt()),$s=he(Ct()),xs=he(At()),Ls=he(Bt()),Cs=he(Ft()),As=he(Dt()),Bs=he(Mt()),Fs=he(Nt()),Ds=he(Pt()),Ms=he(Rt()),Ns=he(Ot()),Ps=he(qt()),Rs=he(Ht()),Os=he(jt()),qs=he(Ut()),Hs=he(Kt()),js=he(Wt()),Us=he(Gt()),Ks=he(zt()),Ws=he(Vt()),Gs=he(Jt())});nn();})();
